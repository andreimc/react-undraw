function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPhotocopy = _props => {
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
    viewBox: "0 0 941.04 793.62",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 862.49,
    y1: 783.7,
    x2: 862.49,
    y2: 97.7,
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
    d: "M37.57 51.08c-9.85 5.24-19.69 11.56-25.72 21.35s-7.54 21.9-8.66 33.56C-7.3 215.42 5.94 334.99 74.4 417.5c7.32 8.82 15.29 17.21 24.79 23.26 13.3 8.48 28.84 11.93 44.13 14.75 55.95 10.3 114.57 14.59 164.52 43.3 27.89 16 51.67 39 78.17 57.52s57.73 32.91 89.17 28.44c17.56-2.49 34-10.73 51.57-13.46 36.17-5.62 71.3 12.49 105.31 26.7a538 538 0 0 0 149 38.46c39.71 4.32 84 2.56 113.53-26 11.76-11.36 20.17-26.17 26.59-41.63a215.35 215.35 0 0 0 9.34-134.67c-7.26-28.09-20.29-54.78-22.56-83.8-2.62-33.4 9.25-65.87 16.13-98.58 10.5-49.91 8.43-105.66-19-147.67-10.58-16.21-24.48-29.71-39.32-41.56C809.11 17.32 736.66-5.03 666.02.95 612.77 5.47 561.91 25.23 510.7 41.41c-59.65 18.84-121.73 33.07-183.76 27.75-54-4.64-105.45-23.77-158-36.38-46.57-11.18-88.07-4.76-131.37 18.3z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 500.68,
    cy: 732.97,
    rx: 440.36,
    ry: 60.65,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M389.76 332.49c54.19 122.41 128.45 163 95.85 201.28s-178.65 44-213.92-62.77c-30.82-93.28-128.45-163-95.85-201.27s168.41-40.01 213.92 62.76z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M175.84 269.73s104.51 54.92 147 125.3 162.77 138.78 162.77 138.78",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M563.97 499.64c-56.41 75.8-79.18 135.54-93.24 128.78s-6-94.53 42.33-153.25c42.23-51.32 79.17-135.53 93.23-128.77s5.04 89.6-42.32 153.24z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M606.29 346.4s-31.08 83.29-64.33 133.84-71.23 148.18-71.23 148.18",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  })), React.createElement("path", {
    d: "M972 224.9c-15.48-.31-29.14-11.28-36.88-24.59-1.88-3.23-3.5-6.88-3.72-10.52a11.44 11.44 0 0 1 .42-2.52 27.85 27.85 0 0 0 1.15-3.85 6 6 0 0 0 0-1.58v-.08c.37-2.84-1.3-5.6-3.41-7.56s-4.65-3.4-6.81-5.3c-6.65-5.85-8.68-15.21-8.8-24.13v-.46c.07-3.83.38-7.66.34-11.47a48.68 48.68 0 0 0-.28-6.5c-.63-5.4-2.7-10.91-6.94-14.35-11.07-9-29.7.37-41.16-8.13-2.79-2.06-5-5.14-8.42-6-2.56-.61-5.21.22-7.7 1-8.44 2.78-17.86 6.45-21.17 14.65-1.88 4.68-1.35 10-3.08 14.76-1.16 3.18-3.28 5.91-4.83 8.92a13.85 13.85 0 0 0-1.8 7.45 8.5 8.5 0 0 0 .54 4 10.1 10.1 0 0 0 2.76 4 12.83 12.83 0 0 1-1.64 2.62c-2.16 2.64-5.47 4.53-7.71 7.13-4.16 4.82-4 11.36-2 17s5.74 10.81 8.29 16.33c1.1 2.39 2 5.07.84 7.45-.79 1.65-2.44 2.9-3.73 4.33a13.62 13.62 0 0 0-3.39 7.53c-25.29 5.77-25.3 26.09-25.3 26.09l-13.64 34.38s-2.19 5.79-4.76 13.42L753 286l11.22 18.79c-2.13 7.66-3.63 14.77-3.13 18.33 0 0-5 23.55 3.9 27.71l19.7 8.86a11.23 11.23 0 0 0 2.72 1.22l.81.36a2.09 2.09 0 0 0 1.83 0h.32a2.48 2.48 0 0 0 1.18-.17 2.16 2.16 0 0 0 1-1.07.76.76 0 0 1 0-.11l5.9-1.7 5 5.91c2.25 1.59 4.46 3 6.62 4.2l-7.74 76.84s-1.25 102.22-5 125.49c-1.39 8.63-1.41 14.51-.88 18.51l-.14.25c.93 6.57 3.35 7.87 3.35 7.87v-.09l.14.09a65.11 65.11 0 0 1 4-8.67v1.68c-.07 8.68-.34 20.81-1.24 28.71-1.53 13.43 3.9 57.89 3.9 57.89l1.88 40.47a37.33 37.33 0 0 1-4.6 19.7c-4.45 8.08-10.24 19.45-10.65 24.48a5.69 5.69 0 0 0 0 .82l-9.76 11.5s-3.77 5.82 4.74 8.17c4.57 1.27 12.46 0 18.78-1.49a12.57 12.57 0 0 0 9.74-12.22 43.32 43.32 0 0 1 8-15.26l1.59 9.3 10.6 2.64 1.37-25.52a11.62 11.62 0 0 0 .73-4.51c2.1-18.15-4.92-16.53-4.92-16.53a1 1 0 0 1 .34.64c-.12-.2-.23-.41-.33-.62C829.68 710 831.8 696 831.8 696s5.57-40.44 7.52-51.11c1.39-7.54.82-32.25.36-46.08 0-.58 0-1.13-.06-1.67 16.44-.21 36.59-.77 50.74-2.14l-.05 1.67-2.61 95.52A52.34 52.34 0 0 1 884 710l-.12.33a77.27 77.27 0 0 0-5.18 25l-1.21 30.36v.84c-2.11.81-5.44 3.16-5.54 10-.14 10 17.43 6.65 17.43 6.65 17.57 0 17.71-18.28 17.71-18.28s.56-16.76 1.39-28-2.65-8.75-2.65-8.75l-.26 31.91a2.29 2.29 0 0 1 0 .25v-28l.27-4.05v-.12l.06-.86 2.17-32.91s16.18-54.86 18.69-65.38c1.79-7.47 1-30 .46-42.46q0-.85-.09-1.65c5-.45 9.46-.5 11.22-.5h.82s-.84-88.1-2.93-121.34-5.44-63.58-13.8-72.73c-5.06-5.52-12.1-22.58-16.89-35.21 9.57 4 20.59 8 31 10.14 26.49 5.54 22.87-17.45 22.87-17.45l-2.69-43.5h.18a221.44 221.44 0 0 0-2.92-34c-1.4-8.63-3.55-17.54-6.83-24.74 2.88-1.1 5.71-2.32 8.5-3.56 7.2-3.18 15.31-7.68 16.35-15.44h-.35a12.56 12.56 0 0 0 .34-1.65zm-164.26 62.92c.06 4.49-.11 12.28-.38 20.9L799 297.49l8.43-13.68zm112.72 22.78zm3.5 17l-14-4.5a63.9 63.9 0 0 1 8.66-10.72c.25-.22.78-.73 1.22-1.15l-.44.09.68-.61.4-.09-.64.61.76-.15a24 24 0 0 0 4.78 9.6c5 5.52-1.38 6.9-1.38 6.9z",
    transform: "translate(-129.48 -53.19)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    fill: "#a27772",
    d: "M709.34 678.71l-1.65 31.08-10.45-2.62-2.21-12.92 14.31-15.54z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M709.34 678.71l-1.65 31.08-10.45-2.62-2.21-12.92 14.31-15.54z"
  }), React.createElement("path", {
    d: "M747.71 713.91l15.95 3.3 11.86-10.4v-29.48l.27-4v-.12l.06-.86 2.15-32.67s16-54.46 18.43-64.91c1.76-7.42 1-29.79.45-42.15-.24-5.07-.45-8.46-.45-8.46l-35.21-8.53-.73 27.08-2.58 94.83a52.31 52.31 0 0 1-3.6 17.64c0 .11-.09.22-.13.32a77.51 77.51 0 0 0-5.11 24.85l-1.19 30.15v.83z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M775.75 672.36v.83l.06-.86zM747.71 713.91l15.95 3.3 11.86-10.4v-2.5a3.31 3.31 0 0 1-1.69 2.69l-.17.1a31.75 31.75 0 0 1-17.91 3.54l-6.22-.53a6.23 6.23 0 0 0-1.65.4v.83z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M773.61 707.88l.18-.09a3.36 3.36 0 0 0 1.71-2.92l.26-31.69s3.44-2.45 2.61 8.69-1.37 27.78-1.37 27.78-.14 18.16-17.48 18.16c0 0-17.33 3.3-17.19-6.6s7.19-10.32 7.19-10.32l6.22.54a31.7 31.7 0 0 0 17.87-3.55z",
    fill: "#a27772"
  }), React.createElement("path", {
    d: "M664.64 707.18c.41 7.14 21.45 3 21.45 3l14.17-27.5s11.83-9.08 5.91-17.06a13.07 13.07 0 0 1-.88-1.35v-.08a6.71 6.71 0 0 1-.35-.65c-4.24-8.42-2.15-22.24-2.15-22.24s5.49-40.15 7.42-50.75c1.36-7.48.8-32 .35-45.74-.18-5.71-.35-9.54-.35-9.54l-34.93-9.35v10.42c-.08 8.61-.34 20.66-1.23 28.5-1.51 13.33 3.85 57.48 3.85 57.48l1.85 40.18a37.25 37.25 0 0 1-4.54 19.55c-4.38 8-10.09 19.31-10.49 24.31a4.6 4.6 0 0 0-.08.82z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M664.64 707.18c.41 7.14 21.45 3 21.45 3l14.17-27.5s11.83-9.08 5.91-17.06a13.07 13.07 0 0 1-.88-1.35c-.19 4.18-4.77 14.54-4.77 14.54s-11.69 23.39-15.4 28.75-19.87-1-20.47-1.23a4.6 4.6 0 0 0-.01.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M704.89 663.54s6.92-1.61 4.86 16.41a11.63 11.63 0 0 1-5.48 10.29c-5 3.11-12.59 9.8-16.45 22.82a12.45 12.45 0 0 1-9.6 12.13c-6.24 1.46-14 2.74-18.53 1.48-8.39-2.33-4.68-8.11-4.68-8.11l9.63-11.41s16.78 6.6 20.49 1.23 15.39-28.71 15.39-28.71 6.43-14.62 4.37-16.13z",
    fill: "#a27772"
  }), React.createElement("path", {
    d: "M761.18 518.9l-.73 27.08c9.37-.92 16.09-2.19 17.23-4 2.48-3.84 11.49-5.46 19.16-6.12-.24-5.07-.45-8.46-.45-8.46zM675.22 539.64c1.2-2.09 2.55-3.92 3.85-4.65 3.71-2.06 3.31 13.21 3.31 13.21s12.33.11 28.13-.09c-.18-5.71-.35-9.54-.35-9.54l-34.93-9.35s.05 4.36-.01 10.42z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M671.24 543.28s4.13-11.17 7.83-13.24 3.31 13.21 3.31 13.21 90.77.82 95.3-6.19 31-6.6 31-6.6-.83-87.47-2.89-120.47-5.36-63.13-13.62-72.2c-5.33-5.88-12.92-24.87-17.61-37.55-2.56-6.92-4.25-12-4.25-12l-86.64 4.95-.7 7-9.2 92s-1.25 101.55-5 124.62 2.47 26.47 2.47 26.47z",
    fill: "#65617d"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M770.65 537.06c4.54-7 31-6.6 31-6.6s-.83-87.47-2.89-120.47-5.36-63.13-13.62-72.2c-5.33-5.88-12.92-24.87-17.61-37.55-2.15-5.82-3.69-10.3-4.12-11.58l6.72-.38s1.69 5 4.25 12c4.7 12.68 12.28 31.67 17.62 37.55 8.25 9.07 11.55 39.19 13.61 72.2s2.89 120.47 2.89 120.47-26.4-.42-30.94 6.6c-3.88 6-70.67 6.26-90.06 6.21 24.82-.1 79.65-.84 83.15-6.25zM672.04 530.04c1.67-.93 2.51 1.67 2.92 4.79a66.63 66.63 0 0 0-3.9 8.45s-2.39-1.29-3.3-7.82c1.31-2.39 2.83-4.65 4.28-5.42z"
  })), React.createElement("path", {
    d: "M698.01 76.65c-6 8.18.07 19.81-6.37 27.76-2.12 2.62-5.39 4.5-7.6 7.08-4.11 4.78-3.95 11.28-1.93 16.89s5.66 10.74 8.17 16.22c1.09 2.37 2 5 .83 7.39-.78 1.64-2.41 2.89-3.68 4.3-4.13 4.62-4.25 11-2 16.47s6.47 10.12 10.66 14.71c1.65 1.81 3.74 3.8 6.49 3.75a9 9 0 0 0 4.08-1.33 43 43 0 0 0 20.68-24.33c3.12-9.79 2.21-20.33-1.77-29.9-3.48-8.35-9.29-16.34-9.34-25.17 0-7 3.59-13.67 4.23-20.64.78-8.46-4.24-21.91-14.45-25.6.65 5.43-4.96 8.24-8 12.4z",
    fill: "#7c5c5c"
  }), React.createElement("path", {
    d: "M698.01 76.65c-6 8.18.07 19.81-6.37 27.76-2.12 2.62-5.39 4.5-7.6 7.08-4.11 4.78-3.95 11.28-1.93 16.89s5.66 10.74 8.17 16.22c1.09 2.37 2 5 .83 7.39-.78 1.64-2.41 2.89-3.68 4.3-4.13 4.62-4.25 11-2 16.47s6.47 10.12 10.66 14.71c1.65 1.81 3.74 3.8 6.49 3.75a9 9 0 0 0 4.08-1.33 43 43 0 0 0 20.68-24.33c3.12-9.79 2.21-20.33-1.77-29.9-3.48-8.35-9.29-16.34-9.34-25.17 0-7 3.59-13.67 4.23-20.64.78-8.46-4.24-21.91-14.45-25.6.65 5.43-4.96 8.24-8 12.4zM764.52 374.07c-12 .63-23.31 5.78-33.82 11.63s-20.68 12.5-32 16.6M757.06 402.36a49.51 49.51 0 0 0-31.17 15.15c-2.92 3.09-5.43 6.55-8.47 9.52a37.64 37.64 0 0 1-16.72 9.46M759.52 423.89A54.43 54.43 0 0 0 734.46 439c-1.84 2-3.52 4.12-5.37 6.1-9.93 10.71-23.97 16.33-37.57 21.71",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M758.52 125.31a245.36 245.36 0 0 0 2.48 28.66c1.1 6.77 2.68 12.8 4.95 15.49 6.57 7.83-32.2 18.35-32.2 18.35l-22.9-17.75s18.15-16.7 9.69-33 37.98-11.75 37.98-11.75z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M682.92 300.24h91.6c-2.56-6.92-4.25-12-4.25-12l-86.64 4.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M677.02 298.59h97.92c-2.75-9.84.05-18.95 3.92-26a57.73 57.73 0 0 1 10.26-13.3l.67-.61 34.19-7.57 1.84-.41s.28-62.16-21.73-70.69-35.21-20.07-35.21-20.07l-30.25 9.35-22.28-11.28c-7.15 7.7-26.13 4.67-26.13 4.67-31.08 3.59-31.08 27-31.08 27s18.15 42.36 19.53 42.36-1.65 66.55-1.65 66.55z",
    fill: "#7b7bdb"
  }), React.createElement("path", {
    d: "M710.83 259.08s-20-4.44-26.77-12.18M811.52 235.88l-23.17 19a38.78 38.78 0 0 0 .77 4.46l.67-.61 34.19-7.57zM748.8 291.99s5.07 2.85 12.84 6.6h13.3c-2.75-9.84.05-18.95 3.92-26L755.41 265c7.97 7.46-6.61 26.99-6.61 26.99z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M672.89 182.25l-13.75 7.42-13.48 34.14s-14 37.4-12.65 47.31c0 0-5 23.38 3.85 27.5l22.91 10.37a2.12 2.12 0 0 0 2.75-2.93c-3.26-6.19-6.86-15.87-1.18-21.19l-6.6-13.75 23.93-39.06 8-13.48z",
    fill: "#7b7bdb"
  }), React.createElement("path", {
    d: "M703.52 251.26c1.19 4.86 5.21 12.33 18.52 15.15l14.64 12 15.54 7 6.33 2.87 2.68-19.39-6.1-3.34-7.1-3.88s-16-29.07-41.44-16.8a5.63 5.63 0 0 0-3.07 6.39z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M704.3 249.61c1.18 4.86 5.2 12.33 18.51 15.15l14.65 12 15.54 7 6.33 2.87 2.68-19.39-6.1-3.34-7.11-3.88s-16-29.07-41.43-16.8a5.61 5.61 0 0 0-3.07 6.39z",
    fill: "#fbbebe"
  }), React.createElement("circle", {
    cx: 732.91,
    cy: 115,
    r: 35.48,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 732.91,
    cy: 114.17,
    r: 35.48,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M754.89 189.98l-10.67-20.74s15.62-6.3 16.76-13.62 14.95 8.58 12 13.84-18.09 20.52-18.09 20.52z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M754.89 188.33l-10.67-20.74s15.62-6.3 16.76-13.62 14.95 8.58 12 13.84-18.09 20.52-18.09 20.52z",
    fill: "#7b7bdb"
  }), React.createElement("path", {
    d: "M667.58 241.88l59 79.27s-21.78 11.82-51.76-9.34l-12.93-15.4-36.86-62.16z",
    fill: "#f6f8fb"
  }), React.createElement("path", {
    d: "M655.98 284.98l5.36-.14s32.8-31.84 40.84-15.75-20.42 31.15-20.42 31.15l-8.66 4.75-11.35 3.3-7.22-9.7z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M663.89 302.17c.49 1.83 1 3.85.14 5.55a2.16 2.16 0 0 1-1 1.06 2.4 2.4 0 0 1-1.16.17 11.3 11.3 0 0 1-7.4-3.67 34 34 0 0 1-4.8-6.93c-1.46-2.55-3-5.38-2.45-8.27.58-3.16 3.41-5.35 6.09-7.13 5.44-3.59 5.57.6 6.81 5.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M663.07 302.17c.49 1.83 1 3.85.13 5.55a2.14 2.14 0 0 1-1 1.06 2.42 2.42 0 0 1-1.16.17 11.28 11.28 0 0 1-7.4-3.67 33.6 33.6 0 0 1-4.8-6.93c-1.47-2.55-3-5.38-2.45-8.27.57-3.16 3.4-5.35 6.08-7.13 5.44-3.59 5.58.6 6.82 5.23z",
    fill: "#7b7bdb"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M678.67 232.03l2.74-4.64-2.4 8.62-.34-3.98zM753 283.81l6.33 2.87 2.68-19.39-6.1-3.34c4.21 4.75.53 13.67-2.91 19.86zM778.38 261.25s-20.42 1.24-29.09-4.33"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M775.84 274.27a57.45 57.45 0 0 1 10.26-13.3 27.64 27.64 0 0 1 3-1.65l31.85-6.51 1.84-.41s.28-62.16-21.73-70.69a132.21 132.21 0 0 1-34.31-19.33l2.41-.74s13.2 11.55 35.2 20.07 21.73 70.69 21.73 70.69h-3.3l-32.61 6.24s-1.4 1.36-1.83 1.76a63 63 0 0 0-10.41 13.77 34.48 34.48 0 0 0-2.73 26.09h-3.3c-2.75-9.86.05-18.97 3.93-25.99zM688.91 164.58l1.58-.22a56.65 56.65 0 0 0 6.73.57 61.44 61.44 0 0 1-8.31-.35zM735.6 170.97l-20.15-10.16a10.08 10.08 0 0 0 1.18-1.08l21 10.64z"
  })), React.createElement("path", {
    d: "M812.34 234.23l13.48 16.5 2.75 44.84s3.57 22.82-22.56 17.32-56.38-22.55-56.38-22.55 14.58-19.53 6.6-26.95l37.41 12.1s6.32-1.38 1.37-6.88-5.83-15.4-5.83-15.4z",
    fill: "#7b7bdb"
  }), React.createElement("path", {
    d: "M818.39 281.54l7.43 8.52a10.71 10.71 0 0 1-7.43-8.52zM805.74 280.16l11.55 14.86-5.77 1.37-5.78-16.23zM690.52 97.88c-1.27-3.1-.3-6.69 1.23-9.67s3.62-5.7 4.77-8.86c1.7-4.7 1.18-10 3-14.65 3.26-8.14 12.55-11.78 20.87-14.55 2.46-.82 5.08-1.64 7.6-1 3.33.8 5.55 3.85 8.3 5.9 11.31 8.43 29.68-.84 40.6 8.07 4.18 3.42 6.22 8.88 6.85 14.25s0 10.78-.07 16.18c-.18 9.46 1.59 19.8 8.67 26.07 2.13 1.89 4.65 3.31 6.72 5.26s3.73 4.69 3.36 7.51a26.08 26.08 0 0 1-1.13 3.82c-1.41 4.93.69 10.16 3.25 14.59 7.64 13.22 21.11 24.11 36.38 24.42-1 7.7-9 12.17-16.13 15.33-9 4-18.56 8-28.44 7.47s-20.13-6.87-21.83-16.61c-.6-3.33-.52-7.43-3.42-9.18-1.75-1.06-4-.8-5.9-1.59-2.73-1.15-4.08-4.19-5-7a63.1 63.1 0 0 1-2.93-18c-.12-7.23.84-15.13-3.26-21.08-3.8-5.52-10.55-8.31-14.92-13.38-4-4.69-8.44-10.36-15.06-11.26-9.12-1.23-28.07 11.22-33.51-2.04z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M690.52 96.23c-1.27-3.1-.3-6.69 1.23-9.67s3.62-5.7 4.77-8.86c1.7-4.7 1.18-10 3-14.65 3.26-8.14 12.55-11.78 20.87-14.55 2.46-.82 5.08-1.64 7.6-1 3.33.8 5.55 3.85 8.3 5.9 11.31 8.43 29.68-.84 40.6 8.07 4.18 3.42 6.22 8.88 6.85 14.25s0 10.78-.07 16.18c-.18 9.46 1.59 19.8 8.67 26.07 2.13 1.89 4.65 3.31 6.72 5.26s3.73 4.69 3.36 7.51a26.08 26.08 0 0 1-1.13 3.82c-1.41 4.93.69 10.16 3.25 14.59 7.64 13.22 21.11 24.11 36.38 24.42-1 7.7-9 12.17-16.13 15.33-9 4-18.56 8-28.44 7.47s-20.13-6.87-21.83-16.56c-.6-3.33-.52-7.43-3.42-9.18-1.75-1.06-4-.8-5.9-1.59-2.73-1.15-4.08-4.19-5-7a63.1 63.1 0 0 1-2.93-18c-.12-7.23.84-15.13-3.26-21.08-3.8-5.52-10.55-8.31-14.92-13.38-4-4.69-8.44-10.36-15.06-11.26-9.12-1.28-28.07 11.17-33.51-2.09z",
    fill: "#7c5c5c"
  }), React.createElement("path", {
    d: "M715.7 187.4l20.34-16.5s-13.93-7.55-15.59-14-12.8 3.06-11.66 8.83 6.91 21.67 6.91 21.67z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M716.52 184.93l20.34-16.51s-13.92-7.55-15.58-14-12.8 3.05-11.67 8.83 6.91 21.68 6.91 21.68z",
    fill: "#7b7bdb"
  }), React.createElement("circle", {
    cx: 737.66,
    cy: 182.25,
    r: 1.62,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 737.66,
    cy: 191.22,
    r: 1.62,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 737.66,
    cy: 200.2,
    r: 1.62,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M698.75 73.3c1.6-4.42 1.26-9.37 2.76-13.81a15.77 15.77 0 0 0-1.72 3.16c-1.86 4.64-1.33 10-3 14.65 0 .1-.07.18-.11.28a25.76 25.76 0 0 0 2.07-4.28zM827.07 184.47c-9 4-18.56 8-28.45 7.47s-20.19-6.84-22-16.58c-.59-3.33-.52-7.43-3.41-9.18-1.75-1.06-4-.8-5.91-1.59-2.73-1.15-4.08-4.19-5-7a62.76 62.76 0 0 1-2.94-18c-.12-7.23.84-15.13-3.26-21.08-3.8-5.52-10.54-8.31-14.92-13.38-4-4.69-8.43-10.36-15.06-11.26-9.09-1.24-28 11.21-33.45-2a10.47 10.47 0 0 1 .35-7.67c-.39.66-.77 1.32-1.12 2-1.53 3-2.5 6.57-1.23 9.67 5.41 13.26 24.36.81 33.45 2 6.63.9 11 6.57 15.06 11.26 4.38 5.07 11.12 7.86 14.92 13.38 4.1 5.95 3.14 13.85 3.26 21.08a62.76 62.76 0 0 0 2.94 18c.89 2.82 2.24 5.86 5 7 1.89.79 4.16.53 5.91 1.59 2.89 1.75 2.82 5.85 3.41 9.18 1.76 9.74 12.07 16.08 22 16.58s19.41-3.44 28.45-7.47c6.51-2.9 13.76-6.91 15.71-13.5-3.12 4.3-8.64 7.24-13.71 9.5z"
  })), React.createElement("path", {
    d: "M531.77 304.35h100.58a7.92 7.92 0 0 1 7.92 7.92v8.25h-108.5v-16.17z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M531.77 304.35h100.58a7.92 7.92 0 0 1 7.92 7.92v8.25h-108.5v-16.17z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M532.93 297.51l66.5-30.66v9.16l-65.5 31.5-1-10z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M532.93 297.51l66.5-30.66v9.16l-65.5 31.5-1-10z"
  }), React.createElement("path", {
    fill: "#f6f8fb",
    d: "M533.1 318.35h132.67v1.33H533.1zM533.1 316.72h132.67v1.33H533.1zM533.1 315.1h132.67v1.33H533.1z"
  }), React.createElement("path", {
    fill: "#f6f8fb",
    d: "M614.68 259.01l-104.97 65.3 2.02 3.5 112.45-62.05-9.5-6.75z"
  }), React.createElement("path", {
    fill: "#f0f4f9",
    d: "M610.53 261.41l-100.82 62.9 2.02 3.5 108.14-59.56-9.34-6.84z"
  }), React.createElement("path", {
    opacity: 0.03,
    d: "M610.53 261.41l-100.82 62.9 2.02 3.5 108.14-59.56-9.34-6.84z"
  }), React.createElement("path", {
    fill: "#f6f8fb",
    d: "M533.1 313.47h132.67v1.33H533.1zM533.1 311.85h132.67v1.33H533.1zM533.1 310.22h132.67v1.33H533.1zM533.1 308.6h132.67v1.33H533.1z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M608.93 266.85l-75.45 36.14.95 12.61 13.17-3.17 61-35.92.33-9.66z"
  }), React.createElement("path", {
    d: "M535.6 309.68h106.25a7.92 7.92 0 0 1 7.92 7.92v3.92H535.6v-11.84zM351.81 271.35h64.46v27.83h-64.46z",
    fill: "#535461"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M351.81 271.34h64.45v27.84h-64.45z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M351.81 271.34h13.29v24.34h-13.29z"
  }), React.createElement("path", {
    d: "M277.43 268.01s21.67-3.33 41.67-13.16 43.5 7.16 44 13.16v27.67h-85.67z",
    fill: "#9d9cb5"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M284.77 273.76h11.33v6.75h-11.33zM284.77 284.43h11.33v6.75h-11.33z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M277.43 293.51v425h261v-425h-261z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M518.77 440.51h-4.67l-4.33-23-201.67 1.67-6.33 21.33h-3.67l4.67-27.66H515.1l3.67 27.66z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M518.77 439.51h-4.67l-4.33-23-201.67 1.67-6.33 21.33h-3.67l4.67-27.66H515.1l3.67 27.66z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M504.43 321.51h34v66h-34zM502.48 346.01H313.43l6.7-23.5h178.49l3.86 23.5z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M500.68 345.01H314.93l6.58-23.5h175.38l3.79 23.5z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M381.77 341.43h-59.92l4.75-15.58h53.05l2.12 15.58z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M380.18 341.01h-56.75l4.5-14.75h50.25l2 14.75z"
  }), React.createElement("ellipse", {
    cx: 418.6,
    cy: 327.51,
    rx: 7.67,
    ry: 3.25,
    fill: "#ededf0",
    opacity: 0.5
  }), React.createElement("ellipse", {
    cx: 442.18,
    cy: 327.51,
    rx: 7.67,
    ry: 3.25,
    fill: "#ededf0",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#ededf0",
    opacity: 0.5,
    d: "M418.6 333.64h28.58l4.84 6.29h-31.67l-1.75-6.29zM420.43 342.1l-.08-2.17h31.67l.5 2.17h-32.09z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M420.43 342.1l-.08-2.17h31.67l.5 2.17h-32.09z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M538.43 557.01v-4.25h-261v4.25h59.25v81.25h-59.25v4.25h59.25v30.75h-59.25v4.25h59.25v41h4.25v-41h197.5v-4.25h-197.5v-30.75h197.5v-4.25h-197.5v-81.25h197.5z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M313.35 566.01h19.42v25.5h-19.42z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M314.68 567.76h16.75v22h-16.75z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M441.06 566.01h19.42v25.5h-19.42z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M442.39 567.76h16.75v22h-16.75z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M512.56 566.01h19.42v25.5h-19.42z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M513.89 567.76h16.75v22h-16.75z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M512.56 645.01h19.42v25.5h-19.42z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M513.89 646.76h16.75v22h-16.75z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M512.56 684.43h19.42v25.5h-19.42z"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M513.89 686.18h16.75v22h-16.75z"
  }), React.createElement("path", {
    fill: "none",
    d: "M336.68 552.76h4.25v165.75h-4.25z"
  }), React.createElement("path", {
    d: "M538.43 557.01v-4.2h-261v4.25h59.25v81.25h-59.25v4.25h59.25v30.75h-59.25v4.25h59.25v41h4.25v-41h197.5v-4.25h-197.5v-30.8h197.5v-4.25h-65.59v-81.25zm-69.84 81.25H340.93v-81.25h127.66z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#535461",
    d: "M174.9 451.27h6v135h-6z"
  }), React.createElement("path", {
    d: "M218.59 585.86l-.38 6.08-.53 8.58-.22 3.58-.53 8.59-.23 3.58-.53 8.58-6 97.61a16.53 16.53 0 0 1-16.5 15.51h-31.48a16.52 16.52 0 0 1-16.49-15.51l-6.06-97.65-.53-8.58-.22-3.58-.54-8.59-.22-3.58-.53-8.58-.38-6.08a8.56 8.56 0 0 1 8.55-9.09h64.28a8.56 8.56 0 0 1 8.54 9.13z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M218.21 591.94l-.53 8.58h-79.55l-.53-8.58h80.61zM217.46 604.1l-.53 8.59h-78.04l-.54-8.59h79.11zM216.7 616.27l-.53 8.58h-76.53l-.53-8.58h77.59z"
  }), React.createElement("path", {
    d: "M128.44 501.87c34.92 25.26 49.46 64.78 49.46 64.78s-42.08-1.45-77-26.71-49.46-64.77-49.46-64.77 42.08 1.44 77 26.7z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M51.44 475.17s43.67 24.24 57.69 44.31 68.77 47.17 68.77 47.17",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M150.98 450.97c19 13.75 26.92 35.26 26.92 35.26s-22.9-.79-41.91-14.54-26.92-35.25-26.92-35.25 22.9.78 41.91 14.53z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M109.07 436.44s23.77 13.19 31.4 24.12 37.43 25.67 37.43 25.67",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M205.52 485.13c-21.83 24-26.45 55.35-26.45 55.35s30.78-7.55 52.61-31.54 26.46-55.35 26.46-55.35-30.78 7.55-52.62 31.54z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M258.14 453.59s-28.44 24.59-35.62 41.54-43.4 45.35-43.4 45.35",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }));
};

UndrawPhotocopy.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPhotocopy;