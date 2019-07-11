import React from 'react';
import s from './Preloader.module.scss';
import img from './../../../Images/skull2.png';


export const Preloader = (props) => {
	return (
		<div className={s.preloader}>
			<span className={s.preloadText}>Призываем...ожидайте</span>
			<img className={s.preloadImg} src={img} alt=""/>

		</div>)

};