import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {getNewUsers, searchUsers, SetNumberUsersOnPageAC} from "../Redux/usersReducer";
import {Preloader} from "../Others/Preloader/Preloader";
import {compose} from "redux";
import {getloadLogin, getUsers} from "../Redux/selectors";



class UsersContainer extends React.PureComponent {

	componentDidMount() {
		let {numberUsersOnPage,getNewUsers,currentPage,}=this.props;
		getNewUsers(currentPage,numberUsersOnPage);
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		let {numberUsersOnPage,getNewUsers,currentPage,}=this.props;
		if(prevProps.numberUsersOnPage !== numberUsersOnPage)
			getNewUsers(currentPage,numberUsersOnPage);
	}

	onClickNumberOfPage = (currentPage) => {
		this.props.getNewUsers(currentPage, this.props.numberUsersOnPage)
	};

	render() {
		if (!this.props.loadedUsers) {
			return <Preloader/>
		}

		return <Users {...this.props} onClickNumberOfPage={this.onClickNumberOfPage}


		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		currentPage: state.usersPage.currentPage,
		loadedUsers: state.usersPage.loadedUsers,
		totalNumberOfUsers: state.usersPage.totalNumberOfUsers,
		numberUsersOnPage: state.usersPage.numberUsersOnPage,
		loadLogin: getloadLogin(state)
	}
};
export default compose(
	connect(mapStateToProps, {getNewUsers,SetNumberUsersOnPageAC,searchUsers}))(UsersContainer);

