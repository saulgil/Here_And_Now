// Shared TypeScript types for Sanity data structures

export type LocaleString = { es: string; en?: string };
export type LocaleText = { es: string; en?: string };
export type PortableTextBlock = Record<string, unknown>;
export type LocaleBlockContent = { es: PortableTextBlock[]; en?: PortableTextBlock[] };

export type SanityAsset = {
  _id?: string;
  url: string;
  metadata?: {
    blurHash?: string;
    dimensions?: { width: number; height: number };
  };
};

export type SanityImageWithAlt = {
  asset: SanityAsset;
  alt: LocaleString;
  caption?: LocaleString;
};

export type SanityGeopoint = {
  lat: number;
  lng: number;
  alt?: number;
};

export type SanitySlug = { current: string };

export type NavItem = {
  label: LocaleString;
  href: string;
  isExternal?: boolean;
  children?: Array<{ label: LocaleString; href: string }>;
};

// ── Sanity document shapes (as returned by GROQ queries) ────────

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
  ogImage?: SanityImageWithAlt;
  canonicalUrl?: string;
  noindex?: boolean;
};

export type Brand = {
  name: string;
  logo?: { asset?: { url: string } };
};

export type CarCategory = {
  name: LocaleString;
  slug: SanitySlug;
  icon?: string;
};

export type CarListItem = {
  _id: string;
  name: LocaleString;
  slug: SanitySlug;
  passengers: number;
  transmission: 'automatic' | 'manual';
  fuel: 'diesel' | 'gasolina' | 'hibrido' | 'electrico';
  year?: number;
  mainImage: SanityImageWithAlt;
  minPrice?: number;
  availableLocations?: string[];
};

export type Car = {
  _id: string;
  name: LocaleString;
  slug: SanitySlug;
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
  fullDescription: LocaleBlockContent;
  features: LocaleString[];
  mainImage: SanityImageWithAlt;
  gallery: SanityImageWithAlt[];
  faqs?: FAQ[];
  seo?: SeoFields;
};

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

export type OpeningHours = {
  days: string[];
  opens: string;
  closes: string;
  closed?: boolean;
};

export type PickupPoint = {
  _id: string;
  name: LocaleString;
  slug: SanitySlug;
  location?: { _id: string; name: LocaleString; slug: SanitySlug };
  address?: string;
  coordinates?: SanityGeopoint;
  phone?: string;
  openingHours?: OpeningHours[];
  shortDescription?: LocaleText;
  fullDescription?: LocaleBlockContent;
  instructions?: LocaleBlockContent;
  image?: SanityImageWithAlt;
  seo?: SeoFields;
};

export type CarAvailability = {
  _id: string;
  pricePerDay: number;
  currency: string;
  location?: { _id: string; name: LocaleString; slug: SanitySlug };
  availablePickupPoints?: PickupPoint[];
  extras?: Extra[];
  coverages?: Coverage[];
};

export type FAQ = {
  _id: string;
  question: LocaleString;
  answer: LocaleBlockContent;
  category?: string;
};

export type Location = {
  _id: string;
  name: LocaleString;
  slug: SanitySlug;
  shortDescription?: LocaleText;
  fullDescription?: LocaleBlockContent;
  heroImage?: SanityImageWithAlt;
  faqs?: FAQ[];
  seo?: SeoFields;
};

export type Testimonial = {
  _id: string;
  author: string;
  text: LocaleText;
  location?: { name: LocaleString; slug: SanitySlug };
  rating?: number;
  date?: string;
};

export type Guide = {
  _id: string;
  title: LocaleString;
  slug: SanitySlug;
  publishedAt: string;
  updatedAt?: string;
  excerpt: LocaleText;
  body: LocaleBlockContent;
  mainImage: SanityImageWithAlt;
  category: string;
  seo?: SeoFields;
};
