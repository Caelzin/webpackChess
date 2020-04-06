/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/svg/bishop_black.svg":
/*!*************************************!*\
  !*** ./assets/svg/bishop_black.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"bishop\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0\\\" y=\\\"0\\\" viewBox=\\\"0 0 200 200\\\"><title>Bishop</title><path d=\\\"M167.1,120.5c-1.2,31.4-21.8,33.4-23.3,43.9l0,0c0.5,3.7,0.6,7.5,0.4,11.3c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.1,0.3-10.7l0,0c0-1.6-2.2-6.3-5-8.3c-29.9-23.8-19.6-55.5,2-78.4c0,0,20.9,20.1,27.8,27.8c1.8,2,9,7.7,5.7-3.7c-3.9-13.6-14.3-42.3-14.3-42.3C83.7,50.5,96,40.3,94.9,35.5l0,0c-7.6-4.7-4.5-16.5,3.9-17.4c9.8-1.3,14.1,12,6.3,17.2l0,0c-0.1,0.2-1.4,2.6,6.2,10.2C131.3,64.5,167.8,89.6,167.1,120.5z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/bishop_black.svg?");

/***/ }),

/***/ "./assets/svg/bishop_white.svg":
/*!*************************************!*\
  !*** ./assets/svg/bishop_white.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"bishop\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0\\\" y=\\\"0\\\" viewBox=\\\"0 0 200 200\\\"><title>Bishop</title><path d=\\\"M167.1,120.5c-1.2,31.4-21.8,33.4-23.3,43.9l0,0c0.5,3.7,0.6,7.5,0.4,11.3c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.1,0.3-10.7l0,0c0-1.6-2.2-6.3-5-8.3c-29.9-23.8-19.6-55.5,2-78.4c0,0,20.9,20.1,27.8,27.8c1.8,2,9,7.7,5.7-3.7c-3.9-13.6-14.3-42.3-14.3-42.3C83.7,50.5,96,40.3,94.9,35.5l0,0c-7.6-4.7-4.5-16.5,3.9-17.4c9.8-1.3,14.1,12,6.3,17.2l0,0c-0.1,0.2-1.4,2.6,6.2,10.2C131.3,64.5,167.8,89.6,167.1,120.5z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/bishop_white.svg?");

/***/ }),

/***/ "./assets/svg/king_black.svg":
/*!***********************************!*\
  !*** ./assets/svg/king_black.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"king\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>King</title><path d=\\\"M156.8,120.9c-5.8,35.3-17.2,22.6-12.6,55.5c-24.4,8.3-63.1,8.5-88.1,0c1.2-13.8,1.1-25.1-7.8-36 c-16.3-31.3,8.5-56.2,40.7-61c-2.3-4.7-0.6-13.4,4.8-16.6c-1.4-4.1-2.3-8.3-2.6-12.6c-20,4.4-18.6-20.2,0.2-15.4 c3.2-24.3,14.4-22.4,17.3,0c19.4-4.5,18.5,19.9,0.2,15.4c-0.3,4.4-1.2,8.7-2.7,12.8c5,3.8,6.9,10.6,4.5,16.4 C136.6,83.4,156.3,99.2,156.8,120.9z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/king_black.svg?");

/***/ }),

/***/ "./assets/svg/king_white.svg":
/*!***********************************!*\
  !*** ./assets/svg/king_white.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"king\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>King</title><path d=\\\"M156.8,120.9c-5.8,35.3-17.2,22.6-12.6,55.5c-24.4,8.3-63.1,8.5-88.1,0c1.2-13.8,1.1-25.1-7.8-36 c-16.3-31.3,8.5-56.2,40.7-61c-2.3-4.7-0.6-13.4,4.8-16.6c-1.4-4.1-2.3-8.3-2.6-12.6c-20,4.4-18.6-20.2,0.2-15.4 c3.2-24.3,14.4-22.4,17.3,0c19.4-4.5,18.5,19.9,0.2,15.4c-0.3,4.4-1.2,8.7-2.7,12.8c5,3.8,6.9,10.6,4.5,16.4 C136.6,83.4,156.3,99.2,156.8,120.9z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/king_white.svg?");

/***/ }),

/***/ "./assets/svg/knight_black.svg":
/*!*************************************!*\
  !*** ./assets/svg/knight_black.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"knight\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Knight</title><path id=\\\"path\\\" d=\\\"M161.5,112c-13.9,35-8.7,35-7.4,62.7c-24.2,8.2-63,8.6-88.1,0c-1.1-14.1,4.3-30.7,13.3-41.5l0,0c11.2-10.8,19.6-25.6,17.8-43.6c-0.7,10.2-29.2,16.8-32.7,35.3l-10.8,0.3c0.1-1.3,0.4-4.4,0.6-6.6c-9.9,15.2-19-8-21.5-17.9C47.7,89.8,61,52.4,64.3,43.1l11.3-6.3l-9.7-10.5C124.7-0.7,187.1,51.5,161.5,112z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/knight_black.svg?");

/***/ }),

/***/ "./assets/svg/knight_white.svg":
/*!*************************************!*\
  !*** ./assets/svg/knight_white.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"knight\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Knight</title><path id=\\\"path\\\" d=\\\"M161.5,112c-13.9,35-8.7,35-7.4,62.7c-24.2,8.2-63,8.6-88.1,0c-1.1-14.1,4.3-30.7,13.3-41.5l0,0c11.2-10.8,19.6-25.6,17.8-43.6c-0.7,10.2-29.2,16.8-32.7,35.3l-10.8,0.3c0.1-1.3,0.4-4.4,0.6-6.6c-9.9,15.2-19-8-21.5-17.9C47.7,89.8,61,52.4,64.3,43.1l11.3-6.3l-9.7-10.5C124.7-0.7,187.1,51.5,161.5,112z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/knight_white.svg?");

/***/ }),

/***/ "./assets/svg/pawn_black.svg":
/*!***********************************!*\
  !*** ./assets/svg/pawn_black.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"pawn\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Pawn</title><path d=\\\"M144.2,173c0,1,0-0.1-0.1,3.5c-24.2,8.2-63,8.5-88.1,0c-1.2-13.1,4.1-30.6,13.2-41.5l0,0c13-12.1,21.8-31.2,16.4-50.8C56.9,81.3,60.9,74,84.1,71.6c-27.7-16.4-14-54.5,15.9-54.4c31.9,0.6,42.4,39,15.9,54.4c25.4,2.7,24.8,10.1-1.6,12.6c-4.9,17.1,1.7,37.5,16.4,50.8l0,0C139.4,145.8,144.1,159.2,144.2,173z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/pawn_black.svg?");

/***/ }),

/***/ "./assets/svg/pawn_white.svg":
/*!***********************************!*\
  !*** ./assets/svg/pawn_white.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"pawn\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Pawn</title><path d=\\\"M144.2,173c0,1,0-0.1-0.1,3.5c-24.2,8.2-63,8.5-88.1,0c-1.2-13.1,4.1-30.6,13.2-41.5l0,0c13-12.1,21.8-31.2,16.4-50.8C56.9,81.3,60.9,74,84.1,71.6c-27.7-16.4-14-54.5,15.9-54.4c31.9,0.6,42.4,39,15.9,54.4c25.4,2.7,24.8,10.1-1.6,12.6c-4.9,17.1,1.7,37.5,16.4,50.8l0,0C139.4,145.8,144.1,159.2,144.2,173z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/pawn_white.svg?");

/***/ }),

/***/ "./assets/svg/queen_black.svg":
/*!************************************!*\
  !*** ./assets/svg/queen_black.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"queen\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Queen</title><path id=\\\"queen\\\" d=\\\"M182.1,47.1c-0.1,4.5-3.8,8.1-8.3,8c-0.5,0-1-0.1-1.5-0.2c-5.9,25.9-15.4,67.2-21.2,92.6c0,0-8.1,0-8.1,14 c0,0.1,0,0.3,0.1,0.4c0.9,4.8,1.2,9.6,0.9,14.5c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.2,0.3-10.7c0-0.1,0-0.2,0-0.3 c0.2-1.2,0.3-2.4,0.2-3.7c0.1-14.3-8.1-14.2-8.1-14.2L27.5,54.9C18,56.9,14,43.5,22.6,39.7c9.7-4,15.3,9.7,7.1,14.4 c10.5,18.5,24.5,43.3,35,61.8c-0.4-17.2-1.3-59.7-1.7-77.2c-9.6-0.1-10.9-13.3-2.3-15.8c10.5-2.7,13.9,12.4,4.6,15.4 c5,15.9,17.7,55.8,22.6,71c2.3-16.3,8.6-59.5,11-76.2c-10.1-1.9-8.3-15.8,1.1-16c10.1,0.3,10.6,14.4,1.2,16c2.4,16.8,8.7,60,11,76.2 c4.9-15.4,17.6-55.3,22.5-71c-9.3-3.3-6.1-16.7,3.5-15.6c10.4,1.7,8.2,16.1-1.3,16c-0.3,13.5-1.7,77.2-1.7,77.2 c7-12.3,35-61.8,35-61.8C156.5,43,180.2,30.8,182.1,47.1z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/queen_black.svg?");

/***/ }),

