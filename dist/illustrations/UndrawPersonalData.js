function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPersonalData = _props => {
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
    viewBox: "0 0 990 808.857",
    style: style
  }, props), React.createElement("path", {
    d: "M942.085 309.387C897.168 132.765 741.968 5.269 559.796.156 463.488-2.548 362.144 29.393 288.36 141.168c-131.9 199.808 8.105 337.882 105.713 403.492a610.757 610.757 0 0 1 126.241 113.465c65.931 78.238 192.767 175.459 343.824 23.128 109.485-110.41 107.866-254.219 77.948-371.866z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M990 579.673c0 84.037-213.166 229.184-486.546 229.184S0 667.467 0 583.43s410.465-216.034 503.454-78.9S990 495.637 990 579.674z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M990 579.673c0 84.037-213.166 229.184-486.546 229.184S0 667.467 0 583.43s410.465-216.034 503.454-78.9S990 495.637 990 579.674z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M990 583.43c0 84.038-221.619 152.163-495 152.163S0 667.468 0 583.43s402.011-289.298 495-152.163 495 68.126 495 152.163z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 686.613,
    cy: 609.73,
    rx: 144.649,
    ry: 54.478,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 105.199,
    cy: 575.916,
    rx: 77.021,
    ry: 29.008,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M21.318 449.87c0 60.13 37.722 108.785 84.339 108.785",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M105.657 558.655c0-60.804 42.095-110.007 94.117-110.007M51.875 455.321c0 57.117 24.055 103.334 53.782 103.334",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M105.657 558.655c0-77.695 48.655-140.564 108.784-140.564",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M87.914 559.422s11.96-.368 15.565-2.935 18.398-5.632 19.293-1.515 17.974 20.474 4.47 20.583-31.375-2.104-34.973-4.295-4.355-11.838-4.355-11.838z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M127.484 574.122c-13.504.109-31.376-2.104-34.974-4.295-2.74-1.669-3.832-7.658-4.197-10.42l-.4.015s.758 9.646 4.356 11.838 21.47 4.404 34.974 4.295c3.898-.032 5.244-1.418 5.17-3.472-.541 1.24-2.028 2.015-4.93 2.039z",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 380.502,
    cy: 432.026,
    rx: 99.269,
    ry: 37.387,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M272.39 269.57c0 77.499 48.619 140.21 108.702 140.21",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M381.092 409.78c0-78.37 54.255-141.784 121.303-141.784M311.775 276.596c0 73.615 31.003 133.183 69.317 133.183",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M381.092 409.78c0-100.139 62.71-181.169 140.208-181.169",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M358.224 410.768s15.415-.475 20.061-3.783 23.713-7.259 24.866-1.953 23.166 26.388 5.762 26.528-40.439-2.71-45.076-5.535-5.613-15.257-5.613-15.257z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M409.224 429.713c-17.404.14-40.44-2.71-45.076-5.535-3.532-2.151-4.939-9.87-5.41-13.43-.326.014-.514.02-.514.02s.976 12.432 5.613 15.257 27.672 5.676 45.076 5.535c5.024-.04 6.76-1.828 6.664-4.475-.698 1.6-2.614 2.598-6.353 2.628z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M667.408 54.953a46.524 46.524 0 0 1 46.523 46.523V148h-93.047v-46.524a46.524 46.524 0 0 1 46.524-46.523z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M706.44 145.24l-.678 4.392-2.476 16.11v24.445L674.9 203.592l-26.022 2.365-10.251-33.48-1.577-5.158s.457-.307 1.254-.836c.694-.473 1.656-1.12 2.807-1.892a899.81 899.81 0 0 0 13.287-9.1c7.885-5.52 0-39.427 0-39.427l26.021-2.365s2.366 6.308 4.732 19.713c1.774 10.054 12.86 11.678 18.294 11.86a26.42 26.42 0 0 0 2.996-.032zM622.855 514.276v58.351h15.771l7.885-60.717-23.656 2.366z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M631.53 552.914l-9.463-1.577s-3.943 31.541-7.886 38.638-25.233 36.273-13.405 37.85 27.6 0 28.388-3.943 7.096-27.599 7.885-26.022 0 17.348 0 17.348h3.154v-18.925s13.405-9.462 9.463-14.193-7.886-16.56-7.886-16.56l.789-11.828z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#ffb9b9",
    d: "M742.713 514.276v58.351h-15.771l-7.885-60.717 23.656 2.366z"
  }), React.createElement("path", {
    d: "M734.04 552.914l9.462-1.577s3.942 31.541 7.885 38.638 25.233 36.273 13.405 37.85-27.599 0-28.387-3.943-7.097-27.599-7.886-26.022 0 17.348 0 17.348h-3.154v-18.925s-13.405-9.462-9.462-14.193 7.885-16.56 7.885-16.56L723 553.702z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 667.013,
    cy: 101.871,
    r: 29.964,
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M760.85 232.768l-19.714 73.334-2.366 26.021-14.193-26.021s7.885-11.828 9.462-19.714 8.674-49.678 8.674-49.678l-22.174-47.667-.914-1.963-7.665-.047-7.885-10.251 4.73-12.617v-9.462l-3.043-5.07-1.687-2.816 2.365-1.577 12.617-1.577a5.339 5.339 0 0 1 1.545.103c3.304.607 11.284 4.234 17.38 24.342 7.885 26.021 22.867 64.66 22.867 64.66zM648.877 223.305v47.313l-26.022 72.545s-6.308 29.964-25.233 31.541 12.617-35.484 12.617-35.484l20.502-78.065v-41.004s-5.52-21.29-7.097-30.753c-1.175-7.065 1.159-14.564 2.42-17.915.426-1.136.734-1.798.734-1.798l10.251-3.154 1.254-.048.323 5.993.789 14.557z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M713.537 250.116s5.52 17.347 6.308 18.136-17.347 3.943-17.347 3.943h-34.696l-17.348-7.886 1.577-14.982z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M722.211 260.367s-1.577 17.347 2.366 23.656 14.193 18.136 17.347 52.832 7.097 165.592 8.674 171.112 6.309 12.617 1.577 13.405-41.792 9.463-41.792 0 0-12.616-2.366-14.193S677.264 381.8 677.264 381.8l-26.021 128.532s10.25 14.194-5.52 12.616-43.37-3.942-40.216-11.828a77.034 77.034 0 0 0 3.943-11.828l15.77-141.936s3.155-59.93 23.657-91.865l1.577-7.6s29.176 2.475 39.427 5.629 32.33-3.154 32.33-3.154z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M720.54 189.043c-.663 8.619-4.574 60.024-3.849 65.804 0 0 3.943 4.731-7.885 2.365s-46.524 0-50.467.789-8.673 3.943-8.673-1.577 1.577-22.08-.789-24.445-14.194-22.867-13.405-28.387c.568-3.967-5.78-22.166-9.407-32.11.425-1.135.733-1.797.733-1.797l10.251-3.154 1.254-.048c.694-.473 1.656-1.12 2.807-1.892l3.824 18.499 1.577 6.308s26.022 0 46.524-14.982l10.409-29.144a26.42 26.42 0 0 0 2.996-.032l12.617-1.577a5.339 5.339 0 0 1 1.545.103l-11.796 35.381 10.819 7.933 1.009.741s-.032.434-.095 1.222z",
    fill: "#ff6584"
  }), React.createElement("path", {
    fill: "#2f2e41",
    d: "M688.698 95.956h-41.792l-9.463-24.444h58.352l-7.097 24.444z"
  }), React.createElement("ellipse", {
    cx: 742.443,
    cy: 153.356,
    rx: 2.366,
    ry: 6.308,
    transform: "rotate(-16.16 529.442 500.377)",
    fill: "#ffb9b9"
  }), React.createElement("ellipse", {
    cx: 801.584,
    cy: 153.356,
    rx: 6.308,
    ry: 2.366,
    transform: "rotate(-73.84 718.758 200.443)",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M440.522 361.76h161.556v205.702H440.522z"
  }), React.createElement("rect", {
    x: 467.761,
    y: 414.83,
    width: 107.078,
    height: 30.057,
    rx: 2.774,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 549.478,
    cy: 420.465,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 557.932,
    cy: 420.465,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 566.385,
    cy: 420.465,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 467.761,
    y: 449.583,
    width: 107.078,
    height: 30.057,
    rx: 2.774,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 549.478,
    cy: 455.219,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 557.932,
    cy: 455.219,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 566.385,
    cy: 455.219,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("rect", {
    x: 467.761,
    y: 484.336,
    width: 107.078,
    height: 30.057,
    rx: 2.774,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 549.478,
    cy: 489.972,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 557.932,
    cy: 489.972,
    r: 2.818,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 566.385,
    cy: 489.972,
    r: 2.818,
    fill: primaryColor
  }));
};

UndrawPersonalData.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPersonalData;