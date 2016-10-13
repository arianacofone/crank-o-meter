import React, { Component } from 'react';
import Game from './guest/Game.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-component">
        {/* <h1 id="logo">Crank-O-Meter</h1>
        <div id="headingLine">Let's See How Cranky You Are</div> */}
        <Game />
      </div>
    );
  }
}

export default App;
