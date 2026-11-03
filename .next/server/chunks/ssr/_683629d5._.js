module.exports = {

"[project]/.next-internal/server/app/(site)/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/lib/sanity/image.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "urlFor": (()=>urlFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/node/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/client.ts [app-rsc] (ecmascript)");
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityClient"]);
function urlFor(source) {
    return builder.image(source);
}
}}),
"[project]/lib/utils/metadata.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "absoluteUrl": (()=>absoluteUrl),
    "buildMetadata": (()=>buildMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/image.ts [app-rsc] (ecmascript)");
;
const SITE_URL = ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'https://hereandnow.es';
function buildMetadata({ seo, path, fallbackTitle, fallbackDescription, ogImageFallback, locale = 'es' }) {
    const title = seo?.metaTitle?.[locale] ?? seo?.metaTitle?.es ?? fallbackTitle;
    const description = seo?.metaDescription?.[locale] ?? seo?.metaDescription?.es ?? fallbackDescription;
    const canonicalUrl = seo?.canonicalUrl ?? `${SITE_URL}${path}`;
    const noindex = seo?.noindex ?? false;
    const ogImageSource = seo?.ogImage ?? ogImageFallback;
    const ogImageUrl = ogImageSource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(ogImageSource).width(1200).height(630).url() : undefined;
    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: title ?? undefined,
            description: description ?? undefined,
            url: canonicalUrl,
            type: 'website',
            locale: locale === 'es' ? 'es_ES' : 'en_GB',
            siteName: 'Here & Now',
            images: ogImageUrl ? [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630
                }
            ] : undefined
        },
        twitter: {
            card: 'summary_large_image',
            title: title ?? undefined,
            description: description ?? undefined,
            images: ogImageUrl ? [
                ogImageUrl
            ] : undefined
        },
        robots: noindex ? {
            index: false,
            follow: true
        } : {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    };
}
function absoluteUrl(path) {
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
}}),
"[project]/components/sections/HeroHome.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroHome": (()=>HeroHome)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function HeroHome({ heading = 'Alquiler de coches Mercedes en Ibiza y Alicante', subheading = 'Exclusividad, confort y servicio premium. Sin sorpresas.', priceFrom = 130, pickupPoints = 5 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[85svh] flex items-center justify-center text-[var(--color-canvas)]",
        "aria-label": "Presentación",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[var(--color-night)]",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-[var(--color-night)] via-[#1a1208] to-[var(--color-night)] opacity-90"
                }, void 0, false, {
                    fileName: "[project]/components/sections/HeroHome.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/HeroHome.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6",
                        children: "Mercedes-Benz Exclusivo"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-[-0.02em] mb-6 text-balance",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-[var(--color-fog)] mb-12 max-w-xl mx-auto leading-relaxed",
                        children: subheading
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/ibiza",
                                className: [
                                    'group flex flex-col items-center justify-center',
                                    'w-full sm:w-56 py-5 px-8',
                                    'bg-[var(--color-gold)] text-[var(--color-ink)]',
                                    'rounded-[var(--radius-sm)]',
                                    'hover:bg-[var(--color-gold-deep)] transition-colors duration-150'
                                ].join(' '),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm tracking-[0.08em] uppercase",
                                        children: "Reservar en Ibiza"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroHome.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs mt-1 opacity-70",
                                        children: "Aeropuerto · Puerto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroHome.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/alicante",
                                className: [
                                    'group flex flex-col items-center justify-center',
                                    'w-full sm:w-56 py-5 px-8',
                                    'border-[1.5px] border-[var(--color-canvas)]/40 text-[var(--color-canvas)]',
                                    'rounded-[var(--radius-sm)]',
                                    'hover:border-[var(--color-canvas)] transition-colors duration-150'
                                ].join(' '),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm tracking-[0.08em] uppercase",
                                        children: "Reservar en Alicante"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroHome.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs mt-1 opacity-70",
                                        children: "Aeropuerto · Oficina · Puerto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroHome.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--color-fog)] flex flex-wrap items-center justify-center gap-x-4 gap-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Desde ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[var(--color-canvas)] font-semibold",
                                        children: [
                                            priceFrom,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/HeroHome.tsx",
                                        lineNumber: 82,
                                        columnNumber: 23
                                    }, this),
                                    "/día"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "hidden sm:inline text-[var(--color-fog)]/40",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Recogida en aeropuerto o puerto"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "hidden sm:inline text-[var(--color-fog)]/40",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    pickupPoints,
                                    " puntos de recogida"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroHome.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroHome.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-widest uppercase text-[var(--color-canvas)]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-[var(--color-canvas)]/40 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroHome.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroHome.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HeroHome.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/shared/SanityImage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SanityImage": (()=>SanityImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/image.ts [app-rsc] (ecmascript)");
