import React from 'react';
import s from './Settings.module.scss';
import SettingsReduxForm from "./SettingsReduxForm";
import UploadPhoto from "./UploadPhoto";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";






class Settings extends React.Component{
	onSubmit = (photo) => {

		this.props.sendUserPhotos(photo);
	};

	render(){
	return (

		<div className={s.settings}>
			<SettingsReduxForm
				onSubmit={this.props.onSubmit}
				submitFinished={this.props.submitFinished}
				setSubmitFinished={this.props.setSubmitFinished}
			/>
<UploadPhoto
	onSubmit={this.onSubmit}
	uploadPhotos={this.props.uploadPhotos}
	setUploadPhoto={this.props.setUploadPhoto}
/>
		</div>

	)}
}


export default withAuthRedirect(Settings);