import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginMe, unIoginMe} from "../Redux/authReducer";






class LoginContainer extends React.Component {

	componentDidMount() {

	}

	render() {

		return <Login loginMe={this.props.loginMe}
									unIoginMe={this.props.unIoginMe}
									loadLogin={this.props.loadLogin}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		loadLogin: state.auth.loadLogin

	}
};


export default connect(mapStateToProps, {loginMe,unIoginMe})(LoginContainer);