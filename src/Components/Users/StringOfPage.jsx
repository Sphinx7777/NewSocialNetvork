import React from 'react';
import s from './Users.module.scss';


export const StringOfPage = (props) => {
	let {
		currentPage, onClickNumberOfPage,totalNumberOfUsers,numberUsersOnPage
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
