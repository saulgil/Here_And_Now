// Domain types for the local data layer (replaces types/sanity.ts).
// Shapes are kept intentionally close to the former Sanity-sourced types
// so that existing components require minimal changes when migrated.

export type LocaleString = { es: string; en?: string };
export type LocaleText = { es: string; en?: string };
// Rich text content is represented as a plain array of paragraphs — the
// real content migrated from Sanity (FAQ answers, car/location descriptions)
// is always 1-2 short paragraphs, so no block/rich-text engine is needed.
export type LocaleBlockContent = { es: string[]; en?: string[] };

export type ImageAsset = {
  _id?: string;
  url: string;
  metadata?: {
    blurHash?: string;
    dimensions?: { width: number; height: number };
  };
};

export type ImageWithAlt = {
  asset: ImageAsset;
  alt: LocaleString;
  caption?: LocaleString;
};

export type Geopoint = {
  lat: number;
  lng: number;
  alt?: number;
};

export type Slug = { current: string };

export type NavItem = {
  label: LocaleString;
  href: string;
  isExternal?: boolean;
  children?: Array<{ label: LocaleString; href: string }>;
};

// ── Site settings ───────────────────────────────────────────────

export type SiteSettings = {
  siteName?: string;
  tagline?: LocaleString;
  logo?: { asset?: { url: string } };
  logoLight?: { asset?: { url: string } };
  phone?: string;
  email?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  threadsUrl?: string;
  facebookUrl?: string;
  mainNav?: NavItem[];
  footerNavCol1?: NavItem[];
  footerNavCol2?: NavItem[];
  footerNavLegal?: NavItem[];
  defaultSeo?: SeoFields;
} | null;

export type SeoFields = {
  metaTitle?: LocaleString;
  metaDescription?: LocaleString;
  ogImage?: ImageWithAlt;
  canonicalUrl?: string;
  noindex?: boolean;
};

export type Brand = {
  name: string;
  logo?: { asset?: { url: string } };
};

export type CarCategory = {
  name: LocaleString;
  slug: Slug;
  icon?: string;
};

// ── Locations ────────────────────────────────────────────────────

export type Location = {
  _id: string;
  name: LocaleString;
  slug: Slug;
  countryCode?: string;
  region?: string;
  shortDescription?: LocaleText;
  fullDescription?: LocaleBlockContent;
  heroImage?: ImageWithAlt;
  faqs?: FAQ[];
  seo?: SeoFields;
};

// ── Pickup points ────────────────────────────────────────────────

export type OpeningHours = {
  days: string[];
  opens: string;
  closes: string;
  closed?: boolean;
};

export type PickupPoint = {
  _id: string;
  name: LocaleString;
  slug: Slug;
  locationSlug: 'ibiza' | 'alicante';
  location?: { _id: string; name: LocaleString; slug: Slug };
  address?: string;
  coordinates?: Geopoint;
  phone?: string;
  openingHours?: OpeningHours[];
  shortDescription?: LocaleText;
  fullDescription?: LocaleBlockContent;
  instructions?: LocaleBlockContent;
  image?: ImageWithAlt;
  seo?: SeoFields;
};

// ── Cars ─────────────────────────────────────────────────────────

export type Extra = {
  name: LocaleString;
  price: number;
  pricingModel: 'one_time' | 'per_day';
  maxQuantity?: number;
};

export type Coverage = {
  name: LocaleString;
  slug: string;
  price: number;
  pricingModel: 'per_booking' | 'per_day';
  franchiseAmount: number;
  depositAmountCard: number;
  includesRoadside: boolean;
  description?: LocaleText;
  isDefault: boolean;
};

// Availability of one car at one destination. `validFrom`/`validTo` are
// optional today (year-round availability) but let the model evolve to
// seasonal pricing without a structural change (see Paso 6 of the plan).
export type CarAvailability = {
  location: 'ibiza' | 'alicante';
  active: boolean;
  pricePerDay: number;
  currency: 'EUR';
  pickupPoints: string[]; // PickupPoint slugs available for this car+location
  extras?: Extra[];
  coverages?: Coverage[];
  validFrom?: string; // ISO date, optional — omit for year-round
  validTo?: string; // ISO date, optional — omit for year-round
};

export type CarListItem = {
  _id: string;
  name: LocaleString;
  slug: Slug;
  passengers: number;
  transmission: 'automatic' | 'manual';
  fuel: 'diesel' | 'gasolina' | 'hibrido' | 'electrico';
  year?: number;
  mainImage?: ImageWithAlt;
  minPrice?: number;
  availableLocations?: string[];
};

export type Car = {
  _id: string;
  name: LocaleString;
  slug: Slug;
  internalId?: string;
  brand?: Brand;
  model: string;
  variant?: string;
  year?: number;
  category?: CarCategory;

  passengers: number;
  doors: number;
  lateralDoors?: boolean;
  transmission: 'automatic' | 'manual';
  gearbox?: string;
  fuel: 'diesel' | 'gasolina' | 'hibrido' | 'electrico';
  power?: number;
  luggage?: number;
  colorExterior?: LocaleString;
  colorInterior?: LocaleString;
  wheels?: string;

  minAge: number;
  minLicenseYears: number;
  kmIncluded: number;
  kmExtraPrice: number;

  shortDescription: LocaleText;
  fullDescription?: LocaleBlockContent;
  features: LocaleString[];

  mainImage?: ImageWithAlt;
  gallery?: ImageWithAlt[];

  active: boolean;
  featured?: boolean;

  availability: CarAvailability[];

  faqs?: FAQ[];
  seo?: SeoFields;
};

// ── FAQ ──────────────────────────────────────────────────────────

export type FAQ = {
  _id: string;
  question: LocaleString;
  answer: LocaleBlockContent;
  category?: 'general' | 'ibiza' | 'alicante' | 'booking' | 'vehicle' | 'coverage' | 'payment';
};

// ── Testimonials ─────────────────────────────────────────────────

export type Testimonial = {
  _id: string;
  author: string;
  text: LocaleText;
  location?: { name: LocaleString; slug: Slug };
  rating?: number;
  date?: string;
};

// ── Guides (not used by any current page — kept for sitemap parity) ─

export type Guide = {
  _id: string;
  title: LocaleString;
  slug: Slug;
  publishedAt: string;
  updatedAt?: string;
  excerpt: LocaleText;
  body: LocaleBlockContent;
  mainImage?: ImageWithAlt;
  category: string;
  seo?: SeoFields;
};

// ── Promotions (Paso 7 — structure ready, no active promos today) ──

export type Promotion = {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  validFrom?: string; // ISO date
  validTo?: string; // ISO date
  active: boolean;
  carSlugs?: string[]; // empty/undefined = applies to all cars
  locations?: Array<'ibiza' | 'alicante'>; // empty/undefined = applies to all locations
};
