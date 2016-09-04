import React, { Component } from 'react';

/* The snippet of code shown below is a null render useful for placeholding*/
// export default class Path extends Component {
// 	render() {
// 		return null;
// 	}
// }

export default class Path extends Component {
	static defaultProps = {transform: "translate(100,100)"};
	
	render() {
		let d = this.props.data;
		let transform = this.props.transform;
		return (
			<path d={d}
			transform={transform}
			stroke="orange"
			strokeWidth={1}
			fill="blue"
			/>
		)
	}
}