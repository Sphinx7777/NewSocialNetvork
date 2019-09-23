import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {getUsersForFriends} from "../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";



class DialogsContainer extends React.Component {


	componentDidMount() {
		this.props.getUsersForFriends(this.props.page,100);
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

	}
};
export default compose(withAuthRedirect,
	connect(mapStateToProps,
		{getUsersForFriends}))(DialogsContainer);

