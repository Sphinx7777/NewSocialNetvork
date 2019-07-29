import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {getNewUsers, SetNumberUsersOnPageAC} from "../Redux/usersReducer";
import {Preloader} from "../Others/Preloader/Preloader";
/*import {withAuthRedirect} from "../Hoc/Redirect/withAuthRedirect";*/
import {compose} from "redux";



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
		this.props.getNewUsers(this.props.currentPage, this.props.numberUsersOnPage);

	}
	componentDidUpdate(prevProps) {
		if(prevProps.numberUsersOnPage !== this.props.numberUsersOnPage) this.props.getNewUsers(this.props.currentPage, this.props.numberUsersOnPage);

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

		/>
	}

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		loadedUsers: state.usersPage.loadedUsers,
		totalNumberOfUsers: state.usersPage.totalNumberOfUsers,
		numberUsersOnPage: state.usersPage.numberUsersOnPage,
		loadLogin: state.auth.loadLogin
	}
};
export default compose(
	connect(mapStateToProps, {getNewUsers,SetNumberUsersOnPageAC}),
	/*withAuthRedirect*/
)(UsersContainer);

