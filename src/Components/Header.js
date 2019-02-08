import React, { Component } from 'react';
import logo from '../Images/logo.png'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo}alt="Lotus-Fitness-Logo" id="logo"/>
        <h1>Lotus Fitness</h1>
      </div>
    )
  }
}

export default Header;