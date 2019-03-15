function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawArtist = _props => {
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
    viewBox: "0 0 1037.826 750.05",
    style: style
  }, props), React.createElement("ellipse", {
    cx: 931.913,
    cy: 801.524,
    rx: 23.5,
    ry: 187,
    transform: "rotate(-89.93 853.836 804.63)",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 931.913,
    cy: 801.524,
    rx: 17.342,
    ry: 138,
    transform: "rotate(-89.93 853.836 804.63)",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M788.364 648.043l3.097 40.921s-22.71 40.26 1.211 39.66 25.813-3.116 25.813-3.116l.016-12.59.033-27.068-6.874-41.556zM883.406 658.23s5.645 17.004 1.224 28.33-6.34 37.762-3.194 38.395 18.251 3.8 18.251 3.8 36.496 12.634 52.24 7.617 13.234-12.574 13.234-12.574-3.764-10.706-15.724-11.35-39.602-46.002-40.22-56.075-25.811 1.858-25.811 1.858z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 805.107,
    cy: 79.94,
    r: 56.025,
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M785.233 116.112s5.003 27.704-10.115 35.24 28.301 22.066 28.301 22.066l18.891-5.013 11.992-25.795s-15.106-1.277-11.302-23.934z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M785.233 116.112s5.003 27.704-10.115 35.24 28.301 22.066 28.301 22.066l18.891-5.013 11.992-25.795s-15.106-1.277-11.302-23.934z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M727.205 210.466l-1.333 60.43-15.863 103.22s.565 53.507 16.928 56.675.07-57.285.07-57.285l23.73-85.419 4.791-74.439z",
    fill: "#ffb9b9"
  }), React.createElement("circle", {
    cx: 803.2,
    cy: 95.045,
    r: 35.881,
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M859.321 274.836c6.282 10.709 4.379 23.297-2.546 23.288s-100.077-11.453-100.077-11.453l5.692-21.396s-5.655-8.82-1.87-14.48-3.75-23.296-3.75-23.296l-14.395-68.633 7.557-2.37 12.589-3.945 13.86-4.346s9.426 13.86 32.723 9.483c0 0 14.476 1.906 22.682-16.97a24.034 24.034 0 0 1 5.243.668c1.743.455 3.436 1.22 4.196 2.492.76 1.266 5.185 2.134 10.207 2.713 7.459.859 16.227 1.096 16.227 1.096l-7.009 69.866s-7.61 46.574-1.329 57.283z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M747.411 158.872l-5.036-.006s-20.164 16.342-17.693 55.374c0 0 1.884 3.78 16.36 6.315s20.777-3.752 20.777-3.752z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M841.78 204.94s-80.57-5.134-79.951 4.31-5.074 30.839-2.56 34.619 5.56 19.272 1.815 26.316a54.701 54.701 0 0 0-5.011 13.338s-5.035-1.265-8.83 14.468-22.737 61.034-15.211 84.334 31.895 171.893 31.895 171.893l16.249 97.592s27.062 5.069 36.517-4.991l-8.674-114.58-6.144-124.649s42.03 120.916 48.32 124.7l25.654 128.45s28.944 10.107 39.036-6.248l-11.846-93.81s-6.902-18.264-4.373-27.703-4.387-16.373-4.387-16.373l-25.648-132.855s-7.535-15.118-1.226-26.44-11.255-62.965-11.255-62.965-11.299-26.452-7.503-41.556-6.867-47.85-6.867-47.85z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M886.485 196.181l12.504 71.149s1.875 10.704-3.811 28.323-27.771 59.769-27.771 59.769L856.1 335.264l18.963-64.186-15.646-74.93z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    fill: "#2f2e41",
    d: "M774.423 205.487l-11.728 5.985-12.785-36.86.022-18.117 12.589-3.944 1.876 15.154 10.026 37.782zM851.432 146.59l-10.284 60.552-16.367-.02 12.248-65.736c1.743.455 3.436 1.22 4.196 2.492.76 1.266 5.185 2.134 10.207 2.713z"
  }), React.createElement("path", {
    d: "M860.1 151.455l7.56-3.768s32.057 38.438 22.596 54.164-37.148 5.62-37.148 5.62z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 810.84,
    cy: 23.921,
    r: 23.921,
    fill: "#ff6584"
  }), React.createElement("ellipse", {
    cx: 884.331,
    cy: 134.139,
    rx: 18.255,
    ry: 30.845,
    transform: "rotate(-89.93 806.254 137.244)",
    fill: "#ff6584"
  }), React.createElement("circle", {
    cx: 768.435,
    cy: 212.09,
    r: 3.147,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 835.791,
    cy: 212.172,
    r: 3.147,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M0 79.475h672v410H0z"
  }), React.createElement("circle", {
    cx: 336,
    cy: 293.475,
    r: 73,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M434 293.475a73 73 0 0 0 73 73v-146a73 73 0 0 0-73 73zM164 220.475v146a73 73 0 0 0 0-146z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 336,
    cy: 284.475,
    r: 73,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M434 284.475a73 73 0 0 0 73 73v-146a73 73 0 0 0-73 73zM164 211.475v146a73 73 0 0 0 0-146z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M607 520.475h65v17h-65z"
  }));
};

UndrawArtist.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawArtist;