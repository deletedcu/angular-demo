# Routing in Angular

<!--2:03 WDI4 -->

## Lesson Objectives
*By the end of this lesson, you will be able to:*

- Create a new Angular app.
- Clean up the app's HTML.
- Create About, Links, and Resume components.
- Edit the HTML for the About, Links, and Resume components.
- Display all of the components at once.
- Set up the router.
- Tell the router where to display the components.
- Create links to the different "pages."
- Create an external routing file.
- Use the external AppRoutingModule in `app.module.ts`.

## Create a New Angular App

First, go up to a new directory (not inside `ga-ui`). Create a new app called `router` using:

```
ng new router
```

`cd` into the new directory and start serving the app:

```
cd router
ng serve --open
```

Adding `--open` instructs Angular to, after starting the application ("serving" the application), open a new browser window and display it.

You should now see the welcome screen on `http://localhost:4200/`


<!--WDI4 2:09 -->

## Clean Up the App's HTML

Go into `src/app/app.component.html` and delete all of the HTML. Instead, simply put:

```html
<h1>Welcome To My Personal Site</h1>
```

Save this and re-check your `http://localhost:4200/`. It should have dynamically updated.

## Create About, Links, and Resume Components

Now, we'll create components for the different "sections" of the site to which we want to "navigate." In Terminal, quit the running application with `cmd-c`. enter these commands (or use the shorthand, `ng g c __` ):

```
ng generate component about
ng generate component links
ng generate component resume
```

If you look in your `app` folder, you can see that now there are folders for each of these new components.

<!--2:14 WDI4 -->


## Edit the HTML for the About, Links, and Resume Components

Edit `src/app/about/about.component.html` with anything you want, like...:

```html
<h2>This is the About Section of the Site</h2>
<h3>Early Life</h3>
<p>Just a kid growing up on the streets.</p>
<h3>Current Life</h3>
<p>Still loving my life!</p>
```

Edit `src/app/links/links.component.html` with anything you'd like, like...

```html
<h2>This is the Links Section of the Site</h2>
<ul>
    <li>
        <a href="https://angular.io/">Angular Home Page</a>
    </li>
    <li>
        <a href="https://www.google.com/">Google</a>
    </li>
    <li>
        <a href="https://www.npmjs.com/">NPM</a>
    </li>
    <li>
        <a href="https://nodejs.org/en/">Node</a>
    </li>
</ul>
```

Edit `src/app/resume/resume.component.html`, with anything you'd like, like...

```html
<h2>Resume</h2>
<ul>
    <li>
        <dl>
            <dt>2010-2011, 2013-Present</dt>
            <dd>Crushed It</dd>
        </dl>
    </li>
    <li>
        <dl>
            <dt>2008-2010</dt>
            <dd>Chief Code Jockey at jockey.com</dd>
        </dl>
    </li>
    <li>
        <dl>
            <dt>2003-2008</dt>
            <dd>Software Engineer at Initech</dd>
        </dl>
    </li>
</ul>
```

## Display All Components at Once

Now we have many components, but we still need them to appear to our user.

Edit `src/app/app.component.html`:

```html
<h1>Welcome To My Personal Site</h1>
<app-about></app-about>
<app-links></app-links>
<app-resume></app-resume>
```

If you run the server (`ng serve`), you should now see all of the components displayed on the page, one after another. Awesome!

Look at the code - think about why this works. For example, where in the `resume` component is `<app-resume></app-resume>` coming from?

<!-- WDI4 2:20-->

Now, let's use Router only display one at a time.

## Set Up the Router

First import the `RouterModule` in to `src/app/app.module.ts`:

```javascript
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router'; // add import statement here
```

Now change the existing `imports: [` section of this file, `src/app/app.module.ts`, and define which modules correspond with which routes:

```javascript
imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'resume',
            component: ResumeComponent
        },
        {
            path: 'links',
            component: LinksComponent
        }
    ])
],
```

This says:
- When the user goes to `http://localhost:4200/about`, display the About component.
- When the user goes to `http://localhost:4200/resume`, display the Resume component.
- When the user goes to `http://localhost:4200/links`, display the Links component.

## Tell the Router Where to Display the Components

Now that we've set up the router, we need to tell it where to display the components. Go back to  `src/app/app.component.html` and remove the component declarations you just added. Replace them with the line `<router-outlet></router-outlet>`:

```html
<h1>Welcome To My Personal Site</h1>
<router-outlet></router-outlet>
```

There's no navigation bar yet, but it works! You can now test the different "pages" by going to:

- http://localhost:4200/about
- http://localhost:4200/links
- http://localhost:4200/resume

## Create Links to the Different "Pages"

Let's now make that nav bar. When creating links, we no longer use `href`. Instead we use `routerLink`.  

Edit `src/app/app.component.html` to have a nav bar, using `routerLink`:

```html
<h1>Welcome To My Personal Site</h1>
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
            <a routerLink="/resume">Resume</a>
        </li>
    </ul>
</nav>
<router-outlet></router-outlet>
```

Save this and go back to your page. Did it load? Do the links work?

## Create an External Routing File

Go back to `src/app/app.module.ts`. Right now, we only have three components (three pages!), so the `imports` section isn't very long. However, as you can imagine, that `RouterModule.forRoot()` in the `imports` can get lengthy if your website gets large.

To make our life easier in the future, let's put it in a new file. Create `src/app/app-routing.module.ts` and copy this into it:

```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'links',
        component: LinksComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
```

## Use the External AppRoutingModule in `app.module.ts`

Now, going back to `src/app/app.module.ts`, let's replace that lengthy `imports:` line with our routing with our new AppRoutingModule.

Make the `src/app/app.module.ts`:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';

// Below this is new
import { AppRoutingModule } from './app-routing.module'; // replace RouterModule with this import statement


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        LinksComponent,
        ResumeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule // replace the RouterModule array with this line
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

```

Now our code is a little cleaner - when new Routes need to be made, we'll add them in `src/app/app-routing.module.ts`.

<!--WDI4 2:45 -->
