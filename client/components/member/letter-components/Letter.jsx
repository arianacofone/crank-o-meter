import React, { Component } from 'react';
import Sentence from './Sentence.jsx';

class Letter extends Component {
  render() {
    return (
      <div id="letter">
        <p> Letter is rendering </p>
        <Sentence />
        <Sentence />
        <Sentence />
        <Sentence />
        <Sentence />
      </div>
    );
  }
}

export default Letter;
