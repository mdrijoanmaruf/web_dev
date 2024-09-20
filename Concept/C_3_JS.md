# Java Script

## Variable type :
### var :
var is function or global scope and is hoisted to the top of its scope.
```js
var x = 10;
if (true) {
    var x = 20;
}
console.log(x); // 20
```

### let :
let is block-scoped and can be reassigned but not redeclared in the same scope.
```js
let y = 10;
if (true) {
    let y = 20;
}
console.log(y); // 10
```

### const :
const is also block-scoped but cannot be reassigned after initialization.
```js
const z = 10;
z = 20; // Error: Assignment to constant variable
```

## Operators :
### Arithmetic Operators:
Perform basic mathematical calculations like addition, subtraction, multiplication, division, and modulus.
```js
let sum = 5 + 3; // Addition
let diff = 10 - 4; // Subtraction
```

### Assignment Operators:
Assign values to variables.

```js
let x = 10; // Assigns 10 to x
```

### Comparison Operators:
Compare values and return a boolean (true or false).
```js
let isEqual = (5 == '5'); // Loose equality, returns true
let isStrictEqual = (5 === '5'); // Strict equality, returns false
```

### Logical Operators:
Combine multiple conditions or expressions.

```js
let result = (5 > 3) && (4 < 6); // Logical AND, returns true
```

### Bitwise Operators:
Perform operations on binary representations of numbers.
```js
let bitwiseAnd = 5 & 3; // Bitwise AND, returns 1
```

### Ternary Operator:
A concise way to write conditional statements.
```js
let canVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
```

## Literals :
Literals in JavaScript represent fixed values, defining a variable's data type and enabling effective data handling in code.

### String Literals:
Represent sequences of characters enclosed in single ('') or double ("") quotes.
```js
let myName = "Mayank Pandey";
let message = 'JavaScript is a scripting language.';
```
**Concatenation**: Strings can be concatenated using the + operator.
```js
let fullName = "Mayank" + " " + "Pandey";
console.log(fullName); // Output: Mayank Pandey
```

### Template Literals:
These are enclosed in backticks (``) and allow for embedding expressions and multi-line strings.
```js
let number1 = 10;
let number2 = 20;
let sum = `${number1} + ${number2} = ${number1 + number2}`;
console.log(sum); // Output: 10 + 20 = 30
```

### Object Literals:
Used to define objects with key-value pairs, enclosed in curly braces {}.
```js
let person = {
    name: 'Mayank',
    age: 21,
    isRunning: true
};
```

### Array Literals:
Provide a way to create arrays with initial values, defined using square brackets [].
```js
let colors = ['orange', 'red', 'aqua', 'green', 'blue'];
```

## Conditions :
### If-Else :
```js
let speed = 87;
if (speed > 90) {
    console.log("OverSpeeding");
} else if (speed > 50) {
    console.log("Normal");
} else {
    console.log("Slow");
}
// Output: "Normal"
```

### Switch :
```js
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);  // Output: "Tuesday"
```

### Primitive Data Types :
Immutable and fixed-size values stored directly in stack memory.
### Numbers
Represents numeric values, including integers and floating-point numbers.
```js
let integerNumber = 5;          // Integer
let floatNumber = 5.25;         // Floating-point
console.log(typeof integerNumber);  // "number"
console.log(typeof floatNumber);    // "number"
```

### Strings
Represents sequences of characters. Can be enclosed in single quotes ('), double quotes ("), or backticks (`).
```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}`;
console.log(str3);  // "Hello, World"
```

### Boolean
Represents logical values, either true or false.

```js
let isActive = true;
let isCompleted = false;
console.log(isActive);    // true
console.log(isCompleted); // false
```

### Undefined
Represents a variable that has been declared but not yet assigned a value. It is also the default value for uninitialized variables.

```js
let uninitializedVar;
console.log(uninitializedVar); // undefined
```

### Null
Represents the intentional absence of any object value. It is explicitly assigned to indicate that a variable has no value.

```js
let emptyValue = null;
console.log(emptyValue);       // null
console.log(typeof emptyValue); // "object"
```

## Objects
Objects are collections of key-value pairs where keys are strings (or Symbols) and values can be any data type, including other objects or functions.
```js
// Creating an Object
let person = {
    name: "Mayank",
    age: 21,
    country: "India"
};

// Accessing Properties
console.log(person.name);          // Dot notation: Output: Mayank
console.log(person['age']);        // Bracket notation: Output: 21

// Modifying Properties
person.age = 22;           // Modify property 'age'
person.city = "Delhi";    // Add new property 'city'
delete person.country;   // Delete property 'country'

console.log(person);      // Output: { name: 'Mayank', age: 22, city: 'Delhi' }

// Methods in Objects
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);  // Method to greet
};

person.greet();  // Calls the method: Output: Hello, my name is Mayank
```

### Add new Property :
```js
// Set year to 2025
now.setFullYear(2025);
console.log("Updated Year:", now);

// Set month to December (11 because months are 0-indexed)
now.setMonth(11);
console.log("Updated Month:", now);

// Set date (day of the month) to 25
now.setDate(25);
console.log("Updated Date:", now);

// Set hours, minutes, and seconds
now.setHours(15);
now.setMinutes(45);
now.setSeconds(30);
console.log("Updated Time:", now);
```

### Cloning Object Using Iteration
You can iterate over the object and copy its properties manually.
```js
const obj1 = { a: 1, b: 2, c: 3 };
const clone1 = {};

for (let key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    clone1[key] = obj1[key];
  }
}

console.log("Clone1:", clone1); // { a: 1, b: 2, c: 3 }
```

### Cloning Object Using Spread Operator (...)
The spread operator is the most concise way to clone an object.
```js
const obj2 = { x: 10, y: 20 };
const clone2 = { ...obj2 };

console.log("Clone2:", clone2); // { x: 10, y: 20 }
```

### Cloning Using Object.assign()
The Object.assign() method copies the properties from one or more source objects to a target object.
```js
const obj3 = { name: "Alice", age: 25 };
const clone3 = Object.assign({}, obj3);

console.log("Clone3:", clone3); // { name: "Alice", age: 25 }
```

**Merging Multiple Objects Using Object.assign()**
You can also merge two or more objects into one using Object.assign().
```js
const objA = { firstName: "John" };
const objB = { lastName: "Doe" };
const mergedObj = Object.assign({}, objA, objB);

console.log("Merged Object:", mergedObj); // { firstName: "John", lastName: "Doe" }
```



## Functions :

### Basic Function :
```js
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!
```

### Return Function
A function that returns a value using the return statement. The return statement exits the function and gives back a result.

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8
```

### Variable Function (Function Expression)
In JavaScript, functions can be assigned to variables. This is called a function expression. These functions are not hoisted, meaning they cannot be called before they are defined.

```js
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20
```
### Arrow Function
An arrow function is a shorthand way to write a function. It uses the => syntax and has special behavior for the this keyword (lexical scoping).

```js
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 4)); // Output: 6
```
```js
// Single-line Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6
```

### Array of Functions
You can store functions in an array and call them using array indexing.

```js
const funcs = [
  function() { console.log("First function"); },
  function() { console.log("Second function"); }
];

funcs[0](); // Outputs "First function"
funcs[1](); // Outputs "Second function"
```

### Object with Functions
Objects can have methods, which are functions associated with that object.

```js
const obj = {
  greet: function() { console.log("Hello!"); },
  farewell: function() { console.log("Goodbye!"); }
};

obj.greet(); // Outputs "Hello!"
obj.farewell(); // Outputs "Goodbye!"
```

### Function Returning Another Function
A function can return another function, which can then be called later.

```js
function outer() {
  return function inner() {
    console.log("Inner function");
  };
}

const func = outer(); // `outer` returns `inner`
func(); // Outputs "Inner function"
```


### Function Call Stack :
The call stack is a LIFO (Last In, First Out) structure used to manage function execution in JavaScript.
* Functions are pushed onto the stack when called.
* As functions return, they're popped off the stack.
* Execution continues until the stack is empty.

