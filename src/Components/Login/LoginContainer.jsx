import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginMe} from "../Redux/authReducer";






class LoginContainer extends React.Component {

	componentDidMount() {

	}

	render() {

		return <Login loginMe={this.props.loginMe}/>
	}
}

let mapStateToProps = (state) => {
	return {


	}
};


export default connect(mapStateToProps, {loginMe})(LoginContainer);