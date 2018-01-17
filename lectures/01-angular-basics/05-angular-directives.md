[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

<!--WDI5 3:20 -->

# Angular 2: Directives

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.png)

## Objectives

By the end of this lesson, you will be able to:

- Describe what a **directive** is.
- Use directives like `ngFor` and `ngIf`.
- Use Angular pipes.
- Integrate custom directives into Angular apps.

### Directives

As you've seen, Angular is dynamic. When Angular renders a webpage, it transforms the DOM according to the instructions given by **directives**. This is a word tossed around in Angular often, so it's good to know what they are!

### [What is a directive?](https://angular.io/guide/structural-directives)

- A **directive** is a marker on a DOM element (such as an attribute, element name, comment or CSS class) that tells Angular to attach a specified behavior to that DOM element (e.g. via event listeners like `click` or `change`), or even to transform the DOM element and its children.

>**TLDR:** It is a piece of HTML that allows you to do Javascript things.

## Fun with Directives

Create a new Angular app with `ng new` called `directives-fun`, then start the app.

```
ng new directives-fun
cd directives-fun
ng serve --open
```

Now go into `src/app/app.component.ts` and replace the class definition with the below. This will give us a list of information to pull from and display in our app. It's in JSON, which separates attributes from values with `:` and groups related attributes together with `{}`, basically an array of objects.

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

Go into `app.component.html`. Replace the default information with the following:

```html
<div>
  <h1>
    Welcome to {{title}}!
  </h1>
  <pre>{{pokemon|json}}</pre>
</div>
```

Go look at your app at `http://localhost:4200/`. Sweet! You're pulling information from `app.component.ts` into `app.component.html` to be displayed. Look at those pokemon!

But if you look, we wrote `{{pokemon|json}}`. What is that `|` thing?

<!--WDI5 3:32  -->

## Pipes

A **pipe** (`|`) takes in data as input and transforms it to a desired output.

Here, we're saying "take the information in the `app.component.ts` and display it as JSON".

Try taking the `|json` out, so you just have `<pre>{{pokemon}}</pre>`. What does your page look like now?

Now add the pipe back in, so that the file displays properly.

With Angular, we can use a ton of pre-made pipes like the `json` formatter above.  We can even pass in parameters to some of them, or even create our own from scratch!

