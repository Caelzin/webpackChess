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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/play.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/svg/pieces/bishop.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/pieces/bishop.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"bishop\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0\\\" y=\\\"0\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>Bishop</title><path d=\\\"M167.1,120.5c-1.2,31.4-21.8,33.4-23.3,43.9l0,0c0.5,3.7,0.6,7.5,0.4,11.3c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.1,0.3-10.7l0,0c0-1.6-2.2-6.3-5-8.3c-29.9-23.8-19.6-55.5,2-78.4c0,0,20.9,20.1,27.8,27.8c1.8,2,9,7.7,5.7-3.7c-3.9-13.6-14.3-42.3-14.3-42.3C83.7,50.5,96,40.3,94.9,35.5l0,0c-7.6-4.7-4.5-16.5,3.9-17.4c9.8-1.3,14.1,12,6.3,17.2l0,0c-0.1,0.2-1.4,2.6,6.2,10.2C131.3,64.5,167.8,89.6,167.1,120.5z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/bishop.svg?");

/***/ }),

/***/ "./src/assets/svg/pieces/king.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/pieces/king.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"king\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>King</title><path d=\\\"M156.8,120.9c-5.8,35.3-17.2,22.6-12.6,55.5c-24.4,8.3-63.1,8.5-88.1,0c1.2-13.8,1.1-25.1-7.8-36 c-16.3-31.3,8.5-56.2,40.7-61c-2.3-4.7-0.6-13.4,4.8-16.6c-1.4-4.1-2.3-8.3-2.6-12.6c-20,4.4-18.6-20.2,0.2-15.4 c3.2-24.3,14.4-22.4,17.3,0c19.4-4.5,18.5,19.9,0.2,15.4c-0.3,4.4-1.2,8.7-2.7,12.8c5,3.8,6.9,10.6,4.5,16.4 C136.6,83.4,156.3,99.2,156.8,120.9z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/king.svg?");

/***/ }),

/***/ "./src/assets/svg/pieces/knight.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/pieces/knight.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"knight\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>Knight</title><path id=\\\"path\\\" d=\\\"M161.5,112c-13.9,35-8.7,35-7.4,62.7c-24.2,8.2-63,8.6-88.1,0c-1.1-14.1,4.3-30.7,13.3-41.5l0,0c11.2-10.8,19.6-25.6,17.8-43.6c-0.7,10.2-29.2,16.8-32.7,35.3l-10.8,0.3c0.1-1.3,0.4-4.4,0.6-6.6c-9.9,15.2-19-8-21.5-17.9C47.7,89.8,61,52.4,64.3,43.1l11.3-6.3l-9.7-10.5C124.7-0.7,187.1,51.5,161.5,112z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/knight.svg?");

/***/ }),

/***/ "./src/assets/svg/pieces/pawn.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/pieces/pawn.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"pawn\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>Pawn</title><path d=\\\"M144.2,173c0,1,0-0.1-0.1,3.5c-24.2,8.2-63,8.5-88.1,0c-1.2-13.1,4.1-30.6,13.2-41.5l0,0c13-12.1,21.8-31.2,16.4-50.8C56.9,81.3,60.9,74,84.1,71.6c-27.7-16.4-14-54.5,15.9-54.4c31.9,0.6,42.4,39,15.9,54.4c25.4,2.7,24.8,10.1-1.6,12.6c-4.9,17.1,1.7,37.5,16.4,50.8l0,0C139.4,145.8,144.1,159.2,144.2,173z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/pawn.svg?");

/***/ }),

