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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   controls: () => (/* binding */ controls)\n/* harmony export */ });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handlers */ \"./src/js/handlers.js\");\n\r\n\r\n\r\n// получаем элементы страницы\r\nconst controls = {};\r\nconst selectors = {\r\n    header: { selector: '#header-page' }, // заголовок сайта\r\n    inputDateFrom: { selector: '#input-date-from' }, // поле с датой от в форме\r\n    inputDateTo: { selector: '#input-date-to' }, // поле с датой до в форме\r\n    tabsTours: { selector: '#tabbox-tours .tabbox__tab', isMulti: true }, // табы блока с турами\r\n    tabPanelsTours: { selector: '#tabbox-tours .tabbox__panel', isMulti: true }, // контейнеры табов блока с турами\r\n};\r\nObject.entries(selectors).forEach(([key, { selector, isMulti = false }]) => {\r\n    const nodes = document.querySelectorAll(selector);\r\n    controls[key] = isMulti ? nodes : nodes[0];\r\n});\r\n\r\n// добавляем обработчики событий\r\ncontrols.inputDateTo.addEventListener('click', _js_handlers__WEBPACK_IMPORTED_MODULE_1__.handlerInputDateClick);\r\ncontrols.inputDateFrom.addEventListener('click', _js_handlers__WEBPACK_IMPORTED_MODULE_1__.handlerInputDateClick);\r\nwindow.addEventListener('scroll', _js_handlers__WEBPACK_IMPORTED_MODULE_1__.handlerWindowScroll);\r\ncontrols.tabsTours.forEach(tab =>\r\n    tab.addEventListener('click', _js_handlers__WEBPACK_IMPORTED_MODULE_1__.handlerTabToursClick),\r\n);\r\n\n\n//# sourceURL=webpack://snptest1/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlerInputDateClick: () => (/* binding */ handlerInputDateClick),\n/* harmony export */   handlerTabToursClick: () => (/* binding */ handlerTabToursClick),\n/* harmony export */   handlerWindowScroll: () => (/* binding */ handlerWindowScroll)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n// обработчик прокрутки страницы\r\nfunction handlerWindowScroll() {\r\n    // фиксация шапки\r\n    if (window.scrollY > 450) {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.controls.header.classList.add('header_fixed');\r\n    } else {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.controls.header.classList.remove('header_fixed');\r\n    }\r\n}\r\n\r\n// обработчик клика по полю с датой\r\nfunction handlerInputDateClick(event) {\r\n    event.target.showPicker?.();\r\n}\r\n\r\n// обработчик клика по табу в блоке с турами\r\nfunction handlerTabToursClick(event) {\r\n    const tab = event.target || null;\r\n    const tabSelectedId =\r\n        tab && tab.hasAttribute('for') ? tab.getAttribute('for') : null;\r\n    if (tabSelectedId) {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.controls.tabPanelsTours.forEach(tabPanel => {\r\n            const tabId = tabPanel.getAttribute('tab');\r\n            if (tabId === tabSelectedId) {\r\n                tabPanel.classList.add('tabbox__panel_selected');\r\n            } else {\r\n                tabPanel.classList.remove('tabbox__panel_selected');\r\n            }\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://snptest1/./src/js/handlers.js?\n}");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://snptest1/./src/sass/main.scss?\n}");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;