import React, { Component } from 'react';
// a workaround for using jquery
const $ = window.$;

class CSSInfo extends Component {
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
        <h1>CSS</h1>
        <h4>CSS, or Cascading Style Sheet</h4>
        <hr />

        <div className="row">
          <div className="col s12 m9 l10">
            <div id="introduction" className="section scrollspy">
              <p>CSS or Cascading Style Sheet is allows us to style our HTML elements using rules. CSS can style the sizing, typography, colors and positioning content on the page. Depending on the style, it is good to note that not all styles are supported on all browsers.</p>
            </div>

            <div id="ways2Style" className="section scrollspy">
              <h5>Ways to Style</h5>
              <p>There are three ways to style a web page, in line styling, style tag, and another file styling.</p>
              <p><b>In line styling</b> is styling inside the element itself.</p>
              <div className="code-box">
                <code>
                  &#60;h1 style="color: red; font-size: 24px"&#62;&#60;/h1&#62;
                </code>
              </div>
              <p><b>Style tag</b> styling is using the style tags and putting styles in between the style tags.</p>
              <div className="code-box">
                <code>
                  &#60;style&#62;<br/>
                  <dd>
                    <dl>
                      h1 &#123;
                      <dd>color: red;<br /></dd>
                      <dd>font-size: 24px;<br /></dd>
                      &#125;
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      .nav-bar &#123;
                      <dd>background-color: green;<br /></dd>
                      <dd>opacity: 0.3;<br /></dd>
                      &#125;
                    </dl>
                  </dd>
                  &#60;/style&#62;
                </code>
              </div>
              <p>Last but not least is the most recommended and best practice is to have all the styles in a .css file</p>
              <div className="code-box">
                <code>
                  &#47;&#42; in a style.css file &#42;&#47;
                  <br />
                  &#60;style&#62;<br />
                  <dd>
                    <dl>
                      h1 &#123;
                      <dd>color: red;<br /></dd>
                      <dd>font-size: 24px;<br /></dd>
                      &#125;
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      .nav-bar &#123;
                      <dd>background-color: green;<br /></dd>
                      <dd>opacity: 0.3;<br /></dd>
                      &#125;
                    </dl>
                  </dd>
                  &#60;/style&#62;
                </code>
              </div>
            </div>

            <div id="gen" className="section scrollspy">
              <h5>How to Make a CSS File</h5>
              <p>CSS files end in .css and like HTML files are case sensitive and it will tell web browsers that it is an CSS file and it is the <b>styles</b> of the web page. Before the .css is the name of the page, and for best practice for the main styles the name is main.css or style.css. </p>
              <p>Here are some examples below:</p>
              <div className="code-box">
                <code>
                  main.css<br />
                  contact.css<br />
                  about.css<br />
                  style.css<br />
                </code>
              </div>
              <p>To create an CSS file similarly to HTML there are two best ways. The first is if you right click on where you want the file to be there might be an option under new to have a new file and name it something ending in .css. The other way is what developers do to create one, is opening up the terminal and the change directory to where you want the file to be and then run this command:</p>
              <div className="code-box">
                <code>
                  touch style.css
                </code>
              </div>
            </div>

            <div id="link" className="section scrollspy">
              <h5>How to connect a style sheet to the HTML document</h5>
              <p>In the HTML file or document, in order to have the element have the styles you would have to connect it. You don't need to connect the styles if you are doing in line styling or with the style tags because it is in the document itself. For another file styles, you would have to add this line in the head of the document that says what the file is, the relationship it has and where the file is in retrospect of where you are. For example if your style.css is in the same folder then in the href you would put "style.css". If it is in side of a folder or directory, it is "foldername/style.css". If is it out side then it is "../style.css".</p>
              <div className="code-box">
                <code>
                  &#60;head&#62;
                    <dd>
                      &#60;title&#62;
                        My Website
                      &#60;/title&#62;<br /><br />
                      &#60;!-- this is how you link the stylesheet to a HTML file inside of your HTML file --&#62;<br />
                      &#60; link rel="stylesheet" type="text/css" href="style.css"&#62;
                    </dd>
                  &#60;/head&#62;
                </code>
              </div>
            </div>

            <div id="syntax" className="section scrollspy">
              <h5>Syntax</h5>
              <p>The <b>Syntax</b> for the CSS language is a very different than the HTML <b>Syntax</b> and it has two parts a <b>Selector</b> and a <b>Declaration</b>. <b>Selectors</b> are used to select elements that you want to manipulate. <b>Declarations</b> is how you want to manipulate the element and is encased in &#123; &#125; brackets. Declarations have a <b>Property</b> and a <b>Value</b> to manipulate the element and ends each manipulation with a semicolon ; .</p>
              <div className="code-box">
                <code>
                  <dl>
                    p &#123;
                    <dd>color: red;<br /></dd>
                    &#125;
                  </dl>
                  <dl>
                    &#47;&#42;
                      <dd>- p is the selector<br /></dd>
                      <dd>- everything in the &#123; &#125; is the declaration<br /></dd>
                      <dd>- color is a property<br /></dd>
                      <dd>- ; ends the line of the what you want to declare<br /><br /></dd>
                      <dd>You can have multiple declarations such as below.<br /></dd>
                    &#42;&#47;
                  </dl>
                  <dl>
                    h1 &#123;
                    <dd>padding: 10px;<br /></dd>
                    <dd>color: green;<br /></dd>
                    <dd>font-size: 32px;<br /></dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>Here is a resource of all the properties you can use on an element:</p>
              <a href="https://www.w3schools.com/cssref/" target="_blank" rel="noopener noreferrer">CSS Properties</a>
            </div>

            <div id="selectors" className="section scrollspy">
              <h5>Selectors</h5>
              <p>In CSS, Selectors really depend on what you want to change.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <br />
                    <br />
                    &#125;
                  </dl>
                  <dl>
                    #id_name &#123;
                    <br />
                    <br />
                    &#125;
                  </dl>
                  <dl>
                    .class_name &#123;
                    <br />
                    <br />
                    &#125;
                  </dl>
                </code>
              </div>
              <p>You can select certain HTML elements by their class, id or by the element itself. Also be aware that if you select a certain selector in the CSS, all of the elements that the selector will share all the styles. For example, if you have a selector of h1 that means all of the h1 on the page will have the style specified in the CSS. Sometimes you might not want all the h1 ones to have the styles that are why using classes and ids are recommended in for selectors in CSS.</p>
              <p>In CSS you can also chain selectors together to span the same styles across from elements. You can do this by adding commas after each element selector.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    h1, p, b &#123;
                    <dd>color: green;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>If you have embedded elements in the HTML such as:</p>
              <div className="code-box">
                <code>
                  &#60;div class="box"&#62;
                    <dd>
                    &#60;div id="little_box"&#62;
                      <dd>&#60;p&#62;Doll&#60;/p&#62;</dd>
                    &#60;/div&#62;
                    <br />
                    &#60;div id="big_box"&#62;
                      <dd>&#60;p&#62;Toy&#60;/p&#62;</dd>
                    &#60;/div&#62;
                    </dd>
                  &#60;/div&#62;
                </code>
              </div>
              <p>To just style the p tag with the doll you can put a id or class on it or you can list the embedded parent selectors of where the p tag is. you can do this by listing each of the parent element selector and having a space after each listing.</p>
              <div className="code-box">  
                <code>
                  <dl>
                    .box #little_box p &#123;
                    <dd>color: blue;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
            </div>

            <div id="comment" className="section scrollspy">
              <h5>CSS Comments</h5>
              <p>This is an example of a CSS comment:</p>
              <div className="code-box">
                <code>
                  &#47;&#42; This is a CSS comment &#42;&#47;
                </code>
              </div>
              <p>Like HTMl comment and every comment everything in the comment will not run or show up in the browser. The same purposes as a HTML comments. You can also do single line comments or multi-line comments as well.</p>
              <p>This is an example of a single line CSS comment:</p>
              <div className="code-box"> 
                <code>
                  &#47;&#42; This is a single line CSS comment &#42;&#47;
                </code>
              </div>
              <p>This is an example of a multi-line CSS comment:</p>
              <div className="code-box">
                <code>
                  <dl>
                    &#47;&#42;
                    <dd>This is a</dd>
                    <dd>multi-line</dd>
                    <dd>CSS comment</dd>
                  &#42;&#47;
                  </dl>
                </code>
              </div>
            </div>

            <div id="colors" className="section scrollspy">
              <h5>Colors</h5>
              <p>In CSS, color is represented in a number of different ways and it is just up  to the developer to choose what is more useful to code.</p>
              <p>The first way is with <b>keywords</b> that represent colors that are predefined in the program. They are about 140ish keywords colors.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>color: grey;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>The second way is with <b>RGB</b> or <b>RGBA</b> values of have numbers represents the red, green, blue or alpha in a color. Alpha is the opacity of a color. The Alpha values are only ranging from 0 to 1. The RGB and the RGBA needs numbers in the parameters and are between 0 through 255. You can also pass in percentages and decimals for intensity as well.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>color: rgb(80, 80, 80);</dd>
                    &#125;
                  </dl>
                  <dl>
                    h2 &#123;
                    <dd>color: rgba(90, 255, 20, 0.2);</dd>
                    &#125;
                  </dl>
                  <dl>
                    h3 &#123;
                    <dd>color: rgba(10%, 255, 0.2, 0);</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>Another way to represent color is <b>Hexadecimal</b> numbers that are 6 numbers that the first 2 represent the red and the second 2 is the green and the last 2 is the blue. The parameters are numbers ranging from 00 to ff, and the ff with other selected letters represent colors. This method like the RGB values can be decimals and percentages for intensities.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>color: #00ff02;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>The last method is <b>HSL</b> or <b>HSLA</b> which represent Hue, Saturation, Lightness and Alpha. This is very similar to RGB of how it takes in numbers and can be in percentages or decimals for intensities. The Alpha like the RGBA values ranges from 0 to 1.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    h1 &#123;
                    <dd>color: hsl(120, 120, 120);</dd>
                    &#125;
                  </dl>
                  <dl>
                    h2 &#123;
                    <dd>color: hsla(120, 200, 12, 0.2);</dd>
                    &#125;
                  </dl>
                  <dl>
                    h3 &#123;
                    <dd>color: hsla(30%, 2.1, 12, 0.3);</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>Here is a reference for <a href="https://www.w3schools.com/colors/colors_names.asp">colors</a></p>
            </div>

            <div id="units" className="section scrollspy">
              <h5>Unit of Measurements</h5>
              <p>When styling you might want to change the size of some elements and this is achieved by two ways, one is <b>Relative</b> Measurements and the other is <b>Absolute</b> Measurements.</p>
              <p><b>Relative</b> Units of measurements are based off of the DOM or Document Object Model or how the elements are relative to the view screen or relative to other elements.</p>
              <p><b>em</b> is relative to font size of the selector element so 40em is 40 times the originals h1 font size.</p>
              <div className="code-box">  
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40em;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>rem</b> is is relative to font size of the root element whatever root element of the selector element is.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40rem;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>vh</b> or view height is the number of percentage of the height of the viewport or what the user can see on the screen.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    img &#123;
                    <dd>background-size: 80vh;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>vw</b> or view width is the number of percentage of the width of the viewport or what the user can see on the screen.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    img &#123;
                    <dd>background-size: 80vw;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>vmin</b> is the viewport's minimum dimensions.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    .nav-background &#123;
                    <dd>background-size: 40vmin;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>vmax</b> is the viewport's maximum dimensions.</p>
              <div className="code-box">
                <code>
                  <dl>
                    .nav-background &#123;
                    <dd>background-size: 40vmax;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p>This unit of measurement is the viewport's <b>percentage</b>.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    .nav-background &#123;
                    <dd>background-size: 40%;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p>The next two are rarely used</p>
              <p><b>ch</b> is relative to the width of the zero character "0".</p>
              <div className="code-box">  
                <code>
                  <dl>
                    span &#123;
                    <dd>font-size: 5ch;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>ex</b> is relative to the x height of the current element.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    span &#123;
                    <dd>font-size: 5ex;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>Absolute</b> units of measures are a set size for elements. Most of the measurements are based off of the inch measurement.</p>
              <p>First off we have <b>cm</b> is centimeters. There are 2.54 centimeters in a inch</p>
              <div className="code-box">  
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40cm;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>mm</b> or millimeters, there are 10 millimeters in one centimeter.</p>
              <div className="code-box">  
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40mm;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>in</b> or inches.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 36in;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>px</b> or pixels, are standardize in the tech industry. There are 96 pixels in a inch.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <p><b>pt</b> or points. There are 72 points in a inch.</p>
              <div className="code-box">  
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40pt;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br/>
              <p><b>pc</b> or picas. One picas is 12 points.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-size: 40pc;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
            </div>