;
;
;
function SanityImage({ asset, alt, width, height, priority = false, fill = false, className, sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw', quality = 85 }) {
    const naturalWidth = width ?? asset.metadata?.dimensions?.width ?? 1200;
    const naturalHeight = height ?? asset.metadata?.dimensions?.height ?? 800;
    // urlFor needs the asset reference — use _id when available, fall back to raw URL
    const imageSource = asset._id ? {
        _ref: asset._id,
        _type: 'reference'
    } : asset.url;
    const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(imageSource).width(naturalWidth * 2) // 2× for retina
    .quality(quality).url();
    const blurDataURL = asset.metadata?.blurHash ? `data:image/png;base64,${asset.metadata.blurHash}` : undefined;
    if (fill) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            fill: true,
            priority: priority,
            placeholder: blurDataURL ? 'blur' : 'empty',
            blurDataURL: blurDataURL,
            sizes: sizes,
            className: className,
            style: {
                objectFit: 'cover'
            }
        }, void 0, false, {
            fileName: "[project]/components/shared/SanityImage.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: alt,
        width: naturalWidth,
        height: naturalHeight,
        priority: priority,
        placeholder: blurDataURL ? 'blur' : 'empty',
        blurDataURL: blurDataURL,
        sizes: sizes,
        className: className
    }, void 0, false, {
        fileName: "[project]/components/shared/SanityImage.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/car/CarCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CarCard": (()=>CarCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-rsc] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-rsc] (ecmascript) <export default as Fuel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SanityImage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SanityImage.tsx [app-rsc] (ecmascript)");
;
;
;
;
const FUEL_LABELS = {
    diesel: 'Diésel',
    gasolina: 'Gasolina',
    hibrido: 'Híbrido',
    electrico: 'Eléctrico'
};
const TRANSMISSION_LABELS = {
    automatic: 'Automático',
    manual: 'Manual'
};
function CarCard({ car, locale = 'es' }) {
    const name = car.name[locale] ?? car.name.es;
    const alt = car.mainImage.alt[locale] ?? car.mainImage.alt.es;
    const href = `/flota/${car.slug.current}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-250",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[16/10] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SanityImage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SanityImage"], {
                                asset: car.mainImage.asset,
                                alt: alt,
                                width: 800,
                                height: 500,
                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            }, void 0, false, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/car/CarCard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    car.availableLocations && car.availableLocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 flex gap-1.5",
                        "aria-label": "Disponible en",
                        children: [
                            car.availableLocations.includes('ibiza') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-night)]/80 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 10,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    "Ibiza"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            car.availableLocations.includes('alicante') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-night)]/80 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 10,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    "Alicante"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/car/CarCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-base text-[var(--color-ink)] mb-3 leading-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "hover:text-[var(--color-gold)] transition-colors",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/car/CarCard.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap gap-x-4 gap-y-1.5 mb-4",
                        "aria-label": "Especificaciones",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-1.5 text-sm text-[var(--color-vapor)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 14,
                                        "aria-hidden": "true",
                                        className: "text-[var(--color-fog)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            car.passengers,
                                            " plazas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-1.5 text-sm text-[var(--color-vapor)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                        size: 14,
                                        "aria-hidden": "true",
                                        className: "text-[var(--color-fog)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: TRANSMISSION_LABELS[car.transmission] ?? car.transmission
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-1.5 text-sm text-[var(--color-vapor)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                        size: 14,
                                        "aria-hidden": "true",
                                        className: "text-[var(--color-fog)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: FUEL_LABELS[car.fuel] ?? car.fuel
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            car.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center gap-1.5 text-sm text-[var(--color-vapor)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 14,
                                        "aria-hidden": "true",
                                        className: "text-[var(--color-fog)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: car.year
                                    }, void 0, false, {
                                        fileName: "[project]/components/car/CarCard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    car.minPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--color-vapor)] uppercase tracking-wider",
                                children: "Desde "
                            }, void 0, false, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-2xl font-bold text-[var(--color-ink)] tabular-nums tracking-tight",
                                children: [
                                    car.minPrice,
                                    "€"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[var(--color-vapor)]",
                                children: "/día"
                            }, void 0, false, {
                                fileName: "[project]/components/car/CarCard.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: "flex items-center justify-center w-full h-11 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-xs tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors",
                        children: "Ver y reservar"
                    }, void 0, false, {
                        fileName: "[project]/components/car/CarCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/car/CarCard.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/car/CarCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/car/CarGrid.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CarGrid": (()=>CarGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/car/CarCard.tsx [app-rsc] (ecmascript)");
;
;
function CarGrid({ cars, heading, subheading, locale = 'es', className }) {
    if (!cars || cars.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `text-center py-16 ${className ?? ''}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[var(--color-vapor)]",
                children: "No hay vehículos disponibles en este momento."
            }, void 0, false, {
                fileName: "[project]/components/car/CarGrid.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/car/CarGrid.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: className,
        children: [
            (heading || subheading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl lg:text-4xl font-semibold text-[var(--color-ink)] mb-3",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/car/CarGrid.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-[var(--color-vapor)] max-w-2xl",
                        children: subheading
                    }, void 0, false, {
                        fileName: "[project]/components/car/CarGrid.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/car/CarGrid.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                role: "list",
                children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarCard"], {
                            car: car,
                            locale: locale
                        }, void 0, false, {
                            fileName: "[project]/components/car/CarGrid.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, car._id, false, {
                        fileName: "[project]/components/car/CarGrid.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/car/CarGrid.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/car/CarGrid.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/DestinationCards.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DestinationCards": (()=>DestinationCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
;
;
;
function DestinationCards({ ibiza, alicante }) {
    const destinations = [
        {
            data: ibiza,
            slug: 'ibiza',
            name: 'Ibiza',
            tagline: 'La isla del lujo y las playas cristalinas',
            pickupPoints: 'Aeropuerto · Puerto',
            cta: 'Alquilar en Ibiza',
            href: '/ibiza',
            // Fallback gradient when no image available
            gradient: 'from-[#0d2a3a] to-[#1a4a5a]'
        },
        {
            data: alicante,
            slug: 'alicante',
            name: 'Alicante',
            tagline: 'La Costa Blanca en un Mercedes',
            pickupPoints: 'Aeropuerto · Oficina · Puerto',
            cta: 'Alquilar en Alicante',
            href: '/alicante',
            gradient: 'from-[#2a1a0a] to-[#4a3a1a]'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-[var(--color-canvas)]",
        "aria-labelledby": "destinos-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3",
                            children: "Elige tu destino"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DestinationCards.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "destinos-heading",
                            className: "text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]",
                            children: "Ibiza o Alicante"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DestinationCards.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DestinationCards.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                    children: destinations.map((dest)=>{
                        const heroImage = dest.data?.heroImage;
                        const name = dest.data?.name?.es ?? dest.name;
                        const tagline = dest.data?.shortDescription?.es ?? dest.tagline;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: dest.href,
                            className: "group relative overflow-hidden rounded-[var(--radius-md)] aspect-[4/3] md:aspect-[3/2] flex items-end",
                            "aria-label": `${dest.cta} — ${name}`,
                            children: [
                                heroImage?.asset?.url ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: heroImage.asset.url,
                                    alt: heroImage.alt?.es ?? name,
                                    className: "absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 bg-gradient-to-br ${dest.gradient} group-hover:opacity-90 transition-opacity`,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/85 via-[var(--color-night)]/20 to-transparent",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 p-6 text-[var(--color-canvas)] w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    className: "text-[var(--color-gold)]",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[var(--color-fog)]",
                                                    children: dest.pickupPoints
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DestinationCards.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-1",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DestinationCards.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--color-fog)] mb-4",
                                            children: tagline
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DestinationCards.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-gold)] group-hover:gap-3 transition-all",
                                            children: [
                                                dest.cta,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DestinationCards.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DestinationCards.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, dest.slug, true, {
                            fileName: "[project]/components/sections/DestinationCards.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/sections/DestinationCards.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/DestinationCards.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/DestinationCards.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/BrandStatement.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Server Component — brand identity section
__turbopack_context__.s({
    "BrandStatement": (()=>BrandStatement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function BrandStatement() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-[var(--color-night)] text-[var(--color-canvas)]",
        "aria-label": "Marca",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4",
                    children: "MERCEDES RENT A CAR"
                }, void 0, false, {
                    fileName: "[project]/components/sections/BrandStatement.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl lg:text-6xl font-bold tracking-[-0.02em] text-[var(--color-canvas)]",
                    children: "THE BEST OR NOTHING"
                }, void 0, false, {
                    fileName: "[project]/components/sections/BrandStatement.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-[var(--color-fog)] text-lg max-w-xl mx-auto",
                    children: "Cada vehículo de nuestra flota es un Mercedes. Ninguna excepción."
                }, void 0, false, {
                    fileName: "[project]/components/sections/BrandStatement.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/BrandStatement.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/BrandStatement.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/ValueProposition.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValueProposition": (()=>ValueProposition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-rsc] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
;
;
function ValueProposition() {
    const values = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                size: 28,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/ValueProposition.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            title: 'SEGURIDAD',
            subtitle: 'Con la garantía Mercedes',
            description: 'Todos nuestros vehículos son modelos recientes con el más alto estándar de seguridad. Asistencia en carretera incluida en cada reserva.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                size: 28,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/ValueProposition.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            title: 'CONFORT',
            subtitle: 'Comodidad de alta gama',
            description: 'Interiores de cuero, climatización de zona trasera, puertas laterales automáticas y hasta 8 plazas de auténtico lujo.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                size: 28,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/ValueProposition.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            title: 'RÁPIDO',
            subtitle: 'Check-in ágil y sin esperas',
            description: 'Te esperamos con el vehículo preparado. Sin colas, sin formularios interminables. En minutos estás en marcha.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                size: 28,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/ValueProposition.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            title: 'FLEXIBLE',
            subtitle: 'Recogida donde quieras',
            description: 'Aeropuerto, puerto u oficina propia. Elige el punto más conveniente y nosotros nos encargamos del resto.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-[var(--color-stone)]",
        "aria-labelledby": "valores-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 max-w-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3",
                            children: "Por qué elegirnos"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ValueProposition.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "valores-heading",
                            className: "text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]",
                            children: "Nuestros valores"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ValueProposition.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[var(--color-vapor)] text-lg",
                            children: "Descubre la exclusividad en alquiler de vehículos Mercedes en Ibiza y Alicante con Here & Now."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ValueProposition.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ValueProposition.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    role: "list",
                    children: values.map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "bg-[var(--color-surface)] rounded-[var(--radius-md)] p-6 border border-[var(--color-mist)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[var(--color-gold)] mb-4",
                                    "aria-hidden": "true",
                                    children: value.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ValueProposition.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] mb-1",
                                    children: value.title
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ValueProposition.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-[var(--color-vapor)] mb-3",
                                    children: value.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ValueProposition.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--color-vapor)] leading-relaxed",
                                    children: value.description
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ValueProposition.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, value.title, true, {
                            fileName: "[project]/components/sections/ValueProposition.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/ValueProposition.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ValueProposition.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ValueProposition.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/HowItWorks.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HowItWorks": (()=>HowItWorks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-rsc] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-rsc] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-rsc] (ecmascript) <export default as Map>");
;
;
;
function HowItWorks() {
    const steps = [
        {
            number: '01',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                size: 24,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/HowItWorks.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            title: 'Elige y reserva online',
            description: 'Selecciona el vehículo, las fechas y el punto de recogida. Pago seguro con tarjeta o Bizum. Confirmación inmediata.'
        },
        {
            number: '02',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                size: 24,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/HowItWorks.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            title: 'Recogemos en tu punto',
            description: 'Te esperamos en el aeropuerto, el puerto o nuestra oficina con el Mercedes preparado y listo para salir.'
        },
        {
            number: '03',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                size: 24,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/sections/HowItWorks.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            title: 'Disfruta sin preocupaciones',
            description: 'Conduce con plena libertad. Asistencia en carretera incluida. Devuelve el vehículo cuando y donde hayas acordado.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding",
        "aria-labelledby": "como-funciona-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3",
                            children: "Simple y rápido"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/HowItWorks.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "como-funciona-heading",
                            className: "text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]",
                            children: "Reserva en 3 pasos"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/HowItWorks.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/HowItWorks.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6",
                    role: "list",
                    children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "relative",
                            children: [
                                index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-6 left-[calc(50%+2rem)] right-[-2rem] h-px bg-[var(--color-mist)]",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HowItWorks.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start md:items-center md:text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 md:flex-col md:gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0",
                                                    children: step.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/HowItWorks.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-fog)]",
                                                    children: [
                                                        "Paso ",
                                                        step.number
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/HowItWorks.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/HowItWorks.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-[var(--color-ink)] mb-2",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/HowItWorks.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--color-vapor)] leading-relaxed",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/HowItWorks.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/HowItWorks.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, step.number, true, {
                            fileName: "[project]/components/sections/HowItWorks.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/HowItWorks.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/flota",
                        className: "inline-flex items-center justify-center h-12 px-8 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors",
                        children: "Ver nuestra flota"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HowItWorks.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/HowItWorks.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/HowItWorks.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/HowItWorks.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/TestimonialsSection.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialsSection": (()=>TestimonialsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
;
;
// Static fallback used when Sanity is not configured
const STATIC_TESTIMONIALS = [
    {
        author: 'Eliseo Pérez',
        text: {
            es: '¡Una experiencia inigualable! Here & Now nos brindó el lujo y la comodidad que buscábamos para nuestra escapada en Ibiza. Desde la reserva hasta la entrega del vehículo, el servicio fue impecable. ¡Definitivamente volveremos!'
        },
        location: {
            name: {
                es: 'Ibiza'
            },
            slug: {
                current: 'ibiza'
            }
        },
        rating: 5
    },
    {
        author: 'José Antonio Puigcerver',
        text: {
            es: '¡La mejor forma de explorar Ibiza con estilo! Gracias a Here & Now, pude recorrer la isla en un vehículo de lujo que superó todas mis expectativas. Su atención al detalle y su flota de primera clase hacen que sea la opción número uno para alquiler de coches en la isla.'
        },
        location: {
            name: {
                es: 'Ibiza'
            },
            slug: {
                current: 'ibiza'
            }
        },
        rating: 5
    },
    {
        author: 'Clara García',
        text: {
            es: 'Una experiencia de alquiler de coches excepcional. Here & Now no solo ofrece una selección impresionante de vehículos de lujo, sino también un servicio al cliente excepcional. ¡Recomendaría esta agencia a cualquiera que busque una experiencia premium en Ibiza!'
        },
        location: {
            name: {
                es: 'Ibiza'
            },
            slug: {
                current: 'ibiza'
            }
        },
        rating: 5
    }
];
function TestimonialsSection({ testimonials, locale = 'es' }) {
    const items = testimonials && testimonials.length > 0 ? testimonials : STATIC_TESTIMONIALS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-[var(--color-stone)]",
        "aria-labelledby": "reviews-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3",
                            children: "Opiniones reales"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "reviews-heading",
                            className: "text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]",
                            children: "Lo que dicen nuestros clientes"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[var(--color-vapor)]",
                            children: "Diferentes experiencias con nuestros coches Mercedes en Ibiza y Alicante."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    role: "list",
                    children: items.slice(0, 3).map((t, i)=>{
                        const text = t.text[locale] ?? t.text.es;
                        const locationName = t.location?.name[locale] ?? t.location?.name.es;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "bg-[var(--color-surface)] rounded-[var(--radius-md)] p-6 border border-[var(--color-mist)]",
                            children: [
                                t.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-0.5 mb-4",
                                    "aria-label": `${t.rating} de 5 estrellas`,
                                    children: Array.from({
                                        length: t.rating
                                    }).map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 14,
                                            fill: "currentColor",
                                            className: "text-[var(--color-gold)]",
                                            "aria-hidden": "true"
                                        }, j, false, {
                                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "text-[var(--color-vapor)] text-sm leading-relaxed mb-5",
                                    children: [
                                        "“",
                                        text,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-xs font-bold text-[var(--color-vapor)]",
                                            "aria-hidden": "true",
                                            children: t.author.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                                    className: "not-italic text-sm font-semibold text-[var(--color-ink)] not-italic",
                                                    children: t.author
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                locationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--color-fog)]",
                                                    children: locationName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, t._id ?? i, true, {
                            fileName: "[project]/components/sections/TestimonialsSection.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/sections/TestimonialsSection.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/TestimonialsSection.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/TestimonialsSection.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/sections/FAQSection.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQSection": (()=>FAQSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/FAQSection.tsx <module evaluation>", "FAQSection");
}}),
"[project]/components/sections/FAQSection.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQSection": (()=>FAQSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/FAQSection.tsx", "FAQSection");
}}),
"[project]/components/sections/FAQSection.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/FAQSection.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/sections/FAQSection.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/sections/CTASection.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CTASection": (()=>CTASection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
;
;
;
function CTASection({ heading, subheading, buttons = [
    {
        label: 'Reservar en Ibiza',
        href: '/ibiza',
        variant: 'primary'
    },
    {
        label: 'Reservar en Alicante',
        href: '/alicante',
        variant: 'secondary'
    }
], phone, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `bg-[var(--color-night)] text-[var(--color-canvas)] ${className ?? ''}`,
        "aria-labelledby": "cta-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "cta-heading",
                    className: "text-3xl lg:text-4xl font-semibold mb-4 text-balance",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTASection.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[var(--color-fog)] text-lg mb-10 max-w-xl mx-auto",
                    children: subheading
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTASection.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-8",
                    children: buttons.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: btn.href,
                            className: [
                                'inline-flex items-center justify-center h-12 px-8 font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] transition-colors w-full sm:w-auto',
                                btn.variant === 'secondary' ? 'border-[1.5px] border-[var(--color-canvas)]/40 text-[var(--color-canvas)] hover:border-[var(--color-canvas)]' : 'bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-deep)]'
                            ].join(' '),
                            children: btn.label
                        }, i, false, {
                            fileName: "[project]/components/sections/CTASection.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/CTASection.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `tel:${phone.replace(/\s/g, '')}`,
                    className: "inline-flex items-center gap-2 text-sm text-[var(--color-vapor)] hover:text-[var(--color-fog)] transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            size: 14,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTASection.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        "¿Prefieres llamar? ",
                        phone
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/CTASection.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/CTASection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/CTASection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/shared/WhatsAppCTA.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WhatsAppCTA": (()=>WhatsAppCTA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WhatsAppCTA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WhatsAppCTA() from the server but WhatsAppCTA is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/shared/WhatsAppCTA.tsx <module evaluation>", "WhatsAppCTA");
}}),
"[project]/components/shared/WhatsAppCTA.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WhatsAppCTA": (()=>WhatsAppCTA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WhatsAppCTA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WhatsAppCTA() from the server but WhatsAppCTA is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/shared/WhatsAppCTA.tsx", "WhatsAppCTA");
}}),
"[project]/components/shared/WhatsAppCTA.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/shared/WhatsAppCTA.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/shared/WhatsAppCTA.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(site)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/fetch.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SchemaOrg.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HeroHome$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/HeroHome.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/car/CarGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$DestinationCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/DestinationCards.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$BrandStatement$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/BrandStatement.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ValueProposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ValueProposition.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HowItWorks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/HowItWorks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TestimonialsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/TestimonialsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/FAQSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/CTASection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/WhatsAppCTA.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
    path: '/',
    fallbackTitle: 'Alquiler de coches Mercedes en Ibiza y Alicante',
    fallbackDescription: 'Alquila un Mercedes premium en Ibiza o Alicante. Flota exclusiva, recogida en aeropuerto o puerto. Reserva online sin costes ocultos desde 130€/día.'
});
// ── Static FAQ fallback (shown when Sanity returns null) ──────────
const STATIC_FAQS = [
    {
        _id: 'faq-req',
        question: {
            es: '¿Cuáles son los requisitos para alquilar un coche?'
        },
        answer: {
            es: [
                {
                    _key: 'a1',
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _key: 'c1',
                            _type: 'span',
                            text: 'Debes tener un mínimo de 26 años y al menos 2 años de antigüedad del carnet de conducir. Es necesario presentar DNI o pasaporte y una tarjeta de crédito para la fianza.',
                            marks: []
                        }
                    ],
                    markDefs: []
                }
            ]
        },
        category: 'general'
    },
    {
        _id: 'faq-price',
        question: {
            es: '¿Qué incluye el precio del alquiler?'
        },
        answer: {
            es: [
                {
                    _key: 'a2',
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _key: 'c2',
                            _type: 'span',
                            text: 'El precio incluye el vehículo por día, 250 km diarios, asistencia en carretera 24h y la cobertura básica. Los kilómetros adicionales se cobran a 0,50€/km.',
                            marks: []
                        }
                    ],
                    markDefs: []
                }
            ]
        },
        category: 'general'
    },
    {
        _id: 'faq-pickup',
        question: {
            es: '¿Dónde puedo recoger y entregar el vehículo?'
        },
        answer: {
            es: [
                {
                    _key: 'a3',
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _key: 'c3',
                            _type: 'span',
                            text: 'Operamos en varios puntos de Ibiza (aeropuerto y puerto) y Alicante (aeropuerto, puerto y nuestra oficina propia en El Campello). También podemos acordar otros puntos.',
                            marks: []
                        }
                    ],
                    markDefs: []
                }
            ]
        },
        category: 'general'
    },
    {
        _id: 'faq-cancel',
        question: {
            es: '¿Puedo cancelar mi reserva?'
        },
        answer: {
            es: [
                {
                    _key: 'a4',
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _key: 'c4',
                            _type: 'span',
                            text: 'Sí. Consulta nuestra política de cancelación para ver los plazos y condiciones. Trabajamos con flexibilidad para adaptarnos a tus necesidades.',
                            marks: []
                        }
                    ],
                    markDefs: []
                }
            ]
        },
        category: 'general'
    }
];
async function HomePage() {
    // Parallel Sanity fetches — all gracefully return null on error
    const [cars, ibiza, alicante, testimonials, sanityFaqs] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllActiveCars"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocationBySlug"])('ibiza'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocationBySlug"])('alicante'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedTestimonials"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFaqsByCategory"])('general')
    ]);
    const carList = cars ?? [];
    const ibizaLoc = ibiza;
    const alicanteLoc = alicante;
    const faqs = sanityFaqs?.length ? sanityFaqs : STATIC_FAQS;
    const testimonialsData = testimonials;
    // Minimum price from fleet
    const priceFrom = carList.length > 0 ? Math.min(...carList.map((c)=>c.minPrice ?? 130)) : 130;
    // Structured data
    const faqSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFAQSchema"])(faqs, 'es');
    const localBusinessSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateLocalBusinessSchema"])({
        siteName: 'Here & Now'
    }, {
        name: {
            es: 'Oficina Here & Now Alicante'
        },
        address: 'Calle de la Figuera, 5, local 58',
        coordinates: {
            lat: 38.4057238,
            lng: -0.4077417
        },
        phone: '+34625305620'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaOrg"], {
                schema: [
                    faqSchema,
                    localBusinessSchema
                ]
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HeroHome$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroHome"], {
                priceFrom: priceFrom,
                pickupPoints: 5
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding",
                "aria-labelledby": "flota-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3",
                                children: "Nuestra flota"
                            }, void 0, false, {
                                fileName: "[project]/app/(site)/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarGrid"], {
                            cars: carList,
                            heading: "Nuestra flota de Mercedes",
                            subheading: "Elegimos exclusivamente Mercedes para tu viaje, porque cada kilómetro recorrido es un testimonio de innovación y confort incomparable."
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        carList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--color-vapor)] mb-4",
                                children: "Conecta Sanity para mostrar la flota de vehículos disponibles."
                            }, void 0, false, {
                                fileName: "[project]/app/(site)/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(site)/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$DestinationCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DestinationCards"], {
                ibiza: ibizaLoc,
                alicante: alicanteLoc
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ValueProposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueProposition"], {}, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$BrandStatement$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandStatement"], {}, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HowItWorks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HowItWorks"], {}, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TestimonialsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestimonialsSection"], {
                testimonials: testimonialsData
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding",
                "aria-labelledby": "faq-home-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12 max-w-[760px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQSection"], {
                        faqs: faqs,
                        heading: "Preguntas frecuentes sobre el alquiler",
                        showContactLink: true
                    }, void 0, false, {
                        fileName: "[project]/app/(site)/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(site)/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASection"], {
                heading: "¿Listo para reservar?",
                subheading: "Elige tu destino y reserva en menos de 5 minutos.",
                phone: "625 305 620"
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppCTA"], {
                message: "Hola, me interesa alquilar un coche Mercedes en Ibiza o Alicante."
            }, void 0, false, {
                fileName: "[project]/app/(site)/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(site)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_683629d5._.js.map