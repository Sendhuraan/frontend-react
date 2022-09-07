import React, { useEffect } from "react";

const FunctionalLifecycle = () => {
	useEffect(() => {
		console.log('inside useEffect');
	});

	return (
		<h1>
			{console.log('inside render')}
			Hello
		</h1>
	);
}


export default FunctionalLifecycle;