            <div id="box" className="section scrollspy">
              <h5>Box Model</h5>
              <p>All HTML tags generate content to a web page and all of the content on the page is wrapped within a box. This is called the <b>Box Model</b> and inside of this box, we are able to add positioning, styles, spacing and borders on HTML elements.</p>
              <p>The diagram below portrays the box model:</p>
              <div className="box-model">
                <div className="margin box">
                  <div className="border box">
                    <div className="padding box">
                      <div className="content box">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h6><b>Content</b></h6>
              <p>The inner most section of the box model is the <b>content</b> where it consist of the HTML tags and what they contain. With the content you can manipulate the width and height of the content with using units of measurement.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>width: 40px;</dd>
                    <dd>height: 100px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <h6><b>Padding</b></h6>
              <p>One level outside of the content is <b>padding</b>. With padding you can change the spacing around the content.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>padding: 10px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>For padding, if you set one value, all of the sides will be the value that is inputted. For the example above, the h1 element will have 10px on the top, right, bottom, left sides.</p>
              <p>If you set the value of padding to have two measurement then the first number will be the padding of the top and bottom sides and the second number will be for the left and right padding as follows:</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>padding: 10px 30px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>This h1 element has the padding of 10px for the top and bottom and 30px for the left and right padding.</p>
              <p>Having four values for padding gives spacing for all the sides and specifies the padding of top, right, bottom, and left.</p>
              <div className="code-box">
                <code>
                  <dl>
                    p &#123;
                    <dd>padding: 10px 30px 60px 15px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>The above element has the padding of 10px for the top, 30px for the right, 60px for the bottom, and 15px for the left side.</p>
              <p>Finally, the padding can be declared on multiple lines instead of a single line where you can specify padding on certain sides.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h3 &#123;
                    <dd>padding-top: 20px;</dd>
                    <dd>padding-right: 10px;</dd>
                    <dd>padding-bottom: 30px;</dd>
                    <dd>padding-left: 15px;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <br />
              <h6><b>Border</b></h6>
              <p>One layer outside of padding is <b>border</b> and in this level of the box model, not only can we manipulate the size and position, but also we can manipulate the styles.</p>
              <p>The border specifies the edge of the padding and we can have it look a certain way</p>
              <p>For example, to add a border to an element, you do the following</p>
              <div className="code-box">
                <code>
                  <dl>
                    img &#123;
                    <dd>border: 3px solid green;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>The example above uses just the border property and takes in three arguments, the first being the size of the border, second is the type of border, and the last is the color of the border.</p>
              <p>In the example, the image tag has a border 3px thick, with a solid type of border style, and lastly is colored green.</p>
            </div>

            <div id="typo" className="section scrollspy">
              <h5>Fonts and Typography</h5>
              <p>For styling fonts there are limitation depending on web browsers and versioning  of the browsers. The browser does have some default fonts you can work with. To use the default fonts you can just have them in a string and in them the font name and it does not matter if it is capitalize or not.</p>
              <div className="code-box">
                <code>
                  <dl>
                    h1 &#123;
                    <dd>font-family: 'Times';</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>You can also chain fonts one after the other to cover if the browser supports it or not. If the browser does support it will use the font if it does not than it will go to the next one that is supported.</p>
              <div className="code-box">  
                <code>
                  <dl>
                    p &#123;
                    <dd>font-family: 'Times', 'Arial', 'Serif';</dd>
                    &#125;
                  </dl>
                </code>
              </div>
              <p>If you are using a external font, you would have to import them by CDN or either downloading it. Depending on where you got the font, you would have to follow their documentation.</p>
              <p>For example for google fonts.</p>
              <div className="code-box"> 
                <code>
                  <dl>
                    &#60;link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"&#62;
                  </dl>
                </code>
              </div>
              <br />
              <p>or in the CSS file:</p>
              <div className="code-box">
                <code>
                  <dl>
                    @import url('https://fonts.googleapis.com/css?family=Pacifico');
                  </dl>             
                </code>
              </div>
              <br />
              <p>Then to put it to use in your CSS:</p>
              <div className="code-box">
                <code>
                  <dl>
                    p &#123;
                    <dd>font-family: 'Pacifico', cursive;</dd>
                    &#125;
                  </dl>
                </code>
              </div>
            </div>

          </div>
          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#ways2Style">Ways to Style</a></li>
              <li><a href="#gen">Generating a CSS File</a></li>
              <li><a href="#link">Link</a></li>
              <li><a href="#syntax">Syntax</a></li>
              <li><a href="#comment">Comment</a></li>
              <li><a href="#colors">Colors</a></li>
              <li><a href="#units">Unit of Measurements</a></li>
              <li><a href="#box">Box Model</a></li>
              <li><a href="#typo">Fonts and Typography</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSInfo;