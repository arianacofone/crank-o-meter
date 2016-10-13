import React, { Component } from 'react';
import request from 'superagent';

class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
    };
    this.getSentence = this.getSentence.bind(this);
    this.switchSentence = this.switchSentence.bind(this);
    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.deleteSentence = this.deleteSentence.bind(this);
  }
  componentDidMount() {
    this.getSentence();
  }
  getSentence() {
    request.get('/api/sentences')
           .then((response) => {
             const sentence = response.body[0].sentence;
             this.setState({ sentence });
           });
  }
  switchSentence(e) {
    e.preventDefault();
    request.get('/api/sentences')
           .then((response) => {
             const sentence = response.body[0].sentence;
             this.setState({ sentence });
           });
  }
  handleInputEdit(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      sentence: value,
    });
  }
  deleteSentence(e) {
    e.preventDefault();
    this.setState({
      sentence: '',
    });
  }
  render() {
    return (
      <div id="sentence">
        <input
          type="text"
          name="sentence"
          id="sentence"
          className="sentence"
          value={this.state.sentence}
          onChange={this.handleInputEdit}
        />
        <button
          name="refresh"
          type="submit"
          onClick={this.switchSentence}
        >Switch
        </button>
        <button
          name="delete"
          type="submit"
          value="X"
          onClick={this.deleteSentence}
        >Clear
        </button>
      </div>
    );
  }
}

export default Sentence;
