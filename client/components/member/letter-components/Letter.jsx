import React, { Component } from 'react';
import request from 'superagent';
import Sentence from './Sentence.jsx';
import Home from './Home.jsx';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: [],
    };
    this.getSentence = this.getSentence.bind(this);
    this.sendSentence = this.sendSentence.bind(this);
  }
  getSentence() {
    request.get('/api/sentences')
           .then((response) => {
             const sentence = response.body;
             this.setState({ sentence });
           });
  }
  sendSentence({ body }) {
    request.post('/api/sentences')
           .send({ body });
          //  .then(() => {
          //    // TODO: How do I fix?
          //    <Home />
          //  });
  }
  render() {
    return (
      <div id="letter">
        <p> Letter is rendering </p>
        <form onSubmit={this.sendLetter}
        <Sentence
          getSentence={this.getSentence}
          sendSentence={this.sendSentence}
        />
        {/* <Sentence />
        <Sentence />
        <Sentence />
        <Sentence /> */}
        />
      </div>
    );
  }
}

export default Letter;
