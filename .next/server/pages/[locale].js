(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 5157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Feature)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowBackSharp"
const ArrowBackSharp_namespaceObject = require("@mui/icons-material/ArrowBackSharp");
var ArrowBackSharp_default = /*#__PURE__*/__webpack_require__.n(ArrowBackSharp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForwardSharp"
const ArrowForwardSharp_namespaceObject = require("@mui/icons-material/ArrowForwardSharp");
var ArrowForwardSharp_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardSharp_namespaceObject);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/SimpleThumb.js








function SimpleThumb(props) {
  const {
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const curLang = '/' + i18n.language;
  const {
    image,
    title
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
    component: "a",
    href: curLang + text_link/* default.movie.detail */.Z.movie.detail,
    className: classes.simpleThumb,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.figure,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: image,
            alt: ""
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: classes.text,
        children: title
      })]
    })
  });
}
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/AllCategories/all-categories-style.js

const featureStyles = (0,mui_.makeStyles)({
  uniqId: 'feature'
})(theme => ({
  root: {
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10)
    }
  },
  carouselContainer: {
    maxWidth: 1100
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(10)
  },
  carouselWrap: {
    position: 'relative',
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-5),
      opacity: 0.48,
      '& li': {
        background: theme.palette.text.disabled,
        width: 25,
        height: 4,
        transition: 'width 0.3s ease',
        '&:before': {
          display: 'none'
        },
        '&[class="slick-active"]': {
          width: 80
        }
      }
    }
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    background: theme.palette.background.paper,
    width: 50,
    height: 40,
    textAlign: 'center',
    lineHeight: '30px',
    position: 'absolute',
    top: 'calc(50% - 20px)',
    zIndex: 90,
    boxShadow: '0 0 20px 2px rgba(0, 0, 0, 0.2)',
    '& svg': {
      verticalAlign: 'middle',
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  prev: {
    left: theme.spacing(-5)
  },
  next: {
    right: theme.spacing(-5)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const all_categories_style = (featureStyles);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
;// CONCATENATED MODULE: ./components/AllCategories/AllCategories.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const dataProducts = [{
  image: imgAPI/* default.icons.0 */.Z.icons[0],
  title: 'Courage'
}, {
  image: imgAPI/* default.icons.2 */.Z.icons[2],
  title: 'Empowerment'
}, {
  image: imgAPI/* default.icons.3 */.Z.icons[3],
  title: 'Integrity'
}, {
  image: imgAPI/* default.icons.4 */.Z.icons[4],
  title: 'Partnership'
}, {
  image: imgAPI/* default.icons.1 */.Z.icons[1],
  title: 'Diversity'
}, {
  image: imgAPI/* default.icons.5 */.Z.icons[5],
  title: 'Accountability'
}, {
  image: imgAPI/* default.icons.0 */.Z.icons[0],
  title: 'Courage'
}, {
  image: imgAPI/* default.icons.2 */.Z.icons[2],
  title: 'Empowerment'
}, {
  image: imgAPI/* default.icons.3 */.Z.icons[3],
  title: 'Integrity'
}, {
  image: imgAPI/* default.icons.4 */.Z.icons[4],
  title: 'Partnership'
}, {
  image: imgAPI/* default.icons.1 */.Z.icons[1],
  title: 'Diversity'
}, {
  image: imgAPI/* default.icons.5 */.Z.icons[5],
  title: 'Accountability'
}];
const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
function Feature() {
  const {
    classes,
    cx
  } = all_categories_style();
  const slider = (0,external_react_.useRef)(null);

  const nextSlide = () => {
    slider.current.slickNext();
  };

  const prevSlide = () => {
    slider.current.slickPrev();
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      className: classes.carouselContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        align: "center",
        primary: "Success Driven By Strong Foundations",
        secondary: "United By Our Values - we are one team with one mission,guided by clear,shared behaviour that help us stay aligned as we grow"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.carouselWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          className: cx(classes.nav, classes.prev),
          onClick: prevSlide,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowBackSharp_default()), {})
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          className: cx(classes.nav, classes.next),
          onClick: nextSlide,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowForwardSharp_default()), {})
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
          ref: slider
        }, settings), {}, {
          children: dataProducts.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(SimpleThumb, {
              title: item.title,
              image: item.image
            })
          }, index.toString()))
        }))]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/AllCategories/index.js


/***/ }),

/***/ 4918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);

const cardsStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'card'
})((theme, _params, classes) => ({
  /* MOVIE THUMB */
  btnWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  text: {},
  movieThumb: {
    margin: '0 auto',
    maxWidth: 300,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250
    },
    [`& .${classes.btnWrap}`]: {
      display: 'block',
      borderRadius: theme.rounded.big,
      background: theme.palette.background.paper,
      padding: '0 !important',
      color: theme.palette.text.primary,
      textAlign: 'center'
    },
    '& figure': {
      overflow: 'hidden',
      margin: 0,
      display: 'flex',
      position: 'relative',
      borderRadius: theme.rounded.big,
      boxShadow: theme.shadows[4],
      '& img': {
        transition: 'all 0.3s',
        minHeight: '100%',
        width: '100%'
      },
      '& figcaption': {
        position: 'absolute',
        textTransform: 'uppercase',
        borderRadius: 40,
        top: 16,
        left: 16,
        background: theme.palette.common.black,
        textAlign: 'center',
        color: theme.palette.common.white,
        padding: theme.spacing(0.75, 1.5),
        zIndex: 10
      },
      '& i': {
        position: 'absolute',
        fontSize: 52,
        top: 'calc(50% - 30px)',
        left: 'calc(50% - 30px)',
        border: '5px solid #FFF',
        zIndex: 10,
        borderRadius: '50%',
        width: 60,
        height: 60,
        lineHeight: '44px',
        paddingLeft: theme.direction === 'rtl' ? 0 : 4,
        paddingRight: theme.direction === 'rtl' ? 4 : 0,
        opacity: 0,
        transform: 'scale(0.5)',
        transition: 'all 0.3s ease-out',
        color: theme.palette.common.white
      },
      '&:after': {
        transition: 'all 0.3s ease',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        backgroundImage: `linear-gradient(-44deg, ${theme.palette.secondary.main} 6%, ${theme.palette.primary.main} 100%)`
      },
      '&:hover': {
        '& i': {
          opacity: 1,
          transform: 'scale(1)'
        },
        '&:after': {
          opacity: 0.6
        }
      }
    },
    [`& .${classes.text}`]: {
      display: 'block',
      width: '100%',
      fontSize: 16,
      padding: theme.spacing(),
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none'
    }
  },

  /* CATEGORY CARD */
  category: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    background: theme.palette.primary.dark,
    padding: theme.spacing(0, 3),
    marginBottom: 12,
    overflow: 'hidden',
    borderRadius: theme.rounded.big,
    boxShadow: theme.shadows[3],
    '&:before': {
      transition: 'all 0.3s ease-out',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '20%',
      height: '100%',
      opacity: 0,
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(270deg, rgba(255,255,255,0.00) 2%, rgba(0,0,0,0.30) 91%)'
    },
    '&:hover': {
      '&:before': {
        width: '100%',
        opacity: 1
      }
    }
  },
  button: {},
  total: {},
  title: {},
  property: {
    position: 'relative',
    color: theme.palette.common.white,
    paddingLeft: theme.spacing(3),
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(2)
    },
    [`& .${classes.title}`]: {
      textTransform: 'capitalize',
      display: 'block',
      textAlign: 'left',
      fontSize: 28,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 'normal'
    },
    [`& .${classes.total}`]: {
      textAlign: 'left',
      display: 'block'
    },
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(3),
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white
    }
  },
  buttonBase: {
    marginBottom: theme.spacing(1.5),
    width: '100%'
  },
  full: {
    height: 170,
    alignItems: 'flex-end',
    '@media (min-width: 960px) and (max-width: 1279px)': {
      flexDirection: 'column-reverse'
    },
    [`& .${classes.title}`]: {
      fontSize: 20
    },
    '& img': {
      maxWidth: '50%',
      maxHeight: 130,
      height: 'auto',
      '@media (min-width: 960px) and (max-width: 1279px)': {
        maxHeight: 60
      }
    }
  },
  halfChar: {
    marginBottom: theme.spacing(1.5),
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 300
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6)
      }
    },
    '& img': {
      position: 'relative',
      maxWidth: '50%',
      marginTop: 14,
      [theme.breakpoints.up('lg')]: {
        height: 290
      }
    }
  },
  fullChar: {
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      height: 504,
      overflow: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
    '& img': {
      top: theme.spacing(6),
      position: 'relative',
      maxWidth: '50%'
    },
    [`& .${classes.property}`]: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6)
      }
    }
  },
  shadow: {
    position: 'absolute !important',
    opacity: 0.15,
    top: '-120px !important',
    left: 0,
    transform: 'scale(2)',
    zIndex: 0,
    transformOrigin: 'center top'
  },

  /* SIMPLE CARD */
  simpleThumb: {
    textAlign: 'center',
    padding: theme.spacing(2, 1),
    transition: 'all 0.35s ease-out',
    margin: `${theme.spacing()}px auto`,
    color: theme.palette.text.primary,
    '& p': {
      fontSize: 16
    },
    [`& .${classes.text}`]: {
      display: 'block',
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      marginBottom: 0,
      lineHeight: 1.5
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  figure: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: theme.rounded.big,
    padding: 3,
    overflow: 'hidden',
    display: 'block',
    verticalAlign: 'middle',
    margin: theme.spacing(0, 2, 1),
    '& span': {
      height: 94,
      width: 94,
      lineHeight: '94px',
      background: theme.palette.background.paper,
      borderRadius: theme.rounded.big,
      display: 'block'
    },
    '& i': {
      fontSize: 80,
      '&:before': {
        background: theme.palette.mode === 'light' ? `linear-gradient(330deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : `linear-gradient(330deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },

  /* PRICING AND PLAN CARD */
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    boxShadow: `0 0 10px 0px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
    maxWidth: 300,
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    },
    [`& .${classes.title}`]: {
      padding: theme.spacing(5, 0, 2),
      textTransform: 'uppercase',
      fontSize: 24,
      position: 'relative',
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      '& p': {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightBold,
        position: 'relative',
        color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light
      },
      '& h4': {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'none',
        marginTop: theme.spacing(2)
      }
    }
  },
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      fontSize: 14
    }
  },
  basic: {
    [`& .${classes.title}`]: {
      '& p': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
      }
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      boxShadow: theme.palette.mode === 'light' ? `0 0 20px 5px ${theme.palette.secondary.light}` : '0 0 20px 5px #303030'
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    [`& .${classes.title}`]: {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white
      },
      '& p': {
        color: theme.palette.common.white
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(145deg, ${theme.palette.secondary.main} 40%, ${theme.palette.primary.main} 80%)`
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    }
  },

  /* NEWS CARD */
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: 'auto'
        }
      }
    },
    [`& .${classes.text}`]: {
      padding: theme.spacing(0, 1.5),
      maxWidth: 400
    }
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsStyles);

/***/ }),

/***/ 4503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Trending)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/CategoryBig.js








function CategoryHalf(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isMobile = useMediaQuery_default()(theme => theme.breakpoints.down('md'));
  const {
    img,
    title,
    background,
    total,
    type
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.category, type === 'top-over' ? classes.halfChar : classes.fullChar),
    style: {
      backgroundColor: '#' + background
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: img,
      alt: title,
      className: classes.shadow
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: img,
      alt: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: classes.property,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        component: "span",
        className: cx(classes.title, text.title2),
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
        component: "span",
        className: cx(classes.total, text.paragraph),
        children: [total, "\xA0Items"]
      }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        fullWidth: true,
        size: "large",
        variant: "outlined",
        className: classes.button,
        children: "Explore"
      })]
    })]
  });
}
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
;// CONCATENATED MODULE: ./components/Cards/CategorySmall.js







function CategoryFull(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    img,
    title,
    background,
    total
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((ButtonBase_default()), {
    className: cx(classes.category, classes.full),
    style: {
      backgroundColor: '#' + background
    },
    classes: {
      root: classes.buttonBase
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: img,
      alt: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: classes.property,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: cx(classes.title, text.title2),
        variant: "h4",
        component: "span",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: cx(classes.total, text.paragraph),
        component: "span",
        children: total
      })]
    })]
  });
}
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Categories/categories-style.js

const titleStyles = (0,mui_.makeStyles)({
  uniqId: 'title'
})(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const categories_style = (titleStyles);
;// CONCATENATED MODULE: ./components/Categories/Categories.js













function Trending() {
  const {
    classes
  } = categories_style();
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      fixed: isDesktop,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
            mt: 5,
            children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
              primary: "We have your why",
              secondary: "We have the how",
              align: isMobile ? 'center' : 'left'
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 3,
          sm: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(CategoryFull, {
            img: imgAPI/* default.movie.10 */.Z.movie[10],
            title: "Access the the resources",
            total: "throug beauty players website",
            background: "E79A1C"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 3,
          sm: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(CategoryFull, {
            img: imgAPI/* default.movie.14 */.Z.movie[14],
            title: "Transparent",
            total: "Distribution Model",
            background: "E91E63"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(CategoryHalf, {
            img: imgAPI/* default.movie.15 */.Z.movie[15],
            title: "Customer Support",
            total: "That offers professional helpful services",
            background: "1A237E",
            type: "top-over"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(CategoryFull, {
                img: imgAPI/* default.movie.12 */.Z.movie[12],
                title: "Digital Marketing",
                total: "Support",
                background: "14A8B9"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(CategoryFull, {
                img: imgAPI/* default.movie.13 */.Z.movie[13],
                title: "Community & Culture",
                total: "flexible work",
                background: "2AA845"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(CategoryHalf, {
            img: imgAPI/* default.movie.11 */.Z.movie[11],
            title: "Training Program",
            total: "To assist you, start and Grow Your Own Buisness",
            background: "ED3626",
            type: "bottom-over"
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Categories/index.js


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Faq_Faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./public/images/movie/faq.png
var faq = __webpack_require__(8539);
var faq_default = /*#__PURE__*/__webpack_require__.n(faq);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Faq/faq-style.js

const faqStyles = (0,mui_.makeStyles)({
  uniqId: 'faq'
})((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280
    }
  },
  accordion: {
    position: 'relative'
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const faq_style = (faqStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Faq/Faq.js

















const faqData = [{
  q: ' Do i need to choose an Independent Beauty Consultant submit an Independent Beauty Consultant Agreement?',
  a: 'You must have an Independent Beauty Consultant to submit an Agreement. However, if you do not have one, we can help you connect with one. '
}, {
  q: 'I started the process of submitting my onine Independent Beauty Consultant Agreement, but I did not finish. How do i go bak to complete it ?',
  a: 'As long as you’ve completed the first step by providing your name, mailing address and email address, you will receive an email with a link that enables you to complete the process. If you did not complete the first step, you will need to start over. '
}, {
  q: 'I have been an Independent Beauty Consultant before. How do i sign up again ?',
  a: 'If you are a former Beauty Consultant, you can submit an Independent Beauty Consultant Agreement again using the same process. In order to complete your Agreement, you will need to provide your former Consultant number. If you do not remember your former Consultant number, you can contact the Customer Success Team at 8282829958 Monday–Friday, 9 a.m. – 6 p.m. Central time. '
}, {
  q: 'Are there options for how I start a Beauty Players business ?',
  a: ' Yes. How you start your Beauty Players business is flexible! Whether you decide to go all in with the Beauty Players Starter Kit* or start your business digitally with the Beauty Players eStart,* you can earn up to 30% profit** on the Salon Services you sell at suggested retail. You can also choose to include the optional Beauty Players New Beauty Consultant Sample Pack with either the Beauty Players eStart or Beauty Players Starter Kit. The sample pack is a one-time offer that is available only when you submit the Agreement. Review the startup options to choose the one that would work best for you.'
}, {
  q: 'What is Beauty Players Opportunity?',
  a: 'The Beauty Players opportunity is a direct sales opportunity where a Beauty Players Independent Beauty Consultant sells Beauty Players services directly to her customers. The foundation of a strong Beauty Players business is and always will be the sale of amazing Beauty Players products to customers! Active† Beauty Consultants can earn up to 30% profit** on products sold at suggested retail regardless of their career path status.'
}, {
  q: 'How do I earn money with Beauty Players business?',
  a: ' The earning opportunity associated with a Beauty Players business is individual and unique, so it is impossible to guarantee that a particular amount of income can be earned. How much money you make as a Beauty Players Independent Beauty Consultant will depend on many factors, such as your personal business goals, time invested, and business expenses. You can earn up to 30% profit** on everything you sell at the suggested retail price, and you can feel confident that you are selling services you can believe in. This flexible opportunity lets you choose how much or how little to work your Beauty Players business as you strive to meet your goals!'
}, {
  q: 'What resources are offered to me to help me run my Beauty Players business?',
  a: 'With a Beauty Players business, you are in business for yourself, but never by yourself! Beauty Players continually develops resources to help you along the way, including product education, marketing materials, promotions, team-building playbooks and fliers, and social media playbooks and tips. All are available through Beauty Players, a website exclusively for Beauty Players independent sales force members.'
}, {
  q: 'What does it take tobe successful in a beauty Players business ?',
  a: 'If you’ve just started your Beauty Players business, it is important to know that purchasing inventory is an individual decision. It’s certainly not a requirement for you to begin your Beauty Players business. We always recommend that you determine what activity level you intend to pursue in your Beauty Players business and then, if appropriate for your personal circumstances, invest in the amount of inventory that supports that activity.'
}, {
  q: 'How do i known if direct selling is for me?',
  a: 'A direct-selling opportunity is a flexible option for adults of all ages, genders and income levels. It is an especially good opportunity for those who want more flexibility and for those who want an opportunity that fits their lives. If you have an entrepreneurial spirit and enjoy working with people, this opportunity could be right for you.'
}];

function Faq() {
  const {
    classes,
    cx
  } = faq_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(0);
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
            align: isMobile ? 'center' : 'left',
            primary: "Frequently",
            secondary: "Answered Questions"
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: cx(classes.text, text.subtitle2),
            align: isMobile ? 'center' : 'left',
            component: "p",
            children: t('movie-landing.faq_subtitle')
          }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.illustration,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (faq_default()),
              alt: "illustration"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.accordion,
            children: faqData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.item,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
                classes: {
                  root: classes.paper
                },
                expanded: expanded === index,
                onChange: handleChange(index),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((AccordionSummary_default()), {
                  classes: {
                    content: classes.content,
                    expanded: classes.expanded
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    className: classes.heading,
                    children: item.q
                  }), /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
                    className: classes.icon
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
                  classes: {
                    root: classes.detail
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    children: item.a
                  })
                })]
              })
            }, index.toString()))
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Faq_Faq = (Faq);
;// CONCATENATED MODULE: ./components/Faq/index.js


/***/ }),

/***/ 9861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Featured_Featured)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/MovieThumb.js










function MovieThumb(props) {
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const {
    img,
    text
  } = props;
  const {
    t,
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const curLang = '/' + i18n.language;
  return /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
    className: classes.movieThumb,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((ButtonBase_default()), {
      component: "a",
      href: curLang + text_link/* default.movie.detail */.Z.movie.detail,
      className: classes.btnWrap,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: img,
          alt: text
        }), /*#__PURE__*/jsx_runtime_.jsx("figcaption", {
          children: t('movie-landing.featured_caption')
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        component: "span",
        className: classes.text,
        children: text
      })]
    })
  });
}

/* harmony default export */ const Cards_MovieThumb = (MovieThumb);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Featured/featured-style.js

const newProductsStyles = (0,mui_.makeStyles)({
  uniqId: 'feature'
})(theme => ({
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    top: 200,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const featured_style = (newProductsStyles);
;// CONCATENATED MODULE: ./components/Featured/Featured.js
















function Featured() {
  const {
    classes
  } = featured_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const movieList = [{
    title: 'Beauty + Life Balance',
    thumb: imgAPI/* default.movie.4 */.Z.movie[4]
  }, {
    title: 'Rewards + Recognitions',
    thumb: imgAPI/* default.movie.5 */.Z.movie[5]
  }, {
    title: 'Trainings + Community',
    thumb: imgAPI/* default.movie.6 */.Z.movie[6]
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoration,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        fill: "#cccccc",
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/movie/deco-med-bg.svg#main"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 4,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 3,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
            pt: isDesktop ? 5 : 0,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
              primary: "Grow Your",
              secondary: "Own Way",
              align: isMobile ? 'center' : 'left'
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
              align: isMobile ? 'center' : 'left',
              className: text.paragrpah,
              children: ["Find out how Beauty Players Opportunity fits your life. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Your Success is Our Success"]
            })]
          })
        }), movieList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 3,
          sm: 4,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(Cards_MovieThumb, {
            img: item.thumb,
            text: item.title
          })
        }, index.toString()))]
      })
    })]
  });
}

