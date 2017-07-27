[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The Death Square

Those pesky rebels destroyed yet another one of our death stars. Curse them! We shall build one even better though and crush them once and for all. This time, our death star will be square!

### Instructions:

1. Generate a new ng app called 'imperial-starfleet'.

2. Make a component called 'death-square'. This component should have a square grey background. Add one instance of this component to our root component.

3. Create a component called 'turret'. This component consist of an '<img>' tag with 'turret.png' as its source. Nest as many instances of this component inside of 'death-square' as you think necessary to crush the rebel scum. 

4. Now that our death square is protected, let's create a component called 'laser-cannon'. One instance of this component should also be nested in our 'death-square' component, centered inside of our 'death-square' component and should have a square red background.

5. Our death square is complete, but we would still be vulnerable if the rebel fleet attacked. Let's create a new component called 'tie-fighter', and add as many instances as you feel necessary to protect our death square. Do NOT nested these in the 'death-square' component.

6. This death square will surely not be destroyed now, but we still want to wrap up our code up so future engineers can build another one easily. Package the 'death-square', 'turret' and 'laser-cannon' in a feature model.

### Bonus

7. Our tie fighters will be exposed if the rebels attack with larger cruisers. Create a 'star-destroyer' component, add it to our app NOT nested in the 'death-square' component, then package it and our tie-fighter component into a feature module.

