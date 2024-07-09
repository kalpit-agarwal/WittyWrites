"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "../server/models/post.js":
/*!********************************!*\
  !*** ../server/models/post.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\n\r\n\r\nconst postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema(\r\n  {\r\n    content: {\r\n      type: {},\r\n      required: true,\r\n    },\r\n    postedBy: {\r\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\r\n      ref: \"User\",\r\n    },\r\n    image: {\r\n      url: String,\r\n      public_id: String,\r\n    },\r\n    likes: [{ type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId, ref: \"User\" }],\r\n    comments: [\r\n      {\r\n        text: String,\r\n        createdAt: { type: Date, default: Date.now },\r\n        postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId, ref: \"User\" },\r\n      },\r\n    ],\r\n  },\r\n  { timestamps: true }\r\n);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"Post\", postSchema));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL21vZGVscy9wb3N0LmpzIiwibWFwcGluZ3MiOiI7O0FBQWdDO0FBQ2hDO0FBQ0EsdUJBQXVCLDRDQUFlO0FBQ3RDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZLDRDQUFlO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxjQUFjLE1BQU0sNENBQWUsOEJBQThCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQsb0JBQW9CLE1BQU0sNENBQWUsOEJBQThCO0FBQ3ZFLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCxJQUFJO0FBQ0o7QUFDQTtBQUNBLCtEQUFlLDJDQUFjLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9zZXJ2ZXIvbW9kZWxzL3Bvc3QuanM/MDAxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBwb3N0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIHR5cGU6IHt9LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwb3N0ZWRCeToge1xyXG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHJlZjogXCJVc2VyXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgdXJsOiBTdHJpbmcsXHJcbiAgICAgIHB1YmxpY19pZDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGxpa2VzOiBbeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIgfV0sXHJcbiAgICBjb21tZW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogU3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxyXG4gICAgICAgIHBvc3RlZEJ5OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIlVzZXJcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlBvc3RcIiwgcG9zdFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../server/models/post.js\n"));

/***/ })

});