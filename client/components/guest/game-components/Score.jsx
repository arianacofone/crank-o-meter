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
          <img
            id="scoreVideo"
            src="https://giphy.com/gifs/l0MYRuSiiWHcrlXwc/html5" title="source:imgur.com"
          />
      </div>
    );
  }
}

export default Score;
