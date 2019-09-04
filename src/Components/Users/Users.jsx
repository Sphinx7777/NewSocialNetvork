import React, {useState} from 'react';
import s from './Users.module.scss';
import {User} from "./User";
import {NumberUsersOfPage} from "./NumberUsersOfPage";


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


	let pagesCreator = (started, finish) => pages.filter(p => {
		return (p >= started && p <= finish);
	});
	let pagesCount = pagesCreator(currentPage - 5, currentPage + 5);
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

	let toTheTop = () => {
		usersScroll.current.scrollTop = 0;
	};


	let addUserOnPage = (event) => {
		addUser(event.target.value < 50 ? event.target.value : 50);

	};

	let [name, setName] = useState(null);

	let nameUser = (e) => {
		setName(e.currentTarget.value);
		searchUsers(name)
	};

	/*let searchUser= ()=>{
	props.searchUsers(name)
	};*/

	return (
		<div className={s.users} ref={usersScroll}>
			<div className={s.stringPages}>
				<NumberUsersOfPage countUsersOnPageLocal={countUsersOnPageLocal}
													 addUserOnPage={addUserOnPage}
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

				<div className={s.searchWrapper}>
					<input onChange={nameUser} type="text" min="1" max="50" placeholder='UserNameSearch'/>
					{/*<span className={s.search} onClick={searchUser}>Search</span>*/}</div>
			</div>

			<User users={users}
						loadLogin={loadLogin}/>

			<div className={s.showPages}>
				<button onClick={() => {
					onClickNumberOfPage(currentPage > 1 ? currentPage - 1 : currentPage);
					toTheTop();
				}} className={s.showPrevPage} disabled={currentPage === 1}>Show prev page ↩
				</button>
				<button className={s.toTheTop} onClick={() => {
					toTheTop()
				}}>To the top
				</button>
				<button onClick={() => {
					onClickNumberOfPage(currentPage < pages.length ? currentPage + 1 : currentPage);
					toTheTop();
				}} className={s.showNextPage} disabled={currentPage === pages.length}>↪ Show next page
				</button>
			</div>
		</div>

	);
};
