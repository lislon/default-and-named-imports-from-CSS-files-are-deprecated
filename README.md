# default-and-named-imports-from-CSS-files-are-deprecated


This is reproduction of warning when using a library that imports css: 
```
Default and named imports from CSS files are deprecated. Use the ?inline query instead
```

There are 3 packages. `app1` is our under control, but `mid1` and `style1` is external dependencies:
- `app1` - vite application, which depends on `mid1` package.
- `mid1` UMD packed react components library that depends on `style1`.
- `style1` - another packaged library that contain `.css` styles

#### app1
 
```js
// ... app1/index.js
import {mid1} from "@demo/mid1"; // I would like that it will also inclues CSS into build
```

#### mid1
```js
// ... mid1/index.js
import '@demo/style1/dist/style1.css';
// ...
```
#### style1
```css
# ..style1.css
.style1 {
    color: red;
    content: 'style1-content';
}
```

## Reproduction of issue 


1. `git clone https://github.com/lislon/default-and-named-imports-from-CSS-files-are-deprecated.git`
2. `npm install`
2. `npm run dev --workspace @demo/app1`
3. Navigate to http://localhost:4201/
4. Observe warning in vite logs:

```
30 |  });
31 |  import { default as default2 } from "C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css";
32 |  import * as style1_star from "C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css";
   |                                ^
33 |  var init_style1 = __esm({
34 |    "vite:dep-pre-bundle:external-conversion:C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css"() {
Default and named imports from CSS files are deprecated. Use the ?inline query instead. For example: import * as style1_star from "C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css?inline"
  Plugin: vite:import-analysis
  File: C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/app1/node_modules/.vite/nx-vite/deps/@demo_mid1.js?v=1807b5d0

```

## Contents of `packages/app1/node_modules/.vite/nx.vite/deps/@demo_mid1.js`

```js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// vite:dep-pre-bundle:external-conversion:C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css
var style1_exports = {};
__export(style1_exports, {
    default: () => default2
});
import { default as default2 } from "C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css";
import * as style1_star from "C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css";
var init_style1 = __esm({
    "vite:dep-pre-bundle:external-conversion:C:/projects/default-and-named-imports-from-CSS-files-are-deprecated/packages/style1/dist/style1.css"() {
        __reExport(style1_exports, style1_star);
    }
});

// ../mid1/dist/index.js
var require_dist = __commonJS({
    "../mid1/dist/index.js"(exports, module) {
        (function webpackUniversalModuleDefinition(root, factory) {
            if (typeof exports === "object" && typeof module === "object")
                module.exports = factory((init_style1(), __toCommonJS(style1_exports)));
            else if (typeof define === "function" && define.amd)
                define(["@demo/style1/dist/style1.css"], factory);
            else {
                var a = typeof exports === "object" ? factory((init_style1(), __toCommonJS(style1_exports))) : factory(root["@demo/style1/dist/style1.css"]);
                for (var i in a)
                    (typeof exports === "object" ? exports : root)[i] = a[i];
            }
        })(self, (__WEBPACK_EXTERNAL_MODULE__demo_style1_dist_style1_css__) => {
            return (
                /******/
                (() => {
                    "use strict";
                    var __webpack_modules__ = {
                        /***/
                        "@demo/style1/dist/style1.css": (
                            /*!***********************************************!*\
                              !*** external "@demo/style1/dist/style1.css" ***!
                              \***********************************************/
                            /***/
                            (module2) => {
                                module2.exports = __WEBPACK_EXTERNAL_MODULE__demo_style1_dist_style1_css__;
                            }
                        )
                        /******/
                    };
                    var __webpack_module_cache__ = {};
                    function __webpack_require__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (cachedModule !== void 0) {
                            return cachedModule.exports;
                        }
                        var module2 = __webpack_module_cache__[moduleId] = {
                            /******/
                            // no module.id needed
                            /******/
                            // no module.loaded needed
                            /******/
                            exports: {}
                            /******/
                        };
                        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
                        return module2.exports;
                    }
                    (() => {
                        __webpack_require__.n = (module2) => {
                            var getter = module2 && module2.__esModule ? (
                                /******/
                                () => module2["default"]
                            ) : (
                                /******/
                                () => module2
                            );
                            __webpack_require__.d(getter, { a: getter });
                            return getter;
                        };
                    })();
                    (() => {
                        __webpack_require__.d = (exports2, definition) => {
                            for (var key in definition) {
                                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                                }
                            }
                        };
                    })();
                    (() => {
                        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
                    })();
                    (() => {
                        __webpack_require__.r = (exports2) => {
                            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
                            }
                            Object.defineProperty(exports2, "__esModule", { value: true });
                        };
                    })();
                    var __webpack_exports__ = {};
                    (() => {
                        __webpack_require__.r(__webpack_exports__);
                        __webpack_require__.d(__webpack_exports__, {
                            /* harmony export */
                            "mid1": () => (
                                /* binding */
                                mid1
                            )
                            /* harmony export */
                        });
                        var _demo_style1_dist_style1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                            /*! @demo/style1/dist/style1.css */
                            "@demo/style1/dist/style1.css"
                        );
                        var _demo_style1_dist_style1_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_demo_style1_dist_style1_css__WEBPACK_IMPORTED_MODULE_0__);
                        function mid1() {
                            console.log("mid1-function");
                        }
                    })();
                    return __webpack_exports__;
                })()
            );
        });
    }
});
export default require_dist();
/*!******************!*\
  !*** ./index.js ***!
  \******************/
//# sourceMappingURL=@demo_mid1.js.map
```