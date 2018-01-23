# Observables

<!--WDI5 9:10   -->
<!--WDI6 9:02 -->

## Lesson Objectives

1. Understand Promises
1. Understand Observables
1. Switch from a Promise to an Observable
1. Create a service for an observable
1. Pass an observable off to the HTML

## Promises

We've been using, but haven't really gone over, something called a **Promise**. Unlike in other languages, JavaScript statements can execute all at the same time, without waiting on the other to finish first. Promises make sure that if we want one statement to wait for another, it does.

For example, think back to your astronauts API. You were calling the API and displaying the results. We used a promise to make sure that we didn't display the results until **after** the API call was finished. Otherwise, your app might have displayed the results before calling the API - so the user would just see a blank screen (or console log).

```javascript
findAstronauts(){
  this.http.get('http://api.open-notify.org/astros.json')
  .toPromise()
  .then(response => console.log(response.json()));
}
```

Here, we're saying "Do the `get` call, then, when it's finished, log the response to the console."

Promises actually have a few possible outcomes. For examples, promises will say "I'll wait until the API call is finished. If it finishes, I'll log the results to the console, but if it fails, then I'll throw an error." This is rather similar to a try/catch statement.

Promises, in general, look like this:

```js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, (like call an API) then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
    // do whatever needs to happen if it works (like logging the results to the console)
  }
  else {
    reject(Error("It broke"));
    // throw an error if it didn't work (like if the API call was 404ed).
  }
});
```

To be a little more succinct, we can also write that as:

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

Promises are a little like event listeners, except, importantly, they only happen once. In our case, the promise listens for the API call to be finished, and when it's finished, the promise logs the results to the console. However, this will never happen again. Once the promise has a resolution, whether it succeeds or fails, the promise stops listening.

This is fine for some cases, but what if you want a constant listener with a statement that can execute multiple times? This is where **observables** come in.

<!-- 9:18 WDI5-->

## Describe publish/subscribe model and how it relates to Observables

In programming, the "pub/sub (publish/subscribe) model" is a situation in which:
- A single model publishes to the world that an event has happened.  
- Other models subscribe to this model and are notified when an event is published.  
  - They can then do whatever they want with the new event data.  

Think of the pub/sub model like when a newspaper publishes a new edition, and then subscribers read it.

A lot of times, communication between components is done through component properties (passing values in as custom attributes).  This can be a pain when you need to pass a property from a component to a grandchild component.  As well, if you have multiple components that depend on that value, you'll need to pass it to all of them.  

With a pub/sub model, you can simply have one component publish an event and the other components will be responsible for subscribing to the publisher.  This makes everything much more modular.

An **observable** is our publisher model. The observable will broadcast events that happen, and we can then tell components to **subscribe** to this publisher.  They will be notified when an event happens, and they can choose to do what they want at this point. The observable is the newspaper and the components are the subscribers.

The other thing our observables do is allow us to deal with streams of events.  We can perform operations on them to optimize the performance of our application.

## Demonstrate when a normal promise is not optimal

Earlier, we used `http` to make a request to the Star Wars API.

