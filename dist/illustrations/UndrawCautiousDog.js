function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCautiousDog = _props => {
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
    viewBox: "0 0 921 532.56",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 460.5,
    y1: 532.56,
    x2: 460.5,
    y2: 81.56,
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
    x1: 698.5,
    y1: 537.03,
    x2: 941.5,
    y2: 537.03,
    xlinkHref: "#prefix__a"
  })), React.createElement("ellipse", {
    cx: 460.5,
    cy: 307.06,
    rx: 460.5,
    ry: 225.5,
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), React.createElement("ellipse", {
    cx: 460.5,
    cy: 307.06,
    rx: 440.57,
    ry: 215.74,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M941.5 623.15l-7.87-11.8L918 559.68l-6.43-22.84h-6.54a11.84 11.84 0 0 0 .11-1.48 10.38 10.38 0 0 0-5.06-8.91 8.89 8.89 0 0 0 .06-1 10.41 10.41 0 0 0-2.3-6.52 10.09 10.09 0 0 0-1.6-1.6h-.07c-.26-.21-.53-.4-.8-.58l-.23-.14c-.23-.14-.47-.27-.71-.39l-.32-.16-.68-.29-.36-.13c-.23-.08-.47-.14-.7-.21l-.39-.09c-.25-.06-.5-.1-.76-.14h-.35a10.92 10.92 0 0 0-1.15-.07 10.31 10.31 0 0 0-6.23 2.09 10.37 10.37 0 0 0-1.67-3 11 11 0 0 0-1.6-1.6.18.18 0 0 1-.07 0q-.39-.3-.81-.57l-.23-.15c-.23-.14-.46-.27-.7-.39l-.32-.15c-.22-.11-.45-.2-.68-.29l-.37-.14-.7-.2-.38-.1a6.71 6.71 0 0 0-.76-.13l-.35-.06a10.93 10.93 0 0 0-1.15-.06c-.41 0-.82 0-1.22.07a10.38 10.38 0 0 0-1.08-11.4 10.53 10.53 0 0 0-1.4-1.65 10.37 10.37 0 0 0 .64-13.75 10.09 10.09 0 0 0-1.6-1.6L869 482c-.26-.21-.53-.4-.8-.58l-.23-.14c-.23-.14-.47-.27-.71-.39l-.31-.16-.69-.29-.36-.13c-.23-.08-.47-.14-.7-.21s-.25-.07-.38-.09-.51-.1-.77-.14l-.35-.05a10.92 10.92 0 0 0-1.15-.07h-.82c-.21-.33-.43-.64-.67-1a11 11 0 0 0-1.6-1.6.18.18 0 0 1-.07-.05 9.08 9.08 0 0 0-.81-.57l-.23-.15c-.23-.14-.46-.27-.7-.39l-.32-.15c-.22-.11-.45-.2-.68-.29l-.37-.14-.7-.2-.38-.1c-.25-.06-.51-.1-.76-.14l-.44.03a10.93 10.93 0 0 0-1.15-.06A10.29 10.29 0 0 0 844 480c-.26-.06-.51-.1-.77-.14l-.35-.05a10.92 10.92 0 0 0-1.15-.07h-.51a10.44 10.44 0 0 0-1.78-9.75 11 11 0 0 0-1.6-1.6l-.07-.05a9.19 9.19 0 0 0-.81-.58l-.23-.14c-.23-.14-.46-.27-.7-.39l-.32-.16-.68-.29-.37-.13c-.23-.08-.46-.14-.7-.21l-.38-.09c-.25-.06-.51-.1-.76-.14l-.36-.05a10.57 10.57 0 0 0-1.14-.07 10.41 10.41 0 0 0-9 5.26c-.18-.13-.35-.26-.54-.38l-.23-.14a8.13 8.13 0 0 0-.71-.4l-.31-.15c-.22-.11-.45-.2-.68-.29l-.25-.1a10.4 10.4 0 0 0 2.25-15.12 10.09 10.09 0 0 0-1.6-1.6h-.07a9 9 0 0 0-.8-.58l-.23-.14c-.23-.14-.47-.27-.71-.4l-.31-.15-.69-.29-.36-.13c-.23-.08-.46-.14-.7-.21l-.38-.1-.77-.13h-.35a10.92 10.92 0 0 0-1.15-.07 10.41 10.41 0 0 0-10.41 10.42v.28c-.23.06-.47.11-.7.18a10.43 10.43 0 0 0-6.85 6.85 10.25 10.25 0 0 0-.47 3.1 10.93 10.93 0 0 0 .06 1.15l.06.35v.24l-.12-.07-.23-.14-.7-.4-.32-.15-.68-.29-.37-.13a7.15 7.15 0 0 0-.7-.21l-.38-.1-.76-.13-.35-.05a10.92 10.92 0 0 0-1.15-.07 10.42 10.42 0 0 0-10.42 10.42 10.73 10.73 0 0 0 .07 1.14v.35c0 .26.08.52.14.77s.06.25.1.38.13.47.2.7l.14.36c.09.24.18.46.29.69l.15.31c.12.24.25.48.39.71l.15.23a8.93 8.93 0 0 0 .57.8l.05.07.15.19h-.18c-.25-.06-.51-.1-.77-.14l-.35-.05a10.92 10.92 0 0 0-1.15-.07 10.41 10.41 0 0 0-9.94 7.32 10.72 10.72 0 0 0-.35 1.61h-.08l-.24-.15c-.23-.14-.46-.27-.7-.39l-.32-.15c-.22-.11-.45-.2-.68-.29l-.36-.14-.7-.2-.38-.1c-.26-.06-.51-.1-.77-.14l-.35-.05a10.92 10.92 0 0 0-1.15-.07 10.42 10.42 0 0 0-10.41 10.42 10.93 10.93 0 0 0 .06 1.15l.06.35c0 .25.08.51.13.76s.07.26.1.38.13.48.21.71.08.24.13.36.18.46.29.68l.15.32c.12.24.26.47.4.7a1.76 1.76 0 0 0 .14.23q.27.42.57.81l.06.07v.06a10.36 10.36 0 0 0-1.54 5.44 10.74 10.74 0 0 0 .06 1.14l.06.35c0 .26.08.52.13.77s.07.25.1.38.13.47.21.7.08.24.13.36.19.47.29.69l.15.31a8.13 8.13 0 0 0 .4.71c0 .08.09.16.14.23a10.38 10.38 0 0 0-9.21 7.28 10.25 10.25 0 0 0-.47 3.1 10.93 10.93 0 0 0 .06 1.15l.06.35a6.71 6.71 0 0 0 .13.76l.09.37h-15.59l-22.47 74.2-9.29 11.95zM801.62 505.46l-.2-.31.48-.13zm48.81-9.66l.17-.29.38.08c-.18.07-.37.13-.55.21z",
    transform: "translate(-139.5 -183.72)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 606.76,
    cy: 380.98,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M598.43 382.5a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.76 9.76 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 640.88,
    cy: 383.26,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M632.5 384.77a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 660.59,
    cy: 384.77,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M652.25 386.28a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.87 9.87 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 670.44,
    cy: 380.98,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M662.1 382.5a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.77 9.77 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 747.01,
    cy: 380.98,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M738.67 382.5a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.82 9.82 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 708.35,
    cy: 380.23,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M700.01 381.74a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 621.17,
    cy: 371.89,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M612.83 373.4a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 700.77,
    cy: 351.42,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M692.43 352.93a9.85 9.85 0 0 1 16.07-7.65 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.22-6.2z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 670.44,
    cy: 328.68,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 680.26,
    cy: 313.51,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M662.1 330.19a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 638.6,
    cy: 336.26,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M630.27 337.77a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 618.89,
    cy: 350.66,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M610.55 352.18a9.86 9.86 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 678.02,
    cy: 355.97,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M669.69 357.48a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 700.01,
    cy: 308.97,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M691.67 310.48a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 675.75,
    cy: 299.11,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M667.41 300.63a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.84 9.84 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 650.73,
    cy: 301.39,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M642.39 302.9a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 650.73,
    cy: 317.31,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M642.39 318.82a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 691.67,
    cy: 342.32,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M683.33 343.84a9.84 9.84 0 0 1 16-7.68A9.85 9.85 0 1 0 685.5 350a9.84 9.84 0 0 1-2.17-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 703.04,
    cy: 337.02,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M694.7 338.53a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.8 9.8 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 638.6,
    cy: 371.13,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 638.6,
    cy: 371.13,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M630.27 372.64a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 669.69,
    cy: 365.82,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 669.69,
    cy: 365.82,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M661.35 367.34a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 658.31,
    cy: 374.92,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 658.31,
    cy: 374.92,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M649.98 376.43a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 621.17,
    cy: 382.5,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 621.17,
    cy: 382.5,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M612.83 384.02a9.85 9.85 0 0 1 16-7.69A9.85 9.85 0 1 0 615 390.18a9.84 9.84 0 0 1-2.17-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 631.02,
    cy: 374.92,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 631.02,
    cy: 374.92,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M622.68 376.43a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.8 9.8 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 631.02,
    cy: 358.24,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 631.02,
    cy: 358.24,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M622.68 359.76a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.84 9.79 9.79 0 0 1-2.16-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 649.98,
    cy: 343.08,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 649.98,
    cy: 343.08,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M641.64 344.6a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 683.33,
    cy: 380.23,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 683.33,
    cy: 380.23,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M674.99 381.74a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.8 9.8 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 710.62,
    cy: 349.9,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 710.62,
    cy: 349.9,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M702.28 351.42a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.78 13.84 9.79 9.79 0 0 1-2.22-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 710.62,
    cy: 304.42,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 710.62,
    cy: 304.42,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M702.28 305.93a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.78 13.85 9.8 9.8 0 0 1-2.22-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 720.48,
    cy: 323.37,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 720.48,
    cy: 323.37,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M712.14 324.89a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 730.33,
    cy: 337.77,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 730.33,
    cy: 337.77,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M721.99 339.28a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.84 9.77 9.77 0 0 1-2.16-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 683.33,
    cy: 321.1,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 683.33,
    cy: 321.1,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M674.99 322.61a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.8 9.8 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 653.77,
    cy: 328.68,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 653.77,
    cy: 328.68,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M645.43 330.19a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 672.72,
    cy: 317.31,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 672.72,
    cy: 317.31,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M664.38 318.82a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 690.15,
    cy: 308.97,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 690.15,
    cy: 308.97,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M681.81 310.48a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 640.88,
    cy: 317.31,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 640.88,
    cy: 317.31,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M632.5 318.82a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 675.75,
    cy: 349.14,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 675.75,
    cy: 349.14,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M667.41 350.66a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.87 9.87 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 634.06,
    cy: 348.39,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 634.06,
    cy: 348.39,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M625.72 349.9a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 697.73,
    cy: 362.79,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 697.73,
    cy: 362.79,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M689.4 364.28a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 712.9,
    cy: 368.1,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 712.9,
    cy: 368.1,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M704.56 369.61a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 725.78,
    cy: 377.95,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 725.78,
    cy: 377.95,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M717.44 379.47a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 747.01,
    cy: 365.06,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 747.01,
    cy: 365.06,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M738.67 366.58a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.87 9.87 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 735.64,
    cy: 353.69,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 735.64,
    cy: 353.69,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M727.3 355.21a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.8 13.84 9.82 9.82 0 0 1-2.2-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 665.89,
    cy: 291.53,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 665.89,
    cy: 291.53,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M657.56 293.05a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 626.47,
    cy: 335.5,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 626.47,
    cy: 335.5,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M618.14 337.01a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 611.31,
    cy: 363.55,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 611.31,
    cy: 363.55,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M602.97 365.06a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.82 13.9 9.8 9.8 0 0 1-2.18-6.22z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 658.31,
    cy: 353.69,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 658.31,
    cy: 353.69,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M649.98 355.21a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.76 9.76 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 659.83,
    cy: 313.52,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 659.83,
    cy: 313.52,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M651.5 315.03a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 663.62,
    cy: 302.9,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 663.62,
    cy: 302.9,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M655.28 304.42a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.78 13.84 9.84 9.84 0 0 1-2.22-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 650.73,
    cy: 365.06,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M642.39 366.58a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.82 9.82 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 625.72,
    cy: 324.13,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M617.38 325.64a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 637.85,
    cy: 352.94,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M629.5 354.45a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 673.48,
    cy: 281.68,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M665.14 283.19a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 672.72,
    cy: 303.66,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M664.38 305.18a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 690.15,
    cy: 296.08,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M681.81 297.59a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 682.57,
    cy: 338.53,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 687.92,
    cy: 334.07,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M674.23 340.05a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.84 9.79 9.79 0 0 1-2.16-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 677.27,
    cy: 365.82,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M668.93 367.34a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 681.06,
    cy: 346.11,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M672.72 347.63a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.84 9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 698.49,
    cy: 329.43,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 750.23,
    cy: 351.74,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M690.15 330.95a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.82 9.82 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 688.64,
    cy: 355.97,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M680.3 357.48a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.8 13.85 9.79 9.79 0 0 1-2.2-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 719.72,
    cy: 308.97,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M711.38 310.48a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.85 9.85 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 712.14,
    cy: 323.37,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M703.8 324.89a9.85 9.85 0 0 1 16-7.69 9.85 9.85 0 1 0-13.85 13.85 9.84 9.84 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 718.2,
    cy: 337.02,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M709.86 338.53a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.8 9.8 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 733.36,
    cy: 365.06,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M725.03 366.58a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.81 9.81 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 745.49,
    cy: 342.32,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 640.23,
    cy: 328.94,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M737.15 343.84a9.85 9.85 0 0 1 16-7.68A9.85 9.85 0 1 0 739.3 350a9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 720.48,
    cy: 352.94,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M712.14 354.45a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 721.99,
    cy: 365.06,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M713.65 366.58a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.84 13.85 9.82 9.82 0 0 1-2.16-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 693.19,
    cy: 373.4,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M684.85 374.92a9.84 9.84 0 0 1 16-7.68A9.85 9.85 0 1 0 687 381.08a9.76 9.76 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 660.59,
    cy: 341.56,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M652.25 343.08a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.83 13.88 9.82 9.82 0 0 1-2.17-6.2z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 670.44,
    cy: 340.81,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M662.1 342.28a9.86 9.86 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.8 9.8 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 649.98,
    cy: 352.94,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M641.64 354.45a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 735.64,
    cy: 377.95,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 735.64,
    cy: 377.95,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M727.3 379.47a9.84 9.84 0 0 1 16-7.68 9.85 9.85 0 1 0-13.8 13.84 9.84 9.84 0 0 1-2.2-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 725.78,
    cy: 342.32,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 725.78,
    cy: 342.32,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M717.44 343.84a9.85 9.85 0 0 1 16-7.68A9.85 9.85 0 1 0 719.59 350a9.79 9.79 0 0 1-2.15-6.16z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 697.73,
    cy: 317.31,
    r: 9.86,
    fill: "#795548"
  }), React.createElement("circle", {
    cx: 697.73,
    cy: 317.31,
    r: 9.86,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M689.4 318.82a9.85 9.85 0 0 1 16-7.68 9.85 9.85 0 1 0-13.85 13.85 9.79 9.79 0 0 1-2.15-6.17z",
    fill: "#fff",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M789.92 429.9H572.39l23.19-76.75h171.15l23.19 76.75z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.05,
    d: "M602.11 359.68l158.41.33-1.3-6.53-163.64-.33-23.19 76.75h8.5l21.22-70.22z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M795.47 434.8H565.53l9.14-11.75h212.96l7.84 11.75z"
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M795.47 434.8H565.53l9.14-11.75h212.96l7.84 11.75z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M795.47 434.8H565.53l9.14-11.75h212.96l7.84 11.75z"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M759.5 352.52l19.67 70.53 9.33.47-22-71h-7z"
  }), React.createElement("path", {
    d: "M610.28 90.8c-.48 33.7-28.91 60.35-62.61 60.35h-4.69a15.85 15.85 0 0 0-11.1 4.48 15.43 15.43 0 0 0-4.51 7.87 14.45 14.45 0 0 0-.47 3.73v59.49a59.59 59.59 0 0 1-9.4 32.27c-8.83 13.78-14 29.55-14 45.91a28.69 28.69 0 0 1-29.21 28.67c-15.76-.29-28.12-13.84-28.12-29.61v-14.88l-7.81.92v14.9a28.7 28.7 0 0 1-29.22 28.67c-15.76-.29-28.11-13.84-28.11-29.61v-7.53c-7.82 3.26-52.12 3.26-64.42.11l-3.34-.26v8.62a28.69 28.69 0 0 1-29.21 28.67c-15.77-.29-28.12-13.84-28.12-29.61v-12.37l-2.61-.24v13.55a29.29 29.29 0 0 1-.88 7.12 28.73 28.73 0 0 1-28.33 21.55c-14.41-.26-25.95-11.6-27.86-25.59a35.4 35.4 0 0 1-.26-4v-62.27a95.36 95.36 0 0 1 20.33-59 17.68 17.68 0 0 0 .49-20.88c-14.59-21.37-36.17-57.43-35.46-83 .18-7.4 2.21-13.89 6.83-18.92.28-.31.57-.62.86-.91 21-22 58-4.69 54.77 25.54a84.85 84.85 0 0 0 2.22 30.23 92.67 92.67 0 0 0 5.86 16.21 27.48 27.48 0 0 0 28.12 15.63 96.93 96.93 0 0 1 11.75-.7h120.47a33.85 33.85 0 0 0 32-23 32.84 32.84 0 0 0 1.82-10.92V18.28A18.24 18.24 0 0 1 464.88.04a17.72 17.72 0 0 1 12.62 5.83 19.65 19.65 0 0 1 5.08 13.14 9.66 9.66 0 0 0 9.67 9.66h56.78a61.21 61.21 0 0 1 61.23 62.13z",
    fill: "#f3ad55"
  }), React.createElement("path", {
    d: "M252.39 312.02a28.73 28.73 0 0 1-28.33 21.55c-14.41-.26-25.95-11.6-27.86-25.59 17.36-4.7 41.41-7.92 56.19 4.04zM312.32 312.02A28.71 28.71 0 0 1 284 333.57c-14.41-.26-26-11.6-27.86-25.59 17.36-4.7 41.41-7.92 56.18 4.04zM437.41 312.02a28.72 28.72 0 0 1-28.33 21.55c-14.41-.26-26-11.6-27.85-25.59 17.35-4.7 41.4-7.92 56.18 4.04zM502.56 312.02a28.73 28.73 0 0 1-28.33 21.55c-14.41-.26-26-11.6-27.86-25.59 17.36-4.7 41.41-7.92 56.19 4.04zM245.98 114.8c-20.25-8.13-45-23-64.68-35.94.18-7.4 2.21-13.89 6.83-18.92.28-.31.57-.62.86-.91 21-22 58-4.69 54.77 25.54a84.85 84.85 0 0 0 2.22 30.23zM270.5 146.12s55.75 70.18 147-.18M446.11 15.64s33.88 44.3 0 99M526.9 166.79s-29.84 37.07-.4 66.49",
    fill: "#fbdca3"
  }), React.createElement("path", {
    d: "M529.5 158.97c-2.21 2.08-1.46 4.09-2.13 7.14l-96.87-25.38c5.21-4 11.67-8.78 13.81-15.14 11.6 9.01 34.56 24.13 85.19 33.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M531.88 155.63a15.43 15.43 0 0 0-4.51 7.87l-94.44-24.62a33.71 33.71 0 0 0 11.36-15.9c11.62 9.02 36.95 23.4 87.59 32.65z",
    fill: "#383f4d"
  }), React.createElement("path", {
    d: "M447.84 128.19s29.55 22.22 79.06 29.09",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M447.84 125.59s29.55 22.22 79.06 29.1",
    fill: "#f3ad55"
  }), React.createElement("path", {
    d: "M521.69 127.7s49.51 15.63 62.54-33.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M521.69 125.09s49.51 15.64 62.54-33.87z",
    fill: "#fbdca3"
  }), React.createElement("ellipse", {
    cx: 610.29,
    cy: 84.7,
    rx: 5.21,
    ry: 9.12,
    fill: "#383f4d"
  }), React.createElement("path", {
    d: "M215.5 272.33l10.42-83.39s-31.28 49.51-10.42 83.39",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M228.5 188.94s-31.27 49.51-10.43 83.39z",
    fill: "#fbdca3"
  }));
};

UndrawCautiousDog.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCautiousDog;