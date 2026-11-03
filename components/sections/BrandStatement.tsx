// Server Component — brand identity section
export function BrandStatement() {
  return (
    <section
      className="section-padding bg-[var(--color-night)] text-[var(--color-canvas)]"
      aria-label="Marca"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4">
          MERCEDES RENT A CAR
        </p>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-[-0.02em] text-[var(--color-canvas)]">
          THE BEST OR NOTHING
        </h2>
        <p className="mt-4 text-[var(--color-fog)] text-lg max-w-xl mx-auto">
          Cada vehículo de nuestra flota es un Mercedes. Ninguna excepción.
        </p>
      </div>
    </section>
  );
}
