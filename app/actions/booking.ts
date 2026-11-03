'use server';

import { z } from 'zod';

const schema = z.object({
  carName: z.string(),
  carSlug: z.string(),
  destination: z.enum(['ibiza', 'alicante'], {
    errorMap: () => ({ message: 'Selecciona un destino' }),
  }),
  checkin: z.string().min(1, 'Indica la fecha de recogida'),
  checkout: z.string().min(1, 'Indica la fecha de entrega'),
  name: z.string().min(2, 'Nombre demasiado corto').max(100),
  email: z.string().email('Email no válido'),
  phone: z.string().optional(),
  gdpr: z.literal('true', {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
});

export type BookingFormState = {
  status: 'idle' | 'success' | 'error';
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  message?: string;
};

export async function submitPreReservation(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: 'error',
      errors: Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0]]),
      ) as BookingFormState['errors'],
    };
  }

  const { carName, destination, checkin, checkout, name, email, phone } = parsed.data;
  const destLabel = destination === 'ibiza' ? 'Ibiza' : 'Alicante';

  try {
    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    const body = `
      <h2>Solicitud de pre-reserva</h2>
      <p><strong>Vehículo:</strong> ${carName}</p>
      <p><strong>Destino:</strong> ${destLabel}</p>
      <p><strong>Fecha recogida:</strong> ${checkin}</p>
      <p><strong>Fecha entrega:</strong> ${checkout}</p>
      <hr>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
    `;

    if (resendKey && contactEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'reservas@hereandnow.es',
          to: contactEmail,
          subject: `[Pre-reserva] ${carName} — ${destLabel} · ${checkin} → ${checkout}`,
          html: body,
          reply_to: email,
        }),
      });
    } else {
      console.info('[Booking] Pre-reservation (no email configured):', parsed.data);
    }

    return {
      status: 'success',
      message:
        'Solicitud enviada. Te contactamos en menos de 24h para confirmar disponibilidad y precio final.',
    };
  } catch (err) {
    console.error('[Booking] Error:', err);
    return {
      status: 'error',
      message: 'Error al enviar. Llámanos directamente al 625 305 620.',
    };
  }
}
