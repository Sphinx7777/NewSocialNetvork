import React from 'react';
import s from './Users.module.scss';
import photo from './../../Images/skull2.png';
import {NavLink} from "react-router-dom";


export const Users = (props) => {
	let totalCountUsers = Math.ceil(props.totalNumberOfUsers / props.numberUsersOnPage);
	let pages = [];
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}
	let pagesCreator=(started,finish)=> pages.filter(p=> {
		return (p>=started && p<=finish);
	});

	let pagesCount = pagesCreator(props.currentPage-7,props.currentPage+7);

	let stringPages = () => pagesCount.map((n, index) => {
		return (<span
				onClick={() => {
					props.onClickNumberOfPage(n)
				}}
				key={index} className={props.currentPage === n ? s.selectedPage : s.numberPage}>{n}
	        </span>
		)
	});


	return (
		<div className={s.users}>
			<div className={s.stringPages}>
				<span onClick={()=>{props.onClickNumberOfPage(props.currentPage>1 ? 1
					: props.currentPage )}} className={s.goToTheTop}>Go to the top
				</span>
				...{stringPages()}...
				<span onClick={()=>{props.onClickNumberOfPage(props.currentPage<totalCountUsers
					? totalCountUsers
					: props.currentPage )}} className={s.goToTheEnd}>Go to the end
				</span>
			</div>
			{props.users.map(u => {

				return (<NavLink className={s.nav} key={u.id} to={`/profile/${u.id}`}>
					<div className={s.user}>
						<div className={s.photoAndFriendStatus}>
							<img className={s.photo} src={!u.photos.large ? photo : u.photos.large} alt=""/>
							{!u.followed ? <span className={s.notFriendStatus}>It's my enemy</span>
								: <span className={s.friendStatus}>It's my friend</span>}
						</div>
						<div className={s.description}>
							<span className={s.name}>Name:</span>
							<label className={s.userName}>{u.name}</label>
							<span className={s.status}>Status:</span>
							<label className={s.userStatus}>"{!u.status ? `Я лентяй и статус не вбил` : u.status}"</label>
						</div>
					</div>
				</NavLink>)
			})}
			<div>
				<span onClick={()=>{props.onClickNumberOfPage(props.currentPage>1 ? props.currentPage-1: props.currentPage )}} className={s.showPrevPage}>Show prev page ↩</span>
				<span onClick={()=>{props.onClickNumberOfPage(props.currentPage<pages.length ? props.currentPage+1: props.currentPage )}} className={s.showNextPage}>↪ Show next page</span>

			</div>

		</div>
	)


};