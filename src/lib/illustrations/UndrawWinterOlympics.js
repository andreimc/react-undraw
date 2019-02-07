import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWinterOlympics = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 908 540" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={563.57} y1={658.1} x2={563.57} y2={488.82} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M63.8 409.49c4.49-7.49 11.77-12.79 17.65-19.24 39.29-43.11 6-118.69 37.64-167.76 18.11-28.1 53.83-41 71.4-69.41 13.79-22.32 14.25-50.91 27.56-73.52a73.32 73.32 0 0 1 57.65-35.47c16.64-1 33 3.74 49.18 7.79 49.92 12.47 106.86 17.12 149-12.6 21.78-15.37 41-40.13 67.57-39.25 26.35.87 45.16 27.14 70.7 33.69 11.31 2.9 23.22 1.73 34.78.13a487.88 487.88 0 0 0 70.35-15.13c27.92-8.21 58.42-18.84 85-7 34.23 15.2 44 59.58 42.22 97.2-.91 18.93-3.23 39.49 7 55.4 4.67 7.25 11.55 12.78 16.74 19.65 7.35 9.71 11 21.65 14.56 33.32 15 49.32 29.55 104.42 6.87 150.65-1.79 3.65-3.82 7.25-4.69 11.23-2.55 11.55 5 22.56 10.72 32.89 12.31 22.18 17.25 50.28 5.85 73s-42.56 35.3-63.6 21.28c-6.76-4.49-11.93-11.13-18.83-15.38-12.24-7.54-28.12-6.4-41.53-1.28s-25.13 13.68-37.51 21.04a211.86 211.86 0 0 1-117.81 29c-50.16-2.54-97.55-22.82-146.53-34-61.9-14.15-126-13.71-189.5-13.21-26.32.21-52.8.77-78.86 4.8-20.14 3.12-49.62 20.39-69.28 15.15-18-4.8-42.32-28-55.82-40.54-16.11-14.93-31.57-40.63-18.48-62.43z"
        fill="#c6cedf"
      />
      <path
        d="M891.41 658.1s-256.49-6.16-338.59-6.16-317.1 6.16-317.1 6.16c-44.52 0-80.61-37.89-80.61-84.64s36.09-84.64 80.61-84.64c0 0 238.07 11.28 320 11.28s335.66-11.28 335.66-11.28c44.52 0 80.62 37.89 80.62 84.64s-36.07 84.64-80.59 84.64z"
        transform="translate(-155.11 -188.28)"
        fill="url(#prefix__a)"
        opacity={0.5}
      />
      <path
        d="M810.19 384.21a79.9 79.9 0 0 1-23.22 56.44 78.87 78.87 0 0 1-56.08 23.37s-252.27-5.81-333-5.81c-46.08 0-141.12 1.89-214.24 3.51l-34.55.79-37.59.88c-15.92.38-25.49.63-25.49.63a79.72 79.72 0 0 1-8.92-.51c-39.58-4.46-70.37-38.26-70.37-79.3a79.88 79.88 0 0 1 23.22-56.43 78.87 78.87 0 0 1 56.07-23.37l24.3 1.08c9.29.4 20.87.9 34.08 1.45 11.31.48 23.82 1 37.08 1.53 10.93.44 22.37.9 34.1 1.35 68 2.63 145.36 5.23 185.2 5.23 80.61 0 330.13-10.64 330.13-10.64 43.78 0 79.28 35.73 79.28 79.8z"
        fill={primaryColor}
      />
      <path
        d="M651.38 306.94l32.89 156.45c15.92.38 25.49.63 25.49.63a79.41 79.41 0 0 0 8.91-.51l-33.21-158c-9.29.38-20.87.88-34.08 1.43zM580.2 309.82l31.93 151.9 34.55.79-32.38-154c-10.93.4-22.41.86-34.1 1.31zM144.39 306.94L111.5 463.39c-15.92.38-25.49.63-25.49.63a79.72 79.72 0 0 1-8.92-.51l33.22-158c9.29.38 20.87.88 34.08 1.43zM215.57 309.82l-31.93 151.9-34.55.79 32.38-154c10.93.4 22.42.86 34.1 1.31z"
        fill="#fff"
        opacity={0.1}
      />
      <ellipse cx={646.88} cy={76.21} rx={13.94} ry={14.03} fill="#fff" />
      <ellipse cx={593.55} cy={125.54} rx={13.94} ry={14.03} fill="#fff" />
      <ellipse cx={545.98} cy={169.07} rx={13.94} ry={14.03} fill="#fff" />
      <ellipse cx={548.86} cy={247.42} rx={13.94} ry={14.03} fill="#fff" />
      <ellipse cx={629.59} cy={200.99} rx={13.94} ry={14.03} fill="#fff" />
      <ellipse cx={815.55} cy={259.03} rx={13.94} ry={14.03} fill="#fff" />
      <path
        d="M846.28 349.62a14.05 14.05 0 0 0-3.58-6.19l-2.83-2.2a13.77 13.77 0 0 0-7-1.91h-2.88a15.5 15.5 0 0 0-9.86 4.11 15.64 15.64 0 0 0-4.08 9.91c.17 1.25.33 2.49.5 3.73a14.05 14.05 0 0 0 3.58 6.19l2.82 2.2a13.93 13.93 0 0 0 7 1.91h2.94a15.5 15.5 0 0 0 9.86-4.11 15.64 15.64 0 0 0 4.08-9.92c-.22-1.24-.39-2.48-.55-3.72zM306.67 143.93c-9.89 0-9.91 15.47 0 15.47s9.92-15.47 0-15.47zM325.41 155.53c-9.89 0-9.91 15.48 0 15.48s9.92-15.48 0-15.48zM358.57 141.03c-9.89 0-9.91 15.47 0 15.47s9.91-15.47 0-15.47zM416.23 138.12c-9.89 0-9.91 15.48 0 15.48s9.91-15.48 0-15.48zM481.1 136.72c-9.89 0-9.91 15.48 0 15.48s9.91-15.48 0-15.48zM492.63 196.16c-9.89 0-9.91 15.48 0 15.48s9.92-15.48 0-15.48zM303.46 234.72a8 8 0 0 0-5.43-2.27h-2.89a7.74 7.74 0 0 0 0 15.48h2.89a7.75 7.75 0 0 0 5.43-13.21zM329.74 235.34c-9.9 0-9.91 15.47 0 15.47s9.91-15.47 0-15.47zM349.89 230.98c-9.89 0-9.91 15.48 0 15.48s9.94-15.48 0-15.48zM411.89 238.72c-5.57 0-5.58 8.71 0 8.71s5.59-8.71 0-8.71z"
        fill="#fff"
      />
      <path
        d="M433.53 237.27a4.48 4.48 0 0 0-1.47.26 4.1 4.1 0 0 0-1.41-.26h-4.33a4.49 4.49 0 0 0-3.63 2 4.18 4.18 0 0 0-2.13-.56c-5.57 0-5.58 8.71 0 8.71a3.93 3.93 0 0 0 3.61-2.07 4.1 4.1 0 0 0 2.15.62h4.33a4.08 4.08 0 0 0 1.38-.27 4.4 4.4 0 0 0 1.5.27c5.57.01 5.58-8.7 0-8.7zM447.95 247.43c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM488.31 290.95h-2.88a4.36 4.36 0 0 0 0 8.71h2.88a4.36 4.36 0 0 0 0-8.71zM509.23 297.35l-5.76-2.9a4.4 4.4 0 0 0-5.92 1.56c-1 2-.61 4.87 1.55 6l5.77 2.9a4.38 4.38 0 0 0 5.91-1.56c1.04-2.01.61-4.91-1.55-6zM524.52 300.94a4.42 4.42 0 0 0-3-1.28h-1.45a4.36 4.36 0 0 0 0 8.71h1.45a4.36 4.36 0 0 0 3-7.43zM540.21 302.56c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM261.99 109.59c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM236.04 176.33c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM667.06 142.96c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM708.89 92.18c-5.57 0-5.58 8.7 0 8.7s5.55-8.7 0-8.7zM775.18 119.72c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM824.37 174.72l-1.48-1.47a4.45 4.45 0 0 0-3.06-1.27 4.34 4.34 0 0 0-4.33 4.35 4.53 4.53 0 0 0 1.27 3.08l1.44 1.45a4.3 4.3 0 0 0 6.12 0 4.38 4.38 0 0 0 1.26-3.08 4.6 4.6 0 0 0-1.22-3.06zM151.16 299.48a4.46 4.46 0 0 0-3.06-1.27h-1.44a4.32 4.32 0 0 0-4.32 4.35 4.39 4.39 0 0 0 1.26 3.08 4.51 4.51 0 0 0 3.06 1.28h1.44a4.36 4.36 0 0 0 3.06-7.44zM185.58 305.46c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM200 302.56c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM205.77 274.99c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM175.49 238.72c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM201.62 215.33a4.5 4.5 0 0 0-3.06-1.27h-1.44a4.35 4.35 0 0 0 0 8.7h1.44a4.36 4.36 0 0 0 3.06-7.43zM220.18 169.08c-5.56 0-5.57 8.7 0 8.7s5.58-8.7 0-8.7zM313.89 80.57c-5.56 0-5.57 8.71 0 8.71s5.57-8.71 0-8.71zM251.89 227.11c-5.57 0-5.58 8.71 0 8.71s5.58-8.71 0-8.71zM238.89 295.31h-2.88a4.35 4.35 0 0 0 0 8.7h2.88a4.35 4.35 0 0 0 0-8.7zM259.1 293.86c-5.56 0-5.57 8.7 0 8.7s5.58-8.7 0-8.7zM256.22 309.82c-5.57 0-5.57 8.7 0 8.7s5.58-8.7 0-8.7zM561.83 486.83c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM605.08 489.72c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM625.26 463.61c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM786.71 457.81c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM822.75 443.3c-5.57 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM148.1 486.83c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM208.65 436.05c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM138.01 412.83c-5.56 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM29.89 367.85c-5.57 0-5.58 8.71 0 8.71s5.58-8.71 0-8.71zM146.89 356.07a4.5 4.5 0 0 0-3.06-1.27h-1.44a4.36 4.36 0 0 0-3.06 7.43 4.5 4.5 0 0 0 3.06 1.27h1.44a4.32 4.32 0 0 0 4.32-4.35 4.39 4.39 0 0 0-1.26-3.08zM218.74 380.91c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM494.08 402.72c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM590.66 412.83c-5.57 0-5.57 8.71 0 8.71s5.58-8.71 0-8.71zM672.83 393.97c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM764.89 342.03a4.42 4.42 0 0 0-2-2.6c-2-1-4.84-.61-5.92 1.56l-1.44 2.9a4.62 4.62 0 0 0-.44 3.36 4.44 4.44 0 0 0 2 2.6c2 1 4.84.61 5.92-1.56l1.44-2.9a4.68 4.68 0 0 0 .44-3.36zM727.61 392.52c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM504.17 422.99c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM329.74 446.2c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM345.77 340.11a4.46 4.46 0 0 0-3.06-1.27h-1.44a4.36 4.36 0 0 0-3.06 7.43 4.5 4.5 0 0 0 3.06 1.27h1.44a4.36 4.36 0 0 0 3.06-7.43zM388.89 295.31c-5.56 0-5.57 8.7 0 8.7s5.53-8.7 0-8.7zM444.89 422.99c-5.57 0-5.57 8.7 0 8.7s5.57-8.7 0-8.7zM522.89 331.58c-5.57 0-5.58 8.71 0 8.71s5.59-8.71 0-8.71zM632.47 314.17c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM718.96 270.64c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM717.52 206.8c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM717.52 221.31c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71zM704.54 232.92c-5.56 0-5.57 8.7 0 8.7s5.58-8.7 0-8.7zM733.67 218.44c2-2.47 1-7.29-3.18-7.29-5.46 0-5.56 8.37-.29 8.68-2 2.47-1 7.28 3.17 7.28 5.52 0 5.52-8.39.3-8.67zM753.56 45.72c-5.57 0-5.58 8.7 0 8.7s5.57-8.7 0-8.7zM632.47 257.58c-5.57 0-5.58 8.71 0 8.71s5.57-8.71 0-8.71z"
        fill="#fff"
      />
      <circle
        cx={355.19}
        cy={381}
        r={16.34}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={394.6}
        cy={381}
        r={16.34}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={374.41}
        cy={398.22}
        r={16.34}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={413.37}
        cy={398.22}
        r={16.34}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={434}
        cy={381}
        r={16.34}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
};

UndrawWinterOlympics.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWinterOlympics;