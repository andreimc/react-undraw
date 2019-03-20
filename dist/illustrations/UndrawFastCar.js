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

var UndrawFastCar = function UndrawFastCar(_props) {
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
    viewBox: "0 0 1034.75 706.69",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M654.48 197.74H526.13v-27.76a6.64 6.64 0 0 0-6.64-6.64H481.8v-29.57a4.18 4.18 0 0 0-4.18-4.18h-48.55a4.18 4.18 0 0 0-4.18 4.18v29.58h-44.31a6.64 6.64 0 0 0-6.64 6.64v27.76H251.55a1.35 1.35 0 0 0-1.34 1.35v368.51a1.35 1.35 0 0 0 1.34 1.35h81.34a1.35 1.35 0 0 0 1.35-1.35v-49.58a1.36 1.36 0 0 1 1.35-1.35h34.36a1.36 1.36 0 0 1 1.35 1.35v49.58a1.35 1.35 0 0 0 1.34 1.35h160.73a1.36 1.36 0 0 0 1.35-1.35v-49.58a1.35 1.35 0 0 1 1.34-1.35h34.36a1.35 1.35 0 0 1 1.35 1.35v49.58a1.36 1.36 0 0 0 1.35 1.35h81.34a1.36 1.36 0 0 0 1.35-1.35V199.09a1.36 1.36 0 0 0-1.33-1.35zm-334.8 301.72a1.34 1.34 0 0 1-1.34 1.34H268.1a1.34 1.34 0 0 1-1.35-1.34v-17.11a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35H268.1a1.34 1.34 0 0 1-1.35-1.35v-17.15a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm0-44.33a1.35 1.35 0 0 1-1.34 1.35H268.1a1.35 1.35 0 0 1-1.35-1.35v-17.16a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35H268.1a1.34 1.34 0 0 1-1.35-1.35v-17.1a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm0-44.33a1.35 1.35 0 0 1-1.34 1.35H268.1a1.35 1.35 0 0 1-1.35-1.35v-17.16a1.34 1.34 0 0 1 1.35-1.34h50.27a1.34 1.34 0 0 1 1.34 1.34zm0-44.33a1.34 1.34 0 0 1-1.34 1.34H268.1a1.34 1.34 0 0 1-1.35-1.34v-17.16a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35H268.1a1.34 1.34 0 0 1-1.35-1.35v-17.1a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm119.11 266a1.34 1.34 0 0 1-1.35 1.34H387.2a1.35 1.35 0 0 1-1.35-1.34v-17.1a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H387.2a1.35 1.35 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35H387.2a1.36 1.36 0 0 1-1.35-1.35v-17.15a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H387.2a1.35 1.35 0 0 1-1.35-1.35v-17.09a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35H387.2a1.36 1.36 0 0 1-1.35-1.35v-17.15a1.35 1.35 0 0 1 1.35-1.34h50.24a1.34 1.34 0 0 1 1.35 1.34zm0-44.33a1.34 1.34 0 0 1-1.35 1.34H387.2a1.35 1.35 0 0 1-1.35-1.34v-17.15a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H387.2a1.35 1.35 0 0 1-1.35-1.35v-17.09a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm81.39 266a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.09a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.14a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.08a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.34h50.24a1.34 1.34 0 0 1 1.35 1.34zm0-44.33a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.14a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.08a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm119.11 266a1.35 1.35 0 0 1-1.35 1.34H587.7a1.34 1.34 0 0 1-1.35-1.34v-17.08a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35H587.7a1.34 1.34 0 0 1-1.35-1.35v-17.12a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.33a1.36 1.36 0 0 1-1.35 1.35H587.7a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35H587.7a1.34 1.34 0 0 1-1.33-1.32v-17.1a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.33a1.36 1.36 0 0 1-1.35 1.35H587.7a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.34 1.34 0 0 1 1.35-1.34h50.24a1.35 1.35 0 0 1 1.35 1.34zm0-44.33a1.35 1.35 0 0 1-1.35 1.34H587.7a1.34 1.34 0 0 1-1.35-1.34v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35H587.7a1.34 1.34 0 0 1-1.33-1.32v-17.1a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zM267.15 44.24l-15.52 9.84 9.42-17.14a15.35 15.35 0 0 0-9.38-3.35h-.25a18.09 18.09 0 0 1-3.22-.24l-5.26 3.33 2.25-4.1a18.66 18.66 0 0 1-9.2-7l-9.41 6 5.94-10.81c-5.5-6.61-12.92-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.89a18 18 0 0 1-16 8.6h-.52c-10.81 0-19.57 12.26-19.57 27.37s8.8 27.38 19.61 27.38a14.72 14.72 0 0 0 6.81-1.71 28.21 28.21 0 0 1 23.69-.46 24.66 24.66 0 0 0 20.14 0 28.23 28.23 0 0 1 23.47.46 14.72 14.72 0 0 0 6.75 1.71c10.81 0 19.57-12.26 19.57-27.38a34.7 34.7 0 0 0-4.09-16.73z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M237.9 84.29a28.89 28.89 0 0 0-16.77 1.82 24.69 24.69 0 0 1-20.13 0 28.28 28.28 0 0 0-23.69.46 14.61 14.61 0 0 1-6.82 1.71c-9.6 0-17.59-9.67-19.25-22.43a18.43 18.43 0 0 0 4.8-5.18c5.63-9.07 14.35-14.89 24.14-14.89s18.4 5.75 24 14.73a18.48 18.48 0 0 0 15.95 8.76h.25c7.68-.05 14.3 6.08 17.52 15.02z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M814.13 17.03l-7.76 4.91 4.7-8.55a7.67 7.67 0 0 0-4.68-1.67h-.12a8.6 8.6 0 0 1-1.61-.12l-2.62 1.67 1.12-2a9.4 9.4 0 0 1-4.59-3.48l-4.69 3 3-5.39A13.71 13.71 0 0 0 786.37 0c-4.88 0-9.23 2.91-12 7.43a9 9 0 0 1-8 4.29h-.26c-5.39 0-9.76 6.11-9.76 13.65s4.37 13.65 9.76 13.65a7.32 7.32 0 0 0 3.4-.85 14.08 14.08 0 0 1 11.81-.23 12.33 12.33 0 0 0 10.05 0 14.11 14.11 0 0 1 11.71.23 7.29 7.29 0 0 0 3.36.83c5.39 0 9.76-6.11 9.76-13.65a17.38 17.38 0 0 0-2.07-8.32z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M799.54 37a14.52 14.52 0 0 0-8.37.91 12.28 12.28 0 0 1-5 1.06 12.41 12.41 0 0 1-5-1.08 14.1 14.1 0 0 0-11.82.23 7.29 7.29 0 0 1-3.4.85c-4.79 0-8.77-4.82-9.6-11.19a9.26 9.26 0 0 0 2.4-2.58c2.8-4.52 7.15-7.43 12-7.43s9.18 2.87 12 7.35a9.22 9.22 0 0 0 8 4.37h.13c3.75 0 7.05 3.06 8.66 7.51z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M619.82 106.96l-9.1 5.77 5.52-10a9 9 0 0 0-5.5-2h-.15a10.79 10.79 0 0 1-1.89-.14l-3.08 2 1.32-2.41a11 11 0 0 1-5.4-4.09l-5.52 3.5 3.49-6.34a16.15 16.15 0 0 0-12.37-6.26c-5.74 0-10.86 3.42-14.16 8.74a10.56 10.56 0 0 1-9.36 5h-.31c-6.34 0-11.47 7.19-11.47 16s5.13 16.05 11.47 16.05a8.56 8.56 0 0 0 4-1 16.56 16.56 0 0 1 13.89-.27 14.52 14.52 0 0 0 11.81 0 16.58 16.58 0 0 1 13.77.27 8.68 8.68 0 0 0 4 1c6.34 0 11.48-7.18 11.48-16.05a20.4 20.4 0 0 0-2.44-9.77z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M602.67 130.45a17 17 0 0 0-9.84 1.07 14.52 14.52 0 0 1-11.81 0 16.56 16.56 0 0 0-13.89.27 8.59 8.59 0 0 1-4 1c-5.63 0-10.32-5.67-11.29-13.15a10.75 10.75 0 0 0 2.81-3c3.3-5.32 8.42-8.73 14.16-8.73s10.8 3.37 14.1 8.63a10.82 10.82 0 0 0 9.35 5.14h.11c4.52-.07 8.41 3.53 10.3 8.77z",
    opacity: 0.03
  }), _react.default.createElement("path", {
    d: "M947.25 569.2c0 1.72 0 3.44-.11 5.14a121.57 121.57 0 0 1-2.38 19.69c-6.57 32.11-25.54 57.07-49.37 64.44a49.29 49.29 0 0 1-14.64 2.23c-36.73 0-66.5-41-66.5-91.5s29.77-91.5 66.5-91.5c34.45 0 62.79 36.06 66.16 82.25.23 3.04.34 6.13.34 9.25z",
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M947.14 574.35a121.57 121.57 0 0 1-2.38 19.69c-6.57 32.11-25.54 57.07-49.37 64.44-18.45-8.49-32.14-40.31-32.14-78.27 0-44.46 18.8-80.5 42-80.5 19.47 0 35.85 25.42 40.6 59.91.66 4.73 1.09 9.67 1.29 14.73z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M613.25 366.7s180-37 275-3c0 0 14 7 0 19 0 0 13.24 14-9.88 19l-91.85 5.65-173.27-17.65z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M644.75 371.35s154.11-31.68 235.45-2.57c0 0 12 6 0 16.27 0 0 11.33 12-8.46 16.27l-78.64 4.83-148.35-15.09z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M820.25 426.7l-12-24s5.26-24.28-37.5-31.42c-2.37-10.59-13.11-18.58-26-18.58-12.58 0-23.1 7.6-25.82 17.8-6.14.53-12.68 1.25-19.68 2.2l-9.78 52.44-1.22-2.44s6.21-28.68-49.76-32.87a20.82 20.82 0 0 0 4.76-13.13c0-12.71-11.87-23-26.5-23s-26.5 10.29-26.5 23a21 21 0 0 0 5.56 14.08q-7.85.75-16.56 1.92l-11 59 51 7 81-12-7.17-14.35 46.17 6.34z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M820.25 426.7l-12-24s5.26-24.28-37.5-31.42c-2.37-10.59-13.11-18.58-26-18.58-12.58 0-23.1 7.6-25.82 17.8-6.14.53-12.68 1.25-19.68 2.2l-9.78 52.44-1.22-2.44s6.21-28.68-49.76-32.87a20.82 20.82 0 0 0 4.76-13.13c0-12.71-11.87-23-26.5-23s-26.5 10.29-26.5 23a21 21 0 0 0 5.56 14.08q-7.85.75-16.56 1.92l-11 59 51 7 81-12-7.17-14.35 46.17 6.34z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M648.23 373.58s-8-44.88 29-45.88 25 65 25 65 28 6 30 17-97 14-97 14z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M583.25 610.7c0 53-39.4 96-88 96s-88-43-88-96 39.89-104.5 88.5-104.5 87.5 51.48 87.5 104.5z",
    fill: "#36334a"
  }), _react.default.createElement("ellipse", {
    cx: 495.25,
    cy: 614.7,
    rx: 70,
    ry: 80.99,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 108.25,
    cy: 601.69,
    rx: 88,
    ry: 96,
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M258.25 372.7s-41 2-39 24 35 6 35 6z",
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M599.37 409.35l16.88-112.65s4-14-50-14c0 0-173-11-217 7 0 0-51 19-122 117 0 0 365.12 8.65 372.12 2.65z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M593.25 291.7l-31 123-19.44-.47-92-2.24-205.19-5c-.57-9.72 96.6-110.29 96.6-110.29z",
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M450.84 411.99l8.38-32.4s-8-44.89 29-45.89 25 65 25 65 25.5 5.47 29.56 15.53z",
    fill: primaryColor,
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M947.75 562.2c-6-58-43.5-70.5-43.5-70.5-36-2-60 135-60 135l-277 25s9.5-116.5-57.5-135.5-84.5 117.5-87.5 136.5-404-2-415-10-7-85-4-91 11-33 11-33c0-6.44 3.08-14.58 5.64-20.23 1.8-4 3.36-6.77 3.36-6.77 8.69-49.28 53.81-61.21 56.84-62h.16c12-12 123-20 123-20l42-8 341.47 6.71 14.53.29 173.6-8.35 117.4-5.65c27 0 41 68 41 68 25 60 14.5 99.5 14.5 99.5z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 455.39,
    cy: 570.05,
    rx: 51.48,
    ry: 32.23,
    transform: "rotate(-21.92 164.553 735.06)",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 453.39,
    cy: 566.05,
    rx: 51.48,
    ry: 32.23,
    transform: "rotate(-21.92 162.543 731.054)",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M82.09 431.74c-.51 11-5.44 24.88-14.31 38.25-14.27 21.52-33.84 34.19-45.89 30.48 1.8-4 3.36-6.77 3.36-6.77 8.69-49.28 53.81-61.21 56.84-61.96z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M79.09 429.74c-.51 11-5.44 24.88-14.31 38.25-14.27 21.52-33.84 34.19-45.89 30.48 1.8-4 3.36-6.77 3.36-6.77 8.69-49.28 53.81-61.21 56.84-61.96z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    fill: "#36334a",
    d: "M219.25 459.69h-79l-4-11h96l-13 11zM71.25 540.69h130v38h-130z"
  }), _react.default.createElement("circle", {
    cx: 341.25,
    cy: 597.69,
    r: 18,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 339.25,
    cy: 594.69,
    r: 18,
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 14.25,
    cy: 583.69,
    rx: 9,
    ry: 19,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 11.25,
    cy: 582.69,
    rx: 9,
    ry: 19,
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M804.25 502.7c-11 34-12 87-12 87l-4 14-195 22s1-98 4-144c2.11-32.45-5.72-59.92-10.53-73.29l14.53.29 173.6-8.35c29 20.33 39.27 71.82 29.4 102.35z",
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M759.79 441.4a4.91 4.91 0 0 0-4.52 5.69 3.51 3.51 0 0 0 2 2.61c3.23 1.61 24.73-2 32.88-3.44a5.53 5.53 0 0 0 4.62-4.93c.1-1.42-.42-2.63-2.5-2.63z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M586.25 404.7s5 22 29 15l8-31-16-9z",
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M615.64 360.03c11-6.52 28.45-12.22 45.71 1.47a20.4 20.4 0 0 1 5.89 24.54c-5.65 12.23-19.06 25.5-50.37 9.61a20.2 20.2 0 0 1-7.62-6.74l-.16-.24a20.3 20.3 0 0 1 6.55-28.64z",
    fill: "#36334a"
  }), _react.default.createElement("circle", {
    cx: 495.75,
    cy: 610.19,
    r: 20,
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 908.75,
    cy: 574.19,
    rx: 11,
    ry: 20,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 482.25,
    y: 548.69,
    width: 26,
    height: 35,
    rx: 12,
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M908.75 510.19a7 7 0 0 1 7 7v16a12 12 0 0 1-12 12 7 7 0 0 1-7-7v-16a12 12 0 0 1 12-12zM908.75 638.2a12 12 0 0 1-12-12v-11a12 12 0 0 1 12-12c6.6 0 6 5.4 6 12v11c-.01 6.6.62 12-6 12zM878.75 556.19a12 12 0 0 1 12 12v15a8 8 0 0 1-8 8 12 12 0 0 1-12-12v-15a8 8 0 0 1 8-8zM947.25 569.2c0 1.72 0 3.44-.11 5.14a121.57 121.57 0 0 1-2.38 19.69 12.21 12.21 0 0 1-2 .17 12 12 0 0 1-12-12v-11a12 12 0 0 1 12-12 11.71 11.71 0 0 1 3.1.41c.36.1.72.21 1.06.34.22 3.04.33 6.13.33 9.25z",
    fill: "#36334a"
  }), _react.default.createElement("rect", {
    x: 532.75,
    y: 591.19,
    width: 26,
    height: 35,
    rx: 12,
    fill: "#36334a"
  }), _react.default.createElement("rect", {
    x: 434.75,
    y: 591.19,
    width: 26,
    height: 35,
    rx: 12,
    fill: "#36334a"
  }), _react.default.createElement("rect", {
    x: 482.75,
    y: 643.19,
    width: 26,
    height: 35,
    rx: 12,
    fill: "#36334a"
  }), _react.default.createElement("path", {
    d: "M845.01 206.01a16.42 16.42 0 0 1-1 5.59 16.6 16.6 0 0 1-31.09.44 16.33 16.33 0 0 1-1.14-6 16.6 16.6 0 0 1 33.2 0z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M815.15 210.15a16.6 16.6 0 0 1 6.46-22.57 16.43 16.43 0 0 1 6-2 16.6 16.6 0 1 0 1.4 33.07 16.59 16.59 0 0 1-13.86-8.5zM807.66 229.13h44.47v69.37h-44.47z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M808.66 227.13h44.47v69.37h-44.47z"
  }), _react.default.createElement("path", {
    d: "M737.37 480.81s-4.74 13-16 14.82-17.76 4.72-17.76 4.72l26.68 17.19 14.23-1.78s1.77-18.38 7.7-22.53-14.85-12.42-14.85-12.42zM930.09 480.81s4.74 13 16 14.82 17.78 4.75 17.78 4.75l-26.68 17.19-14.23-1.78s-1.77-18.38-7.7-22.53 14.83-12.45 14.83-12.45z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M800.25 365.79s-7.12 3.56-9.49 10.67c0 0-13 4.15-20.16 15.42 0 0-8.89 9.48-10.08 14.23s-14.82 33.24-14.82 33.24-13.63 44.46-20.75 49.21c0 0 22.53-4.75 26.68 17.78 0 0 5.34 0 11.27-20.75s20.15-46.24 20.15-46.24 4.75-17.79 8.9-20.75 10.67-16.6 16.6-13.05 45.06-.59 45.06-.59 23.12 10.67 23.71 17.79 4.75 7.7 5.34 13.63 22.53 52.77 22.53 52.77 4.15 13 5.33 16c0 0 13.05-31.42 30.24-13.64 0 0-.59-11.86-5.93-19s-28.46-62.85-28.46-62.85-2.37-8.3-4.74-10.67-20.75-21.34-27.26-21.34c0 0-3.56-8.9-7.71-10.08zM746.89 511.64a28.89 28.89 0 0 1-28.23-3.8 56.27 56.27 0 0 0-12.59-7.29c-6.28-2.54-13.81-4.43-16.1-.17-4.15 7.7 50.4 26.68 50.4 26.68s7.11-4.16 6.52-15.42zM920.6 511.64a28.89 28.89 0 0 0 28.23-3.8 56.27 56.27 0 0 1 12.59-7.29c6.28-2.54 13.81-4.43 16.1-.17 4.15 7.7-50.4 26.68-50.4 26.68s-7.11-4.16-6.52-15.42z",
    fill: "#696880"
  }), _react.default.createElement("path", {
    d: "M819.63 268.27c-.23 2.06-.9 4.29-2.66 5.39-1.44.9-3.26.82-4.92 1.17a11.44 11.44 0 0 0-7.83 6.76 17.52 17.52 0 0 0-.74 10.55 38.85 38.85 0 0 0 1.51 5.07c1.75 4.92 3.85 9.79 7.09 13.89a59 59 0 0 0 9.3 8.76c2.11 1.72 4.29 3.48 6.89 4.29a21.36 21.36 0 0 0 5.41.71c2.25.11 4.64.18 6.59-.94 3-1.73 3.9-5.56 5.52-8.62 1.39-2.61 3.45-4.81 4.74-7.47a29.78 29.78 0 0 0 2-6.51l2.77-12.31c1-4.46 1.92-9.5-.6-13.33a2.1 2.1 0 0 0-.74-.77 2.75 2.75 0 0 0-1.51-.16 16.32 16.32 0 0 1-9.15-2.09 3.62 3.62 0 0 1-1.15-.9 4.53 4.53 0 0 1-.71-2.11 22.29 22.29 0 0 0-1.28-4.46 3 3 0 0 0-.87-1.33 3.11 3.11 0 0 0-1.4-.47 114.49 114.49 0 0 0-12.93-1.36c-1.43-.06-3.57-.63-4.54.62s-.63 4.12-.79 5.62z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M819.63 268.27c-.23 2.06-.9 4.29-2.66 5.39-1.44.9-3.26.82-4.92 1.17a11.44 11.44 0 0 0-7.83 6.76 17.52 17.52 0 0 0-.74 10.55 38.85 38.85 0 0 0 1.51 5.07c1.75 4.92 3.85 9.79 7.09 13.89a59 59 0 0 0 9.3 8.76c2.11 1.72 4.29 3.48 6.89 4.29a21.36 21.36 0 0 0 5.41.71c2.25.11 4.64.18 6.59-.94 3-1.73 3.9-5.56 5.52-8.62 1.39-2.61 3.45-4.81 4.74-7.47a29.78 29.78 0 0 0 2-6.51l2.77-12.31c1-4.46 1.92-9.5-.6-13.33a2.1 2.1 0 0 0-.74-.77 2.75 2.75 0 0 0-1.51-.16 16.32 16.32 0 0 1-9.15-2.09 3.62 3.62 0 0 1-1.15-.9 4.53 4.53 0 0 1-.71-2.11 22.29 22.29 0 0 0-1.28-4.46 3 3 0 0 0-.87-1.33 3.11 3.11 0 0 0-1.4-.47 114.49 114.49 0 0 0-12.93-1.36c-1.43-.06-3.57-.63-4.54.62s-.63 4.12-.79 5.62z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M811.6 275.35a27.43 27.43 0 0 0-7.14-1.13c-5.72-.14-11.83 1.84-15.14 6.51a15.37 15.37 0 0 0-2.29 11.45 23.71 23.71 0 0 0 5.2 10.67 32.07 32.07 0 0 1 4 5.24c1.58 3 1.62 6.58 2 10 1 8.11 4.46 15.75 5.84 23.81s.18 17.42-6.19 22.56c-1.07.86-2.36 1.76-2.45 3.13-.15 2.19 2.7 3.13 4.89 3.33 6.55.63 13.27 1.24 19.63-.45 2.64-.7 5.17-1.79 7.85-2.29 6.81-1.27 13.65 1.33 20.45 2.59a91.81 91.81 0 0 0 14.91 1.21 8 8 0 0 0 3.44-.45 2.75 2.75 0 0 0 1.74-2.74 4.64 4.64 0 0 0-1.18-2c-3.44-4.26-4.49-9.9-5.43-15.29l-3.1-18.15c-1.69-9.68-3.26-20.19 1.32-28.89 3.3-6.25 9.36-10.65 12.84-16.8a9.79 9.79 0 0 0 1.58-6.31c-.52-3.09-3.31-5.3-6.17-6.6a23.21 23.21 0 0 0-17.39-.63c.1 4.33-1 8.71-1.72 13l-1.21 7a89.13 89.13 0 0 1-2.7 12.2 13.22 13.22 0 0 1-2.17 4.42 11.43 11.43 0 0 1-3.83 2.79 22.76 22.76 0 0 1-10.15 2.31 13.32 13.32 0 0 1-4.48-.68c-2.38-.86-4.31-2.63-6.17-4.35a10.08 10.08 0 0 1-1.63-1.76 10.61 10.61 0 0 1-1.11-2.67 54.29 54.29 0 0 1-1.9-7.48c-.31-1.94-.4-3.91-.54-5.87-.44-5.68-.43-12.11-1.6-17.68z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M805.58 390.1s-2.37 31.42 12.45 36.76 1.78-26.09 1.78-26.09l-4.74-9.49zM855.98 390.1s2.37 31.42-12.45 36.76-1.78-26.09-1.78-26.09l4.74-9.49z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M792.54 285.16l-4.74 7.71s4.15 26.68 4.74 31.42a61.84 61.84 0 0 0 2.37 10.06s.59 14.23.59 19.56 3 14.23 3 14.23a64.53 64.53 0 0 0 3 14.82c2.37 6.53 4.75 14.23 4.75 14.23s3-8.3 14.82 4.15a7.19 7.19 0 0 0 0-10.08s-3.56-16-3.56-24.3-6.52-48-6.52-48-4.22-45.07-18.45-33.8z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M791.37 284.57l-4.74 7.7s4.15 26.68 4.74 31.43a62.25 62.25 0 0 0 2.38 10.07s.62 14.23.62 19.58 3 14.23 3 14.23a64.82 64.82 0 0 0 3 14.82c2.37 6.52 4.74 14.23 4.74 14.23s3-8.3 14.82 4.15a7.18 7.18 0 0 0 0-10.08s-3.56-16-3.56-24.31-6.52-48-6.52-48-4.27-45.04-18.48-33.82z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M869.61 280.41l3 3.53s3.5 20.19-4.21 45.68l-2.37 23.13s-4.15 19.56-4.75 24.31-.59 5.33-1.77 7.11a2.28 2.28 0 0 0 0 3l-3.56 13.05s-5.34-6.52-16 1.78c0 0-3-4.75-.59-8.9s2.37-5.93 1.78-7.11 2.37-7.12 2.37-8.3 4.15-28.46 4.15-28.46 1.78-26.68 3.56-35.57c1.09-5.47 1.06-17.67.88-26.25-.19-8.93 10.62-13.78 17-7.49.17.13.34.31.51.49z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M871.37 279.23l3 3.53s3.49 20.18-4.21 45.68l-2.37 23.12s-4.15 19.57-4.75 24.31-.59 5.34-1.78 7.11a2.31 2.31 0 0 0 0 3l-3.55 13s-5.34-6.52-16 1.78c0 0-3-4.74-.59-8.89s2.37-5.93 1.77-7.12 2.38-7.11 2.38-8.3 4.15-28.46 4.15-28.46 1.78-26.68 3.55-35.57.6-35.57.6-35.57 9.52-6.5 17.8 2.38z",
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 831.67,
    cy: 247.21,
    r: 23.72,
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M844.04 211.6a16.6 16.6 0 0 1-31.09.44c9.25-3.72 18.72-.4 18.72-.4 4.7-1.67 8.82-1.51 12.37-.04z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M831.67 212.83s-45.65-16-34.39 61.66c0 0 10.08 6.52 17.79 2.37 0 0-5.34-54 15.41-51.58s17.2 50.39 17.2 50.39 11.86 3.56 15.41-3-1.18-70.52-31.42-59.84z",
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M830.48 221.72c-14.24-1.63-16.19 23.26-16 39.05.18-15.69 2.82-37 16-35.49 14.82 1.69 17.24 26.65 17.42 40.79.16-12.97-1.26-42.5-17.42-44.35zM797.28 270.93a161.19 161.19 0 0 1-1.77-20.58 152.23 152.23 0 0 0 1.77 24.1s10.08 6.52 17.79 2.37c0 0-.13-1.28-.27-3.43-7.67 3.96-17.52-2.46-17.52-2.46zM863.09 269.15c-3.31 6.07-13.82 3.41-15.25 3-.07 2.2-.16 3.51-.16 3.51s11.86 3.56 15.41-3c.74-1.35 1.12-5.14 1-10.21-.1 3.31-.45 5.69-1 6.7z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M984.66 652.89c2.74-5.07-.37-11.29-3.94-15.81s-7.93-9.23-7.84-15c.14-8.28 8.93-13.17 16-17.56a77.94 77.94 0 0 0 14.33-11.52 21.21 21.21 0 0 0 4.4-5.89c1.45-3.24 1.41-6.93 1.32-10.48q-.45-17.73-1.75-35.43",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    strokeWidth: 4
  }), _react.default.createElement("path", {
    d: "M1020.48 540.56a12.9 12.9 0 0 0-6.45-10.59l-2.89 5.72.09-6.93a13.08 13.08 0 0 0-4.26-.51 12.92 12.92 0 1 0 13.51 12.31zM997.44 628.01a12.92 12.92 0 0 1-24.39-5.3 12.75 12.75 0 0 1 .84-5.25 12.93 12.93 0 0 1 24.18.14l-8.07 6.57 8.87-2.06a12.79 12.79 0 0 1-1.43 5.9zM991.06 602.92a12.92 12.92 0 0 1-13.51-12.31 12.75 12.75 0 0 1 1.12-5.88 13 13 0 0 1 8.29-7.16l-.06 5.33 2.92-5.8a12.92 12.92 0 0 1 13.5 12.31 12.67 12.67 0 0 1-.55 4.41 12.92 12.92 0 0 1-11.71 9.1zM1022.43 582.05a12.92 12.92 0 0 1-13.51-12.31 12.7 12.7 0 0 1 1.22-6.12 12.91 12.91 0 0 1 18-5.75l-2.28 6.25 4.69-4.51a12.91 12.91 0 0 1 4.18 8.92 12.67 12.67 0 0 1-.33 3.56 12.92 12.92 0 0 1-11.97 9.96z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M1018.75 544c-3 .33-5.89 1.25-8.88 1.44s-6.28-.53-8.17-2.86a40.27 40.27 0 0 1-2.39-4.2 9.28 9.28 0 0 0-3.25-3.07 12.77 12.77 0 0 0-1.39 6.45 12.92 12.92 0 0 0 25.54 2.13c-.49.02-.98.06-1.46.11zM1022.43 582.05a12.92 12.92 0 0 1-13.51-12.31 12.7 12.7 0 0 1 1.22-6.12 9.6 9.6 0 0 1 2.6 2.6c.92 1.39 1.47 3 2.56 4.27 2 2.36 5.45 3.14 8.57 3s6.12-1 9.23-1.31c.43 0 .87-.07 1.3-.08a12.92 12.92 0 0 1-11.97 9.95zM991.06 602.92a12.92 12.92 0 0 1-13.51-12.31 12.75 12.75 0 0 1 1.12-5.88 10.65 10.65 0 0 1 2.7 2.62c1 1.42 1.63 3 2.8 4.36 2.18 2.43 5.85 3.28 9.15 3.21s6.28-.86 9.46-1.1a12.92 12.92 0 0 1-11.72 9.1zM997.44 628.01a12.92 12.92 0 0 1-24.39-5.3 12.75 12.75 0 0 1 .84-5.25 13 13 0 0 1 2.83 2.53c1.23 1.5 2 3.2 3.46 4.59 2.64 2.6 6.91 3.67 10.7 3.77a57 57 0 0 0 6.56-.34z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M965.18 647.05s10.19-.31 13.27-2.5 15.68-4.8 16.45-1.29 15.32 17.46 3.81 17.55-26.75-1.79-29.82-3.66-3.71-10.1-3.71-10.1z",
    fill: "#656380"
  }), _react.default.createElement("path", {
    d: "M998.91 659.59c-11.51.09-26.75-1.8-29.82-3.66-2.33-1.43-3.26-6.53-3.57-8.89h-.34s.64 8.23 3.71 10.1 18.31 3.75 29.82 3.66c3.32 0 4.47-1.21 4.41-3-.46 1.11-1.75 1.77-4.21 1.79z",
    opacity: 0.2
  }));
};

UndrawFastCar.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawFastCar;
exports.default = _default;