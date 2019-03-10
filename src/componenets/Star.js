import React from "react";

const Star = props => {
  const { x, y, depth, parallax } = props;
  const style = {
    top: y,
    left: x,
    opacity: `${1 - depth * 0.3}`,
    transform: `translate3d(${parallax.x / depth}px, ${parallax.y /
      depth}px, 0px)`
  };
  return <div className="layer star" style={style} />;
};

export default Star;
