import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawVehicleSale = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1114 593.54" style={style} {...props}>
			<ellipse cx={557} cy={419.77} rx={557} ry={173.78} fill={primaryColor} opacity={0.1} />
			<g opacity={0.8}>
				<path
					d="M404.79 35.38c9.44 13.24 16.69 51.81 18.71 63.43l16.88-.35c-.88-10-20.51-50.59-26-61.73-3.01-.48-6.25-.96-9.59-1.35z"
					fill="#65617d"
				/>
				<path fill="#dce0ed" d="M193.927 37.295l.198-10.529 7.479.141-.199 10.529z" />
				<path d="M194.13 26.77l-.06 3.42a5.48 5.48 0 0 0 1.62.25l5.85.06.07-3.59z" opacity={0.1} />
				<path
					d="M205.27.13L198.21 0a8.49 8.49 0 0 0-8 5.14c-2.16 5-4.06 13.11.38 21.27a5.86 5.86 0 0 0 5.07 3l9 .09z"
					fill="#dce0ed"
				/>
				<ellipse
					cx={247.99}
					cy={168.07}
					rx={14.71}
					ry={7.56}
					transform="rotate(-88.92 148.41 113.363)"
					fill="#f0f0f4"
				/>
				<path fill="#dce0ed" d="M260.36 37.36l.175-9.218 7.478.14-.174 9.22z" />
				<path d="M260.54 28.14l-.05 2.93a5.48 5.48 0 0 0 1.62.25l5.85.07.06-3.1z" opacity={0.1} />
				<path
					d="M271.68 1.51l-7.06-.13a8.47 8.47 0 0 0-7.94 5.14c-2.17 5.05-4.07 13.11.38 21.26a5.83 5.83 0 0 0 5.06 3.05l9 .09z"
					fill="#dce0ed"
				/>
				<ellipse
					cx={314.41}
					cy={169.45}
					rx={14.71}
					ry={7.56}
					transform="rotate(-88.92 214.825 114.746)"
					fill="#f0f0f4"
				/>
				<path
					d="M269.7 6.85s2.78.5 1.26 4.15a25.59 25.59 0 0 0-1.78 5.55s-2.82 1.4-2.62-3.4 3.14-6.3 3.14-6.3z"
					fill="#dce0ed"
				/>
				<ellipse
					cx={592.06}
					cy={375.54}
					rx={48.36}
					ry={44.12}
					transform="rotate(-88.92 492.465 320.84)"
					fill="#636780"
				/>
				<path
					d="M533.38 176.67c23.06 2 41 23.34 40.46 49-.39 20.71-12.6 38.15-29.43 44.72-23.06-2-40.94-23.34-40.46-49 .39-20.71 12.61-38.15 29.43-44.72z"
					opacity={0.1}
				/>
				<ellipse
					cx={248.81}
					cy={263.36}
					rx={46.69}
					ry={35.81}
					transform="rotate(-88.92 149.227 208.652)"
					fill="#636780"
				/>
				<path
					d="M216.66 65.59c14.74 6 25.25 24.07 24.85 45.28-.43 22.66-13.17 41.31-29.67 45.24-14.74-6-25.25-24.07-24.84-45.28.42-22.66 13.16-41.31 29.66-45.24z"
					opacity={0.1}
				/>
				<path
					d="M340.49 102.7l-.34-17s3.46-7.25 6.79-7.85 11-.87 11-.87 5.52 24.45 1.39 31.69-18.84-5.97-18.84-5.97z"
					fill="#65617d"
				/>
				<path
					d="M340.49 102.7l-.34-17s3.46-7.25 6.79-7.85 11-.87 11-.87 5.52 24.45 1.39 31.69-18.84-5.97-18.84-5.97z"
					opacity={0.1}
				/>
				<path
					d="M401.83 102.03s2.5-23.46-10.4-24.13c-1.66-.08-3.32-.15-5-.35-8.93-1-33.3-3.38-30.49 2.26 0 0 5.43 20.54 1.35 25.62zM218 142.14l-17.33.17s-2.38-32-3.33-34.46-1.23-14.48 2-16.17 14.15-3.59 14.15-3.59l7.63 18.34.31 16.46z"
					fill="#65617d"
				/>
				<path
					d="M218 142.14l-17.33.17s-2.38-32-3.33-34.46-1.23-14.48 2-16.17 14.15-3.59 14.15-3.59l7.63 18.34.31 16.46z"
					opacity={0.1}
				/>
				<path
					d="M260.87 89.98l.15-3.55a2.07 2.07 0 0 0-2.1-2.14c-8.59.2-39.86 1.11-45.38 3.8 0 0 5.14 44.59-1.66 55.06l1.57 35.68 76.61-4.29z"
					fill="#65617d"
				/>
				<path
					d="M267.91 33.91c-2.12-.25-4.64-.52-7.46-.8l-.08 4.25 7.48.15zM193.94 36.77v.54l7.48.14.06-3.24a32 32 0 0 0-7.54 2.56z"
					opacity={0.1}
				/>
				<path
					fill="#dce0ed"
					d="M154.43 142.06l11.3.38 24.15-41.98 4.03-7.01-2.65-18-2.38 4.3-34.45 62.31zM257.6 91.83l4.52 7.06 14.26-18.54 6.52-8.49-3.72-5.22-2.99 3.49-18.59 21.7z"
				/>
				<path
					d="M276.18 70.13c0 .36-.05.73-.08 1.1l.28 9.12 6.52-8.49-3.72-5.22zM188.88 79.75l1 20.71 4.03-7.01-2.65-18-2.38 4.3z"
					opacity={0.1}
				/>
				<path
					d="M289.16 83.61s6.37-41.56-13.82-48.18a4.38 4.38 0 0 0-.8-.17c-4.66-.66-48.13-6.5-70.87-1 0 0-15.49 2-15.49 10.34l4.9 101.64 11.13.21-2.39-67.19s-4.76-29.34 4.08-31.16 49-4.4 63-.14c0 0 10.35-2.13 8.21 23.25l.4 13.64z"
					fill="#dce0ed"
				/>
				<path
					d="M255 95.35a6.41 6.41 0 0 1 2.72-5.68c3.16-2.31 12.85-7.24 12.85-7.24l3.11.31 8.91 23.35-1.55 49.21-17.18 20.47z"
					fill="#65617d"
				/>
				<path
					d="M255 95.35a6.41 6.41 0 0 1 2.72-5.68c3.16-2.31 12.85-7.24 12.85-7.24l3.11.31 8.91 23.35-1.55 49.21-17.18 20.47z"
					opacity={0.1}
				/>
				<path
					d="M321.18 148.21l.62-50.52s1.87-19.57-9.84-20.13c0 0-27.63-.32-39.7 3.35a2.68 2.68 0 0 0-1.58 3.85c2.31 4.2 6.13 15.28 7.54 43.56l-.57 30.28z"
					fill="#65617d"
				/>
				<path
					fill="#65617d"
					d="M262.3 179.38l50.28-.22h.05l24.72-.11-2.25-33.07-13.71.24-43.8 8.89-13.73 20.68-1.56 3.59z"
				/>
				<path
					opacity={0.1}
					d="M262.3 179.38l50.28-.22h.05l24.72-.11-2.25-33.07-13.71.24-43.8 8.89-13.73 20.68-1.56 3.59z"
				/>
				<path fill="#65617d" d="M262.3 179.38l50.28-.22 1.25-22.12-36.24-1.93-13.73 20.68-1.56 3.59z" />
				<path d="M312.63 179.16l24.72-.11-2.25-33.07s-8 12.19-21.27 11.06z" fill="#fff" opacity={0.1} />
				<path
					d="M134.84 202.52c.82 9.49 7.58 8.12 7.58 8.12l1.26-.09 12.47-.89-.22-14.72a54.22 54.22 0 0 0-12.65.52c-4.68.88-8.8 2.85-8.44 7.06z"
					fill="#dce0ed"
				/>
				<path
					d="M134.84 202.52c.82 9.49 7.58 8.12 7.58 8.12l1.26-.09a12.81 12.81 0 0 0 2.12-7.07 12 12 0 0 0-2.52-8c-4.68.86-8.8 2.83-8.44 7.04z"
					opacity={0.1}
				/>
				<path
					d="M308.62 109.49c-.29 15.37 8.7 28 20.07 28.22s20.84-12.07 21.13-27.44-8.7-28-20.07-28.22-20.84 12.07-21.13 27.44zm7.77 2c.21-11.15 7.41-20.06 16.08-19.89s15.53 9.33 15.32 20.48-7.41 20-16.08 19.89-15.53-9.35-15.32-20.5z"
					fill="#636780"
				/>
				<path fill="#636780" d="M328.06 118.42l-9.81 9.29-3.33-8.54 14.11-7.88-.97 7.13z" />
				<path
					fill={primaryColor}
					d="M315.63 24.42l-8.41.87-3.18 3.64 4.31 21.32 9.38 34.4 6.14 23.61 4.36 14.35 2.59 18.92 2.7 13.04 8.68 9.01 18.39-20.89 3.09-7.03 7.35-14.31-18.13-8.9-20.02-2.15-8.98-24.36-7.13-28.16-1.14-33.36z"
				/>
				<path
					fill="#65617d"
					d="M483.43 128.83l9.22 92.25-137.95-8.42 16.8-44.89 26.91-16.78-60.82-.15.14-25.26 24.69-4.85 49.59-3.05 37.24-.96 35.34 12.3"
				/>
				<path
					opacity={0.1}
					d="M483.43 128.83l9.22 92.25-137.95-8.42 16.8-44.89 26.91-16.78-60.82-.15.14-25.26 24.69-4.85 49.59-3.05 37.24-.96 35.34 12.3"
				/>
				<path
					d="M293.07 217c-.43 22.87 6.78 43.84 27.91 42 26.6-.07 29-18 29.46-40.88s-12.08-40.13-27.93-40.43-29 16.44-29.44 39.31z"
					fill="#636780"
				/>
				<path
					d="M292.91 217.04c.33-17.71 8.3-31.77 19.23-37.07 13.86 2.91 24.24 19.1 23.85 40-.35 18.74-2.05 34.17-17.3 39.16-19.49.3-26.2-20-25.78-42.09z"
					opacity={0.1}
				/>
				<path
					fill={primaryColor}
					d="M266.65 180.59l7.94 9.44-14.55-2.78-10.72-10.23-9.37-19.65-13.55-8.66-33.71 3.93-31.13.6-11.3-10.42 12.85-1.5 12.98-.05 32.6-.12 38.8-.3 7.56 21.38 5.77 14.71 5.83 3.65z"
				/>
				<path
					d="M154.36 216.35c.65 1 22.35 4.75 22.35 4.75l59.93 12.1L340 236.65l12.32-10.08 6.35 1.26.26.05 84.79 16.71 1.39-.17 23.25-2.87 121.46-15-1-17.61-.6-10.39-1.26-21.58-1.06-5.67-10.76-1.19-5-.56-78.48-8.7-10.36-1.08-5.75-.64-56-8.7-81.94.44.14-25.26-30.53-100.32c-7.17 1-7.09 5.85-7.09 5.85l25.8 94.38-.75 57.66c-57.47 4.71-59.08-7.82-68.24-3.78l-10.3-35.26-96.37-1.32c-3.91 4.58 4.09 73.53 4.09 73.53z"
					fill="#65617d"
				/>
				<path fill="#65617d" d="M394.43 168.54l-31.81 65.05-10.37 3.12-2.29-10.68 12.15-36.17 12.2-20.87 20.12-.45z" />
				<path opacity={0.15} d="M394.43 168.54l-31.81 65.05-10.37 3.12-2.29-10.68 12.15-36.17 12.2-20.87 20.12-.45z" />
				<ellipse
					cx={455.96}
					cy={394.41}
					rx={62.81}
					ry={55.37}
					transform="rotate(-88.9 356.774 339.629)"
					fill="#636780"
				/>
				<path
					d="M394.32 181.93c28.94 2.56 51.37 30.28 50.74 63.65-.51 26.9-15.85 49.57-37 58.12-28.93-2.57-51.37-30.29-50.74-63.66.53-26.9 15.88-49.56 37-58.11z"
					opacity={0.1}
				/>
				<path
					d="M563.44 134.17l2.49 13 7.64 39.74 36.13-2.81s2.28-6.6-3.32-9.2c0 0-1.43-22.53-8-29.74a6.66 6.66 0 0 0-2.58-1.87z"
					fill="#65617d"
				/>
				<path
					d="M565.93 147.14l7.64 39.74 36.13-2.81s2.28-6.6-3.32-9.2c0 0-1.43-22.53-8-29.74z"
					fill="#fff"
					opacity={0.1}
				/>
				<path
					d="M482.13 136.12c-4.8 7.72 5.13 79.88 5.13 79.88l88.84-13-2-63c-1.62-11.33-8.23-12.79-8.23-12.79-30.94-16.37-102.65-21-102.65-21-65.51 1.25-125.52 19.4-125.52 19.4 74.68-10.09 144.43 10.51 144.43 10.51z"
					fill="#65617d"
				/>
				<path
					d="M487.26 216l88.84-13-2-63c-1.62-11.33-8.23-12.79-8.23-12.79s-64.52-7.37-83.77 8.89c-4.77 7.74 5.16 79.9 5.16 79.9z"
					opacity={0.1}
				/>
				<path
					d="M496.7 212.02l74.3-11.08-1.62-53.77c-1.35-9.67-6.88-10.91-6.88-10.91s-53.94-6.27-70.05 7.61c-4.03 6.59 4.25 68.15 4.25 68.15z"
					fill="#65617d"
				/>
				<ellipse
					cx={546.63}
					cy={321.17}
					rx={18.44}
					ry={10.14}
					transform="rotate(-88.92 447.045 266.467)"
					opacity={0.1}
				/>
				<ellipse
					cx={546.64}
					cy={320.67}
					rx={18.44}
					ry={10.14}
					transform="rotate(-88.92 447.05 265.972)"
					fill="#dce0ed"
				/>
				<path
					d="M502.57 153.77s4.14.74 1.88 6.19a37.42 37.42 0 0 0-2.65 8.26s-4.2 2.08-3.9-5.06 4.67-9.39 4.67-9.39z"
					fill="#f0f0f4"
				/>
				<ellipse cx={601.1} cy={314.88} rx={17.24} ry={9.47} transform="rotate(-88.92 501.51 260.183)" opacity={0.1} />
				<ellipse
					cx={601.11}
					cy={314.39}
					rx={17.24}
					ry={9.47}
					transform="rotate(-88.92 501.52 259.683)"
					fill="#dce0ed"
				/>
				<path
					d="M557 147.51s4.15.74 1.88 6.18a38.15 38.15 0 0 0-2.65 8.26s-4.19 2.08-3.89-5.06 4.66-9.38 4.66-9.38z"
					fill="#f0f0f4"
				/>
				<path
					d="M515.56 152.54c.53 6.83 2.9 57.39 2.9 57.39l5.66-.83 3.14-.46 4.19-.62.51-.08 16.5-2.43-2.24-53.63a6.74 6.74 0 0 0-6.66-6.44h-.5c-1.14.08-2.37.17-3.65.29l-1.64.16c-1.58.16-3.22.36-4.82.59-.82.12-1.63.25-2.42.39-1.35.25-2.65.52-3.85.83-.82.21-1.6.44-2.31.69-2.99 1.04-4.95 2.38-4.81 4.15z"
					opacity={0.1}
				/>
				<path
					d="M539.56 145.44l2.08 60.33 1.83-.13-2.06-59.87a6.68 6.68 0 0 0-1.85-.33zM533.77 145.91l1.87 60.86 2.82.05-3.05-61.05zM526.53 146.89l3.6 61.11h1.83v-.09l-3-61.44c-.83.15-1.64.3-2.43.42zM520.37 148.41l3.75 60.69v.11l3.17-.27v-.3l-4.61-60.87c-.82.16-1.6.39-2.31.64z"
					fill="#65617d"
				/>
				<path
					d="M587.06 196.61s6.7-31.41-7.22-33.3-59.85.62-58.72 13.6 2.25 32.7 2.25 32.7l9.51-1.94s-6.54-29.79 4.57-30.7 38.33-3.51 38.33-3.51 7.38-1.11 2.65 24.85z"
					opacity={0.1}
				/>
				<path
					d="M587 199.6s6.73-33.41-7.19-35.29-59.84.61-58.72 13.6 2.25 32.7 2.25 32.7l9.51-1.94s-6.54-29.79 4.57-30.7 38.33-3.52 38.33-3.52 7.34.89 2.61 26.85z"
					fill="#dce0ed"
				/>
				<path
					d="M340 236.65l12.29.06c9.72-39.37 25-63.68 25-63.68 5-2.57 59.52-1.2 59.52-1.2 5.64 1.1 6.79 19.07 6.79 19.07s-4.9 4.06-.3 6.81c2.06 1.23 8.89 1.58 16.78 1.33 9.8-.33 21.22-1.6 27.14-3.32 10.7-3.13 2.34-9.43 2.34-9.43s-1.46-2-2.25-13a44.33 44.33 0 0 0-5.72-18.21c-.44-.77-.73-1.19-.73-1.19a5.6 5.6 0 0 0-1.92-1.26c-14-6.14-83.11-1.84-83.11-1.84L370 158.44c-.71.27-1.84 2.05-3.24 4.91-8.39 17.18-26.76 73.3-26.76 73.3z"
					fill="#65617d"
				/>
				<path
					d="M340 236.65l12.29.06c9.72-39.37 25-63.68 25-63.68 5-2.57 59.52-1.2 59.52-1.2 5.64 1.1 6.79 19.07 6.79 19.07s-4.9 4.06-.3 6.81c2.06 1.23 8.89 1.58 16.78 1.33 9.8-.33 21.22-1.6 27.14-3.32 10.7-3.13 2.34-9.43 2.34-9.43s-1.46-2-2.25-13a44.33 44.33 0 0 0-5.72-18.21c-.44-.77-.73-1.19-.73-1.19a5.6 5.6 0 0 0-1.92-1.26c-14-6.14-83.11-1.84-83.11-1.84L370 158.44c-.71.27-1.84 2.05-3.24 4.91-8.39 17.18-26.76 73.3-26.76 73.3z"
					opacity={0.1}
				/>
				<path
					d="M366.78 163.35c23.79-8.73 88.79-2.63 88.79-2.63 7-5.79 20-5.93 25.95-5.65-.44-.77-.73-1.19-.73-1.19a5.6 5.6 0 0 0-1.92-1.26c-14-6.14-83.11-1.84-83.11-1.84L370 158.44c-.69.27-1.82 2.05-3.22 4.91z"
					fill="#65617d"
				/>
				<path
					d="M451.7 163.14c1.4 5.17 7.16 25.89 7.16 25.89a87.9 87.9 0 0 1 1.15 10c9.8-.33 21.22-1.6 27.14-3.32 10.7-3.13 2.34-9.43 2.34-9.43s-1.46-2-2.25-13a44.15 44.15 0 0 0-6.45-19.4 5.6 5.6 0 0 0-1.92-1.26c-9.27 2.01-28.23 6.6-27.17 10.52z"
					fill="#65617d"
				/>
				<path
					d="M451.7 163.14c1.4 5.17 7.16 25.89 7.16 25.89a87.9 87.9 0 0 1 1.15 10c9.8-.33 21.22-1.6 27.14-3.32 10.7-3.13 2.34-9.43 2.34-9.43s-1.46-2-2.25-13a44.15 44.15 0 0 0-6.45-19.4 5.6 5.6 0 0 0-1.92-1.26c-9.27 2.01-28.23 6.6-27.17 10.52z"
					fill="#fff"
					opacity={0.1}
				/>
				<path
					d="M307.22 25.29l30.51 100.29L465 107.17l-16.81-60.28s-2.6-13.76-9.19-14.88c0 0-101.75-19.62-131.78-6.72zm14.16 15.72c-4.11-13.54 56.34-6.79 56.34-6.79 8.14-.63 17.95.06 27.07 1.16 3.34.41 6.58.87 9.62 1.35 6.78 1.06 12.53 2.2 16 2.92 2.19.45 3.45.74 3.45.74 12 4 17.92 53.94 17.92 53.94.9 5.25-5.31 4-5.31 4H446l-5.66.11-16.84.33-82.3 1.66c-4.85-.59-5.49-6.34-5.49-6.34-2.54-4.12-14.33-53.08-14.33-53.08z"
					fill="#65617d"
				/>
				<path
					d="M446 98.35h.4s6.21 1.24 5.31-4c0 0-5.91-50-17.92-53.94 0 0-1.26-.29-3.45-.74 4.27 8.62 17.8 38.21 15.66 58.68z"
					fill="#65617d"
				/>
				<path
					d="M446 98.35h.4s6.21 1.24 5.31-4c0 0-5.91-50-17.92-53.94 0 0-1.26-.29-3.45-.74 4.27 8.62 17.8 38.21 15.66 58.68zM432.55 221.07a8 8 0 0 0 7.43 4.35l2.54-.06 24-.58 8.64-.21 8-.51 105.63-15.1-.6-10.39-12.19 1.51-5 .62-74.55 9.23-9.81 1.22-4.76.59-20.1-.53-21.78-.57a8.16 8.16 0 0 0-3.22.56 7.82 7.82 0 0 0-4.29 3.93 6.59 6.59 0 0 0 .06 5.94z"
					opacity={0.1}
				/>
				<path
					d="M432.53 222.07a8 8 0 0 0 7.43 4.35l35.16-.85 8-.51 112.65-16.1 8.85-1.27 4.83-.69c9.5-1.82 6.86-11.34 6.86-11.34-.58-4.33-16.79-8.63-22.11-8.56-3.57 0-4.18 5.54-4.18 9.15a30.43 30.43 0 0 0 .13 3.07l-5.27.65-103.04 12.8-41.84-1.13a8.05 8.05 0 0 0-7.51 4.48 6.61 6.61 0 0 0 .04 5.95z"
					fill="#dce0ed"
				/>
				<path
					d="M601.71 193.23s-4.59 5.39-11.58 6.09c0 0 2.94-6.09 11.58-6.09zM602.58 208.7s14.79-.05 14.64 7.92-9.48 9.13-9.48 9.13l-132.56 22.92h-37.56s-12.93-10.72.78-15.11l37.87 1.71 126.37-20.71s-3.24-4.59-.06-5.86z"
					opacity={0.1}
				/>
				<path
					d="M437.6 249.63h37.56L593 229.29l8.63-1.5 6.06-1s9.33-1.16 9.48-9.13c.11-5.72-7.48-7.31-11.78-7.75a27.55 27.55 0 0 0-2.86-.17c-3.18 1.26.06 5.81.06 5.81l-4.6.76-121.77 20-37.86-1.71c-13.68 4.31-.76 15.03-.76 15.03z"
					fill="#dce0ed"
				/>
				<path
					d="M591.57 202.01l-7.74-3.64-4-.24-.3 33.57 12.34-2.26 5.22-3.23 2.75-13.91s-.88-5.83-1.37-6.34-6.9-3.95-6.9-3.95z"
					fill="#dce0ed"
				/>
				<path
					d="M591.57 202.01l-7.74-3.64-4-.24-.3 33.57 12.34-2.26 5.22-3.23 2.75-13.91s-.88-5.83-1.37-6.34-6.9-3.95-6.9-3.95z"
					opacity={0.1}
				/>
				<path
					d="M593 229.29l-.15.17 8.67-1.5.11-.17c4.69-7.25 5.19-13.21 3.76-17.92a27.55 27.55 0 0 0-2.86-.17c-3.18 1.26.06 5.81.06 5.81l-4.6.76c.21 6.57-4.1 12-4.99 13.02zM580.84 198.15c1.45.59 2.79 1.2 4 1.82 5.54 2.8 8.93 5.89 10.89 9l8.85-1.27c-3.68-8-12.75-11.83-12.75-11.83l-1.85.39z"
					opacity={0.1}
				/>
				<path
					d="M590.86 195.85s24.07 10.09 9.7 32.09l-8.68 1.5s17.49-19.28-12-31.31zM532.84 205.55l-8.97-.5.81 36.08 14.51-2.38 6.2-2.88 2.96-7.09 2.13-7.1-4.69-6.57-5.42-3.76-7.53-5.8z"
					fill="#dce0ed"
				/>
				<path
					opacity={0.1}
					d="M532.84 205.55l-8.97-.5.81 36.08 14.51-2.38 6.2-2.88 2.96-7.09 2.13-7.1-4.69-6.57-5.42-3.76-7.53-5.8z"
				/>
				<ellipse cx={576.48} cy={377.41} rx={7.31} ry={4.32} transform="rotate(-88.92 476.89 322.708)" fill="#dce0ed" />
				<path
					d="M574.49 234.88a2.35 2.35 0 0 1 1.12 3.3c-1 1.81-2.24 4.16-2.14 4.79.17 1.06-2.18.14-2.49-.11s-4.61-.09-4.8-3a5.06 5.06 0 0 1 2.39-4.44l-.88-6.44 5.93-.39-.17 5.86z"
					fill="#636780"
				/>
				<path
					d="M574.49 234.88a2.35 2.35 0 0 1 1.12 3.3c-1 1.81-2.24 4.16-2.14 4.79.17 1.06-2.18.14-2.49-.11s-4.61-.09-4.8-3a5.06 5.06 0 0 1 2.39-4.44l-.88-6.44 5.93-.39-.17 5.86z"
					opacity={0.1}
				/>
				<path
					d="M572.88 234.77s-2.12 6.82-1.26 7.08 1.26-7.08 1.26-7.08zM570.67 233.07s-2.13 6.81-1.26 7.08 1.26-7.08 1.26-7.08z"
					opacity={0.1}
				/>
				<path
					d="M547.17 211.97l2.94 20.67s4.12-.49 6.4-.93a4.64 4.64 0 0 0 1.44-.42c.11-.11.36-.1.68 0 1.1.25 3.05 1.2 3.45.44a.5.5 0 0 1 .11-.16c.4-.41 1.15-.09 1.88 0a1.58 1.58 0 0 0 1.16-.13c.62-.4 1.85.28 2.87.52.64.15 1.19.13 1.45-.44a1.38 1.38 0 0 1 1-.69c1-.22 2.29 0 3.07-.18.3-.05.52-.16.59-.37.16-.45 1-.65 1.94-.8 1.12-.2 2.31-.33 2.41-.78 0-.15.14-.21.31-.21a9.29 9.29 0 0 1 1.81.48c.5.13.91.15 1-.21s.71-.34 1.36-.16 1.1.35 1.55.46.69.12.74-.07c.18-.66 2.31.88 2.83-.44s7.51-10-1.08-21.63c0 0-2.39.12-4.21.42a6.5 6.5 0 0 0-1.77.46 10.57 10.57 0 0 1-3.21.31 4 4 0 0 0-1.79.39 1.12 1.12 0 0 0-.51.52c-.29.63-.93.74-1.63.69-.94-.07-2-.45-2.37-.27-.71.28-3.31-.06-3.76.37-.19.27-1.21 0-2.25-.2a2.54 2.54 0 0 0-2.07.29 2.27 2.27 0 0 1-1.63.44 9.5 9.5 0 0 0-2.11.05.79.79 0 0 0-.43.26c-.43.51-1.44.42-2.34.45a2.38 2.38 0 0 0-1.33.31 1.12 1.12 0 0 1-.48.19 14.23 14.23 0 0 1-4-.28z"
					fill="#636780"
				/>
				<path
					d="M583.12 228.59c.52.14 1.1.35 1.55.46 7-10.34 1.41-18.39-1.72-21.72a6.5 6.5 0 0 0-1.77.46c6.63 7.98 3.3 17.66 1.94 20.8z"
					opacity={0.1}
				/>
				<path
					d="M578.91 228.48a9.29 9.29 0 0 1 1.81.48c6-10.1.17-17.85-2.77-20.85a4 4 0 0 0-1.79.39c6.33 7.19 4.24 15.94 2.75 19.98z"
					opacity={0.1}
				/>
				<path
					d="M573.66 230.64c.3-.05.52-.16.59-.37.16-.45 1-.65 1.94-.8 5.24-9.16.84-16.35-2.17-19.76-.94-.07-2-.45-2.37-.27 6.96 8.17 3.35 18.24 2.01 21.2z"
					opacity={0.1}
				/>
				<path
					d="M568.12 231.95c.64.15 1.19.13 1.45-.44a1.38 1.38 0 0 1 1-.69c6.1-10.19.22-18-2.73-21-.19.27-1.21 0-2.25-.2 8.22 8.68 3.69 19.86 2.53 22.33z"
					opacity={0.1}
				/>
				<path
					d="M562.21 231.53c.4-.41 1.15-.09 1.88 0 6.35-10.11.84-17.94-2.22-21.16a9.5 9.5 0 0 0-2.11.05c7.04 7.9 3.89 17.7 2.45 21.11z"
					opacity={0.1}
				/>
				<path
					d="M556.51 231.71a4.64 4.64 0 0 0 1.44-.42c.11-.11.36-.1.68 0 5.63-9.23 1.41-16.53-1.65-20.1a2.38 2.38 0 0 0-1.33.31 1.12 1.12 0 0 1-.48.19c5.83 7.78 2.65 17 1.34 20.02z"
					opacity={0.1}
				/>
				<ellipse
					cx={438.16}
					cy={397.07}
					rx={39.88}
					ry={27.09}
					transform="rotate(-88.92 338.577 342.366)"
					fill="#636780"
				/>
				<ellipse
					cx={439.07}
					cy={397.67}
					rx={32.32}
					ry={19.69}
					transform="rotate(-88.92 339.481 342.963)"
					opacity={0.1}
				/>
				<ellipse
					cx={439.09}
					cy={396.67}
					rx={32.32}
					ry={19.69}
					transform="rotate(-88.92 339.502 341.964)"
					fill="#f0f0f4"
				/>
				<ellipse
					cx={435.92}
					cy={374.92}
					rx={3.99}
					ry={2.33}
					transform="rotate(-88.92 336.339 320.216)"
					fill="#636780"
				/>
				<ellipse
					cx={425.96}
					cy={409.64}
					rx={3.99}
					ry={2.33}
					transform="rotate(-88.92 326.373 354.935)"
					fill="#636780"
				/>
				<ellipse
					cx={451.36}
					cy={393.49}
					rx={3.99}
					ry={2.33}
					transform="rotate(-88.92 351.774 338.794)"
					fill="#636780"
				/>
				<ellipse
					cx={444.11}
					cy={416.63}
					rx={3.99}
					ry={2.33}
					transform="rotate(-88.92 344.521 361.922)"
					fill="#636780"
				/>
				<path
					d="M198.35 166.33s-20.42 51.44-19.48 54.73c0 0-8.32 4.82-10.29 3.54s.21-24.18.21-24.18l4.12-20.11 4.46-11.89z"
					fill="#65617d"
				/>
				<path
					d="M198.35 166.33s-20.42 51.44-19.48 54.73c0 0-8.32 4.82-10.29 3.54s.21-24.18.21-24.18l4.12-20.11 4.46-11.89z"
					opacity={0.15}
				/>
				<ellipse cx={423.05} cy={387.97} rx={3.99} ry={2.33} transform="rotate(-88.92 323.458 333.27)" fill="#636780" />
				<ellipse
					cx={435.49}
					cy={397.85}
					rx={9.47}
					ry={6.81}
					transform="rotate(-88.92 335.904 343.144)"
					fill="#636780"
				/>
				<path
					d="M175.36 235.2c-.57 30 8.89 57.51 36.61 55 34.9-.09 38.09-23.61 38.65-53.62s-15.86-52.65-36.64-53-38.05 21.61-38.62 51.62z"
					fill="#636780"
				/>
				<path
					d="M175.14 235.25c.44-23.23 10.89-41.67 25.23-48.63 18.18 3.81 31.81 25.06 31.29 52.44-.46 24.59-2.69 44.82-22.69 51.37-25.57.44-34.37-26.2-33.83-55.18z"
					opacity={0.1}
				/>
				<path
					d="M160.9 222.21s4.9 4.33 7.7 1.39c0 0 7.75-53.7 16.22-53.79l29.17.3s3.46 1.56 4.83 8.07l17.84 54L340 235.65l8.2-16.38-85.49-1.37c-.43-1.66-13.74-52.93-23.22-59.46a4.09 4.09 0 0 0-1-.53s-35.55-5.41-47.32-2.39c0 0-12.27 2.51-15.33 6.19-.41.41-5.13 5.54-6.85 20.54z"
					opacity={0.1}
				/>
				<path
					d="M160.88 223.21s4.9 4.33 7.7 1.39c0 0 7.75-53.7 16.22-53.79l29.17.3s3.46 1.56 4.83 8.07l17.84 54L340 236.65l8.2-16.39-85.48-1.36c-.44-1.66-13.75-52.93-23.23-59.46a4.09 4.09 0 0 0-1-.53s-35.55-5.41-47.32-2.39c0 0-12.26 2.51-15.33 6.19-.41.41-5.13 5.53-6.85 20.53z"
					fill="#65617d"
				/>
				<path
					d="M160.88 223.21s4.9 4.33 7.7 1.39c0 0 7.75-53.7 16.22-53.79l29.17.3s3.46 1.56 4.83 8.07l17.84 54L340 236.65l8.2-16.39-85.48-1.36c-.44-1.66-13.75-52.93-23.23-59.46a4.09 4.09 0 0 0-1-.53s-35.55-5.41-47.32-2.39c0 0-12.26 2.51-15.33 6.19-.41.41-5.13 5.53-6.85 20.53z"
					opacity={0.1}
				/>
				<path
					d="M225.29 165.59c2.4 4.78 22.73 63.5 22.73 63.5l14.66-10.19c-.44-1.66-13.77-53-23.25-59.47-6.27.91-15.77 2.91-14.14 6.16z"
					fill="#65617d"
				/>
				<path
					d="M253.7 139.45l11 38.6 61.09-.59-.6 5.72s-48 6.08-68.24-3.78l-10.3-35.26-96.38-1.32 18.45-4z"
					fill="#65617d"
				/>
				<path
					d="M253.7 139.45l11 38.6 61.09-.59-.6 5.72s-48 6.08-68.24-3.78l-10.3-35.26-96.38-1.32 18.45-4z"
					fill="#fff"
					opacity={0.1}
				/>
				<path d="M538.82 205.33s32.42 17.07 7.87 32.06l-6.5 1.38s24.08-16.67-15.32-33.7z" opacity={0.1} />
				<path d="M537.83 205.31s32.42 17.07 7.87 32.06l-6.51 1.4s24.08-16.67-15.32-33.7z" fill="#dce0ed" />
				<ellipse cx={241.46} cy={393.1} rx={31.16} ry={18.2} transform="rotate(-88.92 141.874 338.4)" fill="#636780" />
				<ellipse
					cx={242.06}
					cy={393.79}
					rx={25.25}
					ry={13.23}
					transform="rotate(-88.92 142.476 339.08)"
					opacity={0.1}
				/>
				<ellipse
					cx={242.08}
					cy={392.79}
					rx={25.25}
					ry={13.23}
					transform="rotate(-88.92 142.497 338.08)"
					fill="#f0f0f4"
				/>
				<ellipse cx={240} cy={375.81} rx={3.12} ry={1.56} transform="rotate(-88.92 140.418 321.099)" fill="#636780" />
				<ellipse cx={233.23} cy={402.95} rx={3.12} ry={1.56} transform="rotate(-88.92 133.647 348.24)" fill="#636780" />
				<ellipse
					cx={250.33}
					cy={390.29}
					rx={3.12}
					ry={1.56}
					transform="rotate(-88.92 150.747 335.575)"
					fill="#636780"
				/>
				<ellipse
					cx={245.41}
					cy={408.37}
					rx={3.12}
					ry={1.56}
					transform="rotate(-88.92 145.829 353.663)"
					fill="#636780"
				/>
				<ellipse
					cx={231.32}
					cy={386.03}
					rx={3.12}
					ry={1.56}
					transform="rotate(-88.92 131.736 331.322)"
					fill="#636780"
				/>
				<ellipse cx={239.66} cy={393.72} rx={7.4} ry={4.58} transform="rotate(-88.92 140.077 339.007)" fill="#636780" />
				<path d="M465.24 106.3s-55.36 1-127.51 19.28z" opacity={0.1} />
				<path
					d="M203.1 4.46s3 .54 1.36 4.48a27.3 27.3 0 0 0-1.92 6s-3 1.51-2.81-3.66 3.37-6.82 3.37-6.82z"
					fill="#dce0ed"
				/>
				<path fill="none" stroke="#000" strokeMiterlimit={10} d="M319.53 99.18l4.41 17.55 15.2-13.31" />
				<path fill="#fff" d="M300.86 112.152l44.912 7.71-7.577 44.144-44.913-7.71z" />
				<path
					d="M313.89 157.7l.84-4.92a14.39 14.39 0 0 1-7.09-3.42l1.73-3.07a15.34 15.34 0 0 0 7.22 3.4c3.46.59 6.14-1 6.62-3.78s-1.16-4.67-4.52-6.75c-4.63-2.8-6.76-5.48-6-9.72.69-4 3.81-6.67 8.42-6.63l.85-4.92 2.46.42-.81 4.73a13.22 13.22 0 0 1 6.05 2.79l-1.77 3a10.74 10.74 0 0 0-5.58-2.66c-3.76-.65-5 1.45-5.33 3.4-.44 2.53.59 4 4.53 6.5 4.67 2.9 7.33 6 6.58 10.31-.66 3.85-4 7-9.12 7l-.87 5.07z"
					fill="#636780"
				/>
				<path d="M313.12 317.67a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#65617d" />
			</g>
			<ellipse cx={663.91} cy={451.63} rx={18.68} ry={3.16} fill={primaryColor} opacity={0.1} />
			<path
				d="M651.36 436.96s10.66-.33 13.87-2.61 16.39-5 17.18-1.35 16 18.23 4 18.33-27.95-1.87-31.16-3.83-3.89-10.54-3.89-10.54z"
				fill="#a8a8a8"
			/>
			<path
				d="M686.61 450.05c-12 .1-28-1.87-31.15-3.82-2.44-1.49-3.41-6.82-3.74-9.28h-.36s.68 8.59 3.88 10.54 19.13 3.93 31.16 3.83c3.47 0 4.67-1.26 4.6-3.09-.48 1.11-1.81 1.8-4.39 1.82z"
				opacity={0.2}
			/>
			<ellipse cx={772.24} cy={414.84} rx={14.37} ry={2.43} fill={primaryColor} opacity={0.1} />
			<path
				d="M762.58 403.55s8.2-.25 10.67-2 12.61-3.86 13.23-1 12.32 14 3.06 14.11-21.51-1.44-24-2.94-2.96-8.17-2.96-8.17z"
				fill="#a8a8a8"
			/>
			<path
				d="M789.7 413.63c-9.25.07-21.5-1.44-24-2.94-1.87-1.15-2.62-5.25-2.87-7.15h-.28s.52 6.62 3 8.12 14.71 3 24 2.94c2.67 0 3.59-1 3.54-2.38-.38.86-1.4 1.39-3.39 1.41z"
				opacity={0.2}
			/>
			<ellipse cx={707.03} cy={568.44} rx={34.31} ry={5.8} fill={primaryColor} opacity={0.1} />
			<path
				d="M684 541.49s19.57-.61 25.46-4.81 30.11-9.21 31.57-2.47 29.41 33.5 7.32 33.67-51.34-3.44-57.23-7-7.12-19.39-7.12-19.39z"
				fill="#a8a8a8"
			/>
			<path
				d="M748.73 565.54c-22.09.18-51.34-3.44-57.22-7-4.49-2.73-6.27-12.53-6.87-17h-.65s1.24 15.78 7.12 19.37 35.13 7.2 57.23 7c6.38-.05 8.58-2.32 8.46-5.68-.89 2-3.32 3.27-8.07 3.31z"
				opacity={0.2}
			/>
			<path
				d="M1069.29 364.27A89.33 89.33 0 0 1 891 371.94c-.13-1.45-.23-2.9-.27-4.38v-.07c-.05-1.07-.07-2.14-.07-3.22a89.33 89.33 0 0 1 178.13-9.79 88 88 0 0 1 .5 9.79z"
				fill="#65617d"
			/>
			<path
				d="M1069.29 364.27A89.33 89.33 0 0 1 891 371.94c-.13-1.45-.23-2.9-.27-4.38v-.07c-.05-1.07-.07-2.14-.07-3.22a89.33 89.33 0 0 1 178.13-9.79 88 88 0 0 1 .5 9.79z"
				opacity={0.2}
			/>
			<circle cx={979.95} cy={364.27} r={48.73} fill="#dce0ed" />
			<circle cx={979.95} cy={364.27} r={29.24} fill="#65617d" />
			<path
				d="M592.38 364.27a89.33 89.33 0 0 1-178.33 7.67c-.13-1.45-.23-2.9-.27-4.38v-.07c0-1.07-.07-2.14-.07-3.22a89.33 89.33 0 0 1 178.13-9.79 90.48 90.48 0 0 1 .54 9.79z"
				fill="#65617d"
			/>
			<path
				d="M592.38 364.27a89.33 89.33 0 0 1-178.33 7.67c-.13-1.45-.23-2.9-.27-4.38v-.07c0-1.07-.07-2.14-.07-3.22a89.33 89.33 0 0 1 178.13-9.79 90.48 90.48 0 0 1 .54 9.79z"
				opacity={0.2}
			/>
			<circle cx={503.04} cy={364.27} r={48.73} fill="#dce0ed" />
			<circle cx={503.04} cy={364.27} r={29.24} fill="#65617d" />
			<path
				d="M1097.15 347.53l-29.8-1.29-27.22-50.54-95.9-7.78-46.65 60.91 2.59 16.85-6.48 15.55-304.55 2.59v-7.78h-2.59L584 364.38h23.33l-16.85-18.14-59.61-50.54s-102.38 2.59-103.68 0 5.81-29.16 5.81-29.16l44.06-13 150.33-11.67c33-52.48 62.85-77.11 62.85-77.11h386.2l18.14 93.31v.22z"
				fill="#444053"
			/>
			<path
				d="M882 354.01s38.88-72.57 68.69-72.57h72.57s18.15 0 25.92 14.26l29.82 58.31h-23.33s-19.44-54.43-41.47-55.72-59.61 0-59.61 0-13 0-20.74 15.55-34.05 49.43-34.05 49.43-28.14 8.89-17.8-9.26z"
				fill="#33323d"
			/>
			<path
				fill="#33323d"
				d="M1114 342.35h-48.75l-.5 38.88 49.25-11.66v-27.22zM409 319.02s2.59-19.44 20.74-27.21L549 285.33s19.44 1.29 29.81 25.92l33.66 50.52v7.77h-37.59s-18.14-68.68-70-66.09h-62.19s-14.25 0-19.43 23.33zM688.93 172.58h397.85a14.26 14.26 0 0 0-14.25-14.26H703.18a14.26 14.26 0 0 0-14.25 14.26z"
			/>
			<path
				d="M774.19 249.04h-110.1a7.44 7.44 0 0 1-6.8-10.47l17.42-39.19A34.21 34.21 0 0 1 706 179.06h66.89a9.37 9.37 0 0 1 9.37 9.37v52.56a8.05 8.05 0 0 1-8.07 8.05z"
				fill={primaryColor}
				opacity={0.3}
			/>
			<rect x={810.75} y={179.06} width={107.56} height={69.98} rx={5.54} fill={primaryColor} opacity={0.3} />
			<path fill="#33323d" d="M1094.56 258.11v.22l-167.18 2.37-4.35-95.89h153.39l18.14 93.3z" />
			<rect x={941.64} y={179.06} width={123.12} height={69.98} rx={5.54} fill={primaryColor} opacity={0.3} />
			<rect x={748.54} y={273.66} width={41.47} height={7.78} rx={1.76} fill="#33323d" />
			<rect x={867.77} y={273.66} width={41.47} height={7.78} rx={1.76} fill="#33323d" />
			<path fill="#fff" d="M951.75 171.32h47.99v47.16h-47.99z" />
			<path
				d="M973.38 216.28v-5.26a15.16 15.16 0 0 1-8-2.29l1.25-3.49a16.1 16.1 0 0 0 8.09 2.24c3.7 0 6.2-2.14 6.2-5.11s-2-4.63-5.88-6.19c-5.32-2.09-8-4.48-8-9 0-4.32 2.77-7.6 7.56-8.38v-5.26h2.64v5.05a13.81 13.81 0 0 1 6.77 1.82l-1.3 3.44a11.32 11.32 0 0 0-6.27-1.77c-4 0-4.92 2.39-4.92 4.47 0 2.71 1.33 4.07 5.86 5.94 5.36 2.19 8.66 4.89 8.66 9.53 0 4.11-2.86 8-8.22 8.85v5.42z"
				fill="#636780"
			/>
			<path
				d="M370.61 418.11c-6.19 6.74-10.75 9.39-10.54 2.28.65-21.5-37.07-118.72-37.07-118.72l11.17-.84c24.33 42.05 33.4 85.26 36.44 117.28z"
				fill="none"
			/>
			<path
				d="M423.92 465.02a53.75 53.75 0 0 1-107.31 4.62c-.08-.88-.13-1.75-.16-2.64v-1.94a53.75 53.75 0 0 1 107.18-5.89 52.19 52.19 0 0 1 .29 5.85z"
				fill="#65617d"
			/>
			<circle cx={370.16} cy={465.02} r={29.32} fill="#dce0ed" />
			<circle cx={370.16} cy={465.02} r={17.59} fill="#65617d" />
			<path
				d="M229 362.94l-129.45 2.61v-19.11c1.16-15.36 16.91-20.75 31.29-22.44a90 90 0 0 1 33.44 2.51c27.46 7.27 45 8.68 53.58 8.82a8.22 8.22 0 0 1 7.95 6.68c.41 2.19.81 4.56 1.19 6.91.29 1.84.56 3.65.81 5.34.71 4.89 1.19 8.68 1.19 8.68z"
				fill="#65617d"
			/>
			<path
				d="M332.26 468.5H63.36a10.59 10.59 0 0 1-9.8-6.34c-2-4.84.81-7.93 3.83-9.74a30.49 30.49 0 0 0 13.24-16.2c2.87-8.44 5.67-21.73 6.77-42.43 1.13-21.42 8.89-32 17.27-37.14 10.83-6.62 22.69-4.13 22.69-4.13l109 .87a20.92 20.92 0 0 1 5.32 3.47c9.72 9.05-4.45 20.85-4.45 20.85-30.41 32.14-7.39 64.72-7.39 64.72h55.79a51.32 51.32 0 0 0 29.22-8.94c7.54-5.21 10.46-10.25 11.59-13.3.86-2.33 1.73-4.66 2.77-6.91 14.64-31.74-3-83.37-10.63-102.68-1.89-4.8-3.16-7.6-3.16-7.6l17.58-1.33 11.06-.84h.11c24.38 42.05 33.45 85.26 36.49 117.28q.43 4.53.72 8.75a39.11 39.11 0 0 1-39.12 41.64z"
				fill={primaryColor}
			/>
			<path d="M227.81 354.26H99.55v-5.34H227c.29 1.85.56 3.65.81 5.34z" opacity={0.1} />
			<path
				d="M231.71 356.86h-136a2.56 2.56 0 0 1-1-.21c10.83-6.62 22.69-4.13 22.69-4.13l109 .87a20.92 20.92 0 0 1 5.31 3.47z"
				opacity={0.1}
			/>
			<rect x={45.45} y={350.23} width={190.06} height={5.33} rx={2.67} fill="#dce0ed" />
			<path
				d="M370.61 418.11c-6.19 6.74-10.75 9.39-10.54 2.28.65-21.5-37.07-118.72-37.07-118.72l11.17-.84c24.33 42.05 33.4 85.26 36.44 117.28z"
				opacity={0.1}
			/>
			<path
				d="M423.59 459.13c-6.41 1.54-14.35 3.11-24.14 4.54q-5.44.79-11.7 1.54c-10 1.18-21.54 2.22-34.88 3q-5.67.34-11.78.62-11.43.52-24.48.8l-.16-2.64c12.15-4.91 31.27-18 34.35-52.09a53.77 53.77 0 0 1 72.79 44.26z"
				opacity={0.1}
			/>
			<path
				d="M306.32 468.5s61.68-6.73 40.46-100.73c0 0 30.49 28 49.45 43.49s52.77 37 52.77 37-20.19 18.83-142.68 20.24z"
				fill={primaryColor}
			/>
			<path
				d="M306.32 468.5s61.68-6.73 40.46-100.73c0 0 30.49 28 49.45 43.49s52.77 37 52.77 37-20.19 18.83-142.68 20.24z"
				fill="#fff"
				opacity={0.1}
			/>
			<circle cx={141.47} cy={465.02} r={53.75} fill="#65617d" />
			<circle cx={141.47} cy={465.02} r={29.32} fill="#dce0ed" />
			<circle cx={141.47} cy={465.02} r={17.59} fill="#65617d" />
			<path
				d="M201.74 448.88c0-34.71-27.57-62.86-61.57-62.86s-61.58 28.15-61.58 62.86c0 1.47.06 2.92.15 4.36h122.85c.1-1.47.15-2.89.15-4.36z"
				opacity={0.1}
			/>
			<path
				d="M199.46 447.77c0-33.43-26.55-60.53-59.29-60.53s-59.3 27.1-59.3 60.53c0 1.41 0 2.81.15 4.19h118.29c.1-1.35.15-2.75.15-4.19z"
				fill={primaryColor}
			/>
			<path
				d="M199.46 447.77c0 1 0 1.93-.07 2.89 0 .44 0 .87-.07 1.3H81c0-.43-.06-.86-.08-1.3 0-1-.07-1.92-.07-2.89 0-33.43 26.55-60.53 59.3-60.53s59.31 27.13 59.31 60.53z"
				fill="#fff"
				opacity={0.1}
			/>
			<path d="M199.39 450.69c0 .44 0 .87-.07 1.3H81c0-.43-.06-.86-.08-1.3z" opacity={0.1} />
			<rect x={54.93} y={453.3} width={159.3} height={13.9} rx={6.95} opacity={0.1} />
			<rect x={54.93} y={451.99} width={159.3} height={13.9} rx={6.95} fill="#dce0ed" />
			<ellipse cx={394.92} cy={496.64} rx={7.8} ry={19.65} transform="rotate(-24.33 18.07 519.804)" opacity={0.1} />
			<ellipse cx={395.57} cy={495.99} rx={7.8} ry={19.65} transform="rotate(-24.33 18.718 519.167)" fill="#dce0ed" />
			<path
				d="M334 300.83v10.21h-19.86a34.59 34.59 0 0 1-5.53-.44c-1.89-4.8-3.16-7.6-3.16-7.6l17.55-1.33z"
				opacity={0.1}
			/>
			<path
				d="M334 309.77h-19.86c-17.46 0-31.6-13.06-31.6-29.17v-2.7c0-16.11 14.14-29.17 31.6-29.17l19.87 1.8z"
				fill={primaryColor}
			/>
			<path
				d="M301.27 265.97s11.89 6.35 5.05 17.1c0 0-8.39 13.77-21.59 12.46l-4.8-29.56s15.8-1.47 21.34 0z"
				fill={primaryColor}
			/>
			<path
				d="M296.7 265.39a12.63 12.63 0 0 1 9.66 5.1c2.12 2.93 3.38 7.21 0 12.58 0 0-8.39 13.77-21.59 12.46l-4.8-29.56a147.46 147.46 0 0 1 16.73-.58zM333.36 250.51a16 16 0 0 1 16 16v27.31a16 16 0 0 1-16 16v-59.31z"
				opacity={0.1}
			/>
			<path d="M334 250.51a16 16 0 0 1 16 16v27.31a16 16 0 0 1-16 16v-59.31z" fill="#dce0ed" />
			<ellipse cx={278.55} cy={281.34} rx={13.2} ry={16.06} fill={primaryColor} />
			<path fill="none" stroke="#000" strokeMiterlimit={10} d="M137.95 355.6l5.77 12.84 9.64-12.84" />
			<path fill="#fff" d="M119.7 368.98h47.04v46.23H119.7z" />
			<path
				d="M140.91 413.05v-5.16a14.89 14.89 0 0 1-7.81-2.24l1.22-3.42a15.84 15.84 0 0 0 7.94 2.19c3.62 0 6.07-2.09 6.07-5s-2-4.54-5.77-6.07c-5.21-2.05-7.84-4.39-7.84-8.84 0-4.23 2.72-7.45 7.42-8.21v-5.16h2.58v5a13.59 13.59 0 0 1 6.64 1.79l-1.28 3.37a11.09 11.09 0 0 0-6.14-1.74c-3.93 0-4.83 2.35-4.83 4.39 0 2.66 1.31 4 5.75 5.82 5.26 2.14 8.49 4.8 8.49 9.34 0 4-2.8 7.81-8.06 8.68v5.31z"
				fill="#636780"
			/>
		</svg>
	);
};

UndrawVehicleSale.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawVehicleSale;
