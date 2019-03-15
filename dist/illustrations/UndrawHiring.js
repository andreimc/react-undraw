function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawHiring = _props => {
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
    viewBox: "0 0 874.47 747.94",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 769.97,
    y1: 1002.12,
    x2: 769.97,
    y2: 454.75,
    gradientTransform: "rotate(90 961.385 567.605)",
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
    x1: 683.95,
    y1: 639.26,
    x2: 683.95,
    y2: 526.2,
    gradientTransform: "rotate(8.58 3132.77 755.811)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 475.23,
    y1: 384.44,
    x2: 475.23,
    y2: -162.93,
    gradientTransform: "translate(-72.73 343.57)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 393.32,
    y1: 20.38,
    x2: 393.32,
    y2: -95.86,
    gradientTransform: "rotate(-9.31 2548.498 729.095)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 480.71,
    y1: 712.84,
    x2: 480.71,
    y2: 165.47,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: -513.22,
    y1: 427.6,
    x2: -513.22,
    y2: 308.75,
    gradientTransform: "matrix(-1 0 0 1 48 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 652.07,
    y1: 747.94,
    x2: 652.07,
    y2: 579.17,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    transform: "rotate(-81.42 675.036 432.75)",
    fill: "url(#prefix__a)",
    d: "M526.87 178.11h547.37v396.16H526.87z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M407.334 534.045L487.19 4.765l381.759 57.6-79.857 529.28z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M503.394 241.968l275.532 41.572-2.52 16.701-275.532-41.572zM497.096 283.711l275.531 41.572-2.52 16.701-275.53-41.572zM657.133 128.53l141.944 21.415-2.52 16.701-141.944-21.416z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M663.363 172.172L780.26 189.81l-2.52 16.7-116.897-17.637z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M490.792 325.46l242.139 36.534-2.52 16.701-242.14-36.533zM484.487 367.21l208.738 31.494-2.52 16.701-208.738-31.494zM478.19 408.956l183.69 27.716-2.52 16.7-183.69-27.715zM471.892 450.705l233.784 35.273-2.52 16.701-233.784-35.273z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M465.6 492.449l91.841 13.857-2.52 16.7-91.84-13.856z"
  }), React.createElement("path", {
    d: "M793 227.53a56.36 56.36 0 1 0-93.8 33.16v.25a19.29 19.29 0 0 0 5.71 5l.11-.24c2.27 2.63 12.72 7.87 25.35 9.74h.28c8 1.22 16.89 1.11 25.14-1.87 0 0 .09-.14.24-.4a20.08 20.08 0 0 0 5.8-2.81l.18-.62A56.3 56.3 0 0 0 793 227.53z",
    transform: "translate(-162.77 -76.03)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 736.97,
    cy: 217.05,
    r: 54.67,
    transform: "rotate(-81.42 611.44 273.601)",
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M549.33 159.05s-13-.89-13.17 23.09a18.71 18.71 0 0 0 5.54 4.83l10.94-23.43zM591.13 165.36s12.72 3 5.78 25.95a18.71 18.71 0 0 1-6.72 3l-3.55-25.61z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M555.69 120.69s-8.82 16.91-11.91 14.73c0 0 28.06 32.73 60.75 9.16a85.9 85.9 0 0 0-9.82-18z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 739.39,
    cy: 198.16,
    r: 24.23,
    transform: "rotate(-81.42 613.867 254.714)",
    fill: "#333"
  }), React.createElement("path", {
    d: "M590.88 165.32l-41.8-6.3-6.42 16.13s-3.46 7.39-1.12 11.23 27.79 15.59 49 8a22.05 22.05 0 0 0 2.66-13.85c-1.05-8.14-.47-.64-.47-.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M591.44 165.41l-41.8-6.3-6.41 16.12s-3.46 7.39-1.12 11.23 27.79 15.59 49 8a22.05 22.05 0 0 0 2.66-13.85c-1.05-8.14-.47-.64-.47-.64z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M591.13 165.36l-41.8-6.3-6.42 16.13s-3.46 7.39-1.12 11.23 27.79 15.59 49 8a22.05 22.05 0 0 0 2.66-13.85c-1.05-8.14-.47-.64-.47-.64z",
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M564.231 147.165l16.72 2.522-2.276 15.09a6.73 6.73 0 0 1-7.658 5.65l-3.422-.516a6.73 6.73 0 0 1-5.65-7.659l2.276-15.089.01.002z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M564.313 146.545l16.72 2.523-2.276 15.089a6.73 6.73 0 0 1-7.659 5.65l-3.411-.514a6.73 6.73 0 0 1-5.651-7.659l2.277-15.09z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M564 148.91a24.33 24.33 0 0 0 16.71 2.57l.31-2.05-16.72-2.52z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 738.61,
    cy: 203.36,
    r: 24.23,
    transform: "rotate(-81.42 613.083 259.916)",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M554.3 114.78l45.7 6.89s-1.12-19-18.57-20.47-27.13 13.58-27.13 13.58z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 715.3,
    cy: 198.8,
    rx: 4.23,
    ry: 2.25,
    transform: "rotate(-81.42 589.763 255.354)",
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 762.11,
    cy: 205.86,
    rx: 4.23,
    ry: 2.25,
    transform: "rotate(-81.42 636.58 262.415)",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M554.23 115.4l45.7 6.89s-1.12-19-18.57-20.47-27.13 13.58-27.13 13.58z",
    opacity: 0.1
  }), React.createElement("path", {
    transform: "matrix(.99 -.16 .16 .99 -230.95 -4.95)",
    fill: "url(#prefix__c)",
    d: "M204.42 180.64h396.16v547.37H204.42z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M5.635 143.413L386.63 80.955l86.593 528.219L92.23 671.632z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M93.989 364.122l274.98-45.079 2.732 16.667-274.98 45.08zM100.819 405.788l274.98-45.079 2.732 16.668-274.98 45.079zM205.463 208.943l141.659-23.223 2.732 16.668-141.659 23.223z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M224.785 248.561l116.663-19.125 2.733 16.668-116.663 19.125z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M107.649 447.453l241.654-39.616 2.732 16.668-241.654 39.615zM114.477 489.108l208.32-34.151 2.732 16.667-208.32 34.151zM121.308 530.78l183.323-30.054 2.732 16.668-183.323 30.053zM128.138 572.435l233.316-38.25 2.732 16.668-233.315 38.249z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M134.975 614.104l91.657-15.026 2.732 16.668-91.656 15.026z"
  }), React.createElement("path", {
    d: "M354.81 311.49a57.94 57.94 0 1 0-81.3 62.06l.08.25a19.83 19.83 0 0 0 7.16 3.06v-.27c3.05 1.86 14.93 3.69 27.88 1.53h.28c8.21-1.33 16.87-4.25 24-9.77 0 0 0-.16.1-.46a20.64 20.64 0 0 0 4.79-4.58v-.66a57.88 57.88 0 0 0 17.01-51.16z",
    transform: "translate(-162.77 -76.03)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 297.63,
    cy: 320.86,
    r: 56.2,
    transform: "rotate(-9.31 -250.72 1282.25)",
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M114.42 270.45s-13 3.25-5.6 26.75a19.24 19.24 0 0 0 6.95 3l3.31-26.38zM157.3 263.42s13.39-1.09 13.84 23.57a19.24 19.24 0 0 1-5.63 5l-11.56-23.94z",
    fill: "#4d8af0"
  }), React.createElement("circle", {
    cx: 292.23,
    cy: 301.74,
    r: 24.91,
    transform: "rotate(-9.31 -256.087 1263.145)",
    fill: "#333"
  }), React.createElement("path", {
    d: "M157.05 263.46l-42.88 7-1.19 17.81s-1 8.33 2.45 11.34 32.12 6.48 50.41-7.68a22.67 22.67 0 0 0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M157.62 263.37l-42.88 7-1.19 17.81s-1 8.33 2.45 11.34 32.12 6.48 50.41-7.68a22.67 22.67 0 0 0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M157.3 263.42l-42.88 7-1.19 17.84s-1 8.33 2.45 11.34 32.12 6.48 50.41-7.68a22.67 22.67 0 0 0-1.77-14.39c-3.6-7.63-.67-.48-.67-.48z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M125.254 254.053l17.15-2.812 2.568 15.66a6.73 6.73 0 0 1-5.553 7.73l-3.878.637a6.73 6.73 0 0 1-7.73-5.553l-2.567-15.66.01-.002z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M125.151 253.417l17.151-2.812 2.568 15.661a6.73 6.73 0 0 1-5.553 7.73l-3.878.636a6.73 6.73 0 0 1-7.73-5.552l-2.568-15.661.01-.002z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M125.57 255.89a25 25 0 0 0 17.16-2.76l-.35-2.11-17.15 2.82z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 293.11,
    cy: 307.08,
    r: 24.91,
    transform: "rotate(-9.31 -255.223 1268.47)",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M105.41 226.19l46.89-7.68s-7.11-18.28-24.63-14.16-22.26 21.84-22.26 21.84z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M105.3 225.56l46.93-7.69s-7.11-18.28-24.63-14.16-22.3 21.85-22.3 21.85z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 268.86,
    cy: 309.97,
    rx: 2.32,
    ry: 4.35,
    transform: "matrix(.99 -.16 .16 .99 -209.36 -28.46)",
    fill: "#fda57d"
  }), React.createElement("ellipse", {
    cx: 316.89,
    cy: 302.1,
    rx: 2.32,
    ry: 4.35,
    transform: "rotate(-9.31 -231.456 1263.544)",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M282.63 165.47h396.16v547.37H282.63z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#fff",
    d: "M287.67 169.5h386.08v535.27H287.67z"
  }), React.createElement("path", {
    d: "M502 368a59.24 59.24 0 1 1 92.29 49.17v.26a20.28 20.28 0 0 1-6.72 4.28l-.08-.26c-2.77 2.38-14.45 6.19-27.87 6.15h-.29c-8.5 0-17.72-1.5-25.84-5.89 0 0-.07-.16-.18-.45a21.1 21.1 0 0 1-5.59-3.83l-.09-.67A59.18 59.18 0 0 1 502 368z",
    transform: "translate(-162.77 -76.03)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 398.46,
    cy: 291.97,
    r: 57.46,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M375.92 313.86s-13.69 1.11-10.07 26.11a19.67 19.67 0 0 0 6.52 4.15l7.7-26.07zM420.35 313.86s13.69 1.11 10.07 26.11a19.67 19.67 0 0 1-6.52 4.15l-7.67-26.15z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M376.51 272.97s-1.05 3.07-2.55 6.62c-3.26 7.76.46 37.58 8.26 40.76 8.75 3.57 20.26 5.85 32.21 1.49 10.39-3.79 13.59-37.73 6.25-46-.86-1-1.76-1.93-2.7-2.87z",
    fill: "#333"
  }), React.createElement("circle", {
    cx: 398.5,
    cy: 271.2,
    r: 25.47,
    fill: "#333"
  }), React.createElement("path", {
    d: "M420.09 313.86h-44.43l-4.15 17.77s-2.44 8.23.59 11.85 31.33 11.85 52.13.59a23.18 23.18 0 0 0 .59-14.81c-2.37-8.29-.59-.59-.59-.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M420.68 313.86h-44.45l-4.15 17.77s-2.44 8.23.59 11.85 31.33 11.85 52.13.59a23.18 23.18 0 0 0 .59-14.81c-2.37-8.29-.59-.59-.59-.59z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M420.35 313.86h-44.43l-4.15 17.77s-2.44 8.23.59 11.85 31.33 11.85 52.13.59a23.18 23.18 0 0 0 .59-14.81c-2.37-8.29-.59-.59-.59-.59z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M389.55 299.11h17.77v16.38a6.73 6.73 0 0 1-6.73 6.73h-4.32a6.73 6.73 0 0 1-6.73-6.73v-16.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M389.55 298.45h17.77v16.38a6.73 6.73 0 0 1-6.73 6.73h-4.32a6.73 6.73 0 0 1-6.73-6.73v-16.38z",
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M389.58 300.97a25.58 25.58 0 0 0 17.77 0v-2.18h-17.77z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 398.5,
    cy: 276.73,
    r: 25.47,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M374.14 267.06h48.58s-4.15-19.62-22.51-18.36-26.07 18.36-26.07 18.36z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 373.56,
    cy: 275.65,
    rx: 2.37,
    ry: 4.44,
    fill: "#be7c5e"
  }), React.createElement("ellipse", {
    cx: 423.32,
    cy: 275.65,
    rx: 2.37,
    ry: 4.44,
    fill: "#be7c5e"
  }), React.createElement("path", {
    d: "M374.14 267.71h48.58s-4.15-19.62-22.51-18.36-26.07 18.36-26.07 18.36z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M339.15 401.6H617.8v16.89H339.15zM339.15 443.82H617.8v16.89H339.15zM474.26 266.5h143.55v16.89H474.26z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M486.92 308.72h118.22v16.89H486.92z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M339.15 486.04h244.88v16.89H339.15zM339.15 528.26h211.1v16.89h-211.1zM339.15 570.49h185.77v16.89H339.15zM339.15 612.71h236.43v16.89H339.15z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M339.15 654.93h92.88v16.89h-92.88z"
  }), React.createElement("circle", {
    cx: 652.07,
    cy: 663.56,
    r: 84.39,
    fill: "url(#prefix__g)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 652.07,
    cy: 663.56,
    r: 79.42,
    fill: "#69f0ae"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M617.6 652.96l29.78 27.3 42.19-62.04 14.9 12.41-57.09 74.45-42.19-47.15 12.41-4.97z"
  }));
};

UndrawHiring.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawHiring;