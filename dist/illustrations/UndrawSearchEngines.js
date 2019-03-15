function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSearchEngines = _props => {
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
    viewBox: "0 0 871.91 538.91",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__b",
    x1: 435.95,
    y1: 538.91,
    x2: 435.95,
    y2: 377.68,
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
    id: "prefix__c",
    x1: 895.46,
    y1: 705.26,
    x2: 895.46,
    y2: 584.97,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "#b3b3b3",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "#b3b3b3",
    stopOpacity: 0.1
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "#b3b3b3",
    stopOpacity: 0.05
  })), React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 858.28,
    y1: 627.87,
    x2: 858.28,
    y2: 622.08,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 0.55,
    stopOpacity: 0.09
  }), React.createElement("stop", {
    offset: 1,
    stopOpacity: 0.02
  })), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 884.88,
    y1: 621.23,
    x2: 884.88,
    y2: 603.52,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 547.45,
    y1: 337.11,
    x2: 547.45,
    y2: 180.55,
    xlinkHref: "#prefix__b"
  }), React.createElement("clipPath", {
    id: "prefix__f",
    transform: "translate(-164.05 -180.55)"
  }, React.createElement("path", {
    "data-name": "<Clipping Path>",
    d: "M611.43 246.64H549v25.9h35.95c-3.35 16.45-17.37 25.9-35.95 25.9a39.6 39.6 0 1 1 0-79.21 38.75 38.75 0 0 1 24.68 8.83l19.5-19.5A67 67 0 1 0 549 325.85c33.51 0 64-24.37 64-67a55.6 55.6 0 0 0-1.57-12.21z",
    fill: "none"
  })), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 378.88,
    y1: 511.52,
    x2: 378.88,
    y2: 366.33,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 378.07,
    y1: 483.02,
    x2: 378.07,
    y2: 406.49,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 481.22,
    y1: 511.34,
    x2: 481.22,
    y2: 371.35,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 443.8,
    y1: 328.74,
    x2: 443.8,
    y2: 216.51,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 708.4,
    y1: 487.94,
    x2: 708.4,
    y2: 415.88,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 744.45,
    y1: 486.82,
    x2: 744.45,
    y2: 417.99,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 780.78,
    y1: 486.82,
    x2: 780.78,
    y2: 437.78,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 832.79,
    y1: 509.37,
    x2: 832.79,
    y2: 437.64,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 858.05,
    y1: 379.79,
    x2: 858.05,
    y2: 324.38,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 898.6,
    y1: 381.19,
    x2: 898.6,
    y2: 297.72,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 939.58,
    y1: 380.99,
    x2: 939.58,
    y2: 323.88,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 816.78,
    y1: 381.19,
    x2: 816.78,
    y2: 323.68,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 976.13,
    y1: 379.79,
    x2: 976.13,
    y2: 324.99,
    xlinkHref: "#prefix__b"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 784.46,
    y1: 379.79,
    x2: 784.46,
    y2: 289.72,
    xlinkHref: "#prefix__b"
  })), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M0 377.68h871.91v161.23H0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M5.09 382.96h860.45v147.38H5.09z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M57.94 413.04h500.19v87.71H57.94z"
  }), React.createElement("path", {
    d: "M916.21 599.19a46.32 46.32 0 1 0-7.58 70.55l33.48 34.83a2.25 2.25 0 0 0 3.19.06l8.34-8a2.25 2.25 0 0 0 .06-3.19l-33.48-34.83a46.32 46.32 0 0 0-4.01-59.42zm-10.43 56a33.13 33.13 0 1 1 .92-46.85 33.13 33.13 0 0 1-.92 46.83z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M858.28 622.08c-3.73 0-3.73 5.79 0 5.79s3.72-5.79 0-5.79z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M884.25 603.53a27.83 27.83 0 0 0-24 12.4c-1.58 2.48 2.91 4.67 4.49 2.2 4-6.29 11.65-10.28 19.9-10.07a25.36 25.36 0 0 1 20.69 12c1.58 2.61 5.73.24 4.15-2.35-5.05-8.3-14.87-13.94-25.23-14.18z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M752.16 413.55a46.32 46.32 0 1 0-7.58 70.55l33.48 34.83a2.25 2.25 0 0 0 3.19.06l8.34-8a2.25 2.25 0 0 0 .06-3.19l-33.47-34.85a46.32 46.32 0 0 0-4.02-59.4zm-10.43 56a33.13 33.13 0 1 1 .92-46.85 33.13 33.13 0 0 1-.92 46.83z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M694.23 436.45c-3.73 0-3.73 5.79 0 5.79s3.72-5.79 0-5.79zM720.2 417.89a27.83 27.83 0 0 0-24 12.4c-1.58 2.48 2.91 4.67 4.49 2.2 4-6.29 11.65-10.28 19.9-10.07a25.36 25.36 0 0 1 20.69 12c1.58 2.61 5.73.24 4.15-2.35-5.05-8.3-14.87-13.95-25.23-14.18z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M622.18 244.59h-72.95v30.24h42c-3.91 19.21-20.28 30.24-42 30.24a46.26 46.26 0 0 1 0-92.51 45.25 45.25 0 0 1 28.82 10.32l22.77-22.77a78.23 78.23 0 1 0-51.59 137c39.14 0 74.72-28.47 74.72-78.28a64.94 64.94 0 0 0-1.77-14.24z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__e)",
    "data-name": "<Group>"
  }), React.createElement("g", {
    clipPath: "url(#prefix__f)"
  }, React.createElement("path", {
    d: "M308.76 117.88V38.67l51.79 39.6z",
    fill: "#fbbc05"
  }), React.createElement("path", {
    d: "M308.76 38.67l51.79 39.6 21.33-18.58 73.07-11.88V5.16H308.76z",
    fill: "#ea4335"
  }), React.createElement("path", {
    d: "M308.76 117.88l91.4-70.07 24.07 3 30.72-45.65v146.23H308.76z",
    fill: "#34a853"
  }), React.createElement("path", {
    d: "M454.95 151.39l-94.44-73.12-12.19-9.14 106.63-30.46z",
    fill: "#4285f4"
  })), React.createElement("g", {
    "data-name": "g3970"
  }, React.createElement("g", {
    "data-name": "g3956"
  }, React.createElement("path", {
    d: "M378.87 366.33c42.47 0 74.92 31.43 74.92 72.58s-32.45 72.6-74.92 72.6S304 480.07 304 438.91s32.4-72.58 74.87-72.58zm74.93 145.19z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__g)",
    "data-name": "path61"
  }), React.createElement("g", {
    "data-name": "g63"
  }, React.createElement("g", {
    "data-name": "id4"
  }, React.createElement("path", {
    d: "M375.65 414c.17-2.52.36-5 .71-7.53h-57V414c5.73.36 11.29.9 17 1.25 10.75 13.08 21.5 26.17 32.43 39.42V475c-6.09.54-12.19.9-18.28 1.44V483h56.28v-6.6c-6.09-.37-12.19-.54-18.28-.72.18-7.16.36-14.51.54-21.68 10.57-9.32 21-18.64 31.37-28 5.37-.36 10.75-.71 16.3-1.25V416c-15.95.18-31.72.36-47.67.71v7.36c5.91.36 11.83.53 17.74.71-7.7 6.63-15.42 13.08-23.12 19.72-7.89-9.68-15.77-19.53-23.66-29.22 5.24-.55 10.43-.9 15.64-1.28z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__h)",
    "data-name": "path66"
  }))), React.createElement("g", {
    "data-name": "g68"
  }, React.createElement("g", {
    "data-name": "id5"
  }, React.createElement("path", {
    d: "M506 373.52l-43.2-2.16c-.72 34.24-1.44 68.65-2.15 102.89 6.81.71 13.8 1.43 20.6 2.15q12.33-51.62 24.75-102.88zm-47.37 137.82h24.73v-20.6l-26.88-2.15c.71 7.7 1.44 15.23 2.15 22.75z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__i)",
    "data-name": "path71"
  }))))), React.createElement("g", {
    "data-name": "g3970"
  }, React.createElement("g", {
    "data-name": "g3956"
  }, React.createElement("path", {
    "data-name": "path61",
    d: "M217.52 193.28c38.09 0 67.18 28.18 67.18 65.09s-29.1 65.08-67.18 65.08-67.18-28.19-67.18-65.1 29.09-65.07 67.18-65.07zm67.19 130.17z",
    fill: "#6b0094"
  }), React.createElement("g", {
    "data-name": "g63"
  }, React.createElement("g", {
    "data-name": "id4"
  }, React.createElement("path", {
    "data-name": "path66",
    d: "M214.63 236.04c.15-2.26.32-4.51.64-6.75h-51.11v6.75c5.13.32 10.12.8 15.27 1.12 9.64 11.73 19.28 23.47 29.08 35.35v18.17c-5.46.48-10.93.8-16.39 1.29v5.94h50.47v-5.94c-5.46-.33-10.93-.48-16.39-.65.17-6.42.32-13 .48-19.44 9.47-8.36 18.81-16.71 28.13-25.07 4.81-.32 9.64-.64 14.62-1.12v-7.88c-14.3.17-28.45.32-42.75.64v6.6c5.3.32 10.61.47 15.91.64-6.91 5.95-13.83 11.73-20.73 17.68-7.07-8.68-14.15-17.52-21.22-26.2 4.66-.49 9.31-.81 13.99-1.13z",
    fill: "#fff"
  }))), React.createElement("g", {
    "data-name": "g68"
  }, React.createElement("g", {
    "data-name": "id5"
  }, React.createElement("path", {
    "data-name": "path71",
    d: "M331.47 199.72l-38.74-1.94c-.65 30.7-1.29 61.56-1.93 92.27 6.1.64 12.37 1.28 18.48 1.93q11.09-46.29 22.19-92.26zm-42.43 123.59h22.18v-18.48l-24.1-1.93c.63 6.91 1.28 13.66 1.92 20.41z",
    fill: "#6b0094"
  }))))), React.createElement("g", {
    "data-name": "layer1"
  }, React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M424.45 328.74l-25.54-17.9v-94.33l25.7 7.87v63.43l-24.96 22.24 60.91-32.04-16.88-7.64-11.43-24.78 56.45 17.3v27.59l-64.25 38.26z",
    "data-name": "path2998"
  }), React.createElement("g", {
    "data-name": "flowRoot3000"
  }, React.createElement("path", {
    d: "M694.22 479.89H694v6.92h-7.67v-70.93l7.67 2.29v29.16h.19q5.66-9.54 16.56-9.55 9.22 0 14.43 6.43t5.22 17.24q0 12-5.85 19.25t-16 7.23a15.76 15.76 0 0 1-14.33-8.04zm-.22-19.32v6.69a14.25 14.25 0 0 0 3.86 10.08 13.77 13.77 0 0 0 20.73-1.19q4-5.33 4-14.83 0-8-3.7-12.54a12.23 12.23 0 0 0-10-4.54 13.6 13.6 0 0 0-10.76 4.66 17.09 17.09 0 0 0-4.13 11.67z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__k)",
    "data-name": "path3009"
  }), React.createElement("path", {
    d: "M744.4 428a4.86 4.86 0 0 1-3.51-1.4 4.74 4.74 0 0 1-1.45-3.56 4.91 4.91 0 0 1 5-5 5 5 0 0 1 3.58 1.43 5 5 0 0 1 0 7.09 4.91 4.91 0 0 1-3.62 1.44zm3.74 58.85h-7.67V438.9h7.67z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__l)",
    "data-name": "path3011"
  }), React.createElement("path", {
    d: "M800.67 486.82H793v-27.33q0-15.25-11.14-15.25a12.08 12.08 0 0 0-9.52 4.33 16 16 0 0 0-3.77 10.93v27.33h-7.67V438.9h7.67v8h.19q5.43-9.08 15.72-9.08 7.86 0 12 5.08t4.16 14.67z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__m)",
    "data-name": "path3013"
  }), React.createElement("path", {
    d: "M855 483q0 26.39-25.27 26.39a33.92 33.92 0 0 1-15.58-3.39l2.1-6.87c4.69 2.32 9 3.61 13.32 3.61 11.4 0 17.71-6.19 17.71-18.73v-5.24h-.19q-5.47 9.17-16.47 9.17a18 18 0 0 1-14.39-6.39c-3.63-4.26-5.61-10.05-5.61-17.23 0-8.14 2.11-14.54 6-19.34s9.38-7.34 16.18-7.34c6.46 0 11.13 2.34 14.25 7.52h.19v-6.26H855zm-7.67-17.83v-7.07a13.82 13.82 0 0 0-13.48-13.85c-11.11 0-15.08 10.11-15.16 19.65 0 9.11 4.63 17.24 14.08 17.24s14.42-7.49 14.51-15.99z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__n)",
    "data-name": "path3015"
  }))), React.createElement("g", {
    "data-name": "layer1",
    fill: "#f4bd27"
  }, React.createElement("path", {
    "data-name": "path2998",
    d: "M431.05 325.67l-24.1-16.93v-89.16l24.29 7.44v59.95l-23.59 21 57.57-30.29-16-7.22-10.8-23.42 53.36 16.41v26z"
  }), React.createElement("g", {
    "data-name": "flowRoot3000"
  }, React.createElement("path", {
    "data-name": "path3009",
    d: "M530.95 297.88h-.18v6.57h-7.22v-67l7.25 2.16v27.56h.15q5.35-9 15.66-9 8.71 0 13.64 6.08t4.93 16.3q0 11.37-5.53 18.2t-15.1 6.7a14.9 14.9 0 0 1-13.6-7.57zm-.18-18.27v6.32a13.47 13.47 0 0 0 3.68 9.52 13 13 0 0 0 19.59-1.13q3.74-5 3.74-14 0-7.56-3.49-11.85a11.56 11.56 0 0 0-9.46-4.29 12.85 12.85 0 0 0-10.17 4.4 16.16 16.16 0 0 0-3.85 11z"
  }), React.createElement("path", {
    "data-name": "path3011",
    d: "M578.41 248.79a4.59 4.59 0 0 1-3.32-1.33 4.48 4.48 0 0 1-1.37-3.36 4.64 4.64 0 0 1 4.69-4.73 4.68 4.68 0 0 1 3.38 1.35 4.72 4.72 0 0 1 0 6.7 4.64 4.64 0 0 1-3.38 1.37zm3.54 55.66h-7.25v-45.31h7.25z"
  }), React.createElement("path", {
    "data-name": "path3013",
    d: "M631.59 304.45h-7.25V278.6q0-14.42-10.53-14.42a11.42 11.42 0 0 0-9 4.09 15.16 15.16 0 0 0-3.56 10.33v25.85H594v-45.31h7.25v7.52h.18q5.13-8.58 14.86-8.58 7.43 0 11.37 4.8t3.94 13.86z"
  }), React.createElement("path", {
    "data-name": "path3015",
    d: "M682.95 300.8q0 24.94-23.88 24.94a32.07 32.07 0 0 1-14.68-3.18l2-6.5c4.44 2.19 8.52 3.41 12.59 3.41 10.78 0 16.74-5.85 16.74-17.7v-5h-.18q-5.24 8.68-15.59 8.68a17 17 0 0 1-13.6-6c-3.43-4-5.3-9.5-5.3-16.28 0-7.7 2-13.74 5.7-18.28s8.87-6.94 15.3-6.94c6.1 0 10.52 2.21 13.47 7.1h.18v-5.91h7.25zm-7.3-16.85v-6.68a13.06 13.06 0 0 0-12.7-13.09c-10.5 0-14.25 9.55-14.33 18.57 0 8.61 4.38 16.29 13.31 16.29s13.63-7.06 13.72-15.09z"
  }))), React.createElement("g", {
    "data-name": "g10"
  }, React.createElement("path", {
    d: "M862.05 324.38c-5.31 0-10.84 3.88-10.84 3.88v-2.49c0-.55-.22-.77-.76-.77h-6.78a.78.78 0 0 0-.87.77v53.15c0 .55.22.88.77.88h6.89a.78.78 0 0 0 .76-.88v-45.5a14.73 14.73 0 0 1 7.08-2c3.7 0 6.61 1.84 6.61 5.6v41.92a.81.81 0 0 0 .87.88h6.77a.78.78 0 0 0 .76-.88v-44.33c0-6.67-4.1-10.23-11.26-10.23z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__o)",
    "data-name": "path38"
  }), React.createElement("path", {
    d: "M914.76 297.72H908a.78.78 0 0 0-.87.77v26.81a20 20 0 0 0-6.88-1.53c-11 0-18.56 10.53-18.56 30.77 0 17.34 7.35 26.65 16.94 26.65 4 0 7.38-2.32 9.82-4.49l1.48 2.51a.93.93 0 0 0 1 .58h3.9a.78.78 0 0 0 .77-.88v-80.43c0-.55-.22-.77-.76-.77zm-24.13 55c0-11.15 3.26-22.2 9.92-22.2a10.28 10.28 0 0 1 6.56 2.44v39.3a12.85 12.85 0 0 1-6 1.75c-7.28-.01-10.48-8.57-10.48-21.26z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__p)",
    "data-name": "path40"
  }), React.createElement("path", {
    d: "M940.72 323.88c-11.28 0-16.85 14.77-16.85 30.85 0 16.83 7.94 26.26 18.16 26.26a25.82 25.82 0 0 0 11.89-3.4.82.82 0 0 0 .42-1l-.86-3.56a.76.76 0 0 0-.87-.65 36.23 36.23 0 0 1-7.54 1.08c-8.36 0-12.19-7.44-12.19-17.31v-2.4a63.71 63.71 0 0 0 6.65.58h15.77v-4.56c0-16.84-5.89-25.85-14.57-25.85zm-.54 23.57c-2.5 0-7 .62-7 .62s.06-1.81.28-3.55c1-9.23 3.18-13.9 7-13.9 3.3 0 5.57 4.78 6.11 13.14.11 1.74.11 3.69.11 3.69h-6.43z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__q)",
    "data-name": "path42"
  }), React.createElement("path", {
    d: "M829.92 330.78c-2.51-4.94-7-7.1-12.08-7.1a33.86 33.86 0 0 0-11.83 2.8c-.67.3-1.09.57-1.09 1.09a2.21 2.21 0 0 0 .33 1l2.31 4.94a1 1 0 0 0 .93.69 1.71 1.71 0 0 0 .92-.36c3.34-2.14 5.79-3.31 7.72-3.31 2.56 0 4.3 1.7 5.37 4.26a25.6 25.6 0 0 1 1.39 9.48v1.12a17.27 17.27 0 0 0-7.57-2c-9.79 0-15.07 9.31-15.07 19.26 0 10.73 6.17 18.59 13.59 18.59 4.13 0 7.87-2.43 10.37-5.48 0 0 1.33 3.18 1.51 3.56a.77.77 0 0 0 .86.52h4a.78.78 0 0 0 .76-.88v-30.88c0-7.58-.38-13.36-2.38-17.3zm-6 40.39a9.43 9.43 0 0 1-6.36 2.86 5.94 5.94 0 0 1-5-2.76c-1.58-2.18-2.31-5.54-2.31-9.25 0-5.88 2.17-11.91 6.77-11.91a11.15 11.15 0 0 1 6.91 2.44v18.63z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__r)",
    "data-name": "path44"
  }), React.createElement("path", {
    d: "M991.08 325h-6a1.17 1.17 0 0 0-1.19.81l-4 10.52c-.75 2-2.76 7.69-2.76 7.69h-.23s-1.48-4.15-2.28-6.21c-.64-1.68-4-10.54-4.44-11.64-.23-.59-.48-1.17-1.35-1.17h-6.63a1 1 0 0 0-.9 1.29c.24.5 10.77 24.51 10.77 24.51s-11.31 26.89-11.64 27.49a1 1 0 0 0 .89 1.5h5.79c1 0 1.37-.52 1.67-1.35.83-2.33 2.07-5.58 3.83-10.6 1.16-3.33 3-9.16 3-9.16h.2s2 5.95 2.76 7.89c1.89 4.92 4.32 11.34 4.57 12s.64 1.2 1.32 1.2H991c.65 0 1-.74.65-1.39-.73-1.54-7-16.72-11.3-26.69 0 0 11.25-24.84 11.47-25.45s.15-1.26-.77-1.26z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__s)",
    "data-name": "path46"
  }), React.createElement("path", {
    d: "M808.1 289.72h-7.62a1.09 1.09 0 0 0-1.19.81c-.1.48-11.42 35-12.25 37.92-.58 2-2.49 9.24-2.94 11l-3.94-10.76c-1-3-10.13-28.61-10.4-29.64-.15-.56-.41-1.26-1.39-1.26h-7.44A1 1 0 0 0 760 299c.19.4 13.62 36.16 19 49.82v30c0 .55.22.88.77.88h7a.78.78 0 0 0 .76-.88v-29.8c4.52-12.64 21-57.62 21.23-58.13s.16-1.26-.77-1.26z",
    transform: "translate(-164.05 -180.55)",
    fill: "url(#prefix__t)",
    "data-name": "path48"
  })), React.createElement("g", {
    "data-name": "g10"
  }, React.createElement("path", {
    "data-name": "path38",
    d: "M698.95 144.59c-4.94 0-10.1 3.61-10.1 3.61v-2.32c0-.51-.2-.71-.71-.71h-6.31a.73.73 0 0 0-.81.71v49.49c0 .51.2.82.71.82h6.41a.73.73 0 0 0 .71-.82v-42.36a13.71 13.71 0 0 1 6.59-1.89c3.44 0 6.16 1.71 6.16 5.21v39a.75.75 0 0 0 .81.82h6.31a.72.72 0 0 0 .71-.82v-41.21c.01-6.22-3.8-9.53-10.48-9.53z",
    fill: "#010202"
  }), React.createElement("path", {
    "data-name": "path40",
    d: "M748.03 119.77h-6.31a.73.73 0 0 0-.81.71v25a18.64 18.64 0 0 0-6.41-1.42c-10.25 0-17.28 9.8-17.28 28.65 0 16.15 6.84 24.81 15.77 24.81 3.76 0 6.87-2.16 9.15-4.18l1.38 2.34a.86.86 0 0 0 .89.54h3.63a.73.73 0 0 0 .71-.82v-74.95c0-.51-.2-.71-.71-.71zm-22.47 51.24c0-10.39 3-20.67 9.24-20.67a9.57 9.57 0 0 1 6.11 2.27v36.59a12 12 0 0 1-5.62 1.63c-6.74 0-9.72-8.01-9.72-19.82z",
    fill: "#010202"
  }), React.createElement("path", {
    "data-name": "path42",
    d: "M772.2 144.13c-10.51 0-15.69 13.75-15.69 28.72 0 15.67 7.4 24.45 16.9 24.45a24 24 0 0 0 11.07-3.16.77.77 0 0 0 .39-1l-.8-3.31a.7.7 0 0 0-.81-.61 33.73 33.73 0 0 1-7 1c-7.78 0-11.35-6.92-11.35-16.12v-2.23a59.31 59.31 0 0 0 6.19.54h14.68v-4.25c0-15.68-5.49-24.07-13.57-24.07zm-.51 21.95c-2.32 0-6.55.57-6.55.57s.06-1.69.26-3.31c.91-8.6 3-12.94 6.5-12.94 3.08 0 5.18 4.45 5.69 12.24.1 1.62.1 3.44.1 3.44h-6z",
    fill: "#010202"
  }), React.createElement("path", {
    "data-name": "path44",
    d: "M669.05 150.56c-2.33-4.6-6.49-6.61-11.25-6.61a31.52 31.52 0 0 0-11 2.6c-.62.28-1 .53-1 1a2.06 2.06 0 0 0 .31.92l2.15 4.6a.91.91 0 0 0 .87.64 1.59 1.59 0 0 0 .86-.33c3.11-2 5.39-3.08 7.19-3.08 2.39 0 4 1.58 5 4a23.84 23.84 0 0 1 1.29 8.83v1a16.08 16.08 0 0 0-7-1.9c-9.12 0-14 8.67-14 17.93 0 10 5.75 17.31 12.65 17.31 3.85 0 7.33-2.26 9.66-5.11 0 0 1.24 3 1.4 3.32a.72.72 0 0 0 .8.49h3.69a.73.73 0 0 0 .71-.82v-28.69c0-7.05-.36-12.43-2.22-16.1zm-5.62 37.61a8.78 8.78 0 0 1-5.92 2.66 5.53 5.53 0 0 1-4.66-2.57c-1.47-2-2.15-5.15-2.15-8.61 0-5.47 2-11.09 6.3-11.09a10.38 10.38 0 0 1 6.43 2.27v17.34z",
    fill: "#010202"
  }), React.createElement("path", {
    "data-name": "path46",
    d: "M819.09 145.16h-5.62a1.09 1.09 0 0 0-1.11.76c-.36.94-2.73 7.2-3.71 9.79-.69 1.85-2.57 7.16-2.57 7.16h-.22s-1.38-3.86-2.12-5.79c-.6-1.56-3.73-9.82-4.13-10.84-.21-.55-.45-1.09-1.25-1.09h-6.16a.91.91 0 0 0-.84 1.2c.22.46 10 22.82 10 22.82s-10.53 25-10.84 25.6a1 1 0 0 0 .83 1.39h5.4c.92 0 1.28-.48 1.56-1.26.78-2.17 1.93-5.2 3.57-9.87 1.08-3.1 2.8-8.53 2.8-8.53h.19s1.88 5.54 2.57 7.35c1.76 4.58 4 10.56 4.26 11.19s.6 1.12 1.23 1.12h6.12c.61 0 .89-.69.6-1.29-.68-1.44-6.49-15.56-10.53-24.85 0 0 10.47-23.12 10.67-23.7s.14-1.18-.72-1.18z",
    fill: "#010202"
  }), React.createElement("path", {
    "data-name": "path48",
    d: "M648.73 112.32h-7.09a1 1 0 0 0-1.11.76c-.09.45-10.64 32.63-11.4 35.31-.54 1.9-2.32 8.6-2.74 10.21l-3.67-10c-.89-2.76-9.43-26.64-9.68-27.59-.14-.52-.38-1.18-1.3-1.18h-6.92a.91.91 0 0 0-.84 1.2c.17.37 12.68 33.67 17.73 46.39v28c0 .51.2.82.71.82h6.53a.73.73 0 0 0 .71-.82v-27.8c4.21-11.77 19.6-53.65 19.76-54.12s.14-1.18-.72-1.18z",
    fill: "#e52620"
  })));
};

UndrawSearchEngines.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSearchEngines;