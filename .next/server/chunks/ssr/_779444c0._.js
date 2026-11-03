module.exports = {

"[project]/components/shared/SchemaOrg.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Server Component — injects JSON-LD structured data without adding client JS
__turbopack_context__.s({
    "SchemaOrg": (()=>SchemaOrg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SchemaOrg({ schema }) {
    const schemas = Array.isArray(schema) ? schema : [
        schema
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: schemas.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
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
"[project]/lib/schema/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/components/shared/PortableText.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PortableText": (()=>PortableText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
const components = {
    block: {
        normal: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 last:mb-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 7,
                columnNumber: 31
            }, this),
        h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mt-8 mb-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 8,
                columnNumber: 27
            }, this),
        h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mt-6 mb-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 9,
                columnNumber: 27
            }, this),
        h4: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold mt-4 mb-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 10,
                columnNumber: 27
            }, this)
    },
    list: {
        bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside mb-4 space-y-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 13,
                columnNumber: 31
            }, this),
        number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "list-decimal list-inside mb-4 space-y-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 14,
                columnNumber: 31
            }, this)
    },
    listItem: {
        bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 17,
                columnNumber: 31
            }, this),
        number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 18,
                columnNumber: 31
            }, this)
    },
    marks: {
        strong: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 21,
                columnNumber: 31
            }, this),
        em: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 22,
                columnNumber: 27
            }, this),
        link: ({ value, children })=>{
            const href = value?.href ?? '#';
            const isExternal = href.startsWith('http');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                ...isExternal ? {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                } : {},
                className: "underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/PortableText.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this);
        }
    }
};
function PortableText({ value, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
            value: value,
            components: components
        }, void 0, false, {
            fileName: "[project]/components/shared/PortableText.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/PortableText.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/FAQSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQSection": (()=>FAQSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SchemaOrg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$PortableText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/PortableText.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function FAQSection({ faqs, heading = 'Preguntas frecuentes', locale = 'es', showContactLink = true, className }) {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // First item open by default
    if (!faqs || faqs.length === 0) return null;
    const toggle = (i)=>setOpenIndex(openIndex === i ? null : i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: className,
        "aria-labelledby": "faq-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaOrg"], {
                schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFAQSchema"])(faqs, locale)
            }, void 0, false, {
                fileName: "[project]/components/sections/FAQSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "faq-heading",
                className: "text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-8",
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/sections/FAQSection.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "divide-y divide-[var(--color-mist)] border-t border-[var(--color-mist)]",
                children: faqs.map((faq, i)=>{
                    const question = faq.question[locale] ?? faq.question.es;
                    const answer = faq.answer[locale] ?? faq.answer.es;
                    const isOpen = openIndex === i;
                    const panelId = `faq-panel-${i}`;
                    const buttonId = `faq-btn-${i}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[var(--color-mist)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: buttonId,
                                    "aria-expanded": isOpen,
                                    "aria-controls": panelId,
                                    onClick: ()=>toggle(i),
                                    className: [
                                        'w-full flex items-center justify-between gap-4',
                                        'py-4 text-left',
                                        'text-[var(--color-ink)] font-medium text-base',
                                        'hover:text-[var(--color-gold)] transition-colors',
                                        'min-h-[48px]'
                                    ].join(' '),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: question
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/FAQSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-shrink-0 text-[var(--color-fog)] transition-transform duration-200",
                                            "aria-hidden": "true",
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/FAQSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/FAQSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/FAQSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/FAQSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FAQSection.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                id: panelId,
                                role: "region",
                                "aria-labelledby": buttonId,
                                hidden: !isOpen,
                                className: "overflow-hidden",
                                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-4 text-[var(--color-vapor)] text-base leading-relaxed",
                                    children: Array.isArray(answer) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$PortableText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortableText"], {
                                        value: answer
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/FAQSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: String(answer)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/FAQSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FAQSection.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        ]
                    }, faq._id, true, {
                        fileName: "[project]/components/sections/FAQSection.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/FAQSection.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            showContactLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-sm text-[var(--color-vapor)]",
                children: [
                    "¿Más preguntas?",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contacto",
                        className: "text-[var(--color-ink)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors",
                        children: "Contáctanos"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FAQSection.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/FAQSection.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/FAQSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/shared/WhatsAppCTA.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WhatsAppCTA": (()=>WhatsAppCTA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
'use client';
;
;
function WhatsAppCTA({ url, message = 'Hola, me interesa alquilar un coche.' }) {
    const encodedMessage = encodeURIComponent(message);
    const phone = '34625305620'; // Without +
    const href = url ?? `https://wa.me/${phone}?text=${encodedMessage}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Contactar por WhatsApp",
        className: [
            'fixed bottom-6 right-6 z-40 lg:hidden',
            'flex items-center justify-center w-14 h-14',
            'bg-[#25D366] text-white rounded-full',
            'shadow-[0_4px_16px_rgba(37,211,102,0.4)]',
            'hover:scale-105 transition-transform duration-150'
        ].join(' '),
        style: {
            paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            size: 26,
            fill: "white",
            strokeWidth: 0,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhatsAppCTA.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/WhatsAppCTA.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Plus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
 //# sourceMappingURL=plus.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Plus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Minus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Minus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Minus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
]);
;
 //# sourceMappingURL=minus.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Minus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@portabletext/toolkit/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LIST_NEST_MODE_DIRECT": (()=>LIST_NEST_MODE_DIRECT),
    "LIST_NEST_MODE_HTML": (()=>LIST_NEST_MODE_HTML),
    "buildMarksTree": (()=>buildMarksTree),
    "isPortableTextBlock": (()=>isPortableTextBlock),
    "isPortableTextListItemBlock": (()=>isPortableTextListItemBlock),
    "isPortableTextSpan": (()=>isPortableTextSpan),
    "isPortableTextToolkitList": (()=>isPortableTextToolkitList),
    "isPortableTextToolkitSpan": (()=>isPortableTextToolkitSpan),
    "isPortableTextToolkitTextNode": (()=>isPortableTextToolkitTextNode),
    "nestLists": (()=>nestLists),
    "sortMarksByOccurences": (()=>sortMarksByOccurences),
    "spanToPlainText": (()=>spanToPlainText),
    "toPlainText": (()=>toPlainText)
});
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function isPortableTextSpan(node) {
    return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every((mark)=>typeof mark == "string"));
}
function isPortableTextBlock(node) {
    return(// A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && (// `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    !("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def)=>typeof def._key == "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child)=>typeof child == "object" && "_type" in child));
}
function isPortableTextListItemBlock(block) {
    return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
    return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
    return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
    return node._type === "@text";
}
const knownDecorators = [
    "strong",
    "em",
    "code",
    "underline",
    "strike-through"
];
function sortMarksByOccurences(span, index, blockChildren) {
    if (!isPortableTextSpan(span) || !span.marks) return [];
    if (!span.marks.length) return [];
    const marks = span.marks.slice(), occurences = {};
    return marks.forEach((mark)=>{
        occurences[mark] = 1;
        for(let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++){
            const sibling = blockChildren[siblingIndex];
            if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
            else break;
        }
    }), marks.sort((markA, markB)=>sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
    const aOccurences = occurences[markA], bOccurences = occurences[markB];
    if (aOccurences !== bOccurences) return bOccurences - aOccurences;
    const aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
    return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
    var _a, _b;
    const { children } = block, markDefs = (_a = block.markDefs) != null ? _a : [];
    if (!children || !children.length) return [];
    const sortedMarks = children.map(sortMarksByOccurences), rootNode = {
        _type: "@span",
        children: [],
        markType: "<unknown>"
    };
    let nodeStack = [
        rootNode
    ];
    for(let i = 0; i < children.length; i++){
        const span = children[i];
        if (!span) continue;
        const marksNeeded = sortedMarks[i] || [];
        let pos = 1;
        if (nodeStack.length > 1) for(pos; pos < nodeStack.length; pos++){
            const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "", index = marksNeeded.indexOf(mark);
            if (index === -1) break;
            marksNeeded.splice(index, 1);
        }
        nodeStack = nodeStack.slice(0, pos);
        let currentNode = nodeStack[nodeStack.length - 1];
        if (currentNode) {
            for (const markKey of marksNeeded){
                const markDef = markDefs == null ? void 0 : markDefs.find((def)=>def._key === markKey), markType = markDef ? markDef._type : markKey, node = {
                    _type: "@span",
                    _key: span._key,
                    children: [],
                    markDef,
                    markType,
                    markKey
                };
                currentNode.children.push(node), nodeStack.push(node), currentNode = node;
            }
            if (isPortableTextSpan(span)) {
                const lines = span.text.split(`
`);
                for(let line = lines.length; line-- > 1;)lines.splice(line, 0, `
`);
                currentNode.children = currentNode.children.concat(lines.map((text)=>({
                        _type: "@text",
                        text
                    })));
            } else currentNode.children = currentNode.children.concat(span);
        }
    }
    return rootNode.children;
}
function nestLists(blocks, mode) {
    const tree = [];
    let currentList;
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i];
        if (block) {
            if (!isPortableTextListItemBlock(block)) {
                tree.push(block), currentList = void 0;
                continue;
            }
            if (!currentList) {
                currentList = listFromBlock(block, i, mode), tree.push(currentList);
                continue;
            }
            if (blockMatchesList(block, currentList)) {
                currentList.children.push(block);
                continue;
            }
            if ((block.level || 1) > currentList.level) {
                const newList = listFromBlock(block, i, mode);
                if (mode === "html") {
                    const lastListItem = currentList.children[currentList.children.length - 1], newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
                        children: [
                            ...lastListItem.children,
                            newList
                        ]
                    });
                    currentList.children[currentList.children.length - 1] = newLastChild;
                } else currentList.children.push(newList);
                currentList = newList;
                continue;
            }
            if ((block.level || 1) < currentList.level) {
                const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
                if (match) {
                    currentList = match, currentList.children.push(block);
                    continue;
                }
                currentList = listFromBlock(block, i, mode), tree.push(currentList);
                continue;
            }
            if (block.listItem !== currentList.listItem) {
                const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, {
                    level: block.level || 1
                });
                if (match && match.listItem === block.listItem) {
                    currentList = match, currentList.children.push(block);
                    continue;
                } else {
                    currentList = listFromBlock(block, i, mode), tree.push(currentList);
                    continue;
                }
            }
            console.warn("Unknown state encountered for block", block), tree.push(block);
        }
    }
    return tree;
}
function blockMatchesList(block, list) {
    return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
    return {
        _type: "@list",
        _key: `${block._key || `${index}`}-parent`,
        mode,
        level: block.level || 1,
        listItem: block.listItem,
        children: [
            block
        ]
    };
}
function findListMatching(rootNode, matching) {
    const level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
    if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
    if (!("children" in rootNode)) return;
    const node = rootNode.children[rootNode.children.length - 1];
    return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
    let text = "";
    return span.children.forEach((current)=>{
        isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
    }), text;
}
const leadingSpace = /^\s/, trailingSpace = /\s$/;
function toPlainText(block) {
    const blocks = Array.isArray(block) ? block : [
        block
    ];
    let text = "";
    return blocks.forEach((current, index)=>{
        if (!isPortableTextBlock(current)) return;
        let pad = !1;
        current.children.forEach((span)=>{
            isPortableTextSpan(span) ? (text += pad && text && !trailingSpace.test(text) && !leadingSpace.test(span.text) ? " " : "", text += span.text, pad = !1) : pad = !0;
        }), index !== blocks.length - 1 && (text += `

`);
    }), text;
}
const LIST_NEST_MODE_HTML = "html", LIST_NEST_MODE_DIRECT = "direct";
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@portabletext/react/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PortableText": (()=>PortableText),
    "defaultComponents": (()=>defaultComponents),
    "mergeComponents": (()=>mergeComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/toolkit/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _excluded = [
    "block",
    "list",
    "listItem",
    "marks",
    "types"
], _excluded2 = [
    "listItem"
], _excluded3 = [
    "_key"
];
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], t.indexOf(o) >= 0 || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
const defaultLists = {
    number: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ol", {
            children
        }),
    bullet: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            children
        })
}, DefaultListItem = ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("li", {
        children
    }), link = ({ children, value })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
        href: value == null ? void 0 : value.href,
        children
    }), underlineStyle = {
    textDecoration: "underline"
}, defaultMarks = {
    em: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("em", {
            children
        }),
    strong: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("strong", {
            children
        }),
    code: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("code", {
            children
        }),
    underline: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            style: underlineStyle,
            children
        }),
    "strike-through": ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("del", {
            children
        }),
    link
}, getTemplate = (type, prop)=>`[@portabletext/react] Unknown ${type}, specify a component for it in the \`components.${prop}\` prop`, unknownTypeWarning = (typeName)=>getTemplate(`block type "${typeName}"`, "types"), unknownMarkWarning = (markType)=>getTemplate(`mark type "${markType}"`, "marks"), unknownBlockStyleWarning = (blockStyle)=>getTemplate(`block style "${blockStyle}"`, "block"), unknownListStyleWarning = (listStyle)=>getTemplate(`list style "${listStyle}"`, "list"), unknownListItemStyleWarning = (listStyle)=>getTemplate(`list item style "${listStyle}"`, "listItem");
function printWarning(message) {
    console.warn(message);
}
const hidden = {
    display: "none"
}, DefaultUnknownType = ({ value, isInline })=>{
    const warning = unknownTypeWarning(value._type);
    return isInline ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        style: hidden,
        children: warning
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: hidden,
        children: warning
    });
}, DefaultUnknownMark = ({ markType, children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: `unknown__pt__mark__${markType}`,
        children
    }), DefaultUnknownBlockStyle = ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
        children
    }), DefaultUnknownList = ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        children
    }), DefaultUnknownListItem = ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("li", {
        children
    }), DefaultHardBreak = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("br", {}), defaultBlockStyles = {
    normal: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
            children
        }),
    blockquote: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("blockquote", {
            children
        }),
    h1: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h1", {
            children
        }),
    h2: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h2", {
            children
        }),
    h3: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
            children
        }),
    h4: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h4", {
            children
        }),
    h5: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h5", {
            children
        }),
    h6: ({ children })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h6", {
            children
        })
}, defaultComponents = {
    types: {},
    block: defaultBlockStyles,
    marks: defaultMarks,
    list: defaultLists,
    listItem: DefaultListItem,
    hardBreak: DefaultHardBreak,
    unknownType: DefaultUnknownType,
    unknownMark: DefaultUnknownMark,
    unknownList: DefaultUnknownList,
    unknownListItem: DefaultUnknownListItem,
    unknownBlockStyle: DefaultUnknownBlockStyle
};
function mergeComponents(parent, overrides) {
    const { block, list, listItem, marks, types } = overrides, rest = _objectWithoutProperties(overrides, _excluded);
    return _objectSpread(_objectSpread({}, parent), {}, {
        block: mergeDeeply(parent, overrides, "block"),
        list: mergeDeeply(parent, overrides, "list"),
        listItem: mergeDeeply(parent, overrides, "listItem"),
        marks: mergeDeeply(parent, overrides, "marks"),
        types: mergeDeeply(parent, overrides, "types")
    }, rest);
}
function mergeDeeply(parent, overrides, key) {
    const override = overrides[key], parentVal = parent[key];
    return typeof override == "function" || override && typeof parentVal == "function" ? override : override ? _objectSpread(_objectSpread({}, parentVal), override) : parentVal;
}
function PortableText({ value: input, components: componentOverrides, listNestingMode, onMissingComponent: missingComponentHandler = printWarning }) {
    const handleMissingComponent = missingComponentHandler || noop, blocks = Array.isArray(input) ? input : [
        input
    ], nested = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nestLists"])(blocks, listNestingMode || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LIST_NEST_MODE_HTML"]), components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents, [
        componentOverrides
    ]), renderNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getNodeRenderer(components, handleMissingComponent), [
        components,
        handleMissingComponent
    ]), rendered = nested.map((node, index)=>renderNode({
            node,
            index,
            isInline: !1,
            renderNode
        }));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: rendered
    });
}
const getNodeRenderer = (components, handleMissingComponent)=>{
    function renderNode(options) {
        const { node, index, isInline } = options, key = node._key || `node-${index}`;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPortableTextToolkitList"])(node) ? renderList(node, index, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPortableTextListItemBlock"])(node) ? renderListItem(node, index, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPortableTextToolkitSpan"])(node) ? renderSpan(node, index, key) : hasCustomComponentForNode(node) ? renderCustomBlock(node, index, key, isInline) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPortableTextBlock"])(node) ? renderBlock(node, index, key, isInline) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPortableTextToolkitTextNode"])(node) ? renderText(node, key) : renderUnknownType(node, index, key, isInline);
    }
    function hasCustomComponentForNode(node) {
        return node._type in components.types;
    }
    function renderListItem(node, index, key) {
        const tree = serializeBlock({
            node,
            index,
            isInline: !1,
            renderNode
        }), renderer = components.listItem, Li = (typeof renderer == "function" ? renderer : renderer[node.listItem]) || components.unknownListItem;
        if (Li === components.unknownListItem) {
            const style = node.listItem || "bullet";
            handleMissingComponent(unknownListItemStyleWarning(style), {
                type: style,
                nodeType: "listItemStyle"
            });
        }
        let children = tree.children;
        if (node.style && node.style !== "normal") {
            const { listItem } = node, blockNode = _objectWithoutProperties(node, _excluded2);
            children = renderNode({
                node: blockNode,
                index,
                isInline: !1,
                renderNode
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Li, {
            value: node,
            index,
            isInline: !1,
            renderNode,
            children
        }, key);
    }
    function renderList(node, index, key) {
        const children = node.children.map((child, childIndex)=>renderNode({
                node: child._key ? child : _objectSpread(_objectSpread({}, child), {}, {
                    _key: `li-${index}-${childIndex}`
                }),
                index: childIndex,
                isInline: !1,
                renderNode
            })), component = components.list, List = (typeof component == "function" ? component : component[node.listItem]) || components.unknownList;
        if (List === components.unknownList) {
            const style = node.listItem || "bullet";
            handleMissingComponent(unknownListStyleWarning(style), {
                nodeType: "listStyle",
                type: style
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(List, {
            value: node,
            index,
            isInline: !1,
            renderNode,
            children
        }, key);
    }
    function renderSpan(node, _index, key) {
        const { markDef, markType, markKey } = node, Span = components.marks[markType] || components.unknownMark, children = node.children.map((child, childIndex)=>renderNode({
                node: child,
                index: childIndex,
                isInline: !0,
                renderNode
            }));
        return Span === components.unknownMark && handleMissingComponent(unknownMarkWarning(markType), {
            nodeType: "mark",
            type: markType
        }), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Span, {
            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spanToPlainText"])(node),
            value: markDef,
            markType,
            markKey,
            renderNode,
            children
        }, key);
    }
    function renderBlock(node, index, key, isInline) {
        const _serializeBlock = serializeBlock({
            node,
            index,
            isInline,
            renderNode
        }), { _key } = _serializeBlock, props = _objectWithoutProperties(_serializeBlock, _excluded3), style = props.node.style || "normal", Block = (typeof components.block == "function" ? components.block : components.block[style]) || components.unknownBlockStyle;
        return Block === components.unknownBlockStyle && handleMissingComponent(unknownBlockStyleWarning(style), {
            nodeType: "blockStyle",
            type: style
        }), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Block, _objectSpread(_objectSpread({}, props), {}, {
            value: props.node,
            renderNode
        }), key);
    }
    function renderText(node, key) {
        if (node.text === `
`) {
            const HardBreak = components.hardBreak;
            return HardBreak ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(HardBreak, {}, key) : `
`;
        }
        return node.text;
    }
    function renderUnknownType(node, index, key, isInline) {
        const nodeOptions = {
            value: node,
            isInline,
            index,
            renderNode
        };
        handleMissingComponent(unknownTypeWarning(node._type), {
            nodeType: "block",
            type: node._type
        });
        const UnknownType = components.unknownType;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(UnknownType, _objectSpread({}, nodeOptions), key);
    }
    function renderCustomBlock(node, index, key, isInline) {
        const nodeOptions = {
            value: node,
            isInline,
            index,
            renderNode
        }, Node = components.types[node._type];
        return Node ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Node, _objectSpread({}, nodeOptions), key) : null;
    }
    return renderNode;
};
function serializeBlock(options) {
    const { node, index, isInline, renderNode } = options, children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMarksTree"])(node).map((child, i)=>renderNode({
            node: child,
            isInline: !0,
            index: i,
            renderNode
        }));
    return {
        _key: node._key || `block-${index}`,
        children,
        index,
        isInline,
        node
    };
}
function noop() {}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>MessageCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
;
 //# sourceMappingURL=message-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MessageCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_779444c0._.js.map