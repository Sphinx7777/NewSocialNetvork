import React from 'react';
import s from './SideBar.module.scss';
import {NavLink} from "react-router-dom";

let links = (to, title) => {
	return <NavLink className={s.item} activeClassName={s.activeItem} to={`${to}`}>{title}</NavLink>
};


export const SideBar = (props) => {
	return <div className={s.sideBarWrapper}>
		<div className={s.sideBar}>
			<NavLink className={s.item} activeClassName={s.activeItem} exact to='/'>Main</NavLink>
			{links('/users', 'Users')}
			{links('/profile', 'Profile')}
			{links('/dialogs', 'Dialogs')}
			{links('/news', 'News')}
			{links('/music', 'Music')}
			{links('/login', 'Login')}
			{links('/settings', 'Settings')}
		</div>
	</div>
};