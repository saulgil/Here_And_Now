import Link from 'next/link';
import Image from 'next/image';

// ── Design A — Luxury Minimal ──────────────────────────────────────────────
// Concepto: Servicio privado. No rent-a-car, no comparador. Más cercano
// a un concierge de transporte premium que a una web de alquiler convencional.
//
// Palette: blanco puro / antracita / oro refinado
// Tipo: Cormorant Garamond (display) + ClashGrotesk (cuerpo)
// Composición: editorial asimétrica, negativo generoso, fotografía protagonista
// Hover: lift 2px, photo zoom 1.02–1.03, botones step (underline grow)

const CARS = [
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo',
    nameShort: 'Clase V 250 d',
    variant: 'Avantgarde Largo',
    location: 'Ibiza',
    locationHref: '/ibiza',
    price: 130,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/01.png',
    imageHover: '/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/02.png',
  },
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo-4matic',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC',
    nameShort: 'Clase V 250 d 4MATIC',
    variant: 'Avantgarde Largo',
    location: 'Alicante',
    locationHref: '/alicante',
    price: 140,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo/01.png',
    imageHover: '/images/cars/mercedes-clase-v-250d-avantgarde-largo/02.png',
  },
];

// ── Trust claims (minimal, no icons) ──────────────────────────────────────
const CLAIMS = [
  { title: 'Solo Mercedes-Benz', body: 'Flota de un único fabricante. Ninguna concesión en la elección del vehículo.' },
  { title: 'Sin costes ocultos', body: 'El precio incluye IVA, seguro básico y kilómetros según contrato.' },
  { title: 'Recogida personalizada', body: 'Aeropuerto, puerto u oficina. Te esperamos donde llegues.' },
];

