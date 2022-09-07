import React from "react";

import './style.css';

function createBoxes(number) {

	let boxArr = [];

	for (let box = 0; box <= number - 1; box++) {
		boxArr.push(<input type="text" className="box" />)
	}


	return boxArr;
}

const Otp = (props) => {
	const { boxes } = props;

	return (
		<div>
			{createBoxes(boxes)}
		</div>
	)
}

export default Otp;
