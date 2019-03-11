import React from "react";
import Star from "./Star";
import Shape from "./Shape";

class Scene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: this.getBGStars(),
      parallaxOffset: {
        x: Math.random() * 10,
        y: Math.random() * 10
      }
    }
  }

  getRandomScreenPoint = (range = 1) => {
    const rangePx = {
      x: this.props.size.width * range,
      y: this.props.size.height * range
    };
    const rangeMod = {
      x: this.props.size.width * ((1 - range) / 2),
      y: this.props.size.height * ((1 - range) / 2)
    };
    return {
      x: Math.random() * rangePx.x + rangeMod.x,
      y: Math.random() * rangePx.y + rangeMod.y
    };
  }

  getBGStars () {
    const bg = Array.from(Array(120)).map((item, i) => {
      return {
        i: i,
        depth: Math.random() + 0.1,
        ...this.getRandomScreenPoint(2)
      };
    });
    return bg;
  }

  getLocalParallax() {
    return {
      x: this.props.parallax.x + this.state.parallaxOffset.x,
      y: this.props.parallax.y + this.state.parallaxOffset.y
    }
  }

  onShapeDataReady = points => {
    const countOffset = this.state.stars.length;
    const shapeStars = points.map((point, i) => {
      return {
        i: i + countOffset,
        x: point.x,
        y: point.y,
        depth: 1 - Math.random() * 0.5
      }
    })
    this.setState({stars: [...this.state.stars, ...shapeStars]});
  } 
      
  render() {
    return (<div className="scene">
      <Shape shape={this.props.shape} onDataReady={this.onShapeDataReady} />
      {this.state.stars.map(star => (
        <Star {...star} parallax={this.getLocalParallax()} key={star.i} />
      ))}
    </div>)
  }
};

export default Scene;
