import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../member/Main.jsx';
import Letter from '../member/letter-components/Letter.jsx';
import Dashboard from '../member/letter-components/Dashboard.jsx';
import App from '../App.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="dashboard" component={Dashboard}>
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;
