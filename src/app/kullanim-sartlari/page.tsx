import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Kullanım Şartları | Klas Oto Peugeot & Citroen Servis',
    description: 'Klas Oto web sitesi kullanım şartları. Site kullanımına ilişkin koşullar ve sorumluluk sınırları.',
};

export default function KullanimSartlari() {
    return (
        <main className="min-h-screen bg-[#050505] pt-40 pb-24 px-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-heading text-white mb-4 uppercase">Kullanım Şartları</h1>
                <p className="text-gray-500 text-sm mb-12">Son güncelleme: 6 Mart 2025</p>

                <div className="prose-legal space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">1. Genel Bilgiler</h2>
                        <p>
                            Bu web sitesi, Klas Oto Peugeot & Citroen Özel Servis tarafından işletilmektedir. Web sitemizi kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.
                        </p>
                        <p className="mt-2">
                            Klas Oto, bağımsız bir özel oto servis işletmesidir. Peugeot, Citroen veya Stellantis N.V. ile herhangi bir yetkilendirme, franchise veya bayilik ilişkisi bulunmamaktadır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">2. Hizmet Kapsamı</h2>
                        <p>Web sitemiz, Klas Oto&apos;nun sunduğu oto bakım ve onarım hizmetleri hakkında bilgi vermek amacıyla hazırlanmıştır. Site üzerindeki bilgiler genel bilgilendirme amaçlıdır ve bir sözleşme teklifi niteliği taşımaz.</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Fiyat bilgileri tahmini olup, araç durumuna göre değişkenlik gösterebilir</li>
                            <li>İşlem süreleri yaklaşık değerlerdir</li>
                            <li>Servis randevusu, karşılıklı onay ile kesinleşir</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">3. Fikri Mülkiyet</h2>
                        <p>Site içeriğindeki tüm metin, görsel, grafik, logo ve tasarımlar Klas Oto&apos;ya aittir ve telif hakkı yasalarıyla korunmaktadır. İçeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.</p>
                        <p className="mt-2">Peugeot ve Citroen markaları, ilgili şirketlerinin tescilli ticari markalarıdır. Bu markalar yalnızca hizmet tanımlama amacıyla kullanılmaktadır.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">4. Sorumluluk Sınırı</h2>
                        <p>Klas Oto, web sitesinde yayınlanan bilgilerin doğruluğu ve güncelliği konusunda azami özeni gösterir. Ancak:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Site içeriğindeki teknik bilgiler genel rehberlik amaçlıdır, profesyonel teşhis yerine geçmez</li>
                            <li>Fiyat bilgileri değişiklik gösterebilir, güncel fiyatlar için iletişime geçilmelidir</li>
                            <li>Dış bağlantılardaki içeriklerden Klas Oto sorumlu tutulamaz</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">5. Garanti Koşulları</h2>
                        <p>Klas Oto bünyesinde gerçekleştirilen işlemler için sağlanan garanti koşulları:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Parça garantisi: Orijinal ve OEM parçalarda üretici garantisi geçerlidir</li>
                            <li>İşçilik garantisi: Yapılan işlem türüne göre 6 ay ile 1 yıl arasında değişir</li>
                            <li>Garanti kapsamı: Normal kullanım koşullarında ortaya çıkan arızalar için geçerlidir</li>
                            <li>Garanti dışı durumlar: Kaza, su basması, yetkisiz müdahale ve normal aşınma garanti kapsamı dışındadır</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">6. Kullanıcı Yükümlülükleri</h2>
                        <p>Web sitemizi kullanan ziyaretçiler:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Siteyi yalnızca yasal amaçlarla kullanmayı kabul eder</li>
                            <li>Site işleyişini bozmaya yönelik faaliyetlerde bulunmamayı taahhüt eder</li>
                            <li>İletişim formlarında doğru ve güncel bilgi vermeyi kabul eder</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">7. Uygulanacak Hukuk</h2>
                        <p>Bu kullanım şartları, Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklarda İstanbul Anadolu Mahkemeleri ve İcra Daireleri yetkilidir.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">8. İletişim</h2>
                        <p>
                            Kullanım şartları hakkında sorularınız için:<br />
                            <strong className="text-white">Telefon:</strong> 0542 198 51 34<br />
                            <strong className="text-white">Adres:</strong> Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
