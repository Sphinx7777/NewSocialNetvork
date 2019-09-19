import React from 'react';
import s from './PrevNextTopBtn.module.scss';


export const PrevNextTopBtn = (props) => {
	let {
		currentPage, // текущая страница
		onClickNumberOfPage, // обработчик клика
		totalNumberOfUsers, // общее количество айтемов
		numberUsersOnPage // кол-во айтемов на странице
	} = props;


	let totalCountUsers = Math.ceil(totalNumberOfUsers / numberUsersOnPage);
	let pages = []; // получение динамического количества страниц
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}


  // Скрол на верх страницы
	let toTheTop = () => {
		window.scrollTo(0, 0);
	};
  // Сборка и логика обработчика кликов для именения текущей страницы
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
