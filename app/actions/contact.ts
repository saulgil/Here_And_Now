'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Nombre demasiado corto').max(100),
  email: z.string().email('Email no válido'),
  destination: z.enum(['ibiza', 'alicante', 'both', '']).optional(),
  message: z.string().min(10, 'Mensaje demasiado corto').max(2000),
  gdpr: z.literal('true', { errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) }),
});

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  message?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    destination: formData.get('destination'),
    message: formData.get('message'),
    gdpr: formData.get('gdpr'),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: 'error',
      errors: Object.fromEntries(
        Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]]),
      ) as ContactFormState['errors'],
    };
  }

  try {
    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && contactEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'web@hereandnow.es',
          to: contactEmail,
          subject: `[Here & Now] Consulta de ${parsed.data.name}`,
          html: `
            <p><strong>Nombre:</strong> ${parsed.data.name}</p>
            <p><strong>Email:</strong> ${parsed.data.email}</p>
            <p><strong>Destino:</strong> ${parsed.data.destination ?? 'No indicado'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${parsed.data.message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });
    } else {
      // Dev mode — just log
      console.info('[Contact] Form submission (no email provider configured):', parsed.data);
    }

    return { status: 'success', message: 'Mensaje enviado correctamente. Te respondemos en menos de 24h.' };
  } catch (err) {
    console.error('[Contact] Send error:', err);
    return { status: 'error', message: 'Error al enviar el mensaje. Llámanos al 625 305 620.' };
  }
}
