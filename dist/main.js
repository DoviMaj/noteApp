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
/* harmony import */ var _img_img3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/img3.jpg */ "./src/img/img3.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_img3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody{\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed;\n  background-size: cover;\n  font-family: 'Montserrat', 'sans-serif';\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main{\n  display: flex;\n  height: 100vh;\n}\n\n.content{\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n\n.side-bar-option{\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel{\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n\n.input-form{\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60,64,67,0.302), 0 1px 1px 1px rgba(60,64,67,0.149);\n  height: fit-content;\n}\n\ninput{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n::spelling-error{\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n \n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item{\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input{\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field{\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n\n.delete-button{\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input{\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input{\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n.note-title{\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np{\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text{\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div{\n  text-align: left;\n}\n\n.checkbox{\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text{\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked{\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n    width: 156px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n\nli{\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input{\n  width: -webkit-fill-available;\n}\n\n#add-button{\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover{\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input{\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide{\n  display: none;\n}\n\n#project-input{\n  text-align: center;\n}\n\n.notes-container{\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper{\n    max-width: 190px;\n    max-height: 650px;\n    border-radius: 5px;\n    padding-top: 0px;\n    margin-top: 0;\n    background-color: var(--section-color);\n    padding: 16px;\n    min-width: 75px;\n    min-height: 85px;\n    width: -webkit-fill-available;\n    flex-direction: column;\n    display: flex;\n    position: relative;\n    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);\n}\n\n.change-input{\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit{\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project{\n  background: #E7C6ED;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n\n.due-date-div{\n  display: flex;\n  gap: 10px;\n  /* background: antiquewhite; */\n  /* border-radius: 10px; */\n  /* text-align: center; */\n  /* flex-shrink: 0; */\n  /* width: fit-content; */\n  /* font-size: small; */\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item{\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button{\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  gap: 2px;\n  flex-direction: row;\n  margin-top: 21px;\n  flex-wrap: wrap;\n  background: #E7C6ED;\n  padding: 10px;\n  border-radius: 10px;\n  width: fit-content;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg{\n  cursor: pointer;\n}\n\n\n.img{\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover{transform: scale(1.1);} \n\n.side-bar{\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand{\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px){\n  .input-form{\n    width: 250px;\n  }\n  #form-bottom-input{\n    flex-direction: column;\n  }\n  #due-date-input, #project-input, #add-button{\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button{\n    text-align: center;\n  }\n  .delete-button, .delete-checklist-button{\n    display: initial;\n  }\n  #images-ul{\n    width: 181px;\n  }\n} ", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --section-color: rgb(255, 255, 255, 0.9);\n}\n\nbody{\n  background: url(./img/img3.jpg) no-repeat fixed;\n  background-size: cover;\n  font-family: 'Montserrat', 'sans-serif';\n  margin: 0;\n  min-height: 100%;\n}\n\nhtml {\n  height: 100%;\n}\n\n.main{\n  display: flex;\n  height: 100vh;\n}\n\n.content{\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n\n.side-bar-option{\n  background: linear-gradient(45deg, #e7c6ed, transparent);\n  padding: 11px;\n  border-radius: 3px;\n  display: flex;\n  gap: 13px;\n  width: -webkit-fill-available;\n}\n\nselect#projects:focus {\n  outline: none;\n}\n\nlabel{\n  align-self: center;\n}\n\n.option {\n  font-size: inherit;\n  padding: 3px;\n  border-radius: 9px;\n  cursor: pointer;\n  border: none;\n}\n\n\n.input-form{\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 5px;\n  animation: fadeInFromNone 1.7s ease-in;\n  background-color: var(--section-color);\n  padding: 10px;\n  margin-top: 20px;\n  box-shadow: 0px 0px 7px 0px rgba(60,64,67,0.302), 0 1px 1px 1px rgba(60,64,67,0.149);\n  height: fit-content;\n}\n\ninput{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n::spelling-error{\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 9px;\n  overflow: auto;\n  height: 9px;\n  background: antiquewhite;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border: transparent;\n  border-radius: 10px;\n}\n \n::-webkit-scrollbar-thumb {\n  background-color: currentcolor;\n  border-radius: 10px;\n}\n\n.temporary-form-list-item{\n  margin-left: 20px;\n  text-align: initial;\n}\n\n#title-input{\n  font-size: larger;\n  font-weight: 600;\n}\n\n.input-field{\n  outline: none;\n  border: none;\n  padding: 8px;\n  font-size: 16px;\n  border-radius: 5px;\n  width: -webkit-fill-available;\n  background-color: initial;\n}\n\n\n.delete-button{\n  border: none;\n  border-radius: 18px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: -8px;\n  left: 204px;\n}\n\n.delete-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n}\n\n#note-input{\n  margin: 0px;\n  resize: none;\n  padding: 15px 15px 5px 10px;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n}\n\n.note-input{\n  resize: none;\n  width: -webkit-fill-available;\n  min-height: 100px;\n  font-family: inherit;\n  font-weight: inherit;\n  white-space: pre-line;\n  overflow: auto;\n}\n\n::placeholder{\n  font-family: 'Montserrat', 'sans-serif';\n}\n\n.note-title{\n  margin: 5px 0px 20px 0px;\n  font-size: larger;\n}\n\np{\n  white-space: pre-line;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.note-text{\n  white-space: pre-wrap;\n  margin: 3px 0px 10px 0px;\n  word-wrap: break-word;\n}\n\n#checklist-div{\n  text-align: left;\n}\n\n.checkbox{\n  position: relative;\n  top: 2px;\n}\n\n.list-item-text{\n  word-break: break-word;\n  white-space: pre-wrap;\n  text-align: initial;\n  width: 148px;\n}\n\n.checked{\n  text-decoration: line-through;\n  font-style: italic;\n  color: dimgray;\n}\n\ninput[type=\"checkbox\"] {\n  background-color: ghostwhite;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: thistle;\n  appearance: none;\n  border: 1px solid #b8b3b2;\n  width: 20px;\n  height: 20px;\n  outline: none;\n  cursor: pointer;\n}\n\ninput.change-input {\n    width: 156px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n\nli{\n  list-style: none;\n  padding: 3px;\n  text-align: center;\n}\n\n#checklist-input{\n  width: -webkit-fill-available;\n}\n\n#add-button{\n  padding: 10px 20px 10px 20px;\n  margin: auto;\n  appearance: none;\n  background-color: inherit;\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  font-family: inherit;\n}\n\n#add-button:hover{\n  background-color: antiquewhite;\n  border-radius: 3px;\n  cursor: pointer;\n  /* padding: 11px; */\n}\n\n#form-bottom-input{\n  display: flex;\n  justify-content: center;\n  background-color: initial;\n  margin-top: 5px;\n}\n\n.hide{\n  display: none;\n}\n\n#project-input{\n  text-align: center;\n}\n\n.notes-container{\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  justify-content: center;\n}\n\n.note-wrapper{\n    max-width: 190px;\n    max-height: 650px;\n    border-radius: 5px;\n    padding-top: 0px;\n    margin-top: 0;\n    background-color: var(--section-color);\n    padding: 16px;\n    min-width: 75px;\n    min-height: 85px;\n    width: -webkit-fill-available;\n    flex-direction: column;\n    display: flex;\n    position: relative;\n    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);\n}\n\n.change-input{\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n  margin: inherit;\n  padding: 3px;\n  width: 188px;\n}\n\n.title-edit{\n  max-width: -webkit-fill-available;\n  font-size: larger;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  margin: 5px 0px 20px 0px;\n}\n\n.project{\n  background: #E7C6ED;\n  padding: 6px;\n  border-radius: 10px;\n  text-align: center;\n  flex-shrink: 0;\n  width: fit-content;\n  font-size: small;\n}\n\n\n.due-date-div{\n  display: flex;\n  gap: 10px;\n  /* background: antiquewhite; */\n  /* border-radius: 10px; */\n  /* text-align: center; */\n  /* flex-shrink: 0; */\n  /* width: fit-content; */\n  /* font-size: small; */\n  align-self: baseline;\n  align-content: center;\n  align-self: baseline;\n}\n\n.list-item{\n  display: flex;\n  position: relative;\n  left: -42px;\n  flex-shrink: 0;\n  width: 200px;\n}\n\n.delete-checklist-button{\n  position: absolute;\n  left: 163px;\n  border: none;\n  border-radius: 14px;\n  outline: none;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.delete-checklist-button:hover{\n  cursor: pointer;\n  background-color: antiquewhite;\n  display: block;\n}\n\n#images-ul{\n  display: flex;\n  margin: 0;\n  padding: 0;\n  gap: 2px;\n  flex-direction: row;\n  margin-top: 21px;\n  flex-wrap: wrap;\n  background: #E7C6ED;\n  padding: 10px;\n  border-radius: 10px;\n  width: fit-content;\n  flex-shrink: 0;\n  margin: 9px auto;\n  align-content: normal;\n}\n\nimg{\n  cursor: pointer;\n}\n\n\n.img{\n  width: 53px;\n  height: 38px;\n  border-radius: 5px;\n}\n\nimg:hover{transform: scale(1.1);} \n\n.side-bar{\n  background: var(--section-color);\n  padding: 10px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: fadeInFromNone 1.7s ease-in;\n  min-width: 204px;\n  width: 209px;\n  /* display: none; */\n}\n\n.expand{\n  position: absolute;\n  min-height: 526px;\n  min-width: 500px;\n  opacity: revert;\n  z-index: 1;\n  background: white;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 574px){\n  .input-form{\n    width: 250px;\n  }\n  #form-bottom-input{\n    flex-direction: column;\n  }\n  #due-date-input, #project-input, #add-button{\n    width: 158px;\n    text-align: inherit;\n  }\n  #add-button{\n    text-align: center;\n  }\n  .delete-button, .delete-checklist-button{\n    display: initial;\n  }\n  #images-ul{\n    width: 181px;\n  }\n} "],"sourceRoot":""}]);
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
    body.style.background =  `url(../src/img/img${img.id}.jpg) no-repeat fixed`
    body.style.backgroundSize = 'cover'
}


/***/ }),