```js
function first() {
  second();
  console.log("First");
}

function second() {
  third();
  console.log("Second");
}

function third() {
  console.log("Third");
}
first();

// Output : 
// Third
// Second
// First
```
first() → second() → third()
third() finishes and is popped → second() finishes → first() finishes.

### Function Default Parameter :
```js
// 1. Default Value
function defaultValue(a = 10) {
  console.log("a:", a); // Default: 10
}

// 2. null as a Default Value
function defaultNull(b = null) {
  console.log("b:", b); // Default: null
}

// 3. undefined as a Default Value
function defaultUndefined(c = 5) {
  console.log("c:", c); // Default: 5
}

// 4. Array as a Default Value
function defaultArray(arr = [1, 2, 3]) {
  console.log("arr:", arr); // Default: [1, 2, 3]
}

// 5. Object as a Default Value
function defaultObject(obj = { x: 5, y: 10 }) {
  console.log("obj:", obj); // Default: { x: 5, y: 10 }
}

// 6. Function as a Default Parameter
function defaultFunction(fn = () => "Hello") {
  console.log("fn:", fn()); // Default: "Hello"
}

// Function calls

// 1. Default Value
defaultValue();    // a: 10
defaultValue(20);  // a: 20

// 2. null as a Default Value
defaultNull();     // b: null
defaultNull("Hi"); // b: Hi

// 3. undefined as a Default Value
defaultUndefined();        // c: 5
defaultUndefined(100);     // c: 100
defaultUndefined(undefined); // c: 5

// 4. Array as a Default Value
defaultArray();          // arr: [1, 2, 3]
defaultArray([10, 20]);  // arr: [10, 20]

// 5. Object as a Default Value
defaultObject();           // obj: { x: 5, y: 10 }
defaultObject({ x: 50 });  // obj: { x: 50 }

// 6. Function as a Default Parameter
defaultFunction();            // fn: Hello
defaultFunction(() => "Hi!"); // fn: Hi!
```

## Array :
### push()
Adds one or more elements to the end of an array and returns the new length of the array.

```js
let fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']
```

### pop()
Removes the last element from an array and returns that element.

```js
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // lastFruit = 'orange'; fruits = ['apple', 'banana']
```

### shift()
Removes the first element from an array and returns that element.

```js
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift(); // firstFruit = 'apple'; fruits = ['banana', 'orange']
```
### slice()
Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

```js
let fruits = ['apple', 'banana', 'orange', 'grape'];
let citrus = fruits.slice(1, 3); // ['banana', 'orange'] (fruits array remains unchanged)
```

### unshift()
Adds one or more elements to the beginning of an array and returns the new length of the array.

```js
let fruits = ['banana', 'orange'];
fruits.unshift('apple'); // ['apple', 'banana', 'orange']
```

### splice()
Adds/removes elements from an array.

```js
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape'); // ['apple', 'grape', 'orange'] (removes 'banana' and adds 'grape')
```

### map()
Creates a new array by applying a function to each element of the original array.

```js
let numbers = [1, 2, 3];
let squares = numbers.map(n => n * n); // [1, 4, 9]
```

### filter()
Creates a new array with all elements that pass the test implemented by the provided function.

```js
let even = arr.filter((number) => {
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
});
```

### reduce()
Applies a function against an accumulator and each element of the array to reduce it to a single value.

```js
let numbers = [1, 2, 3];
let sum = numbers.reduce((acc, n) => acc + n, 0); // 6 (sum)
```

### sort()
Sorts the elements of an array in place and returns the sorted array.

```js
let fruits = ['banana', 'apple', 'orange'];
fruits.sort(); // ['apple', 'banana', 'orange']
```

### indexOf()
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana'); // 1
```

### find()
Returns the first element in the array that satisfies the provided testing function.

```js
let numbers = [1, 2, 3, 4];
let found = numbers.find(n => n > 2); // 3
```


### length
Returns the number of elements in an array.

```js
let fruits = ['apple', 'banana', 'orange'];
let count = fruits.length; // 3
```

### Arrays with Functions
You can pass a function as an argument to array methods or create arrays of functions.

```js
let actions = [
  () => console.log('Action 1'),
  () => console.log('Action 2')
];

