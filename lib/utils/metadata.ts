import type { Metadata } from 'next';
import { urlFor } from '@/lib/sanity/image';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

type LocaleString = { es: string; en?: string };
type SeoFields = {
  metaTitle?: LocaleString;
  metaDescription?: LocaleString;
  ogImage?: unknown;
  canonicalUrl?: string;
  noindex?: boolean;
};

/** Build Metadata for any page from Sanity seoFields */
export function buildMetadata({
  seo,
  path,
  fallbackTitle,
  fallbackDescription,
  ogImageFallback,
  locale = 'es',
}: {
  seo?: SeoFields;
  path: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  ogImageFallback?: unknown;
  locale?: 'es' | 'en';
}): Metadata {
  const title = seo?.metaTitle?.[locale] ?? seo?.metaTitle?.es ?? fallbackTitle;
  const description = seo?.metaDescription?.[locale] ?? seo?.metaDescription?.es ?? fallbackDescription;
  const canonicalUrl = seo?.canonicalUrl ?? `${SITE_URL}${path}`;
  const noindex = seo?.noindex ?? false;

  const ogImageSource = seo?.ogImage ?? ogImageFallback;
  const ogImageUrl = ogImageSource
    ? urlFor(ogImageSource).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title ?? undefined,
      description: description ?? undefined,
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      siteName: 'Here & Now',
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: title ?? undefined,
      description: description ?? undefined,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}

/** Build absolute URL from a path */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
