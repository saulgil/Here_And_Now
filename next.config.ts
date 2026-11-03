import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },

  async redirects() {
    return [
      // Fleet
      { source: '/nuestra-flota', destination: '/flota', permanent: true },
      // Location landings
      { source: '/alquiler-coches-ibiza-mercedes', destination: '/ibiza', permanent: true },
      { source: '/alquiler-coches-alicante-mercedes', destination: '/alicante', permanent: true },
      { source: '/alquiler-coches-mercedes', destination: '/', permanent: true },
      // Contact
      { source: '/contacto-alquiler-coches-alicante-ibiza', destination: '/contacto', permanent: true },
      { source: '/contacto', destination: '/contacto', permanent: false },
      // Legal
      { source: '/politica-privacidad', destination: '/privacidad', permanent: true },
      { source: '/politica-de-cookies-ue', destination: '/cookies', permanent: true },
      { source: '/politica-de-cancelacion-y-devolucion', destination: '/politica-cancelacion', permanent: true },
      { source: '/reembolso_devoluciones', destination: '/terminos-y-condiciones', permanent: true },
      // Search/utility
      { source: '/busqueda-coches-de-alquiler', destination: '/flota', permanent: true },
      // Vehicle informative pages
      { source: '/mercedes-clase-v-220d-avantgard-largo-ibiza', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
      { source: '/mercedes-clase-v-220d-largo', destination: '/flota', permanent: true },
      { source: '/mercedes-glc-220d-4matic', destination: '/flota', permanent: true },
      // WooCommerce products
      { source: '/producto/mercedes-clase-v-220d-avantgard-largo-ibiza', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
      { source: '/producto/mercedes-clase-v-220d-avantgard-largo', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
      // Blog/author
      { source: '/hola-mundo', destination: '/', permanent: true },
      // WooCommerce taxonomies
      { source: '/brw_Pasajeros/:path*', destination: '/flota', permanent: true },
      { source: '/brw_tipo/:path*', destination: '/flota', permanent: true },
      { source: '/categoria-producto/ibiza/:path*', destination: '/ibiza', permanent: true },
      { source: '/categoria-producto/alicante/:path*', destination: '/alicante', permanent: true },
      // WP pages
      { source: '/finalizar-compra', destination: '/carrito', permanent: false },
    ];
  },
};

export default config;
