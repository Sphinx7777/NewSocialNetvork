import React from 'react';
import s from './App.module.scss';
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



function App() {
	return (
		<div className={s.app}>
			<HeaderContainer />
			<SideBarContainer />
			<div className={s.contentWrapper}>
			<Route path='/users' render = {()=> <UsersContainer />} />
			<Route path='/profile/:userId?' render = {()=> <ProfileContainer />} />
			</div>
		</div>
	);
}

export default App;
