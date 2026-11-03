module.exports = {

"[externals]/shiki/textmate [external] (shiki/textmate, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("shiki/textmate");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/shiki/core [external] (shiki/core, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("shiki/core");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/languages/attachResolvedLanguages.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "attachResolvedLanguages": (()=>attachResolvedLanguages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/constants.js [app-rsc] (ecmascript)");
;
//#region src/highlighter/languages/attachResolvedLanguages.ts
/**
* Record resolved grammars in the shared language cache and attach them to a
* highlighter. Highlights bundles its lexers and ignores the grammars.
*/ function attachResolvedLanguages(resolvedLanguages, highlighter) {
    for (const resolvedLang of Array.isArray(resolvedLanguages) ? resolvedLanguages : [
        resolvedLanguages
    ]){
        let lang = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvedLanguages"].get(resolvedLang.name);
        if (lang == null) {
            lang = resolvedLang;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvedLanguages"].set(resolvedLang.name, lang);
        }
        highlighter.attachLanguages([
            lang
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttachedLanguages"].add(lang.name);
    }
}
;
 //# sourceMappingURL=attachResolvedLanguages.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/languages/resolveLanguage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveLanguage": (()=>resolveLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$isWorkerContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/utils/isWorkerContext.js [app-rsc] (ecmascript)");
;
;
//#region src/highlighter/languages/resolveLanguage.ts
async function resolveLanguage(lang) {
    if (typeof __DIFFS_WORKER__ !== "undefined" ? __DIFFS_WORKER__ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$isWorkerContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWorkerContext"])()) throw new Error(`resolveLanguage("${lang}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);
    const pending = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvingLanguages"].get(lang);
    if (pending != null) return pending;
    const resolver = (async ()=>{
        let loader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegisteredCustomLanguages"].get(lang);
        if (loader == null) {
            const { bundledLanguages } = await __turbopack_context__.r("[externals]/shiki/langs [external] (shiki/langs, esm_import, async loader)")(__turbopack_context__.i);
            if (Object.prototype.hasOwnProperty.call(bundledLanguages, lang)) loader = bundledLanguages[lang];
        }
        if (loader == null) throw new Error(`resolveLanguage: "${lang}" not found in bundled or custom languages`);
        const { default: data } = await loader();
        const resolvedLang = {
            name: lang,
            data
        };
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvedLanguages"].has(lang)) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvedLanguages"].set(lang, resolvedLang);
        return resolvedLang;
    })();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvingLanguages"].set(lang, resolver);
    try {
        return await resolver;
    } finally{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvingLanguages"].get(lang) === resolver) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvingLanguages"].delete(lang);
    }
}
;
 //# sourceMappingURL=resolveLanguage.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/languages/getResolvedOrResolveLanguage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getResolvedOrResolveLanguage": (()=>getResolvedOrResolveLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/resolveLanguage.js [app-rsc] (ecmascript)");
;
;
//#region src/highlighter/languages/getResolvedOrResolveLanguage.ts
function getResolvedOrResolveLanguage(language) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolvedLanguages"].get(language) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLanguage"])(language);
}
;
 //# sourceMappingURL=getResolvedOrResolveLanguage.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/languages/resolveLanguages.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveLanguages": (()=>resolveLanguages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/resolveLanguage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$getResolvedOrResolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/getResolvedOrResolveLanguage.js [app-rsc] (ecmascript)");
;
;
//#region src/highlighter/languages/resolveLanguages.ts
async function resolveLanguages(languages) {
    const resolvedLanguages = [];
    const languagesToResolve = [];
    for (const language of languages){
        if (language === "text" || language === "ansi") continue;
        const maybeResolvedLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$getResolvedOrResolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getResolvedOrResolveLanguage"])(language) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLanguage"])(language);
        if ("then" in maybeResolvedLanguage) languagesToResolve.push(maybeResolvedLanguage);
        else resolvedLanguages.push(maybeResolvedLanguage);
    }
    if (languagesToResolve.length > 0) await Promise.all(languagesToResolve).then((_resolvedLanguages)=>{
        for (const resolvedLanguage of _resolvedLanguages){
            if (resolvedLanguage == null) throw new Error("resolvedLanguages: unable to resolve language");
            resolvedLanguages.push(resolvedLanguage);
        }
    });
    return resolvedLanguages;
}
;
 //# sourceMappingURL=resolveLanguages.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/utils/tokensToHtml.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "tokensToHtml": (()=>tokensToHtml)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$hastToHtml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/utils/hastToHtml.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$renderTokenLines$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/utils/renderTokenLines.js [app-rsc] (ecmascript)");
;
;
//#region src/utils/tokensToHtml.ts
/**
* Renders existing tokens as a pre/code HTML block without highlighting again.
* Pass the original source to resolve numeric decoration offsets.
*/ function tokensToHtml(source, result, options, cacheHtmlStyles = false) {
    const lineOffsets = [
        0
    ];
    if (options.decorations?.some((item)=>typeof item.start === "number" || typeof item.end === "number") === true) for(let index = source.indexOf("\n"); index !== -1; index = source.indexOf("\n", index + 1))lineOffsets.push(index + 1);
    const code = {
        type: "element",
        tagName: "code",
        properties: {},
        children: []
    };
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$renderTokenLines$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderTokenLines"])(result.tokens, {
        decorations: options.decorations,
        mergeWhitespaces: options.mergeWhitespaces,
        lineOffsets,
        cacheHtmlStyles
    });
    for(let i = 0; i < lines.length; i++){
        if (i > 0) code.children.push({
            type: "text",
            value: "\n"
        });
        code.children.push(lines[i]);
    }
    const root = {
        type: "root",
        children: [
            {
                type: "element",
                tagName: "pre",
                properties: {
                    class: "diffs",
                    style: result.rootStyle === false ? void 0 : result.rootStyle ?? [
                        result.fg != null ? `color:${result.fg}` : "",
                        result.bg != null ? `background-color:${result.bg}` : ""
                    ].filter(Boolean).join(";"),
                    tabIndex: 0
                },
                children: [
                    code
                ]
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$hastToHtml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hastToHtml"])(root);
}
;
 //# sourceMappingURL=tokensToHtml.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/DiffsHighlighter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DiffsHighlighter": (()=>DiffsHighlighter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$highlighterType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/highlighterType.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$tokensToHtml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/utils/tokensToHtml.js [app-rsc] (ecmascript)");
;
;
//#region src/highlighter/DiffsHighlighter.ts
/**
* A different highlighter type cannot load in this thread until every
* instance of the current type is disposed.
*/ var DiffsHighlighter = class {
    name;
    themeResolver;
    disposed = false;
    constructor(name, themeResolver){
        this.name = name;
        this.themeResolver = themeResolver;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$highlighterType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["acquireHighlighterType"])(name);
    }
    codeToHtml(code, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$tokensToHtml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tokensToHtml"])(code, this.codeToTokens(code, options), options, this.name === "highlights");
    }
    get isDisposed() {
        return this.disposed;
    }
    /**
	* Disposed instances cannot be reused.
	*/ dispose() {
        if (this.disposed) return;
        this.disposed = true;
        this.releaseResources();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$highlighterType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["releaseHighlighterType"])();
    }
    assertNotDisposed() {
        if (this.disposed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$highlighterType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HighlighterDisposedError"]();
    }
};
;
 //# sourceMappingURL=DiffsHighlighter.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/editor/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/editor/utils.ts
__turbopack_context__.s({
    "addEventListener": (()=>addEventListener),
    "clampDomOffset": (()=>clampDomOffset),
    "createSegmenter": (()=>createSegmenter),
    "debounce": (()=>debounce),
    "endsWithLineBreak": (()=>endsWithLineBreak),
    "extend": (()=>extend),
    "getGraphemeSegmenter": (()=>getGraphemeSegmenter),
    "getLineNumberAttr": (()=>getLineNumberAttr),
    "h": (()=>h),
    "isPromise": (()=>isPromise),
    "lookupScrollContainer": (()=>lookupScrollContainer),
    "round": (()=>round)
});
function h(tagName, props, parent) {
    const { style, dataset, children, ...attrs } = props ?? {};
    const el = document.createElement(tagName);
    Object.assign(el, attrs);
    if (style !== void 0) {
        if (typeof style === "string") el.style.cssText = style;
        else Object.assign(el.style, style);
    }
    if (dataset !== void 0) {
        if (typeof dataset === "string") el.dataset[dataset] = "";
        else if (Array.isArray(dataset)) dataset.forEach((key)=>{
            el.dataset[key] = "";
        });
        else Object.assign(el.dataset, dataset);
    }
    if (children !== void 0) el.replaceChildren(...children);
    if (parent !== void 0) parent.appendChild(el);
    return el;
}
function isPromise(value) {
    return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
}
function addEventListener(el, event, listener, options) {
    el.addEventListener(event, listener, options);
    return ()=>el.removeEventListener(event, listener, options);
}
function getLineNumberAttr(el, key = "line") {
    const value = el.dataset[key];
    if (value === void 0) return;
    const lineNumber = parseInt(value, 10);
    if (Number.isNaN(lineNumber)) return;
    return lineNumber;
}
function clampDomOffset(node, offset) {
    if (node.nodeType === 3) {
        const length = node.textContent?.length ?? 0;
        return Math.max(0, Math.min(offset, length));
    }
    if (node.nodeType === 1) return Math.max(0, Math.min(offset, node.childNodes.length));
    return 0;
}
function extend(obj, attrs) {
    return Object.assign(obj, attrs);
}
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(this, args), wait);
    };
}
function round(value, precision = 1e3) {
    return Math.round(value * precision) / precision;
}
function endsWithLineBreak(text) {
    return text.endsWith("\n") || text.endsWith("\r");
}
function createSegmenter(options) {
    if (typeof Intl === "undefined" || typeof Intl.Segmenter !== "function") return;
    return new Intl.Segmenter(void 0, options);
}
let graphemeSegmenter;
let graphemeSegmenterInit = false;
function getGraphemeSegmenter() {
    if (!graphemeSegmenterInit) {
        graphemeSegmenter = createSegmenter({
            granularity: "grapheme"
        });
        graphemeSegmenterInit = true;
    }
    return graphemeSegmenter;
}
function lookupScrollContainer(element) {
    const ownerDocument = element.ownerDocument;
    let parentElement = element.parentElement;
    while(parentElement != null && parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement){
        const overflowY = parentElement.ownerDocument.defaultView?.getComputedStyle(parentElement).overflowY;
        if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") return parentElement;
        parentElement = parentElement.parentElement;
    }
    return ownerDocument;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/shiki-editor.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ShikiEditorTokenizer": (()=>ShikiEditorTokenizer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$editor$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/editor/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/shiki/textmate [external] (shiki/textmate, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
//#region src/highlighter/shiki-editor.ts
const TOKENIZE_TIME_LIMIT = 0;
let nextTokenizerId = 0;
/** TextMate state caching and background work for a single editable document. */ var ShikiEditorTokenizer = class {
    backend;
    #highlighter;
    #grammar;
    #themeName;
    #colorMap;
    #textDocument;
    #tokenizeMaxLineLength;
    #onDeferTokenize;
    #matchBrackets;
    #debug;
    #isCleanedUp = false;
    #stateStack = [
        __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"]
    ];
    #comparisonStateStack = [];
    #comparisonStateStackStart = 0;
    #comparisonLineChanges = [];
    #lastLine = -1;
    #isStopped = true;
    #isPaused = false;
    #backgroundJobId = 0;
    #tokenizerId = ++nextTokenizerId;
    #backgroundPrebuildEndLine = -1;
    #pendingPrebuildEndLine = -1;
    #backgroundChangedLineRanges;
    #backgroundChangedRangeIndex = 0;
    #bracketIgnoredRanges = [];
    #isMessageListenerAttached = false;
    #prebuildStateStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$editor$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["debounce"])(async (renderRange)=>{
        if (this.#isCleanedUp) return;
        const { startingLine = 0, totalLines = Infinity } = renderRange ?? {};
        const endLine = Math.min(totalLines === Infinity ? Infinity : startingLine + totalLines, this.#textDocument.lineCount);
        if (this.#grammar == null && !isGrammarlessLanguage(this.#textDocument.languageId)) {
            await this.backend?.loadLanguages([
                this.#textDocument.languageId
            ]);
            if (this.#isCleanedUp) return;
            this.#grammar = this.#highlighter.getLanguage(this.#textDocument.languageId);
        }
        this.#ensureActiveTheme();
        this.#scheduleStatePrebuild(endLine);
    }, 500);
    #onMessage = ({ data })=>{
        if (typeof data !== "object" || data === null) return;
        const { type, tokenizerId, jobId } = data;
        if (type === "tokenize" && tokenizerId === this.#tokenizerId && typeof jobId === "number" && jobId === this.#backgroundJobId) {
            if (this.#backgroundPrebuildEndLine >= 0) this.#backgroundPrebuild(jobId);
            else this.#backgroundTokenize(jobId);
        }
    };
    getStringCommentRegexpRangesInLine(lineIndex) {
        if (!this.#matchBrackets || lineIndex < 0 || lineIndex >= this.#textDocument.lineCount) return null;
        this.#ensureGrammar();
        if (this.#grammar == null) return null;
        if (this.#bracketIgnoredRanges[lineIndex] === void 0) {
            this.#buildStateStack(lineIndex);
            const state = this.#stateStack[lineIndex] ?? __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"];
            const result = this.#tokenizeLineAt(lineIndex, state);
            this.#stateStack[lineIndex + 1] = result.state;
        }
        return this.#bracketIgnoredRanges[lineIndex] ?? null;
    }
    constructor(highlighter, options, backend){
        this.backend = backend;
        this.#highlighter = highlighter;
        this.#textDocument = options.textDocument;
        this.#themeName = options.theme;
        this.#colorMap = [];
        this.#tokenizeMaxLineLength = options.tokenizeMaxLineLength ?? 1e3;
        this.#onDeferTokenize = options.onDeferTokenize;
        this.#matchBrackets = options.matchBrackets !== false;
        this.#debug = options.__debug ?? false;
        this.#ensureGrammar();
        this.#ensureActiveTheme();
    }
    setTheme(themeName) {
        if (this.#themeName === themeName) return;
        this.#themeName = themeName;
        this.#ensureActiveTheme();
        this.stopBackgroundTokenize();
        this.#stateStack = [
            __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"]
        ];
        this.#comparisonStateStack = [];
        this.#comparisonStateStackStart = 0;
        this.#comparisonLineChanges = [];
        if (this.#grammar != null && this.#textDocument.lineCount > 0) this.#scheduleBackgroundTokenize(0);
    }
    #ensureActiveTheme() {
        if (this.#themeName === "") return;
        this.backend?.getTheme(this.#themeName);
        const { colorMap } = this.#highlighter.setTheme(this.#themeName);
        this.#colorMap = colorMap;
    }
    dispose() {
        this.#isCleanedUp = true;
        this.stopBackgroundTokenize();
        this.#detachMessageListener();
    }
    tokenize(change, renderRange, hostRealignsRows = false) {
        this.#ensureGrammar();
        this.#ensureActiveTheme();
        if (this.#grammar == null && !isGrammarlessLanguage(this.#textDocument.languageId)) throw new Error(`Grammar for language "${this.#textDocument.languageId}" not loaded`);
        const { lineCount } = this.#textDocument;
        const { startingLine = 0, totalLines = Infinity } = renderRange ?? {};
        const renderRangeEndLine = totalLines === Infinity ? lineCount : Math.min(startingLine + totalLines, lineCount);
        const dirtyStart = change.startLine;
        const viewStart = Math.max(startingLine, dirtyStart);
        const crossesRenderRangeEnd = renderRange != null && totalLines !== Infinity && change.lineDelta > 0 && dirtyStart < renderRangeEndLine && change.endLine >= renderRangeEndLine;
        const canReuseCachedStates = change.lineDelta === 0 && (change.changedLineChanges?.every(([, , lineDelta])=>lineDelta === 0) ?? true);
        if (this.#matchBrackets && !canReuseCachedStates) this.#bracketIgnoredRanges.length = Math.min(this.#bracketIgnoredRanges.length, change.startLine);
        const canReuseShiftedStates = hostRealignsRows && change.lineDelta !== 0 && dirtyStart >= startingLine;
        const canCacheTokenizedStates = canReuseCachedStates || renderRange == null || dirtyStart >= viewStart;
        const changedLineRanges = change.changedLineRanges ?? [
            [
                dirtyStart,
                change.endLine
            ]
        ];
        this.#comparisonStateStack = [];
        this.#comparisonStateStackStart = 0;
        this.#comparisonLineChanges = [];
        let offscreenSyncEnd = -1;
        if (dirtyStart < viewStart) {
            for (const [rangeStart, rangeEnd] of changedLineRanges)if (rangeStart < viewStart) offscreenSyncEnd = Math.max(offscreenSyncEnd, Math.min(rangeEnd, viewStart - 1));
        }
        const shouldFlushOffscreenLines = offscreenSyncEnd >= dirtyStart && (canReuseCachedStates || change.lineDelta < 0);
        if (canReuseCachedStates) this.#buildStateStack(dirtyStart);
        else {
            this.#shiftComparisonStateStack(change);
            if (renderRange == null || dirtyStart >= viewStart) this.#buildStateStack(viewStart);
        }
        let changedRangeIndex = 0;
        let currentChangedRangeEnd = changedLineRanges[changedRangeIndex][1];
        let backgroundStartLine;
        let backgroundChangedRangeIndex = 0;
        let line = canReuseCachedStates ? changedLineRanges[changedRangeIndex][0] : viewStart;
        let settled = false;
        const dirtyLines = /* @__PURE__ */ new Map();
        const offscreenDirtyLines = shouldFlushOffscreenLines ? /* @__PURE__ */ new Map() : void 0;
        if (offscreenDirtyLines != null && !canReuseCachedStates) {
            const offscreenEnd = Math.min(offscreenSyncEnd + 1, viewStart, renderRangeEndLine);
            if (offscreenEnd > dirtyStart) {
                this.#buildStateStack(offscreenEnd);
                let offscreenLine = dirtyStart;
                let offscreenState = this.#stateStack[offscreenLine] ?? __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"];
                for(; offscreenLine < offscreenEnd; offscreenLine++){
                    const resolved = this.#tokenizeLineAt(offscreenLine, offscreenState);
                    offscreenState = resolved.state;
                    offscreenDirtyLines.set(offscreenLine, resolved.resolvedTokens);
                }
                this.#stateStack[offscreenEnd] = offscreenState;
            }
        }
        let state = this.#stateStack[line] ?? __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"];
        for(; line < renderRangeEndLine;){
            const previousNextState = canReuseCachedStates ? this.#stateStack[line + 1] : canReuseShiftedStates ? this.#getPreviousEndState(line + 1) : void 0;
            if (canCacheTokenizedStates) this.#stateStack[line] = state;
            const { resolvedTokens, state: nextState } = this.#tokenizeLineAt(line, state);
            state = nextState;
            if (line >= viewStart) dirtyLines.set(line, resolvedTokens);
            else offscreenDirtyLines?.set(line, resolvedTokens);
            if (canCacheTokenizedStates) this.#stateStack[line + 1] = state;
            settled = line >= currentChangedRangeEnd && (canReuseCachedStates || canReuseShiftedStates) && previousNextState != null && state.equals(previousNextState);
            if (settled) {
                changedRangeIndex++;
                const nextRange = changedLineRanges[changedRangeIndex];
                if (nextRange == null) break;
                if (nextRange[0] >= renderRangeEndLine) {
                    backgroundStartLine = nextRange[0];
                    backgroundChangedRangeIndex = changedRangeIndex;
                    break;
                }
                let nextState = this.#stateStack[nextRange[0]];
                if (canReuseShiftedStates) for(let stateLine = line + 2; stateLine <= nextRange[0]; stateLine++){
                    nextState = this.#getPreviousEndState(stateLine);
                    if (nextState == null) break;
                    this.#stateStack[stateLine] = nextState;
                }
                if (nextState == null) {
                    currentChangedRangeEnd = nextRange[1];
                    line++;
                } else {
                    line = nextRange[0];
                    state = nextState;
                    currentChangedRangeEnd = nextRange[1];
                }
                settled = false;
                continue;
            }
            line++;
        }
        if (canCacheTokenizedStates) {
            if (line < renderRangeEndLine) this.#stateStack[line + 1] = state;
            else this.#stateStack[line] = state;
        }
        if (settled && canReuseShiftedStates && backgroundStartLine == null) {
            for(let stateLine = line + 2; stateLine <= lineCount; stateLine++){
                const previousState = this.#getPreviousEndState(stateLine);
                if (previousState == null) break;
                this.#stateStack[stateLine] = previousState;
            }
            this.#comparisonStateStack = [];
            this.#comparisonStateStackStart = 0;
            this.#comparisonLineChanges = [];
        }
        if (offscreenDirtyLines != null && offscreenDirtyLines.size > 0) this.#onDeferTokenize(offscreenDirtyLines);
        if (backgroundStartLine != null) {
            if (this.#matchBrackets && canReuseCachedStates) this.#bracketIgnoredRanges.length = Math.min(this.#bracketIgnoredRanges.length, backgroundStartLine);
            this.#scheduleBackgroundTokenize(backgroundStartLine, changedLineRanges, backgroundChangedRangeIndex);
        } else if (!settled && line < lineCount) {
            const backgroundLine = crossesRenderRangeEnd && dirtyStart >= viewStart ? renderRangeEndLine : dirtyStart < viewStart && !canReuseCachedStates ? dirtyStart : line;
            if (this.#matchBrackets && canReuseCachedStates) this.#bracketIgnoredRanges.length = Math.min(this.#bracketIgnoredRanges.length, backgroundLine);
            this.#scheduleBackgroundTokenize(backgroundLine, changedLineRanges, changedRangeIndex);
        }
        return dirtyLines;
    }
    prebuildStateStack(renderRange) {
        this.#ensureGrammar();
        this.#prebuildStateStack(renderRange);
    }
    stopBackgroundTokenize() {
        this.#pendingPrebuildEndLine = -1;
        if (this.#isStopped) return;
        this.#isStopped = true;
        this.#isPaused = false;
        this.#lastLine = -1;
        this.#backgroundPrebuildEndLine = -1;
        this.#backgroundChangedLineRanges = void 0;
        this.#backgroundChangedRangeIndex = 0;
        this.#comparisonStateStack = [];
        this.#comparisonStateStackStart = 0;
        this.#comparisonLineChanges = [];
        this.#detachMessageListener();
    }
    pauseBackgroundTokenize() {
        if (this.#isStopped || this.#isPaused) return;
        if (this.#debug) console.log("[diffs/editor] background tokenization paused", {
            jobId: this.#backgroundJobId
        });
        this.#isPaused = true;
    }
    resumeBackgroundTokenize() {
        if (this.#isStopped || !this.#isPaused || this.#grammar == null || this.#lastLine < 0) return;
        if (this.#debug) console.log("[diffs/editor] background tokenization resumed", {
            jobId: this.#backgroundJobId
        });
        this.#isPaused = false;
        this.#postTokenizeMessage(this.#backgroundJobId);
    }
    #ensureGrammar() {
        if (this.#grammar == null && !isGrammarlessLanguage(this.#textDocument.languageId) && this.#highlighter.getLoadedLanguages().includes(this.#textDocument.languageId)) this.#grammar = this.#highlighter.getLanguage(this.#textDocument.languageId);
    }
    #attachMessageListener() {
        if (this.#isMessageListenerAttached) return;
        globalThis.addEventListener("message", this.#onMessage);
        this.#isMessageListenerAttached = true;
    }
    #detachMessageListener() {
        if (!this.#isMessageListenerAttached) return;
        globalThis.removeEventListener("message", this.#onMessage);
        this.#isMessageListenerAttached = false;
    }
    #postTokenizeMessage(jobId) {
        globalThis.postMessage({
            type: "tokenize",
            tokenizerId: this.#tokenizerId,
            jobId
        });
    }
    #scheduleBackgroundTokenize(startLine, changedLineRanges, changedRangeIndex = 0) {
        if (isGrammarlessLanguage(this.#textDocument.languageId)) return;
        const jobId = ++this.#backgroundJobId;
        if (this.#debug) console.log("[diffs/editor] background tokenization scheduled", {
            jobId,
            startLine,
            changedLineRanges,
            changedRangeIndex
        });
        this.#isStopped = false;
        this.#isPaused = false;
        this.#lastLine = startLine;
        if (this.#backgroundPrebuildEndLine >= 0) this.#pendingPrebuildEndLine = Math.max(this.#pendingPrebuildEndLine, this.#backgroundPrebuildEndLine);
        this.#backgroundPrebuildEndLine = -1;
        this.#backgroundChangedLineRanges = changedLineRanges;
        this.#backgroundChangedRangeIndex = changedRangeIndex;
        this.#attachMessageListener();
        this.#postTokenizeMessage(jobId);
    }
    #scheduleStatePrebuild(endLine) {
        if (this.#grammar == null || this.#stateStack.length > endLine) return;
        if (!this.#isStopped) {
            if (this.#backgroundPrebuildEndLine >= 0) this.#backgroundPrebuildEndLine = Math.max(this.#backgroundPrebuildEndLine, endLine);
            else this.#pendingPrebuildEndLine = Math.max(this.#pendingPrebuildEndLine, endLine);
            return;
        }
        const jobId = ++this.#backgroundJobId;
        this.#isStopped = false;
        this.#isPaused = false;
        this.#lastLine = this.#stateStack.length - 1;
        this.#backgroundPrebuildEndLine = endLine;
        this.#pendingPrebuildEndLine = -1;
        this.#backgroundChangedLineRanges = void 0;
        this.#backgroundChangedRangeIndex = 0;
        this.#attachMessageListener();
        this.#postTokenizeMessage(jobId);
    }
    #tokenizeLineAt(line, state) {
        const lineText = this.#textDocument.getLineText(line);
        if (lineText.length >= this.#tokenizeMaxLineLength) {
            console.warn(`[diffs] Line(${line}) too long to tokenize: ${lineText.length}`);
            this.#cacheBracketIgnoredRanges(line, null);
            return {
                resolvedTokens: [
                    [
                        0,
                        "",
                        lineText
                    ]
                ],
                state
            };
        }
        if (this.#grammar == null || lineText === "" || lineText.trim() === "") {
            this.#cacheBracketIgnoredRanges(line, null);
            return {
                resolvedTokens: [
                    [
                        0,
                        "",
                        lineText
                    ]
                ],
                state
            };
        }
        const result = tokenizeLine(this.#grammar, this.#colorMap, lineText, state, TOKENIZE_TIME_LIMIT, this.#matchBrackets);
        this.#cacheBracketIgnoredRanges(line, result.bracketIgnoredRanges);
        return {
            resolvedTokens: result.resolvedTokens,
            state: result.ruleStack
        };
    }
    #cacheBracketIgnoredRanges(line, ranges) {
        if (this.#matchBrackets) this.#bracketIgnoredRanges[line] = ranges;
    }
    #shiftComparisonStateStack(change) {
        const lineChanges = change.changedLineChanges ?? [
            [
                change.startLine,
                change.endLine,
                change.lineDelta
            ]
        ];
        const comparisonStart = change.startLine + 1;
        if (comparisonStart <= this.#stateStack.length - comparisonStart) {
            this.#comparisonStateStack = this.#stateStack;
            this.#comparisonStateStackStart = 0;
            this.#stateStack = this.#stateStack.slice(0, comparisonStart);
        } else {
            this.#comparisonStateStackStart = comparisonStart;
            this.#comparisonStateStack = this.#stateStack.slice(comparisonStart);
            this.#stateStack.length = Math.min(this.#stateStack.length, comparisonStart);
        }
        this.#comparisonLineChanges = lineChanges;
    }
    #getPreviousEndState(line) {
        let previousLine = line;
        for(let index = this.#comparisonLineChanges.length - 1; index >= 0; index--){
            const [startLine, endLine, lineDelta] = this.#comparisonLineChanges[index];
            if (lineDelta === 0) continue;
            if (previousLine > endLine) previousLine -= lineDelta;
            else if (previousLine > startLine) return this.#stateStack[line];
        }
        return this.#comparisonStateStack[previousLine - this.#comparisonStateStackStart] ?? this.#stateStack[line];
    }
    #buildStateStack(endAt, timeBudget) {
        const boundedEndAt = Math.min(Math.max(0, endAt), this.#textDocument.lineCount);
        if (this.#stateStack.length > boundedEndAt || this.#grammar == null) return true;
        const startedAt = timeBudget == null ? 0 : performance.now();
        let line = this.#stateStack.length - 1;
        let state = this.#stateStack[line] ?? __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"];
        while(line < boundedEndAt){
            this.#stateStack[line] = state;
            const lineText = this.#textDocument.getLineText(line);
            if (lineText.length < this.#tokenizeMaxLineLength && lineText !== "" && lineText.trim() !== "") {
                const result = tokenizeLine(this.#grammar, this.#colorMap, lineText, state, TOKENIZE_TIME_LIMIT, this.#matchBrackets, false);
                this.#cacheBracketIgnoredRanges(line, result.bracketIgnoredRanges);
                state = result.ruleStack;
            } else this.#cacheBracketIgnoredRanges(line, null);
            line++;
            this.#stateStack[line] = state;
            if (timeBudget != null && performance.now() - startedAt > timeBudget) break;
        }
        return line >= boundedEndAt;
    }
    #backgroundPrebuild(jobId) {
        if (this.#isStopped || this.#isPaused || this.#grammar == null || jobId !== this.#backgroundJobId) return;
        this.#ensureActiveTheme();
        const complete = this.#buildStateStack(this.#backgroundPrebuildEndLine, 1);
        if (this.#isStopped || this.#isPaused || jobId !== this.#backgroundJobId) return;
        if (complete) {
            this.stopBackgroundTokenize();
            return;
        }
        this.#lastLine = this.#stateStack.length - 1;
        this.#postTokenizeMessage(jobId);
    }
    #backgroundTokenize(jobId) {
        if (this.#isStopped || this.#isPaused || this.#grammar == null || jobId !== this.#backgroundJobId) return;
        this.#ensureActiveTheme();
        const t = performance.now();
        const lines = /* @__PURE__ */ new Map();
        const totalLines = this.#textDocument.lineCount;
        const changedLineRanges = this.#backgroundChangedLineRanges;
        let line = this.#lastLine;
        let state = this.#stateStack[line] ?? __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["INITIAL"];
        let settled = false;
        let changedRangeIndex = this.#backgroundChangedRangeIndex;
        let currentChangedRangeEnd = changedLineRanges?.[changedRangeIndex]?.[1];
        for(; line < totalLines;){
            this.#stateStack[line] = state;
            const previousNextState = currentChangedRangeEnd != null ? this.#getPreviousEndState(line + 1) : void 0;
            const result = this.#tokenizeLineAt(line, state);
            lines.set(line, result.resolvedTokens);
            state = result.state;
            this.#stateStack[line + 1] = state;
            settled = currentChangedRangeEnd != null && line >= currentChangedRangeEnd && previousNextState != null && state.equals(previousNextState);
            line++;
            if (settled) {
                changedRangeIndex++;
                const nextRange = changedLineRanges?.[changedRangeIndex];
                if (nextRange == null) break;
                currentChangedRangeEnd = nextRange[1];
                if (this.#stateStack[nextRange[0]] == null) settled = false;
                else {
                    line = nextRange[0];
                    state = this.#stateStack[line] ?? state;
                    settled = false;
                    continue;
                }
            }
            if (performance.now() - t > 1) break;
        }
        this.#onDeferTokenize(lines);
        if (this.#isStopped || this.#isPaused || jobId !== this.#backgroundJobId) return;
        if (settled || line >= totalLines) {
            const pendingPrebuildEndLine = this.#pendingPrebuildEndLine;
            this.stopBackgroundTokenize();
            if (pendingPrebuildEndLine >= 0) this.#scheduleStatePrebuild(pendingPrebuildEndLine);
            return;
        }
        this.#lastLine = line;
        this.#backgroundChangedRangeIndex = changedRangeIndex;
        this.#postTokenizeMessage(jobId);
    }
};
function tokenizeLine(grammar, colorMap, lineText, stateStack, timeLimit, collectBracketIgnoredRanges = true, resolveTokens = true) {
    const result = grammar.tokenizeLine2(lineText, stateStack, timeLimit);
    if (result.stoppedEarly) console.warn(`[diffs] Time limit reached when tokenizing line: ${lineText.substring(0, 100)}`);
    const rawTokens = result.tokens;
    const tokensLength = rawTokens.length / 2;
    const resolvedTokens = [];
    const bracketIgnoredRanges = [];
    if (!resolveTokens && !collectBracketIgnoredRanges) return {
        ruleStack: result.ruleStack,
        resolvedTokens,
        bracketIgnoredRanges
    };
    for(let j = 0; j < tokensLength; j++){
        const offset = rawTokens[2 * j];
        const nextOffset = j + 1 < tokensLength ? rawTokens[2 * j + 2] : lineText.length;
        if (offset === nextOffset) continue;
        const metadata = rawTokens[2 * j + 1];
        if (resolveTokens) {
            const fg = __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["EncodedTokenMetadata"].getForeground(metadata);
            resolvedTokens.push([
                offset,
                colorMap[fg],
                lineText.slice(offset, nextOffset)
            ]);
        }
        if (collectBracketIgnoredRanges && __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$textmate__$5b$external$5d$__$28$shiki$2f$textmate$2c$__esm_import$29$__["EncodedTokenMetadata"].getTokenType(metadata) > 0) bracketIgnoredRanges.push([
            offset,
            nextOffset
        ]);
    }
    return {
        ruleStack: result.ruleStack,
        resolvedTokens,
        bracketIgnoredRanges
    };
}
function isGrammarlessLanguage(languageId) {
    return languageId === "text" || languageId === "ansi";
}
;
 //# sourceMappingURL=shiki-editor.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/stream-tokenizer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/highlighter/stream-tokenizer.ts
/**
* The final line stays provisional until a line break or stream close.
* A trailing CR waits for the next chunk, which may complete a CRLF pair.
* Token offsets are absolute UTF-16 positions in the stream.
*/ __turbopack_context__.s({
    "BaseStreamTokenizer": (()=>BaseStreamTokenizer)
});
var BaseStreamTokenizer = class {
    disposed = false;
    /** Stream offset of the provisional line's first character. */ stableOffset = 0;
    unstable = [];
    pendingCarriageReturn = "";
    enqueue(chunk) {
        this.assertActive();
        chunk = this.pendingCarriageReturn + chunk;
        this.pendingCarriageReturn = chunk.endsWith("\r") ? "\r" : "";
        if (this.pendingCarriageReturn !== "") chunk = chunk.slice(0, -1);
        const recall = this.unstable.length;
        const stable = [];
        const { unstable, tailLength } = this.tokenizeChunk(chunk, stable);
        if (this.pendingCarriageReturn !== "") unstable.push({
            content: "\r",
            offset: this.stableOffset + tailLength
        });
        this.unstable = unstable;
        return {
            recall,
            stable,
            unstable
        };
    }
    /** Emit one token per line-break character and move past the line. */ pushLineBreak(stable, lineLength, lineBreak) {
        for(let index = 0; index < lineBreak.length; index++)stable.push({
            content: lineBreak[index],
            offset: this.stableOffset + lineLength + index
        });
        this.stableOffset += lineLength + lineBreak.length;
    }
    close() {
        const stable = this.unstable;
        this.dispose();
        return {
            stable
        };
    }
    clear() {
        this.assertActive();
        this.stableOffset = 0;
        this.unstable = [];
        this.pendingCarriageReturn = "";
        this.resetSource();
    }
    dispose() {
        if (this.disposed) return;
        this.disposed = true;
        this.unstable = [];
        this.releaseSource();
    }
    copyStateTo(clone) {
        clone.stableOffset = this.stableOffset;
        clone.unstable = this.unstable.slice();
        clone.pendingCarriageReturn = this.pendingCarriageReturn;
    }
    assertActive() {
        if (this.disposed) throw new Error("stream tokenizer is disposed");
    }
};
;
 //# sourceMappingURL=stream-tokenizer.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/shiki-stream.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShikiStreamTokenizer": (()=>ShikiStreamTokenizer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$appendItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/utils/appendItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$stream$2d$tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/stream-tokenizer.js [app-rsc] (ecmascript)");
;
;
//#region src/highlighter/shiki-stream.ts
var ShikiStreamTokenizer = class ShikiStreamTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$stream$2d$tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseStreamTokenizer"] {
    highlighter;
    options;
    #tail = "";
    #grammarState;
    constructor(highlighter, options){
        super();
        this.highlighter = highlighter;
        this.options = options;
    }
    tokenizeChunk(chunk, stable) {
        const chunkLines = (this.#tail + chunk).split(/(\r\n|\r|\n)/);
        let unstable = [];
        for(let i = 0; i < chunkLines.length; i += 2){
            const line = chunkLines[i];
            const result = this.highlighter.codeToTokens(line, {
                ...this.options,
                grammarState: this.#grammarState
            });
            const tokens = result.tokens[0].map((token)=>({
                    ...token,
                    offset: token.offset + this.stableOffset
                }));
            if (i + 1 < chunkLines.length) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$utils$2f$appendItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendItems"])(stable, tokens);
                this.pushLineBreak(stable, line.length, chunkLines[i + 1]);
                this.#grammarState = result.grammarState;
            } else {
                unstable = tokens;
                this.#tail = line;
            }
        }
        return {
            unstable,
            tailLength: this.#tail.length
        };
    }
    clone() {
        this.assertActive();
        const clone = new ShikiStreamTokenizer(this.highlighter, this.options);
        this.copyStateTo(clone);
        clone.#tail = this.#tail;
        clone.#grammarState = this.#grammarState;
        return clone;
    }
    resetSource() {
        this.#tail = "";
        this.#grammarState = void 0;
    }
    releaseSource() {
        this.resetSource();
    }
};
;
 //# sourceMappingURL=shiki-stream.js.map
}}),
"[project]/node_modules/@pierre/diffs/dist/highlighter/backends/shiki.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ShikiHighlighter": (()=>ShikiHighlighter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$themes$2f$themeResolver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/themes/themeResolver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$attachResolvedLanguages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/attachResolvedLanguages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/languages/resolveLanguages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$DiffsHighlighter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/DiffsHighlighter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$editor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/shiki-editor.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pierre/diffs/dist/highlighter/shiki-stream.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$core__$5b$external$5d$__$28$shiki$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/shiki/core [external] (shiki/core, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$editor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$core__$5b$external$5d$__$28$shiki$2f$core$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$editor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$core__$5b$external$5d$__$28$shiki$2f$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
//#region src/highlighter/backends/shiki.ts
var ShikiHighlighter = class ShikiHighlighter extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$DiffsHighlighter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DiffsHighlighter"] {
    raw;
    loadedThemes = /* @__PURE__ */ new Map();
    attachedLanguages = /* @__PURE__ */ new Set([
        "text",
        "ansi"
    ]);
    static async create(name) {
        const engine = name === "shiki-wasm" ? (await __turbopack_context__.r("[externals]/shiki/engine/oniguruma [external] (shiki/engine/oniguruma, esm_import, async loader)")(__turbopack_context__.i)).createOnigurumaEngine(__turbopack_context__.r("[externals]/shiki/wasm [external] (shiki/wasm, esm_import, async loader)")(__turbopack_context__.i)) : (await __turbopack_context__.r("[externals]/shiki/engine/javascript [external] (shiki/engine/javascript, esm_import, async loader)")(__turbopack_context__.i)).createJavaScriptRegexEngine();
        const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$core__$5b$external$5d$__$28$shiki$2f$core$2c$__esm_import$29$__["createHighlighterCore"])({
            themes: [],
            langs: [],
            engine
        });
        return new ShikiHighlighter(name, raw);
    }
    constructor(name, raw){
        super(name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$themes$2f$themeResolver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDiffsThemeResolver"])(name));
        this.raw = raw;
    }
    getTheme(themeName) {
        this.assertNotDisposed();
        const loaded = this.loadedThemes.get(themeName);
        const theme = this.themeResolver.getResolvedTheme(themeName) ?? loaded;
        if (theme == null) throw new Error(`Theme "${themeName}" has not been resolved`);
        if (loaded !== theme) {
            const textmate = theme.textmate ?? (theme.cssVariables != null ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$shiki$2f$core__$5b$external$5d$__$28$shiki$2f$core$2c$__esm_import$29$__["createCssVariablesTheme"])(theme.cssVariables) : void 0);
            if (textmate == null) throw new Error(`Theme "${themeName}" does not support Shiki`);
            this.raw.setTheme({
                ...textmate,
                name: themeName
            });
            this.loadedThemes.set(themeName, theme);
        }
        return theme;
    }
    codeToTokens(code, options) {
        return this.raw.codeToTokens(code, this.resolveOptions(options));
    }
    createEditorTokenizer(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$editor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShikiEditorTokenizer"](this.raw, options, this);
    }
    createStreamTokenizer(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$shiki$2d$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShikiStreamTokenizer"](this.raw, this.resolveOptions(options));
    }
    async loadLanguages(languages) {
        this.assertNotDisposed();
        const missing = languages.filter((language)=>!this.attachedLanguages.has(language));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$attachResolvedLanguages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attachResolvedLanguages"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$resolveLanguages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveLanguages"])(missing), this);
    }
    hasLoadedLanguages(languages) {
        if (this.disposed) return false;
        let loaded;
        return languages.every((lang)=>{
            if (this.attachedLanguages.has(lang)) return true;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pierre$2f$diffs$2f$dist$2f$highlighter$2f$languages$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegisteredCustomLanguages"].has(lang)) return false;
            loaded ??= this.raw.getLoadedLanguages();
            return loaded.includes(lang);
        });
    }
    attachLanguages(languages) {
        this.assertNotDisposed();
        for (const lang of languages){
            if (this.attachedLanguages.has(lang.name)) continue;
            const grammar = lang.data.find((grammar)=>grammar.name === lang.name || grammar.aliases?.includes(lang.name) === true);
            if (grammar == null) throw new Error(`attachResolvedLanguages: No returned grammar declares "${lang.name}" as its name or an alias.`);
            this.raw.loadLanguageSync(lang.data);
            try {
                this.raw.getLanguage(lang.name);
            } catch  {
                throw new Error(`attachResolvedLanguages: "${grammar.name}" is already loaded without alias "${lang.name}". Load the alias first or give the grammar a unique name.`);
            }
            this.attachedLanguages.add(lang.name);
        }
    }
    releaseResources() {
        this.loadedThemes.clear();
        this.attachedLanguages.clear();
        this.raw.dispose();
    }
    resolveOptions({ theme, themes, ...options }) {
        this.assertNotDisposed();
        if (theme != null) {
            this.getTheme(theme);
            return {
                ...options,
                theme
            };
        }
        if (themes == null) throw new Error("A theme or themes option is required");
        for (const name of Object.values(themes))this.getTheme(name);
        return {
            ...options,
            themes
        };
    }
};
;
 //# sourceMappingURL=shiki.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__cd6ab744._.js.map