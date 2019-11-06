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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/JavaScript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JavaScript/AppScripts/keyboard.js":
/*!***********************************************!*\
  !*** ./src/JavaScript/AppScripts/keyboard.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let buttonsArray = [
  {
    datakey: "192",
    value: {
      eng: { uppercase: "~", lowercase: "`" },
      rus: { uppercase: "Ё", lowercase: "ё" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "49",
    value: {
      eng: { uppercase: "!", lowercase: "1" },
      rus: { uppercase: "!", lowercase: "1" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "50",
    value: {
      eng: { uppercase: "@", lowercase: "2" },
      rus: { uppercase: '"', lowercase: "2" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "51",
    value: {
      eng: { uppercase: "#", lowercase: "3" },
      rus: { uppercase: "№", lowercase: "3" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "52",
    value: {
      eng: { uppercase: "$", lowercase: "4" },
      rus: { uppercase: ";", lowercase: "4" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "53",
    value: {
      eng: { uppercase: "%", lowercase: "5" },
      rus: { uppercase: "%", lowercase: "5" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "54",
    value: {
      eng: { uppercase: "^", lowercase: "6" },
      rus: { uppercase: ":", lowercase: "6" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "55",
    value: {
      eng: { uppercase: "&", lowercase: "7" },
      rus: { uppercase: "?", lowercase: "7" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "56",
    value: {
      eng: { uppercase: "*", lowercase: "8" },
      rus: { uppercase: "*", lowercase: "8" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "57",
    value: {
      eng: { uppercase: "(", lowercase: "9" },
      rus: { uppercase: "(", lowercase: "9" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "48",
    value: {
      eng: { uppercase: ")", lowercase: "0" },
      rus: { uppercase: ")", lowercase: "0" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "189",
    value: {
      eng: { uppercase: "_", lowercase: "-" },
      rus: { uppercase: "_", lowercase: "-" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "187",
    value: {
      eng: { uppercase: "+", lowercase: "=" },
      rus: { uppercase: "+", lowercase: "=" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "8",
    value: "Backspace",
    css: { common: "common_keyboard", special: "backspace" },
    type: "service"
  },
  {
    datakey: "9",
    value: "Tab",
    css: { common: "common_keyboard", special: "tab" },
    type: "service"
  },
  {
    datakey: "81",
    value: {
      eng: { uppercase: "Q", lowercase: "q" },
      rus: { uppercase: "Й", lowercase: "й" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "87",
    value: {
      eng: { uppercase: "W", lowercase: "w" },
      rus: { uppercase: "Ц", lowercase: "ц" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "69",
    value: {
      eng: { uppercase: "E", lowercase: "e" },
      rus: { uppercase: "У", lowercase: "у" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "82",
    value: {
      eng: { uppercase: "R", lowercase: "r" },
      rus: { uppercase: "К", lowercase: "к" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "84",
    value: {
      eng: { uppercase: "T", lowercase: "t" },
      rus: { uppercase: "Е", lowercase: "е" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "89",
    value: {
      eng: { uppercase: "Y", lowercase: "y" },
      rus: { uppercase: "Н", lowercase: "н" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "85",
    value: {
      eng: { uppercase: "U", lowercase: "u" },
      rus: { uppercase: "Г", lowercase: "г" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "73",
    value: {
      eng: { uppercase: "I", lowercase: "i" },
      rus: { uppercase: "Ш", lowercase: "ш" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "79",
    value: {
      eng: { uppercase: "O", lowercase: "o" },
      rus: { uppercase: "Щ", lowercase: "щ" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "80",
    value: {
      eng: { uppercase: "P", lowercase: "p" },
      rus: { uppercase: "З", lowercase: "з" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "219",
    value: {
      eng: { uppercase: "{", lowercase: "[" },
      rus: { uppercase: "Х", lowercase: "х" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "221",
    value: {
      eng: { uppercase: "}", lowercase: "]" },
      rus: { uppercase: "Ъ", lowercase: "ъ" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "220",
    value: {
      eng: { uppercase: "|", lowercase: "\\" },
      rus: { uppercase: "/", lowercase: "\\" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "46",
    value: "Del",
    css: { common: "common_keyboard", special: "del" },
    type: "service"
  },
  {
    datakey: "20",
    value: "Caps Lock",
    css: { common: "common_keyboard", special: "caps" },
    type: "service"
  },
  {
    datakey: "65",
    value: {
      eng: { uppercase: "A", lowercase: "a" },
      rus: { uppercase: "Ф", lowercase: "ф" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "83",
    value: {
      eng: { uppercase: "S", lowercase: "s" },
      rus: { uppercase: "Ы", lowercase: "ы" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "68",
    value: {
      eng: { uppercase: "D", lowercase: "d" },
      rus: { uppercase: "В", lowercase: "в" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "70",
    value: {
      eng: { uppercase: "F", lowercase: "f" },
      rus: { uppercase: "А", lowercase: "а" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "71",
    value: {
      eng: { uppercase: "G", lowercase: "g" },
      rus: { uppercase: "П", lowercase: "п" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "72",
    value: {
      eng: { uppercase: "H", lowercase: "h" },
      rus: { uppercase: "Р", lowercase: "р" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "74",
    value: {
      eng: { uppercase: "J", lowercase: "j" },
      rus: { uppercase: "О", lowercase: "о" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "75",
    value: {
      eng: { uppercase: "K", lowercase: "k" },
      rus: { uppercase: "Л", lowercase: "л" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "76",
    value: {
      eng: { uppercase: "L", lowercase: "l" },
      rus: { uppercase: "Д", lowercase: "д" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "186",
    value: {
      eng: { uppercase: ":", lowercase: ";" },
      rus: { uppercase: "Ж", lowercase: "ж" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "222",
    value: {
      eng: { uppercase: '"', lowercase: "'" },
      rus: { uppercase: "Э", lowercase: "э" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "13",
    value: "Enter",
    css: { common: "common_keyboard", special: "enter" },
    type: "service"
  },
  {
    datacode: 'ShiftLeft',
    datakey: "16",
    value: "Shift",
    css: { common: "common_keyboard", special: "shift" },
    type: "service"
  },
  {
    datakey: "90",
    value: {
      eng: { uppercase: "Z", lowercase: "z" },
      rus: { uppercase: "Я", lowercase: "я" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "88",
    value: {
      eng: { uppercase: "X", lowercase: "x" },
      rus: { uppercase: "Ч", lowercase: "ч" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "67",
    value: {
      eng: { uppercase: "C", lowercase: "c" },
      rus: { uppercase: "С", lowercase: "с" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "86",
    value: {
      eng: { uppercase: "V", lowercase: "v" },
      rus: { uppercase: "М", lowercase: "м" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "66",
    value: {
      eng: { uppercase: "B", lowercase: "b" },
      rus: { uppercase: "И", lowercase: "и" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "78",
    value: {
      eng: { uppercase: "N", lowercase: "n" },
      rus: { uppercase: "Т", lowercase: "т" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "77",
    value: {
      eng: { uppercase: "M", lowercase: "m" },
      rus: { uppercase: "Ь", lowercase: "ь" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "188",
    value: {
      eng: { uppercase: "<", lowercase: "," },
      rus: { uppercase: "Б", lowercase: "б" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "190",
    value: {
      eng: { uppercase: ">", lowercase: "." },
      rus: { uppercase: "Ю", lowercase: "ю" }
    },
    css: "common_keyboard"
  },
  {
    datakey: "191",
    value: {
      eng: { uppercase: "?", lowercase: "/" },
      rus: { uppercase: ",", lowercase: "." }
    },
    css: "common_keyboard"
  },
  {
    datakey: "38",
    value: "up",
    css: { common: "common_keyboard", special: "up" },
    type: "service"
  },
  {
    datacode: 'ShiftRight',
    datakey: "16",
    value: "Shift",
    css: { common: "common_keyboard", special: "shift" },
    type: "service"
  },

  {
    datacode: 'ControlLeft',
    datakey: "17",
    value: "Ctrl",
    css: { common: "common_keyboard", special: "ctrl" },
    type: "service"
  },
  {
    datakey: "91",
    value: "Win",
    css: { common: "common_keyboard" },
    type: "service"
  },
  {
    datacode: 'AltLeft',
    datakey: "18",
    value: "Alt",
    css: { common: "common_keyboard" },
    type: "service"
  },
  {
    datakey: "32",
    value: "Space",
    css: { common: "common_keyboard", special: "space" },
    type: "service"
  },
  {
    datacode: 'AltRight',
    datakey: "18",
    value: "Alt",
    css: { common: "common_keyboard" },
    type: "service"
  },
  {
    datakey: "37",
    value: "left",
    css: { common: "common_keyboard", special: "left" },
    type: "service"
  },
  {
    datakey: "40",
    value: "down",
    css: { common: "common_keyboard", special: "down" },
    type: "service"
  },
  {
    datakey: "39",
    value: "right",
    css: { common: "common_keyboard", special: "right" },
    type: "service"
  },
  {
    datacode: 'ControlRight',
    datakey: "17",
    value: "Ctrl",
    css: { common: "common_keyboard", special: "ctrl" },
    type: "service"
  }
];

let wrapper = document.createElement("div");
wrapper.className = "wrapper";
let input = document.createElement("textarea");
input.className = "input";
input.setAttribute("disabled", "disabled");
wrapper.insertAdjacentElement("beforeend", input);
let keyPad = document.createElement("div");
keyPad.className = "keypad";
wrapper.insertAdjacentElement("beforeend", keyPad);
document.body.append(wrapper);

let buttonContainer;
let localStorageLang;
let keysLang;
let keysCase = "lowercase";
localStorageLang = localStorage.getItem("myLang");

if (!localStorageLang) {
  keysLang = "rus";
} else {
  keysLang = localStorageLang;
}

buttonsArray.forEach(button => {
  buttonContainer = document.createElement("div");
  if (button.datacode) {
    buttonContainer.setAttribute("data-code", button.datacode);
  }
  buttonContainer.setAttribute("data-key", button.datakey);
  if (button.type == "service") {
    buttonContainer.innerText = button.value;
    for (var key in button.css) {
      buttonContainer.classList.add(button.css[key]);
    }
  } else {
    if (!localStorageLang) {
      buttonContainer.innerText = button.value[keysLang].lowercase;
      localStorage.setItem("myLang", keysLang);
    } else {
      buttonContainer.innerText = button.value[localStorageLang].lowercase;
    }
    buttonContainer.className = button.css;
  }
  keyPad.insertAdjacentElement("beforeend", buttonContainer);
});

const allKeys = Array.from(document.querySelectorAll(".common_keyboard"));

allKeys.forEach(key => key.addEventListener("transitionend", removeTransition));

keyPad.addEventListener("click", clickKeyboard);
keyPad.addEventListener("mousedown", clickShiftDown);
keyPad.addEventListener("mouseup", clickShiftUp);
window.addEventListener("keydown", pushKeypad);
window.addEventListener("keydown", changeLang);
window.addEventListener("keydown", shiftDown);
window.addEventListener("keyup", shiftUp);

function clickKeyboard(e) {
  if (!Array.from(e.target.classList).includes('common_keyboard')) {return}
  e.target.classList.add("active");
  let keyValue = e.target.innerText;
  clicksPushesHandler(keyValue);
}
function clickShiftDown(e) {
  if (e.target.innerText == "Shift") {
    changeCase();
  }
}
function clickShiftUp(e) {
  if (e.target.innerText == "Shift") {
    changeCase();
  }
}
function pushKeypad(e) {
  let key;
  if (e.keyCode == 16 || e.keyCode == 18 || e.keyCode == 17) {
    key = document.querySelector(`div[data-code="${e.code}"]`)
  }
  else {key = document.querySelector(`div[data-key="${e.keyCode}"]`)}
  let keyValue = key.innerText;
  clicksPushesHandler(keyValue);
  key.classList.add("active");
}
function clicksPushesHandler(value) {
  switch (value) {
    case "Space":
      input.innerHTML += " ";
      break;
    case "Backspace":
      let temper = input.defaultValue.split("");
      temper.pop();
      input.innerHTML = temper.join("");
      break;
    case "Tab":
      input.innerHTML += "\t";
      break;
    case "Enter":
      input.innerHTML += "\n";
      break;
    case "Caps Lock":
      changeCase();
      break;
    case "Shift":
    case "Alt":
    case "Ctrl":
    case 'up':
    case 'down':
    case 'left':
    case 'right':
    case 'Win':
    case 'Del':
      break;
    default:
      input.innerHTML += value;
  }
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("active");
}
function changeLang(e) {
  if (e.ctrlKey && e.altKey) {
    
    allKeys.forEach(domButton => {
      for (let i = 0; i < buttonsArray.length; i++) {
        if (
          !buttonsArray[i].type &&
          domButton.innerText === buttonsArray[i].value[keysLang][keysCase]
        ) {
          if (keysLang === "eng") {
            domButton.innerText = buttonsArray[i].value.rus[keysCase];
          } else {
            domButton.innerText = buttonsArray[i].value.eng[keysCase];
          }
          break;
        }
      }
    });
    if (keysLang === "eng") {
      keysLang = "rus";
      localStorage.setItem("myLang", keysLang);
    } else {
      keysLang = "eng";
      localStorage.setItem("myLang", keysLang);
    }
  }
}
function changeCase () {
  if (keysCase == "uppercase") {
    buttonsArray.forEach(button => {
      allKeys.forEach(domButton => {
        if (
          !button.type &&
          domButton.innerText === button.value[keysLang].uppercase
        ) {
          domButton.innerText = button.value[keysLang].lowercase;
          keysCase = "lowercase";
        }
      });
    });
  } else {
    buttonsArray.forEach(button => {
      allKeys.forEach(domButton => {
        if (
          !button.type &&
          domButton.innerText === button.value[keysLang].lowercase
        ) {
          domButton.innerText = button.value[keysLang].uppercase;
          keysCase = "uppercase";
        }
      });
    });
  }
}
function shiftDown (e) {
  if (e.key == "Shift" && !e.repeat) {
    changeCase();
  }
}
function shiftUp (e) {
  if (e.key == "Shift") {
    changeCase()
  }
}




/***/ }),

/***/ "./src/JavaScript/app.js":
/*!*******************************!*\
  !*** ./src/JavaScript/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppScripts_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppScripts/keyboard */ "./src/JavaScript/AppScripts/keyboard.js");
/* harmony import */ var _AppScripts_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppScripts_keyboard__WEBPACK_IMPORTED_MODULE_1__);






/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0phdmFTY3JpcHQvQXBwU2NyaXB0cy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSmF2YVNjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzBmOGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZLGNBQWM7QUFDMUIsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtEQUFrRDtBQUM1RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDRDQUE0QztBQUN0RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLFlBQVk7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNHOzs7Ozs7Ozs7Ozs7OztBQ0Q5Qix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSmF2YVNjcmlwdC9hcHAuanNcIik7XG4iLCJsZXQgYnV0dG9uc0FycmF5ID0gW1xyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMTkyXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIn5cIiwgbG93ZXJjYXNlOiBcImBcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCBXCIsIGxvd2VyY2FzZTogXCLRkVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNDlcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiIVwiLCBsb3dlcmNhc2U6IFwiMVwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwiIVwiLCBsb3dlcmNhc2U6IFwiMVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNTBcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiQFwiLCBsb3dlcmNhc2U6IFwiMlwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6ICdcIicsIGxvd2VyY2FzZTogXCIyXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI1MVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCIjXCIsIGxvd2VyY2FzZTogXCIzXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLihJZcIiwgbG93ZXJjYXNlOiBcIjNcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjUyXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIiRcIiwgbG93ZXJjYXNlOiBcIjRcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIjtcIiwgbG93ZXJjYXNlOiBcIjRcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjUzXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIiVcIiwgbG93ZXJjYXNlOiBcIjVcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIiVcIiwgbG93ZXJjYXNlOiBcIjVcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjU0XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIl5cIiwgbG93ZXJjYXNlOiBcIjZcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIjpcIiwgbG93ZXJjYXNlOiBcIjZcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjU1XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIiZcIiwgbG93ZXJjYXNlOiBcIjdcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIj9cIiwgbG93ZXJjYXNlOiBcIjdcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjU2XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIipcIiwgbG93ZXJjYXNlOiBcIjhcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIipcIiwgbG93ZXJjYXNlOiBcIjhcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjU3XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIihcIiwgbG93ZXJjYXNlOiBcIjlcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIihcIiwgbG93ZXJjYXNlOiBcIjlcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjQ4XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIilcIiwgbG93ZXJjYXNlOiBcIjBcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIilcIiwgbG93ZXJjYXNlOiBcIjBcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjE4OVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJfXCIsIGxvd2VyY2FzZTogXCItXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCJfXCIsIGxvd2VyY2FzZTogXCItXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIxODdcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiK1wiLCBsb3dlcmNhc2U6IFwiPVwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwiK1wiLCBsb3dlcmNhc2U6IFwiPVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiOFwiLFxyXG4gICAgdmFsdWU6IFwiQmFja3NwYWNlXCIsXHJcbiAgICBjc3M6IHsgY29tbW9uOiBcImNvbW1vbl9rZXlib2FyZFwiLCBzcGVjaWFsOiBcImJhY2tzcGFjZVwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI5XCIsXHJcbiAgICB2YWx1ZTogXCJUYWJcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwidGFiXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjgxXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIlFcIiwgbG93ZXJjYXNlOiBcInFcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCZXCIsIGxvd2VyY2FzZTogXCLQuVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiODdcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiV1wiLCBsb3dlcmNhc2U6IFwid1wiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0KZcIiwgbG93ZXJjYXNlOiBcItGGXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI2OVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJFXCIsIGxvd2VyY2FzZTogXCJlXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQo1wiLCBsb3dlcmNhc2U6IFwi0YNcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjgyXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIlJcIiwgbG93ZXJjYXNlOiBcInJcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCaXCIsIGxvd2VyY2FzZTogXCLQulwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiODRcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiVFwiLCBsb3dlcmNhc2U6IFwidFwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JVcIiwgbG93ZXJjYXNlOiBcItC1XCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI4OVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJZXCIsIGxvd2VyY2FzZTogXCJ5XCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQnVwiLCBsb3dlcmNhc2U6IFwi0L1cIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjg1XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIlVcIiwgbG93ZXJjYXNlOiBcInVcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCTXCIsIGxvd2VyY2FzZTogXCLQs1wiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNzNcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiSVwiLCBsb3dlcmNhc2U6IFwiaVwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0KhcIiwgbG93ZXJjYXNlOiBcItGIXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI3OVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJPXCIsIGxvd2VyY2FzZTogXCJvXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQqVwiLCBsb3dlcmNhc2U6IFwi0YlcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjgwXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIlBcIiwgbG93ZXJjYXNlOiBcInBcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCXXCIsIGxvd2VyY2FzZTogXCLQt1wiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMjE5XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIntcIiwgbG93ZXJjYXNlOiBcIltcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItClXCIsIGxvd2VyY2FzZTogXCLRhVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMjIxXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIn1cIiwgbG93ZXJjYXNlOiBcIl1cIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCqXCIsIGxvd2VyY2FzZTogXCLRilwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMjIwXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcInxcIiwgbG93ZXJjYXNlOiBcIlxcXFxcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcIi9cIiwgbG93ZXJjYXNlOiBcIlxcXFxcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjQ2XCIsXHJcbiAgICB2YWx1ZTogXCJEZWxcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwiZGVsXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjIwXCIsXHJcbiAgICB2YWx1ZTogXCJDYXBzIExvY2tcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwiY2Fwc1wiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI2NVwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJBXCIsIGxvd2VyY2FzZTogXCJhXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQpFwiLCBsb3dlcmNhc2U6IFwi0YRcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjgzXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIlNcIiwgbG93ZXJjYXNlOiBcInNcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCrXCIsIGxvd2VyY2FzZTogXCLRi1wiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNjhcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiRFwiLCBsb3dlcmNhc2U6IFwiZFwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JJcIiwgbG93ZXJjYXNlOiBcItCyXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI3MFwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJGXCIsIGxvd2VyY2FzZTogXCJmXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQkFwiLCBsb3dlcmNhc2U6IFwi0LBcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjcxXCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIkdcIiwgbG93ZXJjYXNlOiBcImdcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCfXCIsIGxvd2VyY2FzZTogXCLQv1wiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNzJcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiSFwiLCBsb3dlcmNhc2U6IFwiaFwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0KBcIiwgbG93ZXJjYXNlOiBcItGAXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI3NFwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJKXCIsIGxvd2VyY2FzZTogXCJqXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQnlwiLCBsb3dlcmNhc2U6IFwi0L5cIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjc1XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIktcIiwgbG93ZXJjYXNlOiBcImtcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCbXCIsIGxvd2VyY2FzZTogXCLQu1wiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNzZcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiTFwiLCBsb3dlcmNhc2U6IFwibFwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JRcIiwgbG93ZXJjYXNlOiBcItC0XCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIxODZcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiOlwiLCBsb3dlcmNhc2U6IFwiO1wiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JZcIiwgbG93ZXJjYXNlOiBcItC2XCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIyMjJcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6ICdcIicsIGxvd2VyY2FzZTogXCInXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQrVwiLCBsb3dlcmNhc2U6IFwi0Y1cIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjEzXCIsXHJcbiAgICB2YWx1ZTogXCJFbnRlclwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiwgc3BlY2lhbDogXCJlbnRlclwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWNvZGU6ICdTaGlmdExlZnQnLFxyXG4gICAgZGF0YWtleTogXCIxNlwiLFxyXG4gICAgdmFsdWU6IFwiU2hpZnRcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwic2hpZnRcIiB9LFxyXG4gICAgdHlwZTogXCJzZXJ2aWNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiOTBcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiWlwiLCBsb3dlcmNhc2U6IFwielwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0K9cIiwgbG93ZXJjYXNlOiBcItGPXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI4OFwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJYXCIsIGxvd2VyY2FzZTogXCJ4XCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQp1wiLCBsb3dlcmNhc2U6IFwi0YdcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjY3XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIkNcIiwgbG93ZXJjYXNlOiBcImNcIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItChXCIsIGxvd2VyY2FzZTogXCLRgVwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiODZcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiVlwiLCBsb3dlcmNhc2U6IFwidlwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JxcIiwgbG93ZXJjYXNlOiBcItC8XCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI2NlwiLFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgZW5nOiB7IHVwcGVyY2FzZTogXCJCXCIsIGxvd2VyY2FzZTogXCJiXCIgfSxcclxuICAgICAgcnVzOiB7IHVwcGVyY2FzZTogXCLQmFwiLCBsb3dlcmNhc2U6IFwi0LhcIiB9XHJcbiAgICB9LFxyXG4gICAgY3NzOiBcImNvbW1vbl9rZXlib2FyZFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjc4XCIsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBlbmc6IHsgdXBwZXJjYXNlOiBcIk5cIiwgbG93ZXJjYXNlOiBcIm5cIiB9LFxyXG4gICAgICBydXM6IHsgdXBwZXJjYXNlOiBcItCiXCIsIGxvd2VyY2FzZTogXCLRglwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiNzdcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiTVwiLCBsb3dlcmNhc2U6IFwibVwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0KxcIiwgbG93ZXJjYXNlOiBcItGMXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIxODhcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiPFwiLCBsb3dlcmNhc2U6IFwiLFwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0JFcIiwgbG93ZXJjYXNlOiBcItCxXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIxOTBcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiPlwiLCBsb3dlcmNhc2U6IFwiLlwiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwi0K5cIiwgbG93ZXJjYXNlOiBcItGOXCIgfVxyXG4gICAgfSxcclxuICAgIGNzczogXCJjb21tb25fa2V5Ym9hcmRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCIxOTFcIixcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGVuZzogeyB1cHBlcmNhc2U6IFwiP1wiLCBsb3dlcmNhc2U6IFwiL1wiIH0sXHJcbiAgICAgIHJ1czogeyB1cHBlcmNhc2U6IFwiLFwiLCBsb3dlcmNhc2U6IFwiLlwiIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IFwiY29tbW9uX2tleWJvYXJkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMzhcIixcclxuICAgIHZhbHVlOiBcInVwXCIsXHJcbiAgICBjc3M6IHsgY29tbW9uOiBcImNvbW1vbl9rZXlib2FyZFwiLCBzcGVjaWFsOiBcInVwXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRhY29kZTogJ1NoaWZ0UmlnaHQnLFxyXG4gICAgZGF0YWtleTogXCIxNlwiLFxyXG4gICAgdmFsdWU6IFwiU2hpZnRcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwic2hpZnRcIiB9LFxyXG4gICAgdHlwZTogXCJzZXJ2aWNlXCJcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBkYXRhY29kZTogJ0NvbnRyb2xMZWZ0JyxcclxuICAgIGRhdGFrZXk6IFwiMTdcIixcclxuICAgIHZhbHVlOiBcIkN0cmxcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwiY3RybFwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI5MVwiLFxyXG4gICAgdmFsdWU6IFwiV2luXCIsXHJcbiAgICBjc3M6IHsgY29tbW9uOiBcImNvbW1vbl9rZXlib2FyZFwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWNvZGU6ICdBbHRMZWZ0JyxcclxuICAgIGRhdGFrZXk6IFwiMThcIixcclxuICAgIHZhbHVlOiBcIkFsdFwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiB9LFxyXG4gICAgdHlwZTogXCJzZXJ2aWNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMzJcIixcclxuICAgIHZhbHVlOiBcIlNwYWNlXCIsXHJcbiAgICBjc3M6IHsgY29tbW9uOiBcImNvbW1vbl9rZXlib2FyZFwiLCBzcGVjaWFsOiBcInNwYWNlXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRhY29kZTogJ0FsdFJpZ2h0JyxcclxuICAgIGRhdGFrZXk6IFwiMThcIixcclxuICAgIHZhbHVlOiBcIkFsdFwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiB9LFxyXG4gICAgdHlwZTogXCJzZXJ2aWNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFrZXk6IFwiMzdcIixcclxuICAgIHZhbHVlOiBcImxlZnRcIixcclxuICAgIGNzczogeyBjb21tb246IFwiY29tbW9uX2tleWJvYXJkXCIsIHNwZWNpYWw6IFwibGVmdFwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWtleTogXCI0MFwiLFxyXG4gICAgdmFsdWU6IFwiZG93blwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiwgc3BlY2lhbDogXCJkb3duXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRha2V5OiBcIjM5XCIsXHJcbiAgICB2YWx1ZTogXCJyaWdodFwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiwgc3BlY2lhbDogXCJyaWdodFwiIH0sXHJcbiAgICB0eXBlOiBcInNlcnZpY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YWNvZGU6ICdDb250cm9sUmlnaHQnLFxyXG4gICAgZGF0YWtleTogXCIxN1wiLFxyXG4gICAgdmFsdWU6IFwiQ3RybFwiLFxyXG4gICAgY3NzOiB7IGNvbW1vbjogXCJjb21tb25fa2V5Ym9hcmRcIiwgc3BlY2lhbDogXCJjdHJsXCIgfSxcclxuICAgIHR5cGU6IFwic2VydmljZVwiXHJcbiAgfVxyXG5dO1xyXG5cclxubGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG53cmFwcGVyLmNsYXNzTmFtZSA9IFwid3JhcHBlclwiO1xyXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbmlucHV0LmNsYXNzTmFtZSA9IFwiaW5wdXRcIjtcclxuaW5wdXQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxud3JhcHBlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXQpO1xyXG5sZXQga2V5UGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxua2V5UGFkLmNsYXNzTmFtZSA9IFwia2V5cGFkXCI7XHJcbndyYXBwZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGtleVBhZCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyYXBwZXIpO1xyXG5cclxubGV0IGJ1dHRvbkNvbnRhaW5lcjtcclxubGV0IGxvY2FsU3RvcmFnZUxhbmc7XHJcbmxldCBrZXlzTGFuZztcclxubGV0IGtleXNDYXNlID0gXCJsb3dlcmNhc2VcIjtcclxubG9jYWxTdG9yYWdlTGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlMYW5nXCIpO1xyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2VMYW5nKSB7XHJcbiAga2V5c0xhbmcgPSBcInJ1c1wiO1xyXG59IGVsc2Uge1xyXG4gIGtleXNMYW5nID0gbG9jYWxTdG9yYWdlTGFuZztcclxufVxyXG5cclxuYnV0dG9uc0FycmF5LmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGlmIChidXR0b24uZGF0YWNvZGUpIHtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvZGVcIiwgYnV0dG9uLmRhdGFjb2RlKTtcclxuICB9XHJcbiAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsIGJ1dHRvbi5kYXRha2V5KTtcclxuICBpZiAoYnV0dG9uLnR5cGUgPT0gXCJzZXJ2aWNlXCIpIHtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5pbm5lclRleHQgPSBidXR0b24udmFsdWU7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gYnV0dG9uLmNzcykge1xyXG4gICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChidXR0b24uY3NzW2tleV0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZUxhbmcpIHtcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLmlubmVyVGV4dCA9IGJ1dHRvbi52YWx1ZVtrZXlzTGFuZ10ubG93ZXJjYXNlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGFuZ1wiLCBrZXlzTGFuZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b25Db250YWluZXIuaW5uZXJUZXh0ID0gYnV0dG9uLnZhbHVlW2xvY2FsU3RvcmFnZUxhbmddLmxvd2VyY2FzZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBidXR0b24uY3NzO1xyXG4gIH1cclxuICBrZXlQYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGJ1dHRvbkNvbnRhaW5lcik7XHJcbn0pO1xyXG5cclxuY29uc3QgYWxsS2V5cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21tb25fa2V5Ym9hcmRcIikpO1xyXG5cclxuYWxsS2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcmVtb3ZlVHJhbnNpdGlvbikpO1xyXG5cclxua2V5UGFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0tleWJvYXJkKTtcclxua2V5UGFkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xpY2tTaGlmdERvd24pO1xyXG5rZXlQYWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgY2xpY2tTaGlmdFVwKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHB1c2hLZXlwYWQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hhbmdlTGFuZyk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzaGlmdERvd24pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHNoaWZ0VXApO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tLZXlib2FyZChlKSB7XHJcbiAgaWYgKCFBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2NvbW1vbl9rZXlib2FyZCcpKSB7cmV0dXJufVxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgbGV0IGtleVZhbHVlID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG4gIGNsaWNrc1B1c2hlc0hhbmRsZXIoa2V5VmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNsaWNrU2hpZnREb3duKGUpIHtcclxuICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09IFwiU2hpZnRcIikge1xyXG4gICAgY2hhbmdlQ2FzZSgpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjbGlja1NoaWZ0VXAoZSkge1xyXG4gIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT0gXCJTaGlmdFwiKSB7XHJcbiAgICBjaGFuZ2VDYXNlKCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHB1c2hLZXlwYWQoZSkge1xyXG4gIGxldCBrZXk7XHJcbiAgaWYgKGUua2V5Q29kZSA9PSAxNiB8fCBlLmtleUNvZGUgPT0gMTggfHwgZS5rZXlDb2RlID09IDE3KSB7XHJcbiAgICBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb2RlPVwiJHtlLmNvZGV9XCJdYClcclxuICB9XHJcbiAgZWxzZSB7a2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCl9XHJcbiAgbGV0IGtleVZhbHVlID0ga2V5LmlubmVyVGV4dDtcclxuICBjbGlja3NQdXNoZXNIYW5kbGVyKGtleVZhbHVlKTtcclxuICBrZXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBjbGlja3NQdXNoZXNIYW5kbGVyKHZhbHVlKSB7XHJcbiAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgY2FzZSBcIlNwYWNlXCI6XHJcbiAgICAgIGlucHV0LmlubmVySFRNTCArPSBcIiBcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgIGxldCB0ZW1wZXIgPSBpbnB1dC5kZWZhdWx0VmFsdWUuc3BsaXQoXCJcIik7XHJcbiAgICAgIHRlbXBlci5wb3AoKTtcclxuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gdGVtcGVyLmpvaW4oXCJcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlRhYlwiOlxyXG4gICAgICBpbnB1dC5pbm5lckhUTUwgKz0gXCJcXHRcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiRW50ZXJcIjpcclxuICAgICAgaW5wdXQuaW5uZXJIVE1MICs9IFwiXFxuXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkNhcHMgTG9ja1wiOlxyXG4gICAgICBjaGFuZ2VDYXNlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlNoaWZ0XCI6XHJcbiAgICBjYXNlIFwiQWx0XCI6XHJcbiAgICBjYXNlIFwiQ3RybFwiOlxyXG4gICAgY2FzZSAndXAnOlxyXG4gICAgY2FzZSAnZG93bic6XHJcbiAgICBjYXNlICdsZWZ0JzpcclxuICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgIGNhc2UgJ1dpbic6XHJcbiAgICBjYXNlICdEZWwnOlxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0LmlubmVySFRNTCArPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbihlKSB7XHJcbiAgaWYgKGUucHJvcGVydHlOYW1lICE9PSBcInRyYW5zZm9ybVwiKSByZXR1cm47XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VMYW5nKGUpIHtcclxuICBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSB7XHJcbiAgICBcclxuICAgIGFsbEtleXMuZm9yRWFjaChkb21CdXR0b24gPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFidXR0b25zQXJyYXlbaV0udHlwZSAmJlxyXG4gICAgICAgICAgZG9tQnV0dG9uLmlubmVyVGV4dCA9PT0gYnV0dG9uc0FycmF5W2ldLnZhbHVlW2tleXNMYW5nXVtrZXlzQ2FzZV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChrZXlzTGFuZyA9PT0gXCJlbmdcIikge1xyXG4gICAgICAgICAgICBkb21CdXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uc0FycmF5W2ldLnZhbHVlLnJ1c1trZXlzQ2FzZV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb21CdXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uc0FycmF5W2ldLnZhbHVlLmVuZ1trZXlzQ2FzZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGtleXNMYW5nID09PSBcImVuZ1wiKSB7XHJcbiAgICAgIGtleXNMYW5nID0gXCJydXNcIjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteUxhbmdcIiwga2V5c0xhbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0xhbmcgPSBcImVuZ1wiO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGFuZ1wiLCBrZXlzTGFuZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUNhc2UgKCkge1xyXG4gIGlmIChrZXlzQ2FzZSA9PSBcInVwcGVyY2FzZVwiKSB7XHJcbiAgICBidXR0b25zQXJyYXkuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICBhbGxLZXlzLmZvckVhY2goZG9tQnV0dG9uID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhYnV0dG9uLnR5cGUgJiZcclxuICAgICAgICAgIGRvbUJ1dHRvbi5pbm5lclRleHQgPT09IGJ1dHRvbi52YWx1ZVtrZXlzTGFuZ10udXBwZXJjYXNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBkb21CdXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uLnZhbHVlW2tleXNMYW5nXS5sb3dlcmNhc2U7XHJcbiAgICAgICAgICBrZXlzQ2FzZSA9IFwibG93ZXJjYXNlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidXR0b25zQXJyYXkuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICBhbGxLZXlzLmZvckVhY2goZG9tQnV0dG9uID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhYnV0dG9uLnR5cGUgJiZcclxuICAgICAgICAgIGRvbUJ1dHRvbi5pbm5lclRleHQgPT09IGJ1dHRvbi52YWx1ZVtrZXlzTGFuZ10ubG93ZXJjYXNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBkb21CdXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uLnZhbHVlW2tleXNMYW5nXS51cHBlcmNhc2U7XHJcbiAgICAgICAgICBrZXlzQ2FzZSA9IFwidXBwZXJjYXNlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaGlmdERvd24gKGUpIHtcclxuICBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiICYmICFlLnJlcGVhdCkge1xyXG4gICAgY2hhbmdlQ2FzZSgpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaGlmdFVwIChlKSB7XHJcbiAgaWYgKGUua2V5ID09IFwiU2hpZnRcIikge1xyXG4gICAgY2hhbmdlQ2FzZSgpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0ICcuLi9zYXNzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9BcHBTY3JpcHRzL2tleWJvYXJkJ1xyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=