import React, {Suspense, lazy, useEffect} from 'react';
import s from './App.module.scss';
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import MainContainer from "./Components/Main/MainContainer";
import {connect} from "react-redux";
import {Preloader} from "./Components/Others/Preloader/Preloader";
import {compose} from "redux";
import {initializationApp} from "./Components/Redux/initialsReducer";
import {Footer} from "./Components/Footer/Footer";
import { IState } from './Components/common';

const ProfileContainer = lazy(() => import("./Components/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));
const SettingsContainer = lazy(() => import("./Components/Settings/SettingsContainer"));
const MusicContainer = lazy(() => import("./Components/Music/MusicContainer"));
const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"));
const NewsContainer = lazy(() => import("./Components/News/NewsContainer"));
const LoginContainer = lazy(() => import("./Components/Login/LoginContainer"));

interface IAppProps {
	initializationApp: () => void;
	initialisation: boolean;
}
const App = (props: IAppProps) => {

	useEffect(() => {
		props.initializationApp()
    }, [])
		
	if (!props.initialisation) return <Preloader/>;
        return (
			<div className={s.app}>
				<SideBarContainer/>
				<div className={s.contentWrapper}>
					<Switch>
						<Route exact path='/' render={() => <MainContainer/>}/>
                        <Suspense fallback={<Preloader/>}>
							<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
							<Route path='/users' render={() => <UsersContainer/>}/>
							<Route path='/login' render={() => <LoginContainer/>}/>
							<Route path='/dialogs' render={() => <DialogsContainer/>}/>
							<Route path='/settings' render={() => <SettingsContainer/>}/>
							<Route path='/news' render={() => <NewsContainer/>}/>
							<Route path='/music' render={() => <MusicContainer/>}/>
						</Suspense>
					</Switch>
				</div>
				<Footer/>
			</div>
		);
}

let mapStateToProps = (state: IState) => {
	return {
		initialisation: state.initial.initialisation
	}
};
export default compose<any>(
	withRouter,
	connect(mapStateToProps, {initializationApp}))(App);