If you fork and clone [this repo](https://github.com/den-materials/angular-weather), `npm install`, and `npm start`, you will see a page that is nearly identical to the Star Wars API, but for the Open Weather Map API.

We're going to be optimizing that app throughout this lesson.

<!--WDI6 9:24 -->

Firstly, we want it to search as the user types into the input (like how google autocompletes).  Edit the first `section` of `src/app/search.component.html` to have a `(keyup)` parameter that calls `findWeather(zip)` and take out the button.

```html
<section>
    <h2>What's the Weather Where You're At?</h2>
    <input [(ngModel)]="zip" type="text" placeholder="Zip Code Here" (keyup)="findWeather(zip)" />
</section>
```

Test it out.  In the network tab of your Chrome Developer Tools, see how a request goes out for every letter or number (most of them fail, as a few characters won't make a valid zip code)?  This is exactly what `(keyup)` does, but it can use up data unnecessarily. With Observables, we can fix this.

<!--WDI5 9:32  but doing starwars-->

## Switch from a Promise to an Observable

Normally, `this.http.get()` returns an observable.  We are converting it to a traditional promise with `toPromise()`.  Let's remove `toPromise()` and use the default functionality of `this.http.get()`.

In `src/app/search/search.component.ts` edit the `findWeather` method of `SearchComponent` to simply have `.subscribe`:

```javascript
findWeather(zip){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
        .subscribe(response => this.weather = response.json());
}
```

Since we aren't using `toPromise` anymore, we can eliminate the import for it in `src/app/search/search.component.ts` (it's always a good idea to keep your code as clean and small as possible):

```javascript
import 'rxjs/add/operator/toPromise';
```

<!--WDI6 9:34  -->
<!--WDI5 9:36  -->

## Make typing into an input field an observable

`this.http.get()` returns an observable, but how can we make our own?  Let's make typing into the input field an observable action.  To do this, we'll need to import the `Subject` module from `rxjs` in `src/app/search/search.component.ts`:

```javascript
import { Subject } from 'rxjs/Subject';
```

A Subject is just like an Observable, but it allows us to tell it when to publish events. Let's create a property on `SearchComponent` that is a `Subject` that we'll tell to publish events when the user types.

```javascript
export class SearchComponent implements OnInit {

    weather;
    searchSubject = new Subject(); //add this property

    constructor(
        private http: Http
    ) { }

    findWeather(zip){
        this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
            .subscribe(response => this.weather = response.json());
    }

    ngOnInit() {
    }

}
```

Now that we have this set up, in `findWeather`, let's publish those events. This allows us to publish when we want to search for the `zip` the user enters.

```javascript
findWeather(zip){
  this.searchSubject.next(zip); // add this line
  this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
      .subscribe(response => this.weather = response.json());
}
```

Now we want to tell the `SearchComponent` to subscribe to those events that we publish with `this.searchSubject.next(zip);`.  In `ngOnInit`, add this:

```javascript
ngOnInit() {
    this.searchSubject.subscribe(zip => {
        console.log(zip);
    })
}
```

<!--WDI5 9:44, this is a confusing jump, make sure to explain what `next` and `subscribe` are doing, then change this -->

When `SearchComponent` is initialized (`ngOnInit`), it sets up a subscription to the `searchSubject` observable.  When `searchSubject` publishes an event, the code above logs the zip that was written.

Instead of logging the name, though, we want to make an AJAX call.  Move the `this.http.get()` code into the `subscribe` callback:

```javascript
findWeather(zip){
    this.searchSubject.next(zip);
}

ngOnInit() {
  this.searchSubject.subscribe(zip => {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
.subscribe(response => this.weather = response.json());
  })
}
```

<!--WDI6 9:48 -->

## Have a subscriber act only after a pause in events from an observable

Try it out again in the browser.

Our setup is just as inefficient as before.  It still makes a request with every key stroke.  This is because our `searchSubject` observable is publishing a constant stream of events.  Each time a new character is typed, a new event is published.  

Let's fine tune this so that our subscriber in `ngOnInit` waits until it receives an event that is followed by a certain amount of time.  This way, it's waiting for us to pause our typing.

To do this, we'll need to add the `debounce` functionality from `rxjs`.  To do this, we first import debounce to `search.component.ts`:

```javascript
import 'rxjs/add/operator/debounceTime';
```

Here's the definition of debounce:

> Bouncing is the tendency of any two metal contacts in an electronic device to generate multiple signals as the contacts close or open; debouncing is any kind of hardware device or software that ensures that only a single signal will be acted upon for a single opening or closing of a contact

It's kind of like what we're doing, right?

Now add `debounceTime` to the subscription in `ngOnInit()`:

```javascript
ngOnInit() {
  this.searchSubject
  .debounceTime(1000) //add this
  .subscribe(zip => {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
.subscribe(response => this.weather = response.json());
  })
}
```

Now try typing.  You should see that a request goes out only when you pause your typing.

<!--WDI5 9:52  -->

## Check for distinct events from an observable

Try selecting the input with your cursor, typing in a value (like 02144), and then hitting tab to make the cursor move away from the input box.  You should see a second request go out to the same location, even though the search value is the same as before.  Let's fix this.

Just like with `debounceTime`, we want to add the `distinctUntilChanged` ability.  This will examine the current event to see if it was the same as the previous event.  If it is, it will discard it.  Add the following:

```javascript
import 'rxjs/add/operator/distinctUntilChanged';
```

Now alter the subscriber in `ngOnInit`:

```javascript
ngOnInit() {
  this.searchSubject
  .debounceTime(1000)
  .distinctUntilChanged() // add this
  .subscribe(zip => {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
.subscribe(response => this.weather = response.json());
  })
}
```

Now try that out. It should work!

<!--WDI6 9:56, back at 10:02 -->
<!--WDI5 9:59, back at 10:11  -->

## Create a service for an observable

Our code works, but it could be cleaner.  Let's move the HTTP action to a service, so that other components can use it if they want. First, create `src/app/search/search.service.ts`.  Now have it export a class like normal:

```javascript
export class SearchService {
}
```

Since this is a service, not a component, let's make it `Injectable`. An injectable is another decorator that lets Angular know that what's in this class is designed to be reused in other classes.

Think of this as though you're a movie studio. At the beginning of every movie you make, you want your credits to be displayed. These credits are always going to be exactly the same, so why remake them for each movie? Instead, just make the credits section once in a separate file. Every time you make a movie, copy that file into the beginning of the movie. You've only made the credits section once, but you can use it an infinite number of times because it's a separate file and you're just injecting that file into the beginning of each movie.

What we're going to do is create an injectable with the API call in it. Then, whenever we want to make the API call anywhere in our program, we can load in this injectable.

First, make the basic class with the `@Injectable` decorator:

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
}
```

<!--WDI6 10:16 -->
<!--10:17 WDI5-->

Now we can inject the service in components.

Next, let's create a method that will make the API call and return the observable.  Copy the `this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')` code from `src/app/search/search.component.ts` to `src/app/search/search.service.ts`:

