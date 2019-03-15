function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWeatherApp = _props => {
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
    viewBox: "0 0 881 722.629",
    style: style
  }, props), React.createElement("path", {
    d: "M769.508 575.25A147.008 147.008 0 0 0 532.22 459.231a159.073 159.073 0 0 0-271.922 55.727 118.634 118.634 0 1 0-78.817 207.299c1.844 0 3.676-.048 5.5-.131 1.882.081 3.773.131 5.676.131h445.319a128.963 128.963 0 0 0 128.35-116.487 147.587 147.587 0 0 0 3.182-30.52z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M774.508 557.25A147.008 147.008 0 0 0 537.22 441.231a159.073 159.073 0 0 0-271.922 55.727 118.634 118.634 0 1 0-78.817 207.299c1.844 0 3.676-.048 5.5-.131 1.882.081 3.773.131 5.676.131h445.319a128.963 128.963 0 0 0 128.35-116.487 147.587 147.587 0 0 0 3.182-30.52z",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 192.675,
    cy: 368.803,
    r: 93.445,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 170.077,
    y: 165.056,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 465.887,
    y: 332.979,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(60 486.006 196.585)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 192.656,
    y: 490.024,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(-120 110.154 537.805)",
    fill: primaryColor
  }), React.createElement("rect", {
    x: 192.961,
    y: 332.45,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(-60 59.15 472.318)",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 203.675,
    cy: 357.803,
    r: 93.445,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("rect", {
    x: 181.077,
    y: 154.056,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("rect", {
    x: 476.887,
    y: 321.979,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(60 497.006 185.585)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("rect", {
    x: 203.656,
    y: 479.024,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(-120 121.154 526.805)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("rect", {
    x: 203.961,
    y: 321.45,
    width: 45.806,
    height: 92.346,
    rx: 22.903,
    transform: "rotate(-60 70.15 461.318)",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M697.222 530.702l-16.092 32.801s-29.088-3.713-17.329 34.658c0 0-3.094 29.088-9.283 35.277s4.951 47.036 27.231 35.277c12.533-6.614 13.316-14.208 11.603-19.586a48.53 48.53 0 0 1-1.505-24.878c2.236-10.47 6.264-23.86 13.42-35.373 14.235-22.9 27.85-45.18 27.85-45.18z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M656.994 328.942s-35.277-8.664-47.036-2.475-46.417 6.808-46.417 6.808-29.088 47.036-22.28 71.172 35.276 38.99 35.276 38.99l95.929.62 15.472-63.128s-7.426-43.322-13.615-45.798-17.33-6.189-17.33-6.189z",
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 625.43,
    cy: 112.948,
    r: 52.606,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M592.629 158.127s6.189 25.994-3.095 29.088-17.329 15.473-17.329 15.473l13.616 22.899 46.417 11.759 14.234-13.616 10.522-29.088-10.522-7.426s-9.902 3.094-10.52-6.808a165.033 165.033 0 0 1 .618-22.28z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M592.629 158.127s6.189 25.994-3.095 29.088-17.329 15.473-17.329 15.473l13.616 22.899 46.417 11.759 14.234-13.616 10.522-29.088-10.522-7.426s-9.902 3.094-10.52-6.808a165.033 165.033 0 0 1 .618-22.28z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 616.456,
    cy: 137.395,
    r: 37.753,
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M614.29 223.73l-35.896-32.801s-16.091 13.615-17.948 13.615-25.993 7.427-26.612 10.522 21.042 35.896 21.042 35.896-4.951 24.136 0 34.658 1.238 55.7 1.238 55.7 32.801-11.759 50.13-6.189 68.079 0 68.079 0 7.426-47.655 4.332-53.844-3.713-41.466-3.713-41.466l26.612-29.088s-5.57-22.28-26.612-23.518-34.04-2.475-34.04-2.475z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M572.205 375.978s-69.316-31.563-97.166-46.417-70.554-3.094-56.939 30.326 89.74 66.222 89.74 66.222 24.756 18.566 39.61 17.948 36.205-.31 36.205-.31zM679.274 380.31s124.398 1.238 116.352 47.655-55.7 123.78-64.365 125.636-40.228-11.76-40.228-16.091 30.326-84.17 30.326-84.17l-74.268-22.9z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M702.792 241.678s7.427 71.173 3.713 82.313-16.71 41.466-33.42 56.32-40.228 89.74-53.225 53.843 21.042-55.7 21.042-55.7l34.121-48.006.32-78.126z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M563.54 390.832s61.271 21.661 68.079 18.567 21.661 8.045 21.661 8.045a53.352 53.352 0 0 1 40.228 7.427c19.805 12.997 24.137 27.85 19.805 28.469s-19.805-6.189-19.805-6.189-23.518-4.951-37.752-.619-32.787-4.801-32.787-4.801l-75.52-16.86z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M563.54 390.832s61.271 21.661 68.079 18.567 21.661 8.045 21.661 8.045a53.352 53.352 0 0 1 40.228 7.427c19.805 12.997 24.137 27.85 19.805 28.469s-19.805-6.189-19.805-6.189-23.518-4.951-37.752-.619-32.787-4.801-32.787-4.801l-75.52-16.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M533.834 268.29s.619 76.744 9.902 86.027 19.186 21.661 28.47 27.231 14.234 18.567 14.234 18.567S631 465.1 631.619 435.392s-22.9-53.225-22.9-53.225l-4.602-4.383a209.084 209.084 0 0 1-27.182-31.202 32.533 32.533 0 0 0-6.587-7.119c-8.045-6.188-9.902-74.267-9.902-74.267z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M688.557 203.307l12.997 7.427s4.951 32.8 7.427 37.133-30.326 15.473-35.277 12.378-7.427-33.42-7.427-33.42zM541.88 214.447h-8.046s-8.665 9.283-8.046 29.088-7.427 32.182-2.476 34.039 29.648-7.971 29.368-5.223 12.717-2.204 12.717-2.204l-8.664-32.801z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M479.681 341.32s37.753 16.091 48.274 18.567 44.526 31.444 44.526 31.444l-23.212 35.247s-23.79-2.945-36.786-5.42-90.359-53.844-77.362-62.509 44.56-17.329 44.56-17.329z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M471.944 341.32s37.753 16.091 48.274 18.567 51.987 30.945 51.987 30.945l-20.423 39.609s-34.04-6.808-47.036-9.283-90.359-53.844-77.362-62.509 44.56-17.329 44.56-17.329z",
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 635.642,
    cy: 77.362,
    r: 52.606,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 650.495,
    cy: 24.756,
    r: 24.756,
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M0 722.129h881"
  }));
};

UndrawWeatherApp.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWeatherApp;