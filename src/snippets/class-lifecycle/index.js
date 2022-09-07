import React from "react";

class ClassLifecycle extends React.Component {
	componentDidMount() {
		console.log('inside componentDidMount');
	}

	render() {
		return (
			<h1>
				{console.log('inside render')}
				Hello
			</h1>
		);
	}
}

export default ClassLifecycle;
