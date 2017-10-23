# Routing Summary

You now can create a single-page application that allows the user to:

- Navigate to different parts of the application as if it were multiple pages.
- Bookmark and share different parts of the application as if it were multiple pages.

These types of pages can be:

1) Normal pages.
2) Pages that take URL parameters.
3) Pages with sub (child) routes.


To do this in a nutshell, you'll need to:

1. In your `app.module.ts`, import the RouterModule:
  - `import { RouterModule } from '@angular/router';`

2. In your `app.module.ts`, add your paths and components:

  ```js
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
          }
      ])
  ],
  ```

3. In your `app.component.html`, add the router outlet:
  - `<router-outlet></router-outlet>`

4. You'll likely also want to create a nav bar using Router Link:
  ```html
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <a routerLink="/links">Links</a>
  </nav>
  <router-outlet></router-outlet>
  ```
