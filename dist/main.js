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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC85MTQ5MjNjZjlhNDhhMzlkMmIxMzllMTA4MGRjZDE0OC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9ET01fbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhX21hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcl9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtB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QUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrRUFBZTtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQLEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUFvQjtBQUM1QixRQUFRLGdGQUFzQjtBQUM5QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQWE7QUFDckIsUUFBUSxxRUFBVTtBQUNsQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUVBQWM7QUFDcEIsTUFBTSwyRUFBaUI7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDeElBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTE0OTIzY2Y5YTQ4YTM5ZDJiMTM5ZTEwODBkY2QxNDguanBnXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vZGlzdC85MTQ5MjNjZjlhNDhhMzlkMmIxMzllMTA4MGRjZDE0OC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNlY3Rpb24tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnNpZGUtYmFyLW9wdGlvbntcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3YzZlZCwgdHJhbnNwYXJlbnQpO1xcbiAgcGFkZGluZzogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuc2VsZWN0I3Byb2plY3RzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmxhYmVse1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmlucHV0LWZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoNjAsNjQsNjcsMC4zMDIpLCAwIDFweCAxcHggMXB4IHJnYmEoNjAsNjQsNjcsMC4xNDkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXR7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbjo6c3BlbGxpbmctZXJyb3J7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDlweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbXtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG59XFxuXFxuI3RpdGxlLWlucHV0e1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG4gIGxlZnQ6IDIwNHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI25vdGUtaW5wdXR7XFxuICBtYXJnaW46IDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm5vdGUtaW5wdXR7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4ubm90ZS10aXRsZXtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5we1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLm5vdGUtdGV4dHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbjogM3B4IDBweCAxMHB4IDBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NoZWNrbGlzdC1kaXZ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuLmxpc3QtaXRlbS10ZXh0e1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbi5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZGltZ3JheTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LmNoYW5nZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxNTZweDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5saXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaGVja2xpc3QtaW5wdXR7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuI2FkZC1idXR0b257XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNhZGQtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogcGFkZGluZzogMTFweDsgKi9cXG59XFxuXFxuI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWluLXdpZHRoOiA3NXB4O1xcbiAgICBtaW4taGVpZ2h0OiA4NXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG59XFxuXFxuLmNoYW5nZS1pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAxODhweDtcXG59XFxuXFxuLnRpdGxlLWVkaXR7XFxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAvKiBmb250LXNpemU6IHNtYWxsOyAqL1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpc3QtaXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDJweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWNoZWNrbGlzdC1idXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNjNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbWFnZXMtdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIxcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbjogOXB4IGF1dG87XFxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XFxufVxcblxcbmltZ3tcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmltZ3tcXG4gIHdpZHRoOiA1M3B4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXJ7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO30gXFxuXFxuLnNpZGUtYmFye1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA5cHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uZXhwYW5ke1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogNTI2cHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgb3BhY2l0eTogcmV2ZXJ0O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDElIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XFxuICAuaW5wdXQtZm9ybXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbiAgI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2R1ZS1kYXRlLWlucHV0LCAjcHJvamVjdC1pbnB1dCwgI2FkZC1idXR0b257XFxuICAgIHdpZHRoOiAxNThweDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIH1cXG4gICNhZGQtYnV0dG9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZGVsZXRlLWJ1dHRvbiwgLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbiAgI2ltYWdlcy11bHtcXG4gICAgd2lkdGg6IDE4MXB4O1xcbiAgfVxcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtRUFBNkU7RUFDN0Usc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQUNiOzs7QUFHQTtFQUNFLHdEQUF3RDtFQUN4RCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0ZBQW9GO0VBQ3BGLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLHdCQUF3QjtBQUMx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QWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSxVQUFVLHFCQUFxQixDQUFDOztBQUVoQztFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNlY3Rpb24tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Rpc3QvOTE0OTIzY2Y5YTQ4YTM5ZDJiMTM5ZTEwODBkY2QxNDguanBnKSBuby1yZXBlYXQgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnNpZGUtYmFyLW9wdGlvbntcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3YzZlZCwgdHJhbnNwYXJlbnQpO1xcbiAgcGFkZGluZzogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuc2VsZWN0I3Byb2plY3RzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmxhYmVse1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmlucHV0LWZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoNjAsNjQsNjcsMC4zMDIpLCAwIDFweCAxcHggMXB4IHJnYmEoNjAsNjQsNjcsMC4xNDkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXR7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbjo6c3BlbGxpbmctZXJyb3J7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDlweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbXtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG59XFxuXFxuI3RpdGxlLWlucHV0e1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG4gIGxlZnQ6IDIwNHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI25vdGUtaW5wdXR7XFxuICBtYXJnaW46IDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm5vdGUtaW5wdXR7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4ubm90ZS10aXRsZXtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5we1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLm5vdGUtdGV4dHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbjogM3B4IDBweCAxMHB4IDBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NoZWNrbGlzdC1kaXZ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuLmxpc3QtaXRlbS10ZXh0e1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbi5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZGltZ3JheTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LmNoYW5nZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxNTZweDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5saXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaGVja2xpc3QtaW5wdXR7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuI2FkZC1idXR0b257XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNhZGQtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogcGFkZGluZzogMTFweDsgKi9cXG59XFxuXFxuI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWluLXdpZHRoOiA3NXB4O1xcbiAgICBtaW4taGVpZ2h0OiA4NXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG59XFxuXFxuLmNoYW5nZS1pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAxODhweDtcXG59XFxuXFxuLnRpdGxlLWVkaXR7XFxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAvKiBmb250LXNpemU6IHNtYWxsOyAqL1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpc3QtaXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDJweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWNoZWNrbGlzdC1idXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNjNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbWFnZXMtdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIxcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbjogOXB4IGF1dG87XFxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XFxufVxcblxcbmltZ3tcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmltZ3tcXG4gIHdpZHRoOiA1M3B4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXJ7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO30gXFxuXFxuLnNpZGUtYmFye1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA5cHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uZXhwYW5ke1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogNTI2cHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgb3BhY2l0eTogcmV2ZXJ0O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDElIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XFxuICAuaW5wdXQtZm9ybXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbiAgI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2R1ZS1kYXRlLWlucHV0LCAjcHJvamVjdC1pbnB1dCwgI2FkZC1idXR0b257XFxuICAgIHdpZHRoOiAxNThweDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIH1cXG4gICNhZGQtYnV0dG9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZGVsZXRlLWJ1dHRvbiwgLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbiAgI2ltYWdlcy11bHtcXG4gICAgd2lkdGg6IDE4MXB4O1xcbiAgfVxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHtjcmVhdGVDaGVja2xpc3R9IGZyb20gJy4vY2hlY2tsaXN0J1xuaW1wb3J0IHtsaXN0SXRlbURhdGF9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge3JlbmRlckFsbE5vdGVzfSBmcm9tICcuL3JlbmRlcl9ET00nXG5pbXBvcnQge2FkZExpc3RJdGVtfSBmcm9tICcuL2Zvcm0nXG5cbi8vIERPTSByZWxhdGVkIGZ1bmN0aW9ucyAvL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUVsZW1lbnRDaGVja2xpc3QgPSAoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKSA9PiB7XG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdWwke25vdGVXcmFwcGVyLmlkfWApXG4gIGlmKHBhcmVudCl7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnXG4gICAgaXRlbS5jaGVja2xpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBsaXN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsaXN0SXRlbURpdi5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJ1xuICAgICAgbGlzdEl0ZW1EaXYuaWQgPSBpbmRleCBcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKVxuICAgICAgbGlzdEl0ZW1EaXYuYXBwZW5kKGVsZW1lbnQuY2hlY2tib3gsIGVsZW1lbnQubGlzdEJ1bGxldCwgZWxlbWVudC5saXN0Q2hhbmdlSW5wdXQsIGVsZW1lbnQuZGVsZXRlTGlzdEl0ZW1CdXR0b24pXG4gICAgICBwYXJlbnQuYXBwZW5kKGxpc3RJdGVtRGl2KSBcbiAgfSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGxpc3QuaWQgPSBgdWwke2luZGV4fWBcbiAgICBpdGVtLmNoZWNrbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGxpc3RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxpc3RJdGVtRGl2LmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0nXG4gICAgICBsaXN0SXRlbURpdi5pZCA9IGluZGV4IFxuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNoZWNrbGlzdChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpXG4gICAgICBsaXN0SXRlbURpdi5hcHBlbmQoZWxlbWVudC5jaGVja2JveCwgZWxlbWVudC5saXN0QnVsbGV0LCBlbGVtZW50Lmxpc3RDaGFuZ2VJbnB1dCwgZWxlbWVudC5kZWxldGVMaXN0SXRlbUJ1dHRvbilcbiAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtRGl2KSAgIFxuICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ub3RlJHtpbmRleH1gKS5hcHBlbmQobGlzdClcbiAgfVxufVxuXG4vLyByZW1vdmVDaGVja2xpc3RJdGVtRWxlbWVudFxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoZWNrbGlzdEl0ZW1FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZSgpXG59XG5cbi8vIHJlbW92ZSBub3RlIGVsZW1lbnRcbmV4cG9ydCBjb25zdCByZW1vdmVOb3RlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xvc2VzdChcIi5ub3RlLXdyYXBwZXJcIikucmVtb3ZlKClcbiAgcmVuZGVyQWxsTm90ZXMoKVxufVxuXG4vLyB1cGRhdGVzIGVsZW1lbnQgaW4gRE9NXG5leHBvcnQgY29uc3QgdXBkYXRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgcHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dCA9IGVsZW1lbnQudmFsdWVcbn1cblxuLy8gYWRkIGVudGVyIGV2ZW50IHRvIGNoZWNrbGlzdCBpbnB1dFxuZXhwb3J0IGNvbnN0IGxpc3RJbnB1dEV2ZW50ID0gKCkgPT4ge1xuICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2xpc3QtaW5wdXQnKVxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgIGlmKGV2dC5rZXkgPT09ICdFbnRlcicgJiYgZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgYWRkTGlzdEl0ZW0oZXZ0LnRhcmdldClcbiAgICAgIGxpc3RJdGVtRGF0YS5wdXNoKHtuYW1lOiBldnQudGFyZ2V0LnZhbHVlLCBjaGVja2VkOiBmYWxzZX0pXG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gJydcbiAgICB9XG4gIH0pXG59IiwiLy8gaW1hZ2VzIGV2ZW50IGxpc3RlbmVyc1xuZXhwb3J0IGNvbnN0IGltYWdlc0V2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBsZXQgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWdcIilcbiAgaW1hZ2VzLmZvckVhY2goaW1nID0+IHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBjaGFuZ2VCYWNrZ3JvdW5kSW1nKGV2dC50YXJnZXQpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hhbmdlQmFja2dyb3VuZEltZ1xuY29uc3QgY2hhbmdlQmFja2dyb3VuZEltZyA9IChpbWcpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAgYHVybCguL2ltZy9pbWcke2ltZy5pZH0uanBnKSBuby1yZXBlYXQgZml4ZWRgXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcidcbn1cbiIsImltcG9ydCB7dXBkYXRlQ2hlY2tsaXN0RGF0YSwgdXBkYXRlQ2hlY2tlZEl0ZW0sIHJlbW92ZUNoZWNrbGlzdEl0ZW1EYXRhfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHt1cGRhdGVFbGVtZW50LCByZW1vdmVDaGVja2xpc3RJdGVtRWxlbWVudH0gZnJvbSAnLi9ET01fbWFuaXB1bGF0aW9uJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcikge1xuICAgIGxldCBsaXN0QnVsbGV0O1xuICAgIGxldCBsaXN0Q2hhbmdlSW5wdXQ7XG4gICAgbGV0IGNoZWNrYm94O1xuICAgIGxldCBkZWxldGVMaXN0SXRlbUJ1dHRvbjtcbiAgICBsaXN0QnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpc3RCdWxsZXQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXG4gICAgbGlzdEJ1bGxldC5pZCA9IGluZGV4XG4gICAgbGlzdEJ1bGxldC5jbGFzc05hbWUgPSAnbGlzdC1pdGVtLXRleHQnXG4gICAgbGlzdEJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgbGlzdENoYW5nZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGxpc3RDaGFuZ2VJbnB1dC5mb2N1cygpXG4gICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0pXG4gICAgbGlzdEJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgfSlcbiAgICBsaXN0QnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9KVxuICAgIGxpc3RDaGFuZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsaXN0Q2hhbmdlSW5wdXQudmFsdWUgPSBpdGVtLm5hbWVcbiAgICBsaXN0Q2hhbmdlSW5wdXQuc3BlbGxjaGVjayA9IGZhbHNlXG4gICAgbGlzdENoYW5nZUlucHV0LmNsYXNzTmFtZSA9ICdjaGFuZ2UtaW5wdXQnXG4gICAgbGlzdENoYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGxpc3RDaGFuZ2VJbnB1dC5pZCA9IGluZGV4ICBcbiAgICBsaXN0Q2hhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZ0KSA9PiB7XG4gICAgICBpZihldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgICAgdXBkYXRlQ2hlY2tsaXN0RGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgICAgdXBkYXRlRWxlbWVudChldnQudGFyZ2V0KVxuICAgICAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIFxuICAgIGxpc3RDaGFuZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2dCkgPT4ge1xuICAgICAgaWYoZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgICB1cGRhdGVDaGVja2xpc3REYXRhKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdjaGVja2JveCdcbiAgICBjaGVja2JveC5pZCA9IGluZGV4XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICBjaGVja2JveC5jaGVja2VkO1xuICAgIGlmKGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZVxuICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICB9XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBpZihsaXN0QnVsbGV0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKXtcbiAgICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICAgICAgdXBkYXRlQ2hlY2tlZEl0ZW0oZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgICAgICB1cGRhdGVDaGVja2VkSXRlbShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgIH1cbiAgICB9KVxuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5pbm5lckhUTUwgPSAneCdcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5pZCA9IGluZGV4XG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1jaGVja2xpc3QtYnV0dG9uJ1xuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgcmVtb3ZlQ2hlY2tsaXN0SXRlbURhdGEoZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIpXG4gICAgICByZW1vdmVDaGVja2xpc3RJdGVtRWxlbWVudChldnQudGFyZ2V0KVxuICAgIH0pXG4gICAgcmV0dXJue1xuICAgICAgY2hlY2tib3gsIGxpc3RCdWxsZXQsIGxpc3RDaGFuZ2VJbnB1dCwgZGVsZXRlTGlzdEl0ZW1CdXR0b25cbiAgICB9XG4gIH0iLCJpbXBvcnQge3JlbmRlckFsbE5vdGVzfSBmcm9tICcuL3JlbmRlcl9ET00nXG5pbXBvcnQge25vdGVzfSBmcm9tICcuL2luZGV4J1xuXG4vLyBjdXJyZW50IGlucHV0IGxpc3QgXG5leHBvcnQgbGV0IGxpc3RJdGVtRGF0YSA9IFtdXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIG5vdGVzXG5jb25zdCBOb3RlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hlY2tsaXN0LCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLCBcbiAgICBjaGVja2xpc3QsXG4gICAgZHVlRGF0ZSwgXG4gICAgcHJvamVjdFxuICB9XG59XG5cbi8vIGFkZCBub3RlIHRvIGRhdGFcbmV4cG9ydCBjb25zdCBhZGROb3RlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hlY2tsaXN0LCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XG4gIGlmKGRlc2NyaXB0aW9uICE9PSAnJyB8fCBjaGVja2xpc3QhPT0gJycpe1xuICAgIG5vdGVzLnVuc2hpZnQoTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCwgZHVlRGF0ZSwgcHJvamVjdCkpXG4gICAgcmVuZGVyQWxsTm90ZXMoKVxuICB9XG59XG5cbi8vIHJlbW92ZSBub3RlIGRhdGFcbmV4cG9ydCBjb25zdCByZW1vdmVOb3RlRGF0YSA9IChlbGVtZW50KSA9PiB7XG4gIG5vdGVzLnNwbGljZShlbGVtZW50LmlkLCAxKVxufVxuXG4vLyByZW1vdmVzIGNoZWNrbGlzdCBpdGVtIGZyb20gZGF0YVxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoZWNrbGlzdEl0ZW1EYXRhID0gKGVsZW1lbnQsIG5vdGUpID0+IHtcbiAgbm90ZXNbbm90ZS5pZF0uY2hlY2tsaXN0LmZvckVhY2goKGksIGluZGV4KSA9PiB7XG4gICAgaWYoaS5uYW1lID09PSBlbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uaW5uZXJUZXh0KXtcbiAgICAgIG5vdGVzW25vdGUuaWRdLmNoZWNrbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9KVxufVxuXG4vLyB1cGRhdGVzIGNoZWNrZWQgY2hlY2tsaXN0IGl0ZW1cbmV4cG9ydCBjb25zdCB1cGRhdGVDaGVja2VkSXRlbSA9IChlbGVtZW50LCBwYXJlbnRJbmRleCkgPT4ge1xuICBub3Rlc1twYXJlbnRJbmRleF0uY2hlY2tsaXN0W2VsZW1lbnQuaWRdLmNoZWNrZWQgPSAhbm90ZXNbcGFyZW50SW5kZXhdLmNoZWNrbGlzdFtlbGVtZW50LmlkXS5jaGVja2VkO1xufVxuXG4vLyB1cGRhdGVzIG5vdGUgZGV0YWlscyAtPiB0aXRsZSBvciBub3RlXG5leHBvcnQgY29uc3QgdXBkYXRlRGF0YSA9IChlbGVtZW50LCBkZXRhaWwpID0+IHtcbiAgbm90ZXNbZWxlbWVudC5pZF1bZGV0YWlsXSA9IGVsZW1lbnQudmFsdWVcbn1cblxuLy8gdXBkYXRlcyBjaGVja2xpc3QgaXRlbSB2YWx1ZVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNoZWNrbGlzdERhdGEgPSAoZWxlbWVudCwgcGFyZW50SW5kZXgpID0+IHtcbiAgbm90ZXNbcGFyZW50SW5kZXhdLmNoZWNrbGlzdFtlbGVtZW50LmlkXS5uYW1lID0gZWxlbWVudC52YWx1ZTtcbn1cblxuLy8gYWRkIGEgY2hlY2tsaXN0IGl0ZW0gXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tsaXN0SXRlbURhdGEgPSAoZWxlbWVudCwgcGFyZW50SW5kZXgpID0+IHtcbiAgbm90ZXNbcGFyZW50SW5kZXhdLmNoZWNrbGlzdC5wdXNoKHtuYW1lOiBlbGVtZW50LnZhbHVlLCBjaGVja2VkOiBmYWxzZX0pXG59XG5cbi8vIHVwZGF0ZSB0ZW1wb3JhcnkgZm9ybSBjaGVja2xpc3QgdmFsdWVzIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hlY2tsaXN0QXJyYXkoZWxlbWVudCwgbmV3VmFsdWUpe1xuICBsaXN0SXRlbURhdGFbZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkXS5uYW1lID0gbmV3VmFsdWUudmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0TGlzdEl0ZW1EYXRhID0gKCkgPT4ge1xuICBsaXN0SXRlbURhdGEgPSBbXVxufSIsImltcG9ydCB7dXBkYXRlQ2hlY2tsaXN0QXJyYXksIGFkZE5vdGV9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge3VwZGF0ZUVsZW1lbnR9IGZyb20gJy4vRE9NX21hbmlwdWxhdGlvbidcbmltcG9ydCB7bGlzdEl0ZW1EYXRhLCByZXNldExpc3RJdGVtRGF0YX0gZnJvbSAnLi9kYXRhX21hbmlwdWxhdGlvbidcblxuLy8gYWRkcyBsaXN0IGl0ZW1zIG9uIGlucHV0IGZvcm1cbmV4cG9ydCBjb25zdCBhZGRMaXN0SXRlbSA9IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lclRleHQgPSBlbGVtZW50LnZhbHVlXG4gICAgbGkuY2xhc3NOYW1lID0gJ3RlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbSdcbiAgICBsaS5pZCA9IGxpc3RJdGVtRGF0YS5sZW5ndGhcbiAgICBsZXQgY2hhbmdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGFuZ2VMaXN0LmNsYXNzTmFtZSA9ICdoaWRlJ1xuICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWlucHV0JylcbiAgICBjaGFuZ2VMaXN0LnR5cGUgPSAndGV4dCdcbiAgICBjaGFuZ2VMaXN0LnZhbHVlID0gZWxlbWVudC52YWx1ZVxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICBjaGFuZ2VMaXN0LmZvY3VzKClcbiAgICB9KVxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgICB1cGRhdGVDaGVja2xpc3RBcnJheShldmVudC50YXJnZXQsIGNoYW5nZUxpc3QpXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQoZXZlbnQudGFyZ2V0KVxuICAgICAgICBjaGFuZ2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdXBkYXRlQ2hlY2tsaXN0QXJyYXkoZXZlbnQudGFyZ2V0LCBjaGFuZ2VMaXN0KVxuICAgICAgICB1cGRhdGVFbGVtZW50KGV2ZW50LnRhcmdldClcbiAgICAgICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWRpdicpXG4gICAgaW5wdXQuYXBwZW5kKGxpLCBjaGFuZ2VMaXN0KVxufVxuICBcbiAgXG4vLyBnZXRzIHVzZXIgaW5wdXQgZm9yIHZhbHVlc1xuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGxldCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtaW5wdXQnKVxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKVxuICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW0nKVxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpXG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKVxuXG4gIGFkZE5vdGUodGl0bGUudmFsdWUsIG5vdGUudmFsdWUsIGxpc3RJdGVtRGF0YSwgZHVlRGF0ZS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG4gIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVtb3ZlKCkpXG4gIHRpdGxlLnZhbHVlID0gJydcbiAgbm90ZS52YWx1ZSA9ICcnXG4gIGR1ZURhdGUudmFsdWUgPSAnJ1xuICByZXNldExpc3RJdGVtRGF0YSgpXG4gIHByb2plY3QudmFsdWUgPSAnJ1xufVxuXG5cbi8vIHJlbW92ZXMgaGlkZSBjbGFzcyBmcm9tIGZvcm1cbmNvbnN0IGRpc3BsYXlJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkcyBoaWRlIGNsYXNzIHRvIGZvcm1cbmNvbnN0IGhpZGVJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkIGV2ZW50IHRvIG5vdGUgaW5wdXRcbmV4cG9ydCBjb25zdCBhZGRJbnB1dEV2ZW50ID0gKCkgPT4ge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1pbnB1dCcpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5SW5wdXRPcHRpb25zKClcbiAgfSlcbn1cblxuLy8gYWRkIGJ1dHRvbiBldmVudFxuZXhwb3J0IGNvbnN0IGFkZEJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGdldElucHV0KClcbiAgICAgIGhpZGVJbnB1dE9wdGlvbnMoKVxuICAgIH0pXG4gIH1cblxuICAiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW1hZ2VzRXZlbnRMaXN0ZW5lcnN9IGZyb20gJy4vYmFja2dyb3VuZF9pbWFnZXMnXG5pbXBvcnQge2FkZElucHV0RXZlbnQsIGFkZEJ1dHRvbkV2ZW50fSBmcm9tICcuL2Zvcm0nXG5pbXBvcnQge3JlbmRlckFsbE5vdGVzfSBmcm9tICcuL3JlbmRlcl9ET00nXG5pbXBvcnQge2xpc3RJbnB1dEV2ZW50fSBmcm9tICcuL0RPTV9tYW5pcHVsYXRpb24nXG5pbXBvcnQge2FkZE5vdGV9IGZyb20gJy4vZGF0YV9tYW5pcHVsYXRpb24nXG5cblxuLy8gbm90ZXMgZGF0YVxuZXhwb3J0IGxldCBub3RlcyA9IFtdO1xuXG5cbmFkZE5vdGUoJ015IFNob3BwaW5nIExpc3QnLCAnbmVlZCB0byBnbyB0byB0aGF0IG1hcmtldCcsIFt7bmFtZTogXCJ3YXkgcHJvdGVpblwiLCBjaGVja2VkOiB0cnVlfSwgXG57bmFtZTogXCJwYXBlciB0b3dlbHNcIiwgY2hlY2tlZDogZmFsc2V9LCB7bmFtZTogXCJhZnRlciBzaGF2ZVwiLCBjaGVja2VkOiB0cnVlfSwge25hbWU6IFwiYnJlYWRcIiwgY2hlY2tlZDogZmFsc2V9XSwgXG4nMTQvMDUvMjAyMCcsICdCdXknKVxuXG5hZGROb3RlKCdEaW5uZXIgUGxhbm5pbmcnLCAnUGxhbm5pbmcsIHByZXBhcmluZywgYW5kIHBvcnRpb25pbmcgeW91ciBtZWFscyBhaGVhZCBvZiB0aW1lIGlzIG9uZSBvZiB0aGUgbW9zdCBlZmZlY3RpdmUgdG9vbHMgZm9yIGtlZXBpbmcgeW91ciBmb29kIGJ1ZGdldCBpbiBjaGVjaycsIFxuW10sICcxMi8wMi8yMDIwJywgJ2Rpbm5lcicpXG5cbmltYWdlc0V2ZW50TGlzdGVuZXJzKClcbmxpc3RJbnB1dEV2ZW50KClcbmFkZElucHV0RXZlbnQoKVxuYWRkQnV0dG9uRXZlbnQoKVxucmVuZGVyQWxsTm90ZXMoKVxuXG5cblxuIiwiaW1wb3J0IHtub3Rlc30gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7Y3JlYXRlQ2hlY2tsaXN0fSBmcm9tICcuL2NoZWNrbGlzdCdcbmltcG9ydCB7cmVtb3ZlTm90ZUVsZW1lbnQsIHVwZGF0ZUVsZW1lbnQsIHVwZGF0ZUVsZW1lbnRDaGVja2xpc3R9IGZyb20gJy4vRE9NX21hbmlwdWxhdGlvbidcbmltcG9ydCB7cmVtb3ZlTm90ZURhdGEsIHVwZGF0ZURhdGEsIGFkZENoZWNrbGlzdEl0ZW1EYXRhfSBmcm9tICcuL2RhdGFfbWFuaXB1bGF0aW9uJ1xuXG4vLyBkaXNwbGF5IGFsbCBub3RlcyBvbiBET01cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBbGxOb3RlcygpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKVxuICBkaXYuaW5uZXJIVE1MID0gJydcbiAgbm90ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBsZXQgbm90ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5vdGVXcmFwcGVyLmNsYXNzTmFtZSA9ICdub3RlLXdyYXBwZXInXG4gICAgbm90ZVdyYXBwZXIuaWQgPSBpbmRleFxuICAgIG5vdGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH0pXG4gICAgbm90ZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSlcblxuICAgIC8vIG5vdGUgdGl0bGUgXG4gICAgbGV0IHRpdGxlID0gJydcbiAgICBpZihpdGVtLnRpdGxlICE9PSAnJyl7XG4gICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9IGl0ZW0udGl0bGVcbiAgICAgIHRpdGxlVGV4dC5jbGFzc05hbWUgPSAnbm90ZS10aXRsZSdcbiAgICAgIHRpdGxlVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICB0aXRsZVRleHRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRpdGxlVGV4dElucHV0LmZvY3VzKClcbiAgICAgICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgfSlcblxuICAgICAgbGV0IHRpdGxlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgdGl0bGVUZXh0SW5wdXQudmFsdWUgPSB0aXRsZVRleHQuaW5uZXJUZXh0XG4gICAgICB0aXRsZVRleHRJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1pbnB1dCcsICd0aXRsZS1lZGl0JylcbiAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgdGl0bGVUZXh0SW5wdXQuaWQgPSBpbmRleFxuICAgICAgdGl0bGVUZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgICAgdXBkYXRlRGF0YShldnQudGFyZ2V0LCAndGl0bGUnKVxuICAgICAgICAgIHRpdGxlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgIH0pXG4gICAgICB0aXRsZS5hcHBlbmQodGl0bGVUZXh0LCB0aXRsZVRleHRJbnB1dClcbiAgICB9XG5cbiAgICAvLyBjaGVja2xpc3Qgc3R1ZmZcbiAgICBsZXQgbGlzdCA9ICcnXG4gICAgaWYoaXRlbS5jaGVja2xpc3QubGVuZ3RoICE9PSAwKXtcbiAgICAgIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICBsaXN0LmlkID0gYHVsJHtpbmRleH1gXG4gICAgICBpdGVtLmNoZWNrbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsaXN0SXRlbURpdi5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJ1xuICAgICAgICBsaXN0SXRlbURpdi5pZCA9IGluZGV4IFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcilcbiAgICAgICAgbGlzdEl0ZW1EaXYuYXBwZW5kKGVsZW1lbnQuY2hlY2tib3gsIGVsZW1lbnQubGlzdEJ1bGxldCwgZWxlbWVudC5saXN0Q2hhbmdlSW5wdXQsIGVsZW1lbnQuZGVsZXRlTGlzdEl0ZW1CdXR0b24pXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtRGl2KVxuICAgICAgfSlcbiAgICB9IFxuXG4gICAgLy8gYWRkIGNoZWNrbGlzdCBpdGVtXG4gICAgbGV0IGFkZENoZWNrbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS50eXBlID0gJ3RleHQnXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS5wbGFjZWhvbGRlciA9ICdhZGQgbGlzdCBpdGVtJ1xuICAgIGFkZENoZWNrbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NoYW5nZS1pbnB1dCdcbiAgICBhZGRDaGVja2xpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgICAgaWYoZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XG4gICAgICAgIGFkZENoZWNrbGlzdEl0ZW1EYXRhKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgICAgICB1cGRhdGVFbGVtZW50Q2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcilcbiAgICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnXG4gICAgaWYoaXRlbS5kZXNjcmlwdGlvbiAhPT0gJycpe1xuICAgICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gYG5vdGUke2luZGV4fWBcbiAgICAgIGxldCBub3RlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgbm90ZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgbm90ZVRleHQuY2xhc3NOYW1lID0gJ25vdGUtdGV4dCdcbiAgICAgIG5vdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub3RlVGV4dElucHV0LmZvY3VzKClcbiAgICAgICAgbm90ZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICB9KVxuICAgICAgbGV0IG5vdGVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICBub3RlVGV4dElucHV0LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc05hbWUgPSAnY2hhbmdlLWlucHV0J1xuICAgICAgbm90ZVRleHRJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScsICdub3RlLWlucHV0JylcbiAgICAgIG5vdGVUZXh0SW5wdXQuaWQgPSBpbmRleFxuICAgICAgbm90ZVRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2dCkgPT4ge1xuICAgICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICAgIHVwZGF0ZURhdGEoZXZ0LnRhcmdldCwgJ2Rlc2NyaXB0aW9uJylcbiAgICAgICAgbm90ZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgbm90ZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9KVxuICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKG5vdGVUZXh0LCBub3RlVGV4dElucHV0KVxuICAgIH1cblxuICAgIGxldCBwcm9qZWN0ID0gJydcbiAgICBpZihpdGVtLnByb2plY3QgIT09ICcnKXtcbiAgICAgIHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gaXRlbS5wcm9qZWN0XG4gICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0J1xuICAgIH1cblxuICAgIGxldCBkdWVEYXRlID0gJydcbiAgICBpZihpdGVtLmR1ZURhdGUgIT09ICcnKXtcbiAgICAgIGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnZHVlLWRhdGUtZGl2J1xuICAgICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgZHVlLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZVxuICAgICAgZHVlLmNsYXNzTmFtZSA9ICdwcm9qZWN0J1xuICAgICAgZHVlLmlkID0gJ2R1ZS1kYXRlJyBcbiAgICAgIGR1ZURhdGUuYXBwZW5kKHByb2plY3QsIGR1ZSlcbiAgICB9XG5cbiAgICBsZXQgZGVsZXRlTm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5pbm5lckhUTUwgPSAneCdcbiAgICBkZWxldGVOb3RlQnV0dG9uLmlkID0gaW5kZXhcbiAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtYnV0dG9uJ1xuICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIHJlbW92ZU5vdGVEYXRhKGV2dC50YXJnZXQpXG4gICAgICByZW1vdmVOb3RlRWxlbWVudChldnQudGFyZ2V0KVxuICAgIH0pXG5cbiAgICBpZihkZXNjcmlwdGlvbiAhPT0gJycgfHwgbGlzdCAhPT0gJycpe1xuICAgICAgbm90ZVdyYXBwZXIuYXBwZW5kKGRlbGV0ZU5vdGVCdXR0b24sIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdCwgYWRkQ2hlY2tsaXN0SXRlbSwgZHVlRGF0ZSlcbiAgICAgIGRpdi5hcHBlbmQobm90ZVdyYXBwZXIpXG4gICAgfVxuICB9KVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==