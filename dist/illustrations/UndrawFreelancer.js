function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFreelancer = _props => {
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
    viewBox: "0 0 1139.67 810.43",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 685.66,
    y1: 732.28,
    x2: 685.66,
    y2: 530.49,
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
  }))), React.createElement("ellipse", {
    cx: 509,
    cy: 689.93,
    rx: 509,
    ry: 120.5,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M124.53 361.42s47.41 47.41 20.65 117.79 45.88 187.34 45.88 187.34-.78-.11-2.22-.37C91.47 648.97 43.08 537.61 97.23 454.87c20.13-30.76 36.61-66.84 27.3-93.45z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M124.53 361.42s26.76 58.11 0 105.52-4.59 180.47 66.53 199.59",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M40.09 553.21s54.1-8.62 59 39.87 104 55.2 104 55.2-.65.44-1.86 1.24c-81.76 53.69-159.98 34.18-148.19-37.14 4.38-26.52 4.03-53.17-12.95-59.17z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M40.09 553.21s54.1-8.62 59 39.87 104 55.2 104 55.2-.65.44-1.86 1.24c-81.76 53.69-159.98 34.18-148.19-37.14 4.38-26.52 4.03-53.17-12.95-59.17z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M40.09 553.21s42 9.22 38.54 47.4 62.36 84 124.51 47.67",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M1138.43 360.84c-6.95 34.06-42.63 51.14-62.62 76.55-37.67 47.89-23 117.84.9 173.86 8 18.76 17.08 38.61 13.69 58.72-4.13 24.6-26.08 42.58-49.13 52.12-42 17.37-92.3 13.23-130.91-10.79-33.36-20.75-57.26-54.51-91.19-74.32-56.79-33.15-129.07-20.63-190.74 2.21-43.62 16.15-91.32 37.17-134.67 20.28-30.5-11.88-51.59-40.8-63.08-71.45-5.54-14.8-9.57-30.82-20.16-42.55-6.3-7-14.52-11.93-22.93-16.1-76.88-38.12-174-17.7-248.63-60-50.42-28.55-82.71-82.4-97-138.56s-12.63-115-9-172.88c2.58-41.1 7.21-85 33.47-116.7C94.21 7.7 141.84-4.79 184.98 1.6s82.15 29.11 116.52 55.88c43 33.47 82.78 75.13 135.51 88.69 35.91 9.23 73.68 4.18 110.72 2.43 61.92-2.92 123.86 3.58 185.43 10.7 30 3.47 60.1 7.11 89.84 12.39q10 1.77 20 3.81 5 1 10 2.14c2.6.57 5.19 1.17 7.78 1.78q6.13 1.44 12.22 3c11.66 3 23.21 6.45 34.64 10.35 39.74 13.57 71.6 38.2 109.13 55.41 24.46 11.22 51.13 14.32 74.29 28.6 28.53 17.62 54.68 48.24 47.37 84.06z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M606.14 643.98s41.1-3.26 52.93 10.88 54.06 46.56 36.63 53.78-111-21.61-111-21.61z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M437.17 151.77a21.43 21.43 0 0 0-17.48-19.49c-6.26-1-13.25.77-18.63-2.6-2.43-1.53-4.17-3.92-6.13-6-7.68-8.21-19.21-12-30.45-12.33s-22.32 2.39-33.12 5.5c-21.56 6.21-44.34 15.32-55.81 34.6-17.44 29.35-1.35 68.91-15.14 100.14-6 13.64-17.44 24.78-21.16 39.22-5 19.29 4.86 38.86 12.45 57.28a273.18 273.18 0 0 1 15.44 51.2c3.05 15.48 4.75 31.57 1.31 47-1.51 6.75-4 13.62-2.66 20.4 2 10.26 11.92 16.73 20.94 22l2.35 1.38c13 7.6 26.37 15.36 41.26 17.24 9.25 1.16 19-.12 27-4.85s14.09-13.17 14.77-22.46c.76-10.51-5.09-20.35-6.35-30.82a9.37 9.37 0 0 1 .35-4.72c.83-2 2.76-3.29 4.54-4.53 25.64-17.88 39.39-51.34 33.72-82.08-3.86-20.94-15.86-41.76-10.05-62.25 3.21-11.32 11.48-20.49 16.12-31.3a52.54 52.54 0 0 0 1.72-36.42c-2.65-8.26-7.45-16.51-5.8-25 2.91-15.08 23-19.89 30.59-33.25 5.63-9.94 2.3-24-7.2-30.32",
    fill: "#b96b6b"
  }), React.createElement("path", {
    d: "M437.17 151.77a21.43 21.43 0 0 0-17.48-19.49c-6.26-1-13.25.77-18.63-2.6-2.43-1.53-4.17-3.92-6.13-6-7.68-8.21-19.21-12-30.45-12.33s-22.32 2.39-33.12 5.5c-21.56 6.21-44.34 15.32-55.81 34.6-17.44 29.35-1.35 68.91-15.14 100.14-6 13.64-17.44 24.78-21.16 39.22-5 19.29 4.86 38.86 12.45 57.28a273.18 273.18 0 0 1 15.44 51.2c3.05 15.48 4.75 31.57 1.31 47-1.51 6.75-4 13.62-2.66 20.4 2 10.26 11.92 16.73 20.94 22l2.35 1.38c13 7.6 26.37 15.36 41.26 17.24 9.25 1.16 19-.12 27-4.85s14.09-13.17 14.77-22.46c.76-10.51-5.09-20.35-6.35-30.82a9.37 9.37 0 0 1 .35-4.72c.83-2 2.76-3.29 4.54-4.53 25.64-17.88 39.39-51.34 33.72-82.08-3.86-20.94-15.86-41.76-10.05-62.25 3.21-11.32 11.48-20.49 16.12-31.3a52.54 52.54 0 0 0 1.72-36.42c-2.65-8.26-7.45-16.51-5.8-25 2.91-15.08 23-19.89 30.59-33.25 5.63-9.94 2.3-24-7.2-30.32",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#777b9b",
    d: "M478.5 675.93h-215v-115l120 46 95-46v115z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M478.5 675.93h-215v-115l120 46 95-46v115z"
  }), React.createElement("path", {
    d: "M452.5 686.98s-39 9.32-43 26.4 23 15.53 23 15.53 38-7.77 43-38.83-23-3.1-23-3.1z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M452.5 686.98s-39 9.32-43 26.4 23 15.53 23 15.53 38-7.77 43-38.83-23-3.1-23-3.1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M347.77 739.04s-36.77 2.39-37.27 32.22c-.07 4 38.3 5.16 83.85-19.33S443 724.86 443 724.86s-17.6-28.36-30-32.22-65.23 46.4-65.23 46.4z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M132.5 624.92s-42 35 36 84 153 40 153 40 81.36-9.63 93.68-47.82-60.68-70.18-60.68-70.18-80 0-116-23-106 17-106 17z",
    fill: "#777b9b"
  }), React.createElement("path", {
    d: "M359.5 564.92s36 21 85 0c37.7-16.16 120.4-9.82 156.53-6 16.94 1.77 31.45 13.44 36.08 29.83 3.78 13.37 1 29.8-21.62 45.2-50 34-85 44-98 58s-50 21-50 21-47-7-47-17 43-59 43-59-63 58-128-20 24.01-52.03 24.01-52.03z",
    fill: "#777b9b"
  }), React.createElement("path", {
    d: "M341.5 423.92l-127-87s60.92-41.31 66.15-78.23a30 30 0 0 0-4.15-20.77c-25-40 88 0 88 0a236.25 236.25 0 0 0 4.25 31c4.91 24.35 15.27 56.78 36.75 73 37 28-64 82-64 82z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M368.75 268.88a74.06 74.06 0 0 1-88.1-10.19 30 30 0 0 0-4.15-20.77c-25-40 88 0 88 0a236.25 236.25 0 0 0 4.25 30.96z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 331.5,
    cy: 202.93,
    r: 74,
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M377.5 300.92s-15 88-40 83-103-93-103-93-81 27-68 93 26 122-1 143-44 119-44 119 86-36 131-22 91 7 102-6 27-41 27-41-23-34-12-51 25-18 33-66 71-65 59-92-35-67-84-67z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M377.5 296.92s-15 88-40 83-103-93-103-93-81 27-68 93 26 122-1 143-44 119-44 119 86-36 131-22 91 7 102-6 27-41 27-41-23-34-12-51 25-18 33-66 71-65 59-92-35-67-84-67z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M437.5 657.92s40-10 54 2 61 37 45 47-113-3-113-3z",
    fill: "#ffb9b9"
  }), React.createElement("g", {
    opacity: 0.05
  }, React.createElement("path", {
    d: "M327.5 379.92a10.68 10.68 0 0 0 6.87-1c-27.78-10.72-99.87-92-99.87-92s-2.84.95-7.38 2.92c13.78 15.31 78.11 85.63 100.38 90.08zM451.5 363.92c27.58-10.61-51 44-59 92s-22 49-33 66 12 51 12 51-16 28-27 41c-6.3 7.45-24.09 12.91-46.59 13.6 27.14.86 49.38-5.09 56.59-13.6 11-13 27-41 27-41s-23-34-12-51 25-18 33-66 42.5-89.5 49-92zM122.27 637.75c-.51 2.67-.77 4.18-.77 4.18s55.92-23.41 101.18-25.13c-34.93-1.45-80.07 13.41-100.41 20.95z"
  })), React.createElement("path", {
    d: "M454.5 358.92s9 1 18 48 44 92 44 92a217.87 217.87 0 0 1 32 61c12 36 65.5 83.5 84.5 85.5 0 0-36.5 36.5-32.5 46.5s-4 0-4 0-50-19-61-50-59-81-59-81-64-124-67-144 45-58 45-58z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M179 527.42s77 9 94 33 95.75-13.94 95.75-13.94",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M254.5 390.92s33 121 45 136 105 138 149 130c0 0-13 56-22 58 0 0-91-90-122-89 0 0-57-47-63-70s-54-98-54-98-24-53-14-76 63-13 81 9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M255.5 388.92s33 121 45 136 105 138 149 130c0 0-13 56-22 58 0 0-91-90-122-89 0 0-57-47-63-70s-54-98-54-98-24-53-14-76 63-13 81 9z",
    fill: "#cbcdda"
  }), React.createElement("path", {
    d: "M385.17 132.77a21.43 21.43 0 0 0-17.48-19.49c-6.26-1-13.25.77-18.63-2.6-2.43-1.53-4.17-3.92-6.13-6-7.68-8.21-19.21-12-30.45-12.33s-22.32 2.39-33.12 5.5c-21.56 6.21-44.34 15.32-55.81 34.6-17.44 29.35-1.35 68.91-15.14 100.14-6 13.64-17.44 24.78-21.16 39.22-5 19.29 4.86 38.86 12.45 57.28a273.18 273.18 0 0 1 15.44 51.2c3.05 15.48 4.75 31.57 1.31 47-1.51 6.75-4 13.62-2.66 20.4 2 10.26 11.92 16.73 20.94 22l2.35 1.38c13 7.6 26.37 15.36 41.26 17.24 9.25 1.16 19-.12 27-4.85s14.09-13.17 14.77-22.46c.76-10.51-5.09-20.35-6.35-30.82a9.37 9.37 0 0 1 .35-4.72c.83-2 2.76-3.29 4.54-4.53 25.64-17.88 39.39-51.34 33.72-82.08-3.86-20.94-15.86-41.76-10.05-62.25 3.21-11.32 11.48-20.49 16.12-31.3a52.54 52.54 0 0 0 1.72-36.42c-2.65-8.26-7.45-16.51-5.8-25 2.91-15.08 23-19.89 30.59-33.25 5.63-9.94 2.3-24-7.2-30.32",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M383.17 131.77a21.43 21.43 0 0 0-17.48-19.49c-6.26-1-13.25.77-18.63-2.6-2.43-1.53-4.17-3.92-6.13-6-7.68-8.21-19.21-12-30.45-12.33s-22.32 2.39-33.12 5.5c-21.56 6.21-44.34 15.32-55.81 34.6-17.44 29.35-1.35 68.91-15.14 100.14-6 13.64-17.44 24.78-21.16 39.22-5 19.29 4.86 38.86 12.45 57.28a273.18 273.18 0 0 1 15.44 51.2c3.05 15.48 4.75 31.57 1.31 47-1.51 6.75-4 13.62-2.66 20.4 2 10.26 11.92 16.73 20.94 22l2.35 1.38c13 7.6 26.37 15.36 41.26 17.24 9.25 1.16 19-.12 27-4.85s14.09-13.17 14.77-22.46c.76-10.51-5.09-20.35-6.35-30.82a9.37 9.37 0 0 1 .35-4.72c.83-2 2.76-3.29 4.54-4.53 25.64-17.88 39.39-51.34 33.72-82.08-3.86-20.94-15.86-41.76-10.05-62.25 3.21-11.32 11.48-20.49 16.12-31.3a52.54 52.54 0 0 0 1.72-36.42c-2.65-8.26-7.45-16.51-5.8-25 2.91-15.08 23-19.89 30.59-33.25 5.63-9.94 2.3-24-7.2-30.32",
    fill: "#b96b6b"
  }), React.createElement("path", {
    d: "M451.2 767.21a11.67 11.67 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.24-9.81 4.1 4.1 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 0 1 4.84 4.61 4.57 4.57 0 0 1 .36.82h14.63a40.83 40.83 0 0 0 9.06-6.27z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M585 227.43h318v22H585zM585 322.43h318v22H585zM585 421.43h318v22H585zM613 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M613 179.43h20v4h-20zM613 210.43h20v4h-20zM643 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M643 179.43h20v4h-20zM643 210.43h20v4h-20zM673 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M673 179.43h20v4h-20zM673 210.43h20v4h-20zM703 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M703 179.43h20v4h-20zM703 210.43h20v4h-20zM733 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M733 179.43h20v4h-20zM733 210.43h20v4h-20zM763 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M763 179.43h20v4h-20zM763 210.43h20v4h-20zM793 170.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M793 179.43h20v4h-20zM793 210.43h20v4h-20zM783.286 371.892l17.878-8.965 25.55 50.954-17.88 8.964z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M787.325 379.934l17.879-8.965 1.793 3.576-17.879 8.964zM801.212 407.648l17.879-8.964 1.792 3.576-17.878 8.964zM613 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M613 275.43h20v4h-20zM613 306.43h20v4h-20zM643 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M643 275.43h20v4h-20zM643 306.43h20v4h-20zM673 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M673 275.43h20v4h-20zM673 306.43h20v4h-20zM798 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M798 275.43h20v4h-20zM798 306.43h20v4h-20zM828 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M828 275.43h20v4h-20zM828 306.43h20v4h-20zM858 266.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M858 275.43h20v4h-20zM858 306.43h20v4h-20zM613 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M613 373.43h20v4h-20zM613 404.43h20v4h-20zM643 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M643 373.43h20v4h-20zM643 404.43h20v4h-20zM673 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M673 373.43h20v4h-20zM673 404.43h20v4h-20zM703 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M703 373.43h20v4h-20zM703 404.43h20v4h-20zM733 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M733 373.43h20v4h-20zM733 404.43h20v4h-20zM763 364.43h20v57h-20z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M763 373.43h20v4h-20zM763 404.43h20v4h-20zM843 175.5v51.92h-20v-55.73q10.04 1.77 20 3.81z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.1,
    d: "M823 179.43h20v4h-20zM823 210.43h20v4h-20zM873 182.44v45h-20v-49.8c2.6.57 5.19 1.17 7.78 1.78q6.14 1.44 12.22 3.02z"
  }), React.createElement("path", {
    d: "M873 182.44v1h-20v-4h7.78q6.14 1.42 12.22 3zM853 210.43h20v4h-20z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 146.7,
    cy: 161.75,
    r: 37.33,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 146.7,
    cy: 161.75,
    r: 31.68,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 146.7,
    cy: 161.75,
    r: 2.26,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10,
    opacity: 0.1,
    d: "M160.28 138l-12.46 21.8M160.84 169.11l-12.1-6.37"
  }), React.createElement("rect", {
    x: 468.26,
    y: 715.48,
    width: 117.43,
    height: 16.59,
    rx: 6.5,
    ry: 6.5,
    fill: "#535461"
  }), React.createElement("rect", {
    x: 539.73,
    y: 530.49,
    width: 291.85,
    height: 201.8,
    rx: 28.22,
    ry: 28.22,
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), React.createElement("rect", {
    x: 544.94,
    y: 534.21,
    width: 276.47,
    height: 198.07,
    rx: 26.84,
    ry: 26.84,
    fill: "#3e3f49"
  }), React.createElement("rect", {
    x: 548.77,
    y: 534.21,
    width: 276.47,
    height: 198.07,
    rx: 26.84,
    ry: 26.84,
    fill: "#535461"
  }), React.createElement("circle", {
    cx: 699.92,
    cy: 631.88,
    r: 8.93,
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M222.56 720.33s-15.88-5.38-23.52 8.61a25.52 25.52 0 0 0 .34 24.57c5 9.07 15.36 20.85 35 19.8 16.62-.89 22.15-13.57 23.65-25.37a26.06 26.06 0 0 0-34.61-27.9z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M202.74 754.77a25.52 25.52 0 0 1-.34-24.57c7.64-14 23.52-8.61 23.52-8.61l.81-.29a25.83 25.83 0 0 1 18.66.42 25.84 25.84 0 0 0-22-2.1l-.81.29s-15.88-5.38-23.52 8.61a25.52 25.52 0 0 0 .34 24.57c3.31 6 8.92 13.11 18 17a39.35 39.35 0 0 1-14.66-15.32z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M214.36 727.06s5.89 4.63 20.18 0",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M213.1 693.42s10.09 27.33 9.25 34.48l8-.84s-13.46-24-10.09-33.64z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M213.1 693.42s10.09 27.33 9.25 34.48l8-.84s-13.46-24-10.09-33.64z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M254.29 695.71s-15.88-8.12-23-1.41-8.2 23.86-8.2 23.86 25.91 3.56 31.2-22.45z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M254.29 695.71s-15.88-8.12-23-1.41-8.2 23.86-8.2 23.86 25.91 3.56 31.2-22.45z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M223.1 718.16s4.17-19.91 31.19-22.45",
    fill: "none",
    stroke: primaryColor,
    strokeMiterlimit: 10
  }), React.createElement("g", {
    opacity: 0.1,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M733.39 302.7s-6.06-2.06-9 3.29a9.75 9.75 0 0 0 .13 9.38c1.92 3.46 5.87 8 13.35 7.56 6.35-.34 8.46-5.18 9-9.69a10 10 0 0 0-13.22-10.66z"
  }), React.createElement("path", {
    d: "M725.84 315.86a9.75 9.75 0 0 1-.13-9.38c2.92-5.34 9-3.29 9-3.29l.31-.11a9.87 9.87 0 0 1 7.13.16 9.87 9.87 0 0 0-8.41-.8l-.31.11s-6.06-2.06-9 3.29a9.75 9.75 0 0 0 .13 9.38 14.57 14.57 0 0 0 6.86 6.49 15 15 0 0 1-5.58-5.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M730.26 305.27s2.25 1.77 7.71 0",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M729.77 292.42s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z"
  }), React.createElement("path", {
    d: "M729.77 292.42s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M745.51 293.3s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z"
  }), React.createElement("path", {
    d: "M745.51 293.3s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M733.59 301.87s1.59-7.6 11.91-8.58"
  })), React.createElement("g", {
    opacity: 0.1,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M861.39 401.7s-6.06-2.06-9 3.29a9.75 9.75 0 0 0 .13 9.38c1.92 3.46 5.87 8 13.35 7.56 6.35-.34 8.46-5.18 9-9.69a10 10 0 0 0-13.22-10.66z"
  }), React.createElement("path", {
    d: "M853.84 414.86a9.75 9.75 0 0 1-.13-9.38c2.92-5.34 9-3.29 9-3.29l.31-.11a9.87 9.87 0 0 1 7.13.16 9.87 9.87 0 0 0-8.41-.8l-.31.11s-6.06-2.06-9 3.29a9.75 9.75 0 0 0 .13 9.38 14.57 14.57 0 0 0 6.86 6.49 15 15 0 0 1-5.58-5.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M858.26 404.27s2.25 1.77 7.71 0",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M857.77 391.42s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z"
  }), React.createElement("path", {
    d: "M857.77 391.42s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M873.51 392.3s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z"
  }), React.createElement("path", {
    d: "M873.51 392.3s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M861.59 400.87s1.59-7.6 11.91-8.58"
  })));
};

UndrawFreelancer.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFreelancer;