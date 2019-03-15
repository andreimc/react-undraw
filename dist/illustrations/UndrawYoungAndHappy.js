function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawYoungAndHappy = _props => {
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
    viewBox: "0 0 1040.82 799.22",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 294.12,
    y1: 842.7,
    x2: 294.12,
    y2: 213.7,
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
    d: "M617.83 131.77c-64.72-2.66-126.36-27.37-185.22-54.41s-117.2-57-180.34-71.33c-40.63-9.21-87.09-10.51-119.86 15.25-31.5 24.8-41.68 67.6-47.15 107.32-4.12 29.88-6.54 61.33 4.74 89.3 7.83 19.42 21.74 35.75 31.36 54.35 33.47 64.73 9.81 144.54-26.45 207.75-17 29.64-36.75 57.93-49.88 89.49s-19.2 67.72-7.71 99.91c11.38 31.91 38.51 55.88 67.9 72.74 59.69 34.24 130 44 198.61 49.59 151.82 12.28 304.46 7 456.69 1.64 56.33-2 112.92-4 168.34-14.28 30.78-5.72 62.55-14.8 84.89-36.73 28.37-27.83 35.4-75 16.39-109.86-31.88-58.54-120-73.08-142.31-135.91-12.26-34.58.33-73.1 18.16-105.17 38.23-68.8 102.33-129.16 105.7-207.8 2.32-54-28.49-108.1-76.13-133.65-49.93-26.79-119.18-23.42-156 20.92-37.92 45.66-104.58 63.23-161.73 60.88z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M505.48 311.93l-53.28 8.35-27.3 2.6-7.28.7s-13 2.06-14.27 0-26.32 0-26.32 0-15.22-18.14-51.38-8.56a26.72 26.72 0 0 1-12 3.68 1.62 1.62 0 0 1 0-.22c.13-4.17-.39-18.55-13.08-26.42a27.91 27.91 0 0 0-10.31 3.16l-.29.16-.86.5-.11.12a34.86 34.86 0 0 0 .76-5c0-.63 0-1.26.07-1.89a6.62 6.62 0 0 0 3.61-2.52 4.45 4.45 0 0 0 .45-2.35v-.88a1.23 1.23 0 0 1 0-.19v.06a58.57 58.57 0 0 0-1.3-8.8l3.92 2.6c.94.62 2.12 1.28 3.24.93a2.45 2.45 0 0 0 1.52-1.59c.7-1.9.19-4.17 1.67-5.74.35-.37.79-.67 1.09-1.06a2.72 2.72 0 0 0 .55-1.87 6.7 6.7 0 0 0-.09-1.16v.08a6.91 6.91 0 0 1-.12-3 2.6 2.6 0 0 0 3-.83 4.87 4.87 0 0 0 .76-2.83c.09-1.69.16-3.42.12-5.14a.34.34 0 0 0 0-.1c-.1-4.07-.87-8.08-3.67-11.33.73-4.66-4.34-9.74-10-10.38-1.39-.15-3.1-.23-3.72-1.28a3.54 3.54 0 0 1-.27-1.58c-.14-1.77-1.36-3.34-2.53-4.83a7.83 7.83 0 0 0-1.7-1.7c-1.86-1.2-4.5-.88-6.8-.47q-6.32 1.11-12.56 2.48a12 12 0 0 1 .09-6.12 10.82 10.82 0 0 0 .7-3.12 3.05 3.05 0 0 0-.11-1v.13a5 5 0 0 0-.2-.49 2.51 2.51 0 0 0-2-1.3 2.81 2.81 0 0 0-2.62 1.58 31 31 0 0 0-4.85 11.5 11.62 11.62 0 0 0-11.01-1.24 9.54 9.54 0 0 1-2.89 1 4.83 4.83 0 0 1-4.17-2.37c-1.15-1.71-1.66-3.75-3.88-4.88a3.51 3.51 0 0 0-3.2 0 2.18 2.18 0 0 0-1.08 1.32.77.77 0 0 0 0-.15 2.12 2.12 0 0 0 0 .44v.4c-.08 1.93 1.27 4.43-.26 5.95a5.71 5.71 0 0 1-2.1 1.11l-5.44 1.95a30.88 30.88 0 0 1-9.11 2.24c-2.85.1-5.73-.53-8.54-.46a3 3 0 0 1-.38-.23 14.67 14.67 0 0 0-1.87.22 2.09 2.09 0 0 0 .2.22h-.2a10.39 10.39 0 0 0 5.41 3.18c1.29.32 2.65.42 3.9.82s2.44 1.2 2.66 2.3a5.23 5.23 0 0 1-.64 2.64l-.05-.08a3.09 3.09 0 0 0-.19 1.11 2 2 0 0 0 0 .54 2.75 2.75 0 0 0 3.15 1.79l-6.43 4.05a8.31 8.31 0 0 0-1.34 1l-.18-.05a1.87 1.87 0 0 0-.56 1.38 1.31 1.31 0 0 0 .07.58l2.07.59-5.65 7.82a9.17 9.17 0 0 0-.9 1.45l-.06-.1a2.75 2.75 0 0 0-.2 1 2.18 2.18 0 0 0 0 .51 2 2 0 0 0 2.57 1.57 14.18 14.18 0 0 0-2.94 4.31l-.09-.06-.09.21a2.4 2.4 0 0 0-.21 1 1.12 1.12 0 0 0 .15.76 2.3 2.3 0 0 0 2 .69c3 0 5.79-2.05 6.26-4.5.92 1-.07 2.19-.94 3.22-3.54 4.14-7.14 8.35-9 13.18a17.56 17.56 0 0 0-1.18 5.18v-.12.39a12.83 12.83 0 0 0 2.92 9.16 16.57 16.57 0 0 1 2.1 2.61c1.12 2.08.48 4.75 2.22 6.51a75.59 75.59 0 0 1 5.08-10.84 12.07 12.07 0 0 1-.42 2.78v-.08c0 .24-.08.47-.1.7a4.34 4.34 0 0 0 0 .51 2.85 2.85 0 0 0 1.77 2.86c1.77.63 3.6-.65 4.8-1.93.17.44.34.87.53 1.3a35.83 35.83 0 0 0 18.82 18.35l.16.33c-6.75 4-22.44 13.73-23.46 17.46-1.31 4.76-.84 17.28 8.56 19.82a19.61 19.61 0 0 0 6.25.66c-.4.63-.79 1.27-1.17 1.89-2.6 4.22-4.78 8.13-5.44 10.23-1.9 6.13-19.66 13.55-19.66 13.55s-16.18 13-19.66 38c0 0-17.13 22.26-26.64 26.9s-26 33.08-26 33.08S116 494 112.53 505.17s-12 13.92-12 13.92.78.38 2 1.14c-.39.21-.8.45-1.26.73-7.76 4.62-24.89 17.27-21.1 37 3.68 19 25.16.51 35.6-9.83l.94-.94a28.31 28.31 0 0 1-.66 3.16 39.73 39.73 0 0 1 8.3-9.32 32.37 32.37 0 0 0 8.41-10.31c1.58-3 4.11-6 8-7 8.56-2.16 52-35.55 61.53-52.87s29.49-24 29.49-24l9.16 28.65a26.75 26.75 0 0 1 .71 13.55c-2 9.76-4.51 28.62 1.55 43.29 0 0 .28-.26.79-.69.83 3.72 1.89 8.61 2.85 13.42.23 1.18.45 2.36.66 3.52.61 3.27 1.12 6.34 1.41 8.79 1.27 10.52 4.76 34.64 7.61 37.11s19 52.56 19 52.56 14.27 32.78 12.06 47.31a20.72 20.72 0 0 0 .09 5.35 83.46 83.46 0 0 0 2.18 10.71c.28 1.06.56 2.14.88 3.24.26.95.54 1.92.82 2.89 6.91 23.45 20.13 54.8 20.13 54.8s1.1 2.85 2.53 6.66c.47 1.28 1 2.67 1.51 4.1 2.35 6.4 4.83 13.58 4.83 15.21 0 .37.5.78 1.37 1.2a96.38 96.38 0 0 0-6 11.72c-2.78 6.56-10.78 13.06-10.78 13.06s-9.52 2.7-9.52 11v6.34s20.22-.39 26.88 1.47 15.54-1.32 15.54-1.32l1.9-2.46s23.07 1 24.5-4.73c.42-1.68.4-5.26.06-9.53a122.65 122.65 0 0 0-2.3-15.49c1.52-.06 2.56-.16 2.56-.16s10.55 6.8 11.65 13.53a13.85 13.85 0 0 0 6.58 9.58s10.95 5 31.95 2.71c11-1.17 13.07-6.77 12.06-11.75-.92-4.56-4.44-8.6-6.11-8.27-3.48.7-17.52-19.48-17.52-19.48l-7.13-15c.64-8-1.24-11.79-3.88-13.4 1.81-16.87 2.05-39.48 2.05-39.48s1.59-27.21 0-51.64-1.59-72.35-7-88.43c-2.5-7.48-6.12-28.43-9.26-48.69-.24-1.52-.48-3-.7-4.53-.76-4.93-1.47-9.75-2.13-14.27.31-.15.63-.3.91-.46l-1.7-14.84-.24-2.05c.06.06.14.1.2.15 5.71 5.25-1.9-23.81-1.9-23.81s-3.43-33.42-3.2-52.64a181.93 181.93 0 0 0-1.09-20.47c-.58-5.72.77-13.15 9.41-18.38a42.62 42.62 0 0 0 6.36-4.91c2.41-2.19 7.67-5 19-5.33 19-.61 38-10.51 38-10.51s21.89 1.24 32-11.75 35.52-16.07 35.52-16.07zm-391.8 219.39l-2.81-3.94a29.25 29.25 0 0 1 2.81 3.94zm239.17 160.85c-.16 2-.28 4.35-.3 7-.08 8.28.74 19.32 4.47 29.87l-1.59 41.55h-.13c-1.34-.14-2.59 4.1-3.56 9.69a44.14 44.14 0 0 0-2.94-6.69c-1.9-2.78-.31-18.23-.31-18.23s-7.94-12.68-8.56-15.47-10.16-47.93-10.16-47.93-.63-35.24-4.12-44.2-4.44-47.93-4.44-47.93 17.44 28.13 18.72 42.36l13.63 43.6s-.42 2.38-.71 6.38z",
    transform: "translate(-79.59 -50.39)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M311.41 675.18s-.52 49.47-5.73 56.2-32.46.31-32.46.31l2-54.37c-3.61-10.44-4.41-21.38-4.32-29.58 0-2.62.13-5 .28-6.93.29-4 .69-6.36.69-6.36l-13.17-43.18c-1.23-14.1-18.07-42-18.07-42s.92 38.59 4.29 47.47 4 43.79 4 43.79 9.19 44.72 9.8 47.48 8.27 15.31 8.27 15.31-1.53 15.31.31 18.07 9.49 24.2 7.65 28.18-34.91-1.54-34.91-4.6c0-1.61-2.4-8.73-4.67-15.07l-1.46-4.06c-1.38-3.77-2.45-6.59-2.45-6.59s-12.76-31.06-19.43-54.29c-.28-1-.54-1.92-.8-2.85-.3-1.1-.58-2.17-.84-3.22a86 86 0 0 1-2.11-10.6 21.26 21.26 0 0 1-.09-5.3c2.14-14.4-11.64-46.86-11.64-46.86s-15.62-49.62-18.38-52.07-6.13-26.33-7.35-36.75c-.28-2.44-.77-5.48-1.36-8.71-.2-1.15-.42-2.32-.64-3.5-1.87-9.65-4.17-19.64-4.17-19.64L199 452.79l90.35-9.8s2.52 19.36 5.69 40.7c.22 1.48.45 3 .68 4.49 3 20.06 6.53 40.82 8.94 48.22 5.2 15.93 5.2 63.4 6.74 87.59s.01 51.19.01 51.19z",
    fill: "#63667e"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M222.54 471.28l11.37 58.05h5.4l-10.8-60.07-5.97 2.02zM169.5 498.61c-.2-1.15-.42-2.32-.64-3.5 5.29-1.08 17.26-5.49 15.4-23.17h3.67s3.48 23.29-18.43 26.67zM295.76 488.22c-6.86 1.26-28.3 4.95-32.79 2.51-5.35-2.91-10.64-18.68-10.64-18.68l4.9-.77s-4.32 23.13 37.85 12.45c.22 1.48.45 2.98.68 4.49z"
  }), React.createElement("path", {
    d: "M293.91 469.14c-6.18 3.59-20.69 5.32-37.58 6-1.54.06-3.09.12-4.67.16-27.38.86-59.35-.69-72.09-1.42-3.59-.2-5.65-.34-5.65-.34l11.18-7.73 18.38-6.74 38.66-7.58 49.54-1.38.5 4.25z",
    fill: "#33363d"
  }), React.createElement("path", {
    d: "M256.33 475.18c-1.54.06-3.09.12-4.67.16-1.94-8.22-8.06-21.36-8.06-21.36l5.2-.69z",
    fill: "#63667e"
  }), React.createElement("path", {
    d: "M47.74 492.23s-2.16 2.5-5.48 5.88c-10.08 10.25-30.83 28.56-34.37 9.74-3.67-19.51 12.88-32 20.37-36.62 2.12-1.31 3.51-2 3.51-2z",
    fill: "#ffa2a2"
  }), React.createElement("path", {
    d: "M233.34 271.83s-11.71-7.35-13.89-6.66 0 10.55 0 10.55a28.66 28.66 0 0 1-12.75 12.42 179.24 179.24 0 0 0-18.15 10.9 32.53 32.53 0 0 0-25 8.27 20 20 0 0 1-16.19 2.76c-9.08-2.52-9.53-14.92-8.27-19.63 1-3.7 16.14-13.3 22.66-17.3 1.8-1.1 2.94-1.77 2.94-1.77s29.42-1 36.06-13.55a24.51 24.51 0 0 1 8.82-9.44l.17-.09.84-.5.27-.15a26.45 26.45 0 0 1 10-3.14c14.37 9.18 12.49 27.33 12.49 27.33z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M233.34 271.83s-11.71-7.35-13.89-6.66 0 10.55 0 10.55a28.66 28.66 0 0 1-12.75 12.42 179.24 179.24 0 0 0-18.15 10.9 32.53 32.53 0 0 0-25 8.27 20 20 0 0 1-16.19 2.76c-9.08-2.52-9.53-14.92-8.27-19.63 1-3.7 16.14-13.3 22.66-17.3 1.8-1.1 2.94-1.77 2.94-1.77s29.42-1 36.06-13.55a24.51 24.51 0 0 1 8.82-9.44l.17-.09.84-.5.27-.15a26.45 26.45 0 0 1 10-3.14c14.37 9.18 12.49 27.33 12.49 27.33zM292.18 454.4c-5.51-5.21-39.81 4.28-39.81 4.28s-23.62 6.78-41.64 7.88a68.06 68.06 0 0 1-7.37.09c-7.57-.39-15.46 2.67-22.08 6.34l-1.67 1c-3.59-.2-5.65-.34-5.65-.34l11.18-7.73 18.38-6.74 38.66-7.58 49.54-1.38zM42.26 498.11c2.29-15.26-9.55-24.13-14-26.88 2.12-1.31 3.51-2 3.51-2l16 23s-2.19 2.5-5.51 5.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M421.7 290.21s-24.51 3-34.3 15.92-30.94 11.64-30.94 11.64-18.38 9.8-36.75 10.41c-10.91.36-16 3.1-18.32 5.27a41.05 41.05 0 0 1-6.14 4.87c-8.34 5.18-9.65 12.53-9.08 18.2a188.29 188.29 0 0 1 1.05 20.28c-.22 19 3.09 52.14 3.09 52.14s7.35 28.79 1.83 23.59-39.81 4.28-39.81 4.28-23.62 6.78-41.64 7.89a67.94 67.94 0 0 1-7.37.08c-7.57-.39-15.46 2.67-22.08 6.35a89.78 89.78 0 0 0-15.89 11.41c-5.86-14.53-3.42-33.22-1.5-42.88a27.25 27.25 0 0 0-.68-13.42l-8.85-28.38s-19.29 6.58-28.48 23.73-51.15 50.23-59.43 52.38c-3.79 1-6.23 3.95-7.76 6.89a31.77 31.77 0 0 1-8.11 10.22 39.08 39.08 0 0 0-8 9.23c5.52-20.83-15-30.94-15-30.94s8.26-2.76 11.63-13.76 19-22.35 19-22.35 15.93-28.18 25.12-32.78 25.73-26.64 25.73-26.64c3.36-24.81 19-37.67 19-37.67s17.16-7.35 19-13.42c.64-2.08 2.74-5.95 5.25-10.13 2.34-3.94 5-8.13 7.15-11.4s3.84-5.79 3.84-5.79l27.5-.26 5-.05 14.65-27.58s5.21-5.2 14.24.92a14.49 14.49 0 0 0 8.8 2.42 25.49 25.49 0 0 0 11.57-3.64c34.92-9.5 49.62 8.48 49.62 8.48s24.19-2.05 25.41 0 13.78 0 13.78 0l33.39-3.28 51.46-8.26z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M220.78 281.02l-15.62 25.72s-42.57 30.94-36.44 6.74a40.41 40.41 0 0 0 1.05-12.45c-.09-1.63-.28-3.26-.52-4.87a79 79 0 0 0-5.84-19.35c-.31-.74-.63-1.45-1-2.15-.48-1-.95-2-1.42-2.94a97.74 97.74 0 0 0-6.71-11.53s46.25-37.67 47.78-14.09a48.26 48.26 0 0 0 3.6 15.49l.36.83a48.07 48.07 0 0 0 10.89 15.43 32.57 32.57 0 0 0 3.87 3.17z",
    fill: "#ffa2a2"
  }), React.createElement("path", {
    d: "M158.92 304.91l7.2 21.43 29.29 4.75 16.8-18.48s9.65-13.78 10.26-14.09 2.14-13.47 2.14-13.47l1.8-7.44-11.33-3.81-15.93 17.3-6.51 4-7.23 1.76-24 7z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M233.34 273.67s-8-.08-10.13.61-3.76 3.27-3.76 3.27a28.65 28.65 0 0 1-12.75 12.43 179.24 179.24 0 0 0-18.15 10.9 32.49 32.49 0 0 0-25 8.27 20.39 20.39 0 0 1-11.33 3.46c2.34-3.94 5-8.13 7.15-11.4 9.88-1.08 30.79-4.91 30.79-4.91l.55-1.14c1.94-4 8.51-17.51 10.93-21.59 2.82-4.76 11.66-19.63 11.94-20.1l-8.68 7.94 4.64-11.18.17-.09.84-.5.27-.15a26.45 26.45 0 0 1 10-3.14c10.95 7 12.51 19.1 12.63 24.55a24.44 24.44 0 0 1-.11 2.77zM161.72 271.31l2.27 5s-.19.16-.59.46c-.31-.74-.63-1.45-1-2.15-.48-1-.95-2-1.42-2.94.24-.14.46-.29.68-.41z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M216.95 277.85a30.54 30.54 0 0 1-10.25 8.45 178.28 178.28 0 0 0-18.15 10.91 32.5 32.5 0 0 0-18.78 3.82c-.09-1.63-.28-3.26-.52-4.87 9.84-1.52 20.91-3.55 20.91-3.55s8.62-17.91 11.48-22.73c1-1.62 2.64-4.45 4.42-7.46a48.07 48.07 0 0 0 10.89 15.43z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M233.34 271.83s-8-.08-10.14.61-3.75 3.28-3.75 3.28a28.66 28.66 0 0 1-12.75 12.42 179.24 179.24 0 0 0-18.15 10.9 32.53 32.53 0 0 0-25 8.27 20 20 0 0 1-16.19 2.76c-9.08-2.52-9.53-14.92-8.27-19.63 1-3.7 16.14-13.3 22.66-17.3l2.27 5.05a141.74 141.74 0 0 1-14.83 9.95c-9.77 5.85-4.83 12.17-4.83 12.17a50.48 50.48 0 0 1 10.65-.7c5.06.34 35.15-5.17 35.15-5.17s8.62-17.92 11.48-22.73 11.66-19.63 11.94-20.1l-8.68 8 4.64-11.18.17-.09.84-.5.27-.15a26.45 26.45 0 0 1 10-3.14c14.4 9.13 12.52 27.28 12.52 27.28z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M205.7 261.61a34.94 34.94 0 0 1-43.29 13.05 101.51 101.51 0 0 0-8.13-14.47s46.25-37.67 47.78-14.09a48.26 48.26 0 0 0 3.64 15.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M210.41 240.8q0 1.31-.09 2.58a35 35 0 1 1 .09-2.58z",
    fill: "#ffa2a2"
  }), React.createElement("path", {
    d: "M119.72 353.3s7.69 14.39 17.15 22.31 15 20.22 15 20.22-2.75-23.85-32.15-42.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M107.77 389.44s27-6.74 40.59 0zM97.97 429.61l29.05-10s-18.61 13.32-29.05 10zM47.74 468.76s12.56-.61 16.54 3.37c0 0-12.25.92-16.54-3.37zM340.82 275.02s-28.16 16.72-29.41 43.67zM374.84 300.31s-34.92 7.05-40.74 10.72-18.37 5.51-18.37 5.51 50.53-6.73 59.11-16.23zM272.41 448.12c-2.54 2.64-33.89 10.08-61.91 16.3a70.46 70.46 0 0 1-7.64.09c-7.85-.4-16 2.75-22.9 6.53-8.46 1.8-13.93 2.93-13.93 2.93s-9.21-7.26 3.49-23.65 14.93-42.25 14.93-42.25l56.54-14.46s15.25 21 22.55 24.37 13.57 25.28 8.87 30.14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M270.41 448.85c-2.46 2.58-32.69 9.8-59.71 15.85a67.94 67.94 0 0 1-7.37.08c-7.57-.39-15.46 2.67-22.08 6.35-8.16 1.74-13.44 2.84-13.44 2.84s-8.88-7.05 3.37-23 14.39-41.05 14.39-41.05l54.52-14.08s14.7 20.4 21.74 23.68 13.08 24.62 8.58 29.33z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M226.15 649.61l-15.74 9.32a86 86 0 0 1-2.11-10.6c2.29 1.91 17.85 1.28 17.85 1.28zM211.27 662.15c5.56-1.06 18.76-3.7 26-6.18-6.56 3.2-18.43 8.55-25.17 9-.31-.93-.57-1.89-.83-2.82zM241.91 653.61c-.58.71-2.28 1.51-4.63 2.32 2.81-1.32 4.63-2.32 4.63-2.32zM251.41 730.61c-4.46.37-11.71-.23-16-.67l-1.46-4.06c4.59.49 13.7 1.26 17.46.14 5.13-1.52 6.67 4.06 0 4.59zM291.26 649.22c-.74-.1-12.64-1.44-20.3-1.48 0-2.62.13-5 .28-6.93 5.28 2.23 19.23 8.14 20.02 8.41z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M282.5 780.92c-1.38 5.69-23.66 4.69-23.66 4.69l-1.84 2.44s-8.57 3.14-15 1.3-26-1.45-26-1.45v-6.29c0-8.19 9.19-10.87 9.19-10.87s7.73-6.43 10.41-12.94a97 97 0 0 1 5.81-11.71s-7.19-8.73 12.1-11c19-2.2 11.55 15.05 11.34 15.53.31-.28 7.44-6.69 11.4-4.67 2.86 1.47 5.45 15.39 6.26 25.47.37 4.28.39 7.83-.01 9.5z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M282.5 780.92c-1.38 5.69-23.66 4.69-23.66 4.69l-1.84 2.44s-8.57 3.14-15 1.3-26-1.45-26-1.45v-6c11.78.58 35.36 1.36 40.66-1.37 0 0 6.35-1.61 7.81-2.68 1.23-.91 14.17-5.14 18-6.39.41 4.24.43 7.79.03 9.46z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M331.27 781.55c-20.29 2.22-30.86-2.69-30.86-2.69a13.66 13.66 0 0 1-6.35-9.49c-1.07-6.66-11.26-13.39-11.26-13.39s-12.55 1.22-14.09-2.46a16.59 16.59 0 0 1-.42-4.77c0-9.87 2.47-30.6 5.32-30.3 3.36.37 13.75 14.13 14.79 15.51-.91-1.48-9.95-16.89 10.1-18.72 0 0 16.38-9.26 14.7 12.33l6.89 14.85s13.56 20 16.92 19.3c1.61-.33 5 3.67 5.9 8.19.97 4.93-1.04 10.48-11.64 11.64z",
    fill: "#ced7e7"
  }), React.createElement("path", {
    d: "M210.41 240.8q0 1.31-.09 2.58l-.85.32-3.29 1.2a5 5 0 0 1-1.75.4 3.1 3.1 0 0 1-2.39-1.29 7.17 7.17 0 0 1-1-2.37l-2.49-9.57c-.5-1.9-1.27-4.09-3.4-4.8a13.37 13.37 0 0 1-1.83-.54c-1.33-.63-1.61-2.11-2.06-3.35-1-2.89-3.67-5.2-6.56-7a11.84 11.84 0 0 0-6.66-2.14 5.77 5.77 0 0 0-3.51 1.26c-2.09 1.77-1.8 4.16-1.55 6.68s.92 5.21.18 7.73c-.5 1.64-1.57 3.17-1.76 4.87-.16 1.37.29 2.76.21 4.13a3.28 3.28 0 0 1-2.6 3.14c-.13-.83-1.34-1.1-2.15-1.55-1.83-1-1.93-3.18-1.85-5 .14-2.72.27-5.45.4-8.17a125.42 125.42 0 0 1-3.75 18 5.92 5.92 0 0 1-1.38 2.76 2.9 2.9 0 0 1-3.19.61 3.05 3.05 0 0 1-1.29-1.69 19.91 19.91 0 0 1-1.28-10c-1.11 4.43-2.22 8.91-4.36 13.07-.85 1.65-2.14 3.44-4.23 3.77a7.25 7.25 0 0 0-1.88.31 2.21 2.21 0 0 0-.65.47 34.91 34.91 0 1 1 67-13.84z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M174.53 213.71a5.74 5.74 0 0 1 3.51-1.27 11.89 11.89 0 0 1 6.66 2.14c2.89 1.76 5.52 4.06 6.56 7 .45 1.24.72 2.73 2 3.36a16 16 0 0 0 1.83.53c2.14.71 2.91 2.9 3.4 4.8l2.51 9.57a6.75 6.75 0 0 0 .95 2.37 3.1 3.1 0 0 0 2.39 1.3 4.92 4.92 0 0 0 1.76-.41l3.29-1.2c1.73-.63 3.61-1.38 4.4-2.84a5.44 5.44 0 0 0 .4-3 59.42 59.42 0 0 0-1.28-9.08l3.78 2.57c.91.61 2.05 1.26 3.13.92a2.41 2.41 0 0 0 1.47-1.58c.68-1.88.19-4.13 1.61-5.68.34-.36.76-.67 1.06-1.05 1.29-1.66-.24-3.91.29-5.85a2.5 2.5 0 0 0 2.92-.83 4.9 4.9 0 0 0 .73-2.8c.3-5.65.44-11.77-3.43-16.37.71-4.62-4.19-9.65-9.61-10.28-1.35-.16-3-.24-3.59-1.27a3.5 3.5 0 0 1-.27-1.57c-.14-1.75-1.31-3.31-2.44-4.78a7.3 7.3 0 0 0-1.64-1.69c-1.79-1.18-4.34-.86-6.56-.46q-6.11 1.09-12.14 2.45a12.16 12.16 0 0 1 .09-6c.41-1.48 1.11-3 .35-4.48a2.41 2.41 0 0 0-2-1.29 2.71 2.71 0 0 0-2.53 1.57 31.08 31.08 0 0 0-4.68 11.38 11 11 0 0 0-10.52-1.2 8.89 8.89 0 0 1-2.78 1 4.69 4.69 0 0 1-4-2.35c-1.1-1.7-1.6-3.72-3.74-4.83a3.31 3.31 0 0 0-3.09 0c-2.83 1.65.7 5.74-1.4 7.89a5.53 5.53 0 0 1-2 1.1l-5.25 1.93a28.89 28.89 0 0 1-8.8 2.21c-3.48.14-7-.93-10.42-.21a10.07 10.07 0 0 0 5.23 3.15c1.24.31 2.55.41 3.76.81a3.54 3.54 0 0 1 2.57 2.28c.27 1.41-1.09 2.77-.82 4.18a2.67 2.67 0 0 0 3 1.77l-6.21 4c-1.12.72-2.37 1.77-1.95 2.91l2 .58-5.39 7.73a4.45 4.45 0 0 0-1.13 2.84 2 2 0 0 0 2.48 1.55 14.44 14.44 0 0 0-3 4.66 1.64 1.64 0 0 0-.05 1.49 2.2 2.2 0 0 0 1.89.69c2.9 0 5.59-2 6-4.47.89 1-.06 2.18-.91 3.19-3.41 4.1-6.89 8.28-8.7 13.06s-1.73 10.36 1.66 14.47a16.58 16.58 0 0 1 2 2.59c1.08 2.06.46 4.7 2.14 6.45a75.57 75.57 0 0 1 4.9-10.74 32.06 32.06 0 0 1-.53 3.61 3 3 0 0 0 1.71 3.1c1.76.64 3.59-.73 4.74-2a3.25 3.25 0 0 1 1.07-.91 7.54 7.54 0 0 1 1.87-.31c2.09-.33 3.37-2.11 4.23-3.77 2.14-4.15 3.26-8.63 4.36-13.08a19.77 19.77 0 0 0 1.29 10 3 3 0 0 0 1.28 1.69 2.92 2.92 0 0 0 3.19-.62 5.87 5.87 0 0 0 1.38-2.76 126.51 126.51 0 0 0 3.75-18l-.4 8.17c-.09 1.84 0 4 1.84 5 .83.45 2 .72 2.16 1.54a3.23 3.23 0 0 0 2.59-3.13c.09-1.38-.36-2.76-.2-4.14.19-1.69 1.27-3.22 1.76-4.87.74-2.51.09-5.14-.18-7.72s-.42-4.95 1.7-6.71z",
    fill: "#896363"
  }), React.createElement("path", {
    d: "M331.27 781.55c-20.29 2.22-30.86-2.69-30.86-2.69a13.66 13.66 0 0 1-6.35-9.49c-1.07-6.66-11.26-13.39-11.26-13.39s-12.55 1.22-14.09-2.46a16.59 16.59 0 0 1-.42-4.77c4.64 1.11 15.33 3.66 18.64 4.61 4.3 1.22 16.86 21.59 16.86 21.59 12.09 6.36 32.1-1.8 39.12-5 .97 4.89-1.04 10.44-11.64 11.6zM241.41 746.09s-6.18 9.48 23.44 4.58M288.41 733.96s31.24 6.79 24.8-6.39",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M138.41 194.15a2.77 2.77 0 0 0-.16 1.39 2.12 2.12 0 0 0 .94 1.3l2.11-1.36a2.79 2.79 0 0 1-2.89-1.33zM132.69 188.28c1.25.31 2.56.41 3.77.81a4 4 0 0 1 2.41 1.82 2.72 2.72 0 0 0 .16-1.38 3.54 3.54 0 0 0-2.57-2.28c-1.21-.4-2.52-.5-3.77-.81a10.64 10.64 0 0 1-3.41-1.53 11 11 0 0 0-1.81.22 10.08 10.08 0 0 0 5.22 3.15zM137.07 246.48a75.63 75.63 0 0 0-4.91 10.74c-1.67-1.75-1.06-4.39-2.14-6.45a15.94 15.94 0 0 0-2-2.59 12.56 12.56 0 0 1-2.81-7.37 13 13 0 0 0 2.81 9.21 15.94 15.94 0 0 1 2 2.59c1.08 2.06.47 4.69 2.14 6.45a76.21 76.21 0 0 1 4.55-10.07 10.71 10.71 0 0 0 .36-2.51zM128.8 214.12a2.51 2.51 0 0 0-.21 1.26 2 2 0 0 0 1.09 1.43 14.14 14.14 0 0 1 1.39-1.72 1.92 1.92 0 0 1-2.27-.97zM187.99 174.73a11.45 11.45 0 0 1 .37-2.32c.36-1.28.92-2.58.57-3.88-.14.68-.38 1.37-.57 2a11.94 11.94 0 0 0-.37 4.2zM154.31 173.61a10.07 10.07 0 0 0 .27 3.47 9.91 9.91 0 0 0-.27-3.47zM135.94 217.46c-.45 2.43-3.15 4.42-6 4.47a2.48 2.48 0 0 1-1.75-.54l-.09.2a1.67 1.67 0 0 0-.06 1.49 2.22 2.22 0 0 0 1.9.68 6.79 6.79 0 0 0 3.35-.95c.59-.73 1.19-1.45 1.78-2.16a10.32 10.32 0 0 0 .86-1.14 1.6 1.6 0 0 0 .05-.21v.05a1.5 1.5 0 0 0-.04-1.89zM133.58 202.53a1.66 1.66 0 0 0-.48 1.7l.94.27 1.06-1.53zM224.01 220.08c-.3.38-.72.69-1.06 1-1.43 1.55-.93 3.8-1.61 5.68a2.43 2.43 0 0 1-1.47 1.58c-1.08.34-2.22-.31-3.13-.92l-3.78-2.57c.15.7.29 1.41.42 2.12l3.36 2.28c.91.62 2.05 1.27 3.13.93a2.45 2.45 0 0 0 1.47-1.58c.68-1.88.18-4.13 1.61-5.68.34-.37.76-.67 1.06-1.05a3.41 3.41 0 0 0 .43-2.76 2.34 2.34 0 0 1-.43.97zM214.22 235.61a3.59 3.59 0 0 1-.38 1.31c-.79 1.46-2.67 2.21-4.41 2.84l-3.28 1.2a5.14 5.14 0 0 1-1.76.41 3.1 3.1 0 0 1-2.39-1.3 7 7 0 0 1-1-2.37l-2.5-9.57c-.5-1.9-1.26-4.09-3.4-4.8a16 16 0 0 1-1.83-.53c-1.33-.64-1.61-2.12-2-3.36-1-2.9-3.67-5.2-6.56-7a11.92 11.92 0 0 0-6.66-2.14 5.72 5.72 0 0 0-3.51 1.27c-1.67 1.41-1.82 3.22-1.69 5.18a4.73 4.73 0 0 1 1.69-3.35 5.84 5.84 0 0 1 3.51-1.27 12.07 12.07 0 0 1 6.66 2.14c2.89 1.77 5.52 4.07 6.56 7 .44 1.24.72 2.72 2 3.36a16 16 0 0 0 1.83.53c2.14.71 2.9 2.9 3.4 4.8l2.5 9.56a6.88 6.88 0 0 0 1 2.37 3.08 3.08 0 0 0 2.39 1.31 5.38 5.38 0 0 0 1.76-.41l3.26-1.18c1.74-.63 3.62-1.38 4.41-2.84a5.44 5.44 0 0 0 .4-3c.01-.02.01-.08 0-.16zM227.95 210.61a4.9 4.9 0 0 1-.73 2.8 2.5 2.5 0 0 1-2.92.83 4.71 4.71 0 0 0 0 2v-.14a2.5 2.5 0 0 0 2.92-.83 4.92 4.92 0 0 0 .73-2.8c.09-1.63.16-3.3.12-4.95-.02 1.01-.07 2.09-.12 3.09zM154.52 233.09a59 59 0 0 1-4.36 13.08c-.86 1.66-2.14 3.44-4.24 3.77a7.7 7.7 0 0 0-1.87.31 3.31 3.31 0 0 0-1.06.91c-1.15 1.3-3 2.67-4.74 2a2.59 2.59 0 0 1-1.61-1.95c0 .24-.08.47-.1.7a2.93 2.93 0 0 0 1.71 3.09c1.76.65 3.59-.73 4.74-2a3.41 3.41 0 0 1 1.06-.9 6.84 6.84 0 0 1 1.87-.31c2.1-.33 3.38-2.11 4.24-3.77a56.54 56.54 0 0 0 4.19-12.41 19.24 19.24 0 0 1 .17-2.52zM165.41 223.43a126.51 126.51 0 0 1-3.75 18 5.8 5.8 0 0 1-1.39 2.76 2.91 2.91 0 0 1-3.19.62 3.05 3.05 0 0 1-1.27-1.69 20 20 0 0 1-1.4-6.51 19.84 19.84 0 0 0 1.43 8.35 3.07 3.07 0 0 0 1.27 1.7 2.93 2.93 0 0 0 3.19-.62 5.84 5.84 0 0 0 1.39-2.76 126.08 126.08 0 0 0 3.62-17.11zM173.15 226.03c-.49 1.65-1.56 3.17-1.75 4.87a7 7 0 0 0 0 1.65c.24-1.62 1.25-3.09 1.72-4.68a10 10 0 0 0 .31-3.57 8.61 8.61 0 0 1-.28 1.73zM169.01 238.17c-.14-.82-1.34-1.09-2.16-1.54a4 4 0 0 1-1.83-3.42v.23c-.09 1.84 0 4 1.84 5 .82.45 2 .71 2.16 1.54a3.26 3.26 0 0 0 2.59-3.14 8.43 8.43 0 0 0-.05-1.42 3.15 3.15 0 0 1-2.55 2.75z"
  })), React.createElement("path", {
    d: "M480.71 799.22H364.22a9.73 9.73 0 0 1-9.68-10.87l28.36-241 .59-5.09a9.74 9.74 0 0 1 9.67-8.6h61.16a9.74 9.74 0 0 1 9.68 8.7l.51 4.83 25.9 241.25a9.74 9.74 0 0 1-9.7 10.78z",
    fill: "#4e5a86"
  }), React.createElement("path", {
    d: "M390.94 562.48s4.28 109.33-12.25 151c0 0 1.72 8.88 6.37 0s20.58-101.38 12.92-149.46c0-.01-1.57-5.22-7.04-1.54zM411.46 562.48s4.28 109.33-12.25 151c0 0 1.72 8.88 6.37 0s20.58-101.38 12.92-149.46c0-.01-1.53-5.22-7.04-1.54zM461.41 562.48s-4.29 109.33 12.25 151c0 0-1.73 8.88-6.38 0s-20.6-101.39-12.95-149.47c0 0 1.54-5.21 7.08-1.53zM440.86 562.48s-4.29 109.33 12.25 151c0 0-1.73 8.88-6.38 0s-20.57-101.39-12.92-149.47c0 0 1.54-5.21 7.05-1.53z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#4e5a86",
    d: "M395.64 19.42H451v483.03h-55.36z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#c1272d",
    strokeMiterlimit: 10,
    d: "M356.94 385.76h0z"
  }), React.createElement("path", {
    d: "M464.51 547.22a7.46 7.46 0 0 1-1.91.25h-78.55a7.24 7.24 0 0 1-1.15-.09l.59-5.09a9.74 9.74 0 0 1 9.67-8.6h61.16a9.74 9.74 0 0 1 9.68 8.7zM395.64 492.8h55.93v9.65h-55.93z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 376.69,
    y: 494.64,
    width: 93.26,
    height: 50.99,
    rx: 8,
    ry: 8,
    fill: "#4e5a86"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M399.36 19.42h7.96v460.06h-7.96zM412.68 19.42h7.96v460.06h-7.96zM426 19.42h7.96v460.06H426zM439.33 19.42h7.96v460.06h-7.96z"
  }), React.createElement("path", {
    d: "M454.46 250.05s-18.22-5.67-15.46 14.39 9.8 21.29 9.8 21.29 6.12-1.38 6.89-9.34-1.23-26.34-1.23-26.34z",
    fill: "#ffa2a2"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M869.89 677.37c15.33 22.63 10.43 103.65 10.43 103.65s-77-25.5-92.38-48.13a49.514 49.514 0 0 1 82-55.52z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M869.89 677.37c15.33 22.63 10.43 103.65 10.43 103.65s-77-25.5-92.38-48.13a49.514 49.514 0 0 1 82-55.52z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M801.46 664.21s57.74 44.58 79.16 116.87",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M895.16 719.67s-41-7-13 60.91c0 0 28.49-10.85 30.71-37.87a21.55 21.55 0 0 0-17.15-22.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M895.77 719.61s7.81 37.56-13.56 61",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M446.46 609.61s61.58-157 179.31-216.39c49.42-24.92 90.06-64.4 114.65-114a430 430 0 0 0 28.22-73.36",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M842.61 167.99c-12.16 15.67-75.78 39.07-75.78 39.07s6.9-67.44 19.06-83.1a35.9 35.9 0 1 1 56.72 44zM822.13 291.15c-18.72 6.54-84.85-8.4-84.85-8.4s42.45-52.85 61.17-59.39a35.903 35.903 0 1 1 23.68 67.79zM704.98 437.82c-19.47-3.8-69-50.08-69-50.08s63.33-24.2 82.79-20.39a35.902 35.902 0 0 1-13.78 70.47zM591.34 528.84c-19.82-.46-76.47-37.7-76.47-37.7s58.32-34.55 78.15-34.09a35.905 35.905 0 0 1-1.68 71.79zM675.41 239.61c2.76 19.63 46.32 71.57 46.32 71.57s27.55-61.94 24.79-81.58a35.91 35.91 0 0 0-71.11 10.01zM543.84 347.68c8.51 17.93 65.57 54.44 65.57 54.44s7.76-67.35-.76-85.26a35.9 35.9 0 1 0-64.85 30.82zM430.41 470.32c5.36 19.09 55.48 64.75 55.48 64.75s19-65.07 13.66-84.16a35.91 35.91 0 0 0-69.14 19.41z",
    fill: primaryColor
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M436.27 326.83s22.25-56.73 64.78-78.17a92.36 92.36 0 0 0 41.42-41.18 155.26 155.26 0 0 0 10.2-26.5",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M579.41 167.31c-4.4 5.66-27.38 14.11-27.38 14.11s2.49-24.36 6.89-30a13 13 0 1 1 20.49 15.89zM571.99 211.8c-6.76 2.36-30.65-3-30.65-3s15.33-19.1 22.09-21.46a13 13 0 1 1 8.56 24.49zM529.66 264.79c-7-1.38-24.92-18.1-24.92-18.1s22.87-8.74 29.9-7.36a13 13 0 1 1-5 25.46zM488.61 297.67c-7.16-.17-27.62-13.62-27.62-13.62s21.07-12.49 28.23-12.32a13 13 0 0 1-.61 25.94zM518.97 193.16c1 7.09 16.74 25.86 16.74 25.86s10-22.38 9-29.47a13 13 0 1 0-25.69 3.61zM471.41 232.22c3.08 6.47 23.71 19.67 23.71 19.67s2.8-24.33-.28-30.8a13 13 0 0 0-23.43 11.13zM430.47 276.53c1.94 6.89 20 23.39 20 23.39s6.94-23.51 4.94-30.41a13 13 0 1 0-25 7z",
    fill: primaryColor
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M623.66 797.37s.94-60.92 33.25-95.92a92.26 92.26 0 0 0 24.36-53.08 155.39 155.39 0 0 0 .25-28.4",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M701.75 597.8c-2.13 6.81-20.69 22.81-20.69 22.81s-6.2-23.7-4.07-30.54a13 13 0 0 1 24.76 7.72zM710.41 642.06c-5.51 4.58-29.77 7.91-29.77 7.91s7.66-23.26 13.17-27.85a13 13 0 0 1 16.6 19.94zM689.41 706.52c-7.07 1.18-29.69-8.2-29.69-8.2s18.36-16.21 25.42-17.39a13 13 0 0 1 4.27 25.59zM662.41 751.71c-6.77 2.35-30.65-3.07-30.65-3.07s15.4-19.03 22.16-21.43a13 13 0 1 1 8.49 24.5zM654.24 643.19c3.42 6.3 24.74 18.35 24.74 18.35s1.47-24.44-2-30.74a13 13 0 0 0-22.79 12.39zM623.41 696.44c5.15 5 29.1 10.1 29.1 10.1s-5.91-23.76-11.06-28.75a13 13 0 0 0-18 18.65zM600.59 752.3c4.23 5.78 27 14.88 27 14.88s-1.81-24.43-6-30.21a13 13 0 0 0-20.93 15.33z",
    fill: primaryColor
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M473.71 787.79s.94-60.93 33.25-95.93a92.26 92.26 0 0 0 24.36-53.08 155.28 155.28 0 0 0 .25-28.39",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M551.8 588.21c-2.13 6.84-20.69 22.82-20.69 22.82s-6.2-23.69-4.07-30.53a13 13 0 1 1 24.76 7.71zM560.48 632.47c-5.51 4.59-29.77 7.91-29.77 7.91s7.66-23.26 13.17-27.84a13 13 0 0 1 16.6 19.93zM539.41 696.94c-7.07 1.17-29.69-8.21-29.69-8.21s18.36-16.21 25.42-17.38a13 13 0 1 1 4.27 25.59zM512.5 742.12c-6.77 2.36-30.65-3.07-30.65-3.07s15.36-19.07 22.12-21.44a13 13 0 1 1 8.53 24.5zM504.29 633.61c3.42 6.3 24.74 18.35 24.74 18.35s1.47-24.44-2-30.74a13 13 0 1 0-22.74 12.39zM473.48 686.85c5.15 5 29.1 10.11 29.1 10.11s-5.91-23.77-11.06-28.75a13 13 0 1 0-18 18.64zM450.64 742.71c4.23 5.78 27 14.88 27 14.88s-1.81-24.43-6-30.21a13 13 0 1 0-20.93 15.33z",
    fill: primaryColor
  })), React.createElement("path", {
    d: "M405.41 77.47c2 6.16-3.42 27.6-3.42 27.6s-16.88-14.27-18.86-20.46a11.71 11.71 0 1 1 22.28-7.14zM322.41 214.61c2 6.16-3.42 27.6-3.42 27.6s-16.9-14.27-18.88-20.43a11.712 11.712 0 0 1 22.3-7.17zM497.27 154.16c2 6.16-3.43 27.6-3.43 27.6s-16.89-14.26-18.87-20.42a11.714 11.714 0 1 1 22.3-7.18zM587.73 257.79c2 6.15-3.42 27.59-3.42 27.59s-16.9-14.26-18.9-20.42a11.71 11.71 0 1 1 22.29-7.17zM526.69 87.61c-3.29 5.57-22.91 15.76-22.91 15.76s-.55-22.1 2.74-27.67a11.712 11.712 0 0 1 20.17 11.91zM747.94 70.92c-3.29 5.57-22.91 15.76-22.91 15.76s-.54-22.11 2.75-27.67a11.71 11.71 0 1 1 20.16 11.91zM302.41 113.84c-6.26 1.63-27.36-5-27.36-5s15.21-16.05 21.47-17.68a11.716 11.716 0 1 1 5.89 22.68zM505.13 366.91c-3.29 5.57-22.91 15.76-22.91 15.76s-.55-22.1 2.74-27.67a11.712 11.712 0 1 1 20.17 11.91z",
    fill: primaryColor
  }));
};

UndrawYoungAndHappy.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawYoungAndHappy;