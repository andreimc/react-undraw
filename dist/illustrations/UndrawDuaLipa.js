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

var UndrawDuaLipa = function UndrawDuaLipa(_props) {
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
    viewBox: "0 0 1114 811.04",
    style: style
  }, props), _react.default.createElement("g", {
    opacity: 0.3,
    fill: primaryColor
  }, _react.default.createElement("path", {
    d: "M352.31 61.68c-2.09-2.85-6.41.23-4.45 3.18.51.77 1.06 1.51 1.59 2.22 6.44 8.69 9.77 19.23 12.64 29.65.71 2.56 1.39 5.3.58 7.82a48.93 48.93 0 0 0-1.33-20.41 127 127 0 0 0-7.22-19.27 17.42 17.42 0 0 0-1.81-3.19z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M310.58 79.94c-4.34-.13-4.89 6.45-.57 6.8 1.13.09 2.28.11 3.36.14 13.29.36 25.86 5.19 37.93 10.36 3 1.27 6.07 2.7 7.81 5.42-5.45-6.31-12.61-10.93-20.24-14.33s-15.74-5.63-23.86-7.71a20.78 20.78 0 0 0-4.43-.68z"
  }), _react.default.createElement("path", {
    d: "M311.78 96.12c-2.74.1-2.13 4 .63 4 .72 0 1.44 0 2.13-.06 8.38-.34 17 2 25.29 4.52 2.05.62 4.2 1.33 5.69 2.86a45.7 45.7 0 0 0-14.78-7.59 113.62 113.62 0 0 0-16.09-3.54 14.49 14.49 0 0 0-2.87-.19z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M367.85 168.52c.78 2.63 4.4 1.07 3.74-1.61-.18-.7-.39-1.39-.58-2-2.41-8-2.3-16.92-1.9-25.62.09-2.13.25-4.4 1.36-6.22a45.42 45.42 0 0 0-3.68 16.2 112.8 112.8 0 0 0 .56 16.46 14.32 14.32 0 0 0 .5 2.79z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M316.77 58.03c-1.65-.29-1.78 2.11-.13 2.48l1.28.24c5.05.86 9.88 3.33 14.53 5.91a7.88 7.88 0 0 1 3 2.43 27.64 27.64 0 0 0-7.86-6.41 69.07 69.07 0 0 0-9.16-4.16 9.07 9.07 0 0 0-1.66-.49z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M291.3 121.71c-4.19 2.15-.65 8.06 3.65 6.1 1.13-.51 2.22-1.09 3.27-1.63 12.79-6.64 27.65-9.08 42.26-11 3.59-.46 7.41-.87 10.73.55-9-2.55-18.67-2.76-28-1.68s-18.36 3.42-27.32 5.88a24.5 24.5 0 0 0-4.59 1.78z"
  }), _react.default.createElement("path", {
    d: "M303.26 144.72c-3 2.81 1.68 6.12 4.84 3.43.83-.71 1.61-1.45 2.36-2.16 9.17-8.6 21.28-14.73 33.34-20.37 3-1.38 15.15-2.8 18.4-2.72-8.5.76-25.85 3.41-33.57 6.92a187.46 187.46 0 0 0-21.89 12.28 23.65 23.65 0 0 0-3.48 2.62z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M324.71 181.46c-.88 4 4.87 4.08 5.93.07.28-1 .51-2.11.72-3.12 2.65-12.29 9.14-24.21 15.85-35.71 1.65-2.82 10.87-10.91 13.59-12.7-6.56 5.46-19.33 17.51-23.68 24.78a185.65 185.65 0 0 0-11 22.55 24.42 24.42 0 0 0-1.41 4.13zM367.9 40.41c-2-4.17-7.9-.74-6 3.55.48 1.12 1 2.21 1.55 3.26 6.31 12.76 8.48 27.52 10.1 42 .4 3.56.73 7.35-.71 10.62 2.64-8.93 3-18.47 2.08-27.71s-3.07-18.24-5.35-27.15a24 24 0 0 0-1.67-4.57zM335.27 47.52a.76.76 0 0 0 .35.11.65.65 0 0 0 .48-.44c.51-1.11.22-2.55 1-3.49a12.23 12.23 0 0 1 1.91 3.2l3-.93a4.54 4.54 0 0 1-.57 3.45 4.58 4.58 0 0 1 1.41 1 1.58 1.58 0 0 1 .37 1.59 7.56 7.56 0 0 1-2.12.21 14.13 14.13 0 0 1-.23 4 .73.73 0 0 1-.25.5.73.73 0 0 1-.74-.12 6.91 6.91 0 0 1-2.47-2.62l-1.1 2.54a1.18 1.18 0 0 1-.5.67.8.8 0 0 1-.93-.32 2.42 2.42 0 0 1-.34-1l-.41-2.54a.64.64 0 0 0-.14-.36.69.69 0 0 0-.45-.13h-3.18c-.18-.56.38-1.09.92-1.32s1.19-.42 1.46-.95c.56-1.07-.88-2.56-.27-3.49s1.87-.02 2.8.44z"
  }), _react.default.createElement("path", {
    d: "M393.29 61.68c2.09-2.85 6.41.23 4.45 3.18-.51.77-1.06 1.51-1.59 2.22-6.44 8.69-9.77 19.23-12.64 29.65-.71 2.56-1.39 5.3-.58 7.82a48.93 48.93 0 0 1 1.33-20.41 127 127 0 0 1 7.22-19.27 17.42 17.42 0 0 1 1.81-3.19z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M435 79.94c4.34-.13 4.89 6.45.57 6.8-1.13.09-2.28.11-3.36.14-13.29.36-25.86 5.19-37.93 10.36-3 1.27-6.07 2.7-7.81 5.42 5.45-6.31 12.61-10.93 20.24-14.33s15.74-5.63 23.86-7.71a20.78 20.78 0 0 1 4.43-.68z"
  }), _react.default.createElement("path", {
    d: "M433.82 96.12c2.74.1 2.13 4-.63 4-.72 0-1.44 0-2.13-.06-8.38-.34-17 2-25.29 4.52-2 .62-4.21 1.33-5.69 2.86a45.7 45.7 0 0 1 14.78-7.59A113.62 113.62 0 0 1 431 96.33a14.49 14.49 0 0 1 2.82-.21z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M428.83 58.03c1.65-.29 1.78 2.11.13 2.48l-1.28.24c-5.05.86-9.88 3.33-14.53 5.91a7.88 7.88 0 0 0-3 2.43 27.64 27.64 0 0 1 7.86-6.41 69.07 69.07 0 0 1 9.16-4.16 9.07 9.07 0 0 1 1.66-.49zM385.89 173.52c-.37 1.63-2.64.82-2.34-.84.08-.43.18-.86.27-1.27 1.15-5 .74-10.4.15-15.69a7.85 7.85 0 0 0-1.07-3.73 27.79 27.79 0 0 1 2.88 9.72 69.11 69.11 0 0 1 .3 10.06 8.6 8.6 0 0 1-.19 1.75z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M427.77 162.64c1.29 2.18-1.87 2-3.26-.15-.37-.57-.7-1.14-1-1.69-3.93-6.68-9.9-13.28-15.91-19.66a21.9 21.9 0 0 0-4.93-4.25 77.75 77.75 0 0 1 12.93 11c3.86 4 7.27 8.24 10.6 12.44a20.22 20.22 0 0 1 1.57 2.31z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M313.16 162.64c-1.29 2.18 1.88 2 3.27-.15.36-.57.7-1.14 1-1.69 3.92-6.68 9.89-13.28 15.9-19.66a22.17 22.17 0 0 1 4.94-4.25 77.35 77.35 0 0 0-12.93 11c-3.86 4-7.27 8.24-10.61 12.44a21.62 21.62 0 0 0-1.57 2.31zM355.07 173.52c.38 1.63 2.64.82 2.34-.84-.07-.43-.18-.86-.27-1.27-1.15-5-.73-10.4-.15-15.69a7.86 7.86 0 0 1 1.08-3.73 27.8 27.8 0 0 0-2.89 9.72 69.11 69.11 0 0 0-.3 10.06 9.37 9.37 0 0 0 .19 1.75zM415.63 74.42c1.65-.28 1.77 2.12.13 2.48-.43.1-.87.17-1.28.24-5.05.86-9.88 3.34-14.53 5.91a8 8 0 0 0-3 2.43 28 28 0 0 1 7.87-6.41 69.47 69.47 0 0 1 9.15-4.15 9 9 0 0 1 1.66-.5zM400.22 42.23c1.42-.88 2.44 1.3 1 2.25-.36.25-.74.48-1.1.7-4.36 2.69-7.92 6.79-11.27 10.91a8 8 0 0 0-1.85 3.43 27.9 27.9 0 0 1 4.9-8.88 69.3 69.3 0 0 1 6.94-7.28 9.06 9.06 0 0 1 1.38-1.13z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M454.3 121.71c4.19 2.15.65 8.06-3.65 6.1-1.13-.51-2.22-1.09-3.27-1.63-12.79-6.64-27.65-9.08-42.26-11-3.59-.46-7.41-.87-10.73.55 9-2.55 18.67-2.76 28-1.68s18.36 3.42 27.32 5.88a24.5 24.5 0 0 1 4.59 1.78z"
  }), _react.default.createElement("path", {
    d: "M442.34 144.72c3 2.81-1.68 6.12-4.84 3.43-.83-.71-1.61-1.45-2.36-2.16-9.17-8.6-21.28-14.73-33.34-20.37-3-1.38-15.15-2.8-18.4-2.72 8.5.76 25.85 3.41 33.57 6.92a187.46 187.46 0 0 1 21.89 12.28 23.65 23.65 0 0 1 3.48 2.62z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M406.9 186.05c.37 4.09-5.34 3.43-5.89-.68-.14-1.08-.23-2.16-.32-3.18-1.09-12.53-6-25.17-11.25-37.42-1.29-3-9.42-12.19-11.9-14.3 5.83 6.23 17 19.79 20.4 27.55a186.33 186.33 0 0 1 8.11 23.75 22.53 22.53 0 0 1 .85 4.28zM410.33 47.52a.76.76 0 0 1-.35.11.65.65 0 0 1-.48-.44c-.51-1.11-.22-2.55-1-3.49a12.23 12.23 0 0 0-1.91 3.2l-3-.93a4.54 4.54 0 0 0 .57 3.45 4.58 4.58 0 0 0-1.41 1 1.58 1.58 0 0 0-.37 1.59 7.56 7.56 0 0 0 2.12.21 14.13 14.13 0 0 0 .23 4 .73.73 0 0 0 .25.5.73.73 0 0 0 .74-.12 6.91 6.91 0 0 0 2.47-2.62l1.12 2.67a1.18 1.18 0 0 0 .5.67.8.8 0 0 0 .93-.32 2.42 2.42 0 0 0 .34-1l.41-2.54a.64.64 0 0 1 .14-.36.69.69 0 0 1 .45-.13h3.18c.18-.56-.38-1.09-.92-1.32s-1.19-.42-1.46-.95c-.56-1.07.88-2.56.27-3.49s-1.89-.15-2.82.31z"
  }), _react.default.createElement("path", {
    d: "M419.4 171.31a.74.74 0 0 1-.35.1c-.23 0-.39-.23-.49-.43-.51-1.11-.21-2.56-1-3.49a11.81 11.81 0 0 0-1.91 3.2l-3-.93a4.46 4.46 0 0 0 .57 3.45 4.62 4.62 0 0 0-1.42 1 1.55 1.55 0 0 0-.36 1.59 7.56 7.56 0 0 0 2.12.21 14.15 14.15 0 0 0 .22 4 .74.74 0 0 0 .26.5.73.73 0 0 0 .74-.12 7.06 7.06 0 0 0 2.47-2.62l1.12 2.67a1.25 1.25 0 0 0 .49.67.81.81 0 0 0 .94-.33 2.36 2.36 0 0 0 .33-1l.42-2.54a.64.64 0 0 1 .14-.36.67.67 0 0 1 .44-.13h3.19c.18-.56-.39-1.09-.93-1.33s-1.18-.41-1.46-.94c-.55-1.07.88-2.57.27-3.49-.72-1.21-1.87-.14-2.8.32z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M444.87 88.33a.76.76 0 0 1-.35.11.65.65 0 0 1-.48-.44c-.52-1.11-.22-2.55-1-3.49a11.86 11.86 0 0 0-1.91 3.21l-3-.93a4.48 4.48 0 0 0 .57 3.44 4.58 4.58 0 0 0-1.41 1 1.58 1.58 0 0 0-.37 1.59 7.56 7.56 0 0 0 2.12.21 13.76 13.76 0 0 0 .23 3.95.74.74 0 0 0 .25.51c.22.14.51 0 .74-.13a7 7 0 0 0 2.47-2.62l1.12 2.67a1.18 1.18 0 0 0 .5.67.8.8 0 0 0 .93-.32 2.37 2.37 0 0 0 .34-1l.41-2.54a.64.64 0 0 1 .14-.36.69.69 0 0 1 .45-.13h3.18c.18-.56-.38-1.08-.93-1.32s-1.18-.42-1.45-1c-.56-1.07.87-2.56.27-3.49-.69-1.12-1.89-.05-2.82.41zM343 183.72a1 1 0 0 1-.49.15c-.32 0-.54-.32-.67-.61-.71-1.55-.3-3.56-1.4-4.86a16.69 16.69 0 0 0-2.66 4.46l-4.19-1.29a6.24 6.24 0 0 0 .79 4.8 6.37 6.37 0 0 0-2 1.34 2.19 2.19 0 0 0-.52 2.21 10.57 10.57 0 0 0 3 .3 19.5 19.5 0 0 0 .32 5.5 1 1 0 0 0 .36.7c.3.2.71 0 1-.17a9.65 9.65 0 0 0 3.44-3.65l1.56 3.72a1.65 1.65 0 0 0 .7.93 1.11 1.11 0 0 0 1.3-.45 3.31 3.31 0 0 0 .46-1.41l.59-3.54a.81.81 0 0 1 .19-.5.85.85 0 0 1 .62-.18c1.48 0 2.95-.06 4.43-.05.25-.78-.53-1.51-1.28-1.84s-1.66-.58-2-1.32c-.77-1.49 1.23-3.58.38-4.87-.99-1.5-2.6-.01-3.93.63zM300.66 90.81a1 1 0 0 1-.49.15c-.32 0-.54-.32-.67-.61-.71-1.55-.3-3.56-1.4-4.87a16.59 16.59 0 0 0-2.66 4.47l-4.19-1.3a6.19 6.19 0 0 0 .79 4.8 6.55 6.55 0 0 0-2 1.34 2.2 2.2 0 0 0-.52 2.22 11.37 11.37 0 0 0 3 .3 19.54 19.54 0 0 0 .32 5.5 1.05 1.05 0 0 0 .35.7 1 1 0 0 0 1-.17 9.68 9.68 0 0 0 3.44-3.66l1.56 3.72a1.67 1.67 0 0 0 .69.94 1.12 1.12 0 0 0 1.31-.46 3.22 3.22 0 0 0 .46-1.41l.58-3.54a.89.89 0 0 1 .2-.5.93.93 0 0 1 .62-.18h4.43c.25-.79-.53-1.52-1.29-1.85s-1.65-.58-2-1.31c-.77-1.5 1.23-3.58.38-4.87-1-1.54-2.57-.05-3.91.59z"
  }), _react.default.createElement("path", {
    d: "M429.23 148.35a.61.61 0 0 1-.26.08c-.17 0-.28-.17-.36-.33-.37-.82-.16-1.89-.74-2.58a8.75 8.75 0 0 0-1.41 2.37l-2.23-.69a3.31 3.31 0 0 0 .42 2.55 3.5 3.5 0 0 0-1 .72 1.16 1.16 0 0 0-.27 1.17 5.52 5.52 0 0 0 1.57.16 10.59 10.59 0 0 0 .17 2.92.54.54 0 0 0 .19.37c.16.11.38 0 .54-.09a5 5 0 0 0 1.83-1.94l.83 2a.88.88 0 0 0 .37.49.57.57 0 0 0 .69-.24 1.59 1.59 0 0 0 .25-.74l.31-1.89a.42.42 0 0 1 .1-.26.52.52 0 0 1 .33-.1h2.35c.14-.42-.28-.81-.68-1s-.88-.31-1.08-.7c-.41-.79.65-1.9.2-2.59s-1.43-.02-2.12.32zM371.68 181.58a.65.65 0 0 1-.27.08c-.16 0-.28-.17-.35-.33-.38-.82-.16-1.89-.75-2.58a8.75 8.75 0 0 0-1.41 2.37l-2.23-.69a3.35 3.35 0 0 0 .42 2.55 3.59 3.59 0 0 0-1 .72 1.14 1.14 0 0 0-.28 1.17 5.62 5.62 0 0 0 1.58.16 10.21 10.21 0 0 0 .16 2.92.54.54 0 0 0 .19.37.52.52 0 0 0 .55-.09 5.17 5.17 0 0 0 1.83-1.94l.82 2a.92.92 0 0 0 .37.49.59.59 0 0 0 .7-.24 1.7 1.7 0 0 0 .24-.74l.31-1.89a.59.59 0 0 1 .1-.26.56.56 0 0 1 .33-.1h2.36c.13-.42-.28-.8-.69-1s-.87-.31-1.07-.7c-.41-.79.64-1.9.19-2.59s-1.42-.02-2.1.32z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M316 65.27a.61.61 0 0 1-.26.08c-.17 0-.28-.17-.35-.32-.38-.83-.16-1.89-.75-2.59a8.9 8.9 0 0 0-1.41 2.37l-2.23-.68a3.29 3.29 0 0 0 .42 2.54 3.63 3.63 0 0 0-1.05.72 1.16 1.16 0 0 0-.27 1.17 5.59 5.59 0 0 0 1.57.16 10.59 10.59 0 0 0 .17 2.92.58.58 0 0 0 .19.38.54.54 0 0 0 .54-.09 5.12 5.12 0 0 0 1.83-2l.83 2a.87.87 0 0 0 .37.5.6.6 0 0 0 .69-.24 1.67 1.67 0 0 0 .25-.75l.31-1.88a.49.49 0 0 1 .1-.27.54.54 0 0 1 .33-.1h2.36c.13-.42-.29-.8-.69-1s-.88-.31-1.08-.7c-.41-.79.65-1.9.2-2.58s-1.41.02-2.07.36zM345.62 130.81a.5.5 0 0 1-.26.08c-.17 0-.29-.17-.36-.32-.38-.82-.16-1.89-.74-2.59a9.1 9.1 0 0 0-1.42 2.38l-2.22-.69a3.32 3.32 0 0 0 .42 2.55 3.3 3.3 0 0 0-1.05.71 1.16 1.16 0 0 0-.27 1.18 5.51 5.51 0 0 0 1.57.15 10.28 10.28 0 0 0 .17 2.93.56.56 0 0 0 .19.37.54.54 0 0 0 .54-.09 5.09 5.09 0 0 0 1.81-1.95l.83 2a.87.87 0 0 0 .37.5.6.6 0 0 0 .69-.24 1.8 1.8 0 0 0 .25-.75l.31-1.88a.43.43 0 0 1 .1-.27.46.46 0 0 1 .33-.09h2.35c.14-.41-.28-.8-.68-1s-.88-.31-1.08-.69c-.41-.8.65-1.91.2-2.59s-1.36.01-2.05.3zM324.1 105.26a.5.5 0 0 1-.26.08c-.17 0-.28-.17-.35-.32-.38-.83-.16-1.89-.75-2.59a8.8 8.8 0 0 0-1.41 2.38l-2.23-.69a3.32 3.32 0 0 0 .42 2.55 3.26 3.26 0 0 0-1 .71 1.16 1.16 0 0 0-.28 1.18 6 6 0 0 0 1.57.15 10.66 10.66 0 0 0 .17 2.93.56.56 0 0 0 .19.37.54.54 0 0 0 .54-.09 5.19 5.19 0 0 0 1.84-1.94l.82 2a.87.87 0 0 0 .37.5.6.6 0 0 0 .69-.24 1.67 1.67 0 0 0 .25-.75l.31-1.88a.49.49 0 0 1 .1-.27.47.47 0 0 1 .33-.09h2.36c.13-.41-.29-.8-.69-1s-.88-.31-1.08-.7c-.41-.79.65-1.9.2-2.58s-1.42-.05-2.11.29zM416.52 111.28a.61.61 0 0 1-.26.08c-.17 0-.29-.17-.36-.33-.38-.82-.16-1.89-.74-2.58a8.78 8.78 0 0 0-1.42 2.37l-2.22-.69a3.27 3.27 0 0 0 .42 2.55 3.67 3.67 0 0 0-1.05.71 1.16 1.16 0 0 0-.27 1.18 5.52 5.52 0 0 0 1.57.16 10.23 10.23 0 0 0 .16 2.92.51.51 0 0 0 .2.37c.16.11.37 0 .54-.09a5.17 5.17 0 0 0 1.83-1.94l.83 2a.83.83 0 0 0 .37.49.58.58 0 0 0 .69-.24 1.7 1.7 0 0 0 .24-.75l.31-1.88a.5.5 0 0 1 .11-.26.47.47 0 0 1 .33-.1h2.35c.13-.42-.28-.81-.68-1s-.88-.31-1.08-.7c-.41-.8.65-1.9.2-2.59s-1.39-.02-2.07.32z",
    opacity: 0.5
  }), _react.default.createElement("path", {
    d: "M371.68 106.25a.65.65 0 0 1-.27.08c-.16 0-.28-.17-.35-.32-.38-.83-.16-1.89-.75-2.59a8.9 8.9 0 0 0-1.41 2.37l-2.23-.68a3.36 3.36 0 0 0 .42 2.55 3.37 3.37 0 0 0-1 .71 1.16 1.16 0 0 0-.28 1.18 6 6 0 0 0 1.58.15 10.21 10.21 0 0 0 .16 2.92.42.42 0 0 0 .74.29 5.32 5.32 0 0 0 1.83-1.94l.82 2a.91.91 0 0 0 .37.5.62.62 0 0 0 .7-.24 1.79 1.79 0 0 0 .24-.75l.31-1.88a.58.58 0 0 1 .1-.27.49.49 0 0 1 .33-.09h2.36c.13-.41-.28-.8-.69-1s-.87-.31-1.07-.7c-.41-.79.64-1.9.19-2.58s-1.42-.05-2.1.29z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M357.6 112.37a.5.5 0 0 1-.26.08c-.17 0-.28-.17-.35-.32-.38-.83-.16-1.89-.75-2.59a8.8 8.8 0 0 0-1.41 2.38l-2.23-.69a3.32 3.32 0 0 0 .42 2.55 3.42 3.42 0 0 0-1 .71 1.18 1.18 0 0 0-.27 1.18 6 6 0 0 0 1.57.15 10.66 10.66 0 0 0 .17 2.93.56.56 0 0 0 .19.37.54.54 0 0 0 .54-.09 5.09 5.09 0 0 0 1.83-1.94l.83 2a.87.87 0 0 0 .37.5.6.6 0 0 0 .69-.24 1.67 1.67 0 0 0 .25-.75l.31-1.88a.43.43 0 0 1 .1-.27.47.47 0 0 1 .33-.09h2.36c.13-.41-.29-.8-.69-1s-.88-.31-1.08-.69c-.41-.8.65-1.91.2-2.59s-1.43-.05-2.12.29z",
    opacity: 0.3
  }), _react.default.createElement("path", {
    d: "M344.49 75.33a.48.48 0 0 1-.26.07c-.17 0-.29-.17-.36-.32-.38-.82-.16-1.89-.74-2.58a8.78 8.78 0 0 0-1.42 2.37l-2.22-.69a3.27 3.27 0 0 0 .42 2.55 3.3 3.3 0 0 0-1.05.71 1.16 1.16 0 0 0-.27 1.18 5.9 5.9 0 0 0 1.57.16 10.23 10.23 0 0 0 .16 2.92.53.53 0 0 0 .2.37c.16.1.37 0 .54-.09a5.24 5.24 0 0 0 1.83-1.94l.83 2a.86.86 0 0 0 .36.49.6.6 0 0 0 .7-.24 1.74 1.74 0 0 0 .22-.77l.31-1.88a.5.5 0 0 1 .11-.27.46.46 0 0 1 .33-.09h2.35c.13-.42-.28-.81-.68-1s-.88-.3-1.08-.69c-.41-.8.65-1.9.2-2.59s-1.37-.02-2.05.33z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    d: "M370.33 123.67a.65.65 0 0 1-.27.08c-.17 0-.28-.17-.35-.33-.38-.82-.16-1.89-.75-2.58a8.75 8.75 0 0 0-1.41 2.37l-2.23-.69a3.35 3.35 0 0 0 .42 2.55 3.46 3.46 0 0 0-1 .72 1.14 1.14 0 0 0-.28 1.17 5.59 5.59 0 0 0 1.57.16 10.59 10.59 0 0 0 .17 2.92.54.54 0 0 0 .19.37.5.5 0 0 0 .54-.09 5.12 5.12 0 0 0 1.84-1.94l.82 2a.88.88 0 0 0 .37.49.6.6 0 0 0 .7-.23 1.79 1.79 0 0 0 .24-.75l.31-1.89a.49.49 0 0 1 .1-.26.54.54 0 0 1 .33-.1H374c.13-.42-.29-.8-.69-1s-.88-.31-1.08-.7c-.41-.79.65-1.9.2-2.58s-1.43-.03-2.1.31z",
    opacity: 0.3
  })), _react.default.createElement("path", {
    d: "M138.55 438.03c-.43 0-.85 0-1.27-.05H137v-2.06a8.22 8.22 0 0 1 1.55 2.11z",
    fill: "#3f3d56",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M149.47 705.28a42.11 42.11 0 0 1-.91 8.81c-.11.55-.24 1.08-.36 1.6-3.23 12.94-12.33 22.41-23.19 23h-1.1c-11.49 0-21.2-9.9-24.4-23.55-.1-.36-.17-.72-.25-1.09a41.45 41.45 0 0 1-.91-8.81c0-18.49 11.44-33.46 25.56-33.46s25.56 15.01 25.56 33.5z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M149.47 705.28a42.11 42.11 0 0 1-.91 8.81c-.11.55-.24 1.08-.36 1.6h-1.15a52.26 52.26 0 0 1-8.36-1.15 50.31 50.31 0 0 1-7.45 1.7 51.31 51.31 0 0 1-5.84.55h-2a52.31 52.31 0 0 1-7-.46 50.87 50.87 0 0 1-11-2.73 51.78 51.78 0 0 1-5.93 1.59c-.1-.36-.17-.72-.25-1.09a41.45 41.45 0 0 1-.91-8.81c0-18.49 11.44-33.46 25.56-33.46s25.6 14.96 25.6 33.45z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M204 642.94a51.77 51.77 0 0 0-5.56-23.4l-30.07 9.34 26.39-15.51a51.87 51.87 0 0 0-39-22.25 51.92 51.92 0 0 0-4-5.36l-43.22 13.44 35.42-20.82a52 52 0 0 0-81.77 27.7l37 42.57-40.17-29a52 52 0 0 0 46.5 91.69 52.12 52.12 0 0 0 33.26.91 52 52 0 0 0 63.1-50.73c0-1.16 0-2.3-.12-3.44a51.69 51.69 0 0 0 2.24-15.14z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M203.11 652.58a138.59 138.59 0 0 0-48.11-.61c-18.05 3-36.5 9.56-54.15 4.75-10.36-2.81-19.33-9.33-29.44-13A55.69 55.69 0 0 0 41 641.95a52 52 0 0 0 64.4 69.37 52.12 52.12 0 0 0 33.26.91 52 52 0 0 0 63.22-50.71c0-1.16 0-2.3-.12-3.44a49.81 49.81 0 0 0 1.35-5.5z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 557,
    cy: 748.04,
    rx: 557,
    ry: 63,
    fill: primaryColor,
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M838.27 541.27c-22.48 73.35-31.51 213.35-31.51 213.35H263.47c1.76-66.58-37.13-204.47-38.31-215.08-1-8.85 35-54.67 46.91-69.56a12.45 12.45 0 0 1 9.75-4.68h491.06a12.55 12.55 0 0 1 7.12 2.22 187 187 0 0 1 57.35 64.26 12.41 12.41 0 0 1 .92 9.49z",
    fill: "#3f3d56"
  }), _react.default.createElement("rect", {
    x: 310,
    y: 620.4,
    width: 433,
    height: 50.68,
    rx: 10.47,
    fill: "#fff",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M290 512.44s-27.1-83.68 17.68-95.46 142.58 3.54 142.58 3.54 76.6-38.89 165-8.24c0 0 126.1-37.72 150.85-1.18s-5.9 101.35-5.9 101.35z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M270.54 540.13l22.39-44.78 18.86 87.21.21 40.48-41.46-82.91zM784.36 540.13l-22.39-44.78L736 578.04l5 47 43.36-84.91z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M310.14 580.18l425.91-2.34 4.71 47.14-428.97-1.17-1.65-43.63z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M310.14 580.18l425.91-2.34 4.71 47.14-428.97-1.17-1.65-43.63z"
  }), _react.default.createElement("path", {
    d: "M622.37 57.28a55.21 55.21 0 0 1-6.94-9.68c-3.17-6.14-3.92-13.2-5.62-19.91s-4.83-13.63-10.89-17c-6.68-3.65-15.6-2.2-21.79-6.28A124.17 124.17 0 0 0 561.66.75c-5.36-.9-11-1.42-16.08.57-7.68 3-12 10.92-17.5 17.12a50 50 0 0 1-28.71 16 42.63 42.63 0 0 0 25.75-1.61 30.86 30.86 0 0 1-10.28 15.67A24.93 24.93 0 0 0 530 45.52q-.84 8.91-1.67 17.83c-.51 5.46-1.8 12-6.94 13.92 8.74-1.63 17.76-3.9 24.5-9.7 4.85-4.17 8.12-9.84 11.31-15.39 4.33-7.56 8.8-15.66 8.35-24.36A19.52 19.52 0 0 0 587 38.52c-9 8.54-10.49 22.12-11.43 34.49-.23 3-.44 6.12.59 9a16.49 16.49 0 0 0 3.54 5.34c4.49 4.89 10.2 8.46 15.83 12a8.2 8.2 0 0 0 3.35 1.45 8.46 8.46 0 0 0 4.1-1l.67-.28a45.5 45.5 0 0 1-7-20l28.88 12.49 2.36-.62a44.65 44.65 0 0 1-3.24-12.87l21.61 9.35c2.81-.38 5.64-.69 8.47-.92-13.17-6.72-22.96-18.35-32.36-29.67z",
    fill: "#fbc661"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M528.32 63.37l-.12 1.15a28.1 28.1 0 0 0 2.12-9.16q.84-8.9 1.68-17.84a24.84 24.84 0 0 1-10.26 3.13 30.59 30.59 0 0 1-6.89 7.93A24.93 24.93 0 0 0 530 45.52q-.85 8.93-1.68 17.85zM527.12 24.93a42.47 42.47 0 0 1-9.47 2.47 49.76 49.76 0 0 1-18.28 7.12 42.64 42.64 0 0 0 23.77-.9 30.54 30.54 0 0 0 3.98-8.69zM589 30.52a19.52 19.52 0 0 1-21.44-10.67 27.64 27.64 0 0 1-1.27 9.43A19.78 19.78 0 0 0 583 38.92a28.53 28.53 0 0 1 6-8.4zM559.19 44.2c-3.19 5.55-6.46 11.22-11.31 15.39-5.67 4.87-13 7.25-20.32 8.86-.88 3.9-2.59 7.49-6.18 8.84 8.74-1.63 17.76-3.9 24.5-9.7 4.85-4.17 8.12-9.84 11.31-15.39 3.67-6.41 7.43-13.21 8.22-20.43a88.48 88.48 0 0 1-6.22 12.43zM626.64 70.4a43 43 0 0 0 2.1 9.77l17.51 7.58c2.81-.38 5.64-.69 8.47-.92a67.84 67.84 0 0 1-15.41-11zM597.51 91.26c-5.63-3.51-11.34-7.08-15.83-12a16.49 16.49 0 0 1-3.54-5.34c-1-2.83-.82-6-.59-9a135.64 135.64 0 0 1 1.55-13.4c-2.27 6.77-3 14.34-3.55 21.51-.23 3-.44 6.12.59 9a16.49 16.49 0 0 0 3.54 5.34c4.49 4.89 10.2 8.46 15.83 12a8.2 8.2 0 0 0 3.35 1.45 8.46 8.46 0 0 0 4.1-1l.67-.28a41.91 41.91 0 0 1-3.63-7.02 10.93 10.93 0 0 1-2.49-1.26zM598.64 71.4a42.59 42.59 0 0 0 2.09 9.77l24.79 10.72 2.36-.62a47.38 47.38 0 0 1-2.55-8.33z"
  })), _react.default.createElement("path", {
    d: "M491 111.52c-2.24 1.27-3.42 3.8-4.25 6.23-3.92 11.44-3.28 23.88-5.07 35.84-1.48 9.88-4.63 19.5-5.33 29.46-.46 6.59.14 13.32-1.56 19.7a48 48 0 0 1-5.3 11.67 160.86 160.86 0 0 1-14.08 20.25c-4.84 5.94-7.94 12.68-13.92 17.47-4 3.25-9.05 5.62-11.73 10.06-3.51 5.81-2 13.31.53 19.62 1.11 2.84 2.57 5.83 5.31 7.17s5.91.67 8.39-.91a21 21 0 0 0 5.92-6.45c4.36-6.59 7.65-13.83 11.92-20.48 2.9-4.51 6.24-8.72 9.58-12.93l5.2-6.56c5.29-6.67 10.62-13.38 17-19a15.73 15.73 0 0 0 3.39-3.84 14.42 14.42 0 0 0 1.4-5.52l2.85-24.54c1.09-9.45 3.05-19.08 4.6-28.47 1.78-10.75 3.51-22.08-.27-32.3A31.43 31.43 0 0 0 491 111.52z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M505.61 127.99A31.43 31.43 0 0 0 491 111.52a6.47 6.47 0 0 0-1.24.95 30.52 30.52 0 0 1 8.89 12.56c3.78 10.22 2 21.55.27 32.3-1.55 9.39-3.51 19-4.6 28.47l-2.85 24.54a14.42 14.42 0 0 1-1.4 5.52 15.73 15.73 0 0 1-3.48 3.76c-6.36 5.66-11.69 12.37-17 19l-5.2 6.56c-3.34 4.21-6.68 8.42-9.58 12.93-4.27 6.65-7.56 13.89-11.92 20.48a21 21 0 0 1-5.92 6.45 10.27 10.27 0 0 1-4.18 1.54 8 8 0 0 0 2.79 2.37c2.64 1.29 5.91.67 8.39-.91a21 21 0 0 0 5.92-6.45c4.36-6.59 7.65-13.83 11.92-20.48 2.9-4.51 6.24-8.72 9.58-12.93l5.2-6.56c5.29-6.67 10.62-13.38 17-19a15.73 15.73 0 0 0 3.41-3.8 14.42 14.42 0 0 0 1.4-5.52l2.85-24.54c1.09-9.45 3.05-19.08 4.6-28.47 1.81-10.77 3.54-22.08-.24-32.3z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M589.11 328.4c-.51 3-.91 7-3.37 8.74-1.86 1.33-3.72 2.66-5.56 4a83.75 83.75 0 0 0-10.93 9.4c-1.87 2-3.59 4.08-5.47 6-2.11 2.2-4.39 4.22-6.69 6.22-8.77 7.61-17 16.9-27 22.86-16.51 9.88-33.22 19.91-46.65 33.68a6.63 6.63 0 0 0-2.44 6.22c.17 5 1.49 10.13 2.32 15.1 1.47 8.82-1.34 17.73-4.1 26.23-4 12.16-5.61 24.93-11.32 36.37-4.41 8.83-8.85 17.76-11.1 27.36a125.61 125.61 0 0 0-2.4 17.39 77.9 77.9 0 0 0-.46 12.49c.25 3.65 2.54 6.72 3.93 10.1 1.47 3.57-.31 7.8-3.16 10.41s-6.59 4-10.15 5.46q-4.92 2.05-9.64 4.53c-3.14 1.66-6.31 3.53-8.39 6.41-2.41 3.34-3.15 7.77-6 10.74-3 3.15-7.71 3.95-12.07 4.27a95.38 95.38 0 0 1-21.75-.9 11.27 11.27 0 0 1-4.77-1.57 4.12 4.12 0 0 1-1.8-4.38c.63-2 2.95-2.72 4.95-3.2 5.24-1.27 11.28-2.7 16.52-4l3.45-11a82.4 82.4 0 0 1 3.47-9.71c1.36-3 3.07-5.89 4.59-8.84 5.67-10.94 9.05-23.37 11.95-35.35a174.29 174.29 0 0 0 4.8-37.29c.12-6.18-.09-12.37.36-18.53.66-9 2.71-17.83 4-26.76s.71-19.19.24-28.2a58.84 58.84 0 0 1 16.07-43.24c3.89-4.05 8.34-7.52 12.37-11.42a170.82 170.82 0 0 0 12.54-14.2c18.49-22.36 38.33-43.84 61.48-61.34 5.75-4.35 12.69-5.18 19.36-7.93a47.46 47.46 0 0 1 13.63-3.37 3.2 3.2 0 0 1 1.57.13 3.27 3.27 0 0 1 1.24 1.21c.1.15.21.3.3.45 7.46 10.92 11.26 23.87 14.94 36.58.8 2.91 1.64 5.92 1.14 8.88z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M586.93 319.52c-3.68-12.71-7.48-25.66-14.94-36.58-.09-.15-.2-.3-.3-.45a3.27 3.27 0 0 0-1.24-1.21 3.2 3.2 0 0 0-1.57-.13 46.43 46.43 0 0 0-6.4 1.06l.21.28c.1.15.21.3.3.45 7.46 10.92 11.26 23.87 14.94 36.58.84 2.89 1.68 5.9 1.18 8.86s-.91 7-3.37 8.74c-1.86 1.33-3.72 2.66-5.56 4a83.75 83.75 0 0 0-10.93 9.4c-1.87 2-3.59 4.08-5.47 6-2.11 2.2-4.39 4.22-6.69 6.22-8.77 7.61-17 16.9-27 22.86-16.51 9.88-33.22 19.91-46.65 33.68a6.63 6.63 0 0 0-2.44 6.24c.17 5 1.49 10.13 2.32 15.1 1.47 8.82-1.34 17.73-4.1 26.23-4 12.16-5.61 24.93-11.32 36.37-4.41 8.83-8.85 17.76-11.1 27.36a125.61 125.61 0 0 0-2.4 17.39 77.9 77.9 0 0 0-.46 12.49c.25 3.65 2.54 6.72 3.93 10.1 1.47 3.57-.31 7.8-3.16 10.41s-6.59 4-10.15 5.46q-4.92 2.05-9.64 4.53c-3.14 1.66-6.31 3.53-8.39 6.41-2.41 3.34-3.15 7.77-6 10.74-3 3.15-7.71 3.95-12.07 4.27l-2.46.14a96.86 96.86 0 0 0 11.43-.15c4.36-.32 9-1.12 12.07-4.27 2.84-3 3.58-7.4 6-10.74 2.08-2.88 5.25-4.75 8.39-6.41s6.36-3.16 9.64-4.53c3.56-1.49 7.29-2.86 10.15-5.46s4.63-6.84 3.16-10.41c-1.39-3.38-3.68-6.45-3.93-10.1a77.9 77.9 0 0 1 .46-12.49 125.61 125.61 0 0 1 2.4-17.39c2.25-9.6 6.69-18.53 11.1-27.36 5.71-11.44 7.36-24.21 11.32-36.37 2.76-8.5 5.57-17.41 4.1-26.23-.83-5-2.15-10.06-2.32-15.1a6.63 6.63 0 0 1 2.48-6.16c13.43-13.77 30.14-23.8 46.65-33.68 10-6 18.2-15.25 27-22.86 2.3-2 4.58-4 6.69-6.22 1.88-2 3.6-4.07 5.47-6a83.75 83.75 0 0 1 10.93-9.4c1.84-1.36 3.7-2.69 5.56-4 2.46-1.76 2.86-5.76 3.37-8.74s-.35-6.02-1.19-8.93z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M571.14 295.9l11 22s3 79 7 92a129.47 129.47 0 0 1 3.34 13.6 285.54 285.54 0 0 0 7.13 29 83.81 83.81 0 0 1 2.53 9.42c0 2 3.74 22 5 30 1.5 9.5 14.5 44.5 16.5 57.5s2.5 21.5.5 35.5 1 23 29 23 6-10 6-10-9.5-7.5-11.5-31.5c-1.31-15.75.17-25.68 1.35-30.65a106.1 106.1 0 0 0 2.64-16.51 183.39 183.39 0 0 0-4.54-57.06 256 256 0 0 1-7.09-76.5c1-18.47 3.12-37.2 7.19-47.8 10-26 7-84-9-90s-49 0-49 0z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M659.14 597.9s-9.5-7.5-11.5-31.5c-1.31-15.75.17-25.68 1.35-30.65a106.1 106.1 0 0 0 2.64-16.51 183.39 183.39 0 0 0-4.54-57.06A256 256 0 0 1 640 385.7c1-18.47 3.12-37.2 7.19-47.8 10-26 7-84-9-90-6-2.24-14.34-2.81-22.47-2.64 6.45.14 12.71.86 17.47 2.64 16 6 19 64 9 90-4.07 10.6-6.16 29.33-7.19 47.8a256 256 0 0 0 7.14 76.48 183.39 183.39 0 0 1 4.54 57.06 106.1 106.1 0 0 1-2.68 16.51c-1.18 5-2.66 14.9-1.35 30.65 2 24 11.5 31.5 11.5 31.5s20.68 9.4-3.59 10h2.59c27.99 0 5.99-10 5.99-10z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M496.66 169.8a141.17 141.17 0 0 0 31.64 92.72l43.76-28.15c9.26-6 18.56-11.94 28.43-16.84 1.21-.61 2.12-2.34 3.19-3.17-9.17-4.25-14.71-14.13-16.41-24.09s-.15-20.17 1.4-30.16c-11.17-3.21-22.87-4.13-34.48-4.36-20.7-.43-41.09 1.48-57.53 14.05z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M587.27 190.26c-1.7-10-.15-20.17 1.4-30.16-11.17-3.21-22.87-4.13-34.48-4.36q-4.14-.09-8.24 0h1.24c11.61.23 23.31 1.15 34.48 4.36-1.55 10-3.1 20.19-1.4 30.16s7.24 19.84 16.41 24.09c-1.07.83-2 2.56-3.19 3.17-9.87 4.9-19.17 10.88-28.43 16.84l-39.13 25.16c.78 1 1.56 2 2.37 3l43.76-28.15c9.26-6 18.56-11.94 28.43-16.84 1.21-.61 2.12-2.34 3.19-3.17-9.17-4.26-14.68-14.14-16.41-24.1z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M538.36 74.52c-1.79 5.07-2.47 10.5-4.32 15.56a5.51 5.51 0 0 1-1.38 2.33 5.83 5.83 0 0 1-3.18 1l-7 .8c.48 5.67 4.41 10.63 9.27 13.59 10.85 6.62 25.12 4.16 36.4-1.68 6.07-3.13 12.18-8 13-14.74-2 1.49-5 .28-6.29-1.85s-1.14-4.78-.81-7.23a49.44 49.44 0 0 1 3.41-12.52 3.43 3.43 0 0 0 .4-2c-.3-1.28-1.89-1.68-3.2-1.84-7.94-.94-16.58-3-24.56-2.91-4.66.06-11.74 5.87-11.74 11.49z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M538.36 74.52c-1.79 5.07-2.47 10.5-4.32 15.56a5.51 5.51 0 0 1-1.38 2.33 5.83 5.83 0 0 1-3.18 1l-7 .8c.48 5.67 4.41 10.63 9.27 13.59 10.85 6.62 25.12 4.16 36.4-1.68 6.07-3.13 12.18-8 13-14.74-2 1.49-5 .28-6.29-1.85s-1.14-4.78-.81-7.23a49.44 49.44 0 0 1 3.41-12.52 3.43 3.43 0 0 0 .4-2c-.3-1.28-1.89-1.68-3.2-1.84-7.94-.94-16.58-3-24.56-2.91-4.66.06-11.74 5.87-11.74 11.49z",
    opacity: 0.05
  }), _react.default.createElement("circle", {
    cx: 570.14,
    cy: 46.9,
    r: 31,
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M548.83 103.46c-2.49 1.57-5.89.52-8.13-1.4s-3.7-4.54-5.7-6.78-4.69-4.13-7.61-3.75c-2.31.31-4.19 2-6.35 2.84-6 2.46-13.47-1.38-19.27 1.62-2.52 1.3-4.27 3.69-6.07 5.89a64.37 64.37 0 0 1-13.46 12.33c4.43 3.68 9.07 8.13 9.43 13.88.46 7.34-6.08 12.92-10 19.13-3.72 5.88-5.24 13.35-3.12 20s8.23 12.06 15.18 12.46c8.74-6.82 19.44-11.34 30.53-11.51a31.83 31.83 0 0 1 9.62 1.14 59.36 59.36 0 0 1 7.64 3.21 109.07 109.07 0 0 0 49.65 9.88c-2.47-7 3.31-14.33 6.23-21.13 2.16-5.05 3-10.55 4.62-15.78a52.18 52.18 0 0 1 25.11-30.1c-2.49-8.52-9.42-15.57-16.86-20.39a26 26 0 0 0-6-3c-4.28-1.4-8.89-1.32-13.39-1.22l-10.77.23a9.88 9.88 0 0 0-2.6.29 10.65 10.65 0 0 0-3.14 1.89c-7.47 5.56-17.66 5.33-25.54 10.27z",
    fill: "#eeeff3"
  }), _react.default.createElement("path", {
    d: "M600.35 31.46c-1.24-3.28-2.44-6.65-4.51-9.48-3.53-4.82-9.17-7.55-14.68-9.84-1.44-.6-3-1.18-4.51-.66a5.73 5.73 0 0 0-2.58 2.35c-1.44-4.79-6.67-6.53-11.35-5.74-9.51 1.61-16 10.18-21.56 18.09L532 39.25c-2.1 3-4.31 6.51-3.53 10.09a61 61 0 0 0 21.38-4.82c-4.56 8.85-11.79 16-18.91 23 8.76-1.69 16.4-7.24 22.24-14s10.09-14.7 14.3-22.57c1.34-2.51 3.59-5.58 5.16-8.74l19.83 20.31c10.52 10.83 21.22 21.81 34.28 29.4-12.75-10.14-20.61-25.21-26.4-40.46z",
    fill: "#fbc661"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M491.19 125.35a12.11 12.11 0 0 0 .52-4.26c-.24-3.89-2.44-7.17-5.21-10a61.793 61.793 0 0 1-4.22 3.16c3.72 3.04 7.54 6.65 8.91 11.1zM591.05 175.37a109 109 0 0 1-49.51-9.85 59.36 59.36 0 0 0-7.64-3.21 31.83 31.83 0 0 0-9.62-1.14c-11.09.17-21.79 4.69-30.53 11.51-7-.4-13.06-5.83-15.18-12.46a20.89 20.89 0 0 1-.68-2.89 21.63 21.63 0 0 0 .68 9.89c2.12 6.63 8.23 12.06 15.18 12.46 8.74-6.82 19.44-11.34 30.53-11.51a31.83 31.83 0 0 1 9.62 1.14 59.36 59.36 0 0 1 7.64 3.21 109.07 109.07 0 0 0 49.65 9.88 12 12 0 0 1-.14-7.03zM602 138.46c-1.65 5.23-2.46 10.73-4.62 15.78-2.88 6.71-8.54 14-6.3 20.87 1.23-4.68 4.38-9.4 6.3-13.87 2.16-5.05 3-10.55 4.62-15.78a52.18 52.18 0 0 1 25.11-30.1 27.23 27.23 0 0 0-2.39-5.65A52.27 52.27 0 0 0 602 138.46z"
  })), _react.default.createElement("path", {
    d: "M589.36 123.79c1.2 6.57 4.73 12.43 7.95 18.27 9.94 18 17.55 37.17 25.35 56.19 2.58 6.27 5.24 12.65 9.63 17.81a83.64 83.64 0 0 0 8.59 8.13A310.41 310.41 0 0 1 663 246.52l44.44 47.89a46.5 46.5 0 0 0 7.68 6.44c2.37 1.67 4.74 3.34 7.23 4.82 7.16 4.29 15.16 6.95 23.08 9.58 1.69.56 3.59 1.11 5.18.32s2.31-2.7 2.66-4.46a24 24 0 0 0-10.19-24.3c-5.62-3.65-12.46-4.71-18.89-6.58s-13.11-5.07-16.05-11.09a185 185 0 0 0-12-21.24c-3.43-5.14-7.31-10-10.53-15.27-2.94-4.84-5.31-10-8.44-14.75-7.56-11.43-19.45-20.09-24.34-32.9-5.21-13.66-11.22-26.76-16.62-40.35-2.65-6.68-6.36-12.94-8.47-19.81-1.09-3.54-1.74-7.23-3.15-10.65s-3.74-6.69-7.14-8.16c-5.5.2-8.9 5.8-12.66 9.83a24.43 24.43 0 0 1-15.43 7.95z",
    fill: "#fbb3b2"
  }), _react.default.createElement("path", {
    d: "M639.43 248.67c-12.58.22-25.28 3.25-35.95 9.93s-19.14 17.21-22.14 29.44a65.51 65.51 0 0 0-1.26 7.07c-.62 4.55-1 9.24-2.06 13.54l-.09.38a77.6 77.6 0 0 0-45.46-12.65c.25-1.2-.61.2 0-.83a4.45 4.45 0 0 0 .53-1.03c1.29-1 2.59-2 3.9-3 5.75-4.35 12.69-5.18 19.36-7.93a47.46 47.46 0 0 1 13.63-3.37 3.2 3.2 0 0 1 1.57.13 3.27 3.27 0 0 1 1.24 1.21c.77 1.11 1.5 2.24 2.2 3.39l14.25-38s33-6 49 0l.35.14zM751.61 309.52c-1.59.79-3.49.24-5.18-.32-7.92-2.63-15.92-5.29-23.08-9.58-2.49-1.48-4.86-3.15-7.23-4.82a46.5 46.5 0 0 1-7.68-6.44q-22.22-23.93-44.44-47.84a310.41 310.41 0 0 0-22.12-22.31 83.64 83.64 0 0 1-8.59-8.13c-4.39-5.16-7-11.54-9.63-17.81-7.8-19-15.41-38.19-25.35-56.19a97.69 97.69 0 0 1-6.37-12.74c-.84.19-1.69.35-2.58.47 1.2 6.57 4.73 12.43 7.95 18.27 9.94 18 17.55 37.17 25.35 56.19 2.58 6.27 5.24 12.65 9.63 17.81a83.64 83.64 0 0 0 8.59 8.13A310.41 310.41 0 0 1 663 246.52q22.23 23.94 44.44 47.89a46.5 46.5 0 0 0 7.68 6.44c2.37 1.67 4.74 3.34 7.23 4.82 7.16 4.29 15.16 6.95 23.08 9.58 1.69.56 3.59 1.11 5.18.32s2.31-2.7 2.66-4.46a21.75 21.75 0 0 0 .42-4 4.63 4.63 0 0 1-2.08 2.41z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M607.06 125.71c5.92-3.22 15.19-6.28 20.58-10.31.75-.56-1.06-3.06-1-4 0-.52-.76-1.52-1-2-4.13-8.31-14.83-11.87-23.92-10a42.36 42.36 0 0 0-8.71 3.19 18.2 18.2 0 0 0-5.77 3.52c-2.56 2.62-3.31 6.5-3.61 10.15-.25 3.11-.26 6.36 1 9.23 1.59 3.69 4.82 10.27 9.29 8.51 4.21-1.66 8.96-6.01 13.14-8.29z",
    fill: "#eeeff3"
  }), _react.default.createElement("ellipse", {
    cx: 590.93,
    cy: 285.29,
    rx: 2.18,
    ry: 3,
    transform: "rotate(-30 486.433 343.3)",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M531.47 295.38a77.6 77.6 0 0 1 45.46 12.65c1.66-6.67 1.77-14.31 3.41-21 3-12.22 11.48-22.75 22.14-29.43s23.37-9.72 35.95-9.93c-6.18-10.81-13.4-21-23.48-28.33-3.93-2.84-8.35-5.31-11-9.37-4.06.77-7.65 1.55-11.19 3.69l-46.26 28a151.81 151.81 0 0 1-13.7 7.65 76.42 76.42 0 0 1-12.37 4.56 9.75 9.75 0 0 0-1.69 8 34.65 34.65 0 0 0 3.49 8.55l8.13 15.76c1.36 2.64 2.72 5.9 1.15 8.42-.65.99.21-.41-.04.78z",
    fill: "#f66"
  }), _react.default.createElement("g", {
    opacity: 0.05
  }, _react.default.createElement("path", {
    d: "M549.85 39.52a61 61 0 0 1-20.77 4.81 8.51 8.51 0 0 0-.6 5 60.73 60.73 0 0 0 17.35-3.32 52 52 0 0 0 4.02-6.49zM613.7 57.8c-7.54-6.18-14.43-13.28-21.23-20.28l-19.83-20.38c-1.57 3.16-3.82 6.23-5.16 8.74-4.21 7.87-8.46 15.82-14.3 22.57a45.1 45.1 0 0 1-14.89 11.59c-2.38 2.53-4.87 5-7.35 7.4 8.76-1.69 16.4-7.24 22.24-14s10.09-14.7 14.3-22.57c1.34-2.51 3.59-5.58 5.16-8.74l19.83 20.39c10.52 10.83 21.22 21.81 34.28 29.4A67.24 67.24 0 0 1 613.7 57.8z"
  })), _react.default.createElement("rect", {
    x: 892,
    y: 534.04,
    width: 138,
    height: 214,
    rx: 7.46,
    fill: "#3f3d56"
  }), _react.default.createElement("circle", {
    cx: 961,
    cy: 588.54,
    r: 32,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 961,
    cy: 588.54,
    r: 29.77,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 961,
    cy: 682.54,
    r: 43,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 961,
    cy: 682.54,
    r: 40,
    opacity: 0.1
  }));
};

UndrawDuaLipa.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDuaLipa;
exports.default = _default;