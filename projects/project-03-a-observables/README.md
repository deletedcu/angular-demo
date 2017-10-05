[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Observable** Death Square

In the Galactic Empire, workplace safety and [a host of other issues](https://twitter.com/DeathStarPR) are very important to us. One thing we take very seriously is scalability. Unfortunately, `promises` are not very scalable. Enter: the `observable`. 

### Instructions:

1. Open up our data banks. Go into `turret-api` and run `seed.js` and `server.js` — don't forget to install those npm modules.

2. Go into `imperial-starfleet` and start up our front end.

3. Remove the `toPromise` import from your InfoWindowComponent.

4. Convert `findTurret()` to use `subscribe()` instead of `toPromise()` and `then()` as we showed in the last lesson.
