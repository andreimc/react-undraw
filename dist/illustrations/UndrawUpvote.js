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

var UndrawUpvote = function UndrawUpvote(_props) {
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
    viewBox: "0 0 884.93 613.66",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 442.47,
    y1: 613.66,
    x2: 442.47,
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
  }))), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0V613.66h884.93V0H0z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M13.13 38.18h862.43v564.57H13.13z"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M13.13 11.33h862.43v41.54H13.13z"
  }), _react.default.createElement("circle", {
    cx: 45.95,
    cy: 31.47,
    r: 10.07,
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 73.64,
    cy: 31.47,
    r: 10.07,
    fill: "#ff0"
  }), _react.default.createElement("circle", {
    cx: 101.33,
    cy: 31.47,
    r: 10.07,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M180.54 158.51h289.13v28.28H180.54z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M179.49 219.26h645.3v28.28h-645.3zM179.49 280.02h645.3v28.28h-645.3z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.5,
    d: "M180.54 338.91h289.13v28.28H180.54zM179.49 399.67h645.3v28.28h-645.3z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M179.49 460.42h645.3v28.28h-645.3z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 158.33v25.66"
  }), _react.default.createElement("path", {
    fill: "#3ad29f",
    d: "M120.94 170.28l10.17-10.17 10.17 10.17v-8.63l-10.17-10.18-10.17 10.18v8.63z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 223.37v25.65"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M120.94 235.32l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 288.4v25.66"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M120.94 300.35l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 342.59v25.66"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M120.94 354.54l10.17-10.17 10.17 10.17v-8.63l-10.17-10.17-10.17 10.17v8.63z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 407.62v25.66"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M120.94 419.58l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 6,
    d: "M131.11 472.66v25.66"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M120.94 484.61l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z"
  }));
};

UndrawUpvote.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawUpvote;
exports.default = _default;