import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMe} from "../Redux/authReducer";



class HeaderContainer extends React.Component  {

	componentDidMount() {
		this.props.authMe()
	}
	componentDidUpdate(prevProps) {

		if (this.props.loadLogin !== prevProps.loadLogin) {
			this.props.authMe()
		}
	}

	render() {
	return <Header loadLogin={this.props.loadLogin} login={this.props.login}/>
}
}

let mapStateToProps = (state) => {
	return {
		loadLogin: state.auth.loadLogin,
		login: state.auth.login,

	}
};
export default connect(mapStateToProps,{authMe})(HeaderContainer);