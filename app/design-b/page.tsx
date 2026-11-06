import Link from 'next/link';
import Image from 'next/image';

// ── Design B — Mediterranean Premium ──────────────────────────────────────
// Concepto: El verano mediterráneo. La experiencia de llegar a Ibiza
// o Alicante al volante de un Mercedes. Aspira a la emoción del viaje,
// no solo al producto.
//
// Palette: arena cálida / navy profundo / ámbar mediterráneo
// Tipo: Playfair Display (display editorial) + ClashGrotesk (utilidad)
// Composición: split hero, booking strip, secciones con contraste warm/cool
// Diferenciador UX: strip de "búsqueda rápida" debajo del hero — señal
// del futuro flujo de reserva, sin implementación backend

const CARS = [
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo',
    short: 'Clase V · Ibiza',
    locationLabel: 'Ibiza',
    locationHref: '/ibiza',
    price: 130,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/03.png',
    imageAlt: 'Mercedes-Benz Clase V en Ibiza',
  },
  {
    slug: 'mercedes-clase-v-250d-avantgarde-largo-4matic',
    name: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC',
    short: 'Clase V 4MATIC · Alicante',
    locationLabel: 'Alicante',
    locationHref: '/alicante',
    price: 140,
    passengers: 8,
    transmission: 'Automático',
    fuel: 'Diésel',
    year: 2024,
    image: '/images/cars/mercedes-clase-v-250d-avantgarde-largo/03.jpg',
    imageAlt: 'Mercedes-Benz Clase V 4MATIC en Alicante',
  },
];

const HOW_STEPS = [
  {
    n: '01',
    title: 'Elige el vehículo',
    body: 'Selecciona el Mercedes que se adapta a tu viaje y destino.',
  },
  {
    n: '02',
    title: 'Confirma las fechas',
    body: 'Indica llegada, salida y punto de recogida. Sin compromisos hasta confirmar.',
  },
  {
    n: '03',
    title: 'Recoge con comodidad',
    body: 'Te esperamos en el aeropuerto, el puerto o la oficina. Sin colas ni esperas.',
  },
  {
    n: '04',
    title: 'Disfruta el viaje',
    body: 'La experiencia Mercedes desde el primer kilómetro en Ibiza o la Costa Blanca.',
  },
];

