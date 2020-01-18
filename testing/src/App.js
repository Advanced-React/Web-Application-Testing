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
		if (this.state.strike < 2) {
			this.setState({
				strike : this.state.strike + 1,
			});
		}
		else {
			this.setState({
				strike : 0,
				ball   : 0,
			});
		}
	};
	handleBalls = () => {
		if (this.state.ball < 3) {
			this.setState({
				ball : this.state.ball + 1,
			});
		}
		else {
			this.setState({
				ball   : 0,
				strike : 0,
			});
		}
	};
	handleFouls = () => {
		if (this.state.strike < 2) {
			this.setState({
				strike : this.state.strike + 1,
			})
		}
	};
	handleHits = () => {
		this.setState({
			hit : this.state.hit + 1,
		});
	};

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
