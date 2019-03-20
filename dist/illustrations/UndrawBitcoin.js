function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBitcoin = _props => {
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
    viewBox: "0 0 682 729.04",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 133.13,
    y1: 136.42,
    x2: 133.13,
    y2: 112.55,
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
    x1: 489.15,
    y1: 260.63,
    x2: 489.15,
    y2: 85.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 513.83,
    y1: 188.41,
    x2: 513.83,
    y2: 161.09,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 538.04,
    y1: 200.61,
    x2: 538.04,
    y2: 160.52,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 521.42,
    y1: 391.07,
    x2: 521.42,
    y2: 279.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 567.94,
    y1: 627.32,
    x2: 604.26,
    y2: 627.32,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 826.94,
    y1: 703.92,
    x2: 863.26,
    y2: 703.92,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 826.94,
    y1: 684.58,
    x2: 863.26,
    y2: 684.58,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 840.76,
    y1: 659.51,
    x2: 849.44,
    y2: 659.51,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 567.94,
    y1: 675.48,
    x2: 580.97,
    y2: 675.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 591.23,
    y1: 675.48,
    x2: 604.26,
    y2: 675.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 840.76,
    y1: 656.16,
    x2: 849.44,
    y2: 656.16,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 567.15,
    y1: 551.13,
    x2: 605.05,
    y2: 551.13,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 567.94,
    y1: 555.48,
    x2: 604.26,
    y2: 555.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 831.28,
    y1: 628.45,
    x2: 863.01,
    y2: 628.45,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 831.28,
    y1: 628.05,
    x2: 863.01,
    y2: 628.05,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 602.48,
    y1: 555.48,
    x2: 605.64,
    y2: 555.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 566.56,
    y1: 555.48,
    x2: 569.72,
    y2: 555.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 630.31,
    y1: 532.19,
    x2: 639,
    y2: 532.19,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 827.34,
    y1: 651.42,
    x2: 863.03,
    y2: 651.42,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 854.75,
    y1: 646.88,
    x2: 895.24,
    y2: 646.88,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 533.2,
    y1: 532.19,
    x2: 541.89,
    y2: 532.19,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 794.97,
    y1: 646.88,
    x2: 835.45,
    y2: 646.88,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 827.73,
    y1: 805.18,
    x2: 839.18,
    y2: 805.18,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 851.02,
    y1: 805.18,
    x2: 862.47,
    y2: 805.18,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M128.15 116.08l11.04-4.26 2.9 6.31 1.34 15.08-2.47 1.79-12.81-18.92zM181.79 145.78l-12.61 7.29 13.25 19.54 3.09-2.25 1.92-15.51-5.65-9.07z"
  }), React.createElement("g", {
    opacity: 0.05
  }, React.createElement("path", {
    d: "M208.24 54.75c-2.54 3.84-4.91 8-5.64 10.92l2-1.38c-.25-2.17 1.4-5.77 3.64-9.54zM219.61 107.01L221 77.78c-31 19.67-76.36 37.62-76.36 37.62l-2.19 3.47s45.41-17.95 76.36-37.62l-1.3 27.53z"
  })), React.createElement("g", {
    opacity: 0.5
  }, React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M138.46 136.42l2.54-1.85-1.37-15.53-2.99-6.49-11.37 4.39 13.19 19.48z"
  }), React.createElement("path", {
    d: "M570.58 87.36c-6.91-3.32-12.08-1.76-15.7 1a22.73 22.73 0 0 0-7.31 9.42l-1 2.65-4.68 3.4-1.52-3.25s-16.57-29.44-65.45 28.05l-.22-.18s-4.16 5.09-7.95 10.8l-.54.82-.24.37-.34.53-.25.4-.38.63-.33.54-.35.59-.25.43-.26.45-.25.45-.26.48-.38.72-.21.4-.23.47-.17.36-.22.47-.14.31q-.18.42-.34.82l-.12.31-.16.44-.1.3q-.11.34-.2.67c0 .12-.07.23-.09.34a6.39 6.39 0 0 0-.22 2.16L395.64 198l3.34 7.26s46.77-18.48 78.65-38.75l-1.34 28.35-.08 1.75s-29.12 24.11-36.7 36.39l-13 7.51 13.65 20.12 3.18-2.31 2-16 53.43-42.71s10.13-18.51 10.31-34l2.19 8.45s4.66 13.09 7.95 13.61 3.3-10.15 1-13.32S519 150 519 150l.6-4.31 8.36-6.08.31-.29.44 2.66 1.68.15v.12l.08.77 1.08 20.19 5.92 22.84s4.66 13.09 7.95 13.61 3.3-10.15 1-13.32-1.21-24.34-1.21-24.34l2.44-17.63v-.34l.05-.39 4.81.42s5-17.19-3.37-24.68l-1.52-3.25 3.12-2.26.63-.45a14.15 14.15 0 0 0 19.79 0 9.87 9.87 0 0 0 6.6-1.76l1.21-.87a16 16 0 0 0 3.49-3c.85-1.58-1.18-15.3-11.88-20.43z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__b)"
  })), React.createElement("path", {
    d: "M216 44.27s-14.23 17.4-13.56 23.5l-63.24 44.05 3.24 7.05s45.41-17.95 76.36-37.62l-1.38 29.27s-28.27 23.37-35.62 35.3l5.65 9.07 51.88-41.47s15.39-28.12 8-43.46z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M671.79 470.52C626.24 653.2 441.2 764.39 258.48 718.83S-35.36 488.22 10.22 305.52 240.79 11.62 423.45 57.17s293.89 230.62 248.34 413.35z",
    fill: "#f7931a"
  }), React.createElement("path", {
    d: "M491.36 339.42c6.79-45.38-27.76-69.77-75-86l15.33-61.47-37.42-9.33-14.93 59.8c-9.84-2.45-19.94-4.76-30-7.06l15-60.25L327 165.8l-15.34 61.45c-8.14-1.85-16.14-3.69-23.89-5.62v-.19l-51.57-12.92-10 40s27.76 6.36 27.18 6.76c15.15 3.78 17.89 13.81 17.44 21.76l-17.46 70a31 31 0 0 1 3.89 1.25c-1.25-.31-2.58-.65-4-1l-24.47 98.1c-1.85 4.6-6.55 11.51-17.15 8.89.37.54-27.2-6.79-27.2-6.79L166 490.37l48.64 12.15c9.06 2.27 17.94 4.65 26.68 6.88l-15.48 62.12 37.38 9.33 15.34-61.51c10.21 2.77 20.12 5.33 29.82 7.74l-15.28 61.23 37.42 9.33L346 535.61c63.81 12.07 111.79 7.2 132-50.51 16.27-46.47-.81-73.27-34.38-90.75 24.38-5.63 42.83-21.71 47.74-54.93zM405.87 459.3c-11.56 46.47-89.8 21.35-115.16 15l20.55-82.37c25.36 6.38 106.74 18.91 94.61 67.37zm11.57-120.56c-10.55 42.27-75.67 20.79-96.79 15.53l18.63-74.75c21.13 5.31 89.15 15.14 78.16 59.22z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M269.49 47.23l1.64 30.8 5.74 22.17s4.52 12.71 7.72 13.21 3.21-9.86 1-12.94-1.15-23.63-1.15-23.63L288 50.69z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M267.58 52.39l.83 5 23.14 2s4.84-16.69-3.28-24z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M288.27 35.46l-8.55-18.25s-16.15-28.69-63.85 27.59l31.46 25.12 20.36-14.8z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M295.009 10.342l7.608 10.467-16.607 12.07a5.4 5.4 0 0 1-7.543-1.193l-1.253-1.723a5.4 5.4 0 0 1 1.194-7.543l16.607-12.07-.006-.008z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M286.18 16.76a13.53 13.53 0 0 0 3.64 13.35l7.85-5.71-7.61-10.47z",
    opacity: 0.05
  }), React.createElement("ellipse", {
    cx: 559.03,
    cy: 105.34,
    rx: 13.73,
    ry: 13.7,
    transform: "rotate(-36.01 298.017 461.039)",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M293.68 11.77l-7.93 5.3 1-2.58s6.52-17 21.72-9.67c10.39 5 12.36 18.3 11.57 19.82a18.46 18.46 0 0 1-4 3.28 9.55 9.55 0 0 1-12.81-1.62c-2.66-3.17-7.3-9.73-6.45-13.49-.78-1.42-1.8-2-3.11-1z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M294.3 11.32l-7.93 5.3 1-2.58s6.52-17 21.72-9.67c10.39 5 12.36 18.3 11.57 19.82a18.46 18.46 0 0 1-4 3.28 9.55 9.55 0 0 1-12.81-1.62c-2.66-3.17-7.3-9.73-6.45-13.49-.78-1.42-1.8-2-3.11-1z",
    fill: "#5a2f32"
  }), React.createElement("ellipse", {
    cx: 554.28,
    cy: 97.5,
    rx: 3.05,
    ry: 1.52,
    transform: "rotate(-35.9 293.711 451.212)",
    fill: "#fda57d"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M265.03 54.71l3.63-3.11.04 4.91-.79-1.89-2.88.09zM270.01 57.67l.08.76 16.69 1.3.1-.71-16.87-1.35z"
  }), React.createElement("path", {
    d: "M244.07 35.6l1.64 30.8 5.74 22.12s4.52 12.71 7.72 13.21 3.21-9.86 1-12.94S259 65.21 259 65.21l3.62-26.15z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#ccc",
    d: "M378.48 270.77h1.74v1.74h-1.74z"
  }), React.createElement("path", {
    d: "M377.35 273.39h4.3a2.35 2.35 0 0 1 2.35 2.35v14.49h-9v-14.49a2.35 2.35 0 0 1 2.35-2.35z",
    fill: "#535461"
  }), React.createElement("path", {
    fill: "#f7931a",
    d: "M376.74 272.23h5.23v1.16h-5.23zM375 280.06h9v3.48h-9z"
  }), React.createElement("path", {
    d: "M380.23 271.06v.87c-.32 0-.58-.2-.58-.44s.26-.43.58-.43z",
    fill: "#e6e6e6"
  }), React.createElement("path", {
    d: "M245.91 20.62s-3.82 10.31-2.2 13.83M244.15 35.07l-.01 1.91 18.33 3.08.22-1.53-18.54-3.46z",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#f55f44",
    d: "M248.29 19.36l-4.22 16.24 18.54 3.46 4.9-20.5-19.22.8z"
  }), React.createElement("path", {
    d: "M506.66 161.09l3.65 13.82s4.71 13 8 13.49 3.34-10.07 1-13.21c-1.23-1.65-1.49-8.23-1.47-14.1z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__c)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M247.95 75.61l3.51 13.53s4.52 12.71 7.72 13.21 3.21-9.86 1-12.94c-1.18-1.62-1.43-8.06-1.41-13.8z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M544.07 160.52h-14.6l.2 3.66 6.08 22.82s4.79 13.08 8.17 13.6 3.39-10.15 1-13.31-1.19-24.29-1.19-24.29z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M284.74 75.04h-13.8l.19 3.56 5.74 22.17s4.52 12.71 7.72 13.21 3.21-9.86 1-12.94-1.15-23.63-1.15-23.63z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#535461",
    opacity: 0.2,
    d: "M380 271l25-5 1 12-26-6v-1z"
  }), React.createElement("path", {
    d: "M601.28 360.18l.69.3 22 9.47L652 336.7s4.25-4.75-.81-8-8.24 5.16-8.24 5.16L621.41 357l-18.3-9.15.29-1.92-16.68-9.64a20.48 20.48 0 0 0-1.06-1.77l-.15-.54-.83-.73c-.16-.17-.32-.33-.48-.47l2.76-3a14.85 14.85 0 0 0 19.58-11.7 10.45 10.45 0 0 0 3.91 0 10.78 10.78 0 0 0 7.7-6.33.79.79 0 0 1-.57.41 10.11 10.11 0 0 0 .57-1.16c-.57 1.38-5.9-.52-6.7-1-2.44-1.3-3.7-3.22-5-5.58-2.49-4.66-7.09-6.38-12.27-6.79a25.52 25.52 0 0 0-11.69 1.47 14.4 14.4 0 0 0-8.23 8.11 10.71 10.71 0 0 0-.6 3.95 9.66 9.66 0 0 0 3.14 7.71 6.75 6.75 0 0 0 .57.44c.11.43.23.85.38 1.27l-.73.79-4.74 5.14-.24-.07-49.93 7.47v.1c-1.66-1.1-9.18-4.92-27.95.27-7.09 2-18.9 1.75-31.58.58-8.86-11.02-14.58-45.34-14.58-45.34l-2.24-9.71-29.07 6.72s13.41 3 15.65 6.72c3.41 1.14 5.52 26.61 6.33 38.63-17.41-2.69-31.67-5.77-31.67-5.77l-10.43-3.73-7.45 26.14s8.2-9 15.65-9.71c0 0 37.26 17.92 64.84 14.19 10.74-1.45 21.12 3.09 29.81 4.48a169.82 169.82 0 0 0 23 2.24l.09 8.21s30.69-1.32 50.85-7.72c1.53 4.14 2.76 7.13 3.19 7.35l3.66-1.79 20.56 25.31L641 374.64s6-2.24 3-7.47-9.69.75-9.69.75l-29.81 10.45-12.58-17.44-.49-.68 2.64-1.29s-.08-.39-.24-1.06l6.94 5.54z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#fda57d",
    d: "M317.96 253.33l-9.21-8.54L324 228.26l9.21 8.53-15.25 16.54z"
  }), React.createElement("path", {
    d: "M323.27 228.98l-6.73 7.3a14.53 14.53 0 0 0 8.91 8.87l7-7.63z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M325.25 267.63l36.93 15.89 27.29-32.34s4.13-4.62-.79-7.78-8 5-8 5l-21 22.48-26.95-13.46z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M323.31 249.24l18.85 10.89-2.54 17.07-17.76-14.16 1.45-13.8z"
  }), React.createElement("ellipse", {
    cx: 330.92,
    cy: 230.72,
    rx: 14.5,
    ry: 14.53,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M319 243.43l-7.25-2.18-48.6 7.27.36 33s59.08-2.54 65.6-17.79l-4.35-15.21z",
    fill: primaryColor
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M322.43 263.48l17.19 13.72.73-5.81-17.04-16.34-.88 8.43z"
  }), React.createElement("path", {
    d: "M263.51 248.87s-6.52-5.81-27.54 0-84.81-8-84.81-8L149 253.23s36.24 17.43 63.06 13.8c10.44-1.41 20.54 3 29 4.36a163.18 163.18 0 0 0 22.45 2.13z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M151.16 240.88L141 237.25l-7.25 25.42s8-8.72 15.22-9.44z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M175.8 208.93l15.2-3.63s7.25 43.58 18.12 47.21h-26.79s-2.18-42.13-6.53-43.58z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M191 205.3l-2.17-9.44-28.27 6.54s13 2.91 15.22 6.54z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M333.23 213.92a24.82 24.82 0 0 0-11.37 1.43 14 14 0 0 0-8 7.89c-1.3 3.64-.46 8.11 2.48 10.61a4.33 4.33 0 0 0 2.55 1.16c1.54.06 2.83-1.07 4-2.05a33.84 33.84 0 0 1 7.28-4.59c2.22-1 4.93-1.8 7-.53a14.53 14.53 0 0 1 2.53 2.4 10.29 10.29 0 0 0 16.76-3.36c-.56 1.35-5.74-.51-6.52-.92-2.38-1.26-3.6-3.13-4.82-5.42-2.38-4.55-6.86-6.22-11.89-6.62z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M333.23 213.2a24.82 24.82 0 0 0-11.37 1.43 14 14 0 0 0-8 7.89c-1.3 3.64-.46 8.11 2.48 10.61a4.33 4.33 0 0 0 2.55 1.16c1.54.06 2.83-1.07 4-2.05a33.84 33.84 0 0 1 7.28-4.59c2.22-1 4.93-1.8 7-.53a14.53 14.53 0 0 1 2.53 2.4 10.29 10.29 0 0 0 16.76-3.36c-.56 1.35-5.74-.51-6.52-.92-2.38-1.26-3.6-3.13-4.82-5.42-2.38-4.55-6.86-6.23-11.89-6.62z"
  }), React.createElement("ellipse", {
    cx: 585.21,
    cy: 314.74,
    rx: 2.18,
    ry: 1.09,
    transform: "rotate(-76.65 401.644 435.832)",
    fill: "#fda57d"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M319.62 279.45l.49.6 10.9-5.29-.48-.66-10.91 5.35zM341.88 262l-1.78 11.93.66.38 1.4-12.18-.28-.13z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M275.83 231.44h8.7v58.83h-8.7zM259.844 66.74l8.247 2.77-18.735 55.767-8.247-2.77z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M281.63 237.98h-2.9V95.92l2.86.15.04 141.91z"
  }), React.createElement("path", {
    d: "M314.25 272.84l25.37 31.23 39.14-16s5.8-2.18 2.9-7.26-9.42.73-9.42.73l-29 10.17-17.64-24.45z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M303.74 247.06s10.87 33.41 12.32 34.13l17-8.35s-4.83-22.53-10.21-26-18.38-2.69-19.11.22z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M306.84 256.43s-.57 12.78 3.06 15",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M278.75 96.07l-13.08-19.33 1.37-4.09 14.55 23.42h-2.84z"
  }), React.createElement("path", {
    d: "M343.335 234.753l1.891 1.257-3.17 4.772-1.892-1.256zM328.562 226.467l14.015 9.318-.631.95-14.015-9.319z"
  }), React.createElement("g", {
    opacity: 0.7
  }, React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M567.94 613.9h36.32v26.84h-36.32z"
  }), React.createElement("path", {
    d: "M826.94 706.49s13.55 1.58 18.16 1.58 18.16-1.58 18.16-1.58v-6.71h-36.32z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__g)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M863.26 706.09s-13.55 1.58-18.16 1.58-18.16-1.58-18.16-1.58v-26.45a18.16 18.16 0 0 1 18.16-18.16 18.16 18.16 0 0 1 18.16 18.16z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__h)"
  }), React.createElement("path", {
    d: "M845.1 666.62a4.34 4.34 0 0 1-4.34-4.34v-9.87h8.68v9.87a4.34 4.34 0 0 1-4.34 4.34z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__i)"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M567.94 631.27h13.03v88.43h-13.03z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M591.23 631.27h13.03v88.43h-13.03z"
  }), React.createElement("path", {
    d: "M840.76 659a18.17 18.17 0 0 0 8.68 0v-6.2h-8.68z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__l)",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 586.1,
    cy: 551.13,
    r: 18.95,
    fill: "url(#prefix__m)"
  }), React.createElement("circle", {
    cx: 586.1,
    cy: 555.48,
    r: 18.16,
    fill: "url(#prefix__n)"
  }), React.createElement("path", {
    d: "M834.1 631.85a8.33 8.33 0 0 0 3.21 1 28.29 28.29 0 0 0 13.78-1.55 6.73 6.73 0 0 0 4.34 3.67 19.94 19.94 0 0 0 5.82.65 2.16 2.16 0 0 0 1.25-.24c.87-.59.45-1.94-.06-2.86l-2.53-4.59a13.6 13.6 0 0 0-2.68-3.76 11.1 11.1 0 0 0-5.28-2.27 29.77 29.77 0 0 0-13.55.45c-4.71 1.25-10.78 5.58-4.3 9.5z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__o)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M834.1 631.46a8.33 8.33 0 0 0 3.21 1 28.29 28.29 0 0 0 13.78-1.55 6.73 6.73 0 0 0 4.34 3.67 19.94 19.94 0 0 0 5.82.65 2.16 2.16 0 0 0 1.25-.24c.87-.59.45-1.94-.06-2.86l-2.53-4.59a13.6 13.6 0 0 0-2.68-3.76 11.1 11.1 0 0 0-5.28-2.27 29.77 29.77 0 0 0-13.55.45c-4.71 1.25-10.78 5.57-4.3 9.5z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__p)"
  }), React.createElement("ellipse", {
    cx: 604.06,
    cy: 555.48,
    rx: 1.58,
    ry: 2.96,
    fill: "url(#prefix__q)"
  }), React.createElement("ellipse", {
    cx: 568.14,
    cy: 555.48,
    rx: 1.58,
    ry: 2.96,
    fill: "url(#prefix__r)"
  }), React.createElement("circle", {
    cx: 634.66,
    cy: 532.19,
    r: 4.34,
    fill: "url(#prefix__s)"
  }), React.createElement("text", {
    transform: "translate(579.23 599.1)",
    fontSize: 11.84,
    fontFamily: "Lato-Light, Lato"
  }, '00'), React.createElement("path", {
    d: "M845.5 648.06s-10.26 3.55-18.16-4.34c0 0 .64 2.62 1.74 5.77a18.16 18.16 0 0 0 34-5.64c-1.9 1.02-15.39 7.51-17.58 4.21zm-.39 4.74c-2 0-3.55-1.5-3.55-2.37s1.59-.79 3.55-.79 3.55-.08 3.55.79-1.6 2.37-3.56 2.37z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__t)"
  }), React.createElement("path", {
    d: "M854.75 664.27s21.14-11.86 34.17-46.6l6.32 3.95s-10.46 44.27-36.71 54.48z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__u)"
  }), React.createElement("circle", {
    cx: 537.55,
    cy: 532.19,
    r: 4.34,
    fill: "url(#prefix__v)"
  }), React.createElement("path", {
    d: "M835.45 664.27s-21.14-11.86-34.17-46.6l-6.28 3.94s10.46 44.27 36.71 54.48z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__w)"
  }), React.createElement("path", {
    d: "M839.18 808.34h-11.45v-.59a5.72 5.72 0 0 1 5.72-5.72 5.72 5.72 0 0 1 5.72 5.72z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__x)"
  }), React.createElement("path", {
    d: "M862.47 808.34H851v-.59a5.72 5.72 0 0 1 5.72-5.72 5.72 5.72 0 0 1 5.72 5.72z",
    transform: "translate(-259 -85.48)",
    fill: "url(#prefix__y)"
  })), React.createElement("path", {
    fill: "#4d8af0",
    d: "M568.47 614.23h35.27v26.07h-35.27z"
  }), React.createElement("path", {
    d: "M568.47 621.13s13.16 1.53 17.63 1.53 17.63-1.53 17.63-1.53v-6.51h-35.26z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M603.73 620.75s-13.16 1.53-17.63 1.53-17.63-1.53-17.63-1.53v-25.68a17.63 17.63 0 0 1 17.63-17.63 17.63 17.63 0 0 1 17.63 17.63z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M581.88 568.62h8.43v9.58a4.22 4.22 0 0 1-4.22 4.22 4.22 4.22 0 0 1-4.22-4.22v-9.58h.01z",
    fill: "#fdb797"
  }), React.createElement("path", {
    fill: "#4d8af0",
    d: "M568.47 631.1h12.65v85.86h-12.65zM591.08 631.1h12.65v85.86h-12.65z"
  }), React.createElement("path", {
    d: "M581.89 575.01a17.64 17.64 0 0 0 8.43 0v-6h-8.43z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 586.1,
    cy: 553.29,
    r: 18.4,
    fill: "#814e4d"
  }), React.createElement("circle", {
    cx: 586.1,
    cy: 557.5,
    r: 17.63,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M575.42 548.66a8.09 8.09 0 0 0 3.12.94 27.47 27.47 0 0 0 13.38-1.5 6.54 6.54 0 0 0 4.22 3.57 19.36 19.36 0 0 0 5.65.63 2.09 2.09 0 0 0 1.22-.23c.85-.57.44-1.88-.06-2.78l-2.46-4.45a13.21 13.21 0 0 0-2.6-3.65 10.78 10.78 0 0 0-5.13-2.2 28.91 28.91 0 0 0-13.16.44c-4.6 1.22-10.48 5.42-4.18 9.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M575.42 548.28a8.09 8.09 0 0 0 3.12.94 27.47 27.47 0 0 0 13.38-1.5 6.54 6.54 0 0 0 4.22 3.57 19.36 19.36 0 0 0 5.65.63 2.09 2.09 0 0 0 1.22-.23c.85-.57.44-1.88-.06-2.78l-2.46-4.45a13.21 13.21 0 0 0-2.6-3.65 10.78 10.78 0 0 0-5.13-2.2 28.91 28.91 0 0 0-13.16.44c-4.6 1.22-10.48 5.42-4.18 9.23z",
    fill: "#814e4d"
  }), React.createElement("ellipse", {
    cx: 603.54,
    cy: 557.5,
    rx: 1.53,
    ry: 2.87,
    fill: "#fdb797"
  }), React.createElement("ellipse", {
    cx: 568.66,
    cy: 557.5,
    rx: 1.53,
    ry: 2.87,
    fill: "#fdb797"
  }), React.createElement("circle", {
    cx: 633.25,
    cy: 534.89,
    r: 4.22,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M586.49 564.4s-10 3.45-17.63-4.22c0 0 .62 2.54 1.69 5.61a17.63 17.63 0 0 0 33-5.48c-1.83 1-14.93 7.29-17.06 4.09zm-.38 4.6c-1.91 0-3.45-1.45-3.45-2.3s1.54-.77 3.45-.77 3.45-.08 3.45.77-1.56 2.3-3.46 2.3z",
    fill: "#814e4d"
  }), React.createElement("path", {
    d: "M595.47 580.14s20.53-11.52 33.18-45.25l6.13 3.83s-10.16 43-35.65 52.9z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 538.95,
    cy: 534.89,
    r: 4.22,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M576.73 580.14s-20.53-11.52-33.18-45.25l-6.13 3.83s10.16 43 35.65 52.9z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M574.79 713.9a5.56 5.56 0 0 1 5.56 5.56v.54h-11.11v-.57a5.56 5.56 0 0 1 5.55-5.53zM597.41 713.9a5.56 5.56 0 0 1 5.56 5.56v.54h-11.12v-.57a5.56 5.56 0 0 1 5.56-5.53z",
    fill: "#333"
  }));
};

UndrawBitcoin.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBitcoin;