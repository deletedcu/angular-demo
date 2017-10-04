![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Service Workers

### Why Is This important?

Users of modern web apps have grown accustomed to:

- Very **fast response times**.
- **Cached offline resources** when the internet connection is slow or non-existent.
- **Pleasant offline responses**/error messages in all other circumstances.

With that in mind, we can take advantage of Service Workers to give users what they want.

### What Are the Objectives?
*After this less, you will be able to:*

- **Install** and **activate** a Service Worker.
- **Utilize** a Service Worker to fetch a resource.
- **Utilize** a Service Worker to cache a resource.

![](resources/noService.png)

### What is a Service Worker?

*A Service Worker is a script that your browser runs in the background — separate from a web page — and opens the door to features that don't need a web page or user interaction.* 

**_ Google**

### Our First Service Worker

#### Setup

In order to get started, we need to do a little front-end setup:

1. Create a new folder called `first-service-worker`.
2. Create a new `index.html` file inside this folder.
3. Fill `index.html` out with the basic HTML boilerplate and a "Hello World" heading.
4. Create a `service-worker.js` file inside the same folder.

#### Dev Tools Revisited

Open up Chrome Developer Tools and select the `Application` tab. This is where we'll be playing the most today.

![](resources/swDevTools.png)

#### Linking to Our HTML

Add a `<script>` tag at the bottom of your `index.html` `<body>`. Put the following code snippet inside the tag.

```js
// 1
if ('serviceWorker' in navigator) {
// 2
  window.addEventListener('load', function() {
// 3
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```

Let's walk through what's happening here.

1. Not all browsers support Service Workers just yet. We need to make sure we can use them here.
2. Next we need to tie our Service Worker to the page load.
3. Now we need to `register` our Service Worker. In other words, we need to tell the browser where our Service Worker code is.

Save your work and start a web server like Python's `SimpleHTTPServer` in your folder.

>**Note:** It's *very important* that you load your page with a web server, rather than opening the HTML file directly.  Service Workers do not work on static files.

### Actually Doing Work With our Service Worker

We have a Service Worker!

Now let's make it do something. Open your `service-worker.js` file and add the following line:

```js
self.addEventListener('install', function(event) {
  // Perform install steps
});
```

#### The Service Worker Life Cycle

Installing is the first of two important steps our Service Worker takes before we can take advantage of its caching and fetching power.

![](resources/sw-lifecycle.png)

It's important that we never disrupt service for our users. For that reason, we split the process in half.

- **Installing** adds the new Service Worker to the browser, but keeps the old Service Worker running the whole time.
- **Activating** switches out the old Service Worker for the new one.

Some tasks are best left to the **install** step and some for the **activate** step. Let's look at one of the most important **install** tasks: caching.

#### Caching an Image

Remember Xzibit? He had some very powerful things to say about software tests.

1. Download the image (or an image of your choice) from the `resources` folder in this repository and place it in your `first-service-worker` folder.

2. Create an `img` HTML element with a `src` pointing to the king of Pimp My Ride.

3. Refresh your page. We have a meme!

4. Now go into Dev Tools and select `Service Workers` under the `Application` tab.

5. Check the `Offline` box at the top of the developer tools section and refresh the page. Oh no, our beautiful page is gone.

6. Let's fix this, we need to cache some files in our **install**. Add the following lines to `service-worker.js`:

```js
var CACHE_NAME = 'service-worker-cache-v1';
var urlsToCache = [
  'index.html',
  'xzibit_testing_software.jpg'
];
```

7. Now that we have a named cache and files to put inside it, we need to load the cache when we install our Service Worker.  Add the following lines to your `install` listener:

```js
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```

8. Save your files, go back to your browser, deselect `Offline`, and refresh the page.

9. Xzibit is back, but is he here to stay? Click the `Cache Storage` item on the left of your `Application` tab in developer tools.

>**Note:** Sometimes the cache doesn't update immediately. If it looks empty, you can close the developer tools and open it again to bring in the newest cache.

10. Our resources are in the cache. Now we need to reference these any time we're offline. To do that, add the following `fetch` handler to `service-worker.js`. `fetch` is an API that Service Workers use to grab online resources — similar to XML/HTTP requests:

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

11. Refresh your browser, cross your fingers, select `Offline` again, and refresh your browser one more time. Good job!

### Conclusion

- What is a Service Worker?
- Why is a Service Worker useful?
- Name two steps in the Service Worker life cycle.
- What is `fetch`?
