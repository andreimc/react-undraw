function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawContrast = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign({
    height: props.height || defaultProps.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return React.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 912.5 703.5",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 424.5,
    y1: 675,
    x2: 424.5,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 191.5,
    y1: 281,
    x2: 191.5,
    y2: 256,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__b",
    x1: 627.5,
    y1: 281,
    x2: 627.5,
    y2: 256,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 0.55,
    stopOpacity: 0.09
  }), React.createElement("stop", {
    offset: 1,
    stopOpacity: 0.02
  })), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 198,
    y1: 328,
    x2: 198,
    y2: 312,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 634,
    y1: 328,
    x2: 634,
    y2: 312,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 634,
    y1: 353,
    x2: 634,
    y2: 337,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 634,
    y1: 378,
    x2: 634,
    y2: 362,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 634,
    y1: 403,
    x2: 634,
    y2: 387,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 634,
    y1: 428,
    x2: 634,
    y2: 412,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 198,
    y1: 353,
    x2: 198,
    y2: 337,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 198,
    y1: 378,
    x2: 198,
    y2: 362,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 198,
    y1: 403,
    x2: 198,
    y2: 387,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 198,
    y1: 428,
    x2: 198,
    y2: 412,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M66.5 79.5h846v624h-846z"
  }), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0v675h849V0H0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M12 42h828v621H12z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M12 9h828v33H12z"
  }), React.createElement("circle", {
    cx: 36,
    cy: 25,
    r: 8,
    fill: "#ff5252"
  }), React.createElement("circle", {
    cx: 58,
    cy: 25,
    r: 8,
    fill: "#ff0"
  }), React.createElement("circle", {
    cx: 80,
    cy: 25,
    r: 8,
    fill: "#69f0ae"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M426 42h414v621H426z"
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M78 256h227v25H78z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M514 256h227v25H514z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M82 259h220v18H82z"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M47 312h302v16H47z"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M483 312h302v16H483z"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M483 337h302v16H483z"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M483 362h302v16H483z"
  }), React.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M483 387h302v16H483z"
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M483 412h302v16H483z"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M47 337h302v16H47z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M47 362h302v16H47z"
  }), React.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M47 387h302v16H47z"
  }), React.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M47 412h302v16H47z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M50 314h297v11H50zM50 339h297v11H50zM50 364h297v11H50zM50 389h297v11H50zM50 414h297v11H50z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M517 259h220v18H517zM485 314h297v11H485zM485 339h297v11H485zM485 364h297v11H485zM485 389h297v11H485zM485 414h297v11H485z"
  }));
};

UndrawContrast.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawContrast;