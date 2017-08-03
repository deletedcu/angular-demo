[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Full Stack** Death Square

The rebel attack has begun!  At the moment, all our turrets are still operational, but some of them have taken damage.  We need to know which ones are in need of repair.  Luckily for us, this information is available to us in our data banks...we just need to bring it to our dashboard to quickly deploy repair droids.  To the data banks!

### Instructions:

1. Open up our data banks.  Go into `turret-api`, run `seed.js` and `server.js`...but don't forget to install those npm modules!

2. Go to `localhost:3000/api/turret/4` to see how much damage our 4th turret has.  We have 16, so see how much damage the other ones have.

3. Go into `imperial-starfleet` and start up our front end.

4. Import HTTP, as we did in the previous lesson, into the InfoWindowComponent.  Also import the `rxjs` `toPromise` feature.

5. Put `http` into the constructor of InfoWindowComponent, as we did in the previous lesson.

6. Create a `findTurret()` function that passes in a `turretNumber` that looks very similar to our `findCharacter` function from the previous lesson.  Make your `get` request to the same URL we used in step #2.

7. Call this function inside the `ngOnInit` function, with a hardcoded value of `4` for now.

8. Change the `info-window.html` template to be an unordered list with two list items: one with a double bracket reference to `dataBanks.turretNumber`, and one with a reference to `dataBanks.turretNumber`.

9. Set this `dataBanks` object to the result coming back from the turret-api inside `findTurret()`.

10. In `death-square.component.html`, give each turret a `turretNumber` like so: `[turretNumber]="1"`.

11. Import the `Input` module from angular core in `turret.component.ts`

12. Take this value into the `turret.component.ts` class like so: `@Input('turretNumber') turretNumber: number;`

13.  Add the `turretNumber` to your `turret.component.html` template's routerLink.

14. Add a `/:id` to the path for `info` in `app-routing.module.ts`.

15. Now, we need to handle this new `turretNumber` in the InfoWindowComponent.  Import `ActivatedRoute` and include it in your `constructor` as we did in the previous lesson.

16. Add a `this.route.params.forEach` function similar to the previous lesson's, and tuck the `this.findTurret()` function inside it.  Don't forget to switch out the hard-coded `4` for the `param.id` coming from your route params.

17.  Now, let's test it in the browser!  Click on the top-left turret.  2 damage?  Not too bad!  Click on the third turret from the left.  8 damage?  Let's get that repair droid on its way!  Victory will be ours!

### Bonus

1. If you look in Dev Tools, you'll notice it complaining about `dataBanks` not being defined until we get the result back from our API.  Good ol' async JS, right?  You can fix this with a well-placed `*ngIf`.