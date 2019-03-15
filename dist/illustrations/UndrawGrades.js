function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawGrades = _props => {
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
    viewBox: "0 0 793.42 762",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 254.47,
    y1: 338.35,
    x2: 254.47,
    y2: 235.68,
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
    x1: -207.21,
    y1: 171.67,
    x2: -207.21,
    y2: 69,
    gradientTransform: "matrix(-1 0 0 1 48 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 254.47,
    y1: 831,
    x2: 254.47,
    y2: 728.33,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 254.47,
    y1: 668.46,
    x2: 254.47,
    y2: 565.8,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 254.47,
    y1: 502.58,
    x2: 254.47,
    y2: 399.91,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 499.41,
    y1: 67.18,
    x2: 499.41,
    y2: 35.49,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 499.41,
    y1: 238.72,
    x2: 499.41,
    y2: 207.03,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 499.41,
    y1: 398.09,
    x2: 499.41,
    y2: 366.4,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 499.41,
    y1: 563.83,
    x2: 499.41,
    y2: 532.14,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 499.41,
    y1: 726.51,
    x2: 499.41,
    y2: 694.82,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M305.65 286.86a51.18 51.18 0 1 0-79.73 42.48v.23a17.52 17.52 0 0 0 5.8 3.69l.07-.23c2.39 2.06 12.49 5.35 24.08 5.32h.25c7.34 0 15.31-1.29 22.32-5.09 0 0 .06-.13.16-.39a18.23 18.23 0 0 0 4.83-3.3l.08-.58a51.12 51.12 0 0 0 22.14-42.13z",
    transform: "translate(-203.29 -69)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 50.65,
    cy: 216.04,
    r: 49.64,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M30.77 235.6s-11.83 1-8.7 22.52a17 17 0 0 0 5.64 3.58l6.65-22.52zM69.15 235.6s11.83 1 8.7 22.52a17 17 0 0 1-5.63 3.58l-6.65-22.52z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M31.28 200.28s-5.63 16.38-8.7 14.84c0 0 29.63 25.59 55.78 0a78 78 0 0 0-11.26-14.84z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 50.27,
    cy: 198.75,
    r: 22.01,
    fill: "#333"
  }), React.createElement("path", {
    d: "M68.92 235.6H30.54l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M69.43 235.6H31.05l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M69.15 235.6H30.77l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M42.53 222.86h15.36v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73v-13.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M42.53 222.29h15.36v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73v-13.23z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M42.56 224.5a22.1 22.1 0 0 0 15.35 0v-1.89H42.56z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 50.27,
    cy: 203.52,
    r: 22.01,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M29.23 195.17h42s-3.62-16.95-19.52-15.87-22.48 15.87-22.48 15.87z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 28.72,
    cy: 202.59,
    rx: 2.05,
    ry: 3.84,
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 71.71,
    cy: 202.59,
    rx: 2.05,
    ry: 3.84,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M29.23 195.73h42s-3.62-16.94-19.52-15.86-22.48 15.86-22.48 15.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M204 120.18a51.18 51.18 0 1 1 79.73 42.48v.23a17.52 17.52 0 0 1-5.8 3.69l-.07-.23c-2.39 2.06-12.49 5.35-24.08 5.32h-.25c-7.34 0-15.31-1.29-22.32-5.09 0 0-.06-.13-.16-.39a18.23 18.23 0 0 1-4.83-3.3l-.08-.58A51.12 51.12 0 0 1 204 120.18z",
    transform: "translate(-203.29 -69)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 51.92,
    cy: 51.18,
    r: 49.64,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M32.45 70.09s-11.83 1-8.7 22.52a17 17 0 0 0 5.63 3.58l6.65-22.52zM70.84 70.09s11.83 1 8.7 22.52a17 17 0 0 1-5.63 3.58l-6.65-22.52z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M32.97 34.78s-.91 2.65-2.2 5.72c-2.82 6.71.4 32.47 7.13 35.21 7.56 3.08 17.5 5.05 27.83 1.29 9-3.27 11.74-32.59 5.4-39.74a53.95 53.95 0 0 0-2.33-2.48z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 51.96,
    cy: 33.24,
    r: 22.01,
    fill: "#333"
  }), React.createElement("path", {
    d: "M70.61 70.09H32.23l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .55-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M71.12 70.09H32.71l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M70.84 70.09H32.45l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M44.22 57.35h15.36v13.24a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73V57.35z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M44.22 56.78h15.36V70a6.73 6.73 0 0 1-6.73 6.73h-1.9A6.73 6.73 0 0 1 44.22 70V56.78z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M44.25 59a22.1 22.1 0 0 0 15.35 0v-1.89H44.25z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 51.96,
    cy: 38.02,
    r: 22.01,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M30.92 29.66h42s-3.58-16.95-19.45-15.87-22.55 15.87-22.55 15.87z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 30.4,
    cy: 37.08,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 73.39,
    cy: 37.08,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M30.92 30.23h42s-3.58-16.95-19.45-15.87-22.55 15.87-22.55 15.87z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M305.65 779.51A51.18 51.18 0 1 0 225.92 822v.23a17.52 17.52 0 0 0 5.8 3.69l.07-.23c2.39 2.06 12.49 5.35 24.08 5.32h.25c7.34 0 15.31-1.29 22.32-5.09 0 0 .06-.13.16-.39a18.23 18.23 0 0 0 4.83-3.3l.08-.58a51.12 51.12 0 0 0 22.14-42.14z",
    transform: "translate(-203.29 -69)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 51.18,
    cy: 710.52,
    r: 49.64,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M29.71 729.93s-11.83 1-8.7 22.52a17 17 0 0 0 5.63 3.58l6.65-22.52zM68.09 729.93s11.83 1 8.7 22.52a17 17 0 0 1-5.63 3.58l-6.65-22.52z",
    fill: "#4d8af0"
  }), React.createElement("circle", {
    cx: 49.21,
    cy: 693.08,
    r: 22.01,
    fill: "#333"
  }), React.createElement("path", {
    d: "M67.86 729.93H29.48l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M68.38 729.93H29.99l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M68.09 729.93H29.71l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.23 45.07.48a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M41.48 717.19h15.35v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73v-13.23h.01z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M41.48 716.62h15.35v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73v-13.23h.01z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M41.51 718.83a22.1 22.1 0 0 0 15.35 0V717H41.51z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 49.21,
    cy: 697.85,
    r: 22.01,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M28.17 690.06h42s-3.61-16.94-19.46-15.86-22.54 15.86-22.54 15.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M28.17 689.49h42s-3.58-16.95-19.45-15.87-22.55 15.87-22.55 15.87z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 27.66,
    cy: 696.92,
    rx: 2.05,
    ry: 3.84,
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 70.65,
    cy: 696.92,
    rx: 2.05,
    ry: 3.84,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M305.65 617a51.18 51.18 0 1 0-79.73 42.48v.23a17.52 17.52 0 0 0 5.8 3.69l.07-.23c2.39 2.06 12.49 5.35 24.08 5.32h.25c7.34 0 15.31-1.29 22.32-5.09 0 0 .06-.13.16-.39a18.23 18.23 0 0 0 4.83-3.3l.08-.58A51.12 51.12 0 0 0 305.65 617z",
    transform: "translate(-203.29 -69)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 50.65,
    cy: 546.15,
    r: 49.64,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M30.77 565.71s-11.83 1-8.7 22.52a17 17 0 0 0 5.63 3.58l6.65-22.52zM69.15 565.71s11.83 1 8.7 22.52a17 17 0 0 1-5.63 3.58l-6.65-22.52z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M31.28 530.4s-5.63 29-8.7 27.42c0 0 29.63 25.59 55.78 0 0 0-4.61-20.76-11.26-27.42z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 50.27,
    cy: 528.86,
    r: 22.01,
    fill: "#333"
  }), React.createElement("path", {
    d: "M68.92 565.71H30.54l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M69.43 565.71H31.05l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M69.15 565.71H30.77l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M42.53 553h15.36v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73V553z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M42.53 552.41h15.36v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73v-13.23z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M42.56 554.62a22.1 22.1 0 0 0 15.35 0v-1.89H42.56z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 50.27,
    cy: 533.64,
    r: 22.01,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M29.23 525.28h42s-3.62-16.94-19.52-15.86-22.48 15.86-22.48 15.86z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 28.72,
    cy: 532.7,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 71.71,
    cy: 532.7,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M29.23 525.85h42S67.61 508.9 51.71 510s-22.48 15.85-22.48 15.85z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M305.65 451.09a51.18 51.18 0 1 0-79.73 42.48v.23a17.52 17.52 0 0 0 5.8 3.69l.07-.23c2.39 2.06 12.49 5.35 24.08 5.32h.25c7.34 0 15.31-1.29 22.32-5.09 0 0 .06-.13.16-.39a18.23 18.23 0 0 0 4.83-3.3l.08-.58a51.12 51.12 0 0 0 22.14-42.13z",
    transform: "translate(-203.29 -69)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 51.18,
    cy: 382.09,
    r: 49.64,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M29.71 401.5s-11.83 1-8.7 22.52a17 17 0 0 0 5.63 3.58l6.65-22.52zM68.09 401.5s11.83 1 8.7 22.52a17 17 0 0 1-5.63 3.58l-6.65-22.52z",
    fill: "#4d8af0"
  }), React.createElement("circle", {
    cx: 49.21,
    cy: 364.66,
    r: 22.01,
    fill: "#333"
  }), React.createElement("path", {
    d: "M67.86 401.5H29.48l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M68.38 401.5H29.99l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M68.09 401.5H29.71l-3.58 15.35s-2.1 7.11.51 10.24 27.07 10.24 45 .51a20 20 0 0 0 .51-12.79c-2-7.16-.51-.51-.51-.51z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M41.48 388.77h15.35V402a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.72-6.73v-13.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M41.48 388.2h15.35v13.23a6.73 6.73 0 0 1-6.73 6.73h-1.9a6.73 6.73 0 0 1-6.73-6.73V388.2h.01z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M41.51 390.41a22.1 22.1 0 0 0 15.35 0v-1.89H41.51z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 49.21,
    cy: 369.43,
    r: 22.01,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M28.17 361.64h42s-3.61-16.94-19.46-15.86-22.54 15.86-22.54 15.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M28.17 361.07h42s-3.58-16.95-19.45-15.87-22.55 15.87-22.55 15.87z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 27.66,
    cy: 368.49,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 70.65,
    cy: 368.49,
    rx: 2.05,
    ry: 3.84,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M30.51 350.25a13.27 13.27 0 0 1 3.29-5.35c4.52-4.47 11.93-5.41 15.73-10.5a3 3 0 0 1-1.36 4.19c3.64 0 7.86-.34 9.92-3.34a6.81 6.81 0 0 1-1.15 7.19c3.23.15 6.67 2.34 6.88 5.56a6.42 6.42 0 0 1-3 5.41 16.52 16.52 0 0 1-6 2.26c-6.11 1.33-28.32 7.02-24.31-5.42z",
    fill: "#333"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M205.41 35.49h588v31.69h-588z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M207.87 37.87h583.88v26.14H207.87z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M207.87 37.87h412.84v26.14H207.87z"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M205.41 207.03h588v31.69h-588z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M207.87 209.41h583.88v26.14H207.87z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M207.87 209.41h572.39v26.14H207.87z"
  }), React.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M205.41 366.4h588v31.69h-588z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M207.87 368.78h583.88v26.14H207.87z"
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M207.87 368.78h89.53v26.14h-89.53z"
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M205.41 532.14h588v31.69h-588z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M207.87 534.52h583.88v26.14H207.87z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M207.87 534.52h529.84v26.14H207.87z"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M205.41 694.82h588v31.69h-588z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M207.87 697.2h583.88v26.14H207.87z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M207.87 697.2h181.99v26.14H207.87z"
  }));
};

UndrawGrades.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGrades;