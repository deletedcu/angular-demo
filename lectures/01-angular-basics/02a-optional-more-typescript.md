<!--5 minutes -->

<!--Hook: Throughout this course, we've taught you the legacy tools currently used in web development while slowly introducing the newer tools that have been developed. TypeScript is one of the most useful new tools for two reasons: It provides functionality that JavaScript developers have been asking for since the late '90s and it was used to create many modern tools, most notably Angular 2+ and Ionic 2+ (an Angular-based framework for building mobile apps). So, as today is all about Angular 2+, we should probably show you the language it's written in. -->

<!--WDI5 10:11 -->
<!--WDI6 10:50 -->

# Intro to TypeScript

## Objectives
*By the end of this lesson, you will be able to:*

- **Understand** the purpose and general features of TypeScript.
- **Utilize** TypeScript's built-in types to prevent bugs.
- **Implement** a customized interface to prevent bugs.
- **Implement** a TypeScript class with inheritance to share functionality between object types.
- **Share** code between files with modules.
<!-- - **Automatically compile** TypeScript into JavaScript with Gulp. -->

## Basic TypeScript Features

<!--Before you get into this, make sure everyone has a TypeScript package installed in their text editor -->
<!--0:05 10 minutes -->

### Types

TypeScript comes with several built-in **types** that are similar to the ones we're used to in JavaScript. Let's examine them in a new file called `types.ts`:

<!--Catch up with the code below.

<!--Start with:

let numero : number = 1;
numero = 2;

<!--Then:

numero = "fish";

<!--Talk about the error you see together.

-->

<!--Then go through the other major types:

let namey : string = "Bobz";

let isWinter : boolean = true;

-->

<!--WDI5 10:18 -->

<!--Pause before moving onto more complex types:

var names : string[] = ["Hans", "Franz"];

-->

<!-- Then talk about function casting:

function getName() : string{
	return 1;
}

<!-- Look at the error:

function noReturn() : void {
	console.log('yo log, whattup?');
}
-->

Every time we make a change, we'll be compiling our `ts` to `js` with `tsc <fileName>.ts`.

If you want to know more about the available types and how to use them, check out this [Types Reference](https://www.typescriptlang.org/docs/handbook/basic-types.html).

### Interfaces

<!--0:15 10 minutes -->

An **interface** is a blueprint for an object. We can use it to define specific required properties or methods of objects.  Create a new file called `interfaces.ts` and follow along.

<!--Catch up with following code.

-- Create the interface:

interface Stark {
	name: string
}

-- And the function:

function printName(stark : Stark) {
	console.log(stark.name);
}

-- Then call the following ways:

printName({name:"Eddard"});
-->

<!--printName({age:22});

<!-- Talk about the error that comes up, then adjust.

interface Stark {
	name: string,
	age?: number
}

printName({name:"Eddard"});

printName({name: "Bran", age:22});

-->

### Classes

<!--11:12 WDI6-->
<!--WDI5 10:35  -->
<!--0:25 10 minutes -->

A **class** is a supercharged blueprint for an object.

>**Note:** **Classes** are a very common feature in other languages but are a recent addition to JavaScript (ES6 and above) because JavaScript relies heavily on **prototypes**, which are similar data structures but *not the same*.

Create a new file called `classes.ts` and follow along.

<!--Catch up for code below.

-- First create a class:

class Stark {
	name: string = "Brandon";
	saying: string;
}

-- Then instantiate it:

var ned = new Stark();

ned.saying = "Winter is coming!";

console.log(ned.saying);

-- Look familiar? That's right, it's basically a constructor function — take a look at the compiled JavaScript.
-->

<!-- How do we put a method on the prototype?

class Stark {
	name: string = "Brandon";
	saying: string;
	hello(person:string) {
		console.log("Hello, " + person);
	}
}

-- Now let's call it:

ned.hello("Bobert");

-->

<!--WDi5 break at 10:49  coming back at 11:08 after project 3 show  -->
<!--WDI6 turning over to devs at 11:18, coming back at 11:23-->
<!--0:35 10 minutes -->

### Inheritance

**Inheritance** is a way for objects to access properties and methods of other objects. Think back to **inheriting** from **prototypes** in Unit 1. This is slightly different (you will find many people online who can tell you how), but is a good base from which to start.

Create a new file called `inheritance.ts` and follow along.

<!-- Catch up for code below.

-- Create a class:

class Person {
	name: string;
	dance() {
		console.log(this.name + " is dancing...");
	}
}

-- What if we want to pass a name in our person creation? Put this inside the class:

	constructor(name:string) {
		this.name = name;
	}

-- And dance:

var bran = new Person("Bran");

bran.dance();

-->

<!--WDI5 11:16  -->

<!-- Then extend:

class CoolPerson extends Person {
	dance() {
		console.log("awesomely!");
	}
}

var robb = new CoolPerson("Robb");
robb.dance();

-- Notice that Robb is not dancing yet — let's fix that. How do we reach a class *above* the current class?

	dance() {
		super.dance();
		console.log("awesomely!");
	}

-->

### Modules

<!--WDI6 11:32, coming back 11:41  -->
<!--WDI5 11:22  -->
<!--0:45 10 minutes -->

**Modules** are a powerful way to share code between files. In TypeScript, the functionality is similar to Node, but the syntax is a little different. Let's see how.

We want to gather all of our `main` code in one file while allowing it to be included independently elsewhere. For instance, we have a lot of *very advanced* mathematical methods that we'd like to include in many places. Create a file called `math.ts` and follow along.

<!-- Catch up for code below:

export class Multiplication {
	timesTwo(n:number) {
		return n*2;
	}
}

-- Note that we could easily create another class called Addition, and we could put functions like `addTwo` inside it. Does this look familiar? (That's the ES6 method syntax.)

-->

Now create a file called `main.ts` and follow along.

<!-- Catch up for code below.

import { Multiplication } from './math';

let multiplication = new Multiplication();

console.log(multiplication.timesTwo(9));

-- Now try running `main.js`. What happens?

<!--Turn over to devs 11:50, coming back 11:57  WDI6 -->

-->
<!-- 
### Compiling with Gulp
-->
<!--
>**Note:** If you have not covered Gulp yet, you may want to skip this part of the lesson.  Don't worry, webpack does all this work for you with Angular and the Angular CLI.  If you have worked with Gulp before, though, this will help clarify what goes on "behind the scenes".  If you're looking for an intro course on gulp, you can find one [here](https://github.com/ga-wdi-lessons/build-tools).
-->

<!--WDI5 11:32   -->
<!-- QUICK WARNING -- the most recent gulp-typescript 4.0.0-alpha throws a critical error complaining about file base needing to be a non-empty string, can just install gulp-typescript@3 if needed  -->
<!--0:55 10 minutes -->
<!--
Wouldn't it be frustrating if the only way to convert TypeScript into JavaScript was by running `tsc` every time we made a change?  It's too bad there aren't any tools that could do this automatically for us...

...

...just kidding. We can use Gulp!

Let's use Gulp to take this `task` off our hands. While we're at it, we can use Gulp to compile all of our JavaScript into one file to reduce HTTP requests and speed up our website's load time. Awesome, right?

Let's set up our project inside `typeScriptTest` by doing the following:

1) Initialize npm (create a package.json file) using `npm init`.
2) Install and `--save` the following packages: `gulp`, `gulp-typescript`, and `typescript`.
3) Create a new directory called `typescript` and use it to store all of your `.ts` files.

Now create a `gulpfile.js` and set it up to compile our TypeScript into one `.js` file:

- Require all necessary libraries:

```js
var gulp = require('gulp');
var ts = require('gulp-typescript');
```

- Build a default task:

```js
gulp.task('default', function () {
    return gulp.src('typescript/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js',
            module: 'system'
        }))
        .pipe(gulp.dest('scripts'));
});
```

Next, run `gulp` in your work folder to transpile your TypeScript into JavaScript.

Finally, run `node scripts/output.js`. We see all of our files' output. Pretty cool. We only need to include one file in our HTML — but when we're coding, we have several files to keep everything organized in our heads.

>**Note:** What do you think that `noImplicitAny` flag is doing?  How about the `module: 'system'` line?  Try removing them, run gulp, and see how it changes the `output.js` file.  And are there any errors in the terminal?
-->
<!--11:42 WDI5 -->
<!--12:10 WDI6  -->

## Resources

- [Udemy TypeScript Tutorial](https://www.udemy.com/typescript/learn/v4/overview)
- [TypeScript Official Docs](https://www.typescriptlang.org/)
- [TypeScript GitHub](https://github.com/Microsoft/TypeScript)
- [Why Should I](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript) [Use TypeScript?](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- [Gulp Doc for TypeScript](https://www.typescriptlang.org/docs/handbook/gulp.html)
