function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawRelaxingAtHome = _props => {
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
    viewBox: "0 0 1083.15 826.31",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 454.31,
    y1: 591.8,
    x2: 454.31,
    y2: 311.53,
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
    d: "M977.25 568.9c-6.41 15.45-14.82 30.26-26.59 41.62-14.34 13.84-32.15 21.39-51.22 25a154.27 154.27 0 0 1-17 2.2c-15.07 1.16-30.5.39-45.3-1.22a535.59 535.59 0 0 1-106.7-22.83q-8.55-2.76-17-5.81-12.75-4.58-25.27-9.81c-34-14.21-69.15-32.33-105.32-26.71-17.53 2.73-34 11-51.57 13.46a92.21 92.21 0 0 1-36.84-2.64 126.59 126.59 0 0 1-17-5.87 193.44 193.44 0 0 1-35.32-19.95c-26.5-18.52-50.28-41.48-78.18-57.52-30.76-17.69-64.81-26.1-99.5-32.37q-8.47-1.53-17-2.92c-16.05-2.65-32.14-5.1-48-8-15.28-2.82-30.83-6.27-44.13-14.75-9.49-6.05-17.47-14.43-24.79-23.26A277.49 277.49 0 0 1 96 364.3q-.75-1.5-1.47-3c-14.69-30.14-24.57-63-30.63-97-.18-1-.35-2-.52-3-5.7-33.33-7.78-67.79-7.15-102l.06-3c.39-16.89 1.44-33.71 3-50.29 1.12-11.66 2.62-23.76 8.66-33.56s15.87-16.1 25.71-21.34c43.3-23.07 84.81-29.49 131.39-18.31 7.48 1.79 14.93 3.72 22.38 5.72 5.67 1.52 11.34 3.09 17 4.67 39.14 10.89 78.14 22.5 118.62 25.97q5.86.51 11.73.78 11.61.54 23.22.24a401.19 401.19 0 0 0 59.44-6.12q8.52-1.47 17-3.26c24.4-5.09 48.58-11.88 72.37-19.39q7.29-2.3 14.56-4.68c10.92-3.57 21.84-7.21 32.78-10.75 32.66-10.58 65.52-20.25 99.29-24.15q4.33-.49 8.68-.87c2.77-.24 5.55-.43 8.32-.57 52.45-2.8 105.5 9.85 152 35.74q8.65 4.82 17 10.24 11.57 7.53 22.43 16.2c14.84 11.85 28.73 25.34 39.31 41.55 10.31 15.79 17 33.52 20.85 52.16.21 1 .41 2 .59 3 5.65 30.09 3.89 62.36-2.45 92.51-.67 3.16-1.38 6.33-2.12 9.49-.23 1-.47 2-.71 3-6.84 28.51-15.58 56.94-13.3 86.09.29 3.67.75 7.31 1.35 10.91.17 1 .34 2 .53 3 4.46 23.78 14.6 46.34 20.68 69.89a215.32 215.32 0 0 1-9.35 134.73z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M899.44 159.28h83.18c-.18-1-.38-2-.59-3h-82.59V46.37q-8.34-5.42-17-10.24v120.15h-152V.39c-2.77.14-5.55.33-8.32.57s-5.79.54-8.68.87v154.45h-217l-.52-.57L614.15 25.98c-10.94 3.54-21.86 7.18-32.78 10.75l-86.93 95.43V60.8q-8.49 1.78-17 3.26v71.35L418 70.16q-11.61.28-23.22-.24l78.16 85.77-.52.57h-208V43.16c-5.66-1.58-11.33-3.15-17-4.67v117.79H56.27l-.06 3h191.23v102H63.36c.17 1 .34 2 .52 3h183.56v97H94.51q.72 1.5 1.47 3h151.46v99.26q8.52 1.39 17 2.92V364.28h213v212a126.59 126.59 0 0 0 17 5.87V364.28h219v243.57q8.46 3.06 17 5.81V364.28h152v273.43a154.27 154.27 0 0 0 17-2.2V364.28h66.48c-.19-1-.36-2-.53-3h-66v-97h77.9c.24-1 .48-2 .71-3h-78.56zm-17 0v102h-152v-102zm-169 102h-219v-102h219zm-449-102h210l3 2.73v99.27h-213zm0 202v-97h213v97zm230 0v-97h219v97zm388 0h-152v-97h152z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M809.36 89.04h-1.32a3.24 3.24 0 0 0 1.61-2.62c0-2.07-2.53-3.76-5.62-3.76h-39.46c-3.09 0-5.63 1.69-5.63 3.76s2.54 3.76 5.63 3.76h1.32a3.23 3.23 0 0 0-1.61 2.62c0 1.76 1.84 3.24 4.3 3.64h-11.3c-3.1 0-5.63 1.69-5.63 3.76s2.53 3.76 5.63 3.76h39.41c3.1 0 5.63-1.7 5.63-3.76 0-1.76-1.85-3.25-4.31-3.65h11.35c3.09 0 5.62-1.69 5.62-3.75s-2.53-3.76-5.62-3.76zM382.2 124.8h-1.32a3.27 3.27 0 0 0 1.61-2.62c0-2.06-2.53-3.75-5.63-3.75h-39.41c-3.1 0-5.63 1.69-5.63 3.75 0 2.07 2.53 3.76 5.63 3.76h1.31a3.26 3.26 0 0 0-1.6 2.62c0 1.76 1.84 3.25 4.3 3.65h-11.35c-3.09 0-5.62 1.69-5.62 3.75s2.53 3.76 5.62 3.76h39.46c3.09 0 5.63-1.69 5.63-3.76 0-1.76-1.85-3.24-4.31-3.64h11.35c3.09 0 5.62-1.69 5.62-3.76s-2.57-3.76-5.66-3.76zM869.82 277.86h-1.32a3.27 3.27 0 0 0 1.61-2.62c0-2.07-2.53-3.76-5.63-3.76h-39.41c-3.1 0-5.63 1.69-5.63 3.76s2.53 3.76 5.63 3.76h1.31a3.26 3.26 0 0 0-1.6 2.62c0 1.76 1.84 3.24 4.3 3.64h-11.35c-3.09 0-5.62 1.69-5.62 3.76s2.53 3.76 5.62 3.76h39.42c3.09 0 5.63-1.69 5.63-3.76 0-1.76-1.85-3.25-4.31-3.65h11.35c3.09 0 5.62-1.69 5.62-3.75s-2.53-3.76-5.62-3.76z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 525.58,
    cy: 728.37,
    rx: 422.56,
    ry: 46.65,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M613.43 396.46v146.7a27.2 27.2 0 0 1-1 7.37 27.66 27.66 0 0 1-26.66 20.3h-124a27.66 27.66 0 0 1-27.67-27.67v-146.7a27.66 27.66 0 0 1 27.67-27.67h124a27.66 27.66 0 0 1 26.66 20.3 27.2 27.2 0 0 1 1 7.37z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M436.1 396.46v146.7a27.62 27.62 0 0 1-1 7.38 27.62 27.62 0 0 1-1-7.38v-146.7a27.62 27.62 0 0 1 1-7.38 27.62 27.62 0 0 1 1 7.38z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 216.77,
    y: 368.79,
    width: 217.33,
    height: 202,
    rx: 27.67,
    ry: 27.67,
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M613.43 396.46v146.7a27.2 27.2 0 0 1-1 7.37 27.6 27.6 0 0 1-1-7.37v-146.7a27.6 27.6 0 0 1 1-7.37 27.2 27.2 0 0 1 1 7.37z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 613.43,
    y: 368.79,
    width: 217.34,
    height: 202,
    rx: 27.67,
    ry: 27.67,
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M423.1 585.79H224.57l-1-17.35c-1.1-19.48 24.08-35.65 55.53-35.65h135.12c10.55 0 18.69 5.74 17.34 12.22z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M423.1 587.79H224.57l-1-17.35c-1.1-19.48 24.08-35.65 55.53-35.65h135.12c10.55 0 18.69 5.74 17.34 12.22z",
    fill: "#caa4bc"
  }), React.createElement("path", {
    d: "M622.04 586.94h198.53l1-17.35c1.1-19.48-24.08-35.65-55.53-35.65H630.92c-10.54 0-18.69 5.74-17.34 12.22z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M622.04 588.94h198.53l1-17.35c1.1-19.48-24.08-35.65-55.53-35.65H630.92c-10.54 0-18.69 5.74-17.34 12.22z",
    fill: "#caa4bc"
  }), React.createElement("path", {
    d: "M457.48 533.94H592a28.59 28.59 0 0 1 28.59 28.59v17.76H426.1v-15a31.37 31.37 0 0 1 31.38-31.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M457.48 535.94H592a28.59 28.59 0 0 1 28.59 28.59v17.76H426.1v-15a31.37 31.37 0 0 1 31.38-31.35z",
    fill: "#caa4bc"
  }), React.createElement("path", {
    d: "M238.13 553.79h161a27 27 0 0 1 27 27v36.5H226.16v-51.53a12 12 0 0 1 11.97-11.97z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M446.1 553.79h153a27 27 0 0 1 27 27v36.5H420.61v-38a25.5 25.5 0 0 1 25.49-25.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M450.1 553.79h153a27 27 0 0 1 27 27v36.5H424.61v-38a25.5 25.5 0 0 1 25.49-25.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M448.1 553.79h153a27 27 0 0 1 27 27v36.5H422.61v-38a25.5 25.5 0 0 1 25.49-25.5z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M634.38 553.79h163.47a25.75 25.75 0 0 1 25.75 25.75v37.75H623.66v-52.78a10.72 10.72 0 0 1 10.72-10.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M636.38 553.79h163.47a25.75 25.75 0 0 1 25.75 25.75v37.75H625.66v-52.78a10.72 10.72 0 0 1 10.72-10.72z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M229.1 701.79v27.25a13.76 13.76 0 0 1-13.75 13.75h-9.5a13.76 13.76 0 0 1-13.75-13.75v-27.25zM858.57 701.79v27.25a13.76 13.76 0 0 1-13.75 13.75h-9.5a13.76 13.76 0 0 1-13.75-13.75v-27.25z",
    fill: "#9c7aa5"
  }), React.createElement("path", {
    d: "M239.19 522.94a36.5 36.5 0 1 0-43.56 35.81v147.54h41V536.41a36.52 36.52 0 0 0 2.56-13.47zM810.01 522.94a36.5 36.5 0 1 1 43.56 35.81v147.54h-41V536.41a36.52 36.52 0 0 1-2.56-13.47z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    d: "M239.19 522.94a36.5 36.5 0 1 0-43.56 35.81v147.54h41V536.41a36.52 36.52 0 0 0 2.56-13.47zM810.01 522.94a36.5 36.5 0 1 1 43.56 35.81v147.54h-41V536.41a36.52 36.52 0 0 1-2.56-13.47z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#9c7aa5",
    d: "M216.77 680.79H834.6v28.5H216.77z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M223.59 617.29h607.18v65.5H223.59z"
  }), React.createElement("path", {
    fill: "#caa4bc",
    d: "M223.59 615.29h607.18v65.5H223.59z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M821.62 701.79h36.94v9.5h-36.94z"
  }), React.createElement("path", {
    d: "M819.04 525.94a36.5 36.5 0 1 1 43.53 35.81v147.54h-41V539.41a36.32 36.32 0 0 1-2.53-13.47z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M192.1 701.79h36.48v9.5H192.1z"
  }), React.createElement("path", {
    d: "M231.16 525.94a36.5 36.5 0 1 0-43.59 35.81v147.54h41V539.41a36.32 36.32 0 0 0 2.59-13.47z",
    fill: "#e9ccdb"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M236.62 615.29h576.15v1.83H236.62z"
  }), React.createElement("circle", {
    cx: 192.1,
    cy: 524.79,
    r: 16.5,
    fill: "#caa4bc"
  }), React.createElement("circle", {
    cx: 858.56,
    cy: 524.79,
    r: 16.5,
    fill: "#caa4bc"
  }), React.createElement("path", {
    d: "M366.62 496.9c-15.72-3.93-48.91-45.37-48.91-45.37-12.48-8.72-37.93-61.54-37.93-61.54s-9.66-4.55-18.17 15.91-58 36.82-72.82 39.11c-8.35 1.29-7.54 5-5.24 8a13.28 13.28 0 0 0 5.94 4.2c6.3 2.39 25.85 25.86 25.85 25.86 18.23 12.32 38.45 69.23 45.17 84.1 3.73 8.27 7.88 4.31 10.84-.84a78.4 78.4 0 0 1 22.93-25.1c25.44-17.89 52.71-25.31 54.57-25.34 2.35-.06 33.49-15.06 17.77-18.99z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M157.64 448.16a15.42 15.42 0 0 1-6.55-4.76c-2.63-3.37-3.75-7.55 5-9 15.44-2.54 66.46-20.81 74-43.86s18-17.89 18-17.89 30.48 59.62 44.24 69.51c0 0 37.86 46.83 54.69 51.32s-14.92 21.29-17.39 21.33c-2 0-30.17 8.31-55.72 28.39a78.84 78.84 0 0 0-22.41 28.23c-2.76 5.8-6.86 10.25-11.37.92-8.11-16.79-33.39-81-53.45-95 0 0-22.24-26.53-29.04-29.19z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M157.64 448.16a15.42 15.42 0 0 1-6.55-4.76c-2.63-3.37-3.75-7.55 5-9 15.44-2.54 66.46-20.81 74-43.86s18-17.89 18-17.89 30.48 59.62 44.24 69.51c0 0 37.86 46.83 54.69 51.32s-14.92 21.29-17.39 21.33c-2 0-30.17 8.31-55.72 28.39a78.84 78.84 0 0 0-22.41 28.23c-2.76 5.8-6.86 10.25-11.37.92-8.11-16.79-33.39-81-53.45-95 0 0-22.24-26.53-29.04-29.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M168.49 446.92a13.81 13.81 0 0 1-6.1-4.25c-2.43-3-3.42-6.84 4.81-8.28 14.59-2.56 63-20 70.44-41.21s17.28-16.62 17.28-16.62 27.84 54 40.66 62.86c0 0 35 42.22 50.79 46.07s-14.39 19.67-16.72 19.76c-1.85.06-28.57 8-53 26.79a75.84 75.84 0 0 0-21.53 26.12c-2.69 5.34-6.63 9.47-10.74 1-7.39-15.23-30.25-73.56-48.95-86 0 0-20.57-23.87-26.94-26.24z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M224.57 466.01s-5.24 4.93 19.82-4.52-19.82 4.52-19.82 4.52zM245.14 490.06s3.82.55 18.19-5.32-18.19 5.32-18.19 5.32zM243.88 534.22s3.57 0 17.91-5.94-17.91 5.94-17.91 5.94zM828.77 435.36v19.08c-4.12 8.52-8.15 19.4-8.15 19.4-12 15.62-10.1 67.66-10.89 81.71-.44 7.8-5.55 5.94-10 2.74a79.09 79.09 0 0 0-29.34-12.93c-29-6.35-56-3.71-57.72-3.15-2.12.7-35.24-1.53-22.56-9.64s27.84-51.8 27.84-51.8c8.11-10.92 12.34-61.32 12.34-61.32s7-6.69 21.85 7c14.09 13.13 60.13 11.53 76.63 8.91z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M839.68 441.96a11.41 11.41 0 0 0 3.84-5.24c1-3.12.44-6.35-7.49-4.76-14.05 2.82-64.09 5.29-78.89-8.45s-21.85-7.05-21.85-7.05-4.23 50.39-12.34 61.32c0 0-15.15 43.69-27.84 51.8s20.44 10.34 22.56 9.63c1.68-.56 28.68-3.19 57.72 3.16a79.23 79.23 0 0 1 29.34 12.92c4.45 3.2 9.56 5.07 10-2.74.79-14-1.09-66.08 10.89-81.7 0 0 9.26-24.99 14.06-28.89z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M839.68 441.96a11.41 11.41 0 0 0 3.84-5.24c1-3.12.44-6.35-7.49-4.76-14.05 2.82-64.09 5.29-78.89-8.45s-21.85-7.05-21.85-7.05-4.23 50.39-12.34 61.32c0 0-15.15 43.69-27.84 51.8s20.44 10.34 22.56 9.63c1.68-.56 28.68-3.19 57.72 3.16a79.23 79.23 0 0 1 29.34 12.92c4.45 3.2 9.56 5.07 10-2.74.79-14-1.09-66.08 10.89-81.7 0 0 9.26-24.99 14.06-28.89z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M836.06 444.21a10.84 10.84 0 0 0 3.64-5c1-3 .42-6-7.1-4.51-13.35 2.67-60.86 5-74.91-8s-20.75-6.69-20.75-6.69-4 47.84-11.71 58.21c0 0-14.38 41.49-26.43 49.19s19.41 9.81 21.41 9.14c1.6-.53 27.24-3 54.81 3a74.94 74.94 0 0 1 27.85 12.27c4.23 3 9.08 4.81 9.5-2.6.75-13.34-1-62.74 10.34-77.58 0-.01 8.79-23.73 13.35-27.43z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M800.85 471.79s-3.5 2-20.25 7.75 17.5-2.25 20.25-7.75zM799.1 489.44s-10.5 8.6-15.75 9.35 12.75-.95 15.75-9.35zM807.45 529.16s-10.5 8.6-15.75 9.35 12.75-.93 15.75-9.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M706.64 573.22a22.66 22.66 0 0 1-4.4-.63c-.1-.47-.9-.79-2.59-.86h-.34a35.64 35.64 0 0 1-13.62-9.26c-4.82-5.3-18.46-11.93-18.46-11.93s-9.64-8.13-16-8.79-23.94-18.4-38.9-34.82-38.08-34.32-38.08-34.32l-9.81-10.94S553 453.52 550.35 449c-1.45-2.45-6-3.71-10.66-4.15-5-2-13.25-2-17.1-1.16-2.35.53-8.85 6.68-15.25 13.23l5.26-67.5a4.15 4.15 0 0 0-2.9-4.28l-17.7 8.63a4 4 0 0 0-2.25 3.34L485 469.57l-20.9 15.28a15.85 15.85 0 0 0-3.2-7c-11.72-15.28-29.94 13.71-36.73 25.84-.32 0-.63.1-.92.17a2.42 2.42 0 0 1-.61.94 86.69 86.69 0 0 1-14.64-9.03 4.82 4.82 0 0 1-.79-1.18c-1-2.49-4.93-6.77-7.2-9.14-6.9-7.77-17.19-18.18-18.66-18.84-.78-.34-4.47-3.17-9.05-6.76a46.73 46.73 0 0 0-2.34-4.43c-3.26-5.4-8.82-7-12.71-7.43-3.6-2.8-6.35-4.89-7.08-5.25-2.49-1.24-8.23-10.2-11-15.92s-22.9-6.46-22.9-6.46a46.93 46.93 0 0 1 5.3-22.6c.21-.4.41-.79.62-1.17a36.43 36.43 0 0 0 24.25-46.88c2.58-.91 5.73-.51 8.44-1.46 3.64-1.27 6.94-4.21 7.5-8a11.72 11.72 0 0 0-1.68-7.25 24 24 0 0 0-4.59-5.81c-4.94-5.18-12.05-8.37-19-10.76-8.81-3-18.06-5.31-27.37-4.8S291 315.72 285 322.82a20.42 20.42 0 0 1-3.73 3.92c-2.14 1.46-4.88 1.7-7.47 1.6-8.54-.31-17.46-3.68-25.34-.38-9.47 4-12.78 15.54-14 25.71-1.27 10.47-1.58 21.12-4.35 31.29s-8.48 20.11-17.76 25.16c-2.71 1.47-5.67 2.5-8.22 4.24s-4.72 4.44-4.73 7.52c0 4.2 3.77 7.29 5.74 11 1 1.89 1.58 4.05 2.57 5.91.1.19.2.37.31.55l.06.1c.09.14.18.28.28.42a.71.71 0 0 0 .1.14l.28.38a1.71 1.71 0 0 1 .11.14c.14.16.28.32.43.47s.36.34.55.49.29.34.45.5c4.29 4.33 11.91 1.88 17.41 4.51a12.06 12.06 0 0 1 2.87 2c1.84 2 3.32 4.47 5 6.69l.1.12.52.66.27.31c.12.15.25.3.38.44s.46.5.69.73l.45.41c.18.2.36.4.55.59 4.52 4.5 11.2 6.07 17.58 6.51 3.49.23 7.1.17 10.33-1.19a13.88 13.88 0 0 0 4-2.6 39.69 39.69 0 0 0 6 3.88c5.26 3.44 11.09 6.65 16.59 10.3 5.73 5.45 12.67 13.18 12.76 18.81.13 7.47 10.4 22.14 15 28.32.23 1.23.33 1.93.33 1.93l21.11 31.09s1.58 4.85 9.82 5.12c-1.52 9.36-1 25.82 6.31 27.54 8.48 2 22.28.33 24.28 2.82s34.91-1.33 34.91-1.33 18.29-4.14 30.43-.49a33.82 33.82 0 0 0 22.77-1.66s13.12-1.24 14.82-6.37a3.94 3.94 0 0 0 .65-1.59 6.93 6.93 0 0 1 .44-1.63c1.32-2.15 3.37-2.78 2.6-3.26 1-.86 1.21-1.06-1.88-1.58a17 17 0 0 0-6.15.21q1.11-1.12 2.19-2.37a12.46 12.46 0 0 0 1.38 0c4.59.26 4.27-1.73 8.56-2.8 5-1.24 10-1.74 16.46-2.49s13.22-4.47 16-8 14.46-1.5 17.7-7.47c2.78-5.1-7.05-9.48-12.29-9.08a6.17 6.17 0 0 0-3.67.63c-3.08 2-14.13 2.92-17.92 3.16-.83-.3-4.17-1.45-8.1-2.45 3.4-5.57 8.16-13.16 12.47-19.28 7.82-11.11 12.47-15.09 12.47-15.09a27.84 27.84 0 0 1 6-6.85c5.85 14.82 40.37 39.63 57 42.5 18.29 3.15 36.25 18.07 36.25 18.07s-1.66 7-1.66 10c0 1.34 3.32 2 7.49 2.33 2.8 2.1 16.39 1.87 21.6 1 5.82-1 22.28 3.15 35.75 4s25.88-5.53 17.74-5.86z",
    transform: "translate(-58.43 -36.84)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M315.98 423.06l-1.25 15.88 7.71 16.72 10.9 9.6 11.86 7 11 7.66 11-9.88s-16.11-10.34-17.55-13.85-8.68-10.62-8.68-10.62l-10.22-9.88-8.3-7.57z",
    fill: "#fd6f8d"
  }), React.createElement("path", {
    d: "M315.98 423.06l-1.25 15.88 7.71 16.72 10.9 9.6 11.86 7 11 7.66 11-9.88s-16.11-10.34-17.55-13.85-8.68-10.62-8.68-10.62l-10.22-9.88-8.3-7.57z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M266.06 361.41c-4 7.84-7.38 19.36-3.52 32.35 7.14 24-45.2-9.58-45.2-9.58s11.28-16.84 14.58-31.38c1.07-4.71 1.3-9.19 0-12.77-5.19-14.61 41.23 10.71 41.23 10.71a49.87 49.87 0 0 0-7.09 10.67z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M259.41 383.53s19.69.73 22.37 6.33 8.27 14.37 10.71 15.59 28.24 22.4 30.43 23.37 24.35 24.1 24.35 26.54 22.89 16.56 37.5 18.75 37 28.49 43.58 27.51 20 3.9 20 3.9 15.1-.73 18.75-3.17 17.28 2.44 14.12 8.28-14.61 3.9-17.29 7.31-9.25 7.06-15.58 7.79-11.2 1.21-16.07 2.43-3.65 3.65-11 2.44-35.79-51.87-35.79-51.87l-31.65-14.36s-11.93-9.74-12.91-12.91-23.86-24.83-23.86-24.83l-29.95-21.92z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M260.87 383.53s19.69.73 22.37 6.33 8.28 14.37 10.71 15.59 28.24 22.4 30.44 23.37 24.34 24.1 24.34 26.54 22.89 16.56 37.5 18.75 37 28.49 43.58 27.51 20 3.9 20 3.9 15.1-.73 18.75-3.17 17.29 2.44 14.12 8.28-14.61 3.9-17.29 7.31-9.25 7.06-15.58 7.79-11.24 1.21-16.1 2.43-3.65 3.65-11 2.44-35.79-51.87-35.79-51.87l-31.65-14.36s-11.93-9.74-12.91-12.91-23.79-24.83-23.79-24.83l-30-21.92z",
    fill: "#fd6f8d"
  }), React.createElement("path", {
    d: "M363.42 492.29s29.55-26.14 31-28.08c.72-1 10.07-8.05 19.33-15A263.23 263.23 0 0 0 446 420.77c6.67-6.92 13.81-13.83 16.27-14.38 5-1.14 17.69-.65 20.29 3.73s13.8 12.34 13.8 12.34l9.58 10.7s22.57 17.53 37.18 33.6 31.81 33.44 38 34.09 15.58 8.6 15.58 8.6 13.31 6.5 18 11.69 12.5 10.23 20.45 10.55-4.22 6.5-17.37 5.68-29.21-4.87-34.9-3.89-21.58 1.13-21.58-1.79 1.62-9.74 1.62-9.74-17.53-14.57-35.35-17.65-56.85-32.14-56.53-45.61c0 0-5.51-.49-11.85 9.25 0 0-4.54 3.9-12.17 14.77s-16.72 26.45-16.72 26.45-14.12 28.55-25.48 28.32-23.54-1.54-23.54-1.54l-15.1-10.71-1-13z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M363.42 492.29s29.55-26.14 31-28.08c.72-1 10.07-8.05 19.33-15A263.23 263.23 0 0 0 446 420.77c6.67-6.92 13.81-13.83 16.27-14.38 5-1.14 17.69-.65 20.29 3.73s13.8 12.34 13.8 12.34l9.58 10.7s22.57 17.53 37.18 33.6 31.81 33.44 38 34.09 15.58 8.6 15.58 8.6 13.31 6.5 18 11.69 12.5 10.23 20.45 10.55-4.22 6.5-17.37 5.68-29.21-4.87-34.9-3.89-21.58 1.13-21.58-1.79 1.62-9.74 1.62-9.74-17.53-14.57-35.35-17.65-56.85-32.14-56.53-45.61c0 0-5.51-.49-11.85 9.25 0 0-4.54 3.9-12.17 14.77s-16.72 26.45-16.72 26.45-14.12 28.55-25.48 28.32-23.54-1.54-23.54-1.54l-15.1-10.71-1-13z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M370.24 493.75s29.54-26.13 31-28.08 38.14-28.9 38.14-28.9 24.67-27.75 29.71-28.89 17.69-.65 20.29 3.73 13.79 12.34 13.79 12.34l9.58 10.71s22.56 17.53 37.17 33.6 31.82 33.44 38 34.09 15.58 8.61 15.58 8.61 13.31 6.49 18 11.68 12.5 10.23 20.45 10.55-4.22 6.5-17.37 5.68-29.22-4.86-34.9-3.89-21.57 1.18-21.57-1.82 1.63-9.74 1.63-9.74-17.53-14.6-35.39-17.69-56.78-32.11-56.49-45.57c0 0-5.52-.49-11.85 9.25 0 0-4.54 3.9-12.17 14.77s-16.72 26.46-16.72 26.46-14.12 28.52-25.49 28.31-23.53-1.54-23.53-1.54L373 526.7l-1-13z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M465.32 508.96c-.8.34-1.58.75-2.35 1.16l-5 2.67a49.31 49.31 0 0 0 13.18.39c2.44-.26 5.87-2.33 3.09-4.78-2.21-1.92-6.67-.42-8.92.56zM442.47 512.42c2.71-.54 5.63-1.07 8.16 0a14 14 0 0 1 2.45 1.51l4.34 3.13a55.17 55.17 0 0 1-11.47 2.1 4.47 4.47 0 0 1-1.55-.06 4.68 4.68 0 0 1-1.77-1.12c-3.39-2.82-5.68-4.46-.16-5.56zM273.17 350.74a49.87 49.87 0 0 0-7.11 10.67 35.79 35.79 0 0 1-34.14-8.61c1.07-4.71 1.3-9.19 0-12.77-5.17-14.61 41.25 10.71 41.25 10.71z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 256.58,
    cy: 326,
    r: 35.71,
    fill: "#ffbec5"
  }), React.createElement("path", {
    fill: "#504f88",
    d: "M260.88 383.53l-1.91 3.08 23.19 25.17 10.9 7.62 6.3-8.45-38.48-27.42z"
  }), React.createElement("path", {
    d: "M296.57 410.54s11.43-1.44 16.71 7.32a40.62 40.62 0 0 1 5.76 16.64s5.27 4.22 4.79 6.58a6.57 6.57 0 0 1-2.6 3.73s-10.23-5.84-10.31-6.09-7.87-8.85-7.87-8.85l-6.48-6.81z",
    fill: "#504f88"
  }), React.createElement("path", {
    d: "M227.72 375.74s-17.85 1.42-19.64 13.88-2.43 19.56 3.9 28.16 19.31 12.18 19.31 12.18 19.64 15.42 19.81 24.83 16.72 30.52 16.72 30.52 31.51 23.37 29.23 30.84-2.94 28.73 5.34 30.68 21.75.32 23.7 2.76 34.09-1.3 34.09-1.3 17.85-4.06 29.7-.49a32.94 32.94 0 0 0 22.24-1.64s13.8-1.3 14.61-6.82 7-5.35 1.14-6.33-9.58 2.11-13.8.65-7.79-6.33-17.53-6.17-12 .33-13 .16 6.17-5.68 2.27-14.6-11.35-15.89-11.02-20.89-14.61-22.08-14.61-22.08-7.14-10.38-16.4-13.79-26.62-24.36-26.62-24.36-14.87-23.15-22.94-24.39-34.52-25-34.52-25-22.43-9.25-31.98-6.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M227.24 376.71s-17.86 1.45-19.67 13.88-2.43 19.56 3.9 28.17 19.32 12.17 19.32 12.17 19.64 15.42 19.8 24.84 16.72 30.51 16.72 30.51 31.53 23.38 29.26 30.88-2.93 28.73 5.34 30.68 21.76.33 23.7 2.76 34.09-1.3 34.09-1.3 17.86-4.05 29.71-.48a32.87 32.87 0 0 0 22.22-1.66s13.8-1.3 14.61-6.81 7-5.36 1.14-6.33-9.58 2.11-13.8.64-7.79-6.33-17.53-6.16-12 .32-13 .16 6.16-5.68 2.27-14.61-11.36-15.91-11-20.94-14.61-22.08-14.61-22.08-7.14-10.38-16.39-13.79-26.62-24.35-26.62-24.35-14.88-23.15-22.94-24.4-34.53-24.95-34.53-24.95-22.45-9.28-31.99-6.83z",
    fill: "#fd6f8d"
  }), React.createElement("path", {
    d: "M342.95 517.16c-1.1 2.45-1.34 5.64.55 7.54a11 11 0 0 0 4.08 2.1c3.05 1.19 6 3.28 7 6.4a7.27 7.27 0 0 0 1 2.43 4.74 4.74 0 0 0 1.84 1.23 64.65 64.65 0 0 0 27.7 5.72 21.68 21.68 0 0 0-11.49-5.76c-3.44-.56-7.08-.3-10.26-1.73s-5.3-4.16-7.38-6.84a9.58 9.58 0 0 1-1.77-3c-.75-2.41.45-5.08-.24-7.5-.4-1.39-3.74-6.36-5.16-6.67-2.17-.43-5.14 4.45-5.87 6.08zM468.96 456.91c2-.65 12.17-2.55 9.1-6.41-2.8-3.54-6.93 5.66-9.1 6.41z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M432.43 357.5l17.27-8.41-6 86.68-18.19-3.61 4.72-71.43a3.93 3.93 0 0 1 2.2-3.23z",
    fill: "#cbe3ff"
  }), React.createElement("path", {
    d: "M449.7 349.09l-6 86.68a2.63 2.63 0 0 0 2.62-2.43l6.25-80.05a4.07 4.07 0 0 0-2.87-4.2z",
    fill: "#c8bfca"
  }), React.createElement("path", {
    d: "M425.57 431.67l-54.8 40.28a4 4 0 0 0-.64 5.93l5.36 6.1 69.34-51.82-16.88-1.21a3.56 3.56 0 0 0-2.38.72z",
    fill: "#f1f1f2"
  }), React.createElement("path", {
    fill: "#7e7a98",
    d: "M424.16 435.76l-36.91 25.84 5.14 5.57 43.06-30.64-11.29-.77z"
  }), React.createElement("path", {
    d: "M375.51 483.98l69.32-51.82a5.48 5.48 0 0 1-1.66 6.76l-60.89 45.67a5.05 5.05 0 0 1-6.77-.61z",
    fill: "#c8bfca"
  }), React.createElement("path", {
    d: "M363.57 470.05s24.2-48.89 38.49-30.19-21.92 39-21.92 39z",
    fill: "#ffbec5"
  }), React.createElement("path", {
    d: "M234.57 389.71a28.93 28.93 0 0 0-20.4 19.61c-1.57 5.37-1.46 11.26 3.86 15.2 12.18 9 29.38 15.34 37.34 30.11a104.28 104.28 0 0 1 10.2 30.76l20.62 30.43s3.13 9.74 24 2.12 32.28-11.53 32.28-11.53 16.18-8.68 23.41-11.85a13.11 13.11 0 0 1 3.22-1.14c2.43 0 19.83-14.89 20.63-16.94s-17.59-10.57-24.94-8.72c0 0-1.05 4.4-14.85 3.75s-19 5.2-19 5.2-6.82-2.44-11.2-2.2-12.33-4-18.26-3.49c0 0 3-6-.89-11s-7.47-4.55-9.09-10.47c-.93-3.38-4-14.13-6.49-22.77a62.67 62.67 0 0 0-18.64-29.79c-5.82-5.13-12.74-9.3-19.68-9.05a54.52 54.52 0 0 0-12.12 1.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M235 387.27a29 29 0 0 0-20.43 19.62c-1.56 5.37-1.46 11.25 3.87 15.19 12.17 9 29.38 15.34 37.33 30.11A104.22 104.22 0 0 1 266 482.95l20.62 30.44s3.12 9.74 24 2.11 32.28-11.52 32.28-11.52 16.18-8.69 23.4-11.85a12.8 12.8 0 0 1 3.22-1.14c2.44 0 19.84-14.89 20.63-16.94s-17.58-10.57-24.93-8.72c0 0-1.05 4.4-14.85 3.75s-19 5.19-19 5.19-6.82-2.43-11.2-2.19-12.34-4-18.26-3.49c0 0 3-6-.9-11s-7.46-4.54-9.09-10.47c-.92-3.37-4-14.12-6.48-22.77a62.72 62.72 0 0 0-18.64-29.79c-5.83-5.13-12.74-9.3-19.68-9a54.17 54.17 0 0 0-12.12 1.71z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M234.57 388.25a28.93 28.93 0 0 0-20.4 19.61c-1.57 5.37-1.46 11.26 3.86 15.2 12.18 9 29.38 15.34 37.34 30.11a104.28 104.28 0 0 1 10.2 30.76l20.62 30.43s3.13 9.74 24 2.11 32.28-11.52 32.28-11.52 16.18-8.69 23.41-11.85a12.67 12.67 0 0 1 3.22-1.14c2.43 0 19.83-14.89 20.63-16.94s-17.59-10.57-24.94-8.72c0 0-1.05 4.4-14.85 3.75s-19 5.19-19 5.19-6.82-2.43-11.2-2.19-12.33-4-18.26-3.49c0 0 3-6-.89-11s-7.47-4.54-9.09-10.46c-.93-3.38-4-14.13-6.49-22.78a62.64 62.64 0 0 0-18.64-29.78c-5.82-5.14-12.74-9.3-19.68-9a54.52 54.52 0 0 0-12.12 1.71z",
    fill: "#fd6f8d"
  }), React.createElement("path", {
    d: "M298.57 312.93c3.55-1.24 6.78-4.12 7.33-7.84a11.54 11.54 0 0 0-1.67-7.12c-4.44-8-13.39-12.26-22-15.24s-17.63-5.21-26.72-4.7-18.3 4-24.18 11a19.82 19.82 0 0 1-3.64 3.84c-2.09 1.43-4.76 1.66-7.29 1.57-8.34-.31-17.05-3.61-24.74-.37-9.24 3.88-12.48 15.21-13.68 25.17-1.24 10.24-1.54 20.67-4.25 30.63s-8.27 19.69-17.33 24.63c-2.65 1.44-5.54 2.45-8 4.15s-4.61 4.35-4.62 7.37c0 4.11 3.68 7.13 5.6 10.76 1.4 2.65 1.94 5.82 4.05 7.94 4.19 4.24 11.62 1.84 17 4.42 4.78 2.3 6.84 7.93 10.6 11.68 4.42 4.41 10.94 5.95 17.16 6.38 3.41.23 6.94.17 10.08-1.16 6.26-2.65 9.58-9.8 9.95-16.58s-1.58-13.44-3-20.09c-.47-2.19-.87-4.53 0-6.62a10 10 0 0 1 3.35-4c7.39-5.84 17.92-8.51 22.16-16.92 2.85-5.65 2-12.36 2.68-18.65.26-2.29.83-4.72 2.53-6.29 2.08-1.91 5.19-2 8-2.25a40.3 40.3 0 0 0 22.5-9.77c3.06-2.67 4.91-6 7.57-8.91s6.97-1.8 10.56-3.03z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M297.57 311.96c3.55-1.25 6.78-4.13 7.33-7.85a11.54 11.54 0 0 0-1.68-7.11c-4.43-8-13.39-12.26-22-15.25s-17.64-5.2-26.72-4.69-18.3 4-24.19 11a19.77 19.77 0 0 1-3.63 3.84c-2.09 1.43-4.76 1.67-7.29 1.57-8.34-.3-17.05-3.6-24.75-.37-9.24 3.89-12.48 15.22-13.68 25.17-1.23 10.25-1.53 20.67-4.24 30.63s-8.28 19.7-17.34 24.63c-2.65 1.45-5.54 2.45-8 4.16s-4.61 4.35-4.61 7.36c0 4.11 3.68 7.14 5.6 10.77 1.39 2.64 1.94 5.82 4 7.94 4.2 4.23 11.63 1.83 17 4.42 4.79 2.3 6.85 7.93 10.61 11.68 4.41 4.4 10.93 5.95 17.16 6.37 3.4.24 6.94.17 10.08-1.16 6.26-2.65 9.58-9.79 9.95-16.57s-1.59-13.45-3-20.09c-.46-2.19-.86-4.53-.05-6.62a10.1 10.1 0 0 1 3.36-4c7.38-5.83 17.91-8.5 22.15-16.91 2.85-5.65 2-12.36 2.69-18.65.26-2.3.83-4.73 2.52-6.29 2.09-1.92 5.2-2 8-2.25a40.41 40.41 0 0 0 22.51-9.78c3.06-2.66 4.9-6 7.57-8.91s7.09-1.78 10.65-3.04z",
    fill: "#ffe2da"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M170.96 405.22c-5-2.4-11.8-.48-16.1-3.64a9.25 9.25 0 0 0 1.53 2.15c4.2 4.23 11.63 1.83 17 4.42a11.5 11.5 0 0 1 3.26 2.38 15.88 15.88 0 0 0-5.69-5.31zM303.25 297a23 23 0 0 0-3.68-4.94 21 21 0 0 1 1.29 2 11.51 11.51 0 0 1 1.67 7.11c-.55 3.72-3.78 6.6-7.33 7.85s-8 .07-10.65 3-4.52 6.25-7.58 8.91a40.39 40.39 0 0 1-22.5 9.78c-2.82.26-5.93.33-8 2.25-1.7 1.56-2.27 4-2.52 6.29-.72 6.28.16 13-2.69 18.65-4.24 8.4-14.77 11.07-22.16 16.91a10.09 10.09 0 0 0-3.35 4c-.82 2.08-.42 4.43.05 6.62 1.42 6.64 3.38 13.3 3 20.09s-3.7 13.92-9.95 16.57c-3.15 1.33-6.68 1.39-10.09 1.16-6.22-.42-12.74-2-17.16-6.37l-.06-.07a24 24 0 0 0 2.5 3c4.41 4.4 10.93 5.95 17.16 6.37 3.4.24 6.94.17 10.08-1.16 6.26-2.65 9.58-9.79 9.95-16.57s-1.59-13.45-3-20.09c-.46-2.19-.86-4.53-.05-6.62a10.1 10.1 0 0 1 3.36-4c7.38-5.83 17.91-8.5 22.15-16.91 2.85-5.65 2-12.36 2.69-18.65.26-2.3.83-4.73 2.53-6.29 2.08-1.92 5.19-2 8-2.25a40.41 40.41 0 0 0 22.51-9.78c3.06-2.66 4.9-6 7.57-8.91s7.07-1.73 10.66-3 6.78-4.13 7.33-7.85a11.54 11.54 0 0 0-1.73-7.1z"
  })), React.createElement("ellipse", {
    cx: 1008.55,
    cy: 775.02,
    rx: 74.6,
    ry: 11.45,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 106.71,
    cy: 819.96,
    rx: 41.4,
    ry: 6.35,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M93.44 558.06s7.13 9.33-3.29 23.41-19 26-15.56 34.76c0 0 15.74-26.16 28.54-26.52s4.44-15.92-9.69-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M93.44 558.06a11.49 11.49 0 0 1 1.46 2.92c12.49 14.68 19.15 28.38 7.14 28.73-11.19.32-24.61 20.32-27.83 25.37.11.39.24.78.38 1.15 0 0 15.74-26.16 28.54-26.52s4.44-15.92-9.69-31.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M106.7 569.95c0 3.28-.37 5.94-.82 5.94s-.82-2.66-.82-5.94.46-1.74.91-1.74.73-1.55.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M111.25 573.87c-2.88 1.57-5.39 2.52-5.61 2.12s1.94-2 4.83-3.57 1.74-.42 2 0 1.67-.12-1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M55.75 558.06s-7.13 9.33 3.29 23.41 19 26 15.55 34.76c0 0-15.73-26.16-28.54-26.52s-4.39-15.92 9.7-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M55.75 558.06a11.49 11.49 0 0 0-1.46 2.92c-12.49 14.68-19.15 28.38-7.14 28.73 11.19.32 24.61 20.32 27.82 25.37a9.11 9.11 0 0 1-.38 1.15s-15.73-26.16-28.54-26.52-4.39-15.92 9.7-31.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M42.49 569.95c0 3.28.37 5.94.82 5.94s.82-2.66.82-5.94-.46-1.74-.91-1.74-.73-1.55-.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M37.94 573.87c2.88 1.57 5.39 2.52 5.61 2.12s-1.94-2-4.83-3.57-1.74-.42-2 0-1.67-.12 1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("ellipse", {
    cx: 74.6,
    cy: 676.16,
    rx: 74.6,
    ry: 11.45,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M112.99 603.66l-.36 2.91-.5 4.12-.21 1.71-.5 4.12-.21 1.72-.5 4.11-5.71 46.81c-.51 4.18-7.34 7.43-15.57 7.43H59.76c-8.24 0-15-3.25-15.56-7.43l-5.72-46.8-.5-4.11-.21-1.72-.51-4.12-.2-1.71-.5-4.12-.36-2.91c-.29-2.36 3.4-4.36 8.07-4.36h60.66c4.64-.01 8.35 1.99 8.06 4.35z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M112.64 606.57l-.5 4.11H37.06l-.5-4.11h76.08zM111.93 612.4l-.5 4.12H37.78l-.51-4.12h74.66zM111.21 618.23l-.5 4.12H38.48l-.5-4.12h73.23z"
  }));
};

UndrawRelaxingAtHome.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawRelaxingAtHome;