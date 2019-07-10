import React from 'react';
import s from './App.module.scss';
/*import {Route} from "react-router-dom";*/
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
	return (
		<div className={s.app}>
			<HeaderContainer />
			{/*<Route path='/users' render={()=> <UsersContainer />} />*/}
		</div>
	);
}

export default App;
