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

/***/ "./src/img/LOGO3.png":
/*!***************************!*\
  !*** ./src/img/LOGO3.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/LOGO3.png\");\n\n//# sourceURL=webpack://soc-astro3/./src/img/LOGO3.png?");

/***/ }),

/***/ "./src/img/logosahuaro.png":
/*!*********************************!*\
  !*** ./src/img/logosahuaro.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/logosahuaro.png\");\n\n//# sourceURL=webpack://soc-astro3/./src/img/logosahuaro.png?");

/***/ }),

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutUs\": () => (/* binding */ aboutUs)\n/* harmony export */ });\nfunction aboutUs() {\n  const aboutUs = document.createElement(\"section\");\n  aboutUs.classList.add(\"aboutUs\");\n  const aboutUsHeading = document.createElement(\"h1\");\n  aboutUsHeading.textContent = \"Sobre nosotros\";\n  const aboutUsParagraph = document.createElement(\"p\");\n  aboutUsParagraph.textContent =\n    \"Fundada en 2022, la SAH tiene como objetivo divulgar la astronomía de manera incluyente. Somos una empresa sin fines de lucro y con responsabilidad social, cuyo único fin es la enseñanza de la ciencia a cualquier persona interesada sin importar nivel socio económico, cultural, profesional o cualquier otro.\";\n  aboutUs.appendChild(aboutUsHeading);\n  aboutUs.appendChild(aboutUsParagraph);\n  const aboutUsRow = document.createElement(\"div\");\n  aboutUsRow.classList.add(\"row\");\n\n  const marcoLegalCol = document.createElement(\"div\");\n  marcoLegalCol.classList.add(\"aboutUS-col\");\n\n  const marcoLegalHeading = document.createElement(\"h3\");\n  marcoLegalHeading.textContent = \"Marco Legal\";\n\n  const marcoLegalParagraph = document.createElement(\"p\");\n  marcoLegalParagraph.textContent =\n    \"La Sociedad Astronómica de Hermosillo, A.C. es una asociación sin fines de lucro.\";\n\n  const misionCol = document.createElement(\"div\");\n  misionCol.classList.add(\"aboutUS-col\");\n\n  const misionHeading = document.createElement(\"h3\");\n  misionHeading.textContent = \"Misión\";\n\n  const misionParagraph = document.createElement(\"p\");\n  misionParagraph.textContent =\n    \"Dar a conocer la astronomía y la ciencia al mayor número de personas para lograr hacer de ésta una herramienta de pensamiento crítico e innovador.\";\n\n  const comunidadCol = document.createElement(\"div\");\n  comunidadCol.classList.add(\"aboutUS-col\");\n\n  const comunidadHeading = document.createElement(\"h3\");\n  comunidadHeading.textContent = \"Comunidad\";\n\n  const comunidadParagraph = document.createElement(\"p\");\n  comunidadParagraph.textContent =\n    \"Ya sea de forma virtual o presencial, nos reunimos al menos una vez al mes para compartir nuestro gusto por explorar los cielos.\";\n\n  marcoLegalCol.appendChild(marcoLegalHeading);\n  marcoLegalCol.appendChild(marcoLegalParagraph);\n\n  misionCol.appendChild(misionHeading);\n  misionCol.appendChild(misionParagraph);\n\n  comunidadCol.appendChild(comunidadHeading);\n  comunidadCol.appendChild(comunidadParagraph);\n\n  aboutUsRow.appendChild(marcoLegalCol);\n  aboutUsRow.appendChild(misionCol);\n  aboutUsRow.appendChild(comunidadCol);\n\n  aboutUs.appendChild(aboutUsHeading);\n  aboutUs.appendChild(aboutUsParagraph);\n  aboutUs.appendChild(aboutUsRow);\n\n  return aboutUs;\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/aboutUs.js?");

/***/ }),

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activities\": () => (/* binding */ activities)\n/* harmony export */ });\n/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeContent */ \"./src/removeContent.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\n\n\nfunction activities() {\n  (0,_removeContent__WEBPACK_IMPORTED_MODULE_0__.removeContent)();\n  const content = document.getElementById(\"content\");\n  // create header section\n  const header = document.createElement(\"section\");\n  header.classList.add(\"header\");\n\n  const nav = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.navigation)();\n  header.appendChild(nav);\n  content.appendChild(header);\n\n  const activities = document.createElement(\"section\");\n  activities.classList.add(\"activities\");\n  const activitiesHeading = document.createElement(\"h1\");\n  activitiesHeading.textContent = \"Actividades\";\n  activities.appendChild(activitiesHeading);\n  content.appendChild(activities);\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/activities.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hero\": () => (/* binding */ hero)\n/* harmony export */ });\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/scroll.js\");\n\nfunction hero() {\n  // get body element\n  const content = document.getElementById(\"content\");\n  // create hero section\n  const hero = document.createElement(\"section\");\n  hero.classList.add(\"hero\");\n\n  // create text-box element\n  const textBox = document.createElement(\"div\");\n  textBox.classList.add(\"text-box\");\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"Sociedad Astronómica de Hermosillo\";\n  const p1 = document.createElement(\"p\");\n  p1.textContent = \"Cielos despejados en el noroeste de México\";\n  const p2 = document.createElement(\"p\");\n  const link6 = document.createElement(\"button\");\n  //link6.href = \"#\";\n  link6.classList.add(\"hero-btn\");\n  link6.textContent = \"Conoce más sobre nosotros\";\n  link6.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_scroll__WEBPACK_IMPORTED_MODULE_0__.scrollToSection)(\"section.aboutUs\");\n  });\n\n  p2.appendChild(link6);\n  textBox.appendChild(h1);\n  textBox.appendChild(p1);\n  textBox.appendChild(p2);\n\n  hero.appendChild(textBox);\n\n  return hero;\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/hero.js?");

/***/ }),

/***/ "./src/imageOfDay.js":
/*!***************************!*\
  !*** ./src/imageOfDay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageOfTheDay\": () => (/* binding */ imageOfTheDay)\n/* harmony export */ });\n/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeContent */ \"./src/removeContent.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\n\n\nfunction imageOfTheDay() {\n  (0,_removeContent__WEBPACK_IMPORTED_MODULE_0__.removeContent)();\n  const content = document.getElementById(\"content\");\n  // create header section\n  const header = document.createElement(\"section\");\n  header.classList.add(\"header\");\n\n  const nav = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.navigation)();\n  header.appendChild(nav);\n  content.appendChild(header);\n\n  const imageOfTheDay = document.createElement(\"section\");\n  imageOfTheDay.classList.add(\"imageOfTheDay\");\n  const imageOfTheDayHeading = document.createElement(\"h1\");\n  imageOfTheDayHeading.textContent = \"Imagen del día\";\n  imageOfTheDay.appendChild(imageOfTheDayHeading);\n  content.appendChild(imageOfTheDay);\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/imageOfDay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _img_LOGO3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/LOGO3.png */ \"./src/img/LOGO3.png\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ \"./src/navigation.js\");\n/* harmony import */ var _mobileMenuTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobileMenuTransition */ \"./src/mobileMenuTransition.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeContent */ \"./src/removeContent.js\");\n\n\n\n\n\n\n\n\nfunction index() {\n  (0,_removeContent__WEBPACK_IMPORTED_MODULE_5__.removeContent)();\n\n  // Add your JavaScript code here\n  console.log(\"Hello, world!\");\n\n  // get body element\n  const content = document.getElementById(\"content\");\n\n  // call the navigation function and append the nav element to the hero section\n  const nav = (0,_navigation_js__WEBPACK_IMPORTED_MODULE_2__.navigation)();\n  content.appendChild(nav);\n\n  const heroSection = (0,_hero__WEBPACK_IMPORTED_MODULE_4__.hero)();\n  content.appendChild(heroSection);\n\n  // create aboutUs section\n  const aboutUsSection = (0,_aboutUs__WEBPACK_IMPORTED_MODULE_0__.aboutUs)();\n  content.appendChild(aboutUsSection);\n}\n\nindex();\n\n\n//# sourceURL=webpack://soc-astro3/./src/index.js?");

/***/ }),

/***/ "./src/mobileMenuTransition.js":
/*!*************************************!*\
  !*** ./src/mobileMenuTransition.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideMenu\": () => (/* binding */ hideMenu),\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\nlet navLinks = document.getElementById(\"navLinks\");\n\nfunction showMenu() {\n  navLinks.style.right = \"0\";\n  return navLinks;\n}\nfunction hideMenu() {\n  navLinks.style.right = \"-200px\";\n  return navLinks;\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/mobileMenuTransition.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigation\": () => (/* binding */ navigation)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _activities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities */ \"./src/activities.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n/* harmony import */ var _imageOfDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageOfDay */ \"./src/imageOfDay.js\");\n/* harmony import */ var _img_logosahuaro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/logosahuaro.png */ \"./src/img/logosahuaro.png\");\n/* harmony import */ var _mobileMenuTransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobileMenuTransition */ \"./src/mobileMenuTransition.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll */ \"./src/scroll.js\");\n\n\n\n\n\n\n\n\n\nfunction navigation() {\n  // create navigation element\n  const nav = document.createElement(\"nav\");\n  // create navigation logo and text elements\n  const navLogo = document.createElement(\"div\");\n  navLogo.classList.add(\"nav-logo\");\n  const logoImage = document.createElement(\"img\");\n  logoImage.src = _img_logosahuaro_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  logoImage.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.index)();\n  });\n\n  const textLink = document.createElement(\"a\");\n  textLink.href = \"index.html\";\n  const navText = document.createElement(\"div\");\n  navText.classList.add(\"nav-text\");\n  navText.textContent = \"Sociedad Astronómica de Hermosillo\";\n  textLink.appendChild(navText);\n  navLogo.appendChild(logoImage);\n\n  // create navigation links\n  const navLinks = document.createElement(\"div\");\n  navLinks.classList.add(\"nav-links\");\n  navLinks.id = \"navLinks\";\n  const closeIcon = document.createElement(\"i\");\n  closeIcon.classList.add(\"fa-solid\", \"fa-xmark\");\n  closeIcon.onclick = _mobileMenuTransition__WEBPACK_IMPORTED_MODULE_6__.hideMenu;\n  const menuIcon = document.createElement(\"i\");\n  menuIcon.classList.add(\"fa-solid\", \"fa-bars\");\n  menuIcon.onclick = _mobileMenuTransition__WEBPACK_IMPORTED_MODULE_6__.showMenu;\n  const ul = document.createElement(\"ul\");\n  const li1 = document.createElement(\"li\");\n  const link1 = document.createElement(\"a\");\n  link1.href = \"#\";\n  link1.textContent = \"Actividades\";\n  link1.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_activities__WEBPACK_IMPORTED_MODULE_2__.activities)();\n  });\n  li1.appendChild(link1);\n  const li2 = document.createElement(\"li\");\n  const link2 = document.createElement(\"a\");\n  link2.href = \"#\";\n  link2.textContent = \"Noticias\";\n  link2.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_news__WEBPACK_IMPORTED_MODULE_3__.newsSection)();\n  });\n  li2.appendChild(link2);\n  const li3 = document.createElement(\"li\");\n  const link3 = document.createElement(\"a\");\n  link3.href = \"#\";\n  link3.textContent = \"Imagen del día\";\n  link3.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    (0,_imageOfDay__WEBPACK_IMPORTED_MODULE_4__.imageOfTheDay)();\n  });\n  li3.appendChild(link3);\n  const li4 = document.createElement(\"li\");\n  const link4 = document.createElement(\"a\");\n  link4.href = \"#\";\n\n  link4.textContent = \"Galería\";\n  li4.appendChild(link4);\n  const li5 = document.createElement(\"li\");\n  const link5 = document.createElement(\"a\");\n  link5.href = \"#\";\n  link5.textContent = \"Regístrate\";\n  li5.appendChild(link5);\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n  ul.appendChild(li3);\n  ul.appendChild(li4);\n  ul.appendChild(li5);\n  navLinks.appendChild(closeIcon);\n  navLinks.appendChild(ul);\n  navLinks.appendChild(menuIcon);\n\n  // append elements to nav\n  nav.appendChild(navLogo);\n  nav.appendChild(navLinks);\n  nav.appendChild(navLogo);\n  nav.appendChild(navLinks);\n\n  return nav;\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/navigation.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newsSection\": () => (/* binding */ newsSection)\n/* harmony export */ });\n/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeContent */ \"./src/removeContent.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n\n\n\n\nfunction newsSection() {\n  (0,_removeContent__WEBPACK_IMPORTED_MODULE_0__.removeContent)();\n  const content = document.getElementById(\"content\");\n  // create header section\n  const header = document.createElement(\"section\");\n  header.classList.add(\"header\");\n\n  const nav = (0,_navigation__WEBPACK_IMPORTED_MODULE_1__.navigation)();\n  header.appendChild(nav);\n  content.appendChild(header);\n\n  const news = document.createElement(\"section\");\n  news.classList.add(\"news\");\n  const newsHeading = document.createElement(\"h1\");\n  newsHeading.textContent = \"Noticias\";\n  news.appendChild(newsHeading);\n  content.appendChild(news);\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/news.js?");

/***/ }),

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeContent\": () => (/* binding */ removeContent)\n/* harmony export */ });\nfunction removeContent() {\n  const content = document.getElementById(\"content\");\n  while (content.lastChild) {\n    content.removeChild(content.lastChild);\n  }\n  return content;\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/removeContent.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollToSection\": () => (/* binding */ scrollToSection)\n/* harmony export */ });\nfunction scrollToSection(sectionId) {\n  const section = document.querySelector(sectionId);\n  window.scrollTo({\n    top: section.offsetTop,\n    behavior: \"smooth\",\n  });\n}\n\n\n//# sourceURL=webpack://soc-astro3/./src/scroll.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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