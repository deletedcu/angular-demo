# What is an API?

## Lesson Objectives

1. Describe AJAX
1. Describe an API
1. Describe how an API fits in with SPAs

## Describe AJAX

- Asynchronous JavaScript and XML is a process where the browser makes requests for data to servers using JavaScript.  This is done after the page loads, usually in response to user input
- The advantage is that a web page can respond to user input by making a request for data and then dynamically changing the state of the application based on the new data.  This is done without needing to refresh or change the page

## Describe an API

An Application Programming Interface (API) is a set of subroutine definitions, protocols, and tools for building application software.  These days, we work mostly with web-based APIs which are essentially just websites that spit out data instead of HTML.

## Describe how an API fits in with SPAs

- In a traditional server-side rendered application, the server retrieves data from the database and uses that information to format the HTML server-side (demo https://www.amazon.com).
- Now though, a server retrieves the data from the database and responds to requests just with JSON (demo http://www.swapi.co/)
- We can use various web-based APIs to populate our SPAs with data asynchronously.  This way the user can interact with the application and see it respond with new data without needing to refresh or navigate to a new page (demo [/starwars](/starwars))
