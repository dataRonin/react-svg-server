import React, { Component } from 'react';
import floorplan from '../fp';
/* The snippet of code shown below is a null render useful for placeholding*/
// export default class Path extends Component {
// 	render() {
// 		return null;
// 	}
// }

export default class PathFP extends Component {
	static defaultProps = {transform: "translate(0,0)"};
	
	render() {
		let d = floorplan.border;
		let transform = this.props.transform;
		return (
			<path d={d}
			transform={transform}
			stroke="black"
			strokeWidth={10}
			fill="transparent"
			/>
		)
	}
}