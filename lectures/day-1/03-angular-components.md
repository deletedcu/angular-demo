[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Angular 2 - Components & Modules

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.png)

Keeping our code DRY and KISS compliant through the use of Angular components.

## Objectives

By the end of this, developers should be able to:

-  Use the Angular CLI to generate a new components
-  Use simple directives to make a component dynamic and interactive
-  Generate and use services to abstract out business logic
-  Use feature modules to organize their code

## Angular Components

We've floated around the term 'component' a lot today, but what exactly is a component?

Generally speaking, a component is a re-usable piece of code that addresses a specific concern. When developers separate their concerns successfully, the result is a series of re-usable components that can be composed differently to create whole new applications.

Angular 2 leans heavily into component structure. Everything is a component.

![Component Tree](https://i.stack.imgur.com/sV364.png)

What does an Angular 2 component look like though?

Our 'app' component is composed of five files:

```bash
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.module.ts
```

Besides the module file, which can be unique to the root component, the Angular 2 dev team wants **all of our components to be a subset of this structure**. Ubiquity is the name of the game.

In **app.component.css**, we will put all of the styles that pertain to our component. These styles **are scoped exclusively to their component.** Sick of namespacing your styles to avoid collisions? Angular 2 has you covered.

All of our unit tests for the component will live in **app.component.spec.ts**. We won't dive into testing too much, but Angular 2 natively supports the Jasmine testing framework.

With **app.component.html**, once again, we see an Angular template.

```html
<h1>
  {{title}}
</h1>
```

Angular uses a double bracket binding syntax, which is pretty common among front end frameworks and template libraries.

The values in brackets will be replace by values in our next file, **app.component.ts**.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
```

Here we see the definition of our component class. We see our first use of a **decorator**. Decorators are a useful tool that TypeScript gives us that allows us to add additional metadata to classes and class properties.

Our component's selector, is the name of the html element we use to summon the component in our templates. If you look at our index, you will see:

```html
<app-root>Loading...</app-root>
```

That's our component!

The next two properties of our component decorator argument are relative paths to the template and the stylesheet for the component.

These metadata properties are added to our component class at runtime. For a full list of metadata properties that our component decorator recognizes, [check out the documentation](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html).

In the class itself, we see one property being set. The scope of an instance of this class will serve as the view model for our component. That 'title' we saw earlier in the template will be bound to the value of our instance's 'title' property.

![Angular 2 Components](https://angular.io/generated/images/guide/architecture/component-databinding.png)

And that's it! We've reviewed all of the working parts of 95% of Angular components. Our first component may be exceedingly simple, but we'll add more spice to our components in the following sections.

### Code-Along: Our Second Component

Let's work together to add a second component, MasterSword, to our fledgling app. The Angular CLI makes this a breeze.

In your terminal, in the root of this application directory, type:

```bash
ng g c master-sword
```

You should see console output like so:

```bash
installing component
  create src/app/master-sword/master-sword.component.css
  create src/app/master-sword/master-sword.component.html
  create src/app/master-sword/master-sword.component.spec.ts
  create src/app/master-sword/master-sword.component.ts
  update src/app/app.module.ts
```

Boom! The Angular CLI does most of the heavy lifting for us. It creates a new component directory nested within the root component directory, and fills it out with all of the files that will compose our new component.

Also, if we turn to our **app.module.ts**, we will see that the component has already been declared for us!

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MasterSwordComponent } from './masterSword/master-sword.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterSwordComponent
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

Let's give our template some flavor:

```html
<h1>{{proclamation}}</h1>
<img src="http://vignette1.wikia.nocookie.net/zelda/images/f/fa/Master_Sword_Artwork_(Skyward_Sword).png/revision/latest">
```

Make our implicitly-scoped stylesheet spicy:

```css
h1 {
  background-color: red;
}
```

And modify our component view-model slightly:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  ***proclamation: string = 'Behold! The Master Sword!';***

  constructor() { }

  ngOnInit() {
  }

}
```

And use it in **app.component.html**!

```html
<app-master-sword></app-master-sword>
```

### Lab: Make your own component

Use the Angular CLI to generate a 'hylian-shield' component. Have the component display a picture of a hylian shield and text that reads 'Behold! The Hylian Shield!'. If you have extra time, play around with the directives listed in the [Angular Cheatsheet](https://angular.io/guide/cheatsheet).

## Services: Abstracting and Reusing business logic

All of the components we've looked at so far have been pretty basic. They have merely bound hardcoded data from our component classes to their corresponding templates. What if we want to write code that multiple different components can use?

With services, we get a way to abstract out business logic into a form that allows us to use it anywhere in our app. At boot, our app creates a single instance of the service, and through a few lines of code we are about to learn, we can inject this instance wherever we want.

### Code-Along: Our first service

We have two components that render different items at the moment, but what if we want both of those items to be owned by the same person? We could either hardcode our information in both components (bad!) or use a service to share the logic (good!).

Let's go behind door number two.

First, let's create a directory to house all of our services for our app:

```bash
mkdir src/app/services
```

Then create a directory to house our specific service:

```bash
mkdir src/app/services/user
```
Now, with our scaffolding in place, we can generate our service:

```bash
cd src/app/services/user
ng g s user
```

You should see this console output:

```bash
installing service
  create src/app/services/user/user.service.spec.ts
  create src/app/services/user/user.service.ts
  WARNING Service is generated but not provided, it must be provided to be used
```

Our generator created our service and a test file for the service. It is also warning us that we still need to **provide** our service to use it. Let's go ahead and do that!

You may have noticed an empty **providers** array property in our **app.module** when we first looked at it. If we add a reference to our service class to our array:

```typescript
***import { UserService } from './services/user/user.service';***

@NgModule({
  declarations: [
    AppComponent,
    MasterSwordComponent,
    HylianShieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ***UserService***
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Our application will create a single instance of our service on boot, and will allow us to inject that instance into as many of our components (and other angular entities) as we want.

Our service is pretty useless at the moment, so let's add a method:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsername(): string {
    return 'Link';
  }

}
```

Our new method approximates an AJAX request (don't worry, we'll get to that in a later lesson) and returns something useful to both of our components.

Returning to our master-sword component, we can now inject the service by importing the service class into our file and modifying the constructor:

```typescript
import { Component, OnInit } from '@angular/core';

***import { UserService } from './../services/user/user.service';***

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  proclamation: string = 'Behold! The Master Sword!';

  ***constructor(private userService: UserService) { }***

  ngOnInit() {
  }

}
```

A bit of typescript magic will automatically glob on our service as a property of our component, which allows us to make these modifications:

```typescript
export class MasterSwordComponent implements OnInit {

  **proclamation: string;**
  **username: string;**

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUsername();
    this.proclamation = `Behold! ${this.username}'s Master Sword!`;
  }

}
```

And there you have it! We have injected our new service into our component, and used it's logic to enrich our component.

## Lab: Our second injection

Use our new service to update the 'hylian-shield' component in the same manner that we just updated our 'master-sword' component.


## Feature Modules: Adding organization to unruly codebases

Our current app is small, but I invite you to imagine what an a mature application running in production would look like. We could have hundreds of components and dozens of services vying for your attention. Now imagine coming into the project for the first time and trying to make sense of the madness. Not a fun prospect, eh?

With Angular modules, we get another chance to namespace our code and provide a layer of organization for developers to make sense of it with.

Let's see the theory in practice by abstracting out the code we've written so far into a feature module.

We can use our truly incredible Angular CLI to generate the scaffolding:

```bash
ng g m equipment
```

Next, for organizations sake, let's move our existing components into our new module directory:

```bash
mv src/app/master-sword src/app/equipment
mv src/app/hylian-shield src/app/equipment
```

And declare and export them in our new feature module:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

***import { MasterSwordComponent } from './master-sword/master-sword.component';***
***import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';***

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ***MasterSwordComponent,***
    ***HylianShieldComponent***
  ],
  exports: [
    ***MasterSwordComponent,***
    ***HylianShieldComponent***
  ]
})
export class EquipmentModule { }
```

Now we need to remove references to the individual components from import our main **app.module** and replace them by importing our feature module:

```typescript
---import { MasterSwordComponent } from './master-sword/master-sword.component';---
---import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';---

+++import { EquipmentModule } from './equipment/equipment.module';+++

@NgModule({
  declarations: [
    AppComponent,
    ---MasterSwordComponent,---
    ---HylianShieldComponent---
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    +++EquipmentModule+++
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

If everything worked correctly, our app will render exactly the same, while our app component will look less cluttered!

## References

-   [Angular-cli github page](https://github.com/angular/angular-cli)
-   [Official Angular Documentation](https://github.com/angular/angular-cli)
-   [Angular Components](https://angular.io/api/core/Component)
-   [Angular Services Example](https://angular.io/tutorial/toh-pt4)
-   [Angular Modules](https://angular.io/guide/ngmodule)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
