function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAboutMe = _props => {
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
    viewBox: "0 0 1167.52 756.03",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 588.17,
    y1: 804.7,
    x2: 588.17,
    y2: 185.7,
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
    x1: 567.7,
    y1: 1179.83,
    x2: 567.7,
    y2: 1173.83,
    gradientTransform: "translate(74.47 -1004.13)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 588.52,
    y1: 693.03,
    x2: 588.52,
    y2: 483.16,
    xlinkHref: "#prefix__a"
  })), React.createElement("ellipse", {
    cx: 560.76,
    cy: 725.03,
    rx: 541,
    ry: 31,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M1007.26 726.42a17.73 17.73 0 0 1-1.73 2.67q-8.64-6.09-17.57-11.93c.12-.25.25-.51.39-.76a16.84 16.84 0 0 1 6-6.52c3.29-2 7-2.48 10-.86s4.76 4.94 4.94 8.78a16.84 16.84 0 0 1-2.03 8.62z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1022.06,
    cy: 778.26,
    rx: 14.01,
    ry: 10.7,
    transform: "rotate(-62.09 954.228 755.767)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1030.07,
    cy: 763.12,
    rx: 14.01,
    ry: 10.7,
    transform: "rotate(-62.09 962.242 740.629)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1038.09,
    cy: 747.99,
    rx: 14.01,
    ry: 10.7,
    transform: "rotate(-62.09 970.256 725.491)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1046.11,
    cy: 732.85,
    rx: 14.01,
    ry: 10.7,
    transform: "rotate(-62.09 978.27 710.353)",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M1049.31 538.52a51.89 51.89 0 0 1-.78-7l27 9.08-27-14a51.4 51.4 0 0 1 18.23-36.45l26.11 37.86-20.31-42.07a51.28 51.28 0 1 1 48 90.35 51.19 51.19 0 0 1 .8 11l-41.15-.32 40.52 6.67a51.33 51.33 0 0 1-29.84 38.68 51.28 51.28 0 1 1-71.23-37.72 51.29 51.29 0 0 1 29.67-56z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1115.4 609.4a51 51 0 0 1-24.53 22.88 51.28 51.28 0 1 1-71.23-37.72c-1.99-10.93 98.46 9.76 95.76 14.84z",
    opacity: 0.1
  })), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M975.13 423.95a31.64 31.64 0 0 1-2.25 4.64q-15.11-8.06-30.61-15.66c.14-.43.3-.88.47-1.31a27.2 27.2 0 0 1 8.3-11.66c4.87-3.9 10.74-5.37 16-3.38s8.62 7 9.67 13.11a27.21 27.21 0 0 1-1.58 14.26z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 985.03,
    cy: 463.85,
    rx: 22.69,
    ry: 17.33,
    transform: "rotate(-69.16 924.738 439.635)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 994.89,
    cy: 437.94,
    rx: 22.69,
    ry: 17.33,
    transform: "rotate(-69.16 934.602 413.715)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1004.76,
    cy: 412.02,
    rx: 22.69,
    ry: 17.33,
    transform: "rotate(-69.16 944.462 387.801)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1014.62,
    cy: 386.11,
    rx: 22.69,
    ry: 17.33,
    transform: "rotate(-69.16 954.333 361.886)",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M1005.25 113.7a83.36 83.36 0 0 1-2.65-11.18l45.22 9.21-46.16-17.18a83.11 83.11 0 0 1 21.91-62l49.56 55.46-41-63.53a83 83 0 1 1 95.09 135.6 83.42 83.42 0 0 1 3.46 17.51l-66.17 7.68 66.43 2.65a83.07 83.07 0 0 1-40.25 68.09 83 83 0 1 1-122-46.42 83 83 0 0 1 36.52-95.93z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1125.55 214.4a82.59 82.59 0 0 1-34.86 41.61 83 83 0 1 1-122-46.42c-5.33-17.12 160.18-3.89 156.86 4.81z",
    opacity: 0.1
  })), React.createElement("g", {
    opacity: 0.2
  }, React.createElement("path", {
    d: "M178.38 510.16a37.29 37.29 0 0 0 2 5.8q19-7.28 38.43-14c-.11-.53-.22-1.08-.36-1.62a32.41 32.41 0 0 0-8.07-15c-5.18-5.32-11.89-7.92-18.34-6.34s-11.2 7-13.35 14a32.49 32.49 0 0 0-.31 17.16z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 206.83,
    cy: 545.22,
    rx: 20.61,
    ry: 26.98,
    transform: "rotate(-13.72 -100.56 576.534)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 199.01,
    cy: 513.19,
    rx: 20.61,
    ry: 26.98,
    transform: "rotate(-13.72 -108.346 544.523)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 191.2,
    cy: 481.16,
    rx: 20.61,
    ry: 26.98,
    transform: "rotate(-13.72 -116.173 512.508)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 183.38,
    cy: 449.12,
    rx: 20.61,
    ry: 26.98,
    transform: "rotate(-13.72 -124 480.492)",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M188.58 139.63a97.86 97.86 0 0 0 4.78-12.8l-54.71 4.18 57-13.46a98.81 98.81 0 0 0-16.71-76.43l-66.68 58.24 57.77-68.92a98.72 98.72 0 1 0-132.2 146 99.32 99.32 0 0 0-6.67 20.16l76.95 18.81-78.78-6.67a98.81 98.81 0 0 0 37.43 86.27 98.71 98.71 0 1 0 150.76-36.8 98.71 98.71 0 0 0-29-118.58z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M31.76 240.72a98.29 98.29 0 0 0 35 54.29 98.71 98.71 0 1 0 150.76-36.8c8.88-19.45-188.37-28.2-185.76-17.49z",
    opacity: 0.1
  })), React.createElement("path", {
    d: "M1072.54 185.7H103.8a8.64 8.64 0 0 0-8.63 8.66v592.88a17.43 17.43 0 0 0 17.4 17.46h951.2a17.43 17.43 0 0 0 17.4-17.46V194.36a8.65 8.65 0 0 0-8.63-8.66z",
    transform: "translate(-16.24 -71.99)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M1061.01 150.52v561.24a17.26 17.26 0 0 1-17.25 17.25H100.27a17.26 17.26 0 0 1-17.26-17.26V150.52z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M1061.01 125.58v24.94h-978v-24.94a8.56 8.56 0 0 1 8.56-8.56h960.88a8.56 8.56 0 0 1 8.56 8.56z",
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 98.51,
    cy: 133.52,
    r: 4,
    fill: "#fa5959",
    opacity: 0.8
  }), React.createElement("circle", {
    cx: 109.51,
    cy: 133.52,
    r: 4,
    fill: "#fed253",
    opacity: 0.8
  }), React.createElement("circle", {
    cx: 120.51,
    cy: 133.52,
    r: 4,
    fill: "#8ccf4d",
    opacity: 0.8
  }), React.createElement("path", {
    transform: "rotate(90 670.04 128.59)",
    fill: "url(#prefix__b)",
    d: "M640.17 169.7h4v6h-4z"
  }), React.createElement("path", {
    fill: "#ededf4",
    d: "M307.93 199.71h94v10h-94zM307.93 228.71h528v10h-528zM307.93 257.71h528v10h-528zM307.93 286.71h528v10h-528zM307.93 315.71h528v10h-528zM408.76 371.03h326v252h-326z"
  }), React.createElement("path", {
    d: "M645.2 521.09c-.42 0-.84.06-1.27.07a5.58 5.58 0 0 0 .14-1.78 17 17 0 0 0-2-7.21 31.3 31.3 0 0 0-2.48-3.76c-2.72-3.76-5.24-7.6-8.23-11.15a17.93 17.93 0 0 1-3.17-4.67 22.83 22.83 0 0 0-1.08-2.71 5.83 5.83 0 0 0-5.45-2.65 8.65 8.65 0 0 0-5.52 2.92c-.84.9-1.53 2.29-.83 3.31s2.22 1.15 2.31 2.27c0 .6 0 1.58-.61 1.77a10.87 10.87 0 0 0-3.06 1.34 3.61 3.61 0 0 0-1.61 2.8c1.73.26 3.18-1.19 4.75-2a8.77 8.77 0 0 1 6.28-.23 5.88 5.88 0 0 1 2.16 1.09 7.61 7.61 0 0 1 1.4 1.88 20.07 20.07 0 0 1 3.46 9.38l.88 5.62a36.49 36.49 0 0 0-3.88.52 24.37 24.37 0 0 1-10.33-.7c-3.5-1-7-2.82-10.61-2-1.69.37-3.23 1.31-4.94 1.58a13.53 13.53 0 0 1-4-.21l-2.75-.44c-.09-.23-.16-.47-.23-.71a20.74 20.74 0 0 1-.78-6.17 11 11 0 0 0 9.4-15.59 9.33 9.33 0 0 0 3.55-3.53l-.7-.13.66-1a1.18 1.18 0 0 1-.19-1.87 3.77 3.77 0 0 0-1.89-.42c.21-.39-.13-.87-.54-1a4.7 4.7 0 0 0-1.3-.08 6.37 6.37 0 0 1-1.86-.43c-4.27-1.47-8.9-2.76-13.25-1.53a16.57 16.57 0 0 0-5.29 2.78 6.91 6.91 0 0 0-2.82 9.07 23.48 23.48 0 0 1 1.41 5.09 16.16 16.16 0 0 1-.55 4.83 19.69 19.69 0 0 0 2.91.65 16.5 16.5 0 0 1-2.89 5.92 23.52 23.52 0 0 1-2 2.21h-.12a48.59 48.59 0 0 1-6 .74c-2.12 0-4.2-.8-6.31-.65a17.11 17.11 0 0 0-3.67.83 56.23 56.23 0 0 1-16.91 2.26l-.69.07.64-4.08a20.07 20.07 0 0 1 3.46-9.38 7.61 7.61 0 0 1 1.4-1.88 5.92 5.92 0 0 1 2.17-1.09 8.74 8.74 0 0 1 6.27.23c1.57.77 3 2.22 4.76 2a3.64 3.64 0 0 0-1.62-2.8 10.87 10.87 0 0 0-3.06-1.34c-.58-.19-.66-1.17-.61-1.77.09-1.12 1.68-1.36 2.31-2.28s0-2.4-.83-3.31a8.66 8.66 0 0 0-5.52-2.91 5.81 5.81 0 0 0-5.44 2.65 21.29 21.29 0 0 0-1.09 2.71 17.93 17.93 0 0 1-3.17 4.67c-3 3.55-5.51 7.39-8.23 11.15a33.31 33.31 0 0 0-2.48 3.75 17.24 17.24 0 0 0-2 7.22 5.64 5.64 0 0 0 .14 1.79 1.15 1.15 0 0 0-.11.45 2.08 2.08 0 0 0 .78 1.4c1.53 1.54 3.14 3.13 5.2 3.79a31.94 31.94 0 0 0 3.89.67c3.16.57 6.07 2.4 9.28 2.39 2.21 0 4.39-.88 6.57-.57 3 .41 5.16 2.85 7 5.22a18 18 0 0 1 3.45 6.31c.71 2.79.27 5.93 1.76 8.39a5.71 5.71 0 0 1 .86 1.66 5.56 5.56 0 0 1-.61 2.72c-1.26 3.87 1.5 8 1.21 12-.14 1.95-1 3.79-1.09 5.74-.15 2.51.87 5.32-.53 7.41.85-.44 1.71-.83 2.59-1.18-4.2 12.31-8 25-7.71 37.94.22 8.39 2 17.63-2.82 24.52a9.68 9.68 0 0 0-1.61 2.75c-.38 1.35 0 2.78.25 4.16.89 6-2.35 11.91-2.57 18a36.29 36.29 0 0 0 .36 5.61l1.18 10.14a7.36 7.36 0 0 0-3.22 1.6c-1.24 1-2.33 2.64-1.75 4.14.47 1.21 1.85 1.79 3.12 2.09a7.82 7.82 0 0 1 3.62 1.37 13.88 13.88 0 0 0 1.09 1.08 4 4 0 0 0 2.42.45c1.53-.06 3-.19 4.56-.4a1.81 1.81 0 0 0 .91-.29 2 2 0 0 0 .51-1.5 19.87 19.87 0 0 0-.19-4.56c-.06-.29-.14-.57-.22-.86a17.75 17.75 0 0 0 1.11-4c.31-2 .36-4.09.49-6.14.3-5.22 1-10.4 1.8-15.58l1-6.66c.31-2.19.63-4.38 1-6.57a206.62 206.62 0 0 1 8.62-34.9c.85-2.43 2.3-5.28 4.87-5.35l1.53 3c2 3.76 3.22 7.93 4.74 11.88 2 5.19 1.32 11.25 4 16.13.44.81 1 1.58 1.33 2.43a14 14 0 0 1 .82 4.07l1.77 18c.8 8.09 1.66 16.4 5.29 23.67a9.12 9.12 0 0 0 .8 1.34 23.25 23.25 0 0 0-.05 3.64 1.43 1.43 0 0 0 1.42 1.79c1.51.2 3 .33 4.55.39a4 4 0 0 0 2.42-.45 11.2 11.2 0 0 0 1.1-1.08 7.78 7.78 0 0 1 3.61-1.37c1.27-.29 2.65-.87 3.12-2.09.59-1.5-.51-3.13-1.75-4.14a7 7 0 0 0-3.56-1.65 5.92 5.92 0 0 1-1.62-.13 8 8 0 0 0 .12-2 10 10 0 0 1-.1-2.38 14.13 14.13 0 0 1 .82-2.34c1.15-3.54-1.3-7.14-2.16-10.76-1.15-4.82.56-9.87.25-14.82-.48-7.77-5.9-15.06-4.46-22.71 1.15-6.12.17-12.41-.92-18.54l-4-22.81a25.28 25.28 0 0 0-1.45-5.41 12.75 12.75 0 0 0 2.18-.58c1-2.44.83-5.13.53-7.75s-1-5.18-1.35-7.78a51.29 51.29 0 0 1-.52-6.31 25.43 25.43 0 0 1 .44-6.22 29.92 29.92 0 0 1 1.87-5.23 92.87 92.87 0 0 1 7-14c4.11-.32 8.09-.67 12.19-1a16.93 16.93 0 0 0 2.92-.39 36.93 36.93 0 0 1 3.73-1.07 5 5 0 0 0 1.38-.27c.9-.41 1.45-1.56 2.44-1.6a4.24 4.24 0 0 0 1.12 0c.44-.14.66-.62 1-1 .62-.69 1.63-.83 2.44-1.28a3.54 3.54 0 0 0 1.34-4.33z",
    transform: "translate(-16.24 -71.99)",
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 576.94,
    cy: 427.16,
    r: 11,
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M564.24 440.85a27.41 27.41 0 0 1-3.75 3.79 29.79 29.79 0 0 0 21.5 3.54c-.27-.75-1.25-.86-1.94-1.24a4.19 4.19 0 0 1-1.7-2.68 20.94 20.94 0 0 1-.64-8.11 5 5 0 0 0 0-2 4.29 4.29 0 0 0-2.07-2.28 20.41 20.41 0 0 0-5-2.25c-1.82-.54-2.86-.79-2.93 1.33a16.85 16.85 0 0 1-3.47 9.9zM615.28 447.77l-1.12-7.1a26.39 26.39 0 0 0-.89-4.22 27.21 27.21 0 0 0-2.56-5.12 7.56 7.56 0 0 0-1.4-1.87 5.88 5.88 0 0 0-2.16-1.09 8.71 8.71 0 0 0-6.26.24c-1.57.76-3 2.2-4.75 1.95a3.58 3.58 0 0 1 1.62-2.79 10.57 10.57 0 0 1 3-1.34c.57-.18.66-1.16.61-1.76-.09-1.11-1.68-1.35-2.31-2.26s0-2.39.82-3.3a8.61 8.61 0 0 1 5.51-2.89 5.78 5.78 0 0 1 5.44 2.63 21.16 21.16 0 0 1 1.09 2.7 18 18 0 0 0 3.16 4.65c3 3.53 5.51 7.35 8.22 11.09a34.61 34.61 0 0 1 2.48 3.74 16.91 16.91 0 0 1 2 7.18 4.47 4.47 0 0 1-.33 2.27 3.52 3.52 0 0 1-3 1.72 10.63 10.63 0 0 1-3.59-.72l-4.36-1.47a2.84 2.84 0 0 1-1.4-.77 1.1 1.1 0 0 1 .18-1.47zM528.13 449.34l1.11-7.1a27.55 27.55 0 0 1 .9-4.22 26.62 26.62 0 0 1 2.56-5.12 7.07 7.07 0 0 1 1.39-1.86 5.66 5.66 0 0 1 2.16-1.09 8.74 8.74 0 0 1 6.27.23c1.57.76 3 2.2 4.75 1.95a3.6 3.6 0 0 0-1.62-2.79 10.69 10.69 0 0 0-3-1.34c-.57-.18-.66-1.16-.61-1.76.09-1.11 1.67-1.35 2.31-2.26s0-2.39-.83-3.29a8.6 8.6 0 0 0-5.51-2.9 5.79 5.79 0 0 0-5.44 2.63 21.11 21.11 0 0 0-1.08 2.7 18.21 18.21 0 0 1-3.16 4.65c-3 3.53-5.51 7.35-8.23 11.09a34 34 0 0 0-2.47 3.74 17.07 17.07 0 0 0-2 7.18 4.53 4.53 0 0 0 .34 2.28 3.53 3.53 0 0 0 3.05 1.71 10.34 10.34 0 0 0 3.58-.72l4.37-1.43a2.77 2.77 0 0 0 1.39-.77 1.1 1.1 0 0 0-.23-1.51z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M607.33 611.42c1.24 1 2.33 2.63 1.75 4.12-.48 1.21-1.85 1.78-3.12 2.08a7.88 7.88 0 0 0-3.61 1.36 11 11 0 0 1-1.09 1.03 3.93 3.93 0 0 1-2.42.45c-1.52-.06-3-.19-4.55-.39a1.81 1.81 0 0 1-.91-.29 1.93 1.93 0 0 1-.5-1.49 19.13 19.13 0 0 1 .18-4.54 6.5 6.5 0 0 1 2.19-3.87c1.16-.9 4.68-3.57 6-1.86.35.46.21 1.09.7 1.47s1.26.17 1.82.24a7 7 0 0 1 3.56 1.69zM539.76 611.94c-1.24 1-2.33 2.63-1.75 4.12.47 1.21 1.84 1.79 3.11 2.08a7.84 7.84 0 0 1 3.61 1.36 11.2 11.2 0 0 0 1.1 1.08 4 4 0 0 0 2.41.45c1.52-.06 3-.19 4.55-.4a1.78 1.78 0 0 0 .91-.29 1.93 1.93 0 0 0 .51-1.49 19.59 19.59 0 0 0-.19-4.53 6.45 6.45 0 0 0-2.19-3.88c-1.15-.9-4.67-3.57-6-1.86-.35.46-.21 1.1-.71 1.47s-1.25.17-1.82.24a7.06 7.06 0 0 0-3.54 1.65z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M556.76 505.24c-4.51 13-8.89 26.45-8.55 40.24.22 8.35 2 17.55-2.81 24.4a9.54 9.54 0 0 0-1.61 2.74c-.38 1.34 0 2.76.24 4.14.9 6-2.33 11.86-2.56 17.92a36 36 0 0 0 .36 5.58l1.25 10.68c.42 3.66 5.14 5.16 8.78 5.67a13.61 13.61 0 0 0 3.09-7.19c.31-2 .36-4.07.48-6.1.31-5.2 1.06-10.36 1.8-15.51l1-6.63c.32-2.18.63-4.36 1-6.54a205.66 205.66 0 0 1 8.63-34.63c.85-2.43 2.3-5.26 4.86-5.33l1.53 2.94c2 3.73 3.21 7.89 4.73 11.82 2 5.17 1.31 11.19 4 16.06.44.8 1 1.57 1.32 2.41a13.9 13.9 0 0 1 .82 4l1.77 17.88c.8 8.05 1.65 16.32 5.28 23.55a5.47 5.47 0 0 0 1.67 2.2c1.48 1 3.55.49 5-.55a8.53 8.53 0 0 0 3.46-7.38 11.07 11.07 0 0 1-.1-2.37 15.76 15.76 0 0 1 .82-2.33c1.16-3.52-1.29-7.1-2.16-10.7-1.15-4.8.56-9.82.26-14.75-.48-7.74-5.89-15-4.46-22.61 1.15-6.09.17-12.35-.91-18.45l-4.05-22.7c-.64-3.58-1.6-7.62-4.79-9.37a11.9 11.9 0 0 0-5.83-1c-8.27 0-16.17 1.15-24.32 1.91z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M628.96 449.91a14.3 14.3 0 0 1-8.4-1.74 16.86 16.86 0 0 0-3.09-1.62c-2-.65-4.2-.08-6.3.23a24.6 24.6 0 0 1-10.31-.7c-3.5-1-7-2.81-10.6-2-1.69.37-3.22 1.3-4.93 1.57a13.12 13.12 0 0 1-4-.21l-11.4-1.78a31.18 31.18 0 0 0-7.82-.56 50.62 50.62 0 0 1-6 .75c-2.11 0-4.19-.8-6.3-.66a17.16 17.16 0 0 0-3.66.83 56.33 56.33 0 0 1-16.87 2.25 25.33 25.33 0 0 0-12.69 4.4 2 2 0 0 0-1 1.39 2.05 2.05 0 0 0 .79 1.38c1.52 1.54 3.13 3.12 5.19 3.78a31.43 31.43 0 0 0 3.88.66c3.15.58 6.06 2.39 9.26 2.39 2.21 0 4.38-.88 6.56-.57 3 .41 5.15 2.83 7 5.19a18.17 18.17 0 0 1 3.45 6.28c.7 2.78.26 5.9 1.75 8.35a5.78 5.78 0 0 1 .86 1.65 5.5 5.5 0 0 1-.61 2.71c-1.26 3.85 1.5 7.92 1.21 12-.14 1.93-1 3.77-1.09 5.7-.14 2.51.87 5.3-.53 7.38a35.85 35.85 0 0 1 17.45-3.81 21.88 21.88 0 0 1 3 .28 42 42 0 0 1 5.68 1.58c4.18 1.33 8.78 2.28 12.9.76 1-2.43.83-5.11.52-7.71s-.95-5.16-1.34-7.75a50.81 50.81 0 0 1-.52-6.28 25.19 25.19 0 0 1 .44-6.19 29.34 29.34 0 0 1 1.87-5.2 91.61 91.61 0 0 1 7-14c4.1-.33 8.07-.68 12.17-1a18.85 18.85 0 0 0 2.91-.39 37.45 37.45 0 0 1 3.72-1.06 4.91 4.91 0 0 0 1.38-.28c.9-.41 1.46-1.55 2.44-1.58a4.69 4.69 0 0 0 1.12 0c.44-.13.65-.62 1-1 .62-.69 1.63-.83 2.44-1.27a3.52 3.52 0 0 0 1.47-4.15z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M578.85 431.13a2 2 0 0 0 2.27.14 2.82 2.82 0 0 0 .84-1.54 35.41 35.41 0 0 0 .87-3.8 4.17 4.17 0 0 1 .5-1.59c.73-1.12 2.31-1.18 3.54-1.69a9.2 9.2 0 0 0 3.63-3.56l-.69-.14.65-1a1.16 1.16 0 0 1-.18-1.85 3.69 3.69 0 0 0-1.9-.43c.21-.38-.13-.86-.54-1a4.27 4.27 0 0 0-1.29-.07 6.38 6.38 0 0 1-1.86-.44c-4.26-1.46-8.88-2.75-13.22-1.52a16.44 16.44 0 0 0-5.29 2.77 6.87 6.87 0 0 0-2.81 9 23.28 23.28 0 0 1 1.4 5.05 16.08 16.08 0 0 1-.54 4.82 15.72 15.72 0 0 0 3.65.71 5.24 5.24 0 0 0 3.5-1c1-.86 1.56-2.19 2.38-3.27a3.39 3.39 0 0 1 2.89-1.52c1.11.17 1.31 1.3 2.2 1.93zM549.93 620.01h-11.71a1.53 1.53 0 0 0 0 3h2.34v19.87h-40.07a1.11 1.11 0 0 0-.89-.54h-11.7a1.53 1.53 0 0 0 0 3h2.34v20.41h-38.69a1.24 1.24 0 0 0-1.1-1.08h-11.69a1.52 1.52 0 0 0 0 3h1.17v21H400.6a1 1 0 0 0-.48-.13h-11.7a1.53 1.53 0 0 0 0 3h1.17v20h-38.83a1.12 1.12 0 0 0-1-.68h-11.7a1.53 1.53 0 0 0 0 3h1.17v22.15h264.53v-116z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M173.02 236.31a27.69 27.69 0 0 0-3.91-4.18 3.36 3.36 0 0 1 .37-5.35c.48-.31.95-.64 1.42-1 5.46-4.15 8.22-9.72 6.15-12.45s-8.18-1.57-13.64 2.58a21 21 0 0 0-1.81 1.51 3.35 3.35 0 0 1-5.24-1 28.28 28.28 0 0 0-2.69-4.28c-4.86-6.4-11.38-9.63-14.57-7.21s-1.85 9.58 3 16a27.58 27.58 0 0 0 3.15 3.5 3.38 3.38 0 0 1-.74 5.39c-6 3.43-9.39 8.6-7.69 11.57s7.92 2.6 13.87-.82a26.13 26.13 0 0 0 2.66-1.77 3.38 3.38 0 0 1 5.1 1.24 26.26 26.26 0 0 0 3 5c4.85 6.4 11.38 9.63 14.57 7.21s1.85-9.53-3-15.94zM881.34 409.12a27.22 27.22 0 0 0 2.87-4.95 3.34 3.34 0 0 1 5.21-1.2c.44.36.9.71 1.37 1.06 5.56 4 11.7 5 13.7 2.25s-.88-8.28-6.44-12.3q-1-.71-2-1.29a3.35 3.35 0 0 1-.55-5.31 27.17 27.17 0 0 0 3.3-3.82c4.71-6.51 5.89-13.69 2.65-16s-9.7 1-14.41 7.55a28.2 28.2 0 0 0-2.43 4 3.38 3.38 0 0 1-5.37.87c-5-4.69-11-6.47-13.31-4s-.17 8.33 4.84 13a24.14 24.14 0 0 0 2.47 2 3.38 3.38 0 0 1 .29 5.24 26.85 26.85 0 0 0-3.93 4.39c-4.71 6.51-5.89 13.69-2.64 16s9.67-.97 14.38-7.49z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 886.46,
    cy: 740.19,
    rx: 33.8,
    ry: 6.5,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 737.43,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 731.13,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 724.84,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 718.54,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 712.24,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 705.95,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 885.9,
    cy: 699.65,
    rx: 3.94,
    ry: 5.15,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M900.63 656.56a19.94 19.94 0 0 0 1.46-2.16l-10.33-1.7 11.18.09a18.84 18.84 0 0 0 .36-14.94l-15 7.78 13.84-10.17a18.85 18.85 0 1 0-31.14 21.1 19.29 19.29 0 0 0-2.15 3.44l13.43 7-14.32-4.8a18.89 18.89 0 0 0 3 17.7 18.85 18.85 0 1 0 29.64 0 18.87 18.87 0 0 0 0-23.31z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M866.96 668.21a18.83 18.83 0 0 0 4 11.66 18.85 18.85 0 1 0 29.64 0c2.55-3.21-33.64-13.77-33.64-11.66z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 270.46,
    cy: 741.74,
    rx: 15.3,
    ry: 2.94,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 740.49,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 737.64,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 734.79,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 731.94,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 729.09,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 726.24,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 270.21,
    cy: 723.39,
    rx: 1.78,
    ry: 2.33,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M276.87 703.88a8.08 8.08 0 0 0 .67-1l-4.68-.77h5.06a8.54 8.54 0 0 0 .78-3.57 8.43 8.43 0 0 0-.62-3.19l-6.79 3.52 6.26-4.6a8.53 8.53 0 1 0-14.09 9.55 8.57 8.57 0 0 0-1 1.55l6.07 3.16-6.48-2.18a8.54 8.54 0 0 0 1.38 8 8.54 8.54 0 1 0 13.41 0 8.52 8.52 0 0 0 0-10.55z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M261.63 709.15a8.53 8.53 0 0 0 1.83 5.28 8.54 8.54 0 1 0 13.41 0c1.15-1.42-15.24-6.24-15.24-5.28z",
    opacity: 0.1
  }));
};

UndrawAboutMe.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAboutMe;