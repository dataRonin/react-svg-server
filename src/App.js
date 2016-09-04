import React, { Component } from 'react';
import SVG from './components/svg';

// The App component passes "data" to the SVG component
export default class App extends Component {
  state = {startingState: 0}

  selectStartingState(event) {
  	this.setState({startingState: event.target.value});
  }

  render() {
  	let tfs = ["translate(100,100)", "scale(2)", "translate(400,400)", "translate(100,100)", "skewX(45)", "translate(400,100) skewX(45)"]
  	let options = tfs.map((_, index) => {
  		return <option key={index} value={tfs[index+1]}> {tfs[index+1]} </option>
  	});
    return (
    	<div>
    		<select
    			value = {this.state.startingState}
    			onChange = {this.selectStartingState.bind(this)} >
    			{options}
    		</select>
     		<SVG data={this.props.datasets[0]}
     			transform = {this.state.startingState}
     		/>
      	</div>
    	);
  	}
}
