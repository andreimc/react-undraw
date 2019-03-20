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

var UndrawEvents = function UndrawEvents(_props) {
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
    viewBox: "0 0 965.64 800.81",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 478.38,
    y1: 695.72,
    x2: 478.38,
    y2: 33.2,
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
    x1: 1834.21,
    y1: 806.87,
    x2: 1834.21,
    y2: 194.98,
    gradientTransform: "matrix(-1 0 0 1 2766 0)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M901.88 442.5c-37.09 60-30.14 141.74-13.85 206.19 5.45 21.58 11.73 44.36 7.07 68.51-5.7 29.53-26.48 52.72-47.51 66-38.34 24.15-82.12 23.48-114-1.77-27.53-21.81-45.66-59.85-73.77-80.49-47-34.55-111.54-13.61-167.58 18.68-39.63 22.79-83.25 51.79-119.88 35.37-25.77-11.53-41.84-44.06-49.34-79.46-3.62-17.09-5.81-35.76-14.11-48.78-4.94-7.74-11.73-12.92-18.77-17.17-64.25-38.74-151.18-6.35-213.14-50.22-41.85-29.62-65.64-90.8-73.46-156.22S2.15 267.72 10.2 198.8c5.73-49 13.48-101.42 39.2-141.27 27.21-42.15 70.1-61 107.38-57s69.65 27.62 97.55 56.49c34.87 36.08 66.32 82.16 111.45 93.8 30.74 7.93 64.31-1.25 97-6.44 54.58-8.68 108.4-6.19 161.84-2.93 51.16 3.12 102.63 7 150.3 25 33.73 12.75 59.62 39.29 91.1 56.55 20.52 11.25 43.67 12.68 62.79 27.68 23.55 18.48 43.93 52.59 34.5 95.71-8.99 41.02-41.75 64.27-61.43 96.11z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M664.49 306.88s101-84.63 123.46-127.3S839 100.14 839 100.14",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M825.72 195.53l-43.69-9.85s10.31 46.08 43.69 9.85z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M758.96 148.49l25.14 37.65s-49.15 3.55-25.14-37.65zM842.91 160.14l-39.93-7s25.08 38.15 39.93 7zM783.82 126.49l19.67 25.76s-34.82 3.3-19.67-25.76zM823.63 121.36s34 1.62 38 4.87-5.07 22.3-18 19.19-20-24.06-20-24.06zM810.04 90.97s13.89 25.31 13.37 30.13-21.17 10.23-25.34-8 11.97-22.13 11.97-22.13z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 963.75,
    cy: 154.12,
    r: 9.49,
    transform: "matrix(.3 -.95 .95 .3 408.68 976.78)",
    fill: "#ffd037"
  }), _react.default.createElement("circle", {
    cx: 948.9,
    cy: 144.43,
    r: 9.49,
    transform: "matrix(.3 -.95 .95 .3 407.54 955.85)",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M349.46 638.63s16.21-48.22-86.55-106.35c0 0-104.34-30.43-93.67-134.93 0 0-120.28 88.12-38.89 200.37s151.64 87.75 151.64 87.75z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M318.13 660.41s-50.14-54.19-98.2-75.14a95.71 95.71 0 0 1-26.11-17.39c-30.64-28-44-70.25-36.1-111l11.55-59.53",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M193.07 33.2h570.61v662.53H193.07z"
  }), _react.default.createElement("path", {
    fill: "#f7f7fd",
    d: "M199.72 40.91h557.32V688H199.72z"
  }), _react.default.createElement("path", {
    fill: "#e2e2ec",
    d: "M233.38 113.85h140.89v11.22H233.38zM233.38 141.28h240.63v11.22H233.38z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 103.13h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 103.63v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 103.13h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 103.63v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 190.41h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 190.41h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M428.38 190.41h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M527.87 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.39 190.41h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M426.88 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M226.4 190.41h99.99v86.28H226.4z"
  }), _react.default.createElement("path", {
    d: "M325.89 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 277.68h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 277.68h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M428.38 277.68h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M527.87 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.39 277.68h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M426.88 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M226.4 277.68h99.99v86.28H226.4z"
  }), _react.default.createElement("path", {
    d: "M325.89 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 364.96h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 364.96h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M428.38 364.96h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M527.87 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.39 364.96h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M426.88 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M226.4 364.96h99.99v86.28H226.4z"
  }), _react.default.createElement("path", {
    d: "M325.89 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 452.23h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 452.23h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M428.38 452.23h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M527.87 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.39 452.23h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M426.88 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M226.4 452.23h99.99v86.28H226.4z"
  }), _react.default.createElement("path", {
    d: "M325.89 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M630.36 539.51h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M729.82 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M529.37 539.51h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M628.82 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M428.38 539.51h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M527.87 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M327.39 539.51h99.99v86.28h-99.99z"
  }), _react.default.createElement("path", {
    d: "M426.88 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M226.4 539.51h99.99v86.28H226.4z"
  }), _react.default.createElement("path", {
    d: "M325.89 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
    fill: "#e2e2ec"
  }), _react.default.createElement("path", {
    d: "M436.42 704.89c2.86-2.17 5.55-4.73 6.38-7.85a6.64 6.64 0 0 0-4.46-8c-4.09-1.28-8.46 1-11.78 3.37s-7.11 5-11.45 4.51c4.49-3.25 6.63-8.52 5.39-13.31a5.16 5.16 0 0 0-1.5-2.7c-2.27-2-6.39-1.13-9.11.43-8.65 5-11.06 14.55-11.11 23.18-.87-3.11-.14-6.35-.16-9.55s-1.09-6.73-4.39-8.45a15.71 15.71 0 0 0-6.7-1.29c-3.89-.12-8.22.2-10.87 2.52-3.3 2.88-2.44 7.72.43 10.89s7.24 5.16 11.25 7.35c3.06 1.67 6.16 3.62 8 6.26a5.68 5.68 0 0 1 .6 1.12h24.37a70.07 70.07 0 0 0 15.11-8.48z",
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 239.59,
    cy: 203.53,
    r: 5.7,
    fill: "#fc6681"
  }), _react.default.createElement("circle", {
    cx: 253.83,
    cy: 203.53,
    r: 5.7,
    fill: "#ffd037"
  }), _react.default.createElement("circle", {
    cx: 440.87,
    cy: 288.03,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 455.12,
    cy: 288.03,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 745.64,
    cy: 451.33,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 748.49,
    cy: 444.69,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 751.34,
    cy: 438.99,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 645,
    cy: 203.53,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 659.24,
    cy: 203.53,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 673.49,
    cy: 203.53,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 687.73,
    cy: 203.53,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 645,
    cy: 380.12,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 659.24,
    cy: 380.12,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 673.49,
    cy: 380.12,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 687.73,
    cy: 380.12,
    r: 5.7,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 340.23,
    cy: 288.03,
    r: 5.7,
    fill: "#ffd037"
  }), _react.default.createElement("circle", {
    cx: 239.59,
    cy: 374.43,
    r: 5.7,
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M857.9 515.22c6.25 3.69 16 6.09 28.35-1.84l-.12 17.56c.88 12 15.77 55.91 15.77 55.91l10.5 36.1a282.47 282.47 0 0 1 11.54 78.53c0 8.81.82 17.89 3.35 24.72 5.59 15.11-2.2 34.58-5.58 41.83a175.68 175.68 0 0 1-17.33 4.88 11.84 11.84 0 0 0-1.55.47l-.07-.1S887 779.53 880 778.67c-5.22-.64-8.49 5.87-4.4 10.66-3.86 1-7.82 1.71-10.49 1.38-7-.86-10.51 11.18 2.63 14.62s87.59 0 87.59 0a10.56 10.56 0 0 0 5.6-11.66c5.72-.22 9.29-.39 9.29-.39s13.14-6 0-22.37l-.7.53-2.81-8.27V752s16.64-80 11.39-89.46-7.88-57.63-7.88-57.63l1.78-52.47c4.75-9.8 7.18-25.16 8.41-37.17a78.87 78.87 0 0 0 3.36-17.63c.21-2.82.38-5.78.49-8.85A59.33 59.33 0 0 0 981 469c5-7.2 13.13-18.33 19.84-24.91 10.51-10.32 7.88-22.37 7.88-22.37l-4.38-29.25-10.51-49.89c1.32-13.84-1.57-21.81-4.76-26.31.76-4.47 1.47-8.94 2-13.43a171.87 171.87 0 0 0-3.07-58.48c-1.52-6.69-3.59-13.55-8.28-18.62-5.31-5.74-13.93-9.24-15.91-16.76-.49-1.87-.51-3.86-1.22-5.66-1.92-4.92-8-6.71-13.32-7.35-9.48-1.15-23.19-2-32.3 1.7-6.36 2.6-15.12 9.76-18.6 17.44-2 3.53-2.93 7.24-2.08 10.73a14.71 14.71 0 0 0 1.51 3.67 33 33 0 0 0-2.04 11.49 33.56 33.56 0 0 0 21.42 31.13c.21.66.4 1.31.56 1.95a33.42 33.42 0 0 1 .86 4.69c-.17 3-.36 6.09-.5 9.14q-.15.63-.32 1.24a225.38 225.38 0 0 0-22 11.22c5.26 7.74-.88 40.43-.88 40.43-13.14 7.74-26.28 27.53-12.26 48.17s6.13 43 6.13 43l-2.19 33.63v.06l-.44 6.73h.17l-.17 2.55.38.07v2.74c-6.15 2.26-15.14 6.82-20.5 15.25a53.81 53.81 0 0 1-9.17 11.25 6.76 6.76 0 0 0 1.05 10.97zm105.76-89.36a32 32 0 0 1 3.11-16.92q3.09.06 6.19.07c.21 1.45.46 2.83.76 4.09 1.78 7.58-5.33 11.21-10.07 12.75z",
    transform: "translate(-117.18 -49.59)",
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M848.21 709.66l3.37 10.11-11 11-36.24 8.43-26.13-2.53 1.69-9.27a11.18 11.18 0 0 1 8.3-8.17c10.74-2.52 31.22-8.28 35.52-16.27z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M848.21 709.66l3.37 10.11-11 11-36.24 8.43-26.13-2.53 1.69-9.27a11.18 11.18 0 0 1 8.3-8.17c10.74-2.52 31.22-8.28 35.52-16.27z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M786.68 734.1l5.06-6.74-5.06-7.81s-15.17 6.12-21.91 5.28-10.11 11 2.53 14.33 84.28 0 84.28 0 12.64-5.9 0-21.91l-11 8.43s-18.54 10.11-27.81 8.43z",
    fill: "#2e3037"
  }), _react.default.createElement("path", {
    d: "M763.92 748.41l26.13 2.53 36.24-8.43 11-11-.89-2.68-1.26-3.76-1.26-3.66-24.44-6.74a15.14 15.14 0 0 1-5 5c-7.94 5.43-22.2 9.35-30.57 11.31a8.77 8.77 0 0 0-1 .31 11.14 11.14 0 0 0-7.26 7.86z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M763.92 748.41l26.13 2.53 36.24-8.43 11-11-.89-2.68-10.06 7.74s-18.54 10.11-27.81 8.43h-26.18l5.06-6.74-4.54-7a11.14 11.14 0 0 0-7.26 7.86z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M772.35 745.9l5.06-6.74-5.06-7.81s-15.17 6.12-21.91 5.28-10.11 11 2.53 14.33 84.28 0 84.28 0 12.64-5.9 0-21.91l-11 8.43s-18.54 10.11-27.81 8.43z",
    fill: "#2e3037"
  }), _react.default.createElement("path", {
    d: "M793.42 257.07s40.46 4.21 34.56-12.64a30.34 30.34 0 0 1-1.25-14.88 41.25 41.25 0 0 1 7.15-17.14l-37.93 5.9a47.5 47.5 0 0 1 5.14 12.18c4.52 17.87-7.67 26.58-7.67 26.58z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M862.53 449.23s-.84 36.24-9.27 53.94l-1.69 51.41s2.53 47.2 7.59 56.47-11 87.65-11 87.65v13.49s-27 10.11-34.56-1.69l7.59-100.3-3.37-139.06z",
    fill: "#474463"
  }), _react.default.createElement("path", {
    d: "M862.53 449.23s-.84 36.24-9.27 53.94l-1.69 51.41s2.53 47.2 7.59 56.47-11 87.65-11 87.65v13.49s-27 10.11-34.56-1.69l7.59-100.3-3.37-139.06z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M879.39 332.92l5.06 13.49 4.21 28.66a25.35 25.35 0 0 1-7.59 21.91c-10.11 10.11-23.6 31.18-23.6 31.18l-16-48s16-2.53 13.49-13.49-1.7-31.26-1.7-31.26z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M879.39 332.92l5.06 13.49 4.21 28.66a25.35 25.35 0 0 1-7.59 21.91c-10.11 10.11-23.6 31.18-23.6 31.18l-16-48s16-2.53 13.49-13.49-1.7-31.26-1.7-31.26z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M804.48 719.68c10.81 17 27.64 7.37 30.62 5.45l-1.22-3.72-24.44-6.74a15.14 15.14 0 0 1-4.96 5.01z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M770.67 482.1c.84 11.8 15.17 54.78 15.17 54.78l10.11 35.37a281.44 281.44 0 0 1 11.11 76.94c0 8.63.79 17.53 3.23 24.22 6.74 18.54-6.74 43.83-6.74 43.83 11.8 21.07 32 6.74 32 6.74V710.5s16-73.33 11.8-87.65-5.9-53.1-5.9-53.1v-70a79.38 79.38 0 0 0 23.13-50.32c.2-2.76.36-5.66.47-8.67.68-19-12.32-41.31-17.4-49.25-1.22-1.92-2-3-2-3l-74.42 29.52-.17.07v9.25z",
    fill: "#474463"
  }), _react.default.createElement("path", {
    d: "M795.95 218.3a47.5 47.5 0 0 1 5.14 12.18 33 33 0 0 0 25.64-.94 41.25 41.25 0 0 1 7.15-17.13z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 812.81,
    cy: 198.06,
    r: 32.87,
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M770.67 427.32l.36.07c35.34 7.27 79.71-29.57 79.71-29.57a43.68 43.68 0 0 1-3.07-6.27c-1.22-1.92-2-3-2-3l-74.42 29.52-.19 2.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M779.94 256.22s47.2-28.66 62.37-16.86l21.07 27s13.49 4.21 11 31.18l10.07 48.87-30.34 7.59s-17.7 16.86-3.37 41.3c0 0-44.67 37.08-80.07 29.5l2.53-39.61s7.59-21.91-5.9-42.14-.84-39.61 11.8-47.2c0-.01 5.89-32.04.84-39.63z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M777.41 428.16s-17.7 3.37-26.13 16.86a52.53 52.53 0 0 1-8.82 11 6.69 6.69 0 0 0 1 10.66c6.69 4 17.6 6.49 31.38-4.83 23.64-19.36 2.57-33.69 2.57-33.69z",
    fill: "#db8b8b"
  }), _react.default.createElement("path", {
    d: "M803.54 272.24s16.86-1.69 21.07 42.14 11 53.94 11 53.94 4.21 22.76-5.9 36.24-29.5 42.14-29.5 42.14-21.07 5.9-25.28-15.17l26.13-48.88s4.21-16.86-5.9-28.66-17.75-90.18 8.38-81.75z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M801.82 269.71s16.86-1.69 21.07 42.14 11 53.94 11 53.94 4.21 22.76-5.9 36.24-29.5 42.14-29.5 42.14-21.07 5.9-25.28-15.17l26.13-48.88s4.21-16.86-5.9-28.66-17.72-90.18 8.38-81.75z",
    fill: "#fc6681"
  }), _react.default.createElement("path", {
    d: "M787.94 301.31s-1.68 26.1 5.88 40.46 7.59 32.87 0 43M783.73 269.29s6.74-6.74 26.13-7.59 27.81-6.74 27.81-6.74",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M830.61 155.59c5.12.63 11 2.39 12.82 7.2.68 1.77.7 3.72 1.17 5.55 1.91 7.36 10.2 10.79 15.31 16.42 4.51 5 6.5 11.69 8 18.24a171.4 171.4 0 0 1 3 57.26c-1.64 14-5 27.74-5.94 41.78s.78 28.81 8.45 40.61c3.3 5.07 7.66 9.53 10 15.11-4.83 3.92-11.5 4.48-17.73 4.69q-10.87.37-21.75 0c-3.8-.13-7.77-.38-11.05-2.3a17.06 17.06 0 0 1-5.8-6.23c-4.15-7-5.19-15.5-5-23.66s1.47-16.28 1.62-24.45c.08-4.45-.27-9.18-2.83-12.82-1.85-2.63-4.66-4.4-7.06-6.53-9-8-12.12-20.82-12.42-32.87s1.69-24.12.67-36.13c-.4-4.7-2.16-10.35-6.78-11.26-1.46-.29-3 0-4.4-.56-3.71-1.43-3.35-6.66-4.41-10.49-1.19-4.3-4.86-7.62-5.89-12-2.43-10.2 10.55-22.37 19.06-25.92 8.65-3.62 21.84-2.76 30.96-1.64z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M831.45 153.91c5.12.63 11 2.39 12.82 7.2.68 1.77.7 3.72 1.17 5.55 1.91 7.36 10.2 10.79 15.31 16.42 4.51 5 6.5 11.69 8 18.24a171.4 171.4 0 0 1 3 57.26c-1.64 14-5 27.74-5.94 41.78s.78 28.81 8.45 40.61c3.3 5.07 7.66 9.53 10 15.11-4.83 3.92-11.5 4.48-17.73 4.69q-10.87.37-21.75 0c-3.8-.13-7.77-.38-11.05-2.3a17.06 17.06 0 0 1-5.8-6.23c-4.15-7-5.19-15.5-5-23.66s1.47-16.28 1.62-24.45c.08-4.45-.27-9.18-2.83-12.82-1.85-2.63-4.66-4.4-7.06-6.53-9-8-12.12-20.82-12.42-32.87s1.69-24.12.67-36.13c-.4-4.7-2.16-10.35-6.78-11.26-1.46-.29-3 0-4.4-.56-3.71-1.43-3.35-6.66-4.41-10.49-1.19-4.3-4.86-7.62-5.89-12-2.43-10.2 10.55-22.37 19.06-25.92 8.65-3.63 21.84-2.77 30.96-1.64z",
    fill: "#472727"
  }));
};

UndrawEvents.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawEvents;
exports.default = _default;