import React from 'react';
import "../UserSearchBar/UserSearchBar.css";

function UserSearchBar(props){
    return (
        <form onSubmit={props.submitHandler} className="search-bar">
          <input name='username' placeholder='Type Username + Enter' />
        </form>
    );
}

export default UserSearchBar;