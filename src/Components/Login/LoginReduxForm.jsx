import React from 'react';
import s from './Login.module.scss';
import {Field,reduxForm} from "redux-form";
import {emptyField, maxLengthCreator, minLengthCreator} from "../Validators/CheckComponent";
import {Input} from "../Validators/ValidatosComponents";

const maxlength15 = maxLengthCreator(15);
const maxlength30 = maxLengthCreator(30);
const minlength6 = minLengthCreator(6);


const LoginForm = (props) => {

	return (
		<div>
		<form onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.log}>
				<label>Email :</label>
       <Field placeholder='Email' component={Input} name='email' type='email' validate={[maxlength30,emptyField,]}/>
			</div>
			<div className={s.pass}>
				<label>Password :</label>
				<Field placeholder='Минимум 6 символов' component={Input} name='password' type='text' validate={[minlength6,maxlength15,emptyField]}/>
			</div>
			<div className={s.check}>
			<Field component='input' name='rememberMe' type='checkbox'/> Remember me
		</div>
			{!props.loadLogin && <button className={s.loginBtn}>Login</button>}
		</form>
			<button className={s.unLoginBtn} onClick={()=>{props.unIoginMe()}}>UnLogin</button>
		</div>
	)
};
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;




