import React from 'react';
import s from './Main.module.scss';


export const Main = () => {

	return (
		<div className={s.mainWrapper}>
			<div className={s.main}>
				Страница в разработке... ждем backend...
			</div><div className={s.main}>
				Тестовые логин и пароль на странице логина...
			</div>
		</div>
	)
};
