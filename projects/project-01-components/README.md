[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The Death Square

Those pesky rebels destroyed yet another one of our death stars! But we'll build an even better one and crush them once and for all. This time, our death star will be a death square.

### Instructions:

>**Note:** You will get some hints on the styling later.  Just try to get everything on the page first.

1) Generate a new `ng` app called `imperial-starfleet`.

2) Create a component called `death-square`. This component should be a square with a gray background. Add one instance of this component to our root component.

3) Create a component called `turret`. This component consists of an `<img>` tag with [turret.png](images/turret.png) as its source. Place as many instances of this component inside the `death-square` component HTML as you think are necessary to beat the rebels.

>**Note:** All Angular assets are served up from the `src/assets` folder. Point the turret's `src` attribute at this folder (e.g., `/assets/...`).

4) Now that our death square is protected, let's create a component called `laser-cannon`. One instance of this component should also be placed and centered in our `death-square` component. It should be a square with a red background. 

<details>
	<summary>Still struggling with the CSS? Check out these hints if needed.</summary>
	
	`death-square.component.css`

	.container {
	  background-color: grey;
	  width: 1100px;
	  height: 1100px;
	  position: relative;
	}

	.laser-cannon {
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  width: 50px;
	  height: 50px;
	  margin-left: -25px;
	  margin-top: -25px;
	}

	`laser-cannon.component.css`

	.container {
	  background-color: red;
	  width: 100%;
	  height: 100%;
	}

	`turret.component.css`

	.left {
	  left: 0px;
	  top: 50%;
	}

	.right {
	  right: 0px;
	  top: 50%;
	}

	.turret {
	  position: relative;
	}

</details>

>**Note:** If you use the hints above, you will still need to make the corresponding changes to your HTML classes.

5) Our death square is complete, but we would still be vulnerable if the rebel fleet attacked. Let's create a new component called `tie-fighter`. Include [tie-fighter.png](images/tie-fighter.png) in its template, and add as many instances as you think are necessary to protect our death square. Do NOT nest these in the `death-square` component.

6) This death square will surely not be destroyed now, but we still want to wrap up our code so future engineers can easily build another one. Move the `turret`, `death-square`, and `laser-cannon` into an `internal-defenses` repository, and create a feature module for `internal-defenses`.

### Bonus

7) Our tie fighters will be exposed if the rebels attack with larger cruisers. Create a `star-destroyer` component, add it to our app (NOT nested in the `death-square` component), and then package it and our `tie-fighter` component into a feature module called `external-defenses`.

