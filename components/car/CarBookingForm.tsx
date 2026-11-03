'use client';

import { useState, useTransition, useRef } from 'react';
import { CheckCircle, AlertCircle, Loader2, Phone, MessageCircle } from 'lucide-react';
import { submitPreReservation, type BookingFormState } from '@/app/actions/booking';

interface CarBookingFormProps {
  carName: string;
  carSlug: string;
  priceFrom?: number;
  availableLocations?: string[];
}

export function CarBookingForm({
  carName,
  carSlug,
  priceFrom,
  availableLocations = [],
}: CarBookingFormProps) {
  const [state, setState] = useState<BookingFormState>({ status: 'idle' });
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitPreReservation({ status: 'idle' }, formData);
      setState(result);
      if (result.status === 'success') formRef.current?.reset();
    });
  };

  const hasIbiza = availableLocations.includes('ibiza');
  const hasAlicante = availableLocations.includes('alicante');

  return (
    <div id="formulario-reserva" className="bg-[var(--color-stone)] rounded-[var(--radius-md)] p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-[var(--color-ink)] mb-1">
        Solicitar reserva
      </h2>
      {priceFrom && (
        <p className="text-sm text-[var(--color-vapor)] mb-6">
          Desde{' '}
          <strong className="text-[var(--color-ink)] tabular-nums">{priceFrom}€</strong>/día ·
          Confirmamos disponibilidad en &lt;24h
        </p>
      )}

      {/* Success */}
      {state.status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-[var(--radius-sm)] mb-6" role="alert">
          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden />
          <p className="text-sm text-green-800">{state.message}</p>
        </div>
      )}

      {/* Error */}
      {state.status === 'error' && state.message && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[var(--radius-sm)] mb-6" role="alert">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" aria-hidden />
          <p className="text-sm text-red-800">{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={handleSubmit} noValidate>
        {/* Hidden fields */}
        <input type="hidden" name="carName" value={carName} />
        <input type="hidden" name="carSlug" value={carSlug} />

        <div className="flex flex-col gap-5">
          {/* Destination */}
          <div>
            <label htmlFor="bf-dest" className={labelCls}>
              Destino <span className="text-[var(--color-gold)]">*</span>
            </label>
            <select
              id="bf-dest"
              name="destination"
              required
              aria-invalid={!!state.errors?.destination}
              className={inputCls(!!state.errors?.destination)}
            >
              <option value="">Seleccionar destino</option>
              {hasIbiza && <option value="ibiza">Ibiza</option>}
              {hasAlicante && <option value="alicante">Alicante</option>}
            </select>
            {state.errors?.destination && <p className={errCls}>{state.errors.destination}</p>}
          </div>

          {/* Dates — two columns */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="bf-in" className={labelCls}>
                Fecha recogida <span className="text-[var(--color-gold)]">*</span>
              </label>
              <input
                id="bf-in"
                name="checkin"
                type="date"
                required
                aria-invalid={!!state.errors?.checkin}
                className={inputCls(!!state.errors?.checkin)}
              />
              {state.errors?.checkin && <p className={errCls}>{state.errors.checkin}</p>}
            </div>
            <div>
              <label htmlFor="bf-out" className={labelCls}>
                Fecha entrega <span className="text-[var(--color-gold)]">*</span>
              </label>
              <input
                id="bf-out"
                name="checkout"
                type="date"
                required
                aria-invalid={!!state.errors?.checkout}
                className={inputCls(!!state.errors?.checkout)}
              />
              {state.errors?.checkout && <p className={errCls}>{state.errors.checkout}</p>}
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="bf-name" className={labelCls}>
              Nombre <span className="text-[var(--color-gold)]">*</span>
            </label>
            <input
              id="bf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-invalid={!!state.errors?.name}
              className={inputCls(!!state.errors?.name)}
              placeholder="Tu nombre"
            />
            {state.errors?.name && <p className={errCls}>{state.errors.name}</p>}
          </div>

          {/* Email + phone — two columns on wider screens */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bf-email" className={labelCls}>
                Email <span className="text-[var(--color-gold)]">*</span>
              </label>
              <input
                id="bf-email"
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                aria-invalid={!!state.errors?.email}
                className={inputCls(!!state.errors?.email)}
                placeholder="tu@email.com"
              />
              {state.errors?.email && <p className={errCls}>{state.errors.email}</p>}
            </div>
            <div>
              <label htmlFor="bf-phone" className={labelCls}>Teléfono (opcional)</label>
              <input
                id="bf-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={inputCls(false)}
                placeholder="+34 600 000 000"
              />
            </div>
          </div>

          {/* GDPR */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="gdpr"
              value="true"
              required
              aria-invalid={!!state.errors?.gdpr}
              className="mt-0.5 w-4 h-4 accent-[var(--color-gold)] flex-shrink-0"
            />
            <span className="text-xs text-[var(--color-vapor)] leading-relaxed">
              Acepto la{' '}
              <a href="/privacidad" className="underline hover:text-[var(--color-ink)]" target="_blank" rel="noopener">
                política de privacidad
              </a>{' '}
              de Here &amp; Now.{' '}
              <span className="text-[var(--color-gold)]">*</span>
            </span>
          </label>
          {state.errors?.gdpr && <p className={errCls}>{state.errors.gdpr}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            aria-busy={isPending}
            className="flex items-center justify-center h-12 w-full bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isPending
              ? <><Loader2 size={16} className="animate-spin mr-2" aria-hidden />Enviando…</>
              : 'Solicitar reserva'}
          </button>
        </div>
      </form>

      {/* Alternative contact */}
      <div className="mt-5 pt-5 border-t border-[var(--color-mist)] flex flex-wrap gap-3 text-sm">
        <a
          href="tel:+34625305620"
          className="inline-flex items-center gap-1.5 text-[var(--color-vapor)] hover:text-[var(--color-ink)] transition-colors"
        >
          <Phone size={13} aria-hidden /> Llamar
        </a>
        <a
          href={`https://wa.me/34625305620?text=${encodeURIComponent(`Hola, me interesa reservar el ${carName}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--color-vapor)] hover:text-[var(--color-ink)] transition-colors"
        >
          <MessageCircle size={13} aria-hidden /> WhatsApp
        </a>
      </div>
    </div>
  );
}

const labelCls = 'block text-sm font-medium text-[var(--color-ink)] mb-1.5';
const errCls = 'mt-1 text-xs text-red-600';
function inputCls(err: boolean) {
  return [
    'w-full h-11 px-3 text-base bg-[var(--color-surface)] border rounded-[var(--radius-sm)]',
    'placeholder:text-[var(--color-fog)]',
    'focus:outline-none focus:ring-[3px]',
    err
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-[var(--color-mist)] focus:border-[var(--color-gold)] focus:ring-[rgba(184,150,90,0.18)]',
    'transition-[border-color,box-shadow] duration-150',
  ].join(' ');
}
