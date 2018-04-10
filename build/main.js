require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("ink");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ink_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ink_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ink_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c_Foo__ = __webpack_require__(5);
//const {h, render, Component, Text} = require('ink');





Object(__WEBPACK_IMPORTED_MODULE_0_ink__["render"])(Object(__WEBPACK_IMPORTED_MODULE_0_ink__["h"])(
  __WEBPACK_IMPORTED_MODULE_1_ink_router__["Router"],
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_ink__["h"])(__WEBPACK_IMPORTED_MODULE_2__c_App__["a" /* default */], null),
  Object(__WEBPACK_IMPORTED_MODULE_0_ink__["h"])(__WEBPACK_IMPORTED_MODULE_3__c_Foo__["a" /* default */], { name: 'Alec' })
));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ink-router");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ink__);


const App = (props, context) => 'Hello World';

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ink__);

const Foo = ({ name }, context) => `Hello ${name}`;

/* harmony default export */ __webpack_exports__["a"] = (Foo);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map