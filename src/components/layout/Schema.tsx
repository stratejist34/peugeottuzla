'use client';

const SAME_AS_URLS: string[] = [
    "https://www.google.com/maps/place/Peugeot+Citroen+Servis+Klas+Oto/@40.8511798,29.3038184,17z/data=!3m1!4b1!4m6!3m5!1s0x14cadda898056a21:0xda4a34066adfe388!8m2!3d40.8511798!4d29.3038184!16s%2Fg%2F11xzp1rpzx",
    "https://www.instagram.com/peugeottuzla/",
];

const Schema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AutoRepair",
                "@id": "https://peugeottuzla.com/#business",
                "name": "Klas Oto | Peugeot & Citroen Özel Servisi",
                "url": "https://peugeottuzla.com",
                "image": {
                    "@type": "ImageObject",
                    "@id": "https://peugeottuzla.com/#logo",
                    "url": "https://peugeottuzla.com/images/klas-oto-peugeot-tuzla.webp",
                    "width": 1200,
                    "height": 630
                },
                "telephone": "+905421985134",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Aydıntepe, Fedakar Sokağı Tuzla oto Sanayi Sitesi B-2 Blok No:39/123",
                    "addressLocality": "Tuzla",
                    "addressRegion": "İstanbul",
                    "postalCode": "34903",
                    "addressCountry": "TR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 40.8511798,
                    "longitude": 29.3038184
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    "opens": "08:30",
                    "closes": "19:00"
                },
                "description": "Tuzla'da 20 yılı aşkın deneyimle Peugeot ve Citroen araçlarına özel servis hizmeti. Orijinal yedek parça, bilgisayarlı arıza tespiti ve garantili işçilik.",
                "foundingDate": "2004",
                "logo": { "@id": "https://peugeottuzla.com/#logo" },
                "hasMap": "https://www.google.com/maps/place/Peugeot+Citroen+Servis+Klas+Oto/@40.8511798,29.3038184,17z/data=!3m1!4b1!4m6!3m5!1s0x14cadda898056a21:0xda4a34066adfe388!8m2!3d40.8511798!4d29.3038184!16s%2Fg%2F11xzp1rpzx",
                "currenciesAccepted": "TRY",
                "paymentAccepted": "Nakit, Kredi Kartı",
                "knowsAbout": [
                    "Peugeot servisi",
                    "Citroen servisi",
                    "DS servisi",
                    "BlueHDi motor bakımı",
                    "Triger kayışı değişimi",
                    "Bilgisayarlı arıza tespiti",
                    "Periyodik bakım",
                    "Orijinal yedek parça"
                ],
                "priceRange": "$$",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.6",
                    "reviewCount": "50",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                ...(SAME_AS_URLS.length > 0 && { "sameAs": SAME_AS_URLS })
            },
            {
                "@type": "Service",
                "@id": "https://peugeottuzla.com/#service",
                "serviceType": "Peugeot & Citroen Özel Servis Hizmetleri",
                "provider": { "@id": "https://peugeottuzla.com/#business" },
                "areaServed": [
                    { "@type": "City", "name": "Tuzla" },
                    { "@type": "City", "name": "Pendik" },
                    { "@type": "City", "name": "Gebze" },
                    { "@type": "City", "name": "Kartal" }
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Klas Oto Servis Hizmetleri",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Periyodik Bakım",
                                "description": "Peugeot ve Citroen araçlar için her 15.000 km'de bir yapılması gereken kapsamlı yağ ve filtre bakımı."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Triger Kayışı Değişimi",
                                "description": "BlueHDi motorlar için kritik öneme sahip triger seti ve devirdaim pompası değişimi."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Bilgisayarlı Arıza Tespiti",
                                "description": "Orijinal diagnostik cihazları ile Peugeot & Citroen araçlardaki elektronik arızaların kesin tespiti."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://peugeottuzla.com/#website",
                "url": "https://peugeottuzla.com",
                "name": "Klas Oto | Peugeot & Citroen Özel Servisi",
                "publisher": { "@id": "https://peugeottuzla.com/#business" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", ".speakable"]
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default Schema;
