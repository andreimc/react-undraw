function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawResponsive = _props => {
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
    viewBox: "0 0 971.44 502",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 599.5,
    y1: 668.05,
    x2: 599.5,
    y2: 199,
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
    id: "prefix__b",
    x1: 485.72,
    y1: 258.88,
    x2: 485.72,
    y2: 71.12,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 132,
    y1: 515,
    x2: 303,
    y2: 515,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 933,
    y1: 568.28,
    x2: 1031,
    y2: 568.28,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M852.69 199H346.31A16.37 16.37 0 0 0 330 215.42v348.52a16.37 16.37 0 0 0 16.31 16.42h174.16v60.16h-7.94a8.3 8.3 0 0 0-8.27 8.33v12.07h16.21v7.14h158.06v-7.14h16.21v-12.07a8.3 8.3 0 0 0-8.27-8.33H679V640h-.51v-59.64h174.2A16.37 16.37 0 0 0 869 563.94V215.42A16.37 16.37 0 0 0 852.69 199z",
    transform: "translate(-114.28 -199)",
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#bdbdbd",
    d: "M407.72 371h156v92h-156z"
  }), React.createElement("path", {
    d: "M410.79 380h150.17c1.81-7.87 3.26-13 3.26-13h-157s1.61 5.11 3.57 13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M235.82 3h499.8a16.1 16.1 0 0 1 16.1 16.1V327h-532V19.1A16.1 16.1 0 0 1 235.82 3z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M735.62 377h-499.8a16.1 16.1 0 0 1-16.1-16.1V327h532v33.9a16.1 16.1 0 0 1-16.1 16.1z",
    fill: "#bdbdbd"
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 352,
    r: 9,
    fill: "#535461"
  }), React.createElement("path", {
    d: "M399.89 436h171.66a8.17 8.17 0 0 1 8.17 8.17V456h-188v-11.83a8.17 8.17 0 0 1 8.17-8.17z",
    fill: "#bdbdbd"
  }), React.createElement("rect", {
    x: 320.72,
    y: 71.12,
    width: 330,
    height: 187.76,
    rx: 4.5,
    ry: 4.5,
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("rect", {
    x: 324.95,
    y: 72.5,
    width: 321.54,
    height: 183.96,
    rx: 4.5,
    ry: 4.5,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 414.52,
    y: 98.91,
    width: 35.44,
    height: 31.9,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), React.createElement("rect", {
    x: 460.59,
    y: 98.91,
    width: 95.69,
    height: 3.54,
    rx: 1.77,
    ry: 1.77,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 460.59,
    y: 109.55,
    width: 79.54,
    height: 3.54,
    rx: 1.77,
    ry: 1.77,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 414.52,
    y: 148.53,
    width: 35.44,
    height: 31.9,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), React.createElement("rect", {
    x: 460.59,
    y: 148.53,
    width: 95.69,
    height: 3.54,
    rx: 1.77,
    ry: 1.77,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 460.59,
    y: 159.16,
    width: 95.69,
    height: 3.54,
    rx: 1.77,
    ry: 1.77,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 414.52,
    y: 198.15,
    width: 35.44,
    height: 31.9,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor,
    opacity: 0.5
  }), React.createElement("rect", {
    x: 460.59,
    y: 198.15,
    width: 95.69,
    height: 3.54,
    rx: 1.77,
    ry: 1.77,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 460.59,
    y: 208.78,
    width: 96.33,
    height: 3.54,
    rx: 1.59,
    ry: 1.59,
    fill: "#e0e0e0"
  }), React.createElement("path", {
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M485.72 42V20M485.72 79V50.13"
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 79,
    r: 4,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 46,
    r: 4,
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M485.72 42V20M485.72 79V50.13"
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 79,
    r: 4,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 46,
    r: 4,
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M485.72 279v31M485.72 251v28.87"
  }), React.createElement("circle", {
    cx: 485.72,
    cy: 251,
    r: 4,
    fill: primaryColor
  }), React.createElement("path", {
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M305.72 168.5h-31.5M333.22 168.5h-28.87"
  }), React.createElement("circle", {
    cx: 333.22,
    cy: 168.5,
    r: 4,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M408.22 435.5h156v3h-156z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M293.48 566.06h-72.4l1-8.14c20.46-18.37 33.69-67.31 33.69-67.31a6.78 6.78 0 0 0-.87.18c-12 2.42-20.54 7.35-26.51 13.28l2.54-21.66c37.8-8.14 52.79-58.14 52.79-58.14-24.12 5.35-39.16 13.63-48.5 21.49l3.72-31.82c25.56 8.77 52-37.82 52-37.82l-1-.21.5-.32-.76.27c-28.25-6.09-43.35 10.06-48.25 16.77l.37-3.12q-1.12 3-2.18 5.88v.08q-3 8.13-5.49 16.06-2.17 6.77-4.06 13.4v-.06s-1.17-28.46-31.18-35.95c0 0 3.15 62.07 26.93 51.91-2.2 9-4 17.66-5.56 26.07q-1.49 8.21-2.6 16l-.14.16.14-.12-.06.41q-1 7.07-1.7 13.78c.46-8.62-1.11-33.52-30.45-56.92 0 0-39 68.54 27.5 82l.44.38-.1-.31.6.13.27-3.52a369.39 369.39 0 0 0 .23 44.1c.07 1 .14 2 .21 2.95h-73.23c-27.94 57.79 15.52 89.46 15.52 89.46h120c46.6-58.74 16.59-89.34 16.59-89.34zm-78-65.68z",
    transform: "translate(-114.28 -199)",
    fill: "url(#prefix__c)",
    opacity: 0.7
  }), React.createElement("path", {
    d: "M102.72 389s-19-83 23-190",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    opacity: 0.6
  }), React.createElement("path", {
    d: "M28.72 364h147s29 37-16 92h-116s-42-38-15-92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M123.61 204.5s14.61-26 49.61-18c0 0-28.93 49.26-55 33.13zM114.35 232.09s-1.13-26.59-30.13-33.59c0 0 3 58 26 48.5zM104.87 271.36s5.35-27.86 61.35-39.86c0 0-17.86 57.62-63.93 55.31z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M100.33 302.63s5.89-29.13-29.11-56.13c0 0-38 64.67 27.48 76.83z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M99.28 342.67s-4.06-41.17 39.94-49.17c0 0-16.07 57.49-40 67.74z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M118.72 220s38-29 54-34M102.22 286.5s46-49 64-55M84.22 198.5s28 38 26 48M71.22 246.5s15 68 27 77M99.22 361.5s24-66 40-68",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.3
  }), React.createElement("path", {
    d: "M175.72 364h-147c-.33.67-.65 1.34-1 2h143s28.29 36.11-14.4 90h3.4c45-55 16-92 16-92z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M0 455.6h971.44v32.93H0z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M41.16 488.53h889.11V502H41.16z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M41.16 488.53h889.11v4.49H41.16z"
  }), React.createElement("path", {
    stroke: primaryColor,
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M690.22 168.5h6M637.22 168.5h44.88"
  }), React.createElement("circle", {
    cx: 637.22,
    cy: 168.5,
    r: 4,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 686.22,
    cy: 168.5,
    r: 4,
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M1027 643.88l.1-.15q.31-.48.61-1l.11-.19q.29-.49.55-1l.09-.17c.2-.39.39-.78.56-1.19a23.79 23.79 0 0 0 .94-2.51l.1-.33c.09-.31.18-.62.26-.93l.1-.44q.1-.42.18-.85c0-.16.06-.32.09-.48s.09-.56.13-.85 0-.33.06-.49.06-.61.08-.92v-.43V548h-13.85v-40.48h-17V548h-11.72v-58.14h-17V548H965v-66.45h-17V548h-15v82.6c0 13.48 11.21 24.4 25 24.4h48a25.19 25.19 0 0 0 20.24-10.06q.37-.53.76-1.06z",
    transform: "translate(-114.28 -199)",
    fill: "url(#prefix__d)",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#535461",
    d: "M835.72 321h16v100h-16z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M835.72 288h16v33h-16z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M857.72 329h16v100h-16z"
  }), React.createElement("path", {
    fill: "#4d8af0",
    d: "M857.72 296h16v33h-16z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M884.72 346h16v100h-16z"
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M884.72 313h16v33h-16z"
  }), React.createElement("path", {
    d: "M821.72 352h92v79.5a23.5 23.5 0 0 1-23.5 23.5h-45a23.5 23.5 0 0 1-23.5-23.5V352z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M821.72 352v4h88v79.5a23.39 23.39 0 0 1-5 14.49 23.45 23.45 0 0 0 9-18.49V352z",
    opacity: 0.1
  }));
};

UndrawResponsive.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawResponsive;