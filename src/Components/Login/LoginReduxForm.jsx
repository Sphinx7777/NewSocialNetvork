import React from 'react';
import s from './Login.module.scss';
import {Field,reduxForm} from "redux-form";




const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.log}>
				<label>Email</label>
       <Field placeholder={'Email'} component={'input'} name={'email'} type={'email'}/>
			</div>
			<div className={s.pass}>
				<label>Password</label>
				<Field placeholder={'Password'} component={'input'} name={'password'} type={'text'}/>
			</div>
			<div className={s.check}>
			<Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
		</div>
			<button className={s.loginBtn}>Login</button>
		</form>
	)
};
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;




