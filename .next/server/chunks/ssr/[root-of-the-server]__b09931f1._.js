module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[project]/node_modules/@sanity-labs/groq-wasm/dist/chunk-XXDG7JJH.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/types.ts
__turbopack_context__.s({
    "DEFAULT_WIDTH": (()=>DEFAULT_WIDTH),
    "RULE_ID_MAP": (()=>RULE_ID_MAP),
    "WasmError": (()=>WasmError),
    "extractParams": (()=>extractParams2),
    "format": (()=>format2),
    "initWasm": (()=>initWasm),
    "isValidSyntax": (()=>isValidSyntax),
    "lint": (()=>lint2),
    "mapRuleId": (()=>mapRuleId),
    "mapSeverity": (()=>mapSeverity),
    "validate": (()=>validate2)
});
function mapSeverity(wasmSeverity) {
    switch(wasmSeverity){
        case "high":
            return "error";
        case "medium":
            return "warning";
        case "low":
            return "info";
    }
}
var WasmError = class extends Error {
    constructor(message, code){
        super(message);
        this.code = code;
        this.name = "WasmError";
    }
    code;
};
var RULE_ID_MAP = {
    join_in_filter: "join-in-filter",
    join_to_get_id: "join-to-get-id",
    computed_value_in_filter: "computed-value-in-filter",
    match_on_id: "match-on-id",
    order_on_expr: "order-on-expr",
    deep_pagination: "deep-pagination",
    large_pages: "large-pages",
    non_literal_comparison: "non-literal-comparison",
    count_in_correlated_subquery: "count-in-correlated-subquery",
    very_large_query: "very-large-query",
    extremely_large_query: "extremely-large-query",
    many_joins: "many-joins",
    unlimited_query: "unlimited-query"
};
function mapRuleId(rustRuleId) {
    return RULE_ID_MAP[rustRuleId] ?? rustRuleId.replace(/_/g, "-");
}
// wasm/groq_wasm.js
function extractParams(query) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.extractParams(ptr0, len0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0;
            len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}
function format(query, width) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.format(ptr0, len0, isLikeNone(width) ? Number.MAX_SAFE_INTEGER : width >>> 0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0;
            len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}
function lint(query) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.lint(ptr0, len0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0;
            len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally{
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}
function validate(query) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.validate(ptr0, len0);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally{
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally{
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, void 0);
            table.set(offset + 0, void 0);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        }
    };
    return {
        __proto__: null,
        "./groq_wasm_bg.js": import0
    };
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}
function isLikeNone(x) {
    return x === void 0 || x === null;
}
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === void 0) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr2 = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr2;
    }
    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;
    const mem = getUint8ArrayMemory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 127) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
var cachedTextDecoder = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
});
cachedTextDecoder.decode();
var MAX_SAFARI_DECODE_BYTES = 2146435072;
var numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder("utf-8", {
            ignoreBOM: true,
            fatal: true
        });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
var cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function(arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}
var WASM_VECTOR_LEN = 0;
var wasmModule;
var wasmInstance;
var wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}
function initSync(module) {
    if (wasm !== void 0) return wasm;
    if (module !== void 0) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({ module } = module);
        } else {
            console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
        }
    }
    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}
