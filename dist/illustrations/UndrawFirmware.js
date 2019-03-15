function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFirmware = _props => {
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
    viewBox: "0 0 1124.68 770.77",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 806.25,
    y1: 308.92,
    x2: 806.25,
    y2: 281.72,
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
    x1: 843.91,
    y1: 397.31,
    x2: 843.91,
    y2: 115.79,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 779.04,
    y1: 396.82,
    x2: 779.04,
    y2: 308.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 830.31,
    y1: 396.82,
    x2: 830.31,
    y2: 308.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 969.14,
    y1: 556.31,
    x2: 969.14,
    y2: 137.12,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 355.66,
    y1: 691.67,
    x2: 355.66,
    y2: 298.98,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M1060.81 437.4c-37.66 47.88-23 117.84.9 173.86 8 18.76 17.08 38.6 13.7 58.72-4.13 24.6-26.09 42.58-49.14 52.12-42 17.38-92.3 13.24-130.91-10.78C862 690.56 838.1 656.81 804.17 637c-56.83-33.17-129.07-20.65-190.73 2.19-43.63 16.16-91.32 37.17-134.67 20.28-30.5-11.88-51.59-40.8-63.08-71.45-5.55-14.8-9.57-30.82-20.16-42.55-6.3-7-14.51-11.92-22.93-16.1-76.87-38.11-174-17.7-248.63-60-50.43-28.55-82.71-82.41-97-138.56s-12.63-115-9-172.88c2.58-41.1 7.21-85 33.47-116.7 27.78-33.56 75.46-46 118.55-39.66s82.16 29.11 116.52 55.88c42.95 33.46 82.78 75.13 135.51 88.69 35.91 9.23 73.69 4.18 110.72 2.43 61.92-2.92 123.86 3.58 185.43 10.7 58.95 6.81 118.32 14.31 174.48 33.49 39.74 13.57 71.6 38.2 109.13 55.41 24.46 11.22 51.13 14.31 74.29 28.6 28.53 17.6 54.68 48.21 47.37 84-6.95 34.13-42.64 51.21-62.63 76.63z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M624.01 428.92c-3.42 3.42-4.2 8.12-5.41 12.48-3.47 12.44-11.63 23.92-23 32.35-8.33 6.18-19.51 13-17.53 22.23.47 2.2 1.72 4.26 2 6.48 1.42 9.61-13.27 14.67-19 23.08-4.24 6.26-3.1 14-1.85 21.16 1.54 8.73 3.41 18.05 10.57 24.48 1.93 1.73 4.24 3.24 5.59 5.33 3 4.69.4 10.83 3.14 15.64 3.66 6.41 15.2 6.69 21.9 2.37s9.79-11.43 12.76-18.09c8-18 17.88-36.07 34.55-49.19 16-12.57 39.23-22.33 42-40.63 1.18-7.85-1.8-16.45 2.75-23.36 2.15-3.27 5.74-5.69 8.18-8.81 7.25-9.3 1.85-22.75-8.76-29.36-15.99-9.96-53.95-10.12-67.89 3.84z",
    fill: "#dee3f3",
    opacity: 0.5
  }), React.createElement("ellipse", {
    cx: 817.36,
    cy: 390.84,
    rx: 155.03,
    ry: 26.04,
    fill: "#dee3f3",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M841.82 290.09h11.51v-8.37h-94.17v8.37h11.51v8.37h-18.84v10.46h108.83v-10.46h-18.84v-8.37z"
  }), React.createElement("path", {
    d: "M956.58 363.12a142 142 0 0 0-.6-29.31 79.66 79.66 0 0 0-6.72-23.81c-6.06-12.7-14.69-19.6-22.26-23.34a41.89 41.89 0 0 0-16.29-4.44 7.32 7.32 0 0 0-14.48 0v-18.85h-39.77v-10.46H910a6.06 6.06 0 0 0 6.06-6.06V192a6.06 6.06 0 0 0-6.06-6.06h-20.3v-54.06a8.16 8.16 0 0 0 4.8-7.44v-.24-.24a8.17 8.17 0 0 0-16.33 0v.48a8.16 8.16 0 0 0 4.32 7.21v54.29h-75.42v-54.29a8.16 8.16 0 0 0 4.32-7.21v-.24-.24a8.17 8.17 0 0 0-16.33 0v.48a8.16 8.16 0 0 0 4.8 7.44v54.06h-22.09a6.06 6.06 0 0 0-6.06 6.06v54.84a6.06 6.06 0 0 0 6.06 6.06h53.58v10.46h-39.76v15.42a7.31 7.31 0 0 0-1.58-2.63l-.17-.18a7.32 7.32 0 0 0-12.5 5.18v1a41.12 41.12 0 0 0-16.52 4.45c-7.58 3.75-16.2 10.65-22.26 23.36a79.66 79.66 0 0 0-6.72 23.79 142 142 0 0 0-.6 29.31c-16.79 13.94 4.24 34.19 4.24 34.19 17.23 0 16.84-28.6 16.65-33.48h.09s0-.24-.12-.69a107.13 107.13 0 0 1-1-24.16 61.7 61.7 0 0 1 4.08-18.54 32.91 32.91 0 0 1 8.28-12.15 28.31 28.31 0 0 1 13.91-6.71v4.71a7.32 7.32 0 0 0 14.25 2.37v38.44h104.61v-37.6a7.31 7.31 0 0 0 1.86 3.9l.2.21a7.32 7.32 0 0 0 12.5-5.18v-6.74a28.24 28.24 0 0 1 13.6 6.64 32.91 32.91 0 0 1 8.28 12.15 61.7 61.7 0 0 1 4.09 18.58 107.13 107.13 0 0 1-1 24.16c-.07.45-.12.69-.12.69h.09c-.19 4.88-.57 33.48 16.65 33.48-.04-.02 20.99-20.27 4.2-34.21z",
    transform: "translate(-37.66 -65.37)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M757.07 309.89v9.5h12.55V382.17h-14.65v14.65h39.77v-14.65h-6.28V319.39h14.65v-10.46h-46.04v.96z"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M807.29 309.89v9.5h18.84V382.17h-14.65v14.65h39.76v-14.65h-6.28V319.39h8.37v-10.46h-46.04v.96z"
  }), React.createElement("rect", {
    x: 735.99,
    y: 123.35,
    width: 140.51,
    height: 65.16,
    rx: 12.97,
    ry: 12.97,
    fill: primaryColor
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M747.19 178.51H865.3v1.22H747.19z"
  }), React.createElement("path", {
    opacity: 0.3,
    d: "M747.19 133.53H865.3v44.8H747.19z"
  }), React.createElement("circle", {
    cx: 774.68,
    cy: 156.87,
    r: 16.29,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 774.68,
    cy: 155.93,
    r: 16.29,
    fill: "#dee3f3"
  }), React.createElement("circle", {
    cx: 837.81,
    cy: 156.87,
    r: 16.29,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 837.81,
    cy: 155.93,
    r: 16.29,
    fill: "#dee3f3"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M794.03 188.51h24.43v14.26h-24.43z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M755.34 198.7h101.82v81.45H755.34zM852.06 280.15v8.14h-11.2v8.15h-69.23v-8.15h-11.2v-8.14h91.63z"
  }), React.createElement("path", {
    opacity: 0.3,
    d: "M852.06 280.15v8.14h-11.2v8.15h-69.23v-8.15h-11.2v-8.14h91.63z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M753.3 296.44h105.89v10.18H753.3zM758.39 306.62h44.8v10.18h-44.8zM807.27 306.62h44.8v10.18h-44.8zM756.36 377.89h38.69v14.25h-38.69zM770.61 331.06v46.83h18.33V316.8h-18.33v14.26zM825.59 316.8V377.89h18.33V316.8h-18.33zM811.34 377.89h38.69v14.25h-38.69zM755.73 216v24.98a7.13 7.13 0 0 1-14.23-.55V216a7.12 7.12 0 0 1 12.16-5l.17.17a7.1 7.1 0 0 1 1.9 4.32c-.01.14 0 .33 0 .51zM871.34 218.03v24.44a7.12 7.12 0 0 1-12.16 5l-.2-.21a7.11 7.11 0 0 1-1.89-4.83v-24.4a7.13 7.13 0 0 1 14.25 0zM741.47 217.02v18.83a27.55 27.55 0 0 0-13.54 6.53 32 32 0 0 0-8.06 11.82 60 60 0 0 0-4 18 103.14 103.14 0 0 0 1.13 24.2h-20.33a139 139 0 0 1 .53-29.21 77.51 77.51 0 0 1 6.54-23.15c5.9-12.37 14.29-19.09 21.66-22.73a40 40 0 0 1 16.07-4.29z"
  }), React.createElement("path", {
    d: "M700.74 329.02s-20.46-19.7-4.12-33.27h20.29s2.16 33.27-16.17 33.27z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M700.74 329.02s-20.46-19.7-4.12-33.27h20.29s2.16 33.27-16.17 33.27zM771.63 210.91h69.23v52.94h-69.23zM770.61 316.8h18.33v14.25h-18.33zM770.61 343.27h18.33v18.33h-18.33zM770.61 371.78h18.33v6.11h-18.33zM825.59 316.8h18.33v14.25h-18.33zM825.59 343.27h18.33v18.33h-18.33zM825.59 371.78h18.33v6.11h-18.33zM741.47 217.02v18.83a27.55 27.55 0 0 0-13.54 6.53l-2.53-21a40 40 0 0 1 16.07-4.36zM719.88 254.2a60 60 0 0 0-4 18l-18.7-5a77.51 77.51 0 0 1 6.54-23.15z",
    opacity: 0.3
  }), React.createElement("path", {
    d: "M871.02 217.02v18.83a27.55 27.55 0 0 1 13.54 6.53 32 32 0 0 1 8.06 11.82 60 60 0 0 1 4 18 103.14 103.14 0 0 1-1.13 24.2h20.36a139 139 0 0 0-.51-29.17 77.51 77.51 0 0 0-6.54-23.15c-5.9-12.37-14.29-19.09-21.66-22.73a40 40 0 0 0-16.12-4.33z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M911.75 329.02s20.46-19.7 4.12-33.27h-20.29s-2.16 33.27 16.17 33.27z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M911.75 329.02s20.46-19.7 4.12-33.27h-20.29s-2.16 33.27 16.17 33.27zM871.02 217.02v18.83a27.55 27.55 0 0 1 13.54 6.53l2.53-21a40 40 0 0 0-16.07-4.36zM892.62 254.2a60 60 0 0 1 4 18l18.7-5a77.51 77.51 0 0 0-6.54-23.15z",
    opacity: 0.3
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M794.03 188.51h24.43v1.69h-24.43zM858.96 213.21v34.1a7.11 7.11 0 0 1-1.89-4.83v-24.45a7.09 7.09 0 0 1 1.89-4.82zM755.7 215.45v25.53a7.1 7.1 0 0 1-1.9 4.32v-34.17a7.1 7.1 0 0 1 1.9 4.32zM760.43 280.15h91.63v1.21h-91.63zM758.39 306.62h44.8v.93h-44.8zM807.27 306.62h44.8v.93h-44.8z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M763.39 63.05h7.01v60.3h-7.01zM843.79 63.05h7.01v60.3h-7.01z"
  }), React.createElement("circle", {
    cx: 766.66,
    cy: 63.52,
    r: 7.95,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 766.66,
    cy: 63.05,
    r: 7.95,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 847.53,
    cy: 63.52,
    r: 7.95,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 847.53,
    cy: 63.05,
    r: 7.95,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M598.9 247.78s23.26 45.65 4.31 70.63 1.72 93 1.72 93",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M605.79 233.57c0 8.8-6.46 15.93-6.46 15.93s-6.46-7.13-6.46-15.93 6.47-15.94 6.47-15.94 6.45 7.14 6.45 15.94z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M610.96 247.78s-23.26 45.65-4.31 70.63-1.72 93-1.72 93",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M604.07 233.57c0 8.8 6.46 15.93 6.46 15.93s6.46-7.13 6.46-15.93-6.46-15.94-6.46-15.94-6.46 7.14-6.46 15.94z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M620.43 247.78s23.26 45.65 4.31 70.63 1.72 93 1.72 93",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M627.34 233.57c0 8.8-6.46 15.93-6.46 15.93s-6.46-7.13-6.46-15.93 6.44-15.94 6.44-15.94 6.48 7.14 6.48 15.94zM623.7 270.15c-6.1 6.34-15.7 7-15.7 7s.29-9.62 6.39-16 15.7-7 15.7-7-.29 9.65-6.39 16zM624.34 301.63c-6.1 6.34-15.7 7-15.7 7s.29-9.62 6.39-16 15.7-7 15.7-7-.32 9.67-6.39 16zM591.22 318.97c5.77 6.65 5.57 16.27 5.57 16.27s-9.55-1.15-15.32-7.8-5.57-16.27-5.57-16.27 9.55 1.15 15.32 7.8zM596.57 251.81c7.34 4.86 9.71 14.19 9.71 14.19s-9.52 1.44-16.85-3.42-9.71-14.19-9.71-14.19 9.52-1.45 16.85 3.42z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M632.49 247.78s-23.26 45.65-4.31 70.63-1.72 93-1.72 93",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M625.6 233.57c0 8.8 6.46 15.93 6.46 15.93s6.46-7.13 6.46-15.93-6.46-15.94-6.46-15.94-6.46 7.14-6.46 15.94zM627.46 270.82c-6.18 6.27-6.58 15.88-6.58 15.88s9.61-.55 15.79-6.82 6.58-15.88 6.58-15.88-9.62.56-15.79 6.82zM639.57 314.43c-6.18 6.27-6.58 15.88-6.58 15.88s9.61-.55 15.79-6.82 6.56-15.86 6.56-15.86-9.59.53-15.77 6.8z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M621.75 304.84s14-22.07 33.65-22.54",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M610.85 291.52s-14-22.07-33.65-22.54",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M609.03 323.01s14-22.07 33.65-22.54",
    fill: "none",
    stroke: "#ffd037",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("circle", {
    cx: 654.75,
    cy: 282.14,
    r: 3.63,
    fill: "#ffd037"
  }), React.createElement("circle", {
    cx: 577.54,
    cy: 269.12,
    r: 3.63,
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M619.34 330.28s-14-22.07-33.65-22.54",
    fill: "none",
    stroke: "#fc6681",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("circle", {
    cx: 586.02,
    cy: 307.88,
    r: 3.63,
    fill: "#fc6681"
  }), React.createElement("circle", {
    cx: 642.94,
    cy: 300.61,
    r: 3.63,
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M696.7 384.92s-33.73-6.75-42.73-15.74-49.48-24.74-54-13.49-60.72 49.48-22.49 56.22 90 9 101.2 4.5 18.02-31.49 18.02-31.49z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M577.51 407.73c38.23 6.75 90 9 101.2 4.5 8.56-3.43 14.51-19.88 16.87-27.54l1.12.23s-6.75 27-18 31.48-63 2.25-101.2-4.5c-11-1.95-14.19-6.52-13-12.31.95 3.79 4.84 6.69 13.01 8.14z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1061.05 255.84s8.08 10.57-3.73 26.53-21.55 29.43-17.62 39.38c0 0 17.82-29.64 32.33-30.05s4.98-18.07-10.98-35.86z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M1061.05 255.84a13.09 13.09 0 0 1 1.65 3.31c14.15 16.63 21.7 32.15 8.09 32.54-12.67.36-27.88 23-31.52 28.75a12.28 12.28 0 0 0 .43 1.3s17.82-29.64 32.33-30.05 4.98-18.06-10.98-35.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1076.07 269.31c0 3.72-.42 6.74-.93 6.74s-.93-3-.93-6.74.52-2 1-2 .86-1.68.86 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1081.23 273.75c-3.27 1.78-6.11 2.86-6.36 2.4s2.2-2.26 5.47-4 2-.48 2.22 0 1.94-.18-1.33 1.6z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1018.34 255.84s-8.08 10.57 3.73 26.53 21.55 29.43 17.62 39.38c0 0-17.82-29.64-32.33-30.05s-4.96-18.07 10.98-35.86z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M1018.34 255.84a13.09 13.09 0 0 0-1.65 3.31c-14.15 16.63-21.7 32.15-8.09 32.54 12.67.36 27.88 23 31.52 28.75a12.28 12.28 0 0 1-.43 1.3s-17.82-29.64-32.33-30.05-4.96-18.06 10.98-35.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1003.34 269.31c0 3.72.42 6.74.93 6.74s.93-3 .93-6.74-.52-2-1-2-.86-1.68-.86 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M998.17 273.75c3.27 1.78 6.11 2.86 6.36 2.4s-2.2-2.26-5.47-4-2-.48-2.22 0-1.93-.18 1.33 1.6z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1005.9 320.37s22.6-.7 29.41-5.55 34.76-10.64 36.45-2.86 34 38.68 8.45 38.89-59.28-4-66.08-8.11-8.23-22.37-8.23-22.37z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M1080.67 348.14c-25.51.21-59.28-4-66.08-8.11-5.18-3.15-7.24-14.47-7.93-19.69h-.75s1.43 18.23 8.23 22.37 40.57 8.32 66.08 8.11c7.36-.06 9.91-2.68 9.77-6.56-1.03 2.37-3.84 3.84-9.32 3.88z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M834.35 116.68l70.634-22.067 2.684 8.59-70.633 22.068z"
  }), React.createElement("path", {
    d: "M936.43 428.94s-38.72-7.74-49.05-18.07-56.79-28.4-62-15.49-69.7 56.79-25.82 64.54 103.26 10.33 116.17 5.16 20.7-36.14 20.7-36.14z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M799.6 455.12c43.89 7.74 103.26 10.33 116.17 5.16 9.83-3.93 16.66-22.82 19.36-31.62l1.29.27s-7.74 31-20.65 36.14-72.28 2.58-116.17-5.16c-12.67-2.24-16.29-7.49-14.93-14.13 1.09 4.34 5.5 7.68 14.93 9.34z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1060.08 156.7a11.38 11.38 0 0 0-3.2-4.44c-10.39-9.47-27.2-6.6-40.1-12.38-3-1.33-6-3.18-9.25-2.67-4.51.71-8.7 5.84-12.63 3.56l.28.86-.28-.15 2.89 8.8c1.11 3.38 2.28 6.86 4.44 9.67a25.32 25.32 0 0 0 6.12 42.11l.4.89.37.16a29.56 29.56 0 0 1 1.91 6.13c-3.34.46-9.17 4.16-14.91 9.62l-11.47-.39a37.5 37.5 0 0 1-20.6-7l-34.29-24.65a11.48 11.48 0 0 0-6.57 2.9c-4.26-4.44-7.87-9.07-7.56-11.79 0 0-15.95-29.84-21.74-14.92s10.87 30.56 10.87 30.56l10.58 13.7a57.63 57.63 0 0 0-.79 7.26c13 14.92 58.71 28.42 58.71 28.42l7.12.34v.35a24.24 24.24 0 0 0-.64 5.7v1.42c.36 23.8 3.62 96.64 3.62 96.64.63-.28 1.29-.54 2-.79l-.51 6.47s-30.44 4.26-52.91 12.79-23.19 18.48-23.19 18.48v87.78c-6.42 3.29-16.55 7.62-21.74 5.31-5.64-2.51-8.74-.4-9.3 1.8a2.8 2.8 0 0 0 0 1.33 2.38 2.38 0 0 0 .22.56 2.26 2.26 0 0 0 .38.5c2.17 2.13 49.29 20.61 60.16 17.76a7.51 7.51 0 0 0 1-.33l.3-.15c.2-.09.4-.19.59-.3s.21-.15.32-.22.33-.21.48-.34.2-.18.3-.27.28-.25.41-.38.18-.21.27-.31.25-.28.36-.43.16-.23.23-.34.22-.32.32-.49.13-.24.2-.36.2-.36.28-.54.11-.25.16-.37.17-.4.25-.6l.13-.37c.08-.22.15-.44.22-.66l.1-.35c.07-.24.13-.48.19-.73l.07-.33c.06-.26.11-.53.16-.79v-.3c0-.29.09-.57.13-.86v-.25c0-.31.07-.62.09-.94v-.2q0-.51.06-1v-.14V485.88a59.5 59.5 0 0 0-1.4-12.6l2.63-74.78a407.79 407.79 0 0 0 42.78-1.5l1.56 35.68s0 23.45 8 34.11c6.82 9.12 14.71 49.46 16.84 60.91-2.93 5.59-8.53 12.49-18.29 12.28 0 0-18.36-1.59-17.32 3.46a2.6 2.6 0 0 0 .12.39 3.59 3.59 0 0 0 .2.42c.07.13.16.26.25.4l.06.08c.11.15.22.3.36.46l.4.44.12.12c.16.16.34.33.53.51 9.42 8.53 64.51 9.95 64.51 9.95v-.19-.2c0-2.47-.36-15.42-3.66-25.16h.76s-8-71.77-14.5-80.3c0 0-1.73-37.84 2.18-61.56l.72-.26c18.27-6.82 19.57-23.63 17.69-36 3.46 1.11 5.51 1.87 5.51 1.87s-.06-.54-.18-1.49l.18.07s-.35-2.26-.92-5.78c-1.31-9.68-3.84-26.6-6.54-34.59-.44-1.76-.85-3.26-1.24-4.4a75.12 75.12 0 0 1-3.19-14.76 174.94 174.94 0 0 1-1.12-19.57 187.88 187.88 0 0 1 2-26.11c1.11-7.55 2.1-16.14 2-22.14a29.52 29.52 0 0 0-.44-6.24c-1-4.43-5.24-7.31-9.68-9.14-.29-.12-.58-.21-.87-.32.11-1.68.25-3.58.43-5.59a4.77 4.77 0 0 0 3.69.75c1.91-.42 3.28-2 4.5-3.51 6.42-7.89 13-16.11 15.49-25.91a56 56 0 0 0 1.36-13.34v-.74a14.51 14.51 0 0 0-.53-4.9z",
    transform: "translate(-37.66 -65.37)",
    fill: "url(#prefix__e)"
  }), React.createElement("path", {
    d: "M963.93 129.79s9.73 14.6 7.65 21.55 22.94 2.78 22.94 2.78.7-27.11 5.56-33.37-36.15 9.04-36.15 9.04zM899.63 139.18s-20.16-16.68-19.47-22.94c0 0-15.29-29.2-20.86-14.6s10.44 29.89 10.44 29.89l19.47 25.72z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M879.12 400.91s-18.78 11.82-26.41 8.35-10.43 2.09-8.34 4.17 47.27 20.16 57.7 17.38 5.12-25.55 5.12-25.55zM978.53 451.63s-4.52 19.12-20.16 18.77c0 0-23.64-2.09-14.6 6.26s61.87 9.73 61.87 9.73 0-28.5-9.73-34.76-17.38 0-17.38 0z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M950.03 316.8l2.09 48.66s0 22.94 7.65 33.37 16.68 62.57 16.68 62.57h26.42s-7.65-70.21-13.9-78.56c0 0-2.78-61.87 7-75.77z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M950.03 316.8l2.09 48.66s0 22.94 7.65 33.37 16.68 62.57 16.68 62.57h26.42s-7.65-70.21-13.9-78.56c0 0-2.78-61.87 7-75.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1004.95 273s16 38.23-13.21 49.36-82 9.73-82 9.73l-2.78 80.64s-32.67 4.17-33.37-6.26v-88.28s.7-9.73 22.25-18.07 50.71-12.49 50.71-12.49l1.39-18.07z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M979.34 147.05a33.27 33.27 0 0 1 16.33 2.31c4.26 1.79 8.36 4.61 9.29 8.94 1.1 5.13-.12 16.64-1.52 26.37a181.63 181.63 0 0 0-.85 46.09c.72 6.39 1.71 12 3.06 14.44 4.17 7.65 8.34 43.8 8.34 43.8s-45.88-17.38-68.82-7c0 0-3.13-71.26-3.48-94.54-.27-18 22.59-38.58 30.24-39.28 4.48-.37 2.95-.67 7.41-1.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M979.34 145.63a33.27 33.27 0 0 1 16.33 2.31c4.26 1.79 8.36 4.61 9.29 8.94 1.1 5.13-.12 16.64-1.52 26.37a181.63 181.63 0 0 0-.85 46.09 74.75 74.75 0 0 0 3.06 14.44c3.13 9.38 8.34 43.8 8.34 43.8s-45.88-17.38-68.82-7c0 0-3.13-71.26-3.48-94.54-.27-18 22.59-38.58 30.24-39.28 4.48-.34 2.95-.64 7.41-1.13z",
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M991.74 184.02l-49.4-2.78s-3.14-24.2 4-23.95l48.85 1.7s10.46 12.51-3.45 25.03z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M991.74 182.63l-56.31-2.78s-43.79-13.22-56.31-27.81c0 0 .7-25.72 14.6-27.11l32.89 24.12a35.51 35.51 0 0 0 19.73 6.85l48.85 1.7s10.46 12.51-3.45 25.03z",
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M994.17 132.92c.83-6.59 3.82-8.78 5.91-11.47 4.87-6.26-36.15 9-36.15 9a73.74 73.74 0 0 1 5.54 10.23 24.92 24.92 0 0 0 10.44 2.28c6.06.04 9.94-6.47 14.26-10.04z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 979.92,
    cy: 117.28,
    r: 25.03,
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M964.12 99.74c-2.67-2.91-3.95-6.79-5.16-10.55l-2.77-8.61c3.77 2.23 7.79-2.79 12.11-3.48 3.1-.5 6 1.31 8.87 2.62 12.37 5.66 28.49 2.85 38.46 12.12a11.12 11.12 0 0 1 3.07 4.34 14.54 14.54 0 0 1 .56 4.9 55.83 55.83 0 0 1-1.3 13.05c-2.37 9.59-8.69 17.63-14.85 25.35-1.17 1.47-2.48 3-4.32 3.43-3.58.8-6.35-3.07-7.73-6.46a68.75 68.75 0 0 1-4-14 18.28 18.28 0 0 0-1.72-5.82c-2.15-3.82-7.46-7.43-10.69-10.39s-7.57-3.26-10.53-6.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M964.12 99.04c-2.67-2.91-3.95-6.79-5.16-10.55l-2.77-8.61c3.77 2.23 7.79-2.79 12.11-3.48 3.1-.5 6 1.31 8.87 2.62 12.37 5.66 28.49 2.85 38.46 12.12a11.12 11.12 0 0 1 3.07 4.34 14.54 14.54 0 0 1 .56 4.9 55.83 55.83 0 0 1-1.3 13.05c-2.37 9.59-8.69 17.63-14.85 25.35-1.17 1.47-2.48 3-4.32 3.43-3.58.8-6.35-3.07-7.73-6.46a68.75 68.75 0 0 1-4-14 18.28 18.28 0 0 0-1.65-5.9c-2.15-3.82-7.46-7.43-10.69-10.39s-7.64-3.18-10.6-6.42z",
    fill: "#632652"
  }), React.createElement("ellipse", {
    cx: 986.53,
    cy: 120.07,
    rx: 2.09,
    ry: 4.52,
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M999.04 240.63s-1.39 4.17-8.34 3.48-27.11-2.09-27.11 0",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M943.77 475.99a5.89 5.89 0 0 1-2-2.9c-.18.9.38 2.08 2 3.6 9 8.34 61.87 9.73 61.87 9.73v-.7c-.3 0-52.86-1.41-61.87-9.73zM902.06 429.42c-10.43 2.78-55.61-15.29-57.7-17.38a2.26 2.26 0 0 1-.58-1 2.5 2.5 0 0 0 .58 2.41c2.09 2.09 47.27 20.16 57.7 17.38 5.37-1.43 6.56-8.16 6.46-14.35-.09 5.75-1.49 11.61-6.46 12.94z",
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M735.05 146.85s-60.54-17.93-64.54 33.07 16 135 0 162-73.09 66-43 69.5 45 8.5 36 26.5-56 35-46 48 15 29 5 45-45 26-39 37 28 17 17 29-42.89 39.3-30.44 39.15",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 3
  }), React.createElement("path", {
    d: "M543.16 548.07a298.41 298.41 0 0 1-4.48-41A55 55 0 0 0 500 456.8c-3.95-1.21-8.3-2.35-13.11-3.37-42.13-8.95-54.93-1.14-56.38-.11a54 54 0 0 1-3.19-7c-.07-.24-.14-.49-.21-.74a53.93 53.93 0 0 0 14.41-32.49c7-7.13 11.13-15.72 11.13-25 0-8-3-15.43-8.36-21.9v-12.51A54.71 54.71 0 0 0 389.58 299h-4.44a54.71 54.71 0 0 0-54.71 54.71v13.56a34 34 0 0 0-7.56 20.9c0 9.06 3.94 17.49 10.7 24.53a53.94 53.94 0 0 0 15 33.55c.3 2.05.6 4.27.9 6.6l-75.37 15.94s-29.06 1.19-47.77 39.81c-15.82 32.65-47.33 116.69-56.65 141.7-1.69 4.53-2.64 7.13-2.64 7.13s.31-.31.9-.84L167 659s.46-.46 1.33-1.22c-1.32 10.47-1.51 28.44 12.21 30.68 11.5 1.88 41.11 2.65 63.49 3h1.55c14.83.2 26.11.2 26.11.2v-.2h240.67V689a16.59 16.59 0 0 0-1.33-6.52l.34-.4a13.21 13.21 0 0 1 2.5 5.79 5.79 5.79 0 0 1-.11.61l.14-.37a6.2 6.2 0 0 1-.14 2s30.87-79.55 30.54-127a80.47 80.47 0 0 0-1.14-15.04zm-192.44-84.52a55.19 55.19 0 0 1-.76-6.86v-.06c.26 2.23.52 4.55.76 6.92zm-93.53 170.87v19l-11.88 2.54z",
    transform: "translate(-37.66 -65.37)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M348.47 241.26a54.71 54.71 0 0 1 54.7 54.74v23.3H293.76V296a54.71 54.71 0 0 1 54.71-54.71z",
    fill: "#e14b5a"
  }), React.createElement("ellipse", {
    cx: 348.85,
    cy: 326.96,
    rx: 62.36,
    ry: 42.85,
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M308.87 368.46s13 68.09 0 86.46 39.79 25.63 39.79 25.63l54.68-19.92 7.65-49s-33.28-18.75-26.4-56.62zM470.34 597.99s3.44 14.92-15.3 17.6a106 106 0 0 1-33.36-.4l-4.13-37.48h43.61zM139.26 578.89s-8.28 33.64 10.47 36.74 87.61 3 87.61 3v-39.77l-31.17 6.66-29.27-28.08z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M312.89 390.46l-73.26 15.49s-27.93 1.15-45.91 38.26-57 143.08-57 143.08 33.28-33.66 72.3 2.3l26-47.05-5.68 74.58h201.57v-35.2s42.08 22.57 39 35.2c0 0 36-92.78 28.26-134.95a286.78 286.78 0 0 1-4.3-39.45 52.85 52.85 0 0 0-37.19-48.26c-3.8-1.17-8-2.26-12.6-3.24-43.23-9.18-54.32 0-54.32 0s-8.37 27.25-8.22 39.59c.19 15.88-22.57 26.4-22.57 26.4s-33.66-8-35.2-14.54-13.56-44.56-10.88-52.21z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M312.89 388.93l-73.26 15.49s-27.93 1.15-45.91 38.26-57 143.08-57 143.08 33.28-33.66 72.3 2.3l26-47.05-5.68 74.62h201.57v-35.2s42.08 22.57 39 35.2c0 0 36-92.78 28.26-134.95a286.78 286.78 0 0 1-4.3-39.45 52.85 52.85 0 0 0-37.19-48.26c-3.8-1.17-8-2.26-12.6-3.24-43.23-9.18-54.32 0-54.32 0s-8.37 27.25-8.22 39.59c.19 15.88-22.57 26.4-22.57 26.4s-33.66-8-35.2-14.54-13.56-44.6-10.88-52.25z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M387.76 385.63a51.78 51.78 0 0 1-2-27.16l-75.75 13.39s1.09 5.72 2.33 14.3a52 52 0 0 0 75.41-.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M400.69 346.63a52.004 52.004 0 0 1-104 1.26v-1.26a52 52 0 0 1 29.17-46.75q2.34-1.14 4.81-2.06a52.4 52.4 0 0 1 26.8-2.49 52 52 0 0 1 43.15 47.85q.07 1.74.07 3.45z",
    fill: "#f7c4a7"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M330.53 299.06h.07q-2.47.91-4.81 2.06a52 52 0 0 0-29.17 46.75v1.26a11.56 11.56 0 0 0 4.67-1.12c12.69-5.92 20.29-24 23.28-36.66 1.1-4.57 2.12-9.66 5.96-12.29z"
  }), React.createElement("path", {
    d: "M370.34 300.53a51.6 51.6 0 0 0-12.93-4 16.69 16.69 0 0 1 9.29 5.83 23.79 23.79 0 0 1 2.84 5.07 52.17 52.17 0 0 0-43.76.91c3.27 7.16 13.39 11.06 20.15 13.68q11.1 4.29 22.47 7.84l-6.69-5.43 15.11 2.4a26.17 26.17 0 0 0-1.05-8.91c2.88 2.33 6.73 3.11 9.87 5.1 5.89 3.71 8.34 10.87 11.55 17a11 11 0 0 0 3.37 4.32 52 52 0 0 0-30.22-43.81z"
  })), React.createElement("path", {
    d: "M330.53 297.89h.07q-2.47.91-4.81 2.06a52 52 0 0 0-29.16 46.68v1.26a11.56 11.56 0 0 0 4.67-1.12c12.69-5.92 20.29-24 23.28-36.66 1.09-4.48 2.11-9.6 5.95-12.22z",
    fill: "#632652"
  }), React.createElement("path", {
    d: "M370.34 299.35a51.6 51.6 0 0 0-12.93-4 16.69 16.69 0 0 1 9.29 5.83 23.79 23.79 0 0 1 2.84 5.07 52.17 52.17 0 0 0-43.76.91c3.27 7.16 13.39 11.06 20.15 13.68q11.1 4.29 22.47 7.84l-6.69-5.43 15.11 2.4a26.17 26.17 0 0 0-1.05-8.91c2.88 2.33 6.73 3.11 9.87 5.1 5.89 3.71 8.34 10.87 11.55 17a11 11 0 0 0 3.37 4.32 52 52 0 0 0-30.22-43.81z",
    fill: "#632652"
  }), React.createElement("path", {
    d: "M290.7 338.07s53.56-66.56 115.53 0l-5.36-14.92s-29.07-42.46-49.73-33.28-40.93 15.68-40.93 15.68z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M290.7 336.9s53.56-66.56 115.53 0l-5.36-14.92s-29.07-42.46-49.73-33.28-40.93 15.68-40.93 15.68z",
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M246.71 480.36s-11.48 30.6 4.59 58.15-14.15 39-14.15 39M432.63 452.81s19.89 25.25 6.89 47.82-12.24 76.89-12.24 76.89",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M229.11 600.1h221.12a18.36 18.36 0 0 1 18.36 18.36H210.75a18.36 18.36 0 0 1 18.36-18.36z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M262.37 473.86H417a39 39 0 0 1 39 39v91.45H223.37v-91.45a39 39 0 0 1 39-39z",
    fill: "#535461"
  }), React.createElement("circle", {
    cx: 339.48,
    cy: 544.82,
    r: 13.77,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M293.76 306.86s52.64-52.61 109.41-1",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#6a5c99",
    d: "M411.19 303.52h5.29v29.96h-5.29z"
  }), React.createElement("path", {
    d: "M404.14 322.9a18.21 18.21 0 0 1 18.21 18.21v1.17a18.21 18.21 0 0 1-18.21 18.21V322.9z",
    fill: "#ffd037"
  }), React.createElement("rect", {
    x: 400.61,
    y: 321.14,
    width: 8.22,
    height: 41.12,
    rx: 4.11,
    ry: 4.11,
    fill: "#6a5c99"
  }), React.createElement("path", {
    fill: "#6a5c99",
    d: "M285.21 334.06h-5.29V304.1h5.29z"
  }), React.createElement("path", {
    d: "M292.25 361.09a18.21 18.21 0 0 1-18.21-18.21v-1.17a18.21 18.21 0 0 1 18.21-18.21v37.6z",
    fill: "#ffd037"
  }), React.createElement("rect", {
    x: 325.22,
    y: 387.09,
    width: 8.22,
    height: 41.12,
    rx: 4.11,
    ry: 4.11,
    transform: "rotate(-180 310.5 374.97)",
    fill: "#6a5c99"
  }), React.createElement("path", {
    d: "M410.56 271.49c-7.16-14.86-22.75-32.86-56.36-34.32h-.4l-11.91.57v.06c-33.39 1.54-48.9 19.46-56 34.3a77.16 77.16 0 0 0-7.38 32.12l4.11-.1 4.11-.09a70 70 0 0 1 6.61-28.64c9.06-18.61 25.74-28.52 49.56-29.43l10.53-.58c23.82.91 40.5 10.81 49.56 29.43a70 70 0 0 1 6.69 28.62l4.11.09 4.11.1a77.16 77.16 0 0 0-7.34-32.13z",
    fill: "#ffd037"
  }), React.createElement("path", {
    fill: "#d6d6e3",
    d: "M37.61 618.7h560.78v150.56H37.61z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M37.61 628.84h560.78v19.54H37.61z"
  }), React.createElement("path", {
    fill: "#d6d6e3",
    d: "M0 616.53h636v19.54H0z"
  }), React.createElement("path", {
    d: "M435.51 567.92s24 44 84 32 31 111 31 111-9.82 58.68-2.91 58.34",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 3
  }));
};

UndrawFirmware.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFirmware;