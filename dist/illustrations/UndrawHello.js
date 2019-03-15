function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawHello = _props => {
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
    viewBox: "0 0 909.67 748.22",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 966.56,
    y1: 410.81,
    x2: 966.56,
    y2: 349.8,
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
    x1: 517.02,
    y1: 824.11,
    x2: 517.02,
    y2: 75.89,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 146.88,
    y1: 637.21,
    x2: 321.94,
    y2: 637.21,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 728.6,
    y1: 487.08,
    x2: 728.6,
    y2: 484.08,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 653.39,
    y1: 341.18,
    x2: 653.39,
    y2: 183.08,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M986.71 360.7v-10.9h-54.47v50.39a10.62 10.62 0 0 0 10.62 10.62h33.23a10.62 10.62 0 0 0 10.62-10.62V389a14.16 14.16 0 1 0 0-28.33zm0 22.88v-17.44a8.72 8.72 0 1 1 0 17.43z",
    transform: "translate(-146.88 -75.89)",
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), React.createElement("path", {
    d: "M838.12 286.51a12.93 12.93 0 1 0 12.93 12.93 12.93 12.93 0 0 0-12.93-12.93zm0 20.89a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M838.12 286.51a12.93 12.93 0 1 0 12.93 12.93 12.93 12.93 0 0 0-12.93-12.93zm0 20.89a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M788.34 276.56h49.74v46a9.75 9.75 0 0 1-9.75 9.75h-30.24a9.75 9.75 0 0 1-9.75-9.75v-46z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M829.12 276.56v46a9.7 9.7 0 0 1-9.7 9.7h5a9.7 9.7 0 0 0 9.7-9.7v-46z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M798.12 239.48a2.9 2.9 0 0 0-2.2 1.12c-.65 1.18.53 2.52 1.61 3.33 2 1.5 4.09 3 5.45 5.07s1.78 5 .3 7c-1.93 2.62-6.55 3.19-7 6.41-.29 2.07 1.5 3.84 3.32 4.88 4.48 2.57 10.26 3.25 13.5 7.27 1.34-2.76 4.35-4.36 7.34-5s6.1-.63 9.14-1.09a3.16 3.16 0 0 0 2.54-1.36c.85-1.72-1.57-3.79-.73-5.51.64-1.32 2.5-1.21 3.86-1.74 2.22-.86 3.13-3.71 2.5-6s-2.41-4.09-4.28-5.56c-5-4-11.1-6.29-17.23-8-2.85-.78-6.2-2-9.16-2.12s-6.1.82-8.96 1.3z",
    fill: "#eee"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 8,
    d: "M449.06 344.02l-104 324"
  }), React.createElement("path", {
    d: "M676.52 780.4c-12.79.74-24.19 11.46-24.19 11.46l-5.51-13.67-.45.15c2.69-11.78 57.47-254.72 2.63-275.66-42.13-16.09-86.82-36-121.84-35.26V410h49.09v-2h38.86c7.45-5.32-3.38-9-15.47-11.27a11.06 11.06 0 0 0 1.3-1.83l62.24-111.67s14.32-23.52 5.11-34.77-22.5 28.64-22.5 28.64l-51.13 73.63s-51.66-53.81-84.44-80.56a57.47 57.47 0 0 0-12.22-9.24c-6-4.05-10.53-6.16-12.77-5.33h-.06a57.29 57.29 0 0 0-15.28-2.08h-4.09v-8.39a65.61 65.61 0 0 0 40.53-38.4 73.7 73.7 0 0 0 5.84-64.17 4.26 4.26 0 0 0 1.72-.6c1.85-1.19 2-3.8 1.86-6a45.56 45.56 0 0 0-23.12-35.62c-5.18-2.83-11.12-4.79-14.94-9.29-3.28-3.87-4.66-9.28-8.64-12.44-4.72-3.75-11.54-3.11-17.33-1.43a63.06 63.06 0 0 0-18.09 8.54c-6.26 4.29-11.92 9.8-19.13 12.18-5.12 1.69-10.68 1.65-15.84 3.24a26.6 26.6 0 0 0-17.12 16.69 34.75 34.75 0 0 0-1.46 13 73.22 73.22 0 0 0-7.35 16.71l-1.16.63 1.12-.5a73.62 73.62 0 0 0 20.74 75.09 65.55 65.55 0 0 0 31.45 22.32v10.15a77.33 77.33 0 0 0-25.1 10.28s-.65.4-1.77 1.16l-.34.23c-7.57 5.14-32.93 23.9-32.07 44.18v2.35a78 78 0 0 0-2.09 17.88v147.23A72.28 72.28 0 0 0 379 523.37c-21.34 4.78-34.94 12-34.94 20.11a6.55 6.55 0 0 1 0 2c0 14.4 43 26.08 96.13 26.08 6.42 0 12.69-.17 18.76-.5l60 48.56-96.1 154.48s-31.7 24.54-7.16 32.73 74.66 14.32 74.66 14.32 8.18-14.32-3.07-20.45-26.59-3.07-26.59-3.07l2-12.27s166.7-143.18 131.93-192.26c-6.65-9.39-13.3-19.08-20-28.62l26.24 2.39 6 224.76.75-.24c-1.5 4.42-12.1 37.74 11.4 32.1 25.16-6 70.93-27.33 70.93-27.33s-.63-16.5-13.42-15.76zM576.25 393.66l-49.09-14.25v-42L580.51 394l-4.26-.34z",
    transform: "translate(-146.88 -75.89)",
    fill: "url(#prefix__b)",
    opacity: 0.7
  }), React.createElement("circle", {
    cx: 298.06,
    cy: 99.02,
    r: 72
  }), React.createElement("path", {
    d: "M380.06 264.02l54.95 58.33a10.73 10.73 0 0 0 17.19-2.13l60.86-109.19-17-6-50 72s-93.87-97.84-107-93 41 79.99 41 79.99z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeMiterlimit: 10,
    strokeWidth: 5,
    d: "M275.06 466.02l-81 210M315.06 466.02l81 210"
  }), React.createElement("ellipse", {
    cx: 295.06,
    cy: 467.52,
    rx: 94,
    ry: 25.5,
    fill: "#b84733"
  }), React.createElement("ellipse", {
    cx: 295.06,
    cy: 465.52,
    rx: 94,
    ry: 25.5,
    fill: "#f55f44"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeMiterlimit: 10,
    strokeWidth: 5,
    d: "M255.5 512.15l88.69 27.33M334.61 512.15l-88.69 27.33"
  }), React.createElement("path", {
    d: "M296.15 182h27.91a56 56 0 0 1 56 56v148h-160V258.11A76.09 76.09 0 0 1 296.15 182z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M220.06 386h160v87h-89a71 71 0 0 1-71-71v-16z",
    fill: "#39447a"
  }), React.createElement("path", {
    d: "M222.22 242.06l97.84 93h108v-14l-93-27-79.55-98.24s-36.13 22.29-33.29 46.24z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M222.22 240.06l97.84 93h108v-14l-93-27-79.55-98.24s-36.13 22.29-33.29 46.24z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M428.06 319.02s52 4 38 14h-38zM496.06 205.02s13-39 22-28-5 34-5 34z",
    fill: "#fda57d"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M220.06 386.02v4.66l160 .34v-5h-160z"
  }), React.createElement("path", {
    d: "M344.52 478.56l107.6 9.81 5.86 219.74 38.53-12.54s57.63-249 2.68-270-114.35-48.63-149.81-26.1-4.86 79.09-4.86 79.09z",
    fill: "#39447a"
  }), React.createElement("path", {
    d: "M351.06 411.02s59 30 67 64",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M288.06 472.02l84 68-94 151 39 11s163-140 129-188-68-104-110-105-48 63-48 63z",
    fill: "#39447a"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M420.06 251.02l21 36 5-10-26-26z"
  }), React.createElement("path", {
    d: "M278.06 691.02s-31 24-7 32 73 14 73 14 8-14-3-20-26-3-26-3l2-12zM458.88 707.43s-13.62 37.76 11 31.86 69.36-26.73 69.36-26.73-.61-16.11-13.12-15.39-23.65 11.2-23.65 11.2L497.08 695z",
    fill: "#333"
  }), React.createElement("rect", {
    x: 280.06,
    y: 147.02,
    width: 40,
    height: 60,
    rx: 20,
    ry: 20,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M300.06 149.02a20 20 0 0 0-20 20v6.8a64 64 0 0 0 40 0v-6.8a20 20 0 0 0-20-20z",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 300.06,
    cy: 113.02,
    r: 64,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M236.06 110.11s16 4.12 25-14.06 16-28.1 53-17.36 44.44 12.06 46.22 1.9c1.22-6.94-11.94-23.81-20.4-33.79-4.12-4.87-10.85-7.78-18-7.78h-41.82l-25 11.57-19 16.53-4 22.32z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M236.06 108.11s16 4.12 25-14.06 16-28.1 53-17.36 44.44 12.06 46.22 1.9c1.22-6.94-11.94-23.81-20.4-33.79-4.12-4.87-10.85-7.78-18-7.78h-41.82l-25 11.57-19 16.53-4 22.32z"
  }), React.createElement("ellipse", {
    cx: 242.56,
    cy: 108.02,
    rx: 6.5,
    ry: 13,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M237.91 74.57c-1.48-8.37-2.94-17.16-.24-25.22a26 26 0 0 1 16.74-16.32c5-1.55 10.48-1.52 15.49-3.17 7.05-2.32 12.58-7.71 18.71-11.91A61.66 61.66 0 0 1 306.3 9.6c5.66-1.64 12.33-2.27 16.95 1.4 3.88 3.09 5.23 8.38 8.44 12.16 3.74 4.4 9.54 6.31 14.61 9.08a44.54 44.54 0 0 1 22.59 34.87c.17 2.15 0 4.7-1.82 5.86a6.48 6.48 0 0 1-3.65.67c-25.58-.37-51.19-.73-76.66-3.08-7.92-.73-15.85-1.65-23.8-1.35a77.85 77.85 0 0 0-35 9.89"
  }), React.createElement("path", {
    d: "M320.88 594.15a34 34 0 0 0-13.47-36c-3-2-6.28-3.53-9-5.84-4.56-3.84-7.17-9.51-9.05-15.18-4.52-13.58-5.95-28.81-13.88-41.08-7.22-11.17-21.27-14.44-33.74-15.55-4.54-.41-9.31-.62-13.46 1.26-6.95 3.14-10.26 11.35-10.57 19s1.67 15.14 2.17 22.74-.86 16-6.48 21.14-13.65 5.77-21.1 6.8a139.71 139.71 0 0 0-28.59 7.1c-7.77 2.83-16.42 7.93-16.79 16.19-.3 6.75 5.15 12.14 9.24 17.51 7.65 10 11.47 23.29 8.88 35.64-2.64 12.57-11.47 23.36-13.08 36.11-.41 3.24-.29 6.68 1.28 9.54a17.45 17.45 0 0 0 4.83 5.11c4.8 3.71 10.16 6.69 14.7 10.71 9.47 8.39 14.6 20.56 18.55 32.58.38 1.16.72 2.33 1.08 3.49h-9.31a34.53 34.53 0 0 0-34.43 34.43 34.53 34.53 0 0 0 34.43 34.43h93a34.53 34.53 0 0 0 34.43-34.43A34.53 34.53 0 0 0 276 725.36h-25.46c6-8.07 12.32-15.65 21.62-18.76s20.55-1.28 27.85-7.77c3.56-3.16 5.45-7.84 6.32-12.52a37.29 37.29 0 0 0-4.08-24.76c-2.93-5.23-7.21-10-8.14-15.9-.79-5.06 1-10.19 3.51-14.68 7.03-12.79 19.47-22.72 23.26-36.82z",
    transform: "translate(-146.88 -75.89)",
    fill: "url(#prefix__c)",
    opacity: 0.7
  }), React.createElement("path", {
    d: "M94.49 412.06c-4.32-.39-8.86-.59-12.82 1.2-6.61 3-9.77 10.81-10.07 18.06s1.59 14.41 2.06 21.66-.82 15.22-6.17 20.13-13 5.49-20.09 6.47a133 133 0 0 0-27.23 6.76c-7.4 2.69-15.64 7.56-16 15.42-.28 6.43 4.9 11.56 8.8 16.67 7.29 9.57 10.92 22.18 8.45 33.94-2.52 12-10.93 22.25-12.45 34.39-.39 3.08-.28 6.36 1.22 9.08a16.61 16.61 0 0 0 4.6 4.87c4.57 3.53 9.67 6.37 14 10.2 9 8 13.9 19.58 17.66 31a251.28 251.28 0 0 1 8.67 34.44c7.77-5 17.81-4.92 26.1-9 17.65-8.65 23.59-33.73 42.23-40 8.82-2.95 19.57-1.22 26.52-7.4 3.39-3 5.19-7.46 6-11.92a35.51 35.51 0 0 0-3.85-23.53c-2.79-5-6.87-9.5-7.76-15.14-.76-4.82 1-9.7 3.34-14 6.7-12.18 18.55-21.63 22.16-35.06a32.37 32.37 0 0 0-12.83-34.32c-2.83-1.91-6-3.36-8.6-5.56-4.35-3.66-6.82-9.06-8.62-14.45-4.31-12.93-5.67-27.44-13.22-39.12-6.85-10.62-20.23-13.74-32.1-14.79z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M94.36 412.5s16.4 219.61-26.24 257.36",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  }), React.createElement("rect", {
    x: 5.85,
    y: 645.27,
    width: 154.09,
    height: 65.57,
    rx: 32.78,
    ry: 32.78,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M4.21 497.74s41.91-4.89 93.08 26.24M96.47 550.19s23.29-38.52 73.29-45.89M8.31 587.11s58.09-9.85 84.78 6.55M89.78 616.16s30.41-13.8 64.62-2.59",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    opacity: 0.6
  }), React.createElement("path", {
    d: "M728.6 487.08a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z",
    transform: "translate(-146.88 -75.89)",
    fill: "url(#prefix__d)"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeMiterlimit: 10,
    strokeWidth: 8,
    d: "M801.82 344.02l104 370.09"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M344.63 333.18h561.61v21.88H344.63z"
  }), React.createElement("rect", {
    x: 483.06,
    y: 328.02,
    width: 92,
    height: 13,
    rx: 6.5,
    ry: 6.5,
    fill: "#535461"
  }), React.createElement("rect", {
    x: 539.06,
    y: 183.08,
    width: 228.66,
    height: 158.1,
    rx: 28.22,
    ry: 28.22,
    fill: "url(#prefix__e)",
    opacity: 0.7
  }), React.createElement("rect", {
    x: 543.13,
    y: 185.99,
    width: 216.61,
    height: 155.18,
    rx: 26.84,
    ry: 26.84,
    fill: "#3e3f49"
  }), React.createElement("rect", {
    x: 546.13,
    y: 185.99,
    width: 216.61,
    height: 155.18,
    rx: 26.84,
    ry: 26.84,
    fill: "#535461"
  }), React.createElement("circle", {
    cx: 664.56,
    cy: 262.52,
    r: 7,
    fill: "#e0e0e0"
  }));
};

UndrawHello.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawHello;