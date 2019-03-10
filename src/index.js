import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Scene from "./componenets/Scene";
import OrientationMonitor from "./componenets/OrientationMonitor";
import CanvasSizeMonitor from "./componenets/CanvasSizeMonitor";
import "./styles.css";

function App() {
  const [parallax, setParallax] = useState({
    x: 0,
    y: 0,
    isCenter: false
  });

  const onParallax = parallax => {
    parallax.isCenter = Boolean(
      Math.abs(parallax.x <= 0.01) && Math.abs(parallax.y <= 0.01)
    );
    setParallax(parallax);
  };

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const onResize = size => {
    setCanvasSize(size);
  };

  useEffect(() => {
    CanvasSizeMonitor.start(window, onResize);
    return () => {
      CanvasSizeMonitor.stop();
    };
  });

  return (
    <div className="App">
      <OrientationMonitor onMove={onParallax} />
      <Scene size={canvasSize} parallax={parallax} numStars={40} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
