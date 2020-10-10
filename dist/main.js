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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody{\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed;\n  background-size: cover;\n  font-family: 'Montserrat', 'sans-serif';\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main{\n  display: flex;\n  height: 100vh;\n}\n\n.content{\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n\n.side-bar-option{\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel{\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n\n.input-form{\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60,64,67,0.302), 0 1px 1px 1px rgba(60,64,67,0.149);\n  height: fit-content;\n}\n\ninput{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n::spelling-error{\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n \n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item{\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input{\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field{\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n\n.delete-button{\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input{\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input{\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n.note-title{\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np{\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text{\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div{\n  text-align: left;\n}\n\n.checkbox{\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text{\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked{\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n    width: 156px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n\nli{\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input{\n  width: -webkit-fill-available;\n}\n\n#add-button{\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover{\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input{\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide{\n  display: none;\n}\n\n#project-input{\n  text-align: center;\n}\n\n.notes-container{\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper{\n    max-width: 190px;\n    max-height: 650px;\n    border-radius: 5px;\n    padding-top: 0px;\n    margin-top: 0;\n    background-color: var(--section-color);\n    padding: 16px;\n    min-width: 75px;\n    min-height: 85px;\n    width: -webkit-fill-available;\n    flex-direction: column;\n    display: flex;\n    position: relative;\n    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);\n}\n\n.change-input{\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit{\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project{\n  background: #E7C6ED;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n\n.due-date-div{\n  display: flex;\n  gap: 10px;\n  /* background: antiquewhite; */\n  /* border-radius: 10px; */\n  /* text-align: center; */\n  /* flex-shrink: 0; */\n  /* width: fit-content; */\n  /* font-size: small; */\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item{\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button{\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  gap: 2px;\n  flex-direction: row;\n  margin-top: 21px;\n  flex-wrap: wrap;\n  background: #E7C6ED;\n  padding: 10px;\n  border-radius: 10px;\n  width: fit-content;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg{\n  cursor: pointer;\n}\n\n\n.img{\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover{transform: scale(1.1);} \n\n.side-bar{\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand{\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px){\n  .input-form{\n    width: 250px;\n  }\n  #form-bottom-input{\n    flex-direction: column;\n  }\n  #due-date-input, #project-input, #add-button{\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button{\n    text-align: center;\n  }\n  .delete-button, .delete-checklist-button{\n    display: initial;\n  }\n  #images-ul{\n    width: 181px;\n  }\n} ", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody{\n  background: url(../dist/914923cf9a48a39d2b139e1080dcd148.jpg) no-repeat fixed;\n  background-size: cover;\n  font-family: 'Montserrat', 'sans-serif';\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main{\n  display: flex;\n  height: 100vh;\n}\n\n.content{\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n\n.side-bar-option{\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel{\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n\n.input-form{\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60,64,67,0.302), 0 1px 1px 1px rgba(60,64,67,0.149);\n  height: fit-content;\n}\n\ninput{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n::spelling-error{\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n \n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item{\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input{\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field{\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n\n.delete-button{\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input{\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input{\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n.note-title{\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np{\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text{\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div{\n  text-align: left;\n}\n\n.checkbox{\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text{\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked{\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n    width: 156px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n\nli{\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input{\n  width: -webkit-fill-available;\n}\n\n#add-button{\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover{\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input{\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide{\n  display: none;\n}\n\n#project-input{\n  text-align: center;\n}\n\n.notes-container{\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper{\n    max-width: 190px;\n    max-height: 650px;\n    border-radius: 5px;\n    padding-top: 0px;\n    margin-top: 0;\n    background-color: var(--section-color);\n    padding: 16px;\n    min-width: 75px;\n    min-height: 85px;\n    width: -webkit-fill-available;\n    flex-direction: column;\n    display: flex;\n    position: relative;\n    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);\n}\n\n.change-input{\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit{\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project{\n  background: #E7C6ED;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n\n.due-date-div{\n  display: flex;\n  gap: 10px;\n  /* background: antiquewhite; */\n  /* border-radius: 10px; */\n  /* text-align: center; */\n  /* flex-shrink: 0; */\n  /* width: fit-content; */\n  /* font-size: small; */\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item{\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button{\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  gap: 2px;\n  flex-direction: row;\n  margin-top: 21px;\n  flex-wrap: wrap;\n  background: #E7C6ED;\n  padding: 10px;\n  border-radius: 10px;\n  width: fit-content;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg{\n  cursor: pointer;\n}\n\n\n.img{\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover{transform: scale(1.1);} \n\n.side-bar{\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand{\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px){\n  .input-form{\n    width: 250px;\n  }\n  #form-bottom-input{\n    flex-direction: column;\n  }\n  #due-date-input, #project-input, #add-button{\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button{\n    text-align: center;\n  }\n  .delete-button, .delete-checklist-button{\n    display: initial;\n  }\n  #images-ul{\n    width: 181px;\n  }\n} "],"sourceRoot":""}]);
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
    parent.remove()
  }
  if(item.checklist.length !== 0){
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
/*! exports provided: listItemData, addNote, removeNoteData, removeChecklistItemData, updateCheckedItem, updateData, updateChecklistData, addChecklistItemData, updateChecklistArray */
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
  _data_manipulation__WEBPACK_IMPORTED_MODULE_0__["listItemData"].length = 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC85MTQ5MjNjZjlhNDhhMzlkMmIxMzllMTA4MGRjZDE0OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9ET01fbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhX21hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcl9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtB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QU87QUFDUCxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBb0I7QUFDNUIsUUFBUSxnRkFBc0I7QUFDOUI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFhO0FBQ3JCLFFBQVEscUVBQVU7QUFDbEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlFQUFjO0FBQ3BCLE1BQU0sMkVBQWlCO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hJQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNDkyM2NmOWE0OGEzOWQyYjEzOWUxMDgwZGNkMTQ4LmpwZ1wiOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2Rpc3QvOTE0OTIzY2Y5YTQ4YTM5ZDJiMTM5ZTEwODBkY2QxNDguanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zZWN0aW9uLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuYm9keXtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5zaWRlLWJhci1vcHRpb257XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlN2M2ZWQsIHRyYW5zcGFyZW50KTtcXG4gIHBhZGRpbmc6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3B4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbnNlbGVjdCNwcm9qZWN0czpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5sYWJlbHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcblxcbi5pbnB1dC1mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMS43cyBlYXNlLWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggMXB4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmlucHV0e1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG46OnNwZWxsaW5nLWVycm9ye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA5cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogOXB4O1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW17XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxufVxcblxcbiN0aXRsZS1pbnB1dHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuXFxuLmRlbGV0ZS1idXR0b257XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAyMDRweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbiNub3RlLWlucHV0e1xcbiAgbWFyZ2luOiAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDEwcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5ub3RlLWlucHV0e1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOjpwbGFjZWhvbGRlcntcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLm5vdGUtdGl0bGV7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxucHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5ub3RlLXRleHR7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBtYXJnaW46IDNweCAwcHggMTBweCAwcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjaGVja2xpc3QtZGl2e1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbi5saXN0LWl0ZW0tdGV4dHtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgd2lkdGg6IDE0OHB4O1xcbn1cXG5cXG4uY2hlY2tlZHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGRpbWdyYXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dC5jaGFuZ2UtaW5wdXQge1xcbiAgICB3aWR0aDogMTU2cHg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxubGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2hlY2tsaXN0LWlucHV0e1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbiNhZGQtYnV0dG9ue1xcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jYWRkLWJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIHBhZGRpbmc6IDExcHg7ICovXFxufVxcblxcbiNmb3JtLWJvdHRvbS1pbnB1dHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5oaWRle1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtaW5wdXR7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3Rlcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGUtd3JhcHBlcntcXG4gICAgbWF4LXdpZHRoOiAxOTBweDtcXG4gICAgbWF4LWhlaWdodDogNjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIG1pbi13aWR0aDogNzVweDtcXG4gICAgbWluLWhlaWdodDogODVweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywwLjMwMiksIDAgMXB4IDNweCAxcHggcmdiYSg2MCw2NCw2NywwLjE0OSk7XFxufVxcblxcbi5jaGFuZ2UtaW5wdXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB3aWR0aDogMTg4cHg7XFxufVxcblxcbi50aXRsZS1lZGl0e1xcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgYmFja2dyb3VuZDogI0U3QzZFRDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcblxcbi5kdWUtZGF0ZS1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIC8qIGZsZXgtc2hyaW5rOiAwOyAqL1xcbiAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbiAgLyogZm9udC1zaXplOiBzbWFsbDsgKi9cXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5saXN0LWl0ZW17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTQycHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTYzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW1hZ2VzLXVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBnYXA6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAyMXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI0U3QzZFRDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW46IDlweCBhdXRvO1xcbiAgYWxpZ24tY29udGVudDogbm9ybWFsO1xcbn1cXG5cXG5pbWd7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5pbWd7XFxuICB3aWR0aDogNTNweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW1nOmhvdmVye3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9IFxcblxcbi5zaWRlLWJhcntcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBtaW4td2lkdGg6IDIwNHB4O1xcbiAgd2lkdGg6IDIwOXB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLmV4cGFuZHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDUyNnB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG9wYWNpdHk6IHJldmVydDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XFxuICAwJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc0cHgpe1xcbiAgLmlucHV0LWZvcm17XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG4gICNmb3JtLWJvdHRvbS1pbnB1dHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNkdWUtZGF0ZS1pbnB1dCwgI3Byb2plY3QtaW5wdXQsICNhZGQtYnV0dG9ue1xcbiAgICB3aWR0aDogMTU4cHg7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICB9XFxuICAjYWRkLWJ1dHRvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmRlbGV0ZS1idXR0b24sIC5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG4gICNpbWFnZXMtdWx7XFxuICAgIHdpZHRoOiAxODFweDtcXG4gIH1cXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUVBQTZFO0VBQzdFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSx3REFBd0Q7RUFDeEQsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9GQUFvRjtFQUNwRixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7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RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsVUFBVSxxQkFBcUIsQ0FBQzs7QUFFaEM7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zZWN0aW9uLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuYm9keXtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9kaXN0LzkxNDkyM2NmOWE0OGEzOWQyYjEzOWUxMDgwZGNkMTQ4LmpwZykgbm8tcmVwZWF0IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi5zaWRlLWJhci1vcHRpb257XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlN2M2ZWQsIHRyYW5zcGFyZW50KTtcXG4gIHBhZGRpbmc6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3B4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbnNlbGVjdCNwcm9qZWN0czpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5sYWJlbHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcblxcbi5pbnB1dC1mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluRnJvbU5vbmUgMS43cyBlYXNlLWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggMXB4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmlucHV0e1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG46OnNwZWxsaW5nLWVycm9ye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA5cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogOXB4O1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW17XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxufVxcblxcbiN0aXRsZS1pbnB1dHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmlucHV0LWZpZWxke1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuXFxuLmRlbGV0ZS1idXR0b257XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAyMDRweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbiNub3RlLWlucHV0e1xcbiAgbWFyZ2luOiAwcHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDEwcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5ub3RlLWlucHV0e1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOjpwbGFjZWhvbGRlcntcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLm5vdGUtdGl0bGV7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxucHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5ub3RlLXRleHR7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBtYXJnaW46IDNweCAwcHggMTBweCAwcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjaGVja2xpc3QtZGl2e1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcblxcbi5saXN0LWl0ZW0tdGV4dHtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgd2lkdGg6IDE0OHB4O1xcbn1cXG5cXG4uY2hlY2tlZHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGRpbWdyYXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiM2IyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dC5jaGFuZ2UtaW5wdXQge1xcbiAgICB3aWR0aDogMTU2cHg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxubGl7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2hlY2tsaXN0LWlucHV0e1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbiNhZGQtYnV0dG9ue1xcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jYWRkLWJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIHBhZGRpbmc6IDExcHg7ICovXFxufVxcblxcbiNmb3JtLWJvdHRvbS1pbnB1dHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5oaWRle1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtaW5wdXR7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3Rlcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGUtd3JhcHBlcntcXG4gICAgbWF4LXdpZHRoOiAxOTBweDtcXG4gICAgbWF4LWhlaWdodDogNjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIG1pbi13aWR0aDogNzVweDtcXG4gICAgbWluLWhlaWdodDogODVweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywwLjMwMiksIDAgMXB4IDNweCAxcHggcmdiYSg2MCw2NCw2NywwLjE0OSk7XFxufVxcblxcbi5jaGFuZ2UtaW5wdXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB3aWR0aDogMTg4cHg7XFxufVxcblxcbi50aXRsZS1lZGl0e1xcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDVweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgYmFja2dyb3VuZDogI0U3QzZFRDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcblxcbi5kdWUtZGF0ZS1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIC8qIGZsZXgtc2hyaW5rOiAwOyAqL1xcbiAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbiAgLyogZm9udC1zaXplOiBzbWFsbDsgKi9cXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxufVxcblxcbi5saXN0LWl0ZW17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTQycHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTYzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaW1hZ2VzLXVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBnYXA6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAyMXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogI0U3QzZFRDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW46IDlweCBhdXRvO1xcbiAgYWxpZ24tY29udGVudDogbm9ybWFsO1xcbn1cXG5cXG5pbWd7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5pbWd7XFxuICB3aWR0aDogNTNweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW1nOmhvdmVye3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9IFxcblxcbi5zaWRlLWJhcntcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBtaW4td2lkdGg6IDIwNHB4O1xcbiAgd2lkdGg6IDIwOXB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLmV4cGFuZHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDUyNnB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG9wYWNpdHk6IHJldmVydDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Gcm9tTm9uZSB7XFxuICAwJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc0cHgpe1xcbiAgLmlucHV0LWZvcm17XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG4gICNmb3JtLWJvdHRvbS1pbnB1dHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNkdWUtZGF0ZS1pbnB1dCwgI3Byb2plY3QtaW5wdXQsICNhZGQtYnV0dG9ue1xcbiAgICB3aWR0aDogMTU4cHg7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICB9XFxuICAjYWRkLWJ1dHRvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmRlbGV0ZS1idXR0b24sIC5kZWxldGUtY2hlY2tsaXN0LWJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG4gICNpbWFnZXMtdWx7XFxuICAgIHdpZHRoOiAxODFweDtcXG4gIH1cXG59IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7Y3JlYXRlQ2hlY2tsaXN0fSBmcm9tICcuL2NoZWNrbGlzdCdcbmltcG9ydCB7bGlzdEl0ZW1EYXRhfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHtyZW5kZXJBbGxOb3Rlc30gZnJvbSAnLi9yZW5kZXJfRE9NJ1xuaW1wb3J0IHthZGRMaXN0SXRlbX0gZnJvbSAnLi9mb3JtJ1xuXG4vLyBET00gcmVsYXRlZCBmdW5jdGlvbnMgLy9cbmV4cG9ydCBjb25zdCB1cGRhdGVFbGVtZW50Q2hlY2tsaXN0ID0gKGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcikgPT4ge1xuICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VsJHtub3RlV3JhcHBlci5pZH1gKVxuICBpZihwYXJlbnQpe1xuICAgIHBhcmVudC5yZW1vdmUoKVxuICB9XG4gIGlmKGl0ZW0uY2hlY2tsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0LmlkID0gYHVsJHtpbmRleH1gXG4gICAgaXRlbS5jaGVja2xpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBsaXN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsaXN0SXRlbURpdi5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJ1xuICAgICAgbGlzdEl0ZW1EaXYuaWQgPSBpbmRleCBcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKVxuICAgICAgbGlzdEl0ZW1EaXYuYXBwZW5kKGVsZW1lbnQuY2hlY2tib3gsIGVsZW1lbnQubGlzdEJ1bGxldCwgZWxlbWVudC5saXN0Q2hhbmdlSW5wdXQsIGVsZW1lbnQuZGVsZXRlTGlzdEl0ZW1CdXR0b24pXG4gICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbURpdilcbiAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubm90ZSR7aW5kZXh9YCkuYXBwZW5kKGxpc3QpXG4gIH1cbn1cblxuLy8gcmVtb3ZlQ2hlY2tsaXN0SXRlbUVsZW1lbnRcbmV4cG9ydCBjb25zdCByZW1vdmVDaGVja2xpc3RJdGVtRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmUoKVxufVxuXG4vLyByZW1vdmUgbm90ZSBlbGVtZW50XG5leHBvcnQgY29uc3QgcmVtb3ZlTm90ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmNsb3Nlc3QoXCIubm90ZS13cmFwcGVyXCIpLnJlbW92ZSgpXG4gIHJlbmRlckFsbE5vdGVzKClcbn1cblxuLy8gdXBkYXRlcyBlbGVtZW50IGluIERPTVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIHByZXZpb3VzU2libGluZy5pbm5lclRleHQgPSBlbGVtZW50LnZhbHVlXG59XG5cbi8vIGFkZCBlbnRlciBldmVudCB0byBjaGVja2xpc3QgaW5wdXRcbmV4cG9ydCBjb25zdCBsaXN0SW5wdXRFdmVudCA9ICgpID0+IHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JylcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICBpZihldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgIGFkZExpc3RJdGVtKGV2dC50YXJnZXQpXG4gICAgICBsaXN0SXRlbURhdGEucHVzaCh7bmFtZTogZXZ0LnRhcmdldC52YWx1ZSwgY2hlY2tlZDogZmFsc2V9KVxuICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnXG4gICAgfVxuICB9KVxufSIsIi8vIGltYWdlcyBldmVudCBsaXN0ZW5lcnNcbmV4cG9ydCBjb25zdCBpbWFnZXNFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbGV0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nXCIpXG4gIGltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgY2hhbmdlQmFja2dyb3VuZEltZyhldnQudGFyZ2V0KVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIGNoYW5nZUJhY2tncm91bmRJbWdcbmNvbnN0IGNoYW5nZUJhY2tncm91bmRJbWcgPSAoaW1nKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gIGB1cmwoLi9pbWcvaW1nJHtpbWcuaWR9LmpwZykgbm8tcmVwZWF0IGZpeGVkYFxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInXG59XG4iLCJpbXBvcnQge3VwZGF0ZUNoZWNrbGlzdERhdGEsIHVwZGF0ZUNoZWNrZWRJdGVtLCByZW1vdmVDaGVja2xpc3RJdGVtRGF0YX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcbmltcG9ydCB7dXBkYXRlRWxlbWVudCwgcmVtb3ZlQ2hlY2tsaXN0SXRlbUVsZW1lbnR9IGZyb20gJy4vRE9NX21hbmlwdWxhdGlvbidcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrbGlzdChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpIHtcbiAgICBsZXQgbGlzdEJ1bGxldDtcbiAgICBsZXQgbGlzdENoYW5nZUlucHV0O1xuICAgIGxldCBjaGVja2JveDtcbiAgICBsZXQgZGVsZXRlTGlzdEl0ZW1CdXR0b247XG4gICAgbGlzdEJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0QnVsbGV0LmlubmVyVGV4dCA9IGl0ZW0ubmFtZVxuICAgIGxpc3RCdWxsZXQuaWQgPSBpbmRleFxuICAgIGxpc3RCdWxsZXQuY2xhc3NOYW1lID0gJ2xpc3QtaXRlbS10ZXh0J1xuICAgIGxpc3RCdWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBsaXN0Q2hhbmdlSW5wdXQuZm9jdXMoKVxuICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9KVxuICAgIGxpc3RCdWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH0pXG4gICAgbGlzdEJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSlcbiAgICBsaXN0Q2hhbmdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbGlzdENoYW5nZUlucHV0LnZhbHVlID0gaXRlbS5uYW1lXG4gICAgbGlzdENoYW5nZUlucHV0LnNwZWxsY2hlY2sgPSBmYWxzZVxuICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc05hbWUgPSAnY2hhbmdlLWlucHV0J1xuICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBsaXN0Q2hhbmdlSW5wdXQuaWQgPSBpbmRleCAgXG4gICAgbGlzdENoYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgICAgaWYoZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICAgIHVwZGF0ZUNoZWNrbGlzdERhdGEoZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICAgICAgbGlzdENoYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgICBcbiAgICBsaXN0Q2hhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldnQpID0+IHtcbiAgICAgIGlmKGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgICAgdXBkYXRlQ2hlY2tsaXN0RGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgICAgdXBkYXRlRWxlbWVudChldnQudGFyZ2V0KVxuICAgICAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9XG4gICAgfSlcbiAgICBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnY2hlY2tib3gnXG4gICAgY2hlY2tib3guaWQgPSBpbmRleFxuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgY2hlY2tib3guY2hlY2tlZDtcbiAgICBpZihpdGVtLmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWVcbiAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpXG4gICAgfVxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgaWYobGlzdEJ1bGxldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSl7XG4gICAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG4gICAgICAgIHVwZGF0ZUNoZWNrZWRJdGVtKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICAgICAgdXBkYXRlQ2hlY2tlZEl0ZW0oZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICB9XG4gICAgfSlcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uaW5uZXJIVE1MID0gJ3gnXG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uaWQgPSBpbmRleFxuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtY2hlY2tsaXN0LWJ1dHRvbidcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW1EYXRhKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyKVxuICAgICAgcmVtb3ZlQ2hlY2tsaXN0SXRlbUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICB9KVxuICAgIHJldHVybntcbiAgICAgIGNoZWNrYm94LCBsaXN0QnVsbGV0LCBsaXN0Q2hhbmdlSW5wdXQsIGRlbGV0ZUxpc3RJdGVtQnV0dG9uXG4gICAgfVxuICB9IiwiaW1wb3J0IHtyZW5kZXJBbGxOb3Rlc30gZnJvbSAnLi9yZW5kZXJfRE9NJ1xuaW1wb3J0IHtub3Rlc30gZnJvbSAnLi9pbmRleCdcblxuLy8gY3VycmVudCBpbnB1dCBsaXN0IFxuZXhwb3J0IGxldCBsaXN0SXRlbURhdGEgPSBbXVxuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBub3Rlc1xuY29uc3QgTm90ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCwgZHVlRGF0ZSwgcHJvamVjdCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbiwgXG4gICAgY2hlY2tsaXN0LFxuICAgIGR1ZURhdGUsIFxuICAgIHByb2plY3RcbiAgfVxufVxuXG4vLyBhZGQgbm90ZSB0byBkYXRhXG5leHBvcnQgY29uc3QgYWRkTm90ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCwgZHVlRGF0ZSwgcHJvamVjdCkgPT4ge1xuICBpZihkZXNjcmlwdGlvbiAhPT0gJycgfHwgY2hlY2tsaXN0IT09ICcnKXtcbiAgICBub3Rlcy51bnNoaWZ0KE5vdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja2xpc3QsIGR1ZURhdGUsIHByb2plY3QpKVxuICAgIHJlbmRlckFsbE5vdGVzKClcbiAgfVxufVxuXG4vLyByZW1vdmUgbm90ZSBkYXRhXG5leHBvcnQgY29uc3QgcmVtb3ZlTm90ZURhdGEgPSAoZWxlbWVudCkgPT4ge1xuICBub3Rlcy5zcGxpY2UoZWxlbWVudC5pZCwgMSlcbn1cblxuLy8gcmVtb3ZlcyBjaGVja2xpc3QgaXRlbSBmcm9tIGRhdGFcbmV4cG9ydCBjb25zdCByZW1vdmVDaGVja2xpc3RJdGVtRGF0YSA9IChlbGVtZW50LCBub3RlKSA9PiB7XG4gIG5vdGVzW25vdGUuaWRdLmNoZWNrbGlzdC5mb3JFYWNoKChpLCBpbmRleCkgPT4ge1xuICAgIGlmKGkubmFtZSA9PT0gZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmlubmVyVGV4dCl7XG4gICAgICBub3Rlc1tub3RlLmlkXS5jaGVja2xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gdXBkYXRlcyBjaGVja2VkIGNoZWNrbGlzdCBpdGVtXG5leHBvcnQgY29uc3QgdXBkYXRlQ2hlY2tlZEl0ZW0gPSAoZWxlbWVudCwgcGFyZW50SW5kZXgpID0+IHtcbiAgbm90ZXNbcGFyZW50SW5kZXhdLmNoZWNrbGlzdFtlbGVtZW50LmlkXS5jaGVja2VkID0gIW5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3RbZWxlbWVudC5pZF0uY2hlY2tlZDtcbn1cblxuLy8gdXBkYXRlcyBub3RlIGRldGFpbHMgLT4gdGl0bGUgb3Igbm90ZVxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhdGEgPSAoZWxlbWVudCwgZGV0YWlsKSA9PiB7XG4gIG5vdGVzW2VsZW1lbnQuaWRdW2RldGFpbF0gPSBlbGVtZW50LnZhbHVlXG59XG5cbi8vIHVwZGF0ZXMgY2hlY2tsaXN0IGl0ZW0gdmFsdWVcbmV4cG9ydCBjb25zdCB1cGRhdGVDaGVja2xpc3REYXRhID0gKGVsZW1lbnQsIHBhcmVudEluZGV4KSA9PiB7XG4gIG5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3RbZWxlbWVudC5pZF0ubmFtZSA9IGVsZW1lbnQudmFsdWU7XG59XG5cbi8vIGFkZCBhIGNoZWNrbGlzdCBpdGVtIFxuZXhwb3J0IGNvbnN0IGFkZENoZWNrbGlzdEl0ZW1EYXRhID0gKGVsZW1lbnQsIHBhcmVudEluZGV4KSA9PiB7XG4gIG5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3QucHVzaCh7bmFtZTogZWxlbWVudC52YWx1ZSwgY2hlY2tlZDogZmFsc2V9KVxufVxuXG4vLyB1cGRhdGUgdGVtcG9yYXJ5IGZvcm0gY2hlY2tsaXN0IHZhbHVlcyBhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoZWNrbGlzdEFycmF5KGVsZW1lbnQsIG5ld1ZhbHVlKXtcbiAgbGlzdEl0ZW1EYXRhW2VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pZF0ubmFtZSA9IG5ld1ZhbHVlLnZhbHVlXG59XG4iLCJpbXBvcnQge3VwZGF0ZUNoZWNrbGlzdEFycmF5LCBhZGROb3RlfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHt1cGRhdGVFbGVtZW50fSBmcm9tICcuL0RPTV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge2xpc3RJdGVtRGF0YX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcblxuLy8gYWRkcyBsaXN0IGl0ZW1zIG9uIGlucHV0IGZvcm1cbmV4cG9ydCBjb25zdCBhZGRMaXN0SXRlbSA9IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lclRleHQgPSBlbGVtZW50LnZhbHVlXG4gICAgbGkuY2xhc3NOYW1lID0gJ3RlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbSdcbiAgICBsaS5pZCA9IGxpc3RJdGVtRGF0YS5sZW5ndGhcbiAgICBsZXQgY2hhbmdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGFuZ2VMaXN0LmNsYXNzTmFtZSA9ICdoaWRlJ1xuICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWlucHV0JylcbiAgICBjaGFuZ2VMaXN0LnR5cGUgPSAndGV4dCdcbiAgICBjaGFuZ2VMaXN0LnZhbHVlID0gZWxlbWVudC52YWx1ZVxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICBjaGFuZ2VMaXN0LmZvY3VzKClcbiAgICB9KVxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgICB1cGRhdGVDaGVja2xpc3RBcnJheShldmVudC50YXJnZXQsIGNoYW5nZUxpc3QpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZlbnQudGFyZ2V0KVxuICAgICAgICBjaGFuZ2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdXBkYXRlQ2hlY2tsaXN0QXJyYXkoZXZlbnQudGFyZ2V0LCBjaGFuZ2VMaXN0KVxuICAgICAgICB1cGRhdGVFbGVtZW50KGV2ZW50LnRhcmdldClcbiAgICAgICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWRpdicpXG4gICAgaW5wdXQuYXBwZW5kKGxpLCBjaGFuZ2VMaXN0KVxufVxuICBcbiAgXG4vLyBnZXRzIHVzZXIgaW5wdXQgZm9yIHZhbHVlc1xuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGxldCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtaW5wdXQnKVxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKVxuICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW0nKVxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpXG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKVxuXG4gIGFkZE5vdGUodGl0bGUudmFsdWUsIG5vdGUudmFsdWUsIGxpc3RJdGVtRGF0YSwgZHVlRGF0ZS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG5cbiAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSlcbiAgdGl0bGUudmFsdWUgPSAnJ1xuICBub3RlLnZhbHVlID0gJydcbiAgZHVlRGF0ZS52YWx1ZSA9ICcnXG4gIGxpc3RJdGVtRGF0YS5sZW5ndGggPSAwXG4gIHByb2plY3QudmFsdWUgPSAnJ1xufVxuXG5cbi8vIHJlbW92ZXMgaGlkZSBjbGFzcyBmcm9tIGZvcm1cbmNvbnN0IGRpc3BsYXlJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkcyBoaWRlIGNsYXNzIHRvIGZvcm1cbmNvbnN0IGhpZGVJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkIGV2ZW50IHRvIG5vdGUgaW5wdXRcbmV4cG9ydCBjb25zdCBhZGRJbnB1dEV2ZW50ID0gKCkgPT4ge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1pbnB1dCcpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5SW5wdXRPcHRpb25zKClcbiAgfSlcbn1cblxuLy8gYWRkIGJ1dHRvbiBldmVudFxuZXhwb3J0IGNvbnN0IGFkZEJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGdldElucHV0KClcbiAgICAgIGhpZGVJbnB1dE9wdGlvbnMoKVxuICAgIH0pXG4gIH1cblxuICAiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW1hZ2VzRXZlbnRMaXN0ZW5lcnN9IGZyb20gJy4vYmFja2dyb3VuZF9pbWFnZXMnXG5pbXBvcnQge2FkZElucHV0RXZlbnQsIGFkZEJ1dHRvbkV2ZW50fSBmcm9tICcuL2Zvcm0nXG5pbXBvcnQge3JlbmRlckFsbE5vdGVzfSBmcm9tICcuL3JlbmRlcl9ET00nXG5pbXBvcnQge2xpc3RJbnB1dEV2ZW50fSBmcm9tICcuL0RPTV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge2FkZE5vdGV9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5cblxuLy8gbm90ZXMgZGF0YVxuZXhwb3J0IGxldCBub3RlcyA9IFtdO1xuXG5cbmFkZE5vdGUoJ015IFNob3BwaW5nIExpc3QnLCAnbmVlZCB0byBnbyB0byB0aGF0IG1hcmtldCcsIFt7bmFtZTogXCJ3YXkgcHJvdGVpblwiLCBjaGVja2VkOiB0cnVlfSwgXG57bmFtZTogXCJwYXBlciB0b3dlbHNcIiwgY2hlY2tlZDogZmFsc2V9LCB7bmFtZTogXCJhZnRlciBzaGF2ZVwiLCBjaGVja2VkOiB0cnVlfSwge25hbWU6IFwiYnJlYWRcIiwgY2hlY2tlZDogZmFsc2V9XSwgXG4nMTQvMDUvMjAyMCcsICdCdXknKVxuXG5hZGROb3RlKCdEaW5uZXIgUGxhbm5pbmcnLCAnUGxhbm5pbmcsIHByZXBhcmluZywgYW5kIHBvcnRpb25pbmcgeW91ciBtZWFscyBhaGVhZCBvZiB0aW1lIGlzIG9uZSBvZiB0aGUgbW9zdCBlZmZlY3RpdmUgdG9vbHMgZm9yIGtlZXBpbmcgeW91ciBmb29kIGJ1ZGdldCBpbiBjaGVjaycsIFxuW10sICcxMi8wMi8yMDIwJywgJ2Rpbm5lcicpXG5cbmltYWdlc0V2ZW50TGlzdGVuZXJzKClcbmxpc3RJbnB1dEV2ZW50KClcbmFkZElucHV0RXZlbnQoKVxuYWRkQnV0dG9uRXZlbnQoKVxucmVuZGVyQWxsTm90ZXMoKVxuXG5cblxuIiwiaW1wb3J0IHtub3Rlc30gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7Y3JlYXRlQ2hlY2tsaXN0fSBmcm9tICcuL2NoZWNrbGlzdCdcbmltcG9ydCB7cmVtb3ZlTm90ZUVsZW1lbnQsIHVwZGF0ZUVsZW1lbnQsIHVwZGF0ZUVsZW1lbnRDaGVja2xpc3R9IGZyb20gJy4vRE9NX21hbmlwdWxhdGlvbidcbmltcG9ydCB7cmVtb3ZlTm90ZURhdGEsIHVwZGF0ZURhdGEsIGFkZENoZWNrbGlzdEl0ZW1EYXRhfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuXG4vLyBkaXNwbGF5IGFsbCBub3RlcyBvbiBET01cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBbGxOb3RlcygpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKVxuICBkaXYuaW5uZXJIVE1MID0gJydcbiAgbm90ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBsZXQgbm90ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5vdGVXcmFwcGVyLmNsYXNzTmFtZSA9ICdub3RlLXdyYXBwZXInXG4gICAgbm90ZVdyYXBwZXIuaWQgPSBpbmRleFxuICAgIG5vdGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH0pXG4gICAgbm90ZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSlcblxuICAgIC8vIG5vdGUgdGl0bGUgXG4gICAgbGV0IHRpdGxlID0gJydcbiAgICBpZihpdGVtLnRpdGxlICE9PSAnJyl7XG4gICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9IGl0ZW0udGl0bGVcbiAgICAgIHRpdGxlVGV4dC5jbGFzc05hbWUgPSAnbm90ZS10aXRsZSdcbiAgICAgIHRpdGxlVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICB0aXRsZVRleHRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRpdGxlVGV4dElucHV0LmZvY3VzKClcbiAgICAgICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgfSlcblxuICAgICAgbGV0IHRpdGxlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgdGl0bGVUZXh0SW5wdXQudmFsdWUgPSB0aXRsZVRleHQuaW5uZXJUZXh0XG4gICAgICB0aXRsZVRleHRJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1pbnB1dCcsICd0aXRsZS1lZGl0JylcbiAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgdGl0bGVUZXh0SW5wdXQuaWQgPSBpbmRleFxuICAgICAgdGl0bGVUZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgICAgdXBkYXRlRGF0YShldnQudGFyZ2V0LCAndGl0bGUnKVxuICAgICAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH0pXG4gICAgICB0aXRsZS5hcHBlbmQodGl0bGVUZXh0LCB0aXRsZVRleHRJbnB1dClcbiAgICB9XG5cbiAgICAvLyBjaGVja2xpc3Qgc3R1ZmZcbiAgICBsZXQgbGlzdCA9ICcnXG4gICAgaWYoaXRlbS5jaGVja2xpc3QubGVuZ3RoICE9PSAwKXtcbiAgICAgIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICBsaXN0LmlkID0gYHVsJHtpbmRleH1gXG4gICAgICBpdGVtLmNoZWNrbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsaXN0SXRlbURpdi5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJ1xuICAgICAgICBsaXN0SXRlbURpdi5pZCA9IGluZGV4IFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcilcbiAgICAgICAgbGlzdEl0ZW1EaXYuYXBwZW5kKGVsZW1lbnQuY2hlY2tib3gsIGVsZW1lbnQubGlzdEJ1bGxldCwgZWxlbWVudC5saXN0Q2hhbmdlSW5wdXQsIGVsZW1lbnQuZGVsZXRlTGlzdEl0ZW1CdXR0b24pXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtRGl2KVxuICAgICAgfSlcbiAgICB9IFxuXG4gICAgLy8gYWRkIGNoZWNrbGlzdCBpdGVtXG4gICAgbGV0IGFkZENoZWNrbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS50eXBlID0gJ3RleHQnXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS5wbGFjZWhvbGRlciA9ICdhZGQgbGlzdCBpdGVtJ1xuICAgIGFkZENoZWNrbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NoYW5nZS1pbnB1dCdcbiAgICBhZGRDaGVja2xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgICAgaWYoZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICAgIGFkZENoZWNrbGlzdEl0ZW1EYXRhKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgICB1cGRhdGVFbGVtZW50Q2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcilcbiAgICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnXG4gICAgaWYoaXRlbS5kZXNjcmlwdGlvbiAhPT0gJycpe1xuICAgICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gYG5vdGUke2luZGV4fWBcbiAgICAgIGxldCBub3RlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgbm90ZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgbm90ZVRleHQuY2xhc3NOYW1lID0gJ25vdGUtdGV4dCdcbiAgICAgIG5vdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub3RlVGV4dElucHV0LmZvY3VzKClcbiAgICAgICAgbm90ZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICB9KVxuICAgICAgbGV0IG5vdGVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICBub3RlVGV4dElucHV0LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc05hbWUgPSAnY2hhbmdlLWlucHV0J1xuICAgICAgbm90ZVRleHRJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScsICdub3RlLWlucHV0JylcbiAgICAgIG5vdGVUZXh0SW5wdXQuaWQgPSBpbmRleFxuICAgICAgbm90ZVRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2dCkgPT4ge1xuICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgIHVwZGF0ZURhdGEoZXZ0LnRhcmdldCwgJ2Rlc2NyaXB0aW9uJylcbiAgICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbm90ZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9KVxuICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKG5vdGVUZXh0LCBub3RlVGV4dElucHV0KVxuICAgIH1cblxuICAgIGxldCBwcm9qZWN0ID0gJydcbiAgICBpZihpdGVtLnByb2plY3QgIT09ICcnKXtcbiAgICAgIHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gaXRlbS5wcm9qZWN0XG4gICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0J1xuICAgIH1cblxuICAgIGxldCBkdWVEYXRlID0gJydcbiAgICBpZihpdGVtLmR1ZURhdGUgIT09ICcnKXtcbiAgICAgIGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnZHVlLWRhdGUtZGl2J1xuICAgICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgZHVlLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZVxuICAgICAgZHVlLmNsYXNzTmFtZSA9ICdwcm9qZWN0J1xuICAgICAgZHVlLmlkID0gJ2R1ZS1kYXRlJyBcbiAgICAgIGR1ZURhdGUuYXBwZW5kKHByb2plY3QsIGR1ZSlcbiAgICB9XG5cbiAgICBsZXQgZGVsZXRlTm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5pbm5lckhUTUwgPSAneCdcbiAgICBkZWxldGVOb3RlQnV0dG9uLmlkID0gaW5kZXhcbiAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtYnV0dG9uJ1xuICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIHJlbW92ZU5vdGVEYXRhKGV2dC50YXJnZXQpXG4gICAgICByZW1vdmVOb3RlRWxlbWVudChldnQudGFyZ2V0KVxuICAgIH0pXG5cbiAgICBpZihkZXNjcmlwdGlvbiAhPT0gJycgfHwgbGlzdCAhPT0gJycpe1xuICAgICAgbm90ZVdyYXBwZXIuYXBwZW5kKGRlbGV0ZU5vdGVCdXR0b24sIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdCwgYWRkQ2hlY2tsaXN0SXRlbSwgZHVlRGF0ZSlcbiAgICAgIGRpdi5hcHBlbmQobm90ZVdyYXBwZXIpXG4gICAgfVxuICB9KVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==