import React, { Component } from 'react';
import SentenceAPI from './SentenceAPI.jsx';
import Home from './Home.jsx';

class UserDB extends Component {
  render() {
    return (
      <div id="user-db">
        <p> UserDB is Rendering </p>
        <SentenceAPI />
        <Home />
      </div>
    );
  }
}

export default UserDB;
