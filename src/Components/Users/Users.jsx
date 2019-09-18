import React from 'react';
import s from './Users.module.scss';
import {User} from "./User";
import {NumberUsersOfPage} from "./NumberUsersOfPage";
import {Search} from "./Search";
import {PrevNextTopBtn} from "./PrevNextTopBtn";
import {StringOfPage} from "./StringOfPage";


export const Users = (props) => {
	let {
		totalNumberOfUsers, numberUsersOnPage, currentPage, onClickNumberOfPage,
		addUser, searchUsers, addCountUsers, users, loadLogin, countUsersOnPageLocal,
	} = props;


	return (
		<div className={s.users}>
			<div className={s.stringPages}>
				<NumberUsersOfPage {...{currentPage,addCountUsers,
					addUser,countUsersOnPageLocal}}/>

				<StringOfPage {...{
					onClickNumberOfPage, currentPage,
					totalNumberOfUsers, numberUsersOnPage
				}}/>

				<Search {...{searchUsers}}/>
			</div>
			<div>
				<User users={users} loadLogin={loadLogin}/>
				<PrevNextTopBtn {...{
					currentPage, onClickNumberOfPage,
					totalNumberOfUsers, numberUsersOnPage
				}}/>
			</div>
		</div>
	);
};
