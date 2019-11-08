import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
	return {
		loadLogin: state.auth.loadLogin
	}
};

export const withAuthRedirect =(Component) => {
	class redirectWrapper extends React.Component  {
	render() {
		if(!this.props.loadLogin) return <Redirect to='/login'/>;
		return <Component {...this.props}/>
	}
}
return connect(mapStateToProps)(redirectWrapper);

};