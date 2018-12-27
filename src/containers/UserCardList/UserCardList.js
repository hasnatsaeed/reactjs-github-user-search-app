import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import '../UserCardList/UserCardList.css'

function UserCardList(props) {
    return (
        <div className="card-list">
            {props.users.map(user => <UserCard key={user.login} {...user} clickHandler = {props.userCardClickHandler} />)}
        </div>
    );
}

export default UserCardList;