import React from "react";

const Star = props => {
  const { depth, parallax, isZero } = props;
  const x = isZero ? props.x : Math.round(parallax.x / depth + props.x);
  const y = isZero ? props.y : Math.round(parallax.y / depth + props.y);
  const style = {
    opacity: `${1 - depth * 0.4}`,
    transform: `translate3d(${ x }px, ${ y }px, 0px)`
  };
  return <div className="layer star" style={style} />;
};

export default Star;
