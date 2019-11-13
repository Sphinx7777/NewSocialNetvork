import React from 'react';
import s from './Select.module.scss';


export const Select = (
	{
		value,
		label,
		onChange,
		options
	}) => {

	const onChangeValue = event => onChange(+event.currentTarget.value);

	return (
		<label className={s.selectLabel}>
			<select className={s.select}
							value={`${value}`}
							onChange={onChangeValue}>
				{options.map((o, i) => {
					return <option className={s.selectOption}
												 key={i + o.title}
												 value={o.value}>
						{o.title}
					</option>
				})}

			</select>
			<span className={s.selectTitle}>
				{label}
			</span>
		</label>
	)
};