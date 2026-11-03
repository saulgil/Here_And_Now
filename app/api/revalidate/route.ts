import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';
import { type NextRequest } from 'next/server';

type SanityWebhookBody = {
  _type: string;
  slug?: { current: string };
};

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<SanityWebhookBody>(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    );

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Missing _type in body', { status: 400 });
    }

    // Revalidate by document type
    revalidateTag(body._type);

    // Revalidate by slug if available
    if (body.slug?.current) {
      revalidateTag(`${body._type}:${body.slug.current}`);
    }

    // Special case: carAvailability changes affect car pages too
    if (body._type === 'carAvailability') {
      revalidateTag('car');
    }

    return Response.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error('Revalidation error:', err);
    return new Response(String(err), { status: 500 });
  }
}
