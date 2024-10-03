# React JS
React is a JavaScript library for building user interfaces. It uses components and a virtual DOM to create efficient and reusable UI code.

### Install React Using Vite :

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

**Greeting.jsx**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

**App.jsx**
```jsx
import Greeting from './Greeting';

function App() {
  return (
    <div>
      {/* Passing name as a prop to Greeting */}
      <Greeting name="Rijoan" />
    </div>
  );
}

export default App;
```


### Passing Image via Props:

**Avater.jsx**
```jsx
function Avatar(props) {
  return <img src={props.src} alt="Profile" />;
}

export default Avatar;
```

**App.jsx**
```jsx
import Avatar from './Avatar';

function App() {
  return (
    <div>
      {/* Passing image URL as a prop to Avatar */}
      <Avatar src="profile.jpg" />
    </div>
  );
}

export default App;
```

### Passing Styles via Props:

**StyledText.jsx**
```jsx
function StyledText(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}

export default StyledText;
```

**App.jsx**
```jsx
import StyledText from './StyledText';

function App() {
  return (
    <div>
      {/* Passing color and text as props to StyledText */}
      <StyledText color="red" text="This is dynamic text!" />
    </div>
  );
}

export default App;
```

### Passing Props as Children (as tag)
The children prop allows you to pass elements or JSX as children by wrapping them within the component's opening and closing tags.



**Card.jsx**
```jsx
function Card(props) {
  return (
    <div>
      {/* Render the content passed as children */}
      {props.children}
    </div>
  );
}

export default Card;
```

**App.jsx**
```jsx
import Card from './Card';

function App() {
  return (
    <div>
      {/* Passing JSX elements as children to Card */}
      <Card>
        <h1>This is a heading inside Card</h1>
        <p>This is some paragraph text inside the Card.</p>
      </Card>
    </div>
  );
}

export default App;
```



### Passing Props as Attributes
You can pass props as attributes to a component. This is the most common way to pass data to components, such as text, numbers, objects, or functions.


**Profile.jsx**
```jsx
function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imageUrl} alt="Profile" />
    </div>
  );
}

export default Profile;
```

**App.jsx**
```jsx
import Profile from './Profile';

function App() {
  return (
    <div>
      {/* Passing name and imageUrl as props to Profile */}
      <Profile name="Maruf" imageUrl="profile.jpg" />
    </div>
  );
}

export default App;
```

### Passing a Function as a Prop
You can also pass functions as props to allow a child component to perform actions like handling events.


**Button.jsx**
```jsx
function Button(props) {
  return (
    <button onClick={props.handleClick}>
      Click Me
    </button>
  );
}

export default Button;
```

**App.jsx**
```jsx
import Button from './Button';

function App() {
  // Function to be passed as a prop
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Passing the handleClick function as a prop to Button */}
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
```


## Hook
### useState Hook
The `useState` hook is used to add state to functional components in React. It allows you to manage data that changes over time within your component.

**Counter.jsx**
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

**App.jsx**
```jsx
import Counter from './Counter';

function App() {
  return (
    <div>
      {/* Render Counter component */}
      <Counter />
    </div>
  );
}

export default App;
``` 




### State Lifting (Sharing State Between Components)
State lifting is a concept where the state is moved from a child component to a common parent component so that multiple child components can access and modify it. This helps in sharing data between sibling components.
#### Example 1 :
We’ll lift the state from two child components (`ChildA` and `ChildB`) to their common parent (`App`).

**ChildA.jdx**
```jsx
function ChildA(props) {
  return (
    <div>
      {/* Sending updated value to the parent via the handleChange function */}
      <button onClick={() => props.onValueChange("Hello from A")}>Update from A</button>
    </div>
  );
}

export default ChildA;
``` 

**ChildB.jdx**
```jsx
function ChildB(props) {
  return (
    <div>
      {/* Display the shared state value passed from the parent */}
      <p>Value from Parent: {props.sharedValue}</p>
    </div>
  );
}

export default ChildB;
``` 


