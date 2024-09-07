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
let sum = numbers.reduce((acc, n) => acc + n, 0); // 6
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

### forEach()
Executes a provided function once for each array element

```js
let fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit)); // Logs: apple, banana, orange
```

### length
Returns the number of elements in an array.

```js
let fruits = ['apple', 'banana', 'orange'];
let count = fruits.length; // 3
```

### for...of
Loops through the values of an iterable object (like an array).

```js
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit); // Logs: apple, banana, orange
}
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

