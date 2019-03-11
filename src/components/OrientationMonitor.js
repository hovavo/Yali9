import React from "react";
import Parallax from "parallax-js";

class OrientationMonitor extends React.Component {

  componentDidMount() {
    this.parallax = new Parallax(this.refs.root, {
      frictionX: 0.2,
      frictionY: 0.2
    });
    window.addEventListener("mousemove", this.onMove, true);
    window.addEventListener("devicemotion", this.onMove, true);
    window.addEventListener("deviceorientation", this.onMove, true);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMove);
    window.removeEventListener("devicemotion", this.onMove);
    window.removeEventListener("deviceorientation", this.onMove);
  }

  onMove = () => {
    const x = this.parallax.velocityX.toFixed(this.parallax.precision) * -1;
    const y = this.parallax.velocityY.toFixed(this.parallax.precision) * -1;
    if (this.props.onMove) {
      this.props.onMove({ x, y });
    }
  };

  render() {
    return (
      <div className="mon" ref="root">
        <div ref="el" data-depth="1" />
      </div>
    );
  }
}

export default OrientationMonitor;
