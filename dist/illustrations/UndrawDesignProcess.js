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

var UndrawDesignProcess = function UndrawDesignProcess(_props) {
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
    viewBox: "0 0 1016.95 779.71",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 196.28,
    y1: 438.84,
    x2: 196.28,
    y2: 60.65,
    gradientTransform: "translate(-91.51 -60.66)",
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
    x1: 600.14,
    y1: 614.06,
    x2: 600.14,
    y2: 235.88,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 1003.72,
    y1: 788.45,
    x2: 1003.72,
    y2: 410.27,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("rect", {
    width: 209.52,
    height: 378.19,
    rx: 7.96,
    ry: 7.96,
    fill: "url(#prefix__a)"
  }), _react.default.createElement("rect", {
    x: 2.84,
    y: 5.11,
    width: 203.86,
    height: 367.97,
    rx: 13.64,
    ry: 13.64,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M155.98 14.36a16.53 16.53 0 0 1-16.29 14H69.28a16.53 16.53 0 0 1-16.29-14h-37.3a7.74 7.74 0 0 0-7.74 7.74v334a7.74 7.74 0 0 0 7.74 7.74h178.15a7.74 7.74 0 0 0 7.74-7.74v-334a7.74 7.74 0 0 0-7.73-7.74z",
    fill: "#fafafa"
  }), _react.default.createElement("rect", {
    x: 82.34,
    y: 18.74,
    width: 45.43,
    height: 2.84,
    rx: 1.42,
    ry: 1.42,
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 137.42,
    cy: 19.88,
    r: 1.7,
    fill: "#dbdbdb"
  }), _react.default.createElement("rect", {
    x: 403.86,
    y: 175.23,
    width: 209.52,
    height: 378.19,
    rx: 7.96,
    ry: 7.96,
    fill: "url(#prefix__b)"
  }), _react.default.createElement("rect", {
    x: 406.69,
    y: 180.34,
    width: 203.86,
    height: 367.97,
    rx: 13.64,
    ry: 13.64,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M559.84 189.57a16.53 16.53 0 0 1-16.29 14.06h-70.41a16.53 16.53 0 0 1-16.29-14.06h-37.3a7.74 7.74 0 0 0-7.74 7.74v334.05a7.74 7.74 0 0 0 7.74 7.74h178.14a7.74 7.74 0 0 0 7.79-7.74v-334a7.74 7.74 0 0 0-7.74-7.74z",
    fill: "#fafafa"
  }), _react.default.createElement("rect", {
    x: 486.19,
    y: 193.97,
    width: 45.43,
    height: 2.84,
    rx: 1.42,
    ry: 1.42,
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 541.27,
    cy: 195.11,
    r: 1.7,
    fill: "#dbdbdb"
  }), _react.default.createElement("g", {
    opacity: 0.8,
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, _react.default.createElement("path", {
    d: "M495.93 291.91v6h-6"
  }), _react.default.createElement("path", {
    strokeDasharray: "9.3 9.3",
    d: "M480.63 297.91h-32.54"
  }), _react.default.createElement("path", {
    d: "M443.45 297.91h-6v-6"
  }), _react.default.createElement("path", {
    strokeDasharray: "13.55 13.55",
    d: "M437.45 278.37v-20.32"
  }), _react.default.createElement("path", {
    d: "M437.45 251.28v-6h6"
  }), _react.default.createElement("path", {
    strokeDasharray: "9.3 9.3",
    d: "M452.74 245.28h32.54"
  }), _react.default.createElement("path", {
    d: "M489.93 245.28h6v6"
  }), _react.default.createElement("path", {
    strokeDasharray: "13.55 13.55",
    d: "M495.93 264.82v20.32"
  })), _react.default.createElement("g", {
    opacity: 0.8,
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, _react.default.createElement("path", {
    d: "M583.01 490.77v6h-6"
  }), _react.default.createElement("path", {
    strokeDasharray: "9.3 9.3",
    d: "M567.71 496.77h-32.54"
  }), _react.default.createElement("path", {
    d: "M530.52 496.77h-6v-6"
  }), _react.default.createElement("path", {
    strokeDasharray: "13.55 13.55",
    d: "M524.53 477.22V456.9"
  }), _react.default.createElement("path", {
    d: "M524.52 450.13v-6h6"
  }), _react.default.createElement("path", {
    strokeDasharray: "9.3 9.3",
    d: "M539.82 444.13h32.54"
  }), _react.default.createElement("path", {
    d: "M577.01 444.13h6v6"
  }), _react.default.createElement("path", {
    strokeDasharray: "13.55 13.55",
    d: "M583.01 463.68v20.31"
  })), _react.default.createElement("g", {
    opacity: 0.8,
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12"
  }, _react.default.createElement("path", {
    d: "M437.12 325.53h146.22M437.12 354.78h146.22M437.12 384.02h146.22M437.12 413.26h146.22"
  })), _react.default.createElement("rect", {
    x: 807.43,
    y: 349.63,
    width: 209.52,
    height: 378.19,
    rx: 7.96,
    ry: 7.96,
    fill: "url(#prefix__c)"
  }), _react.default.createElement("rect", {
    x: 810.26,
    y: 354.74,
    width: 203.86,
    height: 367.97,
    rx: 13.64,
    ry: 13.64,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M963.41 363.97a16.53 16.53 0 0 1-16.29 14.06h-70.41a16.53 16.53 0 0 1-16.29-14.06h-37.3a7.74 7.74 0 0 0-7.74 7.74v334a7.74 7.74 0 0 0 7.74 7.74h178.15a7.74 7.74 0 0 0 7.74-7.74v-334a7.74 7.74 0 0 0-7.74-7.74z",
    fill: "#fafafa"
  }), _react.default.createElement("rect", {
    x: 889.76,
    y: 368.37,
    width: 45.43,
    height: 2.84,
    rx: 1.42,
    ry: 1.42,
    fill: "#dbdbdb"
  }), _react.default.createElement("circle", {
    cx: 944.84,
    cy: 369.51,
    r: 1.7,
    fill: "#dbdbdb"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M836.47 419.68h58.49v52.64h-58.49zM924.2 618.53h58.49v52.64H924.2z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M836.47 502.86h146.21M836.47 532.1h146.21M836.47 561.34h146.21M836.47 590.59h146.21"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12",
    d: "M232.95 40.71h277v102M508.95 590.71v188h404v-32"
  }), _react.default.createElement("path", {
    fill: "#f55f44",
    opacity: 0.5,
    d: "M205.48 513.36h9v9h-9zM453.48 58.36h9v9h-9zM115.48 450.36h9v9h-9zM196.48 675.36h9v9h-9zM421.48 711.36h9v9h-9zM309.48 310.36h9v9h-9zM723.48 626.36h9v9h-9zM718.48 261.36h9v9h-9zM560.48 590.36h9v9h-9zM862.48 117.36h9v9h-9zM628.48 99.36h9v9h-9zM835.48 747.36h9v9h-9z"
  }));
};

UndrawDesignProcess.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDesignProcess;
exports.default = _default;