import React from 'react';

const Dashboard = props => {
    return (
	<div>
		<button onClick={props.handleStrikes}>Strike</button>
        <button onClick={props.handleBalls}>Ball</button>
        <button onClick={props.handleFouls}>Foul</button>
        <button onClick={props.handleHits}>Hit</button>
	</div>
    )
};
export default Dashboard;
