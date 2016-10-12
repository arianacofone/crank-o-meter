import React, { Component } from 'react';
import Header from './game-components/Header.jsx';
import QuestionList from './game-components/QuestionList.jsx';
import Score from './game-components/Score.jsx';
import Main from '../member/Main.jsx';

class Game extends Component {
  render() {
    return (
      <div id="game">
        {/* <p> Game is rendering</p> */}
        <Header />
        <QuestionList />
        <Score />
        <Main />
      </div>
    );
  }
}

export default Game;
