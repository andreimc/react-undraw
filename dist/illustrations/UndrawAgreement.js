function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAgreement = _props => {
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
    viewBox: "0 0 885 856.96",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 613.19,
    y1: 813.7,
    x2: 613.19,
    y2: 105.57,
    gradientTransform: "translate(-.86 -10.23)",
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
    x1: 613.84,
    y1: 152.52,
    x2: 613.84,
    y2: 92.5,
    gradientTransform: "translate(-140.84 19.9)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 613.84,
    y1: 104.78,
    x2: 613.84,
    y2: 33.84,
    gradientTransform: "rotate(-24.52 589.237 456.517)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 440.4,
    y1: 329.87,
    x2: 440.4,
    y2: 222.94,
    gradientTransform: "translate(-61.32 78.01)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 440.76,
    y1: 541.79,
    x2: 440.76,
    y2: 434.85,
    gradientTransform: "translate(26.6 58.74)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 440.4,
    y1: 302,
    x2: 440.4,
    y2: 249.51,
    gradientTransform: "rotate(-24.52 462.547 807.555)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 599.62,
    y1: 607.1,
    x2: 599.62,
    y2: 100.78,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    transform: "rotate(-24.52 485.655 800.456)",
    fill: "url(#prefix__a)",
    d: "M356.07 95.34h512.51v708.13H356.07z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#fff",
    d: "M83.217 214.75L537.643 7.464l287.386 630.03L370.603 844.78z"
  }), React.createElement("path", {
    transform: "rotate(-24.52 346.323 493.463)",
    fill: "url(#prefix__b)",
    d: "M349.12 112.4H596.9v60.02H349.12z"
  }), React.createElement("path", {
    d: "M436.21 61.74c-17.4 7.94-24.92 28.82-16.79 46.64s28.83 25.83 46.23 17.89 24.92-28.82 16.79-46.64-28.83-25.83-46.23-17.89zm23.21 50.88a20.47 20.47 0 1 1 9.69-26.91 20.23 20.23 0 0 1-9.69 26.92z",
    transform: "translate(-157.12 -20.92)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M193.108 144.562L413.793 43.897l23.813 52.205-220.685 100.665z"
  }), React.createElement("path", {
    d: "M280.17 43.2a33.91 33.91 0 1 0 44.92 16.78 33.91 33.91 0 0 0-44.92-16.78zm22.19 48.65a19.56 19.56 0 1 1 9.68-25.92 19.56 19.56 0 0 1-9.68 25.91z",
    fill: primaryColor
  }), React.createElement("path", {
    transform: "rotate(-24.52 252.396 705.48)",
    fill: "url(#prefix__d)",
    d: "M325.61 300.95h106.94v106.94H325.61z"
  }), React.createElement("path", {
    transform: "rotate(-24.52 340.697 898.134)",
    fill: "url(#prefix__e)",
    d: "M413.89 493.6h106.94v106.94H413.89z"
  }), React.createElement("path", {
    fill: "#69f0ae",
    d: "M156.303 308.982l90.172-41.131 41.132 90.171-90.172 41.132z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M243.44 500.001l90.172-41.131 41.131 90.172-90.172 41.131z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M318.497 268.628l123.598-56.379 3.935 8.625-123.599 56.38zM324.405 281.564l204.081-93.09 3.934 8.624-204.08 93.091zM330.296 294.5l189.706-86.535 3.934 8.625-189.705 86.534zM405.638 459.656l123.598-56.379 3.934 8.625-123.598 56.38zM411.542 472.584l204.08-93.092 3.935 8.625-204.08 93.092zM417.437 485.528l189.706-86.534 3.934 8.625-189.705 86.534z"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M199.04 337.46l23.22 7.54 7.64-44.69 11.3 3.09-12.71 55.25-35.02-15.35 5.57-5.84z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M202 336.87l20.19 6.55 6.64-38.86 9.82 2.69-11.05 48.04-30.45-13.34 4.85-5.08zM289.68 529.08l20.19 6.55 6.64-38.86 9.82 2.69-11.05 48.04-30.45-13.34 4.85-5.08z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M388.987 665.105l288.32-131.517 43.838 96.104-288.32 131.517z"
  }), React.createElement("path", {
    d: "M635.51 610.18c-11.08-3.16-22.42-2.56-25.95 10.11-1.19 4.27-1.33 10.9-5.91 13.1-6.74 3.24-14.87-3.24-20.72-5.88-10.9-4.92-22.09-1.57-28.4 8.77-3.2 5.24-4.57 11.27-5.66 17.24-.47 2.59-.53 5.79-1.62 8.23-2.09 4.67-8.63 4.25-12.92 4.07-.94 0-1.9-.11-2.86-.21a25.33 25.33 0 0 0 4.8-16.13c-.28-9.47-6.43-19.83-17.18-18.67-9.63 1-16.41 10.3-15.33 19.71.92 8 6.13 14.2 12.81 18-3.28 1.45-6.78 2.58-9.88 4.08a41.43 41.43 0 0 0-4.21 2.35c-9.37-4.52-21.68-5.37-30.11-.76-4.08 2.23-1.1 8.86 3 6.61 6.42-3.51 13.5-2.63 20.21-.4l.56.2a18.06 18.06 0 0 0-1.75 2.71c-3.79 7.36 0 19 9.22 19.8 13 1.11 13.61-16.07 6.55-22.91-.3-.29-.6-.57-.92-.84 2.92-1.41 6.08-2.47 8.87-3.66a36.89 36.89 0 0 0 6.9-3.84l.5.13c9.93 2.25 25.43 2.95 29-9.08 3.06-10.44 3.35-32.61 19.85-30.56 6.73.83 12.25 6 18.65 7.87 5.73 1.71 12.36 1.78 17.06-2.44 3.88-3.48 4.75-8.62 5.94-13.42.61-2.48 1.21-5.44 3.23-7.21 3.65-3.19 9.68-1.31 13.75-.15 4.45 1.26 7.03-5.54 2.52-6.82zm-129 84.59c-2.19 2.17-4.51.45-5.68-1.82-1.42-2.76-.81-5.48 1-7.91a13.74 13.74 0 0 1 .95-1.14c4.33 2.8 7.87 6.81 3.77 10.87zm7.68-54c4.5-4.18 10.77-3.26 13.45 2.48s1.5 13.84-2.26 18.9a15.26 15.26 0 0 1-1.65 1.86 21.07 21.07 0 0 1-7.13-4.07c-5.32-4.8-8.33-13.67-2.37-19.2z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M852.6 242.63l-80.72 31.47c-15.18-1.13-47.12-5.25-78.82-20.2-35.29-16.64-75.72-16.6-110 .83-79 1.89-122.48-8.23-145.68-17.81l6.12-12.56-81.82-31.9-204.56-91.68v375.76l71.59 31.9 38.4-92.12 84.33 39 16.19-41.14L423 455.27l3.77 3.17-5.19 5.39a27.06 27.06 0 0 0 0 37.21 24.64 24.64 0 0 0 35.8 0l-2.84 3a27.06 27.06 0 0 0 0 37.21 24.64 24.64 0 0 0 35.8 0l16.4-17.05-11.26 11.7a27.06 27.06 0 0 0 0 37.21 24.64 24.64 0 0 0 35.8 0l16.19-16.83-6.81 7.08a18.9 18.9 0 0 0 0 26 17.21 17.21 0 0 0 25 0l10.8-11.22c18.55 13.55 33.56 23.44 40.91 26C648 614.76 648 593.49 648 593.49c40.91 21.26 61.37-21.26 61.37-21.26 51.14 21.26 51.14-31.9 51.14-31.9 12.78 8.86 22 4.8 28.44-3 8.77-10.58 9.84-25.51 3.82-37.49l48.88-45.17 21.14 43.22 84.33-39 38.4 85.13 56.55-25.25V146.94z",
    transform: "translate(-157.12 -20.92)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    fill: "#be7c5e",
    d: "M681.9 418.48l-89.02 79.12-69.23-128.58 158.25-39.56v89.02z"
  }), React.createElement("path", {
    d: "M256.6 210.77s28.57 39.56 197.81 29.67l98.91 148.36 66.28 74.57c10.41 11.72 11 29.49.78 41.37-6.21 7.21-15.14 11-27.5 2.75 0 0 0 49.45-49.45 29.67 0 0-19.78 39.56-59.34 19.78 0 0 0 19.78-29.67 9.89S266.49 428.37 266.49 428.37l-69.23-49.45z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M612.66 260.23s-42.74 0-85-19.19c-38.43-17.43-83.18-15.21-118.64 7.67-28.9 18.65-53.94 49.53-53.47 100.53 0 0 38.46 39.56 79.12-39.56h29.67s28.57 98.91 108.8 89 98.91-19.78 98.91-19.78z",
    fill: "#be7c5e"
  }), React.createElement("rect", {
    x: 456.83,
    y: 463.57,
    width: 48.96,
    height: 76.93,
    rx: 22.21,
    ry: 22.21,
    transform: "rotate(45 428 301.923)",
    fill: "#be7c5e"
  }), React.createElement("rect", {
    x: 424.96,
    y: 426.21,
    width: 48.96,
    height: 76.93,
    rx: 22.21,
    ry: 22.21,
    transform: "rotate(45 396.129 264.552)",
    fill: "#be7c5e"
  }), React.createElement("rect", {
    x: 498.86,
    y: 487.27,
    width: 48.96,
    height: 83.92,
    rx: 22.21,
    ry: 22.21,
    transform: "rotate(45 470.036 329.115)",
    fill: "#be7c5e"
  }), React.createElement("rect", {
    x: 540.04,
    y: 526.26,
    width: 34.19,
    height: 55.95,
    rx: 15.51,
    ry: 15.51,
    transform: "rotate(45 503.828 354.122)",
    fill: "#be7c5e"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M780.8 438.26l-89.01 39.56-89.02-217.59 79.13-29.67 98.9 207.7zM108.25 388.81l89.01 39.56 89.02-217.59-79.13-29.68-98.9 207.71z"
  }), React.createElement("path", {
    fill: "#333",
    d: "M9.34 92.09l197.81 89.01L78.58 477.82 9.34 448.15V92.09z"
  }), React.createElement("path", {
    fill: "#4d8af0",
    d: "M879.71 141.54L681.9 230.56l128.58 296.71 69.23-29.67V141.54z"
  }));
};

UndrawAgreement.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAgreement;