function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawOnlineWishes = _props => {
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
    viewBox: "0 0 1068 831.714",
    style: style
  }, props), React.createElement("path", {
    d: "M838.085 309.387C793.168 132.765 637.968 5.269 455.796.156 359.488-2.548 258.144 29.393 184.36 141.168c-131.9 199.808 8.105 337.882 105.713 403.492a610.758 610.758 0 0 1 126.241 113.465c65.931 78.238 192.767 175.459 343.824 23.128 109.485-110.41 107.866-254.219 77.948-371.866z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M1068 348.714c0 45.84-37.16 119-83 119s-83-73.16-83-119a83 83 0 1 1 166 0z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M988.074 470.666c-10.43 3.591-12.928 17.815-9.34 28.246s11.186 19.085 15.01 29.433a88.2 88.2 0 0 1 3.74 16.04c2.184 12.982 4.375 26.191 2.692 39.246-1.597 12.385-6.614 24.061-12.212 35.223a329.511 329.511 0 0 1-39.323 60.691",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M993 475.714q-8-5.134-16 0v-16h16z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M977.042 467.375a17.6 17.6 0 0 0 16.028-.065",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("ellipse", {
    cx: 1019.5,
    cy: 313.714,
    rx: 17.5,
    ry: 21,
    fill: "#fff",
    opacity: 0.4
  }), React.createElement("path", {
    d: "M0 335.714c0 45.84 37.16 119 83 119s83-73.16 83-119a83 83 0 0 0-166 0z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M79.926 457.666c10.43 3.591 12.928 17.815 9.34 28.246s-11.186 19.085-15.01 29.433a88.2 88.2 0 0 0-3.74 16.04c-2.184 12.982-4.375 26.191-2.692 39.246 1.597 12.385 6.614 24.061 12.212 35.223a329.511 329.511 0 0 0 39.323 60.691",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M75 462.714q8-5.134 16 0v-16H75z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M90.958 454.375a17.6 17.6 0 0 1-16.028-.065",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("ellipse", {
    cx: 48.5,
    cy: 300.714,
    rx: 17.5,
    ry: 21,
    fill: "#fff",
    opacity: 0.4
  }), React.createElement("path", {
    d: "M1008 700.714c0 47.22-222.067 131-496 131s-470-169.78-470-217 196.067 46 470 46 496-7.22 496 40z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M1008 700.714c0 47.22-222.067 131-496 131s-470-169.78-470-217 196.067 46 470 46 496-7.22 496 40z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1008 700.214c0 47.22-222.067 85.5-496 85.5s-470-123.78-470-171 196.067 0 470 0 496 38.28 496 85.5z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M436.19 567.146l-10.044 64.13s-49.451 26.272-14.681 27.044 198.575 0 198.575 0 31.68 0-18.544-27.816l-10.044-67.222z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M404.47 657.624c7.897-7.026 21.676-14.347 21.676-14.347l10.044-64.132 145.262.137 10.044 63.222c11.712 6.487 18.967 11.46 23.212 15.274 6.45-1.472 13.5-6.941-23.212-27.274l-10.044-67.222-145.262 3.863-10.044 64.132s-41.554 22.078-21.676 26.347z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 180.824,
    y: 120.158,
    width: 654.449,
    height: 455.874,
    rx: 23.01,
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M202.845 144.497h610.407v341.519H202.845z"
  }), React.createElement("circle", {
    cx: 508.048,
    cy: 133.679,
    r: 3.863,
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M835.273 513.059v39.962a23.007 23.007 0 0 1-23.01 23.01h-608.43a23.007 23.007 0 0 1-23.01-23.01V513.06zM678.808 700.044v7.727H263.113v-6.181l.572-1.546 10.245-27.816h396.378l8.5 27.816zM838.78 692.48c-.756 3.237-3.615 6.653-10.075 9.882-23.18 11.59-70.313-3.09-70.313-3.09s-36.315-6.182-36.315-22.408a28.976 28.976 0 0 1 3.183-1.893c9.746-5.156 42.059-17.878 99.353.539a23.895 23.895 0 0 1 10.891 7.137c2.322 2.718 4.142 6.165 3.277 9.833z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M838.78 692.48c-28.372 10.871-53.661 11.683-79.615-6.344-13.089-9.086-24.98-11.335-33.905-11.165 9.746-5.156 42.059-17.878 99.353.539a23.895 23.895 0 0 1 10.891 7.137c2.322 2.718 4.142 6.165 3.277 9.833z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 803.207,
    cy: 683.046,
    rx: 10.045,
    ry: 3.091,
    fill: "#f2f2f2"
  }), React.createElement("circle", {
    cx: 508.048,
    cy: 544.738,
    r: 14.681,
    fill: "#f2f2f2"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M678.808 700.044v7.727H263.113v-6.181l.572-1.546h415.123z"
  }), React.createElement("path", {
    d: "M871.074 304.666c-10.43 3.591-12.928 17.815-9.34 28.246s11.186 19.085 15.01 29.433a88.2 88.2 0 0 1 3.74 16.04c2.184 12.982 4.375 26.191 2.692 39.246-1.597 12.385-6.614 24.061-12.212 35.223a329.511 329.511 0 0 1-39.323 60.691",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M951 182.714c0 45.84-37.16 119-83 119s-83-73.16-83-119a83 83 0 0 1 166 0z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M876 309.714q-8-5.134-16 0v-16h16z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M860.042 301.375a17.6 17.6 0 0 0 16.028-.065",
    fill: "none",
    stroke: "#2f2e41",
    strokeWidth: 2
  }), React.createElement("ellipse", {
    cx: 902.5,
    cy: 147.714,
    rx: 17.5,
    ry: 21,
    fill: "#fff",
    opacity: 0.4
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M603.607 288.552v86.546l-22.879 46.159v.005l-.725 1.457-60.57-4-23.284-1.54-54.04-3.57V310.085l54.04 1.524 24.166.683 61.138 1.727 22.154-25.467z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M603.607 293.658v81.44l-5.59 11.276v.004l-5.732 11.558v.004l-11.557 23.317 1.292-86.546.261-17.458 10.99-12.158v-.004l4.791-5.3 5.545-6.133z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M606.713 265.57v30.229l-3.106 4.948-5.549 8.841-4.915 7.831-10.862 17.305-.261-.013-144.673-7.441v-29.815l.365-.393 17.272-18.697 6.252-6.766 11.309-12.241 134.168 6.212z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M582.281 304.909v29.815l-144.934-7.454v-29.815l.365-.393 144.569 7.847z"
  }), React.createElement("path", {
    opacity: 0.15,
    d: "M606.713 265.57v30.229l-24.432 38.925v-29.815l24.432-39.339z"
  }), React.createElement("path", {
    fill: "#2f2e41",
    d: "M598.075 279.479l-.013 20.312-.004 9.797-.041 76.786v.004l-5.732 11.558.858-80.517.128-12.324v-.004l.195-18.191-138.482-8.535 6.252-6.766 136.839 7.88z"
  }), React.createElement("path", {
    fill: "#2f2e41",
    d: "M530.105 280.477l-9.703 21.073-.087 10.742-.882 106.427-23.284-1.54V300.147l12.423-19.67h21.533z"
  }), React.createElement("path", {
    d: "M498.15 281.895a30.766 30.766 0 0 1-17.354.61 6.975 6.975 0 0 1-3.044-1.412 7.884 7.884 0 0 1-1.883-3.73 29.478 29.478 0 0 1-1.663-8.93c.07-3.04 1.233-6.212 3.713-7.972a8.775 8.775 0 0 0 1.41-1.059 5.849 5.849 0 0 0 1.092-2.217c1.696-5.06 4.985-10.404 10.26-11.214 4.868-.748 9.297 2.652 13.048 5.843l8.23 7.005a12.987 12.987 0 0 1 24.216-.33 46.06 46.06 0 0 1 18.31-12.564c1.56-.581 3.391-1.054 4.813-.189a5.521 5.521 0 0 1 1.915 2.569 39.56 39.56 0 0 1 3.568 15.605 2.731 2.731 0 0 1 3.174 1.095 7.202 7.202 0 0 1 1.056 3.44 48.686 48.686 0 0 1 .328 5.668c0 1.997-.186 4.154-1.487 5.67-1.683 1.957-4.587 2.164-7.167 2.225 1.243 1.103.636 3.323-.738 4.257s-3.152.95-4.813.934c-6.404-.062-13.216-.244-18.543-3.8-2.103-1.403-3.864-3.272-5.973-4.668-5.169-3.42-11.658-3.583-17.64-3.3-5.4.255-9.687 4.742-14.828 6.464z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M496.977 280.477s-53.418 7.454-60.872 39.753l11.18-1.656 7.868 14.08s8.282-31.472 32.714-38.926 33.128-8.696 33.128-8.696 16.978 4.141 32.3 53.419l8.695-12.01 15.322 3.314s-11.18-38.511-41.41-49.278z",
    fill: "#2f2e41"
  }));
};

UndrawOnlineWishes.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOnlineWishes;