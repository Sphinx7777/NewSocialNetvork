import React from 'react';
import { Login } from "./Login";
import { connect } from "react-redux";
import { loginMe, logOutMe } from "../Redux/authReducer";
import { getloadLogin } from "../Redux/selectors";
import { compose } from "redux";
import { withRouter } from "react-router-dom";


class LoginContainer extends React.Component {

	render() {
		const { history, loginMe, logOutMe, loadLogin, captchaUrl } = this.props
		return <Login
			history={history}
			loginMe={loginMe}
			logOutMe={logOutMe}
			loadLogin={loadLogin}
			captchaUrl={captchaUrl}
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
	connect(mapStateToProps, { loginMe, logOutMe }))(LoginContainer);