import React, { Component } from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  render() {
    return (
      <div id="question-list">
        <p> Question List is rendering</p>
        <Question />
      </div>
    );
  }
}

export default QuestionList;
