import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawDoctors = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1167.61 862.87" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={481.48} y1={854.12} x2={481.48} y2={276.47} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={878.34} y1={879.41} x2={878.34} y2={264.07} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M76.42 338.2H177.9v138.33H83.84c-.24 1.43-.48 2.85-.75 4.28h94.81v111.54c-.16 0-.32-.12-.47-.18q-4-1.59-8-3.37c-.57-.26-1.13-.53-1.71-.78q-4-1.89-8-4c-.93-.49-1.86-1-2.77-1.52a166.43 166.43 0 0 1-39.9-31.06c-.35-.33-.67-.69-1-1-1.62-1.76-3.21-3.54-4.75-5.36-.58-.67-1.14-1.35-1.71-2-1.82-2.22-3.58-4.52-5.28-6.83-.26-.35-.5-.69-.75-1a147.72 147.72 0 0 1-17.2-31.1c-.14-.33-.27-.69-.4-1-1.38-3.5-2.63-7.05-3.71-10.67-.46-1.51-.91-3-1.29-4.57-.14-.45-.25-.91-.37-1.36-5.62-22.15-6.27-45.17-6.27-68.08v-8q.12-14.03.33-28.03.08-3.6.15-7.23.21-9.19.6-18.42c.06-1.7.14-3.41.23-5.1q.06-1.47.15-2.94.27-5.31.64-10.55zM177.9 184.18h-55.67a423.75 423.75 0 0 1 29.61-40.74c8.28-10.16 17-20.06 26.06-29.6zM177.9 188.44v145.48H76.74c0-.42.06-.85.1-1.27.09-1.15.18-2.29.28-3.44.1-1.34.23-2.68.36-4s.26-2.92.42-4.37.29-2.92.45-4.37.32-2.9.5-4.34.34-2.9.54-4.34c.15-1.19.3-2.39.47-3.59.23-1.69.47-3.38.72-5.06 0-.26.08-.51.12-.76a348.93 348.93 0 0 1 7.44-36.52 270.41 270.41 0 0 1 12.55-37 277.87 277.87 0 0 1 18.88-36.42zM202.14 338.2v138.33H418.9V338.2zm0 142.61v118.8c1.24.25 2.46.5 3.69.71 1.65.32 3.31.61 5 .86l1 .14c.66.11 1.33.2 2 .28 1.67.24 3.34.42 5 .58.78.08 1.59.14 2.38.21l1.93.14c1.05.08 2.09.14 3.13.18.64 0 1.28.05 1.93.07s1 0 1.52 0H235.28c.86 0 1.72 0 2.57-.08h.05c.6 0 1.19 0 1.79-.07a4.38 4.38 0 0 0 .51 0c.5 0 1 0 1.48-.06a2.09 2.09 0 0 1 .34 0c1.11-.07 2.23-.16 3.36-.26s2.2-.22 3.33-.34l2.27-.28a199.13 199.13 0 0 0 27.45-5.84c20.23-5.64 40-13.53 60.22-19.3 26.12-7.45 55-11.12 80.24-2.05v-93.69zM418.9 184.18V.02a278.53 278.53 0 0 0-70.42 8.25c-54.89 13.79-104.18 43.7-146.34 81.9v94h10.91v4.27h-10.91v145.48H418.9V188.44H257.68v-4.28zm278.48-62.21c-13.58-.48-27.08-4.77-39.3-11.42-23.34-12.69-42-32.31-62.84-48.85-43.3-34.47-97-55.28-152.09-60.44v182.92h309.41l.77-.81zm28.19-5l29.89 32.81v-41.44c-10.06 1.27-18.82 4.22-29.89 8.59zm29.89 512.14v-148.3h-63.74c-.16-.63-.34-1.27-.54-1.91.19.64.36 1.28.53 1.91H443.15v107.24c2.36 1.75 4.69 3.6 7 5.46q3.74 3.06 7.43 6.19l2.48 2.05c1.19 1 2.4 2 3.6 2.95q3.61 2.91 7.27 5.76 1.83 1.44 3.68 2.83a502.09 502.09 0 0 0 61.64 40.31c4.82 2.69 9.69 5.28 14.59 7.81q4.89 2.52 9.85 4.94 7.44 3.63 15 7a550.6 550.6 0 0 0 146 42.52q16.78 2.47 33.71 3.9v-90.68h1zM443.15 188.44v145.48h312.31V188.44zm0 149.74v138.35h312.31V338.2zM779.7 108.14v46.3l38.14-41.87q-18.96-3.13-38.14-4.43zm0 230.06v138.33h303.75V338.2zm302.68 301.88l1.07-159.27H779.7v240.57a547.32 547.32 0 0 0 58.7-.71h.34q14-.9 27.87-2.56h.21a512.49 512.49 0 0 0 143.23-38.26m132-318.93q-1.73-4-3.55-8c-2.26-5-4.64-9.86-7.1-14.71h-23.7v138.32h59.91c-.05-39.18-9.97-79.18-25.56-115.61zm-34.35 119.89v137c16.87-16.17 31.14-34.68 41.4-55.84 12.35-25.49 18-53.07 18.47-81.17zm0-182.92v36h21.48a391.16 391.16 0 0 0-21.48-36zm-206-162.6c-1.58-.61-3.17-1.22-4.76-1.8a432.15 432.15 0 0 0-51.3-15.42l-58.38 64.06-1.14 1.23.75.81h207.78a443.9 443.9 0 0 0-92.95-48.88zm99.05 53.15H783.96l-4.26 3.89v141.59h303.75v-68.6a432.49 432.49 0 0 0-82.7-76.88z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        d="M177.9 261.83v72.09H76.74c0-.42.06-.85.1-1.27.09-1.15.18-2.29.28-3.44.1-1.34.23-2.68.36-4s.26-2.92.42-4.37.29-2.92.45-4.37.32-2.9.5-4.34.34-2.9.54-4.34c.15-1.19.3-2.39.47-3.59.23-1.69.47-3.38.72-5.06 0-.26.08-.51.12-.76a348.93 348.93 0 0 1 7.44-36.52zM76.42 338.2H177.9v138.33H83.84c-.24 1.43-.48 2.85-.75 4.28h94.81v111.54c-.16 0-.32-.12-.47-.18q-4-1.59-8-3.37c-.57-.26-1.13-.53-1.71-.78q-4-1.89-8-4c-.93-.49-1.86-1-2.77-1.52a166.43 166.43 0 0 1-39.9-31.06c-.35-.33-.67-.69-1-1-1.62-1.76-3.21-3.54-4.75-5.36-.58-.67-1.14-1.35-1.71-2-1.82-2.22-3.58-4.52-5.28-6.83-.26-.35-.5-.69-.75-1a147.72 147.72 0 0 1-17.2-31.1c-.14-.33-.27-.69-.4-1-1.38-3.5-2.63-7.05-3.71-10.67-.46-1.51-.91-3-1.29-4.57-.14-.45-.25-.91-.37-1.36-5.62-22.15-6.27-45.17-6.27-68.08v-8q.12-14.03.33-28.03.08-3.6.15-7.23.21-9.19.6-18.42c.06-1.7.14-3.41.23-5.1q.06-1.47.15-2.94.27-5.31.64-10.55zM278.44 209.28v124.64h-76.31V209.28h10.88v-42.2h44.66v42.2h20.77zM202.13 338.19h76.3v138.33h-76.3zM202.14 480.81h76.3v115a197.64 197.64 0 0 1-27.45 5.83c-.76.11-1.51.2-2.27.28-1.12.13-2.23.25-3.34.35l-3.35.27h-.34l-1.48.08h-.51c-.6 0-1.19.07-1.79.08h-.05c-.86 0-1.71.06-2.57.08h-7.08c-.65 0-1.29 0-1.94-.08q-1.54-.06-3.12-.18l-1.93-.14c-.8-.06-1.6-.14-2.39-.22q-2.52-.22-5-.57l-2-.28-1-.14c-1.67-.25-3.33-.53-5-.85-1.24-.22-2.46-.47-3.69-.73zM692.53 194.56h62.92v139.35h-62.92zM755.46 338.19v138.34H443.15v-59.67H609.5v35.2h83.03V338.19h62.93zM756.45 629.14c-.33 0-.66 0-1-.06v90.75q-16.91-1.39-33.7-3.89a551.33 551.33 0 0 1-146.06-42.5q-20.13-9.08-39.44-19.79a503.91 503.91 0 0 1-61.63-40.31q-7.38-5.64-14.54-11.53c-3.31-2.74-6.59-5.54-9.93-8.25-2.3-1.87-4.63-3.72-7-5.48V480.81h248.56c-.18-.64-.34-1.27-.52-1.91.19.64.37 1.27.53 1.91h63.74v148.26c.33.01.66.04.99.07zM919.56 184.18h-41v-12.74h18.37v-37.95q2.39.88 4.76 1.8v36.15h17.86zM1018.35 333.92h-201.3a.13.13 0 0 0 .06 0H779.7V194.57h10.58v103h48.34v-61h39.95v-48.13h41v48.16h39.93v61h58.86zM779.7 338.2v138.33h238.66V338.2zm303.41 301.15l.34-109.5h-65.09v-49H779.7v240.53a547.32 547.32 0 0 0 58.7-.71h.34q14-.9 27.87-2.56h.21a512.49 512.49 0 0 0 143.23-38.26M1111.9 480.81h55.67c-.48 28.09-6.12 55.68-18.47 81.16-10.26 21.17-24.53 39.68-41.4 55.85v-88h4.2zM1167.61 476.53h-55.71V360.92h30.15c15.59 36.43 25.51 76.43 25.56 115.61z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        fill={primaryColor}
        opacity={0.1}
        d="M721.75 233.3h33.71v43.69h-33.71zM721.75 323.86h33.71v10.06h-33.71zM721.75 338.19h33.71v29.35h-33.71zM721.75 414.42h33.71v43.69h-33.71zM721.75 504.98h33.71v43.69h-33.71zM755.46 629.07c.33 0 .66 0 1 .07-.33 0-.66 0-1-.06v10.15h-33.71v-43.69h33.71zM755.46 686.09v33.74q-16.92-1.39-33.71-3.89v-29.85zM443.15 473.32h144.47v3.21H443.15zM443.15 480.8h144.47v12.3H443.15zM443.15 533.42h144.47v19.78H443.15zM587.62 593.52v19.78h-113q-7.38-5.62-14.54-11.54c-3.32-2.73-6.6-5.53-9.93-8.24zM587.62 653.61v19.83h-11.93q-20.13-9.08-39.44-19.79zM838.4 351.6h28.44v28.44H838.4zM222.62 219.09h28.44v28.44h-28.44zM222.62 285.15h28.44v28.44h-28.44zM222.62 351.21h28.44v28.44h-28.44zM222.62 417.26h28.44v28.44h-28.44zM222.62 483.32h28.44v28.44h-28.44zM222.62 549.38h28.44v28.44h-28.44zM946.97 351.6h28.44v28.44h-28.44zM838.4 421.75h28.44v28.44H838.4zM946.97 421.75h28.44v28.44h-28.44zM838.4 491.89h28.44v28.44H838.4zM946.97 491.89h28.44v28.44h-28.44zM838.4 562.04h28.44v28.44H838.4zM946.97 562.04h28.44v28.44h-28.44zM838.4 632.19h28.44v28.44H838.4zM946.97 632.19h28.44v28.44h-28.44zM838.4 720.67v-18.34h28.43v15.73l-28.43 2.61zM80.58 298.35v16.27h97.32v-16.27zm9.69 15.25h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.67 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zM80.58 345.71v16.27h97.32v-16.27zm9.69 15.25h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.67 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zM80.58 393.08v16.26h97.32v-16.26zm9.69 15.23h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.67 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.68 0h-8v-14.22h8zm9.69 0h-8v-14.22h8zM80.58 440.44v16.26h97.32v-16.26zm9.69 15.24h-8v-14.24h8zm9.69 0h-8v-14.24h8zm9.67 0h-8v-14.24h8zm9.69 0h-8v-14.24h8zm9.68 0h-8v-14.24h8zm9.69 0h-8v-14.24h8zm9.69 0h-8v-14.24h8zm9.68 0h-8v-14.24h8zm9.68 0h-8v-14.24h8zm9.69 0h-8v-14.24h8zM81.05 487.78c.38 1.54.83 3.06 1.29 4.57v-3.54h8v14.21h-4.29c.12.34.25.69.39 1h91.5v-16.24zm19 15.24h-8v-14.21h8zm9.67 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.68 0h-8v-14.21h8zm9.69 0h-8v-14.21h8zM103.59 535.14c.26.32.5.68.75 1h5.29v6.83l1.71 2v-8.87h8v14.34h-3.29c.32.33.63.68 1 1h60.83v-16.3zm25.46 15.3h-8v-14.28h8zm9.69 0h-8v-14.28h8zm9.69 0h-8v-14.28h8zm9.68 0h-8v-14.28h8zm9.68 0h-8v-14.28h8zm9.69 0h-8v-14.28h8zM156.98 582.5c.92.52 1.85 1 2.78 1.51v-.5h8v4.51c.58.25 1.13.52 1.7.78v-5.29h8v8.66a3.26 3.26 0 0 0 .47.17v-9.84zM817.05 333.92zm-61.6 295.15h1zM691.18 478.9c.19.64.36 1.28.53 1.91-.15-.63-.33-1.27-.53-1.91zm125.87-144.98zm-604-149.74v4.26h44.67v-4.28zm542.41 444.89h1zM691.18 478.9c.19.64.36 1.28.53 1.91-.15-.63-.33-1.27-.53-1.91zm125.87-144.98zm-61.6 295.15h1zM691.18 478.9c.19.64.36 1.28.53 1.91-.15-.63-.33-1.27-.53-1.91z"
      />
      <ellipse cx={879.43} cy={847.22} rx={97.44} ry={15.65} fill={primaryColor} opacity={0.1} />
      <ellipse cx={439.97} cy={831.57} rx={97.44} ry={15.65} fill={primaryColor} opacity={0.1} />
      <path
        d="M568.1 436.31a.53.53 0 0 0-.15-.26c-1.49-1.47-20.49-28.34-20.49-28.34s-1-3-2.62-6.9a6.86 6.86 0 0 0 1.15-2.25 7.72 7.72 0 0 0 .19-1.05c0-.11.08-.2.11-.31a7.59 7.59 0 0 0-.1-4.12 7.12 7.12 0 0 1-.41 1 16.72 16.72 0 0 0-1.5-3.34c-2.52-4.34-6.12-8-8.77-12.23a33.09 33.09 0 0 1-4.51-21.96v1.18a34.24 34.24 0 0 1 .6-4.5 31.22 31.22 0 0 1 1.67-4.94c2.38-5.45 6.23-10.2 8.57-15.67a29.7 29.7 0 0 0 1.78-5.73 32.1 32.1 0 0 0 .89-10.05c0 .8-.13 1.6-.25 2.39a32.55 32.55 0 0 0-9.19-21.67c-8.17-8.21-19.9-11.4-31.12-13.08a28.51 28.51 0 0 1-13.1-5c-4.31-2.79-9.88-3.46-14.92-2.85a24.61 24.61 0 0 0-15.19 7.51c-5.33 5.86-7.64 14.16-13.86 19.1-3.77 3-8.55 4.4-12.94 6.44s-8.54 5-9.95 9.38v-.09.25l-.06.16c-1.46 5.18 1.36 10.45 2.83 15.62 1.53 5.35 1.63 11 1.71 16.53.11 6.76.21 13.53.1 20.3-.05 2.66-.14 5.35-.34 8a41.92 41.92 0 0 0-6.87 2.76c-2.24 1.46-10.62 10.51-10.62 10.51l-16.39 62.62.22.25-.22.85.83-.19c2.32 2.5 9.25 9.62 16.73 14.06l.7 12.28s.84 12.32 12.17 17.41c.26 4.27 1.07 21.61-2.68 28.48a32 32 0 0 0-3.54 16.28s1.31 10.42-.18 15.9a26 26 0 0 0-.19 11.16v3.29c0 11.09.13 46.63 0 50.65-.19 4.75 0 75 0 75s-.93 35.11-3.91 44.62-2.23 41-2.23 41-1.87 37.51 4.74 44.91c0 .33-.06.67-.07 1v.47c-.08 2.85.47 5.88 2.92 6.81 5 1.92 11.61 7.68 12.86 9.33s8.52 5.76 18 4.66a135.5 135.5 0 0 1 17.89-.82s3.74-.68 2.53-5.33c-.78-2.9-3.7-7.36-5.78-10.29.38.1.75.18 1.1.25l.36.07h.28a3.8 3.8 0 0 0 .46 0h.2a3.43 3.43 0 0 0 .56 0c2.51-.24 11.87 4.12 13.54 7s7.56 5.07 12 5.62c2.64.32 9.3-.22 14.89-.94a54.83 54.83 0 0 0 8.34-1.52c1.32-.5 1.6-2.1 1.22-3.9a10.15 10.15 0 0 0-3.46-5.84c-1.62-1.15-3.76-4.18-5.34-6.66l-.42-.67c2.79-2.66 7.83-11.36 9.36-13.16 1.86-2.19-3-82.28-3-82.28v-40.15l7.45-38 5.21-20.11 4.47-30.36s7.82-35.46 5.41-38.94c0-.07-2-36.58-4.1-45.35-.91-3.91-.68-12.71-.14-21.27a4.2 4.2 0 0 0 1-4.38 9.1 9.1 0 0 0-.58-1.49v-.46a68.86 68.86 0 0 1 13.47-4.58c7.45-1.46 5.59-5.3 5.59-5.3s1.68-3.29 2.79-5.3.19-19.75 0-21.21c-.07-.59-.53-3.85-1.06-7.55 2.39-1.7 5.5-3.81 8.89-5.81 6.45-3.82 5-7.85 4.47-8.9zm-97.2 253.53s-5.59 14.26-3.35 17.91-.37 17.2-.37 17.2l-1.87 20.11s-5.21 37.3-3.35 46.07c1.46 6.88 2 27.43 2.17 36a2.53 2.53 0 0 0-.37.18l-.25.13c.86-3.37.5-10.19-3.77-23.91l-.36-56.67s-.66-65.46 4.51-72.78 7-19.75 7-19.75-1.12 17.93-1.85 22.68 1.86 12.83 1.86 12.83zM460.49 830.7c-.05.12-.11.24-.15.35l-.28-.36a2.94 2.94 0 0 0 .43.01z"
        transform="translate(-15.95 -18.56)"
        fill="url(#prefix__a)"
      />
      <path
        d="M501.55 834.6c-2.89 1.11-18.56 3-22.94 2.47s-10.18-2.75-11.83-5.65-10.9-7.28-13.38-7a9 9 0 0 1-3-.42 36.93 36.93 0 0 1-5-1.92 9.28 9.28 0 0 1 .11-3.8 6.09 6.09 0 0 1 .22-.74 6.61 6.61 0 0 1 3.36-3.74l.36-.17a10.17 10.17 0 0 1 2.16-.66c7.86-1.51 40.29 1.52 40.29 1.52s.91 1.63 2.16 3.65c1.56 2.5 3.68 5.55 5.28 6.7a10.25 10.25 0 0 1 3.41 5.88c.38 1.77.1 3.39-1.2 3.88z"
        fill="#fff"
      />
      <path
        d="M501.55 834.6c-2.89 1.11-18.55 3-22.93 2.47s-10.18-2.76-11.84-5.65-10.89-7.28-13.37-7-8-2.34-8-2.34-.86-4 1.64-6.73l5 3.55s13.38 4.15 15.86 8 7 6 13.53 6.39c4.88.32 16.09-1.58 21.34-2.53.35 1.73.08 3.35-1.23 3.84z"
        opacity={0.1}
      />
      <path
        d="M453.68 839.7a133.13 133.13 0 0 0-17.66.83c-9.39 1.1-16.56-3-17.81-4.69s-7.72-7.4-12.69-9.4c-2.43-.94-3-4-2.89-6.86v-.47a28 28 0 0 1 .8-5.37l38.91-.83 3.37 4.57.52.7 2.05 2.79s.93 1.22 2.15 3c2.06 3 4.94 7.43 5.71 10.36 1.23 4.69-2.46 5.37-2.46 5.37z"
        fill="#fff"
      />
      <path
        d="M453.68 839.7a133.13 133.13 0 0 0-17.66.83c-9.38 1.1-16.56-3-17.8-4.69s-7.73-7.45-12.7-9.38c-2.43-.94-3-4-2.89-6.86 2.78.65 8.62 2.31 10.91 5.2 3 3.86 8.37 10.35 16 10.76 6.16.33 21.16-.77 26.66-1.21 1.18 4.67-2.52 5.35-2.52 5.35z"
        opacity={0.1}
      />
      <path
        d="M449.05 813.76c-.45 3.34-1.84 4.24-2.84 4.44a1.93 1.93 0 0 1-.74 0 2.46 2.46 0 0 1-.39-.06s-34.94 7.72-42 1.47a4.89 4.89 0 0 1-.5-.52 28 28 0 0 1 .8-5.37l38.91-.83 3.37 4.57a6.61 6.61 0 0 1 3.36-3.74zM494.05 818.1c-.78.86-1.43 1.35-1.84 1.18-1.84-.74-16.92-3.31-21.71-1.1s-21 .36-21 .36 0-1.92-.09-5a10.17 10.17 0 0 1 2.16-.66c7.86-1.51 40.29 1.52 40.29 1.52s.95 1.68 2.19 3.7z"
        opacity={0.1}
      />
      <path
        d="M516.87 591.9l-4.42 30.54-5.14 20.24-7.36 38.26v40.5s4.78 80.58 2.94 82.78-8.83 14.73-10.67 14-16.92-3.31-21.71-1.11-21 .37-21 .37-.37-31.27-2.21-40.1 3.31-46.36 3.31-46.36l1.84-20.23s2.58-13.62.37-17.3 3.31-18 3.31-18-2.57-8.11-1.83-12.89 1.83-22.81 1.83-22.81-1.83 12.52-6.94 19.87-4.46 73.22-4.46 73.22l.36 57c9.21 30.18 0 27.23 0 27.23s-34.94 7.73-42 1.47-5.04-45.66-5.04-45.66-.73-31.64 2.21-41.2 3.87-44.89 3.87-44.89-.19-70.65 0-75.42c.14-4 0-39.81 0-51v-3.31l4.22-10.48 50-6.26h23.92s36 8.46 39.72 12.11a.83.83 0 0 1 .2.22c2.41 3.53-5.32 39.21-5.32 39.21z"
        fill={primaryColor}
      />
      <path
        d="M456.16 752.32s11 26.49 16.19 28.33-16.19-28.33-16.19-28.33zM460.23 791.32s37.14 1.84 36.77 5.89-36.77-5.89-36.77-5.89zM410.54 780.73c1.47 1.39 28.33 4 26.12 6.54s-23.91 7.48-23.91 7.48zM406.13 735.03c0 1.1 5.52 35.32 7 36.79s13.61 2.94 13.61 2.94z"
        opacity={0.1}
      />
      <path
        d="M446.18 267.29c-5.27 5.89-7.55 14.24-13.69 19.22-3.73 3-8.45 4.43-12.79 6.47s-8.64 5.15-9.93 9.77c-1.44 5.2 1.34 10.51 2.8 15.71 1.51 5.38 1.6 11 1.69 16.63.1 6.81.21 13.62.09 20.43-.18 10.61-1.06 21.71-6.69 30.7 20.33 6.47 41.95 7.35 63.27 8.18a63.84 63.84 0 0 0 12.29-.31 105.49 105.49 0 0 0 10.47-2.65 80.28 80.28 0 0 1 20.86-2.67c3.07 0 6.2.19 9.16-.61s5.81-2.85 6.61-5.81c.71-2.66-.33-5.49-1.69-7.88-2.48-4.36-6-8-8.66-12.3a33.8 33.8 0 0 1-2.17-30.39c2.36-5.49 6.16-10.27 8.48-15.77a33.26 33.26 0 0 0-6.7-35.28c-8.07-8.26-19.65-11.46-30.73-13.16a27.91 27.91 0 0 1-12.94-5c-4.25-2.8-9.76-3.48-14.74-2.86a24.06 24.06 0 0 0-14.99 7.58z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M518.11 326.01a33.27 33.27 0 0 0-2.55 15.27 32.7 32.7 0 0 1 2.55-10.84c2.35-5.49 6.15-10.27 8.47-15.77a31.91 31.91 0 0 0 2.33-14.52 31.1 31.1 0 0 1-2.33 10.1c-2.32 5.5-6.12 10.27-8.47 15.76zM414.56 333.73c.06 3.92.12 7.85.13 11.77 0-5.4-.05-10.79-.13-16.18-.08-5.59-.18-11.25-1.69-16.64-1-3.42-2.48-6.89-3-10.34-.89 4.9 1.64 9.87 3 14.76 1.51 5.34 1.61 11.04 1.69 16.63zM524.05 382.44c-3 .81-6.08.63-9.15.61a80.22 80.22 0 0 0-20.85 2.62 106.2 106.2 0 0 1-10.47 2.64 63.17 63.17 0 0 1-12.3.32c-20.6-.81-41.49-1.68-61.22-7.57a33.94 33.94 0 0 1-2 3.8c20.33 6.46 41.95 7.35 63.26 8.18a63.17 63.17 0 0 0 12.3-.32 103.41 103.41 0 0 0 10.43-2.63 80.22 80.22 0 0 1 20.81-2.65c3.07 0 6.19.19 9.15-.62s5.81-2.84 6.61-5.8a7.94 7.94 0 0 0-.1-4.16c-.89 2.8-3.64 4.75-6.47 5.58z" />
      </g>
      <path
        d="M494.43 370.59c-.74 1.66-3.86 16-4.6 17.47s-4.78 25-5.15 26.32-26.63-5.52-26.63-5.52l-15.81-13.25-16.25-16.17s-.48-14.59 11.49-19.27a18.27 18.27 0 0 1 2.5-.78c14.52-3.49 13.06-47.64 13.06-47.64l29.8 12.87s-5.52 25.76-5.33 30.73c.05 1.67 1.36 2.71 3.07 3.34a24.27 24.27 0 0 0 8.14.88s6.45 9.37 5.71 11.02z"
        fill="#fbbebe"
      />
      <path
        d="M547.78 418.97l4.23 1.11s3.13 4.76-4.23 9.19a127.48 127.48 0 0 0-13.43 9.39l-21.75 6.62-4.19-13.15 20.24-15.36z"
        fill={primaryColor}
      />
      <path
        d="M547.78 418.97l4.23 1.11s3.13 4.76-4.23 9.19a127.48 127.48 0 0 0-13.43 9.39l-21.75 6.62-4.19-13.15 20.24-15.36z"
        opacity={0.1}
      />
      <path d="M389.05 431.67l-8.46 8.28s15.26 17.66 27 18.76 19.31-13.43 19.31-13.43l-10.16-16z" fill={primaryColor} />
      <path d="M389.05 431.67l-8.46 8.28s15.26 17.66 27 18.76 19.31-13.43 19.31-13.43l-10.16-16z" opacity={0.1} />
      <circle cx={469.41} cy={311.17} r={29.43} opacity={0.1} />
      <circle cx={469.41} cy={308.96} r={29.43} fill="#fbbebe" />
      <path
        d="M522.21 556.03a95 95 0 0 0-19.69 4.41c-11 3.66-97.2.06-98.4 0v-3.31l4.22-10.48 50-6.26h23.92s36 8.46 39.72 12.11c.15 2.2.23 3.53.23 3.53zM494.43 370.59c-.74 1.66-3.86 16-4.6 17.47s-4.78 25-5.15 26.32-26.63-5.52-26.63-5.52l-15.81-13.25-16.25-16.17s-.48-14.59 11.49-19.27l29.72 34.17 13.38-35.65a24.27 24.27 0 0 0 8.14.88s6.45 9.37 5.71 11.02z"
        opacity={0.1}
      />
      <path
        d="M467.2 395.44l-30.42-35a12.75 12.75 0 0 0-12.07-.89c-6.81 2.95-15.27 5.34-17.48 6.81s-10.49 10.57-10.49 10.57l24.66 64.51-10.86 42.49s1.66 21.71-2.57 29.62a32.51 32.51 0 0 0-3.5 16.37s1.29 10.49-.18 16a26.65 26.65 0 0 0-.19 11.22s87.39 3.68 98.42 0a94.18 94.18 0 0 1 19.69-4.41s-2-36.8-4-45.63 1.66-42.49 1.66-42.49l-2.39-36.06 14.34-37s-7.77-23.72-15.87-26.11c0 0-14.71-3.5-17.84-5.15s-12.33-3.13-12.33-3.13l-4.83 1.62z"
        fill={primaryColor}
      />
      <rect
        x={454.92}
        y={443.61}
        width={70.04}
        height={107.18}
        rx={2.94}
        ry={2.94}
        transform="rotate(3.89 755.491 253.23)"
        opacity={0.1}
      />
      <rect
        x={457.13}
        y={441.41}
        width={70.04}
        height={107.18}
        rx={2.94}
        ry={2.94}
        transform="rotate(3.89 757.625 250.947)"
        fill="#3f3d56"
      />
      <path fill="#fff" d="M448.855 428.92l60.88 4.14-6.257 92.007-60.88-4.14z" />
      <path
        opacity={0.1}
        d="M454.545 453.063l49.73 3.481-.97 13.86-49.73-3.481zM494.584 511.086l7.892.537-.491 7.223-7.892-.536zM454.295 491.443l40.396 2.747-.49 7.223-40.397-2.747z"
      />
      <path fill="#3f3d56" d="M460.136 426.76l42.063 2.86-.755 11.104-42.063-2.86z" />
      <path
        opacity={0.1}
        d="M460.136 426.76l42.063 2.86-.755 11.104-42.063-2.86zM470.88 554s-.37 54.46-14.72 85.73c0 0 17.3-41.21 17.3-42.86s9.56-18.95 7-24.1-9.58-18.77-9.58-18.77zM471.66 301.6a20.47 20.47 0 0 1 3.33-13.71 16.89 16.89 0 0 0 13.06 17.8 2.21 2.21 0 0 1-.63-2.42c2.05 2.32 3.62 5.07 5.94 7.11s5.8 3.26 8.53 1.81c3.71-2 3.75-7.27 2.79-11.37a53.4 53.4 0 0 0-12.29-23.47 16.26 16.26 0 0 0-12.9-6.56c-5.68-.44-11.58.06-16.67 2.61a44.3 44.3 0 0 0-8 5.59l-14 11.42a13.29 13.29 0 0 0-3.4 3.58 9.8 9.8 0 0 0-1.06 3.75 20.21 20.21 0 0 0 9.42 19.07 14.91 14.91 0 0 1 8.93-14 3.88 3.88 0 0 1 1.39 2.89l2.95-5.26a5.79 5.79 0 0 1 2-2.37c1.82-1 4.09.18 5.64 1.59s3.06 3.17 5.14 3.39l.08-7.83"
      />
      <path
        d="M471.66 300.5a20.48 20.48 0 0 1 3.33-13.72c-.9 8 5.13 16.26 13.07 17.8a2.19 2.19 0 0 1-.63-2.41c2.05 2.32 3.62 5.06 5.94 7.11s5.8 3.26 8.53 1.8c3.71-2 3.75-7.27 2.79-11.36a53.4 53.4 0 0 0-12.29-23.47 19.67 19.67 0 0 0-6.87-5.34 20 20 0 0 0-6-1.22c-5.68-.44-11.58.05-16.67 2.6a44.86 44.86 0 0 0-8 5.6l-14 11.42a13.15 13.15 0 0 0-3.4 3.58 9.75 9.75 0 0 0-1.06 3.75 20.2 20.2 0 0 0 9.42 19.06 14.93 14.93 0 0 1 8.93-14 3.91 3.91 0 0 1 1.39 2.89l2.94-5.24a5.73 5.73 0 0 1 2-2.37c1.82-1 4.09.18 5.64 1.59s3.06 3.16 5.14 3.39l.08-7.84"
        fill="#3f3d56"
      />
      <path
        d="M485.6 486.13c-2.57-1.3-45.07 5.33-45.07 5.33s-7-2-23.92-4.78-18-19.32-18-19.32l-1.85-33.11 5.71-5 24.46 16s.38 8.09 0 9.55c-.24 1-.88 2.19-.82 3a1 1 0 0 0 .82.9c1.66.42 24.28 4.08 24.28 4.08s52.43-3.59 65.5 14.07a13.28 13.28 0 0 1 2.31 4.36c3.24 12.07-31.09 6.07-33.42 4.92z"
        fill="#fbbebe"
      />
      <path
        d="M519.05 481.28c-2 .89-3.24 1.53-3.24 1.53s-18.76-.55-29.3-4.37-23.35-3.14-23.35-3.14-43.92-7.56-37.11-17.43a1 1 0 0 0 .82.9c1.66.42 24.28 4.08 24.28 4.08s52.43-3.59 65.5 14.07a13.28 13.28 0 0 1 2.4 4.36z"
        opacity={0.1}
      />
      <path
        d="M537.29 423.02s2.58 18.21 2.76 19.69 1.11 19.31 0 21.34-2.76 5.33-2.76 5.33 1.84 3.86-5.52 5.34-16 5.88-16 5.88-18.77-.55-29.25-4.41-23.36-3.13-23.36-3.13-55.75-9.57-31.83-21.25 40.84 4.14 40.84 4.14l26.67-1.65s9.94-6.08 12.7-5.52a10.21 10.21 0 0 0 5.7-.92l.19-19.32z"
        fill="#fbbebe"
      />
      <path d="M402.05 378.32l-5.34-.28-16.18 63s17.47-4.42 25 0 21.34 5.33 21.34 5.33l-5.15-50.22z" opacity={0.1} />
      <path
        d="M402.05 377.21l-5.34-.28-16.18 63s17.47-4.42 25 0 21.34 5.33 21.34 5.33l-5.15-50.22z"
        fill={primaryColor}
      />
      <path
        d="M524.42 391.01l7.35 1.66s18.77 27 20.24 28.51-7 7-10.49 7-20.6 2-25.57 6.62-2.9-18.63-2.9-19.16 6.17-15.2 6.17-15.2z"
        opacity={0.1}
      />
      <path
        d="M524.42 389.91l7.35 1.65s18.77 27.05 20.24 28.52-7 7-10.49 7-20.6 2-25.57 6.62-2.9-18.63-2.9-19.16 6.21-15.25 6.21-15.25z"
        fill={primaryColor}
      />
      <g opacity={0.1}>
        <path d="M474.94 286.87a14.75 14.75 0 0 1 .05-2.3 20.47 20.47 0 0 0-3.08 7.55v2.79c0 1.62 0 3.25-.05 4.87h-.14v.75c0-.26 0-.51-.05-.77-2-.32-3.43-2-4.92-3.34s-3.82-2.62-5.64-1.59a5.73 5.73 0 0 0-2 2.37l-2.97 5.24a3.87 3.87 0 0 0-1.39-2.88 14.91 14.91 0 0 0-8.93 14 20.32 20.32 0 0 1-9.49-15.93 20.22 20.22 0 0 0 9.49 18.13 14.93 14.93 0 0 1 8.93-14 3.91 3.91 0 0 1 1.39 2.89l2.94-5.24a5.73 5.73 0 0 1 2-2.37c1.82-1 4.09.18 5.64 1.59s3.06 3.16 5.14 3.39q0-3.84.08-7.66a20.37 20.37 0 0 1 3-7.49z" />
        <path d="M471.56 296.94c.05-.68.13-1.36.23-2l.11-2.76a20.24 20.24 0 0 0-.34 4.76zM501.9 308.87c-2.73 1.46-6.21.24-8.53-1.8s-3.89-4.79-5.94-7.11a2.21 2.21 0 0 0 .63 2.42c-.2 0-.39-.1-.58-.15 2 2.3 3.59 5 5.89 7s5.8 3.26 8.53 1.8 3.51-4.88 3.27-8.21c-.18 2.62-1.12 4.89-3.27 6.05zM487.42 302.21a17 17 0 0 1-12.46-14.86c-.57 7.85 5.35 15.72 13.1 17.23a2.2 2.2 0 0 1-.64-2.37z" />
      </g>
      <path
        d="M983.61 484.21s-3.94-.55-3.94-6.28-2.82-16.46-2.82-16.46-2.44-18.67-5.81-21.63-7.7-20.34-7.7-20.34-.74-9.43-2.25-11.46-3.55-7-6.56-14.09S939 382 939 382s-22.69-13.16-29.12-17.45a9.94 9.94 0 0 1-1.64-1.24c-1.12-1.46-6-1.49-6-1.49-.51-3.23-1-6.93-1.16-10.28v-1.08a34.6 34.6 0 0 0 15.21-18.82c.12-.38.22-.77.33-1.16a3.25 3.25 0 0 0 2-1.76c.57-1.29.59-2.79 1.31-4 .84-1.42 2.44-2.18 3.7-3.24 3.18-2.71 4-7.26 3.85-11.39-.1-3.36-.64-6.74-.43-10.07 0-.28 0-.56.06-.84.06-.49.13-1 .22-1.48.49-2.48 1.56-4.82 2.16-7.28s.66-5.23-.74-7.35c-2.05-3.11-6.32-3.73-10.07-4-4.25-.36-8 .1-10.77-3.43a37.7 37.7 0 0 0-4.28-5.16c-.56-.52-6-3.85-6-4.06a24.31 24.31 0 0 0-17-1.31c-2.83.82-5.48 2.16-8.35 2.83-6.16 1.46-13.26-.12-18.5 3.41-2.92 2-4.67 5.19-6.31 8.28q-2 3.82-4.06 7.65c-2.22 4.19-4.46 8.45-5.39 13.09a22.19 22.19 0 0 0-.37 3.07v1.59c0 .34 0 .68.06 1s0 .41.07.62.09.68.15 1 .18.89.3 1.32c0 .19.12.37.18.56s.22.67.35 1 .14.35.22.52c.15.35.33.69.51 1 .08.13.14.26.22.39a11.34 11.34 0 0 0 .92 1.34c2.13 2.67 5.29 4.37 7.62 6.87V321.77a34.23 34.23 0 0 0 15.68 27.9c0 .38.05.77.07 1.16a57.09 57.09 0 0 1-.11 8.9 4.22 4.22 0 0 0-3.32-1.48 4.76 4.76 0 0 0-1.28.11l-.09-.07v.09c-2.2.54-4.91 2.83-7.5 9.34 0 0-7.88 8.88-13.88 8.51s-21.19 9.25-21.19 9.25-14.82 9.61-18 19.41a135.69 135.69 0 0 1-6.39 16.28l-18.37 37.72-3.37 30s1.87 13.31 1.5 15.35 7.69 20.34 7.69 20.34 26.63 46.78 37.51 49.18l.78-.54a6.81 6.81 0 0 0 1.47.54l2.24-1.57a23.41 23.41 0 0 1-.18 5.27c-1.49 4.63.57 34.77 3.19 40.68s1.69 83.41 1.69 83.41l-.37 6.83s0 .22.09.6l-.09 1.62.27.14a19.33 19.33 0 0 1-.27 6.52c-.94 3-1.32 11.47-1.32 11.47s-7.5 47.88-3.94 57.5 6.57 20.16 6.57 20.16 3.75 12 .18 14-13.68 5.55-11.62 10.54c1.9 4.62 9.11 17 10.18 18.81l-.09 1-1.47 15.93a20 20 0 0 0 1.69 6.08c1.61 3.48 4.73 7.07 10.69 6.68 1-.07 2.15-.18 3.28-.33 10.89-1.47 24.29-6.33 24.29-6.33a9.58 9.58 0 0 1-1.89-1.57 5.49 5.49 0 0 1-1.67-4c.16-2.91-5.27-16.72-6.63-20.13l-.31-.76s12.38-12.95 10.32-24.41c0 0-13.7-8-9.19-12.4s12.57-17 12.57-17 .37-47.15 0-54.18a58.4 58.4 0 0 1 .69-14.64c.15-.72.33-1.43.52-2.14a127.74 127.74 0 0 0 18.86 1.43q3.46 0 7-.14 0 1 .09 2.16c.52 11.68 1.49 32.17 2.28 39.78 1.12 10.9 7.31 40.31 7.31 40.31s-11.81 7.57 2.06 26.26c0 0 0 6.76-.92 7.75a84.62 84.62 0 0 0-2.37 9.77c-.58 3.51-.82 7.08.12 8.92 2.25 4.42 15.75 4.06 15.75 4.06a2.13 2.13 0 0 1 .33-.05 19.27 19.27 0 0 1 14.29 4.3c5.13 4.12 24.59 2.32 35.14 1 4.13-.53 6.89-1 6.89-1a4.05 4.05 0 0 0 .14-1.44c-.11-2.59-2.14-8.27-15.9-13.34 0 0-12.94-8.7-12.76-16.28h-1.78c.94-.03 1.6-.03 1.6-.03s-5.07-18.49-3-20-4.13-22-4.13-22-3.55-34.4-3.75-36.8a21.14 21.14 0 0 1 .94-6.1l-.94-18.87s-.18-6.27 0-8.31a39.08 39.08 0 0 0-.42-5.29c-.09-.7-.18-1.43-.28-2.15 4.85-1.23 8-2.36 8-2.36l-.56-65.65c4.12-8 4.88-25.56 4.86-38 0-8-.36-13.92-.36-13.92l5.63-9.19s1.3-11-.76-13.41c-.91-1.09-.5-2.22.25-3.15a10.46 10.46 0 0 1 1.25-.88 1.57 1.57 0 0 1-.13-.22 9.94 9.94 0 0 1 1.25-.89s-2-3.1-.21-4.41c1.68 1.14 3.18 2.05 4.32 2.7-.08.73-.16 1.15-.16 1.15l.48-1c1.1.62 1.77 1 1.77 1s8.82-17.57 8.63-20.15 6-13.5 6-13.5.75-5.74 4.13-8.14 2.62-19.79 2.62-19.79.94-9.06 3.19-12.75-2.01-8.71-2.01-8.71zm-168.76-7.71l.17 4.19c-1-1.61-1.72-2.76-1.72-2.76z"
        transform="translate(-15.95 -18.56)"
        fill="url(#prefix__b)"
      />
      <path d="M945.62 541.09l-2.16 9.2s-17.3-8.85-20.41-20.05 5.21-15.47 5.21-15.47l16.13 6.82z" fill="#fff" />
      <path d="M945.62 541.09l-2.16 9.2s-17.3-8.85-20.41-20.05 5.21-15.47 5.21-15.47l16.13 6.82z" opacity={0.1} />
      <path
        d="M848.53 854.2s-16 5.88-27 6.62c-5.84.39-8.91-3.19-10.49-6.64a20.3 20.3 0 0 1-1.66-6l1.45-15.85.76-8.43 23.37-6.08 3.31 10.13.31.76c1.32 3.39 6.66 17.13 6.5 20a5.49 5.49 0 0 0 1.63 4 9.29 9.29 0 0 0 1.82 1.49zM957.77 846.14a4 4 0 0 1-.14 1.44s-34.22 5.7-41.22 0a18.53 18.53 0 0 0-14.36-4.23s-13.24.36-15.45-4c-.92-1.83-.68-5.38-.11-8.87a85.07 85.07 0 0 1 2.32-9.72l.53-.42 3.15-2.53 36.88-1.09h.28c-.18 7.54 12.51 16.19 12.51 16.19 13.51 5 15.5 10.65 15.61 13.23z"
        fill="#fff"
      />
      <path
        d="M957.78 846.14a4.12 4.12 0 0 1-.15 1.44s-34.22 5.7-41.21 0a18.53 18.53 0 0 0-14.37-4.23s-13.25.36-15.46-4c-.91-1.83-.68-5.38-.11-8.88 5.1.51 13.15 1.78 16.31 4.82 4.78 4.6 12.88 9.2 17.84 9.57 3.92.24 27.23.98 37.15 1.28zM848.53 854.2s-16 5.88-27 6.62c-5.84.39-8.91-3.19-10.49-6.64 4.08 1.37 9.73 2.8 12.7 1.49 3.52-1.57 16-2.57 23-3a9.09 9.09 0 0 0 1.79 1.53z"
        opacity={0.1}
      />
      <path
        d="M872.27 380.31c-13.2-5.13-30.18-22.08-25.94-30a17.93 17.93 0 0 0 1.65-6.36 58.05 58.05 0 0 0 .12-9 123.6 123.6 0 0 0-1.77-14.65s41.21.93 38.81 7c-.7 1.79-.82 4.88-.62 8.33s.69 7.38 1.21 10.69c.71 4.53 1.44 8 1.44 8s-2.53 3.53-4 3.72 8.04 29.62-10.9 22.27z"
        fill="#cf6f80"
      />
      <path
        d="M838.54 828.66l-.31.34c-12.32-14.9-27.22 3.68-27.22 3.68l-.22-.4.76-8.43 23.37-6.08 3.31 10.13zM929.67 817.77s-9-.18-13.8 4.06-28 .91-27 0a3.46 3.46 0 0 0 .52-1.53l3.15-2.53 36.88-1.09c.14.7.25 1.09.25 1.09z"
        opacity={0.1}
      />
      <path
        d="M853.87 700.76a28.05 28.05 0 0 0-1.52 5.13 58.71 58.71 0 0 0-.69 14.56c.37 7 0 53.91 0 53.91s-7.91 12.51-12.33 16.92 9 12.33 9 12.33c2 11.41-10.12 24.29-10.12 24.29-12.32-14.9-27.22 3.67-27.22 3.67s-8.1-14-10.12-19 7.91-8.45 11.4-10.49-.18-14-.18-14-2.94-10.49-6.44-20.06 3.86-57.2 3.86-57.2.38-8.47 1.29-11.42a19.34 19.34 0 0 0 .27-6.48c-.06-.73-.13-1.33-.18-1.75s-.09-.6-.09-.6l.14-.24 5-9.32s40.33 13.88 37.93 19.75zM929.67 816.67s-9-.19-13.8 4-28 .92-27 0 .91-7.72.91-7.72c-13.61-18.59-2-26.13-2-26.13s-6.07-29.25-7.17-40.1c-.77-7.57-1.72-28-2.23-39.57-.22-5-.35-8.45-.35-8.45l11.02-2.19 1.43-.28 26.82-5.39s.74 5 1.24 9.09a39.94 39.94 0 0 1 .41 5.27c-.17 2 0 8.27 0 8.27l.92 18.76a21.64 21.64 0 0 0-.92 6.07c.19 2.4 3.68 36.61 3.68 36.61s6.07 20.42 4 21.89 3.04 19.87 3.04 19.87z"
        fill={primaryColor}
      />
      <path
        d="M885.14 327.33c-.7 1.79-.82 4.88-.62 8.33a34.25 34.25 0 0 1-36.42-.68 123.6 123.6 0 0 0-1.77-14.65s41.21.93 38.81 7z"
        opacity={0.1}
      />
      <path d="M901.05 305.25a34.212 34.212 0 0 1-68.42.82v-.82a34.22 34.22 0 0 1 68.44 0z" fill="#cf6f80" />
      <path
        d="M872.27 380.31c-13.2-5.13-30.18-22.08-25.94-30a17.93 17.93 0 0 0 1.65-6.36l18.07 14.86 11.18 9.17 8.5-21.63c.71 4.53 1.44 8 1.44 8s-2.53 3.53-4 3.72 8.04 29.59-10.9 22.24z"
        opacity={0.1}
      />
      <path
        fill={primaryColor}
        d="M919 445.98l-15.09 253.5-19.68 1.29-50.97-146.99 8.36-174.51 1.77-36.87 22.66 18.61 11.18 9.17 8.75-22.27 16.27 14.18L919 445.98z"
      />
      <path
        d="M853.87 700.76a28.05 28.05 0 0 0-1.52 5.13 145 145 0 0 1-41.3-12.89l-.27-.14.09-1.61v-.84l5-9.32s40.4 13.8 38 19.67zM889.38 705.93a101.29 101.29 0 0 1-11.06 1.27c-.22-5-.35-8.45-.35-8.45l11.08-2.24zM918.58 699.93c-7.11 1.85-18.1 3.93-27.92 2.63l-.14-6.33 26.82-5.39s.71 4.96 1.24 9.09z"
        opacity={0.1}
      />
      <path
        d="M890.48 703.72c-41 7-78.55-13.07-78.55-13.07l.36-6.8s.93-77.09-1.65-83-4.59-35.84-3.13-40.41-5.33-73.57-5.33-73.57l-1.1-28-40.29-16.37 18-37.53a135.61 135.61 0 0 0 6.26-16.2c3.13-9.75 17.66-19.32 17.66-19.32s14.9-9.56 20.79-9.2 13.61-8.46 13.61-8.46c5.7-14.53 10.86-8 10.86-8 0 .7 0 0-.28 2.15-2 15.95 32.34 66.35 32.83 67.25l3.31 79.66 3.31 100.81z"
        opacity={0.1}
      />
      <path
        d="M889.38 703.72c-41 7-78.56-13.07-78.56-13.07l.37-6.8s.92-77.09-1.66-83-4.59-35.87-3.12-40.48-5.36-73.54-5.36-73.54l-1.11-28-40.28-16.37 18-37.53a137.73 137.73 0 0 0 6.26-16.19c3.13-9.72 17.71-19.3 17.71-19.3s14.9-9.56 20.78-9.2 13.64-8.45 13.64-8.45c5.71-14.53 12-8 12-8 0 .7-.6 1-.28 2.15 4.4 15.47 31.24 66.35 31.73 67.25l3.31 79.66 3.24 100.86z"
        fill="#fff"
      />
      <path
        d="M878.33 415.44c-4.41-1.84-27.77-28.51-27.77-28.51v-6.07c-.85-2-5.91-.78-10 .62l1.76-36.87 2 1.66c4.37 15.46 33.53 68.28 34.01 69.17z"
        opacity={0.1}
      />
      <path
        d="M879.44 413.24c-4.42-1.85-27.78-28.51-27.78-28.51v-6.08c-.85-2-5.9-.78-10 .62l1.73-36.83 2 1.65c4.41 15.44 33.56 68.25 34.05 69.15z"
        fill="#fff"
      />
      <path
        d="M811.93 546.24c.55 0 28.51-2.94 28.51-2.94s16.93 33.3 15.82 41.39-3.12 15.27-9.93 14-36.65 1-36.65 1z"
        opacity={0.1}
      />
      <path
        d="M810.82 544.03c.56 0 28.52-2.94 28.52-2.94s16.92 33.35 15.82 41.35-3.13 15.27-9.93 14-36.66 1-36.66 1z"
        fill="#fff"
      />
      <path
        d="M831.89 528.44s25.66 13.8 26.21 18-13.06-1.84-16-2.58a38.14 38.14 0 0 0-5.89-.92l-19.61.53z"
        fill="#cf6f80"
      />
      <circle cx={871.16} cy={414.46} r={2.7} opacity={0.1} />
      <circle cx={871.16} cy={413.36} r={2.7} fill="#3f3d56" />
      <circle cx={876.13} cy={531.34} r={2.7} opacity={0.1} />
      <circle cx={876.13} cy={530.23} r={2.7} fill="#3f3d56" />
      <circle cx={873.86} cy={472.9} r={2.7} opacity={0.1} />
      <circle cx={873.86} cy={471.8} r={2.7} fill="#3f3d56" />
      <path
        d="M936.1 542.38s1.84 2.76 0 4 .18 4.42.18 4.42-4.59 2.68-2.57 5.11.74 13.34.74 13.34l-5.52 9.19s.33 5.89.35 13.85c0 12.42-.73 29.88-4.77 37.84l.54 65.31s-19.33 7.07-35.51 4.91l-2.4-104.8s3.5-59.43 4.79-70.83a118.65 118.65 0 0 0 .92-17.85s-.55-17.84-2.4-26.11c0 0-2-35.88-2.2-45.81-.09-4.75.16-18.61.44-31.79.31-14.41.66-28 .66-28l-3.65-28.89s3.65-.36 4.75 1.1a10.53 10.53 0 0 0 1.6 1.23c6.31 4.26 28.57 17.36 28.57 17.36s12.32 4.9 15.27 11.92 5 12 6.43 14 2.21 11.4 2.21 11.4 4.24 17.3 7.55 20.23 5.69 21.53 5.69 21.53l-29.25 23s-2.57 38.26-3.12 39.74 10.7 34.6 10.7 34.6z"
        fill="#fff"
      />
      <path
        d="M937.21 542.38s1.83 2.76 0 4 .17 4.42.17 4.42-4.59 2.68-2.57 5.11.74 13.34.74 13.34l-5.5 9.19s.33 5.89.36 13.85c0 12.42-.73 29.88-4.77 37.84l.55 65.31s-19.33 7.07-35.51 4.91l-2.39-104.8s3.49-59.43 4.79-70.83a117.56 117.56 0 0 0 .91-17.85s-.55-17.84-2.39-26.11c0 0-2-35.88-2.21-45.81-.09-4.75.16-18.61.44-31.79.31-14.41.66-28 .66-28l-4.82-29.28s4.82 0 5.93 1.49a9.49 9.49 0 0 0 1.6 1.23c6.3 4.26 28.56 17.36 28.56 17.36s12.29 4.9 15.29 11.92 5 12 6.43 14 2.21 11.4 2.21 11.4 4.24 17.3 7.55 20.23 5.7 21.53 5.7 21.53l-29.25 23s-2.57 38.26-3.13 39.74 10.65 34.6 10.65 34.6z"
        fill="#fff"
      />
      <path
        d="M902.18 383.65l2.65 7.7-13.91 14c.31-14.41.66-28 .66-28l-4.82-29.27s4.82 0 5.93 1.49a9.49 9.49 0 0 0 1.6 1.23l11.82 34.09z"
        opacity={0.1}
      />
      <path
        d="M901.05 381.44l2.65 7.69-13.9 14c.3-14.41.66-28 .66-28l-4.83-29.28s4.83 0 5.93 1.49a10 10 0 0 0 1.6 1.23l11.89 34.12z"
        fill="#fff"
      />
      <path
        d="M901.05 305.25a34.11 34.11 0 0 1-1.68 10.61 1.42 1.42 0 0 1-1.08-.26c-.27-9-4.69-17.46-10.14-24.65a26.11 26.11 0 0 0-5.5-5.7 10.77 10.77 0 0 0-7.46-2.11c-3 .41-5.65 2.45-8.68 2.71-4 .33-7.58-2.44-11.55-2.57a11.32 11.32 0 0 0-8.49 3.94 23.16 23.16 0 0 0-4.55 8.43 49.38 49.38 0 0 0-2.54 14.56c-.05 2.8-.32 6.31-2.92 7.33a14.9 14.9 0 0 0-3.77-11.4l-.06-.07v-.82a34.22 34.22 0 0 1 68.44 0z"
        opacity={0.1}
      />
      <path
        d="M881.05 250.92a23.56 23.56 0 0 0-16.62-1.3c-2.77.82-5.38 2.15-8.19 2.82-6 1.45-13-.12-18.15 3.39-2.86 2-4.58 5.16-6.18 8.24l-4 7.61c-2.18 4.17-4.38 8.41-5.29 13s-.36 9.73 2.55 13.43c2.11 2.68 5.25 4.37 7.55 6.9a15 15 0 0 1 3.76 11.43c2.6-1 2.86-4.53 2.92-7.33a49.44 49.44 0 0 1 2.54-14.56 23.16 23.16 0 0 1 4.55-8.43 11.33 11.33 0 0 1 8.49-3.95c4 .14 7.59 2.91 11.55 2.57 3-.25 5.66-2.29 8.68-2.7a10.72 10.72 0 0 1 7.46 2.11 25.62 25.62 0 0 1 5.49 5.7c5.46 7.2 9.89 15.62 10.15 24.65 1.13.82 2.76-.26 3.32-1.54s.58-2.78 1.29-4c.82-1.41 2.39-2.17 3.62-3.23 3.12-2.69 3.9-7.22 3.78-11.33s-.92-8.28-.14-12.32c.47-2.47 1.53-4.8 2.11-7.25s.65-5.2-.72-7.31c-2-3.09-6.21-3.71-9.88-4-4.17-.36-7.9.1-10.56-3.41a39.09 39.09 0 0 0-4.2-5.14c-.55-.53-5.88-3.83-5.88-4.05z"
        fill="#512e4e"
      />
      <path
        d="M772.33 461.8l-10.44-19.31-3.31 29.8s1.84 13.24 1.47 15.27 7.54 20.23 7.54 20.23 26.13 46.55 36.8 48.94l36-25.76-9.56-12.14s-3.31-1.29-4.14 0c0 0-17.76-30.54-19.59-32.74s-1.48-6.63-1.48-6.63-2.76-2.94-1.84-5.7-5.28-12.32-5.28-12.32l5.7-5.33z"
        opacity={0.1}
      />
      <path
        d="M762.44 440.28l-2.76 2.21-3.31 29.8s1.84 13.24 1.47 15.27 7.55 20.23 7.55 20.23 26.12 46.55 36.79 48.94l36.06-25.76-9.57-12.14s-3.31-1.29-4.14 0c0 0-17.75-30.54-19.59-32.74s-1.47-6.63-1.47-6.63-2.76-2.94-1.84-5.7-5.34-12.32-5.34-12.32l5.7-5.33z"
        fill="#fff"
      />
      <path
        d="M933.71 557.06c2 2.43.74 13.35.74 13.35l-5.52 9.13s.33 5.9.35 13.86l-9.28 2.9a5.52 5.52 0 0 1-7.16-5.44l1.61-51.6 21.65 8.27c-1.84 1.28.18 4.42.18 4.42s-4.59 2.68-2.57 5.11z"
        opacity={0.1}
      />
      <path
        d="M934.81 555.96c2 2.42.74 13.34.74 13.34l-5.5 9.14s.33 5.89.36 13.85l-9.45 2.95a5.39 5.39 0 0 1-7-5.31l1.61-51.78 21.64 8.29c-1.85 1.28.17 4.42.17 4.42s-4.59 2.67-2.57 5.1z"
        fill="#fff"
      />
      <path
        d="M941.99 531.34s-1.47 9.39-5.15 9.94-5.33 15.19-9 14.68-1.24-13.62-1.11-16.16-4-13.06-.92-15.45 12.88 0 12.88 0z"
        fill="#cf6f80"
      />
      <path
        d="M949.77 459.04l6.93-14s2.77 10.67 2.77 16.37 3.86 6.26 3.86 6.26 4.23 5 2 8.65-3.12 12.69-3.12 12.69.73 17.29-2.58 19.68-4.05 8.1-4.05 8.1-6.07 10.85-5.88 13.43-8.46 20.05-8.46 20.05 4.23-21.71-20.42-31.09c0 0-.19-7.36 1.65-9.38s4.71-3 2.91-13.16-.52-22.41-.52-24.86 5.52-17.72 5.52-17.72z"
        opacity={0.1}
      />
      <path
        d="M952.85 443.04l6.06 2s2.77 10.67 2.77 16.37 3.86 6.26 3.86 6.26 4.23 5 2 8.65-3.13 12.69-3.13 12.69.74 17.29-2.57 19.68-4 8.1-4 8.1-6.07 10.85-5.88 13.43-8.47 20.05-8.47 20.05 4.23-21.71-20.42-31.09c0 0-.18-7.36 1.66-9.38s4.71-3 2.91-13.16-.52-22.41-.52-24.86 5.52-17.72 5.52-17.72z"
        fill="#fff"
      />
      <path
        d="M818.97 805.91s9.66-6.07 16-1.66-16 1.66-16 1.66zM894.05 787.14s8.55-1.1 15.73 6.63-15.73-6.63-15.73-6.63z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M906.54 303.53c-1.23 1.07-2.81 1.82-3.63 3.23-.7 1.21-.72 2.71-1.28 4s-2.19 2.36-3.33 1.54c-.26-9-4.69-17.45-10.14-24.65a25.57 25.57 0 0 0-5.49-5.69 10.75 10.75 0 0 0-7.47-2.12c-3 .41-5.64 2.45-8.67 2.71-4 .33-7.59-2.44-11.56-2.57a11.28 11.28 0 0 0-8.48 3.94 23.16 23.16 0 0 0-4.55 8.43 49.44 49.44 0 0 0-2.54 14.56c-.06 2.79-.32 6.27-2.9 7.31a13.84 13.84 0 0 1 0 2.23c2.61-1 2.87-4.53 2.93-7.33a49.44 49.44 0 0 1 2.54-14.56 23.16 23.16 0 0 1 4.55-8.43 11.32 11.32 0 0 1 8.48-3.95c4 .14 7.6 2.91 11.56 2.57 3-.25 5.66-2.29 8.67-2.7a10.75 10.75 0 0 1 7.47 2.11 25.62 25.62 0 0 1 5.49 5.7c5.45 7.2 9.88 15.62 10.14 24.65 1.14.82 2.77-.26 3.33-1.54s.58-2.78 1.28-4c.82-1.41 2.4-2.17 3.63-3.23 3.12-2.69 3.9-7.22 3.78-11.33v-.38c-.2 3.58-1.15 7.21-3.81 9.5zM832.71 302.83c-2.29-2.53-5.43-4.23-7.54-6.91a14.51 14.51 0 0 1-2.91-8.18 15.41 15.41 0 0 0 2.91 10.39c2.11 2.68 5.25 4.37 7.54 6.9a15 15 0 0 1 3.78 8.92 15 15 0 0 0-3.78-11.12zM912.29 272.63c-.59 2.45-1.64 4.78-2.12 7.25a23.15 23.15 0 0 0-.31 5.06 19.41 19.41 0 0 1 .31-2.85c.48-2.47 1.53-4.8 2.12-7.25a12.56 12.56 0 0 0 .33-4.14 13.9 13.9 0 0 1-.33 1.93z" />
      </g>
      <ellipse cx={132.73} cy={823.23} rx={97.44} ry={15.65} fill={primaryColor} opacity={0.1} />
      <path fill="#535461" d="M129.6 523.42h6.27v141.17h-6.27z" />
      <path
        d="M175.28 664.17l-.4 6.36-.55 9-.23 3.74-.56 9-.24 3.74-.55 9-6.33 102.07a17.28 17.28 0 0 1-17.25 16.22H116.3a17.27 17.27 0 0 1-17.25-16.29l-6.33-102.07-.55-9-.23-3.74-.57-9-.23-3.74-.55-9-.4-6.36a9 9 0 0 1 8.94-9.51h67.22a9 9 0 0 1 8.93 9.58z"
        fill="#3f3d56"
      />
      <path
        fill="#9d9cb5"
        d="M174.88 670.52l-.56 8.98H91.14l-.56-8.98h84.3zM174.09 683.24l-.55 8.98H91.93l-.56-8.98h82.72zM173.3 695.97l-.55 8.97H92.72l-.56-8.97h81.14z"
      />
      <path
        d="M81.05 576.34c36.52 26.42 51.73 67.74 51.73 67.74s-44-1.51-80.53-27.93S.49 548.44.49 548.44s44 1.48 80.56 27.9z"
        fill={primaryColor}
      />
      <path
        d="M.49 548.44s45.67 25.35 60.32 46.34 71.93 49.32 71.93 49.32"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M104.58 523.12c19.88 14.37 28.16 36.86 28.16 36.86s-24-.82-43.83-15.19-28.16-36.87-28.16-36.87 23.96.82 43.83 15.2z"
        fill={primaryColor}
      />
      <path
        d="M60.75 507.92s24.86 13.8 32.84 25.22 39.15 26.84 39.15 26.84"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M161.62 558.84c-22.83 25.09-27.66 57.88-27.66 57.88s32.19-7.9 55-33 27.66-57.88 27.66-57.88-32.17 7.91-55 33z"
        fill={primaryColor}
      />
      <path
        d="M216.64 525.85s-29.74 25.72-37.3 43.44-45.38 47.43-45.38 47.43"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
};

UndrawDoctors.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDoctors;
