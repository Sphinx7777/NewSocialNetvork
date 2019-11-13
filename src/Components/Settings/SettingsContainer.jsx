import React from 'react';
import Settings from "./Settings";
import {connect} from "react-redux";
import {
	sendSettingsForm, sendUserPhotos,
	setSubmitFinished, setUploadPhoto
} from "../Redux/settingsReducer";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";
import {compose} from "redux";
import {getNewProfile} from "../Redux/profileReducer";


class SettingsContainer extends React.Component {

	onSubmit = (formData) => {
		this.props.sendSettingsForm(formData);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(10000).then(() => {
			return true;
		})
	};

	componentDidMount() {
		this.props.getNewProfile(this.props.loginId);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.profile !== this.props.profile) {
			this.props.getNewProfile(this.props.loginId);
		}
	}

	render() {

		const {
			submitFinished,
			setSubmitFinished,
			sendUserPhotos,
			uploadPhotos,
			setUploadPhoto,
			profile
		} = this.props;

		return (
			<Settings {...
				{
					onSubmit: this.onSubmit,
					submitFinished,
					setSubmitFinished,
					sendUserPhotos,
					uploadPhotos,
					setUploadPhoto,
					profile
				}}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		submitFinished: state.settings.submitFinished,
		uploadPhotos: state.settings.uploadPhotos,
		loginId: state.auth.id,
		profile: state.profilePage.profile
	}
};

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		sendSettingsForm,
		getNewProfile,
		setSubmitFinished,
		sendUserPhotos,
		setUploadPhoto
	}))(SettingsContainer);