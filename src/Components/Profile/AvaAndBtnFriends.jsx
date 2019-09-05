import React from 'react';
import s from './Profile.module.scss';
import photo from './../../Images/skull2.png';
import {Preloader} from "../Others/Preloader/Preloader";



export const AvaAndBtnFriends = (props) => {
	let {
		photos, loginId, userId, loadProfile, friendStatus, addFriend, loadLogin, friendBtnState,
		dellFriend
	} = props;

	if (!loadProfile) return <Preloader/>;

	return (
		<div className={s.avaAndBtn}>
			<img className={s.photo} src={!photos.large ? photo : photos.large} alt=""/>

			{loginId === userId ? <div className={s.btnDell}>It's my profile</div> :
				!friendStatus
					? <button className={s.btnAdd} disabled={!loadLogin || !friendBtnState} onClick={() => {
						addFriend(userId)
					}}>{loadLogin ? 'Add as friend' : 'Status unavailable'}</button>
					: <button className={s.btnDell} disabled={!loadLogin || !friendBtnState} onClick={() => {
						dellFriend(userId)
					}}>Dell from friends</button>}
		</div>
	)
};