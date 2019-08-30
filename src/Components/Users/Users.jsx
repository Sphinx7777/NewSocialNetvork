import React, {useState} from 'react';
import s from './Users.module.scss';
import photo from './../../Images/skull2.png';
import {NavLink} from "react-router-dom";





export const Users = (props) => {
	let totalCountUsers = Math.ceil(props.totalNumberOfUsers / props.numberUsersOnPage);
	let pages = [];
	for (let i = 1; i <= totalCountUsers; i++) {
		pages.push(i);
	}
	let pagesCreator = (started, finish) => pages.filter(p => {
		return (p >= started && p <= finish);
	});

	let pagesCount = pagesCreator(props.currentPage - 5, props.currentPage + 5);

	let stringPages = () => pagesCount.map((n, index) => {
		return (


				<span
				onClick={() => {
					props.onClickNumberOfPage(n)
				}}
				key={index} className={props.currentPage === n ? s.selectedPage : s.numberPage}>{n}
	        </span>


		)
	});

	let usersScroll = React.createRef();

	let toTheTop = () => {
		usersScroll.current.scrollTop = 0;
};


let addUserOnPage =(event)=>{
	props.addUser(event.target.value<50 ? event.target.value : 50);

};

let [name,setName]=useState(null);

let nameUser = (e)=>{
	setName(e.currentTarget.value);
	props.searchUsers(name)
	};

/*let searchUser= ()=>{
props.searchUsers(name)
};*/

	return (
		<div className={s.users} ref={usersScroll}>
			<div className={s.stringPages}>
				<div className={props.currentPage===1 ? s.numberUsers : s.numberUsersHidden}>
				<button disabled={props.currentPage>1} onClick={()=>{props.addCountUsers()}} className={s.numberUsersBtn}>Number users on page &#10148;</button>
				<div className={s.numbers}>
					<span className={s.maxUsers}>Max 50 users</span>
					<input disabled={props.currentPage>1} onChange={addUserOnPage} className={s.numberUsersInput} type="number" min="1" max="50"  value={props.countUsersOnPageLocal}/>
				</div>
				</div>


				<div className={s.string}>
					<span className={s.goToTheTop} onClick={() => {
						props.onClickNumberOfPage(props.currentPage > 1 ? 1
							: props.currentPage)
					}} >↩ 1 . . . . .
				</span>
					{stringPages()}
					<span className={s.goToTheEnd} onClick={() => {
						props.onClickNumberOfPage(props.currentPage < totalCountUsers
							? totalCountUsers
							: props.currentPage)
					}} >. . . . . {pages.length} ↪
				</span>

				</div>

				<div className={s.searchWrapper}>
					<input onChange={nameUser} type="text" min="1" max="50" placeholder='UserNameSearch'/>
					{/*<span className={s.search} onClick={searchUser}>Search</span>*/}</div>
			</div>
			{props.users.map(u => {

				return (<NavLink className={s.nav} key={u.id} to={`/profile/${u.id}`}>
					<div className={s.user}>
						<div className={s.photoAndFriendStatus}>
							<img className={s.photo} src={!u.photos.large ? photo : u.photos.large} alt=""/>
							{!u.followed ? <span className={s.notFriendStatus}>{props.loadLogin ? 'It\'s my enemy' : 'Status unavailable'}</span>
								: <span className={s.friendStatus}>It's my friend</span>}
						</div>
						<div className={s.description}>
							<span className={s.name}>Name:</span>
							<label className={s.userName}>{u.name}</label>
							<span className={s.status}>Status:</span>
							<label className={s.userStatus}>"{!u.status ? `Я лентяй и статус не вбил` : u.status}"</label>
						</div>
					</div>
				</NavLink>)
			})}
			<div className={s.showPages}>
				<button onClick={() => {
					props.onClickNumberOfPage(props.currentPage > 1 ? props.currentPage - 1 : props.currentPage);
					toTheTop();
				}} className={s.showPrevPage} disabled={props.currentPage ===1}>Show prev page ↩</button>
				<button className={s.toTheTop} onClick={()=>{toTheTop()}}>To the top</button>
				<button onClick={() => {
					props.onClickNumberOfPage(props.currentPage < pages.length ? props.currentPage + 1 : props.currentPage);
					toTheTop();
				}} className={s.showNextPage} disabled={props.currentPage ===pages.length}>↪ Show next page</button>
			</div>
		</div>

	);
};
