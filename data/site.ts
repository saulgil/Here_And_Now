import type { SiteSettings } from '@/types';

// Migrated from scripts/seed-sanity.ts (siteSettings singleton) and the
// hardcoded defaults already used by components/layout/Header.tsx and
// components/layout/Footer.tsx.
export const SITE_SETTINGS: SiteSettings = {
  siteName: 'Here & Now',
  logo: { asset: { url: '/images/logo-here-and-now.svg' } },
  tagline: {
    es: 'Alquiler de coches Mercedes en Ibiza y Alicante',
    en: 'Mercedes Car Rental in Ibiza and Alicante',
  },
  phone: '+34625305620',
  email: 'info@hereandnowibiza.com',
  whatsappUrl: 'https://wa.me/34625305620',
  instagramUrl: 'https://www.instagram.com/hereandnowibiza/',
  threadsUrl: 'https://www.threads.net/@hereandnowibiza',
  mainNav: [
    {
      label: { es: 'Nuestra flota', en: 'Our fleet' },
      href: '/flota',
    },
    {
      label: { es: 'Ibiza', en: 'Ibiza' },
      href: '/ibiza',
      children: [
        { label: { es: 'Aeropuerto de Ibiza' }, href: '/ibiza/aeropuerto' },
        { label: { es: 'Puerto de Ibiza' }, href: '/ibiza/puerto' },
      ],
    },
    {
      label: { es: 'Alicante', en: 'Alicante' },
      href: '/alicante',
      children: [
        { label: { es: 'Aeropuerto de Alicante' }, href: '/alicante/aeropuerto' },
        { label: { es: 'Oficina El Campello' }, href: '/alicante/oficina' },
        { label: { es: 'Puerto de Alicante' }, href: '/alicante/puerto' },
      ],
    },
    { label: { es: 'Contacto', en: 'Contact' }, href: '/contacto' },
    {
      label: { es: 'Reservar', en: 'Book' },
      href: '/flota',
      children: [
        { label: { es: 'Alquiler en Ibiza' }, href: '/ibiza' },
        { label: { es: 'Alquiler en Alicante' }, href: '/alicante' },
      ],
    },
  ],
  footerNavCol1: [
    { label: { es: 'Reservar en Ibiza' }, href: '/ibiza' },
    { label: { es: 'Aeropuerto de Ibiza' }, href: '/ibiza/aeropuerto' },
    { label: { es: 'Puerto de Ibiza' }, href: '/ibiza/puerto' },
  ],
  footerNavCol2: [
    { label: { es: 'Reservar en Alicante' }, href: '/alicante' },
    { label: { es: 'Aeropuerto de Alicante' }, href: '/alicante/aeropuerto' },
    { label: { es: 'Oficina El Campello' }, href: '/alicante/oficina' },
    { label: { es: 'Puerto de Alicante' }, href: '/alicante/puerto' },
  ],
  footerNavLegal: [
    { label: { es: 'Términos y Condiciones' }, href: '/terminos-y-condiciones' },
    { label: { es: 'Política de Cancelación' }, href: '/politica-cancelacion' },
    { label: { es: 'Privacidad' }, href: '/privacidad' },
    { label: { es: 'Aviso Legal' }, href: '/aviso-legal' },
    { label: { es: 'Cookies' }, href: '/cookies' },
  ],
};
