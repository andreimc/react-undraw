import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawEasterEggHunt = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 942.32 779.85" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={649} y1={786.9} x2={670.06} y2={786.9} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
				<linearGradient id="prefix__b" x1={994.11} y1={625.39} x2={1014.16} y2={625.39} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__c" x1={606.44} y1={693.01} x2={618.8} y2={693.01} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__d" x1={585.25} y1={786.99} x2={585.25} y2={60.07} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__e" x1={793.16} y1={437.51} x2={793.16} y2={280.51} xlinkHref="#prefix__a" />
			</defs>
			<path
				d="M226.32 513.29s-13.26-45 2.49-78.14a71.09 71.09 0 0 0 5.75-44.6 119.57 119.57 0 0 0-6.31-20.93"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M238.04 348.68c0 5.52-10 21.51-10 21.51s-10-16-10-21.51a10 10 0 0 1 20 0zM254.55 379.23c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49a10 10 0 1 1 16.77 10.86zM253.82 431.45c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 0 1 9 17.84zM244.38 470.83c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 0 1 11.88 16.06zM213.5 392.93c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 1 0-13.92 14.32zM203.04 439.13c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 1 0-9 17.84zM199.03 485.43c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 0 0-11.88 16.06z"
				fill={primaryColor}
			/>
			<path
				d="M68.04 466.46c33.09 7 64.79 19.56 97.76 27.13s68.59 9.86 99.76-3.28c13.66-5.76 26.13-14.35 40.34-18.59 35.48-10.61 72.27 7.52 106.81 20.88a434.1 434.1 0 0 0 141.09 28.91c24.3.85 50.21-.84 70.06-14.89 7.12-5 13.23-11.54 20.88-15.74 15.11-8.3 34-6.35 50.13-.38s30.75 15.56 46.51 22.54c40.47 17.92 86.54 17.81 128.93 30.53a213.4 213.4 0 0 1 46.75 20.36c8.84 5.2 17.71 11.53 21.9 20.9 8 18-4.33 38.56-18.67 52.08-31.71 29.88-74.1 45.13-115.2 59.6l-134.43 47.3c-25.4 8.94-50.88 17.91-77.19 23.69-27.08 5.94-54.78 8.45-82.44 10.36-55.75 3.86-114.79 4.7-163.78-22.18-30.19-16.57-55.71-43.25-89.33-50.73-27.72-6.16-56.79 1.84-84.93-1.92-36.44-4.87-67.34-28.75-94-54.08-24-22.85-46.56-48-61.37-77.69-11.83-23.71-22.59-58-15.2-84.65 7.64-27.47 42.02-25.15 65.62-20.15z"
				fill={primaryColor}
			/>
			<path
				d="M191.43 574.16l-.52.55a13.43 13.43 0 0 1-1.88 1.63c-4.11 2.9-7.91 1.35-11.34-1.72s-5.33-6.59-3-10.92a12.86 12.86 0 0 1 1.34-2c.2-.25.42-.51.65-.77a24 24 0 0 1 3.38-3.07 28.65 28.65 0 0 1 2.83-1.89 27.21 27.21 0 0 1 2.65-1.36 19.78 19.78 0 0 1 4.28-1.39c2.48-.48 4.7-.23 6.15 1.07s1.92 3.41 1.74 5.89a18.91 18.91 0 0 1-.77 4 27.58 27.58 0 0 1-1.54 4c-.42.87-.88 1.72-1.37 2.53a23.91 23.91 0 0 1-2.6 3.45z"
				fill="#b65256"
			/>
			<path
				d="M196.91 564.16c-2.73-3.65-6.75-8-11.4-9.57a19.78 19.78 0 0 1 4.28-1.39c2.31 1 5.1 3 7.89 7a18.91 18.91 0 0 1-.77 3.96zM194 570.66c-2.48-3.89-7.67-10.89-14-12.82a28.65 28.65 0 0 1 2.83-1.89c3.21.8 8.07 3.54 12.5 12.18-.38.87-.84 1.72-1.33 2.53zM174.67 563.7c6.38 1.58 11.72 8.55 14.37 12.64a13.44 13.44 0 0 0 1.88-1.63c-5.65-11.37-12.06-12.94-14.9-13z"
				fill="#b66f7b"
			/>
			<path
				d="M668.44 777.66c-1-2.35-2.44-4.08-4.35-4.58s-4.08.3-6.14 1.9a20.36 20.36 0 0 0-3.27 3.28 28 28 0 0 0-1.79 2.49 29.5 29.5 0 0 0-1.71 3.06 24.66 24.66 0 0 0-1.66 4.4c-.09.34-.17.68-.23 1a13.24 13.24 0 0 0-.29 2.48c-.08 5 3.37 7.4 7.89 8.59s8.79.85 11.2-3.73a13.83 13.83 0 0 0 1-2.37c.07-.24.15-.49.21-.75a24.61 24.61 0 0 0 .7-4.43c.07-1 .1-2 .08-3a28.38 28.38 0 0 0-.45-4.36 19.47 19.47 0 0 0-1.19-3.98z"
				transform="translate(-128.84 -60.07)"
				fill="url(#prefix__a)"
				opacity={0.1}
			/>
			<path
				d="M1013.41 624.44a11.42 11.42 0 0 0-1.1-1.81l-.39-.51a20.33 20.33 0 0 0-2.57-2.64c-.61-.53-1.26-1-1.93-1.51a23.46 23.46 0 0 0-3.11-1.85 16.08 16.08 0 0 0-3.25-1.21c-2-.5-3.91-.39-5.18.63s-1.81 2.86-1.76 5a16.82 16.82 0 0 0 .57 3.78 23.14 23.14 0 0 0 .77 2.41 24.36 24.36 0 0 0 1.19 2.64 20.37 20.37 0 0 0 2.1 3.27c.18.23.37.44.55.65a10.94 10.94 0 0 0 1.5 1.41c3.31 2.54 6.57 1.4 9.58-1s4.89-5.41 3.03-9.26z"
				transform="translate(-128.84 -60.07)"
				fill="url(#prefix__b)"
				opacity={0.1}
			/>
			<path
				d="M618.8 697.12l-12.35-8.24a22.27 22.27 0 0 0 12.35 8.24z"
				transform="translate(-128.84 -60.07)"
				fill="url(#prefix__c)"
				opacity={0.1}
			/>
			<path
				d="M905.46 385c12.38 45.27-40.43 174.24-40.43 174.24s-111.11-84.12-123.5-129.39A85 85 0 1 1 905.46 385z"
				fill={primaryColor}
			/>
			<path
				d="M905.46 385c12.38 45.27-40.43 174.24-40.43 174.24s-111.11-84.12-123.5-129.39A85 85 0 1 1 905.46 385z"
				opacity={0.1}
			/>
			<path d="M801.53 325.72s69.17 104.42 64 233.78" fill="none" stroke="#535461" strokeMiterlimit={10} />
			<path
				d="M923.16 467.74s-62.72-34.12-54.78 91.83c0 0 52.32-1.87 70.89-44.55a37 37 0 0 0-15.19-46.75z"
				fill={primaryColor}
			/>
			<path d="M924.16 467.93s-8.1 65.38-55.81 91.61" fill="none" stroke="#535461" strokeMiterlimit={10} />
			<path
				d="M734.6 324l-23.52 5.36-10.54 1.64a30.55 30.55 0 0 1-23.06-5.53c-8.29-6.25-14.58-17.66-1.56-37.48 23.68-36 29.85-48.38 13.38-61.76-3-2.48-6.53-5-10.2-7.39 4.69-1.27 9.3-3 12.58-6.5 2.41-2.57 3.87-5.86 5.29-9.08l10.16-23.11c2.84-6.46 5.72-13.08 6.19-20.11.07-1.09.07-2.19 0-3.28.16-5.64-1.12-11.24-2.41-16.75l-5.8-24.74a36.93 36.93 0 0 0-3.4-10 36.91 36.91 0 0 0-5.72-7l-9.84-10.25c-13-13.54-28.27-28.08-47-27.85-6.54.08-12.89 2-19.14 3.92L593.67 72c-4 1.21-8 2.49-11.2 5.17-7 6-7.26 16.67-12.24 24.39-6.46 10-20.88 15.29-22.08 27.14a15.34 15.34 0 0 0 0 2.54c-.54 8 5.47 15.27 6 23.22-.3 4.93-2.84 9.69-2.47 14.57a13.34 13.34 0 0 0 .07 2.77c.32 2.33 1.33 4.54 1.58 6.87-.38 3.79-2.84 7-5.36 10.28-16.05 1.42-31.38 7.52-35.19 21.21-5.15 18.53-65.37 87-65.37 87L433 304.41s-37.06-31.91-39.12-6.18 26.76 51.47 51.47 38.09c0 0 26.79-8.93 49.24-16.25a36.42 36.42 0 0 0 22.82-21.84l3.41 34.06s-33.5 37.14-39.73 99.46c-.63 6.26-1 12.79-1 19.55a217.22 217.22 0 0 0 8.49 62.07l44.26 8.24s.85.18 2.36.45c10.56 19.23 23.37 44.18 23.37 52.05 0 0 12.35 28.82 9.26 40.15-3 11.11-18.94 40.08-11.74 78.14l-9.89 86.91 21.55 5.22.08.61h2.46l.93.22.06-.22h21.35l2.21 1.85c-.09-.64-.2-1.25-.32-1.85h.08a61.19 61.19 0 0 1 5.15-22.65s-3-36.42 1.1-70.36c4.9-12.35 10.77-23.8 17.65-31.95l22.7-36.87s16.28-26.57 11.63-59.31a19.54 19.54 0 0 1 .13-6c.1-.57 0-.67 0-.67s.76-35.94-1.85-56.31c8.13-9.3 16.6-12.33 16.6-12.33s-.17-.59-.48-1.65c.64-.28 1-.41 1-.41s-20.59-72.06-40.15-79.26c0 0-7.59-30.37-3.22-50a27.63 27.63 0 0 1 2.7-6.59l.62-.77c2.46 4.88 12.29 22 28.21 19.3 18.53-3.09 62.79-15.44 62.79-15.44s-.12-.79-.28-2.08c6.93-1.69 16.52-3.69 20.87-3.07 7.21 1 43.23-15.44 36-34S734.6 324 734.6 324z"
				transform="translate(-128.84 -60.07)"
				fill="url(#prefix__d)"
			/>
			<path
				d="M540.34 723c-.07.25-.14.5-.21.73a13.43 13.43 0 0 1-.94 2.3c-2.34 4.45-6.43 4.8-10.88 3.63s-7.75-3.44-7.66-8.35a12.86 12.86 0 0 1 .28-2.41c.06-.32.14-.64.23-1a24 24 0 0 1 1.61-4.28 28.65 28.65 0 0 1 1.66-3 27.21 27.21 0 0 1 1.74-2.42 19.78 19.78 0 0 1 3.18-3.18c2-1.55 4.08-2.34 6-1.84s3.27 2.17 4.23 4.45a18.91 18.91 0 0 1 1.14 3.92 27.58 27.58 0 0 1 .43 4.24c0 1 0 1.93-.07 2.88a23.91 23.91 0 0 1-.74 4.33z"
				fill="#ffd77c"
			/>
			<path
				d="M540.68 711.6c-4.09-2-9.63-4-14.51-3.34a19.78 19.78 0 0 1 3.18-3.18c2.51-.16 5.91.36 10.19 2.61a18.91 18.91 0 0 1 1.14 3.91zM541.04 718.72c-4-2.33-11.79-6.21-18.26-5.07a28.65 28.65 0 0 1 1.66-3c3.22-.75 8.79-.51 16.67 5.16.05.99.05 1.96-.07 2.91zM520.66 721.31c6.4-1.49 14.32 2.29 18.54 4.72a13.44 13.44 0 0 0 .94-2.3c-10.2-7.55-16.63-6-19.2-4.83z"
				fill="#ffc950"
			/>
			<path
				d="M875.36 556.01l.38.5a11.09 11.09 0 0 1 1.07 1.75c1.8 3.74 0 6.63-2.94 9s-6.1 3.45-9.31 1a10.62 10.62 0 0 1-1.46-1.37c-.18-.2-.36-.41-.54-.63a19.79 19.79 0 0 1-2-3.17 23.67 23.67 0 0 1-1.16-2.56 22.48 22.48 0 0 1-.75-2.34 16.34 16.34 0 0 1-.55-3.67c0-2.09.45-3.86 1.71-4.86s3-1.1 5-.62a15.62 15.62 0 0 1 3.16 1.17 22.78 22.78 0 0 1 3 1.8c.65.46 1.28.95 1.87 1.46a19.75 19.75 0 0 1 2.52 2.54z"
				fill="#cecee0"
			/>
			<path
				d="M867.96 550.18c-3.34 1.72-7.42 4.41-9.35 8a16.34 16.34 0 0 1-.55-3.67 16 16 0 0 1 6.74-5.48 15.62 15.62 0 0 1 3.16 1.15zM872.86 553.44c-3.5 1.49-9.92 4.77-12.35 9.62a23.67 23.67 0 0 1-1.16-2.56c1.09-2.51 4-6.09 11.63-8.53.66.47 1.29.96 1.88 1.47zM864.56 568.24c2.16-5 8.57-8.38 12.25-10a11.1 11.1 0 0 0-1.07-1.75c-10 3.06-12.19 8.06-12.65 10.36z"
				fill="#fff"
				opacity={0.3}
			/>
			<path d="M580.97 272.15l22.85-5.22s33-27 40-9-28 34-35 33-28 5-28 5z" fill="#fcc1cb" />
			<path fill="#855a61" d="M453.82 84.94h86v86h-86z" />
			<path opacity={0.15} d="M453.82 84.94h86v86h-86z" />
			<path
				d="M442.76 427.52s20.63 67.76 17.57 80.4c0 0 5.07 30-.43 40s-27.88 34.4-29.05 73.22l-10 88.12 24.3 5.89a59.45 59.45 0 0 1 10.01-20.22s11.35-72.36 35.88-101.4l22.05-35.82s15.81-25.81 11.3-57.61a19 19 0 0 1 .12-5.85c.09-.55 0-.65 0-.65s1.08-51.18-3.87-64.73-77.88-1.35-77.88-1.35z"
				fill="#fcc1cb"
			/>
			<path
				d="M442.76 427.52s20.63 67.76 17.57 80.4c0 0 5.07 30-.43 40s-27.88 34.4-29.05 73.22l-10 88.12 24.3 5.89a59.45 59.45 0 0 1 10.01-20.22s11.35-72.36 35.88-101.4l22.05-35.82s15.81-25.81 11.3-57.61a19 19 0 0 1 .12-5.85c.09-.55 0-.65 0-.65s1.08-51.18-3.87-64.73-77.88-1.35-77.88-1.35z"
				opacity={0.05}
			/>
			<path
				d="M397.82 435.93s36 61 36 74c0 0 12 28 9 39s-19 40-11 78l11 88h25a59.45 59.45 0 0 1 5-22s-6-73 11-107l13-40s9.47-29.36-2.92-59.5a14.45 14.45 0 0 1-1.08-5.5s-11-50-19-62-76 17-76 17z"
				opacity={0.1}
			/>
			<path
				d="M396.82 435.93s36 61 36 74c0 0 12 28 9 39s-19 40-11 78l11 88h25a59.45 59.45 0 0 1 5-22s-6-73 11-107l13-40s9.47-29.36-2.92-59.5a14.45 14.45 0 0 1-1.08-5.5s-11-50-19-62-76 17-76 17zM520.82 112.93s-10 37-5 48-16 49-16 49l-29-74a46.4 46.4 0 0 0 6-34z"
				fill="#fcc1cb"
			/>
			<path
				d="M471.32 136.44s-12.5 1.5-32.5-.5-45.5 2.5-50.5 20.5-63.5 84.5-63.5 84.5l-14 7s6 17 12 31c0 0 26-8.68 47.84-15.78a35.38 35.38 0 0 0 22.16-21.23l4 40 92 17 11-8s10 23 28 20 61-15 61-15-3-20 0-25l-18.09 2.78a29.68 29.68 0 0 1-22.4-5.37c-8.06-6.08-14.16-17.16-1.51-36.41 23-35 29-47 13-60s-44.5-26.5-44.5-26.5l-15.5 50.5z"
				fill="#eb7580"
			/>
			<path
				d="M449.82 133.93l-19.17 3.53s46.17 97.47 19.17 153.47c0 0-42.38-3.83-53.69-13.91 0 0-61.31 67.91-31.31 173.91l43 8s34 7 50 0 27-2 27-2 22 9 31-8 23-22 23-22-20-70-39-77c0 0-10-40 0-57l4-5s32-13 27-59l-1-80-9-2s4 85-21 78-50-91-50-91z"
				opacity={0.1}
			/>
			<path
				d="M538.82 424.93s-14 5-23 22-31 8-31 8-11-5-27 2-50 0-50 0l-43-8a221.36 221.36 0 0 1-6.33-30 204.37 204.37 0 0 1-1.89-23.68 194.33 194.33 0 0 1 .93-23.61c6.06-60.56 38.6-96.62 38.6-96.62l.25.21a16.32 16.32 0 0 0 1.41 1.08c.47.33 1 .64 1.52.95 14.48 8.42 50.51 11.67 50.51 11.67 27-56-19.17-153.47-19.17-153.47l19.17-3.53s25 84 50 91 21-78 21-78l9 2 1 80c5 46-27 59-27 59l-4 5c-10 17 0 57 0 57 19 7 39 77 39 77z"
				fill="#c3c7e1"
			/>
			<path d="M310.82 247.93s-36-31-38-6 26 50 50 37z" fill="#fcc1cb" />
			<path
				d="M473.16 131.5a43 43 0 0 0 42.59 1.53c1.83-9.85 4.05-18.09 4.05-18.09l-44-11a47.58 47.58 0 0 1-2.64 27.56zM399.32 182.44s3 19-7 48M410.32 237.44s18 21 36 26M337.32 237.44s18 1 29-7 15 7 15 7M499.82 349.93a121.16 121.16 0 0 0-26.5 6.5c-13 5-43 1-45-7"
				opacity={0.1}
			/>
			<g opacity={0.1}>
				<path d="M495.32 222.93a9.38 9.38 0 0 0 5.26.06l-.26-.06c-25-7-50-91-50-91l-4.74.87c2.73 8.91 26.23 83.56 49.74 90.13zM445.32 288.93l.23-.51c-11.4-1.34-39.95-5.4-48.92-13.4 0 0-.68.76-1.86 2.22 14.45 8.44 50.55 11.69 50.55 11.69zM453.32 456.93c-4.77 2.09-11.13 2.92-17.72 3.08 8.28.2 16.75-.47 22.72-3.08a43 43 0 0 1 14.28-3.64 40.6 40.6 0 0 0-19.28 3.64zM500.32 347.93s-10-40 0-57l4-5s32-13 27-59l-1-80-9-2v1.12l4 .88 1 80c5 46-27 59-27 59l-4 5c-10 17 0 57 0 57 19 7 39 77 39 77s-14 5-23 22c-3.83 7.24-10 9.76-15.87 10.27 7 .57 15.91-.9 20.87-10.27 9-17 23-22 23-22s-20-70-39-77z" />
			</g>
			<circle cx={496.82} cy={92.94} r={43} fill="#fcc1cb" />
			<path
				d="M516.71 70.3c1.66-1.23 2.82-3.31 4.84-3.74a5.17 5.17 0 0 1 4.23 1.42c4.87 4.11 4.82 11.61 3.38 17.82s-3.88 12.57-2.38 18.76c.57 2.33 1.69 4.59 1.52 7-.35 5-6.09 8.23-7 13.2s3.15 10.27.8 14.68c-.9 1.69-2.59 2.82-3.64 4.43-4.17 6.39 3.75 13.88 4.91 21.42.22 1.42.25 3 1.3 4 1.24 1.18 3.23.85 4.89.45l16.92-4.09c5.67-1.37 11.69-2.93 15.68-7.19 2.34-2.49 3.76-5.69 5.14-8.82l9.86-22.46c2.76-6.27 5.55-12.7 6-19.54.4-5.88-1-11.72-2.3-17.45l-5.63-24a35.88 35.88 0 0 0-3.3-9.75 35.85 35.85 0 0 0-5.55-6.82l-9.56-10c-12.66-13.14-27.48-27.26-45.72-27.04-6.35.08-12.52 2-18.6 3.81l-25.59 7.82c-3.85 1.18-7.82 2.42-10.88 5-6.79 5.79-7 16.19-11.89 23.69-6.27 9.72-20.28 14.85-21.45 26.37-.86 8.47 6.13 16.11 5.84 24.62-.18 5.17-3.06 10.13-2.36 15.26.33 2.4 1.43 4.67 1.58 7.09.41 6.69-6.16 11.46-9.24 17.41a6.37 6.37 0 0 0-.88 4.11c.44 2.13 2.53 3.45 4.48 4.39a49.32 49.32 0 0 0 25.37 4.78 16 16 0 0 0 7.94-2.34c3.83-2.68 5.16-7.84 4.87-12.51s-1.88-9.15-2.64-13.77c-3.22-19.36 8.1-37.91 19.65-53.78 5.22-7.16 10.53-11.85 19.41-9 5.74 1.75 13.92 9.27 20 4.77z"
				opacity={0.1}
			/>
			<path
				d="M516.71 68.3c1.66-1.23 2.82-3.31 4.84-3.74a5.17 5.17 0 0 1 4.23 1.42c4.87 4.11 4.82 11.61 3.38 17.82s-3.88 12.57-2.38 18.76c.57 2.33 1.69 4.59 1.52 7-.35 5-6.09 8.23-7 13.2s3.15 10.27.8 14.68c-.9 1.69-2.59 2.82-3.64 4.43-4.17 6.39 3.75 13.88 4.91 21.42.22 1.42.25 3 1.3 4 1.24 1.18 3.23.85 4.89.45l16.92-4.09c5.67-1.37 11.69-2.93 15.68-7.19 2.34-2.49 3.76-5.69 5.14-8.82l9.86-22.46c2.76-6.27 5.55-12.7 6-19.54.4-5.88-1-11.72-2.3-17.45l-5.63-24a35.88 35.88 0 0 0-3.3-9.75 35.85 35.85 0 0 0-5.55-6.82l-9.56-10c-12.66-13.14-27.48-27.26-45.72-27.04-6.35.08-12.52 2-18.6 3.81l-25.59 7.82c-3.85 1.18-7.82 2.42-10.88 5-6.79 5.79-7 16.19-11.89 23.69-6.27 9.72-20.28 14.85-21.45 26.37-.86 8.47 6.13 16.11 5.84 24.62-.18 5.17-3.06 10.13-2.36 15.26.33 2.4 1.43 4.67 1.58 7.09.41 6.69-6.16 11.46-9.24 17.41a6.37 6.37 0 0 0-.88 4.11c.44 2.13 2.53 3.45 4.48 4.39a49.32 49.32 0 0 0 25.37 4.78 16 16 0 0 0 7.94-2.34c3.83-2.68 5.16-7.84 4.87-12.51s-1.88-9.15-2.64-13.77c-3.22-19.36 8.1-37.91 19.65-53.78 5.22-7.16 10.53-11.85 19.41-9 5.74 1.75 13.92 9.27 20 4.77z"
				fill="#855a61"
			/>
			<path
				d="M387.32 320.44c-10.8 26.59-21.25 42.13-29.79 51.21 6.06-60.56 38.6-96.62 38.6-96.62l.25.21c.38 12.62-1.94 27.69-9.06 45.2zM479.32 621.44a21.64 21.64 0 0 0 12 8M444.23 696.8s21.24.91 23.82 19.94"
				opacity={0.1}
			/>
			<path
				d="M510.62 672.72l-19.37-19.37v-24s19.19 5.4 21-19.79l-18.59-18c-3.94-3.77-45.41-41.33-95 .3h66c-4.14 5.09-8.55 13.38-3.37 21.89 8.39 13.79-14.5 44.6-24.58 52.17-8.53 6.4-23.22 22.75-26.37 26.29a29.41 29.41 0 0 0-2.25-4.25c-7.49-11.53-25.75-4.58-23.21 8.93a11.43 11.43 0 0 0 2.41 5.27 11.26 11.26 0 0 0 8.71 3.93h10.36c-1.2 11 1.36 26 21.35 32.38h64.16s1.8-18-23.38-21.59c0 0 24.58-.6 23.38-39.57 0 0 6.6 7.79 13.79 5.4v10.82s11.94-2.3 9.3-13.31a16 16 0 0 0-4.34-7.5z"
				fill="#fff"
			/>
			<path
				d="M864.16 358.49h-13.35A58.6 58.6 0 0 0 801.72 303a44.55 44.55 0 0 0 12.67-5.57c8-5.47 8.21-13.6 3.68-16s-14.63.25-20.08 7.19a19.11 19.11 0 0 0-3.68 7.74 19.11 19.11 0 0 0-3.68-7.74c-5.45-6.94-15.55-9.64-20.08-7.19s-4.34 10.58 3.68 16a43.18 43.18 0 0 0 11.63 5.26 58.56 58.56 0 0 0-51.38 55.78h-12.32v17.93h13.59l.44 3.16h.5l4.09 19.67 3.94 19 4 19.28h87.86l2.51-12.1 3.65-17.58 5.88-28.28h2.54l.44-3.16h12.56zm-71.51-51.73c27.93 0 50.8 23 52 51.73h-7.31c.31-.8.6-1.6.83-2.4a20.49 20.49 0 0 0 .78-4.22c.19-2.61-.32-4.85-1.78-6.2s-3.75-1.63-6.28-1.13a19.77 19.77 0 0 0-4.37 1.46c-.48.22-1 .46-1.43.71l-.16-.09a15.66 15.66 0 0 0-3.23-1.23c-2-.51-3.88-.39-5.14.65a4.48 4.48 0 0 0-1.37 2.12 5.79 5.79 0 0 0-3.18-2.54c-1.92-.52-4.05.31-6.09 1.94a20.53 20.53 0 0 0-3.25 3.35 28.67 28.67 0 0 0-1.77 2.55 30.48 30.48 0 0 0-1.69 3.13c-.3.63-.56 1.26-.8 1.89h-10.08a29.67 29.67 0 0 0-.42-4 20.41 20.41 0 0 0-1.16-4.13c-1-2.41-2.42-4.17-4.32-4.69-1.73-.47-3.62.16-5.46 1.47a4.91 4.91 0 0 0-1-1.44c-1.48-1.37-3.75-1.63-6.28-1.13a19.77 19.77 0 0 0-4.37 1.46 27.5 27.5 0 0 0-2.7 1.44 29.22 29.22 0 0 0-2.89 2c-.38.3-.75.61-1.11.92-.34-.19-.67-.39-1-.56a15.66 15.66 0 0 0-3.23-1.23c-2-.51-3.88-.39-5.14.65s-1.8 2.93-1.75 5.12a17.72 17.72 0 0 0 .56 3.87c0 .1.06.2.08.3h-7.47c1.18-28.79 24.04-51.78 51.98-51.78z"
				transform="translate(-128.84 -60.07)"
				fill="url(#prefix__e)"
			/>
			<path
				d="M658.34 308c-.07.25-.14.5-.21.73a13.43 13.43 0 0 1-.94 2.3c-2.34 4.45-6.43 4.8-10.88 3.63s-7.75-3.44-7.66-8.35a12.86 12.86 0 0 1 .28-2.41c.06-.32.14-.64.23-1a24 24 0 0 1 1.61-4.28 28.65 28.65 0 0 1 1.66-3 27.21 27.21 0 0 1 1.74-2.42 19.78 19.78 0 0 1 3.18-3.18c2-1.55 4.08-2.34 6-1.84s3.27 2.17 4.23 4.45a18.91 18.91 0 0 1 1.14 3.92 27.58 27.58 0 0 1 .43 4.24c0 1 0 1.93-.07 2.88a23.91 23.91 0 0 1-.74 4.33z"
				fill="#ffd77c"
			/>
			<path
				d="M658.68 296.6c-4.09-2-9.63-4-14.51-3.34a19.78 19.78 0 0 1 3.18-3.18c2.51-.16 5.91.36 10.19 2.61a18.91 18.91 0 0 1 1.14 3.91zM659.04 303.72c-4-2.33-11.79-6.21-18.26-5.07a28.65 28.65 0 0 1 1.66-3c3.22-.75 8.79-.51 16.67 5.16.05.99.05 1.96-.07 2.91zM638.66 306.31c6.4-1.49 14.32 2.29 18.54 4.72a13.44 13.44 0 0 0 .94-2.3c-10.2-7.55-16.63-6-19.2-4.83z"
				fill="#ffc950"
			/>
			<path
				d="M702.43 308.16l-.52.55a13.43 13.43 0 0 1-1.88 1.63c-4.11 2.9-7.91 1.35-11.34-1.72s-5.33-6.59-3-10.92a12.86 12.86 0 0 1 1.34-2c.2-.25.42-.51.65-.77a24 24 0 0 1 3.38-3.07 28.65 28.65 0 0 1 2.83-1.89 27.21 27.21 0 0 1 2.65-1.36 19.78 19.78 0 0 1 4.28-1.39c2.48-.48 4.7-.23 6.15 1.07s1.92 3.41 1.74 5.89a18.91 18.91 0 0 1-.77 4 27.58 27.58 0 0 1-1.54 4c-.42.87-.88 1.72-1.37 2.53a23.91 23.91 0 0 1-2.6 3.45z"
				fill="#b65256"
			/>
			<path
				d="M707.91 298.16c-2.73-3.65-6.75-8-11.4-9.57a19.78 19.78 0 0 1 4.28-1.39c2.31 1 5.1 3 7.89 7a18.91 18.91 0 0 1-.77 3.96zM705 304.66c-2.48-3.89-7.67-10.89-14-12.82a28.65 28.65 0 0 1 2.83-1.89c3.21.8 8.07 3.54 12.5 12.18-.38.87-.84 1.72-1.33 2.53zM685.67 297.7c6.38 1.58 11.72 8.55 14.37 12.64a13.44 13.44 0 0 0 1.88-1.63c-5.65-11.37-12.06-12.94-14.9-13z"
				fill="#b66f7b"
			/>
			<path
				d="M687.34 308c-.07.25-.14.5-.21.73a13.43 13.43 0 0 1-.94 2.3c-2.34 4.45-6.43 4.8-10.88 3.63s-7.75-3.44-7.66-8.35a12.86 12.86 0 0 1 .28-2.41c.06-.32.14-.64.23-1a24 24 0 0 1 1.61-4.28 28.65 28.65 0 0 1 1.66-3 27.21 27.21 0 0 1 1.74-2.42 19.78 19.78 0 0 1 3.18-3.18c2-1.55 4.08-2.34 6-1.84s3.27 2.17 4.23 4.45a18.91 18.91 0 0 1 1.14 3.92 27.58 27.58 0 0 1 .43 4.24c0 1 0 1.93-.07 2.88a23.91 23.91 0 0 1-.74 4.33z"
				fill="#ffd77c"
			/>
			<path
				d="M687.68 296.6c-4.09-2-9.63-4-14.51-3.34a19.78 19.78 0 0 1 3.18-3.18c2.51-.16 5.91.36 10.19 2.61a18.91 18.91 0 0 1 1.14 3.91zM688.04 303.72c-4-2.33-11.79-6.21-18.26-5.07a28.65 28.65 0 0 1 1.66-3c3.22-.75 8.79-.51 16.67 5.16.05.99.05 1.96-.07 2.91zM667.66 306.31c6.4-1.49 14.32 2.29 18.54 4.72a13.44 13.44 0 0 0 .94-2.3c-10.2-7.55-16.63-6-19.2-4.83z"
				fill="#ffc950"
			/>
			<path
				d="M702.36 295.01l.38.5a11.09 11.09 0 0 1 1.07 1.75c1.8 3.74 0 6.63-2.94 9s-6.1 3.45-9.31 1a10.62 10.62 0 0 1-1.46-1.37c-.18-.2-.36-.41-.54-.63a19.79 19.79 0 0 1-2-3.17 23.67 23.67 0 0 1-1.16-2.56 22.48 22.48 0 0 1-.75-2.34 16.34 16.34 0 0 1-.55-3.67c0-2.09.45-3.86 1.71-4.86s3-1.1 5-.62a15.62 15.62 0 0 1 3.16 1.17 22.78 22.78 0 0 1 3 1.8c.65.46 1.28.95 1.87 1.46a19.75 19.75 0 0 1 2.52 2.54z"
				fill="#cecee0"
			/>
			<path
				d="M694.96 289.18c-3.34 1.72-7.42 4.41-9.35 8a16.34 16.34 0 0 1-.55-3.67 16 16 0 0 1 6.74-5.48 15.62 15.62 0 0 1 3.16 1.15zM699.86 292.44c-3.5 1.49-9.92 4.77-12.35 9.62a23.67 23.67 0 0 1-1.16-2.56c1.09-2.51 4-6.09 11.63-8.53.66.47 1.29.96 1.88 1.47zM691.56 307.24c2.16-5 8.57-8.38 12.25-10a11.1 11.1 0 0 0-1.07-1.75c-10 3.06-12.19 8.06-12.65 10.36z"
				fill="#fff"
				opacity={0.3}
			/>
			<path
				d="M636.36 298.01l.38.5a11.09 11.09 0 0 1 1.07 1.75c1.8 3.74 0 6.63-2.94 9s-6.1 3.45-9.31 1a10.62 10.62 0 0 1-1.46-1.37c-.18-.2-.36-.41-.54-.63a19.79 19.79 0 0 1-2-3.17 23.67 23.67 0 0 1-1.16-2.56 22.48 22.48 0 0 1-.75-2.34 16.34 16.34 0 0 1-.55-3.67c0-2.09.45-3.86 1.71-4.86s3-1.1 5-.62a15.62 15.62 0 0 1 3.16 1.17 22.78 22.78 0 0 1 3 1.8c.65.46 1.28.95 1.87 1.46a19.75 19.75 0 0 1 2.52 2.54z"
				fill="#cecee0"
			/>
			<path
				d="M628.96 292.18c-3.34 1.72-7.42 4.41-9.35 8a16.34 16.34 0 0 1-.55-3.67 16 16 0 0 1 6.74-5.48 15.62 15.62 0 0 1 3.16 1.15zM633.86 295.44c-3.5 1.49-9.92 4.77-12.35 9.62a23.67 23.67 0 0 1-1.16-2.56c1.09-2.51 4-6.09 11.63-8.53.66.47 1.29.96 1.88 1.47zM625.56 310.24c2.16-5 8.57-8.38 12.25-10a11.1 11.1 0 0 0-1.07-1.75c-10 3.06-12.19 8.06-12.65 10.36z"
				fill="#fff"
				opacity={0.3}
			/>
			<path
				d="M642.43 308.16l-.52.55a13.43 13.43 0 0 1-1.88 1.63c-4.11 2.9-7.91 1.35-11.34-1.72s-5.33-6.59-3-10.92a12.86 12.86 0 0 1 1.34-2c.2-.25.42-.51.65-.77a24 24 0 0 1 3.38-3.07 28.65 28.65 0 0 1 2.83-1.89 27.21 27.21 0 0 1 2.65-1.36 19.78 19.78 0 0 1 4.28-1.39c2.48-.48 4.7-.23 6.15 1.07s1.92 3.41 1.74 5.89a18.91 18.91 0 0 1-.77 4 27.58 27.58 0 0 1-1.54 4c-.42.87-.88 1.72-1.37 2.53a23.91 23.91 0 0 1-2.6 3.45z"
				fill="#b65256"
			/>
			<path
				d="M647.91 298.16c-2.73-3.65-6.75-8-11.4-9.57a19.78 19.78 0 0 1 4.28-1.39c2.31 1 5.1 3 7.89 7a18.91 18.91 0 0 1-.77 3.96zM645 304.66c-2.48-3.89-7.67-10.89-14-12.82a28.65 28.65 0 0 1 2.83-1.89c3.21.8 8.07 3.54 12.5 12.18-.38.87-.84 1.72-1.33 2.53zM625.67 297.7c6.38 1.58 11.72 8.55 14.37 12.64a13.44 13.44 0 0 0 1.88-1.63c-5.65-11.37-12.06-12.94-14.9-13z"
				fill="#b66f7b"
			/>
			<path
				d="M663.32 358.44c-31.43 0-57-25-57-55.66s25.57-55.66 57-55.66 57 25 57 55.66-25.57 55.66-57 55.66zm0-107.1c-28.12 0-51 23.07-51 51.43s22.88 51.43 51 51.43 51-23.07 51-51.43-22.88-51.43-51-51.43z"
				fill={primaryColor}
			/>
			<path
				fill={primaryColor}
				d="M721.32 305.44l-8.97 41.84-3.58 16.68-2.45 11.48h-86l-3.93-18.3-3.86-18.03-7.21-33.67h116z"
			/>
			<path opacity={0.1} d="M608.05 320.44h112.53l1.74-12h-116l1.73 12z" />
			<path fill={primaryColor} d="M594.32 300.44h139v17h-139z" />
			<path
				d="M712.35 347.28l-3.57 16.65c-22.83.47-50.93-.35-60.46-6.52-8.79-5.69-21.6-3.62-31.92-.3l-3.86-18c12.22-4.45 32.45-9.34 43.78 1.33 9.62 9.05 35.23 9.49 56.03 6.84z"
				fill="#fff"
				opacity={0.3}
			/>
			<path
				d="M661.34 234.11a17.58 17.58 0 0 1 3.6 15.23s-11.63-1.52-19.66-6.83c-7.85-5.19-8-12.91-3.6-15.23s14.32.24 19.66 6.83z"
				fill="none"
				stroke="#eb7580"
				strokeMiterlimit={10}
				strokeWidth={4}
			/>
			<path
				d="M668.55 234.11a17.58 17.58 0 0 0-3.6 15.23s11.63-1.52 19.66-6.83c7.85-5.19 8-12.91 3.6-15.23s-14.32.24-19.66 6.83zM664.32 247.82l17 15.5M664.32 247.82l-17 15.5"
				fill="none"
				stroke="#eb7580"
				strokeMiterlimit={10}
				strokeWidth={4}
			/>
			<path d="M609.32 270.86s19-14.73 25-2.95c0 0-20 8.84-25 7.37z" fill="#fcc1cb" />
			<path
				d="M81.55 575.07s-24.67-83.76 4.61-145.41c12.3-25.87 16.38-54.92 10.7-83a222.5 222.5 0 0 0-11.75-39"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<path
				d="M103.35 268.75c0 10.27-18.59 40-18.59 40s-18.6-29.73-18.6-40a18.59 18.59 0 1 1 37.17 0zM134.07 325.61c-5.58 8.62-37.36 23.5-37.36 23.5s.58-35.09 6.16-43.71a18.59 18.59 0 1 1 31.2 20.2zM132.73 422.78c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 0 1 16.74 33.19zM115.16 496.07c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 1 1 22.11 29.89zM57.69 351.1c7.36 7.15 41.67 14.56 41.67 14.56s-8.4-34.07-15.76-41.23a18.59 18.59 0 0 0-25.9 26.66zM38.23 437.08c9.17 4.62 44.11 1.43 44.11 1.43s-18.18-30.01-27.38-34.58a18.59 18.59 0 0 0-16.74 33.19zM30.78 523.23c8.25 6.1 43.24 8.86 43.24 8.86s-12.86-32.64-21.14-38.74a18.59 18.59 0 1 0-22.11 29.89z"
				fill={primaryColor}
			/>
			<path
				d="M103.35 268.75c0 10.27-18.59 40-18.59 40s-18.6-29.73-18.6-40a18.59 18.59 0 1 1 37.17 0zM134.07 325.61c-5.58 8.62-37.36 23.5-37.36 23.5s.58-35.09 6.16-43.71a18.59 18.59 0 1 1 31.2 20.2zM132.73 422.78c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 0 1 16.74 33.19zM115.16 496.07c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 1 1 22.11 29.89zM57.69 351.1c7.36 7.15 41.67 14.56 41.67 14.56s-8.4-34.07-15.76-41.23a18.59 18.59 0 0 0-25.9 26.66zM38.23 437.08c9.17 4.62 44.11 1.43 44.11 1.43s-18.18-30.01-27.38-34.58a18.59 18.59 0 0 0-16.74 33.19zM30.78 523.23c8.25 6.1 43.24 8.86 43.24 8.86s-12.86-32.64-21.14-38.74a18.59 18.59 0 1 0-22.11 29.89z"
				opacity={0.25}
			/>
			<path
				d="M577.01 454.21s-26.22 54.24-9 118.43 11.75 141-5.42 160"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<circle cx={577.01} cy={454.2} r={7.23} fill={primaryColor} />
			<path
				d="M566.1 489.09s27.18 4.9 34.41-5M563.53 504.84s-16.37-18.09-15.45-28.91M562.16 537.93s14.87 3.92 28.44-25M566.1 562.09s-37-23.81-32.49-39.17M571.88 589.33s25.92-23 23.21-45.63M574.71 605.36s-33-9.22-32-23.68M577.01 624.43s20.79-19.26 23.5-31M578.46 657.2s-21.33-24.9-22.24-37.55M578.46 677.8s23.86-26.52 25.7-39.17"
				fill="none"
				stroke="#535461"
				strokeMiterlimit={10}
				strokeWidth={2}
			/>
			<circle cx={548.08} cy={477.71} r={7.23} fill={primaryColor} />
			<circle cx={539.94} cy={581.67} r={7.23} fill={primaryColor} />
			<circle cx={533.62} cy={522.91} r={7.23} fill={primaryColor} />
			<circle cx={600.51} cy={484.04} r={7.23} fill={primaryColor} />
			<circle cx={600.51} cy={595.23} r={7.23} fill={primaryColor} />
			<circle cx={588.76} cy={512.96} r={7.23} fill={primaryColor} />
			<circle cx={603.22} cy={643.14} r={7.23} fill={primaryColor} />
			<circle cx={554.41} cy={624.16} r={7.23} fill={primaryColor} />
			<circle cx={595.99} cy={543.7} r={7.23} fill={primaryColor} />
			<circle cx={577.01} cy={454.2} r={7.23} opacity={0.25} />
			<circle cx={548.08} cy={477.71} r={7.23} opacity={0.25} />
			<circle cx={539.94} cy={581.67} r={7.23} opacity={0.25} />
			<circle cx={533.62} cy={522.91} r={7.23} opacity={0.25} />
			<circle cx={600.51} cy={484.04} r={7.23} opacity={0.25} />
			<circle cx={600.51} cy={595.23} r={7.23} opacity={0.25} />
			<circle cx={588.76} cy={512.96} r={7.23} opacity={0.25} />
			<circle cx={603.22} cy={643.14} r={7.23} opacity={0.25} />
			<circle cx={554.41} cy={624.16} r={7.23} opacity={0.25} />
			<circle cx={595.99} cy={543.7} r={7.23} opacity={0.25} />
		</svg>
	);
};

UndrawEasterEggHunt.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawEasterEggHunt;
