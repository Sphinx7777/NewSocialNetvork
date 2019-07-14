import React from 'react';
import s from './SideBar.module.scss';
import {NavLink} from "react-router-dom";




export const SideBar = (props) => {
	return <div className={s.sideBarWrapper}>
		<div className={s.sideBar}>
		<NavLink className={s.item} activeClassName={s.activeItem} to='/main'>
			Main
		</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/users'>
				Users
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/profile'>
				Profile
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/dialogs'>
				Dialogs
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/news'>
				News
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/music'>
				Music
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/login'>
				Login
			</NavLink>
			<NavLink className={s.item} activeClassName={s.activeItem} to='/settings'>
				Settings
			</NavLink>
		</div>
		</div>

};