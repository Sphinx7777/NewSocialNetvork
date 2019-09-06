import React from 'react';
import s from '../SideBar/SideBar.module.scss';
import {NavLink} from "react-router-dom";


export const LoginSideBar = (props) => {

return (
		<div className={s.loginHeader}>
			{!props.loadLogin ? <NavLink to='/login' className={s.loginLink}>Go login</NavLink> :
				<NavLink className={s.loginName} to='/login'>
					<span >{props.login}</span>
				</NavLink>}
		</div>
	);
};
