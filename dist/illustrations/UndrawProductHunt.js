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

var UndrawProductHunt = function UndrawProductHunt(_props) {
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
    viewBox: "0 0 830.52 709.6",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 530.5,
    y1: 797,
    x2: 530.5,
    y2: 106,
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
    x1: 775.38,
    y1: 780.18,
    x2: 775.38,
    y2: 690.87,
    gradientTransform: "rotate(-.02 -248126.107 530973.99)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 775.39,
    y1: 790.34,
    x2: 775.39,
    y2: 758.68,
    gradientTransform: "rotate(-.02 2348.817 1776.58)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 670.31,
    y1: 643.75,
    x2: 670.31,
    y2: 543.2,
    gradientTransform: "rotate(-.02 2348.817 1776.58)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 878.8,
    y1: 643.75,
    x2: 878.8,
    y2: 543.2,
    gradientTransform: "rotate(-.02 2348.817 1776.58)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 774.55,
    y1: 727.25,
    x2: 774.55,
    y2: 515.55,
    gradientTransform: "rotate(-.02 2348.817 1776.58)",
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M576.85 414.74q-.06-2.17-.08-4.29a127.77 127.77 0 0 1 2.59-27.51c.29-1.3.61-2.57 1-3.81 5.33-8.39 11.66-23.52 12.22-38.15L666 228.63l-37.86-90.3-.53-.76c-1.88-8.58-9.2-34.54-28.36-31.29-20.36 3.45-2.19 34.48 2.12 41.37.54.87.87 1.35.87 1.35l.24-.08v.08h-.26L623 225.14c-1.91 4.9-21.77 54.83-43.18 71.56-.21-26.14 2.62-59.48 3.77-71.88a37.82 37.82 0 0 0-1-13.06c-5.93-22.68-27-39.45-52.13-39.45a54.87 54.87 0 0 0-19.8 3.69 51.85 51.85 0 0 0-32.87 53c1.3 14.56 3.66 43.84 3.83 67.1-22.69-17.23-43.78-72.3-43.78-72.3l20.92-74.8s25.9-38.84 3-42.72c-19.3-3.27-26.59 23.09-28.4 31.48l-.49 1.54L395 227.66l74.93 114.59c.19 11.75 4 24.68 11.75 36.89a10.56 10.56 0 0 1 1.47 3.81 12.59 12.59 0 0 1 .18 1.38c-.39 7-5.22 15.68-10.64 25.21-3.82 6.71-7.91 13.83-10.94 21.05-7 16.63-10.29 26-10.13 40-.2 16.93 5 40.28 15.11 93a116.26 116.26 0 0 1 16.38-5.4c2.73 24.17 5.76 57.1 3 64.43-3.66 9.85-6 57.36-4.2 82.71-12 15.51-17.23 15-17.23 15-13 3.89-12.32 11.7-9.55 16.88a16.16 16.16 0 0 0 3.88 5.56 6 6 0 0 1 1 1.1c.91 3.2-1.49 8.22-5.41 20-1.9 5.72-.67 11.07 1.61 15.51 3.59 8.07 11 13.53 11 13.53 8.13 2.43 10.79-.12 10.76-4.44 2.65 5.07 9.18 9.24 23.92 8.4 0 0 10.09.66 5-11.22s-2.52-60.06-2.52-60.06.48-6 1.28-15.09L575 631.9l9-73.7c5.76 8.14 9.68 10.52 23.15 11.25 0 0-.22-.69-.62-2h.62s-28.5-89.27-30.3-152.71zm-52 140.95a61.44 61.44 0 0 1 12.77 3.72l.9 5.17-3.78 64.68A100.71 100.71 0 0 0 512.37 650c1.54-10.46 3.16-18.45 4.68-20.75 3.75-5.66 6.4-46.51 7.76-73.56zM478 773.13a24 24 0 0 0-1.56 8.29c-.29-.78-.62-1.57-1-2.35-2.33-5.28 4.43-24.08 10-37.75a116.71 116.71 0 0 1-1.81 14.68z",
    transform: "translate(-184.74 -87.4)",
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), _react.default.createElement("path", {
    d: "M442.26 56.91s-5.74-37.29-27.73-33.46 2.87 42.07 2.87 42.07zM254.84 56.91s5.74-37.29 27.73-33.46-2.87 42.07-2.87 42.07z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M335.15 395.36h47.8v37.29h-47.8z"
  }), _react.default.createElement("path", {
    d: "M399.48 140.16a38.18 38.18 0 0 0-.92-12.86 51.67 51.67 0 0 0-69.06-35.21c-20.9 8.3-33.49 29.77-31.54 52.17 2.21 25.34 7.57 95.95-1 99.08 45.89-16.25 68.84-17.21 103.25 0-8.3-12.37-2.49-83.74-.73-103.18z",
    fill: "#f55f44"
  }), _react.default.createElement("path", {
    d: "M391.93 158.95a28 28 0 0 0-.79-10.16c-4.88-17.64-22.08-30.69-42.61-30.69a46.87 46.87 0 0 0-16.22 2.86c-17.8 6.56-28.53 23.52-26.87 41.22 1.88 20 6.45 75.81-.89 78.29 39.09-12.84 58.64-13.6 88 0-7.06-9.77-2.11-66.2-.62-81.52z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M299.93 442.2s10.28 78 6 89.67-6.65 77.33-2.42 93.57 0 37.69 0 37.69l-5.44 16.89s-10.28 25.34 23 23.39c0 0 9.68.65 4.84-11s-2.42-59.13-2.42-59.13 6.65-86.42 12.1-94.87 8.47-96.17 8.47-96.17z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M287.26 698.23s-16.33-12.35-11.49-27.29 7.26-18.84 3.63-22.09-10.89-15.6 6-20.79c0 0 6 .65 20-19.49s12.7-45.49 47.19-70.18l3.63-63.68-7.89-46.11 55.05 4.55-12.7 106.57-79.86 92.88s-19.36 43.54-15.73 52 4.84 17.52-7.83 13.63z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M287.83 699.53s-16.33-12.35-11.49-27.29 7.26-18.84 3.63-22.09-10.89-15.6 6-20.79c0 0 6 .65 20-19.49s12.7-45.49 47.19-70.18l3.63-63.68-7.86-46.14 55.05 4.55-12.72 106.55-79.84 92.93s-19.36 43.54-15.73 52 4.85 17.52-7.86 13.63z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M422.15 479.49c-17.21-1-18.17-4.78-28.68-21s-29.64-1.91-29.64-1.91L357.14 404l1 66.92c-30.59-15.3-70.75 2.87-70.75 2.87-17.25-91.82-19.53-93.19-4.83-129.1a199.48 199.48 0 0 1 10.5-20.73c6.06-10.94 11.37-20.78 10-28.1a10.56 10.56 0 0 0-1.41-3.75c-23.53-38.1-9.48-83.36 34.71-76.19 2.25.36 3.53.66 3.53.66h17.21c69.79-3.82 51.63 55.45 39.2 75.53a76.18 76.18 0 0 0-.92 3.75c-2.08 9.48-2.75 20.85-2.41 33.22 1.77 62.45 29.18 150.41 29.18 150.41z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M422.15 477.6c-17.21-1-18.17-4.78-28.68-21s-28.68-2-28.68-2l-7.65-52.58v66.92c-30.59-15.3-69.79 2.87-69.79 2.87-17.21-91.78-19.48-93.14-4.78-129.07a199.48 199.48 0 0 1 10.5-20.73c6.06-10.94 11.37-20.78 10-28.1a10.56 10.56 0 0 0-1.41-3.75c-23.53-38.1-9.48-83.36 34.71-76.19 2.25.36 3.53.66 3.53.66h17.21c69.79-3.82 51.63 55.45 39.2 75.53a76.18 76.18 0 0 0-.92 3.75c-2.08 9.48-2.75 20.85-2.41 33.22 1.76 62.47 29.17 150.47 29.17 150.47z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M335.15 180.24h26.77v41.64a9 9 0 0 1-9 9h-8.72a9 9 0 0 1-9-9v-41.64h-.05z",
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M406.59 256.84l72-112.93L442.26 55l-24.89 9.6 20.08 75.53s-28.68 76.87-54.5 76.2z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M335.15 197.28a44.09 44.09 0 0 0 26.77 0v-15.12h-26.77z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 348.53,
    cy: 153.47,
    r: 43.98,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M314.11 116.19s6.69 42.07 78.4 35.37l-2.87-24.86-22.94-20.1h-26.77z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M314.11 115.23s6.69 42.07 78.4 35.37l-2.87-24.86-22.95-20.08h-26.76z",
    fill: "#f55f44"
  }), _react.default.createElement("ellipse", {
    cx: 393.47,
    cy: 153.95,
    rx: 2.87,
    ry: 6.21,
    fill: "#fdb797"
  }), _react.default.createElement("ellipse", {
    cx: 304.55,
    cy: 153.95,
    rx: 2.87,
    ry: 6.21,
    fill: "#fdb797"
  }), _react.default.createElement("path", {
    d: "M290.47 255.89l-72-112.93 36.33-87 24.86 9.56-20.08 73.62s28.68 76.87 54.5 76.2z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M389.64 290.19c-.33 1.21 4.14 2.47 3.86 3.75-2.08 9.48-2.75 20.85-2.41 33.22 1.69 61.15 28 146.73 29.1 150.29l2 .13s-27.41-88-29.14-150.42c-.34-12.37.32-23.74 2.41-33.22.28-1.28.58-2.53.92-3.75z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M393.01 328.12L293.06 323c6.06-10.94 11.37-20.78 10-28.1 0 0 29.25 20 92.32 0-2.05 9.48-2.72 20.85-2.37 33.22z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M285.45 342.77a199.48 199.48 0 0 1 10.5-20.73c6.06-10.94 11.37-20.78 10-28.1-.24-1.34 7.58-1.84 6.21-1.84-2.89 0-7.65-1.91-10.5-1.91-1.36 0 1.18 2.41 1.41 3.75 1.33 7.32-4 17.16-10 28.1a199.48 199.48 0 0 0-10.5 20.73c-14.7 35.93-12.43 37.29 4.78 129.07 0 0 .95-.44 2.66-1.12-17-90.66-19.2-92.12-4.56-127.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M393.01 327.16l-99.95-5.11c6.06-10.94 11.37-20.78 10-28.1 0 0 14.84 10.59 42.56 2.94 15.3 7.65 29.14 3.59 49.75-2.94-2.04 9.47-2.71 20.84-2.36 33.21z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M290.69 256.25l4.3-5.26 9.08.48a17.36 17.36 0 0 0-13.38 4.78zM407.33 256.25l-5.74-5.74-7.65 1a17.36 17.36 0 0 1 13.39 4.74zM357.14 431.53l3.82.16.47-1.12-4.29-.04v1zM254.84 55.95l.47-1.51 24.98 10.14-.59.94-24.86-9.57zM441.72 54.25l-25.18 9.93.83.38L442.23 55l-.51-.75z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M259.62 139.13l20.08-73.62h-2.87l-20.08 73.62s28.68 76.87 54.5 76.2h2.87c-25.86.68-54.5-76.2-54.5-76.2zM437.45 141.05l-20.08-75.53h2.89l20.08 75.53s-28.68 76.87-54.5 76.2h-2.87c25.79.67 54.48-76.2 54.48-76.2z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 590.33,
    cy: 648.61,
    rx: 18.19,
    ry: 44.66,
    fill: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    d: "M841.26 790.8l-132.32-.8v-2.23c0-23.75 19.24-28.55 43-28.56h46.31c23.75 0 43 4.77 43 28.52z",
    transform: "translate(-184.74 -87.4)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M697.36 644.27l-5.41-.39c-23.95-1.72-40.62-10.19-49.57-25.19-17.1-28.65 1.18-70 2-71.76l1.44-3.2h59zM653 554.6c-3.65 9.63-13 38.85-1.24 58.55 6.38 10.67 18.34 17.17 35.6 19.36l5.74-77.93z",
    transform: "translate(-184.74 -87.4)",
    fill: "url(#prefix__d)"
  }), _react.default.createElement("path", {
    d: "M851.06 644.21l-7.49-100.55h59l1.44 3.2c.79 1.75 19.1 43.09 2 71.75-8.94 15-25.61 23.49-49.55 25.23zm4.22-89.69l5.81 77.92c17.26-2.2 29.21-8.71 35.59-19.39 11.76-19.71 2.37-48.92-1.29-58.55z",
    transform: "translate(-184.74 -87.4)",
    fill: "url(#prefix__e)"
  }), _react.default.createElement("path", {
    d: "M774.24 727.74a81.87 81.87 0 0 1-81.9-81.83l-.06-129.83L856 516l.06 129.83a81.87 81.87 0 0 1-81.82 81.91z",
    transform: "translate(-184.74 -87.4)",
    fill: "url(#prefix__f)"
  }), _react.default.createElement("rect", {
    x: 555.47,
    y: 385.79,
    width: 65.55,
    height: 89.95,
    rx: 25,
    ry: 25,
    fill: "#f9d075"
  }), _react.default.createElement("path", {
    d: "M554.26 374.36s-7.44-13.49-3.79-26.4c0 0 15.72-4.21 26.39 8.14z",
    fill: "#f9d075"
  }), _react.default.createElement("path", {
    d: "M556.55 370.89s-5.53-10-2.82-19.64c0 0 11.69-3.13 19.63 6.06zM624.14 370.89s5.53-10 2.82-19.64c0 0-11.69-3.13-19.63 6.06z",
    fill: "#ffe9a1"
  }), _react.default.createElement("path", {
    d: "M626.42 374.36s7.44-13.49 3.79-26.4c0 0-15.72-4.21-26.39 8.14z",
    fill: "#f9d075"
  }), _react.default.createElement("path", {
    d: "M624.14 370.89s5.53-10 2.82-19.64c0 0-11.69-3.13-19.63 6.06z",
    fill: "#ffe9a1"
  }), _react.default.createElement("path", {
    d: "M630.2 390.6q0 1.6-.14 3.18c-1.69 19.6-18.83 35-39.72 35-18.7 0-34.4-12.34-38.7-29a36.83 36.83 0 0 1-1.16-9.19c0-21.08 17.85-38.18 39.86-38.18s39.86 17.13 39.86 38.19z",
    fill: "#f9d075"
  }), _react.default.createElement("path", {
    d: "M556.38 408.87l-3-6.46h-12.4l7 6.18-5.05 1.68s41.82 44.91 92.63 0l-3.93-1.4 6.18-5.33-4.55-1.13 1.68-3.37-6.78.28-7.82 14.59-26.08 11.52z",
    fill: "#ffe9a1"
  }), _react.default.createElement("circle", {
    cx: 604.66,
    cy: 394.55,
    r: 3.65,
    fill: "#2b1f0e"
  }), _react.default.createElement("circle", {
    cx: 574.91,
    cy: 394.55,
    r: 3.65,
    fill: "#2b1f0e"
  }), _react.default.createElement("path", {
    d: "M630.07 393.8c-1.69 19.6-18.83 35-39.72 35-18.7 0-34.4-12.34-38.7-29 2 1.82 3.79 4.46 5.39 6.18a19.42 19.42 0 0 0 4 3.57c2.45 1.5 5.43 1.85 8.3 2 2.59.1 5.47-.06 7.32-1.88s2.06-4.47 3.12-6.73a11.42 11.42 0 0 1 8.46-6.17 14.3 14.3 0 0 1 10.31 2.53 7.54 7.54 0 0 1 2.06 2 19.64 19.64 0 0 1 1.41 3.43c2.31 5.6 9.77 7.85 15.4 5.61s9.36-7.89 10.75-13.79c.26-1.17.81-2.63 1.9-2.75z",
    fill: "#ffe9a1"
  }), _react.default.createElement("path", {
    d: "M589.78 412.52l-1.68 1.68a3.53 3.53 0 0 0 3.09 0z",
    fill: "#f25f1d"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M550.48 386.41h79.72v2.81h-79.72zM550.48 389.22h16v14.88h-16z"
  }), _react.default.createElement("path", {
    d: "M566.34 389.08h18.53v3.13a10.06 10.06 0 0 1-10.06 10.06h-8.46v-13.19h-.01z",
    fill: "#535461",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M549.11 386.41H551v17.68h-1.93a6.21 6.21 0 0 1-6.21-6.21v-5.27a6.21 6.21 0 0 1 6.21-6.21z",
    fill: "#535461"
  }), _react.default.createElement("path", {
    d: "M581.78 413.5s7.86 3.65 7.86-5.61M597.5 413.5s-7.86 3.65-7.86-5.61",
    fill: "none",
    stroke: "#2b1f0e",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("ellipse", {
    cx: 589.78,
    cy: 404.09,
    rx: 3.09,
    ry: 3.93,
    fill: "#f25f1d"
  }), _react.default.createElement("ellipse", {
    cx: 590.31,
    cy: 646.1,
    rx: 17.6,
    ry: 43.2,
    fill: "#cfd8dc"
  }), _react.default.createElement("path", {
    d: "M515.13 557.36l-5.23-.38c-23.16-1.66-39.3-9.86-48-24.37-16.54-27.72 1.14-67.72 1.9-69.41l1.39-3.1h57.05zm-42.95-86.76c-3.53 9.31-12.59 37.58-1.2 56.64 6.17 10.32 17.74 16.61 34.44 18.73l5.55-75.37zM663.81 557.29l-7.25-97.27h57.05l1.4 3.1c.76 1.69 18.48 41.68 2 69.41-8.64 14.51-24.77 22.72-47.93 24.41zm4.08-86.76l5.62 75.38c16.69-2.13 28.26-8.43 34.42-18.76 11.38-19.07 2.29-47.32-1.25-56.64z",
    fill: "#cfd8dc"
  }), _react.default.createElement("path", {
    d: "M464.65 535c-16.54-27.72 1.14-67.72 1.9-69.41l1.39-3.1h39.75l.17-2.25h-42.63l-1.39 3.1c-.76 1.69-18.44 41.7-1.9 69.41a43.08 43.08 0 0 0 10.83 12.16 42.91 42.91 0 0 1-8.12-9.91z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    opacity: 0.05,
    d: "M668.62 460.02l2.52.12-.22 10.26-2.29.13-.01-10.51zM507.56 460.09h2.72v10.51h-2.72z"
  }), _react.default.createElement("path", {
    d: "M590.26 606.06c-8.36 0-15.35 14.32-17.14 33.51a79.51 79.51 0 0 0 16.35 1.69 79.44 79.44 0 0 0 17.92-2c-1.82-19.06-8.79-33.21-17.13-33.2z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M510.26 433.31h158.4V558.9a79.2 79.2 0 0 1-79.2 79.2 79.2 79.2 0 0 1-79.2-79.2V433.31z",
    fill: "#cfd8dc"
  }), _react.default.createElement("path", {
    d: "M516.63 559.65l-.05-125.59h-6.32l.05 125.59a79.2 79.2 0 0 0 79.23 79.16c1.06 0 2.11 0 3.16-.07a79.19 79.19 0 0 1-76.07-79.09z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M605.37 671.1h-30.11c3.09 12.47 8.68 20.8 15.06 20.79s11.94-8.29 15.05-20.79z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M654.33 700.07l-128 .05c0-20.93 17-27.91 37.88-27.91h52.2c20.93 0 37.91 7 37.91 27.88z",
    fill: "#cfd8dc"
  }), _react.default.createElement("path", {
    d: "M572.88 668.51h-5c-23 0-41.59 8.64-41.58 31.62h5c-.04-22.98 18.6-31.61 41.58-31.62z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 588.81,
    cy: 526.13,
    r: 31.72,
    fill: "#da552f"
  }), _react.default.createElement("path", {
    d: "M593.04 510.27h-15.33v31.72h6.34v-9.52h9a11.1 11.1 0 1 0 0-22.2zm0 15.86h-9v-9.53h9a4.76 4.76 0 0 1 0 9.52z",
    fill: "#fff"
  }), _react.default.createElement("ellipse", {
    cx: 629.15,
    cy: 437.74,
    rx: 13.14,
    ry: 15.91,
    fill: "#ffe9a1"
  }), _react.default.createElement("ellipse", {
    cx: 543.31,
    cy: 433.81,
    rx: 13.14,
    ry: 15.91,
    fill: "#ffe9a1"
  }), _react.default.createElement("g", {
    opacity: 0.3,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M607 189.82h2.08v11.78H607z"
  }), _react.default.createElement("path", {
    d: "M613.93 194.67v2.08h-11.78v-2.08z"
  })), _react.default.createElement("g", {
    opacity: 0.3,
    fill: "#47e6b1"
  }, _react.default.createElement("path", {
    d: "M723 283.82h2.08v11.78H723z"
  }), _react.default.createElement("path", {
    d: "M729.93 288.67v2.08h-11.78v-2.08z"
  })), _react.default.createElement("path", {
    d: "M679.77 88.75a2.55 2.55 0 0 1-1.42-3.08 1.22 1.22 0 0 0 .06-.28 1.28 1.28 0 0 0-2.29-.85 1.22 1.22 0 0 0-.14.25 2.55 2.55 0 0 1-3.08 1.42 1.22 1.22 0 0 0-.28-.06 1.28 1.28 0 0 0-.85 2.29 1.22 1.22 0 0 0 .25.14 2.55 2.55 0 0 1 1.42 3.08 1.22 1.22 0 0 0-.06.28 1.28 1.28 0 0 0 2.29.85 1.22 1.22 0 0 0 .14-.25 2.55 2.55 0 0 1 3.08-1.42 1.22 1.22 0 0 0 .28.06 1.28 1.28 0 0 0 .85-2.29 1.22 1.22 0 0 0-.25-.14zM458.77 294.75a2.55 2.55 0 0 1-1.42-3.08 1.22 1.22 0 0 0 .06-.28 1.28 1.28 0 0 0-2.29-.85 1.22 1.22 0 0 0-.14.25 2.55 2.55 0 0 1-3.08 1.42 1.22 1.22 0 0 0-.28-.06 1.28 1.28 0 0 0-.85 2.29 1.22 1.22 0 0 0 .25.14 2.55 2.55 0 0 1 1.42 3.08 1.22 1.22 0 0 0-.06.28 1.28 1.28 0 0 0 2.29.85 1.22 1.22 0 0 0 .14-.25 2.55 2.55 0 0 1 3.08-1.42 1.22 1.22 0 0 0 .28.06 1.28 1.28 0 0 0 .85-2.29 1.22 1.22 0 0 0-.25-.14z",
    fill: "#4d8af0",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M194.26 333.6a2.55 2.55 0 0 1-1.42-3.08 1.22 1.22 0 0 0 .06-.28 1.28 1.28 0 0 0-2.29-.85 1.22 1.22 0 0 0-.14.25 2.55 2.55 0 0 1-3.08 1.42 1.22 1.22 0 0 0-.28-.06 1.28 1.28 0 0 0-.85 2.29 1.22 1.22 0 0 0 .25.14 2.55 2.55 0 0 1 1.42 3.08 1.22 1.22 0 0 0-.06.28 1.28 1.28 0 0 0 2.29.85 1.22 1.22 0 0 0 .14-.25 2.55 2.55 0 0 1 3.08-1.42 1.22 1.22 0 0 0 .28.06 1.28 1.28 0 0 0 .85-2.29 1.22 1.22 0 0 0-.25-.14zM8.52 455.21a2.55 2.55 0 0 1-1.42-3.08 1.22 1.22 0 0 0 .06-.28 1.28 1.28 0 0 0-2.29-.85 1.22 1.22 0 0 0-.14.25 2.55 2.55 0 0 1-3.08 1.42 1.22 1.22 0 0 0-.28-.06 1.28 1.28 0 0 0-.85 2.29 1.22 1.22 0 0 0 .25.14 2.55 2.55 0 0 1 1.42 3.08 1.22 1.22 0 0 0-.06.28 1.28 1.28 0 0 0 2.29.85 1.22 1.22 0 0 0 .14-.25 2.55 2.55 0 0 1 3.08-1.42 1.22 1.22 0 0 0 .28.06 1.28 1.28 0 0 0 .85-2.29 1.22 1.22 0 0 0-.25-.14z",
    fill: "#fdd835",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 190.7,
    cy: 221.25,
    r: 4.16,
    fill: "#f55f44",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 538.25,
    cy: 4.16,
    r: 4.16,
    fill: "#f55f44",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 136.25,
    cy: 56.16,
    r: 4.16,
    fill: "#f55f44",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 9.25,
    cy: 294.16,
    r: 4.16,
    fill: "#f55f44",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 779.9,
    cy: 202.29,
    r: 4.16,
    fill: "#f55f44",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 826.36,
    cy: 338.03,
    r: 4.16,
    fill: "#4d8af0",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 826.36,
    cy: 545.03,
    r: 4.16,
    fill: "#4d8af0",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 158.36,
    cy: 535.03,
    r: 4.16,
    fill: "#4d8af0",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 59.87,
    cy: 441.89,
    r: 4.16,
    fill: "#47e6b1",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 64.48,
    cy: 217.18,
    r: 4.16,
    fill: "#47e6b1",
    opacity: 0.3
  }), _react.default.createElement("circle", {
    cx: 23.89,
    cy: 117.9,
    r: 4.16,
    fill: "#47e6b1",
    opacity: 0.3
  }));
};

UndrawProductHunt.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawProductHunt;
exports.default = _default;