"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultProps = _interopRequireDefault(require("../default-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UndrawMailSent = function UndrawMailSent(_props) {
  var props = Object.assign({}, _props);
  var primaryColor = props.primaryColor || _defaultProps.default.primaryColor;
  var style = Object.assign({
    height: props.height || _defaultProps.default.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return _react.default.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 737.61 734.73",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 600,
    y1: 817.36,
    x2: 600,
    y2: 82.64,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 640.68,
    y1: 541.38,
    x2: 640.68,
    y2: 111.38,
    gradientTransform: "rotate(.13 36889.153 -101490.725)",
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 0.55,
    stopOpacity: 0.09
  }), _react.default.createElement("stop", {
    offset: 1,
    stopOpacity: 0.02
  }))), _react.default.createElement("path", {
    d: "M968.8 384.4c.06-27.46-5.63-34.67-18-45.11L617.08 88.13A27.22 27.22 0 0 0 584.4 88L256.58 332.11c-12.44 10.38-24.09 22.48-24.15 49.94h-.36l-.84 376v16.74a41 41 0 0 0 40.92 41.1h16.16l310.85.69 327 .73a41 41 0 0 0 41.1-40.92l.87-392.05z",
    transform: "translate(-231.2 -82.64)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M7.017 301.158l722.998 1.64-.794 350a71.78 71.78 0 0 1-71.923 71.607L76.53 723.087a70.47 70.47 0 0 1-70.31-70.63l.797-351.299z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M7.03 301.14l-.81 365.62a56.16 56.16 0 0 0 56 56.28l610.76 1.32",
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    d: "M730.07 302.75l-.81 365.61a56.16 56.16 0 0 1-56.28 56L62.25 723",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M353.13 15.27l-322 237.32c-12.22 10.09-23.66 21.86-23.72 48.56l723.39 2.29c.06-26.7-5.53-33.71-17.7-43.86L385.23 15.36a27 27 0 0 0-32.1-.09z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M353.13 15.27l-322 237.32c-12.22 10.09-23.66 21.86-23.72 48.56l723.39 2.29c.06-26.7-5.53-33.71-17.7-43.86L385.23 15.36a27 27 0 0 0-32.1-.09z",
    opacity: 0.3
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M651.79 97.86L564.3 29.19 352.78 297.12l-113.67-88.13-71.17 90.46 165.42 126.36 41.01 32.95 277.42-360.9z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M645.39 96.18l-79.33-60.83L355.92 309.4l-116.71-89.49-60.83 79.33 156.36 119.72 40.1 30.05L645.39 96.18z"
  }));
};

UndrawMailSent.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMailSent;
exports.default = _default;