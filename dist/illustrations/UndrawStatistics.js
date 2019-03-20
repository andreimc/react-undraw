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

var UndrawStatistics = function UndrawStatistics(_props) {
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
    viewBox: "0 0 863 769.5",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 279.59,
    y1: 769.5,
    x2: 279.59,
    y2: 175.12,
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
    x1: 583.59,
    x2: 583.59,
    y2: 175.12,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 434,
    x2: 434,
    y2: 118.5,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 431.5,
    y1: 426.5,
    x2: 431.5,
    y2: 23.5,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 751.69,
    y1: 377.75,
    x2: 751.69,
    y2: 246.43,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 415.98,
    y1: 335.24,
    x2: 415.98,
    y2: 303.64,
    gradientTransform: "rotate(-90 295.375 407.625)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 454.87,
    y1: 357.11,
    x2: 454.87,
    y2: 325.52,
    gradientTransform: "rotate(-90 295.375 407.625)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 435.42,
    y1: 378.98,
    x2: 435.42,
    y2: 347.39,
    gradientTransform: "rotate(-90 295.375 407.625)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 489.7,
    y1: 400.86,
    x2: 489.7,
    y2: 369.26,
    gradientTransform: "rotate(-90 295.375 407.625)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M149.58 769.31l-24.58.19 289.42-594.38 19.75 9.77-284.59 584.42z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M715.76 769.31l20.24.19-285.08-594.38-19.75 9.77 284.59 584.42z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M423 118.5h22v651h-22z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M149.58 764.31l-24.58.19 289.42-589.81 19.75 9.69-284.59 579.93z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M715.76 764.31l20.24.19-285.08-589.81-19.75 9.69 284.59 579.93z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M423 118.5h22v646h-22zM431.5 66a28 28 0 0 1-28-28V28a28 28 0 0 1 56 0v10a28 28 0 0 1-28 28zm0-59a21 21 0 0 0-21 21v10a21 21 0 0 0 42 0V28a21 21 0 0 0-21-21z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M0 23.5h863v403H0z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M8.5 31h846v382H8.5z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M23.5 43h814v348h-814z"
  }), _react.default.createElement("path", {
    d: "M650.19 55.5h-.75v250.18h.75a125.1 125.1 0 1 0 0-250.2z",
    fill: "#2196f3"
  }), _react.default.createElement("path", {
    d: "M649.44 55.52a125.08 125.08 0 0 0-124.33 124.33h124.33z",
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    d: "M686.83 246.43v.79a130.54 130.54 0 0 0 129.74 130.53V246.43z",
    transform: "translate(-168.5 -65.25)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M522.09 182.86v.75A125.09 125.09 0 0 0 646.42 308.7V182.86z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M47 67.5h241.4v17.08H47z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M47 95.45h386v17.08H47zM47 123.4h386v17.08H47zM47 151.36h386v17.08H47z"
  }), _react.default.createElement("path", {
    fill: "#2196f3",
    d: "M695 344.5h27v27h-27z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M733 350.5h88v16h-88z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M542 344.5h27v27h-27z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M580 350.5h88v16h-88z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    d: "M394 344.5h27v27h-27z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M432 350.5h88v16h-88zM203.05 205.8h8.51v135.7h-8.51zM224.92 205.8h8.51v135.7h-8.51zM246.8 205.8h8.51v135.7h-8.51zM268.67 205.8h8.51v135.7h-8.51z"
  }), _react.default.createElement("circle", {
    cx: 207.19,
    cy: 287.02,
    r: 15.8,
    fill: "url(#prefix__f)"
  }), _react.default.createElement("circle", {
    cx: 229.06,
    cy: 248.13,
    r: 15.8,
    fill: "url(#prefix__g)"
  }), _react.default.createElement("circle", {
    cx: 250.94,
    cy: 267.58,
    r: 15.8,
    fill: "url(#prefix__h)"
  }), _react.default.createElement("circle", {
    cx: 272.81,
    cy: 213.3,
    r: 15.8,
    fill: "url(#prefix__i)"
  }), _react.default.createElement("circle", {
    cx: 207.19,
    cy: 287.02,
    r: 13.37,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 229.06,
    cy: 248.13,
    r: 13.37,
    fill: "#69f0ae"
  }), _react.default.createElement("circle", {
    cx: 250.94,
    cy: 267.58,
    r: 13.37,
    fill: "#2196f3"
  }), _react.default.createElement("circle", {
    cx: 272.81,
    cy: 213.3,
    r: 13.37,
    fill: primaryColor
  }));
};

UndrawStatistics.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawStatistics;
exports.default = _default;