<!-- 5 minutes (5)-->

<!--Hook: Has anyone here tried fixing a car or complicated appliance?  After two hours, you get the piece back in place, or the wheel on straight.  Then what do you do?  (For me, back up and cross fingers that it works.)  The idea behind TDD is to gain a higher confidence that before we flip that switch, before we try to go 80 miles an hour on the highway, the app we are building does what the customer wants.  

Whether you like it or not, you will have to test your software somehow before you get it to your users.  Today, we'll talk about how to do that *with software itself*.  Woo-hoo, using software to test software!  -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Testing with Angular and Jasmine

![](resources/xzibit_testing_software.jpg)

### Why is this important?

Test Driven Development leads to better code. TDD is extremely helpful when implementing software according to predefined specifications and expectations. Previously, we've run tests and passed them; now, we'll see how to write them.

### What are the objectives?
*After this workshop, developers will be able to:*

- **Write** unit tests using Jasmine `expectations` and `matchers`
- **Define** common Jasmine terms including `describe` and `it`
- **Refactor** tests with `before` and `beforeEach`

### Where should we be now?
*Before this workshop, developers should already be able to:*

- **Program** in Javascript
- **Pass tests** in a TDD manner

<!--5 minutes (10)-->

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

<!-- 10 minutes (20)-->

## Unit vs End-to-end Tests

<!--Ask students to read each paragraph -->

In Angular, there are two main types of tests:

