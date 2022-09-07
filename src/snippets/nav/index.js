import React from "react";
import Nav from './Nav';

const menus = [
	{
		text: 'Home',
		link: '/home',
		active: true,
		disabled: false
	},
	{
		text: 'About',
		link: '/about',
		active: false,
		disabled: true
	},
	{
		text: 'Careers',
		link: '/careers',
		active: false,
		disabled: false
	},
	{
		text: 'Investors',
		link: '/investors',
		active: false,
		disabled: false
	}
];


const NavMain = (props) => {
	return <Nav menus={menus} />
}

export default NavMain;
