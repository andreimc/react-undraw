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

var UndrawAcceptRequest = function UndrawAcceptRequest(_props) {
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
    viewBox: "0 0 988.734 579.5",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 943.983,
    y1: 726.305,
    x2: 943.983,
    y2: 160.25,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.535,
    stopColor: "gray",
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  }))), _react.default.createElement("circle", {
    cx: 593.535,
    cy: 76.625,
    r: 25.15,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M644.795 29.326l-6.08-6.112a3.228 3.228 0 0 0-4.585-.032l-38.171 37.853-16.14-16.268a3.218 3.218 0 0 0-4.553-.032l-6.145 6.08a3.257 3.257 0 0 0-.032 4.585l24.514 24.704a3.257 3.257 0 0 0 4.584.032l46.576-46.225a3.229 3.229 0 0 0 .032-4.585z",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    y: 64.05,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 0.57,
    y: 154.17,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 1.14,
    y: 244.291,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 1.71,
    y: 334.411,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 14.252,
    y: 50.637,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 14.822,
    y: 140.757,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 15.392,
    y: 230.877,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 15.962,
    y: 320.997,
    width: 456.016,
    height: 51.976,
    rx: 25.61,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 593.535,
    cy: 167.165,
    r: 25.15,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 593.535,
    cy: 257.704,
    r: 25.15,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 593.535,
    cy: 348.243,
    r: 25.15,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M644.795 120.704l-6.08-6.113a3.228 3.228 0 0 0-4.585-.031l-38.171 37.852-16.14-16.268a3.218 3.218 0 0 0-4.553-.032l-6.145 6.08a3.257 3.257 0 0 0-.032 4.585l24.514 24.705a3.257 3.257 0 0 0 4.584.031l46.576-46.225a3.229 3.229 0 0 0 .032-4.584zM644.795 303.459l-6.08-6.113a3.228 3.228 0 0 0-4.585-.031l-38.171 37.852-16.14-16.268a3.218 3.218 0 0 0-4.553-.032l-6.145 6.081a3.257 3.257 0 0 0-.032 4.584l24.514 24.705a3.257 3.257 0 0 0 4.584.032l46.576-46.226a3.229 3.229 0 0 0 .032-4.584z",
    fill: primaryColor
  }), _react.default.createElement("ellipse", {
    cx: 809.234,
    cy: 555.5,
    rx: 154,
    ry: 24,
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 834.234,
    cy: 546.5,
    rx: 154,
    ry: 24,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M1015.731 270.118q-.667-.76-1.372-1.479c3.61-4.095 7.345-8.295 7.312-13.558-.04-6.396-5.715-11.303-7.835-17.35-2.884-8.229 1.119-17.044 2.765-25.597a48.005 48.005 0 0 0-10.41-39.53c-1.668-1.97-3.603-3.875-6.084-4.657-3.775-1.19-7.79.463-11.724.949-12.983 1.603-24.795-9.584-37.84-8.582a7.036 7.036 0 0 0-2.512.562c-1.688.807-2.603 2.588-3.646 4.124-4.052 5.962-10.857 8.925-17.627 11.988a9.213 9.213 0 0 0-2.405 1.103c-2.034.946-4.035 1.933-5.924 3.051-12.783 7.566-10.929 18.151-3.392 24.69-1.473 7.34-8.976 13.803-7.684 21.35 1.014 5.916 7.174 9.942 8.361 15.827.69 3.417-.396 6.674-1.904 9.907-14.303 3.31-30.462 9.406-31.723 20.164-2.194 18.716-8.797 70.406-8.797 70.406s-7.65 41.415 21.42 21.837l-.374 1.102a240.92 240.92 0 0 0-10.669 48.817c-.295 2.47-.886 4.415-1.962 5.05-.39.23.381.596 2.06 1.052-.19.697-.394 1.39-.576 2.088a198.39 198.39 0 0 0-6.097 36.973 260.048 260.048 0 0 1-4.567 32.928c-6.885 34.638 0 79.065 0 79.065l15.024 70.737 2.57 12.094a17.969 17.969 0 0 0 6.09 4.394 94.292 94.292 0 0 1 2.088 13.166c.04.493.074.993.105 1.493a6.282 6.282 0 0 0-4.458 2.784c-5.354 7.53.765 13.554-19.889 28.614-5.336 3.89-7.91 7.428-8.562 10.433-.703 3.235.823 5.852 3.547 7.624l.006.003a12.917 12.917 0 0 0 1.445.808l.023.011q.379.181.777.345l.003.001q.4.164.816.309l.049.016q.391.135.797.254l.059.018q.421.122.857.226c.024.006.05.01.074.017q.4.093.81.172l.106.02q.438.082.886.146l.098.013q.401.055.81.096l.154.015q.447.042.9.067l.117.004q.401.02.807.024l.19.003c.302.001.605-.002.909-.013l.12-.005q.403-.016.808-.047l.215-.016c.303-.025.606-.055.91-.093l.108-.014q.407-.053.814-.12l.227-.038c.302-.053.603-.11.903-.175l.086-.02a22.14 22.14 0 0 0 1.05-.26c.297-.08.593-.166.887-.26l.049-.016c.279-.09.556-.188.83-.29q.112-.04.223-.083c.29-.11.577-.226.861-.35 13.77-6.024 42.074-21.837 42.074-21.837v-.24l-.002-.14v-.125l-.002-.22-.002-.196-.003-.243-.003-.23-.004-.325-.004-.246-.006-.368-.013-.657c-.14-6.58-.79-21.696-3.786-21.106-1.02.2-1.714 1.635-2.43 3.287a84.615 84.615 0 0 1-.354-.674c-2.916-5.623-7.133-15.274-7.545-24.706a44.207 44.207 0 0 0 6.504-5.768s-1.537-6.476-2.845-13.306c-1.133-5.918-2.097-12.108-1.745-14.555.765-5.271-9.18-45.933-9.18-45.933s1.026-8.946 3.084-21.378c4-24.164 11.88-61.505 23.637-72.062.276-.241.543-.475.819-.686 0 0 8.414 1.506 15.3 48.945l1.996 21.13a122.618 122.618 0 0 0 2.968 17.364 91.451 91.451 0 0 1 1.92 27.77c-.872 12.455-1.247 27.116-1.408 37.41-.122 7.756-.122 13.042-.122 13.042a28.878 28.878 0 0 0 4.59 3.171v6.91a5.749 5.749 0 0 1-1.61 3.926l-.027.029a10.665 10.665 0 0 0-2.31 4.249c-1.335 2.404-2.465 6.308-2.938 12.588-1.53 20.33-2.295 18.072-2.295 18.072a26.81 26.81 0 0 0-1.734 6.856c-.044.44-.071.883-.08 1.326v.209q-.002.305.01.608.007.149.017.297.014.225.037.448.022.202.05.403c.014.095.028.19.044.285q.047.27.109.535c.019.079.04.157.06.235.049.184.102.366.163.544.02.056.042.11.063.166q.09.244.199.479c.021.047.041.095.064.142a6.146 6.146 0 0 0 .386.671 5.67 5.67 0 0 0 .366.496c.03.037.063.073.095.109a5.463 5.463 0 0 0 .461.473l.054.044a5.632 5.632 0 0 0 .528.41c.03.019.056.04.085.059a6.119 6.119 0 0 0 .63.36l.13.063a6.956 6.956 0 0 0 .718.292l.128.041a8.285 8.285 0 0 0 .851.23l.03.005c.299.061.615.108.945.144.045.005.09.012.135.016a12.883 12.883 0 0 0 1.23.058c.364.001.742-.01 1.138-.036l.188-.015c.421-.032.856-.076 1.315-.14 16.064-2.26 23.714-3.765 22.95-12.801-.462-5.446-1.757-13.355-2.713-18.779a28.237 28.237 0 0 0-2.646-7.919q.06-.635.11-1.306c.276-3.735.26-8.178-.872-11.152l.353-6.593a21.02 21.02 0 0 0 10.357-6.208s.115-4.887.451-11.363c.505-10.007 1.515-23.818 3.374-29.3 3.06-9.035 0-40.661 0-40.661s-11.475-54.217-.765-77.56c9.448-20.59 9.365-41.189.278-61.265a3.098 3.098 0 0 0 .487-.48s-2.295-1.507-1.53-18.826c.584-13.218-3.286-26.864-5.152-32.59a79.727 79.727 0 0 0 8.977 3.223c17.594 5.271 19.124-14.307 19.124-14.307l3.825-29.367 4.536-43.774v-.002c1.244-3.434 2.91-12.012-5.91-22.062zm-77.766-29.015c-.022.484-.055.969-.104 1.45a19.488 19.488 0 0 1-.98 4.573 30.382 30.382 0 0 0 .949-6.108c.044.029.09.056.135.085zm46.246 106.901c.272.497.53.981.778 1.457l-1.932-.986a43.26 43.26 0 0 1 3.45-10.26 72.65 72.65 0 0 0 4.675-11.82 118.024 118.024 0 0 0 .679 14.079c1.53 12.048-7.65 7.53-7.65 7.53z",
    transform: "translate(-105.883 -160.25)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M813.46 24.037c-2.446 1.668-5.002 3.595-5.872 6.424-1.404 4.563 2.119 9.144 2.467 13.905.634 8.657-9.156 15.812-7.713 24.372.99 5.867 7.003 9.86 8.162 15.695 1.69 8.512-7.536 16.017-6.81 24.664.386 4.606 3.59 8.518 7.225 11.372a35.168 35.168 0 0 0 17.645 7.24c-.428-7.403-5.92-14.14-4.978-21.496.647-5.044 4.195-9.17 6.249-13.822 3.605-8.169 2.451-17.624.289-26.287s-5.284-17.227-5.442-26.154c-.094-5.374 2.427-13.272.578-18.371-2.249-6.199-7.611-.399-11.8 2.458z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M813.46 24.243c-2.446 1.668-5.002 3.595-5.872 6.424-1.404 4.563 2.119 9.144 2.467 13.905.634 8.657-9.156 15.812-7.713 24.372.99 5.867 7.003 9.86 8.162 15.695 1.69 8.512-7.536 16.017-6.81 24.664.386 4.606 3.59 8.518 7.225 11.372a35.168 35.168 0 0 0 17.645 7.24c-.428-7.403-5.92-14.14-4.978-21.496.647-5.044 4.195-9.17 6.249-13.822 3.605-8.169 2.451-17.624.289-26.287s-5.285-17.227-5.442-26.154c-.094-5.374 2.427-13.272.578-18.371-2.249-6.199-7.611-.399-11.8 2.458z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M820.616 523.862l-6.72 6.721s-23.897 12.695-20.91-4.48a61.803 61.803 0 0 0 .515-15.444 95.985 95.985 0 0 0-4.25-21.148l22.404-4.481c-3.726 11.71 2.412 26.45 6.243 33.956 1.546 3.024 2.718 4.876 2.718 4.876zM871.502 510.278a68.315 68.315 0 0 1-.852 6.863s-18.67 12.696-20.163-1.493c-.97-9.245 1.225-13.42 2.883-15.205l.026-.028a5.749 5.749 0 0 0 1.572-3.894v-16.718l16.429 5.227-.747 14.189c1.105 2.95 1.12 7.355.852 11.06z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M820.616 523.862l-6.72 6.721s-23.897 12.695-20.91-4.48a61.803 61.803 0 0 0 .515-15.444c5.235-.769 11.433 4.989 11.433 4.989 8.752 12.351 11.112 7.677 12.964 3.338 1.546 3.024 2.718 4.876 2.718 4.876z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M804.934 517.141s-10.455-9.708-15.682-2.24.747 13.442-19.416 28.377 0 24.644 13.442 18.67 41.072-21.657 41.072-21.657 0-24.643-3.734-23.896-2.987 18.669-15.682.746z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M871.502 510.278a68.315 68.315 0 0 1-.852 6.863s-18.67 12.696-20.163-1.493c-.97-9.245 1.225-13.42 2.883-15.205a4.46 4.46 0 0 1 4.585-.478c2.987-1.329 6.273.89 8.991 3.757a26.4 26.4 0 0 1 4.556 6.556z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M857.955 501.46s-8.214-4.482-9.708 15.681-2.24 17.923-2.24 17.923-7.468 17.923 8.214 15.682 23.15-3.734 22.403-12.695c-.45-5.401-1.714-13.244-2.647-18.623a27.383 27.383 0 0 0-7.028-14.216c-2.725-2.868-6.007-5.08-8.994-3.753zM884.839 405.872s2.987 31.364 0 40.326c-1.815 5.436-2.8 19.132-3.293 29.057-.329 6.422-.44 11.269-.44 11.269-14.19 14.935-30.619 0-30.619 0s0-5.243.12-12.935c.157-10.208.523-24.748 1.374-37.1a92.094 92.094 0 0 0-1.875-27.54 123.369 123.369 0 0 1-2.897-17.221l-1.949-20.954c-6.721-47.047-14.936-48.54-14.936-48.54-.268.208-.53.44-.799.679-11.478 10.47-19.17 47.502-23.075 71.466-2.009 12.33-3.01 21.201-3.01 21.201s9.709 40.326 8.962 45.553c-.344 2.427.597 8.566 1.703 14.435a354.704 354.704 0 0 0 2.778 13.196c-18.67 20.163-31.365 4.48-31.365 4.48l-2.51-11.993-14.666-70.152s-6.72-44.06 0-78.411a261.77 261.77 0 0 0 4.458-32.656 199.617 199.617 0 0 1 5.952-36.667q1.367-5.332 3.032-10.582s28.042-4.876 54.447-4.876c19.805 0 38.683 2.74 44.127 12.344q1.882 3.316 3.42 6.646c9.455 20.32 9.739 41.192.314 62.057-10.455 23.15.747 76.918.747 76.918z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M822.11 134.793s-39.58-40.326-9.708-37.339c6.773.68 11.358-.53 14.398-2.8 3.465-2.584 4.92-6.542 5.324-10.672.822-8.237-2.546-17.146-2.546-17.146s40.325-32.111 32.111 8.215a68.747 68.747 0 0 0-1.568 12.464c-.135 8.558 2.68 11.836 6.631 13.18 6.661 2.278 16.564-.91 21.074 6.467 8.215 13.442-65.716 27.63-65.716 27.63z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M822.11 134.793s-39.58-40.326-9.708-37.339c6.773.68 11.358-.53 14.398-2.8 3.465-2.584 4.92-6.542 5.324-10.672.822-8.237-2.546-17.146-2.546-17.146s40.325-32.111 32.111 8.215a68.747 68.747 0 0 0-1.568 12.464c-.135 8.558 2.68 11.836 6.631 13.18 6.661 2.278 16.564-.91 21.074 6.467 8.215 13.442-65.716 27.63-65.716 27.63z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M881.852 55.635a32.111 32.111 0 0 1-64.223 0c0-.598.015-1.195.053-1.785a32.11 32.11 0 0 1 64.17 1.785z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M822.11 134.793s-39.58-40.326-9.708-37.339c6.773.68 11.358-.53 14.398-2.8-5.78 9.588-12.285 26.831 16.966 25.203 26.772-1.486 26.317-12.157 22.986-19.162 6.661 2.278 16.564-.91 21.074 6.467 8.215 13.442-65.716 27.63-65.716 27.63z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M884.839 269.959c-6.796 8.834-93.422-2.748-106.087-6.594q1.367-5.332 3.032-10.582s28.041-4.876 54.447-4.876c19.805 0 38.683 2.74 44.127 12.344q1.882 3.316 3.42 6.646c.478 2.674 1.061 3.062 1.061 3.062z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M830.324 90.733s-50.407 4.107-52.647 23.524c-2.142 18.56-8.588 69.823-8.588 69.823s-7.468 41.073 20.91 21.656l-.365 1.093a242.19 242.19 0 0 0-10.415 48.414c-.288 2.448-.865 4.378-1.916 5.008-3.733 2.24 100.068 17.176 107.536 7.468 0 0-2.24-1.494-1.494-18.67s-5.974-35.098-5.974-35.098-5.974-17.923 2.24-35.098 5.228-22.404 5.228-22.404l28.377-21.656s6.129-10.506-5.075-23.474a38.812 38.812 0 0 0-26.672-13.142l-19.574-1.393s21.45 23.073-18.875 25.314-12.696-31.365-12.696-31.365z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M796.72 131.806s1.493 11.948-1.494 15.682-3.734 20.91 0 31.364",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M829.525 322.913c-11.478 10.47-19.17 47.502-23.075 71.466-5.436-33.358 17.153-88.575 17.153-88.575zM816.882 488.764c-18.669 20.163-31.364 4.48-31.364 4.48l-2.51-11.993c7.058 3.667 18.984 6.512 31.097-5.683a354.726 354.726 0 0 0 2.777 13.196zM881.546 475.255c-.329 6.422-.44 11.269-.44 11.269-14.19 14.935-30.619 0-30.619 0s0-5.243.12-12.935c6.16 3.914 17.235 8.222 30.939 1.666z",
    opacity: 0.1
  }), _react.default.createElement("rect", {
    x: 800.453,
    y: 157.196,
    width: 50.781,
    height: 20.91,
    rx: 3.75,
    fill: "#cdd0db"
  }), _react.default.createElement("rect", {
    x: 800.453,
    y: 157.196,
    width: 50.781,
    height: 20.91,
    rx: 3.75,
    opacity: 0.05
  }), _react.default.createElement("rect", {
    x: 800.453,
    y: 157.943,
    width: 50.781,
    height: 20.91,
    rx: 3.75,
    fill: "#3f3d56"
  }), _react.default.createElement("circle", {
    cx: 840.406,
    cy: 168.024,
    r: 2.24,
    fill: "#9da7c0"
  }), _react.default.createElement("path", {
    d: "M778.841 190.308a14.523 14.523 0 0 1 8.437-8.888 13.24 13.24 0 0 0 7.243-6.503c2.945-6.52 8.173-13.24 21.615-8.76s-3.734 7.468-3.734 7.468 30.618-4.48 18.67 4.48-26.885 14.19-26.885 14.19l-7.354 7.786a10.992 10.992 0 0 1-16.417-.326 9.51 9.51 0 0 1-1.575-9.447z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M778.094 188.814a14.523 14.523 0 0 1 8.437-8.887 13.24 13.24 0 0 0 7.243-6.504c2.946-6.519 8.173-13.24 21.615-8.76s-3.734 7.469-3.734 7.469 30.618-4.481 18.67 4.48-26.884 14.189-26.884 14.189l-7.355 7.787a10.992 10.992 0 0 1-16.416-.326 9.51 9.51 0 0 1-1.576-9.448z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M883.345 204.243l-5.227 12.695-6.691-4.921-18.7-13.748-12.694-8.215c-17.923-13.442 0-15.682 0-15.682-6.721-2.987 0-5.974 0-5.974 23.896-5.228 19.416 14.188 19.416 14.188l15.137 7.849 5.026 2.606z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M884.839 202.75l-5.227 12.694-6.692-4.92-18.699-13.749-12.695-8.214c-17.923-13.442 0-15.683 0-15.683-6.721-2.987 0-5.974 0-5.974 23.897-5.227 19.416 14.189 19.416 14.189l15.137 7.848 5.026 2.607z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M884.839 202.75l-5.227 12.694-6.692-4.92c6.057.216 13.21-2.712 3.16-21.583l5.025 2.607z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M912.47 127.325l1.441 5.875-4.428 43.412-3.734 29.124s-1.494 19.416-18.67 14.189-18.67-10.455-18.67-10.455 24.644 8.215 8.962-20.91c0 0 8.962 4.481 7.468-7.467s0-32.858 0-32.858z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M881.852 55.635a32.116 32.116 0 0 1-25.01 31.32c-1.075-3.107-1.837-6.199-1.053-9.343 1.516-6.1 8.558-10.552 7.774-16.787a4.137 4.137 0 0 0-.709-1.957c-1.576-2.076-4.787-1.045-7.34-.53a13.968 13.968 0 0 1-15.623-9.633 21.825 21.825 0 0 1-22.21 5.145 32.11 32.11 0 0 1 64.17 1.785z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M840.64 47.213a13.956 13.956 0 0 0 15.616 9.63c2.557-.51 5.767-1.542 7.342.535a4.035 4.035 0 0 1 .709 1.95c.79 6.24-6.253 10.688-7.77 16.791-1.562 6.286 3.017 12.357 3.992 18.76.533 3.502-.03 7.07.01 10.613s.835 7.348 3.462 9.726 7.48 2.402 9.24-.673c8.403 4.44 5.047 18.203 11.428 25.247 3.52 3.885 9.309 4.819 14.527 4.321a6.127 6.127 0 0 0 3.414-1.102 5.934 5.934 0 0 0 1.67-3.14 25.47 25.47 0 0 0-.65-15.105c-.838-2.32-2.038-4.665-1.727-7.112a10.529 10.529 0 0 1 2.59-5.075c4.012-4.974 9.487-9.783 9.447-16.173-.04-6.343-5.579-11.21-7.648-17.206-2.816-8.161 1.092-16.904 2.699-25.386a48.157 48.157 0 0 0-10.163-39.202c-1.628-1.954-3.517-3.844-5.94-4.62-3.685-1.18-7.604.46-11.444.942-12.674 1.59-24.205-9.505-36.94-8.512a6.779 6.779 0 0 0-2.452.558c-1.648.8-2.541 2.567-3.56 4.09-5.621 8.404-16.673 10.799-25.338 16.009-25.306 15.216 8.134 42.76 27.487 24.134z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M783.278 558.96c-8.727 3.88-20.283 1.146-21.801-5.334-1.83 8.556 11.831 12.753 21.8 8.322 13.443-5.974 41.073-21.657 41.073-21.657s0-1.16-.038-2.965c-.805.456-27.793 15.75-41.034 21.635zM876.586 537.621c-.861 6.718-8.313 8.13-22.365 10.138-7.146 1.021-9.478-2.147-9.908-5.896-.467 4.802.897 10.17 9.908 8.883 15.682-2.24 23.15-3.734 22.403-12.695-.011-.14-.026-.287-.038-.43z",
    fill: "#fff",
    opacity: 0.3
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M902.182 140.823c-5.218.497-11.007-.437-14.526-4.322-6.381-7.043-3.026-20.806-11.429-25.246-1.76 3.075-6.614 3.05-9.24.673s-3.422-6.184-3.462-9.727.524-7.11-.01-10.613c-.974-6.403-5.553-12.474-3.991-18.76 1.517-6.103 8.56-10.551 7.77-16.791a4.035 4.035 0 0 0-.709-1.95c-1.576-2.076-4.786-1.045-7.342-.535a13.956 13.956 0 0 1-15.616-9.63c-17.299 16.65-45.847-3.59-33.64-18.942C790.94 40.46 822.19 64.666 840.64 46.91a13.956 13.956 0 0 0 15.616 9.63c2.556-.511 5.766-1.542 7.342.534a4.035 4.035 0 0 1 .708 1.95c.79 6.24-6.253 10.688-7.77 16.792-1.562 6.285 3.018 12.356 3.993 18.759.533 3.502-.031 7.07.01 10.613s.835 7.349 3.461 9.727 7.48 2.402 9.24-.673c8.403 4.44 5.048 18.203 11.429 25.246 3.519 3.885 9.308 4.82 14.526 4.322a6.128 6.128 0 0 0 3.415-1.102 4.866 4.866 0 0 0 1.378-2.187 10.468 10.468 0 0 1-1.806.302zM841.479 3.78c.256-.384.505-.783.76-1.178-.062.026-.127.045-.187.074-1.648.8-2.542 2.567-3.56 4.09q-.526.786-1.113 1.504a21.346 21.346 0 0 0 4.1-4.49z"
  })), _react.default.createElement("path", {
    d: "M800.453 212.685s-1.932 6.72 10.763 9.708-10.763-9.708-10.763-9.708zM794.895 232.599s-6.48 4.73 9.152 12.944-9.152-12.944-9.152-12.944zM780.35 311.508s17.594-4.979 19.998-12.446-19.999 12.446-19.999 12.446zM780.35 406.1s7.58 3.733 12.377 3.235-12.378-3.236-12.378-3.236zM783.009 416.554s3.427 1.743 9.718 1.992-9.718-1.992-9.718-1.992z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M911.722 445.2a15.529 15.529 0 1 0 2.068-29.782l.39 7.993-3.782-6.85a15.47 15.47 0 0 0-7.972 8.747 15.228 15.228 0 0 0-.893 4.2 15.526 15.526 0 0 0 10.19 15.692z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M930.433 537.902c-1.334-6.798 4.45-12.824 10.163-16.741s12.39-7.766 14.34-14.413c2.8-9.553-5.545-18.302-12.04-25.847a93.49 93.49 0 0 1-12.329-18.323 25.222 25.222 0 0 1-2.949-8.331c-.512-4.235.849-8.449 2.22-12.488q6.848-20.184 14.645-40.03",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M912.362 443.142a15.529 15.529 0 1 0 2.068-29.782l.389 7.993-3.782-6.85a15.47 15.47 0 0 0-7.971 8.747 15.228 15.228 0 0 0-.893 4.2 15.526 15.526 0 0 0 10.189 15.692z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M928.535 398.969a15.51 15.51 0 0 1 11.177-9.847l1.279 7.598 2.37-7.98a15.527 15.527 0 1 1-14.826 10.229z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M929.388 396.225a15.51 15.51 0 0 1 11.177-9.847l1.279 7.598 2.37-7.98a15.527 15.527 0 1 1-14.826 10.23z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M940.17 481.055a15.527 15.527 0 0 0 13.743-27.624l-1.821 6.133-1.292-7.688a.272.272 0 0 0-.04-.015 15.528 15.528 0 1 0-10.59 29.194z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M940.909 478.276a15.527 15.527 0 0 0 13.743-27.624l-1.822 6.133-1.291-7.688a.27.27 0 0 0-.04-.015 15.528 15.528 0 1 0-10.59 29.194z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M924.004 506.843a15.52 15.52 0 1 0 2.992-12.16l6.919 10.414-9.454-5.527a15.383 15.383 0 0 0-.457 7.273z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M924.643 504.785a15.52 15.52 0 1 0 2.993-12.16l6.918 10.414-9.453-5.527a15.383 15.383 0 0 0-.458 7.273z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M908.874 547.109s13.703-5.37 17.832-8.311 21.079-6.452 22.104-1.736 20.593 23.457 5.122 23.582-35.947 2.538-40.069.027-4.99-13.562-4.99-13.562z",
    fill: "#656380"
  }), _react.default.createElement("path", {
    d: "M954.208 559.002c-15.47.125-35.947 2.538-40.069.027-3.139-1.912-4.39-8.773-4.808-11.938l-.457.018s.868 11.051 4.99 13.562 24.597.097 40.068-.027c4.466-.036 6.008-1.625 5.924-3.979-.62 1.422-2.324 2.31-5.648 2.337z",
    opacity: 0.2
  }));
};

UndrawAcceptRequest.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawAcceptRequest;
exports.default = _default;