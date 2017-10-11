# Angular and Heroku Deployment

>Modern full-stack deployment can be a little complicated.  We want the flexibility to be able to dynamically test our code locally, but we also want a quick-to-load, seamless app for our users.  In order to set this up, we need to do a few things.

## Before We Start

### Our Folder Structure

We will be following the pattern of our [tunr](https://github.com/den-materials/modeling-tunr) [labs](https://github.com/den-materials/tunr-relationships) for this deployment.  That is, we will have a separate folder for the back end API, and one for the front end Angular code.

## Creating our Repo

1. Create a folder with the name of your project.
2. Go into the folder and initialize it as an npm repository with `npm init -y`.
3. Create a `front-end` folder with `ng new` if you don't already have one.
4. Create a `back-end` folder, go inside, initialize it as an npm repository, and create a `server.js` file.

## Heroku Setup

1. Stop and commit. Make sure your app is under version control with `git`.  If you're not sure whether your project is under version control yet, you definitely haven't been commiting often enough! But run `git status` to check if your project directory is a repo and `git init` to make it into one if necessary. __Stop and commit your changes.__

2. Sign up for an account with heroku: https://www.heroku.com/

3. Install the [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (if you haven't done so already):

Once installed, you can use the heroku command from your command shell.

4. Log in using the email address and password you used when creating your Heroku account:

```bash
heroku login
# Enter your Heroku credentials.
# Email: zeke@example.com
# Password:
# ...
```

Authenticating is required to allow both the heroku and git commands to operate.

**(NOTE YOUR PROJECT MUST BE A GIT REPO TO CONTINUE.)**.

### Preparing for Heroku Deploy

5. Add a new remote to your project that points to Heroku's servers:

```bash
    heroku create
```

## Top level `package.json`

In the root of your project, you should see the `front-end` folder, the `back-end` folder, and a `package.json` file.  The following chunk of code needs to go into the `package.json` file, under the `scripts` property.

```json
  "scripts": {
    "deploy": "cd front-end && ng build --aot -prod -op ../back-end/dist && cd ..",
    "start": "node back-end/server.js"
  },
```

1. The `deploy` script bundles up all our Angular code and drops it into a folder called `dist` next to our backend `server.js` file (more on that soon).

2. The `start` script kicks off the back end `server.js` which also serves up the front end `dist` folder.

## `server.js`

Put the following code inside your `server.js` file:

1. The code below allows us to use `process.env` locally.
    ```js
      require('dotenv').config();
    ```
2. The code below sets up our critical node packages.
    ```js
      const express = require('express');
      const app = express();
      const path = require('path');
    ```
3. The code below enables CORS so that your Angular front end can communicate with your back end without errors when coding locally.
    ```js
      //CORS setup to allow other ports from this host

      //Only needed if not on Heroku/prod
      if(!process.env.DYNO) {
        app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "http://localhost:4200");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
          next();
        });
      }
    ```
4. The first line below serves up the front end.  Make sure you put the `app.get` part below any back end routes, because it creates a route that defaults to the front end if no back end routes exist (by serving up the Angular `index.html` file).
    ```js
      app.use(express.static(__dirname + '/dist'));

      app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
      });
    ```
5. The code below makes sure we can serve the app locally (3000) and on Heroku (process.env.PORT).
    ```js
      let port = process.env.PORT || 3000;

      app.listen(port, function() {
        console.log(`Listening on port ${port}`);
      });
    ```

## `back-end` `package.json`

Navigate to the `back-end` folder and double-check your `package.json` to make sure that all your depenedencies are present. If something is missing, install it.

For example, here are a bunch of common dependencies (*DO NOT COPY*):  
``` javascript
    {
      "dependencies": {
        "body-parser": "^1.13.3",
        "bower": "^1.5.2",
        "express": "^4.13.3",
        "express-session": "^1.11.3",
        "method-override": "^2.3.5",
        "mongoose": "^4.1.5"
      }
    }
```

If your `package.json` is missing any dependencies, you will need to both `install` and `--save` the package. For example, if you notice that the `mongoose` package is missing from your `package.json` you would need to run:

```bash
    npm install --save mongoose
```

## `.gitignore`

Inside your `front-end` folder will be a `.gitignore` file.  Move this up to the same level as your `package.json`.

Delete the `/dist` line toward the top of the `.gitignore` file and save it.

## Setting up the DB

### PSQL

1. If you are using postgres for your DB, you will need to run the command below to add a PSQL addon:

`heroku addons:create heroku-postgresql:hobby-dev`

2. Now go into your `index.js` file and change your Sequelize setup line to the following:

```js
    let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://<your_user>@localhost:5432/<your_db>');
```

### MongoDB

1. If you are using mongo for your DB, you will need to run the command below to add a MongoDB addon:

`heroku addons:create mongolab`

At this point, the command line will probably ask you to enter a credit card number. Follow the prompt.

> Heroku is a "freemium" service. Be careful! They will charge you if you exceed their data limits -- but our projects are tiny so we don't expect to get a lot of traffic!

**Patience...**  If you had to enter in a credit card, you can run `heroku addons` to check/confirm that mongolab was addded. __You may need to wait a few minutes for mogolab to become active.__

2. Update your database connection to point to Heroku's database. Open `models/index.js` and add the following to the `mongoose.connect` method:

```javascript
    mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
```

### Remoting to Heroku

If you have a `seed` or `dbSetup` task, you can run any commands on your heroku server just like you can locally, like this (assuming everything else is working):

``` bash
heroku run bash
> ls
> node back-end/db/seed.js
```

## Pushing to Heroku

Whenever you push to GitHub, you should also run the following commands to get your code to Heroku:

1. `npm run deploy` in the top level of your folder.
2. Git add, git commit, and push to `heroku master`.
3. Visit your application by running the following in Terminal:

```bash
    heroku open
```

## Debugging Tips

Here are some helpful commands for debugging your application on Heroku:

#### `heroku logs`
This command lists your most recent application server logs. Helpful for figuring out why your application may be crashing and burning.

#### `heroku run bash`
This command allows you to run terminal _on Heroku's servers_. This is a handy way for us to poke around and run commands on our application (like seeding the database, and checking that everything was installed correctly).
