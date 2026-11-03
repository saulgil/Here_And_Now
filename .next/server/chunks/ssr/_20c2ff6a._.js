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
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
    path: '/',
    fallbackTitle: 'Alquiler de coches Mercedes en Ibiza y Alicante',
    fallbackDescription: 'Alquila un Mercedes premium en Ibiza o Alicante. Flota exclusiva, recogida en aeropuerto o puerto. Reserva online sin costes ocultos desde 130€/día.'
});
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[60vh] px-6 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium tracking-widest uppercase text-[var(--color-vapor)] mb-4",
                    children: "En construcción"
                }, void 0, false, {
                    fileName: "[project]/app/(site)/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-semibold mb-4",
                    children: [
                        "Alquiler de coches Mercedes",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/(site)/page.tsx",
                            lineNumber: 18,
                            columnNumber: 38
                        }, this),
                        "en Ibiza y Alicante"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(site)/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-[var(--color-vapor)] max-w-md mx-auto",
                    children: "Nueva web en desarrollo. El layout, las fuentes, los tokens de diseño y la infraestructura Sanity están operativos."
                }, void 0, false, {
                    fileName: "[project]/app/(site)/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(site)/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(site)/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(site)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_20c2ff6a._.js.map