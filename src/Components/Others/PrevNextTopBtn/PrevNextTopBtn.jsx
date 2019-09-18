import React from 'react';
import s from './PrevNextTopBtn.module.scss';


export const PrevNextTopBtn = (props) => {
	let {
		currentPage, onClickNumberOfPage,totalNumberOfUsers,numberUsersOnPage
	} = props;


	let totalCountUsers = Math.ceil(totalNumberOfUsers / numberUsersOnPage);
	let pages = [];
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}



	let toTheTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className={s.showPages}>
			<button onClick={() => {
				onClickNumberOfPage(currentPage > 1 ? currentPage - 1 : currentPage);
				toTheTop();
			}} className={s.showPrevPage} disabled={currentPage === 1}>Show prev page ↩
			</button>
			<button className={s.toTheTop} onClick={() => {
				toTheTop();
			}}>⇪ To the top ⇪
			</button>
			<button onClick={() => {
				onClickNumberOfPage(currentPage < pages.length ? currentPage + 1 : currentPage);
				toTheTop();
			}} className={s.showNextPage} disabled={currentPage === pages.length}>↪ Show next page
			</button>
		</div>
	);
};
