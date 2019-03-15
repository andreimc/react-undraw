function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPayments = _props => {
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
    viewBox: "0 0 945.987 568.898",
    style: style
  }, props), React.createElement("path", {
    d: "M1.362 31.162c0 58.96 36.989 106.67 82.7 106.67",
    fill: "#46455b"
  }), React.createElement("path", {
    d: "M84.061 137.832c0-59.622 41.278-107.868 92.288-107.868M31.326 36.507c0 56.006 23.587 101.325 52.735 101.325",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M84.061 137.832C84.061 61.648 131.771 0 190.731 0",
    fill: "#46455b"
  }), React.createElement("rect", {
    x: 44.25,
    y: 159.388,
    width: 720,
    height: 408,
    rx: 26.881,
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M29.75 216.888h720v57h-720z"
  }), React.createElement("rect", {
    x: 129.75,
    y: 461.888,
    width: 548,
    height: 28,
    rx: 5.17,
    fill: "#fff"
  }), React.createElement("rect", {
    x: 60.25,
    y: 137.388,
    width: 720,
    height: 408,
    rx: 26.881,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M59.75 198.888h720v57h-720z"
  }), React.createElement("rect", {
    x: 84.75,
    y: 342.888,
    width: 92,
    height: 76,
    rx: 8.758,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 95.75,
    y: 329.888,
    width: 92,
    height: 76,
    rx: 8.758,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("rect", {
    x: 145.75,
    y: 447.888,
    width: 548,
    height: 28,
    rx: 5.17,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M0 567.388h856.743"
  }), React.createElement("path", {
    d: "M941.78 446.794L917.63 469.9a4.581 4.581 0 0 1-6.019.286 333.057 333.057 0 0 1-61.59-64.374 4.581 4.581 0 0 1 .551-6l24.3-23.25a4.579 4.579 0 0 1 6.915.676c17.735 25.33 37.373 46.596 59.503 62.534a4.574 4.574 0 0 1 .49 7.022z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M944.073 439.064l-24.15 23.107a4.581 4.581 0 0 1-6.02.286 333.057 333.057 0 0 1-61.59-64.374 4.581 4.581 0 0 1 .552-6l24.3-23.25a4.579 4.579 0 0 1 6.914.676c17.736 25.33 37.373 46.596 59.504 62.534a4.574 4.574 0 0 1 .49 7.021z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 1026.16,
    cy: 586.937,
    rx: 8,
    ry: 15,
    transform: "rotate(-43.734 756.28 662.704)",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 1025.562,
    cy: 581.972,
    rx: 8,
    ry: 15,
    transform: "rotate(-43.734 755.682 657.74)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M926.46 365.656l-5.085 33.035a4.581 4.581 0 0 1-4.6 3.891 333.057 333.057 0 0 1-88.055-13.555 4.581 4.581 0 0 1-3.215-5.095l5.117-33.24a4.579 4.579 0 0 1 5.895-3.675c29.493 9.293 58.02 14.202 85.28 13.368a4.574 4.574 0 0 1 4.664 5.27z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M923.572 358.129l-5.085 33.034a4.581 4.581 0 0 1-4.6 3.892 333.057 333.057 0 0 1-88.055-13.555 4.581 4.581 0 0 1-3.216-5.096l5.117-33.24a4.579 4.579 0 0 1 5.896-3.674c29.493 9.292 58.02 14.202 85.279 13.368a4.574 4.574 0 0 1 4.664 5.27z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 1004.235,
    cy: 537.163,
    rx: 8,
    ry: 15,
    transform: "rotate(-81.248 844.113 528.56)",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 1000.738,
    cy: 533.589,
    rx: 8,
    ry: 15,
    transform: "rotate(-81.248 840.616 524.987)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 782.551,
    cy: 78.486,
    r: 17.177,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M797.795 87.409a17.175 17.175 0 0 0-2.793-23.04c.426.252.845.52 1.255.814a17.177 17.177 0 0 1-19.999 27.932c-.41-.294-.799-.605-1.174-.926a17.175 17.175 0 0 0 22.71-4.78z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 780.311,
    cy: 115.08,
    r: 31.366,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M786.285 162.875c0-.746-5.974-5.974-5.974-5.974s-29.872-8.215-35.847-2.24a10.805 10.805 0 0 0-2.24 12.695l27.632 8.215z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M782.178 143.832s-6.721 18.67 0 20.164-35.847 8.214-35.847 8.214l-6.721-12.695s23.15-11.95 20.164-28.379z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M782.178 143.832s-6.721 18.67 0 20.164-35.847 8.214-35.847 8.214l-6.721-12.695s23.15-11.95 20.164-28.379z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M705.936 202.096l3.509 47.013s-1.936 34.95 5.54 67.088c0 0-.682 38.547 12.098 38.28s1.978-45.512 1.978-45.512l-2.147-96.963zM827.733 201.336l2.987 47.049s6.722 34.353 3.735 67.213c0 0 5.974 38.087-6.722 39.58s-8.215-44.808-8.215-44.808l-11.202-96.338z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M767.242 342.483s6.721 77.668 4.48 82.149 0 85.136 0 85.136 2.241 30.62.747 30.62-14.189-4.482-14.189-4.482-9.709-38.087-11.949-45.555-2.24-45.555-2.24-61.238-14.937-80.656-14.937-80.656z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M767.242 342.483s6.721 77.668 4.48 82.149 0 85.136 0 85.136 2.241 30.62.747 30.62-14.189-4.482-14.189-4.482-9.709-38.087-11.949-45.555-2.24-45.555-2.24-61.238-14.937-80.656-14.937-80.656z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M753.8 536.653s11.948-7.468 14.935-2.987a29.262 29.262 0 0 0 5.975 6.721l1.493 24.924s-8.71-1.163-10.203 1.077-12.948 3.872-20.416.884 0-17.176 0-17.176z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M818.832 332.315s-.807 25.104-10.516 42.28-20.91 31.367-19.417 44.81 11.202 8.214 5.228 64.972c0 0-3.734 23.15 0 35.1s-17.924 7.468-17.924 7.468-3.734-49.29-6.72-56.011-15.684-51.53-11.203-70.2 17.923-67.213 17.923-67.213z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M777.697 515.743s10.455.746 13.443 1.493a4.159 4.159 0 0 0 4.48-1.493s3.734 23.15 5.975 28.378-2.24 20.164-13.443 20.164-14.189-6.721-14.189-8.962v-29.125l-.747-6.721s4.481-1.494 4.481-3.734z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 778.817,
    cy: 123.294,
    r: 26.885,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M780.31 156.9s.374 9.336-14.562 7.096-21.657-8.962-21.657-8.962-32.86 5.974-35.1 18.67 14.189 32.113 14.189 32.113 0 13.442 2.24 18.67-10.455 45.555-2.24 47.796 13.443 2.24 29.872 5.974 33.607 4.481 38.834 0 12.696-5.974 17.924-5.974 8.962-8.215 5.228-11.95-7.469-13.442-7.469-17.176 5.228-17.923 2.24-23.15l9.71-51.53s-10.456-8.216-16.43-8.962-22.778-2.614-22.778-2.614z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M813.544 167.73l5.601.373s16.056 37.714 12.322 39.954-23.898 12.696-26.138 11.95 8.215-52.277 8.215-52.277zM716.459 170.717l-6.348.373s-6.348 35.474-7.095 37.714 24.645 12.696 26.885 11.202-13.442-49.29-13.442-49.29z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M808.316 267.055l8.082 16.477s8.529 54.613 2.837 55.288-40.044-3.058-43.778 2.17-6.722 5.974-6.722 5.974-39.58 8.215-44.061 2.987 0-73.187 5.227-78.415c0 0 36.594 8.962 41.822 5.228s36.593-9.709 36.593-9.709zM795.102 100.401c.429.259.847.528 1.26.803a31.364 31.364 0 0 0-32.334 53.67c-.436-.236-.87-.48-1.299-.739a31.366 31.366 0 0 1 32.373-53.734z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M763.28 100.401c-.43.259-.848.528-1.26.803a31.364 31.364 0 0 1 32.334 53.67c.436-.236.87-.48 1.298-.739a31.366 31.366 0 0 0-32.372-53.734z",
    fill: "#2f2e41"
  }), React.createElement("ellipse", {
    cx: 780.311,
    cy: 107.611,
    rx: 28.379,
    ry: 17.923,
    fill: "#2f2e41"
  }));
};

UndrawPayments.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPayments;