// ── Site Settings ──────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = `
  *[_type == 'siteSettings'][0]{
    siteName,
    tagline,
    logo{ asset->{ url } },
    logoLight{ asset->{ url } },
    phone,
    email,
    whatsappUrl,
    instagramUrl,
    threadsUrl,
    facebookUrl,
    mainNav[]{ label, href, isExternal, children[]{ label, href } },
    footerNavCol1[]{ label, href },
    footerNavCol2[]{ label, href },
    footerNavLegal[]{ label, href },
    defaultSeo
  }
`;

// ── Car — by slug ───────────────────────────────────────────────
export const CAR_BY_SLUG_QUERY = `
  *[_type == 'car' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    internalId,
    brand->{ name, logo{ asset->{ url } } },
    model,
    variant,
    year,
    category->{ name, slug, icon },
    passengers,
    doors,
    lateralDoors,
    transmission,
    gearbox,
    fuel,
    power,
    luggage,
    colorExterior,
    colorInterior,
    wheels,
    minAge,
    minLicenseYears,
    kmIncluded,
    kmExtraPrice,
    shortDescription,
    fullDescription,
    features,
    mainImage{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    gallery[]{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt, caption },
    faqs[]->{ _id, question, answer },
    seo
  }
`;

// ── Car — all slugs (for generateStaticParams) ──────────────────
export const ALL_CAR_SLUGS_QUERY = `
  *[_type == 'car' && defined(slug.current)]{
    "slug": slug.current
  }
`;

// ── Cars — all active (have at least one active carAvailability) ─
export const ALL_ACTIVE_CARS_QUERY = `
  *[_type == 'car' && count(*[_type=='carAvailability' && car._ref==^._id && isActive==true]) > 0]{
    _id,
    name,
    slug,
    passengers,
    transmission,
    fuel,
    year,
    mainImage{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    "minPrice": min(*[_type=='carAvailability' && car._ref==^._id && isActive==true].pricePerDay),
    "availableLocations": *[_type=='carAvailability' && car._ref==^._id && isActive==true].location->slug.current
  }
`;

// ── CarAvailability — for a specific car ────────────────────────
export const CAR_AVAILABILITIES_QUERY = `
  *[_type == 'carAvailability' && car._ref == $carId && isActive == true]{
    _id,
    pricePerDay,
    currency,
    location->{ _id, name, slug },
    availablePickupPoints[]->{ _id, name, slug, address, coordinates },
    extras[]{ name, price, pricingModel, maxQuantity },
    coverages[]{ name, slug, price, pricingModel, franchiseAmount, depositAmountCard, includesRoadside, description, isDefault }
  }
`;

// ── Location — by slug ──────────────────────────────────────────
export const LOCATION_BY_SLUG_QUERY = `
  *[_type == 'location' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    countryCode,
    region,
    shortDescription,
    fullDescription,
    heroImage{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    faqs[]->{ _id, question, answer },
    seo
  }
`;

// ── Location — all slugs ────────────────────────────────────────
export const ALL_LOCATION_SLUGS_QUERY = `
  *[_type == 'location' && defined(slug.current)]{
    "slug": slug.current
  }
`;

// ── PickupPoint — single by location + point slug ──────────────
export const PICKUP_POINT_BY_SLUG_QUERY = `
  *[_type == 'pickupPoint' && location->slug.current == $locationSlug && slug.current == $pointSlug][0]{
    _id,
    name,
    slug,
    address,
    coordinates,
    phone,
    openingHours,
    shortDescription,
    fullDescription,
    instructions,
    image{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    location->{ _id, name, slug },
    seo
  }
`;

// ── PickupPoint — by location slug ──────────────────────────────
export const PICKUP_POINTS_BY_LOCATION_QUERY = `
  *[_type == 'pickupPoint' && location->slug.current == $locationSlug]{
    _id,
    name,
    slug,
    address,
    coordinates,
    phone,
    openingHours,
    shortDescription,
    fullDescription,
    instructions,
    image{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    seo
  }
`;

// ── PickupPoint — all slugs with location ───────────────────────
export const ALL_PICKUP_POINT_SLUGS_QUERY = `
  *[_type == 'pickupPoint' && defined(slug.current)]{
    "slug": slug.current,
    "locationSlug": location->slug.current
  }
`;

// ── FAQs — by category ──────────────────────────────────────────
export const FAQS_BY_CATEGORY_QUERY = `
  *[_type == 'faq' && category == $category] | order(order asc){
    _id,
    question,
    answer,
    category
  }
`;

// ── Guide — by slug ─────────────────────────────────────────────
export const GUIDE_BY_SLUG_QUERY = `
  *[_type == 'guide' && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    updatedAt,
    author,
    excerpt,
    body,
    mainImage{ asset->{ _id, url, metadata{ blurHash, dimensions } }, alt },
    category,
    relatedCars[]->{ name, slug, mainImage{ asset->{ url }, alt } },
    relatedLocations[]->{ name, slug },
    faqs[]->{ _id, question, answer },
    seo
  }
`;

// ── Guide — all slugs ───────────────────────────────────────────
export const ALL_GUIDE_SLUGS_QUERY = `
  *[_type == 'guide' && defined(slug.current)]{
    "slug": slug.current,
    "publishedAt": publishedAt,
    "updatedAt": updatedAt
  }
`;

// ── Testimonials — featured ─────────────────────────────────────
export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == 'testimonial' && featured == true] | order(_createdAt desc)[0...5]{
    _id,
    author,
    text,
    location->{ name, slug },
    rating,
    date
  }
`;
