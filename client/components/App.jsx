import React, { Component } from 'react';
import QuestionAPI from './guest/QuestionAPI.jsx';


class App extends Component {
  render() {
    return (
      <div id="app-component">
        <p> App is rendering</p>
        <QuestionAPI />
      </div>
    );
  }
}

export default App;
