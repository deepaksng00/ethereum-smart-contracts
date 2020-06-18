webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./components/requestrow.js":
/*!**********************************!*\
  !*** ./components/requestrow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RequestRow, _Component);\n\n  var _super = _createSuper(RequestRow);\n\n  function RequestRow() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, RequestRow);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RequestRow, [{\n    key: \"onApprove\",\n    value: function () {\n      var _onApprove = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var campaign;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this.props.address);\n                _context.next = 3;\n                return campaign.methods.approveRequest(this.props.id).send({});\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function onApprove() {\n        return _onApprove.apply(this, arguments);\n      }\n\n      return onApprove;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Row,\n          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Cell;\n      var _this$props = this.props,\n          id = _this$props.id,\n          request = _this$props.request,\n          approversCount = _this$props.approversCount;\n      return __jsx(Row, null, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__[\"default\"].utils.fromWei(request.value, \"ether\")), __jsx(Cell, null, request.recipient), __jsx(Cell, null, request.approvalCount + \"/\" + approversCount), __jsx(Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        color: \"green\",\n        basic: true,\n        onClick: this.onApprove\n      }, \"Approve\")), __jsx(Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        color: \"red\",\n        basic: true\n      }, \"Finalise\")));\n    }\n  }]);\n\n  return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcXVlc3Ryb3cuanM/N2NhMiJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsIm9uQXBwcm92ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVFDLHdCLEdBQVdDLG1FQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxPQUFaLEM7O3VCQUNuQkgsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxLQUFLSCxLQUFMLENBQVdJLEVBQTNDLEVBQStDQyxJQUEvQyxDQUFvRCxFQUFwRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBS0Q7QUFBQSxVQUNHQyxHQURILEdBQ2lCQyx1REFEakIsQ0FDR0QsR0FESDtBQUFBLFVBQ1FFLElBRFIsR0FDaUJELHVEQURqQixDQUNRQyxJQURSO0FBQUEsd0JBRW1DLEtBQUtSLEtBRnhDO0FBQUEsVUFFR0ksRUFGSCxlQUVHQSxFQUZIO0FBQUEsVUFFT0ssT0FGUCxlQUVPQSxPQUZQO0FBQUEsVUFFZ0JDLGNBRmhCLGVBRWdCQSxjQUZoQjtBQUlMLGFBQ0ksTUFBQyxHQUFELFFBQ0ksTUFBQyxJQUFELFFBQVFOLEVBQVIsQ0FESixFQUVJLE1BQUMsSUFBRCxRQUFRSyxPQUFPLENBQUNFLFdBQWhCLENBRkosRUFHSSxNQUFDLElBQUQsUUFBUUMsc0RBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CTCxPQUFPLENBQUNNLEtBQTNCLEVBQWtDLE9BQWxDLENBQVIsQ0FISixFQUlJLE1BQUMsSUFBRCxRQUFRTixPQUFPLENBQUNPLFNBQWhCLENBSkosRUFLSSxNQUFDLElBQUQsUUFBUVAsT0FBTyxDQUFDUSxhQUFSLEdBQXdCLEdBQXhCLEdBQThCUCxjQUF0QyxDQUxKLEVBTUksTUFBQyxJQUFELFFBQ0ksTUFBQyx3REFBRDtBQUFRLGFBQUssRUFBRyxPQUFoQjtBQUF3QixhQUFLLE1BQTdCO0FBQThCLGVBQU8sRUFBSyxLQUFLUTtBQUEvQyxtQkFESixDQU5KLEVBU0ksTUFBQyxJQUFELFFBQ0ksTUFBQyx3REFBRDtBQUFRLGFBQUssRUFBRyxLQUFoQjtBQUFzQixhQUFLO0FBQTNCLG9CQURKLENBVEosQ0FESjtBQWVIOzs7O0VBM0JvQkMsK0M7O0FBOEJWdEIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3Ryb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBhc3luYyBvbkFwcHJvdmUoKSB7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q2VsbD57IGlkIH08L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+eyByZXF1ZXN0LmRlc2NyaXB0aW9uIH08L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+eyB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKSB9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPnsgcmVxdWVzdC5yZWNpcGllbnQgfTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD57IHJlcXVlc3QuYXBwcm92YWxDb3VudCArIFwiL1wiICsgYXBwcm92ZXJzQ291bnQgfTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvciA9IFwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrID0geyB0aGlzLm9uQXBwcm92ZSB9PkFwcHJvdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3IgPSBcInJlZFwiIGJhc2ljPkZpbmFsaXNlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/requestrow.js\n");

/***/ })

})