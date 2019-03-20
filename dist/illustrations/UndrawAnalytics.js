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

var UndrawAnalytics = function UndrawAnalytics(_props) {
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
    viewBox: "0 0 882 763.27",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 673,
    y1: 763.27,
    x2: 673,
    y2: 341,
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
    x1: 640,
    y1: 537.58,
    x2: 640,
    y2: 459.58,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 736,
    y1: 591.58,
    x2: 736,
    y2: 513.58,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 688,
    y1: 645.58,
    x2: 688,
    y2: 567.58,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 822,
    y1: 699.58,
    x2: 822,
    y2: 621.58,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 209,
    y1: 422.27,
    x2: 209,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 405,
    y1: 582.71,
    x2: 405,
    y2: 160.45,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 500.8,
    y1: 592.09,
    x2: 500.8,
    y2: 468.22,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M464 341h418v422.27H464z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M469.69 407.82h406.63v344.07H469.69z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M469.69 345.27h406.63v62.56H469.69z"
  }), _react.default.createElement("circle", {
    cx: 500.97,
    cy: 376.54,
    r: 15.64,
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 540.78,
    cy: 376.54,
    r: 15.64,
    fill: "#ff0"
  }), _react.default.createElement("circle", {
    cx: 580.59,
    cy: 376.54,
    r: 15.64,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M505.5 488.36h335v21h-335zM505.5 542.36h335v21h-335zM505.5 596.36h335v21h-335zM505.5 650.36h335v21h-335z"
  }), _react.default.createElement("circle", {
    cx: 640,
    cy: 498.58,
    r: 39,
    fill: "url(#prefix__b)"
  }), _react.default.createElement("circle", {
    cx: 736,
    cy: 552.58,
    r: 39,
    fill: "url(#prefix__c)"
  }), _react.default.createElement("circle", {
    cx: 688,
    cy: 606.58,
    r: 39,
    fill: "url(#prefix__d)"
  }), _react.default.createElement("circle", {
    cx: 822,
    cy: 660.58,
    r: 39,
    fill: "url(#prefix__e)"
  }), _react.default.createElement("circle", {
    cx: 640,
    cy: 498.58,
    r: 33,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 736,
    cy: 552.58,
    r: 33,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 688,
    cy: 606.58,
    r: 33,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 822,
    cy: 660.58,
    r: 33,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M0 0h418v422.27H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M5.69 66.82h406.63v344.07H5.69z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M5.69 4.27h406.63v62.56H5.69z"
  }), _react.default.createElement("circle", {
    cx: 36.97,
    cy: 35.54,
    r: 15.64,
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 76.78,
    cy: 35.54,
    r: 15.64,
    fill: "#ff0"
  }), _react.default.createElement("circle", {
    cx: 116.59,
    cy: 35.54,
    r: 15.64,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M94.63 149.29h38.26v179.14H94.63zM158.12 149.29h38.26v179.14h-38.26zM221.6 149.29h38.26v179.14H221.6zM285.08 149.29h38.26v179.14h-38.26z"
  }), _react.default.createElement("path", {
    fill: "#2196f3",
    d: "M94.63 238.86h38.26v89.57H94.63z"
  }), _react.default.createElement("path", {
    fill: "#2196f3",
    d: "M94.63 201.46h38.26v39.13H94.63z",
    opacity: 0.4
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    opacity: 0.4,
    d: "M158.47 220h38.26v39.13h-38.26z"
  }), _react.default.createElement("path", {
    fill: "#ff0",
    opacity: 0.4,
    d: "M285.1 222.05h38.26v39.13H285.1z"
  }), _react.default.createElement("path", {
    fill: "#69f0ae",
    d: "M158.12 258.3h38.26v70.12h-38.26z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M221.6 225.81h38.26v102.62H221.6z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M221.6 190.16h38.26v35.65H221.6z"
  }), _react.default.createElement("path", {
    fill: "#ff0",
    d: "M285.08 261.47h38.26v66.96h-38.26z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M196 160.45h418v422.27H196z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M201.69 227.27h406.63v344.07H201.69z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M201.69 164.71h406.63v62.56H201.69z"
  }), _react.default.createElement("circle", {
    cx: 232.97,
    cy: 195.99,
    r: 15.64,
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 272.78,
    cy: 195.99,
    r: 15.64,
    fill: "#ff0"
  }), _react.default.createElement("circle", {
    cx: 312.59,
    cy: 195.99,
    r: 15.64,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    d: "M405 281.29h-.71v236h.71a118 118 0 0 0 0-236z",
    fill: "#2196f3"
  }), _react.default.createElement("path", {
    d: "M404.29 281.31A118 118 0 0 0 287 398.63h117.29z",
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    d: "M439.61 468.22v.74A123.14 123.14 0 0 0 562 592.09V468.22z",
    transform: "translate(-159 -68.37)",
    fill: "url(#prefix__h)"
  }), _react.default.createElement("path", {
    d: "M284.17 401.43v.71a118 118 0 0 0 117.3 118V401.43z",
    fill: primaryColor
  }));
};

UndrawAnalytics.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAnalytics;
exports.default = _default;