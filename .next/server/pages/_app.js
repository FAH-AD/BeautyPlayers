(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3707);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);
next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__["default"])({
  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),
  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2207:
/***/ ((module) => {

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'id', 'ar', 'pt', 'zh'],
    fallbackLng: 'en'
  },
  ssg: true // Set to true for Static Site Generation (SSG)

};

/***/ }),

/***/ 9613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7544);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4615);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2037);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_languageDetector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9466);
/* harmony import */ var _theme_appTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1123);
/* harmony import */ var dandelion_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5305);
/* harmony import */ var dandelion_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dandelion_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5544);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4580);
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2204);
/* harmony import */ var _vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_slider_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2542);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9348);
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4634);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2030);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stylis__WEBPACK_IMPORTED_MODULE_7__, _lib_languageDetector__WEBPACK_IMPORTED_MODULE_11__]);
([stylis__WEBPACK_IMPORTED_MODULE_7__, _lib_languageDetector__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/* import css vendors */












let themeType = '';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme');
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default()({
  key: 'mui-style-rtl',
  stylisPlugins: [stylis__WEBPACK_IMPORTED_MODULE_7__.prefixer, (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_6___default())],
  insertionPoint,
  prepend: true
});
const cacheLTR = _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default()({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true
});

function MyApp(props) {
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const curLang = _lib_languageDetector__WEBPACK_IMPORTED_MODULE_11__/* ["default"].detect */ .Z.detect();
  const themeName = 'passion';
  const defaultTheme = 'light';
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_objectSpread(_objectSpread({}, (0,_theme_appTheme__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(themeName, defaultTheme)), {}, {
    direction: 'ltr'
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = themeDir;
    document.documentElement.setAttribute('lang', curLang); // Set color mode and direction

    if (themeType === 'dark' || curLang === 'ar') {
      setTheme(_objectSpread(_objectSpread({}, (0,_theme_appTheme__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(themeName, themeType || defaultTheme)), {}, {
        direction: themeDir
      }));
    } // Enable this code below for Server Side Rendering/Translation (SSR)
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: curLang });
    // Remove preloader


    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.mode === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, (0,_theme_appTheme__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(themeName, newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir; // set theme

    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(theme);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
    value: theme.direction === 'rtl' ? cacheRTL : cacheLTR,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
      theme: muiTheme,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default()), {
        height: 3,
        color: theme.palette.primary.main,
        progress: loading,
        className: "top-loading-bar"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
        id: "main-wrap",
        children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          onToggleDark: toggleDarkTheme,
          onToggleDir: toggleDirection,
          key: router.route
        }))
      })]
    })
  });
}

MyApp.getInitialProps = async appContext => _objectSpread({}, await next_app__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(appContext));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.appWithTranslation)(MyApp));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9161);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette__WEBPACK_IMPORTED_MODULE_0__);


const appTheme = (color, mode) => ({
  palette: {
    mode,
    primary: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary,
    secondary: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    },
    background: {
      paper: mode === 'dark' ? '#303030' : '#FFFFFF'
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  shade: {
    light: '0 0 13px -1px rgba(0, 0, 0, 0.22)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  components: {
    PrivateTabIndicator: {
      styleOverrides: {
        root: {
          borderRadius: '4px 4px 0 0',
          height: 5
        },
        colorPrimary: {
          backgroundColor: mode === 'dark' ? (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.light : (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.primary.main
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12
        },
        elevation1: {
          boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
        },
        elevation4: {
          boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
        },
        root: {
          '&.MuiPopover-paper': {
            backgroundImage: 'none'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: '#FFFFFF'
        },
        contained: {
          boxShadow: 'none'
        },
        root: {
          borderRadius: 36,
          fontWeight: 600,
          padding: '8px 24px'
        },
        sizeSmall: {
          padding: '7px 12px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: 600
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.main
          }
        },
        filled: {
          top: -2,
          '&.MuiInputLabel-shrink': {
            color: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.main
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          background: 'none',
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          },
          '&.Mui-focused': {
            borderColor: (_palette__WEBPACK_IMPORTED_MODULE_0___default())[color].palette.secondary.main
          }
        },
        input: {
          padding: '23px 12px 6px'
        }
      }
    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appTheme);

/***/ }),

/***/ 9161:
/***/ ((module) => {

module.exports = {
  fresh: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03ACF2',
        dark: '#01579b'
      },
      secondary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#357A38'
      }
    }
  },
  passion: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#880E4F'
      },
      secondary: {
        light: '#c5cae9',
        main: '#304FFE',
        dark: '#1A237E'
      }
    }
  },
  smart: {
    palette: {
      primary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#00838F'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  greenLeaf: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      secondary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#37474F'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  grayscale: {
    palette: {
      primary: {
        light: '#CFD8DC',
        main: '#546E7A',
        dark: '#263238'
      },
      secondary: {
        light: '#D7CCC8',
        main: '#6D4C41',
        dark: '#3E2723'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  violet: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#EC407A',
        dark: '#880E4F'
      },
      secondary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      }
    }
  },
  roseGold: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FFA000',
        dark: '#FF6F00',
        contrastText: '#fff'
      }
    }
  },
  deepBlue: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  ubuntu: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff'
      }
    }
  },
  geenNature: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#009688',
        dark: '#00695C',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      }
    }
  },
  vampire: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#f44336',
        dark: '#E53935',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b3e5fc',
        main: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      }
    }
  },
  oceanSky: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  },
  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff'
      }
    }
  },
  botani: {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  littleQueen: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  purple: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff'
      }
    }
  },
  black: {
    palette: {
      primary: {
        light: '#9e9e9e',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  brown: {
    palette: {
      primary: {
        light: '#d7ccc8',
        main: '#795548',
        dark: '#4e342e',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ccb0b0',
        main: '#794848',
        dark: '#3e2723',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),

/***/ 2542:
/***/ (() => {



/***/ }),

/***/ 2204:
/***/ (() => {



/***/ }),

/***/ 4580:
/***/ (() => {



/***/ }),

/***/ 2030:
/***/ (() => {



/***/ }),

/***/ 4634:
/***/ (() => {



/***/ }),

/***/ 9348:
/***/ (() => {



/***/ }),

/***/ 1913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("react-top-loading-bar");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3195:
/***/ ((module) => {

"use strict";
module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ 3707:
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ }),

/***/ 4615:
/***/ ((module) => {

"use strict";
module.exports = import("stylis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [864], () => (__webpack_exec__(9613)));
module.exports = __webpack_exports__;

})();