/***/ "./assets/svg/queen_white.svg":
/*!************************************!*\
  !*** ./assets/svg/queen_white.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"queen\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>Queen</title><path id=\\\"queen\\\" d=\\\"M182.1,47.1c-0.1,4.5-3.8,8.1-8.3,8c-0.5,0-1-0.1-1.5-0.2c-5.9,25.9-15.4,67.2-21.2,92.6c0,0-8.1,0-8.1,14 c0,0.1,0,0.3,0.1,0.4c0.9,4.8,1.2,9.6,0.9,14.5c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.2,0.3-10.7c0-0.1,0-0.2,0-0.3 c0.2-1.2,0.3-2.4,0.2-3.7c0.1-14.3-8.1-14.2-8.1-14.2L27.5,54.9C18,56.9,14,43.5,22.6,39.7c9.7-4,15.3,9.7,7.1,14.4 c10.5,18.5,24.5,43.3,35,61.8c-0.4-17.2-1.3-59.7-1.7-77.2c-9.6-0.1-10.9-13.3-2.3-15.8c10.5-2.7,13.9,12.4,4.6,15.4 c5,15.9,17.7,55.8,22.6,71c2.3-16.3,8.6-59.5,11-76.2c-10.1-1.9-8.3-15.8,1.1-16c10.1,0.3,10.6,14.4,1.2,16c2.4,16.8,8.7,60,11,76.2 c4.9-15.4,17.6-55.3,22.5-71c-9.3-3.3-6.1-16.7,3.5-15.6c10.4,1.7,8.2,16.1-1.3,16c-0.3,13.5-1.7,77.2-1.7,77.2 c7-12.3,35-61.8,35-61.8C156.5,43,180.2,30.8,182.1,47.1z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/queen_white.svg?");

/***/ }),

/***/ "./assets/svg/rook_black.svg":
/*!***********************************!*\
  !*** ./assets/svg/rook_black.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"rook\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>rook</title><path id=\\\"ладья\\\" d=\\\"M166.3,27.3c-4.7,36.9-10.2,80.7-14.9,117.6c-10.4,1.8-7.3,16.3-7.1,28.9c-24.2,8.2-63,8.5-88.1,0 c1-13.6,0.6-29.7-7.6-28.9C43.9,108,38.3,64,33.7,27.3c6.9-1.7,14.4-3.2,22.4-4.4l5.4,30.1c7-0.9,14.3-1.5,21.8-1.9l-1.8-30.7 c12.5-0.7,25-0.7,37.5,0l-1.8,30.7c7.5,0.4,14.8,1.1,21.8,1.9l5.4-30.1C152.1,24.2,159.5,25.6,166.3,27.3z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/rook_black.svg?");

/***/ }),

