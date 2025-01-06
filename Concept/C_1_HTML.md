# HTML


## Boilerplate :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- Body -->
</body>
</html>
```


## Headings :

```html
 <!-- Main heading, typically the page title -->
<h1>This is an H1 Heading</h1>

<!-- Subheading, used for major section titles -->
<h2>This is an H2 Heading</h2>

<!-- Sub-subheading, used for subsections -->
<h3>This is an H3 Heading</h3>

<!-- Lesser subheading, used for smaller sections -->
<h4>This is an H4 Heading</h4>

<!-- Even smaller heading, used for minor sections -->
<h5>This is an H5 Heading</h5>

<!-- Smallest heading, typically the least important -->
<h6>This is an H6 Heading</h6>
```


## Contailer :
Container tags are the tags that contain some data such as text, image, etc. There are several container tags in HTML.
```html
<div> 
    <p> This paragraph inside the div contaler </p>
</div>
```


## span tag :
The span is a container for inline content
```html
<span> This is span block </span>
```


## p tag :
The p tag is used to create a paragraph in HTML

```html
<p> This is a paragraph </p>
```


## pre tag :
The pre tag represents pre-formatted text
```html
<pre> Hello
    
    World </pre>
```


## code tag :
The code tag is used to represent source codes in HTML
```c
<code>
    // Print numbers from 1 to 10
#include <stdio.h>

int main() {
  int i;

  for (i = 1; i < 11; ++i)
  {
    printf("%d ", i);
  }
  return 0;
}

</code>
```


## Text Formatting :
Text formatting tags are used to format text or data in HTML documents. You can do certain things like creating italic, bold, and strong text to make your document look more attractive and understandable.
```html
<!-- Bold text using <b> -->
This is <b>bold</b> text.<br><br>

<!-- Italic text using <i> -->
This is <i>italic</i> text.<br><br>

<!-- Emphasized (italic) text using <em> -->
This is <em>emphasized</em> text.<br><br>

<!-- Underlined text using <u> -->
This is <u>underlined</u> text.<br><br>

<!-- Strong (bold) text using <strong> -->
This is <strong>strong</strong> text.<br><br>

<!-- Subscript text using <sub> -->
This is subscript: H<sub>2</sub>O.<br><br>

<!-- Superscript text using <sup> -->
This is superscript: X<sup>2</sup>.<br><br
```


## Lists :
Lists can be either numerical, alphabetic, bullet, or other symbols. You can specify list type and list items in HTML for a clean document.
### ol tag :
The ordered list starts with ol tag and each list item starts with an li tag.

```html
<ol>
    <li>Data 1</li>
    <li>Data 2</li>
    <li>Data 3</li>
</ol>
```


### ul tag :

```html
<ul>
    <li>Your Data</li>
    <li>Your Data</li>
</ul>
```


## Media :
Media is anything that is present in digital form such as image, video, audio, etc.

### audio tag :
It is used to embed sound content in the document.
```html
<audio controls>
    <source src="demo.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```


### img tag :
It is used to embed or import images in a webpage.
```html
<img src="Source_of_image" alt="Alternate text">
```

### figure tag :
**Purpose :**
* `<figure>`: Groups related content (e.g., images, charts).
* `<figcaption>`: Adds a caption or description to the content.

```css
<figure>
  <img src="nature.jpg" alt="Beautiful nature">
  <figcaption>A serene view of nature.</figcaption>
</figure>
```


### video tag :
It is used to embed videos on a webpage.
```html
<video width="480" height="320" controls>
    <source src="demo_move.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```


## Table :
A table is a collection of rows and columns. It is used to represent data in tabular form.

### Table Structure :
```html
<table border="1">
    <caption>Demo Table</caption>
    <thead>
        <tr>
            <th>Column1</th>
            <th colspan="2">Column2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data1</td>
            <td>Data2</td>
            <td>Data2</td>
        </tr>
        <tr>
            <td>Data1</td>
            <td>Data2</td>
            <td>Data2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>&copy;</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
    </tfoot>
</table>
```
![alt text](Img/table_html.png)

## a tag :
a or anchor tag defines a hyperlink. When clicked, it takes you to some other page
```html
<a href="https://www.codewithharry.com/">Visit CodeWithHarry.com!</a>
```


## Form :
We use various input types and buttons inside a form as form elements


```html
<form action="/submit-form" method="post">
    <!-- Text input -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    
    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    
    <!-- Checkbox input -->
    <label for="subscribe">Subscribe to newsletter:</label>
    <input type="checkbox" id="subscribe" name="subscribe"><br><br>
    
    <!-- Radio buttons -->
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>
    
    <!-- Submit button -->
    <input type="submit" value="Submit"><br><br>
    
    <!-- Reset button -->
    <button type="reset">Reset</button><br><br>

    <!-- Dropdown (select) -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select><br><br>
    
    <!-- Textarea -->
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>
    
    <!-- File upload -->
    <label for="file-upload">Upload file:</label>
    <input type="file" id="file-upload" name="file-upload"><br><br>
    
    <!-- Range slider -->
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="100"><br><br>
    
    <!-- Number input -->
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10"><br><br>
    
    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <!-- Search input -->
    <label for="search">Search:</label>
    <input type="search" id="search" name="search"><br><br>
    
    <!-- URL input -->
    <label for="website">Website:</label>
    <input type="url" id="website" name="website"><br><br>
    
    <!-- Date input -->
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob"><br><br>

</form>
```
![alt text](Img/html_form.png)

```html
<form>
  <!-- Grouping related form fields using fieldset -->
  <fieldset>
    <!-- Title for the fieldset -->
    <legend>Event Registration</legend>

    <!-- Input field for the user's name -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    <br> <!-- Line break for better spacing -->

    <!-- Input field for the user's email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
    <br> <!-- Line break for better spacing -->

    <!-- Input field for the date of birth -->
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">
    <br> <!-- Line break for better spacing -->

    <!-- Display event date using the <time> element -->
    <p>Event Date: <time datetime="2025-01-02">January 2, 2025</time></p>
  </fieldset>

  <!-- Submit button to send the form -->
  <input type="submit" value="Register">
  <br> <!-- Line break for better spacing -->

  <!-- Reset button to clear all form fields -->
  <input type="reset" value="Reset">
</form>
```
![alt text](Img/image-1.png)

## Characters & Symbols :
Some symbols are not directly present on the keyboard, but there are some ways to use them in HTML documents. We can display them either by entity name, decimal, or hexadecimal value.
```html
<p>Less Than: &lt;</p>
<p>Greater Than: &gt;</p>
<p>Ampersand: &amp;</p>
<p>Non-Breaking Space: &nbsp;</p>
<p>Quotation Mark: &quot;</p>
<p>Copyright Symbol: &copy;</p>
<p>Registered Trademark: &reg;</p>
<p>Euro Symbol: &euro;</p>
<p>Degree Symbol: &deg;</p>
<p>Infinity Symbol: &infin;</p>
```
![alt text](Img/html_char_symble.png)

## HTML Layout :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Layout Example</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to an external CSS file -->
</head>
<body>

    <!-- Header Section -->
    <header>
        <div class="container">
            <h1>My Website</h1>
            <nav>
                
            </nav>
        </div>
    </header>

    <!-- Main Content Area -->
    <main>
        <div class="container">
            <!-- Primary Content -->
            <section id="home">

            </section>
            
            <section id="services">
                <article> Enter your data here </article>
            </section>
            
            <section id="about">

            </section>
            
            <section id="contact">

            </section>
        </div>
    </main>

    <!-- Sidebar or Additional Information -->
    <aside>
        <div class="container">

        </div>
    </aside>

    <!-- Footer Section -->
    <footer>
        <div class="container">

        </div>
    </footer>

</body>
</html>
```


## Meta Tags :
Meta tags define metadata about the document, such as author, description, and keywords.
```html
<meta name="description" content="This is a description of the page">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Author Name">
```


## CSS Integration :
CSS integration can be done to style our HTML document using internal or external CSS.
```html
<style>
  body { background-color: lightblue; }
</style>
<!-- or -->
<link rel="stylesheet" type="text/css" href="styles.css">
```


## JavaScript Integration :
Embed JavaScript directly or link to an external file for added functionality.
```html
<script>
  alert('Hello, World!');
</script>
<!-- or -->
<script src="script.js"></script>
```


## Comments :
Comments allow you to leave notes in your code, which are ignored by browsers.
```html
<!-- This is a comment -->
```


## Emmet :
Usefull for write code faster way.
### h1+h2+h3
```html
<h1></h1>
<h2></h2>
<h3></h3>
```

### ul>li*5

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```


### ul>(li*3>a[href="#"])+p
```html
<ul>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
</ul>
<p></p>
```

### p{Hello World}
```html
<!-- p{Hello World} -->
<p>Hello World</p>
```


### div.container
```html
<div class="container"></div>
```

### div.container.primary
```html
<div class="container primary"></div>
```


### div#main
```html
<div id="main"></div>
```