module.exports = {

"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "n": (()=>themeColor_v0_v2),
    "r": (()=>defaultThemeConfig),
    "t": (()=>getTheme_v2)
});
const defaultThemeConfig = {
    _version: 2,
    avatar: {
        sizes: [
            {
                distance: -4,
                size: 19
            },
            {
                distance: -4,
                size: 25
            },
            {
                distance: -8,
                size: 33
            },
            {
                distance: -12,
                size: 49
            }
        ],
        focusRing: {
            offset: 1,
            width: 1
        }
    },
    button: {
        textWeight: "medium",
        border: {
            width: 1
        },
        focusRing: {
            offset: -1,
            width: 1
        }
    },
    card: {
        border: {
            width: 1
        },
        focusRing: {
            offset: -1,
            width: 1
        },
        shadow: {
            outline: .5
        }
    },
    container: [
        320,
        640,
        960,
        1280,
        1600,
        1920
    ],
    media: [
        360,
        600,
        900,
        1200,
        1800,
        2400
    ],
    layer: {
        dialog: {
            zOffset: 600
        },
        popover: {
            zOffset: 400
        },
        tooltip: {
            zOffset: 200
        }
    },
    radius: [
        0,
        1,
        3,
        6,
        9,
        12,
        21
    ],
    shadow: [
        null,
        {
            umbra: [
                0,
                0,
                0,
                0
            ],
            penumbra: [
                0,
                0,
                0,
                0
            ],
            ambient: [
                0,
                0,
                0,
                0
            ]
        },
        {
            umbra: [
                0,
                3,
                5,
                -2
            ],
            penumbra: [
                0,
                6,
                10,
                0
            ],
            ambient: [
                0,
                1,
                18,
                1
            ]
        },
        {
            umbra: [
                0,
                7,
                8,
                -4
            ],
            penumbra: [
                0,
                12,
                17,
                2
            ],
            ambient: [
                0,
                5,
                22,
                4
            ]
        },
        {
            umbra: [
                0,
                9,
                11,
                -5
            ],
            penumbra: [
                0,
                18,
                28,
                2
            ],
            ambient: [
                0,
                7,
                34,
                6
            ]
        },
        {
            umbra: [
                0,
                11,
                15,
                -7
            ],
            penumbra: [
                0,
                24,
                38,
                3
            ],
            ambient: [
                0,
                9,
                46,
                8
            ]
        }
    ],
    space: [
        0,
        4,
        8,
        12,
        20,
        32,
        52,
        84,
        136,
        220
    ],
    input: {
        border: {
            width: 1
        },
        checkbox: {
            size: 17,
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        radio: {
            size: 17,
            markSize: 9,
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        switch: {
            width: 25,
            height: 17,
            padding: 5,
            transitionDurationMs: 150,
            transitionTimingFunction: "ease-out",
            focusRing: {
                offset: 1,
                width: 1
            }
        },
        select: {
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        text: {
            focusRing: {
                offset: -1,
                width: 1
            }
        }
    },
    style: {
        button: {
            root: {
                transition: "background-color 100ms,border-color 100ms,color 100ms"
            }
        }
    }
}, cache$1 = /* @__PURE__ */ new WeakMap();
/** @internal */ function themeColor_v0_v2(color_v0) {
    let cached_v2 = cache$1.get(color_v0);
    if (cached_v2) return cached_v2;
    let base = stateThemeColor_v0_v2(color_v0, color_v0.card.enabled), color_v2 = {
        _blend: color_v0._blend || (color_v0.dark ? "screen" : "multiply"),
        _dark: color_v0.dark,
        accent: base.accent,
        avatar: base.avatar,
        backdrop: color_v0.base.shadow.ambient,
        badge: base.badge,
        bg: color_v0.base.bg,
        border: color_v0.base.border,
        button: {
            default: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.default),
            ghost: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.ghost),
            bleed: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.bleed)
        },
        code: base.code,
        fg: color_v0.base.fg,
        focusRing: color_v0.base.focusRing,
        icon: base.muted.fg,
        input: {
            default: inputStatesThemeColor_v0_v2(color_v0.input.default),
            invalid: inputStatesThemeColor_v0_v2(color_v0.input.invalid)
        },
        kbd: base.kbd,
        link: base.link,
        muted: {
            ...base.muted,
            bg: color_v0.selectable?.default.enabled.bg2 || color_v0.base.bg
        },
        selectable: stateTonesThemeColor_v0_v2(color_v0, color_v0.selectable || color_v0.muted),
        shadow: color_v0.base.shadow,
        skeleton: {
            from: color_v0.skeleton?.from || color_v0.base.border,
            to: color_v0.skeleton?.to || color_v0.base.border
        },
        syntax: color_v0.syntax
    };
    return cache$1.set(color_v0, color_v2), color_v2;
}
function stateTonesThemeColor_v0_v2(v0, t) {
    return {
        default: {
            enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
            selected: stateThemeColor_v0_v2(v0, t.default.selected),
            disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
        },
        neutral: {
            enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
            selected: stateThemeColor_v0_v2(v0, t.default.selected),
            disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
        },
        primary: {
            enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
            selected: stateThemeColor_v0_v2(v0, t.primary.selected),
            disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
        },
        suggest: {
            enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
            selected: stateThemeColor_v0_v2(v0, t.primary.selected),
            disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
        },
        positive: {
            enabled: stateThemeColor_v0_v2(v0, t.positive.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.positive.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.positive.pressed),
            selected: stateThemeColor_v0_v2(v0, t.positive.selected),
            disabled: stateThemeColor_v0_v2(v0, t.positive.disabled)
        },
        caution: {
            enabled: stateThemeColor_v0_v2(v0, t.caution.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.caution.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.caution.pressed),
            selected: stateThemeColor_v0_v2(v0, t.caution.selected),
            disabled: stateThemeColor_v0_v2(v0, t.caution.disabled)
        },
        critical: {
            enabled: stateThemeColor_v0_v2(v0, t.critical.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.critical.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.critical.pressed),
            selected: stateThemeColor_v0_v2(v0, t.critical.selected),
            disabled: stateThemeColor_v0_v2(v0, t.critical.disabled)
        }
    };
}
function stateThemeColor_v0_v2(v0, state) {
    return {
        ...state,
        avatar: {
            gray: {
                bg: v0.spot.gray,
                fg: v0.base.bg
            },
            blue: {
                bg: v0.spot.blue,
                fg: v0.base.bg
            },
            purple: {
                bg: v0.spot.purple,
                fg: v0.base.bg
            },
            magenta: {
                bg: v0.spot.magenta,
                fg: v0.base.bg
            },
            red: {
                bg: v0.spot.red,
                fg: v0.base.bg
            },
            orange: {
                bg: v0.spot.orange,
                fg: v0.base.bg
            },
            yellow: {
                bg: v0.spot.yellow,
                fg: v0.base.bg
            },
            green: {
                bg: v0.spot.green,
                fg: v0.base.bg
            },
            cyan: {
                bg: v0.spot.cyan,
                fg: v0.base.bg
            }
        },
        badge: {
            default: {
                bg: v0.muted.default.enabled.bg,
                fg: v0.muted.default.enabled.fg,
                dot: v0.muted.default.enabled.muted.fg,
                icon: v0.muted.default.enabled.muted.fg
            },
            neutral: {
                bg: v0.muted.transparent.enabled.bg,
                fg: v0.muted.transparent.enabled.fg,
                dot: v0.muted.transparent.enabled.muted.fg,
                icon: v0.muted.transparent.enabled.muted.fg
            },
            primary: {
                bg: v0.muted.primary.enabled.bg,
                fg: v0.muted.primary.enabled.fg,
                dot: v0.muted.primary.enabled.muted.fg,
                icon: v0.muted.primary.enabled.muted.fg
            },
            suggest: {
                bg: v0.muted.primary.enabled.bg,
                fg: v0.muted.primary.enabled.fg,
                dot: v0.muted.primary.enabled.muted.fg,
                icon: v0.muted.primary.enabled.muted.fg
            },
            positive: {
                bg: v0.muted.positive.enabled.bg,
                fg: v0.muted.positive.enabled.fg,
                dot: v0.muted.positive.enabled.muted.fg,
                icon: v0.muted.positive.enabled.muted.fg
            },
            caution: {
                bg: v0.muted.caution.enabled.bg,
                fg: v0.muted.caution.enabled.fg,
                dot: v0.muted.caution.enabled.muted.fg,
                icon: v0.muted.caution.enabled.muted.fg
            },
            critical: {
                bg: v0.muted.critical.enabled.bg,
                fg: v0.muted.critical.enabled.fg,
                dot: v0.muted.critical.enabled.muted.fg,
                icon: v0.muted.critical.enabled.muted.fg
            }
        },
        kbd: {
            bg: v0.muted.default.enabled.bg,
            fg: v0.muted.default.enabled.fg,
            border: v0.muted.default.enabled.border
        },
        muted: {
            ...v0.muted.default.enabled.muted,
            bg: state.bg2 || state.bg
        },
        skeleton: {
            from: state.skeleton?.from || state.border,
            to: state.skeleton?.to || state.border
        }
    };
}
function inputStatesThemeColor_v0_v2(states) {
    return {
        enabled: inputStateThemeColor_v0_v2(states.enabled),
        disabled: inputStateThemeColor_v0_v2(states.disabled),
        readOnly: inputStateThemeColor_v0_v2(states.readOnly),
        hovered: inputStateThemeColor_v0_v2(states.hovered)
    };
}
function inputStateThemeColor_v0_v2(state) {
    return {
        bg: state.bg,
        border: state.border,
        fg: state.fg,
        muted: {
            bg: state.bg2
        },
        placeholder: state.placeholder
    };
}
const cache = /* @__PURE__ */ new WeakMap();
/** @public */ function getTheme_v2(theme) {
    if (theme.sanity.v2?._resolved) return theme.sanity.v2;
    let cached_v2 = cache.get(theme);
    if (cached_v2) return cached_v2;
    let v2 = {
        _version: 2,
        _resolved: !0,
        avatar: {
            ...defaultThemeConfig.avatar,
            ...theme.sanity.avatar
        },
        button: {
            ...defaultThemeConfig.button,
            ...theme.sanity.button
        },
        card: defaultThemeConfig.card,
        color: themeColor_v0_v2(theme.sanity.color),
        container: theme.sanity.container,
        font: theme.sanity.fonts,
        input: {
            ...defaultThemeConfig.input,
            ...theme.sanity.input,
            checkbox: {
                ...defaultThemeConfig.input.checkbox,
                ...theme.sanity.input.checkbox
            },
            radio: {
                ...defaultThemeConfig.input.radio,
                ...theme.sanity.input.radio
            },
            switch: {
                ...defaultThemeConfig.input.switch,
                ...theme.sanity.input.switch
            }
        },
        layer: theme.sanity.layer ?? defaultThemeConfig.layer,
        media: theme.sanity.media,
        radius: theme.sanity.radius,
        shadow: theme.sanity.shadows,
        space: theme.sanity.space,
        style: theme.sanity.styles
    };
    return cache.set(theme, v2), v2;
}
;
 //# sourceMappingURL=getTheme_v2-y09KqtEb.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>_ruleSet),
    "c": (()=>EMPTY_RECORD),
    "i": (()=>_responsive),
    "l": (()=>POPOVER_MOTION_PROPS),
    "n": (()=>_getArrayProp),
    "o": (()=>rem),
    "r": (()=>_getResponsiveSpace),
    "s": (()=>EMPTY_ARRAY),
    "t": (()=>_fillCSSObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
/**
* @internal
*/ const EMPTY_ARRAY = [], EMPTY_RECORD = {}, POPOVER_MOTION_DURATION = .2, POPOVER_MOTION_PROPS = {
    variants: {
        initial: {
            scale: .97,
            willChange: "transform"
        },
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: POPOVER_MOTION_DURATION / 2
            }
        },
        scaleIn: {
            scale: 1
        },
        scaleOut: {
            scale: .97
        }
    },
    transition: {
        type: "spring",
        visualDuration: POPOVER_MOTION_DURATION,
        bounce: .25
    },
    initial: [
        "hidden",
        "initial"
    ],
    animate: [
        "visible",
        "scaleIn"
    ],
    exit: [
        "hidden",
        "scaleOut"
    ]
}, EMPTY_CSS_OBJECT = {};
/**
* Tags style chunks with the metadata required for v7 function interpolations.
* The `CSSObject[]` return type avoids exposing styled-components types.
*
* @internal
*/ function _ruleSet(...rules) {
    return css(EMPTY_CSS_OBJECT, ...rules);
}
/**
* @internal
*/ function _fillCSSObject(keys, value) {
    return keys.reduce((style, key)=>(style[key] = value, style), {});
}
/**
* @public
*/ function rem(pixelValue) {
    return pixelValue === 0 ? 0 : `${pixelValue / 16}rem`;
}
/**
* Builds a spreadable, v7-compatible rule array for responsive styles.
*
* @internal
*/ function _responsive(media, values, callback) {
    return _ruleSet(...(values?.map(callback) || []).map((statement, mediaIndex)=>mediaIndex === 0 ? statement : {
            [`@media screen and (min-width: ${media[mediaIndex - 1]}px)`]: statement
        }));
}
/**
* @internal
*/ function _getArrayProp(val, defaultVal) {
    return val === void 0 ? defaultVal || EMPTY_ARRAY : Array.isArray(val) ? val : [
        val
    ];
}
/**
* @internal
*/ function _getResponsiveSpace(theme, props, spaceIndexes = EMPTY_ARRAY) {
    if (!Array.isArray(spaceIndexes)) throw Error("the property must be array of numbers");
    if (spaceIndexes.length === 0) return null;
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(theme);
    return _responsive(media, spaceIndexes, (spaceIndex)=>_fillCSSObject(props, rem(space[spaceIndex])));
}
;
 //# sourceMappingURL=helpers-XThPpWje.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
* @internal
*/ __turbopack_context__.s({
    "a": (()=>isHTMLElement),
    "c": (()=>isHTMLTextAreaElement),
    "i": (()=>isHTMLButtonElement),
    "n": (()=>containsOrEqualsElement),
    "o": (()=>isHTMLInputElement),
    "r": (()=>isHTMLAnchorElement),
    "s": (()=>isHTMLSelectElement),
    "t": (()=>_isEnterToClickElement)
});
function _isEnterToClickElement(element) {
    return isHTMLAnchorElement(element) || isHTMLButtonElement(element);
}
/**
* @internal
*/ function isHTMLElement(node) {
    return node instanceof Node && node.nodeType === Node.ELEMENT_NODE;
}
/**
* @internal
*/ function isHTMLAnchorElement(element) {
    return isHTMLElement(element) && element.nodeName === "A";
}
/**
* @internal
*/ function isHTMLInputElement(element) {
    return isHTMLElement(element) && element.nodeName === "INPUT";
}
/**
* @internal
*/ function isHTMLButtonElement(element) {
    return isHTMLElement(element) && element.nodeName === "BUTTON";
}
/**
* @internal
*/ function isHTMLSelectElement(element) {
    return isHTMLElement(element) && element.nodeName === "SELECT";
}
/**
* @internal
*/ function isHTMLTextAreaElement(element) {
    return isHTMLElement(element) && element.nodeName === "TEXTAREA";
}
/**
* @internal
*/ function containsOrEqualsElement(element, node) {
    return element.contains(node) || element === node;
}
;
 //# sourceMappingURL=element-BYgCE_iK.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getScopedTheme-C-sZsyAz.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>defineLazyProperty),
    "i": (()=>is_v2),
    "n": (()=>v2_v0),
    "r": (()=>v0_v2),
    "t": (()=>getScopedTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
;
/**
* Defines a lazy, self-replacing property on `obj`.
*
* On first access the `factory` is called and the getter is replaced with the
* computed plain value — subsequent reads have zero overhead.
*
* The property is enumerable (visible in `Object.keys` / spread) in both states.
*
* @internal
*/ function defineLazyProperty(obj, key, factory) {
    Object.defineProperty(obj, key, {
        get () {
            let value = factory();
            return Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                writable: !1,
                configurable: !1
            }), value;
        },
        enumerable: !0,
        configurable: !0
    });
}
/** @internal */ function is_v2(themeProp) {
    return themeProp._version === 2;
}
/**
* Apply `neutral` and `suggest` if they're not already part of the color object,
* as this was introduced in v2.9, but is not compatible with v2.0.
*
* @param color - The color object to upgrade
* @returns The upgraded color object. Returns as-is if already upgraded.
* @internal
*/ function themeColor_v0_v2_9(color) {
    if ("neutral" in color.badge) return color;
    let colors = color;
    return {
        ...colors,
        badge: {
            ...colors.badge,
            neutral: colors.badge.default,
            suggest: colors.badge.primary
        },
        button: {
            bleed: {
                ...colors.button.bleed,
                neutral: colors.button.bleed.default,
                suggest: colors.button.bleed.primary
            },
            default: {
                ...colors.button.default,
                neutral: colors.button.default.default,
                suggest: colors.button.default.primary
            },
            ghost: {
                ...colors.button.ghost,
                neutral: colors.button.ghost.default,
                suggest: colors.button.ghost.primary
            }
        },
        selectable: {
            ...colors.selectable,
            neutral: colors.selectable.default,
            suggest: colors.selectable.primary
        }
    };
}
const cache$2 = /* @__PURE__ */ new WeakMap();
/** @internal */ function v0_v2(v0) {
    if (v0.v2) return v0.v2;
    let cached_v2 = cache$2.get(v0);
    if (cached_v2) return cached_v2;
    let { avatar, button, color, container, focusRing: _unused_focusRing, fonts: font, input, layer, media, radius, shadows: shadow, space, styles: style } = v0, v2 = {
        _version: 2,
        avatar: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].avatar,
            ...avatar
        },
        button: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].button,
            ...button
        },
        card: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].card,
        color: {
            light: {
                transparent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.transparent),
                default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.default),
                neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.transparent),
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.primary),
                suggest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.primary),
                positive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.positive),
                caution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.caution),
                critical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.light.critical)
            },
            dark: {
                transparent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.transparent),
                default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.default),
                neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.transparent),
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.primary),
                suggest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.primary),
                positive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.positive),
                caution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.caution),
                critical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(color.dark.critical)
            }
        },
        container,
        font,
        input: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].input,
            ...input,
            checkbox: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].input.checkbox,
                ...input.checkbox
            },
            radio: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].input.radio,
                ...input.radio
            },
            switch: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].input.switch,
                ...input.switch
            }
        },
        layer: layer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].layer,
        media,
        radius,
        shadow,
        space,
        style
    };
    return cache$2.set(v0, v2), v2;
}
const cache$1 = /* @__PURE__ */ new WeakMap(), V0_TONES = [
    "transparent",
    "default",
    "primary",
    "positive",
    "caution",
    "critical"
];
function lazyV0Scheme(schemeKey, color) {
    let scheme = {};
    for (let tone of V0_TONES)defineLazyProperty(scheme, tone, ()=>themeColor_v2_v0(color[schemeKey][tone]));
    return scheme;
}
/** @internal */ function v2_v0(v2) {
    let cachedTheme = cache$1.get(v2);
    if (cachedTheme) return cachedTheme;
    let { avatar, button, color, container, font: fonts, input, media, radius, shadow: shadows, space, style: styles } = v2, v0Color = {};
    defineLazyProperty(v0Color, "light", ()=>lazyV0Scheme("light", color)), defineLazyProperty(v0Color, "dark", ()=>lazyV0Scheme("dark", color));
    let theme = {
        _version: 0,
        avatar,
        button,
        container,
        color: v0Color,
        focusRing: input.text.focusRing,
        fonts,
        input,
        media,
        radius,
        shadows,
        space,
        styles,
        v2
    };
    return cache$1.set(v2, theme), theme;
}
function themeColor_v2_v0(color_v2) {
    return {
        base: {
            bg: color_v2.bg,
            fg: color_v2.fg,
            border: color_v2.border,
            focusRing: color_v2.focusRing,
            shadow: color_v2.shadow
        },
        button: color_v2.button,
        card: color_v2.selectable.default,
        dark: color_v2._dark,
        input: {
            default: inputStatesThemeColor_v2_v0(color_v2.input.default),
            invalid: inputStatesThemeColor_v2_v0(color_v2.input.invalid)
        },
        muted: {
            ...color_v2.button.ghost,
            transparent: color_v2.button.ghost.default
        },
        solid: {
            ...color_v2.button.default,
            transparent: color_v2.button.default.default
        },
        selectable: color_v2.selectable,
        spot: {
            gray: color_v2.avatar.gray.bg,
            blue: color_v2.avatar.blue.bg,
            purple: color_v2.avatar.purple.bg,
            magenta: color_v2.avatar.magenta.bg,
            red: color_v2.avatar.red.bg,
            orange: color_v2.avatar.orange.bg,
            yellow: color_v2.avatar.yellow.bg,
            green: color_v2.avatar.green.bg,
            cyan: color_v2.avatar.cyan.bg
        },
        syntax: color_v2.syntax
    };
}
function inputStatesThemeColor_v2_v0(t) {
    return {
        enabled: inputStateThemeColor_v2_v0(t.enabled),
        disabled: inputStateThemeColor_v2_v0(t.disabled),
        readOnly: inputStateThemeColor_v2_v0(t.readOnly),
        hovered: inputStateThemeColor_v2_v0(t.hovered)
    };
}
function inputStateThemeColor_v2_v0(t) {
    return {
        bg: t.bg,
        bg2: t.muted.bg,
        border: t.border,
        fg: t.fg,
        placeholder: t.placeholder
    };
}
const cache = /* @__PURE__ */ new Map();
/** @internal */ function getScopedTheme(themeProp, scheme, tone) {
    let cachedTheme = _getCachedTheme(themeProp, scheme, tone);
    if (cachedTheme) return cachedTheme;
    let v0 = is_v2(themeProp) ? v2_v0(themeProp) : themeProp, v2 = is_v2(themeProp) ? themeProp : v0_v2(themeProp), layer_v0 = v0.layer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].layer, colorScheme_v2 = v2.color[scheme] || v2.color.light, color_v2_9 = themeColor_v0_v2_9(colorScheme_v2[tone] || colorScheme_v2.default), layer_v2 = v2.layer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].layer, { color: _v0Color, ...v0Rest } = v0, sanity = {
        ...v0Rest,
        layer: layer_v0,
        v2: {
            ...v2,
            _resolved: !0,
            color: color_v2_9,
            layer: layer_v2
        }
    };
    defineLazyProperty(sanity, "color", ()=>{
        let colorScheme_v0 = v0.color[scheme] || v0.color.light;
        return colorScheme_v0[tone] || colorScheme_v0.default;
    });
    let theme = {
        sanity
    };
    return _setCachedTheme(themeProp, scheme, tone, theme), theme;
}
function _getCachedTheme(rootTheme, scheme, tone) {
    let schemeCache = cache.get(scheme);
    if (!schemeCache) return;
    let toneCache = schemeCache.get(tone);
    if (toneCache) return toneCache.get(rootTheme);
}
function _setCachedTheme(rootTheme, scheme, tone, theme) {
    cache.has(scheme) || cache.set(scheme, /* @__PURE__ */ new Map());
    let schemeCache = cache.get(scheme);
    schemeCache.has(tone) || schemeCache.set(tone, /* @__PURE__ */ new WeakMap()), schemeCache.get(tone).set(rootTheme, theme);
}
;
 //# sourceMappingURL=getScopedTheme-C-sZsyAz.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_": (()=>useTheme_v2),
    "a": (()=>useMatchMedia),
    "b": (()=>responsivePaddingStyle),
    "c": (()=>ThemeColorProvider),
    "d": (()=>createGlobalScopedContext),
    "f": (()=>globalScope),
    "g": (()=>useTheme$1),
    "h": (()=>_cardColorStyle),
    "i": (()=>usePrefersReducedMotion),
    "l": (()=>useRootTheme),
    "m": (()=>focusRingStyle),
    "n": (()=>LayerProvider),
    "o": (()=>useMediaIndex),
    "p": (()=>focusRingBorderStyle),
    "r": (()=>isRecord),
    "s": (()=>Card),
    "t": (()=>useLayer),
    "u": (()=>ThemeProvider$1),
    "v": (()=>responsiveRadiusStyle),
    "x": (()=>flexItemStyle),
    "y": (()=>Box)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getScopedTheme-C-sZsyAz.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const BASE_STYLE = {
    "&[data-as=\"ul\"],&[data-as=\"ol\"]": {
        listStyle: "none"
    }
}, BOX_SIZING = {
    content: "content-box",
    border: "border-box"
}, BOX_HEIGHT = {
    stretch: "stretch",
    fill: "100%"
};
function boxStyle() {
    return BASE_STYLE;
}
const RULES$3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(responsiveBoxSizingStyle, responsiveBoxHeightStyle, responsiveBoxOverflowStyle, responsiveBoxDisplayStyle);
function responsiveBoxStyle() {
    return RULES$3;
}
function responsiveBoxDisplayStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$display, (display)=>({
            "&:not([hidden])": {
                display
            }
        }));
}
function responsiveBoxSizingStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$sizing, (sizing)=>({
            boxSizing: BOX_SIZING[sizing]
        }));
}
function responsiveBoxHeightStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$height, (height)=>({
            height: BOX_HEIGHT[height]
        }));
}
function responsiveBoxOverflowStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$overflow, (overflow)=>({
            overflow
        }));
}
const RULES$2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])({
    minWidth: 0,
    minHeight: 0
}, responsiveFlexItemStyle);
function flexItemStyle() {
    return RULES$2;
}
function responsiveFlexItemStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return props.$flex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$flex, (flex)=>({
            flex: `${flex}`
        })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
}
const RULES$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(responsiveGridItemRowStyle, responsiveGridItemRowStartStyle, responsiveGridItemRowEndStyle, responsiveGridItemColumnStyle, responsiveGridItemColumnStartStyle, responsiveGridItemColumnEndStyle);
function responsiveGridItemStyle() {
    return RULES$1;
}
const GRID_ITEM_ROW = {
    auto: "auto",
    full: "1 / -1"
}, GRID_ITEM_COLUMN = {
    auto: "auto",
    full: "1 / -1"
};
function responsiveGridItemRowStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$row, (row)=>typeof row == "number" ? {
            gridRow: `span ${row} / span ${row}`
        } : {
            gridRow: GRID_ITEM_ROW[row]
        });
}
function responsiveGridItemRowStartStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$rowStart, (rowStart)=>({
            gridRowStart: `${rowStart}`
        }));
}
function responsiveGridItemRowEndStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$rowEnd, (rowEnd)=>({
            gridRowEnd: `${rowEnd}`
        }));
}
function responsiveGridItemColumnStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$column, (column)=>typeof column == "number" ? {
            gridColumn: `span ${column} / span ${column}`
        } : {
            gridColumn: GRID_ITEM_COLUMN[column]
        });
}
function responsiveGridItemColumnStartStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$columnStart, (columnStart)=>({
            gridColumnStart: `${columnStart}`
        }));
}
function responsiveGridItemColumnEndStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$columnEnd, (columnEnd)=>({
            gridColumnEnd: `${columnEnd}`
        }));
}
function responsiveMarginStyle(props) {
    let { theme } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(...[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "margin"
        ], props.$margin),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginLeft",
            "marginRight"
        ], props.$marginX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginTop",
            "marginBottom"
        ], props.$marginY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginTop"
        ], props.$marginTop),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginRight"
        ], props.$marginRight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginBottom"
        ], props.$marginBottom),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "marginLeft"
        ], props.$marginLeft)
    ].filter((value)=>value !== null));
}
function responsivePaddingStyle(props) {
    let { theme } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(...[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "padding"
        ], props.$padding),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingLeft",
            "paddingRight"
        ], props.$paddingX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingTop",
            "paddingBottom"
        ], props.$paddingY),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingTop"
        ], props.$paddingTop),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingRight"
        ], props.$paddingRight),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingBottom"
        ], props.$paddingBottom),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(theme, [
            "paddingLeft"
        ], props.$paddingLeft)
    ].filter((value)=>value !== null));
}
const StyledBox = /* @__PURE__ */ styled.div.withConfig({
    displayName: "StyledBox",
    componentId: "sc-pzvqiz-0"
})(boxStyle, flexItemStyle, responsiveBoxStyle, responsiveGridItemStyle, responsiveMarginStyle, responsivePaddingStyle), Box = function Box(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(110), flex, gridColumn, gridColumnEnd, gridColumnStart, gridRow, gridRowEnd, gridRowStart, height, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, overflow, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, ref, restProps, sizing, t0, t1, t2, t3;
    $[0] === props ? (flex = $[1], gridColumn = $[2], gridColumnEnd = $[3], gridColumnStart = $[4], gridRow = $[5], gridRowEnd = $[6], gridRowStart = $[7], height = $[8], marginBottom = $[9], marginLeft = $[10], marginRight = $[11], marginTop = $[12], marginX = $[13], marginY = $[14], overflow = $[15], paddingBottom = $[16], paddingLeft = $[17], paddingRight = $[18], paddingTop = $[19], paddingX = $[20], paddingY = $[21], ref = $[22], restProps = $[23], sizing = $[24], t0 = $[25], t1 = $[26], t2 = $[27], t3 = $[28]) : ({ as: t0, ref, gridColumn, gridColumnStart, gridColumnEnd, display: t1, flex, height, margin: t2, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft, overflow, padding: t3, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, gridRow, gridRowStart, gridRowEnd, sizing, ...restProps } = props, $[0] = props, $[1] = flex, $[2] = gridColumn, $[3] = gridColumnEnd, $[4] = gridColumnStart, $[5] = gridRow, $[6] = gridRowEnd, $[7] = gridRowStart, $[8] = height, $[9] = marginBottom, $[10] = marginLeft, $[11] = marginRight, $[12] = marginTop, $[13] = marginX, $[14] = marginY, $[15] = overflow, $[16] = paddingBottom, $[17] = paddingLeft, $[18] = paddingRight, $[19] = paddingTop, $[20] = paddingX, $[21] = paddingY, $[22] = ref, $[23] = restProps, $[24] = sizing, $[25] = t0, $[26] = t1, $[27] = t2, $[28] = t3);
    let asProp = t0 === void 0 ? "div" : t0, display = t1 === void 0 ? "block" : t1, margin = t2 === void 0 ? 0 : t2, padding = t3 === void 0 ? 0 : t3, t4 = typeof asProp == "string" ? asProp : void 0, t5;
    $[29] === gridColumn ? t5 = $[30] : (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridColumn), $[29] = gridColumn, $[30] = t5);
    let t6;
    $[31] === gridColumnStart ? t6 = $[32] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridColumnStart), $[31] = gridColumnStart, $[32] = t6);
    let t7;
    $[33] === gridColumnEnd ? t7 = $[34] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridColumnEnd), $[33] = gridColumnEnd, $[34] = t7);
    let t8;
    $[35] === display ? t8 = $[36] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(display), $[35] = display, $[36] = t8);
    let t9;
    $[37] === flex ? t9 = $[38] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(flex), $[37] = flex, $[38] = t9);
    let t10;
    $[39] === height ? t10 = $[40] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(height), $[39] = height, $[40] = t10);
    let t11;
    $[41] === margin ? t11 = $[42] : (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(margin), $[41] = margin, $[42] = t11);
    let t12;
    $[43] === marginX ? t12 = $[44] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginX), $[43] = marginX, $[44] = t12);
    let t13;
    $[45] === marginY ? t13 = $[46] : (t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginY), $[45] = marginY, $[46] = t13);
    let t14;
    $[47] === marginTop ? t14 = $[48] : (t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginTop), $[47] = marginTop, $[48] = t14);
    let t15;
    $[49] === marginRight ? t15 = $[50] : (t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginRight), $[49] = marginRight, $[50] = t15);
    let t16;
    $[51] === marginBottom ? t16 = $[52] : (t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginBottom), $[51] = marginBottom, $[52] = t16);
    let t17;
    $[53] === marginLeft ? t17 = $[54] : (t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(marginLeft), $[53] = marginLeft, $[54] = t17);
    let t18;
    $[55] === overflow ? t18 = $[56] : (t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(overflow), $[55] = overflow, $[56] = t18);
    let t19;
    $[57] === padding ? t19 = $[58] : (t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(padding), $[57] = padding, $[58] = t19);
    let t20;
    $[59] === paddingX ? t20 = $[60] : (t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingX), $[59] = paddingX, $[60] = t20);
    let t21;
    $[61] === paddingY ? t21 = $[62] : (t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingY), $[61] = paddingY, $[62] = t21);
    let t22;
    $[63] === paddingTop ? t22 = $[64] : (t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingTop), $[63] = paddingTop, $[64] = t22);
    let t23;
    $[65] === paddingRight ? t23 = $[66] : (t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingRight), $[65] = paddingRight, $[66] = t23);
    let t24;
    $[67] === paddingBottom ? t24 = $[68] : (t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingBottom), $[67] = paddingBottom, $[68] = t24);
    let t25;
    $[69] === paddingLeft ? t25 = $[70] : (t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingLeft), $[69] = paddingLeft, $[70] = t25);
    let t26;
    $[71] === gridRow ? t26 = $[72] : (t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridRow), $[71] = gridRow, $[72] = t26);
    let t27;
    $[73] === gridRowStart ? t27 = $[74] : (t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridRowStart), $[73] = gridRowStart, $[74] = t27);
    let t28;
    $[75] === gridRowEnd ? t28 = $[76] : (t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridRowEnd), $[75] = gridRowEnd, $[76] = t28);
    let t29;
    $[77] === sizing ? t29 = $[78] : (t29 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(sizing), $[77] = sizing, $[78] = t29);
    let t30 = asProp, t31;
    return $[79] !== props.children || $[80] !== ref || $[81] !== restProps || $[82] !== t10 || $[83] !== t11 || $[84] !== t12 || $[85] !== t13 || $[86] !== t14 || $[87] !== t15 || $[88] !== t16 || $[89] !== t17 || $[90] !== t18 || $[91] !== t19 || $[92] !== t20 || $[93] !== t21 || $[94] !== t22 || $[95] !== t23 || $[96] !== t24 || $[97] !== t25 || $[98] !== t26 || $[99] !== t27 || $[100] !== t28 || $[101] !== t29 || $[102] !== t30 || $[103] !== t4 || $[104] !== t5 || $[105] !== t6 || $[106] !== t7 || $[107] !== t8 || $[108] !== t9 ? (t31 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledBox, {
        "data-as": t4,
        "data-ui": "Box",
        ...restProps,
        $column: t5,
        $columnStart: t6,
        $columnEnd: t7,
        $display: t8,
        $flex: t9,
        $height: t10,
        $margin: t11,
        $marginX: t12,
        $marginY: t13,
        $marginTop: t14,
        $marginRight: t15,
        $marginBottom: t16,
        $marginLeft: t17,
        $overflow: t18,
        $padding: t19,
        $paddingX: t20,
        $paddingY: t21,
        $paddingTop: t22,
        $paddingRight: t23,
        $paddingBottom: t24,
        $paddingLeft: t25,
        $row: t26,
        $rowStart: t27,
        $rowEnd: t28,
        $sizing: t29,
        as: t30,
        ref,
        children: props.children
    }), $[79] = props.children, $[80] = ref, $[81] = restProps, $[82] = t10, $[83] = t11, $[84] = t12, $[85] = t13, $[86] = t14, $[87] = t15, $[88] = t16, $[89] = t17, $[90] = t18, $[91] = t19, $[92] = t20, $[93] = t21, $[94] = t22, $[95] = t23, $[96] = t24, $[97] = t25, $[98] = t26, $[99] = t27, $[100] = t28, $[101] = t29, $[102] = t30, $[103] = t4, $[104] = t5, $[105] = t6, $[106] = t7, $[107] = t8, $[108] = t9, $[109] = t31) : t31 = $[109], t31;
};
function responsiveRadiusStyle(props) {
    let { media, radius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$radius, (value)=>{
        let borderRadius = 0;
        return typeof value == "number" && (borderRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(radius[value])), value === "full" && (borderRadius = "9999px"), {
            borderRadius
        };
    });
}
/**
* @public
*/ function useTheme$1() {
    return useTheme();
}
/**
* @public
*/ function useTheme_v2() {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), t0 = useTheme(), t1;
    return $[0] === t0 ? t1 = $[1] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(t0), $[0] = t0, $[1] = t1), t1;
}
const cache = /* @__PURE__ */ new WeakMap();
/**
* Joined once per pair of theme color objects, as themes are immutable.
*
* @internal
*/ function _cardColorStyle(base, color, checkered = !1) {
    let byColor = cache.get(base);
    byColor || cache.set(base, byColor = /* @__PURE__ */ new WeakMap());
    let declarations = byColor.get(color);
    return declarations === void 0 && (declarations = Object.entries(cardColorVariables(base, color)).filter(([, value])=>value).map(([name, value])=>`${name}: ${value};`).join(""), byColor.set(color, declarations)), checkered ? `${declarations}--card-bg-image: repeating-conic-gradient(${color.bg} 0% 25%, ${color.muted.bg} 0% 50%);` : declarations;
}
function cardColorVariables(base, color) {
    return {
        "--card-backdrop-color": base.backdrop,
        "--card-focus-ring-color": base.focusRing,
        "--card-shadow-outline-color": base.shadow.outline,
        "--card-shadow-umbra-color": base.shadow.umbra,
        "--card-shadow-penumbra-color": base.shadow.penumbra,
        "--card-shadow-ambient-color": base.shadow.ambient,
        "--card-accent-fg-color": color.accent.fg,
        "--card-avatar-gray-bg-color": color.avatar.gray.bg,
        "--card-avatar-gray-fg-color": color.avatar.gray.fg,
        "--card-avatar-blue-bg-color": color.avatar.blue.bg,
        "--card-avatar-blue-fg-color": color.avatar.blue.fg,
        "--card-avatar-purple-bg-color": color.avatar.purple.bg,
        "--card-avatar-purple-fg-color": color.avatar.purple.fg,
        "--card-avatar-magenta-bg-color": color.avatar.magenta.bg,
        "--card-avatar-magenta-fg-color": color.avatar.magenta.fg,
        "--card-avatar-red-bg-color": color.avatar.red.bg,
        "--card-avatar-red-fg-color": color.avatar.red.fg,
        "--card-avatar-orange-bg-color": color.avatar.orange.bg,
        "--card-avatar-orange-fg-color": color.avatar.orange.fg,
        "--card-avatar-yellow-bg-color": color.avatar.yellow.bg,
        "--card-avatar-yellow-fg-color": color.avatar.yellow.fg,
        "--card-avatar-green-bg-color": color.avatar.green.bg,
        "--card-avatar-green-fg-color": color.avatar.green.fg,
        "--card-avatar-cyan-bg-color": color.avatar.cyan.bg,
        "--card-avatar-cyan-fg-color": color.avatar.cyan.fg,
        "--card-bg-color": color.bg,
        "--card-border-color": color.border,
        "--card-badge-default-bg-color": color.badge.default.bg,
        "--card-badge-default-dot-color": color.badge.default.dot,
        "--card-badge-default-fg-color": color.badge.default.fg,
        "--card-badge-default-icon-color": color.badge.default.icon,
        "--card-badge-neutral-bg-color": color.badge.neutral?.bg,
        "--card-badge-neutral-dot-color": color.badge.neutral?.dot,
        "--card-badge-neutral-fg-color": color.badge.neutral?.fg,
        "--card-badge-neutral-icon-color": color.badge.neutral?.icon,
        "--card-badge-primary-bg-color": color.badge.primary.bg,
        "--card-badge-primary-dot-color": color.badge.primary.dot,
        "--card-badge-primary-fg-color": color.badge.primary.fg,
        "--card-badge-primary-icon-color": color.badge.primary.icon,
        "--card-badge-suggest-bg-color": color.badge.suggest?.bg,
        "--card-badge-suggest-dot-color": color.badge.suggest?.dot,
        "--card-badge-suggest-fg-color": color.badge.suggest?.fg,
        "--card-badge-suggest-icon-color": color.badge.suggest?.icon,
        "--card-badge-positive-bg-color": color.badge.positive.bg,
        "--card-badge-positive-dot-color": color.badge.positive.dot,
        "--card-badge-positive-fg-color": color.badge.positive.fg,
        "--card-badge-positive-icon-color": color.badge.positive.icon,
        "--card-badge-caution-bg-color": color.badge.caution.bg,
        "--card-badge-caution-dot-color": color.badge.caution.dot,
        "--card-badge-caution-fg-color": color.badge.caution.fg,
        "--card-badge-caution-icon-color": color.badge.caution.icon,
        "--card-badge-critical-bg-color": color.badge.critical.bg,
        "--card-badge-critical-dot-color": color.badge.critical.dot,
        "--card-badge-critical-fg-color": color.badge.critical.fg,
        "--card-badge-critical-icon-color": color.badge.critical.icon,
        "--card-code-bg-color": color.code.bg,
        "--card-code-fg-color": color.code.fg,
        "--card-fg-color": color.fg,
        "--card-icon-color": color.icon,
        "--card-kbd-bg-color": color.kbd.bg,
        "--card-kbd-border-color": color.kbd.border,
        "--card-kbd-fg-color": color.kbd.fg,
        "--card-link-fg-color": color.link.fg,
        "--card-muted-bg-color": color.muted.bg,
        "--card-muted-fg-color": color.muted.fg,
        "--card-skeleton-color-from": color.skeleton.from,
        "--card-skeleton-color-to": color.skeleton.to,
        "--card-bg2-color": color.muted.bg,
        "--card-link-color": color.link.fg,
        "--card-hairline-soft-color": color.border,
        "--card-hairline-hard-color": color.border
    };
}
function focusRingBorderStyle(border) {
    return `inset 0 0 0 ${border.width}px ${border.color}`;
}
function focusRingStyle(opts) {
    let { base, border, focusRing } = opts, focusRingOutsetWidth = focusRing.offset + focusRing.width, focusRingInsetWidth = 0 - focusRing.offset, bgColor = base ? base.bg : "var(--card-bg-color)";
    return [
        focusRingInsetWidth > 0 && `inset 0 0 0 ${focusRingInsetWidth}px var(--card-focus-ring-color)`,
        border && focusRingBorderStyle(border),
        focusRingInsetWidth < 0 && `0 0 0 ${0 - focusRingInsetWidth}px ${bgColor}`,
        focusRingOutsetWidth > 0 && `0 0 0 ${focusRingOutsetWidth}px var(--card-focus-ring-color)`
    ].filter(Boolean).join(",");
}
const RULES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(border, borderTop, borderRight, borderBottom, borderLeft);
function responsiveBorderStyle() {
    return RULES;
}
function border(props) {
    let { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$border, (value)=>value ? {
            "&&": {
                border: borderStyle
            }
        } : {
            "&&": {
                border: 0
            }
        });
}
function borderTop(props) {
    let { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$borderTop, (value)=>value ? {
            "&&": {
                borderTop: borderStyle
            }
        } : {
            "&&": {
                borderTop: 0
            }
        });
}
function borderRight(props) {
    let { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$borderRight, (value)=>value ? {
            "&&": {
                borderRight: borderStyle
            }
        } : {
            "&&": {
                borderRight: 0
            }
        });
}
function borderBottom(props) {
    let { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$borderBottom, (value)=>value ? {
            "&&": {
                borderBottom: borderStyle
            }
        } : {
            "&&": {
                borderBottom: 0
            }
        });
}
function borderLeft(props) {
    let { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$borderLeft, (value)=>value ? {
            "&&": {
                borderLeft: borderStyle
            }
        } : {
            "&&": {
                borderLeft: 0
            }
        });
}
function toBoxShadow(shadow, color) {
    return `${shadow.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]).join(" ")} ${color}`;
}
function shadowStyle(shadow, outlineWidth = 1) {
    return shadow ? {
        boxShadow: `${`0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(outlineWidth)} var(--card-shadow-outline-color)`}, ${toBoxShadow(shadow.umbra, "var(--card-shadow-umbra-color)")}, ${toBoxShadow(shadow.penumbra, "var(--card-shadow-penumbra-color)")}, ${toBoxShadow(shadow.ambient, "var(--card-shadow-ambient-color)")}`
    } : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"];
}
function responsiveShadowStyle(props) {
    let { card, media, shadow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$shadow, (index)=>shadowStyle(shadow[index], card.shadow.outline));
}
/**
* Gets the global scope instance in a given environment.
*
* The strategy is to return the most modern, and if not, the most common:
* - The `globalThis` variable is the modern approach to accessing the global scope
* - The `window` variable is the global scope in a web browser
* - The `self` variable is the global scope in workers and others
* - The `global` variable is the global scope in Node.js
*/ function getGlobalScope() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof window < "u") return window;
    if (typeof self < "u") return self;
    if (typeof global < "u") return global;
    throw Error("@sanity/ui: could not locate global scope");
}
const globalScope = getGlobalScope();
/**
* As `@sanity/ui` is declared as a dependency, and may be duplicated, sometimes across major versions
* it's critical that vital react contexts are shared even when there is a duplicate.
* If we used a model similar to `sanity` itself, or `styled-components`, this would be unnecessary as
* those libraries enforce single instances.
* Since we don't enforce it we have to support a sanity plugin being able to call hooks like `useToast`, and then
* read the context setup by `sanity`, which calls `ToastProvider`, even if the provider and hook are different instances in memory.
* It's also why it's vital that all changes to globally scoped providers remain fully backwards compatible to v1.
*/ function createGlobalScopedContext(key, defaultValue) {
    let symbol = Symbol.for(key);
    /**
	* Prevent errors about re-renders on React SSR on Next.js App Router
	*/ if (typeof document > "u") {
        let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultValue);
        return context.displayName = key, context;
    }
    return globalScope[symbol] = globalScope[symbol] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultValue), globalScope[symbol];
}
/**
* @internal
*/ const ThemeContext = createGlobalScopedContext("@sanity/ui/context/theme", null);
/**
* @public
*/ function ThemeProvider$1(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(15), parentTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext), { children } = props, scheme = props.scheme ?? (parentTheme?.scheme || "light"), rootTheme = props.theme ?? (parentTheme?.theme || null), tone = props.tone ?? (parentTheme?.tone || "default"), t0;
    bb0: {
        if (!rootTheme) {
            t0 = null;
            break bb0;
        }
        let t1;
        $[0] !== rootTheme || $[1] !== scheme || $[2] !== tone ? (t1 = {
            version: 0,
            theme: rootTheme,
            scheme,
            tone
        }, $[0] = rootTheme, $[1] = scheme, $[2] = tone, $[3] = t1) : t1 = $[3], t0 = t1;
    }
    let themeContext = t0, t1;
    bb1: {
        if (!rootTheme) {
            t1 = null;
            break bb1;
        }
        let t2;
        $[4] !== rootTheme || $[5] !== scheme || $[6] !== tone ? (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(rootTheme, scheme, tone), $[4] = rootTheme, $[5] = scheme, $[6] = tone, $[7] = t2) : t2 = $[7], t1 = t2;
    }
    let theme = t1;
    if (!theme) {
        let t2;
        return $[8] === Symbol.for("react.memo_cache_sentinel") ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("pre", {
            children: "ThemeProvider: no \"theme\" property provided"
        }), $[8] = t2) : t2 = $[8], t2;
    }
    let t2;
    $[9] !== children || $[10] !== theme ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ThemeProvider, {
        theme,
        children
    }), $[9] = children, $[10] = theme, $[11] = t2) : t2 = $[11];
    let t3;
    return $[12] !== t2 || $[13] !== themeContext ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ThemeContext.Provider, {
        value: themeContext,
        children: t2
    }), $[12] = t2, $[13] = themeContext, $[14] = t3) : t3 = $[14], t3;
}
/**
* @public
*/ function useRootTheme() {
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!value) throw Error("useRootTheme(): missing context value");
    return value;
}
/**
* @public
*/ function ThemeColorProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5), { children, scheme, tone } = props, root = useRootTheme(), t0 = scheme || root.scheme, t1;
    return $[0] !== children || $[1] !== root.theme || $[2] !== t0 || $[3] !== tone ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ThemeProvider$1, {
        scheme: t0,
        theme: root.theme,
        tone,
        children
    }), $[0] = children, $[1] = root.theme, $[2] = t0, $[3] = tone, $[4] = t1) : t1 = $[4], t1;
}
function cardCheckeredStyle(props) {
    if (!props.$checkered) return !1;
    let { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`background-size:${space[3]}px ${space[3]}px;background-position:50% 50%;background-image:var(--card-bg-image);`;
}
const cardStaticStyle = css`color:var(--card-fg-color);&[data-as='button']{-webkit-font-smoothing:inherit;appearance:none;outline:none;font:inherit;text-align:inherit;border:0;width:-moz-available;width:-webkit-fill-available;width:stretch;}&[data-as='a']{outline:none;text-decoration:none;}&[data-as='pre']{font:inherit;}`;
function cardColorStyle(props) {
    let { $checkered } = props, { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`color-scheme:${color._dark ? "dark" : "light"};${_cardColorStyle(color, color, $checkered)} &[data-as='button']{--card-focus-ring-box-shadow:none;cursor:default;box-shadow:var(--card-focus-ring-box-shadow);}&[data-as='a']{cursor:pointer;box-shadow:var(--card-focus-ring-box-shadow);}&[data-as='button']:disabled,&[data-as='a'][data-disabled]{${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}}&[data-as='button']:not(:disabled),&[data-as='a']:not([data-disabled]){&[data-pressed]{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}&[data-selected]{${_cardColorStyle(color, color.selectable.default.selected, $checkered)}}@media (hover:hover){&:not([data-pressed]):not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}}&:active{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}}}}`;
}
function cardStyle(props) {
    let { card, color, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), border = {
        width: card.border.width,
        color: "var(--card-border-color)"
    };
    return css`background-color:${props.$muted ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};${props.$focusRing && css`&[data-as='button']:not(:disabled):focus-visible,&[data-as='a']:not([data-disabled]):focus-visible{--card-focus-ring-box-shadow:${focusRingStyle({
        base: color,
        border,
        focusRing: card.focusRing
    })};}`} ${style?.card?.root}`;
}
const CardStatic = styled(/* @__PURE__ */ styled(Box).withConfig({
    displayName: "CardBorder",
    componentId: "sc-ujszhm-0"
})(responsiveBorderStyle, cardCheckeredStyle)).withConfig({
    displayName: "CardStatic",
    componentId: "sc-ujszhm-1"
})`${cardStaticStyle}`, StyledCard = /* @__PURE__ */ styled(/* @__PURE__ */ styled(CardStatic).withConfig({
    displayName: "CardColor",
    componentId: "sc-ujszhm-2"
})(cardColorStyle)).withConfig({
    displayName: "StyledCard",
    componentId: "sc-ujszhm-3"
})(responsiveRadiusStyle, responsiveShadowStyle, cardStyle);
function CardComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(57), asProp, border, borderBottom, borderLeft, borderRight, borderTop, muted, pressed, ref, restProps, scheme, selected, shadow, t0, t1, t2, t3;
    $[0] === props ? (asProp = $[1], border = $[2], borderBottom = $[3], borderLeft = $[4], borderRight = $[5], borderTop = $[6], muted = $[7], pressed = $[8], ref = $[9], restProps = $[10], scheme = $[11], selected = $[12], shadow = $[13], t0 = $[14], t1 = $[15], t2 = $[16], t3 = $[17]) : ({ __unstable_checkered: t0, __unstable_focusRing: t1, as: asProp, border, borderTop, borderRight, borderBottom, borderLeft, muted, pressed, radius: t2, ref, scheme, selected, shadow, tone: t3, ...restProps } = props, $[0] = props, $[1] = asProp, $[2] = border, $[3] = borderBottom, $[4] = borderLeft, $[5] = borderRight, $[6] = borderTop, $[7] = muted, $[8] = pressed, $[9] = ref, $[10] = restProps, $[11] = scheme, $[12] = selected, $[13] = shadow, $[14] = t0, $[15] = t1, $[16] = t2, $[17] = t3);
    let checkered = t0 !== void 0 && t0, focusRing = t1 !== void 0 && t1, radius = t2 === void 0 ? 0 : t2, toneProp = t3 === void 0 ? "default" : t3, as = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(asProp) ? asProp : "div", rootTheme = useRootTheme(), tone = toneProp === "inherit" ? rootTheme.tone : toneProp, t4 = typeof as == "string" ? as : void 0, t5 = rootTheme.scheme, t6;
    $[18] === border ? t6 = $[19] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(border), $[18] = border, $[19] = t6);
    let t7;
    $[20] === borderTop ? t7 = $[21] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(borderTop), $[20] = borderTop, $[21] = t7);
    let t8;
    $[22] === borderRight ? t8 = $[23] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(borderRight), $[22] = borderRight, $[23] = t8);
    let t9;
    $[24] === borderBottom ? t9 = $[25] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(borderBottom), $[24] = borderBottom, $[25] = t9);
    let t10;
    $[26] === borderLeft ? t10 = $[27] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(borderLeft), $[26] = borderLeft, $[27] = t10);
    let t11 = muted ?? !1, t12;
    $[28] === radius ? t12 = $[29] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[28] = radius, $[29] = t12);
    let t13;
    $[30] === shadow ? t13 = $[31] : (t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(shadow), $[30] = shadow, $[31] = t13);
    let t14 = checkered ? "" : void 0, t15 = pressed ? "" : void 0, t16 = selected ? "" : void 0, t17;
    $[32] !== as || $[33] !== checkered || $[34] !== focusRing || $[35] !== ref || $[36] !== restProps || $[37] !== rootTheme.scheme || $[38] !== selected || $[39] !== t10 || $[40] !== t11 || $[41] !== t12 || $[42] !== t13 || $[43] !== t14 || $[44] !== t15 || $[45] !== t16 || $[46] !== t4 || $[47] !== t6 || $[48] !== t7 || $[49] !== t8 || $[50] !== t9 || $[51] !== tone ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledCard, {
        "data-as": t4,
        "data-scheme": t5,
        "data-ui": "Card",
        "data-tone": tone,
        ...restProps,
        $border: t6,
        $borderTop: t7,
        $borderRight: t8,
        $borderBottom: t9,
        $borderLeft: t10,
        $checkered: checkered,
        $focusRing: focusRing,
        $muted: t11,
        $radius: t12,
        $shadow: t13,
        $tone: tone,
        "data-checkered": t14,
        "data-pressed": t15,
        "data-selected": t16,
        forwardedAs: as,
        ref,
        selected
    }), $[32] = as, $[33] = checkered, $[34] = focusRing, $[35] = ref, $[36] = restProps, $[37] = rootTheme.scheme, $[38] = selected, $[39] = t10, $[40] = t11, $[41] = t12, $[42] = t13, $[43] = t14, $[44] = t15, $[45] = t16, $[46] = t4, $[47] = t6, $[48] = t7, $[49] = t8, $[50] = t9, $[51] = tone, $[52] = t17) : t17 = $[52];
    let t18;
    return $[53] !== scheme || $[54] !== t17 || $[55] !== tone ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ThemeColorProvider, {
        scheme,
        tone,
        children: t17
    }), $[53] = scheme, $[54] = t17, $[55] = tone, $[56] = t18) : t18 = $[56], t18;
}
/**
* The `Card` component acts much like a `Box`, but with a background and foreground color.
* Components within a `Card` inherit its colors.
*
* @public
*/ const Card = CardComponent;
function _getMediaQuery(media, index) {
    return index === 0 ? `screen and (max-width: ${media[index] - 1}px)` : index === media.length ? `screen and (min-width: ${media[index - 1]}px)` : `screen and (min-width: ${media[index - 1]}px) and (max-width: ${media[index] - 1}px)`;
}
const canonicalMedia = /* @__PURE__ */ new Map();
function _getCanonicalMedia(media) {
    let key = media.join(",");
    return canonicalMedia.get(key) || (canonicalMedia.set(key, media), media);
}
function _createMediaStore(media) {
    let mediaLen = media.length, sizes, getSizes = ()=>{
        if (!sizes) {
            sizes = [];
            for(let index = mediaLen; index > -1; --index){
                let mediaQuery = _getMediaQuery(media, index);
                sizes.push({
                    index,
                    mq: window.matchMedia(mediaQuery)
                });
            }
        }
        return sizes;
    }, getSnapshot = ()=>{
        for (let { index, mq } of getSizes())if (mq.matches) return index;
        return 0;
    }, subscribe = (onStoreChange)=>{
        let disposeFns = [];
        for (let { mq } of getSizes()){
            let handleChange = ()=>{
                mq.matches && onStoreChange();
            };
            mq.addEventListener("change", handleChange), disposeFns.push(()=>mq.removeEventListener("change", handleChange));
        }
        return ()=>{
            for (let disposeFn of disposeFns)disposeFn();
        };
    };
    return {
        getSnapshot,
        subscribe
    };
}
/**
* Only called during server-side rendering, and hydration if using hydrateRoot
* Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query
* and we assume `(prefers-color-scheme: light)` since it's the most common scheme
*
* @link https://beta.reactjs.org/apis/react/useSyncExternalStore#adding-support-for-server-rendering
*/ function getServerSnapshot() {
    return 0;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function useMediaIndex() {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), t0 = useTheme_v2(), t1;
    $[0] === t0.media ? t1 = $[1] : (t1 = _getCanonicalMedia(t0.media), $[0] = t0.media, $[1] = t1);
    let media = t1, t2;
    $[2] === media ? t2 = $[3] : (t2 = _createMediaStore(media), $[2] = media, $[3] = t2);
    let store = t2;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getSnapshot, getServerSnapshot);
}
/**
* Efficiently subscribes to `window.matchMedia` queries
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Required if the hook is called during SSR (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* @public
*/ function useMatchMedia(mediaQueryString, getServerSnapshot) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(mediaQueryString);
    let t0;
    $[0] === mediaQueryString ? t0 = $[1] : (t0 = (onStoreChange)=>{
        let media = window.matchMedia(mediaQueryString);
        return media.addEventListener("change", onStoreChange), ()=>media.removeEventListener("change", onStoreChange);
    }, $[0] = mediaQueryString, $[1] = t0);
    let t1;
    return $[2] === mediaQueryString ? t1 = $[3] : (t1 = ()=>window.matchMedia(mediaQueryString).matches, $[2] = mediaQueryString, $[3] = t1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t0, t1, getServerSnapshot);
}
/**
* Returns true if motion should be reduced
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-reduced-motion: no-preference)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-reduced-motion` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
* @example https://gist.github.com/stipsan/0c0f839a27842249cada893e9fb7767b
*
* @public
*/ function usePrefersReducedMotion(t0) {
    return useMatchMedia("(prefers-reduced-motion: reduce)", t0 === void 0 ? _temp : t0);
}
function _temp() {
    return !1;
}
function isRecord(value) {
    return !(!value || typeof value != "object" || Array.isArray(value));
}
function getLayerContext(contextValue) {
    if (!isRecord(contextValue) || contextValue.version !== 0) throw Error("the context value is not compatible");
    if (!contextValue) throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
    if (contextValue.version === 0) return contextValue;
    throw Error("could not get layer context");
}
const LayerContext = createGlobalScopedContext("@sanity/ui/context/layer", null), initialLayerState = {
    childLayers: /* @__PURE__ */ new Map(),
    childrenWithoutLevel: 0
};
/** @internal */ function layerReducer(state, action) {
    let { level } = action;
    switch(action.type){
        case "child/register":
            {
                if (level === void 0) return {
                    ...state,
                    childrenWithoutLevel: state.childrenWithoutLevel + 1
                };
                let childLayers = new Map(state.childLayers);
                return childLayers.set(level, (childLayers.get(level) ?? 0) + 1), {
                    ...state,
                    childLayers
                };
            }
        case "child/unregister":
            {
                if (level === void 0) return {
                    ...state,
                    childrenWithoutLevel: state.childrenWithoutLevel - 1
                };
                let childLayers = new Map(state.childLayers), count = childLayers.get(level) ?? 0;
                return count === 1 ? childLayers.delete(level) : childLayers.set(level, count - 1), {
                    ...state,
                    childLayers
                };
            }
        default:
            return state;
    }
}
/**
* @public
*/ function LayerProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(19), { children, zOffset: t0 } = props, zOffsetProp = t0 === void 0 ? 0 : t0, parentContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LayerContext), t1;
    $[0] === parentContextValue ? t1 = $[1] : (t1 = parentContextValue && getLayerContext(parentContextValue), $[0] = parentContextValue, $[1] = t1);
    let parent = t1, parentRegisterChild = parent?.registerChild, level = (parent?.level ?? 0) + 1, t2;
    $[2] === zOffsetProp ? t2 = $[3] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(zOffsetProp), $[2] = zOffsetProp, $[3] = t2);
    let zOffset = t2, maxMediaIndex = zOffset.length - 1, mediaIndex = Math.min(useMediaIndex(), maxMediaIndex), zIndex = parent ? parent.zIndex + zOffset[mediaIndex] : zOffset[mediaIndex], [t3, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(layerReducer, initialLayerState), { childLayers, childrenWithoutLevel } = t3, size = childLayers.size + childrenWithoutLevel, isTopLayer = size === 0, t4;
    $[4] === parentRegisterChild ? t4 = $[5] : (t4 = (childLevel)=>{
        let parentDispose = parentRegisterChild?.(childLevel);
        return dispatch({
            type: "child/register",
            level: childLevel
        }), ()=>{
            dispatch({
                type: "child/unregister",
                level: childLevel
            }), parentDispose?.();
        };
    }, $[4] = parentRegisterChild, $[5] = t4);
    let registerChild = t4, t5, t6;
    $[6] !== level || $[7] !== parentRegisterChild ? (t5 = ()=>parentRegisterChild?.(level), t6 = [
        level,
        parentRegisterChild
    ], $[6] = level, $[7] = parentRegisterChild, $[8] = t5, $[9] = t6) : (t5 = $[8], t6 = $[9]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    $[10] !== isTopLayer || $[11] !== level || $[12] !== registerChild || $[13] !== size || $[14] !== zIndex ? (t7 = {
        version: 0,
        isTopLayer,
        level,
        registerChild,
        size,
        zIndex
    }, $[10] = isTopLayer, $[11] = level, $[12] = registerChild, $[13] = size, $[14] = zIndex, $[15] = t7) : t7 = $[15];
    let value = t7, t8;
    return $[16] !== children || $[17] !== value ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LayerContext.Provider, {
        value,
        children
    }), $[16] = children, $[17] = value, $[18] = t8) : t8 = $[18], t8;
}
/**
* @public
*/ function useLayer() {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LayerContext);
    if (!value) throw Error("useLayer(): missing context value");
    try {
        let t1;
        return $[0] === value ? t1 = $[1] : (t1 = getLayerContext(value), $[0] = value, $[1] = t1), t1;
    } catch (t0) {
        let err = t0;
        throw err instanceof Error ? Error(`useLayer(): ${err.message}`) : Error(`useLayer(): ${err}`);
    }
}
;
 //# sourceMappingURL=useLayer-D_TnC6On.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/responsiveFont-Cyvxxz-G.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "i": (()=>responsiveFont),
    "n": (()=>_fontWeight),
    "r": (()=>_responsiveFontSize),
    "t": (()=>_fontBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
;
;
const FONT_BOX_STYLE = {
    padding: "1px 0",
    margin: 0,
    "&:before": {
        content: "\"\"",
        display: "block",
        height: 0
    },
    "&:after": {
        content: "\"\"",
        display: "block",
        height: 0
    },
    "& > code, & > span": {
        display: "block"
    },
    "&:not([hidden])": {
        display: "block"
    }
};
/**
* A utility function getting responsive font styles.
* @internal
*/ function responsiveFont(fontKey, props) {
    let { $size } = props, base = {
        ..._fontBase(fontKey, props),
        ..._fontWeight(fontKey, props)
    };
    return $size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(base, _responsiveFontSize(fontKey, props)) : (responsiveFont.warned ||= (console.warn("No size specified for responsive font", {
        fontKey,
        $size,
        props,
        base
    }), !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(base));
}
/**
* @internal
*/ function _fontBase(fontKey, props) {
    let { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return {
        position: "relative",
        fontFamily: font[fontKey].family,
        ...FONT_BOX_STYLE
    };
}
/**
* @internal
*/ function _fontWeight(fontKey, props) {
    let { weights } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme).font[fontKey];
    return {
        fontWeight: `${props.$weight && weights[props.$weight] || weights.regular}`
    };
}
/**
* @internal
*/ function _responsiveFontSize(fontKey, props) {
    let { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), { sizes } = font[fontKey];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$size, (sizeIndex)=>fontSize(sizes[sizeIndex] || sizes[2]));
}
function fontSize(size) {
    let { ascenderHeight, descenderHeight, fontSize, iconSize, letterSpacing, lineHeight } = size, negHeight = ascenderHeight + descenderHeight, capHeight = lineHeight - negHeight, iconOffset = (capHeight - iconSize) / 2, customIconSize = Math.floor(fontSize * 1.125 / 2) * 2 + 1, customIconOffset = (capHeight - customIconSize) / 2;
    return {
        fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(fontSize),
        lineHeight: `calc(${lineHeight} / ${fontSize})`,
        letterSpacing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(letterSpacing),
        transform: `translateY(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(descenderHeight)})`,
        "&:before": {
            marginTop: `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(0 - negHeight)} - 1px)`
        },
        "&:after": {
            marginBottom: "-1px"
        },
        "& svg:not([data-sanity-icon])": {
            fontSize: `calc(${customIconSize} / 16 * 1rem)`,
            margin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(customIconOffset)
        },
        "& [data-sanity-icon]": {
            fontSize: `calc(${iconSize} / 16 * 1rem)`,
            margin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(iconOffset)
        }
    };
}
;
 //# sourceMappingURL=responsiveFont-Cyvxxz-G.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>fontColorStyle),
    "i": (()=>responsiveTextAlignStyle),
    "n": (()=>Text),
    "r": (()=>SpanWithTextOverflow),
    "t": (()=>Stack)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/responsiveFont-Cyvxxz-G.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/**
* @internal
*/ function fontColorStyle(props) {
    if (props.$muted) return {
        color: "var(--card-muted-fg-color)"
    };
    if (props.$accent) return {
        color: "var(--card-accent-fg-color)"
    };
}
/**
* Get responsive text align styles.
* @internal
*/ function responsiveTextAlignStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$align, (textAlign)=>({
            textAlign
        }));
}
/** @internal */ function SpanWithTextOverflow(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), t0;
    return $[0] === props.children ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: "u-krAvjf u-fqYOpD u-iteyqJ u-cbkwRf",
        children: props.children
    }), $[0] = props.children, $[1] = t0), t0;
}
function textBaseStyle(props) {
    let { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", props)} color:var(--card-fg-color);& code{font-family:${font.code.family};border-radius:1px;background-color:var(--card-code-bg-color);color:var(--card-code-fg-color);}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.text.weights.bold};}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;color:var(--card-icon-color);& path{vector-effect:non-scaling-stroke !important;}}`;
}
const StyledText = /* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled.div.withConfig({
    displayName: "TextBase",
    componentId: "sc-b5alqv-0"
})(textBaseStyle)).withConfig({
    displayName: "TextSize",
    componentId: "sc-b5alqv-1"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])("text", props))).withConfig({
    displayName: "StyledText",
    componentId: "sc-b5alqv-2"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])("text", props), responsiveTextAlignStyle, fontColorStyle);
function TextComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(27), align, childrenProp, ref, restProps, t0, t1, t2, textOverflow, weight;
    $[0] === props ? (align = $[1], childrenProp = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], textOverflow = $[8], weight = $[9]) : ({ accent: t0, align, children: childrenProp, muted: t1, ref, size: t2, textOverflow, weight, ...restProps } = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = textOverflow, $[9] = weight);
    let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t3;
        $[10] === children ? t3 = $[11] : (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SpanWithTextOverflow, {
            children
        }), $[10] = children, $[11] = t3), children = t3;
    }
    let t3;
    $[12] === align ? t3 = $[13] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(align), $[12] = align, $[13] = t3);
    let t4;
    $[14] === size ? t4 = $[15] : (t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[14] = size, $[15] = t4);
    let t5;
    $[16] === children ? t5 = $[17] : (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children
    }), $[16] = children, $[17] = t5);
    let t6;
    return $[18] !== accent || $[19] !== muted || $[20] !== ref || $[21] !== restProps || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== weight ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledText, {
        "data-ui": "Text",
        ...restProps,
        $accent: accent,
        $align: t3,
        $muted: muted,
        ref,
        $size: t4,
        $weight: weight,
        children: t5
    }), $[18] = accent, $[19] = muted, $[20] = ref, $[21] = restProps, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = weight, $[26] = t6) : t6 = $[26], t6;
}
/**
* The `Text` component is an agile, themed typographic element.
*
* @public
*/ const Text = TextComponent, BASE_STYLE = {
    "&&:not([hidden])": {
        display: "grid"
    },
    "&[data-as=\"ul\"],&[data-as=\"ol\"]": {
        listStyle: "none"
    },
    gridTemplateColumns: "minmax(0, 1fr)",
    gridAutoRows: "min-content"
};
function stackBaseStyle() {
    return BASE_STYLE;
}
function responsiveStackSpaceStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$space, (spaceIndex)=>({
            gridGap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[spaceIndex])
        }));
}
const StyledStack = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledStack",
    componentId: "sc-z8vnhh-0"
})(stackBaseStyle, responsiveStackSpaceStyle);
function StackComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13), as, gap, ref, restProps;
    $[0] === props ? (as = $[1], gap = $[2], ref = $[3], restProps = $[4]) : ({ as, gap, ref, ...restProps } = props, $[0] = props, $[1] = as, $[2] = gap, $[3] = ref, $[4] = restProps);
    let t0 = typeof as == "string" ? as : void 0, t1;
    $[5] === gap ? t1 = $[6] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[5] = gap, $[6] = t1);
    let t2;
    return $[7] !== as || $[8] !== ref || $[9] !== restProps || $[10] !== t0 || $[11] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledStack, {
        "data-as": t0,
        "data-ui": "Stack",
        ...restProps,
        $space: t1,
        forwardedAs: as,
        ref
    }), $[7] = as, $[8] = ref, $[9] = restProps, $[10] = t0, $[11] = t1, $[12] = t2) : t2 = $[12], t2;
}
/**
* The `Stack` component is used to place elements on top of each other.
*
* @public
*/ const Stack = StackComponent;
;
 //# sourceMappingURL=stack-DyrC2YfU.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "t": (()=>Flex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const RULES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])({
    "&&:not([hidden])": {
        display: "flex"
    }
}, responsiveFlexAlignStyle, responsiveFlexGapStyle, responsiveFlexWrapStyle, responsiveFlexJustifyStyle, responsiveFlexDirectionStyle);
function responsiveFlexStyle() {
    return RULES;
}
function responsiveFlexAlignStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$align, (align)=>({
            alignItems: align
        }));
}
function responsiveFlexGapStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$gap, (gap)=>({
            gap: gap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[gap]) : void 0
        }));
}
function responsiveFlexWrapStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$wrap, (wrap)=>({
            flexWrap: wrap
        }));
}
function responsiveFlexJustifyStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$justify, (justify)=>({
            justifyContent: justify
        }));
}
function responsiveFlexDirectionStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$direction, (direction)=>({
            flexDirection: direction
        }));
}
const StyledFlex = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledFlex",
    componentId: "sc-f161j9-0"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"], responsiveFlexStyle);
function FlexComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(28), align, as, gap, justify, ref, restProps, t0, wrap;
    $[0] === props ? (align = $[1], as = $[2], gap = $[3], justify = $[4], ref = $[5], restProps = $[6], t0 = $[7], wrap = $[8]) : ({ align, as, direction: t0, gap, justify, ref, wrap, ...restProps } = props, $[0] = props, $[1] = align, $[2] = as, $[3] = gap, $[4] = justify, $[5] = ref, $[6] = restProps, $[7] = t0, $[8] = wrap);
    let direction = t0 === void 0 ? "row" : t0, t1;
    $[9] === align ? t1 = $[10] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(align), $[9] = align, $[10] = t1);
    let t2;
    $[11] === direction ? t2 = $[12] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(direction), $[11] = direction, $[12] = t2);
    let t3;
    $[13] === gap ? t3 = $[14] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[13] = gap, $[14] = t3);
    let t4;
    $[15] === justify ? t4 = $[16] : (t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(justify), $[15] = justify, $[16] = t4);
    let t5;
    $[17] === wrap ? t5 = $[18] : (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(wrap), $[17] = wrap, $[18] = t5);
    let t6;
    return $[19] !== as || $[20] !== ref || $[21] !== restProps || $[22] !== t1 || $[23] !== t2 || $[24] !== t3 || $[25] !== t4 || $[26] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledFlex, {
        "data-ui": "Flex",
        ...restProps,
        $align: t1,
        $direction: t2,
        $gap: t3,
        $justify: t4,
        $wrap: t5,
        forwardedAs: as,
        ref
    }), $[19] = as, $[20] = ref, $[21] = restProps, $[22] = t1, $[23] = t2, $[24] = t3, $[25] = t4, $[26] = t5, $[27] = t6) : t6 = $[27], t6;
}
/**
* The `Flex` component is a wrapper component for flexible elements (`Box`, `Card` and `Flex`).
*
* @public
*/ const Flex = FlexComponent;
;
 //# sourceMappingURL=flex-ohP2jG9d.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/button-DnJrhWml.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "n": (()=>Spinner),
    "r": (()=>spinnerIcon),
    "t": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Spinner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
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
const spinnerIcon = "u-fteRbN u-jmIqco u-iNjdVt";
/**
* Indicate that something is loading for an indeterminate amount of time.
*
* @public
*/ function Spinner(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
        className: spinnerIcon
    }), $[0] = t0) : t0 = $[0];
    let t1;
    return $[1] === props ? t1 = $[2] : (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        "data-ui": "Spinner",
        ...props,
        children: t0
    }), $[1] = props, $[2] = t1), t1;
}
function buttonToneColor(base, { $mode, $tone }) {
    let mode = base.button[$mode] || base.button.default;
    return mode[$tone] || mode.default;
}
/**
* @internal
*/ function buttonBaseStyles(props) {
    let { button } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), borderBoxShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        width: button.border.width,
        color: "var(--card-border-color)"
    });
    return css`margin:0;background-color:var(--card-bg-color);color:var(--card-fg-color);box-shadow:${borderBoxShadow};&:not([data-disabled='true']){&:focus:not(:focus-visible){box-shadow:${borderBoxShadow};}}`;
}
/**
* @internal
*/ function buttonColorStyles(props) {
    let { color: baseColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), color = buttonToneColor(baseColor, props);
    return css`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.enabled)} &:not([data-disabled='true']){@media (hover:hover){&:hover{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.hovered)}}&:active{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.pressed)}}&[data-hovered]{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.hovered)}}}&[data-selected]{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.pressed)}}}`;
}
/**
* @internal
*/ function buttonDisabledAndFocusStyles(props) {
    let { button, color: baseColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), color = buttonToneColor(baseColor, props);
    return css`&:disabled,&[data-disabled='true']{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(baseColor, color.disabled)}}&:not([data-disabled='true']):focus{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        base: baseColor,
        border: {
            width: 2,
            color: baseColor.bg
        },
        focusRing: button.focusRing
    })};}`;
}
/**
* @internal
*/ function buttonStyles(props) {
    let { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`${style?.button?.root}`;
}
const StyledButton = /* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled.button.attrs({
    className: "u-bNEqsD u-fAtomh u-bGTgkg u-MrtSM u-ixvSSg u-cfsavV u-kWIjhW u-dFXmkO u-bnBrYd u-emPzDJ u-iAFgHi u-gBjSqI u-eIsAcC u-eSsDnV u-cbkwRf u-mMFSU u-gSwZVf u-kWkaYS u-iDJVyZ u-grxHnN u-cpxeAE"
}).withConfig({
    displayName: "ButtonBase",
    componentId: "sc-uik9k2-0"
})(buttonBaseStyles)).withConfig({
    displayName: "ButtonColor",
    componentId: "sc-uik9k2-1"
})(buttonColorStyles)).withConfig({
    displayName: "ButtonDisabledAndFocus",
    componentId: "sc-uik9k2-2"
})(buttonDisabledAndFocusStyles)).attrs((props)=>({
        className: props.$width === "fill" ? "u-iQYtgN" : void 0
    })).withConfig({
    displayName: "StyledButton",
    componentId: "sc-uik9k2-3"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], buttonStyles);
function ButtonComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(87), IconComponent, IconRightComponent, children, disabled, loading, paddingBottomProp, paddingLeftProp, paddingRightProp, paddingTopProp, paddingXProp, paddingYProp, ref, restProps, selected, t0, t1, t2, t3, t4, t5, t6, t7, t8, text, textAlign, textWeight, width;
    $[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], loading = $[5], paddingBottomProp = $[6], paddingLeftProp = $[7], paddingRightProp = $[8], paddingTopProp = $[9], paddingXProp = $[10], paddingYProp = $[11], ref = $[12], restProps = $[13], selected = $[14], t0 = $[15], t1 = $[16], t2 = $[17], t3 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], text = $[24], textAlign = $[25], textWeight = $[26], width = $[27]) : ({ children, disabled, ref, fontSize: t0, icon: IconComponent, iconRight: IconRightComponent, justify: t1, loading, mode: t2, padding: t3, paddingX: paddingXProp, paddingY: paddingYProp, paddingTop: paddingTopProp, paddingBottom: paddingBottomProp, paddingLeft: paddingLeftProp, paddingRight: paddingRightProp, radius: t4, selected, gap: t5, text, textAlign, textWeight, tone: t6, type: t7, muted: t8, width, ...restProps } = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = loading, $[6] = paddingBottomProp, $[7] = paddingLeftProp, $[8] = paddingRightProp, $[9] = paddingTopProp, $[10] = paddingXProp, $[11] = paddingYProp, $[12] = ref, $[13] = restProps, $[14] = selected, $[15] = t0, $[16] = t1, $[17] = t2, $[18] = t3, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = text, $[25] = textAlign, $[26] = textWeight, $[27] = width);
    let fontSize = t0 === void 0 ? 1 : t0, justifyProp = t1 === void 0 ? "center" : t1, mode = t2 === void 0 ? "default" : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, gap = t5 === void 0 ? 3 : t5, tone = t6 === void 0 ? "default" : t6, type = t7 === void 0 ? "button" : t7, muted = t8 !== void 0 && t8, { button } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), t9;
    $[28] === justifyProp ? t9 = $[29] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(justifyProp), $[28] = justifyProp, $[29] = t9);
    let justify = t9, t10;
    $[30] === paddingProp ? t10 = $[31] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingProp), $[30] = paddingProp, $[31] = t10);
    let padding = t10, t11;
    $[32] === paddingXProp ? t11 = $[33] : (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingXProp), $[32] = paddingXProp, $[33] = t11);
    let paddingX = t11, t12;
    $[34] === paddingYProp ? t12 = $[35] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingYProp), $[34] = paddingYProp, $[35] = t12);
    let paddingY = t12, t13;
    $[36] === paddingTopProp ? t13 = $[37] : (t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingTopProp), $[36] = paddingTopProp, $[37] = t13);
    let paddingTop = t13, t14;
    $[38] === paddingBottomProp ? t14 = $[39] : (t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingBottomProp), $[38] = paddingBottomProp, $[39] = t14);
    let paddingBottom = t14, t15;
    $[40] === paddingLeftProp ? t15 = $[41] : (t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingLeftProp), $[40] = paddingLeftProp, $[41] = t15);
    let paddingLeft = t15, t16;
    $[42] === paddingRightProp ? t16 = $[43] : (t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingRightProp), $[42] = paddingRightProp, $[43] = t16);
    let paddingRight = t16, t17;
    $[44] === radiusProp ? t17 = $[45] : (t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radiusProp), $[44] = radiusProp, $[45] = t17);
    let radius = t17, t18;
    $[46] === gap ? t18 = $[47] : (t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[46] = gap, $[47] = t18);
    let spacing = t18, t19;
    $[48] !== padding || $[49] !== paddingBottom || $[50] !== paddingLeft || $[51] !== paddingRight || $[52] !== paddingTop || $[53] !== paddingX || $[54] !== paddingY ? (t19 = {
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
    }, $[48] = padding, $[49] = paddingBottom, $[50] = paddingLeft, $[51] = paddingRight, $[52] = paddingTop, $[53] = paddingX, $[54] = paddingY, $[55] = t19) : t19 = $[55];
    let boxProps = t19, t20 = !!(loading || disabled), t21 = selected ? "" : void 0, t22 = !!(loading || disabled), t23;
    $[56] === loading ? t23 = $[57] : (t23 = !!loading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "u-fAtomh u-dhlXri u-hrbqoU u-kyGdCf u-gpkhCb u-HgOzd u-bsGhWR u-kiKDyH u-lhPceK u-hWgptE u-qbeer u-dStxMA",
        "data-ui": "ButtonLoading",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Spinner, {})
    }), $[56] = loading, $[57] = t23);
    let t24;
    $[58] !== IconComponent || $[59] !== IconRightComponent || $[60] !== boxProps || $[61] !== button || $[62] !== fontSize || $[63] !== justify || $[64] !== muted || $[65] !== spacing || $[66] !== text || $[67] !== textAlign || $[68] !== textWeight ? (t24 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        as: "span",
        ...boxProps,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
            as: "span",
            justify,
            gap: spacing,
            children: [
                IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                    size: fontSize,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
                    ]
                }),
                text && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                        muted,
                        align: textAlign,
                        size: fontSize,
                        textOverflow: "ellipsis",
                        weight: textWeight ?? button.textWeight,
                        children: text
                    })
                }),
                IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                    size: fontSize,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
                    ]
                })
            ]
        })
    }), $[58] = IconComponent, $[59] = IconRightComponent, $[60] = boxProps, $[61] = button, $[62] = fontSize, $[63] = justify, $[64] = muted, $[65] = spacing, $[66] = text, $[67] = textAlign, $[68] = textWeight, $[69] = t24) : t24 = $[69];
    let t25;
    $[70] !== boxProps || $[71] !== children ? (t25 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        as: "span",
        ...boxProps,
        children
    }), $[70] = boxProps, $[71] = children, $[72] = t25) : t25 = $[72];
    let t26;
    return $[73] !== mode || $[74] !== radius || $[75] !== ref || $[76] !== restProps || $[77] !== t20 || $[78] !== t21 || $[79] !== t22 || $[80] !== t23 || $[81] !== t24 || $[82] !== t25 || $[83] !== tone || $[84] !== type || $[85] !== width ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(StyledButton, {
        "data-ui": "Button",
        ...restProps,
        $mode: mode,
        $radius: radius,
        $tone: tone,
        "data-disabled": t20,
        "data-selected": t21,
        disabled: t22,
        ref,
        type,
        $width: width,
        children: [
            t23,
            t24,
            t25
        ]
    }), $[73] = mode, $[74] = radius, $[75] = ref, $[76] = restProps, $[77] = t20, $[78] = t21, $[79] = t22, $[80] = t23, $[81] = t24, $[82] = t25, $[83] = tone, $[84] = type, $[85] = width, $[86] = t26) : t26 = $[86], t26;
}
/**
* @public
*/ const Button = ButtonComponent;
;
 //# sourceMappingURL=button-DnJrhWml.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/textInput-DhYi5cPT.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_": (()=>isFocusable),
    "a": (()=>textInputColorStyle),
    "c": (()=>textInputRepresentationColorStyle),
    "d": (()=>responsiveInputPaddingStyle),
    "f": (()=>useCustomValidity),
    "g": (()=>focusLastDescendant),
    "h": (()=>focusFirstDescendant),
    "i": (()=>textInputBaseStyle),
    "l": (()=>textInputRepresentationStyle),
    "m": (()=>attemptFocus),
    "n": (()=>inputRoot),
    "o": (()=>textInputFontSizeStyle),
    "p": (()=>_hasFocus),
    "r": (()=>textAreaRoot),
    "s": (()=>textInputFontStyle),
    "t": (()=>TextInput),
    "u": (()=>responsiveInputPaddingIconRightStyle),
    "v": (()=>_raf),
    "y": (()=>_raf2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/button-DnJrhWml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Close.js [app-ssr] (ecmascript)");
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
/**
* @internal
*/ function _raf(fn) {
    let frameId = requestAnimationFrame(fn);
    return ()=>{
        cancelAnimationFrame(frameId);
    };
}
/**
* @internal
*/ function _raf2(fn) {
    let innerDispose = null, outerDispose = _raf(()=>{
        innerDispose = _raf(fn);
    });
    return ()=>{
        innerDispose && innerDispose(), outerDispose();
    };
}
/**
* @internal
*/ function _hasFocus(element) {
    return !!document.activeElement && element.contains(document.activeElement);
}
/**
* @internal
*/ function isFocusable(element) {
    return element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null ? !0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(element) ? !!element.href && element.rel !== "ignore" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(element) ? element.type !== "hidden" && element.type !== "file" && !element.disabled : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(element) ? !element.disabled : !1;
}
/**
* @internal
*/ function attemptFocus(element) {
    if (!isFocusable(element)) return !1;
    try {
        element.focus();
    } catch  {}
    return document.activeElement === element;
}
/**
* @internal
*/ function focusFirstDescendant(element) {
    for(let i = 0; i < element.childNodes.length; i++){
        let child = element.childNodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(child) && (attemptFocus(child) || focusFirstDescendant(child))) return !0;
    }
    return !1;
}
/**
* @internal
*/ function focusLastDescendant(element) {
    for(let i = element.childNodes.length - 1; i >= 0; i--){
        let child = element.childNodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(child) && (attemptFocus(child) || focusLastDescendant(child))) return !0;
    }
    return !1;
}
/**
* @beta
*/ function useCustomValidity(ref, customValidity) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), t0, t1;
    $[0] !== customValidity || $[1] !== ref ? (t0 = ()=>{
        ref.current?.setCustomValidity(customValidity || "");
    }, t1 = [
        customValidity,
        ref
    ], $[0] = customValidity, $[1] = ref, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
function responsiveInputPaddingStyle(props) {
    let { $fontSize, $iconLeft, $iconRight, $padding, $space } = props, { font, media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), len = Math.max($padding.length, $space.length, $fontSize.length), _padding = [], _space = [], _fontSize = [];
    for(let i = 0; i < len; i += 1)_fontSize[i] = $fontSize[i] === void 0 ? _fontSize[i - 1] : $fontSize[i], _padding[i] = $padding[i] === void 0 ? _padding[i - 1] : $padding[i], _space[i] = $space[i] === void 0 ? _space[i - 1] : $space[i];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, _padding, (_, i)=>{
        let size = font.text.sizes[_fontSize[i]] || font.text.sizes[2], emSize = size.lineHeight - size.ascenderHeight - size.descenderHeight, p = space[_padding[i]], s = space[_space[i]], styles = {
            paddingTop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p - size.ascenderHeight),
            paddingRight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p),
            paddingBottom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p - size.descenderHeight),
            paddingLeft: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p)
        };
        return $iconRight && (styles.paddingRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p + emSize + s)), $iconLeft && (styles.paddingLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(p + emSize + s)), styles;
    });
}
function responsiveInputPaddingIconRightStyle(props) {
    return responsiveInputPaddingStyle({
        ...props,
        $iconRight: !0
    });
}
const textInputBaseStyle = css`appearance:none;background:none;border:0;border-radius:0;outline:none;width:100%;box-sizing:border-box;margin:0;position:relative;z-index:1;display:block;&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-text-fill-color:var(--input-fg-color) !important;transition:background-color 5000s;transition-delay:86400s;}&[data-as='textarea']{resize:none;}color:var(--input-fg-color);&::placeholder{color:var(--input-placeholder-color);}`;
function textInputColorStyle(props) {
    let { $scheme, $tone } = props, { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`&[data-scheme='${$scheme}'][data-tone='${$tone}']{--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};&:not(:invalid):not(:disabled):not(:read-only){--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};}&:not(:invalid):disabled{--input-fg-color:${color.input.default.disabled.fg};--input-placeholder-color:${color.input.default.disabled.placeholder};}&:invalid{--input-fg-color:${color.input.invalid.enabled.fg};--input-placeholder-color:${color.input.invalid.enabled.placeholder};}&:read-only{--input-fg-color:${color.input.default.readOnly.fg};--input-placeholder-color:${color.input.default.readOnly.placeholder};}}`;
}
function textInputFontStyle(props) {
    let { $weight } = props, { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return {
        fontFamily: font.text.family,
        fontWeight: `${$weight && font.text.weights[$weight] || font.text.weights.regular}`
    };
}
function textInputFontSizeStyle(props) {
    let { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$fontSize, (sizeIndex)=>{
        let size = font.text.sizes[sizeIndex] || font.text.sizes[2];
        return {
            fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size.fontSize),
            lineHeight: `${size.lineHeight / size.fontSize}`
        };
    });
}
function textInputRepresentationStyle(props) {
    let { $hasPrefix, $hasSuffix } = props;
    return css`--input-box-shadow:none;position:absolute;top:0;left:0;right:0;bottom:0;display:block;pointer-events:none;z-index:0;background-color:var(--card-bg-color);box-shadow:var(--input-box-shadow);border-top-left-radius:${$hasPrefix ? 0 : void 0};border-bottom-left-radius:${$hasPrefix ? 0 : void 0};border-top-right-radius:${$hasSuffix ? 0 : void 0};border-bottom-right-radius:${$hasSuffix ? 0 : void 0};`;
}
function textInputRepresentationColorStyle(props) {
    let { $scheme, $tone, $unstableDisableFocusRing } = props, { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`&[data-scheme='${$scheme}'][data-tone='${$tone}']{--card-bg-color:${color.input.default.enabled.bg};--card-fg-color:${color.input.default.enabled.fg};*:not(:disabled) + &[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};}*:not(:disabled):invalid + &{--card-bg-color:${color.input.invalid.enabled.bg};--card-fg-color:${color.input.invalid.enabled.fg};&[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.invalid.enabled.border,
        width: input.border.width
    })};}}*:not(:disabled):focus + &{&[data-border]{--input-box-shadow:${$unstableDisableFocusRing ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        border: {
            color: color.input.default.enabled.border,
            width: input.border.width
        },
        focusRing: input.text.focusRing
    })};}&:not([data-border]){--input-box-shadow:${$unstableDisableFocusRing ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        focusRing: input.text.focusRing
    })};}}*:not(:invalid):disabled + &{--card-bg-color:${color.input.default.disabled.bg} !important;--card-fg-color:${color.input.default.disabled.fg} !important;--card-icon-color:${color.input.default.disabled.fg} !important;&[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.disabled.border,
        width: input.border.width
    })};}}*:invalid:disabled + &{--card-bg-color:${color.input.invalid.disabled.bg} !important;--card-fg-color:${color.input.invalid.disabled.fg} !important;--card-icon-color:${color.input.invalid.disabled.fg} !important;&[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.invalid.disabled.border,
        width: input.border.width
    })};}}*:not(:invalid):read-only + &{--card-bg-color:${color.input.default.readOnly.bg} !important;--card-fg-color:${color.input.default.readOnly.fg} !important;}*:invalid:read-only + &{--card-bg-color:${color.input.invalid.readOnly.bg} !important;--card-fg-color:${color.input.invalid.readOnly.fg} !important;}@media (hover:hover){*:not(:disabled):not(:read-only):not(:invalid):hover + &{--card-bg-color:${color.input.default.hovered.bg};--card-fg-color:${color.input.default.hovered.fg};}*:invalid:not(:disabled):not(:read-only):hover + &{--card-bg-color:${color.input.invalid.hovered.bg};--card-fg-color:${color.input.invalid.hovered.fg};}*:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.hovered.border,
        width: input.border.width
    })};}*:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border]{--input-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.invalid.hovered.border,
        width: input.border.width
    })};}}}`;
}
const textAreaRoot = "u-fAtomh u-djbxbl", inputRoot = "u-krAvjf u-kdFIjO u-iDEBOB u-emPzDJ", CLEAR_BUTTON_BOX_STYLE = {
    zIndex: 2
}, Prefix = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]).attrs({
    forwardedAs: "span"
}).withConfig({
    displayName: "Prefix",
    componentId: "sc-j9wa1r-0"
})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`, Suffix = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]).attrs({
    forwardedAs: "span"
}).withConfig({
    displayName: "Suffix",
    componentId: "sc-j9wa1r-1"
})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`, InputBase = styled.input.withConfig({
    displayName: "InputBase",
    componentId: "sc-j9wa1r-2"
})`${textInputBaseStyle}`, Input = /* @__PURE__ */ styled(/* @__PURE__ */ styled(InputBase).withConfig({
    displayName: "InputColor",
    componentId: "sc-j9wa1r-3"
})(textInputColorStyle)).withConfig({
    displayName: "Input",
    componentId: "sc-j9wa1r-4"
})(responsiveInputPaddingStyle, textInputFontStyle, textInputFontSizeStyle), Presentation = /* @__PURE__ */ styled(/* @__PURE__ */ styled.span.withConfig({
    displayName: "PresentationColor",
    componentId: "sc-j9wa1r-5"
})(textInputRepresentationColorStyle)).withConfig({
    displayName: "Presentation",
    componentId: "sc-j9wa1r-6"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], textInputRepresentationStyle), RightCard = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]).withConfig({
    displayName: "RightCard",
    componentId: "sc-j9wa1r-7"
})`background-color:transparent;position:absolute;top:0;right:0;`;
/**
* Single line text input.
*
* @public
*/ function TextInput(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(93), IconComponent, IconRightComponent, __unstable_disableFocusRing, clearButton, customValidity, forwardedRef, onClear, prefix, readOnly, restProps, suffix, t0, t1, t2, t3, t4, t5, t6, weight;
    $[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], __unstable_disableFocusRing = $[3], clearButton = $[4], customValidity = $[5], forwardedRef = $[6], onClear = $[7], prefix = $[8], readOnly = $[9], restProps = $[10], suffix = $[11], t0 = $[12], t1 = $[13], t2 = $[14], t3 = $[15], t4 = $[16], t5 = $[17], t6 = $[18], weight = $[19]) : ({ __unstable_disableFocusRing, border: t0, clearButton, disabled: t1, fontSize: t2, gap: t3, icon: IconComponent, iconRight: IconRightComponent, onClear, padding: t4, prefix, radius: t5, readOnly, ref: forwardedRef, suffix, customValidity, type: t6, weight, ...restProps } = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = __unstable_disableFocusRing, $[4] = clearButton, $[5] = customValidity, $[6] = forwardedRef, $[7] = onClear, $[8] = prefix, $[9] = readOnly, $[10] = restProps, $[11] = suffix, $[12] = t0, $[13] = t1, $[14] = t2, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = weight);
    let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSizeProp = t2 === void 0 ? 2 : t2, gap = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, radiusProp = t5 === void 0 ? 2 : t5, type = t6 === void 0 ? "text" : t6, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), rootTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(), t7;
    $[20] === fontSizeProp ? t7 = $[21] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(fontSizeProp), $[20] = fontSizeProp, $[21] = t7);
    let fontSize = t7, t8;
    $[22] === paddingProp ? t8 = $[23] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingProp), $[22] = paddingProp, $[23] = t8);
    let padding = t8, t9;
    $[24] === radiusProp ? t9 = $[25] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radiusProp), $[24] = radiusProp, $[25] = t9);
    let radius = t9, t10;
    $[26] === gap ? t10 = $[27] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[26] = gap, $[27] = t10);
    let space = t10, $hasClearButton = !!clearButton, $hasIcon = !!IconComponent, $hasIconRight = !!IconRightComponent, $hasSuffix = !!suffix, $hasPrefix = !!prefix, t11;
    $[28] === Symbol.for("react.memo_cache_sentinel") ? (t11 = ()=>ref.current, $[28] = t11) : t11 = $[28], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t11), useCustomValidity(ref, customValidity);
    let handleClearMouseDown = _temp, t12;
    $[29] === onClear ? t12 = $[30] : (t12 = (event_0)=>{
        event_0.preventDefault(), event_0.stopPropagation(), onClear && onClear(), ref.current?.focus();
    }, $[29] = onClear, $[30] = t12);
    let handleClearClick = t12, t13;
    $[31] !== prefix || $[32] !== radius ? (t13 = prefix && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Prefix, {
        borderTop: !0,
        borderLeft: !0,
        borderBottom: !0,
        radius,
        sizing: "border",
        tone: "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children: prefix
        })
    }), $[31] = prefix, $[32] = radius, $[33] = t13) : t13 = $[33];
    let prefixNode = t13, t14 = border ? "" : void 0, t15;
    $[34] !== IconComponent || $[35] !== fontSize || $[36] !== padding ? (t15 = IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: "u-kiKDyH u-lhPceK u-qbeer",
        padding,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
            size: fontSize,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
            ]
        })
    }), $[34] = IconComponent, $[35] = fontSize, $[36] = padding, $[37] = t15) : t15 = $[37];
    let t16;
    $[38] !== $hasClearButton || $[39] !== IconRightComponent || $[40] !== fontSize || $[41] !== padding ? (t16 = !$hasClearButton && IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: "u-lhPceK u-hWgptE u-qbeer",
        padding,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
            size: fontSize,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
            ]
        })
    }), $[38] = $hasClearButton, $[39] = IconRightComponent, $[40] = fontSize, $[41] = padding, $[42] = t16) : t16 = $[42];
    let t17;
    $[43] !== $hasPrefix || $[44] !== $hasSuffix || $[45] !== __unstable_disableFocusRing || $[46] !== radius || $[47] !== rootTheme.scheme || $[48] !== rootTheme.tone || $[49] !== t14 || $[50] !== t15 || $[51] !== t16 ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Presentation, {
        $hasPrefix,
        $unstableDisableFocusRing: __unstable_disableFocusRing,
        $hasSuffix,
        $radius: radius,
        $scheme: rootTheme.scheme,
        $tone: rootTheme.tone,
        "data-border": t14,
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone,
        "data-ui": "TextInput__presentation",
        children: [
            t15,
            t16
        ]
    }), $[43] = $hasPrefix, $[44] = $hasSuffix, $[45] = __unstable_disableFocusRing, $[46] = radius, $[47] = rootTheme.scheme, $[48] = rootTheme.tone, $[49] = t14, $[50] = t15, $[51] = t16, $[52] = t17) : t17 = $[52];
    let presentationNode = t17, t18;
    $[53] === padding ? t18 = $[54] : (t18 = padding.map(_temp2), $[53] = padding, $[54] = t18);
    let clearButtonBoxPadding = t18, t19;
    $[55] === padding ? t19 = $[56] : (t19 = padding.map(_temp3), $[55] = padding, $[56] = t19);
    let clearButtonPadding = t19, clearButtonProps = typeof clearButton == "object" ? clearButton : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"], t20;
    $[57] !== clearButton || $[58] !== clearButtonBoxPadding || $[59] !== clearButtonPadding || $[60] !== clearButtonProps || $[61] !== customValidity || $[62] !== disabled || $[63] !== fontSize || $[64] !== handleClearClick || $[65] !== radius || $[66] !== readOnly ? (t20 = !disabled && !readOnly && clearButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RightCard, {
        forwardedAs: "span",
        padding: clearButtonBoxPadding,
        style: CLEAR_BUTTON_BOX_STYLE,
        tone: customValidity ? "critical" : "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
            "aria-label": "Clear",
            "data-qa": "clear-button",
            fontSize,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"],
            mode: "bleed",
            padding: clearButtonPadding,
            radius,
            ...clearButtonProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-gIVJpv", clearButtonProps.className),
            onClick: handleClearClick,
            onMouseDown: handleClearMouseDown
        })
    }), $[57] = clearButton, $[58] = clearButtonBoxPadding, $[59] = clearButtonPadding, $[60] = clearButtonProps, $[61] = customValidity, $[62] = disabled, $[63] = fontSize, $[64] = handleClearClick, $[65] = radius, $[66] = readOnly, $[67] = t20) : t20 = $[67];
    let clearButtonNode = t20, t21;
    $[68] !== radius || $[69] !== suffix ? (t21 = suffix && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Suffix, {
        borderTop: !0,
        borderRight: !0,
        borderBottom: !0,
        radius,
        sizing: "border",
        tone: "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children: suffix
        })
    }), $[68] = radius, $[69] = suffix, $[70] = t21) : t21 = $[70];
    let suffixNode = t21, t22 = $hasIconRight || $hasClearButton, t23;
    $[71] !== $hasIcon || $[72] !== disabled || $[73] !== fontSize || $[74] !== padding || $[75] !== readOnly || $[76] !== restProps || $[77] !== rootTheme.scheme || $[78] !== rootTheme.tone || $[79] !== space || $[80] !== t22 || $[81] !== type || $[82] !== weight ? (t23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Input, {
        "data-as": "input",
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone,
        "data-ui": "TextInput__input",
        ...restProps,
        $fontSize: fontSize,
        $iconLeft: $hasIcon,
        $iconRight: t22,
        $padding: padding,
        $scheme: rootTheme.scheme,
        $space: space,
        $tone: rootTheme.tone,
        $weight: weight,
        disabled,
        readOnly,
        ref,
        type
    }), $[71] = $hasIcon, $[72] = disabled, $[73] = fontSize, $[74] = padding, $[75] = readOnly, $[76] = restProps, $[77] = rootTheme.scheme, $[78] = rootTheme.tone, $[79] = space, $[80] = t22, $[81] = type, $[82] = weight, $[83] = t23) : t23 = $[83];
    let t24;
    $[84] !== clearButtonNode || $[85] !== presentationNode || $[86] !== t23 ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: inputRoot,
        children: [
            t23,
            presentationNode,
            clearButtonNode
        ]
    }), $[84] = clearButtonNode, $[85] = presentationNode, $[86] = t23, $[87] = t24) : t24 = $[87];
    let t25;
    return $[88] !== prefixNode || $[89] !== rootTheme.tone || $[90] !== suffixNode || $[91] !== t24 ? (t25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"], {
        as: "span",
        className: "u-fAtomh",
        "data-ui": "TextInput",
        display: "flex",
        tone: rootTheme.tone,
        children: [
            prefixNode,
            t24,
            suffixNode
        ]
    }), $[88] = prefixNode, $[89] = rootTheme.tone, $[90] = suffixNode, $[91] = t24, $[92] = t25) : t25 = $[92], t25;
}
function _temp3(v_0) {
    return v_0 === 0 || v_0 === 1 ? 0 : v_0 === 2 ? 1 : v_0 - 1;
}
function _temp2(v) {
    return v === 0 ? 0 : v === 1 || v === 2 ? 1 : v - 2;
}
function _temp(event) {
    event.preventDefault(), event.stopPropagation();
}
;
 //# sourceMappingURL=textInput-DhYi5cPT.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/elementSizeObserver-pevZfdGa.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
* @internal
*/ __turbopack_context__.s({
    "t": (()=>_elementSizeObserver)
});
const _elementSizeObserver = _createElementSizeObserver();
function _createElementRectValueListener() {
    return {
        subscribe (element, subscriber) {
            let resizeObserver = new ResizeObserver(([entry])=>{
                subscriber({
                    _contentRect: entry.contentRect,
                    border: {
                        width: entry.borderBoxSize[0].inlineSize,
                        height: entry.borderBoxSize[0].blockSize
                    },
                    content: {
                        width: entry.contentRect.width,
                        height: entry.contentRect.height
                    }
                });
            });
            return resizeObserver.observe(element), ()=>{
                resizeObserver.unobserve(element), resizeObserver.disconnect();
            };
        }
    };
}
function _createElementSizeObserver() {
    let disposeCache = /* @__PURE__ */ new WeakMap(), subscribersCache = /* @__PURE__ */ new WeakMap();
    return {
        subscribe (element, subscriber) {
            let subscribers = subscribersCache.get(element);
            if (!subscribers) {
                let currentSubscribers = [];
                subscribers = currentSubscribers, subscribersCache.set(element, subscribers);
                let listener = _createElementRectValueListener();
                disposeCache.set(element, listener.subscribe(element, (elementRect)=>{
                    for (let sub of currentSubscribers)sub(elementRect);
                }));
            }
            return subscribers.push(subscriber), ()=>{
                let idx = subscribers.indexOf(subscriber);
                idx > -1 && subscribers.splice(idx, 1), subscribers.length === 0 && subscribersCache.get(element) === subscribers && (disposeCache.get(element)?.(), disposeCache.delete(element), subscribersCache.delete(element));
            };
        }
    };
}
;
 //# sourceMappingURL=elementSizeObserver-pevZfdGa.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/arrow-CleOpGKV.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>resolvePortalElement),
    "i": (()=>PortalContext),
    "n": (()=>Portal),
    "o": (()=>useBoundaryElement),
    "r": (()=>usePortal),
    "s": (()=>BoundaryElementContext),
    "t": (()=>Arrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const BoundaryElementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/boundaryElement", null), DEFAULT_VALUE = {
    version: 0,
    element: null
};
/**
* @public
*/ function useBoundaryElement() {
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BoundaryElementContext);
    if (value && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(value) || value.version !== 0)) throw Error("useBoundaryElement(): the context value is not compatible");
    return value || DEFAULT_VALUE;
}
/**
* The element a `Portal` renders into: the named element when `name` is given, otherwise the
* context's element, falling back to the `default` named element in both cases.
*
* Components that reason about the portal element (the tooltip caps its width to it, the dialog
* scopes its click-outside and focus handling to it) resolve it through this function as well, so
* they cannot disagree with where the portal content ends up.
*/ function resolvePortalElement(portal, name) {
    return (name ? portal.elements?.[name] : portal.element) || portal.elements?.default || null;
}
const key = "@sanity/ui/context/portal", elementKey = Symbol.for(`${key}/element`);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey] = null;
const PortalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(key, {
    version: 0,
    boundaryElement: null,
    get element () {
        return typeof document > "u" ? null : (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey] || (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey] = document.createElement("div"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey].setAttribute("data-portal", ""), document.body.appendChild(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey])), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"][elementKey]);
    }
});
/**
* @public
*/ function usePortal() {
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PortalContext);
    if (!value) throw Error("usePortal(): missing context value");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(value) || value.version !== 0) throw Error("usePortal(): the context value is not compatible");
    return value;
}
/**
* @public
*/ function Portal(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5), { children, __unstable_name: name } = props, portal = usePortal(), t0, t1;
    if ($[0] !== children || $[1] !== name || $[2] !== portal) {
        t1 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let portalElement = resolvePortalElement(portal, name);
            if (!portalElement) {
                t1 = null;
                break bb0;
            }
            t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(children, portalElement);
        }
        $[0] = children, $[1] = name, $[2] = portal, $[3] = t0, $[4] = t1;
    } else t0 = $[3], t1 = $[4];
    return t1 === Symbol.for("react.early_return_sentinel") ? t0 : t1;
}
function moveTowardsLength(movingPoint, targetPoint, amount) {
    let width = targetPoint.x - movingPoint.x, height = targetPoint.y - movingPoint.y, distance = Math.sqrt(width * width + height * height);
    return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
}
function moveTowardsFractional(movingPoint, targetPoint, fraction) {
    return {
        x: movingPoint.x + (targetPoint.x - movingPoint.x) * fraction,
        y: movingPoint.y + (targetPoint.y - movingPoint.y) * fraction
    };
}
function getRoundedCommands(points) {
    let len = points.length, cmds = [];
    for(let i = 0; i < len; i += 1){
        let point = points[i], prevPoint = points[i - 1], nextPoint = points[i + 1];
        if (prevPoint && point.radius) {
            let curveStart = moveTowardsLength(point, prevPoint, point.radius), curveEnd = moveTowardsLength(point, nextPoint, point.radius), startControl = moveTowardsFractional(curveStart, point, .5), endControl = moveTowardsFractional(point, curveEnd, .5);
            cmds.push({
                type: "point",
                ...curveStart
            }), cmds.push({
                type: "curve",
                curveEnd,
                startControl,
                endControl
            });
        } else cmds.push({
            type: "point",
            ...point
        });
    }
    return cmds;
}
function compileCommands(cmds) {
    return cmds.map((n, idx)=>n.type === "point" ? `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}` : n.type === "curve" ? `C ${n.startControl.x} ${n.startControl.y} ${n.endControl.x} ${n.endControl.y} ${n.curveEnd.x} ${n.curveEnd.y}` : "").join(" ");
}
/** @internal */ function Arrow(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(42), className, h, ref, restProps, style, t0, w;
    $[0] === props ? (className = $[1], h = $[2], ref = $[3], restProps = $[4], style = $[5], t0 = $[6], w = $[7]) : ({ className, width: w, height: h, radius: t0, ref, style, ...restProps } = props, $[0] = props, $[1] = className, $[2] = h, $[3] = ref, $[4] = restProps, $[5] = style, $[6] = t0, $[7] = w);
    let radius = t0 === void 0 ? 0 : t0, { card } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), strokeMaskId = `stroke-mask-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])()}`, strokeWidth = card.shadow.outline, center = w / 2, t1;
    $[8] !== center || $[9] !== h || $[10] !== radius || $[11] !== w ? (t1 = compileCommands(getRoundedCommands([
        {
            x: 0,
            y: 0
        },
        {
            x: radius,
            y: 0,
            radius
        },
        {
            x: center,
            y: h - 1,
            radius
        },
        {
            x: w - radius,
            y: 0,
            radius
        },
        {
            x: w,
            y: 0
        }
    ])), $[8] = center, $[9] = h, $[10] = radius, $[11] = w, $[12] = t1) : t1 = $[12];
    let path = t1, strokePath = `${path}`, fillPath = `${path} M ${w} -1 M 0 -1 Z`, t2;
    $[13] === className ? t2 = $[14] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-cXkSBu u-lhPceK u-dxAhXf u-jNWDtd u-fDskaq u-czwhQE u-kWaIza u-ejXzrG u-ePAzun u-iDWtIJ u-gQimFy u-dhENJV u-cwZwVg u-elNbcS u-hIhfXc", className), $[13] = className, $[14] = t2);
    let t3 = `${w}px`, t4;
    $[15] !== style || $[16] !== t3 ? (t4 = {
        ...style,
        "--arrow-size": t3
    }, $[15] = style, $[16] = t3, $[17] = t4) : t4 = $[17];
    let t5 = t4, t6 = `0 0 ${w} ${w}`, t7;
    $[18] !== strokeWidth || $[19] !== w ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("rect", {
        x: 0,
        y: strokeWidth,
        width: w,
        height: w,
        fill: "white"
    }), $[18] = strokeWidth, $[19] = w, $[20] = t7) : t7 = $[20];
    let t8;
    $[21] !== strokeMaskId || $[22] !== t7 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("mask", {
        id: strokeMaskId,
        children: t7
    }), $[21] = strokeMaskId, $[22] = t7, $[23] = t8) : t8 = $[23];
    let t9 = `url(#${strokeMaskId})`, t10 = strokeWidth * 2, t11;
    $[24] !== strokePath || $[25] !== t10 || $[26] !== t9 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
        className: "u-duAXIW",
        d: strokePath,
        mask: t9,
        strokeWidth: t10
    }), $[24] = strokePath, $[25] = t10, $[26] = t9, $[27] = t11) : t11 = $[27];
    let t12;
    $[28] === fillPath ? t12 = $[29] : (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
        className: "u-iPpIdb",
        d: fillPath
    }), $[28] = fillPath, $[29] = t12);
    let t13;
    $[30] !== t11 || $[31] !== t12 || $[32] !== t6 || $[33] !== t8 || $[34] !== w ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        width: w,
        height: w,
        viewBox: t6,
        children: [
            t8,
            t11,
            t12
        ]
    }), $[30] = t11, $[31] = t12, $[32] = t6, $[33] = t8, $[34] = w, $[35] = t13) : t13 = $[35];
    let t14;
    return $[36] !== ref || $[37] !== restProps || $[38] !== t13 || $[39] !== t2 || $[40] !== t5 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-ui": "Arrow",
        ...restProps,
        className: t2,
        ref,
        style: t5,
        children: t13
    }), $[36] = ref, $[37] = restProps, $[38] = t13, $[39] = t2, $[40] = t5, $[41] = t14) : t14 = $[41], t14;
}
;
 //# sourceMappingURL=arrow-CleOpGKV.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useClickOutsideEvent-CC1zgOmv.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "t": (()=>useClickOutsideEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-effect-event/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
* @public
*/ function useClickOutsideEvent(listener, t0, boundaryElement) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9), elementsArg = t0 === void 0 ? _temp : t0, t1;
    $[0] !== boundaryElement || $[1] !== elementsArg || $[2] !== listener ? (t1 = (evt)=>{
        if (!listener) return;
        let target = evt.target;
        if (!(target instanceof Node)) return;
        let resolvedBoundaryElement = boundaryElement?.();
        if (resolvedBoundaryElement && !resolvedBoundaryElement.contains(target)) return;
        let elements = elementsArg().flat();
        for (let el of elements)if (el && (target === el || el.contains(target))) return;
        listener(evt);
    }, $[0] = boundaryElement, $[1] = elementsArg, $[2] = listener, $[3] = t1) : t1 = $[3];
    let onEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(t1), hasListener = !!listener, t2;
    $[4] !== hasListener || $[5] !== onEvent ? (t2 = ()=>{
        if (!hasListener) return;
        let handleEvent = (evt_0)=>onEvent(evt_0);
        return document.addEventListener("mousedown", handleEvent), ()=>{
            document.removeEventListener("mousedown", handleEvent);
        };
    }, $[4] = hasListener, $[5] = onEvent, $[6] = t2) : t2 = $[6];
    let t3;
    $[7] === hasListener ? t3 = $[8] : (t3 = [
        hasListener
    ], $[7] = hasListener, $[8] = t3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(listener ? "MouseDown On" : "MouseDown Off");
}
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"];
}
;
 //# sourceMappingURL=useClickOutsideEvent-CC1zgOmv.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/factory-BzXTX8_Q.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>COLOR_CONFIG_STATE_TONES),
    "B": (()=>THEME_COLOR_INPUT_STATES),
    "C": (()=>COLOR_CONFIG_BLEND_KEYS),
    "D": (()=>COLOR_CONFIG_INPUT_STATES),
    "E": (()=>COLOR_CONFIG_INPUT_MODES),
    "F": (()=>THEME_COLOR_AVATAR_COLORS),
    "H": (()=>THEME_COLOR_STATES),
    "I": (()=>THEME_COLOR_BLEND_MODES),
    "L": (()=>THEME_COLOR_BUTTON_MODES),
    "M": (()=>isColorButtonMode),
    "N": (()=>isColorHueKey),
    "O": (()=>COLOR_CONFIG_STATES),
    "P": (()=>isColorTintKey),
    "R": (()=>THEME_COLOR_CARD_TONES),
    "S": (()=>COLOR_CONFIG_AVATAR_COLORS),
    "T": (()=>COLOR_CONFIG_CARD_TONES),
    "U": (()=>THEME_COLOR_STATE_TONES),
    "V": (()=>THEME_COLOR_SCHEMES),
    "_": (()=>isColorConfigStateKey),
    "a": (()=>rgba),
    "b": (()=>isColorTokenValue),
    "c": (()=>hslToRgb),
    "d": (()=>rgbaToRGBA),
    "f": (()=>mix),
    "g": (()=>isColorConfigBlendKey),
    "h": (()=>isColorConfigBaseTone),
    "i": (()=>multiply),
    "j": (()=>isColorBlendModeValue),
    "k": (()=>COLOR_CONFIG_STATE_KEYS),
    "l": (()=>rgbToHex),
    "m": (()=>isColorConfigBaseKey),
    "n": (()=>buildTheme),
    "o": (()=>parseColor),
    "p": (()=>parseTokenValue),
    "r": (()=>screen),
    "s": (()=>hexToRgb),
    "t": (()=>createColorTheme),
    "u": (()=>rgbToHsl),
    "v": (()=>isColorConfigStateTone),
    "w": (()=>COLOR_CONFIG_CARD_KEYS),
    "x": (()=>isColorValue),
    "y": (()=>isColorOpacityValue),
    "z": (()=>THEME_COLOR_INPUT_MODES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getScopedTheme-C-sZsyAz.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/color/dist/index.js [app-ssr] (ecmascript)");
;
;
;
const defaultThemeFonts = {
    code: {
        family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
        weights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        sizes: [
            {
                ascenderHeight: 4,
                descenderHeight: 4,
                fontSize: 10,
                iconSize: 17,
                lineHeight: 15,
                letterSpacing: 0
            },
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 21,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 16,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 19,
                iconSize: 29,
                lineHeight: 27,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 22,
                iconSize: 33,
                lineHeight: 31,
                letterSpacing: 0
            }
        ]
    },
    heading: {
        family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
        weights: {
            regular: 700,
            medium: 800,
            semibold: 900,
            bold: 900
        },
        sizes: [
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 17,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 16,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 21,
                iconSize: 33,
                lineHeight: 29,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 27,
                iconSize: 41,
                lineHeight: 35,
                letterSpacing: 0
            },
            {
                ascenderHeight: 9.5,
                descenderHeight: 8.5,
                fontSize: 33,
                iconSize: 49,
                lineHeight: 41,
                letterSpacing: 0
            },
            {
                ascenderHeight: 10.5,
                descenderHeight: 9.5,
                fontSize: 38,
                iconSize: 53,
                lineHeight: 47,
                letterSpacing: 0
            }
        ]
    },
    label: {
        family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", system-ui, sans-serif",
        weights: {
            regular: 600,
            medium: 700,
            semibold: 800,
            bold: 900
        },
        sizes: [
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 8.1,
                iconSize: 13,
                lineHeight: 10,
                letterSpacing: .5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 9.5,
                iconSize: 15,
                lineHeight: 11,
                letterSpacing: .5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 10.8,
                iconSize: 17,
                lineHeight: 12,
                letterSpacing: .5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 12.25,
                iconSize: 19,
                lineHeight: 13,
                letterSpacing: .5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 13.6,
                iconSize: 21,
                lineHeight: 14,
                letterSpacing: .5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 15,
                iconSize: 23,
                lineHeight: 15,
                letterSpacing: .5
            }
        ]
    },
    text: {
        family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
        weights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        sizes: [
            {
                ascenderHeight: 4,
                descenderHeight: 4,
                fontSize: 10,
                iconSize: 17,
                lineHeight: 15,
                letterSpacing: 0
            },
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 21,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 15,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 18,
                iconSize: 29,
                lineHeight: 27,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 21,
                iconSize: 33,
                lineHeight: 31,
                letterSpacing: 0
            }
        ]
    }
}, THEME_COLOR_SCHEMES = [
    "light",
    "dark"
], THEME_COLOR_BLEND_MODES = [
    "multiply",
    "screen"
], THEME_COLOR_CARD_TONES = [
    "transparent",
    "default",
    "neutral",
    "primary",
    "suggest",
    "positive",
    "caution",
    "critical"
], THEME_COLOR_STATE_TONES = [
    "default",
    "neutral",
    "primary",
    "suggest",
    "positive",
    "caution",
    "critical"
], THEME_COLOR_STATES = [
    "enabled",
    "hovered",
    "pressed",
    "selected",
    "disabled"
], THEME_COLOR_BUTTON_MODES = [
    "default",
    "ghost",
    "bleed"
], THEME_COLOR_INPUT_MODES = [
    "default",
    "invalid"
], THEME_COLOR_INPUT_STATES = [
    "enabled",
    "hovered",
    "readOnly",
    "disabled"
], THEME_COLOR_AVATAR_COLORS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"];
/** @internal */ function isColorBlendModeValue(str) {
    return THEME_COLOR_BLEND_MODES.includes(str);
}
/** @internal */ function isColorHueKey(str) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"].includes(str);
}
/** @internal */ function isColorTintKey(str) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_TINTS"].includes(str);
}
/** @internal */ function isColorButtonMode(str) {
    return THEME_COLOR_BUTTON_MODES.includes(str);
}
/** @public */ const COLOR_CONFIG_STATE_KEYS = [
    "_hue",
    "bg",
    "fg",
    "border",
    "focusRing",
    "muted/fg",
    "accent/fg",
    "link/fg",
    "code/bg",
    "code/fg",
    "skeleton/from",
    "skeleton/to",
    "status/dot",
    "status/icon"
], COLOR_CONFIG_CARD_KEYS = [
    ...COLOR_CONFIG_STATE_KEYS,
    "_hue",
    "bg",
    "fg",
    "border",
    "focusRing",
    "shadow/outline",
    "shadow/umbra",
    "shadow/penumbra",
    "shadow/ambient"
], COLOR_CONFIG_BLEND_KEYS = [
    "_blend"
], COLOR_CONFIG_AVATAR_COLORS = [
    "*",
    ...THEME_COLOR_AVATAR_COLORS
], COLOR_CONFIG_CARD_TONES = [
    "*",
    ...THEME_COLOR_CARD_TONES
], COLOR_CONFIG_STATE_TONES = [
    "*",
    ...THEME_COLOR_STATE_TONES
], COLOR_CONFIG_STATES = [
    "*",
    ...THEME_COLOR_STATES
], COLOR_CONFIG_INPUT_MODES = [
    "*",
    ...THEME_COLOR_INPUT_MODES
], COLOR_CONFIG_INPUT_STATES = [
    "*",
    ...THEME_COLOR_INPUT_STATES
];
/** @internal */ function isColorConfigBaseTone(str) {
    return COLOR_CONFIG_CARD_TONES.includes(str);
}
/** @internal */ function isColorConfigBaseKey(str) {
    return COLOR_CONFIG_CARD_KEYS.includes(str);
}
/** @internal */ function isColorConfigStateKey(str) {
    return COLOR_CONFIG_STATE_KEYS.includes(str);
}
/** @internal */ function isColorConfigStateTone(str) {
    return COLOR_CONFIG_STATE_TONES.includes(str);
}
/** @internal */ function isColorConfigBlendKey(str) {
    return COLOR_CONFIG_BLEND_KEYS.includes(str);
}
/** @internal */ function isColorTokenValue(str) {
    return parseTokenValue(str)?.type === "color" || parseTokenValue(str)?.type === "hue";
}
/** @internal */ function isColorValue(str) {
    return str === "black" || str === "white";
}
/** @internal */ function isColorOpacityValue(str) {
    return str === "0" || /^0\.[0-9]+$/.test(str) || str === "1";
}
function isColorMixPercentValue(str) {
    return /^\d+%$/.test(str);
}
/** @internal */ function parseTokenValue(str) {
    let segments = str.split("/"), nextSegment = segments.shift() || "", [segment0, segment0mix] = nextSegment.split(" ");
    if (isColorTintKey(segment0)) {
        let tint = segment0, segment1 = segments.shift() || "";
        return isColorMixPercentValue(segment0mix) ? {
            type: "color",
            tint,
            mix: Number(segment0mix.slice(0, -1)) / 100
        } : isColorOpacityValue(segment1) ? {
            type: "color",
            tint,
            opacity: Number(segment1)
        } : {
            type: "color",
            tint
        };
    }
    if (isColorValue(segment0)) {
        let key = segment0, segment1 = segments.shift() || "";
        return isColorMixPercentValue(segment0mix) ? {
            type: "color",
            key,
            mix: Number(segment0mix.slice(0, -1)) / 100
        } : isColorOpacityValue(segment1) ? {
            type: "color",
            key,
            opacity: Number(segment1)
        } : {
            type: "color",
            key
        };
    }
    if (isColorHueKey(segment0)) {
        let hue = segment0;
        nextSegment = segments.shift() || "";
        let [segment1, segment1mix] = nextSegment.split(" ");
        if (isColorTintKey(segment1)) {
            let tint = segment1, segment2 = segments.shift() || "";
            return isColorMixPercentValue(segment1mix) ? {
                type: "color",
                hue,
                tint,
                mix: Number(segment1mix.slice(0, -1)) / 100
            } : isColorOpacityValue(segment2) ? {
                type: "color",
                hue,
                tint,
                opacity: Number(segment2)
            } : {
                type: "color",
                hue,
                tint
            };
        }
        return {
            type: "hue",
            value: hue
        };
    }
    if (isColorBlendModeValue(segment0)) return {
        type: "blendMode",
        value: segment0
    };
}
function compileColorTokenValue(node) {
    let key = "";
    return key = node.key === "black" || node.key === "white" ? node.key : `${node.hue}/${node.tint}`, node.mix === void 0 ? (node.opacity !== void 0 && (key += `/${node.opacity}`), key) : `${key} ${node.mix * 100}%`;
}
const DEFAULT_COLOR_TOKEN_VALUE = [
    "500",
    "500"
];
function resolveColorTokenValue(context, value = DEFAULT_COLOR_TOKEN_VALUE) {
    let { hue, scheme } = context, node = parseTokenValue(value[scheme === "light" ? 0 : 1]);
    if (!node || node.type !== "color") throw Error(`Invalid color token: ${value[0]}`);
    return compileColorTokenValue({
        ...node,
        hue: node.hue || hue
    });
}
const defaultColorTokens = {
    base: {
        "*": {
            _blend: [
                "multiply",
                "screen"
            ],
            accent: {
                fg: [
                    "purple/600",
                    "purple/400"
                ]
            },
            avatar: {
                "*": {
                    _blend: [
                        "screen",
                        "multiply"
                    ],
                    bg: [
                        "500",
                        "400"
                    ],
                    fg: [
                        "white",
                        "black"
                    ]
                }
            },
            backdrop: [
                "gray/200/0.5",
                "black/0.5"
            ],
            badge: {
                "*": {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "600",
                        "400"
                    ],
                    icon: [
                        "500",
                        "500"
                    ],
                    dot: [
                        "500",
                        "500"
                    ]
                },
                positive: {
                    bg: [
                        "200 50%",
                        "900"
                    ],
                    fg: [
                        "600",
                        "500"
                    ]
                },
                caution: {
                    bg: [
                        "200 50%",
                        "900"
                    ],
                    fg: [
                        "600",
                        "500"
                    ]
                }
            },
            bg: [
                "50",
                "950"
            ],
            border: [
                "200",
                "800"
            ],
            code: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "600",
                    "400"
                ]
            },
            fg: [
                "800",
                "200"
            ],
            focusRing: [
                "blue/500",
                "blue/500"
            ],
            icon: [
                "600",
                "400"
            ],
            kbd: {
                bg: [
                    "white",
                    "black"
                ],
                fg: [
                    "600",
                    "400"
                ],
                border: [
                    "200",
                    "800"
                ]
            },
            link: {
                fg: [
                    "blue/600",
                    "blue/300"
                ]
            },
            muted: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "700 75%",
                    "300 75%"
                ]
            },
            shadow: {
                outline: [
                    "500/0.3",
                    "500/0.4"
                ],
                umbra: [
                    "gray/500/0.1",
                    "black/0.2"
                ],
                penumbra: [
                    "gray/500/0.07",
                    "black/0.14"
                ],
                ambient: [
                    "gray/500/0.06",
                    "black/0.12"
                ]
            },
            skeleton: {
                from: [
                    "100",
                    "900"
                ],
                to: [
                    "100 50%",
                    "900 50%"
                ]
            }
        },
        transparent: {
            bg: [
                "50",
                "black"
            ]
        },
        default: {
            bg: [
                "white",
                "950"
            ],
            fg: [
                "800",
                "200"
            ],
            muted: {
                fg: [
                    "600",
                    "400"
                ]
            }
        },
        primary: {
            _hue: "blue"
        },
        suggest: {
            _hue: "purple"
        },
        positive: {
            _hue: "green",
            shadow: {
                outline: [
                    "500/0.4",
                    "500/0.4"
                ]
            }
        },
        caution: {
            _hue: "yellow",
            shadow: {
                outline: [
                    "600/0.3",
                    "500/0.4"
                ]
            }
        },
        critical: {
            _hue: "red"
        }
    },
    button: {
        default: {
            "*": {
                "*": {
                    _blend: [
                        "screen",
                        "multiply"
                    ],
                    accent: {
                        fg: [
                            "purple/300",
                            "purple/700"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "900",
                                "100"
                            ],
                            fg: [
                                "400",
                                "600"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "500",
                        "400"
                    ],
                    border: [
                        "500/0",
                        "400/0"
                    ],
                    code: {
                        bg: [
                            "500 20%",
                            "400 20%"
                        ],
                        fg: [
                            "200",
                            "600"
                        ]
                    },
                    fg: [
                        "white",
                        "black"
                    ],
                    icon: [
                        "100 70%",
                        "900 70%"
                    ],
                    kbd: {
                        bg: [
                            "black",
                            "white"
                        ],
                        fg: [
                            "200",
                            "600"
                        ],
                        border: [
                            "800",
                            "200"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/200",
                            "blue/600"
                        ]
                    },
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "900",
                            "100"
                        ],
                        to: [
                            "900 50%",
                            "100 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "600",
                        "300"
                    ],
                    border: [
                        "700/0",
                        "300/0"
                    ]
                },
                pressed: {
                    bg: [
                        "700",
                        "300"
                    ]
                },
                selected: {
                    bg: [
                        "700",
                        "300"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/500",
                                "gray/400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "gray/700",
                                "gray/300"
                            ],
                            fg: [
                                "white",
                                "black"
                            ],
                            dot: [
                                "white",
                                "black"
                            ],
                            icon: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    bg: [
                        "300",
                        "600"
                    ],
                    code: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "300",
                            "600"
                        ]
                    },
                    fg: [
                        "300",
                        "600"
                    ],
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "300",
                            "600"
                        ]
                    },
                    kbd: {
                        bg: [
                            "black",
                            "white"
                        ],
                        fg: [
                            "white",
                            "black"
                        ],
                        border: [
                            "700",
                            "300"
                        ]
                    },
                    link: {
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    }
                }
            },
            default: {
                "*": {
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    bg: [
                        "800",
                        "200"
                    ],
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "400",
                            "600"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "900",
                        "100"
                    ]
                },
                pressed: {
                    bg: [
                        "black",
                        "white"
                    ]
                },
                selected: {
                    bg: [
                        "black",
                        "white"
                    ]
                }
            }
        },
        ghost: {
            "*": {
                "*": {
                    _blend: [
                        "multiply",
                        "screen"
                    ],
                    accent: {
                        fg: [
                            "purple/700 60%",
                            "purple/300 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "100",
                                "900"
                            ],
                            fg: [
                                "600",
                                "400"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "50",
                        "950"
                    ],
                    border: [
                        "100",
                        "900"
                    ],
                    code: {
                        bg: [
                            "500 10%",
                            "400 10%"
                        ],
                        fg: [
                            "700 60%",
                            "400 60%"
                        ]
                    },
                    fg: [
                        "600",
                        "400"
                    ],
                    icon: [
                        "700 60%",
                        "300 60%"
                    ],
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "600",
                            "400"
                        ],
                        border: [
                            "200",
                            "800"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/700 60%",
                            "blue/300 60%"
                        ]
                    },
                    muted: {
                        bg: [
                            "100",
                            "950"
                        ],
                        fg: [
                            "700 60%",
                            "300 60%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "100",
                            "900"
                        ],
                        to: [
                            "100 50%",
                            "900 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "700",
                        "300"
                    ]
                },
                pressed: {
                    bg: [
                        "200",
                        "800"
                    ],
                    fg: [
                        "800",
                        "200"
                    ]
                },
                selected: {
                    bg: [
                        "200",
                        "800"
                    ],
                    fg: [
                        "800",
                        "200"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/100",
                                "gray/900"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: [
                                "50",
                                "950"
                            ],
                            fg: [
                                "gray/200",
                                "gray/800"
                            ],
                            dot: [
                                "gray/200",
                                "gray/800"
                            ],
                            icon: [
                                "gray/200",
                                "gray/800"
                            ]
                        }
                    },
                    border: [
                        "100",
                        "900"
                    ],
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    fg: [
                        "400",
                        "600"
                    ],
                    icon: [
                        "300",
                        "700"
                    ],
                    muted: {
                        fg: [
                            "300",
                            "700"
                        ]
                    },
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "200",
                            "800"
                        ],
                        border: [
                            "100",
                            "900"
                        ]
                    },
                    link: {
                        fg: [
                            "200",
                            "800"
                        ]
                    }
                }
            },
            positive: {
                "*": {
                    border: [
                        "600 20%",
                        "800"
                    ]
                }
            },
            caution: {
                "*": {
                    border: [
                        "600 20%",
                        "800"
                    ]
                }
            }
        },
        bleed: {
            "*": {
                "*": {
                    _blend: [
                        "multiply",
                        "screen"
                    ],
                    accent: {
                        fg: [
                            "purple/700 70%",
                            "purple/300 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "100",
                                "900"
                            ],
                            fg: [
                                "600",
                                "400"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "white",
                        "black"
                    ],
                    border: [
                        "white/0",
                        "black/0"
                    ],
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "700 75%",
                            "300 75%"
                        ]
                    },
                    fg: [
                        "700",
                        "300"
                    ],
                    icon: [
                        "700 75%",
                        "300 75%"
                    ],
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "700",
                            "300"
                        ],
                        border: [
                            "200",
                            "800"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/700 70%",
                            "blue/300 70%"
                        ]
                    },
                    muted: {
                        bg: [
                            "100",
                            "950"
                        ],
                        fg: [
                            "700 75%",
                            "300 75%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "100",
                            "900"
                        ],
                        to: [
                            "100 50%",
                            "900 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "50",
                        "900"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 70%",
                        "300 70%"
                    ]
                },
                pressed: {
                    bg: [
                        "100",
                        "800"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 70%",
                        "200 70%"
                    ]
                },
                selected: {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 60%",
                        "200 60%"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/100",
                                "gray/900"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: [
                                "50",
                                "950"
                            ],
                            fg: [
                                "gray/200",
                                "gray/800"
                            ],
                            dot: [
                                "gray/200",
                                "gray/800"
                            ],
                            icon: [
                                "gray/200",
                                "gray/800"
                            ]
                        }
                    },
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    fg: [
                        "400",
                        "600"
                    ],
                    icon: [
                        "300",
                        "700"
                    ],
                    muted: {
                        fg: [
                            "400",
                            "600"
                        ]
                    },
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "200",
                            "800"
                        ],
                        border: [
                            "100",
                            "900"
                        ]
                    },
                    link: {
                        fg: [
                            "200",
                            "800"
                        ]
                    }
                }
            }
        }
    },
    input: {
        "*": {
            "*": {
                _blend: [
                    "multiply",
                    "screen"
                ],
                bg: [
                    "white",
                    "black"
                ],
                border: [
                    "200",
                    "700"
                ],
                fg: [
                    "black",
                    "200"
                ],
                muted: {
                    bg: [
                        "50",
                        "950"
                    ]
                },
                placeholder: [
                    "400",
                    "600"
                ]
            },
            hovered: {
                border: [
                    "300",
                    "700"
                ]
            },
            readOnly: {
                bg: [
                    "50",
                    "950"
                ],
                border: [
                    "200",
                    "800"
                ],
                fg: [
                    "800",
                    "200"
                ]
            },
            disabled: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "400",
                    "600"
                ],
                border: [
                    "100",
                    "900"
                ],
                placeholder: [
                    "200",
                    "800 50%"
                ]
            }
        },
        invalid: {
            "*": {
                _hue: "red",
                bg: [
                    "100",
                    "950"
                ]
            }
        }
    },
    selectable: {
        "*": {
            "*": {
                _blend: [
                    "multiply",
                    "screen"
                ],
                accent: {
                    fg: [
                        "purple/700 70%",
                        "purple/300 70%"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "screen",
                            "multiply"
                        ],
                        bg: [
                            "500",
                            "400"
                        ],
                        fg: [
                            "white",
                            "black"
                        ]
                    }
                },
                badge: {
                    "*": {
                        bg: [
                            "100",
                            "900"
                        ],
                        fg: [
                            "600",
                            "400"
                        ],
                        dot: [
                            "500",
                            "500"
                        ],
                        icon: [
                            "500",
                            "500"
                        ]
                    }
                },
                bg: [
                    "white",
                    "black"
                ],
                border: [
                    "200",
                    "800"
                ],
                code: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "600",
                        "400"
                    ]
                },
                fg: [
                    "700",
                    "300"
                ],
                icon: [
                    "700 75%",
                    "300 75%"
                ],
                kbd: {
                    bg: [
                        "white",
                        "black"
                    ],
                    fg: [
                        "600",
                        "400"
                    ],
                    border: [
                        "200",
                        "800"
                    ]
                },
                link: {
                    fg: [
                        "blue/700 70%",
                        "blue/300 70%"
                    ]
                },
                muted: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "700 75%",
                        "300 75%"
                    ]
                },
                skeleton: {
                    from: [
                        "100",
                        "900"
                    ],
                    to: [
                        "100 50%",
                        "900 50%"
                    ]
                }
            },
            hovered: {
                bg: [
                    "50",
                    "950"
                ]
            },
            pressed: {
                bg: [
                    "100",
                    "900"
                ]
            },
            selected: {
                _blend: [
                    "screen",
                    "multiply"
                ],
                accent: {
                    fg: [
                        "purple/300",
                        "purple/700"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "multiply",
                            "screen"
                        ],
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "black",
                            "white"
                        ]
                    }
                },
                badge: {
                    "*": {
                        bg: [
                            "900",
                            "100"
                        ],
                        fg: [
                            "400",
                            "600"
                        ],
                        dot: [
                            "500",
                            "500"
                        ],
                        icon: [
                            "500",
                            "500"
                        ]
                    }
                },
                bg: [
                    "500",
                    "400"
                ],
                border: [
                    "500 20%",
                    "400 20%"
                ],
                code: {
                    bg: [
                        "500 20%",
                        "400 20%"
                    ],
                    fg: [
                        "200",
                        "600"
                    ]
                },
                fg: [
                    "white",
                    "black"
                ],
                icon: [
                    "100 70%",
                    "900 70%"
                ],
                kbd: {
                    bg: [
                        "black",
                        "white"
                    ],
                    fg: [
                        "200",
                        "600"
                    ],
                    border: [
                        "800",
                        "200"
                    ]
                },
                link: {
                    fg: [
                        "blue/200",
                        "blue/600"
                    ]
                },
                muted: {
                    bg: [
                        "500 10%",
                        "400 10%"
                    ],
                    fg: [
                        "100 70%",
                        "900 70%"
                    ]
                },
                skeleton: {
                    from: [
                        "900",
                        "100"
                    ],
                    to: [
                        "900 50%",
                        "100 50%"
                    ]
                }
            },
            disabled: {
                _hue: "gray",
                accent: {
                    fg: [
                        "200",
                        "800"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "screen",
                            "multiply"
                        ],
                        bg: [
                            "gray/100",
                            "gray/900"
                        ],
                        fg: [
                            "white",
                            "black"
                        ]
                    }
                },
                badge: {
                    "*": {
                        _hue: "gray",
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "gray/200",
                            "gray/800"
                        ],
                        dot: [
                            "gray/200",
                            "gray/800"
                        ],
                        icon: [
                            "gray/200",
                            "gray/800"
                        ]
                    }
                },
                border: [
                    "100",
                    "900"
                ],
                code: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "200",
                        "800"
                    ]
                },
                fg: [
                    "200",
                    "800"
                ],
                icon: [
                    "200",
                    "800"
                ],
                kbd: {
                    bg: [
                        "white",
                        "black"
                    ],
                    fg: [
                        "200",
                        "800"
                    ],
                    border: [
                        "100",
                        "900"
                    ]
                },
                link: {
                    fg: [
                        "200",
                        "800"
                    ]
                },
                muted: {
                    bg: [
                        "50 50%",
                        "950 50%"
                    ],
                    fg: [
                        "200",
                        "800"
                    ]
                }
            }
        },
        default: {
            selected: {
                _hue: "blue"
            }
        },
        critical: {
            disabled: {
                bg: [
                    "50 50%",
                    "950 50%"
                ]
            }
        }
    },
    syntax: {
        atrule: [
            "purple/600",
            "purple/400"
        ],
        attrName: [
            "green/600",
            "green/400"
        ],
        attrValue: [
            "yellow/600",
            "yellow/400"
        ],
        attribute: [
            "yellow/600",
            "yellow/400"
        ],
        boolean: [
            "purple/600",
            "purple/400"
        ],
        builtin: [
            "purple/600",
            "purple/400"
        ],
        cdata: [
            "yellow/600",
            "yellow/400"
        ],
        char: [
            "yellow/600",
            "yellow/400"
        ],
        class: [
            "orange/600",
            "orange/400"
        ],
        className: [
            "cyan/600",
            "cyan/400"
        ],
        comment: [
            "gray/400",
            "gray/600"
        ],
        constant: [
            "purple/600",
            "purple/400"
        ],
        deleted: [
            "red/600",
            "red/400"
        ],
        entity: [
            "red/600",
            "red/400"
        ],
        function: [
            "green/600",
            "green/400"
        ],
        hexcode: [
            "blue/600",
            "blue/400"
        ],
        id: [
            "purple/600",
            "purple/400"
        ],
        important: [
            "purple/600",
            "purple/400"
        ],
        inserted: [
            "yellow/600",
            "yellow/400"
        ],
        keyword: [
            "magenta/600",
            "magenta/400"
        ],
        number: [
            "purple/600",
            "purple/400"
        ],
        operator: [
            "magenta/600",
            "magenta/400"
        ],
        property: [
            "blue/600",
            "blue/400"
        ],
        pseudoClass: [
            "yellow/600",
            "yellow/400"
        ],
        pseudoElement: [
            "yellow/600",
            "yellow/400"
        ],
        punctuation: [
            "gray/600",
            "gray/400"
        ],
        regex: [
            "blue/600",
            "blue/400"
        ],
        selector: [
            "red/600",
            "red/400"
        ],
        string: [
            "yellow/600",
            "yellow/400"
        ],
        symbol: [
            "purple/600",
            "purple/400"
        ],
        tag: [
            "red/600",
            "red/400"
        ],
        unit: [
            "orange/600",
            "orange/400"
        ],
        url: [
            "red/600",
            "red/400"
        ],
        variable: [
            "red/600",
            "red/400"
        ]
    }
};
function isRecord(value) {
    return !(!value || typeof value != "object" || Array.isArray(value));
}
function merge(...records) {
    let _records = records.filter(Boolean);
    return _records.length === 0 ? {} : _records.reduce(_merge, {});
}
function _merge(acc, source) {
    for (let key of Object.keys(source)){
        let prevValue = acc[key], nextValue = source[key];
        acc[key] = isRecord(prevValue) && isRecord(nextValue) ? merge(prevValue, nextValue) : nextValue;
    }
    return acc;
}
/**
* Convert a tree of color tokens from a sparse format to a dense format.
*/ function resolveColorTokens(inputTokens) {
    let tokens = merge(defaultColorTokens, inputTokens);
    return {
        base: resolveBaseColorTokens(tokens),
        button: resolveButtonColorTokens(tokens),
        input: resolveInputColorTokens(tokens),
        selectable: resolveSelectableColorTokens(tokens),
        syntax: tokens.syntax
    };
}
function resolveBaseColorTokens(sparseTokens) {
    let tokens = {};
    for (let tone of THEME_COLOR_CARD_TONES)tokens[tone] = resolveBaseColorTones(sparseTokens, tone);
    return tokens;
}
function resolveBaseColorTones(inputTokens, tone) {
    let spec = merge(inputTokens?.base?.["*"], inputTokens?.base?.[tone]), hue = spec._hue || inputTokens?.base?.[tone]?._hue || "gray";
    return {
        ...spec,
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue)=>({
                ...acc,
                [hue]: merge({
                    _hue: hue
                }, spec.avatar?.["*"], spec.avatar?.[hue])
            }), {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone)=>({
                ...acc,
                [tone]: {
                    _hue: inputTokens?.base?.[tone]?._hue || hue,
                    ...spec.badge?.["*"],
                    ...spec.badge?.[tone]
                }
            }), {})
    };
}
function resolveButtonColorTokens(inputTokens) {
    let tokens = {};
    for (let mode of THEME_COLOR_BUTTON_MODES)tokens[mode] = resolveButtonToneColorTokens(inputTokens, mode);
    return tokens;
}
function resolveButtonToneColorTokens(inputTokens, mode) {
    let tokens = {};
    for (let tone of THEME_COLOR_STATE_TONES)tokens[tone] = resolveButtonModeColorTokens(inputTokens, mode, tone);
    return tokens;
}
function resolveButtonModeColorTokens(inputTokens, mode, tone) {
    let tokens = {};
    for (let state of THEME_COLOR_STATES)tokens[state] = resolveButtonStateColorTokens(inputTokens, tone, mode, state);
    return tokens;
}
function resolveButtonStateColorTokens(inputTokens, tone, mode, state) {
    let spec = merge(inputTokens?.button?.[mode]?.["*"]?.["*"], inputTokens?.button?.[mode]?.[tone]?.["*"], inputTokens?.button?.[mode]?.["*"]?.[state], inputTokens?.button?.[mode]?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
    return {
        ...spec,
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue)=>({
                ...acc,
                [hue]: merge({
                    _hue: hue
                }, spec.avatar?.["*"], spec.avatar?.[hue])
            }), {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone)=>({
                ...acc,
                [tone]: {
                    _hue: inputTokens?.base?.[tone]?._hue || hue,
                    ...spec.badge?.["*"],
                    ...spec.badge?.[tone]
                }
            }), {})
    };
}
function resolveInputColorTokens(inputTokens) {
    let tokens = {};
    for (let mode of THEME_COLOR_INPUT_MODES)tokens[mode] = resolveInputModeColorTokens(inputTokens, mode);
    return tokens;
}
function resolveInputModeColorTokens(inputTokens, mode) {
    let states = {};
    for (let state of THEME_COLOR_INPUT_STATES)states[state] = resolveInputStateColorTokens(inputTokens, mode, state);
    return states;
}
function resolveInputStateColorTokens(inputTokens, mode, state) {
    let spec = merge(inputTokens?.input?.["*"]?.["*"], inputTokens?.input?.[mode]?.["*"], inputTokens?.input?.["*"]?.[state], inputTokens?.input?.[mode]?.[state]), hue = spec._hue || inputTokens?.input?.[mode]?._hue;
    return {
        ...spec,
        _hue: hue
    };
}
function resolveSelectableColorTokens(inputTokens) {
    let tokens = {};
    for (let tone of THEME_COLOR_STATE_TONES)tokens[tone] = resolveSelectableToneColorTokens(inputTokens, tone);
    return tokens;
}
function resolveSelectableToneColorTokens(inputTokens, tone) {
    let states = {
        _hue: inputTokens?.selectable?.[tone]?._hue || inputTokens?.base?.[tone]?._hue
    };
    for (let state of THEME_COLOR_STATES)states[state] = resolveSelectableStateColorTokens(inputTokens, tone, state);
    return states;
}
function resolveSelectableStateColorTokens(inputTokens, tone, state) {
    let spec = merge(inputTokens?.selectable?.["*"]?.["*"], inputTokens?.selectable?.[tone]?.["*"], inputTokens?.selectable?.["*"]?.[state], inputTokens?.selectable?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
    return {
        ...spec,
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue)=>({
                ...acc,
                [hue]: merge({
                    _hue: hue
                }, spec.avatar?.["*"], spec.avatar?.[hue])
            }), {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone)=>({
                ...acc,
                [tone]: {
                    _hue: inputTokens?.base?.[tone]?._hue || hue,
                    ...spec.badge?.["*"],
                    ...spec.badge?.[tone]
                }
            }), {})
    };
}
function buildColorTheme(config) {
    let resolvedConfig = {
        ...config,
        color: resolveColorTokens(config?.color)
    }, schemes = {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(schemes, "light", ()=>buildColorScheme({
            scheme: "light"
        }, resolvedConfig)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(schemes, "dark", ()=>buildColorScheme({
            scheme: "dark"
        }, resolvedConfig)), schemes;
}
function buildColorScheme(options, config) {
    let { scheme } = options, colorScheme = {};
    for (let tone of THEME_COLOR_CARD_TONES)(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(colorScheme, tone, ()=>buildCardColorTheme({
            scheme,
            tone
        }, config));
    return colorScheme;
}
function buildCardColorTheme(options, config) {
    let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
        hue: tokens?._hue || "gray",
        scheme
    };
    return {
        _blend: (tokens?._blend || [
            "multiply",
            "screen"
        ])[scheme === "light" ? 0 : 1],
        _dark: scheme === "dark",
        accent: {
            fg: resolveColorTokenValue(context, tokens?.accent?.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        backdrop: resolveColorTokenValue(context, tokens?.backdrop),
        badge: buildBadgeColorTheme(tokens?.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens?.bg),
        border: resolveColorTokenValue(context, tokens?.border),
        button: buildButtonColorTheme({
            scheme,
            tone
        }, config),
        code: {
            bg: resolveColorTokenValue(context, tokens?.code?.bg),
            fg: resolveColorTokenValue(context, tokens?.code?.fg)
        },
        fg: resolveColorTokenValue(context, tokens?.fg),
        focusRing: resolveColorTokenValue(context, tokens?.focusRing),
        icon: resolveColorTokenValue(context, tokens?.icon),
        input: buildInputColorTheme({
            scheme,
            tone
        }, config),
        kbd: {
            bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
            fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
            border: resolveColorTokenValue(context, tokens?.kbd?.border)
        },
        link: {
            fg: resolveColorTokenValue(context, tokens?.link?.fg)
        },
        muted: {
            bg: resolveColorTokenValue(context, tokens?.muted?.bg),
            fg: resolveColorTokenValue(context, tokens?.muted?.fg)
        },
        selectable: buildSelectableColorTheme({
            scheme,
            tone
        }, config),
        shadow: buildShadowColorTheme({
            scheme,
            tone
        }, config),
        skeleton: {
            from: resolveColorTokenValue(context, tokens?.skeleton?.from),
            to: resolveColorTokenValue(context, tokens?.skeleton?.to)
        },
        syntax: buildSyntaxColorTheme({
            scheme
        }, config)
    };
}
function buildShadowColorTheme(options, config) {
    let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
        hue: tokens?._hue || "gray",
        scheme
    };
    return {
        outline: resolveColorTokenValue(context, tokens?.shadow?.outline),
        umbra: resolveColorTokenValue(context, tokens?.shadow?.umbra),
        penumbra: resolveColorTokenValue(context, tokens?.shadow?.penumbra),
        ambient: resolveColorTokenValue(context, tokens?.shadow?.ambient)
    };
}
function buildAvatarColorTheme(options, stateTokens) {
    let { scheme } = options;
    return {
        gray: _buildAvatarColorTheme({
            color: "gray",
            scheme
        }, stateTokens),
        blue: _buildAvatarColorTheme({
            color: "blue",
            scheme
        }, stateTokens),
        purple: _buildAvatarColorTheme({
            color: "purple",
            scheme
        }, stateTokens),
        magenta: _buildAvatarColorTheme({
            color: "magenta",
            scheme
        }, stateTokens),
        red: _buildAvatarColorTheme({
            color: "red",
            scheme
        }, stateTokens),
        orange: _buildAvatarColorTheme({
            color: "orange",
            scheme
        }, stateTokens),
        yellow: _buildAvatarColorTheme({
            color: "yellow",
            scheme
        }, stateTokens),
        green: _buildAvatarColorTheme({
            color: "green",
            scheme
        }, stateTokens),
        cyan: _buildAvatarColorTheme({
            color: "cyan",
            scheme
        }, stateTokens)
    };
}
function _buildAvatarColorTheme(options, stateTokens) {
    let { color, scheme } = options, tokens = stateTokens?.avatar?.[color], context = {
        hue: tokens?._hue || "gray",
        scheme
    };
    return {
        _blend: (tokens?._blend || [
            "screen",
            "multiply"
        ])[scheme === "light" ? 0 : 1],
        bg: resolveColorTokenValue(context, tokens?.bg),
        fg: resolveColorTokenValue(context, tokens?.fg)
    };
}
function buildBadgeColorTheme(tokens, options, config) {
    let { scheme } = options, colorBadge = {};
    for (let tone of THEME_COLOR_STATE_TONES)colorBadge[tone] = _buildBadgeColorTheme(tokens, {
        scheme,
        tone
    }, config);
    return colorBadge;
}
function _buildBadgeColorTheme(parentTokens, options, config) {
    let { scheme, tone } = options, tokens = parentTokens?.[tone], context = {
        hue: tokens?._hue || config?.color?.base?.[tone]?._hue || "gray",
        scheme
    };
    return {
        bg: resolveColorTokenValue(context, tokens?.bg),
        fg: resolveColorTokenValue(context, tokens?.fg),
        dot: resolveColorTokenValue(context, tokens?.dot),
        icon: resolveColorTokenValue(context, tokens?.icon)
    };
}
function buildButtonColorTheme(options, config) {
    let { scheme, tone: cardTone } = options, modes = {};
    for (let mode of THEME_COLOR_BUTTON_MODES)modes[mode] = buildButtonTonesColorTheme({
        cardTone,
        scheme,
        mode
    }, config);
    return modes;
}
function buildButtonTonesColorTheme(options, config) {
    let { cardTone, mode, scheme } = options, tones = {};
    for (let tone of THEME_COLOR_STATE_TONES)tones[tone] = buildButtonStatesColorTheme({
        cardTone,
        mode,
        scheme,
        tone
    }, config);
    return tones;
}
function buildButtonStatesColorTheme(options, config) {
    let { cardTone, mode, scheme, tone } = options, states = {};
    for (let state of THEME_COLOR_STATES)states[state] = buildButtonStateColorTheme({
        cardTone,
        mode,
        tone,
        scheme,
        state
    }, config);
    return states;
}
function buildButtonStateColorTheme(options, config) {
    let { cardTone, mode, tone, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.button?.[mode]?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        accent: {
            fg: resolveColorTokenValue(context, tokens?.accent?.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        badge: buildBadgeColorTheme(tokens?.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens?.bg),
        border: resolveColorTokenValue(context, tokens?.border),
        code: {
            bg: resolveColorTokenValue(context, tokens?.code?.bg),
            fg: resolveColorTokenValue(context, tokens?.code?.fg)
        },
        fg: resolveColorTokenValue(context, tokens?.fg),
        icon: resolveColorTokenValue(context, tokens?.icon),
        muted: {
            bg: resolveColorTokenValue(context, tokens?.muted?.bg),
            fg: resolveColorTokenValue(context, tokens?.muted?.fg)
        },
        kbd: {
            bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
            fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
            border: resolveColorTokenValue(context, tokens?.kbd?.border)
        },
        link: {
            fg: resolveColorTokenValue(context, tokens?.link?.fg)
        },
        skeleton: {
            from: resolveColorTokenValue(context, tokens?.skeleton?.from),
            to: resolveColorTokenValue(context, tokens?.skeleton?.to)
        }
    };
}
function buildInputColorTheme(options, config) {
    let { scheme, tone } = options;
    return {
        default: buildInputStatesColorTheme({
            mode: "default",
            scheme,
            tone
        }, config),
        invalid: buildInputStatesColorTheme({
            mode: "invalid",
            scheme,
            tone
        }, config)
    };
}
function buildInputStatesColorTheme(options, config) {
    let { mode, scheme, tone } = options;
    return {
        enabled: buildInputStateColorTheme({
            mode,
            scheme,
            state: "enabled",
            cardTone: tone
        }, config),
        hovered: buildInputStateColorTheme({
            mode,
            scheme,
            state: "hovered",
            cardTone: tone
        }, config),
        readOnly: buildInputStateColorTheme({
            mode,
            scheme,
            state: "readOnly",
            cardTone: tone
        }, config),
        disabled: buildInputStateColorTheme({
            mode,
            scheme,
            state: "disabled",
            cardTone: tone
        }, config)
    };
}
function buildInputStateColorTheme(options, config) {
    let { cardTone, mode, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.input?.[mode]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        bg: resolveColorTokenValue(context, tokens?.bg),
        border: resolveColorTokenValue(context, tokens?.border),
        fg: resolveColorTokenValue(context, tokens?.fg),
        muted: {
            bg: resolveColorTokenValue(context, tokens?.muted?.bg)
        },
        placeholder: resolveColorTokenValue(context, tokens?.placeholder)
    };
}
function buildSelectableColorTheme(options, config) {
    let { scheme, tone: cardTone } = options, tones = {};
    for (let tone of THEME_COLOR_STATE_TONES)tones[tone] = buildSelectableStatesColorTheme({
        cardTone,
        scheme,
        tone
    }, config);
    return tones;
}
function buildSelectableStatesColorTheme(options, config) {
    let { cardTone, scheme, tone } = options, states = {};
    for (let state of THEME_COLOR_STATES)states[state] = buildSelectableStateColorTheme({
        cardTone,
        tone,
        scheme,
        state
    }, config);
    return states;
}
function buildSelectableStateColorTheme(options, config) {
    let { cardTone, scheme, state, tone } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.selectable?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        accent: {
            fg: resolveColorTokenValue(context, tokens?.accent?.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        badge: buildBadgeColorTheme(tokens?.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens?.bg),
        border: resolveColorTokenValue(context, tokens?.border),
        code: {
            bg: resolveColorTokenValue(context, tokens?.code?.bg),
            fg: resolveColorTokenValue(context, tokens?.code?.fg)
        },
        fg: resolveColorTokenValue(context, tokens?.fg),
        icon: resolveColorTokenValue(context, tokens?.icon),
        muted: {
            bg: resolveColorTokenValue(context, tokens?.muted?.bg),
            fg: resolveColorTokenValue(context, tokens?.muted?.fg)
        },
        kbd: {
            bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
            fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
            border: resolveColorTokenValue(context, tokens?.kbd?.border)
        },
        link: {
            fg: resolveColorTokenValue(context, tokens?.link?.fg)
        },
        skeleton: {
            from: resolveColorTokenValue(context, tokens?.skeleton?.from),
            to: resolveColorTokenValue(context, tokens?.skeleton?.to)
        }
    };
}
function buildSyntaxColorTheme(options, config) {
    let { scheme } = options, tokens = config?.color?.syntax, context = {
        hue: "gray",
        scheme
    };
    return {
        atrule: resolveColorTokenValue(context, tokens?.atrule),
        attrName: resolveColorTokenValue(context, tokens?.attrName),
        attrValue: resolveColorTokenValue(context, tokens?.attrValue),
        attribute: resolveColorTokenValue(context, tokens?.attribute),
        boolean: resolveColorTokenValue(context, tokens?.boolean),
        builtin: resolveColorTokenValue(context, tokens?.builtin),
        cdata: resolveColorTokenValue(context, tokens?.cdata),
        char: resolveColorTokenValue(context, tokens?.char),
        class: resolveColorTokenValue(context, tokens?.class),
        className: resolveColorTokenValue(context, tokens?.className),
        comment: resolveColorTokenValue(context, tokens?.comment),
        constant: resolveColorTokenValue(context, tokens?.constant),
        deleted: resolveColorTokenValue(context, tokens?.deleted),
        doctype: resolveColorTokenValue(context, tokens?.doctype),
        entity: resolveColorTokenValue(context, tokens?.entity),
        function: resolveColorTokenValue(context, tokens?.function),
        hexcode: resolveColorTokenValue(context, tokens?.hexcode),
        id: resolveColorTokenValue(context, tokens?.id),
        important: resolveColorTokenValue(context, tokens?.important),
        inserted: resolveColorTokenValue(context, tokens?.inserted),
        keyword: resolveColorTokenValue(context, tokens?.keyword),
        number: resolveColorTokenValue(context, tokens?.number),
        operator: resolveColorTokenValue(context, tokens?.operator),
        prolog: resolveColorTokenValue(context, tokens?.prolog),
        property: resolveColorTokenValue(context, tokens?.property),
        pseudoClass: resolveColorTokenValue(context, tokens?.pseudoClass),
        pseudoElement: resolveColorTokenValue(context, tokens?.pseudoElement),
        punctuation: resolveColorTokenValue(context, tokens?.punctuation),
        regex: resolveColorTokenValue(context, tokens?.regex),
        selector: resolveColorTokenValue(context, tokens?.selector),
        string: resolveColorTokenValue(context, tokens?.string),
        symbol: resolveColorTokenValue(context, tokens?.symbol),
        tag: resolveColorTokenValue(context, tokens?.tag),
        unit: resolveColorTokenValue(context, tokens?.unit),
        url: resolveColorTokenValue(context, tokens?.url),
        variable: resolveColorTokenValue(context, tokens?.variable)
    };
}
const defaultColorPalette = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"];
function mixChannel(b, s, weight) {
    return b + (s - b) * weight;
}
/**
* Apply the \`mix\` blend mode
* @internal
*/ function mix(b, s, weight) {
    return {
        r: mixChannel(b.r, s.r, weight),
        g: mixChannel(b.g, s.g, weight),
        b: mixChannel(b.b, s.b, weight)
    };
}
function lerp(x, y, a) {
    return x * (1 - a) + y * a;
}
function invlerp(x, y, a) {
    return clamp((a - x) / (y - x));
}
function clamp(a, min = 0, max = 1) {
    return Math.min(max, Math.max(min, a));
}
function range(x1, y1, x2, y2, a) {
    return lerp(x2, y2, invlerp(x1, y1, a));
}
function round(value) {
    return Math.round(value);
}
/**
* @internal
*/ function hexToRgb(hex) {
    if (hex.length === 4) {
        let hexR = hex.slice(1, 2), hexG = hex.slice(2, 3), hexB = hex.slice(3, 4);
        return {
            r: parseInt(hexR + hexR, 16),
            g: parseInt(hexG + hexG, 16),
            b: parseInt(hexB + hexB, 16)
        };
    }
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}
/**
* @internal
*/ function rgbaToRGBA(rgba) {
    let values = rgba.replace(/rgba\(|\)/g, "").split(",");
    return {
        r: parseInt(values[0]),
        g: parseInt(values[1]),
        b: parseInt(values[2]),
        a: parseFloat(values[3])
    };
}
/**
* @internal
*/ function rgbToHex(color) {
    let r = round(clamp(Math.round(color.r), 0, 255)), g = round(clamp(Math.round(color.g), 0, 255)), b = round(clamp(Math.round(color.b), 0, 255));
    return "a" in color ? `rgba(${r},${g},${b},${color.a})` : "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
* @internal
* @see https://css-tricks.com/converting-color-spaces-in-javascript/
*/ function rgbToHsl({ r, g, b }) {
    r /= 255, g /= 255, b /= 255;
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    return h = delta == 0 ? 0 : cmax == r ? (g - b) / delta % 6 : cmax == g ? (b - r) / delta + 2 : (r - g) / delta + 4, h = Math.round(h * 60), h < 0 && (h += 360), l = (cmax + cmin) / 2, s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)), s = +(s * 100).toFixed(1), l = +(l * 100).toFixed(1), {
        h,
        s,
        l
    };
}
/**
* @internal
*/ function hslToRgb(hsl) {
    let s = hsl.s / 100, l = hsl.l / 100, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(hsl.h / 60 % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    return 0 <= hsl.h && hsl.h < 60 ? (r = c, g = x, b = 0) : 60 <= hsl.h && hsl.h < 120 ? (r = x, g = c, b = 0) : 120 <= hsl.h && hsl.h < 180 ? (r = 0, g = c, b = x) : 180 <= hsl.h && hsl.h < 240 ? (r = 0, g = x, b = c) : 240 <= hsl.h && hsl.h < 300 ? (r = x, g = 0, b = c) : 300 <= hsl.h && hsl.h < 360 && (r = c, g = 0, b = x), {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}
const HSL_RE = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
function isHexChars(str) {
    for (let c of str)if ("0123456789ABCDEFabcdef".indexOf(c) === -1) return !1;
    return !0;
}
function isHex(str) {
    return str[0] !== "#" || str.length !== 4 && str.length !== 7 ? !1 : isHexChars(str.slice(1));
}
function parseHsl(str) {
    let res = HSL_RE.exec(str);
    if (!res) throw Error(`parseHsl: string is not a HSL color: "${str}"`);
    return {
        h: parseInt(res[1]),
        s: parseFloat(res[3]),
        l: parseFloat(res[5])
    };
}
/**
* @internal
*/ function parseColor(color) {
    if (!color) return {
        r: 0,
        g: 0,
        b: 0
    };
    if (typeof color != "string") throw Error("parseColor: expected a string");
    if (isHex(color)) return hexToRgb(color);
    if (color.startsWith("hsl(")) return hslToRgb(parseHsl(color));
    if (color.startsWith("rgba(")) return rgbaToRGBA(color);
    throw Error(`parseColor: unexpected color format: "${color}"`);
}
/**
* @internal
*/ function rgba(color, a) {
    let rgb = parseColor(color);
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}
function multiplyChannel(b, s) {
    return b * s;
}
/**
* Apply the \`multiply\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingmultiply
* @internal
*/ function multiply(b, s) {
    return {
        r: multiplyChannel(b.r / 255, s.r / 255) * 255,
        g: multiplyChannel(b.g / 255, s.g / 255) * 255,
        b: multiplyChannel(b.b / 255, s.b / 255) * 255
    };
}
function screenChannel(b, s) {
    return b + s - b * s;
}
/**
* Apply the \`screen\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingscreen
* @internal
*/ function screen(b, s) {
    return {
        r: screenChannel(b.r / 255, s.r / 255) * 255,
        g: screenChannel(b.g / 255, s.g / 255) * 255,
        b: screenChannel(b.b / 255, s.b / 255) * 255
    };
}
const RGB_RANGE = [
    0,
    255
];
function mixThemeColor(value, options) {
    let { blendMode } = options, color = parseColor(value), black = parseColor(options.black), white = parseColor(options.white), bg = options.bg ? parseColor(options.bg) : blendMode === "multiply" ? white : black, paletteRange = {
        r: [
            black.r,
            white.r
        ],
        g: [
            black.g,
            white.g
        ],
        b: [
            black.b,
            white.b
        ]
    }, convertedBgColor = {
        r: clamp(range(...paletteRange.r, ...RGB_RANGE, bg.r), ...RGB_RANGE),
        g: clamp(range(...paletteRange.g, ...RGB_RANGE, bg.g), ...RGB_RANGE),
        b: clamp(range(...paletteRange.b, ...RGB_RANGE, bg.b), ...RGB_RANGE)
    }, convertedColor = {
        r: clamp(range(...paletteRange.r, ...RGB_RANGE, color.r), ...RGB_RANGE),
        g: clamp(range(...paletteRange.g, ...RGB_RANGE, color.g), ...RGB_RANGE),
        b: clamp(range(...paletteRange.b, ...RGB_RANGE, color.b), ...RGB_RANGE)
    }, resultColor = blendMode === "multiply" ? multiply(convertedBgColor, convertedColor) : screen(convertedBgColor, convertedColor);
    return rgbToHex({
        r: clamp(range(...RGB_RANGE, ...paletteRange.r, resultColor.r), ...paletteRange.r),
        g: clamp(range(...RGB_RANGE, ...paletteRange.g, resultColor.g), ...paletteRange.g),
        b: clamp(range(...RGB_RANGE, ...paletteRange.b, resultColor.b), ...paletteRange.b)
    });
}
function renderColorValue(str, options) {
    let { bg, blendMode, colorPalette } = options;
    if (bg === "white") throw Error("Cannot blend with white background");
    let node = parseTokenValue(str);
    if (!node || node.type !== "color") throw Error(`Invalid color token value: ${str}`);
    let hex = "";
    if (node.key === "black" && (hex = renderColorHex(colorPalette.black)), node.key === "white" && (hex = renderColorHex(colorPalette.white)), node.hue && node.tint && (hex = renderColorHex(colorPalette[node.hue][node.tint])), !hex) throw Error(`Invalid color token value: ${str}`);
    let hexBeforeMix = hex, mixOptions = {
        blendMode,
        bg,
        black: renderColorHex(colorPalette.black),
        white: renderColorHex(colorPalette.white)
    };
    try {
        hex = mixThemeColor(hex, mixOptions), bg && node.mix !== void 0 && (hex = rgbToHex(mix(hexToRgb(bg), hexToRgb(hex), node.mix)));
    } catch (err) {
        throw console.warn("could not blend", hex, mixOptions), err;
    }
    return hex === "#aN" && (console.warn(`invalid color token value: ${str}`), hex = hexBeforeMix), node.opacity !== void 0 && (hex = rgba(hex, node.opacity)), hex;
}
function renderColorHex(color) {
    return typeof color == "string" ? color : color.hex;
}
function renderThemeColorSchemes(value, config) {
    let colorPalette = config?.palette ?? defaultColorPalette, schemes = {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(schemes, "light", ()=>renderThemeColorScheme(colorPalette, value.light)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(schemes, "dark", ()=>renderThemeColorScheme(colorPalette, value.dark)), schemes;
}
function renderThemeColorScheme(colorPalette, value) {
    let renderedDefaultTone = renderThemeColor(value.default, {
        colorPalette
    }), bg = renderedDefaultTone.bg;
    if (bg === "white") throw Error("Cannot blend with white background");
    let scheme = {
        default: renderedDefaultTone
    };
    for (let tone of THEME_COLOR_CARD_TONES){
        if (tone === "default") continue;
        let opts = tone === "transparent" ? {
            colorPalette
        } : {
            bg,
            colorPalette
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(scheme, tone, ()=>renderThemeColor(value[tone], opts));
    }
    return scheme;
}
function renderThemeColor(value, options) {
    let { colorPalette, bg } = options, blendMode = value._blend || "multiply", baseBg = renderColorValue(value.bg, {
        colorPalette,
        bg,
        blendMode
    }), colorOptions = {
        colorPalette,
        bg: baseBg,
        blendMode
    }, button = renderThemeColorButton(value.button, {
        baseBg,
        blendMode,
        colorPalette
    }), selectable = renderThemeColorSelectable(value.selectable, {
        colorPalette,
        baseBg,
        blendMode
    }), shadow = {
        outline: renderColorValue(value.shadow.outline, colorOptions),
        umbra: renderColorValue(value.shadow.umbra, {
            ...colorOptions,
            bg: void 0,
            colorPalette: {
                ...colorPalette,
                black: "#000000"
            }
        }),
        penumbra: renderColorValue(value.shadow.penumbra, {
            ...colorOptions,
            bg: void 0,
            colorPalette: {
                ...colorPalette,
                black: "#000000"
            }
        }),
        ambient: renderColorValue(value.shadow.ambient, {
            ...colorOptions,
            bg: void 0,
            colorPalette: {
                ...colorPalette,
                black: "#000000"
            }
        })
    };
    return {
        _blend: blendMode,
        _dark: value._dark,
        accent: {
            fg: renderColorValue(value.accent.fg, colorOptions)
        },
        avatar: renderThemeColorAvatar(value.avatar, {
            baseBg,
            colorPalette,
            blendMode
        }),
        backdrop: renderColorValue(value.backdrop, colorOptions),
        badge: renderThemeColorBadge(value.badge, {
            baseBg,
            colorPalette,
            blendMode
        }),
        bg: baseBg,
        border: renderColorValue(value.border, colorOptions),
        button,
        code: {
            bg: renderColorValue(value.code.bg, colorOptions),
            fg: renderColorValue(value.code.fg, colorOptions)
        },
        fg: renderColorValue(value.fg, colorOptions),
        focusRing: renderColorValue(value.focusRing, colorOptions),
        icon: renderColorValue(value.icon, colorOptions),
        input: renderThemeColorInput(value.input, {
            baseBg,
            colorPalette,
            blendMode
        }),
        kbd: renderThemeColorKBD(value.kbd, {
            baseBg,
            colorPalette,
            blendMode
        }),
        link: {
            fg: renderColorValue(value.link.fg, colorOptions)
        },
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions),
            fg: renderColorValue(value.muted.fg, colorOptions)
        },
        shadow,
        skeleton: {
            from: renderColorValue(value.skeleton.from, colorOptions),
            to: renderColorValue(value.skeleton.to, colorOptions)
        },
        syntax: renderSyntaxColorTheme(value.syntax, {
            baseBg,
            colorPalette,
            blendMode
        }),
        selectable
    };
}
function renderThemeColorKBD(value, options) {
    let { baseBg, blendMode, colorPalette } = options, rootOptions = {
        bg: baseBg,
        blendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        bg,
        fg: renderColorValue(value.fg, colorOptions),
        border: renderColorValue(value.border, colorOptions)
    };
}
function renderThemeColorAvatar(value, options) {
    let colorAvatar = {};
    for (let hue of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_HUES"])colorAvatar[hue] = renderThemeColorAvatarColor(value[hue], options);
    return colorAvatar;
}
function renderThemeColorAvatarColor(value, options) {
    let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        _blend: blendMode,
        bg,
        fg: renderColorValue(value.fg, colorOptions)
    };
}
function renderThemeColorBadge(value, options) {
    let colorBadge = {};
    for (let tone of THEME_COLOR_STATE_TONES)colorBadge[tone] = renderThemeColorBadgeColor(value[tone], options);
    return colorBadge;
}
function renderThemeColorBadgeColor(value, options) {
    let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = rootBlendMode, rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        bg,
        dot: renderColorValue(value.dot, colorOptions),
        fg: renderColorValue(value.fg, colorOptions),
        icon: renderColorValue(value.icon, colorOptions)
    };
}
function renderThemeColorButton(value, options) {
    return {
        default: renderThemeColorButtonTones(value.default, options),
        ghost: renderThemeColorButtonTones(value.ghost, options),
        bleed: renderThemeColorButtonTones(value.bleed, options)
    };
}
function renderThemeColorButtonTones(value, options) {
    let colorButtonMode = {};
    for (let tone of THEME_COLOR_STATE_TONES)colorButtonMode[tone] = renderThemeColorButtonStates(value[tone], options);
    return colorButtonMode;
}
function renderThemeColorButtonStates(value, options) {
    return {
        enabled: renderThemeColorState(value.enabled, options),
        hovered: renderThemeColorState(value.hovered, options),
        pressed: renderThemeColorState(value.pressed, options),
        selected: renderThemeColorState(value.selected, options),
        disabled: renderThemeColorState(value.disabled, options)
    };
}
function renderThemeColorState(value, options) {
    let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        _blend: blendMode,
        accent: {
            fg: renderColorValue(value.accent.fg, colorOptions)
        },
        avatar: renderThemeColorAvatar(value.avatar, {
            baseBg: bg,
            colorPalette,
            blendMode
        }),
        badge: renderThemeColorBadge(value.badge, {
            baseBg: bg,
            colorPalette,
            blendMode
        }),
        bg,
        border: renderColorValue(value.border, colorOptions),
        code: {
            bg: renderColorValue(value.code.bg, colorOptions),
            fg: renderColorValue(value.code.fg, colorOptions)
        },
        fg: renderColorValue(value.fg, colorOptions),
        icon: renderColorValue(value.icon, colorOptions),
        link: {
            fg: renderColorValue(value.link.fg, colorOptions)
        },
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions),
            fg: renderColorValue(value.muted.fg, colorOptions)
        },
        kbd: {
            bg: renderColorValue(value.kbd.bg, colorOptions),
            fg: renderColorValue(value.kbd.fg, colorOptions),
            border: renderColorValue(value.kbd.border, colorOptions)
        },
        skeleton: {
            from: renderColorValue(value.skeleton?.from, colorOptions),
            to: renderColorValue(value.skeleton?.to, colorOptions)
        }
    };
}
function renderThemeColorInput(value, options) {
    return {
        default: renderInputStatesColorTheme(value.default, options),
        invalid: renderInputStatesColorTheme(value.invalid, options)
    };
}
function renderInputStatesColorTheme(value, options) {
    return {
        enabled: renderInputStateColorTheme(value.enabled, options),
        hovered: renderInputStateColorTheme(value.hovered, options),
        readOnly: renderInputStateColorTheme(value.readOnly, options),
        disabled: renderInputStateColorTheme(value.disabled, options)
    };
}
function renderInputStateColorTheme(value, options) {
    let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        colorPalette,
        bg: baseBg,
        blendMode: rootBlendMode
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        colorPalette,
        bg,
        blendMode
    };
    return {
        _blend: blendMode,
        bg,
        border: renderColorValue(value.border, colorOptions),
        fg: renderColorValue(value.fg, colorOptions),
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions)
        },
        placeholder: renderColorValue(value.placeholder, colorOptions)
    };
}
function renderThemeColorSelectable(value, options) {
    let colorSelectable = {};
    for (let tone of THEME_COLOR_STATE_TONES)colorSelectable[tone] = renderThemeColorSelectableStates(value[tone], options);
    return colorSelectable;
}
function renderThemeColorSelectableStates(value, options) {
    return {
        enabled: renderThemeColorState(value.enabled, options),
        hovered: renderThemeColorState(value.hovered, options),
        pressed: renderThemeColorState(value.pressed, options),
        selected: renderThemeColorState(value.selected, options),
        disabled: renderThemeColorState(value.disabled, options)
    };
}
function renderSyntaxColorTheme(value, options) {
    let { colorPalette, baseBg, blendMode } = options, colorOptions = {
        colorPalette,
        bg: baseBg,
        blendMode
    };
    return {
        atrule: renderColorValue(value.atrule, colorOptions),
        attrName: renderColorValue(value.attrName, colorOptions),
        attrValue: renderColorValue(value.attrValue, colorOptions),
        attribute: renderColorValue(value.attribute, colorOptions),
        boolean: renderColorValue(value.boolean, colorOptions),
        builtin: renderColorValue(value.builtin, colorOptions),
        cdata: renderColorValue(value.cdata, colorOptions),
        char: renderColorValue(value.char, colorOptions),
        class: renderColorValue(value.class, colorOptions),
        className: renderColorValue(value.className, colorOptions),
        comment: renderColorValue(value.comment, colorOptions),
        constant: renderColorValue(value.constant, colorOptions),
        deleted: renderColorValue(value.deleted, colorOptions),
        doctype: renderColorValue(value.doctype, colorOptions),
        entity: renderColorValue(value.entity, colorOptions),
        function: renderColorValue(value.function, colorOptions),
        hexcode: renderColorValue(value.hexcode, colorOptions),
        id: renderColorValue(value.id, colorOptions),
        important: renderColorValue(value.important, colorOptions),
        inserted: renderColorValue(value.inserted, colorOptions),
        keyword: renderColorValue(value.keyword, colorOptions),
        number: renderColorValue(value.number, colorOptions),
        operator: renderColorValue(value.operator, colorOptions),
        prolog: renderColorValue(value.prolog, colorOptions),
        property: renderColorValue(value.property, colorOptions),
        pseudoClass: renderColorValue(value.pseudoClass, colorOptions),
        pseudoElement: renderColorValue(value.pseudoElement, colorOptions),
        punctuation: renderColorValue(value.punctuation, colorOptions),
        regex: renderColorValue(value.regex, colorOptions),
        selector: renderColorValue(value.selector, colorOptions),
        string: renderColorValue(value.string, colorOptions),
        symbol: renderColorValue(value.symbol, colorOptions),
        tag: renderColorValue(value.tag, colorOptions),
        unit: renderColorValue(value.unit, colorOptions),
        url: renderColorValue(value.url, colorOptions),
        variable: renderColorValue(value.variable, colorOptions)
    };
}
/** @internal */ function buildTheme(config) {
    let colorTheme = buildColorTheme(config), v2 = {
        _version: 2,
        avatar: config?.avatar ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].avatar,
        button: config?.button ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].button,
        card: config?.card ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].card,
        color: renderThemeColorSchemes(colorTheme, config),
        container: config?.container ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].container,
        font: config?.font ?? defaultThemeFonts,
        input: config?.input ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].input,
        layer: config?.layer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].layer,
        media: config?.media ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].media,
        radius: config?.radius ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].radius,
        shadow: config?.shadow ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].shadow,
        space: config?.space ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].space,
        style: config?.style ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getScopedTheme$2d$C$2d$sZsyAz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(v2);
}
function createSelectableTones(opts, base, dark, solid, muted) {
    return {
        default: _createSelectableStates(opts, base, dark, solid, muted, "default"),
        primary: _createSelectableStates(opts, base, dark, solid, muted, "primary"),
        positive: _createSelectableStates(opts, base, dark, solid, muted, "positive"),
        caution: _createSelectableStates(opts, base, dark, solid, muted, "caution"),
        critical: _createSelectableStates(opts, base, dark, solid, muted, "critical")
    };
}
function _createSelectableStates(opts, base, dark, solid, muted, tone) {
    return {
        enabled: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "enabled",
            tone
        }),
        hovered: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "hovered",
            tone
        }),
        pressed: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "pressed",
            tone
        }),
        selected: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "selected",
            tone
        }),
        disabled: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "disabled",
            tone
        })
    };
}
function createSolidTones(opts, base, dark, name) {
    return {
        default: {
            enabled: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "selected"
            })
        },
        transparent: {
            enabled: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "selected"
            })
        },
        primary: {
            enabled: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "selected"
            })
        },
        positive: {
            enabled: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "selected"
            })
        },
        caution: {
            enabled: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "selected"
            })
        },
        critical: {
            enabled: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "selected"
            })
        }
    };
}
function createButtonTones(opts, base, dark, solid, muted, mode) {
    return {
        default: opts.button({
            base,
            dark,
            solid: solid.default,
            muted: muted.default,
            mode
        }),
        primary: opts.button({
            base,
            dark,
            solid: solid.primary,
            muted: muted.primary,
            mode
        }),
        positive: opts.button({
            base,
            dark,
            solid: solid.positive,
            muted: muted.positive,
            mode
        }),
        caution: opts.button({
            base,
            dark,
            solid: solid.caution,
            muted: muted.caution,
            mode
        }),
        critical: opts.button({
            base,
            dark,
            solid: solid.critical,
            muted: muted.critical,
            mode
        })
    };
}
function createButtonModes(opts, base, dark, solid, muted) {
    return {
        default: createButtonTones(opts, base, dark, solid, muted, "default"),
        ghost: createButtonTones(opts, base, dark, solid, muted, "ghost"),
        bleed: createButtonTones(opts, base, dark, solid, muted, "bleed")
    };
}
function createCardStates(opts, base, dark, name, solid, muted) {
    return {
        enabled: opts.card({
            base,
            dark,
            name,
            state: "enabled",
            solid,
            muted
        }),
        disabled: opts.card({
            base,
            dark,
            name,
            state: "disabled",
            solid,
            muted
        }),
        hovered: opts.card({
            base,
            dark,
            name,
            state: "hovered",
            solid,
            muted
        }),
        pressed: opts.card({
            base,
            dark,
            name,
            state: "pressed",
            solid,
            muted
        }),
        selected: opts.card({
            base,
            dark,
            name,
            state: "selected",
            solid,
            muted
        })
    };
}
const black = "hsl(0, 0%, 0%)", white = "hsl(0, 0%, 100%)", colors = {
    default: {
        lightest: "hsl(0, 0%, 95%)",
        lighter: "hsl(0, 0%, 70%)",
        light: "hsl(0, 0%, 65%)",
        base: "hsl(0, 0%, 50%)",
        dark: "hsl(0, 0%, 35%)",
        darker: "hsl(0, 0%, 20%)",
        darkest: "hsl(0, 0%, 5%)"
    },
    transparent: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    primary: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    positive: {
        lightest: "hsl(120, 100%, 95%)",
        lighter: "hsl(120, 100%, 70%)",
        light: "hsl(120, 100%, 65%)",
        base: "hsl(120, 100%, 50%)",
        dark: "hsl(120, 100%, 35%)",
        darker: "hsl(120, 100%, 20%)",
        darkest: "hsl(120, 100%, 5%)"
    },
    caution: {
        lightest: "hsl(60, 100%, 95%)",
        lighter: "hsl(60, 100%, 70%)",
        light: "hsl(60, 100%, 65%)",
        base: "hsl(60, 100%, 50%)",
        dark: "hsl(60, 100%, 35%)",
        darker: "hsl(60, 100%, 20%)",
        darkest: "hsl(60, 100%, 5%)"
    },
    critical: {
        lightest: "hsl(0, 100%, 95%)",
        lighter: "hsl(0, 100%, 70%)",
        light: "hsl(0, 100%, 65%)",
        base: "hsl(0, 100%, 50%)",
        dark: "hsl(0, 100%, 35%)",
        darker: "hsl(0, 100%, 20%)",
        darkest: "hsl(0, 100%, 5%)"
    }
}, spots = {
    gray: "hsl(0, 0%, 50%)",
    red: "hsl(0, 100%, 50%)",
    orange: "hsl(30, 100%, 50%)",
    yellow: "hsl(60, 100%, 50%)",
    green: "hsl(120, 100%, 50%)",
    cyan: "hsl(180, 100%, 50%)",
    blue: "hsl(240, 100%, 50%)",
    purple: "hsl(270, 100%, 50%)",
    magenta: "hsl(300, 100%, 50%)"
}, tones = {
    transparent: {
        bg: [
            colors.transparent.darkest,
            colors.transparent.lightest
        ],
        fg: [
            colors.transparent.lightest,
            colors.transparent.darkest
        ],
        border: [
            colors.transparent.darker,
            colors.transparent.lighter
        ],
        focusRing: [
            colors.transparent.base,
            colors.transparent.base
        ]
    },
    primary: {
        bg: [
            colors.primary.darkest,
            colors.primary.lightest
        ],
        fg: [
            colors.primary.lightest,
            colors.primary.darkest
        ],
        border: [
            colors.primary.darker,
            colors.primary.lighter
        ],
        focusRing: [
            colors.primary.base,
            colors.primary.base
        ]
    },
    positive: {
        bg: [
            colors.positive.darkest,
            colors.positive.lightest
        ],
        fg: [
            colors.positive.lightest,
            colors.positive.darkest
        ],
        border: [
            colors.positive.darker,
            colors.positive.lighter
        ],
        focusRing: [
            colors.positive.base,
            colors.positive.base
        ]
    },
    caution: {
        bg: [
            colors.caution.darkest,
            colors.caution.lightest
        ],
        fg: [
            colors.caution.lightest,
            colors.caution.darkest
        ],
        border: [
            colors.caution.darker,
            colors.caution.lighter
        ],
        focusRing: [
            colors.caution.base,
            colors.caution.base
        ]
    },
    critical: {
        bg: [
            colors.critical.darkest,
            colors.critical.lightest
        ],
        fg: [
            colors.critical.lightest,
            colors.critical.darkest
        ],
        border: [
            colors.critical.darker,
            colors.critical.lighter
        ],
        focusRing: [
            colors.critical.base,
            colors.critical.base
        ]
    }
}, defaultOpts = {
    base: ({ dark, name })=>name === "default" ? {
            bg: dark ? black : white,
            fg: dark ? white : black,
            border: dark ? colors.default.darkest : colors.default.lightest,
            focusRing: colors.primary.base,
            shadow: {
                outline: black,
                umbra: black,
                penumbra: black,
                ambient: black
            },
            skeleton: {
                from: dark ? white : black,
                to: dark ? white : black
            }
        } : {
            bg: tones[name].bg[+!dark],
            fg: tones[name].fg[+!dark],
            border: tones[name].border[+!dark],
            focusRing: tones[name].focusRing[+!dark],
            shadow: {
                outline: black,
                umbra: black,
                penumbra: black,
                ambient: black
            },
            skeleton: {
                from: dark ? white : black,
                to: dark ? white : black
            }
        },
    solid: ({ base, dark, state, tone })=>{
        let color = colors[tone];
        return state === "hovered" ? {
            bg: dark ? color.light : color.dark,
            bg2: dark ? color.light : color.dark,
            border: dark ? color.lighter : color.darker,
            fg: dark ? color.darkest : color.lightest,
            icon: dark ? color.darkest : color.lightest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        } : {
            bg: color.base,
            bg2: color.base,
            border: dark ? color.light : color.dark,
            fg: dark ? color.darkest : color.lightest,
            icon: dark ? color.darkest : color.lightest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        };
    },
    muted: ({ base, dark, state, tone })=>{
        let color = colors[tone];
        return state === "hovered" ? {
            bg: dark ? color.darker : color.lighter,
            bg2: dark ? color.darker : color.lighter,
            border: dark ? color.lighter : color.darker,
            fg: dark ? color.lightest : color.darkest,
            icon: dark ? color.lightest : color.darkest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        } : {
            bg: dark ? color.darkest : color.lightest,
            bg2: dark ? color.darkest : color.lightest,
            border: dark ? color.darker : color.lighter,
            fg: dark ? color.lighter : color.darker,
            icon: dark ? color.lighter : color.darker,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        };
    },
    button: ({ base, mode, muted, solid })=>mode === "bleed" ? {
            ...muted,
            enabled: {
                bg: "transparent",
                bg2: "transparent",
                fg: muted.enabled.fg,
                icon: muted.enabled.fg,
                border: "transparent",
                muted: {
                    fg: black
                },
                accent: {
                    fg: black
                },
                link: {
                    fg: black
                },
                code: {
                    bg: black,
                    fg: black
                },
                skeleton: base.skeleton
            },
            hovered: {
                bg: muted.enabled.bg,
                bg2: muted.enabled.bg,
                fg: muted.hovered.fg,
                icon: muted.hovered.fg,
                border: "transparent",
                muted: {
                    fg: black
                },
                accent: {
                    fg: black
                },
                link: {
                    fg: black
                },
                code: {
                    bg: black,
                    fg: black
                },
                skeleton: base.skeleton
            }
        } : mode === "ghost" ? {
            ...solid,
            enabled: muted.enabled
        } : solid,
    card: ({ base })=>({
            bg: black,
            bg2: black,
            fg: black,
            icon: black,
            border: black,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        }),
    input: ()=>({
            bg: black,
            bg2: black,
            fg: black,
            border: black,
            placeholder: black
        }),
    selectable: ({ muted, state, tone })=>muted[tone][state],
    spot: ({ key })=>spots[key],
    syntax: ()=>({
            atrule: black,
            attrName: black,
            attrValue: black,
            attribute: black,
            boolean: black,
            builtin: black,
            cdata: black,
            char: black,
            class: black,
            className: black,
            comment: black,
            constant: black,
            deleted: black,
            doctype: black,
            entity: black,
            function: black,
            hexcode: black,
            id: black,
            important: black,
            inserted: black,
            keyword: black,
            number: black,
            operator: black,
            prolog: black,
            property: black,
            pseudoClass: black,
            pseudoElement: black,
            punctuation: black,
            regex: black,
            selector: black,
            string: black,
            symbol: black,
            tag: black,
            unit: black,
            url: black,
            variable: black
        })
};
function createInputModes(opts, base, dark, solid, muted) {
    return {
        default: {
            enabled: opts.input({
                base,
                dark,
                mode: "default",
                state: "enabled",
                solid: solid.default,
                muted: muted.default
            }),
            disabled: opts.input({
                base,
                dark,
                mode: "default",
                state: "disabled",
                solid: solid.default,
                muted: muted.default
            }),
            hovered: opts.input({
                base,
                dark,
                mode: "default",
                state: "hovered",
                solid: solid.default,
                muted: muted.default
            }),
            readOnly: opts.input({
                base,
                dark,
                mode: "default",
                state: "readOnly",
                solid: solid.default,
                muted: muted.default
            })
        },
        invalid: {
            enabled: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "enabled",
                solid: solid.default,
                muted: muted.default
            }),
            disabled: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "disabled",
                solid: solid.default,
                muted: muted.default
            }),
            hovered: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "hovered",
                solid: solid.default,
                muted: muted.default
            }),
            readOnly: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "readOnly",
                solid: solid.default,
                muted: muted.default
            })
        }
    };
}
function createMutedTones(opts, base, dark, name) {
    return {
        default: {
            enabled: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "selected"
            })
        },
        transparent: {
            enabled: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "selected"
            })
        },
        primary: {
            enabled: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "selected"
            })
        },
        positive: {
            enabled: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "selected"
            })
        },
        caution: {
            enabled: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "selected"
            })
        },
        critical: {
            enabled: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "selected"
            })
        }
    };
}
function createSpot(opts, base, dark) {
    return {
        gray: opts.spot({
            base,
            dark,
            key: "gray"
        }),
        blue: opts.spot({
            base,
            dark,
            key: "blue"
        }),
        purple: opts.spot({
            base,
            dark,
            key: "purple"
        }),
        magenta: opts.spot({
            base,
            dark,
            key: "magenta"
        }),
        red: opts.spot({
            base,
            dark,
            key: "red"
        }),
        orange: opts.spot({
            base,
            dark,
            key: "orange"
        }),
        yellow: opts.spot({
            base,
            dark,
            key: "yellow"
        }),
        green: opts.spot({
            base,
            dark,
            key: "green"
        }),
        cyan: opts.spot({
            base,
            dark,
            key: "cyan"
        })
    };
}
/**
* @public
* @deprecated Use `buildColorTheme` instead.
*/ function createColorTheme(partialOpts = {}) {
    let builders = {
        ...defaultOpts,
        ...partialOpts
    };
    return {
        light: _createColorScheme(builders, !1),
        dark: _createColorScheme(builders, !0)
    };
}
/**
* @internal
*/ function _createColorScheme(opts, dark) {
    return {
        default: _createColor(opts, dark, "default"),
        transparent: _createColor(opts, dark, "transparent"),
        primary: _createColor(opts, dark, "primary"),
        positive: _createColor(opts, dark, "positive"),
        caution: _createColor(opts, dark, "caution"),
        critical: _createColor(opts, dark, "critical")
    };
}
/**
* @internal
*/ function _createColor(opts, dark, name) {
    let base = opts.base({
        dark,
        name
    }), solid = createSolidTones(opts, base, dark, name), muted = createMutedTones(opts, base, dark, name);
    return {
        base,
        button: createButtonModes(opts, base, dark, solid, muted),
        card: createCardStates(opts, base, dark, name, solid, muted),
        dark,
        input: createInputModes(opts, base, dark, solid, muted),
        selectable: createSelectableTones(opts, base, dark, solid, muted),
        spot: createSpot(opts, base, dark),
        syntax: opts.syntax({
            base,
            dark
        }),
        solid,
        muted
    };
}
;
 //# sourceMappingURL=factory-BzXTX8_Q.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/hotkeys-Bd5rZOMO.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "i": (()=>useGlobalKeyDown),
    "n": (()=>KBD),
    "r": (()=>Inline),
    "t": (()=>Hotkeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-effect-event/dist/index.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
/**
* Adds global keydown event listener to the window.
*
* @param onKeyDown - The function to call when a keydown event is triggered.
* @param options - The options to pass to the addEventListener function (example, capture: true)
* @beta
*/ function useGlobalKeyDown(onKeyDown, options) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(7), t0;
    $[0] === onKeyDown ? t0 = $[1] : (t0 = (event)=>onKeyDown(event), $[0] = onKeyDown, $[1] = t0);
    let handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(t0), t1;
    $[2] !== handleKeyDown || $[3] !== options ? (t1 = ()=>{
        let handler = (event_0)=>handleKeyDown(event_0);
        return window.addEventListener("keydown", handler, options), ()=>window.removeEventListener("keydown", handler, options);
    }, $[2] = handleKeyDown, $[3] = options, $[4] = t1) : t1 = $[4];
    let t2;
    $[5] === options ? t2 = $[6] : (t2 = [
        options
    ], $[5] = options, $[6] = t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
}
function inlineBaseStyle() {
    return {
        lineHeight: "0",
        "&&:not([hidden])": {
            display: "block"
        },
        "& > div": {
            display: "inline-block",
            verticalAlign: "middle"
        }
    };
}
function inlineSpaceStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$space, (spaceIndex)=>{
        let _space = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(spaceIndex === .5 ? space[1] / 2 : space[spaceIndex]);
        return {
            margin: `-${_space} 0 0 -${_space}`,
            "& > div": {
                padding: `${_space} 0 0 ${_space}`
            }
        };
    });
}
const StyledInline = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledInline",
    componentId: "sc-ntfhm-0"
})(inlineBaseStyle, inlineSpaceStyle);
function InlineComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(16), as, childrenProp, gap, ref, restProps;
    $[0] === props ? (as = $[1], childrenProp = $[2], gap = $[3], ref = $[4], restProps = $[5]) : ({ as, children: childrenProp, gap, ref, ...restProps } = props, $[0] = props, $[1] = as, $[2] = childrenProp, $[3] = gap, $[4] = ref, $[5] = restProps);
    let t0;
    $[6] === childrenProp ? t0 = $[7] : (t0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(childrenProp, _temp), $[6] = childrenProp, $[7] = t0);
    let children = t0, t1;
    $[8] === gap ? t1 = $[9] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[8] = gap, $[9] = t1);
    let t2;
    return $[10] !== as || $[11] !== children || $[12] !== ref || $[13] !== restProps || $[14] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledInline, {
        "data-ui": "Inline",
        ...restProps,
        $space: t1,
        forwardedAs: as,
        ref,
        children
    }), $[10] = as, $[11] = children, $[12] = ref, $[13] = restProps, $[14] = t1, $[15] = t2) : t2 = $[15], t2;
}
function _temp(child) {
    return child && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: child
    });
}
/**
* The `Inline` component is a layout utility for aligning and spacing items horizontally.
*
* @public
*/ const Inline = InlineComponent, kbdBaseStyle = css`--card-bg-color:var(--card-kbd-bg-color);--card-border-color:var(--card-kbd-border-color);--card-fg-color:var(--card-kbd-fg-color);box-shadow:inset 0 0 0 1px var(--card-border-color);background:var(--card-bg-color);font:inherit;vertical-align:top;&:not([hidden]){display:inline-block;}`, KBDBase = styled.kbd.withConfig({
    displayName: "KBDBase",
    componentId: "sc-qhd42k-0"
})`${kbdBaseStyle}`, StyledKBD = /* @__PURE__ */ styled(KBDBase).withConfig({
    displayName: "StyledKBD",
    componentId: "sc-qhd42k-1"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"]);
function KBDComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(20), children, ref, restProps, t0, t1, t2;
    $[0] === props ? (children = $[1], ref = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6]) : ({ children, fontSize: t0, padding: t1, radius: t2, ref, ...restProps } = props, $[0] = props, $[1] = children, $[2] = ref, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2);
    let fontSize = t0 === void 0 ? 0 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? 2 : t2, t3;
    $[7] === radius ? t3 = $[8] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[7] = radius, $[8] = t3);
    let t4;
    $[9] !== children || $[10] !== fontSize ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        as: "span",
        size: fontSize,
        weight: "semibold",
        children
    }), $[9] = children, $[10] = fontSize, $[11] = t4) : t4 = $[11];
    let t5;
    $[12] !== padding || $[13] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        as: "span",
        padding,
        children: t4
    }), $[12] = padding, $[13] = t4, $[14] = t5) : t5 = $[14];
    let t6;
    return $[15] !== ref || $[16] !== restProps || $[17] !== t3 || $[18] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledKBD, {
        "data-ui": "KBD",
        ...restProps,
        $radius: t3,
        ref,
        children: t5
    }), $[15] = ref, $[16] = restProps, $[17] = t3, $[18] = t5, $[19] = t6) : t6 = $[19], t6;
}
/**
* Used to define some text as keyboard input.
*
* @public
*/ const KBD = KBDComponent, Key = styled(KBD).withConfig({
    displayName: "Key",
    componentId: "sc-ttp6vu-0"
})`&:not([hidden]){display:block;}`;
/**
* Represent hotkeys (a keyboard combination) with semantic `<kbd>` elements.
*
* @public
*/ function Hotkeys(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(31), className, fontSize, keys, padding, radius, ref, restProps, t0;
    $[0] === props ? (className = $[1], fontSize = $[2], keys = $[3], padding = $[4], radius = $[5], ref = $[6], restProps = $[7], t0 = $[8]) : ({ className, fontSize, gap: t0, keys, padding, radius, ref, ...restProps } = props, $[0] = props, $[1] = className, $[2] = fontSize, $[3] = keys, $[4] = padding, $[5] = radius, $[6] = ref, $[7] = restProps, $[8] = t0);
    let gap = t0 === void 0 ? .5 : t0, t1;
    $[9] === gap ? t1 = $[10] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[9] = gap, $[10] = t1);
    let spacing = t1;
    if (!keys || keys.length === 0) {
        let t2;
        return $[11] === Symbol.for("react.memo_cache_sentinel") ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}), $[11] = t2) : t2 = $[11], t2;
    }
    let t2;
    $[12] === className ? t2 = $[13] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-kWIjhW u-cJTEQk u-gIVJpv", className), $[12] = className, $[13] = t2);
    let t3;
    if ($[14] !== fontSize || $[15] !== keys || $[16] !== padding || $[17] !== radius) {
        let t4;
        $[19] !== fontSize || $[20] !== padding || $[21] !== radius ? (t4 = (key, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Key, {
                fontSize,
                padding,
                radius,
                children: key
            }, i), $[19] = fontSize, $[20] = padding, $[21] = radius, $[22] = t4) : t4 = $[22], t3 = keys.map(t4), $[14] = fontSize, $[15] = keys, $[16] = padding, $[17] = radius, $[18] = t3;
    } else t3 = $[18];
    let t4;
    $[23] !== spacing || $[24] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inline, {
        as: "span",
        gap: spacing,
        children: t3
    }), $[23] = spacing, $[24] = t3, $[25] = t4) : t4 = $[25];
    let t5;
    return $[26] !== ref || $[27] !== restProps || $[28] !== t2 || $[29] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("kbd", {
        className: t2,
        "data-ui": "Hotkeys",
        ref,
        ...restProps,
        children: t4
    }), $[26] = ref, $[27] = restProps, $[28] = t2, $[29] = t4, $[30] = t5) : t5 = $[30], t5;
}
;
 //# sourceMappingURL=hotkeys-Bd5rZOMO.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/layer-umnlcWXZ.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "t": (()=>Layer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function LayerChildren(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(29), children, className, forwardedRef, onActivate, onFocus, restProps, t0, t1;
    $[0] === props ? (children = $[1], className = $[2], forwardedRef = $[3], onActivate = $[4], onFocus = $[5], restProps = $[6], t0 = $[7], t1 = $[8]) : ({ as: t0, children, className, onActivate, onFocus, ref: forwardedRef, style: t1, ...restProps } = props, $[0] = props, $[1] = children, $[2] = className, $[3] = forwardedRef, $[4] = onActivate, $[5] = onFocus, $[6] = restProps, $[7] = t0, $[8] = t1);
    let as = t0 === void 0 ? "div" : t0, style = t1 === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"] : t1, { zIndex, isTopLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), lastFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), isTopLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isTopLayer), t2;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>ref.current, $[9] = t2) : t2 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t2);
    let t3, t4;
    $[10] !== isTopLayer || $[11] !== onActivate ? (t3 = ()=>{
        isTopLayerRef.current !== isTopLayer && isTopLayer && onActivate?.({
            activeElement: lastFocusedRef.current
        }), isTopLayerRef.current = isTopLayer;
    }, t4 = [
        isTopLayer,
        onActivate
    ], $[10] = isTopLayer, $[11] = onActivate, $[12] = t3, $[13] = t4) : (t3 = $[12], t4 = $[13]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    $[14] !== isTopLayer || $[15] !== onFocus ? (t5 = (event)=>{
        onFocus?.(event);
        let rootElement = ref.current, target = document.activeElement;
        isTopLayer && rootElement && target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(rootElement, target) && (lastFocusedRef.current = target);
    }, $[14] = isTopLayer, $[15] = onFocus, $[16] = t5) : t5 = $[16];
    let handleFocus = t5, Component = as, t6;
    $[17] === className ? t6 = $[18] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-emPzDJ", className), $[17] = className, $[18] = t6);
    let t7;
    $[19] !== style || $[20] !== zIndex ? (t7 = {
        ...style,
        zIndex
    }, $[19] = style, $[20] = zIndex, $[21] = t7) : t7 = $[21];
    let t8;
    return $[22] !== Component || $[23] !== children || $[24] !== handleFocus || $[25] !== restProps || $[26] !== t6 || $[27] !== t7 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        "data-ui": "Layer",
        ...restProps,
        className: t6,
        onFocus: handleFocus,
        ref,
        style: t7,
        children
    }), $[22] = Component, $[23] = children, $[24] = handleFocus, $[25] = restProps, $[26] = t6, $[27] = t7, $[28] = t8) : t8 = $[28], t8;
}
/**
* @public
*/ function Layer(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(10), children, restProps, t0;
    $[0] === props ? (children = $[1], restProps = $[2], t0 = $[3]) : ({ children, zOffset: t0, ...restProps } = props, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0);
    let zOffset = t0 === void 0 ? 1 : t0, t1;
    $[4] !== children || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LayerChildren, {
        ...restProps,
        children
    }), $[4] = children, $[5] = restProps, $[6] = t1) : t1 = $[6];
    let t2;
    return $[7] !== t1 || $[8] !== zOffset ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        zOffset,
        children: t1
    }), $[7] = t1, $[8] = zOffset, $[9] = t2) : t2 = $[9], t2;
}
;
 //# sourceMappingURL=layer-umnlcWXZ.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarCounter": (()=>AvatarCounter),
    "AvatarStack": (()=>AvatarStack),
    "Badge": (()=>Badge),
    "BoundaryElementProvider": (()=>BoundaryElementProvider),
    "Checkbox": (()=>Checkbox),
    "CodeSkeleton": (()=>CodeSkeleton),
    "ConditionalWrapper": (()=>ConditionalWrapper),
    "Container": (()=>Container),
    "Dialog": (()=>Dialog),
    "DialogContext": (()=>DialogContext),
    "DialogProvider": (()=>DialogProvider),
    "ElementQuery": (()=>ElementQuery),
    "ErrorBoundary": (()=>ErrorBoundary),
    "Heading": (()=>Heading),
    "HeadingSkeleton": (()=>HeadingSkeleton),
    "Label": (()=>Label),
    "LabelSkeleton": (()=>LabelSkeleton),
    "PortalProvider": (()=>PortalProvider),
    "Radio": (()=>Radio),
    "Select": (()=>Select),
    "Skeleton": (()=>Skeleton),
    "SrOnly": (()=>SrOnly),
    "Switch": (()=>Switch),
    "Tab": (()=>Tab),
    "TabList": (()=>TabList),
    "TabPanel": (()=>TabPanel),
    "TextArea": (()=>TextArea),
    "TextSkeleton": (()=>TextSkeleton),
    "Tree": (()=>Tree),
    "TreeItem": (()=>TreeItem),
    "VirtualList": (()=>VirtualList),
    "_isScrollable": (()=>_isScrollable),
    "createColorTheme": (()=>createColorTheme),
    "hexToRgb": (()=>hexToRgb),
    "hslToRgb": (()=>hslToRgb),
    "multiply": (()=>multiply),
    "parseColor": (()=>parseColor),
    "responsiveCodeFontStyle": (()=>responsiveCodeFontStyle),
    "responsiveHeadingFont": (()=>responsiveHeadingFont),
    "responsiveLabelFont": (()=>responsiveLabelFont),
    "responsiveTextFont": (()=>responsiveTextFont),
    "rgbToHex": (()=>rgbToHex),
    "rgbToHsl": (()=>rgbToHsl),
    "rgba": (()=>rgba),
    "screen": (()=>screen),
    "studioTheme": (()=>studioTheme),
    "useArrayProp": (()=>useArrayProp),
    "useClickOutside": (()=>useClickOutside),
    "useDialog": (()=>useDialog),
    "useElementRect": (()=>useElementRect),
    "useElementSize": (()=>useElementSize),
    "useForwardedRef": (()=>useForwardedRef),
    "usePrefersDark": (()=>usePrefersDark),
    "useTree": (()=>useTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/textInput-DhYi5cPT.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/responsiveFont-Cyvxxz-G.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/button-DnJrhWml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/elementSizeObserver-pevZfdGa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/arrow-CleOpGKV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useClickOutsideEvent-CC1zgOmv.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/factory-BzXTX8_Q.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/hotkeys-Bd5rZOMO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/layer-umnlcWXZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ChevronDown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/ChevronDown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Close.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ToggleArrowRight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/ToggleArrowRight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Checkmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Checkmark.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Remove.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
;
;
/**
* @public
* @deprecated Use `createColorTheme` from `@sanity/ui/theme` instead.
*/ const createColorTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], hexToRgb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"], hslToRgb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"], multiply = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"], parseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"], rgbToHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"], rgbToHsl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"], rgba = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"], screen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], studioTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$factory$2d$BzXTX8_Q$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(), BASE_STYLE = {
    width: "100%",
    margin: "0 auto"
};
function containerBaseStyle() {
    return BASE_STYLE;
}
function responsiveContainerWidthStyle(props) {
    let { container, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$width, (val)=>({
            maxWidth: val === "auto" ? "none" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(container[val])
        }));
}
const StyledContainer = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledContainer",
    componentId: "sc-c2h24p-0"
})(containerBaseStyle, responsiveContainerWidthStyle);
function ContainerComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12), as, ref, restProps, t0;
    $[0] === props ? (as = $[1], ref = $[2], restProps = $[3], t0 = $[4]) : ({ as, ref, width: t0, ...restProps } = props, $[0] = props, $[1] = as, $[2] = ref, $[3] = restProps, $[4] = t0);
    let width = t0 === void 0 ? 2 : t0, t1;
    $[5] === width ? t1 = $[6] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(width), $[5] = width, $[6] = t1);
    let t2;
    return $[7] !== as || $[8] !== ref || $[9] !== restProps || $[10] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledContainer, {
        "data-ui": "Container",
        ...restProps,
        $width: t1,
        forwardedAs: as,
        ref
    }), $[7] = as, $[8] = ref, $[9] = restProps, $[10] = t1, $[11] = t2) : t2 = $[11], t2;
}
/**
* The `Container` component wraps content layout in a defined set of widths.
*
* @public
*/ const Container = ContainerComponent;
function dialogStyle({ theme }) {
    let { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(theme);
    return {
        background: color.backdrop
    };
}
function responsiveDialogPositionStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$position, (position)=>({
            "&&": {
                position
            }
        }));
}
/**
* @internal
*/ const DialogContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/dialog", {
    version: 0
});
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function useDialog() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DialogContext);
}
function isTargetWithinScope(boundaryElement, portalElement, target) {
    return !boundaryElement || !portalElement || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(boundaryElement, target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(portalElement, target);
}
const StyledDialog = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]).withConfig({
    displayName: "StyledDialog",
    componentId: "sc-330x68-0"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"], dialogStyle, responsiveDialogPositionStyle);
function DialogCard(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(47), { __unstable_autoFocus: autoFocus, __unstable_hideCloseButton: hideCloseButton, children, contentRef: forwardedContentRef, footer, header, id, onClickOutside, onClose, portal: portalProp, radius: radiusProp, ref: forwardedRef, scheme, shadow: shadowProp, width: widthProp } = props, portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(), t0;
    $[0] !== portal || $[1] !== portalProp ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(portal, portalProp), $[0] = portal, $[1] = portalProp, $[2] = t0) : t0 = $[2];
    let portalElement = t0, boundaryElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])().element, t1;
    $[3] === radiusProp ? t1 = $[4] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radiusProp), $[3] = radiusProp, $[4] = t1);
    let radius = t1, t2;
    $[5] === shadowProp ? t2 = $[6] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(shadowProp), $[5] = shadowProp, $[6] = t2);
    let shadow = t2, t3;
    $[7] === widthProp ? t3 = $[8] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(widthProp), $[7] = widthProp, $[8] = t3);
    let width = t3, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), { isTopLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), labelId = `${id}_label`, showCloseButton = !!onClose && hideCloseButton === !1, showHeader = !!header || showCloseButton, t4;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[9] = t4) : t4 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4);
    let t5;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>contentRef.current, $[10] = t5) : t5 = $[10], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedContentRef, t5);
    let t6, t7;
    $[11] === autoFocus ? (t6 = $[12], t7 = $[13]) : (t6 = ()=>{
        autoFocus && ref.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(ref.current);
    }, t7 = [
        autoFocus,
        ref
    ], $[11] = autoFocus, $[12] = t6, $[13] = t7), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    $[14] !== boundaryElement || $[15] !== isTopLayer || $[16] !== onClose || $[17] !== portalElement ? (t8 = (event)=>{
        if (!isTopLayer || !onClose) return;
        let target = document.activeElement;
        (!target || isTargetWithinScope(boundaryElement, portalElement, target)) && event.key === "Escape" && (event.preventDefault(), event.stopPropagation(), onClose());
    }, $[14] = boundaryElement, $[15] = isTopLayer, $[16] = onClose, $[17] = portalElement, $[18] = t8) : t8 = $[18], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(t8);
    let t9;
    $[19] !== boundaryElement || $[20] !== isTopLayer || $[21] !== onClickOutside || $[22] !== portalElement ? (t9 = isTopLayer && onClickOutside && ((event_0)=>{
        let target_0 = event_0.target;
        (!target_0 || isTargetWithinScope(boundaryElement, portalElement, target_0)) && onClickOutside();
    }), $[19] = boundaryElement, $[20] = isTopLayer, $[21] = onClickOutside, $[22] = portalElement, $[23] = t9) : t9 = $[23];
    let t10;
    $[24] === Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>[
            ref.current
        ], $[24] = t10) : t10 = $[24], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(t9, t10);
    let t11;
    $[25] !== header || $[26] !== labelId || $[27] !== onClose || $[28] !== showCloseButton || $[29] !== showHeader ? (t11 = showHeader && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: "u-emPzDJ u-eYlglL",
        "data-ui": "DialogHeader",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
            align: "flex-start",
            padding: 3,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
                    flex: 1,
                    padding: 2,
                    children: header && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                        id: labelId,
                        size: 1,
                        weight: "semibold",
                        children: header
                    })
                }),
                showCloseButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
                    flex: "none",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
                        "aria-label": "Close dialog",
                        disabled: !onClose,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"],
                        mode: "bleed",
                        onClick: onClose,
                        padding: 2
                    })
                })
            ]
        })
    }), $[25] = header, $[26] = labelId, $[27] = onClose, $[28] = showCloseButton, $[29] = showHeader, $[30] = t11) : t11 = $[30];
    let t12;
    $[31] === children ? t12 = $[32] : (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: "u-dFXmkO u-gWzzAr u-emPzDJ u-dStxMA",
        "data-ui": "DialogContent",
        flex: 1,
        ref: contentRef,
        tabIndex: -1,
        children
    }), $[31] = children, $[32] = t12);
    let t13;
    $[33] === footer ? t13 = $[34] : (t13 = footer && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: "u-emPzDJ u-cYUUrS",
        "data-ui": "DialogFooter",
        children: footer
    }), $[33] = footer, $[34] = t13);
    let t14;
    $[35] !== t11 || $[36] !== t12 || $[37] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        className: "u-jLKaQQ u-diGfnu",
        direction: "column",
        flex: 1,
        children: [
            t11,
            t12,
            t13
        ]
    }), $[35] = t11, $[36] = t12, $[37] = t13, $[38] = t14) : t14 = $[38];
    let t15;
    $[39] !== radius || $[40] !== scheme || $[41] !== shadow || $[42] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"], {
        className: "u-ftCJS u-jLKaQQ u-fqYOpD u-diGfnu",
        display: "flex",
        radius,
        ref,
        scheme,
        shadow,
        children: t14
    }), $[39] = radius, $[40] = scheme, $[41] = shadow, $[42] = t14, $[43] = t15) : t15 = $[43];
    let t16;
    return $[44] !== t15 || $[45] !== width ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Container, {
        className: "u-fAtomh u-bhTTzp u-ePwsZv u-bsGhWR u-diGfnu",
        "data-ui": "DialogCard",
        display: "flex",
        width,
        children: t15
    }), $[44] = t15, $[45] = width, $[46] = t16) : t16 = $[46], t16;
}
/**
* The Dialog component.
*
* @public
*/ function Dialog(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(78), dialog = useDialog(), { layer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), _positionProp, _zOffsetProp, children, className, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, portalProp, ref, restProps, scheme, t0, t1, t2, t3, t4, t5, t6;
    $[0] === props ? (_positionProp = $[1], _zOffsetProp = $[2], children = $[3], className = $[4], contentRef = $[5], footer = $[6], header = $[7], id = $[8], onActivate = $[9], onClickOutside = $[10], onClose = $[11], onFocus = $[12], portalProp = $[13], ref = $[14], restProps = $[15], scheme = $[16], t0 = $[17], t1 = $[18], t2 = $[19], t3 = $[20], t4 = $[21], t5 = $[22], t6 = $[23]) : ({ __unstable_autoFocus: t0, __unstable_hideCloseButton: t1, cardRadius: t2, cardShadow: t3, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, padding: t4, portal: portalProp, position: _positionProp, ref, scheme, width: t5, zOffset: _zOffsetProp, animate: t6, className, ...restProps } = props, $[0] = props, $[1] = _positionProp, $[2] = _zOffsetProp, $[3] = children, $[4] = className, $[5] = contentRef, $[6] = footer, $[7] = header, $[8] = id, $[9] = onActivate, $[10] = onClickOutside, $[11] = onClose, $[12] = onFocus, $[13] = portalProp, $[14] = ref, $[15] = restProps, $[16] = scheme, $[17] = t0, $[18] = t1, $[19] = t2, $[20] = t3, $[21] = t4, $[22] = t5, $[23] = t6);
    let autoFocus = t0 === void 0 || t0, hideCloseButton = t1 !== void 0 && t1, cardRadiusProp = t2 === void 0 ? 4 : t2, cardShadow = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, widthProp = t5 === void 0 ? 0 : t5, _animate = t6 !== void 0 && t6, positionProp = _positionProp ?? (dialog.position || "fixed"), zOffsetProp = _zOffsetProp ?? (dialog.zOffset || layer.dialog.zOffset), animate = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])() && _animate, portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(), t7;
    $[24] !== portal || $[25] !== portalProp ? (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(portal, portalProp), $[24] = portal, $[25] = portalProp, $[26] = t7) : t7 = $[26];
    let portalElement = t7, boundaryElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])().element, t8;
    $[27] === cardRadiusProp ? t8 = $[28] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(cardRadiusProp), $[27] = cardRadiusProp, $[28] = t8);
    let cardRadius = t8, t9;
    $[29] === paddingProp ? t9 = $[30] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingProp), $[29] = paddingProp, $[30] = t9);
    let padding = t9, t10;
    $[31] === positionProp ? t10 = $[32] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(positionProp), $[31] = positionProp, $[32] = t10);
    let position = t10, t11;
    $[33] === widthProp ? t11 = $[34] : (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(widthProp), $[33] = widthProp, $[34] = t11);
    let width = t11, t12;
    $[35] === zOffsetProp ? t12 = $[36] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(zOffsetProp), $[35] = zOffsetProp, $[36] = t12);
    let zOffset = t12, preDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), postDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), focusedElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t13;
    $[37] === onFocus ? t13 = $[38] : (t13 = (event)=>{
        onFocus?.(event);
        let target = event.target, cardElement = cardRef.current;
        cardElement && target === preDivRef.current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(cardElement) : cardElement && target === postDivRef.current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(cardElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(event.target) && (focusedElementRef.current = event.target);
    }, $[37] = onFocus, $[38] = t13);
    let handleFocus = t13, labelId = `${id}_label`, rootClickTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0), t14;
    $[39] !== boundaryElement || $[40] !== portalElement ? (t14 = ()=>{
        rootClickTimeoutRef.current && clearTimeout(rootClickTimeoutRef.current), rootClickTimeoutRef.current = setTimeout(()=>{
            let activeElement = document.activeElement;
            if (activeElement && !isTargetWithinScope(boundaryElement, portalElement, activeElement)) {
                let target_0 = focusedElementRef.current;
                if (!target_0 || !document.body.contains(target_0)) {
                    let cardElement_0 = cardRef.current;
                    cardElement_0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(cardElement_0);
                    return;
                }
                target_0.focus();
            }
        }, 0);
    }, $[39] = boundaryElement, $[40] = portalElement, $[41] = t14) : t14 = $[41];
    let handleRootClick = t14, t15 = animate && "u-evIBAF u-tKGdt", t16;
    $[42] !== className || $[43] !== t15 ? (t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-fAtomh u-kyGdCf u-bsGhWR u-kiKDyH u-dFXmkO u-hWgptE u-qbeer u-djbxbl", t15, className), $[42] = className, $[43] = t15, $[44] = t16) : t16 = $[44];
    let t17;
    $[45] === Symbol.for("react.memo_cache_sentinel") ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: preDivRef,
        tabIndex: 0
    }), $[45] = t17) : t17 = $[45];
    let t18;
    $[46] !== autoFocus || $[47] !== cardRadius || $[48] !== cardShadow || $[49] !== children || $[50] !== contentRef || $[51] !== footer || $[52] !== header || $[53] !== hideCloseButton || $[54] !== id || $[55] !== onClickOutside || $[56] !== onClose || $[57] !== portalProp || $[58] !== scheme || $[59] !== width ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogCard, {
        __unstable_autoFocus: autoFocus,
        __unstable_hideCloseButton: hideCloseButton,
        contentRef,
        footer,
        header,
        id,
        onClickOutside,
        onClose,
        portal: portalProp,
        radius: cardRadius,
        ref: cardRef,
        scheme,
        shadow: cardShadow,
        width,
        children
    }), $[46] = autoFocus, $[47] = cardRadius, $[48] = cardShadow, $[49] = children, $[50] = contentRef, $[51] = footer, $[52] = header, $[53] = hideCloseButton, $[54] = id, $[55] = onClickOutside, $[56] = onClose, $[57] = portalProp, $[58] = scheme, $[59] = width, $[60] = t18) : t18 = $[60];
    let t19;
    $[61] === Symbol.for("react.memo_cache_sentinel") ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: postDivRef,
        tabIndex: 0
    }), $[61] = t19) : t19 = $[61];
    let t20;
    $[62] !== handleFocus || $[63] !== handleRootClick || $[64] !== id || $[65] !== labelId || $[66] !== onActivate || $[67] !== padding || $[68] !== position || $[69] !== ref || $[70] !== restProps || $[71] !== t16 || $[72] !== t18 || $[73] !== zOffset ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(StyledDialog, {
        ...restProps,
        $padding: padding,
        $position: position,
        "aria-labelledby": labelId,
        className: t16,
        "aria-modal": !0,
        "data-ui": "Dialog",
        id,
        onActivate,
        onClick: handleRootClick,
        onFocus: handleFocus,
        ref,
        role: "dialog",
        zOffset,
        children: [
            t17,
            t18,
            t19
        ]
    }), $[62] = handleFocus, $[63] = handleRootClick, $[64] = id, $[65] = labelId, $[66] = onActivate, $[67] = padding, $[68] = position, $[69] = ref, $[70] = restProps, $[71] = t16, $[72] = t18, $[73] = zOffset, $[74] = t20) : t20 = $[74];
    let t21;
    return $[75] !== portalProp || $[76] !== t20 ? (t21 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        __unstable_name: portalProp,
        children: t20
    }), $[75] = portalProp, $[76] = t20, $[77] = t21) : t21 = $[77], t21;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function DialogProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6), { children, position, zOffset } = props, t0;
    $[0] !== position || $[1] !== zOffset ? (t0 = {
        version: 0,
        position,
        zOffset
    }, $[0] = position, $[1] = zOffset, $[2] = t0) : t0 = $[2];
    let contextValue = t0, t1;
    return $[3] !== children || $[4] !== contextValue ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContext.Provider, {
        value: contextValue,
        children
    }), $[3] = children, $[4] = contextValue, $[5] = t1) : t1 = $[5], t1;
}
const StyledSkeleton$1 = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledSkeleton",
    componentId: "sc-qq1bsx-0"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"]);
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function Skeleton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(21), className, delay, radius, ref, restProps, t0;
    $[0] === props ? (className = $[1], delay = $[2], radius = $[3], ref = $[4], restProps = $[5], t0 = $[6]) : ({ animated: t0, className, delay, radius, ref, ...restProps } = props, $[0] = props, $[1] = className, $[2] = delay, $[3] = radius, $[4] = ref, $[5] = restProps, $[6] = t0);
    let animated = t0 !== void 0 && t0, [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!delay), t1, t2;
    $[7] === delay ? (t1 = $[8], t2 = $[9]) : (t1 = ()=>{
        if (!delay) return;
        let timeout = setTimeout(()=>{
            setVisible(!0);
        }, delay);
        return ()=>{
            clearTimeout(timeout);
        };
    }, t2 = [
        delay
    ], $[7] = delay, $[8] = t1, $[9] = t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    $[10] === radius ? t3 = $[11] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[10] = radius, $[11] = t3);
    let t4 = !delay || visible ? "u-frJqtw" : "u-bgTIyZ", t5 = animated ? "u-bjraDg u-iWSyZJ u-dJxRDW u-eYpbHi u-krabKr u-TeBDG u-kugzhg u-gPHhfd u-anCSM u-kAaLvT u-UPzAf u-kNAlYZ u-eBCRlA u-cgyejD" : "u-iWSyZJ", t6;
    $[12] !== className || $[13] !== t4 || $[14] !== t5 ? (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-eyEVfe u-eCMeFC", t4, t5, className), $[12] = className, $[13] = t4, $[14] = t5, $[15] = t6) : t6 = $[15];
    let t7;
    return $[16] !== ref || $[17] !== restProps || $[18] !== t3 || $[19] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledSkeleton$1, {
        "data-ui": "Skeleton",
        ...restProps,
        $radius: t3,
        className: t6,
        ref
    }), $[16] = ref, $[17] = restProps, $[18] = t3, $[19] = t6, $[20] = t7) : t7 = $[20], t7;
}
const StyledSkeleton = /* @__PURE__ */ styled(Skeleton).withConfig({
    displayName: "StyledSkeleton",
    componentId: "sc-pe7hmi-0"
})((props)=>{
    let { $size, $style } = props, { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), fontStyle = font[$style];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, $size, (sizeIndex)=>{
        let fontSize = fontStyle.sizes[sizeIndex];
        return {
            height: fontSize.lineHeight - fontSize.ascenderHeight - fontSize.descenderHeight
        };
    });
});
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function TextSkeleton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8), restProps, t0;
    $[0] === props ? (restProps = $[1], t0 = $[2]) : ({ size: t0, ...restProps } = props, $[0] = props, $[1] = restProps, $[2] = t0);
    let size = t0 === void 0 ? 2 : t0, t1;
    $[3] === size ? t1 = $[4] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[3] = size, $[4] = t1);
    let $size = t1, t2;
    return $[5] !== $size || $[6] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledSkeleton, {
        "data-ui": "TextSkeleton",
        ...restProps,
        $size,
        $style: "text"
    }), $[5] = $size, $[6] = restProps, $[7] = t2) : t2 = $[7], t2;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function LabelSkeleton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8), restProps, t0;
    $[0] === props ? (restProps = $[1], t0 = $[2]) : ({ size: t0, ...restProps } = props, $[0] = props, $[1] = restProps, $[2] = t0);
    let size = t0 === void 0 ? 2 : t0, t1;
    $[3] === size ? t1 = $[4] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[3] = size, $[4] = t1);
    let $size = t1, t2;
    return $[5] !== $size || $[6] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledSkeleton, {
        "data-ui": "LabelSkeleton",
        ...restProps,
        $size,
        $style: "label"
    }), $[5] = $size, $[6] = restProps, $[7] = t2) : t2 = $[7], t2;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function HeadingSkeleton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8), restProps, t0;
    $[0] === props ? (restProps = $[1], t0 = $[2]) : ({ size: t0, ...restProps } = props, $[0] = props, $[1] = restProps, $[2] = t0);
    let size = t0 === void 0 ? 2 : t0, t1;
    $[3] === size ? t1 = $[4] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[3] = size, $[4] = t1);
    let $size = t1, t2;
    return $[5] !== $size || $[6] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledSkeleton, {
        "data-ui": "HeadingSkeleton",
        ...restProps,
        $size,
        $style: "heading"
    }), $[5] = $size, $[6] = restProps, $[7] = t2) : t2 = $[7], t2;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function CodeSkeleton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8), restProps, t0;
    $[0] === props ? (restProps = $[1], t0 = $[2]) : ({ size: t0, ...restProps } = props, $[0] = props, $[1] = restProps, $[2] = t0);
    let size = t0 === void 0 ? 2 : t0, t1;
    $[3] === size ? t1 = $[4] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[3] = size, $[4] = t1);
    let $size = t1, t2;
    return $[5] !== $size || $[6] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledSkeleton, {
        "data-ui": "CodeSkeleton",
        ...restProps,
        $size,
        $style: "code"
    }), $[5] = $size, $[6] = restProps, $[7] = t2) : t2 = $[7], t2;
}
/**
* @public
*/ function Tab(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(35), className, focused, forwardedRef, icon, id, label, onClick, onFocus, restProps, selected, t0, t1;
    $[0] === props ? (className = $[1], focused = $[2], forwardedRef = $[3], icon = $[4], id = $[5], label = $[6], onClick = $[7], onFocus = $[8], restProps = $[9], selected = $[10], t0 = $[11], t1 = $[12]) : ({ className, icon, id, focused, fontSize: t0, label, onClick, onFocus, padding: t1, ref: forwardedRef, selected, ...restProps } = props, $[0] = props, $[1] = className, $[2] = focused, $[3] = forwardedRef, $[4] = icon, $[5] = id, $[6] = label, $[7] = onClick, $[8] = onFocus, $[9] = restProps, $[10] = selected, $[11] = t0, $[12] = t1);
    let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 2 : t1, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), focusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), t2;
    $[13] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>ref.current, $[13] = t2) : t2 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t2);
    let t3;
    $[14] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ()=>{
        focusedRef.current = !1;
    }, $[14] = t3) : t3 = $[14];
    let handleBlur = t3, t4;
    $[15] === onFocus ? t4 = $[16] : (t4 = (event)=>{
        focusedRef.current = !0, onFocus && onFocus(event);
    }, $[15] = onFocus, $[16] = t4);
    let handleFocus = t4, t5, t6;
    $[17] === focused ? (t5 = $[18], t6 = $[19]) : (t5 = ()=>{
        focused && !focusedRef.current && (ref.current && ref.current.focus(), focusedRef.current = !0);
    }, t6 = [
        focused
    ], $[17] = focused, $[18] = t5, $[19] = t6), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    $[20] === className ? t7 = $[21] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-hPjhXT", className), $[20] = className, $[21] = t7);
    let t8 = selected ? "true" : "false", t9 = selected ? 0 : -1, t10;
    return $[22] !== fontSize || $[23] !== handleFocus || $[24] !== icon || $[25] !== id || $[26] !== label || $[27] !== onClick || $[28] !== padding || $[29] !== restProps || $[30] !== selected || $[31] !== t7 || $[32] !== t8 || $[33] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        className: t7,
        "data-ui": "Tab",
        ...restProps,
        "aria-selected": t8,
        fontSize,
        icon,
        id,
        mode: "bleed",
        onClick,
        onBlur: handleBlur,
        onFocus: handleFocus,
        padding,
        ref,
        role: "tab",
        selected,
        tabIndex: t9,
        text: label,
        type: "button"
    }), $[22] = fontSize, $[23] = handleFocus, $[24] = icon, $[25] = id, $[26] = label, $[27] = onClick, $[28] = padding, $[29] = restProps, $[30] = selected, $[31] = t7, $[32] = t8, $[33] = t9, $[34] = t10) : t10 = $[34], t10;
}
/**
* @public
*/ function TabList(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(20), childrenProp, className, ref, restProps;
    $[0] === props ? (childrenProp = $[1], className = $[2], ref = $[3], restProps = $[4]) : ({ children: childrenProp, className, ref, ...restProps } = props, $[0] = props, $[1] = childrenProp, $[2] = className, $[3] = ref, $[4] = restProps);
    let [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1), t0;
    if ($[5] !== childrenProp || $[6] !== focusedIndex) {
        let children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(childrenProp).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"]), t1;
        $[8] === focusedIndex ? t1 = $[9] : (t1 = (child, childIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                focused: focusedIndex === childIndex,
                key: childIndex,
                onFocus: ()=>setFocusedIndex(childIndex)
            }), $[8] = focusedIndex, $[9] = t1), t0 = children.map(t1), $[5] = childrenProp, $[6] = focusedIndex, $[7] = t0;
    } else t0 = $[7];
    let tabs = t0, numTabs = tabs.length, t1;
    $[10] === numTabs ? t1 = $[11] : (t1 = (event)=>{
        event.key === "ArrowLeft" && setFocusedIndex((prevIndex)=>(prevIndex + numTabs - 1) % numTabs), event.key === "ArrowRight" && setFocusedIndex((prevIndex_0)=>(prevIndex_0 + 1) % numTabs);
    }, $[10] = numTabs, $[11] = t1);
    let handleKeyDown = t1, t2;
    $[12] === className ? t2 = $[13] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-fKaiaP u-eJIKXE u-bCEGXA u-hlTznM", className), $[12] = className, $[13] = t2);
    let t3;
    return $[14] !== handleKeyDown || $[15] !== ref || $[16] !== restProps || $[17] !== t2 || $[18] !== tabs ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], {
        className: t2,
        "data-ui": "TabList",
        ...restProps,
        onKeyDown: handleKeyDown,
        ref,
        role: "tablist",
        children: tabs
    }), $[14] = handleKeyDown, $[15] = ref, $[16] = restProps, $[17] = t2, $[18] = tabs, $[19] = t3) : t3 = $[19], t3;
}
/**
* @public
*/ function TabPanel(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8), flex, restProps;
    $[0] === props ? (flex = $[1], restProps = $[2]) : ({ flex, ...restProps } = props, $[0] = props, $[1] = flex, $[2] = restProps);
    let t0 = props.tabIndex === void 0 ? 0 : props.tabIndex, t1;
    return $[3] !== flex || $[4] !== props.children || $[5] !== restProps || $[6] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        "data-ui": "TabPanel",
        ...restProps,
        flex,
        role: "tabpanel",
        tabIndex: t0,
        children: props.children
    }), $[3] = flex, $[4] = props.children, $[5] = restProps, $[6] = t0, $[7] = t1) : t1 = $[7], t1;
}
function _findPrevItemElement(state, itemElements, focusedElement) {
    let idx = itemElements.indexOf(focusedElement), els = itemElements.slice(0, idx), len = els.length;
    for(let i = len - 1; i >= 0; --i){
        let itemKey = els[i].getAttribute("data-tree-key");
        if (!itemKey) continue;
        let segments = itemKey.split("/");
        segments.pop();
        let p = [], expanded = !0;
        for(let j = 0; j < segments.length; j += 1)if (p.push(segments[j]), !state[p.join("/")]?.expanded) {
            expanded = !1;
            break;
        }
        if (expanded) return els[i];
    }
    return null;
}
function _findNextItemElement(state, itemElements, focusedElement) {
    let idx = itemElements.indexOf(focusedElement), els = itemElements.slice(idx), len = itemElements.length;
    for(let i = 1; i < len; i += 1){
        if (!els[i]) continue;
        let itemKey = els[i].getAttribute("data-tree-key");
        if (!itemKey) continue;
        let segments = itemKey.split("/");
        segments.pop();
        let p = [], expanded = !0;
        for(let j = 0; j < segments.length; j += 1)if (p.push(segments[j]), !state[p.join("/")]?.expanded) {
            expanded = !1;
            break;
        }
        if (expanded) return els[i];
    }
    return null;
}
function _focusItemElement(el) {
    if (el.getAttribute("role") === "treeitem" && el.focus(), el.getAttribute("role") === "none") {
        let firstChild = el.firstChild;
        firstChild && firstChild instanceof HTMLElement && firstChild.focus();
    }
}
/**
* @internal
*/ const TreeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/tree", null);
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function Tree(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(38), children, forwardedRef, onFocus, restProps, t0;
    $[0] === props ? (children = $[1], forwardedRef = $[2], onFocus = $[3], restProps = $[4], t0 = $[5]) : ({ children, gap: t0, onFocus, ref: forwardedRef, ...restProps } = props, $[0] = props, $[1] = children, $[2] = forwardedRef, $[3] = onFocus, $[4] = restProps, $[5] = t0);
    let gap = t0 === void 0 ? 1 : t0, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [focusedElement, setFocusedElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), focusedElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(focusedElement), t1;
    $[6] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [], $[6] = t1) : t1 = $[6];
    let path = t1, t2;
    $[7] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[7] = t2) : t2 = $[7];
    let [itemElements, setItemElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(t2), t3;
    $[8] === Symbol.for("react.memo_cache_sentinel") ? (t3 = {}, $[8] = t3) : t3 = $[8];
    let [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(t3), stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(state), t4;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[9] = t4) : t4 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4);
    let t5, t6;
    $[10] === focusedElement ? (t5 = $[11], t6 = $[12]) : (t5 = ()=>{
        focusedElementRef.current = focusedElement;
    }, t6 = [
        focusedElement
    ], $[10] = focusedElement, $[11] = t5, $[12] = t6), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    $[13] === state ? (t7 = $[14], t8 = $[15]) : (t7 = ()=>{
        stateRef.current = state;
    }, t8 = [
        state
    ], $[13] = state, $[14] = t7, $[15] = t8), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[16] === Symbol.for("react.memo_cache_sentinel") ? (t9 = (element, path_0, expanded, selected)=>(setState((s)=>({
                ...s,
                [path_0]: {
                    element,
                    expanded
                }
            })), selected && setFocusedElement(element), ()=>{
            setState((s_0)=>{
                let newState = {
                    ...s_0
                };
                return delete newState[path_0], newState;
            });
        }), $[16] = t9) : t9 = $[16];
    let registerItem = t9, t10;
    $[17] === Symbol.for("react.memo_cache_sentinel") ? (t10 = (path_1, expanded_0)=>{
        setState((s_1)=>{
            let itemState = s_1[path_1];
            return itemState ? {
                ...s_1,
                [path_1]: {
                    ...itemState,
                    expanded: expanded_0
                }
            } : s_1;
        });
    }, $[17] = t10) : t10 = $[17];
    let setExpanded = t10, t11 = focusedElement || itemElements[0] || null, t12;
    $[18] !== gap || $[19] !== state || $[20] !== t11 ? (t12 = {
        version: 0,
        focusedElement: t11,
        level: 0,
        path,
        registerItem,
        setExpanded,
        setFocusedElement,
        gap,
        state
    }, $[18] = gap, $[19] = state, $[20] = t11, $[21] = t12) : t12 = $[21];
    let contextValue = t12, t13;
    $[22] === itemElements ? t13 = $[23] : (t13 = (event)=>{
        if (focusedElementRef.current) {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                let nextEl = _findNextItemElement(stateRef.current, itemElements, focusedElementRef.current);
                nextEl && (_focusItemElement(nextEl), setFocusedElement(nextEl));
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                let prevEl = _findPrevItemElement(stateRef.current, itemElements, focusedElementRef.current);
                prevEl && (_focusItemElement(prevEl), setFocusedElement(prevEl));
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                let itemKey = focusedElementRef.current.getAttribute("data-tree-key");
                if (!itemKey) return;
                let itemState_0 = stateRef.current[itemKey];
                if (!itemState_0) return;
                if (itemState_0.expanded) setState((s_2)=>{
                    let itemState_1 = s_2[itemKey];
                    return itemState_1 ? {
                        ...s_2,
                        [itemKey]: {
                            ...itemState_1,
                            expanded: !1
                        }
                    } : s_2;
                });
                else {
                    let itemPath = itemKey.split("/");
                    itemPath.pop();
                    let parentKey = itemPath.join("/"), parentState = parentKey && stateRef.current[parentKey];
                    parentState && (parentState.element.focus(), setFocusedElement(parentState.element));
                }
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                let focusedKey = focusedElementRef.current.getAttribute("data-tree-key");
                if (!focusedKey) return;
                stateRef.current[focusedKey]?.expanded || setState((s_3)=>{
                    let itemState_2 = s_3[focusedKey];
                    return itemState_2 ? {
                        ...s_3,
                        [focusedKey]: {
                            ...itemState_2,
                            expanded: !0
                        }
                    } : s_3;
                });
            }
        }
    }, $[22] = itemElements, $[23] = t13);
    let handleKeyDown = t13, t14;
    $[24] === onFocus ? t14 = $[25] : (t14 = (event_0)=>{
        setFocusedElement(event_0.target), onFocus?.(event_0);
    }, $[24] = onFocus, $[25] = t14);
    let handleFocus = t14, t15;
    $[26] === Symbol.for("react.memo_cache_sentinel") ? (t15 = ()=>{
        if (!ref.current) return;
        let _itemElements = Array.from(ref.current.querySelectorAll("[data-ui=\"TreeItem\"]"));
        setItemElements(_itemElements);
    }, $[26] = t15) : t15 = $[26];
    let t16;
    $[27] === children ? t16 = $[28] : (t16 = [
        children
    ], $[27] = children, $[28] = t16), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16);
    let t17;
    $[29] !== children || $[30] !== gap || $[31] !== handleFocus || $[32] !== handleKeyDown || $[33] !== restProps ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        as: "ul",
        "data-ui": "Tree",
        ...restProps,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        ref,
        role: "tree",
        gap,
        children
    }), $[29] = children, $[30] = gap, $[31] = handleFocus, $[32] = handleKeyDown, $[33] = restProps, $[34] = t17) : t17 = $[34];
    let t18;
    return $[35] !== contextValue || $[36] !== t17 ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
        value: contextValue,
        children: t17
    }), $[35] = contextValue, $[36] = t17, $[37] = t18) : t18 = $[37], t18;
}
function treeItemRootColorStyle(props) {
    let { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), tone = color.selectable.default;
    return css`&[role='none'] > [role='treeitem'],&[role='treeitem'] > [data-ui='TreeItem__box']{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.enabled)}}&[role='none'][data-selected] > [role='treeitem'],&[role='treeitem'][data-selected] > [data-ui='TreeItem__box']{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.pressed)}}@media (hover:hover){&[role='none']:not([data-selected]) > [role='treeitem']:not(:focus):hover,&[role='treeitem']:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.hovered)}}&[role='none'] > [role='treeitem']:focus,&[role='treeitem']:focus > [data-ui='TreeItem__box']{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.selected)}}}`;
}
function treeItemBoxStyle(props) {
    let { $level } = props, { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`display:block;padding-left:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[2] * $level)};text-decoration:none;`;
}
/**
* @beta
*/ function useTree() {
    let tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TreeContext);
    if (!tree) throw Error("Tree: missing context value");
    return tree;
}
function TreeGroup(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9), children, restProps, t0;
    $[0] === props ? (children = $[1], restProps = $[2], t0 = $[3]) : ({ children, expanded: t0, ...restProps } = props, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0);
    let expanded = t0 !== void 0 && t0, tree = useTree(), t1 = !expanded, t2;
    return $[4] !== children || $[5] !== restProps || $[6] !== t1 || $[7] !== tree.gap ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        as: "ul",
        "data-ui": "TreeGroup",
        ...restProps,
        hidden: t1,
        marginTop: tree.gap,
        role: "group",
        gap: tree.gap,
        children
    }), $[4] = children, $[5] = restProps, $[6] = t1, $[7] = tree.gap, $[8] = t2) : t2 = $[8], t2;
}
const treeItem = "u-ZyINL u-VaYZP u-hYXSkP u-kyddSM u-igTsvP u-kyTYla u-duclHY u-BXTsx u-ihcTNF u-dRJpaF u-oWpmy u-hdUmmY", StyledTreeItem = /* @__PURE__ */ styled.li.withConfig({
    displayName: "StyledTreeItem",
    componentId: "sc-mgt2q1-0"
})(treeItemRootColorStyle), TreeItemBox = /* @__PURE__ */ styled.a.withConfig({
    displayName: "TreeItemBox",
    componentId: "sc-mgt2q1-1"
})(treeItemBoxStyle);
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/ function TreeItem(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(93), { children, expanded: t0, fontSize: t1, href, icon: IconComponent, id: idProp, linkAs, linkProps, muted, onClick, padding: t2, selected: t3, gap: t4, text, weight, ...restProps } = props, expandedProp = t0 !== void 0 && t0, fontSize = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 2 : t2, selected = t3 !== void 0 && t3, gap = t4 === void 0 ? 2 : t4, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), treeitemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), tree = useTree(), { path, registerItem, setExpanded, setFocusedElement } = tree, _id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(), id = idProp || _id, t5, t6;
    if ($[0] !== id || $[1] !== path) {
        let itemPath = path.concat([
            id || ""
        ]);
        t5 = itemPath, t6 = itemPath.join("/"), $[0] = id, $[1] = path, $[2] = t5, $[3] = t6;
    } else t5 = $[2], t6 = $[3];
    let t7;
    $[4] !== t5 || $[5] !== t6 ? (t7 = [
        t5,
        t6
    ], $[4] = t5, $[5] = t6, $[6] = t7) : t7 = $[6];
    let [itemPath_0, itemKey] = t7, itemState = tree.state[itemKey], focused = tree.focusedElement === rootElement, expanded = itemState?.expanded === void 0 ? expandedProp : itemState?.expanded || !1, tabIndex = tree.focusedElement && tree.focusedElement === rootElement ? 0 : -1, t8 = tree.level + 1, t9;
    $[7] !== itemPath_0 || $[8] !== t8 || $[9] !== tree ? (t9 = {
        ...tree,
        level: t8,
        path: itemPath_0
    }, $[7] = itemPath_0, $[8] = t8, $[9] = tree, $[10] = t9) : t9 = $[10];
    let contextValue = t9, t10;
    $[11] !== expanded || $[12] !== itemKey || $[13] !== onClick || $[14] !== rootElement || $[15] !== setExpanded || $[16] !== setFocusedElement ? (t10 = (event)=>{
        onClick && onClick(event);
        let target = event.target;
        target instanceof HTMLElement && (target.getAttribute("data-ui") === "TreeItem" || target.closest("[data-ui=\"TreeItem__box\"]")) && (event.stopPropagation(), setExpanded(itemKey, !expanded), setFocusedElement(rootElement));
    }, $[11] = expanded, $[12] = itemKey, $[13] = onClick, $[14] = rootElement, $[15] = setExpanded, $[16] = setFocusedElement, $[17] = t10) : t10 = $[17];
    let handleClick = t10, t11;
    $[18] !== focused || $[19] !== rootElement ? (t11 = (event_0)=>{
        focused && event_0.key === "Enter" && (treeitemRef.current || rootElement)?.click();
    }, $[18] = focused, $[19] = rootElement, $[20] = t11) : t11 = $[20];
    let handleKeyDown = t11, t12, t13;
    $[21] !== expanded || $[22] !== itemKey || $[23] !== registerItem || $[24] !== rootElement || $[25] !== selected ? (t12 = ()=>{
        if (rootElement) return registerItem(rootElement, itemKey, expanded, selected);
    }, t13 = [
        expanded,
        itemKey,
        registerItem,
        rootElement,
        selected
    ], $[21] = expanded, $[22] = itemKey, $[23] = registerItem, $[24] = rootElement, $[25] = selected, $[26] = t12, $[27] = t13) : (t12 = $[26], t13 = $[27]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14 = IconComponent || children ? "visible" : "hidden", t15;
    $[28] === t14 ? t15 = $[29] : (t15 = {
        visibility: t14,
        pointerEvents: "none"
    }, $[28] = t14, $[29] = t15);
    let t16;
    $[30] !== IconComponent || $[31] !== fontSize || $[32] !== muted || $[33] !== weight ? (t16 = IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        muted,
        size: fontSize,
        weight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
    }), $[30] = IconComponent, $[31] = fontSize, $[32] = muted, $[33] = weight, $[34] = t16) : t16 = $[34];
    let t17;
    $[35] !== IconComponent || $[36] !== expanded || $[37] !== fontSize || $[38] !== muted || $[39] !== weight ? (t17 = !IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        muted,
        size: fontSize,
        weight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ToggleArrowRight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleArrowRightIcon"], {
            className: "u-fIJvmj",
            style: {
                transform: expanded ? "rotate(90deg)" : void 0
            }
        })
    }), $[35] = IconComponent, $[36] = expanded, $[37] = fontSize, $[38] = muted, $[39] = weight, $[40] = t17) : t17 = $[40];
    let t18;
    $[41] !== gap || $[42] !== t15 || $[43] !== t16 || $[44] !== t17 ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        marginRight: gap,
        style: t15,
        children: [
            t16,
            t17
        ]
    }), $[41] = gap, $[42] = t15, $[43] = t16, $[44] = t17, $[45] = t18) : t18 = $[45];
    let t19;
    $[46] !== fontSize || $[47] !== muted || $[48] !== text || $[49] !== weight ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        flex: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
            muted,
            size: fontSize,
            textOverflow: "ellipsis",
            weight,
            children: text
        })
    }), $[46] = fontSize, $[47] = muted, $[48] = text, $[49] = weight, $[50] = t19) : t19 = $[50];
    let t20;
    $[51] !== padding || $[52] !== t18 || $[53] !== t19 ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        padding,
        children: [
            t18,
            t19
        ]
    }), $[51] = padding, $[52] = t18, $[53] = t19, $[54] = t20) : t20 = $[54];
    let content = t20;
    if (href) {
        let t21 = typeof linkAs == "string" ? linkAs : "a", t22;
        $[55] !== content || $[56] !== expanded || $[57] !== href || $[58] !== linkAs || $[59] !== linkProps || $[60] !== t21 || $[61] !== tabIndex || $[62] !== tree.level ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeItemBox, {
            ...linkProps,
            $level: tree.level,
            "aria-expanded": expanded,
            as: linkAs,
            "data-as": t21,
            "data-ui": "TreeItem__box",
            href,
            ref: treeitemRef,
            role: "treeitem",
            tabIndex,
            children: content
        }), $[55] = content, $[56] = expanded, $[57] = href, $[58] = linkAs, $[59] = linkProps, $[60] = t21, $[61] = tabIndex, $[62] = tree.level, $[63] = t22) : t22 = $[63];
        let t23;
        $[64] !== children || $[65] !== expanded ? (t23 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeGroup, {
            hidden: !expanded,
            children
        }), $[64] = children, $[65] = expanded, $[66] = t23) : t23 = $[66];
        let t24;
        return $[67] !== contextValue || $[68] !== t23 ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
            value: contextValue,
            children: t23
        }), $[67] = contextValue, $[68] = t23, $[69] = t24) : t24 = $[69], /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(StyledTreeItem, {
            "data-selected": selected ? "" : void 0,
            "data-tree-id": id,
            "data-tree-key": itemKey,
            "data-ui": "TreeItem",
            ...restProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(treeItem, restProps.className),
            onClick: handleClick,
            ref: setRootElement,
            role: "none",
            children: [
                t22,
                t24
            ]
        });
    }
    let T0 = StyledTreeItem, t21 = selected ? "" : void 0, t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(treeItem, restProps.className), t24;
    $[70] !== content || $[71] !== tree.level ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeItemBox, {
        $level: tree.level,
        as: "div",
        "data-ui": "TreeItem__box",
        children: content
    }), $[70] = content, $[71] = tree.level, $[72] = t24) : t24 = $[72];
    let t25;
    $[73] !== children || $[74] !== expanded ? (t25 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeGroup, {
        expanded,
        children
    }), $[73] = children, $[74] = expanded, $[75] = t25) : t25 = $[75];
    let t26;
    $[76] !== contextValue || $[77] !== t25 ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
        value: contextValue,
        children: t25
    }), $[76] = contextValue, $[77] = t25, $[78] = t26) : t26 = $[78];
    let t27;
    return $[79] !== T0 || $[80] !== expanded || $[81] !== handleClick || $[82] !== handleKeyDown || $[83] !== id || $[84] !== itemKey || $[85] !== restProps || $[86] !== setRootElement || $[87] !== t21 || $[88] !== t23 || $[89] !== t24 || $[90] !== t26 || $[91] !== tabIndex ? (t27 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(T0, {
        "data-selected": t21,
        "data-ui": "TreeItem",
        "data-tree-id": id,
        "data-tree-key": itemKey,
        ...restProps,
        "aria-expanded": expanded,
        className: t23,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ref: setRootElement,
        role: "treeitem",
        tabIndex,
        children: [
            t24,
            t26
        ]
    }), $[79] = T0, $[80] = expanded, $[81] = handleClick, $[82] = handleKeyDown, $[83] = id, $[84] = itemKey, $[85] = restProps, $[86] = setRootElement, $[87] = t21, $[88] = t23, $[89] = t24, $[90] = t26, $[91] = tabIndex, $[92] = t27) : t27 = $[92], t27;
}
/**
* @internal
*/ function _isScrollable(el) {
    if (!(el instanceof Element)) return !1;
    let style = window.getComputedStyle(el);
    return style.overflowX.includes("auto") || style.overflowX.includes("scroll") || style.overflowY.includes("auto") || style.overflowY.includes("scroll");
}
/**
* @deprecated instead of `useArrayProp(width)` use `Array.isArray(width) ? width : [width]` instead
* @beta
*/ function useArrayProp(_val, _defaultVal) {
    throw Error("`useArrayProp` was removed in @sanity/ui v4. Use `Array.isArray(value) ? value : [value]` instead.");
}
/**
* @public
* @deprecated replaced by the new `useClickOutsideEvent` hook, instead of:
* ```tsx
* const [button, setButtonElement] = useState(null)
* useClickOutside((event) => {}, [button])
* return <button ref={setButtonElement} />
* ```
* do:
* ```tsx
* const buttonRef = useRef()
* useClickOutsideEvent((event) => {}, () => [buttonRef.current])
* return <button ref={buttonRef} />
* ```
*/ function useClickOutside(_listener, _elementsArg, _boundaryElement) {
    throw Error("`useClickOutside` was removed in @sanity/ui v4. Use `useClickOutsideEvent` instead.");
}
/**
* Subscribe to the rect of a DOM element.
* @beta
*
* @deprecated Use `useElementSize` instead
*/ function useElementRect(_element) {
    throw Error("`useElementRect` was removed in @sanity/ui v4. Use `useElementSize` instead.");
}
/**
* Subscribe to the size of a DOM element.
* @beta
*/ function useElementSize(element) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), t0, t1;
    return $[0] === element ? (t0 = $[1], t1 = $[2]) : (t0 = ()=>{
        if (element) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"].subscribe(element, setSize);
    }, t1 = [
        element
    ], $[0] = element, $[1] = t0, $[2] = t1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), size;
}
/**
* @beta
* @deprecated use `useImperativeHandle` instead
* @example
* ```diff
* -const ref = useForwardedRef(forwardedRef)
* +const ref = useRef(null)
* +useImperativeHandle(forwardedRef, () => ref.current)
* ```
*/ function useForwardedRef(_ref) {
    throw Error("`useForwardedRef` was removed in @sanity/ui v4. Use `useRef` and `useImperativeHandle` instead.");
}
/**
* Returns true if a dark color scheme is preferred, false if a light color scheme is preferred or the preference is not known.
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-color-scheme: light)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-color-scheme` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
* @example https://gist.github.com/stipsan/13c0cccf8dfc34f4b44bb1b984baf7df
*
* @public
*/ function usePrefersDark(t0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])("(prefers-color-scheme: dark)", t0 === void 0 ? _temp$3 : t0);
}
function _temp$3() {
    return !1;
}
function labelBaseStyle(props) {
    let { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("label", props)} text-transform:uppercase;& code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
const StyledLabel = /* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled.div.withConfig({
    displayName: "LabelBase",
    componentId: "sc-juabwe-0"
})(labelBaseStyle)).withConfig({
    displayName: "LabelSize",
    componentId: "sc-juabwe-1"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])("label", props))).withConfig({
    displayName: "StyledLabel",
    componentId: "sc-juabwe-2"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])("label", props), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]);
function LabelComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(27), accent, align, childrenProp, ref, restProps, t0, t1, textOverflow, weight;
    $[0] === props ? (accent = $[1], align = $[2], childrenProp = $[3], ref = $[4], restProps = $[5], t0 = $[6], t1 = $[7], textOverflow = $[8], weight = $[9]) : ({ accent, align, children: childrenProp, muted: t0, ref, size: t1, textOverflow, weight, ...restProps } = props, $[0] = props, $[1] = accent, $[2] = align, $[3] = childrenProp, $[4] = ref, $[5] = restProps, $[6] = t0, $[7] = t1, $[8] = textOverflow, $[9] = weight);
    let muted = t0 !== void 0 && t0, size = t1 === void 0 ? 2 : t1, children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t2;
        $[10] === children ? t2 = $[11] : (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], {
            children
        }), $[10] = children, $[11] = t2), children = t2;
    } else {
        let t2;
        $[12] === children ? t2 = $[13] : (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children
        }), $[12] = children, $[13] = t2), children = t2;
    }
    let t2;
    $[14] === align ? t2 = $[15] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(align), $[14] = align, $[15] = t2);
    let t3;
    $[16] === size ? t3 = $[17] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[16] = size, $[17] = t3);
    let t4;
    return $[18] !== accent || $[19] !== children || $[20] !== muted || $[21] !== ref || $[22] !== restProps || $[23] !== t2 || $[24] !== t3 || $[25] !== weight ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledLabel, {
        "data-ui": "Label",
        ...restProps,
        $accent: accent,
        $align: t2,
        $muted: muted,
        $size: t3,
        $weight: weight,
        ref,
        children
    }), $[18] = accent, $[19] = children, $[20] = muted, $[21] = ref, $[22] = restProps, $[23] = t2, $[24] = t3, $[25] = weight, $[26] = t4) : t4 = $[26], t4;
}
/**
* Typographic labels.
*
* @public
*/ const Label = LabelComponent;
function avatarColorStyle(props) {
    let { $color } = props;
    return {
        "--avatar-bg-color": `var(--card-avatar-${$color}-bg-color)`,
        "--avatar-fg-color": `var(--card-avatar-${$color}-fg-color)`
    };
}
function avatarRootStyle(props) {
    let { avatar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return {
        "&[data-as=\"button\"]": {
            "&:focus": {
                boxShadow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
                    focusRing: avatar.focusRing
                })
            },
            "&:focus:not(:focus-visible)": {
                boxShadow: "none"
            }
        }
    };
}
/**
* Sets `--avatar-size` per breakpoint: the root, the image and the stroke
* overlay (`avatar.css.ts`) size themselves from it, so `size` arrays stay
* responsive for all of them.
*/ function responsiveAvatarSizeStyle(props) {
    let { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$size, (size)=>{
        let avatarSize = avatar.sizes[size] || avatar.sizes[0];
        return {
            "--avatar-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(avatarSize.size)
        };
    });
}
const StyledAvatar = /* @__PURE__ */ styled(/* @__PURE__ */ styled.div.attrs({
    className: "u-jOHnOz u-gcUkTl u-fMVBjb u-ixvSSg u-kwLhwW u-emPzDJ u-eIsAcC u-hhRcrn u-iMJsxr u-hykRjY u-hdBYnA u-dRiciA u-eKhxNy u-igUxFW u-jKeppS u-ddjAuZ u-dYvYSB"
}).withConfig({
    displayName: "AvatarBase",
    componentId: "sc-943qen-0"
})(avatarRootStyle)).withConfig({
    displayName: "StyledAvatar",
    componentId: "sc-943qen-1"
})(responsiveAvatarSizeStyle, avatarColorStyle);
function AvatarComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(42), __unstable_hideInnerStroke, animateArrowFrom, arrowPositionProp, asProp, initials, onImageLoadError, ref, restProps, src, t0, t1, t2, title;
    $[0] === props ? (__unstable_hideInnerStroke = $[1], animateArrowFrom = $[2], arrowPositionProp = $[3], asProp = $[4], initials = $[5], onImageLoadError = $[6], ref = $[7], restProps = $[8], src = $[9], t0 = $[10], t1 = $[11], t2 = $[12], title = $[13]) : ({ __unstable_hideInnerStroke, as: asProp, color: t0, src, title, initials, onImageLoadError, arrowPosition: arrowPositionProp, animateArrowFrom, ref, status: t1, size: t2, ...restProps } = props, $[0] = props, $[1] = __unstable_hideInnerStroke, $[2] = animateArrowFrom, $[3] = arrowPositionProp, $[4] = asProp, $[5] = initials, $[6] = onImageLoadError, $[7] = ref, $[8] = restProps, $[9] = src, $[10] = t0, $[11] = t1, $[12] = t2, $[13] = title);
    let color = t0 === void 0 ? "gray" : t0, status = t1 === void 0 ? "online" : t1, sizeProp = t2 === void 0 ? 1 : t2, { avatar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), as = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElementType(asProp) ? asProp : "div", size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(sizeProp), avatarSize = avatar.sizes[size[0]] || avatar.sizes[0], [arrowPosition, setArrowPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(animateArrowFrom || arrowPositionProp || "inside"), [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [prevSrc, setPrevSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(src);
    prevSrc !== src && (setPrevSrc(src), src && setImageFailed(!1));
    let t3, t4;
    $[14] !== arrowPosition || $[15] !== arrowPositionProp ? (t3 = ()=>{
        if (arrowPosition === arrowPositionProp) return;
        let raf = requestAnimationFrame(()=>setArrowPosition(arrowPositionProp));
        return ()=>cancelAnimationFrame(raf);
    }, t4 = [
        arrowPosition,
        arrowPositionProp
    ], $[14] = arrowPosition, $[15] = arrowPositionProp, $[16] = t3, $[17] = t4) : (t3 = $[16], t4 = $[17]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    $[18] === onImageLoadError ? t5 = $[19] : (t5 = ()=>{
        setImageFailed(!0), onImageLoadError && onImageLoadError(/* @__PURE__ */ Error("Avatar: the image failed to load"));
    }, $[18] = onImageLoadError, $[19] = t5);
    let handleImageError = t5, T0 = StyledAvatar, t6 = typeof as == "string" ? as : void 0, t8;
    $[20] === color ? t8 = $[21] : (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "u-kyGdCf u-ixvSSg u-kiKDyH u-bgTIyZ u-lhPceK u-hWgptE u-qbeer u-iFTChX u-dpkMvs u-fRJJGt u-fXXdBW u-dGSZft u-hCrTsA u-eTFVft u-bbpCZG u-entgPE u-eHFqYL u-iVKMrE u-fgylBq u-ktJvyW u-jAObRc u-fNiGDY u-jKggCm",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            width: "11",
            height: "7",
            viewBox: "0 0 11 7",
            fill: "none",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
                fill: color
            })
        })
    }), $[20] = color, $[21] = t8);
    let t9;
    $[22] !== __unstable_hideInnerStroke || $[23] !== avatarSize || $[24] !== handleImageError || $[25] !== imageFailed || $[26] !== src ? (t9 = !imageFailed && src && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                alt: "",
                className: "u-gHYZIR u-kwLhwW u-exIGLf u-emPzDJ u-hhRcrn u-gIVJpv",
                draggable: !1,
                height: avatarSize.size,
                onError: handleImageError,
                src,
                width: avatarSize.size
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
                className: "u-gHYZIR u-kwLhwW u-kiKDyH u-cERSkX u-lhPceK u-qbeer u-hhRcrn",
                viewBox: "0 0 2 2",
                fill: "none",
                children: [
                    !__unstable_hideInnerStroke && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                        className: "u-iMJkVA u-ysDJT",
                        cx: "1",
                        cy: "1",
                        r: "1",
                        vectorEffect: "non-scaling-stroke"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                        className: "u-ggmhkl u-ksRPkh u-hxmycU u-fgUwLY",
                        cx: "1",
                        cy: "1",
                        r: "1",
                        vectorEffect: "non-scaling-stroke"
                    })
                ]
            })
        ]
    }), $[22] = __unstable_hideInnerStroke, $[23] = avatarSize, $[24] = handleImageError, $[25] = imageFailed, $[26] = src, $[27] = t9) : t9 = $[27];
    let t10 = (imageFailed || !src) && initials && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "u-fAtomh u-gHYZIR u-fuocjA u-ePwsZv u-bsGhWR u-dBwzdG u-cPyXJe u-diGfnu u-djbxbl",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Label, {
                as: "span",
                size: size.map(_temp$2),
                weight: "medium",
                children: initials
            })
        })
    }), t11;
    return $[28] !== T0 || $[29] !== arrowPosition || $[30] !== as || $[31] !== color || $[32] !== ref || $[33] !== restProps || $[34] !== size || $[35] !== status || $[36] !== t10 || $[37] !== t6 || $[38] !== t8 || $[39] !== t9 || $[40] !== title ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(T0, {
        as,
        "data-as": t6,
        "data-ui": "Avatar",
        ...restProps,
        $color: color,
        $size: size,
        "aria-label": title,
        "data-arrow-position": arrowPosition,
        "data-status": status,
        ref,
        title,
        children: [
            t8,
            t9,
            t10
        ]
    }), $[28] = T0, $[29] = arrowPosition, $[30] = as, $[31] = color, $[32] = ref, $[33] = restProps, $[34] = size, $[35] = status, $[36] = t10, $[37] = t6, $[38] = t8, $[39] = t9, $[40] = title, $[41] = t11) : t11 = $[41], t11;
}
function _temp$2(s) {
    return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
/**
* Avatars are used to represent people and other agents (e.g. bots).
*
* @public
*/ const Avatar = AvatarComponent;
function _responsiveAvatarCounterSizeStyle(props) {
    let { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$size, (size)=>{
        let avatarSize = avatar.sizes[size];
        return avatarSize ? {
            borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(avatarSize.size / 2),
            minWidth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(avatarSize.size),
            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(avatarSize.size)
        } : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"];
    });
}
function _avatarCounterPaddingStyle(props) {
    let { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`padding:0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[2])};`;
}
const StyledAvatarCounter = /* @__PURE__ */ styled.div.attrs({
    className: "u-fAtomh u-dNSLRW u-dupTko u-ixvSSg u-fIoZKR u-bsGhWR u-eIsAcC u-djbxbl"
}).withConfig({
    displayName: "StyledAvatarCounter",
    componentId: "sc-nxxvbb-0"
})(_responsiveAvatarCounterSizeStyle, _avatarCounterPaddingStyle);
/**
* @public
*/ function AvatarCounter(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(20), { count, ref, size: t0 } = props, sizeProp = t0 === void 0 ? 1 : t0, T0, T1, t1, t2, t3, t4, t5;
    if ($[0] !== ref || $[1] !== sizeProp) {
        let size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(sizeProp);
        T1 = StyledAvatarCounter, t3 = size, t4 = "AvatarCounter", t5 = ref, T0 = Label, t1 = "span", t2 = size.map(_temp$1), $[0] = ref, $[1] = sizeProp, $[2] = T0, $[3] = T1, $[4] = t1, $[5] = t2, $[6] = t3, $[7] = t4, $[8] = t5;
    } else T0 = $[2], T1 = $[3], t1 = $[4], t2 = $[5], t3 = $[6], t4 = $[7], t5 = $[8];
    let t6;
    $[9] !== T0 || $[10] !== count || $[11] !== t1 || $[12] !== t2 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        as: t1,
        size: t2,
        weight: "medium",
        children: count
    }), $[9] = T0, $[10] = count, $[11] = t1, $[12] = t2, $[13] = t6) : t6 = $[13];
    let t7;
    return $[14] !== T1 || $[15] !== t3 || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(T1, {
        $size: t3,
        "data-ui": t4,
        ref: t5,
        children: t6
    }), $[14] = T1, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19], t7;
}
function _temp$1(s) {
    return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
function responsiveAvatarStackSizeStyle(props) {
    let { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$size, (size)=>{
        let avatarSize = avatar.sizes[size];
        return avatarSize ? {
            "& > div + div": {
                marginLeft: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(avatarSize.distance)
            }
        } : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"];
    });
}
const StyledAvatarStack = /* @__PURE__ */ styled.div.withConfig({
    displayName: "StyledAvatarStack",
    componentId: "sc-cw2hpz-0"
})(responsiveAvatarStackSizeStyle);
/**
* @public
*/ function AvatarStack(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(45), childrenProp, className, ref, restProps, t0, t1;
    $[0] === props ? (childrenProp = $[1], className = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6]) : ({ children: childrenProp, className, maxLength: t0, ref, size: t1, ...restProps } = props, $[0] = props, $[1] = childrenProp, $[2] = className, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1);
    let maxLengthProp = t0 === void 0 ? 4 : t0, sizeProp = t1 === void 0 ? 1 : t1, T0, t2, t3, t4, t5, t6, t7, t8, t9;
    if ($[7] !== childrenProp || $[8] !== className || $[9] !== maxLengthProp || $[10] !== ref || $[11] !== restProps || $[12] !== sizeProp) {
        let children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(childrenProp).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"]), maxLength = Math.max(maxLengthProp, 0), t10;
        $[22] === sizeProp ? t10 = $[23] : (t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(sizeProp), $[22] = sizeProp, $[23] = t10);
        let size = t10, len = children.length, extraCount = len - (maxLength - 1), visibleChildren = extraCount > 1 ? children.slice(extraCount, len) : children;
        T0 = StyledAvatarStack, $[24] === className ? t2 = $[25] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-cbkwRf u-isxeDy u-cnjfpu", className), $[24] = className, $[25] = t2), t3 = "AvatarStack", t4 = restProps, t5 = ref, t6 = size, $[26] !== len || $[27] !== size ? (t7 = len === 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AvatarCounter, {
                count: len,
                size
            })
        }), $[26] = len, $[27] = size, $[28] = t7) : t7 = $[28], $[29] !== extraCount || $[30] !== len || $[31] !== size ? (t8 = len !== 0 && extraCount > 1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AvatarCounter, {
                count: extraCount,
                size
            })
        }), $[29] = extraCount, $[30] = len, $[31] = size, $[32] = t8) : t8 = $[32];
        let t11;
        $[33] === size ? t11 = $[34] : (t11 = (child, childIndex)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                    size
                })
            }, String(childIndex)), $[33] = size, $[34] = t11), t9 = visibleChildren.map(t11), $[7] = childrenProp, $[8] = className, $[9] = maxLengthProp, $[10] = ref, $[11] = restProps, $[12] = sizeProp, $[13] = T0, $[14] = t2, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7, $[20] = t8, $[21] = t9;
    } else T0 = $[13], t2 = $[14], t3 = $[15], t4 = $[16], t5 = $[17], t6 = $[18], t7 = $[19], t8 = $[20], t9 = $[21];
    let t10;
    return $[35] !== T0 || $[36] !== t2 || $[37] !== t3 || $[38] !== t4 || $[39] !== t5 || $[40] !== t6 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(T0, {
        className: t2,
        "data-ui": t3,
        ...t4,
        ref: t5,
        $size: t6,
        children: [
            t7,
            t8,
            t9
        ]
    }), $[35] = T0, $[36] = t2, $[37] = t3, $[38] = t4, $[39] = t5, $[40] = t6, $[41] = t7, $[42] = t8, $[43] = t9, $[44] = t10) : t10 = $[44], t10;
}
const badgeBaseStyle = css`background-color:var(--card-bg-color);cursor:default;&:not([hidden]){display:inline-block;vertical-align:top;}`;
function badgeToneStyle(props) {
    let { $tone } = props;
    return {
        "--card-bg-color": `var(--card-badge-${$tone}-bg-color)`,
        "--card-fg-color": `var(--card-badge-${$tone}-fg-color)`
    };
}
const BadgeBase = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "BadgeBase",
    componentId: "sc-1b0zh7-0"
})`${badgeBaseStyle}`, StyledBadge = /* @__PURE__ */ styled(BadgeBase).withConfig({
    displayName: "StyledBadge",
    componentId: "sc-1b0zh7-1"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], badgeToneStyle), Badge = function Badge(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(22), children, ref, restProps, t0, t1, t2, t3;
    $[0] === props ? (children = $[1], ref = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], t3 = $[7]) : ({ children, fontSize: t0, padding: t1, radius: t2, ref, tone: t3, ...restProps } = props, $[0] = props, $[1] = children, $[2] = ref, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = t3);
    let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? "full" : t2, tone = t3 === void 0 ? "default" : t3, t4;
    $[8] === radius ? t4 = $[9] : (t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[8] = radius, $[9] = t4);
    let t5;
    $[10] === padding ? t5 = $[11] : (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(padding), $[10] = padding, $[11] = t5);
    let t6;
    $[12] !== children || $[13] !== fontSize ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        size: fontSize,
        children
    }), $[12] = children, $[13] = fontSize, $[14] = t6) : t6 = $[14];
    let t7;
    return $[15] !== ref || $[16] !== restProps || $[17] !== t4 || $[18] !== t5 || $[19] !== t6 || $[20] !== tone ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledBadge, {
        "data-ui": "Badge",
        ...restProps,
        $tone: tone,
        $radius: t4,
        padding: t5,
        ref,
        children: t6
    }), $[15] = ref, $[16] = restProps, $[17] = t4, $[18] = t5, $[19] = t6, $[20] = tone, $[21] = t7) : t7 = $[21], t7;
};
function inputElementStyles(props) {
    let { input, radius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), { focusRing } = input.checkbox;
    return css`position:absolute;top:0;left:0;width:100%;height:100%;outline:none;opacity:0;z-index:1;padding:0;margin:0;& + span{position:relative;display:block;height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.checkbox.size)};width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.checkbox.size)};box-sizing:border-box;border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(radius[2])};line-height:1;& > svg{display:block;position:absolute;opacity:0;height:100%;width:100%;& > path{vector-effect:non-scaling-stroke;stroke-width:1.5px !important;}}}&:not(:disabled):focus:focus-visible + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        focusRing
    })};}&:not(:disabled):focus:focus-visible&:checked + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        focusRing: {
            width: 1,
            offset: 1
        }
    })};}&:checked + span > svg:first-child{opacity:1;}&:indeterminate + span > svg:last-child{opacity:1;}`;
}
function inputElementColorStyles(props) {
    let { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`& + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};background-color:${color.input.default.enabled.bg};}&:checked + span{background:${color.input.default.enabled.fg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.fg,
        width: input.border.width
    })};color:${color.input.default.enabled.bg};}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        width: input.border.width,
        color: color.input.invalid.enabled.muted.bg
    })};color:${color.input.default.disabled.fg};}&[data-error]&:checked + span{background-color:${color.input.invalid.enabled.muted.bg};color:${color.input.default.enabled.bg};}&[data-error]&:checked&:not(:disabled):focus:focus-visible + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        border: {
            width: input.border.width,
            color: color.input.invalid.readOnly.muted.bg
        },
        focusRing: {
            width: 1,
            offset: 1
        }
    })};}&:disabled + span{background-color:${color.input.default.disabled.bg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        width: input.border.width,
        color: color.input.default.disabled.border
    })};color:${color.input.default.disabled.fg};}&:disabled&:checked + span{background-color:${color.input.default.disabled.muted.bg};}&[data-read-only] + span{background-color:${color.input.default.readOnly.bg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        width: input.border.width,
        color: color.input.default.readOnly.border
    })};color:${color.input.default.readOnly.fg};}&[data-read-only]&:checked + span{background-color:${color.input.default.readOnly.muted.bg};}`;
}
const Input$3 = /* @__PURE__ */ styled(/* @__PURE__ */ styled.input.withConfig({
    displayName: "InputBase",
    componentId: "sc-13r9vw-0"
})(inputElementStyles)).withConfig({
    displayName: "Input",
    componentId: "sc-13r9vw-1"
})(inputElementColorStyles);
/**
* Checkboxes allow the user to select one or more items from a set.
*
* @public
*/ function Checkbox(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(28), checked, className, customValidity, disabled, forwardedRef, indeterminate, readOnly, restProps, style;
    $[0] === props ? (checked = $[1], className = $[2], customValidity = $[3], disabled = $[4], forwardedRef = $[5], indeterminate = $[6], readOnly = $[7], restProps = $[8], style = $[9]) : ({ checked, className, disabled, indeterminate, customValidity, readOnly, ref: forwardedRef, style, ...restProps } = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = customValidity, $[4] = disabled, $[5] = forwardedRef, $[6] = indeterminate, $[7] = readOnly, $[8] = restProps, $[9] = style);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[10] = t0) : t0 = $[10], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0);
    let t1, t2;
    $[11] === indeterminate ? (t1 = $[12], t2 = $[13]) : (t1 = ()=>{
        ref.current && (ref.current.indeterminate = indeterminate || !1);
    }, t2 = [
        indeterminate
    ], $[11] = indeterminate, $[12] = t1, $[13] = t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(ref, customValidity);
    let t3;
    $[14] === className ? t3 = $[15] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-gSxJLz u-emPzDJ", className), $[14] = className, $[15] = t3);
    let t4 = !disabled && readOnly ? "" : void 0, t5 = customValidity ? "" : void 0, t6 = disabled || readOnly, t7;
    $[16] !== checked || $[17] !== readOnly || $[18] !== restProps || $[19] !== t4 || $[20] !== t5 || $[21] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Input$3, {
        "data-read-only": t4,
        "data-error": t5,
        "data-ui": "Checkbox__input",
        ...restProps,
        checked,
        disabled: t6,
        type: "checkbox",
        readOnly,
        ref
    }), $[16] = checked, $[17] = readOnly, $[18] = restProps, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7) : t7 = $[22];
    let t8;
    $[23] === Symbol.for("react.memo_cache_sentinel") ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Checkmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkIcon"], {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveIcon"], {})
        ]
    }), $[23] = t8) : t8 = $[23];
    let t9;
    return $[24] !== style || $[25] !== t3 || $[26] !== t7 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: t3,
        "data-ui": "Checkbox",
        style,
        children: [
            t7,
            t8
        ]
    }), $[24] = style, $[25] = t3, $[26] = t7, $[27] = t9) : t9 = $[27], t9;
}
function headingBaseStyle(props) {
    let { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`& code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.heading.weights.bold};}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("heading", props)}`;
}
const StyledHeading = /* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled.div.withConfig({
    displayName: "HeadingBase",
    componentId: "sc-oiepxi-0"
})(headingBaseStyle)).withConfig({
    displayName: "HeadingSize",
    componentId: "sc-oiepxi-1"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])("heading", props))).withConfig({
    displayName: "StyledHeading",
    componentId: "sc-oiepxi-2"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"], (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])("heading", props));
function HeadingComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(27), align, childrenProp, ref, restProps, t0, t1, t2, textOverflow, weight;
    $[0] === props ? (align = $[1], childrenProp = $[2], ref = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], textOverflow = $[8], weight = $[9]) : ({ accent: t0, align, children: childrenProp, muted: t1, ref, size: t2, textOverflow, weight, ...restProps } = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = textOverflow, $[9] = weight);
    let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t3;
        $[10] === children ? t3 = $[11] : (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], {
            children
        }), $[10] = children, $[11] = t3), children = t3;
    }
    let t3;
    $[12] === align ? t3 = $[13] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(align), $[12] = align, $[13] = t3);
    let t4;
    $[14] === size ? t4 = $[15] : (t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[14] = size, $[15] = t4);
    let t5;
    $[16] === children ? t5 = $[17] : (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children
    }), $[16] = children, $[17] = t5);
    let t6;
    return $[18] !== accent || $[19] !== muted || $[20] !== ref || $[21] !== restProps || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== weight ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledHeading, {
        "data-ui": "Heading",
        ...restProps,
        $accent: accent,
        $align: t3,
        $muted: muted,
        $size: t4,
        $weight: weight,
        ref,
        children: t5
    }), $[18] = accent, $[19] = muted, $[20] = ref, $[21] = restProps, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = weight, $[26] = t6) : t6 = $[26], t6;
}
/**
* Typographic headings.
*
* @public
*/ const Heading = HeadingComponent;
function inputElementStyle(props) {
    let { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), dist = (input.radio.size - input.radio.markSize) / 2;
    return css`appearance:none;position:absolute;top:0;left:0;opacity:0;height:100%;width:100%;outline:none;z-index:1;padding:0;margin:0;border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.size / 2)};border:none;& + span{display:block;position:relative;height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.size)};width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.size)};border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.size / 2)};background:${color.input.default.enabled.bg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};&::after{content:'';position:absolute;top:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(dist)};left:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(dist)};height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.markSize)};width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.markSize)};border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.radio.markSize / 2)};background:${color.input.default.enabled.fg};opacity:0;}}&:not(:disabled):focus + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        border: {
            width: input.border.width,
            color: color.input.default.enabled.border
        },
        focusRing: input.radio.focusRing
    })};}&:not(:disabled):focus:not(:focus-visible) + span{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};}&:checked + span::after{opacity:1;}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        width: input.border.width,
        color: color.input.invalid.enabled.muted.bg
    })};&::after{background:${color.input.invalid.enabled.muted.bg};}}&[data-read-only] + span{box-shadow:0 0 0 1px ${color.input.default.readOnly.border};background:${color.input.default.readOnly.bg};&::after{background:${color.input.default.readOnly.border};}}&:not([data-read-only]):disabled + span{box-shadow:0 0 0 1px ${color.input.default.disabled.border};background:${color.input.default.disabled.bg};&::after{background:${color.input.default.disabled.border};}}`;
}
const Input$2 = /* @__PURE__ */ styled.input.withConfig({
    displayName: "Input",
    componentId: "sc-z843so-0"
})(inputElementStyle);
/**
* The `Radio` component allows the user to select one option from a set.
*
* @public
*/ function Radio(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(22), className, customValidity, disabled, forwardedRef, readOnly, restProps, style;
    $[0] === props ? (className = $[1], customValidity = $[2], disabled = $[3], forwardedRef = $[4], readOnly = $[5], restProps = $[6], style = $[7]) : ({ className, disabled, style, customValidity, readOnly, ref: forwardedRef, ...restProps } = props, $[0] = props, $[1] = className, $[2] = customValidity, $[3] = disabled, $[4] = forwardedRef, $[5] = readOnly, $[6] = restProps, $[7] = style);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0;
    $[8] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[8] = t0) : t0 = $[8], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(ref, customValidity);
    let t1;
    $[9] === className ? t1 = $[10] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-emPzDJ u-cXmUGv", className), $[9] = className, $[10] = t1);
    let t2 = !disabled && readOnly ? "" : void 0, t3 = customValidity ? "" : void 0, t4 = disabled || readOnly, t5;
    $[11] !== readOnly || $[12] !== restProps || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Input$2, {
        "data-read-only": t2,
        "data-error": t3,
        "data-ui": "Radio__input",
        ...restProps,
        disabled: t4,
        readOnly,
        ref,
        type: "radio"
    }), $[11] = readOnly, $[12] = restProps, $[13] = t2, $[14] = t3, $[15] = t4, $[16] = t5) : t5 = $[16];
    let t6;
    $[17] === Symbol.for("react.memo_cache_sentinel") ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {}), $[17] = t6) : t6 = $[17];
    let t7;
    return $[18] !== style || $[19] !== t1 || $[20] !== t5 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: t1,
        "data-ui": "Radio",
        style,
        children: [
            t5,
            t6
        ]
    }), $[18] = style, $[19] = t1, $[20] = t5, $[21] = t7) : t7 = $[21], t7;
}
const INPUT_BASE_STYLE = css`-webkit-font-smoothing:antialiased;appearance:none;border:0;color:inherit;width:100%;outline:none;margin:0;&:disabled{opacity:1;}`;
function inputColorStyle(props) {
    let { color, font, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`font-family:${font.text.family};background-color:${color.input.default.enabled.bg};color:${color.input.default.enabled.fg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};@media (hover:hover){&:not(:disabled):hover{background-color:${color.input.default.hovered.bg};color:${color.input.default.hovered.fg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.hovered.border,
        width: input.border.width
    })};}}&:not(:disabled):focus{box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        border: {
            width: input.border.width,
            color: color.input.default.enabled.border
        },
        focusRing: input.select.focusRing
    })};}&[data-read-only]{background-color:${color.input.default.readOnly.bg};color:${color.input.default.readOnly.fg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.readOnly.border,
        width: input.border.width
    })};}&:not([data-read-only]):disabled{background-color:${color.input.default.disabled.bg};color:${color.input.default.disabled.fg};box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])({
        color: color.input.default.disabled.border,
        width: input.border.width
    })};}`;
}
function textSize(size) {
    return {
        fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size.fontSize),
        lineHeight: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size.lineHeight)}`
    };
}
function inputTextSizeStyle(props) {
    let { $fontSize } = props, { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, $fontSize, (sizeIndex)=>textSize(font.text.sizes[sizeIndex] || font.text.sizes[2]));
}
const INPUT_RULES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], inputTextSizeStyle, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"]);
function inputStyle() {
    return INPUT_RULES;
}
function iconBoxStyle(props) {
    let { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`pointer-events:none;position:absolute;top:0;right:0;--card-fg-color:${color.input.default.enabled.fg};@media (hover:hover){select:not(disabled):not(:read-only):hover + &&{--card-fg-color:${color.input.default.hovered.fg};}}select:disabled + &&{--card-fg-color:${color.input.default.disabled.fg};}select[data-read-only] + &&{--card-fg-color:${color.input.default.readOnly.fg};}`;
}
const selectStyle = {
    inputBase: INPUT_BASE_STYLE,
    inputColor: inputColorStyle,
    input: inputStyle,
    iconBox: iconBoxStyle
}, InputBase$1 = styled.select.withConfig({
    displayName: "InputBase",
    componentId: "sc-0h3t7m-0"
})`${selectStyle.inputBase}`, InputColor = /* @__PURE__ */ styled(InputBase$1).withConfig({
    displayName: "InputColor",
    componentId: "sc-0h3t7m-1"
})(selectStyle.inputColor), Input$1 = /* @__PURE__ */ styled(InputColor).withConfig({
    displayName: "Input",
    componentId: "sc-0h3t7m-2"
})(selectStyle.input), IconBox = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "IconBox",
    componentId: "sc-0h3t7m-3"
})(selectStyle.iconBox);
/**
* The `Select` component provides control of options.
*
* @public
*/ function Select(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(38), children, customValidity, disabled, forwardedRef, readOnly, restProps, t0, t1, t2, t3;
    $[0] === props ? (children = $[1], customValidity = $[2], disabled = $[3], forwardedRef = $[4], readOnly = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9], t3 = $[10]) : ({ children, customValidity, disabled, fontSize: t0, gap: t1, padding: t2, radius: t3, readOnly, ref: forwardedRef, ...restProps } = props, $[0] = props, $[1] = children, $[2] = customValidity, $[3] = disabled, $[4] = forwardedRef, $[5] = readOnly, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2, $[10] = t3);
    let fontSize = t0 === void 0 ? 2 : t0, gap = t1 === void 0 ? 3 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t4;
    $[11] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[11] = t4) : t4 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(ref, customValidity);
    let t5 = !disabled && readOnly ? "" : void 0, t6;
    $[12] === fontSize ? t6 = $[13] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(fontSize), $[12] = fontSize, $[13] = t6);
    let t7;
    $[14] === padding ? t7 = $[15] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(padding), $[14] = padding, $[15] = t7);
    let t8;
    $[16] === radius ? t8 = $[17] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[16] = radius, $[17] = t8);
    let t9;
    $[18] === gap ? t9 = $[19] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[18] = gap, $[19] = t9);
    let t10 = disabled || readOnly, t11;
    $[20] !== children || $[21] !== restProps || $[22] !== t10 || $[23] !== t5 || $[24] !== t6 || $[25] !== t7 || $[26] !== t8 || $[27] !== t9 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Input$1, {
        "data-read-only": t5,
        "data-ui": "Select",
        ...restProps,
        $fontSize: t6,
        $padding: t7,
        $radius: t8,
        $space: t9,
        disabled: t10,
        ref,
        children
    }), $[20] = children, $[21] = restProps, $[22] = t10, $[23] = t5, $[24] = t6, $[25] = t7, $[26] = t8, $[27] = t9, $[28] = t11) : t11 = $[28];
    let t12;
    $[29] === Symbol.for("react.memo_cache_sentinel") ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ChevronDown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {}), $[29] = t12) : t12 = $[29];
    let t13;
    $[30] === fontSize ? t13 = $[31] : (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        size: fontSize,
        children: t12
    }), $[30] = fontSize, $[31] = t13);
    let t14;
    $[32] !== padding || $[33] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconBox, {
        padding,
        children: t13
    }), $[32] = padding, $[33] = t13, $[34] = t14) : t14 = $[34];
    let t15;
    return $[35] !== t11 || $[36] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "u-emPzDJ u-iQYtgN u-cXmUGv",
        "data-ui": "Select",
        children: [
            t11,
            t14
        ]
    }), $[35] = t11, $[36] = t14, $[37] = t15) : t15 = $[37], t15;
}
function switchRepresentationStyles(props) {
    let { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`--switch-bg-color:${color.input.default.enabled.border};--switch-fg-color:${color.input.default.enabled.bg};width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.width)};height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.height)};border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.height / 2)};input:focus + &&{--switch-box-shadow:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
        focusRing: input.switch.focusRing
    })};}input:focus:not(:focus-visible) + &&{--switch-box-shadow:none;}input:checked + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}@media (hover:hover){input:not(:disabled):hover + &&{--switch-bg-color:${color.input.default.hovered.border};--switch-fg-color:${color.input.default.hovered.bg};}input:not(:disabled):checked:hover + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}}input:not([data-read-only]):disabled + &&{--switch-bg-color:${color.input.default.disabled.border};--switch-fg-color:${color.input.default.disabled.bg};}input[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.border};--switch-fg-color:${color.input.default.readOnly.bg};}input:checked[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.fg};--switch-fg-color:${color.input.default.readOnly.bg};}`;
}
function switchTrackStyles(props) {
    let { input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.width)};height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.height)};border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(input.switch.height / 2)};`;
}
function switchThumbStyles(props) {
    let { $indeterminate } = props, { input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), trackWidth = input.switch.width, trackHeight = input.switch.height, trackPadding = input.switch.padding, size = trackHeight - input.switch.padding * 2, checkedOffset = trackWidth - trackPadding * 2 - size, indeterminateOffset = trackWidth / 2 - size / 2 - trackPadding, checked = $indeterminate !== !0 && props.$checked === !0;
    return css`left:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(trackPadding)};top:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(trackPadding)};height:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size)};width:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size)};border-radius:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(size / 2)};transition-duration:${input.switch.transitionDurationMs}ms;transition-timing-function:${input.switch.transitionTimingFunction};transform:translate3d(0,0,0);${checked && css`transform:translate3d(${checkedOffset}px,0,0);`} ${$indeterminate && css`transform:translate3d(${indeterminateOffset}px,0,0);`}`;
}
const Representation = /* @__PURE__ */ styled.span.attrs({
    className: "u-dJgWtv u-cERSkX u-emPzDJ u-kmCWMa u-bpuMrN u-dbSCHR u-dMOWAL u-dRmRBl u-lhNBpt u-iqwUak u-eKJNom u-dCrjkN u-yDftq u-gIVJpv"
}).withConfig({
    displayName: "Representation",
    componentId: "sc-fbcjg3-0"
})(switchRepresentationStyles), Track = /* @__PURE__ */ styled.span.attrs({
    className: "u-indMik u-kiKDyH u-lhPceK u-qbeer u-gIVJpv"
}).withConfig({
    displayName: "Track",
    componentId: "sc-fbcjg3-1"
})(switchTrackStyles), Thumb = /* @__PURE__ */ styled.span.attrs({
    className: "u-eHHXIg u-kecFSQ u-lhPceK u-bNSskR u-gIVJpv"
}).withConfig({
    displayName: "Thumb",
    componentId: "sc-fbcjg3-2"
})(switchThumbStyles);
/**
* The `Switch` component allows the user to toggle a setting on and off.
*
* Extends all properties of an `<input type="checkbox" />` element, except type.
*
* @public
*/ function Switch(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(29), checked, className, disabled, forwardedRef, indeterminate, readOnly, restProps, style;
    $[0] === props ? (checked = $[1], className = $[2], disabled = $[3], forwardedRef = $[4], indeterminate = $[5], readOnly = $[6], restProps = $[7], style = $[8]) : ({ checked, className, disabled, indeterminate, readOnly, ref: forwardedRef, style, ...restProps } = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = disabled, $[4] = forwardedRef, $[5] = indeterminate, $[6] = readOnly, $[7] = restProps, $[8] = style);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[9] = t0) : t0 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0);
    let t1, t2;
    $[10] === indeterminate ? (t1 = $[11], t2 = $[12]) : (t1 = ()=>{
        ref.current && (ref.current.indeterminate = indeterminate || !1);
    }, t2 = [
        indeterminate
    ], $[10] = indeterminate, $[11] = t1, $[12] = t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    $[13] === className ? t3 = $[14] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-emPzDJ u-cXmUGv", className), $[13] = className, $[14] = t3);
    let t4 = !disabled && readOnly ? "" : void 0, t5 = indeterminate !== !0 && checked, t6 = disabled || readOnly, t7;
    $[15] !== restProps || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
        className: "u-kyGdCf u-ePwsZv u-kiKDyH u-jZsjHW u-bgTIyZ u-dFXmkO u-bnBrYd u-lhPceK u-hWgptE u-qbeer u-diGfnu u-dStxMA",
        "data-read-only": t4,
        ...restProps,
        checked: t5,
        disabled: t6,
        type: "checkbox",
        ref
    }), $[15] = restProps, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19];
    let t8;
    $[20] === Symbol.for("react.memo_cache_sentinel") ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Track, {
        "data-ui": "Switch__track"
    }), $[20] = t8) : t8 = $[20];
    let t9;
    $[21] !== checked || $[22] !== indeterminate ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Representation, {
        "aria-hidden": !0,
        "data-name": "representation",
        "data-ui": "Switch__representation",
        children: [
            t8,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Thumb, {
                $checked: checked,
                $indeterminate: indeterminate,
                "data-ui": "Switch__thumb"
            })
        ]
    }), $[21] = checked, $[22] = indeterminate, $[23] = t9) : t9 = $[23];
    let t10;
    return $[24] !== style || $[25] !== t3 || $[26] !== t7 || $[27] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: t3,
        "data-ui": "Switch",
        style,
        children: [
            t7,
            t9
        ]
    }), $[24] = style, $[25] = t3, $[26] = t7, $[27] = t9, $[28] = t10) : t10 = $[28], t10;
}
const InputBase = styled.textarea.withConfig({
    displayName: "InputBase",
    componentId: "sc-qld3n1-0"
})`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]}`, Input = /* @__PURE__ */ styled(/* @__PURE__ */ styled(InputBase).withConfig({
    displayName: "InputColor",
    componentId: "sc-qld3n1-1"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])).withConfig({
    displayName: "Input",
    componentId: "sc-qld3n1-2"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]), Presentation = /* @__PURE__ */ styled(/* @__PURE__ */ styled.div.withConfig({
    displayName: "PresentationColor",
    componentId: "sc-qld3n1-3"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])).withConfig({
    displayName: "Presentation",
    componentId: "sc-qld3n1-4"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"]);
/**
* A multiline text input.
*

* @public
*/ function TextArea(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(36), __unstable_disableFocusRing, customValidity, forwardedRef, restProps, t0, t1, t2, t3, t4, weight;
    $[0] === props ? (__unstable_disableFocusRing = $[1], customValidity = $[2], forwardedRef = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7], t3 = $[8], t4 = $[9], weight = $[10]) : ({ border: t0, customValidity, disabled: t1, fontSize: t2, padding: t3, radius: t4, ref: forwardedRef, weight, __unstable_disableFocusRing, ...restProps } = props, $[0] = props, $[1] = __unstable_disableFocusRing, $[2] = customValidity, $[3] = forwardedRef, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2, $[8] = t3, $[9] = t4, $[10] = weight);
    let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSize = t2 === void 0 ? 2 : t2, padding = t3 === void 0 ? 3 : t3, radius = t4 === void 0 ? 2 : t4, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), rootTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(), t5;
    $[11] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>ref.current, $[11] = t5) : t5 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(ref, customValidity);
    let t6 = rootTheme.scheme, t7 = rootTheme.tone, t8;
    $[12] === fontSize ? t8 = $[13] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(fontSize), $[12] = fontSize, $[13] = t8);
    let t9;
    $[14] === padding ? t9 = $[15] : (t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(padding), $[14] = padding, $[15] = t9);
    let t10 = rootTheme.scheme, t11;
    $[16] === Symbol.for("react.memo_cache_sentinel") ? (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(0), $[16] = t11) : t11 = $[16];
    let t12;
    $[17] !== disabled || $[18] !== restProps || $[19] !== rootTheme.scheme || $[20] !== rootTheme.tone || $[21] !== t8 || $[22] !== t9 || $[23] !== weight ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Input, {
        "data-as": "textarea",
        "data-scheme": t6,
        "data-tone": t7,
        "data-ui": "TextArea__input",
        ...restProps,
        $fontSize: t8,
        $padding: t9,
        $scheme: t10,
        $space: t11,
        $tone: rootTheme.tone,
        $weight: weight,
        disabled,
        ref
    }), $[17] = disabled, $[18] = restProps, $[19] = rootTheme.scheme, $[20] = rootTheme.tone, $[21] = t8, $[22] = t9, $[23] = weight, $[24] = t12) : t12 = $[24];
    let t13;
    $[25] === radius ? t13 = $[26] : (t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[25] = radius, $[26] = t13);
    let t14 = border ? "" : void 0, t15;
    $[27] !== __unstable_disableFocusRing || $[28] !== rootTheme.scheme || $[29] !== rootTheme.tone || $[30] !== t13 || $[31] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Presentation, {
        $radius: t13,
        $unstableDisableFocusRing: __unstable_disableFocusRing,
        $scheme: rootTheme.scheme,
        $tone: rootTheme.tone,
        "data-border": t14,
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone,
        "data-ui": "TextArea__presentation"
    }), $[27] = __unstable_disableFocusRing, $[28] = rootTheme.scheme, $[29] = rootTheme.tone, $[30] = t13, $[31] = t14, $[32] = t15) : t15 = $[32];
    let t16;
    return $[33] !== t12 || $[34] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"],
        "data-ui": "TextArea",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"],
            children: [
                t12,
                t15
            ]
        })
    }), $[33] = t12, $[34] = t15, $[35] = t16) : t16 = $[35], t16;
}
/**
* Get responsive CSS for the `code` font style.
* @internal
*/ function responsiveCodeFontStyle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("code", props);
}
/**
* Get responsive CSS for the `heading` font style.
* @internal
*/ function responsiveHeadingFont(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("heading", props);
}
/**
* Get responsive CSS for the `label` font style.
* @internal
*/ function responsiveLabelFont(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("label", props);
}
/**
* Get responsive CSS for the `text` font style.
* @internal
*/ function responsiveTextFont(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("text", props);
}
/**
* @public
*/ function BoundaryElementProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5), { children, element } = props, t0;
    $[0] === element ? t0 = $[1] : (t0 = {
        version: 0,
        element
    }, $[0] = element, $[1] = t0);
    let value = t0, t1;
    return $[2] !== children || $[3] !== value ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"].Provider, {
        value,
        children
    }), $[2] = children, $[3] = value, $[4] = t1) : t1 = $[4], t1;
}
/**
* @internal
* @deprecated ConditionalWrapper was removed in @sanity/ui v4. Inline the conditional wrapping logic instead.
*/ function ConditionalWrapper(_props) {
    throw Error("`ConditionalWrapper` was removed in @sanity/ui v4. Inline the conditional wrapping logic instead.");
}
function findMaxBreakpoints(media, width) {
    let ret = [];
    for(let i = 0; i < media.length; i += 1)media[i] > width && ret.push(i);
    return ret;
}
function findMinBreakpoints(media, width) {
    let ret = [];
    for(let i = 0; i < media.length; i += 1)media[i] <= width && ret.push(i);
    return ret;
}
/**
* DO NOT USE IN PRODUCTION.
* @beta
*/ function ElementQuery(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13), theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), _media, children, forwardedRef, restProps;
    $[0] === props ? (_media = $[1], children = $[2], forwardedRef = $[3], restProps = $[4]) : ({ children, media: _media, ref: forwardedRef, ...restProps } = props, $[0] = props, $[1] = _media, $[2] = children, $[3] = forwardedRef, $[4] = restProps);
    let media = _media ?? theme.media, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0, t1;
    $[5] === media ? (t0 = $[6], t1 = $[7]) : (t0 = ()=>{
        let element = ref.current;
        if (!element) return;
        let observer = new ResizeObserver((t2)=>{
            let [entry] = t2;
            setBreakpointAttributes(element, media, entry.borderBoxSize[0].inlineSize);
        });
        return observer.observe(element), ()=>observer.disconnect();
    }, t1 = [
        media
    ], $[5] = media, $[6] = t0, $[7] = t1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t0, t1);
    let t2, t3;
    $[8] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>ref.current, t3 = [], $[8] = t2, $[9] = t3) : (t2 = $[8], t3 = $[9]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t2, t3);
    let t4;
    return $[10] !== children || $[11] !== restProps ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-ui": "ElementQuery",
        ...restProps,
        "data-eq-max": void 0,
        "data-eq-min": void 0,
        ref,
        children
    }), $[10] = children, $[11] = restProps, $[12] = t4) : t4 = $[12], t4;
}
function setBreakpointAttributes(element, media, width) {
    setBreakpointAttribute(element, "data-eq-max", findMaxBreakpoints(media, width)), setBreakpointAttribute(element, "data-eq-min", findMinBreakpoints(media, width));
}
function setBreakpointAttribute(element, name, indices) {
    let value = indices.length ? indices.join(" ") : null;
    element.getAttribute(name) !== value && (value === null ? element.removeAttribute(name) : element.setAttribute(name, value));
}
/**
* DO NOT USE IN PRODUCTION
* @beta
*/ var ErrorBoundary = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        error: null
    };
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, info) {
        this.props.onCatch({
            error,
            info
        });
    }
    render() {
        let { error } = this.state;
        if (error) {
            let message = typeof error?.message == "string" ? error.message : "Error";
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                "data-ui": "ErrorBoundary",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("code", {
                    children: message
                })
            });
        }
        return this.props.children;
    }
};
/**
* @public
*/ function PortalProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(7), { boundaryElement, children, element, __unstable_elements: elements } = props, fallbackElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(emptySubscribe, _temp, _temp2), t0 = boundaryElement || null, t1 = element || fallbackElement, t2;
    $[0] !== elements || $[1] !== t0 || $[2] !== t1 ? (t2 = {
        version: 0,
        boundaryElement: t0,
        element: t1,
        elements
    }, $[0] = elements, $[1] = t0, $[2] = t1, $[3] = t2) : t2 = $[3];
    let value = t2, t3;
    return $[4] !== children || $[5] !== value ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"].Provider, {
        value,
        children
    }), $[4] = children, $[5] = value, $[6] = t3) : t3 = $[6], t3;
}
function _temp2() {
    return null;
}
function _temp() {
    return document.body;
}
const emptySubscribe = ()=>()=>{};
/**
* @public
*/ function SrOnly(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), { as: t0, children, ref } = props, Component = t0 === void 0 ? "div" : t0, t1;
    return $[0] !== Component || $[1] !== children || $[2] !== ref ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        "aria-hidden": !0,
        className: "u-krAvjf u-bLvdID u-fqYOpD u-lhPceK u-hRLrZa",
        "data-ui": "SrOnly",
        ref,
        children
    }), $[0] = Component, $[1] = children, $[2] = ref, $[3] = t1) : t1 = $[3], t1;
}
const virtualListItem = "u-kiKDyH u-lhPceK u-hWgptE";
/**
* @beta
*/ function VirtualList(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(49), className, forwardedRef, getItemKey, onChange, renderItem, restProps, t0, t1, t2;
    $[0] === props ? (className = $[1], forwardedRef = $[2], getItemKey = $[3], onChange = $[4], renderItem = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9]) : ({ as: t0, className, gap: t1, getItemKey, items: t2, onChange, ref: forwardedRef, renderItem, ...restProps } = props, $[0] = props, $[1] = className, $[2] = forwardedRef, $[3] = getItemKey, $[4] = onChange, $[5] = renderItem, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2);
    let as = t0 === void 0 ? "div" : t0, gap = t1 === void 0 ? 0 : t1, t3;
    $[10] === t2 ? t3 = $[11] : (t3 = t2 === void 0 ? [] : t2, $[10] = t2, $[11] = t3);
    let items = t3, { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [scrollTop, setScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), [scrollHeight, setScrollHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), [itemHeight, setItemHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1), t4;
    $[12] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[12] = t4) : t4 = $[12], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4);
    let t5;
    $[13] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>{
        if (!wrapperRef.current) return;
        let firstElement = wrapperRef.current.firstChild;
        firstElement instanceof HTMLElement && setItemHeight(firstElement.offsetHeight);
    }, $[13] = t5) : t5 = $[13];
    let t6;
    $[14] === renderItem ? t6 = $[15] : (t6 = [
        renderItem
    ], $[14] = renderItem, $[15] = t6), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    $[16] === Symbol.for("react.memo_cache_sentinel") ? (t7 = ()=>{
        if (!ref.current) return;
        let scrollEl = findScrollable(ref.current.parentNode);
        if (scrollEl) {
            if (!(scrollEl instanceof HTMLElement)) return;
            let handleScroll = ()=>{
                setScrollTop(scrollEl.scrollTop);
            };
            scrollEl.addEventListener("scroll", handleScroll, {
                passive: !0
            });
            let ro = new ResizeObserver((entries)=>{
                setScrollHeight(entries[0].contentRect.height);
            });
            return ro.observe(scrollEl), handleScroll(), ()=>{
                scrollEl.removeEventListener("scroll", handleScroll), ro.unobserve(scrollEl), ro.disconnect();
            };
        }
        let handleScroll_0 = ()=>{
            setScrollTop(window.scrollY);
        }, handleResize = ()=>{
            setScrollHeight(window.innerHeight);
        };
        return window.addEventListener("scroll", handleScroll_0, {
            passive: !0
        }), window.addEventListener("resize", handleResize), setScrollHeight(window.innerHeight), handleScroll_0(), ()=>{
            window.removeEventListener("scroll", handleScroll_0), window.removeEventListener("resize", handleResize);
        };
    }, t8 = [], $[16] = t7, $[17] = t8) : (t7 = $[16], t8 = $[17]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let len = items.length, height = itemHeight ? len * (itemHeight + space[gap]) - space[gap] : 0, fromIndex = height ? Math.max(Math.floor(scrollTop / height * len) - 2, 0) : 0, toIndex = height ? Math.ceil((scrollTop + scrollHeight) / height * len) + 1 : 0, t10, t9;
    $[18] !== fromIndex || $[19] !== gap || $[20] !== itemHeight || $[21] !== onChange || $[22] !== scrollHeight || $[23] !== scrollTop || $[24] !== space || $[25] !== toIndex ? (t9 = ()=>{
        onChange && onChange({
            fromIndex,
            gap: space[gap],
            itemHeight,
            scrollHeight,
            scrollTop,
            toIndex
        });
    }, t10 = [
        fromIndex,
        gap,
        itemHeight,
        onChange,
        scrollHeight,
        scrollTop,
        space,
        toIndex
    ], $[18] = fromIndex, $[19] = gap, $[20] = itemHeight, $[21] = onChange, $[22] = scrollHeight, $[23] = scrollTop, $[24] = space, $[25] = toIndex, $[26] = t10, $[27] = t9) : (t10 = $[26], t9 = $[27]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    $[28] !== fromIndex || $[29] !== gap || $[30] !== getItemKey || $[31] !== itemHeight || $[32] !== items || $[33] !== renderItem || $[34] !== space || $[35] !== toIndex ? (t11 = {
        fromIndex,
        gap,
        itemHeight,
        space,
        toIndex,
        getItemKey,
        items,
        renderItem
    }, $[28] = fromIndex, $[29] = gap, $[30] = getItemKey, $[31] = itemHeight, $[32] = items, $[33] = renderItem, $[34] = space, $[35] = toIndex, $[36] = t11) : t11 = $[36];
    let children = useChildren(t11), Component = as, t12;
    $[37] === className ? t12 = $[38] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-emPzDJ", className), $[37] = className, $[38] = t12);
    let t13;
    $[39] === height ? t13 = $[40] : (t13 = {
        height
    }, $[39] = height, $[40] = t13);
    let t14;
    $[41] !== children || $[42] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: wrapperRef,
        style: t13,
        children
    }), $[41] = children, $[42] = t13, $[43] = t14) : t14 = $[43];
    let t15;
    return $[44] !== Component || $[45] !== restProps || $[46] !== t12 || $[47] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        className: t12,
        "data-ui": "VirtualList",
        ref,
        ...restProps,
        children: t14
    }), $[44] = Component, $[45] = restProps, $[46] = t12, $[47] = t14, $[48] = t15) : t15 = $[48], t15;
}
function useChildren(t0) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(21), { fromIndex, gap, getItemKey, itemHeight, items, renderItem, space, toIndex } = t0;
    if (!renderItem || items.length === 0) return null;
    if (itemHeight === -1) {
        let t1;
        $[0] !== items[0] || $[1] !== renderItem ? (t1 = renderItem(items[0]), $[0] = items[0], $[1] = renderItem, $[2] = t1) : t1 = $[2];
        let t2;
        return $[3] === t1 ? t2 = $[4] : (t2 = [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: virtualListItem,
                children: t1
            }, 0)
        ], $[3] = t1, $[4] = t2), t2;
    }
    let t1;
    if ($[5] !== fromIndex || $[6] !== gap || $[7] !== getItemKey || $[8] !== itemHeight || $[9] !== items || $[10] !== renderItem || $[11] !== space || $[12] !== toIndex) {
        let t2;
        $[14] !== fromIndex || $[15] !== gap || $[16] !== getItemKey || $[17] !== itemHeight || $[18] !== renderItem || $[19] !== space ? (t2 = (item, _itemIndex)=>{
            let itemIndex = fromIndex + _itemIndex, node = renderItem(item), key = getItemKey ? getItemKey(item, itemIndex) : itemIndex;
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: virtualListItem,
                style: {
                    top: itemIndex * (itemHeight + space[gap])
                },
                children: node
            }, key);
        }, $[14] = fromIndex, $[15] = gap, $[16] = getItemKey, $[17] = itemHeight, $[18] = renderItem, $[19] = space, $[20] = t2) : t2 = $[20], t1 = items.slice(fromIndex, toIndex).map(t2), $[5] = fromIndex, $[6] = gap, $[7] = getItemKey, $[8] = itemHeight, $[9] = items, $[10] = renderItem, $[11] = space, $[12] = toIndex, $[13] = t1;
    } else t1 = $[13];
    return t1;
}
function findScrollable(parentNode) {
    let _scrollEl = parentNode;
    for(; _scrollEl && !_isScrollable(_scrollEl);)_scrollEl = _scrollEl.parentNode;
    return _scrollEl;
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/grid-D-gOpN8z.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "t": (()=>Grid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const GRID_CSS = {
    "&&:not([hidden])": {
        display: "grid"
    },
    "&[data-as=\"ul\"],&[data-as=\"ol\"]": {
        listStyle: "none"
    }
}, GRID_AUTO_COLUMS = {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
}, GRID_AUTO_ROWS = {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
}, RULES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(GRID_CSS, responsiveGridAutoFlowStyle, responsiveGridAutoRowsStyle, responsiveGridAutoColsStyle, responsiveGridColumnsStyle, responsiveGridRowsStyle, responsiveGridGapStyle, responsiveGridGapXStyle, responsiveGridGapYStyle);
function responsiveGridStyle() {
    return RULES;
}
function responsiveGridAutoFlowStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$autoFlow, (autoFlow)=>({
            gridAutoFlow: autoFlow
        }));
}
function responsiveGridAutoRowsStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$autoRows, (autoRows)=>({
            gridAutoRows: autoRows && GRID_AUTO_ROWS[autoRows]
        }));
}
function responsiveGridAutoColsStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$autoCols, (autoCols)=>({
            gridAutoColumns: autoCols && GRID_AUTO_COLUMS[autoCols]
        }));
}
function responsiveGridColumnsStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$columns, (columns)=>({
            gridTemplateColumns: columns && `repeat(${columns},minmax(0,1fr));`
        }));
}
function responsiveGridRowsStyle(props) {
    let { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$rows, (rows)=>({
            gridTemplateRows: rows && `repeat(${rows},minmax(0,1fr));`
        }));
}
function responsiveGridGapStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$gap, (gap)=>({
            gridGap: gap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[gap]) : void 0
        }));
}
function responsiveGridGapXStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$gapX, (gapX)=>({
            columnGap: gapX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[gapX]) : void 0
        }));
}
function responsiveGridGapYStyle(props) {
    let { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(media, props.$gapY, (gapY)=>({
            rowGap: gapY ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(space[gapY]) : void 0
        }));
}
const StyledGrid = /* @__PURE__ */ styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "StyledGrid",
    componentId: "sc-lby2xb-0"
})(responsiveGridStyle);
function GridComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(43), as, autoCols, autoFlow, autoRows, children, gap, gapX, gapY, gridTemplateColumns, gridTemplateRows, ref, restProps;
    $[0] === props ? (as = $[1], autoCols = $[2], autoFlow = $[3], autoRows = $[4], children = $[5], gap = $[6], gapX = $[7], gapY = $[8], gridTemplateColumns = $[9], gridTemplateRows = $[10], ref = $[11], restProps = $[12]) : ({ as, autoRows, autoCols, autoFlow, gridTemplateColumns, gap, gapX, gapY, gridTemplateRows, children, ref, ...restProps } = props, $[0] = props, $[1] = as, $[2] = autoCols, $[3] = autoFlow, $[4] = autoRows, $[5] = children, $[6] = gap, $[7] = gapX, $[8] = gapY, $[9] = gridTemplateColumns, $[10] = gridTemplateRows, $[11] = ref, $[12] = restProps);
    let t0 = typeof as == "string" ? as : void 0, t1;
    $[13] === autoRows ? t1 = $[14] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(autoRows), $[13] = autoRows, $[14] = t1);
    let t2;
    $[15] === autoCols ? t2 = $[16] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(autoCols), $[15] = autoCols, $[16] = t2);
    let t3;
    $[17] === autoFlow ? t3 = $[18] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(autoFlow), $[17] = autoFlow, $[18] = t3);
    let t4;
    $[19] === gridTemplateColumns ? t4 = $[20] : (t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridTemplateColumns), $[19] = gridTemplateColumns, $[20] = t4);
    let t5;
    $[21] === gap ? t5 = $[22] : (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gap), $[21] = gap, $[22] = t5);
    let t6;
    $[23] === gapX ? t6 = $[24] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gapX), $[23] = gapX, $[24] = t6);
    let t7;
    $[25] === gapY ? t7 = $[26] : (t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gapY), $[25] = gapY, $[26] = t7);
    let t8;
    $[27] === gridTemplateRows ? t8 = $[28] : (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(gridTemplateRows), $[27] = gridTemplateRows, $[28] = t8);
    let t9;
    return $[29] !== as || $[30] !== children || $[31] !== ref || $[32] !== restProps || $[33] !== t0 || $[34] !== t1 || $[35] !== t2 || $[36] !== t3 || $[37] !== t4 || $[38] !== t5 || $[39] !== t6 || $[40] !== t7 || $[41] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledGrid, {
        "data-as": t0,
        "data-ui": "Grid",
        ...restProps,
        $autoRows: t1,
        $autoCols: t2,
        $autoFlow: t3,
        $columns: t4,
        $gap: t5,
        $gapX: t6,
        $gapY: t7,
        $rows: t8,
        forwardedAs: as,
        ref,
        children
    }), $[29] = as, $[30] = children, $[31] = ref, $[32] = restProps, $[33] = t0, $[34] = t1, $[35] = t2, $[36] = t3, $[37] = t4, $[38] = t5, $[39] = t6, $[40] = t7, $[41] = t8, $[42] = t9) : t9 = $[42], t9;
}
/**
* The `Grid` component is for building 2-dimensional layers (based on CSS grid).
*
* @public
*/ const Grid = GridComponent;
;
 //# sourceMappingURL=grid-D-gOpN8z.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Arrow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Avatar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"]),
    "AvatarCounter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AvatarCounter"]),
    "AvatarStack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AvatarStack"]),
    "Badge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Badge"]),
    "BoundaryElementProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BoundaryElementProvider"]),
    "Box": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]),
    "Button": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Card": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]),
    "Checkbox": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Checkbox"]),
    "CodeSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CodeSkeleton"]),
    "ConditionalWrapper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConditionalWrapper"]),
    "Container": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Container"]),
    "Dialog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dialog"]),
    "DialogContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DialogContext"]),
    "DialogProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DialogProvider"]),
    "ElementQuery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ElementQuery"]),
    "ErrorBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ErrorBoundary"]),
    "Flex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Grid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$grid$2d$D$2d$gOpN8z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Heading": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Heading"]),
    "HeadingSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HeadingSkeleton"]),
    "Hotkeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Inline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]),
    "KBD": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "Label": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"]),
    "LabelSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LabelSkeleton"]),
    "Layer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "LayerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "Portal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "PortalProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortalProvider"]),
    "Radio": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Radio"]),
    "Select": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Select"]),
    "Skeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Skeleton"]),
    "Spinner": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "SrOnly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SrOnly"]),
    "Stack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "Switch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Switch"]),
    "Tab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tab"]),
    "TabList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TabList"]),
    "TabPanel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TabPanel"]),
    "Text": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "TextArea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextArea"]),
    "TextInput": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "TextSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextSkeleton"]),
    "ThemeColorProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]),
    "ThemeProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"]),
    "Tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tree"]),
    "TreeItem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TreeItem"]),
    "VirtualList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VirtualList"]),
    "_elementSizeObserver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "_fillCSSObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "_getArrayProp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "_getResponsiveSpace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]),
    "_hasFocus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"]),
    "_isEnterToClickElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "_isScrollable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_isScrollable"]),
    "_raf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"]),
    "_raf2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]),
    "_responsive": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]),
    "attemptFocus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"]),
    "containsOrEqualsElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]),
    "createColorTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createColorTheme"]),
    "focusFirstDescendant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]),
    "focusLastDescendant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"]),
    "hexToRgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToRgb"]),
    "hslToRgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hslToRgb"]),
    "isFocusable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"]),
    "isHTMLAnchorElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]),
    "isHTMLButtonElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]),
    "isHTMLElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]),
    "isHTMLInputElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]),
    "isHTMLSelectElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]),
    "isHTMLTextAreaElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]),
    "multiply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multiply"]),
    "parseColor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseColor"]),
    "rem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]),
    "responsiveCodeFontStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["responsiveCodeFontStyle"]),
    "responsiveHeadingFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["responsiveHeadingFont"]),
    "responsiveLabelFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["responsiveLabelFont"]),
    "responsiveTextAlignStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]),
    "responsiveTextFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["responsiveTextFont"]),
    "rgbToHex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgbToHex"]),
    "rgbToHsl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgbToHsl"]),
    "rgba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgba"]),
    "screen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["screen"]),
    "studioTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["studioTheme"]),
    "useArrayProp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useArrayProp"]),
    "useBoundaryElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]),
    "useClickOutside": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useClickOutside"]),
    "useClickOutsideEvent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "useCustomValidity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]),
    "useDialog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDialog"]),
    "useElementRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useElementRect"]),
    "useElementSize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useElementSize"]),
    "useForwardedRef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForwardedRef"]),
    "useGlobalKeyDown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]),
    "useLayer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]),
    "useMatchMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]),
    "useMediaIndex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]),
    "usePortal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]),
    "usePrefersDark": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersDark"]),
    "usePrefersReducedMotion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]),
    "useRootTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"]),
    "useTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"]),
    "useTheme_v2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"]),
    "useTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTree"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$DhYi5cPT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/textInput-DhYi5cPT.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/button-DnJrhWml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/elementSizeObserver-pevZfdGa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/arrow-CleOpGKV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useClickOutsideEvent-CC1zgOmv.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/hotkeys-Bd5rZOMO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/layer-umnlcWXZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$grid$2d$D$2d$gOpN8z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/grid-D-gOpN8z.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Arrow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Arrow"]),
    "Avatar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Avatar"]),
    "AvatarCounter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AvatarCounter"]),
    "AvatarStack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AvatarStack"]),
    "Badge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Badge"]),
    "BoundaryElementProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BoundaryElementProvider"]),
    "Box": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Box"]),
    "Button": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Button"]),
    "Card": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Card"]),
    "Checkbox": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Checkbox"]),
    "CodeSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CodeSkeleton"]),
    "ConditionalWrapper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ConditionalWrapper"]),
    "Container": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Container"]),
    "Dialog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Dialog"]),
    "DialogContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DialogContext"]),
    "DialogProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DialogProvider"]),
    "ElementQuery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ElementQuery"]),
    "ErrorBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ErrorBoundary"]),
    "Flex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Flex"]),
    "Grid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Grid"]),
    "Heading": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Heading"]),
    "HeadingSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HeadingSkeleton"]),
    "Hotkeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Hotkeys"]),
    "Inline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Inline"]),
    "KBD": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["KBD"]),
    "Label": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Label"]),
    "LabelSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LabelSkeleton"]),
    "Layer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Layer"]),
    "LayerProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayerProvider"]),
    "Portal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Portal"]),
    "PortalProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PortalProvider"]),
    "Radio": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Radio"]),
    "Select": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Select"]),
    "Skeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Skeleton"]),
    "Spinner": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Spinner"]),
    "SrOnly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SrOnly"]),
    "Stack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Stack"]),
    "Switch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Switch"]),
    "Tab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Tab"]),
    "TabList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TabList"]),
    "TabPanel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TabPanel"]),
    "Text": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Text"]),
    "TextArea": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TextArea"]),
    "TextInput": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TextInput"]),
    "TextSkeleton": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TextSkeleton"]),
    "ThemeColorProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ThemeColorProvider"]),
    "ThemeProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ThemeProvider"]),
    "Tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Tree"]),
    "TreeItem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TreeItem"]),
    "VirtualList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["VirtualList"]),
    "_elementSizeObserver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_elementSizeObserver"]),
    "_fillCSSObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_fillCSSObject"]),
    "_getArrayProp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_getArrayProp"]),
    "_getResponsiveSpace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_getResponsiveSpace"]),
    "_hasFocus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_hasFocus"]),
    "_isEnterToClickElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_isEnterToClickElement"]),
    "_isScrollable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_isScrollable"]),
    "_raf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_raf"]),
    "_raf2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_raf2"]),
    "_responsive": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["_responsive"]),
    "attemptFocus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["attemptFocus"]),
    "containsOrEqualsElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["containsOrEqualsElement"]),
    "createColorTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createColorTheme"]),
    "focusFirstDescendant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["focusFirstDescendant"]),
    "focusLastDescendant": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["focusLastDescendant"]),
    "hexToRgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hexToRgb"]),
    "hslToRgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hslToRgb"]),
    "isFocusable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isFocusable"]),
    "isHTMLAnchorElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLAnchorElement"]),
    "isHTMLButtonElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLButtonElement"]),
    "isHTMLElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLElement"]),
    "isHTMLInputElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLInputElement"]),
    "isHTMLSelectElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLSelectElement"]),
    "isHTMLTextAreaElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isHTMLTextAreaElement"]),
    "multiply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["multiply"]),
    "parseColor": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parseColor"]),
    "rem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rem"]),
    "responsiveCodeFontStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["responsiveCodeFontStyle"]),
    "responsiveHeadingFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["responsiveHeadingFont"]),
    "responsiveLabelFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["responsiveLabelFont"]),
    "responsiveTextAlignStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["responsiveTextAlignStyle"]),
    "responsiveTextFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["responsiveTextFont"]),
    "rgbToHex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rgbToHex"]),
    "rgbToHsl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rgbToHsl"]),
    "rgba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rgba"]),
    "screen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["screen"]),
    "studioTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["studioTheme"]),
    "useArrayProp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useArrayProp"]),
    "useBoundaryElement": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useBoundaryElement"]),
    "useClickOutside": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useClickOutside"]),
    "useClickOutsideEvent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useClickOutsideEvent"]),
    "useCustomValidity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useCustomValidity"]),
    "useDialog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useDialog"]),
    "useElementRect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useElementRect"]),
    "useElementSize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useElementSize"]),
    "useForwardedRef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useForwardedRef"]),
    "useGlobalKeyDown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useGlobalKeyDown"]),
    "useLayer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useLayer"]),
    "useMatchMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useMatchMedia"]),
    "useMediaIndex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useMediaIndex"]),
    "usePortal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["usePortal"]),
    "usePrefersDark": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["usePrefersDark"]),
    "usePrefersReducedMotion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["usePrefersReducedMotion"]),
    "useRootTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useRootTheme"]),
    "useTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useTheme"]),
    "useTheme_v2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useTheme_v2"]),
    "useTree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useTree"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/index.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/toast.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toast": (()=>Toast),
    "ToastProvider": (()=>ToastProvider),
    "useToast": (()=>useToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/button-DnJrhWml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$grid$2d$D$2d$gOpN8z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/grid-D-gOpN8z.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/motion-dom/dist/es/utils/stagger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/Close.js [app-ssr] (ecmascript)");
"use client";
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
const STATUS_CARD_TONE = {
    error: "critical",
    warning: "caution",
    success: "positive",
    info: "neutral"
}, BUTTON_TONE = {
    error: "critical",
    warning: "caution",
    success: "positive",
    info: "neutral"
}, ROLES = {
    error: "alert",
    warning: "alert",
    success: "alert",
    info: "alert"
};
/**
* The `Toast` component gives feedback to users when an action has taken place.
*
* Toasts can be closed with a close button, or auto-dismiss after a certain timeout.
*
* @public
*/ function Toast(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(51), className, closable, description, duration, onClose, restProps, status, t0, title, updatedAt;
    $[0] === props ? (className = $[1], closable = $[2], description = $[3], duration = $[4], onClose = $[5], restProps = $[6], status = $[7], t0 = $[8], title = $[9], updatedAt = $[10]) : ({ className, closable, description, duration, onClose, radius: t0, title, status, updatedAt, ...restProps } = props, $[0] = props, $[1] = className, $[2] = closable, $[3] = description, $[4] = duration, $[5] = onClose, $[6] = restProps, $[7] = status, $[8] = t0, $[9] = title, $[10] = updatedAt);
    let radius = t0 === void 0 ? 3 : t0, cardTone = status ? STATUS_CARD_TONE[status] : "default", buttonTone = status ? BUTTON_TONE[status] : "default", role = status ? ROLES[status] : "status", visualDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])() ? 0 : .26, t1;
    $[11] === visualDuration ? t1 = $[12] : (t1 = visualDuration ? {
        type: "spring",
        visualDuration,
        bounce: .25
    } : {
        duration: 0
    }, $[11] = visualDuration, $[12] = t1);
    let transition = t1, hasDuration = duration && isFinite(duration) && duration < 20736e5, t2;
    $[13] === className ? t2 = $[14] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-fqYOpD u-jieZfE u-emPzDJ u-diGfnu u-kHypAY", className), $[13] = className, $[14] = t2);
    let t3 = hasDuration ? "" : void 0, t4;
    $[15] === title ? t4 = $[16] : (t4 = title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        size: 1,
        weight: "medium",
        children: title
    }), $[15] = title, $[16] = t4);
    let t5;
    $[17] !== description || $[18] !== transition ? (t5 = description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MotionText, {
        muted: !0,
        size: 1,
        variants: content,
        transition,
        children: description
    }), $[17] = description, $[18] = transition, $[19] = t5) : t5 = $[19];
    let t6;
    $[20] !== t4 || $[21] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        className: "u-hWHAvy",
        flex: 1,
        padding: 3,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
            gap: 3,
            children: [
                t4,
                t5
            ]
        })
    }), $[20] = t4, $[21] = t5, $[22] = t6) : t6 = $[22];
    let t7;
    $[23] !== buttonTone || $[24] !== closable || $[25] !== onClose ? (t7 = closable && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        padding: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$DnJrhWml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
            as: "button",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"],
            mode: "bleed",
            padding: 2,
            tone: buttonTone,
            onClick: onClose,
            style: {
                verticalAlign: "top"
            }
        })
    }), $[23] = buttonTone, $[24] = closable, $[25] = onClose, $[26] = t7) : t7 = $[26];
    let t8;
    $[27] !== t6 || $[28] !== t7 || $[29] !== transition ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(MotionFlex, {
        align: "flex-start",
        variants: content,
        transition,
        children: [
            t6,
            t7
        ]
    }), $[27] = t6, $[28] = t7, $[29] = transition, $[30] = t8) : t8 = $[30];
    let t9;
    $[31] !== cardTone || $[32] !== duration || $[33] !== hasDuration || $[34] !== onClose || $[35] !== radius || $[36] !== transition || $[37] !== updatedAt || $[38] !== visualDuration ? (t9 = hasDuration && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "u-hxBzcr u-fUjdzo u-klNMOT u-HgOzd u-dYEDcH u-fqYOpD u-cERSkX u-lhPceK u-gRUupw u-jsTwnL u-hTsYDY u-jBWBiF",
        "data-ui": "ToastLoadingBar",
        variants: content,
        transition,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"], {
                className: "u-oQGpJ u-fkylxA u-lhPceK u-ckbANH u-qbeer u-dStxMA",
                tone: cardTone,
                radius
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LoadingBarProgress, {
                duration,
                onComplete: onClose,
                tone: cardTone,
                visualDuration
            }, `progress-${updatedAt}`)
        ]
    }), $[31] = cardTone, $[32] = duration, $[33] = hasDuration, $[34] = onClose, $[35] = radius, $[36] = transition, $[37] = updatedAt, $[38] = visualDuration, $[39] = t9) : t9 = $[39];
    let t10;
    return $[40] !== cardTone || $[41] !== radius || $[42] !== restProps || $[43] !== role || $[44] !== t2 || $[45] !== t3 || $[46] !== t8 || $[47] !== t9 || $[48] !== transition || $[49] !== visualDuration ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(MotionCard, {
        className: t2,
        "data-ui": "Toast",
        role,
        ...restProps,
        "data-has-duration": t3,
        custom: visualDuration,
        radius,
        shadow: 2,
        tone: cardTone,
        as: "li",
        layout: "position",
        variants: container,
        initial: containerInitial,
        animate: containerAnimate,
        exit: containerExit,
        transition,
        children: [
            t8,
            t9
        ]
    }), $[40] = cardTone, $[41] = radius, $[42] = restProps, $[43] = role, $[44] = t2, $[45] = t3, $[46] = t8, $[47] = t9, $[48] = transition, $[49] = visualDuration, $[50] = t10) : t10 = $[50], t10;
}
function LoadingBarProgress(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12), { duration, onComplete, tone, visualDuration } = props, { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), t0 = color.button.default[tone], t1;
    $[0] === t0.enabled.bg ? t1 = $[1] : (t1 = {
        backgroundColor: t0.enabled.bg
    }, $[0] = t0.enabled.bg, $[1] = t1);
    let t2, t3;
    $[2] === Symbol.for("react.memo_cache_sentinel") ? (t2 = {
        scaleX: 0
    }, t3 = {
        scaleX: 1
    }, $[2] = t2, $[3] = t3) : (t2 = $[2], t3 = $[3]);
    let t4 = duration / 1e3, t5;
    $[4] !== t4 || $[5] !== visualDuration ? (t5 = {
        delay: visualDuration,
        duration: t4,
        ease: "linear"
    }, $[4] = t4, $[5] = visualDuration, $[6] = t5) : t5 = $[6];
    let t6;
    return $[7] !== onComplete || $[8] !== t1 || $[9] !== t5 || $[10] !== tone ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MotionCard, {
        className: "u-krAvjf u-ePwsZv u-dszIPX u-diGfnu",
        tone,
        style: t1,
        initial: t2,
        animate: t3,
        transition: t5,
        onAnimationComplete: onComplete
    }), $[7] = onComplete, $[8] = t1, $[9] = t5, $[10] = tone, $[11] = t6) : t6 = $[11], t6;
}
const container = {
    initial: {
        y: 32,
        scale: .5,
        zIndex: 1
    },
    hidden: {
        opacity: 0
    },
    visible: (visualDuration)=>visualDuration ? {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stagger"])(visualDuration / 3),
                duration: visualDuration / 3
            }
        } : {
            opacity: 1
        },
    slideIn: {
        y: 0,
        scale: 1
    },
    slideOut: {
        zIndex: 0,
        scale: .75
    }
}, containerInitial = [
    "hidden",
    "initial"
], containerAnimate = [
    "visible",
    "slideIn"
], containerExit = [
    "hidden",
    "slideOut"
], content = {
    initial: {
        willChange: "transform"
    },
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}, MotionCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]), MotionFlex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]), MotionText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"]);
/**
* Some components should only render after mounting to the DOM, and not be rendered at all during SSR renderToString or equivalent.
* @public
*/ function useMounted() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, _temp$1, _temp2);
}
function _temp2() {
    return !1;
}
function _temp$1() {
    return !0;
}
const subscribe = ()=>()=>{}, ToastContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/toast", null);
/**
* @internal
*/ function ToastLayer(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9), { children, padding: t0, paddingX, paddingY, gap: t1 } = props, padding = t0 === void 0 ? 4 : t0, gap = t1 === void 0 ? 3 : t1, { zIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), t2;
    $[0] === zIndex ? t2 = $[1] : (t2 = {
        zIndex
    }, $[0] = zIndex, $[1] = t2);
    let t3;
    return $[2] !== children || $[3] !== gap || $[4] !== padding || $[5] !== paddingX || $[6] !== paddingY || $[7] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$grid$2d$D$2d$gOpN8z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        as: "ul",
        className: "u-kyGdCf u-ixvSSg u-hEzNkW u-hyZffN u-cERSkX u-kdNbGf u-hWgptE u-diGfnu",
        "data-ui": "ToastProvider",
        padding,
        paddingX,
        paddingY,
        gap,
        gridTemplateColumns: 1,
        style: t2,
        children
    }), $[2] = children, $[3] = gap, $[4] = padding, $[5] = paddingX, $[6] = paddingY, $[7] = t2, $[8] = t3) : t3 = $[8], t3;
}
let toastId = 0;
/** @internal */ function generateToastId() {
    return String(toastId++);
}
/**
* @public
*/ function ToastProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13), { children, padding, paddingX, paddingY, gap, zOffset: t0 } = props, zOffset = t0 === void 0 ? 1 : t0, t1;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [], $[0] = t1) : t1 = $[0];
    let [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(t1), mounted = useMounted(), t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        let push = (params)=>{
            let id = params.id || generateToastId(), duration = params.duration || 5e3;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setState((prevState)=>{
                    if (duration === .01) return prevState.filter((toast)=>toast.id !== id);
                    let dismiss = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setState((currentState)=>currentState.filter((toast_0)=>toast_0.id !== id)));
                    return [
                        ...prevState.filter((toast_1)=>toast_1.id !== id),
                        {
                            dismiss,
                            id,
                            updatedAt: Date.now(),
                            params: {
                                ...params,
                                duration
                            }
                        }
                    ];
                });
            }), id;
        };
        t2 = {
            version: 0,
            push
        }, $[1] = t2;
    } else t2 = $[1];
    let value = t2, t3;
    $[2] !== gap || $[3] !== mounted || $[4] !== padding || $[5] !== paddingX || $[6] !== paddingY || $[7] !== state || $[8] !== zOffset ? (t3 = mounted && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        zOffset,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ToastLayer, {
            padding,
            paddingX,
            paddingY,
            gap,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: !1,
                mode: "popLayout",
                children: state.map(_temp)
            })
        })
    }), $[2] = gap, $[3] = mounted, $[4] = padding, $[5] = paddingX, $[6] = paddingY, $[7] = state, $[8] = zOffset, $[9] = t3) : t3 = $[9];
    let t4;
    return $[10] !== children || $[11] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(ToastContext.Provider, {
        value,
        children: [
            children,
            t3
        ]
    }), $[10] = children, $[11] = t3, $[12] = t4) : t4 = $[12], t4;
}
function _temp(t0) {
    let { dismiss: dismiss_0, id: id_0, params: params_0, updatedAt } = t0;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Toast, {
        closable: params_0.closable,
        description: params_0.description,
        onClose: dismiss_0,
        status: params_0.status,
        title: params_0.title,
        duration: params_0.duration,
        updatedAt
    }, id_0);
}
/**
* @public
*/ function useToast() {
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!value) throw Error("useToast(): missing context value");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(value) || value.version !== 0) throw Error("useToast(): the context value is not compatible");
    return value;
}
;
 //# sourceMappingURL=toast.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getElementRef-BLVMlHTn.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>useReferenceElement),
    "i": (()=>origin),
    "n": (()=>AnimateActivity),
    "o": (()=>attachRef),
    "r": (()=>getTransformOrigin),
    "s": (()=>useLatestRef),
    "t": (()=>getElementRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
;
;
;
;
/**
* A ref that always holds the latest `value`, updated before any layout effect of the same commit
* runs (the same mechanism `use-effect-event` uses), for callbacks that run outside render.
*
* @internal
*/ function useLatestRef(value) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value), t0, t1;
    return $[0] === value ? (t0 = $[1], t1 = $[2]) : (t0 = ()=>{
        ref.current = value;
    }, t1 = [
        value
    ], $[0] = value, $[1] = t0, $[2] = t1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffect"])(t0, t1), ref;
}
/**
* Attaches `value` to `ref` the way React attaches an element's `ref` prop, and returns the
* function that detaches it: the cleanup a callback ref returned, or else a call with `null`.
*
* @internal
*/ function attachRef(ref, value) {
    if (!ref) return noop;
    if (typeof ref == "function") {
        let cleanup = ref(value);
        return typeof cleanup == "function" ? cleanup : ()=>ref(null);
    }
    return ref.current = value, ()=>{
        ref.current = null;
    };
}
function noop() {}
/**
* Keeps the element of the child that `Tooltip` and `Popover` clone in a ref rather than in state.
* A ref callback runs in the commit phase, where a state update is scheduled at Immediate priority:
* inside a `<ViewTransition>` such an update holds up the animation, and makes React skip the
* transition if sync work is flushed while the browser prepares it. Floating UI is handed the
* element as the floating element mounts, or right away when it is replaced while shown.
*
* The child's own `ref` is attached to the element too. A change of that ref alone (an inline
* callback ref) is applied from a layout effect, so that `setReference` keeps its identity and a
* re-render does not detach the element from Floating UI and `onAttach`.
*
* @internal
*/ function useReferenceElement(refs, childRef, onAttach) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12), referenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), attachmentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), childRefRef = useLatestRef(childRef), t0;
    $[0] !== childRefRef || $[1] !== onAttach || $[2] !== refs ? (t0 = (node)=>{
        referenceRef.current = node, refs.floating.current && refs.setReference(node);
        let detach = onAttach?.(node);
        return syncChildRef(attachmentRef, childRefRef.current, node), ()=>{
            syncChildRef(attachmentRef, void 0, null), detach?.(), referenceRef.current = null, refs.floating.current && refs.setReference(null);
        };
    }, $[0] = childRefRef, $[1] = onAttach, $[2] = refs, $[3] = t0) : t0 = $[3];
    let setReference = t0, t1, t2;
    $[4] === childRef ? (t1 = $[5], t2 = $[6]) : (t1 = ()=>{
        syncChildRef(attachmentRef, childRef, referenceRef.current);
    }, t2 = [
        childRef
    ], $[4] = childRef, $[5] = t1, $[6] = t2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t1, t2);
    let t3;
    $[7] === refs ? t3 = $[8] : (t3 = ()=>{
        referenceRef.current && refs.setReference(referenceRef.current);
    }, $[7] = refs, $[8] = t3);
    let handOverReference = t3, t4;
    return $[9] !== handOverReference || $[10] !== setReference ? (t4 = {
        handOverReference,
        referenceRef,
        setReference
    }, $[9] = handOverReference, $[10] = setReference, $[11] = t4) : t4 = $[11], t4;
}
/** Attaches `ref` to `node` unless it is attached already, detaching whatever else was */ function syncChildRef(attachmentRef, ref, node) {
    let attachment = attachmentRef.current;
    attachment && attachment.ref === ref && attachment.node === node || (attachmentRef.current = null, attachment?.detach(), ref && node && (attachmentRef.current = {
        detach: attachRef(ref, node),
        node,
        ref
    }));
}
/**
* Custom floating-ui middleware which calculates transform-origin X + Y offsets
* based on the current floating rect's dimensions and shift offset.
*
* Scaling popovers with these transform-origin offsets will give the effect of
* popvers slightly 'growing' from the origin/reference element.
*
* This middleware must be applied after both `@sanity/ui/size` and `shift` middlewares.
*/ const origin = {
    name: "@sanity/ui/origin",
    fn ({ middlewareData, placement, rects }) {
        let [side] = placement.split("-"), floatingWidth = rects.floating.width, floatingHeight = rects.floating.height, shiftX = middlewareData.shift?.x || 0, shiftY = middlewareData.shift?.y || 0;
        if (floatingWidth <= 0 || floatingHeight <= 0) return {};
        let { originX, originY } = [
            "bottom",
            "top"
        ].includes(side) ? {
            originX: clamp(.5 - shiftX / floatingWidth, 0, 1),
            originY: side === "bottom" ? 0 : 1
        } : {
            originX: +(side === "left"),
            originY: clamp(.5 - shiftY / floatingHeight, 0, 1)
        };
        return {
            data: {
                originX,
                originY
            }
        };
    }
};
/**
* Converts the `origin` middleware data into a plain `transform-origin` CSS value.
*
* The value is intentionally applied as a regular CSS property rather than motion's
* `originX`/`originY` style keys: motion turns those into motion values that it resets to
* their initial (unpositioned, `undefined`) state whenever the element re-mounts, which is
* what happens every time an `Activity`-hidden popover or tooltip is shown again.
*/ function getTransformOrigin(originX, originY) {
    if (originX !== void 0 && originY !== void 0) return `${originX * 100}% ${originY * 100}%`;
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
/**
* MIT License
*
* Copyright (c) 2024 Motion One
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/ /**
* Animated version of React's `Activity` that defers `mode="hidden"` until
* child exit animations have finished.
*
* @internal
*/ function AnimateActivity(t0) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9), { mode: modeFromProps, layoutMode, children } = t0, [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(modeFromProps), isPresent = modeFromProps === "visible";
    if (isPresent && mode !== "visible") return setMode("visible"), null;
    let t1;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>setMode("hidden"), $[0] = t1) : t1 = $[0];
    let onExitComplete = t1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(!!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Activity"], "Activity component not found - upgrade to React 19.2.0 or higher");
    let t2 = isPresent ? void 0 : onExitComplete, t3 = layoutMode === "pop" ? "popLayout" : "sync", t4 = children, t5;
    $[1] !== isPresent || $[2] !== t2 || $[3] !== t3 || $[4] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresenceChild"], {
        isPresent,
        onExitComplete: t2,
        presenceAffectsLayout: !1,
        mode: t3,
        children: t4
    }), $[1] = isPresent, $[2] = t2, $[3] = t3, $[4] = t4, $[5] = t5) : t5 = $[5];
    let t6;
    return $[6] !== mode || $[7] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Activity"], {
        mode,
        children: t5
    }), $[6] = mode, $[7] = t5, $[8] = t6) : t6 = $[8], t6;
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    return mayWarn ? element.ref : (getter = Object.getOwnPropertyDescriptor(element, "ref")?.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning, mayWarn ? element.props.ref : element.props.ref || element.ref);
}
;
 //# sourceMappingURL=getElementRef-BLVMlHTn.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/tooltip.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipDelayGroupContext": (()=>TooltipDelayGroupContext),
    "TooltipDelayGroupProvider": (()=>TooltipDelayGroupProvider),
    "useTooltipDelayGroup": (()=>useTooltipDelayGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getElementRef-BLVMlHTn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/arrow-CleOpGKV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/layer-umnlcWXZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-effect-event/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
"use client";
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
/**
* @beta
*/ function useDelayedState(initialState) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5), [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState), delayedAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0), t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = (nextState, delay)=>{
        let action = ()=>{
            setState(nextState);
        };
        if (delayedAction.current &&= (clearTimeout(delayedAction.current), void 0), !delay) return action();
        delayedAction.current = setTimeout(action, delay);
    }, $[0] = t0) : t0 = $[0];
    let onStateChange = t0, t1, t2;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>()=>{
            delayedAction.current && clearTimeout(delayedAction.current);
        }, t2 = [], $[1] = t1, $[2] = t2) : (t1 = $[1], t2 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    return $[3] === state ? t3 = $[4] : (t3 = [
        state,
        onStateChange
    ], $[3] = state, $[4] = t3), t3;
}
const DEFAULT_FALLBACK_PLACEMENTS = {
    top: [
        "top-end",
        "top-start",
        "bottom",
        "left",
        "right"
    ],
    "top-start": [
        "top",
        "top-end",
        "bottom-start",
        "left-start",
        "right-start"
    ],
    "top-end": [
        "top",
        "top-start",
        "bottom-end",
        "left-end",
        "right-end"
    ],
    bottom: [
        "bottom-end",
        "bottom-start",
        "top",
        "left",
        "right"
    ],
    "bottom-start": [
        "bottom",
        "bottom-end",
        "top-start",
        "left-start",
        "right-start"
    ],
    "bottom-end": [
        "bottom",
        "bottom-start",
        "top-end",
        "left-end",
        "right-end"
    ],
    left: [
        "left-end",
        "left-start",
        "right",
        "top",
        "bottom"
    ],
    "left-start": [
        "left",
        "left-end",
        "right-start",
        "top-start",
        "bottom-start"
    ],
    "left-end": [
        "left",
        "left-start",
        "right-end",
        "top-end",
        "bottom-end"
    ],
    right: [
        "right-end",
        "right-start",
        "left",
        "top",
        "bottom"
    ],
    "right-start": [
        "right",
        "right-end",
        "left-start",
        "top-start",
        "bottom-start"
    ],
    "right-end": [
        "right",
        "right-start",
        "left-end",
        "top-end",
        "bottom-end"
    ]
}, MotionCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]);
/**
* @internal
*/ function TooltipCard(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(47), animate, arrow, arrowRef, arrowX, arrowY, children, className, originX, originY, padding, placement, radius, ref, restProps, scheme, shadow, style;
    $[0] === props ? (animate = $[1], arrow = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], className = $[7], originX = $[8], originY = $[9], padding = $[10], placement = $[11], radius = $[12], ref = $[13], restProps = $[14], scheme = $[15], shadow = $[16], style = $[17]) : ({ animate, arrow, arrowRef, arrowX, arrowY, children, className, originX, originY, padding, placement, radius, ref, scheme, shadow, style, ...restProps } = props, $[0] = props, $[1] = animate, $[2] = arrow, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = className, $[8] = originX, $[9] = originY, $[10] = padding, $[11] = placement, $[12] = radius, $[13] = ref, $[14] = restProps, $[15] = scheme, $[16] = shadow, $[17] = style);
    let t0;
    $[18] !== originX || $[19] !== originY ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(originX, originY), $[18] = originX, $[19] = originY, $[20] = t0) : t0 = $[20];
    let t1 = animate ? "transform" : void 0, t2;
    $[21] !== style || $[22] !== t0 || $[23] !== t1 ? (t2 = {
        transformOrigin: t0,
        willChange: t1,
        ...style
    }, $[21] = style, $[22] = t0, $[23] = t1, $[24] = t2) : t2 = $[24];
    let rootStyle = t2, t3 = arrowX === null ? void 0 : arrowX, t4 = arrowY === null ? void 0 : arrowY, t5;
    $[25] !== t3 || $[26] !== t4 ? (t5 = {
        left: t3,
        top: t4,
        right: void 0,
        bottom: void 0
    }, $[25] = t3, $[26] = t4, $[27] = t5) : t5 = $[27];
    let arrowStyle = t5, t6;
    $[28] === className ? t6 = $[29] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-hVYkZh", className), $[28] = className, $[29] = t6);
    let t7 = animate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"] : void 0, t8;
    $[30] !== arrow || $[31] !== arrowRef || $[32] !== arrowStyle ? (t8 = arrow && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        ref: arrowRef,
        style: arrowStyle,
        width: 15,
        height: 6,
        radius: 2
    }), $[30] = arrow, $[31] = arrowRef, $[32] = arrowStyle, $[33] = t8) : t8 = $[33];
    let t9;
    return $[34] !== children || $[35] !== padding || $[36] !== placement || $[37] !== radius || $[38] !== ref || $[39] !== restProps || $[40] !== rootStyle || $[41] !== scheme || $[42] !== shadow || $[43] !== t6 || $[44] !== t7 || $[45] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(MotionCard, {
        className: t6,
        "data-ui": "Tooltip__card",
        ...restProps,
        "data-placement": placement,
        padding,
        radius,
        ref,
        scheme,
        shadow,
        style: rootStyle,
        ...t7,
        children: [
            children,
            t8
        ]
    }), $[34] = children, $[35] = padding, $[36] = placement, $[37] = radius, $[38] = ref, $[39] = restProps, $[40] = rootStyle, $[41] = scheme, $[42] = shadow, $[43] = t6, $[44] = t7, $[45] = t8, $[46] = t9) : t9 = $[46], t9;
}
/**
* @beta
*/ const TooltipDelayGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/tooltipDelayGroup", null);
/**
* @beta
*/ function useTooltipDelayGroup() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TooltipDelayGroupContext);
}
/**
* Tooltips display information when hovering, focusing or tapping.
*
* @public
*/ function Tooltip(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(118), boundaryElementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(), { layer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), { animate: t0, arrow: t1, boundaryElement: _boundaryElement, children: childProp, content, disabled, fallbackPlacements: _fallbackPlacementsProp, padding: t2, placement: t3, portal: portalProp, radius: t4, ref: forwardedRef, scheme, shadow: t5, zOffset: _zOffset, delay, ...restProps } = props, _animate = t0 !== void 0 && t0, arrowProp = t1 !== void 0 && t1, padding = t2 === void 0 ? 2 : t2, placementProp = t3 === void 0 ? "bottom" : t3, radius = t4 === void 0 ? 2 : t4, shadow = t5 === void 0 ? 2 : t5, boundaryElement = _boundaryElement ?? boundaryElementContext?.element, fallbackPlacementsProp = _fallbackPlacementsProp ?? DEFAULT_FALLBACK_PLACEMENTS[props.placement ?? "bottom"], zOffset = _zOffset ?? layer.tooltip.zOffset, animate = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])() && _animate, t6;
    $[0] === fallbackPlacementsProp ? t6 = $[1] : (t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(fallbackPlacementsProp), $[0] = fallbackPlacementsProp, $[1] = t6);
    let fallbackPlacements = t6, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t7;
    $[2] === Symbol.for("react.memo_cache_sentinel") ? (t7 = ()=>ref.current, $[2] = t7) : t7 = $[2], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t7);
    let portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(), portalName = typeof portalProp == "string" ? portalProp : void 0, t8;
    $[3] !== portal || $[4] !== portalName ? (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(portal, portalName), $[3] = portal, $[4] = portalName, $[5] = t8) : t8 = $[5];
    let portalElement = t8, t9;
    $[6] !== animate || $[7] !== arrowProp || $[8] !== boundaryElement || $[9] !== fallbackPlacements || $[10] !== portalElement ? (t9 = {
        animate,
        arrowProp,
        arrowRef,
        boundaryElement,
        fallbackPlacements,
        portalElement,
        rootBoundary: "viewport"
    }, $[6] = animate, $[7] = arrowProp, $[8] = boundaryElement, $[9] = fallbackPlacements, $[10] = portalElement, $[11] = t9) : t9 = $[11];
    let middleware = useMiddleware(t9), t10;
    $[12] !== middleware || $[13] !== placementProp ? (t10 = {
        middleware,
        placement: placementProp,
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    }, $[12] = middleware, $[13] = placementProp, $[14] = t10) : t10 = $[14];
    let { floatingStyles, placement, middlewareData, refs, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])(t10), t11;
    $[15] === childProp ? t11 = $[16] : (t11 = childProp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(childProp) : void 0, $[15] = childProp, $[16] = t11);
    let { handOverReference, referenceRef, setReference } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(refs, t11), t12;
    $[17] === update ? t12 = $[18] : (t12 = ()=>update(), $[17] = update, $[18] = t12);
    let reposition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(t12), t13;
    $[19] !== boundaryElement || $[20] !== portalElement || $[21] !== reposition ? (t13 = ()=>{
        (boundaryElement || portalElement) && reposition();
    }, $[19] = boundaryElement, $[20] = portalElement, $[21] = reposition, $[22] = t13) : t13 = $[22];
    let t14;
    $[23] !== boundaryElement || $[24] !== portalElement ? (t14 = [
        boundaryElement,
        portalElement
    ], $[23] = boundaryElement, $[24] = portalElement, $[25] = t14) : t14 = $[25], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t13, t14);
    let arrowX = middlewareData.arrow?.x, arrowY = middlewareData.arrow?.y, originX = middlewareData["@sanity/ui/origin"]?.originX, originY = middlewareData["@sanity/ui/origin"]?.originY, tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(), [isOpen, setIsOpen] = useDelayedState(!1), delayGroupContext = useTooltipDelayGroup(), t15;
    $[26] === delayGroupContext ? t15 = $[27] : (t15 = delayGroupContext || {}, $[26] = delayGroupContext, $[27] = t15);
    let { setIsGroupActive, setOpenTooltipId } = t15, suppressed = disabled || !content, showTooltip = !suppressed && (isOpen || delayGroupContext?.openTooltipId === tooltipId), isInsideGroup = delayGroupContext !== null, openDelayProp = typeof delay == "number" ? delay : delay?.open || 0, closeDelayProp = typeof delay == "number" ? delay : delay?.close || 0, openDelay = isInsideGroup ? delayGroupContext.openDelay : openDelayProp, closeDelay = isInsideGroup ? delayGroupContext.closeDelay : closeDelayProp, t16;
    $[28] !== closeDelay || $[29] !== isInsideGroup || $[30] !== openDelay || $[31] !== setIsGroupActive || $[32] !== setIsOpen || $[33] !== setOpenTooltipId || $[34] !== tooltipId ? (t16 = (open, immediate)=>{
        if (isInsideGroup) {
            if (open) {
                let groupedOpenDelay = immediate ? 0 : openDelay;
                setIsGroupActive?.(open, groupedOpenDelay), setOpenTooltipId?.(tooltipId, groupedOpenDelay);
            } else setIsGroupActive?.(open, closeDelay > 200 ? closeDelay : 200), setOpenTooltipId?.(null, immediate ? 0 : closeDelay);
        } else setIsOpen(open, immediate ? 0 : open ? openDelay : closeDelay);
    }, $[28] = closeDelay, $[29] = isInsideGroup, $[30] = openDelay, $[31] = setIsGroupActive, $[32] = setIsOpen, $[33] = setOpenTooltipId, $[34] = tooltipId, $[35] = t16) : t16 = $[35];
    let handleIsOpenChange = t16, t17;
    $[36] !== childProp?.props || $[37] !== handleIsOpenChange || $[38] !== suppressed ? (t17 = (e)=>{
        handleIsOpenChange(!1, suppressed), childProp?.props?.onBlur?.(e);
    }, $[36] = childProp?.props, $[37] = handleIsOpenChange, $[38] = suppressed, $[39] = t17) : t17 = $[39], childProp?.props;
    let handleBlur = t17, t18;
    $[40] !== childProp?.props || $[41] !== handleIsOpenChange ? (t18 = (e_0)=>{
        handleIsOpenChange(!1, !0), childProp?.props.onClick?.(e_0);
    }, $[40] = childProp?.props, $[41] = handleIsOpenChange, $[42] = t18) : t18 = $[42], childProp?.props;
    let handleClick = t18, t19;
    $[43] !== childProp?.props || $[44] !== handleIsOpenChange ? (t19 = (e_1)=>{
        handleIsOpenChange(!1, !0), childProp?.props.onContextMenu?.(e_1);
    }, $[43] = childProp?.props, $[44] = handleIsOpenChange, $[45] = t19) : t19 = $[45], childProp?.props;
    let handleContextMenu = t19, t20;
    $[46] !== childProp?.props || $[47] !== handleIsOpenChange ? (t20 = (e_2)=>{
        handleIsOpenChange(!0), childProp?.props?.onFocus?.(e_2);
    }, $[46] = childProp?.props, $[47] = handleIsOpenChange, $[48] = t20) : t20 = $[48], childProp?.props;
    let handleFocus = t20, t21;
    $[49] !== childProp?.props || $[50] !== handleIsOpenChange ? (t21 = (e_3)=>{
        handleIsOpenChange(!0), childProp?.props?.onMouseEnter?.(e_3);
    }, $[49] = childProp?.props, $[50] = handleIsOpenChange, $[51] = t21) : t21 = $[51], childProp?.props;
    let handleMouseEnter = t21, t22;
    $[52] !== childProp?.props || $[53] !== handleIsOpenChange || $[54] !== suppressed ? (t22 = (e_4)=>{
        handleIsOpenChange(!1, suppressed), childProp?.props?.onMouseLeave?.(e_4);
    }, $[52] = childProp?.props, $[53] = handleIsOpenChange, $[54] = suppressed, $[55] = t22) : t22 = $[55], childProp?.props;
    let handleMouseLeave = t22, t23;
    $[56] !== handleIsOpenChange || $[57] !== isInsideGroup || $[58] !== referenceRef || $[59] !== showTooltip ? (t23 = {
        handleIsOpenChange,
        referenceRef,
        showTooltip,
        isInsideGroup
    }, $[56] = handleIsOpenChange, $[57] = isInsideGroup, $[58] = referenceRef, $[59] = showTooltip, $[60] = t23) : t23 = $[60], useCloseOnMouseLeave(t23);
    let t24;
    $[61] === handleIsOpenChange ? t24 = $[62] : (t24 = ()=>handleIsOpenChange(!1, !0), $[61] = handleIsOpenChange, $[62] = t24);
    let onWindowEscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(t24), t25;
    $[63] !== onWindowEscape || $[64] !== showTooltip ? (t25 = ()=>{
        if (!showTooltip) return;
        let handleWindowKeyDown = function handleWindowKeyDown(event) {
            event.key === "Escape" && onWindowEscape();
        };
        return window.addEventListener("keydown", handleWindowKeyDown), ()=>{
            window.removeEventListener("keydown", handleWindowKeyDown);
        };
    }, $[63] = onWindowEscape, $[64] = showTooltip, $[65] = t25) : t25 = $[65];
    let t26;
    $[66] === showTooltip ? t26 = $[67] : (t26 = [
        showTooltip
    ], $[66] = showTooltip, $[67] = t26), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t25, t26);
    let t27;
    $[68] === update ? t27 = $[69] : (t27 = (arrowEl)=>{
        arrowRef.current = arrowEl, update();
    }, $[68] = update, $[69] = t27);
    let setArrow = t27, t28;
    $[70] !== handOverReference || $[71] !== refs ? (t28 = (node)=>{
        ref.current = node, node && handOverReference(), refs.setFloating(node);
    }, $[70] = handOverReference, $[71] = refs, $[72] = t28) : t28 = $[72];
    let setFloating = t28, t29;
    bb0: {
        if (!childProp) {
            t29 = null;
            break bb0;
        }
        let t30;
        $[73] !== childProp || $[74] !== handleBlur || $[75] !== handleClick || $[76] !== handleContextMenu || $[77] !== handleFocus || $[78] !== handleMouseEnter || $[79] !== handleMouseLeave || $[80] !== setReference ? (t30 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(childProp, {
            onBlur: handleBlur,
            onFocus: handleFocus,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onClick: handleClick,
            onContextMenu: handleContextMenu,
            ref: setReference
        }), $[73] = childProp, $[74] = handleBlur, $[75] = handleClick, $[76] = handleContextMenu, $[77] = handleFocus, $[78] = handleMouseEnter, $[79] = handleMouseLeave, $[80] = setReference, $[81] = t30) : t30 = $[81], t29 = t30;
    }
    let child = t29;
    if (!child) {
        let t30;
        return $[82] === Symbol.for("react.memo_cache_sentinel") ? (t30 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}), $[82] = t30) : t30 = $[82], t30;
    }
    let T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$layer$2d$umnlcWXZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], t31 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-cERSkX", restProps.className), t32;
    $[83] !== animate || $[84] !== arrowProp || $[85] !== arrowX || $[86] !== arrowY || $[87] !== content || $[88] !== originX || $[89] !== originY || $[90] !== padding || $[91] !== placement || $[92] !== radius || $[93] !== restProps || $[94] !== scheme || $[95] !== setArrow || $[96] !== setFloating || $[97] !== shadow ? (t32 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipCard, {
        ...restProps,
        animate,
        arrow: arrowProp,
        arrowRef: setArrow,
        arrowX,
        arrowY,
        originX,
        originY,
        padding,
        placement,
        radius,
        ref: setFloating,
        scheme,
        shadow,
        children: content
    }), $[83] = animate, $[84] = arrowProp, $[85] = arrowX, $[86] = arrowY, $[87] = content, $[88] = originX, $[89] = originY, $[90] = padding, $[91] = placement, $[92] = radius, $[93] = restProps, $[94] = scheme, $[95] = setArrow, $[96] = setFloating, $[97] = shadow, $[98] = t32) : t32 = $[98];
    let t33;
    $[99] !== T0 || $[100] !== floatingStyles || $[101] !== restProps || $[102] !== setFloating || $[103] !== t31 || $[104] !== t32 || $[105] !== zOffset ? (t33 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        "data-ui": "Tooltip",
        ...restProps,
        className: t31,
        ref: setFloating,
        style: floatingStyles,
        zOffset,
        children: t32
    }), $[99] = T0, $[100] = floatingStyles, $[101] = restProps, $[102] = setFloating, $[103] = t31, $[104] = t32, $[105] = zOffset, $[106] = t33) : t33 = $[106];
    let tooltip = t33, t34;
    $[107] !== portalName || $[108] !== portalProp || $[109] !== tooltip ? (t34 = portalProp ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        __unstable_name: portalName,
        children: tooltip
    }) : tooltip, $[107] = portalName, $[108] = portalProp, $[109] = tooltip, $[110] = t34) : t34 = $[110];
    let tooltipNode = t34, t35;
    $[111] !== animate || $[112] !== showTooltip || $[113] !== tooltipNode ? (t35 = animate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        layoutMode: "default",
        mode: showTooltip ? "visible" : "hidden",
        children: tooltipNode
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Activity"], {
        mode: showTooltip ? "visible" : "hidden",
        children: tooltipNode
    }), $[111] = animate, $[112] = showTooltip, $[113] = tooltipNode, $[114] = t35) : t35 = $[114];
    let t36 = disabled ? null : t35, t37;
    return $[115] !== child || $[116] !== t36 ? (t37 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t36,
            child
        ]
    }), $[115] = child, $[116] = t36, $[117] = t37) : t37 = $[117], t37;
}
/**
* Derivable middleware options that read the boundary element from a ref. Floating UI evaluates
* them inside `computePosition`, which is when the ref is read — never during render.
*
* Built at module scope, like `sizeMiddleware` below: a `ref.current` read inside a callback
* created during render makes the React Compiler skip the calling function, since it cannot tell
* when the callback runs.
*/ function withBoundary(boundaryRef, options) {
    return ()=>({
            ...options,
            boundary: boundaryRef.current || void 0
        });
}
/**
* Caps the tooltip width to the room it is positioned in: the boundary element (or the clipping
* ancestors when there is none), always within the viewport, and the portal element's width.
* Floating UI measures inside its own positioning pass — only while the tooltip is shown, never
* during render or on mount — and the width is written straight to the element, so no state or
* layout effect is involved. Placed after `shift` so `availableWidth` is the full clipping width
* for top and bottom placements; for left and right placements it is the room on that side.
*/ function sizeMiddleware({ boundaryRef, portalRef, rootBoundary }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(()=>({
            boundary: boundaryRef.current || void 0,
            rootBoundary,
            padding: 4,
            async apply (state) {
                let { availableWidth, elements } = state, portalElement = portalRef.current, maxWidth = availableWidth;
                if (portalElement) {
                    let overflow = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(state, {
                        boundary: portalElement,
                        rootBoundary,
                        padding: 4
                    }), portalWidth = state.rects.floating.width - overflow.left - overflow.right;
                    portalWidth > 0 && (maxWidth = Math.min(maxWidth, portalWidth));
                }
                elements.floating.style.maxWidth = `${Math.max(0, maxWidth)}px`;
            }
        }));
}
function useMiddleware(t0) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(22), { animate, arrowProp, arrowRef, boundaryElement, fallbackPlacements, portalElement, rootBoundary } = t0, boundaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(boundaryElement), portalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(portalElement), ret;
    if ($[0] !== animate || $[1] !== arrowProp || $[2] !== arrowRef || $[3] !== boundaryRef || $[4] !== fallbackPlacements || $[5] !== portalRef || $[6] !== rootBoundary) {
        ret = [];
        let t1;
        $[8] !== boundaryRef || $[9] !== fallbackPlacements || $[10] !== rootBoundary ? (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(withBoundary(boundaryRef, {
            fallbackPlacements,
            padding: 4,
            rootBoundary
        })), $[8] = boundaryRef, $[9] = fallbackPlacements, $[10] = rootBoundary, $[11] = t1) : t1 = $[11], ret.push(t1);
        let t2;
        $[12] === Symbol.for("react.memo_cache_sentinel") ? (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
            mainAxis: 4
        }), $[12] = t2) : t2 = $[12], ret.push(t2);
        let t3;
        $[13] !== boundaryRef || $[14] !== rootBoundary ? (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(withBoundary(boundaryRef, {
            rootBoundary,
            padding: 4
        })), $[13] = boundaryRef, $[14] = rootBoundary, $[15] = t3) : t3 = $[15], ret.push(t3);
        let t4;
        if ($[16] !== boundaryRef || $[17] !== portalRef || $[18] !== rootBoundary ? (t4 = sizeMiddleware({
            boundaryRef,
            portalRef,
            rootBoundary
        }), $[16] = boundaryRef, $[17] = portalRef, $[18] = rootBoundary, $[19] = t4) : t4 = $[19], ret.push(t4), arrowProp) {
            let t5;
            $[20] === arrowRef ? t5 = $[21] : (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrowRef,
                padding: 4
            }), $[20] = arrowRef, $[21] = t5), ret.push(t5);
        }
        animate && ret.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]), $[0] = animate, $[1] = arrowProp, $[2] = arrowRef, $[3] = boundaryRef, $[4] = fallbackPlacements, $[5] = portalRef, $[6] = rootBoundary, $[7] = ret;
    } else ret = $[7];
    return ret;
}
/**
* As `useEffectEvent` should never be passed to other components or hooks, this custom hook groups together the `useEffectEvent` and the `useEffect` hook using it.
* @see https://19.react.dev/learn/separating-events-from-effects#reading-latest-props-and-state-with-effect-events:~:text=Never%20pass%20them%20to%20other%20components%20or%20Hooks
*/ function useCloseOnMouseLeave(t0) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(10), { handleIsOpenChange, referenceRef, showTooltip, isInsideGroup } = t0, t1;
    $[0] !== handleIsOpenChange || $[1] !== referenceRef ? (t1 = (target, teardown)=>{
        let referenceElement = referenceRef.current;
        referenceElement && (referenceElement === target || target instanceof Node && referenceElement.contains(target) || (handleIsOpenChange(!1), teardown()));
    }, $[0] = handleIsOpenChange, $[1] = referenceRef, $[2] = t1) : t1 = $[2];
    let onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(t1), t2;
    $[3] !== isInsideGroup || $[4] !== onMouseMove || $[5] !== showTooltip ? (t2 = ()=>{
        if (!showTooltip || isInsideGroup) return;
        let handleMouseMove = (event)=>{
            onMouseMove(event.target, ()=>window.removeEventListener("mousemove", handleMouseMove));
        };
        return window.addEventListener("mousemove", handleMouseMove), ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, $[3] = isInsideGroup, $[4] = onMouseMove, $[5] = showTooltip, $[6] = t2) : t2 = $[6];
    let t3;
    $[7] !== isInsideGroup || $[8] !== showTooltip ? (t3 = [
        isInsideGroup,
        showTooltip
    ], $[7] = isInsideGroup, $[8] = showTooltip, $[9] = t3) : t3 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
}
/**
* @public
* Provides context for a group of tooltip elements that should share a delay
* which temporarily becomes 1 ms after the first floating element of the group opens.
*/ function TooltipDelayGroupProvider(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9), { children, delay } = props, [isGroupActive, setIsGroupActive] = useDelayedState(!1), [openTooltipId, setOpenTooltipId] = useDelayedState(null), openDelay = typeof delay == "number" ? delay : delay?.open || 0, closeDelay = typeof delay == "number" ? delay : delay?.close || 0, t0 = isGroupActive ? 1 : openDelay, t1;
    $[0] !== closeDelay || $[1] !== openTooltipId || $[2] !== setIsGroupActive || $[3] !== setOpenTooltipId || $[4] !== t0 ? (t1 = {
        setIsGroupActive,
        openTooltipId,
        setOpenTooltipId,
        openDelay: t0,
        closeDelay
    }, $[0] = closeDelay, $[1] = openTooltipId, $[2] = setIsGroupActive, $[3] = setOpenTooltipId, $[4] = t0, $[5] = t1) : t1 = $[5];
    let value = t1, t2;
    return $[6] !== children || $[7] !== value ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TooltipDelayGroupContext.Provider, {
        value,
        children
    }), $[6] = children, $[7] = value, $[8] = t2) : t2 = $[8], t2;
}
;
 //# sourceMappingURL=tooltip.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/code.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Code": (()=>Code)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/responsiveFont-Cyvxxz-G.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function codeSyntaxHighlightingStyle({ theme }) {
    let { color: { syntax: color } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(theme);
    return {
        "&.atrule": {
            color: color.atrule
        },
        "&.attr-name": {
            color: color.attrName
        },
        "&.attr-value": {
            color: color.attrValue
        },
        "&.attribute": {
            color: color.attribute
        },
        "&.boolean": {
            color: color.boolean
        },
        "&.builtin": {
            color: color.builtin
        },
        "&.cdata": {
            color: color.cdata
        },
        "&.char": {
            color: color.char
        },
        "&.class": {
            color: color.class
        },
        "&.class-name": {
            color: color.className
        },
        "&.comment": {
            color: color.comment
        },
        "&.constant": {
            color: color.constant
        },
        "&.deleted": {
            color: color.deleted
        },
        "&.doctype": {
            color: color.doctype
        },
        "&.entity": {
            color: color.entity
        },
        "&.function": {
            color: color.function
        },
        "&.hexcode": {
            color: color.hexcode
        },
        "&.id": {
            color: color.id
        },
        "&.important": {
            color: color.important
        },
        "&.inserted": {
            color: color.inserted
        },
        "&.keyword": {
            color: color.keyword
        },
        "&.number": {
            color: color.number
        },
        "&.operator": {
            color: color.operator
        },
        "&.prolog": {
            color: color.prolog
        },
        "&.property": {
            color: color.property
        },
        "&.pseudo-class": {
            color: color.pseudoClass
        },
        "&.pseudo-element": {
            color: color.pseudoElement
        },
        "&.punctuation": {
            color: color.punctuation
        },
        "&.regex": {
            color: color.regex
        },
        "&.selector": {
            color: color.selector
        },
        "&.string": {
            color: color.string
        },
        "&.symbol": {
            color: color.symbol
        },
        "&.tag": {
            color: color.tag
        },
        "&.unit": {
            color: color.unit
        },
        "&.url": {
            color: color.url
        },
        "&.variable": {
            color: color.variable
        }
    };
}
function codeBaseStyle(props) {
    return css`color:var(--card-code-fg-color);& code{font-family:inherit;}& a{color:inherit;text-decoration:underline;border-radius:1px;}& svg{display:inline;max-width:unset;}& [data-sanity-icon]{vertical-align:baseline;}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("code", props)}`;
}
const codeSyntaxStyle = css`& code.refractor .token{${codeSyntaxHighlightingStyle}}`, LazyRefractor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.r("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/refractor-CC48DwHi.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i)), CodeSyntax = styled(/* @__PURE__ */ styled.pre.withConfig({
    displayName: "CodeBase",
    componentId: "sc-b3rcso-0"
})(codeBaseStyle)).withConfig({
    displayName: "CodeSyntax",
    componentId: "sc-b3rcso-1"
})`${codeSyntaxStyle}`, StyledCode = /* @__PURE__ */ styled(CodeSyntax).withConfig({
    displayName: "StyledCode",
    componentId: "sc-b3rcso-2"
})((props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])("code", props), (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$responsiveFont$2d$Cyvxxz$2d$G$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])("code", props));
function CodeComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(23), children, language, ref, restProps, t0, weight;
    $[0] === props ? (children = $[1], language = $[2], ref = $[3], restProps = $[4], t0 = $[5], weight = $[6]) : ({ children, language, ref, size: t0, weight, ...restProps } = props, $[0] = props, $[1] = children, $[2] = language, $[3] = ref, $[4] = restProps, $[5] = t0, $[6] = weight);
    let size = t0 === void 0 ? 2 : t0, t1;
    $[7] === size ? t1 = $[8] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(size), $[7] = size, $[8] = t1);
    let t2 = weight, t3;
    $[9] === children ? t3 = $[10] : (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("code", {
        children
    }), $[9] = children, $[10] = t3);
    let t4;
    $[11] !== children || $[12] !== language ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LazyRefractor, {
        language,
        value: children
    }), $[11] = children, $[12] = language, $[13] = t4) : t4 = $[13];
    let t5;
    $[14] !== t3 || $[15] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: t3,
        children: t4
    }), $[14] = t3, $[15] = t4, $[16] = t5) : t5 = $[16];
    let t6;
    return $[17] !== ref || $[18] !== restProps || $[19] !== t1 || $[20] !== t2 || $[21] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledCode, {
        "data-ui": "Code",
        ...restProps,
        $size: t1,
        $weight: t2,
        ref,
        children: t5
    }), $[17] = ref, $[18] = restProps, $[19] = t1, $[20] = t2, $[21] = t5, $[22] = t6) : t6 = $[22], t6;
}
/**
* @public
*/ const Code = CodeComponent;
;
 //# sourceMappingURL=code.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover-Bb5NvE5n.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "t": (()=>Popover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getElementRef-BLVMlHTn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/elementSizeObserver-pevZfdGa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/arrow-CleOpGKV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
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
const DEFAULT_POPOVER_MARGINS = [
    0,
    0,
    0,
    0
], DEFAULT_FALLBACK_PLACEMENTS = {
    top: [
        "bottom",
        "left",
        "right"
    ],
    "top-start": [
        "bottom-start",
        "left-start",
        "right-start"
    ],
    "top-end": [
        "bottom-end",
        "left-end",
        "right-end"
    ],
    bottom: [
        "top",
        "left",
        "right"
    ],
    "bottom-start": [
        "top-start",
        "left-start",
        "right-start"
    ],
    "bottom-end": [
        "top-end",
        "left-end",
        "right-end"
    ],
    left: [
        "right",
        "top",
        "bottom"
    ],
    "left-start": [
        "right-start",
        "top-start",
        "bottom-start"
    ],
    "left-end": [
        "right-end",
        "top-end",
        "bottom-end"
    ],
    right: [
        "left",
        "top",
        "bottom"
    ],
    "right-start": [
        "left-start",
        "top-start",
        "bottom-start"
    ],
    "right-end": [
        "left-end",
        "top-end",
        "bottom-end"
    ]
};
function size$1(options) {
    let { constrainSize, margins, matchReferenceWidth, padding = 0 } = options;
    return {
        name: "@sanity/ui/size",
        options,
        async fn (args) {
            let { elements, placement, platform, rects } = args, { floating, reference } = rects, overflow = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(args, {
                altBoundary: !0,
                boundary: options.boundaryElement || void 0,
                elementContext: "floating",
                padding,
                rootBoundary: "viewport"
            }), maxWidth = Infinity, maxHeight = Infinity, floatingW = floating.width, floatingH = floating.height;
            placement.includes("top") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.top), placement.includes("right") && (maxWidth = floatingW - overflow.right, maxHeight = floatingH - (overflow.top + overflow.bottom)), placement.includes("bottom") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.bottom), placement.includes("left") && (maxWidth = floatingW - overflow.left, maxHeight = floatingH - (overflow.top + overflow.bottom));
            let availableWidth = Math.max(0, maxWidth - margins[1] - margins[3]), availableHeight = Math.max(0, maxHeight - margins[0] - margins[2]), referenceWidth = Math.max(0, reference.width - margins[1] - margins[3]);
            matchReferenceWidth && (elements.floating.style.width = `${referenceWidth}px`), constrainSize && (elements.floating.style.maxWidth = `${Math.min(availableWidth, options.maxWidth ?? Infinity)}px`, elements.floating.style.maxHeight = `${availableHeight}px`);
            let nextDimensions = await platform.getDimensions(elements.floating), targetH = nextDimensions.height;
            return floatingW !== nextDimensions.width || floatingH !== targetH ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
}
function calcCurrentWidth(params) {
    let { container, mediaIndex, width } = params, w = width[mediaIndex], currentWidth = w === void 0 ? width[width.length - 1] : w;
    return typeof currentWidth == "number" ? container[currentWidth] : void 0;
}
function calcMaxWidth(params) {
    let { boundaryWidth, currentWidth } = params, maxWidth = Math.min(currentWidth ?? Infinity, (boundaryWidth || Infinity) - 8);
    return Number.isFinite(maxWidth) ? Math.max(0, maxWidth) : void 0;
}
const MotionCard = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])).withConfig({
    displayName: "MotionCard",
    componentId: "sc-jp9vvl-0"
})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`;
/**
* @internal
*/ function PopoverCard(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(66), animate, arrow, arrowRef, arrowX, arrowY, children, constrainSize, marginsProp, matchReferenceWidth, maxWidth, originX, originY, overflow, padding, placement, radius, ref, restProps, scheme, shadow, strategy, style, tone, width, xProp, yProp;
    $[0] === props ? (animate = $[1], arrow = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], constrainSize = $[7], marginsProp = $[8], matchReferenceWidth = $[9], maxWidth = $[10], originX = $[11], originY = $[12], overflow = $[13], padding = $[14], placement = $[15], radius = $[16], ref = $[17], restProps = $[18], scheme = $[19], shadow = $[20], strategy = $[21], style = $[22], tone = $[23], width = $[24], xProp = $[25], yProp = $[26]) : ({ __unstable_margins: marginsProp, animate, arrow, arrowRef, arrowX, arrowY, children, constrainSize, matchReferenceWidth, maxWidth, padding, placement, originX, originY, overflow, radius, ref, scheme, shadow, strategy, style, tone, width, x: xProp, y: yProp, ...restProps } = props, $[0] = props, $[1] = animate, $[2] = arrow, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = constrainSize, $[8] = marginsProp, $[9] = matchReferenceWidth, $[10] = maxWidth, $[11] = originX, $[12] = originY, $[13] = overflow, $[14] = padding, $[15] = placement, $[16] = radius, $[17] = ref, $[18] = restProps, $[19] = scheme, $[20] = shadow, $[21] = strategy, $[22] = style, $[23] = tone, $[24] = width, $[25] = xProp, $[26] = yProp);
    let { zIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), margins = marginsProp || DEFAULT_POPOVER_MARGINS, x = (xProp ?? 0) + margins[3], y = (yProp ?? 0) + margins[0], t0;
    $[27] !== originX || $[28] !== originY ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(originX, originY), $[27] = originX, $[28] = originY, $[29] = t0) : t0 = $[29];
    let t1 = animate ? "transform" : void 0, t2 = constrainSize ? void 0 : style?.maxHeight ?? "", t3 = constrainSize ? void 0 : maxWidth ?? style?.maxWidth ?? "", t4 = matchReferenceWidth ? void 0 : width ?? style?.width ?? "", t5;
    $[30] !== strategy || $[31] !== style || $[32] !== t0 || $[33] !== t1 || $[34] !== t2 || $[35] !== t3 || $[36] !== t4 || $[37] !== x || $[38] !== y || $[39] !== zIndex ? (t5 = {
        left: x,
        position: strategy,
        top: y,
        transformOrigin: t0,
        zIndex,
        willChange: t1,
        ...style,
        maxHeight: t2,
        maxWidth: t3,
        width: t4
    }, $[30] = strategy, $[31] = style, $[32] = t0, $[33] = t1, $[34] = t2, $[35] = t3, $[36] = t4, $[37] = x, $[38] = y, $[39] = zIndex, $[40] = t5) : t5 = $[40];
    let rootStyle = t5, t6 = arrowX === null ? void 0 : arrowX, t7 = arrowY === null ? void 0 : arrowY, t8;
    $[41] !== t6 || $[42] !== t7 ? (t8 = {
        left: t6,
        top: t7,
        right: void 0,
        bottom: void 0
    }, $[41] = t6, $[42] = t7, $[43] = t8) : t8 = $[43];
    let arrowStyle = t8, t9 = animate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"] : void 0, t10;
    $[44] !== children || $[45] !== padding ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        direction: "column",
        flex: 1,
        padding,
        children
    }), $[44] = children, $[45] = padding, $[46] = t10) : t10 = $[46];
    let t11;
    $[47] !== overflow || $[48] !== t10 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        "data-ui": "Popover__wrapper",
        direction: "column",
        flex: 1,
        overflow,
        children: t10
    }), $[47] = overflow, $[48] = t10, $[49] = t11) : t11 = $[49];
    let t12;
    $[50] !== arrow || $[51] !== arrowRef || $[52] !== arrowStyle ? (t12 = arrow && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        ref: arrowRef,
        style: arrowStyle,
        width: 19,
        height: 8,
        radius: 2
    }), $[50] = arrow, $[51] = arrowRef, $[52] = arrowStyle, $[53] = t12) : t12 = $[53];
    let t13;
    return $[54] !== placement || $[55] !== radius || $[56] !== ref || $[57] !== restProps || $[58] !== rootStyle || $[59] !== scheme || $[60] !== shadow || $[61] !== t11 || $[62] !== t12 || $[63] !== t9 || $[64] !== tone ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(MotionCard, {
        "data-ui": "Popover",
        ...restProps,
        "data-placement": placement,
        radius,
        ref,
        scheme,
        shadow,
        sizing: "border",
        style: rootStyle,
        tone,
        ...t9,
        children: [
            t11,
            t12
        ]
    }), $[54] = placement, $[55] = radius, $[56] = ref, $[57] = restProps, $[58] = rootStyle, $[59] = scheme, $[60] = shadow, $[61] = t11, $[62] = t12, $[63] = t9, $[64] = tone, $[65] = t13) : t13 = $[65], t13;
}
/**
* The events on the reference element that count as intent to open the popover. Each precedes the
* interaction that usually opens a popover: focus before a key press, the pointer entering before
* a click or a tap.
*/ const INTENT_EVENT_TYPES = [
    "focusin",
    "pointerenter",
    "pointerdown"
];
/** Calls `handleIntent` on intent to open the popover, until the returned function is called */ function listenForIntent(element, handleIntent) {
    let controller = new AbortController(), { signal } = controller;
    for (let type of INTENT_EVENT_TYPES)element.addEventListener(type, handleIntent, {
        signal
    });
    let { activeElement } = element.ownerDocument;
    return activeElement && element.contains(activeElement) && handleIntent(), ()=>controller.abort();
}
/**
* Listens for intent on the cloned child's element from the moment it attaches, until it detaches
* or the popover has rendered. Returns the callback for `useReferenceElement` to attach with.
*/ function useChildIntent(shouldRender, handleIntent) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6), shouldRenderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(shouldRender), stopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0, t1;
    $[0] === shouldRender ? (t0 = $[1], t1 = $[2]) : (t0 = ()=>{
        shouldRender && stopListening(stopRef);
    }, t1 = [
        shouldRender
    ], $[0] = shouldRender, $[1] = t0, $[2] = t1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    return $[3] !== handleIntent || $[4] !== shouldRenderRef ? (t2 = (node)=>(shouldRenderRef.current || (stopRef.current = listenForIntent(node, handleIntent)), ()=>stopListening(stopRef)), $[3] = handleIntent, $[4] = shouldRenderRef, $[5] = t2) : t2 = $[5], t2;
}
function stopListening(stopRef) {
    stopRef.current?.(), stopRef.current = null;
}
const ViewportOverlay = ()=>{
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), { zIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), t0;
    return $[0] === zIndex ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-ui": "PopoverOverlay",
        style: {
            height: "100vh",
            inset: 0,
            position: "fixed",
            width: "100vw",
            zIndex
        }
    }), $[0] = zIndex, $[1] = t0), t0;
};
/**
* The `Popover` component is used to display some content on top of another.
*
* @public
*/ function Popover(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(120), { container, layer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(), boundaryElementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(), _fallbackPlacements, _floatingBoundary, _referenceBoundary, _zOffsetProp, childProp, content, disabled, forwardedRef, matchReferenceWidth, modal, open, paddingProp, portal, referenceElement, restProps, scheme, t0, t1, t10, t11, t2, t3, t4, t5, t6, t7, t8, t9, updateRef;
    if ($[0] !== props) {
        let { __unstable_margins: t12, animate: t13, arrow: t14, children: t15, constrainSize: t16, content: t17, disabled: t18, fallbackPlacements: t19, matchReferenceWidth: t20, floatingBoundary: t21, modal: t22, onActivate, open: t23, overflow: t24, padding: t25, placement: t26, placementStrategy: t27, portal: t28, preventOverflow: t29, radius: t30, ref: t31, referenceBoundary: t32, referenceElement: t33, scheme: t34, shadow: t35, tone: t36, width: t37, zOffset: t38, updateRef: t39, ...t40 } = props;
        t0 = t12, t1 = t13, t2 = t14, childProp = t15, t3 = t16, content = t17, disabled = t18, _fallbackPlacements = t19, matchReferenceWidth = t20, _floatingBoundary = t21, modal = t22, open = t23, t4 = t24, paddingProp = t25, t5 = t26, t6 = t27, portal = t28, t7 = t29, t8 = t30, forwardedRef = t31, _referenceBoundary = t32, referenceElement = t33, scheme = t34, t9 = t35, t10 = t36, t11 = t37, _zOffsetProp = t38, updateRef = t39, restProps = t40, $[0] = props, $[1] = _fallbackPlacements, $[2] = _floatingBoundary, $[3] = _referenceBoundary, $[4] = _zOffsetProp, $[5] = childProp, $[6] = content, $[7] = disabled, $[8] = forwardedRef, $[9] = matchReferenceWidth, $[10] = modal, $[11] = open, $[12] = paddingProp, $[13] = portal, $[14] = referenceElement, $[15] = restProps, $[16] = scheme, $[17] = t0, $[18] = t1, $[19] = t10, $[20] = t11, $[21] = t2, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = t6, $[26] = t7, $[27] = t8, $[28] = t9, $[29] = updateRef;
    } else _fallbackPlacements = $[1], _floatingBoundary = $[2], _referenceBoundary = $[3], _zOffsetProp = $[4], childProp = $[5], content = $[6], disabled = $[7], forwardedRef = $[8], matchReferenceWidth = $[9], modal = $[10], open = $[11], paddingProp = $[12], portal = $[13], referenceElement = $[14], restProps = $[15], scheme = $[16], t0 = $[17], t1 = $[18], t10 = $[19], t11 = $[20], t2 = $[21], t3 = $[22], t4 = $[23], t5 = $[24], t6 = $[25], t7 = $[26], t8 = $[27], t9 = $[28], updateRef = $[29];
    let margins = t0 === void 0 ? DEFAULT_POPOVER_MARGINS : t0, _animate = t1 !== void 0 && t1, arrowProp = t2 !== void 0 && t2, constrainSize = t3 !== void 0 && t3, overflow = t4 === void 0 ? "hidden" : t4, placementProp = t5 === void 0 ? "bottom" : t5, placementStrategy = t6 === void 0 ? "flip" : t6, preventOverflow = t7 === void 0 || t7, radiusProp = t8 === void 0 ? 3 : t8, shadowProp = t9 === void 0 ? 3 : t9, tone = t10 === void 0 ? "inherit" : t10, widthProp = t11 === void 0 ? "auto" : t11, fallbackPlacements = _fallbackPlacements ?? DEFAULT_FALLBACK_PLACEMENTS[props.placement ?? "bottom"], floatingBoundary = _floatingBoundary ?? boundaryElementContext.element, referenceBoundary = _referenceBoundary ?? boundaryElementContext.element, boundaryElement = boundaryElementContext.element ?? floatingBoundary, zOffsetProp = _zOffsetProp ?? layer.popover.zOffset, animate = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])() && _animate, isOpen = !!open && !disabled, boundarySize = useBoundarySize(boundaryElement, isOpen), t12;
    $[30] === paddingProp ? t12 = $[31] : (t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(paddingProp), $[30] = paddingProp, $[31] = t12);
    let padding = t12, t13;
    $[32] === radiusProp ? t13 = $[33] : (t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radiusProp), $[32] = radiusProp, $[33] = t13);
    let radius = t13, t14;
    $[34] === shadowProp ? t14 = $[35] : (t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(shadowProp), $[34] = shadowProp, $[35] = t14);
    let shadow = t14, widthArrayProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(widthProp), t15;
    $[36] === zOffsetProp ? t15 = $[37] : (t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(zOffsetProp), $[36] = zOffsetProp, $[37] = t15);
    let zOffset = t15, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t16;
    $[38] === Symbol.for("react.memo_cache_sentinel") ? (t16 = ()=>ref.current, $[38] = t16) : t16 = $[38], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t16);
    let mediaIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(), boundaryWidth = constrainSize || preventOverflow ? boundarySize?.width : void 0, width = calcCurrentWidth({
        container,
        mediaIndex,
        width: widthArrayProp
    }), maxWidth = calcMaxWidth({
        boundaryWidth,
        currentWidth: width
    }), t17;
    $[39] !== animate || $[40] !== arrowProp || $[41] !== constrainSize || $[42] !== fallbackPlacements || $[43] !== floatingBoundary || $[44] !== margins || $[45] !== matchReferenceWidth || $[46] !== maxWidth || $[47] !== placementProp || $[48] !== placementStrategy || $[49] !== preventOverflow || $[50] !== referenceBoundary ? (t17 = {
        animate,
        arrowProp,
        arrowRef,
        constrainSize,
        fallbackPlacements,
        floatingBoundary,
        margins,
        matchReferenceWidth,
        maxWidth,
        placementProp,
        placementStrategy,
        preventOverflow,
        referenceBoundary,
        rootBoundary: "viewport"
    }, $[39] = animate, $[40] = arrowProp, $[41] = constrainSize, $[42] = fallbackPlacements, $[43] = floatingBoundary, $[44] = margins, $[45] = matchReferenceWidth, $[46] = maxWidth, $[47] = placementProp, $[48] = placementStrategy, $[49] = preventOverflow, $[50] = referenceBoundary, $[51] = t17) : t17 = $[51];
    let middleware = useMiddleware(t17), t18;
    $[52] === referenceElement ? t18 = $[53] : (t18 = referenceElement ? {
        reference: referenceElement
    } : void 0, $[52] = referenceElement, $[53] = t18);
    let t19;
    $[54] !== middleware || $[55] !== placementProp || $[56] !== t18 ? (t19 = {
        middleware,
        placement: placementProp,
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"],
        elements: t18
    }, $[54] = middleware, $[55] = placementProp, $[56] = t18, $[57] = t19) : t19 = $[57];
    let { x, y, middlewareData, placement, refs, strategy, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])(t19), [hasRendered, setHasRendered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1);
    isOpen && !hasRendered && setHasRendered(!0);
    let shouldRender = isOpen || hasRendered, intentReference = shouldRender || disabled ? null : referenceElement, t20;
    $[58] === Symbol.for("react.memo_cache_sentinel") ? (t20 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setHasRendered(!0)), $[58] = t20) : t20 = $[58];
    let handleIntent = t20, t21, t22;
    $[59] === intentReference ? (t21 = $[60], t22 = $[61]) : (t21 = ()=>{
        if (intentReference) return listenForIntent(intentReference, handleIntent);
    }, t22 = [
        handleIntent,
        intentReference
    ], $[59] = intentReference, $[60] = t21, $[61] = t22), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t21, t22);
    let listenForChildIntent = useChildIntent(shouldRender, handleIntent), referenceHidden = middlewareData.hide?.referenceHidden, arrowX = middlewareData.arrow?.x, arrowY = middlewareData.arrow?.y, originX = middlewareData["@sanity/ui/origin"]?.originX, originY = middlewareData["@sanity/ui/origin"]?.originY, t23;
    $[62] === Symbol.for("react.memo_cache_sentinel") ? (t23 = (arrowEl)=>{
        arrowRef.current = arrowEl;
    }, $[62] = t23) : t23 = $[62];
    let setArrow = t23, t24;
    $[63] !== childProp || $[64] !== referenceElement ? (t24 = childProp && !referenceElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(childProp) : void 0, $[63] = childProp, $[64] = referenceElement, $[65] = t24) : t24 = $[65];
    let { handOverReference, setReference } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(refs, t24, listenForChildIntent), t25;
    $[66] !== handOverReference || $[67] !== refs ? (t25 = (node)=>{
        ref.current = node, node && handOverReference(), refs.setFloating(node);
    }, $[66] = handOverReference, $[67] = refs, $[68] = t25) : t25 = $[68];
    let setFloating = t25, t26;
    bb0: {
        if (referenceElement) {
            t26 = childProp;
            break bb0;
        }
        if (!childProp) {
            t26 = null;
            break bb0;
        }
        let t27;
        $[69] !== childProp || $[70] !== setReference ? (t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(childProp, {
            ref: setReference
        }), $[69] = childProp, $[70] = setReference, $[71] = t27) : t27 = $[71], t26 = t27;
    }
    let child = t26, t27, t28;
    if ($[72] === update ? (t27 = $[73], t28 = $[74]) : (t27 = ()=>update, t28 = [
        update
    ], $[72] = update, $[73] = t27, $[74] = t28), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(updateRef, t27, t28), disabled) {
        let t29;
        return $[75] === childProp ? t29 = $[76] : (t29 = childProp || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}), $[75] = childProp, $[76] = t29), t29;
    }
    let t29;
    $[77] === modal ? t29 = $[78] : (t29 = modal && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ViewportOverlay, {}), $[77] = modal, $[78] = t29);
    let t30;
    $[79] !== animate || $[80] !== arrowProp || $[81] !== arrowX || $[82] !== arrowY || $[83] !== constrainSize || $[84] !== content || $[85] !== margins || $[86] !== matchReferenceWidth || $[87] !== maxWidth || $[88] !== originX || $[89] !== originY || $[90] !== overflow || $[91] !== padding || $[92] !== placement || $[93] !== radius || $[94] !== referenceHidden || $[95] !== restProps || $[96] !== scheme || $[97] !== setFloating || $[98] !== shadow || $[99] !== strategy || $[100] !== tone || $[101] !== width || $[102] !== x || $[103] !== y ? (t30 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverCard, {
        ...restProps,
        __unstable_margins: margins,
        animate,
        arrow: arrowProp,
        arrowRef: setArrow,
        arrowX,
        arrowY,
        constrainSize,
        hidden: referenceHidden,
        matchReferenceWidth,
        maxWidth,
        overflow,
        padding,
        placement,
        radius,
        ref: setFloating,
        scheme,
        shadow,
        originX,
        originY,
        strategy,
        tone,
        width,
        x,
        y,
        children: content
    }), $[79] = animate, $[80] = arrowProp, $[81] = arrowX, $[82] = arrowY, $[83] = constrainSize, $[84] = content, $[85] = margins, $[86] = matchReferenceWidth, $[87] = maxWidth, $[88] = originX, $[89] = originY, $[90] = overflow, $[91] = padding, $[92] = placement, $[93] = radius, $[94] = referenceHidden, $[95] = restProps, $[96] = scheme, $[97] = setFloating, $[98] = shadow, $[99] = strategy, $[100] = tone, $[101] = width, $[102] = x, $[103] = y, $[104] = t30) : t30 = $[104];
    let t31;
    $[105] !== t29 || $[106] !== t30 || $[107] !== zOffset ? (t31 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        zOffset,
        children: [
            t29,
            t30
        ]
    }), $[105] = t29, $[106] = t30, $[107] = zOffset, $[108] = t31) : t31 = $[108];
    let popover = t31, t32;
    $[109] !== popover || $[110] !== portal ? (t32 = portal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$arrow$2d$CleOpGKV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        __unstable_name: typeof portal == "string" ? portal : void 0,
        children: popover
    }) : popover, $[109] = popover, $[110] = portal, $[111] = t32) : t32 = $[111];
    let popoverNode = t32, t33;
    $[112] !== animate || $[113] !== open || $[114] !== popoverNode || $[115] !== shouldRender ? (t33 = animate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        layoutMode: "default",
        mode: open ? "visible" : "hidden",
        children: shouldRender ? popoverNode : null
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Activity"], {
        mode: open ? "visible" : "hidden",
        children: shouldRender ? popoverNode : null
    }), $[112] = animate, $[113] = open, $[114] = popoverNode, $[115] = shouldRender, $[116] = t33) : t33 = $[116];
    let t34;
    return $[117] !== child || $[118] !== t33 ? (t34 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t33,
            child
        ]
    }), $[117] = child, $[118] = t33, $[119] = t34) : t34 = $[119], t34;
}
/**
* The border-box size of the boundary element in whole pixels, tracked only while the popover is
* open.
*
* Closed popovers have nothing to size, so they hold no `ResizeObserver` subscription and do not
* re-render when the boundary resizes (one subscription per popover, every closed popover
* re-rendering on every boundary resize, is what this replaces). The boundary is measured
* synchronously in a layout effect when the popover opens, so the max width is right in the first
* painted frame instead of one `ResizeObserver` callback later; the shared observer takes over
* from there. The last size is kept while closed.
*
* Both measurements are rounded to whole pixels so that they agree: the observer's first delivery
* must not change the size the opening commit measured, or the max width would be corrected a
* frame later after all. See `measureBorderBox`.
*/ function useBoundarySize(element, open) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0), t0, t1;
    return $[0] !== element || $[1] !== open ? (t0 = ()=>{
        if (open && element) return setSize((prev)=>sameSize(prev, measureBorderBox(element))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$elementSizeObserver$2d$pevZfdGa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"].subscribe(element, (t2)=>{
            let { border } = t2;
            return setSize((prev_0)=>sameSize(prev_0, {
                    width: Math.round(border.width),
                    height: Math.round(border.height)
                }));
        });
    }, t1 = [
        element,
        open
    ], $[0] = element, $[1] = open, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t0, t1), size;
}
/**
* The border-box size of an element in whole pixels, the way `_elementSizeObserver` reports it:
* from `ResizeObserverEntry.borderBoxSize`, which is the layout size with no CSS transform or
* `zoom` applied, in the element's writing mode (`inlineSize` as `width`, `blockSize` as
* `height`), rounded by `useBoundarySize`. `offsetWidth`/`offsetHeight` are that same untransformed
* border box rounded to whole pixels. `getBoundingClientRect` would include transforms (a boundary
* mid scale animation) and `zoom`, and `getComputedStyle` serializes lengths with limited
* precision, so neither agrees with the observer for every element.
*
* Kept at module scope on purpose: reading the offset size forces a synchronous layout, and the
* React Compiler (which the package build runs) lifts a member expression on an element captured
* by a component callback into a memo dependency evaluated during render. A plain function call
* on the element gives it nothing to lift.
*/ function measureBorderBox(element) {
    let { offsetWidth, offsetHeight } = element;
    return getComputedStyle(element).writingMode.startsWith("horizontal") ? {
        width: offsetWidth,
        height: offsetHeight
    } : {
        width: offsetHeight,
        height: offsetWidth
    };
}
/** Keeps the previous object when the size has not changed, so `setState` bails out */ function sameSize(prev, next) {
    return prev && prev.width === next.width && prev.height === next.height ? prev : next;
}
function useMiddleware(t0) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(36), { animate, arrowProp, arrowRef, constrainSize, fallbackPlacements, floatingBoundary, margins, matchReferenceWidth, maxWidth, placementProp, placementStrategy, preventOverflow, referenceBoundary, rootBoundary } = t0, ret;
    if ($[0] !== animate || $[1] !== arrowProp || $[2] !== arrowRef || $[3] !== constrainSize || $[4] !== fallbackPlacements || $[5] !== floatingBoundary || $[6] !== margins || $[7] !== matchReferenceWidth || $[8] !== maxWidth || $[9] !== placementProp || $[10] !== placementStrategy || $[11] !== preventOverflow || $[12] !== referenceBoundary || $[13] !== rootBoundary) {
        if (ret = [], constrainSize || preventOverflow) {
            if (placementStrategy === "autoPlacement") {
                let t1;
                $[15] !== fallbackPlacements || $[16] !== placementProp ? (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])({
                    allowedPlacements: [
                        placementProp
                    ].concat(fallbackPlacements)
                }), $[15] = fallbackPlacements, $[16] = placementProp, $[17] = t1) : t1 = $[17], ret.push(t1);
            } else {
                let t1 = floatingBoundary || void 0, t2;
                $[18] !== fallbackPlacements || $[19] !== rootBoundary || $[20] !== t1 ? (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                    boundary: t1,
                    fallbackPlacements,
                    padding: 4,
                    rootBoundary
                }), $[18] = fallbackPlacements, $[19] = rootBoundary, $[20] = t1, $[21] = t2) : t2 = $[21], ret.push(t2);
            }
        }
        let t1;
        if ($[22] === Symbol.for("react.memo_cache_sentinel") ? (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
            mainAxis: 4
        }), $[22] = t1) : t1 = $[22], ret.push(t1), constrainSize || matchReferenceWidth) {
            let t2 = floatingBoundary || void 0, t3 = constrainSize ? maxWidth : void 0, t4;
            $[23] !== constrainSize || $[24] !== margins || $[25] !== matchReferenceWidth || $[26] !== t2 || $[27] !== t3 ? (t4 = size$1({
                boundaryElement: t2,
                constrainSize,
                margins,
                matchReferenceWidth,
                maxWidth: t3,
                padding: 4
            }), $[23] = constrainSize, $[24] = margins, $[25] = matchReferenceWidth, $[26] = t2, $[27] = t3, $[28] = t4) : t4 = $[28], ret.push(t4);
        }
        if (preventOverflow) {
            let t2 = floatingBoundary || void 0, t3;
            $[29] !== rootBoundary || $[30] !== t2 ? (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                boundary: t2,
                rootBoundary,
                padding: 4
            }), $[29] = rootBoundary, $[30] = t2, $[31] = t3) : t3 = $[31], ret.push(t3);
        }
        if (arrowProp) {
            let t2;
            $[32] === arrowRef ? t2 = $[33] : (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrowRef,
                padding: 4
            }), $[32] = arrowRef, $[33] = t2), ret.push(t2);
        }
        animate && ret.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"]);
        let t2 = referenceBoundary || void 0, t3;
        $[34] === t2 ? t3 = $[35] : (t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
            boundary: t2,
            padding: 4,
            strategy: "referenceHidden"
        }), $[34] = t2, $[35] = t3), ret.push(t3), $[0] = animate, $[1] = arrowProp, $[2] = arrowRef, $[3] = constrainSize, $[4] = fallbackPlacements, $[5] = floatingBoundary, $[6] = margins, $[7] = matchReferenceWidth, $[8] = maxWidth, $[9] = placementProp, $[10] = placementStrategy, $[11] = preventOverflow, $[12] = referenceBoundary, $[13] = rootBoundary, $[14] = ret;
    } else ret = $[14];
    return ret;
}
;
 //# sourceMappingURL=popover-Bb5NvE5n.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/menu.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Menu": (()=>Menu),
    "MenuButton": (()=>MenuButton),
    "MenuDivider": (()=>MenuDivider),
    "MenuGroup": (()=>MenuGroup),
    "MenuItem": (()=>MenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/helpers-XThPpWje.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/element-BYgCE_iK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getTheme_v2-y09KqtEb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useLayer-D_TnC6On.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/flex-ohP2jG9d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/stack-DyrC2YfU.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/getElementRef-BLVMlHTn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2d$Bb5NvE5n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover-Bb5NvE5n.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/useClickOutsideEvent-CC1zgOmv.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/hotkeys-Bd5rZOMO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/lite.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ChevronRight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/icons/dist/ChevronRight.js [app-ssr] (ecmascript)");
"use client";
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
const MenuContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])("@sanity/ui/context/menu", null);
/**
* @internal
*/ function _isFocusable(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(element) && element.getAttribute("data-disabled") !== "true" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$element$2d$BYgCE_iK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(element) && !element.disabled;
}
/**
* @internal
*/ function _getFocusableElements(elements) {
    return elements.filter(_isFocusable);
}
function _getDOMPath(rootElement, el) {
    let path = [], e = el;
    for(; e !== rootElement;){
        let parentElement = e.parentElement;
        if (!parentElement) return path;
        let index = Array.from(parentElement.childNodes).indexOf(e);
        if (path.unshift(index), parentElement === rootElement) return path;
        e = parentElement;
    }
    return path;
}
const EMPTY_PATH = [];
/**
* @internal
*/ function _sortElements(rootElement, elements) {
    if (!rootElement) return;
    let map = /* @__PURE__ */ new WeakMap();
    for (let el of elements)map.set(el, _getDOMPath(rootElement, el));
    let _sort = (a, b)=>{
        let _a = map.get(a) || EMPTY_PATH, _b = map.get(b) || EMPTY_PATH, len = Math.max(_a.length, _b.length);
        for(let i = 0; i < len; i += 1){
            let aIndex = _a[i] || -1, bIndex = _b[i] || -1;
            if (aIndex !== bIndex) return aIndex - bIndex;
        }
        return 0;
    };
    elements.sort(_sort);
}
/**
* This controller is responsible for controlling UI menu state.
*
* @internal
*/ function useMenuController(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(23), { onKeyDown, originElement, shouldFocus, rootElementRef } = props, t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
    let elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(t0), [activeIndex, _setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1), activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activeIndex), [activeElement, setActiveElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), t1;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = (nextActiveIndex)=>{
        _setActiveIndex(nextActiveIndex), activeIndexRef.current = nextActiveIndex, setActiveElement(elementsRef.current[nextActiveIndex] || null);
    }, $[1] = t1) : t1 = $[1];
    let setActiveIndex = t1, t2;
    $[2] === rootElementRef ? t2 = $[3] : (t2 = (element, selected)=>{
        if (!element) return _temp$3;
        if (elementsRef.current.indexOf(element) === -1 && (elementsRef.current.push(element), _sortElements(rootElementRef.current, elementsRef.current)), selected) {
            let selectedIndex = elementsRef.current.indexOf(element);
            setActiveIndex(selectedIndex);
        }
        return ()=>{
            let idx = elementsRef.current.indexOf(element);
            idx > -1 && elementsRef.current.splice(idx, 1);
        };
    }, $[2] = rootElementRef, $[3] = t2);
    let mount = t2, t3, t4;
    $[4] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ()=>()=>setActiveIndex(-1), t4 = [
        setActiveIndex
    ], $[4] = t3, $[5] = t4) : (t3 = $[4], t4 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    $[6] !== onKeyDown || $[7] !== originElement ? (t5 = (event)=>{
        if (event.key === "Tab") originElement && originElement.focus();
        else if (event.key === "Home") {
            event.preventDefault(), event.stopPropagation();
            let el = _getFocusableElements(elementsRef.current)[0];
            if (!el) return;
            let currentIndex = elementsRef.current.indexOf(el);
            setActiveIndex(currentIndex);
        } else if (event.key === "End") {
            event.preventDefault(), event.stopPropagation();
            let focusableElements_0 = _getFocusableElements(elementsRef.current), el_0 = focusableElements_0[focusableElements_0.length - 1];
            if (!el_0) return;
            let currentIndex_0 = elementsRef.current.indexOf(el_0);
            setActiveIndex(currentIndex_0);
        } else if (event.key === "ArrowUp") {
            event.preventDefault(), event.stopPropagation();
            let focusableElements_1 = _getFocusableElements(elementsRef.current), focusableLen = focusableElements_1.length;
            if (focusableLen === 0) return;
            let focusedElement = elementsRef.current[activeIndexRef.current], focusedIndex = focusableElements_1.indexOf(focusedElement);
            focusedIndex = (focusedIndex - 1 + focusableLen) % focusableLen;
            let el_1 = focusableElements_1[focusedIndex], currentIndex_1 = elementsRef.current.indexOf(el_1);
            setActiveIndex(currentIndex_1);
        } else if (event.key === "ArrowDown") {
            event.preventDefault(), event.stopPropagation();
            let focusableElements_2 = _getFocusableElements(elementsRef.current), focusableLen_0 = focusableElements_2.length;
            if (focusableLen_0 === 0) return;
            let focusedElement_0 = elementsRef.current[activeIndexRef.current], focusedIndex_0 = focusableElements_2.indexOf(focusedElement_0);
            focusedIndex_0 = (focusedIndex_0 + 1) % focusableLen_0;
            let el_2 = focusableElements_2[focusedIndex_0], currentIndex_2 = elementsRef.current.indexOf(el_2);
            setActiveIndex(currentIndex_2);
        } else onKeyDown && onKeyDown(event);
    }, $[6] = onKeyDown, $[7] = originElement, $[8] = t5) : t5 = $[8];
    let handleKeyDown = t5, t6;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t6 = (event_0)=>{
        let element_0 = event_0.currentTarget, currentIndex_3 = elementsRef.current.indexOf(element_0);
        setActiveIndex(currentIndex_3);
    }, $[9] = t6) : t6 = $[9];
    let handleItemMouseEnter = t6, t7;
    $[10] === rootElementRef ? t7 = $[11] : (t7 = ()=>{
        setActiveIndex(-2), rootElementRef.current?.focus();
    }, $[10] = rootElementRef, $[11] = t7);
    let handleItemMouseLeave = t7, t8, t9;
    $[12] !== activeIndex || $[13] !== rootElementRef || $[14] !== shouldFocus ? (t8 = ()=>{
        if (!rootElementRef.current) return;
        let rafId = requestAnimationFrame(()=>{
            if (activeIndex === -1) {
                if (shouldFocus === "first") {
                    let el_3 = _getFocusableElements(elementsRef.current)[0];
                    if (el_3) {
                        let currentIndex_4 = elementsRef.current.indexOf(el_3);
                        setActiveIndex(currentIndex_4);
                    }
                }
                if (shouldFocus === "last") {
                    let focusableElements_4 = _getFocusableElements(elementsRef.current), el_4 = focusableElements_4[focusableElements_4.length - 1];
                    if (el_4) {
                        let currentIndex_5 = elementsRef.current.indexOf(el_4);
                        setActiveIndex(currentIndex_5);
                    }
                }
            } else (elementsRef.current[activeIndex] || null)?.focus();
        });
        return ()=>cancelAnimationFrame(rafId);
    }, t9 = [
        activeIndex,
        rootElementRef,
        setActiveIndex,
        shouldFocus
    ], $[12] = activeIndex, $[13] = rootElementRef, $[14] = shouldFocus, $[15] = t8, $[16] = t9) : (t8 = $[15], t9 = $[16]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    return $[17] !== activeElement || $[18] !== activeIndex || $[19] !== handleItemMouseLeave || $[20] !== handleKeyDown || $[21] !== mount ? (t10 = {
        activeElement,
        activeIndex,
        handleItemMouseEnter,
        handleItemMouseLeave,
        handleKeyDown,
        mount
    }, $[17] = activeElement, $[18] = activeIndex, $[19] = handleItemMouseLeave, $[20] = handleKeyDown, $[21] = mount, $[22] = t10) : t10 = $[22], t10;
}
function _temp$3() {}
/**
* The `Menu` component is a building block for application menus.
*
* @public
*/ function Menu(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(54), children, className, forwardedRef, onClickOutside, onEscape, onItemClick, onItemSelect, onKeyDown, originElement, registerElement, restProps, t0, t1, t2;
    $[0] === props ? (children = $[1], className = $[2], forwardedRef = $[3], onClickOutside = $[4], onEscape = $[5], onItemClick = $[6], onItemSelect = $[7], onKeyDown = $[8], originElement = $[9], registerElement = $[10], restProps = $[11], t0 = $[12], t1 = $[13], t2 = $[14]) : ({ children, className, onClickOutside, onEscape, onItemClick, onItemSelect, onKeyDown, originElement, padding: t0, ref: forwardedRef, registerElement, shouldFocus: t1, gap: t2, ...restProps } = props, $[0] = props, $[1] = children, $[2] = className, $[3] = forwardedRef, $[4] = onClickOutside, $[5] = onEscape, $[6] = onItemClick, $[7] = onItemSelect, $[8] = onKeyDown, $[9] = originElement, $[10] = registerElement, $[11] = restProps, $[12] = t0, $[13] = t1, $[14] = t2);
    let padding = t0 === void 0 ? 1 : t0, shouldFocus = t1 === void 0 ? null : t1, gap = t2 === void 0 ? 1 : t2, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t3;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ()=>ref.current, $[15] = t3) : t3 = $[15], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t3);
    let { isTopLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(), t4;
    $[16] !== onKeyDown || $[17] !== originElement || $[18] !== shouldFocus ? (t4 = {
        onKeyDown,
        originElement,
        shouldFocus,
        rootElementRef: ref
    }, $[16] = onKeyDown, $[17] = originElement, $[18] = shouldFocus, $[19] = t4) : t4 = $[19];
    let { activeElement, activeIndex, handleItemMouseEnter, handleItemMouseLeave, handleKeyDown, mount } = useMenuController(t4), unregisterElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t5;
    $[20] === registerElement ? t5 = $[21] : (t5 = (el)=>{
        unregisterElementRef.current &&= (unregisterElementRef.current(), null), ref.current = el, ref.current && registerElement && (unregisterElementRef.current = registerElement(ref.current));
    }, $[20] = registerElement, $[21] = t5);
    let handleRefChange = t5, t6, t7;
    $[22] !== activeIndex || $[23] !== onItemSelect ? (t6 = ()=>{
        onItemSelect && onItemSelect(activeIndex);
    }, t7 = [
        activeIndex,
        onItemSelect
    ], $[22] = activeIndex, $[23] = onItemSelect, $[24] = t6, $[25] = t7) : (t6 = $[24], t7 = $[25]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    $[26] === Symbol.for("react.memo_cache_sentinel") ? (t8 = ()=>[
            ref.current
        ], $[26] = t8) : t8 = $[26], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useClickOutsideEvent$2d$CC1zgOmv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(isTopLayer && onClickOutside, t8);
    let t9;
    $[27] !== isTopLayer || $[28] !== onEscape ? (t9 = (event)=>{
        isTopLayer && event.key === "Escape" && (event.stopPropagation(), onEscape && onEscape());
    }, $[27] = isTopLayer, $[28] = onEscape, $[29] = t9) : t9 = $[29], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(t9);
    let t10;
    $[30] !== activeElement || $[31] !== handleItemMouseEnter || $[32] !== handleItemMouseLeave || $[33] !== mount || $[34] !== onClickOutside || $[35] !== onEscape || $[36] !== onItemClick || $[37] !== registerElement ? (t10 = {
        version: 2,
        activeElement,
        mount,
        onClickOutside,
        onEscape,
        onItemClick,
        onItemMouseEnter: handleItemMouseEnter,
        onItemMouseLeave: handleItemMouseLeave,
        registerElement
    }, $[30] = activeElement, $[31] = handleItemMouseEnter, $[32] = handleItemMouseLeave, $[33] = mount, $[34] = onClickOutside, $[35] = onEscape, $[36] = onItemClick, $[37] = registerElement, $[38] = t10) : t10 = $[38];
    let value = t10, t11;
    $[39] === className ? t11 = $[40] : (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-dFXmkO u-gWzzAr", className), $[39] = className, $[40] = t11);
    let t12;
    $[41] !== children || $[42] !== gap ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        gap,
        children
    }), $[41] = children, $[42] = gap, $[43] = t12) : t12 = $[43];
    let t13;
    $[44] !== handleKeyDown || $[45] !== handleRefChange || $[46] !== padding || $[47] !== restProps || $[48] !== t11 || $[49] !== t12 ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        className: t11,
        "data-ui": "Menu",
        ...restProps,
        onKeyDown: handleKeyDown,
        padding,
        ref: handleRefChange,
        role: "menu",
        tabIndex: -1,
        children: t12
    }), $[44] = handleKeyDown, $[45] = handleRefChange, $[46] = padding, $[47] = restProps, $[48] = t11, $[49] = t12, $[50] = t13) : t13 = $[50];
    let t14;
    return $[51] !== t13 || $[52] !== value ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContext.Provider, {
        value,
        children: t13
    }), $[51] = t13, $[52] = value, $[53] = t14) : t14 = $[53], t14;
}
/**
* The `MenuButton` component follows the WAI-ARIA specification for menu buttons.
*
* @public
*/ function MenuButton(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(55), { __unstable_disableRestoreFocusOnClose: t0, button: buttonProp, id, menu: menuProp, onClose, onOpen, popover, ref: forwardedRef } = props, disableRestoreFocusOnClose = t0 !== void 0 && t0, [open, setOpen] = useOpenState(onOpen, onClose), [shouldFocus, setShouldFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [buttonElement, setButtonElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [menuElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(_temp$2), t1;
    $[0] === buttonProp?.props ? t1 = $[1] : (t1 = buttonProp?.props ?? {}, $[0] = buttonProp?.props, $[1] = t1);
    let { onClick: onButtonClick, onKeyDown: onButtonKeyDown, onMouseDown: onButtonMouseDown } = t1, t2;
    $[2] !== onButtonClick || $[3] !== setOpen ? (t2 = (event)=>{
        onButtonClick?.(event), setOpen(_temp2), setShouldFocus(null), setButtonElement(event.currentTarget);
    }, $[2] = onButtonClick, $[3] = setOpen, $[4] = t2) : t2 = $[4];
    let handleButtonClick = t2, t3;
    $[5] !== onButtonMouseDown || $[6] !== open ? (t3 = (event_0)=>{
        onButtonMouseDown?.(event_0), open && event_0.preventDefault();
    }, $[5] = onButtonMouseDown, $[6] = open, $[7] = t3) : t3 = $[7];
    let handleMouseDown = t3, t4;
    $[8] !== onButtonKeyDown || $[9] !== setOpen ? (t4 = (event_1)=>{
        onButtonKeyDown?.(event_1), event_1.key === "ArrowDown" || event_1.key === "Enter" || event_1.key === " " ? (event_1.preventDefault(), setOpen(!0), setShouldFocus("first"), setButtonElement(event_1.currentTarget)) : event_1.key === "ArrowUp" && (event_1.preventDefault(), setOpen(!0), setShouldFocus("last"), setButtonElement(event_1.currentTarget));
    }, $[8] = onButtonKeyDown, $[9] = setOpen, $[10] = t4) : t4 = $[10];
    let handleButtonKeyDown = t4, t5;
    $[11] !== buttonElement || $[12] !== menuElements || $[13] !== setOpen ? (t5 = (event_2)=>{
        let target = event_2.target;
        if (target instanceof Node && (!buttonElement || target !== buttonElement && !buttonElement.contains(target))) {
            for (let el of menuElements)if (target === el || el.contains(target)) return;
            setOpen(!1);
        }
    }, $[11] = buttonElement, $[12] = menuElements, $[13] = setOpen, $[14] = t5) : t5 = $[14];
    let handleMenuClickOutside = t5, returnFocusTo = disableRestoreFocusOnClose ? null : buttonElement, t6;
    $[15] !== returnFocusTo || $[16] !== setOpen ? (t6 = ()=>{
        setOpen(!1, returnFocusTo);
    }, $[15] = returnFocusTo, $[16] = setOpen, $[17] = t6) : t6 = $[17];
    let handleMenuEscape = t6, t7;
    $[18] !== menuElements || $[19] !== setOpen ? (t7 = (event_3)=>{
        let target_0 = event_3.relatedTarget;
        if (target_0 instanceof Node) {
            for (let el_0 of menuElements)if (el_0 === target_0 || el_0.contains(target_0)) return;
            setOpen(!1);
        }
    }, $[18] = menuElements, $[19] = setOpen, $[20] = t7) : t7 = $[20];
    let handleBlur = t7, t8;
    $[21] !== returnFocusTo || $[22] !== setOpen ? (t8 = ()=>{
        setOpen(!1, returnFocusTo);
    }, $[21] = returnFocusTo, $[22] = setOpen, $[23] = t8) : t8 = $[23];
    let handleItemClick = t8, t9;
    $[24] === menuElements ? t9 = $[25] : (t9 = (el_1)=>(menuElements.add(el_1), ()=>{
            menuElements.delete(el_1);
        }), $[24] = menuElements, $[25] = t9);
    let registerElement = t9, t10;
    $[26] !== buttonElement || $[27] !== handleBlur || $[28] !== handleItemClick || $[29] !== handleMenuClickOutside || $[30] !== handleMenuEscape || $[31] !== id || $[32] !== menuProp || $[33] !== registerElement || $[34] !== shouldFocus ? (t10 = menuProp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(menuProp, {
        "aria-labelledby": id,
        onBlurCapture: handleBlur,
        onClickOutside: handleMenuClickOutside,
        onEscape: handleMenuEscape,
        onItemClick: handleItemClick,
        originElement: buttonElement,
        registerElement,
        shouldFocus
    }), $[26] = buttonElement, $[27] = handleBlur, $[28] = handleItemClick, $[29] = handleMenuClickOutside, $[30] = handleMenuEscape, $[31] = id, $[32] = menuProp, $[33] = registerElement, $[34] = shouldFocus, $[35] = t10) : t10 = $[35];
    let menu = t10, setButton = useButtonRef(forwardedRef, setButtonElement), t11;
    $[36] !== buttonProp || $[37] !== handleButtonClick || $[38] !== handleButtonKeyDown || $[39] !== handleMouseDown || $[40] !== id || $[41] !== open || $[42] !== setButton ? (t11 = buttonProp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(buttonProp, {
        "data-ui": "MenuButton",
        id,
        onClick: handleButtonClick,
        onKeyDown: handleButtonKeyDown,
        onMouseDown: handleMouseDown,
        "aria-haspopup": !0,
        "aria-expanded": open,
        ref: setButton,
        selected: buttonProp.props.selected ?? open
    }), $[36] = buttonProp, $[37] = handleButtonClick, $[38] = handleButtonKeyDown, $[39] = handleMouseDown, $[40] = id, $[41] = open, $[42] = setButton, $[43] = t11) : t11 = $[43];
    let button = t11, t12;
    $[44] === popover ? t12 = $[45] : (t12 = popover || {}, $[44] = popover, $[45] = t12);
    let t13;
    $[46] === t12 ? t13 = $[47] : (t13 = {
        overflow: "auto",
        portal: !0,
        ...t12
    }, $[46] = t12, $[47] = t13);
    let popoverProps = t13, t14;
    $[48] === button ? t14 = $[49] : (t14 = button || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}), $[48] = button, $[49] = t14);
    let t15;
    return $[50] !== menu || $[51] !== open || $[52] !== popoverProps || $[53] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2d$Bb5NvE5n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        "data-ui": "MenuButton__popover",
        ...popoverProps,
        content: menu,
        open,
        children: t14
    }), $[50] = menu, $[51] = open, $[52] = popoverProps, $[53] = t14, $[54] = t15) : t15 = $[54], t15;
}
function _temp2(v) {
    return !v;
}
function _temp$2() {
    return /* @__PURE__ */ new Set();
}
/**
* The open state, with `onOpen` and `onClose` called by `setOpen` when it changes. A hook because
* `setOpen` reads a ref, and the React Compiler rejects passing such a function to `cloneElement`.
*/ function useOpenState(onOpen, onClose) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6), [open, setOpenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1), t0;
    $[0] !== onClose || $[1] !== onOpen ? (t0 = (action, returnFocusTo)=>{
        let nextOpen = typeof action == "function" ? action(openRef.current) : action, changed = openRef.current !== nextOpen;
        openRef.current = nextOpen, changed && setOpenState(nextOpen), returnFocusTo?.focus(), changed && openRef.current === nextOpen && (nextOpen ? onOpen?.() : onClose?.());
    }, $[0] = onClose, $[1] = onOpen, $[2] = t0) : t0 = $[2];
    let setOpen = t0, t1;
    return $[3] !== open || $[4] !== setOpen ? (t1 = [
        open,
        setOpen
    ], $[3] = open, $[4] = setOpen, $[5] = t1) : t1 = $[5], t1;
}
/**
* The button's ref callback: attaches the forwarded ref, and moves `buttonElement` to a button
* that replaces the one it is set to. The same button attaching again (an `<Activity>` showing
* it, a new forwarded ref) schedules nothing. A hook because the React Compiler skips a component
* that passes a callback reading a ref to `cloneElement`.
*/ function useButtonRef(forwardedRef, setButtonElement) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3), lastNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t0;
    return $[0] !== forwardedRef || $[1] !== setButtonElement ? (t0 = (node)=>(lastNodeRef.current && lastNodeRef.current !== node && setButtonElement((element)=>element && node), lastNodeRef.current = node, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getElementRef$2d$BLVMlHTn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(forwardedRef, node)), $[0] = forwardedRef, $[1] = setButtonElement, $[2] = t0) : t0 = $[2], t0;
}
function MenuDividerComponent(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12), className, ref, restProps, t0;
    $[0] === props ? (className = $[1], ref = $[2], restProps = $[3], t0 = $[4]) : ({ as: t0, className, ref, ...restProps } = props, $[0] = props, $[1] = className, $[2] = ref, $[3] = restProps, $[4] = t0);
    let Component = t0 === void 0 ? "hr" : t0, t1;
    $[5] === className ? t1 = $[6] : (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$lite$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("u-cCeIjY u-MrtSM u-huoTQe u-jZsjHW", className), $[5] = className, $[6] = t1);
    let t2;
    return $[7] !== Component || $[8] !== ref || $[9] !== restProps || $[10] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        "data-ui": "MenuDivider",
        className: t1,
        ref,
        ...restProps
    }), $[7] = Component, $[8] = ref, $[9] = restProps, $[10] = t1, $[11] = t2) : t2 = $[11], t2;
}
/**
* @public
*/ const MenuDivider = MenuDividerComponent, selectableBaseStyle = css`background-color:var(--card-bg-color);color:var(--card-fg-color);outline:none;&[data-as='button']{-webkit-font-smoothing:inherit;appearance:none;outline:none;font:inherit;text-align:inherit;border:0;width:-moz-available;width:-webkit-fill-available;width:stretch;}&[data-as='a']{text-decoration:none;}`;
function selectableColorStyle(props) {
    let { $tone } = props, { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme), tone = color.selectable[$tone];
    return css`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.enabled)} &[data-as='button']:not(:disabled)[aria-pressed='true'],&[data-as='a']:not([data-disabled])[data-pressed]{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.pressed)}}&[data-as='button']:not(:disabled)[data-selected],&[data-as='button']:not(:disabled)[aria-selected='true'] > &[data-as='button']:not(:disabled),&[data-as='a']:not([data-disabled])[data-selected]{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.selected)}}@media (hover:hover){&[data-as='button']:not(:disabled):not([data-selected]),&[data-as='a']:not([data-disabled]):not([data-selected]){&[data-hovered],&:hover{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.hovered)}}&:active{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, tone.pressed)}}}}`;
}
function selectableDisabledStyle(props) {
    let { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`&[data-as='button']:disabled,&[data-as='a'][data-disabled]{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(color, color.selectable[props.$tone].disabled)}}`;
}
function selectableStyle(props) {
    let { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$getTheme_v2$2d$y09KqtEb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(props.theme);
    return css`${style?.card?.root}`;
}
const SelectableBase = styled(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]).withConfig({
    displayName: "SelectableBase",
    componentId: "sc-81zkz-0"
})`${selectableBaseStyle}`, Selectable = /* @__PURE__ */ styled(/* @__PURE__ */ styled(/* @__PURE__ */ styled(SelectableBase).withConfig({
    displayName: "SelectableColor",
    componentId: "sc-81zkz-1"
})(selectableColorStyle)).withConfig({
    displayName: "SelectableDisabled",
    componentId: "sc-81zkz-2"
})(selectableDisabledStyle)).withConfig({
    displayName: "Selectable",
    componentId: "sc-81zkz-3"
})(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"], selectableStyle);
function useMenu() {
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MenuContext);
    if (!value) throw Error("useMenu(): missing context value");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(value) || value.version !== 2) throw Error("useMenu(): the context value is not compatible");
    return value;
}
/**
* @public
*/ const MenuGroup = function MenuGroup(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(81), IconComponent, children, menuProps, onClick, popover, restProps, t0, t1, t2, t3, t4, t5, text;
    $[0] === props ? (IconComponent = $[1], children = $[2], menuProps = $[3], onClick = $[4], popover = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9], t3 = $[10], t4 = $[11], t5 = $[12], text = $[13]) : ({ as: t0, children, fontSize: t1, icon: IconComponent, menu: menuProps, onClick, padding: t2, popover, radius: t3, gap: t4, text, tone: t5, ...restProps } = props, $[0] = props, $[1] = IconComponent, $[2] = children, $[3] = menuProps, $[4] = onClick, $[5] = popover, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2, $[10] = t3, $[11] = t4, $[12] = t5, $[13] = text);
    let as = t0 === void 0 ? "button" : t0, fontSize = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, gap = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, menu = useMenu(), { scheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(), { activeElement, mount, onClickOutside, onEscape, onItemClick, onItemMouseEnter: _onItemMouseEnter, registerElement } = menu, onItemMouseEnter = _onItemMouseEnter ?? menu.onItemMouseEnter, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [shouldFocus, setShouldFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), active = !!activeElement && activeElement === rootElement, [withinMenu, setWithinMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [activation, setActivation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), [openedIn, setOpenedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [prevActive, setPrevActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(active);
    active !== prevActive && (setPrevActive(active), active || setActivation(_temp$1));
    let childMenuOpen = active && openedIn === activation, pressed = childMenuOpen && withinMenu, t6;
    $[14] !== activation || $[15] !== onItemMouseEnter ? (t6 = (event)=>{
        setWithinMenu(!1), onItemMouseEnter(event), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setOpenedIn(activation));
    }, $[14] = activation, $[15] = onItemMouseEnter, $[16] = t6) : t6 = $[16];
    let handleMouseEnter = t6, t7;
    $[17] === rootElement ? t7 = $[18] : (t7 = (event_0)=>{
        event_0.key === "ArrowLeft" && (event_0.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setOpenedIn(null)), requestAnimationFrame(()=>{
            rootElement?.focus();
        }));
    }, $[17] = rootElement, $[18] = t7);
    let handleMenuKeyDown = t7, t8;
    $[19] !== activation || $[20] !== onClick || $[21] !== onItemMouseEnter ? (t8 = (event_1)=>{
        onClick?.(event_1), setWithinMenu(!1), onItemMouseEnter(event_1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setShouldFocus("first"), setOpenedIn(activation);
        });
    }, $[19] = activation, $[20] = onClick, $[21] = onItemMouseEnter, $[22] = t8) : t8 = $[22];
    let handleClick = t8, t9;
    $[23] === onItemClick ? t9 = $[24] : (t9 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setOpenedIn(null)), onItemClick?.();
    }, $[23] = onItemClick, $[24] = t9);
    let handleChildItemClick = t9, t10;
    $[25] === Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>setWithinMenu(!0), $[25] = t10) : t10 = $[25];
    let handleMenuMouseEnter = t10, t11, t12;
    $[26] !== mount || $[27] !== rootElement ? (t11 = ()=>mount(rootElement), t12 = [
        mount,
        rootElement
    ], $[26] = mount, $[27] = rootElement, $[28] = t11, $[29] = t12) : (t11 = $[28], t12 = $[29]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13, t14;
    $[30] === shouldFocus ? (t13 = $[31], t14 = $[32]) : (t13 = ()=>{
        if (!shouldFocus) return;
        let rafId = requestAnimationFrame(()=>setShouldFocus(null));
        return ()=>cancelAnimationFrame(rafId);
    }, t14 = [
        shouldFocus
    ], $[30] = shouldFocus, $[31] = t13, $[32] = t14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15;
    $[33] !== children || $[34] !== handleChildItemClick || $[35] !== handleMenuKeyDown || $[36] !== menuProps || $[37] !== onClickOutside || $[38] !== onEscape || $[39] !== registerElement || $[40] !== shouldFocus ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Menu, {
        ...menuProps,
        onClickOutside,
        onEscape,
        onItemClick: handleChildItemClick,
        onKeyDown: handleMenuKeyDown,
        onMouseEnter: handleMenuMouseEnter,
        registerElement,
        shouldFocus,
        children
    }), $[33] = children, $[34] = handleChildItemClick, $[35] = handleMenuKeyDown, $[36] = menuProps, $[37] = onClickOutside, $[38] = onEscape, $[39] = registerElement, $[40] = shouldFocus, $[41] = t15) : t15 = $[41];
    let childMenu = t15, t16;
    $[42] !== activation || $[43] !== onItemMouseEnter ? (t16 = (event_2)=>{
        let target = event_2.currentTarget;
        document.activeElement === target && event_2.key === "ArrowRight" && (setWithinMenu(!0), onItemMouseEnter(event_2), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setShouldFocus("first"), setOpenedIn(activation);
        }));
    }, $[42] = activation, $[43] = onItemMouseEnter, $[44] = t16) : t16 = $[44];
    let handleKeyDown = t16, t17 = as === "button" ? pressed : void 0, t18 = as !== "button" && pressed ? "" : void 0, t19 = !pressed && active ? "" : void 0, t20;
    $[45] === radius ? t20 = $[46] : (t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[45] = radius, $[46] = t20);
    let t21 = as === "button" ? "button" : void 0, t22;
    $[47] !== IconComponent || $[48] !== fontSize ? (t22 = IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        size: fontSize,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
        ]
    }), $[47] = IconComponent, $[48] = fontSize, $[49] = t22) : t22 = $[49];
    let t23;
    $[50] !== fontSize || $[51] !== text ? (t23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        flex: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
            size: fontSize,
            textOverflow: "ellipsis",
            weight: "medium",
            children: text
        })
    }), $[50] = fontSize, $[51] = text, $[52] = t23) : t23 = $[52];
    let t24;
    $[53] === Symbol.for("react.memo_cache_sentinel") ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ChevronRight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {}), $[53] = t24) : t24 = $[53];
    let t25;
    $[54] === fontSize ? t25 = $[55] : (t25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
        size: fontSize,
        children: t24
    }), $[54] = fontSize, $[55] = t25);
    let t26;
    $[56] !== gap || $[57] !== padding || $[58] !== t22 || $[59] !== t23 || $[60] !== t25 ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        gap,
        padding,
        children: [
            t22,
            t23,
            t25
        ]
    }), $[56] = gap, $[57] = padding, $[58] = t22, $[59] = t23, $[60] = t25, $[61] = t26) : t26 = $[61];
    let t27;
    $[62] !== as || $[63] !== handleClick || $[64] !== handleKeyDown || $[65] !== handleMouseEnter || $[66] !== restProps || $[67] !== scheme || $[68] !== t17 || $[69] !== t18 || $[70] !== t19 || $[71] !== t20 || $[72] !== t21 || $[73] !== t26 || $[74] !== tone ? (t27 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Selectable, {
        "data-as": as,
        "data-ui": "MenuGroup",
        forwardedAs: as,
        ...restProps,
        "aria-pressed": t17,
        "data-pressed": t18,
        "data-selected": t19,
        $radius: t20,
        $tone: tone,
        $scheme: scheme,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        onMouseEnter: handleMouseEnter,
        ref: setRootElement,
        tabIndex: -1,
        type: t21,
        children: t26
    }), $[62] = as, $[63] = handleClick, $[64] = handleKeyDown, $[65] = handleMouseEnter, $[66] = restProps, $[67] = scheme, $[68] = t17, $[69] = t18, $[70] = t19, $[71] = t20, $[72] = t21, $[73] = t26, $[74] = tone, $[75] = t27) : t27 = $[75];
    let t28;
    return $[76] !== childMenu || $[77] !== childMenuOpen || $[78] !== popover || $[79] !== t27 ? (t28 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2d$Bb5NvE5n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        ...popover,
        content: childMenu,
        "data-ui": "MenuGroup__popover",
        open: childMenuOpen,
        children: t27
    }), $[76] = childMenu, $[77] = childMenuOpen, $[78] = popover, $[79] = t27, $[80] = t28) : t28 = $[80], t28;
};
function _temp$1(current) {
    return current + 1;
}
/**
* @public
*/ const MenuItem = function MenuItem(props) {
    let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(76), IconComponent, IconRightComponent, children, disabled, forwardedRef, hotkeys, onClick, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, pressed, restProps, selectedProp, t0, t1, t2, t3, t4, t5, text;
    $[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], forwardedRef = $[5], hotkeys = $[6], onClick = $[7], paddingBottom = $[8], paddingLeft = $[9], paddingRight = $[10], paddingTop = $[11], paddingX = $[12], paddingY = $[13], pressed = $[14], restProps = $[15], selectedProp = $[16], t0 = $[17], t1 = $[18], t2 = $[19], t3 = $[20], t4 = $[21], t5 = $[22], text = $[23]) : ({ as: t0, children, disabled, fontSize: t1, hotkeys, icon: IconComponent, iconRight: IconRightComponent, onClick, padding: t2, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, pressed, radius: t3, ref: forwardedRef, selected: selectedProp, gap: t4, text, tone: t5, ...restProps } = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = forwardedRef, $[6] = hotkeys, $[7] = onClick, $[8] = paddingBottom, $[9] = paddingLeft, $[10] = paddingRight, $[11] = paddingTop, $[12] = paddingX, $[13] = paddingY, $[14] = pressed, $[15] = restProps, $[16] = selectedProp, $[17] = t0, $[18] = t1, $[19] = t2, $[20] = t3, $[21] = t4, $[22] = t5, $[23] = text);
    let as = t0 === void 0 ? "button" : t0, fontSize = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, gap = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, { scheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(), menu = useMenu(), { activeElement, mount, onItemClick, onItemMouseEnter: _onItemMouseEnter, onItemMouseLeave: _onItemMouseLeave } = menu, onItemMouseEnter = _onItemMouseEnter ?? menu.onItemMouseEnter, onItemMouseLeave = _onItemMouseLeave ?? menu.onItemMouseLeave, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), active = !!activeElement && activeElement === rootElement, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), t6;
    $[24] === Symbol.for("react.memo_cache_sentinel") ? (t6 = ()=>ref.current, $[24] = t6) : t6 = $[24], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t6);
    let t7, t8;
    $[25] !== mount || $[26] !== rootElement || $[27] !== selectedProp ? (t7 = ()=>mount(rootElement, selectedProp), t8 = [
        mount,
        rootElement,
        selectedProp
    ], $[25] = mount, $[26] = rootElement, $[27] = selectedProp, $[28] = t7, $[29] = t8) : (t7 = $[28], t8 = $[29]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[30] !== disabled || $[31] !== onClick || $[32] !== onItemClick ? (t9 = (event)=>{
        disabled || (onClick && onClick(event), onItemClick && onItemClick());
    }, $[30] = disabled, $[31] = onClick, $[32] = onItemClick, $[33] = t9) : t9 = $[33];
    let handleClick = t9, t10;
    $[34] !== padding || $[35] !== paddingBottom || $[36] !== paddingLeft || $[37] !== paddingRight || $[38] !== paddingTop || $[39] !== paddingX || $[40] !== paddingY ? (t10 = {
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    }, $[34] = padding, $[35] = paddingBottom, $[36] = paddingLeft, $[37] = paddingRight, $[38] = paddingTop, $[39] = paddingX, $[40] = paddingY, $[41] = t10) : t10 = $[41];
    let paddingProps = t10, t11;
    $[42] === fontSize ? t11 = $[43] : (t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(fontSize).map(_temp), $[42] = fontSize, $[43] = t11);
    let hotkeysFontSize = t11, t12;
    $[44] === Symbol.for("react.memo_cache_sentinel") ? (t12 = (el)=>{
        ref.current = el, setRootElement(el);
    }, $[44] = t12) : t12 = $[44];
    let setRef = t12, t13 = as !== "button" && pressed ? "" : void 0, t14 = active ? "" : void 0, t15 = disabled ? "" : void 0, t16;
    $[45] === radius ? t16 = $[46] : (t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(radius), $[45] = radius, $[46] = t16);
    let t17;
    $[47] === Symbol.for("react.memo_cache_sentinel") ? (t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$helpers$2d$XThPpWje$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(0), $[47] = t17) : t17 = $[47];
    let t18 = disabled ? "default" : tone, t19 = as === "button" ? "button" : void 0, t20;
    $[48] !== IconComponent || $[49] !== IconRightComponent || $[50] !== fontSize || $[51] !== gap || $[52] !== hotkeys || $[53] !== hotkeysFontSize || $[54] !== paddingProps || $[55] !== text ? (t20 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$ohP2jG9d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
        as: "span",
        gap,
        align: "center",
        ...paddingProps,
        children: [
            IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                size: fontSize,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
                ]
            }),
            text && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
                flex: 1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                    size: fontSize,
                    textOverflow: "ellipsis",
                    weight: "medium",
                    children: text
                })
            }),
            hotkeys && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$hotkeys$2d$Bd5rZOMO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {
                fontSize: hotkeysFontSize,
                keys: hotkeys,
                style: {
                    marginTop: -4,
                    marginBottom: -4
                }
            }),
            IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$DyrC2YfU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"], {
                size: fontSize,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
                ]
            })
        ]
    }), $[48] = IconComponent, $[49] = IconRightComponent, $[50] = fontSize, $[51] = gap, $[52] = hotkeys, $[53] = hotkeysFontSize, $[54] = paddingProps, $[55] = text, $[56] = t20) : t20 = $[56];
    let t21;
    $[57] !== children || $[58] !== paddingProps ? (t21 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$D_TnC6On$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"], {
        as: "span",
        ...paddingProps,
        children
    }), $[57] = children, $[58] = paddingProps, $[59] = t21) : t21 = $[59];
    let t22;
    return $[60] !== as || $[61] !== disabled || $[62] !== handleClick || $[63] !== onItemMouseEnter || $[64] !== onItemMouseLeave || $[65] !== restProps || $[66] !== scheme || $[67] !== t13 || $[68] !== t14 || $[69] !== t15 || $[70] !== t16 || $[71] !== t18 || $[72] !== t19 || $[73] !== t20 || $[74] !== t21 ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Selectable, {
        "data-ui": "MenuItem",
        role: "menuitem",
        ...restProps,
        "data-pressed": t13,
        "data-selected": t14,
        "data-disabled": t15,
        forwardedAs: as,
        $radius: t16,
        $padding: t17,
        $tone: t18,
        $scheme: scheme,
        disabled,
        onClick: handleClick,
        onMouseEnter: onItemMouseEnter,
        onMouseLeave: onItemMouseLeave,
        ref: setRef,
        tabIndex: -1,
        type: t19,
        children: [
            t20,
            t21
        ]
    }), $[60] = as, $[61] = disabled, $[62] = handleClick, $[63] = onItemMouseEnter, $[64] = onItemMouseLeave, $[65] = restProps, $[66] = scheme, $[67] = t13, $[68] = t14, $[69] = t15, $[70] = t16, $[71] = t18, $[72] = t19, $[73] = t20, $[74] = t21, $[75] = t22) : t22 = $[75], t22;
};
function _temp(s) {
    return s - 1;
}
;
 //# sourceMappingURL=menu.js.map
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
"use client";
;
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2d$Bb5NvE5n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2d$Bb5NvE5n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover-Bb5NvE5n.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Popover"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/node_modules/@sanity/ui/dist/popover.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=77850_%40sanity_ui_dist_3a7897c1._.js.map