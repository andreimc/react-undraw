import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTraveling = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 865 779.064" style={style} {...props}>
      <rect x={406} y={27.5} width={459} height={594} rx={38.142} fill="#f2f2f2" />
      <rect x={384} y={0.5} width={459} height={594} rx={38.142} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M407.5 61.971h408V533.03h-408z" />
      <circle cx={613.5} cy={31} r={10} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={613.5} cy={563.5} r={22} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path
        d="M600.99 113.567a67.01 67.01 0 0 0-67.01 67.01c0 37.008 70.201 173.507 70.201 173.507S668 217.585 668 180.577a67.01 67.01 0 0 0-67.01-67.01zm0 111.683a35.1 35.1 0 1 1 35.1-35.1 35.1 35.1 0 0 1-35.1 35.1z"
        fill={primaryColor}
      />
      <ellipse cx={601} cy={400.5} rx={67} ry={22} fill={primaryColor} />
      <path
        d="M361.88 95.957a22.982 22.982 0 0 0-19.81 13.851c-4.953 11.974 1.425 26.04 11 34.77s21.873 13.723 33.048 20.283c15.01 8.811 28.497 21.043 36.007 36.744s8.309 35.15-.519 50.15c-8.194 13.922-23.093 22.255-37.302 29.94"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <ellipse cx={374.5} cy={97} rx={17.5} ry={8.5} fill="#57b894" />
      <ellipse cx={388.5} cy={153} rx={17.5} ry={8.5} fill="#57b894" />
      <ellipse cx={356.5} cy={162} rx={17.5} ry={8.5} fill="#57b894" />
      <ellipse cx={406.5} cy={209} rx={17.5} ry={8.5} fill="#57b894" />
      <ellipse cx={441.5} cy={209} rx={17.5} ry={8.5} fill="#57b894" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M47.491 778.564H406M34.343 605.323a21.4 21.4 0 0 0-18.447 12.898c-4.613 11.15 1.327 24.247 10.242 32.377s20.369 12.779 30.775 18.887c13.976 8.205 26.536 19.595 33.53 34.216s7.736 32.731-.484 46.699c-7.63 12.964-21.504 20.724-34.736 27.88"
      />
      <ellipse cx={46.094} cy={606.294} rx={16.296} ry={7.915} fill="#57b894" />
      <ellipse cx={59.131} cy={658.44} rx={16.296} ry={7.915} fill="#57b894" />
      <ellipse cx={29.333} cy={666.821} rx={16.296} ry={7.915} fill="#57b894" />
      <ellipse cx={75.892} cy={710.587} rx={16.296} ry={7.915} fill="#57b894" />
      <ellipse cx={108.484} cy={710.587} rx={16.296} ry={7.915} fill="#57b894" />
      <path
        d="M73.857 637.302a17.477 17.477 0 0 1 15.065 10.533c3.767 9.106-1.084 19.802-8.365 26.442s-16.634 10.436-25.132 15.424c-11.414 6.701-21.671 16.003-27.382 27.943s-6.32 26.73.394 38.138c6.231 10.587 17.561 16.924 28.368 22.768"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <ellipse cx={64.26} cy={638.095} rx={13.308} ry={6.464} fill="#57b894" />
      <ellipse cx={53.613} cy={680.681} rx={13.308} ry={6.464} fill="#57b894" />
      <ellipse cx={77.949} cy={687.526} rx={13.308} ry={6.464} fill="#57b894" />
      <ellipse cx={39.925} cy={723.268} rx={13.308} ry={6.464} fill="#57b894" />
      <ellipse cx={13.308} cy={723.268} rx={13.308} ry={6.464} fill="#57b894" />
      <path
        d="M129.846 737.504s9.311 4.656 15.83 5.588 10.185-5.662 8.817-7.953 4.22-.428 7.944 7.953c0 0 15.83 18.623 25.142 19.555s9.385 13.538 4.656 13.968c-5.121.465-13.967 3.724-25.142 0s-21.417-13.968-26.073-13.968-20.486-7.45-15.83-11.175 4.656-13.968 4.656-13.968zM221.624 758.544a51.713 51.713 0 0 0 14.208-.872c6.399-1.555 7.356-9.038 5.236-10.658s3.759-1.963 10.328 4.436c0 0 21.612 11.417 30.605 8.825s13.74 9.088 9.508 11.242a53.95 53.95 0 0 1-23.326 6.582c-11.758.689-25.092-2.27-29.416-.541s-21.787.687-18.847-4.5 1.704-14.514 1.704-14.514z"
        fill="#3f3d56"
      />
      <circle cx={205.794} cy={278.048} r={36.317} fill="#ffc1c7" />
      <path
        d="M177.392 292.482s5.587 39.11-7.45 44.697 66.115 3.725 66.115 3.725-11.174-35.386-8.38-44.698-50.285-3.724-50.285-3.724z"
        fill="#ffc1c7"
      />
      <path
        d="M164.356 515.037s-2.794 70.77-5.588 78.22-5.587 57.734-5.587 57.734l-24.21 91.257 22.348 7.45s30.73-54.01 34.454-60.528 33.523-110.812 33.523-110.812-2.794 64.252-2.794 85.67 5.588 99.637 5.588 99.637l17.692-1.862 23.28-98.707s33.523-133.16 11.174-148.06-109.88 0-109.88 0z"
        fill="#2f2e41"
      />
      <path
        d="M300.31 537.385s.93 54.01-10.243 45.629 0-50.285 0-50.285zM145.732 518.761s.93 54.01-10.243 45.629 0-50.285 0-50.285z"
        fill="#ffc1c7"
      />
      <path
        d="M282.617 361.39s-18.624-21.418-34.454-18.624-102.431 1.862-102.431 1.862-28.867 36.317-21.418 43.766 31.66 139.68 31.66 139.68 64.253-8.381 86.602-8.381 31.66-3.725 31.66-3.725-29.798-59.596-15.83-86.601 34.454-55.872 34.454-55.872z"
        fill={primaryColor}
      />
      <path
        d="M277.03 367.908l15.83 5.587s9.312 32.592 9.312 58.666.931 39.11 4.656 48.422 15.83 53.078 9.312 62.39a62.096 62.096 0 0 1-13.037 13.967l-21.417-1.862s-.931-30.73-6.519-33.523-13.036-20.486-13.036-20.486-17.693-56.803-6.519-75.427 21.418-57.734 21.418-57.734z"
        fill={primaryColor}
      />
      <path
        d="M217.434 402.362s9.311-40.972-8.381-39.11-41.904 2.794-48.422 2.794-43.766-4.656-49.353 19.555-13.037 54.009 2.793 72.633c0 0 5.587 81.945 27.005 87.532s78.22 12.105 98.706-14.9 12.106-56.802 12.106-56.802h-9.312z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M248.163 475.927l7.449-50.285-3.724 52.147-3.725-1.862z" />
      <path d="M123.383 464.752s15.83 7.45 48.422 2.794v13.968l-48.422-3.725z" opacity={0.1} />
      <path fill="#3f3d56" d="M208.587 362.787l24.211-13.037-20.486 17.693-3.725-4.656z" />
      <path
        d="M260.268 349.284s18.624 6.519 18.624 0-16.761-12.105-27.004-15.83-58.666-9.312-66.115-12.105-42.835-7.45-45.628 3.724-3.725 34.455 10.243 37.248 50.284-4.656 68.908-2.793 40.972-10.244 40.972-10.244z"
        fill={primaryColor}
      />
      <path
        d="M260.268 349.284s18.624 6.519 18.624 0-16.761-12.105-27.004-15.83-58.666-9.312-66.115-12.105-42.835-7.45-45.628 3.724-3.725 34.455 10.243 37.248 50.284-4.656 68.908-2.793 40.972-10.244 40.972-10.244z"
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M130.367 370.236l6.329-13.294 1.121 16.088-7.45-2.794z" />
      <ellipse cx={199.5} cy={276.032} rx={34} ry={39.5} fill="#2f2e41" />
      <ellipse cx={205.5} cy={255.032} rx={34} ry={21.5} fill="#2f2e41" />
      <ellipse cx={232} cy={287.532} rx={3.5} ry={6} fill="#ffc1c7" />
      <path
        d="M227.118 249.619c3.577-1.958 6.633-5.497 8.92-10.332a10.901 10.901 0 0 1 .179 3.27 12.384 12.384 0 0 0 4.258-1.284l-.32 3.486a35.955 35.955 0 0 0 7.03-5.628 27.674 27.674 0 0 1-2.463 14.858c-1.855 3.664-4.376 6.046-6.871 8.393"
        fill="#2f2e41"
      />
    </svg>
  );
};

UndrawTraveling.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTraveling;
