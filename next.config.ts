import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
  },

  async redirects() {
    return [
      // ============ FEED URL'LERİ ============
      { source: '/:slug/feed', destination: '/:slug', permanent: true },
      { source: '/:slug/feed/', destination: '/:slug', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
      { source: '/comments/feed/', destination: '/', permanent: true },

      // ============ KATEGORİ URL'LERİ ============
      { source: '/category/citroen', destination: '/rehber', permanent: true },
      { source: '/category/peugeot', destination: '/rehber', permanent: true },
      { source: '/category/rehberler', destination: '/rehber', permanent: true },
      { source: '/category/tips-tricks', destination: '/rehber', permanent: true },
      { source: '/category/:slug', destination: '/rehber', permanent: true },
      { source: '/category/:slug/feed', destination: '/rehber', permanent: true },

      // ============ TAG URL'LERİ ============
      { source: '/tag/:slug', destination: '/rehber', permanent: true },
      { source: '/tag/:slug/feed', destination: '/rehber', permanent: true },
      { source: '/tag/:slug/feed/', destination: '/rehber', permanent: true },

      // ============ BLOG & AUTHOR ============
      { source: '/blog', destination: '/rehber', permanent: true },
      { source: '/blog/', destination: '/rehber', permanent: true },
      { source: '/blog-haberler', destination: '/rehber', permanent: true },
      { source: '/blog/:slug', destination: '/:slug', permanent: true },
      { source: '/author/:slug', destination: '/', permanent: true },
      { source: '/author/:slug/feed', destination: '/', permanent: true },

      // ============ SEARCH URL'LERİ ============
      { source: '/search/:path*', destination: '/', permanent: true },

      // ============ REHBER ALT-YOL ============
      { source: '/rehber/:slug', destination: '/:slug', permanent: true },

      // ============ 404 SLUG DÜZELTMELERİ ============
      { source: '/peugeot-servis-kurtkoy', destination: '/kurtkoy-peugeot-servisi', permanent: true },
      { source: '/peugeot-servis-kurtkoy/', destination: '/kurtkoy-peugeot-servisi', permanent: true },
      { source: '/peugeot-307-kronik-arizalar-bakim-rehberi', destination: '/peugeot-307-kronik-arizalar-ve-bakim-rehberi', permanent: true },
      { source: '/peugeot-307-kronik-arizalar-bakim-rehberi/', destination: '/peugeot-307-kronik-arizalar-ve-bakim-rehberi', permanent: true },
      { source: '/peugeot-308-kronik-problemler-rehberi', destination: '/peugeot-308-kronik-sorunlari-pendikte-uzman-cozumler', permanent: true },
      { source: '/peugeot-308-kronik-problemler-rehberi/', destination: '/peugeot-308-kronik-sorunlari-pendikte-uzman-cozumler', permanent: true },
      { source: '/peugeot-kronik-sorunlari-kapsamli-rehber', destination: '/peugeot-kronik-sorunlari-kapsamli-cozum-rehberi-2025', permanent: true },
      { source: '/peugeot-hdi-motor-bakimi', destination: '/peugeot-citroen-hdi-motor-bakimi', permanent: true },
      { source: '/al4-sanziman-koruyucu-bakim-programi', destination: '/al4-sanziman-tamir-bakim', permanent: true },
      { source: '/al4-sanziman-koruyucu-bakim-programi/', destination: '/al4-sanziman-tamir-bakim', permanent: true },
      { source: '/peugeot-periyodik-bakim-programlari', destination: '/peugeot-periyodik-bakimlar', permanent: true },
      { source: '/peugeot-periyodik-bakim-programlari/', destination: '/peugeot-periyodik-bakimlar', permanent: true },
      { source: '/peugeot-citroen-hdi-motor-bakimi-yag-degisimi', destination: '/peugeot-citroen-hdi-motor-bakimi', permanent: true },
      { source: '/peugeot-hdi-motor-dpf-temizleme', destination: '/peugeot-hdi-motor-dpf-temizleme-gebze-klas-oto-6-ay-garanti', permanent: true },
      { source: '/dpf-egr-koruma-paketi', destination: '/peugeot-hdi-motor-dpf-temizleme-gebze-klas-oto-6-ay-garanti', permanent: true },
      { source: '/dpf-egr-koruma-paketi/', destination: '/peugeot-hdi-motor-dpf-temizleme-gebze-klas-oto-6-ay-garanti', permanent: true },
      { source: '/puretech-triger-degisimi-fiyatlari-2025', destination: '/1-2-puretech-motor-triger-degisimi-fiyati-2025', permanent: true },
      { source: '/peugeot-308-kronik-sorunlari', destination: '/peugeot-308-kronik-sorunlari-pendikte-uzman-cozumler', permanent: true },
      { source: '/peugeot-kronik-sorunlari', destination: '/peugeot-kronik-sorunlari-kapsamli-cozum-rehberi-2025', permanent: true },

      // ============ ENGLISH → TURKISH ============
      { source: '/about', destination: '/hakkimizda', permanent: true },
      { source: '/about/', destination: '/hakkimizda', permanent: true },
      { source: '/contact', destination: '/iletisim', permanent: true },
      { source: '/contact/', destination: '/iletisim', permanent: true },
      { source: '/services', destination: '/servisler', permanent: true },
      { source: '/services/', destination: '/servisler', permanent: true },
      { source: '/servis', destination: '/servisler', permanent: true },

      // ============ WP ALTYAPI URL'LERİ ============
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },

      // ============ DEMO İÇERİKLER ============
      { source: '/maecenas-ultricies-mieget-omauris', destination: '/', permanent: true },
      { source: '/necsagittis-aliquam-malesuada', destination: '/', permanent: true },
      { source: '/ullamcorper-velit-sed-pretium-neque', destination: '/', permanent: true },
      { source: '/how-to-prevent-rust-on-your-car', destination: '/', permanent: true },
      { source: '/pretium-quam-vulputate-dignissim', destination: '/', permanent: true },
      { source: '/what-to-buy-oe-or-normal-tyres', destination: '/', permanent: true },
      { source: '/fermentum-iaculis-eunon-phasellus', destination: '/', permanent: true },
      { source: '/cras-adipiscing-enimeu-turpis-egestas', destination: '/', permanent: true },
      { source: '/dictumst-vestibulum-rhoncus-pellentesque', destination: '/', permanent: true },
      { source: '/accumsan-winonisl-misi-scelerisque', destination: '/', permanent: true },
      { source: '/do-you-need-to-clean-your-engine-bay', destination: '/', permanent: true },
      { source: '/phasellus-faucibus-scelerisque-eleifend', destination: '/', permanent: true },
      { source: '/varius-sitamet-mattis-vulputate-enim', destination: '/', permanent: true },
      { source: '/1481-2', destination: '/', permanent: true },
      { source: '/are-car-prices-increasing-and-why', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

