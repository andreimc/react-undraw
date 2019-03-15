function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCoWorkers = _props => {
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
    viewBox: "0 0 990 758.22",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 369.6,
    y1: 747.98,
    x2: 495.41,
    y2: 747.98,
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
    x1: 406.65,
    y1: 569.23,
    x2: 580.77,
    y2: 569.23,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 406.65,
    y1: 566.88,
    x2: 580.77,
    y2: 566.88,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 450.31,
    y1: 393.69,
    x2: 539.32,
    y2: 393.69,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 332.62,
    y1: 585.2,
    x2: 485.91,
    y2: 585.2,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 330.25,
    y1: 585.2,
    x2: 483.54,
    y2: 585.2,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 325.69,
    y1: 523.49,
    x2: 468.11,
    y2: 523.49,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 512.25,
    y1: 535.81,
    x2: 666.3,
    y2: 535.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 514.63,
    y1: 535.81,
    x2: 668.68,
    y2: 535.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 334.24,
    y1: 335.17,
    x2: 375.57,
    y2: 335.17,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 404.05,
    y1: 350.24,
    x2: 432.54,
    y2: 350.24,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 554.15,
    y1: 502.96,
    x2: 564.83,
    y2: 502.96,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 382.15,
    y1: 523.48,
    x2: 401.05,
    y2: 523.48,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 396.31,
    y1: 603.61,
    x2: 450.31,
    y2: 603.61,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 466.47,
    y1: 363.78,
    x2: 534.98,
    y2: 363.78,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 355.99,
    y1: 258.44,
    x2: 465.17,
    y2: 258.44,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 436.13,
    y1: 299.32,
    x2: 566.69,
    y2: 299.32,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 434.94,
    y1: 298.14,
    x2: 565.5,
    y2: 298.14,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 488.88,
    y1: 375.59,
    x2: 562.07,
    y2: 375.59,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 488.88,
    y1: 376.76,
    x2: 562.07,
    y2: 376.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 765.65,
    y1: 677.74,
    x2: 765.65,
    y2: 269.69,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 579.6,
    y1: 758.22,
    x2: 579.6,
    y2: 555.42,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 578.2,
    y1: 568.04,
    x2: 578.2,
    y2: 387.91,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M818 668h-71v-40h71zm-68-3h65v-34h-65zM889 666h-71v-40h71zm-68-3h65v-34h-65zM960 666h-71v-40h71zm-68-3h65v-34h-65zM960 626h-71v-40h71zm-68-3h65v-34h-65zM889 626h-71v-40h71zm-68-3h65v-34h-65zM89 666H18v-40h71zm-68-3h65v-34H21zM160 666H89v-40h71zm-68-3h65v-34H92zM231 666h-71v-40h71zm-68-3h65v-34h-65zM302 668h-71v-40h71zm-68-3h65v-34h-65zM231 626h-71v-40h71zm-68-3h65v-34h-65zM160 626H89v-40h71zm-68-3h65v-34H92z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("path", {
    d: "M890.28 542.36s-13.14-44.63 2.46-77.48a70.49 70.49 0 0 0 5.7-44.22 118.55 118.55 0 0 0-6.26-20.76",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M901.9 379.11c0 5.47-9.9 21.33-9.9 21.33s-9.9-15.86-9.9-21.33a9.905 9.905 0 0 1 19.81 0zM918.27 409.44c-3 4.59-19.91 12.52-19.91 12.52s.31-18.7 3.28-23.29a9.904 9.904 0 0 1 16.63 10.76zM917.55 461.22c-4.88 2.46-23.5.76-23.5.76s9.7-16 14.59-18.45a9.906 9.906 0 0 1 8.92 17.69zM908.19 500.27c-4.4 3.25-23 4.72-23 4.72s6.86-17.39 11.26-20.65a9.902 9.902 0 1 1 11.78 15.92zM877.57 423.03c3.92 3.81 22.2 7.76 22.2 7.76s-4.48-18.16-8.4-22a9.904 9.904 0 1 0-13.8 14.21zM867.2 468.83c4.88 2.46 23.5.76 23.5.76s-9.7-16-14.59-18.45a9.906 9.906 0 0 0-8.92 17.69zM863.23 514.74c4.4 3.25 23 4.72 23 4.72s-6.82-17.35-11.23-20.64a9.902 9.902 0 1 0-11.78 15.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M901.9 379.11c0 5.47-9.9 21.33-9.9 21.33s-9.9-15.86-9.9-21.33a9.905 9.905 0 0 1 19.81 0zM918.27 409.44c-3 4.59-19.91 12.52-19.91 12.52s.31-18.7 3.28-23.29a9.904 9.904 0 0 1 16.63 10.76zM917.55 461.22c-4.88 2.46-23.5.76-23.5.76s9.7-16 14.59-18.45a9.906 9.906 0 0 1 8.92 17.69zM908.19 500.27c-4.4 3.25-23 4.72-23 4.72s6.86-17.39 11.26-20.65a9.902 9.902 0 1 1 11.78 15.92zM877.57 423.03c3.92 3.81 22.2 7.76 22.2 7.76s-4.48-18.16-8.4-22a9.904 9.904 0 1 0-13.8 14.21zM867.2 468.83c4.88 2.46 23.5.76 23.5.76s-9.7-16-14.59-18.45a9.906 9.906 0 0 0-8.92 17.69zM863.23 514.74c4.4 3.25 23 4.72 23 4.72s-6.82-17.35-11.23-20.64a9.902 9.902 0 1 0-11.78 15.92z",
    opacity: 0.25
  }), React.createElement("path", {
    d: "M168.8 542.7s-13.34-45.29 2.5-78.59a71.54 71.54 0 0 0 5.79-44.88 120.31 120.31 0 0 0-6.36-21.12",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M180.59 377.11c0 5.55-10.05 21.65-10.05 21.65s-10.06-16.15-10.06-21.65a10.05 10.05 0 0 1 20.1 0zM197.2 407.81c-3 4.66-20.2 12.71-20.2 12.71s.31-19 3.33-23.63a10.05 10.05 0 1 1 16.87 10.92zM196.47 460.35c-5 2.5-23.85.77-23.85.77s9.85-16.22 14.8-18.72a10.051 10.051 0 0 1 9.05 17.95zM187 499.98c-4.46 3.3-23.38 4.79-23.38 4.79s7-17.65 11.43-21a10.064 10.064 0 0 1 12 16.16zM155.89 421.59c4 3.87 22.53 7.87 22.53 7.87s-4.54-18.42-8.52-22.29a10.05 10.05 0 1 0-14 14.42zM145.37 468.11c5 2.5 23.85.77 23.85.77s-9.85-16.22-14.8-18.72a10.051 10.051 0 0 0-9.05 17.95zM141.34 514.67c4.46 3.3 23.38 4.79 23.38 4.79s-7-17.65-11.43-21a10.064 10.064 0 1 0-12 16.16z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M180.59 377.11c0 5.55-10.05 21.65-10.05 21.65s-10.06-16.15-10.06-21.65a10.05 10.05 0 0 1 20.1 0zM197.2 407.81c-3 4.66-20.2 12.71-20.2 12.71s.31-19 3.33-23.63a10.05 10.05 0 1 1 16.87 10.92zM196.47 460.35c-5 2.5-23.85.77-23.85.77s9.85-16.22 14.8-18.72a10.051 10.051 0 0 1 9.05 17.95zM187 499.98c-4.46 3.3-23.38 4.79-23.38 4.79s7-17.65 11.43-21a10.064 10.064 0 0 1 12 16.16zM155.89 421.59c4 3.87 22.53 7.87 22.53 7.87s-4.54-18.42-8.52-22.29a10.05 10.05 0 1 0-14 14.42zM145.37 468.11c5 2.5 23.85.77 23.85.77s-9.85-16.22-14.8-18.72a10.051 10.051 0 0 0-9.05 17.95zM141.34 514.67c4.46 3.3 23.38 4.79 23.38 4.79s-7-17.65-11.43-21a10.064 10.064 0 1 0-12 16.16z",
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M92.69 541.58s-10.16-34.47 1.91-59.92a54.52 54.52 0 0 0 4.41-34.2 91.69 91.69 0 0 0-4.84-16.05",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M101.68 415.35c0 4.23-7.66 16.5-7.66 16.5s-7.66-12.27-7.66-16.5a7.66 7.66 0 0 1 15.32 0zM114.34 438.78c-2.3 3.55-15.4 9.69-15.4 9.69s.24-14.46 2.54-18a7.661 7.661 0 1 1 12.86 8.33zM113.79 478.82c-3.78 1.9-18.18.59-18.18.59s7.5-12.36 11.28-14.27a7.66 7.66 0 0 1 6.9 13.68zM106.55 509.03c-3.4 2.52-17.82 3.65-17.82 3.65s5.31-13.45 8.71-16a7.661 7.661 0 0 1 9.11 12.32zM82.86 449.29c3 2.95 17.17 6 17.17 6s-3.46-14-6.5-17a7.662 7.662 0 1 0-10.67 11zM74.84 484.72c3.78 1.9 18.18.59 18.18.59s-7.5-12.36-11.28-14.27a7.66 7.66 0 0 0-6.9 13.68zM71.77 520.22c3.4 2.52 17.82 3.65 17.82 3.65s-5.31-13.45-8.71-16a7.661 7.661 0 1 0-9.11 12.32z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M101.68 415.35c0 4.23-7.66 16.5-7.66 16.5s-7.66-12.27-7.66-16.5a7.66 7.66 0 0 1 15.32 0zM114.34 438.78c-2.3 3.55-15.4 9.69-15.4 9.69s.24-14.46 2.54-18a7.661 7.661 0 1 1 12.86 8.33zM113.79 478.82c-3.78 1.9-18.18.59-18.18.59s7.5-12.36 11.28-14.27a7.66 7.66 0 0 1 6.9 13.68zM106.55 509.03c-3.4 2.52-17.82 3.65-17.82 3.65s5.31-13.45 8.71-16a7.661 7.661 0 0 1 9.11 12.32zM82.86 449.29c3 2.95 17.17 6 17.17 6s-3.46-14-6.5-17a7.662 7.662 0 1 0-10.67 11zM74.84 484.72c3.78 1.9 18.18.59 18.18.59s-7.5-12.36-11.28-14.27a7.66 7.66 0 0 0-6.9 13.68zM71.77 520.22c3.4 2.52 17.82 3.65 17.82 3.65s-5.31-13.45-8.71-16a7.661 7.661 0 1 0-9.11 12.32z",
    opacity: 0.25
  }), React.createElement("g", {
    opacity: 0.7
  }, React.createElement("path", {
    fill: primaryColor,
    opacity: 0.6,
    d: "M0 80h990v505H0z"
  }), React.createElement("path", {
    d: "M0 80v506h990V80zm44 44h429v187H44zm0 231h429v187H44zm902 187H517V355h429zm0-231H517V124h429z",
    opacity: 0.25
  })), React.createElement("g", {
    opacity: 0.7
  }, React.createElement("path", {
    d: "M468.11 677.77s-86.64-31.68-98.5 12.91l33.23 84.47 3.56 54h72.39v-45.79s-10.68-45.76 16.62-73.91z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M482.62 426.39c-3.68-1.22-8.11-2.31-11.11.12-1.74 1.41-2.49 3.68-3.84 5.46-4.49 5.89-13.54 4.79-20.69 6.9-10.51 3.1-17 13.51-20.72 23.71-16.46 45 1.89 96.47-12.44 142.17-4.22 13.45-11.12 28.38-4.3 40.75 2.27 4.13 6 7.57 7.1 12.13 1.54 6.19-1.43 14.31 3.76 18.08 1.62 1.17 3.67 1.54 5.61 2 11.68 3.08 20.53 12.17 29.43 20.25s19.6 15.9 31.67 15.37a51.57 51.57 0 0 0 11.48-2.28l59.9-16.68c6-1.67 12.52-3.69 16-8.81 2.13-3.13 2.8-7 3.34-10.72a282.42 282.42 0 0 0 2.93-42.93c0-4.74-.22-9.59-2-14-2-5.09-6-9.16-8.91-13.81-5.62-9-7.13-19.81-8.52-30.28-2.21-16.67-4.42-33.67-1.36-50.21 1.31-7.1 3.57-14 5.07-21.05a99.86 99.86 0 0 0 1.14-34.93c-1.4-9.65-4.4-19.44-11-26.7a27.91 27.91 0 0 0-16.6-9c-8.1-1-12.13 3.66-19.35 5.4-10.68 2.67-26.32-7.55-36.59-10.94z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__b)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M482.62 424c-3.68-1.22-8.11-2.31-11.11.12-1.74 1.41-2.49 3.68-3.84 5.46-4.49 5.89-13.54 4.79-20.69 6.9-10.51 3.1-17 13.51-20.72 23.71-16.46 45 1.89 96.47-12.44 142.17-4.22 13.45-11.12 28.38-4.3 40.75 2.27 4.13 6 7.57 7.1 12.13 1.54 6.19-1.43 14.31 3.76 18.08 1.62 1.17 3.67 1.54 5.61 2 11.68 3.08 20.53 12.17 29.43 20.25S475 711.56 487.09 711a51.57 51.57 0 0 0 11.48-2.28l59.9-16.68c6-1.67 12.52-3.69 16-8.81 2.13-3.13 2.8-7 3.34-10.72a282.42 282.42 0 0 0 2.93-42.93c0-4.74-.22-9.59-2-14-2-5.09-6-9.16-8.91-13.81-5.62-9-7.13-19.81-8.52-30.28-2.21-16.67-4.42-33.67-1.36-50.21 1.31-7.1 3.57-14 5.07-21.05a99.86 99.86 0 0 0 1.14-34.93c-1.4-9.65-4.4-19.44-11-26.7a27.91 27.91 0 0 0-16.6-9c-8.1-1-12.13 3.66-19.35 5.4-10.68 2.6-26.32-7.56-36.59-11z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M465.74 335.19s1.19 44.58-13.05 43.41S493 452.51 493 452.51l46.28-24.64S512 384.47 531 357.48s-65.26-22.29-65.26-22.29z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    d: "M386.22 714.14s-9.49 64.53-33.23 46.93-20.18-46.93-20.18-46.93S379.1 589.78 376.73 571s79-164.7 79-164.7l30.14 239.79s-90.16 32.85-99.65 68.05z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__e)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M383.85 714.14s-9.49 64.53-33.23 46.93-20.18-46.93-20.18-46.93S376.73 589.78 374.35 571s79-164.7 79-164.7l30.14 239.79s-90.15 32.85-99.64 68.05z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M468.11 363.35S421.82 395 404 393.85l-13.83 3.76a75.91 75.91 0 0 0-54.78 58.47l-.22 1.12c-7.1 37.55-9.48 140.8-9.48 140.8s1.19 27 13.05 34l76 51.62s-2.37-56.31 26.11-62.18-7.12-2.35-7.12-2.35l-52.22-30.5s1.19-45.76 15.43-61 64.09-95 64.09-95l-14.24-49.27z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    d: "M519.14 393.85s29.15 7.63 49.56 11.36a20.54 20.54 0 0 1 14.84 11.2c6.16 12.71 15.55 35.7 13.93 54.87l17.8 69.22 51 61L620 622.63l-52.2-57.49 42.72 109.11-79.52 3.52s-23.74-176-17.8-205.31z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__h)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M521.51 393.85s29.15 7.63 49.56 11.36a20.54 20.54 0 0 1 14.84 11.2c6.16 12.71 15.55 35.7 13.93 54.87l17.8 69.22 51 61-46.28 21.12-52.22-57.49 42.76 109.12-79.52 3.52s-23.74-176-17.8-205.31z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__i)"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M359.21 288.72l16.36 79.41-26.7 13.49-14.63-71.53 24.97-21.37z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M404.05 374l12.46-51.04 16.03 29.92-8.31 24.64-20.18-3.52z"
  }), React.createElement("path", {
    d: "M554.15 460.14s0 79.78 10.68 85.64",
    transform: "translate(-105 -70.89)",
    opacity: 0.1,
    fill: "url(#prefix__l)"
  }), React.createElement("path", {
    d: "M401.05 480.08s-24.63 78.57-17.66 86.8",
    transform: "translate(-105 -70.89)",
    opacity: 0.1,
    fill: "url(#prefix__m)"
  }), React.createElement("path", {
    d: "M396.31 588s47.48 30.69 54 31.18",
    transform: "translate(-105 -70.89)",
    opacity: 0.1,
    fill: "url(#prefix__n)"
  }), React.createElement("path", {
    d: "M466.92 339.88s.18 6.87-.46 15.14a54.62 54.62 0 0 0 50.3 33 55.57 55.57 0 0 0 8.75-.7c-.31-8.78 1.38-17.59 6.68-25.11 18.99-27.02-65.27-22.33-65.27-22.33z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__o)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 410.58,
    cy: 258.44,
    rx: 54.59,
    ry: 53.97,
    fill: "url(#prefix__p)"
  }), React.createElement("path", {
    d: "M550.22 306.64c6.61.88 15-1.3 16.31-7.78 1.61-8.18-9.46-13.5-11.17-21.67-.64-3.06.12-6.26-.25-9.37-.74-6.26-5.86-11.08-11.07-14.72a85.87 85.87 0 0 0-56.62-14.92c-2.48.23-5.09.63-7 2.2-2.18 1.77-3 4.65-4.51 7-5.12 8.18-16.62 9.14-24.87 14.24-9.65 6-14.43 17.67-14.86 28.91s2.81 22.27 6 33.07c2.73 9.18 5.59 18.61 11.58 26.13s15.93 12.77 25.34 10.51c-4.31-3.07-1.18-10.2 3.49-12.7s10.47-2.93 14.46-6.38 5.19-9.1 6.49-14.24c1.64-6.48 4-13.06 8.8-17.79 9.41-9.26 26.36-4.02 37.88-2.49z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__q)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M549 305.47c6.61.88 15-1.3 16.31-7.78 1.61-8.18-9.46-13.5-11.17-21.67-.64-3.06.12-6.26-.25-9.37-.74-6.26-5.86-11.08-11.07-14.72A85.87 85.87 0 0 0 486.24 237c-2.48.23-5.09.63-7 2.2-2.18 1.77-3 4.65-4.51 7-5.12 8.18-16.62 9.14-24.87 14.24-9.65 6-14.43 17.67-14.86 28.91s2.81 22.27 6 33.07c2.73 9.18 5.59 18.61 11.58 26.13s15.93 12.77 25.34 10.51c-4.31-3.07-1.18-10.2 3.49-12.7s10.47-2.93 14.46-6.38 5.19-9.1 6.49-14.24c1.64-6.48 4-13.06 8.8-17.79 9.4-9.25 26.35-4.02 37.84-2.48z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__r)"
  }), React.createElement("path", {
    d: "M506.14 336.61c-.8 5.58-2.58 15.24-5.93 21.34a170.66 170.66 0 0 0-11.33 24.76s21.86 16.73 33 28.16a25.92 25.92 0 0 0 27.22 6.59c5.79-2.08 10.86-6.1 12.21-13.64 2.12-11.89-.4-20.86-2.78-26.17a19.45 19.45 0 0 1-.08-16c.82-1.8 1.78-3.21 2.85-3.56 0 0-21.36-4.69-22.55 1.17s-17.8 11.73-21.36 1.17l-1-23.28a5.12 5.12 0 0 0-5.14-4.88 5.12 5.12 0 0 0-5.11 4.34z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__s)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M506.14 337.79c-.8 5.58-2.58 15.24-5.93 21.34a170.66 170.66 0 0 0-11.33 24.76s21.86 16.73 33 28.16a25.92 25.92 0 0 0 27.22 6.59c5.79-2.08 10.86-6.1 12.21-13.64 2.12-11.89-.4-20.86-2.78-26.17a19.45 19.45 0 0 1-.08-16c.82-1.8 1.78-3.21 2.85-3.56 0 0-21.36-4.69-22.55 1.17s-17.8 11.73-21.36 1.17l-1-23.28a5.12 5.12 0 0 0-5.14-4.88 5.12 5.12 0 0 0-5.11 4.34z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__t)"
  })), React.createElement("path", {
    d: "M364.27 606.11s-83.17-30.76-94.56 12.53l31.9 82 3.39 52.47h69.5v-44.45s-10.25-44.43 16-71.78z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M378.2 362c-3.53-1.18-7.79-2.24-10.66.12-1.67 1.37-2.39 3.57-3.69 5.3-4.31 5.72-13 4.65-19.86 6.7-10.09 3-16.31 13.12-19.89 23-15.8 43.69 1.81 93.69-11.94 138.06-4 13.06-10.67 27.56-4.13 39.57 2.18 4 5.73 7.35 6.82 11.78 1.48 6-1.37 13.9 3.61 17.56 1.55 1.14 3.52 1.49 5.38 2 11.21 3 19.71 11.82 28.25 19.67s18.82 15.44 30.4 14.93a49 49 0 0 0 11-2.21l57.5-16.2c5.77-1.63 12-3.59 15.37-8.56 2-3 2.69-6.78 3.21-10.41a277.38 277.38 0 0 0 2.81-41.69c0-4.6-.21-9.31-1.9-13.59-2-4.94-5.76-8.89-8.56-13.42-5.39-8.72-6.85-19.24-8.18-29.41-2.12-16.19-4.24-32.7-1.31-48.76 1.26-6.89 3.43-13.59 4.87-20.44a98.08 98.08 0 0 0 1.1-33.92c-1.34-9.37-4.23-18.88-10.55-25.93a26.71 26.71 0 0 0-15.94-8.74c-7.78-1-11.65 3.56-18.58 5.25-10.25 2.51-25.27-7.36-35.13-10.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M378.2 359.72c-3.53-1.18-7.79-2.24-10.66.12-1.67 1.37-2.39 3.57-3.69 5.3-4.31 5.72-13 4.65-19.86 6.7-10.09 3-16.31 13.12-19.89 23-15.8 43.69 1.81 93.69-11.94 138.06-4 13.06-10.67 27.56-4.13 39.57 2.18 4 5.73 7.35 6.82 11.78 1.48 6-1.37 13.9 3.61 17.56 1.55 1.14 3.52 1.49 5.38 2 11.21 3 19.71 11.82 28.25 19.67s18.82 15.44 30.4 14.93a49 49 0 0 0 11-2.21L451 620.01c5.77-1.63 12-3.59 15.37-8.56 2-3 2.69-6.78 3.21-10.41a277.38 277.38 0 0 0 2.81-41.69c0-4.6-.21-9.31-1.9-13.59-2-4.94-5.76-8.89-8.56-13.42-5.39-8.72-6.85-19.24-8.18-29.41-2.12-16.19-4.24-32.7-1.31-48.76 1.26-6.89 3.43-13.59 4.87-20.44a98.08 98.08 0 0 0 1.1-33.92c-1.34-9.37-4.23-18.88-10.55-25.93a26.71 26.71 0 0 0-15.91-8.77c-7.78-1-11.65 3.56-18.58 5.25-10.29 2.54-25.31-7.34-35.17-10.64z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M362 273.44s1.14 43.29-12.53 42.15 38.74 71.78 38.74 71.78l44.43-23.93s-26.2-42.15-8-68.36S362 273.44 362 273.44z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M285.66 641.44s-9.11 62.66-31.9 45.57-19.37-45.57-19.37-45.57 44.43-120.77 42.15-139 75.88-159.95 75.88-159.95l28.93 232.86s-86.58 31.91-95.69 66.09z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M283.38 641.44s-9.11 62.66-31.9 45.57-19.37-45.57-19.37-45.57 44.43-120.77 42.15-139 75.88-159.95 75.88-159.95l28.93 232.86s-86.58 31.91-95.69 66.09z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M364.27 300.78s-44.43 30.76-61.52 29.62l-13.28 3.65a73.38 73.38 0 0 0-52.59 56.78l-.21 1.09c-6.84 36.46-9.11 136.72-9.11 136.72s1.14 26.2 12.53 33L313 611.82s-2.28-54.69 25.07-60.38-6.84-2.28-6.84-2.28l-50.13-29.63s1.14-44.43 14.81-59.24 61.52-92.28 61.52-92.28l-13.67-47.9z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M413.26 330.41s28 7.41 47.58 11a19.74 19.74 0 0 1 14.24 10.88c5.91 12.35 14.92 34.66 13.37 53.28l17.09 67.22 49 59.24-44.44 20.54-50.1-55.82 41 106-76.34 3.36s-22.79-170.9-17.09-199.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M415.54 330.41s28 7.41 47.58 11a19.74 19.74 0 0 1 14.24 10.88c5.91 12.35 14.92 34.66 13.37 53.28l17.09 67.22 49 59.24-44.43 20.51-50.13-55.83 41 106-76.33 3.4s-22.79-170.9-17.09-199.38z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M360.53 297.16l15.71 77.11-25.64 13.1-14.04-69.46 23.97-20.75zM403.58 379.97l11.96-49.56 15.38 29.05-7.97 23.93-19.37-3.42z"
  }), React.createElement("path", {
    d: "M446.87 394.78s0 77.47 10.25 83.17M299.9 414.11s-23.65 76.3-17 84.29M295.34 518.96s45.58 29.8 51.84 30.28M363.13 278s.18 6.67-.44 14.7a52.42 52.42 0 0 0 56.69 31.33c-.3-8.53 1.33-17.08 6.41-24.39C444 273.44 363.13 278 363.13 278z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 409.84,
    cy: 267.75,
    r: 52.41,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M443.09 245.72c6.35.85 14.44-1.27 15.66-7.55 1.55-7.95-9.08-13.11-10.72-21-.62-3 .12-6.08-.24-9.09-.71-6.08-5.63-10.76-10.63-14.29a81.73 81.73 0 0 0-54.35-14.48c-2.38.23-4.89.61-6.73 2.13-2.09 1.72-2.9 4.51-4.33 6.82-4.92 7.94-16 8.88-23.87 13.83-9.27 5.79-13.85 17.16-14.27 28.08s2.7 21.63 5.78 32.11c2.62 8.92 5.37 18.07 11.12 25.37s15.3 12.4 24.32 10.2c-4.14-3-1.13-9.91 3.35-12.33s10-2.84 13.89-6.2 5-8.84 6.23-13.83c1.58-6.3 3.86-12.68 8.45-17.28 9.02-9.1 25.25-3.98 36.34-2.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M442 244.58c6.35.85 14.44-1.27 15.66-7.55 1.55-7.95-9.08-13.11-10.72-21-.62-3 .12-6.08-.24-9.09-.76-6.13-5.7-10.83-10.7-14.34a81.73 81.73 0 0 0-54.32-14.49c-2.38.23-4.89.61-6.73 2.13-2.09 1.72-2.9 4.51-4.33 6.82-4.92 7.94-16 8.88-23.87 13.83-9.27 5.79-13.85 17.16-14.27 28.08s2.7 21.63 5.78 32.11c2.62 8.92 5.37 18.07 11.12 25.37s15.3 12.4 24.32 10.2c-4.14-3-1.13-9.91 3.35-12.33s10-2.84 13.89-6.2 5-8.84 6.23-13.83c1.58-6.3 3.86-12.68 8.45-17.28 9.01-9.01 25.28-3.9 36.38-2.43z",
    fill: "#72351c"
  }), React.createElement("path", {
    d: "M400.78 274.82c-.77 5.42-2.48 14.8-5.7 20.72a166.66 166.66 0 0 0-10.88 24s21 16.25 31.65 27.35a24.68 24.68 0 0 0 26.13 6.4c5.56-2 10.43-5.93 11.72-13.24 2-11.55-.38-20.26-2.66-25.42a19.09 19.09 0 0 1-.04-15.52c.79-1.75 1.71-3.11 2.74-3.46 0 0-20.51-4.56-21.65 1.14s-17.09 11.39-20.51 1.14l-.94-22.61a4.94 4.94 0 0 0-4.94-4.74 4.93 4.93 0 0 0-4.92 4.24z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M400.78 275.96c-.77 5.42-2.48 14.8-5.7 20.72a166.66 166.66 0 0 0-10.88 24s21 16.25 31.65 27.35a24.68 24.68 0 0 0 26.13 6.4c5.56-2 10.43-5.93 11.72-13.24 2-11.55-.38-20.26-2.66-25.42a19.09 19.09 0 0 1-.07-15.56c.79-1.75 1.71-3.11 2.74-3.46 0 0-20.51-4.56-21.65 1.14s-17.06 11.44-20.51 1.22l-.94-22.61a4.94 4.94 0 0 0-4.94-4.74 4.93 4.93 0 0 0-4.89 4.2z",
    fill: "#72351c"
  }), React.createElement("path", {
    d: "M913 671s-20.59-20.61-28.16-48h1.77l-.85-2.38h.85l-2.68-7.62c7.59-7.46 13.2-14.69 14.11-18.8 1.54-6.92 3.07-44.36 4-70.38l.82.2c2-3.42 2.42-7.73 2.28-11.64a45.13 45.13 0 0 0-1.68-13l-3.71-37.15a25.34 25.34 0 0 0-9.75-17.45l-37.6-29.17a23.91 23.91 0 0 1 7.38-6.54c2.15-1.14 4.65-1.92 6.1-3.87 2.62-3.53.39-8.79 2.18-12.81 1.34-3 4.64-4.68 6.57-7.37 3.95-5.51 1.09-13.12-1.86-19.22l-17.14-35.43c-4.75-9.81-9.54-19.7-16.18-28.34-20.33-26.48-59.45-39.65-91.34-28.17-9.09 3.27-17.46 9.55-21.34 18.39-1.35 3.08-2.16 6.44-4.12 9.17-4.37 6.09-12.9 7.24-19 11.62-7.79 5.63-10.68 16.23-9.59 25.78s5.47 18.37 9.79 27c4.54 9 9.23 18.27 16.68 25.09 3.48 3.19 7.74 6.15 8.85 10.74.95 3.94-.73 8-.38 12.08a12.29 12.29 0 0 0 1.46 4.84c-16.83 2.11-28.77 16.09-34.12 36.89-.33 1.29-.46 2-.46 2L693.51 479c-.05.93 0 1.83 0 2.72a28.33 28.33 0 0 0 3 14v75.63l-72 45.58c-10.8 4.8-8.4 43.19 13.2 50.38S678.52 629 678.52 629c13.15-.88 35.27-18.42 47.16-32a21.67 21.67 0 0 0 6.27 6.53c-8.58 19.34-25.55 59.35-22.84 67.47 1.63 4.9 43.77 5.35 89.32 4.39a21.76 21.76 0 0 0 3.65 1.61c4.86 1.62 9.6.56 14-2.05C865.36 673.54 913 671 913 671zm-60.81-146.65c1-2.77 4.28-4.28 8.67-5v29.17zM848 421.85l.14-.21z",
    transform: "translate(-105 -70.89)",
    fill: "url(#prefix__u)"
  }), React.createElement("path", {
    d: "M634.86 417s-2.28 80.89-4.56 91.15-35.3 40.96-52.41 42.15c0 0-18.23 43.29-38.74 36.46s-22.79-43.29-12.53-47.85l68.38-43.3v-86.59z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M633.15 516.11s-29.62 63.8-26.2 74.06 193.68 0 193.68 0-35.32-35.32-28.48-74.06z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M655.94 326.99s4.56 44.43-3.42 54.69 31.9 16 35.32 16 39.88-12.53 46.71-16 12.53-28.48 12.53-28.48-34.18 6.84-44.43-33z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M644 213.01c-8.63 3.11-16.59 9.07-20.27 17.47-1.28 2.92-2.05 6.11-3.91 8.71-4.15 5.78-12.25 6.87-18 11-7.4 5.35-10.14 15.41-9.11 24.49s5.19 17.45 9.29 25.61c4.31 8.57 8.77 17.35 15.84 23.83 3.3 3 7.35 5.84 8.4 10.2.9 3.74-.69 7.65-.36 11.48.82 9.47 12.14 13.88 21.59 14.93 4.11.46 8.81.48 11.71-2.47 1.48-1.52 2.23-3.58 3.16-5.48a26.27 26.27 0 0 1 46.86-.48c2.22 4.26 3.51 9.44 7.54 12 6.17 4 14.43-.69 19-6.47s7.85-13 14.34-16.47c2-1.09 4.42-1.82 5.8-3.68 2.49-3.35.37-8.35 2.07-12.16 1.28-2.87 4.41-4.44 6.24-7 3.75-5.23 1-12.46-1.77-18.25l-16.28-33.65c-4.51-9.32-9.06-18.71-15.36-26.92-19.35-25.08-56.5-37.59-86.78-26.69z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M685.56 389.65s44.43 0 55.83-41l37.4 29a24.06 24.06 0 0 1 9.2 16.63l3.53 35.28s4 13.1-.57 21.08c0 0-47.28-12-48.42 1.71l33 92.28s-51.27 1.14-64.94-8c0 0-55.83 11.39-69.5-1.14s-27.34-11.39-16-39.88c0 0-22.79-22.79-12.53-54.69s.57.57.57.57-22.13-10.82-20.99-31.38l2.28-20.51s.12-.68.44-1.9c6.95-27 25.61-42 51.85-32.44 7.67 2.78 15.51-.41 15.51-.41s-8.56 37.08 23.34 34.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M685.56 387.37s44.43 0 55.83-41l37.4 29a24.06 24.06 0 0 1 9.2 16.63l3.53 35.28s4 13.1-.57 21.08c0 0-47.28-12-48.42 1.71l33 92.28s-51.27 1.14-64.94-8c0 0-55.83 11.39-69.5-1.14s-27.34-11.39-16-39.88c0 0-22.79-22.79-12.53-54.69s.57.57.57.57-22.13-10.82-20.99-31.33l2.28-20.51s.12-.68.44-1.9c6.95-27 25.61-42 51.85-32.44 7.67 2.78 15.51-.41 15.51-.41s-8.56 37.03 23.34 34.75z",
    fill: "#252a62"
  }), React.createElement("path", {
    d: "M790.95 426.11s-2.28 80.89-4.56 91.15-35.32 41-52.41 42.15c0 0-18.23 43.29-38.74 36.46s-22.79-43.29-12.53-47.85l68.36-43.29v-86.62z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M742 428.96s26.2 17.78 49 16.3c0 0 2.28-30.54-4.56-32.25s-36.51 0-44.44 15.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M742 427.82s26.2 17.78 49 16.3c0 0 2.28-30.54-4.56-32.25s-36.51 0-44.44 15.95z",
    fill: "#252a62"
  }), React.createElement("path", {
    d: "M704.93 322.43l-46.71 6.84s1.05 10.28 1.26 22.09a52.43 52.43 0 0 0 55-8.94c-3.94-4.81-7.31-11.31-9.55-19.99z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 677.59,
    cy: 300.79,
    r: 52.41,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M691.4 290.71a16.37 16.37 0 0 1-7 1q-13.9-.09-27.79-1c-7-.47-14.5-1.3-19.91-5.79-7.28-6-8.43-17.37-4.67-26.05s11.43-15.08 19.53-20a58.28 58.28 0 0 1 14.72-6.64c15-4.08 31.64.93 43.57 10.93s19.54 24.44 23.57 39.48c1.39 5.2 3.18 11.4 8.33 13-3.43 5.7-11.8 6.61-17.8 3.75-8.86-4.21-13.4-20.33-21.35-22.87-8.87-2.85-3.71 10.75-11.2 14.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M691.4 289.57a16.37 16.37 0 0 1-7 1q-13.9-.09-27.79-1c-7-.47-14.5-1.3-19.91-5.79-7.28-6-8.43-17.37-4.67-26.05s11.43-15.08 19.53-20a58.28 58.28 0 0 1 14.71-6.62c15-4.08 31.64.93 43.57 10.93s19.54 24.44 23.57 39.48c1.39 5.2 3.18 11.4 8.33 13-3.43 5.7-11.8 6.61-17.8 3.75-8.86-4.21-13.4-20.33-21.35-22.87-8.86-2.87-3.7 10.71-11.19 14.17z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M624.61 492.76a201.83 201.83 0 0 1 52.39-6.84M742 431.24s-17.09 12.53-12.53 19.37",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "url(#prefix__v)",
    d: "M859.31 555.42H299.9v48.92h32.56v153.88h495.45V604.34h31.4v-48.92z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M337.5 583.91h485.35v174.32H337.5z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M337.5 593.02h485.35v27.34H337.5z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M305.6 564.54h548.01v46.71H305.6z"
  }), React.createElement("rect", {
    x: 384.14,
    y: 553.04,
    width: 104.82,
    height: 14.81,
    rx: 6.5,
    ry: 6.5,
    fill: "#535461"
  }), React.createElement("rect", {
    x: 447.94,
    y: 387.91,
    width: 260.52,
    height: 180.13,
    rx: 28.22,
    ry: 28.22,
    fill: "url(#prefix__w)",
    opacity: 0.7
  }), React.createElement("rect", {
    x: 452.58,
    y: 391.23,
    width: 246.79,
    height: 176.8,
    rx: 26.84,
    ry: 26.84,
    fill: "#3e3f49"
  }), React.createElement("rect", {
    x: 456,
    y: 391.23,
    width: 246.79,
    height: 176.8,
    rx: 26.84,
    ry: 26.84,
    fill: "#535461"
  }), React.createElement("circle", {
    cx: 590.92,
    cy: 478.42,
    r: 7.98,
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M264.58 587.32s6.74 9.89 26.73 12.92",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M443 80h-71V40h71zm-68-3h65V43h-65zM514 80h-71V40h71zm-68-3h65V43h-65zM585 80h-71V40h71zm-68-3h65V43h-65zM656 80h-71V40h71zm-68-3h65V43h-65zM585 40h-71V0h71zm-68-3h65V3h-65zM514 40h-71V0h71zm-68-3h65V3h-65zM180 80h-71V40h71zm-68-3h65V43h-65zM251 80h-71V40h71zm-68-3h65V43h-65zM251 40h-71V0h71zm-68-3h65V3h-65zM800 80h-71V40h71zm-68-3h65V43h-65zM871 80h-71V40h71zm-68-3h65V43h-65zM871 40h-71V0h71zm-68-3h65V3h-65z",
    fill: primaryColor,
    opacity: 0.2
  }));
};

UndrawCoWorkers.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCoWorkers;