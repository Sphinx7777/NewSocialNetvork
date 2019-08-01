import React from 'react';
import s from './Login.module.scss';
import LoginReduxForm from "./LoginReduxForm";


export const Login = (props) => {

let	onSubmit = (formData)=> {
	props.loginMe(formData);

};

	return (
		<div className={s.login}>
			{props.loadLogin ? <h1>Logged in</h1> : <h1>Log in</h1>}


		<LoginReduxForm onSubmit={onSubmit} logOutMe={props.logOutMe} loadLogin={props.loadLogin}/>
		</div>
	)
};
