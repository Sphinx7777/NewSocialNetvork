import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginMe, logOutMe} from "../Redux/authReducer";






class LoginContainer extends React.Component {

	componentDidMount() {

	}

	render() {

		return <Login loginMe={this.props.loginMe}
									logOutMe={this.props.logOutMe}
									loadLogin={this.props.loadLogin}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		loadLogin: state.auth.loadLogin

	}
};


export default connect(mapStateToProps, {loginMe,logOutMe})(LoginContainer);