```javascript
export class SearchService {
    createAPIObservable(zip){
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial');
    }
}
```

As we're now doing HTTP here, we need to import the Http module into `src/app/search/search.service.ts`:

```javascript
import { Http } from '@angular/http';
```

And inject it into the component:

```javascript
export class SearchService {

    constructor(private http: Http) {}

    createAPIObservable(zip){
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial');
    }

}
```

Now that we have a service, let's use it. In `src/app/search/search.component.ts`, import the new service:

```javascript
import { SearchService } from './search.service';
```

Inject the service into the component in `src/app/search/search.component.ts`:

```javascript
constructor(
    private searchService: SearchService
) { }
```

And replace `this.http.get()` with the service:

```javascript
this.searchSubject
  .debounceTime(1000)
  .distinctUntilChanged()
  .subscribe(zip => {
      this.searchService.createAPIObservable(zip)
          .subscribe(response => this.weather = response.json());
})
```

You might see an error in your Chrome console like `No provider for SearchService!`.  We still need to specify our new service as a provider, either at the app level or at the component level.  Let's do at the app level, so that other components can use it if they need to later.  Edit `src/app/app.module.ts` to add the import:

```javascript
import { SearchService } from './search/search.service';
```

Now add it as a provider in `src/app/app.module.ts`:

```javascript
@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [SearchService], //edit this line
    bootstrap: [AppComponent]
})
```

Now, go to your browser and check it out. It should be working as normal! We've abstracted the reusable code into a service. Abstracting code that might be used in multiple places makes for a DRY application - don't repeat yourself.

<!--WDI6 10:31, wrapping up 10:32 -->
<!--WDI5 10:35 , wrapping up  10:37, after recap lesson (01.5) 11:01-->

### Resources

- [Observable Documentation](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
- [More on Subject vs Observable](http://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable/)
