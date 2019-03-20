function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawGrandma = _props => {
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
    viewBox: "0 0 940.42 750.71",
    style: style
  }, props), React.createElement("path", {
    d: "M789.01 432.71l4.25-2.64 1.22-.79a40.57 40.57 0 0 1-33.66-38.08 40.16 40.16 0 0 1 3.51-18.48 40.64 40.64 0 0 1 26-22.47l-.12 16.72 9.18-18.19h.11a40.57 40.57 0 0 1 42.42 38.64v2.3a48.54 48.54 0 0 0 8-11.83c3.88-8.68 4-18.5 3.65-30.43-.61-23.66-1.63-47.5-3-71.26a40.54 40.54 0 0 1-36-38.38c-.06-1.24 0-2.47 0-3.68v-.91c.07-1.18.19-2.35.36-3.5 0-.19.08-.37.11-.56q.24-1.46.6-2.88c.08-.36.17-.71.27-1.07.28-1 .6-2.06 1-3.06.12-.33.26-.66.39-1q.43-1.11.93-2.19c.18-.38.35-.76.53-1.13 0-.09.09-.19.14-.29a40.55 40.55 0 0 1 47.64-20.57l-.28 21.75 9.09-18a40.37 40.37 0 0 1 19.34 43.72c-.06.29-.15.57-.22.85-.12.54-.26 1.07-.41 1.6-.19.68-.4 1.34-.63 2-.17.5-.33 1-.52 1.49-.28.72-.59 1.42-.9 2.12-.19.41-.35.83-.55 1.23-.51 1-1.07 2.07-1.67 3.07-.21.35-.45.68-.67 1-.44.67-.87 1.34-1.35 2-.29.4-.6.78-.91 1.17-.44.56-.89 1.12-1.37 1.65s-.68.76-1 1.13-1 1-1.53 1.53c-.35.33-.7.67-1.06 1-.6.53-1.23 1-1.86 1.53-.32.25-.63.51-1 .75-1 .71-1.95 1.38-3 2-.19.12-.39.22-.59.33-.85.5-1.73 1-2.62 1.42-.38.19-.78.35-1.17.53-.74.33-1.48.65-2.23.94-.44.17-.89.32-1.34.47-.74.26-1.5.49-2.26.7-.46.13-.91.25-1.37.36-.83.2-1.67.36-2.53.51h-.16q.84 15 1.49 30.09a40.54 40.54 0 0 1 56.3-17.6l-7.17 19.64 14.75-14.16a40.43 40.43 0 0 1 13.11 28 39.78 39.78 0 0 1-1 11.18 40.55 40.55 0 0 1-74.59 11.05c0 1 .07 2 .1 3.05.27 10.54.61 23.64-4.64 35.34-3.56 7.94-9.29 14.38-14.94 20.15q-5.53 5.64-11.41 10.91a40.69 40.69 0 0 1-14.56 12.26q-9.64 7.42-20 13.9l-4.3 2.67c-3.86 2.39-7.82 4.85-11.7 7.41.68-.07 1.36-.15 2.05-.18a40.59 40.59 0 0 1 39.95 26.41l-25.35 20.62 27.88-6.46a40.6 40.6 0 0 1-58.16 36.54l1.88 2.34c1.25 1.55 2.49 3.09 3.7 4.62 16.5 20.89 21.08 40.72 12.92 55.84l-9.87-5.36c7.95-14.72-4-33.56-11.84-43.48-1.19-1.51-2.41-3-3.63-4.54-10.53-13.09-22.53-27.93-22.22-46.14.44-27.44 27.08-43.95 48.49-57.22zM619.21 259.02l-2.18-4.52c-.2-.43-.39-.87-.6-1.31a40.56 40.56 0 0 0 45.78-64.51l-8.79 14.22 2-20.27a.71.71 0 0 0-.09-.07 40.57 40.57 0 0 0-56.52 9.87c-.45.63-.84 1.29-1.24 1.94a48.41 48.41 0 0 1-.42-14.29c1.37-9.41 6.57-17.74 13.23-27.65 13.2-19.64 26.84-39.21 40.71-58.55a40.55 40.55 0 0 0 51-13.09c.72-1 1.36-2.06 2-3.11.15-.26.3-.53.44-.8.57-1 1.1-2.08 1.57-3.14l.21-.53c.38-.91.73-1.83 1-2.76.12-.35.24-.69.34-1 .32-1 .6-2.06.83-3.1.08-.35.14-.7.21-1 .15-.78.28-1.57.38-2.35.06-.42.12-.83.16-1.24v-.32a40.52 40.52 0 0 0-29.12-42.98l-11.43 18.51 2-20a40.3 40.3 0 0 0-39.76 26.52c-.1.28-.17.56-.27.84-.18.52-.35 1-.51 1.57s-.37 1.35-.54 2c-.12.51-.25 1-.36 1.54-.15.75-.26 1.51-.37 2.27-.07.44-.15.88-.2 1.32a37.17 37.17 0 0 0-.23 3.49v1.23c0 .8 0 1.6.07 2.39 0 .5.09 1 .15 1.48.07.71.15 1.43.26 2.13.08.51.17 1 .27 1.5.14.71.3 1.42.47 2.12.12.47.24.94.37 1.41.22.76.48 1.52.75 2.28.13.38.25.77.4 1.15.43 1.11.9 2.21 1.43 3.28.1.2.22.4.33.6.45.88.93 1.75 1.45 2.6.22.36.47.72.7 1.08.45.67.9 1.33 1.38 2 .29.38.58.75.88 1.12.49.61 1 1.21 1.54 1.8.31.35.62.7.95 1 .6.61 1.23 1.2 1.87 1.78l.12.12q-8.77 12.24-17.4 24.59a40.53 40.53 0 0 0-38.08-45l-4.48 20.43-4.86-19.86a40.38 40.38 0 0 0-26.08 16.61 39.7 39.7 0 0 0-5.13 10 40.55 40.55 0 0 0 57 49.32c-.57.85-1.15 1.69-1.72 2.53-5.88 8.75-13.19 19.63-15 32.32-1.25 8.61.13 17.11 1.8 25q1.65 7.72 3.78 15.33a40.7 40.7 0 0 0 5.83 18.14c2.78 7.62 5.9 15.12 9.4 22.44l2.19 4.55c2 4.09 4 8.29 5.91 12.53-.54-.42-1.07-.85-1.64-1.25a40.6 40.6 0 0 0-47.88.87l10.34 31-20.07-20.4a40.58 40.58 0 0 0 29.5 62l-2.84 1-5.6 1.92c-25.12 8.79-39.63 23.07-40.84 40.21l11.26.8c1.18-16.69 21.37-26.18 33.31-30.35 1.81-.64 3.65-1.26 5.5-1.89 15.91-5.4 34-11.52 43.46-27.05 14.29-23.46.65-51.68-10.28-74.36zM205.67 184.23l-5-.37-1.44-.14a40.56 40.56 0 0 0-33-71.9l7.94 14.71-16.57-11.85a.31.31 0 0 0-.1.05 40.56 40.56 0 0 0-19.64 53.91c.32.7.7 1.36 1.06 2a48.61 48.61 0 0 1-12.6-6.77c-7.52-5.83-12.11-14.51-17.41-25.21-10.44-21.24-20.6-42.83-30.44-64.49a40.55 40.55 0 0 0 14.09-50.72c-.52-1.13-1.11-2.2-1.72-3.26l-.46-.78c-.62-1-1.26-2-1.95-2.92-.11-.16-.24-.3-.35-.45-.6-.79-1.23-1.55-1.87-2.28l-.74-.82c-.73-.78-1.48-1.54-2.27-2.26-.26-.24-.54-.46-.8-.7-.6-.52-1.22-1-1.85-1.51-.33-.25-.65-.51-1-.75l-.26-.2a40.53 40.53 0 0 0-51.73 3.89L37.9 30.55 21.51 18.87a40.31 40.31 0 0 0 3.15 47.69c.19.23.4.43.59.65.36.42.73.83 1.11 1.22s1 1 1.48 1.49.76.73 1.16 1.08c.58.5 1.18 1 1.78 1.45.35.28.69.57 1.05.84.94.69 1.91 1.33 2.91 1.94.35.21.71.39 1.07.59.69.4 1.39.79 2.11 1.14.45.22.9.41 1.35.61.66.3 1.31.58 2 .83.48.19.95.36 1.44.52.68.24 1.37.45 2.06.65l1.41.38c.78.19 1.56.35 2.35.49.4.08.79.17 1.19.23 1.18.18 2.37.32 3.57.39h.68c1 0 2 .06 3 0 .42 0 .85-.05 1.28-.08.8 0 1.61-.11 2.41-.2l1.4-.2c.78-.12 1.56-.27 2.33-.44.46-.09.92-.19 1.38-.31.83-.21 1.65-.46 2.47-.72l.17-.05q6.23 13.71 12.64 27.34a40.55 40.55 0 0 0-58 10.54l15.47 14.08-19.76-5.66a40.42 40.42 0 0 0 1.39 30.89 39.6 39.6 0 0 0 6.1 9.42 40.55 40.55 0 0 0 71.2-24.83c.44.92.88 1.84 1.33 2.76 4.65 9.45 10.43 21.22 20.51 29.15 6.84 5.37 14.89 8.42 22.58 10.91q7.51 2.43 15.17 4.37a40.71 40.71 0 0 0 18.63 4c8 1.4 16.05 2.44 24.14 3.05l5 .37c4.53.33 9.18.67 13.8 1.13-.63.26-1.27.51-1.89.8a40.59 40.59 0 0 0-23.09 41.98l32 6.51-27.69 7.21a40.58 40.58 0 0 0 68.47 5.37c-.19 1-.38 2-.58 2.95-.38 2-.77 3.89-1.13 5.81-4.91 26.16.23 45.85 14.48 55.46l6.31-9.36c-13.87-9.35-12-31.59-9.69-44 .35-1.89.73-3.8 1.11-5.71 3.3-16.52 6.97-35.24-1.7-51.24-13.17-24.06-44.43-26.32-69.54-28.13z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M71.84 548.02h93v193h-93z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M71.84 548.02h93v193h-93z"
  }), React.createElement("path", {
    d: "M596.84 280.02C595.77 152.86 492.4 50.09 365 50.02c-128.5-.07-232.16 105.34-232.16 233.78v421.18a41 41 0 0 0 41 41h423c128.13 0 232-105.87 232-234s-103.87-231.96-232-231.96z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M131.94 595.88h106.2v150H173a41 41 0 0 1-41-41v-109h-.06z",
    fill: "#5f5478"
  }), React.createElement("path", {
    fill: "#d4a1a1",
    d: "M164.82 521.2h113.73v113.73H164.82z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M164.82 532.2h113.73v113.73H164.82z"
  }), React.createElement("path", {
    d: "M369.68 519.15s110.3 50.7 106.88 76.05-26 28.77-26 28.77l-66.45-32.2-46.59-37z",
    fill: "#5f5478"
  }), React.createElement("path", {
    d: "M263.35 573.16c.77 5 1.23 10.28-.59 15-2 5.18-6.45 9-8.89 14-3.65 7.42-2.28 16.57 1.75 23.8s10.37 12.87 16.89 18c9.7 7.58 20.24 14.39 32 17.94 14.09 4.24 29.13 3.6 43.83 2.92a22 22 0 0 0 7.14-1.14 21.53 21.53 0 0 0 4.5-2.73c7.68-5.58 15.48-11.39 20.67-19.34a40.73 40.73 0 0 0 3.56-37.1c-4.83-11.77-15.11-20.92-18.61-33.15-2.54-8.88-1.2-18.34-1.23-27.58a8.74 8.74 0 0 0-.87-4.5c-1.39-2.3-4.41-2.88-7.08-3.22-18.1-2.37-36.37-4.14-54.65-3.51a169.14 169.14 0 0 0-27.56 3.11c-4.91 1-16.73 1.9-18 8.21-.74 3.77 2.61 9.43 3.63 13a134.73 134.73 0 0 1 3.51 16.29z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M263.35 573.16c.77 5 1.23 10.28-.59 15-2 5.18-6.45 9-8.89 14-3.65 7.42-2.28 16.57 1.75 23.8s10.37 12.87 16.89 18c9.7 7.58 20.24 14.39 32 17.94 14.09 4.24 29.13 3.6 43.83 2.92a22 22 0 0 0 7.14-1.14 21.53 21.53 0 0 0 4.5-2.73c7.68-5.58 15.48-11.39 20.67-19.34a40.73 40.73 0 0 0 3.56-37.1c-4.83-11.77-15.11-20.92-18.61-33.15-2.54-8.88-1.2-18.34-1.23-27.58a8.74 8.74 0 0 0-.87-4.5c-1.39-2.3-4.41-2.88-7.08-3.22-18.1-2.37-36.37-4.14-54.65-3.51a169.14 169.14 0 0 0-27.56 3.11c-4.91 1-16.73 1.9-18 8.21-.74 3.77 2.61 9.43 3.63 13a134.73 134.73 0 0 1 3.51 16.29z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 184.69,
    cy: 479.41,
    r: 86.33,
    fill: "#d4a1a1"
  }), React.createElement("circle", {
    cx: 312.47,
    cy: 491.4,
    r: 86.33,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M361.74 443.53c-3.72 1.64-6.92 4.27-10.54 6.12-10.41 5.31-22.91 3.6-34.32 1.06-6.05-1.35-13.15-4-14.3-10.08-1.23-6.46 5.16-11.68 7.2-17.92a40 40 0 0 0-28.09 5.12c-10.51 6.43-18.19 17.82-30.1 20.94a11 11 0 0 1-6.75 0 10.15 10.15 0 0 1-5.05-5.23c-5.46-11.29 2-24.21 3.87-36.62 1.53-10.34-.55-22.29 6.44-30.06 7.22-8 19.81-6.85 30.35-9.18a42.14 42.14 0 0 0 19.34-10.06 34.87 34.87 0 0 1 4.82-4.12 19.13 19.13 0 0 1 7.26-2.42 42.6 42.6 0 0 1 28.7 5.78c6 3.67 11.14 8.89 17.86 10.85 3.6 1.06 7.41 1.09 11.12 1.62a42.37 42.37 0 0 1 33.56 28.33c.88 2.74 1.5 5.62 3.08 8 3.13 4.77 9.21 6.56 13.5 10.32s6.52 9.38 8.38 14.78a164.08 164.08 0 0 1 8.39 45.19c.36 8.37-.18 17.47-5.54 23.9a55 55 0 0 0-3.6 4.2c-3.71 5.55-1.71 13-2.52 19.59a22.79 22.79 0 0 1-7.13 13.88 5.27 5.27 0 0 1-3.6 1.73c-1.6-.08-2.84-1.42-3.71-2.77-3.06-4.76-3.84-10.61-6.09-15.81s-7.08-10.17-12.69-9.38c-1.43.2-2.78.76-4.21 1-4 .64-8.11-1.62-10.62-4.84s-3.7-7.27-4.54-11.26c-2.38-11.35-2.29-23-1.38-34.55.35-4.46 2.92-12.39 1.73-16.61s-7.35-3.04-10.82-1.5z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M322.67 648.36a66.44 66.44 0 0 1-32.58-28c-5.47-9.36-8.61-20-14.82-28.92-9.05-13-26.12-6.45-41.93-6.53-20.25-.1-36.8-2.77-53.43 8.79-11.08 7.69-23 16.56-26 29.69-2.65 11.38 2.08 23.52-.57 34.91-1.79 7.68.49 14.74-.81 22.53-1.83 11-3.3 21.27 2.33 30.88l19.44 33.18 211 .8c-.13 0-.39.39-.52.39h151.1c-.27-7.15-.72-14.18-3-20.94-2.41-7-5.86-13.6-9.29-20.16l-38.12-72.79c-7.28-13.92-15.25-28.56-28.85-36.42-7.43-4.29-16-6.18-23.89-9.43-10.35-4.23-13.12-1.27-23.92-4.17s-30.84-10.46-36.73-1c-4.64 7.48-3.28 17.06-5 25.69-1.56 7.84-5.72 14.92-10.33 21.46-4.23 6-9 11.79-15 16s-12.24 6.77-19.08 4.04z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M322.06 690.09s-71.25 5.48-70.57 20.55c0 0 67.83 18.5 67.83 17.82s2.74-38.37 2.74-38.37z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M234.37 657.89s5.48 43.16 25.34 51.38 82.91 9.59 82.91 9.59l42.47 27.41H175.44s-9.59-113 0-113 58.93 24.62 58.93 24.62z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M400.85 641.44l49.36 41.11-134.28 3.43s-19.48 24-11.45 30.84 45.7 11.64 45.7 11.64l34.94 17.81 146.86-.18-48.88-88.2z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M400.85 641.44l49.36 41.11-134.28 3.43s-19.48 24-11.45 30.84 45.7 11.64 45.7 11.64l34.94 17.81 146.86-.18-48.88-88.2z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#5f5478",
    d: "M427.23 578.07l-84.96 69.88 62.35 49.33 70.57-92.49-47.96-26.72z"
  }), React.createElement("path", {
    d: "M381.67 653.78s56.86-10.28 67.14-15.08 51.4-22.61 40.4-8.9-15.75 14.38-15.75 14.38 42.47 3.43 41.1 11.65-6.16 9.59-6.16 9.59 17.81 10.28 13.7 13-1.37 12.33-2.06 14.39 4.8 13-.68 14.39-63.72-1.37-76-4.11-67.83.68-67.83.68z",
    fill: "#e0aaaa"
  }), React.createElement("path", {
    d: "M117.55 561.63s-21.92 26.72 0 58.92 67.14 69.2 91.81 75.36 188.41 8.91 188.41 8.91 7.54-74 0-76.74-141.14 6.17-159.64-7.53-74-53.44-90.43-54.81a298.32 298.32 0 0 1-30.15-4.11z",
    fill: "#5f5478"
  }), React.createElement("path", {
    d: "M240.83 418.36a103 103 0 0 0-18.62-5.83c-31.44-6.61-61.72 30.35-54.22 61.08 3 12.4 11.46 23.88 10.12 36.58-1.26 12.07-11.13 21.75-13.17 33.71a13.25 13.25 0 0 0 .75 8.1c1.9 3.85 6.35 5.83 8.59 9.49 3.77 6.16-.44 14.63-6.72 18.21s-13.84 3.72-21 4.31a149 149 0 0 0-26.6 4.65c-4.94 1.34-9.92 3-13.91 6.2-9.44 7.56-10.74 21.79-7.29 33.38s10.62 21.66 15.79 32.59 8.26 24 3.16 34.95c-5.34 11.47-19.07 19.64-18.51 32.29.15 3.41 1.41 6.75 1.17 10.15-.53 7.86-9.29 13.23-17.13 12.42s-14.53-6.19-19.55-12.28a66 66 0 0 1-14.76-35.56c-1.22-12.68 1.26-25.7-1.72-38.09-2.77-11.49-9.95-21.32-16.14-31.39A210.4 210.4 0 0 1 .01 525.63c-.09-9.59.5-19.31 3.4-28.45 3.64-11.45 10.72-21.45 16-32.25 5.59-11.43 18.66-44.87 30.47-75.84a75.84 75.84 0 0 1 76.89-48.67 48.78 48.78 0 0 0 12.83-.3c7.62-1.48 14.62-5.23 22.13-7.25 21-5.64 45.24 4.31 56.22 23.12 3.19 5.47 5.34 11.56 9.08 16.67 3.34 4.56 7.79 8.15 11.66 12.26a60.77 60.77 0 0 1 5.89 7.31",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M596.84 278.02C595.77 150.86 492.4 48.09 365 48.02c-69.66 0-132 30.94-174.52 79.77A229.53 229.53 0 0 1 331 80.02c127.4.07 230.77 102.84 231.84 230 128.13 0 232 103.87 232 232a231.15 231.15 0 0 1-56.79 152.07 231.61 231.61 0 0 0 90.79-184.07c0-128.13-103.87-232-232-232z",
    opacity: 0.1
  }));
};

UndrawGrandma.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGrandma;