import React, { Component } from 'react';
import request from 'superagent';
import Sentence from './Sentence.jsx';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      recipient: '',
      sender: '',
      subject: '',
      letter: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
  }
  componentDidUpdate() {
    this.handleInput(this.state);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  sendLetter(e) {
    e.preventDefault();
    const sentences = e.target.querySelectorAll('[name=sentence]');
    const fullLetter = [];
    for (let sentence of sentences ){
      fullLetter.push(sentence.value);
    }
    this.setState({
      letter: fullLetter.join(' '),
    });
    console.log(this.state)
    request.post('/api/letters')
           .send(this.state)
           .end((err, res) => {
             if (err) {
               console.log(err)
             } else {
               console.log(res)
             }
           });
  }
  render() {
    return (
      <div id="letter">
        <form onSubmit={this.sendLetter}>
          <input
            type="email"
            name="recipient"
            id="email"
            value={this.state.recipient}
            placeholder="Enter recipient's email"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="subject"
            className="subject"
            value={this.state.subject}
            placeholder="Apology Subject"
            onChange={this.handleInput}
          />
          <Sentence />
          <Sentence />
          <Sentence />
          <Sentence />
          <Sentence />
          <input
            type="text"
            name="sender"
            className="subject"
            value={this.state.sender}
            placeholder="Love, your name"
            onChange={this.handleInput}
          />
          <button
            id="sendButton"
            name="SEND"
            type="submit"
          >SEND
          </button>
        </form>
      </div>
    );
  }
}

export default Letter;
