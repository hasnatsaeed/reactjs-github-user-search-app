import React from 'react';
import '../UserDetailsCard/UserDetailsCard.css'

function UserDetailsCard(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="details-card model-main" onClick={props.closeHandler}>
                <a className="avatar" href={props.html_url} target="_blank" rel="noopener noreferrer">
                    <img src={props.avatar_url} alt='user avatar'></img>
                </a>
                <h2 className="username">
                    <a href={props.html_url} target="_blank" rel="noopener noreferrer">{props.login}</a>
                </h2>
                <h3 className="location">
                    {props.location || 'I Live In My Mind!'}
                </h3>
                <div className="details">
                    <ul>
                        <li>
                            <a href={props.followers_url} target="_blank" rel="noopener noreferrer">
                                <i>
                                    {props.followers}
                                </i>
                                <span>
                                    Followers
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href={props.repos_url} target="_blank" rel="noopener noreferrer">
                                <i>
                                    {props.public_repos}
                                </i>
                                <span>
                                    Repositories
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href={props.following_url} target="_blank" rel="noopener noreferrer">
                                <i>
                                    {props.following}
                                </i>
                                <span>
                                    Following
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default UserDetailsCard;