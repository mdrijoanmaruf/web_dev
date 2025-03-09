## API , JSON 

### **1. JSON (parse, stringify)**
- **`JSON.parse()`**: Converts a JSON string into a JavaScript object.
- **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.

```javascript
// Example: Convert JSON string to object and vice versa
const jsonString = '{"name": "Rijoan Maruf", "age": 25}';
const jsonObject = JSON.parse(jsonString); // Converts to object
console.log(jsonObject.name); // Output: Rijoan Maruf

const backToString = JSON.stringify(jsonObject); // Converts back to string
console.log(backToString); // Output: {"name":"Rijoan Maruf","age":25}
```



### **2. JSON Placeholder (GET, Display Data on UI)**
- Fetch data from a fake API (e.g., JSONPlaceholder) and display it on the UI.

```javascript
// Example: Fetch and display user data
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    document.getElementById('user').innerText = `Name: ${data.name}, Email: ${data.email}`;
}
fetchData();
```



### **3. CRUD Operations (GET, POST, PATCH, DELETE)**
- **GET**: Retrieve data.
- **POST**: Create new data.
- **PATCH**: Update existing data.
- **DELETE**: Delete data.

```javascript
// Example: CRUD operations
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET
async function getPost() {
    const response = await fetch(`${apiUrl}/1`);
    const data = await response.json();
    console.log(data);
}

// POST
async function createPost() {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ title: 'Rijoan Maruf', body: 'Hello World', userId: 1 }),
        headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
}

// PATCH
async function updatePost() {
    const response = await fetch(`${apiUrl}/1`, {
        method: 'PATCH',
        body: JSON.stringify({ title: 'Updated by Rijoan Maruf' }),
        headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
}

// DELETE
async function deletePost() {
    const response = await fetch(`${apiUrl}/1`, { method: 'DELETE' });
    console.log('Post deleted');
}
```



### **4. GET vs POST**
- **GET**: Used to retrieve data (e.g., fetching user details).
- **POST**: Used to send data (e.g., creating a new user).



### **5. Status Codes**
- **200**: OK (successful request).
- **201**: Created (resource successfully created).
- **400**: Bad Request (invalid input).
- **404**: Not Found (resource not found).
- **500**: Internal Server Error (server-side error).



### **6. Async/Await and Try/Catch**
- **`async/await`**: Simplifies asynchronous code.
- **`try/catch`**: Handles errors gracefully.

```javascript
// Example: Fetch data with error handling
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
fetchData();
```

```javascript
// Example: Create a post with Rijoan Maruf as the author
async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title: 'Post by Rijoan Maruf', body: 'This is a test post', userId: 1 }),
            headers: { 'Content-type': 'application/json' },
        });
        if (!response.ok) throw new Error('Failed to create post');
        const data = await response.json();
        console.log('Post created:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
createPost();
```
