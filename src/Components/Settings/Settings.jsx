import React from 'react';
import s from './Settings.module.scss';
import SettingsReduxForm from "./SettingsReduxForm";


export const Settings = (props) => {

	return (

			<div className={s.settings}>
				<SettingsReduxForm onSubmit={props.onSubmit}/>
			</div>

	)
};
