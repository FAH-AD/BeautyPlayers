"use strict";
(() => {
var exports = {};
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 6788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_15__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2494);
/* harmony import */ var _mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3843);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4618);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4882);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4539);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3413);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_19__, _components_Header__WEBPACK_IMPORTED_MODULE_20__]);
([_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_19__, _components_Header__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)









const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'detail'
})((theme, _params, classes) => ({
  mainWrap: {
    background: theme.palette.background.paper
  },
  bgWrap: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: 720
  },
  containerWrap: {
    padding: theme.spacing(20, 4, 15),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing()
    }
  },
  bgMovie: {
    direction: 'ltr',
    width: '200%',
    height: 720,
    marginLeft: '-50%',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      height: 480
    },
    '& img': {
      width: '50%',
      top: '-50%',
      position: 'relative',
      margin: '0 auto',
      opacity: 0.2,
      filter: 'blur(20px)',
      left: theme.direction === 'rtl' ? '-25%' : '25%'
    }
  },
  text: {
    flex: 1,
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    },
    '& h4': {
      fontSize: '2.28rem',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      width: '100%',
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
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnAreaSmall: {
    margin: theme.spacing(2, 0, 0, -1),
    '& > *': {
      marginRight: theme.spacing(1)
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnText: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  desc: {
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(5),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium
    }
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
      borderRadius: 20,
      '& img': {
        width: '100%'
      }
    },
    '& i': {
      position: 'absolute',
      fontSize: 52,
      top: 'calc(50% - 30px)',
      left: 'calc(50% - 30px)',
      border: `5px solid ${theme.palette.common.white}`,
      zIndex: 10,
      borderRadius: '50%',
      width: 60,
      height: 60,
      lineHeight: '44px',
      paddingLeft: theme.direction === 'rtl' ? 0 : 4,
      paddingRight: theme.direction === 'rtl' ? 4 : 0,
      color: theme.palette.common.white,
      background: 'rgba(0, 0, 0, 0.4)'
    }
  },
  about: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(7, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    },
    [`& .${classes.btnArea}`]: {
      marginTop: theme.spacing(6)
    }
  },
  person: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5)
    },
    '& h6': {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      marginBottom: theme.spacing(4)
    }
  }
}));

function DetailProduct(props) {
  const {
    classes
  } = useStyles();
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_17__/* .useText */ .XK)(); // Media Query

  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up('sm'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)('common');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("title", {
        children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_16___default().movie.name) + ' - Detail Movie'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir,
        invert: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
        className: classes.bgWrap,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
          className: classes.bgMovie,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
            src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_18__/* ["default"].movie[15] */ .Z.movie[15],
            alt: "poster"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
          maxWidth: "lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
            container: true,
            spacing: 6,
            justifyContent: "center",
            direction: isDesktop ? 'row-reverse' : 'row',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
              item: true,
              sm: 5,
              md: 5,
              xs: 12,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("div", {
                className: classes.image,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_ButtonBase__WEBPACK_IMPORTED_MODULE_9___default()), {
                  focusRipple: true,
                  href: "#",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                    className: "ion-ios-play play"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("figure", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("img", {
                      src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_18__/* ["default"].movie[15] */ .Z.movie[15],
                      alt: "movie"
                    })
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
              item: true,
              lg: 5,
              sm: 7,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                  variant: "h4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("span", {
                    className: text.subtitle2,
                    children: "Vivamus sit amet"
                  }), "The Lorem Ipsum Dolor Sit Amet"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: classes.property,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("span", {
                    className: classes.star,
                    children: [...Array(5)].map((e, indexStar) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Icon__WEBPACK_IMPORTED_MODULE_13___default()), {
                      className: classes.starIcon,
                      children: "star"
                    }, indexStar.toString()))
                  }), "5.0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("span", {
                    className: classes.divider
                  }), "2h 13m"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("article", {
                  className: classes.desc,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                    component: "h6",
                    className: text.paragraph,
                    children: "Drama, Action and Adventure"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
                  className: classes.btnArea,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                    className: classes.btnText,
                    color: "secondary",
                    children: t('movie-landing.promo_btn1')
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                    variant: "contained",
                    size: "large",
                    color: "primary",
                    children: t('movie-landing.promo_btn2')
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
          container: true,
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
            item: true,
            lg: 10,
            md: 12,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default()), {
              className: classes.about,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                container: true,
                spacing: 6,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                  item: true,
                  md: 7,
                  xs: 12,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                    mb: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      variant: "h4",
                      className: text.title2,
                      children: t('movie-landing.detail_storyline')
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: classes.btnAreaSmall,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                      className: classes.btnText,
                      color: "secondary",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        className: "ion-md-share"
                      }), t('movie-landing.detail_share')]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                      className: classes.btnText,
                      color: "secondary",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        className: "ion-ios-film"
                      }), t('movie-landing.detail_trivia')]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                      className: classes.btnText,
                      color: "secondary",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("i", {
                        className: "ion-ios-star"
                      }), t('movie-landing.detail_rate')]
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                  item: true,
                  md: 5,
                  xs: 12,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: classes.person,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      variant: "h6",
                      className: classes.titlePerson,
                      children: t('movie-landing.detail_director')
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      className: classes.titlePerson,
                      children: "John Doe"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      variant: "h6",
                      className: classes.titlePerson,
                      children: t('movie-landing.detail_writers')
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      className: classes.titlePerson,
                      children: "John Doe, Jim Doe, Jane Doe"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      variant: "h6",
                      className: classes.titlePerson,
                      children: t('movie-landing.detail_stars')
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                      className: classes.titlePerson,
                      children: "Jena Doe, James Doe, Jack Doe, Jimmy Doe"
                    })]
                  })
                })]
              })
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("section", {
        className: classes.spaceTop,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          invert: true
        })
      })]
    })]
  });
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)
const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_15__/* .makeStaticProps */ .pc)(['common']);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailProduct);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 2494:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonBase");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 3843:
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 4180:
/***/ ((module) => {

module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6578:
/***/ ((module) => {

module.exports = require("react-scrollspy");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,675,384,567,618,882], () => (__webpack_exec__(6788)));
module.exports = __webpack_exports__;

})();