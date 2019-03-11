import React from "react";

const SvgShape01 = ({ svgRef, ...props }) => (
  <svg
    id="Shape01_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 372 602"
    xmlSpace="preserve"
    ref={svgRef}
    {...props}
  >
    <style>
      {".Shape01_svg__st0{fill:none;stroke:#afafaf;stroke-miterlimit:10}"}
    </style>
    <path
      className="Shape01_svg__st0"
      d="M152.5 439.6l104.8-147.9M191.4 325.6h-10.9c-43.9 0-79.6-35.6-79.6-79.6v-4.1c0-43.9 35.6-79.6 79.6-79.6h10.9c43.9 0 79.6 35.6 79.6 79.6v4.1c0 44-35.6 79.6-79.6 79.6z"
    />
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SvgShape01 svgRef={ref} {...props} />
));
export default ForwardRef;
