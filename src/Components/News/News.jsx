import React from 'react';
import s from './News.module.scss';


export const News = ({currentPage, news, getNews,}) => {

	let validNews = news.filter(n => n.title );

	return (

		<div className={s.newsWrapper}>
			{validNews.map(({objectID, author, created_at, points, title, url, num_comments}) =>
				<a className={s.newsLink} href={url} target='_blank' rel='noopener noreferrer' key={objectID}>
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
			)}
		</div>
	)
};

