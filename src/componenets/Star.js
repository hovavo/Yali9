import React from "react";

const Star = props => {
  const { x, y, depth, offset } = props;
  const style = {
    top: y,
    left: x,
    transform: `translate3d(${offset.x / depth}px, ${offset.y / depth}px, 0px)`
  };
  return <div className="layer star" style={style} />;
};

export default Star;
