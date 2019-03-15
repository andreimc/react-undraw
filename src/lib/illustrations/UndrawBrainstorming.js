import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBrainstorming = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 924 561.04" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={443.09} y1={141.41} x2={443.09} y2={92.33} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={512.33} y1={183.73} x2={512.33} y2={134.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={589.27} y1={129.87} x2={589.27} y2={80.79} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={511.26} y1={49.3} x2={511.26} y2={0.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={434.54} y1={49.09} x2={434.54} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={365.29} y1={91.4} x2={365.29} y2={42.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={351.41} y1={729.19} x2={351.41} y2={208.18} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={826.56} y1={730.52} x2={826.56} y2={220.56} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M762.5 373.52A161.5 161.5 0 0 1 924 535v2.5H601V535a161.5 161.5 0 0 1 161.5-161.48zM161.5 373.52A161.5 161.5 0 0 1 323 535v2.5H0V535a161.5 161.5 0 0 1 161.5-161.5z"
        fill={primaryColor}
      />
      <path fill="url(#prefix__a)" d="M417.74 92.33h50.7v49.09h-50.7z" />
      <path fill="#f5f5f5" d="M418.61 93.17h48.96v47.4h-48.96z" />
      <path fill="url(#prefix__b)" d="M486.98 134.64h50.7v49.09h-50.7z" />
      <path fill="#f5f5f5" d="M487.85 135.49h48.96v47.4h-48.96z" />
      <path fill="url(#prefix__c)" d="M563.92 80.79h50.7v49.09h-50.7z" />
      <path fill="#f5f5f5" d="M564.79 81.63h48.96v47.4h-48.96z" />
      <path fill="url(#prefix__d)" d="M485.91.21h50.7V49.3h-50.7z" />
      <path fill="#7cfcff" d="M486.79 1.06h48.96v47.4h-48.96z" />
      <path fill="url(#prefix__e)" d="M409.19 0h50.7v49.09h-50.7z" />
      <path fill="#ffffa5" d="M410.06.85h48.96v47.4h-48.96z" />
      <path fill="url(#prefix__f)" d="M339.94 42.32h50.7v49.09h-50.7z" />
      <path fill="#ff69b4" d="M340.82 43.16h48.96v47.4h-48.96z" />
      <path
        d="M459.23 702.73L445 694.84c-14.9-8.09-18.44-19.57-18.54-28.43a36.58 36.58 0 0 1 .33-4.48l19.79-78.4s22.1-45.79-8.68-59.2C414.21 514 357.26 498 332.33 491.25c5.64-5.82 9.28-10.34 9.28-10.34l-.67-1.55.67-.82s-2.92-6.66-6.94-16.59l13.25-11.83s-.51-.09-1.34-.29l.55-.5s-.54-.1-1.43-.31c9.26-8.08 30.19-27.85 19.58-32.84-10.23-4.82-29.65 10.57-38.29 18.14-.71.27-1.57.59-2.57.94a537.83 537.83 0 0 1-3.85-11.09l17.08-26.94c.05-.51.08-1 .08-1.47 5.27-7.4 20.64-31 9.39-39.58-12.37-9.46-24.74 20.66-26.6 25.42-1.12-.14-1.82-.16-1.82-.16-1.24 2.48-4.42 4.31-7.18 5.49v-.72c0-.23 0-.62.05-.92a88 88 0 0 0 .32-9.06c0-1.79 0-3.58-.14-5.37-.34-4.83-.69-11-.74-16.38 0-4.85.42-8.62 1.4-9.35l-.75-.84a2.86 2.86 0 0 1 .75-1.53s-.8-.91-2.1-2.34c2.29-6.58 5.84-16.21 9.69-24.52l.82-.17c.29-.6.58-1.2.87-1.78a37.1 37.1 0 0 0 14.76-64.17 5.49 5.49 0 0 0 1.18-.81c2-1.87 2.15-5 2.13-7.72q0-10.25-.1-20.51c0-2.65 0-5.4-1.17-7.8a7.62 7.62 0 0 0-1.91-2.52 5.76 5.76 0 0 0-5.15-2.21c-2.4.39-4.05 2.52-5.68 4.33a32.91 32.91 0 0 1-34.4 8.88c-3-1-5.87-2.52-9-2.87s-6.76.83-8 3.73c-1.42 3.23.58 7.12-.54 10.47-2.16 6.5-13.11 5.32-16.34 11.36-2.71 5.07 1.9 10.71 5 15.54 5.81 9 6.85 20.12 9.87 30.38 1.24 4.23 4.57 13.46 9.26 17.78a13.9 13.9 0 0 0 1.37 1.29 90.35 90.35 0 0 1-3.17 9.91 11.38 11.38 0 0 0-7.63.82c-7.1 3.95-42.63 22.89-45 72.62-.16 3.41-.23 7.05-.21 10.87-.24 51.57 16 139.12 16 139.12s2.58-2.58 6.77-6.11c6.43 9.29 27 22.73 91.9 24.27l65.5 2.4s7.1 4.74-2.37 15.79c-6.21 7.25-7 24-6.79 34.68a88.65 88.65 0 0 1-2.24 21.53c-1.7 7.39-3.83 16.46-5.3 22a25.33 25.33 0 0 1-2.25-1.58l-9.47 62.36h.11l-.11.76s69.47 19.73 90 5.53c5.51-3.81 7.37-7.06 7.16-9.76.56-7.95-16.64-11.58-16.64-11.58z"
        transform="translate(-138 -169.48)"
        fill="url(#prefix__g)"
      />
      <path
        d="M150.27 127.19s-3.83 33.71-16.09 40.61S171 182.35 171 182.35s13.79-43.67 23-47.5-43.73-7.66-43.73-7.66zM183.21 215.3s13-35.24 26.05-25.28-10.73 40.61-10.73 40.61z"
        fill="#fdb797"
      />
      <path
        d="M112 356.28s-5.36 29.88 91.94 32.18l63.59 2.3s6.9 4.6-2.3 15.32c-6 7-6.79 23.3-6.59 33.66a86 86 0 0 1-2.17 20.88c-2.37 10.31-5.62 24-6.56 25.91-1.53 3.06 36 3.06 36 3.06l19.92-78.92s21.45-44.44-8.43-57.46-114.16-35.24-114.16-35.24z"
        fill="#4d8af0"
      />
      <path
        d="M274.39 484.23s10.69-9.59 14.15-5.94c0 0-11.09 25.87 15.73 40.42l13.79 7.66s29.11 6.13 9.19 19.92-87.34-5.36-87.34-5.36l9.19-60.53s13.03 10.73 25.29 3.83z"
        opacity={0.1}
      />
      <path
        d="M274.39 485s10.69-9.59 14.15-5.94c0 0-11.09 25.87 15.73 40.42l13.79 7.66s29.11 6.13 9.19 19.92-87.34-5.36-87.34-5.36l9.19-60.53s13.03 10.72 25.29 3.83z"
        fill="#333"
      />
      <path d="M170.19 221.43s9.19-2.3 11.49-6.9c0 0 19.92.77 18.39 15.32l-19.92 31.41z" fill="#3ad29f" />
      <path d="M170.19 221.43s9.19-2.3 11.49-6.9c0 0 19.92.77 18.39 15.32l-19.92 31.41z" opacity={0.05} />
      <path
        d="M154.86 160.9s-11.49-7.66-18.39-3.83-41.37 22.22-43.67 70.45 15.32 143.28 15.32 143.28 26.05-26.05 46.74-25.28 49-34.48 49-34.48-31-70.71-29.17-92.8a77.2 77.2 0 0 0 .18-11.71c-.69-9.91-1.45-25.7.64-27.27.04.03-16.81-19.12-20.65-18.36z"
        opacity={0.1}
      />
      <path
        d="M154.86 158.6s-11.49-7.66-18.39-3.83-41.37 22.22-43.67 70.49 15.33 143.26 15.33 143.26 26.05-26.05 46.74-25.28 49-34.48 49-34.48-31-70.71-29.17-92.8a77.2 77.2 0 0 0 .18-11.71c-.69-9.91-1.45-25.7.64-27.27.03.01-16.82-19.14-20.66-18.38z"
        fill="#3ad29f"
      />
      <path d="M185.51 269.7s28.35-27.58 41.37-21.45-23 35.24-23 35.24z" fill="#fdb797" />
      <path
        d="M118.09 219.13s9.19 76.62 14.56 81.22 22.22 26.05 55.93 0L210 281.19s-20.69-3.83-17.62-15.32c0 0-27.58 11.49-32.18 2.3s6.9-51.33 6.9-51.33-6.13-37.54-23.75-30.65-25.26 32.94-25.26 32.94z"
        opacity={0.1}
      />
      <path
        d="M117.32 218.37s9.19 76.62 14.56 81.22 22.22 26.05 55.93 0l21.45-19.15s-20.69-3.83-17.62-15.32c0 0-27.58 11.49-32.18 2.3s6.9-51.33 6.9-51.33-6.13-37.57-23.75-30.67-25.29 32.95-25.29 32.95z"
        fill="#3ad29f"
      />
      <path
        d="M150.27 128.72s.89 1.15-.38 7.28c6.6 7.52 14.87 15.71 25.67 15.71a36.09 36.09 0 0 0 8.17-.94c3.46-7.2 7.1-13.08 10.22-14.38 9.18-3.87-43.68-7.67-43.68-7.67z"
        opacity={0.1}
      />
      <circle cx={175.55} cy={114.17} r={36.01} fill="#fdb797" />
      <path
        d="M159.55 130.73c.59-2.76 1.08-5.95-.68-8.16-1-1.3-2.67-2-3.84-3.16-4.08-4.12-.49-11.1 3.7-15.11a60.92 60.92 0 0 1 35-16.37c2.22-.25 4.63-.45 6.27-2 2-1.82 2.08-4.82 2.07-7.49l-.1-19.9c0-2.57 0-5.24-1.13-7.57s-3.54-4.23-6.08-3.82c-2.33.38-3.93 2.45-5.51 4.21a31.94 31.94 0 0 1-33.39 8.62c-2.9-1-5.7-2.45-8.75-2.78s-6.56.81-7.8 3.62c-1.38 3.14.56 6.91-.52 10.16-2.1 6.31-12.73 5.16-15.86 11-2.63 4.92 1.84 10.4 4.87 15.09 5.64 8.72 6.65 19.53 9.58 29.49 1.55 5.29 6.46 18.63 13.24 19.48 8.05 1.06 7.68-9.41 8.93-15.31z"
        opacity={0.1}
      />
      <path
        d="M158.79 129.96c.59-2.76 1.08-5.95-.68-8.16-1-1.3-2.67-2-3.84-3.16-4.08-4.12-.49-11.12 3.73-15.12a60.92 60.92 0 0 1 35-16.37c2.22-.25 4.63-.45 6.27-2 2-1.82 2.08-4.82 2.07-7.49l-.1-19.9c0-2.57 0-5.24-1.13-7.57s-3.54-4.23-6.08-3.82c-2.33.38-3.93 2.45-5.51 4.21a31.94 31.94 0 0 1-33.39 8.62c-2.9-1-5.7-2.45-8.75-2.78s-6.56.81-7.8 3.62c-1.38 3.14.56 6.91-.52 10.16-2.1 6.31-12.73 5.16-15.86 11-2.63 4.92 1.84 10.4 4.87 15.09 5.64 8.72 6.65 19.53 9.58 29.49 1.55 5.29 6.46 18.63 13.24 19.48 8.01 1.07 7.64-9.4 8.9-15.3z"
        fill="#333"
      />
      <path fill="#7cfcff" d="M189.03 159.627l47.862-10.305 9.977 46.338-47.864 10.305z" />
      <path
        d="M980.38 351c-1-4.26-3-8.23-4.44-12.37a60.06 60.06 0 0 1-3-18.59c0-10.26 1.8-20.73 3.45-30.91 1.37-8.47 2.54-17.27 2.41-25.86 0-8.95-1.39-17.7-5.4-25.67-4.43-8.8-12.72-16.33-22.54-17-9.34-.63-18 4.86-27.2 6.33s-18.42-1.06-27.63-.39a40.31 40.31 0 0 0-23.68 10c-5.05 4.51-9.06 10.72-9.14 17.5v1.22C863.09 265.69 871 269.41 880 271a36.66 36.66 0 0 0 31.4 41.8q.66 1.19 1.28 2.43c.1 1.28.17 2.56.18 3.85a53 53 0 0 1-4.44 20.26 26.27 26.27 0 0 1-5.93 2.8L879.33 369a38.09 38.09 0 0 0-6.13 7.42q-1.16.65-2.33 1.27l1.35.35-.11.2-1.23.67.75.2a31.19 31.19 0 0 0-3.89 15.59 29.93 29.93 0 0 0 3.66 14.61 76.11 76.11 0 0 1 4.11 9.56l-7.77 12.43-26.26 38.9-20.17 3.8a56.52 56.52 0 0 0-13.6 0l4.16-7.85a2 2 0 1 0-3.59-1.76l-5.55 10.47c-6.29 1.43-12.87 4.35-17.45 10.14-5 6.29 0 8.42 7.41 8.8l-.77 1.44a2 2 0 0 0 .25 2.14c-.94.26-2 .55-3 .88h-16.79v7.95c-4.81 3.39-8.94 7.79-11 13.45-13.4 11.36-14.54 33.14-14.54 33.14L704 678s-.93 1.39-2.33 3.65c-11.75 7.45-35.15 36.75-29 48.86l25.78-13.08.67.28 1.88-1.57 52-26.35-11.53-23.28-1.6.6c-.47-2.34-.28-4.5 1.46-5.59 2.83-1.77 20.87-36.2 35.52-64.81 5.12 15.3 15.8 50.87 10.79 68.16l-1.91 1.43c-9.07 8.5-25.11 46-15.41 56.31l26.06-24.43 20.08-18.33.39-.85 19.1-18-17.58-19.12-2.74 2c-1.59-4.7-4.89-15.33-3.47-19.09s5.14-41.65-.63-67.59l4.14-.28c14.37 18.76 31.74 35.45 36.8 36.72a3.84 3.84 0 0 0 1.52.05c9.84 1.58 27.8-37.92 27.8-37.92h50.08c44.09-6.3 36.79-41.75 27.93-63.3.27.13.53.26.78.39 0 0-.1-.47-.28-1.36l.28.14a218.15 218.15 0 0 1-4.09-41.13 154.15 154.15 0 0 1 2.59-28.66c3.48 6.1 8.86 11.26 15.7 12.11a499.6 499.6 0 0 0 6.58-67c0-1.59.08-3.18.08-4.77a45.7 45.7 0 0 0-1.06-11.19zM851.23 490.14l2.61-3c12-1.65 24.38-3.58 32.61-5.48a33.41 33.41 0 0 1-10.64 9.34c-6.26-.36-15.01-.78-24.58-.86zm30.91-35.06l-2.81 7.92-5 1zm-85 38.77a127.42 127.42 0 0 0 14-1.28l-.27.23a68.1 68.1 0 0 0-11.06 2.9s-1.55.22-4 .79z"
        transform="translate(-138 -169.48)"
        fill="url(#prefix__h)"
      />
      <path
        d="M656.13 327.59a1.92 1.92 0 0 1-.88-2.57L671 295.35a1.92 1.92 0 0 1 2.57-.88 1.92 1.92 0 0 1 .88 2.57l-15.75 29.67a1.92 1.92 0 0 1-2.57.88z"
        fill="#4d8af0"
      />
      <path
        d="M662.85 325.45s-42.77 6.17-38.07 35.53l13.51 54.62s20 53.44 12.33 74c0 0-7.63 32.89-15.27 31.71s16.44 5.87 16.44 5.87l27-24.67L687 484.3s2.35-5.29-8.22-14.09c0 0-5.87-15.86-4.11-20.55s7-62.14-7.35-81.87z"
        fill="#be7c5e"
      />
      <path
        d="M662.85 325.45s-42.77 6.17-38.07 35.53l13.51 54.62s20 53.44 12.33 74c0 0-7.63 32.89-15.27 31.71s16.44 5.87 16.44 5.87l27-24.67L687 484.3s2.35-5.29-8.22-14.09c0 0-5.87-15.86-4.11-20.55s7-62.14-7.35-81.87z"
        opacity={0.1}
      />
      <path d="M634.45 543.63l63.14-59.19-16.91-18.39-31.42 23.47c-8.72 8.17-24.15 44.19-14.81 54.15z" fill="#f5f5f5" />
      <path d="M745.17 321.63s-63.42-5.87-85.74 5.29c0 0-1.76 9.4 7.63 20.55s78.11-25.84 78.11-25.84z" fill="#333" />
      <path d="M745.17 321.63s-63.42-5.87-85.74 5.29c0 0-1.76 9.4 7.63 20.55s78.11-25.84 78.11-25.84z" opacity={0.3} />
      <path fill="#e0e0e0" d="M636.46 327.93h61.06v8.53h-61.06z" />
      <path
        d="M675.29 339.25s-34.06-2.35-48.16 8.22-15.27 32.89-15.27 32.89l-41.11 120.39s-12.75 19.12-14.68 30.54c-.59 3.52 10 7.63 10 7.63l35.82-30 7-10s-7-11.16-2.35-14.09 52.85-99.25 52.85-99.25l61.7-4.06z"
        fill="#be7c5e"
      />
      <path
        d="M807.42 306.36s42.87 68.12-18.79 76.93h-48.16s-17.62 38.76-27 36.41-62.84-59.9-54.62-80.46l75.76-17.62s14.09-6.46 15.27-19.38z"
        opacity={0.1}
      />
      <path
        d="M808.6 306.36s42.87 68.16-18.8 76.93h-48.15s-17.62 38.76-27 36.41-62.85-59.9-54.65-80.45l75.76-17.62s14.09-6.46 15.27-19.38z"
        fill="#333"
      />
      <path d="M540.62 551.23l77.18-39.16-11.09-22.38-36.71 13.7c-10.66 5.41-35.55 35.67-29.37 47.84z" fill="#f5f5f5" />
      <path
        d="M742.82 240l-14.68 23.52-35.24 52.27s-28.78 1.17-25.25 24.08 37.58-11.75 37.58-11.75l57-64.6z"
        fill="#be7c5e"
      />
      <path
        d="M742.82 240l-14.68 23.52-35.24 52.27s-28.78 1.17-25.25 24.08 37.58-11.75 37.58-11.75l57-64.6z"
        opacity={0.1}
      />
      <circle cx={774.83} cy={114.62} r={35.24} fill="#be7c5e" />
      <path d="M757.5 133.12s31.13 28.19 13.51 57 43.46-19.38 43.46-19.38-21.14-35.27-16.47-56.41z" fill="#be7c5e" />
      <path
        d="M781 162.52s-8.22 12.92-19.38 16.44l-22.32 25.81s-18.79 16.44-7.63 37.58 17.62 73.41 17.62 73.41 55.2 0 68.12 7c0 0-11.16-51.09 4.11-86.92s-11.75-85.15-11.75-85.15z"
        opacity={0.1}
      />
      <path
        d="M781 161.31s-8.22 12.92-19.38 16.44l-22.32 25.84s-18.79 16.44-7.63 37.58 17.62 73.41 17.62 73.41 55.2 0 68.12 7c0 0-11.16-51.09 4.11-86.92s-11.75-85.14-11.75-85.14z"
        fill="#f55f44"
      />
      <path
        d="M803.9 220.04s-40.52 84-49.33 89.26-75.76 12.33-75.76 12.33-41.11 7.63-30-6.46 34.65-10.57 34.65-10.57l55.79-10.57 32.3-91z"
        fill="#be7c5e"
      />
      <path
        d="M785.69 180.1s-32.3 19.38-25.84 37c0 0 37-5.29 49.92 19.38 0 0 20.55-22.9 4.7-47.57 0 0-8.81-15.86-28.78-8.81z"
        opacity={0.1}
      />
      <path
        d="M785.69 178.93s-32.3 19.38-25.84 37c0 0 37-5.29 49.92 19.38 0 0 20.55-22.9 4.7-47.57 0 0-8.81-15.86-28.78-8.81z"
        fill="#f55f44"
      />
      <path
        d="M758.91 110.97a3.91 3.91 0 0 1 4.09 3.86l4.4 16.86c2.09 8 4.2 16.14 4.2 24.42 0 24.5-18.74 45.63-40.44 57l22.2 5.83a17.15 17.15 0 0 0 6.74.84 14.19 14.19 0 0 0 5.26-2.17c9.44-5.78 16.21-15.2 20.68-25.33s6.85-21 9.21-31.84a106.12 106.12 0 0 1 13.21 42.24c1.49 16.13-.62 33.06 5.61 48 3.09 7.41 9 14.47 17 15.46a480.38 480.38 0 0 0 6.33-64.4c.15-4.78.21-9.62-.92-14.27-1-4.1-2.9-7.91-4.27-11.9-5.32-15.55-2.2-32.55.43-48.77s4.51-33.7-2.88-48.38c-4.26-8.46-12.23-15.7-21.68-16.34-9-.6-17.27 4.67-26.15 6.08s-17.71-1-26.56-.37a38.76 38.76 0 0 0-22.79 9.73c-4.86 4.34-8.71 10.31-8.78 16.82-.2 17.48 23.28 15.28 35.11 16.63z"
        fill="#333"
        opacity={0.1}
      />
      <path
        d="M758.91 109.8a3.91 3.91 0 0 1 4.09 3.86l4.4 16.86c2.09 8 4.2 16.14 4.2 24.42 0 24.5-18.74 45.63-40.44 57l22.2 5.83a17.15 17.15 0 0 0 6.74.84 14.19 14.19 0 0 0 5.26-2.17c9.44-5.78 16.21-15.2 20.68-25.33s6.85-21 9.21-31.84a106.12 106.12 0 0 1 13.22 42.25c1.49 16.13-.62 33.06 5.61 48 3.09 7.41 9 14.47 17 15.46a480.38 480.38 0 0 0 6.33-64.4c.15-4.78.21-9.62-.92-14.27-1-4.1-2.9-7.91-4.27-11.9-5.32-15.55-2.2-32.55.43-48.77s4.51-33.7-2.88-48.38c-4.26-8.46-12.23-15.7-21.68-16.34-9-.6-17.27 4.67-26.15 6.08s-17.71-1-26.56-.37a38.76 38.76 0 0 0-22.77 9.65c-4.86 4.34-8.71 10.31-8.78 16.82-.23 17.55 23.25 15.35 35.08 16.7z"
        fill="#333"
      />
    </svg>
  );
};

UndrawBrainstorming.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBrainstorming;
