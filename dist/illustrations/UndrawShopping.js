function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawShopping = _props => {
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
    viewBox: "0 0 984 768.91",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: -566.73,
    y1: 642.19,
    x2: -566.73,
    y2: 312.64,
    gradientTransform: "translate(1295)",
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
  }))), React.createElement("circle", {
    cx: 22.57,
    cy: 8.51,
    r: 8.51,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 50.53,
    cy: 8.51,
    r: 8.51,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 78.49,
    cy: 8.51,
    r: 8.51,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#3c354c",
    d: "M0 28.66h783v1H0z"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M14.06 89.79h311.09v382.28H14.06z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M457.85 194.37h311.09v382.27H457.85z"
  }), React.createElement("path", {
    d: "M786.89 378.35c1-2.86 2.57-5.52 3.37-8.44 1.07-3.91.68-8.05.22-12.08a10.3 10.3 0 0 0-1.46-5c-1.36-1.86-3.74-2.63-5.57-4-4.46-3.35-5.08-9.55-6.64-14.87a35.87 35.87 0 0 0-11.65-17.55c-3.5-2.85-8.49-5.07-12.44-2.86-1.67.93-2.89 2.55-4.6 3.4-2.22 1.11-4.76.77-7.29.63a3.61 3.61 0 0 0-1.16-.92c-2.38-1.14-6.83.2-9.07 1.13a8.48 8.48 0 0 0-4.47 3.76 7.05 7.05 0 0 0-.49 1.4c-.3 1.2-.4 2.46-.77 3.66a10.35 10.35 0 0 1-1.25 2.54c-1.49 2.21-3.68 4.06-5.19 6.31a14.55 14.55 0 0 0-1.68 3.4 29.52 29.52 0 0 0-1.23 10.94c.2 5 .8 10-.41 14.85-.38 1.49-.92 3-1.37 4.44-.08.24-.17.5-.24.74l-.18.72c-.08.35-.16.7-.22 1.05-.12.72-.19 1.45-.24 2.19v1.1c0 .74 0 1.48-.09 2.22a16.58 16.58 0 0 1-.44 3.27 14.42 14.42 0 0 1-1.42 3.45c-.69 1.24-1.5 2.41-2.3 3.57l-2.68 3.89c-3.18-.25-6.42-.2-9.14 1.33a12 12 0 0 0-5.21 6.78 2 2 0 0 0-.61.35c-.55.46-1.15 2.11-1.73 4.19v.05c-1.18 4.29-2.25 10.39-2.6 11.75-.8 3-1.43 6.13-2 9.23-1.14 6.35-1.92 12.76-3 19.12-.22 1.3-1.65 9.91-3.06 14.85 0 .13-.06.25-.1.37-.55 1.84-1.08 3.09-1.54 3.09h1.4c-.25.59-.49 1.2-.71 1.81a37.73 37.73 0 0 0-1.13 3.84.31.31 0 0 0 0 .08 75.91 75.91 0 0 0-1.67 12.18 498.79 498.79 0 0 0-.2 71.7 36.61 36.61 0 0 0 1.79 10.41 15.14 15.14 0 0 0 2.81 4.69l.18.2c-.11.48-.21.94-.33 1.42q-5 22.11-11.7 43.82c-.1.31-.19.63-.3.94-.27.9-.55 1.81-.83 2.71-.17.58-.35 1.16-.51 1.75-.12.38-.22.76-.32 1.12a51.33 51.33 0 0 0-1.61 8 52.82 52.82 0 0 0 .82 15h31.86c0-.22-.06-.43-.08-.65-.62-4.46-1.37-9.1.05-13.36.91-2.75 2.65-5.13 4.09-7.64 3-5.17 4.68-11 7.41-16.27 4-7.7 10.11-14.41 12.93-22.5q.45-1.28.78-2.61c1.94 5.77 1.93 11.62 2.29 17.68a221.25 221.25 0 0 0 7.46 45.35h32.17c-.53-8.42-1.28-16.85-1.75-25.24a65.41 65.41 0 0 1 .27-13.78 71.08 71.08 0 0 1 2.52-9.82c3.63-11.64 7.47-23.33 8.67-35.45s2.06-29.24-4.61-39.48a3.37 3.37 0 0 0-.43-.55 9.18 9.18 0 0 0 0-2.77c-1.81-16.67-11.35-32.67-8.59-49.22a62.87 62.87 0 0 1 3.91-12.64c4.06-10.25 8.58-20.76 11.06-31.43a48.13 48.13 0 0 0 2.34-9.22 51.22 51.22 0 0 0 .76-8.39 19.61 19.61 0 0 0-.27-3.19c3.33 1.16 6.59 3.44 10.13 3.89a8.8 8.8 0 0 0 .91.08 1.32 1.32 0 0 1-.12-.2 4.39 4.39 0 0 1-.67-2.18 6.72 6.72 0 0 0 1.9.15 7.27 7.27 0 0 0 3.53-1.09 22.21 22.21 0 0 1-6.26-23.19zm-97 149.53c-.54 1.14-1 2.29-1.5 3.47v-.13a27.58 27.58 0 0 1-.93-14.48c.08-.3.15-.6.22-.89s.2-.76.3-1.15a10.62 10.62 0 0 0 5.29 7c-.29.47-.58.93-.86 1.4a53.46 53.46 0 0 0-2.57 4.78zm4.47-33.07c-.9 1.78-2 3.45-3.09 5.16a215.54 215.54 0 0 0 3.3-26.68c.09-1.45.16-2.91.22-4.36a62 62 0 0 1 1.41 10.18c.36 4.49.71 9.13-.81 13.37a17.43 17.43 0 0 1-1.08 2.33z",
    transform: "translate(-108 -65.54)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M621.24 254.9a8.33 8.33 0 0 0-4.41 3.73c-.75 1.56-.72 3.38-1.23 5-1.08 3.48-4.32 5.77-6.33 8.8-2.73 4.11-3 9.35-2.87 14.29s.79 10-.41 14.76c-.58 2.33-1.58 4.56-2 6.93-.49 2.88-.08 5.89-.79 8.72a22.52 22.52 0 0 1-3.67 7l-6.39 9.36a73.18 73.18 0 0 0 8.44-2.55 15.16 15.16 0 0 1-4.56 6.91l4.62-5.6a13.14 13.14 0 0 1 3.44-3.26c1.7-1 3.71-1.12 5.61-1.5 3.67-.75 7.33-2.63 9.13-5.92 2.39-4.39.86-9.91 2.2-14.73 1-3.52 3.39-6.42 5.05-9.67 3.78-7.34 3.55-16 4.73-24.17a75.06 75.06 0 0 0 1.3-10.43c0-2.59-.26-7.52-3-8.83-2.3-1.1-6.68.23-8.86 1.16zM663.1 493.62c-1.18 12.05-5 23.67-8.52 35.24a68.75 68.75 0 0 0-2.48 9.76 66 66 0 0 0-.27 13.7c.45 8.1 1.16 16.22 1.67 24.33h-31.78a223 223 0 0 1-7.13-44.31c-.33-5.51-.34-10.85-1.81-16.11-.13-.49-.28-1-.44-1.47-2.24 9.23-9.17 16.5-13.47 25-2.69 5.27-4.36 11-7.28 16.17-1.42 2.5-3.14 4.87-4 7.59-1.39 4.21-.66 8.78-.06 13.17h-31.38a51.62 51.62 0 0 1-.69-14.14 56.57 56.57 0 0 1 2.17-10c.16-.59.34-1.17.51-1.75.28-.9.56-1.81.83-2.71q6.79-22.23 11.84-45c.1-.47.21-1 .31-1.43q.86-3.9 1.66-7.81c1.83-8.95 3.58-18.19 6.9-26.64.21-.51.41-1 .63-1.53.47-1.13 1-2.25 1.53-3.34a49.74 49.74 0 0 1 2.62-4.67 43.49 43.49 0 0 1 2.95-4.15c17.57-1.52 35.81-10.29 53-6.22a25.17 25.17 0 0 1 8.06 3.3c2.94 1.9 7.49.79 9.72 3.22a4.69 4.69 0 0 1 .42.55c6.51 10.18 5.67 27.2 4.49 39.25z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M618.41 313.73c-.38 4.3-1.28 9.36-5.19 11.16-2.21 1-4.79.65-7.19 1-4.54.74-8.26 4.23-10.37 8.31s-2.82 8.73-3.31 13.3c-.61 5.72-.81 11.93 2.33 16.75 2.54 3.91 6.93 6.28 11.43 7.49a31.88 31.88 0 0 0 26.62-4.94 59.82 59.82 0 0 0 9.8-9.68c6.52-7.59 13.09-15.91 14.42-25.83.16-1.13.15-2.49-.78-3.16a3.4 3.4 0 0 0-2.09-.41l-6.26.11c-1.59 0-3.38 0-4.45-1.19s-1-2.7-1-4.16l.48-18.13a2.56 2.56 0 0 0-.41-1.83 2.39 2.39 0 0 0-1.44-.62c-3.44-.58-7 0-10.42-.94-3.21-.88-8.24-4.57-10.6-.78-1.98 3.28-1.24 9.9-1.57 13.55z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M618.41 313.73c-.38 4.3-1.28 9.36-5.19 11.16-2.21 1-4.79.65-7.19 1-4.54.74-8.26 4.23-10.37 8.31s-2.82 8.73-3.31 13.3c-.61 5.72-.81 11.93 2.33 16.75 2.54 3.91 6.93 6.28 11.43 7.49a31.88 31.88 0 0 0 26.62-4.94 59.82 59.82 0 0 0 9.8-9.68c6.52-7.59 13.09-15.91 14.42-25.83.16-1.13.15-2.49-.78-3.16a3.4 3.4 0 0 0-2.09-.41l-6.26.11c-1.59 0-3.38 0-4.45-1.19s-1-2.7-1-4.16l.48-18.13a2.56 2.56 0 0 0-.41-1.83 2.39 2.39 0 0 0-1.44-.62c-3.44-.58-7 0-10.42-.94-3.21-.88-8.24-4.57-10.6-.78-1.98 3.28-1.24 9.9-1.57 13.55z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 634.16,
    cy: 288.66,
    r: 23.9,
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M608.52 355.11c-3.86.08-8.22-1-10.09-4.39-1.28-2.32-1.06-5.14-.82-7.77l1.39-14.72c-3.75-.39-7.78-.73-11.06 1.13-4.34 2.46-5.91 7.92-6.4 12.89-.91 9.33.57 18.75.06 28.11-.43 7.88-2.24 16 .07 23.5 1 3.14 2.62 6 3.67 9.15a51 51 0 0 1 2 12.31c.36 4.46.7 9.07-.79 13.29-1.25 3.54-3.68 6.51-5.42 9.83-2.85 5.48-3.46 12.86.82 17.31 3.91 4.07 10.4 4.24 15.89 3s10.76-3.74 16.39-4c9.94-.42 18.8 6 28.53 8.12a8.65 8.65 0 0 0 4 .14 9.73 9.73 0 0 0 3.2-1.75l5.32-3.82a7.38 7.38 0 0 0 2.57-2.61 6.83 6.83 0 0 0 .33-3.73c-1.78-16.57-11.16-32.49-8.45-48.94a63.93 63.93 0 0 1 3.85-12.56c6.75-17.26 14.84-35.2 12.22-53.55-.58-4.06-1.77-8.22-4.57-11.22s-7.53-4.5-11.16-2.58-4.94 6.2-6.51 9.93a45.69 45.69 0 0 1-14.23 18.28c-2.64 2-5.82 4.6-9.27 4.7-3.76.13-7.7-.12-11.54-.05z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M573.86 392.24c-5.79 6.43-6.93 15.69-7.57 24.33a503.19 503.19 0 0 0-.19 71.28 36.18 36.18 0 0 0 1.77 10.35c1.23 3.29 3.55 6.34 6.81 7.65 2.09.84 5 .62 6-1.43.87-1.88-.42-4-1.4-5.79a21.07 21.07 0 0 1-2.11-13.7c1.19.88 1.6 2.43 1.94 3.87l1.87 8c2.57-.38 3.53-3.51 3.94-6.07.75-4.64 1.47-9.57-.39-13.88-1-2.3-2.65-4.26-3.64-6.55-2.5-5.78-3.49-12.38-1.88-18.47a216.12 216.12 0 0 0 7-63 26.78 26.78 0 0 1-12.15 3.41z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M568.39 398.74a88.17 88.17 0 0 1 21.14 2.79c.91-4.5.47-9.16 0-13.73l-3-31.42c-.22-2.34.2-23.7-4.3-19.93-1.66 1.39-3.75 13.89-4.27 15.9-.78 3-1.4 6.09-2 9.17-1.12 6.32-1.89 12.69-3 19-.26 1.84-2.96 18.23-4.57 18.22z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M625.05 258.28a4.12 4.12 0 0 1 .49-2.14 3.62 3.62 0 0 1 2.56-1.36c3.45-.53 7.23.86 10.35-.72 1.69-.85 2.88-2.45 4.53-3.38 3.88-2.19 8.78 0 12.22 2.85a35.59 35.59 0 0 1 11.46 17.45c1.52 5.28 2.14 11.45 6.52 14.78 1.81 1.38 4.15 2.14 5.47 4a10.21 10.21 0 0 1 1.45 5c.45 4 .83 8.13-.22 12-.79 2.9-2.35 5.54-3.31 8.39a22.24 22.24 0 0 0 6.07 23.17 7.14 7.14 0 0 1-5.35.93 4.61 4.61 0 0 0 .78 2.36c-5.6-.17-10.46-5.62-15.93-4.43-4.17.9-6.5 5.22-9.62 8.14-4 3.78-10.25 5.36-15.29 3.12s-8.1-8.6-6-13.68c2.43-5.79 9.94-8.07 12.55-13.79 2-4.43.52-9.59.95-14.44.37-4.16 2.17-8 3.29-12.06s1.48-8.62-.8-12.12c-2.41-3.71-7-5.16-11.26-6.54-9.44-3.13-11.27-7.92-10.91-17.53z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M630.92 344.18c-.68-3.34-1.35-6.89-.15-10.07 2.23-5.94 9.54-7.79 14.6-11.61a19.76 19.76 0 0 0 6.5-8.66c.92-2.42 1-5.73-1.22-7a5.4 5.4 0 0 0-2.82-.49c-7.88.18-15.1 4.47-21.14 9.53-3.52 2.95-6.86 6.33-8.61 10.57a35.19 35.19 0 0 0-2 9.5l-1.23 10.72a163.49 163.49 0 0 0-1.43 18.49 83.3 83.3 0 0 0 .66 10.59c.32 2.5.79 5.07 2.25 7.12 2.73 3.81 8 4.66 12.66 4.79a21.83 21.83 0 0 0 5.3-.33c7.78-1.69 13.69-12.6 7.8-19.34-2.51-2.86-6.27-2.93-7.69-6.86-1.9-5.21-2.4-11.5-3.48-16.95z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M637.25 346.05l-6.15 10.05a4.52 4.52 0 0 0-.75 1.73c-.17 1.31.8 2.46 1.58 3.53 5.3 7.23 4 17.19 2.36 26a47.18 47.18 0 0 0 32.45-38.22c.78-5.25 2-13.91-2.64-17.33-11.23-8.23-21.58 5.65-26.85 14.24z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M606 325.92c2.4-.38 5 0 7.19-1 3.91-1.8 4.81-6.86 5.19-11.16 0-.39.06-.83.07-1.29a34.82 34.82 0 0 0-4.54-4 22.74 22.74 0 0 0-4.65-2l-4.26-1.56a25.14 25.14 0 0 0-1 3.55c-.49 2.88-.08 5.89-.79 8.72a22.52 22.52 0 0 1-3.67 7l-6.39 9.36c1.16-.28 2.3-.59 3.45-.92a14.4 14.4 0 0 1 9.4-6.7z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M760.63 465.08S719 444.71 727 460.21s33.63 17.25 33.63 17.25z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    fill: "#192534",
    d: "M720.33 450.46l-1.33 2.66 31.44 16.38 1.33-2.65-31.44-16.39z"
  }), React.createElement("path", {
    d: "M789.41 464.19s-2.66 6.65-12.84 2.66a47.51 47.51 0 0 0-18.16-3.54s-6.64 13.28 0 18.15 34.54 13.29 35.43 8.42-4.43-25.69-4.43-25.69z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M789.41 464.19s-2.66 6.65-12.84 2.66a47.51 47.51 0 0 0-18.16-3.54s-6.64 13.28 0 18.15 34.54 13.29 35.43 8.42-4.43-25.69-4.43-25.69z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 810,
    cy: 359.01,
    r: 27.9,
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M789.19 411.27v-4.87s6.64-8.41 14.17-2.65-4 25.68-4 25.68l-8.36-4.87z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M813.77 739.78l-8.42 9.75s15.06 3.54 15.5 4 15.5-1.33 15.5-1.33L835 736.68zM845.65 730.78l4 16.83 17.27-4 8.86-13.73s-6.2-4.43-8-8.86-22.13 9.76-22.13 9.76z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M847.87 599.85l-1.77 28.78a22.31 22.31 0 0 0-1.33 15.06c2.21 8.41 1.33 43.84 1.33 43.84s-3.1 48.71-4 51.81-4 4.43-1.77 7.09c0 0-29.67 6.64-29.23-4.43 0 0 4-7.53 4-14.61s1.33-46.06 1.33-46.06l10.62-99.64z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M847.87 599.85l-1.77 28.78a22.31 22.31 0 0 0-1.33 15.06c2.21 8.41 1.33 43.84 1.33 43.84s-3.1 48.71-4 51.81-4 4.43-1.77 7.09c0 0-29.67 6.64-29.23-4.43 0 0 4-7.53 4-14.61s1.33-46.06 1.33-46.06l10.62-99.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M801.37 526.63s-12.4 73.52-12 97 6.64 36.75 6.64 36.75l33.22 45.17a7.83 7.83 0 0 0 .88 7.53c2.66 4 3.55 7.09 3.55 9.74s5.31 4.43 7.08 8 6.64 13.73 18.16 5.76 15.5-11.07 13.28-17.27-7.08-10.18-7.52-13.28-10.15-10.67-11.48-19.57-23.91-45.17-23.91-45.17 22.58-45.17 23.47-53.58 3.54-12 3.54-12 13.73-26.13 6.2-38.08-61.11-11-61.11-11zM820.85 751.3s-12-1.77-12-8.42l-16.39 9.3s-32.33 1.33-18.6 12.4 74-3.54 74-3.54-4.42-14.58-8.86-15.94c0 0-8 6.64-18.15 6.2z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M820.85 751.3s-12-1.77-12-8.42l-16.39 9.3s-32.33 1.33-18.6 12.4 74-3.54 74-3.54-4.42-14.58-8.86-15.94c0 0-8 6.64-18.15 6.2z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M874.88 727.68s-12.88 18.16-24.36 13.29c0 0-6.68-6.81-9.09-3s-7.73 14.47-13.49 15.8-26.13 8-6.2 13.29 57.57-12.4 61.11-19.49-7.97-19.89-7.97-19.89z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M793 395.71a33.86 33.86 0 0 1 3.69 6.79 11 11 0 0 1 .18 7.58c-.43 1.13-1.12 2.15-1.57 3.27a11 11 0 0 0 .24 8.12 20 20 0 0 0 4.83 6.71 4.16 4.16 0 0 0 2.22 1.34 3.6 3.6 0 0 0 3.07-1.66c2-2.54 2.41-5.92 3.08-9.07s1.85-6.54 4.64-8.16a13.11 13.11 0 0 1 4.92-1.31l6.29-.81a5.54 5.54 0 0 0 3.24-1.15c1.27-1.23 4.52 2.68 3.47 1.26s-6.18-8.37-7.74-9.2a9.63 9.63 0 0 1-4.06-3.3 10.44 10.44 0 0 1-1-4.93c-.14-3.19-.43-6.52-2.13-9.22a13.33 13.33 0 0 0-8.05-5.39 39.56 39.56 0 0 0-9.85-.89 16 16 0 0 0-6.17.76 6.94 6.94 0 0 0-3.13 2.42c-1.39 2-3 5.46-2 7.84 1.32 3.15 3.93 6.14 5.83 9z",
    fill: "#ffc1c7"
  }), React.createElement("circle", {
    cx: 802.25,
    cy: 367.21,
    r: 25.68,
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M835.91 412.82a17.14 17.14 0 0 0-17.3-9.67c-7.35.8-15.41 2.75-16.36 7.46-1.77 8.86-4.87 18.6-4.87 11.07s-.17-12.87-.17-12.87-6.91-5.73-8.24-2.19-2.66 17.27-2.22 27 .89 39.85.89 39.85.89 30.12 3.54 38.09a39.15 39.15 0 0 1 1.33 16.38s-3.54 3.55 4.87 4.87 12.85-6.2 26.57 3.1 43.85 14.17 45.17 8-8.41-31.89-5.75-50.93-27.46-80.16-27.46-80.16z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M806.68 525.31s-6.64 10.62-8.85 11.07-3.1 4.87 2.21 2.65 3.54-2.21 3.54-2.21-4.43 7.09 3.1 8.41 11.52 2.23 11.52-1.77-.89-14.61-.89-14.61z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M808.9 410.61a27.39 27.39 0 0 0-3.1 27.46c6.64 15.94 22.14 43.84 22.14 43.84s7.08 4 4 7.08-3.54 2.22-5.75 4.87-17.72 22.15-17.72 22.15-8.85 5.31-6.2 11.51 13.29 8.86 13.29 8.86a7.63 7.63 0 0 1 8-4.87c6.2.44 17.27-8.86 17.27-8.86s17.27-29.67 19-32.77 4-4 .89-12-25.72-64.61-35.44-67.27-16.38 0-16.38 0z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M810.67 409.72a27.42 27.42 0 0 0-3.1 27.46c6.64 15.94 22.14 43.84 22.14 43.84s7.09 4 4 7.09-3.55 2.21-5.76 4.87-17.71 22.14-17.71 22.14-8.86 5.31-6.2 11.51 13.27 8.83 13.27 8.83a7.64 7.64 0 0 1 8-4.87c6.2.44 17.27-8.86 17.27-8.86s17.27-29.67 19.05-32.77 4-4 .88-11.95-25.68-64.66-35.43-67.32-16.41.03-16.41.03z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 816.87,
    cy: 361.01,
    r: 26.79,
    fill: "#ff6584"
  }), React.createElement("ellipse", {
    cx: 942.58,
    cy: 403.3,
    rx: 8.64,
    ry: 13.73,
    transform: "rotate(-42.44 804.095 509.597)",
    fill: "#ff6584"
  }), React.createElement("ellipse", {
    cx: 792.29,
    cy: 346.62,
    rx: 19.04,
    ry: 8.86,
    fill: "#ff6584"
  }), React.createElement("ellipse", {
    cx: 796.28,
    cy: 372.97,
    rx: 3.99,
    ry: 5.98,
    fill: "#ffc1c7"
  }), React.createElement("path", {
    fill: "#3c354c",
    d: "M698 767.91h286v1H698z"
  }), React.createElement("path", {
    d: "M260.06 334.46c-6.11 2.32-20.32 2.58-26.62 2.57h-3.11l-4.05-8.23 4.05-6.87s3.7-1 8.64-1.91c7.28-1.31 17.24-2.34 22 .61 7.94 4.83 7.03 10.76-.91 13.83z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M233.44 336.98h-3.11l-4.05-8.23 4.05-6.87s3.7-1 8.64-1.91c-3.97 2.93-13.62 9.3-5.53 17.01z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M166.42 235.83l1.79-2.05s9.19 14.55 10.16 20 2.19 11.81 2.19 11.81 2.34 7.14 3.85 10.3 2.88 6.17 3 7.55-.55 4.39 2.33 6.31 3.57 7.14 3.57 7.14 10.44 10.16 15.93 10.44 21.28 3 20.73 5.76 6.59 4.4 9.47 5.08-18.53 8.93-6 19.5c0 0-8 1.65-8.79 3.57s-9.19-1.1-9.19-1.1-1.79-4.26-8-4.53-9.33-3-9.33-3.43-6.18-3.85-9.61-4.81-8-1.37-8.11-2.33-20.59-89.25-20.59-89.25z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M166.42 235.83l1.79-2.05s9.19 14.55 10.16 20 2.19 11.81 2.19 11.81 2.34 7.14 3.85 10.3 2.88 6.17 3 7.55-.55 4.39 2.33 6.31 3.57 7.14 3.57 7.14 10.44 10.16 15.93 10.44 21.28 3 20.73 5.76 6.59 4.4 9.47 5.08-18.53 8.93-6 19.5c0 0-8 1.65-8.79 3.57s-9.19-1.1-9.19-1.1-1.79-4.26-8-4.53-9.33-3-9.33-3.43-6.18-3.85-9.61-4.81-8-1.37-8.11-2.33-20.59-89.25-20.59-89.25z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M210.42 472.08H168c-2.19-3.94-4-7.86-3.62-9.19.92-3-.42-7.82-.42-7.82s-1.32-2.28-2.92-5c-1.95-3.34-4.31-7.35-5.11-8.6-1-1.59-3.44-8.35-4.8-12.24-.58-1.65-1-2.79-1-2.79s-1.65 30.27-3.09 33.36c-.62 1.33-1.39 6.66-2 12.28h-33.3a11.86 11.86 0 0 0-.89-2.8c-1.54-3 1.54-13.29 1.54-13.29s-3-20-2.88-23.06-2.57-12.26-2.57-12.26-2.68-4.73-2.06-6.18-2.06-5.14-1.34-6.79-.62-6.69-2-9.68c-.69-1.53-1.53-5.75-2.2-9.49-.08-.42-.15-.83-.22-1.23-.51-3-.87-5.45-.87-5.45l5.42-4.37.23-.19 11.34-9.13 15.45-4.05.94-.25 26-6.82 11.13-3.58 3.12-1 1.78-.58 15.55 24.5s1.33 2.12 2.64 4.73l.39.79c1.22 2.55 2.31 5.39 2.12 7.15a9.85 9.85 0 0 0 1.44 6.41s9.27 29.35 9.06 37.8 3.3 27 3.3 27 2.25 7 2.26 11.82z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M147 236.86c-.66-.27-45.45-18.77-39.28-22.44 3.66-2.19 8.16-11.43 11.25-18.67 2.16-5.06 3.62-9.14 3.62-9.14s35.95-6.38 23.08 15.66a40.56 40.56 0 0 0-4.53 10.85c-3.69 15.01 5.54 23.46 5.86 23.74z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M145.65 202.27a40.56 40.56 0 0 0-4.53 10.85 25.12 25.12 0 0 1-21.23-14.92 24.24 24.24 0 0 1-.94-2.45c2.16-5.06 3.62-9.14 3.62-9.14s35.95-6.38 23.08 15.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M168 187.23a25.11 25.11 0 1 1-1-7 25.13 25.13 0 0 1 1 7z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M192.24 381.91c-2.63 2.39-3.65 6.94-3.65 6.94s-12.35 8.45-11.53 3.09-6.38-27-6.38-27l.82 29.52s-39.54-1.85-42.42-4.73-19.77-8.45-19.77-8.45-5.17 4.15-9.93 7.3c-.63-3.55-1.09-6.68-1.09-6.68l17-13.7 42.42-11.12 16-5.15 15.55 24.51a62.45 62.45 0 0 1 2.98 5.47z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M193.54 379.58c-3.3 2.06-4.53 7.62-4.53 7.62s-12.36 8.45-11.54 3.09-6.38-27-6.38-27l.82 29.45s-39.54-1.85-42.42-4.73-19.77-8.45-19.77-8.45-14.62 11.74-17.3 10.71 4.73-21 4.73-21l7.62-117s-2.05-34.8 1-36a4.25 4.25 0 0 0 1.3-.81c2-1.83 2.65-5.54 2.82-8.66.21-3.71 5.15-1.86 5.15-1.86l-2.88 3.71 25.52 15.52.22.13a29.34 29.34 0 0 1 3.07-1.39c2.26-.87 5.26-1.68 7.23-.87a6.94 6.94 0 0 1 2.7 2.43 30.49 30.49 0 0 1 3.48 7l9.26 15.65s4.74 20.8 4.74 21.63 1.44 19.77 3.09 21.83 3.3 12.35 2.68 15.44 1 14.62 1 14.62c6.79 5.56 10.29 24.51 10.29 24.51s10.71 21.21 11.54 23.69-.15 8.68-3.44 10.74z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M137.71 224.99c-2.51 3.71-9.73 8.92-9.73 8.92l-20.88-17.63c2-1.83 2.65-5.54 2.82-8.66.21-3.71 5.15-1.85 5.15-1.85l-.6.77a3.32 3.32 0 0 0 .9 4.87z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M137.71 224.17c-2.51 3.7-9.73 8.92-9.73 8.92l-20.88-17.63c2-1.83 2.65-5.54 2.82-8.66.21-3.71 5.15-1.86 5.15-1.86l-.6.77a3.32 3.32 0 0 0 .9 4.87z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M147.36 226.94c-2.7 3.23-6.51 6.88-6.34 5s-2.28-5.88-3.84-7.69a11.37 11.37 0 0 1 7.48.21 6.94 6.94 0 0 1 2.7 2.48z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M147.77 225.71c-2.69 3.22-6.51 6.88-6.34 5.05s-2-4.8-3.59-6.61c2.26-.87 5.26-1.69 7.23-.88a6.91 6.91 0 0 1 2.7 2.44z",
    fill: "#f2f2f2"
  }), React.createElement("circle", {
    cx: 141.02,
    cy: 241.19,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 153.51,
    cy: 285.67,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 167.66,
    cy: 330.7,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 168.07,
    cy: 379.72,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 148.3,
    cy: 262.19,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 159.42,
    cy: 307.91,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 170.27,
    cy: 352.81,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("circle", {
    cx: 167.79,
    cy: 385.21,
    r: 1.65,
    fill: "#192534"
  }), React.createElement("path", {
    d: "M107.11 216.46s.27-2.48-3.3 1.78-10.29 8-10.29 8-15.24 10.71-16.07 15.66-5.76 26.36-3.16 33.5 22.52 41.32 22.52 41.32-5.22 6.18-4 13.46 2.75 17.3 2.06 19.49.82 7.69-1.51 9.61-4.81 5.22 2.47 9.62c0 0 1.37 3.7.14 4.53s18.26 9.33 25.95 4.8 21.55-40.78 21.83-48.88-4.24-34.89-6.75-41.21-9.89-30.89-13-36.38-16.89-35.3-16.89-35.3z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M106.28 216.46s.28-2.48-3.29 1.78-10.3 8-10.3 8-15.24 10.71-16.06 15.66-5.77 26.36-3.16 33.5S96 316.7 96 316.7s-5.22 6.18-4 13.46 2.74 17.3 2.06 19.49.82 7.69-1.51 9.61-4.81 5.22 2.47 9.62c0 0 1.37 3.7.13 4.53s18.26 9.33 26 4.8 21.56-40.78 21.83-48.88-4.25-34.87-6.72-41.19-9.89-30.89-13.05-36.38-16.93-35.3-16.93-35.3z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M100.79 239.82s11.81 13 11.4 21.69c0 0 .14-14-11.4-21.69zM117.13 261.23c0 .42 8 30.07 7.55 33.78S127 309.7 127 309.7l3.7-1s-2.88-15.24-3.43-20.87-10.14-26.6-10.14-26.6zM120.29 345.81c-.28.41-18.81 21.42-13.59 22.93s13.59-22.93 13.59-22.93zM105.05 340.46c-.41.28-7.41 15.11-8.24 11.13s6 10.84 7.14-.14zM140.64 221.14s7.66-4.68 17.27 7.32c0 0 7 4 9.06 4.94s4.39 26.5 4.39 26.5 4.53 11 3.3 17.3 3.57 28 3.57 28 8 39 7.69 40.09-8.1-12.22-8-18.81-6.59-27.18-7.55-28.42-7.55-36.52-7.55-36.52-5.35-15-8.79-19.91-7.68-14.28-9.47-15.93a18.08 18.08 0 0 0-4.26-2.74z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M140.54 221.14s8.58-4.66 18.19 7.28c0 0 7 4 9.06 4.94s4.4 26.5 4.4 26.5 4.53 11 3.29 17.3 3.57 28 3.57 28 8 39 7.69 40.09-8.1-12.22-8-18.81-6.59-27.18-7.55-28.42-7.56-36.52-7.56-36.52-5.35-15-8.78-19.91-7.69-14.28-9.48-15.93a17 17 0 0 0-5.08-2.74z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M178.23 306.95s16.34-10.7 24.23-5.42 20.8 12.77 8.1 18.19-30.27 4.4-30.27 4.4z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M166.87 410.27c-2.44 5.23-4.44 31.47-5.81 39.79-1.95-3.34-4.31-7.34-5.11-8.59-1-1.59-3.44-8.35-4.8-12.24 1.55-3.77 5.85-14.58 5.85-18.55 0-4.84 7.83-10.91 7.83-10.91a9.08 9.08 0 0 1 2.04 10.5zM167 180.27a6.18 6.18 0 0 1-1.22.51c-1.93.52-3.82-.78-5.54-1.82s-4.08-1.81-5.56-.46c-1.94 1.75-.54 5.51-2.53 7.21-1.27 1.08-3.27.71-4.68 1.6s-1.82 2.81-2.18 4.49-1.06 3.57-2.7 4.06-3.15-.58-4.77-.52c-.33 0-.72.05-1-.19a1.07 1.07 0 0 1-.16-.75 15.89 15.89 0 0 0-.52-6 5.68 5.68 0 0 0-4.18-3.91c-2.9-.45-5.33 2.08-7 4.46a73.66 73.66 0 0 0-4.87 7.84c-.07.14-.15.33-.24.55A25.13 25.13 0 1 1 167 180.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M125 188.58c1.7-2.38 4.13-4.91 7-4.46a5.7 5.7 0 0 1 4.18 3.91 15.89 15.89 0 0 1 .52 6 1 1 0 0 0 .17.75c.22.24.61.2.94.19 1.61-.06 3.22 1 4.77.52s2.34-2.39 2.7-4.07.73-3.57 2.18-4.48 3.41-.52 4.68-1.6c2-1.7.58-5.46 2.52-7.22 1.49-1.34 3.86-.57 5.57.47s3.61 2.34 5.54 1.82a19.27 19.27 0 0 0 1.88-.8c3.05-1.16 7 .81 9.52-1.28a7.34 7.34 0 0 0 1.9-3.29 21 21 0 0 0 1.39-5.25 7 7 0 0 0-1.4-5.11c-1.63-1.93-4.39-2.41-6.48-3.83a16 16 0 0 1-4.14-4.88 18.14 18.14 0 0 0-4-5c-1.71-1.3-4.13-1.92-6-.95a6.83 6.83 0 0 1-2 .94 4 4 0 0 1-2.18-.6c-7.15-3.36-15.46-2.77-23.29-1.77a30.4 30.4 0 0 0-9.17 2.22 11 11 0 0 0-6.19 6.78c-.64 2.42-.15 5-.92 7.43-.52 1.62-1.59 3-2.2 4.59-1.67 4.34.33 9.11 1.18 13.69.92 5 .45 10.41 2.58 15.13.42.93.88 2.56 1.93 1.94.78-.45 1.53-3.09 2-3.91a75.32 75.32 0 0 1 4.82-7.88z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M79.79 269.06l-3.71 10.57s8.79 32.68 12.91 39.54 10.16 15.66 10.16 15.66a37.64 37.64 0 0 0 22 2.74c11.81-2.33 46.27-8.51 46.27-8.51s2.89.55 4.4-1.65 9.33-3.29 9.33-3.29 9.06-13.18-2.06-18.68c0 0-1.37 3-7.27 1s-7.69 1.64-7.69 1.64-9.61 1.93-15 1.24-18.67-1-20-2.06a1.76 1.76 0 0 0-2.48.14s-3.29-1.24-4.39-2.47-2.61 1.37-2.61 1.37-1.92-1.1-1.37-2.47-1.79-6.59-1.79-6.59a13.49 13.49 0 0 1-.41-6.18c.69-2.75-3.43-12.63-3.43-12.63a17.24 17.24 0 0 1 .55-4.95c.69-2.47-5.22-7.41-5.22-7.41s-5.76-28-18-18.81-10.19 21.8-10.19 21.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M79 269.06l-3.7 10.57s8.78 32.68 12.9 39.54 10.16 15.66 10.16 15.66a37.67 37.67 0 0 0 22 2.74c11.81-2.33 46.27-8.51 46.27-8.51s2.88.55 4.39-1.65 9.34-3.29 9.34-3.29 9.06-13.18-2.06-18.68c0 0-1.37 3-7.28 1s-7.69 1.64-7.69 1.64-9.61 1.93-15 1.24-18.67-1-20.05-2.06a1.75 1.75 0 0 0-2.47.14s-3.29-1.24-4.39-2.47-2.61 1.37-2.61 1.37-1.92-1.1-1.37-2.47-1.79-6.59-1.79-6.59a13.34 13.34 0 0 1-.41-6.18c.69-2.75-3.43-12.63-3.43-12.63a17.24 17.24 0 0 1 .55-4.95c.68-2.47-5.22-7.41-5.22-7.41s-5.77-28-18-18.81S79 269.06 79 269.06z",
    fill: "#192534"
  }), React.createElement("path", {
    d: "M168.21 313.27c-.14 1-3.16 4.81-2.06 5.49s2.88.28 1.23 2.47-1.51 5.5-.41 5.08 2.88-5.35 2.88-7.27-1.64-5.77-1.64-5.77zM127.43 311.07s-.83 9.61-7.55 12.36 7.55-12.36 7.55-12.36zM113.42 307.78c-.41.14-9.61 5.08-5.49 8s5.49-8 5.49-8zM112.87 300.91s-13.45 2.75-8.92 5.08 8.92-5.08 8.92-5.08z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M136.21 185.7a5.71 5.71 0 0 0-4.18-3.92c-2.9-.44-5.33 2.09-7 4.47a75.32 75.32 0 0 0-4.87 7.84c-.44.82-1.19 3.45-2 3.91-1 .61-1.51-1-1.93-1.94-2.13-4.73-1.66-10.14-2.58-15.14-.54-2.92-1.55-5.91-1.77-8.83-.32 3.59 1.09 7.37 1.77 11 .92 5 .45 10.41 2.58 15.13.42.93.88 2.56 1.93 1.94.78-.45 1.53-3.08 2-3.9a73.27 73.27 0 0 1 4.84-7.8c1.7-2.39 4.13-4.92 7-4.47a5.7 5.7 0 0 1 4.18 3.91 10.85 10.85 0 0 1 .55 3.09 14.19 14.19 0 0 0-.52-5.29zM179.1 172.66a7.38 7.38 0 0 1-1.9 3.3c-2.51 2.09-6.47.12-9.52 1.28-.64.24-1.22.62-1.88.8-1.93.51-3.82-.79-5.54-1.83s-4.08-1.81-5.57-.46c-1.94 1.76-.53 5.52-2.52 7.22-1.27 1.07-3.27.71-4.68 1.59s-1.82 2.82-2.18 4.49-1.06 3.58-2.7 4.07-3.16-.59-4.77-.53c-.33 0-.72.06-.94-.19a.59.59 0 0 1-.12-.2c0 .55 0 1.1-.05 1.65a1 1 0 0 0 .17.75c.22.24.61.2.94.19 1.61-.06 3.22 1 4.77.53s2.34-2.4 2.7-4.07.73-3.58 2.18-4.49 3.41-.52 4.68-1.6c2-1.69.58-5.46 2.52-7.21 1.49-1.35 3.86-.58 5.57.46s3.61 2.34 5.54 1.82a19.19 19.19 0 0 0 1.88-.79c3.05-1.17 7 .81 9.52-1.29a7.29 7.29 0 0 0 1.9-3.29 21 21 0 0 0 1.39-5.25 9.45 9.45 0 0 0 0-1.84 22.61 22.61 0 0 1-1.39 4.89z"
  })));
};

UndrawShopping.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawShopping;