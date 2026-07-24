# Web Technology - AIUB


## 📑 Index

1. [History of the Web](#history-of-the-web-)
   - [Key Milestones](#key-milestones-)
   - [Internet vs WWW](#internet-vs-www-)
   - [URL (Uniform Resource Locator)](#url-uniform-resource-locator-)
2. [Network Concepts](#network-concepts-)
   - [NAT (Network Address Translation)](#nat-network-address-translation-)
   - [TCP/IP Model](#tcpip-model-)
3. [Version Control System (Git)](#version-control-system-git-)
   - [What is Git?](#what-is-git)
   - [Basic Git Operations](#basic-git-operations-)
   - [Git Workflow](#git-workflow-)
   - [Branch](#branch-)
4. [Client-Server Architecture](#client-server-architecture-)
   - [Client-Server Model](#client-server-model-)
   - [Three-Tier Architecture](#three-tier-architecture-)
5. [HTTP Protocol](#http-protocol-)
   - [HTTP vs HTTPS](#http-vs-https-)
   - [HTTP Methods](#http-methods-)
   - [HTTP Status Codes](#http-status-codes-)
6. [Web Server & DNS](#web-server--dns-)
   - [Types of Web Servers](#types-of-web-servers-)
   - [Types of Browsers](#types-of-browsers-)
   - [DNS (Domain Name System)](#dns-domain-name-system-)
   - [HTTP Proxies](#http-proxies-)
7. [Protocol](#protocol-)
8. [Introduction to HTML](#introduction-to-html-)
   - [Basic HTML Syntax](#basic-html-syntax-)
   - [HTML Element](#html-element-)
   - [HTML Attribute](#html-attribute-)
   - [Page Title](#page-title-)
   - [Favicon](#favicon-)
   - [HTML Head](#html-head-)
9. [Block & Inline Elements](#block--inline-elements-)
   - [Block Elements](#block-elements-)
   - [Inline Elements](#inline-elements-)
   - [Block vs Inline](#block-vs-inline-)
10. [Table](#table-)
11. [Image](#image-)
12. [Anchor Tag](#anchor-tag-)
13. [Form](#form-)
    - [Registration Form using Table & Form](#registration-form-using-table--form-)
    - [Form Method](#form-method-)
    - [URL Encoding](#url-encoding-)
14. [XML (eXtensible Markup Language)](#xml-extensible-markup-language-)
    - [HTML vs XML](#html-vs-xml-)
15. [DOM (Document Object Model)](#dom-document-object-model-)
16. [Introduction to CSS](#introduction-to-css-)
    - [5 CSS Selectors](#5-css-selectors-)
17. [Box Model](#box-model-)
    - [box-sizing: border-box](#box-sizing-border-box-)
18. [Display Property](#display-property-)
19. [Layout & Position](#layout--position-)
20. [Max Width](#max-width-)
21. [z-index](#z-index-)
22. [Overflow](#overflow-)
23. [Inline Block](#inline-block-)
24. [Introduction to JavaScript](#introduction-to-javascript-)
    - [History of JavaScript](#history-of-javascript-)
    - [How to Apply JavaScript](#how-to-apply-javascript-)
25. [JavaScript Syntax, Variables & Operations](#javascript-syntax-variables--operations-)
    - [Variables](#variables-)
    - [Operations](#operations-)
26. [Array](#array-)
27. [Function & Object](#function--object-)
    - [Functions](#functions-)
    - [Objects](#objects-)
28. [Type Casting](#type-casting-)
29. [Conditional Statements](#conditional-statements-)
30. [Types of Output](#types-of-output-)
31. [String Operations](#string-operations-)
32. [ES5 Features](#es5-features-)
33. [HTML DOM Operations (including Style Manipulation)](#html-dom-operations-including-style-manipulation-)
    - [Accessing DOM Elements](#accessing-dom-elements-)
    - [Changing Content](#changing-content-)
    - [Style Manipulation](#style-manipulation-)
    - [Get/Set Attributes](#getset-attributes-)
34. [Add Action Listener (addEventListener)](#add-action-listener-addeventlistener-)
    - [Common Event Types](#common-event-types-)
    - [Event Object Properties](#event-object-properties-)
35. [Insert, Delete, Update Elements Dynamically](#insert-delete-update-elements-dynamically-)
    - [Insert (Create & Add)](#insert-create--add-)
    - [Delete (Remove)](#delete-remove-)
    - [Update (Modify)](#update-modify-)
    - [Full Dynamic Example](#full-dynamic-example-)
36. [JS Form Validation](#js-form-validation-)
    - [Form Validation with addEventListener](#form-validation-with-addeventlistener-best-practice-)
    - [Real-time Input Validation](#real-time-input-validation-)

---

## History of the Web :
The World Wide Web (WWW) was invented by **Tim Berners-Lee** in **1989** at CERN. He proposed a system for sharing information using hypertext. The first website went live in **1991**.

### Key Milestones :
* **1969** – ARPANET (precursor to the Internet) was created.
* **1989** – Tim Berners-Lee proposed the World Wide Web.
* **1991** – First website launched at CERN.
* **1993** – Mosaic, the first popular web browser, was released.
* **1995** – JavaScript was created by Brendan Eich (Netscape).
* **1996** – CSS was introduced by W3C.
* **2004** – Web 2.0 era (interactive websites, AJAX).
* **2014** – HTML5 became a W3C Recommendation.


### Internet vs WWW :
* **Internet** : A global network of interconnected computers that communicate using standardized protocols (TCP/IP). It includes email, FTP, and more.
* **WWW (World Wide Web)** : A system of interlinked hypertext documents accessed via the Internet using a web browser. It uses HTTP/HTTPS protocols.

> Internet is the infrastructure. WWW is a service that runs on top of it.


### URL (Uniform Resource Locator) :
A URL is the address used to access a resource on the web.

```
https://www.example.com:443/path/page.html?query=value#section
|___|   |_____________| |_| |____________| |__________| |_____|
scheme      host        port    path        query       fragment
```

* **Scheme** : Protocol used (http, https, ftp).
* **Host** : Domain name or IP address.
* **Port** : Optional, default is 80 (HTTP) or 443 (HTTPS).
* **Path** : Location of the resource on the server.
* **Query** : Key-value pairs sent to the server.
* **Fragment** : A section within the page.

---

## Network Concepts :

### NAT (Network Address Translation) :
NAT translates private IP addresses to a public IP address, allowing multiple devices on a local network to access the Internet using a single public IP.

* **Private IP** : Used within a local network (e.g., 192.168.1.x).
* **Public IP** : Used on the Internet, assigned by ISP.

### TCP/IP Model :
TCP/IP is the foundational protocol suite for the Internet. It has 4 layers:

| Layer | Name | Protocols | Function |
|-------|------|-----------|----------|
| 4 | Application | HTTP, FTP, SMTP, DNS | User-facing services |
| 3 | Transport | TCP, UDP | Reliable data transfer |
| 2 | Internet | IP, ICMP | Addressing & routing |
| 1 | Network Access | Ethernet, Wi-Fi | Physical transmission |

* **TCP (Transmission Control Protocol)** : Reliable, connection-oriented. Ensures data is delivered in order.
* **UDP (User Datagram Protocol)** : Faster but unreliable, connectionless. Used for streaming, gaming.
* **IP (Internet Protocol)** : Handles addressing and routing of packets.

---

## Version Control System (Git) :

### What is Git?
Git is a distributed version control system that tracks changes in source code. It allows multiple developers to collaborate on a project.

### Basic Git Operations :

```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git

# Check the status of files
git status

# Add files to staging area
git add .                  # Add all files
git add filename.html      # Add specific file

# Commit changes with a message
git commit -m "Initial commit"

# Push changes to remote repository
git push origin main

# Pull latest changes from remote
git pull origin main

# Create a new branch
git branch feature-branch

# Switch to a branch
git checkout feature-branch
# or
git switch feature-branch

# Merge a branch into current branch
git merge feature-branch

# View commit history
git log --oneline
```

### Git Workflow :
1. **Working Directory** → Make changes to files.
2. **Staging Area** → `git add` to stage changes.
3. **Local Repository** → `git commit` to save changes.
4. **Remote Repository** → `git push` to upload changes.

### Branch :
A branch is an independent line of development. The default branch is usually `main` or `master`.

```bash
# Create and switch to new branch in one command
git checkout -b new-feature

# List all branches
git branch -a

# Delete a branch
git branch -d branch-name
```

---

## Client-Server Architecture :

### Client-Server Model :
A model where the **client** (browser) sends requests and the **server** processes them and sends back responses.

* **Client** : The user's browser (Chrome, Firefox, Edge). It sends HTTP requests.
* **Server** : A computer that hosts websites/applications. It processes requests and returns responses (HTML, CSS, JS, JSON).

### Three-Tier Architecture :
A software design pattern that separates an application into three logical layers:

| Tier | Name | Description | Example |
|------|------|-------------|---------|
| 1 | Presentation | User Interface (Frontend) | HTML, CSS, JS |
| 2 | Application/Logic | Business Logic (Backend) | Node.js, PHP, Python |
| 3 | Data | Database Layer | MySQL, MongoDB, PostgreSQL |

```
Client (Browser)  →  Web Server (Logic)  →  Database Server (Data)
     Tier 1               Tier 2                  Tier 3
```


---

## HTTP Protocol :

### HTTP vs HTTPS :
* **HTTP (HyperText Transfer Protocol)** : Protocol for transferring web pages. Data is sent in **plain text** (not secure).
* **HTTPS (HyperText Transfer Protocol Secure)** : Same as HTTP but with **SSL/TLS encryption**. Data is encrypted during transfer.

| Feature | HTTP | HTTPS |
|---------|------|-------|
| Port | 80 | 443 |
| Security | Not encrypted | Encrypted (SSL/TLS) |
| URL Prefix | http:// | https:// |
| Certificate | Not required | SSL Certificate required |
| Use Case | Non-sensitive data | Login, payment, sensitive data |

### HTTP Methods :
* **GET** : Retrieve data from the server.
* **POST** : Send data to the server (create).
* **PUT** : Update/replace existing data.
* **PATCH** : Partially update existing data.
* **DELETE** : Remove data from the server.

### HTTP Status Codes :
* **1xx** – Informational (100 Continue)
* **2xx** – Success (200 OK, 201 Created)
* **3xx** – Redirection (301 Moved Permanently, 304 Not Modified)
* **4xx** – Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
* **5xx** – Server Error (500 Internal Server Error, 502 Bad Gateway)

---

## Web Server & DNS :

### Types of Web Servers :
* **Apache** : Open-source, widely used, supports PHP.
* **Nginx** : High performance, used for reverse proxying and load balancing.
* **IIS (Internet Information Services)** : Microsoft's web server for Windows.
* **Node.js** : JavaScript runtime that can act as a web server.

### Types of Browsers :
* **Chrome** (Google) – Most popular, V8 JavaScript engine.
* **Firefox** (Mozilla) – Open-source, Gecko engine.
* **Safari** (Apple) – Default on macOS/iOS, WebKit engine.
* **Edge** (Microsoft) – Chromium-based, replaced Internet Explorer.

### DNS (Domain Name System) :
DNS translates human-readable domain names into IP addresses.

```
User types: www.google.com
     ↓
DNS Resolver → Root Server → TLD Server (.com) → Authoritative Server
     ↓
Returns IP: 142.250.190.78
     ↓
Browser connects to the server using the IP address
```

* **Domain Name** : Human-readable address (e.g., google.com).
* **IP Address** : Numerical address (e.g., 142.250.190.78).
* **DNS Records** : A (IPv4), AAAA (IPv6), CNAME (Alias), MX (Mail).

### HTTP Proxies :
A proxy server acts as an intermediary between the client and the server.

* **Forward Proxy** : Sits between client and internet. Hides client identity.
* **Reverse Proxy** : Sits between internet and server. Hides server identity, load balancing.

```
Client → Forward Proxy → Internet → Reverse Proxy → Server
```

---

## Protocol :
A protocol is a set of rules that govern how data is transmitted over a network.

| Protocol | Port | Purpose |
|----------|------|---------|
| HTTP | 80 | Web page transfer |
| HTTPS | 443 | Secure web page transfer |
| FTP | 21 | File transfer |
| SMTP | 25 | Sending emails |
| POP3 | 110 | Receiving emails |
| SSH | 22 | Secure remote access |
| DNS | 53 | Domain name resolution |

---

## Introduction to HTML :

### Basic HTML Syntax :
HTML (HyperText Markup Language) is the standard markup language for creating web pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first web page.</p>
</body>
</html>
```

* `<!DOCTYPE html>` : Declares the document type as HTML5.
* `<html>` : Root element of the HTML page.
* `<head>` : Contains meta information (title, charset, stylesheets).
* `<body>` : Contains the visible content of the page.


### HTML Element :
An HTML element consists of a start tag, content, and an end tag.

```html
<!-- Element structure -->
<tagname attribute="value">Content</tagname>

<!-- Example -->
<p class="intro">This is a paragraph.</p>
<!-- <p> = start tag, </p> = end tag, class="intro" = attribute -->
```

### HTML Attribute :
Attributes provide additional information about an element.

```html
<!-- Common attributes -->
<a href="https://www.google.com" target="_blank">Google</a>
<!-- href = URL, target="_blank" = open in new tab -->

<img src="image.jpg" alt="Description" width="300" height="200">
<!-- src = image source, alt = alternate text -->

<input type="text" id="name" name="username" placeholder="Enter name" required>
<!-- type, id, name, placeholder, required are all attributes -->
```

### Page Title :
The title appears on the browser tab and is important for SEO.

```html
<head>
    <title>Web Technology - AIUB</title>
</head>
```

### Favicon :
A favicon is the small icon displayed in the browser tab next to the page title.

```html
<head>
    <link rel="icon" type="image/png" href="favicon.png">
    <!-- or for .ico format -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
```

### HTML Head :
The `<head>` section contains metadata, links to stylesheets, scripts, and other resources.

```html
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title -->
    <title>My Website</title>

    <!-- Meta description for SEO -->
    <meta name="description" content="A web technology course page">

    <!-- Meta keywords -->
    <meta name="keywords" content="HTML, CSS, JavaScript, Web">

    <!-- Author -->
    <meta name="author" content="Rijoan Maruf">

    <!-- Favicon -->
    <link rel="icon" href="favicon.ico">

    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">

    <!-- External JS (deferred) -->
    <script src="script.js" defer></script>
</head>
```

---

## Block & Inline Elements :

### Block Elements :
Block elements take up the full width available and start on a new line.

```html
<!-- Block elements -->
<div>This is a div (block)</div>
<p>This is a paragraph (block)</p>
<h1>This is a heading (block)</h1>
<section>Section element (block)</section>
<article>Article element (block)</article>
<header>Header element (block)</header>
<footer>Footer element (block)</footer>
<ul>
    <li>List item (block)</li>
</ul>
```

### Inline Elements :
Inline elements take up only as much width as necessary and do not start on a new line.

```html
<!-- Inline elements -->
<span>This is a span (inline)</span>
<a href="#">This is a link (inline)</a>
<strong>Bold text (inline)</strong>
<em>Italic text (inline)</em>
<img src="image.jpg" alt="Image (inline)">
<input type="text" placeholder="Input (inline)">
<label>Label (inline)</label>
```

### Block vs Inline :
| Feature | Block | Inline |
|---------|-------|--------|
| Width | Full width of container | Only content width |
| New Line | Starts on a new line | Does not start new line |
| Width/Height | Can set width & height | Cannot set width & height |
| Examples | div, p, h1, section | span, a, strong, img |

---

## Table :
A table is used to display data in rows and columns.

```html
<table border="1">
    <caption>Student Information</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th colspan="2">Marks</th>
            <!-- colspan merges 2 columns -->
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Rijoan Maruf</td>
            <td>21-44000-1</td>
            <td>85</td>
            <td>90</td>
        </tr>
        <tr>
            <td rowspan="2">Student B</td>
            <!-- rowspan merges 2 rows -->
            <td>21-44000-2</td>
            <td>78</td>
            <td>82</td>
        </tr>
        <tr>
            <td>21-44000-3</td>
            <td>92</td>
            <td>88</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">&copy; AIUB 2025</td>
        </tr>
    </tfoot>
</table>
```

* `<table>` : Creates a table.
* `<thead>` : Table header section.
* `<tbody>` : Table body section.
* `<tfoot>` : Table footer section.
* `<tr>` : Table row.
* `<th>` : Table header cell (bold, centered by default).
* `<td>` : Table data cell.
* `colspan` : Merges cells horizontally.
* `rowspan` : Merges cells vertically.
* `<caption>` : Adds a title to the table.

---

## Image :
The `<img>` tag is used to embed images in a web page.

```html
<!-- Basic image -->
<img src="photo.jpg" alt="A beautiful photo" width="400" height="300">

<!-- Image with figure and caption -->
<figure>
    <img src="nature.jpg" alt="Nature view">
    <figcaption>A beautiful nature view</figcaption>
</figure>
```

* `src` : Source path of the image.
* `alt` : Alternative text (displayed if image fails to load, important for accessibility & SEO).
* `width` / `height` : Dimensions of the image.

---

## Anchor Tag :
The `<a>` tag creates hyperlinks to navigate between pages or sections.

```html
<!-- External link (opens in new tab) -->
<a href="https://www.aiub.edu" target="_blank">Visit AIUB</a>

<!-- Internal link (same page section) -->
<a href="#contact">Go to Contact Section</a>

<!-- Email link -->
<a href="mailto:student@aiub.edu">Send Email</a>

<!-- Phone link -->
<a href="tel:+8801234567890">Call Us</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>
```

* `href` : The URL or destination of the link.
* `target="_blank"` : Opens link in a new tab.
* `target="_self"` : Opens link in the same tab (default).
* `download` : Triggers file download instead of navigation.

---

## Form :
Forms are used to collect user input and send it to a server.

### Registration Form using Table & Form :

```html
<form action="/register" method="POST">
    <fieldset>
        <legend>Student Registration Form</legend>
        <table>
            <tr>
                <td><label for="fname">First Name:</label></td>
                <td><input type="text" id="fname" name="firstName" placeholder="Enter first name" required></td>
            </tr>
            <tr>
                <td><label for="lname">Last Name:</label></td>
                <td><input type="text" id="lname" name="lastName" placeholder="Enter last name" required></td>
            </tr>
            <tr>
                <td><label for="email">Email:</label></td>
                <td><input type="email" id="email" name="email" placeholder="Enter email" required></td>
            </tr>
            <tr>
                <td><label for="password">Password:</label></td>
                <td><input type="password" id="password" name="password" placeholder="Enter password" required></td>
            </tr>
            <tr>
                <td><label for="dob">Date of Birth:</label></td>
                <td><input type="date" id="dob" name="dob"></td>
            </tr>
            <tr>
                <td><label>Gender:</label></td>
                <td>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label>
                </td>
            </tr>
            <tr>
                <td><label for="dept">Department:</label></td>
                <td>
                    <select id="dept" name="department">
                        <option value="">Select Department</option>
                        <option value="cse">CSE</option>
                        <option value="eee">EEE</option>
                        <option value="bba">BBA</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label for="photo">Upload Photo:</label></td>
                <td><input type="file" id="photo" name="photo"></td>
            </tr>
            <tr>
                <td><label for="bio">Bio:</label></td>
                <td><textarea id="bio" name="bio" rows="4" cols="30" placeholder="Tell us about yourself"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I agree to the terms</label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="submit" value="Register">
                    <input type="reset" value="Reset">
                </td>
            </tr>
        </table>
    </fieldset>
</form>
```

### Form Method :
* **GET** : Appends form data to the URL as query parameters. Visible in the address bar. Used for search, filtering.
* **POST** : Sends form data in the request body. Not visible in the URL. Used for login, registration.

```html
<!-- GET method - data visible in URL -->
<form action="/search" method="GET">
    <input type="text" name="query" placeholder="Search...">
    <input type="submit" value="Search">
</form>
<!-- URL becomes: /search?query=hello -->

<!-- POST method - data hidden in body -->
<form action="/login" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="Login">
</form>
```

### URL Encoding :
Special characters in URLs are encoded using percent-encoding (URL encoding).

| Character | Encoded |
|-----------|---------|
| Space | `%20` or `+` |
| `!` | `%21` |
| `#` | `%23` |
| `$` | `%24` |
| `&` | `%26` |
| `+` | `%2B` |
| `=` | `%3D` |
| `?` | `%3F` |
| `@` | `%40` |

```
Example URL: https://example.com/search?name=Rijoan%20Maruf&dept=CSE
```

---

## XML (eXtensible Markup Language) :
XML is a markup language designed to store and transport data. Unlike HTML, XML tags are **not predefined** — you create your own tags.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student id="1">
        <name>Rijoan Maruf</name>
        <department>CSE</department>
        <cgpa>3.85</cgpa>
    </student>
    <student id="2">
        <name>Student B</name>
        <department>EEE</department>
        <cgpa>3.72</cgpa>
    </student>
</students>
```

### HTML vs XML :
| Feature | HTML | XML |
|---------|------|-----|
| Purpose | Display data | Store/transport data |
| Tags | Predefined (h1, p, div) | User-defined |
| Case Sensitive | No | Yes |
| Closing Tags | Optional for some | Mandatory for all |

---

## DOM (Document Object Model) :
The DOM is a tree-like representation of an HTML document. It allows JavaScript to access and manipulate the structure, style, and content of a web page.

```
document
  └── html
       ├── head
       │    ├── meta
       │    └── title
       └── body
            ├── h1
            ├── p
            └── div
                 ├── p
                 └── a
```

* Every HTML element is a **node** in the DOM tree.
* The `document` object is the entry point to access DOM.
* JavaScript uses DOM to dynamically change HTML content and CSS styles.

---

## Introduction to CSS :

### 5 CSS Selectors :
CSS Selectors are used to target HTML elements for styling.

#### 1. Element Selector :
Targets all instances of a specific HTML element.
```css
p {
    color: blue;
    font-size: 16px;
}
```

#### 2. Class Selector :
Targets elements with a specific class. Uses `.` before the class name.
```css
.highlight {
    background-color: yellow;
    padding: 5px;
}
```
```html
<p class="highlight">This paragraph is highlighted.</p>
```

#### 3. ID Selector :
Targets a specific element with a unique id. Uses `#` before the id name.
```css
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}
```
```html
<div id="header">Welcome to My Website</div>
```

#### 4. Universal Selector :
Targets all elements on the page. Uses `*`.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### 5. Group Selector :
Applies the same style to multiple selectors, separated by commas.
```css
h1, h2, h3, p {
    font-family: Arial, sans-serif;
    color: #333;
}
```

---

## Box Model :
The CSS Box Model describes how every HTML element is represented as a rectangular box.

```
+------------------------------------------+
|              Margin                       |
|  +------------------------------------+  |
|  |           Border                   |  |
|  |  +------------------------------+  |  |
|  |  |         Padding              |  |  |
|  |  |  +------------------------+  |  |  |
|  |  |  |       Content          |  |  |  |
|  |  |  +------------------------+  |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
+------------------------------------------+
```

```css
div {
    /* Content dimensions */
    width: 300px;
    height: 200px;

    /* Padding - space inside the border */
    padding: 20px;

    /* Border */
    border: 2px solid #333;

    /* Margin - space outside the border */
    margin: 10px;

    /* Total width = 300 + 20*2 + 2*2 + 10*2 = 364px (default content-box) */
}
```

### box-sizing: border-box :
Makes width and height include padding and border.
```css
div {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    /* Total width remains 300px (padding & border included inside) */
}
```

---

## Display Property :

### display: block
Takes full width, starts on a new line.
```css
div {
    display: block;
    /* Block elements: div, p, h1-h6, section, header, footer */
}
```

### display: inline
Takes only content width, no new line.
```css
span {
    display: inline;
    /* Inline elements: span, a, strong, em, img */
    /* Cannot set width/height */
}
```

### display: inline-block
Combines inline and block. Stays inline but allows width/height.
```css
.box {
    display: inline-block;
    width: 150px;
    height: 100px;
    background-color: lightcoral;
    margin: 10px;
}
```

### display: none
Completely hides the element (does not take space).
```css
.hidden {
    display: none;
    /* Element is removed from the layout */
}
```

---

## Layout & Position :

### position: static (default)
Elements are positioned according to the normal document flow.
```css
.static-box {
    position: static;
    /* Default positioning, top/right/bottom/left have no effect */
}
```

### position: relative
Positioned relative to its normal position. Other elements are NOT affected.
```css
.relative-box {
    position: relative;
    top: 20px;    /* Moves 20px down from its normal position */
    left: 30px;   /* Moves 30px right from its normal position */
}
```

### position: absolute
Positioned relative to the nearest positioned ancestor (not static). Removed from normal flow.
```css
.parent {
    position: relative; /* Parent must be positioned */
}

.absolute-box {
    position: absolute;
    top: 50px;
    right: 20px;
    /* Positioned 50px from top and 20px from right of .parent */
}
```

### position: fixed
Positioned relative to the viewport. Stays in place even when scrolling.
```css
.fixed-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    /* Always stays at bottom-right corner of the screen */
}
```

### position: sticky
Toggles between relative and fixed based on scroll position.
```css
.sticky-nav {
    position: sticky;
    top: 0;
    background-color: #333;
    color: white;
    /* Sticks to the top when you scroll past it */
}
```

---

## Max Width :
Limits the maximum width of an element. Useful for responsive design.
```css
.container {
    max-width: 1200px;
    width: 100%;       /* Takes full width up to 1200px */
    margin: 0 auto;    /* Centers the container */
}

img {
    max-width: 100%;   /* Image never exceeds its container */
    height: auto;
}
```

---

## z-index :
Controls the stacking order of overlapping elements. Higher value = on top. Only works on positioned elements (relative, absolute, fixed, sticky).

```css
.box-back {
    position: relative;
    z-index: 1;
    /* Behind */
}

.box-front {
    position: relative;
    z-index: 10;
    /* In front */
}
```

---

## Overflow :
Controls what happens when content overflows its container.

```css
/* visible (default) - content overflows and is visible */
.box1 { overflow: visible; }

/* hidden - overflowing content is clipped/hidden */
.box2 { overflow: hidden; }

/* scroll - always shows scrollbars */
.box3 { overflow: scroll; }

/* auto - shows scrollbars only when needed */
.box4 { overflow: auto; }

/* Control individual axes */
.box5 {
    overflow-x: auto;    /* Horizontal scrollbar if needed */
    overflow-y: hidden;  /* Hide vertical overflow */
}
```

---

## Inline Block :
`display: inline-block` allows elements to sit next to each other while still being able to set width and height.

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

```css
.card {
    display: inline-block;
    width: 200px;
    height: 150px;
    margin: 10px;
    padding: 15px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    vertical-align: top; /* Aligns cards at the top */
}
```

---

## Introduction to JavaScript :

### History of JavaScript :
* **1995** – Created by **Brendan Eich** at Netscape in just **10 days**.
* Originally named **Mocha**, then **LiveScript**, finally **JavaScript**.
* **1997** – Standardized as **ECMAScript (ES1)** by ECMA International.
* **2009** – **ES5** introduced strict mode, JSON support, Array methods (forEach, map, filter).
* **2015** – **ES6 (ES2015)** introduced let/const, arrow functions, classes, promises, template literals.
* JavaScript is **NOT** related to Java — the name was a marketing decision.

### How to Apply JavaScript :
Three ways to add JavaScript to an HTML page.

#### 1. Inline JavaScript :
```html
<button onclick="alert('Hello!')">Click Me</button>
```

#### 2. Internal JavaScript :
```html
<script>
    console.log("Hello from internal JS!");
</script>
```

#### 3. External JavaScript (Best Practice) :
```html
<script src="script.js"></script>
<!-- or with defer (recommended) -->
<script src="script.js" defer></script>
```

---

## JavaScript Syntax, Variables & Operations :

### Variables :

```js
// var - function scoped, can be redeclared
var name = "Rijoan";

// let - block scoped, can be reassigned
let age = 22;
age = 23; // Allowed

// const - block scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable
```

### Operations :

```js
// Arithmetic Operators
let sum = 10 + 5;       // 15 (Addition)
let diff = 10 - 5;      // 5  (Subtraction)
let product = 10 * 5;   // 50 (Multiplication)
let quotient = 10 / 3;  // 3.33 (Division)
let remainder = 10 % 3; // 1  (Modulus)
let power = 2 ** 3;     // 8  (Exponentiation)

// Comparison Operators
console.log(5 == "5");   // true  (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, no type coercion)
console.log(5 != "5");   // false (loose inequality)
console.log(5 !== "5");  // true  (strict inequality)

// Logical Operators
console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)
```

---

## Array :

```js
// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements (0-indexed)
console.log(fruits[0]);     // "Apple"
console.log(fruits.length); // 4

// Adding elements
fruits.push("Grape");       // Add to end: ["Apple", "Banana", "Orange", "Mango", "Grape"]
fruits.unshift("Kiwi");     // Add to start: ["Kiwi", "Apple", "Banana", "Orange", "Mango", "Grape"]

// Removing elements
fruits.pop();               // Remove from end
fruits.shift();             // Remove from start

// Splice - add/remove at specific index
fruits.splice(1, 1, "Pineapple"); // At index 1, remove 1 item, add "Pineapple"

// Slice - extract a portion (does not modify original)
let citrus = fruits.slice(1, 3); // Elements from index 1 to 2

// Iterating arrays
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Map - creates new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());

// Filter - creates new array with filtered items
let longNames = fruits.filter(fruit => fruit.length > 5);
```

---

## Function & Object :

### Functions :

```js
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Rijoan")); // "Hello, Rijoan!"

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Default Parameters
function welcome(name = "Guest") {
    console.log("Welcome, " + name);
}
welcome();         // "Welcome, Guest"
welcome("Rijoan"); // "Welcome, Rijoan"
```

### Objects :

```js
// Creating an object
let student = {
    name: "Rijoan Maruf",
    id: "21-44000-1",
    department: "CSE",
    cgpa: 3.85,
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

// Accessing properties
console.log(student.name);         // Dot notation: "Rijoan Maruf"
console.log(student["department"]); // Bracket notation: "CSE"

// Modifying properties
student.cgpa = 3.90;         // Update existing
student.semester = "Fall25"; // Add new property
delete student.semester;     // Delete property

// Calling methods
student.greet(); // "Hello, I am Rijoan Maruf"

// Object keys and values
console.log(Object.keys(student));   // ["name", "id", "department", "cgpa", "greet"]
console.log(Object.values(student)); // ["Rijoan Maruf", "21-44000-1", "CSE", 3.90, ...]
```

---

## Type Casting :
Converting data from one type to another.

```js
// String to Number
let str = "42";
let num1 = Number(str);       // 42
let num2 = parseInt(str);     // 42 (integer)
let num3 = parseFloat("3.14"); // 3.14 (float)
let num4 = +"100";            // 100 (unary plus)

// Number to String
let num = 100;
let s1 = String(num);         // "100"
let s2 = num.toString();      // "100"
let s3 = num + "";            // "100" (concatenation)

// Boolean Conversion
console.log(Boolean(0));         // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(1));        // true
console.log(Boolean("hello"));  // true

// Type checking
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (known JS quirk)
```

---

## Conditional Statements :

```js
// If-Else
let score = 85;
if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}
// Output: "Grade: A"

// Switch
let day = 3;
switch (day) {
    case 1: console.log("Saturday"); break;
    case 2: console.log("Sunday"); break;
    case 3: console.log("Monday"); break;
    case 4: console.log("Tuesday"); break;
    default: console.log("Invalid day");
}
// Output: "Monday"

// Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Eligible" : "Not Eligible";
console.log(canVote); // "Eligible"
```

---

## Types of Output :

```js
// 1. console.log() - Output to browser console
console.log("Hello Console!");

// 2. alert() - Popup dialog box
alert("Hello Alert!");

// 3. document.write() - Write directly to the HTML page
document.write("<h2>Hello Page!</h2>");

// 4. innerHTML - Change content of an HTML element
document.getElementById("output").innerHTML = "Hello DOM!";

// 5. console.warn() - Warning message in console
console.warn("This is a warning!");

// 6. console.error() - Error message in console
console.error("This is an error!");

// 7. prompt() - Input dialog box
let userName = prompt("Enter your name:");
console.log("Hello, " + userName);

// 8. confirm() - Confirmation dialog box
let result = confirm("Are you sure?");
console.log(result); // true or false
```

---

## String Operations :

```js
let str = "Hello, World!";

// Length
console.log(str.length);              // 13

// Case conversion
console.log(str.toUpperCase());        // "HELLO, WORLD!"
console.log(str.toLowerCase());        // "hello, world!"

// Searching
console.log(str.indexOf("World"));     // 7
console.log(str.includes("Hello"));    // true
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("!"));        // true

// Extracting
console.log(str.charAt(0));           // "H"
console.log(str.substring(0, 5));     // "Hello"
console.log(str.slice(-6));           // "orld!"

// Modifying
console.log(str.replace("World", "JS")); // "Hello, JS!"
console.log(str.trim());              // Removes whitespace from both ends
console.log(str.split(", "));         // ["Hello", "World!"]
console.log(str.repeat(2));           // "Hello, World!Hello, World!"

// Template Literals (ES6)
let name = "Rijoan";
let greeting = `Hello, ${name}! Welcome to AIUB.`;
console.log(greeting); // "Hello, Rijoan! Welcome to AIUB."
```

---

## ES5 Features :
ES5 (ECMAScript 5) was released in 2009 and introduced several important features.

```js
// 1. "use strict" - Enforces stricter parsing and error handling
"use strict";
// x = 10; // Error: x is not defined (must use var/let/const)

// 2. Array Methods
let numbers = [1, 2, 3, 4, 5];

// forEach - iterates over array
numbers.forEach(function(num) {
    console.log(num);
});

// map - creates a new array by transforming each element
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates a new array with elements that pass a test
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// reduce - reduces array to a single value
let total = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(total); // 15

// 3. JSON support
let obj = { name: "Rijoan", age: 22 };
let jsonString = JSON.stringify(obj);   // '{"name":"Rijoan","age":22}'
let parsed = JSON.parse(jsonString);     // { name: "Rijoan", age: 22 }

// 4. Property getters and setters
let person = {
    firstName: "Rijoan",
    lastName: "Maruf",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        let parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(person.fullName); // "Rijoan Maruf"
```

---

## HTML DOM Operations (including Style Manipulation) :

### Accessing DOM Elements :

```js
// By ID
const heading = document.getElementById("mainTitle");

// By Class Name (returns HTMLCollection)
const items = document.getElementsByClassName("list-item");

// By Tag Name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// By CSS Selector (first match)
const firstBtn = document.querySelector(".btn");

// By CSS Selector (all matches, returns NodeList)
const allBtns = document.querySelectorAll(".btn");
```

### Changing Content :

```js
// innerHTML - sets HTML content (renders tags)
document.getElementById("output").innerHTML = "<strong>Bold Text</strong>";

// textContent - sets plain text (ignores tags)
document.getElementById("output").textContent = "Plain text only";

// innerText - sets visible text (respects CSS display)
document.getElementById("output").innerText = "Visible text";
```

### Style Manipulation :

```js
let box = document.getElementById("myBox");

// Set individual styles
box.style.backgroundColor = "#3498db";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "10px";
box.style.fontSize = "18px";

// Set multiple styles at once
box.style.cssText = "background: red; color: white; padding: 15px;";

// Add/Remove CSS classes
box.classList.add("active");       // Add a class
box.classList.remove("active");    // Remove a class
box.classList.toggle("active");    // Toggle a class
box.classList.contains("active");  // Check if class exists (returns boolean)
```

### Get/Set Attributes :

```js
let link = document.querySelector("a");

// Get attribute value
let href = link.getAttribute("href");

// Set attribute value
link.setAttribute("href", "https://www.aiub.edu");
link.setAttribute("target", "_blank");

// Remove attribute
link.removeAttribute("target");
```

---

## Add Action Listener (addEventListener) :

```html
<button id="myBtn">Click Me</button>
<p id="output">Waiting for action...</p>

<script>
    let btn = document.getElementById("myBtn");
    let output = document.getElementById("output");

    // Click event
    btn.addEventListener("click", function() {
        output.textContent = "Button was clicked!";
    });

    // Mouseover event
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "lightblue";
    });

    // Mouseout event
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "";
    });
</script>
```

### Common Event Types :
| Event | Description |
|-------|-------------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseover` | Mouse enters the element |
| `mouseout` | Mouse leaves the element |
| `keydown` | A key is pressed down |
| `keyup` | A key is released |
| `input` | Input value changes (real-time) |
| `change` | Input value changes (on blur) |
| `focus` | Element gains focus |
| `blur` | Element loses focus |
| `submit` | Form is submitted |
| `load` | Page/resource has loaded |

### Event Object Properties :

```js
document.getElementById("myBtn").addEventListener("click", function(event) {
    console.log(event.type);       // "click"
    console.log(event.target);     // The element that was clicked
    console.log(event.target.id);  // "myBtn"

    event.preventDefault();        // Prevents default behavior (e.g., link navigation)
    event.stopPropagation();       // Stops event from bubbling up to parent elements
});
```

---

## Insert, Delete, Update Elements Dynamically :

### Insert (Create & Add) :

```js
// Create a new element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically!";
newParagraph.style.color = "green";

// Append to a parent element (adds at the end)
document.getElementById("container").appendChild(newParagraph);

// Insert at specific position
let container = document.getElementById("container");
let referenceElement = document.getElementById("existingItem");

// Insert before an existing element
container.insertBefore(newParagraph, referenceElement);

// Using insertAdjacentHTML
container.insertAdjacentHTML("beforeend", "<p>Added via insertAdjacentHTML</p>");
```

### Delete (Remove) :

```js
// Remove a child element
let parent = document.getElementById("container");
let child = document.getElementById("itemToRemove");
parent.removeChild(child);

// Remove element directly (modern approach)
document.getElementById("itemToRemove").remove();
```

### Update (Modify) :

```js
// Update text content
document.getElementById("title").textContent = "Updated Title";

// Update HTML content
document.getElementById("content").innerHTML = "<em>Updated content with HTML</em>";

// Update attributes
document.getElementById("myImage").setAttribute("src", "new-image.jpg");

// Update styles
document.getElementById("box").style.backgroundColor = "coral";
```

### Full Dynamic Example :

```html
<div id="taskList">
    <h3>Task List</h3>
</div>
<input type="text" id="taskInput" placeholder="Enter a task">
<button id="addBtn">Add Task</button>

<script>
    let addBtn = document.getElementById("addBtn");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    // INSERT - Add new task
    addBtn.addEventListener("click", function() {
        let taskText = taskInput.value;
        if (taskText === "") return;

        let taskItem = document.createElement("div");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;

        // DELETE - Remove task on delete button click
        taskItem.querySelector(".deleteBtn").addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        // UPDATE - Double click to edit
        taskItem.querySelector("span").addEventListener("dblclick", function() {
            let newText = prompt("Edit task:", this.textContent);
            if (newText) this.textContent = newText;
        });

        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input
    });
</script>
```

---

## JS Form Validation :

```html
<form id="registrationForm" onsubmit="return validateForm()">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="text" id="email" name="email"><br><br>

    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>

    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword"><br><br>

    <p id="errorMsg" style="color: red;"></p>
    <input type="submit" value="Register">
</form>

<script>
    function validateForm() {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let errorMsg = document.getElementById("errorMsg");

        // Name validation - must not be empty
        if (name === "") {
            errorMsg.textContent = "Name is required!";
            return false;
        }

        // Email validation - must contain @ and .
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMsg.textContent = "Please enter a valid email!";
            return false;
        }

        // Phone validation - must be 11 digits
        let phonePattern = /^[0-9]{11}$/;
        if (!phonePattern.test(phone)) {
            errorMsg.textContent = "Phone must be 11 digits!";
            return false;
        }

        // Password validation - minimum 6 characters
        if (password.length < 6) {
            errorMsg.textContent = "Password must be at least 6 characters!";
            return false;
        }

        // Confirm password - must match
        if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match!";
            return false;
        }

        errorMsg.textContent = "";
        alert("Form submitted successfully!");
        return true;
    }
</script>
```

### Form Validation with addEventListener (Best Practice) :

```html
<form id="myForm">
    <input type="text" id="username" placeholder="Username">
    <input type="email" id="userEmail" placeholder="Email">
    <button type="submit">Submit</button>
    <p id="formError" style="color: red;"></p>
</form>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("userEmail").value.trim();
        let errorMsg = document.getElementById("formError");

        if (username === "") {
            errorMsg.textContent = "Username is required!";
            return;
        }

        if (username.length < 3) {
            errorMsg.textContent = "Username must be at least 3 characters!";
            return;
        }

        if (email === "" || !email.includes("@")) {
            errorMsg.textContent = "Valid email is required!";
            return;
        }

        errorMsg.style.color = "green";
        errorMsg.textContent = "Form is valid! Submitting...";
        // this.submit(); // Uncomment to actually submit
    });
</script>
```

### Real-time Input Validation :

```html
<input type="text" id="liveInput" placeholder="Enter email">
<p id="liveError"></p>

<script>
    document.getElementById("liveInput").addEventListener("input", function() {
        let value = this.value;
        let error = document.getElementById("liveError");

        if (value === "") {
            error.textContent = "";
            error.style.color = "";
        } else if (!value.includes("@")) {
            error.textContent = "❌ Email must contain @";
            error.style.color = "red";
        } else {
            error.textContent = "✅ Looks good!";
            error.style.color = "green";
        }
    });
</script>
```
