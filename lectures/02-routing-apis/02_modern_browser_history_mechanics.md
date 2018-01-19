<!-- Note: Excepting the end, the same as React -->

## Single Page Apps Break Old History Mechanics!
Now here's the catch, and why we went into such detail about browser history
mechanics and defining what exactly Single Page Applications (SPAs) are - Single Page Applications break the initial design of Browser History Mechanics.

Why is this? The **back** and **forward** actions were built specifically to go back and
forth between different pages. Since single page apps only change the content
of themselves without actually sending users to different web pages the notion
of **back** and **forward** is lost.

When users press the **back** button in a Single Page Application they go back
off the one page, completely out of the Single Page Application.

**Imagine** being on Wikipedia, going to Gmail, going through several views of
different email inboxes and search results, and then pressing the back button. This process would go something like this:

* Go to wikipedia.org
* Type in www.gmail.com (or whichever) to check your email
* Click on one email
* Search your email for something
* Open that email
* Click 'back' in your browser to go back to the search results
* You used to end up back at wikipedia.org
* But you don't anymore...why?

Gmail and most mail apps are Single Page Applications - despite the content changing, you are always on gmail.com. Using old modern history mechanics (the ones we've learned so far), because of this, pressing the back button will take the user back to the last different URL they visited - in this case, Wikipedia - when really, the user just wanted to go back
to their email search results.

## Introducing Modern Browser History Mechanics
So - developers need to have their fast loading web applications, but somehow still have the 'back' button work.

Web Developers, browser vendors, and users (even if they don't know it) all love Single Page Applications; they're a great experience that the community is embracing. To facilitate these and still have things like the 'back' button work, a few years ago, people got together in committees and devised a way to upgrade the old
browser history mechanics to accommodate modern SPAs.

The modern HTML5 specification (published in October 2014) introduced new browser history mechanics that make it easy to browse "back" and "forward" in single-page applications, even while actually staying on the same page.

** How? **

HTML5 introduced:
- `.pushState()`  
- `.replaceState()`

These are functions that allow web pages to save custom history data to the browser.

Applications like Gmail can use
these functions to manually save custom browser history. For example, Gmail can use `.pushState` to put in the browser history that a user is on their search results page, so if they go into an email and click 'back', they get back to the search page - instead of off gmail.com completely.


A bit more technically, when someone goes from
their inbox to a specific email, Gmail can use `.pushState` to save in the browser information
about what the user is currently doing in the application. Now when the user
presses the 'back' button, the browser gives the saved information back to
Gmail and Gmail brings back the content the user was last looking at.



# Recap
Here's a summary of what we've learned so far for routing:

### Single Page Applications and Browser History Mechanics
* Single Page Applications are websites that serve only one web page, then
  change the content of that page dynamically, without refreshing.
* Old browser history mechanics support **back** and **forward** operations that
  traditionally keep track of history as users move between different pages.
* Since modern Single Page Applications keep the user on one page without
  refreshing old browser history **back** and **forward** mechanics don't work
  well with modern applications - so HTML5 changed the rules of how 'back' and 'forward' can work.


## Some advantages of an SPA over a traditional website

- Load time is slower up front, but faster with each interaction
    - The server sends one large file up front, but then just sends tiny chunks of data to the user for each request (rather than an entire brand new page)
    - Making one request for a large file takes less time than making many requests to smaller files
        - HTTP request/response cycle is slow compared to the time it takes to download the response to the client computer
            - It's like moving.  Would you take a bunch of small boxes out to the truck one by one, or would you stack them up and take a bunch all at once?
        - This lightens the amount of traffic to/from the server
    - Users are usually willing to wait a little up front, but get impatient if they have to wait after each interaction
- The server doesn't have to do as much work and therefore can be less powerful (and cheaper!)
    - The client (browser) does the heavy lifting of rendering the site on the user's computer
    - In traditional, server-side rendering, the server does the heavy lifting
        - This is bad because it requires one computer to do a lot of work for many users
        - It's better to have many computers do this work on their own
            - It's a great example of distributed computing!
            - Personal computers are fast enough now to handle this

## Demonstrate an SPA
1. Go to [Google Maps](https://www.google.com/maps/)
    1. Pan/zoom around
    1. Observe how the tiles update as you interact
    1. This is one of the first sites that made SPAs popular!

<!--WDI5 9:52 -->
