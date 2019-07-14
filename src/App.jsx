import React from 'react';
import s from './App.module.scss';
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



function App() {
	return (
		<div className={s.app}>
			<HeaderContainer />
			<SideBarContainer />
			<div className={s.contentWrapper}>
			<Route path='/users' render = {()=> <UsersContainer />} />
			<Route path='/profile/:userId?' render = {()=> <ProfileContainer />} />
			<Route path='/login' render = {()=> <LoginContainer />} />
			<Route path='/dialogs' render = {()=> <DialogsContainer />} />
			</div>
		</div>
	);
}

export default App;
