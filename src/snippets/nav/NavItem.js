import React from "react";
import './index.scss';

const NavItem = (props) => {
	const { text, link, active, disabled, handleClick } = props;
	return (
		<li>
			<a
				className={`${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
				href='#'
				onClick={() => handleClick(props)}
			>
				{text}
			</a>
		</li >
	)
}

export default NavItem;
