import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import ava from "./../../Images/skull.png";
import {Preloader} from "../Others/Preloader/Preloader";


export const Dialogs = ({addNewPost, users, getNewProfile,myPhoto,
													login, userProfile}) => {
	let onSubmit = (values) => {
		values.newTextDialog && addNewPost(values.newTextDialog);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};
	const [profile, setProfile] = useState(userProfile);
	const [friend, setUsers] = useState(users);

	useEffect(() => {
		setProfile(userProfile)
	}, [userProfile]);
	let searchFriend = (name) => {
		if(name.length){
			setUsers(() => users.filter(t => t.name.toLowerCase().match(name.toLowerCase())));
		}else {
			setUsers(users);
		}

	};
console.log('render');

	return (
		<>
			<div className={s.users}>
				<input className={s.search} placeholder='Search ' type='text' onChange={(event) => {
					searchFriend(event.target.value)
				}}/>
				{friend.length ?
					friend.map(u =>
						<div key={Math.random()} className={s.userItem} onClick={() => {
							getNewProfile(u.id)
						}}>
							<img className={s.ava} src={u.photos.large || ava} alt=""/>
							<div className={s.name}>{u.name}</div>
						</div>)
					: <Preloader/>
				}
			</div>
			<div className={s.dialogsWrapper}>
				<div className={s.dialogs}>
					{profile && <div className={s.posts}>
						<div className={s.userPost}>
							<div className={s.userInfo}>
								<img className={s.postAvatar} src={profile.photos.large || ava} alt=""/>
								<b>{profile.fullName}</b>
								<b>09:12:2019</b>
							</div>
							<div className={s.postContent}>
								jhhg juhyguji uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg jhhg juhyguji
								uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg
							</div>
						</div>
						<div className={s.myPost}>
							<div className={s.userInfo}>
								<img className={s.postAvatar} src={myPhoto.large || ava} alt=""/>
								<b>{login}</b>
								<b>09:12:2019</b>
							</div>
							<div className={s.postContent}>
								jhhg juhyguji uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg jhhg juhyguji
								uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg
							</div>


						</div>
					</div>}


				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>

			</div>


		</>
	)
};

