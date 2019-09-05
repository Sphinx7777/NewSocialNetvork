import React,{useState} from 'react';
import s from './SideBar.module.scss';
import {NavLink} from "react-router-dom";
import {LoginSideBar} from "./LoginSideBar";


let link = (to, title) => {
	return <NavLink className={s.item} activeClassName={s.activeItem} to={`${to}`}>{title}</NavLink>
};


export const SideBar = (props) => {

	let [menu,setMenu]=useState(true);
let hideMenu = ()=> {
	setMenu(!menu)
};

	return (<div className={s.sideBarWrapper}>
		<div className={s.itemMenu} onClick={hideMenu}>
			<span className={s.itemMenuSpan}> </span>
			<span className={s.itemMenuSpan}> </span>
			<span className={s.itemMenuSpan}> </span>
		</div>
		{menu	&&	<div className={s.sideBar}>
			<NavLink className={s.item} activeClassName={s.activeItem} exact to='/'>Main</NavLink>
			{link('/users', 'Users')}
			{link('/profile', 'Profile')}
			{link('/dialogs', 'Dialogs')}
			{link('/news', 'News')}
			{link('/music', 'Music')}
			{link('/login', 'Login')}
			{link('/settings', 'Settings')}
		</div>}
<LoginSideBar login={props.login} loadLogin={props.loadLogin}/>
	</div>)
};