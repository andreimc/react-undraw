function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBibliophile = _props => {
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
    viewBox: "0 0 1078.5 780.36",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 600,
    y1: 724.97,
    x2: 600,
    y2: 197.23,
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
    x1: 906.56,
    y1: 809.07,
    x2: 906.56,
    y2: 164.43,
    gradientTransform: "matrix(-1 0 0 1 1767 0)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M930.93 447.66c-34.1 55.77-28.07 131.52-13.46 191.25 4.89 20 10.54 41.09 6.19 63.5-5.32 27.4-24.38 49-43.63 61.36-35.1 22.55-75.06 22.09-104-1.19-25.05-20.12-41.45-55.32-67-74.35-42.81-31.85-101.77-12.18-153.06 18-36.29 21.34-76.23 48.35-109.6 33.3-23.48-10.59-38-40.69-44.73-73.49-3.24-15.83-5.16-33.13-12.69-45.18-4.48-7.16-10.66-11.94-17.07-15.85-58.51-35.67-138-5.3-194.39-45.73-38.09-27.31-59.58-83.94-66.45-144.57s-.79-125.58 6.79-189.53c5.42-45.44 12.7-94.1 36.34-131.15 25-39.19 64.24-56.81 98.26-53.3s63.48 25.34 88.84 52c31.7 33.32 60.22 75.93 101.38 86.54 28 7.23 58.72-1.41 88.55-6.35 49.87-8.26 99-6.16 147.76-3.35 46.69 2.69 93.67 6.11 137.12 22.63 30.75 11.69 54.28 36.2 82.95 52.08 18.69 10.35 39.82 11.58 57.22 25.42 21.43 17 39.9 48.6 31.12 88.61-8.35 38.05-38.35 59.76-56.44 89.35z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M294.3 277.3s-147.14-32.9 40.08-225.39c0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M294.3 277.3c-3.23-.72-144-36.15 40.08-225.39 0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z",
    fill: "#fff",
    opacity: 0.4
  }), React.createElement("path", {
    d: "M296.25 278.4s77.72-117.08 38.15-226.48",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M899.61 390.99s-25.36-102.11 13.07-174.81c16.14-30.51 22.55-65.27 17.16-99.36a268.09 268.09 0 0 0-12.14-47.5",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M941.65 23.36c-.53 12.36-24.44 47.23-24.44 47.23S896.37 33.8 896.9 21.44a22.4 22.4 0 0 1 44.75 1.92zM975.71 93.39c-7.16 10.09-46.19 26.37-46.19 26.37s2.5-42.21 9.66-52.3a22.4 22.4 0 1 1 36.52 25.93zM969.08 210.29c-11.27 5.09-53.18-.55-53.18-.55s23.47-35.17 34.74-40.27a22.4 22.4 0 0 1 18.44 40.82zM944.15 297.61c-10.25 6.92-52.51 8.44-52.51 8.44s17.19-38.63 27.44-45.56a22.4 22.4 0 0 1 25.07 37.12zM882.44 120.18c8.49 9 49.41 19.68 49.41 19.68S923.49 98.41 915 89.42a22.4 22.4 0 0 0-32.56 30.76zM854.58 222.63c10.8 6 53 4 53 4s-20.33-37.06-31.14-43.09a22.4 22.4 0 0 0-21.86 39.09zM841.17 325.96c9.62 7.77 51.59 12.9 51.59 12.9s-13.82-40-23.44-47.74a22.4 22.4 0 0 0-28.15 34.84z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M941.65 23.36c-.53 12.36-24.44 47.23-24.44 47.23S896.37 33.8 896.9 21.44a22.4 22.4 0 0 1 44.75 1.92zM975.71 93.39c-7.16 10.09-46.19 26.37-46.19 26.37s2.5-42.21 9.66-52.3a22.4 22.4 0 1 1 36.52 25.93zM969.08 210.29c-11.27 5.09-53.18-.55-53.18-.55s23.47-35.17 34.74-40.27a22.4 22.4 0 0 1 18.44 40.82zM944.15 297.61c-10.25 6.92-52.51 8.44-52.51 8.44s17.19-38.63 27.44-45.56a22.4 22.4 0 0 1 25.07 37.12zM882.44 120.18c8.49 9 49.41 19.68 49.41 19.68S923.49 98.41 915 89.42a22.4 22.4 0 0 0-32.56 30.76zM854.58 222.63c10.8 6 53 4 53 4s-20.33-37.06-31.14-43.09a22.4 22.4 0 0 0-21.86 39.09zM841.17 325.96c9.62 7.77 51.59 12.9 51.59 12.9s-13.82-40-23.44-47.74a22.4 22.4 0 0 0-28.15 34.84z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M806.77 325.04s106.36-89.13 130-134.08 53.77-83.67 53.77-83.67",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M976.59 207.75l-46-10.38s10.84 48.54 46 10.38z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M906.25 158.18l26.48 39.66s-51.74 3.76-26.48-39.66zM994.69 170.47l-42.06-7.38s26.43 40.19 42.06 7.38zM932.49 135.04l20.76 27.14s-36.75 3.46-20.76-27.14zM974.39 129.63s35.85 1.71 40 5.13-5.34 23.48-19 20.21-21-25.34-21-25.34zM960.07 97.62s14.63 26.66 14.08 31.73-22.29 10.77-26.69-8.45 12.61-23.28 12.61-23.28z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 1059.3,
    cy: 171.73,
    r: 10,
    transform: "rotate(-72.43 988.046 183.315)",
    fill: "#ffd037"
  }), React.createElement("circle", {
    cx: 1043.65,
    cy: 161.53,
    r: 10,
    transform: "rotate(-72.43 972.397 173.115)",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M328.86 347.92s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M288.7 347.92s-10.83-77-39.83-124a100.81 100.81 0 0 1-12.19-30.74c-9.69-42.63 4.13-87.21 35.44-117.72l45.75-44.57",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M418.41 90.87s9.88 12.92-4.56 32.42-26.34 36-21.53 48.12c0 0 21.78-36.22 39.51-36.73s6.08-22.03-13.42-43.81z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M418.41 90.87a16 16 0 0 1 2 4.05c17.3 20.32 26.51 39.29 9.89 39.77-15.49.44-34.07 28.14-38.52 35.13a15 15 0 0 0 .53 1.59s21.78-36.22 39.51-36.73 6.09-22.03-13.41-43.81z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M436.77 107.33c0 4.55-.51 8.23-1.14 8.23s-1.14-3.69-1.14-8.23.64-2.41 1.27-2.41 1.01-2.13 1.01 2.41z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M443.07 112.76c-4 2.18-7.47 3.49-7.77 2.94s2.69-2.76 6.68-4.94 2.42-.59 2.72 0 2.36-.18-1.63 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M366.25 90.87s-9.88 12.92 4.56 32.42 26.34 36 21.53 48.12c0 0-21.78-36.22-39.51-36.73s-6.1-22.03 13.42-43.81z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M366.25 90.87a16 16 0 0 0-2 4.05c-17.3 20.32-26.51 39.29-9.89 39.77 15.49.44 34.07 28.14 38.52 35.13a15 15 0 0 1-.53 1.59s-21.81-36.23-39.54-36.72-6.08-22.04 13.44-43.82z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M347.87 107.33c0 4.55.51 8.23 1.14 8.23s1.14-3.69 1.14-8.23-.64-2.41-1.27-2.41-1.01-2.13-1.01 2.41z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M341.57 112.76c4 2.18 7.47 3.49 7.77 2.94s-2.69-2.76-6.68-4.94-2.42-.59-2.72 0-2.36-.18 1.63 2z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1139.25 705.61l-87.61-385.48h-32.55c-1.3-14.73-2.17-29-2.5-42.44 0 0-118 25.82-212.1-48.88s-204.73 6.46-204.73 6.46l-.43-.31v-.15.19c-7.68-5.44-113.66-78.07-204.27-6.13-94.06 74.7-212.1 48.88-212.1 48.88-.33 13.61-1.21 28-2.54 42.87h-30.2L60.75 707s363.7 13.62 491.15 1.06c4.57 9.66 24.27 16.92 47.87 16.92 26.52 0 48.09-9.17 48.84-20.6 99.21 7.55 312.69 19.62 490.64 1.23z",
    transform: "translate(-60.75 -59.82)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M98.84 263.7L11.25 642.04s482.17 18.06 521-7.22c0 0 299.33 30.25 535 5.87l-85.78-377.43z",
    fill: "#e2e2ec"
  }), React.createElement("path", {
    d: "M128.64 276.77L46.98 629.5s449.54 16.84 485.74-6.73c0 0 279.07 28.2 498.79 5.47l-80-351.89z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M947.16 221.72S831.58 247 739.48 173.86s-200.46 6.32-200.46 6.32-108.35-79.46-200.45-6.32-207.68 47.86-207.68 47.86c-3.64 147.18-72.23 385.56-72.23 385.56s126.41 34.31 293.46-35.21 186.91 24.38 186.91 24.38 19.86-93.91 186.91-24.38 293.46 35.21 293.46 35.21-68.63-238.38-72.24-385.56z",
    fill: "#f1f2fb"
  }), React.createElement("path", {
    d: "M316 599.18s152.6-34.31 223 16.25c0 0 67.72-61.4 224.83-13.54",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 539.02,
    cy: 638.88,
    rx: 47.86,
    ry: 20.77,
    fill: "#e8eaf8"
  }), React.createElement("path", {
    d: "M538.57 179.73s34.31 174.27.9 419.87",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M163.95 276.35s71.87 16.7 134.08 0 176.43-71.33 214 0M163.95 307.05s71.87 16.7 134.08 0 196.91-15.8 214 0M163.95 361.18s71.87 16.7 134.08 0 176.43-71.33 214 0M163.95 391.92s71.87 16.7 134.08 0 196.91-15.8 214 0M914.1 276.35s-71.87 16.7-134.08 0-176.43-71.33-214 0M914.1 307.05s-71.87 16.7-134.08 0-196.91-15.8-214 0M914.1 361.18s-71.87 16.7-134.08 0-176.43-71.33-214 0M914.1 391.92s-71.87 16.7-134.08 0-196.91-15.8-214 0",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    strokeWidth: 4,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M915.56 716.97c3-2.29 5.85-5 6.72-8.27a7 7 0 0 0-4.69-8.42c-4.31-1.34-8.91 1.09-12.41 3.55s-7.49 5.27-12.06 4.75c4.73-3.42 7-9 5.68-14a5.43 5.43 0 0 0-1.58-2.85c-2.39-2.09-6.73-1.19-9.59.45-9.11 5.23-11.65 15.32-11.7 24.41-.92-3.28-.14-6.69-.17-10.06s-1.15-7.09-4.63-8.9a16.55 16.55 0 0 0-7.06-1.35c-4.09-.12-8.66.21-11.45 2.66-3.47 3-2.57 8.13.45 11.47s7.62 5.44 11.85 7.75c3.23 1.76 6.49 3.81 8.47 6.59a6 6 0 0 1 .63 1.18h25.67a73.8 73.8 0 0 0 15.87-8.96z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M798.82 416.69s.25 1.44.67 4c-.22.4-.44.8-.67 1.19-8.2 13.8-9.46 33.68-8.69 50a163.6 163.6 0 0 0 6.87 38.8 181.36 181.36 0 0 1 7 50.4 36.64 36.64 0 0 0 11.48 8.36c.22.67.45 1.35.65 2a204.43 204.43 0 0 1 7.63 38.61l2.58 32.66s19.77 73.92 25.78 87.67c4.28 9.78 3.34 30 2.44 40.84-2.57 7.29-5.7 14.24-8.46 15-5 1.42-10 13.46-2.72 19.51a11.6 11.6 0 0 0 1.75 1.2l.29.16.53.27.78.35.4.15.83.28.36.11c.39.11.79.22 1.22.32a21.83 21.83 0 0 0 14.84-2.35c5.48-.82 10.35-3.76 14-6.73l-.1 5.21h6l-.28-10.41c1.08-1.21 1.68-2 1.68-2s.18-6.29.87-13.61l-.44 23.49h6l-1.62-43.35a6.92 6.92 0 0 1 1.19-1.77c5-5-3.64-21.13-8.11-23.82 2-10.6 9.63-25.91 18.43-55.26 12.89-43-3.44-85.09-3.44-85.09v-33c4.33-1.86 6.88-3.13 6.88-3.13s-6-35.24 0-60.16c3.89-16.11 4.9-30.42 1.65-44.11 4.32-14.88 7.81-26.37 7.81-26.37l6-61.88c1.53-9.29 2.56-17.24 3.22-24 .11-.84.19-1.69.23-2.53 1.1-12.59.86-21 .14-26.5a42.1 42.1 0 0 0 .36-7.61 30.05 30.05 0 0 0 .16-3.93c.86-1 1.7-2 2.5-3a43.09 43.09 0 0 0 5.39-8.6c6.61-12.47 6.8-27.7-2.43-38.69-5.68-6.77-7.45-14.06-12.36-21.27-4.49-6.6-5.34-14.51-6.42-22.11a270.73 270.73 0 0 0-5.5-28.07c-.69-2.72-4.47-4.39-6.35-6.65-3.63-4.37-14.23-4.22-20.34-5.19-10.26-1.63-21.37-3.15-30.71.88-6.5 2.81-11.17 7.92-16.25 12.43-5.47 4.85-16.67 7.19-18.41 13-1.55 2.22-1.63 5 1 8.72 2.54 3.58 6.54 6.14 10.27 8.82.48.34.93.7 1.4 1a36.52 36.52 0 0 0 19.85 38.64c-.1.65-.21 1.29-.33 1.92A115.82 115.82 0 0 1 841.8 268c-1.11 3.32-13.95 9.12-23 12.84a11.5 11.5 0 0 0-3.67-2.53c-6.88-1.72-30.08 11.17-31.8 15.47-.48 1.2.78 4.52 2.83 8.7a31 31 0 0 0 .93 5.64c-.51 8.8.41 23 4.84 45.83zm96.5 9.67c-.32-.61-.65-1.23-1-1.87-9.55-19.31-15.22-50.53-1.54-69.15 1.22.13 2.44.25 3.66.33.81 25.34.34 67 .34 67s-.54 1.4-1.46 3.69zm-34.09 147.18c1.94 9.75 4.22 21.08 6.35 31.38a82.52 82.52 0 0 1-.5 36.32L859 617l-1.88-42.65-.12-1.75q1.95-.33 3.87-.71z",
    transform: "translate(-60.75 -59.82)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M806.72 543.24a81.22 81.22 0 0 1-.49 35.75 46.25 46.25 0 0 1-2 6.55l2.28 92.7.26 10.51a52.9 52.9 0 0 0 6.4.94 29.07 29.07 0 0 0 6 0c2-.25 3.76-.85 4.7-2s1.14-3-.19-5.69a16.92 16.92 0 0 1-1.63-9.55c.08-.92.23-1.89.41-2.89 2-10.43 9.47-25.51 18.14-54.39 12.69-42.3-3.38-83.75-3.38-83.75v-38.94l-41.45-4.23s2 10.48 4.75 24.1c1.86 9.6 4.1 20.75 6.2 30.89z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M806.72 543.24a81.22 81.22 0 0 1-.49 35.75 46.25 46.25 0 0 1-2 6.55l2.28 92.7.26 10.51a52.9 52.9 0 0 0 6.4.94 29.07 29.07 0 0 0 6 0c2-.25 3.76-.85 4.7-2s1.14-3-.19-5.69a16.92 16.92 0 0 1-1.63-9.55c.08-.92.23-1.89.41-2.89 2-10.43 9.47-25.51 18.14-54.39 12.69-42.3-3.38-83.75-3.38-83.75v-38.94l-41.45-4.23s2 10.48 4.75 24.1c1.86 9.6 4.1 20.75 6.2 30.89z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M749.19 492.48a127 127 0 0 1 6.87 17.83 201.21 201.21 0 0 1 7.51 38l2.54 32.15s19.46 72.75 25.38 86.29c4.21 9.63 3.29 29.53 2.4 40.22-.36 4.34-.71 7.16-.71 7.16l8.63-10.57 11.31-13.87 5.16-6.33 1.13-1.38a52 52 0 0 1-3.3-8.83 150.93 150.93 0 0 1-5.15-28.35c-2.54-26.22-3.38-61.76-3.38-61.76l-1.34-4-8-23.91-1.85-42-.69-15.55z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M814.63 674.97a60.2 60.2 0 0 0-10.06 19.89c-2.69 9.15-7.42 23.21-11.39 24.34-5.92 1.69-11.84 18.61 3.38 22s27.92-13.54 27.92-13.54.85-29.61 5.92-34.68-4.23-22-8.46-23.69c-1.69-.69-4.55 2.11-7.31 5.68z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M791.49 738.66a20.37 20.37 0 0 0 11.88-1.08 26.55 26.55 0 0 0 16.62-22.81c.72-9.06 2.24-21.24 5.33-24.33 4-4-1-15.4-5.3-20.85a2.29 2.29 0 0 1 1.91-.3c4.23 1.69 13.54 18.61 8.46 23.69s-5.92 34.68-5.92 34.68-12.67 16.92-27.9 13.52a14 14 0 0 1-6.06-2.79c.32.1.64.19.98.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M829.2 693.69l1.63 43.7h-5.92l.82-43.67a1.68 1.68 0 0 1 1.74-1.59 1.68 1.68 0 0 1 1.73 1.56z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M829.2 693.69l1.63 43.7h-5.92l.82-43.67a1.68 1.68 0 0 1 1.74-1.59 1.68 1.68 0 0 1 1.73 1.56z",
    opacity: 0.15
  }), React.createElement("path", {
    d: "M807.02 677.51a60.2 60.2 0 0 0-10.06 19.89c-2.69 9.15-7.42 23.21-11.39 24.34-5.92 1.69-11.84 18.61 3.38 22s27.92-13.56 27.92-13.56.85-29.61 5.92-34.68-4.23-22-8.46-23.69c-1.71-.63-4.55 2.13-7.31 5.7z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M783.88 741.18a20.37 20.37 0 0 0 11.88-1.08 26.55 26.55 0 0 0 16.62-22.81c.72-9.06 2.24-21.24 5.33-24.33 4-4-1-15.4-5.3-20.85a2.29 2.29 0 0 1 1.91-.3c4.23 1.69 13.54 18.61 8.46 23.69s-5.91 34.68-5.91 34.68-12.69 16.92-27.92 13.54a14 14 0 0 1-6.06-2.79c.36.1.65.19.99.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M821.58 696.18l1.63 43.7h-5.96l.82-43.67a1.68 1.68 0 0 1 1.74-1.59 1.68 1.68 0 0 1 1.77 1.56z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M821.58 696.18l1.63 43.7h-5.96l.82-43.67a1.68 1.68 0 0 1 1.74-1.59 1.68 1.68 0 0 1 1.77 1.56z",
    opacity: 0.15
  }), React.createElement("path", {
    d: "M750.04 227.7l33.84 53.3 39.76 5.08s24.53-48.22 23.69-50.76-13.54-7.61-25.38-16.92 2.54-48.22 2.54-48.22l-38.91 3.38c.15.52.3 1 .41 1.58 1.55 6.57 1 13.86-.19 20.27a114 114 0 0 1-4.46 16.22c-1.69 5.07-31.3 16.07-31.3 16.07z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M795.72 488.25s2 10.48 4.75 24.1a194.13 194.13 0 0 0 36.71-11.72v-8.15zM749.19 492.48a127 127 0 0 1 6.87 17.83c11.77 5.31 26.41 5.16 40.34 2.79l-.69-15.55z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M739.04 363.05c-8.07 13.59-9.31 33.14-8.55 49.26a161 161 0 0 0 6.76 38.18 178.5 178.5 0 0 1 6.9 49.61c28.76 31.3 99.82-4.23 99.82-4.23s-5.92-34.68 0-59.22c4.12-17.06 5-32.09.82-46.49a73.28 73.28 0 0 0-8.43-18.65c-1.12-1.78-2.21-3.75-3.26-5.86-9.8-19.82-15.46-52.38.3-70.34a32.86 32.86 0 0 1 5.5-5c13.74-9.95 20-21 22.64-30.35a40.81 40.81 0 0 0 1-17.87c-1.69-9.31-25.38-17.77-25.38-17.77.85 27.92-34.68 51.6-34.68 51.6s-40.61-52.45-47.37-54.14-29.61 11-31.3 15.23 18.61 35.53 18.61 35.53 12.7 63.44-3.38 90.51z",
    fill: "#d39999"
  }), React.createElement("path", {
    d: "M838.87 290.3c13.74-9.95 20-21 22.64-30.35-.66-14-4-16.17-4-16.17s-27.95 27.06-25.41 36.4c.58 2.15 1 7.77 1.27 15.16a32.86 32.86 0 0 1 5.5-5.04zM791.49 483.18c5.92 17.77 35.53-13.54 36.38-27.07.54-8.66 10.09-42.61 16.89-65.94a73.28 73.28 0 0 0-8.43-18.65c-1.12-1.78-2.21-3.75-3.26-5.86-3.21 7.89-16.1 40.23-15.35 49.85.85 11-5.08 27.07-5.08 27.07s-27.07 22.83-21.15 40.6z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M859.17 243.77s9.31 5.92 0 62.6l-5.92 60.91s-22.84 75.29-23.69 88.83-30.45 44.83-36.38 27.07 21.15-40.61 21.15-40.61 5.92-16.07 5.08-27.07 16.07-51.6 16.07-51.6.85-74.44-1.69-83.75 25.38-36.38 25.38-36.38z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M733.97 237s-11 2.54 0 59.22l6.77 61.76s15.23 88.83 14.38 99 33 36.38 35.53 22-16.92-38.07-16.92-38.07-8.48-18.64-8.48-53.33l-1.69-27.92L751.73 259z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M732.25 237s-11 2.54 0 59.22l6.77 61.76s15.23 88.83 14.38 99 33 36.38 35.53 22-16.92-38.07-16.92-38.07-8.46-18.61-8.46-53.3l-1.69-27.92L750.04 259z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M726.78 239.96s-5.08 27.07 30.45 36.38-4.23-32.16-4.23-32.16-13.53-20.29-26.22-4.22z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M727.62 239.12s-5.07 27.06 30.46 36.37-4.23-32.15-4.23-32.15-13.54-20.3-26.23-4.22z",
    fill: "#d39999"
  }), React.createElement("path", {
    d: "M862.98 239.96s5.08 27.07-30.45 36.38 4.22-32.16 4.22-32.16 13.5-20.29 26.23-4.22z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M862.13 239.12s5.12 27.06-30.45 36.37 4.23-32.15 4.23-32.15 13.53-20.3 26.22-4.22z",
    fill: "#d39999"
  }), React.createElement("path", {
    d: "M785.8 195.4c4.67 1.36 9.9-9.58 15.42-9.58 5.85 0 11.36 11.71 16.24 9.23a146.62 146.62 0 0 1 6.18-23.19l-37.65 3.32c1.54 6.53 1 13.81-.19 20.22z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 802.07,
    cy: 161.29,
    r: 35.95,
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M755.09 145.77c2.5 3.52 6.44 6 10.11 8.68a111.08 111.08 0 0 1 12.82 10.73 37.9 37.9 0 0 1 7.17 8.88c2.85 5.32 3.23 11.34 3.57 17.2l3.49 60.53c.23 4 .46 8.09-.56 12a41 41 0 0 1-4.33 9.48c-4.61 8.18-9.35 16.52-16.77 23-2.48 2.15-5.5 4.93-4.19 7.75 1.06 2.27 4.32 3 7.12 3.33 11.75 1.58 24.77 2.93 34.66-2.8 3.73-2.16 6.82-5.26 11-6.6 5.82-1.85 12.24.08 18.44.07 6.58 0 12.86-2.19 19-4.35a6.81 6.81 0 0 0 3.12-1.76 5.21 5.21 0 0 0 .89-2.39c.93-4.91 1.81-10 .29-14.81-1.65-5.21-6-9.72-6.49-15.1-.64-7.48 6.26-13.57 11.22-19.72 10.56-13.09 12.91-31.94 2.07-44.85-5.59-6.66-7.34-13.84-12.17-20.93-4.42-6.49-5.26-14.28-6.32-21.76a266.49 266.49 0 0 0-5.42-27.63c-.67-2.68-4.4-4.32-6.25-6.55-3.58-4.3-14-4.15-20-5.11-10.1-1.6-21-3.1-30.23.87-6.4 2.76-11 7.8-16 12.23-7.08 6.32-24.26 8.3-16.24 19.61z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M755.94 144.08c2.5 3.52 6.44 6 10.11 8.68a111.08 111.08 0 0 1 12.82 10.75 37.9 37.9 0 0 1 7.17 8.88c2.85 5.32 3.23 11.34 3.57 17.2l3.52 60.51c.23 4 .46 8.09-.56 12a41 41 0 0 1-4.33 9.48c-4.61 8.18-9.35 16.52-16.77 23-2.48 2.15-5.5 4.93-4.19 7.75 1.06 2.27 4.32 3 7.12 3.33 11.75 1.58 24.77 2.93 34.66-2.8 3.73-2.16 6.82-5.26 11-6.6 5.82-1.85 12.24.08 18.44.07 6.58 0 12.86-2.19 19-4.35a6.81 6.81 0 0 0 3.12-1.76 5.21 5.21 0 0 0 .89-2.39c.93-4.91 1.81-10 .29-14.81-1.65-5.21-6-9.72-6.49-15.1-.64-7.48 6.26-13.57 11.22-19.72 10.56-13.09 12.91-31.94 2.07-44.85-5.59-6.66-7.34-13.84-12.17-20.93-4.42-6.49-5.26-14.28-6.32-21.76a266.49 266.49 0 0 0-5.42-27.63c-.67-2.68-4.4-4.32-6.25-6.55-3.58-4.3-14-4.15-20-5.11-10.1-1.6-21-3.1-30.23.87-6.4 2.76-11 7.8-16 12.23-7.16 6.32-24.29 8.3-16.27 19.61z",
    fill: "#865a61"
  }));
};

UndrawBibliophile.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBibliophile;