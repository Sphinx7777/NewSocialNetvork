import React from 'react';
import s from './Users.module.scss';


export const PrevNextTopBtn = (props) => {
	let {
		currentPage, onClickNumberOfPage, pages,usersScroll,
	} = props;



	let toTheTop = () => {
		usersScroll.current.scrollTop = 0;
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
			}}>To the top
			</button>
			<button onClick={() => {
				onClickNumberOfPage(currentPage < pages.length ? currentPage + 1 : currentPage);
				toTheTop();
			}} className={s.showNextPage} disabled={currentPage === pages.length}>↪ Show next page
			</button>
		</div>
	);
};
