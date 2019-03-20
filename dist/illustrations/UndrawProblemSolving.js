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

var UndrawProblemSolving = function UndrawProblemSolving(_props) {
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
    viewBox: "0 0 990.17 637.668",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M826.528 637.002q.988-.872 1.933-1.789c7.421-7.209 20.729-22.198 27.034-29.375a4.753 4.753 0 0 0-.852-7.037l-12.247-8.55.737-.375-8.787-12.709c.971-19.416-40.362-72.253-50.706-80.154s24.271-70.308 24.271-70.308c5.264-2.037 9.52-6.364 12.779-10.951.198.035.396.074.597.103l4.43-.408a7.87 7.87 0 0 0 7.128-7.229 141.257 141.257 0 0 0 .492-15.715c.902-2.718.921-7.625 6.824-11.519 7.718-5.09 57.29-132.473 34.481-155.79 0 0-9.716-14.528-15.212-16.307 0 0 .87-4.254-2.397-6.167l-1.582-4.986s-2.124.937-5.286 2.406a91.472 91.472 0 0 1-6.614-11.416c1.096-4.76 17.547-25.73 2.792-40.228-14.97-14.71-22.364-24.691-33.517-20.712s-37.358 9.917-36.59 19.272c.766 9.354-1.942 13.031 2.887 16.87 4.828 3.84 4.996 3.523 4.996 3.523v-.001a28.87 28.87 0 0 0 32.64 35.647 80.367 80.367 0 0 1 5.512 13.39 13.339 13.339 0 0 0-1.33 8.546 221.704 221.704 0 0 0-13.681 23.129c-3.271 6.311-9.322 19.677-15.952 33.918-11.645-3.756-22.175-7.555-22.175-7.555s-.61.72-1.57 1.9a67.113 67.113 0 0 0-9.976-.938l-28.114-28.312a2.326 2.326 0 0 0-3.08-.384l-24.707 11.71a2.955 2.955 0 0 0-.06 4.281l24.478 25.988c-1.92 2.061 1.349 4.58 6.63 7.039l6.431 6.827a2.285 2.285 0 0 0 3.502.091l2.18-2.296a264.39 264.39 0 0 0 11.102 3.363c-.234 1.145-.068 1.986.674 2.35 1.348.658 8.504 4.639 18.268 9.614-3.909 7.364-7.305 12.979-9.602 15.196-7.033 6.79-6.863 25.528-6.503 32.878-2.243 3.36-5.382 8.508-5.312 10.906-12.398 18.464-34.443 53.284-37.857 72.184 0 0-16.023 21.374-18.288 49.478s-30.92 93.199-32.74 94.128c-.275.141-.232.721.107 1.575-9.468 3.276 15.144 45.098 20.155 43.684 4.355-1.23 10.936-23.512 10.927-30.36.151-.038.298-.066.45-.107 0 0 6.022-16.264 10.569-18.587s27.888-74.45 27.787-85.865c-.015-1.751 1.501-4.691 4.071-8.408a31.479 31.479 0 0 0 12.456 18.31c33.072 22.085 55.593 90.842 59.715 92.176a2.458 2.458 0 0 0 .734.076c.35 9.806.157 28.4-6.172 30.795a13.221 13.221 0 0 0-5.005 3.348",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M967.174 493.842a19.152 19.152 0 0 0-20.075 1.661c-8.59 6.543-9.9 19.346-6.669 29.65s9.992 19.057 15.285 28.47c7.11 12.64 11.69 27.106 10.509 41.562s-8.765 28.795-21.415 35.89c-11.74 6.587-25.964 6.336-39.42 5.907",
    fill: "none",
    stroke: "#f2f2f2",
    strokeMiterlimit: 10
  }), _react.default.createElement("ellipse", {
    cx: 1080.738,
    cy: 630.853,
    rx: 7.083,
    ry: 14.583,
    transform: "rotate(-59.769 914.331 656.653)",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 1067.322,
    cy: 677.047,
    rx: 7.083,
    ry: 14.583,
    transform: "rotate(-59.769 900.916 702.847)",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 1040.506,
    cy: 670.101,
    rx: 7.083,
    ry: 14.583,
    transform: "rotate(-59.769 874.1 695.901)",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 1056.786,
    cy: 724.92,
    rx: 7.083,
    ry: 14.583,
    transform: "rotate(-59.769 890.38 750.72)",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 1081.986,
    cy: 739.605,
    rx: 7.083,
    ry: 14.583,
    transform: "rotate(-59.769 915.58 765.405)",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M886.567 482.314a19.152 19.152 0 0 0-16.508 11.542c-4.128 9.979 1.187 21.7 9.166 28.976s18.228 11.435 27.54 16.902c12.508 7.342 23.747 17.535 30.006 30.62s6.924 29.291-.433 41.791c-6.828 11.602-19.243 18.546-31.085 24.95",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("ellipse", {
    cx: 897.083,
    cy: 483.183,
    rx: 14.583,
    ry: 7.083,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 908.75,
    cy: 529.85,
    rx: 14.583,
    ry: 7.083,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 882.083,
    cy: 537.35,
    rx: 14.583,
    ry: 7.083,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 923.75,
    cy: 576.516,
    rx: 14.583,
    ry: 7.083,
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 952.917,
    cy: 576.516,
    rx: 14.583,
    ry: 7.083,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M555.5 637h412"
  }), _react.default.createElement("path", {
    d: "M657.191 286.59s-45.825 7.24-40.193-1.896 35.62-18.266 41.12-16.36-.927 18.256-.927 18.256z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M657.191 286.59s-45.825 7.24-40.193-1.896 35.62-18.266 41.12-16.36-.927 18.256-.927 18.256z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M709.745 184.416s-29.602 7.942-15.884 33.212c0 0 22.382 44.042 12.996 46.93s-52.706 1.444-52.706 1.444-10.108 24.547-5.054 25.27 85.918 17.327 94.582 1.443 0-84.473 0-84.473-12.274-33.934-33.934-23.826z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M709.745 184.416s-29.602 7.942-15.884 33.212c0 0 22.382 44.042 12.996 46.93s-52.706 1.444-52.706 1.444-10.108 24.547-5.054 25.27 85.918 17.327 94.582 1.443 0-84.473 0-84.473-12.274-33.934-33.934-23.826z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M793.496 559.854s12.996 31.046 5.776 36.822-5.776 16.606-.722 16.606 16.606-10.108 23.104-22.382c4.84-9.144 12.887-27.502 16.676-36.272a4.753 4.753 0 0 0-2.978-6.433l-20.918-6.391zM656.317 597.398s-27.436 22.381-41.875 21.66-16.606 14.44 0 16.605 66.423 2.888 70.755 0 2.888-33.211 0-33.933-28.88-4.332-28.88-4.332z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M749.455 367.081s0 22.382-11.552 31.768c0 0-13.718 70.033-1.444 74.365s67.867 41.876 72.921 60.648l12.274 9.386s-22.382 22.382-26.714 22.382-46.93-58.482-85.195-69.312c0 0-23.826-5.776-23.104-36.822s28.88-113.353 28.88-113.353h32.49z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M749.455 367.081s0 22.382-11.552 31.768c0 0-13.718 70.033-1.444 74.365s67.867 41.876 72.921 60.648l12.274 9.386s-22.382 22.382-26.714 22.382-46.93-58.482-85.195-69.312c0 0-23.826-5.776-23.104-36.822s28.88-113.353 28.88-113.353h32.49z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M674.367 351.92s-21.66 67.867-18.05 94.58c0 0-8.664 25.27-2.166 52.706s-.722 98.192-2.166 99.636 15.884 16.605 34.656 4.332c0 0 .722-17.328 4.332-20.938s3.61-79.42 0-90.25 38.988-89.527 38.988-89.527 23.104-20.938 14.44-31.768.722-32.49.722-32.49l-65.702 4.332z",
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 664.259,
    cy: 157.702,
    r: 28.88,
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M683.031 144.706s23.104 26.714 28.88 27.436-18.772 31.768-18.772 31.768-13.718-23.104-23.104-25.27 12.996-33.934 12.996-33.934z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M716.243 171.42l-3.61-5.054s-24.876 22.176-25.795 28.055a12.736 12.736 0 0 0 1.97 9.489l14.439-6.498 7.22-14.44zM672.923 350.475s-5.776 17.328-1.444 16.606 4.332-10.108 9.386-10.108 7.942-7.942 7.942-7.942zM709.745 351.92s16.606 36.099 37.544 32.489l4.088-1.752a7.87 7.87 0 0 0 4.557-9.072c-1.995-8.316-5.662-21.666-8.645-21.666z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M635.442 159.515s2.825-9.033 12.211-5.423 17.328 11.552 19.494 5.776 7.71-11.09 11.436-6.627 20.693 12.764 19.971 8.432 9.025-29.963-9.747-39.348-28.88-16.606-38.266-9.386-32.49 20.937-28.88 29.601 2.167 12.996 7.943 15.162 5.838 1.813 5.838 1.813z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M719.853 175.752s-.722-6.498-7.22-5.054-23.826 30.324-23.826 30.324a204.243 204.243 0 0 0-6.498 28.158c-2.888 17.328-8.664 80.863-14.44 91.693s5.054 36.1 5.054 36.1 6.498-7.22 27.436-2.888 48.374 8.664 50.54 6.498-2.166-7.942 3.61-15.162 13.718-143.677-15.162-158.839c0 0-13.718-10.83-19.494-10.83z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M712.633 197.412s-29.602 7.942-15.884 33.212c0 0 22.382 44.042 12.996 46.93s-52.706 1.444-52.706 1.444-4.693 15.523.361 16.245 80.503 26.352 89.167 10.468 0-84.473 0-84.473-12.274-33.934-33.934-23.826z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M586.308 275.615l47.987 26.36a2.285 2.285 0 0 0 3.36-.992l11.756-24.572a3.067 3.067 0 0 0-1.572-3.683l-39.842-20.536a2.326 2.326 0 0 0-3.048.583l-19.901 18.749a2.955 2.955 0 0 0 1.26 4.091z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M589.51 271.985l44.988 25.714 11.971-21.577-38.593-20.987-18.366 16.85z"
  }), _react.default.createElement("ellipse", {
    cx: 732.604,
    cy: 395.157,
    rx: 0.565,
    ry: 0.662,
    transform: "rotate(-39.842 499.457 474.423)",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 715.901,
    cy: 417.232,
    rx: 0.376,
    ry: 0.442,
    transform: "rotate(-39.842 482.754 496.498)",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M657.862 297.531s-46.28 3.245-39.878-5.37 37.068-15.113 42.382-12.737-2.504 18.107-2.504 18.107z",
    fill: "#ffc1c7"
  }), _react.default.createElement("path", {
    d: "M712.633 193.08s-29.602 7.942-15.884 33.212c0 0 22.382 44.042 12.996 46.93s-52.706 1.444-52.706 1.444-10.108 24.547-5.054 25.27 85.918 17.327 94.582 1.443 0-84.473 0-84.473-12.274-33.934-33.934-23.826z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 264.556,
    y: 161.33,
    width: 260.028,
    height: 129.17,
    rx: 13.524,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 17,
    cy: 23.5,
    r: 17,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 22,
    cy: 17.5,
    r: 17,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 224,
    cy: 237.5,
    r: 17,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 229,
    cy: 231.5,
    r: 17,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 356,
    cy: 108.5,
    r: 17,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 361,
    cy: 102.5,
    r: 17,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 38.719,
    y: 62.975,
    width: 260.028,
    height: 129.17,
    rx: 13.524,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 53.916,
    y: 52,
    width: 260.028,
    height: 129.17,
    rx: 13.524,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 279.752,
    y: 150.355,
    width: 260.028,
    height: 129.17,
    rx: 13.524,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }));
};

UndrawProblemSolving.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawProblemSolving;
exports.default = _default;