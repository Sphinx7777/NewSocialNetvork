import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginMe, logOutMe} from "../Redux/authReducer";
import {getloadLogin} from "../Redux/selectors";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class LoginContainer extends React.Component {

	render() {
		return <Login history={this.props.history}
									loginMe={this.props.loginMe}
									logOutMe={this.props.logOutMe}
									loadLogin={this.props.loadLogin}
									captchaUrl={this.props.captchaUrl}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		loadLogin: getloadLogin(state),
		captchaUrl: state.auth.captchaUrl

	}
};


export default compose(withRouter,
	connect(mapStateToProps, {loginMe,logOutMe}))(LoginContainer) ;