export default function DesignBPage() {
  return (
    <>
      <style>{`
        /* ── Design B tokens ───────────────────────────────────────── */
        :root {
          --b-warm:    #FAF6EE;
          --b-sand:    #F0E8D8;
          --b-stone:   #D8C8A8;
          --b-deep:    #0B1728;
          --b-navy:    #1A2E45;
          --b-amber:   #C89820;
          --b-amber-h: #A07C15;
          --b-ink:     #1A1608;
          --b-mid:     #5C5444;
          --b-muted:   #8C7E6A;
          --font-dis:  var(--font-b-display, 'Georgia', serif);
          --font-body: 'ClashGrotesk', system-ui, sans-serif;
        }
        .b-root {
          background: var(--b-warm);
          color: var(--b-ink);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        /* Nav — warm/light */
        .b-nav {
          position: sticky; top: 0; z-index: 50;
          height: 68px; display: flex; align-items: center;
          padding: 0 clamp(24px, 5vw, 64px);
          background: var(--b-warm);
          border-bottom: 1px solid var(--b-stone);
        }
        .b-nav-inner {
          width: 100%; max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .b-nav-links {
          display: flex; gap: 32px; list-style: none; margin: 0; padding: 0;
        }
        .b-nav-links a {
          font-family: var(--font-body); font-size: 13.5px; font-weight: 400;
          letter-spacing: 0.02em; color: var(--b-mid);
          text-decoration: none; transition: color 200ms;
        }
        .b-nav-links a:hover { color: var(--b-ink); }
        .b-nav-cta {
          display: inline-flex; align-items: center; justify-content: center;
          height: 42px; padding: 0 24px;
          background: var(--b-amber); color: var(--b-ink);
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.04em; text-decoration: none;
          border-radius: 4px;
          transition: background 200ms, transform 100ms;
        }
        .b-nav-cta:hover { background: var(--b-amber-h); transform: translateY(-1px); }
        .b-nav-cta:active { transform: translateY(0); }

        /* Hero — split composition */
        .b-hero {
          background: var(--b-deep);
          padding: clamp(56px, 7vw, 96px) clamp(24px, 5vw, 64px);
          overflow: hidden;
        }
        .b-hero-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 72px); align-items: center;
          min-height: calc(100svh - 68px - 80px);
        }
        .b-hero-text { color: white; }
        .b-hero-kicker {
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          letter-spacing: 0.15em; color: var(--b-amber);
          margin-bottom: 24px;
        }
        .b-hero-h1 {
          font-family: var(--font-dis);
          font-size: clamp(44px, 6vw, 88px); font-weight: 500;
          line-height: 1.0; letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .b-hero-h1 em {
          font-style: italic; font-weight: 400;
        }
        .b-hero-p {
          font-family: var(--font-body); font-size: 17px; font-weight: 300;
          color: rgba(255,255,255,0.65); line-height: 1.7;
          margin: 0 0 40px; max-width: 440px;
        }
        .b-hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .b-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          height: 50px; padding: 0 32px;
          background: var(--b-amber); color: var(--b-deep);
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-decoration: none; border-radius: 4px;
          transition: background 200ms, transform 100ms;
        }
        .b-btn-primary:hover { background: var(--b-amber-h); transform: translateY(-1px); }
        .b-btn-primary:active { transform: translateY(0); }
        .b-btn-outline {
          display: inline-flex; align-items: center; justify-content: center;
          height: 50px; padding: 0 32px;
          background: transparent; color: rgba(255,255,255,0.80);
          border: 1.5px solid rgba(255,255,255,0.25);
          font-family: var(--font-body); font-size: 13px; font-weight: 500;
          letter-spacing: 0.04em; text-decoration: none; border-radius: 4px;
          transition: border-color 200ms, color 200ms;
        }
        .b-btn-outline:hover { border-color: rgba(255,255,255,0.65); color: white; }
        .b-hero-img-wrap {
          position: relative; overflow: hidden;
          border-radius: 6px; aspect-ratio: 4/3;
          background: var(--b-navy);
        }
        .b-hero-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
        }
        .b-hero-img-wrap:hover img { transform: scale(1.025); }
        .b-hero-price-badge {
          position: absolute; bottom: 20px; left: 20px;
          background: rgba(11,23,40,0.88); backdrop-filter: blur(6px);
          color: white; padding: 12px 18px; border-radius: 4px;
        }
        .b-hero-price-badge span {
          display: block; font-family: var(--font-body);
          font-size: 11px; color: var(--b-amber); letter-spacing: 0.1em;
          margin-bottom: 2px;
        }
        .b-hero-price-badge strong {
          font-family: var(--font-dis); font-size: 28px; font-weight: 500;
          line-height: 1;
        }
        .b-hero-price-badge em {
          font-style: normal; font-family: var(--font-body);
          font-size: 13px; color: rgba(255,255,255,0.55);
        }

        /* Booking strip — señal del futuro flujo de reserva */
        .b-strip {
          background: var(--b-sand);
          border-top: 1px solid var(--b-stone);
          border-bottom: 1px solid var(--b-stone);
          padding: 20px clamp(24px, 5vw, 64px);
        }
        .b-strip-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .b-strip-label {
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          color: var(--b-ink); white-space: nowrap;
          flex-shrink: 0;
        }
        .b-strip-field {
          flex: 1; min-width: 140px; max-width: 200px;
          height: 44px; padding: 0 14px;
          background: white; border: 1.5px solid var(--b-stone);
          color: var(--b-mid); font-family: var(--font-body); font-size: 13px;
          border-radius: 4px; outline: none; cursor: not-allowed;
        }
        .b-strip-select {
          height: 44px; padding: 0 14px;
          background: white; border: 1.5px solid var(--b-stone);
          color: var(--b-ink); font-family: var(--font-body); font-size: 13px;
          font-weight: 500; border-radius: 4px; outline: none; cursor: not-allowed;
          min-width: 140px;
        }
        .b-strip-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 44px; padding: 0 28px;
          background: var(--b-deep); color: var(--b-amber);
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.04em; border-radius: 4px; border: none; cursor: not-allowed;
          flex-shrink: 0; opacity: 0.7;
        }
        .b-strip-note {
          font-family: var(--font-body); font-size: 11px; color: var(--b-muted);
          flex-basis: 100%;
        }

        /* Fleet section */
        .b-section {
          padding: clamp(72px, 9vw, 120px) clamp(24px, 5vw, 64px);
          max-width: 1280px; margin: 0 auto;
        }
        .b-section-h2 {
          font-family: var(--font-dis); font-size: clamp(36px, 4.5vw, 64px);
          font-weight: 500; line-height: 1.05; letter-spacing: -0.02em;
          margin: 0 0 clamp(40px, 5vw, 64px);
        }
        .b-fleet-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3vw, 40px);
        }
        .b-car-card {
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column;
          background: white; border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          transition: transform 250ms ease, box-shadow 250ms ease;
        }
        .b-car-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
        }
        .b-car-img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 16/10; background: var(--b-sand);
        }
        .b-car-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
        }
        .b-car-card:hover .b-car-img-wrap img { transform: scale(1.025); }
        .b-car-loc {
          position: absolute; top: 14px; right: 14px;
          background: var(--b-amber); color: var(--b-deep);
          font-family: var(--font-body); font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; padding: 4px 10px; border-radius: 3px;
        }
        .b-car-body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; }
        .b-car-name {
          font-family: var(--font-dis); font-size: 22px; font-weight: 500;
          line-height: 1.2; margin: 0 0 10px; color: var(--b-ink);
        }
        .b-car-specs {
          display: flex; gap: 16px; flex-wrap: wrap;
          margin-bottom: 16px;
          font-family: var(--font-body); font-size: 13px; color: var(--b-muted);
        }
        .b-car-price-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid var(--b-sand);
        }
        .b-car-price-val {
          font-family: var(--font-dis); font-size: 36px; font-weight: 500;
          line-height: 1; color: var(--b-deep);
        }
        .b-car-price-unit {
          font-family: var(--font-body); font-size: 13px; color: var(--b-muted);
          margin-left: 4px;
        }
        .b-car-cta {
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; color: var(--b-amber);
          padding-bottom: 1px; border-bottom: 1.5px solid var(--b-amber);
        }

        /* Destinations — portrait editorial */
        .b-dest-wrap {
          background: var(--b-deep);
          padding: clamp(72px, 9vw, 120px) clamp(24px, 5vw, 64px);
        }
        .b-dest-inner { max-width: 1280px; margin: 0 auto; }
        .b-dest-h2 {
          font-family: var(--font-dis); font-size: clamp(36px, 4.5vw, 64px);
          font-weight: 500; line-height: 1.05; letter-spacing: -0.02em;
          color: white; margin: 0 0 clamp(40px, 5vw, 64px);
        }
        .b-dest-grid {
          display: grid; grid-template-columns: 2fr 3fr;
          gap: 2px;
        }
        .b-dest-card {
          position: relative; overflow: hidden;
          display: flex; align-items: flex-end;
          min-height: 440px; text-decoration: none;
        }
        .b-dest-card-bg {
          position: absolute; inset: 0;
          transition: transform 700ms ease;
        }
        .b-dest-card:hover .b-dest-card-bg { transform: scale(1.04); }
        .b-dest-grad-ibiza {
          background: linear-gradient(160deg, #0F3A4F 0%, #1B5E75 45%, #2D8A9A 100%);
        }
        .b-dest-grad-alicante {
          background: linear-gradient(160deg, #3A2508 0%, #6B4215 45%, #9C6830 100%);
        }
        .b-dest-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
        }
        .b-dest-content {
          position: relative; z-index: 10; padding: 36px 32px;
          color: white; width: 100%;
        }
        .b-dest-name {
          font-family: var(--font-dis); font-size: clamp(48px, 6vw, 80px);
          font-weight: 500; line-height: 0.95; letter-spacing: -0.03em;
          margin: 0 0 8px;
        }
        .b-dest-tagline {
          font-family: var(--font-body); font-size: 14px; color: rgba(255,255,255,0.6);
          margin-bottom: 20px; line-height: 1.5;
        }
        .b-dest-pickups {
          font-family: var(--font-body); font-size: 12px;
          color: var(--b-amber); letter-spacing: 0.06em; margin-bottom: 24px;
        }
        .b-dest-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 46px; padding: 0 28px;
          background: rgba(255,255,255,0.12); border: 1.5px solid rgba(255,255,255,0.3);
          color: white; backdrop-filter: blur(4px);
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; border-radius: 4px; text-decoration: none;
          transition: background 200ms, border-color 200ms;
        }
        .b-dest-card:hover .b-dest-btn {
          background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.55);
        }

        /* How it works */
        .b-how-wrap {
          background: var(--b-sand);
          padding: clamp(72px, 9vw, 120px) clamp(24px, 5vw, 64px);
        }
        .b-how-inner { max-width: 1280px; margin: 0 auto; }
        .b-how-h2 {
          font-family: var(--font-dis); font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 500; letter-spacing: -0.02em;
          margin: 0 0 clamp(40px, 5vw, 64px);
        }
        .b-how-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: clamp(24px, 3vw, 40px);
        }
        .b-how-step { display: flex; flex-direction: column; gap: 14px; }
        .b-how-num {
          font-family: var(--font-dis); font-size: 48px; font-weight: 400;
          line-height: 1; color: var(--b-stone); font-style: italic;
        }
        .b-how-title {
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          color: var(--b-ink);
        }
        .b-how-body {
          font-family: var(--font-body); font-size: 14px; color: var(--b-mid);
          line-height: 1.65;
        }

        /* CTA section */
        .b-cta-wrap {
          background: var(--b-warm);
          padding: clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px);
          text-align: center;
        }
        .b-cta-inner { max-width: 560px; margin: 0 auto; }
        .b-cta-h2 {
          font-family: var(--font-dis); font-size: clamp(40px, 5vw, 68px);
          font-weight: 500; line-height: 1.0; letter-spacing: -0.02em;
          margin: 0 0 20px;
        }
        .b-cta-sub {
          font-family: var(--font-body); font-size: 16px; color: var(--b-mid);
          line-height: 1.7; margin: 0 0 36px;
        }
        .b-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .b-btn-dark {
          display: inline-flex; align-items: center; justify-content: center;
          height: 50px; padding: 0 32px;
          background: var(--b-deep); color: var(--b-amber);
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-decoration: none; border-radius: 4px;
          transition: background 200ms;
        }
        .b-btn-dark:hover { background: var(--b-navy); }

        /* Footer */
        .b-footer {
          background: var(--b-deep); color: rgba(255,255,255,0.4);
          padding: 40px clamp(24px, 5vw, 64px);
          font-family: var(--font-body); font-size: 12px;
        }
        .b-footer-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .b-footer a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .b-footer a:hover { color: rgba(255,255,255,0.7); }
        .b-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }

        /* Dev banner */
        .b-dev-banner {
          background: var(--b-amber); color: var(--b-deep);
          padding: 10px clamp(24px, 5vw, 64px);
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          display: flex; gap: 24px; align-items: center; flex-wrap: wrap;
        }
        .b-dev-banner a { color: var(--b-deep); font-weight: 700; text-decoration: none; }
        .b-dev-banner a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 900px) {
          .b-hero-inner { grid-template-columns: 1fr; }
          .b-hero-img-wrap { order: -1; max-height: 320px; }
          .b-fleet-grid { grid-template-columns: 1fr; }
          .b-dest-grid { grid-template-columns: 1fr; }
          .b-how-grid { grid-template-columns: 1fr 1fr; }
          .b-nav-links { display: none; }
        }
        @media (max-width: 540px) {
          .b-how-grid { grid-template-columns: 1fr; }
          .b-strip-field, .b-strip-select { min-width: 100%; max-width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .b-car-img-wrap img, .b-dest-card-bg,
          .b-car-card, .b-btn-primary, .b-btn-dark { transition: none !important; transform: none !important; }
        }
      `}</style>

      <div className="b-root">
        {/* Dev banner */}
        <div className="b-dev-banner" role="banner" aria-label="Prototipo de desarrollo">
          <span>Prototipo — Design B: Mediterranean Premium</span>
          <a href="/">Volver a la web actual</a>
          <a href="/design-a">Design A: Luxury Minimal</a>
          <a href="/design-c">Design C: Conversion</a>
        </div>

        {/* Nav */}
        <nav className="b-nav" aria-label="Navegación principal">
          <div className="b-nav-inner">
            <Link href="/" aria-label="Here & Now — inicio">
              <Image
                src="/images/logo-here-and-now.svg"
                alt="Here & Now"
                width={160}
                height={30}
                style={{ height: '28px', width: 'auto' }}
                priority
              />
            </Link>
            <ul className="b-nav-links">
              <li><Link href="/flota">Flota</Link></li>
              <li><Link href="/ibiza">Ibiza</Link></li>
              <li><Link href="/alicante">Alicante</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
            <Link href="/ibiza" className="b-nav-cta">Reservar</Link>
          </div>
        </nav>

        {/* Hero — split */}
        <section className="b-hero" aria-label="Alquiler Mercedes en el Mediterráneo">
          <div className="b-hero-inner">
            <div className="b-hero-text">
              <p className="b-hero-kicker">Ibiza · Alicante · Mercedes-Benz</p>
              <h1 className="b-hero-h1">
                Conducir en<br />
                <em>Mercedes.</em>
              </h1>
              <p className="b-hero-p">
                Recorre Ibiza o la Costa Blanca a bordo de un Mercedes Clase V. Recogida en aeropuerto, puerto u oficina. Sin sorpresas.
              </p>
              <div className="b-hero-btns">
                <Link href="/ibiza" className="b-btn-primary">Reservar en Ibiza</Link>
                <Link href="/alicante" className="b-btn-outline">Reservar en Alicante</Link>
              </div>
            </div>
            <div>
              <div className="b-hero-img-wrap">
                <Image
                  src="/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/01.png"
                  alt="Mercedes-Benz Clase V en el Mediterráneo"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="b-hero-price-badge">
                  <span>Desde</span>
                  <strong>130€</strong>
                  <em>/día</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking strip — future booking flow signal */}
        <div className="b-strip" role="search" aria-label="Buscador de disponibilidad — próximamente">
          <div className="b-strip-inner">
            <span className="b-strip-label">¿Cuándo llegás?</span>
            <select className="b-strip-select" disabled aria-label="Seleccionar destino" title="Próximamente disponible">
              <option>Ibiza</option>
              <option>Alicante</option>
            </select>
            <input
              type="date"
              className="b-strip-field"
              placeholder="Llegada"
              aria-label="Fecha de llegada"
              disabled
              title="Sistema de reservas en construcción"
            />
            <input
              type="date"
              className="b-strip-field"
              placeholder="Salida"
              aria-label="Fecha de salida"
              disabled
              title="Sistema de reservas en construcción"
            />
            <button className="b-strip-btn" disabled aria-label="Verificar disponibilidad — próximamente">
              Ver disponibilidad
            </button>
            <p className="b-strip-note">Sistema de disponibilidad en tiempo real disponible próximamente. Por ahora, contáctanos para confirmar.</p>
          </div>
        </div>

        {/* Fleet */}
        <div style={{ background: 'var(--b-warm)' }}>
          <section aria-labelledby="b-fleet-h2">
            <div className="b-section">
              <h2 id="b-fleet-h2" className="b-section-h2">
                La flota
              </h2>
              <div className="b-fleet-grid">
                {CARS.map((car, i) => (
                  <Link key={car.slug} href={`/flota/${car.slug}`} className="b-car-card" aria-label={car.name}>
                    <div className="b-car-img-wrap">
                      <Image
                        src={car.image}
                        alt={car.imageAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <span className="b-car-loc">{car.locationLabel}</span>
                    </div>
                    <div className="b-car-body">
                      <h3 className="b-car-name">{car.short}</h3>
                      <div className="b-car-specs">
                        <span>{car.passengers} plazas</span>
                        <span>{car.transmission}</span>
                        <span>{car.fuel}</span>
                        <span>{car.year}</span>
                      </div>
                      <div className="b-car-price-row">
                        <div>
                          <span className="b-car-price-val">{car.price}€</span>
                          <span className="b-car-price-unit">/día</span>
                        </div>
                        <span className="b-car-cta">Ver y reservar</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Destinations */}
        <div className="b-dest-wrap">
          <div className="b-dest-inner">
            <h2 className="b-dest-h2">Ibiza.<br />Alicante.</h2>
            <div className="b-dest-grid">
              <Link href="/ibiza" className="b-dest-card" aria-label="Alquilar en Ibiza">
                <div className="b-dest-card-bg b-dest-grad-ibiza" aria-hidden="true" />
                <div className="b-dest-overlay" aria-hidden="true" />
                <div className="b-dest-content">
                  <h3 className="b-dest-name">Ibiza</h3>
                  <p className="b-dest-tagline">La isla del lujo mediterráneo.<br />Recogida en aeropuerto y puerto.</p>
                  <p className="b-dest-pickups">Aeropuerto · Puerto</p>
                  <span className="b-dest-btn">Alquilar en Ibiza</span>
                </div>
              </Link>
              <Link href="/alicante" className="b-dest-card" aria-label="Alquilar en Alicante">
                <div className="b-dest-card-bg b-dest-grad-alicante" aria-hidden="true" />
                <div className="b-dest-overlay" aria-hidden="true" />
                <div className="b-dest-content">
                  <h3 className="b-dest-name">Alicante</h3>
                  <p className="b-dest-tagline">La Costa Blanca en un Mercedes.<br />Tres puntos de recogida.</p>
                  <p className="b-dest-pickups">Aeropuerto · Oficina · Puerto</p>
                  <span className="b-dest-btn">Alquilar en Alicante</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="b-how-wrap">
          <div className="b-how-inner">
            <h2 className="b-how-h2">Cómo funciona</h2>
            <div className="b-how-grid">
              {HOW_STEPS.map((step) => (
                <div key={step.n} className="b-how-step">
                  <span className="b-how-num" aria-hidden="true">{step.n}</span>
                  <h3 className="b-how-title">{step.title}</h3>
                  <p className="b-how-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="b-cta-wrap">
          <div className="b-cta-inner">
            <h2 className="b-cta-h2">¿Listo para<br />el viaje?</h2>
            <p className="b-cta-sub">
              Elige destino y reserva tu Mercedes en minutos. Te esperamos donde llegues.
            </p>
            <div className="b-cta-btns">
              <Link href="/ibiza" className="b-btn-primary">Reservar en Ibiza</Link>
              <Link href="/alicante" className="b-btn-dark">Reservar en Alicante</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="b-footer">
          <div className="b-footer-inner">
            <span>© 2025 Here &amp; Now · Alquiler premium de Mercedes</span>
            <nav aria-label="Pie de página" className="b-footer-links">
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
