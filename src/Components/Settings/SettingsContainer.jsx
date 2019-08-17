import React from 'react';
import {Settings} from "./Settings";
import {connect} from "react-redux";
import {sendSettingsForm} from "../Redux/settingsReducer";


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
		this.props.sendSettingsForm(data)
	};

	render() {
		return <Settings onSubmit={this.onSubmit}/>
	}


}

export default connect(null, {sendSettingsForm})(SettingsContainer);