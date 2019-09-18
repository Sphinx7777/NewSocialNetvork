import React from 'react';
import s from './Users.module.scss';


export const NumberUsersOfPage = ({numberUsersOnPage,SetNumberUsersOnPageAC,currentPage,totalNumberOfUsers}) => {

	return (
		<label className={s.numberSelect}>
			<select className={s.select} value={numberUsersOnPage} onChange={(e)=>SetNumberUsersOnPageAC(+e.currentTarget.value)}>
				<option disabled={currentPage>=Math.ceil(totalNumberOfUsers/5)} value="5">5</option>
				<option disabled={currentPage>=Math.ceil(totalNumberOfUsers/10)} value="10">10</option>
				<option disabled={currentPage>=Math.ceil(totalNumberOfUsers/15)} value="15">15</option>
				<option disabled={currentPage>=Math.ceil(totalNumberOfUsers/20)} value="20">20</option>
				<option disabled={currentPage>=Math.ceil(totalNumberOfUsers/25)} value="25">25</option>
			</select>
			<span className={s.selectTitle}> : users on page</span>
		</label>
	)
};
