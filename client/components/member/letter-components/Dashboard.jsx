import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Letter from './Letter.jsx';
import Home from './Home.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div id="user-db">
        <p> DASHBOARD </p>
        <Home />
        <Letter />
      </div>
    );
  }
}

export default withRouter(Dashboard);