/***/ "./src/assets/svg/pieces/queen.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/pieces/queen.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"queen\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>Queen</title><path id=\\\"queen\\\" d=\\\"M182.1,47.1c-0.1,4.5-3.8,8.1-8.3,8c-0.5,0-1-0.1-1.5-0.2c-5.9,25.9-15.4,67.2-21.2,92.6c0,0-8.1,0-8.1,14 c0,0.1,0,0.3,0.1,0.4c0.9,4.8,1.2,9.6,0.9,14.5c-24.7,8.4-63.1,8.5-88.1,0c-0.2-3.6-0.1-7.2,0.3-10.7c0-0.1,0-0.2,0-0.3 c0.2-1.2,0.3-2.4,0.2-3.7c0.1-14.3-8.1-14.2-8.1-14.2L27.5,54.9C18,56.9,14,43.5,22.6,39.7c9.7-4,15.3,9.7,7.1,14.4 c10.5,18.5,24.5,43.3,35,61.8c-0.4-17.2-1.3-59.7-1.7-77.2c-9.6-0.1-10.9-13.3-2.3-15.8c10.5-2.7,13.9,12.4,4.6,15.4 c5,15.9,17.7,55.8,22.6,71c2.3-16.3,8.6-59.5,11-76.2c-10.1-1.9-8.3-15.8,1.1-16c10.1,0.3,10.6,14.4,1.2,16c2.4,16.8,8.7,60,11,76.2 c4.9-15.4,17.6-55.3,22.5-71c-9.3-3.3-6.1-16.7,3.5-15.6c10.4,1.7,8.2,16.1-1.3,16c-0.3,13.5-1.7,77.2-1.7,77.2 c7-12.3,35-61.8,35-61.8C156.5,43,180.2,30.8,182.1,47.1z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/queen.svg?");

/***/ }),

/***/ "./src/assets/svg/pieces/rook.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/pieces/rook.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"rook\\\" class=\\\"svg-piece\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 200 200\\\" fill=\\\"black\\\"><title>rook</title><path id=\\\"ладья\\\" d=\\\"M166.3,27.3c-4.7,36.9-10.2,80.7-14.9,117.6c-10.4,1.8-7.3,16.3-7.1,28.9c-24.2,8.2-63,8.5-88.1,0 c1-13.6,0.6-29.7-7.6-28.9C43.9,108,38.3,64,33.7,27.3c6.9-1.7,14.4-3.2,22.4-4.4l5.4,30.1c7-0.9,14.3-1.5,21.8-1.9l-1.8-30.7 c12.5-0.7,25-0.7,37.5,0l-1.8,30.7c7.5,0.4,14.8,1.1,21.8,1.9l5.4-30.1C152.1,24.2,159.5,25.6,166.3,27.3z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/assets/svg/pieces/rook.svg?");

/***/ }),

/***/ "./src/js/dataHelper.js":
/*!******************************!*\
  !*** ./src/js/dataHelper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dataHelper; });\n/* harmony import */ var _src_js_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/js/fetcher */ \"./src/js/fetcher.js\");\n/* harmony import */ var _src_js_svgHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/js/svgHelper */ \"./src/js/svgHelper.js\");\n\r\n\r\n\r\nclass dataHelper {\r\n\r\n    static sendData(piece, after, grid) {\r\n        for (let j of piece.moves) {\r\n            if (j === after) {\r\n                let data = {\r\n                    before: piece.position,\r\n                    after: after,\r\n                }\r\n\r\n                if (piece.type === 'pawn' && (after >= 55 || after < 8)) {\r\n                    this.chooseTarget(piece.color, data);\r\n                    break;\r\n                } else {\r\n                    Object(_src_js_fetcher__WEBPACK_IMPORTED_MODULE_0__[\"poster\"])(data);\r\n                    Object(_src_js_fetcher__WEBPACK_IMPORTED_MODULE_0__[\"getter\"])(grid);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    static createPopup(color) {\r\n        this.createPopupElement('popup-back');\r\n        let popup = this.createPopupElement('popup-body');\r\n\r\n        this.createPopupPieces(popup, color);\r\n    }\r\n\r\n    static chooseTarget(color, data) {\r\n        this.createPopup(color);\r\n\r\n        document.addEventListener('mouseup', function mouseUp(event) {\r\n            let after = document.elementFromPoint(event.clientX, event.clientY);\r\n            after = after.closest('.targetPiece');\r\n            if (!after || after.className !== 'targetPiece') {\r\n                return;\r\n            }\r\n\r\n            data.targetPiece = after.id;\r\n\r\n            closePopup();\r\n\r\n            Object(_src_js_fetcher__WEBPACK_IMPORTED_MODULE_0__[\"poster\"])(data);\r\n\r\n            function closePopup() {\r\n                let popup = document.querySelector('.popup-back');\r\n                popup.remove();\r\n                popup = document.querySelector('.popup-body');\r\n                popup.remove();\r\n            }\r\n        });\r\n\r\n    }\r\n\r\n    static createPopupElement(className) {\r\n        let newElement = document.createElement('div');\r\n        newElement.className = className;\r\n        document.body.append(newElement);\r\n        return newElement;\r\n    }\r\n\r\n    static createPopupPieces(parent, color) {\r\n        let pieces = ['bishop', 'knight', 'queen', 'rook'];\r\n        for (let type of pieces) {\r\n            let piece = document.createElement('div');\r\n            piece.id = type;\r\n            piece.className = 'targetPiece';\r\n\r\n            piece.innerHTML = _src_js_svgHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].piecePicker(type, color);\r\n\r\n            parent.append(piece);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/dataHelper.js?");

