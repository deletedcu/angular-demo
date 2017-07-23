![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Major Angular Packages Breakdown

In this lesson, we will discuss the most popular and frequently used packages in Angular.

### Why is this important?

Angular, and front-end web development in general, can be an intimidating field because there are so many tools to choose from.

By the end of this lesson, we will cover the essentials so developers can focus on just what they need, and filter out the rest until later.

### What are the objectives?
*After this workshop, developers will be able to:*

- **List** the most important packages in Angular
- **Integrate** these packages into an Angular project

## The Top 10

### Core

@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.

### Common

@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.

### Template Compiler

@angular/compiler: Angular's Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you don’t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.

### Browser

@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.

### Dynamic Browser

@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Don’t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.

### HTTP

@angular/http: Angular's HTTP client.

### Router

@angular/router: Component router.

### Upgrade

@angular/upgrade: Set of utilities for upgrading AngularJS applications to Angular.

### Resources

- [Major Angular npm Packages](https://angular.io/guide/npm-packages)