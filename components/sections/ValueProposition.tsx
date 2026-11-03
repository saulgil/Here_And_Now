import { Shield, Zap, Star, MapPin } from 'lucide-react';

type Value = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

// Server Component — static content
export function ValueProposition() {
  const values: Value[] = [
    {
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: 'SEGURIDAD',
      subtitle: 'Con la garantía Mercedes',
      description: 'Todos nuestros vehículos son modelos recientes con el más alto estándar de seguridad. Asistencia en carretera incluida en cada reserva.',
    },
    {
      icon: <Star size={28} strokeWidth={1.5} />,
      title: 'CONFORT',
      subtitle: 'Comodidad de alta gama',
      description: 'Interiores de cuero, climatización de zona trasera, puertas laterales automáticas y hasta 8 plazas de auténtico lujo.',
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: 'RÁPIDO',
      subtitle: 'Check-in ágil y sin esperas',
      description: 'Te esperamos con el vehículo preparado. Sin colas, sin formularios interminables. En minutos estás en marcha.',
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: 'FLEXIBLE',
      subtitle: 'Recogida donde quieras',
      description: 'Aeropuerto, puerto u oficina propia. Elige el punto más conveniente y nosotros nos encargamos del resto.',
    },
  ];

  return (
    <section
      className="section-padding bg-[var(--color-stone)]"
      aria-labelledby="valores-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Por qué elegirnos
          </p>
          <h2 id="valores-heading" className="text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]">
            Nuestros valores
          </h2>
          <p className="mt-4 text-[var(--color-vapor)] text-lg">
            Descubre la exclusividad en alquiler de vehículos Mercedes en Ibiza y Alicante con Here &amp; Now.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {values.map((value) => (
            <li
              key={value.title}
              className="bg-[var(--color-surface)] rounded-[var(--radius-md)] p-6 border border-[var(--color-mist)]"
            >
              <div className="text-[var(--color-gold)] mb-4" aria-hidden="true">
                {value.icon}
              </div>
              <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] mb-1">
                {value.title}
              </h3>
              <p className="text-sm font-medium text-[var(--color-vapor)] mb-3">
                {value.subtitle}
              </p>
              <p className="text-sm text-[var(--color-vapor)] leading-relaxed">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
