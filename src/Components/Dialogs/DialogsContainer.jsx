import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {deleteMessage, getMessages, getUsersForFriends, sendNewMessage, setFriends} from "../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";
import {getNewProfile} from "../Redux/profileReducer";
import {getMyPhoto} from "../Redux/authReducer";
import {Preloader} from "../Others/Preloader/Preloader";



class DialogsContainer extends React.Component {

	shouldComponentUpdate(nextProps,nextState) {
		return nextProps.friendLoaded !== this.props.friendLoaded ||
			nextProps.userProfile !== this.props.userProfile ||
			nextProps.allMessages !== this.props.allMessages ||
			nextState !== this.state
	}

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
		friends: state.dialogsPage.friends,
		totalCount: state.dialogsPage.totalCount,
		page: state.dialogsPage.page,
		friendLoaded: state.dialogsPage.friendLoaded,
		sendMessageStatus: state.dialogsPage.sendMessageStatus,
		allMessages: state.dialogsPage.allMessages,
		userProfile: state.profilePage.profile,
		loginId: state.auth.id,
		myPhoto: state.auth.myPhoto,
		myId: state.auth.id,
		login: state.auth.login,

	}
};
export default compose(withAuthRedirect,
	connect(mapStateToProps,
		{getUsersForFriends,getNewProfile,
			getMyPhoto,sendNewMessage,getMessages,
			deleteMessage,setFriends}))(DialogsContainer);

