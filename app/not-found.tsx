import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-vapor)] mb-4">
        404
      </p>
      <h1 className="text-4xl font-semibold mb-4">Página no encontrada</h1>
      <p className="text-[var(--color-vapor)] mb-10 max-w-sm">
        La página que buscas no existe o ha sido trasladada a una nueva URL.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-wider uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
        >
          Ir al inicio
        </Link>
        <Link
          href="/flota"
          className="inline-flex items-center justify-center h-12 px-8 border-[1.5px] border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-sm tracking-wider uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-ink)] hover:text-[var(--color-canvas)] transition-colors"
        >
          Ver nuestra flota
        </Link>
      </div>
    </div>
  );
}
