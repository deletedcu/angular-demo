[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Angular 2: Directives

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.png)

## Objectives

By the end of this lesson, you will be able to:

- Describe what a **directive** is.
- Use directives like `ngFor` and `ngIf`.
- Use Angular pipes.

### Directives

As you've seen, Angular is dynamic. When Angular renders a webpage, it transforms the DOM according to the instructions given by **directives**. This is a word tossed around in Angular often, so it's good to know what they are!

### [What is a directive?](https://angular.io/guide/structural-directives)

- A **directive** is a marker on a DOM element (such as an attribute, element name, comment or CSS class) that tells Angular to attach a specified behavior to that DOM element (e.g. via event listeners like `click` or `change`), or even to transform the DOM element and its children.

>**TLDR:** It is a piece of HTML that allows you to do Javascript things.

## Fun with Directives

Create a new Angular app with `ng new` called `directives-fun`.

Now go into `app.component.ts` and add the following code:

```javascript
export class AppComponent {
  title = 'app';
  pokemon = [
    {
      Ndex: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      Ndex: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      Ndex: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      Ndex: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      Ndex: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];
}
```

Now, let's put those pokemon in our app!

Go into `app.component.html` and add the following:

```html
<div>
  <h1>
    Welcome to {{title}}!
  </h1>
  <pre>{{pokemon|json}}</pre>
</div>
```

Sweet! Look at those pokemon!  But what is that `|` thing?

## Pipes

A **pipe** (`|`) takes in data as input and transforms it to a desired output.

With Angular, we can use a ton of pre-made pipes like the `json` formatter above.  We can even pass in parameters to some of them, or even create our own from scratch!

To learn more, check out [this documentation](https://angular.io/guide/pipes) on pipes.

## Components

In the previous class, we talked about components.  A component is technically a directive, too.  But components are so distinctive and central to Angular applications that generally, developers think of directives and components as distinct entities.

In addition to components, there are two other kinds of directives: structural and attribute directives.

## Structural Directives

Structural directives change which elements are in the DOM (adding or removing them).
- For example, here is a structural directive called `*ngFor`: `<li *ngFor="let hero of heroes"></li>`.
- In this example, `ngFor` tells Angular to print one `<li>` per `hero` in the `heroes` list (a `for` loop, running through `heroes` with `let... of ...`).

### Pokemon `ngFor`

So all of those Pokemon are on the screen, but it's not the most user-friendly format.  Let's say we want to print out all of the Pokemon in a bullet list.  First, let's say the singular form of "pokemon" is "poke".  Now let's get `ngFor` in there:

`app.component.html`

```html
<div>
  <h1>
    Welcome to {{title}}!
  </h1>
  <pre>{{pokemon|json}}</pre>
  <ul>
    <li *ngFor="let poke of pokemon">{{poke.name}}</li>
  </ul>
</div>
```

Look at that!  With one line, we printed out all our pokemon names!

## Attribute Directives

Attribute directives change the appearance or behavior of an existing element.
- For example, here is an attribute directive called `ngModel`: `<input [(ngModel)]="hero.name">`
- In this example, `ngModel` changes what's displayed on the `<input>` based on the current `hero.name`. Unlike structural directives, the attribute directive `ngModel` isn't adding or removing the `<input>` - it's simply changing what it looks like.

### Pokemon `ngModel`

Go into `app.component.ts` and add the following object at the bottom of the `AppComponent` class.

```javascript
  trainer = {
  	name: "Ash"
  }
```

Now add this trainer to our `li` in `app.component.html`:

```html
<li *ngFor="let poke of pokemon">{{poke.name}} - trained by {{trainer.name}}</li>
```

Cool, we can see our trainer name!  But we already knew we could do this, now we are going to implement "two-way binding" with `ngModel`.

`app.component.html`

```html
  <input [(ngModel)]="trainer.name">
```

If we open our browser now we'll see...absolutely nothing?  What's going on here?  If you open up the console in Developer Tools, you will see an error complaining about

`Can't bind to 'ngModel' since it isn't a known property of 'input'.`

What does this error mean?  Well, not everyone needs to use `ngModel`.  With Angular, there are a lot of features available out of the box, but to help with page load times and app simplicity, some are broken out into separate modules we can include if, and only if, we need them. We need the `FormsModule` to enable `ngModel`, and that needs to be added to our `app.module.ts`:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now let's talk a little more about what "two-way binding" means.  Basically it means that we can update our TypeScript variable `trainer` from the HTML, and we can update `trainer` values in the HTML from TypeScript.  Open your browser again, and replace the value in the `input` box with your name.  Nice, it updates everything immediately!

### Pokemon `ngIf`

As we all know, our arch nemesis, Team Rocket is composed of Jessie and James.  If someone from that team is trying to look at our pokemon, we want them to all hide.  How do we do this?  With `ngIf`!  Update our pokemon bullet list and json so they disappear if Jessie or James is typed in as the trainer name.

```app.component.html
<pre *ngIf="trainer.name!=='Jessie'&&trainer.name!=='James'">{{pokemon|json}}</pre>
<ul *ngIf="trainer.name!=='Jessie'&&trainer.name!=='James'">
```

Nice, now our pokemon are safe from those Team Rocket tricksters!

## Creating Our Own Directives

If we want to, we can also create our own custom directives.

All directives have an @Directive decorator on the class.

>**Note:** An @Component decorator is actually an @Directive decorator extended with template-oriented features.

Create a new file called `interval.directive.ts` and put it in your `app` folder:

```typescript
import { Directive } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: 'interval-dir',
  outputs: ['everySecond']
})

export class IntervalDir {
  everySecond = new EventEmitter();
 
  constructor() {
    setInterval(() => this.everySecond.emit("event"), 1000);
  }
}
```

Then we need to add it to `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntervalDir } from './interval.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntervalDir
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Finally, we need to integrate this into our `app.component`.  Add the following line to the bottom of our `AppComponent` class in `app.component.ts`:

```typescript
everySecond() { console.log('gotta catch em all'); }
```

Then add our new directive into `app.component.html`:

```html
<interval-dir (everySecond)="everySecond()"></interval-dir>
```

Now open the browser and open up the Developer Tools console.  Nice!  Every second we know how many pokemon we are supposed to catch (all of them).

If you want to know more about custom directives, check out [this tutorial](https://alligator.io/angular/building-custom-directives-angular/).

## Angular Punctuation

We've seen a lot of Angular punctuation today.  Here is a quick review of what they all mean:

![](punctuation1.png)

![](punctuation2.png)

But sometimes we will see properties without the `[]`s around them.  What does that mean?  Well, if we have `[]`, we will evaluate the expression in Javascript.  If we don't, we will simply see the property as a string.  For example:

![](punctuation3.png)

## Additional Resources

- [Angular Cheat Sheet](https://angular.io/guide/cheatsheet).
- [Pipes Documentation](https://angular.io/guide/pipes)
- [Custom Directives Tutorial](https://alligator.io/angular/building-custom-directives-angular/)