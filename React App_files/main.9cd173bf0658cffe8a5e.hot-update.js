webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Dashboard/Dashboard */ "./src/components/Dashboard/Dashboard.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Register/Register */ "./src/components/Register/Register.js");
/* harmony import */ var _components_Signin_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Signin/Signin */ "./src/components/Signin/Signin.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/leonardo/Desktop/Leonardo/Account/my-account/src/App.js";







const initialState = {
  show: false,
  route: '',
  isSignedIn: false,
  isAuthenticated: true
};

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.onShow = e => {
      e.stopPropagation();
      console.log('aqui', this.state.show);
      this.setState(prevState => {
        return {
          show: !prevState.show
        };
      });
    };

    this.onShowClose = () => {
      this.setState({
        show: false
      });
    };

    this.onRouteChange = route => {
      this.setState({
        route: route
      });
    };

    this.isAuthenticated = () => {
      this.setState({
        isAuthenticated: true
      });
    };

    this.state = initialState;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.onShowClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: this.state.show,
      route: this.state.route,
      onShow: this.onShow,
      onRouteChange: this.onRouteChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/signin",
      component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signin_Signin__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isAuthenticated: this.isAuthenticated,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/",
      exact: true,
      component: _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/register",
      component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Register_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isAuthenticated: this.isAuthenticated,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
      to: "/signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.9cd173bf0658cffe8a5e.hot-update.js.map