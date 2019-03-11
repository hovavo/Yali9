import React from "react";

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
    }).flat();

    if (this.props.onDataReady) {
      this.props.onDataReady(points);
    }
  }

  render() {
    return <this.props.shape ref={this.svgRef} />
  }
}
export default Shape;
