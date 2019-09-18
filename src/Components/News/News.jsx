import React, {Fragment,useState} from 'react';
import s from './News.module.scss';
import {StringOfPage} from "../Others/StringOfPage/StringOfPage";
import {PrevNextTopBtn} from "../Others/PrevNextTopBtn/PrevNextTopBtn";


export const News = ({hitsPerPage,news,currentPage,totalCountUsers,setNumberPerPage,getNews}) => {
	let validNews = news.filter(n => n.title );

	let [searchValue, setSearchValue] = useState('');

	let onClickNumberOfPage = (currentPage) => {
		getNews(currentPage, hitsPerPage)
	};

	return (
		<div className={s.newsWrapper}>

			<div className={s.inputWrapper}>
				<input className={s.searchInput} placeholder='Search...' type="text"
							 onChange={(e)=>{setSearchValue(e.currentTarget.value)}} value={searchValue}/>
				<label> <span>Новостей на странице : </span>
				<select className={s.numberSelect} value={hitsPerPage} onChange={(e)=>setNumberPerPage(+e.currentTarget.value)}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="40">40</option>
					<option value="50">50</option>
				</select>
				</label>

			</div>
			<div className={s.stringPage}>
				<StringOfPage
					onClickNumberOfPage={onClickNumberOfPage}
					currentPage={currentPage}
					totalNumberOfUsers={totalCountUsers}
					numberUsersOnPage={hitsPerPage}
				/>
			</div>

			{validNews.map(({objectID, author, created_at, points, title, url, num_comments}) =>
				<Fragment key={objectID}>
				<a className={s.newsLink} href={url} target='_blank' rel='noopener noreferrer'>
					<div className={s.newsTitle}>{title}</div>
					<div className={s.description}>
						<div className={s.item}>Autor : {author}</div>
						<div className={s.item}>|</div>
						<div className={s.item}>Comment : {num_comments}</div>
						<div className={s.item}>|</div>
						<div className={s.item}>{created_at.slice(8, 10)}.{created_at.slice(5, 7)}.{created_at.slice(0, 4)}</div>
						<div className={s.item}>|</div>
						<div className={s.item}>Points : {points}</div>
					</div>
				</a>
				</Fragment>
			)}
			<PrevNextTopBtn
				currentPage={currentPage} onClickNumberOfPage={onClickNumberOfPage}
				totalNumberOfUsers={totalCountUsers} numberUsersOnPage={hitsPerPage}
			/>
		</div>
	)
};

