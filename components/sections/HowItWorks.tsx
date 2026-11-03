import Link from 'next/link';
import { CalendarDays, Car, Map } from 'lucide-react';

// Server Component — static content
export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <CalendarDays size={24} strokeWidth={1.5} />,
      title: 'Elige y reserva online',
      description: 'Selecciona el vehículo, las fechas y el punto de recogida. Pago seguro con tarjeta o Bizum. Confirmación inmediata.',
    },
    {
      number: '02',
      icon: <Car size={24} strokeWidth={1.5} />,
      title: 'Recogemos en tu punto',
      description: 'Te esperamos en el aeropuerto, el puerto o nuestra oficina con el Mercedes preparado y listo para salir.',
    },
    {
      number: '03',
      icon: <Map size={24} strokeWidth={1.5} />,
      title: 'Disfruta sin preocupaciones',
      description: 'Conduce con plena libertad. Asistencia en carretera incluida. Devuelve el vehículo cuando y donde hayas acordado.',
    },
  ];

  return (
    <section
      className="section-padding"
      aria-labelledby="como-funciona-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Simple y rápido
          </p>
          <h2 id="como-funciona-heading" className="text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]">
            Reserva en 3 pasos
          </h2>
        </div>

        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          role="list"
        >
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-[-2rem] h-px bg-[var(--color-mist)]"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-start md:items-center md:text-center">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 md:flex-col md:gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-fog)]">
                    Paso {step.number}
                  </span>
                </div>

                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-vapor)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link
            href="/flota"
            className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
          >
            Ver nuestra flota
          </Link>
        </div>
      </div>
    </section>
  );
}
