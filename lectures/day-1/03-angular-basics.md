[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Angular Basics

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.png)

**Angular** is the most superior front-end framework. All other front-end frameworks fall before the might of Angular.

## Objectives

By the end of this, developers should be able to:

-   Explain what the Angular CLI is
-   Download and install `@angular/cli` and scaffold a new Angular app
-   Understand the basics of how an Angular app is composed

## What is the Angular CLI?

The Angular CLI (command line interface) is a tool that allows us to serve up our Angular app, run tests and generate code. In the recent past, we had to install our own web servers, set up our own testing and bundling infastructure and write all of our own code. Those days are dead! The Angular CLI will be our one stop shop for all of the tools and tasks we need to build up our web app.

## Install `@angular/cli`


Let's install it globally:

```sh
npm install -g @angular/cli
```

To verify that everything is working, run the command `ng -v`. You should see
a response more or less like this.

```bash
@angular/cli: 1.2.7
node: 8.1.4
os: darwin x64
```

## From nil to Angular App in 5 Seconds

The Angular CLI let's us quickly scaffold a application and run it.

Type:

```bash
ng new ga-ui
```

Then let's move into the repo:

```bash
cd ga-ui
```

. . . and we should be able to run our web app immediately!

```bash
ng serve
```

## Angular Twooling

Before we dive into the structure of the app, let's quickly go over all of the built-in tooling provided to us.

To run our app (and lint and watch):

```bash
ng serve
```

To run our unit tests:

```bash
ng test
```

To run our linter:

```bash
ng lint
```

There are a bunch of other tools available, each with many, many configurations. To see a full list, type:

```bash
ng help
```

## Angular 2 Application Structure

Our scaffolded application looks like this:

```bash
├── README.md
├── node_modules
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

At the root of our application, we have a README, a folder for our end-to-end tests, the source folder where our code will live and a series of configuration files. These config files relate to TypeScript and the linting thereof. We will not be touching any files that live here, or the end-to-end folder.

In **src**, we find all of the files of importance to us, and a few more configuration files we will be ignoring.

We have our **index**, which, like with most web frameworks, we will largely leave untouched.

We have a few more TypeScript and test configuration files, which suit us as is.

We have a polyfill file, which the Angular CLI mercifully supplies to us to make sure our code works well on all browsers.

We have **main.ts**, where our app is bootstrapped. This file is very important, but works just fine as is.

And we have an app folder, which houses our first component. We will take a deeper dive into this folder in a minute.

## Starting from our bootstraps

Let's take a look at **main.ts**:

```TypeScript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

We have the modularity of Angular 2 on display here. We pluck a few modules from Angular 2 and **the component we generated**, then we bootstrap our module to make it the root of our application. Advanced Angular devs can tweak this bootstrapping process for specific requirements that their projects have, but all we care about here is that the last line is where our component becomes an application.

## Our root component

At this point, you may be asking yourself "but where does the code that I write live?" For that, we turn to our root component, the app component, in the app folder.

With **app.component.html**, we see our first Angular 2 template.

```html
  <h1>
    Welcome to {{title}}!
  </h1>
```

Notice that Angular uses a double bracket syntax to bind Javascript expressions, which is the same as Ember and similar to Handlebars if you have used either of those before.  This will come in handy very soon.

The beating heart of our component exists in **app.component.ts**.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

Our component's `selector` is the name of the html element we use to summon the component in our templates. If you look at our index, you will see:

```html
<app-root></app-root>
```

Finally, our app component is neatly packaged up to be exported, and then bootstrapped in **app.module.ts**.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Testing It Out

Browse to `http://localhost:4200` in your browser and see your default application.

Go into `app.component.ts` and change the `title` variable value to `My Website`.

Go back to your browser and you will see your new title.

## Wrapping Up

By now, you should have a broad, but shallow understanding of how an Angular app is put together. We covered a lot of ground very quickly this lesson, so don't worry if you're not ready to remake Facebook in Angular yet. In the coming lessons, we will flesh out your understanding, so you'll be ready to go out and conquer the world of front end development.

## References

-   [Angular-cli github page](https://github.com/angular/angular-cli)
-   [Official Angular Documentation](https://github.com/angular/angular-cli)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
