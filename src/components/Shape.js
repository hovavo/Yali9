import React from "react";
import "array-flat-polyfill";

class Shape extends React.Component {

  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    const interval = 20 // TODO: prop
    const paths = Array.from(this.svgRef.current.children).filter(node=> {
      return node.getTotalLength;
    });

    const points = paths.map(path => {
      const len = path.getTotalLength();
      const numPoints = Math.floor(len / interval);
      if (numPoints < 1) {
        return []
      }
      return Array.from(Array(numPoints)).map((point, j) => {
        return path.getPointAtLength((len / numPoints) * j);
      })
    }).flat(3);

    if (this.props.onDataReady) {
      this.props.onDataReady(points);
    }
  }

  render() {
    const style = {
      opacity: this.props.isZero ? "initial" : (0.3 - (this.props.distance / 100))
      // filter: this.props.isZero ? 
      //   `initial` : 
      //   `blur(${ this.props.blur + 1 }px)`
    }
    
    return <this.props.shape 
      ref={this.svgRef}
      className={this.props.className}
      style={style} />
  }
}
export default Shape;
