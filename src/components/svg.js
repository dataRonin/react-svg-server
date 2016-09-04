import React, { Component } from 'react';
import Path from './path';
import PathFP from './pathfp';

// the App component and the SVG component pass the width, height, viewBox, and data to the svg tag, Path, and G components
/* This component is the SVG namespace containing in this case just a path*/

export default class SVG extends Component {
	// sizing goes here
	static defaultProps = {width: 900, height: 900, viewBox:"0 0 900 900", transform: "translate(0,0)"};
	render() {
		return (
			<svg width={this.props.width} height={this.props.height} viewBox={this.props.viewBox}>
				<PathFP
				/>
				<Path
					data={this.props.data}
					transform={this.props.transform}
				/>
			</svg>
		)
	}
}