import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
	addUserAsFriend, dellUserAsFriend,
	getFriendStatus, getNewProfile,
	getStatus, updateStatus
} from "../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {Preloader} from "../Others/Preloader/Preloader";
import {compose} from "redux";
import {getloadLogin} from "../Redux/selectors";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.loginId
		}

		this.props.getNewProfile(userId);
		this.props.getStatus(userId);
		if (this.props.loginId) {
			this.props.getFriendStatus(userId);
		}

	}
	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.componentDidMount()
		}

	}
	render() {
		if (!this.props.loadProfile) return <Preloader/>;
		if (!this.props.match.params.userId) {
			return <Redirect to={this.props.loginId ? `/profile/${this.props.loginId}` : `/login`}/>
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
			loadLogin={this.props.loadLogin}
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
		loadLogin: getloadLogin(state)
	}
};

export default compose(
	connect(mapStateToProps, {
		updateStatus, dellUserAsFriend,
		addUserAsFriend, getNewProfile,
		getFriendStatus, getStatus
	}),
	withRouter)(ProfileContainer);


