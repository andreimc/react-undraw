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

var UndrawSelect = function UndrawSelect(_props) {
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
    viewBox: "0 0 666.24 728.82",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 600,
    y1: 814.41,
    x2: 600,
    y2: 85.59,
    gradientTransform: "translate(-266.87 -85.6)",
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
    x1: 333.12,
    y1: 540.89,
    x2: 333.12,
    y2: 294.6,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 176.82,
    y1: 463.53,
    x2: 176.82,
    y2: 349.86,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("rect", {
    x: 131.23,
    width: 403.77,
    height: 728.81,
    rx: 15.34,
    ry: 15.34,
    fill: "url(#prefix__a)"
  }), _react.default.createElement("rect", {
    x: 136.69,
    y: 9.85,
    width: 392.86,
    height: 709.12,
    rx: 13.64,
    ry: 13.64,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M431.82 27.63a31.85 31.85 0 0 1-31.39 27.09h-135.7a31.85 31.85 0 0 1-31.39-27.09h-71.87a14.92 14.92 0 0 0-14.92 14.92v643.72a14.92 14.92 0 0 0 14.92 14.92h343.3a14.92 14.92 0 0 0 14.92-14.92V42.55a14.92 14.92 0 0 0-14.92-14.92z",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("rect", {
    x: 289.9,
    y: 36.12,
    width: 87.55,
    height: 5.47,
    rx: 2,
    ry: 2,
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 396.05,
    cy: 38.31,
    r: 3.28,
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 203.47,
    cy: 164.78,
    r: 40.07,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M282.37 134.72h71.38v12.52h-71.38zM282.37 158.51h196.62v12.52H282.37zM282.37 182.31h196.62v12.52H282.37z"
  }), _react.default.createElement("circle", {
    cx: 203.47,
    cy: 283.75,
    r: 40.07,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M282.37 253.69h71.38v12.52h-71.38zM282.37 277.49h196.62v12.52H282.37zM282.37 301.28h196.62v12.52H282.37z"
  }), _react.default.createElement("circle", {
    cx: 203.47,
    cy: 402.72,
    r: 40.07,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M282.37 372.66h71.38v12.52h-71.38zM282.37 396.46h196.62v12.52H282.37zM282.37 420.25h196.62v12.52H282.37z"
  }), _react.default.createElement("circle", {
    cx: 203.47,
    cy: 521.69,
    r: 40.07,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M282.37 491.63h71.38v12.52h-71.38zM282.37 515.43h196.62v12.52H282.37zM282.37 539.22h196.62v12.52H282.37z"
  }), _react.default.createElement("circle", {
    cx: 203.47,
    cy: 640.66,
    r: 40.07,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M282.37 610.61h71.38v12.52h-71.38zM282.37 634.4h196.62v12.52H282.37zM282.37 658.19h196.62v12.52H282.37z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M0 294.6h666.24v246.29H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M4.74 299.34h656.77v227.34H4.74z"
  }), _react.default.createElement("circle", {
    cx: 176.82,
    cy: 406.7,
    r: 56.84,
    fill: "url(#prefix__c)"
  }), _react.default.createElement("circle", {
    cx: 176.82,
    cy: 406.7,
    r: 50.52,
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.2,
    fill: primaryColor
  }, _react.default.createElement("path", {
    d: "M276.28 368.8h89.99v15.79h-89.99zM276.28 398.8h247.87v15.79H276.28zM276.28 428.8h247.87v15.79H276.28z"
  })), _react.default.createElement("path", {
    fill: "#fff",
    d: "M209.98 386.44l-11.1-8.47-29.24 38.32-16.32-12.46-8.47 11.1 21.88 16.7.06-.08 5.53 4.22 37.66-49.33z"
  }));
};

UndrawSelect.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawSelect;
exports.default = _default;