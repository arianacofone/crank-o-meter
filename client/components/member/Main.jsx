import React, { Component } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';
import UserDB from './letter-components/UserDB.jsx';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <p> Main is rendering</p>
        <Register />
        <Login />
        <UserDB />
      </div>
    );
  }
}

export default Main;
