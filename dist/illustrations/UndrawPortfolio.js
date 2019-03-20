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

var UndrawPortfolio = function UndrawPortfolio(_props) {
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
    viewBox: "0 0 796 684",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 398,
    y1: 684,
    x2: 398,
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
  })), _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 193,
    y1: 420.5,
    x2: 193,
    y2: 262,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "#b3b3b3",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "#b3b3b3",
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "#b3b3b3",
    stopOpacity: 0.1
  })), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 395.5,
    x2: 395.5,
    y2: 262,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 598.5,
    x2: 598.5,
    y2: 262,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    y1: 616.5,
    y2: 460,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 395.5,
    y1: 616.5,
    x2: 395.5,
    y2: 460,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 598.5,
    y1: 616.5,
    x2: 598.5,
    y2: 460,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M0 0h796v684H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M9.62 10.23h776.76v662.68H9.62z"
  }), _react.default.createElement("path", {
    fill: "#bdbdbd",
    d: "M118.5 81.85h254v20.81h-254z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M118.5 123.47h555v20.81h-555z"
  }), _react.default.createElement("path", {
    fill: "#64ffda",
    d: "M118.5 165.08h555v20.81h-555z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M113 262h160v158.5H113z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M316 262h159v158.5H316z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M519 262h159v158.5H519z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M113 460h160v156.5H113z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M316 460h159v156.5H316z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M519 460h159v156.5H519z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M118.5 265.5h149v149h-149zM321.5 265.5h149v149h-149zM524.5 265.5h149v149h-149zM118.5 461.5h149v149h-149zM321.5 461.5h149v149h-149zM524.5 461.5h149v149h-149z"
  }));
};

UndrawPortfolio.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawPortfolio;
exports.default = _default;