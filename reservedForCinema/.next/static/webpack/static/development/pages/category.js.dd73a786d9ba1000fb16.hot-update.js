webpackHotUpdate("static\\development\\pages\\category.js",{

/***/ "./pages/category.js":
/*!***************************!*\
  !*** ./pages/category.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.jsx");
/* harmony import */ var _static_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/styles/style.scss */ "./static/styles/style.scss");
/* harmony import */ var _static_styles_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Category = function Category(props) {
  try {
    var genre = window.location.pathname.slice(8, 20);
    var finalGenre = genre[0].toUpperCase() + genre.slice(1);
    var trueShows = props.shows.filter(function (show) {
      return show.genres.includes(finalGenre);
    });
    console.log(trueShows);

    if (finalGenre == 'Action') {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "category"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "category-greet"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, finalGenre)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "film-container"
      }, trueShows.map(function (show) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "film-cell",
          key: show.id
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          src: show.image.medium,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, show.name, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "(", show.premiered.slice(0, -6), ")")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          as: "/posts/".concat(show.id),
          href: "/post?id=".concat(show.id)
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, "See more"))));
      })))));
    }
  } catch (_unused) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "category"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Waiting..."))));
  }
};

Category.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

})
//# sourceMappingURL=category.js.dd73a786d9ba1000fb16.hot-update.js.map