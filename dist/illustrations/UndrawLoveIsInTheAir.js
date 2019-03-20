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

var UndrawLoveIsInTheAir = function UndrawLoveIsInTheAir(_props) {
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
    viewBox: "0 0 815.87 803.06",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 774.33,
    y1: 714.58,
    x2: 774.33,
    y2: 48.47,
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
    x1: 695,
    y1: 234.7,
    x2: 695,
    y2: 201.95,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 706.85,
    y1: 253.9,
    x2: 706.85,
    y2: 238.74,
    gradientTransform: "rotate(53.86 707.276 246.078)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 729.4,
    y1: 248.37,
    x2: 729.4,
    y2: 216.62,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 723.22,
    y1: 265.97,
    x2: 723.22,
    y2: 253.15,
    gradientTransform: "rotate(40.41 723.557 259.154)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 654.48,
    y1: 234.7,
    x2: 654.48,
    y2: 202.92,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 654.44,
    y1: 253.9,
    x2: 654.44,
    y2: 238.74,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 684.88,
    y1: 374.01,
    x2: 684.88,
    y2: 236.83,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 378.45,
    y1: 517.7,
    x2: 698.21,
    y2: 517.7,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M854.78 248.45l.43-.06c-13.46-41.21-42.45-40.56-50.2-39.6A34.61 34.61 0 0 0 794 207h-.68v-9.4l1.06-.41a17.1 17.1 0 0 0-.92-4.53 46.66 46.66 0 0 0 20.44-16.16 52.57 52.57 0 0 0-10.38-81 10.12 10.12 0 0 0 .67-.84 10.06 10.06 0 0 0-5.28-18.17 20.13 20.13 0 0 0-31.34-23.39 20.13 20.13 0 0 1 29.58 17.77v.66a20.13 20.13 0 1 0-39 7.4 10.07 10.07 0 0 0-6.66 14.74 52.57 52.57 0 0 0-12.82 83.62 46.67 46.67 0 0 0 19 15V207a34.57 34.57 0 0 0-11.52 2.1s-36.53-8.54-52.15 39.28c-6.61 17.52-11.77 43.9-13.32 83.38 0 0 2.93 31.16 50.26 1.69l2.16 26.4h.38v8.94H733l.38.75v.24c-38.25 33-23.68 309.91-23.68 309.91l21.07-51.76c1.86 20 .29 42.72-.79 54.24h-1.33l-1.59 24.55a4.31 4.31 0 0 0 4.28 4.85h32.56a2.23 2.23 0 0 0 2-3.23l-5.64-11.28a33.22 33.22 0 0 1-3.5-15.63l2.9-124.43 7.51-18.45 27.33-46.25 4.37 187.91a33.22 33.22 0 0 1-3.5 15.63l-5.64 11.28a2.23 2.23 0 0 0 2 3.23h32.54a4.3 4.3 0 0 0 3.52-1.83l.76 6-.76-6a4.29 4.29 0 0 0 .76-3l-1.59-23.32-1.22-.09c-1.31-13.56-3.65-45.94 1-68.68a499.8 499.8 0 0 0 8.6-66.69l5.19-77.48h.82l.28-5.19 1.21.06s15.14-61.58-23.16-94.41H819l.48-.95h-1.32v-8.95h1.91l1.77-24.47c44.5 26.76 46.19-3.62 46.19-3.62-1.5-39.4-6.66-65.73-13.25-83.28zM806.09 87.61v.55a10.07 10.07 0 0 0-8.36-9.35q.29-.5.56-1a10.07 10.07 0 0 1 7.8 9.8zM711.8 311.84l13.37-47.65 3.23 39.41zm112.32-7.46l2.54-35.25L842.45 313z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.5,
    fill: "url(#prefix__a)"
  }), _react.default.createElement("circle", {
    cx: 583.76,
    cy: 102.14,
    r: 50.3,
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M632.09 626.76s-5.45-43.62.3-71.8a478.19 478.19 0 0 0 8.23-63.81l6.58-98.22-46.52 8.72 5.05 217.21",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M605.73 618.86a31.78 31.78 0 0 1-3.35 15l-5.39 10.79a2.14 2.14 0 0 0 1.91 3.09h31.13a4.13 4.13 0 0 0 4.09-4.64l-1.52-22.31",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M539.09 627.93s5.45-43.62-.3-71.8a478.19 478.19 0 0 1-8.23-63.81l-6.58-98.22 46.52 8.72-5.05 217.21",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M565.45 620.04a31.78 31.78 0 0 0 3.35 15l5.39 10.79a2.14 2.14 0 0 1-1.91 3.09h-31.13a4.13 4.13 0 0 1-4.09-4.64l1.52-23.49",
    fill: "#333"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M543.1 302.19h81.14v31.41H543.1z"
  }), _react.default.createElement("path", {
    d: "M633.16 643.96v.01l.97 7.76-.97-7.77z"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M601.75 415.66l44.62 1.37.83-15.43-46.51 8.72 1.06 5.34zM569.71 415.66l-44.62 1.37-.83-15.43 46.51 8.72-1.06 5.34z"
  }), _react.default.createElement("path", {
    d: "M626.07 312.32h-83.34l-9.27-113.09a33.15 33.15 0 0 1 33.15-33.15h34.47a33.15 33.15 0 0 1 33.15 33.15z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 566.24,
    y: 137.1,
    width: 34.19,
    height: 47.01,
    rx: 9.6,
    ry: 9.6,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M542.73 320.87l29.2 57.22h20.9v31.44l55 2.62s14.49-58.92-22.16-90.33z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M625.51 320.87l-29.16 57.22 21.79 32.9-42.73 72.33-55 135s-14-265.14 22.69-296.55z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M544.26 187.05a33.36 33.36 0 0 1 1.46-5.17 33.07 33.07 0 0 0-11.2 24.83l3.16 38.53zM622.83 198.8a33.36 33.36 0 0 0-1.46-5.17 33.07 33.07 0 0 1 11.2 24.83l-3.16 38.53z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M648.45 185.72c11 13.74 21.25 42.18 23.51 99.72 0 0-2.62 47.12-89-31.41l-2.62-52.83a1.91 1.91 0 0 1 2.3-1.88 10.47 10.47 0 0 1 8.17 10.21v31.41l56.63 26.5-25.18-69.91c-2.67-15.09 16.6-23.81 26.19-11.81z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M609.75 168.09s35-8.17 49.89 37.58l-34.71 4.61z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M521.63 179.98c-12.84 10.75-26.42 38.26-29.05 105.47 0 0 4.38 46.64 90.76-31.89l.85-52.35a1.91 1.91 0 0 0-2.3-1.88 10.47 10.47 0 0 0-8.17 10.2v31.41l-51.29 25.44 20.71-73.85c2.15-12.1-12.06-20.47-21.51-12.55z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M555.21 168.09s-35-8.17-49.89 37.58l35.28 4.08z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M582.27 200.14h1.07v53.42h-1.07zM584.93 159.88a44.35 44.35 0 0 0 16.53-3.19 16.38 16.38 0 0 0-16.34-15.32h-1.4a16.39 16.39 0 0 0-16.32 14.91 44.34 44.34 0 0 0 17.53 3.6z"
  }), _react.default.createElement("circle", {
    cx: 583.85,
    cy: 111.11,
    r: 44.5,
    fill: "#fda57d"
  }), _react.default.createElement("circle", {
    cx: 568.78,
    cy: 52.91,
    r: 9.63,
    fill: "#f55f44"
  }), _react.default.createElement("circle", {
    cx: 603.02,
    cy: 52.91,
    r: 9.63,
    fill: "#f55f44"
  }), _react.default.createElement("circle", {
    cx: 584.83,
    cy: 36.86,
    r: 19.26,
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M605.16 41.14a9.59 9.59 0 0 0-5.37 1.64 9.63 9.63 0 0 1 8.61 17.06 9.63 9.63 0 0 0-3.23-18.69z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M588.03 14.39a19.18 19.18 0 0 0-12.25 4.4 19.26 19.26 0 0 1 21.29 31.87 19.26 19.26 0 0 0-9-36.27zM551.65 71.1s5.35 35.31 72.77 16.05l-33.17-28.89z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M567.51 500.2l-26.52 69.92v2.41l26.52-67.51v-4.82z"
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M779.65 270.64h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M784.58 274.1v1.48h-8.39v-1.48z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M429.65 453.64h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M434.58 457.1v1.48h-8.39v-1.48z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M105.61 518.41h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M110.54 521.86v1.48h-8.39v-1.48z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M446.81 544.42h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M451.75 547.87v1.48h-8.39v-1.48z"
  })), _react.default.createElement("path", {
    d: "M557.85 759.8a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM789.46 459.61a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM155.79 304.15a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 812.9,
    cy: 183.82,
    r: 2.96,
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 118.85,
    cy: 411.21,
    r: 2.96,
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("circle", {
    cx: 692.86,
    cy: 336.94,
    r: 2.96,
    fill: "#f55f44",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M307.33 38.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 310 38.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M308.84 67.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M748.33 119.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 751 119.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M749.84 148.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M47.33 584.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 50 584.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M48.84 613.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M29.33 71.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 32 71.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M30.84 100.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M380.33 476.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 383 476.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M381.84 505.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M396.33 231.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 399 231.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M397.84 260.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M136.33 209.17a10.89 10.89 0 0 0-14.2 1.36 11.13 11.13 0 0 0 .44 15.51l13.58 13.49a2.27 2.27 0 0 0 3.21 0l13.5-13.58a11.13 11.13 0 0 0 .35-15.51A10.89 10.89 0 0 0 139 209.2a2.29 2.29 0 0 1-2.67-.03z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M137.84 238.97a2 2 0 0 0 0 1.9 8.78 8.78 0 0 1 .53.88c.35.87-.26 1.82-.88 2.53-.39.45-.83 1.06-.57 1.6a2 2 0 0 0 .46.52 3.35 3.35 0 0 1-1.28 5.58",
    fill: "none",
    stroke: "#f55f44",
    strokeMiterlimit: 10
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M390.19 583h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M400.19 590v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M791.19 508h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M801.19 515v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M181.19 44h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M191.19 51v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M713.19 226h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M723.19 233v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M99.19 343h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M109.19 350v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M92.19 646h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M102.19 653v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M466.29 94.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM768.29 329.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M23.65 144.64h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M28.58 148.1v1.48h-8.39v-1.48z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M86.81 274.42h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M91.75 277.87v1.48h-8.39v-1.48z"
  })), _react.default.createElement("path", {
    d: "M109.85 143.8a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM33.46 333.61a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M35.19 382h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M45.19 389v3h-17v-3z"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M371.19 116h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M381.19 123v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M12.29 203.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM644.29 720.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM98.29 462.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M770.61 744.41h1.48v8.39h-1.48z"
  }), _react.default.createElement("path", {
    d: "M775.54 747.86v1.48h-8.39v-1.48z"
  })), _react.default.createElement("circle", {
    cx: 783.85,
    cy: 637.21,
    r: 2.96,
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M764.19 569h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M774.19 576v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M698.46 559.61a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M700.19 608h3v17h-3z"
  }), _react.default.createElement("path", {
    d: "M710.19 615v3h-17v-3z"
  })), _react.default.createElement("path", {
    d: "M763.29 688.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM422.29 722.61a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z",
    fill: "#4d8af0",
    opacity: 0.5
  }), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    d: "M680.64 234.36a7.43 7.43 0 0 0 3.22-.75 7.2 7.2 0 0 0 1.49.16c3.79 0 7.12-3 9-7.47 1.21 4.35 3.9 7.51 7.43 8.1a7.43 7.43 0 0 0 3.3-.2 7.2 7.2 0 0 0 1.45.41c5.78 1 11.64-5.26 13.11-13.92s-2-16.48-7.81-17.45a7.43 7.43 0 0 0-3.3.2 7.2 7.2 0 0 0-1.45-.41c-4.66-.79-9.38 3.12-11.79 9.2-1.52-6-5.39-10.28-9.92-10.28a7.43 7.43 0 0 0-3.22.75 7.2 7.2 0 0 0-1.49-.16c-5.86 0-10.61 7.12-10.61 15.91s4.73 15.91 10.59 15.91z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.1,
    fill: "url(#prefix__b)"
  }), _react.default.createElement("ellipse", {
    cx: 707.28,
    cy: 246.08,
    rx: 9.09,
    ry: 4.55,
    transform: "rotate(-53.8 562.856 409.162)",
    opacity: 0.1,
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M737.91 218.51a7.43 7.43 0 0 0-3.26-.57 7.2 7.2 0 0 0-1.31-.73c-5.39-2.29-12.55 2.41-16 10.49s-1.85 16.5 3.54 18.79a7.43 7.43 0 0 0 3.26.57 7.2 7.2 0 0 0 1.31.73c5.39 2.29 12.55-2.41 16-10.49s1.85-16.5-3.54-18.79z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.1,
    fill: "url(#prefix__d)"
  }), _react.default.createElement("ellipse", {
    cx: 723.52,
    cy: 259.13,
    rx: 9.09,
    ry: 4.55,
    transform: "rotate(-40.41 561.684 495.846)",
    opacity: 0.1,
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M654.76 234.6a7.2 7.2 0 0 0 1.45-.41 7.43 7.43 0 0 0 3.3.2c5.78-1 9.27-8.79 7.81-17.45S660 202 654.21 203a7.15 7.15 0 0 0-1.32.36h-.16a7.42 7.42 0 0 0-3.27-.2c-5.78 1-9.27 8.79-7.81 17.45s7.35 14.97 13.11 13.99z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.1,
    fill: "url(#prefix__f)"
  }), _react.default.createElement("path", {
    d: "M657.68 243.4c-3-4.05-9-4.66-9-4.66s-1.27 6 1.69 10 7 6.14 9 4.66 1.27-5.94-1.69-10z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.1,
    fill: "url(#prefix__g)"
  }), _react.default.createElement("path", {
    d: "M720.71 267.94a18.05 18.05 0 0 1-6-.81 15.31 15.31 0 0 0 .73-6c-.31-5-5.1-8.79-5.1-8.79a16.64 16.64 0 0 0-3.28 5.18 10.56 10.56 0 0 0-2.22-.2 41 41 0 0 0-4.64.29 13.33 13.33 0 0 0-.32-7.69c-1.29-4.22-5.71-6.71-6.77-7.25a16.7 16.7 0 0 0-1-5.85s-5.89 1.61-8.13 6.1-2.25 9 0 10.16c1.85.93 4.65-.77 6.84-3.91a9.62 9.62 0 0 0 .37 3.41 14.56 14.56 0 0 0 3.27 5.88 57.28 57.28 0 0 1-12.46 1.19c1.54-1.65 1.31-5.67-.68-9.65-2.25-4.49-8.13-6.1-8.13-6.1s-2.25 5.67 0 10.16a15.42 15.42 0 0 0 3.53 4.72 21.59 21.59 0 0 1-3.73-1.45 20.41 20.41 0 0 0-4.19-1.52 17.23 17.23 0 0 0 1.34-3.22c1.47-4.8-1.69-10-1.69-10s-5.54 2.56-7 7.37a16.12 16.12 0 0 0-.74 5 53.54 53.54 0 0 0-14.23 2.35C683.59 326.28 662.37 374 662.37 374h31.82c-21.19-58.33 42.43-106.06 26.52-106.06z",
    transform: "translate(-192.07 -48.47)",
    opacity: 0.1,
    fill: "url(#prefix__h)"
  })), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    d: "M491.12 279.9v-98.67"
  }), _react.default.createElement("path", {
    d: "M493.43 155.26a7.27 7.27 0 0 0-3.15.73 7.05 7.05 0 0 0-1.46-.16c-5.74 0-10.39 7-10.39 15.58s4.65 15.58 10.39 15.58a7.27 7.27 0 0 0 3.15-.73 7.05 7.05 0 0 0 1.46.16c5.74 0 10.39-7 10.39-15.58s-4.65-15.58-10.39-15.58z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 688.1,
    cy: 245.86,
    rx: 8.9,
    ry: 4.45,
    transform: "rotate(-63.43 552.905 377.012)",
    fill: "#3ad29f"
  }), _react.default.createElement("ellipse", {
    cx: 677.56,
    cy: 252.78,
    rx: 4.45,
    ry: 8.9,
    transform: "rotate(-26.57 478.75 635.25)",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    d: "M496.34 279.03l16.41-97.29"
  }), _react.default.createElement("path", {
    d: "M519.34 156.53a7.27 7.27 0 0 0-3.23.2 7.05 7.05 0 0 0-1.42-.4c-5.66-1-11.4 5.15-12.83 13.63s2 16.14 7.65 17.09a7.27 7.27 0 0 0 3.23-.2 7.05 7.05 0 0 0 1.42.4c5.66 1 11.4-5.15 12.83-13.63s-1.99-16.15-7.65-17.09z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 706.97,
    cy: 246.95,
    rx: 8.9,
    ry: 4.45,
    transform: "rotate(-53.86 563.222 411.77)",
    fill: "#3ad29f"
  }), _react.default.createElement("ellipse", {
    cx: 695.43,
    cy: 252.03,
    rx: 4.45,
    ry: 8.9,
    transform: "rotate(-16.99 437.147 870.756)",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    d: "M494.02 285.29l38.59-90.81"
  }), _react.default.createElement("path", {
    d: "M544.93 171.53a7.27 7.27 0 0 0-3.19-.56 7.05 7.05 0 0 0-1.28-.72c-5.33-2.29-12.33 2.28-15.7 10.28s-1.81 16.16 3.47 18.4a7.27 7.27 0 0 0 3.19.56 7.05 7.05 0 0 0 1.28.72c5.28 2.24 12.29-2.36 15.65-10.28s1.82-16.21-3.42-18.4z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 722.87,
    cy: 259.73,
    rx: 8.9,
    ry: 4.45,
    transform: "rotate(-40.41 561.034 496.44)",
    fill: "#3ad29f"
  }), _react.default.createElement("ellipse", {
    cx: 710.47,
    cy: 261.99,
    rx: 4.45,
    ry: 8.9,
    transform: "rotate(-3.54 -169.303 3345.628)",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    d: "M481.3 279.03l-16.42-97.29"
  }), _react.default.createElement("path", {
    d: "M458.28 156.53a7.27 7.27 0 0 1 3.23.2 7.05 7.05 0 0 1 1.42-.4c5.66-1 11.4 5.15 12.83 13.63s-2 16.14-7.65 17.09a7.27 7.27 0 0 1-3.23-.2 7.05 7.05 0 0 1-1.42.4c-5.66 1-11.4-5.15-12.83-13.63s2-16.15 7.65-17.09z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 654.8,
    cy: 246.95,
    rx: 4.45,
    ry: 8.9,
    transform: "rotate(-36.14 484.498 517.054)",
    fill: "#3ad29f"
  }), _react.default.createElement("ellipse", {
    cx: 666.34,
    cy: 252.03,
    rx: 8.9,
    ry: 4.45,
    transform: "matrix(.29 -.96 .96 .29 38.54 767.18)",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M455.35 209.53s15.58-5.19 26 0 20.77 0 31.16 0 0 10.39 15.58 10.39-46.74 46.74-26 103.86h-31.16s20.77-46.77-15.58-114.25z",
    fill: "#f5f5f5"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M460.11 157.06l1.79 5.36.99-6.06-2.78.7zM488.72 156.86l1.79 5.36.99-6.06-2.78.7zM515.03 157.56l.94 5.58 1.91-5.84-2.85.26zM540.43 171.1l-.49 5.63 3.32-5.16-2.83-.47zM473.52 208.02s9.84 42.92 9.84 59-2.68 56.33-2.68 56.33h3.58s-3.59-108.18-5.33-114.44zM495.87 211.59s-8.94 39.34-8.94 55.44 2.68 56.33 2.68 56.33h-3.58s2.68-104.61 4.47-110.87zM503.93 210.7s-9.84 40.23-9.84 56.33 2.68 56.33 2.68 56.33h-3.58s3.58-105.5 5.36-111.76z"
  }), _react.default.createElement("path", {
    d: "M697.7 312.61c-4.56-13.68-31.67 4.81-31.67 4.81l-2.23 3-48.2 65.16-118.07-66v-29.53a41 41 0 0 0 35.89-47.73c5.94-2.29 10.78-7.23 15.24-12 4.11-4.37 8.51-9.67 8.09-15.49a10.77 10.77 0 0 0-.16-2.78c-.94-4.91-5.38-8.49-10.08-10.2s-9.78-2-14.69-3c-11.7-2.29-22.27-8.4-33.68-11.86a76.62 76.62 0 0 0-15.91-3c-3.87-.32-7.9-.32-11.44 1.27-3.88 1.75-6.69 5.17-9.81 8.08a44.64 44.64 0 0 1-12.86 8.37c-7.07 3-15 4.23-21.37 8.47a12.61 12.61 0 0 0-4.31 4.32 11.74 11.74 0 0 0-1.15 6.14 30.79 30.79 0 0 0 .42 5.56c1.12 7.84 2.41 15.87 6.38 22.72 3.24 5.6 8.09 10.06 12.85 14.44l10.71 9.82c2.17 2 4.57 4.46 7.37 5.45-.18-1.3.56-2.67 1.66-4l-3.47 24.26a70.26 70.26 0 0 0-19.94-3.17c-9.12-.11-18.35 1.54-22.34 7.75a8.62 8.62 0 0 0-.61 1.18c-12.57 14.92-41.38 63.24-24.44 180.6a5006.96 5006.96 0 0 0-2.32 23.45l.1 1.44-.1 1.09.2.16L397.19 641 379 768.68h4v14.19h-4.56v22.8s63.34-4.05 73-18.24c8-11.77-31.82-7.15-45.61-5.23v-8.7h.25v-4.81h4.81L429.12 682c18.75-32.43 9.12-113.51 9.12-113.51L461 582.2l18.24 95.27-13.63 141.38h4.05v9.88h-5.32v22.8s63.34-4.05 73-18.24c8-11.77-31.8-7.15-45.59-5.23l-1.53-9.21H493l18.24-127.7c9-34.6-3.27-136.12-4.89-149.12l22.63-149.35-.32-.43.32-2.11 91.21 31.93s9.12 9.12 18.5-18c8.76-25.34 32.79-59.31 35.9-63.64l.33-.46s27.34-13.68 22.78-27.36z",
    transform: "translate(-192.07 -48.47)",
    fill: "url(#prefix__i)",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M195.01 709.2v22.2h22.2v-31.09l-22.2 8.89zM279.39 753.61v26.64l22.21-4.44-4.44-26.64-17.77 4.44z"
  }), _react.default.createElement("path", {
    d: "M230.78 256.43s-53 39.72-26.89 195.17z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M230.78 256.43s-53 39.72-26.89 195.17z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M299.62 767.18l-2.22-13.33-17.76 4.44v8.89h19.98zM195.25 718.32h22.21V705l-22.21 8.88v4.44z"
  }), _react.default.createElement("path", {
    fill: "#fda57d",
    d: "M271 230.03l-4.44 31.09 39.97 22.21v-44.42L271 230.03z"
  }), _react.default.createElement("path", {
    d: "M191.06 713.63l17.77-124.36-9.38-128.74 115.48 31s14.31 110.54 4.93 146.56l-17.77 124.44h-26.65l13.32-137.68-17.77-92.77-22.21-13.32s9.38 79-8.88 110.54l-17.75 84.33z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M501.45 269.53c-4.44-13.32-30.84 4.69-30.84 4.69l-2.17 2.94 10.49 19.45.33-.45s26.67-13.33 22.19-26.63z",
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M270.51 258.65s-35.53-9.38-44.41 4.44-26.65 199.86-26.65 199.86 52.8 44.41 115.47 31.09l22.21-146.56z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M421.51 340.53l-140.37-78.4a70.08 70.08 0 0 0-33.29-9c-8.88-.11-17.87 1.5-21.75 7.54-8.89 13.77-26.65 199.86-26.65 199.86s52.8 44.36 115.48 31l22.2-146.52 88.8 31.09s8.88 8.88 18-17.52c8.53-24.68 31.93-57.75 35-62l-10.5-19.44z",
    fill: "#3ad29f"
  }), _react.default.createElement("path", {
    d: "M270.4 236.93a39.89 39.89 0 0 0 31.44 15.3 40.37 40.37 0 0 0 4.44-.25v-8.63l-35.53-8.88z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 302.09,
    cy: 207.83,
    r: 39.97,
    fill: "#fda57d"
  }), _react.default.createElement("path", {
    d: "M190.56 727.45v22.21s61.68-3.95 71.06-17.77-48.85-4.44-48.85-4.44zM274.21 772.11v22.21s61.72-3.95 71.06-17.79-48.85-4.44-48.85-4.44z",
    fill: "#333"
  }), _react.default.createElement("path", {
    d: "M276.74 226.14l15.62-22.35c2.31-3.31 4.68-6.68 7.92-9.1s7.54-3.77 11.38-2.53c2.32.75 4.25 2.35 6.22 3.78 5.83 4.24 13 7.39 20.13 6.11 7.43-1.34 13.14-7.14 18.31-12.64 4.29-4.56 8.9-10.16 7.72-16.31-.92-4.78-5.24-8.26-9.82-9.93s-9.52-1.94-14.3-2.88c-11.39-2.23-21.69-8.18-32.8-11.55a74.61 74.61 0 0 0-15.5-3c-3.77-.31-7.7-.31-11.14 1.24-3.78 1.7-6.52 5-9.55 7.87a43.47 43.47 0 0 1-12.52 8.15c-6.88 2.94-14.57 4.12-20.81 8.25a12.28 12.28 0 0 0-4.19 4.21c-1.6 3-1.19 6.58-.71 9.92 1.09 7.63 2.34 15.45 6.21 22.12 3.16 5.45 7.87 9.8 12.52 14.06l10.43 9.57c2.11 1.94 4.45 4.34 7.18 5.31-.49-3.43 5.73-7.48 7.7-10.3z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M276.74 224.66l15.62-22.35c2.31-3.31 4.68-6.68 7.92-9.1s7.54-3.77 11.38-2.53c2.32.75 4.25 2.35 6.22 3.78 5.83 4.24 13 7.39 20.13 6.11 7.43-1.34 13.14-7.14 18.31-12.64 4.29-4.56 8.9-10.16 7.72-16.31-.92-4.78-5.24-8.26-9.82-9.93s-9.52-1.94-14.3-2.88c-11.39-2.23-21.69-8.18-32.8-11.55a74.61 74.61 0 0 0-15.5-3c-3.77-.31-7.7-.31-11.14 1.24-3.78 1.7-6.52 5-9.55 7.87a43.47 43.47 0 0 1-12.52 8.16c-6.88 2.94-14.57 4.12-20.81 8.25a12.28 12.28 0 0 0-4.19 4.21c-1.6 3-1.19 6.58-.71 9.92 1.09 7.63 2.34 15.45 6.21 22.12 3.16 5.45 7.87 9.8 12.52 14.06l10.43 9.57c2.11 1.94 4.45 4.34 7.18 5.31-.49-3.44 5.73-7.49 7.7-10.31z",
    fill: "#333"
  }));
};

UndrawLoveIsInTheAir.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawLoveIsInTheAir;
exports.default = _default;