/***/ }),

/***/ "./src/js/fetcher.js":
/*!***************************!*\
  !*** ./src/js/fetcher.js ***!
  \***************************/
/*! exports provided: getter, poster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getter\", function() { return getter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"poster\", function() { return poster; });\n/* harmony import */ var _src_js_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/js/highlight */ \"./src/js/highlight.js\");\n/* harmony import */ var _src_js_movePiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/js/movePiece */ \"./src/js/movePiece.js\");\n\r\n\r\n\r\n\r\n\r\nasync function getter(grid) {\r\n    let response = await fetch('/json', {\r\n        method: 'GET'\r\n    });\r\n    let jsonGrid = await response.json()\r\n    grid.draw(jsonGrid);\r\n    parent.onmouseover = (event) => _src_js_highlight__WEBPACK_IMPORTED_MODULE_0__[\"add\"](event, grid, jsonGrid);\r\n    parent.onmousedown = (event) => Object(_src_js_movePiece__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, grid, jsonGrid);\r\n    return jsonGrid;\r\n}\r\n\r\nfunction poster(data) {\r\n    fetch('/json',\r\n        {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n}\n\n//# sourceURL=webpack:///./src/js/fetcher.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grid; });\n/* harmony import */ var _src_js_svgHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/js/svgHelper */ \"./src/js/svgHelper.js\");\n\r\n\r\nclass Grid extends Map {\r\n    constructor(parent) {\r\n        super();\r\n        this._hvalues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];\r\n        this._size = 8;\r\n        this._parent = document.createElement('div');\r\n        this._parent.id = 'deck';\r\n        parent.append(this._parent);\r\n        this.generateGrid();\r\n        this.fill();\r\n    }\r\n\r\n    getCellPosition(link) {\r\n        for (let entry of this) {\r\n            if (entry[1] === link) {\r\n                return entry[0];\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n\r\n    fill() {\r\n        let columns = this._parent.childNodes;\r\n\r\n        for (let i = 0; i < this._size; i++) {\r\n            let line = columns[i + 1].childNodes;\r\n            for (let j = 0; j < this._size; j++) {\r\n                this.set((this._size - j - 1) * this._size + i, line[j + 1]);\r\n                //Сложная формула просто переворачивает по вертикали отсчет\r\n            }\r\n        }\r\n    }\r\n\r\n    generateGrid() {\r\n        this.generateNumberColumn();\r\n        for (let i = 0; i < this._size; i++) {\r\n            this.generateColumn(i);\r\n        }\r\n        this.generateNumberColumn();\r\n    }\r\n\r\n    generateNumberColumn() {\r\n        let column = this.generateDiv('column');\r\n\r\n        column.append(this.generateDiv('label'));\r\n        for (let j = 0; j < this._size; j++) {\r\n            column.append(this.generateDiv('label', this._size - j));\r\n        }\r\n        column.append(this.generateDiv('label'));\r\n\r\n        this._parent.append(column);\r\n    }\r\n\r\n    generateColumn(i) {\r\n        let column = this.generateDiv('column');\r\n\r\n        column.append(this.generateDiv('label', this._hvalues[i]));\r\n\r\n        for (let i = 0; i < this._size; i++) {\r\n            column.append(this.generateDiv('cell'));\r\n        }\r\n\r\n        column.append(this.generateDiv('label', this._hvalues[i]));\r\n\r\n        this._parent.append(column);\r\n    }\r\n\r\n    generateDiv(divClassName, innerText) {\r\n        let div = document.createElement('div');\r\n        div.className = divClassName;\r\n        if (innerText) {\r\n            div.innerText = innerText;\r\n        }\r\n        return div;\r\n    }\r\n\r\n    draw(jsonGrid) {\r\n        for (let entry of this) {\r\n            entry[1].innerHTML = '';\r\n        }\r\n\r\n        for (let piece of jsonGrid) {\r\n            this.get(piece.position).innerHTML = _src_js_svgHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].piecePicker(piece.type, piece.color);\r\n        }\r\n    }\r\n\r\n    hasPiece(targetCell, jsonGrid) {\r\n        if (!targetCell || targetCell.className !== 'cell') {\r\n            return false;\r\n        }\r\n        for (let i of jsonGrid) {\r\n            if (i.position === this.getCellPosition(targetCell)) {\r\n                return i;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/highlight.js":
/*!*****************************!*\
  !*** ./src/js/highlight.js ***!
  \*****************************/
