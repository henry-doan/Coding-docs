Created with create-react-app. See the 
[full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## HTML
HTML, or Hyper Text Markup Language, is a programming language that is used to display content for web pages. It is sometimes referred to the skeletons of web pages, providing the foundation of the content for web pages.

### How to make a HTML file
Different programming language all have something in common in making them of having files end in whatever the language is. For Java files they end in .java, PHP ends in .php etc.

HTML files end in .html and it is case sensitive and it will tell web browsers that it is an HTML file and it is the **structure** of the web page. Before the .html is the name of the page, and for best practice for the main page is index.html. 

Here are some examples below:

```
index.html
contact.html
about.html
rockpage.html
```

To create an HTML file there are two best ways. The first is if you right click on where you want the file to be there might be an option under new to have a new file and name it something ending in .html. The other way is what developers do to create one, is opening up the terminal and the change directory to where you want the file to be and then run this command:

```shell
touch index.html
```

### Syntax
Every programming language has different ways to write in the language, this is called **Syntax**. The **Syntax** for the HTML language has and opening and closing tag, with content in between. Opening tags in HTML starts with a less than symbol < then the tag keyword and finally a less than symbol >. Closing tags have the same format but a / before the tag keyword to show that it is an ending tag.

```HTML

<!-- 
    this is a opening tag: 
        <p> 
    
    this is a closing tag:
        </p>
-->

<p>Content goes here</p>

```

Here is a resource that shows all the HTML tags

>Link to the [HTML Tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### HTML Attributes 
HTML elements has many attributes and each element has there own specific attribute. But the most common attributes for HTML elements are Class and Id. 

```HTML
<h1 class="name_of_the_class" id="name_of_the_id"></h1>
```

Classes and ids can be named anything but it can't start with a symbol or a number. The purpose of these attributes is for giving specific classification for elements to be referenced to in another language such as styling, and behavior. 

Classes and ids are not required in writing elements and you can have one or the other or none, it is just best practice to have them and are needed in styling and behaviors.

### HTML Comment
This is an example of a HTML comment:

```HTML
<!-- This is a HTML comment -->
```

Everything in the comment will not run or show up in the browser. Developers uses code comments to take notes on certain pieces of code, or have TODOS, or even to not show a block of code without deleting it. Every programming language has its own commenting syntax.You can also do single line comments or multi-line comments as well.

This is an example of a single line HTML comment:

```HTML
<!-- This is a single line HTML comment -->
```

This is an example of a multi-line HTML comment:

```HTML
<!-- 
    This is a 
    multi-line 
    HTML comment 
-->
```

### Header
Anything that is inside of a **Header** tags goes on top of the page and this is usually used for the nav bar for the pages' logo and links to other pages.

```HTML
<header></header>
```

### Footer
Like the Header tag anything that is inside of the **Footer** tags, it will show up on the bottom of the web page. This is used primarily for web pages' footers. 

```HTML
<footer></footer>
```

<br>

## CSS
CSS or Cascading Style Sheet is allows us to style our HTML elements using rules. CSS can style the sizing, typography, colors and positioning content on the page. Depending on the style, it is good to note that not all styles are supported on all browsers.

### Ways to Style
There are three ways to style a web page, in line styling, style tag, and another file styling. 

**In line styling** is styling inside the element itself.

```HTML
<h1 style="color: red; font-size: 24px"></h1>
```

**Style tag** styling is using the style tags and putting styles in between the style tags.

```HTML
<style>
h1 {
    color: red;
    font-size: 24px;
}

.nav-bar {
    background-color: green;
    opacity: 0.3;
}

</style>
```

Last but not least is the most recommended and best practice is to have all the styles in a .css file

```CSS
/* in a style.css file */

h1 {
    color: red;
    font-size: 24px;
}

.nav-bar {
    background-color: green;
    opacity: 0.3;
}

```

### How to make a CSS file 
CSS files end in .css and like HTML files are case sensitive and it will tell web browsers that it is an CSS file and it is the **styles** of the web page. Before the .css is the name of the page, and for best practice for the main styles the name is main.css or style.css. 

Here are some examples below:

```
main.css
contact.css
about.css
style.css
```

To create an CSS file similarly to HTML there are two best ways. The first is if you right click on where you want the file to be there might be an option under new to have a new file and name it something ending in .css. The other way is what developers do to create one, is opening up the terminal and the change directory to where you want the file to be and then run this command:

```shell
touch style.css
```

### How to connect a style sheet to the HTML document

In the HTML file or document, in order to have the element have the styles you would have to connect it. You don't need to connect the styles if you are doing in line styling or with the style tags because it is in the document itself. For another file styles, you would have to add this line in the head of the document that says what the file is, the relationship it has and where the file is in retrospect of where you are. For example if your style.css is in the same folder then in the href you would put "style.css". If it is in side of a folder or directory, it is "foldername/style.css". If is it out side then it is "../style.css".

```HTML
<head>
    <title>My Website</title>

    <!-- this is how you link the stylesheet to a HTML file inside of your HTML file -->
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

### Syntax
The **Syntax** for the CSS language is a very different than the HTML **Syntax** and it has two parts a **Selector** and a **Declaration**. **Selectors** are used to select elements that you want to manipulate.**Declarations** is how you want to manipulate the element and is encased in { } brackets. Declarations have a **Property** and a **Value** to manipulate the element and ends each manipulation with a semicolon ; .

```CSS

p {
    color: red;
}

/* 
    - p is the selector
    - everything in the { } is the declaration
    - color is a property
    - color is a property
    - ; ends the line of the what you want to declare

    You can have multiple declarations such as below.
 */

h1 {
    padding: 10px;
    color: green;
    font-size: 32px;
}

```

Here is a resource of all the properties you can use on an element:

>Link to the [CSS Properties](https://www.w3schools.com/cssref/)

### Selectors
In CSS, Selectors really depend on what you want to change. 

```CSS
h1 {

}

#id_Name {

}

.class_name {

}
```

You can select certain HTML elements by their class, id or by the element itself. Also be aware that if you select a certain selector in the CSS, all of the elements that the selector will share all the styles. For example, if you have a selector of h1 that means all of the h1 on the page will have the style specified in the CSS. Sometimes you might not want all the h1 ones to have the styles that are why using classes and ids are recommended in for selectors in CSS.

In CSS you can also chain selectors together to span the same styles across from elements. You can do this by adding commas after each element selector.

```CSS
h1, p, b {
    color: green;
}
```

If you have embedded elements in the HTML such as:

```HTML
<div class="box">
    <div id="little_box">
        <p>Doll</p>
    </div>
    <div id="big_box">
        <p>Toy</p>
    </div>
</div>
```

To just style the p tag with the doll you can put a id or class on it or you can list the embedded parent selectors of where the p tag is. you can do this by listing each of the parent element selector and having a space after each listing.

```CSS
.box #little_box p {
    color: blue;
}
```

### CSS Comment
This is an example of a CSS comment:

```CSS
/* This is a CSS comment */
```

Like HTMl comment and every comment everything in the comment will not run or show up in the browser. The same purposes as a HTML comments. You can also do single line comments or multi-line comments as well.

This is an example of a single line CSS comment:

```CSS
/* This is a single line CSS comment */
```

This is an example of a multi-line CSS comment:

```CSS
/* 
    This is a 
    multi-line CSS 
    comment. 
*/
```

### Colors

In CSS, color is represented in a number of different ways and it is just up  to the developer to choose what is more useful to code.

The first way is with **keywords** that represent colors that are predefined in the program. They are about 140ish keywords colors.

```CSS
h1 {
    color: grey;
}
```

The second way is with **RGB** or **RGBA** values of have numbers represents the red, green, blue or alpha in a color. Alpha is the opacity of a color. The Alpha values are only ranging from 0 to 1. The RGB and the RGBA needs numbers in the parameters and are between 0 through 255. You can also pass in percentages and decimals for intensity as well.

```CSS
h1 {
    color: rgb(80, 80, 80);
}

h2 {
    color: rgba(90, 255, 20, 0.2);
}

h3 {
    color: rgba(10%, 255, 0.2, 0);
}

```

Another way to represent color is **Hexadecimal** numbers that are 6 numbers that the first 2 represent the red and the second 2 is the green and the last 2 is the blue. The parameters are numbers ranging from 00 to ff, and the ff with other selected letters represent colors. This method like the RGB values can be decimals and percentages for intensities. 

```CSS
h1 {
    color: #00ff02;
}
```

The last method is **HSL** or **HSLA** which represent Hue, Saturation, Lightness and Alpha. This is very similar to RGB of how it takes in numbers and can be in percentages or decimals for intensities. The Alpha like the RGBA values ranges from 0 to 1.  

```CSS
h1 {
    color: hsl(120, 120, 120);
}

h2 {
    color: hsla(120, 200, 12, 0.2);
}

h3 {
    color: hsla(30%, 2.1, 12, 0.3);
}
```

>Here is a reference for [colors](https://www.w3schools.com/colors/colors_names.asp)

### Unit of Measurements

When styling you might want to change the size of some elements and this is achieved by two ways, one is **Relative** Measurements and the other is **Absolute** Measurements. 

**Relative** Units of measurements are based off of the DOM or Document Object Model or how the elements are relative to the view screen or relative to other elements.

```CSS
h1 {
    font-size: 40em; /* em is relative to font size of the selector element so 40em is 40 times the originals h1 font size. */
}

