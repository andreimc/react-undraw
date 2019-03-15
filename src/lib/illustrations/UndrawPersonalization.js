import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPersonalization = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1009.54 839.64" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={491.14} y1={640.96} x2={698.09} y2={640.96} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M586.55 111.4c-64.72-2.25-126.36-23.14-185.22-46S284.17 17.21 221 5.1c-40.63-7.79-87.1-8.89-119.83 12.89-31.51 21-41.69 57.15-47.16 90.73-4.12 25.26-6.54 51.85 4.74 75.49 7.84 16.42 21.74 30.22 31.36 45.95 33.47 54.72 9.81 122.2-26.45 175.63-17 25.07-36.75 49-49.88 75.66s-19.2 57.25-7.71 84.47c11.38 27 38.51 47.24 67.9 61.49 59.69 28.95 130 37.23 198.61 41.92 151.83 10.39 304.46 5.89 456.69 1.39 56.34-1.67 112.92-3.36 168.34-12.07 30.78-4.84 62.55-12.51 84.9-31.05 28.36-23.53 35.39-63.37 16.38-92.88-31.88-49.49-120-61.78-142.31-114.89-12.26-29.24.33-61.8 18.16-88.92 38.24-58.16 102.33-109.19 105.7-175.67 2.32-45.66-28.49-91.39-76.13-113-49.93-22.64-119.18-19.8-156 17.69-37.95 38.6-104.61 53.45-161.76 51.47z"
        fill={primaryColor}
        opacity={0.1}
      />
      <ellipse cx={483.49} cy={780.99} rx={303.97} ry={41.12} fill={primaryColor} opacity={0.1} />
      <path
        d="M333.01 658.57s21-3.36 33.6 11.48c0 0-9.24 7.28-29.12-2.8zM330.77 658.24s-13.4 16.58-6.83 34.85c0 0 10.92-4.37 12.11-26.63zM318.77 631.13s8.4-15.4 42 6.16c0 0-4.48 10.36-19.32 9.52s-18.81-7.56-22.68-15.68zM316.56 630.02s-17.43-2-19.12 37.9c0 0 11.05 2.3 18.9-10.33s4.6-19.69.22-27.57zM306.4 598.2s9.8-27.17 45.37-7.85c0 0-8.12 24.93-41.73 17.09zM295.48 557.59s18.48-27.44 51.25-2c0 0-11.48 25.76-48.45 11.76zM291.56 518.95s21.56-25.2 54 0c0 0-20.45 22.12-54 6.44zM288.2 481.43s21.84-26.33 52.93-1.4c0 0-24.65 23.24-52.93 7.56zM290.16 448.1s23-33.88 52.09-10.92c0 0-24.65 29.13-52.09 17.36zM295.48 409.18s24.36-33.6 52.65-7.84c0 0-28.85 29.12-52.65 14zM303.61 374.39s28.83-31.57 54-19c0 0-30.06 33.53-55.26 27.37zM313.68 341.42s33.33-38.65 52.65-25.77c0 0-24.52 30-55 33.05zM328.23 303.16s29.14-31.58 50.42-23.74c0 0-24.92 32.77-54.33 33.61zM341.41 267.38s32.2-30.24 46.2-24.92c0 0-23.24 33.6-47.6 31.64zM354.29 234.34s27.72-36.12 42.84-33.32c0 0-16.8 32.2-42.84 37zM368.26 189.82s24.51-27.7 37.74-27.63c0 0-19.34 37-38.74 36.66zM376.55 160.13l23.66-57.68s1.19 52.14-26.68 68.38zM386.15 96.52s3.92-48.16 1.4-52.08c0 0 16.93 40-1.56 73.36zM305.49 597.55s-24.55-15.21-40.43 22c0 0 21.84 14.5 43.31-12.51zM294.7 556.04s-30.1-13.73-44.71 25.12c0 0 23.26 16 47.45-15.3zM290.16 521.26s-21.56-25.2-54 0c0 0 20.44 22.12 54 6.44zM287.47 481.43s-21.85-26.33-52.93-1.4c0 0 24.64 23.24 52.93 7.56z"
        fill={primaryColor}
      />
      <path
        d="M290.16 449.06s-15.32-37.95-48.62-21.63c0 0 18 33.66 47.27 27.93zM297.41 408.99s-15.22-38.61-49-20.71c0 0 20.68 35.39 47.5 26.68zM306.85 374.59s-6-42.34-33.95-46.13c0 0 5.93 44.64 30.22 53.75zM314.4 341.49s-2.35-51-25.5-52.77c0 0 .78 38.7 22.89 60zM330.64 301.7s-6.91-42.4-29-47.59c0 0 2.74 41.07 26.81 58zM344.03 267.69s-.24-44.18-13.74-50.67c0 0-8.37 40 9.83 56.31zM355.32 233.82s-1.9-45.5-15.87-51.91c0 0-4.79 36 13.77 54.88zM370.22 193.42s-.09-37-10.07-45.68c0 0-9.92 40.54 4.86 53.12z"
        fill={primaryColor}
      />
      <path
        d="M375.37 158.31l-9.7-61.59s-13.2 50.47 10.16 72.7zM377.27 97.1s-24.93-41.39-24.41-46c0 0 2.64 43.4 34 65zM380.19 84.88s-23.52-58.81-34.16-63.57c0 0 33.6 17.08 36.12 61.89z"
        fill={primaryColor}
      />
      <path
        d="M367.13 199.17l-1.61-.49c19.85-64.73 24.81-106 13.95-116.34l1.16-1.22c11.5 10.91 6.84 51.7-13.5 118.05z"
        fill="#444053"
      />
      <path
        d="M312.47 350.69l-2.37-.84a471.6 471.6 0 0 1 6.75-17.89c20.72-51.64 38.36-99.67 49.67-136.55l2.07-1c-11.33 36.95-28.65 86.83-49.4 138.53-2.37 5.88-4.63 11.88-6.72 17.75z"
        fill="#444053"
      />
      <path
        d="M362.56 707.02c-.32-.36-32.5-36.58-54.92-98.44a364.43 364.43 0 0 1-21.7-112.76c-1.54-48.13 8.56-101.87 25.86-150.68l1.88 2.2c-38.83 109.56-23.4 203.45-2.94 260 22.2 61.29 54 97.13 54.32 97.48z"
        fill="#444053"
      />
      <rect x={642.8} y={289.82} width={8.86} height={73.02} rx={2.29} ry={2.29} fill="#3a3768" />
      <rect x={348.37} y={232.61} width={4.97} height={24.04} rx={2.29} ry={2.29} fill="#3a3768" />
      <rect x={348.19} y={276.63} width={5.6} height={41.84} rx={2.29} ry={2.29} fill="#3a3768" />
      <rect x={348.28} y={333.11} width={5.33} height={42.2} rx={2.29} ry={2.29} fill="#3a3768" />
      <rect x={351.18} y={153.17} width={296.4} height={602.39} rx={38.99} ry={38.99} fill="#3a3768" />
      <path
        d="M605.77 168.82h-34v4.09a19.38 19.38 0 0 1-19.39 19.38H444.25a19.38 19.38 0 0 1-19.39-19.38v-4.09h-31.83a23.54 23.54 0 0 0-23.54 23.54v523.97a23.54 23.54 0 0 0 23.54 23.54h212.74a23.54 23.54 0 0 0 23.54-23.54V192.4a23.54 23.54 0 0 0-23.54-23.58z"
        fill={primaryColor}
      />
      <rect x={470.79} y={171.16} width={41.39} height={8.4} rx={3.87} ry={3.87} fill="#e6e8ec" />
      <circle cx={523.21} cy={175.36} r={4.77} fill="#e6e8ec" />
      <path
        d="M750.2 126.75s-84.2-5.08-74.28 53.92c0 0-2 10.43 7.48 15.16 0 0 .15-4.37 8.64-2.88a39.5 39.5 0 0 0 9.15.44 19.06 19.06 0 0 0 11.18-4.57s23.67-9.78 32.87-48.46c0 0 6.81-8.44 6.54-10.61l-14.21 6.07s4.86 10.25 1 18.77c0 0-.46-18.4-3.19-18-.55.08-7.38 3.55-7.38 3.55s8.35 17.85 2.05 30.83c0 0 2.39-22-4.66-29.54l-10 5.84s9.76 18.44 3.14 33.49c0 0 1.7-23.08-5.25-32.07l-9.06 7.07s9.17 18.17 3.58 30.65c0 0-.73-26.86-5.54-28.89 0 0-7.93 7-9.14 9.86 0 0 6.28 13.2 2.38 20.16 0 0-2.39-17.9-4.35-18 0 0-7.9 11.86-8.72 20 0 0 .34-12.09 6.81-21.12 0 0-7.64 1.31-12.1 6.26 0 0 1.23-8.38 14.05-9.12 0 0 6.53-9 8.27-9.54 0 0-12.74-1.07-20.47 2.36 0 0 6.8-7.91 22.81-4.31l8.95-7.31s-16.78-2.29-23.9.24c0 0 8.19-7 26.31-1.9l9.74-5.82s-14.31-3.08-22.83-2c0 0 9-4.85 25.69.41l7-3.13s-10.48-2.06-13.55-2.39-3.23-1.17-3.23-1.17a36.35 36.35 0 0 1 19.69 2.19s14.78-5.51 14.53-6.44zM663.83 100.51s-38-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.91-1.31a17.51 17.51 0 0 0 4.13.2 8.56 8.56 0 0 0 5.05-2.08s10.7-4.42 14.86-21.9c0 0 3.07-3.81 2.95-4.79l-6.42 2.74s2.19 4.63.47 8.48c0 0-.21-8.31-1.44-8.12-.25 0-3.34 1.61-3.34 1.61s3.78 8.07.93 13.93c0 0 1.08-9.94-2.11-13.35l-4.52 2.68s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.09 3.2s4.14 8.21 1.62 13.85c0 0-.34-12.14-2.51-13.06 0 0-3.58 3.16-4.13 4.46 0 0 2.84 6 1.08 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.52 19.52 0 0 1 3.08-9.54 10.76 10.76 0 0 0-5.47 2.83s.56-3.79 6.35-4.12c0 0 3-4.07 3.74-4.32 0 0-5.76-.48-9.25 1.07 0 0 3.07-3.57 10.3-1.95l4-3.3s-7.59-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.47-1.39-10.32-.89c0 0 4.07-2.19 11.61.18l3.15-1.41s-4.74-.93-6.13-1.08-1.46-.53-1.46-.53a16.39 16.39 0 0 1 8.9 1s6.76-2.52 6.64-2.94z"
        fill={primaryColor}
      />
      <path opacity={0.1} d="M395.91 226.18h206.95v439.24H395.91z" />
      <path
        d="M691.75 818.22s-4.88-11.36-7.06-16.6c-1.23-3-3.31-3.5-4.9-3.43l.09-1 .39-4.73.08-1c3.77-.79 7-1.41 7-1.41L685 668.73s-1-1.28-3.42-9c-1.2-3.85-7-8.58-12.42-12.35-.85-.59-1.68-1.15-2.5-1.69a62.39 62.39 0 0 1 6.21-4.58c3.08-1.79 4.1-12 4.1-12l-.51 1c.51-1 0-27.07 0-27.07l-1.8-27.06s-1.28-32.17-11.28-40.6S640.75 524 640.75 524l-7-1.8-12.9-3.31c-.36-.59-.71-1.21-1-1.86-.13-.25-.25-.51-.37-.77a30.2 30.2 0 0 0 12.75-24.65 29.73 29.73 0 0 0-.39-4.84c0-.3-.11-.61-.17-.91a25.2 25.2 0 0 0 3-2.41 13.63 13.63 0 0 0 3.66-4.49 7.57 7.57 0 0 0 .34-1.05c0-.1 0-.2.06-.31s.09-.53.12-.8v-.3-.88-.22c0-.33-.05-.66-.1-1a.13.13 0 0 0 0-.06 17.21 17.21 0 0 0-.9-3.4c-1-2.58-2.3-5-2.77-7.75-.58-3.25.09-6.8-1.46-9.72a8.67 8.67 0 0 0-6.09-4.19 14.35 14.35 0 0 0-7.52.86 10.7 10.7 0 0 1-3.71 1 7.75 7.75 0 0 1-2.71-.66 40.19 40.19 0 0 1-8.4-4.51 40.22 40.22 0 0 0-6-3.92 8.12 8.12 0 0 0-6.92-.28c-3.7 1.88-4.4 7.12-7.84 9.43-2.37 1.6-5.46 1.44-8.32 1.54s-6.1.81-7.51 3.29c-1 1.72-.76 3.77-.57 5.78l.06.68c0 .24 0 .49.06.73a18.37 18.37 0 0 1-1.13 7.56c-1.38 3.66-4 7.27-3.91 11a7.66 7.66 0 0 0 .23 1.76 8.45 8.45 0 0 0 .28.85 37.24 37.24 0 0 0 1.85 3.61l.09.16c.07.14.14.28.2.42s.18.38.25.57.08.19.11.28.13.37.18.56a5.36 5.36 0 0 1 .21 1.74 16.2 16.2 0 0 0-.19 2.29 1.68 1.68 0 0 0 1.34 1.63 2.23 2.23 0 0 0 1.16-.36 18.57 18.57 0 0 0 2.55-1.75c0 .32 0 .64.06 1a30.26 30.26 0 0 0 9.09 18.83c0 .31 0 .63-.07 1s-.05.72-.07 1.09l-11.2 3.52s.06.2.18.54l-1.18.47c-5.81 2.35-12.28 5.27-15.9 7.92-1.6 1.16-3.06 2.11-4.37 2.9a25 25 0 0 0-10.36 12.55l-.15.38c-1 2.29-5.9 17.87-5.9 17.87s-3.59 8.68-4.11 14.3c0 0-5.9 18.63-4.36 30.89 0 0-4.62 17.62-2.82 20.42 0 0-1.84 7.58 6.24 15.21-.59.36-1.23.75-1.9 1.18-6.26 3.94-15.29 10.33-16.83 15.26-2.39 7.67-3.42 9-3.42 9L501.88 789s3.23.62 7 1.4l.08 1 .39 4.72.09 1c-1.59-.07-3.67.48-4.9 3.44-2.19 5.23-7 16.58-7 16.58s-10.77 10-4.24 19.28a6.68 6.68 0 0 0 1 1.16c4.69 4.26 14.69 1.53 21.8-1.25a21.26 21.26 0 0 0 9-7.26 3.42 3.42 0 0 1 2.4-1.33 9.8 9.8 0 0 0 4.47-1.95 6 6 0 0 0 2.46-5 .76.76 0 0 1 0-.15l-.63-14.23s-.77-9.94-3.22-9.3l-.63.15-.17-1-.33-1.93-.17-1h1.36s.34-11.24 4.45-20.08S541.9 693 541.9 693s50.87.83 52.57-3.94c1 0 2.09 0 3.13-.07 1.71 4.77 49.72 5 49.72 5s2.73 71.49 6.83 80.34a40.82 40.82 0 0 1 2.15 5.86 65.41 65.41 0 0 1 2.31 14.21h1.36l-.18 1-.33 1.92-.17 1-.65-.15c-2.43-.63-3.2 9.31-3.2 9.31l-.65 14.32a5.81 5.81 0 0 0 2.38 5 10 10 0 0 0 4.55 2 3.34 3.34 0 0 1 2.4 1.32 21.32 21.32 0 0 0 9 7.26c7.68 3 18.72 5.93 22.82.1 6.58-9.3-4.19-19.26-4.19-19.26zm-129.3-178.34h.12zM642.8 599s1.29 4.85 3.59 7.4 1.16 18.39 1.16 18.39a14.2 14.2 0 0 0-2.68.43c-1.77-10.53-3.4-22.22-2.07-26.22z"
        transform="translate(-95.23 -30.18)"
        fill="url(#prefix__a)"
      />
      <path
        fill="#8e6f7f"
        d="M436.96 768.43l-20.11 2-.56-6.73-.39-4.63-.55-6.77 19 1 1.51 8.69.32 1.89h.01l.77 4.55zM583.41 753.31l-.55 6.76-.38 4.63-.57 6.73-20.12-2 .8-4.55.31-1.88 1.51-8.69 19-1z"
      />
      <path d="M562.1 655.92l-59.8 2.81q-4.08.2-8.16 0l-57.13-2.8v-45.26H562.1z" fill="#5f5570" />
      <path d="M562.1 655.92l-59.8 2.81q-4.08.2-8.16 0l-57.13-2.8v-45.26H562.1z" opacity={0.1} />
      <path
        d="M485.52 488.73s-19.92 6.69-27.42 12.19c-1.56 1.14-3 2.08-4.26 2.85a24.4 24.4 0 0 0-10.07 12.28c-.05.14-.1.26-.15.37-1 2.25-5.75 17.5-5.75 17.5s-3.5 8.5-4 14 28.5 20.25 28.5 20.25-14 30.5-7.75 38.25 97.5 11.5 95.5 0-5.5-30.5-3.75-35.75l31-22.5s-1.25-31.5-11-39.75-22-11.25-22-11.25l-19.41-5s-6.84 17-14.34 19.25-23.93-8.14-25.1-22.69z"
        fill="#eaeaf2"
      />
      <path
        d="M513.5 517.36s-8.46 7.06-12.9 0c0 0-4 11.94 0 15.94l-.15.81-.71 3.56-9.26 77 7.62 13.15 13.87-17.4-1.12-72-.5-4.13-.12-1h2.37s6.29-10.87.9-15.93z"
        opacity={0.1}
      />
      <path
        d="M515.5 517.36s-8.46 7.06-12.9 0c0 0-4 11.94 0 15.94l-.15.81-.71 3.56-9.26 77 7.62 13.15 13.87-17.4-1.12-72-.5-4.13-.12-1h2.37s6.29-10.87.9-15.93z"
        opacity={0.1}
      />
      <path
        fill="#bc8487"
        d="M512.97 609.43L499.1 626.8l-7.64-13.08 9.27-77.04.71-3.56.16-.82 1.25-3.24 8.38 3.24.12 1 .5 4.13 1.12 72z"
      />
      <path d="M435.86 761.98a67.93 67.93 0 0 1-12.85-1.31c-2.09-.52-4.71-1.1-7.1-1.61l-.56-6.77 19 1z" opacity={0.1} />
      <path
        d="M499.25 658.82c-1.66 4.67-51.24 3.85-51.24 3.85s-2.66 70-6.66 78.67-4.34 19.66-4.34 19.66-8.66 0-14-1.33-14-3-14-3l2.34-118.75s1-1.25 3.33-8.76c1.5-4.83 10.3-11.09 16.39-15 3.4-2.14 5.94-3.54 5.94-3.54l29.58 1.2 18.26.74s16.07 41.59 14.4 46.26z"
        fill="#5f5570"
      />
      <path d="M436.97 768.42l-20.12 2-.57-6.73a6 6 0 0 1 2.19.48c3.67 2.64 14.16.54 17.71-.3z" opacity={0.1} />
      <path
        d="M440.77 787.87a5.87 5.87 0 0 1-2.41 4.89 9.55 9.55 0 0 1-4.35 1.91 3.25 3.25 0 0 0-2.33 1.3 20.87 20.87 0 0 1-8.8 7.11c-6.93 2.72-16.68 5.39-21.25 1.22a6.32 6.32 0 0 1-1-1.13c-6.37-9.12 4.13-18.88 4.13-18.88s4.74-11.12 6.87-16.24a5 5 0 0 1 6.87-2.88c4 2.88 16.13.12 18.5-.49s3.13 9.11 3.13 9.11l.64 13.93a.76.76 0 0 0 0 .15z"
        fill="#bc8487"
      />
      <path
        d="M583.42 753.3l-.56 6.76c-2.39.51-5 1.09-7.11 1.61a68.11 68.11 0 0 1-12.84 1.32l1.51-8.69z"
        opacity={0.1}
      />
      <path
        d="M589.77 757.67s-8.66 1.67-14 3-14 1.33-14 1.33-.33-11-4.33-19.66-6.67-78.67-6.67-78.67-46.78-.27-48.45-4.94 20.39-45 20.39-45l13.45-.7 25.61-1.36s5 2.72 10.24 6.39 10.93 8.33 12.1 12.1c2.33 7.51 3.33 8.76 3.33 8.76z"
        fill="#5f5570"
      />
      <path d="M582.48 764.69l-.56 6.73-20.13-2 .8-4.55c3.55.85 14 2.94 17.7.3a6 6 0 0 1 2.19-.48z" opacity={0.1} />
      <path
        d="M580.29 766.17a5 5 0 0 1 6.88 2.88c2.12 5.12 6.87 16.25 6.87 16.25s10.5 9.75 4.13 18.87c-4 5.72-14.76 2.85-22.24-.09a20.74 20.74 0 0 1-8.8-7.11 3.26 3.26 0 0 0-2.34-1.3 9.81 9.81 0 0 1-4.44-2 5.72 5.72 0 0 1-2.31-4.88l.63-14s.75-9.73 3.12-9.12 14.5 3.38 18.5.5z"
        fill="#bc8487"
      />
      <path
        d="M528.6 497.17l-20.19 21.4-.56.6-.73-.43c-4.22-2.5-25.33-15.24-23.52-19.07 1-2.18 1.59-6.72 1.9-10.63 0-.47.06-.93.1-1.38.2-3.09.25-5.49.25-5.49s38-6.5 36.5 0c-.61 2.63.3 5.59 1.59 8.18.38.75.8 1.46 1.21 2.13a33 33 0 0 0 3.45 4.69z"
        fill="#ffc4d0"
      />
      <path
        d="M523.94 490.35a29.65 29.65 0 0 1-38.34-2.69c.2-3.09.25-5.49.25-5.49s38-6.5 36.5 0c-.58 2.65.3 5.59 1.59 8.18z"
        opacity={0.1}
      />
      <path
        d="M536.01 465.46a29.67 29.67 0 0 1-59.24 2.82q-.12-1.4-.12-2.82a29.67 29.67 0 1 1 59.33 0z"
        fill="#ffc4d0"
      />
      <path
        d="M535.64 460.72a7.1 7.1 0 0 1-5.58 1.51c-4.58-1-6.15-8-10.83-8.48s-7.79 6-12.53 5.87c-2-.05-3.8-1.36-5.64-2.27-3.22-1.59-8.52-2.56-12-1.36-5.23 1.79-7 6.63-10.34 10.48a15.25 15.25 0 0 1-1.87 1.81q-.12-1.4-.12-2.82a29.67 29.67 0 0 1 59-4.74z"
        opacity={0.1}
      />
      <path
        d="M501.06 456.36c1.84.9 3.6 2.22 5.64 2.27 4.73.12 7.82-6.39 12.52-5.88s6.25 7.45 10.85 8.48c3.09.7 6-1.61 8.31-3.76a13.23 13.23 0 0 0 3.57-4.39c1-2.48.48-5.34-.45-7.86s-2.24-4.94-2.7-7.59c-.56-3.18.09-6.66-1.42-9.52a8.43 8.43 0 0 0-5.94-4.1 14 14 0 0 0-7.33.83 10.37 10.37 0 0 1-3.61 1 7.64 7.64 0 0 1-2.65-.65 39.13 39.13 0 0 1-8.18-4.41 38.35 38.35 0 0 0-5.83-3.84 7.86 7.86 0 0 0-6.74-.27c-3.6 1.84-4.29 7-7.64 9.23-2.31 1.56-5.32 1.4-8.1 1.51s-6 .78-7.32 3.21c-1.18 2.09-.59 4.66-.44 7.05a18.1 18.1 0 0 1-1.11 7.4c-1.55 4.14-4.7 8.22-3.58 12.5.73 2.81 3.25 5.14 3.1 8a15.25 15.25 0 0 0-.19 2.23 1.65 1.65 0 0 0 1.31 1.6 2 2 0 0 0 1.12-.36 16.72 16.72 0 0 0 4.41-3.57c3.38-3.86 5.13-8.69 10.36-10.48 3.53-1.17 8.82-.23 12.04 1.37z"
        fill="#8e6f7f"
      />
      <path
        d="M535.47 630.92l-5.4 1.47-12.47 3.43a30.13 30.13 0 0 1-9.59 4.77c-7.63 1.93-12.56-2.27-16.66-8.77-1.65-2.6-.82-4.68 1.34-6.31 5.2-3.93 18.06-5.21 22-4.69a16.46 16.46 0 0 0 7.59-1.18 29.4 29.4 0 0 0 4.91-2.32z"
        fill="#ffc4d0"
      />
      <path d="M535.47 630.92l-5.4 1.47c-1.55-4.67-4.1-10.53-7.75-12.78a29.4 29.4 0 0 0 4.91-2.32z" opacity={0.1} />
      <path
        d="M571.99 618.06c-2.24 1.81-4.14 3.46-4.14 3.46s-26 8.15-31 18.4c0 0-4-20-12.5-20.25 0 0 9.15-3.59 11.79-6.66l25.63-1.34s5 2.72 10.22 6.39z"
        opacity={0.1}
      />
      <path
        d="M571.6 539.67l5.75 8.5 1.75 26.5s.5 25.5 0 26.5l.5-1s-1 10-4 11.75-9.75 7.6-9.75 7.6-26 8.15-31 18.4c0 0-4-20-12.5-20.25 0 0 12.75-5 12.5-8.25 0 0 9.75-8.75 10.5-11s5.62-2.5 5.62-2.5 1.13-15.5-1.12-18-3.5-7.25-3.5-7.25z"
        fill="#eaeaf2"
      />
      <path
        d="M508.01 640.56c-7.63 1.93-12.56-2.27-16.66-8.77-1.65-2.6-.82-4.68 1.34-6.31l.78.31s13.75 5.96 14.54 14.77z"
        opacity={0.1}
      />
      <path
        d="M504.85 648.55c-9 12.5-25.75-4.88-27-8.38-.45-1.27-2.16-2.4-4.13-3.31a44.58 44.58 0 0 0-7.75-2.57l14.88-12.12 2.85 1.14 8.77 3.51s21.38 9.23 12.38 21.73z"
        fill="#ffc4d0"
      />
      <path d="M483.7 623.31c-8.2 3.9-9.95 9.51-10 13.55a44.58 44.58 0 0 0-7.75-2.57l14.88-12.12z" opacity={0.1} />
      <path
        d="M470.6 644.92s-24-19-35.5-27.25a28.12 28.12 0 0 1-4-3.46c3.4-2.14 5.94-3.54 5.94-3.54l29.58 1.2c.79 1.37 1.26 2.3 1.26 2.3l16 10.5c-19.28 6.25-13.28 20.25-13.28 20.25z"
        opacity={0.1}
      />
      <path
        d="M438.6 545.17l-4.75 2.75s-5.75 18.25-4.25 30.25c0 0-4.5 17.25-2.75 20 0 0-2.25 9.25 9.25 17.5s35.5 27.25 35.5 27.25-6-14 13.25-20.25l-16-10.5s-5.37-10.66-10.5-13c0 0-4-4-1.5-6.75s4.5-5.75 4.5-8.5 1-15.75 1-15.75l3-14z"
        fill="#eaeaf2"
      />
      <path d="M511.35 533.29h-9.75a1.29 1.29 0 0 1-.16-.18l.16-.82 1.25-3.24 8.38 3.24z" opacity={0.1} />
      <path d="M514.5 516.36s-8.46 7.06-12.9 0c0 0-4 11.94 0 15.94h12s6.29-10.88.9-15.94z" fill="#bc8487" />
      <path d="M525.94 493.17l12.6 3.25s-11.94 31-14.57 31l-15.12-7.25z" opacity={0.1} />
      <path d="M528.6 497.17l-20.19 21.4-.56.6-.73-.43 17.65-26.92.43.71a33 33 0 0 0 3.4 4.64z" opacity={0.1} />
      <path d="M524.94 492.17l12.6 3.25s-11.94 31-14.57 31l-15.12-7.25z" fill="#eaeaf2" />
      <path d="M484.52 489.73l-10.92 3.44s10.75 32.5 13.75 34.25l19.5-7.25z" opacity={0.1} />
      <path d="M508.41 518.57l-.56.6s-26.25-15.25-24.25-19.5c1-2.18 1.59-6.72 1.9-10.63v-.61z" opacity={0.1} />
      <path d="M485.52 488.73l-10.92 3.44s10.75 32.5 13.75 34.25l19.5-7.25z" fill="#eaeaf2" />
      <path
        d="M459.51 541.82s6.58 1.17 6.46 8 2.71-8.83 2.71-8.83zM461.01 562.82s-1.83 10.33 0 19.67 1.67 12.5 3.09 13-3.09-32.67-3.09-32.67zM545.01 561.82a3.62 3.62 0 0 0-3 4.67c.84 4.18 3-4.67 3-4.67zM430.68 596.82s21.43-1.83 25 2-25-2-25-2zM555.01 598.27s15.67-1.93 19.34.74M561.35 600.82s9.33.33 11.5 1.5M563.18 604.17s8.5-.33 9.67 1M443.31 651.17s7.28 3.79 6.54 7.66-6.54-7.66-6.54-7.66zM437.01 653.01s11.11 14.41 9.6 19.16-9.6-19.16-9.6-19.16zM556.1 655.4s-5.5 4.53-5.35 8.27M429.1 744.67s0 4.25 7.87 10.5M568.01 734.67s-.84 8.84-8.5 13.42"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M473.6 434.63c0-.69-.12-1.4-.18-2.1a20.17 20.17 0 0 0 .14 4.58 18.64 18.64 0 0 0 .04-2.48zM472.01 462.57c.15-2.9-2.37-5.23-3.1-8a2.7 2.7 0 0 1-.08-.41 7.71 7.71 0 0 0 .08 3.41c.59 2.29 2.37 4.25 2.93 6.47.05-.52.15-.99.17-1.47zM541.95 450.08a13.33 13.33 0 0 1-3.57 4.39c-2.33 2.15-5.22 4.46-8.31 3.76-4.59-1-6.17-8-10.85-8.48s-7.79 6-12.52 5.87c-2-.05-3.8-1.36-5.64-2.27-3.22-1.59-8.51-2.56-12-1.36-5.23 1.79-7 6.63-10.36 10.48a16.87 16.87 0 0 1-4.4 3.58 2.12 2.12 0 0 1-1.13.35 1.39 1.39 0 0 1-1.12-.9v.07a15.39 15.39 0 0 0-.19 2.24 1.65 1.65 0 0 0 1.31 1.59 2.12 2.12 0 0 0 1.13-.35 16.87 16.87 0 0 0 4.4-3.58c3.38-3.85 5.13-8.69 10.36-10.48 3.53-1.2 8.82-.23 12 1.36 1.84.91 3.6 2.22 5.64 2.27 4.73.12 7.82-6.39 12.52-5.87s6.26 7.44 10.85 8.48c3.09.7 6-1.61 8.31-3.76a13.33 13.33 0 0 0 3.57-4.39 8.44 8.44 0 0 0 .43-4.54 7.07 7.07 0 0 1-.43 1.54z" />
      </g>
      <path d="M404.77 784.3s8.17-2.52 11.56 2.26M594.04 785.3s-13.53-.79-13 2.87" opacity={0.1} />
      <ellipse cx={864.17} cy={773.34} rx={26.93} ry={4.55} fill={primaryColor} opacity={0.1} />
      <ellipse cx={91.09} cy={810.68} rx={26.93} ry={4.55} fill={primaryColor} opacity={0.1} />
      <ellipse cx={195.26} cy={835.09} rx={26.93} ry={4.55} fill={primaryColor} opacity={0.1} />
      <ellipse cx={805.22} cy={822.1} rx={40.21} ry={6.8} fill={primaryColor} />
      <path
        d="M821.85 810.98a11.71 11.71 0 0 0 3.83-5.79c.5-2.29-.48-5-2.68-5.89-2.46-.94-5.09.77-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.25-9.81 4.13 4.13 0 0 0-.91-2c-1.36-1.46-3.84-.84-5.47.32-5.2 3.65-6.65 10.72-6.68 17.07-.53-2.29-.08-4.68-.1-7s-.65-5-2.64-6.23a7.94 7.94 0 0 0-4-.94c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.46 5.68.26 8s4.35 3.81 6.77 5.42a15 15 0 0 1 4.83 4.61 4.16 4.16 0 0 1 .36.83h14.61a41.06 41.06 0 0 0 9.08-6.26zM196.65 723.27s5.5 7.19-2.53 18-14.65 20-12 26.77c0 0 12.12-20.15 22-20.43s3.38-12.22-7.47-24.34z"
        fill={primaryColor}
      />
      <path
        d="M196.65 723.27a8.83 8.83 0 0 1 1.12 2.26c9.62 11.3 14.75 21.85 5.5 22.11-8.61.25-18.94 15.65-21.42 19.54.08.3.18.59.29.89 0 0 12.12-20.15 22-20.43s3.36-12.25-7.49-24.37z"
        opacity={0.1}
      />
      <path
        d="M206.86 732.43c0 2.53-.28 4.58-.63 4.58s-.63-2.05-.63-4.58.35-1.34.7-1.34.56-1.19.56 1.34z"
        fill="#ffd037"
      />
      <path
        d="M210.37 735.45c-2.22 1.21-4.16 1.94-4.32 1.63s1.49-1.54 3.71-2.75 1.35-.33 1.51 0 1.32-.09-.9 1.12z"
        fill="#ffd037"
      />
      <path
        d="M167.64 723.27s-5.5 7.19 2.53 18 14.65 20 12 26.77c0 0-12.11-20.15-22-20.43s-3.4-12.22 7.47-24.34z"
        fill={primaryColor}
      />
      <path
        d="M167.64 723.27a9 9 0 0 0-1.13 2.26c-9.62 11.3-14.74 21.85-5.5 22.11 8.62.25 18.95 15.65 21.43 19.54a7.76 7.76 0 0 1-.3.89s-12.11-20.15-22-20.43-3.37-12.25 7.5-24.37z"
        opacity={0.1}
      />
      <path
        d="M157.42 732.43c0 2.53.29 4.58.64 4.58s.63-2.05.63-4.58-.35-1.34-.7-1.34-.57-1.19-.57 1.34z"
        fill="#ffd037"
      />
      <path
        d="M153.92 735.45c2.22 1.21 4.15 1.94 4.32 1.63s-1.5-1.54-3.72-2.75-1.34-.33-1.51 0-1.31-.09.91 1.12z"
        fill="#ffd037"
      />
      <path
        d="M159.17 767.13s15.36-.48 20-3.77 23.63-7.24 24.77-1.95 23.09 26.29 5.75 26.43-40.3-2.7-44.92-5.51-5.6-15.2-5.6-15.2z"
        fill="#a8a8a8"
      />
      <path
        d="M209.99 786c-17.34.14-40.3-2.7-44.92-5.51-3.51-2.15-4.92-9.84-5.39-13.38h-.51s1 12.38 5.59 15.2 27.58 5.65 44.92 5.51c5 0 6.73-1.82 6.64-4.46-.7 1.62-2.61 2.61-6.33 2.64z"
        opacity={0.2}
      />
    </svg>
  );
};

UndrawPersonalization.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPersonalization;
