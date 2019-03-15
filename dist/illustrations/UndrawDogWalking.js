function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawDogWalking = _props => {
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
    viewBox: "0 0 974.38 701.23",
    style: style
  }, props), React.createElement("path", {
    d: "M670.3 276.61H541.95v-27.74a6.64 6.64 0 0 0-6.64-6.64h-37.69v-29.57a4.18 4.18 0 0 0-4.18-4.18h-48.55a4.18 4.18 0 0 0-4.18 4.18v29.57H396.4a6.64 6.64 0 0 0-6.64 6.64v27.74H267.37a1.35 1.35 0 0 0-1.34 1.35V646.5a1.35 1.35 0 0 0 1.34 1.35h81.34a1.35 1.35 0 0 0 1.35-1.35v-49.58a1.36 1.36 0 0 1 1.35-1.35h34.36a1.36 1.36 0 0 1 1.35 1.35v49.58a1.35 1.35 0 0 0 1.34 1.35h160.73a1.36 1.36 0 0 0 1.35-1.35v-49.58a1.35 1.35 0 0 1 1.34-1.35h34.36a1.35 1.35 0 0 1 1.35 1.35v49.58a1.36 1.36 0 0 0 1.35 1.35h81.34a1.36 1.36 0 0 0 1.35-1.35V277.98a1.36 1.36 0 0 0-1.33-1.37zM335.5 578.35a1.34 1.34 0 0 1-1.34 1.34h-50.24a1.34 1.34 0 0 1-1.35-1.34v-17.16a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35h-50.24a1.34 1.34 0 0 1-1.35-1.35v-17.15a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm0-44.33a1.35 1.35 0 0 1-1.34 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.16a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35h-50.24a1.34 1.34 0 0 1-1.35-1.35v-17.15a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm0-44.33a1.35 1.35 0 0 1-1.34 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.16a1.34 1.34 0 0 1 1.35-1.34h50.27a1.34 1.34 0 0 1 1.34 1.34zm0-44.33a1.34 1.34 0 0 1-1.34 1.34h-50.24a1.34 1.34 0 0 1-1.35-1.34v-17.16a1.35 1.35 0 0 1 1.35-1.35h50.27a1.35 1.35 0 0 1 1.34 1.35zm0-44.34a1.34 1.34 0 0 1-1.34 1.35h-50.24a1.34 1.34 0 0 1-1.35-1.35v-17.15a1.34 1.34 0 0 1 1.35-1.35h50.27a1.34 1.34 0 0 1 1.34 1.35zm119.11 266a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.15a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.15a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.15a1.35 1.35 0 0 1 1.35-1.34h50.24a1.34 1.34 0 0 1 1.35 1.34zm0-44.33a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.15a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm81.39 266a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.14a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.14a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm0-44.33a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.36 1.36 0 0 1-1.35-1.35v-17.14a1.35 1.35 0 0 1 1.35-1.34h50.24a1.34 1.34 0 0 1 1.35 1.34zm0-44.33a1.34 1.34 0 0 1-1.35 1.34h-50.24a1.35 1.35 0 0 1-1.35-1.34v-17.14a1.36 1.36 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.34a1.34 1.34 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.34 1.34 0 0 1 1.35 1.35zm119.11 266a1.35 1.35 0 0 1-1.35 1.34h-50.24a1.34 1.34 0 0 1-1.35-1.34v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.34 1.34 0 0 1-1.33-1.32v-17.15a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.33a1.36 1.36 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.35-1.35v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.34 1.34 0 0 1-1.35-1.35v-17.12a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zm0-44.33a1.36 1.36 0 0 1-1.35 1.35h-50.24a1.35 1.35 0 0 1-1.33-1.32v-17.16a1.34 1.34 0 0 1 1.35-1.34h50.24a1.35 1.35 0 0 1 1.35 1.34zm0-44.33a1.35 1.35 0 0 1-1.35 1.34h-50.24a1.34 1.34 0 0 1-1.35-1.34v-17.13a1.35 1.35 0 0 1 1.35-1.35h50.24a1.36 1.36 0 0 1 1.35 1.35zm0-44.34a1.35 1.35 0 0 1-1.35 1.35h-50.24a1.34 1.34 0 0 1-1.35-1.35v-17.12a1.34 1.34 0 0 1 1.35-1.35h50.24a1.35 1.35 0 0 1 1.35 1.35zM255.97 34.13l-15.52 9.84 9.42-17.14a15.35 15.35 0 0 0-9.38-3.35h-.25a18.09 18.09 0 0 1-3.22-.24l-5.26 3.37 2.25-4.1a18.66 18.66 0 0 1-9.2-7l-9.41 6 5.94-10.81C215.84 4.09 208.42.04 200.25.04c-9.79 0-18.51 5.82-24.14 14.89a18 18 0 0 1-16 8.6h-.52c-10.81 0-19.57 12.26-19.57 27.38s8.76 27.37 19.57 27.37a14.72 14.72 0 0 0 6.81-1.71 28.21 28.21 0 0 1 23.69-.46 24.66 24.66 0 0 0 20.14 0 28.23 28.23 0 0 1 23.47.46 14.72 14.72 0 0 0 6.75 1.67c10.81 0 19.57-12.26 19.57-27.37a34.71 34.71 0 0 0-4.05-16.74z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M226.72 74.18A28.89 28.89 0 0 0 209.95 76a24.69 24.69 0 0 1-20.13 0c-7.39-3.27-16.64-3.2-23.69.47a14.72 14.72 0 0 1-6.82 1.7c-9.6 0-17.59-9.67-19.25-22.43a18.53 18.53 0 0 0 4.8-5.17c5.63-9.13 14.33-14.96 24.14-14.96s18.4 5.75 24 14.73a18.48 18.48 0 0 0 15.95 8.76h.25c7.68.01 14.3 6.14 17.52 15.08z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M785.95 205.74l-7.76 4.87 4.7-8.55a7.67 7.67 0 0 0-4.68-1.67h-.12a8.6 8.6 0 0 1-1.61-.12l-2.62 1.67 1.12-2.05a9.4 9.4 0 0 1-4.59-3.48l-4.69 3 3-5.4a13.74 13.74 0 0 0-10.51-5.3c-4.88 0-9.23 2.91-12 7.43a9 9 0 0 1-8 4.29h-.26c-5.39 0-9.76 6.11-9.76 13.65s4.37 13.65 9.76 13.65a7.32 7.32 0 0 0 3.4-.85 14.08 14.08 0 0 1 11.81-.23 12.33 12.33 0 0 0 10.05 0 14.11 14.11 0 0 1 11.71.23 7.29 7.29 0 0 0 3.36.83c5.39 0 9.76-6.11 9.76-13.65a17.41 17.41 0 0 0-2.07-8.32z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M771.36 225.71a14.52 14.52 0 0 0-8.37.91 12.28 12.28 0 0 1-5 1.06 12.41 12.41 0 0 1-5-1.08 14.1 14.1 0 0 0-11.82.23 7.29 7.29 0 0 1-3.4.85c-4.79 0-8.77-4.82-9.6-11.19a9.26 9.26 0 0 0 2.4-2.58c2.8-4.52 7.15-7.43 12-7.43s9.18 2.87 12 7.35a9.22 9.22 0 0 0 8 4.37h.13c3.75 0 7.05 3.06 8.66 7.51z",
    opacity: 0.03
  }), React.createElement("path", {
    d: "M974.38 664.96v5a19.12 19.12 0 0 1-20.91 19c-39.15-3.72-78.12-10.64-117.4-9.44-72.42 2.21-145.44 31.83-215.54 13.53-19.77-5.16-39.32-14.13-59.66-12.2-18.25 1.73-34.49 12.05-52.17 16.89-53.77 14.76-108.51-22.54-164.26-21.04-36.74 1-71.92 18.89-108.62 16.9-21.27-1.14-41.53-8.92-62.28-13.71-51.66-11.94-104.86-5.26-158.09-1.12A14 14 0 0 1 .38 664.85v-4.24a14 14 0 0 1 14-14l940.92-.76a19.12 19.12 0 0 1 19.08 19.11z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M974.38 664.96v5a19.12 19.12 0 0 1-20.91 19c-39.15-3.72-78.12-10.64-117.4-9.44-72.42 2.21-145.44 31.83-215.54 13.53-19.77-5.16-39.32-14.13-59.66-12.2-18.25 1.73-34.49 12.05-52.17 16.89-53.77 14.76-108.51-22.54-164.26-21.04-36.74 1-71.92 18.89-108.62 16.9-21.27-1.14-41.53-8.92-62.28-13.71-51.66-11.94-104.86-5.26-158.09-1.12A14 14 0 0 1 .38 664.85v-4.24a14 14 0 0 1 14-14l940.92-.76a19.12 19.12 0 0 1 19.08 19.11z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M974.38 655.81v5a20.39 20.39 0 0 1-.11 2.08 19.11 19.11 0 0 1-20.8 17c-39.15-3.73-78.12-10.65-117.4-9.44-72.42 2.22-145.44 31.84-215.54 13.53-19.77-5.16-39.32-14.13-59.66-12.2-18.25 1.73-34.49 12-52.17 16.9-53.77 14.68-108.51-22.62-164.26-21.07-36.74 1-71.92 18.89-108.62 16.91-21.27-1.15-41.53-8.92-62.28-13.72-51.65-11.93-104.86-5.26-158.09-1.12a14 14 0 0 1-14.86-11.5 13.7 13.7 0 0 1-.21-2.42v-4.28a14 14 0 0 1 14-14l235.81-.2 481.81-.4 223.28-.18a19.11 19.11 0 0 1 19.1 19.11z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M888.98 641.37c3-5.51-.41-12.26-4.29-17.18s-8.61-10-8.51-16.29c.15-9 9.7-14.31 17.33-19.08a84.87 84.87 0 0 0 15.56-12.51 23 23 0 0 0 4.78-6.4c1.58-3.52 1.53-7.52 1.43-11.38q-.49-19.26-1.9-38.49",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    strokeWidth: 4
  }), React.createElement("path", {
    d: "M927.89 519.34a14 14 0 0 0-7-11.5l-3.14 6.22.09-7.53a13.86 13.86 0 0 0-4.62-.55 14 14 0 1 0 14.68 13.36zM902.86 614.33a14 14 0 1 1 .68-11.3l-8.77 7.14 9.65-2.24a14 14 0 0 1-1.56 6.4zM895.93 587.09a14 14 0 0 1-4.45-27.54l-.08 5.78 3.18-6.29a14 14 0 0 1 14.67 13.37 13.87 13.87 0 0 1-.6 4.79 14.05 14.05 0 0 1-12.72 9.89zM930 564.41a14.016 14.016 0 1 1-1.32-28 13.88 13.88 0 0 1 7.52 1.78l-2.48 6.79 5.11-4.89a14 14 0 0 1 4.53 9.68 13.76 13.76 0 0 1-.35 3.87A14 14 0 0 1 930 564.41z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M926 523.08c-3.24.36-6.39 1.37-9.64 1.57s-6.82-.58-8.88-3.11c-1.1-1.36-1.66-3.08-2.59-4.57a10 10 0 0 0-3.54-3.32 14 14 0 1 0 26.24 9.31c-.53.03-1.06.06-1.59.12zM930 564.41a14 14 0 0 1-13.35-20 10.27 10.27 0 0 1 2.82 2.83c1 1.51 1.61 3.25 2.78 4.63 2.19 2.58 5.92 3.42 9.31 3.26s6.66-1.11 10-1.42c.47-.05.94-.08 1.42-.09A14 14 0 0 1 930 564.41zM895.93 587.09a14 14 0 0 1-13.47-19.76 11 11 0 0 1 3 2.85c1.09 1.54 1.77 3.31 3 4.73 2.37 2.64 6.35 3.56 9.93 3.48s6.83-.93 10.28-1.19a14.05 14.05 0 0 1-12.74 9.89zM902.86 614.33a14.017 14.017 0 0 1-25.59-11.45 14.09 14.09 0 0 1 3.08 2.75c1.34 1.63 2.22 3.47 3.76 5 2.87 2.81 7.5 4 11.63 4.08a60 60 0 0 0 7.12-.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M867.81 635.03s11.08-.35 14.42-2.72 17-5.22 17.86-1.41 16.65 19 4.14 19.07-29-2-32.39-4-4.03-10.94-4.03-10.94z",
    fill: "#656380"
  }), React.createElement("path", {
    d: "M904.46 648.61c-12.51.1-29.06-1.95-32.39-4-2.54-1.54-3.55-7.09-3.89-9.65h-.37s.7 8.93 4 11 19.89 4.08 32.39 4c3.61 0 4.86-1.32 4.79-3.22-.47 1.16-1.8 1.87-4.53 1.87z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M610.98 519.96c0 16.7 8.56 17.68 22.83 30.23s22.82-13.53 22.82-30.23-10.22-30.24-22.82-30.24-22.83 13.54-22.83 30.24z",
    fill: "#915766"
  }), React.createElement("path", {
    d: "M465.31 369.92c-1.35 3.27.52 7.13 3.31 9.29s6.32 3.09 9.67 4.21c15 5 28.42 15.44 35.84 29.42s8.41 31.53 1.38 45.72c-3.75 7.57-9.56 14-13 21.69-6.92 15.3-3.41 34.07 6.53 47.61s29.41 16.15 45.66 20.35c0 0 42 33 57 24",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M501.66 628.21s-2 17 7 18a115.81 115.81 0 0 0 13.2.43 14.41 14.41 0 0 0 12.07-22l-.27-.42c-9-14.01-32 3.99-32 3.99z",
    fill: "#915766"
  }), React.createElement("path", {
    d: "M506.66 614.21s22 29 55 3-7-38-7-38h-42l-25 11z",
    fill: "#b56d7e"
  }), React.createElement("path", {
    d: "M596.66 590.21s10 12 19 11c7.22-.8 21.52 6.12 19.15 18.7a14.22 14.22 0 0 1-16.62 11.48 11.39 11.39 0 0 1-8.53-7.18s-32 2-31-7 18-27 18-27z",
    fill: "#915766"
  }), React.createElement("path", {
    d: "M514.19 595.71s13 20 0 33-27 15-27 15 5 9-14 8-25-7-19-16 21-19 18-26-7-22-1-31a33.08 33.08 0 0 1-6.3-6.94c-5.31-8.08 5.32-17.18 12.67-10.89l5.63 4.83s17-14 54-7c0 0 15-1 18-12 0 0-16-35 26-61a50.28 50.28 0 0 1 24-4c14 1 29 2 39 24 0 0 8.17 15 17.77 20.78a21.15 21.15 0 0 1 9.73 14.74c2.89 17.23-.77 44.63-59.5 30.48 0 0-4.5 36.5-32.5 51.5 0 0-2 10 0 13s12 17-4 16c-8-.49-14.17-.5-18.42-.37a10 10 0 0 1-8.75-15.36c.05-.09.11-.18.17-.27s3-14-7-25l-2-12z",
    fill: "#9c5e6d"
  }), React.createElement("ellipse", {
    cx: 655.16,
    cy: 537.72,
    rx: 13,
    ry: 5,
    fill: "#915766"
  }), React.createElement("path", {
    d: "M313.09 555.09a49 49 0 0 1-9.31 4c-5.78 1.58-12 1-17.81 2.35-2.39.55-5 1.71-5.75 4-.56 1.71 0 3.56.63 5.27 6.45 18.92 10.34 39 20.64 56.17a84.93 84.93 0 0 0 15.94 19.34c2.34 2.11 5 4.18 8.12 4.51a8.26 8.26 0 0 0 8.4-11.6c-.93-2-2.64-3.64-3.75-5.6-1.36-2.4-1.73-5.22-2.07-8-1-8.09-2-16.55.81-24.22 1.88-5.14 5.33-9.52 8.2-14.17s5.27-10 4.63-15.43c-.44-3.71-2.25-7.1-4.16-10.31s-5.7-11.86-9.55-12.93-11.48 4.83-14.97 6.62zM418.37 620.47a16.14 16.14 0 0 1-.75 5.41c-1.21 3.18-4.2 5.36-5.74 8.39-2.15 4.21-1.17 9.31.25 13.82.89 2.83 2.06 5.77 4.45 7.52 1.94 1.41 4.41 1.84 6.78 2.17 20.55 2.84 41.41 1.21 62.14 1.81 3.78.11 7.78.24 11.08-1.61s5.34-6.49 3.09-9.53c-2-2.73-6-2.7-9.38-2.87a38.57 38.57 0 0 1-23.82-9.81 17 17 0 0 1-3.34-3.84 23.08 23.08 0 0 1-1.75-4 179.23 179.23 0 0 0-10.35-22.91c-1.11-2.07-2.37-4.22-4.45-5.33a11.8 11.8 0 0 0-4.82-1.05c-5.17-.34-18.55-2.1-22.54 1.92-3.69 3.7-.77 15.2-.85 19.91z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 450.16,
    cy: 128.72,
    r: 33,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M420.36 155.96c-2 5.26-5.29 10.19-10.13 13l45.64 9.31a48.17 48.17 0 0 1-.64-20.35 11.88 11.88 0 0 0 .27-5c-.86-3.31-4.59-4.91-7.92-5.67-8.33-1.9-15.7-2.92-23.44-6.59-2.36 4.05-2.03 10.63-3.78 15.3z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M409.84 156.61a35.72 35.72 0 0 1 31.11.82c5.85 3.08 10.7 7.74 15.46 12.33 4.39 4.23 9.07 9.08 9.38 15.17.15 2.95-.77 5.83-1.24 8.75a29.35 29.35 0 0 0 15.7 30.14c3.62 6 4.37 13.36 4.43 20.41.21 26.69-8.21 53.71-2.2 79.72 1.41 6.1 3.6 12 4.82 18.16 1.58 8 1.5 16.15 2.33 24.23a108.41 108.41 0 0 0 5.82 25.62c-2 3.16-6.12 4.37-9.84 4.11s-7.21-1.87-10.53-3.57c-16.08-8.23-30.82-19.08-47.48-26.08-11-4.63-22.76-7.51-33.45-12.86s-20.64-13.83-23.91-25.32c-1.41-5-1.5-10.21-1.58-15.38-.32-21.77-.62-43.78 4.12-65 4.17-18.74 12.23-36.66 14-55.78.57-6.23.58-12.89 4.06-18.08 4.9-7.39 15.51-9.26 19-17.39z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M431.39 129.18c1.95-2.54 5.7-2.88 8.81-2.13s6 2.35 9.1 3a5.36 5.36 0 0 0 4.27-.6c1.21-.93 1.58-2.56 1.84-4.07a77.63 77.63 0 0 0 .76-19.79 5.91 5.91 0 0 1 .18-2.78c.78-1.87 3.15-2.32 5.08-2.92a15.16 15.16 0 0 0 10.27-15.52 6.13 6.13 0 0 0-1.89-4.26c-1.34-1.09-3.21-1.16-4.94-1.18q-13.3-.1-26.61 0c-3.28 0-6.73.11-9.58 1.75-2.1 1.21-3.67 3.15-5.56 4.68-4.92 4-11.59 4.78-17.58 6.82a17.44 17.44 0 0 0-7.71 4.6c-2 2.28-2.95 5.66-1.7 8.42a30.69 30.69 0 0 0 2.15 3.31c3.54 5.65 1.18 13 1.71 19.63.66 8.3 12.94 21.77 21.27 23.73 13.45 3.14 5.68-17.26 10.13-22.69zM412.76 493.12c.85 6.06 1.94 12.15 1.65 18.26-.41 8.53-3.48 16.76-4.05 25.28-.43 6.37.56 12.81-.33 19.13-.57 4-1.88 7.94-2.7 12a49.42 49.42 0 0 0 7.94 37.82 6.17 6.17 0 0 0 2.3 2.24 6.58 6.58 0 0 0 2.86.38 205.6 205.6 0 0 0 28.67-2.62 2 2 0 0 0 2.24-1.9c1.76-9-2.25-18.1-3.27-27.25-1.09-9.77 1.25-19.56 3.58-29.12a128.41 128.41 0 0 1 3.95-13.92c1.12-3.08 2.48-6.06 3.46-9.19a70 70 0 0 0 2.51-15q1-12 1.07-24.15c0-7.64-.22-15.33-1.89-22.79-2.14-9.49-6.52-18.31-10.87-27-2.35.37-4.4 1.74-6.39 3a143.79 143.79 0 0 1-17.49 9.66c-4.06 1.88-12 3.22-14.56 7.16s-.9 11.78-.71 16.06c.34 7.35 1.02 14.68 2.03 21.95z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M412.76 493.12c.85 6.06 1.94 12.15 1.65 18.26-.41 8.53-3.48 16.76-4.05 25.28-.43 6.37.56 12.81-.33 19.13-.57 4-1.88 7.94-2.7 12a49.42 49.42 0 0 0 7.94 37.82 6.17 6.17 0 0 0 2.3 2.24 6.58 6.58 0 0 0 2.86.38 205.6 205.6 0 0 0 28.67-2.62 2 2 0 0 0 2.24-1.9c1.76-9-2.25-18.1-3.27-27.25-1.09-9.77 1.25-19.56 3.58-29.12a128.41 128.41 0 0 1 3.95-13.92c1.12-3.08 2.48-6.06 3.46-9.19a70 70 0 0 0 2.51-15q1-12 1.07-24.15c0-7.64-.22-15.33-1.89-22.79-2.14-9.49-6.52-18.31-10.87-27-2.35.37-4.4 1.74-6.39 3a143.79 143.79 0 0 1-17.49 9.66c-4.06 1.88-12 3.22-14.56 7.16s-.9 11.78-.71 16.06c.34 7.35 1.02 14.68 2.03 21.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M368.19 363.67c-4.38 11.8 2.06 24.55 7.66 35.82 13.74 27.77 23.34 57.41 32.84 86.92.71 2.21 1.43 4.62.63 6.8a8.84 8.84 0 0 1-3.21 3.81c-6.57 5-14.93 6.77-22.75 9.38a103.05 103.05 0 0 0-21.58 10.11c-5.66 3.51-11 7.57-16.27 11.62l-16.87 12.88a11.1 11.1 0 0 0-2.82 2.73c-1.63 2.55-1 5.88-.15 8.8a149 149 0 0 0 8.26 22.54c.7 1.53 1.52 3.13 3 3.93 2.64 1.41 5.86-.46 7.87-2.68s3.75-5 6.58-5.91 5.95.2 8.9-.21c4.79-.68 8-5.08 11.41-8.46 14.08-13.82 37.59-12.82 53.09-25 2.36-1.86 4.51-4 7.09-5.55s5.59-2.39 8.31-3.76c8.26-4.16 13.46-12.77 16.24-21.59s3.58-18.14 5.58-27.18c1-4.67 2.39-9.29 2.85-14a75.68 75.68 0 0 0-.28-13.29l-5.59-69.15c-.46-5.63-.91-11.26-1.8-16.84-16.6.59-33.19 1.26-49.8 1.46-13.19.07-26.69 1-39.19-3.18z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M362.05 379.84c2.25 3.63 7.73 3.55 11.5 1.57s6.71-5.33 10.49-7.29c5.09-2.65 11.1-2.55 16.83-2.39 9.07.26 18.25.53 27 3 9 2.57 17.81 7.52 27.15 6.53 1.62-.17 3.4-.64 4.28-2a6.46 6.46 0 0 0 .71-3.23l.3-8.16a7.38 7.38 0 0 0-.65-4.12 6.89 6.89 0 0 0-3.09-2.37c-13.29-6.43-28.43-7.63-43.18-8.14q-11.25-.37-22.51-.31c-6.36 0-14-.88-20.2.82-8.33 2.29-12.85 19.32-8.63 26.09z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M445.46 166.3c-17.41-.15-33.18-11.64-50.58-11.92a13.26 13.26 0 0 0-6.15 1.06c-2.42 1.22-4 3.58-5.86 5.58-5.14 5.57-12.6 8.55-17.88 14-5 5.1-7.72 12.69-5.76 19.53s9.34 12.08 16.26 10.44a41.9 41.9 0 0 1 16.33-22.18 82 82 0 0 1 12.76-6.7c7.83-3.55 16.57-7.16 24.74-4.5a34.81 34.81 0 0 1 8.44 4.6l13.61 9.14c-1.58-6.26-3.01-13.28-5.91-19.05z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M373.49 198.93c-2.31 2.88 1 7.06.51 10.72-.34 2.43-2.34 4.29-3.18 6.6s-.4 5-.73 7.56a32.76 32.76 0 0 1-1.45 5.39 96.84 96.84 0 0 0-3.06 16l-3.05 22.76a85.3 85.3 0 0 0-1 10.33c0 2.59.16 5.23-.52 7.73s-2.16 4.67-3.17 7-1.47 5.24-.11 7.43c-4.55 3.78-5.9 11.22-2.72 16.21a8.88 8.88 0 0 1 1.4 2.58 6.58 6.58 0 0 1-.62 3.8l-3.08 8.21c-.79 2.1-1 5.3 1.16 5.78a19.29 19.29 0 0 0-4.16 6.57 7.8 7.8 0 0 0 1.11 7.41 9.75 9.75 0 0 1 1.93 2.34c.47 1.16.06 2.47-.23 3.69a13.55 13.55 0 0 0 1.68 10.63 9.52 9.52 0 0 0 9.59 4.11c6.16-1.39 11.7-3.58 17.91-2.44 13.38 2.45 26.8 4.92 39.76 9.06 14.78 4.72 29.1 11.64 44.56 13.09a4.28 4.28 0 0 0 3-.46 4.49 4.49 0 0 0 1.38-2.83l4.79-22.39a229.77 229.77 0 0 0 4.39-25.09c.55-5.44.7-10.92.86-16.39l1.23-43.54a43.36 43.36 0 0 0-2.48-18.93l-7.08-22.6c-4-12.9-13.31-24.34-16.61-37.45-2.09-8.3-3.63-17.2-9.24-23.67-8-9.22-21.8-10.65-33.89-9.07-5.47.72-11 2-15.7 4.79-5.47 3.27-9.49 8.43-13.39 13.48-3.24 4.15-6.51 7.49-9.79 11.59z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M401.73 327c1 4.3 3.09 8.26 4.37 12.48 2.14 7.07 2 14.69 4.1 21.76.9 3 2.21 5.82 2.85 8.85 1.51 7.08-.69 14.39-3.42 21.09s-6.05 13.3-6.94 20.48c-.62 5.05.28 10.76 4.17 14 4.05 3.41 9.92 3.18 15.19 2.72a16.14 16.14 0 0 0 5.52-1.14c4-1.91 5.72-6.68 6.67-11 3.15-14.6 2.25-29.73 1.33-44.64l-2.38-38.99c-.46-7.5-1-15.16-3.27-22.37-.84-2.62-2.3-7.92-4.7-9.6s-9.14-1.73-12.08-1.87c-13.8-.64-13.64 18.59-11.41 28.23z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M416.99 183.04c-2.81-1.47-6.35-.84-9.07.81s-4.79 4.14-6.81 6.6c-6.08 7.42-12.51 15.94-11.61 25.49.34 3.58 1.71 7 2.64 10.45 4.07 15.23-.43 31.35.08 47.12.3 9.11 2.28 18.07 4.26 27 .4 1.81 1 3.91 2.8 4.53 1.32.45 2.75-.14 4-.63a32.32 32.32 0 0 1 29.57 3.72c3.27-1.74 2-7.24 1.31-10.87-2.17-10.77.78-21.88 4.36-32.27s7.87-20.76 8.47-31.73c.67-12.44-3.45-24.57-7.52-36.34-.89-2.57-1.86-5.26-3.92-7a15.6 15.6 0 0 0-5.92-2.7c-4.27-1.35-8.65-2.09-12.64-4.18z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M554.66 548.21s30 33 57 24",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M590.98 519.96c0 16.7-8.55 17.68-22.82 30.23s-22.82-13.53-22.82-30.23 10.22-30.24 22.82-30.24 22.82 13.54 22.82 30.24z",
    fill: "#915766"
  }), React.createElement("path", {
    d: "M87.19 535.42a24.69 24.69 0 0 0 3.27-12.54c0-11.33-7-20.51-15.68-20.51s-15.67 9.18-15.67 20.51a24.69 24.69 0 0 0 3.27 12.54 25.68 25.68 0 0 0 0 25.08 25.68 25.68 0 0 0 0 25.08 25.68 25.68 0 0 0 0 25.08 24.72 24.72 0 0 0-3.27 12.54c0 11.33 7 20.52 15.67 20.52s15.68-9.19 15.68-20.52a24.72 24.72 0 0 0-3.27-12.54 25.68 25.68 0 0 0 0-25.05 25.68 25.68 0 0 0 0-25.08 25.68 25.68 0 0 0 0-25.08z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 74.74,
    cy: 497.81,
    rx: 15.67,
    ry: 20.52,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 74.74,
    cy: 472.73,
    rx: 15.67,
    ry: 20.52,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M16.07 301.11a76.34 76.34 0 0 1-5.84-8.59l41.19-6.77-44.55.33a75.22 75.22 0 0 1-1.43-59.47l59.75 31-55.1-40.53a75.08 75.08 0 1 1 124 84 74.34 74.34 0 0 1 8.56 13.69l-53.46 27.84 57-19.13a75.14 75.14 0 0 1-12.11 70.51 75.08 75.08 0 1 1-118 0 75.08 75.08 0 0 1 0-92.84z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M150.19 347.53a74.8 74.8 0 0 1-16.07 46.42 75.08 75.08 0 1 1-118 0c-10.11-12.78 134.07-54.85 134.07-46.42z",
    opacity: 0.1
  }));
};

UndrawDogWalking.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDogWalking;