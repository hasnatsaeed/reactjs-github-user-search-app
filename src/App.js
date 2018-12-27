import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserSearchBar from './components/UserSearchBar/UserSearchBar';
import UserCardList from './containers/UserCardList/UserCardList';
import UserDetailsCard from './components/UserDetailsCard/UserDetailsCard';

class App extends Component {
  state = {
    showUserDetailsModel: false,
    users: null,
    user: null
  }

  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        return response;
      })
  }

  searchUsers(search) {
    return axios.get(`https://api.github.com/search/users?q=${search}`)
      .then(response => response.data.items)
      .then(response => {
        console.log(response)
        return response;
      })
  }
  showUserDetailsModel(user) {
    this.setState({ showUserDetailsModel: true, user: user });
  }

  closeUserDetailsModel = () => {
    this.setState({ showUserDetailsModel: false });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ users: null })
    this.searchUsers(e.target.username.value).then(users => {
      this.setState({
        users: users
      })
    });
  }

  userCardClickHandler = (username) => {
    this.getUser(username).then(user => {
      this.showUserDetailsModel(user);
    });
  }
  render() {
    return (
      <div className="App">
        <UserDetailsCard {...this.state.user} show={this.state.showUserDetailsModel} closeHandler={this.closeUserDetailsModel} />
        <UserSearchBar submitHandler={e => this.handleSubmit(e)} />
        {this.state.users && <UserCardList users={this.state.users} userCardClickHandler={this.userCardClickHandler} />}
      </div>
    );
  }
}

export default App;
