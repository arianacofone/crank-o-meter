import React, { Component } from 'react';
import Game from './guest/Game.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-component">
        <p> App is rendering</p>
        <Game />
      </div>
    );
  }
}

export default App;
