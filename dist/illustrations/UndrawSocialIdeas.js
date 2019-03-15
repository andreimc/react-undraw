function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSocialIdeas = _props => {
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
    viewBox: "0 0 1061.37 862.18",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 589.43,
    y1: 881.09,
    x2: 589.43,
    y2: 18.91,
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
    d: "M139.81 531.51s-58.69-115-32.93-212.55c10.81-41 8.83-84.27-7.08-123.52a329 329 0 0 0-27.71-53.35",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M87.96 80.46c2.8 14.92-16.09 63.24-16.09 63.24s-35.12-38.19-37.92-53.1a27.48 27.48 0 0 1 54-10.14zM148.11 154.71c-5.76 14-47.88 44.34-47.88 44.34s-8.73-51.14-3-65.19a27.48 27.48 0 1 1 50.85 20.85zM172.69 296.26c-12.06 9.22-63.71 14.1-63.71 14.1s18.28-48.56 30.34-57.77a27.48 27.48 0 0 1 33.37 43.67zM167.11 407.55c-10.33 11.12-60.42 24.66-60.42 24.66s9.81-50.95 20.14-62.07a27.48 27.48 0 0 1 40.27 37.4zM44.06 212.57c12.65 8.39 64.51 9.8 64.51 9.8s-21.5-47.22-34.15-55.61a27.481 27.481 0 1 0-30.37 45.81zM39.23 342.81c14.58 4.22 64.49-10 64.49-10s-34.64-38.62-49.22-42.84a27.48 27.48 0 0 0-15.27 52.79zM51.9 470.03c13.66 6.62 65.24 1.09 65.24 1.09s-27.62-43.92-41.27-50.54a27.483 27.483 0 1 0-24 49.45z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M87.96 80.46c2.8 14.92-16.09 63.24-16.09 63.24s-35.12-38.19-37.92-53.1a27.48 27.48 0 0 1 54-10.14zM148.11 154.71c-5.76 14-47.88 44.34-47.88 44.34s-8.73-51.14-3-65.19a27.48 27.48 0 1 1 50.85 20.85zM172.69 296.26c-12.06 9.22-63.71 14.1-63.71 14.1s18.28-48.56 30.34-57.77a27.48 27.48 0 0 1 33.37 43.67zM167.11 407.55c-10.33 11.12-60.42 24.66-60.42 24.66s9.81-50.95 20.14-62.07a27.48 27.48 0 0 1 40.27 37.4zM44.06 212.57c12.65 8.39 64.51 9.8 64.51 9.8s-21.5-47.22-34.15-55.61a27.481 27.481 0 1 0-30.37 45.81zM39.23 342.81c14.58 4.22 64.49-10 64.49-10s-34.64-38.62-49.22-42.84a27.48 27.48 0 0 0-15.27 52.79zM51.9 470.03c13.66 6.62 65.24 1.09 65.24 1.09s-27.62-43.92-41.27-50.54a27.483 27.483 0 1 0-24 49.45z",
    fill: "#fc6681"
  }), React.createElement("path", {
    d: "M918.63 317.17s74.49-117.08 83.49-167.08 26-96 26-96",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M1045.12 154.09l-47 4s25 43 47-4z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M963.12 128.09l37.22 29.81s-48.22 19.19-37.22-29.81zM1051.12 113.09l-42.32 5.67s37.32 30.33 42.32-5.67zM981.12 98.09l27.94 19.61s-33.94 14.39-27.94-19.61zM1019.43 80.28s34.69-9.19 39.69-7.19 2 24-12 25-27.69-17.81-27.69-17.81zM996.12 54.09s22 21 23 26-18 17-28 0 5-26 5-26z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 1037.11,
    cy: 56.09,
    r: 10,
    fill: "#ffd037"
  }), React.createElement("circle", {
    cx: 1019.11,
    cy: 51.09,
    r: 10,
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M1108.88 283.77c-3.89-48.19-25.81-94.63-60.21-121.83-36.82-29.12-83.33-34.56-125.23-52-43.27-18.06-81.76-49.11-124.61-68.47a254.8 254.8 0 0 0-219.77 5c-46.64 23.54-93.9 78.57-145.84 82.71-37 2.95-111.12-34.12-140 .95-5.27 6.4-7.31 15.4-9.58 23.87-18.3 68.19-63.37 123-114.69 162.24-21.74 16.6-48.2 38.86-43.45 68.61 2.56 16 13.8 27.74 22.16 40.76 17.51 27.25 23.19 64.3 14.84 96.92-.17.65-.35 1.3-.53 2l-21.84 11.1c-11.56 5.87-24 12.74-28.75 24.81-4.88 12.52.25 26.69 7.12 38.25 4.92 8.27 10.8 16.17 14.93 24.78a66.73 66.73 0 0 0 1.26 8.4 64.78 64.78 0 0 0 4 12.14c.37 13.57-4.77 27.29-12 39-9 14.61-21 27.07-31.11 40.9C81.53 743 71 765.4 69.49 789.12s6.93 48.74 25.3 63.82c16.86 13.84 39.64 18 61.42 19q8.28.41 16.55.35c38.84 0 77.48-7.14 115.75-14.28l41.41-7.72c19-3.55 38.85-7.55 57-14.38a91.33 91.33 0 0 1-2.21 11.3 108 108 0 0 0-3.9 33.29h203.84c0 .17.07.34.11.51h126.32l-.22-.51h.22s-1.93-6.08-4.51-17.15a37.6 37.6 0 0 0 8.21-5.4 40 40 0 0 0 13.74-15.4s6.08-108.84.14-170.65c65.47-43.56 121.68-107.38 190.43-144.61 35.74-19.29 74.64-31.29 107.75-56.23a201.3 201.3 0 0 0 47.36-51.26c25.06-38.61 38.57-87.8 34.68-136.03z",
    transform: "translate(-69.31 -18.91)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M231.3 119.09c-5.14 6.24-7.12 15-9.34 23.27-17.84 66.49-61.78 120-111.83 158.18-21.19 16.18-47 37.89-42.36 66.89 2.49 15.58 13.45 27 21.61 39.74 17.08 26.57 22.61 62.7 14.47 94.5-9.26 36.19-35.12 70-27.11 106.56 4.94 22.56 21.7 38.56 37.82 52.34q37.71 32.23 77.83 60.37c17.93 12.58 37 24.82 57.89 26.41 18.4 1.41 36.42-5.58 53.88-12.49 15.26-6 30.91-12.31 43.23-24.4 8-7.89 14.46-18.08 23.39-24.53 21-15.17 47.94-5.55 72 .91a250.72 250.72 0 0 0 171.6-15.71c82.89-39 146.07-120.75 227.12-164.64 34.86-18.88 72.78-30.59 105.06-54.9a196.26 196.26 0 0 0 46.18-50c24.44-37.65 37.61-85.65 33.82-132.63s-25.17-92.27-58.7-118.79c-35.9-28.39-81.24-33.69-122.1-50.74-42.19-17.61-79.71-47.88-121.49-66.76a248.43 248.43 0 0 0-214.28 4.84c-45.47 22.95-91.55 76.61-142.2 80.64-36.1 2.94-108.31-33.21-136.49.94z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M636.33 371.92v2c0 20.59-15.67 44.32-44.32 44.32a44 44 0 0 1-23.92-7 32.22 32.22 0 0 0 3.76.19 31.2 31.2 0 0 0 19.34-6.65 15.6 15.6 0 0 1-14.5-10.77 19.64 19.64 0 0 0 2.94.24 16.47 16.47 0 0 0 4.1-.53 15.58 15.58 0 0 1-12.49-15.29v-.19a15.69 15.69 0 0 0 7 2 15.6 15.6 0 0 1-4.82-20.83 44.28 44.28 0 0 0 32.12 16.3 17.58 17.58 0 0 1-.39-3.57 15.59 15.59 0 0 1 27-10.66 30.67 30.67 0 0 0 9.89-3.76 15.53 15.53 0 0 1-6.85 8.58 31.23 31.23 0 0 0 9-2.41 33.48 33.48 0 0 1-7.81 8.05z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M514.57 383.5c-32.58 95.27-28.88 127.4-28.88 127.4l7 54s-141 20-119-46c12.61-37.84 9.78-98.7 5.06-143.73-3.51-33.52-8.06-58.27-8.06-58.27l162 17c-7 18.19-13 34.66-18.12 49.6z",
    fill: "#ffd5d8"
  }), React.createElement("path", {
    d: "M532.69 333.9c-7 18.17-13 34.66-18.16 49.6a107 107 0 0 1-135.78-8.33c-3.51-33.52-8.06-58.27-8.06-58.27z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 451.73,
    cy: 294.9,
    r: 107,
    fill: "#ffd5d8"
  }), React.createElement("path", {
    d: "M523.69 570.9l-63-27 11-84a136 136 0 0 1 27.07 6c24.26 7.86 57 25.61 63.89 64.83a1.42 1.42 0 0 1 0 .2c11.04 63.97-38.96 39.97-38.96 39.97z",
    fill: "#ffd5d8"
  }), React.createElement("path", {
    d: "M562.69 530.7l-8.46 12.7-33.88 2.26v-22.77s-8.12-26.49-8.12-28.49-13.54-25.75-13.54-25.75l-5.46-4.25 5.57 1.47c24.26 7.86 57.05 25.61 63.89 64.83z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M493.23 464.4l19.5 36.5v45l27 7-17-47s-19.5-37.5-29.5-41.5z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M316.69 850.9a105.35 105.35 0 0 1 3.8-32.46c12.76-46.89-8.8-199.5-8.8-199.5s6-130 86-152c76.39-21 130 65.57 134.66 73.43.23.37.34.57.34.57l31.8-13.91.2-.09v.5c.25 7.11 5.72 21.13 13.29 37.34a474 474 0 0 1 29.88 83.75 484.53 484.53 0 0 1 14.41 96.5c3.11 63.85 16.42 105.87 16.42 105.87z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M607.91 648.49l4.32 28.91-80-137 .16-.07 31.84-13.93.3.59.21.41c.25 7.11 5.72 21.13 13.29 37.34a474 474 0 0 1 29.88 83.75zM402.28 146.85c-42.16-4.76-86.77 5.58-119.59 32.47s-52 71.12-44.63 112.9c6.17 34.76 29.47 68.11 21.16 102.41-7.89 32.58-40.9 51.56-70.78 66.75L84.05 514.44c-11.27 5.73-23.44 12.42-28 24.19-4.76 12.21.24 26 6.94 37.29s15.25 21.81 18.38 34.54c4 16.23-1.66 33.46-10.39 47.7s-20.46 26.4-30.33 39.88c-13.73 18.7-23.96 40.57-25.48 63.69s6.76 47.52 24.66 62.23c16.43 13.5 38.64 17.51 59.89 18.56 42.62 2.1 85-5.76 127-13.58l40.37-7.53c37.17-6.93 77.46-15.63 101.64-44.71 28-33.62 24.77-82.48 19.27-125.86s-10.72-91.5 14.69-127.12c16.61-23.33 44.42-37.8 57.63-63.21 24.18-46.47-11-103.71.35-154.84 3.22-14.48 10.1-27.87 14.39-42.07 7.63-25.27 8.44-61.7-4.64-85.76-12.03-22.05-45.46-28.44-68.14-30.99z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M400.28 146.85c-42.16-4.76-86.77 5.58-119.59 32.47s-52 71.12-44.63 112.9c6.17 34.76 29.47 68.11 21.16 102.41-7.89 32.58-40.9 51.56-70.78 66.75L82.05 514.44c-11.27 5.73-23.44 12.42-28 24.19-4.76 12.21.24 26 6.94 37.29s15.25 21.81 18.38 34.54c4 16.23-1.66 33.46-10.39 47.7s-20.46 26.4-30.33 39.88c-13.73 18.7-23.96 40.57-25.48 63.69s6.76 47.52 24.66 62.23c16.43 13.5 38.64 17.51 59.89 18.56 42.62 2.1 85-5.76 127-13.58l40.37-7.53c37.17-6.93 77.46-15.63 101.64-44.71 28-33.62 24.77-82.48 19.27-125.86s-10.72-91.5 14.69-127.12c16.61-23.33 44.42-37.8 57.63-63.21 24.18-46.47-11-103.71.35-154.84 3.22-14.48 10.1-27.87 14.39-42.07 7.63-25.27 8.44-61.7-4.64-85.76-12.03-22.05-45.46-28.44-68.14-30.99z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M400.28 146.85c-42.16-4.76-86.77 5.58-119.59 32.47s-52 71.12-44.63 112.9c6.17 34.76 29.47 68.11 21.16 102.41-7.89 32.58-40.9 51.56-70.78 66.75L82.05 514.44c-11.27 5.73-23.44 12.42-28 24.19-4.76 12.21.24 26 6.94 37.29s15.25 21.81 18.38 34.54c4 16.23-1.66 33.46-10.39 47.7s-20.46 26.4-30.33 39.88c-13.73 18.7-23.96 40.57-25.48 63.69s6.76 47.52 24.66 62.23c16.43 13.5 38.64 17.51 59.89 18.56 42.62 2.1 85-5.76 127-13.58l40.37-7.53c37.17-6.93 77.46-15.63 101.64-44.71 28-33.62 24.77-82.48 19.27-125.86s-10.72-91.5 14.69-127.12c16.61-23.33 44.42-37.8 57.63-63.21 24.18-46.47-11-103.71.35-154.84 3.22-14.48 10.1-27.87 14.39-42.07 7.63-25.27 8.44-61.7-4.64-85.76-12.03-22.05-45.46-28.44-68.14-30.99z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M493.23 464.4l75 137.69 52-26.69s-93-126-105-124-22 13-22 13z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M631.69 560.9l-17-50s-12-123-59-127 12 131 12 131 21 39 13 68 51-22 51-22z",
    fill: "#ffd5d8"
  }), React.createElement("path", {
    d: "M391.78 654.56L508.69 795.9s112 80 143 21c0 0 13-161-2-199s-20-62-20-62-62 24-66 7l1.5 162.5s-70.5-259.5-138.5-227.5q-1.42.67-2.8 1.35c-58.2 28.94-73.58 105.19-32.11 155.31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M395.78 651.56L512.69 792.9s112 80 143 21c0 0 9-161-6-199s-16-62-16-62-62 24-66 7l2.5 201.5s-71.5-298.5-139.5-266.5q-1.42.67-2.8 1.35c-58.2 28.94-73.58 105.19-32.11 155.31z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 692.23,
    cy: 115.4,
    r: 8,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 666.23,
    cy: 226.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 516.23,
    cy: 115.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 183.69,
    cy: 278.09,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 415.23,
    cy: 567.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 144.23,
    cy: 383.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 839.23,
    cy: 145.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 612.23,
    cy: 307.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 954.23,
    cy: 255.4,
    r: 4,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 692.69,
    cy: 553.09,
    r: 4,
    fill: "#fff"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M839.23 264.21h-8.31v-8.31h-1.39v8.31h-8.3v1.39h8.3v8.3h1.39v-8.3h8.31v-1.39zM423.23 760.6h-3.69v-3.7h-.62v3.7h-3.69v.61h3.69v3.69h.62v-3.69h3.69v-.61zM588.23 647.6h-3.7v-3.7h-.61v3.7h-3.69v.61h3.69v3.69h.61v-3.69h3.7v-.61zM834.23 417.6h-3.7v-3.7h-.61v3.7h-3.69v.61h3.69v3.69h.61v-3.69h3.7v-.61zM666.23 475.6h-3.7v-3.7h-.61v3.7h-3.69v.61h3.69v3.69h.61v-3.69h3.7v-.61zM191.23 413.6h-3.7v-3.7h-.61v3.7h-3.69v.61h3.69v3.69h.61v-3.69h3.7v-.61zM592.23 178.6h-3.7v-3.7h-.61v3.7h-3.69v.61h3.69v3.69h.61v-3.69h3.7v-.61zM269.23 143.6h-3.69v-3.7h-.62v3.7h-3.69v.61h3.69v3.69h.62v-3.69h3.69v-.61z"
  }), React.createElement("path", {
    d: "M721 153.49l-5.77 14.73v60.22h20.46v10.88h11.53l10.88-10.88h16.67l22.42-22.42v-52.53zm68.55 48.68l-12.86 12.82h-20.5l-10.88 10.88v-10.88h-17.3v-53.82h61.5zm-12.86-26.27v22.4h-7.68v-22.4zm-20.5 0v22.4h-7.68v-22.4zM858.9 343.95l-16.45-6.86 22-52.95 16.45 6.83zm16.79-63.59a10.36 10.36 0 1 1 13.52-5.65 10.4 10.4 0 0 1-13.52 5.65zm44.78 89.17l-16.41-6.82 10.71-25.77c2.55-6.14 5.7-14.07-2.72-17.57s-12.63 2.58-15.5 9.48l-10.92 26.24-16.43-6.83 22-52.95 15.77 6.55-3 7.22.23.1c3.92-3.25 11.11-5.41 19.11-2.08 16.64 6.91 15.15 19.14 9.24 33.38l-12.09 29.08zM572.29 66.95a16.36 16.36 0 1 0 16.4 16.35 16.33 16.33 0 0 0-16.4-16.35zm0 27a10.63 10.63 0 1 1 10.63-10.63 10.65 10.65 0 0 1-10.63 10.63zm20.84-27.66a3.82 3.82 0 1 1-3.82-3.82 3.81 3.81 0 0 1 3.82 3.81zm10.83 3.87c-.24-5.11-1.41-9.64-5.15-13.37s-8.26-4.9-13.37-5.15c-5.27-.3-21.06-.3-26.32 0-5.1.24-9.62 1.41-13.37 5.14s-4.9 8.26-5.15 13.37c-.3 5.27-.3 21.06 0 26.32.24 5.11 1.41 9.64 5.15 13.37s8.26 4.9 13.37 5.15c5.27.3 21.06.3 26.32 0 5.11-.24 9.64-1.41 13.37-5.15s4.9-8.26 5.15-13.37c.3-5.27.3-21 0-26.31zm-6.8 32a10.77 10.77 0 0 1-6.06 6.06c-4.2 1.67-14.17 1.28-18.81 1.28s-14.62.37-18.81-1.28a10.77 10.77 0 0 1-6.06-6.06c-1.67-4.2-1.28-14.17-1.28-18.81s-.37-14.62 1.28-18.81a10.77 10.77 0 0 1 6.06-6.06c4.2-1.67 14.17-1.28 18.81-1.28s14.62-.37 18.81 1.28a10.77 10.77 0 0 1 6.06 6.06c1.67 4.2 1.28 14.17 1.28 18.81s.38 14.58-1.28 18.74zM789.23 435.09v58.71a3.64 3.64 0 0 1-3.64 3.64h-16.82v-25.6h8.57l1.28-10h-9.87v-6.36c0-2.89.8-4.85 4.94-4.85h5.27v-8.91a70.91 70.91 0 0 0-7.69-.4c-7.6 0-12.82 4.64-12.82 13.17v7.35h-8.6v10h8.6v25.56h-31.58a3.65 3.65 0 0 1-3.64-3.64v-58.67a3.65 3.65 0 0 1 3.64-3.64h58.71a3.65 3.65 0 0 1 3.65 3.64zM953.88 177.16a10.49 10.49 0 0 0-5.44-8.95c-5.92-3.23-31.29-9.34-31.29-9.34s-25.38-6.11-32.12-5.93a10.49 10.49 0 0 0-8.91 5.49c-3.23 6-6.43 19.25-6.43 19.25s-3.2 13.29-3 20.07a10.33 10.33 0 0 0 5.46 8.83c5.92 3.23 31.29 9.34 31.29 9.34s25.38 6.11 32.12 5.93a10.33 10.33 0 0 0 8.89-5.38c3.23-6 6.43-19.25 6.43-19.25s3.17-13.28 3-20.06zm-54.82 20.37l5.81-24.13 18.31 17.17-24.11 7z",
    opacity: 0.2
  }));
};

UndrawSocialIdeas.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSocialIdeas;