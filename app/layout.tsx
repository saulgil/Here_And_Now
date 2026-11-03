import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es'),
  title: {
    default: 'Alquiler de coches Mercedes en Ibiza y Alicante | Here & Now',
    template: '%s | Here & Now',
  },
  description: 'Alquila un Mercedes premium en Ibiza o Alicante. Flota exclusiva, recogida en aeropuerto o puerto. Reserva online sin costes ocultos.',
  openGraph: {
    siteName: 'Here & Now',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/ClashGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ClashGrotesk-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
