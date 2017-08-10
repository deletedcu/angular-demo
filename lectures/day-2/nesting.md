# Nesting

<!--3:33 WDI4 -->

## Lesson Objectives
*By the end of this, developers will be able to:*

- Describe nested routes
- Create components for two sub sections
- Move the appropriate HTML to each sub section component
- Create a router just for the sub sections
- Replace the old main route with the new routing module
- Add the router outlet for the sub sections:

## Describe nested routes

Sometimes you want to have sub sections within a specific route (routes within routes).  We can accomplish this with nested routes.

## Create components for two sub sections

We're going to split `/about` into `/early-life` and `/career`.

Generate the two components:

```
ng generate component early-life
ng generate component career
```

## Move the appropriate HTML to each sub section component

Cut the HTML from `src/app/about/about.component.html` and paste into `src/app/early-life/early-life.component.html`:

```html
<h3>Early Life</h3>
<p>Just a kid growing up rough on the streets.  Hustlin' code for ca$h</p>
```

and `src/app/career/career.component.html`:

```html
<h3>Career</h3>
<p>Now I'm makin' it raaaiiiiiinnnn!!!</p>
```

<!--WDI4 3:40 -->

## Create a router just for the sub sections

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

## Replace the old main route with the new routing module

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
import { AboutRoutingModule} from './about/about-routing.module' //import the new routing module

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

## Add the router outlet for the sub sections:

Edit `src/app/about/about.component.html`:

```html
<h2>This is the About Section of the Site</h2>
<router-outlet></router-outlet>
```

You can now test by going to:

- http://localhost:4200/about/early-life
- http://localhost:4200/about/career

<!--WDI4 3:53 -->

## Add links to the various sub sections:

You can now create links to these sub sections in the `About` `<li>` inside `src/app/app.component.html`:

```html
<h2>About Page</h2>
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
