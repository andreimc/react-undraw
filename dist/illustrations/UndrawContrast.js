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

var UndrawContrast = function UndrawContrast(_props) {
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
    viewBox: "0 0 912.5 703.5",
    style: style
  }, props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "prefix__a",
    x1: 424.5,
    y1: 675,
    x2: 424.5,
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
    id: "prefix__c",
    x1: 191.5,
    y1: 281,
    x2: 191.5,
    y2: 256,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__b",
    x1: 627.5,
    y1: 281,
    x2: 627.5,
    y2: 256,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 0.55,
    stopOpacity: 0.09
  }), _react.default.createElement("stop", {
    offset: 1,
    stopOpacity: 0.02
  })), _react.default.createElement("linearGradient", {
    id: "prefix__d",
    x1: 198,
    y1: 328,
    x2: 198,
    y2: 312,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__e",
    x1: 634,
    y1: 328,
    x2: 634,
    y2: 312,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__f",
    x1: 634,
    y1: 353,
    x2: 634,
    y2: 337,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__g",
    x1: 634,
    y1: 378,
    x2: 634,
    y2: 362,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__h",
    x1: 634,
    y1: 403,
    x2: 634,
    y2: 387,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__i",
    x1: 634,
    y1: 428,
    x2: 634,
    y2: 412,
    xlinkHref: "#prefix__b"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__j",
    x1: 198,
    y1: 353,
    x2: 198,
    y2: 337,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__k",
    x1: 198,
    y1: 378,
    x2: 198,
    y2: 362,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__l",
    x1: 198,
    y1: 403,
    x2: 198,
    y2: 387,
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("linearGradient", {
    id: "prefix__m",
    x1: 198,
    y1: 428,
    x2: 198,
    y2: 412,
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M66.5 79.5h846v624h-846z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0v675h849V0H0z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M12 42h828v621H12z"
  }), _react.default.createElement("path", {
    fill: "#f5f5f5",
    d: "M12 9h828v33H12z"
  }), _react.default.createElement("circle", {
    cx: 36,
    cy: 25,
    r: 8,
    fill: "#ff5252"
  }), _react.default.createElement("circle", {
    cx: 58,
    cy: 25,
    r: 8,
    fill: "#ff0"
  }), _react.default.createElement("circle", {
    cx: 80,
    cy: 25,
    r: 8,
    fill: "#69f0ae"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M426 42h414v621H426z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M78 256h227v25H78z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M514 256h227v25H514z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M82 259h220v18H82z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M47 312h302v16H47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M483 312h302v16H483z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M483 337h302v16H483z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M483 362h302v16H483z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M483 387h302v16H483z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M483 412h302v16H483z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M47 337h302v16H47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M47 362h302v16H47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M47 387h302v16H47z"
  }), _react.default.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M47 412h302v16H47z"
  }), _react.default.createElement("path", {
    fill: primaryColor,
    d: "M50 314h297v11H50zM50 339h297v11H50zM50 364h297v11H50zM50 389h297v11H50zM50 414h297v11H50z"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M517 259h220v18H517zM485 314h297v11H485zM485 339h297v11H485zM485 364h297v11H485zM485 389h297v11H485zM485 414h297v11H485z"
  }));
};

UndrawContrast.propTypes = {
  height: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};
var _default = UndrawContrast;
exports.default = _default;