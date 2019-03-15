function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChatting = _props => {
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
    viewBox: "0 0 789.99 731",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 461.46,
    y1: 792.95,
    x2: 746,
    y2: 121.07,
    gradientTransform: "rotate(-.14 -841.696 5577.13)",
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
    x1: 533.21,
    y1: 688.58,
    x2: 533.21,
    y2: 490.28,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: -602.79,
    y1: 427.8,
    x2: -602.79,
    y2: 229.5,
    gradientTransform: "matrix(-1 0 0 1 48 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 376.5,
    y1: 427.5,
    x2: 376.5,
    y2: 242.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 3313.5,
    y1: 702.5,
    x2: 3313.5,
    y2: 517.61,
    gradientTransform: "matrix(-1 0 0 1 4122 0)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M756.67 128.49l-332.5.81a13.66 13.66 0 0 0-13.63 13.7l1.51 621.89a13.66 13.66 0 0 0 13.7 13.63l332.5-.81A13.66 13.66 0 0 0 771.88 764l-1.51-621.89a13.66 13.66 0 0 0-13.7-13.62z",
    transform: "translate(-205 -84.5)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("rect", {
    x: 416.16,
    y: 137.38,
    width: 350.11,
    height: 631.95,
    rx: 13.64,
    ry: 13.64,
    transform: "rotate(-.14 -34095.806 84310.093)",
    fill: "#fff"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M473.43 68.5a28.38 28.38 0 0 1-27.91 24.21L324.59 93a28.38 28.38 0 0 1-28-24.07l-64.05.16a13.3 13.3 0 0 0-13.27 13.33l1.39 573.67A13.3 13.3 0 0 0 234 669.36l306-.74a13.3 13.3 0 0 0 13.27-13.33l-1.39-573.67a13.3 13.3 0 0 0-13.33-13.27z",
    fill: primaryColor,
    opacity: 0.4
  }), React.createElement("rect", {
    x: 548.33,
    y: 160.81,
    width: 78.02,
    height: 4.88,
    rx: 2,
    ry: 2,
    transform: "rotate(-.86 -5143.63 13778.86)",
    fill: "#dbdbdb"
  }), React.createElement("circle", {
    cx: 642.91,
    cy: 161.92,
    r: 2.93,
    transform: "rotate(-.86 -5088.324 13777.942)",
    fill: "#dbdbdb"
  }), React.createElement("path", {
    d: "M632.07 589.13a98.85 98.85 0 1 0-154 82l.06.44a33.84 33.84 0 0 0 11.21 7.13l.13-.44c4.63 4 24.12 10.33 46.51 10.27h.49c14.18 0 29.58-2.5 43.12-9.83 0 0 .12-.26.3-.75a35.21 35.21 0 0 0 9.32-6.38q.08-.57.16-1.12a98.74 98.74 0 0 0 42.7-81.32z",
    transform: "translate(-205 -84.5)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 328.21,
    cy: 504.64,
    r: 95.89,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M291.58 544.07s-22.85 1.87-16.8 43.49a32.82 32.82 0 0 0 10.87 6.94l12.85-43.49zM365.72 544.07s22.85 1.87 16.8 43.49a32.82 32.82 0 0 1-10.87 6.94l-12.85-43.51z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M292.57 475.86s-10.87 31.64-16.8 28.64c0 0 57.22 49.43 107.75 0 0 0-8.9-15.82-21.75-28.67z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 329.25,
    cy: 472.89,
    r: 42.51,
    fill: "#333"
  }), React.createElement("path", {
    d: "M365.28 544.07h-74.13l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M366.27 544.07h-74.14l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M365.72 544.07h-74.14l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M314.32 519.46H344v28.7a9.85 9.85 0 0 1-9.85 9.85h-10a9.85 9.85 0 0 1-9.85-9.85v-28.7h.02z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M314.32 518.37H344v28.7a9.85 9.85 0 0 1-9.85 9.85h-10a9.85 9.85 0 0 1-9.85-9.85v-28.7h.02z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M314.38 522.64a42.68 42.68 0 0 0 29.66.08v-3.64h-29.66z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 329.25,
    cy: 482.12,
    r: 42.51,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M288.62 465.97h81.06s-6.92-32.73-37.56-30.64-43.5 30.64-43.5 30.64z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 287.63,
    cy: 480.31,
    rx: 3.95,
    ry: 7.41,
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 370.66,
    cy: 480.31,
    rx: 3.95,
    ry: 7.41,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M288.62 467.07h81.06s-6.92-32.73-37.56-30.64-43.5 30.64-43.5 30.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M551.94 328.35a98.85 98.85 0 1 1 154 82l-.06.44a33.84 33.84 0 0 1-11.21 7.21l-.13-.44c-4.63 4-24.12 10.33-46.51 10.27h-.49c-14.18 0-29.58-2.5-43.12-9.83 0 0-.12-.26-.3-.75a35.21 35.21 0 0 1-9.32-6.38q-.08-.57-.16-1.12a98.74 98.74 0 0 1-42.7-81.4z",
    transform: "translate(-205 -84.5)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 445.79,
    cy: 243.86,
    r: 95.89,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M408.2 280.38s-22.85 1.87-16.8 43.49a32.82 32.82 0 0 0 10.87 6.92l12.85-43.49zM482.33 280.38s22.85 1.87 16.8 43.49a32.82 32.82 0 0 1-10.87 6.92l-12.85-43.49z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M409.18 212.17s-1.76 5.12-4.25 11c-5.44 13 .77 62.71 13.78 68 14.6 6 33.8 9.76 53.75 2.49 17.33-6.32 22.68-63 10.42-76.75-1.44-1.62-2.94-3.23-4.51-4.79z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 445.86,
    cy: 209.21,
    r: 42.51,
    fill: "#333"
  }), React.createElement("path", {
    d: "M481.9 280.38h-74.14l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M482.88 280.38h-74.14l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M482.33 280.38H408.2l-6.92 29.66s-4.06 13.73 1 19.77 52.28 19.77 87 1a38.68 38.68 0 0 0 1-24.71c-4-13.84-1-1-1-1z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M430.93 255.78h29.66v28.7a9.85 9.85 0 0 1-9.85 9.85h-10a9.85 9.85 0 0 1-9.85-9.85v-28.7z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M430.93 254.68h29.66v28.7a9.85 9.85 0 0 1-9.85 9.85h-10a9.85 9.85 0 0 1-9.85-9.85v-28.7h.04z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M431 258.95a42.68 42.68 0 0 0 29.66.08v-3.64H431z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 445.86,
    cy: 218.43,
    r: 42.51,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M405.23 202.29h81.06s-6.92-32.73-37.56-30.64-43.5 30.64-43.5 30.64z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 404.24,
    cy: 216.62,
    rx: 3.95,
    ry: 7.41,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 487.27,
    cy: 216.62,
    rx: 3.95,
    ry: 7.41,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M405.23 203.39h81.06s-6.92-32.73-37.56-30.64-43.5 30.64-43.5 30.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M210 242.61v142.72h224.86S451.46 418 480 427.5c0 0-9.11-23.14.4-42.17H543V242.61z",
    transform: "translate(-205 -84.5)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M14 163v135h225s0 27 27 36c0 0-9-18 0-36h63V163z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M41 190h180v18H41zM41 217h243v18H41zM41 244h216v18H41z"
  }), React.createElement("path", {
    d: "M975 517.61v142.72H750.15S733.55 693 705 702.5c0 0 9.11-23.14-.4-42.17H642V517.61z",
    transform: "translate(-205 -84.5)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M761 438v135H536s0 27-27 36c0 0 9-18 0-36h-63V438z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M483 465h180v18H483zM483 492h243v18H483zM483 519h216v18H483z"
  }), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M84 714h3v17h-3z"
  }), React.createElement("path", {
    d: "M94 721v3H77v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M633 192h3v17h-3z"
  }), React.createElement("path", {
    d: "M643 199v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M697 612h3v17h-3z"
  }), React.createElement("path", {
    d: "M707 619v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M508 0h3v17h-3z"
  }), React.createElement("path", {
    d: "M518 7v3h-17V7z"
  })), React.createElement("path", {
    d: "M258.7 712.31a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM57.9 394.96a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41A1.84 1.84 0 0 0 52 400.8a1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25zM166.9 481.96a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.32 1.27 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25zM788.9 717.96a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.32 1.27 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.37-.25z",
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 6,
    cy: 659,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 683,
    cy: 64,
    r: 6,
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 104,
    cy: 76,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 689,
    cy: 346,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }));
};

UndrawChatting.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChatting;