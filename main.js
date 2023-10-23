/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/api.js":
      /*!********************!*\
  !*** ./src/api.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");\n\n\nconst api = (() => {\n  const apiKey = "c19f5715236a49e6ab4144317230310";\n  const apiURL = "https://api.weatherapi.com/v1/current.json?";\n  const error = document.querySelector(".error");\n  const weather = document.querySelector(".weather");\n\n  async function fetchWeatherData(city) {\n    try {\n      const response = await fetch(\n        apiURL + `key=${apiKey}` + `&q=${city} mode:{ cors }`,\n      );\n      if (!response.ok) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].handleError();\n        return;\n      }\n      const data = await response.json();\n\n      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].updateDOM(data);\n      if (!data || data.loction) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].handleError();\n        return;\n      }\n      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].updateDOM(data);\n      error.style.display = "none";\n      weather.style.display = "block";\n    } catch (error) {\n      console.log("an error occured", error);\n      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].handleError();\n    }\n  }\n  // Return the public interface of the module\n  return {\n    fetchWeatherData,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?',
        );

        /***/
      },

    /***/ "./src/dom.js":
      /*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");\n\n\nconst weatherUI = (() => {\n  // DOM elements\n  const error = document.querySelector(".error");\n  const weather = document.querySelector(".weather");\n  const searchBar = document.querySelector(".search-bar");\n  const searchButton = document.querySelector(".search-button");\n\n  //Render data\n  function updateDOM(data) {\n    console.log(data);\n    document.querySelector(".city").innerHTML = data.location.name;\n\n    document.querySelector(".country").innerHTML = data.location.country;\n\n    document.querySelector(".weather-icon").src =\n      "https:" + `${data.current.condition.icon}`;\n\n    document.querySelector(".condition-text").innerHTML =\n      data.current.condition.text;\n\n    document.querySelector(".temp").innerHTML =\n      Math.round(data.current.temp_c) + "&degC";\n\n    document.querySelector(".date").innerHTML = data.location.localtime;\n\n    document.querySelector(".wind").innerHTML =\n      `<i class="fa-solid fa-wind fa-fade"></i>  Wind SP ` +\n      Math.round(data.current.wind_mph) +\n      "mph";\n\n    document.querySelector(".feels-like").innerHTML =\n      `<i class="fa-solid fa-hand-point-up fa-bounce"></i>  Feels like ` +\n      Math.round(data.current.feelslike_c) +\n      "&degC";\n\n    document.querySelector(".precip").innerHTML =\n      `<i class="fa-solid fa-cloud-showers-heavy fa-beat-fade"></i> Precip ` +\n      data.current.precip_in +\n      "inches";\n\n    document.querySelector(".humidity").innerHTML =\n      `<i class="fa-solid fa-water fa-shake"></i>Humidity ` +\n      data.current.humidity +\n      "%";\n  }\n\n  function handleError() {\n    error.style.display = "block";\n    weather.style.display = "none";\n  }\n\n  function showLoadingSpinner() {\n    // Show the loader\n    document.querySelector(".loader-container").style.display = "block";\n    // Hide the content\n    document.querySelector("main").style.display = "none";\n    // Simulate a 1-second loading time\n    setTimeout(function () {\n      // Hide the loader\n      document.querySelector(".loader-container").style.display = "none";\n      // Display the content\n      document.querySelector("main").style.display = "block";\n    }, 500);\n  }\n\n  searchButton.addEventListener("click", () => {\n    _api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchWeatherData(searchBar.value, showLoadingSpinner());\n  });\n\n  window.addEventListener("load", function () {\n    showLoadingSpinner();\n  });\n\n  // Return the public interface of the module\n  return {\n    updateDOM,\n    handleError,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherUI);\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?',
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");\n\n\n_api_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchWeatherData("london");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
