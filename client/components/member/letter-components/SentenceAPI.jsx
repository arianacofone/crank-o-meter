import React, { Component } from 'react';
import Letter from './Letter.jsx';

class UserDB extends Component {
  render() {
    return (
      <div id="sentence-api">
        <p> Sentence API is rendering </p>
        <Letter />
      </div>
    );
  }
}

export default UserDB;
