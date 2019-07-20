import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addNewPost} from "../Redux/dialogsReducer";







class DialogsContainer extends React.Component {

	componentDidMount() {

	}

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


export default connect(mapStateToProps, {addNewPost})(DialogsContainer);