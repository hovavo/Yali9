import React, { useState } from "react";
import Star from "./Star";

const Scene = props => {
  const getRandomScreenPoint = (range = 1) => {
    const rangePx = {
      x: props.size.width * range,
      y: props.size.height * range
    };
    const rangeMod = {
      x: props.size.width * ((1 - range) / 2),
      y: props.size.height * ((1 - range) / 2)
    };
    return {
      x: Math.random() * rangePx.x + rangeMod.x,
      y: Math.random() * rangePx.y + rangeMod.y
    };
  };

  const [stars] = useState(() => {
    const count = 30;
    const shape = Array.from(Array(count)).map((item, i) => {
      return {
        i: i,
        x: Math.sin((count / Math.PI) * 2 * i) * 100 + props.size.width / 2,
        y: Math.cos((count / Math.PI) * 2 * i) * 100 + props.size.height / 2,
        depth: Math.random() + 0.1
      };
    });

    const bg = Array.from(Array(120)).map((item, i) => {
      return {
        i: i + shape.length,
        depth: Math.random() + 0.1,
        ...getRandomScreenPoint(2)
      };
    });
    return [...bg, ...shape];
  });

  const [parallaxOffset] = useState({
    x: Math.random() * 10,
    y: Math.random() * 10
  });

  const localparallax = {
    x: props.parallax.x + parallaxOffset.x,
    y: props.parallax.y + parallaxOffset.y
  };

  return (
    <div className="scene">
      {stars.map(star => (
        <Star {...star} parallax={localparallax} key={star.i} />
      ))}
    </div>
  );
};

export default Scene;
