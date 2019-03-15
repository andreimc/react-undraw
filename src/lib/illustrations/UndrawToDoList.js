import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawToDoList = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1155.41 796.48" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={880.14} y1={757.49} x2={880.14} y2={274.88} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<path
				d="M356.76 40.24C395.96 4.93 457.5-2.26 513.51.55c175.93 8.83 334.74 94.59 472.11 191.6 49.73 35.12 98.69 73 131 121.33 65.72 98.45 46.22 234.84-45.15 315.94-31.09 27.6-68.78 48.75-107.47 67.51-68.79 33.34-143 60.1-221.09 67.72-55.68 5.43-112 1-167.4-6.56-154.65-21.18-306.45-68-433.69-148.14-55.83-35.14-108.43-78.83-131.43-135.71S2.11 345.35 59.09 311.7c23.57-13.92 51.74-20.2 79.33-26.11 40.61-8.68 81.86-17.25 118.51-34.91 37.85-18.24 82.66-53.52 75.17-93.9-8.04-43.29-14.49-81.34 24.66-116.54z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				d="M256.7 447.81s10.37-7.43 21.1-2.84c0 0-3 6.38-16.37 6.3zM255.41 448.24s-2.77 12.45 5.67 20.53c0 0 4.68-5.27-.64-17.53zM241.7 436.91s.38-10.51 24.18-7.94c0 0 .37 6.76-7.81 10.28s-12.1.99-16.37-2.34zM240.23 436.89s-9.89 3.6-.11 25.46c0 0 6.54-1.73 7.37-10.6s-2.79-11.8-7.26-14.86zM226.26 422.54s-2-17.2 22.24-16.36c0 0 2.31 15.55-17.81 20.34zM209.53 403.68s2.57-19.67 27-14.78c0 0 .74 16.9-22.84 19.29zM197.08 383.99s4.82-19.29 29-14.47c0 0-5 17.35-27.27 17.93zM185.23 364.76s4.67-20 28-14.92c0 0-7 19.07-26.37 18.23zM177.36 346.36s3.25-24.33 25-19.81c0 0-5.42 22.23-23.3 23.26zM169.79 324.05s4.07-24.55 26.15-18.3c0 0-7.68 23.35-24.5 21.61zM164.83 303.24s7-24.66 23.92-24.65c0 0-7.15 26-22.32 29.48zM161.41 282.82s7.53-29.66 21.35-27.92c0 0-5.13 22.64-20.69 32.47zM158.98 258.4s7.17-24.74 20.69-26.24c0 0-4.6 24.25-20.15 32.58zM156.46 235.68s9.18-24.85 18.12-25.75c0 0-3.47 24.25-17.07 29.73zM154.53 214.5s5.2-26.81 14.06-29.35c0 0-.39 21.77-13.09 31.3zM150.1 186.86s5.73-21.42 12.85-24.93c0 0-.48 25-11 30zM146.6 168.72l-2.75-37.28s14.6 27.66 4 43.83zM134.7 132.02s-10.79-26.89-13.19-28.32c0 0 19.8 17 18.8 39.78zM225.6 422.44s-17.25-1.59-15.8 22.63c0 0 15.6 1.93 19.89-18.31zM208.7 403.06s-19.82.69-17.26 25.44c0 0 16.75 2.34 21.36-20.91zM196.95 385.61s-18.32-7.75-29 14.47c0 0 16.89 6.39 30.72-11zM184.83 364.96s-18.76-8.28-28.77 13.42c0 0 19.45 5.87 30.42-10.12zM177.61 346.87s-18.38-16.26-31.87 1.42c0 0 18.65 13.24 32.83 2.32z"
				fill={primaryColor}
			/>
			<path
				d="M170.77 323.43s-18.5-16.64-31.85 2c0 0 20.57 13.45 32.63 1.59zM166.63 302.45s-14.57-21.1-30.57-15.66c0 0 15.14 22.36 30.61 20.75zM161.82 282.67s-14.91-26.72-27.81-21.49c0 0 10.78 20.56 28.33 26.05zM159.87 256.97s-15.06-20.9-28.29-17.77c0 0 12.47 21.3 29.91 23.93zM157.95 235.14S146 211.5 137.02 211.63c0 0 6.21 23.7 20.34 27.58zM154.95 213.96s-13.2-23.9-22.42-23.6c0 0 7.08 20.6 22.09 25.76zM152.12 188.24s-9.95-19.82-17.63-21.81c0 0 5.53 24.4 16.82 27.2z"
				fill={primaryColor}
			/>
			<path
				d="M145.48 168.06l-21.69-30.44s6.43 30.62 24.91 36.28zM130.11 134.71s-24.41-15.53-25.41-18.16c0 0 13 22.58 35.66 25.78zM128.4 127.37s-28.36-25.25-35.34-24.95c0 0 22.6.16 36 23.53z"
				fill={primaryColor}
			/>
			<path
				d="M152 192.24l-1 .17c-6.68-40.05-15.09-63.54-23.67-66.16l.29-1c9.08 2.76 17.54 25.91 24.38 66.99z"
				fill="#444053"
			/>
			<path
				d="M163.25 288.12l-1.5.18c-.46-3.74-.86-7.58-1.17-11.4-2.71-33.25-6.11-63.75-9.91-86.57l.83-1.11c3.81 22.86 7.87 54.26 10.59 87.56.31 3.8.7 7.61 1.16 11.34z"
				fill="#444053"
			/>
			<path
				d="M285.53 465.89c-.27-.11-27.23-10.93-55.83-38.11a218.64 218.64 0 0 1-41.84-54.7c-13.71-25.41-22.68-56.95-26.47-87.77l1.6.68c8.5 69.18 41.92 115.42 68 140.27 28.32 26.94 55 37.65 55.25 37.75z"
				fill="#444053"
			/>
			<g opacity={0.7}>
				<path
					d="M298.54 384.45s12.11-4 21 3.57c0 0-4.77 5.2-17.51 1.14zM297.18 384.47s-6.34 11.07-.69 21.28c0 0 6-3.63 4.61-16.92zM287.45 369.58s3.5-9.92 25.45-.39c0 0-1.65 6.57-10.52 7.49s-11.83-2.67-14.93-7.1zM286.06 369.13s-10.5.5-7.68 24.27c0 0 6.77.3 10.2-7.93s.84-12.1-2.52-16.34zM277 351.24s3.19-17 26.09-9c0 0-2.41 15.53-23.05 14.12zM266.64 328.24s8.3-18 30.14-6.08c0 0-4.32 16.35-27.55 11.62zM260.6 305.79s10.35-17 32-5.19c0 0-10 15.06-31.37 9zM255.01 283.9s10.4-17.68 31.19-5.91c0 0-12.35 16.12-30.59 9.56zM252.97 263.99s10.34-22.26 29.78-11.46c0 0-11.79 19.6-29.16 15.27zM252.39 240.44s11.19-22.23 30.4-9.69c0 0-14.27 20-29.81 13.34zM253.86 219.07s14-21.46 30.16-16.42c0 0-14.57 22.73-30.08 21.51zM256.7 198.58s16-26.07 28.69-20.3c0 0-11.64 20.09-29.41 24.84zM261.59 174.55s14.22-21.49 27.56-18.9c0 0-11.6 21.79-28.92 25.11zM265.96 152.1s16.15-21 24.95-19.18c0 0-10.53 22.12-25.14 23.29zM270.41 131.31s12.94-24 22.16-23.84c0 0-6.86 20.67-21.81 26zM274.4 103.6s11.85-18.74 19.69-20c0 0-7.9 23.74-19.42 25.41zM276.46 85.24l8.47-36.42s5.71 30.75-9.23 43zM276.04 46.67s-2.31-28.88-4.17-31c0 0 13.86 22.08 6.12 43.58zM276.39 350.97s-16-6.64-21.81 16.92c0 0 14.31 6.48 24.43-11.57zM266.02 327.44s-19.13-5.23-24.05 19.16c0 0 15.3 7.22 26.62-13.61zM260 307.29s-15.18-12.85-32 5.19c0 0 14.22 11.13 32.61-1.38zM254.58 283.97s-15.46-13.48-31.46 4.25c0 0 16.82 11.4 32.05-.6z"
					fill={primaryColor}
				/>
				<path
					d="M253.07 264.56s-12.72-21-30.86-8.14c0 0 13.87 18.2 30.66 12zM253.51 240.14s-12.72-21.39-31-7.55c0 0 15.64 19 30.67 11.23zM255.79 218.87s-7.63-24.47-24.52-24c0 0 7.8 25.86 23.05 28.92zM257.08 198.56s-6.28-29.95-20.15-28.79c0 0 4.18 22.84 19.3 33.31zM262.88 173.45s-8.16-24.44-21.73-25.39c0 0 5.57 24.05 21.44 31.75zM267.54 152.03s-4.38-26.12-13-28.67c0 0-1.11 24.47 11.22 32.39zM270.97 130.92s-5.49-26.75-14.38-29.2c0 0 .63 21.77 13.43 31.16zM275.91 105.56s-3.6-21.88-10.34-26.07c0 0-2 24.94 8 31z"
					fill={primaryColor}
				/>
				<path
					d="M275.59 84.24l-11.66-35.52s-3 31.14 13 42.05zM270.84 47.87s-18.73-22.11-18.87-24.9c0 0 5.73 25.43 26.37 35.22zM271.39 40.36S251.82 7.81 245.07 6.01c0 0 21.52 6.89 27.32 33.16z"
					fill={primaryColor}
				/>
				<path
					d="M274.63 109.24l-1-.14c5.53-40.21 4.5-65.15-2.92-70.2l.57-.83c7.87 5.37 9.02 29.98 3.35 71.17z"
					fill="#444053"
				/>
				<path
					d="M256.83 204.24l-1.49-.27c.68-3.71 1.44-7.49 2.28-11.24 7.31-32.55 13.14-62.67 16.29-85.59l1.13-.82c-3.16 23-8.63 54.15-15.94 86.75-.84 3.67-1.6 7.43-2.27 11.17z"
					fill="#444053"
				/>
				<path
					d="M320.7 410.29c-.22-.18-22.74-18.53-42-53a218.47 218.47 0 0 1-23.66-64.67c-5.53-28.34-4.72-61.12.84-91.67l1.32 1.12c-12.45 68.58 5.7 122.68 23.24 154.17 19 34.14 41.28 52.3 41.51 52.48z"
					fill="#444053"
				/>
			</g>
			<path
				d="M1014.35 754.11s-42.28-2.55-37.29 27.08c0 0-1 5.23 3.75 7.61 0 0 .08-2.2 4.34-1.45a19.36 19.36 0 0 0 4.59.22 9.62 9.62 0 0 0 5.62-2.32s11.88-4.91 16.5-24.33c0 0 3.42-4.24 3.29-5.33l-7.14 3s2.44 5.15.52 9.42c0 0-.23-9.23-1.6-9-.28.05-3.71 1.79-3.71 1.79s4.2 9 1 15.48c0 0 1.2-11.05-2.34-14.84l-5 2.94s4.9 9.26 1.58 16.81c0 0 .85-11.59-2.64-16.1l-4.55 3.55s4.61 9.13 1.8 15.39c0 0-.37-13.49-2.78-14.51 0 0-4 3.51-4.59 5 0 0 3.15 6.62 1.2 10.12 0 0-1.2-9-2.19-9 0 0-4 5.95-4.38 10 0 0 .17-6.07 3.42-10.6a11.89 11.89 0 0 0-6.07 3.14s.62-4.21 7-4.58c0 0 3.28-4.51 4.16-4.79 0 0-6.41-.53-10.29 1.19 0 0 3.42-4 11.46-2.17l4.49-3.67s-8.43-1.15-12 .12c0 0 4.11-3.51 13.21-.95l4.89-2.92s-7.18-1.55-11.46-1c0 0 4.52-2.44 12.9.2l3.5-1.57s-5.27-1-6.81-1.2-1.62-.59-1.62-.59a18.22 18.22 0 0 1 9.88 1.1s7.49-2.77 7.36-3.24z"
				fill={primaryColor}
			/>
			<ellipse cx={985.23} cy={791.38} rx={29.92} ry={5.06} fill={primaryColor} opacity={0.1} />
			<path
				d="M1095.45 676.04s-23.83-1.43-21 15.27a4.07 4.07 0 0 0 2.11 4.29s.05-1.24 2.45-.82a10.62 10.62 0 0 0 2.59.13 5.35 5.35 0 0 0 3.16-1.31s6.7-2.77 9.31-13.72c0 0 1.93-2.39 1.85-3l-4 1.72s1.37 2.9.29 5.31c0 0-.13-5.21-.9-5.08-.16 0-2.09 1-2.09 1s2.36 5.06.58 8.73c0 0 .68-6.23-1.32-8.36l-2.83 1.65s2.76 5.22.89 9.48c0 0 .48-6.53-1.49-9.08l-2.56 2s2.59 5.15 1 8.68c0 0-.21-7.6-1.57-8.18a16 16 0 0 0-2.59 2.79s1.78 3.74.68 5.71c0 0-.68-5.07-1.23-5.09 0 0-2.24 3.36-2.47 5.66a12.22 12.22 0 0 1 1.93-6 6.74 6.74 0 0 0-3.43 1.77s.35-2.37 4-2.58c0 0 1.85-2.55 2.34-2.7 0 0-3.61-.3-5.8.67 0 0 1.93-2.24 6.46-1.23l2.54-2.06s-4.76-.65-6.77.07c0 0 2.32-2 7.45-.54l2.76-1.65a25.22 25.22 0 0 0-6.47-.56s2.55-1.37 7.27.12l2-.89s-3-.58-3.84-.67-.92-.34-.92-.34a10.32 10.32 0 0 1 5.58.62s4.11-1.54 4.04-1.81z"
				fill={primaryColor}
			/>
			<ellipse cx={1079.04} cy={697.06} rx={16.87} ry={2.85} fill={primaryColor} opacity={0.1} />
			<path
				d="M954.76 690.54s-28.78-1.74-25.38 18.43a4.91 4.91 0 0 0 2.55 5.18s0-1.49 2.95-1a13.73 13.73 0 0 0 3.13.16 6.58 6.58 0 0 0 3.82-1.58s8.09-3.34 11.24-16.57c0 0 2.33-2.88 2.23-3.62l-4.85 2.07s1.66 3.51.35 6.42c0 0-.15-6.29-1.09-6.14-.19 0-2.52 1.21-2.52 1.21s2.85 6.11.7 10.54c0 0 .82-7.52-1.59-10.1l-3.42 2s3.33 6.3 1.07 11.45c0 0 .58-7.89-1.79-11l-3.1 2.41s3.14 6.21 1.23 10.48c0 0-.25-9.18-1.9-9.88 0 0-2.71 2.39-3.12 3.37 0 0 2.14 4.51.81 6.89 0 0-.81-6.11-1.48-6.14 0 0-2.7 4.05-3 6.83a14.77 14.77 0 0 1 2.33-7.22 8.13 8.13 0 0 0-4.13 2.14s.42-2.87 4.8-3.12c0 0 2.23-3.07 2.83-3.26 0 0-4.36-.36-7 .81 0 0 2.32-2.71 7.79-1.48l3.06-2.49s-5.73-.79-8.17.08c0 0 2.8-2.39 9-.65l3.33-2s-4.89-1.06-7.81-.68c0 0 3.08-1.65 8.78.14l2.39-.98s-3.58-.7-4.63-.81-1.1-.4-1.1-.4a12.43 12.43 0 0 1 6.73.75s5.05-1.92 4.96-2.24z"
				fill={primaryColor}
			/>
			<ellipse cx={934.94} cy={715.91} rx={20.37} ry={3.44} fill={primaryColor} opacity={0.1} />
			<path
				d="M714.07 701l-100.31 38.81-146.62 56.67c-5.53-10.27-13.69-24.32-23.79-41-34.72-57.55-92.18-147.06-143.32-225.72-57.64-88.63-107.24-163.47-107.24-163.47l35.91-10.41 293.32-85.07z"
				opacity={0.1}
			/>
			<path
				d="M716.07 694l-100.31 38.81-146.62 56.67c-5.53-10.27-13.69-24.32-23.79-41-34.72-57.55-92.18-147.06-143.32-225.72-57.64-88.63-107.24-163.47-107.24-163.47l35.91-10.41 293.32-85.07z"
				fill="#fff"
			/>
			<path
				d="M716.07 694l-100.31 38.81a754.4 754.4 0 0 1-170.41 15.67c-34.72-57.55-92.18-147.06-143.32-225.72L230.7 348.88l293.32-85.07z"
				opacity={0.1}
			/>
			<path
				d="M790.7 669.86s-155.84 92.18-388.5 71.38L216.7 289.05l88.89-15.27 307.28-52.77 174.35 440.11z"
				fill={primaryColor}
			/>
			<path
				d="M787.22 661.12c-36.7 1.8-79.14 1.63-121.86-3.46-46.22-5.42-92.66-16.64-132.56-37.18-33.32-17.17-61.81-35.82-86.66-58.21-64.61-58.12-104.6-141.26-140.51-288.49l307.28-52.77z"
				opacity={0.1}
			/>
			<path
				d="M901.53 635.84s-114.92 22.52-231.78 8.65c-46.22-5.45-92.71-16.64-132.56-37.18-33.32-17.17-61.81-35.82-86.66-58.21-80-72-122.21-182.22-165.75-404.91 0 0 191 46.09 379.71-54.87 0 0 63.65 397.27 237.04 546.52z"
				fill="#fff"
			/>
			<path
				d="M669.75 644.49c-46.22-5.45-92.71-16.64-132.56-37.18-33.32-17.17-61.81-35.82-86.66-58.21 68.09-5.53 77.88-42.76 77.88-42.76 50.48 80.12 141.34 138.15 141.34 138.15z"
				opacity={0.1}
			/>
			<path
				d="M383.55 225.95s102.6 11.71 198.63-42.25l6.58 21.13s-91.87 45.81-205.21 45.81z"
				fill={primaryColor}
				opacity={0.3}
			/>
			<path
				d="M383.55 330.24s102-8.23 215.55-63.11l3.84 8.78s-41.79 52.59-219.39 66.33zM395.64 370.92s102-8.23 215.55-63.1l3.84 8.78s-41.78 52.64-219.39 66.39zM406.7 414.77s102-8.23 215.55-63.1l3.84 8.78s-41.84 52.61-219.39 66.39zM419.83 452.35s102-8.23 215.55-63.1l3.84 8.78s-41.78 52.62-219.39 66.4z"
				opacity={0.3}
			/>
			<path d="M431.93 493.07s102-8.23 215.55-63.1l3.84 8.78s-41.79 52.62-219.39 66.39z" opacity={0.1} />
			<path
				fill={primaryColor}
				opacity={0.3}
				d="M615.949 249.463l28.541-9.717 9.717 28.542-28.542 9.716zM632.186 291.924l28.541-9.717 9.717 28.542-28.542 9.716zM658.216 373.623l28.541-9.716 9.716 28.541-28.541 9.717zM673.15 417.472l28.542-9.716 9.716 28.541-28.541 9.717zM645.425 336.034l28.541-9.717 9.716 28.542-28.541 9.716z"
			/>
			<path
				d="M994.7 501.33l-1.07-1c2.76-.56 5.36-.81 5.36-.81s-9.47-34.26-25.44-45.69c-7.9-5.65-14.48-15.06-19.13-23.13a349.7 349.7 0 0 0-28.49-41.77l-2.88-3.63-1.24-1.58c1.73-2.62 3.85-5.11 3.61-8.15a.13.13 0 0 1 0-.06 3.84 3.84 0 0 0 0-.48 5.59 5.59 0 0 0-.2-1.11l-.11.17c-1.35-3.92-6.54-5.65-10.39-7.81-9-5.07-12.85-16.15-14.77-26.45-1.5-8-2.74-17-9-22.15-4-3.31-9.44-4.4-13.47-7.69-3.82-3.12-5.95-7.85-8.35-12.2-4-7.25-9.28-14-16.25-18.33s-15.82-6-23.47-3.1c-2.93 1.12-5.59 2.86-8.49 4.07-7.2 3-15.45 2.6-22.58 5.77-8.78 3.9-14.49 12.52-19.71 20.7-2.7 4.23-6.94 10.42-9.35 16.65v-.65a23.82 23.82 0 0 0-1.86 8.66 13 13 0 0 0 .41 3.76c1.08 4 4.3 6.21 8.12 7.75a33.85 33.85 0 0 0 .88 3.77 37 37 0 0 0 23.9 24.41c.33.12.67.2 1 .3a7.94 7.94 0 0 0 1.19 2.2c3.19 4 9.59 2.86 13.75-.05.17-.11.33-.25.49-.37a15 15 0 0 0 .18 1.69c.09.48.16 1 .26 1.43 3.75 20.21 13.35 31.12 13.35 31.12s.89 1.34 2.34 3.56c-.76 11.15 4.33 21.31 10.21 29.16-5.07 2.93-16 8.67-22.76 8.19 0 0-24.84 3.21-27.72 1.6-.4-.22-.78.08-1.14.76-6.84-4.17-28.71-16.19-30.58-.76-1.69 14 18.24 15.79 27.73 15.86-.43 4.1-.67 7.38-.67 7.38l40.81-2.79 21.25-3.13c-2.35 3.11-5 5.88-7.59 7.23 0 0-19.21 15.55-22.53 15.69-.47 0-.62.47-.55 1.22-8.08 0-33.21 1.17-26.24 15.17 6.33 12.69 24.15 3.91 32.21-.94 1.9 3.69 3.52 6.58 3.52 6.58l32.93-23.45 7.13-6a25.38 25.38 0 0 0 7.09-1.37c0 .09.07.18.1.26a13.53 13.53 0 0 1 .57 2.26c2 11.49-4.72 38.29-4.72 38.29s-14.78 37.69-7.68 42.83 1.85 26.83 1.85 26.83a40.1 40.1 0 0 0 4.26 5.88 17.86 17.86 0 0 0 2.49 2.37 23.15 23.15 0 0 0-.82 2.75 22.42 22.42 0 0 0 1.17 13.84c4.88 11.84 1.91 29 1.91 29l-9.58 64.72c-4.6-.7-10.54-1.28-12.75 0-3.39 1.91-2.28 11.54 5.59 15.68a20.26 20.26 0 0 1-8.1 3.73c-7 1.6-11.92 2.62-15.16 3.24-.21 0-16.8-3.66-21.06-1.24s-2.21 15.84 9.91 19.13c11.86 3.21 56.09 7.92 68.83 6l.81-.14c10.83-2.14 1.32-16.37.12-18.1-.08-.58-.15-1.19-.23-1.85-.17-1.48-.32-3.18-.43-5 12.08 1.11 24 1.65 29.47.83.26 0 .5-.08.72-.13 9.59-1.9 1.19-14.48.11-16l-.15-1.23v-.11c0-.29-.07-.6-.1-.9s0-.51-.08-.78 0-.48-.07-.73q-.06-.74-.12-1.53v-.65c0-.4-.05-.8-.07-1.21v-.67c0-.6 0-1.22-.06-1.84v-.51-1.52-.73-1.6-.53c0-.67.06-1.36.1-2.05l.06-.74c0-.51.08-1 .13-1.52 0-.25 0-.5.08-.75.08-.7.17-1.4.27-2.11 0-.21.07-.42.1-.63.09-.53.18-1.07.28-1.61 0-.26.1-.53.16-.8q.18-.87.39-1.74c0-.16.07-.32.11-.48.18-.7.38-1.39.59-2.08.07-.24.15-.48.23-.72.17-.52.35-1 .54-1.54l.24-.64c.27-.68.56-1.35.86-2 .08-.17.17-.34.26-.51.25-.52.52-1 .8-1.54l.34-.59c.38-.64.77-1.28 1.2-1.89 11-15.68 13.9-45.92 13.63-52.5s1.31-20.23 3.28-22.25c1.32-1.35 9-12 13.59-20.1.83-1.48 1.55-2.87 2.12-4.11 3.26-1.13 5.42-2 5.42-2a46.37 46.37 0 0 1-1.64-12.89c.08-8.51 2.42-19.72 12.08-28.82 14.26-13.44 16.25-26.76 16.44-31.88v-.95c-.03-.94-.08-1.4-.08-1.4z"
				transform="translate(-22.3 -51.76)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M934.4 533.44a171.88 171.88 0 0 1-13 19.87c-1.88 2-3.39 15.51-3.13 22s-2.49 36.41-13 51.91-5.11 42.29-5.11 42.29l-16.77 5.88h-20.15l-13.88-4.15-3.66-10.1s4.88-.75 17-3.63a15.73 15.73 0 0 0 12.55-14.27l8.51-59.43s2.51-15-1.63-25.38a20.66 20.66 0 0 1 1.36-18.1l.27-.42s13.13-10.37 26.51-16.86c11.85-5.72 23.87-8.44 27.28 1.71.44 1.31-1 4.68-3.15 8.68z"
				fill="#a5636d"
			/>
			<path
				d="M934.4 533.44a171.88 171.88 0 0 1-13 19.87c-1.88 2-3.39 15.51-3.13 22s-2.49 36.41-13 51.91c-7.4 10.93-6.91 27.45-6 36.26.39 3.69.87 6 .87 6l-16.77 5.88h-20.13l-13.88-4.12-3.66-10.1s1.22-.19 4-.73 7-1.46 13.06-2.9a15.73 15.73 0 0 0 12.49-14.27l8.51-59.43s2.51-15-1.63-25.38a20.66 20.66 0 0 1 1.36-18.1l.27-.42s13.13-10.37 26.51-16.86c11.85-5.72 23.87-8.44 27.28 1.71.44 1.31-1 4.68-3.15 8.68z"
				opacity={0.05}
			/>
			<path
				d="M900.16 669.52l-16.77 5.88h-20.15l-13.88-4.16-3.66-10.1s1.22-.19 4-.73a7.55 7.55 0 0 0 5.81 8.16l7.88.27c1.11 0 2.23.06 3.33.06a100.48 100.48 0 0 0 32.58-5.41c.4 3.69.86 6.03.86 6.03z"
				opacity={0.1}
			/>
			<path
				d="M863.38 670.54l-7.89-.27s-7.36-1.56-5.56-9.91c0 0-14.2-3.22-17.83-1.09s-1.88 13.88 8.38 16.76c10 2.81 47.46 6.94 58.23 5.25l.69-.12c9.76-2 0-16 0-16a100.88 100.88 0 0 1-36.02 5.38z"
				fill="#bebed0"
			/>
			<path
				d="M911.97 535.74c-.53 1.06-1.1 2.16-1.75 3.31-4.95 9-12.89 20.33-14.28 21.8-2.12 2.26-3.81 17.5-3.54 24.86s-2.81 41.08-14.67 58.58c-6.07 9-7.44 21.25-7.34 31.11a100.24 100.24 0 0 0 .59 10c.44 4.07 1 6.61 1 6.61l-18.92 6.63h-22.77l-15.67-4.66-4.1-11.44s1.37-.22 4.45-.83 7.88-1.63 14.74-3.25a17.78 17.78 0 0 0 14.13-16.1l9.59-67.07s2.83-16.95-1.83-28.65a23 23 0 0 1-1.12-13.69 21.84 21.84 0 0 1 3-7.22s3.66-2.88 9.18-6.69c2.44-1.68 5.27-3.54 8.31-5.42 13.36-8.27 30.93-16.71 39.35-10.56a10.89 10.89 0 0 1 3.88 5.59c.34 1.16-.61 3.79-2.23 7.09z"
				fill="#a5636d"
			/>
			<path
				d="M871.93 692.02l-18.92 6.63h-22.72l-15.67-4.66-4.1-11.44s1.37-.22 4.45-.83a8.35 8.35 0 0 0 2.66 7.39 8.91 8.91 0 0 0 5.64 2.12l7.17.23c1.25 0 2.51.07 3.76.07a113.75 113.75 0 0 0 36.78-6.12c.44 4.07.95 6.61.95 6.61z"
				opacity={0.1}
			/>
			<path
				d="M830.43 693.16l-7.16-.24a9 9 0 0 1-5.65-2.12c-1.82-1.62-3.39-4.42-2.37-9.13 0 0-16-3.63-20.13-1.23s-2.11 15.67 9.46 18.92c11.33 3.17 53.57 7.83 65.73 5.93l.77-.14c11-2.26 0-18.08 0-18.08a113.46 113.46 0 0 1-40.65 6.09z"
				fill="#bebed0"
			/>
			<path
				d="M934.4 533.44c-6.85 2.39-16.91 5.56-22.43 5.69a10.06 10.06 0 0 1-1.71-.08c-3.86-.53-15.79.32-26.73 1.3-4.39.39-8.61.8-12.1 1.16-5.2.54-8.78.93-8.78.93v-3.39c2.44-1.68 5.27-3.54 8.31-5.42 13.36-8.27 30.93-16.71 39.35-10.56 11.85-5.72 23.87-8.44 27.28 1.71.4 1.29-1.04 4.66-3.19 8.66z"
				opacity={0.1}
			/>
			<path
				d="M967.27 454.57c-.19 5.07-2.09 18.23-15.71 31.53-17.36 16.95-10 41.29-10 41.29s-20.7 8.13-29.63 8.35a10.06 10.06 0 0 1-1.71-.08c-5.36-.75-26.64 1.22-38.87 2.46-5.2.54-8.78.93-8.78.93v-72l95.93-23.29 8.69 8.65a16 16 0 0 1 .08 2.16z"
				fill="#5c5c8e"
			/>
			<g opacity={0.1}>
				<path d="M864.19 538.16l-1.58.17v.76s3.58-.39 8.78-.93c8.78-.89 22.19-2.14 31.06-2.51-6.14-.56-26.42 1.31-38.26 2.51zM967.23 452.45l-8.69-8.66-5.79 1.45 7.28 7.25a16 16 0 0 1 0 2.17c-.19 5.06-2.09 18.23-15.71 31.53-17.36 16.94-10 41.29-10 41.29s-17.13 6.72-26.94 8.11a24.73 24.73 0 0 1 2.8.15 10 10 0 0 0 1.71.09c8.93-.22 29.63-8.35 29.63-8.35s-7.4-24.35 10-41.29c13.62-13.3 15.52-26.47 15.71-31.53a16 16 0 0 0 0-2.21z" />
			</g>
			<path d="M775.57 403.71s-29-20.12-31.13-2 31.13 15.53 31.13 15.53z" fill="#a5636d" />
			<path
				d="M825.57 390.37s-15.69 10.38-24.37 9.74c0 0-23.72 3.18-26.48 1.59s-4.44 23-4.44 23l39-2.75 25-3.82s12.5-7.62 12.5-14.19-21.21-13.57-21.21-13.57z"
				fill="#f7cddd"
			/>
			<path
				d="M825.57 390.37s-15.69 10.38-24.37 9.74c0 0-23.72 3.18-26.48 1.59s-4.44 23-4.44 23l39-2.75 25-3.82s12.5-7.62 12.5-14.19-21.21-13.57-21.21-13.57z"
				opacity={0.05}
			/>
			<path d="M802.56 442.73s-35.27-1.46-27.37 15 34.63-3.52 34.63-3.52z" fill="#a5636d" />
			<path d="M838.04 407.74s-28.59-21.39-24.56-47.44 24.56 19.94 24.56 19.94z" fill="#5c5c8e" />
			<path
				d="M830.14 289.64a36.18 36.18 0 0 1-10.17 25.11 34 34 0 0 1-5.22 4.45 37.29 37.29 0 0 1-11.86 5.48 37.68 37.68 0 0 1-5.13.91c-1.24.12-2.49.19-3.76.19a35.26 35.26 0 0 1-11.91-2 36.14 36.14 0 1 1 48.05-34.1z"
				fill="#a5636d"
			/>
			<path
				d="M967.27 454.57c-3.24.6-7.24 1.68-7.24 3.36 0 2.83-45.18 18.08-45.18 18.08s1.69 3.94-2.82 10.72-41.23 45.74-41.23 45.74l.12 1.16.47 4.49 2.24 21.46s-14.12-5.08-18.64-4.52c-1.46.19-3-.75-4.51-2.1a21.84 21.84 0 0 1 3-7.22s3.66-2.88 9.18-6.69v-72l95.93-23.29 8.69 8.65a16 16 0 0 1-.01 2.16z"
				opacity={0.1}
			/>
			<path
				d="M971.33 450.59s-11.3 1.12-11.3 3.95-45.18 18.08-45.18 18.08 1.69 3.94-2.82 10.72-41.23 45.75-41.23 45.75l2.83 27.1s-14.12-5.08-18.64-4.52c-2 .25-4.25-1.61-6.1-3.78a39.34 39.34 0 0 1-4.07-5.81s5.09-21.47-1.69-26.55 7.34-42.35 7.34-42.35 6.38-26.5 4.5-37.87a13.64 13.64 0 0 0-.54-2.24c0-.08-.05-.17-.08-.25-4-10.86-47.36-102-47.36-102a65.48 65.48 0 0 1 .54-7.73c.09-.71.21-1.45.34-2.2a37.28 37.28 0 0 1 .88-4 25 25 0 0 1 .82-2.49c1.34-3.44 3.39-6.09 6.45-6.15 0 0 3.39-3.75 11.34-4.77 5.82-.76 14.13 0 25.38 4.77 26.53 11.28 32.75 11.86 32.75 11.86l13.33 17.5 2.74 3.59a345.89 345.89 0 0 1 27.21 41.3c4.44 8 10.73 17.29 18.27 22.88 15.25 11.33 24.29 45.21 24.29 45.21z"
				fill="#f7cddd"
			/>
			<path
				d="M872.35 385.29s37.7 9.32 52.31 32.82zM884 426.58s7.13 47.87 5.15 51.47-5.15-51.47-5.15-51.47zM881.45 451.15c-2.74 3.59-13.87 31.34-13.87 31.34l3.21 46.6 2.83 27.1s-14.11-5.08-18.63-4.52c-2 .25-4.26-1.61-6.1-3.78 2.93-15.87 9.2-49.08 10.33-49.72 1.49-.85 9.12-27.53 9.52-35s11-24.12 11-24.12 4.47 8.51 1.71 12.1zM870.8 405.41c-.7 2.11-1.78 14.4-1.78 14.4-.78 10.82-9 14.36-14.05 15.5a13.64 13.64 0 0 0-.54-2.24c-3.39-9.59-47.44-102.21-47.44-102.21a60.85 60.85 0 0 1 1.76-13.94c9.59-2.82 24.77 1.52 24.77 1.52 4.39-.58 18.71 27.89 18.71 27.89s9.54 21.8 10.59 24.77 0 7.84.42 9.54 4.88 3.16 5.51 5.5.22 7 .64 7.83 2.12 9.32 1.41 11.44z"
				opacity={0.1}
			/>
			<path
				d="M867.41 403.71c-.7 2.12-1.78 14.4-1.78 14.4-.64 9-6.44 13-11.28 14.71a23.64 23.64 0 0 1-6.78 1.35l-6.81 5.92-31.45 23.15s-11.72-21.67-8.54-21.79 21.52-15.52 21.52-15.52c5.61-3 11.23-13 13.84-18.14a15.85 15.85 0 0 1-.34-1.86c-1.13-9.59-24.85-46.31-24.85-46.31s-9.17-10.79-12.74-30.78c-.1-.46-.17-.93-.26-1.41a14.34 14.34 0 0 1-.18-1.88c-.43-7.69 5.17-10.49 11.81-11.15a47.4 47.4 0 0 1 10.4.32 75.29 75.29 0 0 1 10.17 2c2.84-.38 9.84 11.43 14.43 19.8 2.47 4.54 4.25 8.08 4.25 8.08s9.54 21.81 10.59 24.77 0 7.85.42 9.54 4.88 3.17 5.51 5.51.22 7 .64 7.83 2.14 9.34 1.43 11.46z"
				fill="#f7cddd"
			/>
			<path
				d="M903.89 354.85c-6 6.13-15.69 6.15-23.47 3s-14.37-8.79-21.58-13.18c-4.68-2.86-9.64-5.2-14.25-8.15-.68-.44-1.34-.88-2-1.34-5.32-3.76-9.93-8.59-15.44-12a24 24 0 0 0-12.4-4 14.1 14.1 0 0 0-5.91 1.24 8 8 0 0 0-1 .49 25.5 25.5 0 0 0-5 3.75c-1.56 1.4-3.05 2.89-4.69 4.2-.1-.46-.17-.93-.26-1.41a14.34 14.34 0 0 1-.18-1.88c-1.24.12-2.49.19-3.76.19a35.26 35.26 0 0 1-11.91-2c0-.15 0-.3-.09-.45-1.35-7.12-3.79-14.66-9.52-18.66-3.32-2.32-8.62-3.27-13.22-5a36.14 36.14 0 1 1 68.1 3.91c5.82-.76 14.13 0 25.38 4.77 26.53 11.28 32.75 11.86 32.75 11.86l13.33 17.5c-1.44 2.2-3.07 4.37-3.22 6.94-.25 4.71 4.34 8 8.34 10.22z"
				opacity={0.1}
			/>
			<path
				d="M772.47 301.24c5.73 4 8.17 11.53 9.53 18.64.42 2.22.82 4.56 2.18 6.32 3 3.94 9.16 2.83 13.13 0s7.1-7.12 11.53-9.12c5.88-2.66 12.8-.72 18.31 2.73s10.12 8.28 15.44 12c5.15 3.63 10.89 6.22 16.25 9.49 7.21 4.39 13.8 10.06 21.58 13.18s17.5 3.11 23.46-3c-4-2.22-8.59-5.5-8.28-10.26s5.85-8.31 5.48-13.19-6.11-6.79-10.23-9.19c-8.6-5-12.27-16-14.11-26.15-1.43-7.94-2.61-16.81-8.54-21.91-3.83-3.28-9-4.35-12.86-7.6-3.65-3.09-5.68-7.76-8-12.07-3.83-7.17-8.86-13.84-15.51-18.13s-15.11-6-22.41-3.06c-2.8 1.11-5.35 2.83-8.11 4-6.88 3-14.75 2.57-21.56 5.7-8.39 3.86-13.84 12.38-18.83 20.47-4.22 6.93-12.59 19.15-10.22 28.15 2.36 9.15 15.55 8.66 21.77 13z"
				fill="#4c3e42"
			/>
			<g opacity={0.1}>
				<path d="M901.07 327.48a6.31 6.31 0 0 0-.19-1.1c-1.52 2.39-3.41 4.71-3.59 7.51a6.81 6.81 0 0 0 .16 1.93c1.69-2.69 3.86-5.22 3.62-8.34zM882.11 347.18c-7.78-3.12-14.36-8.79-21.57-13.18-5.37-3.27-11.11-5.86-16.26-9.49-5.32-3.76-9.93-8.59-15.44-12s-12.42-5.39-18.31-2.74c-4.43 2-7.55 6.25-11.53 9.13s-10.08 4-13.13 0c-1.36-1.76-1.76-4.1-2.18-6.32-1.35-7.11-3.8-14.64-9.52-18.64-6.23-4.35-19.42-3.86-21.81-13a14.2 14.2 0 0 1-.31-5c-1.53 4.08-2.32 8.18-1.39 11.75 2.4 9.18 15.59 8.69 21.81 13 5.73 4 8.17 11.54 9.53 18.65.42 2.22.82 4.56 2.17 6.32 3 3.94 9.16 2.83 13.14-.05s7.09-7.12 11.53-9.12c5.88-2.65 12.8-.71 18.31 2.74s10.12 8.28 15.44 12c5.15 3.64 10.89 6.22 16.25 9.49 7.21 4.4 13.8 10.07 21.58 13.19s17.5 3.1 23.46-3a28.72 28.72 0 0 1-4.37-2.89c-5.42 1.99-11.89 1.37-17.4-.84z" />
			</g>
			<path
				d="M705.12 415.58l80-29.88a7.6 7.6 0 0 1 9.79 4.46 7.61 7.61 0 0 1-4.47 9.79l-80 29.89-17.14-1.72z"
				fill="#5c5c8e"
			/>
			<path
				d="M792.48 387.76a7.62 7.62 0 0 1-4.47 9.8l-80 29.88-12.88-1.29-1.85 2 17.14 1.72 80-29.89a7.61 7.61 0 0 0 4.47-9.79 7.58 7.58 0 0 0-3.11-3.8 8.28 8.28 0 0 1 .7 1.37z"
				fill="#fff"
				opacity={0.1}
			/>
			<path fill="#efc8c4" d="M705.12 415.58l5.33 14.26-14.07-1.41-3.08-.31 4.21-4.46 7.61-8.08z" />
			<path
				d="M697.5 423.66a3.05 3.05 0 0 1 .82.9 1.29 1.29 0 0 1 0 1.39 3.13 3.13 0 0 1-.78.55 2.55 2.55 0 0 0-1.14 1.93l-3.08-.31z"
				fill="#727a9c"
			/>
			<path
				d="M635.29 261.07l-13.49-6.58a1.63 1.63 0 0 1-.75-2.18l1.43-2.94a1.62 1.62 0 0 1 2.18-.75l9.09 4.43 9.49-19.46a1.64 1.64 0 0 1 2.18-.76l2.94 1.44a1.62 1.62 0 0 1 .75 2.18l-11.64 23.87a1.63 1.63 0 0 1-2.18.75zM664.76 345.24l-13.49-6.58a1.63 1.63 0 0 1-.75-2.18l1.43-2.94a1.64 1.64 0 0 1 2.19-.75l9.08 4.43 9.48-19.48a1.64 1.64 0 0 1 2.18-.76l2.93 1.44a1.63 1.63 0 0 1 .76 2.18l-11.64 23.87a1.65 1.65 0 0 1-2.19.75zM651.53 303.75l-13.49-6.58a1.64 1.64 0 0 1-.76-2.18l1.44-2.94a1.62 1.62 0 0 1 2.18-.75l9.09 4.43 9.49-19.49a1.63 1.63 0 0 1 2.18-.75l2.94 1.43a1.65 1.65 0 0 1 .75 2.19L653.7 303a1.63 1.63 0 0 1-2.18.75zM677.56 383.24l-13.49-6.58a1.63 1.63 0 0 1-.75-2.18l1.43-2.94a1.63 1.63 0 0 1 2.18-.75l9.09 4.43 9.49-19.46a1.65 1.65 0 0 1 2.19-.76l2.93 1.44a1.62 1.62 0 0 1 .75 2.18l-11.63 23.87a1.65 1.65 0 0 1-2.19.75zM173.22 641.6s5.95 7.78-2.74 19.52-15.87 21.66-13 29c0 0 13.12-21.81 23.79-22.11s3.69-13.29-8.05-26.41z"
				fill="#3acc6c"
			/>
			<path
				d="M173.22 641.6a9.59 9.59 0 0 1 1.22 2.44c10.41 12.24 16 23.66 5.95 24-9.33.26-20.52 16.94-23.19 21.15a7.68 7.68 0 0 0 .31 1s13.12-21.81 23.79-22.11 3.66-13.36-8.08-26.48z"
				opacity={0.1}
			/>
			<path d="M184.28 651.52c0 2.73-.31 5-.69 5s-.68-2.22-.68-5 .38-1.45.76-1.45.61-1.29.61 1.45z" fill="#ffd037" />
			<path
				d="M188.07 654.78c-2.4 1.31-4.5 2.11-4.68 1.77s1.62-1.66 4-3 1.45-.36 1.63 0 1.46-.08-.95 1.23z"
				fill="#ffd037"
			/>
			<path
				d="M141.8 641.6s-5.94 7.78 2.75 19.52 15.86 21.66 13 29c0 0-13.11-21.81-23.79-22.11s-3.7-13.29 8.04-26.41z"
				fill="#3acc6c"
			/>
			<path
				d="M141.8 641.6a9.81 9.81 0 0 0-1.21 2.44c-10.42 12.24-16 23.66-5.95 24 9.32.26 20.51 16.94 23.19 21.15a7.72 7.72 0 0 1-.32 1s-13.11-21.9-23.81-22.2-3.64-13.27 8.1-26.39z"
				opacity={0.1}
			/>
			<path d="M130.75 651.52c0 2.73.3 5 .68 5s.69-2.22.69-5-.38-1.45-.76-1.45-.61-1.29-.61 1.45z" fill="#ffd037" />
			<path
				d="M126.95 654.78c2.41 1.31 4.5 2.11 4.68 1.77s-1.62-1.66-4-3-1.46-.36-1.64 0-1.44-.08.96 1.23z"
				fill="#ffd037"
			/>
			<ellipse cx={157.52} cy={740.06} rx={62.19} ry={9.54} fill={primaryColor} opacity={0.1} />
			<path
				d="M189.52 679.62l-.3 2.43-.41 3.43-.18 1.43-.41 3.43-.19 1.43-.41 3.43-4.76 39c-.43 3.48-6.12 6.2-13 6.2h-24.71c-6.87 0-12.55-2.72-13-6.2l-4.76-39-.42-3.43-.17-1.43-.43-3.43-.17-1.43-.42-3.43-.3-2.43c-.23-2 2.84-3.64 6.73-3.64h50.59c3.9 0 6.97 1.67 6.72 3.64z"
				fill="#65617d"
			/>
			<path
				fill="#9d9cb5"
				d="M189.23 682.05l-.42 3.43h-62.59l-.41-3.43h63.42zM188.64 686.91l-.42 3.43h-61.4l-.42-3.43h62.24zM188.04 691.77l-.42 3.43h-60.21l-.42-3.43h61.05z"
			/>
		</svg>
	);
};

UndrawToDoList.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawToDoList;
