import React from 'react';
import '../UserCard/UserCard.css'

function UserCard(props) {
    return (
        <div className="card" onClick={() => props.clickHandler(props.login)}>
            <a className="avatar" href={props.html_url} target="_blank" rel="noopener noreferrer">
                <img src={props.avatar_url} alt='user avatar'></img>
            </a>
            <h2 className="username">
                <a href={props.html_url} target="_blank" rel="noopener noreferrer">{props.login}</a>
            </h2>
        </div>
    )
}

export default UserCard;