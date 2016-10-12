import React, { Component } from 'react';
import CrankOMeter from './CrankOMeter.jsx';

class Header extends Component {
  render() {
    return (
      <div id="header">
        {/* <p> Header is rendering</p> */}
        <CrankOMeter />
      </div>
    );
  }
}

export default Header;
