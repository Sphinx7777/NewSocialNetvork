import React, {Fragment, useState} from 'react';
import s from './News.module.scss';
import {StringOfPage} from "../Others/StringOfPage/StringOfPage";
import {PrevNextTopBtn} from "../Others/PrevNextTopBtn/PrevNextTopBtn";
import {optionsForNews} from "../Others/MyComponents/Select/Options";
import {Select} from "../Others/MyComponents/Select/Select";


export const News = (
	{
		hitsPerPage,
		news,
		currentPage,
		totalCountUsers,
		setNumberPerPage,
		getNews
	}) => {

	const validNews = news.filter(n => n.title);

	const [searchValue, setSearchValue] = useState('');

	const onClickNumberOfPage = currentPage => getNews(currentPage, hitsPerPage);

	const valueForSearch = event => setSearchValue(event.currentTarget.value);

	return (
		<div className={s.newsWrapper}>
			<div className={s.inputWrapper}>
				<input className={s.searchInput}
							 placeholder='Search...'
							 type="text"
							 onChange={valueForSearch}
							 value={searchValue}
				/>
				<Select value={hitsPerPage}
								onChange={setNumberPerPage}
								label=': на странице'
								options={optionsForNews}
				/>
			</div>
			<div className={s.stringPage}>
				<StringOfPage {...{
					onClickNumberOfPage,
					currentPage,
					totalNumberOfUsers: totalCountUsers,
					numberUsersOnPage: hitsPerPage
				}}/>
			</div>

			{validNews.map((
				{
					objectID,
					author,
					created_at,
					points,
					title,
					url,
					num_comments
				}) =>
				<Fragment key={objectID}>
					<a className={s.newsLink}
						 href={url}
						 target='_blank'
						 rel='noopener noreferrer'>
						<div className={s.newsTitle}>
							{title}
						</div>
						<div className={s.description}>
							<div className={s.item}>
								Autor : {author}
							</div>
							<div className={s.item}>
								|
							</div>
							<div className={s.item}>
								Comment : {num_comments}
							</div>
							<div className={s.item}>
								|
							</div>
							<div className={s.item}>
								{created_at.slice(8, 10)}.{created_at.slice(5, 7)}.{created_at.slice(0, 4)}
							</div>
							<div className={s.item}>
								|
							</div>
							<div className={s.item}>
								Points : {points}
							</div>
						</div>
					</a>
				</Fragment>
			)}
			<PrevNextTopBtn {...{
				currentPage,
				onClickNumberOfPage,
				totalNumberOfUsers: totalCountUsers,
				numberUsersOnPage: hitsPerPage
			}}/>
		</div>
	)
};

