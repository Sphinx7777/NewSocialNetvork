import React from 'react';
import s from './App.module.scss';
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
import {Footer} from "./Components/Footer/Footer";


class App extends React.Component {

	componentDidMount() {
		this.props.initializationApp()
	}

	render() {
		if (!this.props.initialisation) return <Preloader/>;

		return (
			<div className={s.app}>
				<SideBarContainer/>
				<div className={s.contentWrapper}>
					<Switch>
						<Route exact path='/' render={() => <MainContainer/>}/>
						<Route path='/users' render={() => <UsersContainer/>}/>
						<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
						<Route path='/login' render={() => <LoginContainer/>}/>
						<Route path='/dialogs' render={() => <DialogsContainer/>}/>
						<Route path='/settings' render={() => <SettingsContainer/>}/>
						<Route path='/news' render={() => <NewsContainer/>}/>
						{/*<Route path='/resume' component={() => {
							window.location.href = '#';
							return null;
						}}/>*/}
						<Route path='/telegram' component={() => {
							window.location.href = 'https://t.me/S_f_i_n_x';
							return null;
						}}/>
						<Route path='/djinni' component={() => {
							window.location.href = 'https://djinni.co/q/03c688fb54';
							return null;
						}}/>
						<Route path='/git' component={() => {
							window.location.href = 'https://github.com/Sphinx7777?tab=repositories';
							return null;
						}}/>
						<Route path='/mailLink' component={() => {
							window.location.href = 'mailto:Spamoglot13@gmail.com';
							return null;
						}}/>
					</Switch>
				</div>
				<Footer/>
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
	connect(mapStateToProps, {initializationApp}))(App);

