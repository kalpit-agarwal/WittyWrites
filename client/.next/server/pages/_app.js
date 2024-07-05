"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_3__]);\n_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n//we dont use \"to\" in nextjs, we use \"href\" instead\nconst Nav = ()=>{\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //process.browser is used to check if the code is running on the client side and not server side\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n         false && 0;\n    }, [\n         false && 0\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav bg-dark d-flex  justify-content-end py-2 \",\n        style: {\n            gap: \"80px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: `nav-item ${current === \"/\" && \"active\"}`,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__, {\n                    href: \"/\",\n                    className: \"nav-link text-light logo\",\n                    children: \"WittyWrites\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: `nav-item ${current === \"/user/dashboard\" && \"active\"}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__, {\n                            href: \"/user/dashboard\",\n                            className: `nav-link text-light `,\n                            children: state && state.user && state.user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            onClick: logout,\n                            className: \"nav-link text-light\",\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: `nav-item ${current === \"/login\" && \"active\"}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__, {\n                            href: \"/login\",\n                            className: \"nav-link text-light\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: `nav-item ${current === \"/register\" && \"active\"}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__, {\n                            href: \"/register\",\n                            className: \"nav-link text-light\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzJCO0FBQ2Y7QUFDRDtBQUN4QyxtREFBbUQ7QUFDbkQsTUFBTU0sTUFBTTtJQUNWLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2QyxnR0FBZ0c7SUFDaEdDLGdEQUFTQSxDQUFDO1FBQ1JNLE1BQWUsSUFBSUQsQ0FBb0M7SUFDekQsR0FBRztRQUFDQyxNQUFlLElBQUlFLENBQXdCO0tBQUM7SUFFaEQsTUFBTUcsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHZixpREFBVUEsQ0FBQ0csaURBQVdBO0lBRWhELE1BQU1hLFNBQVM7UUFDYk4sT0FBT08sWUFBWSxDQUFDQyxVQUFVLENBQUM7UUFDL0JILFNBQVM7UUFDVEYsT0FBT00sSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLEtBQUs7UUFBTzs7MEJBRXJCLDhEQUFDQztnQkFBR0gsV0FBVyxDQUFDLFNBQVMsRUFBRWYsWUFBWSxPQUFPLFNBQVMsQ0FBQzswQkFDdEQsNEVBQUNQLHNDQUFJQTtvQkFBQzBCLE1BQUs7b0JBQUlKLFdBQVU7OEJBQTJCOzs7Ozs7Ozs7OztZQUlyRFAsVUFBVSxxQkFDVDs7a0NBQ0UsOERBQUNVO3dCQUNDSCxXQUFXLENBQUMsU0FBUyxFQUFFZixZQUFZLHFCQUFxQixTQUFTLENBQUM7a0NBRWxFLDRFQUFDUCxzQ0FBSUE7NEJBQUMwQixNQUFLOzRCQUFrQkosV0FBVyxDQUFDLG9CQUFvQixDQUFDO3NDQUMzRFAsU0FBU0EsTUFBTVksSUFBSSxJQUFJWixNQUFNWSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7Ozs7O2tDQUczQyw4REFBQ0g7d0JBQUdILFdBQVU7a0NBQ1osNEVBQUNPOzRCQUNDQyxTQUFTYjs0QkFDVEssV0FBVTs0QkFDVkMsT0FBTztnQ0FBRVEsUUFBUTs0QkFBVTtzQ0FDNUI7Ozs7Ozs7Ozs7Ozs2Q0FNTDs7a0NBQ0UsOERBQUNOO3dCQUFHSCxXQUFXLENBQUMsU0FBUyxFQUFFZixZQUFZLFlBQVksU0FBUyxDQUFDO2tDQUMzRCw0RUFBQ1Asc0NBQUlBOzRCQUFDMEIsTUFBSzs0QkFBU0osV0FBVTtzQ0FBc0I7Ozs7Ozs7Ozs7O2tDQUl0RCw4REFBQ0c7d0JBQUdILFdBQVcsQ0FBQyxTQUFTLEVBQUVmLFlBQVksZUFBZSxTQUFTLENBQUM7a0NBQzlELDRFQUFDUCxzQ0FBSUE7NEJBQUMwQixNQUFLOzRCQUFZSixXQUFVO3NDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRTtBQUVBLGlFQUFlaEIsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vd2UgZG9udCB1c2UgXCJ0b1wiIGluIG5leHRqcywgd2UgdXNlIFwiaHJlZlwiIGluc3RlYWRcclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL3Byb2Nlc3MuYnJvd3NlciBpcyB1c2VkIHRvIGNoZWNrIGlmIHRoZSBjb2RlIGlzIHJ1bm5pbmcgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBub3Qgc2VydmVyIHNpZGVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsXHJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdiBiZy1kYXJrIGQtZmxleCAganVzdGlmeS1jb250ZW50LWVuZCBweS0yIFwiXHJcbiAgICAgIHN0eWxlPXt7IGdhcDogXCI4MHB4XCIgfX1cclxuICAgID5cclxuICAgICAgPGxpIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7Y3VycmVudCA9PT0gXCIvXCIgJiYgXCJhY3RpdmVcIn1gfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtbGlnaHQgbG9nb1wiPlxyXG4gICAgICAgICAgV2l0dHlXcml0ZXNcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIHtzdGF0ZSAhPT0gbnVsbCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7Y3VycmVudCA9PT0gXCIvdXNlci9kYXNoYm9hcmRcIiAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9kYXNoYm9hcmRcIiBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0IGB9PlxyXG4gICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7Y3VycmVudCA9PT0gXCIvbG9naW5cIiAmJiBcImFjdGl2ZVwifWB9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtjdXJyZW50ID09PSBcIi9yZWdpc3RlclwiICYmIFwiYWN0aXZlXCJ9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwidWwiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdhcCIsImxpIiwiaHJlZiIsInVzZXIiLCJuYW1lIiwiYSIsIm9uQ2xpY2siLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children })=>{\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    const token = state && state.token ? state.token : \"\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:8000/api\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common[\"token\"] = `${token}`;\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        return response;\n    }, function(error) {\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            Router.push(\"/login\");\n        }\n    });\n    //axios has interceptors which will run before request is send and if jwt is expired then it will remove the token from local storage and redirect to login page\n    //JSON.stringify converts a JavaScript object or value to a JSON string->used to store the state in local storage\n    //JSON.parse converts a JSON string to a JavaScript object->used to get the state from local storage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\context\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDakM7QUFDYztBQUN4QyxNQUFNSyw0QkFBY0osb0RBQWFBO0FBRWpDLE1BQU1LLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDaEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztRQUNqQ1csTUFBTSxDQUFDO1FBQ1BDLE9BQU87SUFDVDtJQUVBLE1BQU1BLFFBQVFILFNBQVNBLE1BQU1HLEtBQUssR0FBR0gsTUFBTUcsS0FBSyxHQUFHO0lBQ25EVCxzREFBYyxDQUFDVyxPQUFPLEdBQUdDLDJCQUEyQjtJQUNwRFosc0RBQWMsQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRVAsTUFBTSxDQUFDO0lBRW5EVCwwREFBa0IsQ0FBQ2tCLFFBQVEsQ0FBQ0MsR0FBRyxDQUM3QixTQUFVRCxRQUFRO1FBQ2hCLE9BQU9BO0lBQ1QsR0FDQSxTQUFVRSxLQUFLO1FBQ2IsSUFBSUMsTUFBTUQsTUFBTUYsUUFBUTtRQUN4QixJQUFJRyxJQUFJQyxNQUFNLEtBQUssT0FBT0QsSUFBSUUsTUFBTSxJQUFJLENBQUNGLElBQUlFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUU7WUFDcEVqQixTQUFTO1lBQ1RrQixPQUFPQyxZQUFZLENBQUNDLFVBQVUsQ0FBQztZQUMvQnRCLE9BQU91QixJQUFJLENBQUM7UUFDZDtJQUNGO0lBRUYsZ0tBQWdLO0lBRWhLLGlIQUFpSDtJQUVqSCxvR0FBb0c7SUFDcEc3QixnREFBU0EsQ0FBQztRQUNSUSxTQUFTc0IsS0FBS0MsS0FBSyxDQUFDTCxPQUFPQyxZQUFZLENBQUNLLE9BQU8sQ0FBQztJQUNsRCxHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQzdCLFlBQVk4QixRQUFRO1FBQUNDLE9BQU87WUFBQzNCO1lBQU9DO1NBQVM7a0JBQzNDSDs7Ozs7O0FBR1A7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gc3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6IFwiXCI7XHJcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcInRva2VuXCJdID0gYCR7dG9rZW59YDtcclxuXHJcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICBzZXRTdGF0ZShudWxsKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuICAvL2F4aW9zIGhhcyBpbnRlcmNlcHRvcnMgd2hpY2ggd2lsbCBydW4gYmVmb3JlIHJlcXVlc3QgaXMgc2VuZCBhbmQgaWYgand0IGlzIGV4cGlyZWQgdGhlbiBpdCB3aWxsIHJlbW92ZSB0aGUgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCByZWRpcmVjdCB0byBsb2dpbiBwYWdlXHJcblxyXG4gIC8vSlNPTi5zdHJpbmdpZnkgY29udmVydHMgYSBKYXZhU2NyaXB0IG9iamVjdCBvciB2YWx1ZSB0byBhIEpTT04gc3RyaW5nLT51c2VkIHRvIHN0b3JlIHRoZSBzdGF0ZSBpbiBsb2NhbCBzdG9yYWdlXHJcblxyXG4gIC8vSlNPTi5wYXJzZSBjb252ZXJ0cyBhIEpTT04gc3RyaW5nIHRvIGEgSmF2YVNjcmlwdCBvYmplY3QtPnVzZWQgdG8gZ2V0IHRoZSBzdGF0ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVXNlckNvbnRleHQsIFVzZXJQcm92aWRlciB9O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwiUm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index.js */ \"./context/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav.js */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_index_js__WEBPACK_IMPORTED_MODULE_1__, _components_Nav_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__]);\n([_context_index_js__WEBPACK_IMPORTED_MODULE_1__, _components_Nav_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_index_js__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_4__, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/styles.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kalpi\\\\OneDrive\\\\Desktop\\\\WittyWrites\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNQO0FBQ1Y7QUFDbUI7QUFDRDtBQUNHO0FBRW5DLFNBQVNLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNQLDJEQUFZQTs7MEJBQ1gsOERBQUNFLHNDQUFJQTswQkFDSCw0RUFBQ007b0JBQUtDLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUU5Qiw4REFBQ1QsMERBQUdBOzs7OzswQkFDSiw4REFBQ0UsMERBQWNBO2dCQUFDUSxVQUFTOzs7Ozs7MEJBQ3pCLDhEQUFDUCw0REFBY0E7MEJBQ2IsNEVBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4LmpzXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGVzLmNzc1wiPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIiAvPlxyXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9Vc2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiTmF2IiwiSGVhZCIsIlRvYXN0Q29udGFpbmVyIiwiQ2hha3JhUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();