/*! exports provided: add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nfunction add(event, grid, jsonGrid) {\r\n    let target = event.target.closest('.cell');\r\n\r\n    if (!grid.hasPiece(target, jsonGrid)) {\r\n        return;\r\n    }\r\n\r\n    let jsonEntry = grid.hasPiece(target, jsonGrid);\r\n\r\n    for (let value of jsonEntry.moves) {\r\n        grid.get(value).style.background = 'cyan';\r\n    }\r\n\r\n\r\n    target.onmouseout = function () {\r\n        remove(grid);\r\n    }\r\n}\r\n\r\nfunction remove(grid) {\r\n    for (let i of grid.values()) {\r\n        i.style.background = '';\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/highlight.js?");

/***/ }),

/***/ "./src/js/movePiece.js":
/*!*****************************!*\
  !*** ./src/js/movePiece.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movePiece; });\n/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight */ \"./src/js/highlight.js\");\n/* harmony import */ var _src_js_dataHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/js/dataHelper */ \"./src/js/dataHelper.js\");\n/* harmony import */ var _src_js_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/js/fetcher */ \"./src/js/fetcher.js\");\n\r\n\r\n\r\n\r\nfunction movePiece(event, grid, jsonGrid) {\r\n    let target = event.target.closest('.cell');\r\n\r\n    if (!grid.hasPiece(target, jsonGrid)) {\r\n        return;\r\n    }\r\n    let clone = target.cloneNode(true);\r\n    clone.id = 'movable-cell';\r\n    clone.classList = ''\r\n    clone.ondragstart = function () {\r\n        return false;\r\n    };\r\n\r\n\r\n    document.body.append(clone);\r\n    moveAt(event.pageX, event.pageY);\r\n\r\n    document.addEventListener('mousemove', onMouseMove);\r\n    document.addEventListener('mouseup', function mouseUp(event) {\r\n        document.removeEventListener('mousemove', onMouseMove);\r\n        target.onmouseup = null;\r\n        parent.onmouseover = (event) => _highlight__WEBPACK_IMPORTED_MODULE_0__[\"add\"](event, grid, jsonGrid)\r\n        document.body.removeChild(clone);\r\n        let after = document.elementFromPoint(event.clientX, event.clientY);\r\n        after = after.closest('.cell');\r\n        let afterPosition = grid.getCellPosition(after);\r\n\r\n        let before = grid.hasPiece(target, jsonGrid);\r\n\r\n        _src_js_dataHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendData(before, afterPosition);\r\n\r\n        this.removeEventListener('mouseup', mouseUp);\r\n    })\r\n\r\n\r\n    function moveAt(pageX, pageY) {\r\n        clone.style.left = pageX - clone.offsetWidth / 2 + 'px';\r\n        clone.style.top = pageY - clone.offsetHeight / 2 + 'px';\r\n    }\r\n\r\n    function onMouseMove(event) {\r\n        moveAt(event.pageX, event.pageY);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/movePiece.js?");

