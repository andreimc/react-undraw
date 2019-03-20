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

var UndrawICanFly = function UndrawICanFly(_props) {
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
    viewBox: "0 0 1030.575 696.977",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M746.975 162.467a60.645 60.645 0 0 1 60.561-57.476c1.844 0 3.664.096 5.465.257a80.574 80.574 0 0 1 139.284-.066c1.52-.114 3.05-.191 4.598-.191a60.645 60.645 0 0 1 60.561 57.476",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M759.606 157.802a60.645 60.645 0 0 1 60.562-57.476c1.843 0 3.663.096 5.464.257a80.574 80.574 0 0 1 139.284-.066c1.52-.114 3.05-.191 4.598-.191a60.645 60.645 0 0 1 60.561 57.476",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M71.025 504.227c5.455-105.98 93.109-190.232 200.445-190.232 6.1 0 12.124.318 18.086.85a266.684 266.684 0 0 1 461-.217c5.029-.378 10.092-.633 15.219-.633 107.335 0 194.99 84.252 200.444 190.232",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M112.831 488.787c5.455-105.98 93.11-190.233 200.445-190.233 6.1 0 12.124.318 18.086.851a266.684 266.684 0 0 1 461-.218c5.03-.378 10.092-.633 15.219-.633 107.336 0 194.99 84.253 200.444 190.233",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M0 138.467a82.057 82.057 0 0 1 81.943-77.768c2.494 0 4.956.13 7.394.348a109.022 109.022 0 0 1 188.459-.09 82.912 82.912 0 0 1 6.221-.258 82.057 82.057 0 0 1 81.943 77.768",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M17.09 132.154a82.057 82.057 0 0 1 81.943-77.768c2.494 0 4.957.13 7.394.348a109.022 109.022 0 0 1 188.46-.089 82.917 82.917 0 0 1 6.22-.259 82.057 82.057 0 0 1 81.944 77.768",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M411.025 235.66s14 34-7 42c0 0 30 13 37 10s12-10 12-12-7-3-7-3-13 1-3-32z",
    fill: "#fbbebe"
  }), _react.default.createElement("circle", {
    cx: 427.025,
    cy: 228.66,
    r: 25,
    fill: "#fbbebe"
  }), _react.default.createElement("ellipse", {
    cx: 410.525,
    cy: 223.16,
    rx: 22,
    ry: 31,
    fill: "#ff6584"
  }), _react.default.createElement("ellipse", {
    cx: 394.525,
    cy: 213.16,
    rx: 22,
    ry: 31,
    fill: "#ff6584"
  }), _react.default.createElement("ellipse", {
    cx: 372.525,
    cy: 190.66,
    rx: 11,
    ry: 15.5,
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M452.025 271.66s6-12 28-18 65-78 65-78-2-43 8-30 2 39 2 39l-25.804 44.57a97.084 97.084 0 0 1-17.872 22.427c-15.954 14.85-44.46 41.003-47.324 41.003-4 0-12-21-12-21zM417.025 442.66s7 85 5 93-8 24 2 71-2 44-2 44l32 14s-11-54-9-69 1-46 7-67 7-80 7-80z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M417.025 442.66s7 85 5 93-8 24 2 71-2 44-2 44l32 14s-11-54-9-69 1-46 7-67 7-80 7-80z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M452.78 653.84c-2.479 1.723-8.848 3.47-20.755-9.18 0 0-7-10-13 0s-2 11 2 16c3.862 4.826 34.747 37.61 47.679 36.278a6.166 6.166 0 0 0 1.321-.278c12-4-5-17-5-17s-11.145-17.147-11.209-25.244a.668.668 0 0 0-1.036-.575z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M393.025 432.66s-17 39-24 59c-3.675 10.5-14.792 13.834-24.523 14.632a83.874 83.874 0 0 0-34.27 10.327c-13.996 7.856-33.094 16.771-45.207 15.04-21-3-4 30-4 30s31-19 60-21 60-5 74-23 48-75 48-75z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M262.025 556.66s-10-7-2-14 11-13 11-13-14-15-19-7-27 44-22 55 10 14 16 2 21.132-21.448 21.132-21.448z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M448.025 276.66s-3.324 6.648-34.217.247a18.976 18.976 0 0 0-20.908 9.753c-3.875 7.75-4.375 19 9.125 33 0 0 24 27 12 38s57-7 57-7-9-6-1-24c6.286-14.143 5.78-22.112.91-28.274a30.884 30.884 0 0 1-5.838-13.048c-1.366-6.694-4.74-15.083-13.072-15.678 0 0-8.759-.513-9.38 1.743s7.38 4.257 5.38 5.257z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M411.464 297.873c-.207-1.41-.46-2.811-.637-4.225-.604-4.828-2.9-16.526-10.84-14.513-9.962 2.525-20.962 27.525-20.962 27.525s-9 28-22 35-49 43-49 43-30 8-19 16 25-5 25-5l35.369-21.221a101.249 101.249 0 0 0 31.196-29.331c7.368-10.672 16.595-23.005 22.442-27.08a19.28 19.28 0 0 0 7.557-9.88 22.934 22.934 0 0 0 .875-10.275z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M420.025 355.66s-46-6-72 25-45 22-43 27 98 64 154 57c34.093-4.262 52.248-8.153 61.236-10.545a17.445 17.445 0 0 0 9.64-6.466 17.704 17.704 0 0 1 4.874-4.427 8.656 8.656 0 0 0 2.329-12.212c-15.86-22.946-58.917-83.729-71.079-85.35-15-2-46 10-46 10z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 427.525,
    cy: 201.66,
    rx: 16,
    ry: 11.5,
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M746.842 99.188a113.388 113.388 0 0 1 4.17-15.553c1.808-4.943 4.094-9.16 6.642-9.16 6.178 0-21.624-26.256-21.624-26.256s-1.745 3.243-4.633 7.614a107.699 107.699 0 0 1-6.92 9.422 51.653 51.653 0 0 1-11.615 10.765c-12.356 7.723 33.98 23.168 33.98 23.168zM828.639 201.572s61.937 39.133 42.853 45.564-50.7-39.544-50.7-39.544z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M745.562 112.685s29.665 21.631 38.334 38.086 53.74 53.02 53.74 53.02-9.305 18.386-13.804 17.277-97.25-70.111-107.008-75.699 5.114-40.1 28.738-32.684z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M745.562 112.685s29.665 21.631 38.334 38.086 53.74 53.02 53.74 53.02-9.305 18.386-13.804 17.277-97.25-70.111-107.008-75.699 5.114-40.1 28.738-32.684z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M833.336 151.703s69.504 23.168 52.514 33.98-58.692-26.258-58.692-26.258z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M788.545 468.333s29.346-12.357 26.257 6.178-16.99 35.524-16.99 44.791-26.257 29.347-30.89 24.713 7.722-23.168 4.633-33.98-6.178-35.524-6.178-35.524z",
    fill: "#55536e"
  }), _react.default.createElement("path", {
    d: "M788.545 468.333s29.346-12.357 26.257 6.178-16.99 35.524-16.99 44.791-26.257 29.347-30.89 24.713 7.722-23.168 4.633-33.98-6.178-35.524-6.178-35.524z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M779.277 482.234s29.347-12.357 26.258 6.178-16.99 35.524-16.99 44.791-26.258 29.346-30.891 24.713 7.723-23.168 4.633-33.98-6.178-35.524-6.178-35.524z",
    fill: "#55536e"
  }), _react.default.createElement("path", {
    d: "M711.318 369.482s91.127 86.494 88.038 94.217-23.168 24.713-23.168 24.713-69.504-91.128-64.87-118.93z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M711.318 369.482s91.127 86.494 88.038 94.217-23.168 24.713-23.168 24.713-69.504-91.128-64.87-118.93z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M689.694 213.484s23.168 23.168 16.99 67.96 4.634 88.038 16.99 101.94S787 477.6 787 477.6s-21.623 35.524-38.613 16.99-67.96-94.217-67.96-94.217-46.336-91.128-50.97-115.84-6.178-63.326 6.178-71.049 54.06 0 54.06 0z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M727.999 60.714c18.04 3.738 16.248 4.464 27.338 8.356.062-.185.124-.34.185-.494 1.7-4.047 2.765 1.266 5.221 1.266 6.178 0-21.624-26.257-21.624-26.257s-1.05 1.946-2.857 4.865c-.54.85-1.127 1.776-1.776 2.75a156.22 156.22 0 0 1-1.746 2.579z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 760.743,
    cy: 52.852,
    r: 29.346,
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M706.684 74.476s44.792 4.633 54.059 24.712-57.148 117.385-61.782 118.93-69.504 9.267-69.504 9.267 3.09-98.85 63.326-135.92c0 0 13.901-6.178 13.901-16.99z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M731.397 85.287s33.98 13.901 46.336 27.802 64.87 38.614 64.87 38.614-4.633 20.079-9.267 20.079S722.13 126.99 711.318 123.9s-4.634-40.158 20.079-38.614z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M758.426 56.714s7.723-7.723-7.723-13.901c0 0 15.446-6.178 18.535-15.446s13.9-24.712 23.168 0 26.257 57.148-29.346 57.148c0 0-13.901 3.09-13.901-9.267a23.168 23.168 0 0 1 9.267-18.534z",
    fill: "#3f3d56"
  }));
};

UndrawICanFly.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawICanFly;
exports.default = _default;