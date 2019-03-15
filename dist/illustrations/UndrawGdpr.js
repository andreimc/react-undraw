function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawGdpr = _props => {
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
    viewBox: "0 0 1006.98 889.13",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 436.86,
    y1: 827.5,
    x2: 436.86,
    y2: 266.81,
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
    x1: 729.55,
    y1: 449.33,
    x2: 729.55,
    y2: -37.39,
    gradientTransform: "rotate(-34.67 813.033 377.043)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 752.36,
    y1: 126.67,
    x2: 752.36,
    y2: 59.43,
    gradientTransform: "rotate(-34.67 813.033 377.043)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M.49 462.75c3 33.76 22.14 64.32 33.82 96.47a228.68 228.68 0 0 1 4.45 142c-2.78 9.58-6.21 19.19-6.21 29 0 33.82 38.53 56.27 73.54 71.2a1340.62 1340.62 0 0 0 276.82 83.64c31.07 5.87 69.88 8.4 89.54-13.67 9.44-10.6 11.72-24.44 18.65-36.33 17.67-30.31 60.67-42.1 99.26-48.84a1212.54 1212.54 0 0 1 140.67-16.19c47.48-2.67 101.39-5 132.86-36.17 20-19.82 25.82-47.17 26.62-73 2.61-84.74-37.88-176.44 14.09-249.83 21.79-30.78 57.37-53.26 79-84.13 31.31-44.73 28.61-101.54 7.41-149.21s-58.75-88.2-95.76-127.92c-12.3-13.14-25.36-26.8-43.76-32.89-19.13-6.34-40.82-3.43-61.33-.43-93.28 13.62-190.13 28.45-268.37 75.23-38.86 23.23-71.32 53.36-106 81.07-74.86 59.88-161.63 115.18-260.51 138.82-80.34 19.2-162.06 71-154.79 151.18z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M540.77 473.09a15.42 15.42 0 0 1 1.46-.66S501 449.2 489.52 442.75a96.8 96.8 0 0 1-11.84-8.33c14.34-5.2 34.4-14.49 45-28.44 0 0-3-2.5-6.85-6.13l4.14-4.84s21.62-17.42 6.76-26.45c-12.08-7.34-19.7 12.15-22.13 19.72l-.85-1s-23.26 35.53-54.63 17.86a43 43 0 0 1-4.84-8.83 39.93 39.93 0 0 0-11-15.42l-3.19-12.33-5.69-4.69c0-6.74.22-14.85 1-22q.07-.68.15-1.35c11-4.37 18.76-14.73 18.76-26.82a27.82 27.82 0 0 0-2.84-12.26c4.45-5.09 7.68-12 6.72-18-.75-4.65-4.72-7.68-9.48-9.82-4.58-2.32-10.18-3.68-14.37-4.82-7.71-2.09-16.13-3.08-23.63-.37-12.4 4.47-20.06 9.62-29.7 18.31-7.62 6.87-16 18.83-25 24s-17.81 11.87-21.3 21.26c-4.92 13.28 1.82 27.55 4.86 41.33a79.42 79.42 0 0 1-3.82 46.43c-5.9 14.75-16.45 29.16-13.86 44.75 2 11.84 11.37 21 22.9 26.29A57.8 57.8 0 0 0 351 496c9.71 1.59 20.08 1.08 29.05-2.59a107.73 107.73 0 0 1-16.21 30c-6.65 8.46-6 13.06-.12 13.5q-.31 1.19-.58 2.53c-1.91 9.37-2.52 24.7.7 49.78 8.11 63.23-9.46 82.58-9.46 82.58s1.88.66 5.28 1.64q-.21.57-.42 1.17c-3.72 10.56-7.24 29.16-.12 54 7.67 26.7 9.92 39 10.57 44.28v.31c-.77.3-3.57 1.63-5.63 5.78a16.42 16.42 0 0 0 2.46 18v24.5h3.38v-20.65a58.32 58.32 0 0 1 7.57 11.51 26.11 26.11 0 0 0 20.14 14.26c8.7 1.18 18.3 1.61 22.3-1.26 0 0 3-5.65-11.35-12.5l-.12-.18c-4.72-6.88-12-18.82-13.1-28.19a78.33 78.33 0 0 0-3.7-16.89 49.62 49.62 0 0 1-2.64-12.75c-1-13.29-2.74-42.42-.16-48.85 1.74-4.33 2.77-15.2 3.35-24.7 0-.43.05-.86.08-1.28a188.88 188.88 0 0 0 45.23.33v6.3s-6.08 19.36 6.08 47.1c0 0 16.49 25.19 20.22 40.07q.16.64.29 1.25c-2.21.26-11.95 2.55-8.34 23.19l-.68 27.1h3.38l.68-23.87s3.38-5.81 14.87 6.45q2.61 2.79 4.72 5.17a41.93 41.93 0 0 0 32.82 13.84c7.38-.26 14.43-1 17.19-2.88 0 0 6.76-5.16-10.14-7.74l-7.78-2.31h-.29l-1.11-1.24c-5.9-6.68-14.47-18-16.66-29.5a53 53 0 0 0-3.66-11.52l-6.32-14.22-14.87-76.06s.78-3.34 1.54-7.43c.08-.45.17-.92.25-1.38l2.26-.87s13.52-9.68-6.76-68.39c0 0-7.88-32.7-11.87-58.75l9.84-1.89s-1.52-23-4.55-39c2-7.5 3.1-14 1.85-17.18a29.93 29.93 0 0 1-1.72-9 206.09 206.09 0 0 0-2.23-20.71l12.73 9 64.2 31c-2.46-5.06-2.85-9.21-2.14-12.56 4.68 6.69 17.1 21.62 27.82 9.33 10.94-12.43-9.96-18.63-18.35-20.54z",
    transform: "translate(-96.51 -5.43)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M435.12 467.87s33.09 5.73 20.36 21-28-12.09-28-12.09z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M325.03 369.24s16.54 7.64 22.27 23.54 31.82 39.45 42.63 45.82 49.63 29.27 49.63 29.27-16.54 6.36-8.27 24.18l-60.45-30.54-27.35-20.36z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M325.03 369.24s16.54 7.64 22.27 23.54 31.82 39.45 42.63 45.82 49.63 29.27 49.63 29.27-16.54 6.36-8.27 24.18l-60.45-30.54-27.35-20.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M678.25 7.9s-72.88-26.62-150.38 95.21c0 0-32.58 68-105.38 67.73l-7.8-17.78-14.69 5.77 197 450 14.86-4.77-92.78-213.14c30.78-2.36 99.37-24.52 161.93-162.65 0 0 56.2-104.9 138.5-92.5z",
    transform: "translate(-96.51 -5.43)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M314 167.37l95.49 215.94s92.6 22.6 174.6-158.44c0 0 55-102.61 135.48-90.48L581.43 9.3s-71.3-26-147.1 93.14c-.01 0-36.99 77.25-120.33 64.93z",
    fill: "#5d76b7"
  }), React.createElement("path", {
    fill: "#ffd037",
    d: "M435.62 142.44l4.64 12.94-8.93 8.87 10.41-1.28 3.89 11.84 3.08-13.44 9.69-.78-8.59-6.97 1.99-12.68-7.59 8.48-8.59-6.98zM455.1 103.68l4.13 12.21-7.81 9.71 9.29-2.13 4.98 11.09 1.24-13.77 10.16-1.65-8.81-5.74 1.88-12.07-6.25 8.09-8.81-5.74zM484.53 80.09L489 90.45l-7.67 10.69 9.16-3.1 4.47 10.36 2.97-12.82 10.53-1.9-9.8-5.61L502 75l-8.18 9.96-9.29-4.87zM517.42 79.4l4.48 10.36-9.3 9.13 10.64-2.52 4.11 10.61 3.34-13.07 10.78-1.53-8.79-4.15 3.08-13.44-9.04 9.49-9.3-4.88zM544.77 98.7l4.47 10.36-9.29 9.13 10.64-2.52 4.11 10.61 3.33-13.07 10.78-1.53-8.79-4.15 3.09-13.44-9.05 9.49-9.29-4.88zM559.4 128.41l4.47 10.36-9.29 9.13 10.63-2.52 4.12 10.61 3.33-13.07 10.78-1.53-8.79-4.15 3.09-13.44-9.05 9.49-9.29-4.88zM552.35 175.81l4.98 11.09-8.85 13.66 10.72-4.73 4.59 9.74 2.22-13.91 11.34-4.62-10.02-4.37 2.1-13.29-6.83 9.57-10.25-3.14zM536.29 220.29l3.89 11.84-7.76 12.9 10.36-4.47 4.36 10.98 2.08-14.9 9.74-4.58-8.79-4.15 2.33-14.53-7.31 10.44-8.9-3.53zM505.57 247.46l4.02 12.82-9.38 11.34 9.29-2.13 4.12 10.62 3.08-13.44 9.63-3.97-7.58-5.52 2.08-14.89-7.06 10.8-8.2-5.63zM473.85 252.18l3.66 13.07-9.81 8.4 9.94-.42 2.88 10.39 3.84-12.35 10.89-2.15-7.97-6.86 1.88-12.07-7.11 7.62-8.2-5.63zM445.07 228.48l3.78 12.46-12.02 8.31 12.66.4 2.43 12.85 4.79-14.08 11.9-.7-8.95-6.72 3.78-15.54-10.64 9.52-7.73-6.5zM433.78 185.7l3.78 12.46-12.02 8.31 12.66.39 2.43 12.86 4.79-14.09 11.9-.69-8.96-6.72 3.79-15.54-10.64 9.51-7.73-6.49z"
  }), React.createElement("path", {
    d: "M636.68 183.14l-22-24.47a3.83 3.83 0 0 0-5.41-.29L607.5 160l-9.2-10.25a9.75 9.75 0 0 0-13.77-.74l-12 10.77a9.75 9.75 0 0 0-.74 13.77l9.2 10.25-1.79 1.61a3.83 3.83 0 0 0-.29 5.41l22 24.47a3.83 3.83 0 0 0 5.41.29l30.08-27a3.83 3.83 0 0 0 .28-5.44zM576.07 173a9.75 9.75 0 0 1 .74-13.77l6.75-6.06a9.75 9.75 0 0 1 13.77.74l7.55 8.41-21.26 19.08zm34.08 13.86l3.56 4a2.14 2.14 0 1 1-3.19 2.87l-3.76-4.19a5.2 5.2 0 1 1 3.39-2.65z",
    transform: "translate(-96.51 -5.43)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M488.8 145.02l-11.39 10.23a9.26 9.26 0 0 0-.7 13.08l9.65 10.75 2.49-2.24-8.08-9a9.26 9.26 0 0 1 .7-13.08l6.41-5.75a9.26 9.26 0 0 1 13.08.7l8.08 9 2.49-2.24-9.65-10.75a9.26 9.26 0 0 0-13.08-.7z",
    fill: "#f0f5fa"
  }), React.createElement("path", {
    d: "M512.31 153.94l-28.57 25.63a3.64 3.64 0 0 0-.28 5.14l20.87 23.24a3.64 3.64 0 0 0 5.14.28l28.58-25.66a3.64 3.64 0 0 0 .28-5.14l-20.84-23.21a3.64 3.64 0 0 0-5.18-.28zm.81 27.05l3.38 3.77a2.025 2.025 0 1 1-3 2.72l-3.57-4a4.94 4.94 0 1 1 3.22-2.51zM309.21 156.95L501.22 595.5l14.53-4.67L323.61 151.3l-14.4 5.65z",
    fill: "#f0f5fa"
  }), React.createElement("path", {
    d: "M403.3 387.69s7.64-31.18 21.64-22.27-6.36 26.09-6.36 26.09l-5.73 7z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    fill: "#dedff7",
    d: "M326.69 359.16l7.25 6.26 3.06 12.42-4.97-2.88v-9.54l-5.35-.64.01-5.62z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M326.69 359.16l7.25 6.26 3.06 12.42-4.97-2.88v-9.54l-5.35-.64.01-5.62z"
  }), React.createElement("path", {
    d: "M348.26 485.05l4.23 54.73 12.65-2.55s-2.81-44.54-8.43-52.18-8.45 0-8.45 0z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M348.26 485.05l4.23 54.73 12.65-2.55s-2.81-44.54-8.43-52.18-8.45 0-8.45 0z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M317.39 808.95l-20.36 3.18-11.45-8.91-8.27-26.09v-9.56a21.06 21.06 0 0 0-.23-3.42c-.61-5.17-2.73-17.33-10-43.67-6.71-24.47-3.39-42.81.11-53.22a47.11 47.11 0 0 1 4.34-9.77h27.36s-.15 7.59-.66 16.36c-.55 9.37-1.51 20.1-3.16 24.37-2.44 6.34-.77 35.07.15 48.18a51 51 0 0 0 2.49 12.56 80.4 80.4 0 0 1 3.49 16.66c1 9.25 7.89 21 12.33 27.81 2.26 3.38 3.86 5.52 3.86 5.52zM414.12 809.57l-8.91 2.55-17.18-7-21.64-22.9V769.5a24.28 24.28 0 0 0-.69-4.38c-3.51-14.68-19-39.52-19-39.52-11.45-27.36-5.73-46.45-5.73-46.45v-19.74s29.91-10.18 31.18-6.36c.71 2.14-.18 8.51-1.09 13.67-.72 4-1.45 7.32-1.45 7.32l14 75.09 5.95 14a54 54 0 0 1 3.44 11.36c2.07 11.31 10.14 22.5 15.69 29.09 3.1 3.75 5.43 5.99 5.43 5.99z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M317.39 808.95l-20.36 3.18-11.45-8.91-8.27-26.09v-9.56a21.06 21.06 0 0 0-.23-3.42 4.76 4.76 0 0 1 .87-.4s2.55 9.55 1.27 14c-1 3.55 7.67 16.81 11.24 22a15.07 15.07 0 0 0 7.33 5.82c6.95 2.46 13.62-.86 15.8-2.14 2.2 3.38 3.8 5.52 3.8 5.52z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M313.7 803.57s-8.06 5.62-16.55 2.61a15.06 15.06 0 0 1-7.33-5.78c-3.57-5.23-12.26-18.49-11.24-22 1.27-4.45-1.27-14-1.27-14s-3.23 1-5.5 5.78a16.81 16.81 0 0 0 2.32 17.78v24.16h3.18v-20.34a57.84 57.84 0 0 1 7.13 11.35 24.67 24.67 0 0 0 19 14.06c8.19 1.16 17.23 1.59 21-1.24-.05 0 2.75-5.57-10.74-12.38z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M414.12 809.57l-8.91 2.55-17.18-7-21.64-22.9V769.5a24.28 24.28 0 0 0-.69-4.38 4.71 4.71 0 0 1 .69-.07c0 3.31 5.64 11.19 9.6 16.3a99.84 99.84 0 0 1 5.77 8.35c8.24 13.28 22.51 14 26.9 13.92 3.13 3.71 5.46 5.95 5.46 5.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M366.39 766.31s-12.09 0-8.27 22.91l-.63 26.73h3.18l.64-23.54s3.18-5.73 14 6.36q2.46 2.75 4.45 5.1a38.65 38.65 0 0 0 30.91 13.65c6.94-.26 13.59-1 16.19-2.84 0 0 6.36-5.09-9.55-7.64l-7.32-2.23s-18.39 2-28.22-13.85a98.87 98.87 0 0 0-5.78-8.39c-3.95-5.07-9.6-12.95-9.6-16.26z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M271.58 657.5h27.36s-.15 7.59-.66 16.36a193.24 193.24 0 0 1-31-6.59 47.11 47.11 0 0 1 4.3-9.77zM371.02 666.72a126.66 126.66 0 0 1-30.09 7.48v-14.79s29.91-10.18 31.18-6.36c.72 2.14-.17 8.52-1.09 13.67z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M373.39 664.5c-52.18 21.64-110.72 0-110.72 0s16.54-19.09 8.91-81.45c-3-24.73-2.46-39.85-.66-49.1 2.73-14.07 8.29-14.53 8.29-14.53l75.09-8.91c-.67 2.55-.71 6.85-.34 12.2 1.79 25.34 13.06 74.34 13.06 74.34 19.1 57.91 6.37 67.45 6.37 67.45z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M333.3 323.42c-1.94 2.91-3.11 8.85-3.81 15.69-1.57 15.58-.65 35.85-.65 35.85s-38.82 21-29.91-6.36a68.36 68.36 0 0 0-4.44-50.9s45.18-3.82 38.81 5.72z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M333.3 323.42c-1.94 2.91-3.11 8.85-3.81 15.69a28.64 28.64 0 0 1-29-4.4 65.09 65.09 0 0 0-6-17s45.18-3.83 38.81 5.71z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 318.66,
    cy: 311.33,
    r: 28.64,
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M353.96 522.71c-3.49 9.58-6.66 17.07-6.66 17.07s-29.91-25.46-52.81-13.36c-10.81 5.7-19.06 8.15-23.56 7.53 2.73-14.07 8.29-14.53 8.29-14.53l75.09-8.91c-.68 2.55-.72 6.84-.35 12.2z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M347.3 537.23s-29.91-25.45-52.81-13.36-34.36 9.55-22.91-5.73 26.73-47.73 15.27-71.91-15.91-62.36-7-72.54 17.18-21.64 17.18-24.18c0 0 32.45 23.54 38.82 33.09 1.83 2.74 4.82 9.74 8.14 18.33 1.79 4.64 3.69 9.74 5.56 14.88a189.19 189.19 0 0 1 7.1 24.7 208.84 208.84 0 0 1 4.31 32.5 30.76 30.76 0 0 0 1.62 8.86c3.81 10.18-15.28 55.36-15.28 55.36z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M333.94 366.06l-.75 13.28-36.74-28s-.7-5.62 8.85.1 28.64 14.62 28.64 14.62z",
    fill: "#dedff7"
  }), React.createElement("path", {
    d: "M356.64 440.51c-33.61.62-71.7-36.91-71.7-36.91-13.36-35.63 31.82-28 31.82-28s3.72 9.58 27.23 25.33c1.79 4.64 3.69 9.74 5.56 14.88a189.19 189.19 0 0 1 7.09 24.7z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M284.94 399.15s43.27 42.63 78.27 36.27c0 0 41.36-10.18 57.91-33.09 0 0-10.82-9.55-17.82-18.45 0 0-22.27 35.63-52.18 17.18s-34.36-29.91-34.36-29.91-45.18-7.64-31.82 28z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M329.77 267.7c-7.26-2.06-15.19-3-22.25-.37-11.68 4.41-18.89 9.49-28 18.06-7.18 6.77-15.08 18.57-23.53 23.65s-16.71 11.7-20 21c-4.63 13.1 1.71 27.17 4.58 40.76a81.81 81.81 0 0 1-3.6 45.79c-5.56 14.54-15.49 28.76-13 44.14 2.61 16.45 19.12 27.61 35.53 30.42 11.18 1.92 23.28.74 32.78-5.44a20 20 0 0 0 6.6-6.5c4.05-7 1.39-15.81-1.11-23.51-5.12-15.77-9.16-31.87-13.21-47.95-2.36-9.39-4.7-19.46-1.36-28.55 3.26-8.87 11.39-15.08 19.89-19.22 3.33-1.62 6.88-3.08 9.38-5.8a16.13 16.13 0 0 0 3.13-5.31c4.28-11.41-.52-26.13 7.74-35.1 4.2-4.56 10.67-6.14 15.85-9.55 6.54-4.31 13-14.49 11.77-22.75-1.34-8.7-13.68-11.64-21.19-13.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M328.49 267.06c-7.26-2.06-15.19-3-22.25-.37-11.68 4.41-18.89 9.49-28 18.06-7.18 6.77-15.08 18.57-23.53 23.65s-16.71 11.7-20 21c-4.63 13.1 1.71 27.17 4.58 40.76a81.81 81.81 0 0 1-3.6 45.79c-5.56 14.54-15.49 28.76-13 44.14 2.61 16.45 19.12 27.61 35.53 30.42 11.18 1.92 23.28.74 32.78-5.44a20 20 0 0 0 6.6-6.5c4.05-7 1.39-15.81-1.11-23.51-5.12-15.77-9.16-31.87-13.21-47.95-2.36-9.39-4.7-19.46-1.36-28.55 3.26-8.87 11.39-15.08 19.89-19.22 3.33-1.62 6.88-3.08 9.38-5.8a16.13 16.13 0 0 0 3.13-5.31c4.28-11.41-.52-26.13 7.74-35.1 4.2-4.56 10.67-6.14 15.85-9.55 6.54-4.31 13-14.49 11.77-22.75-1.33-8.69-13.67-11.64-21.19-13.77z",
    fill: "#eb6475"
  }), React.createElement("path", {
    d: "M112.68 680.92s-13.26-45 2.49-78.14a71.09 71.09 0 0 0 5.75-44.6 119.57 119.57 0 0 0-6.31-20.93",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M124.39 516.31c0 5.52-10 21.51-10 21.51s-10-16-10-21.51a10 10 0 0 1 20 0zM140.9 546.86c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49a10 10 0 0 1 16.77 10.86zM140.18 599.08c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 0 1 9 17.84zM130.74 638.47c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 0 1 11.88 16.06zM99.86 560.57c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 1 0-13.92 14.32zM89.4 606.76c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 1 0-9 17.84zM85.39 653.06c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 0 0-11.88 16.06zM481.15 809.31a11.67 11.67 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.24-9.81 4.1 4.1 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 0 1 4.84 4.61 4.57 4.57 0 0 1 .36.82h14.65a40.83 40.83 0 0 0 9.04-6.27zM677.87 428.44s-41.84 41.84-18.22 103.92-40.49 165.32-40.49 165.32.69-.1 2-.32c85.93-15.17 128.62-113.44 80.84-186.45-17.8-27.15-32.38-58.99-24.13-82.47z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M677.87 429.13s-41.84 41.84-18.22 103.92-40.49 165.32-40.49 165.32.69-.1 2-.32c85.89-15.17 128.58-113.48 80.8-186.48-17.76-27.11-32.34-59-24.09-82.44z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M677.87 428.44s-23.62 51.28 0 93.12 4 159.25-58.71 176.12",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M752.38 597.65s-47.74-7.6-52.09 35.18-91.8 48.74-91.8 48.74l1.64 1.09c72.2 47.4 141.23 30.19 130.82-32.75-3.86-23.41-3.55-46.91 11.43-52.26z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M752.38 597.65s-37.06 8.13-34 41.83-55.04 74.09-109.89 42.09",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M710.38 683.11s-37.6-7.54-47.63-17.54-55.15-27.57-60.16-15-67.68 55.1-25.1 62.62 100.27 10 112.8 5 20.09-35.08 20.09-35.08z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M577.49 708.57c42.62 7.52 100.27 10 112.8 5 9.55-3.82 16.18-22.16 18.8-30.7l1.25.26s-7.52 30.08-20.05 35.09-70.19 2.51-112.8-5c-12.3-2.17-15.82-7.27-14.49-13.72 1.08 4.18 5.37 7.42 14.49 9.07z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M82.85 678.37s22.41-.69 29.16-5.5 34.47-10.55 36.14-2.84 33.67 38.36 8.34 38.54-58.78-3.94-65.52-8-8.12-22.2-8.12-22.2z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M156.97 705.91c-25.3.2-58.78-3.94-65.52-8-5.13-3.13-7.18-14.34-7.86-19.52h-.75s1.42 18.07 8.16 22.18 40.22 8.25 65.52 8c7.3-.06 9.82-2.66 9.69-6.5-1.02 2.34-3.8 3.79-9.24 3.84z",
    opacity: 0.2
  }));
};

UndrawGdpr.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGdpr;