import React from "react";
import s from './ValidatorsComponents.module.scss';

// input for Redux-form
export const InputComponent = (
	{input,label,size,type,min,max,maxlength,autofocus,meta: {error, warning, touched}}) => {
	return (
		<>
			<div className={s.inputLabel + ' ' + (touched && error ? s.errorInputLabel : '')}>{label}</div>
			<input className={s.inputField + ' ' + (touched && error ? s.errorInputField : '')}
						 {...input} placeholder={label} size={size} type={type}/>
			{touched &&
			((error && <span className={s.inputError}>{error}</span>) ||
				(warning && <span className={s.inputWarning}>{warning}</span>))}
		</>
	)
};
// textarea for Redux-form
export const TextAreaComponent = (
	{input,label,autofocus,maxlength, rows,cols,meta: {error, warning, touched}}) => {
	return (
		<>
			<div className={s.areaLabel + ' ' + (touched && error ? s.errorAreaLabel : '')}>{label}</div>
			<textarea className={s.areaField + ' ' + (touched && error ? s.errorAreaField : '')}
						 {...input} placeholder={label}/>
			{touched &&
			((error && <span className={s.areaError}>{error}</span>) ||
				(warning && <span className={s.areaWarning}>{warning}</span>))}
		</>
	)
};

