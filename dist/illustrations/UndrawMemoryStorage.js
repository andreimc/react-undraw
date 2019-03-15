function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMemoryStorage = _props => {
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
    viewBox: "0 0 793.58 828",
    style: style
  }, props), React.createElement("ellipse", {
    cx: 400.981,
    cy: 776,
    rx: 294,
    ry: 52,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M155.964 286.205c0-75.756 111.082-137.168 248.11-137.168s248.11 61.412 248.11 137.168",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M482.087 201.85h-201.85q-59.885-100.925 0-201.85h201.85q-83.733 100.925 0 201.85z",
    fill: "#e6e6e6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M309.072 24.03h113.741v14.418H309.072z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M272.227 71.289h150.587v4.806H272.227zM272.227 96.119h150.587v4.806H272.227zM272.227 120.95h150.587v4.806H272.227z"
  }), React.createElement("path", {
    d: "M562.677 648.66c0 64.016 40.16 115.817 89.79 115.817",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M652.467 764.477c0-64.736 44.817-117.119 100.202-117.119M595.21 654.463c0 60.808 25.609 110.014 57.257 110.014",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M652.467 764.477c0-82.718 51.801-149.652 115.818-149.652",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M633.578 765.293s12.734-.392 16.571-3.125 19.588-5.996 20.54-1.613 19.137 21.798 4.76 21.914-33.404-2.24-37.234-4.573-4.637-12.603-4.637-12.603z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M675.706 780.943c-14.377.116-33.405-2.24-37.235-4.572-2.917-1.777-4.08-8.153-4.468-11.094l-.425.016s.806 10.27 4.637 12.603 22.858 4.689 37.234 4.573c4.15-.034 5.584-1.51 5.505-3.697-.577 1.321-2.16 2.146-5.248 2.171z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M357.83 157.682c1.169.536 2.575-.263 3.264-1.35 2.624-4.134-2.207-9.465-1.161-14.248.838-3.833 5.193-6.108 6.084-9.928.865-3.713-1.801-7.897 0-11.257 1.412-2.631 4.939-3.324 7.89-2.863s5.75 1.758 8.732 1.94c3.972.242 7.758-1.506 11.642-2.373s8.622-.527 10.907 2.731c2.934 4.184-.042 10.01.98 15.016.81 3.975 4.138 7.267 4.21 11.324.025 1.442-3.765.28-3.564 1.708s-1.59.171-.158.001a2.837 2.837 0 0 0 2.156-2.563c.17-1.19 2.405-1.586 2.38-2.787-.061-2.815 5.029-.917 5.867-3.606a27.26 27.26 0 0 0-1.114-19.017c-1.142-2.56-2.696-4.985-3.247-7.734-.748-3.733.429-7.74-.805-11.341-1.662-4.854-7.16-7.328-12.267-7.831s-10.294.397-15.37-.344c-4.548-.664-8.95-2.635-13.538-2.35-5.504.343-10.294 3.89-14.109 7.872s-7.052 8.561-11.385 11.972a22.33 22.33 0 0 0-3.65 3.143c-2.207 2.69-2.431 6.52-1.817 9.945s1.95 6.692 2.514 10.125c.53 3.226.366 6.522.594 9.784s.906 6.622 2.87 9.235a8.716 8.716 0 0 0 6.783 3.544c.918.02 1.694-.804 2.62-.59 1.16.27 1.663 1.37 2.692 1.842z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#a0616a",
    d: "M318.546 394.707l3.404 20.912 6.809-9.241-3.891-14.103-6.322 2.432z"
  }), React.createElement("path", {
    d: "M322.923 236.65l-5.36 14.127s-5.34 71.953-5.34 77.303 3.891 73.922 5.35 76.84c0 0 6.323-9.24 14.59-7.782s4.863-24.316 4.863-24.316l7.782-63.709-1.46-32.097z",
    fill: "#575a89"
  }), React.createElement("path", {
    d: "M322.923 236.65l-5.36 14.127s-5.34 71.953-5.34 77.303 3.891 73.922 5.35 76.84c0 0 6.323-9.24 14.59-7.782s4.863-24.316 4.863-24.316l7.782-63.709-1.46-32.097z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M355.993 158.838s16.049 40.852 6.809 48.633 51.55-13.13 51.55-13.13l-1.459-5.35s-19.94-7.782-10.213-30.153-46.687 0-46.687 0z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M355.993 158.838s16.049 40.852 6.809 48.633 51.55-13.13 51.55-13.13l-1.459-5.35s-19.94-7.782-10.213-30.153-46.687 0-46.687 0z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M330.704 704.496s-6.808-1.945-10.699 2.918-18.48 17.022-18.48 17.022-28.207-2.918-32.098 11.185 44.256 14.104 55.928 10.7 14.103 0 14.103 0 35.988 2.918 35.988-2.918-3.404-25.776-3.404-25.776zM444.99 737.08l-6.321 19.453s-18.967 26.262-8.268 31.612 48.633 10.699 48.633-3.405v-26.748s-3.89-18.966-7.782-20.912-26.261 0-26.261 0z",
    fill: "#575a89"
  }), React.createElement("path", {
    d: "M337.591 387.59s-20.504 17.816-20.018 20.247 10.213 158.543 10.213 158.543l5.35 101.156s-6.809 23.83-3.404 29.18-4.864 6.808-4.864 6.808 35.016 31.611 49.606 17.994L388.09 544.98l37.447 128.39s6.322 68.086 13.617 68.086 36.96 1.46 36.474-2.431 1.46-33.557-1.945-51.065-26.261-156.11-26.261-156.11-1.966-118.822 3.15-129.929-2.664-22.778-2.664-22.778l-34.043-13.13-40.851 4.863z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 378.851,
    cy: 141.331,
    r: 34.043,
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M461.526 214.766a30.537 30.537 0 0 0-21.398-19.453 188.628 188.628 0 0 1-28.694-9.727s-34.529 16.535-41.337 16.535-6.809-4.376-6.809-4.376-17.508 18.48-26.748 20.425-22.857 24.803-17.994 37.447a70.568 70.568 0 0 0 14.103 21.885s-1.945 68.086 4.377 80.73c0 0-15.562 29.666-.972 31.611s70.517-4.863 80.244 1.946 27.72-1.46 30.152 7.78 7.781 11.186 7.781 11.186 8.268-13.13 3.404-20.912 3.891-175.077 3.891-175.077z",
    fill: "#575a89"
  }), React.createElement("path", {
    d: "M425.538 397.625l-7.781 4.863s8.267 28.693 11.671 29.666 11.418-24.535 11.418-24.535z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M351.994 154.277c1.169.536 2.575-.263 3.264-1.348 2.624-4.135-2.207-9.466-1.16-14.25.837-3.832 5.192-6.107 6.083-9.928.865-3.712-1.801-7.897 0-11.256 1.413-2.632 4.939-3.324 7.89-2.863s5.75 1.758 8.732 1.94c3.972.242 7.758-1.507 11.642-2.373s8.622-.527 10.907 2.731c2.934 4.183-.042 10.009.98 15.015.81 3.976 10.053 6.766 10.89 4.078a27.26 27.26 0 0 0-1.113-19.017c-1.142-2.561-2.696-4.985-3.247-7.734-.748-3.733.429-7.74-.804-11.342-1.662-4.853-7.162-7.328-12.267-7.83s-10.295.397-15.371-.344c-4.548-.664-8.95-2.635-13.538-2.35-5.504.343-10.293 3.89-14.109 7.871s-7.052 8.562-11.385 11.973a22.33 22.33 0 0 0-3.65 3.143c-2.207 2.69-2.431 6.52-1.817 9.945s1.95 6.691 2.514 10.124c.53 3.227.366 6.523.595 9.784s.905 6.622 2.87 9.236a8.716 8.716 0 0 0 6.782 3.543c.918.022 1.694-.804 2.62-.588 1.16.269 1.663 1.369 2.692 1.84z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M442.316 223.277l15.806-8.511s38.42 91.43 29.18 116.718-44.743 77.326-44.743 77.326-28.207-5.836-25.289-11.672 21.885-43.283 23.344-48.146 11.185-36.474 6.808-39.879-12.887-82.432-12.887-82.432z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M442.073 209.416l19.453 5.35s38.42 91.43 29.18 116.718-44.743 77.326-44.743 77.326-28.206-5.836-25.289-11.672 21.885-43.283 23.344-48.146 11.186-36.474 6.809-39.879-25.29-87.538-25.29-87.538z",
    fill: "#575a89"
  }), React.createElement("path", {
    d: "M652.184 286.205c0 79.425-111.083 143.812-248.11 143.812s-248.11-64.387-248.11-143.812M607.053 432.058c-55.459 29.91-127.822 48.01-206.981 48.01-75.897 0-145.547-16.638-200.04-44.373M527.978 111.906c105.544 27.74 180.712 88.761 187.702 160.63M99.163 225.823c17.784-32.686 50.271-61.45 92.837-83.549",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M317.358 575.707h201.85q59.885-100.926 0-201.85h-201.85q83.733 100.924 0 201.85z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M384.146 412.304h113.741v14.418H384.146z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M375.335 455.558h150.587v4.806H375.335zM375.335 480.388h150.587v4.806H375.335z"
  }), React.createElement("path", {
    d: "M231.793 438.7H29.943q-59.885-100.926 0-201.851h201.85q-83.733 100.925 0 201.85z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M52.37 260.879h113.741v14.418H52.37z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M27.539 300.928h150.587v4.806H27.539zM27.539 325.759h150.587v4.806H27.539zM27.539 350.59h150.587v4.806H27.539zM27.539 375.421h150.587v4.806H27.539z"
  }), React.createElement("path", {
    d: "M561.787 345.72h201.85q59.885-100.925 0-201.85h-201.85q83.732 100.925 0 201.85z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M626.172 163.894h113.741v14.418H626.172z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M614.157 203.944h150.587v4.806H614.157z"
  }));
};

UndrawMemoryStorage.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMemoryStorage;