import React, { Component } from 'react';
// a workaround for using jquery
const $ = window.$;

class CLInfo extends Component {
  // to activate the JS for the materilze items.
  componentDidMount = () => {
    $('.scrollspy').scrollSpy();
    $('.table-of-contents').pushpin({
      top: 200
    });
  }
  
  render() {
    return (
      <div className="container">
        <h1>Command Line</h1>
        <h4>CL</h4>
        <hr />

        <div className="row">
          <div className="col s12 m9 l10">
            <div id="introduction" className="section scrollspy">
              <p>Command Line</p>
            </div>
          </div>

          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
            </ul>
          </div>
        </div>
      </div>
    )     
  }
}

export default CLInfo;