# React JS

## Install React :
### Step 1: Create React App
In your terminal or command prompt, use npx (comes with Node.js) to create a new React app:

    npx create-react-app my-app

This command will create a new directory called my-app with all the necessary files and configurations.

### Step 2: Navigate to the Project Directory
Move into the project folder using the following command

    cd my-app

### Step 3: Start the Development Server
Once inside your project folder, start the local development server with:

    npm start

This will open the React app in your default web browser, usually at http://localhost:3000/.


## Install Using Vite :

### Create Vite React App:

    npm create vite@latest

* Name the project (e.g., my-vite-app)
* Choose React and JavaScript or TypeScript

```
? Project name: › my-vite-app
? Select a framework: › React
? Select a variant: › JavaScript
```

### Step 3: Navigate to the Project Directory
Change into the project folder using:

    cd my-vite-app


### Step 4: Install Dependencies
Run the following command to install the required dependencies:

    npm install



### Step 5: Start the Development Server
You can now start the development server with:

    npm run dev

## JSX (JavaScript XML)
JSX allows you to write HTML-like syntax within JavaScript, which gets compiled into React elements. It makes creating UI components simpler and more readable.
```jsx
function Greeting() {
  return <h1>Hello, World!</h1>; // This looks like HTML but is JSX
}
``` 
**JSX Rules:**

* You can include JavaScript expressions in JSX using curly braces {}.
* JSX elements must be wrapped in one parent element (usually a div or a fragment <>).



## Components
React components can be either functional or class-based.

### Functional Component
A function that returns JSX. Functional components are stateless but can use React hooks.
```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
``` 

### Class Component
A class that extends `React.Component` and includes a `render()` method to return JSX.
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome to React Class Component!</h1>;
  }
}
``` 

### Styling Comonent :
#### Styling Components
**Inline Styling:** You can apply styles directly using the style attribute, which accepts an object.
```jsx
function StyledComponent() {
  const style = {
    color: 'blue',
    fontSize: '20px'
  };
  return <h1 style={style}>This is styled text!</h1>;
}
``` 

**CSS Classes:** You can also apply styles using external CSS classes.
```jsx
function ClassStyledComponent() {
  return <h1 className="header">This uses CSS class styling!</h1>;
}
``` 
```css
.header {
  color: green;
  font-size: 24px;
}
``` 

### Adding Component in Main App :
To render the components, add them to the `App.js` or the main file.
```jsx
function App() {
  return (
    <div>
      <Welcome />
      <StyledComponent />
    </div>
  );
}
``` 

## Props (Properties)
Props allow you to pass data to components, making them dynamic and reusable.

### Passing Text via Props:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage in main component
<Greeting name="Rijaon" />
``` 

### Passing Image via Props:

```jsx
function Avatar(props) {
  return <img src={props.src} alt="Profile" />;
}

// Usage
<Avatar src="profile.jpg" />
``` 

### Passing Styles via Props:

```jsx
function StyledText(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}

// Usage
<StyledText color="red" text="This is dynamic text!" />
``` 
### Passing Props as Children
The children prop allows you to pass content (like JSX, elements, or text) between the opening and closing tags of a component.
```jsx
function Card(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      {/* Display whatever is passed between the component's opening and closing tags */}
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Passing content as children */}
      <Card>
        <h1>This is a title inside Card</h1>
        <p>This is some content passed as children.</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;
```

**Explanation:**
* Card is a reusable component.
* Any content between the `<Card>` opening and closing tags is passed as props.children and can be rendered inside the Card.

### Passing a Function as a Prop
You can pass a function from a parent component to a child component as a prop, allowing the child to invoke the function.

```jsx
function Button(props) {
  return (
    <button onClick={props.handleClick}>
      Click Me
    </button>
  );
}

function App() {
  // Function to be passed as a prop
  const showAlert = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Passing the showAlert function as a prop to the Button component */}
      <Button handleClick={showAlert} />
    </div>
  );
}

export default App;
```

## Hook
### useState Hook
The `useState` hook is used to add state to functional components in React. It allows you to manage data that changes over time within your component.
```jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize the count state to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleClick = () => {
    setCount(count + 1);  // Update count state by incrementing its value
  };

  return (
    <div>
      <p>You clicked {count} times</p>  {/* Display the current count */}
      <button onClick={handleClick}>Click Me</button>  {/* Increment count on click */}
    </div>
  );
}

export default Counter;
``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 

### 
```jsx

``` 



