import React from 'react';
import s from './Users.module.scss';


export const NumberUsersOfPage = ({numberUsersOnPage,SetNumberUsersOnPageAC,currentPage}) => {


	return (
		<label className={s.numberSelect}>
			<select className={s.select} value={numberUsersOnPage} onChange={(e)=>SetNumberUsersOnPageAC(+e.currentTarget.value)}>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
				<option value="25">25</option>
			</select>
			<span className={s.selectTitle}> : users on page</span>
		</label>
	)
};
