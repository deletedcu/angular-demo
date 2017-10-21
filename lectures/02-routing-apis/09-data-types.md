## Return Format

No user likes when they're on a page that takes forever to load. If your web app has a google map, a list of movies from OMDB, and a Spotify catalog, that's a lot of information! You want the information returned as quickly as possible so that users aren't waiting forever for your page to load.

All of this information — from all of these browsers and all of these servers — has to travel through the network. That's almost certainly the slowest part of the request cycle. We want to minimize the bits. There are times when we just need the data, and in those cases, we want a concise format.

All data sent via HTTP are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes) (because it makes much more sense to us!). Thus, native data structures can be **serialized** into a string representation of the data. Serializing refers to taking a giant string of data and turning it into something readable and useful.

There are two major serialized data formats that you will typically encounter: _JSON_ and _XML_.

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse. JSON looks like this - it's easily readable and information is separated with braces {} and commas.

```json
{
  "users": [
    {"name": "Wonder Woman", "id": 0},
    {"name": "Black Panther", "id": 1},
    {"name": "Batgirl", "id": 2}
  ]
}
```
> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It remains a major format, however, due to its legacy usage across the web.

XML has an idea of open tags and close tags - just like HTML.

```html
<users>
  <user id="0">
    <name>Wonder Woman</name>
  </user>
  <user id="1">
    <name>Black Panther</name>
  </user>
  <user id="2">
    <name>Batgirl</name>
  </user>
</users>
```


> Comparing those, you can probably see that most developers favor using a JSON API, if available. Conveniently, many APIs publish data in multiple formats and let you specify which you'd like. For example,
`https:///api/index.php?output=json` or
`https:///api/index.php?output=xml`




Chances are good that most major content sources you follow online publish their data in some type of serialized format. [Even Marvel Comics publishes an API](http://developer.marvel.com/documentation/getting_started). Look around for a "Developers" section on major websites. Or, if you'd like a cheat sheet you can try the [Programmable Web API Directory](http://www.programmableweb.com/apis/directory).

### Authentication

While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access.

Some APIs, such as Spotify's music catalog, might seem like they should be available for anyone to access, but imagine if PayPal had an API that shops could request your money from.
- Now imagine Etsy calls PayPal when you buy something. You'd want Etsy to have to prove it was actually Etsy, right? You don't want anyone to be able to pretend to be Etsy, go to PayPal, and charge you $500. Instead, you'd want Etsy to somehow authenticate to PayPal.

This is accomplished by giving Etsy a private key to use at PayPal that only Etsy knows. Every time Etsy makes a request to PayPal, Etsy can say, "Hey, I'm requesting this. Here is my proof that I'm allowed to do so."

Many APIs require a key. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

> Let's look. Try hitting the [Giphy](https://api.giphy.com/) API. You can just click these - it's documentation to show you how it's done.

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat).

You get back, in the center of the string: *"error_code":"invalid_api_key"* (and, on a note, it's in JSON formatting). The rest of the string is just more information.

* Now try with a key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

You get back the list of funny cats - still JSON formatting.
 > It'd be more readable if we added new lines between cat gifs in the list, but that's not automatic.


### Important note!
When you are calling APIs that require a key, it's up to you to store those keys somewhere private. They are the only proof that you are you and you are allowed to call that API, after all.

For example, it is very important that you not push your API keys to a public Github repo.

> This is especially true when working with [Amazon Web Services (AWS)](https://aws.amazon.com/). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).
