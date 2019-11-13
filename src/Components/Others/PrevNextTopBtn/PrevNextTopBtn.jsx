import React from 'react';
import s from './PrevNextTopBtn.module.scss';


export const PrevNextTopBtn = (props) => {
	const {
		currentPage, // текущая страница
		onClickNumberOfPage, // обработчик клика
		totalNumberOfUsers, // общее количество айтемов
		numberUsersOnPage // кол-во айтемов на странице
	} = props;


	const totalCountUsers = Math.ceil(totalNumberOfUsers / numberUsersOnPage);
	const pages = []; // получение динамического количества страниц
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}


	// Скрол на верх страницы
	const toTheTop = () => {
		window.scrollTo(0, 0);
	};

	const goToThePrevPages = () => {
		onClickNumberOfPage(
			currentPage > 1
				? currentPage - 1
				: currentPage);
		toTheTop();
	};
	const goToTheNextPage = () => {
		onClickNumberOfPage(
			currentPage < pages.length
				? currentPage + 1
				: currentPage);
		toTheTop();
	};

	// Сборка и логика обработчика кликов для именения текущей страницы
	return (
		<div className={s.showPages}>
			<button className={s.showPrevPage}
							onClick={goToThePrevPages}
							disabled={currentPage === 1}>
				Show prev page ↩
			</button>
			<button className={s.toTheTop}
							onClick={toTheTop}>
				⇪ To the top ⇪
			</button>
			<button className={s.showNextPage}
							onClick={goToTheNextPage}
							disabled={currentPage === pages.length}>
				↪ Show next page
			</button>
		</div>
	);
};
