import React from 'react';
import s from './Users.module.scss';
import {User} from "./User";
import {NumberUsersOfPage} from "./NumberUsersOfPage";
import {Search} from "./Search";
import {PrevNextTopBtn} from "./PrevNextTopBtn";


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


	let pagesCount = pages.filter(p => {
		return (p >= currentPage - 5 && p <= currentPage + 5);
	});

	let stringPages = () => pagesCount.map((n, index) => {
		return (
			<span
				onClick={() => {
					onClickNumberOfPage(n)
				}}
				key={index} className={currentPage === n ? s.selectedPage : s.numberPage}>{n}
	        </span>
		)
	});

	let usersScroll = React.createRef();

	return (
		<div className={s.users} ref={usersScroll}>
			<div className={s.stringPages}>
				<NumberUsersOfPage countUsersOnPageLocal={countUsersOnPageLocal}
													 addUser={addUser}
													 currentPage={currentPage}
													 addCountUsers={addCountUsers}/>
				<div className={s.string}>
					<span className={s.goToTheTop} onClick={() => {
						onClickNumberOfPage(currentPage > 1 ? 1
							: currentPage)
					}}>↩ 1 . . . . .
				</span>
					{stringPages()}
					<span className={s.goToTheEnd} onClick={() => {
						onClickNumberOfPage(currentPage < totalCountUsers
							? totalCountUsers
							: currentPage)
					}}>. . . . . {pages.length} ↪
				</span>
				</div>
				<Search searchUsers={searchUsers}/>
			</div>
			<User users={users}
						loadLogin={loadLogin}/>
			<PrevNextTopBtn usersScroll={usersScroll}
											currentPage={currentPage}
											onClickNumberOfPage={onClickNumberOfPage}
											pages={pages}/>
		</div>

	);
};
