# What is Push State?

# Lesson Objectives

1. Describe PushState
1. Demonstrate a SPA that uses Push State

## Describe PushState

- PushState allows JavaScript to alter the browser's history as if a user is clicking on links and loading brand new pages
- This gives the appearance of the user actually visiting new pages
- If the application is set up correctly, it allows deep linking so that users can bookmark and share links to specific aspects of an application as if it were a page itself
- The user can use the back/forward buttons of the browser to move back/forward through their history of the various states they've used of the application.
    - Now it behaves just as if they were viewing multiple pages of a traditional site

## Demonstrate a SPA that uses Push State

1. Go to [Google Maps](https://www.google.com/maps/)
    1. Pan/zoom around
    1. Observe how the URL changes
    1. Copy the URL after it's changed
    1. Note what the map currently looks like
    1. Close the window
    1. Open a new window and paste the copied URL into the URL bar.  Hit enter (duh)
    1. Note that the page has opened to show the map exactly as it was when we copied the URL
1. Go to a public [Trello](https://trello.com/)
    1. Note the current URL
    1. Open a card by clicking on it
    1. Note how the URL has changed
    1. Copy the URL after it's changed
    1. Note which card has been opened
    1. Close the window
    1. Open a new window and paste the copied URL into the URL bar.  Hit enter (duh)
    1. Note that the page has opened to show the card that was opened when we copied the URL