export default function DesignAPage() {
  return (
    <>
      <style>{`
        /* ── Design A tokens ───────────────────────────────────────── */
        :root {
          --a-white:   #FFFFFF;
          --a-off:     #F9F8F6;
          --a-light:   #EDECE8;
          --a-rule:    #D8D6D0;
          --a-ink:     #141410;
          --a-mid:     #6A6A64;
          --a-muted:   #9E9E98;
          --a-gold:    #B09248;
          --a-gold-h:  #8E7536;
          --a-dark:    #0C0C0A;
          --font-dis:  var(--font-a-display, 'Georgia', serif);
          --font-body: 'ClashGrotesk', system-ui, sans-serif;
        }
        .a-root {
          background: var(--a-white);
          color: var(--a-ink);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        /* Nav */
        .a-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          height: 72px;
          display: flex; align-items: center;
          padding: 0 clamp(24px, 5vw, 80px);
          background: transparent;
          transition: background 300ms ease, backdrop-filter 300ms ease;
        }
        .a-nav.scrolled {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--a-rule);
        }
        .a-nav-inner {
          width: 100%; max-width: 1320px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .a-nav-links {
          display: flex; gap: 36px; list-style: none; margin: 0; padding: 0;
        }
        .a-nav-links a {
          font-family: var(--font-body);
          font-size: 13px; font-weight: 400; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          transition: color 200ms;
          position: relative;
        }
        .a-nav.scrolled .a-nav-links a { color: var(--a-ink); }
        .a-nav-links a::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 100%;
          height: 1px; background: currentColor;
          transition: right 200ms ease;
        }
        .a-nav-links a:hover::after { right: 0; }
        .a-nav-cta {
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          color: var(--a-gold); text-decoration: none;
          border-bottom: 1px solid var(--a-gold);
          padding-bottom: 1px;
          transition: color 200ms, border-color 200ms;
        }
        .a-nav.scrolled .a-nav-cta { color: var(--a-gold); }
        .a-nav-cta:hover { color: var(--a-gold-h); border-color: var(--a-gold-h); }

        /* Hero */
        .a-hero {
          position: relative; min-height: 100svh;
          display: flex; align-items: flex-end;
          overflow: hidden;
        }
        .a-hero-bg {
          position: absolute; inset: 0;
          background: var(--a-dark);
        }
        .a-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          opacity: 0.55;
          transition: transform 8s ease;
        }
        .a-hero:hover .a-hero-bg img { transform: scale(1.04); }
        .a-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(12,12,10,0.90) 0%,
            rgba(12,12,10,0.30) 50%,
            rgba(12,12,10,0.10) 100%
          );
        }
        .a-hero-content {
          position: relative; z-index: 10;
          width: 100%; max-width: 1320px; margin: 0 auto;
          padding: 0 clamp(24px,5vw,80px) clamp(64px,8vw,96px);
          color: white;
        }
        .a-hero-location {
          font-family: var(--font-body);
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          color: var(--a-gold); margin-bottom: 20px;
        }
        .a-hero-h1 {
          font-family: var(--font-dis);
          font-size: clamp(52px, 7.5vw, 112px);
          font-weight: 300; line-height: 0.95;
          letter-spacing: -0.02em;
          margin: 0 0 28px; max-width: 820px;
          font-style: italic;
        }
        .a-hero-rule {
          width: 48px; height: 1px;
          background: rgba(255,255,255,0.35);
          margin: 0 0 28px;
        }
        .a-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 300; color: rgba(255,255,255,0.65);
          max-width: 480px; line-height: 1.6;
          margin: 0 0 48px;
        }
        .a-hero-actions {
          display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
        }
        .a-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 36px;
          background: var(--a-gold);
          color: var(--a-dark);
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600; letter-spacing: 0.12em;
          text-decoration: none;
          border: none; cursor: pointer;
          transition: background 200ms, transform 100ms;
        }
        .a-btn-primary:hover { background: var(--a-gold-h); transform: translateY(-1px); }
        .a-btn-primary:active { transform: translateY(1px); }
        .a-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.70);
          font-family: var(--font-body);
          font-size: 13px; font-weight: 400; letter-spacing: 0.04em;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 2px;
          transition: color 200ms, border-color 200ms;
        }
        .a-btn-ghost:hover { color: white; border-color: rgba(255,255,255,0.7); }
        .a-hero-price {
          font-family: var(--font-body);
          font-size: 13px; color: rgba(255,255,255,0.50);
        }
        .a-hero-price strong {
          font-size: 22px; font-weight: 600; color: rgba(255,255,255,0.90);
          letter-spacing: -0.02em;
        }
        /* Scroll indicator */
        .a-scroll {
          position: absolute; bottom: 28px; right: clamp(24px,5vw,80px);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          opacity: 0.35; writing-mode: vertical-lr;
          font-family: var(--font-body); font-size: 10px; letter-spacing: 0.2em;
          color: white;
        }

        /* Section wrapper */
        .a-section {
          padding: clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px);
          max-width: 1320px; margin: 0 auto;
        }
        .a-section-label {
          font-family: var(--font-body);
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          color: var(--a-gold); margin-bottom: 16px;
        }
        .a-section-h2 {
          font-family: var(--font-dis);
          font-size: clamp(38px, 5vw, 72px);
          font-weight: 300; line-height: 1.0;
          letter-spacing: -0.02em; font-style: italic;
          margin: 0 0 clamp(48px,6vw,80px);
        }

        /* Fleet — horizontal row layout */
        .a-fleet-grid {
          display: flex; flex-direction: column; gap: clamp(48px, 6vw, 80px);
        }
        .a-car-row {
          display: grid; grid-template-columns: 3fr 2fr;
          gap: clamp(32px, 4vw, 64px); align-items: center;
        }
        .a-car-row:nth-child(even) { direction: rtl; }
        .a-car-row:nth-child(even) > * { direction: ltr; }
        .a-car-img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 16/10;
          background: var(--a-light);
        }
        .a-car-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
        }
        .a-car-row:hover .a-car-img-wrap img { transform: scale(1.025); }
        .a-car-location-badge {
          position: absolute; top: 16px; left: 16px;
          font-family: var(--font-body); font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; color: white;
          background: rgba(12,12,10,0.72); backdrop-filter: blur(4px);
          padding: 4px 10px;
        }
        .a-car-info { display: flex; flex-direction: column; gap: 0; }
        .a-car-brand {
          font-family: var(--font-body); font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; color: var(--a-gold); margin-bottom: 12px;
        }
        .a-car-name {
          font-family: var(--font-dis);
          font-size: clamp(26px, 3vw, 42px); font-weight: 400; line-height: 1.1;
          font-style: italic; margin: 0 0 24px;
        }
        .a-car-specs {
          display: flex; flex-direction: column; gap: 10px;
          padding: 24px 0; border-top: 1px solid var(--a-rule);
          margin-bottom: 24px;
        }
        .a-car-spec {
          display: flex; justify-content: space-between;
          font-family: var(--font-body); font-size: 13px;
          color: var(--a-mid);
        }
        .a-car-spec span:last-child { color: var(--a-ink); font-weight: 500; }
        .a-car-price-row {
          display: flex; align-items: flex-end; justify-content: space-between;
          padding-top: 20px; border-top: 1px solid var(--a-rule);
          flex-wrap: wrap; gap: 16px;
        }
        .a-car-price {
          font-family: var(--font-dis);
          font-size: 48px; font-weight: 300; line-height: 1;
          letter-spacing: -0.02em;
        }
        .a-car-price-unit {
          font-family: var(--font-body); font-size: 13px;
          color: var(--a-mid); margin-left: 6px;
        }
        .a-car-cta {
          display: inline-flex; align-items: center;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; color: var(--a-ink);
          text-decoration: none;
          border-bottom: 1.5px solid var(--a-ink);
          padding-bottom: 2px;
          transition: color 200ms, border-color 200ms;
        }
        .a-car-cta:hover { color: var(--a-gold); border-color: var(--a-gold); }

        /* Destinations */
        .a-dest-wrap {
          background: var(--a-dark);
          padding: clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px);
        }
        .a-dest-inner { max-width: 1320px; margin: 0 auto; }
        .a-dest-h2 {
          font-family: var(--font-dis);
          font-size: clamp(38px, 5vw, 72px); font-weight: 300; line-height: 1.0;
          letter-spacing: -0.02em; font-style: italic;
          color: white; margin: 0 0 clamp(48px, 6vw, 80px);
        }
        .a-dest-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .a-dest-card {
          position: relative; overflow: hidden;
          aspect-ratio: 3/2; display: flex; align-items: flex-end;
          text-decoration: none;
        }
        .a-dest-card-bg {
          position: absolute; inset: 0;
          transition: transform 700ms ease;
        }
        .a-dest-card:hover .a-dest-card-bg { transform: scale(1.04); }
        .a-dest-card-bg-ibiza {
          background: linear-gradient(135deg, #0d2a3a 0%, #1a4a5a 50%, #2d6a7a 100%);
        }
        .a-dest-card-bg-alicante {
          background: linear-gradient(135deg, #2a1a0a 0%, #4a3520 50%, #6a5030 100%);
        }
        .a-dest-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%);
        }
        .a-dest-content {
          position: relative; z-index: 10; padding: 40px 36px;
          color: white; width: 100%;
        }
        .a-dest-name {
          font-family: var(--font-dis);
          font-size: clamp(40px, 5.5vw, 80px); font-weight: 300; line-height: 1.0;
          letter-spacing: -0.03em; font-style: italic;
          margin: 0 0 8px;
        }
        .a-dest-points {
          font-family: var(--font-body); font-size: 12px;
          color: rgba(255,255,255,0.55); letter-spacing: 0.05em;
          margin-bottom: 20px;
        }
        .a-dest-link {
          display: inline-flex; align-items: center;
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; color: var(--a-gold);
          border-bottom: 1px solid transparent;
          padding-bottom: 1px;
          transition: border-color 200ms;
        }
        .a-dest-card:hover .a-dest-link { border-color: var(--a-gold); }

        /* Claims */
        .a-claims-wrap {
          background: var(--a-off);
          padding: clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px);
        }
        .a-claims-inner {
          max-width: 1320px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: clamp(32px, 4vw, 64px);
        }
        .a-claim-item { display: flex; flex-direction: column; gap: 12px; }
        .a-claim-rule { width: 32px; height: 1px; background: var(--a-gold); }
        .a-claim-title {
          font-family: var(--font-dis); font-size: 24px; font-weight: 400;
          font-style: italic; line-height: 1.2;
        }
        .a-claim-body {
          font-family: var(--font-body); font-size: 14px; color: var(--a-mid);
          line-height: 1.65; max-width: 260px;
        }

        /* CTA final */
        .a-cta-wrap {
          padding: clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px);
          text-align: center;
        }
        .a-cta-inner { max-width: 640px; margin: 0 auto; }
        .a-cta-h2 {
          font-family: var(--font-dis); font-size: clamp(42px, 5.5vw, 76px);
          font-weight: 300; line-height: 1.0; letter-spacing: -0.02em;
          font-style: italic; margin: 0 0 24px;
        }
        .a-cta-sub {
          font-family: var(--font-body); font-size: 16px; color: var(--a-mid);
          line-height: 1.65; margin: 0 0 40px;
        }
        .a-cta-contact {
          font-family: var(--font-body); font-size: 12px; color: var(--a-muted);
          margin-top: 20px;
        }

        /* Footer */
        .a-footer {
          background: var(--a-dark); color: rgba(255,255,255,0.45);
          padding: 40px clamp(24px, 5vw, 80px);
          font-family: var(--font-body); font-size: 12px;
        }
        .a-footer-inner {
          max-width: 1320px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .a-footer a { color: rgba(255,255,255,0.45); text-decoration: none; }
        .a-footer a:hover { color: rgba(255,255,255,0.75); }
        .a-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }

        /* Dev banner */
        .a-dev-banner {
          background: var(--a-gold); color: var(--a-dark);
          padding: 10px clamp(24px, 5vw, 80px);
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          display: flex; gap: 24px; align-items: center; flex-wrap: wrap;
        }
        .a-dev-banner a { color: var(--a-dark); font-weight: 700; text-decoration: none; }
        .a-dev-banner a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 768px) {
          .a-car-row { grid-template-columns: 1fr; }
          .a-car-row:nth-child(even) { direction: ltr; }
          .a-dest-grid { grid-template-columns: 1fr; }
          .a-claims-inner { grid-template-columns: 1fr; gap: 32px; }
          .a-nav-links { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .a-hero-bg img, .a-car-img-wrap img, .a-dest-card-bg { transition: none !important; transform: none !important; }
        }
      `}</style>

      <div className="a-root">
        {/* Dev banner */}
        <div className="a-dev-banner" role="banner" aria-label="Prototipo de desarrollo">
          <span>Prototipo — Design A: Luxury Minimal</span>
          <a href="/">Volver a la web actual</a>
          <a href="/design-b">Design B: Mediterranean</a>
          <a href="/design-c">Design C: Conversion</a>
        </div>

        {/* Nav */}
        <nav className="a-nav" aria-label="Navegación principal">
          <div className="a-nav-inner">
            <Link href="/" aria-label="Here & Now — inicio">
              <Image
                src="/images/logo-here-and-now.svg"
                alt="Here & Now"
                width={160}
                height={30}
                style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                priority
              />
            </Link>
            <ul className="a-nav-links">
              <li><Link href="/flota">Flota</Link></li>
              <li><Link href="/ibiza">Ibiza</Link></li>
              <li><Link href="/alicante">Alicante</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
            <Link href="/contacto" className="a-nav-cta">Consultar disponibilidad</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="a-hero" aria-label="Mercedes-Benz premium en Ibiza y Alicante">
          <div className="a-hero-bg" aria-hidden="true">
            <Image
              src="/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/01.png"
              alt=""
              fill
              style={{ objectFit: 'cover', opacity: 0.55 }}
              priority
            />
          </div>
          <div className="a-hero-overlay" aria-hidden="true" />

          <div className="a-hero-content">
            <p className="a-hero-location">Ibiza · Alicante · Mercedes-Benz</p>
            <h1 className="a-hero-h1">
              Alquiler de<br />coches Mercedes
            </h1>
            <div className="a-hero-rule" aria-hidden="true" />
            <p className="a-hero-sub">
              Exclusividad, confort y servicio discreto. Recogida en aeropuerto o puerto.
            </p>
            <div className="a-hero-actions">
              <Link href="/ibiza" className="a-btn-primary">
                Reservar en Ibiza
              </Link>
              <Link href="/alicante" className="a-btn-ghost">
                Reservar en Alicante
              </Link>
              <p className="a-hero-price">
                Desde <strong>130€</strong>/día
              </p>
            </div>
          </div>

          <div className="a-scroll" aria-hidden="true">
            <span>Desplazar</span>
          </div>
        </section>

        {/* Fleet */}
        <div style={{ background: 'var(--a-white)' }}>
          <section aria-labelledby="a-fleet-h2">
            <div className="a-section">
              <p className="a-section-label">La flota</p>
              <h2 id="a-fleet-h2" className="a-section-h2">
                Mercedes-Benz,<br />solo Mercedes-Benz
              </h2>
              <div className="a-fleet-grid">
                {CARS.map((car, i) => (
                  <article key={car.slug} className="a-car-row">
                    <div className="a-car-img-wrap">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority={i === 0}
                      />
                      <span className="a-car-location-badge">{car.location}</span>
                    </div>
                    <div className="a-car-info">
                      <p className="a-car-brand">Mercedes-Benz</p>
                      <h3 className="a-car-name">{car.nameShort}<br /><em>{car.variant}</em></h3>
                      <dl className="a-car-specs">
                        <div className="a-car-spec">
                          <dt>Plazas</dt>
                          <dd>{car.passengers}</dd>
                        </div>
                        <div className="a-car-spec">
                          <dt>Transmisión</dt>
                          <dd>{car.transmission}</dd>
                        </div>
                        <div className="a-car-spec">
                          <dt>Combustible</dt>
                          <dd>{car.fuel}</dd>
                        </div>
                        <div className="a-car-spec">
                          <dt>Año</dt>
                          <dd>{car.year}</dd>
                        </div>
                        <div className="a-car-spec">
                          <dt>Disponible en</dt>
                          <dd>{car.location}</dd>
                        </div>
                      </dl>
                      <div className="a-car-price-row">
                        <div>
                          <span className="a-car-price">{car.price}€</span>
                          <span className="a-car-price-unit">/día</span>
                        </div>
                        <Link href={`/flota/${car.slug}`} className="a-car-cta">
                          Ver el vehículo
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Destinations */}
        <div className="a-dest-wrap">
          <div className="a-dest-inner">
            <p className="a-section-label" style={{ color: 'var(--a-gold)' }}>Dónde estamos</p>
            <h2 className="a-dest-h2">Ibiza.<br />Alicante.</h2>
            <div className="a-dest-grid">
              <Link href="/ibiza" className="a-dest-card" aria-label="Alquilar Mercedes en Ibiza">
                <div className="a-dest-card-bg a-dest-card-bg-ibiza" aria-hidden="true" />
                <div className="a-dest-overlay" aria-hidden="true" />
                <div className="a-dest-content">
                  <h3 className="a-dest-name">Ibiza</h3>
                  <p className="a-dest-points">Aeropuerto · Puerto</p>
                  <span className="a-dest-link">Alquilar en Ibiza</span>
                </div>
              </Link>
              <Link href="/alicante" className="a-dest-card" aria-label="Alquilar Mercedes en Alicante">
                <div className="a-dest-card-bg a-dest-card-bg-alicante" aria-hidden="true" />
                <div className="a-dest-overlay" aria-hidden="true" />
                <div className="a-dest-content">
                  <h3 className="a-dest-name">Alicante</h3>
                  <p className="a-dest-points">Aeropuerto · Oficina · Puerto</p>
                  <span className="a-dest-link">Alquilar en Alicante</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Claims */}
        <div className="a-claims-wrap">
          <div className="a-claims-inner">
            {CLAIMS.map((claim) => (
              <div key={claim.title} className="a-claim-item">
                <div className="a-claim-rule" aria-hidden="true" />
                <h3 className="a-claim-title">{claim.title}</h3>
                <p className="a-claim-body">{claim.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--a-white)' }}>
          <section className="a-cta-wrap" aria-labelledby="a-cta-h2">
            <div className="a-cta-inner">
              <h2 id="a-cta-h2" className="a-cta-h2">¿Cuándo<br />llegas?</h2>
              <p className="a-cta-sub">
                Escríbenos con tus fechas y destino. Confirmamos disponibilidad en menos de una hora.
              </p>
              <Link href="/contacto" className="a-btn-primary">
                Consultar disponibilidad
              </Link>
              <p className="a-cta-contact">
                O llámanos al{' '}
                <a href="tel:+34625305620" style={{ color: 'var(--a-ink)', fontWeight: 500 }}>
                  625 305 620
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="a-footer">
          <div className="a-footer-inner">
            <span>© 2025 Here &amp; Now · Alquiler de vehículos Mercedes</span>
            <nav aria-label="Pie de página" className="a-footer-links">
              <Link href="/aviso-legal">Aviso legal</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/terminos-y-condiciones">Términos</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
