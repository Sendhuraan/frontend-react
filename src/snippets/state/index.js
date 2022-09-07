import React from "react";
import ReactDOM from 'react-dom/client';

import App from '../../App';

const root = ReactDOM.createRoot(document.getElementById('root'));



let m = undefined;

function _getM(initialValue) {
	if (initialValue === undefined) {
		m = initialValue;
	}

	return m;
}

function _setM(value) {
	m = value;
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

function Title() {
	let count = _getM(0)
	console.log("🚀 ~ file: index.js ~ line 31 ~ Title ~ count", count)
	const onClick = () => {
		console.log('count', count);
		count = count + 1;
		_setM(count);
	}
	return (
		<>
			<button onClick={onClick}>+</button>
			<h1>Hello World+{count}</h1>
		</>
	)
}

export default Title;
