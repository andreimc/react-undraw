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

var UndrawDownload = function UndrawDownload(_props) {
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
    viewBox: "0 0 977.478 801.936",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 323.007,
    y1: 814.329,
    x2: 323.007,
    y2: 813.88,
    gradientTransform: "matrix(-1 0 0 1 651 0)",
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
  }))), _react.default.createElement("path", {
    d: "M625.409 79.1v610.02a27.405 27.405 0 0 1-27.41 27.4h-247.66a27.405 27.405 0 0 1-27.41-27.4V79.1a27.408 27.408 0 0 1 27.41-27.41h37.06v4.76a22.576 22.576 0 0 0 22.57 22.57h125.95a22.57 22.57 0 0 0 22.57-22.57v-4.76h39.51a27.408 27.408 0 0 1 27.41 27.41z",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M662.72 174.526h2.455a2.292 2.292 0 0 1 2.292 2.291v80.437a2.292 2.292 0 0 1-2.292 2.292h-2.454M317.616 135.909h-1.774a1.503 1.503 0 0 1-1.504-1.503v-24.983a1.503 1.503 0 0 1 1.504-1.503h1.774M317.337 207.882h-1.514a1.695 1.695 0 0 1-1.695-1.695v-45.33a1.695 1.695 0 0 1 1.695-1.694h1.793M317.337 274.067h-1.491a1.613 1.613 0 0 1-1.613-1.613V226.54a1.613 1.613 0 0 1 1.613-1.612h1.491",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 317.616,
    y: 15.423,
    width: 345.104,
    height: 701.374,
    rx: 35.694,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 454.878,
    y: 39.368,
    width: 48.192,
    height: 9.786,
    rx: 2.542,
    fill: "#f2f2f2"
  }), _react.default.createElement("circle", {
    cx: 515.908,
    cy: 44.261,
    r: 5.551,
    fill: "#f2f2f2"
  }), _react.default.createElement("rect", {
    x: 456.878,
    y: 36.368,
    width: 48.192,
    height: 9.786,
    rx: 2.542,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 517.908,
    cy: 41.261,
    r: 5.551,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M641.409 61.1v610.02a27.405 27.405 0 0 1-27.41 27.4h-247.66a27.405 27.405 0 0 1-27.41-27.4V61.1a27.408 27.408 0 0 1 27.41-27.41h37.06v4.76a22.576 22.576 0 0 0 22.57 22.57h125.95a22.57 22.57 0 0 0 22.57-22.57v-4.76h39.51a27.408 27.408 0 0 1 27.41 27.41z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M347.579 91.99h31v4h-31zM347.579 98.99h31v4h-31zM347.579 105.99h31v4h-31zM627.244 101.99h-.918l-.345-.288a7.62 7.62 0 0 0 1.78-4.893 7.434 7.434 0 1 0-7.405 7.484 7.693 7.693 0 0 0 4.879-1.785l.344.288v.921l5.74 5.757 1.722-1.727zm-6.888 0a5.18 5.18 0 1 1 5.166-5.18 5.152 5.152 0 0 1-5.166 5.18z"
  }), _react.default.createElement("path", {
    d: "M795.154 168.99a38.95 38.95 0 0 1 38.897-36.915c1.183 0 2.352.061 3.51.165a51.75 51.75 0 0 1 89.456-.042 39.356 39.356 0 0 1 2.953-.123 38.95 38.95 0 0 1 38.896 36.914",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M803.267 165.993a38.95 38.95 0 0 1 38.896-36.914c1.184 0 2.353.061 3.51.165a51.75 51.75 0 0 1 89.456-.043 39.36 39.36 0 0 1 2.953-.123 38.95 38.95 0 0 1 38.897 36.915",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M691.154 389.99a38.95 38.95 0 0 1 38.897-36.915c1.183 0 2.352.061 3.51.165a51.75 51.75 0 0 1 89.456-.042 39.356 39.356 0 0 1 2.953-.123 38.95 38.95 0 0 1 38.896 36.914",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M699.267 386.993a38.95 38.95 0 0 1 38.896-36.915c1.184 0 2.353.062 3.51.166a51.75 51.75 0 0 1 89.456-.043 39.36 39.36 0 0 1 2.953-.123 38.95 38.95 0 0 1 38.897 36.915",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M40.154 65.99a38.95 38.95 0 0 1 38.897-36.915c1.183 0 2.352.061 3.51.165a51.75 51.75 0 0 1 89.456-.042 39.356 39.356 0 0 1 2.953-.123 38.95 38.95 0 0 1 38.896 36.914",
    fill: "#f2f2f2"
  }), _react.default.createElement("path", {
    d: "M48.267 62.993a38.95 38.95 0 0 1 38.896-36.914c1.184 0 2.353.061 3.51.165a51.75 51.75 0 0 1 89.456-.043 39.36 39.36 0 0 1 2.953-.122 38.95 38.95 0 0 1 38.897 36.914",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("rect", {
    x: 349.079,
    y: 194,
    width: 238,
    height: 132,
    rx: 12.547,
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 362.079,
    y: 169,
    width: 238,
    height: 132,
    rx: 12.547,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M443.547 264.52l20.992 21.633a4.771 4.771 0 0 0 3.509 1.41h.062a4.771 4.771 0 0 0 3.51-1.41l20.99-21.634a4.632 4.632 0 0 0 0-6.767 5.181 5.181 0 0 0-7.08 0l-12.438 13.002v-33.523a5.018 5.018 0 0 0-10.026 0v33.523l-12.438-13.002a5.181 5.181 0 0 0-7.08 0 4.632 4.632 0 0 0 0 6.767z",
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 486.59,
    y: 468.782,
    width: 238,
    height: 132,
    rx: 12.547,
    transform: "rotate(-180 549.834 510.391)",
    fill: primaryColor
  }), _react.default.createElement("rect", {
    x: 473.59,
    y: 443.782,
    width: 238,
    height: 132,
    rx: 12.547,
    transform: "rotate(-180 536.834 485.391)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M518.61 490.52a4.632 4.632 0 0 0 0-6.768 5.181 5.181 0 0 0-7.08 0l-12.438 13.002v-33.523a5.018 5.018 0 0 0-10.026 0v33.523l-12.438-13.002a5.181 5.181 0 0 0-7.08 0 4.632 4.632 0 0 0 0 6.767l20.99 21.634a4.771 4.771 0 0 0 3.51 1.41h.062a4.771 4.771 0 0 0 3.51-1.41l20.99-21.634z",
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M328.42 813.88v.002s-.315.174-.853.447q.434-.225.852-.449z",
    transform: "translate(-111.51 -48.782)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M97.643 660.302c-7.503 21.57 1.252 56.584 5.317 72.213 4.061 15.633 5.313 34.39 5.313 34.39 15.943 2.5 27.511-.628 27.511-.628l-6.564-32.196c4.689-19.07 0-70.027 0-70.027s10.625-19.695 11.563-49.705c.924-29.542 8.206-39.089 8.436-39.384l.004-.005c15.006 7.817 34.076 91.598 34.076 91.598-1.561 20.318.314 51.58 6.565 68.46a84.76 84.76 0 0 1 4.69 33.448c2.184 1.848 5.223 2.162 8.505 1.632 8.928-1.444 19.629-9.134 19.629-9.134s-3.437-91.283-5.941-94.72c-2.5-3.438 0-23.132 0-23.132l-4.06-31.886s.623-54.085-5.318-63.463c-5.126-8.098-6.307-22.33-6.537-26.067a81.47 81.47 0 0 1-.047-.919l-9.045-10.836s-87.532-6.565-94.097 0c-1.613 1.613-2.607 5.275-3.198 9.889-1.805 14.18.263 37.311.263 37.311s2.626 17.195 6.377 34.7a76.008 76.008 0 0 1 0 31.886 95.362 95.362 0 0 1-3.442 36.575z",
    fill: "#575a89"
  }), _react.default.createElement("path", {
    d: "M103.115 797.384c3.906 5.158 26.883 2.969 30.794 1.36 2.387-.985 2.208-5.477 1.561-10.105-.408-2.945-1.008-5.946-1.252-8.136-.623-5.627 1.876-17.04 1.876-17.04s-5.158 5.472-6.406 0c-.547-2.392-2.47-3.618-4.462-4.24a11.678 11.678 0 0 0-8.115.508c-4.06 1.76-10.836 5.517-9.62 10.597 1.72 7.18-4.376 17.364-4.376 17.364a7.814 7.814 0 0 0-1.14 1.965 7.51 7.51 0 0 0 1.14 7.727z",
    fill: "#cbceda"
  }), _react.default.createElement("path", {
    d: "M103.115 797.384c3.906 5.158 26.883 2.969 30.794 1.36 2.387-.985 2.208-5.477 1.561-10.105-2.466 1.155-6.663 2.114-13.658 1.467a39.31 39.31 0 0 0-4.913-.151 114.957 114.957 0 0 1-14.923-.298 7.51 7.51 0 0 0 1.14 7.727zM183.3 666.558c-1.562 20.318.313 51.58 6.564 68.46a84.76 84.76 0 0 1 4.69 33.448c2.184 1.848 5.223 2.162 8.505 1.632-1.885-13.186-9.922-69.994-15.07-114.874-5.862-51.112-33.293-86.28-33.293-86.28l-5.473 6.016c15.006 7.817 34.076 91.598 34.076 91.598z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M112.493 338.004l3.817 18.757 18.691 31.417 23.057-9.847s31.337-32.824 11.643-37.513a17.33 17.33 0 0 1-6.541-2.912c-3.864-2.917-5.084-7.156-5.102-11.306a34.64 34.64 0 0 1 3.202-13.448l-40.326-12.66a64.4 64.4 0 0 1 2.893 16.336c.31 10.982-3.77 16.393-7.118 18.972a12.112 12.112 0 0 1-4.216 2.204z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M120.934 300.491a64.4 64.4 0 0 1 2.893 16.337 30.994 30.994 0 0 0 2.345 2.495 31.911 31.911 0 0 0 31.886 7.277 34.64 34.64 0 0 1 3.202-13.448z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M116.31 295.333a31.885 31.885 0 1 0 31.887-31.886 31.768 31.768 0 0 0-31.887 31.886z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M112.493 338.004l3.817 18.757 18.691 31.417 23.057-9.847s31.337-32.824 11.643-37.513a17.33 17.33 0 0 1-6.541-2.912c3.559 9.772-11.123 30.109-11.123 30.109-1.707 2.513-5.627.938-5.627.938-9.453-1.43-26.864-28.627-29.701-33.153a12.112 12.112 0 0 1-4.216 2.204zM94.445 519.83c5.547 1.261 36.261 8.065 47.904 6.363 12.816-1.875 37.734-3.123 37.734-3.123s15.868.858 20.749-1.374a81.47 81.47 0 0 1-.047-.919l-9.045-10.836s-87.532-6.565-94.097 0c-1.613 1.613-2.607 5.275-3.198 9.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M152.038 368.953s16.494-22.85 10.279-31.745l27.86 11.425s16.769-2.033 22.82 22.992a43.294 43.294 0 0 1 1.036 12.702c-.22 3.773.293 10.416 4.591 19.013 6.877 13.754 5.314 45.328-8.753 48.454s-19.069 1.563-19.069 1.563 1.876 57.207 10.003 63.772-20.723 5.002-20.723 5.002-24.917 1.25-37.734 3.126-48.767-6.565-48.767-6.565 5.314-24.07 7.19-39.389 6.252-47.935 6.252-47.935l-31.886-43.19s-5.627-26.103 14.067-37.67 27.106-14.41 27.106-14.41 19.785 32.23 30.102 33.792c0 0 3.918 1.575 5.626-.937z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M188.614 378.018s.312 10.316-1.563 14.38-8.753 26.572-8.753 26.572h15.63s-8.44-9.066-7.815-13.442 2.5-27.51 2.5-27.51z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M142.348 455.858s34.517-8.44 37.734-15.63 12.085-23.28 12.085-23.28l-3.644-4.908-16.79 13.182s-20.007 15.943-29.385 17.506 0 13.13 0 13.13z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M142.348 455.858s34.517-8.44 37.734-15.63 12.085-23.28 12.085-23.28l-3.644-4.908-16.79 13.182s-20.007 15.943-29.385 17.506 0 13.13 0 13.13z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M112.493 415.22v18.729h3.01a87.61 87.61 0 0 1 42.508 11l5.64 3.133 1.52.844 9.688-21.828-9.064-8.127s-.164.02-.464.043c-2.218.215-11.808 1.017-15.873-.357-3.86-1.308-8.656-5.467-20.027-2.56-5.6 1.43-10.382 7.709-15.817 5.749z",
    fill: "#fbbebe"
  }), _react.default.createElement("path", {
    d: "M82.327 381.144l-6.252 7.034v17.037s5.314 53.769 22.195 59.708 47.015-3.438 47.015-3.438 7.783-20.632 4.142-21.883-32.18-8.788-32.18-8.788.405-31.538-5.848-40.917c0 0 4.064-29.385-10.003-30.01s-19.07 21.257-19.07 21.257z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M81.389 381.144l-6.252 7.034v17.037s5.314 53.769 22.195 59.708 47.015-3.438 47.015-3.438 7.783-20.632 4.142-21.883-32.179-8.788-32.179-8.788.404-31.538-5.848-40.917c0 0 4.063-29.385-10.004-30.01s-19.07 21.257-19.07 21.257z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M125.056 308.885a12.48 12.48 0 0 1 .712-6.087c.882-1.866 2.945-3.338 4.957-2.865 2.677.624 3.83 4.108 6.452 4.943 2.209.703 4.624-.863 5.679-2.931 1.055-2.063 1.083-4.483 1.087-6.8q.008-3.917.02-7.835c.004-2.841.088-5.913 1.842-8.145 2.18-2.78 7.301-3.995 10.72-3.882a9.067 9.067 0 0 1 6.119 2.466c1.833 1.557 3.948 2.701 6.443 2.293a5.563 5.563 0 0 0 4.487-3.883.749.749 0 0 0 .024-.098 31.884 31.884 0 1 0-47.426 42.324 86.174 86.174 0 0 1-1.116-9.5z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M169.087 279.105a5.57 5.57 0 0 0 4.49-3.884c.262-1.01.193-2.086.49-3.085.73-2.456 3.352-3.737 5.11-5.601 3.522-3.737 3.293-9.886.8-14.375-2.013-3.624-5.917-6.683-10-5.975-2.529.439-4.716 2.24-7.277 2.403-2.465.156-4.723-1.225-6.97-2.25a26.279 26.279 0 0 0-17.28-1.534 9.956 9.956 0 0 0-4.755 2.398 40.5 40.5 0 0 0-2.536 3.565c-2.916 3.714-8.132 4.44-12.778 5.282s-9.904 2.677-11.431 7.145c-1.012 2.962-.03 6.18.551 9.256a2.72 2.72 0 0 1-.124 1.911c-.724 1.199-2.539.697-3.91.985-2.636.553-3.313 3.95-3.41 6.64q-.167 4.622-.251 9.245a11.95 11.95 0 0 0 .273 3.43 12.121 12.121 0 0 0 2.658 4.303l10.323 12.401c4.577 5.498 9.437 11.907 8.515 19.001 2.17.974 4.745-.899 5.457-3.168s.137-4.713-.345-7.042a86.575 86.575 0 0 1-1.632-12.208 12.44 12.44 0 0 1 .715-6.086c.88-1.869 2.945-3.338 4.956-2.868 2.678.626 3.83 4.109 6.45 4.944 2.209.704 4.627-.865 5.68-2.93s1.081-4.482 1.087-6.8l.018-7.836c.007-2.84.09-5.913 1.843-8.147 2.18-2.78 7.303-3.993 10.722-3.882a9.08 9.08 0 0 1 6.117 2.467c1.835 1.558 3.947 2.702 6.444 2.295z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M161.886 377.237l-9.79 40.215s-7.716-.045 9.79-40.215zM128.437 370.516s12.816 20.99 7.815 42.694l-2.388.174s4.263-10.044-5.427-42.868zM120.309 489.307s-15.738-5.206-16.881 6.877c0 0 2.97-8.284 16.88-6.877zM165.793 419.908s3.126 21.882-2.5 30.635c0 0 11.445 4.69 27.509 3.752l1.876-34.387z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M163.652 448.082l1.52.844 9.687-21.828-9.064-8.127h-.47a.289.289 0 0 0 .006.043c.14 1.008 2.668 19.802-1.68 29.068z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M165.793 418.97s3.126 21.883-2.5 30.636c0 0 11.445 4.689 27.509 3.75l10.941-34.386z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M190.832 792.073a7.08 7.08 0 0 0 6.07 6.193c8.49 1.268 28.938-2.498 34.102-.041 6.565 3.128 32.51.938 33.762-2.185a4.934 4.934 0 0 0-.45-3.761 9.981 9.981 0 0 0-4.192-4.506 10.386 10.386 0 0 0-1.88-.835c-4.887-1.632-14.12-5.092-16.61-8.717 0 0-11.504-10.067-14.788-15.511a7.51 7.51 0 0 0-6.01-3.743c-2.739-.123-5.789 1.255-7.036 7.255 0 0-14.996 8.557-19.057 1.055 0 0-.624 18.525-3.113 21.677-.005.004-.01.014-.015.018a4.161 4.161 0 0 0-.783 3.1z",
    fill: "#cbceda"
  }), _react.default.createElement("path", {
    d: "M190.832 792.073a7.08 7.08 0 0 0 6.07 6.193c8.49 1.268 28.938-2.498 34.102-.041 6.565 3.128 32.51.938 33.762-2.185a4.934 4.934 0 0 0-.45-3.761 9.981 9.981 0 0 0-4.192-4.506c-4.23 2.804-13.622 5.552-34.278 2.326-19.704-3.076-29.457.908-34.216-1.145-.005.004-.01.014-.015.018a4.161 4.161 0 0 0-.783 3.1z",
    opacity: 0.1
  }), _react.default.createElement("g", {
    opacity: 0.1
  }, _react.default.createElement("path", {
    d: "M107.53 272.89l-.026-.15c-.443-2.343-1.116-4.768-.966-7.1a45.604 45.604 0 0 0 .966 5.693 3.388 3.388 0 0 1 .026 1.556zM125.772 302.151a9.135 9.135 0 0 0-.767 3.573 10.764 10.764 0 0 1 .767-4.98c.88-1.868 2.945-3.338 4.956-2.867 2.678.626 3.83 4.108 6.45 4.943 2.209.704 4.627-.864 5.68-2.93s1.081-4.482 1.087-6.8l.018-7.836c.007-2.839.09-5.912 1.843-8.146 2.18-2.78 7.303-3.994 10.722-3.883a9.079 9.079 0 0 1 6.117 2.468c1.835 1.557 3.947 2.701 6.445 2.294a5.57 5.57 0 0 0 4.488-3.883c.263-1.01.194-2.086.491-3.086.73-2.456 3.352-3.737 5.11-5.601a10.235 10.235 0 0 0 2.636-6.607 10.657 10.657 0 0 1-2.636 8.014c-1.758 1.864-4.38 3.145-5.11 5.6-.297 1-.228 2.077-.49 3.086a5.57 5.57 0 0 1-4.49 3.884c-2.497.407-4.61-.737-6.444-2.295a9.079 9.079 0 0 0-6.117-2.467c-3.419-.111-8.542 1.103-10.722 3.882-1.752 2.234-1.836 5.308-1.843 8.147l-.018 7.836c-.006 2.318-.034 4.735-1.087 6.8s-3.471 3.634-5.68 2.93c-2.62-.835-3.772-4.317-6.45-4.944-2.01-.47-4.076 1-4.956 2.868zM100.08 293.544a12.123 12.123 0 0 0 2.66 4.303l10.322 12.4c4.345 5.221 8.943 11.263 8.607 17.932-.313-6.114-4.57-11.674-8.607-16.525l-10.323-12.4a12.123 12.123 0 0 1-2.658-4.303 11.946 11.946 0 0 1-.273-3.43 8.507 8.507 0 0 0 .273 2.023zM127.034 326.08a7.344 7.344 0 0 0 .309-1.672 8.375 8.375 0 0 1-.31 3.08c-.71 2.268-3.287 4.141-5.456 3.168a13.612 13.612 0 0 0 .107-1.368c2.147.867 4.65-.975 5.35-3.207z"
  })), _react.default.createElement("path", {
    d: "M228.908 765.54s-3.267 5.748-15.108.682M130.808 765.924s-10.215 12.023-23.082 3.942M101.085 623.727s7.215 4.507 7.45 7.086-3.725-1.875-3.725-1.875zM98.237 658.292a15.066 15.066 0 0 0 8.89 3.47c5.393.234 4.944 7.268 1.417 5.158s-10.307-8.628-10.307-8.628zM96.864 662.803s3.464 17.012 6.278 13.73",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M13.71 645.652a20.813 20.813 0 1 0 2.771-39.915l.521 10.712-5.068-9.18A20.734 20.734 0 0 0 1.25 618.99a20.408 20.408 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.657 21.031z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M38.787 769.896c-1.79-9.11 5.963-17.187 13.62-22.437s16.606-10.408 19.219-19.317c3.755-12.804-7.43-24.53-16.136-34.641a125.3 125.3 0 0 1-16.524-24.558c-1.81-3.532-3.475-7.225-3.952-11.166-.686-5.676 1.137-11.323 2.974-16.737q9.18-27.052 19.628-53.65",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M14.567 642.894a20.813 20.813 0 1 0 2.771-39.915l.521 10.712-5.068-9.18a20.734 20.734 0 0 0-10.684 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.657 21.031z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M36.243 583.69a20.788 20.788 0 0 1 14.98-13.197l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M37.386 580.013a20.788 20.788 0 0 1 14.98-13.197L54.08 577l3.177-10.696a20.81 20.81 0 1 1-19.871 13.71z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M51.837 693.707a20.81 20.81 0 0 0 18.419-37.023l-2.442 8.22-1.73-10.304a.362.362 0 0 0-.054-.02 20.811 20.811 0 1 0-14.193 39.127z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M52.827 689.982a20.81 20.81 0 0 0 18.419-37.022l-2.441 8.219-1.732-10.304a.362.362 0 0 0-.053-.02 20.811 20.811 0 1 0-14.193 39.127z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M30.17 728.27a20.801 20.801 0 1 0 4.01-16.298l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.613 9.749z",
    fill: "#57b894"
  }), _react.default.createElement("path", {
    d: "M31.027 725.512a20.801 20.801 0 1 0 4.01-16.298l9.273 13.957-12.67-7.408a20.617 20.617 0 0 0-.613 9.749z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M9.892 782.236s18.365-7.198 23.9-11.139 28.25-8.647 29.624-2.326 27.6 31.437 6.865 31.605-48.178 3.402-53.702.037-6.687-18.177-6.687-18.177z",
    fill: "#656380"
  }), _react.default.createElement("path", {
    d: "M70.651 798.175c-20.734.168-48.178 3.402-53.702.037-4.207-2.562-5.883-11.758-6.444-16l-.613.024s1.163 14.812 6.687 18.177 32.968.13 53.702-.037c5.985-.049 8.053-2.178 7.94-5.332-.832 1.906-3.115 3.095-7.57 3.131z",
    opacity: 0.2
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M50.816 799.555h272"
  }));
};

UndrawDownload.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawDownload;
exports.default = _default;