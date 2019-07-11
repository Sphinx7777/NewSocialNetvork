import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getNewProfile} from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {Preloader} from "../Others/Preloader/Preloader";


class ProfileContainer extends React.Component {

	componentDidMount() {
		debugger;
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 1184
		}
		this.props.getNewProfile(userId);
	}

	render() {
		if (!this.props.loadProfile) {
			return <Preloader/>
		}
		return <Profile
			profile={this.props.profile}
			userId={this.props.match.params.userId}
			status={this.props.status}
			friendBtnState={this.props.friendBtnState}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		loadProfile: state.profilePage.loadProfile,
		status: state.profilePage.status,
		friendBtnState: state.profilePage.friendBtnState,

	}
};


export default withRouter(connect(mapStateToProps, {getNewProfile})(ProfileContainer));