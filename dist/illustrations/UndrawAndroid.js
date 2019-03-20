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

var UndrawAndroid = function UndrawAndroid(_props) {
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
    viewBox: "0 0 1097.1 807.9",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M11.85 429.95c17.36 74.2 54.11 138.34 112.19 169.43 120.7 64.61 392.91 31.29 596.07-7a465.21 465.21 0 0 0 264.54-151.23zM1077.2 80.71H965.73a9.635 9.635 0 1 1 0-19.27H985a9.635 9.635 0 0 1 0-19.27h-13.76a9.635 9.635 0 0 1 0-19.27h58.18c-12.91-6-28-10.27-45.38-12.51-158.64-20.38-215.28-6.9-235.26 7-24.65 17.1-52.15 29.68-81.54 35.74-97.88 20.19-280.93 44.49-446.84-7.78-82.46-26-143.75 17.92-180.48 91.28h1056.63c-1.38-21.32-5.51-41-13.09-58.24a9.58 9.58 0 0 1-6.26 2.32zM2.39 275.1a491.06 491.06 0 0 0 4.32 129.45l978.68 35.79a460 460 0 0 0 68-103.7zm387.08 92.35H370.2a9.635 9.635 0 1 1 0 19.27H258.73a9.635 9.635 0 1 1 0-19.27H278a9.635 9.635 0 0 1 0-19.27h-13.76a9.635 9.635 0 0 1 0-19.27h111.47a9.635 9.635 0 1 1 0 19.27h13.76a9.635 9.635 0 0 1 0 19.27zM1096.6 137.29l-1068.49 26c-12.99 33.4-21.56 71.17-25.56 110.33h1075.33a456.46 456.46 0 0 0 15.53-70.33c3.2-23.02 4.48-45.27 3.19-66zm-877.13 85.16H200.2a9.635 9.635 0 1 1 0 19.27H88.73a9.635 9.635 0 1 1 0-19.27H108a9.635 9.635 0 0 1 0-19.27H94.24a9.635 9.635 0 0 1 0-19.27h111.47a9.635 9.635 0 1 1 0 19.27h13.76a9.635 9.635 0 0 1 0 19.27z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M677.55 623.28s28.2-69.5 80.86-95.28a113.65 113.65 0 0 0 51.61-50.05 191.13 191.13 0 0 0 12.93-32.5",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M856.04 429c-5.49 6.9-33.9 17-33.9 17s3.42-30 8.91-36.85a16 16 0 0 1 25 19.88zM846.29 483.66c-8.36 2.81-37.68-4.18-37.68-4.18s19.15-23.28 27.51-26.09a16 16 0 0 1 10.17 30.27zM793.43 548.26c-8.63-1.79-30.42-22.63-30.42-22.63s28.28-10.43 36.92-8.64a16 16 0 0 1-6.5 31.26zM742.43 588.14c-8.81-.31-33.81-17.16-33.81-17.16s26.12-15.03 34.93-14.75a16 16 0 1 1-1.12 31.91zM781.31 459.95c1.13 8.75 20.22 32.07 20.22 32.07s12.57-27.4 11.45-36.15a16 16 0 0 0-31.67 4.08zM722.25 507.34c3.69 8 28.89 24.55 28.89 24.55s3.8-29.91.11-37.91a16 16 0 1 0-29 13.37zM671.17 561.28c2.28 8.52 24.33 29.08 24.33 29.08s8.8-28.83 6.51-37.35a16 16 0 0 0-30.84 8.27z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M856.04 429c-5.49 6.9-33.9 17-33.9 17s3.42-30 8.91-36.85a16 16 0 0 1 25 19.88zM846.29 483.66c-8.36 2.81-37.68-4.18-37.68-4.18s19.15-23.28 27.51-26.09a16 16 0 0 1 10.17 30.27zM793.43 548.26c-8.63-1.79-30.42-22.63-30.42-22.63s28.28-10.43 36.92-8.64a16 16 0 0 1-6.5 31.26zM742.43 588.14c-8.81-.31-33.81-17.16-33.81-17.16s26.12-15.03 34.93-14.75a16 16 0 1 1-1.12 31.91zM781.31 459.95c1.13 8.75 20.22 32.07 20.22 32.07s12.57-27.4 11.45-36.15a16 16 0 0 0-31.67 4.08zM722.25 507.34c3.69 8 28.89 24.55 28.89 24.55s3.8-29.91.11-37.91a16 16 0 1 0-29 13.37zM671.17 561.28c2.28 8.52 24.33 29.08 24.33 29.08s8.8-28.83 6.51-37.35a16 16 0 0 0-30.84 8.27z",
    opacity: 0.25
  })), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M657.55 521.66s3.56-74.92 44.69-116.71a113.65 113.65 0 0 0 32-64.35 191.13 191.13 0 0 0 1.43-34.92",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), _react.default.createElement("path", {
    d: "M761.55 279.19c-2.89 8.33-26.35 27.26-26.35 27.26s-6.7-29.39-3.81-37.72a16 16 0 1 1 30.16 10.46zM770.43 333.95c-7 5.42-36.94 8.56-36.94 8.56s10.35-28.32 17.3-33.74a16 16 0 1 1 19.64 25.18zM741.98 412.47c-8.74 1.17-36.2-11.26-36.2-11.26s23.23-19.22 32-20.39a16 16 0 1 1 4.24 31.65zM707.09 467c-8.42 2.63-37.59-5-37.59-5s19.64-22.87 28.06-25.5a16 16 0 0 1 9.53 30.48zM701.26 333.17c4 7.88 29.72 23.55 29.72 23.55s2.77-30-1.19-37.9a16 16 0 0 0-28.53 14.35zM661.26 397.47c6.14 6.33 35.4 13.58 35.4 13.58s-6.33-29.47-12.47-35.8a16 16 0 0 0-22.93 22.23zM630.96 465.29c5 7.28 32.6 19.37 32.6 19.37s-1.26-30.12-6.24-37.4a16 16 0 0 0-26.35 18z",
    fill: primaryColor
  })), _react.default.createElement("path", {
    d: "M299.74 775.76c39.32 13.22 87.29 5.18 131.9 6.11 6.11.13 12.57.51 17.47 2.79s7.31 6 10.67 9.15c12.5 11.79 38.11 15.58 60.5 13.58s42.92-8.62 64-13.66c36.52-8.72 78.27-12.68 114.29-3.18 3.31.87 6.79 1.87 10.33 1.53 7.9-.78 10.25-7.1 15.77-10.71 10-6.52 31.63-4.75 36-13.34 2.57-5-3.34-10.2-9.77-13.64-24.62-13.16-59.84-15.33-92.06-13.3s-63.9 7.63-96.29 7.65c-40.35 0-79.34-8.59-119.3-12.11-27.68-2.44-57.89-2.14-83.84 5-28.05 7.82-34.25 25.26-59.67 34.13z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M365.51 184.9h7v99h-7zM365.51 317.9h7v56h-7z"
  }), _react.default.createElement("rect", {
    x: 370.51,
    y: 87.9,
    width: 315,
    height: 684,
    rx: 47.1,
    ry: 47.1,
    fill: "#535461"
  }), _react.default.createElement("rect", {
    x: 370.51,
    y: 119.9,
    width: 315,
    height: 623,
    rx: 47.1,
    ry: 47.1,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 502.51,
    y: 102.9,
    width: 52,
    height: 7,
    rx: 3.5,
    ry: 3.5,
    fill: "#eaeaf3"
  }), _react.default.createElement("circle", {
    cx: 572.51,
    cy: 106.9,
    r: 5,
    fill: "#eaeaf3"
  }), _react.default.createElement("path", {
    d: "M446.31 396.1v73a17.27 17.27 0 0 1-17.33 17.46c-9.64 0-19-7.81-19-17.46v-73c0-9.52 9.33-17.33 19-17.33a17.4 17.4 0 0 1 17.33 17.33zm6.81 98.94a18.61 18.61 0 0 0 18.65 18.65h12.54l.19 38.51c0 23.25 34.79 23.07 34.79 0v-38.5h23.44v38.51c0 23.13 35 23.19 35 0V513.7h12.73a18.59 18.59 0 0 0 18.53-18.65v-113.1H453.12zm156.29-119.17h-157c0-27 16.13-50.42 40.08-62.64l-12-22.25c-1.76-3.09 2.71-5 4.22-2.39l12.23 22.44a85.14 85.14 0 0 1 68.25 0l12.16-22.37c1.58-2.71 6-.69 4.22 2.39l-12 22.18c23.71 12.22 39.84 35.67 39.84 62.64zm-107.58-35a6.62 6.62 0 0 0-6.62-6.62 6.62 6.62 0 0 0 0 13.23 6.62 6.62 0 0 0 6.62-6.59zm71.47 0a6.52 6.52 0 1 0-6.43 6.62 6.58 6.58 0 0 0 6.43-6.6zm59.74 37.88a17.28 17.28 0 0 0-17.33 17.33v73a17.39 17.39 0 0 0 17.33 17.46c9.71 0 19-7.81 19-17.46v-73c-.03-9.68-9.36-17.31-19-17.31z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#535461",
    d: "M454.01 569.46h65v3h-65zM543.01 569.46h43v3h-43zM397.01 569.46h43v3h-43zM611.01 569.46h43v3h-43z"
  }));
};

UndrawAndroid.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAndroid;
exports.default = _default;