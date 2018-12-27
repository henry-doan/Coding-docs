import React, { Component } from 'react';
// a workaround for using jquery
const $ = window.$;

class RubyInfo extends Component {
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
        <h1>Ruby</h1>
        <h4>Ruby</h4>
        <hr />

        <div className="row">
          <div className="col s12 m9 l10">
            <div id="introduction" className="section scrollspy">
              <p>Ruby</p>
            </div>

            <div id="history" className="section scrollspy">
              <p>
                {/* TODO */}
              </p>
            </div>

            <div id="files" className="section scrollspy">
              <h5>How to Make a Ruby File</h5>
              <p>
                Each programming language has its own file extension.
                Ruby files end in ".rb"
                Here are some examples:
              </p>
              <div className="code-box">
                <code>
                  main.rb<br />
                  controller.rb<br />
                  notes.rb<br />
                </code>
              </div>
            </div>

            <div id="data-types" className="section scrollspy">
              <p>
                {/* TODO */}
              </p>
            </div>

            <div id="operators" className="section scrollspy">
              <p>
                {/* TODO */}
              </p>
            </div>

            <div id="comparators" className="section scrollspy">
              <p>
                {/* TODO */}
              </p>
            </div>
          </div>

          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#files">Ruby Files</a></li>
              <li><a href="#data-types">Data Types</a></li>
              <li><a href="#operators">Operators</a></li>
              <li><a href="#comparators">Comparators</a></li>
            </ul>
          </div>
        </div>
      </div>
    )     
  }
}

export default RubyInfo;