/***/ "./assets/svg/rook_white.svg":
/*!***********************************!*\
  !*** ./assets/svg/rook_white.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"rook\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\"><title>rook</title><path id=\\\"ладья\\\" d=\\\"M166.3,27.3c-4.7,36.9-10.2,80.7-14.9,117.6c-10.4,1.8-7.3,16.3-7.1,28.9c-24.2,8.2-63,8.5-88.1,0 c1-13.6,0.6-29.7-7.6-28.9C43.9,108,38.3,64,33.7,27.3c6.9-1.7,14.4-3.2,22.4-4.4l5.4,30.1c7-0.9,14.3-1.5,21.8-1.9l-1.8-30.7 c12.5-0.7,25-0.7,37.5,0l-1.8,30.7c7.5,0.4,14.8,1.1,21.8,1.9l5.4-30.1C152.1,24.2,159.5,25.6,166.3,27.3z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./assets/svg/rook_white.svg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_pieceMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pieceMap */ \"./js/pieceMap.js\");\n/* harmony import */ var _js_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/grid */ \"./js/grid.js\");\n/* harmony import */ var _js_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/highlight */ \"./js/highlight.js\");\n/* harmony import */ var _js_startMove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/startMove */ \"./js/startMove.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst gridSize = 8;\r\nlet step = 0;\r\nlet parent = document.getElementById('deck-surface');\r\nlet map = new _js_pieceMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nmap.fill();\r\nlet deck = new _js_grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"](parent, gridSize);\r\ndeck.draw(map);\r\nparent.addEventListener('mouseover', _js_highlight__WEBPACK_IMPORTED_MODULE_3__[\"add\"]);\r\nparent.addEventListener('mousedown', () => {Object(_js_startMove__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event, deck, map, step)});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/grid.js":
/*!********************!*\
  !*** ./js/grid.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grid; });\n/* harmony import */ var _workWithPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workWithPosition */ \"./js/workWithPosition.js\");\n/* harmony import */ var _assets_svg_pawn_black_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/svg/pawn_black.svg */ \"./assets/svg/pawn_black.svg\");\n/* harmony import */ var _assets_svg_pawn_black_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pawn_black_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_svg_pawn_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/svg/pawn_white.svg */ \"./assets/svg/pawn_white.svg\");\n/* harmony import */ var _assets_svg_pawn_white_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pawn_white_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_svg_rook_black_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/svg/rook_black.svg */ \"./assets/svg/rook_black.svg\");\n/* harmony import */ var _assets_svg_rook_black_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_rook_black_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_svg_rook_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/svg/rook_white.svg */ \"./assets/svg/rook_white.svg\");\n/* harmony import */ var _assets_svg_rook_white_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_rook_white_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_svg_bishop_black_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/svg/bishop_black.svg */ \"./assets/svg/bishop_black.svg\");\n/* harmony import */ var _assets_svg_bishop_black_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_bishop_black_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_svg_bishop_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/svg/bishop_white.svg */ \"./assets/svg/bishop_white.svg\");\n/* harmony import */ var _assets_svg_bishop_white_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_bishop_white_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_svg_queen_black_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/svg/queen_black.svg */ \"./assets/svg/queen_black.svg\");\n/* harmony import */ var _assets_svg_queen_black_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_queen_black_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_svg_queen_white_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/svg/queen_white.svg */ \"./assets/svg/queen_white.svg\");\n/* harmony import */ var _assets_svg_queen_white_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_queen_white_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_svg_king_black_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/svg/king_black.svg */ \"./assets/svg/king_black.svg\");\n/* harmony import */ var _assets_svg_king_black_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_king_black_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_svg_king_white_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/svg/king_white.svg */ \"./assets/svg/king_white.svg\");\n/* harmony import */ var _assets_svg_king_white_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_king_white_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_svg_knight_black_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/svg/knight_black.svg */ \"./assets/svg/knight_black.svg\");\n/* harmony import */ var _assets_svg_knight_black_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_knight_black_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_svg_knight_white_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/svg/knight_white.svg */ \"./assets/svg/knight_white.svg\");\n/* harmony import */ var _assets_svg_knight_white_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_knight_white_svg__WEBPACK_IMPORTED_MODULE_12__);\n\r\n\r\n//в будущем замена на парс html-строки. Или превращение в dom-узел. Или в смене способа вставки (См. дневник 06.04)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Grid extends Map { //TODO экспорить класс или экземпляр класса на серве?\r\n    constructor(parent) {\r\n        super();\r\n        this._hvalues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];\r\n        this._size = 8;\r\n        this._parent = document.createElement('div');\r\n        this._parent.id = 'deck';\r\n        parent.append(this._parent);\r\n        this.generateGrid();\r\n        this.fill();\r\n    }\r\n\r\n    getCellPosition(link) {\r\n        for (let entry of this) {\r\n            if (entry[1] === link) { //TODO есть ли .value & .key? [x] не интуитивен\r\n                return entry[0];\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    fill() {\r\n        let columns = this._parent.childNodes; //возьмутся все columns?\r\n\r\n        for (let i = 0; i < this._size; i++) {\r\n            let line = columns[i + 1].childNodes;\r\n            for (let j = 0; j < this._size; j++) {\r\n                this.set(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(i, this._size - j - 1), line[j + 1]);\r\n            }\r\n        }\r\n    }\r\n\r\n    generateGrid() {\r\n        this.generateNumberColumn();\r\n        for (let i = 0; i < this._size; i++) {\r\n            this.generateColumn(i);\r\n        }\r\n        this.generateNumberColumn();\r\n    }\r\n\r\n    generateNumberColumn() {\r\n        let column = this.generateDiv('column');\r\n\r\n        column.append(this.generateDiv('label'));\r\n        for (let j = 0; j < this._size; j++) {\r\n            column.append(this.generateDiv('label', this._size - j));\r\n        }\r\n        column.append(this.generateDiv('label'));\r\n\r\n        this._parent.append(column);\r\n    }\r\n\r\n    generateColumn(i) {\r\n        let column = this.generateDiv('column');\r\n\r\n        column.append(this.generateDiv('label', this._hvalues[i]));\r\n\r\n        for (let i = 0; i < this._size; i++) {\r\n            column.append(this.generateDiv('cell'));\r\n        }\r\n\r\n        column.append(this.generateDiv('label', this._hvalues[i]));\r\n\r\n        this._parent.append(column);\r\n    }\r\n\r\n    generateDiv(divClassName, innerText) {\r\n        let div = document.createElement('div');\r\n        div.className = divClassName;\r\n        if (innerText) {\r\n            div.innerText = innerText;\r\n        }\r\n        return div;\r\n    }\r\n\r\n    draw(map) {\r\n        for (let entry of this) {\r\n            entry[1].innerHTML = '';\r\n            let type, position = entry[0];\r\n            if (map.has(position)) {\r\n                //TODO переделать свитч\r\n                type = map.get(position).type;\r\n                let color = map.get(position).color;\r\n                switch (type) {\r\n                    //см. дневник от 06.04\r\n                    case 'pawn':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_pawn_white_svg__WEBPACK_IMPORTED_MODULE_2___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_pawn_black_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n                        break;\r\n                    case 'knight':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_knight_white_svg__WEBPACK_IMPORTED_MODULE_12___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_knight_black_svg__WEBPACK_IMPORTED_MODULE_11___default.a;\r\n                        break;\r\n                    case 'bishop':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_bishop_white_svg__WEBPACK_IMPORTED_MODULE_6___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_bishop_black_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\r\n                        break;\r\n                    case 'rook':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_rook_white_svg__WEBPACK_IMPORTED_MODULE_4___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_rook_black_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n                        break;\r\n                    case 'queen':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_queen_white_svg__WEBPACK_IMPORTED_MODULE_8___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_queen_black_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\r\n                        break;\r\n                    case 'king':\r\n                        this.get(position).innerHTML = color === 'white' ?\r\n                            this.get(position).innerHTML = _assets_svg_king_white_svg__WEBPACK_IMPORTED_MODULE_10___default.a :\r\n                            this.get(position).innerHTML = _assets_svg_king_black_svg__WEBPACK_IMPORTED_MODULE_9___default.a;\r\n                        break;\r\n                    default:\r\n                    //TODO кинуть ошибку\r\n                }\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./js/grid.js?");

/***/ }),

