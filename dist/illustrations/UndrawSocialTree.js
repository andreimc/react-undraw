function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSocialTree = _props => {
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
    viewBox: "0 0 598 771",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 299.55,
    y1: 771,
    x2: 299.55,
    y2: 569.5,
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
    x1: 301.36,
    y1: 657.58,
    x2: 301.36,
    y2: 407.94,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 300.76,
    y1: 547.78,
    x2: 300.76,
    y2: 314.44,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 299.55,
    y1: 437.99,
    x2: 299.55,
    y2: 229.65,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 299.55,
    y1: 336.63,
    x2: 299.55,
    y2: 154.46,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 300.76,
    y1: 238.9,
    x2: 300.76,
    y2: 76.01,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 601.76,
    y1: 189.91,
    x2: 601.76,
    y2: 64.5,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 408,
    y1: 285.37,
    x2: 408,
    y2: 221.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 730.75,
    y1: 59.19,
    x2: 730.75,
    y2: 13.98,
    gradientTransform: "rotate(33.39 250.993 140.5)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 192,
    y1: 284.37,
    x2: 192,
    y2: 220.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 492.15,
    y1: 335.49,
    x2: 492.15,
    y2: 300.79,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 489,
    y1: 482.37,
    x2: 489,
    y2: 418.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 723.24,
    y1: 473.87,
    x2: 723.24,
    y2: 430.23,
    gradientTransform: "rotate(-15.31 994.926 242.002)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 154,
    y1: 385.37,
    x2: 154,
    y2: 321.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 445.85,
    y1: 420.96,
    x2: 445.85,
    y2: 379,
    gradientTransform: "rotate(-2.38 911.517 205.801)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 448,
    y1: 383.37,
    x2: 448,
    y2: 319.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 729,
    y1: 417.25,
    x2: 773.16,
    y2: 417.25,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 32,
    y1: 709.37,
    x2: 32,
    y2: 645.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 334.15,
    y1: 763.49,
    x2: 334.15,
    y2: 728.79,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 534,
    y1: 602.37,
    x2: 534,
    y2: 538.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 816.52,
    y1: 653.54,
    x2: 816.52,
    y2: 611.59,
    gradientTransform: "rotate(-2.38 911.517 205.801)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 113,
    y1: 486.37,
    x2: 113,
    y2: 422.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 595.06,
    y1: 389.36,
    x2: 595.06,
    y2: 344.16,
    gradientTransform: "rotate(33.39 250.993 140.5)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 64,
    y1: 601.37,
    x2: 64,
    y2: 537.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 345,
    y1: 635.25,
    x2: 389.16,
    y2: 635.25,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__z",
    x1: 566,
    y1: 709.37,
    x2: 566,
    y2: 645.37,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__A",
    x1: 737.31,
    y1: 714.1,
    x2: 737.31,
    y2: 670.46,
    gradientTransform: "rotate(-15.31 994.926 242.002)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M265.77 569.5h67.57V771h-67.57z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M270.59 569.5h57.92v197.88h-57.92z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M301.36 407.94L29.28 657.58h544.16L301.36 407.94z"
  }), React.createElement("path", {
    fill: "#009688",
    d: "M301.36 414.49L40.14 650.9h522.45L301.36 414.49z"
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M300.76 314.44L64.27 547.78h472.98L300.76 314.44z"
  }), React.createElement("path", {
    fill: "#009688",
    d: "M300.76 320.79L73.92 544.61h453.67L300.76 320.79z"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M299.55 229.65L117.36 437.99h364.38L299.55 229.65z"
  }), React.createElement("path", {
    fill: "#009688",
    d: "M299.55 239.16L125.81 433.23H473.3L299.55 239.16z"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M299.55 154.46L163.21 336.63h272.68L299.55 154.46z"
  }), React.createElement("path", {
    fill: "#009688",
    d: "M299.55 159.84L169.24 333.95h260.62L299.55 159.84z"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M300.76 76.01L206.72 238.9H394.8L300.76 76.01z"
  }), React.createElement("path", {
    fill: "#009688",
    d: "M300.76 80.84L210.9 236.49h179.72L300.76 80.84z"
  }), React.createElement("path", {
    d: "M601.76 64.5c14.78 51.26 14.78 51.26 65.93 47.9-38 29.64-38 29.64-25.18 77.51-42.39-42.94-42.39-42.94-81.5 0 17.75-47.87 17.75-51.16-25.18-77.51 46.17.07 49.5-1.57 65.93-47.9z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    d: "M300.76 5.33c13.53 46.9 13.53 46.9 60.33 43.83-34.78 27.12-34.78 27.12-23 70.92-38.79-39.29-38.79-39.29-74.57 0 16.24-43.8 16.24-46.81-23-70.92 42.2.06 45.21-1.44 60.24-43.83z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 408,
    cy: 253.37,
    r: 32,
    fill: "url(#prefix__h)"
  }), React.createElement("circle", {
    cx: 408,
    cy: 253.37,
    r: 28,
    fill: "#3b5998"
  }), React.createElement("path", {
    d: "M711 306.3l.06 4.34 7-.1-.76 7.83-6.08.09.31 21.72-9.56.14-.31-21.72-4.34.06-.11-7.82 4.34-.06-.06-4.34s-.9-8.24 6.81-9.66l9.56-.14.1 7-4.34.06a2.56 2.56 0 0 0-2.62 2.6z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__i)"
  }), React.createElement("path", {
    d: "M412.86 240.58l.06 4.34 7-.1-.76 7.83-6.08.09.31 21.72-9.56.14-.31-21.72-4.34.06-.11-7.82 4.34-.06-.06-4.34s-.9-8.24 6.81-9.66l9.56-.14.1 7-4.34.06a2.56 2.56 0 0 0-2.62 2.6z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 192,
    cy: 252.37,
    r: 32,
    fill: "url(#prefix__j)"
  }), React.createElement("circle", {
    cx: 192,
    cy: 252.37,
    r: 28,
    fill: "#00aced"
  }), React.createElement("path", {
    d: "M509.08 306.72l4.23-.85s-3.55 4-4.23 4.23a17 17 0 0 0 0 2.54C501 347.5 471 332.1 471 332.1c10.92.25 11.85-4.23 11.85-4.23-6.35-.93-7.62-5.08-7.62-5.08a2.61 2.61 0 0 0 3.38-.85c-6.85-1.78-5.92-8.46-5.92-8.46a8.8 8.8 0 0 0 4.15 1.61c-.76-.93-7.19-8.63-3.3-12.61 0 0 4.74 8.46 17.18 9.22l.85-.17a6.64 6.64 0 0 1-.17-1.86 8.88 8.88 0 0 1 8.88-8.88c5.92 0 7.19 3.38 7.19 3.38l4.23-2.54c-.08.01-.51 4.24-2.62 5.09z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__k)"
  }), React.createElement("path", {
    d: "M209.77 239.68l4.23-.85s-3.55 4-4.23 4.23a17 17 0 0 0 0 2.54c-8.12 34.86-38.08 19.46-38.08 19.46 10.92.25 11.85-4.23 11.85-4.23-6.35-.93-7.62-5.08-7.62-5.08a2.61 2.61 0 0 0 3.38-.85c-6.85-1.78-5.92-8.46-5.92-8.46a8.8 8.8 0 0 0 4.15 1.61c-.76-.93-7.19-8.63-3.3-12.61 0 0 4.74 8.46 17.18 9.22l.85-.17a6.64 6.64 0 0 1-.17-1.86 8.88 8.88 0 0 1 8.88-8.88c5.92 0 7.19 3.38 7.19 3.38l4.23-2.54c-.08.01-.51 4.24-2.62 5.09z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 489,
    cy: 450.37,
    r: 32,
    fill: "url(#prefix__l)"
  }), React.createElement("circle", {
    cx: 489,
    cy: 450.37,
    r: 28,
    fill: "#0077b5"
  }), React.createElement("path", {
    d: "M801.63 533.13l.24-14.83s-.78-3.12-3.73-3-3.94.54-5.33 2.11l-.26 15.59-7.57-.12.39-23.45 7.57.12-.06 3.48s2.58-4.8 7.64-4.34c4.69.38 8.12 3.31 8.77 9.45h.15l-.25 15.13zm-25.29-26.9a4.54 4.54 0 1 1 4.61-4.46 4.55 4.55 0 0 1-4.61 4.46zm3.35 26.54l-7.57-.12.39-23.45 7.57.12z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__m)"
  }), React.createElement("path", {
    d: "M501.49 466.04l.24-14.83s-.78-3.12-3.73-3-3.94.54-5.33 2.11l-.26 15.59-7.57-.12.39-23.45 7.57.12-.06 3.48s2.58-4.8 7.64-4.34c4.69.38 8.12 3.31 8.77 9.45h.15l-.25 15.13zm-25.29-26.9a4.54 4.54 0 1 1 4.61-4.46 4.55 4.55 0 0 1-4.61 4.46zm3.35 26.54l-7.57-.12.39-23.45 7.57.12z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 154,
    cy: 353.37,
    r: 32,
    fill: "url(#prefix__n)"
  }), React.createElement("circle", {
    cx: 154,
    cy: 353.37,
    r: 28,
    fill: "#bd081c"
  }), React.createElement("path", {
    d: "M470 414.31c-.74 4.48-1.16 10.55-10.38 13 0 0-5.39 1.65-7.31-2.22-.91 4.32-1.84 8.31-2.47 9.34a52.37 52.37 0 0 1-3.95 6s.44-7.58.46-9.26c0-2.6 1.92-14.36 1.92-14.36s-2.6-8.12 3-9.36c0 0 4.57-1.28 3.56 4.89 0 0-.76 4.06-1.74 8.72l.44.57a4.72 4.72 0 0 0 3.46 2.38c2.27.16 8.06-4.11 7.93-11.25s-1.72-9.08-8-10.59-11.43 1.73-13.14 7.26c-1.92 6.29-.1 7.73 1.22 9.19l-.66 4.23s-6.12-1.76-6.22-8.14 3.11-16.09 16.11-16.63 16.49 11.67 15.77 16.23z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__o)"
  }), React.createElement("path", {
    d: "M170.56 347.23c-.74 4.48-1.16 10.55-10.38 13 0 0-5.39 1.65-7.31-2.22-.91 4.32-1.84 8.31-2.47 9.34a52.37 52.37 0 0 1-3.95 6s.44-7.58.46-9.26c0-2.6 1.92-14.36 1.92-14.36s-2.6-8.12 3-9.36c0 0 4.57-1.28 3.56 4.89 0 0-.76 4.06-1.74 8.72l.44.57a4.72 4.72 0 0 0 3.46 2.38c2.27.16 8.06-4.11 7.93-11.25s-1.72-9.08-8-10.59-11.43 1.73-13.14 7.26c-1.92 6.29-.1 7.73 1.22 9.19l-.66 4.23s-6.12-1.76-6.22-8.14 3.11-16.09 16.11-16.63 16.5 11.66 15.77 16.23z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 448,
    cy: 351.37,
    r: 32,
    fill: "url(#prefix__p)"
  }), React.createElement("circle", {
    cx: 448,
    cy: 351.37,
    r: 28,
    fill: "#d34836"
  }), React.createElement("path", {
    d: "M771.78 417.71h-6v6a1.41 1.41 0 0 1-1.38 1.38h-.92a1.41 1.41 0 0 1-1.38-1.38v-6h-6a1.41 1.41 0 0 1-1.38-1.38v-.92a1.41 1.41 0 0 1 1.38-1.38h6v-6a1.41 1.41 0 0 1 1.38-1.38h.92a1.41 1.41 0 0 1 1.38 1.38v6h6a1.41 1.41 0 0 1 1.38 1.38v.92a1.41 1.41 0 0 1-1.38 1.38zM751 401.52a9.2 9.2 0 0 1 1.93 5.61 9.72 9.72 0 0 1-6.26 8.83c.28.92 1.2 1.93 3.5 3.59 4.42 3.22 4.6 9.2 4.6 9.2v.46c0 4.78-5.8 8.74-12.88 8.74S729 434 729 429.21c0-4.6 5.24-8.37 12-8.74v-3.77c-5.15-.64-9.2-4.69-9.2-9.57 0-5.34 4.69-9.66 10.58-9.66h.46s10.58-.83 12-.92.92 1.84.92 1.84zm-15.55 27.23c0 3 3.13 5.52 6.9 5.52s6.9-2.48 6.9-5.52-3.13-5.52-6.9-5.52-6.91 2.49-6.91 5.52zm11.22-22.54c-.74-3.5-3.31-6-5.7-5.52s-3.68 3.77-2.94 7.27 3.31 6 5.7 5.52 3.67-3.68 2.93-7.27z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__q)"
  }), React.createElement("path", {
    d: "M472.62 350.5h-6v6a1.41 1.41 0 0 1-1.38 1.38h-.92a1.41 1.41 0 0 1-1.38-1.38v-6h-6a1.41 1.41 0 0 1-1.38-1.38v-.92a1.41 1.41 0 0 1 1.38-1.38h6v-6a1.41 1.41 0 0 1 1.38-1.38h.92a1.41 1.41 0 0 1 1.38 1.38v6h6a1.41 1.41 0 0 1 1.38 1.38v.92a1.41 1.41 0 0 1-1.38 1.38zm-20.79-16.19a9.2 9.2 0 0 1 1.93 5.61 9.72 9.72 0 0 1-6.26 8.83c.28.92 1.2 1.93 3.5 3.59 4.42 3.22 4.6 9.2 4.6 9.2v.46c0 4.78-5.8 8.74-12.88 8.74s-12.88-4-12.88-8.74c0-4.6 5.24-8.37 12-8.74v-3.77c-5.15-.64-9.2-4.69-9.2-9.57 0-5.34 4.69-9.66 10.58-9.66h.46s10.58-.83 12-.92.92 1.84.92 1.84zm-15.55 27.19c0 3 3.13 5.52 6.9 5.52s6.9-2.48 6.9-5.52-3.13-5.52-6.9-5.52-6.9 2.52-6.9 5.52zm11.22-22.54c-.74-3.5-3.31-6-5.7-5.52s-3.68 3.77-2.94 7.27 3.31 6 5.7 5.52 3.68-3.73 2.94-7.28z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 32,
    cy: 677.37,
    r: 32,
    fill: "url(#prefix__r)"
  }), React.createElement("circle", {
    cx: 32,
    cy: 677.37,
    r: 28,
    fill: "#00aced"
  }), React.createElement("path", {
    d: "M351.08 734.72l4.23-.85s-3.55 4-4.23 4.23a17 17 0 0 0 0 2.54C343 775.5 313 760.1 313 760.1c10.92.25 11.85-4.23 11.85-4.23-6.35-.93-7.62-5.08-7.62-5.08a2.61 2.61 0 0 0 3.38-.85c-6.85-1.78-5.92-8.46-5.92-8.46a8.8 8.8 0 0 0 4.15 1.61c-.76-.93-7.19-8.63-3.3-12.61 0 0 4.74 8.46 17.18 9.22l.85-.17a6.64 6.64 0 0 1-.17-1.86 8.88 8.88 0 0 1 8.88-8.88c5.92 0 7.19 3.38 7.19 3.38l4.23-2.54c-.08.01-.51 4.24-2.62 5.09z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__s)"
  }), React.createElement("path", {
    d: "M51.77 667.68l4.23-.85s-3.55 4-4.23 4.23a17 17 0 0 0 0 2.54c-8.12 34.86-38.08 19.46-38.08 19.46 10.92.25 11.85-4.23 11.85-4.23-6.35-.93-7.62-5.08-7.62-5.08a2.61 2.61 0 0 0 3.38-.85c-6.85-1.78-5.92-8.46-5.92-8.46a8.8 8.8 0 0 0 4.15 1.61c-.76-.93-7.19-8.63-3.3-12.61 0 0 4.74 8.46 17.18 9.22l.85-.17a6.64 6.64 0 0 1-.17-1.86 8.88 8.88 0 0 1 8.88-8.88c5.92 0 7.19 3.38 7.19 3.38l4.23-2.54c-.08.01-.51 4.24-2.62 5.09z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 534,
    cy: 570.37,
    r: 32,
    fill: "url(#prefix__t)"
  }), React.createElement("circle", {
    cx: 534,
    cy: 570.37,
    r: 28,
    fill: "#bd081c"
  }), React.createElement("path", {
    d: "M850 631.31c-.74 4.48-1.16 10.55-10.38 13 0 0-5.39 1.65-7.31-2.22-.91 4.32-1.84 8.31-2.47 9.34a52.37 52.37 0 0 1-3.95 6s.44-7.58.46-9.26c0-2.6 1.92-14.36 1.92-14.36s-2.6-8.12 3-9.36c0 0 4.57-1.28 3.56 4.89 0 0-.76 4.06-1.74 8.72l.44.57a4.72 4.72 0 0 0 3.46 2.38c2.27.16 8.06-4.11 7.93-11.25s-1.72-9.08-8-10.59-11.43 1.73-13.14 7.26c-1.92 6.29-.1 7.73 1.22 9.19l-.66 4.23s-6.12-1.76-6.22-8.14 3.11-16.09 16.11-16.63 16.49 11.67 15.77 16.23z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__u)"
  }), React.createElement("path", {
    d: "M550.56 564.23c-.74 4.48-1.16 10.55-10.38 13 0 0-5.39 1.65-7.31-2.22-.91 4.32-1.84 8.31-2.47 9.34a52.37 52.37 0 0 1-3.95 6s.44-7.58.46-9.26c0-2.6 1.92-14.36 1.92-14.36s-2.6-8.12 3-9.36c0 0 4.57-1.28 3.56 4.89 0 0-.76 4.06-1.74 8.72l.44.57a4.72 4.72 0 0 0 3.46 2.38c2.27.16 8.06-4.11 7.93-11.25s-1.72-9.08-8-10.59-11.43 1.73-13.14 7.26c-1.92 6.29-.1 7.73 1.22 9.19l-.66 4.23s-6.12-1.76-6.22-8.14 3.11-16.09 16.11-16.63 16.5 11.66 15.77 16.23z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 113,
    cy: 454.37,
    r: 32,
    fill: "url(#prefix__v)"
  }), React.createElement("circle", {
    cx: 113,
    cy: 454.37,
    r: 28,
    fill: "#3b5998"
  }), React.createElement("path", {
    d: "M416 507.3l.06 4.34 7-.1-.76 7.83-6.08.09.31 21.72-9.56.14-.31-21.72-4.34.06-.11-7.82 4.34-.06-.06-4.34s-.9-8.24 6.81-9.66l9.56-.14.1 7-4.34.06a2.56 2.56 0 0 0-2.62 2.6z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__w)"
  }), React.createElement("path", {
    d: "M117.86 441.58l.06 4.34 7-.1-.76 7.83-6.08.09.31 21.72-9.56.14-.31-21.72-4.34.06-.11-7.82 4.34-.06-.06-4.34s-.9-8.24 6.81-9.66l9.56-.14.1 7-4.34.06a2.56 2.56 0 0 0-2.62 2.6z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 64,
    cy: 569.37,
    r: 32,
    fill: "url(#prefix__x)"
  }), React.createElement("circle", {
    cx: 64,
    cy: 569.37,
    r: 28,
    fill: "#d34836"
  }), React.createElement("path", {
    d: "M387.78 635.71h-6v6a1.41 1.41 0 0 1-1.38 1.38h-.92a1.41 1.41 0 0 1-1.38-1.38v-6h-6a1.41 1.41 0 0 1-1.38-1.38v-.92a1.41 1.41 0 0 1 1.38-1.38h6v-6a1.41 1.41 0 0 1 1.38-1.38h.92a1.41 1.41 0 0 1 1.38 1.38v6h6a1.41 1.41 0 0 1 1.38 1.38v.92a1.41 1.41 0 0 1-1.38 1.38zM367 619.52a9.2 9.2 0 0 1 1.93 5.61 9.72 9.72 0 0 1-6.26 8.83c.28.92 1.2 1.93 3.5 3.59 4.42 3.22 4.6 9.2 4.6 9.2v.46c0 4.78-5.8 8.74-12.88 8.74S345 652 345 647.21c0-4.6 5.24-8.37 12-8.74v-3.77c-5.15-.64-9.2-4.69-9.2-9.57 0-5.34 4.69-9.66 10.58-9.66h.46s10.58-.83 12-.92.92 1.84.92 1.84zm-15.55 27.23c0 3 3.13 5.52 6.9 5.52s6.9-2.48 6.9-5.52-3.13-5.52-6.9-5.52-6.91 2.49-6.91 5.52zm11.22-22.54c-.74-3.5-3.31-6-5.7-5.52s-3.68 3.77-2.94 7.27 3.31 6 5.7 5.52 3.67-3.68 2.93-7.27z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__y)"
  }), React.createElement("path", {
    d: "M88.62 568.5h-6v6a1.41 1.41 0 0 1-1.38 1.38h-.92a1.41 1.41 0 0 1-1.38-1.38v-6h-6a1.41 1.41 0 0 1-1.38-1.38v-.92a1.41 1.41 0 0 1 1.38-1.38h6v-6a1.41 1.41 0 0 1 1.38-1.38h.92a1.41 1.41 0 0 1 1.38 1.38v6h6A1.41 1.41 0 0 1 90 566.2v.92a1.41 1.41 0 0 1-1.38 1.38zm-20.79-16.19a9.2 9.2 0 0 1 1.93 5.61 9.72 9.72 0 0 1-6.26 8.83c.28.92 1.2 1.93 3.5 3.59 4.42 3.22 4.6 9.2 4.6 9.2v.46c0 4.78-5.8 8.74-12.88 8.74s-12.88-4-12.88-8.74c0-4.6 5.24-8.37 12-8.74v-3.77c-5.15-.64-9.2-4.69-9.2-9.57 0-5.34 4.69-9.66 10.58-9.66h.46s10.58-.83 12-.92.92 1.84.92 1.84zM52.28 579.5c0 3 3.13 5.52 6.9 5.52s6.9-2.48 6.9-5.52-3.13-5.52-6.9-5.52-6.9 2.52-6.9 5.52zm11.22-22.54c-.74-3.5-3.31-6-5.7-5.52s-3.68 3.77-2.94 7.27 3.31 6 5.7 5.52 3.68-3.73 2.94-7.28z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 566,
    cy: 677.37,
    r: 32,
    fill: "url(#prefix__z)"
  }), React.createElement("circle", {
    cx: 566,
    cy: 677.37,
    r: 28,
    fill: "#0077b5"
  }), React.createElement("path", {
    d: "M878.63 761.13l.24-14.83s-.78-3.12-3.73-3-3.94.54-5.33 2.11l-.26 15.59-7.57-.12.39-23.45 7.57.12-.06 3.48s2.58-4.8 7.64-4.34c4.69.38 8.12 3.31 8.77 9.45h.15l-.25 15.13zm-25.29-26.9a4.54 4.54 0 1 1 4.61-4.46 4.55 4.55 0 0 1-4.61 4.46zm3.35 26.54l-7.57-.12.39-23.45 7.57.12z",
    transform: "translate(-301 -64.5)",
    fill: "url(#prefix__A)"
  }), React.createElement("path", {
    d: "M578.49 694.04l.24-14.83s-.78-3.12-3.73-3-3.94.54-5.33 2.11l-.26 15.59-7.57-.12.39-23.45 7.57.12-.06 3.48s2.58-4.8 7.64-4.34c4.69.38 8.12 3.31 8.77 9.45h.15l-.25 15.13zm-25.29-26.9a4.54 4.54 0 1 1 4.61-4.46 4.55 4.55 0 0 1-4.61 4.46zm3.35 26.54l-7.57-.12.39-23.45 7.57.12z",
    fill: "#fff"
  }));
};

UndrawSocialTree.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSocialTree;