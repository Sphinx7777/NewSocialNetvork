import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import ava from "./../../Images/skull.png";
import {Preloader} from "../Others/Preloader/Preloader";
import {NavLink} from "react-router-dom";


export const Dialogs = ({
													sendNewMessage, friends, getNewProfile,myId, myPhoto,
													userProfile, getMessages,deleteMessage,
													allMessages,
												}) => {
	const [profile, setProfile] = useState(userProfile);
	const [friend, setFriends] = useState(friends);
	const [messages, setMessages] = useState(allMessages);

	let getDialogs = (id) => {
		getNewProfile(id);
		getMessages(id)
	};


	useEffect(() => {
		setProfile(userProfile)
	}, [userProfile]);

	useEffect(() => {
		setMessages(allMessages)
	}, [allMessages]);


	let searchFriend = (name) => {
		if (name.length) {
			setFriends(() => friends.filter(t => t.name.toLowerCase().match(name.toLowerCase())));
		} else {
			setFriends(friends);
		}
	};

	let onSubmit = (values) => {
		values.newTextDialog && sendNewMessage(profile.userId, values.newTextDialog);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};

	return (
		<>
			<div className={s.friends}>
				<input className={s.search} placeholder='Search ' type='text' onChange={(event) => {
					searchFriend(event.target.value)
				}}/>
				{friend.length ?
					friend.map(u =>
						<div key={u.id} className={s.friendItem + ' ' + (profile && u.id === profile.userId && s.active)}
								 onClick={() => {
									 getDialogs(u.id)
								 }}
						>
							<img className={s.ava} src={u.photos.large || ava} alt=""/>
							<div className={s.name}>{u.name}</div>
						</div>)
					: <Preloader/>
				}
			</div>
			<div className={s.dialogsWrapper}>
				<div style={{color:'red',fontSize:'1.5rem'}}>Диалоги еще в разработке.Ждем оппонентов.Пока никто еще не пишет...</div>

				<div className={s.dialogs}>
					{!messages.length && <div>Полковнику никто не пишет....</div>}
					{profile && messages.length
					&& <div className={s.posts}>
							{messages.length && messages.map(m =>
								<div key={m.id+Math.random()} className={s.postWrapper+' '+(m.senderId === myId ? s.myPostWrapper :'')}>
								<div className={s.userPost}>
									<div className={s.userInfo}>
										<NavLink to={`/profile/${profile.userId}`}>
											{m.senderId === myId ? <img className={s.postAvatar} src={myPhoto.large || ava} alt=""/>
											:<img className={s.postAvatar} src={profile.photos ? profile.photos.large : ava} alt=""/>
											}
										</NavLink>
										<b>{m.senderName}</b>
									</div>
									<div className={s.postContent+' '+(m.senderId === myId ? s.myPostContent :'')}>
										<div>{m.body}</div>
										<div>
											<div
												className={s.date}>{m.addedAt.slice(8, 10)}.{m.addedAt.slice(5, 7)}.{m.addedAt.slice(0, 4)}</div>
											<div className={s.hour}>{m.addedAt.slice(11, 13)}.{m.addedAt.slice(14, 16)}</div>
											<div className={s.dell} onClick={()=>{deleteMessage(m.id,profile.userId)}}>Удалить</div>
										</div>
									</div>
								</div>
								</div>)}


					</div>}
				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>
			</div>
		</>
	)
};

