import React from 'react';
import s from './Users.module.scss';


export const NumberUsersOfPage = (props) => {
let {currentPage,addCountUsers,addUser,countUsersOnPageLocal}=props;

let addUserOnPage = (event) => {
		addUser(event.target.value < 50 ? event.target.value : 50);
	};
	return (

		<div className={currentPage === 1 ? s.numberUsers : s.numberUsersHidden}>
			<button disabled={currentPage > 1} onClick={() => {
				addCountUsers()
			}} className={s.numberUsersBtn}>&#10148;</button>
			<div className={s.numbers}>
				<span className={s.maxUsers}>Max 50 users</span>
				<input disabled={currentPage > 1} onChange={addUserOnPage} className={s.numberUsersInput} type="number"
							 min="1" max="50" value={countUsersOnPageLocal}/>
			</div>
		</div>

	)
};
