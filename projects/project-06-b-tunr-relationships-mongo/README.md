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
way, for instance, artists play multiple songs. Mongoose provides helpful methods for working with related models, just like it helps with querying a single collection.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- **Create** Mongoose models with ``has many`` and ``belongs to`` relationships (referenced data)
- **Create** Mongoose models with ``has one`` relationships (embedded data)

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Create an Express app
- Create a model with Mongoose
- Get data from a Mongo database using Mongoose

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
Fork/clone the repo, `npm install` in `back-end` and run `node db/seed.js` and `node server.js`.  And then `npm install` in `front-end` and run `ng serve`.
</details>

It's also a good idea to review the code and see what dependencies are included. What might be some useful dependencies that are included?

<details>
express, mongoose, dotenv, body-parser
</details>

#### Sprint 1 Songs and Artists 
Our first goal is to add a list of songs to the artist detail page and add the artist name
to the list of songs. To do this, we'll create a **has many** relationship between the 
``Artist`` and ``Song`` models.  We still need the ``Song`` collection to stand on its own, though, so we'll be using *referenced data* for this task.

In the code, we'll need to:

1. Update the models to list the relationship
2. Add songs to an artist in our seed file
3. Update our view accordingly


__Update our models:__
To update our models we need to add only one line of code in our `back-end/models/artist.js` file. If you don't remember where to put this line to implement referenced data, you can check out [this example](https://github.com/den-materials/mongoose-books-app/blob/solution-sprint-3/models/book.js)

```js
...
songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
...
```

__Adding songs to an artist__

First, we need to define a few songs that we will add to our artist, and put them in our `db/seed.ts` file.  Replace `songs_list` with `lucySongs`:

```js
let lucySongs = [
  {
    title: "O sole mio",
    duration: "3:21",
    date_of_release: "1990",
    album_title: "Three Tenors in Concert"
  },
  {
    title: "Nessun dorma",
    duration: "3:21",
    date_of_release: "1990",
    album_title: "Three Tenors in Concert"
  }
];
```

Next, we need to add them to an Artist. If we're using the seed file, the first artist is Luciano Pavoritti.

How do we add all these songs to Luciano?  We will need to restructure our artist creation a bit.  That will look like this:

```js
db.Song.remove({}, function(err, songs) {
  console.log('removed all songs');
  db.Song.create(lucySongs, function(err, savedSongs){
    if (err) {
      console.log(err);
      return;
    }
    console.log("created", savedSongs.length, "songs");

    db.Artist.remove({}, function(err, artists) {
      let lucy = new db.Artist({
        name: artists_list[0].name,
        photoUrl: artists_list[0].photoUrl,
        nationality: artists_list[0].nationality,
        instrument: artists_list[0].instrument,
        home_address: artists_list[0].home_address
      });
      lucy.songs = savedSongs;  
      lucy.save(function(err, savedArtist){
        if (err) {
          return console.log(err);
        }
        console.log('saved ' + savedArtist.name);
        db.Manager.remove({}, function(err, managers) {
          console.log('removed all managers');
          db.Manager.create(managers_list, function(err, managers){
            if (err) {
              console.log(err);
              return;
            }
            console.log("created", managers.length, "managers");
            process.exit();
          });
        });
      });
    });
  });
});
```

Resist the urge to copy and paste here.  Typing this out will build the skills you need to seed referenced data in the future.

Now, we should be able to access a artist's songs with the ``populate('song')`` method.

__Update our Views:__

First, we must update what we're getting back from the Database to include songs with our artist.

To do this, we need to include any Song that matches our artist ID in our `show` function in our `artists` (server-side) controller:

```js
Artist.findById(req.params.id).populate('songs')
  .exec(function(err, artist){
    if (err) res.send(err);
    else if (!artist) res.send(res, "not found");
    else res.json(artist);
  }); 
```

Finally, we need to add an unordered list to ``artist-show/artist-show.component.html`` with all our songs: 
```html
<ul>
  <li *ngFor="let song of oneArtist.songs">{{song.title}}</li>
</ul>
```

Seed your database if you haven't already.  Finally, restart your servers, and let's review our work!

#### Sprint 2 Artists and Managers

Just like artists need to highlight the hit songs they are associated with, managers need to highlight the hit artists they are associated with.

First, we need to create a ``has_many``, `embedded` relationship between managers and artists. Try to do 
this without looking at the Sprint above first, then correct as needed.

Now we have a ``has_many`` relationship between ``Manager`` and ``Artist``, so we need to seed our DB a little differently.  Add Pavarotti to Ricky Bobby's roster. Try to do this without looking at the Sprint above first, then correct as needed.

>**Hint:** We created a `new` `Artist` called `lucy` before then `save`d him.  How might we create a `new` `Managaer` called `bobby` then `save` him?

Now, let's add an unordered list of the manager's songs to `manager-show/manager-show.component.html`.  Again, try to do this without looking at the Sprint above, then correct as needed.  Don't forget to change the `managers.js` controller as well.

#### Sprint 3 Manager Ads
Last, but not least, let's start adding some revenue to Tunr. We're enabling managers to create
ads to help drum up business.

We'll do the following steps to add ads to our managers.

1. Create a new schema ``AdSchema`` inside `models/manager.js` that includes the fields ``headline`` and ``url`` (both Strings).
2. Embed the `Ad` schema inside the ``Manager`` schema.
3. Create a new Ad in `seed.js` and embed the ad in the Ricky Bobby manager.
4. Include `Ad` in the back-end controller for `manager`.
5. On the manager index page, for each manager add the ad headline as a link to the ad url.

## Closing Thoughts
Relationships are one of the most powerful ways we have of manipulating data. They let us 
use the JS methods and object that we are much more comfortable with rather than Mongo which 
can be messy and lead to bugs.

## Resources

- [Mongoose Books App (Everything except Angular)](https://github.com/den-materials/mongoose-books-app)
- [Embedded vs Referenced Data](https://github.com/den-materials/mongo-structured-data/)

## Licensing

All content is licensed under a CC­BY­NC­SA 4.0 license. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact <a href="mailto:legal@ga.co">legal@ga.co</a>.
