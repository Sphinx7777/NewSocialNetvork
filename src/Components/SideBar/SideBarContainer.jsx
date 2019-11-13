import React from 'react';
import {SideBar} from "./SideBar";
import {getloadLogin} from "../Redux/selectors";
import {connect} from "react-redux";



class SideBarContainer extends React.Component  {

render() {

	return <SideBar loadLogin={this.props.loadLogin} login={this.props.login}/>
}


}
let mapStateToProps = (state) => {
	return {
		loadLogin: getloadLogin(state),
		login: state.auth.login,
	}
};

export default connect(mapStateToProps,{})(SideBarContainer);