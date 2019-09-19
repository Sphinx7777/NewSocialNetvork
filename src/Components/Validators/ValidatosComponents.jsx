import React from "react";
import s from './ComponentValidators.module.scss';

// Поля ввода для редакс-форм в зависимости от typeComponent input или textarea

export const InputComponent = (
	{typeComponent,cols,input, label,rows, type, meta:{error,warning,touched}}) => {
	return (
		<div className={s.formComponentWrapper}>
			<label className={s.formComponentLabel}>{label}</label>
			<div className={s.formComponent}>
				{typeComponent==='textarea' ?<textarea className={s.formComponentField + ' ' + (touched && error ? s.errorField : '')} cols={cols} rows={rows} {...input} placeholder={label}/>
				:<input className={s.formComponentField + ' ' + (touched && error ? s.errorField : '')} {...input} placeholder={label} size='25' type={type} />}
				{touched &&
				((error && <span className={s.formComponentError}>{error}</span>) ||
					(warning && <span className={s.formComponentWarning}>{warning}</span>))}
			</div>
		</div>
	)
};