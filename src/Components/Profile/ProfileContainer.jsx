import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
	addUserAsFriend, dellUserAsFriend,
	getFriendStatus, getNewProfile, getStatus, updateStatus
}
	from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {Preloader} from "../Others/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";


class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 1184
		}
		this.props.getNewProfile(userId);
		this.props.getFriendStatus(userId);
		this.props.getStatus(userId);
	}

	render() {
		if (!this.props.loadProfile) {
			return <Preloader/>
		}
		return <Profile
			{...this.props.profile}
			status={this.props.status}
			friendBtnState={this.props.friendBtnState}
			friendStatus={this.props.friendStatus}
			loginId={this.props.loginId}
			addFriend={this.props.addUserAsFriend}
			dellFriend={this.props.dellUserAsFriend}
			updateStatus={this.props.updateStatus}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		loadProfile: state.profilePage.loadProfile,
		status: state.profilePage.status,
		friendBtnState: state.profilePage.friendBtnState,
		friendStatus: state.profilePage.friendStatus,
		loginId: state.auth.id,
	}
};

export default compose(
withAuthRedirect,
	connect(mapStateToProps, {updateStatus,dellUserAsFriend,
		addUserAsFriend,getNewProfile,
		getFriendStatus,getStatus}),withRouter)(ProfileContainer);