/***/ "./src/img/img3.jpg":
/*!**************************!*\
  !*** ./src/img/img3.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "914923cf9a48a39d2b139e1080dcd148.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background_images */ "./src/background_images.js");



// notes data
let notes = [];

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
    notes.unshift(Note(title, description, checklist, dueDate, project))
    renderAllNotes()
  }
}

// remove note data
const removeNoteData = (element) => {
  notes.splice(element.id, 1)
}

// removes checklist item from data
const removeChecklistItemData = (element, note) => {
  notes[note.id].checklist.forEach((i, index) => {
    if(i.name === element.parentNode.children[1].innerText){
      notes[note.id].checklist.splice(index, 1)
    }
  })
}

// updates checked checklist item
const updateCheckedItem = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].checked = !notes[parentIndex].checklist[element.id].checked;
}

// updates note details -> title or note
const updateData = (element, detail) => {
  notes[element.id][detail] = element.value
}

// updates checklist item value
const updateChecklistData = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].name = element.value;
}

// add a checklist item 
const addChecklistItemData = (element, parentIndex) => {
  notes[parentIndex].checklist.push({name: element.value, checked: false})
}

// used for temporary form checklist values
function updateChecklistArray(element, newValue){
  listItemData[element.previousElementSibling.id].name = newValue.value
}

// display all notes 
const displayAllNotes = () => {
  console.table(notes)
}

// display notes on project
const displayProjectNotes = (value) => {
  notes.forEach((item) => {
    if(item.project === value){
      console.log(item)
    } 
  })
}


// DOM related stuff //
// display all notes on DOM
function renderAllNotes() {
  let div = document.querySelector('.notes-container')
  div.innerHTML = ''
  notes.forEach((item, index) => {
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
          updateElement(evt.target)
          updateData(evt.target, 'title')
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
        const element = createChecklist(item, index, noteWrapper)
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
        addChecklistItemData(evt.target, noteWrapper.id)
        updateElementChecklist(item, index, noteWrapper)
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
        updateElement(evt.target)
        updateData(evt.target, 'description')
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
      removeNoteData(evt.target)
      removeNoteElement(evt.target)
    })

    if(description !== '' || list !== ''){
      noteWrapper.append(deleteNoteButton, title, description, list, addChecklistItem, dueDate)
      div.append(noteWrapper)
    }
  })
}

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
      updateChecklistData(evt.target, noteWrapper.id)
      updateElement(evt.target)
      listChangeInput.classList.add('hide')
      listBullet.classList.remove('hide')
    }
  })
    
  listChangeInput.addEventListener('blur', (evt) => {
    if(evt.target.value !== ''){
      updateChecklistData(evt.target, noteWrapper.id)
      updateElement(evt.target)
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
      updateCheckedItem(evt.target, noteWrapper.id)
    }
    else{
      listBullet.classList.add('checked')
      updateCheckedItem(evt.target, noteWrapper.id)
    }
  })
  deleteListItemButton = document.createElement('button')
  deleteListItemButton.innerHTML = 'x'
  deleteListItemButton.id = index
  deleteListItemButton.className = 'delete-checklist-button'
  deleteListItemButton.classList.add('hide')
  deleteListItemButton.addEventListener('click', (evt) => {
    removeChecklistItemData(evt.target, noteWrapper)
    removeChecklistItemElement(evt.target)
  })
  return{
    checkbox, listBullet, listChangeInput, deleteListItemButton
  }
}

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
      const element = createChecklist(item, index, noteWrapper)
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
  renderAllNotes()
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
      addListItem(evt.target)
      listItemData.push({name: evt.target.value, checked: false})
      evt.target.value = ''
    }
  })
}


// adds list items on input form
const addListItem = (element) => {
  let li = document.createElement('li');
  li.innerText = element.value
  li.className = 'temporary-form-list-item'
  li.id = listItemData.length
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
      updateChecklistArray(event.target, changeList)
      updateElement(event.target)
      changeList.classList.add('hide')
      li.classList.remove('hide')
    }
  })
  changeList.addEventListener('blur', (event) => {
    if (event.target.value !== '') {
      updateChecklistArray(event.target, changeList)
      updateElement(event.target)
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

  addNote(title.value, note.value, listItemData, dueDate.value, project.value);

  list.forEach(item => item.remove())
  listItemData = []
  title.value = ''
  note.value = ''
  dueDate.value = ''
  listItemData.value = ''
  project.value = ''
}

// add button event
const addButtonEvent = () => {
  let button = document.querySelector('#add-button');
  button.addEventListener('click', (evt) => {
    getInput()
    hideInputOptions()
  })
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



addNote('My Shopping List', 'need to go to that market', [{name: "way protein", checked: true}, 
{name: "paper towels", checked: false}, {name: "after shave", checked: true}, {name: "bread", checked: false}], 
'14/05/2020', 'Buy')

addNote('Dinner Planning', 'Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check', 
[], '12/02/2020', 'dinner')

Object(_background_images__WEBPACK_IMPORTED_MODULE_1__["imagesEventListeners"])()
listInputEvent()
addInputEvent()
addButtonEvent()
renderAllNotes()

// change renderAllNotes to conditional rendering using empty as option (x)
// add event to add button (x)
// create check function that checks for values and calls add function (x)
// add function to event that takes the input and uses getInput function (x)
// add condition in addNote function (x)

// make checklist input work (x)
  // add li inside form whenever enter is clicked (x)
  // store each addition of li inside array (x)
  // use that array when adding to data (x) 

// make form checklist editable (x)
  // add input with each add (x)
  // define value of element inside input (x)
  // update element on enter (x)

// make note checklist editable (x)
  // add input with each add 
  // define value of element inside input 
  // update element on enter 
  // update database on enter

// make description editable (x)

// remove note option (x)

// remove checklist item option (x)

// check item option (x)

// adding list item option (x)




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2ltZzMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQ3JDO0FBQzNELDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLHFEQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLFVBQVUsNkNBQTZDLEdBQUcsU0FBUyxnRkFBZ0YsMkJBQTJCLDRDQUE0QyxjQUFjLHFCQUFxQixHQUFHLFVBQVUsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsbUJBQW1CLGdCQUFnQixHQUFHLHVCQUF1Qiw2REFBNkQsa0JBQWtCLHVCQUF1QixrQkFBa0IsY0FBYyxrQ0FBa0MsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsVUFBVSx1QkFBdUIsR0FBRyxhQUFhLHVCQUF1QixpQkFBaUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsMkNBQTJDLDJDQUEyQyxrQkFBa0IscUJBQXFCLHlGQUF5Rix3QkFBd0IsR0FBRyxVQUFVLDRDQUE0QyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyx5QkFBeUIsZUFBZSxtQkFBbUIsZ0JBQWdCLDZCQUE2QixHQUFHLCtCQUErQixpREFBaUQsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyxtQ0FBbUMsd0JBQXdCLEdBQUcsOEJBQThCLHNCQUFzQix3QkFBd0IsR0FBRyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsaUJBQWlCLGlCQUFpQixvQkFBb0IsdUJBQXVCLGtDQUFrQyw4QkFBOEIsR0FBRyxxQkFBcUIsaUJBQWlCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLGlCQUFpQiw0QkFBNEIseUJBQXlCLHVCQUF1QixjQUFjLGVBQWUsdUJBQXVCLGNBQWMsZ0JBQWdCLEdBQUcseUJBQXlCLG9CQUFvQixtQ0FBbUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixnQ0FBZ0Msa0NBQWtDLG1DQUFtQyx5QkFBeUIseUJBQXlCLDBCQUEwQixHQUFHLGdCQUFnQixpQkFBaUIsa0NBQWtDLHNCQUFzQix5QkFBeUIseUJBQXlCLDBCQUEwQixtQkFBbUIsR0FBRyxrQkFBa0IsNENBQTRDLEdBQUcsZ0JBQWdCLDZCQUE2QixzQkFBc0IsR0FBRyxNQUFNLDBCQUEwQixxQkFBcUIsdUJBQXVCLEdBQUcsZUFBZSwwQkFBMEIsNkJBQTZCLDBCQUEwQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxjQUFjLHVCQUF1QixhQUFhLEdBQUcsb0JBQW9CLDJCQUEyQiwwQkFBMEIsd0JBQXdCLGlCQUFpQixHQUFHLGFBQWEsa0NBQWtDLHVCQUF1QixtQkFBbUIsR0FBRyw4QkFBOEIsaUNBQWlDLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQixrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLHNDQUFzQyw4QkFBOEIscUJBQXFCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLDZCQUE2Qiw0QkFBNEIsR0FBRyxPQUFPLHFCQUFxQixpQkFBaUIsdUJBQXVCLEdBQUcscUJBQXFCLGtDQUFrQyxHQUFHLGdCQUFnQixpQ0FBaUMsaUJBQWlCLHFCQUFxQiw4QkFBOEIsaUJBQWlCLG9CQUFvQix1QkFBdUIsa0JBQWtCLHlCQUF5QixHQUFHLHNCQUFzQixtQ0FBbUMsdUJBQXVCLG9CQUFvQixxQkFBcUIsTUFBTSx1QkFBdUIsa0JBQWtCLDRCQUE0Qiw4QkFBOEIsb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsNEJBQTRCLG9CQUFvQixjQUFjLHFCQUFxQiw0QkFBNEIsR0FBRyxrQkFBa0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLG9CQUFvQiw2Q0FBNkMsb0JBQW9CLHNCQUFzQix1QkFBdUIsb0NBQW9DLDZCQUE2QixvQkFBb0IseUJBQXlCLHVGQUF1RixHQUFHLGtCQUFrQixrQ0FBa0MsaUJBQWlCLGtCQUFrQix1QkFBdUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsR0FBRyxnQkFBZ0Isc0NBQXNDLHNCQUFzQiwrQkFBK0IsNkJBQTZCLDZCQUE2QiwyQkFBMkIsc0JBQXNCLGVBQWUsaUJBQWlCLDZCQUE2QixHQUFHLGFBQWEsd0JBQXdCLGlCQUFpQix3QkFBd0IsdUJBQXVCLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcsb0JBQW9CLGtCQUFrQixjQUFjLGdDQUFnQyw4QkFBOEIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsMkJBQTJCLDRCQUE0QiwwQkFBMEIseUJBQXlCLEdBQUcsZUFBZSxrQkFBa0IsdUJBQXVCLGdCQUFnQixtQkFBbUIsaUJBQWlCLEdBQUcsNkJBQTZCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLGlCQUFpQiw0QkFBNEIseUJBQXlCLHVCQUF1QixjQUFjLGVBQWUsR0FBRyxtQ0FBbUMsb0JBQW9CLG1DQUFtQyxtQkFBbUIsR0FBRyxlQUFlLGtCQUFrQixjQUFjLGVBQWUsYUFBYSx3QkFBd0IscUJBQXFCLG9CQUFvQix3QkFBd0Isa0JBQWtCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHFCQUFxQiwwQkFBMEIsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxjQUFjLHVCQUF1QixlQUFlLHFDQUFxQyxrQkFBa0IsY0FBYyxrQkFBa0IsMkJBQTJCLGNBQWMsMkNBQTJDLHFCQUFxQixpQkFBaUIscUJBQXFCLE1BQU0sWUFBWSx1QkFBdUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsZUFBZSxzQkFBc0IsR0FBRywrQkFBK0IsUUFBUSxvQkFBb0IsaUJBQWlCLEtBQUssVUFBVSxxQkFBcUIsaUJBQWlCLEtBQUssWUFBWSxxQkFBcUIsaUJBQWlCLEtBQUssR0FBRyw4QkFBOEIsZ0JBQWdCLG1CQUFtQixLQUFLLHVCQUF1Qiw2QkFBNkIsS0FBSyxpREFBaUQsbUJBQW1CLDBCQUEwQixLQUFLLGdCQUFnQix5QkFBeUIsS0FBSyw2Q0FBNkMsdUJBQXVCLEtBQUssZUFBZSxtQkFBbUIsS0FBSyxHQUFHLFFBQVEsOEVBQThFLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUs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QUNBLHFDQUFxQyxvQ0FBb0M7QUFDekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQXVDO0FBQ2hFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7OztBQUlBLDJEQUEyRCxtQ0FBbUM7QUFDOUYsQ0FBQyxxQ0FBcUMsR0FBRyxtQ0FBbUMsR0FBRyw4QkFBOEI7QUFDN0c7O0FBRUE7QUFDQTs7QUFFQSwrRUFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNlQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWcvaW1nMy5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNlY3Rpb24tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnNpZGUtYmFyLW9wdGlvbntcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3YzZlZCwgdHJhbnNwYXJlbnQpO1xcbiAgcGFkZGluZzogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuc2VsZWN0I3Byb2plY3RzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmxhYmVse1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmlucHV0LWZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoNjAsNjQsNjcsMC4zMDIpLCAwIDFweCAxcHggMXB4IHJnYmEoNjAsNjQsNjcsMC4xNDkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXR7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbjo6c3BlbGxpbmctZXJyb3J7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDlweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbXtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG59XFxuXFxuI3RpdGxlLWlucHV0e1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG4gIGxlZnQ6IDIwNHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI25vdGUtaW5wdXR7XFxuICBtYXJnaW46IDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm5vdGUtaW5wdXR7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4ubm90ZS10aXRsZXtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5we1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLm5vdGUtdGV4dHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbjogM3B4IDBweCAxMHB4IDBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NoZWNrbGlzdC1kaXZ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuLmxpc3QtaXRlbS10ZXh0e1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbi5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZGltZ3JheTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LmNoYW5nZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxNTZweDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5saXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaGVja2xpc3QtaW5wdXR7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuI2FkZC1idXR0b257XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNhZGQtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogcGFkZGluZzogMTFweDsgKi9cXG59XFxuXFxuI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWluLXdpZHRoOiA3NXB4O1xcbiAgICBtaW4taGVpZ2h0OiA4NXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG59XFxuXFxuLmNoYW5nZS1pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAxODhweDtcXG59XFxuXFxuLnRpdGxlLWVkaXR7XFxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAvKiBmb250LXNpemU6IHNtYWxsOyAqL1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpc3QtaXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDJweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWNoZWNrbGlzdC1idXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNjNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbWFnZXMtdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIxcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbjogOXB4IGF1dG87XFxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XFxufVxcblxcbmltZ3tcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmltZ3tcXG4gIHdpZHRoOiA1M3B4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXJ7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO30gXFxuXFxuLnNpZGUtYmFye1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA5cHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uZXhwYW5ke1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogNTI2cHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgb3BhY2l0eTogcmV2ZXJ0O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDElIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XFxuICAuaW5wdXQtZm9ybXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbiAgI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2R1ZS1kYXRlLWlucHV0LCAjcHJvamVjdC1pbnB1dCwgI2FkZC1idXR0b257XFxuICAgIHdpZHRoOiAxNThweDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIH1cXG4gICNhZGQtYnV0dG9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZGVsZXRlLWJ1dHRvbiwgLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbiAgI2ltYWdlcy11bHtcXG4gICAgd2lkdGg6IDE4MXB4O1xcbiAgfVxcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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QUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNlY3Rpb24tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG5ib2R5e1xcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1nL2ltZzMuanBnKSBuby1yZXBlYXQgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnNpZGUtYmFyLW9wdGlvbntcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3YzZlZCwgdHJhbnNwYXJlbnQpO1xcbiAgcGFkZGluZzogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzcHg7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuc2VsZWN0I3Byb2plY3RzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmxhYmVse1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmlucHV0LWZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Gcm9tTm9uZSAxLjdzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoNjAsNjQsNjcsMC4zMDIpLCAwIDFweCAxcHggMXB4IHJnYmEoNjAsNjQsNjcsMC4xNDkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXR7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbjo6c3BlbGxpbmctZXJyb3J7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDlweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbXtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG59XFxuXFxuI3RpdGxlLWlucHV0e1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGR7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG4gIGxlZnQ6IDIwNHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI25vdGUtaW5wdXR7XFxuICBtYXJnaW46IDBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm5vdGUtaW5wdXR7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4ubm90ZS10aXRsZXtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5we1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLm5vdGUtdGV4dHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG1hcmdpbjogM3B4IDBweCAxMHB4IDBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NoZWNrbGlzdC1kaXZ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuLmxpc3QtaXRlbS10ZXh0e1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbi5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZGltZ3JheTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGIzYjI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LmNoYW5nZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxNTZweDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG5saXtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaGVja2xpc3QtaW5wdXR7XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuI2FkZC1idXR0b257XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNhZGQtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogcGFkZGluZzogMTFweDsgKi9cXG59XFxuXFxuI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWluLXdpZHRoOiA3NXB4O1xcbiAgICBtaW4taGVpZ2h0OiA4NXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMzAyKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTQ5KTtcXG59XFxuXFxuLmNoYW5nZS1pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAxODhweDtcXG59XFxuXFxuLnRpdGxlLWVkaXR7XFxuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAvKiBmb250LXNpemU6IHNtYWxsOyAqL1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuXFxuLmxpc3QtaXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDJweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWNoZWNrbGlzdC1idXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNjNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNpbWFnZXMtdWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGdhcDogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIxcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kOiAjRTdDNkVEO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbjogOXB4IGF1dG87XFxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XFxufVxcblxcbmltZ3tcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmltZ3tcXG4gIHdpZHRoOiA1M3B4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXJ7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO30gXFxuXFxuLnNpZGUtYmFye1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbkZyb21Ob25lIDEuN3MgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogMjA0cHg7XFxuICB3aWR0aDogMjA5cHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uZXhwYW5ke1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogNTI2cHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgb3BhY2l0eTogcmV2ZXJ0O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkZyb21Ob25lIHtcXG4gIDAlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDElIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XFxuICAuaW5wdXQtZm9ybXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbiAgI2Zvcm0tYm90dG9tLWlucHV0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2R1ZS1kYXRlLWlucHV0LCAjcHJvamVjdC1pbnB1dCwgI2FkZC1idXR0b257XFxuICAgIHdpZHRoOiAxNThweDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIH1cXG4gICNhZGQtYnV0dG9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZGVsZXRlLWJ1dHRvbiwgLmRlbGV0ZS1jaGVja2xpc3QtYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgfVxcbiAgI2ltYWdlcy11bHtcXG4gICAgd2lkdGg6IDE4MXB4O1xcbiAgfVxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gaW1hZ2VzIGV2ZW50IGxpc3RlbmVyc1xuZXhwb3J0IGNvbnN0IGltYWdlc0V2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBsZXQgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWdcIilcbiAgaW1hZ2VzLmZvckVhY2goaW1nID0+IHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBjaGFuZ2VCYWNrZ3JvdW5kSW1nKGV2dC50YXJnZXQpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hhbmdlQmFja2dyb3VuZEltZ1xuY29uc3QgY2hhbmdlQmFja2dyb3VuZEltZyA9IChpbWcpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAgYHVybCguLi9zcmMvaW1nL2ltZyR7aW1nLmlkfS5qcGcpIG5vLXJlcGVhdCBmaXhlZGBcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNDkyM2NmOWE0OGEzOWQyYjEzOWUxMDgwZGNkMTQ4LmpwZ1wiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtpbWFnZXNFdmVudExpc3RlbmVyc30gZnJvbSAnLi9iYWNrZ3JvdW5kX2ltYWdlcydcblxuLy8gbm90ZXMgZGF0YVxubGV0IG5vdGVzID0gW107XG5cbi8vIGN1cnJlbnQgaW5wdXQgbGlzdCBcbmxldCBsaXN0SXRlbURhdGEgPSBbXVxuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBub3Rlc1xuY29uc3QgTm90ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCwgZHVlRGF0ZSwgcHJvamVjdCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbiwgXG4gICAgY2hlY2tsaXN0LFxuICAgIGR1ZURhdGUsIFxuICAgIHByb2plY3RcbiAgfVxufVxuXG4vLyBhZGQgbm90ZSB0byBkYXRhXG5jb25zdCBhZGROb3RlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hlY2tsaXN0LCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XG4gIGlmKGRlc2NyaXB0aW9uICE9PSAnJyB8fCBjaGVja2xpc3QhPT0gJycpe1xuICAgIG5vdGVzLnVuc2hpZnQoTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCwgZHVlRGF0ZSwgcHJvamVjdCkpXG4gICAgcmVuZGVyQWxsKClcbiAgfVxufVxuXG4vLyByZW1vdmUgbm90ZSBkYXRhXG5jb25zdCByZW1vdmVOb3RlRGF0YSA9IChlbGVtZW50KSA9PiB7XG4gIG5vdGVzLnNwbGljZShlbGVtZW50LmlkLCAxKVxufVxuXG4vLyByZW1vdmVzIGNoZWNrbGlzdCBpdGVtIGZyb20gZGF0YVxuY29uc3QgcmVtb3ZlQ2hlY2tsaXN0SXRlbURhdGEgPSAoZWxlbWVudCwgbm90ZSkgPT4ge1xuICBub3Rlc1tub3RlLmlkXS5jaGVja2xpc3QuZm9yRWFjaCgoaSwgaW5kZXgpID0+IHtcbiAgICBpZihpLm5hbWUgPT09IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lclRleHQpe1xuICAgICAgbm90ZXNbbm90ZS5pZF0uY2hlY2tsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH0pXG59XG5cbi8vIHVwZGF0ZXMgY2hlY2tlZCBjaGVja2xpc3QgaXRlbVxuY29uc3QgdXBkYXRlQ2hlY2tlZEl0ZW0gPSAoZWxlbWVudCwgcGFyZW50SW5kZXgpID0+IHtcbiAgbm90ZXNbcGFyZW50SW5kZXhdLmNoZWNrbGlzdFtlbGVtZW50LmlkXS5jaGVja2VkID0gIW5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3RbZWxlbWVudC5pZF0uY2hlY2tlZDtcbn1cblxuLy8gdXBkYXRlcyBub3RlIGRldGFpbHMgLT4gdGl0bGUgb3Igbm90ZVxuY29uc3QgdXBkYXRlRGF0YSA9IChlbGVtZW50LCBkZXRhaWwpID0+IHtcbiAgbm90ZXNbZWxlbWVudC5pZF1bZGV0YWlsXSA9IGVsZW1lbnQudmFsdWVcbn1cblxuLy8gdXBkYXRlcyBjaGVja2xpc3QgaXRlbSB2YWx1ZVxuY29uc3QgdXBkYXRlQ2hlY2tsaXN0RGF0YSA9IChlbGVtZW50LCBwYXJlbnRJbmRleCkgPT4ge1xuICBub3Rlc1twYXJlbnRJbmRleF0uY2hlY2tsaXN0W2VsZW1lbnQuaWRdLm5hbWUgPSBlbGVtZW50LnZhbHVlO1xufVxuXG4vLyBhZGQgYSBjaGVja2xpc3QgaXRlbSBcbmNvbnN0IGFkZENoZWNrbGlzdEl0ZW1EYXRhID0gKGVsZW1lbnQsIHBhcmVudEluZGV4KSA9PiB7XG4gIG5vdGVzW3BhcmVudEluZGV4XS5jaGVja2xpc3QucHVzaCh7bmFtZTogZWxlbWVudC52YWx1ZSwgY2hlY2tlZDogZmFsc2V9KVxufVxuXG4vLyB1c2VkIGZvciB0ZW1wb3JhcnkgZm9ybSBjaGVja2xpc3QgdmFsdWVzXG5mdW5jdGlvbiB1cGRhdGVDaGVja2xpc3RBcnJheShlbGVtZW50LCBuZXdWYWx1ZSl7XG4gIGxpc3RJdGVtRGF0YVtlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWRdLm5hbWUgPSBuZXdWYWx1ZS52YWx1ZVxufVxuXG4vLyBkaXNwbGF5IGFsbCBub3RlcyBcbmNvbnN0IGRpc3BsYXlBbGxOb3RlcyA9ICgpID0+IHtcbiAgY29uc29sZS50YWJsZShub3Rlcylcbn1cblxuLy8gZGlzcGxheSBub3RlcyBvbiBwcm9qZWN0XG5jb25zdCBkaXNwbGF5UHJvamVjdE5vdGVzID0gKHZhbHVlKSA9PiB7XG4gIG5vdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZihpdGVtLnByb2plY3QgPT09IHZhbHVlKXtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgfSBcbiAgfSlcbn1cblxuXG4vLyBET00gcmVsYXRlZCBzdHVmZiAvL1xuLy8gZGlzcGxheSBhbGwgbm90ZXMgb24gRE9NXG5mdW5jdGlvbiByZW5kZXJBbGwoKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJylcbiAgZGl2LmlubmVySFRNTCA9ICcnXG4gIG5vdGVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgbGV0IG5vdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBub3RlV3JhcHBlci5jbGFzc05hbWUgPSAnbm90ZS13cmFwcGVyJ1xuICAgIG5vdGVXcmFwcGVyLmlkID0gaW5kZXhcbiAgICBub3RlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgZGVsZXRlTm90ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICB9KVxuICAgIG5vdGVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0pXG5cbiAgICAvLyBub3RlIHRpdGxlIFxuICAgIGxldCB0aXRsZSA9ICcnXG4gICAgaWYoaXRlbS50aXRsZSAhPT0gJycpe1xuICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGV0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgIHRpdGxlVGV4dC5pbm5lclRleHQgPSBpdGVtLnRpdGxlXG4gICAgICB0aXRsZVRleHQuY2xhc3NOYW1lID0gJ25vdGUtdGl0bGUnXG4gICAgICB0aXRsZVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgdGl0bGVUZXh0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0aXRsZVRleHRJbnB1dC5mb2N1cygpXG4gICAgICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIH0pXG5cbiAgICAgIGxldCB0aXRsZVRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHRpdGxlVGV4dElucHV0LnZhbHVlID0gdGl0bGVUZXh0LmlubmVyVGV4dFxuICAgICAgdGl0bGVUZXh0SW5wdXQuc3BlbGxjaGVjayA9IGZhbHNlXG4gICAgICB0aXRsZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtaW5wdXQnLCAndGl0bGUtZWRpdCcpXG4gICAgICB0aXRsZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIHRpdGxlVGV4dElucHV0LmlkID0gaW5kZXhcbiAgICAgIHRpdGxlVGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgdXBkYXRlRWxlbWVudChldnQudGFyZ2V0KVxuICAgICAgICAgIHVwZGF0ZURhdGEoZXZ0LnRhcmdldCwgJ3RpdGxlJylcbiAgICAgICAgICB0aXRsZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICB9KVxuICAgICAgdGl0bGUuYXBwZW5kKHRpdGxlVGV4dCwgdGl0bGVUZXh0SW5wdXQpXG4gICAgfVxuXG4gICAgLy8gY2hlY2tsaXN0IHN0dWZmXG4gICAgbGV0IGxpc3QgPSAnJ1xuICAgIGlmKGl0ZW0uY2hlY2tsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgICBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgbGlzdC5pZCA9IGB1bCR7aW5kZXh9YFxuICAgICAgaXRlbS5jaGVja2xpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGlzdEl0ZW1EaXYuY2xhc3NOYW1lID0gJ2xpc3QtaXRlbSdcbiAgICAgICAgbGlzdEl0ZW1EaXYuaWQgPSBpbmRleCBcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNoZWNrbGlzdChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpXG4gICAgICAgIGxpc3RJdGVtRGl2LmFwcGVuZChlbGVtZW50LmNoZWNrYm94LCBlbGVtZW50Lmxpc3RCdWxsZXQsIGVsZW1lbnQubGlzdENoYW5nZUlucHV0LCBlbGVtZW50LmRlbGV0ZUxpc3RJdGVtQnV0dG9uKVxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbURpdilcbiAgICAgIH0pXG4gICAgfSBcblxuICAgIC8vIGFkZCBjaGVja2xpc3QgaXRlbVxuICAgIGxldCBhZGRDaGVja2xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZENoZWNrbGlzdEl0ZW0udHlwZSA9ICd0ZXh0J1xuICAgIGFkZENoZWNrbGlzdEl0ZW0ucGxhY2Vob2xkZXIgPSAnYWRkIGxpc3QgaXRlbSdcbiAgICBhZGRDaGVja2xpc3RJdGVtLmNsYXNzTmFtZSA9ICdjaGFuZ2UtaW5wdXQnXG4gICAgYWRkQ2hlY2tsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICAgIGlmKGV2dC5rZXkgPT09ICdFbnRlcicgJiYgZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgICBhZGRDaGVja2xpc3RJdGVtRGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgICAgdXBkYXRlRWxlbWVudENoZWNrbGlzdChpdGVtLCBpbmRleCwgbm90ZVdyYXBwZXIpXG4gICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSAnJ1xuICAgIGlmKGl0ZW0uZGVzY3JpcHRpb24gIT09ICcnKXtcbiAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IGBub3RlJHtpbmRleH1gXG4gICAgICBsZXQgbm90ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIG5vdGVUZXh0LmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIG5vdGVUZXh0LmNsYXNzTmFtZSA9ICdub3RlLXRleHQnXG4gICAgICBub3RlVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBub3RlVGV4dElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm90ZVRleHRJbnB1dC5mb2N1cygpXG4gICAgICAgIG5vdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgfSlcbiAgICAgIGxldCBub3RlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgbm90ZVRleHRJbnB1dC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NOYW1lID0gJ2NoYW5nZS1pbnB1dCdcbiAgICAgIG5vdGVUZXh0SW5wdXQuc3BlbGxjaGVjayA9IGZhbHNlXG4gICAgICBub3RlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnLCAnbm90ZS1pbnB1dCcpXG4gICAgICBub3RlVGV4dElucHV0LmlkID0gaW5kZXhcbiAgICAgIG5vdGVUZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldnQpID0+IHtcbiAgICAgICAgdXBkYXRlRWxlbWVudChldnQudGFyZ2V0KVxuICAgICAgICB1cGRhdGVEYXRhKGV2dC50YXJnZXQsICdkZXNjcmlwdGlvbicpXG4gICAgICAgIG5vdGVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIG5vdGVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgfSlcbiAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZChub3RlVGV4dCwgbm90ZVRleHRJbnB1dClcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdCA9ICcnXG4gICAgaWYoaXRlbS5wcm9qZWN0ICE9PSAnJyl7XG4gICAgICBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGl0ZW0ucHJvamVjdFxuICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdCdcbiAgICB9XG5cbiAgICBsZXQgZHVlRGF0ZSA9ICcnXG4gICAgaWYoaXRlbS5kdWVEYXRlICE9PSAnJyl7XG4gICAgICBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGR1ZURhdGUuY2xhc3NOYW1lID0gJ2R1ZS1kYXRlLWRpdidcbiAgICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIGR1ZS5pbm5lclRleHQgPSBpdGVtLmR1ZURhdGVcbiAgICAgIGR1ZS5jbGFzc05hbWUgPSAncHJvamVjdCdcbiAgICAgIGR1ZS5pZCA9ICdkdWUtZGF0ZScgXG4gICAgICBkdWVEYXRlLmFwcGVuZChwcm9qZWN0LCBkdWUpXG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgbGV0IGRlbGV0ZU5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZU5vdGVCdXR0b24uaW5uZXJIVE1MID0gJ3gnXG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5pZCA9IGluZGV4XG4gICAgZGVsZXRlTm90ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWJ1dHRvbidcbiAgICBkZWxldGVOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGRlbGV0ZU5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICByZW1vdmVOb3RlRGF0YShldnQudGFyZ2V0KVxuICAgICAgcmVtb3ZlTm90ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICB9KVxuXG4gICAgaWYoZGVzY3JpcHRpb24gIT09ICcnIHx8IGxpc3QgIT09ICcnKXtcbiAgICAgIG5vdGVXcmFwcGVyLmFwcGVuZChkZWxldGVOb3RlQnV0dG9uLCB0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3QsIGFkZENoZWNrbGlzdEl0ZW0sIGR1ZURhdGUpXG4gICAgICBkaXYuYXBwZW5kKG5vdGVXcmFwcGVyKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tsaXN0KGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcikge1xuICBsZXQgbGlzdEJ1bGxldDtcbiAgbGV0IGxpc3RDaGFuZ2VJbnB1dDtcbiAgbGV0IGNoZWNrYm94O1xuICBsZXQgZGVsZXRlTGlzdEl0ZW1CdXR0b247XG4gIGxpc3RCdWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGxpc3RCdWxsZXQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXG4gIGxpc3RCdWxsZXQuaWQgPSBpbmRleFxuICBsaXN0QnVsbGV0LmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0tdGV4dCdcbiAgbGlzdEJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgbGlzdENoYW5nZUlucHV0LmZvY3VzKClcbiAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICB9KVxuICBsaXN0QnVsbGV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH0pXG4gIGxpc3RCdWxsZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSlcbiAgbGlzdENoYW5nZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBsaXN0Q2hhbmdlSW5wdXQudmFsdWUgPSBpdGVtLm5hbWVcbiAgbGlzdENoYW5nZUlucHV0LnNwZWxsY2hlY2sgPSBmYWxzZVxuICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NOYW1lID0gJ2NoYW5nZS1pbnB1dCdcbiAgbGlzdENoYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICBsaXN0Q2hhbmdlSW5wdXQuaWQgPSBpbmRleCAgXG4gIGxpc3RDaGFuZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICBpZihldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgIHVwZGF0ZUNoZWNrbGlzdERhdGEoZXZ0LnRhcmdldCwgbm90ZVdyYXBwZXIuaWQpXG4gICAgICB1cGRhdGVFbGVtZW50KGV2dC50YXJnZXQpXG4gICAgICBsaXN0Q2hhbmdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH1cbiAgfSlcbiAgICBcbiAgbGlzdENoYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZ0KSA9PiB7XG4gICAgaWYoZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpe1xuICAgICAgdXBkYXRlQ2hlY2tsaXN0RGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlci5pZClcbiAgICAgIHVwZGF0ZUVsZW1lbnQoZXZ0LnRhcmdldClcbiAgICAgIGxpc3RDaGFuZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGxpc3RCdWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgfVxuICB9KVxuICBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2NoZWNrYm94J1xuICBjaGVja2JveC5pZCA9IGluZGV4XG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gIGNoZWNrYm94LmNoZWNrZWQ7XG4gIGlmKGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWVcbiAgICBsaXN0QnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgIGlmKGxpc3RCdWxsZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpe1xuICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICAgIHVwZGF0ZUNoZWNrZWRJdGVtKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgbGlzdEJ1bGxldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICAgIHVwZGF0ZUNoZWNrZWRJdGVtKGV2dC50YXJnZXQsIG5vdGVXcmFwcGVyLmlkKVxuICAgIH1cbiAgfSlcbiAgZGVsZXRlTGlzdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5pbm5lckhUTUwgPSAneCdcbiAgZGVsZXRlTGlzdEl0ZW1CdXR0b24uaWQgPSBpbmRleFxuICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWNoZWNrbGlzdC1idXR0b24nXG4gIGRlbGV0ZUxpc3RJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICBkZWxldGVMaXN0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICByZW1vdmVDaGVja2xpc3RJdGVtRGF0YShldnQudGFyZ2V0LCBub3RlV3JhcHBlcilcbiAgICByZW1vdmVDaGVja2xpc3RJdGVtRWxlbWVudChldnQudGFyZ2V0KVxuICB9KVxuICByZXR1cm57XG4gICAgY2hlY2tib3gsIGxpc3RCdWxsZXQsIGxpc3RDaGFuZ2VJbnB1dCwgZGVsZXRlTGlzdEl0ZW1CdXR0b25cbiAgfVxufVxuXG5jb25zdCB1cGRhdGVFbGVtZW50Q2hlY2tsaXN0ID0gKGl0ZW0sIGluZGV4LCBub3RlV3JhcHBlcikgPT4ge1xuICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VsJHtub3RlV3JhcHBlci5pZH1gKVxuICBpZihwYXJlbnQpe1xuICAgIHBhcmVudC5yZW1vdmUoKVxuICB9XG4gIGlmKGl0ZW0uY2hlY2tsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0LmlkID0gYHVsJHtpbmRleH1gXG4gICAgaXRlbS5jaGVja2xpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBsaXN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsaXN0SXRlbURpdi5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJ1xuICAgICAgbGlzdEl0ZW1EaXYuaWQgPSBpbmRleCBcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDaGVja2xpc3QoaXRlbSwgaW5kZXgsIG5vdGVXcmFwcGVyKVxuICAgICAgbGlzdEl0ZW1EaXYuYXBwZW5kKGVsZW1lbnQuY2hlY2tib3gsIGVsZW1lbnQubGlzdEJ1bGxldCwgZWxlbWVudC5saXN0Q2hhbmdlSW5wdXQsIGVsZW1lbnQuZGVsZXRlTGlzdEl0ZW1CdXR0b24pXG4gICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbURpdilcbiAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubm90ZSR7aW5kZXh9YCkuYXBwZW5kKGxpc3QpXG4gIH1cbn1cblxuLy8gcmVtb3ZlQ2hlY2tsaXN0SXRlbUVsZW1lbnRcbmNvbnN0IHJlbW92ZUNoZWNrbGlzdEl0ZW1FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZSgpXG59XG5cbi8vIHJlbW92ZSBub3RlIGVsZW1lbnRcbmNvbnN0IHJlbW92ZU5vdGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbG9zZXN0KFwiLm5vdGUtd3JhcHBlclwiKS5yZW1vdmUoKVxuICByZW5kZXJBbGwoKVxufVxuXG4vLyB1cGRhdGVzIGVsZW1lbnQgaW4gRE9NXG5jb25zdCB1cGRhdGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IHByZXZpb3VzU2libGluZyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBwcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0ID0gZWxlbWVudC52YWx1ZVxufVxuXG4vLyBhZGQgZW50ZXIgZXZlbnQgdG8gY2hlY2tsaXN0IGlucHV0XG5jb25zdCBsaXN0SW5wdXRFdmVudCA9ICgpID0+IHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JylcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICBpZihldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgIGFkZExpc3RJdGVtKGV2dC50YXJnZXQpXG4gICAgICBsaXN0SXRlbURhdGEucHVzaCh7bmFtZTogZXZ0LnRhcmdldC52YWx1ZSwgY2hlY2tlZDogZmFsc2V9KVxuICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnXG4gICAgfVxuICB9KVxufVxuXG5cbi8vIGFkZHMgbGlzdCBpdGVtcyBvbiBpbnB1dCBmb3JtXG5jb25zdCBhZGRMaXN0SXRlbSA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmlubmVyVGV4dCA9IGVsZW1lbnQudmFsdWVcbiAgbGkuY2xhc3NOYW1lID0gJ3RlbXBvcmFyeS1mb3JtLWxpc3QtaXRlbSdcbiAgbGkuaWQgPSBsaXN0SXRlbURhdGEubGVuZ3RoXG4gIGxldCBjaGFuZ2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjaGFuZ2VMaXN0LmNsYXNzTmFtZSA9ICdoaWRlJ1xuICBjaGFuZ2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1pbnB1dCcpXG4gIGNoYW5nZUxpc3QudHlwZSA9ICd0ZXh0J1xuICBjaGFuZ2VMaXN0LnZhbHVlID0gZWxlbWVudC52YWx1ZVxuICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGNoYW5nZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgY2hhbmdlTGlzdC5mb2N1cygpXG4gIH0pXG4gIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBldmVudC50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgIHVwZGF0ZUNoZWNrbGlzdEFycmF5KGV2ZW50LnRhcmdldCwgY2hhbmdlTGlzdClcbiAgICAgIHVwZGF0ZUVsZW1lbnQoZXZlbnQudGFyZ2V0KVxuICAgICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH1cbiAgfSlcbiAgY2hhbmdlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHVwZGF0ZUNoZWNrbGlzdEFycmF5KGV2ZW50LnRhcmdldCwgY2hhbmdlTGlzdClcbiAgICAgIHVwZGF0ZUVsZW1lbnQoZXZlbnQudGFyZ2V0KVxuICAgICAgY2hhbmdlTGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH1cbiAgfSlcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWRpdicpXG4gIGlucHV0LmFwcGVuZChsaSwgY2hhbmdlTGlzdClcbn1cblxuXG4vLyBnZXRzIHVzZXIgaW5wdXQgZm9yIHZhbHVlc1xuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGxldCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtaW5wdXQnKVxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKVxuICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wb3JhcnktZm9ybS1saXN0LWl0ZW0nKVxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpXG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKVxuXG4gIGFkZE5vdGUodGl0bGUudmFsdWUsIG5vdGUudmFsdWUsIGxpc3RJdGVtRGF0YSwgZHVlRGF0ZS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG5cbiAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSlcbiAgbGlzdEl0ZW1EYXRhID0gW11cbiAgdGl0bGUudmFsdWUgPSAnJ1xuICBub3RlLnZhbHVlID0gJydcbiAgZHVlRGF0ZS52YWx1ZSA9ICcnXG4gIGxpc3RJdGVtRGF0YS52YWx1ZSA9ICcnXG4gIHByb2plY3QudmFsdWUgPSAnJ1xufVxuXG4vLyBhZGQgYnV0dG9uIGV2ZW50XG5jb25zdCBhZGRCdXR0b25FdmVudCA9ICgpID0+IHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYnV0dG9uJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICBnZXRJbnB1dCgpXG4gICAgaGlkZUlucHV0T3B0aW9ucygpXG4gIH0pXG59XG5cbi8vIHJlbW92ZXMgaGlkZSBjbGFzcyBmcm9tIGZvcm1cbmNvbnN0IGRpc3BsYXlJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkcyBoaWRlIGNsYXNzIHRvIGZvcm1cbmNvbnN0IGhpZGVJbnB1dE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBpbnB1dEZvcm0gPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLCBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0LWlucHV0JyksIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JyksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpXG4gIF1cbiAgaW5wdXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSlcbn1cblxuLy8gYWRkIGV2ZW50IHRvIG5vdGUgaW5wdXRcbmNvbnN0IGFkZElucHV0RXZlbnQgPSAoKSA9PiB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWlucHV0Jyk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlJbnB1dE9wdGlvbnMoKVxuICB9KVxufVxuXG5cblxuYWRkTm90ZSgnTXkgU2hvcHBpbmcgTGlzdCcsICduZWVkIHRvIGdvIHRvIHRoYXQgbWFya2V0JywgW3tuYW1lOiBcIndheSBwcm90ZWluXCIsIGNoZWNrZWQ6IHRydWV9LCBcbntuYW1lOiBcInBhcGVyIHRvd2Vsc1wiLCBjaGVja2VkOiBmYWxzZX0sIHtuYW1lOiBcImFmdGVyIHNoYXZlXCIsIGNoZWNrZWQ6IHRydWV9LCB7bmFtZTogXCJicmVhZFwiLCBjaGVja2VkOiBmYWxzZX1dLCBcbicxNC8wNS8yMDIwJywgJ0J1eScpXG5cbmFkZE5vdGUoJ0Rpbm5lciBQbGFubmluZycsICdQbGFubmluZywgcHJlcGFyaW5nLCBhbmQgcG9ydGlvbmluZyB5b3VyIG1lYWxzIGFoZWFkIG9mIHRpbWUgaXMgb25lIG9mIHRoZSBtb3N0IGVmZmVjdGl2ZSB0b29scyBmb3Iga2VlcGluZyB5b3VyIGZvb2QgYnVkZ2V0IGluIGNoZWNrJywgXG5bXSwgJzEyLzAyLzIwMjAnLCAnZGlubmVyJylcblxuaW1hZ2VzRXZlbnRMaXN0ZW5lcnMoKVxubGlzdElucHV0RXZlbnQoKVxuYWRkSW5wdXRFdmVudCgpXG5hZGRCdXR0b25FdmVudCgpXG5yZW5kZXJBbGwoKVxuXG4vLyBjaGFuZ2UgcmVuZGVyQWxsIHRvIGNvbmRpdGlvbmFsIHJlbmRlcmluZyB1c2luZyBlbXB0eSBhcyBvcHRpb24gKHgpXG4vLyBhZGQgZXZlbnQgdG8gYWRkIGJ1dHRvbiAoeClcbi8vIGNyZWF0ZSBjaGVjayBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgdmFsdWVzIGFuZCBjYWxscyBhZGQgZnVuY3Rpb24gKHgpXG4vLyBhZGQgZnVuY3Rpb24gdG8gZXZlbnQgdGhhdCB0YWtlcyB0aGUgaW5wdXQgYW5kIHVzZXMgZ2V0SW5wdXQgZnVuY3Rpb24gKHgpXG4vLyBhZGQgY29uZGl0aW9uIGluIGFkZE5vdGUgZnVuY3Rpb24gKHgpXG5cbi8vIG1ha2UgY2hlY2tsaXN0IGlucHV0IHdvcmsgKHgpXG4gIC8vIGFkZCBsaSBpbnNpZGUgZm9ybSB3aGVuZXZlciBlbnRlciBpcyBjbGlja2VkICh4KVxuICAvLyBzdG9yZSBlYWNoIGFkZGl0aW9uIG9mIGxpIGluc2lkZSBhcnJheSAoeClcbiAgLy8gdXNlIHRoYXQgYXJyYXkgd2hlbiBhZGRpbmcgdG8gZGF0YSAoeCkgXG5cbi8vIG1ha2UgZm9ybSBjaGVja2xpc3QgZWRpdGFibGUgKHgpXG4gIC8vIGFkZCBpbnB1dCB3aXRoIGVhY2ggYWRkICh4KVxuICAvLyBkZWZpbmUgdmFsdWUgb2YgZWxlbWVudCBpbnNpZGUgaW5wdXQgKHgpXG4gIC8vIHVwZGF0ZSBlbGVtZW50IG9uIGVudGVyICh4KVxuXG4vLyBtYWtlIG5vdGUgY2hlY2tsaXN0IGVkaXRhYmxlICh4KVxuICAvLyBhZGQgaW5wdXQgd2l0aCBlYWNoIGFkZCBcbiAgLy8gZGVmaW5lIHZhbHVlIG9mIGVsZW1lbnQgaW5zaWRlIGlucHV0IFxuICAvLyB1cGRhdGUgZWxlbWVudCBvbiBlbnRlciBcbiAgLy8gdXBkYXRlIGRhdGFiYXNlIG9uIGVudGVyXG5cbi8vIG1ha2UgZGVzY3JpcHRpb24gZWRpdGFibGUgKHgpXG5cbi8vIHJlbW92ZSBub3RlIG9wdGlvbiAoeClcblxuLy8gcmVtb3ZlIGNoZWNrbGlzdCBpdGVtIG9wdGlvbiAoeClcblxuLy8gY2hlY2sgaXRlbSBvcHRpb24gKHgpXG5cbi8vIGFkZGluZyBsaXN0IGl0ZW0gb3B0aW9uICh4KVxuXG5cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=