import React, { Component } from 'react';

class Question extends Component {
  constructor() {
    super();

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    // this.answerChoiceOneHandler = this.answerChoiceOneHandler.bind(this);
  }
  // answerChoiceOneHandler() {
  //   // const answerOneRotate = document.querySelector('#crankStick');
  //   $('#crankStick').css({ transform: 'rotate(120deg)'});
  // }
  handleAnswerClick() {
    this.props.handleSubmission();
  }
  render() {
    return (
      <div id="question">
        <p> Question </p>
        <div id="question-text">{this.props.text}</div>
        <ul>
          <li id="answerOne" onClick={this.handleAnswerClick}>{this.props.choices[0]}</li>
          <li id="answerTwo" onClick={this.handleAnswerClick}>{this.props.choices[1]}</li>
          <li id="answerThree" onClick={this.handleAnswerClick}>{this.props.choices[2]}</li>
        </ul>
      </div>
    );
  }
}

export default Question;
