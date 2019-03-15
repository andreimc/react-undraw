function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawLiveCollaboration = _props => {
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
    viewBox: "0 0 862 703.19",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 232.86,
    y1: 449.06,
    x2: 232.86,
    y2: 19.38,
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
    x1: 303.14,
    y1: 548.35,
    x2: 303.14,
    y2: 118.67,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 730.3,
    y1: 703.19,
    x2: 730.3,
    y2: 444.62,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 732.71,
    y1: 258.57,
    x2: 732.71,
    y2: 0,
    xlinkHref: "#prefix__a"
  })), React.createElement("rect", {
    y: 19.38,
    width: 465.71,
    height: 429.68,
    rx: 4.5,
    ry: 4.5,
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("rect", {
    x: 5.68,
    y: 22.71,
    width: 454.97,
    height: 419.26,
    rx: 4.5,
    ry: 4.5,
    fill: "#f5f5f5"
  }), React.createElement("rect", {
    x: 40.75,
    y: 91.77,
    width: 76.73,
    height: 69.06,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 140.49,
    y: 91.77,
    width: 305.02,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 140.49,
    y: 114.79,
    width: 305.02,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 198.34,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 221.35,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 252.05,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 275.06,
    width: 237.86,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 305.68,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 328.7,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 359.39,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 33.07,
    y: 382.41,
    width: 237.86,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 70.29,
    y: 118.67,
    width: 465.71,
    height: 429.68,
    rx: 4.5,
    ry: 4.5,
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("rect", {
    x: 75.97,
    y: 122,
    width: 454.97,
    height: 419.26,
    rx: 4.5,
    ry: 4.5,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 111.03,
    y: 191.06,
    width: 76.73,
    height: 69.06,
    rx: 4.5,
    ry: 4.5,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 210.78,
    y: 191.06,
    width: 305.02,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 210.78,
    y: 214.08,
    width: 305.02,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 297.63,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 320.65,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 351.34,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 374.36,
    width: 237.86,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 404.97,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 427.99,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 458.68,
    width: 412.44,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 103.36,
    y: 481.7,
    width: 237.86,
    height: 7.67,
    rx: 3.44,
    ry: 3.44,
    fill: "#e0e0e0"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    d: "M536 276.74l4.36-4.12"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeDasharray: "12.58 12.58",
    d: "M549.5 263.97l159.95-151.36"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    d: "M714.02 108.28l4.35-4.12M537.63 427.99l4.47 4.01"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeDasharray: "12.44 12.44",
    d: "M551.36 440.31l162.03 145.46"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    d: "M718.02 589.93l4.46 4"
  }), React.createElement("circle", {
    cx: 730.3,
    cy: 573.91,
    r: 129.29,
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 730.3,
    cy: 573.2,
    r: 126.56,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M800.3 584.6c0 46.61-30.42 98.5-67.93 98.5s-67.93-51.9-67.93-98.5 30.42-70.27 67.93-70.27 67.93 23.65 67.93 70.27z",
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M730.66 700.14a126 126 0 0 0 69.57-20.82c-4.66-25.49-22.41-26.94-22.41-26.94H680s-16.75 1.38-22 24.82a126 126 0 0 0 72.66 22.94z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M709.61 621.29h39.14v33.34a17.54 17.54 0 0 1-17.54 17.54h-4.06a17.54 17.54 0 0 1-17.54-17.54v-33.34z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M713 619.84h32.45a3.35 3.35 0 0 1 3.35 3.35v30a17.54 17.54 0 0 1-17.54 17.54h-4.06a17.54 17.54 0 0 1-17.54-17.54v-30a3.35 3.35 0 0 1 3.34-3.35z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M709.68 636.08a56.33 56.33 0 0 0 39.14.11v-4.81h-39.14z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 729.33,
    cy: 582.59,
    r: 56.1,
    fill: "#fdb797"
  }), React.createElement("ellipse", {
    cx: 674.38,
    cy: 580.2,
    rx: 5.22,
    ry: 9.79,
    fill: "#fdb797"
  }), React.createElement("ellipse", {
    cx: 783.98,
    cy: 580.2,
    rx: 5.22,
    ry: 9.79,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M679.61 552.16s31.76 43.44 104.46 28.59c0 0 8.12-9.88-11.65-40.23s-74.81-25.41-92.81 11.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M679.61 551.46s31.76 43.41 104.46 28.59c0 0 8.12-9.88-11.65-40.23s-74.81-25.42-92.81 11.64z",
    fill: "#fdd835"
  }), React.createElement("circle", {
    cx: 732.71,
    cy: 129.29,
    r: 129.29,
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 732.97,
    cy: 128.46,
    r: 126.56,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M733.07 255.52a126 126 0 0 0 69.57-20.82c-4.66-25.49-22.41-26.94-22.41-26.94h-97.86s-16.75 1.38-22 24.82a126 126 0 0 0 72.7 22.94z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 731.74,
    cy: 125.79,
    r: 61.09,
    fill: "#333"
  }), React.createElement("path", {
    d: "M712 176.67h39.14V210a17.54 17.54 0 0 1-17.54 17.54h-4.06A17.54 17.54 0 0 1 712 210v-33.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M715.37 175.22h32.45a3.35 3.35 0 0 1 3.35 3.35v30a17.54 17.54 0 0 1-17.54 17.54h-4.06A17.54 17.54 0 0 1 712 208.57v-30a3.35 3.35 0 0 1 3.37-3.35z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M712.1 191.46a56.33 56.33 0 0 0 39.14.11v-4.81H712.1z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 731.74,
    cy: 137.97,
    r: 56.1,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M691.78 86.94s23.64 48 90.34 20.12l-15.53-24.35-27.53-9.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M691.78 86.24s23.64 48 90.34 20.12L766.59 82l-27.53-9.88z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M691.57 82.99a32.41 32.41 0 0 1 8-13.07c11-10.91 29.13-13.21 38.41-25.65a7.26 7.26 0 0 1-3.33 10.24c8.88-.06 19.19-.84 24.22-8.16a16.63 16.63 0 0 1-2.8 17.56c7.88.36 16.29 5.71 16.8 13.58.34 5.24-2.95 10.21-7.26 13.22s-9.52 4.39-14.66 5.52c-14.95 3.31-69.16 17.16-59.38-13.24z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 675.61,
    cy: 137.92,
    rx: 5.22,
    ry: 9.79,
    fill: "#fdb797"
  }), React.createElement("ellipse", {
    cx: 787.84,
    cy: 137.92,
    rx: 5.22,
    ry: 9.79,
    fill: "#fdb797"
  }));
};

UndrawLiveCollaboration.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawLiveCollaboration;