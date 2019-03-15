import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPersonalNotes = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 812.217 684" style={style} {...props}>
      <path
        d="M787.428 362.861a20.813 20.813 0 1 1 16.331-36.527l-5.499 9.208 8.791-5.717a20.734 20.734 0 0 1 3.914 15.37 20.408 20.408 0 0 1-1.592 5.532 20.809 20.809 0 0 1-21.945 12.134z"
        fill="#57b894"
      />
      <path
        d="M706.853 460.703c5.865-7.198 2.823-17.972-1.465-26.207s-9.757-16.995-7.872-26.086c2.71-13.065 18.096-18.151 30.535-22.98a125.3 125.3 0 0 0 26.133-13.897c3.26-2.265 6.466-4.74 8.74-7.994 3.276-4.686 4.324-10.527 5.25-16.169q4.625-28.19 7.916-56.576"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M787.97 360.024a20.813 20.813 0 1 1 16.33-36.527l-5.499 9.208 8.791-5.717a20.734 20.734 0 0 1 3.914 15.37 20.409 20.409 0 0 1-1.592 5.532 20.809 20.809 0 0 1-21.945 12.134z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M796.691 297.584a20.788 20.788 0 0 0-7.01-18.693l-6.303 8.18 2.228-10.933a20.81 20.81 0 1 0 11.085 21.445z"
        fill="#57b894"
      />
      <path
        d="M797.413 293.8a20.788 20.788 0 0 0-7.011-18.692l-6.303 8.18 2.228-10.932a20.81 20.81 0 1 0 11.086 21.445z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M731.178 387.332a20.81 20.81 0 0 1 1.162-41.336l-1.712 8.402 6.374-8.278a.362.362 0 0 1 .057.007 20.811 20.811 0 1 1-5.881 41.205z"
        fill="#57b894"
      />
      <path
        d="M732.056 383.579a20.81 20.81 0 0 1 1.162-41.335l-1.712 8.401 6.375-8.278a.362.362 0 0 1 .056.007 20.811 20.811 0 1 1-5.88 41.205z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M734.039 428.024a20.801 20.801 0 1 1 4.127-16.269l-14.748 7.954 14.666-.576a20.616 20.616 0 0 1-4.045 8.89z"
        fill="#57b894"
      />
      <path
        d="M734.58 425.187a20.801 20.801 0 1 1 4.127-16.269l-14.748 7.954 14.666-.576a20.616 20.616 0 0 1-4.045 8.89z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path fill={primaryColor} d="M160 7.5h69v77h-69z" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M172 .5h69v77h-69z" />
      <path fill="#f2f2f2" d="M0 94.5h69v77H0z" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M12 87.5h69v77H12z" />
      <path fill={primaryColor} d="M311 129.5h69v77h-69z" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M323 122.5h69v77h-69z" />
      <ellipse cx={489.5} cy={472.5} rx={86.5} ry={98.1} fill="#36334a" />
      <path
        d="M600.533 146.074a141.135 141.135 0 0 1-66.078 11.446c5.812-4.145 9.542-10.802 11.045-17.781s.93-14.274-.622-21.242a3.468 3.468 0 0 1 .047-2.452 3.384 3.384 0 0 1 2.64-1.257c8.763-1.22 33.86-6.516 40.532.985 3.162 3.554 1.951 10.459 3.106 14.8.477 1.793 6.575 16.707 9.33 15.501z"
        fill="#fbbebe"
      />
      <path
        d="M600.533 146.074a141.135 141.135 0 0 1-66.078 11.446c5.812-4.145 9.542-10.802 11.045-17.781s.93-14.274-.622-21.242a3.468 3.468 0 0 1 .047-2.452 3.384 3.384 0 0 1 2.64-1.257c8.763-1.22 33.86-6.516 40.532.985 3.162 3.554 1.951 10.459 3.106 14.8.477 1.793 6.575 16.707 9.33 15.501z"
        opacity={0.1}
      />
      <path
        d="M527.5 295l-130 4s-115 112-20 146c0 0 117 19 145-3 0 0 35-138 5-147zm-6 37l-139 9s10-34 50-34 85-9 89 12 0 13 0 13z"
        fill="#3f3d56"
      />
      <path
        d="M425.015 277.058c-6.485-.992-13.535-1.565-19.214 1.718a30.603 30.603 0 0 0-5.235 4.131q-3.426 3.145-6.8 6.347c-1.645 1.56-3.365 3.281-3.787 5.509-.868 4.584 4.427 8.275 9.089 8.096s8.844-2.74 13.247-4.284c8.867-3.107 41.476 2.205 43.257-7.343 2.265-12.14-23.346-13.026-30.557-14.174z"
        fill="#fbbebe"
      />
      <path
        d="M485.786 269.392a73.565 73.565 0 0 1-27.189 7.72 11.462 11.462 0 0 0-4.301.915 4.346 4.346 0 0 0-1.793 2.181 64.899 64.899 0 0 0-6.078 22.186 1.98 1.98 0 0 0 .702 2.027 6.24 6.24 0 0 0 2.94.66q23.336 1.481 46.828 1.59a4.884 4.884 0 0 0 2.038-.277 1.91 1.91 0 0 0 .937-1.16 70.954 70.954 0 0 0 5.087-28.78c-.409-11.59-3.803-15.22-19.171-7.062z"
        fill="#d7e5f2"
      />
      <path
        d="M485.786 269.392a73.565 73.565 0 0 1-27.189 7.72 11.462 11.462 0 0 0-4.301.915 4.346 4.346 0 0 0-1.793 2.181 64.899 64.899 0 0 0-6.078 22.186 1.98 1.98 0 0 0 .702 2.027 6.24 6.24 0 0 0 2.94.66q23.336 1.481 46.828 1.59a4.884 4.884 0 0 0 2.038-.277 1.91 1.91 0 0 0 .937-1.16 70.954 70.954 0 0 0 5.087-28.78c-.409-11.59-3.803-15.22-19.171-7.062z"
        opacity={0.1}
      />
      <path
        d="M660.5 374l-171-6 40-169s160-12 156 29-25 146-25 146zM495.42 454.786S392.5 473 355.5 419s140-25 140-25l15 41z"
        fill="#36334a"
      />
      <circle cx={464.5} cy={637} r={47} fill="#36334a" />
      <ellipse cx={469} cy={637} rx={29.5} ry={34} fill="#3f3d56" />
      <path d="M721.5 194s-39-22-41 30l-33 242h14l38-259s19 3 22 3 0-16 0-16z" fill="#3f3d56" />
      <path
        d="M760.36 220.702a9.353 9.353 0 0 1-12.688 6.096l-45.241-19.342 8.207-18.078 44.588 20.309a9.353 9.353 0 0 1 5.135 11.015z"
        fill="#36334a"
      />
      <path
        d="M485.5 449s-72-8-92 61-18 122-35 118-53-18-53-18l3 21s63 32 73-2 16-159 73-156 67-3 67-3zM348.5 416s-56 7-78 48-33 115-33 115h21s12-147 75-139z"
        fill="#3f3d56"
      />
      <path d="M310.5 645l-89-55s-5-20 52-28c0 0 107.767 37.69 97.383 51.845S325.5 650 310.5 645z" fill="#36334a" />
      <path fill="#3f3d56" d="M448.5 466v117h13V464l-13 2z" />
      <path d="M467.5 538s25 98 9 112c0 0-21-62-37-54l5-58z" fill="#36334a" />
      <circle cx={564.5} cy={91} r={39} fill="#fbbebe" />
      <path
        d="M557.124 150.11c15.904 2.703 29.65-15.789 45.571-13.188a30.583 30.583 0 0 1 9.794 3.853 97.155 97.155 0 0 1 46.828 62.719c1.8 8.02 2.494 16.718-.893 24.208-1.8 3.981-4.65 7.381-7.499 10.694-10.593 12.32-22.219 24.598-37.334 30.559-1.476 5.113-.058 10.65 1.712 15.67 7.391 20.958-4.362 43.545-4.962 65.76-.102 3.8.012 7.964-2.364 10.931-2.638 3.294-7.347 3.879-11.56 4.116-38.616 2.176-77.178-3.748-115.4-9.654a5.8 5.8 0 0 1-2.804-.95c-1.257-1.003-1.447-2.797-1.715-4.383-1.417-8.394 6.036-15.2 2.502-22.945-6.076-13.314 7.177-27.874 11-42s5.328-16.611 8-31c.999-5.38-1.879-21.599-1-27 2.87-17.642.7-37.737 10-53 5.588-9.17 4.138-16.301 14.109-20.289 10.521-4.207 24.76-2.79 36.015-4.1z"
        fill="#d7e5f2"
      />
      <path
        d="M380.995 382.692c-11.643 2.245-24.004 4.387-32.964 12.153-5.472 4.744-9.15 11.173-12.723 17.472l-36.45 64.266c-11.116 19.6-22.239 39.211-32.318 59.364a10.703 10.703 0 0 0-1.507 4.828c.04 2.405 1.657 4.473 3.312 6.218a53.16 53.16 0 0 0 45.004 15.824c2.508-12.982 14.848-21.562 20.896-33.32 3.323-6.46 4.659-13.724 6.804-20.666 8.002-25.89 26.997-46.679 45.438-66.534 8.715-9.384 17.637-18.931 28.867-25.089 13.174-7.223 28.46-9.222 43.183-12.222s29.966-7.55 40.383-18.376a43.36 43.36 0 0 0 11.546-35.32c-9.432-.66-19.928-1.886-29.026 1.148-10.566 3.523-20.786 8.337-31.368 11.936a521.166 521.166 0 0 1-69.077 18.318z"
        fill="#696880"
      />
      <path
        d="M380.995 382.692c-11.643 2.245-24.004 4.387-32.964 12.153-5.472 4.744-9.15 11.173-12.723 17.472l-36.45 64.266c-11.116 19.6-22.239 39.211-32.318 59.364a10.703 10.703 0 0 0-1.507 4.828c.04 2.405 1.657 4.473 3.312 6.218a53.16 53.16 0 0 0 45.004 15.824c2.508-12.982 14.848-21.562 20.896-33.32 3.323-6.46 4.659-13.724 6.804-20.666 8.002-25.89 26.997-46.679 45.438-66.534 8.715-9.384 17.637-18.931 28.867-25.089 13.174-7.223 28.46-9.222 43.183-12.222s29.966-7.55 40.383-18.376a43.36 43.36 0 0 0 11.546-35.32c-9.432-.66-19.928-1.886-29.026 1.148-10.566 3.523-20.786 8.337-31.368 11.936a521.166 521.166 0 0 1-69.077 18.318z"
        opacity={0.1}
      />
      <path
        d="M223.847 586.48a8.186 8.186 0 0 0-2.871 3.707c-1.324 4.51 4.32 7.688 8.837 8.987 10.148 2.92 20.975 5.847 31.097 2.838 6.208-1.846 11.61-5.8 17.777-7.776 9.152-2.932 19.065-1.268 28.526.422a61.74 61.74 0 0 0-4.09-35.242c-3.036-7.002-15.186-10.41-22.42-10.717-7.908-.336-10.655 5.499-15.22 10.87-11.117 13.079-28.828 16.11-41.636 26.91z"
        fill="#3f3d56"
      />
      <path
        d="M388.424 401.848c-5.594 2.225-11.332 4.542-15.72 8.664-4.634 4.352-7.346 10.323-9.82 16.179a451.884 451.884 0 0 0-18.63 53.143c-2.577 9.138-4.873 18.381-8.345 27.218-6.927 17.636-18.683 34.527-17.578 53.443a12.673 12.673 0 0 0 1.79 6.528c1.568 2.278 4.238 3.486 6.774 4.587l13.297 5.774c7.136 3.098 15.842 6.077 22.217 1.619 4.266-2.983 5.97-8.394 7.257-13.438 4.648-18.216 7.52-37.138 15.847-53.994 9.412-19.05 25.326-34.445 33.746-53.954 1.192-2.762 2.322-5.724 4.666-7.609 1.935-1.556 4.445-2.163 6.867-2.714 49.941-11.372 101.009-17.592 150.55-30.595 7.044-1.849 14.412-4.043 19.437-9.314 6.967-7.307 7.587-18.415 7.81-28.51.14-6.324.11-13.196-3.743-18.213-4.345-5.658-12.138-7.152-19.234-7.899-27.213-2.862-52.313 1.647-79.116 4.95-24.523 3.022-49.223 16.864-72.101 25.908q-22.995 9.09-45.97 18.227z"
        fill="#696880"
      />
      <path
        d="M326.89 582.631c-3.74 8.88-7.776 18.157-15.361 24.1-3.17 2.482-7.268 4.967-7.395 8.99-.134 4.258 4.337 7.068 8.343 8.513 10.204 3.681 21.816 4.468 31.772.16 6.81-2.946 12.425-8.037 17.905-13.039 1.65-1.507 3.359-3.097 4.132-5.193a13.432 13.432 0 0 0 .465-5.454 139.758 139.758 0 0 0-5.902-32.74c-.253-.836-21.77-3.518-23.678-3.02-6.007 1.569-7.964 12.182-10.28 17.683zM661.5 325l-130 4s-115 112-20 146c0 0 117 19 145-3 0 0 35-138 5-147zm-6 37l-139 9s10-34 50-34 85-9 89 12 0 13 0 13z"
        fill="#3f3d56"
      />
      <ellipse cx={632} cy={536} rx={130.5} ry={148} fill="#36334a" />
      <ellipse cx={638} cy={536} rx={98.5} ry={110} fill="#3f3d56" />
      <path
        d="M663.5 534.5a29.292 29.292 0 0 0-.571-5.715L736.5 492l-5-11-74.318 36.206a15.52 15.52 0 0 0-2.47-2.063l.058.012L676.5 407l-19.222-.437L644.5 513l1.225.257a11.997 11.997 0 0 0-2.866.98l-64.275-65.977L569.5 461l66.038 60.755a26.563 26.563 0 0 0-2.924 10.24L539.5 570l-2 16 97.06-40.82a21.213 21.213 0 0 0 3.794 6.131L608.5 653h11l25.059-97.55A11.418 11.418 0 0 0 648 556a11.918 11.918 0 0 0 6.356-1.905L706.5 623l16-11-61.097-66.736A27.964 27.964 0 0 0 663.5 534.5zM519.178 66.309c1.762-4.424 7.443-6.254 9.304-10.637 2.001-4.714-1.136-10.712 1.587-15.049 2.744-4.37 9.138-3.858 14.228-3.014 6.01.997 12.4 1.667 18.005-.717 2.493-1.06 4.705-2.68 7.12-3.909a25.149 25.149 0 0 1 12.41-2.698 5.631 5.631 0 0 1 2.785.665 5.217 5.217 0 0 1 1.806 2.331c1.754 3.798 2.004 8.538 5.178 11.262 1.525 1.309 3.504 1.925 5.33 2.763a23.076 23.076 0 0 1 12.936 23.022 46.811 46.811 0 0 0-.786 6.594c.124 4.863 3.302 9.72 1.679 14.305-1.207 3.409-4.738 5.426-8.197 6.477a4.703 4.703 0 0 1-3.094.156c-1.775-.719-2.129-3-2.696-4.828a11.845 11.845 0 0 0-11.474-8.086c-4.034.171-8.115 2.437-11.921 1.089-1.87-.663-3.334-2.108-4.83-3.413-3.44-3.002-7.509-5.5-12.03-6.138s-9.53.885-12.192 4.595c-1.075 1.498-1.726 3.261-2.752 4.794-9.217 13.768-26.201-10.01-22.396-19.564z"
        fill="#36334a"
      />
      <path fill={primaryColor} d="M455 332.5h69v77h-69z" />
      <path
        d="M539.957 303.987a10.61 10.61 0 0 0-9.282 3.455c-8.75 7.973-18.025 16.96-19.61 28.69a4.833 4.833 0 0 0 .362 3.177c.843 1.379 2.695 1.684 4.311 1.711a28.693 28.693 0 0 0 21.688-9.578c1.501-1.703 2.878-3.652 4.936-4.61a12.868 12.868 0 0 1 5.894-.732c5.49.18 18.025 2.99 22.811.267 5.033-2.864 3.649-11.84 1.3-16.168-5.586-10.288-22.903-6.315-32.41-6.212z"
        fill="#fbbebe"
      />
      <path
        d="M662.099 217.59c3.362 10.816 1.393 23 6.157 33.276 3.163 6.822 9.11 12.32 10.95 19.61 1.74 6.889-.59 14.312-4.68 20.122s-9.782 10.273-15.491 14.501c-6.253 4.63-12.745 9.149-20.112 11.652-7.348 2.498-15.221 2.875-22.974 3.23l-51.382 2.356-9.464-28.37 33.48-13.115c3.351-1.312 6.765-2.64 10.354-2.905 6.197-.458 13.755 1.817 17.735-2.955a12.924 12.924 0 0 0 2.338-5.942c3.247-16.667.422-34.302 5.42-50.53 2.473-8.033 9.611-24.145 19.346-25.563 10.317-1.502 15.99 17.127 18.323 24.633z"
        fill="#d7e5f2"
      />
    </svg>
  );
};

UndrawPersonalNotes.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPersonalNotes;
