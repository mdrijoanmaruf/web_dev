## Classes and Objects 

### 1. **Constructor**
A constructor is a special method in a class that is automatically called when an object is created. It is used to initialize object properties.

**Example:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Initialize properties
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person1 = new Person("Rijoan", 22); // Create an object
person1.greet(); // Output: Hello, my name is Rijoan and I am 22 years old.
```


### 2. **Encapsulation**
Encapsulation is the concept of bundling data (properties) and methods (functions) that operate on the data into a single unit (class). It also involves restricting direct access to some of an object's components using **private fields** (denoted by `#`).

**Example:**
```javascript
class BankAccount {
  #balance; // Private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance; // Access private field via a method
  }
}

let account = new BankAccount("Rijoan", 1000);
account.deposit(500); // Output: Deposited 500. New balance: 1500
console.log(account.getBalance()); // Output: 1500
// console.log(account.#balance); // Error: Private field cannot be accessed directly
```


### 3. **Inheritance**
Inheritance allows a class to inherit properties and methods from another class. The `extends` keyword is used to create a subclass, and `super()` is used to call the parent class's constructor.

**Example:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal { // Dog inherits from Animal
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Output: Buddy makes a sound. (Inherited from Animal)
dog.bark(); // Output: Buddy barks! (Specific to Dog)
```
