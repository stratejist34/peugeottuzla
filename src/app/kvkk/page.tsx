import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | Klas Oto Peugeot & Citroen Servis',
    description: 'Klas Oto 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
};

export default function KVKKAydinlatma() {
    return (
        <main className="min-h-screen bg-[#050505] pt-40 pb-24 px-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-heading text-white mb-4 uppercase">KVKK Aydınlatma Metni</h1>
                <p className="text-gray-500 text-sm mb-12">6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında</p>

                <div className="prose-legal space-y-8 text-gray-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">1. Veri Sorumlusu</h2>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Klas Oto Peugeot & Citroen Özel Servis tarafından aşağıda açıklanan kapsamda işlenmektedir.
                        </p>
                        <p className="mt-2">
                            <strong className="text-white">Unvan:</strong> Klas Oto Peugeot & Citroen Özel Servis<br />
                            <strong className="text-white">Adres:</strong> Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul<br />
                            <strong className="text-white">Telefon:</strong> 0542 198 51 34
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">2. Kişisel Verilerin İşlenme Amacı</h2>
                        <p>Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddeleri kapsamında aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Araç bakım, onarım ve servis hizmetlerinin yürütülmesi</li>
                            <li>Servis randevu süreçlerinin yönetimi</li>
                            <li>Fiyat teklifi ve maliyet bilgilendirmesi yapılması</li>
                            <li>İletişim faaliyetlerinin yürütülmesi</li>
                            <li>Müşteri memnuniyetinin ölçülmesi ve hizmet kalitesinin artırılması</li>
                            <li>Yasal düzenlemelerin gerektirdiği yükümlülüklerin yerine getirilmesi</li>
                            <li>Hukuki süreçlerin takibi ve yürütülmesi</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">3. İşlenen Kişisel Veri Kategorileri</h2>
                        <div className="overflow-x-auto mt-2">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-3 pr-4 text-white text-xs font-bold uppercase">Veri Kategorisi</th>
                                        <th className="py-3 text-white text-xs font-bold uppercase">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400 text-sm">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-4 text-white/80">Kimlik bilgileri</td>
                                        <td className="py-3">Ad, soyad</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-4 text-white/80">İletişim bilgileri</td>
                                        <td className="py-3">Telefon numarası, e-posta adresi</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-4 text-white/80">Araç bilgileri</td>
                                        <td className="py-3">Marka, model, yıl, plaka, kilometre, şasi numarası</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-4 text-white/80">İşlem bilgileri</td>
                                        <td className="py-3">Servis geçmişi, yapılan işlemler, kullanılan parçalar</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-4 text-white/80">Teknik veriler</td>
                                        <td className="py-3">IP adresi, tarayıcı bilgileri, cihaz türü (web sitesi üzerinden)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">4. Kişisel Verilerin Aktarılması</h2>
                        <p>Kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddelerine uygun olarak:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong className="text-white">Yasal zorunluluk halinde:</strong> Yetkili kamu kurum ve kuruluşlarına</li>
                            <li><strong className="text-white">Hizmet sunumu için:</strong> Yedek parça tedarikçilerine (yalnızca araç bilgileri, parça siparişi amacıyla)</li>
                            <li><strong className="text-white">Teknik altyapı için:</strong> Web sitesi barındırma ve analitik hizmet sağlayıcılarına (anonim veriler)</li>
                        </ul>
                        <p className="mt-2">Kişisel verileriniz yurt dışına aktarılmamaktadır. Analitik hizmetleri (Google Analytics, Microsoft Clarity) anonim ve toplu istatistik verileri işlemektedir.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                        <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Web sitesi iletişim formu ve WhatsApp üzerinden ilettiğiniz bilgiler</li>
                            <li>Telefon görüşmeleri sırasında paylaştığınız bilgiler</li>
                            <li>Servis hizmeti sırasında fiziksel olarak alınan araç ve iletişim bilgileri</li>
                            <li>Web sitesi çerezleri aracılığıyla otomatik olarak toplanan teknik veriler</li>
                        </ul>
                        <p className="mt-2"><strong className="text-white">Hukuki sebepler:</strong> KVKK m.5/2-c (sözleşmenin ifası), m.5/2-ç (hukuki yükümlülük), m.5/2-f (meşru menfaat)</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">6. Veri Sahibinin Hakları (KVKK m.11)</h2>
                        <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                            <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                            <li>Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">7. Veri Saklama Süresi</h2>
                        <p>Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri kapsamında muhafaza edilir:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong className="text-white">Servis kayıtları:</strong> 10 yıl (Türk Ticaret Kanunu)</li>
                            <li><strong className="text-white">İletişim bilgileri:</strong> İş ilişkisi süresince ve sonrasında 2 yıl</li>
                            <li><strong className="text-white">Web sitesi verileri:</strong> 26 ay (analitik veriler), oturum süresince (çerezler)</li>
                        </ul>
                        <p className="mt-2">Saklama süresi dolan veriler, KVKK&apos;nın 7. maddesi uyarınca silinir, yok edilir veya anonim hale getirilir.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">8. Başvuru Yöntemi</h2>
                        <p>KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong className="text-white">Yazılı başvuru:</strong> Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul</li>
                            <li><strong className="text-white">Telefon:</strong> 0542 198 51 34</li>
                            <li><strong className="text-white">E-posta:</strong> info@peugeottuzla.com</li>
                        </ul>
                        <p className="mt-2">Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç 30 gün içerisinde sonuçlandırılır. Başvurular ücretsizdir; ancak işlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen ücret tarifesi uygulanabilir.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-3">9. Değişiklikler</h2>
                        <p>Bu aydınlatma metni, yasal düzenlemeler ve veri işleme faaliyetlerimizdeki değişikliklere paralel olarak güncellenebilir. Güncel metin her zaman bu sayfada yayınlanır.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
