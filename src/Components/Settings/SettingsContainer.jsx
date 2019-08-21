import React from 'react';
import Settings from "./Settings";
import {connect} from "react-redux";
import {sendSettingsForm, sendUserPhotos, setSubmitFinished} from "../Redux/settingsReducer";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";
import {compose} from "redux";






class SettingsContainer extends React.Component {

	onSubmit = (formData) => {
		let data = {
			aboutMe: formData.aboutMe,
			lookingForAJob: formData.lookingForAJob,
			fullName: formData.fullName,
			lookingForAJobDescription: formData.lookingForAJobDescription,
			contacts: {
				skype: formData.skype,
				facebook: formData.facebook,
				instagram: formData.instagram,
				vk: formData.vk,
				email: formData.email,
			}
		};
		this.props.sendSettingsForm(data);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})


	};

	render() {
		return <Settings onSubmit={this.onSubmit} submitFinished={this.props.submitFinished}
										 setSubmitFinished={this.props.setSubmitFinished}
										 sendUserPhotos={this.props.sendUserPhotos}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		submitFinished: state.settings.submitFinished
	}
};

export default compose(withAuthRedirect,
	connect(mapStateToProps, {sendSettingsForm,setSubmitFinished,sendUserPhotos}))(SettingsContainer);