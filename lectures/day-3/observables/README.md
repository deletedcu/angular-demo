# Observables

## Lesson Objectives

1. Describe publish/subscribe model and how it relates to Observables
1. Demonstrate when a normal promise is not optimal
1. Switch from a Promise to an Observable
1. Make typing into an input field an observable
1. Have a subscriber act only after a pause in events from an observable
1. Check for distinct events from an observable
1. Create a service for an observable
1. Format the content of the event being published
1. Pass an observable off to the HTML

## Describe publish/subscribe model and how it relates to Observables

In programming pub/sub (publish/subscribe) model is a situation in which a single model publishes to the world that an event has happened.  Other models subscribe to this model and are notified when an event is published.  They can then do whatever they want with the new event data.  Think of this like when a newspaper publishes a new edition and subscribers read it.

A lot of times, communication between components is done through component properties (passing values in as custom attributes).  This can be a pain when you need to pass a property from a component to a grand child component.  Also, if you have multiple components that depend on that value, you'll need to pass it to all of them.  With a pub/sub model, you can simply have one component publish an event, and the other components are responsible for subscribing to the publisher.  This makes everything much more modular.

An observable is our publisher model.  It will broadcast events that happen, and we can then tell components to `subscribe` to this publisher.  They will be notified when an event happens, and they can choose to do what they want at this point.  The other thing our observables do is allow us to deal with streams of events.  We can perform operations on them to optimize the performance of our application.

## Demonstrate when a normal promise is not optimal

We're going to be optimizing our star wars app from the previous day.

Firstly, we want it to search as the user types into the input (like how google autocompletes).  Edit the first `section` of `src/app/search.component.html`:

```html
<section>
    <h2>Search For A Star Wars Character</h2>
    <input [(ngModel)]="name" type="text" placeholder="Character Name" (keyup)="findCharacter(name)" />
</section>
```

Test it out.  In the network tab of your Chrome Developer Tools, see how a request goes out for every letter?  This can use up data unnecessarily.  Also, the responses don't always come back in order.  With Observables, we can fix this.

## Switch from a Promise to an Observable

Nomally, `this.http.get()` returns an observable.  We convert it to a traditional promise with `toPromise()`.  Let's remove `toPromise()` and use the default functionality of `this.http.get()`.

In `src/app/search/search.component.ts` edit the `findCharacter` method of `SearchComponent`.

```javascript
findCharacter(name){
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.results = response.json().results);
}
```

Since we aren't using `toPromise` anymore, we can eliminate this line of code in `src/app/search/search.component.ts`

```javascript
import 'rxjs/add/operator/toPromise';
```

## Make typing into an input field an observable

`this.http.get()` returns an observable, but how can we make our own?  Let's make typing into the input field an observable action.  To do this, we'll need to import the `Subject` module from `rxjs` in `src/app/search/search.component.ts`:

```javascript
import { Subject } from 'rxjs/Subject';
```

A Subject, is just like an Observable, but it allows us to tell it when to publish events. Let's create a property on `SearchComponent` that is a `Subject` that we'll tell to publish events when the user types.

```javascript
export class SearchComponent implements OnInit {

    results;
    searchSubject = new Subject(); //add this property

    constructor(
        private http: Http
    ) { }

    findCharacter(name){
        this.http.get('http://swapi.co/api/people/?search=' + name)
            .subscribe(response => this.results = response.json().results);
    }

    ngOnInit() {
    }

}
```

In `findCharacter`, let's publish those events:

```javascript
findCharacter(name){
    this.searchSubject.next(name);
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.results = response.json().results);
}
```

Now we want to tell the `SearchComponent` to subscribe to those events that we publish with `this.searchSubject.next(name);`.  In `ngOnInit`, add this:

```javascript
ngOnInit() {
    this.searchSubject.subscribe(name => {
        console.log(name);
    })
}
```

When `SearchComponent` is initialized, it sets up a subscription to the `searchSubject` observable.  When `searchSubject` publishes an event, the code above logs the name that was written.

Instead of logging the name, though, we want to make an AJAX call.  Move the `this.http.get()` code into the `subscribe` callback:

```javascript
findCharacter(name){
    this.searchSubject.next(name);
}

ngOnInit() {
    this.searchSubject.subscribe(name => {
        this.http.get('http://swapi.co/api/people/?search=' + name)
            .subscribe(response => this.results = response.json().results);
    })
}
```

## Have a subscriber act only after a pause in events from an observable

Our setup is just as inefficient as before.  It still makes a request with every key stroke.  This is because our `searchSubject` observable is publishing a constant stream of events.  Each time a new character is typed, a new event is published.  Let's fine tune this so that our subscriber in `ngOnInit` waits until it receives an event that is followed by a certain amount of time.  This way, it's waiting for us to pause our typing.

To do this, we'll need to add the `debounce` functionality from `rxjs`.  To do this, we just run the following:

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
        .debounceTime(300) //add this
        .subscribe(name => {
            this.http.get('http://swapi.co/api/people/?search=' + name)
                .subscribe(response => this.results = response.json().results);
        })
}
```

Now try typing.  You should see that a request goes out only when you pause your typing.

## Check for distinct events from an observable

Try selecting the input with your cursor, typing in a value, and then hitting tab to make the cursor move away from the input box.  You should see a second request go out to the same location, even though the search value is the same as before.  Let's fix this.

Just like with `debounceTime`, we want to add the `distinctUntilChanged` ability.  This will examine the current event to see if it was the same as the previous event.  If it is, it will discard it.  Add the following:

```javascript
import 'rxjs/add/operator/distinctUntilChanged';
```

Now alter the subscriber in `ngOnInit`:

```javascript
ngOnInit() {
    this.searchSubject
        .debounceTime(300)
        .distinctUntilChanged() //add this
        .subscribe(name => {
            this.http.get('http://swapi.co/api/people/?search=' + name)
                .subscribe(response => this.results = response.json().results);
        })
}
```

## Create a service for an observable

Our code could be cleaner.  Let's move the HTTP action to a service, so that other components can use it if they want.  First create `src/app/search/search.service.ts`.  Now have it export a class like normal:

```javascript
export class SearchService {
}
```

Since this is a service, not a component, let's make it `Injectable`:

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
}
```

Now we can inject the service in components.

Next, let's create a method that will make the API call and return the observable.  Copy the `this.http.get('http://swapi.co/api/people/?search=' + name)` code from `src/app/search/search.component.ts` to `src/app/search/search.service.ts`:

```javascript
export class SearchService {
    createAPIObservable(name){
        return this.http.get('http://swapi.co/api/people/?search=' + name);
    }
}
```

We need to import the Http module into `src/app/search/search.service.ts`, though:

```javascript
import { Http } from '@angular/http';
```

And inject it into the component:

```javascript
export class SearchService {

    constructor(private http: Http) {}

    createAPIObservable(name){
        return this.http.get('http://swapi.co/api/people/?search=' + name);
    }

}
```

Now in `src/app/search/search.component.ts` import the new service:

```javascript
import { SearchService } from './search.service';
```

Inject the service into the component in `src/app/search/search.component.ts`:

```javascript
constructor(
    private http: Http,
    private searchService: SearchService
) { }
```

And replace `this.http.get()` with the service:

```javascript
this.searchSubject
    .debounceTime(300)
    .distinctUntilChanged()
    .subscribe(name => {
        this.searchService.createAPIObservable(name)
            .subscribe(response => this.results = response.json().results);
    })
```

You might see an error in your Chrome console.  We still need to specify our new service as a provider, either at the app level or at the component level.  Let's do at the app level, so that other components can use it if they need to later.  Edit `src/app/app.module.ts` to add the import:

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

## Format the content of the event being published

Look at `src/app/search/search.component.ts`:

```javascript
this.searchService.createAPIObservable(name)
    .subscribe(response => this.results = response.json().results);
```

Right now in our subscribe callback, we have to go in and format the response to JSON and then set get the results property of that value.  What if all subscribers don't want to have to deal with that?  What if we just want to have the `SearchService` handle that aspect so that all the subscribers have to do is deal with the results array?

In `src/app/search/search.service.ts`, add the following:

```javascript
createAPIObservable(name){
    return this.http.get('http://swapi.co/api/people/?search=' + name)
        .map(response => response.json().results);
}
```

We'll get an error about `map()` not existing, so let's add the necessary import:

```javascript
import 'rxjs/add/operator/map';
```

Back in `src/app/search/search.component.ts` we can simplify what comes back from the observable:

```javascript
this.searchService.createAPIObservable(name)
    .subscribe(results => this.results = results);
```

## Pass an observable off to the HTML

We can operate on an observable in the HTML.  This cleans up our code a bit.  First add `switchMap` functionality to `src/app/search/search.component.ts`:

```javascript
import 'rxjs/add/operator/switchMap';
```

Now change subscribe to switchMap.

```javascript
this.searchSubject
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(name => this.searchService.createAPIObservable(name))
    .subscribe(results => this.results = results);
```

`.subscribe(results => this.results = results)` is actually subscribing to the observable created by `searchService`, NOT `searchSubject`.  It may look like it's subscribing to `this.searchSubject`, but it's not.  It's essentially mapping any event published by `searchSubject` to the one created by `this.searchService.createAPIObservable()`.

Lastly, we can remove the `.subscribe()` code altogether and set `this.results` to the observable returned by the rest of the statement:

```javascript
ngOnInit() {
    this.results = this.searchSubject
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(name => this.searchService.createAPIObservable(name));
}
```

Now change the HTML in `src/app/search/search.component.html` to handle the fact that `this.results` is actually an observable.

```html
<li *ngFor="let character of results | async">
```

This should work.  Let's clean up our names so it's clear.  Edit `src/app/search/search.component.ts`:

```javascript
export class SearchComponent implements OnInit {

    apiObservable; //used to be results
    searchSubject = new Subject();

    constructor(
        private http: Http,
        private searchService: SearchService
    ) { }

    findCharacter(name){
        this.searchSubject.next(name);
    }

    ngOnInit() {
        //this.results = this.apiObservable
        this.apiObservable = this.searchSubject
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(name => this.searchService.createAPIObservable(name));
    }

}
```

Now edit `src/app/search/search.component.html`:

```html
<section *ngIf="apiObservable">
```

and:

```html
<li *ngFor="let character of apiObservable | async">
```

You might notice that "Search Results" is always displayed even when there are no results.  Let's change that:

```html
<section>
    <h2 *ngIf="(apiObservable | async) !== null">Search Results</h2>
```

Now the `h2` subscribes to the observable and tests to see if there are values in it

### Resources

- [Observable Documentation](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
- [More on Subject vs Observable](http://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable/)
