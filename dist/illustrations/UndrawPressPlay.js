function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPressPlay = _props => {
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
    viewBox: "0 0 999 797.25",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 778.67,
    y1: 845.35,
    x2: 778.67,
    y2: 329.26,
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
    d: "M321.21 31.27C351.99 3.84 400.32-1.73 444.3.43c138.16 6.87 262.87 73.56 370.74 149 39.05 27.31 77.5 56.74 102.85 94.35 51.6 76.57 36.3 182.63-35.46 245.7-24.41 21.46-54 37.91-84.39 52.5-54 25.93-112.31 46.74-173.62 52.67-43.73 4.22-88 .79-131.46-5.11-121.46-16.46-240.65-52.91-340.56-115.19-43.82-27.33-85.13-61.3-103.19-105.52s-6.5-100.2 38.29-126.4c18.51-10.82 40.64-15.71 62.3-20.3 31.89-6.76 64.29-13.42 93.06-27.15 29.72-14.19 64.92-41.63 59-73-6.36-33.72-11.36-63.35 19.35-90.71z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 174.08,
    cy: 129.4,
    r: 31.5,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 108.09,
    cy: 54.4,
    r: 19.5,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 925.57,
    cy: 114.4,
    r: 12,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 689.92,
    cy: 788.85,
    rx: 84.24,
    ry: 8.4,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M214 487.31l-.37 19.95-2.96 161.71-25.34 59.34-87.33 1V496.5l91.14-7.22 24.86-1.97z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M214 487.31l-.37 19.95-2.96 161.71-25.34 59.34-87.33 1V496.5l91.14-7.22 24.86-1.97z"
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M214 487.31l-.37 19.95-2.96 161.71-25.34 59.34L192 507.64l-.02-.14-2.84-18.22 24.86-1.97z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M189.14 489.28l24.86-1.97-.37 19.95-21.65.24L98 508.55V496.5l91.14-7.22z"
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M999 496.5v231.47h-20.33l-81.34-59.33V489.97l72.67-6.83 4.46 2.05 4.21 1.94L999 496.5z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M978.67 485.19H999v242.78h-20.33z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M999 485.19v13.31l-20.33.23-81.34.9v-9.66l72.67-6.83 4.46 2.05 4.21 1.94v-1.94H999z"
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M999 477.64v18.86L0 507.64v-24l94-19 818-6 87 19z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M999 477.64v18.86L0 507.64v-24l999-6z"
  }), React.createElement("rect", {
    x: 365.5,
    y: 194.97,
    width: 349.92,
    height: 271.69,
    rx: 22.82,
    ry: 22.82,
    fill: "#474157"
  }), React.createElement("path", {
    fill: "#ededf4",
    d: "M393.66 219.48h294.12v221.63H393.66z"
  }), React.createElement("circle", {
    cx: 382.18,
    cy: 330.29,
    r: 4.82,
    fill: "#e6e8ec"
  }), React.createElement("circle", {
    cx: 700.81,
    cy: 330.81,
    r: 7.95,
    fill: "#e6e8ec"
  }), React.createElement("path", {
    d: "M572.43 331.15l-37.61-22.86a5.14 5.14 0 0 0-7.63 4.48v44.46a5.14 5.14 0 0 0 7.63 4.48l37.61-21.58a5.15 5.15 0 0 0 0-8.98zm28.28 3.85a53 53 0 1 0-53 53 53 53 0 0 0 53-53zm-95.74 0a42.74 42.74 0 1 1 42.74 42.74A42.73 42.73 0 0 1 504.97 335z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M904.38 560.51a12.5 12.5 0 0 0-1.13-3.52c.76-2.59 1.25-4.18 1.25-4.18s0-.38-.12-1a15.35 15.35 0 0 0-15.55-12.88c-6 .11-17.38.51-30 1.93.72-5.05 1.58-11.09 2.48-17.31l1.65.18c.38 0 .78 0 1.18.06h.53a5.44 5.44 0 0 0 3.66-1.12 2.16 2.16 0 0 0-.67-3.54 8.92 8.92 0 0 0 7.83-3.28 7 7 0 0 0 0-8.14c-2.11-3-6.58-5-6.82-8.53-.13-2 1.21-3.8 2.26-5.57a23.27 23.27 0 0 0-3.67-27.95 54.76 54.76 0 0 0-4.44-3.95c-2.2-8.08-4.5-15.3-5.18-15.53-.88-.29-2.39-2.19-3.83-3.82a18.4 18.4 0 0 0-.07-4.13c-1.06-7-8-12-11.82-18.18s-4.51-13.75-3.53-20.83 3.45-13.93 5.46-20.84c1.5-5.13 2.75-10.58 1.07-15.67-1.19-3.63-3.78-6.77-6.45-9.72-6.41-7.09-13.8-13.73-22.92-18a45.55 45.55 0 0 0-20.29-4.34h-.07l-1.1.06-.78.05-.78.08-.83.08c-.85.11-1.69.24-2.53.41a87.31 87.31 0 0 0-18.55-2.08h-.81a9.5 9.5 0 0 0-5.3 1.25c-2.22 1.55-2.5 4.33-3.17 6.75a18.73 18.73 0 0 1-7.2 10c-2.39 1.72-5.2 3-7.48 4.8s-4.06 4.5-3.45 7.16c.51 2.23 2.59 3.89 5 4.9-.29.36-.59.71-.87 1.08.47.19 1 .36 1.43.5 3 .89 6.23 1 9.27 1.81a20.31 20.31 0 0 1 2.46.83 35.12 35.12 0 0 0-4.11 16.52 35.59 35.59 0 0 0 18.62 31.22v1c.31 10.44-.48 23.14-5.82 25.29s-10.45 4.58-13.6 6.15l-1 .53c-.83-.38-1.66-.78-2.47-1.2 0 0-4.25-.5-3.51 2.74 0 0-12.85-2-19.9 3.49s-18.62 16.95-20.89 19.94-19.82 9.53-19.82 9.53 5.53-7.73 3.14-17.2c0 0-2.64-11.42-1.38-16s4.53-21.58 4.53-21.58.46-17.94-9.33-26.17-16.6-15-12.82-7a111.46 111.46 0 0 0 5.54 10.71s-23.41 5.56-15.1 14.24 10.57 8.69 10.57 8.69-2.77 21.43-3.28 25.42-5 34.39-5 34.39-.25 14.46 2.27 16.7c0 0 1.65 9.31 12.08 9 0 0 19.88-.5 25.42-2.74s24.66-14.21 26.68-13.46a1.15 1.15 0 0 1 .39.26 2.83 2.83 0 0 1 .3.3c-2 4.43-6.74 19.47-4.72 26.86 0 0-1.76 20.93 8.81 27.66 0 0 15.35 25.92 9.56 39.87-.46 1.13-.87 2.17-1.25 3.18-8.79-7.29-22.2-14-42.68-17.71-2.09-.38-4.17-.84-6.23-1.34-5.82-1.41-21.83-2.7-29.45 22.61a111.36 111.36 0 0 1-6.76 17.12c-3 6.07-6.33 14.77-6.4 23.4-.17 12.1 6.08 24.09 28.76 28.49.25 9 1.28 19.72 4.36 27.43 6.29 15.7 16.36 41.12 16.36 41.12s12.08 25.92 12.84 36.38c.49 6.85 1.21 15.83.71 22 0 .38-.06.74-.1 1.1a26.52 26.52 0 0 1-3.38 3.07c-1.76 1-7.55 7.23-7.55 8.72a26.64 26.64 0 0 0 .38 4.26c-2.74 2.39-4.24 5-4.24 7.6 0 13.52 38.37 24.48 85.7 24.48s85.69-11 85.69-24.48c0-12.34-32-22.54-73.58-24.22 8.67-3.46 16.37-7.09 19.56-10a4.68 4.68 0 0 0 1.51-2.06l-8.05-18.69s-.63.14-1.56.41l-.56-.84c-3.58-5.45-10.47-16.31-10.47-19.26 0-1.09-1.82-8.06-4.46-17.61V698c26.26 4 60.1-1.44 60.1-1.44l.15-.08h.66v-.36c4.55-2.52 27.31-15.85 34.06-33.53 2-5.16-.49-12.55-5.44-20.45 3.46-8.59 12-30.78 11.15-39.63 0-.47-.06-1-.06-1.52a26.12 26.12 0 0 0 .1-2.72c1-13 9-36.75 9-36.75s-.05-.41-.15-1.01zm-170-57.76c1.82 3.2 3.77 7.29 4.54 8.95s-2.66-4.9-4.49-8.95zm1.9 280.1l-.19.07v-1a59.38 59.38 0 0 1 .19-7.82 9.16 9.16 0 0 0-.86-4.06 96 96 0 0 1-6.13-24.13c-1-8.72-1.83-18.23-1.31-20.65.78-3.71 1.42-31.81.45-45.66l15.48 3.48 18 36.7s11.58 17.92 15.17 32.06V766a34.6 34.6 0 0 1-5.41 11.74c-2.39 3.27-4.72 6.58-6.88 10-.66 1.06-1.39 2.15-2.12 3.17-.24 0-12.07.69-14.08 2.91-1.24 1.37-3.4 3.53-3.76 5.7l-.51.08c-2.32-6.91-7.99-16.75-7.99-16.75z",
    transform: "translate(-100.5 -51.37)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M711.93 718.63l-4 13-17 14.75-25 7.18s-11.75-6.43-7.75-7.68c1.11-.35 2.43-1.62 3.77-3.28-1.4 5.1 9.73-1.47 9.73-1.47s28.75-20.5 31.75-22.75a22.61 22.61 0 0 1 6.4-2.93c1.25 1.95 2.1 3.18 2.1 3.18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M711.93 718.63l-4 13-17 14.75-25 7.18s-11.75-6.43-7.75-7.68c1.11-.35 2.43-1.62 3.77-3.28a50 50 0 0 0 3.34-4.82c2.14-3.44 4.46-6.76 6.83-10a36 36 0 0 0 6.31-16.61c1.75-13.75-16-41.5-16-41.5l-32.25-66.25 45 5.5s24.25 83.25 24.25 87.25c0 3 6.84 13.85 10.4 19.32 1.25 1.91 2.1 3.14 2.1 3.14z",
    fill: "#fdc2cc"
  }), React.createElement("ellipse", {
    cx: 686.97,
    cy: 771.05,
    rx: 85.12,
    ry: 24.55,
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M719.93 734.63a4.8 4.8 0 0 1-1.5 2.07c-6.18 5.67-29.29 14.1-43.57 18.68a101.11 101.11 0 0 1-11.43 3.25c-3.5.25-10.75-2-15.75-5.07s-.5-7.43 1.52-9.68 14-2.92 14-2.92c-5.75 9.57 8.49 1.17 8.49 1.17s28.75-20.5 31.75-22.75 8.5-3.5 8.5-3.5z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M719.93 734.63a4.8 4.8 0 0 1-1.5 2.07c-6.18 5.67-29.29 14.1-43.57 18.68a101.11 101.11 0 0 1-11.43 3.25c-3.5.25-10.75-2-15.75-5.07s-.5-7.43 1.52-9.68 14-2.92 14-2.92c-5.75 9.57 8.49 1.17 8.49 1.17s28.75-20.5 31.75-22.75 8.5-3.5 8.5-3.5z",
    opacity: 0.3
  }), React.createElement("path", {
    d: "M718.43 736.72c-6.18 5.67-29.29 14.1-43.57 18.68 12.94-10.96 34.64-16.69 43.57-18.68z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 686.97,
    cy: 763.14,
    rx: 17.03,
    ry: 4.91,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M677.5 633.64H695v129.5h-17.5z"
  }), React.createElement("path", {
    d: "M695 640.06v15c-3.5-1.08-11.49-5.63-17.5-9.21v-12.22h3.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M653.77 577.26s57.78-14.87 72.16-26 70.85 41.24 63.39 61-34.62 34.07-34.62 34.07-75.11 12.22-87.9-13.27-13.03-55.8-13.03-55.8z",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M653.77 577.26s57.78-14.87 72.16-26 70.85 41.24 63.39 61-34.62 34.07-34.62 34.07-75.11 12.22-87.9-13.27-13.03-55.8-13.03-55.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M648.77 571.26s57.78-14.87 72.16-26 70.85 41.24 63.39 61-34.62 34.07-34.62 34.07-75.11 12.22-87.9-13.27-13.03-55.8-13.03-55.8z",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M595.18 434.9l-6.25-2.27s5.5-7.75 3.13-17.25c0 0-2.63-11.46-1.38-16.1s4.5-21.65 4.5-21.65.46-18-9.27-26.25-16.48-15-12.73-7a111.4 111.4 0 0 0 5.5 10.75s-23.25 5.57-15 14.29 10.5 8.71 10.5 8.71-2.75 21.5-3.25 25.5-5 34.5-5 34.5-.25 14.5 2.25 16.75a11.31 11.31 0 0 0 12 9c1.78-.03 23-23.48 15-28.98zM746.18 388.9v14l-14.5 4.73-24.7 18.18-6.55 4.82-29.25-11.75-18.5-19.5s.9-.49 2.46-1.3l1-.53c3.13-1.57 8.06-4 13.51-6.17s6.09-14.89 5.78-25.37v-1c-.25-7.35-1-13.36-1-13.36s3.05-.58 7.49-1.24c12.31-1.83 35.28-4.3 33.26 3.24a17.37 17.37 0 0 0 0 7.79c.06.28.12.57.19.85 2.08 9.09 8.52 18.61 8.52 18.61l20 7.2.56.2z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M746.18 393.15v-4.25a14 14 0 0 1 4.75 0c1.75.5 5.07 5.75 6.57 6.25s10.68 34.75 9.68 37.75-10.45 70.73-10.45 70.73l-19.05 21-3.75-57.75 12.25-34.25zM647.43 550.4s-17.41 3.75-15.2 9.25 11.95 5.75 11.95 5.75zM671.68 439.35l-13.25 28.55-15.75 11.5-2.75-17.77s-5.32-11.75-7.61-13.74a1.15 1.15 0 0 0-.39-.26c-2-.75-21 11.25-26.5 13.5s-25.25 2.75-25.25 2.75l8.75-31.25s17.5-6.5 19.75-9.5 13.75-14.5 20.75-20 19.77-3.5 19.77-3.5l.2.08 3.28 1.42 9.5 23.25zM636.93 724.15a59.64 59.64 0 0 0-.19 7.84c.07 2.79.19 5.16.19 5.16l-5.75 12s-19.75 6.5-16.5 3.75c1.13-.95 1.71-3.42 2-6.69.49-6.18-.22-15.19-.71-22.06-.75-10.5-12.75-36.5-12.75-36.5s-10-25.5-16.25-41.25-4-44.25-4-44.25 1-21.5 5.5-28 22-8.75 22-8.75l8.21 27.23s6.75 25.5 9.25 29.25 1.75 48.5.75 53.25c-.51 2.43.35 12 1.31 20.72a97.31 97.31 0 0 0 6.08 24.2 9.24 9.24 0 0 1 .86 4.1z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M636.93 737.15l-5.75 12s-19.75 6.5-16.5 3.75c1.13-.95 1.71-3.42 2-6.69.71-.71 1.47-1.49 2.25-2.29a50.49 50.49 0 0 1 17.85-11.93c.03 2.79.15 5.16.15 5.16z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M645.95 755.01a.59.59 0 0 1 0 .14c-1 4.75-17.5 11.25-17.5 11.25s-10.5 1.75-16.5 3.25a4.15 4.15 0 0 1-1.41.13c-4.63-.35-4.84-9.26-4.84-10.63s5.75-7.75 7.5-8.75a53.63 53.63 0 0 0 5.56-5.33 51.6 51.6 0 0 1 18.22-12.17s9.77 17.18 8.97 22.11z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M645.95 755.01a.59.59 0 0 1 0 .14c-1 4.75-17.5 11.25-17.5 11.25s-10.5 1.75-16.5 3.25a4.15 4.15 0 0 1-1.41.13c-4.63-.35-4.84-9.26-4.84-10.63s5.75-7.75 7.5-8.75a53 53 0 0 0 5.64-5.41 50.57 50.57 0 0 1 17.86-12l.28-.11s9.77 17.2 8.97 22.13z",
    opacity: 0.3
  }), React.createElement("path", {
    d: "M645.95 755.01a.59.59 0 0 1 0 .14c-1 4.75-17.5 11.25-17.5 11.25s-10.5 1.75-16.5 3.25a4.15 4.15 0 0 1-1.41.13c5.44-3.73 18.63-12.68 20.41-12.88s10.55-2.72 15-1.89zM715.41 362.29c-6.18 5.09-11.86 4.36-20.49 4.36-6.24 0-14.35 2.19-19.46-.62-.21-7.81-1-14.38-1-14.38s43.5-8.25 40.75 2a18.18 18.18 0 0 0 .2 8.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M728.43 333.69a35.75 35.75 0 0 1-35.75 35.75c-.92 0-1.84 0-2.74-.1a35.75 35.75 0 1 1 38.5-35.65z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M662.18 424.4l9.5 15-13.25 28.55-15.75 11.5-2.75-17.82s-5.32-11.75-7.61-13.74c.66-1.61 1.11-2.35 1.11-1.76 0 2.5 6.15 13.75 6.15 13.75 19-6.5 13.1-31.75 13.1-31.75s-2.36-22.5-3.28-28.42l3.28 1.42zM746.18 388.9v14l-14.5 4.73-24.7 18.18-6.55 4.82-29.25-11.75-18.5-19.5s.9-.49 2.46-1.3l1-.53c12.87 5.85 26.8 8 36.75 8.77a111 111 0 0 0 13.76.31c37.67-6 38.79-15.1 37.85-18.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M756.93 615.63a280.29 280.29 0 0 1-29 12.25c-17.25 6.25-55.25-2-60-3.25s-41.25-15.75-55.25-21.25-17.5-1-20.75-1.5-5.5-6.75-6-8.5 9-17 14.25-24.75 21-6.25 23.25-6.75 18 0 18 0-1-5 4.75-19-9.5-40-9.5-40c-10.5-6.75-8.75-27.75-8.75-27.75-2.5-9.25 5.5-30.5 5.5-28s6.15 13.75 6.15 13.75c19-6.5 13.1-31.75 13.1-31.75s-2.75-26.25-3.48-29.5 3.48-2.75 3.48-2.75q1.22.63 2.46 1.2c13.16 6.2 27.56 8.46 37.78 9.24a111 111 0 0 0 13.76.31c45.67-7.37 37.58-19.12 37.28-19.54l2.22.79c16.5 12 11.5 51.75 11.5 51.75l-6.18 29.67-4.59 22.1s16.25 98.5 17.75 103.5-7.73 19.73-7.73 19.73z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M635.18 570.63c-1 .75-12.25 24-4 30.5s4-30.5 4-30.5zM643.18 573.9c.25.75 23.5 37.75 36.25 40.75zM699.19 281.11l-3.72.79a25.07 25.07 0 0 1 3.14-.93zM755.21 440.63l-7 29.65a36.22 36.22 0 0 1-9.72-6.51c-2.23-2.12-4.23-4.55-7.1-5.94-3.69-1.79-8.14-1.55-12.33-1.7a59.32 59.32 0 0 1-15.42-2.64 10.88 10.88 0 0 1-4-1.94c-2.38-2.1-2.22-5.49-2-8.45a129.57 129.57 0 0 0 .15-17.29c-.06-1.08-.14-2.16-.23-3.24-.4-4.83-1.7-10.43-6.64-12.5-2.54-1-5.57-.92-8-2.13a6.61 6.61 0 0 1-1-.62c-3.6-2.52-3.93-7.57-3.79-11.82q.32-8.76.61-17.53a50.94 50.94 0 0 0-.19-8.65 19.21 19.21 0 0 0-1.56-5.52c-2.17-4.64-6.69-8.51-7.5-13.41a5.43 5.43 0 0 1-.09-.69c-.42-4.38 2.34-8.46 3.31-12.77 1.94-8.67-4.58-18.17-14.17-20.66-3-.78-6.22-.93-9.21-1.82a14.79 14.79 0 0 1-1.41-.5c7.24-9.66 19.65-16 33.74-16 22.33 0 40.44 16 40.44 35.75 0 11.2-5.83 21.19-14.94 27.75.06.28.13.57.21.85 2.35 9.09 9.64 18.61 9.64 18.61l22.64 7.2 2.52.8c18.7 11.99 13.04 51.72 13.04 51.72zM767.5 469.35c-.22 0-.43-.05-.64-.09a1.33 1.33 0 0 1 .64.09z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M690.18 280.12a86 86 0 0 0-19.08-2.23c-2.09 0-4.33.11-6 1.26-2.21 1.55-2.49 4.35-3.15 6.77a18.78 18.78 0 0 1-7.15 10c-2.37 1.73-5.16 3-7.43 4.82s-4 4.52-3.43 7.18 3.56 4.71 6.56 5.56 6.19 1 9.21 1.82c9.59 2.49 16.1 12 14.16 20.65-1 4.31-3.73 8.39-3.31 12.77.49 5.23 5.32 9.26 7.59 14.11 2.07 4.42 1.93 9.38 1.77 14.16l-.61 17.54c-.16 4.62.24 10.18 4.8 12.44 2.44 1.2 5.48 1.07 8 2.13 4.94 2.06 6.24 7.67 6.64 12.49a129.1 129.1 0 0 1 .08 20.53c-.23 3-.39 6.35 2 8.45a10.72 10.72 0 0 0 4 1.94 59.32 59.32 0 0 0 15.42 2.64c4.2.16 8.64-.08 12.33 1.7 2.87 1.39 4.87 3.83 7.1 5.94a39.24 39.24 0 0 0 23.18 10.15c1.85.16 3.95.12 5.24-1.07s.53-3.76-1.31-3.61a8.89 8.89 0 0 0 8.42-3.22 7.1 7.1 0 0 0 0-8.17c-2.09-3-6.53-5-6.77-8.56-.13-2 1.2-3.81 2.24-5.59a23.51 23.51 0 0 0-3.64-28c-4.69-4.85-11.72-8.53-13.36-14.75-1.09-4.16.56-8.53-.07-12.76-1-7-7.93-12-11.74-18.24s-4.48-13.79-3.51-20.89 3.43-14 5.43-20.9c1.49-5.15 2.72-10.62 1.06-15.73-1.19-3.63-3.75-6.78-6.41-9.75-6.37-7.11-13.7-13.77-22.76-18s-20.1-5.87-29.72-2.74",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M690.18 280.12a86 86 0 0 0-19.08-2.23c-2.09 0-4.33.11-6 1.26-2.21 1.55-2.49 4.35-3.15 6.77a18.78 18.78 0 0 1-7.15 10c-2.37 1.73-5.16 3-7.43 4.82s-4 4.52-3.43 7.18 3.56 4.71 6.56 5.56 6.19 1 9.21 1.82c9.59 2.49 16.1 12 14.16 20.65-1 4.31-3.73 8.39-3.31 12.77.49 5.23 5.32 9.26 7.59 14.11 2.07 4.42 1.93 9.38 1.77 14.16l-.61 17.54c-.16 4.62.24 10.18 4.8 12.44 2.44 1.2 5.48 1.07 8 2.13 4.94 2.06 6.24 7.67 6.64 12.49a129.1 129.1 0 0 1 .08 20.53c-.23 3-.39 6.35 2 8.45a10.72 10.72 0 0 0 4 1.94 59.32 59.32 0 0 0 15.42 2.64c4.2.16 8.64-.08 12.33 1.7 2.87 1.39 4.87 3.83 7.1 5.94a39.24 39.24 0 0 0 23.18 10.15c1.85.16 3.95.12 5.24-1.07s.53-3.76-1.31-3.61a8.89 8.89 0 0 0 8.42-3.22 7.1 7.1 0 0 0 0-8.17c-2.09-3-6.53-5-6.77-8.56-.13-2 1.2-3.81 2.24-5.59a23.51 23.51 0 0 0-3.64-28c-4.69-4.85-11.72-8.53-13.36-14.75-1.09-4.16.56-8.53-.07-12.76-1-7-7.93-12-11.74-18.24s-4.48-13.79-3.51-20.89 3.43-14 5.43-20.9c1.49-5.15 2.72-10.62 1.06-15.73-1.19-3.63-3.75-6.78-6.41-9.75-6.37-7.11-13.7-13.77-22.76-18s-20.1-5.87-29.72-2.74M636.68 502.9s8.5 3.25 17.5-5.75-17.5 5.75-17.5 5.75z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M693.94 279.97a35.56 35.56 0 0 1 5-.63 37.93 37.93 0 0 0-7 .22zM744.08 462.79c-2.24-2.11-4.23-4.55-7.11-5.94-3.68-1.78-8.13-1.54-12.33-1.7a59 59 0 0 1-15.42-2.64 10.72 10.72 0 0 1-4-1.94c-2.38-2.1-2.21-5.48-2-8.45a129.1 129.1 0 0 0-.08-20.53c-.41-4.82-1.7-10.43-6.65-12.49-2.53-1.06-5.56-.93-8-2.13-4.56-2.26-5-7.82-4.81-12.44q.31-8.77.61-17.53c.17-4.79.3-9.75-1.77-14.17-2.27-4.85-7.1-8.87-7.59-14.11-.41-4.37 2.35-8.46 3.32-12.77 1.94-8.67-4.58-18.16-14.17-20.65-3-.78-6.22-.94-9.21-1.82s-5.89-2.78-6.51-5.5 1.15-5.36 3.42-7.19 5.06-3.09 7.44-4.82a18.71 18.71 0 0 0 7.14-10c.67-2.42 1-5.21 3.15-6.77a8 8 0 0 1 4.1-1.2c-.89 0-1.78-.05-2.66-.05-2.09 0-4.33.11-6 1.25-2.21 1.56-2.49 4.35-3.15 6.77a18.78 18.78 0 0 1-7.15 10c-2.37 1.73-5.16 3-7.43 4.82s-4 4.52-3.43 7.19 3.53 4.61 6.52 5.5 6.19 1 9.21 1.82c9.59 2.49 16.1 12 14.16 20.65-1 4.31-3.73 8.4-3.31 12.77.49 5.24 5.32 9.26 7.59 14.11 2.07 4.42 1.94 9.38 1.77 14.17q-.31 8.76-.61 17.53c-.16 4.62.24 10.18 4.8 12.44 2.44 1.2 5.48 1.07 8 2.13 4.94 2.06 6.24 7.67 6.64 12.49a129.1 129.1 0 0 1 .08 20.53c-.23 3-.39 6.35 2 8.45a10.72 10.72 0 0 0 4 1.94 58.91 58.91 0 0 0 15.42 2.64c4.2.16 8.64-.08 12.33 1.7 2.87 1.39 4.87 3.83 7.11 5.94a39.18 39.18 0 0 0 23.17 10.15 10.71 10.71 0 0 0 3.35-.13 39.11 39.11 0 0 1-21.94-10.02z"
  })), React.createElement("path", {
    d: "M588.93 432.63s-8 7.34-6.83 10.34 6.83-10.34 6.83-10.34z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M596.35 526.98c-5.77-1.41-21.68-2.71-29.25 22.68a112.32 112.32 0 0 1-6.71 17.17c-7.26 14.91-16.64 45.57 24.61 52.32l99 22.5s53 6.5 56.5 4 3-8 3-8-58.5 0-70-18-12-42.5-12-42.5 1.44-37.83-59-48.82c-2-.38-4.1-.85-6.15-1.35z",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M596.35 527.15c-5.77-1.41-21.68-2.71-29.25 22.69a112.32 112.32 0 0 1-6.71 17.17c-7.26 14.9-16.64 45.56 24.61 52.31l99 22.5s53 6.5 56.5 4 3-8 3-8-58.5 0-70-18-12-42.5-12-42.5 1.44-37.83-59-48.82c-2-.38-4.1-.87-6.15-1.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M803.88 501.11a15.29 15.29 0 0 0-15.45-12.92c-14.24.26-58.07 2.16-78.43 15.46 0 0-15.5 10-20 10s-65.5 52 25 98.5c0 0 48.5 13.8 67.5-18.6 0 0 13.5-34.8 12.5-46.85s9-44.55 9-44.55-.02-.39-.12-1.04z",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M803.88 509.87c-1.14-7-7.8-12.06-15.45-11.93-14.24.24-58.07 2-78.43 14.27 0 0-15.5 9.23-20 9.23s-65.5 48 25 90.93c0 0 48.5 12.74 67.5-17.17 0 0 13.5-32.13 12.5-43.25s9-41.12 9-41.12-.02-.36-.12-.96z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#5f5d7e",
    d: "M739.5 612.14h16v34.07h-16z"
  }), React.createElement("ellipse", {
    cx: 170.24,
    cy: 470.71,
    rx: 45.04,
    ry: 2.89,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M208.04 359.25a17.18 17.18 0 0 0-2.28 4.29c-.14.38-.28.8-.42 1.21a3.69 3.69 0 0 0-.79-.27 11.34 11.34 0 0 0-3.57-.31c0-.46.06-1 .07-1.46.15-5.27-.47-12.62-5.5-9.51-4.82 3-1.38 8 1.73 11.21l.8.78c-2.84 2-3.38 6.73-3.85 11.64s-4.64 10.29-7.41 13.34c-.28.31-.53.59-.78.85a10.11 10.11 0 0 0-8.05-2.07c-.11-.43-.24-.88-.37-1.36-2.24-8.08-6.89-22.09-12.82-25.16l.78-1c2.52-3.3 5.36-8.19 1.17-9.45s-4.57 4.25-4.34 8.37c0 .52.08 1 .12 1.46a6.17 6.17 0 0 0-4.38 2.14l-.65-.76c-3.4-4-9.63-10.37-11.52-5.56-1.76 4.48 3.73 10.29 7.59 13.66l.24.21c-2.59 10.53 8.69 19.13 14.81 22.85l.79.48c-8.4 9.9-13.59 28.45-13.59 28.45l23.52 4.2s15.6-13.45 13.6-26.09h.16c15.59-3.12 19.13-19.74 16.7-29.61l.28-.11a17.74 17.74 0 0 0 7.22-5.46c4.36-6.07-4.8-12.91-9.26-6.96z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M208.04 359.25a17.18 17.18 0 0 0-2.28 4.29c-.14.38-.28.8-.42 1.21a3.69 3.69 0 0 0-.79-.27 11.34 11.34 0 0 0-3.57-.31c0-.46.06-1 .07-1.46.15-5.27-.47-12.62-5.5-9.51-4.82 3-1.38 8 1.73 11.21l.8.78c-2.84 2-3.38 6.73-3.85 11.64s-4.64 10.29-7.41 13.34c-.28.31-.53.59-.78.85a10.11 10.11 0 0 0-8.05-2.07c-.11-.43-.24-.88-.37-1.36-2.24-8.08-6.89-22.09-12.82-25.16l.78-1c2.52-3.3 5.36-8.19 1.17-9.45s-4.57 4.25-4.34 8.37c0 .52.08 1 .12 1.46a6.17 6.17 0 0 0-4.38 2.14l-.65-.76c-3.4-4-9.63-10.37-11.52-5.56-1.76 4.48 3.73 10.29 7.59 13.66l.24.21c-2.59 10.53 8.69 19.13 14.81 22.85l.79.48c-8.4 9.9-13.59 28.45-13.59 28.45l23.52 4.2s15.6-13.45 13.6-26.09h.16c15.59-3.12 19.13-19.74 16.7-29.61l.28-.11a17.74 17.74 0 0 0 7.22-5.46c4.36-6.07-4.8-12.91-9.26-6.96z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M161.22 366.03l-2.72 8.05s-1.53-1.08-3.46-2.78c-3.86-3.37-9.35-9.18-7.59-13.66 1.89-4.81 8.12 1.54 11.52 5.56 1.34 1.59 2.25 2.83 2.25 2.83zM167.02 361.44a38.89 38.89 0 0 1-2.68 3.15 42.22 42.22 0 0 1-.49-4.23c-.23-4.12.21-9.59 4.34-8.37s1.31 6.15-1.17 9.45zM202.5 362.71c-.08 2.65-.34 4.76-.34 4.76a34 34 0 0 1-3.43-3.06c-3.11-3.23-6.55-8.21-1.73-11.21 5.02-3.11 5.64 4.24 5.5 9.51zM218.74 366.18a17.74 17.74 0 0 1-7.24 5.45 20.18 20.18 0 0 1-2.42.87l-3.24-4.55a33.05 33.05 0 0 1 1.34-4.42 17.18 17.18 0 0 1 2.28-4.29c4.5-5.94 13.64.9 9.28 6.94z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M158.94 363.2a51.63 51.63 0 0 1 2.28 2.83l-2.72 8.05s-1.53-1.08-3.46-2.78a15.75 15.75 0 0 1 3.1-7.07c.24-.37.53-.72.8-1.03zM167.02 361.44a38.89 38.89 0 0 1-2.68 3.15 42.22 42.22 0 0 1-.49-4.23 5.46 5.46 0 0 1 3.17 1.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M180.5 393.4l-6.84 3s-1.49-.72-3.64-2.06c-7.19-4.43-21.64-15.56-11.95-28.68s17.77 10.42 20.95 21.92c1.01 3.45 1.48 5.82 1.48 5.82z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M198.72 364.41a5.57 5.57 0 0 1 3.77-1.7c-.08 2.65-.34 4.76-.34 4.76a34 34 0 0 1-3.43-3.06zM211.5 371.63a20.18 20.18 0 0 1-2.42.87l-3.24-4.55a33.05 33.05 0 0 1 1.34-4.42c2.11 1.24 3.65 4.27 4.32 8.1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M194.5 401.36l-1.15.2c-22.93 3.49-7.56-8.88-7.56-8.88s1-.95 2.43-2.51c2.77-3.05 6.93-8.4 7.41-13.34.72-7.43 1.55-14.4 10.32-12.35 8.65 2.01 10.3 32.53-11.45 36.88z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#474157",
    d: "M150.3 458.44h43.81v11.52H150.3z"
  }), React.createElement("path", {
    fill: "#474157",
    d: "M143.34 421h57.24v40.2h-57.24z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M149.88 458.44h43.81v11.52h-43.81z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M143.16 421.01h57.24v40.2h-57.24z"
  }), React.createElement("path", {
    fill: "#474157",
    d: "M153.18 458.44h43.81v11.52h-43.81z"
  }), React.createElement("path", {
    d: "M179.06 387.63c1 3.44 1.48 5.81 1.48 5.81l-6.84 3s-1.49-.72-3.64-2.06c2.68-3.43 5.7-6 9-6.75zM194.5 401.36l-1.15.2c-22.93 3.49-7.56-8.88-7.56-8.88s1-.95 2.43-2.51c4.28 3.46 6.09 7.29 6.28 11.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M157.26 423.28s12.84-46 30.85-31.8-7.33 36-7.33 36z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 163.74,
    cy: 372.87,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 163.62,
    cy: 379.6,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 205.39,
    cy: 374.19,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 171.78,
    cy: 408.64,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 202.39,
    cy: 385.36,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 187.51,
    cy: 400.24,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 168.66,
    cy: 375.75,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 201.43,
    cy: 378.52,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 196.51,
    cy: 389.68,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 181.38,
    cy: 407.56,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 178.26,
    cy: 400.48,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 170.82,
    cy: 384.52,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M153.18 458.44h43.81v4.21h-43.81z"
  }), React.createElement("path", {
    fill: "#474157",
    d: "M146.22 421h57.24v40.2h-57.24z"
  }), React.createElement("circle", {
    cx: 183.3,
    cy: 414.04,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 174.66,
    cy: 415.84,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M311.89 574.63s7.13 9.33-3.29 23.41-19 26-15.56 34.76c0 0 15.74-26.16 28.55-26.52s4.39-15.91-9.7-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M311.89 574.63a11.49 11.49 0 0 1 1.46 2.92c12.49 14.68 19.15 28.38 7.14 28.73-11.19.35-24.61 20.35-27.83 25.35.11.39.24.78.38 1.15 0 0 15.74-26.16 28.55-26.52s4.39-15.89-9.7-31.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M325.15 586.53c0 3.28-.37 5.94-.82 5.94s-.82-2.66-.82-5.94.46-1.74.91-1.74.73-1.55.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M329.7 590.45c-2.88 1.57-5.39 2.52-5.61 2.12s1.94-2 4.83-3.57 1.74-.43 2 0 1.67-.12-1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M274.2 574.63s-7.13 9.33 3.29 23.41 19 26 15.55 34.76c0 0-15.73-26.16-28.54-26.52s-4.39-15.91 9.7-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M274.2 574.63a11.49 11.49 0 0 0-1.46 2.92c-12.49 14.68-19.15 28.38-7.14 28.73 11.19.35 24.61 20.35 27.83 25.35a11.1 11.1 0 0 1-.39 1.15s-15.73-26.15-28.54-26.49-4.39-15.92 9.7-31.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M260.94 586.53c0 3.28.37 5.94.82 5.94s.82-2.66.82-5.94-.46-1.74-.91-1.74-.73-1.55-.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M256.39 590.45c2.88 1.57 5.39 2.52 5.61 2.12s-1.94-2-4.83-3.57-1.74-.43-2 0-1.67-.12 1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("ellipse", {
    cx: 293.04,
    cy: 692.74,
    rx: 74.6,
    ry: 11.45,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M331.44 620.24l-.36 2.91-.5 4.12-.2 1.71-.51 4.12-.21 1.72-.5 4.11-5.66 46.8c-.51 4.18-7.34 7.43-15.57 7.43h-29.72c-8.24 0-15-3.25-15.56-7.43l-5.72-46.8-.5-4.11-.21-1.72-.51-4.12-.2-1.71-.5-4.12-.36-2.91c-.29-2.36 3.4-4.36 8.07-4.36h60.66c4.65 0 8.35 2 8.06 4.36z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M331.08 623.15l-.5 4.11h-75.07l-.5-4.11h76.07zM330.38 628.98l-.5 4.12h-73.66l-.51-4.12h74.67zM329.66 634.81l-.5 4.12h-72.23l-.5-4.12h73.23z"
  }));
};

UndrawPressPlay.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPressPlay;