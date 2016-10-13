import React, { Component } from 'react';

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
  }
  render() {
    return (
      <div id="login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.handleInput}
          />
          <input
            type="password"
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

export default Login;
