"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/cards/PostList.js":
/*!**************************************!*\
  !*** ./components/cards/PostList.js ***!
  \**************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-render-html */ \"./node_modules/react-render-html/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nconst PostList = (param)=>{\n    let { posts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: posts && posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                    size: 40,\n                                    className: \"mb-2\",\n                                    style: {\n                                        background: \"black\",\n                                        color: \"white\"\n                                    },\n                                    name: post.postedBy.name,\n                                    src: \"https://bit.ly/broken-link\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"pt-2 ml-3\",\n                                    children: post.postedBy.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"pt-2 ml-3\",\n                                    children: moment__WEBPACK_IMPORTED_MODULE_2__(post.createdAt).fromNow()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: \"content...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-footer\",\n                        children: \"like/unlike\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNmO0FBQ3dDO0FBQ3BFLE1BQU1LLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDekIscUJBQ0U7a0JBQ0dBLFNBQ0NBLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7Z0JBQW1CQyxXQUFVOztrQ0FDNUIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs7Z0NBQ0U7OENBQ0QsOERBQUNQLG9EQUFNQTtvQ0FDTFMsTUFBTTtvQ0FDTkQsV0FBVTtvQ0FDVkUsT0FBTzt3Q0FBRUMsWUFBWTt3Q0FBU0MsT0FBTztvQ0FBUTtvQ0FDN0NDLE1BQU1QLEtBQUtRLFFBQVEsQ0FBQ0QsSUFBSTtvQ0FDeEJFLEtBQUk7Ozs7Ozs4Q0FFTiw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQWFGLEtBQUtRLFFBQVEsQ0FBQ0QsSUFBSTs7Ozs7OzhDQUMvQyw4REFBQ0c7b0NBQUtSLFdBQVU7OENBQ2JULG1DQUFNQSxDQUFDTyxLQUFLVyxTQUFTLEVBQUVDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlyQyw4REFBQ1g7d0JBQUlDLFdBQVU7a0NBQVk7Ozs7OztrQ0FDM0IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFjOzs7Ozs7O2VBbEJyQkYsS0FBS2EsR0FBRzs7Ozs7O0FBdUI1QjtLQTVCTWhCO0FBOEJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvUG9zdExpc3QuanM/OTIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVuZGVySFRNTCBmcm9tIFwicmVhY3QtcmVuZGVyLWh0bWxcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyQmFkZ2UsIEF2YXRhckdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuY29uc3QgUG9zdExpc3QgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwb3N0cyAmJlxyXG4gICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuX2lkfSBjbGFzc05hbWU9XCJjYXJkIG1iLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezQwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJibGFja1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3Bvc3QucG9zdGVkQnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9iaXQubHkvYnJva2VuLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB0LTIgbWwtM1wiPntwb3N0LnBvc3RlZEJ5Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHQtMiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+Y29udGVudC4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+bGlrZS91bmxpa2U8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xyXG4iXSwibmFtZXMiOlsicmVuZGVySFRNTCIsIm1vbWVudCIsIkF2YXRhciIsIkF2YXRhckJhZGdlIiwiQXZhdGFyR3JvdXAiLCJQb3N0TGlzdCIsInBvc3RzIiwibWFwIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsIm5hbWUiLCJwb3N0ZWRCeSIsInNyYyIsInNwYW4iLCJjcmVhdGVkQXQiLCJmcm9tTm93IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/PostList.js\n"));

/***/ })

});