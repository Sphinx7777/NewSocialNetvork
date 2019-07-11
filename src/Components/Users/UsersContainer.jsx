import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {getNewUsers} from "../Redux/usersReducer";
import {Preloader} from "../Others/Preloader/Preloader";



class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getNewUsers(this.props.currentPage, this.props.numberUsersOnPage)

	}

	onClickNumberOfPage = (currentPage) => {
		this.props.getNewUsers(currentPage, this.props.numberUsersOnPage)
	};


	render() {
		if (!this.props.loadedUsers) {
			return <Preloader/>
		}
		return <Users {...this.props} onClickNumberOfPage={this.onClickNumberOfPage}/>
	}

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		loadedUsers: state.usersPage.loadedUsers,
		totalNumberOfUsers: state.usersPage.totalNumberOfUsers,
		numberUsersOnPage: state.usersPage.numberUsersOnPage,

	}
};


export default connect(mapStateToProps, {getNewUsers,})(UsersContainer);