/* harmony default export */ const Featured_Featured = (Featured);
;// CONCATENATED MODULE: ./components/Featured/index.js


/***/ }),

/***/ 7156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4618);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4539);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5722);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_6__]);
_Footer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function FooterWithDeco(props) {
  const {
    classes
  } = (0,_footer_style__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useText */ .XK)();
  const {
    toggleDir
  } = props;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme => theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classes.footerDeco,
    children: [!isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classes.decoration,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
        className: classes.leftDeco,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("use", {
          xlinkHref: "/images/movie/deco-bg-left.svg#main"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: classes.lineDeco,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
          className: classes.rightDecoBefore,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("use", {
            xlinkHref: "/images/movie/deco-bg-right.svg#main"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
          className: classes.rightDeco,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("use", {
            xlinkHref: "/images/movie/deco-bg-right.svg#main"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classes.action,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
        variant: "h4",
        className: text.title2,
        children: t('movie-landing.footer_waiting')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "contained",
        color: "secondary",
        size: "large",
        children: t('movie-landing.getstarted')
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      toggleDir: toggleDir
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterWithDeco);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ NewsEvent_NewsEvent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/News.js








function News(props) {
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const {
    text,
    img,
    type
  } = props;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.news,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: img,
        alt: "thumb"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.desc,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.text,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "caption",
          className: classes.type,
          children: t(type)
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          display: "block",
          component: "p",
          children: text
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        size: "small",
        className: classes.btn,
        children: t('movie-landing.news_readmore')
      })]
    })]
  });
}

