import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFinancialData = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1137.93 741.16" style={style} {...props}>
      <path
        d="M223.43 472.27l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86 59.86 0 0 0 6.05-116.63l.31 24.67-13.55-26.83h-.19a59.85 59.85 0 0 0-62.58 57c-.06 1.14 0 2.27 0 3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.29-5.39-44.9.9-34.91 2.41-70.08 4.37-105.14a59.85 59.85 0 0 0 53.16-56.64c.08-1.83.05-3.64 0-5.43 0-.45 0-.9-.07-1.34-.12-1.74-.28-3.46-.55-5.16 0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.27-.13-.52-.26-1-.4-1.57-.42-1.52-.88-3-1.42-4.51-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43a59.8 59.8 0 0 0-70.32-30.34l.4 32.1-13.4-26.52a59.57 59.57 0 0 0-28.55 64.56h-.06c.09.43.22.83.32 1.26.19.79.39 1.57.61 2.35.28 1 .6 2 .93 3 .25.73.49 1.47.77 2.2.41 1.06.87 2.09 1.33 3.12.27.6.51 1.22.8 1.81q1.14 2.33 2.48 4.53c.31.52.66 1 1 1.51.64 1 1.28 2 2 2.93.43.59.89 1.15 1.34 1.73.66.83 1.33 1.65 2 2.44.49.57 1 1.11 1.51 1.66.74.77 1.49 1.52 2.27 2.26.51.49 1 1 1.57 1.46.88.78 1.8 1.53 2.73 2.26.47.36.93.75 1.41 1.11 1.42 1 2.88 2 4.39 3 .28.18.59.32.87.49 1.27.74 2.55 1.44 3.87 2.09.57.28 1.15.52 1.73.78 1.08.49 2.17 1 3.29 1.38.65.25 1.31.48 2 .71 1.1.37 2.22.71 3.35 1 .66.18 1.33.37 2 .53 1.22.29 2.47.53 3.73.75l.24.05q-1.23 22.18-2.2 44.39a59.81 59.81 0 0 0-83.07-26l10.58 29-21.79-21A59.66 59.66 0 0 0 .08 308.71 58.43 58.43 0 0 0 1.6 325.2a59.84 59.84 0 0 0 110.06 16.31c0 1.5-.1 3-.14 4.51-.4 15.54-.9 34.88 6.85 52.15 5.25 11.7 13.69 21.2 22 29.72 5.43 5.55 11.06 10.91 16.83 16.1a59.89 59.89 0 0 0 21.62 18c9.48 7.31 19.3 14.18 29.45 20.52l6.34 3.94c5.7 3.53 11.54 7.16 17.26 10.93-1-.1-2-.21-3-.26a59.89 59.89 0 0 0-58.94 39l37.4 30.43-41.14-9.54a59.89 59.89 0 0 0 85.82 53.91q-1.38 1.74-2.78 3.46-2.76 3.43-5.45 6.82c-24.34 30.82-31.11 60.09-19.06 82.4l14.66-7.92c-11.73-21.71 5.91-49.51 17.47-64.15q2.64-3.35 5.36-6.7c15.57-19.37 33.19-41.25 32.76-68.13-.65-40.49-40-64.85-71.54-84.43zM802.44 350.27l6.29-3.91c.6-.37 1.19-.77 1.79-1.15a59.86 59.86 0 0 1-6-116.63l-.31 24.67 13.55-26.83h.17a59.85 59.85 0 0 1 62.58 57c.06 1.14 0 2.27 0 3.4 4.71-5.38 9-11.15 11.83-17.47 5.73-12.79 5.84-27.29 5.39-44.9-.9-34.91-2.41-70.08-4.37-105.14a59.85 59.85 0 0 1-53.16-56.64c-.08-1.83-.05-3.64 0-5.43 0-.45 0-.9.07-1.34.12-1.74.28-3.46.55-5.16 0-.28.1-.55.15-.82.24-1.44.54-2.86.88-4.27.13-.52.26-1 .4-1.57.42-1.52.88-3 1.42-4.51.18-.49.39-1 .58-1.46.42-1.09.88-2.17 1.37-3.23.26-.56.51-1.12.79-1.67.07-.14.12-.29.2-.43a59.8 59.8 0 0 1 70.28-30.35l-.4 32.1 13.4-26.52a59.57 59.57 0 0 1 28.56 64.57h.06c-.09.43-.22.83-.32 1.26-.19.79-.39 1.57-.61 2.35-.28 1-.6 2-.93 3-.25.73-.49 1.47-.77 2.2-.41 1.06-.87 2.09-1.33 3.12-.27.6-.51 1.22-.8 1.81q-1.14 2.33-2.48 4.53c-.31.52-.66 1-1 1.51-.64 1-1.28 2-2 2.93-.43.59-.89 1.15-1.34 1.73-.66.83-1.33 1.65-2 2.44-.49.57-1 1.11-1.51 1.66-.73.77-1.49 1.52-2.27 2.26-.51.49-1 1-1.57 1.46-.88.78-1.8 1.53-2.73 2.26-.47.36-.93.75-1.41 1.11-1.42 1-2.88 2-4.39 2.95-.28.18-.59.32-.87.49-1.27.74-2.55 1.44-3.87 2.09-.57.28-1.15.52-1.73.78-1.08.49-2.17 1-3.29 1.38-.65.25-1.31.48-2 .71-1.1.37-2.22.71-3.35 1-.66.18-1.33.37-2 .53-1.22.29-2.47.53-3.73.75h-.24q1.23 22.19 2.2 44.39a59.81 59.81 0 0 1 83.07-26l-10.58 29 21.77-20.9a59.66 59.66 0 0 1 19.34 41.33 58.43 58.43 0 0 1-1.52 16.49 59.84 59.84 0 0 1-110.06 16.31c0 1.5.11 3 .14 4.51.4 15.54.9 34.88-6.85 52.15-5.25 11.7-13.69 21.2-22 29.72-5.43 5.55-11.06 10.91-16.83 16.1a59.89 59.89 0 0 1-21.62 18c-9.48 7.31-19.3 14.18-29.45 20.52l-6.34 3.94c-5.7 3.53-11.54 7.16-17.26 10.93 1-.1 2-.21 3-.26a59.89 59.89 0 0 1 58.94 39l-37.4 30.43 41.14-9.54a59.89 59.89 0 0 1-85.82 53.91q1.38 1.74 2.78 3.46 2.76 3.43 5.45 6.82c24.34 30.82 31.11 60.09 19.06 82.4l-14.66-7.92c11.73-21.71-5.91-49.51-17.47-64.15q-2.64-3.35-5.36-6.7c-15.55-19.32-33.17-41.22-32.74-68.08.65-40.54 39.96-64.9 71.54-84.48z"
        fill="#f2f2f2"
      />
      <ellipse cx={642.75} cy={708.16} rx={495.18} ry={33} fill="#f2f2f2" />
      <path fill="#2f2e41" d="M659.38 709.16l-178.19-2.28.52-4.57 8.62-75.39h156.49l11.51 75.39.88 5.71.17 1.14z" />
      <path opacity={0.1} d="M659.21 708.02h-88.93l-89.09-1.14.52-4.57h176.62l.88 5.71z" />
      <path
        fill="#3f3d56"
        d="M451.49 703.45h236.45v5.71H451.49zM913.54 174.11a14.87 14.87 0 0 0-14.8-14.94H238.42a14.87 14.87 0 0 0-14.8 14.94v400.26h689.92z"
      />
      <path
        d="M223.62 570.38v46.88a14.8 14.8 0 0 0 14.8 14.8h660.32a14.8 14.8 0 0 0 14.8-14.8v-46.88z"
        fill="#3f3d56"
      />
      <path fill="#2f2e41" d="M252.17 184.3H888.4v359.81H252.17z" />
      <path
        d="M571.97 614.27a15.4 15.4 0 0 0 12.13-5.89 15.28 15.28 0 0 0 1.2-1.77l-8.46-1.39 9.15.07a15.5 15.5 0 0 0 .3-12.22l-12.28 6.37 11.32-8.32a15.42 15.42 0 1 0-25.47 17.26 15.4 15.4 0 0 0 12.11 5.89z"
        fill={primaryColor}
      />
      <path opacity={0.1} d="M587.42 632.06l71.09 71.39-10.91-71.39h-60.18z" />
      <path
        d="M778.35 680.78l19.15-11.2a46.37 46.37 0 0 0-9.79-11.71L751.6 669.1l28.29-16.64a46 46 0 0 0-68.1 40.35c0 25.41 20.6 26.29 46 26.29s46-.88 46-26.29a45.9 45.9 0 0 0-3.94-18.66z"
        fill="#57b894"
      />
      <path
        d="M783.23 705.48a36.2 36.2 0 0 0-6.79-5.33c-3.47-2.31-7.07-4.66-11.17-5.45-3.59-.69-7.31-.11-11-.31a25.65 25.65 0 0 1-16.81-7.71c-2.62-2.7-4.67-6-7.82-8.09-3.39-2.22-7.69-2.7-11.7-2.15a31.41 31.41 0 0 0-3.47.72 45.8 45.8 0 0 0-2.72 15.6c0 25.41 20.6 26.29 46 26.29 12.33 0 23.53-.21 31.79-3.33l-1.38-2.58a36.08 36.08 0 0 0-4.93-7.66z"
        opacity={0.1}
      />
      <path
        fill={primaryColor}
        opacity={0.3}
        d="M280.43 323.11h21.15v6.42h-21.15zM844.78 323.3h21.15v6.42h-21.15zM280.62 368.24h21.15v6.42h-21.15zM280.81 413.37h21.15v6.42h-21.15zM281 458.49h21.15v6.42H281z"
      />
      <g opacity={0.2} fill="#f2f2f2">
        <path d="M301.58 326.2h6v.25h-6zM826.61 326.45h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 326.2h6v.25h-6z" />
        <path d="M301.58 326.2h6v.25h-6zM826.61 326.45h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 326.2h6v.25h-6z" />
      </g>
      <path fill={primaryColor} opacity={0.3} d="M280.43 278.11h21.15v6.42h-21.15zM844.78 278.3h21.15v6.42h-21.15z" />
      <g opacity={0.2} fill="#f2f2f2">
        <path d="M301.58 281.2h6v.25h-6zM826.61 281.45h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 281.2h6v.25h-6z" />
      </g>
      <path fill={primaryColor} opacity={0.3} d="M844.78 368.24h21.15v6.42h-21.15z" />
      <g opacity={0.2} fill="#f2f2f2">
        <path d="M301.58 371.14h6v.25h-6zM826.61 371.38h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 371.14h6v.25h-6z" />
        <path d="M301.58 371.14h6v.25h-6zM826.61 371.38h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 371.14h6v.25h-6z" />
      </g>
      <path fill={primaryColor} opacity={0.3} d="M844.78 413.18h21.15v6.42h-21.15z" />
      <g opacity={0.2} fill="#f2f2f2">
        <path d="M301.58 416.07h6v.25h-6zM826.61 416.32h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 416.07h6v.25h-6z" />
        <path d="M301.58 416.07h6v.25h-6zM826.61 416.32h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 416.07h6v.25h-6z" />
      </g>
      <path fill={primaryColor} opacity={0.3} d="M844.78 458.11h21.15v6.42h-21.15z" />
      <g opacity={0.2} fill="#f2f2f2">
        <path d="M301.58 461.01h6v.25h-6zM826.61 461.26h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 461.01h6v.25h-6z" />
        <path d="M301.58 461.01h6v.25h-6zM826.61 461.26h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.79zm-23.59 0h-11.76v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zm-23.59 0h-11.79v-.25h11.81zm-23.59 0h-11.8v-.25h11.8zm-23.59 0h-11.8v-.25h11.8zm-23.6 0h-11.79v-.25h11.79zM838.41 461.01h6v.25h-6z" />
      </g>
      <path
        fill="none"
        stroke="#f2f2f2"
        strokeMiterlimit={10}
        strokeWidth={0.1}
        d="M370.53 281.51V461.7M443.53 281.51V461.7M516.53 281.51V461.7M589.53 281.51V461.7M662.53 281.51V461.7M735.53 281.51V461.7M808.53 281.51V461.7"
      />
      <path
        d="M824.32 269.35l-8.35 8.7a2.55 2.55 0 0 0-.42.61l-5.18 10.67a2.36 2.36 0 0 1-2.31 1.33l-1.66-.13a2.36 2.36 0 0 1-2.1-1.7l-1.6-5.54a2.37 2.37 0 0 0-4.52-.11l-2.69 7.88a2.37 2.37 0 0 1-2.25 1.61h-10.27a2.38 2.38 0 0 1-2.34-2l-2.9-18.15a2.37 2.37 0 0 0-4.46-.7l-14.87 29.35a2.37 2.37 0 0 1-3.48.87l-8.84-6.24a2.39 2.39 0 0 0-3.17.38l-3.35 3.87a2.26 2.26 0 0 0-.26.37l-8.94 15.47a2.35 2.35 0 0 1-2.29 1.17l-5.45-.54a2.39 2.39 0 0 0-1.12.16l-4.88 1.95a2.37 2.37 0 0 1-3-1.25l-1.07-2.45a2.38 2.38 0 0 0-2.28-1.42l-5.58.26a2.34 2.34 0 0 0-1.77.93l-1.58 2.06a2.37 2.37 0 0 1-4.12-.66l-2-5.65a2.37 2.37 0 0 0-3.66-1.11l-9.5 7.12-10.5 8.47a2.38 2.38 0 0 1-2.58.26l-8.15-4.23a2.39 2.39 0 0 0-1.42-.24l-16.51 2.31a2.38 2.38 0 0 0-2 1.82l-2.93 12.73a2.37 2.37 0 0 1-3.85 1.27 2.38 2.38 0 0 0-3.67.74l-2.25 4.51a2.4 2.4 0 0 1-1.73 1.28l-5.11.85a2.38 2.38 0 0 0-.92.37l-8.05 5.36a2.35 2.35 0 0 1-1.31.4h-3.77a2.37 2.37 0 0 1-2.18-1.43l-1-2.39a2.37 2.37 0 0 0-3.18-1.19l-8.74 4.09a2.38 2.38 0 0 1-2.23-.11l-4-2.41a2.39 2.39 0 0 0-1.22-.34h-8.83a2.37 2.37 0 0 0-1.31.4l-8.81 5.85a2.37 2.37 0 0 1-2.32.17l-4-1.89a2.37 2.37 0 0 0-2.79.59l-1.9 2.17a2.36 2.36 0 0 1-3.85-.4l-.57-1a2.37 2.37 0 0 0-3.28-.88l-6.93 4.11a2.37 2.37 0 0 1-2.36 0l-2.86-1.59a2.35 2.35 0 0 0-2.13-.09l-2.72 1.24a2.39 2.39 0 0 1-3.25-1.44l-1.76-5.24a2.35 2.35 0 0 0-2.26-1.65h-2.56a2.32 2.32 0 0 1-1.15-.3l-9.83-5.39a2.38 2.38 0 0 0-2.56.19l-7.21 5.4a2.35 2.35 0 0 1-1.42.47h-9.07a2.35 2.35 0 0 0-1.31.4l-1.7 1.13a2.37 2.37 0 0 1-3.44-.91l-.41-.81a2.36 2.36 0 0 0-2.12-1.32h-4.55a2.37 2.37 0 0 0-1.87.92l-2.82 3.61a2.37 2.37 0 0 1-3.87-.19l-.8-1.25a2.36 2.36 0 0 0-3.22-.76l-2.34 1.4a2.38 2.38 0 0 1-2.61-.11l-9.43-6.83a2.86 2.86 0 0 0-.54-.3l-7.37-2.83a2.37 2.37 0 0 0-3 1.32l-5.13 12.5a2.14 2.14 0 0 0-.15.55l-1.66 11.26a2.38 2.38 0 0 1-.62 1.27l-3.51 3.77a2.39 2.39 0 0 1-2.89.45l-6.09-3.38a2.37 2.37 0 0 0-3.4 1.3l-3.86 11.29a2.27 2.27 0 0 0-.13.77v7.12a2.37 2.37 0 0 1-1.43 2.17l-6.19 2.74a2.37 2.37 0 0 1-2.15-.14l-4.66-2.74a2.37 2.37 0 0 0-1.54-.3l-8.17 1.17a2.36 2.36 0 0 1-2.38-1.16l-1.38-2.36a2.35 2.35 0 0 0-1.34-1.06l-3.71-1.16a2.36 2.36 0 0 0-2.47.67l-5.15 5.72a2.4 2.4 0 0 1-1.57.78l-7.6.64a2.24 2.24 0 0 0-1 .3l-13.25 7.62a2.38 2.38 0 0 1-2.66-.21l-3.76-3a2.4 2.4 0 0 0-1.48-.52h-14.24a2.35 2.35 0 0 1-1.85-.89l-3.59-4.48a2.37 2.37 0 0 0-3.61-.1l-4.32 4.8a2.37 2.37 0 0 0-.61 1.58v59.64a2.37 2.37 0 0 0 2.37 2.37h513.73a2.37 2.37 0 0 0 2.37-2.38l-.14-188.33a2.38 2.38 0 0 0-4.09-1.69z"
        fill={primaryColor}
        opacity={0.3}
      />
      <path
        d="M823.86 346.58l-7.74 5.16a3 3 0 0 0-.71.67l-4.81 6.35a3 3 0 0 1-2.48 1.16l-1.57-.08a2.94 2.94 0 0 1-2.53-1.72l-1-2.13a2.92 2.92 0 0 0-5.25-.17l-2 3.83a2.92 2.92 0 0 1-2.59 1.55h-9.92a2.91 2.91 0 0 1-2.84-2.22l-2.38-9.53a2.93 2.93 0 0 0-5.14-1.11l-14.3 18.08a2.91 2.91 0 0 1-3.5.85l-9.19-4.15a2.93 2.93 0 0 0-3 .31l-3.29 2.43a2.72 2.72 0 0 0-.43.4l-8.68 9.61a2.93 2.93 0 0 1-2.36 1l-5.67-.36a3.16 3.16 0 0 0-.92.08l-5.11 1.31a2.92 2.92 0 0 1-3.15-1.18l-.58-.86a2.93 2.93 0 0 0-2.5-1.27l-5.7.17a2.82 2.82 0 0 0-1.79.68l-1.4 1.17a2.93 2.93 0 0 1-4.45-.83l-1.48-2.68a2.93 2.93 0 0 0-3.83-1.23l-9.59 4.61-10.61 5.48a2.91 2.91 0 0 1-2.26.17l-8.45-2.8a3 3 0 0 0-1.18-.14l-16.36 1.39a3 3 0 0 0-2.5 1.93l-2.37 6.62a2.93 2.93 0 0 1-4.16 1.58l-.1-.05a2.91 2.91 0 0 0-3.71.76l-1.86 2.38a3 3 0 0 1-2 1.11l-5.12.55a3 3 0 0 0-.84.21l-8.11 3.47a3.06 3.06 0 0 1-1.15.23h-3.9a2.93 2.93 0 0 1-2.42-1.28l-.56-.82a2.93 2.93 0 0 0-3.26-1.15l-9.09 2.75a2.94 2.94 0 0 1-1.9-.07l-4.22-1.62a2.88 2.88 0 0 0-1-.2h-9.06a2.81 2.81 0 0 0-1.14.24l-9 3.82a2.9 2.9 0 0 1-2 .11l-4.45-1.33a2.94 2.94 0 0 0-2.57.44l-1.95 1.43a2.93 2.93 0 0 1-3.93-.43l-.29-.33a2.93 2.93 0 0 0-3.24-.81l-7.25 2.77a2.92 2.92 0 0 1-2 0l-3.18-1.14a3 3 0 0 0-1.8-.05l-3 .87a2.93 2.93 0 0 1-3.43-1.5l-1.12-2.25a2.94 2.94 0 0 0-2.62-1.62h-2.6a2.9 2.9 0 0 1-1-.16l-10.09-3.54a2.9 2.9 0 0 0-2.24.12l-7.37 3.54a3 3 0 0 1-1.27.29h-9.31a3.06 3.06 0 0 0-1.15.23l-1.9.82a2.94 2.94 0 0 1-3.46-.89 2.92 2.92 0 0 0-2.31-1.13h-4.7a2.94 2.94 0 0 0-1.86.66l-2.73 2.24a2.91 2.91 0 0 1-3.93-.2l-.62-.62a2.93 2.93 0 0 0-3.13-.67l-2.72 1.05a3 3 0 0 1-2.29-.08l-9.57-4.44a2.37 2.37 0 0 0-.53-.18l-7.51-1.85a2.91 2.91 0 0 0-3.16 1.26l-4.72 7.36a3 3 0 0 0-.39.92l-1.43 6.25a3 3 0 0 1-1.2 1.76l-3.12 2.14a2.9 2.9 0 0 1-2.63.34l-6.42-2.28a2.93 2.93 0 0 0-3.59 1.44l-3.38 6.32a3 3 0 0 0-.34 1.38v2.85a2.94 2.94 0 0 1-2.15 2.82l-5.62 1.56a2.88 2.88 0 0 1-1.81-.08l-4.9-1.85a2.88 2.88 0 0 0-1.3-.18l-8.45.77a2.9 2.9 0 0 1-2.43-.94l-1-1.11a2.84 2.84 0 0 0-1.59-.9l-3.85-.78a3 3 0 0 0-2.28.49l-5.07 3.61a3 3 0 0 1-1.54.54l-7.77.41a3.06 3.06 0 0 0-.86.18l-13.49 5a2.86 2.86 0 0 1-2.34-.14l-3.9-2a2.93 2.93 0 0 0-1.33-.32h-14.5a2.93 2.93 0 0 1-1.84-.65l-3.51-2.81a2.93 2.93 0 0 0-3.53-.1l-3.76 2.68a2.94 2.94 0 0 0-1.23 2.39v28.11a2.93 2.93 0 0 0 2.93 2.93h512.59a2.93 2.93 0 0 0 2.93-2.93l-.14-109.77a2.93 2.93 0 0 0-4.55-2.48z"
        fill={primaryColor}
        opacity={0.3}
      />
      <circle cx={825.93} cy={345.84} r={7} fill={primaryColor} />
      <path
        d="M825.48 415.09l-9.51 3.17a2.49 2.49 0 0 0-.52.25l-5.22 3.45a2.22 2.22 0 0 1-1.28.36l-3.25-.08a2.22 2.22 0 0 1-1.6-.73l-2-2.2a2.23 2.23 0 0 0-3.18-.13l-3.37 3.16a2.2 2.2 0 0 1-1.52.61h-11.68a2.21 2.21 0 0 1-2-1.24l-2.67-5.33a2.23 2.23 0 0 0-3.18-.89l-16.53 10.47a2.25 2.25 0 0 1-1.68.29l-11.32-2.55a2.17 2.17 0 0 0-1.26.08l-4.13 1.53a1.41 1.41 0 0 0-.31.14l-9.13 5.06a2.3 2.3 0 0 1-1.15.28l-6.76-.22a2 2 0 0 0-.35 0l-6.5.83a2.27 2.27 0 0 1-1.6-.41l-1.32-1a2.2 2.2 0 0 0-1.35-.43l-7.13.1a2.12 2.12 0 0 0-.83.17l-3.2 1.35a2.24 2.24 0 0 1-2.36-.41l-2.62-2.32a2.22 2.22 0 0 0-2-.51l-10.94 2.64-11.25 2.91a2.19 2.19 0 0 1-.92 0l-9.5-1.58a3.55 3.55 0 0 0-.46 0l-17.57.79a2.22 2.22 0 0 0-1.71.93l-2.65 3.65a2.22 2.22 0 0 1-2.4.85l-2.83-.78a2.26 2.26 0 0 0-1.79.28l-2.83 1.81a2.29 2.29 0 0 1-1.08.34l-6 .33a2 2 0 0 0-.34 0l-8.66 1.85a2.5 2.5 0 0 1-.47.05h-5.08a2.21 2.21 0 0 1-1.31-.43l-1.32-1a2.19 2.19 0 0 0-1.64-.41l-10.81 1.62a2.36 2.36 0 0 1-.75 0l-5.08-1a2 2 0 0 0-.42 0h-9.75a2.4 2.4 0 0 0-.46 0l-9.89 2.1a2.15 2.15 0 0 1-.8 0l-5.89-.89a2.29 2.29 0 0 0-1.1.12l-3.78 1.38a2.19 2.19 0 0 1-1.87-.16l-1.79-1a2.16 2.16 0 0 0-1.51-.26l-9 1.71a2.21 2.21 0 0 1-.81 0l-4.33-.77a2.42 2.42 0 0 0-.71 0l-4.78.69a2.2 2.2 0 0 1-1.89-.62l-1.58-1.51a2.28 2.28 0 0 0-1.58-.65h-3.79a2.34 2.34 0 0 1-.38 0l-11.06-1.94a2.15 2.15 0 0 0-.91 0l-8.36 2a2.24 2.24 0 0 1-.52.06h-10.07a2.31 2.31 0 0 0-.46 0l-3.41.73a2.28 2.28 0 0 1-1.71-.2l-.94-.61a2.24 2.24 0 0 0-1.2-.35h-6.09a2.21 2.21 0 0 0-.84.17l-4.26 1.74a2.19 2.19 0 0 1-1.84-.07l-2.26-1.14a2.25 2.25 0 0 0-1.42-.2l-4.46.86a2.2 2.2 0 0 1-.92 0l-10.34-2.4h-.23l-8.79-1.09a2.26 2.26 0 0 0-1.64.46l-5 3.88a2.18 2.18 0 0 0-.65.82l-1.12 2.49a2.25 2.25 0 0 1-1.3 1.18l-3.84 1.31a2.1 2.1 0 0 1-1.11.09l-8.54-1.52a2.24 2.24 0 0 0-1.91.57l-3.39 3.17a2.22 2.22 0 0 0-.7 1.63 2.22 2.22 0 0 1-1.92 2.2l-6.41.89a2.18 2.18 0 0 1-.72 0l-5.8-1.1a2.24 2.24 0 0 0-.52 0l-9.69.44a2.29 2.29 0 0 1-1.17-.27l-1.7-.93a2.12 2.12 0 0 0-.85-.27l-5.09-.51a2.28 2.28 0 0 0-1 .12l-6 2.13a2.28 2.28 0 0 1-.69.13l-8.53.23a2.07 2.07 0 0 0-.35 0l-14.45 2.67a2.34 2.34 0 0 1-.95 0l-4.92-1.26a2.6 2.6 0 0 0-.56-.07h-15.51a2.12 2.12 0 0 1-.83-.16l-4.86-1.94a2.21 2.21 0 0 0-1.58 0l-4.52 1.61a2.21 2.21 0 0 0-1.48 2.09v1a2.22 2.22 0 0 0 2.22 2.23h514a2.22 2.22 0 0 0 2.22-2.23l-.13-42.27a2.23 2.23 0 0 0-2.91-2.21z"
        fill={primaryColor}
        opacity={0.3}
      />
      <circle cx={440.93} cy={392.84} r={7} fill={primaryColor} />
      <circle cx={776.93} cy={348.84} r={7} fill={primaryColor} />
      <circle cx={602.93} cy={395.84} r={7} fill={primaryColor} />
      <circle cx={693.93} cy={370.84} r={7} fill={primaryColor} />
      <path
        d="M829.41 349a2.93 2.93 0 0 0-4.55-2.43l-7.74 5.16a3 3 0 0 0-.71.67l-4.81 6.35a3 3 0 0 1-2.48 1.16l-1.57-.08a2.94 2.94 0 0 1-2.53-1.72l-1-2.13a2.92 2.92 0 0 0-5.25-.17l-2 3.83a2.92 2.92 0 0 1-2.59 1.55h-9.92a2.91 2.91 0 0 1-2.84-2.22l-2.38-9.53a2.93 2.93 0 0 0-5.14-1.11l-14.3 18.08a2.91 2.91 0 0 1-3.5.85l-9.19-4.15a2.93 2.93 0 0 0-3 .31l-3.29 2.43a2.72 2.72 0 0 0-.43.4l-8.68 9.61a2.93 2.93 0 0 1-2.36 1l-5.67-.36a3.16 3.16 0 0 0-.92.08l-5.11 1.31a2.92 2.92 0 0 1-3.15-1.18l-.58-.86a2.93 2.93 0 0 0-2.5-1.27l-5.7.17a2.82 2.82 0 0 0-1.79.68l-1.4 1.17a2.93 2.93 0 0 1-4.45-.83l-1.48-2.68a2.93 2.93 0 0 0-3.83-1.23l-9.59 4.61-10.61 5.48a2.91 2.91 0 0 1-2.26.17l-8.45-2.8a3 3 0 0 0-1.18-.14l-16.36 1.4a3 3 0 0 0-2.5 1.93l-2.37 6.62a2.93 2.93 0 0 1-4.16 1.58l-.1-.05a2.91 2.91 0 0 0-3.71.76l-1.86 2.38a3 3 0 0 1-2 1.11l-5.12.55a3 3 0 0 0-.84.21l-8.11 3.47a3.06 3.06 0 0 1-1.15.23h-3.9a2.93 2.93 0 0 1-2.42-1.28l-.56-.82a2.93 2.93 0 0 0-3.26-1.15l-9.09 2.75a2.94 2.94 0 0 1-1.9-.07l-4.22-1.62a2.88 2.88 0 0 0-1-.2h-9.06a2.81 2.81 0 0 0-1.14.24l-9 3.82a2.9 2.9 0 0 1-2 .11l-4.45-1.33a2.94 2.94 0 0 0-2.57.44l-1.95 1.43a2.93 2.93 0 0 1-3.93-.43l-.29-.33a2.93 2.93 0 0 0-3.24-.81l-7.25 2.77a2.92 2.92 0 0 1-2 0l-3.18-1.14a3 3 0 0 0-1.8-.05l-3 .87a2.93 2.93 0 0 1-3.43-1.5l-1.12-2.25a2.94 2.94 0 0 0-2.62-1.62h-2.6a2.9 2.9 0 0 1-1-.16l-10.09-3.54a2.9 2.9 0 0 0-2.24.12l-7.37 3.54a3 3 0 0 1-1.27.29h-9.31a3.06 3.06 0 0 0-1.15.23l-1.9.82a2.94 2.94 0 0 1-3.46-.89h0a2.92 2.92 0 0 0-2.31-1.13h-4.7a2.94 2.94 0 0 0-1.86.66l-2.73 2.24a2.91 2.91 0 0 1-3.93-.2l-.62-.62a2.93 2.93 0 0 0-3.13-.67l-2.72 1.05a3 3 0 0 1-2.29-.08l-9.57-4.44a2.37 2.37 0 0 0-.53-.18l-7.51-1.85a2.91 2.91 0 0 0-3.16 1.26l-4.72 7.36a3 3 0 0 0-.39.92l-1.43 6.25a3 3 0 0 1-1.2 1.76l-3.12 2.14a2.9 2.9 0 0 1-2.63.34l-6.42-2.28a2.93 2.93 0 0 0-3.59 1.44l-3.38 6.32a3 3 0 0 0-.34 1.38v2.85a2.94 2.94 0 0 1-2.15 2.82l-5.62 1.56a2.88 2.88 0 0 1-1.81-.08l-4.9-1.85a2.88 2.88 0 0 0-1.3-.18l-8.45.77a2.9 2.9 0 0 1-2.43-.94l-1-1.11a2.84 2.84 0 0 0-1.59-.9l-3.85-.78a3 3 0 0 0-2.28.49l-5.07 3.61a3 3 0 0 1-1.54.54l-7.77.41a3.06 3.06 0 0 0-.86.18l-13.49 5a2.86 2.86 0 0 1-2.34-.14l-3.9-2a2.93 2.93 0 0 0-1.33-.32h-14.5a2.93 2.93 0 0 1-1.84-.65l-3.51-2.81a2.93 2.93 0 0 0-3.53-.1l-3.76 2.68a2.94 2.94 0 0 0-1.23 2.39"
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
      />
      <path fill="#f2f2f2" opacity={0.2} d="M280.93 502.79h585v.1h-585z" />
      <circle cx={370.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={443.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={516.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={589.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={662.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={735.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <circle cx={808.93} cy={502.84} r={5} fill={primaryColor} opacity={0.3} />
      <path
        d="M239.7 695.66c-3-5.51.4-12.26 4.29-17.17s8.61-10 8.51-16.29c-.15-9-9.7-14.32-17.33-19.09a84 84 0 0 1-15.56-12.53 23 23 0 0 1-4.78-6.4c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.28 1.91-38.49"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M200.79 573.64a14 14 0 0 1 7-11.5l3.14 6.21-.1-7.52a14.22 14.22 0 0 1 4.63-.56 14 14 0 1 1-14.68 13.37zM225.82 668.63a14 14 0 1 0-.68-11.3l8.77 7.13-9.65-2.23a14 14 0 0 0 1.56 6.4zM232.75 641.38a14 14 0 0 0 4.45-27.53l.08 5.78-3.18-6.29a14 14 0 0 0-14.67 13.36 13.84 13.84 0 0 0 .6 4.79 14 14 0 0 0 12.72 9.89zM198.68 618.71a14 14 0 1 0-6.21-26.27l2.48 6.8-5.1-4.9a14 14 0 0 0-4.53 9.69 13.79 13.79 0 0 0 .35 3.87 14.05 14.05 0 0 0 13.01 10.81z"
        fill="#57b894"
      />
      <path
        d="M202.68 577.38c3.24.35 6.39 1.36 9.64 1.56s6.82-.58 8.88-3.1c1.1-1.36 1.66-3.09 2.59-4.57a10 10 0 0 1 3.54-3.33 14 14 0 1 1-26.24 9.32q.8.03 1.59.12zM198.68 618.71a14 14 0 0 0 13.35-20 10.37 10.37 0 0 0-2.82 2.82c-1 1.51-1.61 3.25-2.78 4.64-2.19 2.57-5.92 3.41-9.31 3.26s-6.66-1.12-10-1.43c-.47 0-.94-.07-1.42-.08a14.05 14.05 0 0 0 12.98 10.79zM232.75 641.38a14 14 0 0 0 13.46-19.8 11.48 11.48 0 0 0-3 2.85c-1.09 1.54-1.77 3.31-3 4.73-2.37 2.64-6.35 3.57-9.93 3.48s-6.83-.92-10.28-1.19a14 14 0 0 0 12.75 9.93zM225.82 668.63a14.017 14.017 0 0 0 25.59-11.45 13.8 13.8 0 0 0-3.08 2.74c-1.34 1.63-2.22 3.48-3.76 5-2.87 2.82-7.5 4-11.63 4.09a62.17 62.17 0 0 1-7.12-.38z"
        opacity={0.1}
      />
      <path
        d="M260.87 689.32s-11.08-.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.95 32.4-4 4.03-10.94 4.03-10.94z"
        fill="#656380"
      />
      <path
        d="M224.22 702.93c12.51.1 29.06-1.94 32.39-4 2.54-1.55 3.55-7.1 3.89-9.65h.37s-.7 8.93-4 11-19.89 4.08-32.4 4c-3.61 0-4.85-1.31-4.78-3.21.47 1.12 1.84 1.84 4.53 1.86z"
        opacity={0.2}
      />
      <path
        d="M958.97 566.23a15.61 15.61 0 0 0-.81 6.51 13.44 13.44 0 0 0 3 5.94 5.65 5.65 0 0 0 3.24 2.43 3.83 3.83 0 0 0 3.57-1.73 8.49 8.49 0 0 0 1.3-3.93 44.79 44.79 0 0 0-.55-11.14c-.42-3.09-.53-6.49-1.35-9.48-2.12 0-4.57-.39-5.75 1.63-1.51 2.63-1.87 6.83-2.65 9.77z"
        fill="#ffc0c6"
      />
      <path
        d="M970.57 511.18c-.52 1.47-1.25 2.87-1.73 4.36a30.46 30.46 0 0 0-1 4.74 259.09 259.09 0 0 1-6 27.94 30 30 0 0 0-1.5 8.36l5.72-.2a2.15 2.15 0 0 1 1.54.34c.49.44.82 1.41 1.44 1.16a144.06 144.06 0 0 0 2.25-16.63c.23-4 .12-7.92.38-11.87.5-7.87 2.84-16.84-.22-24.45a16.39 16.39 0 0 1-.88 6.25z"
        fill="#3f3d56"
      />
      <path
        d="M970.57 511.18c-.52 1.47-1.25 2.87-1.73 4.36a30.46 30.46 0 0 0-1 4.74 259.09 259.09 0 0 1-6 27.94 30 30 0 0 0-1.5 8.36l5.72-.2a2.15 2.15 0 0 1 1.54.34c.49.44.82 1.41 1.44 1.16a144.06 144.06 0 0 0 2.25-16.63c.23-4 .12-7.92.38-11.87.5-7.87 2.84-16.84-.22-24.45a16.39 16.39 0 0 1-.88 6.25z"
        opacity={0.1}
      />
      <path
        d="M977.68 464.04c-1.4 1.2-1.88 3.12-2.29 4.92l-3.32 14.62c-.76 3.34-1.52 6.68-2 10.07-2.1 14.16.33 28.72-2 42.84a67.32 67.32 0 0 0-1.34 9.55c-.1 5.88 2.17 11.73 1.23 17.53a5.39 5.39 0 0 0 0 3.16c.48 1 2.1 1.32 2.55.35a1.79 1.79 0 0 0 .15-.56l3.46-21.83c.83-5.19 1.65-10.46 1.08-15.69-.39-3.56-1.43-7.12-.86-10.66a34.57 34.57 0 0 1 1.53-5.15c3.34-10 2.88-20.87 1-31.21a13 13 0 0 1-.32-4.6c.46-2.53 2.42-4.47 3.74-6.67 1-1.66 2.72-5.31 2-7.31-.74-2.34-3.2-.57-4.61.64z"
        fill="#3f3d56"
      />
      <path
        d="M983.22 675.42a2.44 2.44 0 0 0-1.34.24 2.36 2.36 0 0 0-.79 1c-1.11 2.29-1.89 4.94-4 6.42a11.13 11.13 0 0 1-3.45 1.42l-9.4 2.68c-1.21.34-2.59.84-3 2s.47 2.58 1.6 3.26a10.63 10.63 0 0 0 5.4 1l13.61.2a11.27 11.27 0 0 0 3.84-.39c1.59-.56 2.93-1.83 4.6-2 1.36-.15 2.67.44 4 .74 2.77.61 5.64 0 8.39-.7a2.41 2.41 0 0 0 1.33-.64 2.35 2.35 0 0 0 .41-1.48c.11-2.33.15-4.65.14-7 0-2.11-.25-4.56-2-5.72a6.27 6.27 0 0 0-2.63-.81c-5.58-.71-11.09-.18-16.71-.22zM1019.23 705.03a13 13 0 0 1-1.45 2.57l-5.73 8.68c-2.34 3.53-4.76 7.31-4.92 11.54a27.24 27.24 0 0 0 12 1.73 11 11 0 0 0 5.74-1.79c2.46-1.81 3.43-5 4.23-7.92a1.63 1.63 0 0 1 .55-1c.51-.35 1.2 0 1.82-.13 1.27-.16 1.71-1.76 1.8-3a39.92 39.92 0 0 0-1-11.78 2.43 2.43 0 0 0-.61-1.29 2.49 2.49 0 0 0-1.31-.49c-2.86-.49-5.72-1.06-8.59-1.48-3.79-.61-1.46 1.63-2.53 4.36z"
        fill="#575a88"
      />
      <path
        d="M971.91 550.36c-2.77 3.52-3.66 8.22-3.45 12.69s1.44 8.83 2.47 13.19a166.92 166.92 0 0 1 3.66 21.55 28.48 28.48 0 0 0 1 6c.49 1.52 1.25 2.94 1.69 4.47.54 1.86.59 3.84 1.09 5.71a34 34 0 0 0 2.58 5.83c4.57 9.34 5.55 20 5.63 30.4 0 2.81 0 5.61.26 8.4.58 5.66 2.33 12-1.06 16.56.86 3.1 5 3.69 8.16 3.28a40.37 40.37 0 0 0 10.79-2.9c-1-2.12-2.46-4.59-2.39-7a20 20 0 0 1 1.42-5.48c1.81-5.5 2-11.38 2.1-17.17a47.9 47.9 0 0 0-.08-5.36 45.06 45.06 0 0 0-.8-4.9l-3.87-19.39a30.43 30.43 0 0 1-.27-10.34 38.47 38.47 0 0 1 4.09-11.64c4.63-9.35 6.23-19.89 7.14-30.29.49-5.68.61-12-3-16.41a15.15 15.15 0 0 0-8.58-4.9 35.48 35.48 0 0 0-10-.39c-6.69.56-14.43 2.83-18.58 8.09z"
        fill="#3f3d56"
      />
      <path
        d="M972.72 552.85c-1.28 4.3 1.9 8.49 3.54 12.67.94 2.41 1.41 5 2.85 7.19 1.78 2.67 4.84 4.25 6.77 6.82s2.49 5.58 4 8.25 4 4.89 5.4 7.67c2.12 4.15 1.81 9.13 3.3 13.55 1.06 3.17 3.05 6 3.82 9.27.34 1.47.43 3 .81 4.44.89 3.44 3.33 6.44 3.58 10 .16 2.33-.62 4.89.61 6.87.74 1.21 2.08 1.92 3 3a9.64 9.64 0 0 1 1.43 3.24l2 6.55c1.93 6.36 2.15 12.93 4 19.32s3.16 13.3 1 19.6c-.87 2.61-2.32 5.29-1.59 7.94a6.78 6.78 0 0 0 3.92 4.16 16.43 16.43 0 0 0 5.78 1.09c2.65.14 5.5 0 7.69-1.47a151.29 151.29 0 0 1-1.28-24.24c.25-5.28 1-10.54 1-15.83a81.56 81.56 0 0 0-.95-10 80.48 80.48 0 0 0-3.16-14.6 53.79 53.79 0 0 1-2.1-6.52c-.32-1.51-.42-3.06-.64-4.59s-.55-3-.88-4.57l-1.34-6.18c-.3-1.36-1.12-2.55-1.18-3.94l-.41-9c-.66-14.74-1.3-29.72 2.25-44-2.07-6.14-5.56-12.61-11.51-15.18a20.59 20.59 0 0 0-7.7-1.47c-12.15-.38-23.03 4.83-34.01 9.96z"
        fill="#3f3d56"
      />
      <path
        d="M981.8 452.05a8.54 8.54 0 0 1 1.56 1.31 8 8 0 0 1 1.3 2.27 27.14 27.14 0 0 1 2 8.6 108.28 108.28 0 0 0 17.8-15.67c-2.39.18-4.59-1.53-5.73-3.63a18.74 18.74 0 0 1-1.7-6.92c-.06-.45-6.23 2.17-6.73 2.44-2.2 1.2-4.26 2.63-6.41 3.91a35.06 35.06 0 0 1-3.19 1.73c-1 .46-2.58.67-3.41 1.33-2.21 1.78 3.15 3.68 4.51 4.63z"
        fill="#ffc0c6"
      />
      <path
        d="M980.8 458.82c-.25 1.93.08 3.9-.21 5.82-.41 2.77-2 5.18-3.2 7.72-3.28 7.13-3 15.3-3.15 23.14-.15 8.58-.86 17.13-1.58 25.68l-1.31 15.65c-.23 2.7-.46 5.42-1 8.09a13.38 13.38 0 0 0-.41 3.44 12 12 0 0 0 1.22 4 12.13 12.13 0 0 0 2.79 4.44 4.19 4.19 0 0 0 4.87.71l1.18-3.55a5.67 5.67 0 0 0 5.36 5.49 11.19 11.19 0 0 0 3-.52l9.25-2.51a28 28 0 0 0 5.8-2c4-2.13 6.68-6.13 8.12-10.41s1.73-8.83 1.9-13.33c.37-10.39.09-20.88-2.11-31-.92-4.25-2.18-8.43-2.94-12.71a113 113 0 0 1-1.3-17.45l-.32-14.46a12.43 12.43 0 0 0-.89-5.25 4.25 4.25 0 0 0-4.28-2.55c-2.77.52-3.42 4.09-4.92 6.48-1.28 2.05-3.43 3.37-5.5 4.62-1.36.82-3.06 1.66-4.46.9s-1.39-3.21-2.83-3.84c-1.91-1.03-2.91 1.92-3.08 3.4z"
        fill="#f2f2f2"
      />
      <path
        d="M994.05 462.88c-2.62 6.7-4 13.81-5.32 20.89-1.39 7.63-2.64 15.46-1.37 23.11 2.4 14.47 13.38 26.16 17.12 40.34.65 2.46 1.08 5 2 7.38 1.43 4 4 7.4 6.53 10.77 1.36 1.81 3.37 3.84 5.51 3.11 1.59-.55 2.29-2.36 3.5-3.54 1.69-1.65 4.28-1.94 6.64-1.83s4.78.54 7.07 0 4.47-2.59 4.24-5c-.15-1.51-1.21-2.74-2-4-2.3-3.44-3.18-7.62-3.85-11.71-3.85-23.59-2.13-47.84-6.22-71.39-.51-3-1.15-6-2.84-8.46a35.1 35.1 0 0 1-2.31-3.27c-.64-1.23-.92-2.66-1.76-3.77-1.2-1.58-3.26-2.17-5.15-2.78a49.25 49.25 0 0 1-7.47-3.11c-1.82-.94-4.4-3.54-6.24-2.3s-3.23 5.57-4.22 7.45a79.35 79.35 0 0 0-3.86 8.11z"
        fill="#3f3d56"
      />
      <path
        d="M1001.97 560.37c-1.42.33-2.93-.12-4.36.2-2.35.54-3.7 2.93-4.76 5.09a5.39 5.39 0 0 0-.71 2.18 1.81 1.81 0 0 0 1.14 1.81 2.18 2.18 0 0 0 2.09-.89 9.67 9.67 0 0 1 1.6-1.77c1.66-1.11 3.92.07 5.21 1.59s2.26 3.43 4 4.34a9.17 9.17 0 0 0 3.19.78 10.76 10.76 0 0 0 3.49 0 3.71 3.71 0 0 0 2.73-2 5.44 5.44 0 0 0 .33-2.16l.17-10a2.77 2.77 0 0 0-.34-1.69 2.69 2.69 0 0 0-1.33-.84c-1.86-.71-5.89-3.12-7.76-1.91-2.09 1.48-1.69 4.58-4.69 5.27z"
        fill="#ffc0c6"
      />
      <circle cx={982.76} cy={434.17} r={17.72} fill="#ffc0c6" />
      <path
        d="M981.02 432.24a3.54 3.54 0 0 0-2.54-2.69 11.4 11.4 0 0 1-1.46-.21c-1.67-.57-1.63-3.12-3.06-4.14-1.09-.77-2.59-.37-3.78.21s-2.39 1.36-3.71 1.29a3.9 3.9 0 0 1-3.34-3.2 7.42 7.42 0 0 1 .9-4.79c2.66-5.22 8.23-8.21 13.62-10.49a27.33 27.33 0 0 1 7.36-2.23 10.71 10.71 0 0 1 7.37 1.57c.69.48 1.29 1.06 2 1.51a20.93 20.93 0 0 0 2.16 1.11c7.12 3.57 10.83 12.53 8.88 20.26-.68 2.69-2 5.22-2.41 7.95a6.21 6.21 0 0 1-.56 2.14c-.91 1.6-3.12 1.75-5 1.7a2.34 2.34 0 0 1-1.43-.34 2.5 2.5 0 0 1-.71-1.45c-.74-3-1.9-6.07-4.33-8-1.3-1-3.4-1.52-4.46-.25a9.27 9.27 0 0 0-1 2.15c-.52 1.07-2.12 2.28-3.41 2-1.81-.43-.66-2.43-1.09-4.1z"
        fill="#3f3d56"
      />
      <path
        d="M1024.66 455.9c-2.13-.25-2.54 10.91-4.69 10.92-.61 0-.5-2.35-1-2s1.29 8 1 8.6c-1.09 2.25 1.08-7.31 0-5.06-1.43 2.94-.78 3.9-1.52 7.09-1.64 7-9.81 12.08-8.15 19.06a173 173 0 0 1 4.22 23.23 37.91 37.91 0 0 1 .13 7.53c-.57 5.44-3.06 10.47-5.57 15.34-2.2 4.26-4.44 8.5-6.23 12.94a5.26 5.26 0 0 0-.5 3.52c.74 2.25 3.72 2.49 6 3.14 4.67 1.33 8.66 6 13.4 4.91 2.12-6.44 1.87-13.23 3.72-19.76 1.9-6.69 6.34-12.51 7.78-19.31a46.68 46.68 0 0 0 .72-8.52l.7-31.55a34 34 0 0 0-.19-5.62 34.67 34.67 0 0 0-1.51-5.63l-3.66-11c-.96-2.94-1.64-7.47-4.65-7.83z"
        opacity={0.1}
      />
      <path
        d="M1026.18 455.9a53.08 53.08 0 0 0-6.43-.36 2.55 2.55 0 0 0-2.89 1.87l-3.27 6.73a45 45 0 0 0-3.61 9.1c-1.64 7 .18 14.27 1.84 21.25a173 173 0 0 1 4.22 23.23 37.91 37.91 0 0 1 .13 7.53c-.57 5.44-3.06 10.47-5.57 15.34-2.2 4.26-4.44 8.5-6.23 12.94a5.2 5.2 0 0 0-.5 3.52c.74 2.25 3.72 2.49 6 3.14 4.67 1.33 8.66 6 13.4 4.91 2.12-6.44 1.87-13.23 3.72-19.76 1.9-6.69 6.34-12.51 7.78-19.31a46.68 46.68 0 0 0 .72-8.52l.69-31.55a32 32 0 0 0-.19-5.62 33.65 33.65 0 0 0-1.5-5.63l-3.66-11c-.96-2.92-1.64-7.45-4.65-7.81z"
        fill="#3f3d56"
      />
    </svg>
  );
};

UndrawFinancialData.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFinancialData;
