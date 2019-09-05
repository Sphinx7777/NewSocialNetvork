import React from 'react';
import s from './App.module.scss';
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {Preloader} from "./Components/Others/Preloader/Preloader";
import {compose} from "redux";
import {initializationApp} from "./Components/Redux/initialsReducer";
import SettingsContainer from "./Components/Settings/SettingsContainer";
import NewsContainer from "./Components/News/NewsContainer";



class App extends React.Component {

	componentDidMount() {
		this.props.initializationApp()
	}

	render() {
		if(!this.props.initialisation) return <Preloader />;

		return (
			<div className={s.app}>

				{/*<HeaderContainer />*/}
				<SideBarContainer />
				<div className={s.contentWrapper}>
					<Switch>
					<Route exact path='/' render = {()=> <MainContainer />} />
					<Route path='/users' render = {()=> <UsersContainer />} />
					<Route path='/profile/:userId?' render = {()=> <ProfileContainer />} />
					<Route path='/login' render = {()=> <LoginContainer />} />
					<Route path='/dialogs' render = {()=> <DialogsContainer />} />
					<Route path='/settings' render = {()=> <SettingsContainer />} />
					<Route path='/news' render = {()=> <NewsContainer />} />
					</Switch>
				</div>
			</div>
		);

	}
}
let mapStateToProps = (state) => {
	return {
		initialisation: state.initial.initialisation
	}
};
export default compose(
	withRouter,
	connect(mapStateToProps,{initializationApp}))(App);

