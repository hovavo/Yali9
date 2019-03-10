import React, { useState } from "react";
import Star from "./Star";

const Scene = props => {
  const [stars] = useState(() => {
    return Array.from(Array(props.numStars)).map((item, i) => {
      return {
        i: i,
        x: (i / props.numStars) * props.size.width,
        y: (i / props.numStars) * props.size.height,
        depth: Math.random() * 5 - 2.5
      };
    });
  });

  const [offsetOffset] = useState({
    x: (Math.random() * props.size.width) / 3,
    y: (Math.random() * props.size.height) / 3
  });

  const localOffset = {
    x: props.offset.x + offsetOffset.x,
    y: props.offset.y + offsetOffset.y
  };

  return (
    <div className="scene">
      {stars.map(star => (
        <Star {...star} offset={localOffset} key={star.i} />
      ))}
    </div>
  );
};

export default Scene;
