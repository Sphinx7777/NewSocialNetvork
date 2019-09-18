import React from 'react';
import s from './Users.module.scss';
import {User} from "./User";
import {NumberUsersOfPage} from "./NumberUsersOfPage";
import {Search} from "./Search";
import {PrevNextTopBtn} from "../Others/PrevNextTopBtn/PrevNextTopBtn";
import {StringOfPage} from "../Others/StringOfPage/StringOfPage";


export const Users = (props) => {
	let {
		totalNumberOfUsers, numberUsersOnPage, currentPage,
		onClickNumberOfPage, searchUsers, users, loadLogin, SetNumberUsersOnPageAC,
	} = props;


	return (
		<React.Fragment>
			<div className={s.users}>
				<div className={s.stringPages}>
					<NumberUsersOfPage {...{
						currentPage, totalNumberOfUsers,
						SetNumberUsersOnPageAC, numberUsersOnPage
					}}/>

					<StringOfPage {...{
						onClickNumberOfPage, currentPage,
						totalNumberOfUsers, numberUsersOnPage
					}}/>

					<Search {...{searchUsers}}/>
				</div>
				<div>
					<User users={users} loadLogin={loadLogin}/>

				</div>

			</div>
			<PrevNextTopBtn {...{
				currentPage, onClickNumberOfPage,
				totalNumberOfUsers, numberUsersOnPage
			}}/>
		</React.Fragment>
	);
};
