import React from 'react';
import s from './App.module.scss';
/*import {Route} from "react-router-dom";*/
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
	return (
		<div className={s.app}>
			<HeaderContainer />
			<SideBarContainer />
			<div className={s.contentWrapper}>
			<UsersContainer />
			</div>

			{/*<Route path='/users' render={()=> <UsersContainer />} />*/}
		</div>
	);
}

export default App;
