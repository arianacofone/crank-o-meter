import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="score">
        <h1 id="scoreLogo"> Score </h1>
        <p id="userScore"></p>
        <h3 id="feelBetter">Hope this makes you feel a little better.</h3>
        <a href="http://imgur.com/PXTQqta"><img id="scoreVideo" src="http://i.imgur.com/PXTQqta.gif" title="source: imgur.com" /></a>
      </div>
    );
  }
}

export default Score;
