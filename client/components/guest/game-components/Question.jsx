import React, { Component } from 'react';

class Question extends Component {
  constructor() {
    super();
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }
  handleAnswerClick() {
    const newQuestion = document.createElement('div');
    newQuestion.setAttribute('id', 'questionWindow');
    newQuestion.innerHTML = `
    <div id="question">
      <p> Question </p>
      <div id="question-text">the text of the question goes here</div>
      <ul>
      <li id="answerOne">answer one</li>
      <li id="answerTwo">answer two</li>
      <li id="answerThree">answer three</li>
      </ul>
    </div>
    `
    document.body.appendChild(newQuestion);
  }
  render() {
    return (
      <div id="question">
        <p> Question </p>
        <div id="question-text">the text of the question goes here</div>
        <ul>
        <li id="answerOne" onClick={this.handleAnswerClick}>answer one</li>
        <li id="answerTwo" onClick={this.handleAnswerClick}>answer two</li>
        <li id="answerThree" onClick={this.handleAnswerClick}>answer three</li>
        </ul>
      </div>
    );
  }
}

export default Question;
