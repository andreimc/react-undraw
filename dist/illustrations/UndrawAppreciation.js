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

var UndrawAppreciation = function UndrawAppreciation(_props) {
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
    viewBox: "0 0 878 737.16",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 547.62,
    y1: 818.58,
    x2: 547.62,
    y2: 81.42,
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
    x1: 808.92,
    y1: 716.17,
    x2: 808.92,
    y2: 344.73,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 1145.95,
    y1: 619.95,
    x2: 1145.95,
    y2: 543.3,
    gradientTransform: "rotate(43.55 941.515 38.303)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 1228.17,
    y1: 651.09,
    x2: 1080.75,
    y2: 495.98,
    gradientTransform: "rotate(43.55 941.515 38.303)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 1200.46,
    y1: 562.32,
    x2: 1110.51,
    y2: 467.69,
    gradientTransform: "rotate(43.55 941.515 38.303)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M622.12 512.34c-32-65.11-6.4-121.68 38.43-161.18 61.91-28.82 122.75-16 167.58 41.63 29.25-17.1 66.5-20.8 97.13-13.88 23.64-89 1.5-195.76-77.39-253.3-102.62-74.85-246.49-52.33-321.34 50.29-102.62-74.85-246.53-52.33-321.34 50.29s-52.33 246.49 50.29 321.34l371.63 271.05 98.55-136.53z",
    transform: "translate(-161 -81.42)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M455.72 430.29a122.844 122.844 0 1 1 212.1-124 122.39 122.39 0 0 1 89-13.76c22.6-85.11-7.55-179.13-83-234.14-98.11-71.56-235.66-50-307.22 48.08C268.52 34.96 131 56.49 59.41 154.58s-50 235.66 48.08 307.22L462.8 720.97l90.37-123.91z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M829.54 401.7a114.94 114.94 0 0 0-198.48 116l116 198.48 198.48-116a114.94 114.94 0 1 0-116-198.48z",
    transform: "translate(-161 -81.42)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M667.58 323.93a109.616 109.616 0 1 0-189.26 110.65l110.6 189.26 189.26-110.6a109.603 109.603 0 1 0-110.6-189.26z",
    fill: "#e53935"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M658.5 465.91L772.38 679.9l23.49-83.43L658.5 465.91z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M658.5 465.91L772.38 679.9l23.49-83.43L658.5 465.91z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M658.5 465.91L878 568.78l-82.13 27.69L658.5 465.91z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M665.57 472.63l104.22 195.85 21.5-76.36-125.72-119.49z"
  }), _react.default.createElement("path", {
    d: "M665.57 472.63l104.22 195.85 21.5-76.36-125.72-119.49z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M665.57 472.63l200.89 94.15-75.17 25.34-125.72-119.49z"
  }), _react.default.createElement("path", {
    d: "M367 106.58l-.08-.43-.28.38C268.52 34.96 131 56.49 59.41 154.58c-62.5 85.69-54 201.47 14.54 277.09zM776.18 514.19A109.614 109.614 0 0 0 666 324.66l109 190.21z",
    opacity: 0.2
  }));
};

UndrawAppreciation.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAppreciation;
exports.default = _default;