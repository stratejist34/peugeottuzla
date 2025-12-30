'use client';

const Schema = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Klas Oto | Peugeot & Citroen Özel Servisi",
        "image": "https://peugeottuzla.com/images/klas-oto-peugeot-tuzla.webp",
        "@id": "https://peugeottuzla.com",
        "url": "https://peugeottuzla.com",
        "telephone": "05421985134",
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
        "sameAs": [],
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Peugeot & Citroen Özel Servis Hizmetleri",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Klas Otomotiv"
        },
        "areaServed": {
            "@type": "City",
            "name": "İstanbul"
        },
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
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
};

export default Schema;
