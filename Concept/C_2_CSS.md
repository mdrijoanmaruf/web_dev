# CSS

### Adding CSS :
Adding CSS in HTML file for style the HTML code.
#### Inline CSS :
It is added directly within HTML tag using the **style** attribute.
```html
<p style="color: blue; font-size: 16px;">This is an inline CSS example.</p>
```
#### Internal CSS :

```html
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is an internal CSS example.</p>
</body>
```



#### External CSS :

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is an external CSS example.</p>
</body>
```



#### !important Keyword :
The !important keyword is used to give higher priority to a specific CSS rule, overriding other declarations.
```css
p {
  color: blue !important;   
  /* Color will add blue for !important */
}

p {
  color: red;
}
```

#### CSS Comment :

```css
/* This is a CSS comment */
p {
  color: purple; /* This color applies to paragraph text */
}
```

### CSS Selector :
Targeting HTML contant.
#### Element Selector :
Targets all instances of a specific HTML element.
```css
p {
  color: blue;
}
```


#### ID Selector :
Targets a specific element with a unique id attribute. The # symbol is used before the id name.
```css
#header {
  background-color: lightgrey;
}
```


#### Class Selector :
Targets elements with a specific class attribute. The . symbol is used before the class name.
```css
.highlight {
  background-color: yellow;
}
```


#### Group Selector :
Applies the same style to multiple selectors. Selectors are separated by commas.
```css
h1, h2, p {
  margin: 0;
  padding: 10px;
}
```


#### Universla Selector :
Targets all elements on the page. The * symbol is used as the universal selector.
```css
* {
  margin: 0;
  padding: 0;
}
```


### Font :
#### Font Style :
Specifies the style of the font, such as normal, italic, or oblique.

```css
p {
  font-style: italic;
}
```


#### Font Size :
Defines the size of the font. It can be set in various units like pixels (px), em, rem, percentages (%), etc.
```css
p {
  font-size: 16px;
}
```


#### Font Weidth :
Controls the thickness (or boldness) of the font. Common values are normal, bold, bolder, lighter, or numeric values (100 to 900).
```css
p {
  font-weight: bold;
}
```


#### Font Family :
Specifies the typeface or a list of typefaces for the text. You can provide multiple font names as a fallback list.
```css
p {
  font-family: "Arial", "Helvetica", sans-serif;
}
```


#### Font Varient :
Controls the use of small-caps or other font variations.
```css
p {
  font-variant: small-caps;
}
```


#### External/Google Font :
```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
```

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

### Colors :
#### Hexadecimal :
```css
p {
  color: #FF5733;
}
```

#### RGB : 

```css
p {
  color: rgb(255, 87, 51);
}
```

#### RGBA :
Similar to RGB but with an additional alpha (opacity) value, ranging from 0 (completely transparent) to 1 (completely opaque).
```css
p {
  color: rgba(255, 87, 51, 0.5);
}
```


#### HSL (Hue, Saturation, Lightness)
* **Hue:** A degree on the color wheel (0-360), where 0 is red, 120 is green, and 240 is blue.
* **Saturation:** A percentage value (0% is a shade of gray, 100% is the full color).
* **Lightness:** A percentage value (0% is black, 50% is normal, 100% is white).

```css
p {
  color: hsl(11, 100%, 60%);
}
```


#### Backgroung Color :

```css
div {
  background-color: rgb(255, 87, 51); /* RGB */
}
```


#### Text Color :

```css
p {
  color: #FF5733; /* HEX */
}
```


### Border :
#### Border Style :
Defines the style of the border. Common values include **none**, **solid**, **dashed**, **dotted**, **double, groove**, **ridge**, **inset**, and **outset**.
```css
div {
  border-style: solid;
}
```

#### Border Width :
Can be specified in **pixels (px)**, **ems (em)**, or other length units. Also supports keywords like **thin**, **medium**, and **thick**.
```css
div {
  border-width: 2px;
}
```

#### Border Color :
```css
div {
  border-color: #FF5733; /* HEX */
}
```

#### Border :
A shorthand property that sets the **border-width**, **border-style**, and **border-color** in one declaration.

```css
div {
  border: 2px solid red;
}
```

#### Border Redious :
Rounds the corners of the border. Can be set for all corners, or individually for each corner.
```css
div {
  border-radius: 10px 20px 30px 40px;
                /* top , right , bottom , left */
}
```

#### Heigth :
Defines the height of an element. Can be set using various units such as **pixels (px)**, **percentages (%)**, **ems (em)** or **viewport units (vh).**
```css
div {
  height: 200px;
}
```


#### Weidth :
Same as heigth.
```css
div {
  width: 50vw;
}
```


### Box :
#### Box Mode :
![alt text](Img/css_box.png)

#### Padding :
* **Definition** :Space between the content of an element and its border. It is inside the element’s border.
* **Properties**: Can be set for all sides or individually for each side (top, right, bottom, left).

* **Shorthand**: padding: [top] [right] [bottom] [left];
```css
div {
  padding: 10px 15px 20px 25px;
}
```
* [top-botton] [right-left]
```css
div {
  padding: 10px 15px;
}
```
* [top-bottom-right-left]
```css
div {
  padding: 20px;
}
```
* Individual Side :
```css
div {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 25px;
}
```


#### Margin :
* **Definition**: Space outside the border of an element. It creates distance between the element’s border and surrounding elements.

* **Properties**: Can be set for all sides or individually for each side (top, right, bottom, left).

* **Shorthand**: margin: [top] [right] [bottom] [left];
```css
div {
  margin: 10px 15px 20px 25px;
}
```
* [top-botton] [right-left]
```css
div {
  margin: 10px 15px;
}
```
* [top-bottom-right-left]
```css
div {
  margin: 20px;
}
```
* Individual Side :
```css
div {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 25px;
}
```


### 

```css

```


### 

```css

```


### 

```css

```


### 

```css

```

