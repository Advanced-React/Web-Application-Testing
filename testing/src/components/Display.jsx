import React from 'react';

const Display = props => {
    return (
	<div>
		<h3 data-testid='balls'>Balls: {props.ball} </h3>
		<h3 data-testid='strikes'>Strikes: {props.strike}</h3>
	</div>
    )
};
export default Display;
