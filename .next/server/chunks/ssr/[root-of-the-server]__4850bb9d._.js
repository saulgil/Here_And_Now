module.exports = {

"[project]/.next-internal/server/app/studio/[[...tool]]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[project]/sanity/schemaTypes/documents/brand.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "brand": (()=>brand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const brand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'brand',
    title: 'Marca',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TagIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                accept: '.svg,.png'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logoLight',
            title: 'Logo (versión clara)',
            type: 'image'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Descripción',
            type: 'localeText'
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo'
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/car.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "car": (()=>car)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const car = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'car',
    title: 'Vehículo',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CaseIcon"],
    groups: [
        {
            name: 'identity',
            title: 'Identificación',
            default: true
        },
        {
            name: 'specs',
            title: 'Especificaciones'
        },
        {
            name: 'content',
            title: 'Contenido'
        },
        {
            name: 'media',
            title: 'Imágenes'
        },
        {
            name: 'rental',
            title: 'Alquiler'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        // Identity
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            group: 'identity',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'internalId',
            title: 'ID interno',
            type: 'string',
            group: 'identity',
            description: 'Ej: car-001',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            group: 'identity',
            options: {
                source: 'name.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'brand',
            title: 'Marca',
            type: 'reference',
            to: [
                {
                    type: 'brand'
                }
            ],
            group: 'identity',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'model',
            title: 'Modelo',
            type: 'string',
            group: 'identity',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'variant',
            title: 'Variante',
            type: 'string',
            group: 'identity'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'year',
            title: 'Año',
            type: 'number',
            group: 'identity',
            validation: (Rule)=>Rule.min(2000).max(2030)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Categoría',
            type: 'reference',
            to: [
                {
                    type: 'carCategory'
                }
            ],
            group: 'identity',
            validation: (Rule)=>Rule.required()
        }),
        // Specs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'passengers',
            title: 'Pasajeros',
            type: 'number',
            group: 'specs',
            validation: (Rule)=>Rule.required().min(1).max(12)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'doors',
            title: 'Puertas',
            type: 'number',
            group: 'specs',
            validation: (Rule)=>Rule.required().min(2).max(7)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'lateralDoors',
            title: 'Puertas laterales automáticas',
            type: 'boolean',
            group: 'specs',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'transmission',
            title: 'Transmisión',
            type: 'string',
            group: 'specs',
            options: {
                list: [
                    {
                        title: 'Automático',
                        value: 'automatic'
                    },
                    {
                        title: 'Manual',
                        value: 'manual'
                    }
                ],
                layout: 'radio'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'gearbox',
            title: 'Caja de cambios (detalle)',
            type: 'string',
            group: 'specs',
            description: 'Ej: 9G-TRONIC'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fuel',
            title: 'Combustible',
            type: 'string',
            group: 'specs',
            options: {
                list: [
                    {
                        title: 'Diésel',
                        value: 'diesel'
                    },
                    {
                        title: 'Gasolina',
                        value: 'gasolina'
                    },
                    {
                        title: 'Híbrido',
                        value: 'hibrido'
                    },
                    {
                        title: 'Eléctrico',
                        value: 'electrico'
                    }
                ],
                layout: 'radio'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'power',
            title: 'Potencia (CV)',
            type: 'number',
            group: 'specs'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'luggage',
            title: 'Maletero (litros)',
            type: 'number',
            group: 'specs'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'colorExterior',
            title: 'Color exterior',
            type: 'localeString',
            group: 'specs'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'colorInterior',
            title: 'Interior',
            type: 'localeString',
            group: 'specs'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'wheels',
            title: 'Llantas',
            type: 'string',
            group: 'specs'
        }),
        // Rental conditions
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'minAge',
            title: 'Edad mínima conductor',
            type: 'number',
            group: 'rental',
            initialValue: 26,
            validation: (Rule)=>Rule.required().min(18)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'minLicenseYears',
            title: 'Años mínimos de carnet',
            type: 'number',
            group: 'rental',
            initialValue: 2,
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'kmIncluded',
            title: 'Km incluidos por día',
            type: 'number',
            group: 'rental',
            initialValue: 250,
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'kmExtraPrice',
            title: 'Precio km adicional (€)',
            type: 'number',
            group: 'rental',
            initialValue: 0.5,
            validation: (Rule)=>Rule.required().min(0)
        }),
        // Content
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'shortDescription',
            title: 'Descripción corta',
            type: 'localeText',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fullDescription',
            title: 'Descripción completa',
            type: 'localeBlockContent',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'features',
            title: 'Características',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'localeString'
                }
            ],
            validation: (Rule)=>Rule.required().min(3)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'faqs',
            title: 'Preguntas frecuentes',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'faq'
                        }
                    ]
                }
            ]
        }),
        // Media
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mainImage',
            title: 'Imagen principal',
            type: 'imageWithAlt',
            group: 'media',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'gallery',
            title: 'Galería',
            type: 'array',
            group: 'media',
            of: [
                {
                    type: 'imageWithAlt'
                }
            ],
            validation: (Rule)=>Rule.required().min(3)
        }),
        // SEO
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
            group: 'seo',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name.es',
            subtitle: 'model',
            media: 'mainImage.asset'
        },
        prepare ({ title, subtitle, media }) {
            return {
                title: title ?? '(sin nombre)',
                subtitle,
                media
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/carAvailability.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "carAvailability": (()=>carAvailability)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const carAvailability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'carAvailability',
    title: 'Disponibilidad de vehículo',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CalendarIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'car',
            title: 'Vehículo',
            type: 'reference',
            to: [
                {
                    type: 'car'
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'location',
            title: 'Destino',
            type: 'reference',
            to: [
                {
                    type: 'location'
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'isActive',
            title: 'Activo',
            type: 'boolean',
            initialValue: false,
            description: 'Solo los activos aparecen en la web. Prepara la disponibilidad antes de activarla.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'pricePerDay',
            title: 'Precio por día (€)',
            type: 'number',
            validation: (Rule)=>Rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'currency',
            title: 'Moneda',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Euro (€)',
                        value: 'EUR'
                    }
                ]
            },
            initialValue: 'EUR'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'availablePickupPoints',
            title: 'Puntos de recogida activos',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'pickupPoint'
                        }
                    ]
                }
            ],
            validation: (Rule)=>Rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'extras',
            title: 'Extras disponibles',
            type: 'array',
            of: [
                {
                    type: 'extra'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverages',
            title: 'Coberturas',
            type: 'array',
            of: [
                {
                    type: 'coverage'
                }
            ],
            validation: (Rule)=>Rule.required().min(1)
        })
    ],
    preview: {
        select: {
            car: 'car.name.es',
            location: 'location.name.es',
            price: 'pricePerDay',
            active: 'isActive'
        },
        prepare ({ car, location, price, active }) {
            return {
                title: `${car ?? '?'} — ${location ?? '?'}`,
                subtitle: `${active ? '🟢' : '🔴'} ${price ? `${price}€/día` : 'Sin precio'}`
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/carCategory.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "carCategory": (()=>carCategory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const carCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'carCategory',
    title: 'Categoría de vehículo',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThListIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Descripción',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'icon',
            title: 'Icono (Lucide)',
            type: 'string',
            description: 'Nombre del icono de Lucide React, ej: "Car"'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'order',
            title: 'Orden de visualización',
            type: 'number',
            initialValue: 0
        })
    ],
    preview: {
        select: {
            title: 'name.es'
        }
    },
    orderings: [
        {
            title: 'Orden',
            name: 'orderAsc',
            by: [
                {
                    field: 'order',
                    direction: 'asc'
                }
            ]
        }
    ]
});
}}),
"[project]/sanity/schemaTypes/documents/faq.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "faq": (()=>faq)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const faq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'faq',
    title: 'Pregunta frecuente',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HelpCircleIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'question',
            title: 'Pregunta',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'answer',
            title: 'Respuesta',
            type: 'localeBlockContent',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'General',
                        value: 'general'
                    },
                    {
                        title: 'Ibiza',
                        value: 'ibiza'
                    },
                    {
                        title: 'Alicante',
                        value: 'alicante'
                    },
                    {
                        title: 'Reserva',
                        value: 'booking'
                    },
                    {
                        title: 'Vehículo',
                        value: 'vehicle'
                    },
                    {
                        title: 'Coberturas',
                        value: 'coverage'
                    },
                    {
                        title: 'Pago',
                        value: 'payment'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'order',
            title: 'Orden',
            type: 'number',
            initialValue: 0
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'relatedCars',
            title: 'Coches relacionados',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'car'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'relatedLocations',
            title: 'Destinos relacionados',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'location'
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'question.es',
            subtitle: 'category'
        },
        prepare ({ title, subtitle }) {
            const labels = {
                general: '📋',
                ibiza: '🏖️',
                alicante: '⛵',
                booking: '📅',
                vehicle: '🚐',
                coverage: '🛡️',
                payment: '💳'
            };
            return {
                title,
                subtitle: `${labels[subtitle] ?? ''} ${subtitle}`
            };
        }
    },
    orderings: [
        {
            title: 'Categoría + Orden',
            name: 'categoryOrder',
            by: [
                {
                    field: 'category',
                    direction: 'asc'
                },
                {
                    field: 'order',
                    direction: 'asc'
                }
            ]
        }
    ]
});
}}),
"[project]/sanity/schemaTypes/documents/guide.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "guide": (()=>guide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'guide',
    title: 'Guía',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentTextIcon"],
    groups: [
        {
            name: 'content',
            title: 'Contenido',
            default: true
        },
        {
            name: 'relations',
            title: 'Relaciones'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Título',
            type: 'localeString',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishedAt',
            title: 'Fecha de publicación',
            type: 'datetime',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'updatedAt',
            title: 'Fecha de actualización',
            type: 'datetime',
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'author',
            title: 'Autor',
            type: 'string',
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'excerpt',
            title: 'Extracto',
            type: 'localeText',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            title: 'Contenido',
            type: 'localeBlockContent',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mainImage',
            title: 'Imagen principal',
            type: 'imageWithAlt',
            group: 'content',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            group: 'content',
            options: {
                list: [
                    {
                        title: 'Alquiler en Ibiza',
                        value: 'alquiler-ibiza'
                    },
                    {
                        title: 'Alquiler en Alicante',
                        value: 'alquiler-alicante'
                    },
                    {
                        title: 'Destino Ibiza',
                        value: 'destino-ibiza'
                    },
                    {
                        title: 'Destino Alicante',
                        value: 'destino-alicante'
                    },
                    {
                        title: 'Aeropuertos',
                        value: 'aeropuerto'
                    },
                    {
                        title: 'Consejos',
                        value: 'consejos'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'relatedCars',
            title: 'Coches mencionados',
            type: 'array',
            group: 'relations',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'car'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'relatedLocations',
            title: 'Destinos mencionados',
            type: 'array',
            group: 'relations',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'location'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'faqs',
            title: 'FAQs relacionadas',
            type: 'array',
            group: 'relations',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'faq'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
            group: 'seo',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title.es',
            subtitle: 'category',
            media: 'mainImage.asset'
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/location.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "location": (()=>location)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'location',
    title: 'Destino',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PinIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            options: {
                source: 'name.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'countryCode',
            title: 'Código de país',
            type: 'string',
            initialValue: 'ES'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'region',
            title: 'Región/Provincia',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'shortDescription',
            title: 'Descripción corta',
            type: 'localeText',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fullDescription',
            title: 'Descripción completa',
            type: 'localeBlockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'heroImage',
            title: 'Imagen de cabecera',
            type: 'imageWithAlt',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'faqs',
            title: 'FAQs del destino',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'faq'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name.es',
            media: 'heroImage.asset'
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/pickupPoint.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pickupPoint": (()=>pickupPoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const pickupPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'pickupPoint',
    title: 'Punto de recogida',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PinIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            options: {
                source: 'name.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'location',
            title: 'Destino padre',
            type: 'reference',
            to: [
                {
                    type: 'location'
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'address',
            title: 'Dirección',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coordinates',
            title: 'Coordenadas',
            type: 'geopoint'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'phone',
            title: 'Teléfono',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'openingHours',
            title: 'Horario',
            type: 'array',
            of: [
                {
                    type: 'openingHours'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'shortDescription',
            title: 'Descripción corta',
            type: 'localeText',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fullDescription',
            title: 'Descripción completa',
            type: 'localeBlockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'instructions',
            title: 'Instrucciones de recogida',
            type: 'localeBlockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'image',
            title: 'Foto del punto',
            type: 'imageWithAlt'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name.es',
            subtitle: 'location.name.es',
            media: 'image.asset'
        },
        prepare ({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? `📍 ${subtitle}` : '',
                media
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/sitePage.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sitePage": (()=>sitePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const sitePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'sitePage',
    title: 'Página',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Título',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            options: {
                source: 'title.es'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'pageType',
            title: 'Tipo de página',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Inicio',
                        value: 'home'
                    },
                    {
                        title: 'Flota',
                        value: 'fleet'
                    },
                    {
                        title: 'Contacto',
                        value: 'contact'
                    },
                    {
                        title: 'Hub de guías',
                        value: 'guide-hub'
                    },
                    {
                        title: 'Legal',
                        value: 'legal'
                    },
                    {
                        title: 'Custom',
                        value: 'custom'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            title: 'Contenido',
            type: 'localeBlockContent'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'faq'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'testimonials',
            title: 'Testimonios',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'testimonial'
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'isPublished',
            title: 'Publicada',
            type: 'boolean',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seo',
            title: 'SEO',
            type: 'seoFields',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title.es',
            subtitle: 'pageType',
            published: 'isPublished'
        },
        prepare ({ title, subtitle, published }) {
            return {
                title,
                subtitle: `${published ? '🟢' : '🔴'} ${subtitle}`
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/documents/siteSettings.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "siteSettings": (()=>siteSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const siteSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'siteSettings',
    title: 'Configuración del sitio',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CogIcon"],
    // Note: Singleton behaviour enforced via Studio structure (no 'create' button)
    groups: [
        {
            name: 'brand',
            title: 'Marca',
            default: true
        },
        {
            name: 'contact',
            title: 'Contacto'
        },
        {
            name: 'social',
            title: 'Redes sociales'
        },
        {
            name: 'nav',
            title: 'Navegación'
        },
        {
            name: 'seo',
            title: 'SEO global'
        }
    ],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'siteName',
            title: 'Nombre del sitio',
            type: 'string',
            group: 'brand',
            initialValue: 'Here & Now',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'tagline',
            title: 'Tagline',
            type: 'localeString',
            group: 'brand'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'brand',
            options: {
                accept: '.svg,.png'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logoLight',
            title: 'Logo (versión clara)',
            type: 'image',
            group: 'brand'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            group: 'brand'
        }),
        // Contact
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'phone',
            title: 'Teléfono',
            type: 'string',
            group: 'contact',
            initialValue: '+34625305620'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'email',
            title: 'Email',
            type: 'string',
            group: 'contact'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'whatsappUrl',
            title: 'WhatsApp URL',
            type: 'url',
            group: 'contact'
        }),
        // Social
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'instagramUrl',
            title: 'Instagram',
            type: 'url',
            group: 'social',
            initialValue: 'https://www.instagram.com/hereandnowibiza/'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'threadsUrl',
            title: 'Threads',
            type: 'url',
            group: 'social',
            initialValue: 'https://www.threads.net/@hereandnowibiza'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'facebookUrl',
            title: 'Facebook',
            type: 'url',
            group: 'social'
        }),
        // Navigation
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mainNav',
            title: 'Menú principal',
            type: 'array',
            group: 'nav',
            of: [
                {
                    type: 'navItem'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'footerNavCol1',
            title: 'Footer columna 1',
            type: 'array',
            group: 'nav',
            of: [
                {
                    type: 'navItem'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'footerNavCol2',
            title: 'Footer columna 2',
            type: 'array',
            group: 'nav',
            of: [
                {
                    type: 'navItem'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'footerNavLegal',
            title: 'Footer legal',
            type: 'array',
            group: 'nav',
            of: [
                {
                    type: 'navItem'
                }
            ]
        }),
        // SEO
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'defaultSeo',
            title: 'SEO por defecto',
            type: 'seoFields',
            group: 'seo'
        })
    ],
    preview: {
        prepare: ()=>({
                title: 'Configuración global'
            })
    }
});
}}),
"[project]/sanity/schemaTypes/documents/testimonial.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "testimonial": (()=>testimonial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-rsc] (ecmascript)");
;
;
const testimonial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'testimonial',
    title: 'Testimonio',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StarIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'author',
            title: 'Nombre del cliente',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'text',
            title: 'Texto',
            type: 'localeText',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'location',
            title: 'Destino',
            type: 'reference',
            to: [
                {
                    type: 'location'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'rating',
            title: 'Valoración (1-5)',
            type: 'number',
            validation: (Rule)=>Rule.min(1).max(5)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            title: 'Fecha aproximada',
            type: 'date'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'featured',
            title: 'Destacado (aparece en homepage)',
            type: 'boolean',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'source',
            title: 'Fuente',
            type: 'string',
            options: {
                list: [
                    'web',
                    'google',
                    'tripadvisor',
                    'other'
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'location.name.es',
            featured: 'featured'
        },
        prepare ({ title, subtitle, featured }) {
            return {
                title,
                subtitle: `${featured ? '⭐ ' : ''}${subtitle ?? ''}`
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/coverage.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "coverage": (()=>coverage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const coverage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'coverage',
    title: 'Cobertura',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug interno',
            type: 'string',
            description: '"basica" o "total"',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'price',
            title: 'Precio adicional (€)',
            type: 'number',
            description: '0 para la cobertura básica incluida',
            initialValue: 0,
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'pricingModel',
            title: 'Modelo de cobro',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Por reserva',
                        value: 'per_booking'
                    },
                    {
                        title: 'Por día',
                        value: 'per_day'
                    }
                ],
                layout: 'radio'
            },
            initialValue: 'per_booking',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'franchiseAmount',
            title: 'Franquicia (€)',
            type: 'number',
            description: '0 para cobertura total sin franquicia',
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'depositAmountCard',
            title: 'Fianza con tarjeta (€)',
            type: 'number',
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'includesRoadside',
            title: 'Incluye asistencia en carretera',
            type: 'boolean',
            initialValue: true
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Descripción',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'isDefault',
            title: 'Cobertura por defecto',
            type: 'boolean',
            description: 'Solo una cobertura puede ser la predeterminada',
            initialValue: false
        })
    ],
    preview: {
        select: {
            title: 'name.es',
            subtitle: 'price'
        },
        prepare ({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle === 0 ? 'Incluida' : `+${subtitle}€`
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/extra.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extra": (()=>extra)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const extra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'extra',
    title: 'Extra',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Nombre',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'price',
            title: 'Precio (€)',
            type: 'number',
            validation: (Rule)=>Rule.required().min(0)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'pricingModel',
            title: 'Modelo de cobro',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Cargo único (por reserva)',
                        value: 'one_time'
                    },
                    {
                        title: 'Por día',
                        value: 'per_day'
                    }
                ],
                layout: 'radio'
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'maxQuantity',
            title: 'Cantidad máxima',
            type: 'number',
            initialValue: 1
        })
    ],
    preview: {
        select: {
            title: 'name.es',
            subtitle: 'price'
        },
        prepare ({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle != null ? `${subtitle}€` : ''
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/imageWithAlt.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "imageWithAlt": (()=>imageWithAlt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const imageWithAlt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'imageWithAlt',
    title: 'Imagen con texto alternativo',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'asset',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'alt',
            title: 'Texto alternativo (accesibilidad)',
            type: 'localeString',
            description: 'Describe la imagen para lectores de pantalla y SEO',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'caption',
            title: 'Pie de foto (opcional)',
            type: 'localeString'
        })
    ],
    preview: {
        select: {
            media: 'asset',
            title: 'alt.es'
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/localeBlockContent.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "localeBlockContent": (()=>localeBlockContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const blockContent = {
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                {
                    title: 'Normal',
                    value: 'normal'
                },
                {
                    title: 'H2',
                    value: 'h2'
                },
                {
                    title: 'H3',
                    value: 'h3'
                },
                {
                    title: 'H4',
                    value: 'h4'
                }
            ],
            marks: {
                decorators: [
                    {
                        title: 'Bold',
                        value: 'strong'
                    },
                    {
                        title: 'Italic',
                        value: 'em'
                    }
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'Enlace',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL'
                            },
                            {
                                name: 'blank',
                                type: 'boolean',
                                title: 'Abrir en nueva pestaña'
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'image'
        }
    ]
};
const localeBlockContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'localeBlockContent',
    title: 'Contenido enriquecido (ES/EN)',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: false
    },
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'es',
            title: 'Español',
            ...blockContent,
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'en',
            title: 'English',
            ...blockContent
        })
    ]
});
}}),
"[project]/sanity/schemaTypes/objects/localeString.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "localeString": (()=>localeString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const localeString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'localeString',
    title: 'Texto (ES/EN)',
    type: 'object',
    options: {
        collapsible: false
    },
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'es',
            title: 'Español',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'en',
            title: 'English',
            type: 'string'
        })
    ]
});
}}),
"[project]/sanity/schemaTypes/objects/localeText.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "localeText": (()=>localeText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const localeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'localeText',
    title: 'Texto largo (ES/EN)',
    type: 'object',
    options: {
        collapsible: false
    },
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'es',
            title: 'Español',
            type: 'text',
            rows: 4,
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'en',
            title: 'English',
            type: 'text',
            rows: 4
        })
    ]
});
}}),
"[project]/sanity/schemaTypes/objects/navItem.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "navItem": (()=>navItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const navItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'navItem',
    title: 'Elemento de navegación',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'label',
            title: 'Etiqueta',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'href',
            title: 'Enlace',
            type: 'string',
            description: 'Ruta relativa o URL absoluta. Ej: /ibiza/',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'isExternal',
            title: 'Enlace externo',
            type: 'boolean',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'children',
            title: 'Subelementos (dropdown)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            type: 'localeString',
                            title: 'Etiqueta'
                        },
                        {
                            name: 'href',
                            type: 'string',
                            title: 'Enlace'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'label.es',
                            subtitle: 'href'
                        }
                    }
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'label.es',
            subtitle: 'href'
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/openingHours.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "openingHours": (()=>openingHours)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const openingHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'openingHours',
    title: 'Horario',
    type: 'object',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'days',
            title: 'Días',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                list: [
                    {
                        title: 'Lunes',
                        value: 'Monday'
                    },
                    {
                        title: 'Martes',
                        value: 'Tuesday'
                    },
                    {
                        title: 'Miércoles',
                        value: 'Wednesday'
                    },
                    {
                        title: 'Jueves',
                        value: 'Thursday'
                    },
                    {
                        title: 'Viernes',
                        value: 'Friday'
                    },
                    {
                        title: 'Sábado',
                        value: 'Saturday'
                    },
                    {
                        title: 'Domingo',
                        value: 'Sunday'
                    }
                ],
                layout: 'grid'
            },
            validation: (Rule)=>Rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'opens',
            title: 'Apertura',
            type: 'string',
            description: 'Formato HH:MM, ej: 09:00',
            validation: (Rule)=>Rule.required().regex(/^\d{2}:\d{2}$/, {
                    name: 'HH:MM'
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'closes',
            title: 'Cierre',
            type: 'string',
            description: 'Formato HH:MM, ej: 21:00',
            validation: (Rule)=>Rule.required().regex(/^\d{2}:\d{2}$/, {
                    name: 'HH:MM'
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'closed',
            title: 'Cerrado',
            type: 'boolean',
            initialValue: false
        })
    ],
    preview: {
        select: {
            days: 'days',
            opens: 'opens',
            closes: 'closes',
            closed: 'closed'
        },
        prepare ({ days, opens, closes, closed }) {
            const dayStr = Array.isArray(days) ? days.slice(0, 2).join(', ') : '';
            return {
                title: dayStr,
                subtitle: closed ? 'Cerrado' : `${opens} – ${closes}`
            };
        }
    }
});
}}),
"[project]/sanity/schemaTypes/objects/seoFields.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "seoFields": (()=>seoFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/types/lib/index.mjs [app-rsc] (ecmascript)");
;
const seoFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'seoFields',
    title: 'SEO',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'metaTitle',
            title: 'Meta título',
            type: 'localeString',
            description: 'Máximo 60 caracteres',
            validation: (Rule)=>Rule.required().custom((value)=>{
                    if (!value?.es) return 'El título en español es obligatorio';
                    if (value.es.length > 60) return `Demasiado largo: ${value.es.length}/60`;
                    if (value.en && value.en.length > 60) return `EN demasiado largo: ${value.en.length}/60`;
                    return true;
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'metaDescription',
            title: 'Meta descripción',
            type: 'localeText',
            description: 'Máximo 160 caracteres',
            validation: (Rule)=>Rule.required().custom((value)=>{
                    if (!value?.es) return 'La descripción en español es obligatoria';
                    if (value.es.length > 160) return `Demasiado larga: ${value.es.length}/160`;
                    if (value.en && value.en.length > 160) return `EN demasiado larga: ${value.en.length}/160`;
                    return true;
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'ogImage',
            title: 'Imagen Open Graph',
            type: 'image',
            description: '1200×630px recomendado',
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'canonicalUrl',
            title: 'URL canónica (opcional)',
            type: 'url',
            description: 'Solo si difiere de la URL actual'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'noindex',
            title: 'Noindex',
            type: 'boolean',
            description: 'Marcar para excluir de buscadores',
            initialValue: false
        })
    ]
});
}}),
"[project]/sanity/schemaTypes/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Documents
__turbopack_context__.s({
    "schemaTypes": (()=>schemaTypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/brand.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$car$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/car.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$carAvailability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/carAvailability.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$carCategory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/carCategory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$faq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/faq.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$guide$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/guide.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$location$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/location.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$pickupPoint$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/pickupPoint.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$sitePage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/sitePage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$siteSettings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/siteSettings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$testimonial$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/documents/testimonial.ts [app-rsc] (ecmascript)");
// Objects
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$coverage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/coverage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$extra$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/extra.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$imageWithAlt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/imageWithAlt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeBlockContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/localeBlockContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeString$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/localeString.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/localeText.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$navItem$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/navItem.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$openingHours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/openingHours.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$seoFields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/objects/seoFields.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
const schemaTypes = [
    // Documents
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$car$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["car"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$carAvailability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["carAvailability"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$carCategory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["carCategory"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$faq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faq"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$guide$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$location$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["location"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$pickupPoint$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickupPoint"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$sitePage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sitePage"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$siteSettings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$documents$2f$testimonial$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testimonial"],
    // Objects
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$coverage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coverage"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$extra$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extra"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$imageWithAlt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageWithAlt"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeBlockContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localeBlockContent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeString$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localeString"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$localeText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localeText"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$navItem$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["navItem"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$openingHours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["openingHours"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$objects$2f$seoFields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoFields"]
];
}}),
"[project]/sanity/sanity.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/index.ts [app-rsc] (ecmascript)");
;
;
;
;
const projectId = ("TURBOPACK compile-time value", "placeholder-project-id");
const dataset = ("TURBOPACK compile-time value", "production") ?? 'production';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId,
    dataset,
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: (S)=>S.list().title('Contenido').items([
                    // Singleton
                    S.listItem().title('⚙️ Configuración del sitio').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                    S.divider(),
                    // Main content
                    S.documentTypeListItem('car').title('🚐 Vehículos'),
                    S.documentTypeListItem('carAvailability').title('📅 Disponibilidades'),
                    S.divider(),
                    S.documentTypeListItem('location').title('📍 Destinos'),
                    S.documentTypeListItem('pickupPoint').title('🏨 Puntos de recogida'),
                    S.divider(),
                    S.documentTypeListItem('guide').title('📖 Guías'),
                    S.documentTypeListItem('faq').title('❓ FAQs'),
                    S.documentTypeListItem('testimonial').title('⭐ Testimonios'),
                    S.documentTypeListItem('sitePage').title('📄 Páginas'),
                    S.divider(),
                    // Catalogues
                    S.documentTypeListItem('brand').title('🏷️ Marcas'),
                    S.documentTypeListItem('carCategory').title('📂 Categorías')
                ])
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["visionTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaTypes"]
    }
});
}}),
"[project]/app/studio/[[...tool]]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StudioPage),
    "dynamic": (()=>dynamic),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/client-component.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/sanity.config.ts [app-rsc] (ecmascript)");
;
;
;
const dynamic = 'force-dynamic';
const metadata = {
    robots: {
        index: false,
        follow: false
    }
};
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}}),
"[project]/app/studio/[[...tool]]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/studio/[[...tool]]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4850bb9d._.js.map