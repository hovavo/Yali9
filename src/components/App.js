import React from "react";
import Scene from "./Scene";
import OrientationMonitor from "./OrientationMonitor";
import CanvasSizeMonitor from "./CanvasSizeMonitor";
import shapes from "./shapes"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parallax: {
        x: 0,
        y: 0,
        isCenter: false
      },
      canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }

  onParallax = parallax => {
    parallax.isCenter = Boolean(
      Math.abs(parallax.x <= 0.01) && Math.abs(parallax.y <= 0.01)
    );
    this.setState({
      parallax
    })
  }

  onResize = size => {
    this.setState({canvasSize: size})
  }

  componentDidMount() {
    CanvasSizeMonitor.start(window, this.onResize);
  }

  componentWillUnmount() {
    CanvasSizeMonitor.stop();
  }

  render() {
    return (
      <div className="App">
        <OrientationMonitor onMove={this.onParallax} />
        <Scene size={this.state.canvasSize} parallax={this.state.parallax} shape={shapes[0]} />
      </div>
    )
  }
}

export default App;