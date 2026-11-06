import Link from 'next/link';
import Image from 'next/image';

// ── Design C — Modern Conversion ──────────────────────────────────────────
// Concepto: Digital-native premium. El diseño trabaja para convertir visitas
// en reservas. El widget de búsqueda/reserva es el protagonista del hero.
// Precio, vehículo, ubicación y CTA siempre visibles.
//
// Palette: casi-blanco funcional / near-black / teal acción
// Tipo: ClashGrotesk puro — limpio, moderno, sin serifa para claridad funcional
// Diferenciador UX: booking widget integrado en hero, sticky CTA en desktop,
// tabs de destino, precio muy prominente — señala el flujo futuro completo:
// vehículo → fechas → disponibilidad → precio → pago

const CARS = [
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo',
    location: 'Ibiza',
    locationHref: '/ibiza',
    price: 130,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    kmDay: 250,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/02.png',
    imageAlt: 'Mercedes-Benz Clase V — Ibiza',
    tag: 'Más solicitado',
  },
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo-4matic',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC',
    location: 'Alicante',
    locationHref: '/alicante',
    price: 140,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    kmDay: 250,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo/02.png',
    imageAlt: 'Mercedes-Benz Clase V 4MATIC — Alicante',
    tag: null,
  },
];

const PICKUP_IBIZA = [
  { name: 'Aeropuerto de Ibiza', detail: 'Terminal llegadas nacionales e internacionales' },
  { name: 'Puerto de Ibiza', detail: 'Zona de llegada de ferrys' },
];
const PICKUP_ALICANTE = [
  { name: 'Aeropuerto de Alicante', detail: 'Terminal llegadas T1 y T2' },
  { name: 'Oficina Here & Now', detail: 'Calle de la Figuera, 5, local 58' },
  { name: 'Puerto de Alicante', detail: 'Zona de llegada de ferrys' },
];

const TRUST = [
  { label: 'Vehículos', value: '100% Mercedes-Benz' },
  { label: 'Km incluidos', value: '250 km/día' },
  { label: 'Recogida', value: '5 puntos' },
  { label: 'Cobertura', value: 'Básica incluida' },
];

