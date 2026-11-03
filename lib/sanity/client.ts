import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // stega for visual editing deferred to a later phase
});

// Write client for webhooks and mutations (server-side only)
export const writeSanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
