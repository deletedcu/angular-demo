# Using an API With Input and AJAX

You'd like to show people what you can do, so to really impress them you're going to create an app that displays the weather.

You will use the [OpenWeather API](http://openweathermap.org/current) to fetch the weather from a certain zip code and update the home page to reflect the current weather.
- We'll display the current temperature, the high and low temperate, the current weather description, and the name of the city that came back from the API.
	- Note: Our solution uses Fahrenheit - you're free to use Celsius if you'd like.

## Create a new app

First, create the app (stop any Angular apps that are currently running).

```
ng new weather
cd weather
```

## Generate a New Component
We'll need a component to handle the search functionality, so let's create that first, then start up the app.

```
ng generate component search
ng serve --open
```

## Clean Up `app.component.html`

Set `src/app/app.component.html` contents to display what we're doing and call the search component.

```html
<h1>Weather App</h1>
<app-search></app-search>
```

## Add Form HTML to the Search Component

Edit `src/app/search/search.component.html` to have a search button. We'll have the user input a US zip code.

```html
<section>
    <h2>What's the Weather Where You're At?</h2>
    <input type="text" placeholder="Zip Code Here"/>
    <input type="submit" value="Search"/>
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

## Set a Component Property to the Value of an Input

In `src/app/search/search.component.html`, add `[(ngModel)]` to the text input. We'll also output it immediately as `{{zip}}` to test that `ngModel` is picking up the string.

```js
<section>
    <h2>What's the Weather Where You're At?</h2>
    Search String: {{zip}}
    <input [(ngModel)]="zip" type="text" placeholder="Zip Code Here"/>
    <input type="submit" value="Search"/>
</section>
```

Test this in your browser by changing the text in the input field.


## Invoke a Function When the User Clicks a Button

In `src/app/search/search.component.ts`, add a `findWeather` method to SearchComponent between the `constructor` and `ngOnInit()`:

```javascript
findWeather(zip){
	console.log('finding ' + zip);
}
```

Call the new method from the button in `src/app/search/search.component.html` and pass into it the `zip` parameter from `ngModel`. Delete the "Search String" test output:

```html
<section>
  <h2>What's the Weather Where You're At?</h2>
  <input [(ngModel)]="zip" type="text" placeholder="Zip Code Here"/>
  <input (click)="findWeather(zip)" type="submit" value="Search"/>
</section>
```

If you go test this out, you can see "finding ___ " displayed in the console for whatever you've searched for.



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

In `src/app/search/search.component.ts`, `findWeather(zip)` should make a request to the weather API:

```js
findWeather(zip){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
    .toPromise()
    .then(response => console.log(response.json()));
}
```

**IMPORTANT NOTE**: Because the OpenWeather API is not an open API, every request must end with this API key:  `&appid=052f26926ae9784c2d677ca7bc5dec98`  (i.e. this is a URL you might send a `get()` request to: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98`).

The `rxjs/add/operator/toPromise` import that we previously wrote adds the ability to change the Observable (again, more on this in another lecture) into a Promise.

You can test this by looking in the console - try a zip code like '02144' or '90210'. You should get the weather results!

## Display AJAX Results in the App

Now that we have it in the console and know that it's working, let's display it on the app page. In `src/app/search/search.component.ts`, add a public `weather` property and set it to the results of the AJAX call when it succeeds.

```javascript
export class SearchComponent implements OnInit {

    weather: any; //add the public property here

    constructor(
        private http: Http
    ) { }

		findWeather(zip){
	    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
	    .toPromise()
	    .then(response => this.weather = response.json()); // use it here
	  }

    ngOnInit() {
    }

}
```

## Display More Data in the HTML

Now add some HTML to `src/app/search/search.component.html` to display the weather (below your button).

First, we check if there are results at all with `*ngIf`. Did the API return anything into our `weather` method?

Here, there is only one result (the weather for this location) and not an array to loop. The entire results are stored in our `weather` variable, so we can access all the parameters the API returns (`name`, `main.temp_max`, etc) by simply prepending those with `weather.`

```html
<section *ngIf="weather">
  <h3>Here's the weather in {{weather.name}}:</h3>
  <p>Currently {{weather.weather[0].description}}.</p>
  <p>There's a high of {{weather.main.temp_max}} degrees and a low of {{weather.main.temp_min}} degrees.</p>
</section>
```

Try it out!
