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

var UndrawMobile = function UndrawMobile(_props) {
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
    viewBox: "0 0 392.94 715",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 196.47,
    y1: 715,
    x2: 196.47,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0.01,
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
  }))), _react.default.createElement("rect", {
    width: 392.94,
    height: 715,
    rx: 24.73,
    ry: 24.73,
    fill: "url(#prefix__a)"
  }), _react.default.createElement("rect", {
    x: 9.05,
    y: 9.95,
    width: 374.84,
    height: 688.43,
    rx: 24.73,
    ry: 24.73,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M51.37 58.61h290.2v560.24H51.37z"
  }), _react.default.createElement("ellipse", {
    cx: 196.47,
    cy: 659.21,
    rx: 23.14,
    ry: 23.74,
    fill: "#dbdbdb"
  }), _react.default.createElement("ellipse", {
    cx: 152.51,
    cy: 32.5,
    rx: 4.63,
    ry: 4.75,
    fill: "#dbdbdb"
  }), _react.default.createElement("rect", {
    x: 173.33,
    y: 28.94,
    width: 71.73,
    height: 7.12,
    rx: 1.5,
    ry: 1.5,
    fill: "#dbdbdb"
  }));
};

UndrawMobile.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMobile;
exports.default = _default;