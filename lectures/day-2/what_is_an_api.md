# What is an API?

## Lesson Objectives

- Describe AJAX.
- Describe an API.
- Describe ow an API fits in with SPAs.

## Describe AJAX

- Asynchronous JavaScript and XML is a process where the browser makes requests for data to servers using JavaScript. This is done after the page loads and is usually in response to user input.
- The advantage is that a web page can respond to user input by making a request for data and then dynamically changing the state of the application based on that new data. This is done without needing to refresh or change the page.

## Describe an API

An Application Programming Interface (API) is a set of sub-routine definitions, protocols, and tools for building application software. These days, we work mostly with web-based APIs, which are essentially just websites that output data instead of HTML.

## Describe How an API Fits in With SPAs

- In a traditional server-side rendered application, the server retrieves data from the database and uses that information to format the HTML server-side (demo https://www.amazon.com).
- Now, a server retrieves the data from the database and responds to requests with JSON (demo http://www.swapi.co/).
- We can use various web-based APIs to populate our SPAs with data asynchronously. This way the user can interact with the application and see it respond with new data without needing to refresh or navigate to a new page (demo [/starwars](/starwars)).
