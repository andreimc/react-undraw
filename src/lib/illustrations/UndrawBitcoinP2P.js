import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBitcoinP2P = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 969.46 765.65" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={752.2} y1={747.19} x2={752.2} y2={192.69} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={514.88} y1={731.62} x2={514.88} y2={731.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={512.44} y1={731.62} x2={512.44} y2={730.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={478.67} y1={749.38} x2={478.67} y2={201.96} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M246.39 88.38c-12.16 6.33-24.34 14.3-30.53 26.53-4.55 9-5.38 19.32-6.13 29.36l-9 119.86c-2 26.71-4.19 54.16-15.85 78.28-20.09 41.55-63.83 65.26-96.67 97.68C34.4 493.22 11.3 582.78 51.71 646.7a134.14 134.14 0 0 0 77.31 57.13c18.74 5.1 38.32 6 57.72 6.87q243.75 10.57 487.83 8.48c19.32-.17 39.17-.5 57-7.84 24.63-10.13 42.33-32.43 54.52-56.11s20-49.39 31.53-73.39c23.6-49 62-88.94 95.46-131.77 18.45-23.6 35.72-48.61 46.08-76.71 16.47-44.66 13.59-97.19-12.15-137.24-11.12-17.31-26.26-32.3-33.83-51.43-10.57-26.75-4.67-56.71-2.15-85.36s-.24-61.36-22.29-79.83c-12.17-10.19-28.29-14.21-44-16.51-75.21-11-150.75 10.77-225.33 25.45-65.81 13-132.53 20.44-199.29 26.37-59.26 5.28-119.65 5.42-173.73 33.57z"
        fill={primaryColor}
      />
      <path
        d="M220.92 647.2s-29.11-98.83 5.46-171.57c14.51-30.53 19.33-64.8 12.62-97.93a262.52 262.52 0 0 0-13.86-46"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M246.64 285.78c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 0 1 43.86 0zM282.89 352.83c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM281.31 467.51c-10.81 5.45-52 1.69-52 1.69s21.42-35.37 32.25-40.85a21.93 21.93 0 0 1 19.75 39.16zM260.58 553.98c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 1 1 26.08 35.26zM192.73 382.94c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.2-18.6-48.64a21.93 21.93 0 0 0-30.56 31.46zM169.8 484.38c10.81 5.45 52 1.69 52 1.69s-21.49-35.4-32.3-40.85a21.93 21.93 0 1 0-19.75 39.16zM161.01 586.04c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72A21.93 21.93 0 0 0 161 586.04z"
        fill={primaryColor}
      />
      <path
        d="M246.64 285.78c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 0 1 43.86 0zM282.89 352.83c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM281.31 467.51c-10.81 5.45-52 1.69-52 1.69s21.42-35.37 32.25-40.85a21.93 21.93 0 0 1 19.75 39.16zM260.58 553.98c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 1 1 26.08 35.26zM192.73 382.94c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.2-18.6-48.64a21.93 21.93 0 0 0-30.56 31.46zM169.8 484.38c10.81 5.45 52 1.69 52 1.69s-21.49-35.4-32.3-40.85a21.93 21.93 0 1 0-19.75 39.16zM161.01 586.04c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72A21.93 21.93 0 0 0 161 586.04z"
        opacity={0.25}
      />
      <path
        d="M779.3 594.06s-29.11-98.82 5.43-171.56c14.51-30.53 19.33-64.8 12.62-97.93a262.52 262.52 0 0 0-13.86-46"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M805.02 232.64c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 1 1 43.86 0zM841.27 299.73c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM839.73 414.37c-10.81 5.45-52 1.69-52 1.69s21.49-35.4 32.3-40.85a21.93 21.93 0 1 1 19.7 39.16zM818.96 500.83c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 1 1 26.07 35.26zM751.14 329.83c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.18-18.57-48.67a21.95 21.95 0 0 0-30.59 31.49zM728.18 431.24c10.81 5.45 52 1.69 52 1.69s-21.45-35.4-32.25-40.85a21.93 21.93 0 1 0-19.75 39.16zM719.39 532.9c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72a21.93 21.93 0 0 0-26.08 35.26z"
        fill={primaryColor}
      />
      <path
        d="M805.02 232.64c0 12.11-21.93 47.23-21.93 47.23s-21.93-35.12-21.93-47.23a21.93 21.93 0 1 1 43.86 0zM841.27 299.73c-6.58 10.17-44.08 27.73-44.08 27.73s.68-41.4 7.26-51.57a21.932 21.932 0 1 1 36.82 23.84zM839.73 414.37c-10.81 5.45-52 1.69-52 1.69s21.49-35.4 32.3-40.85a21.93 21.93 0 1 1 19.7 39.16zM818.96 500.83c-9.74 7.2-51 10.46-51 10.46s15.2-38.52 24.93-45.72a21.93 21.93 0 1 1 26.07 35.26zM751.14 329.83c8.69 8.44 49.16 17.18 49.16 17.18s-9.91-40.18-18.57-48.67a21.95 21.95 0 0 0-30.59 31.49zM728.18 431.24c10.81 5.45 52 1.69 52 1.69s-21.45-35.4-32.25-40.85a21.93 21.93 0 1 0-19.75 39.16zM719.39 532.9c9.74 7.2 51 10.46 51 10.46s-15.2-38.52-24.93-45.72a21.93 21.93 0 0 0-26.08 35.26z"
        opacity={0.25}
      />
      <path
        d="M.87 765.65c11.1-4 1.36-.74-.56-.1a1.44 1.44 0 0 0 .56.1zM.31 765.54l-.3-.09v.2z"
        fill="#0ff"
        opacity={0.1}
      />
      <path
        d="M877.28 707.68c0-.12 0-.25.07-.38s0-.07 0-.1a4.63 4.63 0 0 0 0-.75s-1.34-2.57-2.9-6.1c-2.13-4.85-4.66-11.52-4.66-15.89 0 0-23.37-81.78-39.17-90.71 0 0-13-23.15-12.86-36.18a73.69 73.69 0 0 0-1-12.43c-2.31-14.37-6.16-41.88-2.64-46.91 4.47-6.39 11.92-34.19-5.87-55.18l3.12-.48s-.17-.21-.45-.62l.45-.07s-6.88-8.26-6.88-26.51c.1-10.51 2.47-24.24 9.63-41.53q1.42-3.44 2.6-6.81a34.22 34.22 0 0 0 9-6.48l.32-.33.37-.35c6.57-6.6 10.55-15.36 13.32-24.25a115.46 115.46 0 0 0 4.85-25.13c.74-9.27.35-18.58 0-27.87-.45-10.84-1-22-5.34-31.89-1.71-3.87-4-7.53-5.05-11.63a68.09 68.09 0 0 1-1.21-8.53c-1.43-11.23-6.75-22.12-15.47-29.33s-20.91-10.42-31.82-7.4c-6.24 1.73-11.81 5.31-17 9.23a57.49 57.49 0 0 0-6.28 5.49c-6.27 6.15-11 14.21-6.46 22.68q.5.92 1.07 1.8a30.92 30.92 0 0 0 14.57 45.07l.81 1.42h.09c2.37 4.38 4.95 9.85 5.63 14a43.07 43.07 0 0 0-8 7.39c-8.09 9.65-12.52 16.2-14.94 20.47a73 73 0 0 1-7.93 11.15c-3.67 4.34-8 12.81-8 28.57v3.59c-19.37 21.09-94.91 5.63-94.91 5.63-9.1-3.54-19.69.73-24.65 3.24a3 3 0 0 0-1 4.59c8 9.64 27.68 3.86 27.68 3.86s70.78 12.37 76.28 16.49c3.74 2.81 10.35.52 14.19-1.23l-.79.89 1-.49-5.44 48.93h.08l-.08.69s1.26-.11 3.27-.25l1.68 4.35h-.14l1.74 4.12 1.43 3.39c-4.27 15.44-21.48 79-19.67 93.51 0 0-11 26.11-6.87 40.55 0 0-15.12 108.58-24.74 114.08l1.35.61c-10.27 5.87-32.64 16.91-48.08 11.76 0 0-9.62 2.75 5.5 12.37 0 0 61.85 16.49 70.1 11l-1.37-23.77.7.25c.1-1.34 1-11.17 4.8-15.65 0 0 24.74-67.35 23.37-101.71l23.09-55.8c2.5 6.4 5.15 11.83 7.83 15.26l9.62 24.74 15.81 20.62s49.48 78.34 46 101.71l1.16.29c-4.63 8.24-16.15 25.13-32.78 25.13 0 0-14.43 15.12 12.37 13.06 0 0 33.67-2.06 58.41-15.81z"
        transform="translate(-115.27 -67.17)"
        fill="url(#prefix__a)"
      />
      <path
        d="M586.65 634.16s-31.81 21.21-51.69 14.58c0 0-9.28 2.65 5.3 11.93 0 0 59.65 15.91 67.6 10.6l-2-34.46zM736.43 634.16s-12.59 28.5-33.8 28.5c0 0-13.92 14.58 11.93 12.59 0 0 32.47-2 56.33-15.24l-11.41-29.74z"
        fill="#333"
      />
      <path fill="#fdb797" d="M623.1 381.32l5 12.93 32.45-2.32-3.32-21.87-34.13 11.26z" />
      <path
        d="M630.39 394.25s-21.87 77.58-19.88 93.45c0 0-10.6 25.18-6.63 39.1 0 0-14.58 104.71-23.86 110 0 0 27 12.22 27.83 11.93 9.28-3.31-.66 0-.66 0s.66-10.6 4.64-15.24c0 0 23.86-64.95 22.53-98.08l31.81-76.88z"
        fill="#252a62"
      />
      <path
        d="M630.39 394.25s-21.87 77.58-19.88 93.45c0 0-10.6 25.18-6.63 39.1 0 0-14.58 104.71-23.86 110 0 0 27 12.22 27.83 11.93 9.28-3.31-.66 0-.66 0s.66-10.6 4.64-15.24c0 0 23.86-64.95 22.53-98.08l31.81-76.88z"
        opacity={0.1}
      />
      <path
        d="M626.42 390.27L641 424.73s11.27 56.33 23.2 71.57l9.28 23.86 15.25 19.89s47.72 75.55 44.4 98.08c0 0 29.82 8 29.16-2 0 0-7.29-13.92-7.29-21.21 0 0-22.53-78.86-37.78-87.48 0 0-12.52-22.33-12.4-34.89a71.06 71.06 0 0 0-1-12c-2.23-13.86-5.94-40.38-2.54-45.23 4.64-6.63 12.59-37.11-9.94-57.66z"
        fill="#252a62"
      />
      <path
        d="M762.27 636.15s-7.29-13.92-7.29-21.21c0 0-22.53-78.86-37.78-87.48 0 0-12.52-22.33-12.4-34.89a71.06 71.06 0 0 0-1-12c-2.23-13.86-5.94-40.38-2.54-45.23 4.64-6.63 12.59-37.11-9.94-57.66l-3.84.75c21.54 20.53 13.73 50.36 9.15 56.91s4 53.68 4 53.68c-3.31 11.27 11.93 38.44 11.93 38.44 15.24 8.62 37.78 87.48 37.78 87.48 0 7.29 7.29 21.21 7.29 21.21.22 3.28-2.89 4.61-7.15 4.92 6.42.37 12.09-.53 11.79-4.92z"
        opacity={0.1}
      />
      <path d="M656.9 217.3s12.59 19.22 9.28 25.18l32.47-8s-8.62-9.28-6.63-31.81z" fill="#fdb797" />
      <path
        d="M703.29 231.22s-27.17-6-44.4 14.58c-7.8 9.3-12.07 15.62-14.41 19.74a70.39 70.39 0 0 1-7.64 10.75c-4.31 5.09-9.59 16.06-7.11 38.43l-8 71.57s23.2-2 29.16 0 47.72-4.64 47.72-4.64-16.57-19.88 2.65-66.27 2.03-84.16 2.03-84.16z"
        opacity={0.1}
      />
      <path
        d="M703.29 230.56s-27.17-6-44.4 14.58c-7.8 9.3-12.07 15.62-14.41 19.74a70.39 70.39 0 0 1-7.64 10.75c-4.31 5.09-9.59 16.06-7.11 38.43l-8 71.57s23.2-2 29.16 0 47.72-4.64 47.72-4.64-16.57-19.88 2.65-66.27 2.03-84.16 2.03-84.16z"
        fill="#f55f44"
      />
      <path d="M670.49 291.83s-25.85 37.14-37.76 43.77l-6.63 3.31s41.74-47.08 44.39-47.08z" opacity={0.1} />
      <path
        d="M646.3 272.97s17-6.69 24.29 15.49a5.32 5.32 0 0 1-1.14 5.27l-39.72 42.86s-11.27 6.63-16.57 2.65-73.56-15.91-73.56-15.91-18.95 5.57-26.69-3.72a2.87 2.87 0 0 1 .93-4.42c3.7-1.87 9.87-.79 17.15-1.69a60.35 60.35 0 0 1 16.8.35c22.73 3.56 76.28 9.44 84.59-12.39 10.6-27.82 13.92-28.49 13.92-28.49z"
        fill="#fdb797"
      />
      <path
        d="M645.97 273.3s20.54-3.31 25.18 17.23v-1.33s-5.96-22.52-25.18-15.9zM692.73 204.05l-35.17 14.58s1.59 2.42 3.48 5.81c3.43 1.38 8.17.49 12.09.49 8 0 13.85-2.11 19.22-7.29-.49-3.98-.15-8.1.38-13.59z"
        opacity={0.1}
      />
      <circle cx={671.48} cy={195.43} r={29.82} fill="#fdb797" />
      <path
        d="M671.53 191.4c.65 2.3-1.26 4.43-2.64 6.38-4.83 6.83-3.94 16.13-1.73 24.19 1.08 3.95 2.7 8.15 6.23 10.22 2.82 1.65 6.29 1.58 9.45 2.41 5.69 1.49 10.29 6 13 11.19s3.68 11.18 4 17.06a86.31 86.31 0 0 1-11.75 48.61c8.85 1.51 18-2.52 24.35-8.89s10.17-14.81 12.84-23.38a111.34 111.34 0 0 0 4.68-24.23c.71-8.94.34-17.92 0-26.88-.43-10.45-.93-21.18-5.15-30.75-1.65-3.74-3.85-7.26-4.87-11.22a65.65 65.65 0 0 1-1.17-8.22c-1.38-10.83-6.51-21.33-14.92-28.29s-20.16-10-30.68-7.13c-6 1.67-11.38 5.12-16.36 8.9-8.06 6.13-17.31 16-11.62 26.5 4.95 9.19 15.89 15.17 26.34 13.53z"
        opacity={0.1}
      />
      <path
        d="M672.19 190.74c.65 2.3-1.26 4.43-2.64 6.38-4.83 6.83-3.94 16.13-1.73 24.19 1.08 3.95 2.7 8.15 6.23 10.22 2.82 1.65 6.29 1.58 9.45 2.41 5.69 1.49 10.29 6 13 11.19s3.68 11.18 4 17.06a86.31 86.31 0 0 1-11.77 48.64c8.85 1.51 18-2.52 24.35-8.89s10.17-14.81 12.84-23.38a111.34 111.34 0 0 0 4.68-24.23c.71-8.94.34-17.92 0-26.88-.43-10.45-.93-21.18-5.15-30.75-1.65-3.74-3.85-7.26-4.87-11.22a65.65 65.65 0 0 1-1.17-8.22c-1.38-10.83-6.51-21.33-14.92-28.29s-20.16-10-30.68-7.13c-6 1.67-11.38 5.12-16.36 8.9-8.06 6.13-17.31 16-11.62 26.5 4.98 9.16 15.9 15.14 26.36 13.5z"
        fill="#72351c"
      />
      <path
        d="M675.13 338.91s12.59 0 17.23-6M675.13 343.55s12.59 0 17.23-6M687.06 267.34s-2 15.91-9.28 23.2"
        opacity={0.1}
      />
      <path d="M515 731.62v-.16l-.24.08z" transform="translate(-115.27 -67.17)" fill="url(#prefix__b)" opacity={0.1} />
      <path
        d="M514.3 731.62a1.15 1.15 0 0 0 .45-.08c-1.54-.54-9.33-3.1-.45.08z"
        transform="translate(-115.27 -67.17)"
        fill="url(#prefix__c)"
        opacity={0.1}
      />
      <path
        d="M613.75 380.56c-5.06-2.47-15.86-6.69-25.14-3.2 0 0-89 17.64-100.22-10.86q-.79-2-1.53-3.85a41.41 41.41 0 0 0 .29-5.63 39.62 39.62 0 0 0-.49-6.91 24.17 24.17 0 0 0-3.77-9.34 60.63 60.63 0 0 1-5.39-11.71 44.33 44.33 0 0 0-25.43-26c.17-4.26 3.18-10.55 5.91-15.44h.09l.83-1.4a30.56 30.56 0 0 0 19.68-28.29 29.69 29.69 0 0 0-5.09-16.62c9.41-1.51 6.19-9.51.37-16.37a44.73 44.73 0 0 0-3.61-3.78A42.16 42.16 0 0 0 449.62 210c-.93-.2-1.87-.35-2.81-.48a39 39 0 0 0-33.92 4.15A17.48 17.48 0 0 0 396.23 202c-9.68 0-17.52 7.59-17.52 17s7.84 17 17.52 17h1a35.61 35.61 0 0 0-1 8.17c0 17.12 12.13 31.5 28.53 35.52l.29.27c0 .28-.05.57-.09.85l.07.06a39.52 39.52 0 0 1-4.68 14.34l-.62-.15c-12.93 9-17.61 22.65-17.5 36.87-.07 12.08 3.27 24.72 8 35a32 32 0 0 1 2.52 13c-.25 15.4-7.34 33.88-12.16 44.7-1.91 4.29-29.6 71.25-29.6 71.25l.63-.16-.63 1.52c6.06-1.7 12.56-.92 18.08.57a29.59 29.59 0 0 0 22.66-3.2 29.58 29.58 0 0 0 3.77 9.08c3.59 5-.33 32.12-2.69 46.31a70.48 70.48 0 0 0-1 12.28c.13 12.87-13.11 35.73-13.11 35.73-16.12 8.82-39.95 89.56-39.95 89.56 0 4.32-2.58 10.9-4.75 15.69-1.58 3.49-3 6-3 6a4.43 4.43 0 0 0 0 .74v.1a3.75 3.75 0 0 0 .07.38l-9.2 23.21c25.23 13.57 59.57 15.61 59.57 15.61 27.33 2 12.62-12.89 12.62-12.89-17 0-28.7-16.68-33.43-24.81l1.19-.29c-3.5-23.07 47-100.42 47-100.42l16.12-20.36 9.81-24.53c2.73-3.38 5.44-8.74 8-15.06L486.29 606c-1.4 33.93 23.83 100.42 23.83 100.42 3.91 4.42 4.79 14.13 4.89 15.45l.71-.24-1.4 23.47c8.41 5.43 71.49-10.86 71.49-10.86 15.42-9.5 5.61-12.21 5.61-12.21-15.74 5.08-38.56-5.82-49-11.61l1.37-.6c-9.81-5.43-25.23-112.63-25.23-112.63 4.21-14.25-7-40-7-40 1.28-9.9-6.78-43.15-13.28-67.68a134 134 0 0 0 24.85-2.54c-.52-.33-1-.68-1.53-1 1-.19 1.53-.31 1.53-.31-21.66-13.85-34-60.63-39.33-87.13a28 28 0 0 0 4.29 3l7 3.39-.8-.87c3.91 1.73 10.65 4 14.47 1.21 5.61-4.07 77.79-16.28 77.79-16.28s20 5.71 28.23-3.81a2.91 2.91 0 0 0-1.03-4.61z"
        transform="translate(-115.27 -67.17)"
        fill="url(#prefix__d)"
      />
      <circle cx={321.23} cy={183.83} r={35.79} fill="#ffc533" />
      <path d="M348.07 219.29s-12.59 19.22-9.28 25.18l-32.47-8s8.62-9.28 6.63-31.81z" fill="#fdb797" />
      <path
        d="M312.28 206.04l35.12 14.58s-1.59 2.42-3.48 5.81c-3.43 1.38-8.17.49-12.09.49-8 0-13.85-2.11-19.22-7.29.5-3.98.12-8.1-.33-13.59z"
        opacity={0.1}
      />
      <circle cx={333.49} cy={197.42} r={29.82} fill="#fdb797" />
      <circle cx={285.44} cy={159.31} r={16.57} fill="#ffc533" />
      <path
        d="M354.67 181.43c-7.46-.13-15.94-1.63-21.53 3.3-4 3.54-5.08 9.26-6.44 14.44-2 7.78-6.58 16.33-14.54 17.49-4.86.71-9.75-1.71-13.2-5.21s-5.68-8-7.79-12.41-4.17-9-4-13.89c.21-5.81 3.6-11 7.06-15.65a65.18 65.18 0 0 1 6.95-8.2 39 39 0 0 1 57.65 3.89c6.21 7.53 9.3 16.47-4.16 16.24z"
        opacity={0.1}
      />
      <path
        d="M354.01 180.77c-7.46-.13-15.94-1.63-21.53 3.3-4 3.54-5.08 9.26-6.44 14.44-2 7.78-6.58 16.33-14.54 17.49-4.86.71-9.75-1.71-13.2-5.21s-5.68-8-7.79-12.41-4.17-9-4-13.89c.21-5.81 3.6-11 7.06-15.65a65.18 65.18 0 0 1 6.95-8.2 39 39 0 0 1 57.65 3.89c6.2 7.53 9.3 16.47-4.16 16.24z"
        fill="#ffc533"
      />
      <path
        d="M418.32 636.15s31.81 21.21 51.69 14.58c0 0 9.28 2.65-5.3 11.93 0 0-59.65 15.91-67.6 10.6l2-34.46zM268.54 636.15s12.59 28.5 33.8 28.5c0 0 13.92 14.58-11.93 12.59 0 0-32.47-2-56.33-15.24l11.41-29.74z"
        fill="#333"
      />
      <path
        d="M374.58 396.24s21.87 77.54 19.88 93.44c0 0 10.6 25.18 6.63 39.1 0 0 14.58 104.71 23.86 110 0 0-27 12.22-27.83 11.93-9.28-3.31.66 0 .66 0s-.66-10.6-4.64-15.24c0 0-23.86-64.95-22.53-98.08l-31.81-76.88z"
        fill="#3ad29f"
      />
      <path
        d="M374.58 396.24s21.87 77.54 19.88 93.44c0 0 10.6 25.18 6.63 39.1 0 0 14.58 104.71 23.86 110 0 0-27 12.22-27.83 11.93-9.28-3.31.66 0 .66 0s-.66-10.6-4.64-15.24c0 0-23.86-64.95-22.53-98.08l-31.81-76.88z"
        opacity={0.1}
      />
      <path
        d="M378.56 392.26l-14.58 34.46s-11.27 56.33-23.2 71.57l-9.28 23.86-15.24 19.88s-47.72 75.55-44.4 98.08c0 0-29.82 8-29.16-2 0 0 7.29-13.92 7.29-21.21 0 0 22.53-78.86 37.78-87.48 0 0 12.52-22.33 12.4-34.89a71.06 71.06 0 0 1 1-12c2.23-13.86 5.94-40.38 2.54-45.23-4.64-6.63-12.59-37.11 9.94-57.66z"
        fill="#3ad29f"
      />
      <path
        d="M242.73 638.13s7.29-13.92 7.29-21.21c0 0 22.53-78.86 37.78-87.48 0 0 12.52-22.33 12.4-34.89a71.06 71.06 0 0 1 1-12c2.23-13.86 5.94-40.38 2.54-45.23-4.64-6.63-12.59-37.11 9.94-57.66l3.84.75c-21.61 20.54-13.79 50.42-9.21 56.92s-4 53.68-4 53.68c3.31 11.27-11.93 38.44-11.93 38.44-15.24 8.62-37.78 87.48-37.78 87.48 0 7.29-7.29 21.21-7.29 21.21-.22 3.28 2.89 4.61 7.15 4.92-6.39.37-12.06-.53-11.73-4.93z"
        opacity={0.1}
      />
      <path
        d="M307.67 234.83l24.63 6.06a42.62 42.62 0 0 1 30 27.3 60.15 60.15 0 0 0 5.09 11.44 24.05 24.05 0 0 1 3.56 9.13c1 6.49.92 17-5.88 28.92 0 0 11.21 84.17 40.32 103.39 0 0-28.41 6.54-53.31-1.55-16.69-5.42-35-3.14-49.3 7.1l-.62.45a27.34 27.34 0 0 1-23.43 4.51c-5.22-1.45-11.37-2.21-17.1-.55 0 0 26.19-65.39 28-69.59 6.1-14.19 16.1-41.87 9.1-57.61-9.73-21.91-13.29-54.38 8.94-69z"
        opacity={0.1}
      />
      <path
        d="M307.67 233.54l24.63 6.06a42.62 42.62 0 0 1 30 27.3 60.15 60.15 0 0 0 5.09 11.44 24.05 24.05 0 0 1 3.56 9.13c1 6.49.92 17-5.88 28.92 0 0 11.21 84.17 40.32 103.39 0 0-28.41 6.54-53.31-1.55-16.69-5.42-35-3.14-49.3 7.1l-.62.45a27.34 27.34 0 0 1-23.43 4.48c-5.22-1.45-11.37-2.21-17.1-.55 0 0 26.19-65.39 28-69.59 6.1-14.2 16.1-41.88 9.1-57.66-9.73-21.87-13.29-53.01 8.94-68.92z"
        fill="#535461"
      />
      <path d="M334.49 293.83s25.85 37.11 37.78 43.74l6.63 3.31s-41.76-47.05-44.41-47.05z" opacity={0.1} />
      <path
        d="M358.67 274.96s-17-6.69-24.29 15.49a5.32 5.32 0 0 0 1.14 5.27l39.72 42.87s11.27 6.63 16.57 2.65 73.56-15.91 73.56-15.91 18.82 5.53 26.61-3.63a2.94 2.94 0 0 0-.85-4.52c-4.11-2.07-11.63-2-19.72-2.69a32 32 0 0 0-8.38.38c-17.3 3.07-81.3 12.61-90.44-11.41-10.6-27.84-13.92-28.5-13.92-28.5z"
        fill="#fdb797"
      />
      <path d="M359.01 275.29s-20.54-3.31-25.18 17.23v-1.33s5.96-22.53 25.18-15.9z" opacity={0.1} />
      <path
        d="M573.73 244.14a73.56 73.56 0 1 1-73.56-73.56 73.56 73.56 0 0 1 73.56 73.56zm-42-10.48c1.46-9.79-6-15.05-16.18-18.56l3.29-13.27-8.11-2-3.22 12.91c-2.12-.53-4.3-1-6.47-1.52l3.24-13-8.07-2-3.31 13.25c-1.76-.4-3.48-.8-5.15-1.21l-11.13-2.78-2.15 8.62s6 1.37 5.86 1.46c3.27.82 3.86 3 3.76 4.69l-3.77 15.11a6.69 6.69 0 0 1 .84.27l-.85-.21-5.28 21.16a2.94 2.94 0 0 1-3.7 1.92c.08.12-5.87-1.46-5.87-1.46l-4 9.24 10.5 2.62c2 .49 3.87 1 5.75 1.48l-3.34 13.41 8.06 2 3.31-13.27q3.21.87 6.43 1.67l-3.3 13.21 8.07 2 3.34-13.39c13.76 2.6 24.12 1.55 28.47-10.89 3.51-10-.17-15.8-7.42-19.57 5.27-1.22 9.25-4.68 10.31-11.85zm-18.44 25.86c-2.49 10-19.37 4.6-24.84 3.25l4.43-17.77c5.45 1.37 23 4.07 20.39 14.52zm2.5-26c-2.28 9.12-16.32 4.48-20.88 3.35l4-16.11c4.55 1.13 19.23 3.25 16.82 12.76z"
        fill="#fff"
        opacity={0.5}
      />
      <path
        d="M491.67 631.83s-15.76-53.5 3-92.88a84.51 84.51 0 0 0 6.83-53 142.13 142.13 0 0 0-7.51-24.88"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M505.6 436.16c0 6.56-11.87 25.57-11.87 25.57s-11.87-19-11.87-25.57a11.875 11.875 0 1 1 23.75 0zM525.22 472.48c-3.56 5.5-23.86 15-23.86 15s.37-22.41 3.93-27.92a11.873 11.873 0 1 1 19.93 12.91zM524.36 534.55c-5.85 3-28.18.91-28.18.91s11.63-19.16 17.49-22.12a11.871 11.871 0 1 1 10.69 21.2zM513.14 581.37c-5.27 3.9-27.62 5.66-27.62 5.66s8.23-20.85 13.5-24.75a11.872 11.872 0 1 1 14.12 19.09zM476.43 488.77c4.7 4.57 26.62 9.3 26.62 9.3s-5.37-21.77-10.07-26.33a11.87 11.87 0 1 0-16.55 17zM464 543.68c5.85 3 28.18.91 28.18.91s-11.64-19.16-17.45-22.11a11.871 11.871 0 1 0-10.69 21.2zM459.24 598.72c5.27 3.9 27.62 5.66 27.62 5.66s-8.23-20.85-13.5-24.75a11.872 11.872 0 1 0-14.12 19.09z"
        fill={primaryColor}
      />
      <path
        d="M505.6 436.16c0 6.56-11.87 25.57-11.87 25.57s-11.87-19-11.87-25.57a11.875 11.875 0 1 1 23.75 0zM525.22 472.48c-3.56 5.5-23.86 15-23.86 15s.37-22.41 3.93-27.92a11.873 11.873 0 1 1 19.93 12.91zM524.36 534.55c-5.85 3-28.18.91-28.18.91s11.63-19.16 17.49-22.12a11.871 11.871 0 1 1 10.69 21.2zM513.14 581.37c-5.27 3.9-27.62 5.66-27.62 5.66s8.23-20.85 13.5-24.75a11.872 11.872 0 1 1 14.12 19.09zM476.43 488.77c4.7 4.57 26.62 9.3 26.62 9.3s-5.37-21.77-10.07-26.33a11.87 11.87 0 1 0-16.55 17zM464 543.68c5.85 3 28.18.91 28.18.91s-11.64-19.16-17.45-22.11a11.871 11.871 0 1 0-10.69 21.2zM459.24 598.72c5.27 3.9 27.62 5.66 27.62 5.66s-8.23-20.85-13.5-24.75a11.872 11.872 0 1 0-14.12 19.09z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
};

UndrawBitcoinP2P.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBitcoinP2P;
