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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_tutors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tutors */ "./src/js/modules/tutors.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict'; //----------------------------------- Timer
  // Use the format "2023-09-04T15:30"

  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__countdown', '2023-11-02T00:00:00');
});

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = function hamburger() {
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
  });
};

hamburger();
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timer = function timer(selector, deadline) {
  function getTime() {
    const t = Date.parse(deadline) - Date.parse(new Date()),
          //get remaining time
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function addZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock() {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          interval = setInterval(updateClock, 1000);

    function updateClock() {
      const remainingTime = getTime();
      days.innerHTML = addZero(remainingTime.days);
      hours.innerHTML = addZero(remainingTime.hours);
      minutes.innerHTML = addZero(remainingTime.minutes);
      seconds.innerHTML = addZero(remainingTime.seconds);

      if (remainingTime.total <= 0) {
        clearInterval(interval);
      }
    }

    updateClock();
  }

  setClock();
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/modules/tutors.js":
/*!**********************************!*\
  !*** ./src/js/modules/tutors.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tutors = function tutors() {
  const teacherItem = document.querySelectorAll('.tutors__item'),
        teacherCards = document.querySelectorAll('.tutors__card'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
  let position = {};
  buttons.forEach((btn, i) => {
    function showBio() {
      //Getting all cards x-position
      teacherCards.forEach((card, j) => {
        position[`x${j}`] = Math.floor(card.getBoundingClientRect().x);
      }); // Animating the correct card to the center using CSS variables to control @keyframe animation

      teacherCards.forEach((card, j) => {
        const clickedCardPos = position[`x${j}`],
              centerCardPos = position.x1;

        if (j !== i) {
          card.style.opacity = 0.4;
          card.style.animation = 'getSmaller 1.2s ease-in-out forwards';
        } else {
          if (clickedCardPos !== centerCardPos) {
            const distance = centerCardPos - clickedCardPos;
            changeCssVar(`${distance}px`, `${-distance}px`);
            card.style.animation = 'flowToCenter 1.2s ease-in-out forwards';
            teacherItem[1].style.animation = 'flowToSide 1.2s ease-in-out forwards'; // we need to apply 2 diffirent animations to the same object
            // that's why we use a wrapper teacherItem
            // we apply 1 animation to the card and the second to the wrapper.
          }
        }
      });
      buttons.forEach(button => {
        button.removeEventListener('click', showBio);
      });
    }

    btn.addEventListener('click', showBio);
  });

  function changeCssVar(center = 0, initial = 0) {
    document.documentElement.style.setProperty('--initial-position', initial);
    document.documentElement.style.setProperty('--center-position', center);
  }
};

tutors();
/* harmony default export */ __webpack_exports__["default"] = (tutors);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map