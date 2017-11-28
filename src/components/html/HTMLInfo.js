import React, { Component } from 'react';

class HTMLInfo extends Component {

  render() {
    return (
      <div className="container">
        <h1>HTML</h1>
        <h4>HTML, or Hyper Text Markup Language</h4>
        <hr/>
        
        <div className="row">
          <div className="col s12 m9 l10">
            <div id="introduction" className="section scrollspy">
              <p>HTML, or Hyper Text Markup Language, is a programming language that is used to display content for web pages. It is sometimes referred to the skeletons of web pages, providing the foundation of the content for web pages.</p>
            </div>

            <div id="structure" className="section scrollspy">
              <h5>How to make a HTML file</h5>
              <p>Different programming language all have something in common in making them of having files end in whatever the language is. For Java files they end in .java, PHP ends in .php etc.</p>
              <p>HTML files end in .html and it is case sensitive and it will tell web browsers that it is an HTML file and it is the structure of the web page. Before the .html is the name of the page, and for best practice for the main page is index.html.</p>
              <p>Here are some examples below:</p>
              <code>
                index.html<br />
                contact.html<br />
                about.html<br />
                rockpage.html<br />
              </code>
            </div>

            <div id="initialization" className="section scrollspy">
              <p>To create an HTML file there are two best ways. The first is if you right click on where you want the file to be there might be an option under new to have a new file and name it something ending in .html. The other way is what developers do to create one, is opening up the terminal and the change directory to where you want the file to be and then run this command:</p>
              <code>touch index.html</code>
            </div>

            <div id="syntax" className="section scrollspy">
              <h5>Syntax</h5>
              <p>Every programming language has different ways to write in the language, this is called Syntax. The Syntax for the HTML language has and opening and closing tag, with content in between. Opening tags in HTML starts with a less than symbol &#8826; then the tag keyword and finally a less than symbol &#8827;. Closing tags have the same format but a / before the tag keyword to show that it is an ending tag.</p>
              <code>&#8826;!-- this is a opening tag:
                &#8826;p&#8827;
                  this is a closing tag:
                &#8826;/p&#8827;
                --&#8827;
                &#8826;p&#8827;Content goes here&#8826;/p&#8827;
              </code>
            </div>

            <div id="attributes" className="section scrollspy">
              <h5>Attributes</h5>
              <p>HTML elements has many attributes and each element has there own specific attribute. But the most common attributes for HTML elements are Class and Id.</p>
              <code>
                &#8826;h1 class="name_of_the_class" id="name_of_the_id"&#8827;&#8826;/h1&#8827;
              </code>
              <p>Classes and ids can be named anything but it can't start with a symbol or a number. The purpose of these attributes is for giving specific classification for elements to be referenced to in another language such as styling, and behavior.</p>
              <p>Classes and ids are not required in writing elements and you can have one or the other or none, it is just best practice to have them and are needed in styling and behaviors.</p>
            </div>

            <div id="comment" className="section scrollspy">
              <h5>HTML Comments</h5>
              <p>This is an example of a HTML comment:</p>
              <code>
                &#8826;!-- This is a HTML comment --&#8827;
              </code>
              <p>Everything in the comment will not run or show up in the browser. Developers uses code comments to take notes on certain pieces of code, or have TODOS, or even to not show a block of code without deleting it. Every programming language has its own commenting syntax.You can also do single line comments or multi-line comments as well.</p>
              <p>This is an example of a single line HTML comment:</p>
              <code>
                &#8826;!-- This is a single line HTML comment --&#8827;
              </code>
              <p>This is an example of a multi-line HTML comment:</p>
              <code>
                <dl>
                &#8826;!-- 
                <br />
                <dd>This is a<br /></dd>
                <dd>multi-line<br /></dd>
                <dd>HTML comment<br /></dd>
                --&#8827;
                </dl>
              </code>
            </div>

            <div id="header" className="section scrollspy">
              <h5>Header</h5>
              <p>Anything that is inside of a <b>Header</b> tags goes on top of the page and this is usually used for the nav bar for the pages' logo and links to other pages.</p>
              <code>
                &#8826;header&#8827;&#8826;/header&#8827;
              </code>
            </div>

            <div id="footer" className="section scrollspy">
              <h5>Footer</h5>
              <p>Like the Header tag anything that is inside of the <b>Footer</b> tags, it will show up on the bottom of the web page. This is used primarily for web pages' footers. </p>
              <code>
                &#8826;footer&#8827;&#8826;/footer&#8827;
              </code>
            </div>

          </div>
          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#structure">Structure</a></li>
              <li><a href="#initialization">Intialization</a></li>
              <li><a href="#syntax">Syntax</a></li>
              <li><a href="#attributes">Attributes</a></li>
              <li><a href="#comment">Comments</a></li>
              <li><a href="#header">Header</a></li>
              <li><a href="#footer">Footer</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HTMLInfo;