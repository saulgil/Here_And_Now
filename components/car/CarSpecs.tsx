import {
  Users, DoorOpen, Settings2, Fuel, Gauge, Package,
  Palette, Armchair, Circle, ShieldCheck, Thermometer,
  PlugZap, Eye, Sun,
} from 'lucide-react';
import type { Car } from '@/types/sanity';

const FUEL_LABELS: Record<string, string> = {
  diesel: 'Diésel',
  gasolina: 'Gasolina',
  hibrido: 'Híbrido',
  electrico: 'Eléctrico',
};

const TRANSMISSION_LABELS: Record<string, string> = {
  automatic: 'Automático',
  manual: 'Manual',
};

type SpecItem = { icon: React.ReactNode; label: string; value: string | number };

interface CarSpecsProps {
  car: Pick<Car,
    | 'passengers' | 'doors' | 'lateralDoors'
    | 'transmission' | 'gearbox' | 'fuel' | 'power' | 'luggage'
    | 'colorExterior' | 'colorInterior' | 'wheels' | 'year'
  >;
  locale?: 'es' | 'en';
  className?: string;
}

// Server Component — pure data display
export function CarSpecs({ car, locale = 'es', className }: CarSpecsProps) {
  const specs: SpecItem[] = [
    { icon: <Users size={16} />, label: 'Pasajeros', value: `${car.passengers} plazas` },
    {
      icon: <DoorOpen size={16} />,
      label: 'Puertas',
      value: car.lateralDoors ? `${car.doors} + laterales automáticas` : `${car.doors}`,
    },
    { icon: <Settings2 size={16} />, label: 'Transmisión', value: car.gearbox ?? TRANSMISSION_LABELS[car.transmission] ?? car.transmission },
    { icon: <Fuel size={16} />, label: 'Combustible', value: FUEL_LABELS[car.fuel] ?? car.fuel },
    ...(car.year ? [{ icon: <Circle size={16} />, label: 'Año', value: car.year }] : []),
    ...(car.power ? [{ icon: <Gauge size={16} />, label: 'Potencia', value: `${car.power} CV` }] : []),
    ...(car.luggage ? [{ icon: <Package size={16} />, label: 'Maletero', value: `${car.luggage} L` }] : []),
    ...(car.colorExterior ? [{ icon: <Palette size={16} />, label: 'Color exterior', value: car.colorExterior[locale] ?? car.colorExterior.es }] : []),
    ...(car.colorInterior ? [{ icon: <Armchair size={16} />, label: 'Interior', value: car.colorInterior[locale] ?? car.colorInterior.es }] : []),
    ...(car.wheels ? [{ icon: <Circle size={16} />, label: 'Llantas', value: car.wheels }] : []),
  ];

  // Filter out specs with empty values
  const validSpecs = specs.filter((s) => s.value !== '' && s.value !== undefined);

  return (
    <div className={className}>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-[var(--color-mist)] sm:divide-y-0">
        {validSpecs.map((spec, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-3 sm:py-2.5 sm:border-b sm:border-[var(--color-mist)]"
          >
            <span
              className="mt-0.5 text-[var(--color-fog)] flex-shrink-0"
              aria-hidden="true"
            >
              {spec.icon}
            </span>
            <div className="min-w-0">
              <dt className="text-xs text-[var(--color-fog)] uppercase tracking-wider mb-0.5">
                {spec.label}
              </dt>
              <dd className="text-sm font-medium text-[var(--color-ink)] truncate">
                {spec.value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