To learn more, check out [this documentation](https://angular.io/guide/pipes) on pipes.

## Components

Now, what about directives? A directive in Angular allows us to dynamically change what's displayed on the screen.

A component, which you've just seen, is technically a directive. Components are absolutely things displayed on the screen, after all. However, components are so distinctive and central to Angular applications that generally, developers think of directives and components as distinct entities.

In addition to components, there are two other kinds of directives: structural and attribute directives.

## Structural Directives

Structural directives change which elements are in the DOM (adding or removing them). They all start with an asterisk (*), just to make them easier to recognize.
- For example, here is a structural directive called `*ngFor`: `<li *ngFor="let hero of heroes"></li>`.
- In this example, `ngFor` tells Angular to print one `<li>` per `hero` in the `heroes` list (a `for` loop, running through `heroes` with `let... of ...`).

### Pokemon `ngFor`

Currently, all of those Pokemon are on the screen, but it's not the most user-friendly format.  Let's say we want to print out all of the Pokemon in a bulleted list. First, let's say the singular form of "pokemon" is "poke".  

Let's put `ngFor` into our `app.component.html`. Change your file to look like the below.

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

`ngFor` is essentially an Angular `for` loop, so we're saying "for each _item_ in _object_, display _this_".

Here, we have "for each `poke` in the `pokemon` object, display a `<li>` with that pokemon's `name`".

Look at that!  We're still displaying the entire JSON `pokemon` object from our file, so that you have a reference.  Below the JSON, with one line of code, we printed out all our pokemon names.

So to recap, **structural directives** add or remove elements from the DOM. Here, we're adding many `<li>`.

<!--WDI5 3:39  -->

## Attribute Directives

Attribute directives change the appearance or behavior of an existing element.
- For example, here is an attribute directive called `ngModel`: `<input [(ngModel)]="hero.name">`
- In this example, `ngModel` changes what's displayed on the `<input>` based on the current `hero.name`. Unlike structural directives, the attribute directive `ngModel` isn't adding or removing the `<input>` - it's simply changing what it looks like.

### Two-way data binding with `ngModel` and Pokemon

Go into `app.component.ts`, where we're storing our information, and add the following JSON object at the bottom of the `AppComponent` class (right above the last `}`).

```javascript
trainer = {
  name: "Ash"
}
```

Now that we have this in our info file, change the `li` to use it in `app.component.html`:

```html
<li *ngFor="let poke of pokemon">{{poke.name}} - trained by {{trainer.name}}</li>
```

Check it out in your browser. Cool, we can see our trainer name!  But we already knew we could do this (since `ngFor` is printing that entire `li` for every pokemon). Now, we are going to implement "two-way binding" with `ngModel`.

In your `app.component.html`, add this line right under the `h1`:

```html
<input [(ngModel)]="trainer.name">
```

If we open our browser now we'll see...absolutely nothing?  What's going on here?  If you open up the console in Developer Tools, you will see an error complaining about

`Can't bind to 'ngModel' since it isn't a known property of 'input'.`

What does this error mean?  Well, not everyone needs to use `ngModel`.  

With Angular, there are a lot of features available out of the box, but to help with page load times and app simplicity, some Angular features are broken out into separate modules that we can include if, and only if, we need them. We need the `FormsModule` to enable `ngModel`, so that needs to be added to our `app.module.ts`:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this!

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Here too! Don't forget the comma on the line above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

If you look at your browser, it loads! We have our pokemon list and an input for the trainer, which is pre-populated with "Ash" since that's in our `app.component.ts`.

Now let's talk a little more about what "two-way binding" means.  With two-way binding, we can update our TypeScript variable `trainer` from the HTML, and we can update `trainer` values in the HTML from TypeScript.  

Open your browser again, and replace the value in the `input` box with your name.  Nice. It updates everything immediately.

<!--WDI5 3:51 -->

### Event listeners with Angular 2

Angular's functionality encompasses DOM manipulation. As such, you should be extremely wary of combining Angular with jQuery. Let's see an example of a `click` event in Angular 2.

The Template Syntax ( [referenced here](https://github.com/den-materials/angular/blob/master/lectures/01-angular-basics/06-summary.md#angular-punctuation) ) specifies the use of parentheses for one-way bindings from the view back to the data source, e.g. `(click)`. Let's add a simple reset button to our interface, below the text input.

```
<input [(ngModel)]="trainer.name">

<button (click)="resetTrainer()">Reset Trainer</button> // Add this below the trainer input
```

Next, we will need to add the functionality for this function. This belongs in the TypeScript for our component:

```
export class AppComponent {
  trainer = {
  	name: "Ash"
  };

  ...
  
  // add event handler in the component class
  resetTrainer() {
  	this.trainer.name = "Ash";
  }
}
```

Now go back to the browser and check if your event listener properly updates the data value. Next, let's take a look at another directive, Angular's `ngIf` statement.

### Pokemon `ngIf`

Our arch nemesis Team Rocket is composed of Jessie and James.  If someone from that team is trying to look at our pokemon, we want all of our pokemon to all hide.  How do we do this?  With `ngIf`!  

Add these lines to `app.component.html`. Update our pokemon bullet list and JSON so they disappear if "Jessie" or "James" is typed in as the trainer name.

- Replace `<pre>{{pokemon|json}}</pre>` with `<pre *ngIf="trainer.name!=='Jessie'&&trainer.name!=='James'">{{pokemon|json}}</pre>`.
- Replace the opening list tag, ` <ul>`, with `<ul *ngIf="trainer.name!=='Jessie'&&trainer.name!=='James'">`.

Try it out by putting "Jessie" or "James" in the trainer input field (note: It's case-sensitive).

`ngIf` is Angular's way of creating an `if` statement.

<!--WDI5 3:59 -->
<!--WDI5 we skipped this part -->
<!-- 
## Creating Our Own Directives

If we want to, we can also create our own custom directives.

All directives have an @Directive decorator on the class.

>**Note:** An @Component decorator is actually an @Directive decorator extended with template-oriented features.

Here, we'll create an Interval directive. We can do anything we want with it! We'll set it to perform an event every second.

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

Then, we need to add it to `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntervalDir } from './interval.directive'; // add this!

@NgModule({
  declarations: [
    AppComponent,
    IntervalDir // And here
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

Finally, we need to integrate this new directive into our `app.component`.  Add the following line to the bottom of our `AppComponent` class in `app.component.ts`:

```typescript
everySecond() { console.log('gotta catch em all'); }
```

Then, add our new directive into `app.component.html`. Put this right above the `h1`:

```html
<interval-dir (everySecond)="everySecond()"></interval-dir>
```

**Note:** It could go anywhere, but this way it's separated from what's actually displayed.

Let's see if it works. Open the browser, and open up the Developer Tools console.  Nice!  Every second we know how many pokemon we are supposed to catch (all of them).
-->
## Additional Resources

- [Pipes Documentation](https://angular.io/guide/pipes)
- [Custom Directives Tutorial](https://alligator.io/angular/building-custom-directives-angular/)
