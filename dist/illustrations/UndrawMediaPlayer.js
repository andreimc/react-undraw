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

var UndrawMediaPlayer = function UndrawMediaPlayer(_props) {
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
    viewBox: "0 0 1014.533 597.436",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M411 596h-6.016a4.984 4.984 0 0 1-4.984-4.984V574h11l4.421 16.211A4.583 4.583 0 0 1 411 596z",
    fill: "#605d82"
  }), _react.default.createElement("rect", {
    x: 79.5,
    y: 187.5,
    width: 710,
    height: 270,
    rx: 13.224,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 2.5,
    y: 0.5,
    width: 962,
    height: 523,
    rx: 13.638,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M0 37.039h962M0 100.5h962"
  }), _react.default.createElement("circle", {
    cx: 24.5,
    cy: 22.5,
    r: 10,
    fill: "#f86b75"
  }), _react.default.createElement("circle", {
    cx: 55.5,
    cy: 22.5,
    r: 10,
    fill: "#fad375"
  }), _react.default.createElement("circle", {
    cx: 86.5,
    cy: 22.5,
    r: 10,
    fill: "#8bcc55"
  }), _react.default.createElement("circle", {
    cx: 27.5,
    cy: 18.5,
    r: 10,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 58.5,
    cy: 18.5,
    r: 10,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 89.5,
    cy: 18.5,
    r: 10,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 225,
    cy: 74,
    r: 20,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 230,
    cy: 69,
    r: 20,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 505,
    y: 63.5,
    width: 99,
    height: 27,
    rx: 5.423,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 646,
    y: 63.5,
    width: 99,
    height: 27,
    rx: 5.423,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 512,
    y: 55.5,
    width: 99,
    height: 27,
    rx: 4.222,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 653,
    y: 55.5,
    width: 99,
    height: 27,
    rx: 4.222,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 115.5,
    y: 165.5,
    width: 710,
    height: 270,
    rx: 16.004,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M451.903 365.09a68.198 68.198 0 1 0-78.523-110.185M406 285.92V274.31L446.92 305l-9.42 6.5",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M409.64 243.8a68.2 68.2 0 1 0 68.2 68.2 68.232 68.232 0 0 0-68.2-68.2zM396 342.69v-61.38L436.92 312 396 342.69z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M383.1 430.704s-12.25 42.606-12.783 61.246-2.662 48.465-1.065 55.92 6.391 22.369 6.391 22.369 10.12-12.25 13.847-5.326c0 0-.532-14.38-3.195-18.64 0 0 1.065-22.368 1.065-30.357s13.314-44.736 14.38-45.269 4.26 10.12 1.597 33.552-4.793 64.453-4.793 68.714 6.39 12.782 10.652 10.119 6.923-25.575 6.923-25.575 3.728-47.932 5.858-53.258 13.315-66.572 4.794-71.365-43.672-2.13-43.672-2.13z",
    fill: "#46455b"
  }), _react.default.createElement("path", {
    d: "M392.153 569.174c-.533 2.13-2.663 12.249-2.663 15.444s2.13 9.054-6.923 11.184c-8.82 2.077-7.53-3.43-8.937-6.667-.037-.086-.074-.17-.117-.256-1.598-3.195 2.13-19.705 2.663-19.705.313 0 2.832-4.229 4.856-7.717a5.663 5.663 0 0 1 8.791-1.33 8.693 8.693 0 0 1 2.644 6.277 10.7 10.7 0 0 1-.314 2.77z",
    fill: "#605d82"
  }), _react.default.createElement("path", {
    d: "M392.153 569.174c-.533 2.13-2.663 12.249-2.663 15.444s2.13 9.054-6.923 11.184c-8.82 2.077-7.53-3.43-8.937-6.667 1.529-3.973 5.24-12.51 7.872-19.961 2.322-6.583 8.03-4.437 10.965-2.77a10.7 10.7 0 0 1-.314 2.77z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 407.598,
    cy: 336.971,
    r: 11.184,
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M398.544 339.101l-1.598 17.575 19.173 3.195s-2.13-15.444-.533-18.64-17.042-2.13-17.042-2.13z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M413.456 352.948s-15.977-1.598-17.042 0a9.151 9.151 0 0 0-1.066 4.26s-6.39 2.663-7.456 1.598-2.13-4.26-5.325-3.195-9.587 20.238-9.587 20.238 1.598-5.859 4.26 16.51 2.131 36.215 2.664 37.812-2.663 11.185 16.51 11.185 33.02-1.066 33.02-4.794-3.196-19.705 0-31.422 7.988-27.694 7.988-27.694l-6.39-20.77s-6.392-1.598-7.99 1.065-5.858 2.13-5.858 2.13-.532-6.39-3.728-6.923z",
    fill: "#605d82"
  }), _react.default.createElement("path", {
    d: "M383.1 356.676l-13.315-5.858s-25.031-19.173-23.966-36.215c0 0-8.521-7.99-9.054.532s2.13 27.694 8.521 34.085 28.227 26.629 31.422 27.161 6.391-19.705 6.391-19.705z",
    fill: "#605d82"
  }), _react.default.createElement("path", {
    d: "M337.83 316.2s-10.119-27.694-1.065-26.628 6.924 12.781 6.924 12.781V316.2z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M428.9 357.741l13.315-5.858s25.031-19.173 23.966-36.215c0 0 8.521-7.989 9.054.532s-2.13 27.694-8.521 34.085-28.227 26.629-31.422 27.161-6.391-19.705-6.391-19.705z",
    fill: "#605d82"
  }), _react.default.createElement("path", {
    d: "M474.17 317.265s10.119-27.693 1.065-26.628-6.924 12.781-6.924 12.781v13.847z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M416.119 323.656l1.598-1.065s-10.12-5.858-14.38-2.663-5.326 5.859-6.39 6.924-3.729 6.923-2.131 9.054 1.065 2.567 2.13 4.479-1.86 9.603 6.26 11.882 14.51-7.308 15.576-9.438 4.793-16.51-2.663-19.173zM825.163 474.191c0 58.96 36.989 106.67 82.7 106.67",
    fill: "#46455b"
  }), _react.default.createElement("path", {
    d: "M907.862 580.861c0-59.622 41.278-107.868 92.288-107.868M855.127 479.536c0 56.006 23.587 101.325 52.735 101.325",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M907.862 580.861c0-76.184 47.71-137.832 106.67-137.832",
    fill: "#46455b"
  }), _react.default.createElement("path", {
    d: "M890.465 581.613s11.728-.36 15.262-2.878 18.041-5.522 18.918-1.485 17.625 20.076 4.384 20.182-30.766-2.062-34.294-4.21-4.27-11.609-4.27-11.609z",
    fill: "#a8a8a8"
  }), _react.default.createElement("path", {
    d: "M929.265 596.027c-13.24.107-30.766-2.062-34.294-4.211-2.686-1.637-3.757-7.509-4.115-10.218l-.391.015s.742 9.46 4.27 11.608 21.053 4.318 34.294 4.211c3.822-.03 5.143-1.39 5.07-3.404-.53 1.217-1.989 1.976-4.834 2z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M275 596h237M876.888 596.479h74"
  }));
};

UndrawMediaPlayer.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawMediaPlayer;
exports.default = _default;