actions.forEach(action => action()); // Logs: Action 1, Action 2
```

## Loop :
### for loop
Executes a block of code a specific number of times, based on a condition.
```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}
```

### while loop
Executes a block of code as long as the specified condition is true.

```js
let i = 0;
while (i < 5) {
  console.log(i); // Outputs 0 to 4
  i++;
}
```

### do...while loop
Executes the code block once before checking the condition, then continues while the condition is true.

```js
let i = 0;
do {
  console.log(i); // Outputs 0 to 4
  i++;
} while (i < 5);
```

### for...of loop
Iterates over iterable objects like arrays, strings, etc.
```js
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // Outputs 10, 20, 30
}
```

### for...in loop
Iterates over the properties of an object (useful for enumerating keys).
```js
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key); // Outputs "a", "b", "c"
}
```

### forEach() loop
forEach() is an array method that executes a provided function once for each array element. It doesn't return anything and can't be broken out of (unlike a for loop). It's commonly used to iterate over array elements.

```js
let arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element); // Outputs 1, 2, 3
});
```

## Hoisting :
### var Hoisting:
* Declarations using var are hoisted to the top of their scope.
* Only the declaration is hoisted, not the initialization. As a result, variables declared with var will have a value of undefined if used before their assignment.

```js
console.log(a); // undefined (declaration is hoisted, but not the initialization)
var a = 10;
console.log(a); // 10
```

### let / const Hoisting:
You cannot access let variables before their declaration. Doing so results in a ReferenceError.

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### Function Declarations Hoisting:
* Function declarations are fully hoisted in JavaScript. This means both the function name and the entire function body are hoisted to the top of their scope.
* You can call the function before its declaration.

```js
greet(); // "Hello, world!"
function greet() {
  console.log("Hello, world!");
}
```

### let Function Expression
Hoisted but not initialized. Calling before declaration results in a ReferenceError.

```js
console.log(sayHi); // ReferenceError
let sayHi = function() {
  console.log("Hi!");
};
```

### const Function Expression
Behaves like let. Hoisted but not initialized. Calling before declaration results in a ReferenceError.

```js
console.log(sayHello); // ReferenceError
const sayHello = function() {
  console.log("Hello!");
};
```

### Class Expressions
If a class is assigned to a variable using let or const, the behavior is the same as with function expressions: the variable is hoisted, but not initialized.

```js
console.log(MyClass); // ReferenceError: Cannot access 'MyClass' before initialization
const MyClass = class {
  constructor() {
    console.log("Anonymous class created");
  }
};
```

## Variable Scoping :
### Global Scope
Variables declared outside any function or block are in the global scope and accessible throughout the entire code.
```js
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Outputs: "I am global"
}

showGlobal();
console.log(globalVar); // Outputs: "I am global"
```

### Function Scope
Variables declared inside a function using var are in the function scope, meaning they are accessible only within that function.

```js
function myFunction() {
  var localVar = "I am local";
  console.log(localVar); // Outputs: "I am local"
}

myFunction();
console.log(localVar); // ReferenceError: localVar is not defined
```

### Block Scope
Variables declared inside a block (e.g., within {}) using let or const are block-scoped, meaning they are only accessible within that block.

```js
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Outputs: "I am block-scoped"
}

console.log(blockVar); // ReferenceError: blockVar is not defined
```

## Class & Objects :
A class is a blueprint for creating objects with shared properties and methods. 
```js
class Person {
  #age; // Private field

  constructor(name, age) {
    this.name = name; // Public property
    this.#age = age;  // Private property
  }

  get age() { return this.#age; } // Getter for private field
  set age(newAge) { // Setter with validation
    if (newAge > 0) this.#age = newAge;
    else console.log("Age must be positive!");
  }

  greet() { // Public method
    console.log(`Hello, my name is ${this.name} and I am ${this.#age} years old.`);
  }
}

// Object creation
const person1 = new Person("Alice", 25);

person1.greet();        // "Hello, my name is Alice and I am 25 years old."
console.log(person1.age); // 25 (using getter)

person1.age = 30;        // Setting new age
console.log(person1.age); // 30
```

## In-Built Objects :
### Math :
```js
// Math.PI - Value of Pi
console.log("PI:", Math.PI);

// Math.min() - Smallest value
console.log("Min:", Math.min(5, 10, -3, 0));

// Math.max() - Largest value
console.log("Max:", Math.max(5, 10, -3, 0));

// Math.round() - Round to nearest integer
console.log("Round:", Math.round(4.6)); // 5
console.log("Round:", Math.round(4.4)); // 4

// Math.floor() - Round down
console.log("Floor:", Math.floor(4.9)); // 4

// Math.ceil() - Round up
console.log("Ceil:", Math.ceil(4.1)); // 5

// Math.abs() - Absolute value
console.log("Abs:", Math.abs(-7)); // 7

// Math.random() - Random number (0 to 1)
console.log("Random:", Math.random());

// Math.sqrt() - Square root
console.log("Sqrt:", Math.sqrt(16)); // 4

// Math.pow() - Power (base^exponent)
console.log("Power:", Math.pow(2, 3)); // 8

// Math.sin() - Sine (in radians)
console.log("Sin:", Math.sin(Math.PI / 2)); // 1

// Math.cos() - Cosine (in radians)
console.log("Cos:", Math.cos(0)); // 1
```

### Date :

```js
// Current date and time
let now = new Date();
console.log("Current Date and Time:", now);

// Specific date (year, month (0-based), day)
let specificDate = new Date(2024, 8, 8); // September 8, 2024 (months are 0-indexed)
console.log("Specific Date:", specificDate);

// Specific date with time (year, month, day, hours, minutes, seconds, milliseconds)
let specificDateTime = new Date(2024, 8, 8, 10, 30, 0);
console.log("Specific Date and Time:", specificDateTime);
```
**Get Function :**
```js
// Get current year
console.log("Year:", now.getFullYear());

// Get current month (0-indexed, so add 1 to get the actual month)
console.log("Month:", now.getMonth() + 1);

// Get current date (day of the month)
console.log("Date:", now.getDate());

// Get current day of the week (0 = Sunday, 6 = Saturday)
console.log("Day of Week:", now.getDay());

// Get current hours, minutes, and seconds
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
```

**Set Function :**

```js
// Set year to 2025
now.setFullYear(2025);
console.log("Updated Year:", now);

// Set month to December (11 because months are 0-indexed)
now.setMonth(11);
console.log("Updated Month:", now);

// Set date (day of the month) to 25
now.setDate(25);
console.log("Updated Date:", now);

// Set hours, minutes, and seconds
now.setHours(15);
now.setMinutes(45);
now.setSeconds(30);
console.log("Updated Time:", now);
```





## Error Handling :
### Compile-time Errors:
Errors that occur before the code is executed, usually due to syntax issues.
```js
// Missing closing parenthesis or wrong syntax
console.log("Hello"
```
###  Run-time Errors:
Errors that occur while the code is executing.

```js
// Trying to access a property of an undefined variable
let obj = null;
console.log(obj.name); // Run-time error: Cannot read property 'name' of null
```

### Error Handling with try...catch
Used to handle runtime errors in JavaScript.
* try: Wraps code that may throw an error.
* catch: Catches and handles the error.
```js
try {
  let result = 10 / 0;  // Division by 0
  console.log(result);
} catch (error) {
  console.log("Error caught:", error.message);
}
```

### finally
* Runs code regardless of whether an error occurs or not.
* Ensures that certain code runs after the try...catch block.

```js
try {
  let data = "Hello";
  console.log(data);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This always runs.");
}
```

### throw
* Manually create and throw custom errors.
* Allows defining specific error conditions.

```js
function checkNumber(num) {
  if (num < 0) {
    throw new Error("Negative number not allowed.");
  }
  console.log("Number:", num);
}

try {
  checkNumber(-1);
} catch (error) {
  console.log("Error:", error.message);
}
```


## Dom Manupulation(HTML):
**DOM:** Document Object Model
**BOM:** Browser Object Model

### Accessing DOM Elements :

#### By ID
Accesses an element with a specific id attribute.
```js
// Access element with id 'myElement'
const element = document.getElementById('myElement');
```

#### By Class Name
Accesses elements with a specific class attribute. Returns an HTMLCollection.
```js
// Access all elements with class 'myClass'
const elements = document.getElementsByClassName('myClass');
```

#### By Tag Name
Accesses elements with a specific tag name. Returns an HTMLCollection.
```js
// Access all <p> elements
const paragraphs = document.getElementsByTagName('p');
```

#### By Query Selector
Accesses the first element that matches a CSS selector.
```js
// Access the first element with class 'myClass'
const firstElement = document.querySelector('.myClass');
```

#### By Query Selector All
Accesses all elements that match a CSS selector. Returns a NodeList.
```js
// Access all elements with class 'myClass'
const allElements = document.querySelectorAll('.myClass');
```


### Getting/Setting Content :
#### innerHTML
Gets or sets the HTML content inside an element.
```js
// Get inner HTML content
const content = element.innerHTML;

// Set inner HTML content
element.innerHTML = '<p>New content</p>';
```
#### outerHTML
Gets or sets the entire element, including its HTML tag.
```js
// Get outer HTML (element + its content)
const outer = element.outerHTML;

// Set outer HTML (replaces element)
element.outerHTML = '<div>Replaced element</div>';
```
#### textContent
Gets or sets the text inside an element (ignores HTML tags).
```js
// Get plain text content
const text = element.textContent;

// Set plain text content (ignores HTML tags)
element.textContent = 'New plain text content';
```
#### innerText
Gets or sets the visible text inside an element (accounts for CSS styling like display: none).
```js
// Get visible text content
const visibleText = element.innerText;

// Set visible text content
element.innerText = 'New visible text content';
```


### Add/Remove Element :
#### createElement
Creates a new element (but does not insert it into the DOM yet).
```js
// Create a new <div> element
const newDiv = document.createElement('div');
```
#### appendChild
Adds a created element as the last child of a parent element.
```js
// Append newDiv as the last child of parentElement
parentElement.appendChild(newDiv);
```
#### insertAdjacentElement
Inserts an element at a specific position relative to a reference element. Four possible positions:

* **beforebegin** – Before the reference element.
* **afterbegin** – As the first child of the reference element.
* **beforeend** – As the last child of the reference element.
* **afterend** – After the reference element
```js
// Insert before the reference element
referenceElement.insertAdjacentElement('beforebegin', newDiv);

// Insert as the first child
referenceElement.insertAdjacentElement('afterbegin', newDiv);

// Insert as the last child
referenceElement.insertAdjacentElement('beforeend', newDiv);

// Insert after the reference element
referenceElement.insertAdjacentElement('afterend', newDiv);
```

#### removeChild()
Removes a child element from a parent element. You need both the parent and the child elements.
```js
// Assume we have a <div> with id 'parent' and a <p> inside it
const parent = document.getElementById('parent');
const child = document.querySelector('p');

// Remove the <p> element from the <div>
parent.removeChild(child);
```

## Dom Manupulation(CSS):
### style
Allows you to get or set individual inline CSS properties.

```js
// Set an inline style property
element.style.color = 'red';

// Get the value of a specific style property
const color = element.style.color;
```
### cssText
Allows you to set multiple CSS properties at once or overwrite all inline styles.

```js
// Set multiple CSS styles as a string
element.style.cssText = 'color: blue; background-color: yellow;';

// Get the entire inline style string
const styles = element.style.cssText;
```

### setAttribute
Sets any attribute, including style for inline CSS, but usually used for other attributes.

```js
// Set inline styles using setAttribute (less preferred than .style)
element.setAttribute('style', 'color: green; font-size: 20px;');
```
### className
Gets or sets the entire class attribute of an element.

```js
// Get the class name
const classNames = element.className;

// Set or replace the class name
element.className = 'newClass';
```
### classList
Allows for easy manipulation of classes, such as adding, removing, toggling, or checking the presence of a class.

* **add()** – Adds one or more classes.
```js
element.classList.add('class1', 'class2');
```

* **remove()** – Removes one or more classes.
```js
element.classList.remove('class1', 'class2');
```

* **toggle()** – Adds the class if it's not present, removes it if it is.
```js
element.classList.toggle('class1');
```

* **contains()** – Checks if an element has a specific class.
```js
const hasClass = element.classList.contains('class1');
```




## Event & Listener :
### addEventListener
Attaches an event handler to an element. You can pass either an inline (inner) function or a separate (outer) function.

#### listener function
The function that gets executed when an event occurs. We use an outer function here.
```js
function handleEvent(event) {
  console.log('Event triggered');
}
element.addEventListener('click', handleEvent);
```
#### event
The event object automatically passed to the listener function contains all the event-related information.
```js
function handleEvent(event) {
  console.log(event); // Logs the event object
}
element.addEventListener('click', handleEvent);
```
#### target
Refers to the element that triggered the event.
```js
function handleEvent(event) {
  console.log('Target element:', event.target); // The element that was clicked
}
element.addEventListener('click', handleEvent);
```
#### nodeName
Represents the tag name (node name) of the target element.
```js
function handleEvent(event) {
  console.log('Node Name:', event.target.nodeName); // Logs 'DIV', 'BUTTON', etc.
}
element.addEventListener('click', handleEvent);
```
#### type
The type of event that occurred, such as 'click', 'keydown', etc.
```js
function handleEvent(event) {
  console.log('Event Type:', event.type); // Logs 'click', 'submit', etc.
}
element.addEventListener('click', handleEvent);
```
#### Prevent default action (preventDefault)
Prevents the default action associated with the event (e.g., link navigation).
```js
function handleEvent(event) {
  event.preventDefault(); // Prevents the default behavior
  console.log('Default action prevented.');
}
element.addEventListener('click', handleEvent);
```
#### Inner Action Listener Function :
```js
// Add a click event listener with an inner function
element.addEventListener('click', function() {
  alert('Element clicked!');
});
```
### removeEventListener
Removes a previously added event listener. It must reference the same function that was used when adding the event listener.
```js
// Remove the event listener
element.removeEventListener('click', handleClick);
```
## Performance Improvement in DOM Manipulation
### Reflow
Reflow occurs when the browser recalculates the layout of part or all of the page, triggered by changes in layout (e.g., modifying size, position, or structure of elements).

Avoid frequent reflows as they are expensive in terms of performance. Modify DOM elements outside of the live DOM as much as possible to minimize reflows.
```js
// Example causing multiple reflows (inefficient)
element.style.width = '100px';
element.style.height = '50px';
```
**Improved Approch**
```js
// Set multiple styles in one go to avoid multiple reflows
element.style.cssText = 'width: 100px; height: 50px;';
```
### Repaint
Repaint occurs when changes are made to an element's appearance (e.g., background color, visibility) that do not affect its layout. Repaint is less expensive than reflow but still impacts performance if done frequently.

```js
// Changing only the background color triggers a repaint
element.style.backgroundColor = 'blue';
```
### Document Fragment
A DocumentFragment is a lightweight container used to group multiple DOM changes without triggering reflow/repaint until it is appended to the live DOM. This minimizes performance overhead.

**Using DocumentFragment for performance improvement**
```js
// Create a document fragment
const fragment = document.createDocumentFragment();

// Create and append multiple elements to the fragment
for (let i = 0; i < 1000; i++) {
  const newElement = document.createElement('div');
  newElement.textContent = `Item ${i}`;
  fragment.appendChild(newElement);
}

// Append the fragment to the DOM in one go (triggers only one reflow/repaint)
document.body.appendChild(fragment);
```




## Event Loop :
The Event Loop is a core concept in JavaScript that handles asynchronous tasks and makes JavaScript non-blocking, even though it's single-threaded.

![alt text](img/js_event_loop.png)

### Synchronous Code (Sync Code)
* This code is executed line by line, one after another.
* Each line waits for the previous one to complete before moving on.

```js
console.log('Step 1');
console.log('Step 2'); // Will execute only after 'Step 1' is done
```
### Asynchronous Code (Async Code)
* This code allows certain tasks (like API calls or timeouts) to run in the background without blocking the main thread.

```js
console.log('Step 1');
setTimeout(() => console.log('Step 3'), 1000); // Async, delayed execution
console.log('Step 2'); // Executes before 'Step 3'
```
### Blocking Code
* Code that prevents further execution until the current operation is complete. This usually happens in synchronous tasks.

```js
while (true) {} // Blocking code, as it never finishes
```
### How It Works: Call Stack, Web APIs, Callback Queue, and Event Loop

#### Call Stack
* The Call Stack is where JavaScript tracks the currently executing code.
* Functions are pushed to the stack when invoked and popped off once completed.
* Synchronous code runs entirely in the call stack.
```js
function greet() {
  console.log('Hello!');
}
greet(); // 'greet' is pushed to the call stack, then removed once finished.
```
#### Web APIs (Browser)
* **Web APIs** are provided by the browser (or Node.js) to handle asynchronous tasks such as `setTimeout`, AJAX requests (`fetch`), or event listeners.
* When async code is triggered, it goes to the Web API environment, which handles it until it's ready.
```js
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);
```

#### Callback Queue (Task Queue)
* When an async task is completed (e.g., a timeout or an API call), its callback function is placed in the Callback Queue.
* The `Callback Queue` waits for the Call `Stack` to be empty before sending callbacks for execution.

#### Event Loop
* The Event Loop constantly checks the Call Stack. If the stack is empty, it moves the first callback from the Callback Queue to the Call Stack for execution.
* This is how JavaScript handles async tasks while continuing to execute synchronous code.

**Event Loop Example :**
```js
console.log('Step 1'); // Sync, goes directly to the call stack

setTimeout(() => {
  console.log('Step 3'); // Async, goes to Web API, and later moves to Callback Queue
}, 1000);

console.log('Step 2'); // Sync, executed before the async code
```
**Execution Flow :**
* **Step 1** is logged immediately (synchronous).
* `setTimeout` is handed to the Web API and the callback is scheduled.
* **Step 2** is logged (synchronous).
* After 1000ms, the callback for **Step 3** is moved to the **Callback Queue**.
* The Event Loop sees the Call Stack is empty and pushes **Step 3's** callback into the stack.


## Promises :
A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
### States of a Promise:
* **Pending**: Initial state, neither fulfilled nor rejected.
* **Fulfilled**: The async operation completed successfully.
* **Rejected**: The async operation failed.

A promise takes an executor function with two parameters: `resolve` and `reject`.

**Promise Syntax:**
```js
const promise = new Promise((resolve, reject) => {
  // Do some async task
  let success = true;

  if (success) {
    resolve('Task completed successfully'); // Fulfill the promise
  } else {
    reject('Task failed'); // Reject the promise
  }
});
```
### Handling Promises
* **then()**: Used to handle the fulfilled state.
* **catch()**: Used to handle the rejected state.
* **finally()**: Runs after the promise is settled (either fulfilled or rejected).

**Example 1: Basic Promise**
```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve('Promise fulfilled!');
    } else {
      reject('Promise rejected!');
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message); // Logs 'Promise fulfilled!' after 1 second
  })
  .catch((error) => {
    console.log(error); // Logs if promise is rejected
  })
  .finally(() => {
    console.log('Promise settled');
  });
```
**Example 2: Chaining Promises**
You can chain multiple .then() methods to handle sequential async tasks.

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data fetched'), 1000);
});

fetchData
  .then((data) => {
    console.log(data); // 'Data fetched'
    return 'Processed Data';
  })
  .then((processedData) => {
    console.log(processedData); // 'Processed Data'
  })
  .catch((error) => {
    console.error(error);
  });
```
**Example 3: Promise with Async Operation (e.g., API call)**

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John' };
      resolve(data); // Simulate API success
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data received:', data); // Logs data after 2 seconds
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```



## Event


### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js  

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```
### 

```js

```

