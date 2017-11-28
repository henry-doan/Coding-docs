import React, { Component } from 'react';

class JSInfo extends Component {

  render() {
    return (
      <div className="container">
        <h1>JavaScript</h1>
        <h4>JS, or JavaScript</h4>
        <hr/>

        <div className="row">
          <div className="col s12 m9 l10">
            <div id="introduction" className="section scrollspy">
              <p>JavaScript is a scripting language that allows you to code actions to take place on ...</p>
              <p>...Basic description of JS...</p>
            </div>

            <div id="structure" className="section scrollspy">
              <h5>How to make a JS file</h5>
              <p>...</p>
            </div>

            <div id="syntax" className="section scrollspy">
              <h5>Syntax</h5>
              <p>...</p>
              <code>...comment tags...
              </code>
            </div>

            <div id="attributes" className="section scrollspy">
              <h5>Attributes...?</h5>
              <p>...</p>
            </div>

            <div id="comment" className="section scrollspy">
              <h5>JS Comments</h5>
              <p>...</p>
            </div>

          </div>

          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#structure">Structure</a></li>
              {/* <li><a href="#initialization">Intialization</a></li> */}
              <li><a href="#syntax">Syntax</a></li>
              <li><a href="#attributes">Attributes</a></li>
              <li><a href="#comment">Comments</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default JSInfo;