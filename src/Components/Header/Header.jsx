import React from 'react';
import s from './Header.module.scss';
import loginImg from './../../Images/skull2.png';
import {NavLink} from "react-router-dom";


export const Header = (props) => {
	return (
		<div className={s.headerWrapper}>
			<div className={s.header}>
				<div className={s.logo}>Все там будем...</div>
				{!props.loadLogin ? <NavLink to='/login' className={s.loginLink}>Go login</NavLink> :
					<div className={s.login}>
						<img className={s.loginPhoto} src={loginImg} alt=""/>
						<span className={s.loginName}>{props.login}</span>
					</div>}
			</div>
		</div>)

};