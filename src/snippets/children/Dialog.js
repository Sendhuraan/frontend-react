import React from "react";

const Dialog = (props) => {
	console.log(props.children);
	return (
		<div>
			{props.children}
		</div>
	)
}

export default Dialog;