**App.jsx**
```jsx
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function App() {
  // Shared state between ChildA and ChildB
  const [sharedValue, setSharedValue] = useState("");

  // Function to update shared state from ChildA
  const handleValueChange = (newValue) => {
    setSharedValue(newValue);
  };

  return (
    <div>
      {/* Passing the state change function to ChildA */}
      <ChildA onValueChange={handleValueChange} />
      
      {/* Passing the shared state to ChildB */}
      <ChildB sharedValue={sharedValue} />
    </div>
  );
}

export default App;
``` 
* **App.jsx** holds the state sharedValue.
* **ChildA** can modify this state via the onValueChange function.
* **ChildB** receives the updated state value as a prop and displays it.


#### Example 2 : 

**StateLift.jdx**
```jsx
import React from 'react';

// StateLift component to accept props from the parent (App component)
const StateLift = (props) => {
  return (
    <div>
      {/* Input field that updates the name in the parent state via props.setName */}
      <input type="text" onChange={(e) => { props.setName(e.target.value); }} />

      {/* Displaying the text and name passed from the parent */}
      <p>{props.text} {props.name}</p>

      {/* Rendering any children passed between the opening and closing tags of StateLift */}
      {props.children}
    </div>
  );
}

export default StateLift;
``` 


**App.jsx**
```jsx
import React, { useState } from 'react';
import StateLift from './StateLift';

function App() {
  // Creating state to store the name entered in the input field
  const [name, setName] = useState('');

  return (
    <div className='body'>
      {/* <Navbar/> -- Commented out as a placeholder for a Navbar component */}

      {/* Passing state and function to StateLift for both instances */}
      <StateLift name={name} setName={setName} text='Child 1 :' />
      
      {/* Another instance of StateLift sharing the same state and function */}
      <StateLift name={name} setName={setName} text='Child 2 :' />
    </div>
  );
}

export default App;
``` 




### Conditional Rendering
Conditional rendering in React allows you to display different UI elements based on certain conditions. This can be achieved using JavaScript expressions like if, ternary operators, or logical operators.

**Login.jdx**
```jsx
import React from 'react';

function Login({ setLoggedIn }) {
  return (
    <div>
        {/* Pass the function to onClick */}
        <button onClick={() => setLoggedIn(true)}>Log In</button>
    </div>
  );
}

export default Login;
``` 
**Logout.jdx**
```jsx
import React from 'react';

function Logout({ setLoggedIn }) {
  return (
    <div>
        {/* Pass the function to onClick */}
        <button onClick={() => setLoggedIn(false)}>Log Out</button>
    </div>
  );
}

export default Logout;
``` 


**App.jsx**
```jsx
import React from 'react';

function Logout({ setLoggedIn }) {
  return (
    <div>
        {/* Pass the function to onClick */}
        <button onClick={() => setLoggedIn(false)}>Log Out</button>
    </div>
  );
}

export default Logout;
``` 
## Event Handling :
Event handling in React is similar to handling events in plain JavaScript but with some key differences:
**1. onClick Event**
```jsx
function ButtonClick() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonClick;
``` 


**2. onChange Event**
```jsx
function InputChange() {
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };

  return <input type="text" onChange={handleChange} placeholder="Type something" />;
}

export default InputChange;
``` 


**3. onSubmit Event**
```jsx
function FormSubmit() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;
``` 


**4. onMouseEnter / onMouseLeave Event**
These events are triggered when the mouse enters or leaves an element.


```jsx
function MouseEvents() {
  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left!");
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      style={{ padding: '20px', border: '1px solid black' }}>
      Hover over me
    </div>
  );
}

export default MouseEvents;
``` 


**5. onFocus / onBlur Event**
These events are triggered when an input field gains or loses focus.
```jsx
function FocusBlurEvent() {
  const handleFocus = () => {
    console.log("Input is focused");
  };

  const handleBlur = () => {
    console.log("Input lost focus");
  };

  return (
    <input 
      type="text" 
      onFocus={handleFocus} 
      onBlur={handleBlur} 
      placeholder="Focus on me" 
    />
  );
}

export default FocusBlurEvent;
``` 


 
### useEffect Hook

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
### 

**.jdx**
```jsx

``` 


**App.jsx**
```jsx

``` 
