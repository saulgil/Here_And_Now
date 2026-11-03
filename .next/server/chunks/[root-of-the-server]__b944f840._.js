module.exports = {

"[project]/.next-internal/server/app/sitemap.xml/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/sanity/client.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sanityClient": (()=>sanityClient),
    "writeSanityClient": (()=>writeSanityClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
;
const projectId = ("TURBOPACK compile-time value", "placeholder-project-id") ?? 'placeholder';
const dataset = ("TURBOPACK compile-time value", "production") ?? 'production';
const apiVersion = ("TURBOPACK compile-time value", "2024-10-01") ?? '2024-10-01';
const sanityClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId,
    dataset,
    apiVersion,
    useCdn: ("TURBOPACK compile-time value", "development") === 'production'
});
const writeSanityClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
});
}}),
"[project]/lib/sanity/queries.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// ── Site Settings ──────────────────────────────────────────────
__turbopack_context__.s({
    "ALL_ACTIVE_CARS_QUERY": (()=>ALL_ACTIVE_CARS_QUERY),
    "ALL_CAR_SLUGS_QUERY": (()=>ALL_CAR_SLUGS_QUERY),
    "ALL_GUIDE_SLUGS_QUERY": (()=>ALL_GUIDE_SLUGS_QUERY),
    "ALL_LOCATION_SLUGS_QUERY": (()=>ALL_LOCATION_SLUGS_QUERY),
    "ALL_PICKUP_POINT_SLUGS_QUERY": (()=>ALL_PICKUP_POINT_SLUGS_QUERY),
    "CAR_AVAILABILITIES_QUERY": (()=>CAR_AVAILABILITIES_QUERY),
    "CAR_BY_SLUG_QUERY": (()=>CAR_BY_SLUG_QUERY),
    "FAQS_BY_CATEGORY_QUERY": (()=>FAQS_BY_CATEGORY_QUERY),
    "FEATURED_TESTIMONIALS_QUERY": (()=>FEATURED_TESTIMONIALS_QUERY),
    "GUIDE_BY_SLUG_QUERY": (()=>GUIDE_BY_SLUG_QUERY),
    "LOCATION_BY_SLUG_QUERY": (()=>LOCATION_BY_SLUG_QUERY),
    "PICKUP_POINTS_BY_LOCATION_QUERY": (()=>PICKUP_POINTS_BY_LOCATION_QUERY),
    "PICKUP_POINT_BY_SLUG_QUERY": (()=>PICKUP_POINT_BY_SLUG_QUERY),
    "SITE_SETTINGS_QUERY": (()=>SITE_SETTINGS_QUERY)
});
const SITE_SETTINGS_QUERY = `
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
const CAR_BY_SLUG_QUERY = `
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
const ALL_CAR_SLUGS_QUERY = `
  *[_type == 'car' && defined(slug.current)]{
    "slug": slug.current
  }
`;
const ALL_ACTIVE_CARS_QUERY = `
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
const CAR_AVAILABILITIES_QUERY = `
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
const LOCATION_BY_SLUG_QUERY = `
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
const ALL_LOCATION_SLUGS_QUERY = `
  *[_type == 'location' && defined(slug.current)]{
    "slug": slug.current
  }
`;
const PICKUP_POINT_BY_SLUG_QUERY = `
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
const PICKUP_POINTS_BY_LOCATION_QUERY = `
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
const ALL_PICKUP_POINT_SLUGS_QUERY = `
  *[_type == 'pickupPoint' && defined(slug.current)]{
    "slug": slug.current,
    "locationSlug": location->slug.current
  }
`;
const FAQS_BY_CATEGORY_QUERY = `
  *[_type == 'faq' && category == $category] | order(order asc){
    _id,
    question,
    answer,
    category
  }
`;
const GUIDE_BY_SLUG_QUERY = `
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
const ALL_GUIDE_SLUGS_QUERY = `
  *[_type == 'guide' && defined(slug.current)]{
    "slug": slug.current,
    "publishedAt": publishedAt,
    "updatedAt": updatedAt
  }
`;
const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == 'testimonial' && featured == true] | order(_createdAt desc)[0...5]{
    _id,
    author,
    text,
    location->{ name, slug },
    rating,
    date
  }
