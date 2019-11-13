import React from 'react';
import s from './Users.module.scss';
import {User} from "./User";
import {Search} from "./Search";
import {PrevNextTopBtn} from "../Others/PrevNextTopBtn/PrevNextTopBtn";
import {StringOfPage} from "../Others/StringOfPage/StringOfPage";
import {Select} from "../Others/MyComponents/Select/Select";
import {optionsForUsers} from "../Others/MyComponents/Select/Options";


export const Users = (props) => {
	let {
		totalNumberOfUsers,
		numberUsersOnPage,
		currentPage,
		onClickNumberOfPage,
		searchUsers,
		users,
		loadLogin,
		SetNumberUsersOnPageAC
	} = props;


	return (
		<React.Fragment>
			<div className={s.users}>
				<div className={s.stringPages}>
					<Select value={numberUsersOnPage}
									onChange={SetNumberUsersOnPageAC}
									label=': на странице'
									options={optionsForUsers}
					/>
					<StringOfPage {...{
						onClickNumberOfPage,
						currentPage,
						totalNumberOfUsers,
						numberUsersOnPage
					}}/>
					<Search {...{searchUsers}}/>
				</div>
				<div>
					<User {...{users, loadLogin}}/>
				</div>
			</div>
			<PrevNextTopBtn {...{
				currentPage,
				onClickNumberOfPage,
				totalNumberOfUsers,
				numberUsersOnPage
			}}/>
		</React.Fragment>
	);
};
