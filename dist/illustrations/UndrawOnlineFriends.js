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

var UndrawOnlineFriends = function UndrawOnlineFriends(_props) {
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
    viewBox: "0 0 1177 494.25",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 313.79,
    y1: 660.67,
    x2: 313.79,
    y2: 660.43,
    gradientTransform: "matrix(-1 0 0 1 651 0)",
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
  }))), _react.default.createElement("ellipse", {
    cx: 588.5,
    cy: 473.25,
    rx: 588.5,
    ry: 21,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M1047.5 355.82a24.74 24.74 0 0 0 3.27-12.54c0-11.33-7-20.52-15.68-20.52s-15.67 9.19-15.67 20.52a24.74 24.74 0 0 0 3.27 12.54 25.68 25.68 0 0 0 0 25.08 25.66 25.66 0 0 0 0 25.07 25.68 25.68 0 0 0 0 25.08 24.74 24.74 0 0 0-3.27 12.54c0 11.33 7 20.52 15.67 20.52s15.68-9.19 15.68-20.52a24.74 24.74 0 0 0-3.27-12.54 25.68 25.68 0 0 0 0-25.08 25.66 25.66 0 0 0 0-25.07 25.68 25.68 0 0 0 0-25.08z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 1035.05,
    cy: 318.2,
    rx: 15.67,
    ry: 20.52,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 1035.05,
    cy: 293.12,
    rx: 15.67,
    ry: 20.52,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M976.38 121.5a75.44 75.44 0 0 1-5.84-8.59l41.19-6.76-44.55.33a75.22 75.22 0 0 1-1.43-59.49l59.76 31-55.11-40.51a75.08 75.08 0 1 1 124 84 74.09 74.09 0 0 1 8.56 13.7l-53.46 27.79 57-19.13a75.12 75.12 0 0 1-12.11 70.5 75.08 75.08 0 1 1-118 0 75.08 75.08 0 0 1 0-92.84z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M1110.5 167.92a74.75 74.75 0 0 1-16.07 46.42 75.08 75.08 0 1 1-118 0c-10.11-12.77 134.07-54.84 134.07-46.42z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 171.5,
    y: 7,
    width: 834,
    height: 456,
    rx: 20.42,
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M172 29.5h268v434H192.42A20.42 20.42 0 0 1 172 443.08V29.5z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1005.5 27.42v11.59h-834V27.42a20.41 20.41 0 0 1 20.42-20.41h793.16a20.41 20.41 0 0 1 20.42 20.41z",
    fill: "#3f3d56"
  }), _react.default.createElement("circle", {
    cx: 193,
    cy: 23.5,
    r: 6,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 208,
    cy: 23.5,
    r: 6,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 223,
    cy: 23.5,
    r: 6,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 610.5,
    y: 93.12,
    width: 347,
    height: 11,
    rx: 1.24,
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("rect", {
    x: 879.5,
    y: 114.12,
    width: 73,
    height: 25,
    rx: 1.24,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 610.5,
    y: 226.88,
    width: 347,
    height: 11,
    rx: 1.24,
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("rect", {
    x: 879.5,
    y: 247.88,
    width: 73,
    height: 25,
    rx: 1.24,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 610.5,
    y: 362.88,
    width: 347,
    height: 11,
    rx: 1.24,
    fill: primaryColor,
    opacity: 0.3
  }), _react.default.createElement("rect", {
    x: 879.5,
    y: 383.88,
    width: 73,
    height: 25,
    rx: 1.24,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 535.19,
    cy: 249.88,
    r: 49.52,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M578.89 276a1.39 1.39 0 0 1-.21.33 31 31 0 0 1-1.75 2.59 49.34 49.34 0 0 1-21.75 16.95c-.86.36-1.74.69-2.63 1a17.55 17.55 0 0 1-2.28-2.19 17.11 17.11 0 0 1-4-8.29 21 21 0 0 1-4 .38 2.68 2.68 0 0 1-.4 0c-10.3-.18-19.14-7.72-23.09-18.48l-.16-.46a37.39 37.39 0 0 1-.78-21.74c.05-.24.13-.48.2-.71 3.38-11.61 12.3-20.07 22.91-20.74h2.29c13.44.49 24.26 13.49 24.76 29.75a17.27 17.27 0 0 1 7.61 16.92 17.68 17.68 0 0 1 3.28 4.69z",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M578.68 276.33a31 31 0 0 1-1.75 2.59 16.35 16.35 0 0 0-2.67-3.55 18.83 18.83 0 0 0 .18-2.49 17.26 17.26 0 0 0-7.79-14.43c-.55-16.6-11.84-29.86-25.67-29.86-9.88 0-18.45 6.74-22.76 16.64-.11.26-.21.51-.33.78-.36.86-.68 1.73-1 2.64a36.64 36.64 0 0 1 1.47-5.38l.14-.14c3.85-10.61 12.45-18.14 22.55-18.59h2.29c13.25.8 23.86 13.74 24.37 29.83a17.24 17.24 0 0 1 7.63 16.92 17.06 17.06 0 0 1 3.34 5.04z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M526.5 262.13a6.5 6.5 0 0 1-.34 3c-.59 1.37-2 2.6-1.61 4a3.07 3.07 0 0 0 2.16 1.74c4.31 1.46 9 .59 13.56.79a43.72 43.72 0 0 0 4.57.16 7.28 7.28 0 0 0 4.24-1.48 36.3 36.3 0 0 1-6.67-4.19 7.5 7.5 0 0 1-1.35-1.29 7.91 7.91 0 0 1-1.17-4.58v-4.76c-3.26 0-6.51-.05-9.77-.05-1 0-4.23-.25-4.6.88-.18.56.52 2.21.63 2.84a28.28 28.28 0 0 1 .35 2.94z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M526.5 262.13a6.5 6.5 0 0 1-.34 3c-.59 1.37-2 2.6-1.61 4a3.07 3.07 0 0 0 2.16 1.74c4.31 1.46 9 .59 13.56.79a43.72 43.72 0 0 0 4.57.16 7.28 7.28 0 0 0 4.24-1.48 36.3 36.3 0 0 1-6.67-4.19 7.5 7.5 0 0 1-1.35-1.29 7.91 7.91 0 0 1-1.17-4.58v-4.76c-3.26 0-6.51-.05-9.77-.05-1 0-4.23-.25-4.6.88-.18.56.52 2.21.63 2.84a28.28 28.28 0 0 1 .35 2.94z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 533.2,
    cy: 249.2,
    r: 11.49,
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M554.99 282.53c0 .31-.06.64-.11 1a30.42 30.42 0 0 1-1.63 5.45 26.19 26.19 0 0 1-1.52 3.48c-.43.77-1 1.48-1.46 2.23l-.66 1.07a14.58 14.58 0 0 0-1.07 2.26 42.44 42.44 0 0 1-5.87 1.07 49.06 49.06 0 0 1-5.83.35c-10.45 0-21.72-2.71-29.71-8.25 0 0 1.17-.81 1-1 0-.46-.05-.91-.05-1.37a10.28 10.28 0 0 1 .57-3.48 7 7 0 0 1 1.73-2.84c1-1 2.34-1.62 3.41-2.58a10.12 10.12 0 0 0 2.79-4.85c.25-.8.43-1.65.6-2.47a12 12 0 0 1 .92-3.25 2.88 2.88 0 0 1 .22-.38 3.9 3.9 0 0 1 .54-.71 11.7 11.7 0 0 1 3.52-2.36c1.09-.56 2.62-1 3.38-.07v.07a14.09 14.09 0 0 1 .63 1.76c.61 1.26 2.31 1.42 3.69 1.39a117 117 0 0 0 14.58-1.22l2.34-.38c1.69-.28 2.87 1.2 3.82 2.64 2.46 3.71 4.54 7.98 4.17 12.44z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M519.9 283.31c-1.07.24-1.69 1.32-2.19 2.3a8.89 8.89 0 0 0-1.19 5.34 7.53 7.53 0 0 0 .23 2.17 2.88 2.88 0 0 0 1.26 1.72",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 547.6,
    cy: 443.78,
    rx: 6.34,
    ry: 12.85,
    transform: "rotate(-75.66 411.265 349.741)",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M535.21 244.68c-6.11-1.56-10.63-5-11-8.16a3.2 3.2 0 0 0-.6 1.21c-.87 3.39 4 7.56 10.87 9.32s13.15.43 14-3a3.24 3.24 0 0 0 .08-1.16c-1.83 2.52-7.36 3.32-13.35 1.79z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M555.29 290.68c0 1.74 0 3.47-.11 5.19-.86.36-1.74.69-2.63 1a36.71 36.71 0 0 1-4 1.14 42.44 42.44 0 0 1-5.87 1.07c-.35-4.14-1.14-8.13-.75-12.33a19.86 19.86 0 0 1 3.22-9 7.69 7.69 0 0 1 2.91-2.81 3.58 3.58 0 0 1 3.83.3 5.48 5.48 0 0 1 1.38 2.55 42.3 42.3 0 0 1 1.62 5.75c0 .21.07.44.1.66a39.63 39.63 0 0 1 .3 6.48z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M584.7 385.88a49.3 49.3 0 0 1-6 23.71c-.44.8-.9 1.61-1.42 2.41a1.39 1.39 0 0 1-.21.33 31 31 0 0 1-1.75 2.59 48.94 48.94 0 0 1-14.15 13.12l-.29.2a51.13 51.13 0 0 1-5.65 2.93c-.54.24-1.1.47-1.66.7s-1.08.44-1.64.62c-.28.12-.58.22-.87.32a.38.38 0 0 0-.1 0c-.61.22-1.24.41-1.86.6l-.47.11c-.56.17-1.12.31-1.68.43a42.31 42.31 0 0 1-5.88 1.07 48.26 48.26 0 0 1-5.79.35h-.6a45.09 45.09 0 0 1-8-.74l-.48-.08c-.49-.08-1-.18-1.47-.3l-.93-.21a29.29 29.29 0 0 1-2.92-.8 47.36 47.36 0 0 1-5.73-2.13l-.21-.09a48.94 48.94 0 0 1-7.79-4.43 5.33 5.33 0 0 1-.6-.41 49.51 49.51 0 1 1 78.25-40.31z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M547.17 373.95a10.51 10.51 0 0 1-21 0v-.5a10.5 10.5 0 0 1 21 0c-.01.16 0 .33 0 .5z",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M547.17 373.95a10.51 10.51 0 0 1-21 0v-.5a16.58 16.58 0 0 1 21 0c-.01.16 0 .33 0 .5z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 536.66,
    cy: 387.22,
    r: 16.59,
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M526.61 371.63a10.51 10.51 0 0 1 9.12-10.41 10.51 10.51 0 1 0 0 20.83 10.51 10.51 0 0 1-9.12-10.42zM517.94 393.96a10.51 10.51 0 0 1-1.77-13.73 11.56 11.56 0 0 0-1 1 10.51 10.51 0 1 0 15.76 13.9 11.13 11.13 0 0 0 .85-1.1 10.51 10.51 0 0 1-13.84-.07z",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M527.98 408.26a9.22 9.22 0 0 0-2.48.87c-1.38 1-1.33 3-.92 4.63.94 3.72 3.24 7.29 6.76 8.81a16.71 16.71 0 0 0 6.82 1c2.51 0 5.35-.34 6.91-2.32a9.17 9.17 0 0 0 1.41-3.46c.77-3 1.55-6.1 1.27-9.2-1.52.13-3.22.22-4.42-.74s-1.47-2.79-2-4.31a1.13 1.13 0 0 0-.39-.62 1.27 1.27 0 0 0-.7-.1 28.29 28.29 0 0 1-4.78-.2c-1-.13-3.42-1.16-4.16-.29-.54.63-.2 2.55-.62 3.44a4.76 4.76 0 0 1-2.7 2.49z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M527.98 408.26a9.22 9.22 0 0 0-2.48.87c-1.38 1-1.33 3-.92 4.63.94 3.72 3.24 7.29 6.76 8.81a16.71 16.71 0 0 0 6.82 1c2.51 0 5.35-.34 6.91-2.32a9.17 9.17 0 0 0 1.41-3.46c.77-3 1.55-6.1 1.27-9.2-1.52.13-3.22.22-4.42-.74s-1.47-2.79-2-4.31a1.13 1.13 0 0 0-.39-.62 1.27 1.27 0 0 0-.7-.1 28.29 28.29 0 0 1-4.78-.2c-1-.13-3.42-1.16-4.16-.29-.54.63-.2 2.55-.62 3.44a4.76 4.76 0 0 1-2.7 2.49z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 536.43,
    cy: 395.23,
    r: 11.6,
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M561.86 420.36c-.08.1-.16.22-.25.32l-.49.64a37.62 37.62 0 0 0-5.93 9.85c-.54.24-1.1.47-1.66.7s-1.08.44-1.64.62c-.28.12-.58.22-.87.32a.38.38 0 0 0-.1 0c-.61.22-1.24.41-1.86.6l-.47.11c-.56.17-1.12.31-1.68.43a42.31 42.31 0 0 1-5.88 1.07 48.26 48.26 0 0 1-5.79.35h-.6a45.09 45.09 0 0 1-8-.74l-.48-.08c-.49-.08-1-.18-1.47-.3l-.93-.21a29.29 29.29 0 0 1-2.92-.8 8.8 8.8 0 0 1 2.15-4.5c-2.25-2.69-5.95-3.75-8.34-6.29a8.05 8.05 0 0 1-.58-.76 3.19 3.19 0 0 1-.31-.61 1.71 1.71 0 0 1-.13-.53 4.63 4.63 0 0 1-.09-1.12c-.06-2.84.07-6.08 2.27-7.86a10.35 10.35 0 0 1 3.58-1.6 43.94 43.94 0 0 0 6.5-2.62 5.19 5.19 0 0 1 .38 1.4c.2 1.16.18 2.38.45 3.53a8.52 8.52 0 0 0 3.56 5 13.6 13.6 0 0 0 5.86 2.13c2.06.3 3.7-.77 5.64-1.5a6.54 6.54 0 0 0 2.33-1.32 5.37 5.37 0 0 0 1.31-3.65c0-1.32-.15-2.64-.07-4a1.92 1.92 0 0 1 .05-.41 1.67 1.67 0 0 1 1.14-1.57 2.13 2.13 0 0 1 1.09.2l3.74 1.43a25.93 25.93 0 0 1 4.66 2.15 12.93 12.93 0 0 1 5.83 9.62z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M526.59 434.64l-.48-.08c-.49-.08-1-.18-1.47-.3l-.93-.21a29.29 29.29 0 0 1-2.92-.8 47.36 47.36 0 0 1-5.73-2.13 24.76 24.76 0 0 1-1-9.42 17.36 17.36 0 0 1 .84-4c2.1 2 5.68.87 8.06 2.47a5 5 0 0 1 1.54 1.76 13.29 13.29 0 0 1 1.34 4.09c.15.78.29 1.57.41 2.36v.75c.08.56.15 1.14.18 1.71.16 1.29.16 2.53.16 3.8z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M526.11 434.56c-.49-.08-1-.18-1.47-.3l-.93-.21a29.29 29.29 0 0 1-2.92-.8 47.36 47.36 0 0 1-5.73-2.13l-.21-.09a25.5 25.5 0 0 1-1.27-10.47 18.7 18.7 0 0 1 .82-3.76c2.1 2 5.68.89 8.06 2.49a5.62 5.62 0 0 1 2 2.64 17.52 17.52 0 0 1 .87 3.17c.22 1.17.43 2.34.57 3.53a2.83 2.83 0 0 1 .05.5v.79c.19 1.53.18 3.09.16 4.64z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M560.84 428.24a51.13 51.13 0 0 1-5.65 2.93c-.54.24-1.1.47-1.66.7s-1.08.44-1.64.62c-.28.12-.58.22-.87.32a.38.38 0 0 0-.1 0c-.61.22-1.24.41-1.86.6l-.47.11c0-.89 0-1.81.1-2.71.07-.71.15-1.42.25-2.13 0-.13 0-.26.05-.39a1.07 1.07 0 0 0 0-.25c.12-.68.25-1.37.38-2.05a12.53 12.53 0 0 1 1.34-4.09 5 5 0 0 1 1.55-1.72c2.38-1.6 6-.51 8-2.47a17.67 17.67 0 0 1 .81 3.58 23.33 23.33 0 0 1-.23 6.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M561.13 428.04l-.29.2a51.13 51.13 0 0 1-5.65 2.93c-.54.24-1.1.47-1.66.7s-1.08.44-1.64.62c-.28.12-.58.22-.87.32a.38.38 0 0 0-.1 0c-.61.22-1.24.41-1.86.6 0-1.18 0-2.35.1-3.52 0-.3 0-.61.08-.91v-.41-.31c.15-1.08.33-2.13.55-3.19a17.52 17.52 0 0 1 .87-3.17 5.62 5.62 0 0 1 2-2.64c2.38-1.6 6-.51 8-2.49a17.11 17.11 0 0 1 .84 3.88 23.42 23.42 0 0 1-.37 7.39z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 536.2,
    cy: 384.32,
    rx: 13.92,
    ry: 9.28,
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M524.63 432.86v1.32a.28.28 0 0 0 0 .08l-.93-.21a3.08 3.08 0 0 1 0-.53 6.46 6.46 0 0 1 2.23-4.89 1.48 1.48 0 0 1 .31-.25 5.91 5.91 0 0 1 1.8-1 5.37 5.37 0 0 1 1.88-.36 1.14 1.14 0 0 1 .26 0 3.77 3.77 0 0 1 .48 0h-.33a6.37 6.37 0 0 0-4 2 2.11 2.11 0 0 0-.31.36 6.4 6.4 0 0 0-1.39 3.48z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M534.81 433.52a8.1 8.1 0 0 1-.22 1.86 45.09 45.09 0 0 1-8-.74l-.48-.08c-.49-.08-1-.18-1.47-.3v-.08-.66-.66a7.23 7.23 0 0 1 1.32-3.73 2.24 2.24 0 0 1 .31-.38 4.6 4.6 0 0 1 1.75-1.34 3.9 3.9 0 0 1 1.68-.38.68.68 0 0 1 .2 0 2.83 2.83 0 0 1 .41 0c2.53.43 4.5 3.17 4.5 6.49z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M551.89 432.49c-.28.12-.58.22-.87.32a6.32 6.32 0 0 0-1.78-3.8l-.3-.3a6.57 6.57 0 0 0-3.58-1.63h-.33a3.62 3.62 0 0 1 .46 0 1.27 1.27 0 0 1 .27 0 5.87 5.87 0 0 1 1.89.36 6.44 6.44 0 0 1 1.37.66 1.17 1.17 0 0 1 .3.22 6.37 6.37 0 0 1 2.57 4.17z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M551.02 432.81a.38.38 0 0 0-.1 0c-.61.22-1.24.41-1.86.6l-.47.11c-.56.17-1.12.31-1.68.43a42.31 42.31 0 0 1-5.88 1.07 7.63 7.63 0 0 1-.15-1.53c0-3.32 2-6.06 4.51-6.44a2.6 2.6 0 0 1 .4 0 .62.62 0 0 1 .19 0 3.92 3.92 0 0 1 1.7.38 4.55 4.55 0 0 1 1.34.91 1.92 1.92 0 0 1 .3.28 7.18 7.18 0 0 1 1.7 4.19z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M536.2 392.68c-7.46 0-13.55-3.9-13.91-8.81v.46c0 5.13 6.24 9.28 13.93 9.28s13.92-4.15 13.92-9.28v-.46c-.4 4.91-6.49 8.81-13.94 8.81z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M485.67 116.13a49.4 49.4 0 0 0 6 23.7c.45.81.91 1.62 1.42 2.41a1.45 1.45 0 0 0 .22.33 29.4 29.4 0 0 0 1.79 2.56 47.47 47.47 0 0 0 7.14 7.89 18.86 18.86 0 0 0 1.56 1.34 44.44 44.44 0 0 0 5.44 3.89l.3.2a53.78 53.78 0 0 0 5.64 2.94l1.67.69c.55.23 1.07.45 1.64.63.28.11.57.21.87.31h.14q.91.33 1.86.6l.46.11c.56.17 1.13.32 1.69.43.76.2 1.51.37 2.29.51 1.17.23 2.38.43 3.58.57a48.14 48.14 0 0 0 5.79.34h.59a46.07 46.07 0 0 0 8-.75 3.7 3.7 0 0 0 .48-.08c.49-.08 1-.18 1.47-.3.32-.06.61-.13.93-.21 1-.22 2-.48 2.92-.79.59-.19 1.17-.37 1.75-.57 1.17-.41 2.34-.85 3.46-1.35a3.89 3.89 0 0 0 .51-.21l.22-.1q2.22-1 4.32-2.23c1.19-.68 2.35-1.42 3.47-2.2h.07a4.06 4.06 0 0 0 .52-.36 49.51 49.51 0 1 0-78.21-40.3z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M546.18 135.75a4.6 4.6 0 0 1 1.45 2.45c-1.44.38-2.91-.33-4.25-1a54.22 54.22 0 0 0-13.07-4.21 2 2 0 0 1-1-.38 1.7 1.7 0 0 1 .06-2.1c.5-.52 1.44-.45 2.12-.48a19.31 19.31 0 0 1 14.69 5.68z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M531.55 131.77a6 6 0 0 1-3.31 3.33c-.81.29-1.68.34-2.5.57a2.77 2.77 0 0 0-1.94 1.53 3.28 3.28 0 0 0-.15 1.08c-.13 3.45-.23 7 1.15 10.2 1.19 2.74 3.37 4.9 5.53 6.95 2.52 2.41 5.19 4.85 8.51 5.93 1.94.63 4.23.7 5.84-.55a8.67 8.67 0 0 0 1.63-1.89 22.86 22.86 0 0 0 2.8-4.77c1.37-3.52.91-7.46.43-11.21a.9.9 0 0 0-.24-.6.94.94 0 0 0-.7-.12 4.12 4.12 0 0 1-4.17-2.4 6.26 6.26 0 0 1-.23-2.2l.07-4.28a3.63 3.63 0 0 0-.16-1.36 3.42 3.42 0 0 0-1.79-1.55 44.23 44.23 0 0 0-7.28-2.87c-1.1-.32-1.94-.86-2.43.32s-.49 2.65-1.06 3.89z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M531.55 131.77a6 6 0 0 1-3.31 3.33c-.81.29-1.68.34-2.5.57a2.77 2.77 0 0 0-1.94 1.53 3.28 3.28 0 0 0-.15 1.08c-.13 3.45-.23 7 1.15 10.2 1.19 2.74 3.37 4.9 5.53 6.95 2.52 2.41 5.19 4.85 8.51 5.93 1.94.63 4.23.7 5.84-.55a8.67 8.67 0 0 0 1.63-1.89 22.86 22.86 0 0 0 2.8-4.77c1.37-3.52.91-7.46.43-11.21a.9.9 0 0 0-.24-.6.94.94 0 0 0-.7-.12 4.12 4.12 0 0 1-4.17-2.4 6.26 6.26 0 0 1-.23-2.2l.07-4.28a3.63 3.63 0 0 0-.16-1.36 3.42 3.42 0 0 0-1.79-1.55 44.23 44.23 0 0 0-7.28-2.87c-1.1-.32-1.94-.86-2.43.32s-.49 2.65-1.06 3.89z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 543.13,
    cy: 122.18,
    r: 13.06,
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M525.78 164.73c1.17.23 2.38.43 3.58.57a48.14 48.14 0 0 0 5.79.34h.59a46.07 46.07 0 0 0 8-.75 3.7 3.7 0 0 0 .48-.08c.49-.08 1-.18 1.47-.3.32-.06.61-.13.93-.21 1-.22 2-.48 2.92-.79.59-.19 1.17-.37 1.75-.57 1.17-.41 2.34-.85 3.46-1.35a24.5 24.5 0 0 1-.71-2.71 29.92 29.92 0 0 1-.38-5.92c0-1.59.07-3.17 0-4.75a11.69 11.69 0 0 0-.55-3.78 4.83 4.83 0 0 0-2.44-2.83c-1.49-.66-3.73-1-5.2-.26a3.56 3.56 0 0 0-.48.31 2.49 2.49 0 0 0-.72 1c-.48 1.2-1 2.41-1.46 3.61a11.44 11.44 0 0 1-1.17 2.38 5.9 5.9 0 0 1-6.47 2.13 3.83 3.83 0 0 1-.43-.17c-2-.81-3.83-2.56-5.92-2.09a3.94 3.94 0 0 0-2.61 2.26 1 1 0 0 0-.07.18 10.15 10.15 0 0 0-.72 3.28 43.74 43.74 0 0 0 .36 10.5z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M502.24 153.05a18.86 18.86 0 0 0 1.56 1.34 44.44 44.44 0 0 0 5.44 3.89l.3.2a53.78 53.78 0 0 0 5.64 2.94l1.67.69c.55.23 1.07.45 1.64.63.28.11.57.21.87.31h.14q.91.33 1.86.6l.46.11c.56.17 1.13.32 1.69.43.76.2 1.51.37 2.29.51 1.17.23 2.38.43 3.58.57a48.14 48.14 0 0 0 5.79.34h.59a46.07 46.07 0 0 0 8-.75 3.7 3.7 0 0 0 .48-.08c.49-.08 1-.18 1.47-.3.32-.06.61-.13.93-.21 1-.22 2-.48 2.92-.79.59-.19 1.17-.37 1.75-.57 1.17-.41 2.34-.85 3.46-1.35a3.89 3.89 0 0 0 .51-.21l.22-.1q2.22-1 4.32-2.23a74.86 74.86 0 0 0 2.5-8 1 1 0 0 1 0-.16c-1.56-2.77-2.94-5.65-4.49-8.42a6.43 6.43 0 0 0-5.15-3.88 12.6 12.6 0 0 0-3.35-.62 12.61 12.61 0 0 1-1.92-.33c-1.3-.29-2.74-.57-3.22 0a.17.17 0 0 0-.07.13 2.74 2.74 0 0 0 .23 2c.22.63.51 1.29.66 1.83a2.75 2.75 0 0 1 .15.8 27.27 27.27 0 0 1-.12 3.51c-.28 1.7-1.22 3.2-1.66 4.85-.2.78-.3 1.59-.43 2.38a25.62 25.62 0 0 1-1.39 5.22 3.57 3.57 0 0 1-.51 1c-.82 1-2.18.62-3.47.43-.94-.8-.89-2.22-1-3.42a18 18 0 0 0-1.82-5.78l-.34-.72c-1-2.07-2-4.13-2.94-6.21-1.21-2.58-2.46-5.53-1.46-8.2.29-.8.76-1.51 1.08-2.28a2.48 2.48 0 0 0 .13-.35 3.33 3.33 0 0 0 .15-.91 2 2 0 0 0-.46-1.55.8.8 0 0 0-.2-.21.32.32 0 0 0-.12-.08 2.38 2.38 0 0 0-2.18-.1 9.13 9.13 0 0 0-1.15.51 55 55 0 0 0-5.67 3.67 2.84 2.84 0 0 0-1.18 1.37 10.24 10.24 0 0 1-.19 1.13c-.28.71-1.13.92-1.86 1.08a22.77 22.77 0 0 0-14.52 10.67 11.72 11.72 0 0 0-1.24 2.75 11.42 11.42 0 0 0-.37 1.92z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M548.88 114.81c-1.77 1.81-4.6 1.88-7.13 1.84l.08-1-3.55 1.27a9.41 9.41 0 0 0 2.33-2.5 1.59 1.59 0 0 0-1.73-.11 3.6 3.6 0 0 0-1.29 1.28 11.66 11.66 0 0 0-1.29 10.38 2.3 2.3 0 0 1-2.29-.15 4 4 0 0 1-1.47-1.86c-.21-.48-.43-1-.93-1.19a1 1 0 0 0-1.12.5 2.12 2.12 0 0 0-.24 1.27c.07 1 .82 2 1 3s1.66 1.8.88 2.47a11.41 11.41 0 0 1-2.84.67 1.23 1.23 0 0 1-.82-.81c-.79-1.74-.51-3.77-1-5.62a13.81 13.81 0 0 0-2.06-4.09 5.72 5.72 0 0 0-.78-1.05 2.63 2.63 0 0 1-.76-.87c-.13-.36.12-.89.5-.82a15.62 15.62 0 0 0-2-1.64c.7-.88 1.38-1.78 2-2.68.23-.32.47-.71.3-1.06a1.07 1.07 0 0 0-.4-.39l-1.77-1.2c0-.84 1.67-.53 1.93-1.32a1.08 1.08 0 0 0 0-.64l-.62-2.26 2.36 1.07a1.6 1.6 0 0 0 .9.21c.62-.09.92-.82 1-1.45a4.12 4.12 0 0 1 .24-1.86h3.2a2.09 2.09 0 0 0-.39-1.51l7.88-.44a11 11 0 0 1 4 .28 3.14 3.14 0 0 0 1.33.3c.45 0 .91-.47.78-.91a14.31 14.31 0 0 1 3.21 2.47 3.09 3.09 0 0 0 .91.75 1 1 0 0 0 1.11-.13c.22-.23.32-.64.64-.66s.36.16.48.31a7.81 7.81 0 0 1 1.09 1.9 6.82 6.82 0 0 0 1.65-.44 1.78 1.78 0 0 0-.3 2c.26.67.74 1.24 1.06 1.88a7.8 7.8 0 0 1 .63 2.18c.16.94.16 2.13-.67 2.59a2.24 2.24 0 0 1-2.3-.52c-1.91-1.36-2.26-.96-3.74.56z",
    fill: "#192534"
  }), _react.default.createElement("path", {
    d: "M503.8 154.39a44.44 44.44 0 0 0 5.44 3.89l.3.2a53.78 53.78 0 0 0 5.64 2.94l1.67.69c.55.23 1.07.45 1.64.63.28.11.57.21.87.31-.35-1-.58-2-.89-3a16.94 16.94 0 0 0-4.29-7.06c-1.72-1.72-4.46-4.23-7-2.71a8 8 0 0 0-2 1.93 8.94 8.94 0 0 0-1.24 1.83c-.05.09-.09.21-.14.35zM551.35 162.93c1.17-.41 2.34-.85 3.46-1.35a3.89 3.89 0 0 0 .51-.21l.22-.1q2.22-1 4.32-2.23c1.19-.68 2.35-1.42 3.47-2.2h.07a20.82 20.82 0 0 1 0-3.35 2.63 2.63 0 0 0-.07-1.12 2.67 2.67 0 0 0-.56-.77 4.6 4.6 0 0 1-.41-.47c-1.13-1.27-2.05-2.64-4-2.44s-3.63 1.88-4.45 3.75a3.43 3.43 0 0 0-.22.56 38.8 38.8 0 0 0-1.3 5.31c-.26 1.11-.59 2.18-.83 3.29-.06.41-.15.87-.21 1.33z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M337.43 660.43l-.44.24z",
    transform: "translate(-11.5 -202.87)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M264.5 403.55c-3.86 11.12.65 29.17 2.74 37.22a112 112 0 0 1 2.74 17.72 37.34 37.34 0 0 0 14.18-.32l-3.38-16.59c2.41-9.83 0-36.09 0-36.09s5.47-10.15 6-25.62c.47-15.22 4.22-20.14 4.34-20.3 7.73 4 17.56 47.21 17.56 47.21-.81 10.47.16 26.58 3.38 35.28a43.76 43.76 0 0 1 2.42 17.24 5.31 5.31 0 0 0 4.38.84c4.6-.74 10.12-4.71 10.12-4.71s-1.77-47-3.06-48.81 0-11.92 0-11.92l-2.1-16.44s.32-27.87-2.74-32.7c-2.64-4.18-3.25-11.51-3.37-13.44v-.47l-4.66-5.59s-45.11-3.38-48.5 0c-.83.83-1.34 2.72-1.65 5.1-.93 7.31.14 19.23.14 19.23s1.35 8.86 3.29 17.88a39.27 39.27 0 0 1 0 16.44 49.15 49.15 0 0 1-1.83 18.84z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M267.28 474.2c2 2.66 13.86 1.53 15.87.7 1.23-.5 1.14-2.82.81-5.2-.21-1.52-.52-3.07-.65-4.2-.32-2.9 1-8.78 1-8.78s-2.66 2.82-3.3 0a3.08 3.08 0 0 0-2.3-2.18 6 6 0 0 0-4.18.26c-2.1.9-5.59 2.84-5 5.46.88 3.7-2.26 9-2.26 9a4 4 0 0 0 0 5z",
    fill: "#cbceda"
  }), _react.default.createElement("path", {
    d: "M267.28 474.2c2 2.66 13.86 1.53 15.87.7 1.23-.5 1.14-2.82.81-5.2-1.27.59-3.44 1.09-7 .75a21.39 21.39 0 0 0-2.53-.08 57.55 57.55 0 0 1-7.69-.15 3.84 3.84 0 0 0 .54 3.98zM308.61 406.78c-.81 10.47.16 26.58 3.38 35.28a43.76 43.76 0 0 1 2.42 17.24 5.31 5.31 0 0 0 4.38.84c-1-6.79-5.11-36.07-7.77-59.2a96.89 96.89 0 0 0-17.15-44.47l-2.82 3.1c7.73 4.03 17.56 47.21 17.56 47.21z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M272.12 237.45l2 9.67 9.64 16.19 11.88-5.07s16.15-16.92 6-19.34a8.77 8.77 0 0 1-3.37-1.5 7 7 0 0 1-2.63-5.83 17.84 17.84 0 0 1 1.65-6.93l-20.79-6.51a33.86 33.86 0 0 1 1.49 8.42c.16 5.66-1.95 8.45-3.67 9.78a6.27 6.27 0 0 1-2.2 1.12z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M276.5 218.13a33.86 33.86 0 0 1 1.49 8.42 13.28 13.28 0 0 0 1.21 1.28 16.35 16.35 0 0 0 11.3 4.55 16.13 16.13 0 0 0 5.08-.81 17.84 17.84 0 0 1 1.65-6.93z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M274.08 215.46a16.44 16.44 0 1 0 16.42-16.43 16.35 16.35 0 0 0-16.42 16.43z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M272.12 237.45l2 9.67 9.64 16.19 11.88-5.07s16.15-16.92 6-19.34a8.77 8.77 0 0 1-3.37-1.5c1.83 5-5.73 15.52-5.73 15.52-.88 1.29-2.9.48-2.9.48-4.88-.74-13.85-14.75-15.31-17.08a6.27 6.27 0 0 1-2.21 1.13zM262.81 331.13c2.86.65 18.69 4.16 24.69 3.28 6.61-1 19.45-1.61 19.45-1.61s8.18.44 10.69-.71v-.47l-4.66-5.59s-45.11-3.38-48.5 0c-.85.86-1.36 2.75-1.67 5.1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M292.5 253.4s8.5-11.77 5.29-16.36l14.36 5.89s8.64-1.05 11.76 11.85a22.52 22.52 0 0 1 .54 6.55 19.47 19.47 0 0 0 2.36 9.79c3.55 7.09 2.74 23.36-4.51 25s-9.83.8-9.83.8 1 29.48 5.16 32.87-10.68 2.58-10.68 2.58-12.84.64-19.45 1.61-25.13-3.39-25.13-3.39 2.74-12.4 3.7-20.3 3.23-24.7 3.23-24.7l-16.44-22.26s-2.9-13.45 7.25-19.41 14-7.43 14-7.43 10.2 16.61 15.52 17.42c-.03-.02 1.99.79 2.87-.51z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M311.35 258.07s.16 5.32-.81 7.42-4.51 13.69-4.51 13.69h8.05s-4.35-4.67-4-6.93 1.27-14.18 1.27-14.18z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M287.5 298.19s17.79-4.35 19.45-8.06 6.23-12 6.23-12l-1.88-2.53-8.65 6.79s-10.31 8.22-15.15 9 0 6.8 0 6.8z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M287.5 298.19s17.79-4.35 19.45-8.06 6.23-12 6.23-12l-1.88-2.53-8.65 6.79s-10.31 8.22-15.15 9 0 6.8 0 6.8z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M272.12 277.25v9.65h1.55a45.12 45.12 0 0 1 21.9 5.67l2.91 1.61.78.44 5-11.25-4.67-4.19h-.24c-1.15.11-6.09.53-8.18-.18s-4.46-2.82-10.33-1.32c-2.88.74-5.35 4-8.15 3z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M256.57 259.69l-3.22 3.62v8.82s2.74 27.71 11.44 30.77 24.23-1.77 24.23-1.77 4-10.63 2.13-11.28-16.58-4.53-16.58-4.53.2-16.25-3-21.08c0 0 2.1-15.15-5.15-15.47s-9.85 10.92-9.85 10.92z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M256.09 259.69l-3.23 3.62v8.82s2.74 27.71 11.44 30.77 24.2-1.77 24.2-1.77 4-10.63 2.14-11.28-16.59-4.53-16.59-4.53.21-16.25-3-21.08c0 0 2.09-15.15-5.16-15.47s-9.8 10.92-9.8 10.92z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M278.59 222.44a6.37 6.37 0 0 1 .37-3.13 2.43 2.43 0 0 1 2.54-1.48c1.38.32 2 2.12 3.33 2.55a2.63 2.63 0 0 0 2.92-1.51 7.58 7.58 0 0 0 .56-3.51v-4c0-1.31.05-3.05.95-4.2 1.13-1.43 3.77-2.06 5.53-2a4.63 4.63 0 0 1 3.15 1.27 4.1 4.1 0 0 0 3.32 1.18 2.88 2.88 0 0 0 2.32-2 .09.09 0 0 1 0-.05 16.43 16.43 0 1 0-24.44 21.81 42.26 42.26 0 0 1-.55-4.93z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M301.28 207.13a2.9 2.9 0 0 0 2.32-2c.13-.52.1-1.08.25-1.59.38-1.27 1.73-1.93 2.63-2.89 1.82-1.93 1.7-5.1.41-7.41-1-1.87-3-3.44-5.15-3.08-1.3.23-2.43 1.16-3.75 1.24a7.84 7.84 0 0 1-3.59-1.16 13.53 13.53 0 0 0-8.91-.79 5.11 5.11 0 0 0-2.45 1.24 20.09 20.09 0 0 0-1.3 1.83c-1.51 1.92-4.2 2.29-6.59 2.72s-5.1 1.38-5.89 3.69c-.52 1.52 0 3.18.28 4.77a1.37 1.37 0 0 1-.06 1c-.37.62-1.31.36-2 .51-1.35.28-1.7 2-1.75 3.42-.06 1.59-.1 3.18-.13 4.77a4.67 4.67 0 0 0 1.51 4l5.32 6.39c2.36 2.84 4.86 6.14 4.39 9.8 1.11.5 2.44-.47 2.81-1.64a7.24 7.24 0 0 0-.18-3.63 44.22 44.22 0 0 1-.84-6.29 6.37 6.37 0 0 1 .37-3.13 2.42 2.42 0 0 1 2.55-1.48c1.38.32 2 2.11 3.33 2.55a2.64 2.64 0 0 0 2.92-1.51 7.58 7.58 0 0 0 .56-3.51v-4c0-1.46.05-3 .95-4.2 1.13-1.43 3.77-2.05 5.53-2a4.73 4.73 0 0 1 3.15 1.27 4.07 4.07 0 0 0 3.31 1.11z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M297.57 257.67l-5 20.73s-4.02-.03 5-20.73zM280.33 254.21s6.61 10.82 4 22l-1.23.09s2.23-5.17-2.77-22.09zM276.14 315.43s-8.11-2.68-8.7 3.54c0 0 1.53-4.27 8.7-3.54zM299.59 279.66s1.61 11.28-1.29 15.79a35.21 35.21 0 0 0 14.2 1.93l1-17.72z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M298.5 294.18l.78.44 5-11.25-4.67-4.19h-.25c.06.54 1.36 10.23-.86 15z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M299.59 279.18s1.61 11.28-1.29 15.79a35.43 35.43 0 0 0 14.2 1.93l5.64-17.72z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M313.5 467.34a3.64 3.64 0 0 0 3.13 3.19c4.37.66 14.91 2.32 17.57 3.59 3.39 1.61 16.76.48 17.4-1.13a2.53 2.53 0 0 0-.23-1.93 5.13 5.13 0 0 0-2.16-2.33 6.5 6.5 0 0 0-1-.43c-2.52-.84-7.27-2.62-8.56-4.49 0 0-5.93-5.19-7.62-8a3.87 3.87 0 0 0-3.1-1.93c-1.41-.06-3 .65-3.62 3.74 0 0-7.73 4.41-9.82.54 0 0-.33 5.94-1.61 7.57a2.17 2.17 0 0 0-.38 1.61z",
    fill: "#cbceda"
  }), _react.default.createElement("path", {
    d: "M313.5 467.34a3.64 3.64 0 0 0 3.13 3.19c4.37.66 14.91 2.32 17.57 3.59 3.39 1.61 16.76.48 17.4-1.13a2.53 2.53 0 0 0-.23-1.93 5.13 5.13 0 0 0-2.16-2.33c-2.18 1.45-7 2.87-17.66 1.2-10.16-1.58-15.19-3.14-17.64-4.19a2.17 2.17 0 0 0-.41 1.6z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M269.56 203.89v-.07a15.41 15.41 0 0 1-.49-3.66 22.68 22.68 0 0 0 .43 2.97 1.81 1.81 0 0 1 .06.76zM278.96 218.97a4.88 4.88 0 0 0-.4 1.85 5.57 5.57 0 0 1 .4-2.57 2.43 2.43 0 0 1 2.55-1.48c1.38.32 2 2.12 3.33 2.55a2.63 2.63 0 0 0 2.92-1.51 7.56 7.56 0 0 0 .56-3.51v-4c0-1.31.05-3.05.95-4.2 1.13-1.43 3.77-2.06 5.53-2a4.63 4.63 0 0 1 3.15 1.27 4.1 4.1 0 0 0 3.32 1.18 2.87 2.87 0 0 0 2.32-2c.13-.52.1-1.08.25-1.59.38-1.27 1.73-1.93 2.63-2.89a5.2 5.2 0 0 0 1.36-3.4 5.46 5.46 0 0 1-1.36 4.13c-.9 1-2.25 1.62-2.63 2.88-.15.52-.12 1.07-.25 1.59a2.88 2.88 0 0 1-2.32 2 4.07 4.07 0 0 1-3.32-1.19 4.68 4.68 0 0 0-3.15-1.27c-1.76-.06-4.4.57-5.53 2-.9 1.15-.94 2.74-.95 4.2s0 2.69 0 4a7.54 7.54 0 0 1-.56 3.5 2.61 2.61 0 0 1-2.92 1.51c-1.35-.43-1.95-2.22-3.33-2.54a2.41 2.41 0 0 0-2.55 1.49zM265.72 214.54a6.29 6.29 0 0 0 1.37 2.22l5.32 6.39c2.24 2.69 4.61 5.8 4.43 9.24-.16-3.15-2.35-6-4.43-8.52l-5.32-6.39a4.67 4.67 0 0 1-1.51-4 4.07 4.07 0 0 0 .14 1.06zM279.61 231.31a3.7 3.7 0 0 0 .16-.87 4.47 4.47 0 0 1-.16 1.59c-.37 1.17-1.69 2.14-2.81 1.63a5.49 5.49 0 0 0 .05-.7 2.29 2.29 0 0 0 2.76-1.65z"
  })), _react.default.createElement("path", {
    d: "M333.14 457.28s-1.68 3-7.78.35M281.55 457.99s-5.26 6.2-11.89 2M266.24 384.71s3.71 2.32 3.84 3.65-1.92-1-1.92-1zM264.77 402.52a7.74 7.74 0 0 0 4.58 1.79c2.78.12 2.55 3.74.73 2.66a45.56 45.56 0 0 1-5.31-4.45zM264.06 404.84s1.79 8.77 3.24 7.08",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M83.29 459.76c3-5.51-.41-12.26-4.29-17.17s-8.61-10-8.51-16.29c.15-9 9.7-14.32 17.33-19.09a84 84 0 0 0 15.56-12.51 23 23 0 0 0 4.78-6.4c1.58-3.52 1.53-7.52 1.43-11.37q-.5-19.27-1.9-38.49",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    strokeWidth: 4
  }), _react.default.createElement("path", {
    d: "M122.2 337.74a14 14 0 0 0-7-11.5l-3.14 6.21.09-7.52a14 14 0 1 0 10.06 12.81zM97.17 432.73a14 14 0 1 1 .68-11.3l-8.77 7.13 9.65-2.23a14 14 0 0 1-1.56 6.4zM90.24 405.48a14 14 0 0 1-4.45-27.53l-.08 5.78 3.18-6.29a14 14 0 0 1 14.67 13.36 13.84 13.84 0 0 1-.6 4.79 14 14 0 0 1-12.72 9.89zM124.31 382.81a14 14 0 1 1 6.2-26.27l-2.48 6.8 5.11-4.9a14 14 0 0 1 4.53 9.69 13.79 13.79 0 0 1-.35 3.87 14.05 14.05 0 0 1-13.01 10.81z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M120.31 341.48c-3.24.35-6.39 1.36-9.64 1.56s-6.82-.58-8.88-3.1c-1.1-1.36-1.66-3.09-2.59-4.57a10 10 0 0 0-3.54-3.33 14 14 0 1 0 26.24 9.32q-.79.03-1.59.12zM124.31 382.81a14 14 0 0 1-13.35-20 10.37 10.37 0 0 1 2.82 2.82c1 1.51 1.61 3.26 2.78 4.64 2.19 2.57 5.92 3.41 9.31 3.26s6.66-1.12 10-1.43c.47 0 .94-.07 1.42-.08a14.05 14.05 0 0 1-12.98 10.79zM90.24 405.48a14 14 0 0 1-13.47-19.76 11.36 11.36 0 0 1 3 2.85c1.09 1.54 1.77 3.31 3.05 4.73 2.37 2.64 6.35 3.57 9.93 3.48s6.83-.92 10.28-1.19a14 14 0 0 1-12.79 9.89zM97.17 432.73a14.017 14.017 0 0 1-25.59-11.45 13.59 13.59 0 0 1 3.08 2.75c1.34 1.62 2.22 3.47 3.76 5 2.87 2.82 7.5 4 11.63 4.09a60 60 0 0 0 7.12-.39z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M62.12 453.42s11.08-.29 14.38-2.72 17-5.21 17.86-1.4 16.65 19 4.14 19.06-29.05-2-32.39-4-3.99-10.94-3.99-10.94z",
    fill: "#656380"
  }), _react.default.createElement("path", {
    d: "M98.77 467.03c-12.51.11-29.06-1.94-32.39-4-2.54-1.55-3.55-7.1-3.89-9.65h-.37s.7 8.93 4 11 19.89 4.08 32.39 4c3.61 0 4.86-1.31 4.79-3.21-.47 1.13-1.8 1.84-4.53 1.86z",
    opacity: 0.2
  }));
};

UndrawOnlineFriends.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawOnlineFriends;
exports.default = _default;