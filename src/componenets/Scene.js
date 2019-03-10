import React, { useState } from "react";
import Star from "./Star";

const Scene = props => {
  const getRandomScreenPoint = (percent = 1) => {
    return {
      x: Math.random() * props.size.width * percent,
      y: Math.random() * props.size.height * percent
    };
  };

  const getRandomDepth = () => {
    return Math.random() * 3 - 1.5;
  };

  const [stars] = useState(() => {
    const count = 60;
    const shape = Array.from(Array(count)).map((item, i) => {
      return {
        i: i,
        x: Math.sin((count / Math.PI) * 2 * i) * 100 + props.size.width / 2,
        y: Math.cos((count / Math.PI) * 2 * i) * 100 + props.size.height / 2,
        depth: getRandomDepth()
      };
    });

    const bg = Array.from(Array(props.numStars)).map((item, i) => {
      return {
        i: i + shape.length,
        depth: getRandomDepth(),
        ...getRandomScreenPoint()
      };
    });
    return [...bg, ...shape];
  });

  const [offsetOffset] = useState(getRandomScreenPoint(0.1));

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
