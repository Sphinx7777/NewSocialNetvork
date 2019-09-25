import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {getFriendMessage, getUsersForFriends, sendNewMessage} from "../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";
import {getNewProfile} from "../Redux/profileReducer";
import {getMyPhoto} from "../Redux/authReducer";
import {Preloader} from "../Others/Preloader/Preloader";



class DialogsContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersForFriends(this.props.page,100);
		this.props.getMyPhoto(this.props.loginId)
}


	render() {
		if(this.props.friendLoaded){
			return <Dialogs {...this.props}/>
		}else{
			return <Preloader/>
		}

	}
}

let mapStateToProps = (state) => {
	return {
		users: state.dialogsPage.users,
		totalCount: state.dialogsPage.totalCount,
		page: state.dialogsPage.page,
		friendLoaded: state.dialogsPage.friendLoaded,
		sendMessageStatus: state.dialogsPage.sendMessageStatus,
		loadFriendMessages: state.dialogsPage.loadFriendMessages,
		myMessages: state.dialogsPage.myMessages,
		friendMessages: state.dialogsPage.friendMessages,
		userProfile: state.profilePage.profile,
		loadProfile: state.profilePage.loadProfile,
		loginId: state.auth.id,
		myPhoto: state.auth.myPhoto,
		login: state.auth.login,

	}
};
export default compose(withAuthRedirect,
	connect(mapStateToProps,
		{getUsersForFriends,getNewProfile,getMyPhoto,sendNewMessage,getFriendMessage}))(DialogsContainer);

