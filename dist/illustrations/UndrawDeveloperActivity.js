function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawDeveloperActivity = _props => {
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
    viewBox: "0 0 1144 617.32",
    style: style
  }, props), React.createElement("path", {
    d: "M1144 396.23a181.92 181.92 0 0 1-6.85 49.6 180.06 180.06 0 0 1-19.27 44.28c0 50.1-33.82 93.4-82.91 114a167.3 167.3 0 0 1-64.73 12.8H217.17c-40.25 0-77.55-10.86-108.14-29.36a185.76 185.76 0 0 1-24.83-17.89c-34-29.22-55.08-69.6-55.08-114.2A180.5 180.5 0 0 1 0 356.74c0-73.36 43.39-136.44 105.55-164.29a174.52 174.52 0 0 1 25.51-9.12q4.63-1.26 9.36-2.26a175.39 175.39 0 0 1 25.51-3.5q4.65-.29 9.35-.33H177c3.46 0 6.89.12 10.3.32l1.12-1.9q2.06-3.44 4.22-6.81 3.9-6.14 8.18-12.1 4.48-6.29 9.35-12.38l.83-1q2.76-3.44 5.64-6.8 9-10.49 19-20.35C307.75 45.54 420.72.04 547.72.04c98.82 0 189.15 27.55 258.34 73.07A174.18 174.18 0 0 1 892 50.52c97.74 0 177 80.37 177 179.51a184.9 184.9 0 0 1-1 18.78 180 180 0 0 1 76 147.42z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M235.66 116.18v20.35h-19q8.93-10.48 19-20.35zM245.02 111.02h25.51v25.51h-25.51zM279.88 111.02h25.51v25.51h-25.51zM314.75 111.02h25.51v25.51h-25.51zM349.61 111.02h25.51v25.51h-25.51zM384.48 111.02h25.51v25.51h-25.51z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M419.35 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M454.21 111.02h25.51v25.51h-25.51zM489.08 111.02h25.51v25.51h-25.51zM523.94 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M558.81 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M593.68 111.02h25.51v25.51h-25.51zM628.54 111.02h25.51v25.51h-25.51zM663.41 111.02h25.51v25.51h-25.51zM698.28 111.02h25.51v25.51h-25.51zM733.14 111.02h25.51v25.51h-25.51zM768.01 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M802.87 111.02h25.51v25.51h-25.51zM837.74 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M872.61 111.02h25.51v25.51h-25.51zM907.47 111.02h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M942.34 111.02h25.51v25.51h-25.51zM977.2 111.02h25.51v25.51H977.2zM200.8 156.74v12.1h-8.18q3.9-6.18 8.18-12.1z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M210.15 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M245.02 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M279.88 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M314.75 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M349.61 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M384.48 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M419.35 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M454.21 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M489.08 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M523.94 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M558.81 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M593.68 143.33h25.51v25.51h-25.51zM628.54 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M663.41 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M698.28 143.33h25.51v25.51h-25.51zM733.14 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M768.01 143.33h25.51v25.51h-25.51zM802.87 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M837.74 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M872.61 143.33h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M907.47 143.33h25.51v25.51h-25.51zM942.34 143.33h25.51v25.51h-25.51zM977.2 143.33h25.51v25.51H977.2z"
  }), React.createElement("path", {
    d: "M131.06 183.33v17.83h-25.51v-8.71a174.52 174.52 0 0 1 25.51-9.12zM165.93 177.57v23.59h-25.51v-20.09l25.51-3.5z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M175.28 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M210.15 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M245.02 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M279.88 175.65h25.51v25.51h-25.51zM314.75 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M349.61 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M384.48 175.65h25.51v25.51h-25.51zM419.35 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M454.21 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M489.08 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M523.94 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M558.81 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M593.68 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M628.54 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M663.41 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M698.28 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M733.14 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M768.01 175.65h25.51v25.51h-25.51zM802.87 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M837.74 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M872.61 175.65h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M907.47 175.65h25.51v25.51h-25.51zM942.34 175.65h25.51v25.51h-25.51zM977.2 175.65h25.51v25.51H977.2z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M105.55 207.96h25.51v25.51h-25.51zM140.42 207.96h25.51v25.51h-25.51zM175.28 207.96h25.51v25.51h-25.51zM210.15 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M245.02 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M279.88 207.96h25.51v25.51h-25.51zM314.75 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M349.61 207.96h25.51v25.51h-25.51zM384.48 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M419.35 207.96h25.51v25.51h-25.51zM454.21 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M489.08 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M523.94 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M558.81 207.96h25.51v25.51h-25.51zM593.68 207.96h25.51v25.51h-25.51zM628.54 207.96h25.51v25.51h-25.51zM663.41 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M698.28 207.96h25.51v25.51h-25.51zM733.14 207.96h25.51v25.51h-25.51zM768.01 207.96h25.51v25.51h-25.51zM802.87 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M837.74 207.96h25.51v25.51h-25.51zM872.61 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M907.47 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M942.34 207.96h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M977.2 207.96h25.51v25.51H977.2z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M105.55 240.28h25.51v25.51h-25.51zM140.42 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M175.28 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M210.15 240.28h25.51v25.51h-25.51zM245.02 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M279.88 240.28h25.51v25.51h-25.51zM314.75 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M349.61 240.28h25.51v25.51h-25.51zM384.48 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M419.35 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M454.21 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M489.08 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M523.94 240.28h25.51v25.51h-25.51zM558.81 240.28h25.51v25.51h-25.51zM593.68 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M628.54 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M663.41 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M698.28 240.28h25.51v25.51h-25.51zM733.14 240.28h25.51v25.51h-25.51zM768.01 240.28h25.51v25.51h-25.51zM802.87 240.28h25.51v25.51h-25.51zM837.74 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M872.61 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M907.47 240.28h25.51v25.51h-25.51zM942.34 240.28h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M977.2 240.28h25.51v25.51H977.2z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M105.55 272.59h25.51v25.51h-25.51zM140.42 272.59h25.51v25.51h-25.51zM175.28 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M210.15 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M245.02 272.59h25.51v25.51h-25.51zM279.88 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M314.75 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M349.61 272.59h25.51v25.51h-25.51zM384.48 272.59h25.51v25.51h-25.51zM419.35 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M454.21 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M489.08 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M523.94 272.59h25.51v25.51h-25.51zM558.81 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M593.68 272.59h25.51v25.51h-25.51zM628.54 272.59h25.51v25.51h-25.51zM663.41 272.59h25.51v25.51h-25.51zM698.28 272.59h25.51v25.51h-25.51zM733.14 272.59h25.51v25.51h-25.51zM768.01 272.59h25.51v25.51h-25.51zM802.87 272.59h25.51v25.51h-25.51zM837.74 272.59h25.51v25.51h-25.51zM872.61 272.59h25.51v25.51h-25.51zM907.47 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.4,
    d: "M942.34 272.59h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M977.2 272.59h25.51v25.51H977.2z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M105.55 304.91h25.51v25.51h-25.51zM140.42 304.91h25.51v25.51h-25.51zM175.28 304.91h25.51v25.51h-25.51zM210.15 304.91h25.51v25.51h-25.51zM245.02 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M279.88 304.91h25.51v25.51h-25.51zM314.75 304.91h25.51v25.51h-25.51zM349.61 304.91h25.51v25.51h-25.51zM384.48 304.91h25.51v25.51h-25.51zM419.35 304.91h25.51v25.51h-25.51zM454.21 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M489.08 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M523.94 304.91h25.51v25.51h-25.51zM558.81 304.91h25.51v25.51h-25.51zM593.68 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M628.54 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M663.41 304.91h25.51v25.51h-25.51zM698.28 304.91h25.51v25.51h-25.51zM733.14 304.91h25.51v25.51h-25.51zM768.01 304.91h25.51v25.51h-25.51zM802.87 304.91h25.51v25.51h-25.51zM837.74 304.91h25.51v25.51h-25.51zM872.61 304.91h25.51v25.51h-25.51zM907.47 304.91h25.51v25.51h-25.51zM942.34 304.91h25.51v25.51h-25.51z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M977.2 304.91h25.51v25.51H977.2z"
  }), React.createElement("circle", {
    cx: 734.52,
    cy: 363.89,
    r: 34.87,
    fill: "#767d9f"
  }), React.createElement("path", {
    d: "M732.71 319.53q5.22 22.78 8.86 45.9c.73 4.58 1.38 9.41-.28 13.74-1.39 3.61-4.22 6.43-6.44 9.59s-3.9 7.21-2.55 10.83 5.29 5.6 9.05 6.62c10.76 2.9 22.23.79 32.94-2.35a53.29 53.29 0 0 0 13.81-5.72c4.54-2.88 8.26-6.88 11.68-11 15.61-18.93 25.83-41.65 35.45-64.23a39.12 39.12 0 0 1-33.11-13.34c-3.94-4.63-6.83-11.08-4.61-16.74-6.51 3.57-14.24 3.81-21.25 6.25a75.49 75.49 0 0 0-12.5 6.15q-7.18 4.15-14.28 8.46c-5.41 3.26-10.48 6.16-16.77 5.84z",
    fill: "#ae6e79"
  }), React.createElement("path", {
    d: "M805.64 345.71c-6.11 11.89-14.06 23.32-25.41 30.4s-26.63 9-38 2c-5.6-3.42-9.84-8.62-14.73-13s-11-8.13-17.57-7.56c-7.24.63-12.91 6.28-17.76 11.69-7.36 8.22-14.47 16.79-19.68 26.52-10 18.7-12.37 40.56-11.93 61.76s3.51 42.29 3.58 63.49c.1 26.08-4.32 51.95-8.79 77.64 41.1-5.06 82.25 6 123.44 10.19 26.36 2.71 52.92 2.65 79.42 2.58 4.66 0 9.62-.12 13.5-2.7a18.2 18.2 0 0 0 5.59-6.64c3.66-6.75 5.13-14.45 6.15-22.06 2.59-19.22 2.67-38.68 2.74-58.08.18-47 .35-94.17-5.62-140.8-1.47-11.47-3.35-23-7.75-33.73s-11.58-20.6-21.62-26.35c-6.45-3.7-21.4-10.14-29-6.41-8.53 4.16-12.47 23.1-16.56 31.06z",
    fill: "#767d9f"
  }), React.createElement("path", {
    d: "M808.68 478.43c-1.55-29-7.86-59.95 5.57-85.69 3.3-6.32-8.54-14.21-4.88-20.33a92.08 92.08 0 0 0 10.06-23.93c.76-2.89 1.37-5.95.65-8.85-1.33-5.29-6.56-8.44-11-11.66-4.9-3.56-7.42-14.41-9-20.28s12.57 1.2 18.26-.89c7.9-2.89 17.94-1.07 25.82 1.86 4.4 1.62 9.18 1.76 13.87 1.88 9.11.24 18.25.47 27.29-.65 4.06-.51 8.13-1.28 12.21-1.05 10.41.59 19.46 7.71 25.62 16.13s10.08 18.23 15.13 27.35c4.21 7.6 9.23 14.78 12.82 22.69 3.18 7 5.19 14.52 7.18 22l5.13 19.19a25.58 25.58 0 0 1 1.26 8.51c-.26 3.07-1.62 5.93-3 8.66A164.12 164.12 0 0 1 943 461.86c-10.79 13.23-23.89 25.16-30.3 41-2.5 6.17-3.89 12.73-5.16 19.27a707.94 707.94 0 0 0-10.9 79.15 174.2 174.2 0 0 0-36.52-12.21 177.61 177.61 0 0 0-19-3c-5.59-.58-12.8.52-18.12-1-8.9-2.53-9.88-17.58-11.23-25.46-2.16-12.55-2.59-25.32-2.67-38-.1-14.42.35-28.81-.42-43.18zM613.23 424.2c4.21 24 8.85 48.07 18 70.62-.23.22-.46.42-.69.62-.81.69-1.65 1.34-2.53 2-2.05 1.44-4.3 2.66-6 4.54a8 8 0 0 0-1.5 2.45 5.48 5.48 0 0 0 0 4.47c-4.77 2.11-10.31 1.46-15.66 1.26-4.61-.17-9.08 0-12.78 2.53-5.14 3.54-6.69 10.34-7.52 16.52q-.46 3.38-.79 6.77-.32 3.15-.52 6.32a188.61 188.61 0 0 0-.19 21q.08 1.92.21 3.84c-16.34-.39-31.23-8.91-45.32-17.19-3.22-1.89-6.54-3.88-8.63-7a15.8 15.8 0 0 1-2.31-10.29c0-.51.09-1 .16-1.52a41.58 41.58 0 0 1 2.29-8.68 107.2 107.2 0 0 1 19.19-32.65c3.58-4.18 7.61-8.27 9.28-13.52.73-2.29 1-4.72 1.74-7 3.32-9.88 15.3-14.55 19.4-24.14 1-2.29 1.46-4.8 2.7-7a17.63 17.63 0 0 1 4.25-4.75c.73-.61 1.49-1.2 2.24-1.79q10.54-8.26 20.31-17.45 1.82-1.71 3.6-3.46a59.48 59.48 0 0 0 1.07 13.5z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M714 353.22c-1.44 1.52-3 2.95-4.53 4.37l-.41.37-1.62 1.5a39 39 0 0 0-7.55 8.79l-.17.28c-5.1 9.13-3.21 20.37-1.79 30.74a261.55 261.55 0 0 1 2.37 39c-.26 18-2.38 35.88-2.42 53.86 0 4.08.09 8.15.27 12.23.29 6.63.79 13.25 1.39 19.87.65 7.26 1.43 14.51 2.16 21.76.58 5.61 1.13 11.21 1.59 16.81.23 2.9.45 5.79.63 8.69.21 3.4.38 6.81.48 10.21.07 2.16.11 4.31.11 6.47v3.67q0 3.51-.19 7-.2 4.49-.61 9c-.31 3.27-.86 6.84-3.16 9.14-.14.14-.29.27-.44.4l-3.24-.4a332.72 332.72 0 0 0-67.3-1.2c.49-3.38.94-6.75 1.38-10.14.2-1.6.4-3.21.59-4.82q.33-2.76.63-5.52c.23-2 .44-4 .64-6q.78-7.73 1.37-15.47.87-11.29 1.32-22.62.22-5.41.34-10.83.17-6.72.16-13.45 0-6.54-.11-13.1c0-1.44-.06-2.88-.18-4.31a27.35 27.35 0 0 0-.53-3.83 49.87 49.87 0 0 0-3-8.48c-.22-.52-.43-1-.64-1.55-.12-.27-.23-.55-.34-.82 5.76-5.13 9.86-12 13.8-18.76 6.39-10.89 12.93-22.26 14-34.84s-5.18-26.71-17.2-30.55c-3.27-1-6.73-1.28-10.1-1.87-3.18-.56-9.81-1.83-13.49-4.11q-3 3.08-6 6.05a22.15 22.15 0 0 1 2.17-8.71l1.42.07a2.71 2.71 0 0 1-.16-1c0-1.07.74-2.28 2.32-3.62 4.71-4 12.12-4.89 15.09-10.3 1.24-2.25 1.45-4.93 2.45-7.29 2.87-6.73 11.11-9.21 16.07-14.59s6.2-13 10.21-19a28.62 28.62 0 0 1 12-10c.4-.19.81-.38 1.22-.55 8.3-3.55 18.16-4.36 26.76-4.34 3.34 0 12 .1 16.24 1.79a5.32 5.32 0 0 1 1.85 1.13c4.52 4.92-2.51 15.31-5.85 18.87z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M614.72 401.35a60.88 60.88 0 0 1 46.74 4.87c7.2 4 13.66 9.58 17.62 16.78 5.95 10.8 5.69 23.82 5.27 36.15-.21 6.17-.48 12.56-3.2 18.1-3.15 6.41-9.09 10.81-15.15 14.41a42.24 42.24 0 0 1-12.32 5.33c-6.72 1.46-13.7.22-20.47-1-7.36-1.36-15.26-3-20.37-8.48-3-3.18-4.64-7.31-6.26-11.35q-3.49-8.75-7-17.48c-4.05-10.11-5.42-18.52-.07-28.37 2.43-4.49 5.4-8.69 7.8-13.21 1.2-2.3 5.5-15.16 7.41-15.75z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M1035 574.22v29.9a167.3 167.3 0 0 1-64.73 12.8H700.58c-.14.14-.29.27-.44.4l-3.24-.4H217.17c-40.25 0-77.55-10.86-108.14-29.36v-45.65l230.72-26.63h.18l134.36 11.38 34.77 3 18.06 1.53 37.38 3.17 19.23 1.63 28 2.38 3.94.33 20.18 1.71 27.38 2.25 38.5 3.26 64.18 5.45 45.15 3.83 74.14 6.29 14.1 1.19 1.52.13 1.32.11 18.62 1.58 20.44 1.74 2.37.2z",
    fill: "#504f60"
  }), React.createElement("path", {
    fill: "#9c9ca1",
    d: "M764 573.12l-289.14-49.35-11.21 56.69 132.54 15.87 40.81 5.11 112.26-22.11 14.74-6.21z"
  }), React.createElement("path", {
    d: "M614.33 598.6l144.86-27.23a5 5 0 0 1 5.94 4.93 5 5 0 0 1-4.09 4.93l-141.47 26.49z",
    fill: "#9c9ca1"
  }), React.createElement("path", {
    d: "M677.17 512.97c4.51-.42 9.08-1.13 13.14-3.13 5-2.49 8.89-6.78 13.52-9.94 10.18-7 23.8-7.94 35.47-3.92s21.41 12.63 28.23 22.91c4.53 6.85 7.93 15.59 4.73 23.15a30.51 30.51 0 0 1-4.12 6.44l-8.34 10.9a29 29 0 0 1-5.66 6.09c-3.12 2.27-7 3.2-10.82 3.76-10.15 1.48-20.48.64-30.71 1.32-17.57 1.17-34.73 6.83-52.34 6.64-10.12-.11-20.11-2.15-30-4.19l-43.77-9c-7.62-1.56-16.23-3.84-19.82-10.75-1.61-3.11-1.91-6.71-2.1-10.21-.52-9.64 0-20.36 6.68-27.31 6.28-6.52 16.21-8.58 23.71-13.4 9.18-5.91 12.21-4 21.89.44a120 120 0 0 0 60.31 10.2z",
    fill: "#ae6e79"
  }), React.createElement("path", {
    d: "M677.17 512.97c4.51-.42 9.08-1.13 13.14-3.13 5-2.49 8.89-6.78 13.52-9.94 10.18-7 23.8-7.94 35.47-3.92s21.41 12.63 28.23 22.91c4.53 6.85 7.93 15.59 4.73 23.15a30.51 30.51 0 0 1-4.12 6.44l-8.34 10.9a29 29 0 0 1-5.66 6.09c-3.12 2.27-7 3.2-10.82 3.76-10.15 1.48-20.48.64-30.71 1.32-17.57 1.17-34.73 6.83-52.34 6.64-10.12-.11-20.11-2.15-30-4.19l-43.77-9c-7.62-1.56-16.23-3.84-19.82-10.75-1.61-3.11-1.91-6.71-2.1-10.21-.52-9.64 0-20.36 6.68-27.31 6.28-6.52 16.21-8.58 23.71-13.4 9.18-5.91 12.21-4 21.89.44a120 120 0 0 0 60.31 10.2z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M852.94 499.26c-12.28 4.75-24.63 9.52-37.49 12.35-21.56 4.75-44.12 4-65.51 9.43-11.3 2.88-22.53 7.52-34.14 6.58-5.19-.42-10.2-2-15.25-3.2-28.37-7-60.62-4.73-83.66 13.27-7.88 6.15-14.33 13.82-20.18 22a14.7 14.7 0 0 0 5.91 21.88 86.62 86.62 0 0 0 28.38 7.57c13.13 1.16 26.32-.7 39.38-2.56 19.38-2.75 38.77-5.51 58.1-8.6 6.94-1.11 13.88-2.26 20.86-3.14 50.23-6.35 101.37 1.37 151.73-3.93 5.09-.54 10.27-1.24 14.9-3.41 11.72-5.5 17.52-20 15.1-32.74s-11.76-23.33-23-29.83c-9.42-5.47-19.58-7.68-30.07-10-9.74-2.27-15.68.73-25.06 4.33z",
    fill: "#ae6e79"
  }), React.createElement("path", {
    d: "M960.67 423.1c5.54 7.26 6.72 17 6.12 26.09s-2.76 18.08-3.08 27.21c-.44 12.52 2.58 25 2.07 37.48-.36 8.73-2.43 17.29-4.88 25.67-2.89 9.89-7.07 20.52-16.2 25.27-12.12 6.31-37.54 2.76-50.29 7.7 1.16-7.23 12.28-17.7 13.44-24.93.8-5 1.61-10.14.75-15.15-1.1-6.39-4.85-12.06-9.3-16.78-7.08-7.51-16.32-13.16-26.47-15s-35-.33-43.12 6.08c-1-6.62 17.6-13 24.14-14.43 3.26-.73 7-.32 9.61-2.39 5-3.92 1.37-11.73 1.61-18 .19-5 3.11-9.58 3.7-14.58 1-8-4.22-16.15-2.17-24 .76-2.9 2.45-5.45 3.62-8.21 3.56-8.45 2-18.09.1-27.07-1.18-5.64-2.33-12 .81-16.81 2.91-4.49 11.17 11.5 16.46 10.76 17.47-2.45 33.28-15.4 47.39-4.8 7.19 5.4 8.13 11 11 18.71 2.79 7.34 10.02 11.1 14.69 17.18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M963.67 423.1c5.54 7.26 6.72 17 6.12 26.09s-2.76 18.08-3.08 27.21c-.44 12.52 2.58 25 2.07 37.48-.36 8.73-2.43 17.29-4.88 25.67-2.89 9.89-7.07 20.52-16.2 25.27-12.12 6.31-37.54 2.76-50.29 7.7 1.16-7.23 12.28-17.7 13.44-24.93.8-5 1.61-10.14.75-15.15-1.1-6.39-4.85-12.06-9.3-16.78-7.08-7.51-16.32-13.16-26.47-15s-35-.33-43.12 6.08c-1-6.62 17.6-13 24.14-14.43 3.26-.73 7-.32 9.61-2.39 5-3.92 1.37-11.73 1.61-18 .19-5 3.11-9.58 3.7-14.58 1-8-4.22-16.15-2.17-24 .76-2.9 2.45-5.45 3.62-8.21 3.56-8.45 2-18.09.1-27.07-1.18-5.64-2.33-12 .81-16.81 2.91-4.49 8.6-6.19 13.89-6.94a68.42 68.42 0 0 1 50 12.9c7.19 5.4 8.13 11 11 18.71 2.75 7.34 9.98 11.1 14.65 17.18z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M302 375.72l54.37 200.94a12.55 12.55 0 0 0 10.91 9.21L612 609.38a12.54 12.54 0 0 0 13.38-15.48l-59.54-242.38a12.54 12.54 0 0 0-13.12-9.51l-239.59 17.92A12.54 12.54 0 0 0 302 375.72z",
    fill: "#9c9ca1"
  }), React.createElement("ellipse", {
    cx: 787.11,
    cy: 387.68,
    rx: 26.9,
    ry: 27.25,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M809.2 337.97s5.67 16.86-11.06 23.95l-2.14 3.74L806.48 376s12.92-23.57 11.52-31.94c0 0-2-8.5-8.8-6.09z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 790.2,
    cy: 388.99,
    r: 25.94,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M818.13 347.89l-4.12-6.8-6-.85c1.28-22.39-4.53-29.06-4.53-29.06l-1.35-.13-5.88-.57L785.19 299v-3.26c15.54 1.85 24.13 9.23 28.77 17.88 8.2 15.18 4.17 34.27 4.17 34.27z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M802.18 306.93v4.12l-5.88-.57L785.24 299s17.11 3.83 16.94 7.93zM818.13 347.89l-4.12-6.8v-27.43c8.15 15.14 4.12 34.23 4.12 34.23z",
    stroke: "#4c4981",
    strokeMiterlimit: 10,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 757.11,
    cy: 518.2,
    rx: 14.43,
    ry: 26.32,
    transform: "rotate(-30 479.363 499.785)",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M733 374.66c7.27 12.59 16.19 21 9.29 25s-27 2-34.27-10.6-.67-30 6.23-34 11.47 6.98 18.75 19.6z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M797.73 283.96c0 40.23-27.53 79-67.76 79a72.85 72.85 0 0 1 0-145.7c40.23.04 67.76 26.46 67.76 66.7z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 729.97,
    cy: 288.15,
    r: 72.85,
    fill: "#ae6e79"
  }), React.createElement("path", {
    d: "M723.57 255.87c8.67 3.19 13.8 12.15 21.58 17.14 11 7 25.32 5.19 37.88 1.73 7-1.91 14.32-4.24 21.21-2.12a6 6 0 0 0 3.23.46c1.5-.43 2.24-2.09 2.73-3.57 8.52-25.4 4.69-54.17-8.17-77.67-3.32-6.06-7.3-11.92-12.78-16.13-4.32-3.31-9.4-5.48-14.52-7.33a145 145 0 0 0-28.88-7.13 17.94 17.94 0 0 0-5.27-.17c-2.41.39-4.57 1.69-6.72 2.85a68.78 68.78 0 0 1-29.86 8.11c-14 .53-30-2.77-40.79 6.21-13 10.77-9.76 31.78-18.19 46.4-5.58 9.67-16.34 16.69-18.11 27.7a25.57 25.57 0 0 0 .63 10.07c4.12 16.94 20.52 30.06 38 30.37a14.42 14.42 0 0 0 7.76-1.59 17.55 17.55 0 0 0 4.09-3.89c11.45-13.56 24.55-39.4 46.18-31.44z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M810.2 262.14c-.49 1.48-1.23 3.14-2.73 3.57a6 6 0 0 1-3.23-.46c-6.89-2.12-14.25.21-21.2 2.12-12.57 3.46-26.92 5.31-37.88-1.73-7.79-5-12.91-14-21.59-17.14-21.63-8-34.73 17.88-46.21 31.44a17.55 17.55 0 0 1-4.09 3.89 14.42 14.42 0 0 1-7.76 1.59c-17.42-.31-33.83-13.43-38-30.37-.23-1-.43-2-.58-3 0 .09 0 .17-.05.26a25.57 25.57 0 0 0 .63 10.07c4.12 16.94 20.53 30.06 38 30.37a14.42 14.42 0 0 0 7.76-1.59 17.55 17.55 0 0 0 4.09-3.89c11.48-13.56 24.58-39.4 46.21-31.44 8.68 3.19 13.8 12.15 21.59 17.14 11 7 25.31 5.19 37.88 1.73 7-1.91 14.31-4.24 21.2-2.12a6 6 0 0 0 3.23.46c1.5-.43 2.24-2.09 2.73-3.57a90.29 90.29 0 0 0 4.48-32.26 88.8 88.8 0 0 1-4.48 24.93z",
    opacity: 0.1
  }));
};

UndrawDeveloperActivity.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDeveloperActivity;