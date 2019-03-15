function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMobile = _props => {
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
    viewBox: "0 0 392.94 715",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 196.47,
    y1: 715,
    x2: 196.47,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0.01,
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
  }))), React.createElement("rect", {
    width: 392.94,
    height: 715,
    rx: 24.73,
    ry: 24.73,
    fill: "url(#prefix__a)"
  }), React.createElement("rect", {
    x: 9.05,
    y: 9.95,
    width: 374.84,
    height: 688.43,
    rx: 24.73,
    ry: 24.73,
    fill: "#fff"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M51.37 58.61h290.2v560.24H51.37z"
  }), React.createElement("ellipse", {
    cx: 196.47,
    cy: 659.21,
    rx: 23.14,
    ry: 23.74,
    fill: "#dbdbdb"
  }), React.createElement("ellipse", {
    cx: 152.51,
    cy: 32.5,
    rx: 4.63,
    ry: 4.75,
    fill: "#dbdbdb"
  }), React.createElement("rect", {
    x: 173.33,
    y: 28.94,
    width: 71.73,
    height: 7.12,
    rx: 1.5,
    ry: 1.5,
    fill: "#dbdbdb"
  }));
};

UndrawMobile.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMobile;