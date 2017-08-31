# URL Params

<!--WDI4 2:55 -->

## Lesson Objectives
*By the end of this, developers will be able to:*

- Define what URL params are
- Create an external data file
- Use the data file to generate links
- Have Resume component display the id param
- Show specific job data based on id param

## Define what URL params are

URL params allow us to pass data into the application from the URL

## Create an external data file

Now we're going to have how app be a little more data driven.  Create `src/app/resume/jobs.ts`:

```javascript
export const JOBS = [
    {
        id:3,
        title: 'Crushed It',
        dates: '2010-2011, 2013-Present',
        description: 'There was a medical situation preventing me from crushing it to my usual standards. So I had to take some time off until I was able to crush it at 100%, at which point I resumed crushing it full-time.'
    },
    {
        id:2,
        title: 'Chief Code Jockey',
        location: 'jockey.com',
        dates: '2008-2010',
        description: 'Taming the wild code beast. A story for all ages. A friendship for all time. Share the adventure.'
    },
    {
        id:1,
        title: 'Software Engineer',
        location: 'Initech',
        dates: '2003-2008',
        description: 'I HAVE PEOPLE SKILLS!!'
    }
]
```

## Use the data file to generate links

In `src/app/app.component.ts` import the data file:

```javascript
import { Component } from '@angular/core';
import { JOBS } from './resume/jobs';
```

and now add it as a property of `AppComponent` (remove title if it still exists):

```javascript
export class AppComponent {
  jobs = JOBS;
}
```

In `src/app.app.component.html` loop through the jobs to create links:

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

<!--WDI4 3:09-->

## Alter the resume route to accept params

Our resume route in `src/app/app-routing.module.ts` no longer works.  Update it to accept params:

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

## Have Resume component display the id param

At this point, the resume shows all the jobs.  But we want to show just one job.  Edit `src/app/resume/resume.component.ts` to import `ActivatedRoute`:

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

Test that this works by showing `jobIndex` in `src/app/resume/resume.component.html`:

```html
<h2>Resume: {{jobIndex}}</h2>
```

<!--WDI4 3:21 -->

## Show specific job data based on id param

Import the `JOBS` data object:

```javascript
import { JOBS } from './jobs';
```

Now alter the `ResumeComponent` to

1. have a `job` property, set by the URL param
1. find the job that has a matching id to the one specified in the URL
    - NOTE: `param.id` is a string, and `job.id` is a number, so we must call `parseInt(param.id)`

```javascript
export class ResumeComponent implements OnInit {

    job; //set up public class member

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

Now in `src/app/resume/resume.component.html` display the data:

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

<!--WDI4 3:32 -->
