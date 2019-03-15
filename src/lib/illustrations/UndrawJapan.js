import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawJapan = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1145 730.47" style={style} {...props}>
			<defs>
				<linearGradient
					id="prefix__a"
					x1={824.06}
					y1={721.01}
					x2={891.52}
					y2={721.01}
					gradientTransform="rotate(14.97 864.386 720.187)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<path
				d="M1145 467.74a250 250 0 0 1-6.85 58.43 233.82 233.82 0 0 1-15.77 45c-1.13 2.41-2.29 4.78-3.5 7.12a150 150 0 0 1-23.32 80.62c-26.26 41.36-72.13 68.77-124.32 68.77H218.17a185.45 185.45 0 0 1-98.17-28 189.9 189.9 0 0 1-59.59-58.73 190.94 190.94 0 0 1-30.29-103.49q-4.8-8.7-8.88-18A238.42 238.42 0 0 1 3.5 456.9 253.21 253.21 0 0 1 1 421.23c0-66.94 26-126.61 66.65-165.36 30.25-28.86 68.61-46.11 110.33-46.11 3.46 0 6.89.13 10.3.36q2.82-5.65 5.85-11.2c55.7-102 165-176.43 295.22-194a444.64 444.64 0 0 1 59.39-4q18.69 0 36.94 1.53c81.86 6.78 156.45 35.92 216.06 80.5 1.79 1.33 3.57 2.69 5.33 4.05 25.44-16.91 54.73-26.56 85.91-26.56a150.08 150.08 0 0 1 15.93.85c76.49 8.15 139 74.46 156.28 161.67a251.39 251.39 0 0 1 4.77 49q0 11.19-1 22.11a184.34 184.34 0 0 1 16.21 15.23c36.72 38.74 59.83 95.36 59.83 158.44z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				d="M119 698.77q6.51 4.05 13.38 7.56L584 435.71l6 11-263 280h66.5l219.47-245 8 7-53.41 238h75l52.44-205h19l74.37 205h72l-53.41-238 8-7 210 234.41a147.26 147.26 0 0 0 41.86-25.81L838 446.71l6-11 272.35 163.2a153.29 153.29 0 0 0 1.53-21.57c1.21-2.34 2.37-4.71 3.5-7.12a233.82 233.82 0 0 0 15.77-45c.84-3.48 1.58-7 2.27-10.57L844 402.71v-27l291.21 25.08c-9.91-36.08-27.71-67.89-51-92.49l-.38-.39L844 355.71v-26l219-113.25c-9.62-43.25-30.43-81.05-58.49-108.71L815 319.34l-8-7 56.11-250a158.18 158.18 0 0 0-57 23.75c-1.76-1.36-3.54-2.72-5.33-4.05q-5.91-4.42-12-8.63l-74.72 206h-19L625.29 6.79q-19.95-3.56-40.6-5.3Q567.99.11 550.92 0L621 312.34l-8 7L363.43 40.72c-53.61 25.35-99.87 61.42-135.23 105l355.8 184v26L68.65 253c-.67.62-1.34 1.24-2 1.87C26.03 293.62 0 353.29 0 420.23c0 1.93 0 3.86.07 5.77L584 375.71v27l-541.25 205A190.21 190.21 0 0 0 119 698.78z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				fill={primaryColor}
				opacity={0.1}
				d="M828.48 727.74h-89l-25.69-242.86-.38-3.51v-.01l-2.18-20.64 89.03-.63 2.73-.02.19 1.98 25.3 265.69z"
			/>
			<path
				fill={primaryColor}
				opacity={0.1}
				d="M715.19 483.45l-1.4 1.43-239.17 242.86H352.75L655.7 413.58l57.71 67.78 1.78 2.09z"
			/>
			<path
				d="M1079.13 683.72a146.44 146.44 0 0 1-106.81 46.24H219.25A186.25 186.25 0 0 1 89.6 677.5l1.08-.18c109.89-17.55 282.38-28.86 476.32-28.86 214.71 0 403.12 13.86 509.42 34.72.91.17 1.81.35 2.71.54z"
				fill="#e8eaf2"
			/>
			<path
				d="M1079.13 684.23a146.44 146.44 0 0 1-106.81 46.24H219.25A186.25 186.25 0 0 1 89.6 678l1.08-.18c109.89-17.59 282.38-28.86 476.32-28.86 214.71 0 403.12 13.86 509.42 34.72.91.17 1.81.35 2.71.55z"
				fill={primaryColor}
				opacity={0.3}
			/>
			<circle cx={703} cy={400.53} r={159} fill="#f86d70" />
			<path
				d="M856.5 678.47l-8.13 29.93a26.52 26.52 0 0 1-25.59 19.57h-504a26.52 26.52 0 0 1-25.59-19.57l-8.13-29.93c-7.08-26.08 11.44-52.71 38.44-53.92.66 0 1.32-.05 2-.05h490.61c.67 0 1.33 0 2 .05 26.97 1.21 45.49 27.84 38.39 53.92z"
				fill="#3f3d56"
			/>
			<path
				d="M807.68 638.12c0 32.33-109.72 58.54-245.06 58.54s-245.06-26.21-245.06-58.54c0-4.7 2.31-9.26 6.67-13.62h476.78c4.35 4.36 6.67 8.92 6.67 13.62z"
				opacity={0.1}
			/>
			<path
				d="M874.39 504.85c0-23.88-21.95-43.24-49-43.24s-49 19.36-49 43.24c-27.06 0-49 19.37-49 43.25s21.95 43.25 49 43.25a53.88 53.88 0 0 0 24.51-5.8 54.67 54.67 0 0 0 49 0 53.88 53.88 0 0 0 24.51 5.8c27.07 0 49-19.37 49-43.25s-21.91-43.25-49.02-43.25z"
				fill={primaryColor}
			/>
			<path
				d="M874.39 504.85c0-23.88-21.95-43.24-49-43.24s-49 19.36-49 43.24c-27.06 0-49 19.37-49 43.25s21.95 43.25 49 43.25a53.88 53.88 0 0 0 24.51-5.8 54.67 54.67 0 0 0 49 0 53.88 53.88 0 0 0 24.51 5.8c27.07 0 49-19.37 49-43.25s-21.91-43.25-49.02-43.25z"
				opacity={0.1}
			/>
			<path
				d="M758.57 285.98a48.89 48.89 0 0 0-3.24-17.55 49.11 49.11 0 0 0-16.4-95.4 49.11 49.11 0 0 0-96.87-11.42h-1.35a49.1 49.1 0 0 0-97.35-9.14 49.1 49.1 0 0 0-79.44 38.61 49.1 49.1 0 0 0-26.87 90.15 49.42 49.42 0 0 0-.95 9.65 49.11 49.11 0 1 0 24.55 91.63 49.11 49.11 0 0 0 49.11 0 49.09 49.09 0 0 0 58-6.58c.85 0 1.7.07 2.56.07a48.91 48.91 0 0 0 24.56-6.59 48.86 48.86 0 0 0 36.28 5.15 49.11 49.11 0 0 0 53.75 3 49.11 49.11 0 0 0 49.11 0 49.11 49.11 0 1 0 24.55-91.63zm-224.26 4.91a48.85 48.85 0 0 0-.42-6.32c1.26-.59 2.5-1.21 3.7-1.91a46.63 46.63 0 0 0 6.11 3 50.26 50.26 0 0 0-6.82 5.31c-.85-.06-1.71-.08-2.57-.08z"
				fill={primaryColor}
			/>
			<path
				d="M736.2 421.3a44.25 44.25 0 0 0-88.49 0 44.25 44.25 0 1 0 22.12 82.56 44.18 44.18 0 0 0 44.25 0 44.24 44.24 0 1 0 22.12-82.56z"
				fill={primaryColor}
			/>
			<path
				d="M736.2 421.3a44.25 44.25 0 0 0-88.49 0 44.25 44.25 0 1 0 22.12 82.56 44.18 44.18 0 0 0 44.25 0 44.24 44.24 0 1 0 22.12-82.56z"
				opacity={0.1}
			/>
			<path
				d="M758.57 285.98a48.89 48.89 0 0 0-3.24-17.55 49.11 49.11 0 0 0-16.4-95.4 49.11 49.11 0 0 0-96.87-11.42h-1.35a49.1 49.1 0 0 0-97.35-9.14 49.1 49.1 0 0 0-79.44 38.61 49.1 49.1 0 0 0-26.87 90.15 49.42 49.42 0 0 0-.95 9.65 49.11 49.11 0 1 0 24.55 91.63 49.11 49.11 0 0 0 49.11 0 49.09 49.09 0 0 0 58-6.58c.85 0 1.7.07 2.56.07a48.91 48.91 0 0 0 24.56-6.59 48.86 48.86 0 0 0 36.28 5.15 49.11 49.11 0 0 0 53.75 3 49.11 49.11 0 0 0 49.11 0 49.11 49.11 0 1 0 24.55-91.63zm-224.26 4.91a48.85 48.85 0 0 0-.42-6.32c1.26-.59 2.5-1.21 3.7-1.91a46.63 46.63 0 0 0 6.11 3 50.26 50.26 0 0 0-6.82 5.31c-.85-.06-1.71-.08-2.57-.08z"
				opacity={0.1}
			/>
			<path
				d="M721.29 527.43c-3.82-1.52-7.69-3.06-11.77-3.58-.41 0-.82-.08-1.24-.11 0-.42 0-.83.05-1.24.22-5 1.77-10.16 5.27-13.77s8.37-5.39 10.65-9.65a95.64 95.64 0 0 0-25.65-3.85c-2.21 0-4.56 0-6.41 1.26-2.27 1.47-3.25 4.25-4 6.87-2.3 8.68-3.85 17.18-6.48 25.65l-.69.16c-9.3 2-21 .45-25.27-7.92a101.84 101.84 0 0 1 4-12.42c5-12.45 12.66-23.64 20.23-34.73q7.35-10.79 14.72-21.56a210.19 210.19 0 0 0-22.38-5.43c-1.6-.3-3.41-.54-4.74.4a6.2 6.2 0 0 0-1.91 2.92c-7.22 17.72-16.07 37.11-18.58 56.59a45 45 0 0 0-4.33-2.06l-23.26-9.92a8 8 0 0 1-3.24-2.06c-2.12-2.63 0-6.81 3.1-8.21s6.61-1 10-1.3 7.13-1.53 8.39-4.67c1.46-3.61-1.33-7.69-4.74-9.58s-7.42-2.42-11-4a19.55 19.55 0 0 1-10.86-13.73l-5.55-.26c7.32-7 14.91-13.71 23.63-18.86 4.21-2.49 8.67-4.6 12.59-7.53a37.46 37.46 0 0 0 14.4-34.19c-.5-3.76-1.57-7.65-.38-11.25 1-2.93 3.26-5.18 5.49-7.31l20.09-19.22a156.19 156.19 0 0 0-39-3.84c-3.32.1-6.75.32-9.72 1.82-5.42 2.74-8 8.94-10.12 14.63a85 85 0 0 0-3.91 12.34c-1.48 7.1-1.26 14.88-5.27 20.91-3.18 4.78-8.47 7.6-13.22 10.82a74.14 74.14 0 0 0-28.73 38.23c-.32 1-.86 2.28-1.48 3.71-11.77 1-23.3 3.24-34.19 7.82-13.69 5.76-25.64 14.91-37.37 24-12.92 10-26.51 21.19-31.05 36.91-5.05 17.45 2.74 36.59 15.21 49.8 10.2 10.79 23.14 18.39 36.19 25.22 8.53 4.46 9.95 3.55 17.44-2.45l20.14-16.14c5.75-4.6 11.6-9.32 15.51-15.56 5.39-8.59 6.72-19.5 13.25-27.27 8.94-10.65 27.17-11.54 37.12-1.83 2.86 2.8 5.35 6.46 9.25 7.39 1.9.46 4 .2 5.74 1 3.32 1.58 3.82 6 5 9.44 3.25 9.27 14.29 14.12 24 12.73s18.08-7.7 24.65-15c1.79-2 3.56-4.12 6-5.31a15.3 15.3 0 0 1 6.2-1.32 40.87 40.87 0 0 1 20.44 4.53c5.87 3 11 7.45 17.17 9.79 12.21 4.62 25.86.23 37.82-5z"
				fill="#3f3d56"
			/>
			<path
				d="M721.29 527.43c-3.82-1.52-7.69-3.06-11.77-3.58-.41 0-.82-.08-1.24-.11 0-.42 0-.83.05-1.24.22-5 1.77-10.16 5.27-13.77s8.37-5.39 10.65-9.65a95.64 95.64 0 0 0-25.65-3.85c-2.21 0-4.56 0-6.41 1.26-2.27 1.47-3.25 4.25-4 6.87-2.3 8.68-3.85 17.18-6.48 25.65l-.69.16c-9.3 2-21 .45-25.27-7.92a101.84 101.84 0 0 1 4-12.42c5-12.45 12.66-23.64 20.23-34.73q7.35-10.79 14.72-21.56a210.19 210.19 0 0 0-22.38-5.43c-1.6-.3-3.41-.54-4.74.4a6.2 6.2 0 0 0-1.91 2.92c-7.22 17.72-16.07 37.11-18.58 56.59a45 45 0 0 0-4.33-2.06l-23.26-9.92a8 8 0 0 1-3.24-2.06c-2.12-2.63 0-6.81 3.1-8.21s6.61-1 10-1.3 7.13-1.53 8.39-4.67c1.46-3.61-1.33-7.69-4.74-9.58s-7.42-2.42-11-4a19.55 19.55 0 0 1-10.86-13.73l-5.55-.26c7.32-7 14.91-13.71 23.63-18.86 4.21-2.49 8.67-4.6 12.59-7.53a37.46 37.46 0 0 0 14.4-34.19c-.5-3.76-1.57-7.65-.38-11.25 1-2.93 3.26-5.18 5.49-7.31l20.09-19.22a156.19 156.19 0 0 0-39-3.84c-3.32.1-6.75.32-9.72 1.82-5.42 2.74-8 8.94-10.12 14.63a85 85 0 0 0-3.91 12.34c-1.48 7.1-1.26 14.88-5.27 20.91-3.18 4.78-8.47 7.6-13.22 10.82a74.14 74.14 0 0 0-28.73 38.23c-.32 1-.86 2.28-1.48 3.71-11.77 1-23.3 3.24-34.19 7.82-13.69 5.76-25.64 14.91-37.37 24-12.92 10-26.51 21.19-31.05 36.91-5.05 17.45 2.74 36.59 15.21 49.8 10.2 10.79 23.14 18.39 36.19 25.22 8.53 4.46 9.95 3.55 17.44-2.45l20.14-16.14c5.75-4.6 11.6-9.32 15.51-15.56 5.39-8.59 6.72-19.5 13.25-27.27 8.94-10.65 27.17-11.54 37.12-1.83 2.86 2.8 5.35 6.46 9.25 7.39 1.9.46 4 .2 5.74 1 3.32 1.58 3.82 6 5 9.44 3.25 9.27 14.29 14.12 24 12.73s18.08-7.7 24.65-15c1.79-2 3.56-4.12 6-5.31a15.3 15.3 0 0 1 6.2-1.32 40.87 40.87 0 0 1 20.44 4.53c5.87 3 11 7.45 17.17 9.79 12.21 4.62 25.86.23 37.82-5z"
				opacity={0.1}
			/>
			<path
				d="M557.85 404.84c0-24.59-25.9-44.51-57.86-44.51s-57.86 19.9-57.86 44.51c-32 0-57.86 19.92-57.86 44.51s25.9 44.5 57.86 44.5a71.27 71.27 0 0 0 28.93-6 73.08 73.08 0 0 0 57.86 0 71.27 71.27 0 0 0 28.93 6c32 0 57.86-19.92 57.86-44.5s-25.9-44.51-57.86-44.51z"
				fill={primaryColor}
			/>
			<path
				d="M557.85 404.84c0-24.59-25.9-44.51-57.86-44.51s-57.86 19.9-57.86 44.51c-32 0-57.86 19.92-57.86 44.51s25.9 44.5 57.86 44.5a71.27 71.27 0 0 0 28.93-6 73.08 73.08 0 0 0 57.86 0 71.27 71.27 0 0 0 28.93 6c32 0 57.86-19.92 57.86-44.5s-25.9-44.51-57.86-44.51z"
				opacity={0.1}
			/>
			<path
				d="M681.94 656.23l-33.17-15.27c-2.66-1.23-5.61-2.76-6.44-5.58a12.16 12.16 0 0 1 0-4.62 37.91 37.91 0 0 0-4.93-22.82c-2.49-4.27-5.86-8.11-7.35-12.83-3.18-10 3-20.59 3.3-31.13.33-10.26-5-20.13-12.59-27.08-2.25-2.07-4.72-4-6.49-6.45-5.14-7.22-3-17-.56-25.63l.63-.58c.47-.46.12-2.43-.74-5.35a81.28 81.28 0 0 0 26.67-12.66c2.55-1.85 5-3.88 8-5.06 4.12-1.65 8.79-1.46 12.95-3 7.76-2.89 12.07-11 15.68-18.44 8.55-17.59 17.25-35.77 18.33-55.3a42.85 42.85 0 0 0-24.42-8.92c-1.48-.06-3.16 0-4.13 1.16a5.29 5.29 0 0 0-1 2.51 134.41 134.41 0 0 1-15.49 39.6 68.68 68.68 0 0 1-10.55 14.19c-5 5-11.14 8.73-17.18 12.44-5.08 3.11-11.88 6.14-17.65 9.71-4-10.28-7.65-19.66-7.18-21.1a82.19 82.19 0 0 0 .56-48.31c-1.16-3.92-2.64-7.79-3-11.87s.45-8.1.77-12.16c.63-8.05-.6-16.12-.55-24.2.06-10.94 2.46-21.72 4.85-32.4a82 82 0 0 0-20.15-1.08 7.79 7.79 0 0 0-3.79 1c-1.68 1.09-2.31 3.19-2.88 5.11-4.45 14.91-12.52 28.52-17.31 43.33s-5.82 32.16 3.09 44.92c3.17 4.53 7.6 8.63 8.3 14.11.37 2.9-.39 5.81-1.15 8.64-1.35 5.07 20.37 59.55 21.58 64.58 0 .14.08.26.11.39-.68.15-1.37.28-2.06.44a65.72 65.72 0 0 1-15.62 38.45 54.51 54.51 0 0 1-2.59-10.74c-.75-5.5-.68-11.17-2.39-16.45-2.56-7.88-8.74-13.92-14.14-20.19a128.52 128.52 0 0 1-22.69-38.19 93.28 93.28 0 0 1-12.5 3.67c-2.25.5-10 .51-11.22 2.52-1.88 3 6.52 16.95 8.18 20.16 5.85 11.29 15.71 20.11 21.5 31.43a101.55 101.55 0 0 1 5.97 15.59c3.16 10 6.32 20 8.74 30.16-2.9 3-5.19 6.66-7.68 10.07a89.71 89.71 0 0 1-34 28c-1.61.76-3.39 1.61-4.08 3.25a4.36 4.36 0 0 0-.26.87c-5.5-3.88-10.64-8.21-14.22-13.85-1.58-2.5-2.83-5.21-4.55-7.61-5.79-8.07-15.92-11.48-24.21-17-3.5-2.32-6.76-5.07-10.63-6.7-4.25-1.8-8.95-2.14-13.55-2.45-3.77-.26-18.23-3.27-20.09.1-2.64 4.77 5.73 11.74 9.08 13.42 5.57 2.79 11.94 3.5 17.76 5.71a53.72 53.72 0 0 1 14.47 8.84 21.94 21.94 0 0 1 4.9 5c1.44 2.25 2.11 4.9 3.32 7.28 3.88 7.63 12.27 11.12 19.78 15.61a16.67 16.67 0 0 0-5.79 1.31c-5.59 2.54-8.19 8.83-11.83 13.78-3.25 4.39-7.53 7.9-11.11 12s-6.56 9.23-6.29 14.68c.17 3.45 1.56 7.22-.27 10.15 4.21 1.82 9.39 4 13.95 4.55s9.5-.32 12.91-3.39a33.55 33.55 0 0 1 3.39-3.15c2.89-1.93 6.85-1.39 9.94.19s5.64 4.05 8.47 6.08a34.81 34.81 0 0 0 28.19 5.45c2-.48 4.87-.89 4.25-2.81a25.31 25.31 0 0 1-14.59-22.08 17.67 17.67 0 0 1 17.08 6.28c-2.78.12-4.62 3.86-3 6.14a33.14 33.14 0 0 0 26.76-14.52 14 14 0 0 1 19.29 13.68l14.46 7.14c2.27 1.12 4.68 2.27 7.21 2.1s5.11-2.21 4.92-4.73c-.22-2.89-3.69-5.84-1.79-8 3.4 1.52 6 4.52 9.49 5.83s8.63-.44 8.44-4.16a7.08 7.08 0 0 0-1.39-3.41 47.58 47.58 0 0 0-15.21-14.64c-.45-3.27 7-6.86 9.26-4.42l18.32 20.19a21.65 21.65 0 0 0 5 4.46c6.55 3.79 14.73 0 22.29 0 8.18 0 16.55 4.66 24.16 1.69 2-.77 4-2.66 3.43-4.72-.45-1.48-1.94-2.25-3.28-2.91z"
				fill="#3f3d56"
			/>
			<path
				d="M731.44 280.05a40.61 40.61 0 0 0-2.7-14.59 40.85 40.85 0 0 0-13.64-79.35 40.85 40.85 0 0 0-80.57-9.5h-1.12a40.84 40.84 0 0 0-81-7.6 40.83 40.83 0 0 0-66.06 32.11 40.84 40.84 0 0 0-22.36 75 41.65 41.65 0 0 0-.79 8 40.85 40.85 0 1 0 20.42 76.21 40.8 40.8 0 0 0 40.85 0 40.79 40.79 0 0 0 48.23-5.47c.71 0 1.42.05 2.14.05a40.71 40.71 0 0 0 20.42-5.47 40.78 40.78 0 0 0 30.24 4.3 40.82 40.82 0 0 0 44.7 2.52 40.79 40.79 0 0 0 40.84 0 40.84 40.84 0 1 0 20.43-76.21zm-186.52 4.09a41.33 41.33 0 0 0-.35-5.25c1-.5 2.08-1 3.07-1.59a42 42 0 0 0 5.09 2.48 41.11 41.11 0 0 0-5.68 4.41c-.7-.03-1.42-.05-2.13-.05zM870.3 506.05c0-22.55-20.72-40.84-46.29-40.84s-46.28 18.29-46.28 40.84c-25.57 0-46.29 18.29-46.29 40.85s20.72 40.84 46.29 40.84a50.81 50.81 0 0 0 23.14-5.51 51.62 51.62 0 0 0 46.29 0 50.81 50.81 0 0 0 23.14 5.48c25.57 0 46.29-18.28 46.29-40.84s-20.72-40.82-46.29-40.82z"
				fill={primaryColor}
			/>
			<path
				d="M731.44 423.01a40.85 40.85 0 1 0-81.69 0 40.84 40.84 0 1 0 20.42 76.22 40.85 40.85 0 0 0 40.84 0 40.84 40.84 0 1 0 20.43-76.21zM553.09 406.67c0-22.56-23.78-40.84-53.1-40.84s-53.1 18.28-53.1 40.84c-29.32 0-53.09 18.29-53.09 40.84s23.77 40.85 53.09 40.85a65.35 65.35 0 0 0 26.55-5.48 67.06 67.06 0 0 0 53.1 0 65.35 65.35 0 0 0 26.55 5.48c29.32 0 53.09-18.29 53.09-40.85s-23.77-40.84-53.09-40.84z"
				fill={primaryColor}
			/>
			<path
				d="M453.7 526.48a43.57 43.57 0 1 0-87.13 0 43.57 43.57 0 1 0 21.78 81.29 43.55 43.55 0 0 0 43.57 0 43.56 43.56 0 1 0 21.78-81.29z"
				fill={primaryColor}
			/>
			<path
				d="M453.7 526.48a43.57 43.57 0 1 0-87.13 0 43.57 43.57 0 1 0 21.78 81.29 43.55 43.55 0 0 0 43.57 0 43.56 43.56 0 1 0 21.78-81.29z"
				opacity={0.1}
			/>
			<path
				d="M450.98 527.84a40.85 40.85 0 1 0-81.69 0 40.84 40.84 0 1 0 20.42 76.21 40.87 40.87 0 0 0 40.85 0 40.84 40.84 0 1 0 20.42-76.21z"
				fill={primaryColor}
			/>
			<path
				d="M578.95 195.64a39.48 39.48 0 0 1 39.1 34 39.48 39.48 0 1 0-78.55-5.41 40.77 40.77 0 0 0 .38 5.45 39.49 39.49 0 0 1 39.07-34.04zM660.02 266.13a39.49 39.49 0 0 1 21.34 47.25 39.48 39.48 0 1 0-69.15-37.73 40.08 40.08 0 0 0-1.92 5.11 39.48 39.48 0 0 1 49.73-14.63zM544.3 296.08a39.49 39.49 0 0 1 21.34 47.25 40.85 40.85 0 0 0 2.62-4.79 39.48 39.48 0 0 0-71.76-32.94 40.08 40.08 0 0 0-1.92 5.11 39.48 39.48 0 0 1 49.72-14.63zM503.2 422.56a23.65 23.65 0 0 1 4.16 30.77 24.07 24.07 0 0 0 2.33-2.3 23.65 23.65 0 0 0-35.56-31.19 23.28 23.28 0 0 0-2 2.61 23.65 23.65 0 0 1 31.07.11zM874.87 531.48a23.63 23.63 0 0 1 4.17 30.75 24 24 0 0 0 2.32-2.3 23.643 23.643 0 1 0-35.55-31.18 23.18 23.18 0 0 0-2 2.6 23.64 23.64 0 0 1 31.06.13zM411.43 531.14a23.64 23.64 0 0 1 31 2.29 22.94 22.94 0 0 0-1.77-2.75 23.65 23.65 0 0 0-37.86 28.34 24.23 24.23 0 0 0 2.13 2.47 23.65 23.65 0 0 1 6.5-30.35zM686.44 442.64a23.65 23.65 0 0 1 31 2.29 23.3 23.3 0 0 0-1.77-2.75 23.65 23.65 0 1 0-37.86 28.34 23.24 23.24 0 0 0 2.14 2.48 23.66 23.66 0 0 1 6.49-30.36z"
				opacity={0.1}
			/>
			<path
				d="M643.55 619.62c-2.62-2-2.29-6.83-2.29-6.83s4.57-1.52 7.19.51 3.64 5.1 2.29 6.84-4.57 1.52-7.19-.52zM652.55 672.62c-2.62-2-2.29-6.83-2.29-6.83s4.57-1.52 7.19.51 3.64 5.1 2.29 6.84-4.57 1.52-7.19-.52zM643.55 677.62c-2.62-2-2.29-6.83-2.29-6.83s4.57-1.52 7.19.51 3.64 5.1 2.29 6.84-4.57 1.52-7.19-.52zM705.55 638.62c-2.62-2-2.29-6.83-2.29-6.83s4.57-1.52 7.19.51 3.64 5.1 2.29 6.84-4.57 1.52-7.19-.52zM447.87 483.98c2.05-2.6 6.86-2.22 6.86-2.22s1.46 4.59-.6 7.19-5.13 3.59-6.86 2.22-1.46-4.59.6-7.19z"
				fill={primaryColor}
			/>
			<circle cx={478} cy={266.47} r={25} fill={primaryColor} opacity={0.1} />
			<path
				d="M153.5 692.06a6 6 0 0 1 4.23-3.72 12.17 12.17 0 0 1 3.11-.29c6.33.11 11.13 3 16.91 4.33 5.52 1.31 11.81 1.24 17.86 1.14a59.93 59.93 0 0 0 11.33-.9c6.05-1.28 10-4.3 13.68-7.16M859.5 682.06a6 6 0 0 1 4.23-3.72 12.17 12.17 0 0 1 3.11-.29c6.33.11 11.13 3 16.91 4.33 5.52 1.31 11.81 1.24 17.86 1.14a59.93 59.93 0 0 0 11.33-.9c6-1.28 10-4.3 13.68-7.16M915.5 704.06a6 6 0 0 1 4.23-3.72 12.17 12.17 0 0 1 3.11-.29c6.33.11 11.13 3 16.91 4.33 5.52 1.31 11.81 1.24 17.86 1.14a59.93 59.93 0 0 0 11.33-.9c6-1.28 10-4.3 13.68-7.16M868.5 699.11a2.09 2.09 0 0 1 1.54-1 5.28 5.28 0 0 1 1.14-.08c2.31 0 4.06.83 6.17 1.22a34.79 34.79 0 0 0 6.52.33 27.76 27.76 0 0 0 4.13-.26 13 13 0 0 0 5-2M878.5 688.11a2.09 2.09 0 0 1 1.54-1 5.28 5.28 0 0 1 1.14-.08c2.31 0 4.06.83 6.17 1.22a34.79 34.79 0 0 0 6.52.33 27.76 27.76 0 0 0 4.13-.26 13 13 0 0 0 5-2M254.5 670.23a2.2 2.2 0 0 1 1.61-1 6.4 6.4 0 0 1 1.18-.07c2.4 0 4.23.76 6.42 1.12a41.84 41.84 0 0 0 6.79.3 33.29 33.29 0 0 0 4.3-.24 14.41 14.41 0 0 0 5.2-1.86M225.5 671.23a2.2 2.2 0 0 1 1.61-1 6.4 6.4 0 0 1 1.18-.07c2.4 0 4.23.76 6.42 1.12a41.84 41.84 0 0 0 6.79.3 33.29 33.29 0 0 0 4.3-.24 14.41 14.41 0 0 0 5.2-1.86M212.5 712.06a6 6 0 0 1 4.23-3.72 12.17 12.17 0 0 1 3.11-.29c6.33.11 11.13 3 16.91 4.33 5.52 1.31 11.81 1.24 17.86 1.14a59.93 59.93 0 0 0 11.33-.9c6.05-1.28 10-4.3 13.68-7.16"
				fill={primaryColor}
				opacity={0.3}
			/>
			<path
				d="M791.03 656.08a2 2 0 0 0-.07 1.13c.23.75 1.15 1 1.94 1.1a39.79 39.79 0 0 0 5.46.13l16.48-.32a1.42 1.42 0 0 0 .74-.14 1.57 1.57 0 0 0 .49-.59 18.87 18.87 0 0 0 2.14-6.65 1.8 1.8 0 0 0-.07-1 1.9 1.9 0 0 0-1.14-.82 67.85 67.85 0 0 0-7.13-2.26 38.12 38.12 0 0 1-4.66-1.35c-2-.78-4-2.55-6-2.92-1.79-.31-2.08 1.07-2.65 2.47-1.59 3.88-4.4 7.16-5.53 11.22z"
				fill="#fabdbd"
			/>
			<path
				d="M880.31 763.43c-.41-1.91-2.1-3.25-3.71-4.38s-3.34-2.27-5.05-3.32a34.92 34.92 0 0 0 7.63-5.63 17.86 17.86 0 0 0 3.54-4.08 6.92 6.92 0 0 0 .87-5.2 7.18 7.18 0 0 0-4.41-4.43 20.35 20.35 0 0 0-6.36-1.12c-1.55-.1-3.11-.19-4.66-.26a27.51 27.51 0 0 0 2.88-.71 48.79 48.79 0 0 0 10-4.59 4.42 4.42 0 0 0 2.38-2.41 2.81 2.81 0 0 0-1.17-2.81 5.53 5.53 0 0 0-3-1 10.74 10.74 0 0 0-8 3 12.57 12.57 0 0 1-2.27 2 2.29 2.29 0 0 1-3.16-.52 3.18 3.18 0 0 1-.35-1.43l.06-.05a10.32 10.32 0 0 0 3.25-9.09 24.7 24.7 0 0 0-2.47-7.25 20.29 20.29 0 0 1 5.29-1.15 4.63 4.63 0 0 0 1.44-.25 3.42 3.42 0 0 0 1.74-2.38 15.53 15.53 0 0 1 .84-2.87 10.46 10.46 0 0 0 13.7-2.21 10.92 10.92 0 0 0 5.59-1.25c2.05-1.2 3.9-4.11 2.68-6.48a9.76 9.76 0 0 0-1.77-1.92 10.55 10.55 0 0 1-1.88-3.39c-2.19-5.51-6.85-7.66-12.52-8.52a25.51 25.51 0 0 0-7.7-.2 30.37 30.37 0 0 0-5.74 1.66l-.9.34c-.07-1.49-.31-3-.37-4.17a3.14 3.14 0 0 1 .15-1.46 3.37 3.37 0 0 1 2-1.5l11.29-4.82a23.52 23.52 0 0 1 3.71-1.35c3.69-.88 7.81 0 11.17-1.74a7.79 7.79 0 0 0 3.93-5c.38-1.53.13-3.42-1.23-4.23s-3.24-.12-4.71.62a114.63 114.63 0 0 1-14.8 6.65c-4.86 1.64-10 2.62-14.53 5a8.57 8.57 0 0 0-2.24 1.51 10.17 10.17 0 0 0-1.68 2.6L858 677c-1.39 2.72-2.77 5.92-1.64 8.7a3.84 3.84 0 0 0-.45.61c-.51.82-.27 1.89-.7 2.61s-2.07 1.43-2.85 2a59.39 59.39 0 0 0-3.16 2.31 75.25 75.25 0 0 0-10.88 10.68 197.25 197.25 0 0 0-13.43 18.66 12.81 12.81 0 0 0-1.87 3.59 6.34 6.34 0 0 0 .1 3.61c-1.63 3.56-4.17 6.68-5.24 10.48l-.65.11c-1.2 3.46-.43 7.45.2 11.07.35 2.06.84 4.31 2.53 5.57a8.62 8.62 0 0 0 3 1.21c1.21.32 2.32.64 3.41 1h-.14c-1.39-.13-3 0-3.83 1.08a4.69 4.69 0 0 0-.7 2L819.09 777a5.13 5.13 0 0 0 .15 3.27 4.67 4.67 0 0 0 2.38 1.86 20.09 20.09 0 0 0 5.54 1.53 4.75 4.75 0 0 0 2.37-.15 1.87 1.87 0 0 0 1.23-1.84c-.16-1.12-1.55-1.65-2-2.67-.65-1.33.41-2.81 1.4-3.9.15-.17.32-.34.5-.52a14.55 14.55 0 0 0 1.59 3.24 2.52 2.52 0 0 0 2.42 1.32q3.48-.78 7-1.48l.45.19a78.09 78.09 0 0 0 11.88 3.91 5.69 5.69 0 0 0 2.35.2 2 2 0 0 0 1.61-1.51c.11-.94-.7-1.72-1.48-2.28a18.79 18.79 0 0 0-4.8-2.41l7.62-1.39a40 40 0 0 1 7.7-.89c3.34.06 7 .85 9.72-1.11a9.81 9.81 0 0 0 3.1-5 7.33 7.33 0 0 0 .49-3.94zM854 734.65h-3.86c.14-1 .21-2 .35-3a1.49 1.49 0 0 1 .31-.85 1.57 1.57 0 0 1 .91-.39l4.75-.93a2.94 2.94 0 0 0-.32-2.3 6.2 6.2 0 0 0 1.17.67 14.23 14.23 0 0 0 1 5.72 2.63 2.63 0 0 0 .76 1.09h.06c-1.71.01-3.42-.01-5.13-.01z"
				transform="translate(-27.5 -84.77)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M844.74 650.98a19.78 19.78 0 0 1 6.22 1.08 7 7 0 0 1 4.29 4.36 6.91 6.91 0 0 1-.86 5.14 18 18 0 0 1-3.47 4 31.37 31.37 0 0 1-8.64 6.12c-1.58.69-3.25 1.16-4.79 1.92-3.29 1.62-5.82 4.43-8.25 7.18a36.76 36.76 0 0 0-6.11 8.33c-.12.23-.25.5-.5.58a1 1 0 0 1-.68-.14l-7-3.31a1.19 1.19 0 0 1-.56-2 53.17 53.17 0 0 1 13.81-16.6 17.38 17.38 0 0 1-15.91.33 6.13 6.13 0 0 1-2.48-2c-1.24-1.91-.48-4.45.46-6.53a46.57 46.57 0 0 1 2.89-5.34c2.57-4.1 8.84-3.73 13.16-3.74q9.18.05 18.42.62z"
				fill="#434175"
			/>
			<path
				d="M835.07 665.37a8.22 8.22 0 0 0-3.29 1.1c1.73-1.17 5.69-.87 7.72-1.07a25.77 25.77 0 0 0 7.6-1.44 82.42 82.42 0 0 0-12.03 1.41z"
				opacity={0.1}
			/>
			<path
				d="M802.9 690.42c-1 1.08-2 2.54-1.38 3.85.48 1 1.84 1.52 2 2.63a1.83 1.83 0 0 1-1.21 1.81 4.52 4.52 0 0 1-2.31.16 19.18 19.18 0 0 1-5.41-1.5 4.45 4.45 0 0 1-2.32-1.82 5.12 5.12 0 0 1-.14-3.22l2.58-14.63a4.55 4.55 0 0 1 .69-2c.82-1.08 2.39-1.2 3.74-1.07a17.85 17.85 0 0 1 4.44 1 4.77 4.77 0 0 1 2.51 1.68 5.55 5.55 0 0 1 .49 3.36c-.12 1.79.18 4.39-.48 6.06-.54 1.36-2.24 2.61-3.2 3.69zM820.59 690.23a18.12 18.12 0 0 1 8 3.14c.76.55 1.55 1.32 1.44 2.25a1.93 1.93 0 0 1-1.58 1.49 5.41 5.41 0 0 1-2.29-.2 74.47 74.47 0 0 1-11.63-3.78 6.31 6.31 0 0 1-2.63-1.67 2.34 2.34 0 0 1-.19-2.89c.73-.85 2.1-.82 3-1.54.62-.52 1-1.43 1.78-1.58a2.2 2.2 0 0 1 1.57.55c.67.46 2.39 1.19 2.74 2a9.32 9.32 0 0 1-.21 2.23z"
				fill="#f86d70"
			/>
			<path
				d="M790.42 656.12c4.81-.83 9.64-1.66 14.51-2 3.6-.26 7.5-.16 10.38 2 .86.64 1.59 1.44 2.4 2.14 2.72 2.36 6.23 3.54 9.59 4.84a98.69 98.69 0 0 1 21.07 11.35c1.57 1.1 3.22 2.42 3.62 4.3a7.48 7.48 0 0 1-.53 3.89 9.83 9.83 0 0 1-3 5c-2.62 1.93-6.25 1.16-9.51 1.12a39 39 0 0 0-7.52.89c-8.06 1.49-16.11 3-24.1 4.81a2.41 2.41 0 0 1-2.36-1.3 16 16 0 0 1-2.46-8.41 32.62 32.62 0 0 1 1.15-8.78c-2.74-.73-4.94-1.45-7.68-2.18a8.31 8.31 0 0 1-2.9-1.19c-1.64-1.23-2.12-3.46-2.46-5.49-.65-3.64-1.38-7.56-.2-10.99z"
				fill="#434175"
			/>
			<path
				d="M837.5 679.64a14.41 14.41 0 0 0-6.07-2.63 21.88 21.88 0 0 0-4-.76 32.66 32.66 0 0 0-6.3.62 37.67 37.67 0 0 1-15.2-1"
				opacity={0.1}
			/>
			<path
				d="M872.66 562.85s-22.08 98-20.93 100.82 8.29 17-4.71 61.88a3.84 3.84 0 0 1-4 3.43c-3.65 0-16.33-3.71-16.33-3.71a4.34 4.34 0 0 1-1.1-4c.45-2.64 5-45.73 21.24-60.06l20.18-99.15s2.7-2.05 5.65.79z"
				fill="#ae6e79"
			/>
			<path
				d="M867.41 555.99l6.27 1.07a3.34 3.34 0 0 1 2.7 2.51c.43 1.86.16 4.24-4 4.32-6.8.13-5.38-1.81-5.38-1.81s-3.35 0-3.56-2.6a3.33 3.33 0 0 1 3.97-3.49z"
				fill="#ae6e79"
			/>
			<path
				d="M841.43 610.14a8.34 8.34 0 0 1-6-2.68 4 4 0 0 0-1.07-.89 2.52 2.52 0 0 0-2.28.29c-2.27 1.3-3.26 4.18-3 6.77a15.47 15.47 0 0 0 3.17 7.07 44.5 44.5 0 0 0 4 4.86 9.55 9.55 0 0 1 6.42-3.59c2.25-.25 4.32-2 6-3.5 1.24-1.14 2-.87 1.59-2.5a21.4 21.4 0 0 0-2.09-4.57 12.56 12.56 0 0 1-1.08-2.67c-.27-1.08 0-1.66-1-1.13-.67.35-1.18 1.35-1.93 1.77a6.21 6.21 0 0 1-2.73.77zM838.92 593.89a3.19 3.19 0 0 1 .15-1.44 3.37 3.37 0 0 1 1.92-1.49l11-4.79a22.21 22.21 0 0 1 3.63-1.33c3.6-.88 7.63 0 10.92-1.75a7.7 7.7 0 0 0 3.85-4.92c.37-1.5.13-3.36-1.19-4.16s-3.16-.11-4.61.63a112.91 112.91 0 0 1-14.43 6.59c-4.75 1.64-9.76 2.62-14.21 4.93a8.51 8.51 0 0 0-2.19 1.5 10.45 10.45 0 0 0-1.65 2.57l-1.68 3.33c-1.43 2.81-2.86 6.14-1.47 9a3.31 3.31 0 0 0 2.11 1.85 4.71 4.71 0 0 0 2-.14c1.72-.36 4.59-.37 5.54-2.11 1.24-2.22.43-5.93.31-8.27zM841 644.35a12.54 12.54 0 0 0 2.22-2 10.56 10.56 0 0 1 7.8-2.93 5.42 5.42 0 0 1 3 .93 2.77 2.77 0 0 1 1.13 2.77 4.31 4.31 0 0 1-2.33 2.38 47.53 47.53 0 0 1-9.81 4.56 21.82 21.82 0 0 1-10.69.76 2.61 2.61 0 0 1-1-.37 2.5 2.5 0 0 1-.73-1.07c-1.22-2.87-1-6.11-.74-9.21-.11 1.12 6.56.24 7.15.74.87.73.4 2.11.94 3a2.24 2.24 0 0 0 3.06.44z"
				fill="#fabdbd"
			/>
			<circle cx={853.03} cy={611.13} r={10.13} fill="#fabdbd" />
			<path
				d="M830.98 600.61a13.67 13.67 0 0 1 6-.44 2.21 2.21 0 0 1 2.58 2 10.91 10.91 0 0 1 .47 3.44 3.69 3.69 0 0 1-1.61 2.94c-.74.45-1.65.52-2.41.95a3.84 3.84 0 0 0-1.73 3 9.94 9.94 0 0 0 .44 3.54 57.35 57.35 0 0 0 3 8.52c1.26 2.87 2.79 5.71 3.16 8.83a10.33 10.33 0 0 1-3.2 9 7.68 7.68 0 0 1-9.18.67 2.9 2.9 0 0 1 .31 2.25l-4.65.94a1.18 1.18 0 0 0-1.2 1.23 26.77 26.77 0 0 1-.84 5.14 5 5 0 0 1-3.51 3.53c-1.58.3-3.13-.49-4.57-1.21a58.92 58.92 0 0 0-10.49-4 14.47 14.47 0 0 1-5.15-2.08 6.57 6.57 0 0 1-2.25-6.75 12.9 12.9 0 0 1 1.84-3.55 196.06 196.06 0 0 1 13.18-18.44 73.9 73.9 0 0 1 10.66-10.56c1-.8 2-1.56 3.09-2.29.77-.53 2.32-1.13 2.79-1.93s.19-1.77.69-2.59a5.38 5.38 0 0 1 2.58-2.14z"
				fill="#f86d70"
			/>
			<path
				d="M866.42 616.23a11.08 11.08 0 0 1-6 1.24c-2.06-.07-4.1-.44-6.16-.53-2.55-.11-5.52.46-6.7 2.71a14.69 14.69 0 0 0-.84 2.88 3.46 3.46 0 0 1-1.71 2.35 4.86 4.86 0 0 1-1.41.25 21.57 21.57 0 0 0-18.54 15.67 9.75 9.75 0 0 1-2.79-8c-.69 2.59-3.61 4.65-3 7.27a12.3 12.3 0 0 1 1.76-18.09c1.32-1 2.83-1.7 4.2-2.62a16.79 16.79 0 0 0 7.17-11.34c.29-1.94.25-4 1.16-5.74 1.26-2.42 4-3.61 6.55-4.56a29.92 29.92 0 0 1 5.62-1.65 25 25 0 0 1 7.52.17c5.54.84 10.09 2.95 12.21 8.38a10.25 10.25 0 0 0 1.84 3.33 10 10 0 0 1 1.72 1.9c1.22 2.28-.59 5.15-2.6 6.38z"
				fill="#434175"
			/>
			<path
				d="M272.5 729.93s83.16-38.8 114.47-25.19 104.85 10.89 104.85 10.89 130.68-5.4 145.68 0 151.12 5.45 157.92 0 84.41-9.53 96.67 0a109.45 109.45 0 0 0 24.5 14.3z"
				fill="#e8eaf2"
			/>
			<path
				d="M272.5 729.93s83.16-46.09 114.47-29.92 104.83 12.94 104.83 12.94 130.7-6.47 145.68 0 151.12 6.47 157.92 0 84.41-11.32 96.67 0a106 106 0 0 0 24.5 17z"
				fill={primaryColor}
				opacity={0.3}
			/>
		</svg>
	);
};

UndrawJapan.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawJapan;
