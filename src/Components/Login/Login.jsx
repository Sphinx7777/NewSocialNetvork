import React from 'react';
import s from './Login.module.scss';
import LoginReduxForm from "./LoginReduxForm";


export const Login = (
	{
		loginMe,
		loadLogin,
		history,
		captchaUrl,
		logOutMe
	}) => {

	const onSubmit = (formData) => {
		const promise = loginMe(formData);
		promise.then(() => {
			loadLogin &&
			history.goBack();
		})
	};

	return (
		<div className={s.login}>
			{loadLogin
				? <h2>Logged in</h2>
				: <h2>Log in</h2>}
			<LoginReduxForm {...{
				onSubmit,
				logOutMe,
				loadLogin,
				captchaUrl
			}}/>
			<div>
				Тестовые Email и Password :
				<div>
					Email: free@samuraijs.com
				</div>
				<div>
					Password: free
				</div>
			</div>
		</div>
	);
};
