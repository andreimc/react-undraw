import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTweetstorm = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 813.15 752" style={style} {...props}>
      <path fill="#e0e0e0" d="M559.73 403.7l-211.87-51.03V752l211.87-55.46V403.7z" />
      <path opacity={0.1} d="M559.73 403.7l-211.87-51.03V752l211.87-55.46V403.7z" />
      <path fill="#e0e0e0" d="M135.99 403.7l211.87-51.03V752l-211.87-54.35V403.7z" />
      <path opacity={0.17} d="M135.99 401.93l211.87-51.02V752l-211.87-54.35V401.93z" />
      <path fill="#e0e0e0" d="M346.09 354.44l111.59-92.73 211.86 54.36-111.58 89.39-211.87-51.02z" />
      <path fill="#e0e0e0" d="M29.05 318.94l108.71 86.52 211.86-51.02-107.59-90.96-212.98 55.46z" />
      <path opacity={0.05} d="M27.29 317.18l111.35 88.28 211.87-51.02-110.25-92.73-212.97 55.47z" />
      <path fill="#e0e0e0" d="M135.99 403.7v293.95L347.86 752l2.86-291.73-214.73-56.57z" />
      <path fill="#e0e0e0" d="M559.73 696.54L347.86 752V460.27l211.87-56.57v292.84z" />
      <path opacity={0.07} d="M559.73 696.54L347.86 752V460.27l211.87-56.57v292.84z" />
      <path opacity={0.07} d="M475.42 598.92v96.51l84.31-23.3v-96.5l-84.31 23.29z" />
      <path
        opacity={0.1}
        d="M133.22 556.22l118.69 29.95 95.4-77.65v-47.7l-211.87-53.24-2.22 148.64zM561.39 556.22L442.7 586.17l-95.39-77.65v-47.7l211.86-53.24 2.22 148.64z"
      />
      <path
        d="M259.23 399.1l8.21-1.64s-6.9 7.72-8.21 8.21a33.05 33.05 0 0 0 0 4.93c-15.77 67.69-73.93 37.79-73.93 37.79 21.19.49 23-8.21 23-8.21-12.32-1.81-14.79-9.86-14.79-9.86a5.08 5.08 0 0 0 6.57-1.64c-13.31-3.45-11.5-16.43-11.5-16.43 2.3 2 5.91 2.79 8.05 3.12-1.48-1.81-14-16.76-6.41-24.48 0 0 9.2 16.43 33.35 17.91l1.64-.33a12.89 12.89 0 0 1-.33-3.61 17.25 17.25 0 0 1 17.25-17.25c11.5 0 14 6.57 14 6.57l8.21-4.93c-.18-.01-1 8.21-5.11 9.85z"
        fill="#00aced"
      />
      <path fill="#e0e0e0" d="M135.99 403.7l-108.7 89.85 211.86 53.24 108.71-86.52-211.87-56.57z" />
      <path
        d="M424.82 396.91l4.06-5.65s.18 8.6-.34 9.65a27.47 27.47 0 0 0 2.79 3c28.77 50.08-23.53 64.86-23.53 64.86 13.16-11.71 9.33-18 9.33-18-8.56 5.85-14.56 2.35-14.56 2.35a4.22 4.22 0 0 0 3.06-4.72c-10 5.44-16.3-3.47-16.3-3.47 2.52-.1 5.18-1.65 6.66-2.66-1.92-.26-18-2.27-17.77-11.25 0 0 14.9 4.77 30.42-8l.81-1.13a10.71 10.71 0 0 1-2.25-2 14.33 14.33 0 0 1 .71-20.26c7-6.52 12.21-3.92 12.21-3.92l2.2-7.65c-.09.07 4.06 5.52 2.5 8.85z"
        fill={primaryColor}
      />
      <path fill="#e0e0e0" d="M559.73 403.7l109.81 89.85-210.76 53.24-110.92-86.52 211.87-56.57z" />
      <path opacity={0.07} d="M559.73 403.7l109.81 89.85-210.76 53.24-110.92-86.52 211.87-56.57z" />
      <path
        d="M417.09 122.35l7.51-3.61s-4.74 9.15-5.89 9.95a32.88 32.88 0 0 0 1.22 4.75c1.53 69.12-61.9 54.68-61.9 54.68 20.54-4.76 20.13-13.6 20.13-13.6-12.32 1.3-16.68-5.84-16.68-5.84a5 5 0 0 0 5.93-3.21c-13.68 0-15.14-13-15.14-13 2.7 1.33 6.39 1.23 8.53 1-1.87-1.38-17.6-12.7-12.22-22 0 0 12.93 13.56 36.56 9l1.5-.72a12.82 12.82 0 0 1-1.21-3.4 17.16 17.16 0 0 1 12.36-20.89c11.08-2.84 15.08 2.88 15.08 2.88l6.7-6.78c-.17.07 1.07 8.19-2.48 10.79zM73.57 175l8.17-1.63s-6.86 7.68-8.17 8.17a32.88 32.88 0 0 0 0 4.9C57.88 253.77.03 224.03.03 224.03c21.08.49 22.88-8.17 22.88-8.17-12.26-1.8-14.71-9.81-14.71-9.81a5 5 0 0 0 6.54-1.63C1.47 201 3.27 188.12 3.27 188.12c2.29 2 5.88 2.78 8 3.11-1.47-1.8-13.89-16.67-6.37-24.35 0 0 9.15 16.34 33.18 17.81l1.63-.33a12.82 12.82 0 0 1-.33-3.6 17.16 17.16 0 0 1 17.19-17.15c11.44 0 13.89 6.54 13.89 6.54l8.17-4.9c-.19-.01-1 8.16-5.06 9.75zM799.81 29.71l13.33-2.67s-11.2 12.53-13.33 13.33a53.64 53.64 0 0 0 0 8c-25.6 109.85-120 61.32-120 61.32 34.39.8 37.33-13.33 37.33-13.33-20-2.93-24-16-24-16a8.24 8.24 0 0 0 10.66-2.67c-21.6-5.6-18.66-26.66-18.66-26.66 3.73 3.2 9.6 4.53 13.06 5.07-2.4-2.93-22.66-27.2-10.4-39.73 0 0 14.93 26.66 54.12 29.06l2.67-.53a20.92 20.92 0 0 1-.53-5.87 28 28 0 0 1 28-28c18.66 0 22.66 10.66 22.66 10.66l13.33-8c-.24.02-1.57 13.31-8.24 16.02zM581.95 7.73l5.52-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43A11.59 11.59 0 0 1 570.47 0c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.12-.01-.67 5.52-3.43 6.62z"
        fill="#00aced"
      />
      <path
        d="M331.28 228.58l5.52-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.59-11.59c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.13.02-.66 5.5-3.42 6.6z"
        fill="#535461"
        opacity={0.3}
      />
      <path
        d="M546.57 125.89l5.52-1.1s-4.59 5.21-5.52 5.51a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.59-11.59c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.06-.02-.62 5.5-3.42 6.61z"
        fill="#00aced"
        opacity={0.3}
      />
      <path
        d="M442.37 310.76l11.48-2.3s-9.65 10.8-11.48 11.48a46.21 46.21 0 0 0 0 6.89c-22.05 94.63-103.36 52.83-103.36 52.83 29.63.69 32.16-11.48 32.16-11.48-17.23-2.53-20.67-13.78-20.67-13.78a7.1 7.1 0 0 0 9.19-2.3c-18.6-4.82-16.08-23-16.08-23 3.22 2.76 8.27 3.9 11.25 4.36-2.07-2.53-19.52-23.43-9-34.22 0 0 12.86 23 46.63 25l2.3-.46a18 18 0 0 1-.46-5.05 24.11 24.11 0 0 1 24.12-24.12c16.08 0 19.52 9.19 19.52 9.19l11.52-6.8c-.23 0-1.38 11.47-7.12 13.76zM361.09 26.5l5.48-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.6-11.61c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.07 0-.62 5.52-3.39 6.62zM192.14 149.08l5.52-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.59-11.59c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.11-.03-.66 5.52-3.42 6.6z"
        fill={primaryColor}
      />
      <path
        d="M145.76 69.57l5.52-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.59-11.59c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.11-.03-.61 5.5-3.42 6.6z"
        fill={primaryColor}
        opacity={0.3}
      />
      <path
        d="M340.11 406.37l5.52-1.1s-4.64 5.19-5.52 5.52a22.21 22.21 0 0 0 0 3.31c-10.6 45.5-49.69 25.4-49.69 25.4 14.25.33 15.46-5.52 15.46-5.52-8.28-1.21-9.94-6.63-9.94-6.63a3.41 3.41 0 0 0 4.42-1.1c-8.94-2.32-7.73-11-7.73-11a11.48 11.48 0 0 0 5.41 2.1c-1-1.21-9.39-11.26-4.31-16.45 0 0 6.18 11 22.42 12l1.1-.22a8.66 8.66 0 0 1-.22-2.43 11.59 11.59 0 0 1 11.59-11.59c7.73 0 9.39 4.42 9.39 4.42l5.52-3.31c-.1-.02-.66 5.5-3.42 6.6zM662.34 166.7l11.23-2.25s-9.46 10.59-11.26 11.26a45.32 45.32 0 0 0 0 6.76c-21.63 92.81-101.37 51.81-101.37 51.81 29.09.72 31.57-11.28 31.57-11.28-16.9-2.48-20.27-13.52-20.27-13.52a7 7 0 0 0 9-2.25c-18.25-4.73-15.77-22.53-15.77-22.53 3.15 2.7 8.11 3.83 11 4.28-2-2.48-19.15-23-8.79-33.57 0 0 12.62 22.53 45.73 24.55l2.25-.45a17.67 17.67 0 0 1-.45-5 23.65 23.65 0 0 1 23.65-23.65c15.77 0 19.15 9 19.15 9l11.26-6.76c-.17.08-1.3 11.35-6.93 13.6zM215.11 257.25l11.26-2.25s-9.46 10.59-11.26 11.26a45.32 45.32 0 0 0 0 6.76c-21.63 92.81-101.37 51.81-101.37 51.81 29.06.68 31.54-11.26 31.54-11.26-16.9-2.48-20.27-13.52-20.27-13.52a7 7 0 0 0 9-2.25c-18.25-4.73-15.77-22.53-15.77-22.53 3.15 2.7 8.11 3.83 11 4.28-2-2.48-19.15-23-8.79-33.57 0 0 12.62 22.53 45.73 24.55l2.25-.45a17.67 17.67 0 0 1-.45-5 23.65 23.65 0 0 1 23.65-23.65c15.77 0 19.15 9 19.15 9l11.26-6.76c-.17.06-1.3 11.33-6.93 13.58z"
        fill="#535461"
      />
    </svg>
  );
};

UndrawTweetstorm.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTweetstorm;
