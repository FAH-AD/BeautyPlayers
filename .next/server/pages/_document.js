(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

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

/***/ 9770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: ./theme/createEmotionCache.js
 // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

function createEmotionCache() {
  return cache_default()({
    key: 'css',
    prepend: true
  });
}
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/head.js






const HeadComponent = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "description",
    content: (brand_default()).movie.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    href: "/favicons/favicon.ico"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicons/apple-icon-57x57.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicons/apple-icon-60x60.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicons/apple-icon-72x72.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicons/apple-icon-76x76.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicons/apple-icon-114x114.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicons/apple-icon-120x120.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicons/apple-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicons/apple-icon-152x152.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-icon-180x180.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicons/android-icon-192x192.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicons/favicon-32x32.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicons/favicon-96x96.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicons/favicon-16x16.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "manifest",
    href: "/favicons/manifest.json"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileImage",
    content: "/favicons/ms-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "theme-color",
    content: "#303030"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700",
    rel: "stylesheet"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    href: "https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css",
    rel: "stylesheet"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "author",
    content: "luxi"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:site_name",
    content: "luxi.ux-maestro.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:locale",
    content: "en_US"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:site",
    content: "luxi.ux-maestro.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:domain",
    content: "luxi.ux-maestro.com"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:creator",
    content: "luxi"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "twitter:image:src",
    content: "/images/movie-logo.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:url",
    content: (brand_default()).movie.url
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:title",
    content: (brand_default()).movie.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:description",
    content: (brand_default()).movie.desc
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:site",
    content: (brand_default()).movie.url
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:image",
    content: (brand_default()).movie.img
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image",
    content: (brand_default()).movie.img
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image:width",
    content: "1200"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image:height",
    content: "630"
  })]
});

/* harmony default export */ const head = (HeadComponent);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(2207);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
// EXTERNAL MODULE: ./public/images/beautyPlayers/loader.gif
var loader = __webpack_require__(8225);
var loader_default = /*#__PURE__*/__webpack_require__.n(loader);
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class MyDocument extends next_document["default"] {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || (next_i18next_config_default()).i18n.defaultLocale;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: currentLocale,
      dir: currentLocale === 'ar' ? 'rtl' : 'ltr',
      children: [/*#__PURE__*/jsx_runtime_.jsx(head, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "preloader",
          style: {
            position: "fixed",
            zIndex: 2001,
            background: "#fafafa",
            width: "100vw",
            // Full viewport width
            height: "100vh",
            // Full viewport height
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            // Centers horizontally
            alignItems: "center" // Centers vertically

          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (loader_default()),
            alt: "Loading...",
            style: [{
              width: "100px"
            }, {
              height: "100px"
            }]
          })
        }), (0,styles_.getInitColorSchemeScript)(), /*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const {
    extractCriticalToChunks
  } = create_instance_default()(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => function EnhanceApp(props) {
      // eslint-disable-line
      return /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({
        emotionCache: cache
      }, props));
    }
  });

  const initialProps = await next_document["default"].getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => /*#__PURE__*/jsx_runtime_.jsx("style", {
    "data-emotion": `${style.key} ${style.ids.join(' ')}`,
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: style.css
    }
  }, style.key));
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    emotionStyleTags,
    namespacesRequired: ['common', 'movie-landing']
  });
};

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 15:
/***/ ((module) => {

module.exports = {
  movie: {
    name: 'Movie',
    desc: 'Luxiren Movie - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Theme 2021',
    logoText: 'Luxiren Movie',
    projectName: 'Movie',
    url: 'luxireact.ux-maestro.com/movie',
    img: '/static/images/movie-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ }),

/***/ 8225:
/***/ ((module) => {

module.exports = "/_next/static/images/loader-091a2b895d90d6a07a832f7a84796a55.gif";

/***/ }),

/***/ 1913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(9770)));
module.exports = __webpack_exports__;

})();