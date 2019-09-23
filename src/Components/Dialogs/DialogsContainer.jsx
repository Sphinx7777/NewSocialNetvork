import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {getUsersForFriends} from "../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";
import {getNewProfile} from "../Redux/profileReducer";
import {getMyPhoto} from "../Redux/authReducer";



class DialogsContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersForFriends(this.props.page,100);
		this.props.getMyPhoto(this.props.loginId)
}
	componentDidUpdate (prevProps) {
		if (this.props.page<=Math.ceil(this.props.totalCount/100)){
			this.props.getUsersForFriends (this.props.page,100);
		}
	}


	render() {
		return <Dialogs {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.dialogsPage.users,
		totalCount: state.dialogsPage.totalCount,
		page: state.dialogsPage.page,
		userProfile: state.profilePage.profile,
		loginId: state.auth.id,
		myPhoto: state.auth.myPhoto,
		login: state.auth.login,

	}
};
export default compose(withAuthRedirect,
	connect(mapStateToProps,
		{getUsersForFriends,getNewProfile,getMyPhoto}))(DialogsContainer);

