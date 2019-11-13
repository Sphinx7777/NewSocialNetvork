import React from "react";
import s from './ValidatorsComponents.module.scss';


export const InputComponent = (
	{
		input,
		label,
		size,
		type,
		placeholder,
		autoFocus,
		meta: {
			error,
			warning,
			touched
		}
	}) => {
	return (
		<>
			<div className={s.inputLabel + ' ' + (touched && error
				? s.errorInputLabel
				: '')}>
				{label}
			</div>
			<input className={s.inputField + ' ' + (touched && error
				? s.errorInputField
				: '')}
						 {...input}
						 autoFocus={autoFocus}
						 placeholder={placeholder}
						 size={size}
						 type={type}/>

			{touched &&
			((error && <div className={s.inputError}>{error}</div>) ||
				(warning && <div className={s.inputWarning}>{warning}  </div>))
			}
		</>
	)
};

export const TextAreaComponent = (
	{
		input,
		label,
		rows,
		cols,
		meta: {
			error,
			warning,
			touched
		}
	}) => {
	return (
		<>
			<textarea className={s.areaField + ' ' + (touched && error
				? s.errorAreaField
				: '')}
								{...input}
								placeholder={label}
								rows={rows}
								cols={cols}/>

			{touched &&
			((error && <div className={s.areaError}>{error}</div>) ||
				(warning && <div className={s.areaWarning}>{warning}</div>))
			}
		</>
	)
};

