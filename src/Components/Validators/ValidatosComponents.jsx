import React from "react";
import s from './ComponentValidators.module.scss';



export const Input = ({input, meta, ...props}) => {
	let hasError = meta.error && meta.touched;
	return (
		<div className={s.inputForms}>
			<input className={s.inputForm + ' ' + (hasError ? s.error : '')} {...input}{...props} size='30'/>
			{hasError ? <span className={s.spanForm}>{meta.error}</span> : ''}
		</div>
	)
};
export const Textarea = ({input, meta, ...props}) => {

	return (
		<div className={s.inputForms}>
			<textarea className={s.inputForm + ' ' + (meta.error ? s.error : '')} {...input}{...props}/>
			{meta.error ? <span className={s.spanForm}>{meta.error}</span> : ''}
		</div>
	)
};
export const formComponent = (
	{
		input,
		label,
		type,
		meta
	}) => {
	let hasError = meta.error && meta.touched;
	return (
		<div className={s.formComponentWrapper}>
			<label className={s.formComponentLabel}>{label}</label>
			<div className={s.formComponent}>
				<input className={s.formComponentField} {...input} placeholder={label} size='25' type={type} />
				{meta.touched &&
				((meta.error && <span className={s.formComponentError}>{meta.error}</span>) ||
					(meta.warning && <span className={s.formComponentWarning}>{meta.warning}</span>))}
			</div>
		</div>
	)
};