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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/914923cf9a48a39d2b139e1080dcd148.jpg":
/*!***************************************************!*\
  !*** ./dist/914923cf9a48a39d2b139e1080dcd148.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "914923cf9a48a39d2b139e1080dcd148.jpg");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_914923cf9a48a39d2b139e1080dcd148_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/914923cf9a48a39d2b139e1080dcd148.jpg */ "./dist/914923cf9a48a39d2b139e1080dcd148.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_dist_914923cf9a48a39d2b139e1080dcd148_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed;\n  background-size: cover;\n  font-family: \"Montserrat\", \"sans-serif\";\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main {\n  display: flex;\n  height: 100vh;\n}\n\n.content {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.side-bar-option {\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel {\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60, 64, 67, 0.302),\n    0 1px 1px 1px rgba(60, 64, 67, 0.149);\n  height: fit-content;\n}\n\ninput {\n  font-family: \"Montserrat\", \"sans-serif\";\n}\n\n::spelling-error {\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item {\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field {\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n.delete-button {\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover {\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input {\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input {\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder {\n  font-family: \"Montserrat\", \"sans-serif\";\n}\n\n.note-title {\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np {\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text {\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div {\n  text-align: left;\n}\n\n.checkbox {\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text {\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked {\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n  width: 156px;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n\nli {\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input {\n  width: -webkit-fill-available;\n}\n\n#add-button {\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover {\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input {\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide {\n  display: none;\n}\n\n#project-input {\n  text-align: center;\n}\n\n.notes-container {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper {\n  width: 190px;\n  max-height: 650px;\n  border-radius: 5px;\n  padding-top: 0px;\n  margin-top: 0;\n  background-color: var(--section-color);\n  padding: 16px;\n  min-width: 75px;\n  min-height: 85px;\n  width: -webkit-fill-available;\n  flex-direction: column;\n  display: flex;\n  position: relative;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),\n    0 1px 3px 1px rgba(60, 64, 67, 0.149);\n}\n\n.change-input {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit {\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project {\n  background: #e7c6ed;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n.due-date-div {\n  display: flex;\n  gap: 10px;\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item {\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button {\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover {\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul {\n  justify-content: center;\n  width: 35em;\n  display: flex;\n  gap: 2px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: #e7c6ed;\n  padding: 10px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg {\n  cursor: pointer;\n}\n\n.img {\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover {\n  transform: scale(1.1);\n}\n\n.side-bar {\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand {\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px) {\n  .input-form {\n    width: 250px;\n  }\n  #form-bottom-input {\n    flex-direction: column;\n  }\n  #due-date-input,\n  #project-input,\n  #add-button {\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button {\n    text-align: center;\n  }\n  .delete-button,\n  .delete-checklist-button {\n    display: initial;\n  }\n  #images-ul {\n    width: 181px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody {\n  background: url(../dist/914923cf9a48a39d2b139e1080dcd148.jpg) no-repeat fixed;\n  background-size: cover;\n  font-family: \"Montserrat\", \"sans-serif\";\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main {\n  display: flex;\n  height: 100vh;\n}\n\n.content {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.side-bar-option {\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel {\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60, 64, 67, 0.302),\n    0 1px 1px 1px rgba(60, 64, 67, 0.149);\n  height: fit-content;\n}\n\ninput {\n  font-family: \"Montserrat\", \"sans-serif\";\n}\n\n::spelling-error {\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item {\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field {\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n.delete-button {\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover {\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input {\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input {\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder {\n  font-family: \"Montserrat\", \"sans-serif\";\n}\n\n.note-title {\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np {\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text {\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div {\n  text-align: left;\n}\n\n.checkbox {\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text {\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked {\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n  width: 156px;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n\nli {\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input {\n  width: -webkit-fill-available;\n}\n\n#add-button {\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover {\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input {\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide {\n  display: none;\n}\n\n#project-input {\n  text-align: center;\n}\n\n.notes-container {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper {\n  width: 190px;\n  max-height: 650px;\n  border-radius: 5px;\n  padding-top: 0px;\n  margin-top: 0;\n  background-color: var(--section-color);\n  padding: 16px;\n  min-width: 75px;\n  min-height: 85px;\n  width: -webkit-fill-available;\n  flex-direction: column;\n  display: flex;\n  position: relative;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),\n    0 1px 3px 1px rgba(60, 64, 67, 0.149);\n}\n\n.change-input {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit {\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project {\n  background: #e7c6ed;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n.due-date-div {\n  display: flex;\n  gap: 10px;\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item {\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button {\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover {\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul {\n  justify-content: center;\n  width: 35em;\n  display: flex;\n  gap: 2px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: #e7c6ed;\n  padding: 10px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg {\n  cursor: pointer;\n}\n\n.img {\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover {\n  transform: scale(1.1);\n}\n\n.side-bar {\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand {\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px) {\n  .input-form {\n    width: 250px;\n  }\n  #form-bottom-input {\n    flex-direction: column;\n  }\n  #due-date-input,\n  #project-input,\n  #add-button {\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button {\n    text-align: center;\n  }\n  .delete-button,\n  .delete-checklist-button {\n    display: initial;\n  }\n  #images-ul {\n    width: 181px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/DOM_manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM_manipulation.js ***!
  \*********************************/
/*! exports provided: updateElementChecklist, removeChecklistItemElement, removeNoteElement, updateElement, listInputEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElementChecklist", function() { return updateElementChecklist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChecklistItemElement", function() { return removeChecklistItemElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNoteElement", function() { return removeNoteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElement", function() { return updateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listInputEvent", function() { return listInputEvent; });
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist */ "./src/checklist.js");
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_manipulation */ "./src/data_manipulation.js");
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_DOM */ "./src/render_DOM.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");





// DOM related functions //
const updateElementChecklist = (item, index, noteWrapper) => {
  let parent = document.querySelector(`#ul${noteWrapper.id}`)
  if(parent){
    parent.innerHTML = ''
    item.checklist.forEach((item, index) => {
      let listItemDiv = document.createElement('div')
      listItemDiv.className = 'list-item'
      listItemDiv.id = index 
      const element = Object(_checklist__WEBPACK_IMPORTED_MODULE_0__["createChecklist"])(item, index, noteWrapper)
      listItemDiv.append(element.checkbox, element.listBullet, element.listChangeInput, element.deleteListItemButton)
      parent.append(listItemDiv) 
  })
  }
  else {
    const list = document.createElement('ul')
    list.id = `ul${index}`
    item.checklist.forEach((item, index) => {
      let listItemDiv = document.createElement('div')
      listItemDiv.className = 'list-item'
      listItemDiv.id = index 
      const element = Object(_checklist__WEBPACK_IMPORTED_MODULE_0__["createChecklist"])(item, index, noteWrapper)
      listItemDiv.append(element.checkbox, element.listBullet, element.listChangeInput, element.deleteListItemButton)
      list.append(listItemDiv)   
  })
    document.querySelector(`.note${index}`).append(list)
  }
}

// removeChecklistItemElement
const removeChecklistItemElement = (element) => {
  element.parentNode.remove()
}

// remove note element
const removeNoteElement = (element) => {
  element.closest(".note-wrapper").remove()
  Object(_render_DOM__WEBPACK_IMPORTED_MODULE_2__["renderAllNotes"])()
}