/* harmony default export */ const Cards_News = (News);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/NewsEvent/news-event-style.js

const newsEventStyle = (0,mui_.makeStyles)({
  uniqId: 'news'
})(theme => ({
  root: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },
  carousel: {
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-7),
      '& li': {
        width: 15,
        height: 10,
        border: `1px solid ${theme.palette.text.disabled}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          background: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
          width: 30
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing()
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const news_event_style = (newsEventStyle);
;// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const newsContent = [{
  text: 'Starting Your Own Salon? Here’s Everything You Need To Know  There is something intrinsically special about the beauty business that attracts more independent entrepreneurs to the multi-billion dollar retail industry than ever before.',
  img: imgAPI/* default.photo.0 */.Z.photo[0],
  type: 'From Our Blogs'
}, {
  text: 'Personal grooming is essential to enhance one’s overall appearance; particularly for men, one vital aspect is hair. Hair grooming is key as it is an instantly noticeable feature.   Regarding men and their appearance, no detail is too small. ',
  img: imgAPI/* default.photo.1 */.Z.photo[1],
  type: 'From Our Blogs'
}, {
  text: 'Regarding men and their appearance, no detail is too small. Once, men were made fun of for taking care of their appearance, but times have changed!',
  img: imgAPI/* default.photo.2 */.Z.photo[2],
  type: 'From Our Blogs'
}, {
  text: 'From lips, Eyes and Brows become the focus of the ’30s. Thin, plucked eyebrows were in fashion. The adventurous achieved dramatic arches and wings with painful plucking of eyebrows.',
  img: imgAPI/* default.photo.3 */.Z.photo[3],
  type: 'From Our Blogs'
}, {
  text: 'This is a collection of stories about inspiring women from around the world. Entrepreneurs, Leaders, and women have challenged the status quo and made a difference in every walk of life.',
  img: imgAPI/* default.photo.4 */.Z.photo[4],
  type: 'From Our Blogs'
}, {
  text: 'We are far past what dictated the concept that women could not be successful founders, co-founders, or managers. Women are now not just ruling the economic world but also emerging as a dominant force directing the startup environment.',
  img: imgAPI/* default.photo.5 */.Z.photo[5],
  type: 'From Our Blogs'
}];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function NewsEvent() {
  const slider = (0,external_react_.useRef)(null);
  const {
    classes
  } = news_event_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carousel,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: slider
      }, settings), {}, {
        children: newsContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Cards_News, {
              img: item.img,
              text: item.text,
              type: item.type
            })
          })
        }, index.toString()))
      }))
    })
  });
}

/* harmony default export */ const NewsEvent_NewsEvent = (NewsEvent);
;// CONCATENATED MODULE: ./components/NewsEvent/index.js


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageNav_PageNav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(8363);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js


const pagenav = (0,mui_.makeStyles)({
  uniqId: 'pagenav'
})((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: theme.palette.secondary.light + '!important',
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.secondary.main,
      width: 40,
      height: 40
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: (0,styles_.alpha)(theme.palette.background.paper, 0.3),
        border: `1px solid ${theme.palette.primary.dark}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%'
      },
      '&[class="active"] a': {
        background: theme.palette.secondary.main
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.secondary.dark,
    fontSize: 14,
    borderRadius: 0
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pagenav_style = (pagenav);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {// const doc = document.documentElement;
    // const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    // const newFlagShow = (scroll > 500);
    // if (flagShow !== newFlagShow) {
    //   setShow(newFlagShow);
    //   flagShow = newFlagShow;
    // }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const {
    classes,
    cx
  } = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
            title: t('movie-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LinkBtn, {
                href: item.url
              })
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Fab_default()), {
          color: "secondary",
          "aria-label": "To top",
          component: LinkBtn,
          href: "#home",
          className: classes.fab,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
        })
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = (PageNav);
;// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 3385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PricingPlan)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-scroll-animation-wrapper"
const external_react_scroll_animation_wrapper_namespaceObject = require("react-scroll-animation-wrapper");
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/Pricing.js







function Pricing(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    title,
    price,
    featureList,
    desc,
    type
  } = props;

  const setType = cardType => {
    switch (cardType) {
      case 'basic':
        return classes.basic;

      case 'value':
        return classes.value;

      default:
        return '';
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
    className: cx(classes.pricing, setType(type)),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.title,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        variant: "h4",
        children: price
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: featureList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: item
      }, index.toString()))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.btnArea,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        display: "block",
        className: classes.desc,
        children: desc
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        variant: "contained",
        color: type === 'basic' ? 'secondary' : 'primary',
        className: classes.button,
        size: "large",
        children: "Start Now"
      })]
    })]
  });
}
Pricing.defaultProps = {
  type: ''
};
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PricingPlan/pricing-plan-style.js

const pricingStyles = (0,mui_.makeStyles)({
  uniqId: 'pricing'
})(theme => ({
  subtitle: {
    marginBottom: theme.spacing(5)
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    '&:hover': {
      zIndex: '21 !important'
    }
  },
  pricingWrap: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5)
    },
    '& > *': {
      margin: theme.spacing(0, -1),
      zIndex: 2
    },
    '& > *:first-of-type, & > *:last-child': {
      zIndex: 1
    }
  },
  pop: {
    zIndex: 3
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pricing_plan_style = (pricingStyles);
;// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.js











const feature = {
  basic: ['People with any education or economic background', 'can take up the buisness', 'and succeed'],
  best: ['Beauty Players', 'Has the various Services', 'Across Different Categories', 'To meet Your', 'Needs!'],
  pro: ['Joining Beauty Players Buisness', 'is very Simple', 'There is no cost ', 'to join', 'Beauty Players'],
  enterprise: ['Choose when you want to work,', ' How you want to work,', 'and', 'From Where you want to work']
};
function PricingPlan() {
  const {
    classes
  } = pricing_plan_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoration,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        fill: "#cccccc",
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/movie/deco-med-bg.svg#main"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      fixed: isDesktop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: text.alignCenter,
        children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          align: "center",
          primary: "Benefits of Partnering",
          secondary: "with Beauty Players"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.pricingWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 200,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Equal opportunity",
              price: "Buisness",
              featureList: feature.basic,
              type: "basic"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          className: classes.pop,
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 400,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Best Quality",
              price: "Services",
              featureList: feature.best,
              desc: "",
              type: "value"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 600,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Easy to",
              price: "Join",
              featureList: feature.pro,
              desc: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 800,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Flexibility to",
              price: "Work",
              featureList: feature.enterprise,
              desc: ""
            })
          })
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/PricingPlan/index.js


