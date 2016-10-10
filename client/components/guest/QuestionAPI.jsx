import React, { Component } from 'react';
import Game from './Game.jsx';

class QuestionAPI extends Component {
  render() {
    return (
      <div id="question-api">
        <p> QuestionAPI is rendering</p>
        <Game />
      </div>
    );
  }
}

export default QuestionAPI;
