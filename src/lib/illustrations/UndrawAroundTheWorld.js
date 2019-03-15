import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAroundTheWorld = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1137 776.59" style={style} {...props}>
      <path
        d="M1134.624 437.934c-5.079 43.51-15.63 78.443-30.115 106.303-19.273 37.12-52.24 52.077-81.69 67.727a186.255 186.255 0 0 1-26.463 11.506c-53.59 18.6-113.569 13.665-160.683 3.845a633.42 633.42 0 0 0-100.309-12.682q-14.426-.65-28.881-.645c-14.86.019-282.424 5.097-347.568-126.791-16.084-32.534-27.108-72.275-31.07-120.72-11.207-136.957 50.391-226.906 129.846-285.7C607.996-30.44 814.02-25.776 962.107 88.371c98.642 76.034 191 191.106 172.517 349.563z"
        fill="#3f3d56"
      />
      <path
        d="M941.66 314.697c-41.697-31.172-107.005-60.653-179.178-80.881-65.713-18.42-129.808-27.312-180.49-25.041l-.264-5.894c51.286-2.297 116.046 6.67 182.347 25.254 72.845 20.417 138.86 50.246 181.118 81.836z"
        fill="#f2f2f2"
      />
      <path
        d="M937.331 338.707a196.337 196.337 0 0 1-16.992 80.161q-1.407 3.168-2.932 6.278a197.069 197.069 0 0 1-177.13 110.615c-108.828 0-197.054-88.226-197.054-197.054q0-6.84.466-13.575.22-3.425.572-6.809c10.2-99.253 94.073-176.67 196.016-176.67 108.828 0 197.054 88.226 197.054 197.054z"
        fill={primaryColor}
      />
      <path
        d="M920.34 418.868q-1.408 3.168-2.933 6.278-8.637.938-18.183 1.362c-5.269.236-10.69.354-16.23.354-48.39 0-106.628-8.932-166.122-25.605-66.302-18.584-126.286-44.579-168.906-73.199q-2.177-1.46-4.277-2.926.22-3.425.572-6.809 3.39 2.416 6.991 4.838c42.12 28.278 101.5 53.995 167.213 72.415 58.975 16.53 116.663 25.387 164.499 25.387q8.204 0 15.995-.349 11.345-.513 21.38-1.746z"
        opacity={0.1}
      />
      <path
        d="M882.994 422.144c-48.389 0-106.63-8.933-166.12-25.607-66.302-18.583-126.288-44.579-168.909-73.198-43.51-29.217-63.913-58.005-57.45-81.063 6.462-23.058 38.856-37.049 91.213-39.395l.263 5.894c-24.45 1.096-44.375 4.73-59.223 10.801-14.812 6.057-23.752 14.23-26.572 24.292-2.82 10.063.57 21.691 10.075 34.564 9.53 12.904 24.664 26.365 44.983 40.009 42.114 28.279 101.498 53.997 167.212 72.415 58.976 16.53 116.66 25.388 164.5 25.389q8.199 0 15.99-.349c24.451-1.096 44.377-4.73 59.225-10.8 14.812-6.057 23.752-14.23 26.572-24.293 5.064-18.068-10.24-41.545-43.093-66.106l3.533-4.725c16.906 12.639 29.42 25.097 37.196 37.028 8.336 12.792 11.043 24.7 8.045 35.396-6.463 23.058-38.856 37.048-91.213 39.394-5.268.237-10.687.354-16.227.354z"
        fill="#f2f2f2"
      />
      <circle cx={745.49} cy={103.856} r={2.258} fill="#f2f2f2" />
      <circle cx={445.922} cy={200.214} r={2.258} fill="#f2f2f2" />
      <circle cx={437.642} cy={352.255} r={2.258} fill="#f2f2f2" />
      <circle cx={898.284} cy={117.404} r={1.505} fill="#f2f2f2" />
      <circle cx={1079.681} cy={329.675} r={1.505} fill="#f2f2f2" />
      <circle cx={996.886} cy={260.428} r={1.505} fill="#f2f2f2" />
      <circle cx={582.158} cy={151.275} r={1.505} fill="#f2f2f2" />
      <circle cx={991.617} cy={309.353} r={1.505} fill="#f2f2f2" />
      <circle cx={455.707} cy={460.642} r={1.505} fill="#f2f2f2" />
      <circle cx={545.276} cy={522.362} r={1.505} fill="#f2f2f2" />
      <path
        fill="#f2f2f2"
        d="M675.49 40.826h-2.077v-2.077h-1.114v2.077h-2.078v1.115h2.078v2.077h1.114v-2.077h2.077v-1.115zM899.79 552.65h-2.078v-2.077h-1.114v2.077h-2.077v1.115h2.077v2.077h1.114v-2.077h2.078v-1.115zM1039.036 521.79h-2.077v-2.077h-1.115v2.077h-2.077v1.115h2.077v2.077h1.115v-2.077h2.077v-1.115z"
      />
      <circle cx={743.232} cy={184.407} r={16.559} fill="#3f3d56" />
      <circle cx={616.028} cy={305.589} r={16.559} fill="#3f3d56" />
      <circle cx={798.93} cy={471.932} r={16.559} fill="#3f3d56" />
      <circle cx={743.232} cy={331.18} r={16.559} fill="#3f3d56" />
      <circle cx={624.308} cy={422.255} r={16.559} fill="#3f3d56" />
      <circle cx={832.048} cy={242.364} r={16.559} fill="#3f3d56" />
      <circle cx={886.994} cy={354.513} r={16.559} fill="#3f3d56" />
      <circle cx={743.232} cy={258.923} r={21.828} fill="#fff" />
      <path
        d="M743.232 227.31a30.86 30.86 0 0 0-30.86 30.86c0 17.044 30.86 73.01 30.86 73.01s30.86-55.966 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.914a14.301 14.301 0 1 1 14.3-14.301 14.301 14.301 0 0 1-14.3 14.3z"
        fill="#ff6584"
      />
      <circle cx={624.308} cy={352.255} r={21.828} fill="#fff" />
      <path
        d="M624.308 320.643a30.86 30.86 0 0 0-30.86 30.86c0 17.043 30.86 73.01 30.86 73.01s30.86-55.967 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.913a14.301 14.301 0 1 1 14.3-14.3 14.301 14.301 0 0 1-14.3 14.3z"
        fill="#ff6584"
      />
      <circle cx={886.994} cy={284.514} r={21.828} fill="#fff" />
      <path
        d="M886.994 252.901a30.86 30.86 0 0 0-30.86 30.86c0 17.044 30.86 73.01 30.86 73.01s30.86-55.966 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.914a14.301 14.301 0 1 1 14.301-14.301 14.301 14.301 0 0 1-14.301 14.301z"
        fill="#ff6584"
      />
      <circle cx={743.232} cy={112.15} r={21.828} fill="#fff" />
      <path
        d="M743.232 80.537a30.86 30.86 0 0 0-30.86 30.86c0 17.044 30.86 73.01 30.86 73.01s30.86-55.966 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.914a14.301 14.301 0 1 1 14.3-14.301 14.301 14.301 0 0 1-14.3 14.3z"
        fill="#ff6584"
      />
      <circle cx={798.93} cy={401.932} r={21.828} fill="#fff" />
      <path
        d="M798.93 370.32a30.86 30.86 0 0 0-30.86 30.86c0 17.043 30.86 73.01 30.86 73.01s30.86-55.967 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.913a14.301 14.301 0 1 1 14.301-14.3 14.301 14.301 0 0 1-14.3 14.3z"
        fill="#ff6584"
      />
      <circle cx={616.028} cy={234.084} r={21.828} fill="#fff" />
      <path
        d="M616.028 202.472a30.86 30.86 0 0 0-30.86 30.86c0 17.043 30.86 73.01 30.86 73.01s30.86-55.967 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.913a14.301 14.301 0 1 1 14.301-14.3 14.301 14.301 0 0 1-14.3 14.3z"
        fill="#ff6584"
      />
      <circle cx={832.048} cy={173.117} r={21.828} fill="#fff" />
      <path
        d="M832.048 141.504a30.86 30.86 0 0 0-30.86 30.86c0 17.044 30.86 73.01 30.86 73.01s30.86-55.966 30.86-73.01a30.86 30.86 0 0 0-30.86-30.86zm0 45.914a14.301 14.301 0 1 1 14.301-14.301 14.301 14.301 0 0 1-14.3 14.301z"
        fill="#ff6584"
      />
      <path
        d="M415 757.215c0 10.7-92.9 19.375-207.5 19.375S0 767.916 0 757.215s85.414-34.713 200.013-34.713S415 746.515 415 757.215z"
        fill="#3f3d56"
      />
      <path fill="#2f2e41" d="M137.389 128.482h81.442v67.401h-81.442z" />
      <path
        fill="#a0616a"
        d="M277.255 692.495l7.03 26.948-18.747 2.929-8.787-28.12 20.504-1.757zM144.27 688.394V717.1h-19.918l2.929-28.706h16.989z"
      />
      <path
        d="M262.023 717.1s14.06-6.444 22.262 0 12.302 21.09 12.302 21.09 21.09 26.948-3.515 25.777-25.776-4.101-25.776-8.202 1.171-8.788-2.93-10.545-5.858-9.96-4.686-12.303 2.343-15.817 2.343-15.817zM147.785 712.413s-19.332-12.367-23.433-2.668-9.96 22-9.96 22-16.403 25.777 4.101 26.363 24.02-2.343 25.777-7.616 0-9.373 3.515-9.373 5.273-7.616 3.515-11.13-3.515-17.576-3.515-17.576z"
        fill="#2f2e41"
      />
      <path
        d="M203.44 168.172s-4.687 26.363 7.615 28.12 24.605 7.03 25.191 10.545-48.038 41.009-48.038 41.009l-29.878-9.373s-29.877-7.616-28.706-13.475 3.515-14.06 3.515-14.06 33.979-7.03 34.565-17.575 4.686-27.534 4.686-27.534z"
        fill="#a0616a"
      />
      <path
        d="M203.44 168.172s-4.687 26.363 7.615 28.12 24.605 7.03 25.191 10.545-48.038 41.009-48.038 41.009l-29.878-9.373s-29.877-7.616-28.706-13.475 3.515-14.06 3.515-14.06 33.979-7.03 34.565-17.575 4.686-27.534 4.686-27.534z"
        opacity={0.1}
      />
      <path
        d="M126.11 333.378s21.219 20.264 63.334 18.334 38.6 12.715 38.6 12.715l-1.757 23.434s22.262 97.834 19.333 149.387c0 0 1.171 24.606 9.373 38.08s30.463 113.066 26.948 120.682-29.291 4.686-29.291 4.686-24.02-90.804-35.736-111.308-12.889-32.221-12.889-32.221L164.19 441.172l-5.273 50.381s.586 39.837.586 43.352-.586 31.635-2.93 37.494-11.13 99.592-5.858 115.41-27.534 7.03-27.534 7.03-9.959-101.936-7.03-121.855-4.687-55.654-4.687-55.654-22.261-108.965-9.959-126.54c0 0 8.202-59.755 12.303-59.17z"
        fill="#2f2e41"
      />
      <circle cx={186.743} cy={148.547} r={32.221} fill="#a0616a" />
      <path
        d="M104.433 352.125c.598 1.792 7.587-1.898 14.3-5.947 6.457-3.89 12.649-8.113 12.649-8.113 7.03 22.261 51.553 13.474 51.553 13.474s.112.158.317.44c1.47 1.997 7.815 10.327 15.5 15.963 8.788 6.444 29.293-8.787 29.293-8.787s31.88-76.352 35.958-116.798c.897-8.9.451-16.064-1.98-20.288-13.474-23.433-32.432-20.48-32.432-20.48-3.146 8.23-28.495 20.48-28.495 20.48l-25.19 4.687c-25.192 4.687-32.807-21.676-32.807-21.676-7.03-1.172-19.919 11.717-19.919 11.717-12.302 3.515-18.747 44.523-18.747 44.523s1.225 1.523 3.135 3.955a600.674 600.674 0 0 1 3.79 4.85c.492.633.996 1.29 1.512 1.957 6.496 8.471 14.704 19.608 16.754 24.388 3.515 8.202-3.515 20.505-11.716 19.919s-14.646 32.22-13.475 35.736z"
        fill={primaryColor}
      />
      <path
        d="M187.036 383.76s-27.534 34.564-39.837 22.261 35.736-41.008 35.736-41.008zM117.322 373.215s24.02 36.321 10.545 37.493-29.878-24.02-29.878-24.02z"
        fill="#a0616a"
      />
      <path
        d="M113.984 199.43c3.09-6.819 7.244-13.218 9.223-20.439 2.372-8.654 1.448-17.811 1.166-26.78-.25-7.93.029-15.95 2.007-23.632s5.764-15.054 11.681-20.337c15.092-13.472 42.71-14.44 61.138-8.831 7.265 2.21 15.004 6.421 16.805 13.798.272 1.114.394 2.261.698 3.367 1.508 5.492 7.127 8.968 9.155 14.29 2.622 6.885-1.421 14.372-1.95 21.72-.617 8.58 3.6 16.684 7.757 24.214 2.471 4.476 5.04 9.245 4.795 14.352a18.132 18.132 0 0 1-2.481 7.911c-4.985 8.881-15.162 14.259-25.343 14.527-3.305.087-6.769-.366-9.492-2.241-4.497-3.097-5.815-9.332-4.878-14.711s3.668-10.245 5.807-15.268a71.322 71.322 0 0 0 1.795-4.693 32.224 32.224 0 1 0-21.256 3.605 43.651 43.651 0 0 1-2.114 24.272c-2.482 6.378-6.353 12.105-10.192 17.771-1.835 2.709-3.744 5.492-6.493 7.267a23.04 23.04 0 0 1-5.531 2.362c-8.134 2.616-16.7 4.72-25.162 3.544s-16.844-6.281-19.728-14.324c-2.527-7.048-.497-14.924 2.593-21.743z"
        fill="#2f2e41"
      />
      <ellipse cx={184.4} cy={128.629} rx={35.15} ry={19.918} fill="#2f2e41" />
      <path
        d="M183.252 351.978c1.47 1.998 7.815 10.328 15.5 15.964 8.788 6.444 29.293-8.787 29.293-8.787s31.88-76.352 35.958-116.798a180.944 180.944 0 0 0-7.838-19.702l6.737 27.241s-30.17 24.313-36.615 34.272-.586 43.352 0 48.624-11.717 7.03-17.575 6.444-7.03 4.687-12.302 4.687c-2.549 0-8.097 3.96-13.158 8.055z"
        opacity={0.1}
      />
      <path
        d="M253.236 222.655h8.787s21.676 43.938 19.333 93.734-26.363 69.714-53.897 76.158-39.837 10.545-43.352 6.444-5.273-38.079-5.273-38.079 18.161-16.99 23.434-16.99 6.444-5.272 12.302-4.686 18.161-1.171 17.575-6.444-6.444-38.665 0-48.624 21.09-61.513 21.09-61.513z"
        fill={primaryColor}
      />
      <path
        d="M107.568 265.275a600.674 600.674 0 0 1 3.79 4.85l-3.41-7.047s-.14.796-.38 2.197zM104.433 352.125c.598 1.792 7.587-1.898 14.3-5.947-.07-.351-.146-.714-.24-1.083-1.757-7.03 10.545-24.02 10.545-24.02l8.202-22.261-1.757-29.878-22.614 3.146c6.497 8.471 14.705 19.608 16.755 24.388 3.515 8.202-3.515 20.505-11.716 19.919s-14.646 32.22-13.475 35.736z"
        opacity={0.1}
      />
      <path
        d="M116.15 249.603l-11.717 11.717s-8.201 47.453-8.201 50.382-14.06 21.676-10.545 34.564 5.858 29.878 2.929 33.393-7.03 13.474 0 18.16 15.817-26.948 36.908-18.746c0 0-12.889-20.504-12.303-22.262s3.515-6.444 1.758-13.474 10.545-24.02 10.545-24.02l8.201-22.26-1.757-29.878z"
        fill={primaryColor}
      />
    </svg>
  );
};

UndrawAroundTheWorld.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAroundTheWorld;
