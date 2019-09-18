import React, {Fragment, useEffect, useState} from 'react';
import s from './News.module.scss';


export const News = ({hitsPerPage,news,currentPage,searchNews,setNumberPerPage}) => {
	let validNews = news.filter(n => n.title );

	let [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		searchNews(searchValue,hitsPerPage);
	}, [searchNews,searchValue,hitsPerPage]);



	return (
		<div className={s.newsWrapper}>
			<div>
				<input type="text" onChange={(e)=>{setSearchValue(e.currentTarget.value)}} value={searchValue}/>
				<input type="number" max='50' step={10} onChange={(e)=>setNumberPerPage(+e.currentTarget.value)} value={hitsPerPage}/>
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
		</div>
	)
};

