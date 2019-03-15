import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTeamWork = _props => {
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
		<svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1036.608 758.001" style={style} {...props}>
			<circle cx={578.606} cy={373} r={373} fill="#f2f2f2" />
			<circle cx={692.607} cy={136.001} r={97} fill="#ff6584" />
			<path
				d="M285.964 72.484l2.651 55.276c10.991 14.66 22.848 31.434 34.55 49.716l1.67-84.33.923.59c-13.536-9.67-27.297-17.069-40.716-21.765zM286.683 125.192l-2.568-53.545c-15.072-5.14-29.695-6.845-43.062-4.461-.696.124-1.38.267-2.061.411 3.396 3.644 23.189 25.164 47.69 57.595zM408.376 191.139l.89.849q-5.48-10.305-11.616-20.039l-24.925 98.073-.422-.372q2.703 6.454 5.141 12.82zM370.406 135.383l.918.735a258.753 258.753 0 0 0-44.628-41.701l-1.704 85.937q16.335 25.778 29.25 50.782zM189.602 162.213a216.052 216.052 0 0 0 8.537 42.7l148.632 15.331c-7.76-14.308-15.77-27.732-23.545-39.967L189.98 163.38zM203.546 220.954l-.4-1.166 150.429 13.37q-2.726-5.331-5.513-10.522l-149.18-15.387-.392-1.168q2.255 7.354 5.056 14.873zM395.956 169.905l.904.797a309.002 309.002 0 0 0-24.667-33.563l-16.383 97.048q8.517 16.722 15.429 32.973zM392.775 332.019c5.978 25.87 8.243 50.331 6.748 73.113 8.412-17.924 40.403-92.178 28.445-161.38zM231.142 273.257a298.924 298.924 0 0 0 25.949 30.46l-.363-1.296 133.811 27.528a371.629 371.629 0 0 0-13.01-42.596zM285.528 126.095c-26.519-35.082-47.443-57.255-47.744-57.572l.345-.74c-20.123 4.57-34.332 18.26-42.15 38.078zM378.683 285.761c.494 1.32.996 2.642 1.473 3.956a369.221 369.221 0 0 1 11.703 38.435l34.86-87.43.851.854a146.38 146.38 0 0 0-11.13-35.228q-3.084-6.603-6.457-13.006zM321.668 177.839c-11.582-18.067-23.304-34.64-34.17-49.126l-91.602-20.7-.31-1.155c-5.72 15.06-7.81 33.56-6.078 54.223z"
				fill={primaryColor}
			/>
			<path
				d="M391.081 332.246l-132.832-27.327c55.872 57.355 134.04 101.341 139.03 104.122 2.327-25.27-.313-51.226-6.198-76.795zM376.588 284.999l.03-.088a501.541 501.541 0 0 0-21.836-49.374l-150.799-13.405q3.84 10.17 8.68 20.557a179.711 179.711 0 0 0 16.701 28.133zM568.41 258.67l-33.213 44.265c-.885 18.3-2.452 38.783-5.1 60.327l55.074-63.884.334 1.042c-4.258-16.081-10.137-30.556-17.477-42.732zM535.346 299.724l32.174-42.877c-8.33-13.572-18.505-24.212-30.32-30.902a64.11 64.11 0 0 0-1.85-.997c.292 4.972 1.81 34.17-.004 74.776zM587.011 428.134l.144 1.22q2.353-11.43 3.834-22.841l-81.748 59.637-.088-.555q-2.034 6.694-4.217 13.152zM593.33 360.973l.237 1.152a258.753 258.753 0 0 0-7.774-60.582l-56.124 65.1q-3.86 30.273-9.862 57.768zM436.963 266.318a216.052 216.052 0 0 0-20.66 38.333L521 411.258c3.15-15.97 5.543-31.417 7.357-45.8l-91.848-97.999zM410.237 320.454l.436-1.154 107.33 106.244q1.302-5.845 2.466-11.62l-105.083-107 .443-1.15q-2.954 7.102-5.592 14.68zM590.989 403.858l.188 1.19a309.003 309.003 0 0 0 2.409-41.582l-74.517 64.296q-4.105 18.311-9.148 35.236zM485.14 526.687c-11.896 23.739-25.753 44.023-41.435 60.615 17.91-8.439 89.91-45.224 124.838-106.15z"
				fill={primaryColor}
			/>
			<path
				d="M398.131 378.338a298.924 298.924 0 0 0 .558 40.01l.547-1.229 85.502 106.549a371.63 371.63 0 0 0 17.148-41.105zM533.881 299.683c1.951-43.933-.022-74.356-.051-74.793l.737-.349c-18.413-9.316-38.089-7.834-56.75 2.443zM503.79 482.072c-.46 1.332-.917 2.67-1.388 3.987a369.22 369.22 0 0 1-15.5 37.066l82.611-45.103.112 1.2a146.38 146.38 0 0 0 13.897-34.23q1.836-7.053 3.322-14.136zM528.713 362.587c2.603-21.302 4.145-41.543 5.016-59.63l-57.35-74.368.499-1.089c-14.01 7.952-27.42 20.867-39.265 37.886zM483.69 525.782l-84.875-105.769c6.45 79.81 38.599 163.545 40.668 168.868 17.91-17.978 32.432-39.653 44.208-63.099zM502.663 480.149l.079-.049a501.54 501.54 0 0 0 14.674-51.954L409.822 321.64q-3.529 10.282-6.426 21.37a179.711 179.711 0 0 0-5.08 32.318zM237.239 317.768l19.607 51.75c14.984 10.544 31.445 22.833 48.225 36.602l-24.477-80.716 1.06.275c-15.863-5.012-31.236-7.795-45.45-8.113zM254.215 367.673l-18.993-50.129c-15.922-.23-30.357 2.669-42.332 9.068-.623.332-1.23.68-1.833 1.028 4.356 2.416 29.831 16.763 63.158 40.033zM390.332 392.775l1.109.533q-8.396-8.107-17.24-15.467l6.61 100.974-.517-.223q4.565 5.302 8.852 10.602zM336.988 351.486l1.1.415a258.753 258.753 0 0 0-55.332-25.864l24.942 82.255q23.503 19.467 43.514 39.255zM173.33 432.888a216.052 216.052 0 0 0 21.318 37.971l146.092-31.361c-11.802-11.21-23.569-21.5-34.745-30.733l-131.943 25.118zM204.75 484.443l-.742-.986 147.195-33.78q-4.24-4.229-8.495-8.304l-146.63 31.478-.735-.99q4.418 6.297 9.406 12.582zM371.957 376.42l1.107.479a309.003 309.003 0 0 0-33.834-24.295l14.417 97.36q13.269 13.27 24.865 26.589z"
				fill={primaryColor}
			/>
			<path
				d="M419.04 531.579c13.683 22.756 23.398 45.319 29.018 67.447 2.46-19.646 9.933-100.152-22.83-162.27zM247.16 525.655a298.924 298.924 0 0 0 34.094 20.948l-.746-1.12 135.767-15.18a371.627 371.627 0 0 0-25.54-36.49zM253.395 368.889c-36.063-25.167-62.816-39.787-63.2-39.996l.099-.81c-17.726 10.566-27.006 27.978-28.316 49.242zM391.34 491.942c.879 1.103 1.765 2.205 2.625 3.307a369.22 369.22 0 0 1 23.01 32.935l6.128-93.923 1.074.55a146.38 146.38 0 0 0-21.473-30.064q-4.975-5.326-10.162-10.373zM303.76 406.928c-16.599-13.602-32.87-25.74-47.681-36.159l-93.515 8.63-.653-1.004c-.783 16.09 2.946 34.33 10.98 53.446z"
				fill={primaryColor}
			/>
			<path
				d="M417.5 532.319l-134.773 15.069c70.863 37.276 158.8 54.947 164.404 56.049-5.597-24.752-16.13-48.62-29.63-71.118zM389.113 491.865v-.093a501.541 501.541 0 0 0-36.027-40.207L205.53 485.429q6.795 8.484 14.61 16.867a179.711 179.711 0 0 0 24.578 21.592z"
				fill={primaryColor}
			/>
			<path
				d="M1036.608 634.001c0 44.735-230.126 124-514 124s-514-79.265-514-124 230.126-38 514-38 514-6.735 514 38z"
				fill="#3f3d56"
			/>
			<path
				d="M1036.608 634.001c0 44.735-230.126 124-514 124s-514-79.265-514-124 230.126-38 514-38 514-6.735 514 38z"
				opacity={0.1}
			/>
			<ellipse cx={522.608} cy={634.001} rx={514} ry={81} fill="#3f3d56" />
			<path
				d="M611.72 549.339c0 48.737-67.933 33.662-151.112 33.662s-150.104 15.075-150.104-33.662S378.43 490 461.608 490s150.113 10.6 150.113 59.338z"
				opacity={0.1}
			/>
			<path
				d="M611.72 537.339c0 48.737-67.933 33.662-151.112 33.662s-150.104 15.075-150.104-33.662S378.43 478 461.608 478s150.113 10.6 150.113 59.338z"
				fill="#3f3d56"
			/>
			<path
				d="M344.138 403.233a21.87 21.87 0 0 1 5.987-3.002 152.655 152.655 0 0 1 42.182-9.183c12.542-.889 26.136.167 35.933 8.05a12.355 12.355 0 0 1 3.645 4.247c1.232 2.66.859 5.75.46 8.655a9.78 9.78 0 0 1-.84 3.258c-1.318 2.51-4.564 3.39-7.383 3.088s-5.464-1.493-8.245-2.046a36.856 36.856 0 0 0-5.207-.53l-17.44-.945c-10.844-.587-21.832-1.164-32.47 1.024a32.343 32.343 0 0 0-9.38 3.233c-2.43 1.364-4.067 3.322-6.321.802-3.96-4.427-6.153-12.562-.92-16.651z"
				fill="#2f2e41"
			/>
			<path
				d="M371.163 410.945s23.457-10.515 32.354 1.618-4.853 7.28-4.853 7.28l-15.368 4.853-16.987-3.236z"
				fill="#f2f2f2"
			/>
			<path
				d="M372.376 403.26s3.235 15.37.809 19.414 13.75 9.706 13.75 9.706l15.369-6.47s-4.044-25.076 0-29.929z"
				fill="#ffb9b9"
			/>
			<path
				d="M372.376 403.26s3.235 15.37.809 19.414 13.75 9.706 13.75 9.706l15.369-6.47s-4.044-25.076 0-29.929z"
				opacity={0.1}
			/>
			<path
				d="M357.22 588.056a88.474 88.474 0 0 1 5.344 14.007 1.14 1.14 0 0 0 1.416.942l14.388-.016c1.775-.002 4.157-.572 4.139-2.348-.013-1.247-1.288-2.025-2.237-2.835-2.634-2.247-3.32-5.953-4.41-9.239a31.343 31.343 0 0 0-11.663-15.663 6.826 6.826 0 0 0-2.493-1.232 6.951 6.951 0 0 0-2.733.148c-2.526.51-11.957 2.253-10.176 5.926.767 1.582 3.61 3.229 4.802 4.706a33.797 33.797 0 0 1 3.622 5.604zM407.25 571.369a32.69 32.69 0 0 1-1.691 3.11c-2.085 3.437-4.544 6.644-6.486 10.164a16.778 16.778 0 0 0-2.363 7.074 7.857 7.857 0 0 0 2.746 6.685c2.088 1.585 4.952 1.659 7.547 1.29s5.177-1.114 7.791-.918c-.881-4.988 3.326-9.378 4.378-14.333.295-1.392.34-2.835.735-4.202a20.59 20.59 0 0 1 1.629-3.6 46.556 46.556 0 0 0 4.393-12.96c.1-.546-12.789-.636-13.998-.375-3.773.816-3.22 4.936-4.68 8.065z"
				fill="#575a89"
			/>
			<path
				d="M307.913 493.003c-3.68 5.758-2.832 13.388-.247 19.714s6.697 11.917 9.512 18.143c1.794 3.97 3.053 8.178 5.073 12.037 2.503 4.778 6.156 8.99 7.836 14.117 1.07 3.267 1.316 6.849 3.05 9.818a30.092 30.092 0 0 0 3.572 4.432 40.956 40.956 0 0 1 8.234 14.708c1.585-4.721 6.33-7.817 11.204-8.837s9.924-.328 14.855.369c-2.75-4.261-5.528-8.577-7.167-13.376-1.586-4.642-2.054-9.58-3.122-14.367-2.19-9.818-6.87-18.873-11.502-27.801l23.81-1.889a92.829 92.829 0 0 1 11.699-.434c6.145.29 12.166 1.796 18.279 2.493s12.58.514 18.028-2.346a86.39 86.39 0 0 0-15.5 51.02 19.753 19.753 0 0 1 29.901 7.056c9.331-12.75 8.222-30.502 15.616-44.466 1.52-2.872 3.384-5.546 5.025-8.35a123.09 123.09 0 0 0 7.939-17.545c2.068-5.29 4.151-11.176 2.168-16.498a17.226 17.226 0 0 0-3.535-5.436c-4.266-4.703-10.204-8.183-16.552-8.328-9.746-.222-17.796 7.002-26.345 11.686a60.623 60.623 0 0 1-33.269 6.9c-11.742-.832-22.957-4.676-34.144-8.061a162.454 162.454 0 0 0-17.04-4.396c-4.798-.9-9.367.097-14.095 1.324-5.147 1.336-10.32 3.677-13.283 8.313z"
				fill="#2f2e41"
			/>
			<path
				d="M409.584 387.893a24.286 24.286 0 0 1-24.266 24.265 23.681 23.681 0 0 1-4.312-.388 24.265 24.265 0 1 1 28.578-23.877z"
				fill="#ffb9b9"
			/>
			<path
				d="M371.163 410.945s4.448 2.022 6.066 3.64 6.471 10.515 14.56 4.853 8.897-8.897 11.324-8.897 5.662 4.853 5.662 4.853l22.244 66.731a93.16 93.16 0 0 1-20.626 17.39c-12.942 8.09-28.31 12.134-35.59 8.898s-21.03-5.662-23.458-12.133-6.47-25.883-6.47-25.883l11.324-49.341z"
				fill="#f2f2f2"
			/>
			<path
				d="M368.04 478.435c1.763-3.809 2.02-8.12 2.169-12.315a74.654 74.654 0 0 0-.33-12.459c-.716-5.41-2.478-10.623-3.591-15.966a67.5 67.5 0 0 1-1.415-14.25c.017-2.184.175-4.484 1.365-6.315.83-1.278 2.129-2.267 2.648-3.7 1.017-2.81-1.497-5.75-4.251-6.908a16.726 16.726 0 0 0-10.471-.42 49.818 49.818 0 0 0-9.85 4.03 22.549 22.549 0 0 0-6.434 4.16c-2.511 2.597-3.615 6.216-4.507 9.717-.713 2.803-1.347 5.725-.804 8.566.881 4.612 4.641 8.081 6.646 12.328 2.327 4.932 2.17 10.678 1.245 16.052s-2.57 10.629-3.076 16.058.27 11.266 3.673 15.529c1.386 1.736 5.146 5.853 7.684 5.387 1.994-.366 4.884-4.755 6.49-6.146 4.64-4.019 10.144-7.593 12.808-13.348zM410.418 408.307c.07 4.512-1.918 8.8-4.256 12.658s-5.086 7.508-6.81 11.677a26.764 26.764 0 0 0-1.249 16.466 53.12 53.12 0 0 0 1.785 5.51l4.432 12.156a21.1 21.1 0 0 0 2.57 5.395 17.424 17.424 0 0 0 3.492 3.36 32.597 32.597 0 0 0 11.396 5.945 19.272 19.272 0 0 0 12.671-.723 183.365 183.365 0 0 1 7.872-48.597c.886-2.912 1.854-5.977 1.17-8.943-.765-3.322-3.433-5.816-5.97-8.093-7.756-6.966-16.286-14.283-26.67-15.222-6.008-.543-.484 5.15-.433 8.411z"
				fill="#2f2e41"
			/>
			<path
				d="M357.337 502.35c.615 1.204.998 2.515 1.606 3.723a20.803 20.803 0 0 0 3.3 4.438c5.409 5.997 12.02 11.97 20.087 12.332a5.508 5.508 0 0 0 2.368-.298 4.694 4.694 0 0 0 2.52-3.602c.571-3.132-.812-6.258-2.196-9.126-3-6.214-6.377-12.587-11.995-16.595a22.506 22.506 0 0 0-19.417-2.921c-2.926.901-7.779 2.475-3.904 5.145 2.939 2.026 5.927 3.568 7.63 6.903zM392.21 423.225a18.078 18.078 0 0 0-3.796-6.12 14.083 14.083 0 0 0-5.798-2.938 31.71 31.71 0 0 0-8.507-1.22c-3.425-.02-7.397.898-8.852 4-1.155 2.463-.26 5.38.903 7.838a7.685 7.685 0 0 0 2.398 3.24c1.478.998 3.388.966 5.14 1.3a23.703 23.703 0 0 1 7.595 3.442l6 3.627 10.306 6.23c-.272-.165-.175-7.232-.492-8.39-1.02-3.731-3.315-7.476-4.897-11.009z"
				fill="#ffb9b9"
			/>
			<path
				d="M362.19 600.232c-2.412 3.277-1.929 7.961-4.065 11.424-1.851 3.002-5.34 4.576-7.657 7.235a19.396 19.396 0 0 0-1.968 2.832c-2.149 3.599-3.895 8.21-1.78 11.829 1.703 2.91 5.28 4.048 8.562 4.823 4.147.98 8.456 1.764 12.651 1.015s8.296-3.317 9.791-7.308a28.23 28.23 0 0 1 1.047-2.954c2.274-4.476 9.406-4.525 11.733-8.974 1.629-3.113.132-6.877-1.365-10.056l-4.57-9.71c-1.517-3.221-7.665-1.368-10.87-2.14-4.18-1.008-8.502-2.117-11.51 1.984z"
				fill="#2f2e41"
			/>
			<path
				d="M397.54 591.89a12.996 12.996 0 0 0-4.135 5.666c-2.262 5.218-3.039 10.939-3.793 16.576a20.075 20.075 0 0 0-.131 6.799c.975 4.603 5.146 7.994 9.637 9.401s9.306 1.191 14.007.96a10.028 10.028 0 0 0 4.402-.894c2.363-1.302 3.285-4.364 2.88-7.03s-1.862-5.04-3.288-7.33-2.884-4.661-3.293-7.327c-.687-4.485 1.252-11.07-1.503-15.127-2.762-4.066-11.098-4.276-14.783-1.693zM408.973 375.246a6.16 6.16 0 0 0-2.671-3.487 14.136 14.136 0 0 0-.564-4.601c-1.47-4.345-4.951-4.096-8.236-6.016-1.425-.834-1.337-1.57-2.079-2.94a10.907 10.907 0 0 0-4.202-4.287c-2.107-1.343-4.332-2.725-6.825-2.895-5.239-.357-9.256 4.57-14.263 6.152-2.207.697-4.579.726-6.797 1.384s-4.433 2.233-4.763 4.524c-.153 1.057.116 2.142-.038 3.2-.308 2.101-2.152 3.573-3.386 5.301-2.73 3.822-2.417 9.222-.235 13.38a18.807 18.807 0 0 0 1.574 2.463 15.15 15.15 0 0 0 1.662 5.626c2.182 4.159 5.938 7.266 9.861 9.848a23.276 23.276 0 0 1-.582-4.2 2.897 2.897 0 0 1 .179-1.39c.437-.914 1.591-1.157 2.472-1.657 1.823-1.036 2.538-3.329 2.59-5.425s-.391-4.196-.171-6.282a3.432 3.432 0 0 1 1.175-2.525 4.059 4.059 0 0 1 2.215-.528c3.735-.152 7.639-.22 10.934-1.987a16.203 16.203 0 0 1 3.403-1.722c2.8-.73 5.662 1.232 7.276 3.635s2.418 5.26 3.907 7.742 4.061 4.694 6.94 4.4a1.152 1.152 0 0 0 .86-.382 1.289 1.289 0 0 0 .158-.733l.161-11.004a16.633 16.633 0 0 0-.555-5.594zM332.179 432.81c-2.315 3.415-4.985 6.7-6.257 10.624-.748 2.308-.98 4.746-1.522 7.11-1.804 7.875-7.015 14.869-7.539 22.93a10.902 10.902 0 0 0 .766 5.265c1.495 3.252 5.072 4.965 8.485 6.043s7.077 1.855 9.801 4.176a30.036 30.036 0 0 1 3.714 4.306 35.976 35.976 0 0 0 17.184 11.757c-.534-3.68-.785-8.117 2.157-10.392 1.593-1.231 3.721-1.45 5.727-1.624l9.477-.819a121.786 121.786 0 0 0-20.775-16.184c-2.62-1.619-5.473-3.327-6.67-6.165a14.89 14.89 0 0 1-.755-5.688 140.155 140.155 0 0 0-1.786-21.04c-.78-4.832-1.813-9.62-2.995-14.37-.331-1.334-2.292-7.315-4.705-5.915-.568.33-1.1 4.124-1.432 4.91a29.785 29.785 0 0 1-2.875 5.075zM441.336 419.902l3.87 8.049a19.34 19.34 0 0 1 2.44 10.884l.23 24.145a35.162 35.162 0 0 1-.794 9.614 7.7 7.7 0 0 1-1.335 2.871 8.973 8.973 0 0 1-2.29 1.844c-7.324 4.577-16.822 7.178-24.561 3.343a33.99 33.99 0 0 1-5.036-3.287c-3.084-2.284-6.214-4.613-8.521-7.68-2.415-3.21-3.799-7.053-5.424-10.726a82.43 82.43 0 0 0-11.205-18.38 4.846 4.846 0 0 1-1.388-2.75c-.048-2.117 2.463-3.159 4.42-3.964 3.346-1.375 6.5-4.03 7.06-7.603 7.112 9.327 14.96 19.182 26.184 22.59a1.158 1.158 0 0 0 1.782-.99c.637-2.665.862-5.41 1.328-8.11a46.202 46.202 0 0 1 4.874-14.057c1.33-2.462 5.634-11.475 8.366-5.793z"
				fill="#2f2e41"
			/>
			<path
				d="M345.294 443.178a37.123 37.123 0 0 1-3.547 16.543 13.67 13.67 0 0 0-1.388 3.645c-.425 2.719 1.123 5.352 2.891 7.46a30.678 30.678 0 0 0 13.117 9.126M429.337 438.363c-.57 1.533-.053 3.23.387 4.805a48.418 48.418 0 0 1 1.764 14.05.511.511 0 0 1-.598.612c-1.867.114-4.004.127-5.27-1.25"
				opacity={0.1}
			/>
			<ellipse cx={746.608} cy={640.001} rx={126} ry={27} opacity={0.1} />
			<path fill="#a0616a" d="M809.608 399.001l-9 9 9 9 9-18h-9z" />
			<path
				d="M811.634 320.96c2.526 1.034 3.727 3.86 4.68 6.418l11.674 31.371 2.273 6.107c1.114 2.994 2.23 5.99 3.172 9.044q.894 2.896 1.578 5.853a15.392 15.392 0 0 1 .539 5.189 14.421 14.421 0 0 1-2.064 5.406 48.394 48.394 0 0 1-16.815 17.246 15.697 15.697 0 0 0-9.127-11.936l6.037-3.32a10.916 10.916 0 0 0 3.383-2.477 7.43 7.43 0 0 0 1.292-5.664 24.341 24.341 0 0 0-1.792-5.681 155.063 155.063 0 0 1-5.265-15.454c-.877-3.1-1.683-6.286-3.42-8.998-1.577-2.46-3.86-4.428-5.292-6.976-2.183-3.882-2.127-8.661-1.163-13.01.814-3.67 2.178-7.203 3.327-10.777.902-2.808 4.28-3.447 6.983-2.34z"
				fill="#d0cde1"
			/>
			<path
				d="M755.972 237.144c-4.642 1.568-8.848 5.235-9.799 10.042-.44 2.228-.17 4.544-.541 6.785-.86 5.197-4.94 9.166-8.702 12.852s-7.648 7.97-7.923 13.231c-.3 5.76 3.877 11.157 3.154 16.88-.84 6.648-7.862 10.956-9.598 17.43-1.16 4.321.261 8.977 2.598 12.793 4.454 7.272 12.066 12.21 20.172 14.856s16.74 3.203 25.266 3.293c10.382.108 21.655-.783 29.456-7.635a23.598 23.598 0 0 0 7.834-15.363c.74-7.937-2.572-16.138-.287-23.776 1.438-4.806 5.045-9.196 4.507-14.184-.527-4.877-4.786-8.334-7.709-12.274-2.728-3.679-4.384-8.023-6.006-12.306l-5.552-14.655c-1.091-2.88-2.29-5.91-4.722-7.801-4.553-3.54-11.875-2.844-17.2-2.114-4.939.677-10.198.342-14.948 1.946z"
				fill="#2f2e41"
			/>
			<path
				d="M760.267 285.44s.543 16.302-1.087 17.932 6.52 12.499 6.52 12.499l14.673-.544 7.608-5.977-6.521-8.695s-2.717-14.128-.544-17.389-20.65 2.174-20.65 2.174z"
				fill="#a0616a"
			/>
			<path
				d="M760.267 285.44s.543 16.302-1.087 17.932 6.52 12.499 6.52 12.499l14.673-.544 7.608-5.977-6.521-8.695s-2.717-14.128-.544-17.389-20.65 2.174-20.65 2.174z"
				opacity={0.1}
			/>
			<path
				fill="#a0616a"
				d="M726.303 411.24l9.238 20.65 7.065-8.695-14.129-18.476-2.174 6.521zM701.578 618.009l-3.804 21.194-6.521 9.238 3.804 2.173 6.521-1.087 7.608-2.717 3.26-12.498 5.978-16.303h-16.846zM771.135 604.967l-2.174 30.432 5.434 4.347 8.695-7.608v-22.28l-11.955-4.891z"
			/>
			<circle cx={769.233} cy={272.126} r={19.563} fill="#a0616a" />
			<path
				d="M784.329 298.438a4.528 4.528 0 0 0-3.77-.072 30.592 30.592 0 0 0-3.45 1.798 15.98 15.98 0 0 1-9.286 1.689 3.195 3.195 0 0 1-1.086-.28 5.222 5.222 0 0 1-.995-.802 5.757 5.757 0 0 0-7.97.687c-.575.716-.969 1.57-1.596 2.24-1.624 1.737-4.304 1.808-6.681 1.803a61.953 61.953 0 0 0-14.68 1.346 26.885 26.885 0 0 0-12.89 6.83 9.817 9.817 0 0 0-2.29 3.265c-.655 1.69-.569 3.59-1.158 5.305-.656 1.91-2.11 3.477-2.699 5.41-.443 1.454-.381 3.074-1.123 4.402 3.176 2.75 5.867 6.415 9.042 9.163 2.103 1.82 4.304 3.79 5.095 6.455a21.13 21.13 0 0 1 .47 5.006c.393 8.038 4.752 15.33 9.627 21.733a24.508 24.508 0 0 0 4.751 5.048 20.621 20.621 0 0 0 8.202 3.293c5.552 1.136 11.266 1.13 16.932 1.073 5.856-.058 11.815-.182 17.381-2.002a15.454 15.454 0 0 0 7.347-4.562c2.29-2.812 3.183-6.88 6.307-8.722a11.462 11.462 0 0 0 2.136-1.275 5.542 5.542 0 0 0 1.309-2.443 37.84 37.84 0 0 0 1.788-10.547 30.687 30.687 0 0 1 .435-6.421 21.835 21.835 0 0 1 2.34-5.314l6.474-11.74c.526-.954.39-2.358.437-3.447a8.499 8.499 0 0 0-1.392-4.407 37.604 37.604 0 0 0-18.705-16.374 7.708 7.708 0 0 1-1.767-.865 7.27 7.27 0 0 1-1.617-1.93c-1.718-2.588-3.816-5.504-6.918-5.343z"
				fill="#d0cde1"
			/>
			<path
				d="M703.653 362.375a46.58 46.58 0 0 0-2.796 9.64 23.422 23.422 0 0 0 2.117 13.365c3.489 7.18 10.356 12.05 15.203 18.394 4.504 5.893 7.186 12.957 11.086 19.266-.68-1.606.146-3.465 1.259-4.808s2.536-2.457 3.352-3.998a11.658 11.658 0 0 0 1.032-3.784c.583-3.912.897-8.163-1.098-11.578-1.501-2.571-4.094-4.279-6.148-6.435a19.181 19.181 0 0 1-4.856-16.603c.395-2.034 1.122-3.986 1.667-5.985a68.465 68.465 0 0 0 1.527-8.16l2.447-16.808c.651-4.47 1.202-9.418-1.33-13.16a5.513 5.513 0 0 0-1.986-1.878 7.136 7.136 0 0 0-2.114-.596c-2.663-.435-6.27-1.601-7.571 1.252-1.57 3.445-2.662 7.2-3.976 10.75z"
				fill="#d0cde1"
			/>
			<path
				d="M796.918 371.57s-32.304 6.25-39.912 6.25h-13.585s-4.89 8.695-4.89 17.39-32.062 130.419-32.062 130.419-30.432 99.988 3.26 100.532 54.885 2.173 55.428-9.238 3.804-158.677 3.804-158.677l5.073 75.723a187.987 187.987 0 0 1-4.32 55.905c-2.432 10.268-2.055 21.524 10.116 23.788 23.366 4.347 52.71.544 52.71-7.608s-15.215-189.108-15.215-189.108-7.608-26.627-11.955-28.801-8.452-16.574-8.452-16.574z"
				fill="#2f2e41"
			/>
			<path
				d="M695.6 647.354l11.955-4.348 8.152-20.65 8.694-1.086s-4.89 10.325-7.608 11.955-7.064 15.216-7.064 15.216 2.174 5.434-8.151 7.607-17.933 3.804-17.933 3.804-1.087-2.173 3.804-7.608 10.602-14.582 10.602-14.582zM768.961 622.357l-2.173 16.302s5.977 8.695 7.607 8.695 10.325-7.608 10.325-7.608-.543-8.151 0-10.325 1.63-12.498 0-13.042-1.63 12.111-1.63 12.111l-7.064 7.452-6.812-4.084z"
				fill="#2f2e41"
			/>
			<ellipse cx={770.863} cy={260.714} rx={21.193} ry={11.412} fill="#2f2e41" />
			<path d="M0 484.66c0 64.016 40.16 115.817 89.79 115.817" fill="#3f3d56" />
			<path
				d="M89.79 600.477c0-64.735 44.817-117.118 100.202-117.118M32.533 490.463c0 60.809 25.61 110.014 57.258 110.014"
				fill={primaryColor}
			/>
			<path d="M89.79 600.477c0-82.717 51.802-149.651 115.818-149.651" fill="#3f3d56" />
			<path
				d="M70.901 601.294s12.734-.392 16.572-3.125 19.587-5.996 20.54-1.613 19.136 21.797 4.76 21.913-33.405-2.239-37.235-4.572-4.637-12.603-4.637-12.603z"
				fill="#a8a8a8"
			/>
			<path
				d="M113.03 616.944c-14.377.116-33.405-2.24-37.235-4.573-2.917-1.777-4.08-8.152-4.469-11.094-.27.012-.425.017-.425.017s.807 10.27 4.637 12.603 22.858 4.688 37.235 4.572c4.15-.033 5.583-1.51 5.504-3.696-.576 1.32-2.159 2.146-5.248 2.17z"
				opacity={0.2}
			/>
		</svg>
	);
};

UndrawTeamWork.propTypes = {
	height: PropTypes.string,
	primaryColor: PropTypes.string
};
export default UndrawTeamWork;
