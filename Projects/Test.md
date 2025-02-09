
1. Object Literal Syntax

```javascript
let person1 = {
    name: "Rijoan",
    age: 22,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Object Literal:");
console.log(person1.name); // Output: Rijoan
person1.greet(); // Output: Hello, my name is Rijoan
```

2. Using `new Object()` Constructor

```javascript
let person2 = new Object();
person2.name = "Zidan";
person2.age = 25;
person2.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

console.log("\nUsing `new Object()`:");
console.log(person2.age); // Output: 25
person2.greet(); // Output: Hello, my name is Zidan
```


3. Using a Constructor Function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

let person3 = new Person("Rayyan", 28);
console.log("\nUsing Constructor Function:");
console.log(person3.name); // Output: Rayyan
person3.greet(); // Output: Hello, my name is Rayyan
```


4. Using `Object.create()`

```javascript
let personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person4 = Object.create(personPrototype);
person4.name = "Fahim";
person4.age = 30;

console.log("\nUsing `Object.create()`:");
console.log(person4.age); // Output: 30
person4.greet(); // Output: Hello, my name is Fahim
```


5. Using ES6 Classes

```javascript
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person5 = new PersonClass("Rijoan", 32);
console.log("\nUsing ES6 Classes:");
console.log(person5.name); // Output: Rijoan
person5.greet(); // Output: Hello, my name is Rijoan
```


6. Using Factory Functions

```javascript
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

let person6 = createPerson("Zidan", 35);
console.log("\nUsing Factory Functions:");
console.log(person6.age); // Output: 35
person6.greet(); // Output: Hello, my name is Zidan
```


7. Using `Object.assign()`

```javascript
let person7 = Object.assign({}, {
    name: "Rayyan",
    age: 40,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
});

console.log("\nUsing `Object.assign()`:");
console.log(person7.name); // Output: Rayyan
person7.greet(); // Output: Hello, my name is Rayyan
```


8. Using Dynamic Property Names (ES6)

```javascript
let key = "name";
let person8 = {
    [key]: "Fahim",
    age: 45,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("\nUsing Dynamic Property Names:");
console.log(person8.name); // Output: Fahim
person8.greet(); // Output: Hello, my name is Fahim
```
