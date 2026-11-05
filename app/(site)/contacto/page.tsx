import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getSiteSettings } from '@/lib/data/site';
import { getLocationBySlug } from '@/lib/data/locations';
import type { SiteSettings } from '@/types';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateBreadcrumbSchema, generateContactPageSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ContactForm } from '@/components/shared/ContactForm';
import { DestinationCards } from '@/components/sections/DestinationCards';
import { WhatsAppCTA } from '@/components/shared/WhatsAppCTA';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  path: '/contacto',
  fallbackTitle: 'Contacto — Alquiler de coches Mercedes en Ibiza y Alicante',
  fallbackDescription:
    'Contacta con Here & Now para alquilar un Mercedes en Ibiza o Alicante. Teléfono, WhatsApp, email y formulario de contacto. Te respondemos en menos de 24h.',
});

// Presentation-only formatting of the phone already configured in
// SITE_SETTINGS — the number itself is never hardcoded here.
function formatPhoneEs(phone: string): string {
  const digits = phone.replace(/^\+34/, '');
  const match = digits.match(/^(\d{3})(\d{3})(\d{3})$/);
  return match ? `${match[1]} ${match[2]} ${match[3]}` : phone;
}

export default async function ContactoPage() {
  const settings = (await getSiteSettings()) as SiteSettings;
  const ibizaLocation = getLocationBySlug('ibiza');
  const alicanteLocation = getLocationBySlug('alicante');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';
  const siteName = settings?.siteName ?? 'Here & Now';
  const phone = settings?.phone;
  const whatsappUrl = settings?.whatsappUrl;
  const email = settings?.email;
  const phoneDisplay = phone ? formatPhoneEs(phone) : undefined;

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Contacto', url: `${siteUrl}/contacto` },
    ]),
    generateContactPageSchema({ siteName, path: '/contacto', phone, email }),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Estamos aquí para ayudarte
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Contacta con nosotros
          </h1>
          <p className="text-lg text-[var(--color-vapor)] max-w-xl">
            ¿Tienes dudas sobre tu reserva, nuestra flota o los puntos de recogida en Ibiza y
            Alicante? Escríbenos o llámanos, te respondemos en menos de 24h.
          </p>
        </div>
      </div>

      {/* Main content — form + direct contact */}
      <section className="section-padding" aria-labelledby="contacto-form-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 xl:gap-14 items-start">

            {/* Left — Contact form (reused component) */}
            <div className="bg-[var(--color-stone)] rounded-[var(--radius-md)] p-6 lg:p-8">
              <h2 id="contacto-form-heading" className="text-xl font-semibold text-[var(--color-ink)] mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Right — Direct contact info */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] p-6">
              <h2 className="text-sm font-semibold tracking-[0.1em] uppercase text-[var(--color-vapor)] mb-5">
                Contacto directo
              </h2>
              <ul className="space-y-4">
                {phone && (
                  <li>
                    <a href={`tel:${phone}`} className="flex items-start gap-3 group">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-gold)]">
                        <Phone size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[var(--color-fog)] uppercase tracking-wide">Teléfono</span>
                        <span className="block text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                          {phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                )}
                {whatsappUrl && (
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-gold)]">
                        <MessageCircle size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[var(--color-fog)] uppercase tracking-wide">WhatsApp</span>
                        <span className="block text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                          Escríbenos ahora
                        </span>
                      </span>
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="flex items-start gap-3 group">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-gold)]">
                        <Mail size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[var(--color-fog)] uppercase tracking-wide">Email</span>
                        <span className="block text-sm font-medium text-[var(--color-ink)] break-all group-hover:text-[var(--color-gold)] transition-colors">
                          {email}
                        </span>
                      </span>
                    </a>
                  </li>
                )}
                <li>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-[var(--color-gold)]">
                      <MapPin size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-[var(--color-fog)] uppercase tracking-wide">Oficina en Alicante</span>
                      <span className="block text-sm font-medium text-[var(--color-ink)]">
                        Calle de la Figuera, 5, local 58 — El Campello
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations — Ibiza / Alicante */}
      <DestinationCards ibiza={ibizaLocation} alicante={alicanteLocation} />

      {whatsappUrl && (
        <WhatsAppCTA
          url={whatsappUrl}
          message="Hola, me gustaría más información para alquilar un coche."
        />
      )}
    </>
  );
}
