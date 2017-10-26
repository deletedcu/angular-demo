<!-- Note: Matches React material -->

<!--9:49 WDI4-->
<!--WDI5 1:49 -->

# What is an API?

## Lesson Objectives

*By the end of this lesson, you will be able to:*

- Describe AJAX.
- Describe an API.
- Describe how an API fits in with SPAs.

## Describe AJAX

- Asynchronous JavaScript and XML (AJAX) is a process in which the browser makes requests for data to servers using JavaScript. This is done after the page loads and is usually in response to user input.
- The advantage is that a web page can respond to user input by making a request for data and then dynamically changing the state of the application based on that new data. This is done without needing to refresh or change the page.

## Describe an API

An application programming interface (API) is a set of subroutine definitions, protocols, and tools for building application software. These days, we work mostly with web-based APIs, which are essentially just websites that output data instead of HTML.


## What is an API?

**What is an API?**

> Basically, an API is a service that provides raw data for public use. As third-party software developers, we can access an organization's API and use their data within our own applications.

What if you want a Google map embedded in your web app to show people where they can visit you? You aren't going to make that map yourself, so somehow you have to call Google. Well, Google has an API you can call to get the map information - all you have to do is send a request to the API that Google provides, and Google gives you a google map back that you can use.

API stands for "Application Program Interface" and technically applies to all of software design. The DOM and jQuery are actually examples of APIs! Since the explosion of information technology, however, the term now commonly refers to web URLs that can be accessed for raw data.

> Q: Why do we care?

Why recreate data when we don't have to? Think about past projects or ideas that would be easier if you could pull in data already gathered elsewhere.

APIs can provide us with data that would we would otherwise not be able to create ourselves.

As we move into building single page applications, now is the perfect time to start understanding how to obtain data on the client side and then render it on the browser.

## API Exploration

There are a variety of APIs available on the internet. To call an API, send a request to a URL, and that API will return data to your program. You can pull data from anywhere that offers an API.

You can make this request as specific as you'd like - each web app out there offers different options for their API. You just have to find out from them what you can request!

Here are just a few examples of APIs that you can use. Check it out - the left column is the common name you might know. The right column is the URL you, in your program, would send a request to. You can click those URLs to see what each call would return.

| What's the API? | Sample URL - you call this |
|------|------------|
| **[Giphy's API: request a list of all funny cats](https://github.com/Giphy/GiphyAPI)** | http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC |
| **[The Star Wars API: request R2-D2 info](http://swapi.co/)** | http://swapi.co/api/people/3 |
| **[Markit Digital's API: request current Apple stock info](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)** | http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL



> Does the JSON look unreadable in the browser? If you're using Chrome, install the [JSON View plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).


### Hmmm.

Can you think of any websites you go to that pull information from other places, so they probably use an API?


## Describe How an API Fits in With SPAs

- In a traditional, server-side-rendered application, the server retrieves data from the database and uses that information to format the HTML on the server side <!-- (Demo https://www.amazon.com). -->
- Now, a server retrieves the data from the database and responds to requests with JSON <!-- (Demo http://www.swapi.co/). -->
- We can use various web-based APIs to populate our SPAs with data asynchronously. This way the user can interact with the application and see it respond with new data without needing to refresh or navigate to a new page <!-- (demo [/starwars](/starwars)). -->


<!--WDI5 1:59 -->
<!--9:56 WDI4 -->
