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

var UndrawPhoto = function UndrawPhoto(_props) {
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
    viewBox: "0 0 887.82 625.36",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 600,
    y1: 754.02,
    x2: 600,
    y2: 145.98,
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
    x1: 437.25,
    y1: 574.51,
    x2: 437.25,
    y2: 36.62,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("clipPath", {
    id: "prefix__c",
    transform: "translate(-163.46 -145.98)"
  }, _react.default.createElement("rect", {
    x: 216.65,
    y: 194.98,
    width: 767.31,
    height: 510.36,
    rx: 8.85,
    ry: 8.85,
    fill: "#fff"
  }))), _react.default.createElement("path", {
    d: "M1036 734.86a19.06 19.06 0 0 1-19 19.14H183a19.06 19.06 0 0 1-19-19.16v-569.7A19.06 19.06 0 0 1 183 146h834a19.06 19.06 0 0 1 19 19.16",
    transform: "translate(-163.46 -145.98)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M862.73 579.56a18.52 18.52 0 0 1-18.52 18.52H29.47a18.52 18.52 0 0 1-18.52-18.52V28.8a18.52 18.52 0 0 1 18.52-18.52h814.74a18.52 18.52 0 0 1 18.52 18.52",
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 43.49,
    y: 36.62,
    width: 787.52,
    height: 537.89,
    rx: 8.85,
    ry: 8.85,
    fill: "url(#prefix__b)",
    "data-name": "<Rectangle>"
  }), _react.default.createElement("rect", {
    x: 53.19,
    y: 49,
    width: 767.31,
    height: 510.36,
    rx: 8.85,
    ry: 8.85,
    fill: "#fff"
  }), _react.default.createElement("g", {
    clipPath: "url(#prefix__c)"
  }, _react.default.createElement("path", {
    d: "M10.54 554.68l214.21-245.47a42.64 42.64 0 0 1 60.34-3.94l60 52.93a42.64 42.64 0 0 0 55.65.67l183.32-154.12a42.64 42.64 0 0 1 59 4l225 247.64a42.64 42.64 0 0 1 10.91 24.9l8.68 97.69a42.64 42.64 0 0 1-42.48 46.42H42.65A42.64 42.64 0 0 1 .02 584.02a42.64 42.64 0 0 1 10.52-29.34z",
    fill: primaryColor
  })), _react.default.createElement("circle", {
    cx: 145.58,
    cy: 130.83,
    r: 47.52,
    fill: "#ff5252"
  }));
};

UndrawPhoto.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawPhoto;
exports.default = _default;