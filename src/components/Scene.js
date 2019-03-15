import React from "react";
import Star from "./Star";
import Shape from "./Shape";
import getDistance from "../utils/getDistacne"

class Scene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bgStars: this.getBGStars(),
      shapeStars: [],
      parallaxOffset: {
        x: Math.random() * 10,
        y: Math.random() * 20
      },
      localParallax: {
        x: NaN,
        y: NaN,
        fromCenter: NaN,
        isZero: false
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
      x: Math.round(Math.random() * rangePx.x) + rangeMod.x,
      y: Math.round(Math.random() * rangePx.y) + rangeMod.y
    };
  }

  getBGStars () {
    const bg = Array.from(Array(120)).map((item, i) => {
      return {
        i: i,
        depth: (Math.random() + 0.1).toFixed(3),
        ...this.getRandomScreenPoint(2)
      };
    });
    return bg;
  }

  onShapeDataReady = points => {
    const shapeStars = points.map((point, i) => {
      return {
        i: i,
        x: point.x,
        y: point.y,
        depth: (1 - Math.random() * 0.5).toFixed(3)
      }
    })
    this.setState({shapeStars});
  } 

  static getDerivedStateFromProps(props, state) {

    const getIsParallaxZero = (p, l) => {
      const sensitivity = l ? 20 : 2;
      const isZero = Math.abs(p.x) < sensitivity && Math.abs(p.y) < sensitivity;
      return isZero;
    }

    const localParallax = {
      x: props.parallax.x + state.parallaxOffset.x,
      y: props.parallax.y + state.parallaxOffset.y
    };

    const fromCenter = getDistance(localParallax, {x: 0, y: 0});
    
    const wasZero = state.localParallax.isZero;
    const isZero = getIsParallaxZero(localParallax, wasZero);

    return {
      localParallax: {
        ...localParallax,
        fromCenter,
        isZero      
      }
    };
  }
      
  render() {
    return (
      <div className="scene">
        {this.state.bgStars.map(star => (
          <Star {...star} 
            parallax={this.state.localParallax} 
            key={star.i} />
        ))}
        <div className="shape-container">
          <Shape shape={this.props.shape} 
            onDataReady={this.onShapeDataReady}
            isZero={this.state.localParallax.isZero}
            distance={this.state.localParallax.fromCenter}
            className={this.state.localParallax.isZero ? "" : "hidden"} />
          {this.state.shapeStars.map(star => (
            <Star {...star} 
              parallax={this.state.localParallax} 
              isZero={this.state.localParallax.isZero}
              key={star.i} />
          ))}
        </div>
    </div>)
  }
};

export default Scene;
