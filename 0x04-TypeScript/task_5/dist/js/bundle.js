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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Function to sum MajorCredits\nfunction sumMajorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        brand: 'Major'\n    };\n}\n// Function to sum MinorCredits\nfunction sumMinorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        brand: 'Minor'\n    };\n}\n// Example usage\nvar math = { credits: 5, brand: 'Major' };\nvar physics = { credits: 3, brand: 'Major' };\nvar arts = { credits: 2, brand: 'Minor' };\nvar music = { credits: 4, brand: 'Minor' };\nconsole.log(sumMajorCredits(math, physics)); // { credits: 8, brand: 'Major' }\nconsole.log(sumMinorCredits(arts, music)); // { credits: 6, brand: 'Minor' }\n\n\n//# sourceURL=webpack://task_5/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;