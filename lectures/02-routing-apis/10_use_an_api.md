# Using an API With AJAX

<!--WDI4 9:57 -->

## Lesson Objectives

*By the end of this lesson, you will be able to:*

- Add form functionality into the app.
- Invoke a function when the user clicks a button.
- Make an AJAX request and display the results in the app.

## Create a New App

Imagine we want to `fetch()` the number of astronauts currently aboard the International Space Station (ISS). Good thing there is an API for that, right? This API allows us get the information using the following URL:

```
http://api.open-notify.org/astros.json
```

The API provides a response that looks like the following:

```json
{
	"number": 5,
	"people": [
		{"craft": "ISS", "name": "Oleg Novitskiy"},
		{"craft": "ISS", "name": "Thomas Pesquet"},
		{"craft": "ISS", "name": "Peggy Whitson"},
		{"craft": "ISS", "name": "Fyodor Yurchikhin"},
		{"craft": "ISS", "name": "Jack Fischer"}
		],
		"message": "success"
}
```


> If you'd like, you can copy and paste the API URL into a browser to see this happen.

This particular API tells us the number of people currently in space on the ISS and their names. It also happily gives us "message: success" so we know it worked!

First, create the app (and stop any Angular apps that are currently running).

```
ng new astronauts
cd astronauts
```

## Generate a New Component
We'll need a component to handle the search functionality, so let's create that first, then start up the app.

```
ng generate component search
ng serve --open
```

## Clean Up `app.component.html`
Let's take out the default contents of `app.component.html` and replace it with our heading and a call to our new Search component:

```html
<h1>Astronaut App</h1>
<app-search></app-search>
```

## Add Form HTML to the Search Component

Edit `src/app/search/search.component.html` to have a search button:

```html
<section>
  <h2>Who's on the ISS right now?</h2>
  <input type="submit" value="Show List"/>
</section>
```

Go check your site - so far, you should see the main heading from `app.component.html` and then the contents of your `search.component.html`. The search won't work yet - we haven't hooked up the button.

## Import Form Functionality Into the App

Edit `src/app/app.module.ts` to import `FormsModule` and place it as an import:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms'; //import FormsModule

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule //add it as an import
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Invoke a Function When the User Clicks a Button

In `src/app/search/search.component.ts`, add a `findAstronauts` method to SearchComponent between the `constructor` and `ngOnInit()`:

```javascript
findAstronauts(){
  console.log('finding!');
}
```

Call the new method from the button in `src/app/search/search.component.html`.

```html
<section>
  <h2>Who's on the ISS right now?</h2>
  <input (click)="findAstronauts()" type="submit" value="Show List"/>
</section>
```

Go to your website and try it out! Test this by opening the browser console and clicking the "Show List" button - the word "finding!" should appear in the console.

<!--WDI4 10:24 -->

## Add the Ability to Make AJAX Requests

Now that we have a working button, let's actually call the API.

Add `HttpModule` to `src/app/app.module.ts` and change the `NgModule` call:

```javascript
import { HttpModule } from '@angular/http'; //import module

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule, //add HttpModule here
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```

Now, edit `src/app/search/search.component.ts` to import appropriate modules:

```javascript
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
```

Tell the constructor of the `SearchComponent` class to add an `http` property:

```javascript
constructor(
    private http: Http
) { }
```

## Make an AJAX Request

Now, everything is set up. Let's actually call the API. The API URL is `http://api.open-notify.org/astros.json`, so we'll do an `HTTP GET` to that URL.

In `src/app/search/search.component.ts`, `findAstronauts()` should make a request to the API:

```javascript
findAstronauts(){
  this.http.get('http://api.open-notify.org/astros.json')
  .toPromise()
  .then(response => console.log(response.json()));
}
```

The `rxjs/add/operator/toPromise` import that we previously wrote adds the ability to change the `Observable` (more on this in another lecture) into a `Promise`.

Try it out! You can test this by looking in the browser console.

<!--10:35 WDI4 -->

## Display AJAX Results in the App

It's cool that it's in the console, but we likely want to actually display it to the user.  In `src/app/search/search.component.ts`, add a public `people` property and set it to the results of the AJAX call when it succeeds:

```javascript
export class SearchComponent implements OnInit {

  people: any; //add the public property here

  constructor(
      private http: Http
  ) { }

  findAstronauts(){
     this.http.get('http://api.open-notify.org/astros.json')
     .toPromise()
     .then(response => this.people = response.json().people); //set it here
 }

  ngOnInit() {
  }

}
```


## Display More Data in the HTML

Now add some HTML to `src/app/search/search.component.html` to display the astronaut names (below your button).

First, we check if there are results at all with `*ngIf`.

We're calling `astronaut.name` because:
- `astronaut` is the variable we're using in the `*ngFor` loop.
- In the API, there is a `name` property in the JSON that we want to access.


```html
<section *ngIf="people">
  <ul>
    <li *ngFor="let astronaut of people">
        <h3>{{astronaut.name}}</h3>
    </li>
</ul>
</section>
```

Try it out!


<!--10:45 WDI4 -->
