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
  // Use the format "2023-09-04T15:30:00"

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
  const teacherCards = document.querySelectorAll('.tutors__card'),
        teacherInners = document.querySelectorAll('.tutors__inner'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
  let clicked = false;
  buttons.forEach((btn, i) => {
    const init = () => {
      let positionX = [];

      const getCurrentPosition = () => {
        teacherCards.forEach((card, j) => {
          positionX[j] = Math.floor(card.getBoundingClientRect().x);
        });
      };

      getCurrentPosition();
      const positionClicked = positionX[i],
            positionCenter = positionX[1];

      const changeCssVar = (toCenter = 0, toSide = 0, fromCenter, fromSide) => {
        document.documentElement.style.setProperty('--to-center', toCenter);
        document.documentElement.style.setProperty('--to-side', toSide);
        document.documentElement.style.setProperty('--from-center', fromCenter);
        document.documentElement.style.setProperty('--from-side', fromSide);
      };

      const calculateDistance = () => {
        const distance = positionCenter - positionClicked;
        changeCssVar(`${distance}px`, `${-distance}px`, positionCenter, positionClicked);
      }; //Slide the card title from 'bio' to 'close'


      const animateButtons = (frontTranslate, backTranslate, frontOpacity, backOpacity) => {
        const btnFront = btn.querySelector('.front'),
              btnBack = btn.querySelector('.back');
        btnFront.style.cssText = `
                    transform: translateY(${frontTranslate}px);
                    opacity: ${frontOpacity};			
                    `;
        btnBack.style.cssText = `
                    transform: translateY(${backTranslate}px);
                    opacity: ${backOpacity};			
                    `;
      };

      const showHideBio = () => {
        bios.forEach(bio => bio.classList.add('animate__animated'));
        bios.forEach((bio, index) => {
          bio.style.display = 'none';
          bio.classList.remove('animate__fadeInUp', 'animate__fadeOutDown');

          if (!clicked && index === i) {
            bio.style.display = 'block';
            bio.classList.add('animate__fadeInUp');
          } else if (clicked && index === i) {
            bio.style.display = 'block';
            bio.classList.add('animate__fadeOutDown');
          }
        });
      };

      const showHideButtons = () => {
        buttons.forEach(button => {
          if (!clicked) {
            if (button !== btn) {
              button.classList.remove('animate__animated', 'animate__fadeIn');
              button.classList.add('button-hide');
              button.disabled = true;
            }
          } else {
            button.style.display = 'initial';
            button.classList.remove('button-hide');
            button.disabled = false;
          }
        });
      };

      const animateForward = () => {
        teacherCards.forEach((card, j) => {
          if (j !== i) {
            teacherInners[j].style.animation = 'getSmaller 1s ease-in-out forwards';
          } else {
            card.setAttribute('data-clicked', 'true');

            if (!card.getAttribute('data-center')) {
              calculateDistance(); // we need to apply 2 diffirent animations to the same object
              // that's why we use a wrapper teacherItem
              // we apply 1 animation to the card and the second to the wrapper.

              card.style.animation = 'flowToCenterForward 1s ease-in-out forwards'; // card.style.position = 'relative';

              card.style.zIndex = 11;
              teacherCards[1].style.animation = 'flowToSideForward 1s ease-in-out forwards';
            }
          }
        });
      };

      const animateBackwards = () => {
        teacherInners.forEach(inner => {
          if (!inner.closest('[data-clicked]')) {
            inner.style.animation = 'getBigger 1s ease-in-out forwards';
          }
        });
        teacherCards.forEach(card => {
          if (card.getAttribute('data-clicked') && !card.getAttribute('data-center')) {
            card.style.position = 'initial';
            card.style.zIndex = 1;
            card.style.animation = 'flowToSideBack 1s ease-in-out forwards';
            teacherCards[1].style.animation = 'flowToCenterBack 1s ease-in-out forwards';
          }

          card.removeAttribute('data-clicked');
        });
      }; // initiating sequence


      showHideBio();
      showHideButtons();

      if (!clicked) {
        animateButtons(-30, -24, 0, 1);
        animateForward();
        clicked = true;
      } else {
        animateButtons(0, 0, 1, 0);
        animateBackwards();
        clicked = false;
      }
    };

    btn.addEventListener('click', init);
  });
};

tutors();
/* harmony default export */ __webpack_exports__["default"] = (tutors);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map