/***/ }),

/***/ "./src/js/pages/play.js":
/*!******************************!*\
  !*** ./src/js/pages/play.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_play_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/style/play.css */ \"./src/style/play.css\");\n/* harmony import */ var _src_style_play_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_style_play_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_js_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/js/grid */ \"./src/js/grid.js\");\n/* harmony import */ var _src_js_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/js/fetcher */ \"./src/js/fetcher.js\");\n\r\n\r\n\r\n\r\n\r\nlet grid = new _src_js_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('deck-surface'));\r\nlet jsonGrid;\r\n\r\n\r\nObject(_src_js_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"getter\"])(grid)\r\n    .then((newGrid) => jsonGrid = newGrid);\r\n\r\nsetInterval(_src_js_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"getter\"], 1000, grid);\n\n//# sourceURL=webpack:///./src/js/pages/play.js?");

/***/ }),

/***/ "./src/js/svgHelper.js":
/*!*****************************!*\
  !*** ./src/js/svgHelper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SvgHelper; });\n/* harmony import */ var _src_assets_svg_pieces_pawn_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/assets/svg/pieces/pawn.svg */ \"./src/assets/svg/pieces/pawn.svg\");\n/* harmony import */ var _src_assets_svg_pieces_pawn_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_pawn_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_assets_svg_pieces_rook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/assets/svg/pieces/rook.svg */ \"./src/assets/svg/pieces/rook.svg\");\n/* harmony import */ var _src_assets_svg_pieces_rook_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_rook_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_assets_svg_pieces_bishop_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/assets/svg/pieces/bishop.svg */ \"./src/assets/svg/pieces/bishop.svg\");\n/* harmony import */ var _src_assets_svg_pieces_bishop_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_bishop_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_assets_svg_pieces_queen_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/assets/svg/pieces/queen.svg */ \"./src/assets/svg/pieces/queen.svg\");\n/* harmony import */ var _src_assets_svg_pieces_queen_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_queen_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_assets_svg_pieces_king_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/assets/svg/pieces/king.svg */ \"./src/assets/svg/pieces/king.svg\");\n/* harmony import */ var _src_assets_svg_pieces_king_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_king_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_assets_svg_pieces_knight_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/assets/svg/pieces/knight.svg */ \"./src/assets/svg/pieces/knight.svg\");\n/* harmony import */ var _src_assets_svg_pieces_knight_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_pieces_knight_svg__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SvgHelper {\r\n\r\n    static piecePicker(type, color) {\r\n        let svgString;\r\n        switch (type) {\r\n            case 'pawn':\r\n                svgString = _src_assets_svg_pieces_pawn_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n                break;\r\n            case 'knight':\r\n                svgString = _src_assets_svg_pieces_knight_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\r\n                break;\r\n            case 'bishop':\r\n                svgString = _src_assets_svg_pieces_bishop_svg__WEBPACK_IMPORTED_MODULE_2___default.a;\r\n                break;\r\n            case 'rook':\r\n                svgString = _src_assets_svg_pieces_rook_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n                break;\r\n            case 'queen':\r\n                svgString = _src_assets_svg_pieces_queen_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n                break;\r\n            case 'king':\r\n                svgString = _src_assets_svg_pieces_king_svg__WEBPACK_IMPORTED_MODULE_4___default.a;\r\n                break;\r\n        }\r\n        return this.colorPicker(svgString, color);\r\n    }\r\n\r\n    static colorPicker(svgString, color) {\r\n        if (color === 'white') {\r\n            svgString = svgString.replace('black', 'white');\r\n        }\r\n        return svgString;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/svgHelper.js?");

/***/ }),

/***/ "./src/style/play.css":
/*!****************************!*\
  !*** ./src/style/play.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/play.css?");

/***/ })

/******/ });