export default function DesignCPage() {
  return (
    <>
      <style>{`
        /* ── Design C tokens ───────────────────────────────────────── */
        :root {
          --c-base:     #F6F6F4;
          --c-surface:  #FFFFFF;
          --c-line:     #E2E1DC;
          --c-dark:     #0E0E0C;
          --c-near:     #1A1A18;
          --c-teal:     #0B8B70;
          --c-teal-h:   #097A61;
          --c-teal-lt:  #E5F5F1;
          --c-mid:      #6A6A66;
          --c-muted:    #9A9A96;
          --c-warn:     #D4912A;
          --font-body:  'ClashGrotesk', system-ui, sans-serif;
        }
        .c-root {
          background: var(--c-base);
          color: var(--c-dark);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* Sticky header */
        .c-header {
          position: sticky; top: 0; z-index: 50;
          height: 64px; display: flex; align-items: center;
          padding: 0 clamp(20px, 4vw, 56px);
          background: var(--c-surface);
          border-bottom: 1px solid var(--c-line);
        }
        .c-header-inner {
          width: 100%; max-width: 1240px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .c-nav-links {
          display: flex; gap: 28px; list-style: none; margin: 0; padding: 0;
        }
        .c-nav-links a {
          font-size: 13.5px; font-weight: 400; color: var(--c-mid);
          text-decoration: none; transition: color 200ms;
        }
        .c-nav-links a:hover { color: var(--c-dark); }
        .c-header-actions { display: flex; align-items: center; gap: 10px; }
        .c-header-phone {
          font-size: 12.5px; font-weight: 500; color: var(--c-mid);
          text-decoration: none;
        }
        .c-header-phone:hover { color: var(--c-dark); }
        .c-btn-teal {
          display: inline-flex; align-items: center; justify-content: center;
          height: 40px; padding: 0 22px;
          background: var(--c-teal); color: white;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; border-radius: 6px;
          transition: background 180ms, transform 100ms;
        }
        .c-btn-teal:hover { background: var(--c-teal-h); transform: translateY(-1px); }
        .c-btn-teal:active { transform: translateY(0); }

        /* Hero — split with booking widget left */
        .c-hero {
          background: var(--c-dark);
          padding: clamp(48px, 6vw, 80px) clamp(20px, 4vw, 56px);
          overflow: hidden;
        }
        .c-hero-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: 540px 1fr;
          gap: clamp(32px, 4vw, 64px); align-items: center;
          min-height: calc(100svh - 64px - 60px);
        }
        .c-hero-left { color: white; }
        .c-hero-h1 {
          font-size: clamp(36px, 4.5vw, 64px); font-weight: 700;
          line-height: 1.05; letter-spacing: -0.025em;
          margin: 0 0 12px;
        }
        .c-hero-sub {
          font-size: 16px; font-weight: 300; color: rgba(255,255,255,0.55);
          margin: 0 0 36px; line-height: 1.65; max-width: 440px;
        }

        /* Booking widget */
        .c-widget {
          background: var(--c-surface); border-radius: 10px;
          padding: 24px; display: flex; flex-direction: column; gap: 16px;
        }
        .c-widget-title {
          font-size: 14px; font-weight: 600; color: var(--c-dark);
          margin-bottom: 4px;
        }
        .c-widget-tabs {
          display: flex; gap: 0;
          background: var(--c-base); border-radius: 6px;
          padding: 3px;
        }
        .c-widget-tab {
          flex: 1; height: 38px; display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 500; color: var(--c-mid);
          border-radius: 4px; cursor: pointer; border: none; background: transparent;
          transition: background 180ms, color 180ms;
        }
        .c-widget-tab.active {
          background: var(--c-surface); color: var(--c-dark);
          box-shadow: 0 1px 3px rgba(0,0,0,0.10);
          font-weight: 600;
        }
        .c-widget-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        .c-widget-field {
          display: flex; flex-direction: column; gap: 5px;
        }
        .c-widget-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
          color: var(--c-mid); text-transform: uppercase;
        }
        .c-widget-input {
          height: 44px; padding: 0 12px;
          background: var(--c-base); border: 1.5px solid var(--c-line);
          border-radius: 6px; font-size: 13px; font-weight: 400;
          color: var(--c-muted);
          outline: none; cursor: not-allowed;
          font-family: var(--font-body);
        }
        .c-widget-submit {
          width: 100%; height: 50px;
          background: var(--c-teal); color: white; border: none; cursor: not-allowed;
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          letter-spacing: 0.02em; border-radius: 7px;
          opacity: 0.8;
          transition: background 180ms;
        }
        .c-widget-note {
          font-size: 11.5px; color: var(--c-muted); text-align: center;
          line-height: 1.5;
        }
        /* Hero image */
        .c-hero-right { position: relative; }
        .c-hero-img-wrap {
          position: relative; overflow: hidden;
          border-radius: 8px; aspect-ratio: 4/3;
          background: var(--c-near);
        }
        .c-hero-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
        }
        .c-hero-img-wrap:hover img { transform: scale(1.02); }
        .c-hero-badge {
          position: absolute; bottom: -16px; right: 24px;
          background: var(--c-teal); color: white;
          padding: 12px 20px; border-radius: 8px;
          box-shadow: 0 4px 16px rgba(11,139,112,0.35);
          display: flex; flex-direction: column;
        }
        .c-hero-badge span {
          font-size: 11px; font-weight: 500; opacity: 0.8; letter-spacing: 0.04em;
        }
        .c-hero-badge strong {
          font-size: 26px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;
        }
        .c-hero-badge em {
          font-style: normal; font-size: 12px; opacity: 0.75;
        }

        /* Trust bar */
        .c-trust {
          background: var(--c-surface);
          border-bottom: 1px solid var(--c-line);
          padding: 20px clamp(20px, 4vw, 56px);
        }
        .c-trust-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .c-trust-item {
          display: flex; flex-direction: column; gap: 2px;
          padding: 8px 24px; border-left: 1px solid var(--c-line);
        }
        .c-trust-item:first-child { border-left: none; }
        .c-trust-val {
          font-size: 15px; font-weight: 700; color: var(--c-dark);
          letter-spacing: -0.01em;
        }
        .c-trust-lbl {
          font-size: 11.5px; color: var(--c-muted);
        }

        /* Fleet */
        .c-fleet-section {
          padding: clamp(64px, 8vw, 100px) clamp(20px, 4vw, 56px);
          max-width: 1240px; margin: 0 auto;
        }
        .c-fleet-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(32px, 4vw, 48px); gap: 16px; flex-wrap: wrap;
        }
        .c-fleet-h2 {
          font-size: clamp(28px, 3.5vw, 48px); font-weight: 700;
          letter-spacing: -0.025em; line-height: 1.1;
          margin: 0;
        }
        .c-fleet-sub { font-size: 14px; color: var(--c-mid); }
        .c-fleet-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 2.5vw, 28px);
        }
        .c-car-card {
          background: var(--c-surface); border-radius: 10px; overflow: hidden;
          border: 1.5px solid var(--c-line);
          transition: border-color 250ms, box-shadow 250ms, transform 250ms;
          display: flex; flex-direction: column;
          text-decoration: none; color: inherit;
        }
        .c-car-card:hover {
          border-color: var(--c-teal);
          box-shadow: 0 6px 24px rgba(11,139,112,0.12);
          transform: translateY(-2px);
        }
        .c-car-img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 16/10; background: var(--c-base);
        }
        .c-car-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
        }
        .c-car-card:hover .c-car-img-wrap img { transform: scale(1.025); }
        .c-car-tag {
          position: absolute; top: 14px; left: 14px;
          background: var(--c-warn); color: white;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          padding: 4px 10px; border-radius: 4px;
        }
        .c-car-loc-badge {
          position: absolute; top: 14px; right: 14px;
          background: var(--c-dark); color: rgba(255,255,255,0.85);
          font-size: 11px; font-weight: 500; letter-spacing: 0.04em;
          padding: 4px 10px; border-radius: 4px;
        }
        .c-car-body { padding: 20px 24px 24px; flex: 1; display: flex; flex-direction: column; }
        .c-car-name {
          font-size: 17px; font-weight: 600; line-height: 1.3;
          margin: 0 0 14px; color: var(--c-dark);
        }
        .c-car-specs-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px 16px; margin-bottom: 18px;
        }
        .c-car-spec {
          display: flex; flex-direction: column; gap: 2px;
        }
        .c-car-spec-lbl { font-size: 11px; color: var(--c-muted); }
        .c-car-spec-val { font-size: 13px; font-weight: 600; color: var(--c-dark); }
        .c-car-price-row {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 16px; border-top: 1.5px solid var(--c-base);
          margin-top: auto;
        }
        .c-car-price-big {
          font-size: 40px; font-weight: 800; letter-spacing: -0.03em;
          color: var(--c-dark); line-height: 1;
        }
        .c-car-price-unit {
          font-size: 14px; font-weight: 400; color: var(--c-mid); margin-left: 4px;
        }
        .c-car-cta-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 46px; padding: 0 24px;
          background: var(--c-teal); color: white;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          border-radius: 7px; border: none;
          transition: background 180ms;
        }
        .c-car-card:hover .c-car-cta-btn { background: var(--c-teal-h); }

        /* Destinations with tabs */
        .c-dest-section {
          background: var(--c-surface);
          padding: clamp(64px, 8vw, 100px) clamp(20px, 4vw, 56px);
          border-top: 1px solid var(--c-line);
          border-bottom: 1px solid var(--c-line);
        }
        .c-dest-inner { max-width: 1240px; margin: 0 auto; }
        .c-dest-h2 {
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 700;
          letter-spacing: -0.025em; margin: 0 0 32px;
        }
        .c-dest-tabs {
          display: flex; gap: 0; margin-bottom: 32px;
          border-bottom: 2px solid var(--c-line);
        }
        .c-dest-tab {
          padding: 10px 24px; font-size: 14px; font-weight: 500;
          color: var(--c-mid); cursor: pointer; border: none; background: transparent;
          border-bottom: 2px solid transparent; margin-bottom: -2px;
          transition: color 200ms, border-color 200ms;
          font-family: var(--font-body);
        }
        .c-dest-tab.active {
          color: var(--c-teal); border-bottom-color: var(--c-teal);
          font-weight: 700;
        }
        .c-dest-panel-ibiza, .c-dest-panel-alicante {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3vw, 48px); align-items: start;
        }
        .c-dest-panel-alicante { display: none; }
        .c-pickup-list { display: flex; flex-direction: column; gap: 12px; }
        .c-pickup-item {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 14px 16px; background: var(--c-base); border-radius: 8px;
        }
        .c-pickup-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--c-teal); flex-shrink: 0; margin-top: 5px;
        }
        .c-pickup-name { font-size: 14px; font-weight: 600; color: var(--c-dark); }
        .c-pickup-detail { font-size: 12.5px; color: var(--c-mid); margin-top: 2px; }
        .c-dest-cta-wrap {
          display: flex; flex-direction: column; gap: 16px; justify-content: center;
        }
        .c-dest-cta-h3 {
          font-size: 22px; font-weight: 700; letter-spacing: -0.02em;
        }
        .c-dest-cta-p { font-size: 14px; color: var(--c-mid); line-height: 1.65; }
        .c-btn-teal-lg {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 32px;
          background: var(--c-teal); color: white; border-radius: 8px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          transition: background 180ms, transform 100ms;
          align-self: flex-start;
        }
        .c-btn-teal-lg:hover { background: var(--c-teal-h); transform: translateY(-1px); }
        .c-btn-teal-lg:active { transform: translateY(0); }

        /* CTA final */
        .c-cta-section {
          background: var(--c-teal);
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 56px);
          text-align: center;
        }
        .c-cta-inner { max-width: 560px; margin: 0 auto; color: white; }
        .c-cta-h2 {
          font-size: clamp(32px, 4.5vw, 56px); font-weight: 800;
          letter-spacing: -0.025em; line-height: 1.05; margin: 0 0 16px;
        }
        .c-cta-p {
          font-size: 16px; font-weight: 300; opacity: 0.80;
          margin: 0 0 36px; line-height: 1.65;
        }
        .c-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .c-btn-white {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 32px;
          background: white; color: var(--c-teal); border-radius: 8px;
          font-size: 14px; font-weight: 700; text-decoration: none;
          transition: opacity 180ms;
        }
        .c-btn-white:hover { opacity: 0.90; }
        .c-btn-outline-white {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 32px;
          background: transparent; color: white;
          border: 2px solid rgba(255,255,255,0.45); border-radius: 8px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          transition: border-color 180ms;
        }
        .c-btn-outline-white:hover { border-color: rgba(255,255,255,0.85); }
        .c-cta-phone {
          font-size: 13px; opacity: 0.65; margin-top: 20px;
        }
        .c-cta-phone a { color: white; font-weight: 600; text-decoration: none; }

        /* Footer */
        .c-footer {
          background: var(--c-near); color: rgba(255,255,255,0.45);
          padding: 36px clamp(20px, 4vw, 56px);
          font-size: 12px;
        }
        .c-footer-inner {
          max-width: 1240px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .c-footer a { color: rgba(255,255,255,0.45); text-decoration: none; }
        .c-footer a:hover { color: rgba(255,255,255,0.75); }
        .c-footer-links { display: flex; gap: 20px; flex-wrap: wrap; }

        /* Dev banner */
        .c-dev-banner {
          background: var(--c-teal); color: white;
          padding: 10px clamp(20px, 4vw, 56px);
          font-size: 12px; font-weight: 500;
          display: flex; gap: 24px; align-items: center; flex-wrap: wrap;
        }
        .c-dev-banner a { color: white; font-weight: 700; text-decoration: none; }
        .c-dev-banner a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 960px) {
          .c-hero-inner { grid-template-columns: 1fr; }
          .c-hero-right { order: -1; }
          .c-hero-badge { display: none; }
          .c-fleet-grid { grid-template-columns: 1fr; }
          .c-trust-inner { grid-template-columns: 1fr 1fr; }
          .c-dest-panel-ibiza { grid-template-columns: 1fr; }
          .c-nav-links { display: none; }
        }
        @media (max-width: 600px) {
          .c-trust-inner { grid-template-columns: 1fr 1fr; }
          .c-trust-item { padding: 8px 12px; }
          .c-widget-row { grid-template-columns: 1fr; }
          .c-fleet-h2 { font-size: 28px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .c-car-card, .c-hero-img-wrap img, .c-car-img-wrap img,
          .c-btn-teal, .c-btn-teal-lg, .c-btn-white { transition: none !important; transform: none !important; }
        }
      `}</style>

      <div className="c-root">
        {/* Dev banner */}
        <div className="c-dev-banner" role="banner" aria-label="Prototipo de desarrollo">
          <span>Prototipo — Design C: Modern Conversion</span>
          <a href="/">Volver a la web actual</a>
          <a href="/design-a">Design A: Luxury Minimal</a>
          <a href="/design-b">Design B: Mediterranean</a>
        </div>

        {/* Sticky header */}
        <header className="c-header">
          <div className="c-header-inner">
            <Link href="/" aria-label="Here & Now — inicio">
              <Image
                src="/images/logo-here-and-now.svg"
                alt="Here & Now"
                width={150}
                height={28}
                style={{ height: '26px', width: 'auto' }}
                priority
              />
            </Link>
            <nav aria-label="Navegación principal">
              <ul className="c-nav-links">
                <li><Link href="/flota">Flota</Link></li>
                <li><Link href="/ibiza">Ibiza</Link></li>
                <li><Link href="/alicante">Alicante</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </nav>
            <div className="c-header-actions">
              <a href="tel:+34625305620" className="c-header-phone">625 305 620</a>
              <Link href="/ibiza" className="c-btn-teal">Reservar ahora</Link>
            </div>
          </div>
        </header>

        {/* Hero with booking widget */}
        <section className="c-hero" aria-label="Alquiler Mercedes — Reserva tu vehículo">
          <div className="c-hero-inner">
            <div className="c-hero-left">
              <h1 className="c-hero-h1">
                Alquiler Mercedes<br />en Ibiza y Alicante
              </h1>
              <p className="c-hero-sub">
                Recoge tu vehículo en el aeropuerto, el puerto o nuestra oficina. Sin costes ocultos, sin sorpresas.
              </p>

              {/* Booking widget — future booking flow placeholder */}
              <div className="c-widget" role="search" aria-label="Consultar disponibilidad — próximamente">
                <p className="c-widget-title">Consultar disponibilidad</p>
                <div className="c-widget-tabs" role="tablist" aria-label="Seleccionar destino">
                  <button className="c-widget-tab active" role="tab" aria-selected="true" aria-controls="panel-ibiza" disabled>
                    Ibiza
                  </button>
                  <button className="c-widget-tab" role="tab" aria-selected="false" aria-controls="panel-alicante" disabled>
                    Alicante
                  </button>
                </div>
                <div className="c-widget-row">
                  <div className="c-widget-field">
                    <label className="c-widget-label" htmlFor="c-arrival">Llegada</label>
                    <input
                      id="c-arrival"
                      type="date"
                      className="c-widget-input"
                      placeholder="dd/mm/aaaa"
                      disabled
                      aria-label="Fecha de llegada — próximamente"
                    />
                  </div>
                  <div className="c-widget-field">
                    <label className="c-widget-label" htmlFor="c-departure">Salida</label>
                    <input
                      id="c-departure"
                      type="date"
                      className="c-widget-input"
                      placeholder="dd/mm/aaaa"
                      disabled
                      aria-label="Fecha de salida — próximamente"
                    />
                  </div>
                </div>
                <button className="c-widget-submit" disabled aria-label="Ver disponibilidad — sistema en construcción">
                  Ver disponibilidad
                </button>
                <p className="c-widget-note">
                  Sistema de reservas en línea disponible próximamente. Mientras tanto, contáctanos directamente.
                </p>
              </div>
            </div>

            <div className="c-hero-right">
              <div className="c-hero-img-wrap">
                <Image
                  src="/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/01.png"
                  alt="Mercedes-Benz Clase V — flota Here & Now"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="c-hero-badge" aria-label="Precio desde 130€ por día">
                <span>Desde</span>
                <strong>130€</strong>
                <em>/día</em>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div className="c-trust" aria-label="Características del servicio">
          <div className="c-trust-inner">
            {TRUST.map((t) => (
              <div key={t.label} className="c-trust-item">
                <span className="c-trust-val">{t.value}</span>
                <span className="c-trust-lbl">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet */}
        <section aria-labelledby="c-fleet-h2">
          <div className="c-fleet-section">
            <div className="c-fleet-header">
              <div>
                <h2 id="c-fleet-h2" className="c-fleet-h2">Elige tu vehículo</h2>
                <p className="c-fleet-sub">2 Mercedes-Benz disponibles · Ibiza y Alicante</p>
              </div>
              <Link href="/flota" style={{ fontSize: '13px', color: 'var(--c-teal)', fontWeight: 500, textDecoration: 'none' }}>
                Ver flota completa
              </Link>
            </div>
            <div className="c-fleet-grid">
              {CARS.map((car, i) => (
                <Link key={car.slug} href={`/flota/${car.slug}`} className="c-car-card" aria-label={`${car.name} — ${car.price}€/día en ${car.location}`}>
                  <div className="c-car-img-wrap">
                    <Image
                      src={car.image}
                      alt={car.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 960px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    {car.tag && <span className="c-car-tag">{car.tag}</span>}
                    <span className="c-car-loc-badge">{car.location}</span>
                  </div>
                  <div className="c-car-body">
                    <h3 className="c-car-name">{car.name}</h3>
                    <div className="c-car-specs-grid">
                      <div className="c-car-spec">
                        <span className="c-car-spec-lbl">Plazas</span>
                        <span className="c-car-spec-val">{car.passengers}</span>
                      </div>
                      <div className="c-car-spec">
                        <span className="c-car-spec-lbl">Transmisión</span>
                        <span className="c-car-spec-val">{car.transmission}</span>
                      </div>
                      <div className="c-car-spec">
                        <span className="c-car-spec-lbl">Combustible</span>
                        <span className="c-car-spec-val">{car.fuel}</span>
                      </div>
                      <div className="c-car-spec">
                        <span className="c-car-spec-lbl">Km incluidos</span>
                        <span className="c-car-spec-val">{car.kmDay} km/día</span>
                      </div>
                    </div>
                    <div className="c-car-price-row">
                      <div>
                        <span className="c-car-price-big">{car.price}€</span>
                        <span className="c-car-price-unit">/día</span>
                      </div>
                      <span className="c-car-cta-btn">Seleccionar</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations with tabs */}
        <section className="c-dest-section" aria-labelledby="c-dest-h2">
          <div className="c-dest-inner">
            <h2 id="c-dest-h2" className="c-dest-h2">Puntos de recogida</h2>
            <div className="c-dest-tabs" role="tablist" aria-label="Seleccionar destino">
              <button className="c-dest-tab active" role="tab" aria-selected="true">
                Ibiza (2 puntos)
              </button>
              <button className="c-dest-tab" role="tab" aria-selected="false">
                Alicante (3 puntos)
              </button>
            </div>

            {/* Ibiza panel */}
            <div className="c-dest-panel-ibiza" role="tabpanel" aria-labelledby="tab-ibiza" id="panel-ibiza">
              <div>
                <div className="c-pickup-list">
                  {PICKUP_IBIZA.map((p) => (
                    <div key={p.name} className="c-pickup-item">
                      <div className="c-pickup-dot" aria-hidden="true" />
                      <div>
                        <p className="c-pickup-name">{p.name}</p>
                        <p className="c-pickup-detail">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="c-dest-cta-wrap">
                <h3 className="c-dest-cta-h3">Ibiza te espera</h3>
                <p className="c-dest-cta-p">
                  Recoge tu Mercedes en el aeropuerto o el puerto de Ibiza. Disponible todo el año. Precio desde 130€/día.
                </p>
                <Link href="/ibiza" className="c-btn-teal-lg">
                  Reservar en Ibiza
                </Link>
              </div>
            </div>

            {/* Alicante panel — hidden visually, accessible */}
            <div className="c-dest-panel-alicante" role="tabpanel" aria-labelledby="tab-alicante" id="panel-alicante" aria-hidden="true">
              <div>
                <div className="c-pickup-list">
                  {PICKUP_ALICANTE.map((p) => (
                    <div key={p.name} className="c-pickup-item">
                      <div className="c-pickup-dot" aria-hidden="true" />
                      <div>
                        <p className="c-pickup-name">{p.name}</p>
                        <p className="c-pickup-detail">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="c-dest-cta-wrap">
                <h3 className="c-dest-cta-h3">Alicante y la Costa Blanca</h3>
                <p className="c-dest-cta-p">
                  Tres opciones de recogida en Alicante: aeropuerto, oficina o puerto. Desde 140€/día.
                </p>
                <Link href="/alicante" className="c-btn-teal-lg">
                  Reservar en Alicante
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="c-cta-section" aria-labelledby="c-cta-h2">
          <div className="c-cta-inner">
            <h2 id="c-cta-h2" className="c-cta-h2">¿Cuándo<br />llegas?</h2>
            <p className="c-cta-p">
              Escríbenos con tus fechas o llámanos. Confirmamos disponibilidad y precio en menos de una hora.
            </p>
            <div className="c-cta-btns">
              <Link href="/ibiza" className="c-btn-white">Reservar en Ibiza</Link>
              <Link href="/alicante" className="c-btn-outline-white">Reservar en Alicante</Link>
            </div>
            <p className="c-cta-phone">
              Teléfono: <a href="tel:+34625305620">625 305 620</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="c-footer">
          <div className="c-footer-inner">
            <span>© 2025 Here &amp; Now · Alquiler de vehículos Mercedes en Ibiza y Alicante</span>
            <nav aria-label="Pie de página" className="c-footer-links">
              <Link href="/aviso-legal">Aviso legal</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/terminos-y-condiciones">Términos</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
