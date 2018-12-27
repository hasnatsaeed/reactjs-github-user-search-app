import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import UserSearchBar from './components/UserSearchBar/UserSearchBar';


class App extends Component {
  state = {
    userDetails: null
  }

  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        return response;
      })
  }
  async handleSubmit(e) {
    e.preventDefault();
    this.setState({userDetails:null})
    let userDetails = await this.getUser(e.target.username.value);
    this.setState({
      userDetails: userDetails
    })

  }
  render() {
    

    return (
      <div className="App">
        <UserSearchBar submitHandler={e => this.handleSubmit(e)}/>
        {this.state.userDetails && <UserCard {...this.state.userDetails}/>}
      </div>
    );
  }
}

export default App;
