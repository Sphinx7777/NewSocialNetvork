import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";




class HeaderContainer extends React.Component  {




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
export default connect(mapStateToProps,{})(HeaderContainer);