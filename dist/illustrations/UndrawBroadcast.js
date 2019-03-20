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

var UndrawBroadcast = function UndrawBroadcast(_props) {
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
    viewBox: "0 0 605.25 761.48",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 304.32,
    y1: 452.8,
    x2: 304.32,
    y2: 148.23,
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
    d: "M550.14 79.38a84.83 84.83 0 0 1 31.57 57.89 6.66 6.66 0 0 0 6.82 6l10.24-.3a6.68 6.68 0 0 0 6.46-7.31 108.65 108.65 0 0 0-113.2-98.3 6.69 6.69 0 0 0-6.34 7.42l1.14 10.18a6.65 6.65 0 0 0 6.85 5.92 84.79 84.79 0 0 1 56.46 18.5z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M541.97 89.62a84.78 84.78 0 0 0-55.4-18.56 6.67 6.67 0 0 0-6.42 7.42l.85 7.59a6.66 6.66 0 0 0 6.74 5.92 64.15 64.15 0 0 1 64.79 56.22 6.68 6.68 0 0 0 6.81 5.89l7.63-.22a6.66 6.66 0 0 0 6.45-7.37 84.82 84.82 0 0 0-31.45-56.89z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M510.11 129.54a47 47 0 0 1 17.15 29.52 6.73 6.73 0 0 0 6.81 5.77l3.69-.11a6.69 6.69 0 0 0 6.41-7.69 64.15 64.15 0 0 0-63.32-54.82 6.64 6.64 0 0 0-6.52 7.42l.41 3.68a6.73 6.73 0 0 0 6.67 5.93 46.94 46.94 0 0 1 28.7 10.3zM55.12 79.38a84.83 84.83 0 0 0-31.57 57.89 6.66 6.66 0 0 1-6.82 6l-10.24-.3a6.68 6.68 0 0 1-6.46-7.31 108.65 108.65 0 0 1 113.2-98.3 6.69 6.69 0 0 1 6.34 7.42l-1.14 10.16a6.65 6.65 0 0 1-6.85 5.92 84.79 84.79 0 0 0-56.46 18.52z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M63.29 89.62a84.78 84.78 0 0 1 55.4-18.56 6.67 6.67 0 0 1 6.42 7.42l-.85 7.59a6.66 6.66 0 0 1-6.74 5.92 64.15 64.15 0 0 0-64.79 56.22 6.68 6.68 0 0 1-6.81 5.89l-7.63-.22a6.66 6.66 0 0 1-6.45-7.37 84.82 84.82 0 0 1 31.45-56.89z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M95.15 129.54A47 47 0 0 0 78 159.06a6.73 6.73 0 0 1-6.81 5.77l-3.69-.11a6.69 6.69 0 0 1-6.41-7.69 64.15 64.15 0 0 1 63.32-54.82 6.64 6.64 0 0 1 6.52 7.42l-.41 3.68a6.73 6.73 0 0 1-6.67 5.93 46.94 46.94 0 0 0-28.7 10.3z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M280.56 753.65V18.99a19 19 0 0 1 19-19h11.26a19 19 0 0 1 19 19v734.66c-.02 10.44-49.26 10.44-49.26 0z",
    fill: "#535461"
  }), _react.default.createElement("rect", {
    x: 120.96,
    y: 148.23,
    width: 366.73,
    height: 304.56,
    rx: 44.36,
    ry: 44.36,
    fill: "url(#prefix__a)"
  }), _react.default.createElement("rect", {
    x: 125.44,
    y: 152.71,
    width: 358.31,
    height: 295.61,
    rx: 44.36,
    ry: 44.36,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M321.1 275.35a4.76 4.76 0 0 1 4.75 4.75v40.83a4.76 4.76 0 0 1-4.75 4.75h-36.94a4.76 4.76 0 0 1-4.75-4.75V280.1a4.76 4.76 0 0 1 4.75-4.75h36.95m0-2h-36.95a6.75 6.75 0 0 0-6.75 6.75v40.83a6.75 6.75 0 0 0 6.75 6.75h36.95a6.75 6.75 0 0 0 6.75-6.75V280.1a6.75 6.75 0 0 0-6.75-6.75z",
    fill: "#e0e0e0"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M302.63 288.42v11.46M307.43 293.44a10.19 10.19 0 1 1-9.42-.09"
  }));
};

UndrawBroadcast.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBroadcast;
exports.default = _default;