/***/ "./js/highlight.js":
/*!*************************!*\
  !*** ./js/highlight.js ***!
  \*************************/
/*! exports provided: add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nfunction add(event) {\r\n    let target = event.target.closest('.cell');\r\n    if (!target || target.className !== 'cell') {\r\n        return;\r\n    }\r\n\r\n    let cellID = deck.getCellPosition(target);\r\n\r\n    if (map.has(cellID)) {\r\n        let links = map.get(cellID).moveAbility(map, deck, step);\r\n        for (let value of links) {\r\n            value.style.background = 'cyan';\r\n        }\r\n    }\r\n\r\n    target.onmouseout = function () {\r\n        remove();\r\n    }\r\n}\r\n\r\nfunction remove() {\r\n    let cells = document.getElementsByClassName('cell'); //TODO document -> parent\r\n\r\n    for (let i = 0; i < cells.length; i++) {\r\n        cells[i].style.background = '';\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/highlight.js?");

/***/ }),

/***/ "./js/pieceMap.js":
/*!************************!*\
  !*** ./js/pieceMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PieceMap; });\n/* harmony import */ var _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces/pieces */ \"./js/pieces/pieces.js\");\n\r\n\r\n//TODO переименовать класс и файл\r\nfunction createPiece({type, position, color}) {\r\n    let piece;\r\n\r\n    switch (type) {\r\n        case 'pawn':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"Pawn\"](color, position);\r\n            break;\r\n        case 'knight':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"Knight\"](color, position);\r\n            break;\r\n        case 'bishop':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"Bishop\"](color, position);\r\n            break;\r\n        case 'rook':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"Rook\"](color, position);\r\n            break;\r\n        case 'queen':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"Queen\"](color, position);\r\n            break;\r\n        case 'king':\r\n            piece = new _pieces_pieces__WEBPACK_IMPORTED_MODULE_0__[\"King\"](color, position);\r\n            break;\r\n        default:\r\n        //TODO кинуть ошибку\r\n    }\r\n\r\n    return piece;\r\n}\r\nclass PieceMap extends Map {\r\n    constructor() {\r\n        super();\r\n        this._starterPack = [\r\n            {type: 'pawn', position: 8, color: 'white'},\r\n            {type: 'pawn', position: 9, color: 'white'},\r\n            {type: 'pawn', position: 10, color: 'white'},\r\n            {type: 'pawn', position: 11, color: 'white'},\r\n            {type: 'pawn', position: 12, color: 'white'},\r\n            {type: 'pawn', position: 13, color: 'white'},\r\n            {type: 'pawn', position: 14, color: 'white'},\r\n            {type: 'pawn', position: 15, color: 'white'},\r\n            {type: 'rook', position: 0, color: 'white'},\r\n            {type: 'rook', position: 7, color: 'white'},\r\n            {type: 'knight', position: 1, color: 'white'},\r\n            {type: 'knight', position: 6, color: 'white'},\r\n            {type: 'bishop', position: 2, color: 'white'},\r\n            {type: 'bishop', position: 5, color: 'white'},\r\n            {type: 'queen', position: 3, color: 'white'},\r\n            {type: 'king', position: 4, color: 'white'},\r\n            {type: 'pawn', position: 48, color: 'black'},\r\n            {type: 'pawn', position: 49, color: 'black'},\r\n            {type: 'pawn', position: 50, color: 'black'},\r\n            {type: 'pawn', position: 51, color: 'black'},\r\n            {type: 'pawn', position: 52, color: 'black'},\r\n            {type: 'pawn', position: 53, color: 'black'},\r\n            {type: 'pawn', position: 54, color: 'black'},\r\n            {type: 'pawn', position: 55, color: 'black'},\r\n            {type: 'rook', position: 56, color: 'black'},\r\n            {type: 'rook', position: 63, color: 'black'},\r\n            {type: 'knight', position: 57, color: 'black'},\r\n            {type: 'knight', position: 62, color: 'black'},\r\n            {type: 'bishop', position: 58, color: 'black'},\r\n            {type: 'bishop', position: 61, color: 'black'},\r\n            {type: 'queen', position: 59, color: 'black'},\r\n            {type: 'king', position: 60, color: 'black'},\r\n        ];\r\n    }\r\n\r\n    fill() {\r\n        for (let i = 0; i < this._starterPack.length; i++) {\r\n            this.set(this._starterPack[i].position, createPiece(this._starterPack[i]));\r\n        }\r\n    }\r\n\r\n    fillNewMap(map) {\r\n        for (let i of map) {\r\n            this.set(i[0], createPiece({type: i[1].type, position: i[1].position, color: i[1].color}));\r\n            this.get(i[0]).firstStep = i[1].firstStep;\r\n        }\r\n    }\r\n\r\n    get white() {\r\n        return this._fromColor('white');\r\n    }\r\n\r\n    get black() {\r\n        return this._fromColor('black');\r\n    }\r\n\r\n\r\n    friendly(color) {\r\n        if (color === 'white') {\r\n            return this.white;\r\n        } else if (color === 'black') {\r\n            return this.black;\r\n        }\r\n    }\r\n\r\n    enemy(color) {\r\n        if (color === 'white') {\r\n            return this.black;\r\n        } else if (color === 'black') {\r\n            return this.white;\r\n        }\r\n    }\r\n\r\n    findKingPosition(color) {\r\n        for (let entry of this) { //вместо this - что? перечисляемы ли мои функции?\r\n            if (entry[1].type === 'king' && entry[1].color === color) {\r\n                return entry[0];\r\n            }\r\n        }\r\n    }\r\n\r\n    willKingProtected(before, after, map, step) {\r\n        let target = this.get(before);\r\n\r\n        for (let i of this.enemy(target.color).keys()) {\r\n\r\n            let newMap = new PieceMap();\r\n            newMap.fillNewMap(map);\r\n\r\n            newMap.movePiece(before, after, step);\r\n\r\n            let tempPiece = newMap.get(i);\r\n            if (tempPiece.canMove(newMap.findKingPosition(target.color), newMap, step)) {\r\n                return false;\r\n            }\r\n            newMap.set(tempPiece.position, tempPiece);\r\n        }\r\n        return true;\r\n    }\r\n\r\n    isCellProtected(position, color, step) {\r\n        for (let i of this.enemy(color)) {\r\n            if (i[1].canMove(position, this, step)) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    movePiece(before, after, step) { //TODO передавать степ, правильно? или глобально?\r\n        let piece = this.get(before);\r\n        this.delete(after);\r\n        this.delete(before);\r\n        this.set(after, piece);\r\n        piece.position = after;\r\n        piece.firstStep = step;\r\n    }\r\n\r\n    transformPawn(type, position, color) {\r\n        //this.set(position, createPiece({type, position, color}));\r\n    }\r\n\r\n    _fromColor(color) {\r\n        let newMap = new Map();\r\n        for (let entry of this) {\r\n            if (entry[1].color === color) {\r\n                newMap.set(entry[0], entry[1]);\r\n            }\r\n        }\r\n        return newMap;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/pieceMap.js?");