// updates element in DOM
const updateElement = (element) => {
  let previousSibling = element.previousElementSibling
  previousSibling.innerText = element.value
}

// add enter event to checklist input
const listInputEvent = () => {
  let list = document.querySelector('#checklist-input')
  list.addEventListener('keypress', (evt) => {
    if(evt.key === 'Enter' && evt.target.value !== ''){
      Object(_form__WEBPACK_IMPORTED_MODULE_3__["addListItem"])(evt.target)
      _data_manipulation__WEBPACK_IMPORTED_MODULE_1__["listItemData"].push({name: evt.target.value, checked: false})
      evt.target.value = ''
    }
  })
}

/***/ }),

/***/ "./src/background_images.js":
/*!**********************************!*\
  !*** ./src/background_images.js ***!
  \**********************************/
/*! exports provided: imagesEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesEventListeners", function() { return imagesEventListeners; });
// images event listeners
const imagesEventListeners = () => {
  let images = document.querySelectorAll(".img")
  images.forEach(img => {
    img.addEventListener('click', (evt) => {
      changeBackgroundImg(evt.target)
    })
  })
}

// changeBackgroundImg
const changeBackgroundImg = (img) => {
  let body = document.querySelector('body')
    body.style.background =  `url(./img/img${img.id}.jpg) no-repeat fixed`
    body.style.backgroundSize = 'cover'
}


/***/ }),

/***/ "./src/checklist.js":
/*!**************************!*\
  !*** ./src/checklist.js ***!
  \**************************/
/*! exports provided: createChecklist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChecklist", function() { return createChecklist; });
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_manipulation */ "./src/data_manipulation.js");
/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_manipulation */ "./src/DOM_manipulation.js");



function createChecklist(item, index, noteWrapper) {
    let listBullet;
    let listChangeInput;
    let checkbox;
    let deleteListItemButton;
    listBullet = document.createElement('li')
    listBullet.innerText = item.name
    listBullet.id = index
    listBullet.className = 'list-item-text'
    listBullet.addEventListener('click', () =>{
      listChangeInput.classList.remove('hide');
      listChangeInput.focus()
      listBullet.classList.add('hide')
    })
    listBullet.addEventListener('mouseenter', () => {
      deleteListItemButton.classList.remove('hide')
    })
    listBullet.addEventListener('mouseleave', () => {
      deleteListItemButton.classList.add('hide')
    })
    listChangeInput = document.createElement('input')
    listChangeInput.value = item.name
    listChangeInput.spellcheck = false
    listChangeInput.className = 'change-input'
    listChangeInput.classList.add('hide')
    listChangeInput.id = index  
    listChangeInput.addEventListener('keypress', (evt) => {
      if(evt.key === 'Enter' && evt.target.value !== ''){
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateChecklistData"])(evt.target, noteWrapper.id)
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__["updateElement"])(evt.target)
        listChangeInput.classList.add('hide')
        listBullet.classList.remove('hide')
      }
    })
      
    listChangeInput.addEventListener('blur', (evt) => {
      if(evt.target.value !== ''){
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateChecklistData"])(evt.target, noteWrapper.id)
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__["updateElement"])(evt.target)
        listChangeInput.classList.add('hide')
        listBullet.classList.remove('hide')
      }
    })
    checkbox = document.createElement('input')
    checkbox.className = 'checkbox'
    checkbox.id = index
    checkbox.type = 'checkbox'
    checkbox.checked;
    if(item.checked === true){
      checkbox.checked = true
      listBullet.classList.add('checked')
    }
    checkbox.addEventListener('click', (evt) => {
      if(listBullet.classList.contains('checked')){
        listBullet.classList.remove('checked')
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateCheckedItem"])(evt.target, noteWrapper.id)
      }
      else{
        listBullet.classList.add('checked')
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateCheckedItem"])(evt.target, noteWrapper.id)
      }
    })
    deleteListItemButton = document.createElement('button')
    deleteListItemButton.innerHTML = 'x'
    deleteListItemButton.id = index
    deleteListItemButton.className = 'delete-checklist-button'
    deleteListItemButton.classList.add('hide')
    deleteListItemButton.addEventListener('click', (evt) => {
      Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["removeChecklistItemData"])(evt.target, noteWrapper)
      Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__["removeChecklistItemElement"])(evt.target)
    })
    return{
      checkbox, listBullet, listChangeInput, deleteListItemButton
    }
  }

/***/ }),

/***/ "./src/data_manipulation.js":
/*!**********************************!*\
  !*** ./src/data_manipulation.js ***!
  \**********************************/
/*! exports provided: listItemData, addNote, removeNoteData, removeChecklistItemData, updateCheckedItem, updateData, updateChecklistData, addChecklistItemData, updateChecklistArray, resetListItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItemData", function() { return listItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNote", function() { return addNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNoteData", function() { return removeNoteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChecklistItemData", function() { return removeChecklistItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCheckedItem", function() { return updateCheckedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChecklistData", function() { return updateChecklistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChecklistItemData", function() { return addChecklistItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChecklistArray", function() { return updateChecklistArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetListItemData", function() { return resetListItemData; });
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_DOM */ "./src/render_DOM.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");



// current input list 
let listItemData = []

// factory function for creating notes
const Note = (title, description, checklist, dueDate, project) => {
  return {
    title, 
    description, 
    checklist,
    dueDate, 
    project
  }
}

// add note to data
const addNote = (title, description, checklist, dueDate, project) => {
  if(description !== '' || checklist!== ''){
    _index__WEBPACK_IMPORTED_MODULE_1__["notes"].unshift(Note(title, description, checklist, dueDate, project))
    Object(_render_DOM__WEBPACK_IMPORTED_MODULE_0__["renderAllNotes"])()
  }
}

// remove note data
const removeNoteData = (element) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"].splice(element.id, 1)
}

// removes checklist item from data
const removeChecklistItemData = (element, note) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"][note.id].checklist.forEach((i, index) => {
    if(i.name === element.parentNode.children[1].innerText){
      _index__WEBPACK_IMPORTED_MODULE_1__["notes"][note.id].checklist.splice(index, 1)
    }
  })
}

// updates checked checklist item
const updateCheckedItem = (element, parentIndex) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"][parentIndex].checklist[element.id].checked = !_index__WEBPACK_IMPORTED_MODULE_1__["notes"][parentIndex].checklist[element.id].checked;
}

// updates note details -> title or note
const updateData = (element, detail) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"][element.id][detail] = element.value
}

// updates checklist item value
const updateChecklistData = (element, parentIndex) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"][parentIndex].checklist[element.id].name = element.value;
}

// add a checklist item 
const addChecklistItemData = (element, parentIndex) => {
  _index__WEBPACK_IMPORTED_MODULE_1__["notes"][parentIndex].checklist.push({name: element.value, checked: false})
}

// update temporary form checklist values array
function updateChecklistArray(element, newValue){
  listItemData[element.previousElementSibling.id].name = newValue.value
}

const resetListItemData = () => {
  listItemData = []
}

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: addListItem, addInputEvent, addButtonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListItem", function() { return addListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInputEvent", function() { return addInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButtonEvent", function() { return addButtonEvent; });
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_manipulation */ "./src/data_manipulation.js");
/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_manipulation */ "./src/DOM_manipulation.js");




