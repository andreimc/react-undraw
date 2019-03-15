import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawNewsletter = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 960.22 727.85" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={224.88} y1={440.26} x2={438.9} y2={440.26} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={636.83} y1={740.55} x2={636.83} y2={204.8} xlinkHref="#prefix__a" />
      </defs>
      <ellipse cx={516.58} cy={627.85} rx={350} ry={100} fill="#f5f5f5" />
      <path
        d="M849.58 238.84s-62 62-27 154-60 245-60 245 1-.15 2.91-.48c127.34-22.48 190.61-168.12 119.8-276.31-26.29-40.22-47.94-87.41-35.71-122.21z"
        fill={primaryColor}
      />
      <path
        d="M849.58 238.84s-35 76 0 138 6 236-87 261"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M960 489.61s-70.75-11.27-77.2 52.14-136 72.19-136 72.19.84.58 2.43 1.62c107 70.24 209.29 44.74 193.88-48.53-5.77-34.67-5.31-69.5 16.89-77.42z"
        fill={primaryColor}
      />
      <path
        d="M960 489.61s-70.75-11.27-77.2 52.14-136 72.19-136 72.19.84.58 2.43 1.62c107 70.24 209.29 44.74 193.88-48.53-5.77-34.67-5.31-69.5 16.89-77.42z"
        fill="#f5f5f5"
        opacity={0.2}
      />
      <path
        d="M960 489.61s-54.92 12.06-50.41 62S828 661.39 746.76 613.92"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M151.4.08c-8.06-.28-16.32 0-23.88 2.82-20.57 7.67-30.32 32.76-27.15 54.49s16.21 40.6 29.74 57.89 28.19 34.36 35.61 55c3.7 10.31 5.43 21.86 1.67 32.15-5.8 15.87-23.29 24.74-40.08 26.58s-33.65-1.75-50.5-3c-7.07-.5-14.34-.56-21 1.76-7.31 2.53-13.4 7.69-19 13.07-21.85 21.1-39.34 49.9-36.51 80.14 3.2 34.28 31.74 61.38 63 75.91 10.35 4.82 21.3 8.72 30.41 15.6 24 18.14 29.39 52.13 27 82.14s-10.53 60.05-6 89.8c5.33 34.6 28.92 65.85 60.74 80.45 28.35 13 63.83 12.19 89-6.2 12.27-9 21.55-21.41 29.62-34.28a295.87 295.87 0 0 0 29.45-61.88c3.51-10.31 6.81-21.4 15-28.57 5-4.41 11.48-6.88 17.89-8.8 19.32-5.78 39.67-7.37 59.17-12.51s39.12-14.72 49.72-31.85c15-24.31 8-55.4 8.07-84 .12-65.16 39.11-123.5 53.5-187 4.7-20.76 6.45-43.73-4.05-62.24-7.14-12.63-19.17-21.63-31.82-28.63-27.8-15.44-59.4-22.31-90.49-29-43.21-9.28-95.68-10.48-129.17-40.5C239.2 20.62 195.23.08 151.4.08z"
        fill={primaryColor}
        opacity={0.2}
      />
      <path
        d="M428.14 338.37a150.56 150.56 0 0 0-7.29-46.26l-12-37.21v-1.84c.37-23.85-18.22-35.75-25.38-34.46-7.33 1.32-27.67-8.88-27.67-8.88v.28a38.1 38.1 0 0 1-3.76-5.14 32.62 32.62 0 0 0 6.71-46.18 14.33 14.33 0 0 0 4.83-6.48c1.66-4.67.39-10-2.31-14.16a27.44 27.44 0 0 0-4-4.77 50.64 50.64 0 0 0-7.46-6.1c-6.67-4.62-14-8.59-22-10a9.16 9.16 0 0 0-4.21 0 17.45 17.45 0 0 0-3.41 1.84c-5.48 3.12-12.3 1.77-18.62 1.44s-14 1.44-16 7.37c-.62 1.83-.58 3.81-1 5.69-1 4.6-4.55 8.17-7.29 12s-4.79 9-2.51 13.16c.78 1.4 2 2.69 2 4.29 0 1.15-.68 2.18-1 3.28-.69 2.5.61 5 2.61 6.81a11.09 11.09 0 0 0 3 2.29c3.17 1.62 6.82 2.12 10.05 3.62a16.51 16.51 0 0 1 4.38 3 17.22 17.22 0 0 1 4.76 12.43l.67.07v.59c.7.08 1.44.15 2.17.18A33 33 0 0 0 307 200q-.34 1.28-.77 2.6c-2.35 1.63-21.57 14.43-43.43 11.35-23.33-3.29-36.67 98.71-36.67 98.71a116.66 116.66 0 0 0-1.26 17.62c-.1 15 3.05 34.63 20.6 31.74l9.33-3.07v50.45s1.33 13.82-3.33 23 14.67 5.92 14.67 5.92.74.77 2.1 2.08l-.43 1.21.57.58a132.29 132.29 0 0 1-10.23 25.09l.55.28c-.35.67-.55 1-.55 1s7.18 3.67 17.06 8.4c7.94 26.84 25.32 89 19.6 100.84l.16.34c1.07 2.22 7.05 15.31 5.84 27.3-1.09 10.72 13.75 59.43 19.29 77.12l-2.62.53 9.33 33.56-2 21.72s-11.33 30.27 15.33 24.35 19.33-30.27 19.33-30.27l.67-49.36s-2.57-1.43-5.74-2.8c-2.18-5.89-6.93-19.81-6.93-29.44 0-12.5-8.67-66.47-8.67-66.47V584l-.05-.72v-.12c0-.67-.11-1.59-.19-2.71v-.06c-1-14.59-4-64.16-1.81-90a57.75 57.75 0 0 1 6-3.58c6.49 16.4 23.22 60.71 22.15 79.3-1.33 23-.33 4.94 0 2 .1-.91.17.19.2 2.66V580.5c0 2 0 4.22-.07 6.53v1.4c0 1.41 0 2.85-.07 4.31 0 2-.08 3.94-.12 5.95-.1 4.5-.23 9.05-.39 13.31q0 .71-.05 1.41-.05 1.4-.11 2.74t-.12 2.62q-.06 1.27-.13 2.47c-.05.94-.11 1.84-.16 2.7l-3.62-.52-.77 8.32a90.46 90.46 0 0 0 5 39c1.24 3.42 2.2 6.25 2.41 7.26.67 3.29 0 27 0 27s4 30.93 22.67 25c8.4-2.67 12.48-10.79 14.43-18.93a46.94 46.94 0 0 0-2.31-28.27c-2.65-6.66-5.36-16-3.45-23.22 3.33-12.5 3.33-30.27 3.33-30.27l-2.06-.29a32.84 32.84 0 0 0 1.39-3s-.67-45.41 5.33-51.33c3.3-3.26 3-11.09 2-17.49a119.67 119.67 0 0 1-1-28c.41-4.81 1-9 1.69-10.49 1.76-3.48 3.52-38.56-4.27-55.44l1.6-.5-.25-1.24.25-.08a98 98 0 0 0 4 9.21 3.66 3.66 0 0 0 1.33.66c21.59-3.79 22.46-23.94 21.26-34.94.91.44 1.41.72 1.41.72l2-29c2.05-4.63 2.81-10.54 2.76-16.93.09-22.84-10.87-52.8-10.87-52.8zm-23.8 82.43c-1.48-12.63-3.53-24.52-3.53-24.52l-10-35.54V347.8l15.86 59.2z"
        transform="translate(-120 -86.08)"
        fill="url(#prefix__a)"
        opacity={0.5}
      />
      <path
        d="M239.38 528.85l-.74 8.13a89.47 89.47 0 0 0 4.85 38.15c1.19 3.35 2.12 6.11 2.32 7.1.64 3.22 0 26.37 0 26.37s3.86 30.23 21.87 24.44c8.1-2.6 12-10.55 13.92-18.5a46.44 46.44 0 0 0-2.24-27.62c-2.56-6.51-5.18-15.66-3.33-22.69 3.22-12.22 3.22-29.58 3.22-29.58z"
        fill="#5a5773"
      />
      <path
        d="M220.09 389.29s25.08 61.1 23.79 83.6-.32 4.82 0 1.93c.57-5.15 0 56-1.93 63 0 0 26.37 19.29 36.66-6.43 0 0-.64-44.37 5.14-50.16 3.18-3.18 2.87-10.84 1.93-17.09a118.45 118.45 0 0 1-1-27.33c.39-4.7.93-8.84 1.63-10.25 1.93-3.86 3.86-47.59-7.72-59.81z"
        fill="#605d82"
      />
      <path
        d="M245.17 537.85c1.93-7.07 2.5-68.18 1.93-63-.32 2.89-1.29 20.58 0-1.93s-23.79-83.6-23.79-83.6l56.11-21.58c-.26-.33-.53-.64-.8-.93l-58.52 22.51s25.08 61.1 23.79 83.6-.32 4.82 0 1.93c.57-5.15 0 56-1.93 63 0 0 10.53 7.7 20.88 6.88-9.21-.69-17.67-6.88-17.67-6.88z"
        opacity={0.1}
      />
      <path
        d="M198.22 587.37l9 32.8-1.93 21.22s-10.93 29.58 14.79 23.79 18.65-29.58 18.65-29.58l.64-48.23s-10.29-5.79-14.79-5.14-26.36 5.14-26.36 5.14z"
        fill="#5a5773"
      />
      <path
        d="M153.85 373.86s29.58 95.82 22.51 110.61c0 0 7.07 14.15 5.79 27s20.58 81.67 20.58 81.67l32.16-5.79s-7.72-19.29-7.72-31.51-8.36-65-8.36-65-7.07-96.47 1.29-106.76z"
        fill="#605d82"
      />
      <g opacity={0.1}>
        <path d="M217.6 391.92c-5.33 21.84.56 102.21.56 102.21s8.36 52.73 8.36 65c0 9.33 4.49 22.77 6.62 28.61l1.74-.31s-7.72-19.29-7.72-31.51-8.36-65-8.36-65-5.38-73.45-1.2-99zM176.36 484.47l.16.33c.05-.33.1-.68.13-1a7.11 7.11 0 0 1-.29.67zM218.64 387.24a9.47 9.47 0 0 1 1.45-3.09l-66.24-10.29s.39 1.25 1.06 3.48z" />
      </g>
      <path
        d="M308.19 339.13s9.65 36-19.29 41.16a3.52 3.52 0 0 1-1.29-.64s-16.72-32.8-3.86-45.66zM189.86 99.92s1.93 27-19.29 39.87 45 48.23 45 48.23l34.73-55.31s-14.78 1.91-23.78-23.79z"
        fill="#a1616a"
      />
      <path
        d="M175.71 141.7s32.8 68.17 62.38 3.86l45.66 226.36s-70.75 21.87-71.38 32.16S141 377.72 141 377.72s15.43-28.3 11.58-45.66 23.13-190.36 23.13-190.36z"
        opacity={0.1}
      />
      <path
        d="M175.71 140.41s32.8 68.17 62.38 3.86l45.66 226.37S213 392.51 212.37 402.8 141 376.43 141 376.43s15.43-28.3 11.58-45.66 23.13-190.36 23.13-190.36z"
        fill="#e1e7ef"
      />
      <path
        d="M207.87 605.38s-8.36-18.65 10.93-18.65 16.08 16.72 16.08 16.72zM251.6 557.14s-7.72-19.94 11.58-20.58 9.65 18 9.65 18z"
        fill="#5a5773"
      />
      <path
        d="M235.2 125.92s19.61 10 26.69 8.68 25.72 10.93 24.44 35.37l11.62 36.46a148.9 148.9 0 0 1 7 45.21s16.72 46.3 7.72 66.88l-1.93 28.3s-14.79-8.36-30.23-5.79l3.89-23.11-17.4-65.61-28.94-70.1z"
        opacity={0.1}
      />
      <path
        d="M235.2 124.65s19.61 10 26.69 8.68 25.72 10.93 24.44 35.37l11.62 36.46a148.9 148.9 0 0 1 7 45.21s16.72 46.3 7.72 66.88l-1.93 28.3s-14.79-8.36-30.23-5.79l3.86-23.15L267 251.02l-28.91-70.1z"
        fill="#67647e"
      />
      <path
        d="M267.68 202.79v72.67l9.65 34.73s6.43 37.94 4.5 49.52-32.8 14.15-41.16 4.5-3.86-92-3.86-92l-1.61-120.55 1.29-3.86z"
        opacity={0.1}
      />
      <path
        d="M269 199.58v72.67l9.65 34.73s6.43 37.94 4.5 49.52-32.8 14.15-41.16 4.5-3.86-92-3.86-92l-1.61-120.58z"
        fill="#67647e"
      />
      <path
        d="M139.38 260.03l20.58 64-9.65 27.33s45.66 48.23 74.6 25.08c0 0 3.22-98.4-3.22-121.55s-37.3-101-37.3-101L178 133.34l-34.08 19.29z"
        opacity={0.1}
      />
      <path
        d="M137.77 256.81v63s1.29 13.51-3.22 22.51 14.15 5.79 14.15 5.79 45.66 48.23 74.6 25.08c0 0 3.22-98.4-3.22-121.55s-37.3-101-37.3-101l-6.43-20.58-34.08 19.29z"
        fill="#67647e"
      />
      <path
        d="M187.61 118.87s-19.61 14.47-42.12 11.25-35.37 96.47-35.37 96.47-8.36 51.45 18.65 46.95l59.81-19.94s-12.86-13.51-10.93-30.87L148.7 234.3 150 179z"
        opacity={0.1}
      />
      <path d="M111.4 225.3s-8.36 51.45 18.65 46.95l59.81-19.94s-12.86-13.5-10.93-30.87L150 233.02z" opacity={0.1} />
      <path d="M177.51 228.22s20.07-26.39 34.85-13.72-29.55 35.89-29.55 35.89z" fill="#a1616a" />
      <path
        d="M187.61 117.58s-19.61 14.47-42.12 11.25-35.37 96.47-35.37 96.47-8.36 51.45 18.65 46.95l59.81-19.94s-12.86-13.51-10.93-30.87l-28.95 11.58 1.3-55.31 32.8-27z"
        fill="#67647e"
      />
      <path
        d="M227.16 110.18l-36.66-9s1.91 2.16-.32 10.61c5.9 6.77 13.15 15.76 22.83 15.76a32 32 0 0 0 19.22-6.37 57.82 57.82 0 0 1-5.07-11z"
        opacity={0.1}
      />
      <circle cx={212.37} cy={94.11} r={32.16} fill="#a1616a" />
      <path
        d="M224.56 80.15c7.46-1.27 15.66-4.58 18.16-11.72 1.6-4.57.38-9.77-2.23-13.84s-6.45-7.2-10.41-10c-6.43-4.52-13.52-8.4-21.26-9.76a8.73 8.73 0 0 0-4.06 0 16.76 16.76 0 0 0-3.29 1.8c-5.29 3.05-11.87 1.73-18 1.41s-13.48 1.41-15.41 7.2c-.6 1.79-.56 3.72-1 5.56-1 4.5-4.39 8-7 11.75s-4.62 8.82-2.42 12.86c.75 1.37 2 2.63 2 4.19a13 13 0 0 1-1 3.21c-.91 3.32 1.74 6.67 4.8 8.25s6.58 2.07 9.7 3.54a17 17 0 0 1 9.47 15.74c2.84.33 6.15.5 8.07-1.62.86-.95 1.28-2.22 2.06-3.23 1-1.32 2.56-2.1 3.84-3.16 6.73-5.53 1.95-13.17 5.76-19.13 2-3.07 5.18-2.13 8.4-2.08a74.22 74.22 0 0 0 13.82-.97z"
        opacity={0.1}
      />
      <path
        d="M223.92 79.51c7.46-1.27 15.66-4.58 18.16-11.72 1.6-4.57.38-9.77-2.23-13.84s-6.45-7.2-10.41-10c-6.43-4.52-13.52-8.4-21.26-9.76a8.73 8.73 0 0 0-4.06 0 16.76 16.76 0 0 0-3.29 1.8c-5.29 3.05-11.87 1.73-18 1.41s-13.48 1.41-15.41 7.2c-.6 1.79-.56 3.72-1 5.56-1 4.5-4.39 8-7 11.75s-4.62 8.82-2.42 12.86c.75 1.37 2 2.63 2 4.19a13 13 0 0 1-1 3.21c-.91 3.32 1.74 6.67 4.8 8.25s6.58 2.07 9.7 3.54a17 17 0 0 1 9.5 15.78c2.84.33 6.15.5 8.07-1.62.86-.95 1.28-2.22 2.06-3.23 1-1.32 2.56-2.1 3.84-3.16 6.73-5.53 1.95-13.17 5.76-19.13 2-3.07 5.18-2.13 8.4-2.08a74.22 74.22 0 0 0 13.79-1.01z"
        fill="#4a4347"
      />
      <path
        d="M262.85 187.68s7.07 36.66 3.86 50.81a47.15 47.15 0 0 0 .84 24.92M148.56 203.11s-3.08 24.44 2.05 29.58"
        opacity={0.1}
      />
      <path d="M328.13 504.3a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path
        d="M910 415.63v-.83L637.16 205a1 1 0 0 0-1.19 0L363.12 414.8V740h.52v.52h546.89v-325.2z"
        transform="translate(-120 -86.08)"
        fill="url(#prefix__b)"
        opacity={0.5}
      />
      <path fill="#fff" d="M780.58 644.85h-528v-314l264-203 264 203v314z" />
      <path fill="#e0e0e0" d="M761.58 626.24h-490v-291.4l245-188.39 245 188.39v291.4z" />
      <path fill={primaryColor} d="M300.798 220.455l298.899-78.359 99.66 380.154-298.899 78.359z" />
      <path fill="#f5f5f5" d="M363.58 199.85h309v393h-309z" />
      <path opacity={0.05} d="M255.08 331.35l264 157-264 157v-314z" />
      <path fill="#fff" d="M253.08 331.35l264 157-264 157v-314z" />
      <path opacity={0.05} d="M779.08 331.35l-264 157 264 157v-314z" />
      <path fill="#fff" d="M781.08 331.35l-264 157 264 157v-314z" />
      <path opacity={0.05} d="M253.08 640.35l264-206 264 206h-528z" />
      <path fill="#fff" d="M253.08 645.35l264-206 264 206h-528z" />
      <path
        d="M306.73 669.2s-13.26-45 2.49-78.14a71.09 71.09 0 0 0 5.75-44.6 119.57 119.57 0 0 0-6.31-20.93"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M318.45 504.59c0 5.52-10 21.51-10 21.51s-10-16-10-21.51a10 10 0 1 1 20 0zM335 535.15c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49A10 10 0 0 1 335 535.15zM334.24 587.36c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 1 1 9 17.84zM324.8 626.75c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 0 1 11.88 16.06zM293.91 548.84c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 0 0-13.92 14.33zM283.45 595.05c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 0 0-9 17.84zM279.45 641.35c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 1 0-11.88 16.06z"
        fill={primaryColor}
      />
      <path
        fill={primaryColor}
        opacity={0.5}
        d="M381.58 217.85h124v10h-124zM381.58 257.85h268v10h-268zM381.58 283.85h268v10h-268z"
      />
      <path fill={primaryColor} opacity={0.4} d="M381.58 309.85h268v10h-268zM381.58 335.85h268v10h-268z" />
      <path fill={primaryColor} opacity={0.3} d="M381.58 361.85h153v10h-153zM381.58 387.85h209v10h-209z" />
    </svg>
  );
};

UndrawNewsletter.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNewsletter;
