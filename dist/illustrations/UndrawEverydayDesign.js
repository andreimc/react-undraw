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

var UndrawEverydayDesign = function UndrawEverydayDesign(_props) {
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
    viewBox: "0 0 913.223 852.58",
    style: style
  }, props), _react.default.createElement("circle", {
    cx: 202.37,
    cy: 247.491,
    r: 54.315,
    fill: "#ff6584"
  }), _react.default.createElement("path", {
    d: "M887.223 429.58c0 231.96-188.04 420-420 420s-597.996-271.262-420-420c179.135-149.69 275.342-379.906 420-420 223.532-61.955 420 188.04 420 420z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    fill: "#ff6584",
    d: "M444.723 556.681l13.25 22.95 13.25 22.949h-53l13.25-22.949 13.25-22.95z"
  }), _react.default.createElement("path", {
    d: "M690.27 247.78s17.618-12.662 19.82-6.606-13.213 17.067-13.213 17.067z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M752.758 264.022c0 21.892-9.426 22.572-24.78 22.572s-30.826-.68-30.826-22.572 12.448-39.64 27.803-39.64 27.803 17.747 27.803 39.64z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M715.045 263.746s2.202 16.517-8.258 17.618 34.134 4.404 34.134 4.404-11.561-10.46-5.505-18.718-20.37-3.304-20.37-3.304z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M715.045 263.746s2.202 16.517-8.258 17.618 34.134 4.404 34.134 4.404-11.561-10.46-5.505-18.718-20.37-3.304-20.37-3.304z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M659.44 558.841l-3.854 32.483s-19.27 23.673-7.157 22.022 19.82-3.304 19.82-5.506 1.651-11.01 3.303-11.01 1.651 6.055 1.651 6.055a50.926 50.926 0 0 0 5.506-2.753c.55-.55 1.101-19.269 1.101-19.269s1.652-9.36-1.652-13.764-2.752-8.258-2.752-8.258zM748.078 556.639s-1.651 32.482-3.854 34.134-8.258 25.325 2.753 22.022 15.966-6.607 15.966-8.809 0-17.617 1.101-20.92 0-9.36-.55-9.91-1.652-15.967-1.652-15.967z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M688.068 365.598s-17.617 50.1-18.718 61.111 1.1 48.449 1.1 48.449-15.965 84.784-12.662 85.335 18.719 2.753 19.27 0 2.752-6.607 2.201-8.258 1.652-7.708 1.652-11.011 10.46-40.741 9.91-43.494 9.36-43.493 11.011-46.797 6.056-26.426 6.056-26.426 24.775 67.718 25.325 69.37 2.753 4.404 1.652 4.954 1.652 4.405 1.652 4.405 9.359 42.943 9.359 44.044-1.101 9.91 1.101 10.46 15.966 3.854 17.067 0-6.606-68.268-6.606-68.268-9.36-28.078-6.607-35.235-2.753-50.1-4.955-53.404-2.753-23.123-2.753-23.123z",
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 724.68,
    cy: 255.213,
    r: 17.618,
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M715.045 277.51s19.82.55 20.921-1.1 28.629 3.853 28.629 14.864-15.966 53.954-15.966 53.954-6.056 30.83-4.405 34.134-61.11-7.157-59.459-12.663 11.011-17.617-1.101-28.078-17.067-21.471-17.067-21.471l14.314-37.988s14.315-2.202 17.618 0 16.516-1.652 16.516-1.652z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M670.45 319.903l-3.853-2.753s-35.786-37.438-26.427-44.595 23.124-13.763 29.73-14.314 12.112-5.506 12.112-5.506 7.157-12.662 12.663-4.404 11.561 11.011 3.854 13.764-12.663 1.651-16.517 4.404-18.718 7.157-12.112 8.809a59.094 59.094 0 0 1 11.011 3.854l7.157 12.663z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M732.663 412.945s-14.314 20.921-3.854 19.82 15.415-15.415 15.415-15.415z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M760.74 288.521l3.855 2.753s12.662 69.37 0 87.537-13.764 17.067-13.764 17.067-2.202-1.651-3.303 9.36.55 15.415-2.753 15.415-18.168-3.303-17.067-6.056 8.258-18.719 8.809-22.572 3.303-12.663 4.404-17.618-4.955-7.708-2.202-18.168 6.607-29.18 6.607-33.033 15.415-34.685 15.415-34.685z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M741.747 239.522c0 5.93-8.134 10.736-18.168 10.736s-19.27 3.176-19.27-2.753 9.236-18.718 19.27-18.718 18.168 4.806 18.168 10.735zM697.317 267.737s-.741 19.958 19.092 18.857-2.68-17.06-2.68-17.06z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M382.936 548.542l.852-52.4 35.435-64.827-35.302 56.607.383-23.561 24.421-46.902-24.32 40.667.689-42.376 26.151-37.34-26.043 30.676.43-77.703-2.703 102.865.222-4.244-26.588-40.697 26.162 48.843-2.478 47.327-.074-1.256-30.651-42.828 30.559 47.265-.31 5.919-.056.089.026.486-6.286 120.072h8.398l1.008-62.02 30.483-47.149-30.408 42.487zM810.936 649.542l.852-52.4 35.435-64.827-35.302 56.607.383-23.561 24.421-46.902-24.32 40.667.689-42.376 26.151-37.34-26.043 30.676.43-77.703-2.703 102.865.222-4.244-26.588-40.697 26.162 48.843-2.478 47.327-.074-1.256-30.651-42.828 30.559 47.265-.31 5.919-.056.089.026.486-6.286 120.072h8.398l1.008-62.02 30.483-47.149-30.408 42.487z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M547.223 600.58h366v252h-366z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M303.817 600.58v91H181.223v161h383.5v-252H303.817z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M547.223 600.58h117v91h-117zM796.223 761.58h117v91h-117z"
  }), _react.default.createElement("circle", {
    cx: 358.723,
    cy: 272.29,
    r: 26,
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M510.223 180.58h44v44h-44z"
  }));
};

UndrawEverydayDesign.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawEverydayDesign;
exports.default = _default;