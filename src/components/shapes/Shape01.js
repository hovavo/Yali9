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
      d="M128.5 247.1l82.8-116.8M159.3 157.1h-8.6c-34.7 0-62.9-28.1-62.9-62.9V91c0-34.7 28.1-62.9 62.9-62.9h8.6c34.7 0 62.9 28.1 62.9 62.9v3.2c-.1 34.8-28.2 62.9-62.9 62.9zM33.2 431l20.6-29.1M40.9 408.5h-2.1c-8.7 0-15.7-7-15.7-15.7v-.8c0-8.7 7-15.7 15.7-15.7h2.1c8.7 0 15.7 7 15.7 15.7v.8c0 8.7-7.1 15.7-15.7 15.7z"
    />
    <path
      className="Shape01_svg__st1"
      d="M116.6 436.5v-56.9h-6.3M161.7 425.5v-33.8c0-7.1-5.5-12.6-12.6-12.6h-10.2M287 392.9v-13.3h-6.7M210.8 392.9v-13.3h-6.7M231.6 365.8v13.7h28.3v28.3c0 9.8-7.9 17.7-17.7 17.7M138.5 425.5h29.9"
    />
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SvgShape01 svgRef={ref} {...props} />
));
export default ForwardRef;
