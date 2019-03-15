function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawVoiceControl = _props => {
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
    viewBox: "0 0 972.57 830.55",
    style: style
  }, props), React.createElement("path", {
    d: "M265.84 29.66C295.05 3.66 340.9-1.67 382.63.4c131.09 6.51 249.43 69.8 351.79 141.39 37 25.91 73.53 53.84 97.59 89.53 49 72.65 34.44 173.29-33.65 233.13-23.16 20.37-51.25 36-80.07 49.81-51.26 24.61-106.57 44.36-164.75 50-41.49 4-83.49.75-124.73-4.84-115.24-15.65-228.35-50.21-323.15-109.33-41.58-25.93-80.77-58.17-97.91-100.12s-6.17-95.12 36.29-119.95c17.56-10.27 38.55-14.9 59.11-19.26 30.25-6.41 61-12.73 88.3-25.76 28.2-13.46 61.59-39.5 56-69.29-5.98-31.97-10.79-60.05 18.39-86.05z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M385.87 279.38v117.57a52.62 52.62 0 0 0 52.66 52.65h70.2a47.27 47.27 0 0 0 47.3-47.33V279.38a85.08 85.08 0 0 0-170.16 0z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M385.87 279.38v117.57a52.62 52.62 0 0 0 52.66 52.65h70.2a47.27 47.27 0 0 0 47.3-47.33V279.38a85.08 85.08 0 0 0-170.16 0z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M388.4 280.64v114.08a51.06 51.06 0 0 0 51.09 51.08h68.12a45.86 45.86 0 0 0 45.89-45.88V280.64a82.55 82.55 0 0 0-165.1 0z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M408.9 297.5v94.88a45.51 45.51 0 0 0 6.89 24.29c6.94 11 18.46 18.19 31.51 18.19h51.21c12.44 0 23.34-7.27 29.4-18.19a41 41 0 0 0 5.09-20V297.5c0-37.91-27.78-68.65-62.05-68.65-17.13 0-32.64 7.68-43.87 20.11a72.26 72.26 0 0 0-18.18 48.54z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 580.45,
    cy: 623.42,
    r: 9.39,
    fill: "#333f4f"
  }), React.createElement("circle", {
    cx: 563.65,
    cy: 660.16,
    r: 9.39,
    fill: "#333f4f"
  }), React.createElement("circle", {
    cx: 396.12,
    cy: 666.81,
    r: 9.39,
    fill: "#333f4f"
  }), React.createElement("circle", {
    cx: 358.69,
    cy: 618.88,
    r: 9.39,
    fill: "#333f4f"
  }), React.createElement("path", {
    fill: "#333f4f",
    d: "M464.64 457.59h11.76v73.47h-11.76z"
  }), React.createElement("path", {
    fill: "#333f4f",
    opacity: 0.1,
    d: "M464.64 519.17h11.76v11.9h-11.76z"
  }), React.createElement("path", {
    fill: "#333f4f",
    d: "M478.67 603.48h-16.3v-81.52h16.3z"
  }), React.createElement("path", {
    d: "M360.73 602.95l106.71-4.37v17.14H343.6a18.92 18.92 0 0 1 17.13-12.77z",
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M574.16 602.95l-106.72-4.37v17.14h123.85a18.92 18.92 0 0 0-17.13-12.77z",
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M478.68 600.33l85.19 42a21.56 21.56 0 0 1 12 19.35v1.27l-99.5-43.38-14-1-82.74 52.83a21.58 21.58 0 0 1 8.91-20.49l73.83-52.28z",
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M464.65 457.59v7.92q3.07.12 6.29.12c1.85 0 3.67 0 5.46-.09v-7.95z",
    fill: "#333f4f",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 470.94,
    cy: 450.15,
    rx: 43.39,
    ry: 12.69,
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M427.93 450.14a5.16 5.16 0 0 0 1.85 3.67 11.63 11.63 0 0 0 1.38 1.14c6.46 4.62 22 7.88 40.15 7.88s33.82-3.29 40.25-7.95a9.78 9.78 0 0 0 .92-.72 5.46 5.46 0 0 0 2.23-4c0-7-19.42-12.69-43.4-12.69s-43.38 5.66-43.38 12.67z",
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M427.93 450.14a5.16 5.16 0 0 0 1.85 3.67 11.63 11.63 0 0 0 1.38 1.14c6.46 4.62 22 7.88 40.15 7.88s33.82-3.29 40.25-7.95a9.78 9.78 0 0 0 .92-.72 5.46 5.46 0 0 0 2.23-4c0-7-19.42-12.69-43.4-12.69s-43.38 5.66-43.38 12.67z",
    fill: "#333f4f",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M427.56 450.14a5.15 5.15 0 0 0 1.85 3.67c5.53-1.37 9.35-2.52 9.35-2.52s38.24 2.14 73.35 2.87a5.45 5.45 0 0 0 2.23-4c0-7-19.42-12.69-43.4-12.69s-43.38 5.66-43.38 12.67z",
    fill: "#333f4f",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M397.56 423.92a51 51 0 0 0 41.93 21.88h68.12a45.85 45.85 0 0 0 39.12-21.88z",
    fill: "#333f4f",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M427.93 450.14a5.16 5.16 0 0 0 1.85 3.67 11.63 11.63 0 0 0 1.38 1.14 653.62 653.62 0 0 0 80.4-.07 9.78 9.78 0 0 0 .92-.72 5.46 5.46 0 0 0 2.23-4c0-7-19.42-12.69-43.4-12.69s-43.38 5.66-43.38 12.67z",
    fill: "#333f4f",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M388.93 448.98a657.47 657.47 0 0 0 164.78 0 11.53 11.53 0 0 0 11.58-11.53 11.53 11.53 0 0 0-11.53-11.53H388.93a11.53 11.53 0 0 0-11.53 11.53 11.53 11.53 0 0 0 11.53 11.53z",
    fill: "#333f4f"
  }), React.createElement("path", {
    d: "M540.8 574.56s11.37 11.64 19.13 12.75 14.14 26.06 3.33 28-31.61-5.82-34.66-9.15-14.14-23-14.14-23z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M478.14 450.35s27.73 52.95 28.28 60.16 24.12 37.76 24.12 37.76l-29.39 37.1s-3.88-9.43-10.53-12.76-5.27-10.81-5.27-10.81-6.93 0-11.92-8.32-11.09-16.63-11.09-20.21-36.6-41.31-36.6-41.31l2.77-40.2 7.49-12.75z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M550.23 453.4l.24.21c3.36 3 41.07 36.42 41.07 37.21s13.58 23.29-3.33 42.7-55.73 51.29-55.73 51.29-16.91 12.2-19.13 14.7-35.76 0-15.8-22.74 38.81-48.24 38.81-48.24-33.27-8-35.48-13.58 43.8-74.86 43.8-74.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M551.34 453.4l.24.21c3.36 3 41.07 36.42 41.07 37.21s13.58 23.29-3.33 42.7-55.73 51.29-55.73 51.29-16.91 12.2-19.13 14.7-35.77 0-15.8-22.74 38.81-48.24 38.81-48.24-33.27-8-35.49-13.58-46-73.48-46-73.48l89.83-1.38z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M455.41 304.27l3.32 30.22s34.1 13.59 34.94 13.31 22.73-20 19.13-33c-1.81-6.53-2.64-15.59-3-23s-.31-13.05-.31-13.05-49.63-17.75-45.19-5.55c1.61 4.43.88 9.74-.7 14.7a68.46 68.46 0 0 1-8.19 16.37z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M463.58 287.88c.3.35.61.68.92 1a33.25 33.25 0 0 0 45.28 2.88c-.38-7.34-.31-13.05-.31-13.05s-49.63-17.75-45.19-5.55c1.61 4.45.88 9.76-.7 14.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M455.41 264.95a33.26 33.26 0 1 0 33.27-33.27 33.06 33.06 0 0 0-33.27 33.27z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M496.44 335.61s13-28.88 17.47-28.88 11.38 149.39 11.38 149.39l-67.92 1.06-2.78-78.43 13.85-69.48s12.47 27.41 28 26.34z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M496.44 337.83s13-28.88 17.47-28.88 11.38 149.38 11.38 149.38l-77.07 1.17 6.37-78.53 13.87-69.53s12.45 27.46 27.98 26.39z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M496.44 336.72s13-28.88 17.47-28.88 11.38 149.43 11.38 149.43l-77.07 1.17 6.37-78.53 13.87-69.53s12.45 27.41 27.98 26.34z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M509.08 298.77s2.33-3.41 5.66-2.3 5.82-1.94 9.15 1.11 16.63 7.21 19.13 5.82 11.36 4.72 13.31 8.32 8.31 13.31 8.31 13.31 5.55 6.65 4.72 10.26 1.94 7.76 5.26 9.42 10 18.3 10 18.3-1.81 22.26 5.67 26.13 1.94 20.8 1.94 20.8l-35.36-8.39-10-22.74s3.88 66.55 8.59 72.64 5.27 10 5.27 10-18.3 3.88-22.18 7.2-14.14-.83-14.14-.83l-10-88.44s-3.6-16.64-3.6-25.23-1.73-55.38-1.73-55.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M510.19 298.77s2.33-3.41 5.66-2.3 5.82-1.94 9.15 1.11 16.63 7.21 19.13 5.82 11.36 4.72 13.3 8.32 8.32 13.31 8.32 13.31 5.55 6.65 4.72 10.26 1.94 7.76 5.26 9.42 10 18.3 10 18.3-1.79 22.25 5.7 26.13c1.87 1 2.93 3.13 3.46 5.83 2.15 10.86-6.76 20.8-17.83 20.46l-19-7.88-10-28.74s3.88 66.55 8.59 72.64 5.27 10 5.27 10-18.3 3.88-22.18 7.2-14.14-.83-14.14-.83l-10-88.44s-3.6-16.64-3.6-25.23-1.81-55.38-1.81-55.38z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M571.29 346.93s-3.33 9.15-12.48 8.32 12.48-8.32 12.48-8.32zM562.43 333.07s-6.1 1.11-8.32 6.37 8.32-6.37 8.32-6.37zM545.29 323.64c0 1.11-3.89 20.52 0 28.56s3.32 17.47 3.32 17.47zM463.4 292.09s-2.17-2.55-4.39-2.27-3.6 1.66-6.38 2.77-9.42 1.39-9.42 2.22-5.83 4.16-9.71 5-16.08 9.15-19.13 25.23-8.32 20.79-8.32 20.79l29.39 14.44s-22.73 96.48-25.5 103.41-3 48-3 48 18 8 22.73 10.53 2.77-23.84 12.48-39.09 20.79-37.43 20.79-37.43l16.86-47.42s10.82-63.21 1.67-74.86-18.9-27.14-18.07-31.32z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M462.29 292.09s-2.17-2.55-4.39-2.27-3.6 1.66-6.38 2.77-9.42 1.39-9.42 2.22-5.82 4.16-9.71 5-16.1 9.14-19.1 25.22-8.31 20.79-8.31 20.79l29.31 14.45s-22.73 96.48-25.5 103.41-3 48-3 48 18 8 22.73 10.53 2.77-23.94 12.47-39.15 20.79-37.43 20.79-37.43l16.91-47.36s10.82-63.21 1.67-74.86-18.9-27.14-18.07-31.32z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M402.17 413.47c.82.13 1.87.26 3.08.37 8.88.81 26.31 1 26.31 1s13-25.79 24.12-25c0 0-10.26-11.64-14.41-10.25-.7.23-1.14-.28-1.35-1.28-1.11-5 2.73-22 2.73-22l5.27-23-30.5 7.48c-2.77.56-11.37 5-11.37 5s-.27 11.92-2.49 14.7-4.71 16.08-4.44 19.4-3.05 18.86.28 23-4.11 9.47 2.77 10.58z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M516.12 595.07s1.67 9.15-.27 15-1.67 18.58-.28 23 6.1 10.53-6.65 13.3-21.35.28-21.91-1.94-3.32-11.09-1.11-16.08 3-18-1.11-25.51-1.38-19.13 2.5-20.51 10.54-4.44 10.54-4.44-7.21 13-.56 15.81 18.85 1.37 18.85 1.37z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M455.41 264.95a33.06 33.06 0 0 0 9.09 22.84 1.19 1.19 0 0 0 .08-.16c1-2.11 1.93-4.3 1.85-6.61-.09-2.79-1.7-5.31-2.22-8.07-.65-3.48.49-7 1.61-10.38.82-2.46 2.41-5.45 5-5.15a5.76 5.76 0 0 0 1.53.18c1.37-.21 1.65-2 1.81-3.38a15.35 15.35 0 0 1 12.53-13.16 3.88 3.88 0 0 1 2.19.15c1 .43 1.49 1.47 2.36 2.07 2.81 1.95 6.39-1.78 9.81-1.49 2.91.24 4.68 3.21 5.88 5.87s2.69 5.69 5.54 6.31a1.75 1.75 0 0 0 1.35-.15c.88-.65.27-2-.18-3-1.17-2.64-.39-4.73 1-6.61a33.26 33.26 0 0 0-59.25 20.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M513.62 249.69c.45 1 1.07 2.38.17 3a1.68 1.68 0 0 1-1.34.15c-2.85-.61-4.35-3.65-5.55-6.31s-3-5.63-5.87-5.87c-3.42-.29-7 3.44-9.82 1.49-.86-.6-1.39-1.64-2.35-2.07a3.88 3.88 0 0 0-2.19-.14 15.35 15.35 0 0 0-12.54 13.15c-.14 1.37-.43 3.17-1.8 3.38a5.72 5.72 0 0 1-1.53-.18c-2.58-.3-4.16 2.68-5 5.14-1.12 3.37-2.26 6.91-1.61 10.39.52 2.76 2.13 5.28 2.22 8.08.07 2.3-.9 4.5-1.85 6.6s-2.52 4.56-4.8 4.26c-1.88-.24-2.91-2.23-3.81-3.9s-2.52-3.45-4.34-2.93c-.82.24-1.66.93-2.4.51a1.75 1.75 0 0 1-.7-1.21c-.89-3.87.39-8.23-1.5-11.73-1.45-2.69-4.39-4.15-6.78-6.06a19.42 19.42 0 0 1-2.63-27.8c2.56-3 6.24-5.64 6.45-9.57.15-3-1.87-5.75-1.89-8.75s1.85-5.52 4-7.51a25.83 25.83 0 0 1 23.22-6.12c2.15.52 4.31 1.32 6.5 1.05 2.55-.32 4.67-2 7-3.18a17.8 17.8 0 0 1 22.21 6c2.62 4.09 3.65 9.42 7.57 12.29 2.57 1.88 6.27 2.59 7.69 5.44.85 1.72.61 3.75.35 5.64a13.2 13.2 0 0 1-4.22 8.08c-2.41 2.48-4.46 5.07-2.86 8.68z",
    fill: "#512e4e"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M442.86 222.73a14.78 14.78 0 0 1-.59-2.31 14.5 14.5 0 0 1 .59 2.31zM513.06 247.27a9 9 0 0 0-.55-1.48c-1.6-3.62.45-6.2 2.84-8.62a13.23 13.23 0 0 0 4.21-8.08 20 20 0 0 0 .24-2.56 5.49 5.49 0 0 1 .52.8c.85 1.72.61 3.75.35 5.64a13.2 13.2 0 0 1-4.22 8.08c-1.82 1.87-3.44 3.81-3.39 6.22zM450.52 280.07c1.82-.53 3.44 1.27 4.34 2.93s1.93 3.66 3.81 3.9c2.28.29 3.85-2.17 4.8-4.26s1.93-4.3 1.85-6.6a7.77 7.77 0 0 0-.08-.83 15 15 0 0 1 1.19 4.71c.07 2.3-.9 4.5-1.85 6.6s-2.52 4.56-4.8 4.26c-1.88-.24-2.91-2.23-3.81-3.9s-2.52-3.45-4.34-2.93c-.82.24-1.66.93-2.4.51a1.75 1.75 0 0 1-.7-1.21 15.37 15.37 0 0 1-.33-2.64c.72.32 1.54-.34 2.32-.54zM439.14 261.58c2.39 1.91 5.34 3.37 6.79 6.06a9.62 9.62 0 0 1 1 3.75c-1.47-2.6-4.35-4.05-6.7-5.93a19.59 19.59 0 0 1-7-11.85 19.46 19.46 0 0 0 5.91 7.97zM464.15 271.38a21.77 21.77 0 0 1-1.05-3.42c-.65-3.48.49-7 1.61-10.39.82-2.46 2.41-5.44 5-5.14a5.76 5.76 0 0 0 1.53.18c1.37-.21 1.66-2 1.8-3.39a15.37 15.37 0 0 1 12.54-13.14 3.79 3.79 0 0 1 2.19.14c1 .43 1.49 1.47 2.35 2.07 2.82 2 6.4-1.78 9.82-1.49 2.9.24 4.68 3.21 5.88 5.87s2.7 5.69 5.54 6.31a1.68 1.68 0 0 0 1.34-.15 1.08 1.08 0 0 0 .44-.83 6.55 6.55 0 0 0 .5 1.69c.45 1 1.07 2.38.17 3a1.68 1.68 0 0 1-1.34.15c-2.85-.61-4.35-3.65-5.55-6.31s-3-5.63-5.87-5.87c-3.42-.29-7 3.44-9.82 1.49-.86-.6-1.39-1.64-2.35-2.07a3.88 3.88 0 0 0-2.19-.14 15.35 15.35 0 0 0-12.54 13.15c-.14 1.37-.43 3.17-1.8 3.38a5.72 5.72 0 0 1-1.53-.18c-2.58-.3-4.16 2.68-5 5.14-1.07 3.24-2.14 6.62-1.67 9.95z"
  })), React.createElement("path", {
    d: "M405.29 413.84c8.88.81 26.31 1 26.31 1s13-25.79 24.12-25c0 0-10.26-11.64-14.41-10.25-.7.23-1.14-.28-1.35-1.28-10.86 3.32-31.56 11.43-33.59 25.67-.58 3.88-.93 7.12-1.08 9.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M404.14 413.84c8.88.81 26.31 1 26.31 1s13-25.79 24.12-25c0 0-10.25-11.64-14.41-10.25-.7.23-1.13-.28-1.35-1.28-10.86 3.32-31.56 11.43-33.59 25.67-.54 3.88-.88 7.12-1.08 9.86z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M482.02 488.05s-25-6.1-28.83-2.77 28.83 2.77 28.83 2.77zM553.55 511.9s-10.53 6.1-11.64 11.09 11.64-11.09 11.64-11.09zM511.41 624.27s-14.42-2.22-18.11.18 18.11-.18 18.11-.18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M367.36 817.81s55.88-3 69.5-11 32.9-8 33-8l222.5-48.54 92.5-22 16.5-2.17-54.5-62.36-1.66-.72-80.34-34.75s-36 2-43.11 25.46a28.15 28.15 0 0 0-1 5.06 29.33 29.33 0 0 0 5.68 20.53c2.84 3.89 6.33 9.39 7.43 14.25.62 2.74.48 5.27-1 7.2a58.69 58.69 0 0 1-9.88 7.89c-19.59 13-69.11 34.42-155.62 1.61 0 0-37-36.5-65-21s-35 128.54-35 128.54z",
    fill: "#e1dee5"
  }), React.createElement("path", {
    d: "M633.82 693.61c.62 2.74.48 5.27-1 7.2a58.69 58.69 0 0 1-9.88 7.89l168.42 12.57-46.16-58.25-80.34-34.75s-36 2-43.11 25.46a28.15 28.15 0 0 0-1 5.06 29.33 29.33 0 0 0 5.68 20.53c2.8 3.95 6.29 9.43 7.39 14.29z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M798.36 464.31l-138 3V632.5l131 88.81 31.5-29-6.5-96 6.5-89.5-24.5-42.5z"
  }), React.createElement("path", {
    d: "M876.86 437.27l-161.12-49.61a24.2 24.2 0 0 0-9-1l-384.9 28.1a181.72 181.72 0 0 0-91.66 32.33c-24.91 17.57-49.58 44.54-61 85.37a163 163 0 0 0 1.73 91.81l33.95 110s-25.5-239 229-251z",
    fill: "#d9d6df"
  }), React.createElement("path", {
    d: "M626.39 679.36c2.84 3.89 6.33 9.39 7.43 14.25 4.36-5.05 5.3-10.75-1-15.3-7.89-5.74-10.52-15.7-11.11-24.54a28.15 28.15 0 0 0-1 5.06 29.33 29.33 0 0 0 5.68 20.53z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M222.36 706.27l19 64.5 43 42 54 11 84-15v-298.5s-14.5-9.5-16-9.5-42 6.5-42 6.5l-91.7 65.77-3.8 2.73-41 61z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M422.36 497.81v311l-8.1 1.45V497.81h8.1z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M798.36 464.31l-138 3V632.5l131 88.81 31.5-29-6.5-96 6.5-89.5-24.5-42.5zM422.36 497.81v311l-8.1 1.45V497.81h8.1z"
  }), React.createElement("path", {
    d: "M270.86 593.81c60-49.3 126.7-56.55 151.5-57.45v-26.09s-14.5-9.5-16-9.5-42 6.5-42 6.5l-91.7 65.77z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M937.86 567.27s-6.19 16.36-12.83 35.41c-5.88 16.93-12.12 36-14.67 47.59-1 4.43-3.51 9-7.06 13.47-16.19 20.55-53.5 40.46-59.94 47.53-7.85 8.62-52 14.83-52 14.83V460.81l29.5-9.5h37.5l48.5 22 25 37z",
    fill: "#65617d"
  }), React.createElement("path", {
    d: "M423.29 412.09c1.94 2.36 60.86 2.91 63.91 2.22l5.54-1.25s28.44 15.31 48-9.74c.84-1.07 1.66-2.21 2.46-3.43 19.55-29.8-45.61-8-45.61-8s-24.95.14-31.33.14h-.66c-6.63-.27-19.85-4.29-19.85-4.29s-24.39 22-22.46 24.35z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M509.29 403.11s24.95.14 31.33.21h.15c.84-1.07 1.66-2.21 2.46-3.43 19.55-29.8-45.61-8-45.61-8s-24.95.14-31.33.14h-.66c-.63.82-1.25 1.68-1.86 2.59-19.89 29.54 45.52 8.49 45.52 8.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M561.07 405.85s-14.09-4.46-20.47-4.53-31.33-.2-31.33-.2-65.39 21-45.52-8.55 50.61-12.61 50.61-12.61l5.55-1.19c3.06-.66 62 .55 63.88 2.93s-22.72 24.15-22.72 24.15z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M590.29 389.14s-.4 19.23-13.73 20.33c-28 2.29-20.88-8.53-20.88-8.53l2.42-21.54 13.19-11.94s5.79 2.66 6.54 2.21 12.46 19.47 12.46 19.47zM401.06 413.47c.82.13 1.87.26 3.08.37 8.88.81 26.31 1 26.31 1s13-25.79 24.12-25c0 0-10.25-11.64-14.41-10.25-.7.23-1.13-.28-1.35-1.28-1.1-5 2.73-22 2.73-22l5.27-23-30.52 7.52c-2.77.56-11.36 5-11.36 5s-.28 11.92-2.5 14.7-4.71 16.08-4.44 19.4-3.05 18.86.28 23-4.14 9.43 2.79 10.54z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M432.39 353.03s-25.5 2.77-26.61 9.15 26.61-9.15 26.61-9.15zM417.14 377.98c-1.66.56-11.36 3.05-13.3 8.88s13.3-8.88 13.3-8.88zM405.29 414.87c8.88.81 26.31 1 26.31 1s13-25.79 24.12-25c0 0-10.26-11.64-14.41-10.25-.7.23-1.14-.28-1.35-1.28-10.86 3.32-31.56 11.43-33.59 25.67-.58 3.88-.93 7.12-1.08 9.86z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M598.87 316.59v110.93c0 1.91-1 2.18-2.69 3.11-5.62 3.12-19.49 8.67-36.13-.12-1.71-.9-2.76-1.21-2.76-3.14v-110.1s21.15 8.56 41.58-.68z",
    fill: "#333f4f"
  }), React.createElement("ellipse", {
    cx: 578.08,
    cy: 316.52,
    rx: 20.79,
    ry: 4.42,
    fill: "#2d394a",
    stroke: "#40868e",
    strokeMiterlimit: 10
  }), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 362.66,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 363.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 364.25,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 365.38,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 366.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 366.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 365.19,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 365.85,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 364.25,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 364.72,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 363.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 364.92,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 365.85,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 366.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 366.32,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 364.95,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 365.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 366.55,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 367.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 368.35,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 368.61,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 367.48,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 368.15,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 366.55,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 367.02,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 365.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 367.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 368.15,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 368.61,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 368.61,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 367.25,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 367.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 368.84,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 369.97,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 370.64,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 370.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 369.78,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 370.44,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 368.84,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 369.31,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 367.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 369.51,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 370.44,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 370.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 370.91,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 369.55,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 370.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 371.14,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 372.27,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 372.94,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 373.2,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 372.07,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 372.74,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 371.14,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 371.61,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 370.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 371.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 372.74,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 373.2,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 373.2,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 371.84,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 372.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 373.44,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 374.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 375.24,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 375.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 374.37,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 375.03,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 373.44,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 373.9,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 372.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 374.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 375.03,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 375.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 375.5,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 374.14,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 374.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 375.73,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 376.86,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 377.53,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 377.79,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 376.66,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 377.33,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 375.73,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 376.2,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 374.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 376.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 377.33,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 377.79,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 377.79,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 376.43,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 377.09,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 378.03,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 379.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 379.83,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 380.09,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 378.96,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 379.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 378.03,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 378.49,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 377.09,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 378.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 379.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 380.09,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 380.09,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 378.73,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 379.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 380.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 381.45,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 382.12,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 382.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 381.26,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 381.92,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 380.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 380.79,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 379.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 380.99,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 381.92,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 382.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 382.39,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 381.02,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 381.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 382.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 383.75,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 384.42,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 384.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 383.55,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 384.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 382.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 383.08,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 381.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 383.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 384.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 384.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 384.68,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 383.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 383.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 384.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 386.04,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 386.71,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 386.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 385.85,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 386.51,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 384.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 385.38,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 383.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 385.58,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 386.51,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 386.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 386.98,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 385.61,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 386.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 387.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 388.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 389.01,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 389.27,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 388.14,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 388.81,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 387.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 387.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 386.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 387.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 388.81,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 389.27,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 389.27,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 387.91,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 388.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 389.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 390.63,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 391.3,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 391.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 390.44,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 391.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 389.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 389.97,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 388.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 390.17,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 391.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 391.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 391.57,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 390.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 390.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 391.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 392.93,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 393.6,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 393.86,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 392.73,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 393.4,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 391.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 392.27,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 390.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 392.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 393.4,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 393.86,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 393.86,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 392.5,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 393.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 394.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 395.23,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 395.9,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 396.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 395.03,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 395.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 394.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 394.56,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 393.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 394.76,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 395.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 396.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 396.16,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 394.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 395.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 396.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 397.52,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 398.19,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 398.45,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 397.32,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 397.99,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 396.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 396.86,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 395.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 397.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 397.99,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 398.45,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 398.45,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 397.09,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 397.75,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 398.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 399.82,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 400.49,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 400.75,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 399.62,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 400.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 398.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 399.15,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 397.75,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 399.35,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 400.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 400.75,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 400.75,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 399.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 400.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 400.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 402.11,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 402.78,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 403.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 401.92,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 402.58,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 400.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 401.45,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 400.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 401.65,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 402.58,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 403.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 403.05,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 401.68,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 402.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 403.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 404.41,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 405.08,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 405.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 404.21,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 404.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 403.28,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 403.74,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 402.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 403.94,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 404.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 405.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 405.34,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 403.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 404.64,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 405.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 406.7,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 407.37,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 407.64,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 406.51,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 407.17,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 405.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 406.04,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 404.64,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 406.24,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 407.17,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 407.64,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 407.64,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 406.27,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 406.94,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 407.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 409,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 409.67,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 409.93,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 408.8,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 409.47,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 407.87,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 408.34,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 406.94,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 408.53,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 409.47,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 409.93,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 409.93,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 408.57,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 409.23,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 410.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 411.29,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 411.96,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 412.23,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 411.1,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 411.76,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 410.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 410.63,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 409.23,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 410.83,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 411.76,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 412.23,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 412.23,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 410.86,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 411.53,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 412.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 413.59,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 414.26,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 414.52,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 413.39,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 414.06,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 412.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 412.93,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 411.53,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 413.12,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 414.06,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 414.52,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 414.52,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 413.16,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 413.82,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 414.76,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 415.89,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 416.56,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 416.82,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 415.69,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 416.35,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 414.76,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 415.22,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 413.82,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 415.42,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 416.35,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 416.82,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 416.82,
    r: 0.47
  })), React.createElement("g", {
    opacity: 0.8
  }, React.createElement("circle", {
    cx: 596.97,
    cy: 415.46,
    r: 0.47
  }), React.createElement("circle", {
    cx: 594.61,
    cy: 416.12,
    r: 0.47
  }), React.createElement("circle", {
    cx: 591.68,
    cy: 417.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 586.43,
    cy: 418.18,
    r: 0.47
  }), React.createElement("circle", {
    cx: 580.9,
    cy: 418.85,
    r: 0.47
  }), React.createElement("circle", {
    cx: 575.18,
    cy: 419.11,
    r: 0.47
  }), React.createElement("circle", {
    cx: 566.95,
    cy: 417.98,
    r: 0.47
  }), React.createElement("circle", {
    cx: 569.68,
    cy: 418.65,
    r: 0.47
  }), React.createElement("circle", {
    cx: 561.87,
    cy: 417.05,
    r: 0.47
  }), React.createElement("circle", {
    cx: 564.32,
    cy: 417.52,
    r: 0.47
  }), React.createElement("circle", {
    cx: 559.18,
    cy: 416.12,
    r: 0.47
  }), React.createElement("circle", {
    cx: 589,
    cy: 417.71,
    r: 0.47
  }), React.createElement("circle", {
    cx: 583.59,
    cy: 418.65,
    r: 0.47
  }), React.createElement("circle", {
    cx: 577.72,
    cy: 419.11,
    r: 0.47
  }), React.createElement("circle", {
    cx: 572.37,
    cy: 419.11,
    r: 0.47
  })), React.createElement("circle", {
    cx: 822.99,
    cy: 92.87,
    r: 21.63,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 918.99,
    cy: 145.87,
    r: 17.01,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 966.57,
    cy: 63.9,
    r: 6,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M124.15 689.52s7.13 9.33-3.29 23.41-19 26-15.55 34.76c0 0 15.73-26.16 28.54-26.52s4.44-15.9-9.7-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M124.15 689.52a11.49 11.49 0 0 1 1.46 2.92c12.49 14.68 19.15 28.38 7.14 28.73-11.19.32-24.61 20.32-27.82 25.37a9.11 9.11 0 0 0 .38 1.15s15.73-26.16 28.54-26.52 4.44-15.9-9.7-31.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M137.41 701.41c0 3.28-.37 5.94-.82 5.94s-.82-2.66-.82-5.94.46-1.74.91-1.74.73-1.55.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M141.96 705.33c-2.88 1.57-5.39 2.52-5.61 2.12s1.94-2 4.83-3.57 1.74-.43 2 0 1.67-.12-1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M86.46 689.52s-7.13 9.33 3.29 23.41 19 26 15.56 34.76c0 0-15.74-26.16-28.54-26.52s-4.4-15.9 9.69-31.65z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M86.46 689.52a11.49 11.49 0 0 0-1.46 2.92c-12.49 14.68-19.15 28.38-7.14 28.73 11.19.32 24.61 20.32 27.83 25.37a11.06 11.06 0 0 1-.38 1.15s-15.74-26.16-28.54-26.52-4.4-15.9 9.69-31.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M73.2 701.41c0 3.28.37 5.94.82 5.94s.82-2.66.82-5.94-.46-1.74-.91-1.74-.73-1.55-.73 1.74z",
    fill: "#ffd037"
  }), React.createElement("path", {
    d: "M68.65 705.33c2.88 1.57 5.39 2.52 5.61 2.12s-1.94-2-4.83-3.57-1.74-.43-2 0-1.67-.12 1.22 1.45z",
    fill: "#ffd037"
  }), React.createElement("ellipse", {
    cx: 219.02,
    cy: 842.35,
    rx: 74.6,
    ry: 11.45,
    transform: "rotate(-4.05 -328.604 2434.047)",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M143.7 735.12l-.36 2.91-.5 4.12-.2 1.71-.5 4.12-.22 1.72-.5 4.11-5.71 46.8c-.51 4.18-7.33 7.43-15.57 7.43H90.47c-8.24 0-15.05-3.25-15.56-7.43l-5.72-46.8-.5-4.11-.21-1.72-.51-4.12-.2-1.71-.5-4.12-.36-2.91c-.29-2.37 3.41-4.36 8.07-4.36h60.66c4.65 0 8.35 1.99 8.06 4.36z",
    fill: "#65617d"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M143.34 738.04l-.5 4.11H67.76l-.5-4.11h76.08zM142.63 743.87l-.5 4.12H68.48l-.51-4.12h74.66zM141.91 749.7l-.5 4.11H69.19l-.5-4.11h73.22z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M701.13 403.44l27.32 1.39-45.03 14.18-23.06-1.33 40.77-14.24z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M701.12 402.25l27.32 1.4-45.04 14.18-23.06-1.34 40.78-14.24z"
  }), React.createElement("path", {
    d: "M697.9 405.35c1.07-.47 2.23.38 3.38.58.66.12 1.34 0 2 .1 1.34.16 2.68 1 4 .57zM696.5 406.19c1.07-.47 2.23.38 3.38.58.66.12 1.34 0 2 .1 1.34.16 2.68 1 3.95.56zM693.29 407.87c1.07-.47 2.23.38 3.39.58.65.12 1.33 0 2 .1 1.34.16 2.68 1 4 .56z",
    fill: "#d3dae1"
  }), React.createElement("path", {
    d: "M762.37 398.09s-3.42 15.92 11.79 17.8l.94-1.76s-11.81-11.09-12.73-16.04z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M779.94 414.01l-3.54.75-.35.07s-9.44-7.66-9.32-24.76a42.22 42.22 0 0 0 4.51 7.13c3.74 4.95 7.99 11.56 8.7 16.81z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M781.13 415.65a2.22 2.22 0 0 1-1.9.24c-9.08-2.12-6-31.71-6-31.71.5.24 1.05 4 3.14 8.86 3.65 8.54 7.68 20.46 4.76 22.61zM801.29 398.09s.59 15.92-14.62 17.8l-.94-1.76s14.56-11.09 15.56-16.04z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M796.91 390.07c.12 17.1-12.14 24.76-12.14 24.76l-.36-.07-3.53-.75c.7-5.25 5-11.86 8.69-16.81a38.47 38.47 0 0 1 7.34-7.13z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M784.36 414.1a5.74 5.74 0 0 1-2 1.55 3.86 3.86 0 0 1-.75.24c-2.23.53-3-1.09-2.88-3.82.21-4.88 3.27-13.33 6-19.65a24.53 24.53 0 0 1 5.7-8.24s-.14 23.09-6.07 29.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M781.82 373.8s-10.14 36-1.41 41.39 3.65-38.2 1.41-41.39z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M762.37 398.09s-3.42 15.92 11.79 17.8l.94-1.76s-11.81-11.09-12.73-16.04z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M779.94 414.01l-3.54.75-.35.07s-9.44-7.66-9.32-24.76a42.22 42.22 0 0 0 4.51 7.13c3.74 4.95 7.99 11.56 8.7 16.81z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M781.13 415.65a2.22 2.22 0 0 1-1.9.24c-9.08-2.12-6-31.71-6-31.71.5.24 1.05 4 3.14 8.86 3.65 8.54 7.68 20.46 4.76 22.61zM801.29 398.09s.59 15.92-14.62 17.8l-.94-1.76s14.56-11.09 15.56-16.04z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M796.91 390.07c.12 17.1-12.14 24.76-12.14 24.76l-.36-.07-3.53-.75c.7-5.25 5-11.86 8.69-16.81a38.47 38.47 0 0 1 7.34-7.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M784.36 414.1a5.74 5.74 0 0 1-2 1.55 3.86 3.86 0 0 1-.75.24c-2.23.53-3-1.09-2.88-3.82.21-4.88 3.27-13.33 6-19.65a24.53 24.53 0 0 1 5.7-8.24s-.14 23.09-6.07 29.92z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M781.82 373.8s-10.14 36-1.41 41.39 3.65-38.2 1.41-41.39z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M762.37 398.09s-2 15.92 13.2 17.8l.94-1.76s-13.22-11.09-14.14-16.04z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M781.35 414.01l-3.54.75-.35.07s-10.85-7.66-10.73-24.76c0 0 2.78 3 5.92 7.13 3.74 4.95 7.99 11.56 8.7 16.81z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M781.35 414.01l-3.54.75c-3.35-2.95-4.68-10.63-5.16-17.56 3.74 4.95 7.99 11.56 8.7 16.81z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M782.55 415.65a2.25 2.25 0 0 1-1.91.24c-9.08-2.12-7.42-31.71-7.42-31.71.5.24 2.47 4 4.55 8.86 3.67 8.54 7.69 20.46 4.78 22.61zM801.29 398.09s2 15.92-13.2 17.8l-.94-1.76s13.14-11.09 14.14-16.04z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M796.91 390.07c.12 17.1-10.73 24.76-10.73 24.76l-.35-.07-3.54-.75c.7-5.25 5-11.86 8.7-16.81 3.14-4.15 5.92-7.13 5.92-7.13z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M790.99 397.2c-.46 6.46-1.64 13.57-4.51 16.9a6.77 6.77 0 0 1-.65.66l-3.54-.75c.7-5.25 5-11.86 8.7-16.81z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M785.77 414.1a5.62 5.62 0 0 1-2 1.55 4 4 0 0 1-.74.24c-2.24.53-3-1.09-2.89-3.82.22-4.88 3.28-13.33 6-19.65 2-4.56 3.81-8 4.29-8.24 0 0 1.28 23.09-4.66 29.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M782.55 415.65a2.55 2.55 0 0 1-1.44-.46c-4.27-2.66-4.36-12.65-3.34-22.15 3.67 8.54 7.69 20.46 4.78 22.61z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M785.77 414.1c-.49 1.06-1.15 1.62-2 1.55a3 3 0 0 1-1.21-.46 6.55 6.55 0 0 1-2.42-3.12c.22-4.88 3.28-13.33 6-19.65.98 8.77 1.31 18.08-.37 21.68z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M781.82 373.8s-8.72 36 0 41.39 2.24-38.2 0-41.39z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M795.5 416.96l-.61 3.18-2.22 11.67h-21.11l-2.22-11.67-.61-3.18h26.77z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M795.5 416.96l-.61 3.18h-25.55l-.61-3.18h26.77z"
  }), React.createElement("path", {
    fill: "#65617d",
    d: "M763.66 413.42h36.31v6.01h-36.31z"
  }), React.createElement("path", {
    d: "M861.36 464.27s71.76 45 56.06 117.4c-1.28 5.91-2.39 11.84-3.12 17.83-2.87 23.46-20.09 90.77-122.94 121.77v7l43.63-12.17 29.62-16.33 22.61-20.29 27.64-33.71 12.83-27.5 4.7-36.22 2.67-41.36-6.61-35.42-15.59-23.07-19-14.78z",
    fill: "#d9d6df"
  }), React.createElement("path", {
    d: "M200.02 657.42c-6.78 36-1.52 73.45 16.18 105.56 51.61 93.62 161.29 66.07 193.65 55.45 7.7-2.53 15.5-4.72 23.4-6.51l356.44-80.78c122.67-21.33 148-120.67 148-120.67 24.29-76.62 7.64-121.26-14.34-146.56a86.77 86.77 0 0 0-70.21-29.34l-42.28 2.24-375.83 41c-175.69 1.88-222.62 113.71-235.01 179.61zm34.81 4.51c11.85-56.66 58.33-138.84 207.82-143.91 6.86-.24 13.71-.84 20.52-1.75l336.12-44.9 38.92-2c29.24-1.47 57.46 12.14 73.67 36.51 15.48 23.29 23.85 60 4.7 117.07 0 0-23.43 86.72-136.87 105.35l-329.23 70.5c-7.49 1.6-14.89 3.56-22.2 5.82-29.86 9.22-129.15 32.6-177.38-45.92-17.73-28.87-23.01-63.61-16.07-96.77z",
    fill: "#e1dee5"
  }));
};

UndrawVoiceControl.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawVoiceControl;