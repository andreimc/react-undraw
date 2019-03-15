function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAppInstallation = _props => {
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
    viewBox: "0 0 961.07 805.46",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 516.59,
    y1: 775.99,
    x2: 516.59,
    y2: 47.27,
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
    x1: 802.23,
    y1: 799.75,
    x2: 802.23,
    y2: 247.72,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M97.4 24.15c-36.14 6.47-77.64 18-92.26 53.45-13.36 32.41 2.32 68.92 12.87 102.46a348.56 348.56 0 0 1 16 102.3c.27 48.82-9.24 100.3 10.08 144.66 21.8 50.05 75.75 79 94.66 130.3 7.93 21.51 8.89 45.05 12.67 67.78 8.38 50.37 31.27 97.94 64.87 134.79 22.34 24.5 51.43 45.06 83.65 45.55 24.44.38 47.52-10.71 70.16-20.42a713.56 713.56 0 0 1 81.07-29.1c11.62-3.39 23.59-6.51 35.61-5.45 23.16 2 42.48 19 64.46 27 59.57 21.6 121.15-25.34 184-30.29 53.88-4.25 108 22.84 160.94 11.53 7.8-1.67 16.14-4.7 20.23-11.9 6.77-11.93-1.63-28.44 4.39-40.81s22.27-13.65 31.81-23.06c9.71-9.58 10.5-26.12 5.55-39.13s-14.5-23.37-23.68-33.5a1436.48 1436.48 0 0 1-125.19-159.58c-38.68-57.19-74.88-124.46-64-193.77 3.76-23.85 13-46.42 17.19-70.19s2.47-50.69-12.9-68.63c-9.18-10.72-22.06-16.91-34.56-22.81C598.44 40.3 473.53-16.05 347.31 4.78c-20.55 3.39-40.89 8.83-61.68 9.57-30.09 1.08-58.41-12.37-87.8-8-33.37 4.93-67.09 11.83-100.43 17.8z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M189.61 170.85s-41.13-22.58-53.33-57.17a71.09 71.09 0 0 0-27.37-35.69 119.57 119.57 0 0 0-19.24-10.4",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M81.87 45.84c3.89 3.91 8.08 22.3 8.08 22.3s-18.36-4.3-22.25-8.22a10 10 0 0 1 14.17-14.08zM115.12 55.87c1.14 5.4-5.33 23.11-5.33 23.11s-13.07-13.59-14.21-19a10 10 0 0 1 19.55-4.12zM151.42 93.41c-1.74 5.23-16.27 17.26-16.27 17.26s-4.42-18.33-2.68-23.57a10.01 10.01 0 1 1 19 6.31zM172.53 128c-.83 5.45-13.12 19.76-13.12 19.76s-7.46-17.32-6.63-22.77a10 10 0 1 1 19.75 3zM95.67 94.53c5.52-.06 21.4-10.24 21.4-10.24s-16.11-9.8-21.63-9.74a10 10 0 0 0 .23 20zM120.82 134.67c5.24-1.71 17.35-16.17 17.35-16.17s-18.31-4.53-23.55-2.82a10 10 0 0 0 6.2 19zM150.62 170.33c5.46-.8 19.84-13 19.84-13s-17.28-7.56-22.73-6.76a10 10 0 1 0 2.9 19.77z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M152.61 308.85s-41.13-22.58-53.33-57.17a71.09 71.09 0 0 0-27.37-35.69 119.57 119.57 0 0 0-19.24-10.4",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M44.87 183.84c3.89 3.91 8.08 22.3 8.08 22.3s-18.36-4.3-22.25-8.22a10 10 0 0 1 14.17-14.08zM78.12 193.87c1.14 5.4-5.33 23.11-5.33 23.11s-13.07-13.59-14.21-19a10 10 0 0 1 19.55-4.12zM114.42 231.41c-1.74 5.23-16.27 17.26-16.27 17.26s-4.42-18.33-2.68-23.57a10.01 10.01 0 1 1 19 6.31zM135.53 266c-.83 5.45-13.12 19.76-13.12 19.76s-7.46-17.32-6.63-22.77a10 10 0 1 1 19.75 3zM58.67 232.53c5.52-.06 21.4-10.24 21.4-10.24s-16.11-9.8-21.63-9.74a10 10 0 0 0 .23 20zM83.82 272.67c5.24-1.71 17.35-16.17 17.35-16.17s-18.31-4.53-23.55-2.82a10 10 0 1 0 6.2 19zM113.62 308.33c5.46-.8 19.84-13 19.84-13s-17.28-7.56-22.73-6.76a10 10 0 1 0 2.9 19.77z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M748.88 47.27H284.31a42.56 42.56 0 0 0-42.62 42.5v643.72A42.56 42.56 0 0 0 284.31 776h464.57a42.56 42.56 0 0 0 42.62-42.5V89.76a42.56 42.56 0 0 0-42.62-42.49z",
    transform: "translate(-119.47 -47.27)",
    fill: "url(#prefix__a)"
  }), React.createElement("rect", {
    x: 128.77,
    y: 8.73,
    width: 536.72,
    height: 713.44,
    rx: 20,
    ry: 20,
    fill: "#535461"
  }), React.createElement("path", {
    fill: "#f1f1f4",
    d: "M156.04 76.22h482.18v578.47H156.04z"
  }), React.createElement("circle", {
    cx: 394.95,
    cy: 41.45,
    r: 6.55,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 394.95,
    cy: 687.26,
    r: 19.64,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 214.13,
    y: 151.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 605.59,
    y: 198.63,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    transform: "rotate(-180 592.86 221.995)",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 350.13,
    y: 151.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 214.13,
    y: 317.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 605.59,
    y: 364.63,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    transform: "rotate(-180 592.86 387.995)",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 350.13,
    y: 317.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 214.13,
    y: 483.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 605.59,
    y: 530.63,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    transform: "rotate(-180 592.86 553.995)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 350.13,
    y: 483.36,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M909.49 325.17a7.87 7.87 0 0 0-1.19-3 17.4 17.4 0 0 0-2.35-2.27c-4.72-4.44-2.18-12.44-4-18.61-2-6.59-9-11.64-15.08-15a12.19 12.19 0 0 0-3.14-1.27 26.21 26.21 0 0 0-4.16-.33 20 20 0 0 1-6.34-1.44c-2.89-1.18-5.47-3-8.43-4a4.29 4.29 0 0 0-1.8-.25c-3.23-.3-3.34 3.72-6.81 6.05-1.44 1-2.81 2.38-2.81 4.1 0 2.35 2.4 3.9 4.54 4.93s2.63.83 3.05.82h.18c.29.05.61.3 1.44 1.21A27.37 27.37 0 0 0 839.44 323a26.81 26.81 0 0 0 2.35 11c-.09.64-.19 1.3-.3 2-1.05 6.45-3 14.23-6.34 20.67-2.74.56-4.47 1-4.47 1a2.56 2.56 0 0 1 .05.4l-1 .74-4.2 3c-8.27-13.71-16.72-30.73-17.06-43.51 0 0-1 .69-2.7 1.77v-9.08l-.54-.1.54-1 3.9-7.38a19.93 19.93 0 0 0 2.31-9c.18-11.6-.2-40.2-8.22-44.95-10.11-6-12.13 19.94-17.52 33.23-4 9.91-2 24.27-.78 30.92.09.45.17.86.25 1.24a75.62 75.62 0 0 0-9.57 4.39c2.13.84 3.72 7.51 4.6 12.31.09.51.18 1 .26 1.45a49.71 49.71 0 0 1-6.21 1.52l17.38 37.92c-3.71 4.3-11.45 11.83-17.38 7.93-8.09-5.32-33-2.66-33-2.66s-14.24-37.81-13.56-49.13c0 0-.75.38-2 1v-10.31a11.32 11.32 0 0 1-1.45.83l.53-.94.77-1.37a20.17 20.17 0 0 0 2.56-8.46c.84-11.63 2.07-41.49-7.13-45.22-11.46-4.65-14.83 28.57-14.83 28.57l2.44 30.08.05.67c-5.44.48-9.91.48-9.91.48 1.37 1.35 1.81 8.8 2 13.47v1.33c-2.78.48-5.16.52-6.71-.18l18.2 49.17s1.35 12 24.94 17.28c13.87 3.13 23.54 6 29.16 7.88-9.62 22.8-43 105-33.21 125 0 0 5.24-2 10.6-3.76 1.24 17.24 3.39 43.35 6 60.08-2.85 8.81-5 16.2-5.7 20.43-.06.35-.11.68-.15 1-2 15.95-18.2 46.52 6.07 72.43 0 0 16.85 10 18.2 21.93 1.13 10.06 18.94 35.14 24.58 42.88-4.51 7.75-17.23 28.19-28.63 33.54-14.15 6.65-2.7 15.95 10.78 14s58-33.89 58-33.89-.31-20.88-4.53-22.4l-4.05-8.36a30 30 0 0 0 6.56-1.8c18.2-7.31 43.14-20.6 43.14-20.6s.49-15.61-6.58-21.33c-3.62-11.17-20.38-21.2-20.38-21.2S835.4 638.66 805.74 630c0 0-4.79-6.75-4.61-14.48 1.95-3.74 3.27-6.12 3.27-6.12l15.34-36.4a49.66 49.66 0 0 0 10-12.31q.34-.62.66-1.25c9.25 1.09 16.5 2.18 16.5 2.18l-.67-31.9C840.12 463.9 859 444.63 859 444.63s27-32.56 29.66-55.82c2.49-21.47-15.69-22.55-18.5-22.59a23.73 23.73 0 0 1 .35-9.58l.32.23a3.75 3.75 0 0 0 2 .83 2.3 2.3 0 0 0 .44 0h.24a3.9 3.9 0 0 0 1.87-.58c7.05-3.7 12.54-10.39 20.28-12.32 1.62-.4 3.31-.58 4.9-1.1a13.63 13.63 0 0 0 8-7.5 18.12 18.12 0 0 0 .93-11.03zm-99 352c1.35 4.65 22.92 20.6 22.92 20.6l.83 5.73a204 204 0 0 1-17.43 14.75l-7.67-15.83s-11.46-36.55-21.57-40.53c-1.87-.74-2.47-3-2.21-6.17 6.57 4.81 24.01 17.72 25.1 21.48z",
    transform: "translate(-119.47 -47.27)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M650.81 360.56s-45.84 106.08-34.71 129c0 0 18.34-7.2 21-5.89s28.81-136.86 28.81-136.86z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M650.81 360.56s-45.84 106.08-34.71 129c0 0 18.34-7.2 21-5.89s28.81-136.86 28.81-136.86z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M675.69 698.45s-15.72 29.47-29.47 36-2.62 15.72 10.48 13.75 56.32-33.4 56.32-33.4-.3-20.57-4.41-22.07-32.92 5.72-32.92 5.72zM716.95 650.65s-22.26 22.26-32.09 24.23 8.51 15.06 26.19 7.86 41.91-20.3 41.91-20.3.65-21-10.48-22.92-25.53 11.13-25.53 11.13z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M625.27 468.6s4.58 79.89 10.48 91 28.16 45.18 28.16 45.18 25.54 18.34 26.85 22.92 22.26 20.3 22.26 20.3l1.31 9.17s34.71-2 32.74-13.75-20.3-22.92-20.3-22.92-11.79-30.78-40.6-39.29c0 0-9.17-13.1-1.31-23.57 0 0 19.65-49.11 30.78-55s-4.59-39.91-4.59-39.91z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M625.27 468.6s4.58 79.89 10.48 91 28.16 45.18 28.16 45.18 25.54 18.34 26.85 22.92 22.26 20.3 22.26 20.3l1.31 9.17s34.71-2 32.74-13.75-20.3-22.92-20.3-22.92-11.79-30.78-40.6-39.29c0 0-9.17-13.1-1.31-23.57 0 0 19.65-49.11 30.78-55s-4.59-39.91-4.59-39.91z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M689.44 652.61l21 43.87c-3.27 11.13-34.71 7.2-34.71 7.2s-24.23-32.74-25.54-44.53-17.68-21.61-17.68-21.61c-23.57-25.54-7.86-55.66-5.89-71.38 0-.3.09-.63.14-1 1.74-10.54 12.34-40.86 20.58-63.57 5.56-15.3 10.05-27.14 10.05-27.14s43.87 2 53 17.68c4.2 7.2 2.32 14.69-.95 20.69a48.77 48.77 0 0 1-9.68 12.13l-14.91 35.94s-26.18 47.84-16.32 51.78 20.91 39.94 20.91 39.94z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M611.24 264.33a20.08 20.08 0 0 1-2.48 8.34l-.75 1.35-3.69 6.65h-11.79l-.25-3.1-2.37-29.64s3.27-32.74 14.41-28.16c8.93 3.68 7.74 33.1 6.92 44.56z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M608.01 274.01l-3.69 6.65h-11.79l-.25-3.1c5.49-.48 12.02-1.48 15.73-3.55z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M608.9 274.12v15.06l-24.23 6.55s0-1.57-.07-3.75c-.14-4.6-.57-11.94-1.9-13.27.01.02 19.65.02 26.2-4.59z",
    fill: "#e6e6f0"
  }), React.createElement("path", {
    d: "M608.9 282.95v6.23l-24.23 6.55s0-1.57-.07-3.75c8.07-1.41 19.72-6.8 24.3-9.03z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M750.22 307.8c-4.78 13.8 1.43 20 1.43 20s-58.94 3.93-44.53-6.55c8.41-6.12 12.14-19.62 13.78-29.78a101.56 101.56 0 0 0 1.29-12.74s47.1-.69 37.33 12.44a63 63 0 0 0-9.3 16.63z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M759.53 291.14c-4.8 6.46-6.37 7.41-8 12.07a26.33 26.33 0 0 1-4.46.37c-11.23 0-22.16-2.31-26.17-12.1a101.56 101.56 0 0 0 1.29-12.75s47.09-.72 37.34 12.41z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 745.76,
    cy: 278.7,
    r: 26.85,
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M610.86 283.28s-25.54 13.1-32.74 9.82l17.68 48.46s1.31 11.79 24.23 17 34.05 9.82 34.05 9.82l42.56-50.42-21.61 5.89s-11.13 15.72-19 10.48-32.07-2.6-32.07-2.6-13.75-37.31-13.1-48.45z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M610.86 283.28s-25.54 13.1-32.74 9.82l17.68 48.46s1.31 11.79 24.23 17 34.05 9.82 34.05 9.82l42.56-50.42-21.61 5.89s-11.13 15.72-19 10.48-32.07-2.6-32.07-2.6-13.75-37.31-13.1-48.45z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M710.4 314.2s34.62-9.9 38.26 8.49c0 0-16-7.8-38.92 6-1.72 1-3.4 2.13-5 3.28-20.17 14.13-34.26 36-39.92 60.84l-14.63 64.1-1.31 17.23s-21 4.14-24.88-2.07-1.31-26.89 4.58-33.78 15.03-36.56 15.03-36.56l5.73-17.2a115 115 0 0 1 22.43-39.33l1.38-1.67a86 86 0 0 1 31.93-23.88c3.35-1.45 5.78-3.28 5.32-5.45z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M710.4 312.89s34.62-9.9 38.26 8.49c0 0-16-7.8-38.92 6-1.72 1-3.4 2.13-5 3.28-20.17 14.13-34.26 36-39.92 60.84l-14.63 64.1-1.31 17.23s-21 4.14-24.88-2.07-1.31-26.89 4.58-33.78 15.06-36.54 15.06-36.54l5.73-17.2a115 115 0 0 1 22.43-39.33l1.38-1.67a86 86 0 0 1 31.93-23.88c3.32-1.47 5.75-3.3 5.29-5.47z",
    fill: "#e6e6f0"
  }), React.createElement("path", {
    d: "M623.34 444.89l.29 11.28 9.17-5.89s16.33-59.43 27.83-75.63c1.35-1.91 2-4.76 3.27-5.24l46.82-45.18v-10.5s-23.9 17.68-25.87 21c-.84 1.39-13.39 8.25-21 19a237.38 237.38 0 0 0-18 31.1l-15.72 35.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M710.73 313.08v10.15l-47.48 45.5c-1.26.48-1.92 3.33-3.27 5.24-11.51 16.21-27.83 75.63-27.83 75.63l-9.17 5.89-.29-11.28 6.84-24.72 15.72-35.36a237.32 237.32 0 0 1 18-31.1c7.56-10.74 20.12-17.6 21-19 1.7-2.82 20.16-16.34 25.24-20z",
    fill: "#787c9c"
  }), React.createElement("path", {
    d: "M736.82 250.2c-2.07-1-4.41-2.55-4.41-4.86 0-1.69 1.33-3.09 2.73-4 3.74-2.55 3.45-7.16 7.75-5.72 2.88 1 5.39 2.79 8.19 3.95a19.17 19.17 0 0 0 6.16 1.42 25.11 25.11 0 0 1 4 .32 11.75 11.75 0 0 1 3 1.25 26.3 26.3 0 0 1 12.36 15.43c1.78 6.08 1.6 13.28 6.18 17.65a17 17 0 0 1 2.28 2.23 7.82 7.82 0 0 1 1.15 3 18.1 18.1 0 0 1-.9 10.87 13.32 13.32 0 0 1-7.81 7.39c-1.55.51-3.18.68-4.76 1.08-7.52 1.9-12.85 8.5-19.71 12.14a3.76 3.76 0 0 1-1.82.57 3.62 3.62 0 0 1-1.92-.82c-2.65-1.89-4.83-4.83-4.76-8.09a16.36 16.36 0 0 1 1.75-5.83 56.5 56.5 0 0 0 3.28-10.55 5.14 5.14 0 0 0 .07-2.55c-.5-1.59-2.26-2.33-3.48-3.46-2.32-2.15-2.6-5.81-1.74-8.86s2.66-5.74 4-8.61a6.78 6.78 0 0 0 .79-2.79c0-3.83-5.18-5.91-7.36-8.44-2.84-3.46-.97-.72-5.02-2.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M737.48 250.2c-2.07-1-4.41-2.55-4.41-4.86 0-1.69 1.33-3.09 2.73-4 3.74-2.55 3.45-7.16 7.75-5.72 2.88 1 5.39 2.79 8.19 3.95a19.17 19.17 0 0 0 6.16 1.42c1.35.08 5.72-2 7-1.68a11.75 11.75 0 0 1 3 1.25 26.3 26.3 0 0 1 12.36 15.43c1.78 6.08.54 13.68 5.12 18 .77.74-.28 3 .34 3.83a7.82 7.82 0 0 1 1.15 3 18.1 18.1 0 0 1-.9 10.87 13.32 13.32 0 0 1-7.81 7.39c-1.55.51-3.18.68-4.76 1.08-7.52 1.9-12.85 8.5-19.71 12.14a3.76 3.76 0 0 1-1.82.57 3.62 3.62 0 0 1-1.92-.82c-2.65-1.89-4.83-4.83-4.76-8.09a16.36 16.36 0 0 1 1.75-5.83 56.5 56.5 0 0 0 3.28-10.55 5.14 5.14 0 0 0 .07-2.55c-.5-1.59-2.26-2.33-3.48-3.46-2.32-2.15-2.6-5.81-1.74-8.86s2.66-5.74 4-8.61a6.78 6.78 0 0 0 .79-2.79c0-3.83-5.18-5.91-7.36-8.44-2.84-3.41-.97-.67-5.02-2.67z",
    fill: "#b96b6b"
  }), React.createElement("path", {
    d: "M709.45 512.87c-12-1.42-27.12-2.81-33.76-1.7-10.69 1.78-25.69-7.75-28.39-9.53 5.56-15.3 10.05-27.14 10.05-27.14s43.87 2 53 17.68c4.25 7.2 2.37 14.69-.9 20.69z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M766.72 343.53c-2.62 22.92-28.81 55-28.81 55s-18.34 19-12.44 83.82l.65 31.43s-38.64-5.89-50.42-3.93-28.81-9.82-28.81-9.82-6.56-113.3 21.64-136.85a166.34 166.34 0 0 1 11.28-15.45c7.56-9.15 17.84-19.46 27.46-22a17.18 17.18 0 0 1 3.79-.58s29.47-16.37 37.33-3.93c-.01.05 20.94-.61 18.33 22.31z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M647.21 465.66s10.48-4.58 28.16-3.27 49.16-14.41 49.16-14.41",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M666.2 611.73s.65 2-7.86 4.58-11.13 5.24-11.13 5.24",
    opacity: 0.05
  }), React.createElement("rect", {
    x: 712.94,
    y: 212.27,
    width: 94,
    height: 94,
    rx: 11.85,
    ry: 11.85,
    transform: "rotate(-180 700.205 235.635)",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M692.19 249.65a19.87 19.87 0 0 1-2.24 8.88l-3.78 7.28-2.62 5-16.37 1.31s-.34-1.35-.76-3.58c-1.22-6.55-3.15-20.7.76-30.47 5.24-13.1 7.2-38.64 17-32.74 7.82 4.7 8.19 32.89 8.01 44.32z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M686.17 265.6v.2l-2.62 5-16.37 1.31s-.34-1.35-.76-3.58c5.86-2.23 13.54-4.31 19.75-2.93z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M686.17 266.91v11.82l-23.57 12.44s-.27-2.13-.77-4.89c-.86-4.73-2.4-11.31-4.47-12.13 0-.03 17.02-9.86 28.81-7.24z",
    fill: "#e6e6f0"
  }), React.createElement("path", {
    d: "M749.93 373.95a27.74 27.74 0 0 1-21.18 6.78c-41.46-4.21-42.58-18.86-42.58-18.86l-6.36-14.14c7.56-9.15 17.84-19.46 27.46-22 6.87 11.07 13 19.06 13 19.06s30.78-23.57 39.95-1.31c5.31 13.01-2.69 23.76-10.29 30.47z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M686.17 274.13v4.6l-23.57 12.44s-.27-2.13-.77-4.89c10.16-3.29 20.21-9.46 24.34-12.15z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M688.79 274.12s-17.68 12.44-32.74 15.06l30.78 68.1s1.13 14.65 42.58 18.86a27.75 27.75 0 0 0 21.17-6.78c7.6-6.71 15.58-17.46 10.24-30.42-9.17-22.26-39.95 1.31-39.95 1.31s-31.43-41.25-32.08-66.13z",
    fill: "#575988"
  }), React.createElement("rect", {
    x: 790.7,
    y: 714.35,
    width: 156,
    height: 14,
    rx: 2.67,
    ry: 2.67,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 773.7,
    y: 700.35,
    width: 156,
    height: 14,
    rx: 2.67,
    ry: 2.67,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 773.7,
    y: 700.35,
    width: 156,
    height: 14,
    rx: 2.67,
    ry: 2.67,
    opacity: 0.05
  }));
};

UndrawAppInstallation.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAppInstallation;