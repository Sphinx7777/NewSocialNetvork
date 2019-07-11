import React from 'react';
import s from './SideBar.module.scss';
import {NavLink} from "react-router-dom";




export const SideBar = (props) => {
	return <div className={s.sideBarWrapper}>
		<div className={s.sideBar}>
		<NavLink className={s.item} to='/main'>
			Main
		</NavLink>
			<NavLink className={s.item} to='/users'>
				Users
			</NavLink>
			<NavLink className={s.item} to='/profile'>
				Profile
			</NavLink>
			<NavLink className={s.item} to='/news'>
				News
			</NavLink>
			<NavLink className={s.item} to='/music'>
				Music
			</NavLink>
			<NavLink className={s.item} to='/login'>
				Login
			</NavLink>
			<NavLink className={s.item} to='/settings'>
				Settings
			</NavLink>
		</div>
		</div>

};