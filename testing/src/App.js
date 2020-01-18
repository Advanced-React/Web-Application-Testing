import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
	constructor () {
		super();
		this.state = {
			strike : 0,
			ball   : 0,
			foul   : 0,
			hit    : 0,
		};
	}

	handleStrikes = () => {
    this.setState({
      if(strike )
      strike: this.state.strike + 1
    })
  }
	handleBalls = () => {
    this.setState({
      ball: this.state.ball + 1
    })
  }
	handleFouls = () => {
    this.setState({
      foul: this.state.foul + 1
    })
  }
	handleHits = () => {
    this.setState({
      hit: this.state.hit + 1
    })
  }

	render () {
		return (
			<div>
				<h1>Leo's Baseball Match</h1>
				<Display ball={this.state.ball} strike={this.state.strike} />
				<Dashboard
					handleStrikes={this.handleStrikes}
					handleBalls={this.handleBalls}
					handleFouls={this.handleFouls}
					handleHits={this.handleHits}
				/>
			</div>
		);
	}
}

export default App;
