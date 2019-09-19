import React from 'react';
import s from './Select.module.scss';



export const Select = ({value,label,onChange,options}) => {
	return (
		<label className={s.selectLabel}>
			<select className={s.select} value={`${value}`} onChange={(e)=>{onChange(e.currentTarget.value)}}>
				{options.map((o,i) => {
					return <option key={i+o.title} className={s.selectOption} value={o.value}>{o.title}</option>
				})}

			</select>
			<span className={s.selectTitle}>{label}</span>
		</label>
	)

};