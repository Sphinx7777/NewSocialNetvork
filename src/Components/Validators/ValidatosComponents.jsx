import React from "react";
import s from './ComponentValidators.module.scss';



export const Textarea = ({input, meta, ...props}) => {
	return (
		<div className={s.inputForms}>
			<textarea className={s.inputForm + ' ' + (meta.error ? s.error : '')} {...input}{...props}/>
			{meta.error ? <span className={s.spanForm}>{meta.error}</span> : ''}
		</div>
	)
};
export const InputComponent = (
	{input, label, type, meta}) => {
	return (
		<div className={s.formComponentWrapper}>
			<label className={s.formComponentLabel}>{label}</label>
			<div className={s.formComponent}>
				<input className={s.formComponentField + ' ' + (meta.touched && meta.error ? s.errorField : '')} {...input} placeholder={label} size='25' type={type} />
				{meta.touched &&
				((meta.error && <span className={s.formComponentError}>{meta.error}</span>) ||
					(meta.warning && <span className={s.formComponentWarning}>{meta.warning}</span>))}
			</div>
		</div>
	)
};