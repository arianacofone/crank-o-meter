import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div id="question">
        <div id="question-text">the text of the question goes here</div>
        <p> Question </p>
        <div id="answerOne">answer one</div>
        <div id="answerTwo">answer two</div>
        <div id="answerThree">answer three</div>
      </div>
    );
  }
}

export default Question;
