import React from 'react';
import {Settings} from "./Settings";
import {connect} from "react-redux";
import {sendSettingsForm, setSubmitFinished} from "../Redux/settingsReducer";


class SettingsContainer extends React.Component {
	onSubmit = (formData) => {
		console.log(formData);
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
		return disableBtnSend(10000).then(() => {
				return true;
			})


	};

	render() {
		return <Settings onSubmit={this.onSubmit} submitFinished={this.props.submitFinished}
										 setSubmitFinished={this.props.setSubmitFinished}
		/>
	}
}

let mapStateToProps  = (state)=> {
	return {
		submitFinished: state.settings.submitFinished
	}
};

export default connect(mapStateToProps, {sendSettingsForm,setSubmitFinished: setSubmitFinished})(SettingsContainer);