function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawStayingIn = _props => {
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
    viewBox: "0 0 995.12 811.51",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 636.24,
    y1: 686.05,
    x2: 636.24,
    y2: 173.03,
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
  }))), React.createElement("path", {
    d: "M102.56 439.36c36.68 62.7 29.77 146.88 13.62 213-5.41 22.13-11.63 45.49-7 70.5 5.63 30.59 26.18 55 47 69.12 37.93 25.78 81.26 26.07 112.8.76 27.26-21.88 45.21-60.7 73-81.35 46.58-34.64 110.36-11.54 165.81 23.03 39.23 24.46 82.39 55.3 118.64 39.23 25.51-11.31 41.42-44.5 48.86-80.84 3.59-17.55 5.76-36.75 14-50 4.89-7.88 11.62-13.07 18.58-17.28 63.6-38.51 149.62-3.13 211-47 41.43-29.61 65-92.17 72.77-159.47s1.44-139.64-6.51-210.91c-5.65-50.65-13.3-104.92-38.74-146.59C919.48 17.47 877.04-2.91 840.14.31s-68.98 26.93-96.58 56.07c-34.53 36.43-65.67 83.25-110.34 94.23-30.42 7.48-63.65-2.74-96-8.83-54-10.19-107.27-8.83-160.16-6.68-50.63 2.06-101.57 4.92-148.76 22.43-33.39 12.39-59 39.18-90.18 56.27-20.31 11.14-43.22 12.09-62.15 27.13-23.32 18.53-43.5 53.25-34.18 97.94 8.87 42.47 41.27 67.21 60.77 100.49z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M7.12 307.33s-49.56 77.42 112.93 78.77c0 0 2.39-67.38-50.73-95.14a47.66 47.66 0 0 0-61.44 15.22z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M7.49 306.03s83.23 16.4 112.56 80.07",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M127.31 375.68s-53.44-69.06-48.56-137.14c2-28.57-4.71-57.11-20.21-81.21a222.5 222.5 0 0 0-25.11-32",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M36.23 82.4c3.73 9.56-2.76 44.05-2.76 44.05s-28.14-21-31.87-30.53A18.59 18.59 0 0 1 36.23 82.4zM85.56 124.2c-2.06 10.06-26.26 35.48-26.26 35.48s-12.22-32.9-10.16-43a18.594 18.594 0 1 1 36.42 7.52zM119.56 215.2c-6.86 7.64-40.57 17.37-40.57 17.37S85.05 198 91.9 190.36a18.59 18.59 0 1 1 27.66 24.84zM129.89 289.86c-5.47 8.69-37.06 24-37.06 24s.13-35.09 5.6-43.78a18.59 18.59 0 1 1 31.46 19.8zM23.64 175.75c9.46 4 44.11-1.58 44.11-1.58s-20.19-28.72-29.68-32.71a18.601 18.601 0 1 0-14.43 34.29zM36.77 262.88c10.22 1 41.61-14.71 41.61-14.71s-27.82-21.32-38.09-22.29a18.59 18.59 0 0 0-3.52 37zM61.16 345.85c9.91 2.69 43.5-7.47 43.5-7.47s-23.87-25.73-33.78-28.41a18.59 18.59 0 1 0-9.72 35.88z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M36.23 82.4c3.73 9.56-2.76 44.05-2.76 44.05s-28.14-21-31.87-30.53A18.59 18.59 0 0 1 36.23 82.4zM85.56 124.2c-2.06 10.06-26.26 35.48-26.26 35.48s-12.22-32.9-10.16-43a18.594 18.594 0 1 1 36.42 7.52zM119.56 215.2c-6.86 7.64-40.57 17.37-40.57 17.37S85.05 198 91.9 190.36a18.59 18.59 0 1 1 27.66 24.84zM129.89 289.86c-5.47 8.69-37.06 24-37.06 24s.13-35.09 5.6-43.78a18.59 18.59 0 1 1 31.46 19.8zM23.64 175.75c9.46 4 44.11-1.58 44.11-1.58s-20.19-28.72-29.68-32.71a18.601 18.601 0 1 0-14.43 34.29zM36.77 262.88c10.22 1 41.61-14.71 41.61-14.71s-27.82-21.32-38.09-22.29a18.59 18.59 0 0 0-3.52 37zM61.16 345.85c9.91 2.69 43.5-7.47 43.5-7.47s-23.87-25.73-33.78-28.41a18.59 18.59 0 1 0-9.72 35.88z",
    opacity: 0.25
  }), React.createElement("path", {
    fill: "#5f546f",
    d: "M123 140.05v341.83l454.8-88.35-8.69-262.17L123 140.05z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M123 140.05v341.83l454.8-88.35-8.69-262.17L123 140.05z"
  }), React.createElement("path", {
    fill: "#5f546f",
    d: "M977.93 543.08v112.98L497.06 796.55l-4.91-2.54-380.38-197.34V129.55l470.74-15.21 2.9 259.27-18.83 5.8-7.24-242.5-414.25 14.37-2.9 351.24L502.85 660.4l.27-.06 474.81-117.26z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M977.93 543.08v112.98L497.06 796.55l-4.91-2.54 10.97-133.67 474.81-117.26z"
  }), React.createElement("path", {
    d: "M398.2 379.04s-232.82 23.23-255.46 56.88-.18 74.93-.18 74.93l359.93 156.43 488.12-126s-13-88.35-53.59-98.49-363.56-79.68-363.56-79.68-130.36-7.97-175.26 15.93z",
    fill: "#ebecf0"
  }), React.createElement("path", {
    d: "M142.56 436.25l367.17 126.74s391.64-118.77 447.12-107.55c0 0-274-98.05-383.39-93.79-87.21 3.4-178.52 17.72-178.52 17.72s-242.25 24.3-252.38 56.88z",
    fill: "#f8f9fa"
  }), React.createElement("rect", {
    x: 287.05,
    y: 304.73,
    width: 209,
    height: 148.87,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 279.78 497.327)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 287.05,
    y: 305.73,
    width: 209,
    height: 148.87,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 279.77 498.332)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 293.9,
    y: 309.61,
    width: 195.3,
    height: 139.1,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 279.78 497.327)",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M217.25 380.89c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53M242.22 390.31c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53M296.78 309.38c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M306.35 373.9c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 469.05,
    y: 282.73,
    width: 209,
    height: 148.87,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 461.78 475.315)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.05,
    y: 282.73,
    width: 209,
    height: 148.87,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 461.78 475.315)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 475.9,
    y: 287.61,
    width: 195.3,
    height: 139.1,
    rx: 30,
    ry: 30,
    transform: "rotate(-40.12 461.78 475.315)",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M399.25 358.89c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53M424.22 368.31c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53M478.78 287.38c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M488.35 351.9c2.86-3.88 6-8 10.45-9.72 2.61-1 5.52-1.18 8.1-2.27 5.42-2.3 8.34-8.14 10.32-13.69s3.66-11.55 8-15.53",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1045.87 678.44a8.93 8.93 0 0 0-6.68-6.59c-28.13-7-53.45-60.45-53.45-60.45s-1-10.18-8.14-25.45c-3.33-7.13-5.76-19.13-7.42-29.91 9.09-4.1 16-8.67 11.49-11.83a22.74 22.74 0 0 0-8.32-3.49l-2.88-15.85c1-11.2-7.13-48.87-7.13-48.87l-7.05-58.42s.81-1.37-.45-3.63v-.08l-.19-.32-.09-.13-.21-.31-.12-.16-.38-.47-.25-.29-.21-.22-.3-.31-.23-.22-.36-.33-.24-.21-.47-.39-.21-.17c-.49-.39-1-.79-1.66-1.19l-.17-.11-.8-.51-.26-.16-.83-.49-.28-.16-1-.54-.21-.11q-1.29-.67-2.81-1.36l-.25-.11-1.3-.57-.45-.19-1.24-.51-.52-.21-1.37-.52-.49-.19-2-.71c-.67-.23-1.32-.44-2-.64l-.71-.2-1.19-.33-.77-.19-1.07-.24-.73-.15-1.1-.19-.59-.1q-.81-.12-1.59-.2h-.32l-1.24-.09h-3.37l-1.17.12H921q-.66.09-1.28.21h-.11l-1 .24-.3.08-.79.24-.34.11-.68.25-.35.14h-.11l-.24.11c-8.59 3-23.51 5.36-39.49 7.14-3.13-10.82-5.79-21.56-6.52-28.81-2-20.36-12.22-43.78-12.22-43.78a3.58 3.58 0 0 1-.41.76c0-.27-.09-.54-.14-.8-1.44-7.34-6.45-10-22.87-16.25-16-6.1-23.45 3.21-26.18 8.27-.16.29-.29.56-.42.82l-1.9-.94-23.42 31.56-.63 1.16-16 31.32-.54 1.06-.22.15-22.59 52.2c-12.71-6.38-33.4-6.38-33.4-6.38l-10.18-9.16-25.47-30.55a175 175 0 0 0-9.2-24.44c-3.29-7.13-5.1-18.1-6.08-26.7a46.94 46.94 0 0 0 6.08-11l-.56-.73c.19-.43.38-.86.56-1.3 0 0-20.36-26.47-20.36-36.65s-57-18.33-57-18.33-.05.2-.15.53a21.43 21.43 0 0 1-6-5.18c-.28-.35-.56-.73-.83-1.12a40.71 40.71 0 0 0 8.48-13.7 12.12 12.12 0 0 0 5.75 1.46c2.53 0 5.59-1.75 5.1-4.23a2.58 2.58 0 0 0 0-1c-.28-1.43-1.63-2.34-2.68-3.35a7.23 7.23 0 0 1-2.12-4.33 3.93 3.93 0 0 1 1.11-2.45 28.1 28.1 0 0 1 2.86-1.94c2.34-1.83 2.7-5.11 2.63-8.14v-1.89a145.48 145.48 0 0 0-2.28-19.92 32.5 32.5 0 0 0-1.24-5 36.6 36.6 0 0 0-3.33-6.47l-9.92-16.47a19.88 19.88 0 0 0-4.54-5.77c-6.93-5.33-15 1.16-21.62-2.59-3.46-1.94-5.94-4.4-10-5.33-4.71-1.07-9.66-.44-14.31.58a6.74 6.74 0 0 0-3.5 1.55c-1.31 1.35-1.33 3.44-1.83 5.25-1 3.5-3.9 6.11-7 8s-6.51 3.27-9.4 5.47c-5.28 4-8.29 10.22-11.82 15.83A81.51 81.51 0 0 1 482.54 230a2.47 2.47 0 0 0 .43.65l-.43.37c1 2.29 4.6 1.62 6.6 3.15a3.73 3.73 0 0 1 1.42 2.77 12.88 12.88 0 0 1-1.41 4.57c-.94 1.87-1.88 4.14-1.7 6.1a4.24 4.24 0 0 0 1 3.4 15.74 15.74 0 0 1 1.81 1.69 2.57 2.57 0 0 1 .41 1c-.29 1.86-1.91 3.9-2.08 5.94a4.16 4.16 0 0 0 0 .86v.16c-.23 2.73 2.24 4.93 4.72 6.1 2.3 1.09 4.88 1.8 6.74 3.49-1.34 1.95-2.58 4.24-2.36 6.39a4.72 4.72 0 0 0 .45 2.59c1.58 3.17 6.08 3.19 9.52 2.35a4.85 4.85 0 0 1 2.78-.15 6.35 6.35 0 0 1 2.07 1.7c3.74 3.67 10.94 2.3 13.26-2.33l-.18.75c-.31 1.26-.66 2.55-1 3.87v-.84s-19.28 4.51-34.46 7.8a31.13 31.13 0 0 0-20.67 15.44l-14.1 25.63s.15.43.48 1.16l-.48.88a29.1 29.1 0 0 0 3.35 6.16c-6.43 15.16-20 44.78-31.86 55.94a70.77 70.77 0 0 1-6.07 5.12 15.51 15.51 0 0 0-6.89 1.42 17.41 17.41 0 0 0-6.24 5c-3.48.57-5.23-.29-5.23-.29s-11.67 9.18-19.19 19.1c-1.55.56-3.09 1.13-4.6 1.76-6.93 2.92-13.94 8.57-13.87 16.09 0 5.28 3.62 10 5.38 15l-4.37 5.1s-9.16 7.13-17.31 9.16S324 490.24 324 490.24l-30.54 21.38-3.22 2.07c-6.65-9.45-13.07-23.45-13.07-23.45s-11.2-20.36-23.42 2l-.37.67a38.32 38.32 0 0 0-3.95 11.51c-14.33-7-21.28 20.36-22.16 26.51-.2 1.39-2.07 8.11.4 13.72a60.79 60.79 0 0 0 37.41 33.87 50.59 50.59 0 0 0 5 1.27c15.27 3.05 25.45-19.34 25.45-19.34l.32-3.22a47.08 47.08 0 0 0 7 .2c1.49-.07 3-.08 4.67 0a60.35 60.35 0 0 0 23.89-4.43l13-5.21 2.17-.87c-.06.43-.12.86-.19 1.3L395.27 532s16.7-2.09 35.26-4.82c.58 1.64 1.12 3.3 1.8 4.91 4.25 10 14 16.77 24.31 20.05s21.34 3.55 32.17 3.79h3.37c3.55.05 7.17-.06 10.39-1.5 3.63-1.62 6.61-5.42 5.93-9.34-.53-3.06-3-5.33-5.3-7.43-4.41-4.08-8.62-8.62-10.84-14.2a20.88 20.88 0 0 1-1.15-4.06 22.38 22.38 0 0 0 9.93 5.47c20.36 5.09 56 10.18 66.17 7.13s35.63-9.16 74.32 0 49.88 6.11 49.88 6.11l-.17-.25c10.14 2.37 24.75 4.5 38.57 1.88a208.75 208.75 0 0 1 24.46-3.12c5.19-.36 11.25-1 17.41-2a48.32 48.32 0 0 0 28.38-16c20.3 2.75 52.19-9 52.19-9l4.67-2.43 3.48 8.54s-5.09 26.47 26.47 37.67a229.9 229.9 0 0 0 46.19 11.16c5.13 34.72 11.84 48.9 11.84 48.9l-11.2 16.29c-3.45 13.78 7 19.47 16.84 21.8a62.72 62.72 0 0 1 22.79 10.8c14.2 10.55 41.81 21.35 41.81 21.35 28.03 5.7 31.76-.1 30.63-5.26zM683.38 451.56l6.3 6.3-2.23-.19-3.92 7.13H664c-2 0-11.2-7.13-11.2-7.13l-2.6.26 4.64-3.31s6.71-3.63 5.79-17.12zm-69.71-26.07c-1.7-5.45-3.61-11.37-5.56-17.09.24-2.27.52-4.53.85-6.75l7.23 22.42zM471 394.22a72.91 72.91 0 0 1-7.84 11.25c-.91-.28-1.83-.51-2.76-.73s4.77-4.18 10.6-10.52zm418 101.11c-.15-1.41-.34-2.94-.56-4.55l12.77-6.65c8.16 6.12 11.21 23.47 12.22 39.27-4.43-2.01-22.62-11.14-24.43-28.07z",
    transform: "translate(-102.44 -44.25)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M800.11 365.92s6-15 29-7 19.07 14.62 19.07 14.62l-3.07 13.38-12 7-20-2z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    d: "M848.36 373a1.93 1.93 0 0 1-.18.54l-3.07 13.38-12 7-20-2-13-26a15.84 15.84 0 0 1 8.43-7.82c4.47-1.87 11.07-2.48 20.57.82 19.13 6.65 19.63 12.35 19.25 14.08z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M859.11 486.92s3 37 10 52 8 25 8 25 24.86 52.49 52.5 59.38a8.77 8.77 0 0 1 6.56 6.47c1.11 5.07-2.56 10.77-30.06 5.15 0 0-27.12-10.61-41.07-21a61.61 61.61 0 0 0-22.39-10.61c-9.62-2.29-19.92-7.88-16.54-21.42l11-16s-9-19-14-67 36-11.97 36-11.97zM751.11 301.92c0 14-50-13-50-13a18.83 18.83 0 0 1 1.28-2.88c2.69-5 10-14.11 25.72-8.12 16.12 6.14 21 8.75 22.46 16a42.92 42.92 0 0 1 .54 8zM692.11 305.92l-30 58-2.8-12.15 1.55-3.04 15.72-30.76.53-1.05 15-11zM588.11 419.92l-16 35-11 11-5.16-5.43-2.06-2.17-11.78-12.4 11-26h35z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    d: "M503.11 261.92s-68 32-70 31-28-7-16-31a105.49 105.49 0 0 0 8-22 93.58 93.58 0 0 0 3-24s42-19 45 3c1 7.12 3.3 12 6 15.43a19.69 19.69 0 0 0 13 7.57zM202.11 483.92l-3 30s-10 22-25 19a49.66 49.66 0 0 1-4.87-1.25 59.71 59.71 0 0 1-36.74-33.27c-2.43-5.51-.58-12.11-.39-13.48 1-7 10-42 29-20s30 33 30 33z",
    fill: "#feb7c5"
  }), React.createElement("path", {
    d: "M365.11 366.92l-85 40-12 14s-9 7-17 9-24 15-24 15l-30 21-14 9 14 11 43-10 52-11 27-13 77-67z",
    fill: "#5d526d"
  }), React.createElement("path", {
    d: "M202.11 483.92l-3 30s-10 22-25 19a49.66 49.66 0 0 1-4.87-1.25 59.71 59.71 0 0 1-36.74-33.27c-2.43-5.51-.58-12.11-.39-13.48 1-7 10-42 29-20s30 33 30 33z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M365.11 366.92l-85 40-12 14s-9 7-17 9-24 15-24 15l-30 21-14 9 14 11 43-10 52-11 27-13 77-67z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M261.11 495.92l-13.94 5.57-12.79 5.12a59.28 59.28 0 0 1-23.49 4.31h-4.59a45.68 45.68 0 0 1-31.81-10.83 62.251 62.251 0 0 0-5.22-4 37.7 37.7 0 0 1-11.52-48.52l.36-.66c12-22 23-2 23-2s11 24 19 30c5.45 4.09 23.42.29 34.33-2.55 5.11-1.33 8.67-2.45 8.67-2.45z",
    fill: "#feb7c5"
  }), React.createElement("path", {
    d: "M247.17 501.49c3.26-21.38-5-27.67-12.73-29.12 5.11-1.33 8.67-2.45 8.67-2.45l18 26z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M412.11 377.92l-104 73s-27 16-37 12-46 10-46 10 30-9 24 29l48-16s72-9 82-14 52-91 52-91z",
    fill: "#5d526d"
  }), React.createElement("path", {
    d: "M554.11 292.92s1 26 7 39a171.89 171.89 0 0 1 9 24l25 30 10 9s38 0 42 16-58 5-58 5l-9-9-42-26-24-73zM363.11 289.92s-19 49-35 64-24 11-24 11-42 33-17 41 38-27 38-27l36-18s33-29 31-50-29-21-29-21z",
    fill: "#feb7c5"
  }), React.createElement("path", {
    d: "M363.11 289.92s-19 49-35 64-24 11-24 11-42 33-17 41 38-27 38-27l36-18s33-29 31-50-29-21-29-21z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M443.67 264.85c-7.41.38-19.25 3.71-19.56-19.93 0 0-18.94 4.43-33.85 7.66a30.58 30.58 0 0 0-20.31 15.17l-13.85 25.17s6 17 25 19c0 0 4 40-32 65s93 60 93 60l64-21s-7-72 14-91c0 0 30-2 41-30 0 0-20-26-20-36s-56-18-56-18-6.78 27.4-30.39 24.28a60.4 60.4 0 0 0-11.04-.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M443.67 262.85c-7.41.38-19.25 3.71-19.56-19.93 0 0-18.94 4.43-33.85 7.66a30.58 30.58 0 0 0-20.31 15.17l-13.85 25.17s6 17 25 19c0 0 4 40-32 65s93 60 93 60l64-21s-7-72 14-91c0 0 30-2 41-30 0 0-20-26-20-36s-56-18-56-18-6.78 27.4-30.39 24.28a60.4 60.4 0 0 0-11.04-.35z",
    fill: "#d6e6f9"
  }), React.createElement("path", {
    d: "M859.11 486.92s3 37 10 52 8 25 8 25 24.86 52.49 52.5 59.38a8.77 8.77 0 0 1 6.56 6.47c1.11 5.07-2.56 10.77-30.06 5.15 0 0-27.12-10.61-41.07-21a61.61 61.61 0 0 0-22.39-10.61c-9.62-2.29-19.92-7.88-16.54-21.42l11-16s-9-19-14-67 36-11.97 36-11.97z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M848.36 373a1.93 1.93 0 0 1-.18.54l-3.07 13.38-12 7-20-2-13-26a15.84 15.84 0 0 1 8.43-7.82c-1.55 6.77-4.57 27 14.57 27.82 23 1 25-15 25-15z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M704.11 369.92s81-3 105-12c0 0-9 29 14 30s25-15 25-15l7 58s8 37 7 48l4 22s-54 18-60 6c0 0 4-56-12-68l-48 25s-46 17-62 5 20-99 20-99z",
    fill: "#94b6f0"
  }), React.createElement("path", {
    d: "M704.11 369.92s81-3 105-12c0 0-9 29 14 30s25-15 25-15l7 58s8 37 7 48l4 22s-54 18-60 6c0 0 4-56-12-68l-48 25s-46 17-62 5 20-99 20-99z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M479.12 234.35a40 40 0 0 1-54 5.6 93.58 93.58 0 0 0 3-24s42-19 45 3c.96 7.09 3.29 12 6 15.4z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 449.11,
    cy: 205.92,
    r: 40,
    fill: "#feb7c5"
  }), React.createElement("path", {
    d: "M432.99 135.44a6.62 6.62 0 0 0-3.44 1.53c-1.29 1.32-1.3 3.38-1.8 5.16-1 3.43-3.83 6-6.88 7.85s-6.4 3.22-9.24 5.37c-5.19 3.93-8.14 10-11.61 15.55a80.07 80.07 0 0 1-17.2 19.41c1 2.25 4.52 1.59 6.48 3.09 2.37 1.81 1.35 5.55 0 8.21s-2.69 6.17-.64 8.33a15.45 15.45 0 0 1 1.78 1.66c1.57 2.29-1.41 5.07-1.64 7.84s2.2 4.84 4.64 6 5.2 1.86 7 3.82c-1.8 2.49-3.67 5.68-2.3 8.43 1.55 3.11 6 3.13 9.35 2.3a4.77 4.77 0 0 1 2.73-.15 6.24 6.24 0 0 1 2 1.67c3.81 3.74 11.3 2.16 13.27-2.81 1.07-2.7.64-5.72.75-8.62.18-4.6 1.79-9 2.37-13.6 1-7.73-1-15.51-1.13-23.3a2.42 2.42 0 0 1 .3-1.47 2.52 2.52 0 0 1 1.81-.77 111.25 111.25 0 0 0 12.97-2.52c3.3-.85 7-2.25 8.14-5.46-.67 2.36.52 4.94 2.36 6.56a17.21 17.21 0 0 0 6.56 3.17c5.75 1.74 12.4 2.77 17.4-.55-.27 6.16-.51 12.52 1.67 18.29s7.45 10.84 13.61 10.79c2.48 0 5.49-1.72 5-4.15-.28-1.4-1.61-2.3-2.63-3.29-2.06-2-3-5.63-1-7.66a27.62 27.62 0 0 1 2.81-1.9c2.52-2 2.7-5.66 2.56-8.85a142.89 142.89 0 0 0-2.24-19.62 31.92 31.92 0 0 0-1.24-4.9 36 36 0 0 0-3.27-6.36l-9.73-16.17a19.53 19.53 0 0 0-4.46-5.67c-6.81-5.23-14.7 1.14-21.24-2.54-3.4-1.91-5.84-4.33-9.82-5.23-4.62-1.06-9.48-.44-14.05.56z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M432.99 134.44a6.62 6.62 0 0 0-3.44 1.53c-1.29 1.32-1.3 3.38-1.8 5.16-1 3.43-3.83 6-6.88 7.85s-6.4 3.22-9.24 5.37c-5.19 3.93-8.14 10-11.61 15.55a80.07 80.07 0 0 1-17.2 19.41c1 2.25 4.52 1.59 6.48 3.09 2.37 1.81 1.35 5.55 0 8.21s-2.69 6.17-.64 8.33a15.45 15.45 0 0 1 1.78 1.66c1.57 2.29-1.41 5.07-1.64 7.84s2.2 4.84 4.64 6 5.2 1.86 7 3.82c-1.8 2.49-3.67 5.68-2.3 8.43 1.55 3.11 6 3.13 9.35 2.3a4.77 4.77 0 0 1 2.73-.15 6.24 6.24 0 0 1 2 1.67c3.81 3.74 11.3 2.16 13.27-2.81 1.07-2.7.64-5.72.75-8.62.18-4.6 1.79-9 2.37-13.6 1-7.73-1-15.51-1.13-23.3a2.42 2.42 0 0 1 .3-1.47 2.52 2.52 0 0 1 1.81-.77 111.25 111.25 0 0 0 12.97-2.52c3.3-.85 7-2.25 8.14-5.46-.67 2.36.52 4.94 2.36 6.56a17.21 17.21 0 0 0 6.56 3.17c5.75 1.74 12.4 2.77 17.4-.55-.27 6.16-.51 12.52 1.67 18.29s7.45 10.84 13.61 10.79c2.48 0 5.49-1.72 5-4.15-.28-1.4-1.61-2.3-2.63-3.29-2.06-2-3-5.63-1-7.66a27.62 27.62 0 0 1 2.81-1.9c2.52-2 2.7-5.66 2.56-8.85a142.89 142.89 0 0 0-2.24-19.62 31.92 31.92 0 0 0-1.24-4.9 36 36 0 0 0-3.27-6.36l-9.73-16.17a19.53 19.53 0 0 0-4.46-5.67c-6.81-5.23-14.7 1.14-21.24-2.54-3.4-1.91-5.84-4.33-9.82-5.23-4.62-1.06-9.48-.44-14.05.56z",
    fill: "#8e6f80"
  }), React.createElement("path", {
    d: "M414.11 448.92l-15 10a158.22 158.22 0 0 0-19.27-28.39c-7.43-8.71-16.8-17.58-27.73-23.61-29-16 28-25 28-25a114.5 114.5 0 0 0 14 16.84c10.06 10 24.4 20 39 16.16 27-7-19 34-19 34z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    fill: "#cccad6",
    d: "M441.11 391.92h62v21h-62z"
  }), React.createElement("path", {
    d: "M461.11 348.92s-9-20-14-26-6-27-6-27-6-37 12-45 13 46 13 46l-1 8s27 25 26 44-30 0-30 0z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    d: "M461.11 348.92s-9-20-14-26-6-27-6-27-6-37 12-45 13 46 13 46l-1 8s27 25 26 44-30 0-30 0z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M397.11 401.92s9-4 11-10 27-3 27-3l30-6s8-12 0-18-8-19-8-19 27.76 0 34.32-7.12a6 6 0 0 0 .68-.88c5-8 26 66 26 66l-50-10-38 22s-22 4-33-14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M397.11 400.92s9-4 11-10 27-3 27-3l30-6s8-12 0-18-8-19-8-19 27.76 0 34.32-7.12a6 6 0 0 0 .68-.88c5-8 26 66 26 66l-50-10-38 22s-22 4-33-14z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M397.11 400.92s9-4 11-10 27-3 27-3l30-6s8-12 0-18-8-19-8-19 27.76 0 34.32-7.12a6 6 0 0 0 .68-.88c5-8 26 66 26 66l-50-10-38 22s-22 4-33-14z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M553.89 458.32l-11.78-12.4 11-26h9s5.79 27.01-8.22 38.4z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M530.11 414.92l20-2s9 7 11 7c0 0 6 28-9 39s-34-10-34-10l-17-20z",
    fill: "#cccad6"
  }), React.createElement("path", {
    d: "M836.11 518.92s-25-1-56-12-26-37-26-37l-18.13-44.49-3.87-9.51 39-24s1.42 6.13 3.25 14.73c2.79 13.06 6.54 31.81 7.75 43.27 2 19 25 28 25 28l41 17s15-4 25 3-37 21-37 21z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M578.26 419.92h9.85l-16 35-11 11-5.16-5.43 22.31-40.57zM751.11 301.92c0 14-50-13-50-13a18.83 18.83 0 0 1 1.28-2.88c36.66 17.86 46.07 10.71 48.17 7.84a42.92 42.92 0 0 1 .55 8.04zM677.11 316.92l15-11-30 58-2.8-12.17 1.55-3c20.14-14 17.13-27 15.72-30.76zM774.36 406.65c-12.53 3.08-30.55 13.86-38.38 18.78l-3.87-9.51 39-24s1.45 6.13 3.25 14.73z"
  }), React.createElement("path", {
    d: "M584.11 412.92l-33 60 24 15s26.59 10.17 50.73 5.6a205.06 205.06 0 0 1 24-3.07c5.09-.35 11-1 17.1-2a47.49 47.49 0 0 0 38-34.76c6.16-23.46 14.72-59.51 12.54-71.33a10.85 10.85 0 0 0-.36-1.46l10 30 5 15s36-24 50-22c0 0-17-47-19-67s-12-43-12-43-5 15-51-8l-23 31s9 16-17 33l-29 67z",
    fill: "#94b6f0"
  }), React.createElement("path", {
    d: "M394.11 399.92a39.85 39.85 0 0 1-14.27 30.61c-7.43-8.71-16.8-17.58-27.73-23.61-29-16 28-25 28-25a114.5 114.5 0 0 0 14 16.84c-.01.38 0 .77 0 1.16z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 352.11,
    cy: 399.92,
    r: 40,
    fill: "#ffbcc7"
  }), React.createElement("path", {
    d: "M589.11 490.92s-11 3-49-6-63-3-73 0-45-2-65-7-22-35-22-35c7 1 38-28 38-28 18-16 51-16 51-16l12.82 2.3 54.18 9.7 6.23 9.41z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M588.11 491.92s-11 3-49-6-63-3-73 0-45-2-65-7-22-35-22-35c7 1 38-28 38-28 18-16 51-16 51-16l12.82 2.3 54.18 9.7 6.23 9.41z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M541.34 421.33l-79.23 56.59c-22.75 7.72-36.26 3.39-44.28-4.47-15-14.75-10-40.18 9.18-48.9a82.22 82.22 0 0 1 26.1-6.63l27.82-15.7 54.18 9.7zM566.69 419.92s2.92 2.5 6.92 0",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M454.04 222.12s-3-.07-3.14 2.36c-.07 1.16 1.82 8.28 3.83 15.38 1 3.49 2 7 2.8 9.76l1.69 5.76.79 1.67 4.73 10.07 4.45 9.47 2.77 3.57 14.51-10 7.2-18.31-3.31-1.45-.57-.25-6.39-5-18-14-8.12-6.3-1-.74z",
    fill: "#ffe09c"
  }), React.createElement("path", {
    d: "M476.33 286.36s15.94-10.64 18.75-20c0 0 2.74-7.94 2.64-11.93 0 0 .6-3.74-6.67-3.55 0 0-1.24 13.63-10.1 20.79l-8.86 7.17z",
    fill: "#e7c4c3"
  }), React.createElement("ellipse", {
    cx: 579.35,
    cy: 309.12,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-83.66 503.434 344.216)",
    fill: "#ff7f8e"
  }), React.createElement("ellipse", {
    cx: 574.98,
    cy: 290.93,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-83.66 499.066 326.029)",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M483.38 245.22a6.16 6.16 0 0 0-3 4.78c-.36 3.24 1.57 6.11 4.31 6.41s5.26-2.07 5.62-5.31v-.67l-.57-.25zM463.56 255.87a4.59 4.59 0 0 0-3.55 1.19l4.73 10.07a6.13 6.13 0 0 0 3.14-4.85c.35-3.24-1.58-6.11-4.32-6.41zM458.98 237.93a4.79 4.79 0 0 0-4.26 1.94c1 3.49 2 7 2.8 9.76h.16c2.74.3 5.26-2.07 5.62-5.31s-1.58-6.09-4.32-6.39zM457.2 224.92a6.87 6.87 0 0 0-.47 1.85c-.36 3.24 1.57 6.11 4.31 6.41a4.8 4.8 0 0 0 4.28-2z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M472.07 270.9l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.25 3.88-.52 4.7zM478.56 258.03l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.22 3.88-.52 4.7zM472.34 255.03l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.25 3.88-.52 4.7zM463.65 246.42l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.25 3.88-.52 4.7zM456.75 231.12l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.29 3.88-.52 4.7zM468.22 240.81l-1.88-.21a10.36 10.36 0 0 0 .59-4.41q0-.15-.07-.29c-.52-1.82 1.88.21 1.88.21s.25 3.88-.52 4.7z",
    fill: "#94cc79"
  }), React.createElement("path", {
    d: "M470.56 285.75s3.47 5.46 5.81.65a20.88 20.88 0 0 0-4.84-9.41s-13.18-24-13-28.07c0 0-7.39-24-6.68-25.46 0 0-1.27-1.59-1 5s6.28 25.29 6.28 25.29l7.64 19.23 4.11 6.25z",
    fill: "#e7c4c3"
  }), React.createElement("path", {
    d: "M470.56 285.75s3.47 5.46 5.81.65a20.88 20.88 0 0 0-4.84-9.41s-13.18-24-13-28.07c0 0-7.39-24-6.68-25.46 0 0-1.27-1.59-1 5s6.28 25.29 6.28 25.29l7.64 19.23 4.11 6.25z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M533.11 341.92c0 7-24 11-24 11l-3.39-6-25.61-45s-16-40 0-46 18 40 18 40 23 25.63 31.71 39.07c2.04 3.13 3.29 5.61 3.29 6.93z",
    fill: "#ffbcc7"
  }), React.createElement("path", {
    d: "M533.11 341.92c0 7-24 11-24 11l-3.39-6c8.94-.29 20.32-8.9 24.1-12 2.04 3.2 3.29 5.68 3.29 7z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M416.83 470.44c8 7.86 21.53 12.19 44.28 4.47l91-65s13-7 0-38-21-36-21-36-16 14-27 13l10 31-62 35a82.26 82.26 0 0 0-26.1 6.63c-19.19 8.73-24.22 34.16-9.18 48.9z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M317.38 360.34c-6.63 2.88-9.43 10.71-14.75 15.61s-13.08 6.59-19.88 9.46-13.69 8.41-13.62 15.8 7.33 13.88 6.1 21.25c-.63 3.79-3.45 6.94-4.1 10.72-.71 4.08 1.25 8.21 3.92 11.38 7.28 8.64 19.06 11.61 29.89 14.82s22.5 8 27.38 18.18c1.3 2.72 2 5.67 3.21 8.44 4.17 9.79 13.74 16.47 23.88 19.7s21 3.49 31.6 3.72c3.9.08 8 .14 11.52-1.45s6.49-5.33 5.82-9.17c-.52-3-3-5.23-5.21-7.3-4.33-4-8.47-8.47-10.65-14s-2.06-12.2 1.62-16.81c4.36-5.46 12.17-6.58 17.85-10.65 10.19-7.3 10.29-24.84.2-32.26-3.59-2.64-7.95-4-11.85-6.15-11.73-6.46-18.43-19.38-29.14-27.42-8.51-6.39-18.93-9.23-28-14.62-8.41-4.95-14.45-14.17-25.79-9.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M315.38 360.34c-6.63 2.88-9.43 10.71-14.75 15.61s-13.08 6.59-19.88 9.46-13.69 8.41-13.62 15.8 7.33 13.88 6.1 21.25c-.63 3.79-3.45 6.94-4.1 10.72-.71 4.08 1.25 8.21 3.92 11.38 7.28 8.64 19.06 11.61 29.89 14.82s22.5 8 27.38 18.18c1.3 2.72 2 5.67 3.21 8.44 4.17 9.79 13.74 16.47 23.88 19.7s21 3.49 31.6 3.72c3.9.08 8 .14 11.52-1.45s6.49-5.33 5.82-9.17c-.52-3-3-5.23-5.21-7.3-4.33-4-8.47-8.47-10.65-14s-2.06-12.2 1.62-16.81c4.36-5.46 12.17-6.58 17.85-10.65 10.19-7.3 10.29-24.84.2-32.26-3.59-2.64-7.95-4-11.85-6.15-11.73-6.46-18.43-19.38-29.14-27.42-8.51-6.39-18.93-9.23-28-14.62-8.41-4.95-14.45-14.17-25.79-9.25z",
    fill: "#ad5975"
  }), React.createElement("path", {
    fill: "#dadae5",
    d: "M263.27 713.78l-71.76 59.78-84.47-57.09 83.04-44.38 69.97 33.1 3.22 8.59z"
  }), React.createElement("path", {
    fill: "none",
    d: "M154.74 588.78l35.97 70.69-83.58 42.24-53.5-99.33 101.11-13.6z"
  }), React.createElement("path", {
    fill: "#dadae5",
    d: "M149.01 595.94l36.15 69.44-78.03 36.33-50.45-93.65 92.33-12.12z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M154.74 589.5l-5.73 7.16-92.33 12.12-3.05-5.68 101.11-13.6z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M190.71 660.19l-35.97-70.69-5.73 7.16 35.24 67.69 6.46-4.16z"
  }), React.createElement("path", {
    fill: "#eff0f4",
    d: "M154.74 588.78l-5.73 7.16-92.33 12.12-3.05-5.68 101.11-13.6z"
  }), React.createElement("path", {
    fill: "#eff0f4",
    d: "M190.71 659.47l-35.97-70.69-5.73 7.16 35.24 67.7 6.46-4.17z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M154.74 588.78l-8.73 11.16-92.33 12.12-.05-9.68 101.11-13.6z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M190.71 659.47l-35.97-70.69-8.73 11.16 35.24 67.7 9.46-8.17z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M190.71 660.54v14.53l-83.58 44.56v-16.85l83.58-42.24z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M263.36 696.87l-72.65-36.33-.63 14.62 71.68 37.66 1.6-15.95z"
  }), React.createElement("path", {
    fill: "#eff0f4",
    d: "M190.71 659.47V672l-83.58 44.56v-14.85l83.58-42.24z"
  }), React.createElement("path", {
    fill: "#eff0f4",
    d: "M263.36 695.8l-72.65-36.33-.63 12.62 71.68 37.65 1.6-13.94z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M190.71 659.47V672l-83.58 44.56v-14.85l83.58-42.24z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M263.36 695.8l-72.65-36.33-.63 12.62 71.68 37.65 1.6-13.94z"
  }), React.createElement("path", {
    fill: "#cccad6",
    d: "M263.36 695.8l-.18 18.07-71.58 59.6-.89-18.44 72.65-59.23z"
  }), React.createElement("path", {
    d: "M226.95 698.66s1.78 2.4-.12 3.93c-.91.73-7.82 3.27-14.78 5.73-3.42 1.21-6.85 2.39-9.59 3.33l-5.69 1.93-1.82.32-11 1.93-10.3 1.82-4.51-.21-.19-17.61 10.83-16.42 3.09 1.87.54.32 7.74 2.37 21.84 6.7 9.83 3 1.15.35z",
    fill: "#ffe09c"
  }), React.createElement("path", {
    d: "M161.56 717.42s-.48-19.16 5.57-26.85c0 0 4.91-6.81 8.24-9 0 0 2.71-2.64 6.74 3.41 0 0-10.43 8.86-11.19 20.23l-.76 11.37z",
    fill: "#e7c4c3"
  }), React.createElement("ellipse", {
    cx: 281.27,
    cy: 748.82,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-41.49 171.615 861.905)",
    fill: "#ff7f8e"
  }), React.createElement("ellipse", {
    cx: 298.65,
    cy: 741.92,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-41.49 188.996 854.994)",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M191.17 687.97a6.16 6.16 0 0 1-2.18 5.21c-2.44 2.16-5.9 2.23-7.73.16s-1.33-5.49 1.11-7.65q.25-.22.52-.42l.54.32zM193.88 710.31a4.59 4.59 0 0 1 1.07 3.59l-11 1.93a6.13 6.13 0 0 1 2.16-5.36c2.45-2.15 5.94-2.23 7.77-.16zM211.18 703.75a4.79 4.79 0 0 1 .87 4.6c-3.42 1.21-6.85 2.39-9.59 3.33l-.11-.12c-1.83-2.07-1.33-5.49 1.11-7.65s5.89-2.25 7.72-.16zM222.84 697.68a6.87 6.87 0 0 1-1.24 1.45c-2.44 2.16-5.9 2.23-7.73.16a4.8 4.8 0 0 1-.86-4.63z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M176.68 712l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.31 2.01-3.54 3.11zM183.49 699.31l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.32 2.01-3.54 3.11zM189.5 702.65l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.31 2-3.54 3.11zM201.56 704.75l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.33 2.05-3.54 3.11zM218.03 701.62l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.31 2.01-3.54 3.11zM203.5 697.83l1.25 1.42a10.36 10.36 0 0 1 3.26-3l.28-.11c1.79-.62-1.25-1.42-1.25-1.42s-3.31 2.03-3.54 3.11z",
    fill: "#94cc79"
  }), React.createElement("path", {
    d: "M165.47 721.75s-6.46.31-3.88-4.38a20.88 20.88 0 0 1 10.48-1.46s27.22-3 30.43-5.53c0 0 23.88-7.78 24.67-9.2 0 0 2 .12-3.54 3.74s-24.36 9.41-24.36 9.41l-20.13 4.82-7.48.24z",
    fill: "#e7c4c3"
  }), React.createElement("path", {
    d: "M165.47 721.75s-6.46.31-3.88-4.38a20.88 20.88 0 0 1 10.48-1.46s27.22-3 30.43-5.53c0 0 23.88-7.78 24.67-9.2 0 0 2 .12-3.54 3.74s-24.36 9.41-24.36 9.41l-20.13 4.82-7.48.24z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M220.42 705.51s2.55 1.55 1.37 3.68c-.57 1-6 6-11.54 10.87-2.71 2.4-5.45 4.79-7.63 6.7-2.68 2.33-4.54 3.93-4.54 3.93l-1.57 1-9.42 5.91-8.86 5.56-4.26 1.5-6.81-16.24 3.85-19.29 3.57.57.62.1 8.06-.71 22.75-2 10.24-.91 1.2-.11z",
    fill: "#ffe09c"
  }), React.createElement("path", {
    d: "M166.93 747.49s-7.66-17.57-5-27c0 0 2-8.16 4.23-11.46 0 0 1.52-3.47 7.53.62 0 0-6.32 12.13-2.75 23l3.62 10.79z",
    fill: "#e7c4c3"
  }), React.createElement("ellipse", {
    cx: 280.5,
    cy: 773.35,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-63.6 193.656 833.884)",
    fill: "#ff7f8e"
  }), React.createElement("ellipse", {
    cx: 294.01,
    cy: 760.41,
    rx: 5.9,
    ry: 5,
    transform: "rotate(-63.6 207.16 820.945)",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M183.25 709.08a6.16 6.16 0 0 1-.06 5.64c-1.45 2.92-4.62 4.29-7.1 3.06s-3.3-4.58-1.85-7.5q.15-.3.33-.59l.62.1zM194.16 728.75a4.59 4.59 0 0 1 2.34 2.92l-9.42 5.91a6.13 6.13 0 0 1 0-5.78c1.48-2.9 4.61-4.27 7.08-3.05zM207.71 716.13a4.79 4.79 0 0 1 2.54 3.93c-2.71 2.4-5.45 4.79-7.63 6.7l-.14-.07c-2.47-1.23-3.3-4.58-1.85-7.5s4.61-4.28 7.08-3.06zM216.24 706.15a6.87 6.87 0 0 1-.61 1.81c-1.45 2.92-4.62 4.29-7.1 3.06a4.8 4.8 0 0 1-2.54-4z",
    fill: "#ff7f8e"
  }), React.createElement("path", {
    d: "M178.87 736.75l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.3 3.14-2.1 4.21zM180.4 722.47l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.31 3.11-2.1 4.21zM187.22 723.3l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.3 3.1-2.1 4.21zM199.19 720.75l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.3 3.1-2.1 4.21zM213.27 711.61l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.3 3.1-2.1 4.21zM198.38 713.57l1.69.84a10.36 10.36 0 0 1 1.89-4l.21-.21c1.43-1.25-1.69-.84-1.69-.84s-2.3 3.1-2.1 4.21z",
    fill: "#94cc79"
  }), React.createElement("path", {
    d: "M172.17 750.09s-5.87 2.71-5.24-2.6a20.88 20.88 0 0 1 9.16-5.3s24.07-13.07 26.11-16.58c0 0 19.19-16.2 19.39-17.81 0 0 1.93-.65-1.88 4.8s-19 17.89-19 17.89l-16.83 12-6.83 3z",
    fill: "#e7c4c3"
  }), React.createElement("path", {
    d: "M172.17 750.09s-5.87 2.71-5.24-2.6a20.88 20.88 0 0 1 9.16-5.3s24.07-13.07 26.11-16.58c0 0 19.19-16.2 19.39-17.81 0 0 1.93-.65-1.88 4.8s-19 17.89-19 17.89l-16.83 12-6.83 3z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#cccad6",
    d: "M190.71 755.03l-83.58-53.32v14.67l84.47 57.09-.89-18.44zM98.19 706.89l8.94-5.18-53.5-99.33-6.27 6.09 50.83 98.42z"
  }));
};

UndrawStayingIn.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawStayingIn;