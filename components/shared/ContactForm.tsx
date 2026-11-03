'use client';

import { useState, useTransition, useRef } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [state, setState] = useState<ContactFormState>({ status: 'idle' });
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm({ status: 'idle' }, formData);
      setState(result);
      if (result.status === 'success') {
        formRef.current?.reset();
      }
    });
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      noValidate
      className={className}
    >
      {/* Success */}
      {state.status === 'success' && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-[var(--radius-sm)] mb-6"
        >
          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-green-800">{state.message}</p>
        </div>
      )}

      {/* Error message */}
      {state.status === 'error' && state.message && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[var(--radius-sm)] mb-6"
        >
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-800">{state.message}</p>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Nombre y apellidos <span aria-label="obligatorio" className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-describedby={state.errors?.name ? 'cf-name-error' : undefined}
            aria-invalid={!!state.errors?.name}
            className={inputCls(!!state.errors?.name)}
            placeholder="Tu nombre completo"
          />
          {state.errors?.name && (
            <p id="cf-name-error" role="alert" className={errorCls}>{state.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Correo electrónico <span aria-label="obligatorio" className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-describedby={state.errors?.email ? 'cf-email-error' : undefined}
            aria-invalid={!!state.errors?.email}
            className={inputCls(!!state.errors?.email)}
            placeholder="tu@email.com"
          />
          {state.errors?.email && (
            <p id="cf-email-error" role="alert" className={errorCls}>{state.errors.email}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="cf-destination" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Destino de interés
          </label>
          <select
            id="cf-destination"
            name="destination"
            className={inputCls(false)}
          >
            <option value="">Seleccionar destino (opcional)</option>
            <option value="ibiza">Ibiza</option>
            <option value="alicante">Alicante</option>
            <option value="both">Ambos destinos</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
            Mensaje <span aria-label="obligatorio" className="text-[var(--color-gold)]">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            aria-describedby={state.errors?.message ? 'cf-message-error' : undefined}
            aria-invalid={!!state.errors?.message}
            className={`${inputCls(!!state.errors?.message)} resize-y min-h-[120px] py-3`}
            placeholder="¿En qué podemos ayudarte?"
          />
          {state.errors?.message && (
            <p id="cf-message-error" role="alert" className={errorCls}>{state.errors.message}</p>
          )}
        </div>

        {/* GDPR */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="gdpr"
              value="true"
              required
              aria-describedby={state.errors?.gdpr ? 'cf-gdpr-error' : undefined}
              aria-invalid={!!state.errors?.gdpr}
              className="mt-0.5 w-4 h-4 rounded border-[var(--color-mist)] accent-[var(--color-gold)] flex-shrink-0"
            />
            <span className="text-sm text-[var(--color-vapor)] leading-relaxed">
              He leído y acepto la{' '}
              <a href="/privacidad" className="underline hover:text-[var(--color-ink)] transition-colors" target="_blank" rel="noopener">
                política de privacidad
              </a>
              {' '}de Here &amp; Now. <span aria-label="obligatorio" className="text-[var(--color-gold)]">*</span>
            </span>
          </label>
          {state.errors?.gdpr && (
            <p id="cf-gdpr-error" role="alert" className={`${errorCls} mt-1`}>{state.errors.gdpr}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="flex items-center justify-center h-12 w-full bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin mr-2" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            'Enviar mensaje'
          )}
        </button>
      </div>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return [
    'w-full h-12 px-4 text-base text-[var(--color-ink)] bg-[var(--color-surface)]',
    'border rounded-[var(--radius-sm)]',
    'placeholder:text-[var(--color-fog)]',
    'focus:outline-none focus:ring-[3px]',
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-[var(--color-mist)] focus:border-[var(--color-gold)] focus:ring-[rgba(184,150,90,0.18)]',
    'transition-[border-color,box-shadow] duration-150',
  ].join(' ');
}

const errorCls = 'mt-1.5 text-xs text-red-600 flex items-center gap-1';
