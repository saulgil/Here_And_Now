import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

type LocaleString = { es: string; en?: string };
type ImageAsset = { url: string };
type ImageWithAlt = { asset: ImageAsset };
type SeoFields = {
  metaTitle?: LocaleString;
  metaDescription?: LocaleString;
  ogImage?: ImageWithAlt;
  canonicalUrl?: string;
  noindex?: boolean;
};

function resolveImageUrl(source: ImageWithAlt | ImageAsset | undefined): string | undefined {
  if (!source) return undefined;
  if ('asset' in source) return source.asset.url;
  return source.url;
}

/** Build Metadata for any page from local SEO fields */
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
  ogImageFallback?: ImageAsset;
  locale?: 'es' | 'en';
}): Metadata {
  const title = seo?.metaTitle?.[locale] ?? seo?.metaTitle?.es ?? fallbackTitle;
  const description = seo?.metaDescription?.[locale] ?? seo?.metaDescription?.es ?? fallbackDescription;

  const canonicalUrl = seo?.canonicalUrl ?? `${SITE_URL}${path}`;
  const noindex = seo?.noindex ?? false;

  const ogImageUrl = resolveImageUrl(seo?.ogImage) ?? resolveImageUrl(ogImageFallback);

  return {
    // Strip trailing " | Here & Now" or " — Here & Now" so the root layout
    // template ('%s | Here & Now') adds the site name exactly once.
    title: title?.replace(/ [—|] Here & Now$/, ''),
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
