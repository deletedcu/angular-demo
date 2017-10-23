[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

<!--This is definitely a pair programming activity. -->
<!-- Make sure you demo the fully functional info window before students start coding. -->

# Pair Programming Project: The **Full-Stack** Death Square

The rebel attack has begun. At the moment, all of our turrets are still operational, but some may have been damaged. We need to know which ones need to be repaired. Luckily, this information is available in our data banks; we just need to bring it to our dashboard to quickly deploy repair droids.

### Instructions:

1) Open up our data banks. Navigate into `turret-api` and run `seed.js` and `server.js` — don't forget to install the `npm` modules.

2) Go to `localhost:3000/api/turret/4` to see how much damage our fourth turret has incurred. We have 16, so see how much damage the other ones have as well.

3) Navigate into `imperial-starfleet` and start up our front end.

4) Import HTTP into the `InfoWindowComponent`, like we did in the previous lesson. Additionally, import the `rxjs` `toPromise` feature.

5) Put `http` into the constructor of `InfoWindowComponent`.

6) Create a `findTurret()` function that passes in a `turretNumber` that looks similar to our `findCharacter()` function from the previous lesson. Make your `get` request to the same URL we used in Step 2.

6a) Save your JSON results from the `findTurret()` function in a variable called `dataBanks` (Note: **Not** `results` like the `findCharacter()` function). Make sure you first declare `dataBanks` at the top of your `InfoWindowComponent` class.

>**Note:** You want to `console.log()` the `response.json()` value before you save it to `dataBanks`. It does **NOT** have the same format as the Star Wars API response.

7) Call the function inside the `ngOnInit` function with a hard-coded value of `4`, for now.

8) Change the `info-window.html` template to an unordered list with two list items: one with a double-bracket reference to `dataBanks.turretNumber` and one with a reference to `dataBanks.damage`.

9) Test the work you've done so far in the browser.

10) In `death-square.component.html`, give each turret a `turretNumber` like so: `[turretNumber]="1"`.

11) Import the `Input` module from Angular core in `turret.component.ts`.

12) Take this value into the `turret.component.ts` `TurretComponent` class like so: `@Input('turretNumber') turretNumber: number;`.

13)  Add the `turretNumber` variable in double curly braces to your `turret.component.html` template's `RouterLink`.

14) Add a `/:id` to the `info` path in `app-routing.module.ts`.

15) Now, we need to handle this new `turretNumber` in the` InfoWindowComponent`. Import `ActivatedRoute` and include it in your `constructor`, like we did in the URL Params lesson.

16) Add a `this.route.params.forEach` function and tuck the `this.findTurret()` function inside it, similar to the URL Params lesson. Don't forget to switch out the hard-coded `4` for the `param.id` coming from your route params.

17)  Now, let's test it in the browser. Click on the top-left turret. Two damage? Not too bad. Click on the bottom-right turret. Nine damage? Let's get that repair droid on its way.  

### Bonus

If you look in Dev Tools, you'll notice it complaining about `dataBanks` not being defined until we get the result back from our API. You can fix this with a well-placed [`*ngIf`](https://angular.io/guide/cheatsheet)\*.

\*Look for "Built-In Directives."
