import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";







class DialogsContainer extends React.Component {

	componentDidMount() {

	}

	render() {

		return <Dialogs />
	}
}

let mapStateToProps = (state) => {
	return {


	}
};


export default connect(mapStateToProps, {})(DialogsContainer);