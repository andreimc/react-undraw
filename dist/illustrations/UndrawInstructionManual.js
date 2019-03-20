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

var UndrawInstructionManual = function UndrawInstructionManual(_props) {
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
    viewBox: "0 0 1110 659.5",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 1196.668,
    y1: 772.147,
    x2: 1196.668,
    y2: 275.09,
    gradientTransform: "translate(-540.545)",
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
    fill: "#f2f2f2",
    d: "M90.5 27h368v305h-368z"
  }), _react.default.createElement("ellipse", {
    cx: 555,
    cy: 585.5,
    rx: 555,
    ry: 74,
    fill: "#f2f2f2"
  }), _react.default.createElement("ellipse", {
    cx: 352.874,
    cy: 673.176,
    rx: 80.859,
    ry: 31.118,
    transform: "rotate(-14.056 -156.331 795.69)",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 676.274,
    cy: 517.438,
    rx: 41.484,
    ry: 14.063,
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 671.593,
    cy: 419.801,
    rx: 31.118,
    ry: 80.859,
    transform: "rotate(-19.92 307.424 487.927)",
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 692.446,
    cy: 104,
    r: 67.5,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 692.446,
    cy: 104,
    r: 42.188,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 883.696,
    cy: 104,
    r: 67.5,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 883.696,
    cy: 104,
    r: 42.188,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 788.071,
    cy: 392.281,
    r: 171.563,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 788.071,
    cy: 192.594,
    r: 130.781,
    fill: primaryColor
  }), _react.default.createElement("circle", {
    cx: 844.321,
    cy: 171.5,
    r: 35.156,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 844.321,
    cy: 171.5,
    r: 9.844,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 858.384,
    cy: 154.625,
    r: 4.219,
    fill: "#fff"
  }), _react.default.createElement("ellipse", {
    cx: 453.196,
    cy: 520.391,
    rx: 32.344,
    ry: 4.922,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 455.196,
    cy: 517.391,
    rx: 32.344,
    ry: 4.922,
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 488.071,
    cy: 681.281,
    rx: 9.844,
    ry: 18.281,
    transform: "rotate(-77.705 391.087 649.213)",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 490.071,
    cy: 678.281,
    rx: 9.844,
    ry: 18.281,
    transform: "rotate(-77.705 393.087 646.213)",
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 712.837,
    cy: 403.531,
    rx: 71.016,
    ry: 77.344,
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 352.874,
    cy: 668.176,
    rx: 80.859,
    ry: 31.118,
    transform: "rotate(-14.056 -156.331 790.69)",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M899.19 260.17A130.794 130.794 0 0 0 788.07 60.407c-4.27 0-8.49.212-12.656.612a130.797 130.797 0 0 1 98.462 199.153 171.556 171.556 0 0 1-98.462 301.8q6.27.458 12.656.467A171.555 171.555 0 0 0 899.19 260.17z",
    opacity: 0.1
  }), _react.default.createElement("ellipse", {
    cx: 792.993,
    cy: 562.438,
    rx: 41.484,
    ry: 14.063,
    fill: "#2f2e41"
  }), _react.default.createElement("ellipse", {
    cx: 840.102,
    cy: 101.891,
    rx: 32.344,
    ry: 4.922,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 720.415,
    cy: 178.5,
    r: 35.156,
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 710.415,
    cy: 170.5,
    r: 35.156,
    fill: "#2f2e41"
  }), _react.default.createElement("circle", {
    cx: 710.415,
    cy: 170.5,
    r: 9.844,
    fill: "#fff"
  }), _react.default.createElement("circle", {
    cx: 724.477,
    cy: 153.625,
    r: 4.219,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M754.938 330.052a15.122 15.122 0 0 1-1.047-2.899c-.107-1.153.336-2.675-.68-3.221-.574-.308-1.362-.077-1.867-.484a2.255 2.255 0 0 1-.55-1.284 4.398 4.398 0 0 0-4.085-3.183c1.102-2.914 5.025-3.629 6.769-6.197.872-1.276.589-3.636-.949-3.652a2.753 2.753 0 0 0-1.04.277c-1.912.784-3.816 1.576-5.728 2.36a29.503 29.503 0 0 0-3.243 1.5c-3.15 1.79-5.506 4.705-7.625 7.665a32.958 32.958 0 0 0-4.741 8.626 19.508 19.508 0 0 0-1.01 5.904q0 .302.014.6c-.933.158-1.7.567-2.68.764l-2.221 5.88a7.616 7.616 0 0 1-1.452 2.68 13.626 13.626 0 0 1-1.576 1.24 9.09 9.09 0 0 0-3.125 7.923 8.526 8.526 0 0 0-5.009 10.51 9.998 9.998 0 0 0-7.322 6.481 4.856 4.856 0 0 1-.957 2.017 3.88 3.88 0 0 1-2.557.79c-2.51.156-4.704 2.143-6.978 1.065a14.121 14.121 0 0 0-8.289-1.164 6.206 6.206 0 0 1-1.768.157 4.653 4.653 0 0 1-1.45-.508 11.572 11.572 0 0 0-3.29-1.301 3.072 3.072 0 0 0-3.122 1.212c-.796-.878-1.27-2.002-1.996-2.94a3.196 3.196 0 0 0-3.028-1.453c.756-.677-.018-2.024-1-2.27a12.752 12.752 0 0 0-3.021.11c-2.627-.014-4.642-2.412-7.194-3.04-2.345-.576-5.47.112-6.673-1.993-.384-.672-.494-1.557-1.041-2.06a3.776 3.776 0 0 0-.76-1.557c-.963-1.096-2.59-1.253-4.043-1.207a16.437 16.437 0 0 0-4.698.808 8.874 8.874 0 0 0-.157-.604 11.932 11.932 0 0 0-5.208-6.395 21.823 21.823 0 0 0-6.17-2.508c-.01-.192-.031-.383-.036-.575a24.202 24.202 0 0 1 1.246-7.988c.09-.282.195-.56.293-.841a28.61 28.61 0 0 0 12.862-47.992 8.152 8.152 0 0 0-.224-1.719 8.37 8.37 0 0 0-1.73-3.348c-1.306-2.93-3.354-4.223-5.962-5.444-.75-.353-1.545-.7-2.386-1.084-4.16-1.876-8.183-4.628-12.91-4.62-4.313 0-8.443 2.383-12.703 2.29l-.32-.015c-.108-.005-.215-.004-.322-.015-.13-.008-.252-.023-.382-.039-1.194-.146-2.624-.422-3.411.493a5.332 5.332 0 0 0-.605 1.176 2.43 2.43 0 0 1-.214.392 3.99 3.99 0 0 1-.543.738c-1.376 1.514-3.686 2.183-5.59 3.167-4.298 2.207-7.12 6.697-8.245 11.41-1.124 4.72-.726 9.679.115 14.453.424 2.388 1.357 5.098 3.055 6.597v.008l-.037-.029s-14.375 10.23-11.752 11.683c1.427.789 7.382-2.982 12.516-6.583.052.219.1.438.157.656a48.182 48.182 0 0 0 2.347 6.72c1.094 2.575 2.624 5.35 5.3 6.119a6.035 6.035 0 0 0 1.82.208c.158-.002.316-.014.475-.025a42.124 42.124 0 0 1-1.238 11.686 7.167 7.167 0 0 0-4.4 1.217 3.525 3.525 0 0 1-1.779.95 3.106 3.106 0 0 1-1.839-.907 10.436 10.436 0 0 0-13.058.692c-5.207 4.908-4.618 14.497-10.72 18.22-1.682 1.026-3.833 1.569-4.815 3.283a12.137 12.137 0 0 1-.83 1.578 4.254 4.254 0 0 1-1.467 1.051 28.475 28.475 0 0 0-5.03 2.907 7.239 7.239 0 0 0-2.895 4.878 9.233 9.233 0 0 0 .889 4.103 38.26 38.26 0 0 0 3.347 6.415 6.935 6.935 0 0 0-1.352 3.171c-.435 3.027 1.013 6.001 1.173 9.055.14 2.668-.705 5.274-1.188 7.901-1.887 10.253 1.738 20.64 5.426 30.385a15.726 15.726 0 0 1 1.289 4.997c.098 3.18-1.724 6.095-2.223 9.238-1.05 6.604 3.797 12.815 3.897 19.502.046 3.079-.918 6.212-.152 9.193.511 1.99 1.747 3.7 2.623 5.555 1.553 3.29 1.97 7.021 3.453 10.343a24.802 24.802 0 0 0 7.658 9.123c1.867 5.901-.781 13.027-.028 19.306 1.013-.394 2.034-.767 3.06-1.129a44.262 44.262 0 0 0 6.779 26.714c1.668 2.598 3.623 5.038 4.877 7.862a35.877 35.877 0 0 1 1.904 6.23l5.405 22.49c1.46 6.073 2.929 12.262 2.49 18.493-.305 4.341-1.393 9.223 1.268 12.655a9.326 9.326 0 0 1 1.609 2.218 5.641 5.641 0 0 1 .026 2.923 197.024 197.024 0 0 0-2.669 21.927 77.538 77.538 0 0 0-1.75 2.432c-4.42 6.466-6.547 14.2-8.268 21.85-3.35 14.96-4.856 30.314-5.544 45.636a30.331 30.331 0 0 0-5.66 6.896c-2.317 4.29-2.615 9.349-2.86 14.23a4.951 4.951 0 0 0 .26 2.346 4.762 4.762 0 0 0 2.44 2.037q.661.325 1.332.63a54.923 54.923 0 0 0-.775 3.28c-1.695-1.913-4.724-4.948-5.238-2.726a109.56 109.56 0 0 0-2.753 22.588 2.493 2.493 0 0 0 .267 1.422 2.465 2.465 0 0 0 1.775.861 124.89 124.89 0 0 0 22.385 1.945c6.08-.023 12.145-.492 18.202-.953 2.065-.162 4.138-.323 6.203-.477a136.888 136.888 0 0 0 18.997-2.36c2.746-.6 5.575-1.446 7.633-3.375 2.05-1.922 3.082-5.213 1.66-7.65a.028.028 0 0 0-.008-.023c-1.736-2.944-5.774-3.167-9.155-3.636a29.962 29.962 0 0 1-9.59-3.052 36.818 36.818 0 0 1-1.988-1.123c.173-.049.348-.089.52-.146 2.898-.976 5.207-3.206 7.945-4.567 3.174-1.568 6.776-1.914 10.287-2.36 3.503-.454 7.12-1.076 10.034-3.075 2.73-1.876 4.665-5.282 4.03-8.48a5.326 5.326 0 0 0-.168-.669c-1.086-3.475-4.841-5.32-8.351-6.235-3.503-.915-7.312-1.376-10.15-3.636a15.78 15.78 0 0 1-.412-.339c-.243-.198-.493-.4-.746-.595a6.042 6.042 0 0 0 .828-3.507c-.149-1.932-1.272-3.626-2.034-5.406-1.494-3.491-1.614-7.392-2.018-11.17-1.012-9.49-3.923-18.654-6.122-27.938q-.374-1.58-.716-3.174a67.447 67.447 0 0 1 7.818-12.52 40.793 40.793 0 0 0 7.487-14.808c.451-1.653.788-3.336 1.132-5.02q5.862-29.107 11.051-58.345a48.96 48.96 0 0 0 .983-8.434 25.602 25.602 0 0 0 1.45-7.985c1.007-3.946 2.032-8.086 1.207-10.673-.583-1.828-.876-8.078-1.191-14.067a54.418 54.418 0 0 0-.587-9.6c-.09-.542-.2-1.086-.322-1.628a6.926 6.926 0 0 0-.193-.798 27.783 27.783 0 0 0-1.893-5.225 25.266 25.266 0 0 0-1.42-2.917 13.048 13.048 0 0 0-1.084-1.588 64.519 64.519 0 0 1 6.685.615c.545.082 1.21.126 1.536-.32a1.45 1.45 0 0 0 .205-.808 13.709 13.709 0 0 0-1.742-7.268c-.859-1.523-2.052-3.014-2.019-4.765a7.268 7.268 0 0 1 .59-2.366l2.985-8.002c2.52-6.755 1.32-14.602 2.63-21.695a128.021 128.021 0 0 0 1.961-16.784c.242-4.813.092-10.026-2.798-13.873a15.944 15.944 0 0 1-2.183-3.051 9.31 9.31 0 0 1-.52-3.65q-.075-11.299.456-22.59a221.641 221.641 0 0 0 37.69-4.261 24.228 24.228 0 0 0 4.29-1.156 22.574 22.574 0 0 0 4.336-2.719c4.226-3.053 8.51-6.164 11.724-10.279a34.658 34.658 0 0 0 6.949-17.133c3.056-2.83 4.679-6.853 6.209-10.737a16.462 16.462 0 0 0 1.415-5.215c.082-1.847-1.135-3.783-.799-5.6a14.821 14.821 0 0 1 4.507-8.149 2.97 2.97 0 0 0 1.072-1.432 2.318 2.318 0 0 0-.255-1.395c-.026-.057-.061-.106-.088-.162.291-.185.58-.375.865-.575 1.002-.707 1.958-1.491 2.89-2.26a18.028 18.028 0 0 0 3.756-3.805 6.185 6.185 0 0 0 .986-5.105zm-137.942 412.16c-.254.019-.508.031-.76.066a9.89 9.89 0 0 0-2.73.784c-.07.032-.137.073-.206.107a124.747 124.747 0 0 0 3.31-7.81c.121-.312.235-.628.353-.942l-.13 1.764a21.584 21.584 0 0 0 .163 6.032z",
    transform: "translate(-45 -120)",
    fill: "url(#prefix__a)"
  }), _react.default.createElement("path", {
    d: "M587.335 230.34c.107 4.177 1.522 8.222 1.744 12.39-12.298.612-24.428-5.353-36.603-3.525 3.403-2.203 5.223-6.172 6.294-10.08a41.802 41.802 0 0 0 1.2-15.487 6.82 6.82 0 0 0-.152-.857c-.452-2.042-1.622-4.933-1.308-6.539.413-2.126 2.417-1.705 4.222-1.583a158.143 158.143 0 0 1 16.412 2.119c1.415.244 15.196 3.686 15.403 3.326a64.857 64.857 0 0 0-5.966 12.29 23.96 23.96 0 0 0-1.246 7.947zM708.952 217.439a17.98 17.98 0 0 1-3.755 3.785c-.933.765-1.89 1.545-2.891 2.249a12.397 12.397 0 0 1-6.149 2.5c-2.93.2-9.147-1.521-10.967-4.03a7.27 7.27 0 0 1-1.048-4.198 19.315 19.315 0 0 1 1.01-5.874 32.736 32.736 0 0 1 4.741-8.58c2.119-2.945 4.474-5.844 7.625-7.626a29.578 29.578 0 0 1 3.243-1.491c1.912-.78 3.816-1.568 5.728-2.348a2.764 2.764 0 0 1 1.04-.275c1.538.015 1.82 2.363.949 3.632-1.744 2.555-5.667 3.266-6.769 6.165a4.394 4.394 0 0 1 4.084 3.166 2.238 2.238 0 0 0 .551 1.277c.505.405 1.293.176 1.866.482 1.017.543.574 2.057.68 3.204a14.993 14.993 0 0 0 1.049 2.884 6.126 6.126 0 0 1-.987 5.078z",
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M539.432 636.11c.947-.946 2.494-.786 3.816-.577a141.544 141.544 0 0 0 21.45 1.736c.9-4.392-1.711-8.661-2.552-13.065a11.786 11.786 0 0 0-.85-3.303c-1.012-1.94-3.294-2.829-5.435-3.28-3.866-.816-9.909-2.254-12.068 1.654-2.59 4.69-3.419 11.616-4.36 16.835z",
    fill: "#65617d"
  }), _react.default.createElement("path", {
    d: "M618.026 619.52c-2.914 1.988-6.531 2.608-10.034 3.06-3.51.443-7.113.787-10.287 2.347-2.738 1.354-5.047 3.572-7.946 4.543a16.555 16.555 0 0 1-8.252.13c-3.258-.612-6.73-1.797-8.489-4.612-1.568-2.5-1.4-5.675-1.185-8.619q.378-4.99.741-9.996a4.76 4.76 0 0 1 .62-2.416c2.355-3.434 8.084 1.437 11.15 1.43 4.857-.008 10.073-2.639 13.575-5.859a4.12 4.12 0 0 1 1.056-.795c1.384-.62 2.768.528 4 1.53.137.114.275.229.413.336 2.837 2.249 6.646 2.707 10.149 3.618 3.51.91 7.265 2.745 8.351 6.202a5.275 5.275 0 0 1 .168.665c.635 3.182-1.3 6.57-4.03 8.436z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M618.026 619.52c-2.914 1.988-6.531 2.608-10.034 3.06-3.51.443-7.113.787-10.287 2.347-2.738 1.354-5.047 3.572-7.946 4.543a16.555 16.555 0 0 1-8.252.13c-3.258-.612-6.73-1.797-8.489-4.612-1.568-2.5-1.4-5.675-1.185-8.619q.378-4.99.741-9.996a4.76 4.76 0 0 1 .62-2.416c2.355-3.434 8.084 1.437 11.15 1.43 4.857-.008 10.073-2.639 13.575-5.859a4.12 4.12 0 0 1 1.056-.795c1.384-.62 2.768.528 4 1.53.137.114.275.229.413.336 2.837 2.249 6.646 2.707 10.149 3.618 3.51.91 7.265 2.745 8.351 6.202a5.275 5.275 0 0 1 .168.665c.635 3.182-1.3 6.57-4.03 8.436z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M618.026 620.64c-2.914 1.988-6.531 2.607-10.034 3.058-3.51.444-7.113.788-10.287 2.348-2.738 1.354-5.047 3.572-7.946 4.543a16.555 16.555 0 0 1-8.252.13 13.625 13.625 0 0 1-8.489-5.73c-1.568-2.502-1.4-5.676-1.185-8.62q.378-4.99.741-9.996a4.76 4.76 0 0 1 .62-2.417c2.355-3.433 8.084 1.438 11.15 1.43 4.857-.007 10.073-2.638 13.575-5.858a4.12 4.12 0 0 1 1.056-.795c1.384-.62 2.768.528 4 1.53a28.73 28.73 0 0 1-3.411 7.05 14.675 14.675 0 0 1-10.7 6.693c-2.172.16-4.397-.268-6.5.29-2.096.559-4.054 2.708-3.312 4.75.727 1.988 3.296 2.424 5.415 2.539 2.967.16 6.011.306 8.826-.62 1.72-.573 3.296-1.521 4.97-2.217 7.12-2.953 16.115-1.3 21.996-6.287a13.015 13.015 0 0 1 1.797-1.377c1.54 3.224-1.3 7.69-4.03 9.555z",
    fill: "#e8eaf2"
  }), _react.default.createElement("path", {
    d: "M618.026 620.64c-2.914 1.988-6.531 2.607-10.034 3.058-3.51.444-7.113.788-10.287 2.348-2.738 1.354-5.047 3.572-7.946 4.543a16.555 16.555 0 0 1-8.252.13 13.625 13.625 0 0 1-8.489-5.73c-1.568-2.502-1.4-5.676-1.185-8.62q.378-4.99.741-9.996a4.76 4.76 0 0 1 .62-2.417c2.355-3.433 8.084 1.438 11.15 1.43 4.857-.007 10.073-2.638 13.575-5.858a4.12 4.12 0 0 1 1.056-.795c1.384-.62 2.768.528 4 1.53a28.73 28.73 0 0 1-3.411 7.05 14.675 14.675 0 0 1-10.7 6.693c-2.172.16-4.397-.268-6.5.29-2.096.559-4.054 2.708-3.312 4.75.727 1.988 3.296 2.424 5.415 2.539 2.967.16 6.011.306 8.826-.62 1.72-.573 3.296-1.521 4.97-2.217 7.12-2.953 16.115-1.3 21.996-6.287a13.015 13.015 0 0 1 1.797-1.377c1.54 3.224-1.3 7.69-4.03 9.555z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M540.764 402.755a43.783 43.783 0 0 0 6 32.306c1.67 2.584 3.624 5.011 4.878 7.82a35.548 35.548 0 0 1 1.904 6.198l5.405 22.373c1.46 6.04 2.93 12.197 2.49 18.396-.305 4.318-1.393 9.175 1.268 12.59a9.279 9.279 0 0 1 1.609 2.206 5.584 5.584 0 0 1 .026 2.907c-2.735 16.244-4.763 33.226.177 48.94 4.477 14.243 4.733 30.025 8.54 44.46.471 1.789 1.01 3.673 2.364 4.932a7.75 7.75 0 0 0 3.546 1.684c5.61 1.335 11.534-.229 16.766-2.653 3.677-1.704 7.635-4.692 7.32-8.732-.149-1.922-1.272-3.607-2.034-5.378-1.494-3.473-1.614-7.353-2.018-11.113-1.012-9.44-3.923-18.555-6.122-27.791s-3.694-18.887-1.834-28.198a246.662 246.662 0 0 1 18.141-55.808 6.73 6.73 0 0 1 1.662-2.499 17.181 17.181 0 0 0 2.352-1.605 7.097 7.097 0 0 0 1.076-2.926c.818-2.947 3.248-5.12 4.877-7.709 4.114-6.535 2.81-14.912 2.658-22.632-.148-7.508.933-15.085-.298-22.493s-5.475-14.98-12.616-17.301c-3.538-1.15-7.362-.89-11.064-.523-19.612 1.941-38.668 5.504-57.073 12.549z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M540.764 402.755a43.783 43.783 0 0 0 6 32.306c1.67 2.584 3.624 5.011 4.878 7.82a35.548 35.548 0 0 1 1.904 6.198l5.405 22.373c1.46 6.04 2.93 12.197 2.49 18.396-.305 4.318-1.393 9.175 1.268 12.59a9.279 9.279 0 0 1 1.609 2.206 5.584 5.584 0 0 1 .026 2.907c-2.735 16.244-4.763 33.226.177 48.94 4.477 14.243 4.733 30.025 8.54 44.46.471 1.789 1.01 3.673 2.364 4.932a7.75 7.75 0 0 0 3.546 1.684c5.61 1.335 11.534-.229 16.766-2.653 3.677-1.704 7.635-4.692 7.32-8.732-.149-1.922-1.272-3.607-2.034-5.378-1.494-3.473-1.614-7.353-2.018-11.113-1.012-9.44-3.923-18.555-6.122-27.791s-3.694-18.887-1.834-28.198a246.662 246.662 0 0 1 18.141-55.808 6.73 6.73 0 0 1 1.662-2.499 17.181 17.181 0 0 0 2.352-1.605 7.097 7.097 0 0 0 1.076-2.926c.818-2.947 3.248-5.12 4.877-7.709 4.114-6.535 2.81-14.912 2.658-22.632-.148-7.508.933-15.085-.298-22.493s-5.475-14.98-12.616-17.301c-3.538-1.15-7.362-.89-11.064-.523-19.612 1.941-38.668 5.504-57.073 12.549z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M620.642 449.843a46.891 46.891 0 0 1-.987 8.68q-5.185 29.082-11.051 58.04c-.344 1.676-.681 3.35-1.132 4.995a40.5 40.5 0 0 1-7.487 14.73c-16.298 20.313-17.705 49.81-26.546 74.307-.597 1.66-1.193 3.32-1.828 4.956a123.774 123.774 0 0 1-5.453 12.168 3.478 3.478 0 0 1-1.125 1.453 3.334 3.334 0 0 1-1.774.344 51.793 51.793 0 0 1-22.966-5.224 4.756 4.756 0 0 1-2.44-2.026 4.901 4.901 0 0 1-.26-2.333c.245-4.856.543-9.889 2.86-14.156a30.207 30.207 0 0 1 5.66-6.86c.688-15.243 2.195-30.516 5.544-45.398 1.721-7.61 3.847-15.304 8.268-21.736 3.258-4.75 7.93-9.437 7.357-15.166-.252-2.516-1.308-5.651.742-7.128.895-.65 2.218-.734 2.822-1.66a3.149 3.149 0 0 0 .398-1.422 35.123 35.123 0 0 0-.727-11.754 61.997 61.997 0 0 1-1.751-7.664c-.26-2.615.183-5.445 1.927-7.403.107-5.231-.038-10.661.069-15.885a29.457 29.457 0 0 0-.735-8.871c-.397-1.37-1.001-2.677-1.307-4.076-1.094-5.025 1.636-11.044-1.614-15.029-1.354-1.652-3.441-2.478-5.216-3.67-3.54-2.364-5.866-6.234-7.158-10.295a56.816 56.816 0 0 1-2.027-12.603 12.972 12.972 0 0 1-.03-2.723 4.99 4.99 0 0 1 .366-1.361c1.01-2.272 3.725-3.151 6.142-3.733a198.874 198.874 0 0 1 46.897-5.483c5.843-3.977 9.131-2.555 11.61 1.66a43.546 43.546 0 0 1 3.303 8.068c1.132 3.419 1.2 22.554 2.302 25.988 1.43 4.466-2.707 13.582-2.653 18.27z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M514.998 275.714c-.435 3.011 1.013 5.97 1.173 9.008.14 2.654-.705 5.246-1.188 7.86-1.887 10.2 1.738 20.531 5.426 30.226a15.576 15.576 0 0 1 1.289 4.971c.098 3.164-1.724 6.064-2.223 9.19-1.05 6.569 3.796 12.748 3.897 19.4.046 3.062-.918 6.18-.152 9.145.511 1.979 1.747 3.68 2.623 5.526 1.553 3.272 1.97 6.984 3.453 10.289 2.68 5.972 8.435 9.871 13.914 13.454 3.116-1.04 6.486-2.273 8.196-5.077a12.58 12.58 0 0 0 1.431-4.453c1.185-6.803 1.144-13.752 1.1-20.658a127.385 127.385 0 0 0-.946-17.782c-1.107-7.502-3.54-14.736-5.287-22.116-2.203-9.308-3.331-18.925-6.762-27.854-3.014-7.846-7.71-14.889-12.652-21.634-1.886-2.574-3.375-6.254-7.035-5.66a7.674 7.674 0 0 0-6.257 6.165z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M514.998 275.714c-.435 3.011 1.013 5.97 1.173 9.008.14 2.654-.705 5.246-1.188 7.86-1.887 10.2 1.738 20.531 5.426 30.226a15.576 15.576 0 0 1 1.289 4.971c.098 3.164-1.724 6.064-2.223 9.19-1.05 6.569 3.796 12.748 3.897 19.4.046 3.062-.918 6.18-.152 9.145.511 1.979 1.747 3.68 2.623 5.526 1.553 3.272 1.97 6.984 3.453 10.289 2.68 5.972 8.435 9.871 13.914 13.454 3.116-1.04 6.486-2.273 8.196-5.077a12.58 12.58 0 0 0 1.431-4.453c1.185-6.803 1.144-13.752 1.1-20.658a127.385 127.385 0 0 0-.946-17.782c-1.107-7.502-3.54-14.736-5.287-22.116-2.203-9.308-3.331-18.925-6.762-27.854-3.014-7.846-7.71-14.889-12.652-21.634-1.886-2.574-3.375-6.254-7.035-5.66a7.674 7.674 0 0 0-6.257 6.165z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M594.547 210.104a64.857 64.857 0 0 0-5.966 12.29 28.293 28.293 0 0 1-6.776.819c-8.864 0-15.142-5.044-20.35-11.414-.451-2.042-3.259-3.95-2.945-5.557.413-2.126 2.417-1.705 4.222-1.583a158.143 158.143 0 0 1 16.412 2.119c1.415.244 15.196 3.686 15.403 3.326z",
    opacity: 0.1
  }), _react.default.createElement("circle", {
    cx: 581.808,
    cy: 194.045,
    r: 28.4,
    fill: "#a0616a"
  }), _react.default.createElement("path", {
    d: "M617.69 397.516c-4.918-.29-9.866-.091-14.8.107a49.961 49.961 0 0 0-9.184.941c-3.733.85-7.22 2.547-10.899 3.61-5.889 1.713-12.106 1.79-18.21 2.394a103.045 103.045 0 0 0-11.922 1.866 4.99 4.99 0 0 1 .367-1.361c1.01-2.272 3.724-3.151 6.14-3.733a198.874 198.874 0 0 1 46.898-5.483c5.843-3.977 9.131-2.555 11.61 1.66z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M598.335 240.535c-1.238 1.433-2.899 3.012-4.735 2.55a6.47 6.47 0 0 1-1.843-.987c-3.274-2.11-7.292-2.605-11.144-3.185a164.428 164.428 0 0 1-22.95-5.16 23.409 23.409 0 0 0-6.787-1.38c-4.813.025-9.08 3.225-12.096 6.976s-5.153 8.14-8.113 11.936c-2.11 2.705-4.62 5.088-6.59 7.896-4.972 7.088-6.04 16.335-4.757 24.898s4.704 16.636 8.094 24.603a85.493 85.493 0 0 0 6.61 13.326c-1.144 6.506-.54 13.946 2.553 19.782 1.008 1.9 2.242 3.754 2.575 5.88a14.717 14.717 0 0 1-.178 4.312l-1.446 10.281c-.44 3.131-.88 6.263-1.45 9.373-1.043 5.691-2.459 11.868.177 17.02 3.157 6.168-.159 14.074.67 20.954a105.407 105.407 0 0 1 27.675-6.575c6.103-.599 12.32-.674 18.207-2.387 3.678-1.07 7.165-2.764 10.898-3.617a50.242 50.242 0 0 1 9.19-.938c6.805-.275 13.658-.547 20.395.456.545.081 1.21.125 1.536-.32a1.437 1.437 0 0 0 .205-.802 13.58 13.58 0 0 0-1.742-7.23c-.859-1.516-2.052-2.998-2.019-4.74a7.202 7.202 0 0 1 .59-2.354l2.985-7.96c2.52-6.72 1.32-14.526 2.63-21.582a126.713 126.713 0 0 0 1.961-16.696c.242-4.788.092-9.974-2.798-13.8a15.864 15.864 0 0 1-2.183-3.036 9.216 9.216 0 0 1-.52-3.631q-.096-14.374.789-28.732c-2.52-4.525-5.147-9.153-7.667-13.679-2.932-5.266-5.905-10.641-7.09-16.552-.783-3.912-.756-7.94-1.316-11.891a5.193 5.193 0 0 0-1.005-2.777c-.962-1.09-2.589-1.246-4.042-1.201a17.894 17.894 0 0 0-5.269.97z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M702.306 223.473a12.397 12.397 0 0 1-6.149 2.5c-2.93.2-9.147-1.521-10.967-4.03a7.27 7.27 0 0 1-1.048-4.198 5.104 5.104 0 0 1 1.224-.237 31.807 31.807 0 0 1 9.529.382c3.097.757 6.088 2.639 7.396 5.552.007.008.007.023.015.031z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M607.82 284.892c1.73 2.156 3.531 4.372 5.983 5.644 2.821 1.465 6.144 1.498 9.322 1.43a222.754 222.754 0 0 0 38.956-4.279 24.328 24.328 0 0 0 4.29-1.15 22.595 22.595 0 0 0 4.336-2.704c4.226-3.038 8.51-6.132 11.724-10.226a34.38 34.38 0 0 0 6.949-17.043c3.056-2.816 4.679-6.818 6.209-10.681a16.31 16.31 0 0 0 1.415-5.188c.082-1.837-1.135-3.763-.799-5.57a14.722 14.722 0 0 1 4.507-8.107 2.956 2.956 0 0 0 1.072-1.424 2.296 2.296 0 0 0-.256-1.389c-1.307-2.912-4.298-4.79-7.398-5.554a31.753 31.753 0 0 0-9.532-.378 22.28 22.28 0 0 0-3.123.829l-2.22 5.848a7.564 7.564 0 0 1-1.452 2.668 13.619 13.619 0 0 1-1.576 1.233 9.019 9.019 0 0 0-3.125 7.881 8.47 8.47 0 0 0-5.009 10.456 9.981 9.981 0 0 0-7.322 6.446 4.82 4.82 0 0 1-.957 2.007 3.894 3.894 0 0 1-2.557.786c-2.51.155-4.704 2.131-6.978 1.06a14.187 14.187 0 0 0-8.289-1.16 6.24 6.24 0 0 1-1.768.158 4.67 4.67 0 0 1-1.45-.506 11.608 11.608 0 0 0-3.29-1.294 3.08 3.08 0 0 0-3.122 1.205c-.796-.873-1.27-1.991-1.996-2.924a3.201 3.201 0 0 0-3.028-1.445c.756-.674-.018-2.014-1-2.26a12.818 12.818 0 0 0-3.021.11c-2.627-.014-4.642-2.399-7.194-3.023-2.345-.574-5.47.11-6.672-1.983-.427-.742-.51-1.75-1.235-2.204a2.383 2.383 0 0 0-1.585-.183 15.488 15.488 0 0 0-4.792 1.454c-2.459 9.62-1.169 19.609.705 29.359a25.9 25.9 0 0 0 5.279 12.101z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M607.747 319.363l-12.23 24.66c1.322-2.286 4.11-3.168 6.309-4.63a16.717 16.717 0 0 0 6.035-8.107 49.815 49.815 0 0 0 2.309-9.988c.25-1.566.767-3.758.012-5.175-1.406.289-1.86 2.081-2.435 3.24zM572.559 340.297c-2.76 2.73-6.138 4.74-9.175 7.159-7.09 5.65-12.15 13.398-17.085 21.005a33.021 33.021 0 0 0-3.491 6.36c.577.496 1.443-.018 2.014-.52l9.604-8.44a21.645 21.645 0 0 0 3.203-3.242c1.666-2.244 2.405-5.05 3.92-7.4a29.002 29.002 0 0 1 5.836-5.947c2.203-1.89 12.342-10.462 9.87-13.79-1.782.898-3.239 3.371-4.696 4.815z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M593.54 233.408c-3.046-1.897-6.633-2.7-10.163-3.346a21.413 21.413 0 0 0-6.467-.465c-2 .25-3.918 1.022-5.93 1.134-2.823.157-5.53-.988-8.258-1.735s-5.878-1.031-8.174.619a3.53 3.53 0 0 1-1.78.945 3.113 3.113 0 0 1-1.839-.902 10.478 10.478 0 0 0-13.058.688c-5.207 4.883-4.618 14.422-10.72 18.125-1.682 1.021-3.833 1.561-4.815 3.266a12.063 12.063 0 0 1-.83 1.57 4.253 4.253 0 0 1-1.467 1.046 28.509 28.509 0 0 0-5.03 2.891 7.194 7.194 0 0 0-2.895 4.853 9.143 9.143 0 0 0 .889 4.081 38.294 38.294 0 0 0 37.214 23.797 5.89 5.89 0 0 0 3.899-1.217 7.357 7.357 0 0 0 1.366-2.25c2.869-6.015 8.257-10.456 11.678-16.175 2.04-3.408 3.348-7.22 5.47-10.577 3.219-5.09 8.112-8.849 12.902-12.497 2.701-2.057 5.708-4.216 9.102-4.072 3.024.129 5.224.291 4.115-3.418a11.883 11.883 0 0 0-5.208-6.361z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M593.54 233.408c-3.046-1.897-6.633-2.7-10.163-3.346a21.413 21.413 0 0 0-6.467-.465c-2 .25-3.918 1.022-5.93 1.134-2.823.157-5.53-.988-8.258-1.735s-5.878-1.031-8.174.619a3.53 3.53 0 0 1-1.78.945 3.113 3.113 0 0 1-1.839-.902 10.478 10.478 0 0 0-13.058.688c-5.207 4.883-4.618 14.422-10.72 18.125-1.682 1.021-3.833 1.561-4.815 3.266a12.063 12.063 0 0 1-.83 1.57 4.253 4.253 0 0 1-1.467 1.046 28.509 28.509 0 0 0-5.03 2.891 7.194 7.194 0 0 0-2.895 4.853 9.143 9.143 0 0 0 .889 4.081 38.294 38.294 0 0 0 37.214 23.797 5.89 5.89 0 0 0 3.899-1.217 7.357 7.357 0 0 0 1.366-2.25c2.869-6.015 8.257-10.456 11.678-16.175 2.04-3.408 3.348-7.22 5.47-10.577 3.219-5.09 8.112-8.849 12.902-12.497 2.701-2.057 5.708-4.216 9.102-4.072 3.024.129 5.224.291 4.115-3.418a11.883 11.883 0 0 0-5.208-6.361z",
    opacity: 0.05
  }), _react.default.createElement("path", {
    d: "M608.32 645.018c-2.057 1.92-4.886 2.761-7.632 3.358a137.571 137.571 0 0 1-18.997 2.347c-2.065.153-4.138.314-6.203.475-6.057.459-12.122.925-18.202.948a125.53 125.53 0 0 1-22.385-1.935 1.9 1.9 0 0 1-2.042-2.271 108.446 108.446 0 0 1 2.753-22.47c.704-3.028 6.134 3.763 6.378 4.046 1.507 1.713 2.647 2.5 4.933 2.623 6.249.344 13.247-3.457 18.21-6.837a23.306 23.306 0 0 1 3.373-2.088 9.93 9.93 0 0 1 2.73-.78 16.485 16.485 0 0 1 9.292 1.881c3.732 1.851 7.006 4.512 10.7 6.417a30.074 30.074 0 0 0 9.59 3.036c3.38.467 7.419.688 9.155 3.618a.028.028 0 0 1 .007.023c1.423 2.424.39 5.697-1.66 7.61z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M608.32 646.137c-2.057 1.92-4.886 2.761-7.632 3.358a137.571 137.571 0 0 1-18.997 2.348c-2.065.153-4.138.313-6.203.474-6.057.459-12.122.925-18.202.948a125.529 125.529 0 0 1-22.385-1.935 2.47 2.47 0 0 1-1.775-.856 9.923 9.923 0 0 1-1.386-2.534c.13-7.556 2.174-15.105 3.872-22.47.704-3.028 6.134 3.763 6.378 4.046 1.507 1.713 2.647 2.5 4.933 2.623 6.249.344 13.247-3.457 18.21-6.837a23.306 23.306 0 0 1 3.373-2.088 9.93 9.93 0 0 1 2.73-.78c-.803 4.497-7.25 9.927-10.577 11.579-6.73 3.342-14.73 1.675-22.24 2.065a3.102 3.102 0 0 0-1.576.382c-.902.597-.956 1.874-.925 2.952.061 1.79.29 3.893 1.843 4.803a5.316 5.316 0 0 0 2.493.52 352.605 352.605 0 0 0 55.455-1.942 30.491 30.491 0 0 0 9.033-2.012 23.378 23.378 0 0 0 5.238-3.373c2.364 1.858.39 6.817-1.66 8.73z",
    fill: "#e8eaf2"
  }), _react.default.createElement("path", {
    d: "M592.857 193.738c-.107 2.937 1.896 8.634-3.595 7.044-3.273-.949-4.199-4.826-8.351-3.962-4.191.88-5.11 5.98-6.516 9.33a17.855 17.855 0 0 1-12.94 10.455 7.79 7.79 0 0 1-3.565-.007c-2.676-.765-4.206-3.526-5.3-6.088a47.762 47.762 0 0 1-2.347-6.685 28.227 28.227 0 0 1-.85-4.902v-.007a21.806 21.806 0 0 1-.015-3.388c.498-6.677 4.299-12.765 9.163-17.369s10.775-7.93 16.61-11.212a24.255 24.255 0 0 1 6.127-2.73 20.616 20.616 0 0 1 6.47-.268 22.585 22.585 0 0 1 8.23 1.935 11.59 11.59 0 0 1 2.898 2.035 8.714 8.714 0 0 1 2.508 4.19c1.056 4.314-1.698 8.2-3.93 11.61-1.99 3.029-4.452 6.24-4.597 10.019z",
    fill: "#2f2e41"
  }), _react.default.createElement("path", {
    d: "M685.269 256.766c-1.176-2.96-6.108-11.14-4.68-13.954a36.833 36.833 0 0 1 3.752 6.712c.932 2.288.17 5.356.928 7.242zM597.575 183.718c2.237-3.413 4.99-7.298 3.937-11.611a9.054 9.054 0 0 0-3.194-4.78 7.914 7.914 0 0 1 .809 2.015c1.054 4.314-1.7 8.198-3.937 11.611-1.985 3.029-4.45 6.244-4.592 10.02-.11 2.935 1.897 8.636-3.599 7.045-3.27-.947-4.195-4.828-8.35-3.961-4.191.874-5.106 5.977-6.514 9.33a17.871 17.871 0 0 1-12.943 10.455 7.813 7.813 0 0 1-3.561-.009 5.396 5.396 0 0 1-1.678-.824 7.24 7.24 0 0 0 4.062 3.589 7.813 7.813 0 0 0 3.562.009 17.872 17.872 0 0 0 12.943-10.456c1.407-3.353 2.322-8.455 6.514-9.33 4.155-.866 5.08 3.015 8.35 3.961 5.496 1.592 3.489-4.11 3.599-7.044.142-3.776 2.606-6.991 4.592-10.02z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M598.791 177.884a25.031 25.031 0 0 1-1.682 2.401 28.408 28.408 0 0 1-3.885 4.023 32.326 32.326 0 0 1-2.623 2.057 41.283 41.283 0 0 1-5.3 3.167c-5.37 2.707-11.182 4.405-16.964 6.08q-5.667 1.652-11.341 3.296a223.586 223.586 0 0 1-6.753 4.917 28.227 28.227 0 0 1-.85-4.902v-.007a21.806 21.806 0 0 1-.015-3.388c.497-6.677 4.298-12.765 9.163-17.369s10.775-7.93 16.61-11.212a24.255 24.255 0 0 1 6.127-2.73 20.616 20.616 0 0 1 6.47-.268 22.585 22.585 0 0 1 8.23 1.935 11.59 11.59 0 0 1 2.898 2.035 11.055 11.055 0 0 1 1.453 3.074c.719 2.325-.268 4.826-1.538 6.89z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M598.791 177.119a25.031 25.031 0 0 1-1.682 2.401 28.408 28.408 0 0 1-3.885 4.023 32.328 32.328 0 0 1-2.623 2.058 41.282 41.282 0 0 1-5.3 3.166c-5.37 2.707-11.182 4.405-16.964 6.08q-5.667 1.652-11.341 3.296c-3.954 2.99-17.2 12.803-19.426 11.579-2.623-1.445 11.751-11.622 11.751-11.622l.661.502c-2.103-1.323-3.204-4.39-3.678-7.044-.841-4.75-1.24-9.682-.115-14.378 1.124-4.688 3.946-9.154 8.245-11.35 1.904-.978 4.214-1.644 5.59-3.15a3.97 3.97 0 0 0 .543-.734 2.414 2.414 0 0 0 .214-.39 5.293 5.293 0 0 1 .605-1.17c.787-.91 2.217-.635 3.41-.49.13.015.253.03.383.038a6.012 6.012 0 0 0 .642.03c4.26.093 8.39-2.278 12.704-2.278 4.726-.008 8.749 2.73 12.91 4.596.84.383 1.636.727 2.385 1.078 3.006 1.4 5.27 2.891 6.509 6.868.719 2.325-.268 4.826-1.538 6.891z",
    fill: "#3f3d56"
  }), _react.default.createElement("path", {
    d: "M565.821 159.965a1.943 1.943 0 0 1-.45 2.493 3.487 3.487 0 0 1-1.79.635 12.05 12.05 0 0 1-1.392.107 3.795 3.795 0 0 1-1.844-.314 2.304 2.304 0 0 1-.32-.206 3.966 3.966 0 0 0 .542-.734c.107.084.214.06.643.03a9.737 9.737 0 0 0 2.294-.39 2.577 2.577 0 0 0 .864-.413 2.645 2.645 0 0 0 .81-1.239zM549.605 197.988a5.248 5.248 0 0 0 1.962.73 6.325 6.325 0 0 0 5.234-.784M384.5 609.49q-14.238 0-28.41-12.278l1.82-2.712c17.893 15.538 35.287 15.538 53.18 0l1.82 2.712q-14.139 12.276-28.41 12.277z",
    opacity: 0.1
  }), _react.default.createElement("path", {
    d: "M384.5 605.49c-9.492 0-18.984-3.6-28.41-10.798l1.82-2.384c17.893 13.664 35.287 13.664 53.18 0l1.82 2.384c-9.426 7.198-18.918 10.797-28.41 10.797z"
  }), _react.default.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M49 .5h368v305H49z"
  }), _react.default.createElement("ellipse", {
    cx: 333.411,
    cy: 313.307,
    rx: 11.836,
    ry: 30.756,
    transform: "rotate(-19.92 -30.759 381.433)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 243.853,
    cy: 102.478,
    r: 16.046,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 319.925,
    cy: 102.478,
    r: 16.046,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 301.62,
    cy: 128.152,
    r: 13.372,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 301.62,
    cy: 128.152,
    r: 3.744,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 266.247,
    cy: 128.152,
    r: 3.744,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 306.969,
    cy: 121.733,
    r: 1.605,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 266.383,
    cy: 128.152,
    r: 13.372,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    cx: 261.034,
    cy: 121.733,
    r: 1.605,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    d: "M345.48 212.128a65.107 65.107 0 0 0-22.99-49.715 49.862 49.862 0 0 0 6.24-37.307 25.674 25.674 0 1 0-33.763-36.453 50.027 50.027 0 0 0-29.485 0 25.673 25.673 0 1 0-33.763 36.453 49.862 49.862 0 0 0 6.241 37.307 65.677 65.677 0 0 0-8.635 8.887c-5.837-15.095-15.063-25.414-20.998-23.263-6.146 2.227-6.437 16.978-.65 32.948a67.105 67.105 0 0 0 8.838 16.978 65.348 65.348 0 0 0 14.426 56.935c-5.331.859-9.018 2.7-9.018 4.834 0 2.954 7.064 5.348 15.779 5.348 1.43 0 2.814-.065 4.131-.186a64.937 64.937 0 0 0 24.715 11.048 2.003 2.003 0 0 0-.23.906c0 2.954 7.064 5.349 15.779 5.349s15.779-2.395 15.779-5.35a2.424 2.424 0 0 0-.789-1.669 65.28 65.28 0 0 0 48.393-63.05z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), _react.default.createElement("ellipse", {
    cx: 283.431,
    cy: 138.612,
    rx: 2.663,
    ry: 6.086,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }));
};

UndrawInstructionManual.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawInstructionManual;
exports.default = _default;