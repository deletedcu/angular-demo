# Routing in Angular

<!--2:03 WDI4 -->

## Lesson Objectives
*By the end of this, developers will be able to:*

- Create a new angular app
- Clean up app HTML
- Create About, Links, and Resume components
- Edit the HTML for the About, Links, and Resume components
- Display all components at once
- Set up the router
- Tell the router where to display the components
- Create links to the different "pages"
- Create an external routing file
- Use external AppRoutingModule in app.module.ts

## Create a new angular app

First create a new app using:

```
ng new router
```

Now, `cd` into the new directory and start serving the app:

```
cd router
ng serve --open
```

You should now see the welcome screen.

<!--WDI4 2:09 -->

## Clean up app HTML

Go into `src/app/app.component.html` and change the HTML to:

```html
<h1>Welcome To My Personal Site</h1>
```

## Create About, Links, and Resume components

We'll create a component for the different "sections" of the site we want to "navigate" to.

```
ng generate component about
ng generate component links
ng generate component resume
```

<!--2:14 WDI4 -->

## Edit the HTML for the About, Links, and Resume components

Edit `src/app/about/about.component.html`:

```html
<h2>This is the About Section of the Site</h2>
<h3>Early Life</h3>
<p>Just a kid growing up rough on the streets.  Hustlin' code for ca$h</p>
<h3>Career</h3>
<p>Now I'm makin' it raaaiiiiiinnnn!!!</p>
```

Edit `src/app/links/links.component.html`:

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

Edit `src/app/resume/resume.component.html`:

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

## Display all components at once

Edit `src/app/app.component.html`:

```html
<h1>Welcome To My Personal Site</h1>
<app-about></app-about>
<app-links></app-links>
<app-resume></app-resume>
```

You should now see all components displayed on the page

<!-- WDI4 2:20-->

## Set up the router

First import the RouterModule in to `src/app/app.module.ts`:

```javascript
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router'; // add import statement here
```

Now add the module as an import in `src/app/app.module.ts` and define which modules go with which routes:

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

## Tell the router where to display the components

Now that we've set up the router, we need to tell it where to display the components.  Remove the component declarations in `src/app/app.component.html` and replace them with `<router-outlet></router-outlet>`

```html
<h1>Welcome To My Personal Site</h1>
<router-outlet></router-outlet>
```

You can now test the different "pages" by going to

- http://localhost:4200/about
- http://localhost:4200/links
- http://localhost:4200/resume

<!--WDI4 2:29 -->

## Create links to the different "pages"

When creating links, we don't use `href` anymore.  Instead we use `routerLink`.  Edit `src/app/app.component.html`:

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

<!--WDI4 2:35-->

## Create an external routing file

As you can imagine, that `RouterModule.forRoot()` can get really lengthy.  Let's put it in a new file `src/app/app-routing.module.ts`:

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

## Use external AppRoutingModule in app.module.ts

Now let's replace our routing with our new AppRoutingModule in `src/app/app.module.ts`:

```javascript
import { AppRoutingModule } from './app-routing.module'

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        LinksComponent,
        ResumeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

<!--WDI4 2:45 -->
