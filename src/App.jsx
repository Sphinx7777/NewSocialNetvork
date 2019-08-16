import React from 'react';
import s from './App.module.scss';
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {authMe} from "./Components/Redux/authReducer";
/*import {Preloader} from "./Components/Others/Preloader/Preloader";*/
import {compose} from "redux";



class App extends React.Component {
	componentDidMount() {
		this.props.authMe()
	}
	render() {
		/*if(!this.props.loadLogin) return <Preloader />;*/
		return (
			<div className={s.app}>
				<HeaderContainer />
				<SideBarContainer />
				<div className={s.contentWrapper}>
					<Route path='/users' render = {()=> <UsersContainer />} />
					<Route path='/main' render = {()=> <MainContainer />} />
					<Route path='/profile/:userId?' render = {()=> <ProfileContainer />} />
					<Route path='/login' render = {()=> <LoginContainer />} />
					<Route path='/dialogs' render = {()=> <DialogsContainer />} />
				</div>
			</div>
		);

	}
}
let mapStateToProps = (state) => {
	return {
		loadLogin: state.auth.loadLogin,
	}
};
export default compose(
	withRouter,
	connect(mapStateToProps,{authMe})
)(App) ;

