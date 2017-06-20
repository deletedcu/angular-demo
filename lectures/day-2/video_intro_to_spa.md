# Video: Quick intro to SPAs and Push state

## Lesson Objectives

1. Define what a SPA is
1. List some advantages of a SPA over a traditional website
1. Describe PushState

## Define what a SPA is

A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a faster, more intuitive user experience. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

## List some advantages of a SPA over a traditional website

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

## Describe PushState

- PushState allows JavaScript to alter the browser's history as if a user is clicking on links and loading brand new pages
- This gives the appearance of the user actually visiting new pages
- If the application is set up correctly, it allows deep linking so that users can bookmark and share links to specific aspects of an application as if it were a page itself
- The user can use the back/forward buttons of the browser to move back/forward through their history of the various states they've used of the application.
    - Now it behaves just as if they were viewing multiple pages of a traditional site
