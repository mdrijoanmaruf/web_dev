
# `onclick` Event (3 Ways) :

1. **Inline Event Handler (HTML Attribute)**
This method directly assigns the event in the HTML element.

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

2. **JavaScript Event Property (`onclick`)**
Assigning an event handler function using JavaScript.

```html
<button id="btn1">Click Me</button>

<script>
  document.getElementById("btn1").onclick = function () {
    alert("Button Clicked!");
  };
</script>
```

3. **Using `addEventListener` Method `(Best Practice)`**
Adding an event listener dynamically using JavaScript.

```html
<button id="btn2">Click Me</button>

<script>
  document.getElementById("btn2").addEventListener("click", function () {
    alert("Button Clicked!");
  });
</script>
```