/***/ }),

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Promotions)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
;// CONCATENATED MODULE: external "dandelion-animated-slider"
const external_dandelion_animated_slider_namespaceObject = require("dandelion-animated-slider");
var external_dandelion_animated_slider_default = /*#__PURE__*/__webpack_require__.n(external_dandelion_animated_slider_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Promotions/promotion-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const arrowNav = {
  width: 74,
  height: 74,
  top: '50%',
  position: 'absolute',
  display: 'block',
  borderRadius: '50%',
  textAlign: 'center',
  textIndent: '1px',
  zIndex: 0,
  padding: '0 24px'
};
const height = 450;
const heightMobile = 600;
const promotionStyles = (0,mui_.makeStyles)({
  uniqId: 'promo'
})((theme, _params, classes) => ({
  root: {
    position: 'relative',
    marginTop: -130,
    zIndex: 12,
    maxWidth: 1000,
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      top: '-70%',
      opacity: 0.2
    },
    '& figure': {
      [theme.breakpoints.up('sm')]: {
        filter: 'blur(20px)'
      },
      margin: 0,
      '& img': {
        width: '100%'
      }
    }
  },
  desc: {
    maxHeight: 130,
    minHeight: 100,
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(2),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  row: {},
  innerBg: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: theme.spacing(6),
    [`& .${classes.row}`]: {
      zIndex: 2,
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  sliderWrap: {
    display: 'block',
    '& a[class*="previousButton"]': _objectSpread({
      left: 20,
      right: 'auto',
      [theme.breakpoints.up('lg')]: {
        left: -40
      },
      [theme.breakpoints.down('lg')]: {
        visibility: 'hidden'
      },
      background: theme.palette.mode === 'light' ? '#EBEBEB' : theme.palette.common.black
    }, arrowNav),
    '& a[class*="nextButton"]': _objectSpread({
      right: 20,
      left: 'auto',
      [theme.breakpoints.up('lg')]: {
        right: -40
      },
      [theme.breakpoints.down('lg')]: {
        visibility: 'hidden'
      },
      background: theme.palette.mode === 'light' ? '#EBEBEB' : theme.palette.common.black
    }, arrowNav),
    '& > div': {
      zIndex: 1,
      overflow: 'visible',
      height,
      [theme.breakpoints.down('sm')]: {
        height: heightMobile
      },
      '& div[class*="slide"]': {
        height: '100%'
      },
      '& div[class="track"]': {
        [theme.breakpoints.up('md')]: {
          boxShadow: theme.palette.mode === 'light' ? '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)' : '0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)',
          borderRadius: 32
        },
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }
    }
  },
  arrowIcon: {
    color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.common.white,
    display: 'block',
    fontSize: 50,
    lineHeight: '74px',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    marginRight: theme.direction === 'rtl' ? -4 : 0
  },
  item: {
    display: 'flex',
    padding: 0,
    height,
    [theme.breakpoints.down('sm')]: {
      height: heightMobile
    },
    '&:before': {
      display: 'none'
    }
  },
  text: {
    flex: 1,
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height,
    [theme.breakpoints.down('sm')]: {
      height: heightMobile,
      marginTop: 120,
      padding: '200px 16px 16px 16px',
      backgroundImage: theme.palette.mode === 'light' ? 'linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)' : 'linear-gradient(0deg, rgba(48,48,48,1) 65%, rgba(48,48,48,0) 100%)'
    },
    '& h4': {
      fontSize: '2.28rem',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(),
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        fontSize: 24
      },
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  star: {
    marginTop: -3,
    marginRight: theme.spacing(2),
    '& span': {
      color: '#FF9500'
    }
  },
  divider: {
    background: 'none',
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    height: 12,
    margin: theme.spacing(0.5, 2),
    display: 'inline-block'
  },
  btnArea: {
    zIndex: 10,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(0, 0, 2)
      }
    },
    '& > *': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing()
      }
    }
  },
  btnText: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  image: {
    textAlign: 'center',
    lineHeight: '360px',
    verticalAlign: 'middle',
    '& figure': {
      width: 250,
      height: 360,
      overflow: 'hidden',
      margin: '0 auto',
      boxShadow: theme.shadows[3],
      borderRadius: theme.rounded.big,
      '& img': {
        width: '100%'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const promotion_style = (promotionStyles);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Promotions/Promotions.js














const sliderData = [{
  image: imgAPI/* default.movie.0 */.Z.movie[0],
  subtitle: 'You have opportunity',
  title: 'To Convert your spending into earning',
  desc: 'By redirecting the money you are already spending, towards beautyplayers.com.'
}, {
  image: imgAPI/* default.movie.1 */.Z.movie[1],
  subtitle: 'Freedom to Choose',
  title: 'Any services,Any expert,Anywhere',
  desc: 'All over India at comfort of your home,all services fit your needs and your budget.'
}, {
  image: imgAPI/* default.movie.2 */.Z.movie[2],
  subtitle: 'Features and benefits you need',
  title: 'Your buisness, your schedule, your way',
  desc: 'We are on a path to become the fastes-growing direct selling company with room to grow your own buisness, youe own way.'
}, {
  image: imgAPI/* default.movie.3 */.Z.movie[3],
  subtitle: 'Absolute skin care services',
  title: 'Unfading Beauty,Unfading Reputation',
  rating: 5,
  duration: '2h 15m',
  desc: 'Revolution the history of skin care,begining of new legend that will go beyond the acheivements.'
}];

function Promotion() {
  const {
    classes,
    cx
  } = promotion_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isMobile = useMediaQuery_default()(theme => theme.breakpoints.down('md'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.sliderWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_dandelion_animated_slider_default()), {
        autoplay: 7500,
        className: "slider-wrapper",
        previousButton: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')
        }),
        nextButton: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')
        }),
        children: sliderData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.innerBg,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.background,
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.image,
                  alt: item.title
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
              container: true,
              className: classes.row,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                item: true,
                sm: 7,
                xs: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.text,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h4",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: text.subtitle2,
                      children: item.subtitle
                    }), item.title]
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: classes.property
                  }), /*#__PURE__*/jsx_runtime_.jsx("article", {
                    className: classes.desc,
                    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      component: "h6",
                      className: text.paragraph,
                      children: item.desc
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                    className: classes.btnArea,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                      className: classes.btnText,
                      color: "secondary",
                      children: "Learn More"
                    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                      variant: "contained",
                      size: "large",
                      color: "primary",
                      children: "Join Now"
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                item: true,
                sm: 5,
                xs: 12,
                children: !isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.image,
                  children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.image,
                      alt: item.title
                    })
                  })
                })
              })]
            })]
          })
        }, index.toString()))
      })
    })
  });
}

