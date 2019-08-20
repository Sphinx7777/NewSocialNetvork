import React from 'react';
import s from './Profile.module.scss';
import photo from './../../Images/skull2.png';
import MyPosts from "./MyPosts/MyPosts";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


export const Profile = (props) => {

	return (
		<div className={s.profileWrapper}>
			<div className={s.profile}>
				<div className={s.avaAndBtn}>
					<img className={s.photo} src={!props.photos.large ? photo : props.photos.large} alt=""/>

					{props.loginId === props.userId ? <div className={s.btnDell}>It's my profile</div> :
						!props.friendStatus
							? <button className={s.btnAdd} disabled={!props.loadLogin || !props.friendBtnState} onClick={() => {
								props.addFriend(props.userId)
							}}>{props.loadLogin ? 'Add as friend' : 'Status unavailable'}</button>
							: <button className={s.btnDell} disabled={!props.loadLogin || !props.friendBtnState} onClick={() => {
								props.dellFriend(props.userId)
							}}>Dell from friends</button>}

				</div>
				<div className={s.description}>
					<div className={s.title}>Name : <label className={s.desc}> {props.fullName}</label></div>
					<div className={s.title}>About my : <label
						className={s.desc}>{!props.aboutMe ? `Лень о себе писать` : props.aboutMe}</label></div>
					<div className={s.title}>LookingForAJob : <label
						className={s.desc}>{!props.lookingForAJobDescription ? `Не знаю` : props.lookingForAJobDescription}</label>
					</div>
					<div className={s.title}>Contacts :
						<div className={s.contacts}>
							<label className={s.title}>Facebook : <span className={s.desc}>{props.contacts.facebook}</span> </label>
							<label className={s.title}> VK : <span className={s.desc}>{props.contacts.vk}</span></label>
							<label className={s.title}>My website : <span className={s.desc}>{props.contacts.website}</span></label>
						</div>
					</div>
					{props.loginId === props.userId
						? <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
						: <div className={s.title}>Status :<label
							className={s.desc}>"{!props.status ? `Я лентяй и статус не вбил` : props.status}"</label></div>
					}
				</div>
			</div>
			<MyPosts fullName={props.fullName} photos={props.photos} userId={props.userId} loginId={props.loginId}/>
		</div>
	)
};