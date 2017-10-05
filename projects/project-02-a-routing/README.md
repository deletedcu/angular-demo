[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Detailed** Death Square

Those pesky rebels are planning yet another attack on our death square. Like any good business, we need to prepare by running an inventory on our equipment. Then we can be sure of our impending victory.

### Instructions:

1. Open up the `imperial-starfleet` directory in Terminal and start up the app. If you're not sure how to do this, take a look at previous lessons for help.

2. Look familiar? This is our "death square", which we'll use to bring doom for the Rebel Alliance. However, we at the Empire demand a little more detail. Try clicking on one of the turrets. Nothing happened, right? Let's fix that.

3. Create a new component called `info-window` so we can see some information on our turrets.

4. Create an `app-routing.module.ts` file (just like in the previous lesson) that imports the `InfoWindowComponent` and defines one route with the path `info` pointing to the `InfoWindowComponent`. Import this routing module in `app.module.ts`.

5. Add a `router-outlet` to `app.component.html`.

6. Test your new route by going to `/info` in your browser.

7. That's great, but we need to be able to click a turret and quickly get all its information. Wrap the `img` tag in `turret.component.html` in an `a` tag with a `routerLink` like we used in the previous lesson.

8. Now, import `RouterModule` in the `death-square.module.ts` file.

9. Finally, change the `info-window` component HTML to say `Turret is functional`.

It's not the most detailed inventory, but it's definitely better than what the rebels have.  
