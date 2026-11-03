import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, MapPin } from 'lucide-react';

type NavItem = { label: { es: string }; href: string };
type SiteSettings = {
  siteName?: string;
  logo?: { asset?: { url: string } };
  phone?: string;
  instagramUrl?: string;
  threadsUrl?: string;
  footerNavCol1?: NavItem[];
  footerNavCol2?: NavItem[];
  footerNavLegal?: NavItem[];
};

interface FooterProps {
  settings: SiteSettings | null;
}

export function Footer({ settings }: FooterProps) {
  const siteName = settings?.siteName ?? 'Here & Now';
  const logoUrl = settings?.logo?.asset?.url;
  const phone = settings?.phone ?? '+34 625 305 620';

  const col1 = settings?.footerNavCol1 ?? [
    { label: { es: 'Reservar en Ibiza' }, href: '/ibiza' },
    { label: { es: 'Aeropuerto de Ibiza' }, href: '/ibiza/aeropuerto' },
    { label: { es: 'Puerto de Ibiza' }, href: '/ibiza/puerto' },
  ];
  const col2 = settings?.footerNavCol2 ?? [
    { label: { es: 'Reservar en Alicante' }, href: '/alicante' },
    { label: { es: 'Aeropuerto de Alicante' }, href: '/alicante/aeropuerto' },
    { label: { es: 'Oficina El Campello' }, href: '/alicante/oficina' },
    { label: { es: 'Puerto de Alicante' }, href: '/alicante/puerto' },
  ];
  const legal = settings?.footerNavLegal ?? [
    { label: { es: 'Términos y Condiciones' }, href: '/terminos-y-condiciones' },
    { label: { es: 'Política de Cancelación' }, href: '/politica-cancelacion' },
    { label: { es: 'Privacidad' }, href: '/privacidad' },
    { label: { es: 'Aviso Legal' }, href: '/aviso-legal' },
    { label: { es: 'Cookies' }, href: '/cookies' },
  ];

  return (
    <footer className="bg-[var(--color-night)] text-[var(--color-canvas)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" aria-label={`${siteName} — inicio`} className="inline-block mb-6">
              {logoUrl ? (
                <Image src={logoUrl} alt={siteName} width={120} height={23} className="h-6 w-auto brightness-0 invert" />
              ) : (
                <span className="font-bold text-lg">{siteName}</span>
              )}
            </Link>
            <p className="text-sm text-[var(--color-fog)] mb-6 leading-relaxed">
              Alquiler exclusivo de coches Mercedes en Ibiza y Alicante.
            </p>
            <div className="flex gap-4">
              {settings?.instagramUrl && (
                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-fog)] hover:text-[var(--color-gold)] transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {settings?.threadsUrl && (
                <a href={settings.threadsUrl} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-[var(--color-fog)] hover:text-[var(--color-gold)] transition-colors text-sm font-medium">
                  @
                </a>
              )}
            </div>
          </div>

          {/* Col 2 — Ibiza */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5">Ibiza</h3>
            <ul className="space-y-3">
              {col1.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors">
                    {item.label.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Alicante */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5">Alicante</h3>
            <ul className="space-y-3">
              {col2.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors">
                    {item.label.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors">
                  <Phone size={14} className="flex-shrink-0" />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.es/maps/place/Alquiler+Coches+Here+and+Now/@38.405728,-0.4103166,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors"
                >
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>Calle de la Figuera, 5<br />03560 El Campello, Alicante</span>
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contacto" className="text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors">
                  Formulario de contacto →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-[var(--color-night-2)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-fog)]">
            © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-[var(--color-fog)] hover:text-[var(--color-vapor)] transition-colors">
                  {item.label.es}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