/* harmony default export */ const Promotions = (Promotion);
;// CONCATENATED MODULE: ./components/Promotions/index.js


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(8460);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/Title.js





function Title(props) {
  const {
    classes,
    cx
  } = (0,title_style/* default */.Z)();
  const {
    primary,
    secondary,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.title, setAlign(align)),
    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h4",
      className: classes.primary,
      children: primary
    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h4",
      className: classes.secondary,
      children: secondary
    })]
  });
}
Title.defaultProps = {
  align: 'left'
};
;// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),

/***/ 7253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Trending_Trending)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Trending/trending-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const overlay = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: 40,
  top: 0,
  left: 0,
  fontSize: 28
};
const trendingStyles = (0,mui_.makeStyles)({
  uniqId: 'trending'
})((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  overlay: {},
  grid25: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big,
      width: '31%',
      margin: '0 1%'
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
      margin: '0 1%',
      width: '23%'
    },
    '&:hover': {
      '& img': {
        transform: 'translateX(0px)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      transform: 'translateX(-10px)',
      minHeight: '100%',
      width: 'calc(100% + 20px)'
    },
    [`& .${classes.overlay}`]: _objectSpread(_objectSpread({}, overlay), {}, {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        backgroundImage: `linear-gradient(-44deg, ${theme.palette.primary.main} 6%, ${theme.palette.secondary.main} 100%)`
      }
    }),
    '& h5': {
      textTransform: 'uppercase',
      position: 'absolute',
      textAlign: 'center',
      bottom: 50,
      width: '100%',
      left: 0,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(5),
      whiteSpace: 'normal'
    }
  },
  grid50: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    background: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big,
      width: '33%'
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: 350
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      height: '100%',
      minWidth: '100%',
      opacity: 0.45
    },
    [`& .${classes.overlay}`]: _objectSpread({
      backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0.64), transparent)',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        alignItems: 'center'
      }
    }, overlay),
    '& h3': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.7em',
      lineHeight: '48px',
      '& i': {
        marginRight: theme.spacing(2)
      },
      '& span': {
        textTransform: 'none',
        display: 'block',
        letterSpacing: 1.6
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const trending_style = (trendingStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Trending/Trending.js
function Trending_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Trending_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Trending_ownKeys(Object(source), !0).forEach(function (key) { Trending_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Trending_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Trending_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000
};

function Trending() {
  const {
    classes
  } = trending_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isTablet = useMediaQuery_default()(theme => theme.breakpoints.down('sm'));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: !isTablet ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.grid25,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: imgAPI/* default.movie.7 */.Z.movie[7],
          alt: "trending"
        }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
          className: classes.overlay,
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "h5",
            children: "Connect with Beauty Players IBC"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.grid50,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: imgAPI/* default.movie.8 */.Z.movie[8],
          alt: "trending"
        }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
          className: classes.overlay,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            variant: "h4",
            style: {
              textAlign: 'right',
              color: 'white'
            },
            children: ["Sign and Submit ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["Independent beauty ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " cosultant agreement"]
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.grid25,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: imgAPI/* default.movie.9 */.Z.movie[9],
          alt: "trending"
        }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
          className: classes.overlay,
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "h5",
            children: "Choose any skin care service that fit your life,to active account"
          })
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), Trending_objectSpread(Trending_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.grid25,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imgAPI/* default.movie.7 */.Z.movie[7],
            alt: "trending"
          }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
            className: classes.overlay,
            children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h5",
              children: "Connect with Beauty Players IBC"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.grid50,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imgAPI/* default.movie.8 */.Z.movie[8],
            alt: "trending"
          }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
            className: classes.overlay,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
              variant: "h3",
              style: {
                textAlign: 'center',
                color: 'white'
              },
              children: ["Sign and Submit ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: ["Independent beauty ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " cosultant agreement"]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.grid25,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imgAPI/* default.movie.9 */.Z.movie[9],
            alt: "trending"
          }), /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
            className: classes.overlay,
            children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h5",
              children: "Choose any skin care service that fit your life,to active account"
            })
          })]
        })
      })]
    }))
  });
}

