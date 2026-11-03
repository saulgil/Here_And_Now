'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateFAQSchema } from '@/lib/schema';
import { RichText } from '@/components/shared/RichText';
import type { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  locale?: 'es' | 'en';
  showContactLink?: boolean;
  className?: string;
}

export function FAQSection({
  faqs,
  heading = 'Preguntas frecuentes',
  locale = 'es',
  showContactLink = true,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!faqs || faqs.length === 0) return null;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={className} aria-labelledby="faq-heading">
      <SchemaOrg schema={generateFAQSchema(faqs, locale)} />

      {heading && (
        <h2 id="faq-heading" className="text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-8">
          {heading}
        </h2>
      )}

      <dl className="divide-y divide-[var(--color-mist)] border-t border-[var(--color-mist)]">
        {faqs.map((faq, i) => {
          const question = faq.question[locale] ?? faq.question.es;
          const answer = faq.answer[locale] ?? faq.answer.es;
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-btn-${i}`;

          return (
            <div key={faq._id} className="border-b border-[var(--color-mist)]">
              <dt>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className={[
                    'w-full flex items-center justify-between gap-4',
                    'py-4 text-left',
                    'text-[var(--color-ink)] font-medium text-base',
                    'hover:text-[var(--color-gold)] transition-colors',
                    'min-h-[48px]', // Accessibility tap target
                  ].join(' ')}
                >
                  <span>{question}</span>
                  <span
                    className="flex-shrink-0 text-[var(--color-fog)] transition-transform duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </dt>

              <dd
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="overflow-hidden"
              >
                {isOpen && (
                  <div className="pb-4 text-[var(--color-vapor)] text-base leading-relaxed">
                    <RichText value={answer} />
                  </div>
                )}
              </dd>
            </div>
          );
        })}
      </dl>

      {showContactLink && (
        <p className="mt-6 text-sm text-[var(--color-vapor)]">
          ¿Más preguntas?{' '}
          <Link href="/contacto" className="text-[var(--color-ink)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors">
            Contáctanos
          </Link>
        </p>
      )}
    </section>
  );
}
