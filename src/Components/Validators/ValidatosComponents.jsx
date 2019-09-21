import React from "react";
import s from './ValidatosComponents.module.scss'

// Поля ввода для редакс-форм в зависимости от typeComponent input или textarea

export const InputComponent = (
	{typeComponent, cols, input, label,
		size, rows, type, meta: {error, warning, touched}}) => {
	return (
		<>
			<label className={s.formComponentLabel}>{label}</label>
			<div>
				{typeComponent === 'textarea'
					? <textarea cols={cols} rows={rows} {...input} placeholder={label}/>
					: <input {...input} placeholder={label} size={size} type={type}/>}
				{touched &&
				((error && <div>{error}</div>) ||
					(warning && <div>{warning}</div>))}
			</div>
		</>
	)
};