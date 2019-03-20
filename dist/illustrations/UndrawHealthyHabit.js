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

var UndrawHealthyHabit = function UndrawHealthyHabit(_props) {
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
    viewBox: "0 0 1020 668.18",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M19.75 213.04c-7.68 23.25 14.9 44.16 32.66 61a239.26 239.26 0 0 1 56.3 82.05c7.72 18.73 13.09 38.88 11.65 59.09-4.08 57.32-58.06 95.51-101.19 133.48-6.11 5.43-12.22 11.11-15.78 18.43-11.43 23.49 8 50.56 29.4 65.54C109 685.95 219 670.09 292.92 613.64c38.28-29.24 71.18-69 117.57-82 29.66-8.27 61.14-4.35 91.83-1.8a977.73 977.73 0 0 0 138.34 1.64c16.18-1 33.1-2.56 46.65-11.45 34.31-22.48 28.52-75.78 53.28-108.48 17.8-23.5 48.21-32.56 74.68-45.55a233.64 233.64 0 0 0 97.83-90.78c21.25-36.17 32.26-77.29 43-117.83 8.1-30.46 16.23-62.36 9.37-93.13s-33.94-59.5-65.34-56.8c-24.11 2.07-43.29 21.12-66.51 27.94C778 51.78 724-5.11 666.3.38c-36.33 3.45-65.63 31-87.78 60s-40.9 61.65-70.15 83.49c-45.5 34-107.84 35.2-163.54 24.19s-109.14-32.68-165.46-39.9c-33.18-4.25-58.61 15.52-88.49 26.39-27.42 9.98-60.97 27.74-71.13 58.49z",
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 137.95,
    cy: 646.08,
    rx: 72.74,
    ry: 22.1,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 825.73,
    cy: 363.42,
    rx: 194.27,
    ry: 12.89,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, _react.default.createElement("path", {
    d: "M708.28 68.4a10.16 10.16 0 0 1 10.16 10.16v282.5h-20.32V78.55a10.16 10.16 0 0 1 10.16-10.15zM931.21 68.4a10.16 10.16 0 0 1 10.16 10.16v282.5H921V78.55a10.16 10.16 0 0 1 10.21-10.15z"
  }), _react.default.createElement("rect", {
    x: 899.59,
    y: 56.37,
    width: 20.32,
    height: 361.84,
    rx: 10.16,
    ry: 10.16,
    transform: "rotate(90 922.7 134.34)"
  }), _react.default.createElement("rect", {
    x: 676.16,
    y: 83.22,
    width: 15.92,
    height: 76.32,
    rx: 7.96,
    ry: 7.96
  }), _react.default.createElement("rect", {
    x: 660.24,
    y: 90.36,
    width: 15.92,
    height: 62.05,
    rx: 7.96,
    ry: 7.96
  }), _react.default.createElement("rect", {
    x: 1037.4,
    y: 199.13,
    width: 15.92,
    height: 76.32,
    rx: 7.96,
    ry: 7.96,
    transform: "rotate(-180 1000.365 179.335)"
  }), _react.default.createElement("rect", {
    x: 1053.33,
    y: 206.27,
    width: 15.92,
    height: 62.05,
    rx: 7.96,
    ry: 7.96,
    transform: "rotate(180 1016.29 179.335)"
  })), _react.default.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, _react.default.createElement("path", {
    d: "M799.46 186.64H841a17 17 0 0 1 17 17V275h-75.5v-71.36a17 17 0 0 1 16.96-17z"
  }), _react.default.createElement("path", {
    d: "M814.68 268.59h11.05v36.83h-11.05zM792.58 310.02h11.05v36.83h-11.05zM838.62 310.02h11.05v36.83h-11.05z"
  }), _react.default.createElement("path", {
    d: "M782.46 302.65h75.5v10.13h-75.5z"
  })), _react.default.createElement("ellipse", {
    cx: 473.09,
    cy: 577.95,
    rx: 414.32,
    ry: 30.38,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M580.36 469.76s28.54 12.89 42.35 12.89c0 0 14.73 3.68 23 7.37s40.51 5.52 40.51 5.52 37.75 13.81 42.35 20.26 18.41-23 18.41-23l-7.37-18.41-139-26.7z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M580.36 469.76s28.54 12.89 42.35 12.89c0 0 14.73 3.68 23 7.37s40.51 5.52 40.51 5.52 37.75 13.81 42.35 20.26 18.41-23 18.41-23l-7.37-18.41-139-26.7z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M721.23 510.28s17.49 23 10.13 36.83-4.6 13.81 0 14.73 30.38 6.45 33.15-13.81 8.29-65.37 8.29-65.37l-37.8-3.69s10.17 34.07-13.77 31.31z",
    fill: "#737a9d"
  }), _react.default.createElement("path", {
    d: "M503.94 439.38l79.18 36.83s24.86-19.34 23-29.46l-92.07-22.1z",
    fill: "#4c4c78"
  }), _react.default.createElement("path", {
    d: "M503.94 439.38l79.18 36.83s24.86-19.34 23-29.46l-92.07-22.1z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M836.32 487.26L828 507.51l-19.3 4.58a123.29 123.29 0 0 0-17.29-12.08c-10.39-6-24.06-11.87-37-10.94 0 0-51.56-8.29-54.32-12 0 0-33.15-7.37-40.51-6.45-3.55.44-11.18-2.11-18.12-4.88-7.45-3-14.11-6.17-14.11-6.17l23.94-37.75a64.34 64.34 0 0 0 8.6 3c9.15 2.68 25.62 6.16 49.41 6.16 38.67 0 92.07 39.59 92.07 39.59s.53.18 1.44.45c4 1.21 15.4 4.06 20.66-.45 6.4-5.41 12.85 16.69 12.85 16.69z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M836.32 487.26L828 507.51l-19.3 4.58a123.29 123.29 0 0 0-17.29-12.08c28.08 2.11 11.31-28.89 11.31-28.89h.06c4 1.21 15.4 4.06 20.66-.45 6.43-5.51 12.88 16.59 12.88 16.59z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M791.52 500.79s22.27 31.23 12.9 48.82-5.86 17.58 0 18.76 38.69 8.21 42.2-17.58c2.7-19.83.33-57.89-.91-74.41a7.89 7.89 0 0 0-8.58-7.26l-32.57 3s17.44 32.19-13.04 28.67z",
    fill: "#737a9d"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M262.71 531.45l.92 45.12 10.13 7.36h34.99l6.44-9.2v-43.28l-10.13-9.21h-33.14l-9.21 9.21z"
  }), _react.default.createElement("path", {
    d: "M268.23 532.37s6.45 41.43 0 45.12l-4.6-.92-.92-44.19z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M343.73 528.69l7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.31 8.29h-35l-8.29-7.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M262.71 531.45l.92 45.12 10.13 7.36h34.99l6.44-9.2v-43.28l-10.13-9.21h-33.14l-9.21 9.21zM343.73 528.69l7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.31 8.29h-35l-8.29-7.37z"
  }), _react.default.createElement("path", {
    d: "M352 530.53s7.37 32.23 0 43.27h-8.29v-45.11z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M315.19 375.85s3.68 35.91 3.68 40.51-1.84 35 3.68 64.45-3.68 66.28-3.68 66.28h30.38l12.89-99.44-9.21-52.48-3.68-16.57z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M315.19 375.85s3.68 35.91 3.68 40.51-1.84 35 3.68 64.45-3.68 66.28-3.68 66.28h30.38l12.89-99.44-9.21-52.48-3.68-16.57z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M309.67 284.7s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.03-38.63-40.51z",
    fill: "#cbcdda"
  }), _react.default.createElement("path", {
    d: "M309.67 284.7s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.03-38.63-40.51z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M260.87 245.09s35 37.75 64.45 10.13l-3.68 97.6s-47.88-58-81-53.4z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M659.85 424.93c-1.4 10.79-5.8 33.51-18.43 40.87-7.45-3-14.11-6.17-14.11-6.17l23.94-37.75a64.34 64.34 0 0 0 8.6 3.05z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M657.7 419.09s-2.76 45.12-24.86 48.8l-133.48-24.08a40.29 40.29 0 0 1-17.74-8c-5.39-4.24-12-10-15.91-15.28-2.12-2.88-3.4-5.63-3.19-7.9.92-10.13 41.43-34.07 27.62-76.42a25.24 25.24 0 0 1 6.48-3.72c11.53-4.79 38.07-8.31 76.38 31.34 0 .05 70.89 57.14 84.7 55.26z",
    fill: "#4c4c78"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M296.78 535.13l.92 45.12 10.12 7.37h34.99l6.45-9.21v-43.28l-10.13-9.2h-33.15l-9.2 9.2z"
  }), _react.default.createElement("path", {
    d: "M302.3 536.09s6.45 41.43 0 45.12l-4.6-.92-.92-44.2z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M398.06 531.45l7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.29 8.29h-35l-8.29-7.37z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M406.34 533.29s7.37 32.23 0 43.27h-8.29v-45.11z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M349 548.95h49.81c3.9 0 7.06 3.5 7.06 7.83 0 4.32-3.16 7.83-7.06 7.83H349c-4.23 0-7.51-4.09-7-8.74.41-3.95 3.43-6.92 7-6.92z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M492.89 405.31c-9.85 6.9-20.23 11.42-27.19 15.27-2.12-2.88-3.4-5.63-3.19-7.9.92-10.13 41.43-34.07 27.62-76.42a25.24 25.24 0 0 1 6.48-3.72 28.12 28.12 0 0 0 6.41-.88s8.28 60.76-10.13 73.65z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M286.19 316.46s13.81 13.81 27.16 22.56c12.32 8.07-9.67-73.2-9.67-73.2s13.64-11 21.65-17.53a27.44 27.44 0 0 1 19.08-6.2c18.43 1.19 52.19 8.94 79.43 46.3 39.59 54.32 75.5 43.27 75.5 43.27s8.29 60.77-10.13 73.66-38.67 17.49-35 24.86-16.57-35.91-62.61-43.27-96.68-39.59-95.75-55.24c.01-.01-13.34-10.58-9.66-15.21z",
    fill: "#cbcdda"
  }), _react.default.createElement("path", {
    d: "M276.52 269.09a46.27 46.27 0 0 0-.7-7.94c-12.06-6-10.35-14.16-10.35-14.16l-20.26 54.32c7.41-1 15.56 1.08 23.74 5 10.77-8.51 7.57-22.53 7.57-37.22z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 236.01,
    cy: 268.13,
    r: 46.04,
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M194.18 278.51c-.85 2.73-2.16 5.54-4.63 7-3 1.78-7.14.9-9.81-1.4s-4.11-5.74-4.86-9.18a30.82 30.82 0 0 1 .5-15.05c1.2-4.15 3.27-8 4.14-12.25.93-4.52.46-9.25 1.5-13.75 1.41-6.1 5.43-11.21 9.35-16.1a16.62 16.62 0 0 1 10.83-7.2l19.27-5.81a65.11 65.11 0 0 1 11.22-2.68 38.87 38.87 0 0 1 14.59 1.28 33.61 33.61 0 0 1 10.58 4.72 39.13 39.13 0 0 1 8.35 8.45c10.19 13.32 16 35.11 26.51 48.22-4.15 1.28-8.3-3-12.45-1.7a2.92 2.92 0 0 1-1.87.15 3.07 3.07 0 0 1-1.37-1.52 31.87 31.87 0 0 0-16.29-13.94c-5.1-1.93-12-1.92-14.79 2.76-1.89 3.16-1.13 7.15-.63 10.8s.41 8-2.48 10.25a10.72 10.72 0 0 1-5.38 1.82 59.28 59.28 0 0 1-26.66-2.61c-3-1-6.05-4.13-9.22-3.13-4.28 1.35-5.27 7.24-6.4 10.87z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M193.17 277.5c-.85 2.73-2.16 5.54-4.63 7-3 1.78-7.14.9-9.81-1.4s-4.11-5.74-4.86-9.18a30.82 30.82 0 0 1 .5-15.05c1.2-4.15 3.27-8 4.14-12.25.93-4.52.46-9.25 1.5-13.75 1.41-6.1 5.43-11.21 9.35-16.1a16.62 16.62 0 0 1 10.83-7.2l19.27-5.81a65.11 65.11 0 0 1 11.22-2.67 38.87 38.87 0 0 1 14.59 1.28 33.61 33.61 0 0 1 10.58 4.72 39.13 39.13 0 0 1 8.35 8.45c10.19 13.32 16 35.11 26.51 48.22-4.15 1.28-8.3-3-12.45-1.7a2.92 2.92 0 0 1-1.87.15 3.07 3.07 0 0 1-1.39-1.52 31.87 31.87 0 0 0-16.29-13.94c-5.1-1.93-12-1.92-14.79 2.76-1.89 3.16-1.13 7.15-.63 10.8s.41 8-2.48 10.25a10.72 10.72 0 0 1-5.38 1.82 59.28 59.28 0 0 1-26.66-2.61c-3-1-6.05-4.13-9.22-3.13-4.26 1.34-5.25 7.23-6.38 10.86z",
    fill: "#b96b6b"
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M306.8 263.31l-3.12 2.52s12.89 47.63 13.4 66.34c6.58-1.78-6.08-52.74-10.28-68.86z"
  }), _react.default.createElement("path", {
    d: "M491 397.95c-18.41 12.89-38.67 17.49-35 24.86s-16.57-35.91-62.61-43.27c-43.19-6.91-90.43-35.7-95.35-52.16-6.9-5.9-11.92-10.91-11.92-10.91-3.68 4.6 9.67 15.19 9.67 15.19-.92 15.65 49.72 47.88 95.75 55.24s66.29 50.64 62.61 43.27 16.57-12 35-24.86c5.27-3.69 8.35-11.3 10.07-20.29-1.78 5.69-4.42 10.3-8.22 12.93z"
  })), _react.default.createElement("path", {
    d: "M398.06 486.34c-2.76 3.68-4.6 41.43-4.6 41.43s11 54.32-23 48.8-4.6-44.19-4.6-44.19l-4.6-53.4c-17.49-46-13.81-79.18-13.81-79.18l-3.27-30.07-1.34-12.28 39.59-9.21c-1.08 1.44-.62 10.42.35 20.85 1.51 16.34 4.25 36.23 4.25 36.23 8.26 9.2 13.79 77.33 11.03 81.02z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M341.89 265.37s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.04-38.63-40.51z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M382.75 369.09c-8.6 2.35-29.68 2.56-38.61.64l-1.34-12.28 39.59-9.21c-1.06 1.43-.6 10.41.36 20.85z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M340.05 265.37s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.04-38.63-40.51z",
    fill: "#cbcdda"
  }), _react.default.createElement("g", {
    opacity: 0.5
  }, _react.default.createElement("path", {
    fill: primaryColor,
    d: "M75.04 409.5l-29.32.6-4.78 6.58v22.74l5.98 4.19h28.12l5.99-6.58v-21.54l-5.99-5.99z"
  }), _react.default.createElement("path", {
    d: "M74.45 413.09s-26.93 4.19-29.32 0l.6-3 28.72-.6z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M77.44 475.32l4.79 4.79v22.74l-4.79 4.79s-17.35 6-28.72 1.2l-5.39-5.39v-22.74l4.79-5.39z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M76.24 480.71s-20.94 4.79-28.12 0v-5.39h29.32z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M66.07 443.45v32.37a4.86 4.86 0 0 1-5.09 4.59 4.86 4.86 0 0 1-5.09-4.59v-32.37c0-2.75 2.66-4.88 5.68-4.56a4.79 4.79 0 0 1 4.5 4.56zM122 410.42l-29.32.6-4.79 6.58v22.74l5.99 4.19H122l5.98-6.58v-21.54l-5.98-5.99z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M121.4 414.02s-26.93 4.19-29.32 0l.6-3 28.72-.6z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M124.39 476.25l4.79 4.79v22.74l-4.79 4.79s-17.35 6-28.72 1.2l-5.39-5.39v-22.75l4.79-5.39z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M123.2 481.63s-20.94 4.79-28.12 0v-5.39h29.32z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M113 444.37v32.37a4.86 4.86 0 0 1-5.09 4.59 4.86 4.86 0 0 1-5.09-4.59v-32.37c0-2.75 2.66-4.88 5.68-4.56a4.79 4.79 0 0 1 4.5 4.56zM181.78 427.74l-24.14.49-3.94 5.42v18.72l4.93 3.44h23.15l4.92-5.42v-17.73l-4.92-4.92z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M181.28 430.69s-22.17 3.45-24.14 0l.49-2.46 23.64-.49z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M183.75 481.92l3.94 3.94v18.72l-3.94 3.94s-14.28 4.93-23.64 1l-4.44-4.43v-18.74l3.94-4.43z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M182.76 486.35s-17.24 3.94-23.15 0v-4.43h24.14z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M174.39 455.68v26.65a4 4 0 0 1-4.19 3.76 4 4 0 0 1-4.19-3.78v-26.63a4.05 4.05 0 0 1 4.68-3.75 3.94 3.94 0 0 1 3.7 3.75zM220.43 428.49l-24.14.5-3.94 5.41v18.72l4.93 3.45h23.15l4.93-5.42v-17.73l-4.93-4.93z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M219.94 431.45s-22.17 3.45-24.14 0l.49-2.46 23.64-.49z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M222.4 482.68l3.94 3.94v18.72l-3.94 3.94s-14.28 4.93-23.64 1l-4.43-4.43v-18.76l3.94-4.43z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M221.42 487.09s-17.24 3.94-23.15 0v-4.43h24.13z",
    fill: "#fff",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M213 456.44v26.65a4 4 0 0 1-4.19 3.78 4 4 0 0 1-4.19-3.78v-26.65a4.05 4.05 0 0 1 4.68-3.75 3.94 3.94 0 0 1 3.7 3.75z",
    fill: primaryColor
  })), _react.default.createElement("g", {
    opacity: 0.8
  }, _react.default.createElement("path", {
    d: "M117.18 589.09s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c4.48 8.1 13.71 18.61 31.2 17.68 14.84-.79 19.77-12.12 21.11-22.65a23.27 23.27 0 0 0-30.9-24.91z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M99.49 619.82a22.78 22.78 0 0 1-.3-21.93c6.82-12.49 21-7.69 21-7.69l.73-.26a23.06 23.06 0 0 1 16.65.37 23.06 23.06 0 0 0-19.66-1.88l-.73.26s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c3 5.33 8 11.7 16 15.17a35.13 35.13 0 0 1-12.99-13.66z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M109.86 595.09s5.25 4.13 18 0",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M108.74 565.09s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M108.74 565.09s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M145.5 567.09s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.19 27.84-20.04z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M145.5 567.09s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.19 27.84-20.04z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M117.66 587.09s3.72-17.77 27.84-20",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  })), _react.default.createElement("path", {
    d: "M177 611.18s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c4.48 8.1 13.71 18.61 31.2 17.68 14.84-.79 19.77-12.12 21.11-22.65a23.27 23.27 0 0 0-30.9-24.91z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M159.34 641.92a22.78 22.78 0 0 1-.3-21.93c6.82-12.49 21-7.69 21-7.69l.73-.26a23.06 23.06 0 0 1 16.65.37 23.06 23.06 0 0 0-19.66-1.88l-.73.26s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c3 5.33 8 11.7 16 15.17a35.13 35.13 0 0 1-12.99-13.66z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M169.71 617.18s5.25 4.13 18 0",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M168.58 587.16s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M168.58 587.16s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M205.35 589.19s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.18 27.84-20.04z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M205.35 589.19s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.18 27.84-20.04z",
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M177.51 609.23s3.72-17.77 27.84-20",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M63 553.26s1.39-1.55-1.22-2.17v-2.55h1.57a13.46 13.46 0 0 0-10.66-13.16v-3.09h.41v-4H43v4h.29v3.13a13.46 13.46 0 0 0-10.48 13.12h1.4v2.45s-3.32 1.57 0 4.37 2.8 4.89 2.8 4.89-1.4 5.24-4.19 5.94v48.75a10.83 10.83 0 0 0 10.83 10.83h8.56A10.83 10.83 0 0 0 63 614.95v-48.76s-4.89-3.67-4-5.94a55 55 0 0 1 4-6.99z",
    fill: primaryColor
  }));
};

UndrawHealthyHabit.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawHealthyHabit;
exports.default = _default;