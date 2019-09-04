import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {getNewUsers, searchUsers, SetNumberUsersOnPageAC} from "../Redux/usersReducer";
import {Preloader} from "../Others/Preloader/Preloader";
import {compose} from "redux";
import {getloadLogin, getUsers} from "../Redux/selectors";



class UsersContainer extends React.Component {

	state={
		countUsersOnPage:this.props.numberUsersOnPage
	};
	addUser =(count)=>{
    this.setState({
			countUsersOnPage:count
		})
	};

addCountUsers = ()=>{
	this.props.SetNumberUsersOnPageAC(this.state.countUsersOnPage)
};

	componentDidMount() {
		let {numberUsersOnPage,getNewUsers,currentPage,}=this.props;
		getNewUsers(currentPage,numberUsersOnPage);
	}
	componentDidUpdate(prevProps) {
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
									                addUser={this.addUser}
									addCountUsers={this.addCountUsers}
									countUsersOnPageLocal={this.state.countUsersOnPage}
									searchUsers={this.props.searchUsers}

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

