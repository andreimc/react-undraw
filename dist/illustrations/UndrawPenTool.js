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

var UndrawPenTool = function UndrawPenTool(_props) {
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
    viewBox: "0 0 907.88 641.74",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 444.99,
    y1: 641.74,
    x2: 444.99,
    y2: 550.42,
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
    x1: 586.17,
    y1: 702.27,
    x2: 586.17,
    y2: 250.71,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 448.88,
    y1: 71.08,
    x2: 448.88,
    y2: 1.14,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 41,
    y1: 82.01,
    x2: 41,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 866.87,
    y1: 82.01,
    x2: 866.87,
    y2: 0,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M531.57 550.42H358.41v60.88h19.24v30.44h134.68V611.3h19.24v-60.88z"
  }), _react.default.createElement("path", {
    d: "M596.87 251.71v208.52c20.73 6.22 29.81 12.58 34.91 26.13a65.58 65.58 0 0 1 2.18 38c-3.27 14-9.28 21.47-25.65 25.81a62.53 62.53 0 0 1-28.41 1c-22.62-4.59-34.51-20-34.51-45.56 0-24.46 8.4-37.44 31.5-45.16v-39.16l-1-170.59-169.8 252.52s81.27 67.93 111 199.05h138.14s41.59-152.22 111-189.69z",
    transform: "translate(-146.06 -129.13)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M453.87 132.75v193.5a55 55 0 1 1-27.52 2.37V132.75l-156 238.55s82.57 73.4 110.1 201.85h119.3s45.87-156 110.1-192.67zM59.35 31.83h366.99v18.35H59.35zM472.22 31.83h366.99v18.35H472.22z",
    fill: "#eceff1"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M380.47 591.49h128.45v45.87H380.47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M413.91 1.14h69.93v69.93h-69.93z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M417.17 4.3h64.22v64.22h-64.22z"
  }), _react.default.createElement("circle", {
    cx: 41,
    cy: 41,
    r: 41,
    fill: "url(#prefix__d)"
  }), _react.default.createElement("circle", {
    cx: 866.87,
    cy: 41,
    r: 41,
    fill: "url(#prefix__e)"
  }), _react.default.createElement("circle", {
    cx: 41,
    cy: 41,
    r: 36.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 866.74,
    cy: 41,
    r: 36.7,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M362.12 554.79h165.15v55.05H362.12z"
  }), _react.default.createElement("path", {
    opacity: 0.2,
    d: "M362.12 554.79h165.15v55.05H362.12z"
  }));
};

UndrawPenTool.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawPenTool;
exports.default = _default;