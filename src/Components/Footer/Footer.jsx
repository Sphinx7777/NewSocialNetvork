import React from 'react'
import s from './Footer.module.scss'
import telegram from "../../Images/telegram.ico";
import lamp from "../../Images/lamp.ico";
import git from "../../Images/git.ico";


export const Footer = ({menuShowStatus}) => {

	return (
		<div className={!menuShowStatus ? s.footerWrapper : s.footerWrapper+' '+s.footerDisableMenu}>
			<footer className={s.footer}>
				<div className={s.mail}>
					<div>
						© «Онищенко С.М.», 2019
					</div>

				</div>

				<div className={s.LinkWrapper}>
					<div className={s.linkLineWrapper}>
						<a className={s.link}  target='_blank' rel='noopener noreferrer'
							 href="https://djinni.co/q/03c688fb54">
							<img className={s.linkImg} src={lamp} alt="Джинни"/><span className={s.linkTitle}>Djinni</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
										 href="https://t.me/S_f_i_n_x">
							<img className={s.linkImg} src={telegram} alt="Телеграм"/><span className={s.linkTitle}>Telegram</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
										 href="https://github.com/Sphinx7777?tab=repositories">
							<img className={s.linkImg} src={git} alt="Гитхаб"/><span className={s.linkTitle}>Git</span>
						</a>
					</div>
				</div>

				<div>
					<a className={s.linkPost} target='_blank' rel='noopener noreferrer'
									 href="mailto:Spamoglot13@gmail.com">
						Spamoglot13@gmail.com
					</a>
				</div>
			</footer>
		</div>
	)
};

