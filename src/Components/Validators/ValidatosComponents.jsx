import React from "react";
import s from './ComponentValidators.module.scss';


export const Input = ({input, meta, ...props}) => {
	let hasError = meta.error && meta.touched;
	return (
		<div className={s.inputForms}>
			<input className={s.inputForm + ' ' + (hasError ? s.error : '')} {...input}{...props}/>
			{hasError && <span className={s.spanForm}>{meta.error}</span>}
		</div>
	)
};