import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCheckingBoxes = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1177 643.22" style={style} {...props}>
      <path
        d="M458.33 127.92l-51 63.17 40.65-70.43a101.89 101.89 0 0 0-19.68-9.36 101.35 101.35 0 1 0-202.11-5.53l92.12 6.06-90.5 8.13a101.5 101.5 0 0 0 44.88 66.65l50.43-32.72-41.94 37.6a101.56 101.56 0 0 0 12.88 5.54 101.33 101.33 0 0 0 67.44 105.58 101.34 101.34 0 0 0 137.86 104.32 34.76 34.76 0 0 0 4.69 11.17 33.28 33.28 0 0 0 12.83 11.89 34.62 34.62 0 0 0 18.21 28.54 34.68 34.68 0 0 0 18.21 28.53 34.66 34.66 0 0 0 18.2 28.55 33.4 33.4 0 0 0 5.38 16.64c8.23 12.89 22.89 18.25 32.74 12s11.16-21.83 2.93-34.73a33.44 33.44 0 0 0-12.81-11.91 34.68 34.68 0 0 0-18.24-28.57 34.66 34.66 0 0 0-18.22-28.53 34.62 34.62 0 0 0-18.21-28.53 33.39 33.39 0 0 0-5.39-16.64 34.6 34.6 0 0 0-8-8.86 101.33 101.33 0 0 0-35.91-169.55 101.41 101.41 0 0 0-37.43-89zM667.57 77.21l-9.1 5.77L664 72.93a9 9 0 0 0-5.51-2h-.14a10.79 10.79 0 0 1-1.89-.14l-3.09 2 1.33-2.41a11 11 0 0 1-5.4-4.09l-5.52 3.5 3.49-6.34a16.17 16.17 0 0 0-12.37-6.26c-5.75 0-10.86 3.42-14.16 8.74a10.57 10.57 0 0 1-9.36 5h-.31c-6.34 0-11.48 7.19-11.48 16s5.14 16.05 11.48 16.05a8.62 8.62 0 0 0 4-1 16.56 16.56 0 0 1 13.89-.27 14.52 14.52 0 0 0 11.81 0 16.58 16.58 0 0 1 13.77.27 8.61 8.61 0 0 0 4 1c6.34 0 11.48-7.18 11.48-16.05a20.28 20.28 0 0 0-2.45-9.72z"
        fill="#f2f2f2"
      />
      <path
        d="M650.42 100.7a17 17 0 0 0-9.83 1.07 14.52 14.52 0 0 1-11.81 0 16.58 16.58 0 0 0-13.9.27 8.55 8.55 0 0 1-4 1c-5.64 0-10.32-5.67-11.3-13.15a10.93 10.93 0 0 0 2.82-3c3.3-5.32 8.42-8.73 14.16-8.73s10.79 3.37 14.09 8.63a10.85 10.85 0 0 0 9.36 5.14h.15c4.49-.07 8.34 3.53 10.26 8.77z"
        opacity={0.03}
      />
      <path
        d="M1004.57 38.21l-9.1 5.77 5.53-10.05a9 9 0 0 0-5.51-2h-.14a10.79 10.79 0 0 1-1.89-.14l-3.09 2 1.33-2.41a11 11 0 0 1-5.4-4.09l-5.52 3.5 3.49-6.34a16.17 16.17 0 0 0-12.37-6.26c-5.75 0-10.86 3.42-14.16 8.74a10.57 10.57 0 0 1-9.36 5h-.31c-6.34 0-11.48 7.19-11.48 16s5.14 16.05 11.48 16.05a8.62 8.62 0 0 0 4-1 16.56 16.56 0 0 1 13.89-.27 14.52 14.52 0 0 0 11.81 0 16.58 16.58 0 0 1 13.77.27 8.61 8.61 0 0 0 4 1c6.34 0 11.48-7.18 11.48-16.05a20.28 20.28 0 0 0-2.45-9.72z"
        fill="#f2f2f2"
      />
      <path
        d="M987.42 61.7a17 17 0 0 0-9.83 1.07 14.52 14.52 0 0 1-11.81 0 16.58 16.58 0 0 0-13.9.27 8.55 8.55 0 0 1-4 1c-5.64 0-10.32-5.67-11.3-13.15a10.93 10.93 0 0 0 2.82-3c3.3-5.32 8.42-8.73 14.16-8.73s10.79 3.37 14.09 8.63a10.85 10.85 0 0 0 9.36 5.14h.15c4.49-.07 8.34 3.53 10.26 8.77z"
        opacity={0.03}
      />
      <path
        d="M779.84 132.61l14.66 9.32-8.88-16.15a14.48 14.48 0 0 1 8.85-3.15h.23a17.08 17.08 0 0 0 3-.22l4.95 3.14-2.15-3.86a17.78 17.78 0 0 0 8.67-6.58l8.87 5.62-5.54-10.19c5.19-6.22 12.18-10 19.87-10 9.23 0 17.44 5.48 22.75 14a17 17 0 0 0 15 8.11h.5c10.18 0 18.43 11.54 18.43 25.78s-8.25 25.79-18.43 25.79a13.86 13.86 0 0 1-6.43-1.61 26.59 26.59 0 0 0-22.31-.43 23.28 23.28 0 0 1-19 0 26.64 26.64 0 0 0-22.12.43 13.9 13.9 0 0 1-6.35 1.57c-10.19 0-18.44-11.54-18.44-25.79a32.78 32.78 0 0 1 3.87-15.78z"
        fill="#f2f2f2"
      />
      <path
        d="M807.39 170.38a27.36 27.36 0 0 1 15.8 1.72 23.28 23.28 0 0 0 19 0 26.61 26.61 0 0 1 22.32.43 13.82 13.82 0 0 0 6.42 1.61c9.05 0 16.57-9.11 18.14-21.13a17.44 17.44 0 0 1-4.52-4.88c-5.31-8.54-13.52-14-22.75-14s-17.33 5.42-22.64 13.88a17.44 17.44 0 0 1-15 8.25h-.23c-7.26-.07-13.5 5.71-16.54 14.12z"
        opacity={0.03}
      />
      <ellipse cx={588.5} cy={622.22} rx={588.5} ry={21} fill="#3f3d56" />
      <rect x={171.5} y={155.97} width={834} height={456} rx={20.42} fill="#f2f2f2" />
      <path
        d="M1005.5 176.39v11.58h-834v-11.58a20.42 20.42 0 0 1 20.42-20.42h793.16a20.42 20.42 0 0 1 20.42 20.42z"
        fill="#3f3d56"
      />
      <circle cx={193} cy={172.47} r={6} fill={primaryColor} />
      <circle cx={208} cy={172.47} r={6} fill={primaryColor} />
      <circle cx={223} cy={172.47} r={6} fill={primaryColor} />
      <rect x={298.5} y={240.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={410.5} y={240.97} width={96} height={78} rx={9.29} fill={primaryColor} />
      <rect x={522.5} y={240.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={634.5} y={240.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={746.5} y={240.97} width={96} height={78} rx={9.29} fill={primaryColor} />
      <rect x={298.5} y={371.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={410.5} y={371.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={522.5} y={371.97} width={96} height={78} rx={9.29} fill={primaryColor} />
      <rect x={634.5} y={371.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={746.5} y={371.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={298.5} y={502.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={410.5} y={502.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={522.5} y={502.97} width={96} height={78} rx={9.29} fill="#fff" />
      <rect x={634.5} y={502.97} width={96} height={78} rx={9.29} fill={primaryColor} opacity={0.3} />
      <rect x={746.5} y={502.97} width={96} height={78} rx={9.29} fill="#fff" />
      <path
        d="M528.72 226.61l-5.06-5.09a2.68 2.68 0 0 0-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 0 0-3.78 0l-5.11 5.05a2.72 2.72 0 0 0 0 3.82l20.39 20.55a2.72 2.72 0 0 0 3.82 0l38.74-38.46a2.68 2.68 0 0 0 0-3.82zM868.72 226.61l-5.06-5.09a2.68 2.68 0 0 0-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 0 0-3.78 0l-5.11 5.05a2.72 2.72 0 0 0 0 3.82l20.39 20.55a2.72 2.72 0 0 0 3.82 0l38.74-38.46a2.68 2.68 0 0 0 0-3.82zM640.72 356.61l-5.06-5.09a2.68 2.68 0 0 0-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 0 0-3.78 0l-5.11 5.05a2.72 2.72 0 0 0 0 3.82l20.39 20.55a2.72 2.72 0 0 0 3.82 0l38.74-38.46a2.68 2.68 0 0 0 0-3.82zM751.72 492.61l-5.06-5.09a2.68 2.68 0 0 0-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 0 0-3.78 0l-5.11 5a2.72 2.72 0 0 0 0 3.82l20.39 20.55a2.72 2.72 0 0 0 3.82 0l38.74-38.46a2.68 2.68 0 0 0 0-3.77z"
        fill="#3acc6c"
      />
      <path
        d="M1012.4 618.39c-3-5.51.4-12.27 4.29-17.18s8.61-10 8.51-16.29c-.15-9-9.7-14.32-17.33-19.09a84 84 0 0 1-15.56-12.51 22.8 22.8 0 0 1-4.78-6.4c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26 1.91-38.49"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M973.5 496.36a14 14 0 0 1 7-11.5l3.14 6.22-.1-7.53a14.22 14.22 0 0 1 4.63-.56 14 14 0 1 1-14.67 13.37zM998.5 591.35a14 14 0 1 0-.68-11.3l8.77 7.13-9.65-2.23a14 14 0 0 0 1.56 6.4zM1005.5 564.1a14 14 0 0 0 4.4-27.49l.08 5.78-3.18-6.29a14 14 0 0 0-14.67 13.36 13.84 13.84 0 0 0 .6 4.79 14 14 0 0 0 12.77 9.85zM971.38 541.43a14 14 0 1 0-6.21-26.27l2.48 6.8-5.1-4.9a14 14 0 0 0-4.53 9.69 13.79 13.79 0 0 0 .35 3.87 14 14 0 0 0 13.01 10.81z"
        fill="#57b894"
      />
      <path
        d="M975.38 500.1c3.24.35 6.39 1.36 9.64 1.56s6.82-.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54-3.33 14 14 0 1 1-26.24 9.32q.8.03 1.59.12zM971.38 541.43a14 14 0 0 0 13.35-20 10.37 10.37 0 0 0-2.82 2.82c-1 1.51-1.61 3.26-2.78 4.64-2.19 2.57-5.92 3.41-9.31 3.26s-6.66-1.12-10-1.43c-.47 0-.94-.07-1.42-.08a14 14 0 0 0 12.98 10.79zM1005.5 564.1a14 14 0 0 0 13.46-19.76 11.48 11.48 0 0 0-3 2.85c-1.09 1.54-1.77 3.31-3 4.73-2.37 2.64-6.35 3.57-9.93 3.49s-6.83-.93-10.28-1.2a14 14 0 0 0 12.75 9.89zM998.5 591.35a14.017 14.017 0 0 0 25.59-11.45 13.59 13.59 0 0 0-3.08 2.75c-1.34 1.62-2.22 3.47-3.76 5-2.87 2.82-7.5 4-11.63 4.09a60 60 0 0 1-7.12-.39z"
        opacity={0.1}
      />
      <path
        d="M1033.57 612.04s-11.08-.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-2 32.4-4 4.03-10.94 4.03-10.94z"
        fill="#656380"
      />
      <path
        d="M996.92 625.66c12.51.1 29.06-1.95 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h.37s-.7 8.94-4 11-19.89 4.08-32.4 4c-3.61 0-4.85-1.31-4.78-3.21.47 1.12 1.84 1.81 4.53 1.86z"
        opacity={0.2}
      />
      <path
        d="M184.29 613.47c-4.39-8.12.59-18.08 6.31-25.33s12.7-14.78 12.56-24c-.22-13.27-14.3-21.1-25.56-28.14a124.61 124.61 0 0 1-22.94-18.44 33.79 33.79 0 0 1-7-9.44c-2.33-5.19-2.26-11.09-2.11-16.78q.72-28.4 2.8-56.75"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M126.91 433.54a20.68 20.68 0 0 1 10.33-17l4.64 9.17-.14-11.1a20.7 20.7 0 1 1-14.83 18.89zM163.82 573.61a20.69 20.69 0 1 0-1-16.66l12.92 10.51-14.24-3.29a20.61 20.61 0 0 0 2.32 9.44zM174.04 533.43a20.7 20.7 0 0 0 6.56-40.6l.11 8.52-4.69-9.27h-.05a20.7 20.7 0 1 0-1.93 41.35zM123.8 500a20.71 20.71 0 0 0 21.64-19.71 20.44 20.44 0 0 0-2-9.81 20.67 20.67 0 0 0-28.83-9.21l3.65 10-7.52-7.22a20.7 20.7 0 0 0 13 35.93z"
        fill="#57b894"
      />
      <path
        d="M129.7 439.05c4.77.53 9.42 2 14.21 2.31s10.06-.85 13.09-4.58c1.63-2 2.45-4.54 3.83-6.73a14.77 14.77 0 0 1 5.21-4.91 20.7 20.7 0 1 1-38.69 13.74c.78.03 1.57.09 2.35.17zM123.8 500a20.71 20.71 0 0 0 21.64-19.71 20.44 20.44 0 0 0-2-9.81 15.39 15.39 0 0 0-4.16 4.16c-1.47 2.23-2.37 4.8-4.1 6.84-3.22 3.79-8.73 5-13.72 4.8s-9.82-1.64-14.79-2.1c-.69-.06-1.39-.11-2.09-.13A20.69 20.69 0 0 0 123.8 500zM174.04 533.43a20.69 20.69 0 0 0 19.85-29.14 16.69 16.69 0 0 0-4.37 4.21c-1.61 2.27-2.61 4.88-4.5 7-3.49 3.89-9.36 5.26-14.65 5.14-5.12-.12-10.06-1.37-15.15-1.76a20.71 20.71 0 0 0 18.82 14.55zM163.82 573.61a20.7 20.7 0 0 0 37.73-16.89 20.9 20.9 0 0 0-4.55 4c-2 2.4-3.26 5.12-5.54 7.36-4.23 4.15-11.06 5.86-17.14 6a89.06 89.06 0 0 1-10.5-.47z"
        opacity={0.1}
      />
      <path
        d="M215.5 604.12s-16.33-.5-21.26-4-25.12-7.69-26.34-2.07-24.55 28-6.11 28.11 42.85-2.87 47.76-5.87 5.95-16.17 5.95-16.17z"
        fill="#656380"
      />
      <path
        d="M161.5 624.19c18.44.15 42.85-2.87 47.76-5.86 3.74-2.28 5.24-10.46 5.73-14.23h.55s-1 13.17-5.95 16.16-29.32 6-47.76 5.87c-5.32 0-7.16-1.94-7.06-4.74.73 1.71 2.73 2.77 6.73 2.8z"
        opacity={0.2}
      />
      <path
        d="M861.26 563.61a4.83 4.83 0 0 0-.32 1.31c-1.59 10.47-10.74 18.2-14.08 28.25a27.1 27.1 0 0 0 1.18 19.87 6.57 6.57 0 0 1 .91 2.87c0 1-.8 2.09-1.81 2-2.42-.16-4.33-2-6.35-3.3a22.61 22.61 0 0 1-6.46-6 11.18 11.18 0 0 1-1.91-8.43c1.2-5.46 5.37-10.33 6.67-15.77l3.41-14.11a22.07 22.07 0 0 1 2.8-7.53 4.65 4.65 0 0 1 2.36-2 5.58 5.58 0 0 1 1.78-.14c3.95.17 8.06 1.65 11.82 2.98z"
        fill="#ffc1c7"
      />
      <path
        d="M847.25 611.38a1.89 1.89 0 0 1 1.08.08 2.68 2.68 0 0 1 1 1.28 11.72 11.72 0 0 0 4.71 4.73 13.63 13.63 0 0 1 2.3 1.3 2.67 2.67 0 0 1 1.11 2.28c-.16 1.31-1.59 2-2.85 2.39a21.38 21.38 0 0 1-8.34.73 7.31 7.31 0 0 1-3-.84 8.87 8.87 0 0 1-2.31-2.34 58 58 0 0 0-7.4-8.39 32.4 32.4 0 0 1-3.88-3.61 6.44 6.44 0 0 1-1.63-4.88c.39-2.6 2.85-4.3 4.4-6.43 2.49 3.2 5 6.45 6.52 10.21a29.35 29.35 0 0 0 1.86 4.39c.71 1.17 1.73 2.52 3 1.76s1.58-2.34 3.43-2.66z"
        fill="#ff6584"
      />
      <path
        d="M877.31 486.88a13.16 13.16 0 0 1 .89 5.92l-.09 14.93a60 60 0 0 1-.46 8.69c-.79 5.19-2.92 10.1-3.85 15.27-.88 4.85-.71 9.89-2.14 14.61-2.22 7.31-8.1 13.1-10.17 20.46a2.32 2.32 0 0 1-.59 1.19 1.71 1.71 0 0 1-.84.36 8.93 8.93 0 0 1-4.81-.9l-10.75-4.22c-.74.32-1.25-.53-1.21-1.35a3.91 3.91 0 0 1 1.07-2.13 35.75 35.75 0 0 0 3.46-5.33 47.89 47.89 0 0 0 5-19.29 142.59 142.59 0 0 0-.59-20l-1.1-14.42c-.17-2.29-.3-4.77 1-6.68s3.51-2.7 5.64-3.36a91.68 91.68 0 0 1 19.54-3.75z"
        fill="#3c354c"
      />
      <path
        d="M877.31 486.88a13.16 13.16 0 0 1 .89 5.92l-.09 14.93a60 60 0 0 1-.46 8.69c-.79 5.19-2.92 10.1-3.85 15.27-.88 4.85-.71 9.89-2.14 14.61-2.22 7.31-8.1 13.1-10.17 20.46a2.32 2.32 0 0 1-.59 1.19 1.71 1.71 0 0 1-.84.36 8.93 8.93 0 0 1-4.81-.9l-10.75-4.22c-.74.32-1.25-.53-1.21-1.35a3.91 3.91 0 0 1 1.07-2.13 35.75 35.75 0 0 0 3.46-5.33 47.89 47.89 0 0 0 5-19.29 142.59 142.59 0 0 0-.59-20l-1.1-14.42c-.17-2.29-.3-4.77 1-6.68s3.51-2.7 5.64-3.36a91.68 91.68 0 0 1 19.54-3.75z"
        opacity={0.1}
      />
      <path
        d="M900.85 509.5a31.09 31.09 0 0 0-3.59 6.91 37 37 0 0 0-1.21 5.62c-1.4 8.83-2.81 17.74-2.27 26.66a5.62 5.62 0 0 1-5-1.24 14.29 14.29 0 0 1-3.27-4.23 45 45 0 0 1-2.69-5.38 33.69 33.69 0 0 1-2.55-13.11 2.26 2.26 0 0 1 .18-1.07 2.47 2.47 0 0 1 .53-.63c5.87-5.56 9.25-13.19 12.48-20.6a38.1 38.1 0 0 0 2.68-7.57c.53-2.64.57-5.56 2.24-7.67 1.5-1.88 4-2.67 6.34-3a11.93 11.93 0 0 1 5.12.21c1.82.56 6.13 2.69 6.38 4.84s-3.59 4.9-4.84 6.33a121.86 121.86 0 0 0-10.53 13.93z"
        fill="#ffc1c7"
      />
      <path
        d="M897.28 548.61c1.28 2.15 3.07 4.55 2.16 6.87s-4.24 2.84-6.24 1.41a9.62 9.62 0 0 1-1.56-1.5 153.83 153.83 0 0 1-15-19.74c-1.66-2.59-3.28-5.35-3.56-8.41a1.76 1.76 0 0 1 .14-1 1.93 1.93 0 0 1 .78-.66 38.84 38.84 0 0 1 8.66-3.6 18.37 18.37 0 0 0 2.56 9.75 46.56 46.56 0 0 1 3.3 6.68c.68 1.68 1.38 1.81 3.13 1.83 1.41 0 2.42-.17 3.1 1.26 1.08 2.24 1.16 4.81 2.53 7.11z"
        fill="#ff6584"
      />
      <path
        d="M859.8 461.61c12.86.2 25.7 1.1 38.53 2l8.34.59a31.16 31.16 0 0 1 7.27 1.08 31.91 31.91 0 0 1 6.44 3.19 5.65 5.65 0 0 1 1.8 1.44 5.39 5.39 0 0 1 .76 2 11.39 11.39 0 0 1 .47 4.62 11.27 11.27 0 0 1-1.23 3.17l-5.84 11.54c-1.87-.61-3.32-1.83-5.15-2.55a25.41 25.41 0 0 0-6.82-1.3l-6.08-.6a1.73 1.73 0 0 1-.17-1.2c-5.34 1.86-10.66 3.59-16 5.45-9.8 3.41-19.62 6.83-29.06 11.15-1.4.64-3 1.31-4.43.77a4.61 4.61 0 0 1-1.39-.92 14.29 14.29 0 0 1-4.3-8.37 31.22 31.22 0 0 1 .14-9.55c.9-6.51 2.87-13.32 7.85-17.61 2.63-2.33 5.39-4.99 8.87-4.9z"
        fill="#3c354c"
      />
      <path
        d="M910.96 472.85a61.52 61.52 0 0 0-8.26 4.84 6.72 6.72 0 0 0-1.09.89 8.16 8.16 0 0 0-.67.88 16.52 16.52 0 0 0-2.82 5.62"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <path
        d="M778.6 457.26c-1.8 1.51-2.86 3.69-4.13 5.67-3.05 4.8-7.43 8.66-10.44 13.49-1.29 2.08-2.36 4.38-4.2 6-2.2 2-5.24 2.69-8.18 2.92-2.65.19-5.45.06-7.79 1.33-2 1.1-3.4 3.09-4.68 5v.06a2.26 2.26 0 0 0 2.7 3.36 40.25 40.25 0 0 1 6.63-1.93 42 42 0 0 0 5.9-1.34 27.59 27.59 0 0 0 5.28-2.81 34.32 34.32 0 0 0 4.15-2.91c1.61-1.37 3-3 4.52-4.45a70.68 70.68 0 0 1 7-5.08A53.4 53.4 0 0 0 791 459.48a3.88 3.88 0 0 0 .71-2.27 4.11 4.11 0 0 0-1-2c-1.77-2.25-3.38-4.09-5.84-2-1.94 1.61-4.37 2.4-6.27 4.05zM828.91 408.53a3 3 0 0 0 .64 1.76c.66.67 1.75.53 2.69.47a8.89 8.89 0 0 1 7.06 2.45c1.71 1.79 2.38 4.32 2.78 6.77a12.58 12.58 0 0 1-.18 6.16 9.46 9.46 0 0 1-5.09 5.14 23.77 23.77 0 0 1-7.18 1.76 17.93 17.93 0 0 1-6.2 0c-2.43-.56-4.54-2-6.73-3.21a36.86 36.86 0 0 1-4.43-2.5 7 7 0 0 1-2.89-4.06 2.2 2.2 0 0 1 .73-2.35 4.16 4.16 0 0 1 1.12-.34 4.74 4.74 0 0 0 3.41-3.35c.67-2.59-.94-5.2-1.1-7.87a3.73 3.73 0 0 1 .47-2.23 4.9 4.9 0 0 1 2.25-1.6l5-2.24a29.91 29.91 0 0 1 4.71-2.09c1.59-.41 1.7.69 2 2 .37 1.79.7 3.56.94 5.33z"
        fill="#ffc1c7"
      />
      <path
        d="M828.91 408.53a3 3 0 0 0 .64 1.76c.66.67 1.75.53 2.69.47a8.89 8.89 0 0 1 7.06 2.45c1.71 1.79 2.38 4.32 2.78 6.77a12.58 12.58 0 0 1-.18 6.16 9.46 9.46 0 0 1-5.09 5.14 23.77 23.77 0 0 1-7.18 1.76 17.93 17.93 0 0 1-6.2 0c-2.43-.56-4.54-2-6.73-3.21a36.86 36.86 0 0 1-4.43-2.5 7 7 0 0 1-2.89-4.06 2.2 2.2 0 0 1 .73-2.35 4.16 4.16 0 0 1 1.12-.34 4.74 4.74 0 0 0 3.41-3.35c.67-2.59-.94-5.2-1.1-7.87a3.73 3.73 0 0 1 .47-2.23 4.9 4.9 0 0 1 2.25-1.6l5-2.24a29.91 29.91 0 0 1 4.71-2.09c1.59-.41 1.7.69 2 2 .37 1.79.7 3.56.94 5.33z"
        opacity={0.1}
      />
      <circle cx={815.9} cy={400.24} r={12.47} fill="#ffc1c7" />
      <path
        d="M830.39 411.61a17.15 17.15 0 0 1 5.86-1.48 6.93 6.93 0 0 1 5.46 2.16c1.17 1.37 1.56 3.22 2.49 4.75 1.84 3 5.43 4.37 8.3 6.42a6.26 6.26 0 0 1 1.72 1.68c1 1.52.73 3.47.71 5.27a25.46 25.46 0 0 0 3.67 12.62 74.48 74.48 0 0 0 7.9 10.71 10.68 10.68 0 0 1 1.72 2.55c.7 1.68.5 3.71 1.54 5.2a14.53 14.53 0 0 0-7.37 1c-3.61 1.49-3.78 6.77-5.48 10.29-3.14 6.51-7.5 12.34-11.65 18.26a23.32 23.32 0 0 0-2.76 4.57c-.74-1.57-.23-3.44-.32-5.17-.2-3.87-2.44-7.34-3.07-11.16a52.67 52.67 0 0 1-.33-5.76 27.56 27.56 0 0 0-1.87-8.5 54.57 54.57 0 0 0-4.44-8.33 11.76 11.76 0 0 0-3.35-4c-1.66-1.08-3.95-1.39-5-3.07a6.7 6.7 0 0 0-1-1.62 3.74 3.74 0 0 0-1.16-.59 51.09 51.09 0 0 1-5.92-3.28c-2-1.09-4.27-1.9-6.48-1.41a80 80 0 0 1-13.83 12.68c-1.58 1.16-3.28 2.35-4.06 4.15a21.12 21.12 0 0 1-6.57-4.91 3.33 3.33 0 0 1-.7-1c-.51-1.46 1-2.77 2.2-3.69a29.9 29.9 0 0 0 9.94-13.23c1.29-3.39 2.14-7.29 5.08-9.42a17.49 17.49 0 0 0 2.63-1.85 33.28 33.28 0 0 0 2-3.12 5.29 5.29 0 0 1 5.55-1.88 24.52 24.52 0 0 1 3.31 1.59c2.77 1.25 5.95 1 9 .66l11.71-1.19a4 4 0 0 0-.86-3.8 11.63 11.63 0 0 0-1.55-1.23 8.61 8.61 0 0 1-3.02-4.87z"
        fill="#ff6584"
      />
      <path
        d="M822.5 378.69a10.78 10.78 0 0 1 6.27 6.14 25.06 25.06 0 0 0 1.32 3.51 20.25 20.25 0 0 0 3.25 3.62c1.12 1.19 2.08 2.74 1.82 4.35-.1.6-.36 1.16-.44 1.75-.35 2.59 2.59 4.37 3.49 6.82 1.17 3.22-1.38 7.06.18 10.1.59 1.14 1.66 2 2.33 3s.74 2.8-.39 3.41c-1.76.95-3.8-1.83-5.67-1.1-.48.19-.85.6-1.32.81-1.31.59-2.84-.57-3.27-1.94a10.21 10.21 0 0 1 .08-4.26 5.15 5.15 0 0 0-.8-4.09c-.76-.87-2-1.21-2.79-2-1.44-1.46-1.17-3.81-1-5.85.31-4.12-.43-8.63-3.38-11.53a.75.75 0 0 0-.53-.29.85.85 0 0 0-.53.33 24.9 24.9 0 0 1-4.48 3.71 2.82 2.82 0 0 1-1.6.58c-.57 0-1.14-.58-1-1.13a11.75 11.75 0 0 0-3.74 2.74 3.91 3.91 0 0 1-.3-1.72 16.13 16.13 0 0 1-2 3.06 24.91 24.91 0 0 0-2.2 2.72 4 4 0 0 0-.56 3.33c1.12 3.21 6.83 2.47 8.07 5.64.27.71.26 1.49.54 2.19.55 1.36 2 2 3.2 2.9s2.24 2.43 1.52 3.7c-.63 1.09-2.1 1.21-3.32 1.49a8 8 0 0 0-5 3.76 4.72 4.72 0 0 1-1.29 1.77 3.63 3.63 0 0 1-1.63.4c-1.7.14-3.65.18-4.82-1-1.57-1.65-.83-4.65-2.43-6.27-.37-.36-.83-.62-1.18-1a4.46 4.46 0 0 1-.89-3.35c.16-3.33 1.39-6.59 1.2-9.92a56.74 56.74 0 0 0-1.27-6.54 17.6 17.6 0 0 1 3.56-14.39c2.72-3.19 6.27-4.44 10.29-5 3.58-.53 7.04-1.78 10.71-.45z"
        fill="#3c354c"
      />
    </svg>
  );
};

UndrawCheckingBoxes.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCheckingBoxes;
