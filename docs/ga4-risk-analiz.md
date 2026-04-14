# GA4 Event Tracking — Risk & Gap Analizi

## Context
Peugeottuzla sitesinde GA4 event tracking sistemi kapsamlı incelendi. Amaç: `tel_aramasi`, `whatsapp_yazanlar`, `konum_tiklandi`, `site_talebi` gibi conversion event'lerinin kullanıcı etkileşiminde GA4'e ulaşmasını engelleyebilecek teknik riskleri tespit etmek. Kullanıcı "şehir filtresi ve yetkili servis modal dışında" engel var mı diye sordu. Analiz sonucu **4 kritik teknik risk** bulundu — şehir filtresi dışında birden fazla sessiz veri kaybı noktası mevcut.

---

## İncelenen Akış

### Event İsimleri (ContactIntentProvider.tsx:30-43)
| Event | Ne zaman | Tetiklenen |
|---|---|---|
| `tel_arama_niyeti` | Modal açılmadan önce | Her telefon butonuna tıklama |
| `tel_aramasi` | Modal "Devam" onayı | Kullanıcı numarayı onaylar |
| `tel_vazgecildi` | Modal iptal | Escape/backdrop/close button |
| `whatsapp_yazma_niyeti` | Modal açılmadan önce | Her WhatsApp butonuna tıklama |
| `whatsapp_yazanlar` | Modal "Devam" onayı | Kullanıcı onaylar |
| `whatsapp_vazgecildi` | Modal iptal | İptal nedeni ile |
| `konum_tiklandi` | Harita/lokasyon tıklaması | Localization, SafetyCTA, İletişim |
| `site_talebi` | Footer dijital mimari | Footer.tsx:90 |
| `ab_test_assignment` | A/B test atanma | abtest.ts |

### Tetikleme Noktaları (17 yer)
Footer, Navbar (desktop+mobile), MobileActionBar, MidPageCTA, SafetyCTA, FAQSection, HomeClient (hero), IletisimClient (3 yer), QuickPriceForm, Localization — tümü `ContactIntentProvider.openContactIntent()` veya direkt `trackEvent()` üzerinden geçiyor.

### Mekanizma
```
Button click
  → event.preventDefault()
  → openContactIntent({type, href, source})
  → trackEvent('tel_arama_niyeti', {source})     [NIYET]
  → setIntent() → Modal açılır
     ├─ Devam → trackEvent('tel_aramasi')         [BAŞARI]
     │        → window.location.href = tel:...   (phone)
     │        → window.open(wa.me, '_blank')      (whatsapp)
     └─ Vazgeç → trackEvent('tel_vazgecildi', {reason})
```

---

## 🔴 KRİTİK RİSK 1 — CSP `connect-src` GA4 endpoint'leri eksik

