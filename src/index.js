import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data';
import floorplan from './fp';

console.log(floorplan)
// the "data" is passed to the App component
ReactDOM.render(<App datasets={data} floorplan={floorplan}/>, document.getElementById('root'));
