import React from 'react';
import s from './StringOfPage.module.scss';


export const StringOfPage = (props) => {
	let {
		currentPage,// текущая страница
		onClickNumberOfPage,// обработчик клика
		totalNumberOfUsers,// общее количество айтемов
		numberUsersOnPage // кол-во айтемов на странице
	} = props;

	let totalCountUsers = Math.ceil(totalNumberOfUsers / numberUsersOnPage);
	let pages = []; // получение динамического количества страниц
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}

	let pagesCount = pages.filter(p => { // отображаемые номера страниц
		return (p >= currentPage - 5 && p <= currentPage + 5);
	});
	// создание нумерации и обработчик клика
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
  // сборка в одно целое и кнопки последней и первой страницы
	return (
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


	);
};
