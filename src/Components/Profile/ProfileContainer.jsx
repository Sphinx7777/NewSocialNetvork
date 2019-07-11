import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";




class ProfileContainer extends React.Component {

	componentDidMount() {

	}

	render() {
		/*if (!this.props.loadedUsers) {
			return <Preloader/>
		}*/
		return <Profile />
	}
}

let mapStateToProps = (state) => {
	return {

	}
};


export default connect(mapStateToProps, {})(ProfileContainer);