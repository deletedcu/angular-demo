# What is a SPA?

## Lesson Objectives
*By the end of this, developers will be able to:*

- Define what an SPA is
- List some advantages of an SPA over a traditional website
- Demonstrate an SPA

## Define what an SPA is

A **single-page application** (SPA) is a web application or web site that fits on a single web page with the goal of providing a faster, more intuitive user experience. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

## List some advantages of an SPA over a traditional website

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
1. Go to a public [Trello](https://trello.com/)
    1. Interact with cards/lists
    1. Note that creating/moving/editing/deleting cards does not cause the page to refresh, even though the data is saved
    1. Perhaps have a student go to the same board and interact with it.  Note that changes appear for the instructor in real time
