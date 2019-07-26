import React from 'react';
import s from './Login.module.scss';
import LoginReduxForm from "./LoginReduxForm";


export const Login = (props) => {

let	onSubmit = (formData)=> {
	props.loginMe(formData);
};

	return (
		<div className={s.login}>
			<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} unIoginMe={props.unIoginMe} loadLogin={props.loadLogin}/>
		</div>
	)
};
