import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class LoginContainer extends React.Component {

	componentDidMount() {

	}

	render() {

		return <Login/>
	}
}

let mapStateToProps = (state) => {
	return {


	}
};


export default withRouter(connect(mapStateToProps, {})(LoginContainer));