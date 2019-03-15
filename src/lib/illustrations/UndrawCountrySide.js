import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCountrySide = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1127.03 782.52" style={style} {...props}>
			<defs>
				<linearGradient
					id="prefix__a"
					x1={1031.77}
					y1={836.74}
					x2={1031.77}
					y2={85.77}
					gradientTransform="matrix(-1 0 0 1 1614 0)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<path
				d="M934.43 438.39c-31.82 40.46-19.46 99.57.76 146.9 6.77 15.85 14.43 32.62 11.57 49.61-3.49 20.78-22 36-41.52 44-35.5 14.68-78 11.18-110.61-9.11-28.19-17.54-48.38-46.06-77.05-62.8-48-28-109.06-17.43-161.16 1.86-36.86 13.65-77.16 31.41-113.79 17.14-25.77-10-43.59-34.47-53.3-60.37-4.69-12.51-8.09-26-17-36-5.32-5.89-12.26-10.08-19.38-13.6-65-32.21-147-15-210.08-50.68-42.65-24.03-69.97-69.54-81.97-116.99s-10.7-97.24-7.64-146.07c2.18-34.73 6.09-71.8 28.28-98.61 23.47-28.35 63.76-38.9 100.17-33.51s69.42 24.6 98.45 47.22c36.29 28.27 69.94 63.48 114.5 74.94 30.34 7.8 62.26 3.53 93.56 2.06 52.32-2.47 104.65 3 156.68 9 49.81 5.76 100 12.1 147.43 28.3 33.58 11.47 60.5 32.28 92.21 46.82 20.67 9.48 43.21 12.1 62.77 24.17 24.11 14.87 46.2 40.74 40 71-5.84 28.82-35.99 43.25-52.88 64.72z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path d="M.76 537.88s183-48 420 74 496-96 491-129 172 0 172 0v295H.76z" fill={primaryColor} opacity={0.1} />
			<circle cx={128.14} cy={49.74} r={49.74} fill="#ffdf9c" />
			<path
				d="M501.08 293l8.92 25.39-6.86 42.68s-10.37 34-9.33 50.56 0 39.21 0 39.21-24.88 45.4-4.15 64c4.82 4.31 8.85 3.45 12.2-.42a107 107 0 0 0 10.4 5L494.86 587l-16.59 33s-35.27 30-48.72 92.92c0 0-13.45 41.93-22 54.45a17.12 17.12 0 0 1-1.27 1.69 70.64 70.64 0 0 1-3.67-6.61L387 803.72s31.1 17.54 52.87 24.76 46.65-1 53.91-10.32-14.51-19.6-30.07-25.8c-7.54-3-11.66-10.13-13.92-16.68-.2-2-.36-4.29-.43-6.74-.33-11.71 1.47-27.52 11.24-39.52 17.62-21.67 44.58-75.32 44.58-75.32s27-28.89 33.18-40.24l37.33-62.32c20.71 23.47 41.46 78.82 41.46 78.82l8.29 50.56s27 72.23 35.25 79.45c.23.2.46.43.69.67l.21.23q.25.27.5.57l.2.25c.22.27.43.56.65.86l.15.23q.25.36.5.75l.23.37.44.74.2.35q.3.53.59 1.09l.21.4.41.82.23.48.42.9.17.38q.28.62.54 1.26l.2.49.37.91.2.51.46 1.19.11.3.48 1.31.17.49.36 1 .15.44.48 1.45.06.2.41 1.29.13.43.39 1.27.09.3.43 1.45.08.29.33 1.15.12.42.3 1.09.09.31.33 1.24.16.6.15.6.19.74.05.2c.24.95.46 1.85.66 2.67l.25 1 .11.49v.13a38.42 38.42 0 0 1-4.33-3.33 117.93 117.93 0 0 1 0 20.64c-1 10.32 9.33 24.76 9.33 24.76s93.31-22.7 98.49-38.18-16.59-13.41-22.81-11.35-37.32-4.13-41.47-11.35a20 20 0 0 0-2.79-3.69 5.9 5.9 0 0 0-7.2-1.19l-.23-.26-.27-.33-.18-.23-.33-.43c-.23-.31-.46-.64-.69-1l-.25-.38q-.62-1-1.26-2.13l-.08-.15c-6.61-12.07-13.73-36.71-15.37-42.57v-.13l-.13-.48v-.31l-.07-.24v-.12l-23.84-77.39c7.26-27.86 0-41.27 0-41.27l-13.48-62.94-7.61-28.5c.24-.24.35-.39.35-.39-6.2-17.34-11.06-54.12-14.09-82.54q-.29-2.77-.56-5.41l22.95 10.57s31.1 47.46 50.8 24.76-39.4-42.3-39.4-42.3l-37.24-24.71-.08-1.09-4.15-31s-11.4-37.14-6.22-61.91c4.41-21.09-10-28.71-14.34-30.51a13.86 13.86 0 0 0-2.11-.62c-5.69-1.34-12-7.13-17.41-13.33A68.27 68.27 0 0 0 562 240.12a15.89 15.89 0 0 0 6.78-10c.86-4.76-.77-9.49-2.23-14.16a126.45 126.45 0 0 1 7.34-15h.17q.65-1.1 1.26-2.09a45 45 0 0 0 39.79-44.56 44.51 44.51 0 0 0-5.59-21.65c4.65-1.61 9.1-3.65 7.42-8.42-1.14-3.23-4.17-5.33-6.53-7.81-6.25-6.57-8.15-16.43-14.68-22.72a22.33 22.33 0 0 0-6.46-4.28c-6.64-3.76-15.13-4.24-22.8-2.84-9.49 1.74-18.34 5.92-27.61 8.61-8.15 2.36-16.68 3.58-24.49 6.91-13.33 5.67-23.59 17.2-29.74 30.26-5.44 11.54-8 24.33-13.91 35.62s-16.87 21.46-29.67 21c-3.31-.11-6.74-.91-9.84.24a12 12 0 0 0-5.72 5.22c-7 11.45-2.51 26.87-8.1 39.07-4.16 9.08-13.12 14.82-20.46 21.61s-13.65 16.87-10.18 26.24c1.78 4.8 5.86 8.3 10.62 10.41a27 27 0 0 0 7.75 2.85c7 1.41 14.16.56 21.25.06 19.17-1.35 40.14-.63 55.36-12.31 6.27-4.81 11.1-11.45 16.12-17.71a132.45 132.45 0 0 0 3.23 28.33zm27.61 64.89c1.56 2.57 3.14 5.13 4.78 7.65 15.24 23.4-5.43 55.41-5.43 55.41a56 56 0 0 0-12 13.63c.27-9.85 1.42-21.1 4.74-29.11 5.16-12.47 7.22-35.42 7.91-47.61z"
				transform="translate(-36.1 -58.89)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M477 254.11l-8.1 50.41s-10.13 33.26-9.11 49.38 0 38.3 0 38.3-24.3 44.34-4.05 62.48 26.33-57.44 26.33-57.44-3-32.25 4.05-49.38 8.1-54.42 8.1-54.42z"
				fill="#ffcdd3"
			/>
			<path
				d="M477 254.11l-8.1 50.41s-10.13 33.26-9.11 49.38 0 38.3 0 38.3-24.3 44.34-4.05 62.48 26.33-57.44 26.33-57.44-3-32.25 4.05-49.38 8.1-54.42 8.1-54.42z"
				opacity={0.05}
			/>
			<path
				d="M595.64 427.4l14 52.47 13.16 61.47s7.09 13.1 0 40.31l23.29 75.58s13.16 48.37 21.26 49.38-8.1 38.3-8.1 38.3l-22.28-13.1s-6.08-30.23-14.18-37.29-34.43-77.6-34.43-77.6l-8.1-49.38s-25.31-67.52-47.59-83.65-29.37-42.33-29.37-42.33z"
				fill="#ffcdd3"
			/>
			<path
				d="M503.33 441.58s7.09 26.2 29.37 42.33 47.59 83.65 47.59 83.65l8.1 49.38s26.33 70.54 34.43 77.6c5.94 5.18 10.8 22.85 13 31.88.79 3.28 1.22 5.41 1.22 5.41l22.28 13.1s16.2-37.29 8.1-38.3c-1.26-.15-2.63-1.45-4.07-3.53-7.8-11.31-17.19-45.85-17.19-45.85l-23.29-75.58c7.09-27.21 0-40.31 0-40.31l-13.16-61.47-14-52.46z"
				opacity={0.05}
			/>
			<path
				d="M373.72 703.6l8.1 19.15 36.45-4a83.71 83.71 0 0 1-1.86-15.82c-.32-11.44 1.44-26.88 11-38.6 17.19-21.22 43.49-73.6 43.49-73.6s26.33-28.22 32.4-39.3l50.69-84.62-1.58-7.59 13.67-12.6h-85.03l-20.25 78.6-16.2 32.25s-34.43 29.23-47.59 90.7c0 0-13.13 41-21.5 53.18a14.7 14.7 0 0 1-1.79 2.25z"
				fill="#ffcdd3"
			/>
			<path
				d="M635.77 726.4c.79 3.28 1.22 5.41 1.22 5.41l22.28 13.1s16.2-37.29 8.1-38.3c-1.26-.15-2.63-1.45-4.07-3.53a5.67 5.67 0 0 0-2.59 6.28 15.57 15.57 0 0 0 1.6 4.3c3 5-10.13 13.1-10.13 13.1-4.44 5.69-11.64 2.7-16.41-.36z"
				opacity={0.1}
			/>
			<path
				d="M661.72 711.39c-1.39-5.81 5.91-9.71 10-5.35a19.49 19.49 0 0 1 2.72 3.6c4.05 7.05 34.43 13.1 40.5 11.09s27.34-4 22.28 11.09-96.18 37.29-96.18 37.29-10.14-14.12-9.14-24.19a115.18 115.18 0 0 0 0-20.16s14.18 13.1 21.26 4c0 0 13.16-8.06 10.13-13.1a15.57 15.57 0 0 1-1.57-4.27z"
				fill="#dce6f2"
			/>
			<path
				d="M373.72 703.6l8.1 19.15 36.45-4a83.71 83.71 0 0 1-1.86-15.82 5 5 0 0 0-8.13-1.16c-1.88 2-3.79 4.14-5.19 5.9-4.05 5-17.21 2-17.21 2-3.41 1.13-7.46-3.77-10.36-8.29a14.7 14.7 0 0 1-1.8 2.22z"
				opacity={0.1}
			/>
			<path
				d="M407.26 703.75a5 5 0 0 1 8.48 2.09c1.84 7.17 5.88 16.42 14.69 19.93 15.19 6 36.45 16.12 29.37 25.19s-31.4 17.15-52.67 10.08-51.64-24.19-51.64-24.19l15.19-40.31s8.1 17.13 14.18 15.12c0 0 13.16 3 17.21-2 1.41-1.77 3.31-3.89 5.19-5.91z"
				fill="#dce6f2"
			/>
			<path d="M544.84 137.23s-24.3 33.26-18.23 56.44-48.6-15.12-48.6-15.12 28.35-25.19 23.29-66.51z" fill="#ffcdd3" />
			<path
				d="M464.85 452.66c40.5 24.19 89.11 14.11 89.11 14.11l-1-7.05 2.11.2c38.71 3.41 47.51-8.26 47.51-8.26-6.06-16.94-10.8-52.86-13.76-80.62-.43-4-.81-7.81-1.16-11.39-.8-8.09-1.4-14.91-1.78-19.51-.33-4.05-.51-6.39-.51-6.39l-4.07-30.24s-11.14-36.28-6.08-60.47c4.31-20.6-9.74-28-14-29.79a13.53 13.53 0 0 0-2.06-.61c-5.55-1.31-11.74-7-17-13a68.28 68.28 0 0 0-28.4-19.29c-5.09-1.84-9.42-3.8-9.42-3.8-7.09-8.06-26.33-3-26.33-3-23.29 15.12-11.14 64.5-11.14 64.5l9.68 27.53c5.4 15.33 13.08 29.68 22 43.31 14.89 22.86-5.31 54.12-5.31 54.12-31.43 25.15-28.39 89.65-28.39 89.65z"
				fill="#ff8aa1"
			/>
			<path
				d="M551.42 405.8l3.63 54.12c38.71 3.41 47.51-8.26 47.51-8.26-6.06-16.94-10.8-52.86-13.76-80.62-.43-4-.81-7.81-1.16-11.39z"
				opacity={0.05}
			/>
			<path
				d="M487.13 264.21s18.23 34.26 24.3 49.38 6.08 10.08 9.11 15.12 35.44 27.21 35.44 27.21l32.82 15.12c-1.39-13-2.39-24.26-2.95-30.9l-30.88-20.5s-21.26-13.1-22.28-30.23-14.18-48.37-14.18-48.37-26.33-28.22-37.47-15.12 6.09 38.29 6.09 38.29z"
				opacity={0.1}
			/>
			<path
				d="M518.52 235.99s13.16 31.24 14.18 48.37 22.28 30.23 22.28 30.23l66.83 44.34s57.72 19.15 38.48 41.32-49.63-24.14-49.63-24.14l-54.68-25.19s-32.4-22.17-35.44-27.21-3 0-9.11-15.12-24.3-49.38-24.3-49.38-17.21-25.19-6.08-38.3 37.47 15.08 37.47 15.08z"
				fill="#ffcdd3"
			/>
			<path
				d="M526.62 249.11s-20.25-15.12-24.3-20.16c-1.79-2.22-4.56-1.9-7.1-.83a32 32 0 0 1-15 2.47c-4.43-.38-8.73-.13-8.23 2.39 1 5-3-26.2-3-26.2l17.21-6 22.28 12.09z"
				opacity={0.1}
			/>
			<path
				d="M526.62 247.11s-20.25-15.12-24.3-20.16c-1.79-2.22-4.56-1.9-7.1-.83a32 32 0 0 1-15 2.47c-4.43-.38-8.73-.13-8.23 2.39 1 5-3-26.2-3-26.2l17.21-6 22.28 12.09z"
				fill="#ff8aa1"
			/>
			<path
				d="M574.3 249.11a25 25 0 0 1-22.88-1.51M507.9 114.55c.76-6-6.74 6.49-7.59-.5l43.54 25.19s-2.49 3.41-5.66 8.78a44.67 44.67 0 0 1-5 .29c-13.09 0-17.24-24.72-25.29-33.76z"
				opacity={0.1}
			/>
			<ellipse cx={534.21} cy={102.46} rx={44.05} ry={43.84} fill="#ffcdd3" />
			<path
				d="M553.97 103.22c-.33 2.75-.27 5.66-1.58 8.1-1.84 3.42-5.81 5-9.13 7-13.46 8.25-17.45 26.81-13.16 41.95 1.52 5.36 3.91 10.79 2.92 16.27-1.71 9.41-12.48 14.29-22.05 15.13s-19.6-.71-28.55 2.77c-15 5.84-21.66 23.39-34.44 33.2-14.87 11.41-35.35 10.7-54.07 12-6.92.49-14 1.32-20.75-.06s-13.51-5.46-15.92-11.94c-3.39-9.14 2.78-19.06 10-25.7s15.92-12.24 20-21.11c5.46-11.92 1-27 7.91-38.16a11.73 11.73 0 0 1 5.58-5.1c3-1.13 6.38-.35 9.61-.24 12.51.43 23.17-9.5 29-20.53s8.28-23.51 13.59-34.79c6-12.76 16-24 29-29.56 7.63-3.24 16-4.44 23.92-6.75 9.05-2.62 17.7-6.71 27-8.41s19.78-.58 26.56 5.94c6.38 6.14 8.24 15.77 14.34 22.19 2.31 2.43 5.27 4.48 6.38 7.63 2.63 7.46-10.13 8.09-14.38 11.08a27.83 27.83 0 0 0-11.78 19.09z"
				opacity={0.1}
			/>
			<path
				d="M551.9 102.22c-.33 2.75-.27 5.66-1.58 8.1-1.84 3.42-5.81 5-9.13 7-13.46 8.25-17.45 26.81-13.16 41.95 1.52 5.36 3.91 10.79 2.92 16.27-1.71 9.41-12.48 14.29-22.05 15.13s-19.6-.71-28.55 2.77c-15 5.84-21.66 23.39-34.44 33.2-14.87 11.41-35.35 10.7-54.07 12-6.92.49-14 1.32-20.75-.06s-13.49-5.47-15.89-11.91c-3.39-9.14 2.78-19.06 10-25.7s15.92-12.24 20-21.11c5.46-11.92 1-27 7.91-38.16a11.73 11.73 0 0 1 5.58-5.1c3-1.13 6.38-.35 9.61-.24 12.51.43 23.17-9.5 29-20.53s8.28-23.51 13.59-34.79c6-12.76 16-24 29-29.56 7.63-3.24 16-4.44 23.92-6.75 9.05-2.62 17.7-6.71 27-8.41s19.78-.58 26.56 5.94c6.38 6.14 8.24 15.77 14.34 22.19 2.31 2.43 5.27 4.48 6.38 7.63 2.63 7.46-10.13 8.09-14.38 11.08a27.83 27.83 0 0 0-11.81 19.06zM37.26 778.38s-33-59 8-106 89-21 89-21 60 28 46 95c0 0-8 34-32 32z"
				fill={primaryColor}
			/>
			<path d="M37.26 778.38s-33-59 8-106 89-21 89-21 60 28 46 95c0 0-8 34-32 32z" fill="#fff" opacity={0.2} />
			<path
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				d="M89.09 778.46l36.17-110.08M158.26 685.38s-18.62-8.76-37.31-3.88c0 0-9.69-24.12-31.69-28.12M167.26 723.38s-31.66-22.88-54.83-15.94c0 0-26.17-31.06-44.17-29.06M160.26 764.38s-27.06-19.58-60.53-18.27c0 0-25.47-30.71-49.47-32.71M103.54 778.46a71 71 0 0 0-12.93-4.63S69.75 746.71 28 755.54"
			/>
			<path
				d="M353.48 777.6s-55-89.68-40.32-170.59c6.17-34 1.79-69-13.64-99.91a268.09 268.09 0 0 0-25.91-41.62"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M282.57 414.44c3.23 11.94-9 52.41-9 52.41s-31-28.78-34.2-40.72a22.4 22.4 0 1 1 43.24-11.68zM336.18 470.92C332.4 482.7 300.11 510 300.11 510s-10.36-41-6.58-52.77a22.4 22.4 0 0 1 42.65 13.69zM365.16 584.37c-9.21 8.26-50.86 15.53-50.86 15.53s11.75-40.62 21-48.88a22.4 22.4 0 1 1 29.9 33.35zM367.75 675.11c-7.68 9.69-47.51 23.9-47.51 23.9s4.72-42 12.4-51.72a22.4 22.4 0 0 1 35.11 27.82zM255.34 524.58c10.81 6 53 3.84 53 3.84s-20.48-37-31.29-43a22.4 22.4 0 1 0-21.75 39.16zM259.72 630.7c12.11 2.5 51.76-12.2 51.76-12.2s-30.58-29.17-42.72-31.67a22.4 22.4 0 0 0-9 43.87zM278.13 733.26c11.52 4.51 53.08-3.28 53.08-3.28s-25.24-33.92-36.76-38.43a22.4 22.4 0 0 0-16.32 41.71z"
				fill={primaryColor}
			/>
			<path
				d="M282.57 414.44c3.23 11.94-9 52.41-9 52.41s-31-28.78-34.2-40.72a22.4 22.4 0 1 1 43.24-11.68zM336.18 470.92C332.4 482.7 300.11 510 300.11 510s-10.36-41-6.58-52.77a22.4 22.4 0 0 1 42.65 13.69zM365.16 584.37c-9.21 8.26-50.86 15.53-50.86 15.53s11.75-40.62 21-48.88a22.4 22.4 0 1 1 29.9 33.35zM367.75 675.11c-7.68 9.69-47.51 23.9-47.51 23.9s4.72-42 12.4-51.72a22.4 22.4 0 0 1 35.11 27.82zM255.34 524.58c10.81 6 53 3.84 53 3.84s-20.48-37-31.29-43a22.4 22.4 0 1 0-21.75 39.16zM259.72 630.7c12.11 2.5 51.76-12.2 51.76-12.2s-30.58-29.17-42.72-31.67a22.4 22.4 0 0 0-9 43.87zM278.13 733.26c11.52 4.51 53.08-3.28 53.08-3.28s-25.24-33.92-36.76-38.43a22.4 22.4 0 0 0-16.32 41.71z"
				fill="#fc6681"
			/>
			<path
				d="M65.78 778.46s74.48-117.08 83.48-167.08 26-96 26-96"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path d="M192.26 615.38l-47 4s25 43 47-4z" fill={primaryColor} />
			<path
				d="M110.26 589.38l37.22 29.81s-48.22 19.19-37.22-29.81zM198.26 574.38l-42.36 5.66s37.36 30.34 42.36-5.66zM128.26 559.38l27.94 19.61s-33.94 14.39-27.94-19.61zM166.57 541.57s34.69-9.19 39.69-7.19 2 24-12 25-27.69-17.81-27.69-17.81zM143.26 515.38s22 21 23 26-18 17-28 0 5-26 5-26z"
				fill={primaryColor}
			/>
			<circle cx={184.26} cy={517.38} r={10} fill="#ffd037" />
			<circle cx={166.26} cy={512.38} r={10} fill="#ffd037" />
			<path d="M.76 737.88v-185s90-23 107 88-107 97-107 97z" fill={primaryColor} />
			<path
				d="M88.26 611.38s-18.93-17-38-13c0 0-12-27-22-30M81.26 644.38s-13-19.34-47-20.17c0 0-20-36.83-33.51-39.33M81.26 689.38S53.14 651.22 18.7 649.3c0 0-10.44-14.09-17.94-15"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
			/>
			<path d="M51.82 733.74S39.27 691.04.77 678.21l54.5-87.83" fill="none" stroke="#535461" strokeMiterlimit={10} />
			<path d="M394.26 778.38s33-54-49-134-77-95-70-107c0 0-66 8-52 107s74 134 74 134z" fill={primaryColor} />
			<path
				d="M347.76 778.38s-24.5-71-61.5-114-30-114-11-127"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M722.35 391.8s55.48 108.91 10.27 168.5 4.11 221.93 4.11 221.93"
				fill="none"
				stroke="#fc6681"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M738.79 357.89c0 21-15.41 38-15.41 38s-15.41-17-15.41-38 15.41-38 15.41-38 15.41 17.01 15.41 38z"
				fill="#fc6681"
			/>
			<path
				d="M751.12 391.8s-55.48 108.91-10.27 168.5-4.11 221.93-4.11 221.93"
				fill="none"
				stroke="#ffd037"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M734.68 357.89c0 21 15.41 38 15.41 38s15.41-17 15.41-38-15.41-38-15.41-38-15.41 17.01-15.41 38z"
				fill="#ffd037"
			/>
			<path
				d="M773.72 391.8S829.2 500.71 784 560.3s4.11 221.93 4.11 221.93"
				fill="none"
				stroke="#fc6681"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M790.16 357.89c0 21-15.41 38-15.41 38s-15.41-17-15.41-38 15.41-38 15.41-38 15.41 17.01 15.41 38zM781.52 445.11c-14.56 15.13-37.46 16.71-37.46 16.71s.69-23 15.25-38.08 37.46-16.63 37.46-16.63-.69 22.91-15.25 38zM782.97 520.28c-14.56 15.13-37.46 16.71-37.46 16.71s.69-23 15.25-38.08 37.46-16.71 37.46-16.71-.7 22.91-15.25 38.08zM704.03 561.62c13.76 15.85 13.28 38.81 13.28 38.81s-22.8-2.75-36.56-18.6-13.28-38.81-13.28-38.81 22.8 2.75 36.56 18.6zM716.8 401.39c17.5 11.6 23.17 33.85 23.17 33.85s-22.7 3.44-40.2-8.15-23.17-33.85-23.17-33.85 22.7-3.44 40.2 8.15z"
				fill="#fc6681"
			/>
			<path
				d="M802.49 391.8s-55.48 108.91-10.27 168.5-4.11 221.93-4.11 221.93"
				fill="none"
				stroke="#ffd037"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M786.05 357.89c0 21 15.41 38 15.41 38s15.41-17 15.41-38-15.41-38-15.41-38-15.41 17.01-15.41 38zM790.48 446.77c-14.74 15-15.71 37.89-15.71 37.89s22.92-1.31 37.66-16.26 15.71-37.89 15.71-37.89-22.92 1.3-37.66 16.26z"
				fill="#ffd037"
			/>
			<path
				d="M934.48 138.77c-14.74 15-15.71 37.89-15.71 37.89s22.92-1.31 37.66-16.26 15.71-37.89 15.71-37.89-22.92 1.3-37.66 16.26z"
				fill={primaryColor}
			/>
			<path
				d="M57.48 366.77c-14.74 15-15.71 37.89-15.71 37.89s22.92-1.31 37.66-16.26 15.71-37.89 15.71-37.89-22.92 1.3-37.66 16.26z"
				fill="#fc6681"
			/>
			<path
				d="M878.48 415.77c-14.74 15-15.71 37.89-15.71 37.89s22.92-1.31 37.66-16.26 15.71-37.89 15.71-37.89-22.92 1.3-37.66 16.26zM156.32 399.33c-19.42-8-41-.2-41-.2s9.88 20.73 29.3 28.71 41 .2 41 .2-9.88-20.73-29.3-28.71z"
				fill={primaryColor}
			/>
			<path
				d="M400.49 369.35c-11.22-17.74-33.35-23.89-33.35-23.89s-3.93 22.62 7.3 40.37 33.35 23.89 33.35 23.89 3.92-22.61-7.3-40.37zM819.38 550.8c-14.74 15-15.71 37.89-15.71 37.89s22.92-1.31 37.66-16.26 15.71-37.89 15.71-37.89-22.92 1.3-37.66 16.26z"
				fill="#ffd037"
			/>
			<path
				d="M776.9 527.93s33.4-52.64 80.27-53.77"
				fill="none"
				stroke="#ffd037"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M750.9 496.11s-33.4-52.64-80.27-53.77"
				fill="none"
				stroke="#fc6681"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M746.53 571.28s33.4-52.64 80.27-53.77"
				fill="none"
				stroke="#ffd037"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<circle cx={855.61} cy={473.75} r={8.67} fill="#ffd037" />
			<circle cx={671.39} cy={442.69} r={8.67} fill="#fc6681" />
			<path
				d="M771.09 588.62s-33.4-52.64-80.27-53.77"
				fill="none"
				stroke="#fc6681"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<circle cx={691.62} cy={535.16} r={8.67} fill="#fc6681" />
			<circle cx={827.43} cy={517.82} r={8.67} fill="#ffd037" />
			<path
				d="M508.76 563.38s-33-37-45 9-19 52-43 40-49 45 10 86 26 81.5 26 81.5h211s28-81.5-33-109.5-59-49-57-77-69-30-69-30z"
				fill={primaryColor}
			/>
			<path
				d="M480.76 549.31s137 180.57 90 230.57M445.34 615.28s32.42 27.59 85.42 13.59 39.93-49.92 39.93-49.92"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M667.21 702.57s-70.53-34.21-106-21.45c-92.32 33.22-161-56.24-161-56.24"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path d="M462.26 778.38s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z" fill={primaryColor} />
			<path
				d="M422.1 778.38s-10.83-77-39.83-124a100.81 100.81 0 0 1-12.18-30.71c-9.69-42.63 4.13-87.21 35.44-117.72l45.75-44.57"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path d="M462.26 778.38s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z" opacity={0.1} />
			<path d="M992.76 311.88s-23 187 0 302-116.24 164.5-116.24 164.5h204.24s28-372.5-88-466.5z" fill={primaryColor} />
			<path
				d="M992.76 311.88s58.15 161.07 49.57 243-20.57 225-20.57 225"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M847.7 777.5s-147.14-32.9 40.08-225.39c0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z"
				fill={primaryColor}
			/>
			<path
				d="M847.7 777.5c-3.23-.72-144-36.15 40.08-225.39 0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z"
				fill="#fff"
				opacity={0.4}
			/>
			<path d="M849.63 778.59s77.72-117.09 38.15-226.48" fill="none" stroke="#535461" strokeMiterlimit={10} />
			<path
				d="M238.7 777.5s-147.14-32.9 40.08-225.39c0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z"
				fill={primaryColor}
			/>
			<path
				d="M238.7 777.5c-3.23-.72-144-36.15 40.08-225.39 0 0 80.7 76.49 51.1 171.57-11.9 38.23-50.2 61.83-89 54.27z"
				fill="#fff"
				opacity={0.4}
			/>
			<path d="M240.63 778.59s77.72-117.09 38.15-226.48" fill="none" stroke="#535461" strokeMiterlimit={10} />
			<path
				d="M963.35 274.88s-75.11 75.11-32.71 186.56-72.69 296.81-72.69 296.81 1.23-.18 3.52-.58c154.26-27.23 230.92-203.67 145.13-334.74-31.88-48.73-58.06-105.9-43.25-148.05z"
				fill={primaryColor}
			/>
			<path
				d="M963.35 274.88s-75.11 75.11-32.71 186.56-72.69 296.81-72.69 296.81 1.23-.18 3.52-.58c154.26-27.23 230.92-203.67 145.13-334.74-31.88-48.73-58.06-105.9-43.25-148.05z"
				opacity={0.1}
			/>
			<path
				d="M963.35 274.88s-42.4 92.07 0 167.18 7.27 285.9-105.4 316.19"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
			/>
			<path
				d="M1097.13 578.67s-85.71-13.65-93.52 63.16-164.81 87.46-164.81 87.46 1 .7 2.94 2c129.63 85.1 253.55 54.21 234.87-58.79-6.94-42.05-6.37-84.24 20.52-93.83z"
				fill={primaryColor}
			/>
			<path
				d="M1097.13 578.67s-85.71-13.65-93.52 63.16-164.81 87.46-164.81 87.46 1 .7 2.94 2c129.63 85.1 253.55 54.21 234.87-58.79-6.94-42.05-6.37-84.24 20.52-93.83z"
				fill="#f5f5f5"
				opacity={0.2}
			/>
			<path
				d="M1097.13 578.67s-66.53 14.6-61.07 75.09-98.79 133-197.27 75.53"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
			/>
			<path
				d="M1036.25 780.23s-36.47-123.83 6.84-215c18.18-38.25 24.22-81.19 15.82-122.7a329 329 0 0 0-17.37-57.59"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M1068.49 327.36c0 15.18-27.48 59.19-27.48 59.19s-27.48-44-27.48-59.19a27.5 27.5 0 0 1 55 0zM1113.9 411.42c-8.25 12.74-55.23 34.75-55.23 34.75s.85-51.88 9.1-64.62a27.48 27.48 0 1 1 46.13 29.87zM1111.9 555.11c-13.55 6.83-65.22 2.11-65.22 2.11s26.92-44.35 40.47-51.18a27.48 27.48 0 0 1 24.75 49.07zM1085.9 663.43c-12.2 9-63.92 13.1-63.92 13.1s19-48.26 31.24-57.29a27.48 27.48 0 0 1 32.68 44.19zM1000.98 449.11c10.89 10.57 61.6 21.53 61.6 21.53s-12.42-50.38-23.31-60.95a27.48 27.48 0 0 0-38.29 39.42zM972.2 576.21c13.55 6.83 65.22 2.11 65.22 2.11s-26.92-44.35-40.52-51.21a27.48 27.48 0 0 0-24.74 49.07zM961.19 703.59c12.2 9 63.92 13.1 63.92 13.1s-19-48.26-31.24-57.29a27.48 27.48 0 1 0-32.68 44.18z"
				fill={primaryColor}
			/>
			<path
				d="M1068.49 327.36c0 15.18-27.48 59.19-27.48 59.19s-27.48-44-27.48-59.19a27.5 27.5 0 0 1 55 0zM1113.9 411.42c-8.25 12.74-55.23 34.75-55.23 34.75s.85-51.88 9.1-64.62a27.48 27.48 0 1 1 46.13 29.87zM1111.9 555.11c-13.55 6.83-65.22 2.11-65.22 2.11s26.92-44.35 40.47-51.18a27.48 27.48 0 0 1 24.75 49.07zM1085.9 663.43c-12.2 9-63.92 13.1-63.92 13.1s19-48.26 31.24-57.29a27.48 27.48 0 0 1 32.68 44.19zM1000.98 449.11c10.89 10.57 61.6 21.53 61.6 21.53s-12.42-50.38-23.31-60.95a27.48 27.48 0 0 0-38.29 39.42zM972.2 576.21c13.55 6.83 65.22 2.11 65.22 2.11s-26.92-44.35-40.52-51.21a27.48 27.48 0 0 0-24.74 49.07zM961.19 703.59c12.2 9 63.92 13.1 63.92 13.1s-19-48.26-31.24-57.29a27.48 27.48 0 1 0-32.68 44.18z"
				fill="#fc6681"
			/>
			<path
				d="M1035.6 759.11c5.72-5.32 11.09-11.59 12.74-19.23s-1.61-16.8-8.9-19.59c-8.18-3.13-16.92 2.54-23.54 8.26s-14.22 12.26-22.89 11a34.85 34.85 0 0 0 10.78-32.61 13.62 13.62 0 0 0-3-6.62c-4.54-4.85-12.77-2.77-18.2 1.05-17.29 12.16-22.11 35.64-22.2 56.77-1.74-7.62-.27-15.57-.32-23.39s-2.17-16.47-8.79-20.64c-3.92-2.49-8.75-3-13.39-3.15-7.77-.29-16.42.49-21.73 6.18-6.59 7.06-4.88 18.91.85 26.68s14.46 12.64 22.49 18c6.12 4.09 12.31 8.87 16.07 15.33a15.18 15.18 0 0 1 1.19 2.74h48.71a135.74 135.74 0 0 0 30.13-20.78zM233.78 766c4.34-3.29 8.42-7.18 9.67-11.91a10.07 10.07 0 0 0-6.76-12.13c-6.21-1.94-12.84 1.57-17.86 5.12s-10.79 7.59-17.37 6.84c6.82-4.92 10.06-12.92 8.18-20.19a7.82 7.82 0 0 0-2.27-4.1c-3.44-3-9.69-1.71-13.81.65-13.12 7.53-16.78 22.06-16.85 35.15-1.32-4.72-.21-9.64-.24-14.48s-1.66-10.21-6.66-12.81c-3-1.54-6.64-1.84-10.16-1.95-5.9-.18-12.46.31-16.49 3.82-5 4.37-3.71 11.71.65 16.52s11 7.83 17.07 11.15c4.64 2.53 9.34 5.49 12.2 9.49a8.61 8.61 0 0 1 .9 1.7h37a106.27 106.27 0 0 0 22.8-12.87zM852.78 766c4.34-3.29 8.42-7.18 9.67-11.91a10.07 10.07 0 0 0-6.76-12.13c-6.21-1.94-12.84 1.57-17.86 5.12s-10.79 7.59-17.37 6.84c6.82-4.92 10.06-12.92 8.18-20.19a7.82 7.82 0 0 0-2.27-4.1c-3.44-3-9.69-1.71-13.81.65-13.12 7.53-16.78 22.06-16.85 35.15-1.32-4.72-.21-9.64-.24-14.48s-1.66-10.21-6.66-12.81c-3-1.54-6.64-1.84-10.16-1.95-5.9-.18-12.46.31-16.49 3.82-5 4.37-3.71 11.71.65 16.52s11 7.83 17.07 11.15c4.64 2.53 9.34 5.49 12.2 9.49a8.61 8.61 0 0 1 .9 1.7h37a106.27 106.27 0 0 0 22.8-12.87z"
				fill={primaryColor}
			/>
			<path
				d="M470.65 444.47c-7.75 6.89-15.49 17.64-11.75 32.64 7.39 29.52 44.63 31.2 55.23 60.18 3.17 8.68 2.86 17.62 1.23 25.07-3.19 14.57-10.84 25-16.59 37.23s-9.65 28.09-4.81 45.36c4.66 16.62 16.49 30.62 28.43 39.05s24.31 12.46 36.53 17.83a236.44 236.44 0 0 1 42.44 24.49c5.87 4.21 11.77 8.83 16.87 15.13 5.81 7.18 10.22 16.11 14.52 24.86 2.13 4.34 1.56 13 6.4 13 123.61-.42 37-.48 97.68-.19 10.79.05 26.23.12 48.34.19 23.53.08 19.29-42.38 16.19-70-4.4-39.12-37.28-71.36-53.66-109.46-11.74-27.3-14.5-56.76-24.32-84.75-14.15-40.33-42.26-74.47-71.66-94.82s-60-28.33-89.12-31c-12.32-1.14-24.73-1.34-35.07 3.88-11 5.55-13.54 19.52-22 28.13-9.76 10.05-24.35 13.82-34.88 23.18z"
				fill={primaryColor}
			/>
			<path
				d="M470.65 444.47c-7.75 6.89-15.49 17.64-11.75 32.64 7.39 29.52 44.63 31.2 55.23 60.18 3.17 8.68 2.86 17.62 1.23 25.07-3.19 14.57-10.84 25-16.59 37.23s-9.65 28.09-4.81 45.36c4.66 16.62 16.49 30.62 28.43 39.05s24.31 12.46 36.53 17.83a236.44 236.44 0 0 1 42.44 24.49c5.87 4.21 11.77 8.83 16.87 15.13 5.81 7.18 10.22 16.11 14.52 24.86 2.13 4.34 1.56 13 6.4 13 123.61-.42 37-.48 97.68-.19 10.79.05 26.23.12 48.34.19 23.53.08 19.29-42.38 16.19-70-4.4-39.12-37.28-71.36-53.66-109.46-11.74-27.3-14.5-56.76-24.32-84.75-14.15-40.33-42.26-74.47-71.66-94.82s-60-28.33-89.12-31c-12.32-1.14-24.73-1.34-35.07 3.88-11 5.55-13.54 19.52-22 28.13-9.76 10.05-24.35 13.82-34.88 23.18z"
				fill="#fff"
				opacity={0.2}
			/>
			<path
				d="M519.34 400.39S651 591.11 736.78 779.22M459.58 478.86s117.51 1.41 172.55 101M496.98 653.35s145.7-58.68 175.69-1.62M651.44 419.59s-30 61.21-10.88 174.84M800.9 710.35s-22 39.66-101.82-8.7"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M927.12 598.19s22.11 28.92-10.22 72.57-59 80.51-48.19 107.72c0 0 48.76-81.08 88.45-82.21s13.61-49.32-30.04-98.08z"
				fill={primaryColor}
			/>
			<path
				d="M927.12 598.19a35.81 35.81 0 0 1 4.52 9.07c38.72 45.5 59.35 88 22.13 89-34.67 1-76.26 63-86.22 78.65a33.6 33.6 0 0 0 1.18 3.56s48.76-81.08 88.45-82.21 13.59-49.31-30.06-98.07z"
				opacity={0.1}
			/>
			<path
				d="M968.22 635.04c0 10.18-1.14 18.43-2.55 18.43s-2.55-8.25-2.55-18.43 1.43-5.39 2.83-5.39 2.27-4.79 2.27 5.39z"
				fill="#ffd037"
			/>
			<path
				d="M982.33 647.19c-8.94 4.87-16.73 7.82-17.4 6.58s6-6.19 15-11.06 5.41-1.33 6.09-.09 5.24-.3-3.69 4.57z"
				fill="#ffd037"
			/>
			<path
				d="M810.32 598.19s-22.11 28.92 10.21 72.57 59 80.51 48.19 107.72c0 0-48.76-81.08-88.45-82.21s-13.6-49.32 30.05-98.08z"
				fill={primaryColor}
			/>
			<path
				d="M810.32 598.19a35.81 35.81 0 0 0-4.52 9.07c-38.72 45.5-59.35 88-22.13 89 34.67 1 76.26 63 86.22 78.65a33.6 33.6 0 0 1-1.18 3.56s-48.76-81.08-88.45-82.21-13.59-49.31 30.06-98.07z"
				opacity={0.1}
			/>
			<path
				d="M769.22 635.04c0 10.18 1.14 18.43 2.55 18.43s2.55-8.25 2.55-18.43-1.43-5.39-2.83-5.39-2.27-4.79-2.27 5.39z"
				fill="#ffd037"
			/>
			<path
				d="M755.11 647.19c8.94 4.87 16.73 7.82 17.4 6.58s-6-6.19-15-11.06-5.41-1.33-6.09-.09-5.24-.3 3.69 4.57z"
				fill="#ffd037"
			/>
			<path
				d="M204.15 671.11s13.35 17.45-6.16 43.81-35.59 48.6-29.09 65c0 0 29.43-48.94 53.39-49.62s8.21-29.73-18.14-59.19z"
				fill="#fc6681"
			/>
			<path
				d="M204.15 671.11a21.62 21.62 0 0 1 2.75 5.5c23.37 27.46 35.83 53.09 13.36 53.73-20.93.6-46 38-52 47.47a20.28 20.28 0 0 0 .71 2.15s29.43-48.94 53.39-49.62 8.14-29.77-18.21-59.23z"
				opacity={0.1}
			/>
			<path
				d="M228.96 693.38c0 6.14-.69 11.12-1.54 11.12s-1.54-5-1.54-11.12.86-3.25 1.71-3.25 1.37-2.89 1.37 3.25z"
				fill="#ffd037"
			/>
			<path
				d="M237.47 700.71c-5.39 2.94-10.1 4.72-10.5 4s3.64-3.74 9-6.68 3.27-.8 3.67-.05 3.26-.21-2.17 2.73z"
				fill="#ffd037"
			/>
			<path
				d="M133.65 671.11s-13.35 17.45 6.16 43.81 35.59 48.6 29.09 65c0 0-29.43-48.94-53.39-49.62s-8.21-29.73 18.14-59.19z"
				fill="#fc6681"
			/>
			<path
				d="M133.65 671.11a21.62 21.62 0 0 0-2.75 5.5c-23.37 27.46-35.83 53.09-13.36 53.73 20.93.6 46 38 52 47.47a20.28 20.28 0 0 1-.71 2.15s-29.43-48.94-53.39-49.62-8.14-29.77 18.21-59.23z"
				opacity={0.1}
			/>
			<path
				d="M108.84 693.38c0 6.14.69 11.12 1.54 11.12s1.54-5 1.54-11.12-.86-3.25-1.71-3.25-1.37-2.89-1.37 3.25z"
				fill="#ffd037"
			/>
			<path
				d="M100.32 700.71c5.39 2.94 10.1 4.72 10.5 4s-3.64-3.74-9-6.68-3.27-.8-3.67-.05-3.25-.21 2.17 2.73z"
				fill="#ffd037"
			/>
		</svg>
	);
};

UndrawCountrySide.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawCountrySide;
