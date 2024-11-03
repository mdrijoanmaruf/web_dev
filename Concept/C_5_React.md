# React JS
React is a JavaScript library for building user interfaces. It uses components and a virtual DOM to create efficient and reusable UI code.

## Installation React + Tailwind
### Simply Clone This Repo : 
```
https://github.com/mdrijoanmaruf/react-tailwind.git
```
#### Or, Step 1: Create a Vite + React project
```
npm create vite@latest
```

* Name the project (e.g., my-vite-app)
* Choose React and JavaScript or TypeScript

```
? Project name: › my-vite-app
? Select a framework: › React
? Select a variant: › JavaScript
```

#### Step 2: Navigate to the Project Directory
Change into the project folder using:
```
cd my-vite-app
```


#### Step 3: Install Dependencies
Run the following command to install the required dependencies:
```
npm install
```


#### Step 4 : Install Tailwind CSS
1. Inside your project directory, install Tailwind CSS and its dependencies

```
npm install -D tailwindcss postcss autoprefixer
```
2. Generate the Tailwind configuration files:
```
npx tailwindcss init -p
```


#### Step 5: Configure Tailwind CSS
1. Open `tailwind.config.js` and configure the `content` paths to point to your React files:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. In your `src` directory, locate the `index.css` (or create one if it doesn’t exist) and add the following Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```




#### Step 6: Start the Development Server
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
The useEffect hook in React allows you to perform side effects in function components. These side effects include data fetching, setting up subscriptions, or manually changing the DOM. It runs after every render by default, but you can control it with dependencies.


#### All Variation :

**1. Runs on every render:** This effect runs every time the component renders or re-renders.
```jsx
useEffect(() => {
  console.log("Count Value : " + count);
});
```

**2. Runs only on the first render:** By providing an empty dependency array `[]`, the effect runs only once after the first render.
```jsx
useEffect(() => {
  console.log("Runs only 1st render");
}, []);
```

**3. Runs when a specific value changes:** This effect runs every time the specified dependency `(count)` changes.
```jsx
useEffect(() => {
  console.log("I will run every time when count changes: " + count);
}, [count]);
```

**4. Multiple dependencies:** The effect runs whenever any of the listed dependencies `(count, total)` change.
```jsx
useEffect(() => {
  console.log("I will run every time when count or total changes");
}, [count, total]);
```

**5. Effect with cleanup function:** The cleanup function is called before the component unmounts or before the effect is re-run (due to a dependency change).
```jsx
useEffect(() => {
  console.log("Count is updated");

  return () => {
    console.log("Count is unmounted");
  };
}, [count]);
```


#### Examples : 
**1. LoggerComponent (Logging on render)**
Logs a message to the console whenever the component renders or re-renders.
```jsx
import { useEffect } from 'react';

function LoggerComponent() {
  useEffect(() => {
    console.log("Component has rendered");

    // Cleanup (optional, runs when the component unmounts or before re-running)
    return () => {
      console.log("Component is unmounting");
    };
  });

  return <div>Check the console for logs.</div>;
}

export default LoggerComponent;
``` 


**2. TimerComponent (Setting up a timer)**

A component that tracks how many seconds have passed since it was mounted.


```jsx
import { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(interval);
  }, []);  // Empty dependency array means this runs only once on mount

  return <div>Timer: {seconds} seconds</div>;
}

export default TimerComponent;
``` 

**3. ResizeComponent (Handling window resize)**

This component tracks and displays the window size.
```jsx
import { useState, useEffect } from 'react';

function ResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);  // Runs once on mount

  return <div>Window Width: {windowWidth}px</div>;
}

export default ResizeComponent;
``` 


**4. DataFetcher (Fetching data from an API)**

A component that fetches data from an API when it mounts.
```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });

    // No cleanup needed here
  }, []);  // Empty array means it fetches only on mount

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
}

export default DataFetcher;
``` 


**5. MultiEffectComponent (Multiple useEffect hooks)**

A component with multiple useEffect hooks to demonstrate different side effects.
```jsx
import { useState, useEffect } from 'react';

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Effect to increment count on button click
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);  // Runs when count changes

  // Effect to track time since component mounted
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);  // Runs only once after initial render

  return (
    <div>
      <p>Seconds passed: {seconds}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
    </div>
  );
}

export default MultiEffectComponent;
``` 

* **LoggerComponent**: Logs whenever the component renders or unmounts.
* **TimerComponent**: Implements a timer using setInterval.
* **ResizeComponent**: Updates the UI when the window is resized.
* **DataFetcher**: Fetches data from an API on component mount.
* **MultiEffectComponent**: Demonstrates multiple effects in the same component.


### useContex Hook :
The `useContext` hook is used to access values provided by a Context in the component tree without passing props manually at every level. Here's a breakdown of how it works with an example:

#### Steps to use useContext :
**1. Create a Context:** This step sets up a context object that will hold the shared state or data.
```jsx
const userContext = createContext();
``` 

**2. Wrap components with the Provider:** The Provider component allows you to pass down data to all child components within its tree.

```jsx
<userContext.Provider value={user}>
  <ChildA />
</userContext.Provider>
``` 

**3. Provide a value:** The value prop in the Provider is what you want to share across your components.
```jsx
const [user, setUser] = useState({name: "Md Rijoan Maruf"});
``` 

**4. Access the context using useContext:** Any component that needs access to the provided data can use the `useContext` hook.
```jsx
const user = useContext(userContext);  // Access the user context
``` 

#### Full Example : 
**App.jsx**
```jsx
import { useState, createContext } from 'react';  // Import createContext

// Step 1: Create the Context
const userContext = createContext();

function App() {
  // Step 3: Define and set the shared value
  const [user, setUser] = useState({ name: "Md Rijoan Maruf" });

  return (
    <div>
      {/* Step 2: Wrap components with the Provider and pass value */}
      <userContext.Provider value={user}>
        <ChildA />  
      </userContext.Provider>
    </div>
  );
}

export default App;
export { userContext };  // Export context to be used in child components
``` 
**ChildA.jsx**
```jsx
import React from 'react';
import ChildB from './ChildB';

function ChildA() {
  return (
    <div>
      ChildA
      <ChildB />
    </div>
  );
}

export default ChildA;
``` 

**ChildB.jdx**
```jsx
import React from 'react';
import ChildC from './ChildC';

function ChildB() {
  return (
    <div>
      ChildB
      <ChildC />
    </div>
  );
}

export default ChildB;
``` 


**ChildC.jsx**
```jsx
import React, { useContext } from 'react';  // Import useContext
import { userContext } from '../App';  // Import the created context

function ChildC() {
  // Step 4: Use the useContext hook to access the shared value
  const user = useContext(userContext);

  return (
    <div>Name: {user.name}</div>  // Display the shared value
  );
}

export default ChildC;
``` 
In this example, `ChildC` is deeply nested but can still access the `user` value via `useContext` without needing to pass it through each level of the component tree manually.


#### Example: Theme Switcher with useContext
This example demonstrates how to toggle between light and dark themes using useContext.


**Step 1: Create a Context and Provider**
```jsx
// ThemeContext.jsx
import { createContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // Step 2: Define shared state and function
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Step 3: Provide both value and function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
``` 


**Step 2: Use the useContext Hook to Access Theme and Toggle Function**
```jsx
// App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      {/* Step 4: Wrap components with ThemeProvider */}
      <div>
        <Header />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
``` 


**Step 3: Create Components to Consume Context**
Header Component : The Header component changes its background color based on the current theme.
```jsx
// Header.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  // Step 5: Use useContext to get the current theme
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '1em' }}>
      <h1>Welcome to the Theme Switcher</h1>
    </header>
  );
}

export default Header;
``` 
ThemeSwitcher Component :The `ThemeSwitcher` component provides a button to toggle between light and dark themes.

```jsx
// ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  // Step 6: Use useContext to get the toggleTheme function
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: '1em', margin: '1em' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeSwitcher;
``` 









## React Routing

**Install**
```
npm install react-router-dom
``` 
### React Router Setup
React Router is a library that enables navigation between different pages in a React app. The core components of React Router are:

* **BrowserRouter**: A wrapper for enabling the router.
* **Routes**: A collection of route definitions.
* **Route**: Defines a single route and the component to render when the path matches.



**main.jsx**
```jsx
import { useState } from 'react';  // Import useState for state
import './App.css';  // Import CSS

// Import React Router components
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home';  // Import Home component
import About from './Components/About';  // Import About component
import Contact from './Components/Contact';  // Import Contact component
import Navbar from './Components/Navbar';  // Import Navbar

// Create routes
const router = createBrowserRouter([
  {
    path: "/",  // Home route
    element: 
      <div>
        <Navbar/>  {/* Navbar */}
        <Home/>  {/* Home component */}
      </div>
  },
  {
    path: "/about",  // About route
    element: 
      <div>
        <Navbar/>
        <About/>
      </div>
  },
  {
    path: "/contact",  // Contact route
    element: 
      <div>
        <Navbar/>
        <Contact/>
      </div>
  }
]);

function App() {
  const [count, setCount] = useState(0);  // State example

  return (
    <>
      <RouterProvider router={router}/>  {/* Provide router */}
    </>
  );
}

export default App;
``` 

**Home.jdx**
```jsx
// Home.js
import React from 'react';

// Simple Home Component
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default Home;
``` 


**About.jsx**
```jsx
// About.js
import React from 'react';

// Simple About Component
function About() {
  return <h1>About Us</h1>;
}

export default About;
``` 


**Contact.jdx**
```jsx
// Contact.js
import React from 'react';

// Simple Contact Component
function Contact() {
  return <h1>Contact Us</h1>;
}

export default Contact;
``` 


**Navbar.jsx**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css';  // Import CSS for Navbar styles

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>  {/* Link to Home page */}
        </li>
        <li>
          <Link to='/about'>About</Link>  {/* Link to About page */}
        </li>
        <li>
          <Link to='/contact'>Contact</Link>  {/* Link to Contact page */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
``` 

#### React Router's NavLink with isActive
NavLink is similar to Link but provides extra styling options for active links. It automatically adds an active class to the link that corresponds to the current URL. You can customize the active link styles or use the isActive function to apply custom logic.
**.jdx**
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* NavLink with isActive to apply custom style */}
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black'
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black'
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
``` 

### useParams Hook in React Router
The useParams hook allows you to access URL parameters in a component. This is useful when building dynamic routes, where the component's behavior depends on the URL's values.


**App.jsx**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './User';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route with a dynamic parameter :id */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
``` 

**User.jdx**
```jsx
import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook

const User = () => {
  const { id } = useParams();  // Get the URL parameter 'id'

  return (
    <div>
      <h1>User ID: {id}</h1>  {/* Display the dynamic parameter */}
    </div>
  );
};

export default User;
``` 

### useNavigate Hook in React Router
The useNavigate hook allows you to programmatically navigate to different routes within your React application. It provides a simple way to redirect users without the need for `<Link>` or `<NavLink>` components.

**App.jdx**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
``` 


**Home.jsx**
```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Home = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const goToAbout = () => {
    navigate('/about');  // Navigate to the About page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>  {/* Button to trigger navigation */}
    </div>
  );
};

export default Home;
``` 

### Nested Routing in React Router
Nested routing in React Router allows you to structure your routes in a hierarchical manner, enabling a parent route to render child components based on the URL. This is useful for creating layouts or dashboards where different parts of the page change while keeping a common structure (e.g., a sidebar).

**App.jsx**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main home route */}
        <Route path="/" element={<Home />} />
        {/* Parent route with nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**Dashboard.jsx**
```jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Outlet for rendering nested routes

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Links for navigating between nested routes */}
      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      
      {/* Outlet renders the child routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
```

**Profile.jsx**
```jsx
import React from 'react';

const Profile = () => {
  return <h2>User Profile</h2>;
};

export default Profile;
```

**Settings.jsx**
```jsx
import React from 'react';

const Settings = () => {
  return <h2>Settings</h2>;
};

export default Settings;
```




### 404 Page Handling in React Router
In React Router, handling a 404 Page Not Found scenario is straightforward. You can create a catch-all route that matches any undefined path and renders a custom 404 component when no other routes match.
**App.jsx**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';  // Import the 404 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home route */}
        <Route path="/about" element={<About />} />  {/* About route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        
        {/* Catch-all route for undefined paths (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**NotFound.jsx**
```jsx
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
```






### React Hook Form 
#### 1. Form Creation
React Hook Form allows you to create forms with less code, improved performance, and better handling of form state.
```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  // useForm provides form utilities
  const { register, handleSubmit } = useForm();

  // onSubmit will be called when form is submitted
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

```
#### 2. Handle Form Submission
React Hook Form uses handleSubmit to handle form submissions and gather the form data.

```jsx
const { handleSubmit } = useForm();

// onSubmit function to handle data
const onSubmit = (data) => {
  console.log("Form data:", data);
};

<form onSubmit={handleSubmit(onSubmit)}>
  {/* form fields here */}
</form>
```
#### 3. Registering Inputs
The `register` function binds inputs to the form. It tracks changes and maintains the form state.

```jsx
<input {...register("email")} placeholder="Email" />
```
#### 4. Validation Application
You can easily apply validation using register by providing validation rules.

```jsx
<input
  {...register("password", { required: true, minLength: 6 })}
  placeholder="Password"
/>
```
#### 5. Error Handling
React Hook Form tracks errors, and you can use formState.errors to display error messages.

```jsx
const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("username", { required: "Username is required" })}
  />
  {errors.username && <p>{errors.username.message}</p>}
  <button type="submit">Submit</button>
