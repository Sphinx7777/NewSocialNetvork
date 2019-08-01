import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {emptyField, maxLengthCreator, minLengthCreator} from "../Validators/CheckComponent";
import {InputComponent} from "../Validators/ValidatosComponents";

const maxlength15 = maxLengthCreator(15);
const maxlength30 = maxLengthCreator(30);
const minlength6 = minLengthCreator(6);


const LoginReduxForm = props => {

	const {handleSubmit, pristine, reset, submitting} = props;
	return (
		<div className={s.login}>
			<form onSubmit={handleSubmit(props.onSubmit)}>
				<div className={s.loginEmail}>
					<Field
						name="email"
						type="email"
						component={InputComponent}
						label="Email"
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.loginPass}>
					<Field
						name="password"
						type="password"
						component={InputComponent}
						label="Password"
						validate={[emptyField, minlength6, maxlength15]}

					/>
				</div>
				<div className={s.loginCheck}>
					<Field
						name="rememberMe"
						type="checkbox"
						component={InputComponent}
						label="RememberMe"
					/>
				</div>
				<div className={s.loginBtns}>
					{!props.loadLogin && <button className={s.loginBtn} type="submit" disabled={submitting}>Login</button>}
					<button className={s.clearBtn} type="button" disabled={pristine || submitting} onClick={reset}>
						Clear Values
					</button>
				</div>
			</form>
			<div className={s.logOutBtns}>
				{props.loadLogin && <button className={s.logOutBtn} onClick={() => {
					props.logOutMe()
				}}>Out login</button>}
			</div>
		</div>

	)
};

export default reduxForm({
	form: 'loginForm',
})(LoginReduxForm)




