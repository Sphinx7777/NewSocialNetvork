import React from 'react';
import s from './Header.module.scss';
import loginImg from './../../Images/skull2.png';



export const Header = (props) => {
	return <div className={s.headerWrapper}>
		<div className={s.header}>
		<div className={s.logo}>Все там будем...</div>
		<div className={s.login}>
			<img className={s.loginPhoto} src={loginImg} alt=""/>
			<span className={s.loginName}>Sfinx</span>
		</div>
		</div>
		</div>

};