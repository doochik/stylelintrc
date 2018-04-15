module.exports = {
    "plugins": [
        "stylelint-order"
    ],

    "rules": {
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": null,
        "color-no-invalid-hex": true,

        "font-family-name-quotes": "always-where-recommended",
        "font-weight-notation": "named-where-possible",

        "function-blacklist": null,
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "always",
        "function-url-no-scheme-relative": null,
        "function-whitelist": null,
        "function-whitespace-after": "always",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",

        "number-leading-zero": "always",
        "number-max-precision": null,
        "number-no-trailing-zeros": true,

        "string-no-newline": true,
        "string-quotes": "single",

        "length-zero-no-unit": true,

        "unit-blacklist": null,
        "unit-whitelist": null,
        "unit-no-unknown": true,
        "unit-case": "lower",

        "value-no-vendor-prefix": true,
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-keyword-case": "lower",

        "custom-property-pattern": null,

        "shorthand-property-no-redundant-values": true,

        "property-blacklist": null,
        "property-no-unknown": [true, {
            "ignoreProperties": [
                "composes",
                "compose-with"
            ]
        }],
        "property-no-vendor-prefix": true,
        "property-whitelist": null,
        "property-case": "lower",

        "keyframe-declaration-no-important": true,

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-no-important": true,
        "declaration-property-unit-blacklist": null,
        "declaration-property-unit-whitelist": null,
        "declaration-property-value-blacklist": null,
        "declaration-property-value-whitelist": null,

        "declaration-block-no-duplicate-properties": [true, { "ignore": [ "consecutive-duplicates-with-different-values" ] } ],
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": null,
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 0,
        "declaration-block-trailing-semicolon": "always",

        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-newline-before": null,
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",

        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-blacklist": null,
        "selector-attribute-operator-whitelist": null,
        "selector-attribute-quotes": "always",
        "selector-class-pattern": null,
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-id-pattern": null,
        "selector-max-empty-lines": 0,
        "selector-max-specificity": null,
        "selector-max-compound-selectors": null,
        "selector-max-id": 0,
        "selector-no-qualifying-type": [ true, { "ignore": [ "attribute" ] } ],
        "selector-max-universal": 0,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": [true, {
            "ignorePseudoClasses": [
                "export",
                "import",
                "global",
                "local"
            ]
        }],
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,

        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",

        "rule-empty-line-before": [ "always", {
            "except": [ "first-nested" ],
            "ignore": [ "after-comment" ]
        } ],

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        "custom-media-pattern": null,

        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",

        "at-rule-blacklist": null,
        "at-rule-whitelist": null,
        "at-rule-empty-line-before": [ "always", {
            "except": [ "blockless-after-blockless", "first-nested" ],
            "ignore": [ "after-comment" ]
        } ],
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": [
                "value"
            ]
        }],
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always",
        "at-rule-name-newline-after": "always-multi-line",

        "comment-empty-line-before": null,
        "comment-whitespace-inside": "always",

        "indentation": 4,
        "max-empty-lines": 1,
        "max-line-length": 140,
        "max-nesting-depth": null,
        "no-descending-specificity": null,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,

        "order/properties-order": [
            [
                {
                    "emptyLineBefore": "never",
                    "properties": [
                        "composes",
                        "composes-with"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "font-smoothing",
                        "font",
                        "font-family",
                        "font-size",
                        "font-weight",
                        "font-style",
                        "font-variant",
                        "font-size-adjust",
                        "font-stretch",
                        "font-effect",
                        "font-emphasize",
                        "font-emphasize-position",
                        "font-emphasize-style",
                        "font-smooth",
                        "line-height"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "position",
                        "z-index",
                        "top",
                        "right",
                        "bottom",
                        "left"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "display",
                        "visibility",
                        "float",
                        "clear",
                        "overflow",
                        "overflow-scrolling",
                        "overflow-style",
                        "overflow-x",
                        "overflow-y",
                        "clip",
                        "align-content",
                        "align-items",
                        "align-self",
                        "flex",
                        "flex-basis",
                        "flex-direction",
                        "flex-flow",
                        "flex-grow",
                        "flex-shrink",
                        "flex-wrap",
                        "justify-content",
                        "order"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "box-sizing",
                        "width",
                        "min-width",
                        "max-width",
                        "height",
                        "min-height",
                        "max-height",
                        "margin",
                        "margin-top",
                        "margin-right",
                        "margin-bottom",
                        "margin-left",
                        "padding",
                        "padding-top",
                        "padding-right",
                        "padding-bottom",
                        "padding-left"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "table-layout",
                        "empty-cells",
                        "caption-side",
                        "border-spacing",
                        "border-collapse",
                        "list-style",
                        "list-style-position",
                        "list-style-type",
                        "list-style-image"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "content",
                        "quotes",
                        "counter-reset",
                        "counter-increment",
                        "resize",
                        "cursor",
                        "user-select",
                        "nav-index",
                        "nav-up",
                        "nav-right",
                        "nav-down",
                        "nav-left",
                        "text-align",
                        "text-align-last",
                        "vertical-align",
                        "white-space",
                        "text-decoration",
                        "text-emphasis",
                        "text-emphasis-color",
                        "text-emphasis-style",
                        "text-emphasis-position",
                        "text-indent",
                        "text-justify",
                        "letter-spacing",
                        "word-spacing",
                        "text-outline",
                        "text-rendering",
                        "text-transform",
                        "text-wrap",
                        "text-overflow",
                        "text-overflow-ellipsis",
                        "text-overflow-mode",
                        "word-wrap",
                        "word-break",
                        "tab-size",
                        "hyphens",
                        "pointer-events"
                     ]
                },
                {
                    "emptyLineBefore": "always",
                    "properties": [
                        "opacity",
                        "color",
                        "border",
                        "border-width",
                        "border-style",
                        "border-color",
                        "border-top",
                        "border-top-width",
                        "border-top-style",
                        "border-top-color",
                        "border-right",
                        "border-right-width",
                        "border-right-style",
                        "border-right-color",
                        "border-bottom",
                        "border-bottom-width",
                        "border-bottom-style",
                        "border-bottom-color",
                        "border-left",
                        "border-left-width",
                        "border-left-style",
                        "border-left-color",
                        "border-radius",
                        "border-top-left-radius",
                        "border-top-right-radius",
                        "border-bottom-right-radius",
                        "border-bottom-left-radius",
                        "border-image",
                        "border-image-source",
                        "border-image-slice",
                        "border-image-width",
                        "border-image-outset",
                        "border-image-repeat",
                        "outline",
                        "outline-width",
                        "outline-style",
                        "outline-color",
                        "outline-offset",
                        "background",
                        "background-color",
                        "background-image",
                        "background-repeat",
                        "background-attachment",
                        "background-position",
                        "background-position-x",
                        "background-position-y",
                        "background-clip",
                        "background-origin",
                        "background-size",
                        "box-decoration-break",
                        "box-shadow",
                        "text-shadow",
                        "transition",
                        "transition-delay",
                        "transition-timing-function",
                        "transition-duration",
                        "transition-property",
                        "transform",
                        "transform-origin",
                        "animation",
                        "animation-name",
                        "animation-duration",
                        "animation-play-state",
                        "animation-timing-function",
                        "animation-delay",
                        "animation-iteration-count",
                        "animation-direction",
                        "animation-fill-mode",
                        "will-change"
                     ]
                }
             ]
         ]
    }
}
