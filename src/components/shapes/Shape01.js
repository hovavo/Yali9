import React from "react";

const SvgShape01 = ({ svgRef, ...props }) => (
  <svg
    id="Shape01_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 310 470"
    xmlSpace="preserve"
    ref={svgRef}
    {...props}
  >
    <style>
      {
        ".Shape01_svg__st0,.Shape01_svg__st1{fill:none;stroke:#afafaf;stroke-miterlimit:10}.Shape01_svg__st1{stroke-linecap:square}"
      }
    </style>
    <path
      className="Shape01_svg__st0"
      d="M128.5 277.1l82.8-116.8M159.3 187.1h-8.6c-34.7 0-62.9-28.1-62.9-62.9V121c0-34.7 28.1-62.9 62.9-62.9h8.6c34.7 0 62.9 28.1 62.9 62.9v3.2c-.1 34.8-28.2 62.9-62.9 62.9z"
    />
    <path
      className="Shape01_svg__st1"
      d="M65.9 392.8V382h-5.4M139.8 419.4V382h-5.5M258.2 419.4V382h-5.5M11.5 392.8V382H6M24.6 370.8V382h23v23c0 8-6.4 14.4-14.4 14.4M216.3 370.8V382h23v23c0 8-6.4 14.4-14.4 14.4M99.6 382h12.9c3.6 0 6.5 2.9 6.5 6.5v30.9H97.1h27.7M157.8 382v37.4h7.3c10.5 0 19-8.5 19-19v-14c0-2.4-2-4.4-4.4-4.4H174M263.7 382h-5.5M278.2 419.4v-19.6c0-9.8 8-17.8 17.8-17.8h8v37.4h-11.7"
    />
    <path
      className="Shape01_svg__st1"
      d="M278.2 382v1.2c0 2.6 2.1 4.6 4.6 4.6"
    />
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SvgShape01 svgRef={ref} {...props} />
));
export default ForwardRef;
