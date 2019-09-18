import React, {useState} from 'react';
import s from './Users.module.scss';


export const Search = (props) => {

	let [name, setName] = useState('');

	let nameUser = (e) => {
		setName(e.currentTarget.value);
		name.length >=1 &&
		props.searchUsers(name)
	};

	/*let searchUser= ()=>{
	props.searchUsers(name)
	};*/

	return (
		<div className={s.searchWrapper}>
					<input className={s.searchField} onChange={nameUser} type="text" min="1" max="50" placeholder='UserNameSearch'/>
					{/*<span className={s.search} onClick={searchUser}>Search</span>*/}
		</div>
	);
};
