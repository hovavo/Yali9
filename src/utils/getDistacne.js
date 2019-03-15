const getDistance = (pointA, pointB) => {
  const xDiff = pointA.x - pointB.x;
  const yDiff = pointA.y - pointB.y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

export default getDistance;