h1 {
    font-size: 40rem; /* rem is is relative to font size of the root element whatever root element of the selector element is. */
}

img {
    background-size: 80vh; /* vh or view height is the number of percentage of the height of the viewport or what the user can see on the screen. */
}

img {
    background-size: 80vw; /* vw or view width is the number of percentage of the width of the viewport or what the user can see on the screen. */
}

.nav-background {
    background-size: 40vmin; /* This is the viewport's minimum dimensions. */
}

.nav-background {
    background-size: 40vmax; /* This is the viewport's maximum dimensions. */
}

.nav-background {
    background-size: 40%; /* This is the viewport's percentage. */
}

/* The next two are rarely used */

span {
    font-size: 5ch; /* This is relative to the width of the zero character "0". */
}

span {
    font-size: 5ex; /* This is relative to the x height of the current element. */
}
```

**Absolute** units of measures are a set size for elements. Most of the measurements are based off of the inch measurement.

```CSS
h1 {
    font-size: 40cm; /* cm is centimeters. There are 2.54 centimeters in a inch. */
}

h1 {
    font-size: 40mm; /* mm is millimeters, there are 10 millimeters in one centimeter.  */
}

h1 {
    font-size: 36in; /* in is inches. */
}

h1 {
    font-size: 40px; /* px is pixels which is standardize in the tech industry. There are 96 pixels in a inch. */
}

h1 {
    font-size: 40pt; /* pt is points. There are 72 points in a inch. */
}

h1 {
    font-size: 40pc; /* pc is picas. One picas is 12 points. */
}

```

### Fonts and Typography 

For styling fonts there are limitation depending on web browsers and versioning  of the browsers. The browser does have some default fonts you can work with. To use the default fonts you can just have them in a string and in them the font name and it does not matter if it is capitalize or not.

```CSS
h1 {
    font-family: 'Times';
}
```

You can also chain fonts one after the other to cover if the browser supports it or not. If the browser does support it will use the font if it does not than it will go to the next one that is supported.

```CSS
p {
    font-family: 'Times', 'Arial', 'Serif';
}
```

If you are using a external font, you would have to import them by CDN or either downloading it. Depending on where you got the font, you would have to follow their documentation.

For example for google fonts.

```HTML 
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
```

or in the CSS
```CSS
    @import url('https://fonts.googleapis.com/css?family=Pacifico');
```

Then to put it to use in your CSS:
```CSS
p {
    font-family: 'Pacifico', cursive;
}
```

TODOS
* [x] Info on how to use selectors in CSS
* [x] Advance selectors 
* [x] Inline styling, styling tags, best practice
* [x] CSS units of measurements, px, rem, em, %, etc.
* [x] CSS Colors
* [x] Explain how files are in a certain language, .html, .css etc.
* [x] Link live Project
* [ ] Box Model
* [/] DOM
* [x] How Pages Connects
* [ ] Have examples of all of the elements
* [ ] Have examples of all of the properties
* [x] Fonts / Typography
* [x] HTML Attributes
* [ ] Advance sections of events with CSS, hover etc.
    