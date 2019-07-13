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
	let stringPages = () => pages.map((n, index) => {
		return (<span onClick={() => {
				props.onClickNumberOfPage(n)
			}}
									key={index} className={props.currentPage === n ? s.selectedPage : s.numberPage}>{n}
	</span>
		)
	});


	return (
		<div className={s.users}>
			<div className={s.stringPages}>
				{stringPages()}
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

		</div>
	)


};