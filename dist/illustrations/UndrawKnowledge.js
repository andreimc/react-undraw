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

var UndrawKnowledge = function UndrawKnowledge(_props) {
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
    viewBox: "0 0 1087 800.5",
    style: style
  }, props), _react.default.createElement("path", {
    fill: "#f2f2f2",
    d: "M117.5 105.5h910v490h-910z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M205.5 189.5h294v361h-294z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M612.5 215.5h235v13h-235zM612.5 239.5h342v13h-342zM612.5 297.5h235v13h-235zM612.5 393.5h235v13h-235zM612.5 321.5h342v13h-342zM612.5 345.5h342v13h-342zM612.5 369.5h342v13h-342z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M612.5 451.5h123v34h-123z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M224.5 170h294v361h-294z"
  }), _react.default.createElement("path", {
    d: "M476.5 369.608c0 70.11-41.68 94.59-93.094 94.59s-93.095-24.48-93.095-94.59 93.095-159.303 93.095-159.303S476.5 299.497 476.5 369.608z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M380.014 453.474l.954-58.677 39.679-72.591-39.53 63.387.429-26.384 27.347-52.519-27.234 45.537v.001l.771-47.452 29.284-41.812-29.163 34.35.482-87.009-3.027 115.185.249-4.752-29.773-45.572 29.295 54.693-2.774 52.996-.082-1.407-34.323-47.958 34.219 52.927-.347 6.628-.062.1.028.544-7.038 134.453h9.403l1.129-69.448 34.134-52.797-34.05 47.577z"
  }), _react.default.createElement("ellipse", {
    cx: 131.5,
    cy: 783.5,
    rx: 131,
    ry: 17,
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M69.623 312.876l-4.351 10.335 4.895 66.904s-2.72 3.808 0 6.528 2.176 3.807 2.176 3.807-4.352 0-2.176 3.264 2.176 4.895 2.176 4.895l-1.088 3.264s2.176 2.72 2.176 4.895 14.142 69.08 14.142 69.08l13.599-26.652-7.615-106.069z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M212.709 480.233s23.932 17.627 24.775 31.724-30.85-20.992-31.066-24.946 6.29-6.778 6.29-6.778z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M62.552 746.94l-5.983 19.582s-8.703 19.038 3.263 21.758 23.39-7.616 23.39-7.616V767.61l4.351-20.67zM160.461 746.94s-2.72 36.988 3.264 39.164 27.197 2.72 27.74 0 7.072-5.44 2.177-9.247-8.16-26.11-8.16-26.11z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M105.523 396.643v16.318s-17.95 37.532-24.477 96.821-28.829 239.878-23.39 243.142 64.185 5.439 65.817 1.087 3.264-131.633 3.264-131.633l20.126-89.75s3.807 32.092 7.07 37.532-5.439 182.22 0 184.94 78.872 7.614 77.784-1.089-25.565-244.773-25.565-244.773-12.51-111.507-16.318-112.595-38.62-2.176-44.06-1.088-40.25 1.088-40.25 1.088z",
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 146.863,
    cy: 230.741,
    r: 31.005,
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M153.39 256.85s-15.774 24.477-11.967 31.005-40.251-6.528-40.251-6.528 26.653-32.636 26.109-36.444 26.109 11.967 26.109 11.967z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M186.026 293.294s-28.828-9.247-32.636-13.055a52.318 52.318 0 0 1-6.527-8.159s-34.813-4.895-35.9-4.895-9.247 9.79-11.423 11.967-29.917 16.862-29.917 20.67-4.351 23.389-4.351 23.389 9.79 20.126 15.774 24.477 7.615 3.264 8.159 10.335 8.16 18.494 8.16 18.494 4.895 12.51 3.807 16.318-5.984 7.071 5.44 5.983 67.992 2.176 67.992-3.807-10.88-63.097-10.88-63.097z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M175.692 294.382l10.334-1.088s3.808 2.176 4.352 23.39.544 72.343 4.351 76.695 19.582 71.8 19.582 71.8 4.352 1.088 4.352 4.896 4.895 7.07 2.72 11.422 2.175 3.264-.544 5.984-15.775 8.159-16.319 4.895 1.632-3.807-.544-4.895-2.175-1.632-2.72-5.44-5.439-7.615-4.895-9.247-23.933-48.954-23.933-50.586-1.632-7.615-3.808-8.703-5.44-2.176-3.807-4.896-4.352-84.31-4.352-84.31z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M173.081 211.078c-9.507-10.32-24.438-15.798-38.13-12.728s-25.223 15.226-26.293 29.218c-.22 2.861-.037 5.785-.778 8.558-1.245 4.665-4.952 8.361-6.258 13.01-.875 3.112-.616 6.464-1.544 9.561-1.713 5.724-7.018 9.456-11.062 13.855a14.02 14.02 0 0 0-3.54 5.795 21.852 21.852 0 0 0-.269 5.897A41.057 41.057 0 0 1 74.2 312.886a70.653 70.653 0 0 1 13.698-7.963c-2.404 7.655-.207 16.713 5.842 21.985s15.737 6.092 22.277 1.443c3.886-2.762 6.41-7 8.82-11.113l9.125-15.571c1.65-2.816 3.374-5.715 6.012-7.639 2.096-1.528 4.642-2.342 6.752-3.851 5.322-3.808 6.751-11.262 5.76-17.73s-3.9-12.475-5.568-18.803c-1.32-5.005-1.734-10.741 1.235-14.981 3.94-5.628 12.039-6.346 17.393-10.652 2.016-1.62 2.917-3.593 4.36-5.622 1.334-1.873 1.673-1.201 3.739-1.287 5.67-.235 1.538-7.743-.564-10.024z",
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 146,
    cy: 241.5,
    rx: 2.5,
    ry: 6,
    fill: "#ffb9b9"
  }), _react.default.createElement("circle", {
    cx: 674,
    cy: 694,
    r: 32,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 64,
    r: 32,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 1055,
    cy: 32,
    r: 32,
    fill: "#f2f2f2"
  }));
};

UndrawKnowledge.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawKnowledge;
exports.default = _default;