/***/ }),

/***/ "./js/pieces/pieces.js":
/*!*****************************!*\
  !*** ./js/pieces/pieces.js ***!
  \*****************************/
/*! exports provided: Bishop, King, Knight, Pawn, Queen, Rook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bishop\", function() { return Bishop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"King\", function() { return King; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Knight\", function() { return Knight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pawn\", function() { return Pawn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queen\", function() { return Queen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rook\", function() { return Rook; });\n/* harmony import */ var _workWithPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workWithPosition */ \"./js/workWithPosition.js\");\n//TODO Пойдет на сервер!\r\n//TODO переместить в отдельные модули\r\n\r\n\r\n\r\nclass Base {\r\n    constructor(color, position) {\r\n        this._firstStep = null;\r\n        this._type = undefined;\r\n        this._color = color;\r\n        this._position = position;\r\n    }\r\n\r\n    hasObstructionByWay(after, map) {\r\n        let canMove = true;\r\n\r\n        let xDirection = _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) > 0 ? 1 : -1;\r\n        if (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) === 0) {\r\n            xDirection = 0;\r\n        }\r\n        let yDirection = _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) > 0 ? 1 : -1;\r\n        if (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) === 0) {\r\n            yDirection = 0;\r\n        }\r\n\r\n        let steps = xDirection !== 0 ? _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) * xDirection :\r\n            _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) * yDirection;\r\n\r\n        for (let i = 1; i < steps; i++) { //проверка МЕЖДУ ходами\r\n            if (map.has(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x(this.position) + i * xDirection, _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(this.position) + i * yDirection))) {\r\n                canMove = false;\r\n                break;\r\n            }\r\n\r\n        }\r\n\r\n        return !canMove;\r\n    }\r\n\r\n    canMove(after, map) {\r\n        let canMove = false;\r\n\r\n        if (!(map.friendly(this.color).has(after)) &&\r\n            this.position !== after) {\r\n            canMove = true;\r\n        }\r\n\r\n        return canMove;\r\n\r\n    }\r\n\r\n    doMove(after, map, step) {\r\n        //TODO сохранение убитого для отображения сбоку\r\n        map.movePiece(this.position, after, step);\r\n    }\r\n\r\n    get firstStep() {\r\n        return this._firstStep;\r\n    }\r\n\r\n    set firstStep(step) {\r\n        if (this._firstStep === null) {\r\n            this._firstStep = step;\r\n        }\r\n    }\r\n\r\n    get type() {\r\n        return this._type;\r\n    }\r\n\r\n    set type(type) {\r\n        let availableTypes = [\r\n            'pawn',\r\n            'knight',\r\n            'rook',\r\n            'bishop',\r\n            'queen',\r\n            'king',\r\n        ];\r\n        let isAvailable = false;\r\n        for (let availableType of availableTypes) {\r\n            if (availableType === type) {\r\n                isAvailable = true;\r\n            }\r\n        }\r\n\r\n        if (isAvailable) {\r\n            this._type = type;\r\n        } else {\r\n            //бросить ошибку\r\n        }\r\n    }\r\n\r\n    get color() {\r\n        return this._color;\r\n    }\r\n\r\n    get position() {\r\n        return this._position;\r\n    }\r\n\r\n    set position(newPosition) {\r\n        this._position = newPosition;\r\n        return true;\r\n    }\r\n\r\n    moveAbility(map, deck, step) {\r\n        let linkSet = new Set();\r\n\r\n        for (let i = 0; i < gridSize ** 2; i++) {\r\n            if (!map.friendly(this.color).has(i) && this.canMove(i, map, step)) {\r\n                if (map.willKingProtected(this.position, i, map, step)) {\r\n                    linkSet.add(deck.get(i));\r\n                }\r\n            }\r\n        }\r\n        return linkSet;\r\n    }\r\n\r\n}\r\n\r\nclass Bishop extends Base {\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'bishop';\r\n    }\r\n\r\n    canMove(after, map) {\r\n        let canMove = super.canMove(after, map);\r\n\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) !== Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position))) {\r\n            canMove = false;\r\n        }\r\n\r\n        canMove = this.hasObstructionByWay(after, map) ? false : canMove;\r\n\r\n        return canMove;\r\n    }\r\n\r\n}\r\n\r\nclass King extends Base {\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'king';\r\n    }\r\n\r\n    canMove(after, map, step) {\r\n        let canMove = super.canMove(after, map);\r\n\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 2 &&\r\n            Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position)) === 0 &&\r\n            this.firstStep === null) {//рокировка\r\n            let xDirection = _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) > 0 ? 1 : -1;\r\n\r\n            if (!map.isCellProtected(this.position, this.color, step)\r\n                || !map.isCellProtected(this.position + xDirection, this.color, step)\r\n                || !map.isCellProtected(this.position + xDirection * 2, this.color, step)) {\r\n                canMove = false;\r\n            }\r\n\r\n            let rookPosition = xDirection === 1 ? _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(7, _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(this.position)) : _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(0, (this.position)); //grid_size??\r\n            if (!map.friendly(this.color).get(rookPosition)\r\n                || map.friendly(this.color).get(rookPosition).firstStep !== null\r\n                || this.hasObstructionByWay(rookPosition, map)\r\n                || this.firstStep !== null) {\r\n                canMove = false;\r\n            }\r\n\r\n        } else if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) > 1\r\n            || Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position)) > 1) {\r\n            canMove = false;\r\n        } else {\r\n            super.canMove(after, map);\r\n        }\r\n        return canMove;\r\n    }\r\n\r\n    doMove(after, map, step) {\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 2) {\r\n            let xDirection = (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) / 2;\r\n            let rookPosition = xDirection === 1 ? _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(7, _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(this.position)) : _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDim(0, _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(this.position));\r\n\r\n            map.movePiece(rookPosition, this.position + xDirection, step);\r\n            map.movePiece(this.position, after, step);\r\n        } else {\r\n            super.doMove(after, map, step);\r\n        }\r\n\r\n\r\n    }\r\n}\r\n\r\nclass Knight extends Base {\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'knight';\r\n    }\r\n\r\n    canMove(after, map) {\r\n        let canMove = super.canMove(after, map);\r\n        let canMoveHere = false;\r\n\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 1 && Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position)) === 2\r\n            || Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 2 && Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position)) === 1) {\r\n            canMoveHere = true;\r\n        }\r\n\r\n        return (canMove && canMoveHere);\r\n    }\r\n}\r\n\r\nclass Pawn extends Base {\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'pawn';\r\n        if (color === 'white') {\r\n            this._pieceDirection = 1;\r\n        } else {\r\n            this._pieceDirection = -1;\r\n        }\r\n    }\r\n\r\n    canMove(after, map, step) {\r\n        if (super.canMove(after, map) === false)\r\n            return false;\r\n        let canMove = false;\r\n\r\n        if (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) === 0) {\r\n            if (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) * this.pieceDirection === 2 //двойной прыжок\r\n                && this.firstStep === null\r\n                || _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) * this.pieceDirection === 1) {\r\n                if (!this.hasObstructionByWay(after + this._pieceDirection * gridSize, map)) { //одиночный ход\r\n                    canMove = true;\r\n                }\r\n            } //а с эти ифом шо делать? объединять?\r\n\r\n        } else if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 1\r\n            && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) * this.pieceDirection === 1) {\r\n\r\n\r\n            if (map.enemy(this.color).has(after)) {\r\n                canMove = true;\r\n            } else if (map.enemy(this.color).has(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDimFrom(after, this.position))) {\r\n                let enemy = map.enemy(this.color).get(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDimFrom(after, this.position));\r\n                if (enemy.firstStep === step - 1) {\r\n                    canMove = true;\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n        return canMove;\r\n    }\r\n\r\n    doMove(after, map, step) {\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) === 1 && !map.enemy(this.color).has(after)) {\r\n            //=> на проходе\r\n\r\n            map.delete(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oneDimFrom(after, this.position));\r\n            map.movePiece(this.position, after, step);\r\n\r\n        } else {\r\n            return super.doMove(after, map, step);\r\n        }\r\n\r\n        if (this.color === 'white' && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(after) === gridSize\r\n            || this.color === 'black' && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(after) === 0) {\r\n            //TODO выбор новой фигуры\r\n        }\r\n    }\r\n\r\n    get pieceDirection() {\r\n        return this._pieceDirection;\r\n    }\r\n} //TODO doMove для конца поля\r\n\r\nclass Queen extends Base {\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'queen';\r\n    }\r\n\r\n    canMove(after, map) {\r\n        let canMove = super.canMove(after, map);\r\n\r\n        if (Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position)) !== Math.abs(_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position))\r\n            && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) !== 0\r\n            && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) !== 0) {\r\n            canMove = false;\r\n        }\r\n\r\n        canMove = this.hasObstructionByWay(after, map) ? false : canMove;\r\n\r\n        return canMove;\r\n    }\r\n}\r\n\r\nclass Rook extends Base {\r\n\r\n    constructor(color, position) {\r\n        super(color, position);\r\n        this._type = 'rook';\r\n    }\r\n\r\n    canMove(after, map) {\r\n        let canMove = super.canMove(after, map);\r\n\r\n        if (_workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].xSubtract(after, this.position) !== 0\r\n            && _workWithPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ySubtract(after, this.position) !== 0) {\r\n            canMove = false; //можно все-таки возвращать, чтобы не совершать лишней работы по проверке?..\r\n        }\r\n\r\n        canMove = this.hasObstructionByWay(after, map) ? false : canMove;\r\n\r\n        return canMove;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/pieces/pieces.js?");

