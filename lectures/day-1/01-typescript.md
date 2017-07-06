![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to TypeScript

![TypeScript Logo](https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png)

## Objectives

By the end of this lesson, students should be able to:

- Explain the relationship between ES6 and TypeScript
- Use the TypeScript compiler to transpile TypeScript
- Understand what type definitions are and why they are necessary
- Read and write TypeScript code that employs typing

## What is TypeScript?

TypeScript is an open-sourced programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning that **any existing valid JavaScript program is also a valid TypeScript program.** TypeScript transcompiles to JavaScript, so **it can be run in both browsers and serverside.**

### "TS as a superset of JS"

This phrase is just a fancy way to say that TypeScript includes all of the types, semantics and functionality of JavaScript while adding a few bells and whistles of its own.

![TypeScript superset of JavaScript](http://alexander.holbreich.org/content/images/2016/01/typescript-es6-es5.png)

So why bother with TypeScript? It turns out that some of those extra bells and whistles are extremely useful! 

## Getting started

First off, we need to globally install the TypeScript compiler. We can do this through npm:

```bash
npm install typescript -g
```

What did we just install? This program will read our TypeScript, interpret it, and turn it into JavaScript (ES5). Pretty neat, right? Since our finished product is JavaScript, it can be run in browsers.

![Transpiling](https://i1.wp.com/www.mithunvp.com/wp-content/uploads/2016/02/transpiling.png)

Let's try it out!

Take a look at **hello.ts.** You should see this:

```typescript
function sayHello() {
  console.log('Hello! This syntax seems familiar . . . .');
}

sayHello();
```

Looks just like JavaScript, right? Let's see what happens when we run it through the TypeScript compiler. Go to your terminal and run:

```bash
tsc hello.ts
```

. . . and look around in your repo. You should see the exact same file with a ".js" extension. Not exactly novel, but we're on the way to doing more exciting things with TypeScript.

### Type Annotations

TypeScript is a static, weakly-typed. It is staticly typed because **we can declare the types of our variables and properties which are enforced at compile time**, and it is weakly typed because **we can also choose not to.** What does this mean?

Let's take a look at **multiplier.ts:**

```typescript
function multiplyByTen(points: number): number {
  let product: number = points * 10;
  return product;
}


let product: number = multiplyByTen(10);
console.log(product);
```

With this colon syntax, we are telling both the compiler and our fellow coders exactly what type our variables are, and more importantly, what type of argument our function expects. When we run this code through our compiler, we get:

```javascript
function multiplyByTen(points) {
    var product = points * 10;
    return product;
}
var product = multiplyByTen(10);
console.log(product);

```

 . . . the same exact same thing minus the type annotations. What the hell?! Why even bother? Let's go back and change the argument to 'a billion' and see what happens.

 BAM. Our compiler yells at us, and doesn't produce our JavaScript file. It's saving us from making mistakes. If we remove the type annotation from the argument, compile again, and run the JavaScript script with node, we get an awkward return value that was not the intended result of the function.

 ### Lab: Make it compile

**battle.ts** is very broken. Using what we just learned, and the compiler feedback, fix the file until it compiles cleanly.s

## Additional Resources

-   [TypeScript Documentation](https://www.typescriptlang.org/docs/tutorial.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

