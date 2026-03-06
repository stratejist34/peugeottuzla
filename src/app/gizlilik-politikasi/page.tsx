import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Klas Oto Peugeot & Citroen Servis',
    description: 'Klas Oto gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.',
};

export default function GizlilikPolitikasi() {
    return (
        <main className="min-h-screen bg-[#050505] pt-40 pb-24 px-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-heading text-white mb-4 uppercase">Gizlilik Politikası</h1>
                <p className="text-gray-500 text-sm mb-12">Son güncelleme: 6 Mart 2025</p>

                <div className="prose-legal space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">1. Veri Sorumlusu</h2>
                        <p>
                            Bu web sitesi, Klas Oto Peugeot & Citroen Özel Servis (&quot;Klas Oto&quot;) tarafından işletilmektedir.
                        </p>
                        <p className="mt-2">
                            <strong className="text-white">Adres:</strong> Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul<br />
                            <strong className="text-white">Telefon:</strong> 0542 198 51 34<br />
                            <strong className="text-white">E-posta:</strong> info@peugeottuzla.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">2. Toplanan Veriler</h2>
                        <p>Web sitemizi ziyaret ettiğinizde aşağıdaki veriler toplanabilir:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong className="text-white">İletişim bilgileri:</strong> Ad, telefon numarası (iletişim formu veya WhatsApp üzerinden paylaştığınızda)</li>
                            <li><strong className="text-white">Araç bilgileri:</strong> Marka, model, plaka, kilometre (servis talebi sırasında)</li>
                            <li><strong className="text-white">Teknik veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri, sayfa görüntüleme verileri</li>
                            <li><strong className="text-white">Çerez verileri:</strong> Oturum çerezleri, analitik çerezleri (Google Analytics, Microsoft Clarity)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">3. Verilerin İşlenme Amacı</h2>
                        <p>Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Servis randevusu oluşturma ve yönetimi</li>
                            <li>Araç bakım ve onarım hizmetlerinin sunulması</li>
                            <li>Fiyat teklifi hazırlanması</li>
                            <li>Müşteri memnuniyeti ve hizmet kalitesinin artırılması</li>
                            <li>Web sitesi performansının analizi ve iyileştirilmesi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">4. Çerez Kullanımı</h2>
                        <p>Web sitemiz aşağıdaki çerez türlerini kullanmaktadır:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong className="text-white">Zorunlu çerezler:</strong> Web sitesinin düzgün çalışması için gereklidir</li>
                            <li><strong className="text-white">Analitik çerezler:</strong> Google Analytics (ziyaretçi istatistikleri), Microsoft Clarity (kullanıcı davranış analizi)</li>
                        </ul>
                        <p className="mt-2">Analitik çerezler, kullanıcı etkileşimi başlayana kadar yüklenmez (deferred loading).</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">5. Verilerin Paylaşımı</h2>
                        <p>Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. Analitik hizmet sağlayıcıları (Google, Microsoft) yalnızca anonim ve toplu istatistik verilere erişim sağlar.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">6. Veri Güvenliği</h2>
                        <p>Kişisel verilerinizin güvenliği için SSL/TLS şifreleme, güvenli sunucu altyapısı ve erişim kontrol mekanizmaları kullanılmaktadır.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">7. Haklarınız</h2>
                        <p>6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                            <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                        </ul>
                        <p className="mt-2">Bu haklarınızı kullanmak için 0542 198 51 34 numarasından veya info@peugeottuzla.com adresinden bizimle iletişime geçebilirsiniz.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">8. Değişiklikler</h2>
                        <p>Bu gizlilik politikası, yasal gerekliliklere veya hizmet değişikliklerine bağlı olarak güncellenebilir. Güncel metin her zaman bu sayfada yayınlanır.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
