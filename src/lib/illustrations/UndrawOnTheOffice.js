import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawOnTheOffice = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 996.46 828.18" style={style} {...props}>
			<defs>
				<linearGradient
					id="prefix__a"
					x1={-925.56}
					y1={683.71}
					x2={-925.56}
					y2={144.42}
					gradientTransform="matrix(-1 0 0 1 -573.82 0)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<path
				d="M994.59 272.45h-91.94V383.9h85.22c.22 1.15.43 2.3.68 3.44h-85.9v89.86l.43-.14q3.64-1.28 7.23-2.72l1.54-.63q3.68-1.51 7.23-3.23c.85-.39 1.69-.8 2.52-1.22a149.83 149.83 0 0 0 36.17-25c.31-.27.6-.55.88-.82 1.47-1.42 2.91-2.85 4.31-4.32l1.54-1.64c1.65-1.79 3.24-3.64 4.79-5.51l.68-.82a116.4 116.4 0 0 0 15.58-25c.13-.27.24-.55.36-.82 1.25-2.82 2.38-5.68 3.36-8.59.42-1.23.82-2.46 1.17-3.69.12-.37.23-.73.33-1.09 5.1-17.85 5.69-36.4 5.69-54.85v-6.45c0-7.45-.11-15-.25-22.45 0-1.94-.09-3.87-.14-5.82q-.18-7.43-.54-14.84c-.06-1.38-.12-2.75-.21-4.11 0-.79-.08-1.58-.13-2.37-.2-2.93-.38-5.77-.6-8.62zM902.65 148.38h50.43a344.83 344.83 0 0 0-26.85-32.84c-7.5-8.18-15.37-16.16-23.61-23.84zM902.65 151.82v117.19h91.65c0-.34-.06-.69-.09-1a284.578 284.578 0 0 0-.58-6.02c-.12-1.09-.24-2.35-.38-3.51s-.26-2.35-.41-3.52-.29-2.34-.45-3.5-.31-2.34-.49-3.5c-.14-1-.27-1.92-.42-2.89-.21-1.36-.43-2.73-.66-4.08a5.78 5.78 0 0 0-.11-.6 251.24 251.24 0 0 0-6.74-29.43 202.47 202.47 0 0 0-11.37-29.87 216.88 216.88 0 0 0-17.11-29.3zM684.31 272.45V383.9h196.38V272.45zm0 114.89v75.47c22.86-7.31 49-4.36 72.7 1.64 18.35 4.66 36.23 11 54.55 15.56a200.08 200.08 0 0 0 24.87 4.7l2.06.22c1 .1 2 .2 3 .28l3 .21H846.14a3.55 3.55 0 0 0 .46 0l1.62.06h.05c.77 0 1.55 0 2.33.06h6.42c.59 0 1.17 0 1.75-.06.94 0 1.88-.08 2.83-.15l1.75-.11 2.16-.17c1.53-.12 3-.28 4.55-.46.6-.07 1.21-.14 1.81-.23l.89-.11c1.51-.2 3-.44 4.51-.69 1.11-.17 2.22-.38 3.34-.58v-95.64zm146.06-239v3.44H684.31v117.23h196.38V151.82h-9.85v-3.44h9.85V72.64c-38.2-30.77-82.85-54.87-132.58-66a282 282 0 0 0-63.8-6.65v148.39zm-449-.66l.69.66h280.28V1.02c-49.9 4.15-98.56 20.91-137.79 48.68-18.85 13.33-35.78 29.13-56.93 39.36a89.15 89.15 0 0 1-35.6 9.2zm-1.93-60.44v33.35l27.08-26.43c-10.07-3.48-18.01-5.86-27.12-6.88zm-.9 419.56h.9v73.1q15.33-1.14 30.54-3.14a546.44 546.44 0 0 0 132.25-34.26q6.84-2.74 13.58-5.66 4.49-1.95 8.93-4 6.66-3.06 13.22-6.29a465.15 465.15 0 0 0 55.87-32.46c1.11-.75 2.23-1.51 3.33-2.28q3.32-2.3 6.59-4.64c1.09-.79 2.18-1.58 3.26-2.38l2.22-1.7c2.24-1.67 4.47-3.35 6.73-5 2.09-1.5 4.2-3 6.34-4.4v-86.4H437.15c.16-.51.31-1 .48-1.54-.18.52-.34 1-.49 1.54H379.4v119.49zm.9-355v117.21h282.9V151.82zm0 120.63V383.9h282.9V272.45zM322.88 90.67l34.56 33.73V87.09q-17.37 1.08-34.56 3.58zM82.23 272.45V383.9h275.21V272.45zm66.52 275.25a511.15 511.15 0 0 0 129.73 30.78h.19q12.59 1.33 25.25 2.06h.31c17.69 1 35.45 1.23 53.18.57V387.34H82.23l1 128.32M6 383.9h54.28V272.45H38.81c-2.23 3.92-4.39 7.86-6.44 11.86q-1.65 3.19-3.21 6.45C15.03 320.09 6.05 352.33 6 383.9zm0 3.44c.44 22.64 5.54 44.86 16.73 65.39 9.3 17.05 22.22 32 37.51 45V387.34zm34.78-118.33h19.46v-29a309.35 309.35 0 0 0-19.42 29zm121.93-120.63h188.24l.68-.66-1-1-52.93-51.63a429.83 429.83 0 0 0-46.47 12.45c-1.44.47-2.88 1-4.31 1.45a421.47 421.47 0 0 0-84.21 39.39zm-80.48 65.37v55.26h275.24v-114l-3.86-3.14H157.17a377.73 377.73 0 0 0-74.94 61.88z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				d="M902.65 210.93v58.08h91.65c0-.34-.06-.69-.09-1a284.578 284.578 0 0 0-.58-6.02c-.12-1.09-.24-2.35-.38-3.51s-.26-2.35-.41-3.52-.29-2.34-.45-3.5-.31-2.34-.49-3.5c-.14-1-.27-1.92-.42-2.89-.21-1.36-.43-2.73-.66-4.08a5.78 5.78 0 0 0-.11-.6 251.24 251.24 0 0 0-6.74-29.43zM994.59 272.45h-91.94V383.9h85.22c.22 1.15.43 2.3.68 3.44h-85.9v89.86l.43-.14q3.64-1.28 7.23-2.72l1.54-.63q3.68-1.51 7.23-3.23c.85-.39 1.69-.8 2.52-1.22a149.83 149.83 0 0 0 36.17-25c.31-.27.6-.55.88-.82 1.47-1.42 2.91-2.85 4.31-4.32l1.54-1.64c1.65-1.79 3.24-3.64 4.79-5.51l.68-.82a116.4 116.4 0 0 0 15.58-25c.13-.27.24-.55.36-.82 1.25-2.82 2.38-5.68 3.36-8.59.42-1.23.82-2.46 1.17-3.69.12-.37.23-.73.33-1.09 5.1-17.85 5.69-36.4 5.69-54.85v-6.45c0-7.45-.11-15-.25-22.45 0-1.94-.09-3.87-.14-5.82q-.18-7.43-.54-14.84c-.06-1.38-.12-2.75-.21-4.11 0-.79-.08-1.58-.13-2.37-.2-2.93-.38-5.77-.6-8.62zM811.56 168.6v100.41h69.13V168.6h-9.85v-34h-40.47v34h-18.81zM811.56 272.45h69.13v111.44h-69.13zM880.69 387.34h-69.12v92.67a201.42 201.42 0 0 0 24.86 4.7l2.06.22c1 .11 2 .2 3 .28l3 .21h.31c.44 0 .89 0 1.34.06h.46c.54 0 1.08 0 1.63.06.77 0 1.55 0 2.33.06h6.42l1.76-.06c.93 0 1.88-.08 2.82-.15l1.74-.11 2.17-.17c1.52-.13 3-.28 4.54-.46l1.81-.23.89-.11c1.51-.21 3-.43 4.51-.69 1.12-.17 2.22-.38 3.34-.58zM379.4 156.74h57.01V269H379.4zM379.4 272.45V383.9h282.94v-48.07H511.63v28.36H436.4v-91.74h-57zM378.5 506.84h.9v73.11q15.33-1.16 30.54-3.14a547.41 547.41 0 0 0 132.29-34.31q18.24-7.32 35.73-15.94a465.15 465.15 0 0 0 55.87-32.47q6.69-4.54 13.17-9.29c3-2.21 6-4.46 9-6.65 2.09-1.5 4.2-3 6.34-4.41v-86.4H437.16c.16-.51.31-1 .47-1.53-.17.51-.34 1-.49 1.53H379.4v119.45zM230.73 148.38h37.14v-10.29h-16.64v-30.55c-1.44.47-2.88 1-4.31 1.45v29.1h-16.19zM141.23 269.01h182.36-.06H357.44V156.74h-9.58v83h-43.8v-49.12h-36.19v-38.8h-37.14v38.8h-36.18v49.11h-53.32zM141.23 272.45V383.9h216.21V272.45zm7.55 275.25a511.15 511.15 0 0 0 129.73 30.78h.19q12.59 1.33 25.25 2.06h.31c17.69 1 35.45 1.23 53.18.57V387.34H141.23v39.51h-59l.31 88.21M56.47 387.34H6.04c.44 22.64 5.55 44.86 16.73 65.39 9.3 17.06 22.23 32 37.51 45v-70.88h-3.81zM6 383.9h50.47v-93.14H29.16C15.03 320.09 6.05 352.33 6 383.9z"
				fill={primaryColor}
				opacity={0.1}
			/>
			<path
				fill={primaryColor}
				opacity={0.1}
				d="M379.4 187.95h30.54v35.2H379.4zM379.4 260.91h30.54v8.1H379.4zM379.4 272.45h30.54v23.65H379.4zM379.4 333.86h30.54v35.2H379.4zM379.4 406.82h30.54v35.2H379.4zM379.4 506.79h-.9.9v8.17h30.54v-35.2H379.4zM379.4 552.72v27.19q15.33-1.16 30.54-3.14v-24zM531.46 381.31h130.88v2.58H531.46zM531.46 387.34h130.88v9.91H531.46zM531.46 429.73h130.88v15.94H531.46zM531.46 478.15v15.94h102.38q6.67-4.53 13.17-9.3c3-2.2 6-4.45 9-6.63zM531.46 526.56v15.94h10.77q18.23-7.3 35.72-15.94zM304.26 306.17H278.5v-22.91h25.76zM862.12 199.41h-25.76V176.5h25.76zM862.12 252.63h-25.76v-22.91h25.76zM862.12 305.84h-25.76v-22.91h25.76zM862.12 359.06h-25.76v-22.91h25.76zM862.12 412.29h-25.76v-22.91h25.76zM862.12 465.5h-25.76v-22.91h25.76zM205.9 306.17h-25.76v-22.91h25.76zM304.26 362.67H278.5v-22.91h25.76zM205.9 362.67h-25.76v-22.91h25.76zM304.26 419.18H278.5v-22.91h25.76zM205.9 419.18h-25.76v-22.91h25.76zM304.26 475.69H278.5v-22.91h25.76zM205.9 475.69h-25.76v-22.91h25.76zM304.26 532.21H278.5V509.3h25.76zM205.9 532.21h-25.76V509.3h25.76zM304.25 580.58v-14.77H278.5v12.67l25.75 2.1zM902.65 240.35v13.11h88.17v-13.11zm79.39.83h7.19v11.46H982zm-8.78 0h7.23v11.46h-7.26zm-8.76 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.28v11.46H947zm-8.78 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zM902.65 278.51v13.11h88.17v-13.11zm79.39.83h7.19v11.45H982zm-8.78 0h7.23v11.45h-7.26zm-8.76 0h7.23v11.45h-7.23zm-8.78 0h7.23v11.45h-7.23zm-8.77 0h7.28v11.45H947zm-8.78 0h7.23v11.45h-7.23zm-8.78 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zM902.65 316.66v13.1h88.17v-13.1zm79.39.82h7.19v11.46H982zm-8.78 0h7.23v11.46h-7.26zm-8.76 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.28v11.46H947zm-8.78 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zM902.65 354.81v13.1h88.17v-13.1zm79.39.82h7.19v11.46H982zm-8.78 0h7.23v11.46h-7.26zm-8.76 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.28v11.46H947zm-8.78 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zM902.65 392.96v13.13h82.9c.12-.27.24-.55.35-.82h-3.86v-11.48h7.19v2.85c.42-1.22.82-2.44 1.17-3.68zm70.61.83h7.23v11.45h-7.26zm-8.76 0h7.23v11.45h-7.23zm-8.78 0h7.23v11.45h-7.23zm-8.77 0h7.28v11.45H947zm-8.78 0h7.23v11.45h-7.23zm-8.78 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zm-8.77 0h7.23v11.45h-7.23zM902.65 431.09v13.1h55.11c.32-.27.6-.56.89-.82h-2.93v-11.43h7.23v7.15l1.55-1.65v-5.5h4.79c.23-.28.45-.56.68-.82zm44.3.82h7.28v11.46H947zm-8.78 0h7.23v11.46h-7.23zm-8.78 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zm-8.77 0h7.23v11.46h-7.23zM902.65 469.27v7.93a3.12 3.12 0 0 0 .43-.15v-7h7.23v4.26l1.54-.63v-3.59h7.23v.4c.85-.39 1.69-.8 2.52-1.21zM323.56 269.03h.05zm54.94 237.81h.9zm58.64-119.5c.16-.51.31-1 .48-1.54-.17.52-.33 1.03-.48 1.54zM323.56 269.03h.05zm506.81-120.65v3.44h40.47v-3.44zM378.5 506.84h.9zm58.64-119.5c.16-.51.31-1 .48-1.54-.17.52-.33 1.03-.48 1.54zM323.56 269.03h.05zm54.94 237.81h.9zm58.64-119.5c.16-.51.31-1 .48-1.54-.17.52-.33 1.03-.48 1.54z"
			/>
			<ellipse cx={902.95} cy={820.59} rx={34.58} ry={3.83} fill={primaryColor} opacity={0.1} />
			<path fill="#d48a9b" d="M668.32 535.25l-17.28-.95-1.17-49.63-.27-11.82 18.23-3.36.12 15.24.37 50.52z" />
			<path
				fill="#d48a9b"
				d="M654.87 526.61l-88.8 55.21-1.92 16.8 9.6.48v-12l58.08-32.64-70.08 86.88v13.44h11.52l-.96-14.88 81.12-92.16 10.08.96 85.45 96.96 1.92 16.33 11.52.48-1.92-16.81-67.68-84.48 45.12 31.2.96 13.44 9.12.48-.96-16.32-85.93-66.25-6.24 2.88z"
			/>
			<path
				d="M543.31 432.18a158.41 158.41 0 0 0 20.92-34.09c6.11-13.52 12.81-29.13 13.32-33.75 1-8.64 25.44-25.92 52.32-26.88 17.53-.63 44.84-14.31 61.74-23.76a125.67 125.67 0 0 1 51.8-16c19.77-1.49 38.36 2.39 29 25.33l-125.7 152.22s-107.2 18.89-113.81-11.48a25.26 25.26 0 0 0-1.53-4.46c-1.25-2.87-1.58-10.36 11.94-27.13z"
				fill={primaryColor}
			/>
			<path
				d="M552.75 435.2a163.07 163.07 0 0 0 21.13-34.4c5.7-12.64 11.75-26.81 12.23-31.1.92-8.25 24.34-24.76 50.06-25.68 16.77-.6 42.9-13.66 59.06-22.69a120.41 120.41 0 0 1 49.58-15.24c18.91-1.42 36.7 2.29 27.78 24.2l-99.71 146s-123 17.45-129.51-11.42a28.87 28.87 0 0 0-1.53-4.48c-1.14-2.86-1.3-9.87 10.91-25.19z"
				fill="#dda2a6"
				opacity={0.2}
			/>
			<path d="M667.95 484.73c-5.78 0-11.87 0-18.08-.06l-.27-11.82 18.23-3.35z" opacity={0.1} />
			<g opacity={0.1}>
				<path d="M737.92 589.5l-45.12-31.2 5.17 6.45 39.95 27.63.96 13.44 9.12.48-.17-2.89-8.95-.47-.96-13.44zM573.75 584.22v2.88l53.83-30.25 4.25-5.27-58.08 32.64zM561.75 651.9v2.88h11.52l-.19-2.88h-11.33zM573.75 596.22l-9.28-.46-.32 2.86 9.6.48v-2.88zM750.88 659.11l-1.92-16.33-85.45-96.96-10.08-.96-81.12 92.16.17 2.69 80.95-91.97 10.08.96 85.45 96.96 1.92 16.33 11.52.48-.33-2.9-11.19-.46z" />
			</g>
			<path d="M657.75 390.15s22.48 16.44 12.64 16.63-12.64-16.63-12.64-16.63z" opacity={0.1} />
			<path
				d="M563.43 480.09s37.2-2.88 51.12-29.76c0 0 28.32-56.17 51.37-62.41s65.76-20.16 83.52-41.76S774.65 308 774.65 308s4.58 17.48-9.85 38.09-19.68 52.35-29.76 86-13.92 47-32.16 49c-13.75 1.45-86.45.72-121.21 0-11.37-.31-18.24-1-18.24-1z"
				fill={primaryColor}
			/>
			<path
				d="M563.43 480.09s37.2-2.88 51.12-29.76c0 0 28.32-56.17 51.37-62.41s65.76-20.16 83.52-41.76S774.65 308 774.65 308s4.58 17.48-9.85 38.09-19.68 52.35-29.76 86-13.92 47-32.16 49c-13.75 1.45-86.45.72-121.21 0-11.37-.31-18.24-1-18.24-1z"
				fill="#dda2a6"
				opacity={0.2}
			/>
			<path
				d="M572.79 480.09s35.56-2.79 48.86-28.82c0 0 27.08-54.38 49.1-60.42s62.86-19.53 79.84-40.44 24.09-36.95 24.09-36.95 4.35 17-9.41 36.95-18.81 50.66-28.45 83.2-13.3 45.55-30.74 47.41c-13.14 1.4-82.63.69-115.86 0-10.86-.21-17.43-.93-17.43-.93z"
				fill={primaryColor}
			/>
			<path d="M543.99 466.09s19.44 7.44 30.48 3.36 38.4-16.08 38.4-16.08-46.08 2.92-68.88 12.72z" opacity={0.1} />
			<path
				d="M673.97 815.44s-55.88-3-69.5-11-32.9-8-33-8l-222.5-48.5-92.5-22-16.5-2.17 54.5-62.36 1.66-.72 80.34-34.75s36 2 43.11 25.46a28.33 28.33 0 0 1 1 5.06A29.36 29.36 0 0 1 414.9 677c-2.84 3.88-6.33 9.39-7.43 14.24-.62 2.74-.48 5.27 1 7.2a58.69 58.69 0 0 0 9.88 7.89c19.59 13 69.11 34.42 155.62 1.61 0 0 37-36.5 65-21s35 128.5 35 128.5z"
				fill="#e1dee5"
			/>
			<path
				d="M407.51 691.24c-.62 2.74-.48 5.27 1 7.2a58.69 58.69 0 0 0 9.88 7.89l-168.42 12.61 46.16-58.25 80.34-34.75s36 2 43.11 25.46a28.33 28.33 0 0 1 1 5.06A29.36 29.36 0 0 1 414.9 677c-2.8 3.88-6.29 9.39-7.39 14.24z"
				opacity={0.1}
			/>
			<path fill="#a36468" d="M242.97 461.94l138 3v165.19l-131 88.81-31.5-29 6.5-96-6.5-89.5 24.5-42.5z" />
			<path
				d="M164.47 434.94l161.12-49.65a24.41 24.41 0 0 1 8.95-1l384.9 28.09a181.82 181.82 0 0 1 91.66 32.33c24.91 17.57 49.58 44.54 61 85.38a163.05 163.05 0 0 1-1.65 91.83l-34 110s25.5-239-229-251z"
				fill="#d9d6df"
			/>
			<path
				d="M249.97 458.44v265.33s-44.15-6.21-52-14.83c-6.44-7.07-43.75-27-59.94-47.53-3.55-4.5-6.09-9-7.06-13.47-5.42-24.68-27.5-83-27.5-83l6-57 25-37 48.5-22h37.5z"
				fill="#b8797d"
			/>
			<path
				d="M179.97 461.94s-71.76 45-56.06 117.41c1.28 5.9 2.39 11.83 3.12 17.83 2.87 23.42 20.09 90.72 122.94 121.76v7l-43.63-12.17-29.62-16.33-22.61-20.28-27.64-33.72-12.83-27.5-4.7-36.22-2.71-41.35 6.61-35.47 15.59-23.08 19-14.77z"
				fill="#d9d6df"
			/>
			<path
				d="M249.97 458.44v42.21c-31.3 3.4-128.21 23-111 135l-.95 25.72c-3.55-4.5-6.09-9-7.06-13.47-5.42-24.68-27.5-83-27.5-83l6-57 25-37 48.5-22h37.5z"
				opacity={0.1}
			/>
			<path
				d="M414.94 677c-2.84 3.88-6.33 9.39-7.43 14.24-4.36-5-5.3-10.75 1-15.3 7.89-5.74 10.52-15.7 11.11-24.54a28.33 28.33 0 0 1 1 5.06 29.36 29.36 0 0 1-5.68 20.54z"
				fill="#fff"
				opacity={0.1}
			/>
			<path
				d="M818.97 703.94l-19 64.5-43 42-54 11-84-15v-298.5s14.5-9.5 16-9.5 42 6.5 42 6.5l91.7 65.77 3.8 2.73 41 61z"
				fill="#b8797d"
			/>
			<path fill="#a36468" d="M618.97 495.44v311l8.1 1.45V495.44h-8.1z" />
			<path
				d="M770.47 591.44c-60-49.3-126.7-56.55-151.5-57.45v-26s14.5-9.5 16-9.5 42 6.5 42 6.5l91.7 65.77z"
				opacity={0.1}
			/>
			<path
				d="M606.3 475.44l-375.83-41-42.24-2.24a86.81 86.81 0 0 0-70.21 29.35c-22 25.3-38.63 69.93-14.34 146.56 0 0 25.33 99.33 148 120.67l356.44 80.77c7.9 1.79 15.7 4 23.4 6.51 32.36 10.63 142 38.17 193.65-55.45 17.7-32.1 23-69.53 16.18-105.56-12.43-65.9-59.36-177.73-235.05-179.61zm184.13 280.89c-48.2 78.52-147.52 55.15-177.38 45.93-7.31-2.26-14.71-4.23-22.2-5.83l-329.26-70.44c-113.44-18.63-136.87-105.36-136.87-105.36-19.15-57-10.78-93.78 4.7-117.06 16.21-24.37 44.43-38 73.67-36.52l38.92 2 336.16 44.91c6.8.91 13.65 1.51 20.51 1.74 149.49 5.07 196 87.27 207.82 143.92 6.94 33.11 1.66 67.85-16.07 96.71z"
				fill="#e1dee5"
			/>
			<path
				d="M106 678.46c12.31 8.24 31 4.32 31 4.32s28.19-13.35 36.52-13.35 28.59-8.25 28.59-8.25l-.69-5.56-2.06-16.75c12.83 10 27.09 6.55 34.11 5.82 7.54-.78 47.83-24.73 51.71-26.31 1.05-.42 2.28-1.79 3.53-3.56a90.77 90.77 0 0 0 6.82-12.46c2.52-2.22 4.36-4 4.23-4.39s1-3.31 2.47-6.6c5.72-1 10.65-3.12 12.22-4.4a10.67 10.67 0 0 0 4-8.64s39.31-39.65 34.14-56.14 12.71-16.89 12.71-16.89 27.39-11.78 31.2-18.84c2.35-4.35 22.9-13.9 38.36-20.6l1.9-.82c6 13.15 36.48 3 42.48-2.53 6.35-5.89 25-8.64 25-8.64s.8-77 6.75-86.78c2.83-4.65 3.51-19.85 3.44-34.53V331c8.34-1.63 28.18-5.4 37.39-6.31 5.84-.58 11.93-4.22 16.6-7.76l.55.69a11.4 11.4 0 0 0 5.07.83 7.76 7.76 0 0 0 4.45-.83c3.58-2 16.68-5.89 21.44-7.85s-.79-16.1-4.36-18.85-6-6.28-4-7.85-4.76-5.5-8.73-6.29-15.88-6.28-15.88-6.28-4.37-9-11.51-9-16.68-7.07-16.68-7.07c-.39-3.14-7.94-3.53-7.94-3.53s-28.58-22-33.35-19.24-17.86-4.32-17.86-4.32-16.07 1.8-19.85-1.16a4.46 4.46 0 0 0-1-2.66c-.85-2.66-5-6.3-9-9.33a35.4 35.4 0 0 0 .46-5.68c0-.82 0-1.64-.09-2.45v-.41l.57-5.53a11.42 11.42 0 0 1 1.38-5.2c.67-1 1.66-1.85 2.41-2.84a7.06 7.06 0 0 0 .48-.73l.12-.21a6.54 6.54 0 0 0 .3-.59l.09-.2a9.6 9.6 0 0 0 .51-1.68v-.13c.05-.26.09-.52.12-.79a.45.45 0 0 1 0-.11 16.75 16.75 0 0 0-.9-6.74c-1.19-3.71-3.05-7.29-3.25-11.16-.1-1.92.22-3.88-.2-5.76-1-4.29-5.37-7-9.62-8.8-5.87-2.46-8.83-5.15-13.54-8.81-4-3.1-10.62-1.54-15.66-1.22-11.52.74-22.89 4.21-33.73 7.79-4.21 1.4-8.5 3-11.78 5.85a13 13 0 0 0-4.31 7.28 9.52 9.52 0 0 0-.13 2v.17c0 .26 0 .51.09.76a1.87 1.87 0 0 0 0 .25 5.9 5.9 0 0 0 .22.9c.46 1.45 1.31 2.76 1.8 4.2a8.21 8.21 0 0 1 .27 1v.1c.07.32.12.63.16 1 .44 3.57-.88 7.3-1.46 10.94-.08.51-.14 1-.18 1.56a18.64 18.64 0 0 0 .55 6.27.19.19 0 0 0 0 .07c.06.25.15.5.23.74a3 3 0 0 0 .1.32c.07.21.16.42.24.62l.17.42c.08.18.17.36.26.54s.15.3.23.44a5.46 5.46 0 0 0 .27.48c.09.16.19.31.29.46s.19.29.3.43.23.31.35.46l.31.38.42.44.33.33.49.42c.12.09.22.19.34.27s.41.29.62.42l.29.2c.32.19.66.36 1 .52 2.28 1 5.16 1.41 6.53 3.42a4.22 4.22 0 0 1 .67 1.56v.75c0 1.16.08 2.31.2 3.44a12.73 12.73 0 0 0 .11 1.86 5.33 5.33 0 0 0 .38 1.35 35.68 35.68 0 0 0 12 20.22c.12.61.26 1.32.41 2.12a39.71 39.71 0 0 1-11.55 6c-9.53 2.79-23 15.66-23 15.66s-6.7 48.29-8.31 54.18-2.8 28.67-2.8 28.67-1.59 9.42-4 14.13c-1.69 3.32-1.38 17.59 3.32 26.26a21.9 21.9 0 0 1-2.92 4.76c-9.53 11-38.12 10.6-47.65 10.6-8.77 0-11.48 5.32-11.85 6.16-17.45 5-73.95 21.08-80.65 24-7.94 3.47-12.31 37.76-12.31 37.76s-16.59 56.92-15.8 64.38-5.56 28.24-5.56 28.24 0 23.49-2.69 25.08a.25.25 0 0 1-.08.05c-2.78 1.18-2.39 12.57-2.39 12.57s2.05.59 5.24 1.4c-.85 5.75-4 13.8-6.43 19.52-1.24-1.57-2.45-2.22-3.17-.4-2 5-31.76 40.34-39.31 40.34-3.59 0-9.53 2.94-13.44 6.91-4.28 4.37-6.1 9.98.36 14.29zm136.55-204.57c33.75 3.14 69.88-2.39 69.88-2.39s-2.78 9.85-5.16 13.78-9.14 26.31-9.14 31-10.72 45.15-13.89 47.11c-1.33.83-2.52 2.89-3.46 5a46.94 46.94 0 0 0-2.1 6q.07 1.53.27 2.91c-2.37 2.17-4.88 4.45-7.11 6.47s-14.2 7.9-19 12.22-27 9.62-27 9.62a138.21 138.21 0 0 0-16 8.15c-6.89 4.15-13.78 9.43-15.58 14.64.78-8.78 2.05-19.35 2.9-26.07l1.26-.05c11.13-.69 9.47-11.31 8.88-13.94-.08-.38-.14-.59-.14-.59 7.94-8.64 25.8-73 23.42-80.1s2-13.35 2.93-13.35 2.23-7.85.25-12.17 8.79-8.24 8.79-8.24zm272.9-173.22l-2.11.52v-.45s.77 0 2.11-.07zm-115.36-59.25c-.32.4-.64.78-1 1.15l-.41.42v-2.18c.48.19.94.42 1.41.61zm-39.77 76.18l.14 2.21s-.21 1.35-.61 3.66zm182.45-21.94l-6.93 1.19c1-.37 1.95-.77 2.89-1.22a6.65 6.65 0 0 1 2.21-.6 12.69 12.69 0 0 1 2.58.55 4.78 4.78 0 0 0-.75.08z"
				transform="translate(-101.77 -35.91)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M206.71 543.23s-8 16.51-7.59 17.68-17.15 15.18-17.15 15.18l-19.09-13.63 2-9.36s21.43-19.31 23-21.54 18.83 11.67 18.83 11.67z"
				fill="#efb7b9"
			/>
			<path
				d="M97.81 599.09c13.25 12.86 28.83 9 36.24 8.19s46.94-24.55 50.74-26.11c1-.42 2.25-1.78 3.47-3.54a89.92 89.92 0 0 0 6.69-12.37c-.26.07-13.22 3.78-16.49 0 0 0-5.46-6.69-6.63-6.69s-.09-11.74-.09-11.74-13.94 7.84-18.61 12.13-26.5 9.54-26.5 9.54a134 134 0 0 0-15.68 8.09c-10.32 6.3-20.72 15.19-13.14 22.5z"
				fill="#67647e"
			/>
			<path
				d="M97.81 599.09c13.25 12.86 28.83 9 36.24 8.19s46.94-24.55 50.74-26.11c1-.42 2.25-1.78 3.47-3.54-4.61-2.75-34.73 16.4-43.16 19.91s-29.76 1.55-41.87-3.51c-6-2.53.08-10.3 7.7-17.44-10.3 6.3-20.7 15.19-13.12 22.5z"
				opacity={0.1}
			/>
			<path
				d="M99.37 558.57s-5.55 41.69-4.14 47.15-34.83-18.7-34.83-18.7 12.68-26.13 9-32.13 29.97 3.68 29.97 3.68z"
				fill="#efb7b9"
			/>
			<path
				d="M64.69 559.35s22.6 6.62 35.06 5.84c10.92-.68 9.29-11.22 8.72-13.83-.08-.37-.14-.58-.14-.58 7.79-8.58 25.33-72.48 23-79.49s1.9-13.2 2.9-13.2 2.19-7.8.24-12.08 8.58-8.18 8.58-8.18c33.12 3.11 68.58-2.38 68.58-2.38s-2.73 9.78-5.07 13.68-9 26.1-9 30.78-10.52 44.81-13.64 46.76c-1.3.82-2.47 2.86-3.39 5a46.75 46.75 0 0 0-2.06 6c1.17 26.11 30.78 16 35.07 12.47a11.5 11.5 0 0 0 1.66-1.7 10.9 10.9 0 0 0 2.23-6.88s38.58-39.35 33.51-55.72 12.47-16.75 12.47-16.75 26.89-11.69 30.63-18.71c2.31-4.31 22.47-13.78 37.65-20.44 9.51-4.17 17.06-7.22 17.06-7.22l-6.32-22.66-5-17.87-9.38-3.52-30-11.28-53.82-7.55-4.93.64-52.29 6.77s-76.34 21.84-84.14 25.26-12.08 37.47-12.08 37.47-16.36 56.5-15.56 63.94-5.46 28-5.46 28 0 23.31-2.65 24.89a.14.14 0 0 1-.08 0c-2.74 1.28-2.35 12.54-2.35 12.54z"
				fill="#444053"
			/>
			<path
				d="M143.01 437.78c33.12 3.11 68.58-2.38 68.58-2.38 2.34-7.37 35.09-27.63 35.09-27.63-26.87-6.62-103.67 30.01-103.67 30.01z"
				opacity={0.1}
			/>
			<path
				d="M178.47 537.53c1.17 26.11 30.78 16 35.07 12.47a11.5 11.5 0 0 0 1.66-1.7c-10.35 3.81-28.7 6.76-34.67-16.73a46.75 46.75 0 0 0-2.06 5.96zM64.69 559.35s22.6 6.62 35.06 5.84c10.92-.68 9.29-11.22 8.72-13.83-11.44-.36-31.14-1.43-41.37-4.53a.14.14 0 0 1-.08 0c-2.72 1.26-2.33 12.52-2.33 12.52z"
				fill="#444053"
			/>
			<path
				d="M178.47 537.53c1.17 26.11 30.78 16 35.07 12.47a11.5 11.5 0 0 0 1.66-1.7c-10.35 3.81-28.7 6.76-34.67-16.73a46.75 46.75 0 0 0-2.06 5.96zM64.69 559.35s22.6 6.62 35.06 5.84c10.92-.68 9.29-11.22 8.72-13.83-11.44-.36-31.14-1.43-41.37-4.53a.14.14 0 0 1-.08 0c-2.72 1.26-2.33 12.52-2.33 12.52z"
				opacity={0.1}
			/>
			<path
				d="M8.96 640.79c12.08 8.18 30.4 4.28 30.4 4.28s27.66-13.24 35.85-13.24 28.02-8.19 28.02-8.19l-.67-5.51-3.22-26.44s-30.35-.78-31.57-3.51c0 0-5.45-13.42-7.4-8.46s-31.17 40-38.58 40c-3.53 0-9.36 2.92-13.19 6.86-4.17 4.37-5.96 9.93.36 14.21z"
				fill="#67647e"
			/>
			<path
				d="M113.78 410.5s25.33 16 18.32 19.48-18.32-19.48-18.32-19.48zM103.23 441.28s21.82 20.72 13.64 21.27-13.64-21.27-13.64-21.27zM79.88 507.09s11.08 20.83 6.91 24.44-6.91-24.44-6.91-24.44zM201.85 528.18c-3.9 3.89 37-12.86 27.66-13.64s-27.66 13.64-27.66 13.64z"
				opacity={0.1}
			/>
			<path
				d="M283.67 235.93l1.31-.19c4.84-.74 22.41-3.5 38.17-6.92 3.84-.84 7.56-1.71 11-2.61 12.07-3.16 20.17-6.57 15-9.37-6.84-3.71-10.44-10.45-12.34-16.25-.18-.57-.35-1.12-.51-1.67a43.31 43.31 0 0 1-1.57-9s-44-15.59-35.46 0c4.21 7.65 1.38 13.89-2.59 18.26a34.28 34.28 0 0 1-9.49 7.07z"
				fill="#efb7b9"
			/>
			<path
				d="M330.82 223.85s-15.75 11.3-31.84 1.95-37.13 82.61-37.13 82.61l-21.82 53.77s-14.13 11.69 3.46 16.76 56.61-5.07 66.52 9.74 28.67 17.14 30.59 17.14 9.34-55.73 9.34-55.73l1.93-80.66z"
				opacity={0.1}
			/>
			<path
				d="M244.23 375.82c17.59 5.06 56.62-5.07 66.53 9.74a38.06 38.06 0 0 0 16.79 13.53 44 44 0 0 0 13.83 3.66c.25 0 .62-1 1.05-2.79 2.74-11.28 8.29-52.94 8.29-52.94l1.92-80.66-18.51-40.15-2.53-5.48a33.39 33.39 0 0 1-8 3.91c-6.09 2.06-14.9 3.22-23.82-2-4.72-2.74-9.87 3.24-14.78 13.06-11.84 23.64-22.35 69.55-22.35 69.55l-21.84 53.84a18.52 18.52 0 0 0-1.48 1.42c-3.1 3.24-8.91 11.33 4.9 15.31z"
				fill="#f3f5f9"
			/>
			<path
				d="M328.07 378.53a102.22 102.22 0 0 0-.52 20.52 240.33 240.33 0 0 0 3.66 29 11.43 11.43 0 0 0 .48 1.77c9.51-4.17 17.06-7.22 17.06-7.22l-6.32-22.66c2.74-11.28 8.29-52.94 8.29-52.94l1.92-80.66-18.51-40.13c12.07-3.16 20.17-6.57 15-9.37-7.5-4.07-11.11-11.79-12.85-17.92a65.05 65.05 0 0 1-11.05 11.92l-.24.2-1.4 13.6-.43 4.18-.9 8.67s4.29 102.48 7.4 108.33 1.56 17.14-1.16 30.39c-.17.75-.27 1.52-.43 2.32z"
				opacity={0.1}
			/>
			<path
				d="M330.04 374.65c-2.72 13.25-.39 35.07 2.73 51.82s36.24 5.85 42.48 0 24.54-8.57 24.54-8.57.78-76.37 6.63-86.11c2.77-4.62 3.44-19.7 3.37-34.27-.05-13.08-.7-25.75-.94-30-.06-1-.09-1.55-.09-1.55s25.32-42.86 24.93-46-7.79-3.5-7.79-3.5-28-21.82-32.73-19.1-17.54-4.28-17.54-4.28-16.29 1.85-19.66-1.3a1.72 1.72 0 0 1-.6-1.43c.38-5-16.6-15.64-17.13-16 14.32 12.88-8.83 32.73-11.46 34.91l-.24.2-2.73 26.45s4.29 102.48 7.4 108.33 1.56 17.15-1.17 30.4z"
				fill="#67647e"
			/>
			<circle cx={331.55} cy={263.33} r={1.95} fill="#444053" />
			<path
				d="M327.56 210.84l11.84 11.45 17.35-29a1.72 1.72 0 0 1-.6-1.43c.38-5-16.61-15.64-17.13-16 14.32 12.95-8.79 32.8-11.46 34.98z"
				opacity={0.1}
			/>
			<circle cx={335.45} cy={325.67} r={1.95} opacity={0.1} />
			<circle cx={335.45} cy={324.89} r={1.95} fill="#444053" />
			<path
				d="M326.78 209.28l11.84 11.45 17.35-29a1.72 1.72 0 0 1-.6-1.43c.38-5-16.6-15.64-17.13-16 14.32 12.95-8.83 32.79-11.46 34.98z"
				fill="#67647e"
			/>
			<rect
				x={416.9}
				y={297.32}
				width={27.12}
				height={57.3}
				rx={1.7}
				ry={1.7}
				transform="rotate(-178.69 379.382 308.579)"
				fill="#d1d9ec"
			/>
			<rect
				x={417.05}
				y={298.58}
				width={27.12}
				height={57.3}
				rx={1.7}
				ry={1.7}
				transform="rotate(-178.69 379.526 309.842)"
				fill="#dfe6f5"
			/>
			<circle cx={329.56} cy={279.43} r={4.26} fill="#fff" />
			<path
				d="M182.75 371.14c9.74 4.29 73.65-7 83-9.74s23-23.77 16.37-39 2.33-30 2.33-30 14-30 17.15-35.85 9.62-22.86 10.52-25.71a2.34 2.34 0 0 0-.55-1.79c-2.54-3.83-12.34-10.65-12.34-10.65-2.75 1-3.09-6.89-3-12.68.06-3.24.25-5.82.25-5.82s-1.29 1.31-3.4 3.1c-.77.65-1.65 1.37-2.63 2.11a40.43 40.43 0 0 1-12.22 6.71c-9.35 2.77-22.6 15.54-22.6 15.54l3.9 59.84s-9 56.28-18.32 67.19-37.41 10.52-46.76 10.52-11.7 6.23-11.7 6.23z"
				opacity={0.1}
			/>
			<path
				d="M181.97 368.81c9.74 4.28 73.65-7 83-9.75s23-23.77 16.37-39 2.33-30 2.33-30 14-30 17.15-35.85 9.62-22.86 10.52-25.71a2.35 2.35 0 0 0-.55-1.79c-2.56-3.82-12.31-10.62-12.31-10.62-2.75 1-3.09-6.88-3-12.67.06-3.25.25-5.83.25-5.83s-1.29 1.31-3.4 3.11c-.77.64-1.65 1.36-2.63 2.1a40.43 40.43 0 0 1-12.28 6.71c-9.35 2.77-22.6 15.54-22.6 15.54l3.9 59.84s-9 56.28-18.32 67.19-37.4 10.52-46.76 10.52-11.67 6.21-11.67 6.21z"
				fill="#67647e"
			/>
			<path
				d="M287.96 199.09s.37 2.05 1 5.21c2.1 10.7 7.1 34.06 10.71 33.16 2.59-.65 7-5.23 10.36-9.19-2.53-3.86-12.31-10.68-12.31-10.68-2.75 1-3.09-6.88-3-12.67l-3.15-2.72z"
				opacity={0.1}
			/>
			<path
				d="M288.74 197.56s.37 2.05 1 5.21c2.1 10.7 7.1 34.06 10.71 33.16 2.59-.65 7-5.23 10.36-9.19-2.58-3.85-12.33-10.65-12.33-10.65-2.75 1-3.09-6.88-3-12.67l-3.15-2.72z"
				fill="#67647e"
			/>
			<path
				d="M263.8 312.3s19.49-3.89 24.94-12.46 42.57-16 38-7-38 38.29-38 38.29l-14.51 20.77-19.38-4.92-8.17-15.89z"
				fill="#efb7b9"
			/>
			<path
				d="M309.9 334.54s-18.87 7-21.71 16.36 21.71-16.36 21.71-16.36zM321.47 345.43s1.72 9.73-21.93 9zM423.56 220.73l8.58-.78s9.35 7 16.36 7 11.3 9 11.3 9 11.69 5.46 15.59 6.24 10.52 4.67 8.57 6.23.39 5.07 3.9 7.79 9 16.76 4.28 18.71-17.53 5.84-21 7.79-7.79 0-7.79 0-20.64-26.89-31.17-21.82-24.95 5.04-24.95 5.04l-11.3-23.76z"
				opacity={0.1}
			/>
			<path
				d="M244.23 348.95c1.84 2.74 4.22 4.66 7.27 5.05a55 55 0 0 0 22.69-2.1s-39.25-12.47-1.46-42.79h-10.1l-3.4-1.28 1.54-8.07 2.22-72.79-8.18-1.95s-6.59 47.93-8.16 53.77-2.75 28.45-2.75 28.45-1.56 9.35-3.9 14c-1.77 3.54-1.28 19.39 4.23 27.71z"
				fill="#67647e"
			/>
			<path
				d="M245.82 348.95c1.83 2.74 4.22 4.66 7.27 5.05a55 55 0 0 0 22.69-2.1s-39.25-12.47-1.46-42.81h-10.09l-3.37-1.28c-5.63 9.85-14.33 27.34-15.04 41.14z"
				opacity={0.1}
			/>
			<path
				d="M244.23 348.95c1.84 2.74 4.22 4.66 7.27 5.05a55 55 0 0 0 22.69-2.1s-39.25-12.47-1.46-42.79h-10.1l-3.4-1.28c-5.52 9.83-14.26 27.32-15 41.12z"
				fill="none"
			/>
			<path
				d="M244.23 348.95c1.84 2.74 4.22 4.66 7.27 5.05a55 55 0 0 0 22.69-2.1s-39.25-12.47-1.46-42.79h-10.1l-3.4-1.28c-5.52 9.83-14.26 27.32-15 41.12z"
				fill="#67647e"
			/>
			<path
				d="M296.67 208.21a35.47 35.47 0 0 0 40.13-7.62c-.18-.57-.35-1.12-.51-1.67a43.31 43.31 0 0 1-1.57-9s-44-15.59-35.46 0c4.21 7.68 1.38 13.92-2.59 18.29z"
				opacity={0.1}
			/>
			<path
				d="M275.88 174.36v.35c0 1.15.08 2.29.2 3.41s.28 2.14.48 3.19a35.47 35.47 0 0 0 68.32 4.58c.24-.69.45-1.38.64-2.08a35.06 35.06 0 0 0 1.28-9.45c0-.81 0-1.63-.09-2.43a35.46 35.46 0 0 0-70.83 2.43z"
				fill="#efb7b9"
			/>
			<path
				d="M275.88 174.71a15.27 15.27 0 0 1 .2 3.41 12.67 12.67 0 0 0 .1 1.85 5.25 5.25 0 0 0 .38 1.34c1.43 3.36 6.11 5.54 9.2 3.37a9.86 9.86 0 0 0 2.76-3.62c3.28-6.09 7.83-13.09 15-13.21 3.06-.06 5.93 1.23 8.89 2s6.46.84 8.66-1.17c1.7-1.55 2.5-4.19 4.77-4.73s4.37 1.54 5.41 3.58 1.87 4.44 4 5.5c.94.46 2 .6 3 1.1 4.24 2.32 2.29 10.45 6.69 11.77a3.2 3.2 0 0 0 .42.1c.07-.72.15-1.46.22-2.18q.6-5.94 1.19-11.88a35.46 35.46 0 0 0-70.83 2.43z"
				opacity={0.1}
			/>
			<path
				d="M338.87 121.43c4.17 1.77 8.51 4.49 9.44 8.74.41 1.87.1 3.81.2 5.71.2 3.84 2 7.4 3.19 11.08s1.59 8-.75 11.1c-.73 1-1.7 1.79-2.36 2.81a11.5 11.5 0 0 0-1.36 5.22l-1.93 19.18c-4.94-.93-2.74-9.5-7.12-11.88-.91-.5-2-.64-2.95-1.11-2.11-1-2.93-3.45-4-5.49s-3.1-4.13-5.41-3.58-3.07 3.19-4.76 4.73c-2.21 2-5.72 1.92-8.67 1.17s-5.83-2-8.88-2c-7.18.12-11.74 7.12-15 13.21a9.89 9.89 0 0 1-2.77 3.63c-3.48 2.44-9-.64-9.57-4.72-.34-2.29.38-4.84-.94-6.78s-4.18-2.35-6.41-3.39c-5.7-2.62-7.46-9.73-6.52-15.69.69-4.3 2.4-8.72 1-12.86-.49-1.43-1.32-2.73-1.77-4.16-1.25-4 .79-8.44 4-11.29s7.42-4.42 11.56-5.8c10.63-3.57 21.79-7 33.1-7.74 4.95-.32 11.44-1.87 15.37 1.22 4.67 3.58 7.55 6.25 13.31 8.69z"
				fill="#585268"
			/>
			<circle cx={329.6} cy={232.54} r={1.95} opacity={0.1} />
			<circle cx={329.6} cy={231.76} r={1.95} fill="#444053" />
			<circle cx={342.07} cy={354.9} r={1.95} opacity={0.1} />
			<circle cx={342.07} cy={354.12} r={1.95} fill="#444053" />
			<circle cx={335.45} cy={387.24} r={1.95} opacity={0.1} />
			<circle cx={335.45} cy={386.46} r={1.95} fill="#444053" />
			<path
				d="M268.48 263.33s-4.29 29.1 0 34.17 0-34.17 0-34.17zM395.9 317.37s8.18 17.63 0 34.53-13.25 23.77-10.52 34.56 10.52-69.09 10.52-69.09zM8.96 640.79c12.08 8.18 30.4 4.28 30.4 4.28s27.66-13.24 35.85-13.24 28.02-8.19 28.02-8.19l-.67-5.51c-8.07 1.55-26.43 5.26-28.55 7.07-2.73 2.34-36.24 13.64-36.24 13.64s-22.82-2.85-29.17-12.23c-4.17 4.34-5.96 9.9.36 14.18z"
				opacity={0.1}
			/>
			<g opacity={0.1}>
				<path d="M348.51 132.76v-1.27 1.46c.02-.06 0-.12 0-.19zM268.83 165.91c2.23 1 5 1.4 6.41 3.38s.6 4.49.94 6.78c.59 4.08 6.09 7.17 9.57 4.72a9.89 9.89 0 0 0 2.77-3.63c3.27-6.09 7.83-13.09 15-13.21 3.06-.05 5.93 1.24 8.89 2s6.46.84 8.67-1.17c1.69-1.54 2.49-4.19 4.76-4.73s4.36 1.54 5.41 3.58 1.87 4.44 4 5.5c.94.46 2 .6 2.95 1.1 4.38 2.39 2.18 11 7.12 11.88q1-9.6 1.93-19.18a11.46 11.46 0 0 1 1.36-5.16c.66-1 1.63-1.84 2.36-2.82a8.59 8.59 0 0 0 1.6-4.12 10 10 0 0 1-1.6 7.24c-.73 1-1.7 1.79-2.36 2.81a11.5 11.5 0 0 0-1.38 5.21q-1 9.59-1.93 19.18c-4.94-.93-2.74-9.5-7.12-11.88-.91-.5-2-.64-2.95-1.11-2.11-1-2.93-3.45-4-5.49s-3.1-4.13-5.41-3.58-3.07 3.19-4.76 4.73c-2.21 2-5.72 1.92-8.67 1.17s-5.83-2-8.89-2c-7.17.12-11.73 7.12-15 13.21a9.89 9.89 0 0 1-2.77 3.63c-3.48 2.44-9-.64-9.57-4.72-.34-2.29.38-4.84-.94-6.78s-4.18-2.35-6.41-3.39c-5.21-2.4-7.13-8.55-6.69-14.14.4 4.57 2.46 9.03 6.71 10.99zM261.54 133.19c.45 1.43 1.28 2.74 1.77 4.16a12 12 0 0 1 .44 5.13 10 10 0 0 0-.44-2c-.49-1.43-1.32-2.73-1.77-4.16a8.78 8.78 0 0 1-.23-4.07 8.2 8.2 0 0 0 .23.94z" />
			</g>
			<path
				d="M481.37 454.14l-80.32-10.05a3.07 3.07 0 0 1-1.83-5.18l33.69-35a3.06 3.06 0 0 1 2.56-.92l61.41 6.88a3.07 3.07 0 0 1 2.52 4.16l-14.78 38.19a3.08 3.08 0 0 1-3.25 1.92z"
				fill="#746d83"
			/>
			<path
				d="M481.37 454.14l-80.32-10.05a3.07 3.07 0 0 1-1.83-5.18l33.69-35a3.06 3.06 0 0 1 2.56-.92l61.41 6.88a3.07 3.07 0 0 1 2.52 4.16l-14.78 38.19a3.08 3.08 0 0 1-3.25 1.92z"
				opacity={0.1}
			/>
			<path
				d="M480.46 453.24l-80.31-10.09a3.08 3.08 0 0 1-1.83-5.19l33.69-35a3.1 3.1 0 0 1 2.56-.93l61.4 6.88a3.08 3.08 0 0 1 2.53 4.17l-14.79 38.19a3.09 3.09 0 0 1-3.25 1.97z"
				fill="#746d83"
			/>
			<path
				d="M432.6 416.67l24.12 1.94 34.4-2.24h-.59l-31.87-3.08c-7.3-2.68-2.24-18.46-2.24-18.46l-24.41 1.24-1.95.1c-8.63 20.2 2.54 20.5 2.54 20.5z"
				fill="#d1d9ec"
			/>
			<path
				d="M432.6 416.67l24.12 1.94 34.4-2.24h-.59l-34.78 1.24-23.3-2.53c-6.62-1.74-2.83-13.22-.44-19l-1.95.1c-8.63 20.19 2.54 20.49 2.54 20.49z"
				opacity={0.1}
			/>
			<path
				d="M390.35 273.24l7.38 105.85 1 13.89a6 6 0 0 0 6.06 5.61h2.24l111.1-.67a3.13 3.13 0 0 0 3.08-3.43l-1-13.9-7.82-93.08a6.39 6.39 0 0 0-4.27-5.4l-105.89-15.88c-3.6-1.25-7.27-.81-9.56 1.1a6.72 6.72 0 0 0-2.32 5.91z"
				fill="#4c4c56"
			/>
			<path
				d="M397.73 379.09l1 13.89a6 6 0 0 0 6.06 5.61h2.24l111.1-.67a3.13 3.13 0 0 0 3.08-3.43l-1-13.9z"
				fill="#dfe6f5"
			/>
			<ellipse cx={472.21} cy={390.61} rx={1.49} ry={2.98} fill="#fff" />
			<path
				d="M467.89 430.22s-30.38-11.47-38.57-3.13c0 0-1.34 2.54 4.17 3.13l22.26 1.79s9.16.89 12.14-1.79z"
				fill="#d1d9ec"
			/>
			<path
				d="M467.08 427.24c-6-2.44-23.93-8.75-35.43-1.77 0 0 12.72-1.41 19.71 2.63s16.53 2.12 16.53 2.12l.14-.25a1.93 1.93 0 0 0-.95-2.73zM390.35 273.24L398.69 393a6 6 0 0 0 6.06 5.61h2.24a21.34 21.34 0 0 1-3.88-5s-8.19-120.34-8.79-123.32a6.1 6.1 0 0 0-1.65-2.94 6.72 6.72 0 0 0-2.32 5.89z"
				fill="#dfe6f5"
			/>
			<path
				d="M390.35 273.24L398.69 393a6 6 0 0 0 6.06 5.61h2.24a21.34 21.34 0 0 1-3.88-5s-8.19-120.34-8.79-123.32a6.1 6.1 0 0 0-1.65-2.94 6.72 6.72 0 0 0-2.32 5.89z"
				opacity={0.1}
			/>
			<path
				d="M376.02 306.44c9-2 30-8.16 30-8.16l3.76-.76c-.05-13.08-.7-25.75-.94-30h-.09s-17.93 5.85-22.21 9-17.54 2.33-17.54 2.33-20.64 1.11-37.77 20.24 35.83 9.32 44.79 7.35z"
				opacity={0.1}
			/>
			<path
				d="M463.61 271.67a5.21 5.21 0 0 1 1.17 8.74c-4.75 3.93-11.68 8.63-18.3 9.29-11 1.11-37.6 6.44-40.24 7a3.2 3.2 0 0 0-.42.1c-2.19.64-21.35 6.25-29.8 8.1-9 2-62 11.71-44.81-7.38 15.78-17.58 34.53-20 37.42-20.23a4 4 0 0 1 .69 0c2 .09 13.32.48 17.23-2.35a36.81 36.81 0 0 1 6.44-3.21 123.2 123.2 0 0 1 26.35-7.6l18.33-3.2a5.26 5.26 0 0 1 3.08.4z"
				fill="#efb7b9"
			/>
			<path
				d="M425.12 220.73l8.57-.78s9.36 7 16.37 7 11.3 9 11.3 9 11.69 5.46 15.59 6.24 10.52 4.67 8.57 6.23.39 5.07 3.9 7.79 9 16.76 4.28 18.71-17.53 5.84-21 7.79-7.79 0-7.79 0-20.68-26.91-31.21-21.84-24.94 5.06-24.94 5.06l-11.3-23.76z"
				fill="#67647e"
			/>
			<path
				d="M938.23 710.73a16.86 16.86 0 0 0-2.27 4.29c-.15.37-.28.8-.42 1.21a4.65 4.65 0 0 0-.79-.28 11 11 0 0 0-3.57-.3c0-.47 0-.95.07-1.47.14-5.27-.48-12.61-5.5-9.5-4.83 3-1.39 8 1.72 11.2l.8.79c-2.83 2-3.37 6.73-3.85 11.64s-4.64 10.28-7.4 13.33c-.28.32-.54.59-.78.85a10.15 10.15 0 0 0-8-2.07l-.37-1.35c-2.24-8.09-6.89-22.1-12.82-25.17.25-.31.51-.63.78-1 2.52-3.29 5.35-8.19 1.16-9.44s-4.56 4.25-4.33 8.36q0 .78.12 1.47a6.15 6.15 0 0 0-4.39 2.14l-.64-.77c-3.4-4-9.64-10.37-11.52-5.56-1.76 4.48 3.73 10.3 7.59 13.67l.24.21c-2.6 10.51 8.72 19.08 14.81 22.83l.78.48c-8.4 9.9-13.58 28.46-13.58 28.46l23.52 4.2s15.59-13.46 13.6-26.1h.16c15.58-3.12 19.13-19.74 16.7-29.6l.28-.12a17.69 17.69 0 0 0 7.21-5.46c4.31-6.05-4.84-12.89-9.31-6.94z"
				fill={primaryColor}
			/>
			<path
				d="M938.23 710.73a16.86 16.86 0 0 0-2.27 4.29c-.15.37-.28.8-.42 1.21a4.65 4.65 0 0 0-.79-.28 11 11 0 0 0-3.57-.3c0-.47 0-.95.07-1.47.14-5.27-.48-12.61-5.5-9.5-4.83 3-1.39 8 1.72 11.2l.8.79c-2.83 2-3.37 6.73-3.85 11.64s-4.64 10.28-7.4 13.33c-.28.32-.54.59-.78.85a10.15 10.15 0 0 0-8-2.07l-.37-1.35c-2.24-8.09-6.89-22.1-12.82-25.17.25-.31.51-.63.78-1 2.52-3.29 5.35-8.19 1.16-9.44s-4.56 4.25-4.33 8.36q0 .78.12 1.47a6.15 6.15 0 0 0-4.39 2.14l-.64-.77c-3.4-4-9.64-10.37-11.52-5.56-1.76 4.48 3.73 10.3 7.59 13.67l.24.21c-2.6 10.51 8.72 19.08 14.81 22.83l.78.48c-8.4 9.9-13.58 28.46-13.58 28.46l23.52 4.2s15.59-13.46 13.6-26.1h.16c15.58-3.12 19.13-19.74 16.7-29.6l.28-.12a17.69 17.69 0 0 0 7.21-5.46c4.31-6.05-4.84-12.89-9.31-6.94z"
				opacity={0.1}
			/>
			<path
				d="M891.4 717.51l-2.75 8.05s-1.52-1.08-3.45-2.78c-3.86-3.37-9.35-9.19-7.59-13.67 1.88-4.81 8.12 1.54 11.52 5.56 1.37 1.6 2.27 2.84 2.27 2.84zM897.23 712.91a38.1 38.1 0 0 1-2.7 3.18 39 39 0 0 1-.49-4.24c-.23-4.11.2-9.59 4.33-8.36s1.36 6.13-1.14 9.42zM932.68 714.18c-.09 2.65-.35 4.77-.35 4.77a34.68 34.68 0 0 1-3.43-3.07c-3.11-3.22-6.55-8.21-1.72-11.2 5.05-3.11 5.64 4.23 5.5 9.5zM948.92 717.65a17.69 17.69 0 0 1-7.21 5.46 19.38 19.38 0 0 1-2.42.88l-3.24-4.55a32.17 32.17 0 0 1 1.34-4.42 16.86 16.86 0 0 1 2.27-4.29c4.48-5.95 13.63.89 9.26 6.92z"
				fill={primaryColor}
			/>
			<path
				d="M889.13 714.67c1.37 1.6 2.27 2.84 2.27 2.84l-2.75 8.05s-1.52-1.08-3.45-2.78a15.68 15.68 0 0 1 3.09-7.07c.28-.38.57-.72.84-1.04zM897.23 712.91a38.1 38.1 0 0 1-2.7 3.18 39 39 0 0 1-.49-4.24 5.55 5.55 0 0 1 3.19 1.06z"
				opacity={0.1}
			/>
			<path
				d="M910.73 744.87l-6.84 3a41.38 41.38 0 0 1-3.64-2.06c-7.19-4.42-21.65-15.55-12-28.67s17.77 10.41 21 21.92c.98 3.45 1.48 5.81 1.48 5.81z"
				fill={primaryColor}
			/>
			<path
				d="M928.9 715.88a5.67 5.67 0 0 1 3.78-1.7c-.09 2.65-.35 4.77-.35 4.77a34.68 34.68 0 0 1-3.43-3.07zM941.71 723.09a19.38 19.38 0 0 1-2.42.88l-3.24-4.55a32.17 32.17 0 0 1 1.34-4.42c2.09 1.24 3.63 4.28 4.32 8.09z"
				opacity={0.1}
			/>
			<path
				d="M924.73 752.83c-.38.08-.76.15-1.15.21-22.93 3.48-7.56-8.89-7.56-8.89s1-.95 2.43-2.51c2.76-3 6.93-8.39 7.4-13.33.72-7.43 1.56-14.4 10.33-12.36 8.61 2.02 10.25 32.54-11.45 36.88z"
				fill={primaryColor}
			/>
			<path fill="#d4dfec" d="M880.49 809.92h43.81v11.52h-43.81z" />
			<path fill="#d4dfec" d="M873.53 772.48h57.24v40.2h-57.24z" />
			<path opacity={0.1} d="M880.49 809.92h43.81v11.52h-43.81z" />
			<path opacity={0.1} d="M873.53 772.48h57.24v40.2h-57.24z" />
			<path fill="#d4dfec" d="M883.37 809.92h43.81v11.52h-43.81z" />
			<path
				d="M909.23 739.09c1 3.44 1.48 5.8 1.48 5.8l-6.84 3a41.38 41.38 0 0 1-3.64-2.06c2.7-3.41 5.72-5.97 9-6.74zM924.73 752.83c-.38.08-.76.15-1.15.21-22.93 3.48-7.56-8.89-7.56-8.89s1-.95 2.43-2.51c4.28 3.45 6.05 7.29 6.28 11.19z"
				opacity={0.1}
			/>
			<path d="M887.45 774.76s12.84-46 30.84-31.8-7.32 36-7.32 36z" fill={primaryColor} />
			<circle cx={893.93} cy={724.35} r={1.44} opacity={0.1} />
			<circle cx={893.81} cy={731.07} r={1.44} opacity={0.1} />
			<circle cx={935.57} cy={725.67} r={1.44} opacity={0.1} />
			<circle cx={901.97} cy={760.12} r={1.44} opacity={0.1} />
			<circle cx={932.57} cy={736.83} r={1.44} opacity={0.1} />
			<circle cx={917.69} cy={751.72} r={1.44} opacity={0.1} />
			<circle cx={898.85} cy={727.23} r={1.44} opacity={0.1} />
			<circle cx={931.61} cy={729.99} r={1.44} opacity={0.1} />
			<circle cx={926.69} cy={741.15} r={1.44} opacity={0.1} />
			<circle cx={911.57} cy={759.04} r={1.44} opacity={0.1} />
			<circle cx={908.45} cy={751.96} r={1.44} opacity={0.1} />
			<circle cx={901.01} cy={735.99} r={1.44} opacity={0.1} />
			<path opacity={0.1} d="M883.37 809.92h43.81v4.21h-43.81z" />
			<path fill="#d4dfec" d="M876.41 772.48h57.24v40.2h-57.24z" />
			<circle cx={913.49} cy={765.52} r={1.44} opacity={0.1} />
			<circle cx={904.85} cy={767.32} r={1.44} opacity={0.1} />
		</svg>
	);
};

UndrawOnTheOffice.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawOnTheOffice;
