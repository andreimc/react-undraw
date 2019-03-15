function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChoose = _props => {
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
    viewBox: "0 0 567 785.72",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 378.18,
    y1: 511.24,
    x2: 697.95,
    y2: 511.24,
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
  }))), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M528.76 115.47l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01zM146.81 0v75.5l324.35 97.77 3.34-74.2L146.81 0z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M528.76 115.47l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M528.76 257.59l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M146.81 142.12v75.5l324.35 97.77 3.34-74.2-327.69-99.07z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M528.76 257.59l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 7,
    d: "M488.29 283.75l8.88 13.32 17.77-22.21"
  }), React.createElement("g", {
    opacity: 0.4,
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 7
  }, React.createElement("path", {
    d: "M488.78 128.3l17.77 31.09M510.99 132.74l-22.21 22.21"
  })), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M528.76 390.83l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M146.81 275.36v75.5l324.35 97.77 3.34-74.2-327.69-99.07z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M528.76 390.83l-54.26-16.4-3.34 74.2 57.1 17.21.5-75.01z"
  }), React.createElement("g", {
    opacity: 0.4,
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 7
  }, React.createElement("path", {
    d: "M488.78 403.66l17.77 31.09M510.99 408.1l-22.21 22.21"
  })), React.createElement("ellipse", {
    cx: 371.09,
    cy: 243.78,
    rx: 11.1,
    ry: 22.21,
    opacity: 0.3
  }), React.createElement("ellipse", {
    cx: 371.09,
    cy: 243.78,
    rx: 93.27,
    ry: 186.53,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 371.09,
    cy: 243.78,
    rx: 51.07,
    ry: 102.15,
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M697.44 306.14c-4.56-13.68-31.67 4.81-31.67 4.81l-2.23 3-48.19 65.14-118.07-66v-29.51a41 41 0 0 0 35.89-47.73c5.94-2.29 10.78-7.23 15.24-12 4.11-4.37 8.51-9.67 8.09-15.49a10.77 10.77 0 0 0-.16-2.78c-.94-4.91-5.38-8.49-10.08-10.2s-9.78-2-14.69-3c-11.7-2.29-22.27-8.4-33.68-11.86a76.62 76.62 0 0 0-15.91-3c-3.87-.32-7.9-.32-11.44 1.27-3.88 1.75-6.69 5.17-9.81 8.08a44.64 44.64 0 0 1-12.86 8.37c-7.07 3-15 4.23-21.37 8.47a12.61 12.61 0 0 0-4.31 4.32 11.74 11.74 0 0 0-1.15 6.14 30.79 30.79 0 0 0 .42 5.56c1.12 7.84 2.41 15.87 6.38 22.72 3.24 5.6 8.09 10.06 12.85 14.44l10.71 9.82c2.17 2 4.57 4.46 7.37 5.45-.18-1.3.56-2.67 1.66-4l-3.47 24.26a70.26 70.26 0 0 0-19.96-3.15c-9.12-.11-18.35 1.54-22.34 7.75a8.62 8.62 0 0 0-.61 1.18c-12.57 14.92-41.38 63.24-24.44 180.6a5006.96 5006.96 0 0 0-2.32 23.45l.1 1.44-.1 1.09.2.16 9.43 129.57-18.24 127.7h4.05v14.19h-4.56v22.8s63.34-4.05 73-18.24c8-11.77-31.82-7.15-45.61-5.23V767h.25v-4.81h4.81l18.24-86.65C447.61 643.13 438 562 438 562l22.8 13.68L479 671l-13.66 141.38h4.05v9.88h-5.32v22.8s63.34-4.05 73-18.24c8-11.77-31.8-7.15-45.59-5.23l-1.53-9.21h2.79L511 684.68c9-34.6-3.27-136.12-4.89-149.12l22.58-149.36-.32-.43.32-2.11 91.21 31.94s9.12 9.12 18.5-18c8.76-25.34 32.79-59.31 35.9-63.64l.33-.46s27.37-13.68 22.81-27.36z",
    transform: "translate(-316 -59.35)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#fda57d",
    d: "M70.81 691.85v22.2h22.21v-31.08l-22.21 8.88zM155.2 736.26v26.65l22.2-4.44-4.44-26.65-17.76 4.44z"
  }), React.createElement("path", {
    d: "M106.59 239.08s-53 39.72-26.89 195.17z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M106.59 239.08s-53 39.72-26.89 195.17zM175.43 749.83l-2.22-13.32-17.77 4.44v8.88h19.99zM71.06 700.98h22.21v-13.33l-22.21 8.89v4.44z",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#fda57d",
    d: "M146.81 212.69l-4.44 31.09 39.97 22.2v-44.41l-35.53-8.88z"
  }), React.createElement("path", {
    d: "M66.87 696.29l17.77-124.36-9.38-128.8 115.47 31.09s14.27 110.54 4.93 146.56L177.9 745.14h-26.65l13.32-137.68-17.76-92.81-22.21-13.29s9.38 79-8.88 110.54L98 696.29z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M377.26 252.16c-4.44-13.32-30.84 4.69-30.84 4.69l-2.17 2.94 10.48 19.47.33-.45s26.64-13.33 22.2-26.65z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M146.31 241.3s-35.53-9.38-44.41 4.44-26.65 199.91-26.65 199.91 52.8 44.41 115.47 31.09l22.21-146.56z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M297.32 323.22l-140.38-78.44a70.08 70.08 0 0 0-33.29-9c-8.88-.11-17.87 1.5-21.75 7.54-8.88 13.82-26.65 199.86-26.65 199.86s52.8 44.41 115.47 31.09l22.21-146.62 88.83 31.09s8.88 8.88 18-17.52c8.53-24.68 31.93-57.75 35-62l-10.48-19.47z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M146.21 219.58a39.89 39.89 0 0 0 31.44 15.3 40.37 40.37 0 0 0 4.44-.25V226l-35.53-8.88z",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 177.9,
    cy: 190.48,
    r: 39.97,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M66.37 710.1v22.21s61.68-3.95 71.06-17.77-48.85-4.44-48.85-4.44zM150 754.76v22.21s61.68-3.95 71.06-17.77-48.85-4.44-48.85-4.44z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M152.55 208.8l15.62-22.35c2.31-3.31 4.68-6.68 7.92-9.1s7.54-3.77 11.38-2.53c2.32.75 4.25 2.35 6.22 3.78 5.83 4.24 13 7.39 20.13 6.11 7.43-1.34 13.14-7.14 18.31-12.64 4.29-4.56 8.9-10.16 7.72-16.31-.92-4.78-5.24-8.26-9.82-9.93s-9.52-1.94-14.3-2.88c-11.39-2.23-21.69-8.18-32.8-11.55a74.61 74.61 0 0 0-15.5-3c-3.77-.31-7.7-.31-11.14 1.24-3.78 1.7-6.52 5-9.55 7.87a43.47 43.47 0 0 1-12.52 8.14c-6.88 2.94-14.57 4.12-20.81 8.25a12.28 12.28 0 0 0-4.19 4.21c-1.6 3-1.19 6.58-.71 9.92 1.09 7.63 2.34 15.45 6.21 22.12 3.16 5.45 7.87 9.8 12.52 14.06l10.43 9.57c2.11 1.94 4.45 4.34 7.18 5.31-.49-3.44 5.73-7.44 7.7-10.29z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M152.55 207.32l15.62-22.35c2.31-3.31 4.68-6.68 7.92-9.1s7.54-3.77 11.38-2.53c2.32.75 4.25 2.35 6.22 3.78 5.83 4.24 13 7.39 20.13 6.11 7.43-1.34 13.14-7.14 18.31-12.64 4.29-4.56 8.9-10.16 7.72-16.31-.92-4.78-5.24-8.26-9.82-9.93s-9.52-1.94-14.3-2.88c-11.39-2.23-21.69-8.18-32.8-11.55a74.61 74.61 0 0 0-15.5-3c-3.77-.31-7.7-.31-11.14 1.24-3.78 1.7-6.52 5-9.55 7.87a43.47 43.47 0 0 1-12.52 8.15c-6.88 2.94-14.57 4.12-20.81 8.25a12.28 12.28 0 0 0-4.19 4.21c-1.6 3-1.19 6.58-.71 9.92 1.09 7.63 2.34 15.45 6.21 22.12 3.16 5.45 7.87 9.8 12.52 14.06l10.43 9.57c2.11 1.94 4.45 4.34 7.18 5.31-.49-3.44 5.73-7.49 7.7-10.3z",
    fill: "#333"
  }), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M3.45 110.29h1.48v8.39H3.45z"
  }), React.createElement("path", {
    d: "M8.39 113.74v1.48H0v-1.48z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M528.45 519.29h1.48v8.39h-1.48z"
  }), React.createElement("path", {
    d: "M533.39 522.74v1.48H525v-1.48z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M491.99 341.24h1.48v8.39h-1.48z"
  }), React.createElement("path", {
    d: "M496.93 344.69v1.48h-8.39v-1.48z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M428.83 511.98h1.48v8.39h-1.48z"
  }), React.createElement("path", {
    d: "M433.77 515.43v1.48h-8.39v-1.48z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M384.42 619.06h1.48v8.39h-1.48z"
  }), React.createElement("path", {
    d: "M389.35 622.52V624h-8.39v-1.48z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M66.62 240.07h1.48v8.39h-1.48z"
  }), React.createElement("path", {
    d: "M71.55 243.53v1.48h-8.39v-1.48z"
  })), React.createElement("path", {
    d: "M89.66 109.45a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM422.85 35.26a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM13.27 299.27a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1zM26.59 485.8a1.81 1.81 0 0 1-1-2.19.87.87 0 0 0 0-.2.91.91 0 0 0-1.63-.6.87.87 0 0 0-.1.18 1.81 1.81 0 0 1-2.19 1h-.2a.91.91 0 0 0-.6 1.63.87.87 0 0 0 .18.1 1.81 1.81 0 0 1 1 2.19.87.87 0 0 0 0 .2.91.91 0 0 0 1.63.6.87.87 0 0 0 .1-.18 1.81 1.81 0 0 1 2.19-1h.2a.91.91 0 0 0 .6-1.63.87.87 0 0 0-.18-.1z",
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 248.71,
    cy: 134.47,
    r: 2.96,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 328.65,
    cy: 520.86,
    r: 2.96,
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 510.74,
    cy: 214.41,
    r: 2.96,
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 564.04,
    cy: 347.65,
    r: 2.96,
    fill: "#47e6b1",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 365.66,
    cy: 11.6,
    r: 2.96,
    fill: "#f55f44",
    opacity: 0.5
  }));
};

UndrawChoose.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChoose;