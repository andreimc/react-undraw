function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPhotoSharing = _props => {
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
    viewBox: "0 0 777.21 727.86",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 425.06,
    y1: 600.05,
    x2: 425.06,
    y2: 128.87,
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
    x1: 258.38,
    y1: 294.87,
    x2: 258.38,
    y2: 252.24,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 659.41,
    y1: 203.43,
    x2: 659.41,
    y2: 169.83,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 345.38,
    y1: 208.38,
    x2: 345.38,
    y2: 161.13,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 483.32,
    y1: 183.35,
    x2: 483.32,
    y2: 142.38,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 708.87,
    y1: 119.9,
    x2: 748.2,
    y2: 119.9,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 964.11,
    y1: 297.58,
    x2: 964.11,
    y2: 98.89,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 463.31,
    y1: 448,
    x2: 463.31,
    y2: 277.64,
    gradientTransform: "translate(8.03 217.52)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 661.99,
    y1: 448.69,
    x2: 661.99,
    y2: 278.33,
    gradientTransform: "translate(8.03 216.83)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 860.68,
    y1: 449.38,
    x2: 860.68,
    y2: 279.02,
    gradientTransform: "translate(8.03 216.15)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 463.33,
    y1: 240.45,
    x2: 463.33,
    y2: 70.09,
    gradientTransform: "translate(7.31 217.52)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 859.34,
    y1: 238.27,
    x2: 859.34,
    y2: 67.91,
    gradientTransform: "translate(7.3 216.15)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 661.68,
    y1: 239.65,
    x2: 661.68,
    y2: 69.29,
    gradientTransform: "translate(7.31 216.84)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 431.12,
    y1: 727.86,
    x2: 431.12,
    y2: 429.15,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 296.27,
    y1: 470.97,
    x2: 296.27,
    y2: 446.14,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 543.51,
    y1: 470.97,
    x2: 543.51,
    y2: 446.14,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 432.11,
    y1: 661.16,
    x2: 432.11,
    y2: 495.04,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 432.11,
    y1: 637.09,
    x2: 432.11,
    y2: 519.1,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M72.92 128.87h704.29v471.18H72.92z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M80.36 133.83h689.41v17.36H80.36z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M80.36 151.19h689.41v439.77H80.36z"
  }), React.createElement("circle", {
    cx: 94.3,
    cy: 142.93,
    r: 4.85,
    fill: "#ff5252"
  }), React.createElement("circle", {
    cx: 107.64,
    cy: 142.93,
    r: 4.85,
    fill: "#ff0"
  }), React.createElement("circle", {
    cx: 120.97,
    cy: 142.93,
    r: 4.85,
    fill: "#69f0ae"
  }), React.createElement("path", {
    d: "M254.18 263.38l2.3 3.39 5.42-3.69 3.47 6.56-4.74 3.22 11.52 16.94-7.45 5.07-11.52-16.94-3.39 2.3-4.15-6.1 3.39-2.3-2.3-3.39s-5-6 .35-11.14l7.45-5.07 3.69 5.42-3.39 2.3a2.41 2.41 0 0 0-.65 3.43z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M11.21 162.03l2.3 3.39 5.42-3.69 3.47 6.56-4.74 3.22 11.52 16.94-7.45 5.07-11.52-16.94-3.39 2.3-4.15-6.1 3.39-2.3-2.3-3.39s-5-6 .35-11.14l7.45-5.07 3.69 5.42-3.39 2.3a2.41 2.41 0 0 0-.65 3.43z",
    fill: "#3b5998"
  }), React.createElement("path", {
    d: "M675.79 175.56l4.1-.82s-3.44 3.85-4.1 4.1a16.48 16.48 0 0 0 0 2.46c-7.87 33.76-36.87 18.85-36.87 18.85 10.57.25 11.47-4.1 11.47-4.1-6.15-.9-7.37-4.92-7.37-4.92a2.53 2.53 0 0 0 3.28-.82c-6.64-1.72-5.74-8.19-5.74-8.19a8.52 8.52 0 0 0 4 1.56c-.74-.9-7-8.36-3.2-12.21 0 0 4.59 8.19 16.63 8.93l.82-.16a6.43 6.43 0 0 1-.16-1.8 8.6 8.6 0 0 1 8.6-8.6c5.74 0 7 3.28 7 3.28l4.1-2.46c-.1-.01-.51 4.08-2.56 4.9z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M432.82 74.22l4.1-.82s-3.44 3.85-4.1 4.1a16.48 16.48 0 0 0 0 2.46c-7.87 33.76-36.87 18.85-36.87 18.85 10.57.25 11.47-4.1 11.47-4.1-6.15-.9-7.37-4.92-7.37-4.92a2.53 2.53 0 0 0 3.28-.82c-6.64-1.72-5.74-8.19-5.74-8.19a8.52 8.52 0 0 0 4 1.56c-.74-.9-7-8.36-3.2-12.21 0 0 4.59 8.19 16.63 8.93l.82-.16a6.43 6.43 0 0 1-.16-1.8 8.6 8.6 0 0 1 8.6-8.6c5.74 0 7 3.28 7 3.28l4.1-2.46c-.1-.02-.51 4.08-2.56 4.9z",
    fill: "#00aced"
  }), React.createElement("path", {
    d: "M354.46 206.09l4.54-15.42s.07-3.48-3-4.21-4.27-.56-6.17.68l-4.83 16.2-7.84-2.34 7.11-24.39 7.87 2.29-1.05 3.62s4.06-4.28 9.22-2.35c4.79 1.74 7.53 5.78 6.46 12.38h.16l-4.59 15.73zm-18.72-35.33a4.92 4.92 0 1 1 6.1-3.34 4.93 4.93 0 0 1-6.1 3.34zm-4.09 28.68l-7.87-2.29 7.11-24.39 7.87 2.29z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M111.49 104.74l4.49-15.42s.07-3.48-3-4.21-4.27-.56-6.17.68l-4.72 16.2-7.87-2.29 7.11-24.39 7.87 2.29-1.05 3.62s4.06-4.28 9.22-2.35c4.79 1.74 7.53 5.78 6.46 12.38h.16l-4.6 15.79zM92.77 69.41a4.92 4.92 0 1 1 6.1-3.34 4.93 4.93 0 0 1-6.1 3.35zm-4.09 28.7l-7.87-2.29 7.11-24.39 7.87 2.29z",
    fill: "#0077b5"
  }), React.createElement("path", {
    d: "M498.81 158.77c-.9 4.34-1.56 10.24-10.65 12.29 0 0-5.33 1.39-7-2.46-1.07 4.18-2.13 8-2.79 9a51.14 51.14 0 0 1-4.1 5.74s.74-7.37.82-9c.08-2.54 2.46-13.93 2.46-13.93s-2.21-8 3.28-9c0 0 4.51-1.07 3.28 4.92 0 0-.9 3.93-2 8.44l.41.57a4.61 4.61 0 0 0 3.28 2.46c2.21.25 8-3.69 8.19-10.65s-1.31-8.93-7.37-10.65-11.23 1.23-13.11 6.55c-2.13 6.06-.41 7.54.82 9l-.82 4.1s-5.9-2-5.74-8.19 3.69-15.57 16.39-15.57 15.55 11.95 14.65 16.38z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__e)"
  }), React.createElement("path", {
    d: "M255.84 57.42c-.9 4.34-1.56 10.24-10.65 12.29 0 0-5.33 1.39-7-2.46-1.07 4.18-2.13 8-2.79 9a51.14 51.14 0 0 1-4.1 5.74s.74-7.37.82-9c.08-2.54 2.46-13.93 2.46-13.93s-2.21-8 3.28-9c0 0 4.51-1.07 3.28 4.92 0 0-.9 3.93-2 8.44l.41.57a4.61 4.61 0 0 0 3.28 2.46c2.21.25 8-3.69 8.19-10.65s-1.31-8.93-7.37-10.65-11.23 1.23-13.11 6.55c-2.13 6.06-.41 7.54.82 9l-.82 4.1s-5.9-2-5.74-8.19 3.69-15.57 16.39-15.57 15.55 11.95 14.65 16.38z",
    fill: "#bd081c"
  }), React.createElement("path", {
    d: "M747 120.31h-5.33v5.33a1.26 1.26 0 0 1-1.23 1.23h-.82a1.26 1.26 0 0 1-1.23-1.23v-5.33H733a1.26 1.26 0 0 1-1.23-1.23v-.82A1.26 1.26 0 0 1 733 117h5.33v-5.3a1.26 1.26 0 0 1 1.23-1.23h.82a1.26 1.26 0 0 1 1.23 1.23v5.3H747a1.26 1.26 0 0 1 1.23 1.23v.82a1.26 1.26 0 0 1-1.23 1.26zm-18.52-14.42a8.2 8.2 0 0 1 1.72 5 8.66 8.66 0 0 1-5.57 7.87c.25.82 1.07 1.72 3.11 3.2 3.93 2.87 4.1 8.19 4.1 8.19v.41c0 4.26-5.16 7.78-11.47 7.78s-11.47-3.52-11.47-7.78c0-4.1 4.67-7.46 10.65-7.78v-3.38c-4.59-.57-8.19-4.18-8.19-8.52 0-4.75 4.18-8.6 9.42-8.6h.41s9.42-.74 10.65-.82.82 1.64.82 1.64zm-13.88 24.25c0 2.7 2.79 4.92 6.15 4.92s6.15-2.21 6.15-4.92-2.79-4.92-6.15-4.92-6.15 2.21-6.15 4.92zm10-20.07c-.66-3.11-2.95-5.33-5.08-4.92s-3.28 3.36-2.62 6.47 2.95 5.33 5.08 4.92 3.28-3.28 2.62-6.48z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M504 18.96h-5.33v5.33a1.26 1.26 0 0 1-1.23 1.23h-.82a1.26 1.26 0 0 1-1.23-1.23v-5.33h-5.33a1.26 1.26 0 0 1-1.23-1.23v-.82a1.26 1.26 0 0 1 1.23-1.23h5.33v-5.33a1.26 1.26 0 0 1 1.23-1.23h.82a1.26 1.26 0 0 1 1.23 1.23v5.33H504a1.26 1.26 0 0 1 1.23 1.23v.82a1.26 1.26 0 0 1-1.23 1.23zM485.48 4.54a8.2 8.2 0 0 1 1.72 5 8.66 8.66 0 0 1-5.57 7.87c.25.82 1.07 1.72 3.11 3.2 3.93 2.87 4.1 8.19 4.1 8.19v.41c0 4.26-5.16 7.78-11.47 7.78s-11.47-3.52-11.47-7.78c0-4.1 4.67-7.46 10.65-7.78v-3.36c-4.59-.57-8.19-4.18-8.19-8.52 0-4.75 4.18-8.6 9.42-8.6h.41s9.42-.74 10.65-.82.82 1.64.82 1.64zm-13.85 24.25c0 2.7 2.79 4.92 6.15 4.92s6.15-2.21 6.15-4.92-2.79-4.92-6.15-4.92-6.15 2.24-6.15 4.92zm10-20.07c-.66-3.11-2.95-5.33-5.08-4.92s-3.28 3.36-2.62 6.47 2.95 5.33 5.08 4.92 3.28-3.28 2.62-6.47z",
    fill: "#d34836"
  }), React.createElement("path", {
    d: "M1005.13 209.09a1.08 1.08 0 0 0 .11-1.11c-2.7-6.2-5.41-4.65-13.41-22.37-8.51-18.85-6.39-25.16-9.58-28.76-1.28-1.44-2.55-6.25-4.26-7.09l-1.11-5.08a5.06 5.06 0 0 0 2.93-.52 12.58 12.58 0 0 0 4.29-4.32 34.16 34.16 0 0 0 4.38-8.53 26.27 26.27 0 0 0 1.27-7v-1c0-.85 0-1.7-.09-2.54a11.84 11.84 0 0 0 5.43-2.63 11.31 11.31 0 0 0 3.45-7.09c0-.28.06-.55.07-.83s0-.66 0-1a11.18 11.18 0 0 0-4.34-8.44 11 11 0 0 0-7.55-1.8 29.42 29.42 0 0 0-7.61 2.1 24.3 24.3 0 0 0-2.35.94 15.45 15.45 0 0 0-5.51-1 31.36 31.36 0 0 0-9 1.83l-9.93 3c-2.2.67-4.49 1.41-6.14 3.22a5.77 5.77 0 0 0-.51.67l-.16.26-.27.48-.16.35c-.06.13-.11.27-.16.41s-.11.3-.15.45a6.49 6.49 0 0 0-.23 1.44 5.57 5.57 0 0 0 0 .69v.18a4.24 4.24 0 0 0 .76 2.11 6.08 6.08 0 0 0 2.18 1.68 22 22 0 0 0 3 1.31 20.66 20.66 0 0 0-2.83 10.54v1.28c0 10.38 7.34 18.79 16.4 18.79h.27l.48 4.41a39.5 39.5 0 0 0-5.6 9 10.8 10.8 0 0 0-2.74 7.75c-.05 4.91 1.81 11.53 2.51 22.76 0 .78.07 1.59.07 2.42a76.18 76.18 0 0 1-.67 9.26c-.18.09-.36.19-.54.27a12.91 12.91 0 0 1-1.3.47 12.65 12.65 0 0 1-2.74.52l-1.64.14a74.1 74.1 0 0 0-4.7.56 25.28 25.28 0 0 0-4.88 1.14 5 5 0 0 0-2.3 1.83 7.64 7.64 0 0 0-.64 1.07q-.14.29-.27.59a12.1 12.1 0 0 0-.44 1.27c0 .13-.07.26-.1.39a24.19 24.19 0 0 1-4.45-.46 12.08 12.08 0 0 0-2.11-.29 8.5 8.5 0 0 1 1.21-.3c-6.67-1-10.42 4-10.37 9a9.6 9.6 0 0 0 2.3 6.64c4.06 4.65 9 53 9 53h2.05v5.08c-8.31.58-16.72 1.75-16.72 4.13a8.13 8.13 0 0 0 2.65 5.91c-.12-.17-.24-.35-.35-.53a9.13 9.13 0 0 0 2.12 1.85h45.1v-10.65h.07v-1.29s-1.64 0-4.17.05v-4.56h2.05c1.83-18.9-6.16-43.41-7.88-48.4 2.81 0 5.77 0 8.7-.23 12.44.64 33.82.48 38.12-7.74 4.8-9.08.96-13.95-1.01-15.68zm-62.5 22.73s.94.11 2.54.25c1.7 5.53 2.95 14.62 3.83 23.48a172.85 172.85 0 0 0-6.37-23.73zM960.68 148a14.45 14.45 0 0 0 3.43.42h.13l.1.94a14.83 14.83 0 0 1-3.66-1.36zm-7.81 137.85h-.32v-.19h-3.78v-4.56h4.1z",
    transform: "translate(-244.61 -98.89)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    fill: "#985454",
    d: "M696.59 177.7h10.66v11.74h-10.66zM710.8 177.7h10.66v11.74H710.8z"
  }), React.createElement("ellipse", {
    cx: 720.53,
    cy: 30.93,
    rx: 14.21,
    ry: 18.78,
    fill: "#f8c198"
  }), React.createElement("path", {
    fill: "#f8c198",
    d: "M733.85 57.93h-12.43l-1.78-18.78h10.66l3.55 18.78z"
  }), React.createElement("path", {
    d: "M741 109.62s7.1 4.69 1.78 16.43-40.85 7-40.85 7 8.88 28.17 7.1 49.3h-14.21s-4.26-48.35-7.78-53c-4.53-6-1.1-17.43 7.78-15.08s46.18-4.65 46.18-4.65z",
    fill: "#263238"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M704.83 132.68a131.26 131.26 0 0 0 13.88.92 130.82 130.82 0 0 1-13.78-.59zM701.73 114.35C715.6 114 741 109.2 741 109.2a5.29 5.29 0 0 1 .54.43c-7.24 1.3-29.15 5.05-39.81 4.72zM694.03 113.72c-6 1.21-7.92 10.19-4.08 15.25 3.51 4.65 7.78 53 7.78 53h-2.91s-4.26-48.35-7.78-53c-4.39-5.8-1.3-16.74 6.99-15.25z"
  })), React.createElement("path", {
    d: "M710.8 187.11s-28.41 0-28.41 4.67a8.79 8.79 0 0 0 3.55 7h24.86z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M710.52 186.91v1.29c-4.95.05-27.45.51-27.45 4.69a8.58 8.58 0 0 0 1.32 4.62 8.69 8.69 0 0 1-2.3-5.91c.02-4.69 28.43-4.69 28.43-4.69z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M755.2 109.62s7.1 4.69 1.78 16.43-40.85 7-40.85 7 8.88 28.17 7.1 49.3h-14.2s-1.78-49.3-7.1-54-1.78-16.43 7.1-14.08 46.17-4.65 46.17-4.65zM725.01 187.11s-28.42 0-28.42 4.69a8.79 8.79 0 0 0 3.55 7H725z",
    fill: "#263238"
  }), React.createElement("path", {
    d: "M727.8 50.94h4.32c1.7 0 2.92 5.65 4.13 7.23 2.76 3.6.93 9.91 8.3 28.75 6.93 17.71 9.27 16.16 11.62 22.36s-41.78 5.9-41.78 5.9 2.25-11.86 1.78-20.56c-1-17.87-4.49-24.07.2-30.26-.04 0 5.02-13.42 11.43-13.42z",
    fill: "#fccc63"
  }), React.createElement("path", {
    d: "M720.53 13.44a10.91 10.91 0 0 1 1.46.1c-7.16 1-12.75 9-12.75 18.68s5.59 17.72 12.75 18.68a10.91 10.91 0 0 1-1.46.1c-7.85 0-14.21-8.41-14.21-18.78s6.37-18.78 14.21-18.78z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M705.04 10.39c1.42-1.8 3.41-2.54 5.32-3.21l8.6-3a24 24 0 0 1 7.79-1.83 11.83 11.83 0 0 1 4.77 1 19.49 19.49 0 0 1 2-.94 22.9 22.9 0 0 1 6.59-2.1 8.57 8.57 0 0 1 6.58 1.8 11.79 11.79 0 0 1 3.76 8.43 12.52 12.52 0 0 1-3.05 8.92 9.77 9.77 0 0 1-4.71 2.65 30.68 30.68 0 0 1-1 10.57 36.33 36.33 0 0 1-3.79 8.52 11.89 11.89 0 0 1-3.71 4.32 3.47 3.47 0 0 1-4.66-.76 9.8 9.8 0 0 1-1.38-4.45c-.9-6.34-1.8-13.62-6-17-2.6-2.12-5.51-1.91-8.42-1.89a14.11 14.11 0 0 1-7.54-2.28 5.43 5.43 0 0 1-1.88-1.68c-1.29-2.04-.7-5.27.73-7.07z",
    fill: "#ff5252"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M746.69 4.65a8.57 8.57 0 0 0-6.54-1.79 22.9 22.9 0 0 0-6.59 2.1 19.49 19.49 0 0 0-2 .94 11.83 11.83 0 0 0-4.77-1A24 24 0 0 0 719 6.73l-8.6 3c-1.9.67-3.89 1.41-5.32 3.21a7.09 7.09 0 0 0-1.3 3 7.2 7.2 0 0 1 1.3-5.59c1.42-1.8 3.41-2.54 5.32-3.21l8.6-3a24 24 0 0 1 7.79-1.83 11.83 11.83 0 0 1 4.77 1 19.49 19.49 0 0 1 2-.94 22.9 22.9 0 0 1 6.59-2.1 8.57 8.57 0 0 1 6.54 1.84 11.79 11.79 0 0 1 3.76 8.43 13.47 13.47 0 0 1-.07 1.83 11.59 11.59 0 0 0-3.69-7.72zM742.77 24.61v1c0-.33 0-.67-.05-1z"
  })), React.createElement("path", {
    d: "M716.13 94.85c-1-17.87-4.49-24.07.2-30.26 0 0 5-13.42 11.47-13.42h4.32c.51 0 1 .52 1.42 1.28h-2.83c-6.44 0-11.47 13.42-11.47 13.42-4.69 6.19-1.17 12.39-.2 30.26.38 7-1 16-1.55 19.27h-3.1s2.21-11.85 1.74-20.55z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fccc63",
    d: "M736.72 83.23H721.2V69.12h15.52z"
  }), React.createElement("g", {
    opacity: 0.2,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M715.93 114.35c13.87-.35 39.27-5.15 39.27-5.15a5.29 5.29 0 0 1 .54.43c-7.24 1.3-29.19 5.05-39.81 4.72zM708.28 113.73c-6.09 1.22-8 10.27-3.44 14.25 5.33 4.69 7.1 54 7.1 54h-2.91s-1.78-49.3-7.1-54c-5.18-4.56-1.98-15.76 6.35-14.25zM719.04 132.68a131.25 131.25 0 0 0 13.88.92 130.82 130.82 0 0 1-13.78-.59z"
  })), React.createElement("path", {
    d: "M735.67 79.11v22.45c0 8.14-5.11 14.65-11.26 14.33-7.5-.39-16.17-.53-17.15.77-.82 1.09-2.79 3.18-4.66 5.12s-4.63 0-4.43-3.22c.24-3.77 1.14-7.79 3.76-8.94 2.12-.93 5.91-1.49 9.72-1.83 6.54-.58 11.59-7.81 11.59-16.47V79.11z",
    fill: "#f8c198"
  }), React.createElement("path", {
    d: "M698.16 118.57c.24-3.77 1.14-7.79 3.76-8.94 2.12-.93 5.91-1.49 9.72-1.83 6.54-.58 11.59-7.81 11.59-16.47V79.11h12.43v1.28h-10.48V92.6c0 8.66-5.06 15.89-11.59 16.47-3.81.34-7.61.9-9.72 1.83-2.63 1.16-3.53 5.17-3.76 8.94a4.42 4.42 0 0 0 .66 2.7c-1.46-.1-2.75-1.74-2.61-3.97zM725.08 186.91v1.29c-4.95.05-27.45.51-27.45 4.69a8.58 8.58 0 0 0 1.33 4.63 8.69 8.69 0 0 1-2.3-5.91c0-4.7 28.42-4.7 28.42-4.7z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    transform: "rotate(-.2 -27986.22 70602.724)",
    fill: "url(#prefix__h)",
    d: "M396.58 495.16H546.1v170.36H396.58z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M153.445 399.057l146.019-.51.57 163.299-146.02.51z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M160.098 402.844l132.22-.462.41 117.81-132.219.46z"
  }), React.createElement("path", {
    transform: "rotate(-.2 -27788.549 70603.069)",
    fill: "url(#prefix__i)",
    d: "M595.26 495.16h149.52v170.36H595.26z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M352.134 399.053l146.019-.51.57 163.3-146.02.509z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M358.787 402.84l132.22-.462.41 117.81-132.219.461z"
  }), React.createElement("path", {
    transform: "rotate(-.2 -27590.874 70600.55)",
    fill: "url(#prefix__j)",
    d: "M793.95 495.16h149.52v170.36H793.95z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M550.822 399.05l146.02-.51.57 163.299-146.02.51z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M557.466 402.836l132.219-.461.411 117.81-132.219.46z"
  }), React.createElement("path", {
    transform: "rotate(-.2 -27985.86 70396.46)",
    fill: "url(#prefix__k)",
    d: "M395.88 287.61H545.4v170.36H395.88z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M152.74 191.5l146.02-.51.57 163.3-146.02.51z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M159.394 195.287l132.219-.461.411 117.809-132.22.462z"
  }), React.createElement("path", {
    transform: "rotate(-.2 -27593.374 70391.415)",
    fill: "url(#prefix__l)",
    d: "M791.88 284.06H941.4v170.36H791.88z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M548.746 187.938l146.019-.51.57 163.3-146.02.509z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M555.389 191.735l132.22-.462.41 117.81-132.219.461z"
  }), React.createElement("path", {
    transform: "rotate(-.2 -27791.049 70393.935)",
    fill: "url(#prefix__m)",
    d: "M594.23 286.13h149.52v170.36H594.23z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M351.094 190.008l146.02-.51.57 163.3-146.02.509z"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    opacity: 0.2,
    d: "M357.747 193.805l132.22-.462.41 117.81-132.218.461z"
  }), React.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M266.77 429.15h328.7v298.71h-328.7z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M275.31 438.37h314.38v279.45H275.31z"
  }), React.createElement("circle", {
    cx: 296.27,
    cy: 458.56,
    r: 12.42,
    fill: "url(#prefix__o)"
  }), React.createElement("circle", {
    cx: 296.27,
    cy: 458.56,
    r: 10.09,
    fill: "#ff9800"
  }), React.createElement("path", {
    fill: "url(#prefix__p)",
    d: "M511.29 446.14h64.43v24.84h-64.43z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M513.62 448.46h60.55v20.18h-60.55z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M274.54 511.34H589.7v133.51H274.54z"
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 578.1,
    r: 83.06,
    fill: "url(#prefix__q)"
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 578.1,
    r: 80.73,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 578.1,
    r: 58.99,
    fill: "url(#prefix__r)"
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 578.1,
    r: 57.44,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 579.65,
    r: 34.15,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 432.11,
    cy: 579.65,
    r: 34.15,
    opacity: 0.2
  }));
};

UndrawPhotoSharing.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPhotoSharing;