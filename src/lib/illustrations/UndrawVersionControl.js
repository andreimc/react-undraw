import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawVersionControl = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1038.23 693.31" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={320.96} y1={796.01} x2={320.96} y2={284.81} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M615.24 111.4c-64.72-2.25-126.36-23.14-185.23-46S312.85 17.21 249.68 5.1c-40.63-7.79-87.09-8.89-119.83 12.89-31.5 21-41.68 57.15-47.16 90.72-4.11 25.27-6.54 51.85 4.75 75.5 7.83 16.42 21.74 30.22 31.36 45.95 33.46 54.72 9.81 122.2-26.46 175.63-17 25.06-36.74 49-49.87 75.66s-19.2 57.25-7.72 84.47c11.39 27 38.52 47.24 67.9 61.49 59.69 28.94 130 37.23 198.62 41.92 151.82 10.39 304.46 5.89 456.68 1.39 56.34-1.67 112.92-3.36 168.34-12.07 30.78-4.84 62.56-12.52 84.9-31 28.36-23.53 35.39-63.38 16.39-92.88-31.88-49.49-120-61.79-142.31-114.9-12.27-29.23.33-61.8 18.15-88.91 38.24-58.17 102.33-109.19 105.71-175.68 2.32-45.66-28.49-91.39-76.13-113-49.94-22.65-119.18-19.8-156 17.69-37.96 38.56-104.62 53.41-161.76 51.43z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        d="M529.62 754.84c-1-3.62-2-7.28-4-10.43a36.53 36.53 0 0 0-6.55-7.17c-7.25-6.58-16.15-13.26-25.76-11.6a34.39 34.39 0 0 0-8.54 3.12c-1.4.65-2.81 1.3-4.25 1.85a21.17 21.17 0 0 1-12.82 1.12c-2.2-.59-4.25-1.65-6.42-2.31a20.35 20.35 0 0 0-3.15-.68 53.64 53.64 0 0 0 6.09-3.21c10.78-6.6 19.38-18.53 18.18-31.29-.41-4.29-1.88-8.4-3.34-12.45l-3.84-10.62c-1.66-4.6-3.38-9.29-6.41-13.11-3.37-4.26-8.17-7.15-13.13-9.3-10.65-4.63-22.29-6.26-33.78-7.84l-.8-.11V516.68a8 8 0 0 0-8-8H398q-1-6.12-2-12.22c-1.9-11.61-3.87-23.43-9.22-33.88-3.5-6.84-9.07-13.37-16.58-14.71a16.08 16.08 0 0 1-4.31-1c-2.2-1.08-3.4-3.48-5.09-5.25-4.36-4.57-11.45-4.64-17.29-7-5.16-2.05-9.38-5.91-14.08-8.88s-10.54-5.08-15.74-3.15c0 .38-.07.76-.11 1.13l-3.34-1.54c-3.6-1.67-7.27-3.38-10.16-6.12-3.71-3.5-5.69-8.14-7.23-13.07-.16-.51-.31-1-.47-1.55a46.43 46.43 0 0 0 12.44-23.75l.81 2.63a17.45 17.45 0 0 0 .64 1.74 6.86 6.86 0 0 0 2 2.83 3.55 3.55 0 0 0 .84.49 3.5 3.5 0 0 0 .86.22 3.2 3.2 0 0 0 1.24-.09 4.73 4.73 0 0 0 3-2.78 6 6 0 0 0 .35-1.22 6.31 6.31 0 0 0 .07-.76v-.24-.52-.28c0-.1 0-.33-.05-.5v-.26c0-.2-.06-.4-.1-.59s0-.11 0-.16c-.05-.25-.11-.51-.16-.76v-.19c0-.06-.09-.41-.14-.62s-.07-.27-.1-.41v-.06c-.1-.4-.19-.79-.28-1.19a34.38 34.38 0 0 1-.55-10.56 113.08 113.08 0 0 1 2.86-15.35l.21-.91c.08-.35.16-.7.23-1.06.16-.72.32-1.44.47-2.17l.36-1.84.27-1.64v-.21A47.41 47.41 0 0 0 318 330c-.46-5.23-2.08-10.18-5.63-14.12-2.51-2.79-5.82-4.85-8.15-7.78-2.18-2.74-3.41-6.12-5.67-8.81-6.24-7.45-22.26-13.19-32.09-14.19-11.26-1.14-29.45 1.74-38.53 8.39-3.36 2.45-5.66 6-8 9.36-4.3 6.25-9.18 12.49-16.07 16-2.6 1.32-5.58 2.32-7.31 4.62a12.49 12.49 0 0 0-1.95 5.18 102.71 102.71 0 0 0-2.06 19.78v2.5a18.23 18.23 0 0 0 1.56 7.23c.16.34.34.67.53 1l.12.21a39.78 39.78 0 0 1 3.2 5.45 7.22 7.22 0 0 1 .49 1.66 12.24 12.24 0 0 1-.28 4.38c0 .22-.09.44-.13.66l-.09.43c0 .15 0 .3-.08.44-.08.43-.15.86-.21 1.28a9 9 0 0 0 .22 3.46 4.55 4.55 0 0 0 2.22 3 6.5 6.5 0 0 0 1.8.56c.63.11 1.27.18 1.89.32a9.33 9.33 0 0 1 2.29.85 9.22 9.22 0 0 1 1.93 1.24 11 11 0 0 1 .83.84 14 14 0 0 1 1.42 1.94q.32.53.6 1.08a24.67 24.67 0 0 1 1.71 4.52c.26.93.48 1.87.67 2.81.09.42.17.84.24 1.25s.14.83.2 1.24a2.91 2.91 0 0 0 .8-.16c1.47-.53 2.29-2.24 2.75-3.9.08-.28.15-.55.21-.82.23-1 .47-2.1.7-3.15a46.37 46.37 0 0 0 18.25 20.1c.28.83.55 1.65.79 2.49 1.31 4.53 1.94 9.27-.33 13.23-1.62 2.81-4.34 4.54-7.38 5.74a4.88 4.88 0 0 0-1.65-1.4c-2.63-1.32-5.79.28-8 2.25-4 3.62-7.26 8.81-12.52 10-1.9.44-4 .35-5.58 1.51a13 13 0 0 0-2.59 3.4 11.92 11.92 0 0 1-10.23 5.1c-1.83-.09-4-.51-5.25.83-.93 1-1 2.58-2 3.53-1.34 1.32-3.54.68-5.41.6-3.56-.15-6.87 2.15-8.9 5.1s-3 6.48-4 10v.06a7.15 7.15 0 0 0-.73.61 10.55 10.55 0 0 0-2.21 3.58 170.87 170.87 0 0 0-14.1 58.18 6 6 0 0 1-.64 2.82 13.87 13.87 0 0 1-1.47 1.6 5.61 5.61 0 0 0 .93 8 6.3 6.3 0 0 1 1.07-1.42c-.11.46-.21.91-.28 1.32a35.49 35.49 0 0 0-.11 8.8q1.42 20.84 2.87 41.65c.27 3.93.54 7.85.9 11.77q1.05 11.38 3 22.67c.06.34.13.69.22 1-8.15 2.59-15.4 7.27-18.45 15.08-1.06 2.7-1.54 5.64-2.84 8.23-1.43 2.84-3.78 5.11-5.34 7.89-2.69 4.78-2.81 10.64-1.83 16 1.89 10.45 7.54 19.79 15 27.39h-1a15.64 15.64 0 0 0-6.83 2.45c-15.78 9.22-24.8 29-21.51 47.06.65 3.53 1.78 7.11 4.14 9.8a15.51 15.51 0 0 0 7.28 4.46 25.29 25.29 0 0 0 5.37 1c12.3 1 24.21-4.7 36.54-5.18a98 98 0 0 1 12.23.57q8.91.74 17.85.94c9.69.23 15.14-2.35 21.32-9.59a26.1 26.1 0 0 0 3.77-5.94c5.26-.3 11.07-.76 15.27-1.1l.06.58c.23 2 .58 4.3 2.18 5.56a7.61 7.61 0 0 0 3 1.23c10.1 2.48 20.32 5 30.72 5a129.71 129.71 0 0 0 14.59-1.12l18.27-2.11a91 91 0 0 1 15.7 3.42c5.28 1.79 10.21 4.45 15.37 6.56 12 4.86 24.9 6.6 37.68 8.3 2.18.29 4.68.49 6.29-1 2.08-2 1.39-5.34.8-8.14-.24-1.15-.42-2.3-.56-3.46a175.25 175.25 0 0 1 25.24 8.76l1.43.63c.42 2.18 2.43 3.92 4.36 6.27a16 16 0 0 0 2.21 2.74 7.37 7.37 0 0 0 3.17 1.14 147.82 147.82 0 0 0 40.93 1.85 41.86 41.86 0 0 1 8.44-.29 36.58 36.58 0 0 1 6.1 1.37l11.57 3.32c8.53 2.44 17.26 4.91 26.11 4.36a33.4 33.4 0 0 0 5.33-.77c7-1.62 13.52-5.53 16.88-11.82 4.75-8.55 2.56-19.07 0-28.47z"
        transform="translate(-80.89 -103.35)"
        fill="url(#prefix__a)"
      />
      <path
        d="M125.02 649.54c-2.11-4.8-4.11-10.32-2-15.12a12.85 12.85 0 0 1 6.65-6.25 32 32 0 0 1 9-2.22 125.61 125.61 0 0 1 29.26-.4c.71 5.62-.79 11.32-2.08 16.75-1.17 5-1.84 5.74-7 6-3.34.18-33.04 3.01-33.83 1.24z"
        fill="#fbbebe"
      />
      <ellipse cx={214.07} cy={577.16} rx={143} ry={40} fill="#464353" />
      <ellipse cx={214.07} cy={577.16} rx={143} ry={40} opacity={0.1} />
      <path
        d="M239.71 366a44.49 44.49 0 0 1-22.94 20.84 57.58 57.58 0 0 1-18.21 3.46c-6.79.31-13.72-.13-20.1-2.45-8.56-3.1-15.67-9.44-21-16.83s-9-15.83-12.19-24.34c-1.68-4.43-3.28-9.15-2.49-13.83 5.15-1.17 10.79-2.89 13.45-7.46 2.27-3.92 1.64-8.62.33-13.1-.37-1.27-.8-2.53-1.23-3.74-1-2.9-4.45-8.41-2-10.89 1.53-1.57 7.94-2.37 10.15-3.39 6.81-3.14 13.09-7.68 20.57-9.17 6.47-1.29 13.15-.08 19.61 1.26a6.45 6.45 0 0 1 2.42.87 5.82 5.82 0 0 1 1.8 2.7c1.84 4.48 2.92 9.43 4.4 14.1 1.54 4.89 3.52 9.48 7.23 12.95 2.89 2.71 6.57 4.41 10.17 6.06l8.86 4.06a11.65 11.65 0 0 1 4.19 2.71 10.61 10.61 0 0 1 2 5.44 50.82 50.82 0 0 1-5.02 30.75z"
        fill="#fbbebe"
      />
      <path
        d="M212.24 304.03a46 46 0 0 1-55.67 8.26c-.37-1.27-.8-2.53-1.23-3.74-1-2.9-4.45-8.41-2-10.89 1.53-1.57 7.94-2.37 10.15-3.39 6.81-3.14 13.09-7.68 20.57-9.17 6.47-1.29 13.15-.08 19.61 1.26a6.45 6.45 0 0 1 2.42.87 5.82 5.82 0 0 1 1.8 2.7c1.79 4.48 2.87 9.43 4.35 14.1z"
        opacity={0.1}
      />
      <circle cx={179.07} cy={270.16} r={46} fill="#fbbebe" />
      <path
        d="M319.22 419.45l-3.78-22.9c-1.91-11.49-3.88-23.2-9.22-33.55-3.51-6.78-9.08-13.24-16.59-14.58a16.05 16.05 0 0 1-4.32-1c-2.2-1.06-3.4-3.44-5.09-5.2-4.36-4.52-11.46-4.59-17.3-6.89-5.16-2-9.38-5.85-14.08-8.79s-10.55-5-15.75-3.12c-.84 8.95-1.73 18.1-5.53 26.25a39.28 39.28 0 0 1-59.26 14.76c-8.91-6.71-14.62-17.06-17.28-27.89-.65-2.64-1.39-5.67-3.82-6.88-2.63-1.32-5.79.28-8 2.22-4 3.59-7.27 8.73-12.53 9.94-1.9.44-4 .35-5.58 1.5a12.7 12.7 0 0 0-2.6 3.37 12 12 0 0 1-10.23 5.06c-1.83-.09-4-.51-5.25.82-.93 1-1 2.56-2 3.49-1.35 1.31-3.54.67-5.42.6-3.56-.15-6.87 2.13-8.91 5s-3 6.42-4 9.86c10.93 24.34 20.93 48.71 31.86 73.05a6.23 6.23 0 0 1 .79 3 7.31 7.31 0 0 1-1.36 3c-5.36 8.61-5.19 19.44-4.6 29.56s1.31 20.81-3.21 29.88c-1.23 2.49-2.83 4.77-4 7.26-2.74 5.64-3.73 23.68-2.13 29.74h226.08c-4.31-11.85-2.67-35.63-1.77-48.21.63-8.8-1-17.59-1.7-26.39-1.53-17.97-.45-35.02-3.42-52.96z"
        fill={primaryColor}
      />
      <path
        d="M65.36 445.65a35.4 35.4 0 0 0-.12 8.73l2.87 41.27c.27 3.89.54 7.77.9 11.65.69 7.53 1.72 15 3 22.46a4 4 0 0 0 4.1 3.89c12.65 2.68 25.72 2.57 38.63 1.84 19.7-1.1 39.37-3.61 59.1-3.18 5.08.11 11 0 14.08-4s1.29-10.47-2.73-13.7-9.48-4-14.64-4c-6.83-.07-13.66.9-20.47.5-6.25-.37-12.36-1.88-18.42-3.39l-17-4.23c.65-5.15 2.61-10 4.47-14.89 3.34-8.67 6.46-17.63 6.52-26.92s-3.44-19.06-11.05-24.38c-6.26-4.37-14.32-5.18-21.95-5-5.55.16-15.14-1.17-20.21 1-4.01 1.76-6.33 8.42-7.08 12.35z"
        fill="#fbbebe"
      />
      <path
        d="M330.79 540.01c3.33-1.27 7-.81 10.57-.33 11.49 1.57 23.15 3.18 33.8 7.77 5 2.14 9.76 5 13.14 9.21 3 3.79 4.75 8.43 6.41 13l3.84 10.52c1.46 4 2.94 8.08 3.35 12.33 1.2 12.59-7.41 24.46-18.24 31s-23.58 8.87-36 11.31-24.89 5.14-37.26 8a150 150 0 0 1-17.53 3.45c-13.24 1.5-27.08-.71-39.66 3.67-5 1.75-9.91 4.35-15.1 5.56a93.93 93.93 0 0 1-10.44 1.59l-23.81 2.72a129.89 129.89 0 0 1-14.6 1.12c-10.4 0-20.63-2.46-30.73-4.92a7.77 7.77 0 0 1-3-1.21c-1.6-1.26-1.95-3.49-2.18-5.51q-1.53-13.41-2.68-26.85c-.24-2.91-.42-6.06 1.17-8.51 2-3 5.9-3.94 9.46-4.52a246.88 246.88 0 0 1 45.68-3.17c5.81-5.81 15.39-5.84 23-9a68.39 68.39 0 0 0 8.11-4.41 106 106 0 0 1 44.53-14.07 41.45 41.45 0 0 0 9.11-1.3c5.89-1.83 11.26-6.81 17.31-5.59.75-2.07 1.27-4.84 3-6.26.86-.73 1.92-1.22 2.71-2 1.67-1.69 1.82-4.35 1.57-6.71s-.81-4.78-.2-7.08a9.79 9.79 0 0 1 1.11-2.47c3-5.18 7.53-7.84 13.56-7.34z"
        fill="#464353"
      />
      <path
        d="M330.79 540.01c3.33-1.27 7-.81 10.57-.33 11.49 1.57 23.15 3.18 33.8 7.77 5 2.14 9.76 5 13.14 9.21 3 3.79 4.75 8.43 6.41 13l3.84 10.52c1.46 4 2.94 8.08 3.35 12.33 1.2 12.59-7.41 24.46-18.24 31s-23.58 8.87-36 11.31-24.89 5.14-37.26 8a150 150 0 0 1-17.53 3.45c-13.24 1.5-27.08-.71-39.66 3.67-5 1.75-9.91 4.35-15.1 5.56a93.93 93.93 0 0 1-10.44 1.59l-23.81 2.72a129.89 129.89 0 0 1-14.6 1.12c-10.4 0-20.63-2.46-30.73-4.92a7.77 7.77 0 0 1-3-1.21c-1.6-1.26-1.95-3.49-2.18-5.51q-1.53-13.41-2.68-26.85c-.24-2.91-.42-6.06 1.17-8.51 2-3 5.9-3.94 9.46-4.52a246.88 246.88 0 0 1 45.68-3.17c5.81-5.81 15.39-5.84 23-9a68.39 68.39 0 0 0 8.11-4.41 106 106 0 0 1 44.53-14.07 41.45 41.45 0 0 0 9.11-1.3c5.89-1.83 11.26-6.81 17.31-5.59.75-2.07 1.27-4.84 3-6.26.86-.73 1.92-1.22 2.71-2 1.67-1.69 1.82-4.35 1.57-6.71s-.81-4.78-.2-7.08a9.79 9.79 0 0 1 1.11-2.47c3-5.18 7.53-7.84 13.56-7.34z"
        opacity={0.05}
      />
      <path
        d="M134.22 655.72c-6.19 7.17-11.64 9.73-21.33 9.5q-8.94-.21-17.86-.93a100.2 100.2 0 0 0-12.24-.57c-12.34.48-24.25 6.13-36.56 5.14a25.92 25.92 0 0 1-5.37-1 15.63 15.63 0 0 1-7.29-4.42c-2.36-2.67-3.49-6.21-4.14-9.71-3.29-17.94 5.73-37.48 21.52-46.61a15.78 15.78 0 0 1 6.84-2.43 16.21 16.21 0 0 1 6.92 1.52l.15.06A52.33 52.33 0 0 1 82 617.71a9.66 9.66 0 0 0 2.62 2.11 9 9 0 0 0 3.09.58l13.14.83a31.14 31.14 0 0 1 6.6.91 52.46 52.46 0 0 1 6.94 3c7.07 3.16 14.91 4 22.55 5.22a3.37 3.37 0 0 1 2 .8 3.13 3.13 0 0 1 .62 1.3 25.51 25.51 0 0 1-5.34 23.26z"
        fill="#3f3d56"
      />
      <path
        d="M64.86 606.28a78.9 78.9 0 0 0-13.15 16.44 82.28 82.28 0 0 0-10.74 32.54 60.4 60.4 0 0 0-.11 12.61 15.63 15.63 0 0 1-7.29-4.42c-2.36-2.67-3.49-6.21-4.14-9.71-3.29-17.94 5.73-37.48 21.52-46.61a15.78 15.78 0 0 1 6.84-2.43 16.21 16.21 0 0 1 6.92 1.52z"
        opacity={0.1}
      />
      <path
        d="M319.35 631.16c7.35-.2 15.6-.57 21 4.38 5.15 4.68 5.83 12.4 6.17 19.35l.39 8.07c.12 2.46.22 5-.77 7.28-1.76 4-6.59 5.93-11 5.7s-8.46-2.16-12.49-3.9a175.7 175.7 0 0 0-34-10.71q.57-8.37 1.9-16.66c.61-3.83.71-10.24 3.27-13.42 2.71-3.36 6.24-1.54 9.92-.92a79.63 79.63 0 0 0 15.61.83z"
        fill="#fbbebe"
      />
      <path
        d="M125.11 550.07c0 1-1.57 0-1.71-1.07-1.1-8.09-7.52-14.76-15-18s-16-3.41-24.1-2.64c-12.25 1.16-26 5.85-30.48 17.3-1.06 2.68-1.54 5.58-2.84 8.15-1.44 2.82-3.79 5.07-5.35 7.81-2.69 4.74-2.8 10.55-1.83 15.91 2.61 14.3 12.39 26.53 24.24 35s25.7 13.53 39.51 18.09a685.19 685.19 0 0 0 112 26.75c6.16.93 12.38 1.79 18.28 3.77 5.28 1.77 10.22 4.42 15.38 6.5 12 4.82 24.91 6.54 37.7 8.23 2.18.28 4.68.48 6.29-1 2.08-1.93 1.39-5.29.8-8.06a43.35 43.35 0 0 1 5.11-30.76c2.14-3.6 4.92-7.29 4.52-11.46-.48-4.86-5.32-8.3-10.14-9.08s-9.72.37-14.56 1c-1.67.22-3.49.36-4.95-.49a9.89 9.89 0 0 1-1.94-1.72 21.93 21.93 0 0 0-25.54-3.57c-1.79 1-4.5-1.23-6.36-2.07l-21.03-9.52c-24.16-10.93-48.44-21.91-74-28.83a15.54 15.54 0 0 1-5.7-2.37c-1.27-1-2.18-2.36-3.35-3.47-2.55-2.41-6.1-3.37-9.16-5.08s-6.49-5.89-5.79-9.32z"
        fill="#464353"
      />
      <path
        d="M449.32 680.76c-3.36 6.23-9.88 10.11-16.88 11.71a33.5 33.5 0 0 1-5.34.76c-8.85.55-17.59-1.9-26.12-4.32l-11.58-3.26a36.55 36.55 0 0 0-6.1-1.36 41.86 41.86 0 0 0-8.44.29 149.59 149.59 0 0 1-41-1.84 7.23 7.23 0 0 1-3.17-1.13 15.75 15.75 0 0 1-2.21-2.71c-3.15-3.79-6.54-6-2.81-11 2.15-2.9 6.14-4.35 7.81-7.68s.6-8.06-.39-11.5c-1.35-4.75-5.79-6.8-7.38-11.16-1.19-3.29.81-7.11 3.82-8.9s6.73-1.93 10.2-1.47 6.87 1.44 10.36 1.71c10.26.82 20.75-4.47 30.6-1.49 2.17.66 4.22 1.71 6.42 2.29a21.35 21.35 0 0 0 12.83-1.11c1.44-.54 2.85-1.19 4.25-1.83a34.23 34.23 0 0 1 8.55-3.09c9.61-1.65 18.52 5 25.77 11.49a36.44 36.44 0 0 1 6.55 7.1c2 3.12 3.06 6.75 4 10.33 2.65 9.25 4.84 19.67.26 28.17z"
        fill="#3f3d56"
      />
      <path
        d="M449.32 680.76c-3.36 6.23-9.88 10.11-16.88 11.71a32.69 32.69 0 0 0 3.55-17.16c-.6-9.51-4.78-18.47-10.11-26.37a93.4 93.4 0 0 0-11.14-13.57c-3.18-3.2-7.09-5.74-10.51-8.67a34.23 34.23 0 0 1 8.55-3.09c9.61-1.65 18.52 5 25.77 11.49a36.44 36.44 0 0 1 6.55 7.1c2 3.12 3.06 6.75 4 10.33 2.61 9.31 4.8 19.73.22 28.23z"
        opacity={0.1}
      />
      <path
        d="M82.11 372.26a10.35 10.35 0 0 0-2.22 3.55 167.86 167.86 0 0 0-14.1 57.62 5.76 5.76 0 0 1-.65 2.79 12.21 12.21 0 0 1-1.47 1.59 5.52 5.52 0 0 0 .94 8c1.65-3.11 5.6-4.12 9.11-4.39 16.81-1.33 33.23 6.49 50.09 5.9-1.19-4.11-2.9-8.06-3.87-12.22-4.29-18.47 6.41-38.58-.15-56.37-1.31-3.56-3.5-7.06-6.95-8.62a18.51 18.51 0 0 0-4.45-1.18c-4.26-.77-12.74-4.06-16.86-2.74-1.52.49-2.12 1.92-3.38 2.78-1.91 1.23-4.45 1.68-6.04 3.29z"
        fill={primaryColor}
      />
      <rect x={117.57} y={408.66} width={223} height={142} rx={7.97} fill="#3f3d56" />
      <circle cx={228.57} cy={479.66} r={6} fill="#fff" />
      <path
        d="M147.29 195.5c-3.36 2.43-5.66 5.92-8 9.27-4.31 6.19-9.19 12.37-16.08 15.82-2.61 1.31-5.59 2.3-7.32 4.58a12.34 12.34 0 0 0-1.95 5.13 101.65 101.65 0 0 0-2.06 19.6c0 3.28.14 6.66 1.59 9.64 1.37 2.8 3.84 5.17 4.35 8.22.39 2.38-.49 4.75-.8 7.14s.23 5.22 2.44 6.36a14.79 14.79 0 0 0 3.7.87c6.65 1.48 8.88 9.28 9.89 15.73 2.26-.13 3.28-2.72 3.75-4.83l6.93-30.81c.75-3.34 2-7.21 5.33-8.38 2.23-.77 4.67-.05 7 .15 9.15.75 16.89-6.32 25.84-8.27a33 33 0 0 1 8.71-.58c7.06.35 15.27 3.25 16.77 9.84.25 1.07.4 2.35 1.4 2.88s2.05.08 3.1 0c4.48-.45 7.12 4.59 8.41 8.71l4.7 15c.7 2.27 1.88 4.94 4.34 5.23 2.27.28 4.2-1.87 4.54-4s-.4-4.34-.89-6.48c-2.21-9.85 1.17-19.93 3.23-29.8s2.43-21.21-4.48-28.81c-2.51-2.75-5.81-4.8-8.15-7.7-2.18-2.72-3.41-6.06-5.67-8.73-6.25-7.37-22.28-13.06-32.11-14-11.23-1.22-29.43 1.63-38.51 8.22z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M229.37 279.8c-2.46-.3-3.64-3-4.34-5.23q-2.35-7.51-4.7-15c-1.29-4.13-3.93-9.17-8.41-8.71-1.05.11-2.18.52-3.1 0s-1.15-1.81-1.4-2.88c-1.5-6.6-9.71-9.49-16.77-9.84a33.43 33.43 0 0 0-8.71.57c-8.95 2-16.69 9-25.84 8.27-2.36-.19-4.8-.91-7-.14-3.37 1.16-4.58 5-5.33 8.38l-6.93 30.8c-.47 2.12-1.49 4.71-3.75 4.83-1-6.44-3.24-14.24-9.89-15.72a15.72 15.72 0 0 1-3.7-.87 4.34 4.34 0 0 1-1.93-2.15c-.18.93-.39 1.86-.51 2.79-.3 2.38.23 5.22 2.44 6.36a14.79 14.79 0 0 0 3.7.87c6.65 1.48 8.88 9.28 9.89 15.73 2.26-.13 3.28-2.72 3.75-4.83l6.93-30.81c.75-3.34 2-7.21 5.33-8.38 2.23-.77 4.67-.05 7 .15 9.15.75 16.89-6.32 25.84-8.27a33 33 0 0 1 8.71-.58c7.06.35 15.27 3.25 16.77 9.84.25 1.07.4 2.35 1.4 2.88s2.05.08 3.1 0c4.48-.45 7.12 4.59 8.41 8.71q2.34 7.51 4.7 15c.7 2.27 1.88 4.94 4.34 5.23 2.27.28 4.2-1.87 4.54-4a13.58 13.58 0 0 0-.6-5.31 4.13 4.13 0 0 1-3.94 2.31zM117.83 260.76c-.51-3.05-3-5.42-4.35-8.22a16.45 16.45 0 0 1-1.48-6c0 1.12-.1 2.24-.11 3.37 0 3.28.14 6.66 1.59 9.64 1.11 2.27 2.94 4.27 3.86 6.58a15.06 15.06 0 0 0 .49-5.37zM236.25 239.48c-1.82 8.72-4.66 17.6-3.78 26.34.57-6.45 2.45-12.94 3.78-19.34a51 51 0 0 0 1.16-14.83 61.14 61.14 0 0 1-1.16 7.83z" />
      </g>
      <g opacity={0.8}>
        <path
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
          strokeWidth={3}
          d="M330.04 290.49H955.1M385.57 290.48s29.89 4.15 14.41-27.92 42-26 42-26M584.64 290.48s29.89-4.14 14.41 27.93 42 26 42 26M871.27 290.48s-29.9-4.14-14.41 27.93-42 26-42 26M814.86 344.4H649.93"
        />
        <circle cx={330.04} cy={290.49} r={18.25} fill={primaryColor} />
        <circle cx={442.29} cy={236.3} r={18.25} fill="#3acc6c" />
        <circle cx={442.29} cy={290.49} r={18.25} fill={primaryColor} />
        <circle cx={514.73} cy={290.49} r={18.25} fill={primaryColor} />
        <circle cx={641.35} cy={344.13} r={18.25} fill="#ff6584" />
        <circle cx={737.03} cy={344.13} r={18.25} fill="#ff6584" />
        <circle cx={732.04} cy={290.49} r={18.25} fill={primaryColor} />
        <circle cx={950.48} cy={290.49} r={18.25} fill={primaryColor} />
        <circle cx={861.12} cy={290.49} r={18.25} fill={primaryColor} />
        <path fill={primaryColor} d="M299.38 122.66h61.23v42.2h-61.23z" />
        <path fill="#3acc6c" d="M411.9 122.66h61.23v42.2H411.9z" />
        <path fill="#ff6584" d="M610.48 122.66h61.23v42.2h-61.23z" />
      </g>
      <path
        d="M86.35 299.36s-74.77-31.44-84.57 25.29c0 0-5.11 8.84 2 16.14 0 0 1.53-3.92 8.75.13a37.17 37.17 0 0 0 8.16 3.32 18.36 18.36 0 0 0 11.62-.62s24.59-1.33 45.27-33.5c0 0 8.87-5.48 9.31-7.54l-14.82 1s1.14 10.85-5 17.36c0 0 5.44-16.84 2.83-17.31-.53-.1-7.83.86-7.83.86s1.89 18.87-8 28.63c0 0 9.18-19.19 5.19-28.29l-10.94 2.11s3 19.85-7.82 31.39c0 0 8.9-20.4 5.46-30.76l-10.47 3.52s2.52 19.41-6.53 29c0 0 7.9-24.61 4.18-28 0 0-9.42 3.82-11.43 6 0 0 1.49 14-4.26 19.05 0 0 3.53-17 1.78-17.7 0 0-10.94 8.24-14.28 15.35 0 0 4.16-10.86 12.91-17 0 0-7.35-1.24-13 1.83 0 0 3.78-7.21 15.65-3.79 0 0 8.79-6.09 10.55-6 0 0-11.23-5-19.34-4.38 0 0 8.7-5 22.08 3.35l10.45-3.77s-14.5-7.43-21.76-7.4c0 0 9.66-3.74 24.47 6.66l10.7-2.18s-12-7.35-20.09-9.06c0 0 9.7-1.54 23.18 8.55l7.31-.61s-8.85-5.22-11.53-6.49-2.56-2.09-2.56-2.09a34.89 34.89 0 0 1 17.14 8.18s15.18-.3 15.24-1.23zM83.59 243s-26.48-61.27-64.63-33.17c0 0-8.06 2.34-8 10.7 0 0 3.14-1.46 5.13 5.07a30.1 30.1 0 0 0 3 6.61 15 15 0 0 0 7.25 6.25s15.37 13.22 46 5.89c0 0 8.4 1.79 9.83.83l-9.36-7.87s-5.51 7.1-12.89 7.44c0 0 12.83-6.9 11.55-8.67-.26-.36-5.15-3.94-5.15-3.94s-9.62 12.28-21 12.47c0 0 16.39-6.18 19.2-13.85l-7.7-5s-9.71 13.51-22.71 14.21c0 0 16.91-7.05 20.77-15.17l-8.23-3.87s-9.56 13-20.37 13.49c0 0 18.72-10.12 18.43-14.25 0 0-7.77-3.1-10.24-2.92 0 0-7.07 9.15-13.38 8.89 0 0 11.79-8.09 11.15-9.5 0 0-11.2-1.34-17.23 1 0 0 8.66-4.08 17.35-2.74 0 0-3.66-4.93-8.75-6.3 0 0 6.36-2.13 11.46 6.65 0 0 8.68 1.4 9.7 2.44 0 0-3.81-9.39-9-13.62 0 0 8 2 11.2 14.57l8.36 3.71s-4.38-12.68-8.72-16.79c0 0 7.87 3.28 10.75 17.9l7.6 4.79s-2.94-11.2-6.77-16.83c0 0 6.64 4.62 8.89 18.29l4.7 3.8s-2.29-8.14-3.16-10.42-.33-2.7-.33-2.7a28.65 28.65 0 0 1 5.49 14.68s9.24 8.44 9.81 7.93z"
        fill={primaryColor}
        opacity={0.1}
      />
    </svg>
  );
};

UndrawVersionControl.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawVersionControl;
