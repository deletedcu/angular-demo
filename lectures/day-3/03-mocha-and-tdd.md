<!-- WDI3 1:48 (survey takes about 20 minutes) -->

<!-- 1:30 5 minutes -->

<!--Hook: Has anyone here tried fixing a car or complicated appliance?  After two hours, you get the piece back in place, or the wheel on straight.  Then what do you do?  (For me, back up and cross fingers that it works.)  The idea behind TDD is to gain a higher confidence that before we flip that switch, before we try to go 80 miles an hour on I-25, the app we are building does what the customer wants.  

Whether you like it or not, you will have to test your software somehow before you get it to your users.  Today, we'll talk about how to do that *with software itself*.  Woo-hoo, using software to test software!  -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Testing with Mocha

![](resources/xzibit_testing_software.jpg)

### Why is this important?

Test Driven Development leads to better code. TDD is extremely helpful when implementing software according to predefined specifications and expectations. Previously, we've run tests and passed them; now, we'll see how to write them.

### What are the objectives?
*After this workshop, developers will be able to:*

- **Write** unit tests using Mocha and Chai `expectations` and `matchers`
- **Define** common Mocha terms including `describe`, `context`, and `it`
- **Refactor** tests with `before`

### Where should we be now?
*Before this workshop, developers should already be able to:*

- **Program** in Javascript
- **Pass tests** in a TDD manner

<!--WDI3 1:52 -->
<!--1:35 5 minutes -->

## Do You Test?

#### Place yourselves somewhere in the following ranges:

* I have used TDD **or** I have never used TDD

* I love the idea of TDD **or** I hate the idea of TDD

#### Thoughts:

<!--Have devs think about this as they sit down, then ask if they have anything to add after reading the list below -->

* For those of you who are negative to testing, why? What did you or would you do instead?
* For those of you who are positive to testing, why? What problems did it solve?

<details><summary>Some possible responses...</summary>

<!--Ask one student to read Cons, one to read Pros, add any they think are missing -->

* Cons
 * **Time.** It's a waste of my time and effort to test.
 * **It's too much.** I can test just fine using the console.
 * **App complexity.** My app is too simple to require testing.
* Pros
 * **Bug detection.** Quickly identify unanticipated errors.
 * **Code Quality.** Create standards for our code before writing it.
 * **Time.** Shorten development time through bug detection; allows for [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
 * **Documentation.** Tests act as a documentation of sorts for how our code should work. Helpful to other developers and shareholders.
 * **Jobs.** Testing is a job requirement across the board.

</details>

<!--WDI3 1:57 -->
<!-- 1:40 10 minutes -->

## Unit vs Acceptance Tests

<!--Ask students to read each paragraph -->

**Unit tests** check the smallest level; the functionality of a specific method (what we'll be discussing mostly today).

**Acceptance tests** verify our apps at the level of user interaction; testing for things when users take an action like visiting a page, clicking a link, logging in, etc.

  * A unit test focuses on an individual method. Unit tests are intended to test modular blocks of code to ensure a specific input results in a specific output.

  * Acceptance tests have a much wider focus. You'd use acceptance testing to make sure a sign-in form works, or that a user who doesn't have admin privileges can see this page, while a user who does have admin privileges can see that page.

You'll see the term **test coverage** pop up pretty often. People are always aiming for "100% test coverage". If your app has 100% test coverage, that means every single method in your app has a unit test verifying that it works.

>For instance, while it's easy and free to write Salesforce apps, Salesforce will only add your app to its "app store" if you've obtained 100% test coverage, and Salesforce's developer team can run your tests and have them all pass.

**What are the reasons testing is so important? Why would employers love it so much?**

We've asked you to write user stories. Writing acceptance tests is a very similar process. In fact, user stories are very often rewritten as acceptance tests that describe what the user _should_ see or _should_ be able to do.

When we think of "testing" we tend to think of something you do *after* you've created something, to make sure it works. With TDD, you're encouraged to write the tests *first* before you even start writing actual code.

<!-- Catch-phrase with Unit Tests, Acceptance Tests, TDD, Code Coverage -->

## TDD Review

![TDD Example](resources/tdd_chart.png)

<!--2:00 but 5 minutes for project 2 in WDI2-->

<!--WDI3 2:06  -->
<!--1:50 10 minutes -->
<!-- Key point: this is just a demo, devs should NOT clone this repo, it will just confuse them when we move to the exercise -->

## What is Mocha?

**Mocha** is a testing framework for the Javascript programming language.

Mocha makes it easier to write tests. Essentially it's a Domain Specific Language for writing live specifications about your code.

> A DSL, "Domain Specific Language", is created specifically to solve problems in a particular domain and is not intended to be able to solve problems outside of it. Other DSLs include HTML or SQL. This is opposed to domain independent languages like Java, C++, Ruby, Python, PHP, JavaScript, Clojure, Rust, Scala, Erlang etc that are Turing complete (can solve any possible computation problem).

## Mocha Example

Code is available here: [example-tests](./resources/example-tests)

When `mocha` is run in the `example-tests` directory, what does it show?

```
  Person
    Constructor
object
      ✓ should create a new object
      ✓ should have a name
      ✓ should default <language> to 'English'
    greeting
      for default language (English)
        ✓ should offer a greeting in English
      when language is 'Italian'
        ✓ should offer a greeting in Italian


  5 passing (12ms)
```
Let's review `test/person_spec.js`.  This is the specification for a Person.  It indicates how we can expect a Person to function.

```
example-tests/
├── models
│   └── person.js
└── test
    └── person_spec.js

2 directories, 3 files
```

We have a Person model and a Person spec (a specification or test). This is the typical Mocha convention.  Specs live under the test directory and echo the models in our system with the `_spec` suffix.

Let's look further into `person_spec.js`

<!--Talk through first one, then give devs a minute to discuss with neighbor what the rest of them do, come back and share -->

```javascript
var Person = require('../models/person');  // a reference to our model
var expect = require('chai').expect; // requiring the `expect` command

describe("Person", function() {
  describe("Constructor", function() {
    var matt = new Person("Matt");
    it("should create a new object", function() {   
      expect(typeof(matt)).to.equal("object");
    });
    
    it("should have a name", function() {
      expect(matt.name).to.not.be.empty;
    });

    it("should default <language> to 'English'", function() {
      expect(matt.language).to.equal("English");
    });
  });

  describe("greeting", function() {
    context("for default language (English)", function() {
      var bob = new Person("Bob");
      it("should offer a greeting in English", function() {
        expect(bob.greeting()).to.equal("Hello, my name is Bob.");
      })
    });
    context("when language is 'Italian'", function() {
      var tony = new Person("Tony", "Italian");
      it("should offer a greeting in Italian", function() {
        expect(tony.greeting()).to.equal("Ciao, mi chiamo Tony.");
      });
    })
  })
});

```

>What does `expect(typeof(matt)).to.equal("object");` mean in regular English?

<!--2:14 -->

<!--WDI3 2:14 just walked through not much dev input -->
<!-- 2:00 30 minutes -->

<!-- Half Mast -->

## Creating a Unit Test using Mocha

We are going to be creating something similar to the above example. However, we will be writing a spec for creating a new Javascript constructor for `Dog`.

### Set-up

Make a new directory in your GA working folder called `dog`, `cd` into it and `npm init -y`.

#### Install Mocha

The first thing we'll do is install two packages called `mocha` and `chai`. To do this, just type the following command in your `dog` folder:

```sh
npm install --save-dev mocha chai
```

>After running `mocha`, you should get a message saying `Error: cannot resolve path (or pattern) 'test'`. It's saying, "You haven't written any tests for me to run!"

<!--2:20 WDI3 -->

#### Set up the directory

Make a `test` directory.

Inside the `test` directory, add a file called `dog_spec.js`. Additionally, create a `models` directory and a file inside it, `dog.js`, where we will define our class `Dog`.

### Writing our Specification

Let's start defining the design of our program with certain specifications. Let's spec out our `Dog` with some psuedocode. That's right, we're writing our tests first!

**/spec/dog_spec.js**

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {

});
```

We will spec-out or `describe` our `Dog`. A `describe` block is commonly used to split up a set of tests into sections with a specific focus.

Now let's run `mocha`. What happened?

Does the file it's requiring exist?

Make the file and run the tests again. What happens this time?

<!--2:27 WDI3-->
<!-- End half-mast, devs catch up -->

**/spec/dog_spec.js**

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
 describe("new", function() {
  
 });
});
```

Now we can start writing out some specifications related to the `new` method using an `it` block.

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
 describe("new", function() {
  it("initializes a new dog");
 });
});
```

What is is the output now? We should get something like `0 passing (6ms) 1 pending`, saying that our specification is not yet implemented.

Now add a callback function to the first `it` line.

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
 describe("new", function() {
  it("initializes a new dog", function() {
  
  });
 });
});
```

>Run `mocha` again. Our tests passed because Mocha will evaluate a test as passing as long as no errors are thrown.

Let's make our specs actually test something.

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
 describe("new", function() {
  it("initializes a new dog", function() {
      var fido = new Dog();
      expect(typeof(fido)).to.equal("object");
  });
 });
});
```

> Expectation: `expect(typeof(fido)).to` 

> Matcher: `be.equal("object")`

We use the pattern `expect(IUT)` to "wrap" the ***Item Under Test***, so that it supports the `to` method which then runs an assertion like `equal` or `empty`.

[Mocha Expect Assertion Reference](http://chaijs.com/api/bdd/)

Does the function `Dog` exist? Let's give it just enough code to satisfy the current (minimal) specifications.

**/models/dog.js**

```javascript
function Dog() {

}

module.exports = Dog;
```

<!-- End half-mast, stress "pending", "failing", "passing" order -->
<!--2:34 WDI3 turning over to devs -->
<!--2:40 when coming back WDI3-->

<!-- Half-mast again -->

## More expectations!

### Naming your Dog

Let's give our dogs a `name` when we create one. As usual, let's first start with the specfication.

```javascript
describe("Dog", function() {
  ...
  describe("name", function() {
    it("allows the reading and writing of a name", function() {
      var fido = new Dog("Fido");
      expect(fido.name).to.equal("Fido");
    });
  });
});
```

<!-- End half-mast -->

>What is the minimal code one could write to pass these specifications?

<!--2:55 really WDI2-->
<!--WDI3 2:47 -->
<!-- 2:30 15 minutes -->

### Challenge: Hungry Dog

<!-- Half-mast -->

Add an expectation to the dog that "allows the reading and writing of a hunger level". When complete, ensure the tests are written correctly by watching them fail. Finally implement the code that passes the new expectation.

<!-- End half-mast -->

### Feeding the Dog

<!-- Half-mast -->

Let's implement a method `eat` which decrements a dog's hunger level when invoked. How would we translate this specification into Mocha tests?

**/spec/dog_spec.rb**

```javascript
describe("Dog", function() {
  ...
  describe("eat", function() {
    it("decrements the hunger level when invoked", function() {
      var fido = new Dog("Fido");
      fido.hungerLevel = 5;
      fido.eat();
      expect(fido.hungerLevel).to.equal(4);
    });
  });
});
```

<!-- End half-mast -->

### Challenge: Teach the Dog to Eat

Write the code that passes the above specifications.

<!--2:56 WDI3 -->
### Context

<!-- Half-mast -->

Imagine we want the eat method to behave differently in different contexts. For example if the dog is not hungry and has a `hunger_level` of `0`, we don't want the eat method to continue decrementing. In order to set up different scenarios or contexts in our specifications, we can use the `context` keyword. Generally, context blocks are a *"nice to have"* in testing and improve **organization** and **readability**.

Use `describe` for "things" and `context` for "states.

**/spec/dog_spec.rb**

```javascript
describe("Dog", function() {
  ...
  describe("eat", function() {
    context("when dog is hungry", function() {
      it("decrements the hunger level when invoked", function() {
        var fido = new Dog("Fido");
        fido.hungerLevel = 5;
        fido.eat();
        expect(fido.hungerLevel).to.equal(4);
      });
    });
    context("when dog is NOT hungry", function() {
      it("does NOT decrement the hunger level when invoked", function() {
        var fido = new Dog("Fido");
        fido.hungerLevel = 0;
        fido.eat();
        expect(fido.hungerLevel).to.equal(0);
      });
    });    
  });
});
```

<!-- End half-mast -->

### Challenge: Don't Over Eat

Write the code to pass the above specs!

<!-- 3:08 WDI3 -->
<!-- 2:45 10 minutes -->

## Refactoring

Do you see any opportunities to refactor? Identify them...

<!-- Give devs a minute to see repeated or poorly-organized code -->

```javascript
var Dog = require("../models/dog");
var expect = require("chai").expect;

describe("Dog", function() {
 describe("new", function() {
  it("initializes a new dog", function() {
    var fido = new Dog();
    expect(typeof(fido)).to.equal("object");
  });
  describe("name", function(){
    it("allows the reading and writing of a name", function() {
      var fido = new Dog("Fido");
      expect(fido.name).to.equal("Fido");
    });
  }); 
  describe("eat", function() {
    context("when dog is hungry", function() {
      it("decrements the hunger level when invoked", function() {
        var fido = new Dog("Fido");
        fido.hungerLevel = 5;
        fido.eat();
        expect(fido.hungerLevel).to.equal(4);
      });
    });
    context("when dog is NOT hungry", function() {
      it("does NOT decrement the hunger level when invoked", function() {
        var fido = new Dog("Fido");
        fido.hungerLevel = 0;
        fido.eat();
        expect(fido.hungerLevel).to.equal(0);
      });
    });  
  }); 
 });
});
```

How many times are we writing `fido = new Dog()`? It seems we'll have to do that at the beginning of most specifications.

<!--Half-mast -->

### Before Blocks

We can refactor the above code with a `before` block in order to setup the state of our dog by calling a few methods on it.

```javascript
describe("Dog", function() {
 var fido;
 before(function() {
 	fido = new Dog("Fido");
 });
 describe("new", function() {
  it("initializes a new dog", function() {
    expect(typeof(fido)).to.equal("object");
  });
  describe("name", function(){
    it("allows the reading and writing of a name", function() {
      expect(fido.name).to.equal("Fido");
    });
  }); 
  describe("eat", function() {
    context("when dog is hungry", function() {
      it("decrements the hunger level when invoked", function() {
        fido.hungerLevel = 5;
        fido.eat();
        expect(fido.hungerLevel).to.equal(4);
      });
    });
    context("when dog is NOT hungry", function() {
      it("does NOT decrement the hunger level when invoked", function() {
        fido.hungerLevel = 0;
        fido.eat();
        expect(fido.hungerLevel).to.equal(0);
      });
    });  
  }); 
 });
});
```

<!-- End half-mast -->

>Note: you can also run `beforeEach()` to execute the lines within the `function(){}` for every new test.

<!--WDI 3:17 no time for catch-up on before block -->
<!--2:55 5 minutes -->

## Closing

### Quiz Questions:

- What is the purpose of Unit testing?
- Explain what role Mocha plays in testing.
- How do `describe` and `context` differ?
- How can `before` be helpful?

<!--3:25 WDI3 -->

<!--15 minutes -- Probably a good idea to move this, and potentially even the refactor section to the following day

## Challenge: Cereal Robot Exercise

[Watch this video](https://www.youtube.com/watch?v=E2evC2xTNWg).

Split up into groups of 3 or 4. For 15 minutes, on a whiteboard, work with your group to draft the unit tests for this cereal-delivering robot.

Goal: When all the tests pass, that means the robot works. However, you're only writing **pending** tests -- don't actually write the code that would make the tests pass.

Constraints: Try to write everything as `describe`, `context`, and `it` blocks.
-->

### Additional Resources
- [Mocha Documentation](https://mochajs.org/)
- [Getting Started with Node and Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
- [Chai Expectations](http://chaijs.com/api/bdd/)
- [Mocha Cheat Sheet](resources/testing_cheat_sheet.md)