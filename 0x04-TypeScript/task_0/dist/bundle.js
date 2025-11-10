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

eval("{\n// Create two students\nvar student1 = {\n    firstName: 'Alice',\n    lastName: 'Johnson',\n    age: 20,\n    location: 'Addis Ababa'\n};\nvar student2 = {\n    firstName: 'Bob',\n    lastName: 'Smith',\n    age: 22,\n    location: 'Nairobi'\n};\n// Array of students\nvar studentsList = [student1, student2];\n// Create a table dynamically\nvar table = document.createElement('table');\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var firstNameCell = document.createElement('td');\n    var locationCell = document.createElement('td');\n    firstNameCell.textContent = student.firstName;\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    table.appendChild(row);\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

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