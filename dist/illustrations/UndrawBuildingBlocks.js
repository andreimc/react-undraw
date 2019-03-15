function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBuildingBlocks = _props => {
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
    viewBox: "0 0 1040.32 649.16",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 722.82,
    y1: 71.75,
    x2: 722.82,
    y2: 27.57,
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
    x1: 885.66,
    y1: 728.42,
    x2: 885.66,
    y2: 125.42,
    xlinkHref: "#prefix__a"
  })), React.createElement("rect", {
    x: 160.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 366.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 572.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 408.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 755.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 766.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 450.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 549.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 560.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 450.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 343.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 354.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 450.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 492.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 450.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 160.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 366.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 572.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 326.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 755.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 766.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 368.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 549.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 560.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 368.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 343.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 354.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 368.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 410.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 368.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 160.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 366.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 572.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 246.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 755.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 766.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 288.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 549.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 560.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 288.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 343.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 354.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 288.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 330.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 288.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 160.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 263.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 366.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 469.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 572.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 675.32,
    y: 164.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 667.32,
    y: 27.57,
    width: 111,
    height: 44.18,
    rx: 8.84,
    ry: 8.84,
    fill: "url(#prefix__a)"
  }), React.createElement("rect", {
    x: 751.16,
    y: 154.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 762.74 112.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 206.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 652.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 663.74 206.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 549.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 560.74 206.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 206.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 446.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 457.74 206.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 343.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 354.74 206.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 206.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 240.16,
    y: 248.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 251.74 206.37)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 499,
    cy: 535.66,
    rx: 499,
    ry: 113.5,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M113.95 484.72s9-30.41-1.68-52.8a48 48 0 0 1-3.89-30.14 80.79 80.79 0 0 1 4.27-14.15",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M106.03 373.49c0 3.73 6.75 14.54 6.75 14.54s6.75-10.81 6.75-14.54a6.75 6.75 0 0 0-13.5 0zM94.87 394.14c2 3.13 13.57 8.53 13.57 8.53s-.21-12.74-2.24-15.87a6.75 6.75 0 0 0-11.33 7.34zM95.36 429.42c3.33 1.68 16 .52 16 .52s-6.61-10.89-9.94-12.57a6.75 6.75 0 0 0-6.08 12.05zM101.74 456.03c3 2.22 15.7 3.22 15.7 3.22s-4.68-11.85-7.67-14.07a6.75 6.75 0 0 0-8 10.85zM122.61 403.39c-2.67 2.6-15.13 5.29-15.13 5.29s3.05-12.37 5.72-15a6.75 6.75 0 1 1 9.41 9.68zM129.68 434.58c-3.33 1.68-16 .52-16 .52s6.61-10.89 9.94-12.57a6.75 6.75 0 0 1 6.06 12.05zM132.38 465.9c-3 2.22-15.7 3.22-15.7 3.22s4.68-11.85 7.67-14.07a6.75 6.75 0 0 1 8 10.85zM596.98 312.38s32.89 32.89 14.32 81.69 31.83 130 31.83 130-.54-.08-1.54-.26c-67.55-11.97-101.11-89.23-63.55-146.61 13.96-21.34 25.43-46.36 18.94-64.82z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M596.98 312.38s32.89 32.89 14.32 81.69 31.83 130 31.83 130-.54-.08-1.54-.26c-67.55-11.97-101.11-89.23-63.55-146.61 13.96-21.34 25.43-46.36 18.94-64.82z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M596.98 312.38s18.57 40.31 0 73.2-3.18 125.18 46.18 138.44",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M538.41 445.39s37.53-6 40.95 27.66 72.16 38.29 72.16 38.29l-1.29.86c-56.76 37.26-111 23.73-102.84-25.74 3.04-18.39 2.77-36.88-8.98-41.07z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M538.41 445.39s37.53-6 40.95 27.66 72.16 38.29 72.16 38.29l-1.29.86c-56.76 37.26-111 23.73-102.84-25.74 3.04-18.39 2.77-36.88-8.98-41.07z",
    fill: "#f5f5f5",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M538.41 445.39s29.13 6.39 26.74 32.88 43.26 58.24 86.37 33.07",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M823.93 522.81s-55.7-11.14-70.56-26-81.7-40.85-89.13-22.28-100.26 81.71-37.08 92.85 148.54 14.85 167.11 7.43 29.66-52 29.66-52z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M627.16 560.48c63.13 11.14 148.54 14.85 167.11 7.43 14.14-5.66 24-32.83 27.85-45.48l1.86.39s-11.14 44.56-29.71 52-104 3.71-167.11-7.43c-18.22-3.22-23.43-10.77-21.47-20.33 1.47 6.23 7.86 11.02 21.47 13.42z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M1016.47 153.59a16.36 16.36 0 0 0-4.61-6.39c-14.95-13.62-39.12-9.49-57.68-17.82-4.28-1.92-8.66-4.58-13.3-3.85-6.48 1-12.51 8.4-18.16 5.12l.4 1.23-.4-.21 4.16 12.66c1.6 4.86 3.28 9.86 6.38 13.91a36.42 36.42 0 0 0 8.81 60.58c.2.42.39.85.58 1.28l.53.22a42.52 42.52 0 0 1 2.74 8.82c-4.81.67-13.2 6-21.44 13.84l-16.48-.55a53.94 53.94 0 0 1-29.64-10.08L829 196.9a16.51 16.51 0 0 0-9.45 4.18c-6.12-6.38-11.32-13-10.88-17 0 0-22.94-42.93-31.28-21.47s15.64 44 15.64 44l15.21 19.71a82.91 82.91 0 0 0-1.14 10.45c18.77 21.47 84.45 40.89 84.45 40.89l10.24.5.06.5a34.87 34.87 0 0 0-.92 8.2v2.05c.52 34.24 5.21 139 5.21 139 .91-.41 1.86-.78 2.82-1.13l-.73 9.31s-43.79 6.13-76.11 18.4-33.36 26.58-33.36 26.58v126.26c-9.23 4.74-23.8 11-31.28 7.63-8.12-3.62-12.57-.58-13.38 2.59a4 4 0 0 0 0 1.91 3.42 3.42 0 0 0 .31.81v.06a3.25 3.25 0 0 0 .55.72c3.13 3.07 70.9 29.64 86.54 25.55a10.81 10.81 0 0 0 1.42-.48c.15-.06.28-.14.43-.21s.58-.27.85-.43.31-.21.46-.31.47-.31.69-.48.29-.26.43-.39.41-.35.59-.55.26-.3.39-.45.36-.4.52-.62.22-.33.34-.49.32-.46.46-.7.19-.34.28-.52.28-.51.41-.78.16-.35.23-.53.25-.57.36-.86.12-.35.19-.53.22-.63.31-1c0-.17.09-.34.14-.51.09-.35.19-.69.27-1 0-.16.07-.32.1-.48.08-.38.16-.76.22-1.14 0-.14 0-.29.07-.43.07-.41.13-.83.18-1.24v-.36c.05-.45.1-.9.14-1.35v-.28q.06-.73.09-1.46v-.2V627.16a85.59 85.59 0 0 0-2-18.13L853 501.5a586.59 586.59 0 0 0 61.36-2.26l2.24 51.32s0 33.73 11.47 49.06c9.82 13.12 21.16 71.15 24.22 87.62-4.21 8-12.27 18-26.31 17.66 0 0-26.41-2.28-24.92 5a3.74 3.74 0 0 0 .17.56 5.16 5.16 0 0 0 .29.61c.11.19.23.38.37.58l.08.12c.15.21.32.43.51.66v.05c.18.21.37.42.58.63l.18.18c.24.24.48.48.76.73 13.55 12.27 92.79 14.31 92.79 14.31v-.28-.29c0-3.55-.52-22.17-5.26-36.19h1.1s-11.47-103.24-20.85-115.5c0 0-2.49-54.44 3.13-88.55l1-.38c26.28-9.82 28.15-34 25.44-51.76 5 1.6 7.92 2.69 7.92 2.69s-.09-.77-.26-2.14l.26.1s-.5-3.25-1.33-8.31c-1.88-13.93-5.52-38.27-9.4-49.76-.63-2.53-1.23-4.69-1.78-6.32a108.06 108.06 0 0 1-4.59-21.23 251.65 251.65 0 0 1-1.61-28.16 270.27 270.27 0 0 1 2.88-37.56c1.59-10.86 3-23.22 2.9-31.85a42.47 42.47 0 0 0-.63-9c-1.39-6.37-7.54-10.51-13.93-13.15-.41-.17-.83-.31-1.25-.47.16-2.41.36-5.15.62-8a6.87 6.87 0 0 0 5.31 1.08c2.75-.6 4.72-2.89 6.47-5 9.24-11.35 18.73-23.18 22.28-37.28a80.54 80.54 0 0 0 2-19.2v-1.06a20.88 20.88 0 0 0-.74-7.17z",
    transform: "translate(-79.84 -125.42)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M852.5 83.5s14 21 11 31 33 4 33 4 1-39 8-48-52 13-52 13zM760 97s-29-24-28-33c0 0-22-42-30-21s15 43 15 43l28 37z",
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M730.5 473.5s-27 17-38 12-15 3-12 6 68 29 83 25 7.37-36.76 7.37-36.76zM873.5 546.5s-6.5 27.5-29 27c0 0-34-3-21 9s89 14 89 14 0-41-14-50-25 0-25 0z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M832.5 352.5l3 70s0 33 11 48 24 90 24 90h38s-11-101-20-113c0 0-4-89 10-109z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M832.5 352.5l3 70s0 33 11 48 24 90 24 90h38s-11-101-20-113c0 0-4-89 10-109z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M911.5 289.5s23 55-19 71-118 14-118 14l-4 116s-47 6-48-9v-127s1-14 32-26 73-18 73-18l2-26z",
    fill: "#575988"
  }), React.createElement("path", {
    d: "M874.65 108.31a47.85 47.85 0 0 1 23.5 3.32c6.13 2.58 12 6.63 13.36 12.86 1.58 7.38-.17 23.93-2.18 37.94a261.28 261.28 0 0 0-1.22 66.29c1 9.19 2.45 17.2 4.4 20.77 6 11 12 63 12 63s-66-25-99-10c0 0-4.5-102.5-5-136-.39-25.94 32.5-55.5 43.5-56.5 6.44-.58 4.23-1.01 10.64-1.68z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M874.65 106.31a47.85 47.85 0 0 1 23.5 3.32c6.13 2.58 12 6.63 13.36 12.86 1.58 7.38-.17 23.93-2.18 37.94a261.28 261.28 0 0 0-1.22 66.29 107.53 107.53 0 0 0 4.4 20.77c4.5 13.5 12 63 12 63s-66-25-99-10c0 0-4.5-102.5-5-136-.39-25.94 32.5-55.5 43.5-56.5 6.44-.58 4.23-1.01 10.64-1.68z",
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M892.5 161.5l-71-4s-4.52-34.81 5.73-34.45l70.27 2.45s15 18-5 36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M892.5 159.5l-81-4s-63-19-81-40c0 0 1-37 21-39l47.31 34.69a51.08 51.08 0 0 0 28.42 9.86l70.27 2.45s15 18-5 36z",
    fill: "#e14b5a"
  }), React.createElement("path", {
    d: "M896 88c1.19-9.48 5.49-12.63 8.5-16.5 7-9-52 13-52 13a106.08 106.08 0 0 1 8 14.71 35.85 35.85 0 0 0 15 3.29c8.66 0 14.28-9.37 20.5-14.5z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 875.5,
    cy: 65.5,
    r: 36,
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M852.77 40.27c-3.83-4.19-5.68-9.77-7.42-15.18l-4-12.39c5.42 3.2 11.2-4 17.42-5 4.45-.71 8.66 1.89 12.76 3.76 17.8 8.14 41 4.1 55.32 17.43a16 16 0 0 1 4.42 6.25 20.91 20.91 0 0 1 .8 7 80.32 80.32 0 0 1-1.87 18.78c-3.4 13.79-12.5 25.37-21.37 36.47-1.68 2.11-3.57 4.35-6.21 4.94-5.15 1.15-9.13-4.41-11.12-9.29a98.9 98.9 0 0 1-5.8-20.07c-.52-2.91-.93-5.91-2.38-8.48-3.1-5.49-10.74-10.69-15.38-14.95s-10.91-4.62-15.17-9.27z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M852.77 39.27c-3.83-4.19-5.68-9.77-7.42-15.18l-4-12.39c5.42 3.2 11.2-4 17.42-5 4.45-.71 8.66 1.89 12.76 3.76 17.8 8.14 41 4.1 55.32 17.43a16 16 0 0 1 4.42 6.25 20.91 20.91 0 0 1 .8 7 80.32 80.32 0 0 1-1.87 18.78c-3.4 13.79-12.5 25.37-21.37 36.47-1.68 2.11-3.57 4.35-6.21 4.94-5.15 1.15-9.13-4.41-11.12-9.29a98.9 98.9 0 0 1-5.8-20.07c-.52-2.91-.93-5.91-2.38-8.48-3.1-5.49-10.74-10.69-15.38-14.95s-10.91-4.62-15.17-9.27z",
    fill: "#632652"
  }), React.createElement("ellipse", {
    cx: 885,
    cy: 69.5,
    rx: 3,
    ry: 6.5,
    fill: "#f7c4a7"
  }), React.createElement("path", {
    d: "M903 243s-2 6-12 5-39-3-39 0",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M823.5 581.5c-1.8-1.66-2.7-3-2.91-4.17-.26 1.3.54 3 2.91 5.17 13 12 89 14 89 14v-1c-.49-.01-76.04-2.04-89-14zM763.5 514.5c-15 4-80-22-83-25a3.25 3.25 0 0 1-.83-1.46 3.6 3.6 0 0 0 .83 3.46c3 3 68 29 83 25 7.72-2.06 9.44-11.73 9.3-20.64-.15 8.3-2.16 16.72-9.3 18.64z",
    fill: "#fff",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M502.09 503.74a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z",
    fill: "#67647e"
  }), React.createElement("path", {
    d: "M91.49 477.21s37.32-1.15 48.56-9.16 57.4-17.57 60.19-4.73 56.09 63.88 13.92 64.26-97.89-6.56-109.12-13.4-13.55-36.97-13.55-36.97z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M214.95 523.07c-42.13.34-97.89-6.56-109.12-13.4-8.55-5.21-12-23.89-13.09-32.51h-1.25s2.36 30.1 13.59 36.93 66.99 13.79 109.08 13.49c12.16-.1 16.36-4.42 16.13-10.83-1.65 3.83-6.29 6.25-15.34 6.32z",
    opacity: 0.2
  }), React.createElement("rect", {
    x: 1017.16,
    y: 657.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 1028.74 615.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 1017.16,
    y: 657.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 1028.74 615.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 937.32,
    y: 493.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 1017.16,
    y: 577.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 1028.74 535.37)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 1017.16,
    y: 577.58,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    transform: "rotate(-180 1028.74 535.37)",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 937.32,
    y: 411.16,
    width: 103,
    height: 41,
    rx: 8.84,
    ry: 8.84,
    fill: primaryColor
  }));
};

UndrawBuildingBlocks.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBuildingBlocks;