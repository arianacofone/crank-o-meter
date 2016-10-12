import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  handleInputEdit: React.PropTypes.func,
  getSentence: React.PropTypes.func,
  sendSentence: React.PropTypes.func,
};

class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input: this.props.getSentence || '',
    };
    this.getSentence = this.getSentence.bind(this);
    this.switchSentence = this.switchSentence.bind(this);
    this.deleteSentence = this.deleteSentence.bind(this);
  }
  componentDidMount() {
    this.getSentence();
  }
  getSentence() {
    request.get('/api/sentences')
           .then((response) => {
             const sentence = response.body;
             this.setState({ sentence });
           });
  }
  switchSentence(e) {
    e.preventDefault();
    request.get('/api/sentences')
           .then((response) => {
             const sentence = response.body;
             this.setState({ sentence });
           });
  }
  deleteSentence(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div id="sentence">
        <input
          type="text"
          name="sentence"
          value={this.state.Input}
          onChange={this.props.handleInputEdit}
        />
        <button
          name="refresh"
          type="submit"
          value="^"
          onClick={this.switchSentence}
        />
        <button
          name="delete"
          type="submit"
          value="X"
          onClick={this.deleteSentence}
        />
      </div>
    );
  }
}

Sentence.propTypes = propTypes;

export default Sentence;
