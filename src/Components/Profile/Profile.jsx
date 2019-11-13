import React from 'react';
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import {Preloader} from "../Others/Preloader/Preloader";
import {DescriptionProfile} from "./DescriptionProfile";
import {AvaAndBtnFriends} from "./AvaAndBtnFriends";


export const Profile = (props) => {
	let {
		photos,
		loginId,
		userId,
		loadProfile,
		fullName
	} = props;

	if (!loadProfile) return <Preloader/>;

	return (
		<div className={s.profileWrapper}>
			<div className={s.profile}>
				<AvaAndBtnFriends {...props}/>
				<DescriptionProfile {...props}/>
			</div>
			<MyPosts {...{
				photos,
				loginId,
				userId,
				loadProfile,
				fullName
			}}/>
		</div>
	)
};