import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li><Link to='/html-intro'>HTML</Link></li>
          <li><Link to='/css-intro'>CSS</Link></li>
          <li><Link to='/js-intro'>JavaScript</Link></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    );
  }
}

export default Navbar;
