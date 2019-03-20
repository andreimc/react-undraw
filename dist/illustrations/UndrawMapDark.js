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

var UndrawMapDark = function UndrawMapDark(_props) {
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
    viewBox: "0 0 1142.05 959.79",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 535.45,
    y1: 779.24,
    x2: 535.45,
    y2: 104.91,
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
  })), _react.default.createElement("clipPath", {
    id: "prefix__c",
    transform: "translate(-64.55 -7.92)"
  }, _react.default.createElement("path", {
    "data-name": "<Clipping Path>",
    fill: primaryColor,
    d: "M889.29 734.56H724.7l-251.06 24.27-253-24.27v-594.6l251.96 18.2 257.39-18.2 251.8 34.38v467.18l-92.5 93.04z"
  })), _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 873.19,
    y1: 742.81,
    x2: 873.19,
    y2: 620.08,
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
  })), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 618.83,
    y1: 557.53,
    x2: 618.83,
    y2: 258.63,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 554.28,
    y1: 368.93,
    x2: 554.28,
    y2: 310.93,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    "data-name": "<Clipping Path>",
    fill: "url(#prefix__b)",
    d: "M829.06 752.8H669.3l-272.12 26.44-274.23-26.44V104.91l273.09 19.83 278.99-19.83 272.92 37.46-7 497.54L829.06 752.8z"
  }), _react.default.createElement("path", {
    "data-name": "<Clipping Path>",
    fill: "#fff",
    d: "M823.86 743.79H667.59l-266.17 25.73-268.23-25.73V113.41l267.12 19.3 272.88-19.3 266.95 36.45-6.85 484.1-109.43 109.83z"
  }), _react.default.createElement("path", {
    "data-name": "<Clipping Path>",
    fill: primaryColor,
    d: "M824.74 726.63H660.15L409.1 750.9l-253.01-24.27v-594.6l251.96 18.21 257.39-18.21 251.8 34.39V633.6l-92.5 93.03z"
  }), _react.default.createElement("g", {
    clipPath: "url(#prefix__c)"
  }, _react.default.createElement("path", {
    fill: "#fff",
    d: "M1142.05 905.14L564.09 585.08l146.8-487.75-49.96-19.81-71.14 236.37L22.97 0 0 54.65l572.41 316.98-130.68 434.2 49.96 19.81 55.02-182.82 572.37 316.97 22.97-54.65z"
  })), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M408.05 750.9L660 726.63v-594.6l-251.95 18.21"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M813.08 742.81l1.94-122.73 118.27 4.77-120.21 117.96z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M823.86 742.81l1.76-113.26 107.67 4.41-109.43 108.85z"
  }), _react.default.createElement("path", {
    d: "M718.46 354.55c0 53-99.63 203-99.63 203s-99.63-150-99.63-203 44.61-95.91 99.63-95.91 99.63 42.94 99.63 95.91z",
    transform: "translate(-64.55 -7.92)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("ellipse", {
    cx: 554.28,
    cy: 339.93,
    rx: 30.12,
    ry: 29,
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M638.8 348.44c0 48-87 184-87 184s-87-136-87-184a87 87 0 1 1 173.93 0z",
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 551.83,
    cy: 342.37,
    r: 26.29,
    fill: "#fff"
  }));
};

UndrawMapDark.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMapDark;
exports.default = _default;