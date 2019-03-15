function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFashionBlogging = _props => {
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
    viewBox: "0 0 1129 663",
    style: style
  }, props), React.createElement("circle", {
    cx: 321,
    cy: 321,
    r: 321,
    fill: "#f2f2f2"
  }), React.createElement("ellipse", {
    cx: 559,
    cy: 635.5,
    rx: 514,
    ry: 27.5,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 558,
    cy: 627,
    rx: 460,
    ry: 22,
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#3f3d56",
    d: "M131 152.5h840v50H131z"
  }), React.createElement("path", {
    d: "M131 608.83a21.67 21.67 0 0 0 21.67 21.67h796.66A21.67 21.67 0 0 0 971 608.83V177.5H131zM949.33 117.5H152.67A21.67 21.67 0 0 0 131 139.17v38.33h840v-38.33a21.67 21.67 0 0 0-21.67-21.67z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M949.33 117.5H152.67A21.67 21.67 0 0 0 131 139.17v38.33h840v-38.33a21.67 21.67 0 0 0-21.67-21.67z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 181,
    cy: 147.5,
    r: 13,
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 217,
    cy: 147.5,
    r: 13,
    fill: "#3f3d56"
  }), React.createElement("circle", {
    cx: 253,
    cy: 147.5,
    r: 13,
    fill: "#3f3d56"
  }), React.createElement("rect", {
    x: 168,
    y: 213.5,
    width: 337,
    height: 386,
    rx: 5.335,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 319.144,
    cy: 264.479,
    r: 42.062,
    fill: "#3c354c"
  }), React.createElement("circle", {
    cx: 316.34,
    cy: 303.737,
    r: 42.062,
    fill: "#3c354c"
  }), React.createElement("path", {
    d: "M298.113 274.294s-1.87 26.172-10.282 29.91 26.172 60.757 26.172 60.757l14.02-17.76-11.216-31.78s8.412-26.172 12.151-28.041-30.845-13.086-30.845-13.086z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M298.113 274.294s-1.87 26.172-10.282 29.91 26.172 60.757 26.172 60.757l14.02-17.76-11.216-31.78s8.412-26.172 12.151-28.041-30.845-13.086-30.845-13.086z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M413.082 407.957s41.127 21.498 32.715 45.8-26.172-27.106-26.172-27.106l-14.02-10.281zM413.082 471.517s15.89 34.585 2.804 36.454-14.02-30.845-14.02-30.845z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M344.848 372.438c.935 0 8.413 2.804 8.413 2.804s28.04 51.41 39.257 61.691 27.107 35.519 24.303 37.388-23.368 14.956-25.237 11.217-9.347-17.76-14.02-20.564-28.042-33.65-34.585-36.453-21.498-47.67-21.498-47.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M344.848 372.438c.935 0 8.413 2.804 8.413 2.804s28.04 51.41 39.257 61.691 27.107 35.519 24.303 37.388-23.368 14.956-25.237 11.217-9.347-17.76-14.02-20.564-28.042-33.65-34.585-36.453-21.498-47.67-21.498-47.67z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 315.872,
    cy: 272.424,
    r: 27.574,
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M353.26 375.242s-14.955 17.76-16.824 18.694c-.701.356-5.375 2.421-10.927 4.87-9.207 4.057-20.853 9.151-20.853 9.151s-7.478 4.674-11.217 4.674-24.302 10.281-24.302 10.281-14.955 11.217-24.303 11.217-.934 5.608-13.086 4.674-1.869-35.52 3.74-40.193 6.542-23.368 5.608-28.976 4.673-26.172 12.15-52.344 23.369-15.89 23.369-15.89 9.347-5.608 10.281-5.608 10.282 15.89 12.152 25.237c1.159 5.795 8.786 17.694 14.413 25.901 3.449 5.038 6.15 8.683 6.15 8.683s0-1.747-.047-4.159c-.074-4.169-.299-10.291-.888-12.665-.934-3.74-1.869-23.368-1.869-23.368s0-.935 2.804-.935 25.237 34.585 25.237 34.585l1.87 18.694 3.196 3.654z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M353.26 375.242s-14.955 17.76-16.824 18.694c-.701.356-5.375 2.421-10.927 4.87-26.938-6.832-57.774-22.162-57.774-22.162s-8.88-31.312-1.402-45.333 28.976 1.87 28.976 1.87 8.188 6.327 18.152 13.749c1.981 1.477 4.028 3 6.103 4.524 10.843 7.973 22.218 16.002 26.873 18.18.85.393 2.029 1 3.477 1.785z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M259.79 375.242s69.168 21.499 86.928 23.368 49.54 37.388 52.343 36.454 22.433-24.303 17.76-28.042-60.382-37.388-70.384-42.061-51.128-36.454-51.128-36.454-21.499-15.89-28.976-1.87-6.543 48.605-6.543 48.605z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M295.309 479.93s-11.217-8.413-18.694-6.543-16.825 7.477-15.89 19.629a200.105 200.105 0 0 0 2.804 21.498h.934l2.804-16.825s8.413 3.739 10.282 10.282 25.237 19.629 30.846 14.955-5.609-10.282-5.609-10.282z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M295.309 479.93s-11.217-8.413-18.694-6.543-16.825 7.477-15.89 19.629a200.105 200.105 0 0 0 2.804 21.498h.934l2.804-16.825s8.413 3.739 10.282 10.282 25.237 19.629 30.846 14.955-5.609-10.282-5.609-10.282z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M315.872 487.407s80.385-9.347 76.646-24.302-31.78-31.78-31.78-31.78l-46.735 9.347-30.618 33.135 11.924 6.123z",
    fill: "#3c354c"
  }), React.createElement("path", {
    d: "M315.872 487.407s80.385-9.347 76.646-24.302-31.78-31.78-31.78-31.78l-46.735 9.347-30.618 33.135 11.924 6.123z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M279.419 500.493s-15.89 27.107-20.564 28.042-10.282 6.543-3.739 18.694a66.383 66.383 0 0 1 7.478 23.367h1.87l-.935-16.824s12.15 19.629 13.086 27.106 35.518 14.956 41.127 4.674-7.478-17.76-7.478-17.76-19.629-21.498-16.825-36.453 5.609-18.694 5.609-18.694z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M228.01 433.194s-8.413 53.279 22.433 51.41 95.34-40.193 95.34-40.193l19.629-21.499s14.02-19.628-9.347-25.237-61.691 14.021-61.691 14.021l-57.952 25.237z",
    fill: "#3c354c"
  }), React.createElement("path", {
    d: "M361.673 418.239l3.739 4.673s-57.017 92.537-62.626 93.471-25.237-13.086-25.237-15.89 7.478-18.694 9.347-20.563 20.564-44.866 24.303-47.67 50.474-14.021 50.474-14.021z",
    fill: "#3c354c"
  }), React.createElement("ellipse", {
    cx: 317.274,
    cy: 250.926,
    rx: 30.845,
    ry: 21.031,
    fill: "#3c354c"
  }), React.createElement("rect", {
    x: 603,
    y: 272.5,
    width: 284,
    height: 22,
    rx: 5.476,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 537,
    y: 352.5,
    width: 416,
    height: 15,
    rx: 5.476,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 537,
    y: 396.5,
    width: 416,
    height: 15,
    rx: 5.476,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 537,
    y: 440.5,
    width: 416,
    height: 15,
    rx: 5.476,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 537,
    y: 484.5,
    width: 416,
    height: 15,
    rx: 5.476,
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("rect", {
    x: 865,
    y: 552.5,
    width: 88,
    height: 26,
    rx: 7.028,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1053.103 506.116a30.114 30.114 0 0 0 3.983-15.266c0-13.797-8.544-24.98-19.083-24.98s-19.082 11.183-19.082 24.98a30.114 30.114 0 0 0 3.983 15.266 31.248 31.248 0 0 0 0 30.532 31.248 31.248 0 0 0 0 30.532 31.248 31.248 0 0 0 0 30.532 30.114 30.114 0 0 0-3.983 15.266c0 13.797 8.543 24.981 19.082 24.981s19.083-11.184 19.083-24.98a30.114 30.114 0 0 0-3.983-15.267 31.248 31.248 0 0 0 0-30.532 31.248 31.248 0 0 0 0-30.532 31.248 31.248 0 0 0 0-30.532z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1038.003,
    cy: 460.318,
    rx: 19.083,
    ry: 24.981,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 1038.003,
    cy: 429.786,
    rx: 19.083,
    ry: 24.981,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M1109.439 220.845a91.61 91.61 0 0 0 7.106-10.461l-50.14-8.235 54.228.403a91.566 91.566 0 0 0 1.746-72.426l-72.755 37.742 67.097-49.321A91.413 91.413 0 1 0 965.75 220.845a91.458 91.458 0 0 0-10.425 16.67l65.087 33.814-69.4-23.292a91.46 91.46 0 0 0 14.738 85.837 91.406 91.406 0 1 0 143.689 0 91.418 91.418 0 0 0 0-113.03z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M946.188 277.36a91.013 91.013 0 0 0 19.562 56.514 91.406 91.406 0 1 0 143.689 0c12.25-15.553-163.25-66.774-163.25-56.515z",
    opacity: 0.1
  }));
};

UndrawFashionBlogging.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFashionBlogging;