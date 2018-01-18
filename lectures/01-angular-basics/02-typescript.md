<!-- Notes: the multiplier still transpiles into a new JS file, and if you have a number inside of a string, it still successfully coerces the string into an integer and executes the function -->

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

<!--WDI5 9:37 -->

# Introduction to TypeScript

![TypeScript Logo](https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png)

## Objectives

By the end of this lesson, you will be able to:

- Explain the relationship between ES6 and TypeScript.
- Use the TypeScript compiler to transpile TypeScript.
- Understand what type definitions are and why they're necessary.
- Read and write TypeScript code that employs typing.

## What is TypeScript?

TypeScript is an open-sourced programming language developed and maintained by Microsoft. It's a superset of JavaScript, meaning that **any valid JavaScript program is also a valid TypeScript program.** TypeScript transpiles to JavaScript, so **it's typically transpiled on the server, like EJS.**

### "TS as a superset of JS"

This is just a fancy way to say that TypeScript includes all of the types, semantics, and functionalities of JavaScript while adding a few bells and whistles of its own.

![TypeScript superset of JavaScript](https://qph.ec.quoracdn.net/main-qimg-b4ea5e4175b7ea1105895f131e9614cc)

So why bother with TypeScript? It turns out that some of those extra bells and whistles are extremely useful. Typescript was created to "statically identify constructs that are likely to be errors." For example, look at this code:

```js
// Basic JavaScript
function isTallerThanThePyramid(height) {
	if ( height > 455 ) {
		return true;
	} else {
		return false
	}
}
```

If we call `let tallness = isTallerThanThePyramid('600')`, this is still valid JS but would break at runtime. With TypeScript, we can check to be sure that what's passed in to `isTallerThanThePyramid` is a number.

```js
// Written with TypeScript

function isTallerThanThePyramid(height : number ) : boolean{
	if ( height > 455 ) {
		return true;
	} else {
		return false
	}
}

let tallness = isTallerThanThePyramid('500') // error TS2345: Argument of type '"500"' is not assignable to parameter of type 'number'.
```

What's the difference? It still looks like JavaScript, but you can see that it's strictly typed (thus, "TypeScript"). Let's look into this.



## Getting Started

First off, we need to globally install the TypeScript compiler. We can do this through `npm`:

```bash
npm install typescript -g
```

What did we just install? This program will read our TypeScript, interpret it, and turn it into JavaScript (ES5). Pretty neat, right? Because our finished product is JavaScript, it can be run in browsers.

**Note:** the `-g` stands for "global", so for example, `npm install typescript --global` would also have worked. Developers like to use shorthand when possible!

> You may want to install a package for syntax highlighting of TypeScript in the text editor of your choice.

<!--WDI5 9:50 -->

![Transpiling](https://i1.wp.com/www.mithunvp.com/wp-content/uploads/2016/02/transpiling.png)

Let's try it out. Clone [this repo](https://github.com/den-materials/typescript-files) with three `.ts` files inside.  We will go through them one-by-one.

Take a look at `hello.ts`. You should see this:

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

Then, look around in your repo. You should see the exact same file with a ".js" extension. This doesn't seem exciting, but it's the first step! Now, we can write in TypeScript and have it compile into JavaScript. We're on our way to doing exciting things with TypeScript.

### Type Annotations

TypeScript is a statically and weakly typed language. It's statically typed because **we can declare the types of variables and properties that are enforced at compile time**. It's weakly typed because **we can also choose not to.** What does this mean?

Let's take a look at `multiplier.ts`:

```typescript
function multiplyByTen(points: number): number {
  let pointsScored: number = points * 10;
  return pointsScored;
}


let product: number = multiplyByTen(10);
console.log(product);
```

With this colon syntax, we're telling both the compiler and our fellow coders exactly what type our variables are, and more importantly, what type of argument our function expects. When we run this code through our compiler, we get:

```javascript
function multiplyByTen(points) {
  var pointsScored = points * 10;
  return pointsScored;
}
var product = multiplyByTen(10);
console.log(product);

```

It's the same, except without the type annotations. You might be thinking, "Why even bother?" Let's go back and change the argument to "a billion" and see what happens.

BAM. Our compiler yells at us, even though it still produces our JavaScript file. It's saving us from making mistakes. If we remove the type annotation from the argument, compile again, and run the JavaScript script with `node`, we get an awkward return value that wasn't the intended result of the function.

<!--WDI5 9:58  -->

 ### Lab: Make It Compile

`battle.ts` is very broken. Using what we've just learned, along with the compiler feedback, fix the file so it compiles cleanly.

<!--WDI5 10:05 -->

## Additional Resources

-   [TypeScript Documentation](https://www.typescriptlang.org/docs/tutorial.html)

## [License](LICENSE)

1)  All content is licensed under a CC­BY­NC­SA 4.0 license.
2)  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