**Unit tests** check the smallest level; the functionality of a specific method (what we'll be discussing mostly today).

**End-to-end tests** explore the application as users experience it; testing for things when users take an action like visiting a page, clicking a link, logging in, etc.

  * A unit test focuses on an individual method. Unit tests are intended to test modular blocks of code to ensure a specific input results in a specific output.

  *End-to-end tests have a much wider focus. You'd use end-to-end testing to make sure a sign-in form works, or that a user who doesn't have admin privileges can see one page, while a user who does have admin privileges can see another page.

You'll see the term **test coverage** pop up pretty often. People are always aiming for "100% test coverage". If your app has 100% test coverage, that means every single method in your app has a unit test verifying that it works.

>For instance, while it's easy and free to write Salesforce apps, Salesforce will only add your app to its "app store" if you've obtained 100% test coverage, and Salesforce's developer team can run your tests and have them all pass.

**What are the reasons testing is so important? Why would employers love it so much?**

We've asked you to write user stories. Writing end-to-end tests is a very similar process. In fact, user stories are very often rewritten as end-to-end tests that describe what the user _should_ see or _should_ be able to do.

When we think of "testing" we tend to think of something you do *after* you've created something, to make sure it works. With TDD, you're encouraged to write the tests *first* before you even start writing actual code.

<!-- Catch-phrase with Unit Tests, End-to-end Tests, TDD, Code Coverage -->

## TDD Review

![TDD Example](resources/tdd_chart.png)

<!--10 minutes (30)-->
<!-- Key point: this is just a demo, devs should NOT clone this repo, it will just confuse them when we move to the exercise -->

## What is Jasmine?

**Jasmine** is a behavior-driven development framework for testing JavaScript code.

Jasmine makes it easier to write tests. Essentially it's a Domain Specific Language for writing live specifications about your code.

> A DSL, "Domain Specific Language", is created specifically to solve problems in a particular domain and is not intended to be able to solve problems outside of it. Other DSLs include HTML or SQL. This is opposed to domain independent languages like Java, C++, Ruby, Python, PHP, JavaScript, Clojure, Rust, Scala, Erlang etc that are Turing complete (can solve any possible computation problem).

## Jasmine Example

Code is available here: [example-jasmine](./resources/example-jasmine)

When `ng test` (and `npm install`) is run in the `example-jasmine` directory, what does it show?

```
8 specs, 0 failures
  AppComponent
    ✓ should create the app
    ✓ should have as title 'app'
    ✓ should render title in a h1 tag
  PersonComponent
    ✓ should be created
    ✓ should have a name
    ✓ should default <language> to 'English'
    greeting
      for default language (English)
        ✓ should offer a greeting in English
      when language is 'Italian'
        ✓ should offer a greeting in Italian
```

We have a Person Component and a Person Component spec (a specification or test). This is the typical Angular convention.  Specs live in the same directory as the component code and are named identically to the component, except for the addition of the `.spec` suffix.

Let's review `person.component.spec.ts`.  This is the specification for a Person.  It indicates how we can expect a Person to function.

<!--Talk through first one, then give devs a minute to discuss with neighbor what the rest of them do, come back and share -->

```typescript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let person: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    person = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(person).toBeTruthy();
  });

  it('should have a name', () => {
    expect(person.personName).toBeTruthy();
  });

  it(`should default <language> to 'English'`, () => {
    expect(person.language).toEqual('English');
  })

  describe('greeting', () => {
    describe('for default language (English)', () => {
      it('should offer a greeting in English', () => {
        expect(person.greeting()).toEqual("Hello, my name is Bob.");
      })
    })
    describe(`when language is 'Italian'`, () => {
      it('should offer a greeting in Italian', () => {
        person.language = "Italian";
        person.personName = "Tony";
        expect(person.greeting()).toEqual("Ciao, mi chiamo Tony.");
      })
    })
  })
});
```

>What does `expect(person.language).toEqual('English');` mean in regular English?

<!-- 15 minutes (45)-->

<!-- Half Mast -->

## Creating a Unit Test using Jasmine

We are going to be creating something similar to the above example. However, we will be writing a spec for a `DogComponent`.

### Set-up

Make a new Angular app in your GA working folder called `dog-house`, `cd` into it and generate a component called `dog`.

Run `ng test`, and you should see a browser open with the following output:

```
4 specs, 0 failures

  App Component
    ✓ should create the app
    ✓ should have as title 'app'
    ✓ should render title in a h1 tag
  DogComponent
    ✓ should be created
```

### Writing our First Specification

Let's spec out our `Dog` with some psuedocode. That's right, we're writing our tests first!

Notice we already have one test written in `dog.component.spec.ts`.  We're going to write one just below that.  All tests in Jasmine are contained within an `it` block.  Let's make that new block:

**dog.component.spec.ts**

```typescript
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  //Add this
  it('should have a name');
```

What is is the output of `ng test` now? We should get something like `5 specs, 0 failures, 1 pending spec`, saying that our specification is not yet implemented.

Now add a callback function to our new `it` block.

```typescript
  it('should have a name', () => {
    
  });
```

Look at the `ng test` output again. All our tests are passing!  But why?  Our dog shouldn't have a name yet.

Our tests passed because Jasmine will evaluate a test as passing as long as no errors are thrown.

Let's make our specs actually test something.

```typescript
  it('should have a name', () => {
    expect(component.dogName).toBeTruthy();
  });
```

> Expectation: `expect(component.dogName)` 

> Matcher: `toBeTruthy()`

We use the pattern `expect(IUT)` to "wrap" the ***Item Under Test***, so that it supports the `toBeTruthy` method.  There are many other methods we can use like `toEqual` or `toBeUndefined`.

[Jasmine Cheatsheet with Assertion Reference](http://ricostacruz.com/cheatsheets/jasmine.html)

If you look in the terminal tab that is running `ng test` you will see some red text.  Yay, we're failing!

Does the property `dogName` exist? Let's give our component just enough code to satisfy the current (minimal) specifications.

**dog.component.ts**

```javascript
export class DogComponent implements OnInit {

  dogName = "Fido";

  ...
```

We did it!  Now everything is green again.

<!-- End half-mast, stress "pending", "failing", "passing" order -->

<!-- Half-mast again -->

## More expectations!

<!-- 20 minutes (65)-->

### Challenge: Hungry Dog

<!-- Half-mast -->

Add an expectation to the dog that "allows the reading of a hunger level". This test should check for a `hungerLevel` property in the component that is equal to `0` by default.  When complete, ensure the tests are written correctly by watching them fail in the terminal. Finally implement the code that passes the new expectation.

Add another expectation to the dog that "allows the writing of a hunger level", and follow the same pattern as with the earlier expectation.  This test should set the `hungerLevel` property in the component to `5`, and then check that it is equal to `5` after it is set.  

<!-- End half-mast -->

### Feeding the Dog

<!-- Half-mast -->

Let's implement a method `eat` which decrements a dog's hunger level when invoked. How would we translate this specification into Jasmine tests?

**dog.component.spec.ts**

```javascript
  ...
  describe('eat', () => {
    it('decrements the hunger level when invoked', () => {
      component.hungerLevel = 5;
      component.eat();
      expect(component.hungerLevel).toEqual(4);
    })
  })
```

<!-- End half-mast -->

### Challenge: Teach the Dog to Eat

Write the code that passes the above specifications.

### Edge Case

<!-- Half-mast -->

Imagine we want the eat method to behave differently in different contexts. For example, if the dog is not hungry and has a `hunger_level` of `0`, we don't want the eat method to continue decrementing. In order to set up different scenarios or contexts in our specifications, we can use a different `describe` block.

**dog.component.spec.ts**

```javascript
describe("Dog", function() {
  ...
  describe('eat', () => {
    describe('when dog is hungry', () => {
      it('decrements the hunger level when invoked', () => {
        component.hungerLevel = 5;
        component.eat();
        expect(component.hungerLevel).toEqual(4);
      })
    })
    describe('when dog is NOT hungry', () => {
      it('does NOT decrement the hunger level when invoked', () => {
        component.hungerLevel = 0;
        component.eat();
        expect(component.hungerLevel).toEqual(0);
      })    
    })
  })
});
```

<!-- End half-mast -->

### Challenge: Don't Over Eat

Write the code to pass the above specs!

<!-- 5 minutes (70)-->

### Before Blocks

Any time you see the same line written twice or more in a test suite, you can use one of two methods to DRY out your code

- Note the `beforeEach()` blocks that are used to reset the component before every test.  `beforeEach()` blocks execute the lines within their callback function **before every new test**.

- `before()` blocks are similar, but they only run once, **before all tests**.

### A Final Word on End-to-end tests

While Angular uses the **Jasmine** framework for unit tests, it uses **Protractor** to write end-to-end tests.

In e2e testing, one process runs the real application and a second process runs protractor tests that simulate user behavior and assert that the application respond in the browser as expected.

If you would like to dive deeper into end-to-end tests, you may want to look at [this tutorial](https://blog.jscrambler.com/getting-started-with-angular-2-end-to-end-testing/).

<!--5 minutes (75)-->

## Closing

### Quiz Questions:

- What is the purpose of Unit testing?
- Explain what role Jasmine plays in testing.
- How can `before` and `beforeEach` be helpful?
- What does Angular use to write end-to-end tests by default?


### Additional Resources
- [Jasmine Documentation](https://jasmine.github.io/2.4/introduction.html)
- [Testing with Angular](https://angular.io/guide/testing)
- [Protractor and End-to-end Testing Tutorial](https://blog.jscrambler.com/getting-started-with-angular-2-end-to-end-testing/)