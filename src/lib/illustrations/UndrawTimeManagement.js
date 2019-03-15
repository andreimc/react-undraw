import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTimeManagement = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1037.94 772.29" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={521.94} y1={746.41} x2={521.94} y2={22.41} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
				<linearGradient id="prefix__b" x1={748.44} y1={596.28} x2={748.44} y2={179.26} xlinkHref="#prefix__a" />
			</defs>
			<path
				d="M104.4 77.33c-6.46 2.68-13.09 6.12-16.64 12.15-3.76 6.37-3.31 14.28-2.61 21.65 6.1 63.92 22.17 131.9-5.58 189.8-13.47 28.09-36 50.6-53.92 76.11S-5.8 434.4 2.52 464.41c10.16 36.67 48.08 57 73.64 85.22 16.73 18.45 28.46 40.87 44.07 60.28s37 36.51 61.92 37.65c35.84 1.65 65-29.3 100.14-36.47 36-7.34 72.25 11.34 101.44 33.7s55.74 49.45 89.75 63.41c37.56 15.43 79.9 13.07 119.44 22.34 36 8.45 69.14 26.42 104.88 36s77.63 9 105.32-15.47c36.09-32 33.25-89 56.3-131.33 21.41-39.33 63.32-62.81 91.53-97.58 50.76-62.58 49.1-158.23 6-226.29s-121.17-109.27-201-120c-36-4.83-73.07-4.17-107.68-15.16C555.63 131.31 500.5 25.97 405.92 4.05 345.8-9.86 287.33 14.23 236.12 43.88c-44.45 25.74-85.46 14.26-131.72 33.45z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				d="M194.68 283.83s-34.13 32.21-70.76 33.17a71.09 71.09 0 0 0-42.37 15.07 119.57 119.57 0 0 0-15.84 15.07"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M42.61 347.93c4.92-2.5 23.7-.84 23.7-.84s-9.74 16.15-14.66 18.65a10 10 0 1 1-9-17.81zM62.38 319.38c5.49.58 20.35 12.18 20.35 12.18s-17 8.26-22.44 7.69a10 10 0 0 1 2.09-19.87zM109.26 296.37c4.44 3.27 11.42 20.79 11.42 20.79s-18.81-1.43-23.25-4.69a10 10 0 0 1 11.83-16.1zM148.65 286.96c4.93 2.47 14.77 18.56 14.77 18.56s-18.78 1.77-23.71-.7a10 10 0 1 1 8.94-17.86zM93.18 349.77c1.64-5.27-3.16-23.51-3.16-23.51s-14.28 12.32-15.92 17.59a10 10 0 1 0 19.08 5.92zM139.11 338.14c0-5.52-10.05-21.48-10.05-21.48s-9.94 16-9.93 21.54a10 10 0 0 0 20-.06zM182.2 320.78c.92-5.44-6.28-22.87-6.28-22.87s-12.51 14.12-13.42 19.56a10 10 0 0 0 19.7 3.32z"
				fill={primaryColor}
			/>
			<path
				d="M239.03 198.53s-41.11-22.58-53.33-57.17a71.09 71.09 0 0 0-27.37-35.69 119.57 119.57 0 0 0-19.24-10.4"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M131.29 73.52c3.89 3.91 8.08 22.3 8.08 22.3s-18.36-4.3-22.25-8.22a10 10 0 0 1 14.17-14.08zM164.54 83.55c1.14 5.4-5.33 23.11-5.33 23.11s-13.07-13.59-14.21-19a10 10 0 1 1 19.55-4.12zM200.84 121.14c-1.74 5.23-16.27 17.26-16.27 17.26s-4.42-18.33-2.68-23.57a10.01 10.01 0 0 1 19 6.31zM221.92 155.69c-.83 5.45-13.12 19.76-13.12 19.76s-7.46-17.32-6.63-22.77a10 10 0 1 1 19.75 3zM145.08 122.21c5.52-.06 21.4-10.24 21.4-10.24s-16.11-9.8-21.63-9.74a10 10 0 1 0 .23 20zM170.24 162.35c5.24-1.71 17.35-16.17 17.35-16.17s-18.31-4.53-23.55-2.82a10 10 0 1 0 6.2 19zM200.04 198.01c5.46-.8 19.84-13 19.84-13s-17.28-7.56-22.73-6.76a10 10 0 1 0 2.9 19.77z"
				fill={primaryColor}
			/>
			<circle cx={521.94} cy={384.41} r={362} fill="url(#prefix__a)" />
			<circle cx={521.94} cy={384.41} r={356} fill={primaryColor} />
			<circle cx={521.94} cy={384.41} r={283} fill="#dde1ec" />
			<path fill="#535461" opacity={0.3} d="M513.94 151.41h16v250h-16z" />
			<g opacity={0.1}>
				<path d="M538.94 378.41h226v20h-226zM370.103 321.302l9.279-17.718 142.201 74.468-9.278 17.717z" />
				<circle cx={521.94} cy={388.41} r={30} />
			</g>
			<path
				fill="#535461"
				d="M538.94 374.41h226v20h-226zM379.447 299.607l142.202 74.468-9.279 17.717-142.201-74.467z"
			/>
			<circle cx={521.94} cy={384.41} r={30} fill="#535461" />
			<path
				d="M260.92 418.41c0-156.3 126.7-283 283-283a282.56 282.56 0 0 1 226.16 112.84c-48.16-87.52-141.16-146.84-248.16-146.84-156.3 0-283 126.7-283 283a281.74 281.74 0 0 0 56.87 170.16 281.71 281.71 0 0 1-34.87-136.16z"
				opacity={0.1}
			/>
			<path
				d="M864.5 240.09c-3.36-3.23-31.64 18-31.64 18s-10.07 1.84-7.67 8.75-10.55 45.61-10.55 45.61l-5.27-7.37c.51-8.65-1.87-14.78-4.19-18.6-.19-.31-.38-.61-.57-.89l.92-.32c-.35-4.72-7.9-11.91-11.91-15.43v-1.52c.25-5.64 2.51-11.59 0-16.7-2.84-5.83-11.15-8.76-11.85-15.16-.42-3.82 2.16-7.27 3.3-10.95 2.72-8.8-2.93-17.78-8.33-25.36a35.47 35.47 0 0 0-6.61-7.62 32.08 32.08 0 0 0-7.94-4.24c-7.91-3.2-16-4.81-24.16-7-7.83-2.08-15.05-3.07-23-.46a11.31 11.31 0 0 0-5 2.87c-1.89 2.12-2.14 5.14-3.38 7.67-2 4.07-6.31 6.5-10.12 9.11s-7.63 6.19-7.65 10.69c0 6.39 7.3 10.41 9.74 16.36 2.28 5.54 0 11.71-1.27 17.55a11.79 11.79 0 0 0-.15 5.79 12.44 12.44 0 0 0 2.24 3.9c1.51 2 3.13 3.86 4.74 5.76l-.74.29c-13.42-1.38-22.05 15.66-22.05 15.66.62.13 1.21.28 1.79.45l-.57.74a72.75 72.75 0 0 0-9.85 17.23l-11 14.74s-2.4-36.86 3.36-45.15-5.27-13.36-5.27-13.36-24-26.72-27.33-24.42 8.15 31.33 18.22 35.94c0 0 1 9.21-1 15.2-1.21 3.79-7.67 43.77-7.67 43.77s-5.75 33.63 20.62 17c17.13-10.78 28.2-29.34 33.84-41q.59-1.23 1.11-2.35a28.15 28.15 0 0 1 .53 3.75l1 38.53a58.48 58.48 0 0 1-6.06 27.52l-11.75 23.83 1.31.4-.79 1.14c-7.74 11.39-20.9 37 6.19 50.05l36 4.61-1.92 9.21s-14.86 28.1-19.18 47.45a142.19 142.19 0 0 1-12.47 34.09l1.11.59c-.23.26-.47.53-.7.81a17.38 17.38 0 0 0-4.16 8.72l-4.88 6.92s-1.92 28.56 1.92 35.48c2.1 3.78 9.07 6.18 15 7.58 8.8 2.09 15.9-7 11.23-14.49l-.06-.1h-.09c-1-4.65-4.06-19.08-3.06-24.56.28-1.56.54-3.11.67-4.69a16.58 16.58 0 0 1 1.86-5.93c.16-.31.33-.61.5-.91l.52.22c1.61.69 3.2 1.34 4.71 1.91-2.34 2.13-4 6.54-2 15.61 0 0 .19 22.69 1.92 26.26s21.09 8.29 24.45 4.61-2.16-16.36-2.16-16.36l-.17.12c-1.11-7.35-2.48-20.51.89-25.69 1.36-2.09 2.68-4.25 3.86-6.27l.73-1.25c6.26 3.12 12.88 5.47 16.5 3.84 0 0 15.82-36.86 14.86-41.46s24.45-56.67 24.45-56.67 21.57-24-4.79-40.54c-8.37-5.27-14.47-8.81-18.9-11.2L771 379a70.92 70.92 0 0 1 1-30.66l4-15.26.33-1.3s10.07-20.73 9.59-30.41a7 7 0 0 1 .25-2.23c.11.46.23.94.36 1.44a185.88 185.88 0 0 0 10.42 29.36c7.65 17.26 19 15.89 25.22 13.44a8.61 8.61 0 0 0 5.31-6.22c2.24-10.74 8.39-40.83 8.78-49.14a139.79 139.79 0 0 1 2.4-19.35c15.78-9.23 29.2-25.35 25.84-28.58z"
				transform="translate(-81.08 -63.86)"
				fill="url(#prefix__b)"
			/>
			<path
				d="M666.03 471.45s-2.11 4.23-5 9.31c-1.13 2-2.39 4.15-3.68 6.22-4.57 7.31 0 30.6 0 30.6l-10 1.37-10-5-1.83-16.9v-12.36l11.4-12.75 5-5.52z"
				fill="#f8bdc5"
			/>
			<path
				d="M666.03 471.45s-2.11 4.23-5 9.31a123.85 123.85 0 0 1-12.78-7.86l-.88-.62-.47-.34 5-5.52z"
				opacity={0.1}
			/>
			<path
				d="M714.92 386.03s-24.21 51.61-23.29 56.18-14.16 41.11-14.16 41.11c-3.44 1.62-9.76-.71-15.72-3.8a123.23 123.23 0 0 1-13-8l-.88-.62-.53-.38 39.74-110.08-35.16-25.79-2.6-1.91-15.72-11.6 48 8.68s1.67-.21 10.5 4.73c4.24 2.37 10.13 5.92 18.27 11.26 25.09 16.47 4.55 40.22 4.55 40.22z"
				fill="#5e52ad"
			/>
			<path
				d="M714.92 386.03s-24.21 51.61-23.29 56.18-14.16 41.11-14.16 41.11c-3.44 1.62-9.76-.71-15.72-3.8a123.23 123.23 0 0 1-13-8l-.88-.62-.53-.38 39.74-110.08-35.16-25.79-2.6-1.91-15.72-11.6 48 8.68s1.67-.21 10.5 4.73c4.24 2.37 10.13 5.92 18.27 11.26 25.09 16.47 4.55 40.22 4.55 40.22z"
				opacity={0.03}
			/>
			<path
				d="M641.37 480.58s-11.88-1.83-7.76 17.36c0 0 .18 22.5 1.83 26s20.1 8.22 23.29 4.57-2.06-16.21-2.06-16.21-13.47 9.82-17.13-.69 1.83-31.03 1.83-31.03z"
				fill="#5d3e53"
			/>
			<path
				d="M633.14 476.93a14.4 14.4 0 0 0-3.11 4.32 16.92 16.92 0 0 0-1.77 5.88c-.12 1.56-.37 3.11-.63 4.65-1.14 6.51 3.23 25.8 3.23 25.8l-17.36 2.74-6.39-6.85-1.37-15.07a54.61 54.61 0 0 0 2.74-16c0-3.93 2-7.44 4-10a27.5 27.5 0 0 1 4.63-4.59s19.69 5.92 16.03 9.12z"
				fill="#f8bdc5"
			/>
			<path
				d="M633.14 476.93a14.4 14.4 0 0 0-3.11 4.32c-7.11-3.21-14.58-7.26-17.3-8.76l-.21-.11a27.5 27.5 0 0 1 4.63-4.59s19.65 5.94 15.99 9.14z"
				opacity={0.1}
			/>
			<path
				d="M689.33 372.33s-11.41 21.47-18.73 39.28c-4.8 11.7-14.72 39.56-21 57.3l-.92 2.62c-2.76 7.85-4.6 13.16-4.6 13.16a11.89 11.89 0 0 1-3.59-.53c-1.08-.29-2.29-.68-3.58-1.16l-1.45-.55c-1.44-.56-3-1.21-4.49-1.89-7.26-3.24-15-7.46-17.81-9l-1.06-.59a144.48 144.48 0 0 0 11.91-33.83c4.11-19.18 18.27-47 18.27-47l1.83-9.14-34.26-4.57c-25.81-12.9-13.27-38.33-5.9-49.62a66.66 66.66 0 0 1 4.07-5.67l27.41 6s4.32 1.38 13.92 5.63l4.41 2c5.38 2.47 12 5.65 20 9.73 26.98 13.64 15.57 27.83 15.57 27.83z"
				fill="#5e52ad"
			/>
			<path
				d="M630.69 516.21a9.7 9.7 0 0 1-10.7 14.36c-5.61-1.39-12.26-3.77-14.26-7.52-3.65-6.85-1.83-35.17-1.83-35.17l4.8-7.08s-2.51 31.29 3.43 34 18.5 1.27 18.5 1.27z"
				fill="#5d3e53"
			/>
			<path
				d="M635.55 119a10.68 10.68 0 0 0-4.8 2.85c-1.8 2.1-2 5.1-3.22 7.61-1.9 4-6 6.45-9.64 9s-7.27 6.14-7.29 10.6c0 6.34 7 10.32 9.28 16.21 2.17 5.5 0 11.61-1.21 17.4a12.15 12.15 0 0 0-.14 5.74 12.47 12.47 0 0 0 2.14 3.87c4.41 6 9.89 11.32 12.84 18.15 2.24 5.19 2.86 10.92 3.45 16.55.85 8.1 1.7 16.35.16 24.35a2.46 2.46 0 0 0 0 1.47 2.28 2.28 0 0 0 1.17 1 24 24 0 0 0 32.49-12c2-4.53 2.77-10 6.73-12.94a3.37 3.37 0 0 1 1.61-.73 4.71 4.71 0 0 1 2.6.87c5.14 2.78 11.37 2.86 17.1 1.72 3.46-.69 7-1.92 9.29-4.62 4.51-5.36 2-13.37 2.3-20.36.24-5.59 2.39-11.49 0-16.55-2.7-5.78-10.63-8.68-11.29-15-.4-3.78 2.06-7.21 3.15-10.85 2.59-8.73-2.79-17.63-7.93-25.14a34.81 34.81 0 0 0-6.29-7.55 30.19 30.19 0 0 0-7.56-4.2c-7.53-3.17-15.21-4.77-23-6.93-7.46-2.13-14.33-3.12-21.94-.52z"
				fill="#85555c"
			/>
			<path
				d="M673.8 249.46h-26.5v-42.94a80 80 0 0 0 1.38-12.5v-4.3c-.25-5.12-1.31-10.23-4.09-13.35-7.31-8.22 23.75-6.85 23.75-6.85a77.31 77.31 0 0 0 3.7 11.06 67.25 67.25 0 0 0 8.9 15.67 36.26 36.26 0 0 0 12.07 10.27c18.24 9.14-19.21 42.94-19.21 42.94z"
				fill="#f8bdc5"
			/>
			<path
				d="M672.01 180.58a24.25 24.25 0 0 1-23.36 9.14c-.25-5.12-1.31-10.23-4.09-13.35-7.31-8.22 23.75-6.85 23.75-6.85a77.31 77.31 0 0 0 3.7 11.06z"
				opacity={0.1}
			/>
			<circle cx={652.78} cy={164.51} r={24.21} fill="#f8bdc5" />
			<path
				d="M753.27 206.07a143.91 143.91 0 0 0-2.28 19.18c-.37 8.23-6.23 38.07-8.37 48.72a8.45 8.45 0 0 1-5.06 6.17c-5.94 2.43-16.74 3.79-24-13.32a189.36 189.36 0 0 1-9.93-29.1 78.65 78.65 0 0 1-2-10.18l16-8.68a19.71 19.71 0 0 1 3.78 4.85c2.21 3.79 4.48 9.87 4 18.44l5 7.31s12.33-38.37 10-45.22 7.31-8.68 7.31-8.68 26.95-21 30.15-17.81-9.53 19.18-24.6 28.32zM622.18 224.34a108 108 0 0 1-4.3 10.5c-5.38 11.57-15.92 30-32.24 40.66-25.12 16.44-19.64-16.9-19.64-16.9s6.15-39.64 7.31-43.39c1.83-5.94.91-15.07.91-15.07-9.59-4.57-20.55-33.34-17.36-35.63s26 24.21 26 24.21 10.51 5 5 13.25-3.2 44.76-3.2 44.76l10.57-14.59a72.9 72.9 0 0 1 9.39-17.08c2-2.73 3.4-4.38 3.4-4.38z"
				fill="#f8bdc5"
			/>
			<path
				d="M721.42 223.71c-3.36 1.24-16.37 6.49-17.81 14a78.65 78.65 0 0 1-2-10.18l16-8.68a19.71 19.71 0 0 1 3.81 4.86zM622.18 224.34a108 108 0 0 1-4.3 10.5c-.62-4.52-3.17-16.08-13.26-19.81 2-2.73 3.4-4.38 3.4-4.38zM673.8 249.46h-26.5v-42.94a80 80 0 0 0 1.38-12.5c5.45 5.26 4.1 13.41 4.1 13.41l14.16 32 6.86-28.29-2.28-3.65 9.4-11.18a36.26 36.26 0 0 0 12.07 10.27c18.26 9.08-19.19 42.88-19.19 42.88zM692.52 337.14s-20.76-1.65-38.77-2.43l-1.81-.08c-2.56-.1-5-.18-7.39-.24-17.48-.42-37.25-6.53-40.61-7.6a66.66 66.66 0 0 1 4.08-5.65l27.41 6s4.32 1.38 13.92 5.63l-15.75-11.63 48 8.68s1.67-.21 10.5 4.73z"
				opacity={0.1}
			/>
			<path
				d="M673.8 212.92l-2.28-3.65 10.14-12.13s20.91 10.25 26.39 8c0 0 13.25 11 13.7 17.36 0 0-19.18 6.39-18.73 16s-9.1 30.14-9.1 30.14l-4 16.42a73.09 73.09 0 0 0-1 30.4l3.65 20.33s-28.78-2.28-48-2.74-41.11-7.76-41.11-7.76l11.21-23.59a60 60 0 0 0 5.78-27.28l-1-38.19s-.91-19.18-16-22.38c0 0 8.22-16.9 21-15.53 0 0 18.62-7.77 24.15-2.52s4.17 13.48 4.17 13.48l14.16 32z"
				fill="#ed677b"
			/>
			<path
				d="M635.31 159.52c3.67 0 6.55-3.89 10.22-3.69 1.9.1 3.53 1.31 5.1 2.4a62.25 62.25 0 0 0 19.51 9c2.71.72 5.58 1.26 8.3.6s5.27-2.8 5.58-5.59a9.53 9.53 0 0 0-.48-3.63A44.87 44.87 0 0 0 664 132.82c-3.8-2.33-8.44-4.11-12.65-2.65-3.8 1.31-6.25 4.87-9 7.8a34.2 34.2 0 0 1-7 5.68c-2 1.21-5 2-6.15 4.22-2.17 4.14 1.24 11.61 6.11 11.65z"
				opacity={0.1}
			/>
			<path
				d="M635.31 158.61c3.67 0 6.55-3.89 10.22-3.69 1.9.1 3.53 1.31 5.1 2.4a62.25 62.25 0 0 0 19.51 9c2.71.72 5.58 1.26 8.3.6s5.27-2.8 5.58-5.59a9.53 9.53 0 0 0-.48-3.63A44.87 44.87 0 0 0 664 131.91c-3.8-2.33-8.44-4.11-12.65-2.65-3.8 1.31-6.25 4.87-9 7.8a34.2 34.2 0 0 1-7 5.68c-2 1.21-5 2-6.15 4.22-2.17 4.18 1.24 11.6 6.11 11.65z"
				fill="#85555c"
			/>
			<path
				d="M624.24 262.93s22.38 8.22 37 1.83l7.31.46s12.15 8.52 25 4.71M730.21 249.23s-3.65 8.68-1.83 11.42M584.5 246.49s1.83 8.68 0 11.42"
				opacity={0.05}
			/>
			<path
				d="M963.32 444.28s-41.84 41.84-18.22 103.92-40.48 165.32-40.48 165.32.69-.1 2-.32c85.93-15.17 128.62-113.44 80.84-186.45-17.81-27.15-32.39-58.99-24.14-82.47z"
				fill={primaryColor}
			/>
			<path
				d="M963.32 444.98s-41.84 41.84-18.22 103.92-40.48 165.31-40.48 165.31.69-.1 2-.32c85.93-15.17 128.62-113.44 80.84-186.45-17.81-27.14-32.39-58.98-24.14-82.46z"
				opacity={0.1}
			/>
			<path
				d="M963.32 444.28s-23.62 51.28 0 93.12 4 159.25-58.71 176.12"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
			/>
			<path
				d="M1037.84 613.5s-47.74-7.6-52.09 35.18-91.83 48.71-91.83 48.71l1.64 1.09c72.2 47.4 141.23 30.19 130.82-32.75-3.84-23.39-3.52-46.89 11.46-52.23z"
				fill={primaryColor}
			/>
			<path
				d="M1037.84 613.5s-37.06 8.13-34 41.83-55 74.09-109.88 42.07"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
			/>
			<path
				d="M995.84 698.95s-37.6-7.52-47.63-17.55-55.15-27.57-60.16-15-67.68 55.15-25.07 62.67 100.27 10 112.8 5 20.06-35.12 20.06-35.12z"
				fill="#a8a8a8"
			/>
			<path
				d="M862.98 724.38c42.62 7.52 100.27 10 112.8 5 9.55-3.82 16.18-22.16 18.8-30.7l1.25.26s-7.52 30.08-20.05 35.09-70.19 2.51-112.8-5c-12.3-2.17-15.82-7.27-14.49-13.72 1.04 4.21 5.33 7.45 14.49 9.07z"
				opacity={0.2}
			/>
		</svg>
	);
};

UndrawTimeManagement.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawTimeManagement;
