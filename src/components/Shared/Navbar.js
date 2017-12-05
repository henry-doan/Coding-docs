import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// a workaround for using jquery
const $ = window.$;

class Navbar extends Component {
  // to activate the JS for the materilze items.
  componentDidMount = () => {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li><Link to='/overview'>Overview</Link></li>
          <hr/>
          <li><Link to='/html-intro'>HTML</Link></li>
          <li><Link to='/css-intro'>CSS</Link></li>
          <li><Link to='/js-intro'>JavaScript</Link></li>
          <hr/>
          <li><Link to='/cl-intro'>Command Line</Link></li>
          <li><Link to='/ruby-intro'>Ruby</Link></li>
        </ul>
        <a data-activates="slide-out" className="button-collapse"><i className="material-icons medium side-nav-icon">menu</i></a>
      </div>
    );
  }
}

export default Navbar;