// adds list items on input form
const addListItem = (element) => {
    let li = document.createElement('li');
    li.innerText = element.value
    li.className = 'temporary-form-list-item'
    li.id = _data_manipulation__WEBPACK_IMPORTED_MODULE_0__["listItemData"].length
    let changeList = document.createElement('input')
    changeList.className = 'hide'
    changeList.classList.add('change-input')
    changeList.type = 'text'
    changeList.value = element.value
    li.addEventListener('click', ()=> {
      li.classList.add('hide')
      changeList.classList.remove('hide')
      changeList.focus()
    })
    changeList.addEventListener('keydown', (event) => {
      if(event.key === 'Enter' && event.target.value !== ''){
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateChecklistArray"])(event.target, changeList)
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__["updateElement"])(event.target)
        changeList.classList.add('hide')
        li.classList.remove('hide')
      }
    })
    changeList.addEventListener('blur', (event) => {
      if (event.target.value !== '') {
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["updateChecklistArray"])(event.target, changeList)
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__["updateElement"])(event.target)
        changeList.classList.add('hide')
        li.classList.remove('hide')
      }
    })
    let input = document.querySelector('#checklist-div')
    input.append(li, changeList)
}
  
  
// gets user input for values
const getInput = () => {
  let note = document.querySelector('#note-input')
  let title = document.querySelector('#title-input')
  let list = document.querySelectorAll('.temporary-form-list-item')
  let dueDate = document.querySelector('#due-date-input')
  let project = document.querySelector('#project-input')

  Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["addNote"])(title.value, note.value, _data_manipulation__WEBPACK_IMPORTED_MODULE_0__["listItemData"], dueDate.value, project.value);
  list.forEach(item => item.remove())
  title.value = ''
  note.value = ''
  dueDate.value = ''
  Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__["resetListItemData"])()
  project.value = ''
}


// removes hide class from form
const displayInputOptions = () => {
  let inputForm = [
    document.querySelector('#title-input'), 
    document.querySelector('#due-date-input'), 
    document.querySelector('#checklist-input'), 
    document.querySelector('#project-input'),
    document.querySelector("#add-button")
  ]
  inputForm.forEach(item => {
    item.classList.remove('hide')
  })
}

// adds hide class to form
const hideInputOptions = () => {
  let inputForm = [
    document.querySelector('#title-input'), 
    document.querySelector('#due-date-input'), 
    document.querySelector('#checklist-input'), 
    document.querySelector('#project-input'),
    document.querySelector("#add-button")
  ]
  inputForm.forEach(item => {
    item.classList.add('hide')
  })
}

// add event to note input
const addInputEvent = () => {
  let input = document.querySelector('#note-input');
  input.addEventListener('click', () => {
    displayInputOptions()
  })
}

// add button event
const addButtonEvent = () => {
    let button = document.querySelector('#add-button');
    button.addEventListener('click', (evt) => {
      getInput()
      hideInputOptions()
    })
  }

  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notes", function() { return notes; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background_images */ "./src/background_images.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_DOM */ "./src/render_DOM.js");
/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM_manipulation */ "./src/DOM_manipulation.js");
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data_manipulation */ "./src/data_manipulation.js");








// notes data
let notes = [];


Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_5__["addNote"])('My Shopping List', 'need to go to that market', [{name: "way protein", checked: true}, 
{name: "paper towels", checked: false}, {name: "after shave", checked: true}, {name: "bread", checked: false}], 
'14/05/2020', 'Buy')

Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_5__["addNote"])('Dinner Planning', 'Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check', 
[], '12/02/2020', 'dinner')

Object(_background_images__WEBPACK_IMPORTED_MODULE_1__["imagesEventListeners"])()
Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_4__["listInputEvent"])()
Object(_form__WEBPACK_IMPORTED_MODULE_2__["addInputEvent"])()
Object(_form__WEBPACK_IMPORTED_MODULE_2__["addButtonEvent"])()
Object(_render_DOM__WEBPACK_IMPORTED_MODULE_3__["renderAllNotes"])()





/***/ }),

/***/ "./src/render_DOM.js":
/*!***************************!*\
  !*** ./src/render_DOM.js ***!
  \***************************/
/*! exports provided: renderAllNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAllNotes", function() { return renderAllNotes; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist */ "./src/checklist.js");
/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM_manipulation */ "./src/DOM_manipulation.js");
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_manipulation */ "./src/data_manipulation.js");





