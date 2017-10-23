# Nesting

<!--3:33 WDI4 -->

## Lesson Objectives
*By the end of this, you will be able to:*

- Describe nested routes.
- Create components for two subsections.
- Move the appropriate HTML to each subsection component.
- Create a router just for the subsections.
- Replace the old main route with the new routing module.
- Add the router outlet for the subsection.

## Describe Nested Routes

Sometimes, you'll want to have subsections within a specific route (routes within routes). We can accomplish this with nested routes.

## Create Components for Two Subsections

We're going to split `/about` into `/early-life` and `/career`.

Generate the two components (you can also use `ng g c __`):

```
ng generate component early-life
ng generate component career
```

## Move the Appropriate HTML to Each Subsection Component

Cut the HTML from `src/app/about/about.component.html` and paste into `src/app/early-life/early-life.component.html`:

```html
<h3>Early Life</h3>
<p>Just a kid growing up on the streets.</p>
```

and `src/app/career/career.component.html`:

```html
<h3>Current Life</h3>
<p>Still loving my life!</p>
```

<!--WDI4 3:40 -->

## Create a Router Just for the Subsections

Create `src/app/about/about-routing.module.ts`:

```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { EarlyLifeComponent } from '../early-life/early-life.component';
import { CareerComponent } from '../career/career.component';

const aboutRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: 'early-life',
                component: EarlyLifeComponent
            },
            {
                path: 'career',
                component: CareerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }
```

> Stop and check - do you understand everything this does?

## Replace the Old Main Route With the New Routing Module

Remove the `about` route in `src/app/app-routing.module.ts`:

```javascript
const routes: Routes = [
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

And add the `about-routing.module.ts` module to `src/app/app.module.ts`:

```javascript
import { AboutRoutingModule} from './about/about-routing.module'; //import the new routing module

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        LinksComponent,
        ResumeComponent,
        EarlyLifeComponent,
        CareerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutRoutingModule //add the module here
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```

## Add the Router Outlet for the Subsections

Edit `src/app/about/about.component.html`:

```html
<h2>This is the About Section of the Site</h2>
<router-outlet></router-outlet>
```

You can now test by going to:

- http://localhost:4200/about/early-life
- http://localhost:4200/about/career

## Add Links to the Various Subsections

You can now create links to these subsections in `src/app/about/about.component.html`:

```html
<h2>This is the About Section of the Site</h2>
<nav>
    <ul>
        <li>
            <a routerLink="early-life">Early Life</a>
        </li>
        <li>
            <a routerLink="career">Career</a>
        </li>
    </ul>
</nav>
<router-outlet></router-outlet>
```


<!--WDI4 3:59 -->