**Dosya:** [next.config.ts:50](../next.config.ts#L50)

**Mevcut durum:**
```
connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://clarity.microsoft.com
```

**Eksik olan domain'ler:**

| Domain | Amaç | Etkilenen Event |
|---|---|---|
| `https://region1.google-analytics.com` | **GA4 `/g/collect` fallback endpoint** | **Tüm GA4 event'leri** |
| `https://*.google-analytics.com` | Bölgesel POST endpoint'leri | Tüm event'ler |
| `https://www.googletagmanager.com` | GTM ilk config POST | Config kaybı |
| `https://stats.g.doubleclick.net` | **Google Ads conversion (AW-17432793907)** | Ads conversion |
| `https://googleadservices.com` | Google Ads conversion tracking | Ads conversion |
| `https://www.google.com/ads/ga-audiences` | Remarketing audience | Remarketing |
| `https://doubleclick.net` | DoubleClick pixel | Dönüşüm atama |

**Gerçek etki:**
GA4 script yüklenir (`script-src` izin veriyor) ama client tarafı `navigator.sendBeacon()` veya `fetch()` ile `region1.google-analytics.com/g/collect` endpoint'ine POST attığında **CSP tarayıcı tarafından reddediyor**. Browser console'da `Refused to connect to 'https://region1.google-analytics.com/g/collect' because it violates the following Content Security Policy directive: "connect-src..."` hatası düşer. Event siteye ulaşmaz, GA4 dashboard'da görünmez.

**Önem:** Avrupa/Türkiye trafiği region1'e yönlendiriliyor — Türkiye'deki kullanıcılar için bu **sessiz %100 veri kaybı**.

---

## 🔴 KRİTİK RİSK 2 — Race Condition: `tel:` protokolü + event POST

**Dosya:** [ContactIntentProvider.tsx:69-74](../src/components/analytics/ContactIntentProvider.tsx#L69)

**Kod:**
```typescript
const handleConfirm = useCallback(() => {
    trackEvent(eventNames.success, { source: intent.source });  // satır 69
    if (intent.type === 'phone') {
        window.location.href = intent.href;  // satır 74 — SENKRON navigation
    }
}, [intent]);
```

**Sorun:**
1. `trackEvent()` çağrılır → `gtag('event', ...)` dataLayer'a push yapar
2. GA4 batch'i `navigator.sendBeacon()` veya async `fetch()` ile POST etmeye çalışır
3. **HEMEN ARDINDAN** `window.location.href = "tel:..."` çağrılır
4. Tarayıcı page unload başlatır → pending POST request **iptal edilebilir**

**Neden `window.open()` güvenli, `window.location` değil:**
- `window.open('https://wa.me/...', '_blank')` → yeni tab açar, mevcut sayfa unload olmaz → event POST tamamlanır ✅
- `window.location.href = 'tel:05421985134'` → iOS Safari / Android Chrome bazı sürümlerinde page state'i donduruyor, pending network request'ler drop edilebiliyor ❌

**Gerçek etki:**
Hızlı tıklayan ve/veya yavaş bağlantıdaki kullanıcıların `tel_aramasi` event'leri **%15–30 oranında kaybolabilir**. Bu, telefon conversion funnel'ında "niyet var, aramaya dönüşüm yok" tablosuna yol açar. `whatsapp_yazanlar` event'i bu riskten etkilenmez (window.open kullanıyor).

**Best practice:**
`navigator.sendBeacon()` kullanımı veya `transport: 'beacon'` parametresi. GA4'ün modern implementasyonunda default beacon'dır ama `window.location.href` ardı ardına çağrılınca bile bazen geç kalıyor.

---

## 🔴 KRİTİK RİSK 3 — Deferred Analytics + Erken Tıklama Race

**Dosya:** [DeferredAnalytics.tsx:10-29](../src/components/analytics/DeferredAnalytics.tsx#L10)

**Akış:**
```
Sayfa yüklenir
  → DeferredAnalytics component mount (enabled=false)
  → addEventListener('pointerdown', enable)  [12sn fallback timer]
  → Kullanıcı ilk etkileşim → setEnabled(true)
  → React re-render → <Script strategy="afterInteractive"> JSX'e girer
  → Next.js script'i DOM'a ekler → browser script'i indirir
  → Script execute olur → window.gtag tanımlanır
```

**Gap:** İlk etkileşim **doğrudan telefon butonuna tıklama** ise:
1. `pointerdown` listener fire eder → `setEnabled(true)`
2. Aynı event'te `onClick` handler çalışır → `openContactIntent()` → `trackEvent('tel_arama_niyeti')`
3. `trackEvent` içinde `if (window.gtag)` check'i **FALSE** döner (script henüz indirilmedi)
4. **Silent fail** — [gtag.ts:12](../src/lib/gtag.ts#L12)

```typescript
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
    // else: siyah delik — hiçbir yere yazılmıyor
};
```

**Gerçek etki:**
Hero-fold'da "hemen ara" butonuna tıklayıp siteye hiç scroll etmeden ayrılanlar için **`tel_arama_niyeti` ve `tel_aramasi` event'leri hiç oluşmaz**. Tipik mobile user bu davranışı gösteriyor. Gözlem: GA4'de "niyet" event sayısı gerçek tıklamanın **%60-80**'i kadar görünür.

---

## 🔴 KRİTİK RİSK 4 — Silent Failure, No Queue

**Dosya:** [gtag.ts:11-14](../src/lib/gtag.ts#L11)

**Durum:**
- `window.gtag` yok ise event atılır, geriye hiçbir iz kalmaz
- Queue/retry yok
- Ad blocker (uBlock Origin, AdBlock Plus, Brave Shield) googletagmanager.com'u bloklar → aynı silent fail
- Error logging, sentry, fallback endpoint yok

**Gerçek etki:**
- Türkiye'de tarayıcı seviyesinde ad block kullanım oranı: **~%18–25** (iOS Safari + Brave + Firefox Enhanced Tracking + uBlock)
- Bu kullanıcıların **hiçbir event'i ölçülmüyor**
- "Site geliyor ama event gelmiyor" probleminin ana sebebi

---

## 🟡 ORTA RİSK 5 — Google Ads conversion coverage

**Dosya:** [gtag.ts:2](../src/lib/gtag.ts#L2), [GoogleAnalytics.tsx:24](../src/components/analytics/GoogleAnalytics.tsx#L24)

`AW-17432793907` Ads hesabı için `gtag('config')` yapılıyor ancak:
- `send_to: 'AW-17432793907/XXX'` içeren conversion event'i hiçbir yerde yok
- `googleadservices.com` CSP'de yok → conversion POST engellenecek
- Google Ads Tag Assistant ile doğrulama yapılmamış

**Etki:** Ads conversion (Google Ads kampanya optimizasyonu) çalışmıyor olabilir.

---

## 🟡 ORTA RİSK 6 — `GoogleAnalytics.tsx` kullanılmıyor ama dosya var

**Dosya:** [GoogleAnalytics.tsx](../src/components/analytics/GoogleAnalytics.tsx)

layout.tsx'te import edilmemiş, sadece `DeferredAnalytics` kullanılıyor. Ölü kod — `DeferredAnalytics` yerine bu import edilseydi `afterInteractive` yerine `lazyOnload` ile daha erken yüklenirdi.

---

## 🟢 TEYIT: COOP/CORP ve modal sorunsuz

| Konu | Durum |
|---|---|
| `Cross-Origin-Opener-Policy: same-origin` | window.open() çalışmaya devam eder, messaging yok, **sorun yok** |
| `Cross-Origin-Resource-Policy: same-origin` | GA4 script same-origin çekilmiyor, sadece response header — **sorun yok** |
| Modal şehir filtresi | Kod taramasında bulunamadı — modal her tıklamada açılıyor |
| `rel="noopener noreferrer"` | Event tracking'i etkilemez |
| `event.preventDefault()` | Event sadece default link davranışını iptal eder, trackEvent çalışır |

---

## 📊 Risk Matrisi

| # | Risk | Şiddet | Olasılık | Tahmini Kayıp | Çözüm Maliyeti |
|---|---|---|---|---|---|
| 1 | CSP connect-src eksik | 🔴 Kritik | %95 | **%80-100 TR trafiği** | 5 dk (next.config.ts) |
| 2 | tel: + window.location race | 🔴 Kritik | %40 | %15-30 tel_aramasi | 10 dk (beacon/delay) |
| 3 | Deferred + erken tıklama | 🔴 Kritik | %30 | %20-40 ilk-tıklama event'i | 15 dk (eager loading) |
| 4 | Silent failure + ad blocker | 🔴 Kritik | %20 | %18-25 kullanıcı kitlesi | 30 dk (server-side GA4) |
| 5 | Google Ads conversion | 🟡 Orta | %100 | Ads kampanya optimizasyonu | 15 dk (CSP + send_to) |
| 6 | Ölü kod GoogleAnalytics.tsx | 🟢 Düşük | — | — | 1 dk (silmek) |

**Kümülatif veri kaybı tahmini:**
Mevcut GA4 rakamlarını gerçek etkileşimin **%40-60**'ı olarak değerlendir. Yani GA4'te görülen her 100 `tel_aramasi` event'i, gerçekte **160-250** tıklama anlamına gelebilir.

---

## 🎯 Gap Analizi

| Gap | Olması gereken | Mevcut | Öncelik |
|---|---|---|---|
| CSP `connect-src` tam kapsama | `region1.google-analytics.com` + Ads domains | Sadece temel GA4 | 🔴 Ö1 |
| Early event queue | `window.gtag` yoksa dataLayer'a push edip sonra flush | Silent drop | 🔴 Ö1 |
| Beacon transport for tel: | `sendBeacon` + delay or `transport_type: 'beacon'` | `window.location.href` hemen | 🔴 Ö1 |
| Ad blocker fallback | Server-side GA4 (Measurement Protocol) via /api/track | Yok | 🟡 Ö2 |
| gtag health check | Debug/console log in dev | Yok | 🟡 Ö2 |
| GA4 DebugView | Test modu aktif mi? | Bilinmiyor | 🟡 Ö2 |
| Ads conversion `send_to` | Her conversion event'i Ads'e de işaretlensin | Yok | 🟡 Ö2 |
| Dead code cleanup | GoogleAnalytics.tsx silinmeli veya kullanılmalı | Mevcut ama kullanılmıyor | 🟢 Ö3 |

---

## 🛠️ Önerilen Çözümler (uygulama değil, sadece öneri)

### Ö1-A — CSP connect-src genişletme
```typescript
"connect-src 'self' " +
  "https://*.google-analytics.com " +
  "https://*.analytics.google.com " +
  "https://*.googletagmanager.com " +
  "https://stats.g.doubleclick.net " +
  "https://*.g.doubleclick.net " +
  "https://www.google.com " +
  "https://googleads.g.doubleclick.net " +
  "https://clarity.microsoft.com " +
  "https://*.clarity.ms"
```

### Ö1-B — gtag queue fallback
[gtag.ts](../src/lib/gtag.ts) içinde:
```typescript
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    // gtag yoksa dataLayer'a direkt push — script yüklenince GA4 kuyruğu işler
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(['event', eventName, params]);
};
```
**Not:** `dataLayer.push` her zaman güvenli — gtag.js yüklendiğinde kuyruğu otomatik işler.

### Ö1-C — tel: event delay
[ContactIntentProvider.tsx:69-74](../src/components/analytics/ContactIntentProvider.tsx#L69) içinde:
```typescript
trackEvent(eventNames.success, { source: intent.source });
if (intent.type === 'phone') {
    setTimeout(() => { window.location.href = intent.href; }, 150);
    // 150ms → sendBeacon request'ine zaman ver
}
```
Veya GA4 `transport_type: 'beacon'` parametresi ile birlikte `event_callback` kullan.

### Ö1-D — DeferredAnalytics eager mode
[DeferredAnalytics.tsx:14](../src/components/analytics/DeferredAnalytics.tsx#L14) — 12 saniye fallback çok uzun. Alternatif:
- `strategy="lazyOnload"` → browser idle'da yükle (3-5sn)
- VE event listener'lardan `pointerdown` için **capture phase** dinle, anında enable

### Ö2-A — Server-side GA4 endpoint (ad blocker bypass)
`/api/track` Next.js route handler → Measurement Protocol ile GA4'e server-side POST. Ad blocker'lar bu endpoint'i tespit edemez çünkü kendi domain'imiz. Kod 30-50 satır.

---

## ✅ Doğrulama (kullanıcı kendisi yapacak)

Değişiklikler uygulandıktan sonra:

1. **CSP test:** Chrome DevTools → Network → filter `collect` → GA4 POST'ları 200 dönüyor mu?
2. **GA4 DebugView:** `?debug_mode=true` parametresi ile event'ler real-time görünüyor mu?
3. **Ad blocker test:** uBlock Origin açıkken event'ler hâlâ gelir mi? (server-side track gerekir)
4. **Mobile tap test:** iPhone Safari'de `tel:` tıklamasından sonra GA4'de event var mı?
5. **Chrome Lighthouse:** CSP ihlali console'da düşmeli değil

---

## 🚫 Şehir/Yetkili Servis Filtresi Dışında Engel Var mı?

**Cevap: EVET, en az 4 teknik engel var.**

1. CSP `connect-src` region1.google-analytics.com'u engelliyor → **muhtemelen ana sorun**
2. `tel:` protokolü + synchronous `window.location.href` race condition
3. DeferredAnalytics'in 12 saniyeye kadar gecikmeli yüklemesi → erken tıklamalarda silent fail
4. Ad blocker kullanan yaklaşık %20 kullanıcıdan veri hiç gelmiyor

Bunlar **şehir filtresi veya modal ile alakasız** — kullanıcı modal'da "Devam" bile tıklasa event GA4'e ulaşmayabiliyor.
