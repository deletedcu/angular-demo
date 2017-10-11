<!--
Creator: JP Barela / Zeb Girouard
Market: Denver
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Building Models

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Most applications include more than one model. Most of these models are related in some 
way, for instance, artists play multiple songs. Sequelize provides helpful methods for working with related models, just like finding and querying a single table.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- **Create** Sequelize models with ``has many`` and ``belongs to`` relationships
- **Create** Sequelize models with ``has one`` relationships 

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Create an Express app
- Create a model with Sequelize
- Get data from a SQL database using PostgreSQL

## Relationships 

It's time to start adding some relationships to the existing Tunr database. We're going to 
include information from the various models on different pages. We'll end up adding 
song information to artists and help managers gain some credibility by listing their 
clients. Finally we'll add an optional revenue source by enabling managers to create an ad 
to help attract new clients.

Now that our Tunr app has artists, managers, and songs, we need to connect them. Enter the ERD (Entity Relationship Diagram): 

![Tunr ERD](tunr_erd.png)

In this lab, we'll be implementing some of the ERD in our Tunr app.

#### Sprint 0 Setup the application

You'll notice the `starter-code` for this application is basically the finished version of the last lab.

What are the steps to set up a new application from Github?

<details>
Fork/clone the repo first.

This repo uses a different database than our Tunr database from last lab so you'll need to 
create it in psql.  You can see what it's called in `back-end/db/dbSetup.js`.  You can also replace `<username>` with your username.

Then run `npm install` in `back-end`, `node db/dbSetup.js`, `node db/seed.js`, and `nodemon server.js`.

Then `npm install` in `front-end` and run `ng serve`.
</details>

It's also a good idea to review the code and see what dependencies are included. What might be some useful dependencies that are included?

<details>
`express`, `sequelize`, `pg`, `pg-hstore`, `body-parser`
</details>

#### Sprint 1 Songs and Artists 
Our first goal is to add a list of songs to the artist detail page and add the artist name
to the list of songs. To do this, we'll create a **has many** relationship between the 
``Artist`` and ``Song`` models.

In the code, we'll need to:

1. Update the models to list the relationship
2. Add songs to an artist in our seed file
3. Update our view accordingly


__Update our models:__
To update our models we need to add only two lines of code. Remember our **belongs to** and **has many** keywords from our [SQL Relationships lesson](https://github.com/den-materials/joins-and-more)? We need to add those to our ``models/index.js`` file:

```js
...
Song.belongsTo(Artist);
Artist.hasMany(Song);
...
```

__Adding songs to an artist__

First, we need to define a few songs that we will add to our artist, and put them in our `db/seed.js` file:

```js
var lucySongs = [
	{
		title: "O sole mio",
		duration: "3:21",
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
	},
	{
		title: "Nessun dorma",
		duration: "3:21",
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
	}
];
```

Next, we need to add them to an Artist. If we're using the seed file, the first artist is Luciano Pavoritti.

How do we add all these songs to Luciano?  Well, remember our friend `foreign key` from our SQL Relationships lesson?
We need to put Luciano's artist id into a column in each song.  That will look like this:

```js
.then(function(artist) {
  	lucySongs.forEach(function(song) {
  		song.artistId = artist.id;
  	});
  	DB.Song.bulkCreate(lucySongs);
  });
```

Now, we should be able to access a song's artist with the ``.artist`` method. And the ``.songs`` method will 
give us the songs associated with an artist.

__Update our Views:__

First, we must update what we're getting back from the Database to include songs with our artist.

Let's add the following line to the top of our `artists` (server-side) controller:

`var Song = db.models.Song;`

Then we need to include any Song that matches our artist ID in our `show` route:

```js
  Artist.findById(req.params.id, {
    //Return all songs that have a matching artistId
    include: Song
  })
```

Finally, we need to add an unordered list to ``artist-show/artist-show.component.html`` with all our songs: 
```html
<ul>
  <li *ngFor="let song of oneArtist.songs">{{song.title}}</li>
</ul>
```

Run `db/dbSetup.js` again to accommodate the changes we made to our models.  Then seed your database.  Finally, restart your server, and let's review our work!

#### Sprint 2 Artists and Managers

Just like artists need to highlight the hit songs they are associated with, managers need to highlight the hit artists they are associated with.

First, we need to create a ``has many`` relationship between managers and artists. Try to do 
this without looking at the Sprint above first, then correct as needed. Don't forget to run `dbSetup.js`, or you won't be able to finish the next steps.

Now we have a ``has_many`` relationship between ``Manager`` and ``Artist``, so we need to seed our DB a little differently.  Add Pavarotti to Ricky Bobby's roster. Try to do this without looking at the Sprint above first, then correct as needed.

>**Hint:** Maybe the manager should be created first now, then we can pass its id into the artist creation function in a `.then` clause.  Once this is done, do we even need to call `artistCreate()` at the bottom of `seed.js`?

Now, let's add an unordered list of the manager's songs to `manager-show/manager-show.component.html`.  Again, try to do this without looking at the Sprint above, then correct as needed. Don't forget to change the `managers.js` controller as well.

#### Sprint 3 Manager Ads
Last, but not least, let's start adding some revenue to Tunr. We're enabling managers to create
ads to help drum up business.

We'll do the following steps to add ads to our managers.

1. Create a new model ``Ad`` that includes the fields ``headline`` and ``url`` (both Strings).
2. Add a  ``Manager`` ``has_one`` ``Ad`` relationship.
3. Add an ``Ad`` ``belongs_to`` ``Manager`` relationship. 
4. Create a new Ad in `seed.js` and associate the Ricky Bobby manager to the ad.
5. Include `Ad` in the back-end controller for `manager` `index`.
6. On the manager index page, for each manager add the ad headline as a link to the ad url.
7. Make sure you run `dbSetup.js` and `seed.js`, then test it out!

## Closing Thoughts
Relationships are one of the most powerful ways we have of manipulating data. They let us 
use the JS methods and object that we are much more comfortable with rather than SQL which 
can be messy and lead to bugs.

## Resources

- [Sequelize Associations Official Docs](http://docs.sequelizejs.com/en/v3/docs/associations/)
- [Solid Sequelize Tutorial with more advanced topics](https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1)\*
- [How to make many-to-many relationships](http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/)

\* Beware, this tutorial has some typos, misplaced files, and poorly explained concepts.  I give it a 7/10.  If you want to get used to reading tutorials, this is a pretty good example of what I'd call "good enough".

## Licensing

All content is licensed under a CC­BY­NC­SA 4.0 license. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact <a href="mailto:legal@ga.co">legal@ga.co</a>.