`;
}}),
"[project]/lib/sanity/fetch.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllActiveCars": (()=>getAllActiveCars),
    "getAllCarSlugs": (()=>getAllCarSlugs),
    "getAllGuideSlugs": (()=>getAllGuideSlugs),
    "getAllLocationSlugs": (()=>getAllLocationSlugs),
    "getAllPickupPointSlugs": (()=>getAllPickupPointSlugs),
    "getCarAvailabilities": (()=>getCarAvailabilities),
    "getCarBySlug": (()=>getCarBySlug),
    "getFaqsByCategory": (()=>getFaqsByCategory),
    "getFeaturedTestimonials": (()=>getFeaturedTestimonials),
    "getGuideBySlug": (()=>getGuideBySlug),
    "getLocationBySlug": (()=>getLocationBySlug),
    "getPickupPointBySlug": (()=>getPickupPointBySlug),
    "getPickupPointsByLocation": (()=>getPickupPointsByLocation),
    "getSiteSettings": (()=>getSiteSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/queries.ts [app-rsc] (ecmascript)");
;
;
;
/** Core fetch wrapper with on-demand cache tags. Returns null on Sanity API errors. */ async function fetchSanity(query, params = {}, tags = []) {
    const doFetch = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityClient"].fetch(query, params).catch((err)=>{
            // Gracefully degrade when Sanity is not configured or returns an error
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn('[Sanity] Fetch error (configure NEXT_PUBLIC_SANITY_PROJECT_ID):', err.message);
            }
            return null;
        });
    if ("TURBOPACK compile-time truthy", 1) {
        return doFetch();
    }
    "TURBOPACK unreachable";
    const cached = undefined;
}
function getSiteSettings() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_SETTINGS_QUERY"], {}, [
        'siteSettings'
    ]);
}
function getCarBySlug(slug) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAR_BY_SLUG_QUERY"], {
        slug
    }, [
        'car',
        `car:${slug}`
    ]);
}
function getAllCarSlugs() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_CAR_SLUGS_QUERY"], {}, [
        'car'
    ]);
}
function getAllActiveCars() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_ACTIVE_CARS_QUERY"], {}, [
        'car',
        'carAvailability'
    ]);
}
function getCarAvailabilities(carId) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAR_AVAILABILITIES_QUERY"], {
        carId
    }, [
        'carAvailability',
        `car:${carId}`
    ]);
}
function getLocationBySlug(slug) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATION_BY_SLUG_QUERY"], {
        slug
    }, [
        'location',
        `location:${slug}`
    ]);
}
function getAllLocationSlugs() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_LOCATION_SLUGS_QUERY"], {}, [
        'location'
    ]);
}
function getPickupPointsByLocation(locationSlug) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PICKUP_POINTS_BY_LOCATION_QUERY"], {
        locationSlug
    }, [
        'pickupPoint',
        `location:${locationSlug}`
    ]);
}
function getPickupPointBySlug(locationSlug, pointSlug) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PICKUP_POINT_BY_SLUG_QUERY"], {
        locationSlug,
        pointSlug
    }, [
        'pickupPoint',
        `location:${locationSlug}`
    ]);
}
function getAllPickupPointSlugs() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_PICKUP_POINT_SLUGS_QUERY"], {}, [
        'pickupPoint'
    ]);
}
function getFaqsByCategory(category) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQS_BY_CATEGORY_QUERY"], {
        category
    }, [
        'faq'
    ]);
}
function getGuideBySlug(slug) {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GUIDE_BY_SLUG_QUERY"], {
        slug
    }, [
        'guide',
        `guide:${slug}`
    ]);
}
function getAllGuideSlugs() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_GUIDE_SLUGS_QUERY"], {}, [
        'guide'
    ]);
}
function getFeaturedTestimonials() {
    return fetchSanity(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FEATURED_TESTIMONIALS_QUERY"], {}, [
        'testimonial'
    ]);
}
}}),
"[project]/app/sitemap.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>sitemap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/fetch.ts [app-rsc] (ecmascript)");
;
const SITE_URL = ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'https://hereandnow.es';
async function sitemap() {
    const [cars, locations, guides, pickupPoints] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCarSlugs"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllLocationSlugs"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllGuideSlugs"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPickupPointSlugs"])()
    ]);
    const staticRoutes = [
        {
            url: SITE_URL,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        {
            url: `${SITE_URL}/flota`,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${SITE_URL}/guias`,
            changeFrequency: 'weekly',
            priority: 0.7
        },
        {
            url: `${SITE_URL}/contacto`,
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: `${SITE_URL}/terminos-y-condiciones`,
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: `${SITE_URL}/politica-cancelacion`,
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: `${SITE_URL}/privacidad`,
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: `${SITE_URL}/aviso-legal`,
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: `${SITE_URL}/cookies`,
            changeFrequency: 'yearly',
            priority: 0.2
        }
    ];
    const locationRoutes = (locations ?? []).map((loc)=>({
            url: `${SITE_URL}/${loc.slug}`,
            changeFrequency: 'weekly',
            priority: 0.9
        }));
    const pickupPointRoutes = (pickupPoints ?? []).map((pp)=>({
            url: `${SITE_URL}/${pp.locationSlug}/${pp.slug}`,
            changeFrequency: 'monthly',
            priority: 0.7
        }));
    const carRoutes = (cars ?? []).map((car)=>({
            url: `${SITE_URL}/flota/${car.slug}`,
            changeFrequency: 'weekly',
            priority: 0.95
        }));
    const guideRoutes = (guides ?? []).map((guide)=>({
            url: `${SITE_URL}/guias/${guide.slug}`,
            lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
            changeFrequency: 'monthly',
            priority: 0.6
        }));
    return [
        ...staticRoutes,
        ...locationRoutes,
        ...pickupPointRoutes,
        ...carRoutes,
        ...guideRoutes
    ];
}
}}),
"[project]/app/sitemap--route-entry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-rsc] (ecmascript)");
;
;
;
const sitemapModule = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
};
const handler = sitemapModule.default;
const generateSitemaps = sitemapModule.generateSitemaps;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof handler !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET(_, ctx) {
    const { __metadata_id__: id, ...params } = await ctx.params || {};
    const hasXmlExtension = id ? id.endsWith('.xml') : false;
    if (id && !hasXmlExtension) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"]('Not Found', {
            status: 404
        });
    }
    if (("TURBOPACK compile-time value", "development") !== 'production' && sitemapModule.generateSitemaps) {
        const sitemaps = await sitemapModule.generateSitemaps();
        for (const item of sitemaps){
            if (item?.id == null) {
                throw new Error('id property is required for every item returned from generateSitemaps');
            }
        }
    }
    const targetId = id && hasXmlExtension ? id.slice(0, -4) : undefined;
    const data = await handler({
        id: targetId
    });
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b944f840._.js.map