import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Letter from './Letter.jsx';
import Home from './Home.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div id="user-db">
        <h1 id="letterHeader"> Create Your Letter </h1>
        <Home />
        <Letter />
      </div>
    );
  }
}

export default withRouter(Dashboard);
