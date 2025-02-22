# JavaScript Events & Listeners

## Mouse Action Listeners  
Mouse event listeners detect user interactions like clicks, double-clicks, hovering, etc.

### Detecting Mouse Events  
```html
<button id="mouseBtn">Hover or Click Me</button>

<script>
  let btn = document.getElementById("mouseBtn");

  btn.addEventListener("click", function () {
    alert("Button Clicked!");
  });

  btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "lightblue";
  });

  btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "";
  });
</script>
```

### Common Mouse Events  
- `click` – When the element is clicked  
- `dblclick` – Double-click event  
- `mouseover` – When the mouse enters the element  
- `mouseout` – When the mouse leaves the element  

## `onclick` Event (3 Ways)  

### 1. Inline Event Handler (HTML Attribute)  
Assign the event directly in the HTML element.
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

### 2. JavaScript Event Property (`onclick`)  
Assigning an event handler function using JavaScript.
```html
<button id="btn1">Click Me</button>
<script>
  document.getElementById("btn1").onclick = function () {
    alert("Button Clicked!");
  };
</script>
```

### 3. Using `addEventListener` (Best Practice)  
Adding an event listener dynamically using JavaScript.
```html
<button id="btn2">Click Me</button>
<script>
  document.getElementById("btn2").addEventListener("click", function () {
    alert("Button Clicked!");
  });
</script>
```

## Input Field Action Listeners  
Detect user interactions with input fields, such as typing, focusing, or changing values.

### Example: Handling Input Events  
```html
<input type="text" id="nameInput" placeholder="Type something..." />
<p id="output"></p>

<script>
  let inputField = document.getElementById("nameInput");
  let output = document.getElementById("output");

  inputField.addEventListener("input", function () {
    output.innerText = "You typed: " + inputField.value;
  });

  inputField.addEventListener("focus", function () {
    inputField.style.border = "2px solid green";
  });

  inputField.addEventListener("blur", function () {
    inputField.style.border = "";
  });
</script>
```

### Common Input Events  
- `input` – Triggers when user types  
- `change` – Triggers when input value changes (after losing focus)  
- `focus` – Triggers when input gets focus  
- `blur` – Triggers when input loses focus  

## Keyboard Action Listeners  
Capture keypresses and perform actions based on the keys pressed.

### Example: Detecting Keyboard Events  
```html
<input type="text" id="keyInput" placeholder="Press any key..." />
<script>
  let keyInput = document.getElementById("keyInput");

  keyInput.addEventListener("keydown", function (event) {
    console.log("Key Down: " + event.key);
  });

  keyInput.addEventListener("keyup", function (event) {
    console.log("Key Up: " + event.key);
  });

  keyInput.addEventListener("keypress", function (event) {
    console.log("Key Pressed: " + event.key);
  });
</script>
```

### Common Keyboard Events  
- `keydown` – Triggers when a key is pressed down  
- `keyup` – Triggers when a key is released  
- `keypress` – Triggers when a key is pressed (deprecated, use `keydown`)  

## Event Bubbling  
Event bubbling means that when an event occurs on an element, it first runs on that element and then propagates **upwards** (from child to parent) in the DOM tree.

### Example: Event Bubbling  
```html
<div id="parent" style="padding: 20px; background-color: lightgray;">
  <button id="child">Click Me</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", function () {
    alert("Parent Clicked!");
  });

  document.getElementById("child").addEventListener("click", function () {
    alert("Child Clicked!");
  });
</script>
```
### Output Behavior  
Clicking the **button** triggers both alerts (`Child Clicked!` → `Parent Clicked!`).

## Stopping Event Propagation  

### Example: `stopPropagation()`  
```html
<button id="stopBubble">Click Me</button>
<script>
  document.getElementById("stopBubble").addEventListener("click", function (event) {
    alert("Button Clicked!");
    event.stopPropagation(); // Stops event bubbling
  });

  document.body.addEventListener("click", function () {
    alert("Body Clicked!");
  });
</script>
```
### Example: `stopImmediatePropagation()`  
Stops the event from reaching any other event listeners on the same element.
```html
<button id="stopImmediate">Click Me</button>
<script>
  let btn = document.getElementById("stopImmediate");

  btn.addEventListener("click", function (event) {
    alert("First Listener");
    event.stopImmediatePropagation(); // Stops all further event listeners on this element
  });

  btn.addEventListener("click", function () {
    alert("Second Listener"); // This will never execute
  });
</script>
```

## Event Delegation  
Event delegation allows attaching a single event listener to a **parent** element instead of adding multiple listeners to each child element.

### Example: Using Event Delegation  
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      alert("You clicked on: " + event.target.innerText);
    }
  });
</script>
```

### Why Use Event Delegation?  
✔ Reduces memory usage (fewer event listeners)  
✔ Works on dynamically added elements  

## `addEventListener` & `removeEventListener`

### Example: Adding an Event Listener  
```js
function handleClick(event) {
  console.log("Event triggered");
}
element.addEventListener("click", handleClick);
```

### Example: Removing an Event Listener  
```js
element.removeEventListener("click", handleClick);
```

### Example: Preventing Default Behavior  
```js
function handleEvent(event) {
  event.preventDefault();
  console.log("Default action prevented.");
}
element.addEventListener("click", handleEvent);
```

