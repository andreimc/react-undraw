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

var UndrawFilter = function UndrawFilter(_props) {
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
    viewBox: "0 0 857.1 758.83",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 728.85,
    y1: 502.58,
    x2: 728.85,
    y2: 461.76,
    gradientTransform: "scale(1 -1) rotate(58 1264.09 -185.846)",
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
    x1: 715.36,
    y1: 501.1,
    x2: 715.36,
    y2: 446.22,
    gradientTransform: "rotate(-31.73 411.518 305.328)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 769.97,
    y1: 356.2,
    x2: 769.97,
    y2: 269.16,
    gradientTransform: "rotate(-31.8 408.68 305.4)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 411.46,
    y1: 100.6,
    x2: 411.46,
    y2: 15.23,
    gradientTransform: "rotate(23.79 296.18 251.084)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 118.53,
    y1: 758.83,
    x2: 118.53,
    y2: 526.53,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 424.76,
    y1: 252.76,
    x2: 424.76,
    y2: 157.57,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 266.79,
    y1: 132.04,
    x2: 266.79,
    y2: 50.65,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 879.08,
    y1: 629.37,
    x2: 879.08,
    y2: 507.77,
    gradientTransform: "rotate(-31.73 408.502 304.566)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 396.83,
    y1: 225.01,
    x2: 396.83,
    y2: 121.04,
    gradientTransform: "rotate(-31.8 415.167 305.877)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 236.43,
    y1: 375.71,
    x2: 236.43,
    y2: 256.45,
    gradientTransform: "rotate(23.79 291.219 255.897)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 685.12,
    y1: 40.19,
    x2: 685.12,
    y2: -61.78,
    gradientTransform: "matrix(.89 .39 -.39 .88 143.07 -91.73)",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__l",
    x1: 412.8,
    y1: 499.65,
    x2: 412.8,
    y2: 373.23,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__m",
    x1: 738.57,
    y1: 755.54,
    x2: 738.57,
    y2: 523.23,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__n",
    x1: 427.78,
    y1: 756.43,
    x2: 427.78,
    y2: 522.45,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__o",
    x1: 426.61,
    y1: 68.13,
    x2: 426.61,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__p",
    x1: 713.61,
    y1: 139.13,
    x2: 713.61,
    y2: 71,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    transform: "rotate(-89.4 290.557 339.862)",
    fill: "url(#prefix__a)",
    d: "M395.77 275.4h31.61v26.49h-31.61z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M252.768 233.292l-25.599-.232.276-30.319 25.598.233z"
  }), _react.default.createElement("circle", {
    cx: 411.47,
    cy: 287.77,
    r: 4.72,
    transform: "rotate(-89.48 290.164 338.984)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 411.46,
    cy: 289.35,
    r: 4.29,
    transform: "rotate(-89.48 290.151 340.552)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M240.986 224.747l-2-.018.031-3.43 2 .018z"
  }), _react.default.createElement("path", {
    d: "M244.628 233.215l-9.87-.09.041-4.509a4.93 4.93 0 0 1 4.975-4.885 4.93 4.93 0 0 1 4.885 4.975l-.04 4.51h.01z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 411.52,
    cy: 283.05,
    r: 1.72,
    transform: "rotate(-89.48 290.203 334.263)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M239.55 209.68a5.13 5.13 0 0 0-2.69.44 6 6 0 0 0-2.08 1.12 5.78 5.78 0 0 0-1.37 4.18 10.38 10.38 0 0 1-.63 4.43 4.39 4.39 0 0 1-4.06 2.37 3.5 3.5 0 0 0 3.33.11 5 5 0 0 0 2.25-2 12.3 12.3 0 0 0 .8-1.92 24.87 24.87 0 0 1 2.88-5.53 3.55 3.55 0 0 1 .64-.75 2.42 2.42 0 0 1 1.23-.49c.37 0 1 .12 1.22-.24.48-.79-1.03-1.61-1.52-1.72z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    transform: "rotate(-.52 -7111.199 19141.145)",
    fill: "url(#prefix__b)",
    d: "M740.67 267.4h35.62v42.5h-35.62z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M569.714 197.751l34.428-.312.37 40.768-34.428.312z"
  }), _react.default.createElement("circle", {
    cx: 758.62,
    cy: 287.47,
    r: 6.35,
    transform: "rotate(-.52 -7111.194 19140.043)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 758.64,
    cy: 289.59,
    r: 5.77,
    transform: "rotate(-.52 -7111.204 19142.246)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M585.898 222.415l2.69-.025.042 4.62-2.69.024z"
  }), _react.default.createElement("path", {
    d: "M587.518 225.67a6.64 6.64 0 0 1 6.7 6.579l.055 6.04-13.23.12-.054-6a6.64 6.64 0 0 1 6.58-6.7z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 758.56,
    cy: 281.13,
    r: 2.31,
    transform: "rotate(-.52 -7111.169 19134.534)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M587.86 206.79a6.9 6.9 0 0 1 3.61.59 8 8 0 0 1 2.79 1.51c1.48 1.38 1.79 3.59 1.84 5.61s-.06 4.15.84 6a5.9 5.9 0 0 0 5.45 3.18 4.71 4.71 0 0 1-4.47.14 6.67 6.67 0 0 1-3-2.73 16.54 16.54 0 0 1-1.08-2.58 33.45 33.45 0 0 0-3.87-7.44 4.77 4.77 0 0 0-.86-1 3.25 3.25 0 0 0-1.65-.66c-.49-.07-1.33.16-1.64-.32-.66-1.06 1.32-2.16 2.04-2.3z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    transform: "rotate(-.52 -7151.227 18977.888)",
    fill: "url(#prefix__c)",
    d: "M690.52 89.66h56.49v67.4h-56.49z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M519.817 20.6l54.598-.495.587 64.657-54.598.495z"
  }), _react.default.createElement("circle", {
    cx: 718.98,
    cy: 121.5,
    r: 10.07,
    transform: "rotate(-.52 -7151.217 18975.684)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 719.01,
    cy: 124.85,
    r: 9.15,
    transform: "rotate(-.52 -7151.232 18978.99)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M545.493 59.708l4.27-.039.067 7.32-4.27.038z"
  }), _react.default.createElement("path", {
    d: "M548.285 64.223a10.52 10.52 0 0 1 10.625 10.365l.096 9.61-21 .21-.096-9.61a10.52 10.52 0 0 1 10.375-10.575z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 718.89,
    cy: 111.43,
    r: 3.66,
    transform: "rotate(-.52 -7151.172 18965.768)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M548.64 34.9a10.94 10.94 0 0 1 5.73.94 12.73 12.73 0 0 1 4.43 2.4c2.34 2.2 2.84 5.69 2.92 8.9s-.1 6.58 1.33 9.45a9.36 9.36 0 0 0 8.65 5 7.47 7.47 0 0 1-7.09.22 10.59 10.59 0 0 1-4.8-4.33 26.23 26.23 0 0 1-1.71-4.08 53 53 0 0 0-6.14-11.8 7.56 7.56 0 0 0-1.36-1.6 5.16 5.16 0 0 0-2.62-1c-.78-.11-2.12.26-2.61-.51-1.02-1.62 2.12-3.37 3.27-3.59z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    transform: "rotate(-.52 -7380.408 18976.848)",
    fill: "url(#prefix__d)",
    d: "M450.51 87h58.16v67.65h-58.16z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M279.933 18.027l55.998-.508.602 66.317-55.998.508z"
  }), _react.default.createElement("circle", {
    cx: 479.2,
    cy: 119.62,
    r: 10.32,
    transform: "rotate(-.52 -7380.403 18975.746)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 479.23,
    cy: 123.06,
    r: 9.38,
    transform: "rotate(-.52 -7380.418 18979.052)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M305.638 58.154l4.38-.04.068 7.51-4.38.04z"
  }), _react.default.createElement("path", {
    d: "M308.346 63.44a10.79 10.79 0 0 1 10.888 10.69l.09 9.85-21.58.196-.09-9.84a10.79 10.79 0 0 1 10.692-10.897zM300.49 41.6s6.22-3.81 7.44-7.89a37.68 37.68 0 0 0 7.29 9.94z",
    fill: "#fff"
  })), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M0 526.53h237.07v232.3H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M1.19 528.31h234.69v228.73H1.19z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M25.02 547.31h187.03v145.2H25.02z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M36.4 708.02h165.15v7.61H36.4zM62.75 723.23H175.2v7.61H62.75z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M382.92 157.57h83.67v95.18h-83.67z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M385.57 158.9h79.25v93.86h-79.25z"
  }), _react.default.createElement("circle", {
    cx: 424.31,
    cy: 203.17,
    r: 14.61,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 424.31,
    cy: 208.04,
    r: 13.28,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M421.21 216.01h6.2v10.63h-6.2z"
  }), _react.default.createElement("path", {
    d: "M422.78 223.54h4.38a13.08 13.08 0 0 1 13.08 13.08v16.14H409.7v-16.14a13.08 13.08 0 0 1 13.08-13.08zM417.45 187.59q-1.41.74-2.76 1.57a4.79 4.79 0 0 0-2 1.83 3.48 3.48 0 0 1-.46.89c-.42.46-1.12.45-1.72.59-2 .46-3 2.61-3.49 4.55a32.41 32.41 0 0 0-.76 3.5 4.38 4.38 0 0 0 .07 2.31c.13.32.32.6.42.93.36 1.2-.66 2.34-.91 3.56a6 6 0 0 0 .55 3.25 3.89 3.89 0 0 0 .43.92 6.24 6.24 0 0 0 .54.61 5.17 5.17 0 0 1 1 1.59 34.22 34.22 0 0 1 6.19 1.73c3.25 1.27 6.47 3.06 10 2.9a9.16 9.16 0 0 0 2.77-.57c1.74-.65 3.26-1.83 5-2.4a43.84 43.84 0 0 1 5-.84c.79-.16 1.77-.76 1.47-1.51a2.33 2.33 0 0 0 2.38-.47 6.36 6.36 0 0 0 1.47-2.08 19.25 19.25 0 0 0 1.65-4.12 11.66 11.66 0 0 0-1.05-8.22 3.68 3.68 0 0 0-1-1.28c-.32-.23-.7-.37-1-.62a3.7 3.7 0 0 1-.77-1q-1.66-2.73-3.51-5.33c-1.22-1.72-2.61-3.48-4.58-4.23-2.92-1.11-5.05.66-7.83.77-1.24 0-2.28-.45-3.59-.19a13.08 13.08 0 0 0-3.51 1.36z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M231.01 50.65h71.54v81.39h-71.54z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M233.28 51.79h67.76v80.25h-67.76z"
  }), _react.default.createElement("circle", {
    cx: 266.4,
    cy: 89.64,
    r: 12.49,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 266.4,
    cy: 93.81,
    r: 11.36,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M263.75 100.62h5.3v9.08h-5.3z"
  }), _react.default.createElement("path", {
    d: "M267 107.05a13.06 13.06 0 0 1 13 13.06V132h-26.09v-11.89A13.06 13.06 0 0 1 267 107.05zM260.55 76.32q-1.2.63-2.36 1.35a4.1 4.1 0 0 0-1.67 1.56 3 3 0 0 1-.39.76c-.36.39-1 .38-1.47.5-1.67.39-2.53 2.23-3 3.89a27.71 27.71 0 0 0-.65 3 3.74 3.74 0 0 0 .06 2c.11.27.27.52.36.79.31 1-.56 2-.78 3a5.16 5.16 0 0 0 .47 2.78 3.33 3.33 0 0 0 .37.79 5.33 5.33 0 0 0 .46.52 4.42 4.42 0 0 1 .85 1.36 29.26 29.26 0 0 1 5.28 1.5c2.78 1.08 5.53 2.62 8.51 2.48a7.83 7.83 0 0 0 2.37-.49c1.49-.56 2.79-1.56 4.3-2a37.49 37.49 0 0 1 4.25-.72c.68-.13 1.51-.65 1.26-1.29a2 2 0 0 0 2-.4 5.44 5.44 0 0 0 1.25-1.78 16.46 16.46 0 0 0 1.41-3.52 10 10 0 0 0-.9-7 3.14 3.14 0 0 0-.87-1.1c-.27-.2-.6-.32-.86-.53a3.17 3.17 0 0 1-.66-.85q-1.42-2.33-3-4.55a9.28 9.28 0 0 0-3.92-3.61c-2.5-1-4.32.57-6.69.66-1.06 0-1.95-.39-3.07-.16a11.18 11.18 0 0 0-2.91 1.06z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    transform: "translate(-173.94 -62.06)",
    fill: "url(#prefix__h)",
    d: "M908.12 234.47h78.92v94.17h-78.92z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M737.727 166.025l76.277-.692.82 90.336-76.277.693z"
  }), _react.default.createElement("circle", {
    cx: 947.89,
    cy: 278.95,
    r: 14.06,
    transform: "rotate(-.52 -6923.842 19132.078)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 947.93,
    cy: 283.64,
    r: 12.78,
    transform: "rotate(-.52 -6923.862 19136.485)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M773.585 220.671l5.97-.054.092 10.23-5.97.054z"
  }), _react.default.createElement("path", {
    d: "M775.66 227.901l3.24-.03a13.08 13.08 0 0 1 13.199 12.962l.136 14.999-29.4.267-.135-15a13.08 13.08 0 0 1 12.96-13.198z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 947.76,
    cy: 264.89,
    r: 5.11,
    transform: "rotate(-.52 -6923.777 19117.754)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M777.98 186c2.69-.51 5.44.36 8 1.31a17.79 17.79 0 0 1 6.18 3.35c3.27 3.07 4 8 4.08 12.44s-.14 9.19 1.86 13.2a13.08 13.08 0 0 0 12.09 7.05c-2.87 1.92-6.76 1.73-9.91.31a14.79 14.79 0 0 1-6.7-6.06 36.65 36.65 0 0 1-2.39-5.71 74.11 74.11 0 0 0-8.57-16.47 10.57 10.57 0 0 0-1.9-2.23 7.21 7.21 0 0 0-3.66-1.46c-1.09-.15-3 .36-3.64-.72-1.43-2.26 2.96-4.71 4.56-5.01z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    transform: "translate(-173.27 -67.62)",
    fill: "url(#prefix__i)",
    d: "M294.93 164.1h67.48v80.52h-67.48z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M124.372 95.385l65.217-.591.7 77.236-65.216.592z"
  }), _react.default.createElement("circle", {
    cx: 328.92,
    cy: 202.13,
    r: 12.02,
    transform: "rotate(-.52 -7537.229 19055.47)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 328.96,
    cy: 206.14,
    r: 10.93,
    transform: "rotate(-.52 -7537.249 19059.877)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M155.037 142.098l5.1-.046.079 8.74-5.1.046z"
  }), _react.default.createElement("path", {
    d: "M158.193 148.268a12.57 12.57 0 0 1 12.683 12.456l.105 11.48-25.14.228-.104-11.48a12.57 12.57 0 0 1 12.456-12.684z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 328.81,
    cy: 190.11,
    r: 4.37,
    transform: "rotate(-.52 -7537.174 19043.35)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M158.79 112.42c2.3-.44 4.65.31 6.85 1.12a15.21 15.21 0 0 1 5.29 2.86c2.8 2.62 3.4 6.8 3.49 10.64s-.12 7.86 1.59 11.29a11.18 11.18 0 0 0 10.33 6c-2.45 1.64-5.78 1.48-8.47.27a12.65 12.65 0 0 1-5.73-5.18 31.33 31.33 0 0 1-2-4.88 63.36 63.36 0 0 0-7.34-14.1 9 9 0 0 0-1.62-1.91 6.16 6.16 0 0 0-3.13-1.25c-.93-.13-2.53.31-3.11-.62-1.27-1.89 2.49-3.98 3.85-4.24z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    transform: "rotate(-.52 -7644.522 19146.437)",
    fill: "url(#prefix__j)",
    d: "M176.19 241.61h81.25v94.51h-81.25z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M5.962 173.256l78.227-.71.84 92.646-78.226.71z"
  }), _react.default.createElement("circle", {
    cx: 216.28,
    cy: 287.18,
    r: 14.42,
    transform: "rotate(-.52 -7645.614 19144.229)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 216.33,
    cy: 291.98,
    r: 13.11,
    transform: "rotate(-.52 -7645.639 19149.738)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M41.873 229.301l6.12-.056.094 10.49-6.12.056z"
  }), _react.default.createElement("path", {
    d: "M43.66 236.714l4-.037a13.08 13.08 0 0 1 13.198 12.961l.143 15.76-30.159.273-.143-15.75a13.08 13.08 0 0 1 12.96-13.197zM34.69 206.2s8.69-5.32 10.39-11c0 0 4 8.27 10.18 13.89z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 288.75,
    cy: 679,
    r: 24.91,
    transform: "rotate(-.52 -7572.479 19539.025)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 288.82,
    cy: 687.3,
    r: 22.65,
    transform: "rotate(-.52 -7572.514 19546.738)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M112.18 630.366l10.569-.096.164 18.12-10.57.095z"
  }), _react.default.createElement("path", {
    d: "M117.915 643.152l1.59-.014a25.25 25.25 0 0 1 25.479 25.06l.223 24.578-52.088.473-.223-24.579a25.25 25.25 0 0 1 25.02-25.518zM99.77 590.42s15-9.2 17.94-19c0 0 6.92 14.28 17.58 24z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    transform: "rotate(-.52 -7099.63 19019.993)",
    fill: "url(#prefix__k)",
    d: "M724.88 124.81h67.76v77.41h-67.76z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M554.457 56.094l65.237-.593.689 75.877-65.238.592z"
  }), _react.default.createElement("ellipse", {
    cx: 758.31,
    cy: 162.14,
    rx: 12.03,
    ry: 11.81,
    transform: "rotate(-.52 -7099.626 19018.89)",
    fill: "#fff"
  }), _react.default.createElement("ellipse", {
    cx: 758.35,
    cy: 166.07,
    rx: 10.93,
    ry: 10.74,
    transform: "rotate(-.52 -7099.64 19022.196)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M584.595 101.311l5.1-.051.086 8.59-5.1.051z"
  }), _react.default.createElement("path", {
    d: "M587.55 108.053a12.57 12.57 0 0 1 12.683 12.456l.1 11.05-25.148.227-.1-11.05a12.57 12.57 0 0 1 12.465-12.683zM578.4 83.04s7.25-4.36 8.66-9a43.1 43.1 0 0 0 8.49 11.38z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M359.03 373.23v1.82l39.44 68.38v40.72l28.97 15.5v-56.22l39.14-68.38v-1.82H359.03z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#cfd8dc",
    d: "M360.23 374.12h104.55v1.8H360.23z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M360.23 374.12h104.55v1.8H360.23z"
  }), _react.default.createElement("path", {
    fill: "#cfd8dc",
    d: "M360.23 375.92l38.34 67.41v40.14l28.17 14.38v-54.52l38.04-67.41H360.23z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M400.37 483.47v-40.14l-38.35-67.41h-1.79l38.34 67.41v40.14h1.8z"
  }), _react.default.createElement("path", {
    fill: "#cfd8dc",
    d: "M398.57 483.47l28.17 15.28v-.9l-26.37-14.38h-1.8z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M398.57 483.47l28.17 15.28v-.9l-26.37-14.38h-1.8z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M620.03 523.23H857.1v232.3H620.03z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M621.23 525.02h234.69v228.73H621.23z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M645.05 544.01h187.03v145.2H645.05z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M658.27 709.61h165.15v7.61H658.27zM684.62 724.82h112.45v7.61H684.62z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M308.39 522.45h238.78v233.98H308.39z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M309.59 524.25h236.38v230.38H309.59z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M333.59 543.38h188.38v146.25H333.59z"
  }), _react.default.createElement("path", {
    fill: "#e0e0e0",
    d: "M340.65 707.15h166.34v7.66H340.65zM367.18 722.47h113.27v7.66H367.18z"
  }), _react.default.createElement("path", {
    d: "M42.13 283.42s-1 111 97 90 101-55 213-11M776.13 273.42s1 111-97 90-101-55-213-11M424.13 273.42s-13 31 6 46-2 47-2 47M157.55 194.66s15 73 88 73 137 82 123 92M263.55 153.66s-19.22 35.35 1.91 71.37a76 76 0 0 0 45.67 34.44c45.31 12.42 65.15 6.65 94.43 81.18M586.55 155.66s15.35 18.69-13.37 58.24a97.73 97.73 0 0 1-45.32 33.84c-29 10.77-57.31 41.92-57.31 87.92",
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12"
  }), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    fill: "url(#prefix__o)",
    d: "M396.67 0h59.89v68.13h-59.89z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M398.57.95h56.72v67.18h-56.72z"
  }), _react.default.createElement("circle", {
    cx: 426.29,
    cy: 32.64,
    r: 10.46,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 426.29,
    cy: 36.13,
    r: 9.51,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M424.08 41.83h4.44v7.61h-4.44z"
  }), _react.default.createElement("path", {
    d: "M426.77 47.22a10.93 10.93 0 0 1 10.93 10.93v10h-21.86v-10a10.93 10.93 0 0 1 10.93-10.93zM421.39 21.49q-1 .53-2 1.13a3.43 3.43 0 0 0-1.4 1.31 2.49 2.49 0 0 1-.33.64c-.3.33-.8.32-1.23.42-1.4.33-2.12 1.87-2.5 3.25a23.2 23.2 0 0 0-.55 2.51 3.13 3.13 0 0 0 .05 1.65c.09.23.23.43.3.66.26.86-.47 1.67-.65 2.55a4.32 4.32 0 0 0 .39 2.33 2.78 2.78 0 0 0 .31.66 4.46 4.46 0 0 0 .39.43 3.7 3.7 0 0 1 .71 1.13 24.49 24.49 0 0 1 4.42 1.26c2.33.91 4.63 2.19 7.13 2.07a6.56 6.56 0 0 0 2-.41c1.25-.47 2.33-1.31 3.6-1.71a31.38 31.38 0 0 1 3.56-.6c.57-.11 1.27-.54 1.05-1.08a1.67 1.67 0 0 0 1.71-.33 4.55 4.55 0 0 0 1-1.49 13.78 13.78 0 0 0 1.2-2.95 8.34 8.34 0 0 0-.75-5.89 2.63 2.63 0 0 0-.73-.92c-.23-.17-.5-.27-.72-.45a2.65 2.65 0 0 1-.55-.72q-1.19-2-2.51-3.81a7.76 7.76 0 0 0-3.28-3c-2.09-.8-3.62.47-5.6.55a14.28 14.28 0 0 0-2.57-.14 9.36 9.36 0 0 0-2.45.95z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    fill: "url(#prefix__p)",
    d: "M683.67 71h59.89v68.13h-59.89z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    fill: "#e6e6e6",
    d: "M685.57 71.95h56.72v67.18h-56.72z"
  }), _react.default.createElement("circle", {
    cx: 713.29,
    cy: 103.64,
    r: 10.46,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 713.29,
    cy: 107.13,
    r: 9.51,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M711.08 112.83h4.44v7.61h-4.44z"
  }), _react.default.createElement("path", {
    d: "M713.77 118.22a10.93 10.93 0 0 1 10.93 10.93v10h-21.86v-10a10.93 10.93 0 0 1 10.93-10.93zM708.39 92.49q-1 .53-2 1.13a3.43 3.43 0 0 0-1.4 1.31 2.49 2.49 0 0 1-.33.64c-.3.33-.8.32-1.23.42-1.4.33-2.12 1.87-2.5 3.25a23.2 23.2 0 0 0-.55 2.51 3.13 3.13 0 0 0 .05 1.65c.09.23.23.43.3.66.26.86-.47 1.67-.65 2.55a4.32 4.32 0 0 0 .39 2.33 2.78 2.78 0 0 0 .31.66 4.46 4.46 0 0 0 .39.43 3.7 3.7 0 0 1 .71 1.13 24.49 24.49 0 0 1 4.42 1.26c2.33.91 4.63 2.19 7.13 2.07a6.56 6.56 0 0 0 2-.41c1.25-.47 2.33-1.31 3.6-1.71a31.38 31.38 0 0 1 3.56-.6c.57-.11 1.27-.54 1.05-1.08a1.67 1.67 0 0 0 1.71-.33 4.55 4.55 0 0 0 1-1.49 13.78 13.78 0 0 0 1.2-2.95 8.34 8.34 0 0 0-.75-5.89 2.63 2.63 0 0 0-.73-.92c-.23-.17-.5-.27-.72-.45a2.65 2.65 0 0 1-.55-.72q-1.19-2-2.51-3.81a7.76 7.76 0 0 0-3.28-3c-2.09-.8-3.62.47-5.6.55a14.28 14.28 0 0 0-2.57-.14 9.36 9.36 0 0 0-2.45.95z",
    fill: "#fff"
  })), _react.default.createElement("circle", {
    cx: 595.82,
    cy: 680.79,
    r: 23.66,
    transform: "rotate(-.52 -7272.73 19529.367)",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 595.89,
    cy: 688.68,
    r: 21.51,
    transform: "rotate(-.52 -7272.77 19538.182)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M419.593 630.987l10.04-.091.156 17.21-10.04.09z"
  }), _react.default.createElement("path", {
    d: "M425.803 643.129a24.74 24.74 0 0 1 24.964 24.514l.205 22.58-49.468.448-.205-22.579a24.74 24.74 0 0 1 24.504-24.963z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 595.6,
    cy: 657.13,
    r: 8.6,
    transform: "translate(-177.33 -65.2)",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M426.96 572.56c4.53-.86 9.15.61 13.47 2.2 3.73 1.38 7.51 2.92 10.4 5.64 5.5 5.16 6.68 13.39 6.87 20.93s-.23 15.46 3.14 22.22a22 22 0 0 0 20.33 11.87c-4.83 3.23-11.38 2.91-16.68.53a24.88 24.88 0 0 1-11.27-10.19 61.66 61.66 0 0 1-4-9.6 124.69 124.69 0 0 0-14.45-27.74 17.78 17.78 0 0 0-3.2-3.76 12.13 12.13 0 0 0-6.16-2.46c-1.84-.25-5 .61-6.12-1.21-2.4-3.8 4.99-7.92 7.67-8.43z",
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 743.84,
    cy: 612.28,
    r: 22.94,
    fill: "#fff"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M738.49 626.05h10.71v18.35h-10.71z"
  }), _react.default.createElement("path", {
    d: "M743.86 639h2.27a25.25 25.25 0 0 1 25.25 25.25v25.22h-52.77V664.3a25.25 25.25 0 0 1 25.25-25.3zM769.55 635.42c-1 1-48 3-51 0 2-10 0-34.5 0-34.5a25.5 25.5 0 0 1 25.5-25.5 25.5 25.5 0 0 1 25.5 25.5s-3 30.5 0 34.5z",
    fill: "#fff"
  }));
};

UndrawFilter.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawFilter;
exports.default = _default;