import React from 'react';
import s from './Dialogs.module.scss';

import ava from "./../../Images/skull.png";

import {NavLink} from "react-router-dom";


export const Posts = (
	{
		messages,
		profile,
		deleteMessage,
		myPhoto,
		myId
	}) => {

	return (

		<div className={s.posts}>
			{messages.length && messages.map(m =>
				<div key={m.id + Math.random()}
						 className={
							 s.postWrapper + ' ' +
							 (m.senderId === myId
								 ? s.myPostWrapper
								 : '')
						 }>
					<div className={s.userPost}>
						<div className={s.userInfo}>
							<NavLink to={`/profile/${profile.userId}`}>
								{m.senderId === myId
									? <img className={s.postAvatar}
												 src={myPhoto.large || ava}
												 alt=""
									/>
									: <img className={s.postAvatar}
												 src={profile.photos
													 ? profile.photos.large
													 : ava}
												 alt=""
									/>
								}
							</NavLink>
							<b>{m.senderName}</b>
						</div>
						<div className={s.postContent + ' ' +
						(m.senderId === myId
							? s.myPostContent
							: '')
						}>
							<div className={s.attributes}>
								<div>
									<div
										className={s.date}>
										{m.addedAt.slice(8, 10)}.{m.addedAt.slice(5, 7)}.{m.addedAt.slice(0, 4)}
									</div>
									<div className={s.hour}>
										{m.addedAt.slice(11, 13)}.{m.addedAt.slice(14, 16)}
									</div>
								</div>
								<div className={s.dell}
										 onClick={() => deleteMessage(m.id, profile.userId)}>
									Удалить
								</div>
							</div>
							<div className={s.postText}>
								{m.body}
							</div>
						</div>
					</div>
				</div>
			)
			}
		</div>
	)
};

