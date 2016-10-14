import React, { Component } from 'react';
import Game from './guest/Game.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-component">
        <h1 id="logo">Crank-O-Meter</h1>
        <div id="headingLine">Are you cranky, angry or just plain pissed? <br/>
        Check your crank and write a letter to mend those fences.</div>
        <Game />
      </div>
    );
  }
}

export default App;
