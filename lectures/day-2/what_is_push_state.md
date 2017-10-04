# What is pushState?

# Lesson Objectives
*By the end of this lesson, students should be able to:*

- Describe pushState.
- Demonstrate an SPA that uses pushState.

## Describe pushState

- pushState allows JavaScript to alter the browser's history as if a user is clicking on links and loading brand new pages.
- This gives the appearance that the user is actually visiting new pages.
- If the application is set up correctly, it allows deep linking so that users can bookmark and share links to specific aspects of an application as if it were a page itself.
- The user can use the back/forward buttons of the browser to move back/forward through their history of the various states of the application they've used.
    - Now it behaves just like if they were viewing multiple pages of a traditional site.

## Demonstrate a SPA That Uses pushState.

1. Go to [Google Maps](https://www.google.com/maps/).
    - Pan/zoom around.
    - Observe how the URL changes.
    - Copy the URL after it's changed.
    - Note what the map currently looks like.
    - Close the window.
    - Open a new window and paste the copied URL into the URL bar. Hit enter.
    - Note that the page has opened to show the map exactly as it was when we copied the URL.
1. Go to a public [Trello](https://trello.com/).
    - Note the current URL.
    - Open a card by clicking on it.
    - Note how the URL has changed.
    - Copy the URL after it's changed.
    - Note which card has been opened.
    - Close the window.
    - Open a new window and paste the copied URL into the URL bar. Hit enter.
    - Note that the page has opened to show the card that was opened when we copied the URL.
