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

var UndrawBusinessman = function UndrawBusinessman(_props) {
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
    viewBox: "0 0 873.53 801.44",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 489.88,
    y1: 814.11,
    x2: 489.88,
    y2: 49.28,
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
    d: "M489.35 125.35c-47.88-1.66-93.48-17.11-137-34s-86.7-35.63-133.43-44.63c-30.06-5.76-64.43-6.58-88.65 9.53-23.3 15.51-30.84 42.28-34.88 67.12-3 18.69-4.84 38.36 3.51 55.85 5.79 12.15 16.08 22.36 23.19 34 24.76 40.48 7.26 90.4-19.57 129.93-12.58 18.54-27.18 36.23-36.89 56s-14.21 42.35-5.71 62.49c8.42 20 28.49 34.94 50.23 45.49 44.16 21.41 96.19 27.54 146.93 31 112.32 7.68 225.23 4.36 337.85 1 41.67-1.24 83.53-2.49 124.53-8.93 22.77-3.58 46.28-9.26 62.81-23 21-17.41 26.18-46.88 12.12-68.71-23.59-36.61-88.79-45.71-105.28-85-9.07-21.63.25-45.72 13.43-65.77 28.29-43 75.7-80.78 78.2-130 1.72-33.77-21.08-67.6-56.32-83.59C687.48 57.38 636.25 59.49 609 87.22c-28.06 28.62-77.38 39.6-119.65 38.13z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 394.25,
    cy: 760.32,
    rx: 303.97,
    ry: 41.12,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M632.51 258.88s-9.41-18.57-8.14-24.09-6.62-17.31-6.62-17.31l.51-19.56s-1.09 2-6.77 3.75c-.48-.63-1-1.25-1.54-1.84a40.32 40.32 0 0 0-6.82-5.69l-10-21.58-9.67-14.81s-15.25-31-31-37.84l-2.48-4.85a.38.38 0 0 0 .15-.49l-2.52-4.93a.39.39 0 0 0-.49-.18l-2.41-4.72a37.91 37.91 0 0 0-7-16.89c-.25-.35-.52-.67-.78-1l3.92-.14c3.44-.13 7.28-.43 9.59-3a8.77 8.77 0 0 0 1.79-3.3 14 14 0 0 0 .58-2.93v-.44-1-.8-.64c0-.21-.11-.69-.17-1 0-.13 0-.26-.08-.39a11.66 11.66 0 0 0-.31-1.16 1.55 1.55 0 0 1-.07-.23c-.14-.4-.29-.8-.46-1.19a1.11 1.11 0 0 1-.07-.16c-.18-.39-.38-.77-.59-1.14l-.06-.12a4 4 0 0 0-.25-.45c-2.71-4.26-7.47-6.75-12-9a138.69 138.69 0 0 0-13-6 70 70 0 0 0-51 .72 20.19 20.19 0 0 0-4.54 2.42 23.46 23.46 0 0 0-4.95 5.82l-7.75 11.45a16.18 16.18 0 0 0-2.51 4.62c-1.45 5.44 3.1 10.89 2.59 16.5-.26 2.79-1.76 5.35-2.05 8.14-.37 3.6 1.3 7.07 2.93 10.32l11.09 22c-.59 2.89-1.24 5.85-1.95 8.71-5.11 5.28-6.83 8.16-7.3 9.72l-.15.08a9 9 0 0 0-2.56 2.5L447.06 167s-18.32 4.76-22.13 10.79c0 0-28.75-1.26-28.5 38.89 0 0-1.27 15.06-2 17.07s0 22.33 0 22.33l-.34 41.16s-1.1 21.83 0 29.61 2.37 37.39 2.37 37.39 6.87 28.86 4.33 39.15c-2.44 9.85 0 31.39 4 31.48.76 1.57 1.63 2.34 2.58 1.9a11 11 0 0 1 1.27-.46v24.59s-4.95 34.45.6 41c-3.68 5.24-8 14.18-9.1 16.53l-38.9-2.09-4.95 1.39-4.54 1.27-2.75 63.27 1.1.08-.08 1.93 2.6.19-3.62 63.72 53.85 4.43c-2.37 5.31-5.12 11-6.19 11.55-2 1-6.36-2-7.38-.76s-4.07 2.76-7.63 2-5.85 3.26-5.85 3.26.52.46 1.3 1.31c-5.78-.7-13.09 2.4-17.06 4.4-1.78.9-2.89 1.57-2.89 1.57h-10.5l5.77 36.81 4.07 2.78 1 29s16.28 50.19 23.74 49.86a3.37 3.37 0 0 0 2.51-1.26c4-4.62 1.23-20.49 1.23-20.49v-26.42s6.1-2.68 5.42-4.69 9.84-24 10.78-26a.17.17 0 0 0 .08-.16c0-2.26 4.58-4.77 4.32-5.77s11.2-7.28 12-12.8 8.39-2.51 8.39-2.51l9.66-11.1c.29 13.53.84 23 1.79 25.4 4.58 11.55 6.36 29.62 6.36 29.62s-2.8 13.8 0 18.32c1.72 2.76 5.72 5.72 8.5 8.17-2.89 8.76-2.48 27.38-2.48 27.38v10.7l21.37 6s.67-5.35 1.69-5.35 14.59 10.37 14.59 10.37 52.24.67 65.46 0c5-.25 6.36-2.4 5.59-5-1.27-4.33-8.4-9.94-14.74-10.37-10.18-.67-23.07-11.37-23.07-11.37s1-2.35-4.41-5.69c-3.74-2.3-14.09-11.61-20.49-17.06.3-.41.61-.82.9-1.26 0 0-8.65-12-6.86-17.32s-.77-13-.77-13-4.83-14.81-4.83-22.34c0-4.77-.72-31.9-1.24-51.14l4.46.37.09-1.92 2 .18 18.91 1.74-.58-20.21c9.11-4 16.69-7.71 19.83-10.08 10.68-8 19.84-8.53 19.84-8.53s21.62-11.54 24.93-16.31 3-39.4 3-39.4l-1.78-74.22v-.06s-1.52-35.88-4.58-43.66c-1.12-2.88-3.89-12.48-6.92-23.44a18.11 18.11 0 0 1 5.22.22c.11 2.68.18 4.52.18 5.15 0 4.26 6.1 7.88 6.1 7.88l-4.32-96v-65.31c13.32 4.24 45.53 5.56 45.53 5.56 23.21-1.22 17.62-22.34 17.62-22.34zM506.87 176.4h-.07a66.59 66.59 0 0 1 1.85-7.45zm-87.42 329.27c7.89 1.3 17 .92 17.69-.61.07-.15.16-.42.28-.77.25.44.49.89.74 1.35l-.77 14.48v.33l-26-1.4c1.82-7.75 5.26-11.53 8.06-13.38zm86.67 73.06l-.67-23.45c1.16-4.32 2.2-8.24 3.09-11.6.4 2.79.74 5.36 1 7.73 2.46 22.25-1.17 26.59-3.42 27.32zm74-351.58c-1.49.57-7.16-3-12.54-6.7 0-.68.05-1.35.08-2 .76-15.31-24.17-24.84-31.8-26.6a27.41 27.41 0 0 1-5.36-2 125 125 0 0 1-11.84-6.69l.1-.29s-9.84-6.23-10.05-14a132.92 132.92 0 0 1 8.46-20.53c.19-.39.4-.8.6-1.19a39.25 39.25 0 0 0 12.8-6.78c1.53 20 30.47 37.21 30.47 37.21l3.09 5 .73 1.18c-1.56.92-2.31 1.66-1.78 2.09 2.2 1.76 7.52 11.72 9.72 15.93.6 1.14 1 1.85 1 1.85s4.73 12.87 7.44 23.64a2 2 0 0 0-1.14-.12z",
    transform: "translate(-163.24 -49.28)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M428.06 126l-.34.45-1.16 1.55-22.25 15.72-4.72-7.76-3-5s-44.35-26.6-25.28-52.24 47.25 32.5 47.25 32.5z",
    fill: "#ffc5d3"
  }), _react.default.createElement("rect", {
    x: 547.05,
    y: 112.1,
    width: 0.76,
    height: 6.26,
    rx: 0.38,
    ry: 0.38,
    transform: "rotate(-26.73 362.193 434.107)",
    fill: "#3a3768"
  }), _react.default.createElement("rect", {
    x: 521.39,
    y: 119.37,
    width: 0.43,
    height: 2.06,
    rx: 0.21,
    ry: 0.21,
    transform: "rotate(-26.73 336.351 439.283)",
    fill: "#3a3768"
  }), _react.default.createElement("rect", {
    x: 523.41,
    y: 122.65,
    width: 0.48,
    height: 3.59,
    rx: 0.24,
    ry: 0.24,
    transform: "rotate(-26.73 338.393 443.326)",
    fill: "#3a3768"
  }), _react.default.createElement("rect", {
    x: 525.6,
    y: 126.97,
    width: 0.46,
    height: 3.62,
    rx: 0.23,
    ry: 0.23,
    transform: "rotate(-26.73 340.584 447.67)",
    fill: "#3a3768"
  }), _react.default.createElement("rect", {
    x: 528.35,
    y: 104.91,
    width: 25.4,
    height: 51.62,
    rx: 2.24,
    ry: 2.24,
    transform: "rotate(-26.73 355.796 449.617)",
    fill: "#3a3768"
  }), _react.default.createElement("path", {
    d: "M373.16 56.39a.9.9 0 0 0-.4 1.22l.08.17a.91.91 0 0 1-.4 1.23l-9.62 4.84a.9.9 0 0 1-1.22-.4l-.09-.17a.91.91 0 0 0-1.22-.41l-1.87.95a1.72 1.72 0 0 0-.77 2.33l20.44 40.57a1.75 1.75 0 0 0 2.34.77l16.78-8.45a1.75 1.75 0 0 0 .77-2.34l-20.45-40.59a1.74 1.74 0 0 0-2.34-.77z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 527.92,
    y: 109.31,
    width: 3.55,
    height: 0.72,
    rx: 0.36,
    ry: 0.36,
    transform: "rotate(-26.73 344.437 428.554)",
    fill: "#e6e8ec"
  }), _react.default.createElement("circle", {
    cx: 368.88,
    cy: 59.17,
    r: 0.41,
    fill: "#e6e8ec"
  }), _react.default.createElement("path", {
    d: "M387.56 212l-6.25 167.72s21-7 24.25-1.75-3.5-84-3.5-84z",
    fill: "#5f5570"
  }), _react.default.createElement("path", {
    d: "M387.56 212l-6.25 167.72s21-7 24.25-1.75-3.5-84-3.5-84z",
    opacity: 0.15
  }), _react.default.createElement("path", {
    d: "M388.56 764.83c-13 .67-64.33 0-64.33 0s-13.34-10.33-14.34-10.33-1.66 5.33-1.66 5.33l-21-6v-10.66s-.67-30.35 5.66-31.67 34.34 0 34.34 0c1-.33 20 17.67 25.33 21s4.33 5.67 4.33 5.67 12.67 10.66 22.67 11.33c6.23.42 13.24 6 14.49 10.33.76 2.61-.59 4.75-5.49 5z",
    fill: "#bc8487"
  }), _react.default.createElement("path", {
    d: "M388.56 764.83c-13 .67-64.33 0-64.33 0s-13.34-10.33-14.34-10.33-1.66 5.33-1.66 5.33l-21-6v-10.45l19.66 7.12 15.67 9.33h71.49c.76 2.61-.59 4.75-5.49 5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M330.19 749.17s16-15.33 26.7-11",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M228.89 692.83c.67 2-5.33 4.67-5.33 4.67v26.33s2.72 15.81-1.21 20.42a3.29 3.29 0 0 1-2.46 1.25c-7.33.33-23.33-49.67-23.33-49.67l-1-28.89-4-2.77-5.67-36.67h10.34s1.09-.67 2.84-1.57c5-2.55 15.47-7 21.16-2.76l19.33 43.55s-11.33 24.11-10.67 26.11z",
    fill: "#bc8487"
  }), _react.default.createElement("path", {
    d: "M222.35 744.25a3.29 3.29 0 0 1-2.46 1.25c-7.33.33-23.33-49.67-23.33-49.67l-1-28.89-4-2.77-5.67-36.67h10.34s1.09-.67 2.84-1.57l2.49 37.57 1.33 32.33s12.56 35.2 19.46 48.42z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M407.81 556.25c-3.25 4.75-24.5 16.25-24.5 16.25s-9 .5-19.5 8.5c-5.43 4.14-24.3 12.35-41.25 19.32-15.83 6.51-30 11.93-30 11.93l-16.32 19-12.43 14.47s-7.5-3-8.25 2.5-12 11.75-11.75 12.75-4.25 3.5-4.25 5.75-16.75-16.25-16.5-27.5-8.5-19-8.5-19 2.25-4 5.75-3.25 6.5-.75 7.5-2 5.25 1.75 7.25.75 10-20.75 10-20.75l31.17-20.91 62-41.56 2.86-1.92s8.25 3.78 4.9-27.19c-.65-6-1.74-13.29-3.4-22.17-10.25-54.75 26.5-61 26.5-61l32.25 10.75 7.75 12v.06l1.75 73.94s.22 34.53-3.03 39.28z",
    fill: "#433a59"
  }), _react.default.createElement("path", {
    d: "M322.31 591.25s.1 3.55.25 9.07c-15.83 6.51-30 11.93-30 11.93l-16.32 19c-.27-15.75-.21-36.21 0-57.18l62-41.56c-7.67 28.43-15.93 58.74-15.93 58.74zM409.06 443v.06l-48.5.94s-8.5 33.25-9.75 40.25c-.31 1.72-2.19 9.07-4.85 19.17-.65-6-1.74-13.29-3.4-22.17-10.25-54.75 26.5-61 26.5-61L401.31 431z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M281.31 352.25l-6.25 120s-4.5 176.25 0 187.75 6.25 29.5 6.25 29.5-2.75 13.75 0 18.25 11.5 9.5 11.25 12 26.75 16 40.75-5.5c0 0-8.5-12-6.75-17.25s-.75-13-.75-13-4.75-14.75-4.75-22.28-1.75-70.5-1.75-70.5 27.25-100 28.5-107 9.75-40.25 9.75-40.25l51.5-1s-1.5-35.75-4.5-43.5-17.75-64.5-17.75-64.5z",
    fill: "#433a59"
  }), _react.default.createElement("path", {
    fill: "#7b728f",
    d: "M195.36 469.89l-4.47 1.28-.18 4.42 134.02 1.73v-1.74l-129.37-5.69z"
  }), _react.default.createElement("path", {
    d: "M353.44 101.87c-19.5 39.55-7.39 47.82-5.46 48.84-4.13-1.92-57.81-27.14-50.75-33.54 4.59-4.17 8.52-22.31 10.83-35.31 1.37-7.76 2.17-13.69 2.17-13.69l56.33 10.33c-5.46 8.8-9.8 16.55-13.12 23.37z",
    fill: "#ffc5d3"
  }), _react.default.createElement("path", {
    d: "M427.76 126.45L426.6 128l-22.29 15.72-4.72-7.76c6.87-4 27.47-11 27.47-11z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M448.31 162.5c-2 7-35.75 0-35.75 0l-3.5-5.5s-.35-.7-.94-1.84c-2.16-4.19-7.39-14.11-9.55-15.87-2.75-2.25 29.5-13.25 29.5-13.25l9.88 21.5a39.82 39.82 0 0 1 6.7 5.67c2.5 2.71 4.57 6.1 3.66 9.29z",
    fill: "#e5e8ef"
  }), _react.default.createElement("path", {
    d: "M392.31 165.72s20 15.78 23 14.64 51.5 31.61 51.5 31.61 5.5 21-17.25 22.25c0 0-48.25-2-50.25-9s-7-59.5-7-59.5z",
    fill: "#5f5570"
  }), _react.default.createElement("path", {
    d: "M337.81 134l-21.75 22.5 30.5 194 12-7s31 13.75 33.5 1 1.81-63 1.81-63l-4.06-90.78s-14.25-31.75-14.25-32.75-20.55-16.5-20.55-16.5l-9.7-7.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M337.81 131l-21.75 22.5 30.5 194 12-7s31 13.75 33.5 1 1.81-63 1.81-63l-4.06-90.78s-14.25-31.75-14.25-32.75-20.55-16.5-20.55-16.5l-9.7-7.5z",
    fill: "#e5e8ef"
  }), _react.default.createElement("path", {
    d: "M339.06 134.25l-6 12.25 6 6.33s21.5 43.42 17.25 69.17l4.5 84.75 14.5 14.25 11.5-13.28-5.5-77s-14.75-63.5-30.25-83.25l-4.5-17.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M339.06 132.25l-6 12.25 6 6.33s21.5 43.42 17.25 69.17l4.5 84.75 14.5 14.25 11.5-13.28-5.5-77s-14.75-63.5-30.25-83.25l-4.5-17.5z",
    fill: "#bc8487"
  }), _react.default.createElement("path", {
    d: "M366.56 78.5c-5.46 8.8-9.76 16.55-13.12 23.37a38.45 38.45 0 0 1-10.9 1.57c-12.36 0-19.48-8.55-26.48-17.63-1.6-2.06-6.86-1.58-8-4 1.37-7.76 2.17-13.69 2.17-13.69z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M380.87 64.1a38.33 38.33 0 1 1-7.29-22.49 38.33 38.33 0 0 1 7.29 22.49z",
    fill: "#ffc5d3"
  }), _react.default.createElement("path", {
    d: "M330.31 149.5l-31.5-38s-2.91-1.17 6.92-11.46c0 0 36.1 28.14 38.34 32.92s-13.76 16.54-13.76 16.54z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M329.31 147.5l-31.5-38s-2.91-1.17 6.92-11.46c0 0 36.1 28.14 38.34 32.92s-13.76 16.54-13.76 16.54z",
    fill: "#e5e8ef"
  }), _react.default.createElement("path", {
    d: "M409.06 389.35s-6-3.6-6-7.85-3-64.25-3-64.25-4.4-35.81-9-64.27c-2.7-16.77-5.47-31-7.43-33.82l-.08-.12c-5.25-6.75-4.25-39.75-37-88 .44.3 11.73 8.22 20 12.2a27.42 27.42 0 0 0 5.27 2c7.5 1.75 32 11.25 31.25 26.5s1.75 50.25 1.75 50.25v71.73z",
    fill: "#5f5570"
  }), _react.default.createElement("path", {
    d: "M448.31 162.5c-2 7-35.75 0-35.75 0l-3.5-5.5s-.35-.7-.94-1.84a.67.67 0 0 1-.05-.12c19.61 1.37 30.54-.06 36.58-1.83 2.5 2.71 4.57 6.1 3.66 9.29z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M409.06 157s10.5 29 9 36.25S442.31 229 442.31 229l24.5-17s-9.25-18.5-8-24-6.5-17.25-6.5-17.25l.5-19.48s-4.5 8.45-43.75 5.73z",
    fill: "#5f5570"
  }), _react.default.createElement("path", {
    d: "M373.58 41.61l-19 .72a21.16 21.16 0 0 0-5.5.69c-6.79 2.09-9.92 9.31-10.17 15.8s-4 13.76-11.27 14.33a2.81 2.81 0 0 1-2.07-.46 3.42 3.42 0 0 1-.88-1.77 38.7 38.7 0 0 0-4.78-10.68c-3 .54-5.22 3.39-6 6.37s-.57 6.12-.56 9.21a59.61 59.61 0 0 1-1.13 11.69 38.33 38.33 0 1 1 61.39-45.9z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M348.09 42.02a21.16 21.16 0 0 1 5.5-.69l23.07-.86c3.38-.13 7.15-.43 9.42-2.94a8.81 8.81 0 0 0 1.76-3.29 14.2 14.2 0 0 0-1.49-11.63c-2.67-4.25-7.35-6.72-11.81-9a137.23 137.23 0 0 0-12.77-6 68 68 0 0 0-50.1.72 20.22 20.22 0 0 0-4.46 2.39 23.05 23.05 0 0 0-4.86 5.8l-7.59 11.44a15.75 15.75 0 0 0-2.39 4.62c-1.43 5.43 3 10.86 2.54 16.45-.26 2.78-1.73 5.33-2 8.11-.36 3.59 1.28 7 2.89 10.27l13.34 26.91a59.62 59.62 0 0 0 3.23-19.5c0-3.09-.26-6.23.56-9.21s3-5.83 6-6.37a38.57 38.57 0 0 1 4.79 10.68 3.38 3.38 0 0 0 .88 1.77 2.8 2.8 0 0 0 2.07.46c7.31-.57 11-7.77 11.27-14.33s3.36-13.71 10.15-15.8z",
    fill: "#8f7080"
  }), _react.default.createElement("path", {
    fill: "#7b728f",
    d: "M190.89 471.17l9.34-2.67 140.83 7.67-15.5 2-134.67-7z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M190.89 471.17l9.34-2.67 140.83 7.67-15.5 2-134.67-7z"
  }), _react.default.createElement("path", {
    fill: "#7b728f",
    d: "M344.89 611.17l-18.58-1.73-6.52-.6V505.5l1.72-23.99.38-5.34h19.17l3.83 135z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M339.81 607.5l-14.82-1.64-5.2-.57v-97.98l1.37-22.74.3-5.07h15.29l3.06 128z"
  }), _react.default.createElement("path", {
    d: "M238.18 471.17s9.25-20.29 13.13-20.92 11 0 11 0l-.63 5.88s-9.5.75-12.5 16.62z",
    fill: "#7b728f"
  }), _react.default.createElement("path", {
    d: "M238.18 471.17s9.25-20.29 13.13-20.92 11 0 11 0l-.63 5.88s-9.5.75-12.5 16.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M274.06 448.13s24.87 12.37 21.62 26.87l-13.5-.75s-6.5-21.62-11.62-22.75 3.5-3.37 3.5-3.37z",
    fill: "#7b728f"
  }), _react.default.createElement("path", {
    d: "M366.56 252.25v.73l-.5 83.27s-12.75 70-16.25 72.75-80.25-4.75-80.25-4.75L234.81 170c-.25-40 28-38.75 28-38.75 3.75-6 21.75-10.75 21.75-10.75l10-9.75.32-.45a8.89 8.89 0 0 1 2.52-2.49c2.06-1.19 3.37.38 4.12 1.93a11.63 11.63 0 0 1 .78 2.27c40.51 29.71 64.26 140.24 64.26 140.24z",
    fill: "#5f5570"
  }), _react.default.createElement("path", {
    d: "M365.56 253.25v.73c-12.57-23-61-110.14-74.25-114.48l5.1-3.5s3.4-2-2.85-4c0 0-9.75 1.25-10-10.5l10.32-10.2 2.52-2.49 4.12 1.93a11.63 11.63 0 0 1 .78 2.27c40.51 29.71 64.26 140.24 64.26 140.24z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M366.56 252.25v.73c-12.57-23-61-110.14-74.25-114.48l5.1-3.5s3.4-2-2.85-4c0 0-9.75 1.25-10-10.5l10.32-10.2 2.52-2.49 4.12 1.93a11.63 11.63 0 0 1 .78 2.27c40.51 29.71 64.26 140.24 64.26 140.24z",
    fill: "#433a59"
  }), _react.default.createElement("path", {
    d: "M384.64 220.12l-.08-.12c-5.25-6.75-4.25-39.75-37-88 .44.3 11.73 8.22 20 12.2l-2.31 7.62 5 2.67z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M383.64 219.12l-.08-.12c-5.25-6.75-4.25-39.75-37-88 .44.3 11.73 8.22 20 12.2l-2.31 7.62 5 2.67z",
    fill: "#433a59"
  }), _react.default.createElement("path", {
    d: "M345.12 123.3l-2.05 8.66s1.5 8.67 10.49 9.42l1.45-4.13s-9.7-6.22-9.89-13.95z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M345.12 122.3l-2.05 8.66s1.5 8.67 10.49 9.42l1.45-4.13s-9.7-6.22-9.89-13.95z",
    fill: "#e5e8ef"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M332.19 477.57l-5.88 131.87-6.52-.6V505.5l1.72-23.99 10.68-3.94z"
  }), _react.default.createElement("path", {
    fill: "#7b728f",
    d: "M192.23 528.5l-4 71.33 136 11.34 5.96-133.6-137.96 50.93z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M189.23 536.17l2.66-63 139.3 6.4-6.63 66.6-135.33-10z"
  }), _react.default.createElement("path", {
    fill: "#7b728f",
    d: "M188.23 534.17l2.66-63 139.3 6.4-6.63 66.6-135.33-10z"
  }), _react.default.createElement("path", {
    fill: "#c3bbc8",
    d: "M246.81 534.25h16.75v19.5h-16.75z"
  }), _react.default.createElement("path", {
    d: "M249.31 406.5l-2.5 6.75s-5.25 37 1.25 41.5 25.75 4.75 26.75 2.5 8-27.75 8-27.75 6.25 18.75 9.5 17.25-7.5-37.14-7.5-37.14z",
    fill: "#ffc5d3"
  }), _react.default.createElement("path", {
    d: "M246.81 378.5v35.75s26.5 5 38-3.64c0 0-10.75-34.61-6.75-43.36s-31.25 11.25-31.25 11.25z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M246.81 377.5v35.75s26.5 5 38-3.64c0 0-10.75-34.61-6.75-43.36s-31.25 11.25-31.25 11.25z",
    fill: "#e5e8ef"
  }), _react.default.createElement("path", {
    d: "M243.81 168.25l-7 3.75s-1.25 15-2 17 0 22.25 0 22.25l-.34 41s-1.08 21.75 0 29.5 2.29 37.25 2.29 37.25 6.76 28.75 4.26 39 .25 33.25 4.5 31.25 43.5-9.75 45.5-11.25 1-15.5 0-17.25-7-25.5-6.5-31-1.75-53.75-1.75-53.75 3.75-51.5 5.25-63.5-3-47.25-7-47.75-15.71-27.75-37.21 3.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M241.81 166.25l-7 3.75s-1.25 15-2 17 0 22.25 0 22.25l-.34 41s-1.08 21.75 0 29.5 2.29 37.25 2.29 37.25 6.76 28.75 4.26 39 .25 33.25 4.5 31.25 43.5-9.75 45.5-11.25 1-15.5 0-17.25-7-25.5-6.5-31-1.75-53.75-1.75-53.75 3.75-51.5 5.25-63.5-3-47.25-7-47.75-15.71-27.75-37.21 3.5z",
    fill: "#5f5570"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M317.42 55.49c-3 .54-5.22 3.39-6 6.37s-.57 6.12-.56 9.21a59.61 59.61 0 0 1-3.22 19.5l-13.35-26.91c-.26-.53-.53-1.08-.79-1.63a36.37 36.37 0 0 0 2.29 5.38l13.35 26.91a59.61 59.61 0 0 0 3.22-19.5c0-3.09-.25-6.23.56-9.21s3-5.83 6-6.37a40.13 40.13 0 0 1 2.59 4.73 39 39 0 0 0-4.09-8.48zM386.59 23.04a14.16 14.16 0 0 1-.24 7.45 8.83 8.83 0 0 1-1.77 3.29c-2.27 2.51-6 2.81-9.42 2.94l-23.06.86a21.23 21.23 0 0 0-5.51.69c-6.78 2.09-9.92 9.31-10.17 15.8s-4 13.76-11.27 14.33a2.81 2.81 0 0 1-2.07-.46c.23.65.45 1.31.64 2a3.3 3.3 0 0 0 .87 1.77 2.81 2.81 0 0 0 2.07.46c7.32-.57 11-7.77 11.27-14.33s3.39-13.71 10.17-15.8a21.23 21.23 0 0 1 5.51-.69l23.06-.86c3.38-.13 7.15-.43 9.42-2.94a8.83 8.83 0 0 0 1.77-3.29 14.2 14.2 0 0 0-1.27-11.22z"
  })), _react.default.createElement("path", {
    d: "M349.04 433.19s8.66-4.5 12-4.25 33.33 38.39 33.33 38.39zM260.21 175.07s-15.83 6.76-15.41 11.43 15.41-11.43 15.41-11.43zM252.5 197.17s-16.61 21.24-12.94 21.95 12.94-21.95 12.94-21.95zM308.06 229s1.52 47.5-10.66 53.5zM244.76 355.83s11.72-6.66 14.41-5.33-14.41 5.33-14.41 5.33zM246.81 365.04s7.4.53 10.91-1-10.91 1-10.91 1zM423.46 190.13s9.18 26.37 14.47 26.37M292.92 695.17s17.22-4.67 19.76 0-19.76 0-19.76 0zM238.18 625.93s-4.29 6.57 1.38 8.57-1.38-8.57-1.38-8.57zM352.56 534.25s13 11.58 19.14 11.92-19.14-11.92-19.14-11.92z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M864.6 59.83s-84.19-5.11-74.27 53.89c0 0-2 10.43 7.48 15.17 0 0 .15-4.38 8.64-2.89a39.41 39.41 0 0 0 9.14.44 19.08 19.08 0 0 0 11.17-4.59s23.67-9.77 32.87-48.46c0 0 6.81-8.44 6.54-10.61l-14.21 6.07s4.86 10.25 1 18.77c0 0-.46-18.4-3.19-18-.56.09-7.39 3.55-7.39 3.55s8.36 17.86 2.05 30.83c0 0 2.4-22-4.65-29.54l-10 5.84s9.77 18.44 3.15 33.49c0 0 1.7-23.08-5.25-32.07l-9.06 7.07s9.17 18.18 3.58 30.66c0 0-.73-26.87-5.55-28.9 0 0-7.92 7-9.13 9.86 0 0 6.28 13.2 2.38 20.16 0 0-2.39-17.9-4.35-18 0 0-7.9 11.86-8.72 20 0 0 .34-12.1 6.81-21.13 0 0-7.64 1.31-12.1 6.27 0 0 1.23-8.39 14-9.12 0 0 6.52-9 8.27-9.55 0 0-12.75-1.06-20.48 2.36 0 0 6.81-7.91 22.82-4.31l9-7.3s-16.79-2.3-23.9.24c0 0 8.19-7 26.31-1.9l9.74-5.83s-14.31-3.08-22.83-2c0 0 9-4.85 25.68.41l7-3.13s-10.48-2.06-13.55-2.38-3.24-1.18-3.24-1.18a36.39 36.39 0 0 1 19.7 2.19s14.8-5.49 14.54-6.38zM697.49 48.52s-38-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.9-1.31a17.05 17.05 0 0 0 4.14.2 8.62 8.62 0 0 0 5-2.08s10.69-4.42 14.85-21.9c0 0 3.08-3.81 3-4.79l-6.44 2.74s2.19 4.63.47 8.48c0 0-.21-8.31-1.45-8.12-.25 0-3.33 1.61-3.33 1.61s3.77 8.07.92 13.93c0 0 1.09-9.94-2.1-13.35l-4.51 2.64s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.09 3.2s4.14 8.21 1.61 13.85c0 0-.33-12.14-2.5-13.06 0 0-3.58 3.16-4.13 4.46 0 0 2.84 6 1.08 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.4 19.4 0 0 1 3.08-9.54 10.72 10.72 0 0 0-5.47 2.83s.56-3.79 6.35-4.12c0 0 2.95-4.07 3.74-4.31 0 0-5.76-.49-9.26 1.06 0 0 3.08-3.57 10.31-2l4-3.3s-7.59-1-10.8.11c0 0 3.7-3.16 11.88-.86l4.41-2.63s-6.47-1.39-10.32-.89c0 0 4.06-2.19 11.61.18l3.14-1.41s-4.73-.93-6.12-1.08-1.46-.53-1.46-.53a16.51 16.51 0 0 1 8.9 1s6.78-2.43 6.66-2.85z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 846.6,
    cy: 722.88,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 26.93,
    cy: 655.15,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 827.86,
    cy: 634.75,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 131.09,
    cy: 679.56,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 707.82,
    cy: 683.47,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 787.66,
    cy: 771.64,
    rx: 40.21,
    ry: 6.8,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M804.28 760.52a11.68 11.68 0 0 0 3.83-5.78c.5-2.3-.48-5-2.68-5.89-2.46-.94-5.09.76-7.08 2.48s-4.28 3.69-6.89 3.33a10.5 10.5 0 0 0 3.25-9.82 4.13 4.13 0 0 0-.91-2c-1.36-1.46-3.84-.83-5.47.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.3-.08-4.69-.1-7s-.65-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.08-4.94.15-6.53 1.86-2 2.12-1.47 5.69.25 8s4.35 3.8 6.77 5.42a14.89 14.89 0 0 1 4.83 4.61 3.83 3.83 0 0 1 .36.82h14.66a40.9 40.9 0 0 0 9.03-6.26zM132.48 567.72s5.5 7.18-2.53 18-14.65 20-12 26.76c0 0 12.12-20.14 22-20.42s3.38-12.2-7.47-24.34z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M132.48 567.72a8.63 8.63 0 0 1 1.12 2.25c9.62 11.3 14.75 21.85 5.5 22.12-8.61.24-18.94 15.64-21.42 19.53a9.24 9.24 0 0 0 .29.89s12.12-20.14 22-20.42 3.36-12.23-7.49-24.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M142.69 576.9c0 2.53-.28 4.58-.63 4.58s-.63-2-.63-4.58.35-1.34.7-1.34.56-1.19.56 1.34z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M146.2 579.92c-2.22 1.21-4.16 1.94-4.32 1.64s1.49-1.54 3.71-2.75 1.35-.33 1.51 0 1.32-.09-.9 1.11z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M103.47 567.72s-5.5 7.18 2.53 18 14.65 20 12 26.76c0 0-12.11-20.14-22-20.42s-3.38-12.2 7.47-24.34z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M103.47 567.72a8.82 8.82 0 0 0-1.13 2.25c-9.62 11.3-14.74 21.85-5.5 22.12 8.62.24 18.95 15.64 21.43 19.53a7.16 7.16 0 0 1-.3.89s-12.11-20.14-22-20.42-3.35-12.23 7.5-24.37z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M93.25 576.9c0 2.53.29 4.58.64 4.58s.63-2 .63-4.58-.35-1.34-.7-1.34-.57-1.19-.57 1.34z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M89.76 579.92c2.22 1.21 4.15 1.94 4.32 1.64s-1.5-1.54-3.72-2.75-1.34-.33-1.51 0-1.32-.09.91 1.11z",
    fill: "#ffd037"
  }), _react.default.createElement("path", {
    d: "M95 611.6s15.36-.47 20-3.77 23.63-7.23 24.77-1.94 23.09 26.29 5.75 26.43-40.3-2.7-44.92-5.52-5.6-15.2-5.6-15.2z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M145.82 630.48c-17.34.14-40.3-2.7-44.92-5.52-3.51-2.14-4.92-9.83-5.39-13.38H95s1 12.39 5.59 15.2 27.58 5.66 44.92 5.52c5 0 6.73-1.82 6.64-4.46-.7 1.61-2.61 2.61-6.33 2.64z",
    opacity: 0.2
  }));
};

UndrawBusinessman.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawBusinessman;
exports.default = _default;