/* harmony default export */ const Trending_Trending = (Trending);
;// CONCATENATED MODULE: ./components/Trending/index.js


/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ VideoBanner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(434);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/VideoBanner/banner-style.js

const bannerStyles = (0,mui_.makeStyles)({
  uniqId: 'banner'
})((theme, _params, classes) => ({
  root: {
    display: 'block',
    background: theme.palette.common.black,
    height: 720,
    width: '200%',
    marginLeft: '-50%',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 640
    }
  },
  video: {
    height: '100%',
    width: '50%',
    left: '25%',
    position: 'absolute',
    '& img': {
      width: '100%',
      minHeight: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('lg')]: {
        objectFit: 'cover'
      }
    },
    '& iframe': {
      width: '100%',
      position: 'relative',
      top: '-20px !important'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: '-50%',
    background: theme.palette.common.black,
    opacity: 0.5,
    width: '200%',
    height: '100%',
    zIndex: 10,
    borderRadius: '0 0 50% 50%'
  },
  caption: {
    position: 'absolute',
    width: '100%',
    zIndex: 90,
    textAlign: 'left',
    color: theme.palette.common.white,
    top: '55%',
    [theme.breakpoints.down('sm')]: {
      top: '30%'
    },
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 1
      }
    }
  },
  hidden: {},
  btnPlay: {
    overflow: 'visible !important',
    position: 'absolute',
    top: -120,
    left: '50%',
    transform: 'translate(-50%)',
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    border: '3px solid #fff',
    '& i': {
      color: theme.palette.common.white,
      fontSize: 64,
      width: 64,
      height: 64,
      position: 'relative',
      '&[class="ion-ios-play-outline"]': {
        left: 3
      }
    },
    '& span strong': {
      position: 'absolute',
      color: theme.palette.common.white,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontBold,
      fontSize: 24,
      top: 20,
      transition: 'all 0.3s ease',
      '&:first-of-type': {
        left: '-140%',
        '& + strong': {
          right: '-155%'
        }
      },
      [`&.${classes.hidden}`]: {
        opacity: 0,
        transform: 'scale(0.4)'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const banner_style = (bannerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.js
















function Banner() {
  // Theme breakpoints
  const theme = (0,styles_.useTheme)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('lg'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = banner_style(); // Youtube player

  const {
    0: play,
    1: setPlayed
  } = (0,external_react_.useState)(false);
  const {
    0: playCtrl,
    1: setPlayedCtrl
  } = (0,external_react_.useState)(true);
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();

    if (curTime > 0) {
      setPlayed(true);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);

    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '800',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'https://localhost:3010'
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.video,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.overlay
      }), !play || isMobile ? /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: imgAPI/* default.movie.0 */.Z.movie[0],
        alt: "cover"
      }) : null, (youtube_default()).use && !isMobile && /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
        videoId: "7hnFuafARtU",
        opts: opts,
        onReady: _onReady,
        onEnd: _onEnd,
        onPlay: _onPlay
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.caption,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
          children: [play && !isMobile && /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
            className: classes.btnPlay,
            onClick: _onTogglePause,
            size: "large",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                className: playCtrl ? classes.hidden : '',
                children: "watch"
              }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                className: playCtrl ? classes.hidden : '',
                children: "trailer"
              }), playCtrl ? /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "ion-ios-pause-outline"
              }) : /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "ion-ios-play-outline"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
              item: true,
              md: 12,
              xs: 12,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                className: text.subtitle2,
                children: "Experience bettr Services"
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                className: text.title,
                children: "a better way and a better opportunity"
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h2",
                className: text.subtitle,
                children: "Discover the best you with beautyPlayers.com"
              })]
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const VideoBanner = (Banner);
;// CONCATENATED MODULE: ./components/VideoBanner/index.js


/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8647);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3413);
/* harmony import */ var _components_VideoBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9794);
/* harmony import */ var _components_Promotions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(911);
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9861);
/* harmony import */ var _components_Trending__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7253);
/* harmony import */ var _components_Categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4503);
/* harmony import */ var _components_AllCategories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5157);
/* harmony import */ var _components_PricingPlan__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3385);
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7551);
/* harmony import */ var _components_NewsEvent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5167);
/* harmony import */ var _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7156);
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4316);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_8__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_18__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_8__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)



















const sectionMargin = margin => margin * 20;

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'home'
})(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(3)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2)
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2)
    }
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const {
    classes
  } = useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme => theme.breakpoints.down('lg'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("title", {
        children: 'BeautyPlayers - Home Page'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("section", {
          id: "home",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_VideoBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            id: "promotions",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Promotions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "featured",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Featured__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "trending",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Trending__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "categories",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Categories__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "all",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_AllCategories__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "pricing",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_PricingPlan__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "faq",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Faq__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
          id: "news",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_NewsEvent__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("section", {
        id: "footer",
        className: classes.spaceTop,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          toggleDir: onToggleDir
        })
      }), !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})]
      })]
    })]
  });
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)
const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_5__/* .makeStaticProps */ .pc)(['common']);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 434:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 8539:
/***/ ((module) => {

module.exports = "/_next/static/images/faq-b09fb3c9b96b0ee06930bb494c74af54.png";

/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 2494:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ButtonBase");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 3843:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Icon");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 1168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 6080:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 9174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 9829:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SnackbarContent");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3191:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6578:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

"use strict";
module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,675,384,567,618,460,647,882], () => (__webpack_exec__(9315)));
module.exports = __webpack_exports__;

})();