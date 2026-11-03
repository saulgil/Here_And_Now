module.exports = {

"[project]/.next-internal/server/app/(site)/ibiza/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/components/shared/Breadcrumbs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Breadcrumbs": (()=>Breadcrumbs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SchemaOrg.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema/index.ts [app-rsc] (ecmascript)");
;
;
;
;
function Breadcrumbs({ items, className }) {
    const siteUrl = ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'https://hereandnow.es';
    const schemaItems = items.map((item)=>({
            name: item.label,
            url: item.href ? `${siteUrl}${item.href}` : siteUrl
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaOrg"], {
                schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])(schemaItems)
            }, void 0, false, {
                fileName: "[project]/components/shared/Breadcrumbs.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-vapor)]",
                    children: items.map((item, index)=>{
                        const isLast = index === items.length - 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-x-2",
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "text-[var(--color-fog)]",
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Breadcrumbs.tsx",
                                    lineNumber: 34,
                                    columnNumber: 19
                                }, this),
                                item.href && !isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "hover:text-[var(--color-ink)] transition-colors",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Breadcrumbs.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: isLast ? 'text-[var(--color-ink)] font-medium' : '',
                                    "aria-current": isLast ? 'page' : undefined,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Breadcrumbs.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/shared/Breadcrumbs.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/shared/Breadcrumbs.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/Breadcrumbs.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/components/location/LocationHero.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LocationHero": (()=>LocationHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
;
;
;
function LocationHero({ heading, description, priceFrom, pickupCount, badges = [], fleetAnchor = 'flota-section', imageUrl, imageAlt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[75svh] flex items-end pb-12 text-[var(--color-canvas)]",
        "aria-label": "Presentación del destino",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                "aria-hidden": "true",
                children: [
                    imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: imageAlt ?? heading,
                        className: "absolute inset-0 w-full h-full object-cover",
                        fetchPriority: "high"
                    }, void 0, false, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[var(--color-night)]"
                    }, void 0, false, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/90 via-[var(--color-night)]/40 to-[var(--color-night)]/20"
                    }, void 0, false, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/location/LocationHero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-gold)]/90 text-[var(--color-ink)] text-xs font-semibold rounded-full",
                                children: [
                                    "Desde ",
                                    priceFrom,
                                    "€/día"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/location/LocationHero.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 11,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/location/LocationHero.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    pickupCount,
                                    " puntos de recogida"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/location/LocationHero.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full",
                                    children: badge
                                }, badge, false, {
                                    fileName: "[project]/components/location/LocationHero.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-[-0.02em] mb-4 max-w-2xl text-balance",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-[var(--color-fog)] mb-8 max-w-xl leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `#${fleetAnchor}`,
                        className: "inline-flex items-center gap-2 h-12 px-8 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors",
                        children: [
                            "Ver vehículos disponibles",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 16,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/location/LocationHero.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/location/LocationHero.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/location/LocationHero.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/location/LocationHero.tsx",
        lineNumber: 27,
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
"[project]/components/location/PickupPointGrid.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PickupPointGrid": (()=>PickupPointGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-rsc] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-rsc] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
;
;
;
const ICONS = {
    airport: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
        size: 22,
        strokeWidth: 1.5
    }, void 0, false, {
        fileName: "[project]/components/location/PickupPointGrid.tsx",
        lineNumber: 19,
        columnNumber: 12
    }, this),
    port: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
        size: 22,
        strokeWidth: 1.5
    }, void 0, false, {
        fileName: "[project]/components/location/PickupPointGrid.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this),
    office: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
        size: 22,
        strokeWidth: 1.5
    }, void 0, false, {
        fileName: "[project]/components/location/PickupPointGrid.tsx",
        lineNumber: 21,
        columnNumber: 11
    }, this)
};
function PickupPointGrid({ points, heading = '¿Dónde recogemos el coche?', intro }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-[var(--color-stone)]",
        "aria-labelledby": "pickup-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "pickup-heading",
                            className: "text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-3",
                            children: heading
                        }, void 0, false, {
                            fileName: "[project]/components/location/PickupPointGrid.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[var(--color-vapor)] max-w-xl",
                            children: intro
                        }, void 0, false, {
                            fileName: "[project]/components/location/PickupPointGrid.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/location/PickupPointGrid.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: [
                        'grid gap-4',
                        points.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    ].join(' '),
                    role: "list",
                    children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: point.href,
                                className: "group flex items-start gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] hover:border-[var(--color-gold)]/50 hover:shadow-[var(--shadow-card)] transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-stone)] rounded-[var(--radius-sm)] text-[var(--color-gold)]",
                                        "aria-hidden": "true",
                                        children: ICONS[point.type]
                                    }, void 0, false, {
                                        fileName: "[project]/components/location/PickupPointGrid.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-gold)] transition-colors",
                                                children: point.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/location/PickupPointGrid.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--color-vapor)] leading-snug mb-2",
                                                children: point.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/location/PickupPointGrid.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)] group-hover:gap-2 transition-all",
                                                children: [
                                                    "Ver instrucciones",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 12,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/location/PickupPointGrid.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/location/PickupPointGrid.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/location/PickupPointGrid.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/location/PickupPointGrid.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, point.slug, false, {
                            fileName: "[project]/components/location/PickupPointGrid.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/location/PickupPointGrid.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/location/PickupPointGrid.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/location/PickupPointGrid.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/location/WhyHereSection.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Server Component — local "why rent here" content, differs per destination
__turbopack_context__.s({
    "WhyHereSection": (()=>WhyHereSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function WhyHereSection({ heading, reasons, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `section-padding ${className ?? ''}`,
        "aria-labelledby": "why-here-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "why-here-heading",
                    className: "text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-10 max-w-2xl",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/components/location/WhyHereSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: reasons.map((reason, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-px bg-[var(--color-gold)] mb-2",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/location/WhyHereSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-[var(--color-ink)]",
                                    children: reason.title
                                }, void 0, false, {
                                    fileName: "[project]/components/location/WhyHereSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--color-vapor)] text-sm leading-relaxed",
                                    children: reason.description
                                }, void 0, false, {
                                    fileName: "[project]/components/location/WhyHereSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/location/WhyHereSection.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/location/WhyHereSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/location/WhyHereSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/location/WhyHereSection.tsx",
        lineNumber: 15,
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
"[project]/app/(site)/ibiza/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IbizaPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/fetch.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SchemaOrg.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$LocationHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/location/LocationHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/car/CarGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$PickupPointGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/location/PickupPointGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$WhyHereSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/location/WhyHereSection.tsx [app-rsc] (ecmascript)");
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
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
    path: '/ibiza',
    fallbackTitle: 'Alquiler de coches Mercedes en Ibiza — Reserva online',
    fallbackDescription: 'Alquila un Mercedes en Ibiza desde 130€/día. Recogida en aeropuerto, puerto u otro punto. Mercedes Clase V con hasta 8 plazas. Sin sorpresas.'
});
// ── Static FAQ fallback (Ibiza-specific) ──────────────────────────
const IBIZA_FAQS = [
    {
        _id: 'ibz-faq-1',
        question: {
            es: '¿Puedo recoger el coche directamente en el aeropuerto de Ibiza?'
        },
        answer: {
            es: [
                {
                    _key: 'a1',
                    _type: 'block',
                    style: 'normal',
                    markDefs: [],
                    children: [
                        {
                            _key: 'c1',
                            _type: 'span',
                            marks: [],
                            text: 'Sí. Operamos con servicio de recogida en el Aeropuerto de Ibiza (IBZ). Nuestro equipo te espera en el área de llegadas con el vehículo preparado. Solo necesitas confirmar tu hora de aterrizaje al reservar.'
                        }
                    ]
                }
            ]
        },
        category: 'ibiza'
    },
    {
        _id: 'ibz-faq-2',
        question: {
            es: '¿Es necesario reservar con antelación en temporada alta?'
        },
        answer: {
            es: [
                {
                    _key: 'a2',
                    _type: 'block',
                    style: 'normal',
                    markDefs: [],
                    children: [
                        {
                            _key: 'c2',
                            _type: 'span',
                            marks: [],
                            text: 'En julio y agosto la demanda es muy alta. Recomendamos reservar con al menos 2 semanas de antelación para garantizar la disponibilidad del vehículo y el punto de recogida que prefieras.'
                        }
                    ]
                }
            ]
        },
        category: 'ibiza'
    },
    {
        _id: 'ibz-faq-3',
        question: {
            es: '¿Puedo entregar el coche en el puerto si regreso en ferri?'
        },
        answer: {
            es: [
                {
                    _key: 'a3',
                    _type: 'block',
                    style: 'normal',
                    markDefs: [],
                    children: [
                        {
                            _key: 'c3',
                            _type: 'span',
                            marks: [],
                            text: 'Sí. Puedes entregar el vehículo en el Puerto de Ibiza si tu vuelta es en ferri. Comunícanos el punto de entrega al hacer la reserva.'
                        }
                    ]
                }
            ]
        },
        category: 'ibiza'
    },
    {
        _id: 'ibz-faq-4',
        question: {
            es: '¿Cuántos kilómetros incluye el alquiler al día?'
        },
        answer: {
            es: [
                {
                    _key: 'a4',
                    _type: 'block',
                    style: 'normal',
                    markDefs: [],
                    children: [
                        {
                            _key: 'c4',
                            _type: 'span',
                            marks: [],
                            text: 'Cada día de alquiler incluye 250 km. Los kilómetros adicionales se facturan a 0,50€/km. Para una semana en Ibiza, los 250 km diarios son más que suficientes para explorar toda la isla.'
                        }
                    ]
                }
            ]
        },
        category: 'ibiza'
    }
];
const IBIZA_PICKUP_POINTS = [
    {
        name: 'Aeropuerto de Ibiza (IBZ)',
        slug: 'aeropuerto-ibiza',
        description: 'Terminal de llegadas, planta baja. Te esperamos con el vehículo preparado.',
        href: '/ibiza/aeropuerto',
        type: 'airport'
    },
    {
        name: 'Puerto de Ibiza',
        slug: 'puerto-ibiza',
        description: 'Zona de alquiler junto a la dársena. Ideal si llegas en ferri o yate.',
        href: '/ibiza/puerto',
        type: 'port'
    }
];
const IBIZA_REASONS = [
    {
        title: 'Libertad para explorar la isla',
        description: 'Ibiza tiene calas y playas a las que solo se puede llegar en coche. Un Mercedes te da acceso a los rincones más exclusivos, más allá de los circuitos turísticos habituales.'
    },
    {
        title: 'Un coche a la altura de Ibiza',
        description: 'Ibiza es sinónimo de estilo y exclusividad. Llegar a cualquier lugar de la isla al volante de un Mercedes es la forma más coherente de vivirla. El vehículo perfecto para una experiencia premium.'
    },
    {
        title: 'Recogida directa al aterrizar',
        description: 'Te esperamos en el aeropuerto o el puerto con el vehículo preparado. Sin esperas, sin formularios interminables. Empieza tu aventura en Ibiza desde el primer minuto.'
    }
];
async function IbizaPage() {
    const [cars, ibiza, testimonials, sanityFaqs] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllActiveCars"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocationBySlug"])('ibiza'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedTestimonials"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFaqsByCategory"])('ibiza')
    ]);
    const ibizaCars = (cars ?? []).filter((c)=>c.availableLocations?.includes('ibiza'));
    const ibizaLocation = ibiza;
    const testimonialsData = testimonials;
    const faqs = sanityFaqs?.length ? sanityFaqs : IBIZA_FAQS;
    const priceFrom = ibizaCars.length > 0 ? Math.min(...ibizaCars.map((c)=>c.minPrice ?? 130)) : 130;
    const siteUrl = ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'https://hereandnow.es';
    const heroImage = ibizaLocation?.heroImage?.asset?.url;
    const heroAlt = ibizaLocation?.heroImage?.alt?.es;
    // Structured data
    const schemas = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBreadcrumbSchema"])([
            {
                name: 'Inicio',
                url: siteUrl
            },
            {
                name: 'Ibiza',
                url: `${siteUrl}/ibiza`
            }
        ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFAQSchema"])(faqs, 'es'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateLocalBusinessSchema"])({
            siteName: 'Here & Now — Ibiza'
        }, {
            name: {
                es: 'Here & Now Ibiza'
            },
            phone: '+34625305620'
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SchemaOrg$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaOrg"], {
                schema: schemas
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--color-canvas)] border-b border-[var(--color-mist)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                        items: [
                            {
                                label: 'Inicio',
                                href: '/'
                            },
                            {
                                label: 'Ibiza'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/app/(site)/ibiza/page.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$LocationHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocationHero"], {
                heading: "Alquiler de coches Mercedes en Ibiza",
                description: "Te proporcionamos la mejor manera de explorar Ibiza con nuestros vehículos de lujo en alquiler.",
                priceFrom: priceFrom,
                pickupCount: 2,
                imageUrl: heroImage,
                imageAlt: heroAlt
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "flota-section",
                className: "section-padding",
                "aria-labelledby": "ibiza-fleet-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$car$2f$CarGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarGrid"], {
                            cars: ibizaCars,
                            heading: "Vehículos disponibles en Ibiza",
                            subheading: "Elige el Mercedes perfecto para tu escapada a Ibiza."
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/ibiza/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        ibizaCars.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[var(--color-vapor)] py-8",
                            children: "Configura Sanity para mostrar los vehículos disponibles en Ibiza."
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/ibiza/page.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$PickupPointGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PickupPointGrid"], {
                points: IBIZA_PICKUP_POINTS,
                intro: "Operamos en los dos puntos de entrada principales a la isla."
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$location$2f$WhyHereSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhyHereSection"], {
                heading: "¿Por qué alquilar un Mercedes en Ibiza?",
                reasons: IBIZA_REASONS
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--color-stone)] border-y border-[var(--color-mist)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-[var(--color-ink)] mb-1",
                                    children: "Antes de coger el coche en Ibiza..."
                                }, void 0, false, {
                                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--color-vapor)]",
                                    children: "Reserva con antelación en julio–agosto. Muchas calas del norte solo son accesibles en coche."
                                }, void 0, false, {
                                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(site)/ibiza/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/guias/alquiler-coches-ibiza",
                            className: "flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors whitespace-nowrap",
                            children: "Ver guía completa →"
                        }, void 0, false, {
                            fileName: "[project]/app/(site)/ibiza/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TestimonialsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestimonialsSection"], {
                testimonials: testimonialsData?.filter((t)=>t.location?.slug?.current === 'ibiza')
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding",
                "aria-labelledby": "faq-ibiza",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[760px] mx-auto px-6 lg:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQSection"], {
                        faqs: faqs,
                        heading: "Preguntas frecuentes — Ibiza",
                        showContactLink: true
                    }, void 0, false, {
                        fileName: "[project]/app/(site)/ibiza/page.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(site)/ibiza/page.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASection"], {
                heading: "Reserva tu Mercedes en Ibiza",
                subheading: "Empieza tu aventura en la isla desde el primer minuto.",
                buttons: [
                    {
                        label: 'Reservar ahora en Ibiza',
                        href: '/flota',
                        variant: 'primary'
                    },
                    {
                        label: 'Contactar',
                        href: '/contacto',
                        variant: 'secondary'
                    }
                ],
                phone: "625 305 620"
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppCTA"], {
                message: "Hola, me interesa alquilar un coche Mercedes en Ibiza."
            }, void 0, false, {
                fileName: "[project]/app/(site)/ibiza/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(site)/ibiza/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/ibiza/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_e7e3decc._.js.map