import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addNewPost} from "../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";


class DialogsContainer extends React.Component {

	render() {
		return <Dialogs {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		userAnswers: state.dialogsPage.userAnswers,
		myPost: state.dialogsPage.myPost,
		postSend: state.dialogsPage.postSend
	}
};
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {addNewPost})
)(DialogsContainer);

