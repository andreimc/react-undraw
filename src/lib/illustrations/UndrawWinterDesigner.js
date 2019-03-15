import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWinterDesigner = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1130.08 813.14" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={335.59} y1={227.76} x2={336.95} y2={227.76} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
				<linearGradient id="prefix__b" x1={336.95} y1={228.29} x2={344.66} y2={228.29} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__c" x1={458.41} y1={588.17} x2={460.73} y2={588.17} xlinkHref="#prefix__a" />
			</defs>
			<path
				d="M584.48 132.75c-71.37 12.06-142.64 6.89-211.2-.63s-136.95-17.34-208.35-14.38c-45.93 1.9-97.08 11-129.15 37.45C4.91 180.63.1 214.96.04 245.95c-.08 23.31 1.94 47.43 18.46 66 11.48 12.88 29.15 22.11 42.46 34 46.31 41.3 32.23 106.33 1.84 161.62-14.26 25.94-31.7 51.45-41.41 78s-11 55 6.38 76.65c17.18 21.35 50.49 33.49 85.27 39.76 70.54 12.74 149.13 4.83 225.17-5.89 168.28-23.73 334.83-60.85 501.02-97.88 61.49-13.71 123.25-27.48 182.49-47.24 32.9-11 66.4-24.69 87.65-46 27-27 27.68-63.93 1.66-86-43.66-37-142.48-28.79-176.25-71.09-18.58-23.29-10.49-54.92 4.3-82.86 31.71-59.92 93-119.12 85.06-178.86-5.48-41-47.29-74.93-103.33-83.77-58.74-9.26-134.18 8.3-168 49.56-34.77 42.51-105.31 70.16-168.33 80.8z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path fill="#565661" d="M87.07 105.03h415.7v195.79H87.07z" />
			<path fill="#dfe6f5" d="M96.65 119.43h398v166.99h-398z" />
			<path
				d="M124.67 200.04a61.67 61.67 0 0 0-16.63 4.44l11-10.46a8.59 8.59 0 0 1 2.82-2c1.78-.68 3.83-.16 5.65-.76 2.93-1 4.39-4.52 7.31-5.53 2-.68 4.18 0 6.28-.15 4.19-.28 7.51-3.7 9.64-7.33s3.56-7.7 6.29-10.9c3.87-4.55 9.87-6.75 14.19-10.89 1.92-1.84 3.47-4 5.31-5.93a26.83 26.83 0 0 1 28.32-6.21 10.45 10.45 0 0 0 4.19 1.11 8.81 8.81 0 0 0 3.27-1.07l13.54-6.49a75.79 75.79 0 0 1 21.19 10.7 7.45 7.45 0 0 0 3.54 1.73c3.62.29 5.16-4.36 7.47-7.16 3.16-3.84 9.06-4.44 13.71-2.67s8.28 5.43 11.58 9.1c1.51 1.69 3.1 3.48 5.26 4.15a10.76 10.76 0 0 0 5.43-.13 43 43 0 0 0 25.76-17.37c.93-1.36 2.08-2.94 3.73-2.92a4.68 4.68 0 0 1 2.22.81 88.52 88.52 0 0 1 16.21 12.08c3.74 3.52 7.24 7.41 11.73 9.91s10.35 3.32 14.64.51c-.7 2.79 2 5.47 4.81 6.06s5.72-.22 8.58-.59a28.92 28.92 0 0 1 22.18 6.57 37.06 37.06 0 0 1 29.73 21.64c2.12 4.89 4.93 11.44 10.2 10.63 1.77-.27 3.47-1.45 5.21-1a7 7 0 0 1 3 2.12c4.52 4.4 10.69 6.53 16.38 9.23s11.45 6.56 13.45 12.53c-4.93.69-9.8-1.3-14.71-2.13s-10.9.05-13.25 4.45c-.94 1.78-1.25 4.05-2.9 5.2a6.62 6.62 0 0 1-3.71.83 68.68 68.68 0 0 1-32.25-7.58 50.73 50.73 0 0 1-28.27 20.15c-.32-4.34-4.84-7.5-9.2-7.56s-8.42 2.26-11.78 5a41.93 41.93 0 0 0-8.43 9.45c-1.93 3-3.53 6.23-6.15 8.6s-6.72 3.61-9.73 1.75c-1.67-1-2.74-2.85-4.38-3.95-3.73-2.49-9.43-.67-12.71-3.74-2.37-2.22-2.41-6.14-4.68-8.46-2.87-2.93-8-1.95-11.21.58s-5.35 6.21-8.3 9.05c-7.65 7.37-19.36 8-30 8.2 0-2.37 1.48-4.43 2.52-6.55 2.95-6 2.14-13.25-.57-19.34s-7.11-11.18-11.42-16.18c-4.86 5.18-2.63 14.21-7 19.84-1.77 2.29-4.45 3.74-6.3 6-2.31 2.78-4.11 7.14-7.71 6.87-1.76-.13-3.18-1.45-4.37-2.75-4.59-5-8.82-11.32-15.49-12.62-2.61-.51-5.31-.16-8-.39a18.58 18.58 0 0 1-16.34-17.24c-5.64 1.53-11.68 2.84-17.32 4.37-1.57.43-3.28.86-4.8.27-2-.79-3-3.05-4.65-4.44-2.43-2-6-1.92-9.06-1.26s-6.17 1.78-9.31 1.43a26.14 26.14 0 0 1-.48-8.73l-11.2-1a13.7 13.7 0 0 1-4.32-.84 11.17 11.17 0 0 1-2.86-1.91 35.62 35.62 0 0 1-6.85-9.13z"
				fill={primaryColor}
			/>
			<path
				d="M152.26 192.91c1.38-1.43 2.56-3.09 4.21-4.19a19.66 19.66 0 0 1 4.66-2c12-4.23 21.37-13.47 30.95-21.83 8.44-7.37 17.31-14.23 26.17-21.08l3.37 2.46-8.09 3.3c-.78.32-1.68.8-1.72 1.64a2.23 2.23 0 0 0 .64 1.42c2.08 2.68 4.42 5.54 7.73 6.29 1.58.36 3.49.31 4.47 1.6a6.17 6.17 0 0 1 .8 2.08c1.28 4.36 5.23 7.35 9.11 9.72a91.46 91.46 0 0 0 24.66 10.42 58.1 58.1 0 0 1-19.18-3.88 27.3 27.3 0 0 1-5.23-2.57c-3.49-2.28-6.11-5.67-9.5-8.09s-8.23-3.71-11.64-1.32c-.93.66-1.83 1.6-3 1.54s-2-1.18-3-1.87c-2.55-1.82-6.11-.61-8.84.93a45.76 45.76 0 0 0-18.72 20.19 52.19 52.19 0 0 0 34.2-9.89 44.1 44.1 0 0 0 24.27 16.91c-1.44 1.75-3.81 2.32-5.92 3.14a21.7 21.7 0 0 0-12.45 12.92 20.7 20.7 0 0 1-3.46-7.39 98.35 98.35 0 0 0-9.4 6 20.36 20.36 0 0 0 6.86-7.39 22.94 22.94 0 0 0-15.46 1.66c-3.5 1.72-6.74 4.4-10.64 4.61a9 9 0 0 0-6.29-9.69c-2.75-.77-6.3-.45-7.78-2.9a20.41 20.41 0 0 1-.89-2.16c-1.14-2.55-4.16-3.83-6.95-3.75s-5.42 1.22-8 2.35c-3.68 1.62-7.33 3.4-11.07 4.86 1.69-1.44 3.58-2.48 5.13-4.04zM216.55 227.98a27.22 27.22 0 0 0 14.54-2.31c2.48-1.15 4.85-2.69 7.54-3.15s5.94.61 6.83 3.2c3.23-2.32 3.82-6.93 6.41-9.95 3.81-4.45 11.2-4.17 16-.8s7.48 9 9.48 14.46c1.51 4.16 2.86 8.61 6 11.7s8.91 4.09 11.84.77a17.41 17.41 0 0 1-1.58-18.33c.68-1.29 1.55-2.59 1.5-4-.11-3.14-4-4.38-6.5-6.3-5.41-4.14-4.7-12.78-9.08-18-2.32-2.77-6.25-5.21-5.58-8.76a98.4 98.4 0 0 1 37.09 15.78 30.42 30.42 0 0 0 5.82 3.53c2.76 1.11 5.81 1.24 8.62 2.2 9.35 3.18 14.76 14.88 24.6 15.69 4.9.4 9.49-2.12 14.07-3.93 19.47-7.69 41.44-2.84 61.57 2.91-7-3.85-16.89-3.28-21.33-9.92-1.52-2.27-2.19-5.19-4.3-6.93-4.14-3.42-10.19-.13-15.54.38a14.65 14.65 0 0 1-13.2-6.19c-1.44-2.11-2.35-4.63-4.24-6.33-2.77-2.48-6.86-2.58-10.58-2.54l-17.45.16c-2.93 0-6.23-.11-8.19-2.29a24.12 24.12 0 0 0-2.12-2.69c-1.15-1-2.75-1.13-4.24-1.34a40.63 40.63 0 0 1-13.88-4.59 4.12 4.12 0 0 1-2-1.8c-1.12-2.65 2.94-4.12 5.21-5.89 3.7-2.9 2.88-8.61 1.7-13.15a16.82 16.82 0 0 0 8.15-4.34c-4.2-3.87-8.81-9.15-7-14.56.4-1.19.62-3.12-.63-3.09a18.88 18.88 0 0 1-8 8.62 7.27 7.27 0 0 0-2.88 2.13c-1.27 2 .05 5.05-1.53 6.83a4.77 4.77 0 0 1-2.05 1.2c-5.27 1.89-11.76 2.28-14.93 6.9a23.46 23.46 0 0 0-2.39 6 33.12 33.12 0 0 1-23.51 21.31c-1.82.42-3.81.75-5.09 2.11-1 1-1.34 2.43-2.17 3.55-1.66 2.25-4.67 2.86-7.28 3.86-7.47 2.85-12.06 9.37-16.23 15.82-1.76 2.72-3.05 3.54-5.94 4.81a14.8 14.8 0 0 0-4.77 2.94c-.27.3-2.99 4.29-2.76 4.32z"
				fill="#fff"
			/>
			<path
				d="M348.58 172.27a49.26 49.26 0 0 1-10.4 4 20.85 20.85 0 0 1 4.9 2.11 9.31 9.31 0 0 1-3.44 5.19c4 .13 7.79 1.6 11.64 2.65 6.39 1.73 13 2.3 19.62 2.87l-9-6.57c-1.32-1-2.74-2.06-3.07-3.66a6.47 6.47 0 0 1 1.08-4.19c2.28-4.31 5.05-8.25 7.67-12.33-3.22 1.11-7.45.19-10.35 1.54-1.81.84-2.13 2.62-3.21 4.11a15.09 15.09 0 0 1-5.44 4.28zM403.04 182.33a20.49 20.49 0 0 1-4 6.26 11 11 0 0 0 5.75 2.75 27.39 27.39 0 0 1 3.27.47 11.92 11.92 0 0 1 3.47 1.87c7 4.85 14.53 10.44 16.48 18.73a5.87 5.87 0 0 1 7.66 1.73c.86 1.31 1.3 3.09 2.73 3.73s3-.2 4.13-1.17 2.25-2.16 3.72-2.5a7.14 7.14 0 0 1 2.76.09l13.31 2.15a17.61 17.61 0 0 0-14.26-5.13c-3.22.35-6.58 1.57-9.57.35s-4.53-4.44-6.89-6.62c-3-2.78-7.33-3.84-10.32-6.65-2.49-2.36-3.81-5.7-6.07-8.28-2.45-2.81-5.94-4.63-8.09-7.67-.87-1.23-1.56-2.68-2.84-3.46-2.25-1.36-6.87-1.24-9.43-1.48.61 3.01 5.31 5.38 8.19 4.83zM171.79 156.57a66.89 66.89 0 0 0 6.79.12 1.2 1.2 0 0 0 .63-.15 1.15 1.15 0 0 0 .35-.71l.81-3.58a1.41 1.41 0 0 1 .4-.84 1.4 1.4 0 0 1 1.36 0 25.16 25.16 0 0 1 6.51 3.62q-1.28-3.87-2.28-7.83l6.13-1.08c-4.65-1.11-7-.55-10 2.74-1.76 1.89-8 7.88-10.7 7.71z"
				fill="#fff"
			/>
			<circle cx={294.92} cy={82.92} r={5.57} fill="#565661" />
			<path fill="none" stroke="#565661" strokeMiterlimit={10} d="M259.22 110.42l35.7-27.5 36.07 27.5" />
			<path d="M335.59 227.62l.44.28.92-.1z" transform="translate(-34.96 -43.43)" fill="url(#prefix__a)" />
			<path
				d="M337 227.8l7.71 1a17.93 17.93 0 0 0-7.71-1z"
				transform="translate(-34.96 -43.43)"
				fill="url(#prefix__b)"
			/>
			<path fill="#565661" d="M322 461.24h283.43v65.63H322z" />
			<path opacity={0.1} d="M322 461.24h283.43v65.63H322z" />
			<path fill="#bcbec9" d="M355.91 529.03l1.99 175.21-27.26 68.82-2.11-244.03h27.38z" />
			<path fill="#565661" d="M324.99 473.84l275.95 1.66v48.88H324.99v-50.54z" />
			<path fill="#bcbec9" d="M577.33 529.03l23.61 3.33V770.4l-23.61-72.81V529.03z" />
			<path fill="#efeff0" d="M609.91 463.87H742.9v282.6H609.91z" />
			<path fill="#565661" d="M620.55 471.72h111.71v217.23H620.55z" />
			<path opacity={0.1} d="M620.55 471.72h111.71v217.23H620.55z" />
			<path
				fill="#565661"
				d="M620.55 476.17h111.71v48.21H620.55zM620.55 529.03h111.71v102.4H620.55zM620.55 637.75h111.71v102.4H620.55z"
			/>
			<ellipse cx={625.21} cy={755.67} rx={7.2} ry={9.2} fill="#565661" />
			<ellipse cx={725.06} cy={756.11} rx={7.2} ry={9.2} fill="#565661" />
			<path
				fill="#efeff0"
				d="M321 773.06h9.64l-2.65-306.74h-14.64L321 773.06zM600.94 463.87V770.4h8.97V466.32l-8.97-2.45z"
			/>
			<path
				fill="#efeff0"
				d="M328.46 521.38v10.98h272.48v-7.98l-272.48-3zM346.93 443.26h345.44l50.2 16.62v9.64l-430.88-3.32v-9.81l35.24-13.13z"
			/>
			<path fill="#bcbec9" d="M311.69 456.39l430.88 3.49v9.64l-430.88-3.32v-9.81z" />
			<path
				d="M460.68 589.14l-2-.3v-.25c-.06-.47-.13-.93-.2-1.4.82.65 1.6 1.3 2.32 1.95z"
				transform="translate(-34.96 -43.43)"
				fill="url(#prefix__c)"
			/>
			<path
				d="M382.26 700.12c1.3-.3 2.62-.55 3.94-.73a47.42 47.42 0 0 1 26.62 3.92c-.84 6.18-1.67 12.57.11 18.54 1.24 4.2 3.73 8 4.26 12.38a7.3 7.3 0 0 1 5.75 5.08 11.05 11.05 0 0 1 .57 3.56 19 19 0 0 1-.56 4.44 4.48 4.48 0 0 1-4.8 4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63 26.63 0 0 1-7.79-6.37 3.55 3.55 0 0 1-.91-1.65c-.26-1.76 1.8-2.81 3.11-4a6.23 6.23 0 0 0 1-1.22c1.55-2.34 1.7-5.57 2.63-8.33 2.2-6.55 9-10.77 11.4-17.16.13-.35.25-.7.35-1.06"
				fill="#a26565"
			/>
			<path
				d="M423.51 742.87a19 19 0 0 1-.56 4.44 4.48 4.48 0 0 1-4.8 4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63 26.63 0 0 1-7.79-6.37 3.55 3.55 0 0 1-.91-1.65c-.26-1.76 1.8-2.81 3.11-4a6.23 6.23 0 0 0 1-1.22c3.86.83 8.65 3.26 11.6 4.2a35.22 35.22 0 0 1 8.44 3.53c3.68 2.36 6.33 6 9.45 9s7.15 5.73 11.5 5.36a19 19 0 0 0 6.54-2.26z"
				opacity={0.1}
			/>
			<path
				d="M407.12 600.76a4.63 4.63 0 0 1-1.7 5c-1.31.81-3 .7-4.3 1.58-1.61 1.13-1.84 3.37-2.12 5.31-1 6.67-4.31 12.72-7.14 18.85s-5.22 12.82-4.18 19.48c.71 4.52 2.93 9.34.85 13.41-.51 1-1.27 1.89-1.85 2.86-2.85 4.76-1.23 10.79-1.34 16.33a3.23 3.23 0 0 1-.39 1.77 4.89 4.89 0 0 1-1.58 1.22 8.38 8.38 0 0 0-3.41 6.43 24.57 24.57 0 0 0 .9 7.46 4.44 4.44 0 0 0 1.23 2.6 4.6 4.6 0 0 0 2.69.76 59.84 59.84 0 0 1 18.26 4.44c3.79 1.58 7.47 3.56 11.5 4.32a3 3 0 0 0 2.36-.25 3.25 3.25 0 0 0 1-1.73c1.55-5.1 3.12-10.36 2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9 5.39-17.12 7.32-26 .87-4 .87-8.14 1.49-12.18 1.68-11.07 7.78-21 10.13-31.95a34.73 34.73 0 0 1 1.52-6c1.75-4.24 5.8-7.68 5.89-12.27a4.78 4.78 0 0 0-.76-2.86 6.48 6.48 0 0 0-3.57-2 121.87 121.87 0 0 0-16.63-3.32 31.35 31.35 0 0 0-7.78-.54 22.9 22.9 0 0 0-9.52 3.36c-3.78 2.36-1.3 2.93-.46 6.37z"
				fill="#454b69"
			/>
			<path
				d="M407.12 600.76a4.63 4.63 0 0 1-1.7 5c-1.31.81-3 .7-4.3 1.58-1.61 1.13-1.84 3.37-2.12 5.31-1 6.67-4.31 12.72-7.14 18.85s-5.22 12.82-4.18 19.48c.71 4.52 2.93 9.34.85 13.41-.51 1-1.27 1.89-1.85 2.86-2.85 4.76-1.23 10.79-1.34 16.33a3.23 3.23 0 0 1-.39 1.77 4.89 4.89 0 0 1-1.58 1.22 8.38 8.38 0 0 0-3.41 6.43 24.57 24.57 0 0 0 .9 7.46 4.44 4.44 0 0 0 1.23 2.6 4.6 4.6 0 0 0 2.69.76 59.84 59.84 0 0 1 18.26 4.44c3.79 1.58 7.47 3.56 11.5 4.32a3 3 0 0 0 2.36-.25 3.25 3.25 0 0 0 1-1.73c1.55-5.1 3.12-10.36 2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9 5.39-17.12 7.32-26 .87-4 .87-8.14 1.49-12.18 1.68-11.07 7.78-21 10.13-31.95a34.73 34.73 0 0 1 1.52-6c1.75-4.24 5.8-7.68 5.89-12.27a4.78 4.78 0 0 0-.76-2.86 6.48 6.48 0 0 0-3.57-2 121.87 121.87 0 0 0-16.63-3.32 31.35 31.35 0 0 0-7.78-.54 22.9 22.9 0 0 0-9.52 3.36c-3.78 2.36-1.3 2.93-.46 6.37z"
				opacity={0.05}
			/>
			<path fill="#565661" d="M387.55 751.47h-8.53l-5.58-114.64-.39-6.52 7.25-2.55.49 6.93 6.76 116.78z" />
			<path opacity={0.1} d="M380.79 634.69l-7.35 2.14-.39-6.52 7.25-2.55.49 6.93z" />
			<path
				fill="#565661"
				d="M494.58 775.72l-14.07 1.7-64.82-147.11-17.48-1.28-30.7 8.96-5.97 175.15h-14.07l5.54-181.55-33.69.86-60.12 149.66h-12.79l63.23-174.91 2.44-6.74 94.23-3.23 23.49 13.17.3.76 64.48 164.56z"
			/>
			<path
				d="M430.1 611.16c-20.25 6.1-41.27 12.76-41.27 12.76s-19.17 6.69-27.29 0a12.27 12.27 0 0 0-3.39-1.87 16.7 16.7 0 0 0 3.39 1.87l-51.9-16.73 2.43-6.73 94.24-3.23 23.49 13.17z"
				opacity={0.1}
			/>
			<path
				d="M334.25 582.13l38.37-8.56s91.68 17.06 98.5 23.88c0 0-73.34 14.92-81.44 20s-56.29 10.73-55.43-35.32z"
				fill="#fff"
			/>
			<path
				d="M317.75 486.24c-3 9.51-11.19 18.08-21.16 18.49a3.69 3.69 0 0 1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64 1.54-4.1a2.68 2.68 0 0 0-.06-.89c-.26-1.19-1.23-2.25-2.37-2a4 4 0 0 0 .85-5.31 12 12 0 0 1-1.22-1.64c-.83-1.7.46-3.61 1-5.43 1.11-4-1.71-8-1.94-12.17-.2-3.73 1.69-7.24 2.16-10.94.75-6-2.23-11.75-2.58-17.74-.24-4.18.79-8.32 1.94-12.35 1-3.6 2.13-7.24 2.2-11 0-2.73-.47-5.43-.6-8.15a14.19 14.19 0 0 1 1.31-7.24 5.79 5.79 0 0 1 3.29-2.81c3.28-1.1 5.43.61 5.91 3.72.8 5.29.34 10.69 1.39 16a75 75 0 0 0 4.39 14.49c1.77 4.22 3.92 8.3 5.28 12.67a69.8 69.8 0 0 1 2.19 11c1.34 9.99 2.39 20.27-.64 29.78z"
				fill={primaryColor}
			/>
			<path
				d="M545.51 728.28a15.51 15.51 0 0 1-10.93 6.44c-4.34.54-8.85-.55-13.06.64a4 4 0 0 0-3 2.31 24.54 24.54 0 0 0-.19 2.45c-.49 2.67-4 3.27-6.73 3.25l-11.26-.07c-2.34 0-4.93-.13-6.61-1.75a4.92 4.92 0 0 1-.1-6.48 2.22 2.22 0 1 0-1.44-4.2 11.94 11.94 0 0 1 .21-4.41c0-4.18 1-11.18 3.94-14.45 3.61-4.07 9.87-9.33 15.32-10.42a12 12 0 0 1 10.38 2.98c2.58 2.4 4.46 6.16 8 6.58 1.93.24 3.79-.67 5.7-1a10.61 10.61 0 0 1 10.81 5.71 11.26 11.26 0 0 1 1 3.13 13 13 0 0 1-2.04 9.29z"
				fill="#a26565"
			/>
			<path
				d="M545.51 728.28a15.51 15.51 0 0 1-10.93 6.44c-4.34.54-8.85-.55-13.06.64a4 4 0 0 0-3 2.31 24.54 24.54 0 0 0-.19 2.45c-.49 2.67-4 3.27-6.73 3.25l-11.26-.07c-2.34 0-4.93-.13-6.61-1.75a4.92 4.92 0 0 1-.1-6.48c6.5-.27 12.89 0 19.37-1.34 2.63-.53 5.22-1.23 7.88-1.6 5.76-.82 11.89-.12 17.18-2.56 4.41-2 7.57-6.07 9.44-10.61a13 13 0 0 1-1.99 9.32z"
				opacity={0.1}
			/>
			<path
				d="M515.8 712.47c-4 3.1-8.69 5.52-13.73 5.78s-10.39-2-12.86-6.38c-3.61-6.43-.41-15.37-4.83-21.27-1.38-1.85-3.37-3.16-4.83-4.95s-2.3-4.48-1-6.38c-1.57.6-3.23-.92-3.69-2.54s-.17-3.36-.45-5c-.73-4.35-5-7.14-7.05-11s-1.77-8.87-2-13.44a51 51 0 0 0-11.8-30.35c-1.36-1.62-3.1-3.27-5.22-3.19.37-3.66-2.07-7.16-5.23-9s-6.92-2.46-10.58-2.82c-36.93-3.64-75.41 10.09-110.67-1.46-9.81-3.21-19.27-8.58-25.27-17a29.72 29.72 0 0 1-5.29-22.48v-.14c1.39-7.1 5.14-8.85 11.35-12.09a136.24 136.24 0 0 1 22.39-9.39c15-4.69 31.15-6.38 46.63-2.94 7.23 1.62 14.2 4.3 21.44 5.87 2.85.62 5.72 1.06 8.61 1.43 4.49.56 9 .93 13.52 1.45a204.53 204.53 0 0 1 42.46 9.55c5.13 1.74 10.26 3.73 14.67 6.88a32.5 32.5 0 0 1 13.06 21.5c.42 2.94.43 6 1.07 8.85a45 45 0 0 0 2.4 7 465.63 465.63 0 0 1 20.89 65 15.79 15.79 0 0 0 1.67 4.7c1.28 2.07 3.48 3.46 4.77 5.53 3 4.88.11 11.69 2.77 16.77.92 1.76 2.45 3.15 3.37 4.91 2.98 5.7-1.45 12.63-6.57 16.6z"
				fill="#454b69"
			/>
			<path
				d="M464.7 597.57a16.5 16.5 0 0 0 3.63-4 7.46 7.46 0 0 0 1.1-5.17 14.79 14.79 0 0 1-3.89 12.72c-2.51 2.57-7.22 5.09-10.89 4.21.52-2.94 7.72-5.76 10.05-7.76zM402.22 547.73a6.71 6.71 0 0 1-4.44 4.58 18.5 18.5 0 0 1-6.59.77h-2c-26.24-.58-52.76-6.4-78.39-.85a56.76 56.76 0 0 0-9.06 2.67 40.9 40.9 0 0 0-10.41 6v-.14c1.39-7.1 5.14-8.85 11.35-12.09a136.24 136.24 0 0 1 22.36-9.3c15-4.69 31.15-6.38 46.63-2.94 7.23 1.62 14.2 4.3 21.44 5.87 2.85.62 5.72 1.06 8.61 1.43a6.91 6.91 0 0 1 .5 4z"
				opacity={0.1}
			/>
			<path
				d="M402.22 546.3a6.7 6.7 0 0 1-4.44 4.59 18.27 18.27 0 0 1-6.59.76h-2c-26.24-.58-52.76-6.4-78.39-.85a57.78 57.78 0 0 0-9.06 2.66 41.2 41.2 0 0 0-10.85 6.4q-1.15-3.16-2.29-6.33c-.92-2.52 2-3.08 2.56-5.34.37-1.53-.26-3.27-.58-4.9a8.55 8.55 0 0 1-.16-1.21c-.18-3.61 1.11-5.69 4.07-7.64 8.78-5.8 19.49-9.78 29.51-12.77a73 73 0 0 1 16.4-3.18c7.88-.46 15.75 1 23.42 2.85 9.43 2.33 18.76 5.41 27.12 10.34 4.11 2.42 8.1 5.43 10.29 9.68a7.6 7.6 0 0 1 .99 4.94z"
				fill="#a26565"
			/>
			<path
				d="M317.75 486.24c-3 9.51-11.19 18.08-21.16 18.49a3.69 3.69 0 0 1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64 1.54-4.1a2.68 2.68 0 0 0-.06-.89c5.29-7.46 10.42-15 12.45-23.83a12.74 12.74 0 0 0 .37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53a88 88 0 0 0-6.84-41.14c-1.35-3.12-2.89-6.28-3.36-9.61a5.79 5.79 0 0 1 3.29-2.81c3.28-1.1 5.43.61 5.91 3.72.8 5.29.34 10.69 1.39 16a75 75 0 0 0 4.39 14.49c1.77 4.22 3.92 8.3 5.28 12.67a69.8 69.8 0 0 1 2.19 11c1.37 9.97 2.42 20.25-.61 29.76zM402.22 546.3a6.7 6.7 0 0 1-4.44 4.59 18.27 18.27 0 0 1-6.59.76h-2a43.57 43.57 0 0 0-29-7c-3.26.39-6.52 1.15-9.78.85-6.59-.6-11.93-5.34-17.8-8.37a37.38 37.38 0 0 0-41.43 5.62l-.57.5a8.55 8.55 0 0 1-.16-1.21c-.18-3.61 1.11-5.69 4.07-7.64 8.78-5.8 19.49-9.78 29.51-12.77a73 73 0 0 1 16.4-3.18c7.88-.46 15.75 1 23.42 2.85 9.43 2.33 18.76 5.41 27.12 10.34 4.11 2.42 8.1 5.43 10.29 9.68a7.6 7.6 0 0 1 .96 4.98z"
				opacity={0.1}
			/>
			<path
				d="M424.65 436.76l-.14.36c-2.24 5.81-6.36 10.72-9 16.38-3.33 7.17-4.15 15.21-4.89 23.09-.64 6.75-1.27 13.54-.76 20.31 1.28 16.68 9.43 32.5 11.61 48.86a54.31 54.31 0 0 1 .41 11.41c-.18 2.41-.62 5-2.22 6.78s-4.71 2.48-6.43.77c.77-1.47 1.55-2.93 2.33-4.4-4.57-3.55-11.45-1-16.79-3.22-2.35-1-4.23-2.8-6.2-4.41a43.48 43.48 0 0 0-32.39-9.46c-3.26.4-6.52 1.16-9.78.86-6.59-.61-11.93-5.34-17.8-8.37a37.4 37.4 0 0 0-41.43 5.61c-1.4 1.3-3.28 2.82-5 2a4.16 4.16 0 0 1-1.55-1.69c-6.55-11.19-1.73-25.62 5.27-36.52s16.27-20.95 19.15-33.55a12.53 12.53 0 0 0 .37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53a88 88 0 0 0-6.84-41.14c-1.6-3.73-3.5-7.51-3.5-11.56 0-6.38 4.57-11.67 8.35-16.8 4.35-5.9 8-12.43 13.51-17.28 5.22-4.61 12.78-7.43 19.24-5.09a119.94 119.94 0 0 1 33.56-3.24c3.9.18 7.93.59 11.35 2.48 3.66 2 6.29 5.56 9.89 7.69 2.63 1.57 5.66 2.31 8.52 3.41a35.21 35.21 0 0 1 18.36 16.45c4 7.75 5 16.66 5.88 25.34.86 8.11 1.66 16.61-1.18 24.3z"
				fill={primaryColor}
			/>
			<path
				d="M409.86 496.9c1.28 16.68 9.43 32.5 11.61 48.86-4.36-3.72-10.41-7.4-11.24-11.69-.9-4.64-3.78-10.72-4.26-15.41s2.81-10.42-.64-13.64c-1.68-1.57 2.79-1.13 1.15-2.74-3.69-3.59-4.6-9.12-4.83-14.25-.39-9.08.76-18.26-.91-27.19-1-5.51-3.09-10.76-4.76-16.11-1.94-6.23-3.34-12.61-4.74-19a133.12 133.12 0 0 1-3-17.26c-.43-5-.23-10.3 2-14.86s6.74-8.26 11.8-8.19c16.92.22 14 23.16 17.72 33.76 1.49 4.22 3.5 8.3 4.31 12.7a33.66 33.66 0 0 1 .48 5.22c-2.24 5.81-6.36 10.72-9 16.38-3.33 7.17-4.15 15.21-4.89 23.09-.68 6.77-1.31 13.56-.8 20.33z"
				opacity={0.1}
			/>
			<path
				d="M420.86 418.92c1.49 4.22 3.5 8.3 4.31 12.7 1.35 7.37-.74 15.2 1.53 22.34a38.92 38.92 0 0 1 1.48 4.67c.39 2.27-.06 4.59-.06 6.9 0 3.72 1.17 7.32 2.21 10.89a194.63 194.63 0 0 1 6.95 37.15 46.59 46.59 0 0 0 1.59 10 33.21 33.21 0 0 1 1.08 3.38 17.48 17.48 0 0 1 .19 4.63c-.27 4.9-.82 9.82-.27 14.7s2.33 9.83 6 13.1c-3.28.71-6.75 1.42-9.95.37-4.5-1.47-7.2-6-9.49-10.12-2.9-5.26-13.92-10-15.06-15.91-.89-4.63-3.77-10.71-4.25-15.41s2.8-10.41-.65-13.63c-1.67-1.57 2.8-1.14 1.15-2.74-3.68-3.59-4.59-9.12-4.82-14.26-.39-9.07.75-18.25-.91-27.18-1-5.51-3.09-10.76-4.76-16.12-1.94-6.22-3.34-12.6-4.74-19a131.73 131.73 0 0 1-3-17.26c-.43-5-.24-10.31 2-14.87s6.75-8.25 11.8-8.19c16.85.31 13.95 23.26 17.67 33.86z"
				fill={primaryColor}
			/>
			<path
				d="M372.64 422.83c1.58 1.85 3.61 3.88 6 3.52a1.3 1.3 0 0 1-1.77.42 3.8 3.8 0 0 1-1.33-1.53l-3.42-5.77c-.45-.75-3.55-5.12-4.31-2.6-.3 1.07 4.06 5.06 4.83 5.96zM370.8 437.22a7.62 7.62 0 0 0-2.23-5 12.5 12.5 0 0 0-4.13-2.49c-3.75-1.54-8.19-2.78-12.26-2.58 1.48 2.16 6.23 3.45 8.61 4.67q5.06 2.61 10.01 5.4zM381.45 478.18c-.69 5.12-4.88 9-9.12 12s-9 5.58-11.77 9.92c-1.92 3-2.78 6.48-4.41 9.61-1.8 3.45-4.49 6.35-6.64 9.59s-3.83 7.11-3.17 10.95a1.29 1.29 0 0 0 .46.92 1.31 1.31 0 0 0 1.27-.14c4.36-2.28 6.08-7.49 7.91-12a138.65 138.65 0 0 1 6.48-13.32c1.08-2 2.27-4.18 4.28-5.29a37.55 37.55 0 0 1 4.22-1.47 14.19 14.19 0 0 0 5.21-4.09 34.34 34.34 0 0 0 8-23.31c-.06-1.79-.16-10.41-2.85-7.75s.59 10.9.13 14.38z"
				opacity={0.1}
			/>
			<path
				d="M388.04 281.81c8.6 3.75 16 12 15.73 21.35-.23 9.82-8.45 19.07-5.62 28.48 1.64 5.46 6.58 9.12 10.49 13.27 14.89 15.76 14.86 43.27-.08 59-5.72 6-13.07 10.27-19.12 16-21.33 20.1-22.24 54.87-10.82 81.86a133.14 133.14 0 0 1-26.62 3c-4.19.05-9.32-.71-10.84-4.62-1.4-3.61 1-8.49-1.76-11.16-1.3-1.25-3.25-1.42-5-1.71-11.26-1.82-20.5-10.81-24.72-21.4s-4-22.51-1.58-33.65c1.72-8.05 4.41-16.91.42-24.11-5-9.06-19.38-12.88-19.16-23.24.18-8.49 10.19-12.62 15.87-18.93 10.48-11.62 5.49-29.65 5.47-45.31 0-13.78 4.82-28 15.08-37.18 15.26-13.77 44.65-9.3 62.26-1.65z"
				fill="#a26565"
			/>
			<g opacity={0.1}>
				<path d="M310.16 397.85c-4.39-7.92-15.92-11.84-18.6-19.63a11.09 11.09 0 0 0-2.16 6.26c-.22 10.36 14.14 14.18 19.16 23.25a18.89 18.89 0 0 1 2 10.42c1.58-6.96 2.97-14.22-.4-20.3zM399.3 318.82c1.8-5.25 4.41-10.55 4.54-16a15 15 0 0 0-.05-1.77c-2.01 5.99-5.09 11.86-4.49 17.77zM311.88 346.79c3.44-10.87.47-24.35.46-36.41 0-1.46.06-2.93.17-4.39a57.74 57.74 0 0 0-1.78 14.26c.02 8.61 1.53 17.95 1.15 26.54zM410.23 393.68c-5.72 6-13.07 10.27-19.12 16-10.8 10.17-16.35 24.1-17.74 38.87 2.58-11 7.79-21.13 16.14-29 6-5.7 13.4-9.95 19.12-16a42.49 42.49 0 0 0 11.15-27.06 40.61 40.61 0 0 1-9.55 17.19zM353.67 494.51c-4.19 0-9.32-.72-10.84-4.63-1.4-3.6 1-8.48-1.76-11.16-1.3-1.25-3.26-1.42-5-1.71-11.25-1.81-20.49-10.81-24.71-21.39-3.11-7.82-3.78-16.35-3-24.77-.08.33-.15.66-.22 1-2.38 11.14-2.63 23.07 1.58 33.66s13.46 19.58 24.71 21.39c1.78.29 3.74.47 5 1.71 2.79 2.68.36 7.56 1.76 11.16 1.52 3.91 6.65 4.68 10.84 4.63a133.23 133.23 0 0 0 26.62-3 89.38 89.38 0 0 1-3.23-8.93 132.74 132.74 0 0 1-21.75 2.04z" />
			</g>
			<path
				d="M386.42 450.9c2.47 1.86 5.15-5.23 3.62-7-.41.46-4 6.74-3.62 7zM396.95 579.24c2.91-1 6-2 7.9-4.4 1.57-1.93 2.86-9.59-.46-5.92-2.82 3.13-4.15 7.3-7.44 10.32zM426.58 571.21c-.35 2.36-1 4.81-2.67 6.51-.31.32-1 .52-1.09.09a25.29 25.29 0 0 0 5.16-3.64c3.38-3.35 3.84-11.6-1.31-13.79-.05 3.62.46 7.19-.09 10.83z"
				opacity={0.1}
			/>
			<path
				d="M462.15 556.34s-28.38-11.15-38.64-10 11.62 17.32 11.62 17.32l13.08 8.82s8-3 8.53-3.23 5.41-12.91 5.41-12.91z"
				fill="#454b69"
			/>
			<path
				d="M266.88 436.72s21.32-12.36 49.46 3 32.83 105.75 32.83 105.75-11.51 92.1 32.87 71.62c0 0 81-25.15 89.11-19.61 0 0 7.68 0-7.67 3.41s-74.62 22.17-74.62 22.17-19.17 6.7-27.29 0-31.13.86-34.12-45.2a801 801 0 0 0-10.66-86.56l-7.91-23.45z"
				fill="#565661"
			/>
			<path
				d="M264.32 579.14s9.38-93.38-6-127.07c-13.38-29.36 38.36-15.63 51.86-11.63a9.83 9.83 0 0 1 5.18 3.7c8 11.25 36.7 56.34 28.24 116.67 0 0-3.41 53.73 17.91 62.25l-65.69-21.16c-5.33-1.72-10.74-3.15-16.2-4.39-6.96-1.58-18.3-6.07-15.3-18.37z"
				fill="#fff"
			/>
			<path d="M666.9 412.08s-4.59 21.38 15.84 23.91l1.27-2.37s-15.84-14.89-17.11-21.54z" fill={primaryColor} />
			<path
				d="M690.5 433.45l-4.75 1-.47.11s-12.68-10.29-12.52-33.26a58.25 58.25 0 0 0 6 9.58c5.08 6.69 10.79 15.52 11.74 22.57z"
				fill={primaryColor}
			/>
			<path
				d="M692.11 435.66a3 3 0 0 1-2.56.33c-12.2-2.85-8.07-42.59-8.07-42.59.67.31 1.41 5.36 4.21 11.89 4.93 11.47 10.35 27.49 6.42 30.37zM719.16 412.08s.79 21.38-19.64 23.91l-1.26-2.37s19.63-14.89 20.9-21.54z"
				fill={primaryColor}
			/>
			<path
				d="M713.3 401.31c.16 22.97-16.26 33.26-16.26 33.26l-.47-.11-4.75-1c.94-7.05 6.66-15.92 11.67-22.56a51.49 51.49 0 0 1 9.81-9.59z"
				fill={primaryColor}
			/>
			<path
				d="M696.44 433.57a7.57 7.57 0 0 1-2.72 2.08 5 5 0 0 1-1 .33c-3 .7-4-1.46-3.88-5.14.28-6.55 4.4-17.9 8.09-26.39 2.66-6.12 7-10.76 7.66-11.06 0 .01-.18 30.95-8.15 40.18z"
				fill={primaryColor}
			/>
			<path d="M693.04 379.46s-13.62 48.3-1.9 55.58 4.9-51.31 1.9-55.58z" fill={primaryColor} />
			<path d="M666.9 412.08s-4.59 21.38 15.84 23.91l1.27-2.37s-15.84-14.89-17.11-21.54z" opacity={0.1} />
			<path
				d="M690.5 433.45l-4.75 1-.47.11s-12.68-10.29-12.52-33.26a58.25 58.25 0 0 0 6 9.58c5.08 6.69 10.79 15.52 11.74 22.57z"
				opacity={0.1}
			/>
			<path
				d="M692.11 435.66a3 3 0 0 1-2.56.33c-12.2-2.85-8.07-42.59-8.07-42.59.67.31 1.41 5.36 4.21 11.89 4.93 11.47 10.35 27.49 6.42 30.37zM719.16 412.08s.79 21.38-19.64 23.91l-1.26-2.37s19.63-14.89 20.9-21.54z"
				opacity={0.1}
			/>
			<path
				d="M713.3 401.31c.16 22.97-16.26 33.26-16.26 33.26l-.47-.11-4.75-1c.94-7.05 6.66-15.92 11.67-22.56a51.49 51.49 0 0 1 9.81-9.59z"
				opacity={0.1}
			/>
			<path
				d="M696.44 433.57a7.57 7.57 0 0 1-2.72 2.08 5 5 0 0 1-1 .33c-3 .7-4-1.46-3.88-5.14.28-6.55 4.4-17.9 8.09-26.39 2.66-6.12 7-10.76 7.66-11.06 0 .01-.18 30.95-8.15 40.18z"
				opacity={0.1}
			/>
			<path d="M693.04 379.46s-13.62 48.3-1.9 55.58 4.9-51.31 1.9-55.58z" opacity={0.1} />
			<path d="M666.9 412.08s-2.69 21.38 17.74 23.91l1.27-2.37s-17.74-14.89-19.01-21.54z" fill={primaryColor} />
			<path
				d="M692.4 433.45l-4.75 1-.47.11s-14.58-10.29-14.42-33.26c0 0 3.74 4 7.95 9.58 5.03 6.69 10.74 15.52 11.69 22.57z"
				fill={primaryColor}
			/>
			<path
				d="M692.4 433.45l-4.75 1c-4.5-3.95-6.29-14.27-6.94-23.57 5.03 6.69 10.74 15.52 11.69 22.57z"
				opacity={0.1}
			/>
			<path
				d="M694.04 435.66a3 3 0 0 1-2.56.33c-12.2-2.85-10-42.59-10-42.59.67.31 3.31 5.36 6.11 11.89 4.93 11.47 10.33 27.49 6.45 30.37zM719.16 412.08s2.69 21.38-17.74 23.91l-1.26-2.37s17.73-14.89 19-21.54z"
				fill={primaryColor}
			/>
			<path
				d="M713.3 401.31c.16 23-14.41 33.26-14.41 33.26l-.47-.11-4.75-1c.94-7.05 6.66-15.92 11.67-22.56 4.23-5.59 7.96-9.59 7.96-9.59z"
				fill={primaryColor}
			/>
			<path
				d="M705.34 410.89c-.61 8.67-2.19 18.22-6 22.69a9.06 9.06 0 0 1-.87.88l-4.75-1c.89-7.06 6.61-15.89 11.62-22.57z"
				opacity={0.1}
			/>
			<path
				d="M698.34 433.57a7.57 7.57 0 0 1-2.72 2.08 5 5 0 0 1-1 .33c-3 .7-4.05-1.46-3.88-5.14.28-6.55 4.4-17.9 8.09-26.39 2.66-6.12 5.12-10.76 5.76-11.06 0 .01 1.72 30.95-6.25 40.18z"
				fill={primaryColor}
			/>
			<path
				d="M694.04 435.66a3.35 3.35 0 0 1-1.93-.62c-5.74-3.57-5.85-17-4.49-29.75 4.9 11.47 10.3 27.49 6.42 30.37z"
				opacity={0.1}
			/>
			<path
				d="M698.34 433.57c-.66 1.42-1.55 2.18-2.72 2.08a3.92 3.92 0 0 1-1.63-.62 8.67 8.67 0 0 1-3.24-4.19c.28-6.55 4.4-17.9 8.09-26.39 1.31 11.8 1.75 24.29-.5 29.12z"
				opacity={0.1}
			/>
			<path d="M693.04 379.46s-11.72 48.3 0 55.58 3-51.31 0-55.58z" fill={primaryColor} />
			<path fill="#565661" d="M711.41 437.42l-.82 4.27-2.98 15.68h-28.36l-2.98-15.68-.82-4.27h35.96z" />
			<path opacity={0.1} d="M711.41 437.42l-.82 4.27h-34.32l-.82-4.27h35.96z" />
			<path fill="#565661" d="M668.65 432.67h48.77v8.08h-48.77z" />
			<path
				d="M552.77 448.18l-26.73 2.15-38.09-2.48.66-.06 35.28-3.4c8.08-3 2.48-20.45 2.48-20.45l27 1.38 2.15.11c9.61 22.42-2.75 22.75-2.75 22.75z"
				fill="#d1d9ec"
			/>
			<path
				d="M552.77 448.18l-26.73 2.15-38.09-2.48.66-.06 38.5 1.38 25.8-2.8c7.32-1.93 3.13-14.64.49-21.05l2.15.11c9.58 22.42-2.78 22.75-2.78 22.75z"
				opacity={0.1}
			/>
			<path
				d="M599.54 289.38l-8.17 117.19-1.07 15.39a6.68 6.68 0 0 1-6.71 6.21h-2.48l-123-.75a3.45 3.45 0 0 1-3.41-3.79l1.06-10.39 8.65-85.06a7.13 7.13 0 0 1 4.73-6l117.23-40.59c4-1.38 8-.89 10.59 1.22a7.48 7.48 0 0 1 2.58 6.57z"
				fill="#4c4c56"
			/>
			<path
				d="M591.37 406.57l-1.07 15.39a6.68 6.68 0 0 1-6.71 6.21h-2.48l-123-.75a3.45 3.45 0 0 1-3.41-3.79l1.06-10.39z"
				fill="#dfe6f5"
			/>
			<ellipse cx={508.91} cy={419.33} rx={1.65} ry={3.3} fill="#fff" />
			<path
				d="M569.12 452.04s33.64-12.7 42.71-3.46c0 0 1.48 2.8-4.62 3.46l-24.65 2s-10.14.97-13.44-2z"
				fill="#d1d9ec"
			/>
			<path
				d="M570.04 448.74c6.61-2.7 26.5-9.69 39.23-2 0 0-14.09-1.56-21.82 2.91S569.14 452 569.14 452l-.15-.28a2.13 2.13 0 0 1 1.05-2.98zM599.54 289.38l-9.24 132.6a6.68 6.68 0 0 1-6.71 6.21h-2.48a23.49 23.49 0 0 0 4.3-5.56s9.07-133.22 9.73-136.52a6.82 6.82 0 0 1 1.83-3.26 7.48 7.48 0 0 1 2.57 6.53z"
				fill="#dfe6f5"
			/>
			<path
				d="M599.54 289.38l-9.24 132.6a6.68 6.68 0 0 1-6.71 6.21h-2.48a23.49 23.49 0 0 0 4.3-5.56s9.07-133.22 9.73-136.52a6.82 6.82 0 0 1 1.83-3.26 7.48 7.48 0 0 1 2.57 6.53z"
				opacity={0.1}
			/>
			<ellipse cx={148.97} cy={730.07} rx={97.44} ry={15.65} fill={primaryColor} opacity={0.1} />
			<path fill="#535461" d="M145.83 430.26h6.27v141.17h-6.27z" />
			<path
				d="M191.51 571l-.39 6.36-.56 9-.23 3.74-.55 9-.24 3.74-.56 9-6.32 102.07a17.3 17.3 0 0 1-17.26 16.22h-32.87a17.28 17.28 0 0 1-17.24-16.22l-6.34-102.14-.55-9-.23-3.74-.57-9-.23-3.74-.55-9-.4-6.36a9 9 0 0 1 8.94-9.51h67.22a9 9 0 0 1 8.93 9.58z"
				fill="#565661"
			/>
			<path
				fill="#9d9cb5"
				d="M191.12 577.36l-.56 8.97h-83.18l-.56-8.97h84.3zM190.33 590.08l-.55 8.98h-81.61l-.56-8.98h82.72zM189.54 602.8l-.56 8.97h-80.03l-.55-8.97h81.14z"
			/>
			<path
				d="M97.24 483.17c36.52 26.42 51.73 67.74 51.73 67.74s-44-1.51-80.53-27.93-51.72-67.73-51.72-67.73 44.01 1.51 80.52 27.92z"
				fill={primaryColor}
			/>
			<path
				d="M16.72 455.25s45.67 25.32 60.32 46.32 71.92 49.32 71.92 49.32"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M120.81 429.95c19.88 14.37 28.16 36.87 28.16 36.87s-24-.83-43.83-15.2-28.1-36.87-28.1-36.87 23.9.82 43.77 15.2z"
				fill={primaryColor}
			/>
			<path
				d="M77.04 414.75s24.86 13.8 32.83 25.22 39.15 26.85 39.15 26.85"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M177.85 465.67c-22.81 25.09-27.66 57.9-27.66 57.9s32.19-7.9 55-33 27.66-57.88 27.66-57.88-32.17 7.88-55 32.98z"
				fill={primaryColor}
			/>
			<path
				d="M232.87 432.68s-29.74 25.72-37.3 43.44-45.38 47.45-45.38 47.45"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<g opacity={0.87}>
				<path
					d="M818.9 157.03c-3.84-3.91-7.9-8.26-8.66-13.92-.59-4.38 1-8.81 3.16-12.55s5-7 7.39-10.6c3-4.63 5.28-9.84 8.68-14.16 5.25-6.67 12.9-10.69 20.76-12.74s16-2.3 24.1-2.54c6.48-.19 13.07-.36 19.33 1.45 4.58 1.32 8.85 3.67 13.06 6 5.91 3.29 11.89 6.69 16.66 11.71a38.44 38.44 0 0 1 9.48 17.89c1.7 7.37 1.21 15.52-2.29 22.1a49.48 49.48 0 0 1-5.43 7.68l-6.16 7.61a22.62 22.62 0 0 1-4.54 4.61 19.78 19.78 0 0 1-7.18 2.58 256.12 256.12 0 0 1-52.48 5.58c-6.37 0-11.52-3.5-17.39-6-7.16-3.16-12.94-9.06-18.49-14.7z"
					fill="#454b69"
				/>
				<path
					d="M824.83 157.03c-3.64-3.91-7.49-8.26-8.22-13.92-.55-4.38.92-8.81 3-12.55s4.77-7 7-10.6c2.87-4.63 5-9.84 8.23-14.16 5-6.67 12.24-10.69 19.7-12.74s15.19-2.3 22.85-2.54c6.15-.19 12.39-.36 18.33 1.45 4.35 1.32 8.39 3.67 12.39 6 5.6 3.29 11.28 6.69 15.8 11.71a39.17 39.17 0 0 1 9 17.83c1.61 7.37 1.14 15.52-2.17 22.1a50 50 0 0 1-5.15 7.68l-5.85 7.61a21.83 21.83 0 0 1-4.3 4.62 18.17 18.17 0 0 1-6.81 2.58 230.8 230.8 0 0 1-49.77 5.58c-6 0-10.92-3.5-16.49-6-6.79-3.11-12.28-9.01-17.54-14.65z"
					opacity={0.1}
				/>
				<path
					d="M825.17 95.1a180.58 180.58 0 0 1 14.14-13.47c7.33-6.28 16.14-12.38 26.59-12.79a35.9 35.9 0 0 1 18 4.6c5.39 2.89 10 6.66 14.6 10.4l18.17 14.86c1.52 1.24 3.11 2.59 3.51 4.33a3.18 3.18 0 0 1-3.13 3.8 6.07 6.07 0 0 1-2.61-1 87.73 87.73 0 0 0-78.88-2.18c-3.07 1.46-9 6.74-12.13 4.6-4.47-3.09-.98-10.27 1.74-13.15z"
					fill="#454b69"
				/>
				<path
					d="M898.82 153.18c-12-2.87-24.91-2.78-37.56-2.66-8.57.08-17.5.22-25.13 2.94-5.23 1.87-9.91 5.6-8.92 9.63s6.7 6.32 11.84 8.14c11 3.9 22.82 7.9 35 6.77 12.62-1.16 53.89-17.83 24.77-24.82z"
					opacity={0.1}
				/>
				<path
					d="M834.44 155.98c-4.93 0-6.21 6.88-5.39 11.73s1.3 11.33-3.25 13.21a12.76 12.76 0 0 1-4.82.5c-11 .05-20.8 6.6-29.84 12.89-1.55 1.09-3.18 2.26-3.92 4-.54 1.27-.59 2.77-1.48 3.81a6.58 6.58 0 0 1-3.39 1.63 25.66 25.66 0 0 0-18 24.51c-11.4 3.85-19.2 16.33-17.65 28.26a18.94 18.94 0 0 0-13 19.65c-9.75 4.45-14.19 17.79-9 27.19 1.81 3.3 4.46 7.73 1.64 10.22 3.47 4.7 7.25 9.64 12.74 11.63s13-.66 13.9-6.43a16.36 16.36 0 0 0 24.06-16.14c8.36-1.31 14-11.42 10.82-19.25l8.35-3.7a17.41 17.41 0 0 0-1.52 19.75 10.17 10.17 0 0 1 1.82 3.76c.32 2.41-1.58 4.47-3 6.49a17.21 17.21 0 0 0-.3 18.32c1 1.64 2.38 3.22 2.47 5.15.1 2.3-1.61 4.22-2.73 6.23-5 8.95 1.91 19.63 8.43 27.5-8.22 8.15-4.74 23.24 4.38 30.37s21.59 8.07 33.14 7.27 23.17-3 34.6-1.19c6 1 11.74 3.06 17.74 3.85 10.3 1.36 20.74-1.16 30.52-4.66 5.3-1.9 11-4.55 13.23-9.71 2.52-5.8-.22-12.42-.34-18.74-.18-9.48 5.59-18.09 6.8-27.5.74-5.76-.25-11.57-1-17.32a206.54 206.54 0 0 1-.51-49.07l3 4.56a2.38 2.38 0 0 0 2.72-2.42c.59 6.22-3.86 14.41 1.5 17.63 1.58 1 3.53 1 5.32 1.41a14.33 14.33 0 0 1 8.16 6.2c2.8 4.18 4 9.34 7.26 13.22s9.91 5.76 13.07 1.83a38.89 38.89 0 0 0 26.46-9.84 9.33 9.33 0 0 1-2.07-7.22c6.09.08 8.65-8.4 6.4-14.07s-7.15-10-9.36-15.66c-2-5.13-1.77-11.25-5.22-15.55-1.63-2.05-4-3.46-5.51-5.58-1.89-2.59-2.38-5.9-3.28-9a33.46 33.46 0 0 0-15.69-19.67c2.21-10.31-5-20.68-15.26-23.26a16.74 16.74 0 0 1-3.43-1c-3.73-1.86-4.43-6.78-6.67-10.3-3.57-5.62-10.86-7.31-17.41-8.51l-19.78-3.66a6.24 6.24 0 0 1-3.19-1.23 5.07 5.07 0 0 1-1.34-3.08c-.82-5.73 2-11.46 1.56-17.23-.15-1.73-.92-3.77-2.63-4.06a4.75 4.75 0 0 0-2.65.63 130.15 130.15 0 0 1-21.42 7 83.93 83.93 0 0 1-16.44 2.88c-10.66.52-21-1.9-29.6-8.23z"
					fill="#454b69"
				/>
				<path
					d="M911.75 103.63c2.87-2 5.82-4.16 7.81-7.46s2.76-8.12 1-11.57c2.37 4.08 4.49 8.76 4.4 13.82s-3.18 10.29-7.21 10.21c3-.25 6.24-.62 8.51-3.1s2.68-7.86 0-9.63a12.81 12.81 0 0 1 3.07 10.38c-.55 3.81-2.83 7.15-5.75 8.4 2.56-6.68 10-9.48 15.1-5.65a22.41 22.41 0 0 0-10.94 10.54c3.09-2.31 7.39-4.46 9.91-1.25-4.87 1-9.36 4.64-12 9.87a74 74 0 0 1 15.17-.39 24.27 24.27 0 0 0-13.9 9.42 85 85 0 0 1 10.84 3.89 18 18 0 0 1-9.34 2c6 4.34 10.28 12.18 11.34 20.75a34.23 34.23 0 0 0-6.92-5.28c-2-1.13-4.34-2-6.23-.68s-2.05 5.74.08 6.27l-8.68-.63a12.92 12.92 0 0 1 5.36 9 10.72 10.72 0 0 1-4.74-1.53 30.57 30.57 0 0 1 8.27 12.4c-3.56-2.78-7.4-5.66-11.59-5.55-3.07.08-6 1.77-9 2.29-5.4.93-11.12-2.2-14.26-7.8a27.76 27.76 0 0 1 11 .54 53.29 53.29 0 0 0-3.13-11.64 19.63 19.63 0 0 1 5.26 5.08 60.2 60.2 0 0 0-.32-15.81l4.56 4.73a50.92 50.92 0 0 0-2.41-10.33 39.74 39.74 0 0 0 8.86 11.25l-6.73-11.64 11.11 8.04c1.15-.93.28-3.18-.69-4.39a52.37 52.37 0 0 0-10.33-9.84 33.75 33.75 0 0 1 8.84 2.63c-1.21-6.26-6.47-10.85-11.57-10.09a31 31 0 0 1 12.29-4.18c-4.35-3.39-10-6.77-14.25-3.1a49.73 49.73 0 0 0 11.69-4.38 7.65 7.65 0 0 0-9.16-2.11c-3 1.51-5.28 5.3-5.54 9.39-.15-5.88 3.37-11.59 8-12.9-1.79-.91-3.65-1.84-5.58-1.69a4.74 4.74 0 0 0-4.2 4.15 29.35 29.35 0 0 1 3.63-10.42c-2.54-1.33-5.61.6-7 3.57s-1.44 6.65-1 10.06a105.53 105.53 0 0 0-1-22 63.27 63.27 0 0 0-1.08 17.44"
					fill={primaryColor}
				/>
				<path fill="#fff" opacity={0.2} d="M864.03 164.21h6.78v238.77h-6.78z" />
				<ellipse cx={927.82} cy={740.15} rx={159.04} ry={34.89} fill={primaryColor} opacity={0.1} />
				<path fill="#565661" d="M943.96 91.48h11.71v676.79h-11.71z" />
				<ellipse
					cx={949.82}
					cy={132.45}
					rx={52.67}
					ry={8.51}
					fill="none"
					stroke="#565661"
					strokeMiterlimit={10}
					strokeWidth={9}
				/>
				<path
					d="M880.38 87.87a21.76 21.76 0 0 0-10.34 36.31c6.13 6.29 15.3 8.27 23.85 10.27 16.41 3.84 34 9.86 42.88 24.17a36 36 0 0 1 3.13 31 18 18 0 0 1-4.05 6.75 20.57 20.57 0 0 1-8 4.31 71.14 71.14 0 0 1-41.1 1.1M1017.39 87.87a21.77 21.77 0 0 1 10.34 36.31c-6.13 6.29-15.3 8.27-23.85 10.27-16.41 3.84-34 9.86-42.88 24.17a36 36 0 0 0-3.13 31 18 18 0 0 0 4 6.75 20.57 20.57 0 0 0 8 4.31 71.14 71.14 0 0 0 41.1 1.1"
					fill="none"
					stroke="#565661"
					strokeMiterlimit={10}
					strokeWidth={9}
				/>
				<ellipse
					cx={949.82}
					cy={527.24}
					rx={48.95}
					ry={13.83}
					fill="none"
					stroke="#565661"
					strokeMiterlimit={10}
					strokeWidth={9}
				/>
				<ellipse
					cx={949.82}
					cy={701.04}
					rx={48.95}
					ry={13.83}
					fill="none"
					stroke="#565661"
					strokeMiterlimit={10}
					strokeWidth={9}
				/>
				<path
					d="M902.36 531.45a132 132 0 0 1 38.1 67.29 79.83 79.83 0 0 1 2 14.34c.38 11-2.41 21.92-6 32.35-6.77 19.74-16.83 38.92-32.61 52.56-14.16 12.24-32 19.27-49.75 25.21M997.27 531.45a132 132 0 0 0-38.1 67.29 80.73 80.73 0 0 0-2 14.34c-.38 11 2.41 21.92 6 32.35 6.76 19.74 16.82 38.92 32.61 52.56 14.15 12.24 32 19.27 49.74 25.21"
					fill="none"
					stroke="#565661"
					strokeMiterlimit={10}
					strokeWidth={9}
				/>
				<path fill="#454b69" d="M840.75 82.48h25.94v10.61h-25.94z" />
				<path
					d="M897.29 114.76l-5.25-14.65a11.68 11.68 0 0 0-2.52-4.63c-1.24-1.15-3.25-1.42-4.34-.07a30.65 30.65 0 0 1 4.26 8c.91 3 .91 6.48-.66 9A38.17 38.17 0 0 0 878.54 90a83.34 83.34 0 0 1 5.14 13.33l-7.15-8.41a40.42 40.42 0 0 0 .1 19.37 28 28 0 0 1-6.21-17.15 21.78 21.78 0 0 1-1.59 7.73 12.41 12.41 0 0 1-3-8.28 23.25 23.25 0 0 0-2.87 19.25 36.53 36.53 0 0 1-5.38-18.57 44.76 44.76 0 0 0-1.75 20.45 28.22 28.22 0 0 1-7.15-16.36 67 67 0 0 0 3 18.39c-3.31-.93-5.16-4.85-6.92-8.22s-4.54-6.91-7.91-6.3a20.81 20.81 0 0 1 5.37 12.44c-1.63-.22-2.86-1.9-4.46-2.29-2.26-.54-4.54 2.16-4.18 4.78s3.05 4.38 5.24 3.57a8.44 8.44 0 0 0-9.19 1.85 11.88 11.88 0 0 0-3.11 10.16c1.3-3.78 5.23-6.07 8.64-5-5.23.76-9.64 6.21-10 12.27 1.28-.89 1.89-2.62 2.94-3.84s3.16-1.66 3.79-.1a4 4 0 0 1-.06 2.34l-2.67 11.66 13.58-5.93a54.1 54.1 0 0 1-5.07 15.86l7.68-2.52a23.89 23.89 0 0 0-6.25 12.2c.79-4.1 6.08-7.43 9.38-7.24.64 6.39-2.63 11.06-8 11.44-7.67.55-14.56-.78-22.16 1.91a14.35 14.35 0 0 1 13.56-6c-3.87-5.41-10.8-7.59-16.52-5.18a11.27 11.27 0 0 1 9.6-4.92c-2.62-4.36-8.19-5.91-12.25-3.41a14.9 14.9 0 0 1 7.34-6.76c-2.9-2.56-7-2.76-10.46-1.56s-6.57 3.62-9.57 6a9.13 9.13 0 0 1 1.6-8.83 6.36 6.36 0 0 1 7.7-1.46c-1.24-3.7-4.79-6.17-8.2-5.72a8.09 8.09 0 0 1 9.38-3 15.54 15.54 0 0 0-5.46-12.27 12.36 12.36 0 0 1 6.45 4.43 12.89 12.89 0 0 0-1.89-10 31.34 31.34 0 0 0-6.88-7 27.38 27.38 0 0 1 16.13.08l-4.6-16.36 9.27 11.66a73 73 0 0 1-.92-18 44.59 44.59 0 0 0 5.44 12.08 152.17 152.17 0 0 1-1.18-16.53c0-1.41.1-3.1 1.17-3.79s2.26 0 3 1a12.13 12.13 0 0 1 1.31 3.53 21.8 21.8 0 0 0 6.18 10.14 20.43 20.43 0 0 1 7-15.05 55.6 55.6 0 0 0 1.79 13.19c-3-.19-4.67-4.52-3.78-7.8s3.45-5.55 6-7.33 5.3-3.4 7.1-6.13a59.59 59.59 0 0 0 1.28 19.12c.94-4.32.88-8.89 2.09-13.12s4.29-8.28 8.14-8.15a27.17 27.17 0 0 0-3.69 7.36c-.75 2.71-.63 5.91.92 8.13.55-4 1.12-8.11 2.67-11.77s4.23-6.9 7.67-7.82a30 30 0 0 0 1.45 20.56c0-5.82 1.62-12.38 6.13-15a13.59 13.59 0 0 0-1.25 11.46 28.88 28.88 0 0 1 4-15.36 60.52 60.52 0 0 0 3.33 19.83 50.51 50.51 0 0 1 10.67-15 38.28 38.28 0 0 0 1.87 19.09 31 31 0 0 1 .34-8.4c.63-2.72 2.17-5.32 4.46-6.29l.43 18.9c4.83-2.74 6.46-11 3.15-15.87 3.9 2.32 8 4.89 10.15 9.31s1.13 11.23-3 12.84"
					fill={primaryColor}
				/>
				<rect x={847.54} y={84.6} width={26} height={20.02} rx={10.01} ry={10.01} fill={primaryColor} />
			</g>
		</svg>
	);
};

UndrawWinterDesigner.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawWinterDesigner;
