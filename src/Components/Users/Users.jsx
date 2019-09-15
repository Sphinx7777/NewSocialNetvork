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
		addUser, searchUsers, addCountUsers, users, loadLogin, countUsersOnPageLocal
	} = props;

	let totalCountUsers = Math.ceil(totalNumberOfUsers / numberUsersOnPage);
	let pages = [];
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}




	return (
		<div className={s.users}>
			<div className={s.stringPages}>
				<NumberUsersOfPage countUsersOnPageLocal={countUsersOnPageLocal}
													 addUser={addUser}
													 currentPage={currentPage}
													 addCountUsers={addCountUsers}/>
				<StringOfPage onClickNumberOfPage={onClickNumberOfPage}
											currentPage={currentPage}
											totalCountUsers={totalCountUsers}
											pages={pages}/>

				<Search
					      searchUsers={searchUsers}/>
			</div>
			<div>
				<User users={users}
							loadLogin={loadLogin}/>
				<PrevNextTopBtn currentPage={currentPage}
												onClickNumberOfPage={onClickNumberOfPage}
												pages={pages}/>
			</div>
		</div>
	);
};
