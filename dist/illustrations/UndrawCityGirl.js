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

var UndrawCityGirl = function UndrawCityGirl(_props) {
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
    viewBox: "0 0 1123 672.431",
    style: style
  }, props), _react.default.createElement("path", {
    d: "M923.621 77.004C794.582-22.46 615.059-26.525 484.089 70.387c-69.235 51.231-122.91 129.61-113.144 248.95 3.452 42.213 13.058 76.843 27.073 105.192 56.765 114.923 289.912 110.498 302.86 110.48q12.583-.012 25.166.564a551.942 551.942 0 0 1 87.406 11.05c41.054 8.557 93.318 12.856 140.015-3.35a162.301 162.301 0 0 0 23.058-10.026c25.662-13.637 54.389-26.67 71.183-59.016 12.62-24.276 21.816-54.716 26.241-92.629 16.106-138.074-64.373-238.345-150.326-304.598z",
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 726.608,
    cy: 537.225,
    rx: 368.989,
    ry: 34.637,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 708.583,
    cy: 537.225,
    rx: 343.188,
    ry: 16.258,
    opacity: 0.1
  }), _react.default.createElement("path", {
    fill: "#575a89",
    d: "M898.439 73.342v38.859h-50.59v423.787h105.58V73.342h-54.99zM619.825 334.359v-66.72h-64.521v66.72h-24.195v202.362h112.178V334.359h-23.462z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M543.573 442.872h87.25v94.582h-87.25z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M543.573 442.872h13.931v94.582h-13.931z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M810.456 52.079v22.729H681.413V52.079h-38.126v485.375h204.562V52.079h-37.393z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M810.456 52.079h28.595v22.729h-28.595zM643.287 52.079h28.595v485.375h-28.595z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M497.382 190.653v-18.33h-19.063v18.33h-34.461v346.801h87.251V190.653h-33.727z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M478.319 172.323h10.265v18.33h-10.265zM443.858 190.653h10.265v346.801h-10.265zM810.456 239.044h28.595v298.41h-28.595zM504.714 190.653h26.395v63.788h-26.395z"
  }), _react.default.createElement("path", {
    fill: "#ff6584",
    d: "M674.815 113.668h41.059v17.597h-41.059zM762.065 294.767h41.059v17.597h-41.059zM674.815 421.609h41.059v17.597h-41.059zM467.321 269.838h41.059v17.597h-41.059zM567.035 453.137h41.059v17.597h-41.059z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M552.371 349.756h70.387v29.328h-70.387zM860.313 145.928H930.7v29.328h-70.387zM860.313 208.25H930.7v29.328h-70.387zM860.313 270.571H930.7v29.328h-70.387zM860.313 332.893H930.7v29.328h-70.387zM860.313 395.214H930.7v29.328h-70.387zM860.313 457.536H930.7v29.328h-70.387z"
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M977.624 278.636v-79.918H926.3v79.918h-18.33v258.818h87.251V278.636h-17.597z"
  }), _react.default.createElement("path", {
    opacity: 0.1,
    d: "M926.3 198.718h16.13v79.918H926.3zM907.97 278.636h16.13v258.818h-16.13zM951.962 408.412h43.258v25.662h-43.258z"
  }), _react.default.createElement("path", {
    fill: "#ff6584",
    d: "M953.429 370.286h41.059v17.597h-41.059z"
  }), _react.default.createElement("path", {
    d: "M1123 388.05c0 65.322-38.832 88.13-86.735 88.13s-86.734-22.808-86.734-88.13 86.734-148.42 86.734-148.42S1123 322.73 1123 388.05z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M1033.106 466.187l.888-54.668 36.968-67.632-36.829 59.056.4-24.581 25.478-48.931-25.373 42.427.719-44.21 27.282-38.956-27.17 32.004.449-81.066-2.82 107.316.232-4.427-27.739-42.459 27.294 50.958-2.585 49.375-.077-1.311-31.977-44.682 31.881 49.312-.324 6.175-.058.092.027.507-6.557 125.269h8.761l1.051-64.704 31.803-49.19-31.724 44.326z"
  }), _react.default.createElement("path", {
    d: "M487.327 388.757c0 65.322-38.832 88.13-86.734 88.13s-86.735-22.808-86.735-88.13 86.735-148.42 86.735-148.42 86.734 83.1 86.734 148.42z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    fill: "#3f3d56",
    d: "M397.433 466.894l.888-54.668 36.969-67.632-36.829 59.056.399-24.581 25.478-48.931-25.372 42.426v.001l.718-44.21 27.283-38.956-27.17 32.004.449-81.066-2.821 107.316.232-4.427-27.739-42.459 27.294 50.957-2.584 49.375-.077-1.31-31.978-44.682 31.881 49.312-.323 6.174-.058.093.026.507-6.557 125.268h8.761l1.051-64.703 31.803-49.19-31.724 44.326z"
  }), _react.default.createElement("ellipse", {
    cx: 207,
    cy: 644.431,
    rx: 207,
    ry: 28,
    fill: "#3f3d56"
  }), _react.default.createElement("ellipse", {
    cx: 207,
    cy: 644.431,
    rx: 162,
    ry: 21.913,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 177.73,
    cy: 201.804,
    r: 43.973,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 189.739,
    cy: 216.554,
    r: 24.611,
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M175.974 229.485s6.257 15.017-3.338 19.189-5.84 28.782-5.84 28.782l37.543-7.925s0-10.429-7.508-15.017 10.01-25.029 10.01-25.029zM163.877 340.444l1.251 13.766 56.314 9.594-5.423-25.445-52.142 2.085zM163.042 450.986l2.086 58.4s-10.011 23.776-2.086 67.576 2.086 55.897 2.086 55.897l28.365 3.754-1.668-16.269-6.674-14.182 2.92-80.925s12.93-30.034 13.348-35.874-.834-48.388-.834-48.388z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M163.042 450.986l2.086 58.4s-10.011 23.776-2.086 67.576 2.086 55.897 2.086 55.897l28.365 3.754-1.668-16.269-6.674-14.182 2.92-80.925s12.93-30.034 13.348-35.874-.834-48.388-.834-48.388z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M171.802 612.836s0-5.423-2.503-5.84-5.84-1.669-5.84 0-.417 13.348-1.251 15.017-2.503 7.926-1.251 10.428c0 0-3.755 9.595-.835 10.429s19.606.834 19.606.834l.834-4.588s37.125 11.68 45.051 1.251c0 0 3.754-7.508-2.92-9.177 0 0-15.017.417-20.44-5.84s-15.851-20.857-15.851-20.857-8.343 1.251-7.508 6.674v1.669z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M185.985 452.237s4.171 29.2 18.771 50.474c0 0 7.509 17.52 6.257 22.943s-1.251 35.04 11.263 61.32l11.68 38.376 5.84 13.766 10.011 4.171 16.268 1.251-9.177-19.188-4.588-10.011s-8.343-17.103-8.343-32.12-5.423-50.474-5.423-50.474 0-80.09-8.76-85.096-43.8 4.588-43.8 4.588z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M167.214 350.038l-4.172-.834v18.771s-1.668 14.6-5.423 17.52-18.354 60.485-13.348 63.822 72.165 20.857 88.433 2.92l-11.262-54.645s.834-37.542 0-37.542-54.228-10.012-54.228-10.012z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M206.842 265.776s-20.857-14.182-41.714 4.172c0 0-7.509 30.868-8.76 38.377s-9.177 38.376-3.337 41.296 5.84-7.091 20.857-5.005 47.137 1.251 47.137-1.252-7.509-22.525-4.589-25.862 7.926-19.189 2.92-27.114-12.514-24.612-12.514-24.612z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M179.728 350.038l41.714 19.606s16.685 21.274 20.44 9.177-12.515-20.857-12.515-20.857l-27.948-15.851-21.691 7.091z",
    fill: "#ffb9b9"
  }), _react.default.createElement("path", {
    d: "M182.648 269.948s-23.777 73.416-2.086 85.096 25.028-10.428 25.028-10.428-14.6-9.177-10.011-20.44 8.76-54.228 8.76-54.228z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M181.396 267.445s-23.777 73.416-2.085 85.096 25.028-10.428 25.028-10.428-14.6-9.177-10.011-20.44 8.76-54.228 8.76-54.228z",
    fill: primaryColor
  }), _react.default.createElement("path", {
    d: "M238.725 621.411s-.418-5.68-3.072-5.923-6.245-1.297-6.116.45.593 14.014-.152 15.826-2.01 8.494-.505 11.019c0 0-3.192 10.339-.07 10.987s20.6-.64 20.6-.64l.52-4.87s39.785 9.367 47.281-2.168c0 0 3.353-8.154-3.766-9.386 0 0-15.697 1.596-21.86-4.539s-18.212-20.621-18.212-20.621-8.641 1.955-7.349 7.57l.129 1.748z",
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 189.687,
    cy: 200.647,
    rx: 29.701,
    ry: 15.815,
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 165,
    cy: 220.705,
    rx: 4.243,
    ry: 6.557,
    fill: "#ffb9b9"
  }), _react.default.createElement("circle", {
    cx: 150.728,
    cy: 157.83,
    r: 20.83,
    fill: "#2f2e41"
  }));
};

UndrawCityGirl.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawCityGirl;
exports.default = _default;