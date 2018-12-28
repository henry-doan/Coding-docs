import React, { Component } from 'react';
// a workaround for using jquery
const $ = window.$;

class JSInfo extends Component {
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
        <h1>JavaScript</h1>
        <h4>JavaScript (JS)</h4>
        <hr/>

        <div className="row">
          <div className="col s12 m9 l10">

            <div id="introduction" className="section scrollspy">
              <p>
                JavaScript is a programming language that is used to change the HTML or CSS on your web page. 
                Although JavaScript can create HTML and CSS, it is most commonly used, especially for beginners to edit existing content. 
                There are three different types of JavaScript programming terms that will be covered in this: var, console.log, and getElementById.
              </p>
              <p>
                First, let's go over how to create a JavaScript file.
                {/* The most common way this is done, is by using a JavaScript HTML method called "getElementById()". 
                This will allow you to perform an action on an HTML element, id, or class. 
                Check out the Syntax section below to see some examples of this. */}
                {/* good data here: www.w3schools.com/js/js_intro.asp */}
                {/* for when they need to reference an html element and id - just tell them to go to the HTML docs */}
                {/* links to codepen to see how some JS examples work - end goal to write code in app */}
              </p>
            </div>

            <div id="history" className="section scrollspy">
              <p>
                {/* TODO */}
              </p>
            </div>

            <div id="files" className="section scrollspy">
              <p>
                To use JS in your HTML you would need a script tag.
              </p>
              <div className="code-box">
                <code>
                  <script>

                  </script>
                </code>
              </div>
              <p>
                Inside the opening and closing script tags is where you can write JavaScript.
                This way is called inline JS because we are doing JavaScript inside of our HTML
                file. Even though this method works, it is not best practice to do so because then
                the file is super lengthly and hard to debug. To have a separation of concerns and keep our
                files short and simple, the best way to do JavaScript is to have all the JavaScript code 
                in its own file.
              </p>
              <h5>How to Make a JS File</h5>
              <p>
                Each programming language has files that have different endings.
                JavaScript files end in ".js"
                Here are some example JavaScript file names:
              </p>
              <div className="code-box">
                <code>
                  main.js<br />
                  contacts.js<br />
                  about.js<br />
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

            <div id="var" className="section scrollspy">
              <h5>Variables</h5>
              <p>
                Declaring variables is one of the primary ways to use JavaScript.
                If you wanted to declare a variable of name to equal "Jake", here's how you would do it:
                {/* Programming in JavaScript involves lots of () and &#123;&#125;. 
                Here we will use a common JS script called "getElementById()".
                Let's say that you have an HTML div element with an id of "yellow" and an innerHTML (text) of "Hi there!": */}
              </p>
              <div className="code-box">
                <code>
                  var name = "Jake"
                </code>
                {/* <code>
                  &#60;div id="yellow"&#62;Hi there!&#60;/div&#62;<br />
                  <nobr>var yellow = document.getElementById('yellow').innerHTML</nobr><br />
                  console.log(yellow)
                </code> */}
              </div>
              <p>
                Here are some other examples of declaring the value of a variable:
              </p>
              <div className="code-box">
                <code>
                  var color = 'blue'<br />
                  var car = "Mazda"<br />
                  var flower = 'pretty'
                </code>
              </div>
              <p>
                Notice that using '' or "" does not matter, but whatever symbol you start with, you have to finish with
              </p>
            </div>

            <div id="console-log" className="section scrollspy">
              <h5>Console Log</h5>
              <p>
                When using JavaScript, the console is an important part of developing.
                While the console is typically something your average user will never see or use, it helps you troubleshoot your code.
                The most basic example of understanding the console, is to enter something simple in your .js file like:
              </p>
              <div className="code-box">
                <code>
                  console.log("hello world!")
                </code>
              </div>
              <p>
                The output from the console will be: hello world!
              </p>
            </div>

            <div id="get-element-by-id" className="section scrollspy">
              <h5>getElementById</h5>
              <p>
                If you have an HTML div with an id of "color", here's what you would need to do to create a JavaScript variable that links to that id:
              </p>
              <div className="code-box">
                <code>
                  var name = document.getElementById('color')
                </code>
              </div>
            </div>

            <div id="comment" className="section scrollspy">
              <h5>JS Comments</h5>
              <p>
                To make a comment in JavaScript, start the line of code with "//"
              </p>
              <div className="code-box">
                <code>
                  // This is a JS comment
                </code>
              </div>
              <p>
                If you want to have multiple lines of comments, just start each line of code with "//"
              </p>
              <div className="code-box">
                <code>
                  // This is a JS comment<br />
                  // that runs across<br />
                  // multiple lines
                </code>
              </div>
            </div>

            
            <div id="function" className="section scrollspy">
              <h5>Functions</h5>
              <p>
                JS Functions
              </p>
              <div className="code-box">
                <code>
                  // First, let's create a function called helloWorld<br />
                  function helloWorld() = &#123;<br />
                  &#160;&#160;console.log("hello world")<br />
                  &#125;<br />
                  <br />
                  // Then call the function, which is how it runs<br />
                  helloWorld()
                </code>
              </div>
            </div>

            <div id="additional" className="section scrollspy">
              <h5>Additional Links and Games</h5>
              <p>
                Extra links to help learn JavaScript:
              </p>
              <p>
                Games to help learn JavaScript:
              </p>
            </div>

          </div>

          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#files">JS Files</a></li>
              <li><a href="#data-types">Data Types</a></li>
              <li><a href="#operators">Operators</a></li>
              <li><a href="#comparators">Comparators</a></li>
              {/* <li><a href="#initialization">Intialization</a></li> */}
              <li><a href="#var">Variables</a></li>
              <li><a href="#console-log">Console Log</a></li>
              <li><a href="#get-element-by-id">getElementById</a></li>
              <li><a href="#comment">Comments</a></li>
              <li><a href="#function">Functions</a></li>
              <li><a href="#additional">Additional</a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default JSInfo;