/***/ }),

/***/ "./js/startMove.js":
/*!*************************!*\
  !*** ./js/startMove.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startMove; });\nfunction startMove(event, deck, map, step) {\r\n    let target = event.target.closest('.cell');\r\n    if (!target || target.className !== 'cell' || !map.has(deck.getCellPosition(target))) {\r\n        return;\r\n    }\r\n\r\n\r\n    let clone = target.cloneNode(true);\r\n\r\n    clone.id = 'movable_cell';\r\n\r\n    clone.ondragstart = function () {\r\n        return false;\r\n    };\r\n\r\n    document.body.append(clone);\r\n    moveAt(event.pageX, event.pageY);\r\n\r\n    function moveAt(pageX, pageY) {\r\n        clone.style.left = pageX - clone.offsetWidth / 2 + 'px';\r\n        clone.style.top = pageY - clone.offsetHeight / 2 + 'px';\r\n    } //разобраться с функцией в функции\r\n\r\n    function onMouseMove(event) {\r\n        moveAt(event.pageX, event.pageY);\r\n    }\r\n\r\n    document.addEventListener('mousemove', onMouseMove);\r\n\r\n    document.addEventListener('mouseup', function mouseUp(event) {\r\n        document.removeEventListener('mousemove', onMouseMove);\r\n        target.onmouseup = null;\r\n        parent.addEventListener('mouseover', add);\r\n        let beforePosition = deck.getCellPosition(target);\r\n        document.body.removeChild(event.target.closest('.movable_cell'));\r\n        let after = document.elementFromPoint(event.clientX, event.clientY);\r\n        after = after.closest('.cell');\r\n        let afterPosition = deck.getCellPosition(after);\r\n\r\n\r\n        if (map.get(beforePosition).canMove(afterPosition, map, step)) { //TODO обработка на серваке\r\n            map.get(beforePosition).doMove(afterPosition, map, step);\r\n            step++;\r\n            deck.draw(map);\r\n        }\r\n        this.removeEventListener('mouseup', mouseUp);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./js/startMove.js?");

/***/ }),

/***/ "./js/workWithPosition.js":
/*!********************************!*\
  !*** ./js/workWithPosition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pos; });\nconst gridSize = 8;\r\n\r\nclass Pos {\r\n\r\n    static x(position) {\r\n        return (position % gridSize);\r\n    }\r\n\r\n    static y(position) {\r\n        return Math.floor(position / gridSize);\r\n    }\r\n\r\n    static oneDim(x, y) {\r\n        return y * gridSize + x;\r\n    }\r\n\r\n    static oneDimFrom(first, second) {\r\n        return this.oneDim(this.x(first), this.y(second));\r\n    }\r\n\r\n    static xSubtract(first, second) {\r\n        return this.x(first) - this.x(second);\r\n    }\r\n\r\n    static ySubtract(first, second) {\r\n        return this.y(first) - this.y(second);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/workWithPosition.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ })

/******/ });