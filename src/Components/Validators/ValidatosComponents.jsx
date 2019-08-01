import React from "react";
import s from './ComponentValidators.module.scss';


export const InputComponent = (
	{input, label, type, meta:{error,warning,touched}}) => {
	return (
		<div className={s.formComponentWrapper}>
			<label className={s.formComponentLabel}>{label}</label>
			<div className={s.formComponent}>
				<input className={s.formComponentField + ' ' + (touched && error ? s.errorField : '')} {...input} placeholder={label} size='25' type={type} />
				{touched &&
				((error && <span className={s.formComponentError}>{error}</span>) ||
					(warning && <span className={s.formComponentWarning}>{warning}</span>))}
			</div>
		</div>
	)
};