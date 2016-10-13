import React, { Component } from 'react';
import { withRouter } from 'react-router';

const propTypes = {
  handleLogin: React.PropTypes.func,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
    this.props.router.push('/Dashboard');
  }
  render() {
    return (
      <div id="login">
      <h1 id="logHeader">LOG IN</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="PASSWORD"
            onChange={this.handleInput}
          />
          <input
            type="submit"
            value="login"
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default withRouter(Login);
