import React from 'react';
import s from './Users.module.scss';
import photo from './../../Images/skull2.png';
import {NavLink} from "react-router-dom";


export const User = (
	{
		users,
		loadLogin
	}) => {

	return (
		users.map(u => {
			return (
				<NavLink className={s.nav} key={u.id} to={`/profile/${u.id}`}>
					<div className={s.user}>
						<div className={s.photoAndFriendStatus}>
							<img className={s.photo}
									 src={!u.photos.large
										 ? photo
										 : u.photos.large}
									 alt=""
							/>
							{!u.followed
								?
								<span className={s.notFriendStatus}>
									{loadLogin
										? 'It\'s my enemy'
										: 'Status unavailable'}
								</span>
								: <span className={s.friendStatus}>
									It's my friend
								</span>}
						</div>
						<div className={s.description}>
							<span className={s.name}>
								Name:
							</span>
							<label className={s.userName}>
								{u.name}
							</label>
							<span className={s.status}>
								Status:
							</span>
							<label className={s.userStatus}>
								"{!u.status
								? `Я лентяй и статус не вбил`
								: u.status}"
							</label>
						</div>
					</div>
				</NavLink>
			)
		})
	)
};