</form>
```
#### 6. Styling Error
You can apply conditional styling when there’s an error.

```jsx
<input
  {...register("email", { required: true })}
  style={{ borderColor: errors.email ? 'red' : 'black' }}
/>
{errors.email && <p style={{ color: 'red' }}>Email is required</p>}
```

#### 7. Prevent Multiple Submissions
To prevent multiple submissions, you can disable the submit button once the form is submitted.
```jsx
const [isSubmitting, setIsSubmitting] = useState(false);

const onSubmit = async (data) => {
  setIsSubmitting(true);
  // simulate async task
  await new Promise(resolve => setTimeout(resolve, 2000));
  setIsSubmitting(false);
};

<form onSubmit={handleSubmit(onSubmit)}>
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
</form>
```
#### Full Example :
**App.jsx**
```jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  // useForm hook provides utilities to handle form state
  const {
    register,        // to register input fields
    handleSubmit,    // to handle form submission
    formState: { errors }, // to track form errors
  } = useForm();
  
  const [isSubmitting, setIsSubmitting] = useState(false); // to manage form submission state

  // Function to handle form data submission
  const onSubmit = async (data) => {
    setIsSubmitting(true); // disable the submit button
    console.log("Form Data:", data);
    
    // Simulating an async task (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false); // enable the submit button after task is complete
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Input for Name with basic registration */}
      <div>
        <label>Name:</label>
        <input 
          {...register("name", { required: "Name is required" })} 
          placeholder="Enter your name" 
          style={{ borderColor: errors.name ? 'red' : 'black' }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      {/* Input for Email with required validation */}
      <div>
        <label>Email:</label>
        <input 
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })} 
          placeholder="Enter your email"
          style={{ borderColor: errors.email ? 'red' : 'black' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      {/* Input for Password with minimum length validation */}
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          {...register("password", { 
            required: "Password is required", 
            minLength: { value: 6, message: "Password must be at least 6 characters" } 
          })}
          placeholder="Enter your password"
          style={{ borderColor: errors.password ? 'red' : 'black' }}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      {/* Submit button with prevent multiple submissions */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default MyForm;
```

## React Redux Toolkit
React app with increment, decrement, increment by amount, and reset functionality using Redux Toolkit, keeping all Redux-related files in the redux folder.

### Step 1 : Install Dependencies
Install @reduxjs/toolkit and react-redux in your project.

```
npm install @reduxjs/toolkit react-redux
```

### Step 2 : Folder Structure

```
src
├── App.jsx
├── Counter.jsx
├── main.jsx
└── redux
    ├── counterSlice.js
    └── store.js
```

### Step 3 : Set up counterSlice.js
Create a `counterSlice.js` file in the `redux` folder. This file will contain the Redux slice with actions for incrementing, decrementing, resetting, and incrementing by a specified amount.

```jsx
// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions for dispatching in components
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Export the reducer to be included in the store
export default counterSlice.reducer;
```

### Step 4: Set up store.js
Create a `store.js` file in the `redux` folder to configure the Redux store and combine reducers if needed.

```jsx
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import the counter reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
  },
});
```

### Step 5: Wrap the App with Redux Provider
In your `main.jsx` wrap your App component with the Redux Provider to make the store available to all components.

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import the store
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap App with Provider */}
    <App />
  </Provider>
);
```

### Step 6: Create Counter Component
In your `Counter.jsx` component, use the Redux hooks `useDispatch` and `useSelector` to dispatch actions and access the counter state.

```jsx
// src/Counter.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Access state from the store
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
      </div>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
```

### Step 7: Use Counter in App
Finally, import the Counter component into your `App.jsx` and render it

```jsx
// src/App.jsx
import React from 'react';
import Counter from './Counter'; // Import Counter component

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
```



### useRef Hook
The `useRef` hook in React allows you to persist values between renders and directly access DOM elements. Unlike `useState`, changes to a `useRef` value do not trigger a re-render.

#### 1. Basic Syntax of useRef
```jsx
const myRef = useRef(initialValue);
```
* `myRef` is an object with a `.current` property that holds the value.
* It persists across renders and doesn't trigger a re-render when updated.
#### 2. Use Cases for useRef
* Accessing DOM elements.
* Storing mutable values that don't cause re-renders.
* Holding reference to timers or intervals.

#### Example 1 : Stop Watch
```jsx
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);  // Time state to track the elapsed time
  const [isRunning, setIsRunning] = useState(false);  // To track whether the stopwatch is running
  const timerRef = useRef(null);  // useRef to hold the timer ID

  // Function to start the stopwatch
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);  // Set running state to true
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);  // Increment time by 1 every second
      }, 1000);
    }
  };

  // Function to stop the stopwatch
  const stop = () => {
    clearInterval(timerRef.current);  // Clear the timer
    setIsRunning(false);  // Set running state to false
  };

  // Function to reset the stopwatch
  const reset = () => {
    clearInterval(timerRef.current);  // Clear the timer
    setIsRunning(false);  // Set running state to false
    setTime(0);  // Reset time to 0
  };

  return (
    <div>
      <h1>Stopwatch: {time}s</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
```

#### Example 2 : Switch Color

```jsx
import React, { useState, useRef } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('white');  // Initial color state
  const colorRef = useRef('white');  // useRef to track the current color without re-render

  // Array of colors to switch between
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  // Function to switch color
  const switchColor = () => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];  // Pick a random color
    colorRef.current = nextColor;  // Update the ref with the new color
    setColor(nextColor);  // Update the state with the new color
  };

  return (
    <div style={{ backgroundColor: color, height: '200px', textAlign: 'center' }}>
      <h1>Current Color: {colorRef.current}</h1>
      <button onClick={switchColor}>Switch Color</button>
    </div>
  );
}

export default ColorSwitcher;
```

### useMemo Hook 
The useMemo hook in React is used to memoize a value — meaning it will only recompute the result when its dependencies change. This can improve performance by preventing expensive calculations from running on every render.
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
* useMemo(callback, dependencies):
  * callback: A function that returns a value to be memoized.
  * dependencies: An array of dependencies that trigger recalculating the memoized value if any of them change.

#### When to Use useMemo:
* For expensive calculations: Use useMemo to prevent re-running expensive functions unless needed.
* When you want to avoid unnecessary recalculations of a value.
* If you want to optimize rendering performance for a component.


#### Example 1: Basic Use of useMemo
Here’s an example where a calculation is only performed when its dependencies change:

```jsx
import { useState, useMemo } from 'react'  // Importing hooks
import './App.css'  // Importing CSS

function App() {
  const [count, setCount] = useState(0);   // State for count
  const [input, setInput] = useState(0);   // State for input

  // Simulates a heavy task (loops 1 billion times)
  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i = 0; i <= 1000000000; i++) {}
    return num * 2;  // Doubles the input
  }
  
  // Memoizes result, recalculates only if input changes
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Display count */}
      <div>
        Count: {count}
      </div>

      {/* Input for user number */}
      <input 
        type='number'
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}  // Update input state
      />

      {/* Display double value */}
      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
```


#### Example: Preventing Unnecessary Re-Renders in Child Components
In this example, the child component should only re-render when specific props change.

```jsx
// App.jsx
import React, { useState, useMemo } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Memoize the data passed to ChildComponent so it only updates when `count` changes
  const memoizedData = useMemo(() => {
    return { number: count };
  }, [count]);  // Only recompute when `count` changes

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Pass memoizedData to ChildComponent */}
      <ChildComponent data={memoizedData} />
    </div>
  );
}

export default ParentComponent;
```


```jsx
// Child Component
import React from 'react';

function ChildComponent({ data }) {
  console.log("Child component re-rendered!");

  return (
    <div>
      <h2>Child Component</h2>
      <p>Number from parent: {data.number}</p>
    </div>
  );
}

export default React.memo(ChildComponent);  // Memoize the child component
```
### useCallback Hook 
The `useCallback` hook in React is used to memoize functions, which helps prevent unnecessary re-creations of functions during re-renders. This is especially useful when passing functions as props to child components to prevent triggering unnecessary re-renders in those children

```jsx
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);
```
* `useCallback(callback, dependencies):`
  * callback: The function that you want to memoize.
  * dependencies: An array of dependencies that trigger re-creation of the memoized function if any of them change.
#### When to Use useCallback:
* To prevent re-creating functions on every render.
* When passing functions as props to child components to avoid unnecessary re-renders.
* Useful for performance optimization in components that rely on expensive or frequently called functions.

#### Example 1: Basic use of useCallback
```jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized increment function: only changes if `count` changes
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);  // Function to increment count
  }, [count]);  // Only re-create the function if `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default Counter;
```

#### Example 2: Passing Memoized Function to a Child Component

```jsx
// App.jsx
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Memoized callback to pass to the child
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);  // This function never changes as it has no dependencies

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
```
```jsx
// Child Component
import React from 'react';

function ChildComponent({ onClick }) {
  console.log("Child re-rendered!");

  return (
    <button onClick={onClick}>Increment Parent Count</button>
  );
}

export default React.memo(ChildComponent);
```