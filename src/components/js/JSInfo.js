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
              <p>
                JavaScript is a programming language that is used to change the HTML or CSS on your web page. 
                Although JavaScript can create HTML and CSS, it is most commonly used, especially for beginners to edit existing content. 
                There are three different types of JavaScript programming terms that you will want to make sure you're familiar with in order to program in JS: var, console.log, and getElementById().<br />
                
                The most common way this is done, is by using a JavaScript HTML method called "getElementById()". 
                This will allow you to perform an action on an HTML element, id, or class. 
                Check out the Syntax section below to see some examples of this.
              </p>
              {/* good data here: www.w3schools.com/js/js_intro.asp */}
            </div>

            <div id="structure" className="section scrollspy">
              <h5>How to make a JS file</h5>
              <p>
                Each programming language has files that have different endings.
                JavaScript files end in ".js"
                Here are some example JavaScript file names:
              </p>
              <code>
                main.js<br />
                contacts.js<br />
                about.js<br />
              </code>
            </div>

            <div id="syntax" className="section scrollspy">
              <h5>Syntax</h5>
              <p>
                Programming in JavaScript involves lots of () and &#123;&#125;. 
                Here we will use a common JS script called "getElementById()".
                Let's say that you have an HTML div element with an id of "yellow" and an innerHTML (text) of "Hi there!":
              </p>
              <p>
                ...Need to explain var, console.log and getElementById()...
              </p>
              <code>
                &#60;div id="yellow"&#62;Hi there!&#60;/div&#62;<br />
                <nobr>var yellow = document.getElementById('yellow').innerHTML</nobr><br />
                console.log(yellow)
              </code>
              <p>
                This console.log with output "Hi there!"

              </p>

              <p>

              </p>
            </div>

            <div id="attributes" className="section scrollspy">
              <h5>Attributes...?</h5>
              <p>
                ...
              </p>
            </div>

            <div id="comment" className="section scrollspy">
              <h5>JS Comments</h5>
              <p>
                To make a comment in JavaScript, start the line of code with "//"
              </p>
              <code>
                // This is a JS comment
              </code>
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