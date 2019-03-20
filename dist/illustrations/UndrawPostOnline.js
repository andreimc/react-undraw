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

var UndrawPostOnline = function UndrawPostOnline(_props) {
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
    viewBox: "0 0 680 768.1",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 633.13,
    y1: 807.92,
    x2: 633.13,
    y2: 65.95,
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
    x1: 372.74,
    y1: 339.36,
    x2: 372.74,
    y2: 231.1,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__c",
    x1: 416.98,
    y1: 609.34,
    x2: 573.53,
    y2: 609.34,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("path", {
    d: "M505.11 701.05a23.27 23.27 0 0 1-2.11 3.25q-10.51-7.39-21.38-14.51l.47-.93a20.53 20.53 0 0 1 7.27-7.92c4-2.46 8.51-3 12.22-1s5.78 6 6 10.67a20.6 20.6 0 0 1-2.47 10.44z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 763.35,
    cy: 742.53,
    rx: 17.05,
    ry: 13.02,
    transform: "rotate(-62.09 578.63 925.549)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 773.1,
    cy: 724.12,
    rx: 17.05,
    ry: 13.02,
    transform: "rotate(-62.09 588.38 907.133)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 782.85,
    cy: 705.71,
    rx: 17.05,
    ry: 13.02,
    transform: "rotate(-62.09 598.13 888.717)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 792.6,
    cy: 687.3,
    rx: 17.05,
    ry: 13.02,
    transform: "rotate(-62.09 607.883 870.314)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M556.25 472.55a61.7 61.7 0 0 1-1-8.58l32.92 11.08-32.83-17.08a62.45 62.45 0 0 1 22.08-44.23l31.81 46-24.7-51.16a62.37 62.37 0 1 1 58.36 109.89 62.4 62.4 0 0 1 1 13.39l-50-.4 49.28 8.12a62.37 62.37 0 0 1-36.29 47 62.37 62.37 0 1 1-86.65-45.89 62.39 62.39 0 0 1 36.1-68.15z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M636.64 558.76a62.14 62.14 0 0 1-29.84 27.83 62.37 62.37 0 1 1-86.65-45.89c-2.42-13.29 119.77 11.87 116.49 18.06z",
    opacity: 0.1
  })), _react.default.createElement("g", {
    opacity: 0.2
  }, _react.default.createElement("path", {
    d: "M217 621.72a43.27 43.27 0 0 0 2.39 7.05q23.11-8.85 46.75-17c-.14-.64-.28-1.3-.44-2a39.53 39.53 0 0 0-9.83-18.22c-6.29-6.48-14.45-9.64-22.3-7.72s-13.63 8.47-16.24 17.09a39.55 39.55 0 0 0-.33 20.8z",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 491.83,
    cy: 642.75,
    rx: 25.07,
    ry: 32.81,
    transform: "rotate(-13.72 87.545 1690.162)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 482.32,
    cy: 603.78,
    rx: 25.07,
    ry: 32.81,
    transform: "rotate(-13.72 78.06 1651.243)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 472.81,
    cy: 564.82,
    rx: 25.07,
    ry: 32.81,
    transform: "rotate(-13.72 68.539 1612.278)",
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 463.3,
    cy: 525.86,
    rx: 25.07,
    ry: 32.81,
    transform: "rotate(-13.72 59.06 1573.318)",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M229.38 171.05a118.65 118.65 0 0 0 5.81-15.56l-66.55 5.11L238 144.19a120.32 120.32 0 0 0-20.33-93l-81.12 70.86 70.26-83.83A120.07 120.07 0 1 0 46 215.77a119.33 119.33 0 0 0-8.11 24.52l93.59 22.88-95.8-8.12a120.14 120.14 0 0 0 45.54 105 120.07 120.07 0 1 0 183.37-44.75 120.08 120.08 0 0 0-35.21-144.25z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M38.66 293.99a119.51 119.51 0 0 0 42.56 66 120.07 120.07 0 1 0 183.37-44.75c10.79-23.64-229.13-34.34-225.93-21.25z",
    opacity: 0.1
  })), _react.default.createElement("path", {
    d: "M820 234.26h-2.23V114c0-26.52-21.83-48-48.76-48H495.88c-26.93 0-48.76 21.5-48.76 48v49.85h-.65a2.85 2.85 0 0 0-2.87 2.82v24a2.85 2.85 0 0 0 2.87 2.82H447.17V218h-.88a2.84 2.84 0 0 0-2.86 2.82v45.89a2.85 2.85 0 0 0 2.86 2.83h.88v18h-.76a2.84 2.84 0 0 0-2.87 2.82v46.34a2.84 2.84 0 0 0 2.87 2.82h.76V759.9c0 26.52 21.83 48 48.76 48H769c26.93 0 48.76-21.5 48.76-48V324.2H820a2.85 2.85 0 0 0 2.87-2.82v-84.3a2.85 2.85 0 0 0-2.87-2.82z",
    transform: "translate(-260 -65.95)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("g", {
    opacity: 0.9
  }, _react.default.createElement("rect", {
    x: 547.18,
    y: 171.26,
    width: 10.77,
    height: 88.82,
    rx: 2.29,
    fill: "#e5e7eb"
  }), _react.default.createElement("rect", {
    x: 189.05,
    y: 101.68,
    width: 6.05,
    height: 29.24,
    rx: 2.29,
    fill: "#e5e7eb"
  }), _react.default.createElement("rect", {
    x: 188.83,
    y: 155.21,
    width: 6.82,
    height: 50.89,
    rx: 2.29,
    fill: "#e5e7eb"
  }), _react.default.createElement("rect", {
    x: 188.94,
    y: 223.91,
    width: 6.49,
    height: 51.33,
    rx: 2.29,
    fill: "#e5e7eb"
  }), _react.default.createElement("rect", {
    x: 192.47,
    y: 5.05,
    width: 360.52,
    height: 732.71,
    rx: 38.99,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 337.96,
    y: 26.93,
    width: 50.35,
    height: 10.22,
    rx: 3.87,
    fill: "#e5e7eb"
  }), _react.default.createElement("circle", {
    cx: 401.71,
    cy: 32.04,
    r: 5.8,
    fill: "#e5e7eb"
  })), _react.default.createElement("path", {
    d: "M502.1 24.14h-41.27v5a23.58 23.58 0 0 1-23.58 23.57H305.67a23.58 23.58 0 0 1-23.58-23.57v-5h-38.72a28.63 28.63 0 0 0-28.63 28.63v637.28a28.63 28.63 0 0 0 28.63 28.63H502.1a28.63 28.63 0 0 0 28.63-28.63V52.77a28.63 28.63 0 0 0-28.63-28.63z",
    fill: "#ececf3"
  }), _react.default.createElement("ellipse", {
    cx: 87.26,
    cy: 753.55,
    rx: 57.19,
    ry: 9.67,
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M110.91 737.73c2.45-2.28 4.75-5 5.45-8.23s-.68-7.19-3.81-8.38c-3.5-1.34-7.24 1.08-10.07 3.53s-6.09 5.25-9.8 4.73a14.9 14.9 0 0 0 4.61-14 5.77 5.77 0 0 0-1.28-2.83c-1.94-2.08-5.46-1.19-7.79.45-7.39 5.2-9.46 15.25-9.5 24.3-.75-3.27-.12-6.67-.14-10s-.93-7.06-3.75-8.86a11.39 11.39 0 0 0-5.74-1.34c-3.32-.12-7 .21-9.29 2.64-2.83 3-2.09 8.09.36 11.42s6.19 5.41 9.63 7.71c2.61 1.75 5.26 3.79 6.87 6.56a5.91 5.91 0 0 1 .51 1.17H98a58.41 58.41 0 0 0 12.91-8.87z",
    fill: primaryColor
  }), _react.default.createElement("g", {
    opacity: 0.4,
    fill: primaryColor
  }, _react.default.createElement("ellipse", {
    cx: 620.02,
    cy: 700.35,
    rx: 32.64,
    ry: 5.52
  }), _react.default.createElement("path", {
    d: "M633.51 691.32a9.54 9.54 0 0 0 3.12-4.69c.4-1.87-.4-4.11-2.18-4.79-2-.76-4.13.62-5.75 2s-3.47 3-5.59 2.7a8.49 8.49 0 0 0 2.63-8 3.26 3.26 0 0 0-.73-1.61c-1.11-1.19-3.12-.68-4.44.25-4.22 3-5.4 8.71-5.43 13.87-.42-1.86-.06-3.8-.07-5.71s-.54-4-2.15-5.06a6.52 6.52 0 0 0-3.27-.76c-1.9-.07-4 .12-5.31 1.5-1.61 1.73-1.19 4.62.21 6.52s3.53 3.09 5.5 4.4a12.29 12.29 0 0 1 3.92 3.74 3.39 3.39 0 0 1 .29.67h11.9a33 33 0 0 0 7.35-5.03z"
  })), _react.default.createElement("g", {
    opacity: 0.4,
    fill: primaryColor
  }, _react.default.createElement("ellipse", {
    cx: 120.1,
    cy: 638.32,
    rx: 32.64,
    ry: 5.52
  }), _react.default.createElement("path", {
    d: "M133.6 629.29a9.43 9.43 0 0 0 3.11-4.7c.4-1.86-.39-4.1-2.18-4.78-2-.76-4.13.62-5.74 2s-3.48 3-5.59 2.7a8.54 8.54 0 0 0 2.63-8 3.38 3.38 0 0 0-.73-1.62c-1.11-1.18-3.12-.67-4.45.26-4.22 3-5.4 8.7-5.42 13.86-.43-1.86-.07-3.8-.08-5.71s-.53-4-2.14-5a6.46 6.46 0 0 0-3.28-.77c-1.89-.07-4 .12-5.3 1.51-1.61 1.73-1.19 4.62.21 6.52s3.53 3.08 5.49 4.4a12.09 12.09 0 0 1 3.92 3.74 4.11 4.11 0 0 1 .3.67h11.89a33.29 33.29 0 0 0 7.36-5.08z"
  })), _react.default.createElement("path", {
    fill: "#d6d8e0",
    d: "M238.98 77.05h51.09v51.09h-51.09zM327.77 80.7h107.04v9.73H327.77zM327.77 97.73h176.37v9.73H327.77zM327.77 114.76h176.37v9.73H327.77zM239.37 170.71h51.09v51.09h-51.09zM328.16 174.36H435.2v9.73H328.16zM328.16 191.39h176.37v9.73H328.16zM328.16 208.41h176.37v9.73H328.16zM239.76 264.37h51.09v51.09h-51.09zM328.56 268.01H435.6v9.73H328.56zM328.56 285.04h176.37v9.73H328.56zM328.56 302.07h176.37v9.73H328.56zM240.15 358.02h51.09v51.09h-51.09zM328.95 361.67h107.04v9.73H328.95zM328.95 378.7h176.37v9.73H328.95zM328.95 395.73h176.37v9.73H328.95zM240.55 451.68h51.09v51.09h-51.09zM329.34 455.33h107.04v9.73H329.34zM329.34 472.36h176.37v9.73H329.34zM329.34 489.39h176.37v9.73H329.34zM240.94 545.34h51.09v51.09h-51.09zM329.73 548.99h107.04v9.73H329.73zM329.73 566.02H506.1v9.73H329.73zM329.73 583.05H506.1v9.73H329.73zM241.33 639h51.09v51.09h-51.09zM330.12 642.65h107.04v9.73H330.12zM330.12 659.68h176.37v9.73H330.12zM330.12 676.71h176.37v9.73H330.12z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M155.01 231.1h435.45v108.25H155.01z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M157.44 233.54h431.8v103.39h-431.8z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M240.76 259.69h51.09v51.09h-51.09z"
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, _react.default.createElement("path", {
    d: "M329.56 263.34H436.6v9.73H329.56zM329.56 280.37h176.37v9.73H329.56zM329.56 297.4h176.37v9.73H329.56z"
  })), _react.default.createElement("path", {
    d: "M570.18 391.54c-2.72-2.69-7.24-3.58-10.51-1.6-2.54 1.53-3.94 4.38-5.22 7.07-1.87 4-4.61 7.74-5.45 12.06-2.31 11.91-11.79 21.16-15.59 32.67-1.36 4.11-2 8.52-4.15 12.27a39.05 39.05 0 0 1-3.4 4.68 131.8 131.8 0 0 0-13 19.83c-2.16.42-4.08 2.25-5.92 3.68a20.43 20.43 0 0 1-8 3.79 7.55 7.55 0 0 0-3.28 1.2c-1.38 1.15-1.57 3.22-2.69 4.61a7.18 7.18 0 0 1-3 2c0-.35-.05-.7-.06-1.06-.05-1.85-.08-3.71-.08-5.57a20.94 20.94 0 0 0-.06-27.18 41 41 0 0 1 1.15-8.59c.35-1.37.3-3.05-.81-3.94-.55-.43-1.26-.59-1.85-1a8.06 8.06 0 0 1-2-2.54 10.8 10.8 0 0 0-13.58-3.47c-3.61 1.9-5.8 5.7-9 8.28-1.64 1.32-3.53 2.31-5.17 3.64a21.47 21.47 0 0 0-6.69 10.88 62.32 62.32 0 0 0-1.82 12.84 11.59 11.59 0 0 0 .15 3.9 10.3 10.3 0 0 0 1.47 3 33.62 33.62 0 0 0 12.43 11.85 4.86 4.86 0 0 1 0 .77c0 .4-.13.79-.22 1.19l-.58-.16c-2.14-.48-4.45-.42-6.37-1.49-3.28-1.84-4.27-6.33-7.41-8.39a5.67 5.67 0 0 0-.84-.45 56.12 56.12 0 0 0-3.22-16.67c-.92-2.56-2.05-5.17-1.91-7.9.12-2.53 1.33-4.86 2.41-7.15 3.77-7.9 6.41-16.28 9-24.63q2.49-7.87 5-15.75a24.83 24.83 0 0 0 4.39-4.18 22.29 22.29 0 0 0 5.09-10.93 15.48 15.48 0 0 0-2.81-11.56 6.68 6.68 0 0 0-4.7-2.88 6.11 6.11 0 0 0-4.39 2 19.52 19.52 0 0 0-3.76 6.46c-1.64 3.87-3.3 7.89-3.14 12.09.13 3.48 1.43 7.37-.6 10.2-6.65 9.27-11.67 19.93-16.94 30.07a53.79 53.79 0 0 0-3.42 7.54 42 42 0 0 0-1.79 13c-.05 8.25 1.08 16.46 2.2 24.64.51 3.69 1.16 7.61 2.91 10.8a45.29 45.29 0 0 0-1.79 12.16 6.93 6.93 0 0 0 .44 2.79 11.52 11.52 0 0 0 2.21 2.78 12.45 12.45 0 0 1 3 9.84 27.91 27.91 0 0 0 .89 9.86c2 8.88 4 17.75 5.6 26.7a17.08 17.08 0 0 1 .38 5.08c-.31 2.42-1.65 4.72-1.36 7.15a27.06 27.06 0 0 1 .64 3.42 8.45 8.45 0 0 1-.6 2.56c-2.28 6.63-8.41 21.83-8.34 28.85l1.6-.38c-1.61 9.11-5.38 17.82-7.36 26.9a90 90 0 0 0-1.86 20.12 74.64 74.64 0 0 1-.16 9.1c-.31 2.69-1 5.32-1.38 8a72.48 72.48 0 0 0-.48 10.83 110.59 110.59 0 0 0 1 17c1.53 9.6-1.15 19.14-1.88 28.83a173.28 173.28 0 0 1-2.3 20.22c-.55 2.82-1.24 5.62-1.62 8.47-1.12 8.46.51 17.18-1.25 25.53-.83 3.91-2.31 8.3-.13 11.64.69 1.05 1.68 1.87 2.43 2.88a3.66 3.66 0 0 1 .7 3.53c-.43.92-1.43 1.52-1.68 2.5-.4 1.54 1.21 2.8 2.65 3.46l.41.16a3.71 3.71 0 0 0 .78 3 6.36 6.36 0 0 0 3.07 1.6l18.88 5.72c4.21 1.28 8.79 2.54 13 1.5a3.27 3.27 0 0 0 .75 1.62 6.36 6.36 0 0 0 3.07 1.6l18.74 5.68c4.82 1.46 10.11 2.9 14.74.92a8.37 8.37 0 0 0 3.38-2.55 8.92 8.92 0 0 0 1.2-7.47 6.09 6.09 0 0 0-1.82-3.34 8 8 0 0 0-4.36-1.43 8.81 8.81 0 0 1-3.82-1 2.75 2.75 0 0 1-.87-.91q1.62-1.6 3.14-3.32c-.82-.28-1.11-1.46-1.19-2.32-1.19-12.74 3.61-25.19 5.43-37.85a81 81 0 0 0 .48-19.18c-.22-2.41-.55-4.81-.65-7.23-.47-12.6 5.55-24.72 5.34-37.33-.1-5.9 3-11.72 4.51-17.43 1.32-5.06 1.36-10.36 1.39-15.6l.24-41.26c0-5.58 0-11.29-1.78-16.56a21 21 0 0 1-.72-9.06c5.09-2.25 9.91-5.58 15.35-5 1.45-3.85-.27-16.68-1.63-20.57a88.46 88.46 0 0 1-3-47.64c1.23-5.69-.46-11.74.91-17.41a10.53 10.53 0 0 1 1.49-3.74 4 4 0 0 1 3.43-1.81c0-3.47-.07-7-.3-10.52a25 25 0 0 0 5.57-6.41c3-5 4.71-10.63 6.78-16.07 3.67-9.6 8.68-18.61 12.89-28s4.62-19.66 8-29.38a22.08 22.08 0 0 1 10.75-12.38c2-1 4.13-1.72 5.58-3.36a9 9 0 0 0 1.94-4.77 12.61 12.61 0 0 0-3.22-10.64zm-117 413.13c.41-.45.81-.9 1.19-1.39-1.26-.2-2.8-1.12-2.83-2.4a13.27 13.27 0 0 1 .82-3.75 15 15 0 0 0 .28-6.66c-.28-1.55-.8-3-1.12-4.58a42.78 42.78 0 0 1-.6-5.18 85.69 85.69 0 0 0-3.64-18.36c-1.81-5.79.67-11.65 1.31-17.68.31-2.86.17-5.81 1.17-8.5.59-1.6 1.56-3 2.15-4.62 1.37-3.71.56-7.84-.28-11.71 5.92-10.73 7.88-23.53 10.11-35.61l3.76-20.33c.55-3 1.16-6.16 3-8.58a105.42 105.42 0 0 1 2.28 27.34 40.59 40.59 0 0 0 .1 8c.46 2.91 1.67 5.66 2.37 8.52 1.56 6.31.65 12.94 1 19.43.13 2.62.47 5.24.58 7.86.49 11.59-3.39 22.86-7.22 33.81-2.35 6.71-2.87 14.34-4 21.37-1.06 6.73-2.11 13.47-2.65 20.26-.16 2.07-.29 4.2-.54 6.3a16.46 16.46 0 0 0-1.95-.31 8.81 8.81 0 0 1-3.82-1 4.45 4.45 0 0 1-1.47-2.23z",
    transform: "translate(-260 -65.95)",
    fill: "url(#prefix__c)"
  }), _react.default.createElement("path", {
    d: "M234.16 752.44a8.11 8.11 0 0 1 4.36 1.42 6.07 6.07 0 0 1 1.82 3.32 8.84 8.84 0 0 1-1.2 7.43 8.3 8.3 0 0 1-3.38 2.52c-4.63 2-9.92.55-14.74-.9l-18.88-5.69a6.34 6.34 0 0 1-3.07-1.59 4.16 4.16 0 0 1-.08-4.85 9.47 9.47 0 0 1 4-3.19c5.88-2.86 12.5-3.52 19-3.64 2.4-.05 4.76-.57 6.39 1.28.86 1 .71 2.06 2 2.91a8.66 8.66 0 0 0 3.78.98z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M198.49 742.05a8 8 0 0 1 4.36 1.41 6.17 6.17 0 0 1 1.82 3.32 8.83 8.83 0 0 1-1.2 7.43 8.32 8.32 0 0 1-3.38 2.53c-4.63 2-9.92.54-14.74-.91l-18.88-5.69a6.26 6.26 0 0 1-3.07-1.59 4.16 4.16 0 0 1-.08-4.85 9.41 9.41 0 0 1 4-3.19c5.88-2.86 12.49-3.52 18.95-3.64 2.39 0 4.76-.57 6.39 1.28.86 1 .71 2.07 2 2.91a8.81 8.81 0 0 0 3.83.99z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M214.89 537.16a232.49 232.49 0 0 0-33.48-.94 6.57 6.57 0 0 0-2.17.34c-2.46 1-2.84 4.22-3.08 6.86-.94 10.67-5.65 20.62-8 31.09a88.77 88.77 0 0 0-1.86 20 73.49 73.49 0 0 1-.16 9c-.31 2.68-1 5.29-1.38 8a71.55 71.55 0 0 0-.48 10.76 109.16 109.16 0 0 0 1 16.87c1.53 9.54-1.15 19-1.88 28.64a171.33 171.33 0 0 1-2.3 20.09c-.55 2.8-1.24 5.58-1.62 8.41-1.12 8.41.51 17.08-1.25 25.37-.83 3.88-2.31 8.24-.13 11.56.69 1.05 1.68 1.86 2.43 2.86a3.63 3.63 0 0 1 .7 3.51c-.43.91-1.43 1.51-1.68 2.48-.4 1.53 1.21 2.79 2.65 3.44 10.85 4.89 24.84 1.44 32.16-7.95-1.26-.2-2.8-1.11-2.83-2.38a13.13 13.13 0 0 1 .82-3.73 14.8 14.8 0 0 0 .28-6.62c-.28-1.53-.8-3-1.12-4.55a42.13 42.13 0 0 1-.6-5.14 84.62 84.62 0 0 0-3.64-18.24c-1.81-5.75.67-11.57 1.31-17.57.31-2.83.17-5.77 1.17-8.44.59-1.59 1.56-3 2.15-4.59 1.37-3.69.56-7.78-.28-11.63 5.92-10.67 7.88-23.38 10.11-35.38l3.76-20.2c.55-3 1.16-6.11 3-8.52a104.09 104.09 0 0 1 2.28 27.17 40 40 0 0 0 .1 7.89c.46 2.89 1.67 5.62 2.37 8.47 1.56 6.26.65 12.85 1 19.3.13 2.6.47 5.2.58 7.81.49 11.51-3.39 22.71-7.22 33.58-2.35 6.67-2.87 14.25-4 21.23-1.06 6.69-2.11 13.38-2.65 20.13-.49 6.2-.7 12.91-4.56 17.78 3.52 2.29 7.17 4.62 11.29 5.41a20.94 20.94 0 0 0 13.93-2.69 44 44 0 0 0 11-9.36c-.82-.28-1.11-1.46-1.19-2.31-1.19-12.65 3.61-25 5.43-37.6a80 80 0 0 0 .48-19.06c-.22-2.39-.55-4.77-.65-7.17-.47-12.52 5.55-24.57 5.34-37.09-.1-5.86 3-11.65 4.51-17.32 1.32-5 1.36-10.29 1.39-15.49l.24-41c0-5.55 0-11.22-1.78-16.46-2.2-6.29.31-13.53.69-20.18a83.22 83.22 0 0 1-32.18 3.56z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M250.55 419.37a130.74 130.74 0 0 1 15.31-24.18 39.43 39.43 0 0 0 3.4-4.64c2.15-3.72 2.79-8.11 4.15-12.19 3.8-11.44 13.28-20.63 15.59-32.46.84-4.29 3.58-8 5.45-12 1.28-2.68 2.68-5.5 5.22-7 3.27-2 7.79-1.07 10.51 1.6a12.46 12.46 0 0 1 3.21 10.55 8.81 8.81 0 0 1-1.94 4.74c-1.45 1.63-3.62 2.37-5.58 3.35a21.9 21.9 0 0 0-10.75 12.29c-3.34 9.66-3.76 19.88-8 29.19s-9.22 18.26-12.89 27.79c-2.07 5.41-3.74 11-6.78 16s-7.82 9.19-13.56 9.94a34.06 34.06 0 0 0-1.68-10.64c-1.21-3.97-3.48-8.66-1.66-12.34zM188.63 426.83a55.45 55.45 0 0 0-3.24-20.78c-.92-2.55-2.05-5.14-1.91-7.85.12-2.51 1.33-4.83 2.41-7.1 3.77-7.85 6.41-16.18 9-24.48l5-15.64a25 25 0 0 0 4.39-4.15 22.14 22.14 0 0 0 5.09-10.86 15.32 15.32 0 0 0-2.81-11.49 6.64 6.64 0 0 0-4.7-2.85 6.05 6.05 0 0 0-4.39 2 19.34 19.34 0 0 0-3.76 6.42c-1.64 3.84-3.3 7.84-3.14 12 .13 3.46 1.43 7.32-.6 10.13-6.65 9.21-11.67 19.8-16.94 29.87a53.21 53.21 0 0 0-3.42 7.49 41.52 41.52 0 0 0-1.79 12.94c-.05 8.2 1.08 16.35 2.2 24.48.7 5.08 1.64 10.62 5.49 14 4.01-5.09 8.03-10.11 13.12-14.13z",
    fill: "#a0616a"
  }), _react.default.createElement("circle", {
    cx: 214.08,
    cy: 409.99,
    r: 20.75,
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M204 431.84c-.5 3.76-2.51 7.11-4.47 10.35-1.19 2-2.69 4.13-5 4.35a100 100 0 0 0 18.84 7.58 21.42 21.42 0 0 0 6.89 1.11 16.83 16.83 0 0 0 5.73-1.47 28.45 28.45 0 0 0 16.14-19 37.45 37.45 0 0 1-7.7-.59c-1.42-.26-2.95-.68-3.78-1.85a6.09 6.09 0 0 1-.78-3.35q-.15-5.19 0-10.38a41 41 0 0 0-15.08 1.85c-2 .65-4 1.44-6.05 1.95-1.26.31-4.73 0-5.66.73-1.41 1.11 1.29 6.17.92 8.72z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M213.15 444.45a13.05 13.05 0 0 0-9.92-11.58c-2.14-.47-4.45-.42-6.37-1.48-3.28-1.83-4.27-6.29-7.41-8.34s-7.62-.91-10.36 1.69-4.13 6.28-5.25 9.88a49.75 49.75 0 0 0-2.69 15.15 6.88 6.88 0 0 0 .44 2.78 11.67 11.67 0 0 0 2.21 2.77 12.28 12.28 0 0 1 3 9.76 27.64 27.64 0 0 0 .89 9.81c2 8.81 4 17.63 5.6 26.52a16.88 16.88 0 0 1 .38 5c-.31 2.4-1.65 4.69-1.36 7.09a26.91 26.91 0 0 1 .64 3.41 8.27 8.27 0 0 1-.6 2.53c-2.28 6.6-8.41 21.7-8.34 28.67 10.65-2.73 26.35-3.34 37.34-3.38a78.44 78.44 0 0 1 9.07.4c7.23.77 14.63 2.88 21.64.93 6.5-1.81 12.27-7 19-6.34 1.45-3.83-.27-16.58-1.63-20.44a87.34 87.34 0 0 1-3-47.33c1.23-5.66-.46-11.66.91-17.29a10.36 10.36 0 0 1 1.49-3.72 4 4 0 0 1 3.43-1.8 127.39 127.39 0 0 0-2.5-26.93c-.67-3.15-2.06-6.87-5.23-7.41-2.86-.48-5.27 1.93-7.56 3.71a20.66 20.66 0 0 1-8 3.76 7.53 7.53 0 0 0-3.28 1.19c-1.38 1.14-1.57 3.2-2.69 4.59-2 2.49-6.47 2.27-7.89 5.14a18 18 0 0 0-.76 2.63 9.62 9.62 0 0 1-3.29 4.25 18.56 18.56 0 0 1-7.91 4.38z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M230.94 387.93c.35-1.37.3-3-.81-3.92-.55-.43-1.26-.59-1.85-1a8 8 0 0 1-2-2.53 10.86 10.86 0 0 0-13.61-3.43c-3.61 1.89-5.8 5.67-9 8.23-1.64 1.32-3.53 2.3-5.17 3.61a21.34 21.34 0 0 0-6.69 10.82 61.57 61.57 0 0 0-1.81 12.77 11.47 11.47 0 0 0 .15 3.88 10.19 10.19 0 0 0 1.47 2.95c3.29 5 7.65 9.55 13.1 12.12s12.08 3 17.46.31a3.11 3.11 0 0 0 1.34-1.08 3.76 3.76 0 0 0 .2-2.31 15.85 15.85 0 0 1 1.75-8.84c1-2 2.49-3.72 3.3-5.8a20.6 20.6 0 0 0 .94-7.18c.08-6.27-.35-12.54 1.23-18.6z",
    fill: "#2d293d"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M240.55 260.3h51.09v51.09h-51.09z"
  }), _react.default.createElement("path", {
    d: "M273 303.82a6.71 6.71 0 0 1-3.46 3.14 8.59 8.59 0 0 1-2.75.52 7.76 7.76 0 0 1-3-.37 6.89 6.89 0 0 1-3.17-2.53 16 16 0 0 1-1.84-3.68 4.08 4.08 0 0 1-.37-2.08 3 3 0 0 0 2-1.13 2.53 2.53 0 0 0 .05-2c-.06-.2-.12-.39-.19-.57-.15-.44-.67-1.27-.31-1.64s1.2-.36 1.53-.51a14.43 14.43 0 0 1 3.11-1.39 7.56 7.56 0 0 1 2.95.19 1 1 0 0 1 .37.14.86.86 0 0 1 .27.4c.28.68.44 1.43.66 2.13a4.39 4.39 0 0 0 1.1 1.95 5.52 5.52 0 0 0 1.53.92l1.34.61a1.91 1.91 0 0 1 .63.41 1.66 1.66 0 0 1 .3.82 7.67 7.67 0 0 1-.75 4.67z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M268.84 294.47a6.95 6.95 0 0 1-8.39 1.25c-.06-.2-.12-.39-.19-.57-.15-.44-.67-1.27-.31-1.64s1.2-.36 1.53-.51a14.43 14.43 0 0 1 3.11-1.39 7.56 7.56 0 0 1 2.95.19 1 1 0 0 1 .37.14.86.86 0 0 1 .27.4c.28.71.44 1.43.66 2.13z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 263.84,
    cy: 289.36,
    r: 6.94,
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M284.89 311.38h-32.66c-1-2.23-1.9-4.47-2.91-6.7a4.65 4.65 0 0 1 .59-1.5 1.63 1.63 0 0 1 1.34-.75c.29 0 .62.11.83-.1s.14-.38.29-.52.51-.14.79-.12a1.81 1.81 0 0 0 1.54-.77 2.46 2.46 0 0 1 .39-.51 2.23 2.23 0 0 1 .84-.22c.81-.18 1.29-1 1.9-1.51a1.14 1.14 0 0 1 1.2-.33.74.74 0 0 1 .25.21 2.26 2.26 0 0 1 .33.83 7.42 7.42 0 0 0 2.61 4.21 5.92 5.92 0 0 0 8.94-2.23 11.64 11.64 0 0 0 .82-3.79v-.17a2.86 2.86 0 0 1 2.38.47 13.43 13.43 0 0 0 2.12 1.33c.89.35 2 .35 2.61 1 .26.26.44.62.77.78a2.3 2.3 0 0 0 .64.15 3.79 3.79 0 0 1 2.51 2.2 17.13 17.13 0 0 1 1.4 5.06z",
    fill: "#f86d70"
  }), _react.default.createElement("path", {
    d: "M259.05 278.1a5.25 5.25 0 0 0-1.21 1.4 6.89 6.89 0 0 1-2.42 2.38 3 3 0 0 0-1.11.69 1.85 1.85 0 0 0-.29.78 14.63 14.63 0 0 0-.31 2.95 3.15 3.15 0 0 0 .24 1.46c.2.42.58.78.65 1.24a3.62 3.62 0 0 1-.12 1.08.94.94 0 0 0 .37 1 2.54 2.54 0 0 0 .56.13c1 .22 1.34 1.4 1.49 2.37.34 0 .49-.41.57-.73l1-4.65c.12-.5.3-1.09.81-1.26a2.53 2.53 0 0 1 1.06 0c1.38.12 2.54-.95 3.89-1.25a5.3 5.3 0 0 1 1.32-.08c1.06 0 2.3.49 2.53 1.48 0 .16.06.36.21.44a.84.84 0 0 0 .47 0c.67-.07 1.07.69 1.27 1.31l.7 2.27c.11.34.29.75.66.79a.7.7 0 0 0 .69-.61 2.77 2.77 0 0 0-.14-1c-.33-1.48.18-3 .49-4.49s.36-3.2-.68-4.35c-.38-.41-.88-.72-1.23-1.16s-.51-.91-.85-1.32a8.73 8.73 0 0 0-4.85-2.12 9.94 9.94 0 0 0-5.77 1.25z",
    fill: "#3f3d56"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M271.43 290.82c-.37 0-.55-.45-.66-.79l-.7-2.27c-.2-.62-.6-1.38-1.27-1.32a.84.84 0 0 1-.47 0c-.15-.08-.17-.27-.21-.44-.23-1-1.47-1.43-2.53-1.48a4.87 4.87 0 0 0-1.32.09c-1.35.29-2.51 1.36-3.89 1.24a2.92 2.92 0 0 0-1.06 0c-.51.18-.69.76-.81 1.27a203 203 0 0 0-1 4.64c-.08.32-.23.71-.57.73-.15-1-.49-2.15-1.49-2.37a2.08 2.08 0 0 1-.56-.13.63.63 0 0 1-.29-.33c0 .14-.06.29-.08.43a.94.94 0 0 0 .37 1 2.54 2.54 0 0 0 .56.13c1 .22 1.34 1.4 1.49 2.37.34 0 .49-.41.57-.73.35-1.55.69-3.1 1-4.65.12-.5.3-1.09.81-1.26a2.53 2.53 0 0 1 1.06 0c1.38.12 2.54-.95 3.89-1.25a5.3 5.3 0 0 1 1.32-.08c1.06 0 2.3.49 2.53 1.48 0 .16.06.36.21.44a.84.84 0 0 0 .47 0c.67-.07 1.07.69 1.27 1.31l.7 2.27c.11.34.29.75.66.79a.7.7 0 0 0 .69-.61 2 2 0 0 0-.1-.8.62.62 0 0 1-.59.32zM254.6 287.94c-.07-.46-.45-.82-.65-1.24a2.54 2.54 0 0 1-.23-.9v.5a3.15 3.15 0 0 0 .24 1.46c.16.34.44.64.58 1a2.23 2.23 0 0 0 .06-.82zM272.47 284.73a13 13 0 0 0-.57 4 24.28 24.28 0 0 1 .57-2.92 7.66 7.66 0 0 0 .17-2.24 9.06 9.06 0 0 1-.17 1.16z"
  })), _react.default.createElement("path", {
    d: "M254.84 311.38h-7.79a24.5 24.5 0 0 1 1.83-6.08 1.39 1.39 0 0 1 .33-.53.48.48 0 0 1 .11-.09c.23-.18.55-.25.8-.42s.28-.35.51-.42a6.91 6.91 0 0 1 2.54.42 2.54 2.54 0 0 1 .67.17 2.26 2.26 0 0 1 1.06 1.3c.66 1.79.16 3.73-.06 5.65z",
    fill: "#f86d70"
  }));
};

UndrawPostOnline.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawPostOnline;
exports.default = _default;