function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWireframing = _props => {
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
    viewBox: "0 0 1130 799.21",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 784.71,
    y1: 837.27,
    x2: 784.71,
    y2: 420.76,
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
    d: "M1108.14 197.65a231.37 231.37 0 0 0-44.83-60.38l-621.86-5.18 512-60.79a337.39 337.39 0 0 0-103.88-17.42C800.28 20.23 736.93 0 667.83 0c-62 0-119.33 16.29-166.07 43.93C462 26.6 416.74 16.81 368.65 16.81c-138.17 0-253.3 80.9-279.13 188.19zM1130 287.6a197 197 0 0 0-19.38-84.92L32.86 298.35a209.69 209.69 0 0 0-25.25 53.91l333.75 42.06L0 424.99c10.27 121.45 133.43 217.36 283.88 217.36 75.73 0 144.54-24.31 195.53-63.94C530.56 618.79 600 643.6 676.58 643.6c113.57 0 211.6-54.67 257.25-133.72 91.58-24.57 162.72-86.28 187.07-163.46L698.83 291.1H1130v-3.5z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M283.42 553.07s-46.22-66.69-38.37-129.63a122.94 122.94 0 0 0-14.8-76.34 206.71 206.71 0 0 0-21.74-30.94",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M213.22 276.47c3 9.05-4.71 40.74-4.71 40.74s-25.09-20.83-28.09-29.89a17.274 17.274 0 0 1 32.8-10.85zM256.92 317.66c-2.4 9.23-26.09 31.64-26.09 31.64s-9.74-31.12-7.33-40.35a17.27 17.27 0 1 1 33.42 8.71zM284.11 403.77c-6.74 6.76-38.5 14.14-38.5 14.14s7.31-31.78 14-38.53a17.271 17.271 0 0 1 24.46 24.39zM290 473.6c-5.5 7.79-35.56 20.44-35.56 20.44s1.83-32.56 7.33-40.35A17.272 17.272 0 0 1 290 473.6zM197 362.45c8.58 4.16 41 .68 41 .68s-17.36-27.6-26-31.77a17.27 17.27 0 0 0-15 31.09zM204.91 443.98c9.44 1.4 39.34-11.62 39.34-11.62s-24.83-21.15-34.25-22.55a17.273 17.273 0 1 0-5.08 34.17zM223.49 522.16c9.07 3 40.74-4.8 40.74-4.8s-20.9-25-30-28a17.273 17.273 0 1 0-10.78 32.82z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M213.22 276.47c3 9.05-4.71 40.74-4.71 40.74s-25.09-20.83-28.09-29.89a17.274 17.274 0 0 1 32.8-10.85zM256.92 317.66c-2.4 9.23-26.09 31.64-26.09 31.64s-9.74-31.12-7.33-40.35a17.27 17.27 0 1 1 33.42 8.71zM284.11 403.77c-6.74 6.76-38.5 14.14-38.5 14.14s7.31-31.78 14-38.53a17.271 17.271 0 0 1 24.46 24.39zM290 473.6c-5.5 7.79-35.56 20.44-35.56 20.44s1.83-32.56 7.33-40.35A17.272 17.272 0 0 1 290 473.6zM197 362.45c8.58 4.16 41 .68 41 .68s-17.36-27.6-26-31.77a17.27 17.27 0 0 0-15 31.09zM204.91 443.98c9.44 1.4 39.34-11.62 39.34-11.62s-24.83-21.15-34.25-22.55a17.273 17.273 0 1 0-5.08 34.17zM223.49 522.16c9.07 3 40.74-4.8 40.74-4.8s-20.9-25-30-28a17.273 17.273 0 1 0-10.78 32.82z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M283.16 550.39s-69.28-42.24-87.62-103a123 123 0 0 0-44.46-63.79 206.69 206.69 0 0 0-32.41-19.47",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M106.89 325.97c6.41 7.06 12.2 39.15 12.2 39.15s-31.37-8.88-37.78-15.94a17.27 17.27 0 1 1 25.58-23.21zM163.54 345.91c1.54 9.42-11 39.51-11 39.51s-21.54-24.51-23.09-33.93a17.272 17.272 0 0 1 34.09-5.58zM223.29 413.6c-3.43 8.91-29.47 28.53-29.47 28.53s-6.2-32-2.78-40.92a17.274 17.274 0 1 1 32.25 12.39zM257 475.03c-1.87 9.36-24.23 33.1-24.23 33.1s-11.52-30.51-9.65-39.86a17.274 17.274 0 1 1 33.88 6.76zM126.88 411.15c9.54.33 37.77-16 37.77-16s-27.05-18.2-36.59-18.55a17.27 17.27 0 0 0-1.18 34.52zM167.17 482.47c9.2-2.54 31.26-26.56 31.26-26.56s-31.27-9.31-40.43-6.73a17.27 17.27 0 1 0 9.2 33.29zM215.84 546.42c9.5-1 35.3-20.9 35.3-20.9s-29.25-14.42-38.74-13.47a17.27 17.27 0 0 0 3.44 34.37z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 565.71,
    cy: 734.08,
    rx: 179,
    ry: 10.62,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 746.87,
    cy: 781.25,
    rx: 46.86,
    ry: 8.53,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M648 715.41v6.41H458.38v-5.22a62.33 62.33 0 0 0 4.29-115.12h184.08A62.37 62.37 0 0 0 648 715.41z",
    fill: "#c8cad7"
  }), React.createElement("path", {
    d: "M646.75 601.49a62.43 62.43 0 0 0-34.46 41.33H497.13a62.43 62.43 0 0 0-34.46-41.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M241.21 568.82v36c0 19.88 14.55 36 32.5 36h558c17.95 0 32.5-16.12 32.5-36v-36z",
    fill: "#c8cad7"
  }), React.createElement("path", {
    d: "M648 715.41v6.41H458.38v-5.22a62.2 62.2 0 0 0 14.62-7.78h163.4a62.47 62.47 0 0 0 11.6 6.59z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 395.71,
    y: 710.82,
    width: 315,
    height: 19,
    rx: 9.5,
    ry: 9.5,
    fill: "#c8cad7"
  }), React.createElement("path", {
    d: "M864.21 174.32a32.5 32.5 0 0 0-32.5-32.5h-558a32.5 32.5 0 0 0-32.5 32.5v401.5h623z",
    fill: "#474157"
  }), React.createElement("rect", {
    x: 258.21,
    y: 172.82,
    width: 589,
    height: 377,
    rx: 16,
    ry: 16,
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 552.71,
    cy: 157.32,
    r: 7.5,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 552.71,
    cy: 606.32,
    r: 18.5,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M847.21 188.82h-589a16 16 0 0 1 16-16h557a16 16 0 0 1 16 16z",
    fill: "#c8cad7"
  }), React.createElement("circle", {
    cx: 274.21,
    cy: 180.82,
    r: 4,
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 286.21,
    cy: 180.82,
    r: 4,
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 298.21,
    cy: 180.82,
    r: 4,
    fill: "#ededf4"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M280.21 202.32h151v9h-151zM280.21 465.32h151v9h-151z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M280.21 485.32h280v9h-280zM280.21 498.33h280v9h-280zM280.21 511.33h280v9h-280zM280.21 226.32h278v151h-278zM283.21 391.32h65v60h-65zM493.21 391.32h65v60h-65zM386.71 391.32h65v60h-65zM617.55 270.24h191.33v140.83H617.55z"
  }), React.createElement("path", {
    fill: "#ededf4",
    d: "M637.71 298.82h151v9h-151zM637.71 317.49h151v9h-151zM637.71 336.16h151v9h-151zM637.71 354.82h151v9h-151zM637.71 373.49h151v9h-151z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M640.88 427.07h144.67v25.33H640.88zM633.15 511.47h97.01v16.99h-97.01z"
  }), React.createElement("ellipse", {
    cx: 258.43,
    cy: 775.37,
    rx: 28.6,
    ry: 2.9,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 843.87,
    cy: 733.9,
    rx: 17.14,
    ry: 1.74,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M268.42 727.6s-37.3 19.27-18 42c0 0 1.81 5 7.06 4.58 0 0-1.05-1.91 3-3.43a19.57 19.57 0 0 0 4-2.14 9.49 9.49 0 0 0 3.61-4.82s7.63-10.21 1.72-29.1c0 0 .76-5.34.09-6.2l-4.58 6.11s4.69 3.14 5.22 7.76c0 0-4.88-7.75-5.94-6.87-.21.18-2.25 3.4-2.25 3.4s8.12 5.51 8.73 12.66c0 0-4.58-10-9.52-11.45l-2.79 5.05s8.88 5.4 9.88 13.52c0 0-5.15-10.3-10.41-12.38l-2.08 5.33s8.55 5.44 9.34 12.2c0 0-7.15-11.3-9.73-11 0 0-1.61 5-1.4 6.55 0 0 6.05 4 6.16 8 0 0-5.58-7.05-6.44-6.58 0 0-.36 7.08 1.36 10.77 0 0-2.94-5.26-2.47-10.77a11.84 11.84 0 0 0-3.58 5.81s-1.61-3.9 3.69-7.48c0 0 .5-5.51 1.11-6.19 0 0-5.73 2.79-8.16 6.23 0 0 .89-5.12 8.66-7.66l2-5.4s-7.76 3.29-10.15 6.19c0 0 1.72-5.08 10.76-7.51l2.68-5s-6.9 2.32-10.26 5c0 0 2.61-4.36 11.09-6.37l2.18-3.11s-5 1.79-6.4 2.43-1.68.32-1.68.32a18.08 18.08 0 0 1 9-4.07s4.85-6.09 4.5-6.38z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 169.3,
    cy: 731.19,
    rx: 21.92,
    ry: 2.22,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M177 694.6s-28.58 14.76-13.82 32.16a5.49 5.49 0 0 0 5.41 3.51s-.8-1.46 2.27-2.63a15.52 15.52 0 0 0 3.08-1.64 7.31 7.31 0 0 0 2.77-3.7s5.84-7.82 1.31-22.29c0 0 .59-4.1.07-4.76l-3.47 4.77s3.59 2.41 4 5.94c0 0-3.74-5.93-4.55-5.26-.16.14-1.72 2.61-1.72 2.61s6.22 4.22 6.69 9.7c0 0-3.51-7.68-7.3-8.77l-2.13 3.86s6.79 4.14 7.56 10.36c0 0-3.95-7.89-8-9.48l-1.59 4.08s6.56 4.17 7.16 9.35c0 0-5.48-8.66-7.46-8.39 0 0-1.23 3.84-1.07 5 0 0 4.64 3.1 4.72 6.14 0 0-4.28-5.4-4.94-5 0 0-.27 5.42 1.05 8.25a16.49 16.49 0 0 1-1.9-8.25 9.12 9.12 0 0 0-2.74 4.41s-1.23-3 2.83-5.73c0 0 .38-4.22.85-4.74 0 0-4.39 2.14-6.25 4.77 0 0 .68-3.92 6.63-5.87l1.51-4.14s-5.95 2.52-7.79 4.75c0 0 1.32-3.9 8.25-5.76l2.06-3.81s-5.29 1.78-7.87 3.81c0 0 2-3.35 8.5-4.88l1.67-2.39s-3.83 1.37-4.9 1.87-1.29.24-1.29.24a13.88 13.88 0 0 1 6.88-3.12s3.74-4.77 3.52-4.97zM851.74 705.01s-22.35 11.59-10.81 25.15a4.29 4.29 0 0 0 4.23 2.74s-.63-1.14 1.78-2.06a11.56 11.56 0 0 0 2.41-1.28 5.72 5.72 0 0 0 2.16-2.89s4.57-6.12 1-17.43c0 0 .45-3.2.05-3.72l-2.71 3.72s2.81 1.89 3.13 4.66c0 0-2.93-4.65-3.56-4.12-.13.11-1.35 2-1.35 2s4.87 3.3 5.23 7.58c0 0-2.74-6-5.7-6.85l-1.6 3.09s5.31 3.23 5.91 8.1c0 0-3.08-6.17-6.24-7.42l-1.24 3.2s5.12 3.25 5.6 7.31c0 0-4.29-6.78-5.83-6.56a16.37 16.37 0 0 0-.84 3.92s3.62 2.42 3.69 4.8c0 0-3.35-4.22-3.86-3.94 0 0-.22 4.24.81 6.45a13 13 0 0 1-1.48-6.45 7.12 7.12 0 0 0-2.14 3.45s-1-2.34 2.21-4.48c0 0 .3-3.3.66-3.71 0 0-3.43 1.67-4.88 3.73 0 0 .53-3.07 5.18-4.59l1.18-3.23s-4.65 2-6.09 3.7c0 0 1-3 6.46-4.5l1.6-3a26.71 26.71 0 0 0-6.15 3s1.57-2.61 6.65-3.81l1.3-1.87s-3 1.08-3.83 1.46-1 .19-1 .19a10.82 10.82 0 0 1 5.38-2.44s2.89-3.7 2.69-3.9z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 936.04,
    cy: 795.71,
    rx: 41.75,
    ry: 3.49,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M969.47 685.6a17.44 17.44 0 0 0-2.28 4.3c-.14.37-.27.8-.41 1.21a4.46 4.46 0 0 0-.8-.28 11 11 0 0 0-3.56-.3c0-.47.05-.95.07-1.47.14-5.27-.48-12.62-5.51-9.5-4.82 3-1.38 8 1.73 11.2.27.28.54.54.8.79-2.83 2-3.38 6.73-3.85 11.64s-4.64 10.28-7.4 13.33l-.79.85a10.12 10.12 0 0 0-8-2.07c-.12-.43-.24-.88-.38-1.35-2.23-8.09-6.88-22.1-12.82-25.17.26-.31.52-.64.79-1 2.52-3.3 5.35-8.19 1.16-9.44s-4.56 4.24-4.33 8.36q0 .78.12 1.47a6.15 6.15 0 0 0-4.39 2.14l-.64-.77c-3.4-4-9.64-10.37-11.52-5.56-1.76 4.48 3.72 10.3 7.58 13.67l.25.21c-2.6 10.51 8.71 19.08 14.8 22.83l.79.48c-8.4 9.9-13.58 28.46-13.58 28.46l23.52 4.2s15.59-13.46 13.6-26.1h.16c15.58-3.12 19.13-19.74 16.7-29.61l.27-.11a17.65 17.65 0 0 0 7.22-5.46c4.32-6.08-4.77-12.95-9.3-6.95z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M969.47 685.6a17.44 17.44 0 0 0-2.28 4.3c-.14.37-.27.8-.41 1.21a4.46 4.46 0 0 0-.8-.28 11 11 0 0 0-3.56-.3c0-.47.05-.95.07-1.47.14-5.27-.48-12.62-5.51-9.5-4.82 3-1.38 8 1.73 11.2.27.28.54.54.8.79-2.83 2-3.38 6.73-3.85 11.64s-4.64 10.28-7.4 13.33l-.79.85a10.12 10.12 0 0 0-8-2.07c-.12-.43-.24-.88-.38-1.35-2.23-8.09-6.88-22.1-12.82-25.17.26-.31.52-.64.79-1 2.52-3.3 5.35-8.19 1.16-9.44s-4.56 4.24-4.33 8.36q0 .78.12 1.47a6.15 6.15 0 0 0-4.39 2.14l-.64-.77c-3.4-4-9.64-10.37-11.52-5.56-1.76 4.48 3.72 10.3 7.58 13.67l.25.21c-2.6 10.51 8.71 19.08 14.8 22.83l.79.48c-8.4 9.9-13.58 28.46-13.58 28.46l23.52 4.2s15.59-13.46 13.6-26.1h.16c15.58-3.12 19.13-19.74 16.7-29.61l.27-.11a17.65 17.65 0 0 0 7.22-5.46c4.32-6.08-4.77-12.95-9.3-6.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M922.65 692.36l-2.75 8s-1.53-1.08-3.46-2.78c-3.85-3.37-9.34-9.19-7.58-13.67 1.88-4.81 8.12 1.54 11.52 5.56 1.36 1.65 2.27 2.89 2.27 2.89zM928.46 687.76a40.53 40.53 0 0 1-2.68 3.16 39 39 0 0 1-.49-4.24c-.23-4.12.2-9.59 4.33-8.36s1.38 6.14-1.16 9.44zM963.93 689.03c-.09 2.65-.35 4.77-.35 4.77a34.92 34.92 0 0 1-3.43-3.07c-3.11-3.23-6.55-8.21-1.73-11.2 5.03-3.12 5.65 4.23 5.51 9.5zM980.17 692.5a17.69 17.69 0 0 1-7.21 5.46 22.49 22.49 0 0 1-2.42.88l-3.24-4.55a32.25 32.25 0 0 1 1.33-4.42 17.44 17.44 0 0 1 2.28-4.3c4.48-5.97 13.62.9 9.26 6.93z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M920.38 689.52c1.36 1.6 2.27 2.84 2.27 2.84l-2.75 8s-1.53-1.08-3.46-2.78a15.81 15.81 0 0 1 3.1-7.07 13.1 13.1 0 0 1 .84-.99zM928.46 687.76a40.53 40.53 0 0 1-2.68 3.16 39 39 0 0 1-.49-4.24 5.55 5.55 0 0 1 3.17 1.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M942 719.72l-6.84 3s-1.5-.72-3.65-2.06c-7.18-4.42-21.64-15.55-12-28.67s17.77 10.41 21 21.92c.95 3.45 1.49 5.81 1.49 5.81z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M960.15 690.73a5.6 5.6 0 0 1 3.78-1.7c-.09 2.65-.35 4.77-.35 4.77a34.92 34.92 0 0 1-3.43-3.07zM973 697.96a22.49 22.49 0 0 1-2.42.88l-3.24-4.55a32.25 32.25 0 0 1 1.33-4.42c2.05 1.22 3.59 4.26 4.33 8.09z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M956 727.68c-.38.08-.77.15-1.16.2-22.92 3.49-7.56-8.88-7.56-8.88s1-.95 2.44-2.51c2.76-3 6.92-8.39 7.4-13.33.72-7.43 1.55-14.4 10.32-12.36s10.24 32.53-11.44 36.88z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#d4dfec",
    d: "M911.74 784.77h43.81v11.52h-43.81z"
  }), React.createElement("path", {
    fill: "#d4dfec",
    d: "M904.77 747.33h57.24v40.2h-57.24z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M911.74 784.77h43.81v11.52h-43.81z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M904.77 747.33h57.24v40.2h-57.24z"
  }), React.createElement("path", {
    fill: "#d4dfec",
    d: "M914.62 784.77h43.81v11.52h-43.81z"
  }), React.createElement("path", {
    d: "M940.49 713.92c1 3.44 1.49 5.8 1.49 5.8l-6.84 3s-1.5-.72-3.65-2.06c2.68-3.39 5.71-5.95 9-6.74zM956 727.68c-.38.08-.77.15-1.16.2-22.92 3.49-7.56-8.88-7.56-8.88s1-.95 2.44-2.51c4.28 3.43 6.03 7.29 6.28 11.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M918.7 749.6s12.84-46 30.84-31.81-7.32 36-7.32 36z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 925.18,
    cy: 699.21,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 925.06,
    cy: 705.93,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 966.82,
    cy: 700.53,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 933.22,
    cy: 734.97,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 963.82,
    cy: 711.69,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 948.94,
    cy: 726.57,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 930.1,
    cy: 702.09,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 962.86,
    cy: 704.85,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 957.94,
    cy: 716.01,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 942.82,
    cy: 733.89,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 939.7,
    cy: 726.81,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 932.26,
    cy: 710.85,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M914.62 784.77h43.81v4.21h-43.81z"
  }), React.createElement("path", {
    fill: "#d4dfec",
    d: "M907.66 747.33h57.24v40.2h-57.24z"
  }), React.createElement("circle", {
    cx: 944.74,
    cy: 740.37,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 936.1,
    cy: 742.17,
    r: 1.44,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M872.28 624.13c-1.2-.86-1.7-2.93-1.88-5 0-.47-.07-.93-.09-1.37a5 5 0 0 0 1.39-1.26c2.37-3.36-3.29-15.55-3.29-15.55s2.19-6.36 0-11.84-3.19-6.54-3.19-6.54-7.4-15.2-6.3-17-1.83-16-4-18.85a41.54 41.54 0 0 0-2.92-3.54s.37-6.18-2.74-11-6.57-18.2-6.57-18.2-3.83-12.55-6.57-17a19 19 0 0 0-4-4.11c.43-2 1.42-4.65-1.42-20.33-1.16-6.44.65-10.28 2.14-16.65s1.17-13.74-3.4-18.55-11.66-5.71-17.33-9c-5-2.89-9.45-7.78-15.29-7.69-4.29.07-4.28.74-8.23 2.35-6.83 2.78-14.51 1.94-21.45 4.24-6.24 2.07-14.17 8.87-12.28 16.08a7.9 7.9 0 0 0 2.3 4.28c1.35 1.23 3 1.24 4.85.87 0 .12 0 .23-.07.35a18.47 18.47 0 0 0-.24 3c0 10.69 8.91 19.37 19.93 19.44.06.23.11.47.17.71.15.64.29 1.28.43 1.94-.52.69-1.06 1.38-1.57 2.07a20.08 20.08 0 0 0-3 5.33c-5.78 1.18-15.47 3.09-17 5.59-2 3.36-10.22 20-9.31 27.57.05.42.09 1 .13 1.6 0 0-5.06 9-5.79 11.83s-2.37 13.43-5.48 15.9-9.49 10.43-8.58 12-8.58 3.53-8.58 3.53-6.38 2.47-6 4.42c.11.59-.34 1.15-1 1.69-7.26-2.39-16.51-4-23.68-.36-10 5.07 7.54 8.56 18 10.09 1.72.26 3.24.46 4.42.6.08.34.41.64 1.25.93.66.23 1.64.59 2.78 1l.42-1.3c3.47 1.23 12.94 5.06 12.94 5.06s8.22 1.34 10.59-3.43c1-1.93 3.73-5 6.7-8l-.33 1.07-6.92 22.83s-10.95 17-10.4 20.67-3.47 13.08-4.38 14-10 27.74-14.79 29.51-11.14 7.95-9 9.9 11 8.3 15 6.18 11 1.77 11 1.77 7.66-1.26 13.9 1.74c.07.69.15 1.44.23 2.23.65 6 1.71 14.29 2.84 16.7 1.83 3.89 3.47 10.78 2 13.43s1.28 53.19 4 61.85c2.14 6.78 5.07 17.69 4.57 24.81-.3 4.33-.48 8.66-.51 13v.72c0 .24-.17.38-.25.58v.39a35.91 35.91 0 0 0-1.59 4.61s-4.71 11.84-3.12 14.93a2.77 2.77 0 0 0 .75.87c2.27 1.82 8 2.21 10 2.29l-.09 3h2.69s.07-3 .25-6.74a18.4 18.4 0 0 0 1.16-6.58 26.91 26.91 0 0 1 2.4-11.37s.06-.31.12-.81a20.08 20.08 0 0 0 .17-3.11 11 11 0 0 0-1-5.29 11.91 11.91 0 0 1 .2-3.23c.73-2.65-1.1-21.2-1.1-21.2l3.1-34.11s1.83-26.33 1.1-33.22a21.9 21.9 0 0 1 .13-5.54 178.82 178.82 0 0 0 2-22.62v-2.12c6.64 2.28 17.9.41 17.9.41s2.62-.06 6.1 0c.09.72.19 1.43.29 2.12.53 3.71 1.16 7 1.81 8.41 1.82 3.89 3.47 10.78 2 13.43s1.27 53.19 4 61.85c2.15 6.78 5.08 17.68 4.58 24.81-.3 4.32-.48 8.65-.51 13v.8c-.09.19-.18.38-.26.58s0 .27 0 .39a36.45 36.45 0 0 0-1.51 4.63s-4.72 11.85-3.12 14.94a2.63 2.63 0 0 0 .75.86c2.27 1.83 8 2.21 10 2.29l-.09 3h2.69s.07-3 .25-6.74a18.4 18.4 0 0 0 1.16-6.58A27 27 0 0 1 822 808a20.75 20.75 0 0 0 .29-3.9 10.94 10.94 0 0 0-1.05-5.32 12.29 12.29 0 0 1 .2-3.22c.73-2.65-1.09-21.21-1.09-21.21l3.1-34.1s1.83-26.33 1.09-33.22a22.33 22.33 0 0 1 .14-5.54 178.27 178.27 0 0 0 2-21.49v-2.15c.66-.81 2-1.45 5.7-2.69 6.39-2.12 19.17-12.73 24.28-13.43s9.67-4.07 8.21-6.72-9.49-4.42-8.76-8.48-4.93-6.54-7.48-13.25-13.7-12-13.88-17S824.23 596 824.23 596s-10.39-17.28-12.69-27.84c0-.24-.09-.46-.13-.68h.13a19.12 19.12 0 0 1-.38-2.4c0-.23.05-.47.09-.68h-.14v-.38-.07a1.64 1.64 0 0 1 .22-.14l.6-.35-.2.08a19.8 19.8 0 0 0 3.31-2.7 14.7 14.7 0 0 0 3.81-5.32 27 27 0 0 0 1.49-7l1.3-2c1.26 5.27 3.1 12.83 3.68 14.52A147.33 147.33 0 0 1 831.9 583a74.59 74.59 0 0 0 8 20.68s9.31 12.19 16.43 12.72 3.11 2.47 4.2 2.83l.31.07.11 1.43.31 4.15s7.3 29.69 15.52 25.45-1.78-24.26-4.5-26.2z",
    transform: "translate(-35 -50.4)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M838.24 600.06c-7.9 4.22-14.92-25.26-14.92-25.26l-.3-4.13-.57-7.81 9.65 1.23a29.46 29.46 0 0 0 0 5.07c.17 2 .66 4.09 1.81 4.93 2.57 1.94 12.22 21.76 4.33 25.97zM719.21 772.2l.67-.51a3.6 3.6 0 0 1-.67.51zM739.1 610.24v22.75a184 184 0 0 1-2 22.47 22.45 22.45 0 0 0-.13 5.49c.7 6.85-1 33-1 33l-3 33.87s1.75 18.42 1 21a12.74 12.74 0 0 0-.19 3.21c.1 3 .62 6.85.79 8v.35l-.11.08-14.67 11.19c2.34-2.13 2.94-7.09 2.93-11.69v-1.5q0-6.45.5-12.9c.48-7.07-2.34-17.9-4.4-24.64-2.63-8.59-5.27-58.78-3.86-61.41s-.18-9.48-1.93-13.34c-1.03-2.35-2.03-10.57-2.63-16.57-.38-3.64-.61-6.4-.61-6.4zM770.26 767.7l.72-.54a4.23 4.23 0 0 1-.72.54zM790.15 605.74v23.87a184.06 184.06 0 0 1-1.93 21.35 22.44 22.44 0 0 0-.13 5.49c.7 6.85-1 33-1 33l-3 33.87s1.76 18.42 1.06 21a12.24 12.24 0 0 0-.19 3.2c.1 3 .63 6.91.79 8 0 .22.05.33.05.33l-.11.08L771 767.12c2.27-2.18 2.86-7.08 2.85-11.62v-1.51c0-4.3.2-8.6.49-12.9.47-7.07-2.34-17.89-4.4-24.63-2.64-8.59-5.27-58.78-3.86-61.41s-.18-9.48-1.93-13.34c-.63-1.36-1.23-4.67-1.75-8.35-.93-6.68-1.59-14.63-1.59-14.63z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M762.75 414.77l-.15.23a19.26 19.26 0 0 1-13.35 8 16.56 16.56 0 0 1-2.35.16c-.06-.24-.11-.48-.17-.71-1.15-5-2.37-9-2.37-9s1.31-1.89 3.22-4.3c5.19-6.56 14.75-16.93 14-3.07a23.77 23.77 0 0 0 1 8.31c.07.07.11.21.17.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M766.18 403.1a19.29 19.29 0 0 1-16.93 19.15 18.66 18.66 0 0 1-2.38.15h-.14a19.3 19.3 0 1 1 19.45-19.3z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M784.9 459.34l-18.72 16s-20.41-29.12-18-35.09c.77-1.87.68-5.19.19-8.89-.27-2-.66-4.21-1.1-6.29-.13-.65-.27-1.29-.41-1.92-.06-.24-.11-.48-.17-.71-1.15-5-2.37-9-2.37-9s1.31-1.89 3.22-4.3c5.19-6.56 14.75-16.93 14-3.07a23.77 23.77 0 0 0 1 8.31c0 .16.09.32.15.47 2.66 8.18 9.14 14.71 14.12 18.76a55.84 55.84 0 0 0 6.45 4.58z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M709.79 623.23l29.31-13v22.75a10.09 10.09 0 0 1-1.9-.89c-5.79-3.58-13-.8-13.51-.8s-6.32 2.46-12.46-1.23c-.27-.16-.54-.31-.8-.44-.43-3.63-.64-6.39-.64-6.39zM790.15 605.74v23.87a10.7 10.7 0 0 0-1 2.21c-1.06 2.46-8.25 3.34-14.57 2.3a90.21 90.21 0 0 0-12.11-.76c-.93-6.68-1.59-14.63-1.59-14.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M818.94 611.47c-4.92.7-17.2 11.23-23.34 13.34s-5.44 2.45-6.49 4.91-8.25 3.33-14.57 2.29-18.25-.71-18.25-.71-13.29 2.3-19.12-1.31-13-.8-13.51-.8-6.32 2.46-12.46-1.23-14.39-2.28-14.39-2.28-6.67-3.86-10.53-1.75-12.28-4.21-14.39-6.14 4-8.07 8.6-9.83 13.34-28.43 14.21-29.3 4.74-10.18 4.21-13.86 10-20.54 10-20.54l6.66-22.66 2-7 .08-4.17c0-1.88.09-4.29.14-7 .18-11.2.37-27.81 0-35.32-.06-1.16-.12-2.1-.2-2.78-.88-7.54 7-24 8.95-27.37 1.44-2.49 10.76-4.38 16.31-5.55a35.69 35.69 0 0 0 3.92-.94 4.58 4.58 0 0 1 1.54-.12c5.24.21 20.69 3.45 20.69 3.45-1.4 42.29 1.41 34.92 1.41 34.92 4.56-3.51 1.75-34.57 1.75-34.57 2.28 1.05 4.61-1.59 4.61-1.59l8.9 3.69a88.06 88.06 0 0 1 7.85 5.31 23.66 23.66 0 0 1 5.49 5.4c2.63 4.39 6.32 16.85 6.32 16.85l-3.16 5c-2.76 4.43-7 11.24-11.35 18.14l-7.72 12.29c-3.45 5.48-6.26 9.93-7.43 11.74a4.37 4.37 0 0 0-.55 1.41 7.35 7.35 0 0 0-.13 1 15.73 15.73 0 0 0 .41 4.16c2.21 10.48 12.2 27.65 12.2 27.65s10 15.26 10.18 20.17 10.88 10.18 13.34 16.85 7.89 9.12 7.19 13.16 7 5.79 8.42 8.42-2.88 5.97-7.79 6.67z",
    fill: "#fa595f"
  }), React.createElement("path", {
    d: "M832.08 569.16c-2.71 1.83-7.48 1.76-9.06 1.51l-.57-7.81 9.65 1.23a29.46 29.46 0 0 0-.02 5.07z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M798.23 459.69l7.2 5.09s3.33 13.33 6.31 18.07 2.63 10.88 2.63 10.88a38 38 0 0 1 2.81 3.51c2.11 2.81 4.91 16.9 3.86 18.72s6.06 16.9 6.06 16.9 1 1 3.07 6.49 0 11.76 0 11.76 5.44 12.11 3.16 15.44-9.66 3-10.71 2.63 2.81-2.28-4-2.81-15.8-12.63-15.8-12.63a75.44 75.44 0 0 1-7.72-20.53 151.12 151.12 0 0 0-6.31-21.76c-.88-2.63-4.74-19.65-4.74-19.65z",
    fill: "#fa595f"
  }), React.createElement("path", {
    d: "M744.36 459.69s-.53 40.71-5.44 48.78zM772.79 474.08s-4.56 40.71-8.16 42.81 8.16-42.81 8.16-42.81zM766.18 468.29s-1.11 38.39-6.9 42.18 6.9-42.18 6.9-42.18zM715.76 540.93s-7.26 21.23-6.44 30 6.44-30 6.44-30z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M775.5 519.95c-9.5 2.13-35.2 5.95-57.8-8.11 0-1.88.09-4.29.14-7 8.58 4.72 32.68 17 44.95 13.56 6.12-1.75 10-2.86 12.43-3.58a13.22 13.22 0 0 0 .28 5.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M775.5 517.85c-9.5 2.12-35.2 5.94-57.8-8.11 0-1.88.09-4.3.14-7 8.58 4.72 32.68 17 44.95 13.56 6.12-1.74 10-2.86 12.43-3.57a13.23 13.23 0 0 0 .28 5.12z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M775.5 518.6c-9.5 2.12-35.2 5.94-57.8-8.11 0-1.88.09-4.29.14-7 8.58 4.72 32.68 17 44.95 13.56 6.12-1.74 10-2.86 12.43-3.57a13.23 13.23 0 0 0 .28 5.12z",
    fill: "#605d82"
  }), React.createElement("path", {
    d: "M775.5 518.6c-9.5 2.12-35.2 5.94-57.8-8.11 0-1.88.09-4.29.14-7 8.58 4.72 32.68 17 44.95 13.56 6.12-1.74 10-2.86 12.43-3.57a13.23 13.23 0 0 0 .28 5.12zM734.61 760.07c0 .23-.05.38-.06.43l-14.67 11.19c2.34-2.13 2.94-7.09 2.93-11.69v-1.5a29.61 29.61 0 0 1 5.42-8.66c2.5-.65 4.07 0 5 1.13v.32a4.6 4.6 0 0 1 .52.78c1.47 2.53 1.05 6.66.86 8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M733.47 754.39l-11.07 7.6s.07-.89.17-2.2a30.3 30.3 0 0 1 5.67-9.25c2.5-.64 4.07 0 5 1.13.09 1.64.23 2.72.23 2.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M734.54 761.22a27.6 27.6 0 0 0-2.3 11.3 17.44 17.44 0 0 1-2.35 9.11 7.82 7.82 0 0 1-.77 1.11s-7.69-.06-10.38-2.29a2.63 2.63 0 0 1-.74-.85c-1.54-3.07 3-14.83 3-14.83 2.38-9.07 7.22-13.91 7.22-13.91 8.63-2.26 6.32 10.36 6.32 10.36z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M729.89 781.6a7.82 7.82 0 0 1-.77 1.11s-7.69-.06-10.38-2.29c1.32-4.38 5.55-17.63 7.52-15.38s3.16 12.33 3.63 16.56z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M728.83 765.89l-.53 19.86h2.58s.41-17.42 1.57-19.86-3.62 0-3.62 0z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M785.66 755.6l-.06.41-14.6 11.11c2.27-2.18 2.86-7.08 2.85-11.62v-1.51a29.57 29.57 0 0 1 5.41-8.65c2.5-.65 4.08 0 5.05 1.12v.33a4.16 4.16 0 0 1 .52.77c1.45 2.57 1.02 6.71.83 8.04z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M784.52 749.88l-11.07 7.61s.07-.89.18-2.2a30 30 0 0 1 5.66-9.25c2.5-.64 4.07-.05 5.05 1.13.04 1.64.18 2.71.18 2.71z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M785.6 756.72a27.44 27.44 0 0 0-2.31 11.3 17.44 17.44 0 0 1-2.35 9.11 8.68 8.68 0 0 1-.77 1.11s-7.69-.06-10.38-2.29a2.76 2.76 0 0 1-.72-.86c-1.53-3.07 3-14.83 3-14.83 2.38-9.07 7.22-13.91 7.22-13.91 8.61-2.23 6.31 10.37 6.31 10.37z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M780.94 777.13a8.68 8.68 0 0 1-.77 1.11s-7.69-.06-10.38-2.29c1.32-4.38 5.55-17.64 7.52-15.39s3.16 12.31 3.63 16.57z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M779.89 761.39l-.54 19.85h2.58s.41-17.41 1.57-19.85-3.61 0-3.61 0z",
    fill: "#5a5773"
  }), React.createElement("path", {
    d: "M802.88 475.31c-.12 5-2.85 10.33-7.64 11.82-1.4.43-2.89.53-4.32.82a9.25 9.25 0 0 0-2 .61c-3.07 1.41-4.6 4.91-5.22 8.23-.22 1.14-.36 2.29-.5 3.45a24.79 24.79 0 0 1-1.37 6.47 16.38 16.38 0 0 1-6.74 7.68 43.4 43.4 0 0 1-11.19 4.68 25.15 25.15 0 0 0 3-20.9c-.64-2.05-2-4.34-4.17-4.28-1.69.05-2.9 1.55-4.16 2.69-6.2 5.58-15.9 3.09-23.75.28 14-14.23 17.89-37.34 9.45-55.39a18.28 18.28 0 0 1-1.72-4.47 9.32 9.32 0 0 1 .43-4.62 20.48 20.48 0 0 1 2.84-5.29c.49-.69 1-1.37 1.52-2.06.67-.91 1.34-1.83 1.94-2.78a15.29 15.29 0 0 0 2-4.33c.89-3.4-.36-7.7-3.65-8.86l-.18-.07c-3.64-1.14-4.77-1.48-7.25-4.4-1.66-1.94-2.6-5-5.44-5.57-2.18-.45-4.62.52-6.91 1.11a19.31 19.31 0 1 1 34.8 14.17c2.56 8.4 9.19 15.1 14.27 19.23l8.9 3.69a88.06 88.06 0 0 1 7.85 5.31 114.82 114.82 0 0 0 5.66 18.29 64.45 64.45 0 0 1 3 9 22.15 22.15 0 0 1 .55 5.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M748.1 408.29c3.42 1.07 4.74 5.47 3.83 8.93s-3.36 6.26-5.43 9.17-3.91 6.39-3.28 9.91a18.28 18.28 0 0 0 1.72 4.47c8.44 18.05 4.5 41.15-9.45 55.39 7.85 2.81 17.56 5.3 23.75-.28 1.26-1.14 2.47-2.64 4.16-2.69 2.15-.07 3.54 2.23 4.17 4.28a25.13 25.13 0 0 1-3 20.89c7.23-2.1 15.17-5.35 17.94-12.35 1.24-3.13 1.24-6.61 1.86-9.93s2.15-6.81 5.22-8.22c2-.9 4.25-.79 6.32-1.43 4.79-1.49 7.52-6.81 7.64-11.82s-1.8-9.82-3.6-14.49c-10-26-.6-5.17-6.08-36.46-1.12-6.39.63-10.21 2.06-16.53s1.12-13.64-3.27-18.42-11.21-5.67-16.66-8.91c-4.83-2.88-9.08-7.73-14.7-7.64-4.12.06-4.11.73-7.91 2.33-6.57 2.76-13.94 1.93-20.62 4.21-6 2.06-13.62 8.8-11.8 16 2.45 9.69 9.17 2.56 14.41 3.65 2.84.6 3.78 3.62 5.44 5.57 2.52 2.88 3.64 3.23 7.28 4.37z",
    fill: "#4a4347"
  }), React.createElement("path", {
    d: "M685 526.49s-2.84-.3-6.66-.89c-10-1.52-26.91-5-17.29-10 8.83-4.62 21-.7 28.12 2.44a62.28 62.28 0 0 1 5.92 3z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M738.22 465.48s-4.56 23-6.84 28.07-6 18.43-6 18.43-5.39 4.88-9.84 9.62l2-7 .08-4.17c0-1.88.09-4.29.14-7 .18-11.2.37-27.81 0-35.32.39-.73.64-1.18.64-1.18l3.55-5.63s5.79-15.44 9.12-19.83 7.15 24.01 7.15 24.01zM687.79 523.44s-.51 2-1.37 4.7c-1.09-.44-2-.79-2.67-1-3-1 .53-2.28-.35-4.91-.75-2.26-2.14-1.55-3.74-2.18a43.71 43.71 0 0 1 3.39-4.07z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M721.37 461.27l-3.55 5.63s-4.82 8.93-5.57 11.7-2.25 13.37-5.25 15.83-9.13 10.35-8.25 11.93-8.25 3.51-8.25 3.51-6.14 2.46-5.79 4.39-5.09 3.51-3.16 4.91 3.69 0 4.57 2.63-2.64 3.87.35 4.92 12.81 5.16 12.81 5.16 7.89 1.33 10.17-3.41 15.27-16.49 15.27-16.49 3.68-13.34 6-18.43 6.85-28.07 6.85-28.07-3.69-28.43-7-24-9.2 19.79-9.2 19.79z",
    fill: "#fa595f"
  }), React.createElement("path", {
    d: "M711.37 506.54s-17.37 2.28-8.07 6.14 12.46 0 12.46 0zM689.79 516.89s10.18-2.1 12.81 0-12.81 0-12.81 0zM688.74 522.16s.7-1.76 4.21 0-4.21 0-4.21 0zM803.58 538.92s1.06 16 5.37 16.52-5.37-16.52-5.37-16.52zM812.8 502.7s.73 4.89-3.85 5.77 3.85-5.77 3.85-5.77zM760.85 550.29s-.23 49.37 9.83 55.45zM774.18 552.4s-.18 49.36 9.82 55.45zM720.72 659.29a37 37 0 0 1 6.85 0c3.81.31-6.85 0-6.85 0zM720.72 662.74a37 37 0 0 1 6.85 0c3.81.35-6.85 0-6.85 0zM772.77 655.24a37 37 0 0 1 6.85 0c3.81.36-6.85 0-6.85 0zM773.94 658a37 37 0 0 1 6.85 0c3.8.35-6.85 0-6.85 0z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M739.18 494.43c14-14.23 17.89-37.33 9.45-55.39a18.28 18.28 0 0 1-1.72-4.47c-.63-3.52 1.2-7 3.28-9.91s4.53-5.71 5.43-9.17-.41-7.86-3.83-8.92c-3.64-1.14-4.77-1.49-7.25-4.41-1.66-1.94-2.6-5-5.44-5.56-5.24-1.09-12 6-14.41-3.66-1.38-5.42 2.65-10.6 7.3-13.69-5.81 2.41-12.53 8.81-10.81 15.58 2.45 9.69 9.17 2.57 14.41 3.66 2.84.59 3.78 3.62 5.44 5.56 2.49 2.92 3.61 3.27 7.25 4.41 3.42 1.06 4.74 5.46 3.83 8.92s-3.36 6.26-5.43 9.17-3.91 6.39-3.28 9.92a18.37 18.37 0 0 0 1.72 4.46c8.44 18.06 4.5 41.16-9.45 55.39 7.56 2.71 16.83 5.11 23 .31-5.85 2.06-13.25.03-19.49-2.2zM793.31 486.14a6.89 6.89 0 0 0-2 1.38c1.58-.39 3.25-.44 4.8-.93a9 9 0 0 0 3.26-1.82c-1.99.56-4.17.5-6.06 1.37zM775.89 513.89a55.34 55.34 0 0 1-7.6 2.75 25.13 25.13 0 0 0 3-20.89c-.63-2-2-4.35-4.17-4.29a5.33 5.33 0 0 0-3.32 1.9c2 .07 3.37 2.29 4 4.28a25.13 25.13 0 0 1-3 20.89 43.92 43.92 0 0 0 11.09-4.64z"
  })));
};

UndrawWireframing.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWireframing;