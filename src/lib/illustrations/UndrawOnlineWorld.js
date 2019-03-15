import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawOnlineWorld = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1040.97 817.84" style={style} {...props}>
			<defs>
				<linearGradient
					id="prefix__a"
					x1={519.52}
					y1={832.49}
					x2={519.52}
					y2={85.35}
					gradientTransform="matrix(-1 0 0 1 1096.85 0)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
				<linearGradient id="prefix__b" x1={572.55} y1={577.92} x2={572.55} y2={263.34} xlinkHref="#prefix__a" />
			</defs>
			<path
				d="M508.29 71.73c-37.27-4.47-72.13-18.2-107.31-29.81a959 959 0 0 0-119.5-30.88c-43.1-8.24-87.53-13.61-130.74-9.77S65.37 18.92 37.81 44.17C-8.88 87-4.94 151.92 10.48 209.14c18.3 67.89 49.94 135 101.73 192.82 36.81 41.1 83 76.68 128.78 112 25.88 19.93 52 40 82.23 55.67 28.12 14.56 59.17 25 90 35.29 32.92 11 65.92 22.06 99.91 30.47 108.49 26.84 222.7 26 334.37 23.61 39.3-.83 80.38-2.2 113.35-17.55 25.69-12 44-31.44 57.87-52.17 18.15-27.16 29.61-59.57 16.72-89.86-19-44.68-84.12-71-105.8-115-27.78-56.46 26.18-116.14 10.91-174.91-6.35-24.45-24.26-46.55-43.24-67.16C852.04 93.21 791.87 48.45 711 54.99c-68.47 5.52-130.92 25.36-202.71 16.74z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				d="M420.84 85.35h313a31 31 0 0 1 31 30.9v685.34a31 31 0 0 1-31 30.9h-313a31 31 0 0 1-31-30.9V116.24a31 31 0 0 1 31-30.89z"
				transform="translate(-79.52 -41.08)"
				fill="url(#prefix__a)"
			/>
			<rect
				x={392.68}
				y={91.07}
				width={369.28}
				height={738.56}
				rx={26.87}
				ry={26.87}
				transform="rotate(-180 537.565 439.81)"
				fill="#4e5a86"
			/>
			<path fill="#fff" d="M655.25 719.85H340.36V118.7h314.89z" />
			<circle cx={535.02} cy={84.34} r={2.86} fill="#fff" />
			<rect
				x={537.25}
				y={122.56}
				width={62.98}
				height={5.73}
				rx={1}
				ry={1}
				transform="rotate(180 528.975 104.88)"
				fill="#fff"
			/>
			<circle cx={499.24} cy={748.47} r={20.04} fill="#fff" />
			<ellipse cx={482.81} cy={768.84} rx={254} ry={49} fill={primaryColor} opacity={0.1} />
			<path fill={primaryColor} opacity={0.1} d="M376.31 211.84h243v325h-243z" />
			<path
				d="M663.9 410.47c-.6-.68-1.21-1.34-1.84-2 4.83-5.48 9.84-11.11 9.79-18.15-.05-8.57-7.65-15.14-10.49-23.24-3.86-11 1.5-22.82 3.7-34.27a64.28 64.28 0 0 0-13.94-52.94c-2.23-2.64-4.82-5.19-8.15-6.23-5.05-1.6-10.43.62-15.69 1.27-17.39 2.14-33.21-12.84-50.68-11.5a9.41 9.41 0 0 0-3.36.76c-2.26 1.08-3.48 3.46-4.88 5.52-5.43 8-14.54 12-23.61 16a12.68 12.68 0 0 0-3.22 1.48c-2.72 1.27-5.4 2.59-7.93 4.09-12.6 7.56-14.6 17.25-10.67 25.33a24.73 24.73 0 0 0 6.12 7.78 14.6 14.6 0 0 1-.36 1.45c-2.57 9.24-11.57 17.53-9.93 27.14a16.79 16.79 0 0 0 2 5.31c2.67 4.83 7.09 9 8.79 14.24a14.25 14.25 0 0 1 .43 1.62c.92 4.58-.54 8.94-2.55 13.27-19.16 4.43-40.8 12.59-42.48 27-2.94 25.06-11.78 94.28-11.78 94.28s-5.92 32 8.34 35.9c4.49 1.22 11-.37 20.34-6.66l-.5 1.48c-.11.33-.22.65-.32 1a293.17 293.17 0 0 0-9.78 37.5h137.6a150.87 150.87 0 0 0-5.37-23.57c-.17-.56-.34-1.07-.49-1.55a105.45 105.45 0 0 0 12 4.32c5.07 1.52 9.14 1.5 12.41.53 11.91-3.55 13.17-19.68 13.17-19.68l5.12-39.32 6.12-58.63a23.35 23.35 0 0 0 1.35-7.92c0-5.65-1.92-13.25-9.26-21.61zm-104.48-36.92c.07-.68.12-1.37.16-2.05l.18.12c0 .65-.07 1.3-.14 1.94v.11a25.87 25.87 0 0 1-1.3 6 38.62 38.62 0 0 0 1.1-6.12zm69.44 141.82c-3.07 1.4-7.16-.61-7.16-.61.35.64.68 1.26 1 1.88a.25.25 0 0 1 0 .07l-.22-.12-2.35-1.2a57.93 57.93 0 0 1 4.62-13.74 114.46 114.46 0 0 0 4.78-11.18 77.36 77.36 0 0 0 1.48-4.64 158.87 158.87 0 0 0 .91 18.86c.88 6.81-.81 9.67-3.06 10.68z"
				transform="translate(-79.52 -41.08)"
				fill="url(#prefix__b)"
			/>
			<path
				d="M455.31 254.45c-3.27 2.23-6.7 4.81-7.86 8.6-1.88 6.11 2.84 12.24 3.3 18.62.85 11.59-12.26 21.17-10.33 32.64 1.32 7.86 9.38 13.2 10.93 21 2.26 11.4-10.09 21.45-9.12 33 .52 6.17 4.81 11.41 9.67 15.23a47.09 47.09 0 0 0 23.63 9.7c-.57-9.91-7.93-18.94-6.66-28.79.87-6.75 5.62-12.28 8.37-18.51 4.83-10.94 3.28-23.6.39-35.2s-7.08-23.07-7.29-35c-.13-7.2 3.25-17.77.77-24.6-3.01-8.28-10.19-.51-15.8 3.31z"
				fill="#b0605d"
			/>
			<path
				d="M456.31 252.45c-3.27 2.23-6.7 4.81-7.86 8.6-1.88 6.11 2.84 12.24 3.3 18.62.85 11.59-12.26 21.17-10.33 32.64 1.32 7.86 9.38 13.2 10.93 21 2.26 11.4-10.09 21.45-9.12 33 .52 6.17 4.81 11.41 9.67 15.23a47.09 47.09 0 0 0 23.63 9.7c-.57-9.91-7.93-18.94-6.66-28.79.87-6.75 5.62-12.28 8.37-18.51 4.83-10.94 3.28-23.6.39-35.2s-7.08-23.07-7.29-35c-.13-7.2 3.25-17.77.77-24.6-3.01-8.28-10.19-.51-15.8 3.31z"
				opacity={0.1}
			/>
			<path
				d="M466.89 402.77s-53-54-13-50c9.07.91 15.21-.71 19.28-3.75 4.64-3.46 6.59-8.76 7.13-14.29 1.1-11-3.41-23-3.41-23s54-43 43 11a92.06 92.06 0 0 0-2.1 16.69c-.18 11.46 3.59 15.85 8.88 17.65 8.92 3.05 22.18-1.22 28.22 8.66 11 18.04-88 37.04-88 37.04z"
				fill="#ffb9b9"
			/>
			<path
				d="M519.89 322.77a92.06 92.06 0 0 0-2.1 16.69 40.82 40.82 0 0 1-4.39 1.25 43.08 43.08 0 0 1-33.1-6c1.1-11-3.41-23-3.41-23s54-42.94 43 11.06z"
				opacity={0.05}
			/>
			<path d="M546.89 296.77a43 43 0 0 1-86 0c0-.8 0-1.6.07-2.39a43 43 0 0 1 85.93 2.39z" fill="#ffb9b9" />
			<path
				d="M466.89 402.77s-53-54-13-50c9.07.91 15.21-.71 19.28-3.75-7.69 12.84-16.45 35.9 22.72 33.75 35.85-2 35.24-16.28 30.78-25.66 8.92 3.05 22.18-1.22 28.22 8.66 11 18-88 37-88 37z"
				opacity={0.05}
			/>
			<path
				d="M589.82 400.64a13.61 13.61 0 0 1-.93 2.13l-13.59 10.37-1.73 1.33-22.67 17.3s2.08 3.64-.89 14.3a96.36 96.36 0 0 1-6.11 15.7 58.48 58.48 0 0 0-4.52 13.62 1.55 1.55 0 0 1 0 .21c-.17.87-.32 1.73-.44 2.58a73 73 0 0 0 .73 25.57 3.4 3.4 0 0 0 .07.34c.48 2.28.93 3.83 1.11 4.41l.09.27s.48 1.28 1.2 3.52l.06.2a152.33 152.33 0 0 1 5.66 24.35H413.65a296.75 296.75 0 0 1 9.75-37.61l.49-1.46c-.82.56-1.62 1.09-2.39 1.57-9.3 5.84-15.47 6.45-19.52 4.2-11.27-6.27-6.09-34.77-6.09-34.77s8.63-68.65 11.5-93.5c1.65-14.29 22.77-22.38 41.47-26.78a221.22 221.22 0 0 1 28.83-4.7h.2s-.28.34-.75 1l-.06.08c-.35.46-.8 1.05-1.3 1.77a68.92 68.92 0 0 0-8.17 14.61c-3.1 8.16-3.63 17.07 5.44 21.6 4.57 2.29 11.57 3.47 21.89 2.9 15.95-.88 24.69-4.21 29.08-8.45a11.93 11.93 0 0 0 3.61-6.51c1.15-6.08-2.55-12.48-5.12-16.06a34.92 34.92 0 0 0-2.28-2.84l26.22 1.87a52.12 52.12 0 0 1 33.91 15.63c.62.63 1.22 1.29 1.8 2 11.46 13.29 9.32 24.69 7.66 29.25z"
				fill="#ffd6ef"
			/>
			<path d="M432.89 398.77s2 16-2 21-5 28 0 42z" opacity={0.05} />
			<rect x={437.89} y={432.76} width={68} height={28} rx={3.75} ry={3.75} fill="#cdd0db" />
			<rect x={437.89} y={432.76} width={68} height={28} rx={3.75} ry={3.75} opacity={0.05} />
			<rect x={437.89} y={433.76} width={68} height={28} rx={3.75} ry={3.75} fill="#cdd0db" />
			<circle cx={491.39} cy={447.26} r={3} fill="#9da7c0" />
			<path
				d="M408.95 477.11a19.45 19.45 0 0 1 11.3-11.9c3.42-1.42 7.59-4 9.7-8.71 3.94-8.73 10.94-17.73 28.94-11.73s-5 10-5 10 41-6 25 6-36 19-36 19l-9.85 10.43c-6 6.37-16.42 6.34-22-.44-2.5-3.06-3.81-7.18-2.09-12.65z"
				opacity={0.05}
			/>
			<path
				d="M407.95 475.11a19.45 19.45 0 0 1 11.3-11.9c3.42-1.42 7.59-4 9.7-8.71 3.94-8.73 10.94-17.73 28.94-11.73s-5 10-5 10 41-6 25 6-36 19-36 19l-9.85 10.43c-6 6.37-16.42 6.34-22-.44-2.5-3.06-3.81-7.18-2.09-12.65z"
				fill="#ffb9b9"
			/>
			<path
				d="M548.89 495.77l-7 17-9-6.59-25-18.41-17-11c-24-18 0-21 0-21-9-4 0-8 0-8 32-7 26 19 26 19l20.27 10.51 6.73 3.49z"
				opacity={0.05}
			/>
			<path
				d="M550.89 493.77l-7 17-9-6.59-25-18.41-17-11c-24-18 0-21 0-21-9-4 0-8 0-8 32-7 26 19 26 19l20.27 10.51 6.73 3.49z"
				fill="#ffb9b9"
			/>
			<path d="M550.89 493.77l-7 17-9-6.59c8.11.29 17.69-3.63 4.23-28.9l6.73 3.49z" opacity={0.05} />
			<path
				d="M587.89 392.77l1.93 7.87-5.93 58.13-5 39s-2 26-25 19-25-14-25-14 33 11 12-28c0 0 12 6 10-10s0-44 0-44z"
				fill="#ffd6ef"
			/>
			<path
				d="M546.89 296.77a43 43 0 0 1-33.49 41.94c-1.44-4.16-2.46-8.3-1.41-12.51 2-8.17 11.46-14.13 10.41-22.48a5.54 5.54 0 0 0-1-2.62c-2.11-2.78-6.41-1.4-9.83-.71-8.84 1.76-18.52-4.21-20.92-12.9a29.23 29.23 0 0 1-29.74 6.89 43 43 0 0 1 85.93 2.39z"
				opacity={0.05}
			/>
			<path
				d="M491.71 285.49c2.39 8.69 12.08 14.66 20.91 12.89 3.42-.68 7.72-2.06 9.83.72a5.4 5.4 0 0 1 .95 2.61c1.06 8.36-8.37 14.31-10.4 22.49-2.09 8.42 4 16.55 5.35 25.12.71 4.69 0 9.47 0 14.21s1.12 9.84 4.64 13 10 3.22 12.37-.9c11.25 5.95 6.76 24.38 15.3 33.81 4.71 5.2 12.46 6.45 19.45 5.79a8.2 8.2 0 0 0 4.57-1.48 8 8 0 0 0 2.24-4.2 34.11 34.11 0 0 0-.87-20.23c-1.12-3.11-2.73-6.25-2.31-9.52.32-2.56 1.85-4.79 3.47-6.8 5.37-6.66 12.7-13.1 12.65-21.66s-7.47-15-10.24-23c-3.77-10.93 1.46-22.64 3.61-34a64.49 64.49 0 0 0-13.61-52.5c-2.18-2.62-4.71-5.15-8-6.19-4.93-1.58-10.18.62-15.33 1.26-17 2.13-32.41-12.73-49.47-11.4a9.08 9.08 0 0 0-3.28.75c-2.21 1.07-3.4 3.44-4.77 5.48-7.53 11.25-22.33 14.46-33.93 21.44-33.83 20.37 10.95 57.25 36.87 32.31z"
				fill="#b0605d"
			/>
			<path
				d="M698.06 780.23s-14.48-73.36 15.34-123.64a113.3 113.3 0 0 0 15.63-69.94 190.55 190.55 0 0 0-7-34.14"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M740.65 520.71c-.8 8.75-19 32.68-19 32.68s-13.52-26.84-12.71-35.6a15.92 15.92 0 1 1 31.7 2.91zM762.4 571.6c-5.43 6.91-33.7 17.12-33.7 17.12s3.24-29.88 8.67-36.79a15.92 15.92 0 0 1 25 19.67zM753.64 654.36c-8.18 3.22-37.73-2.24-37.73-2.24s17.88-24.16 26.06-27.38a15.92 15.92 0 0 1 11.67 29.62zM732.92 715.49c-7.52 4.56-37.57 4.17-37.57 4.17s13.54-26.83 21.06-31.39a15.92 15.92 0 1 1 16.51 27.22zM695.26 587.36c5.72 6.68 34.39 15.68 34.39 15.68s-4.5-29.72-10.21-36.39a15.92 15.92 0 1 0-24.18 20.71zM671.93 659.15c7.45 4.66 37.51 4.67 37.51 4.67s-13.18-27-20.64-31.67a15.92 15.92 0 1 0-16.87 27zM658.82 732.05C665.38 737.9 695 743 695 743s-8.43-28.85-15-34.7a15.92 15.92 0 1 0-21.19 23.76zM445.8 157.7a37.86 37.86 0 0 0-37.86-37.86H201.66a37.86 37.86 0 0 0 0 75.72l172.47-.33 39.67 34.61v-34.79a37.83 37.83 0 0 0 32-37.35z"
				fill={primaryColor}
			/>
			<circle cx={208.2} cy={159} r={13.06} fill="#fff" opacity={0.2} />
			<circle cx={252.58} cy={159} r={13.06} fill="#fff" opacity={0.2} />
			<circle cx={296.97} cy={159} r={13.06} fill="#fff" opacity={0.2} />
			<path fill={primaryColor} d="M375.81 588.84h104v31h-104z" />
			<path fill={primaryColor} opacity={0.1} d="M514.81 588.84h104v31h-104z" />
		</svg>
	);
};

UndrawOnlineWorld.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawOnlineWorld;
