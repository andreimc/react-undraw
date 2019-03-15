import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawGift = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 858.07 804.61" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={592.9} y1={385.11} x2={592.9} y2={236.35} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={420.04} y1={804.61} x2={420.04} y2={320.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={811.83} y1={471.54} x2={811.83} y2={185.81} xlinkHref="#prefix__a" />
      </defs>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M107.3 37.85h3.33v18.87h-3.33z" />
        <path d="M118.4 45.62v3.33H99.53v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M811.66 769.53h3.33v18.87h-3.33z" />
        <path d="M822.76 777.3v3.33h-18.87v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M812.98 215.34h3.33v18.87h-3.33z" />
        <path d="M824.08 223.11v3.33h-18.87v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M846.98 45.34h3.33v18.87h-3.33z" />
        <path d="M858.08 53.11v3.33h-18.87v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M267.08 36.27h3.33v18.87h-3.33z" />
        <path d="M278.17 44.04v3.33H259.3v-3.33z" />
      </g>
      <path
        d="M61.21 318.2a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.93 2.27 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.27 4.93 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.93-2.27 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.4-.23zM122.69 696.54a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.93 2.27 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.27 4.93 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.93-2.27 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.4-.23zM681.69 195.54a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.93 2.27 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.27 4.93 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.93-2.27 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.4-.23zM674.24 285.93a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.93 2.27 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.27 4.93 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.93-2.27 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.4-.23zM674.77 7.56a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.92 2.28 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.27 4.93 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.89-2.33 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.37-.18zM842.93 464.6a4.08 4.08 0 0 1-2.27-4.93 2 2 0 0 0 .09-.45 2 2 0 0 0-3.67-1.36 2 2 0 0 0-.23.4 4.08 4.08 0 0 1-4.93 2.27 2 2 0 0 0-.45-.09 2 2 0 0 0-1.36 3.67 2 2 0 0 0 .4.23 4.08 4.08 0 0 1 2.26 4.98 2 2 0 0 0-.09.45 2 2 0 0 0 3.67 1.36 2 2 0 0 0 .23-.4 4.08 4.08 0 0 1 4.93-2.27 2 2 0 0 0 .45.09 2 2 0 0 0 1.36-3.67 2 2 0 0 0-.39-.28z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <circle cx={61.77} cy={166.12} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={12.94} cy={644.43} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={439.66} cy={45.68} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={506.66} cy={172.68} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={6.66} cy={478.68} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={267.5} cy={155.34} r={6.66} fill="#47e6b1" opacity={0.5} />
      <circle cx={725.6} cy={597.75} r={6.66} fill="#f55f44" opacity={0.5} />
      <path
        d="M713.77 253.75c-12.9-12.94-31.71-18.09-53-14.5-19.89 3.36-39.79 14.13-56 30.33a65.49 65.49 0 0 0-11.72 16.08A65.64 65.64 0 0 0 581.43 269c-16-16.47-35.67-27.58-55.5-31.29-21.19-4-40.08.86-53.2 13.58s-18.55 31.45-15.25 52.71c3.08 20 13.52 40 29.52 56.49 33.58 34.64 100.59 21.11 103.43 20.51l.84-.17 2.58.59c2.83.64 69.59 15.32 103.75-18.73 16.25-16.19 27.08-36.06 30.51-55.94 3.65-21.23-1.44-40.06-14.34-53zM579.08 361c-16.19 2.18-56.55 5.14-76.59-15.53-12.88-13.29-21.31-29.19-23.71-44.75-2.2-14.2 1-26.27 8.94-34a29.93 29.93 0 0 1 10.92-6.69c6.68-2.37 14.63-2.81 23.32-1.18 15.48 2.89 31.1 11.81 44 25.1 20.04 20.72 15.8 60.97 13.12 77.05zm127.78-57.93c-2.67 15.52-11.37 31.26-24.48 44.33-20.4 20.33-60.7 16.67-76.84 14.21-2.41-16.16-5.94-56.47 14.45-76.8 13.11-13.07 28.88-21.71 44.41-24.34 8.72-1.47 16.66-.9 23.3 1.58a29.93 29.93 0 0 1 10.8 6.88c7.83 7.89 10.8 20.01 8.36 34.16z"
        transform="translate(-169.23 -39.68)"
        fill="url(#prefix__a)"
        opacity={0.5}
      />
      <path
        d="M427.68 336.97l-6.38 1.35c-2.71.57-66.83 13.51-99-19.63-15.28-15.76-25.31-34.95-28.26-54-3.15-20.38 2-38.31 14.58-50.48s30.64-16.78 50.91-13c19 3.55 37.84 14.18 53.11 29.94 32.12 33.15 17.18 96.83 16.52 99.52zm-94.21-114.39a28.64 28.64 0 0 0-10.45 6.4c-7.62 7.38-10.66 18.93-8.56 32.52 2.3 14.89 10.36 30.1 22.69 42.82 19.17 19.78 57.79 17 73.28 14.86 2.57-15.41 6.61-53.93-12.56-73.71-12.33-12.72-27.28-21.25-42.09-24-8.3-1.58-15.91-1.15-22.31 1.11z"
        fill={primaryColor}
      />
      <path
        d="M418.22 337.25l-1.45-6.36c-.61-2.71-14.45-66.64 18.24-99.22 15.54-15.5 34.59-25.8 53.62-29 20.33-3.44 38.33 1.49 50.68 13.87s17.21 30.4 13.71 50.72c-3.28 19-13.65 38-29.19 53.53-32.67 32.53-96.55 18.53-99.26 17.91zm96.17-112.75c-6.36-2.38-14-2.93-22.29-1.52-14.86 2.51-30 10.78-42.5 23.29-19.51 19.45-16.14 58-13.83 73.49 15.45 2.35 54 5.86 73.53-13.6 12.55-12.51 20.87-27.57 23.43-42.42 2.34-13.55-.5-25.15-8-32.66a28.64 28.64 0 0 0-10.35-6.58z"
        fill={primaryColor}
      />
      <path
        fill="url(#prefix__b)"
        d="M730.87 320.21H109.21V444.6h32.3v360.01h557.06V444.6h32.3V320.21z"
        opacity={0.5}
      />
      <path fill="#f5f5f5" d="M148.56 357.82h542.96v440.67H148.56z" />
      <path fill={primaryColor} d="M368.89 436.51h102.3v361.98h-102.3z" />
      <path opacity={0.1} d="M148.56 334.21h542.96v110.17H148.56z" />
      <path fill="#f5f5f5" d="M117.08 326.34h605.91v110.17H117.08z" />
      <path fill={primaryColor} d="M368.89 326.34h102.3v110.17h-102.3z" />
      <path
        d="M951.92 375.92C950 370.37 929 386 929 386l-4.84-.29-9.31-8.62 6.5-6.5-54.59-46.79a13.77 13.77 0 0 0-10.67-3.21l-45.37 5.67c-.19-2.6-1.8-5.69-4.06-8.84-4.65-7.63-14.45-16.26-18.08-19.33l-5.53-37.31 4.7-7.05a23.73 23.73 0 0 1-2.56-.86l1-1.49-.37-.1.47-.54h-.06L798 237.16a5.14 5.14 0 0 0-.39-7.12l-26.21-19.88a14.45 14.45 0 0 0 1.12-6c.2-4-1.56-8-7.5-10.94a57.9 57.9 0 0 0-11.48-4.05 37.67 37.67 0 0 0-19.85.29l-.34-.4c-8.07-9.22-18.64 4-19.05 4.55l-41.34 46a8.4 8.4 0 0 0 2.04 11.2l21.88 16.41-.07.14 1.24.93c-.94 1.84-2.19 3.07-3.86 3.25l3.35 1.68a3.86 3.86 0 0 1-1.78.67l15.34 7.67c0 8 .82 44.47 13.79 62.39a33.13 33.13 0 0 0 4.71 6.05s1.1-.6 3.12-1.57l2.32 4.63a27.11 27.11 0 0 0 28.09 14.72l72-10.29-.76 2.29.41-.06-23.34 70 3.86 1.29-.07.14.54.23-4.85 9.17-15.28 11.75s44.66 22.39 49.36 18.86-16.46-18.81-16.46-18.81l-1.18-4.7 5.14-10.85 4.31 1.44L871.42 369l1.18-2.35 23.4 29.29 6.6-6.6.71.72.06-.06 9.15 9.26 6.63 18.1s34.72-35.9 32.77-41.44zM770.24 241.31l-.46-.53a43.89 43.89 0 0 1-13.23 10.58v-3.85l.26-.23v-1.67a25.4 25.4 0 0 0 7.19-25.79l15.19 11.69zm-51.61-43.4l-.37-.37.37.36zm-12.15 24.48q-.15 1.82-.12 3.68a38.28 38.28 0 0 0 .3 5.37c.78 6.22 3 11.3 7.6 13.72 4 2.1 6.63 2 8.31.55l.18.16a18 18 0 0 0 1.86 7 74 74 0 0 1-24.17-9.73s0 .31.06.87l-6.29-6.29z"
        transform="translate(-169.23 -39.68)"
        fill="url(#prefix__c)"
      />
      <path fill="#fda57d" d="M651.99 378.3l-10.28 19.41 15.98 6.85 10.28-21.69-15.98-4.57z" />
      <path d="M657.69 404.56l1.14 4.57s20.55 14.84 16 18.27-48-18.27-48-18.27l14.84-11.42z" fill="#333" />
      <path opacity={0.1} d="M666.87 384.88l-16.16-5.39-4.81 9.08 15.98 6.86 4.99-10.55z" />
      <path fill="#fda57d" d="M725 341.94l15.43 15.62 11.33-13.19-17.61-16.31-9.15 13.88z" />
      <path opacity={0.1} d="M734.78 328.82l-9.15 13.88 5.85 5.93 11.87-11.87-8.57-7.94z" />
      <path d="M751.77 344.37l4.7.28s20.32-15.15 22.22-9.77-31.8 40.27-31.8 40.27l-6.44-17.58z" fill="#333" />
      <path
        d="M605.43 227.54l23.72-27.44a5 5 0 0 0-.38-6.91l-51.61-39.14-6.28 9.78 40 30.79-17 18.62z"
        fill="#fda57d"
      />
      <path d="M602.71 203.63l-8.3 9.1 11.53 14.31 11.89-13.72a34.67 34.67 0 0 1-15.12-9.69z" opacity={0.1} />
      <path
        d="M536.55 233.5l-26.85-20.18a8.16 8.16 0 0 1-2-10.87l40.18-44.71 8.22 8.22-27.75 34.64 16.42 16.47z"
        fill="#fda57d"
      />
      <path d="M530.89 229.45l4.39 3.3 8.22-16.43L533.18 206c.22 3.5.84 17.08-2.29 23.45z" opacity={0.1} />
      <path fill="#4d8af0" d="M666.87 313.25l-24.65 73.94 24.65 8.22 41.08-82.16-32.86-8.21-8.22 8.21z" />
      <path opacity={0.1} d="M665.73 315.53l-1.23 3.7 25.88-3.7 10.11 12.64 6.32-12.64-32.87-8.21-8.21 8.21z" />
      <path d="M547.84 157.83s10.53-13.57 18.52-4.44-12.59 10.27-12.59 10.27z" fill="#fda57d" />
      <path
        d="M560.06 296.82l7.94 15.89A26.34 26.34 0 0 0 595.28 327l96.23-13.75 32.87 41.07 24.65-24.65-53-45.45a13.37 13.37 0 0 0-10.36-3.12z"
        fill="#4d8af0"
      />
      <path
        d="M535.91 208.19s2.16 26.68-6.05 27.6l16.43 8.22s-.91 48.38 16.43 65.73c0 0 32-17.34 65.73-16.43s-8.22-32.86-8.22-32.86l-5.55-37.4 4.57-6.85a34.33 34.33 0 0 1-16-10.28c-4.57 5.71-15 13.45-24.12 13.45h-3.93c-13.53 0-27.92-2.73-39.32-10z"
        opacity={0.1}
      />
      <path
        d="M534.39 205.91s2.16 26.68-6.05 27.6l16.43 8.21s-.91 48.38 16.43 65.73c0 0 32-17.34 65.73-16.43s-8.22-32.86-8.22-32.86l-5.55-37.4 4.57-6.85a34.33 34.33 0 0 1-16-10.28c-4.57 5.71-15 13.45-24.12 13.45h-3.93a74.73 74.73 0 0 1-39.32-11.17z"
        fill="#3ad29f"
      />
      <path
        d="M556.03 198.39v9.17a17.53 17.53 0 0 0 5.13 12.39l19.51 19.51 6.5-13a16.29 16.29 0 0 0 1.72-7.29v-20.8z"
        fill="#fda57d"
      />
      <path d="M556.28 208.95v1a24.64 24.64 0 0 0 32.83 0v-10.17h-32.83z" opacity={0.1} />
      <circle cx={572.46} cy={190.17} r={24.65} fill="#fda57d" />
      <path
        d="M556.03 183.22h41.08s16.43-16.43 0-24.65a56.24 56.24 0 0 0-11.15-3.94c-25-6.34-48.74 14.33-45.53 39.91.76 6 2.93 11 7.38 13.32 17.35 9.14 8.22-24.64 8.22-24.64z"
        opacity={0.1}
      />
      <path
        d="M556.03 182.08h41.08s16.43-16.43 0-24.65a56.24 56.24 0 0 0-11.15-3.94c-25-6.34-48.74 14.33-45.53 39.91.76 6 2.93 11 7.38 13.32 17.35 9.14 8.22-24.64 8.22-24.64z"
        fill="#333"
      />
      <ellipse cx={557.23} cy={190.49} rx={2.28} ry={4} fill="#fda57d" />
      <path
        opacity={0.1}
        d="M544.67 241.3l1.14-3.43 3.42 2.29-4.56 1.14zM618.77 258.17s-12.43 6-15.86 11.67M613.17 220.75l-1.14 3.42-2.29-3.42h3.43z"
      />
      <path
        d="M556.03 182.08h41.08s16.43-16.43 0-24.65a56.24 56.24 0 0 0-11.15-3.94c-25-6.34-48.74 14.33-45.53 39.91.76 6 2.93 11 7.38 13.32 17.35 9.14 8.22-24.64 8.22-24.64z"
        fill="#333"
      />
    </svg>
  );
};

UndrawGift.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGift;
