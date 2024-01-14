/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ProductsContext.js":
/*!***************************************!*\
  !*** ./components/ProductsContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductsContext\": () => (/* binding */ ProductsContext),\n/* harmony export */   \"ProductsContextProvider\": () => (/* binding */ ProductsContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ProductsContextProvider({ children  }) {\n    const [selectedProducts, setSelectedProducts] = use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default()(\"cart\", {\n        defaultValue: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsContext.Provider, {\n        value: {\n            selectedProducts,\n            setSelectedProducts\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarth\\\\Downloads\\\\nextjs-ecommerce-master\\\\nextjs-ecommerce-master\\\\components\\\\ProductsContext.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW9DO0FBQ3VCO0FBRXBELE1BQU1FLGVBQWUsaUJBQUdGLG9EQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFMUMsU0FBU0csdUJBQXVCLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxnQkFBZ0IsRUFBQ0MsbUJBQW1CLENBQUMsR0FBR0wsOERBQW9CLENBQUMsTUFBTSxFQUFFO1FBQUNNLFlBQVksRUFBQyxFQUFFO0tBQUMsQ0FBQztJQUM5RixxQkFDRSw4REFBQ0wsZUFBZSxDQUFDTSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDSixnQkFBZ0I7WUFBQ0MsbUJBQW1CO1NBQUM7a0JBQUdGLFFBQVE7Ozs7O1lBQTRCLENBQzlHO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250ZXh0LmpzPzI0ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tICd1c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RzQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdHMsc2V0U2VsZWN0ZWRQcm9kdWN0c10gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSgnY2FydCcsIHtkZWZhdWx0VmFsdWU6W119KTtcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2VsZWN0ZWRQcm9kdWN0cyxzZXRTZWxlY3RlZFByb2R1Y3RzfX0+e2NoaWxkcmVufTwvUHJvZHVjdHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJQcm9kdWN0c0NvbnRleHQiLCJQcm9kdWN0c0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwic2VsZWN0ZWRQcm9kdWN0cyIsInNldFNlbGVjdGVkUHJvZHVjdHMiLCJkZWZhdWx0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContext */ \"./components/ProductsContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductsContext__WEBPACK_IMPORTED_MODULE_2__.ProductsContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sarth\\\\Downloads\\\\nextjs-ecommerce-master\\\\nextjs-ecommerce-master\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarth\\\\Downloads\\\\nextjs-ecommerce-master\\\\nextjs-ecommerce-master\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ3dDO0FBRXRFLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxnRkFBdUI7a0JBQ3RCLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ0osQ0FDMUI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge1Byb2R1Y3RzQ29udGV4dFByb3ZpZGVyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvZHVjdHNDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvZHVjdHNDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-local-storage-state":
/*!******************************************!*\
  !*** external "use-local-storage-state" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-local-storage-state");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();