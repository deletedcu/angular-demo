# URL Params

<!--WDI4 2:55 -->

## Lesson Objectives
*By the end of this lesson, you will be able to:*

- Define URL params.
- Create an external data file.
- Use the data file to generate links.
- Have the Resume component display the ID param.
- Show specific job data based on the ID param.

## Define URL Params

Many applications aren't completely static - they have information (data) in them, whether it's pulled from a database, somewhere else on the internet, or just kept in a file.
- If you're going to have a website of cat pictures, somewhere you need to have stored a bunch of cat pictures!
- If you're going to have a restaurant website with the menu, you'll want all the food items to be in a separate page, not hard coded into the website (it would be terribly difficult anytime anything changed).

Let's look at keeping information in a file and handing it to our Angular application.

**URL params** allow us to pass data into the application from the URL.

## Create an External Data File

We're going to make our app a little more data driven - let's have the Resume component dynamically generate the page based on what's in a `jobs` file.  

- Create `src/app/resume/jobs.ts`:

```javascript
export const JOBS = [
    {
        id: 3,
        title: 'Crushed It',
        dates: '2010-2011, 2013-Present',
        description: 'There was a medical situation preventing me from crushing it to my usual standards. So I had to take some time off until I was able to crush it at 100 percent, at which point I resumed crushing it full time.'
    },
    {
        id: 2,
        title: 'Chief Code Jockey',
        location: 'jockey.com',
        dates: '2008-2010',
        description: 'Taming the wild code beast. A story for all ages. A friendship for all time. Share the adventure.'
    },
    {
        id: 1,
        title: 'Software Engineer',
        location: 'Initech',
        dates: '2003-2008',
        description: 'I HAVE PEOPLE SKILLS!!'
    }
]
```

## Use the Data File to Generate Links

In `src/app/app.component.ts`, import the data file:

```javascript
import { Component } from '@angular/core';
import { JOBS } from './resume/jobs';
```

Now, add it as a property of `AppComponent` (remove the title, if it still exists - we won't be using that):

```javascript
export class AppComponent {
  jobs = JOBS;
}
```

In `src/app/app.component.html`, change the `routerLink` for `/resume` to instead loop through the jobs to create links for each one:


```html
<nav>
    <ul>
        <li>
            <a routerLink="/">Home</a>
        </li>
        <li>
            <a routerLink="/about">About</a>
        </li>
        <li>
            <a routerLink="/links">Links</a>
        </li>
        <li>
            Resume
            <ul>
                <li *ngFor="let job of jobs">
                    <a routerLink="/resume/{{job.id}}">{{job.title}}</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

- `*ngFor` creates a loop.
- You can call JavaScript parameters using `{{ paramName }}`

## Alter the Resume Route to Accept Params

Our resume route in `src/app/app-routing.module.ts` no longer works. Update the `resume` path to accept params:

```javascript
const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resume/:id',
        component: ResumeComponent
    },
    {
        path: 'links',
        component: LinksComponent
    }
];
```

Reload the webpage (or reserve it first, if you stopped it) and check it out.

## Have the `Resume` Component Display the ID Param

At this point, the resume shows all of the jobs. We want it to show just one job - the one the user clicks on.

Edit `src/app/resume/resume.component.ts` to import `ActivatedRoute`:

```javascript
import { ActivatedRoute }   from '@angular/router';
```

Now update the class definition:

```javascript
export class ResumeComponent implements OnInit {

    jobIndex: Number; //set up public class member

    constructor(
        private route: ActivatedRoute //make URL routes available to class
    ) { }

    ngOnInit() {
        this.route.params.forEach( param => this.jobIndex = param.id )
    }
}
```

- `ngOnInit()` is a function that tells the component what to do when it's first initialized, or called to the screen.

Now, we'll go to the resume component's HTML file and change that do display exactly what job we want. Add `jobIndex` to `src/app/resume/resume.component.html`:

```html
<h2>Resume: {{jobIndex}}</h2>
```

At this point, if you look at your website and click between the job links in the nav bar, the Resume header has a counter of 1, 2, or 3. It's working so far!

<!--WDI4 3:21 -->

## Show Specific Job Data Based on the ID Param


But we'd still only like to display one job at a time, so back to the `resume.component.ts`, import the `JOBS` data object `src/app/resume/resume.component.ts`:


```javascript
import { JOBS } from './jobs';
```

Now alter the `ResumeComponent` to:

1) Have a `job` property set by the URL param.
2) Find the job that has a matching ID to the one specified in the URL.
    - Note: `param.id` is a string and `job.id` is a number, so we must call `parseInt(param.id)`.

```javascript
export class ResumeComponent implements OnInit {

    job: any; //set up public class member

    constructor(
        private route: ActivatedRoute //make URL routes available to class
    ) { }

    ngOnInit() {
        this.route.params.forEach(
            param => {
                this.job = JOBS.find( job => { //find the element in the JOBS array...
                    return job.id === parseInt(param.id) //... that has a matching id
                });
            }
        );
    }

}
```

Now, the data from `jobs` is being passed in to `resume.component.html`, so display the data in `src/app/resume/resume.component.html`:

```html
<h2>Job Description For: {{job.title}}</h2>
<dl>
    <dt>Dates</dt>
    <dd>{{job.dates}}</dd>
    <dt>Title</dt>
    <dd>{{job.title}}</dd>
    <dt>Description</dt>
    <dd>{{job.description}}</dd>
</dl>
```

Go try it out! 

<!--WDI4 3:32 -->
