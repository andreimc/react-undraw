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

var UndrawBuilding = function UndrawBuilding(_props) {
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
    viewBox: "0 0 907 671.95",
    style: style
  }, props), _react.default.createElement("circle", {
    cx: 698.89,
    cy: 78.11,
    r: 78.11,
    fill: "#ff5252"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M133.5 131.95h641v503h-641z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M133.5 131.95h641v503h-641z"
  }), _react.default.createElement("path", {
    fill: "#464353",
    d: "M0 200.95h907v437H0z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M189 79.95h530v592H189zM37 259.95h112v72H37zM37 381.95h112v72H37zM37 503.95h112v72H37z"
  }), _react.default.createElement("path", {
    fill: "#464353",
    d: "M257 137.95h112v72H257zM257 259.95h112v72H257zM257 381.95h112v72H257zM651 209.95H539v-72h112zM651 331.95H539v-72h112zM651 453.95H539v-72h112z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M750 259.95h112v72H750zM750 381.95h112v72H750zM750 503.95h112v72H750z"
  }), _react.default.createElement("path", {
    fill: "#464353",
    d: "M405 479.95h98v192h-98z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M257 137.95h112v22H257zM539 137.95h112v22H539zM539 259.95h112v22H539zM539 381.95h112v22H539zM257 259.95h112v22H257zM257 381.95h112v22H257zM37 259.95h112v17H37zM37 381.95h112v17H37zM37 503.95h112v17H37zM750 259.95h112v17H750zM750 381.95h112v17H750zM750 503.95h112v17H750z"
  }));
};

UndrawBuilding.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBuilding;
exports.default = _default;