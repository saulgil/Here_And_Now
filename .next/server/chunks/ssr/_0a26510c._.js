module.exports = {

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
"[project]/components/layout/MobileNav.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MobileNav": (()=>MobileNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const MobileNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MobileNav() from the server but MobileNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/MobileNav.tsx <module evaluation>", "MobileNav");
}}),
"[project]/components/layout/MobileNav.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MobileNav": (()=>MobileNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const MobileNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MobileNav() from the server but MobileNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/MobileNav.tsx", "MobileNav");
}}),
"[project]/components/layout/MobileNav.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileNav$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/layout/MobileNav.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileNav$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/layout/MobileNav.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileNav$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/layout/Header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/MobileNav.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Header({ settings }) {
    const siteName = settings?.siteName ?? 'Here & Now';
    const logoUrl = settings?.logo?.asset?.url;
    const navItems = settings?.mainNav ?? [];
    const phone = settings?.phone;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 h-16 flex items-center bg-[var(--color-canvas)]/95 backdrop-blur-sm border-b border-[var(--color-mist)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": `${siteName} — página de inicio`,
                    className: "flex-shrink-0",
                    children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: logoUrl,
                        alt: siteName,
                        width: 140,
                        height: 27,
                        priority: true,
                        className: "h-7 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-lg tracking-tight",
                        children: siteName
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex items-center gap-8",
                    "aria-label": "Navegación principal",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors py-2",
                                    children: [
                                        item.label.es,
                                        item.children && item.children.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-[var(--color-fog)]",
                                            children: "▾"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                item.children && item.children.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-180",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] shadow-[var(--shadow-modal)] py-2 min-w-[200px]",
                                        children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: child.href,
                                                    className: "block px-5 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-stone)] transition-colors",
                                                    children: child.label.es
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, this)
                                            }, child.href, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 67,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/ibiza",
                            className: "hidden lg:inline-flex items-center justify-center h-10 px-6 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-xs tracking-wider uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors",
                            children: "Reservar"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MobileNav"], {
                            items: navItems,
                            phone: phone
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/layout/Footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
;
;
;
;
function Footer({ settings }) {
    const siteName = settings?.siteName ?? 'Here & Now';
    const logoUrl = settings?.logo?.asset?.url;
    const phone = settings?.phone ?? '+34 625 305 620';
    const col1 = settings?.footerNavCol1 ?? [
        {
            label: {
                es: 'Reservar en Ibiza'
            },
            href: '/ibiza'
        },
        {
            label: {
                es: 'Aeropuerto de Ibiza'
            },
            href: '/ibiza/aeropuerto'
        },
        {
            label: {
                es: 'Puerto de Ibiza'
            },
            href: '/ibiza/puerto'
        }
    ];
    const col2 = settings?.footerNavCol2 ?? [
        {
            label: {
                es: 'Reservar en Alicante'
            },
            href: '/alicante'
        },
        {
            label: {
                es: 'Aeropuerto de Alicante'
            },
            href: '/alicante/aeropuerto'
        },
        {
            label: {
                es: 'Oficina El Campello'
            },
            href: '/alicante/oficina'
        },
        {
            label: {
                es: 'Puerto de Alicante'
            },
            href: '/alicante/puerto'
        }
    ];
    const legal = settings?.footerNavLegal ?? [
        {
            label: {
                es: 'Términos y Condiciones'
            },
            href: '/terminos-y-condiciones'
        },
        {
            label: {
                es: 'Política de Cancelación'
            },
            href: '/politica-cancelacion'
        },
        {
            label: {
                es: 'Privacidad'
            },
            href: '/privacidad'
        },
        {
            label: {
                es: 'Aviso Legal'
            },
            href: '/aviso-legal'
        },
        {
            label: {
                es: 'Cookies'
            },
            href: '/cookies'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[var(--color-night)] text-[var(--color-canvas)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1280px] mx-auto px-6 lg:px-12 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    "aria-label": `${siteName} — inicio`,
                                    className: "inline-block mb-6",
                                    children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: logoUrl,
                                        alt: siteName,
                                        width: 120,
                                        height: 23,
                                        className: "h-6 w-auto brightness-0 invert"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-lg",
                                        children: siteName
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--color-fog)] mb-6 leading-relaxed",
                                    children: "Alquiler exclusivo de coches Mercedes en Ibiza y Alicante."
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        settings?.instagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: settings.instagramUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Instagram",
                                            className: "text-[var(--color-fog)] hover:text-[var(--color-gold)] transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        settings?.threadsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: settings.threadsUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Threads",
                                            className: "text-[var(--color-fog)] hover:text-[var(--color-gold)] transition-colors text-sm font-medium",
                                            children: "@"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5",
                                    children: "Ibiza"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: col1.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors",
                                                children: item.label.es
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5",
                                    children: "Alicante"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: col2.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors",
                                                children: item.label.es
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold tracking-widest uppercase text-[var(--color-vapor)] mb-5",
                                    children: "Contacto"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${phone.replace(/\s/g, '')}`,
                                                className: "flex items-center gap-2 text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 14,
                                                        className: "flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.google.es/maps/place/Alquiler+Coches+Here+and+Now/@38.405728,-0.4103166,17z",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-start gap-2 text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 14,
                                                        className: "flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Calle de la Figuera, 5",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 47
                                                            }, this),
                                                            "03560 El Campello, Alicante"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contacto",
                                                className: "text-sm text-[var(--color-fog)] hover:text-[var(--color-canvas)] transition-colors",
                                                children: "Formulario de contacto →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--color-night-2)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--color-fog)]",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                siteName,
                                ". Todos los derechos reservados."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-wrap gap-x-6 gap-y-1",
                            children: legal.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "text-xs text-[var(--color-fog)] hover:text-[var(--color-vapor)] transition-colors",
                                        children: item.label.es
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/shared/SchemaOrg.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Server Component — injects JSON-LD structured data without adding client JS
__turbopack_context__.s({
    "SchemaOrg": (()=>SchemaOrg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SchemaOrg({ schema }) {
    const schemas = Array.isArray(schema) ? schema : [
        schema
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: schemas.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(s)
                }
            }, i, false, {
                fileName: "[project]/components/shared/SchemaOrg.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
}}),
"[project]/lib/schema/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// JSON-LD / Schema.org generators
// All return plain objects to be serialized in <SchemaOrg> component
__turbopack_context__.s({
    "generateBreadcrumbSchema": (()=>generateBreadcrumbSchema),
    "generateCarProductSchema": (()=>generateCarProductSchema),
    "generateFAQSchema": (()=>generateFAQSchema),
    "generateLocalBusinessSchema": (()=>generateLocalBusinessSchema),
    "generateOrganizationSchema": (()=>generateOrganizationSchema),
    "generateWebSiteSchema": (()=>generateWebSiteSchema)
});
const SITE_URL = ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'https://hereandnow.es';
function l(field, locale = 'es') {
    if (!field) return '';
    return field[locale] ?? field.es ?? '';
}
function generateOrganizationSchema(settings) {
    return {
        '@context': 'https://schema.org',
        '@type': [
            'Organization',
            'CarRental'
        ],
        '@id': `${SITE_URL}/#organization`,
        name: settings.siteName ?? 'Here & Now',
        url: SITE_URL,
        logo: settings.logo?.asset?.url,
        telephone: settings.phone,
        email: settings.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle de la Figuera, 5, local 58',
            addressLocality: 'El Campello',
            addressRegion: 'Alicante',
            postalCode: '03560',
            addressCountry: 'ES'
        },
        sameAs: [
            settings.instagramUrl,
            settings.threadsUrl
        ].filter(Boolean)
    };
}
function generateLocalBusinessSchema(settings, pickupPoint) {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: settings.siteName,
        url: SITE_URL,
        telephone: pickupPoint.phone,
        address: pickupPoint.address ? {
            '@type': 'PostalAddress',
            streetAddress: pickupPoint.address,
            addressCountry: 'ES'
        } : undefined,
        geo: pickupPoint.coordinates ? {
            '@type': 'GeoCoordinates',
            latitude: pickupPoint.coordinates.lat,
            longitude: pickupPoint.coordinates.lng
        } : undefined,
        openingHoursSpecification: pickupPoint.openingHours?.filter((oh)=>!oh.closed).map((oh)=>({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: oh.days,
                opens: oh.opens,
                closes: oh.closes
            }))
    };
}
function generateCarProductSchema(car, availabilities) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: l(car.name),
        description: car.shortDescription ? l(car.shortDescription) : undefined,
        image: car.gallery?.map((img)=>img.asset?.url).filter(Boolean),
        brand: car.brand ? {
            '@type': 'Brand',
            name: car.brand.name
        } : undefined,
        offers: availabilities.map((av)=>({
                '@type': 'Offer',
                price: av.pricePerDay,
                priceCurrency: av.currency,
                availability: 'https://schema.org/InStock',
                areaServed: av.location ? l(av.location.name) : undefined
            }))
    };
}
function generateFAQSchema(faqs, locale = 'es') {
    // Converts Portable Text to a plain string (simplified)
    function toPlainText(blocks) {
        if (!Array.isArray(blocks)) return '';
        return blocks.map((block)=>block.children?.map((c)=>c.text ?? '').join('') ?? '').join(' ');
    }
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq)=>({
                '@type': 'Question',
                name: l(faq.question, locale),
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: toPlainText(faq.answer?.[locale] ?? faq.answer?.es)
                }
            }))
    };
}
function generateBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
}
function generateWebSiteSchema(siteName) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: siteName,
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/flota?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        },
        inLanguage: 'es'
    };
}
}}),
"[project]/app/(site)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SiteLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/fetch.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SchemaOrg.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema/index.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function SiteLayout({ children }) {
    const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteSettings"])();
    const schemas = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateWebSiteSchema"])(settings?.siteName ?? 'Here & Now'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateOrganizationSchema"])(settings ?? {
            siteName: 'Here & Now'
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaOrg"], {
                schema: schemas
            }, void 0, false, {
                fileName: "[project]/app/(site)/layout.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main-content",
                className: "skip-link",
                children: "Ir al contenido principal"
            }, void 0, false, {
                fileName: "[project]/app/(site)/layout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {
                settings: settings
            }, void 0, false, {
                fileName: "[project]/app/(site)/layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/(site)/layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {
                settings: settings
            }, void 0, false, {
                fileName: "[project]/app/(site)/layout.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=_0a26510c._.js.map