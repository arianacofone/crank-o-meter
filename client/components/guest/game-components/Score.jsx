import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div id="score">
        <h1 id="scoreLogo"> Score </h1>
        <a href="http://imgur.com/NOiBztm">
          <img
            id="scoreVideo"
            src="http://i.imgur.com/NOiBztm.gif" title="source:imgur.com"
          />
        </a>
      </div>
    );
  }
}

export default Score;
