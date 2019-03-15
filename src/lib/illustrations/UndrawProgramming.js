import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawProgramming = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1041.32 554.17" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={597.75} y1={725.44} x2={597.75} y2={347.69} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<path
				d="M961.48 438.21q-1.74 3.75-3.47 7.4-2.7 5.67-5.33 11.12c-.78 1.61-1.56 3.19-2.32 4.77-8.6 17.57-16.63 33.11-23.45 45.89a73.21 73.21 0 0 1-63.81 38.7l-151.65 1.65h-1.6l-13 .14-11.12.12-34.1.37h-1.38l-17.36.19h-.53l-107 1.16-95.51 1-11.11.12-69 .75h-.08l-44.75.48h-.48l-141.5 1.53-42.33.46a88.07 88.07 0 0 1-26.67-3.82 86.39 86.39 0 0 1-39.09-24.75c-18.18-20.03-31.43-43.4-40.33-68.76q-1.93-5.49-3.6-11.12c-30.81-104.15 6.75-238.52 74.35-328.44q4.25-5.64 8.64-11l.07-.08c20.79-25.52 44.1-46.84 68.93-62 44-26.91 92.75-34.49 140.7-11.9 40.57 19.12 78.45 28.11 115.17 30.55 3.71.24 7.42.42 11.11.53 84.23 2.65 163.17-27.7 255.87-47.29 3.69-.78 7.39-1.55 11.12-2.28C763 .54 836.36-6.4 923.6 8.19a189.09 189.09 0 0 1 26.76 6.4q5.77 1.86 11.12 4c41.64 16.94 64.35 48.24 74 87.46q1.37 5.46 2.37 11.11c17.11 94.34-33 228.16-76.37 321.05z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<g opacity={0.1} fill={primaryColor}>
				<path d="M162.9 44.09v509.62l-42.33.46a88.07 88.07 0 0 1-26.67-3.82V106.09h.07c20.79-25.55 44.1-46.87 68.93-62z" />
				<path d="M1037.9 117.17H85.26q4.25-5.64 8.64-11v-.08h941.63q1.37 5.43 2.37 11.08z" />
				<path d="M961.48 18.6v427h-3.47q-2.7 5.67-5.33 11.12c-.78 1.61-1.56 3.19-2.32 4.77V14.56q5.77 1.86 11.12 4.04zM696.87 13.67v534.25l-11.12.12V15.95c3.69-.78 7.39-1.55 11.12-2.28zM429.88 63.24v487.58l-11.11.12V62.71c3.71.24 7.42.38 11.11.53z" />
				<path d="M958.01 445.61q-2.7 5.67-5.33 11.12H14.51q-1.93-5.49-3.6-11.12z" />
			</g>
			<path fill="#3f3d56" d="M211.6 265.83h19v57.66h-19zM722.93 262.83h19v61h-19z" />
			<path
				fill="#65617d"
				d="M863.1 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l46.65-28 93.6-.78 2-.01.66-.01 2-.03 44.94-.37 2.01-.01.64-.01 2-.01 14.41-.12.38-.01 35.55-.3h.29l277.4-2.34 6.79-.05h.68l5.18-.05 37.65-.31 2-.03 1.85-.02h.96l11.71-.09 2.32-.03 3.11-.02 9.75-.09 15.47-.13 2-.02 3.48-.02h.65l74.71-.64 56.16 28.5z"
			/>
			<path
				opacity={0.2}
				d="M863.1 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l46.65-28 93.6-.78 2-.01.66-.01 2-.03 44.94-.37 2.01-.01.64-.01 2-.01 14.41-.12.38-.01 35.55-.3h.29l277.4-2.34 6.79-.05h.68l5.18-.05 37.65-.31 2-.03 1.85-.02h.96l11.71-.09 2.32-.03 3.11-.02 9.75-.09 15.47-.13 2-.02 3.48-.02h.65l74.71-.64 56.16 28.5z"
			/>
			<path
				d="M296.1 483.66v24.49a6.13 6.13 0 0 1-3.5 5.54 6 6 0 0 1-2.5.6l-34.9.74a6 6 0 0 1-2.7-.57 6.12 6.12 0 0 1-3.57-5.57v-25.23z"
				fill="#3f3d56"
			/>
			<path
				d="M296.1 483.66v24.49a6.13 6.13 0 0 1-3.5 5.54 6 6 0 0 1-2.5.6l-34.9.74a6 6 0 0 1-2.7-.57 6.12 6.12 0 0 1-3.57-5.57v-25.23z"
				opacity={0.1}
			/>
			<path
				d="M298.1 483.66v24.49a6.13 6.13 0 0 1-3.5 5.54 6 6 0 0 1-2.5.6l-34.9.74a6 6 0 0 1-2.7-.57 6.12 6.12 0 0 1-3.57-5.57v-25.23zM680.93 483.66h47.17v31.5h-47.17z"
				fill="#3f3d56"
			/>
			<path opacity={0.1} d="M680.93 483.66h47.17v31.5h-47.17z" />
			<path fill="#3f3d56" d="M678.93 483.66h47.17v31.5h-47.17z" />
			<path opacity={0.1} d="M230.6 265.82v5.73l-19-.49v-5.24h19z" />
			<path
				d="M355.66 104.4l-22.83 164a4.3 4.3 0 0 1-4.37 3.71l-182.8-4.74-3.47-.09a4.3 4.3 0 0 1-4.16-4.87l25.63-171.68a4.3 4.3 0 0 1 4.54-3.63l183.46 12.42a4.29 4.29 0 0 1 4 4.88z"
				fill="#65617d"
			/>
			<path fill={primaryColor} d="M175.93 99.16L156.6 250.49l168 5.33 20.66-146-169.33-10.66z" />
			<rect x={384.6} y={96.82} width={204.67} height={173.33} rx={5.33} ry={5.33} fill="#65617d" />
			<path fill={primaryColor} d="M394.26 108.49h186v144.33h-186z" />
			<path opacity={0.1} d="M741.93 262.82v3.79l-19 .39v-4.18h19z" />
			<path
				d="M827.66 259.62a3.08 3.08 0 0 1-3 3.28l-187.2 3.87a3.08 3.08 0 0 1-3.13-2.79L618.24 96.7a3.08 3.08 0 0 1 2.92-3.37l185.78-9.24 2-.1a3.07 3.07 0 0 1 3.22 2.8z"
				fill="#65617d"
			/>
			<path fill={primaryColor} d="M628.93 103.16l169.67-8.34 14.33 152-168.33 4-15.67-147.66z" />
			<path
				d="M827.66 259.62a3.08 3.08 0 0 1-3 3.28L806.94 84.09l2-.1a3.07 3.07 0 0 1 3.22 2.8zM168.23 87.09l-22.57 180.28-3.47-.09a4.3 4.3 0 0 1-4.16-4.87l25.63-171.68a4.3 4.3 0 0 1 4.57-3.64zM211.6 306.41h19v17.08h-19zM298.1 483.65v4.97l-47.17 1.26v-6.23h47.17z"
				opacity={0.1}
			/>
			<path
				d="M381.35 312.36v168.2a4 4 0 0 1-3.85 3.95l-191.65 5.1h-.05a4 4 0 0 1-3.95-3.95v-173.3a4 4 0 0 1 3.95-3.95h191.6a4 4 0 0 1 3.95 3.95z"
				fill="#65617d"
			/>
			<path d="M185.85 308.41v181.2h-.05a4 4 0 0 1-3.95-3.95v-173.3a4 4 0 0 1 3.95-3.95z" opacity={0.1} />
			<path fill="#d4dfec" d="M194.6 319.15h177.5V467.4l-177.5 4V319.15z" />
			<path opacity={0.1} d="M722.93 306.41h19v17.42h-19zM726.1 483.65v6.41l-47.17-1.26v-5.15h47.17z" />
			<path
				d="M788.35 312.36v173.3a4 4 0 0 1-4 3.95l-191.69-5.1a4 4 0 0 1-3.85-3.95v-168.2a4 4 0 0 1 3.95-3.95h191.6a4 4 0 0 1 3.99 3.95z"
				fill="#65617d"
			/>
			<path d="M788.35 312.36v173.3a4 4 0 0 1-4 3.95v-181.2a4 4 0 0 1 4 3.95z" opacity={0.1} />
			<path fill="#d4dfec" d="M775.6 319.15H598.1V467.4l177.5 4V319.15z" />
			<path
				d="M583.85 312.36v168.2a4 4 0 0 1-3.85 3.95l-191.65 5.1a4 4 0 0 1-4-3.95v-173.3a4 4 0 0 1 3.95-3.95h191.6a4 4 0 0 1 3.95 3.95z"
				fill="#65617d"
			/>
			<path fill="#d4dfec" d="M397.1 319.15h177.5V467.4l-177.5 4V319.15z" />
			<path
				opacity={0.1}
				d="M863.1 533.65v13l-151.92 1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99-175.61 1.63h-.15l-44.65.42-.48.01-198.4 1.82v-15l202.51-1.33h.48l40.99-.28h.19l283.08-1.87h.29l.17-.01h.47l4.79-.03h1.46l74.49-.5 4.4-.02.98-.01 142.7-.95z"
			/>
			<circle cx={487.26} cy={272.16} r={51.33} fill="#fbbebe" />
			<path
				d="M383.74 725.09c0-.11.06-.23.1-.35 1-3.59 2.78-9.66 4.11-14.51.17-.6.33-1.19.48-1.75 1.47-5.47 4.33-18.28 5.92-26.27.56-2.81 1-5 1.09-6.1.2-1.69 3.21-8.92 6.62-17.23 2.39-5.84 5-12.22 6.91-17.6a61.38 61.38 0 0 0 2.93-9.85 5.1 5.1 0 0 0 0-2.13 14.69 14.69 0 0 1-.48-3.5c-.23-6.2 1.62-16 4.48-20.11 3.5-5 6-23.66 6-23.66s5.18.75 6-3.53a6.15 6.15 0 0 0 .1-1.4 7.41 7.41 0 0 0-.09-1.11c-.89-6.24 14.72-12.88 23.5-14.31a19.67 19.67 0 0 1 3-.28 27.24 27.24 0 0 0 6.25-1.44q1.4-.43 3-1c3.68-1.24 8.08-2.88 12.75-4.68 17.56-6.81 38.82-16 38.82-16 .15-.71.32-1.39.51-2.06a27.71 27.71 0 0 1 16.35-18.93v-2c0-3.45-.15-7-.3-10.54 0-.69-.06-1.38-.1-2.07v-.61-.52c0-.7-.07-1.4-.11-2.09l-.18-.14a16.41 16.41 0 0 1-3.9-4.2 15.27 15.27 0 0 1-1.42-3c-1.25-3.39-1.54-7.17-2.38-10.75l-.18-.74a84 84 0 0 0-4-10.58c-2.21-5.42-3.91-11-5.6-16.65q-1.54-5.13-3.11-10.28l-1.58-5.24c-.3-1-.6-2-.83-3a13.27 13.27 0 0 1-.26-1.4 10 10 0 0 1 .24-4.61 32.09 32.09 0 0 1 1.32-3 7.87 7.87 0 0 0 .5-1.38 3 3 0 0 0 .08-.32 5.65 5.65 0 0 0 .11-1.08 18.46 18.46 0 0 0-.52-3.89.07.07 0 0 1 0-.05 2.56 2.56 0 0 0-.05-.27 25.48 25.48 0 0 1-.36-3 28.45 28.45 0 0 1 3.47-15.57l.19-.36a25.22 25.22 0 0 1 1.84-2.78c.31-.42.63-.82 1-1.22-1.4 1.34-3.7.75-5-.69a3.61 3.61 0 0 1-.55-.75 3.81 3.81 0 0 1-.23-.45c-.05-.12-.09-.25-.13-.38-.7-2.45.52-5.06 2.12-7.05a18.49 18.49 0 0 1 5.74-4.7 3.84 3.84 0 0 1 .4-.21 17.12 17.12 0 0 1 2.64-1.06 15.06 15.06 0 0 1 1.63-.44l-3.71-.34-1.5-.14a14.49 14.49 0 0 1 13-10.91h1.08a11.73 11.73 0 0 1 1.57.13 4.44 4.44 0 0 1-2.65-4.33 14.41 14.41 0 0 0 9.19 3.06h.38a30 30 0 0 1-.34-3.27 33.19 33.19 0 0 1 0-4.46 8.44 8.44 0 0 0 6.78 2.26l-2.08-2.9a9.49 9.49 0 0 0 6.56 2.05l.48-.05a7 7 0 0 0 1.19-.23h.09c-.19-.24-.36-.49-.53-.75l-.06-.12a9.67 9.67 0 0 1-1-2.09 6.59 6.59 0 0 1-.24-.87 8.75 8.75 0 0 1 .45-5.45c3.23 2.7 6.77 6.39 11 3.6s4.37-7.91 11-7.39a10.2 10.2 0 0 1 8.41 6.12 6.75 6.75 0 0 1 7.67-1.75 6.85 6.85 0 0 1 3.88 6.89c2.75-.69 5.71-1.37 8.35-.33s4.34 4.41 2.84 6.66a1.43 1.43 0 0 1-.14.2c-1.23 1.59-3.95 2.46-3.66 4.46l.42.3 1.3.94q7.65 5.52 14.9 11.6c2.48 2.08 5.12 4.58 5.29 7.83a8.64 8.64 0 0 1-.24 2.37c-.16.78-.38 1.56-.55 2.34a19.51 19.51 0 0 0-.34 6.05c.07.59.16 1.17.27 1.76 1.53 7.73 7.71 14.11 8.32 22v.56a17.78 17.78 0 0 1-.07 2.53c-.46 4.8-2.68 9.41-4.48 14-.11.28-.22.56-.32.84-3.47 9-5.47 18.59-7 28.16a100.26 100.26 0 0 1-2 10.09 26.73 26.73 0 0 1-5.09 10.43 16.22 16.22 0 0 1-3.36 3 18.67 18.67 0 0 1-2.65 1.41v.06c.11.61.2 1.22.31 1.83.06.32.11.64.17 1a.14.14 0 0 0 0 .06c.84 4.73 1.8 9.36 2.81 13.76l.51 2.19c12.6 4.55 14.09 13.87 14.18 17.44a9.64 9.64 0 0 1 0 1.43s19 .5 26.5 6a20.34 20.34 0 0 0 4.51 2.3 83 83 0 0 0 9.25 2.89c1.61.42 3.29.83 5 1.23 3 .69 6.18 1.36 9.25 2 8.19 1.65 15.9 3 19.81 4 9.33 2.36 30.67 22.82 30.67 22.82s2.5 20.64 5 23.65 7 13.59 7 13.59l16.54 29.41 7 12.37h4.5c.62 0 1.84.88 3.21 2.1 1.19 1.06 2.51 2.38 3.67 3.58l1.92 2.05 1.2 1.33s7.27.18 9.24 5.93c5.92-.17 13.19.22 18.28 2.5a14.14 14.14 0 0 1 2 1.08 8.68 8.68 0 0 1 4.13 5.66 8.34 8.34 0 0 1 .18 1.44v1.7c-.36 7.57-5.29 13.87-9.82 18.11l.32.57s-.15.36-.44 1c-.08.19-.18.4-.29.64-.59 1.26-1.53 3.15-2.76 5.36a63.31 63.31 0 0 1-9.57 13.17l-.29.3-57.74.53-.17-.2-11.2-13.36-5.57-6.64-.17-.21-.16 1.59-.54 5.3-1.3 12.81-.07.64v.17l-.15 1.48.11-1.48h-.29l-107 1-175.62 1.94v.84h-.14v-.84l-44.75.48z"
				transform="translate(-79.34 -172.91)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M538.6 377.16s-99.5 12-90 0c3.44-4.34 4.39-17.2 4.2-31.85-.06-4.45-.22-9.06-.45-13.65-1.1-22-3.75-43.5-3.75-43.5s87-41 77-8.5c-4 13.13-2.69 31.57.35 48.88.89 5.05 1.92 10 3 14.7a344.67 344.67 0 0 0 9.65 33.92z"
				fill="#fbbebe"
			/>
			<path
				d="M538.6 377.16s-99.5 12-90 0c3.44-4.34 4.39-17.2 4.2-31.85 15.17-6.48 34.47-1.65 34.47-1.65 20.32-4.05 33.35-3.26 41.68-.42a344.67 344.67 0 0 0 9.65 33.92z"
				opacity={0.1}
			/>
			<path
				d="M349.74 552.53v-.84l175.62-1.91 107-1h.3l-.11 1.48.15-1.48h.19v-.17l1.37-13.45.52-5.09.16-1.59.14-1.33 6.18-20.61 6.18-20.58 5.2-17.33 7.94-26.48s-4.5-10.5-7-13.5-5-23.5-5-23.5-21.34-20.33-30.67-22.67c-3.91-1-11.63-2.33-19.83-4-3.07-.62-6.22-1.28-9.25-2-1.71-.39-3.39-.8-5-1.21a87.91 87.91 0 0 1-9.25-2.86 20.7 20.7 0 0 1-4.5-2.29c-7.35-5.39-25.77-6-26.48-6a.42.42 0 0 1 0-.07v-.09a10.26 10.26 0 0 0 0-1.26c0-.4 0-.87-.09-1.4 0-.16 0-.33-.07-.5-.05-.36-.11-.74-.2-1.14a5 5 0 0 0-.12-.53 17.21 17.21 0 0 0-1.25-3.49c-.07-.16-.16-.33-.24-.49a18.25 18.25 0 0 0-1.7-2.63c-.13-.17-.27-.35-.42-.52a19.58 19.58 0 0 0-2.72-2.64c-.27-.21-.55-.43-.84-.63a4.67 4.67 0 0 0-.51-.36l-.89-.58-.83-.48c-.73-.4-1.5-.79-2.34-1.16-.26-.12-.54-.23-.82-.34s-.72-.28-1.09-.42h-.06l-.75-.3a36.7 36.7 0 0 0-1.76-.53l-.93-.24-1-.23-1-.21c-1-.2-2.07-.38-3.19-.52l-1.14-.14-1.17-.12-1.21-.1-1.72-.1-2-.07a124.68 124.68 0 0 0-26.24 2.79 72.27 72.27 0 0 0-18.26-1.68h-.87l-1 .06h-.64l-1.29.12c-.43 0-.87.09-1.3.15s-.88.11-1.31.18l-.66.11c-.65.11-1.31.23-2 .37q-.33.06-.66.15c-.87.19-1.74.42-2.6.68-.43.12-.86.26-1.29.41-.22.06-.43.14-.64.22l-.64.23-.63.25-.75.3c-.38.16-.75.33-1.12.51-.21.09-.42.19-.62.3s-.41.2-.6.31a27.75 27.75 0 0 0-6.21 4.38l-.51.49-.5.51c-.17.17-.33.35-.49.53a23.82 23.82 0 0 0-1.82 2.25c-.16.21-.31.42-.46.64a26.69 26.69 0 0 0-1.72 2.92c-.13.24-.25.49-.37.73a32.7 32.7 0 0 0-2 5.25q-.28 1-.51 2s-21.17 9.34-38.73 16.1c-4.67 1.8-9.07 3.43-12.75 4.66-1.07.36-2.07.69-3 1a26.7 26.7 0 0 1-6.25 1.44 19.67 19.67 0 0 0-3 .28c-8.07 1.31-21.9 7-23.41 12.71a3.69 3.69 0 0 0-.1 1.4v.11c1 7-6 6-6 6s-2.5 18.5-6 23.5c-2.53 3.6-4.26 11.63-4.48 17.69a19.61 19.61 0 0 0 .44 5.63v.14c.4 1.34-.56 5-2.19 9.69-1.77 5.15-4.35 11.55-6.83 17.59-3.74 9.12-7.26 17.4-7.48 19.22-.09.81-.35 2.26-.71 4.13-1.46 7.62-4.7 22.13-6.3 28-1.19 4.38-2.92 10.38-4.11 14.5 0 .12-.07.24-.1.35l44.83-.44v.84h.14z"
				fill={primaryColor}
			/>
			<path
				d="M366.1 434.66s57 29.5 77.5 26zM482.1 422.66s55.5 18 74 20.5-74-20.5-74-20.5zM543.66 364.74c-29 5.34-83.6 4.19-107.2 3.38 8.65-31 50.83-20.46 50.83-20.46 52.21-10.42 56.21 11.2 56.37 17.08z"
				opacity={0.1}
			/>
			<path
				d="M543.66 362.74c-29 5.34-83.6 4.19-107.2 3.38 8.65-31 50.83-20.46 50.83-20.46 52.21-10.42 56.21 11.2 56.37 17.08z"
				fill={primaryColor}
			/>
			<path d="M697.6 499.41s34.16-5.25 34.83 9.75-17.42 25.48-17.42 25.48z" fill="#fbbebe" />
			<path
				d="M525.95 328.54a47 47 0 0 1-4.5 1.74c-10.78 3.72-21.65 7.47-33 8.83s-23.26.16-33.16-5.5a28.77 28.77 0 0 1-3-1.95c-1.1-22-3.75-43.5-3.75-43.5s87-41 77-8.5c-3.98 13.13-2.63 31.57.41 48.88z"
				opacity={0.1}
			/>
			<path
				d="M473.18 191.93a9.47 9.47 0 0 1-8.32-1.75l2.08 2.89a8.47 8.47 0 0 1-6.78-2.25 34.08 34.08 0 0 0 .32 7.75 14.52 14.52 0 0 1-9.56-3 4.42 4.42 0 0 0 2.64 4.31 14.34 14.34 0 0 0-15.6 10.71l5.22.48a18.47 18.47 0 0 0-10.44 6.37c-1.6 2-2.82 4.56-2.12 7s4.08 4 5.92 2.26a27.94 27.94 0 0 0-6.1 22.79 14.47 14.47 0 0 1 .46 5.26c-.33 1.65-1.37 3.08-1.89 4.69-1 2.92-.05 6.09.84 9l4.69 15.42c1.7 5.57 3.39 11.15 5.61 16.54a82.08 82.08 0 0 1 4 10.51c1.26 4.84 1.31 10.14 4 14.37a19.93 19.93 0 0 0 7.18 6.33c9.89 5.66 21.84 6.86 33.16 5.5s22.18-5.11 32.95-8.83a31 31 0 0 0 6.84-3c7.45-4.88 9.11-14.86 10.5-23.65 1.55-9.8 3.62-19.58 7.29-28.8 2.18-5.49 5-11.06 4.52-16.94-.61-7.81-6.79-14.14-8.32-21.82a19 19 0 0 1 .07-7.77 17.66 17.66 0 0 0 .79-4.7c-.17-3.22-2.81-5.7-5.29-7.77q-8.07-6.74-16.66-12.74c-.29-2 2.43-2.86 3.66-4.44 1.74-2.23-.06-5.77-2.7-6.81s-5.6-.36-8.35.33a6.59 6.59 0 0 0-11.55-5.11 10.2 10.2 0 0 0-8.42-6.08c-6.63-.52-6.76 4.55-11 7.34s-7.74-.89-11-3.57a9.28 9.28 0 0 0 1.36 9.18z"
				fill="#3f3d56"
			/>
			<path
				d="M722.93 529.41s-.89 2.12-2.53 5.19a69 69 0 0 1-9 13.17l-.27.29h-1.62l-57.74.53h-1.38l-.17-.2-11.2-13.29-4.22-5.01-.17-.21-.36-.42-.2-.24-.26-.31-8.21-9.74 3-12.5 5.11-21.06.13-.51 1-4 .71-3 2.38-9.78 8.16-33.65 14.5 7.5 15.29 27 8.21 14.5h4.5c.85 0 2.8 1.64 4.76 3.53.7.67 1.4 1.38 2 2 1.78 1.84 3.19 3.42 3.19 3.42s7.29.16 9.25 5.9a7 7 0 0 1 .25.85 40.3 40.3 0 0 0 2.53 6.56c1.29 2.81 2.91 6 4.55 9.19 3.05 5.85 6.15 11.42 7.29 13.44l.14.25z"
				fill={primaryColor}
			/>
			<path
				d="M637.03 484.26l-.1 1.43v.1l-.17 2.3-1.33 18.51-1.61 22.3-.46 6.28-1 13.44v.17l-107 1-175.59 1.9v.84h-.14v-1.12l.45-14.36.86-28.06.74-23.79.07-2.37a10.53 10.53 0 0 1 11.42-10.17c4.72.4 10.85.89 18.18 1.41l3 .22c42.33 2.94 120.56 6.74 199.5 2 1.66-.09 3.33-.19 5-.31 12.24-.77 24.47-1.76 36.58-3a10.53 10.53 0 0 1 11.6 11.23z"
				opacity={0.1}
			/>
			<path
				d="M349.74 552.53v-.84l175.62-1.91 107-1h.3v-.17l1-13.44.43-6 1.64-22.61 1.29-17.9v-.44a10.62 10.62 0 0 0-.11-2.47.3.3 0 0 0 0-.1 10.39 10.39 0 0 0-2-4.64 10.54 10.54 0 0 0-9.42-4 937.419 937.419 0 0 1-36.58 3c-1.67.12-3.34.22-5 .31-78.94 4.69-157.17.89-199.5-2l-3-.22c-7.33-.52-13.46-1-18.18-1.41a10.54 10.54 0 0 0-11.24 8.53 11 11 0 0 0-.18 1.64l-.68 22.16-.93 28.07-.44 14.36v1.12z"
				fill="#3f3d56"
			/>
			<path
				d="M637.33 491.27l-1.23 15.33-1.83 22.85-.46 5.72-1 12.81-.06.64v.17l-.15 1.48.11-1.48h-.29l-107 1-175.65 1.9v-.28l.49-14.36 1-28.06.64-18.65a6.36 6.36 0 0 1 3.06-5.25 6.25 6.25 0 0 1 3.78-.9c2.1.17 4.68.37 7.69.59 4.89.36 10.92.78 17.94 1.22 13 .82 29.31 1.7 48 2.42 52 2 122.2 2.67 188.88-3.17 3-.26 6.1-.55 9.13-.84a6.26 6.26 0 0 1 3.48.66 5.16 5.16 0 0 1 .86.54 6.14 6.14 0 0 1 2 2.46 3.56 3.56 0 0 1 .25.61 6.28 6.28 0 0 1 .36 2.59zM298.1 504.96v3.19a6.13 6.13 0 0 1-3.5 5.54l-40.1.77a6.12 6.12 0 0 1-3.57-5.57v-3z"
				opacity={0.1}
			/>
			<path fill="#3f3d56" d="M298.6 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
			<path opacity={0.1} d="M298.6 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
			<path fill="#3f3d56" d="M300.6 515.57l-52.25 1v-8.67l52.25-1v8.67z" />
			<g opacity={0.1}>
				<path d="M473.59 188.65a9.75 9.75 0 0 1-1.89-4.34 9.49 9.49 0 0 0 .42 4.6 9 9 0 0 0 1.47-.26zM460.89 195.29a35.12 35.12 0 0 1-.37-3.7v3.71zM542.39 228.66a18.34 18.34 0 0 1 .36-2.65 18 18 0 0 0 .8-4.69 6.16 6.16 0 0 0-.16-1.06c-.17.92-.44 1.84-.64 2.75a19.14 19.14 0 0 0-.36 5.65zM521.59 197.76l1.09.79a19.71 19.71 0 0 0 2.57-2.22 3.67 3.67 0 0 0 .38-3.64 3 3 0 0 1-.38.64c-1.23 1.58-3.95 2.45-3.66 4.43zM439.42 207.38a12.32 12.32 0 0 0-.87 2.28 18.16 18.16 0 0 1 5-1.89zM453.21 196.5a14.83 14.83 0 0 1-1.88-1.23 4.25 4.25 0 0 0 .09 1.18 11.86 11.86 0 0 1 1.79.05zM550.98 255.42c-.41 4.85-2.67 9.52-4.5 14.12-3.67 9.22-5.74 19-7.29 28.81-1.39 8.79-3 18.77-10.5 23.64a30 30 0 0 1-6.83 3c-10.78 3.73-21.65 7.47-33 8.83s-23.26.17-33.16-5.49a20 20 0 0 1-7.18-6.33c-2.67-4.23-2.72-9.53-4-14.37a82.21 82.21 0 0 0-4-10.52c-2.21-5.38-3.91-11-5.6-16.53q-2.35-7.71-4.69-15.43a28.81 28.81 0 0 1-1.14-4.75c-.39 2.56.37 5.24 1.14 7.75q2.34 7.73 4.69 15.43c1.69 5.57 3.39 11.15 5.6 16.53a82.21 82.21 0 0 1 4 10.52c1.26 4.84 1.31 10.14 4 14.37a20 20 0 0 0 7.18 6.33c9.9 5.66 21.84 6.85 33.16 5.49s22.18-5.1 33-8.83a30 30 0 0 0 6.83-3c7.45-4.87 9.11-14.85 10.5-23.64 1.55-9.81 3.62-19.59 7.29-28.81 2.18-5.48 5-11.05 4.52-16.94 0-.06-.02-.12-.02-.18zM431.29 251.55v-.11a14 14 0 0 0-.46-5.25 26.59 26.59 0 0 1-.39-3.32 27.35 27.35 0 0 0 .39 6.32c.16.78.34 1.57.46 2.36zM434.34 227.09a27.74 27.74 0 0 1 2.61-3.67c-1.83 1.75-5.21.19-5.92-2.24a5.83 5.83 0 0 0 0 3 4.39 4.39 0 0 0 3.31 2.91z" />
			</g>
			<path
				d="M684.1 483.66s3.17 11.5 0 21.5 0-21.5 0-21.5zM697.6 495.39s1.33 14.6-1.67 17.19 1.67-17.19 1.67-17.19z"
				opacity={0.1}
			/>
			<path
				fill="none"
				stroke={primaryColor}
				strokeMiterlimit={10}
				strokeWidth={2}
				d="M198.99 342.86l101.61-1M198.99 355.33l101.61-.99M198.99 367.81l101.61-1"
			/>
		</svg>
	);
};

UndrawProgramming.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawProgramming;