// src/wasm-loader.ts
function initWasm(bytes) {
    try {
        initSync({
            module: bytes
        });
    } catch (error) {
        throw new WasmError(`Failed to initialize WASM: ${error instanceof Error ? error.message : String(error)}`, "WASM_ERROR");
    }
}
function callLint(query) {
    return lint(query);
}
function callExtractParams(query) {
    return extractParams(query);
}
function callFormat(query, width) {
    return format(query, width ?? null);
}
function callValidate(query) {
    return validate(query);
}
// src/offsets.ts
function createUtf8OffsetMapper(text) {
    let index = 0;
    let bytes = 0;
    let line = 1;
    let column = 1;
    return (byteOffset)=>{
        if (byteOffset < bytes) {
            index = 0;
            bytes = 0;
            line = 1;
            column = 1;
        }
        while(index < text.length && bytes < byteOffset){
            const codePoint = text.codePointAt(index) ?? 0;
            const byteWidth = utf8ByteLength(codePoint);
            if (bytes + byteWidth > byteOffset) {
                break;
            }
            const utf16Width = codePoint > 65535 ? 2 : 1;
            bytes += byteWidth;
            index += utf16Width;
            if (codePoint === 10) {
                line += 1;
                column = 1;
            } else {
                column += utf16Width;
            }
        }
        return {
            index,
            line,
            column
        };
    };
}
function utf8ByteLength(codePoint) {
    if (codePoint <= 127) return 1;
    if (codePoint <= 2047) return 2;
    if (codePoint <= 65535) return 3;
    return 4;
}
// src/params.ts
function extractParams2(query) {
    if (!query.trim()) {
        return [];
    }
    let resultJson;
    try {
        resultJson = callExtractParams(query);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (message.includes("parse") || message.includes("Parse")) {
            throw new WasmError(`Failed to parse query: ${message}`, "PARSE_ERROR");
        }
        throw new WasmError(`Extract params failed: ${message}`, "WASM_ERROR");
    }
    const wasmReferences = JSON.parse(resultJson);
    const toPosition = createUtf8OffsetMapper(query);
    const params = /* @__PURE__ */ new Map();
    for (const reference of wasmReferences){
        const start = toPosition(reference.start);
        const end = toPosition(reference.end);
        let param = params.get(reference.name);
        if (!param) {
            param = {
                name: reference.name,
                references: []
            };
            params.set(reference.name, param);
        }
        param.references.push({
            start: start.index,
            end: end.index,
            line: start.line,
            column: start.column,
            endLine: end.line,
            endColumn: end.column
        });
    }
    return [
        ...params.values()
    ];
}
// src/lint.ts
function lint2(query, config) {
    if (!query.trim()) {
        return [];
    }
    try {
        const resultJson = callLint(query);
        const wasmFindings = JSON.parse(resultJson);
        let findings = wasmFindings;
        if (config?.rules) {
            const rules = config.rules;
            findings = findings.filter((f)=>{
                const enabled = rules[f.ruleId];
                return enabled !== false;
            });
        }
        return findings.map((wf)=>convertFinding(wf, query));
    } catch (error) {
        if (error instanceof WasmError) {
            throw error;
        }
        const message = error instanceof Error ? error.message : String(error);
        if (message.includes("parse") || message.includes("Parse")) {
            throw new WasmError(`Failed to parse query: ${message}`, "PARSE_ERROR");
        }
        throw new WasmError(`Lint failed: ${message}`, "WASM_ERROR");
    }
}
function convertFinding(wf, query) {
    return {
        ruleId: mapRuleId(wf.ruleId),
        message: wf.message,
        severity: mapSeverity(wf.severity),
        span: byteSpanToSourceSpan(wf.start, wf.end, query)
    };
}
function byteSpanToSourceSpan(startByte, endByte, query) {
    const toPosition = createUtf8OffsetMapper(query);
    const start = toPosition(startByte);
    const end = toPosition(endByte);
    return {
        start: {
            line: start.line,
            column: start.column,
            offset: start.index
        },
        end: {
            line: end.line,
            column: end.column,
            offset: end.index
        }
    };
}
// src/format.ts
var DEFAULT_WIDTH = 80;
function format2(query, config) {
    const width = config?.width ?? DEFAULT_WIDTH;
    if (!query.trim()) {
        return query;
    }
    try {
        return callFormat(query, width);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (message.includes("parse") || message.includes("Parse")) {
            throw new WasmError(`Failed to parse query: ${message}`, "PARSE_ERROR");
        }
        throw new WasmError(`Format failed: ${message}`, "WASM_ERROR");
    }
}
function isValidSyntax(query) {
    try {
        format2(query);
        return true;
    } catch (error) {
        if (error instanceof WasmError && error.code === "PARSE_ERROR") {
            return false;
        }
        throw error;
    }
}
// src/validate.ts
function validate2(query) {
    let parsed;
    try {
        parsed = JSON.parse(callValidate(query));
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new WasmError(`Validate failed: ${message}`, "WASM_ERROR");
    }
    const payload = readValidatePayload(parsed);
    switch(payload.ok){
        case true:
            return {
                ok: true
            };
        case false:
            return {
                ok: false,
                error: toValidateError(query, payload)
            };
        default:
            {
                const unexpected = payload;
                throw new WasmError(`Unexpected validate result: ${JSON.stringify(unexpected)}`, "WASM_ERROR");
            }
    }
}
function readValidatePayload(value) {
    if (!isRecord(value)) {
        throw new WasmError("Validate returned an invalid payload", "WASM_ERROR");
    }
    const ok = value["ok"];
    if (ok === true) {
        return {
            ok: true
        };
    }
    const message = value["message"];
    const start = value["start"];
    const end = value["end"];
    if (ok === false && typeof message === "string" && typeof start === "number" && typeof end === "number") {
        return {
            ok: false,
            message,
            start,
            end
        };
    }
    throw new WasmError("Validate returned an invalid payload", "WASM_ERROR");
}
function toValidateError(query, failure) {
    const toPosition = createUtf8OffsetMapper(query);
    const start = toPosition(Math.max(0, failure.start));
    const end = toPosition(Math.max(failure.start, failure.end));
    return {
        message: failure.message,
        start: start.index,
        end: end.index,
        line: start.line,
        column: start.column,
        endLine: end.line,
        endColumn: end.column
    };
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=chunk-XXDG7JJH.js.map
}}),
"[project]/node_modules/@sanity-labs/groq-wasm/wasm/groq_wasm_bg.wasm (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/groq_wasm_bg.cc587965.wasm");}}),
"[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/chunk-XXDG7JJH.js [app-rsc] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/@sanity-labs/groq-wasm/dist/index.js")}`;
    }
};
;
;
;
var wasmPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(new __turbopack_context__.U(__turbopack_context__.r("[project]/node_modules/@sanity-labs/groq-wasm/wasm/groq_wasm_bg.wasm (static in ecmascript)")));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initWasm"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(wasmPath));
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/chunk-XXDG7JJH.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_WIDTH": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_WIDTH"]),
    "RULE_ID_MAP": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RULE_ID_MAP"]),
    "WasmError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WasmError"]),
    "extractParams": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractParams"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"]),
    "isValidSyntax": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidSyntax"]),
    "lint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lint"]),
    "mapRuleId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapRuleId"]),
    "mapSeverity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapSeverity"]),
    "validate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validate"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$chunk$2d$XXDG7JJH$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/chunk-XXDG7JJH.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_WIDTH": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DEFAULT_WIDTH"]),
    "RULE_ID_MAP": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RULE_ID_MAP"]),
    "WasmError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["WasmError"]),
    "extractParams": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["extractParams"]),
    "format": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["format"]),
    "isValidSyntax": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isValidSyntax"]),
    "lint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lint"]),
    "mapRuleId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mapRuleId"]),
    "mapSeverity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mapSeverity"]),
    "validate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["validate"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2d$labs$2f$groq$2d$wasm$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity-labs/groq-wasm/dist/index.js [app-rsc] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b09931f1._.js.map