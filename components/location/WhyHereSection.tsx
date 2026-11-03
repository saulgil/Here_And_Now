// Server Component — local "why rent here" content, differs per destination
interface Reason {
  title: string;
  description: string;
}

interface WhyHereSectionProps {
  heading: string;
  reasons: Reason[];
  className?: string;
}

export function WhyHereSection({ heading, reasons, className }: WhyHereSectionProps) {
  return (
    <section
      className={`section-padding ${className ?? ''}`}
      aria-labelledby="why-here-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <h2
          id="why-here-heading"
          className="text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-10 max-w-2xl"
        >
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className="w-8 h-px bg-[var(--color-gold)] mb-2"
                aria-hidden="true"
              />
              <h3 className="font-semibold text-[var(--color-ink)]">
                {reason.title}
              </h3>
              <p className="text-[var(--color-vapor)] text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
