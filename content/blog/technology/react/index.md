---
title: "On learning React"
date: "2022-10-24T20:12:03.284Z"
description: "Composability and JSX with React"
featuredImage: { src: "./react-logo.png", alt: "React logo" }
topics: ["react", "2022"]
---

### React
A framework for building fast and clean user interfaces. The first composable framework known by most developers.
Based on Javascript and backed by Facebook. But what is composable exactly? and why did I decide to learn it now?

### Composability
I like to think about the time before and after react. (it was introduced in 2016)
To simplify things we `developers` wrote code all clogged up in 1 single file. function after function,
variable after variable you'd better know how to use the search and replace function...

With composable code we break up that single file into smaller components.
When the app is being build all the components get `glued` back together into one big building block.
These components have a certain hierarchy and name structure, to make it easier to update that specific function or variable.

As a rule of thumb we alaways want to seperate from our concerns. Meaning: that API request you're making to get a header image
should not be placed inside the footer component, but probably inside the header component. You get my point.
Thus, composability in React makes the development process more efficient and keeps our codebase easier to maintain.

### A new syntax: JSX
React is powered by JSX (javascript syntax xlm). like the name suggests with jsx and React our entire webpage is build in javascript.
A jsx object describes the DOM element in javascript. Enough explaining, let's show a code example:

##### In javascript:
```js
const h1 = document.createElement("h1")
h1.textContent = "hello blog reader"
h1.className = "header"
console.log(h1) --> <h1 class="header">
```

##### In JSX:    
```jsx
const elem = 
<h1 className="header"> 
    Hello blog reader
</h1>

console.log(elem) --> 
{   
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "Hello blog reader"
    }, 
    _owner: null, _store: {}
}
```

JSX looks familiar, like a regular html element `<h1>`,
combined with javascript when console logging the variable. `{ obj }` 
It's basically generating DOM elements using function calls.
Of course React transpiles these jsx elements back into DOM elements before
rendering your application. 

One of the questions I had when I started learning React was: why would I want to write in JSX?
#### The benefit
Well, it turns out that React is using a component based structuring. Since display logic and markup are tightly coupled you can write both markup and logic in the same file. The days of seperate .html and .js files are over. These so called components are React's way to separate from concern.

We'll dive deeper into components in an upcoming blog post, but hopefully this was a `light` introduction into the world of React.




