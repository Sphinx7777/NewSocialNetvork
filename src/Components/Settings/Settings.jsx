import React from 'react';
import s from './Settings.module.scss';
import SettingsReduxForm from "./SettingsReduxForm";




class Settings extends React.Component{
	onSubmit = (formData) => {

		this.props.sendUserPhotos(formData);
	};

	render(){
	return (

		<div className={s.settings}>
			<SettingsReduxForm
				onSubmit={this.props.onSubmit}
				submitFinished={this.props.submitFinished}
				setSubmitFinished={this.props.setSubmitFinished}
			/>

		</div>

	)}
}


export default Settings;