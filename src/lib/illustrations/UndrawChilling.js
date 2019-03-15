import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChilling = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 970 781.61" style={style} {...props}>
			<defs>
				<linearGradient id="prefix__a" x1={600} y1={675.47} x2={600} y2={149.73} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="gray" stopOpacity={0.25} />
					<stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
					<stop offset={1} stopColor="gray" stopOpacity={0.1} />
				</linearGradient>
				<linearGradient
					id="prefix__b"
					x1={1718.23}
					y1={-1648.44}
					x2={1718.23}
					y2={-1862.67}
					gradientTransform="rotate(-18.87 7510.01 3049.535)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient
					id="prefix__c"
					x1={1731.89}
					y1={-1787.45}
					x2={1731.89}
					y2={-1814.78}
					gradientTransform="translate(-1271.46 2131.88)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient
					id="prefix__d"
					x1={1763.79}
					y1={-1719.1}
					x2={1763.79}
					y2={-1746.44}
					gradientTransform="translate(-1237.95 2101.1)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient
					id="prefix__e"
					x1={1659}
					y1={-1746.44}
					x2={1659}
					y2={-1773.78}
					gradientTransform="translate(-1234.6 2166.35)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient
					id="prefix__f"
					x1={1686.33}
					y1={-1678.1}
					x2={1686.33}
					y2={-1705.44}
					gradientTransform="translate(-1200.26 2138.19)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient id="prefix__g" x1={752.69} y1={339.56} x2={752.69} y2={202.23} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__h" x1={676.63} y1={422.03} x2={676.63} y2={186.54} xlinkHref="#prefix__a" />
				<linearGradient id="prefix__i" x1={670.37} y1={305.53} x2={670.37} y2={295.41} gradientUnits="userSpaceOnUse">
					<stop offset={0} stopColor="#fff" />
					<stop offset={1} />
				</linearGradient>
				<linearGradient id="prefix__j" x1={612.66} y1={683.48} x2={612.66} y2={59.2} xlinkHref="#prefix__a" />
				<linearGradient
					id="prefix__k"
					x1={1186.13}
					y1={-329.85}
					x2={1186.13}
					y2={-425.03}
					gradientTransform="translate(-521.72 1157.6)"
					xlinkHref="#prefix__a"
				/>
				<linearGradient
					id="prefix__l"
					x1={1083.07}
					y1={-358.53}
					x2={1083.07}
					y2={-539.81}
					gradientTransform="rotate(-18.54 4471.565 1799.515)"
					xlinkHref="#prefix__a"
				/>
			</defs>
			<path
				d="M1033.84 253.83H901V203a53.24 53.24 0 0 0-53.24-53.24H239.53a48.3 48.3 0 0 0-48.3 48.3v55.8h-20A56.21 56.21 0 0 0 115 310v252a56.2 56.2 0 0 0 52 56v57h56.78v-56.83h71.5v57.31h56.78v-57.31h511v57.31h56.78v-57.31h47.32v56.78H1024v-56.78h10.23a50.76 50.76 0 0 0 50.77-50.76V305a51.16 51.16 0 0 0-51.16-51.17zM891 476.22v42.58H679.32a27.49 27.49 0 0 0 3.49-13.43v-29.15z"
				transform="translate(-115 -59.2)"
				fill="url(#prefix__a)"
				opacity={0.5}
			/>
			<path
				fill={primaryColor}
				d="M68.12 537.67h54.67v68.34H68.12zM738.37 538.18h54.67v68.34h-54.67zM838.6 537.67h54.67v68.34H838.6zM191.64 538.18h54.67v68.34h-54.67z"
			/>
			<path
				opacity={0.3}
				d="M68.12 537.67h54.67v68.34H68.12zM738.37 538.18h54.67v68.34h-54.67zM838.6 537.67h54.67v68.34H838.6zM191.64 538.18h54.67v68.34h-54.67z"
			/>
			<path
				d="M765.2 200.52h137.54A49.26 49.26 0 0 1 952 249.78v252.69a48.87 48.87 0 0 1-48.87 48.87H765.2V200.52z"
				fill={primaryColor}
			/>
			<path
				d="M765.2 200.52h137.54A49.26 49.26 0 0 1 952 249.78v252.69a48.87 48.87 0 0 1-48.87 48.87H765.2V200.52z"
				opacity={0.3}
			/>
			<path d="M137.91 100.29h263.31v314.37H91.4V146.79a46.51 46.51 0 0 1 46.51-46.5z" fill={primaryColor} />
			<path d="M139.41 100.29h261.81v314.37H91.4V148.29a48 48 0 0 1 48.01-48z" opacity={0.3} />
			<path d="M209.2 100.29h255.3v314.37H154.68V154.8a54.51 54.51 0 0 1 54.51-54.51z" fill={primaryColor} />
			<path
				d="M463 100.29h260.55a51.27 51.27 0 0 1 51.27 51.27v263.1H463V100.29zM851.77 200.52h51A49.26 49.26 0 0 1 952 249.78v252.69a48.87 48.87 0 0 1-48.87 48.87h-51.36V200.52zM223.02 455.66h628.74v95.68H223.02z"
				fill={primaryColor}
			/>
			<rect
				x={382.64}
				y={278.19}
				width={185.66}
				height={195.43}
				rx={57.05}
				ry={57.05}
				transform="rotate(-16.25 210.548 748.998)"
				fill="url(#prefix__b)"
			/>
			<rect
				x={385.59}
				y={287.11}
				width={173.13}
				height={182.24}
				rx={53.2}
				ry={53.2}
				transform="rotate(-16.25 207.216 751.31)"
				fill="#f55f44"
			/>
			<rect
				x={385.59}
				y={287.11}
				width={173.13}
				height={182.24}
				rx={53.2}
				ry={53.2}
				transform="rotate(-16.25 207.216 751.31)"
				opacity={0.1}
			/>
			<rect
				x={388.9}
				y={284.78}
				width={173.13}
				height={182.24}
				rx={53.2}
				ry={53.2}
				transform="rotate(-16.25 210.548 748.998)"
				fill="#f55f44"
			/>
			<circle cx={460.44} cy={330.77} r={13.67} transform="rotate(-35.12 309.352 482.848)" fill="url(#prefix__c)" />
			<circle cx={525.84} cy={368.33} r={13.67} transform="rotate(-35.12 374.734 520.399)" fill="url(#prefix__d)" />
			<circle cx={424.4} cy={406.24} r={13.67} transform="rotate(-35.12 273.301 558.317)" fill="url(#prefix__e)" />
			<circle cx={486.07} cy={446.42} r={13.67} transform="rotate(-35.12 334.966 598.499)" fill="url(#prefix__f)" />
			<circle cx={460.44} cy={330.77} r={9.11} transform="rotate(-35.12 309.352 482.848)" fill="#f99f8f" />
			<circle cx={525.84} cy={368.33} r={9.11} transform="rotate(-35.12 374.734 520.399)" fill="#f99f8f" />
			<circle cx={424.4} cy={406.24} r={9.11} transform="rotate(-35.12 273.301 558.317)" fill="#f99f8f" />
			<circle cx={486.07} cy={446.42} r={9.11} transform="rotate(-35.12 334.966 598.499)" fill="#f99f8f" />
			<path
				d="M72.13 200.52h201v350.82h-201A54.13 54.13 0 0 1 18 497.22V254.65a54.13 54.13 0 0 1 54.13-54.13z"
				fill={primaryColor}
			/>
			<path
				d="M72.51 200.52H222.7A50.44 50.44 0 0 1 273.14 251v249.9a50.44 50.44 0 0 1-50.44 50.44H72.51A54.51 54.51 0 0 1 18 496.83V255a54.51 54.51 0 0 1 54.51-54.48z"
				opacity={0.3}
			/>
			<path d="M173.41 200.52h87.79a17 17 0 0 1 17 17v316.82a17 17 0 0 1-17 17h-87.79V200.52z" opacity={0.1} />
			<path d="M168.35 200.52h87.79a17 17 0 0 1 17 17v316.82a17 17 0 0 1-17 17h-87.79V200.52z" fill={primaryColor} />
			<path fill={primaryColor} d="M250.36 382.77h314.37v86.57H250.36zM565.24 383.27h314.37v86.57H565.24z" />
			<rect x={250.36} y={382.77} width={314.37} height={86.57} rx={26.6} ry={26.6} fill="#fff" opacity={0.15} />
			<circle cx={601.43} cy={205.33} r={18.22} fill={primaryColor} />
			<circle cx={601.43} cy={205.33} r={18.22} opacity={0.3} />
			<circle cx={318.96} cy={205.33} r={18.22} fill={primaryColor} />
			<circle cx={318.96} cy={205.33} r={18.22} opacity={0.3} />
			<ellipse cx={309.84} cy={102.31} rx={4.56} ry={6.83} fill="#fda57d" />
			<rect x={565.24} y={383.27} width={314.37} height={86.57} rx={26.6} ry={26.6} fill="#fff" opacity={0.15} />
			<path
				d="M787.44 267.21c-2.09-11.49-4.23-23.11-9-33.8a74.23 74.23 0 0 0-23.75-29.56 8 8 0 0 0-5.36-1.6c-3 .26-3.92 2.1-4.39 4-.06.23-.11.45-.15.68-1.18 5.83-.39 11.59 1.32 17.27 2.13 7.09 5.7 14 8.67 20.86a139.16 139.16 0 0 1 10.53 38.6c.22 1.76.39 3.57.43 5.38a31.34 31.34 0 0 1-.08 3.23 19.26 19.26 0 0 1-1.42 6.13q-.21.48-.45 1t-.52.92c-1.82 3-4.66 5.14-7.44 7.25s-5.93 4.36-9.25 5.5h.11a13.35 13.35 0 0 1-4.82.79c-5.13-.16-10.6-4.29-15.76-3.32l-.58.13c-5.28 1.43-9.33 9.73-9.37 15v1.22c0 .14 0 .28.05.42s.06.53.1.78.06.31.1.46.09.45.15.67.09.31.14.46.13.41.2.61.12.3.18.44.16.38.25.56l.22.42c.1.17.19.35.3.52l.26.4.34.48.29.37.39.44.32.34.43.41.35.31.47.38.37.29.51.35.38.26.56.33.39.22.63.31.37.18c.3.14.61.27.92.39l.45.17.72.26.52.16.59.18.58.15.56.14.62.13.54.11.65.11.52.08.67.09.5.06.7.06H737.55l.88-.07h.17a28.85 28.85 0 0 0 7.31-1.61c7.47-2.83 13.81-8 19.68-13.43 11.64-10.75 22.64-24.09 23.57-39.91.36-5.71-.69-11.47-1.72-17.16z"
				transform="translate(-115 -59.2)"
				fill="url(#prefix__g)"
				opacity={0.5}
			/>
			<path opacity={0.1} d="M528.94 204.21h94.27v27.29h-94.27z" />
			<path fill={primaryColor} d="M528.94 204.21h94.27v24.81h-94.27z" />
			<circle cx={583.52} cy={192.64} r={14.88} fill={primaryColor} />
			<path d="M555.46 215.54l-.18-.18a2.74 2.74 0 0 0 0-4.37l.16-.2a3 3 0 0 1 0 4.74z" fill="#4d8af0" />
			<path d="M555.46 215.54l-.18-.18a2.74 2.74 0 0 0 0-4.37l.16-.2a3 3 0 0 1 0 4.74z" opacity={0.1} />
			<path d="M555.28 215.54a3 3 0 0 1 0-4.74l.16.2a2.74 2.74 0 0 0 0 4.37zM555.37 210.9" fill="#4d8af0" />
			<path
				d="M631.51 295.6c6.83-2.59 12.62-7.32 18-12.28 10.64-9.82 20.68-22 21.54-36.47.31-5.28-.64-10.54-1.59-15.75-1.91-10.5-3.86-21.12-8.19-30.88a67.83 67.83 0 0 0-21.7-27 7.3 7.3 0 0 0-4.91-1.46c-3 .27-3.76 2.33-4.16 4.3-2.43 12 4.24 23.64 9.12 34.84a127.18 127.18 0 0 1 9.62 35.27c.63 5.16.86 10.74-1.86 15.18-1.66 2.72-4.26 4.7-6.8 6.62-3.8 2.87-8 5.88-12.76 5.74s-10.08-4.23-15-2.91-8.53 8.89-8.56 13.74c-.06 13.14 18.11 14.52 27.25 11.06z"
				fill="#ffd180"
			/>
			<g opacity={0.1}>
				<path d="M647.36 261.35c-1.66 2.72-4.26 4.7-6.8 6.62a31.6 31.6 0 0 1-8.46 5c4.32-.29 8.19-3 11.7-5.69 2.54-1.92 5.14-3.91 6.8-6.62 2.71-4.43 2.49-10 1.86-15.18a127.16 127.16 0 0 0-9.62-35.27c-4.88-11.21-11.56-22.86-9.12-34.84a5.19 5.19 0 0 1 2-3.62 6.53 6.53 0 0 0-1.11 0c-3 .27-3.76 2.33-4.16 4.3-2.43 12 4.24 23.64 9.12 34.84a127.16 127.16 0 0 1 9.62 35.27c.66 5.17.89 10.75-1.83 15.19zM607.52 283.88c0-4.48 3.19-11.29 7.48-13.33a7.85 7.85 0 0 0-2.17.25c-4.83 1.31-8.53 8.89-8.56 13.74-.06 12.26 15.73 14.26 25.28 11.69-9.49 1.38-22.09-1.43-22.03-12.35z" />
			</g>
			<path
				d="M652.87 206.39s27.24-5.45 40.86 0c0 0 8.17-19.07 16.34-19.07s10.89 30 10.89 30l10.89 43.58s51.75 92.61 0 141.63-133.45-5.48-133.45-40.89 16.34-108.94 16.34-108.94 16.34-59.92 21.79-65.37 16.34 19.06 16.34 19.06z"
				transform="translate(-115 -59.2)"
				fill="url(#prefix__h)"
				opacity={0.5}
			/>
			<path
				d="M538.79 150.98s26.18-5.24 39.27 0c0 0 7.85-18.33 15.71-18.33s10.47 28.8 10.47 28.8l10.47 41.89s49.75 89 0 136.15-128.3-5.24-128.3-39.27 15.71-104.73 15.71-104.73 15.71-57.6 20.95-62.84 15.72 18.33 15.72 18.33z"
				fill="#ffd180"
			/>
			<g opacity={0.1} fill="#fff">
				<path d="M633 252.28a207.1 207.1 0 0 0-18.32-48.93l1.65 6.62A207 207 0 0 1 633 252.28zM491.12 293.17c0-34 12.67-91.06 12.67-91.06s15.71-57.6 20.95-62.84 15.71 18.33 15.71 18.33 26.18-5.24 39.27 0c0 0 7.86-18.33 15.71-18.33 3 0 5.31 4.34 6.93 9.65-1.6-7.77-4.32-16.27-8.58-16.27-7.85 0-15.71 18.33-15.71 18.33-13.09-5.24-39.27 0-39.27 0s-10.47-23.56-15.71-18.33-20.95 62.84-20.95 62.84-12.67 57-12.67 91.06c-.01 3.08 1.65 7.6 1.65 6.62z" />
			</g>
			<circle cx={589.85} cy={196.8} r={5.24} fill="#58555d" />
			<circle cx={529.63} cy={196.8} r={5.24} fill="#58555d" />
			<ellipse cx={561.05} cy={202.04} rx={7.85} ry={5.24} fill="#58555d" />
			<path
				fill="#ffd180"
				d="M605.276 195.475l23.566-5.233.568 2.558-23.566 5.233zM605.311 205.937l26.186-5.218.512 2.57-26.186 5.218zM484.622 184.918l.973-2.432 26.183 10.472-.973 2.433zM477.097 198.118l.398-2.59 34.04 5.24-.399 2.59z"
			/>
			<path
				d="M554.52 235.54a119.78 119.78 0 0 1-20.45-1.74 113 113 0 0 1-36.92-13.27l.91-4.23a124.25 124.25 0 0 0 37 13c18.85 3.23 51.27 2.26 84.22-15.92l2.2 4c-23.92 13.22-49.1 18.16-66.96 18.16z"
				opacity={0.1}
			/>
			<path
				d="M619.28 212.41c-33 18.18-65.38 19.15-84.22 15.92a124.25 124.25 0 0 1-37-13l-2.42 3.86a126.27 126.27 0 0 0 38.43 13.61 119.78 119.78 0 0 0 20.46 1.75c17.86 0 43-4.93 67-18.13zm-63.91 21.78a.51.51 0 1 1 .51-.51.51.51 0 0 1-.51.5z"
				fill="#f55f44"
			/>
			<path
				d="M665.3 300.47a5.06 5.06 0 0 0 5.06 5.06 5.06 5.06 0 0 0 5.06-5.06 5.06 5.06 0 0 0-5.06-5.06 5.06 5.06 0 0 0-5.06 5.06zm5.06-2.53a.84.84 0 1 1 .84-.84.84.84 0 0 1-.83.84z"
				transform="translate(-115 -59.2)"
				opacity={0.1}
				fill="url(#prefix__i)"
			/>
			<path
				d="M550.81 241.27a4.56 4.56 0 0 0 4.56 4.56 4.56 4.56 0 0 0 4.56-4.56 4.56 4.56 0 0 0-4.56-4.56 4.56 4.56 0 0 0-4.56 4.56zm4.56-2.28a.76.76 0 1 1 .76-.76.76.76 0 0 1-.76.76z"
				fill="#4d8af0"
			/>
			<path d="M612.57 213.93c-69.69 41-109.85 3-109.85 3z" fill="#ffd180" />
			<path
				d="M918.75 474.56c-4.27-12.11-50 22-50 22l-10.57-.63-20.34-18.84 14.2-14.2L732.8 360.64a30.08 30.08 0 0 0-23.31-7L610.36 366c-.43-5.68-3.93-12.43-8.88-19.32-10.17-16.68-31.58-35.51-39.48-42.2L549.88 223l10.27-15.41a51.85 51.85 0 0 1-5.6-1.88l2.17-3.26-.8-.22 1-1.18h-.12l25.58-29.6a11.22 11.22 0 0 0-.84-15.55l-57.25-43.5a31.57 31.57 0 0 0 2.44-13.1c.45-8.64-3.42-17.41-16.39-23.9a126.51 126.51 0 0 0-25.08-8.86 82.3 82.3 0 0 0-43.36.64c-.23-.29-.48-.58-.74-.88-17.62-20.14-40.73 8.8-41.63 10l-90.32 100.46a18.35 18.35 0 0 0 4.52 24.46l47.81 35.85-.15.31 2.7 2c-2 4-4.79 6.7-8.44 7.11l7.32 3.66a8.42 8.42 0 0 1-3.9 1.47l33.52 16.76c0 17.42 1.8 97.17 30.12 136.32A72.39 72.39 0 0 0 433 418s2.41-1.31 6.81-3.43l5.06 10.13a59.24 59.24 0 0 0 61.37 32.15l157.35-22.48-1.67 5 .9-.13-51 153 8.42 2.81-.16.3 1.19.51-10.61 20-33.39 25.68s97.59 48.79 107.86 41.09-36-41.09-36-41.09l-2.57-10.27 11.23-23.71 9.41 3.14 75.62-151.24 2.57-5.14 51.18 64L811 503.9l1.56 1.58.13-.13 20 20.24 14.49 39.55s75.82-78.47 71.57-90.58zm-397-294.1l-1-1.16c-6.1 7.63-16.89 16.86-28.92 23.11V194l.57-.5v-3.66a55.5 55.5 0 0 0 15.7-56.35L541.32 159zM409 85.63l-.8-.8.81.8zm-26.55 53.48q-.33 4-.27 8.05a83.63 83.63 0 0 0 .65 11.73c1.71 13.59 6.58 24.7 16.61 30 8.74 4.6 14.49 4.35 18.15 1.21l.4.36a39.42 39.42 0 0 0 4.06 15.28 161.62 161.62 0 0 1-52.81-21.27s.06.68.13 1.9l-13.74-13.74z"
				transform="translate(-115 -59.2)"
				fill="url(#prefix__j)"
			/>
			<path fill="#fda57d" d="M518.17 507.27l-22.45 42.41 34.92 14.96 22.45-47.39-34.92-9.98z" />
			<path d="M530.64 564.64l2.49 10s44.9 32.43 34.92 39.91-104.77-39.91-104.77-39.91l32.43-24.95z" fill="#333" />
			<path opacity={0.1} d="M550.7 521.65l-35.33-11.77-10.51 19.84 34.92 14.97 10.92-23.04z" />
			<path fill="#fda57d" d="M677.69 427.83l33.72 34.14 24.75-28.83-38.48-35.63-19.99 30.32z" />
			<path opacity={0.1} d="M699.07 399.17l-19.99 30.33 12.78 12.93 25.93-25.93-18.72-17.33z" />
			<path d="M736.16 433.13l10.27.61s44.4-33.11 48.55-21.35-69.49 88-69.49 88l-14.07-38.42z" fill="#333" />
			<path
				d="M416.45 177.87l51.82-60a10.9 10.9 0 0 0-.82-15.11L354.69 17.3 341 38.66l87.39 67.27-37.1 40.68z"
				fill="#fda57d"
			/>
			<path d="M410.5 125.62l-18.13 19.88 25.19 31.3 26-30.06a75.76 75.76 0 0 1-33.06-21.12z" opacity={0.1} />
			<path
				d="M266 190.89l-58.67-44a17.83 17.83 0 0 1-4.39-23.76l87.79-97.69 18 18L248 119.09l35.9 35.9z"
				fill="#fda57d"
			/>
			<path d="M253.59 182.03l9.6 7.2 18-35.9-22.6-22.53c.48 7.64 1.83 37.33-5 51.23z" opacity={0.1} />
			<path fill="#4d8af0" d="M550.69 365.14l-53.86 161.57 53.86 17.95 89.75-179.52-71.8-17.95-17.95 17.95z" />
			<path opacity={0.1} d="M548.19 370.13l-2.69 8.08 56.55-8.08 22.09 27.62 13.81-27.62-71.81-17.95-17.95 17.95z" />
			<path d="M290.61 25.55s23-29.66 40.47-9.7-27.44 22.45-27.44 22.45z" fill="#fda57d" />
			<path
				d="M317.32 329.24l17.35 34.71a57.54 57.54 0 0 0 59.61 31.23l210.26-30 71.81 89.76 53.85-53.85-115.85-99.3a29.22 29.22 0 0 0-22.64-6.81z"
				fill="#4d8af0"
			/>
			<path
				d="M264.56 135.59s4.73 58.3-13.22 60.3l35.9 18s-2 105.71 35.9 143.61c0 0 69.81-37.9 143.61-35.9s-18-71.81-18-71.81l-12.12-81.72 10-15a75 75 0 0 1-34.92-22.45c-10 12.47-32.86 29.38-52.69 29.38h-8.58c-29.56 0-61-6-85.91-21.9z"
				opacity={0.1}
			/>
			<path
				d="M261.23 130.6S266 188.9 248 190.89l35.9 18s-2 105.71 35.9 143.61c0 0 69.81-37.9 143.61-35.9s-18-71.81-18-71.81l-12.12-81.72 10-15a75 75 0 0 1-34.92-22.45c-10 12.47-32.86 29.38-52.69 29.38h-8.58c-29.56 0-61-8.47-85.91-24.4z"
				fill="#3ad29f"
			/>
			<path
				d="M308.52 114.16v20a38.3 38.3 0 0 0 11.22 27.08l42.64 42.64 14.19-28.39a35.6 35.6 0 0 0 3.76-15.92v-45.41z"
				fill="#fda57d"
			/>
			<path d="M309.07 137.25c0 .74 0 1.47.07 2.21a53.84 53.84 0 0 0 71.74-.06v-22.19h-71.81z" opacity={0.1} />
			<circle cx={344.42} cy={96.22} r={53.85} fill="#fda57d" />
			<path
				d="M308.52 81.03h89.76s35.9-35.9 0-53.85a122.89 122.89 0 0 0-24.36-8.6c-54.59-13.84-106.5 31.31-99.48 87.19 1.66 13.2 6.39 24 16.13 29.11 37.89 19.92 17.95-53.85 17.95-53.85z"
				opacity={0.1}
			/>
			<path
				d="M308.52 78.54h89.76s35.9-35.9 0-53.85a122.89 122.89 0 0 0-24.36-8.6c-54.59-13.84-106.5 31.31-99.48 87.19 1.66 13.2 6.39 24 16.13 29.11 37.89 19.95 17.95-53.85 17.95-53.85z"
				fill="#333"
			/>
			<ellipse cx={311.12} cy={96.92} rx={4.99} ry={8.73} fill="#fda57d" />
			<path
				opacity={0.1}
				d="M283.68 207.93l2.5-7.49 7.48 4.99-9.98 2.5zM445.55 244.8s-27.16 13-34.65 25.5M433.35 163.03l-2.49 7.48-4.99-7.48h7.48z"
			/>
			<path
				d="M308.52 78.54h89.76s35.9-35.9 0-53.85a122.89 122.89 0 0 0-24.36-8.6c-54.59-13.84-106.5 31.31-99.48 87.19 1.66 13.2 6.39 24 16.13 29.11 37.89 19.95 17.95-53.85 17.95-53.85z"
				fill="#333"
			/>
			<path
				d="M550 280.16s18.21 39.59-5.7 43-13-33.16-13-33.16-2.39-10.85-8.21-11.46M572 279.2s-21.65 37.82 1.86 43.3 15.89-31.87 15.89-31.87 3.34-10.59 9.2-10.69"
				opacity={0.1}
			/>
			<path
				d="M547.89 279.05s18.21 39.59-5.7 43-13-33.16-13-33.16-2.39-10.88-8.19-11.49M573.69 277.53s-21.69 37.83 1.86 43.27 15.89-31.87 15.89-31.87 3.34-10.59 9.2-10.69"
				fill="#ffd180"
			/>
			<path
				fill="#58555d"
				opacity={0.5}
				d="M534.52 313.82h.41v7.73h-.41zM541.14 313.82h.41v7.73h-.41zM537.55 311.36h.41v10.81h-.41zM577.52 312.17h.41v7.73h-.41zM584.14 312.17h.41v7.73h-.41zM580.55 309.7h.41v10.81h-.41z"
			/>
			<circle
				cx={664.4}
				cy={780.16}
				r={47.59}
				transform="rotate(-18.54 425.67 1102.95)"
				fill="url(#prefix__k)"
				opacity={0.5}
			/>
			<circle cx={664.4} cy={780.16} r={44.55} transform="rotate(-18.54 425.67 1102.95)" fill="#f55f44" />
			<path
				d="M545.81 839.88c-6.4 2.15-14.37.62-17.34-5.52-1.71-3.55-1.3-7.52-.9-11.36.44-4.21.81-7.84-1.56-10.19a10.79 10.79 0 0 0-4.22-2.21c-2-.67-4.16-1.23-6.22-1.77a61.81 61.81 0 0 1-10.72-3.52c-6.8-3.19-11.15-8.58-11.63-14.42-.41-5 2-9.56 4.3-13.93s4.62-8.71 3.52-13c-1.49-5.79-8.44-8.54-14.56-11l-1-.38c-7.48-3-15.5-9.33-13.5-17.45.7-2.83 2.49-5 4.22-7a21.26 21.26 0 0 0 3-4.29c2.7-5.69-1-12.27-2.65-14.84-1.29-2-2.82-3.84-4.3-5.67a54.82 54.82 0 0 1-6.13-8.68l-.28-.52c-4.06-7.68-4.14-8-3.8-16.37v-1l3.54.14v1c-.3 7.59-.3 7.59 3.39 14.57l.28.52a51.37 51.37 0 0 0 5.75 8.11c1.53 1.89 3.11 3.85 4.5 5.94 4.29 6.49 5.34 13.16 2.89 18.31a24.2 24.2 0 0 1-3.52 5c-1.54 1.84-3 3.58-3.5 5.62-1.56 6.31 6.41 11.33 11.37 13.31l.95.38c6.57 2.6 14.75 5.84 16.69 13.37 1.44 5.59-1.23 10.63-3.82 15.51-2.17 4.1-4.23 8-3.9 12 .44 5.37 5.25 9.46 9.6 11.51a58.23 58.23 0 0 0 10.11 3.3c2.12.55 4.31 1.13 6.45 1.84a13.86 13.86 0 0 1 5.6 3.06c3.57 3.54 3.07 8.39 2.59 13.08-.36 3.5-.71 6.81.57 9.45 2.31 4.78 9.47 5.48 14.45 3.13 4.08-1.92 7.29-5.19 10.69-8.64 1.1-1.12 2.24-2.27 3.4-3.37 6.34-6 12.75-8.62 18.55-7.61a26.17 26.17 0 0 1 5.35 1.73 26.43 26.43 0 0 0 4.13 1.42 12.73 12.73 0 0 0 14.55-9.32c.13-.59.22-1.21.32-1.86.31-2.08.66-4.44 2.32-6.27s4.29-2.5 6.16-2.93l19.3-4.46.8 3.45-19.3 4.46c-1.83.42-3.42.86-4.33 1.86s-1.18 2.67-1.43 4.41c-.1.68-.21 1.39-.36 2.09a16.27 16.27 0 0 1-18.78 12 29.47 29.47 0 0 1-4.69-1.6 23.16 23.16 0 0 0-4.63-1.52c-5.88-1-11.67 3.07-15.5 6.69-1.11 1.05-2.23 2.19-3.31 3.28-3.47 3.52-7.05 7.17-11.7 9.36a16.63 16.63 0 0 1-1.76.8z"
				transform="translate(-115 -59.2)"
				fill="url(#prefix__l)"
				opacity={0.5}
			/>
			<path
				d="M431.29 778.92c-6.4 2.15-14.37.62-17.34-5.52-1.71-3.55-1.3-7.52-.9-11.36.44-4.21.81-7.84-1.56-10.19a10.79 10.79 0 0 0-4.22-2.21c-2-.67-4.16-1.23-6.22-1.77a61.81 61.81 0 0 1-10.72-3.52c-6.8-3.19-11.15-8.58-11.63-14.42-.41-5 2-9.56 4.3-13.93s4.62-8.71 3.52-13c-1.49-5.79-8.44-8.54-14.56-11l-1-.38c-7.48-3-15.5-9.33-13.5-17.45.7-2.83 2.49-5 4.22-7a21.26 21.26 0 0 0 3-4.29c2.7-5.69-1-12.27-2.65-14.84-1.29-2-2.82-3.84-4.3-5.67a54.82 54.82 0 0 1-6.13-8.68l-.28-.52c-4.06-7.68-4.14-8-3.8-16.37v-1l3.54.14v1c-.3 7.59-.3 7.59 3.39 14.57l.28.52a51.37 51.37 0 0 0 5.75 8.11c1.53 1.89 3.11 3.85 4.5 5.94 4.29 6.49 5.34 13.16 2.89 18.31a24.2 24.2 0 0 1-3.52 5c-1.54 1.84-3 3.58-3.5 5.62-1.56 6.31 6.41 11.33 11.37 13.31l.95.38c6.57 2.6 14.75 5.84 16.69 13.37 1.44 5.59-1.23 10.63-3.82 15.51-2.17 4.1-4.23 8-3.9 12 .44 5.37 5.25 9.46 9.6 11.51a58.23 58.23 0 0 0 10.11 3.3c2.12.55 4.31 1.13 6.45 1.84a13.86 13.86 0 0 1 5.6 3.06c3.57 3.54 3.07 8.39 2.59 13.08-.36 3.5-.71 6.81.57 9.45 2.31 4.78 9.47 5.48 14.45 3.13 4.08-1.92 7.29-5.19 10.69-8.64 1.1-1.12 2.24-2.27 3.4-3.37 6.34-6 12.75-8.62 18.55-7.61a26.17 26.17 0 0 1 5.35 1.73 26.43 26.43 0 0 0 4.13 1.42 12.73 12.73 0 0 0 14.55-9.32c.13-.59.22-1.21.32-1.86.31-2.08.66-4.44 2.32-6.27s4.29-2.5 6.16-2.93l19.3-4.46.8 3.45-19.3 4.46c-1.83.42-3.42.86-4.33 1.86s-1.18 2.67-1.43 4.41c-.1.68-.21 1.39-.36 2.09a16.27 16.27 0 0 1-18.78 12 29.47 29.47 0 0 1-4.69-1.6 23.16 23.16 0 0 0-4.63-1.52c-5.88-1-11.67 3.07-15.5 6.69-1.11 1.05-2.23 2.19-3.31 3.28-3.47 3.52-7.05 7.17-11.7 9.36a16.63 16.63 0 0 1-1.76.8z"
				fill="#f55f44"
			/>
			<path
				d="M546.78 689.27s24.65-3.73 36.72 30.67M519.51 744.07s-18.3-25.9 14.31-54.46M527 734.61s-8.83-13.59.43-25.77M542.81 703.68s11.69 4.62 13.33 25.43M556.53 679.32s18.26 3.49 31 28.6M533 687.21s8.63-6.1 16.64-2.91M539.52 744.8s11.54 7.34 41.28-13.84M537.47 759.4s7.22 7.19 22.25 1.08M516.06 695.57a39 39 0 0 0-5.38 31.71M525.75 741.97s-.95 6.73 6.58 10.07M585.61 734.18s-.46 13-7.66 13.78M546.1 753.3a28.82 28.82 0 0 0 24-8M557.22 706.86s6.25 4.31 5.63 12M533.38 715.39s-1.74 9.13 2.75 14.56M538.66 713.62s6.42 8 4.67 13.92"
				fill="none"
				stroke="#000"
				strokeMiterlimit={10}
				opacity={0.2}
			/>
		</svg>
	);
};

UndrawChilling.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawChilling;
