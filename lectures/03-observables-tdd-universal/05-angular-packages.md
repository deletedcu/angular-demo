![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


<!--WDI4 3:47 -->
<!--WDI6 9:17 -->

# Major Angular Packages Breakdown

You can certainly create a great app with what you've learned! But if you've noticed, we've been importing quite a lot of files.

In this lesson, we'll discuss the most popular and frequently used packages in Angular.

You're not expected to memorize these! They're here for a recap of things you've seen and will see in the future.
- Whenever you need a new tool, searching on a helpful site like StackOverflow will inevitably tell you the right package to install, but it's good to know what the common ones do.

### Why Is This Important?

Angular (and front-end web development in general) can be an intimidating field because there are so many tools to choose from.

By the end of this lesson, we'll have covered the essentials so developers can focus solely on what they need and filter out the rest until later.

### What Are the Objectives?
*After this lesson, you will be able to:*

- List the most important packages in Angular.
- Integrate these packages into an Angular project.

## Feature Packages

### Core

`@angular/core`:
- Critical run-time parts of the framework needed by every application.
- Includes all metadata decorators, Component, Directive, dependency injections, and the component life-cycle hooks.

### Common

`@angular/common`:
- Commonly needed services, pipes, and directives provided by the Angular team.

### Template Compiler

`@angular/compiler`:
- Angular's template compiler. It understands templates and can convert them to code that makes the application run and render.
- Typically, you don’t interact with the compiler directly; rather, you use it indirectly via `platform-browser-dynamic` or the offline template compiler.

### Browser

`@angular/platform-browser`:
- Everything DOM and browser related, especially the pieces that help render into the DOM.
- This package also includes the `bootstrapStatic()` method for bootstrapping applications for production builds that pre-compile templates offline.

### Dynamic Browser

`@angular/platform-browser-dynamic`:
- Includes Providers and a bootstrap method for applications that compile templates on the client.
- Don’t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.

### HTTP

`@angular/http`:
- Angular's HTTP client.

### Router

`@angular/router`:
- Component router.

### Upgrade

`@angular/upgrade`:
- Set of utilities for upgrading AngularJS applications to Angular.

## Polyfill Packages

### Core JS

`core-js`:
- Patches the global context (window) with essential features of ES2015 (ES6).
- You may substitute an alternative polyfill that provides the same core APIs. When these APIs are implemented by the major browsers, this dependency will become unnecessary.

### RxJS

`rxjs`:
- A polyfill for the [Observables specification](https://github.com/tc39/proposal-observable) currently before the TC39 committee that determines standards for the JavaScript language.
- You can pick a preferred version of RxJS (within a compatible version range) without waiting for Angular updates.

### Zone JS

`zone.js`:
- A polyfill for the [Zone specification](https://gist.github.com/mhevery/63fdcdf7c65886051d55) currently before the TC39 committee that determines standards for the JavaScript language.
- You can pick a preferred version of `zone.js` to use (within a compatible version range) without waiting for Angular updates.

## Helper Libraries

### Angular Mock API

`angular-in-memory-web-api`:
- An Angular-supported library that simulates a remote server's web API without requiring an actual server or real HTTP calls.
- Good for demos, samples, and early-stage development (before you even have a server).

### Bootstrap

`bootstrap`:
- Bootstrap is a popular HTML and CSS framework for designing responsive web apps.
- Some of the samples improve their appearance with bootstrap.

## devDependencies

### `lite-server`

`lite-server`:
- A lightweight, static file server by John Papa with excellent support for Angular apps that use routing.

### TypeScript

`typescript`:
- The TypeScript language server, including the `tsc` TypeScript compiler.

### Types for TypeScript

`@types/*`:
- TypeScript definition files.
- Learn more about them in the [TypeScript Configuration guide](https://angular.io/guide/typescript-configuration#typings).

## Pair Programming Activity

Work with a partner to complete the following activity.  

Choose one partner's computer to start with — that partner will be the first driver.

Create a new project with `ng new`.

Find as many of the packages above as possible in your new project. Make sure to note where you find the reference to the package (include the file and line number).

Now that you've found some packages, try to import as many as possible and integrate them into your project. Feel free to use previous lessons as a resource, but avoid copying and pasting.

Make sure you switch drivers halfway through.

## Conclusion

- What does `rxjs` add to Angular?
- What is `lite-server`?


<!--3:56 WDI4, turning over to devs for the activity above (30-40 minutes) -->
<!--WDI6 9:30, coming back from package activity at 9:45 -->

### Resources

- [Major Angular `npm` Packages](https://angular.io/guide/npm-packages)
- [Angular CLI Wiki](https://github.com/angular/angular-cli/wiki)
- [Curated List of Additional Components and Libraries](https://github.com/brillout/awesome-angular-components)
