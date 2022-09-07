import React, { useState } from "react";
import NavItem from './NavItem';

const Nav = (props) => {
	const { menus } = props;

	const [menuState, setMenuState] = useState(menus);

	const handleClick = (item) => {
		const foundIndex = menuState.findIndex(menu => menu.text === item.text);
		const newMenuState = [...menuState].map(menu => {
			menu.active = false;
			return menu;
		});
		newMenuState[foundIndex]['active'] = true;
		setMenuState(newMenuState);
	}

	return (
		<div>
			<ul>
				{
					menus.map(menu => <NavItem key={menu.text} {...menu} handleClick={handleClick} />)
				}
			</ul>
		</div>
	)

}

export default Nav;