// display all notes on DOM
function renderAllNotes() {
  let div = document.querySelector('.notes-container')
  div.innerHTML = ''
  _index__WEBPACK_IMPORTED_MODULE_0__["notes"].forEach((item, index) => {
    let noteWrapper = document.createElement('div')
    noteWrapper.className = 'note-wrapper'
    noteWrapper.id = index
    noteWrapper.addEventListener('mouseenter', () => {
      deleteNoteButton.classList.remove('hide')
    })
    noteWrapper.addEventListener('mouseleave', () => {
      deleteNoteButton.classList.add('hide')
    })

    // note title 
    let title = ''
    if(item.title !== ''){
      title = document.createElement('div')
      let titleText = document.createElement('h2')
      titleText.innerText = item.title
      titleText.className = 'note-title'
      titleText.addEventListener('click', () =>{
        titleTextInput.classList.remove('hide');
        titleTextInput.focus()
        titleText.classList.add('hide')
      })

      let titleTextInput = document.createElement('input')
      titleTextInput.value = titleText.innerText
      titleTextInput.spellcheck = false
      titleTextInput.classList.add('change-input', 'title-edit')
      titleTextInput.classList.add('hide')
      titleTextInput.id = index
      titleTextInput.addEventListener('blur', (evt) => {
          Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__["updateElement"])(evt.target)
          Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_3__["updateData"])(evt.target, 'title')
          titleTextInput.classList.add('hide')
          titleText.classList.remove('hide')
      })
      title.append(titleText, titleTextInput)
    }

    // checklist stuff
    let list = ''
    if(item.checklist.length !== 0){
      list = document.createElement('ul')
      list.id = `ul${index}`
      item.checklist.forEach((item, index) => {
        let listItemDiv = document.createElement('div')
        listItemDiv.className = 'list-item'
        listItemDiv.id = index 
        const element = Object(_checklist__WEBPACK_IMPORTED_MODULE_1__["createChecklist"])(item, index, noteWrapper)
        listItemDiv.append(element.checkbox, element.listBullet, element.listChangeInput, element.deleteListItemButton)
        list.append(listItemDiv)
      })
    } 

    // add checklist item
    let addChecklistItem = document.createElement('input')
    addChecklistItem.type = 'text'
    addChecklistItem.placeholder = 'add list item'
    addChecklistItem.className = 'change-input'
    addChecklistItem.addEventListener('keypress', (evt) => {
      if(evt.key === 'Enter' && evt.target.value !== ''){
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_3__["addChecklistItemData"])(evt.target, noteWrapper.id)
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__["updateElementChecklist"])(item, index, noteWrapper)
        evt.target.value = ''
      }
    })

    let description = ''
    if(item.description !== ''){
      description = document.createElement('div')
      description.className = `note${index}`
      let noteText = document.createElement('p')
      noteText.innerText = item.description
      noteText.className = 'note-text'
      noteText.addEventListener('click', () =>{
        noteTextInput.classList.remove('hide');
        noteTextInput.focus()
        noteText.classList.add('hide')
      })
      let noteTextInput = document.createElement('textarea')
      noteTextInput.value = item.description
      noteTextInput.className = 'change-input'
      noteTextInput.spellcheck = false
      noteTextInput.classList.add('hide', 'note-input')
      noteTextInput.id = index
      noteTextInput.addEventListener('blur', (evt) => {
        Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__["updateElement"])(evt.target)
        Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_3__["updateData"])(evt.target, 'description')
        noteTextInput.classList.add('hide')
        noteText.classList.remove('hide')
      })
      description.append(noteText, noteTextInput)
    }

    let project = ''
    if(item.project !== ''){
      project = document.createElement('p')
      project.innerText = item.project
      project.className = 'project'
    }

    let dueDate = ''
    if(item.dueDate !== ''){
      dueDate = document.createElement('div')
      dueDate.className = 'due-date-div'
      let due = document.createElement('p')
      due.innerText = item.dueDate
      due.className = 'project'
      due.id = 'due-date' 
      dueDate.append(project, due)
    }

    let deleteNoteButton = document.createElement('button')
    deleteNoteButton.innerHTML = 'x'
    deleteNoteButton.id = index
    deleteNoteButton.className = 'delete-button'
    deleteNoteButton.classList.add('hide')
    deleteNoteButton.addEventListener('click', (evt) => {
      Object(_data_manipulation__WEBPACK_IMPORTED_MODULE_3__["removeNoteData"])(evt.target)
      Object(_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__["removeNoteElement"])(evt.target)
    })

    if(description !== '' || list !== ''){
      noteWrapper.append(deleteNoteButton, title, description, list, addChecklistItem, dueDate)
      div.append(noteWrapper)
    }
  })
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC85MTQ5MjNjZjlhNDhhMzlkMmIxMzllMTA4MGRjZDE0OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9ET01fbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhX21hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcl9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxX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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQW9CO0FBQzVCLFFBQVEsZ0ZBQXNCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBYTtBQUNyQixRQUFRLHFFQUFVO0FBQ2xCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5RUFBYztBQUNwQixNQUFNLDJFQUFpQjtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUN4SUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTQ5MjNjZjlhNDhhMzlkMmIxMzllMTA4MGRjZDE0OC5qcGdcIjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9kaXN0LzkxNDkyM2NmOWE0OGEzOWQyYjEzOWUxMDgwZGNkMTQ4LmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2VjdGlvbi1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1iYXItb3B0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3YzZlZCwgdHJhbnNwYXJlbnQpO1xcbiAgcGFkZGluZzogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuc2VsZWN0I3Byb2plY3RzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksXFxuICAgIDAgMXB4IDFweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxufVxcblxcbjo6c3BlbGxpbmctZXJyb3Ige1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA5cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogOXB4O1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxufVxcblxcbiN0aXRsZS1pbnB1dCB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAyMDRweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4jbm90ZS1pbnB1dCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm5vdGUtaW5wdXQge1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxufVxcblxcbi5ub3RlLXRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5wIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5ub3RlLXRleHQge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgbWFyZ2luOiAzcHggMHB4IDEwcHggMHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY2hlY2tsaXN0LWRpdiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbi5saXN0LWl0ZW0tdGV4dCB7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG4gIHdpZHRoOiAxNDhweDtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZGltZ3JheTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LmNoYW5nZS1pbnB1dCB7XFxuICB3aWR0aDogMTU2cHg7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2hlY2tsaXN0LWlucHV0IHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4jYWRkLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNhZGQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIHBhZGRpbmc6IDExcHg7ICovXFxufVxcblxcbiNmb3JtLWJvdHRvbS1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ub3RlLXdyYXBwZXIge1xcbiAgd2lkdGg6IDE5MHB4O1xcbiAgbWF4LWhlaWdodDogNjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1pbi13aWR0aDogNzVweDtcXG4gIG1pbi1oZWlnaHQ6IDg1cHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksXFxuICAgIDAgMXB4IDNweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XFxufVxcblxcbi5jaGFuZ2UtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiBpbmhlcml0O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgd2lkdGg6IDE4OHB4O1xcbn1cXG5cXG4udGl0bGUtZWRpdCB7XFxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogI2U3YzZlZDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5kdWUtZGF0ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC00MnB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNjNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW1hZ2VzLXVsIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM1ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI2U3YzZlZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW46IDlweCBhdXRvO1xcbiAgYWxpZ24tY29udGVudDogbm9ybWFsO1xcbn1cXG5cXG5pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiA1M3B4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA5cHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uZXhwYW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDUyNnB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG9wYWNpdHk6IHJldmVydDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XFxuICAwJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc0cHgpIHtcXG4gIC5pbnB1dC1mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbiAgI2Zvcm0tYm90dG9tLWlucHV0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNkdWUtZGF0ZS1pbnB1dCxcXG4gICNwcm9qZWN0LWlucHV0LFxcbiAgI2FkZC1idXR0b24ge1xcbiAgICB3aWR0aDogMTU4cHg7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICB9XFxuICAjYWRkLWJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5kZWxldGUtYnV0dG9uLFxcbiAgLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG4gICNpbWFnZXMtdWwge1xcbiAgICB3aWR0aDogMTgxcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUuY3NzXCJdLFwi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Q0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7O0lBR0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNlY3Rpb24tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9kaXN0LzkxNDkyM2NmOWE0OGEzOWQyYjEzOWUxMDgwZGNkMTQ4LmpwZykgbm8tcmVwZWF0IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGUtYmFyLW9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlN2M2ZWQsIHRyYW5zcGFyZW50KTtcXG4gIHBhZGRpbmc6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3B4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbnNlbGVjdCNwcm9qZWN0czpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaW5wdXQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLFxcbiAgICAwIDFweCAxcHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbn1cXG5cXG46OnNwZWxsaW5nLWVycm9yIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOXB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDlweDtcXG4gIGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW0ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbn1cXG5cXG4jdGl0bGUtaW5wdXQge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtOHB4O1xcbiAgbGVmdDogMjA0cHg7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI25vdGUtaW5wdXQge1xcbiAgbWFyZ2luOiAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDEwcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5ub3RlLWlucHV0IHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbn1cXG5cXG4ubm90ZS10aXRsZSB7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxucCB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4ubm90ZS10ZXh0IHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbjogM3B4IDBweCAxMHB4IDBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NoZWNrbGlzdC1kaXYge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLXRleHQge1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGRpbWdyYXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dC5jaGFuZ2UtaW5wdXQge1xcbiAgd2lkdGg6IDE1NnB4O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NoZWNrbGlzdC1pbnB1dCB7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuI2FkZC1idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jYWRkLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBwYWRkaW5nOiAxMXB4OyAqL1xcbn1cXG5cXG4jZm9ybS1ib3R0b20taW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtaW5wdXQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtaW4td2lkdGg6IDc1cHg7XFxuICBtaW4taGVpZ2h0OiA4NXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLFxcbiAgICAwIDFweCAzcHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNDkpO1xcbn1cXG5cXG4uY2hhbmdlLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAxODhweDtcXG59XFxuXFxuLnRpdGxlLWVkaXQge1xcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNlN2M2ZWQ7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uZHVlLWRhdGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDJweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWNoZWNrbGlzdC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTYzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2ltYWdlcy11bCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNlN2M2ZWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luOiA5cHggYXV0bztcXG4gIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcXG59XFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogNTNweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBtaW4td2lkdGg6IDIwNHB4O1xcbiAgd2lkdGg6IDIwOXB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLmV4cGFuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtaW4taGVpZ2h0OiA1MjZweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBvcGFjaXR5OiByZXZlcnQ7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluRnJvbU5vbmUge1xcbiAgMCUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMSUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NHB4KSB7XFxuICAuaW5wdXQtZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG4gICNmb3JtLWJvdHRvbS1pbnB1dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjZHVlLWRhdGUtaW5wdXQsXFxuICAjcHJvamVjdC1pbnB1dCxcXG4gICNhZGQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgfVxcbiAgI2FkZC1idXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZGVsZXRlLWJ1dHRvbixcXG4gIC5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICB9XFxuICAjaW1hZ2VzLXVsIHtcXG4gICAgd2lkdGg6IDE4MXB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQge2NyZWF0ZUNoZWNrbGlzdH0gZnJvbSAnLi9jaGVja2xpc3QnXG5pbXBvcnQge2xpc3RJdGVtRGF0YX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcbmltcG9ydCB7cmVuZGVyQWxsTm90ZXN9IGZyb20gJy4vcmVuZGVyX0RPTSdcbmltcG9ydCB7YWRkTGlzdEl0ZW19IGZyb20gJy4vZm9ybSdcblxuLy8gRE9NIHJlbGF0ZWQgZnVuY3Rpb25zIC8vXG5leHBvcnQgY29uc3QgdXBkYXRlRWxlbWVudENoZWNrbGlzdCA9IChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpID0+IHtcbiAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1bCR7bm90ZVdyYXBwZXIuaWR9YClcbiAgaWYocGFyZW50KXtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJydcbiAgICBpdGVtLmNoZWNrbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGxpc3RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxpc3RJdGVtRGl2LmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0nXG4gICAgICBsaXN0SXRlbURpdi5pZCA9IGluZGV4IFxuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNoZWNrbGlzdChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpXG4gICAgICBsaXN0SXRlbURpdi5hcHBlbmQoZWxlbWVudC5jaGVja2JveCwgZWxlbWVudC5saXN0QnVsbGV0LCBlbGVtZW50Lmxpc3RDaGFuZ2VJbnB1dCwgZWxlbWVudC5kZWxldGVMaXN0SXRlbUJ1dHRvbilcbiAgICAgIHBhcmVudC5hcHBlbmQobGlzdEl0ZW1EaXYpIFxuICB9KVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbGlzdC5pZCA9IGB1bCR7aW5kZXh9YFxuICAgIGl0ZW0uY2hlY2tsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgbGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGlzdEl0ZW1EaXYuY2xhc3NOYW1lID0gJ2xpc3QtaXRlbSdcbiAgICAgIGxpc3RJdGVtRGl2LmlkID0gaW5kZXggXG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcilcbiAgICAgIGxpc3RJdGVtRGl2LmFwcGVuZChlbGVtZW50LmNoZWNrYm94LCBlbGVtZW50Lmxpc3RCdWxsZXQsIGVsZW1lbnQubGlzdENoYW5nZUlucHV0LCBlbGVtZW50LmRlbGV0ZUxpc3RJdGVtQnV0dG9uKVxuICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW1EaXYpICAgXG4gIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5vdGUke2luZGV4fWApLmFwcGVuZChsaXN0KVxuICB9XG59XG5cbi8vIHJlbW92ZUNoZWNrbGlzdEl0ZW1FbGVtZW50XG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hlY2tsaXN0SXRlbUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlKClcbn1cblxuLy8gcmVtb3ZlIG5vdGUgZWxlbWVudFxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbG9zZXN0KFwiLm5vdGUtd3JhcHBlclwiKS5yZW1vdmUoKVxuICByZW5kZXJBbGxOb3RlcygpXG59XG5cbi8vIHVwZGF0ZXMgZWxlbWVudCBpbiBET01cbmV4cG9ydCBjb25zdCB1cGRhdGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IHByZXZpb3VzU2libGluZyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBwcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0ID0gZWxlbWVudC52YWx1ZVxufVxuXG4vLyBhZGQgZW50ZXIgZXZlbnQgdG8gY2hlY2tsaXN0IGlucHV0XG5leHBvcnQgY29uc3QgbGlzdElucHV0RXZlbnQgPSAoKSA9PiB7XG4gIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrbGlzdC1pbnB1dCcpXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZ0KSA9PiB7XG4gICAgaWYoZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICBhZGRMaXN0SXRlbShldnQudGFyZ2V0KVxuICAgICAgbGlzdEl0ZW1EYXRhLnB1c2goe25hbWU6IGV2dC50YXJnZXQudmFsdWUsIGNoZWNrZWQ6IGZhbHNlfSlcbiAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJ1xuICAgIH1cbiAgfSlcbn0iLCIvLyBpbWFnZXMgZXZlbnQgbGlzdGVuZXJzXG5leHBvcnQgY29uc3QgaW1hZ2VzRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGxldCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZ1wiKVxuICBpbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGNoYW5nZUJhY2tncm91bmRJbWcoZXZ0LnRhcmdldClcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGFuZ2VCYWNrZ3JvdW5kSW1nXG5jb25zdCBjaGFuZ2VCYWNrZ3JvdW5kSW1nID0gKGltZykgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICBgdXJsKC4vaW1nL2ltZyR7aW1nLmlkfS5qcGcpIG5vLXJlcGVhdCBmaXhlZGBcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJ1xufVxuIiwiaW1wb3J0IHt1cGRhdGVDaGVja2xpc3REYXRhLCB1cGRhdGVDaGVja2VkSXRlbSwgcmVtb3ZlQ2hlY2tsaXN0SXRlbURhdGF9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge3VwZGF0ZUVsZW1lbnQsIHJlbW92ZUNoZWNrbGlzdEl0ZW1FbGVtZW50fSBmcm9tICcuL0RPTV9tYW5pcHVsYXRpb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKSB7XG4gICAgbGV0IGxpc3RCdWxsZXQ7XG4gICAgbGV0IGxpc3RDaGFuZ2VJbnB1dDtcbiAgICBsZXQgY2hlY2tib3g7XG4gICAgbGV0IGRlbGV0ZUxpc3RJdGVtQnV0dG9uO1xuICAgIGxpc3RCdWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGlzdEJ1bGxldC5pbm5lclRleHQgPSBpdGVtLm5hbWVcbiAgICBsaXN0QnVsbGV0LmlkID0gaW5kZXhcbiAgICBsaXN0QnVsbGV0LmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0tdGV4dCdcbiAgICBsaXN0QnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgbGlzdENoYW5nZUlucHV0LmZvY3VzKClcbiAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSlcbiAgICBsaXN0QnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICB9KVxuICAgIGxpc3RCdWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0pXG4gICAgbGlzdENoYW5nZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGxpc3RDaGFuZ2VJbnB1dC52YWx1ZSA9IGl0ZW0ubmFtZVxuICAgIGxpc3RDaGFuZ2VJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NOYW1lID0gJ2NoYW5nZS1pbnB1dCdcbiAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgbGlzdENoYW5nZUlucHV0LmlkID0gaW5kZXggIFxuICAgIGxpc3RDaGFuZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICAgIGlmKGV2dC5rZXkgPT09ICdFbnRlcicgJiYgZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgICB1cGRhdGVDaGVja2xpc3REYXRhKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgXG4gICAgbGlzdENoYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZ0KSA9PiB7XG4gICAgICBpZihldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICAgIHVwZGF0ZUNoZWNrbGlzdERhdGEoZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICAgICAgbGlzdENoYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2NoZWNrYm94J1xuICAgIGNoZWNrYm94LmlkID0gaW5kZXhcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgIGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgaWYoaXRlbS5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlXG4gICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgIH1cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGlmKGxpc3RCdWxsZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpe1xuICAgICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuICAgICAgICB1cGRhdGVDaGVja2VkSXRlbShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpXG4gICAgICAgIHVwZGF0ZUNoZWNrZWRJdGVtKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmlubmVySFRNTCA9ICd4J1xuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmlkID0gaW5kZXhcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWNoZWNrbGlzdC1idXR0b24nXG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICByZW1vdmVDaGVja2xpc3RJdGVtRGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlcilcbiAgICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW1FbGVtZW50KGV2dC50YXJnZXQpXG4gICAgfSlcbiAgICByZXR1cm57XG4gICAgICBjaGVja2JveCwgbGlzdEJ1bGxldCwgbGlzdENoYW5nZUlucHV0LCBkZWxldGVMaXN0SXRlbUJ1dHRvblxuICAgIH1cbiAgfSIsImltcG9ydCB7cmVuZGVyQWxsTm90ZXN9IGZyb20gJy4vcmVuZGVyX0RPTSdcbmltcG9ydCB7bm90ZXN9IGZyb20gJy4vaW5kZXgnXG5cbi8vIGN1cnJlbnQgaW5wdXQgbGlzdCBcbmV4cG9ydCBsZXQgbGlzdEl0ZW1EYXRhID0gW11cblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgbm90ZXNcbmNvbnN0IE5vdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja2xpc3QsIGR1ZURhdGUsIHByb2plY3QpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb24sIFxuICAgIGNoZWNrbGlzdCxcbiAgICBkdWVEYXRlLCBcbiAgICBwcm9qZWN0XG4gIH1cbn1cblxuLy8gYWRkIG5vdGUgdG8gZGF0YVxuZXhwb3J0IGNvbnN0IGFkZE5vdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja2xpc3QsIGR1ZURhdGUsIHByb2plY3QpID0+IHtcbiAgaWYoZGVzY3JpcHRpb24gIT09ICcnIHx8IGNoZWNrbGlzdCE9PSAnJyl7XG4gICAgbm90ZXMudW5zaGlmdChOb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hlY2tsaXN0LCBkdWVEYXRlLCBwcm9qZWN0KSlcbiAgICByZW5kZXJBbGxOb3RlcygpXG4gIH1cbn1cblxuLy8gcmVtb3ZlIG5vdGUgZGF0YVxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGVEYXRhID0gKGVsZW1lbnQpID0+IHtcbiAgbm90ZXMuc3BsaWNlKGVsZW1lbnQuaWQsIDEpXG59XG5cbi8vIHJlbW92ZXMgY2hlY2tsaXN0IGl0ZW0gZnJvbSBkYXRhXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hlY2tsaXN0SXRlbURhdGEgPSAoZWxlbWVudCwgbm90ZSkgPT4ge1xuICBub3Rlc1tub3RlLmlkXS5jaGVja2xpc3QuZm9yRWFjaCgoaSwgaW5kZXgpID0+IHtcbiAgICBpZihpLm5hbWUgPT09IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lclRleHQpe1xuICAgICAgbm90ZXNbbm90ZS5pZF0uY2hlY2tsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH0pXG59XG5cbi8vIHVwZGF0ZXMgY2hlY2tlZCBjaGVja2xpc3QgaXRlbVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNoZWNrZWRJdGVtID0gKGVsZW1lbnQsIHBhcmVudEluZGV4KSA9PiB7XG4gIG5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3RbZWxlbWVudC5pZF0uY2hlY2tlZCA9ICFub3Rlc1twYXJlbnRJbmRleF0uY2hlY2tsaXN0W2VsZW1lbnQuaWRdLmNoZWNrZWQ7XG59XG5cbi8vIHVwZGF0ZXMgbm90ZSBkZXRhaWxzIC0+IHRpdGxlIG9yIG5vdGVcbmV4cG9ydCBjb25zdCB1cGRhdGVEYXRhID0gKGVsZW1lbnQsIGRldGFpbCkgPT4ge1xuICBub3Rlc1tlbGVtZW50LmlkXVtkZXRhaWxdID0gZWxlbWVudC52YWx1ZVxufVxuXG4vLyB1cGRhdGVzIGNoZWNrbGlzdCBpdGVtIHZhbHVlXG5leHBvcnQgY29uc3QgdXBkYXRlQ2hlY2tsaXN0RGF0YSA9IChlbGVtZW50LCBwYXJlbnRJbmRleCkgPT4ge1xuICBub3Rlc1twYXJlbnRJbmRleF0uY2hlY2tsaXN0W2VsZW1lbnQuaWRdLm5hbWUgPSBlbGVtZW50LnZhbHVlO1xufVxuXG4vLyBhZGQgYSBjaGVja2xpc3QgaXRlbSBcbmV4cG9ydCBjb25zdCBhZGRDaGVja2xpc3RJdGVtRGF0YSA9IChlbGVtZW50LCBwYXJlbnRJbmRleCkgPT4ge1xuICBub3Rlc1twYXJlbnRJbmRleF0uY2hlY2tsaXN0LnB1c2goe25hbWU6IGVsZW1lbnQudmFsdWUsIGNoZWNrZWQ6IGZhbHNlfSlcbn1cblxuLy8gdXBkYXRlIHRlbXBvcmFyeSBmb3JtIGNoZWNrbGlzdCB2YWx1ZXMgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGVja2xpc3RBcnJheShlbGVtZW50LCBuZXdWYWx1ZSl7XG4gIGxpc3RJdGVtRGF0YVtlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWRdLm5hbWUgPSBuZXdWYWx1ZS52YWx1ZVxufVxuXG5leHBvcnQgY29uc3QgcmVzZXRMaXN0SXRlbURhdGEgPSAoKSA9PiB7XG4gIGxpc3RJdGVtRGF0YSA9IFtdXG59IiwiaW1wb3J0IHt1cGRhdGVDaGVja2xpc3RBcnJheSwgYWRkTm90ZX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcbmltcG9ydCB7dXBkYXRlRWxlbWVudH0gZnJvbSAnLi9ET01fbWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHtsaXN0SXRlbURhdGEsIHJlc2V0TGlzdEl0ZW1EYXRhfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuXG4vLyBhZGRzIGxpc3QgaXRlbXMgb24gaW5wdXQgZm9ybVxuZXhwb3J0IGNvbnN0IGFkZExpc3RJdGVtID0gKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVyVGV4dCA9IGVsZW1lbnQudmFsdWVcbiAgICBsaS5jbGFzc05hbWUgPSAndGVtcG9yYXJ5LWZvcm0tbGlzdC1pdGVtJ1xuICAgIGxpLmlkID0gbGlzdEl0ZW1EYXRhLmxlbmd0aFxuICAgIGxldCBjaGFuZ2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoYW5nZUxpc3QuY2xhc3NOYW1lID0gJ2hpZGUnXG4gICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtaW5wdXQnKVxuICAgIGNoYW5nZUxpc3QudHlwZSA9ICd0ZXh0J1xuICAgIGNoYW5nZUxpc3QudmFsdWUgPSBlbGVtZW50LnZhbHVlXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIGNoYW5nZUxpc3QuZm9jdXMoKVxuICAgIH0pXG4gICAgY2hhbmdlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZXZlbnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICAgIHVwZGF0ZUNoZWNrbGlzdEFycmF5KGV2ZW50LnRhcmdldCwgY2hhbmdlTGlzdClcbiAgICAgICAgdXBkYXRlRWxlbWVudChldmVudC50YXJnZXQpXG4gICAgICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgY2hhbmdlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9PSAnJykge1xuICAgICAgICB1cGRhdGVDaGVja2xpc3RBcnJheShldmVudC50YXJnZXQsIGNoYW5nZUxpc3QpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZlbnQudGFyZ2V0KVxuICAgICAgICBjaGFuZ2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtZGl2JylcbiAgICBpbnB1dC5hcHBlbmQobGksIGNoYW5nZUxpc3QpXG59XG4gIFxuICBcbi8vIGdldHMgdXNlciBpbnB1dCBmb3IgdmFsdWVzXG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgbGV0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1pbnB1dCcpXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbScpXG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWlucHV0JylcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpXG5cbiAgYWRkTm90ZSh0aXRsZS52YWx1ZSwgbm90ZS52YWx1ZSwgbGlzdEl0ZW1EYXRhLCBkdWVEYXRlLnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcbiAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSlcbiAgdGl0bGUudmFsdWUgPSAnJ1xuICBub3RlLnZhbHVlID0gJydcbiAgZHVlRGF0ZS52YWx1ZSA9ICcnXG4gIHJlc2V0TGlzdEl0ZW1EYXRhKClcbiAgcHJvamVjdC52YWx1ZSA9ICcnXG59XG5cblxuLy8gcmVtb3ZlcyBoaWRlIGNsYXNzIGZyb20gZm9ybVxuY29uc3QgZGlzcGxheUlucHV0T3B0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGlucHV0Rm9ybSA9IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKSwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtaW5wdXQnKSwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIilcbiAgXVxuICBpbnB1dEZvcm0uZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9KVxufVxuXG4vLyBhZGRzIGhpZGUgY2xhc3MgdG8gZm9ybVxuY29uc3QgaGlkZUlucHV0T3B0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGlucHV0Rm9ybSA9IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKSwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtaW5wdXQnKSwgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIilcbiAgXVxuICBpbnB1dEZvcm0uZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICB9KVxufVxuXG4vLyBhZGQgZXZlbnQgdG8gbm90ZSBpbnB1dFxuZXhwb3J0IGNvbnN0IGFkZElucHV0RXZlbnQgPSAoKSA9PiB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWlucHV0Jyk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlJbnB1dE9wdGlvbnMoKVxuICB9KVxufVxuXG4vLyBhZGQgYnV0dG9uIGV2ZW50XG5leHBvcnQgY29uc3QgYWRkQnV0dG9uRXZlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgZ2V0SW5wdXQoKVxuICAgICAgaGlkZUlucHV0T3B0aW9ucygpXG4gICAgfSlcbiAgfVxuXG4gICIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtpbWFnZXNFdmVudExpc3RlbmVyc30gZnJvbSAnLi9iYWNrZ3JvdW5kX2ltYWdlcydcbmltcG9ydCB7YWRkSW5wdXRFdmVudCwgYWRkQnV0dG9uRXZlbnR9IGZyb20gJy4vZm9ybSdcbmltcG9ydCB7cmVuZGVyQWxsTm90ZXN9IGZyb20gJy4vcmVuZGVyX0RPTSdcbmltcG9ydCB7bGlzdElucHV0RXZlbnR9IGZyb20gJy4vRE9NX21hbmlwdWxhdGlvbidcbmltcG9ydCB7YWRkTm90ZX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcblxuXG4vLyBub3RlcyBkYXRhXG5leHBvcnQgbGV0IG5vdGVzID0gW107XG5cblxuYWRkTm90ZSgnTXkgU2hvcHBpbmcgTGlzdCcsICduZWVkIHRvIGdvIHRvIHRoYXQgbWFya2V0JywgW3tuYW1lOiBcIndheSBwcm90ZWluXCIsIGNoZWNrZWQ6IHRydWV9LCBcbntuYW1lOiBcInBhcGVyIHRvd2Vsc1wiLCBjaGVja2VkOiBmYWxzZX0sIHtuYW1lOiBcImFmdGVyIHNoYXZlXCIsIGNoZWNrZWQ6IHRydWV9LCB7bmFtZTogXCJicmVhZFwiLCBjaGVja2VkOiBmYWxzZX1dLCBcbicxNC8wNS8yMDIwJywgJ0J1eScpXG5cbmFkZE5vdGUoJ0Rpbm5lciBQbGFubmluZycsICdQbGFubmluZywgcHJlcGFyaW5nLCBhbmQgcG9ydGlvbmluZyB5b3VyIG1lYWxzIGFoZWFkIG9mIHRpbWUgaXMgb25lIG9mIHRoZSBtb3N0IGVmZmVjdGl2ZSB0b29scyBmb3Iga2VlcGluZyB5b3VyIGZvb2QgYnVkZ2V0IGluIGNoZWNrJywgXG5bXSwgJzEyLzAyLzIwMjAnLCAnZGlubmVyJylcblxuaW1hZ2VzRXZlbnRMaXN0ZW5lcnMoKVxubGlzdElucHV0RXZlbnQoKVxuYWRkSW5wdXRFdmVudCgpXG5hZGRCdXR0b25FdmVudCgpXG5yZW5kZXJBbGxOb3RlcygpXG5cblxuXG4iLCJpbXBvcnQge25vdGVzfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHtjcmVhdGVDaGVja2xpc3R9IGZyb20gJy4vY2hlY2tsaXN0J1xuaW1wb3J0IHtyZW1vdmVOb3RlRWxlbWVudCwgdXBkYXRlRWxlbWVudCwgdXBkYXRlRWxlbWVudENoZWNrbGlzdH0gZnJvbSAnLi9ET01fbWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHtyZW1vdmVOb3RlRGF0YSwgdXBkYXRlRGF0YSwgYWRkQ2hlY2tsaXN0SXRlbURhdGF9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5cbi8vIGRpc3BsYXkgYWxsIG5vdGVzIG9uIERPTVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFsbE5vdGVzKCkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpXG4gIGRpdi5pbm5lckhUTUwgPSAnJ1xuICBub3Rlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGxldCBub3RlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbm90ZVdyYXBwZXIuY2xhc3NOYW1lID0gJ25vdGUtd3JhcHBlcidcbiAgICBub3RlV3JhcHBlci5pZCA9IGluZGV4XG4gICAgbm90ZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgfSlcbiAgICBub3RlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgZGVsZXRlTm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9KVxuXG4gICAgLy8gbm90ZSB0aXRsZSBcbiAgICBsZXQgdGl0bGUgPSAnJ1xuICAgIGlmKGl0ZW0udGl0bGUgIT09ICcnKXtcbiAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICB0aXRsZVRleHQuaW5uZXJUZXh0ID0gaXRlbS50aXRsZVxuICAgICAgdGl0bGVUZXh0LmNsYXNzTmFtZSA9ICdub3RlLXRpdGxlJ1xuICAgICAgdGl0bGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgdGl0bGVUZXh0SW5wdXQuZm9jdXMoKVxuICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICB9KVxuXG4gICAgICBsZXQgdGl0bGVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICB0aXRsZVRleHRJbnB1dC52YWx1ZSA9IHRpdGxlVGV4dC5pbm5lclRleHRcbiAgICAgIHRpdGxlVGV4dElucHV0LnNwZWxsY2hlY2sgPSBmYWxzZVxuICAgICAgdGl0bGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWlucHV0JywgJ3RpdGxlLWVkaXQnKVxuICAgICAgdGl0bGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICB0aXRsZVRleHRJbnB1dC5pZCA9IGluZGV4XG4gICAgICB0aXRsZVRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2dCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICAgICAgICB1cGRhdGVEYXRhKGV2dC50YXJnZXQsICd0aXRsZScpXG4gICAgICAgICAgdGl0bGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgfSlcbiAgICAgIHRpdGxlLmFwcGVuZCh0aXRsZVRleHQsIHRpdGxlVGV4dElucHV0KVxuICAgIH1cblxuICAgIC8vIGNoZWNrbGlzdCBzdHVmZlxuICAgIGxldCBsaXN0ID0gJydcbiAgICBpZihpdGVtLmNoZWNrbGlzdC5sZW5ndGggIT09IDApe1xuICAgICAgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgIGxpc3QuaWQgPSBgdWwke2luZGV4fWBcbiAgICAgIGl0ZW0uY2hlY2tsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxpc3RJdGVtRGl2LmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0nXG4gICAgICAgIGxpc3RJdGVtRGl2LmlkID0gaW5kZXggXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKVxuICAgICAgICBsaXN0SXRlbURpdi5hcHBlbmQoZWxlbWVudC5jaGVja2JveCwgZWxlbWVudC5saXN0QnVsbGV0LCBlbGVtZW50Lmxpc3RDaGFuZ2VJbnB1dCwgZWxlbWVudC5kZWxldGVMaXN0SXRlbUJ1dHRvbilcbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW1EaXYpXG4gICAgICB9KVxuICAgIH0gXG5cbiAgICAvLyBhZGQgY2hlY2tsaXN0IGl0ZW1cbiAgICBsZXQgYWRkQ2hlY2tsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBhZGRDaGVja2xpc3RJdGVtLnR5cGUgPSAndGV4dCdcbiAgICBhZGRDaGVja2xpc3RJdGVtLnBsYWNlaG9sZGVyID0gJ2FkZCBsaXN0IGl0ZW0nXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS5jbGFzc05hbWUgPSAnY2hhbmdlLWlucHV0J1xuICAgIGFkZENoZWNrbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZ0KSA9PiB7XG4gICAgICBpZihldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgICAgYWRkQ2hlY2tsaXN0SXRlbURhdGEoZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnRDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKVxuICAgICAgICBldnQudGFyZ2V0LnZhbHVlID0gJydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gJydcbiAgICBpZihpdGVtLmRlc2NyaXB0aW9uICE9PSAnJyl7XG4gICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBgbm90ZSR7aW5kZXh9YFxuICAgICAgbGV0IG5vdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBub3RlVGV4dC5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICBub3RlVGV4dC5jbGFzc05hbWUgPSAnbm90ZS10ZXh0J1xuICAgICAgbm90ZVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vdGVUZXh0SW5wdXQuZm9jdXMoKVxuICAgICAgICBub3RlVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIH0pXG4gICAgICBsZXQgbm90ZVRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgIG5vdGVUZXh0SW5wdXQudmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICBub3RlVGV4dElucHV0LmNsYXNzTmFtZSA9ICdjaGFuZ2UtaW5wdXQnXG4gICAgICBub3RlVGV4dElucHV0LnNwZWxsY2hlY2sgPSBmYWxzZVxuICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ25vdGUtaW5wdXQnKVxuICAgICAgbm90ZVRleHRJbnB1dC5pZCA9IGluZGV4XG4gICAgICBub3RlVGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZ0KSA9PiB7XG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICAgICAgdXBkYXRlRGF0YShldnQudGFyZ2V0LCAnZGVzY3JpcHRpb24nKVxuICAgICAgICBub3RlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBub3RlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH0pXG4gICAgICBkZXNjcmlwdGlvbi5hcHBlbmQobm90ZVRleHQsIG5vdGVUZXh0SW5wdXQpXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3QgPSAnJ1xuICAgIGlmKGl0ZW0ucHJvamVjdCAhPT0gJycpe1xuICAgICAgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgcHJvamVjdC5pbm5lclRleHQgPSBpdGVtLnByb2plY3RcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG4gICAgfVxuXG4gICAgbGV0IGR1ZURhdGUgPSAnJ1xuICAgIGlmKGl0ZW0uZHVlRGF0ZSAhPT0gJycpe1xuICAgICAgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdkdWUtZGF0ZS1kaXYnXG4gICAgICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBkdWUuaW5uZXJUZXh0ID0gaXRlbS5kdWVEYXRlXG4gICAgICBkdWUuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG4gICAgICBkdWUuaWQgPSAnZHVlLWRhdGUnIFxuICAgICAgZHVlRGF0ZS5hcHBlbmQocHJvamVjdCwgZHVlKVxuICAgIH1cblxuICAgIGxldCBkZWxldGVOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVOb3RlQnV0dG9uLmlubmVySFRNTCA9ICd4J1xuICAgIGRlbGV0ZU5vdGVCdXR0b24uaWQgPSBpbmRleFxuICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1idXR0b24nXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBkZWxldGVOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgcmVtb3ZlTm90ZURhdGEoZXZ0LnRhcmdldClcbiAgICAgIHJlbW92ZU5vdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgfSlcblxuICAgIGlmKGRlc2NyaXB0aW9uICE9PSAnJyB8fCBsaXN0ICE9PSAnJyl7XG4gICAgICBub3RlV3JhcHBlci5hcHBlbmQoZGVsZXRlTm90ZUJ1dHRvbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0LCBhZGRDaGVja2xpc3RJdGVtLCBkdWVEYXRlKVxuICAgICAgZGl2LmFwcGVuZChub3RlV3JhcHBlcilcbiAgICB9XG4gIH0pXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9