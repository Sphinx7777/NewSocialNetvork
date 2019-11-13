import React from 'react';
import s from './Settings.module.scss';
import SettingsReduxForm from "./SettingsReduxForm";
import UploadPhoto from "./UploadPhoto";


class Settings extends React.Component {

	onSubmit = (photo) => {
		this.props.sendUserPhotos(photo);
	};

	render() {

		const {
			profile,
			onSubmit,
			submitFinished,
			setSubmitFinished,
			uploadPhotos,
			setUploadPhoto
		} = this.props;

		return (
			<div className={s.settings}>
				<SettingsReduxForm {...
					{
						initialValues: profile,
						onSubmit,
						submitFinished,
						setSubmitFinished
					}}
				/>
				<UploadPhoto {...
					{
						onSubmit: this.onSubmit,
						uploadPhotos,
						setUploadPhoto
					}}
				/>
			</div>
		)
	}
}


export default Settings;