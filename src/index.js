import React, { useState } from "react";
import ReactDOM from "react-dom";
import Scene from "./componenets/Scene";
import OrientationMonitor from "./componenets/OrientationMonitor";
import "./styles.css";

function App() {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
    isCenter: false
  });

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const onMove = offset => {
    offset.isCenter = Boolean(
      Math.abs(offset.x <= 0.01) && Math.abs(offset.y <= 0.01)
    );
    setOffset(offset);
  };

  return (
    <div className="App">
      <OrientationMonitor onMove={onMove} />
      <Scene size={canvasSize} offset={offset} numStars={40} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
