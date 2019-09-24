import React from 'react';
import s from './Login.module.scss';
import LoginReduxForm from "./LoginReduxForm";



export const Login = (props) => {

	let	onSubmit = (formData)=> {
	let promise=props.loginMe(formData);
	promise.then(()=> {
		props.loadLogin &&
		props.history.goBack();
	})
};

return (
		<div className={s.login}>
			{props.loadLogin ? <h1>Logged in</h1> : <h1>Log in</h1>}


		<LoginReduxForm onSubmit={onSubmit}
										logOutMe={props.logOutMe}
										loadLogin={props.loadLogin}
										captchaUrl={props.captchaUrl}
		/>
		<div>
			Тестовые Email и Password
			<div>Email: free@samuraijs.com</div>
			<div>Password: free</div>
		</div>
		</div>
	);
};
