function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWeather = _props => {
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
    viewBox: "0 0 1101.15 790.45",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 286.48,
    y1: 766.2,
    x2: 286.48,
    y2: 93.7,
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
    d: "M709.17 86.44c-43.78 30.47-100.57 28.5-150.34 12.65s-95.48-44.09-144-64.16A470.28 470.28 0 0 0 288.37 2.15c-61.8-7-130.81 1.53-173.87 50.8-47.95 54.87-44.27 153.82 7.59 204.19 26.38 25.62 60.93 38.19 91 58.19s58 53.22 55.45 91.83c-2.38 35.74-30 63.16-58.57 80.37-22.08 13.3-49.29 27.82-51.95 55.37-2.57 26.65 20.3 47.54 42.14 59.41 71.25 38.75 159 38.38 230-1 25.32-14 48.6-32.71 75.15-43.65 69.73-28.73 146.56.19 220.39 10.76a443.07 443.07 0 0 0 187.44-13.56c36.57-10.74 73.27-27.15 98.95-57.73 18.52-22 30.06-49.95 40.9-77.5q17.32-44.08 33.31-88.78c6.39-17.89 12.69-36.12 14.34-55.26 3-34.69-9.62-69-26.79-98.24-40.77-69.49-109.45-118.36-183.78-130.77S736.98 58.41 679.3 111.46",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 176,
    cy: 697.43,
    rx: 176,
    ry: 29.99,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 226.43,
    y: 183.98,
    width: 796.46,
    height: 377.59,
    rx: 30.34,
    ry: 30.34,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M389.67 492.93H260.86a27.94 27.94 0 0 1-27.94-27.94V280.58a27.93 27.93 0 0 1 27.94-27.94h128.81zM988.44 492.93h-128.8V252.64h128.8a27.93 27.93 0 0 1 27.94 27.94v184.41a27.94 27.94 0 0 1-27.94 27.94zM702.9 252.63h156.74v240.29H702.9zM546.16 252.63H702.9v240.29H546.16z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M389.42 252.63h156.74v240.29H389.42z"
  }), React.createElement("path", {
    d: "M478.51 359.05a2.27 2.27 0 0 1-2.27-2.27v-6.55a2.27 2.27 0 1 1 4.54 0v6.57a2.27 2.27 0 0 1-2.27 2.25zM467.01 363.81a2.26 2.26 0 0 1-1.6-.66l-4.64-4.65a2.27 2.27 0 1 1 3.2-3.21l4.65 4.65a2.27 2.27 0 0 1-1.61 3.87zM494.66 391.45a2.28 2.28 0 0 1-1.61-.66l-4.64-4.65a2.27 2.27 0 1 1 3.21-3.2l4.64 4.64a2.27 2.27 0 0 1-1.6 3.87zM501.34 375.31h-6.57a2.27 2.27 0 0 1 0-4.54h6.57a2.27 2.27 0 0 1 0 4.54zM490.01 363.81a2.27 2.27 0 0 1-1.6-3.87l4.64-4.65a2.27 2.27 0 1 1 3.21 3.21l-4.64 4.65a2.3 2.3 0 0 1-1.61.66z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M490.57 373.04a12 12 0 0 0-21.77-7 16.87 16.87 0 0 0-24.23 9.08 11.34 11.34 0 0 0-3.89.23 11.3 11.3 0 0 0-8.38 13.58 11.27 11.27 0 0 0 11 8.69h30.27a13.31 13.31 0 0 0 3-.35 13.05 13.05 0 0 0 9.79-15.19 12 12 0 0 0 4.21-9.04zm-15 19.81a8.08 8.08 0 0 1-2 .23h-30.32a6.75 6.75 0 0 1-1.55-13.31 6.86 6.86 0 0 1 1.56-.19 6.6 6.6 0 0 1 2.15.36 2.29 2.29 0 0 0 1.86-.18 2.26 2.26 0 0 0 1.09-1.51 12.34 12.34 0 0 1 22.89-3.45.31.31 0 0 1 .05.1 2.3 2.3 0 0 0 2.07 1.19h.25a8.46 8.46 0 0 1 7.24 4 8.78 8.78 0 0 1 1 2.5 9.19 9.19 0 0 1 .23 1.87 8.51 8.51 0 0 1-6.52 8.39zm6.08-18.54a13.2 13.2 0 0 0-7-2.73 16.79 16.79 0 0 0-2.25-2.78 7.47 7.47 0 1 1 12.17 8.66 13.08 13.08 0 0 0-2.92-3.15z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M658.01 370.23a13 13 0 0 0-11.69-10 16.87 16.87 0 0 0-27.63-1 16.87 16.87 0 0 0-15.12 11.26 11.29 11.29 0 1 0-1.29 22.51h30.29a13.29 13.29 0 0 0 3-.35 13.05 13.05 0 0 0 8.38-6.34h1.34a13.31 13.31 0 0 0 3-.35 13.06 13.06 0 0 0 9.72-15.73zm-19.77 16a8.5 8.5 0 0 1-3.67 2 8.76 8.76 0 0 1-2 .23h-30.34a6.75 6.75 0 0 1-1.55-13.32 6.87 6.87 0 0 1 3 0 5.94 5.94 0 0 1 .72.21 2.29 2.29 0 0 0 3-1.7 12.37 12.37 0 0 1 12.08-9.83 11.8 11.8 0 0 1 1.69.12 12.34 12.34 0 0 1 9.17 6.36 2.24 2.24 0 0 0 2.06 1.19h.17a8.5 8.5 0 0 1 5.63 14.85zm9-4.77a8.18 8.18 0 0 1-1.77.23 12.86 12.86 0 0 0-.23-4.81 13 13 0 0 0-11.69-10 16.88 16.88 0 0 0-9.32-7 12.32 12.32 0 0 1 18.74 3.62 2.26 2.26 0 0 0 2.07 1.19h.25a8.5 8.5 0 0 1 2 16.77z",
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("g", {
    opacity: 0.5,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M948.57 391.69l-1.46-.85 1.46-.84a1.149 1.149 0 0 0-1.13-2l-1.47.85v-1.62a1.14 1.14 0 1 0-2.27 0v1.67l-1.45-.84a1.149 1.149 0 0 0-1.13 2l1.45.83-1.45.84a1.13 1.13 0 0 0-.41 1.55 1.14 1.14 0 0 0 1 .57 1 1 0 0 0 .56-.16l1.45-.83v1.69a1.14 1.14 0 0 0 2.27 0v-1.69l1.47.84a1 1 0 0 0 .56.16 1.16 1.16 0 0 0 1-.57 1.14 1.14 0 0 0-.45-1.6zM941.74 382.23l-1.46-.84 1.46-.85a1.12 1.12 0 0 0 .41-1.54 1.13 1.13 0 0 0-1.55-.42l-1.46.85v-1.68a1.14 1.14 0 0 0-2.27 0v1.67l-1.45-.83a1.149 1.149 0 1 0-1.13 2l1.45.84-1.45.83a1.13 1.13 0 0 0 .57 2.12 1.12 1.12 0 0 0 .56-.15l1.45-.84v1.7a1.14 1.14 0 0 0 2.27 0v-1.7l1.43.84a1.18 1.18 0 0 0 .57.15 1.14 1.14 0 0 0 .57-2.12zM934.93 391.69l-1.46-.85 1.46-.84a1.149 1.149 0 0 0-1.13-2l-1.47.85v-1.62a1.14 1.14 0 1 0-2.27 0v1.67l-1.44-.84a1.151 1.151 0 0 0-1.14 2l1.45.83-1.45.84a1.13 1.13 0 0 0-.41 1.55 1.14 1.14 0 0 0 1 .57 1.1 1.1 0 0 0 .57-.16l1.44-.83v1.69a1.14 1.14 0 0 0 2.27 0v-1.69l1.47.84a1 1 0 0 0 .56.16 1.14 1.14 0 0 0 .57-2.12z"
  }), React.createElement("path", {
    d: "M965.01 367.63a13.05 13.05 0 0 0-11.69-10 16.88 16.88 0 0 0-30.08 3.53 11.29 11.29 0 1 0-1.29 22.51h3.62a2.27 2.27 0 0 0 0-4.54h-3.65a6.72 6.72 0 0 1-6.56-5.2 6.77 6.77 0 0 1 5-8.12 6.84 6.84 0 0 1 3.72.17 2.27 2.27 0 0 0 3-1.69 12.34 12.34 0 0 1 22.94-3.35 2.26 2.26 0 0 0 2.06 1.19h.26a8.5 8.5 0 0 1 2 16.77 8.74 8.74 0 0 1-2 .23h-1.89a2.27 2.27 0 0 0 0 4.54h1.89a13 13 0 0 0 12.69-16.05z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M798.57 381.33a13.29 13.29 0 0 1-3 .35h-5.17a2.27 2.27 0 0 1 0-4.54h5.17a8.76 8.76 0 0 0 2-.23 8.5 8.5 0 0 0-2-16.77h-.26a2.24 2.24 0 0 1-2.06-1.19 12.35 12.35 0 0 0-23 3.35 2.26 2.26 0 0 1-3 1.69 6.76 6.76 0 0 0-7.9 2.85 6.76 6.76 0 0 0 5.74 10.3h7.6a2.27 2.27 0 0 1 0 4.54h-7.6a11.29 11.29 0 0 1-9.6-17.22 11.35 11.35 0 0 1 10.89-5.29 16.87 16.87 0 0 1 30.19-3.53 13 13 0 0 1 2 25.69z"
  }), React.createElement("path", {
    d: "M782.21 381.09h3.2l-6.85 16.54 1.64-11.92h-3.05l2.41-13.21h6.23l-3.58 8.59z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M311.29 358.79a2.27 2.27 0 0 1-2.26-2.27v-6.57a2.27 2.27 0 1 1 4.53 0v6.57a2.27 2.27 0 0 1-2.27 2.27zM295.03 375.05h-6.57a2.27 2.27 0 0 1 0-4.54h6.57a2.27 2.27 0 0 1 0 4.54zM311.29 397.88a2.27 2.27 0 0 1-2.26-2.27v-6.57a2.27 2.27 0 0 1 4.53 0v6.57a2.27 2.27 0 0 1-2.27 2.27zM334.12 375.05h-6.55a2.27 2.27 0 0 1 0-4.54h6.56a2.27 2.27 0 0 1 0 4.54zM311.29 384.79a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-19.48a7.47 7.47 0 1 0 7.48 7.47 7.48 7.48 0 0 0-7.48-7.47zM299.8 363.55a2.26 2.26 0 0 1-1.61-.66l-2.32-2.32a2.27 2.27 0 0 1 3.21-3.21l2.32 2.32a2.27 2.27 0 0 1-1.6 3.87zM297.47 388.87a2.27 2.27 0 0 1-1.6-3.87l2.32-2.32a2.27 2.27 0 1 1 3.21 3.21l-2.32 2.34a2.3 2.3 0 0 1-1.61.64zM325.12 388.87a2.28 2.28 0 0 1-1.61-.66l-2.32-2.32a2.27 2.27 0 0 1 3.21-3.21l2.32 2.32a2.27 2.27 0 0 1-1.6 3.87zM322.79 363.55a2.27 2.27 0 0 1-1.6-3.87l2.32-2.32a2.27 2.27 0 0 1 3.21 3.21l-2.32 2.32a2.28 2.28 0 0 1-1.61.66z"
  })), React.createElement("rect", {
    x: 265.53,
    y: 263.1,
    width: 91.54,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#f6f7f9"
  }), React.createElement("rect", {
    x: 422.14,
    y: 263.1,
    width: 91.54,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#f6f7f9"
  }), React.createElement("rect", {
    x: 578.76,
    y: 263.1,
    width: 91.54,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#f6f7f9"
  }), React.createElement("rect", {
    x: 735.38,
    y: 263.1,
    width: 91.54,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#f6f7f9"
  }), React.createElement("rect", {
    x: 892,
    y: 263.1,
    width: 91.54,
    height: 28,
    rx: 14,
    ry: 14,
    fill: "#f6f7f9"
  }), React.createElement("path", {
    d: "M471.57 423.59s-29.84-29.95-39.18-30.38c-5.37-.24-11.57-2.93-15.87-5.16l-1.1-.58c1-1.31.47-2-.05-2.37a2.4 2.4 0 0 0-.55-.26l-71.14-56.2c.67-1.07-3.11-13-3.11-13l-3.78-12.43-8-10.35s2.23-7.24 0-10.86-1.77-12.14-3.33-32.79-10-21.93-10-21.93-32.7-21.7-36.46-21.06c-3.52.59-8.22-6.22-8.84-7.14l-.07-.1s0 .09-.06.24q.08-1.17.06-2.37v-.86A49.46 49.46 0 0 1 273 186c.28-.69.56-1.34.84-1.94A39.25 39.25 0 0 0 301.1 157c.06-.23.11-.46.17-.69 1.61.2 3.24.29 4.82.35h.3a13.38 13.38 0 0 1-1.07-3.41H305a15.19 15.19 0 0 1-.19-1.77c.12.39.25.78.4 1.17a21.76 21.76 0 0 1 1.62-10.53c1.83-4.65 4.64-8.88 6.65-13.46a20.35 20.35 0 0 0 2.07-9.87 11.67 11.67 0 0 0-.91-3.56 1 1 0 0 0 0 .16v.76a9.51 9.51 0 0 0-4.64-5.65c-1.8-.88-3.91-1.1-5.58-2.21-4.93-3.26-4.65-8.54-11.22-10.24-5.28-1.37-10.87-1.35-16.2-2.78-11.5-3.06-21.22-1.15-32.34 2.79-8.32 3.33-16.44 7.6-22.72 13.93s-10.56 15-10 23.82a16.31 16.31 0 0 0 2.31 7.92c1.33 2.08 3.33 3.81 4 6.17.8 2.72-.31 5.6-.32 8.44 0 2.58 1.81 5.6 4.24 5.56a2.91 2.91 0 0 0 1-.09 4.72 4.72 0 0 0 2.18-1.51c.15.34.3.68.46 1 .38.81.8 1.61 1.25 2.38-.07.43-.15.86-.25 1.27a19.25 19.25 0 0 1-5.05 8.41 3.79 3.79 0 0 0-1.7.54l-.49.24-16.22 8.18h-1.78c-5.24-.07-20.35-.19-22.67.74-2.82 1.15-30.09 3.34-30.09 3.34s-14.53.85-13.78 22c0 0-5.49 17.93-7.12 20.91s-11.26 32.07-11.26 32.07L105.42 319l-1.34 61.59s0 7-.22 15.31c-.49 13.82-1.18 25.28-2.14 27.27l1 .4a4 4 0 0 1-.16.46l.88-.2 6.23 2.32S94.3 443.6 105.42 448c5.49 2.17 18.5 8.46 30.27 14.27a75.86 75.86 0 0 0 3.07 38.52 63.9 63.9 0 0 1 .75 21.86c-1.77 11.07.15 47.69.15 47.69l-.15 64.16s2.37 41.16 4.45 50-4.45 12.5-4.45 12.5 4.27 24.19 9.45 27.4c-.1.47-.22 1-.35 1.47a79.79 79.79 0 0 1-3.91 11.58c-3.56 8.37-1.33 14.33-1.33 14.33s.29 11.79 21.63 14.2 20.46-12.5 18.68-18.17c-1.09-3.47-.3-14.25.49-22.11.06-.63.12-1.24.18-1.82 1.31-.84 3-2.63 5-6.45 4.14-8.23 0-28.1-3-34.63s-.3-13.63-.3-13.63-3.26-36.62 0-39.73 2.67-17 2.67-17l5.34-28.68 6.22-12.2 1.78-26.69 5-23.56s2.07-2 3.85-20.72 4.15-12.78 4.15-12.78c-.88 12.49 5.93 18.74 5.93 18.74l1.86 32.65s2.29 24.4 6.08 30.37 0 13.34 0 13.34 1.25 23.27.15 30.09 4.36 22.43 4.36 22.43l1.48 28.1s-8.89 25.26-4.74 33.5 2.08 17.88 2.08 17.88a4.17 4.17 0 0 0 .88 1.49c-.11.43-.22.87-.32 1.33a79 79 0 0 0-1.3 9.1s2.22 3 12.15 6.67 7.71 9.94 9.19 13.92 11.56 7.51 31.42 6.66 7.26-15.18 7.26-15.18-10.37-14.62-13.93-16.61c-1.23-.69-2.52-2.94-3.7-5.63-.22-.5-.43-1-.64-1.54l.83-.21s5.29-42 1.44-46 1.27-31.23 1.27-31.23 2.58-9.07 1.4-11.63 1.18-12.49 1.18-12.49 1.78-27-1.49-33.21 1.78-42.59 1.78-42.59 2.08-34.06 7.32-46.26c1-2.24 1.56-7 1.92-13.2 2.9-1.41 4.7-2.49 4.7-2.49s6-80.9 2.44-90.91A58.57 58.57 0 0 1 293 365l6.89-24.48s4.45 12.13 7.34 13.62 6.45 7.46 6.45 7.46l30.45 24.27 23.57 17.24 20.9 17.25a29.3 29.3 0 0 1 3.77-11.36l.74.27c3.86 1.39 8.76 3.11 7.56 2.41-.66-.39-.31-2.58.72-5.45l.89.86A171.74 171.74 0 0 0 416 418.48c22.11 16.88 33.72-2 33.72-2s11.12 9.64 16.6 11.77 5.25-4.66 5.25-4.66z",
    transform: "translate(-49.43 -54.77)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M184.86 670.23s2.12 3 11.55 6.62 7.32 9.86 8.73 13.81 11 7.46 29.86 6.61 6.9-15.06 6.9-15.06-9.86-14.51-13.24-16.48c-1.17-.68-2.39-2.92-3.52-5.58a104.23 104.23 0 0 1-3.81-11.61s-31.12 4.23-33.37 7.33a15.48 15.48 0 0 0-1.85 5.33 82.11 82.11 0 0 0-1.25 9.03zM101.07 695.05s.28 11.69 20.56 14.08 19.43-12.39 17.74-18c-1-3.44-.28-14.14.47-21.94.47-5 .94-8.77.94-8.77s-34.08.71-33.8 2.54a22.87 22.87 0 0 1-.93 6.4 81.53 81.53 0 0 1-3.71 11.49c-3.38 8.28-1.27 14.2-1.27 14.2z",
    fill: "#b07473"
  }), React.createElement("path", {
    d: "M341.57 346.43c.58 1.2 2 3.24 5.47 6.64a165.64 165.64 0 0 0 13.05 11.31c21 16.75 32-2 32-2s10.56 9.58 15.78 11.69 5-4.65 5-4.65-28.3-29.68-37.18-30.11c-5.11-.24-11-2.9-15.08-5.12-3-1.64-5.06-3-5.06-3l-7.62 7.35-6.64 6.4s-.27.29.28 1.49z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M187.96 655.9a15.48 15.48 0 0 0-1.85 5.33c5.24 7.63 36.41-.37 39-1a104.23 104.23 0 0 1-3.81-11.61s-31.09 4.18-33.34 7.28zM106.05 669.34a3 3 0 0 0 .65.42c5.07 2.3 31-.06 31-.06a2.67 2.67 0 0 0 2.16-.53c.47-5 .94-8.77.94-8.77s-34.08.71-33.8 2.54a22.87 22.87 0 0 1-.95 6.4z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M96.69 446.07a66 66 0 0 1 .72 21.68c-1.69 11 .14 47.32.14 47.32l-.14 63.66s2.25 40.84 4.22 49.56-4.22 12.4-4.22 12.4 4.22 25.07 9.29 27.38 31-.06 31-.06 3.1 1.13 7-7 0-27.88-2.82-34.37-.28-13.52-.28-13.52-3.1-36.33 0-39.42 2.53-16.9 2.53-16.9l5.07-28.45 5.95-12.12 1.69-26.48 4.79-23.37s2-2 3.66-20.57 3.94-12.67 3.94-12.67c-.84 12.39 5.63 18.58 5.63 18.58l1.77 32.4s2.18 24.22 5.78 30.13 0 13.24 0 13.24 1.19 23.1.14 29.86 4.14 22.25 4.14 22.25l1.41 27.89s-8.45 25.06-4.5 33.23 2 17.74 2 17.74c3.1 9.87 39.75 0 39.75 0s5-41.68 1.37-45.62 1.21-31 1.21-31 2.45-9 1.33-11.54 1.12-12.4 1.12-12.4 1.69-26.76-1.41-32.95 1.69-42.25 1.69-42.25 2-33.8 6.95-45.91c.92-2.22 1.49-6.93 1.83-13.14 1.49-27.61-1.83-84.87-1.83-84.87l-13.78-18.88-14.38-.76-13.88-.76-26.06-1.38-25.74-1.37-31.44-1.67s-6.47 58-15.64 83.1a66.07 66.07 0 0 0-2.91 10.76 78.45 78.45 0 0 0 2.91 38.25z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M173.31 125.23l11.2 27.46 24.29 4s12.89 4.44 12.25-6.55c-.33-5.82 1.47-12 3.23-16.52a56.47 56.47 0 0 1 3.11-6.71s-49.85-28.1-47.1-18.59a12.45 12.45 0 0 1 .12 6.4c-1.49 6.26-7.1 10.51-7.1 10.51z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    fill: "#b07473",
    d: "M202.47 325.23h-54.64l2.81 19.15h52.95l-1.12-19.15z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M202.47 325.23h-54.64l2.81 19.15h52.95l-1.12-19.15zM341.57 346.43c.58 1.2 2 3.24 5.47 6.64 1.85-5.43 6-13.33 10.2-16a11 11 0 0 0 3.33-2.84c-3-1.64-5.06-3-5.06-3l-7.62 7.35z"
  }), React.createElement("path", {
    d: "M334.28 353.68s1.86.72 4.08 1.55c3.67 1.39 8.33 3.1 7.18 2.39-1.82-1.12 4.52-17.32 10.89-21.4 4.74-3 3.85-4.44 3.08-5a1.9 1.9 0 0 0-.51-.25l-5.14-1.84z",
    fill: "#e1e7ef"
  }), React.createElement("path", {
    d: "M180.29 108.36a12.45 12.45 0 0 1 .12 6.4 38.14 38.14 0 0 0 43.87 18.9 56.47 56.47 0 0 1 3.11-6.71s-49.82-28.1-47.1-18.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M175.99 95.23a38.1 38.1 0 1 0 38.09-38.09 37.86 37.86 0 0 0-38.09 38.09z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M142.47 325.3l24.29 1.09 28 1.25 13.66.62 1-9.14 10.79-94.58 3.59-71.61h-9.72l-26.82-4.44-9.53-3.56-12.44-4.7-10.14 20.71-3.38 94.84-8 59.83z",
    fill: "#e1e7ef"
  }), React.createElement("path", {
    d: "M175.64 220.32s9.71-42.46 16.47-50.7c0 0-2.53-14.58-8.13-16.48s8.56-4.65 8.56-4.65l8.66 3 8.66 3.54s-7.61 6.76-6.34 15.63a22.79 22.79 0 0 0 1.05 11.84c2.32 5.92 2.74 53.87 0 60.21s-2.32 20.28-2.32 20.28l-5.68 27.24-1.9 32.74-20.51 15.26-14.37-18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M174.79 219.47s9.72-42.46 16.48-50.7c0 0-2.54-14.57-8.13-16.47s8.55-4.65 8.55-4.65l8.66 3 8.66 3.54s-7.6 6.76-6.33 15.63a22.85 22.85 0 0 0 1 11.83c2.33 5.91 2.75 53.87 0 60.2s-2.32 20.28-2.32 20.28l-5.7 27.25-1.91 32.74-20.49 15.21-14.36-17.95z",
    fill: "#b07473"
  }), React.createElement("path", {
    d: "M221.46 144.48l-21.11 7s10.55 5.44 10.56 21.5c0 .02 10.74-13.09 10.55-28.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M221.46 143.63l-21.11 7s10.55 5.44 10.56 21.49c0 .03 10.74-13.07 10.55-28.49z",
    fill: "#e1e7ef"
  }), React.createElement("path", {
    d: "M175.62 123.95s10.37 17.89 24.73 27.55c0 0-8.7-3.22-24.73 9 0 .03-9.95-35.74 0-36.55z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M175.62 123.11s10.37 17.88 24.73 27.55c0 0-8.7-3.22-24.73 9 0 .03-9.95-35.74 0-36.55z",
    fill: "#e1e7ef"
  }), React.createElement("path", {
    d: "M334.28 353.68s1.86.72 4.08 1.55c6.28-12.14 19-22.27 21.15-24a1.9 1.9 0 0 0-.51-.25l-5.14-1.84zM191.69 383.82c.64 14.15 8.45 40.35 8.45 40.35 9.82 13.6 31.56 3.62 39.27-.54 1.49-27.61-1.83-84.87-1.83-84.87l-13.78-18.88-14.38-.76 10.79-94.58 3.59-71.61h-5.37c-1.74 7.28-4.48 19.58-4 22.6.7 4.37-6.63 47.89-6.63 47.89l-9.06 55.44-2.48 15.11c.82 2.53.21 13.28-.72 24.41-.27 3.11-.55 6.26-.83 9.26-1 10.27-2 18.86-2 18.86-1.23 9.73-1.02 37.32-1.02 37.32z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M193.38 382.97c.64 14.16 8.45 40.35 8.45 40.35 12 16.69 42-2.11 42-2.11s5.7-80.27 2.32-90.2a60.23 60.23 0 0 1-2.95-19.65l6.54-24.29s4.23 12 7 13.52 6.12 7.39 6.12 7.39l28.94 24.08 22.39 17.11 19.86 17.11c1.48-17.74 24.93-35.27 24.93-35.27l-67.58-55.78c.63-1.06-3-12.89-3-12.89l-3.59-12.33-7.6-10.27s2.11-7.18 0-10.77-1.69-12-3.17-32.53-9.47-21.75-9.47-21.75-31-21.55-34.64-20.92c-3.35.6-7.82-6.16-8.41-7.08l-.06-.1s-6 23.73-5.33 28.1-6.63 47.88-6.63 47.88l-9.06 55.44-2.48 15.12c1.84 5.66-3.52 52.52-3.52 52.52-1.27 9.72-1.06 37.32-1.06 37.32z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M93.78 407.82c12.11 6.24 23.34 12.19 23.34 12.19s18.74 6.2 26.34-29l21.83-59.85s.57-1.78 1.47-4.76c.74-2.43 1.7-5.67 2.73-9.39 4.29-15.25 10-38.54 7.91-47.68v-.71l-.43-81.81s2.31-38.46.87-41.63a1.66 1.66 0 0 0-.11-.24l-12.44-4.71-10.14 20.71-3.38 94.84-8 59.83-31.44-1.67s-6.47 58-15.64 83.1a66.07 66.07 0 0 0-2.91 10.78z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M65.01 393.68c10.57 4.36 50.42 25.48 50.42 25.48s18.74 6.21 26.34-29l21.8-59.85s15.35-47.75 12.11-61.83v-.71l-.43-81.82s2.31-38.45.87-41.62c-1.35-3-3-11.91-2.29-19.49.05-.4.09-.8.14-1.2l-.48.26-15.42 8.11h-1.69c-5-.07-19.34-.19-21.54.74-2.68 1.13-28.59 3.31-28.59 3.31s-13.8.84-13.09 21.86c0 0-5.22 17.79-6.76 20.74s-10.71 31.82-10.71 31.82L64.98 265.7l-1.26 61.11s-.14 39-2.25 42.25l7.6 3s-14.62 17.25-4.06 21.62z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M102.48 359.03l4.79 6.34s29.29 53.09-3.38 45.35S76 376.23 76 376.23l2-18.59z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M143.74 645.62c-.7-.14-12.11-4.93-20-4.93s-18.45-.85-17.18 1.27 16.48 2.39 20.84 4.5 13.66 7.89 14.51 8.17 1.83-9.01 1.83-9.01zM222.32 621.68c-.14.84-16.9 19.66-26.19 18.84s26.19-18.84 26.19-18.84zM217.39 576.75s-18 45.77-23.8 48.17-6.62-5.64-3.52-7.89 12.68-17.04 27.32-40.28zM124.73 561.68s-3 16.9 4.5 27.89-4.5-27.89-4.5-27.89zM172.05 408.46c.32-.26-26.9-1.41-26.9-1.41s12.25 13.38 26.9 1.41zM168.67 420.15l-16.48 1.55s5.77 7.04 16.48-1.55zM266.12 244.54s14.79 2 16.2 6.34-16.2-6.34-16.2-6.34zM292.31 280.73c-1.12-.42-10.28-3.1-16.75-1.41s-15.64-3.1-15.64-3.1-9.29-.28-7.46 1 7.32.7 10.42 2.54 11.25 3.38 13.3 2.53 16.13-1.56 16.13-1.56z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M200.44 278.01l.34 7.65s25.91-63.65 32.38-77.32 2.83-43.37 2.83-43.37l-3.67-.85-10.75-17.43-.06-.1s-6 23.73-5.33 28.1-6.63 47.88-6.63 47.88zM148.57 144.69s10.65 109.54 27.14 123.08l-.43-81.82s2.31-38.45.87-41.62c-1.35-3-3-11.91-2.29-19.49l-.34-.94-15.42 8.11h-1.69l-1 14.61z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M200.44 278.01l.34 7.65s25.91-63.65 32.38-77.32 2.83-43.37 2.83-43.37l-3.67-.85-10.75-17.43-.06-.1s-6 23.73-5.33 28.1-6.63 47.88-6.63 47.88zM148.57 144.69s10.65 109.54 27.14 123.08l-.43-81.82s2.31-38.45.87-41.62c-1.35-3-3-11.91-2.29-19.49l-.34-.94-15.42 8.11h-1.69l-1 14.61z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 203.6,
    cy: 296.08,
    r: 3.15,
    fill: "#444053"
  }), React.createElement("circle", {
    cx: 200.44,
    cy: 342.69,
    r: 3.15,
    fill: "#444053"
  }), React.createElement("path", {
    d: "M175.99 95.23a37.86 37.86 0 0 0 3.47 15.89l.5-.6c6.15-7.68 7.46-18.37 13-26.55 2-2.92 4.57-5.56 7.87-6.64s7.32-.25 9.35 2.62c1.28 1.82 1.66 4.2 3 6 2.58 3.39 7.53 3.3 11.68 2.67s8.87-1.34 12.07 1.43 3.43 7.53 6 10.74c2 2.45 4.92 3.57 8.05 4.1a38.09 38.09 0 1 0-75-9.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M197.38 46.4c-7.9 3.31-15.62 7.54-21.59 13.83s-10 14.86-9.55 23.63a16.87 16.87 0 0 0 2.2 7.86c1.26 2.06 3.16 3.78 3.83 6.12.76 2.7-.3 5.56-.3 8.37s2.07 6.16 4.71 5.42a5.1 5.1 0 0 0 2.44-1.93c6.14-7.67 7.45-18.37 12.94-26.54 2-2.92 4.57-5.56 7.87-6.64s7.33-.26 9.36 2.62c1.28 1.82 1.65 4.2 3 6 2.57 3.39 7.53 3.3 11.67 2.67s8.87-1.34 12.08 1.42 3.43 7.53 6 10.74c3.15 3.91 8.71 4.42 13.64 4.62-2-4.49-1.3-9.83.44-14.44s4.41-8.81 6.32-13.35a21 21 0 0 0 2-9.8c-.29-3.35-2-6.72-4.94-8.22-1.71-.88-3.72-1.1-5.31-2.2-4.69-3.23-4.42-8.48-10.66-10.16-5-1.36-10.33-1.34-15.39-2.75-10.96-3.08-20.19-1.18-30.76 2.73z",
    fill: "#585268"
  }), React.createElement("path", {
    d: "M86.28 363.54s-8.59 8.45-9.72 8.31-2.81-7.61-2.81-7.61z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M85.44 362.69s-8.59 8.45-9.72 8.31-2.82-7.6-2.82-7.6z",
    fill: "#e1e7ef"
  }), React.createElement("path", {
    d: "M62.34 369.88s36.62-8.45 45.77-4.51c0 0-3.38-20.7-2.82-24.5s-.14-17.05-.14-17.05-2.11-24.64.71-31.54 1.26-25.21 1.26-25.21l-41.68 19.85s-.56 77.46-3.1 82.96z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M61.5 369.03s36.61-8.45 45.77-4.51c0 0-3.38-20.7-2.82-24.5s-.14-17-.14-17-2.11-24.65.7-31.55 1.27-25.2 1.27-25.2l-41.71 19.81s-.54 77.46-3.07 82.95z",
    fill: "#67647e"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M254.87 100.56c-1.71-4.35-1-9.42.69-13.82 1.74-4.62 4.41-8.81 6.32-13.35a21 21 0 0 0 2-9.8 1 1 0 0 0 0-.16 12.08 12.08 0 0 1 .87 3.54 21 21 0 0 1-2 9.8c-1.91 4.54-4.57 8.73-6.31 13.35a22.32 22.32 0 0 0-1.57 10.44zM176.11 108.23a5.17 5.17 0 0 0 2.45-1.93c6.14-7.67 7.45-18.37 12.94-26.54 2-2.92 4.57-5.56 7.86-6.64s7.33-.26 9.36 2.62c1.29 1.82 1.65 4.2 3 6 2.58 3.39 7.53 3.3 11.68 2.67s8.87-1.34 12.08 1.42 3.43 7.53 6 10.74c3.11 3.87 8.58 4.4 13.47 4.61a13.65 13.65 0 0 0 1 3.39c-4.94-.2-10.5-.71-13.65-4.62-2.58-3.21-2.91-8.06-6-10.74s-7.94-2.06-12.08-1.42-9.1.72-11.67-2.67c-1.34-1.77-1.71-4.15-3-6-2-2.88-6.07-3.7-9.36-2.62s-5.9 3.72-7.87 6.64c-5.49 8.17-6.8 18.87-12.94 26.54a5.1 5.1 0 0 1-2.44 1.93c-2.64.74-4.72-2.61-4.71-5.42v-.13c.87 1.56 2.27 2.64 3.88 2.17zM167.87 88.34c1.27 2.06 3.17 3.78 3.83 6.12a7.39 7.39 0 0 1 .27 2c-.86-1.68-2.25-3.1-3.25-4.72a15.46 15.46 0 0 1-2-5.79 14 14 0 0 0 1.15 2.39z"
  })), React.createElement("ellipse", {
    cx: 808.62,
    cy: 660.81,
    rx: 79.78,
    ry: 12.24,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 389.42,
    cy: 784.4,
    rx: 39.46,
    ry: 6.06,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 641.1,
    cy: 753.13,
    rx: 39.46,
    ry: 6.06,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 459.31,
    cy: 709.39,
    rx: 39.46,
    ry: 6.06,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 577.51,
    cy: 673.06,
    rx: 39.46,
    ry: 6.06,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1012.07 604.23s6.64 8.69-3.07 21.8-17.71 24.2-14.43 32.33c0 0 14.64-24.35 26.57-24.69s4.04-14.82-9.07-29.44z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1012.07 604.23a10.93 10.93 0 0 1 1.36 2.73c11.63 13.66 17.83 26.42 6.64 26.74-10.41.29-22.91 18.92-25.9 23.62a10.34 10.34 0 0 0 .36 1.07s14.64-24.35 26.57-24.69 4.08-14.85-9.03-29.47z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1024.42 615.23c0 3.06-.35 5.54-.77 5.54s-.77-2.48-.77-5.54.43-1.61.86-1.61.68-1.39.68 1.61z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1028.65 618.92c-2.68 1.47-5 2.35-5.22 2s1.81-1.86 4.49-3.32 1.63-.4 1.83 0 1.59-.14-1.1 1.32z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M976.98 604.23s-6.64 8.69 3.07 21.8 17.71 24.2 14.52 32.33c0 0-14.65-24.35-26.57-24.69s-4.13-14.82 8.98-29.44z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M976.98 604.23a10.74 10.74 0 0 0-1.35 2.73c-11.63 13.66-17.83 26.42-6.65 26.74 10.41.29 22.91 18.92 25.9 23.62a10.28 10.28 0 0 1-.35 1.07s-14.65-24.35-26.57-24.69-4.09-14.85 9.02-29.47z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M964.64 615.23c0 3.06.34 5.54.76 5.54s.77-2.48.77-5.54-.43-1.61-.85-1.61-.68-1.39-.68 1.61z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M960.4 618.92c2.68 1.47 5 2.35 5.23 2s-1.81-1.86-4.5-3.32-1.62-.4-1.82 0-1.59-.14 1.09 1.32z",
    fill: "#ffd037"
  }), React.createElement("ellipse", {
    cx: 994.53,
    cy: 714.15,
    rx: 69.45,
    ry: 10.66,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1030.27 646.66l-.33 2.71-.47 3.83-.19 1.6-.47 3.83-.2 1.6-.46 3.83-5.32 43.56c-.47 3.89-6.83 6.92-14.5 6.92h-27.61c-7.67 0-14-3-14.49-6.92l-5.32-43.56-.47-3.83-.19-1.6-.48-3.83-.2-1.57-.46-3.83-.34-2.71c-.26-2.2 3.17-4.06 7.51-4.06h56.48c4.34-.03 7.81 1.83 7.51 4.03z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M1029.94 649.37l-.47 3.82h-69.89l-.46-3.82h70.82zM1029.28 654.79l-.46 3.84h-68.57l-.47-3.84h69.5zM1028.61 660.22l-.46 3.83h-67.24l-.46-3.83h68.16z"
  }));
};

UndrawWeather.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWeather;