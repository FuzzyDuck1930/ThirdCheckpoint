/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/chooseColor/chooseColor.ts":
/*!***************************************************!*\
  !*** ./src/components/chooseColor/chooseColor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorAttributes\": () => (/* binding */ ColorAttributes),\n/* harmony export */   \"default\": () => (/* binding */ chooseColor)\n/* harmony export */ });\nvar ColorAttributes;\n(function (ColorAttributes) {\n})(ColorAttributes || (ColorAttributes = {}));\nclass chooseColor extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const colorContainer = this.ownerDocument.createElement(\"div\");\n            const titleColor = this.ownerDocument.createElement(\"h1\");\n            titleColor.innerText = \"Pick a color\";\n            const colorInput = this.ownerDocument.createElement(\"input\");\n            colorContainer.appendChild(titleColor);\n            colorContainer.appendChild(colorInput);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(colorContainer);\n        }\n    }\n}\ncustomElements.define(\"player-color\", chooseColor);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/chooseColor/chooseColor.ts?");

/***/ }),

/***/ "./src/components/chooseLetter/chooseLetter.ts":
/*!*****************************************************!*\
  !*** ./src/components/chooseLetter/chooseLetter.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LetterAttributes\": () => (/* binding */ LetterAttributes),\n/* harmony export */   \"default\": () => (/* binding */ chooseLetter)\n/* harmony export */ });\nvar LetterAttributes;\n(function (LetterAttributes) {\n})(LetterAttributes || (LetterAttributes = {}));\nclass chooseLetter extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const letterContainer = this.ownerDocument.createElement(\"div\");\n            const titleLetter = this.ownerDocument.createElement(\"h1\");\n            titleLetter.innerText = \"Pick a letter\";\n            const letterInput = this.ownerDocument.createElement(\"input\");\n            letterContainer.appendChild(titleLetter);\n            letterContainer.appendChild(letterInput);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(letterContainer);\n        }\n    }\n}\ncustomElements.define(\"player-letter\", chooseLetter);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/chooseLetter/chooseLetter.ts?");

/***/ }),

/***/ "./src/components/chooseName/ChooseName.ts":
/*!*************************************************!*\
  !*** ./src/components/chooseName/ChooseName.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NameAttributes\": () => (/* binding */ NameAttributes),\n/* harmony export */   \"default\": () => (/* binding */ chooseName)\n/* harmony export */ });\nvar NameAttributes;\n(function (NameAttributes) {\n})(NameAttributes || (NameAttributes = {}));\nclass chooseName extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const nameContainer = this.ownerDocument.createElement(\"div\");\n            const nameLetter = this.ownerDocument.createElement(\"h1\");\n            nameLetter.innerText = \"What's your name?\";\n            const nameInput = this.ownerDocument.createElement(\"input\");\n            nameContainer.appendChild(nameLetter);\n            nameContainer.appendChild(nameInput);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(nameContainer);\n        }\n    }\n}\ncustomElements.define(\"player-name\", chooseName);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/chooseName/ChooseName.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chooseColor\": () => (/* reexport safe */ _chooseColor_chooseColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"chooseLetter\": () => (/* reexport safe */ _chooseLetter_chooseLetter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"chooseName\": () => (/* reexport safe */ _chooseName_ChooseName__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _chooseColor_chooseColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseColor/chooseColor */ \"./src/components/chooseColor/chooseColor.ts\");\n/* harmony import */ var _chooseLetter_chooseLetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseLetter/chooseLetter */ \"./src/components/chooseLetter/chooseLetter.ts\");\n/* harmony import */ var _chooseName_ChooseName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseName/ChooseName */ \"./src/components/chooseName/ChooseName.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n        const player = this.ownerDocument.createElement(\"the-player\");\n        something.appendChild(player);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;