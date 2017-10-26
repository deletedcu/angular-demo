<!-- Note: Same as in React module -->

<!--9:20 WDI5 -->

# Browser History Mechanics

Browsers have built-in history mechanics.
- Browsers have built in buttons for users.
  - You can go **back** and **forward** between pages you've visited.
- These actions are also available to us in JavaScript.
  - We can write JavaScript programs that invoke `window.history.back()` and `window.history.forward()`.

This seems pretty straightforward, right?

However, the rise of recent approaches to websites - like Angular and React - broke old, traditional browser history mechanics and led to the introduction of new ways for websites to control what **back** and **forward** really mean.


## Objectives of this section
* Understand old browser history mechanics
* Introduce URL routing
* Introduce Single Page Applications (SPAs)
* Understand why old browser history mechanics don't work for SPAs
* Introduce modern browser history mechanics


# Browser History Mechanics
Browsers have built in history mechanics. You can go **back** and **forward**
between pages you've been been to and you can **reload** the page you're on.

<!--WDI5 9:24 -->

## Exercise
Open a new tab in your browser and navigate to the Wikipedia article for
[Cafe Allegro](https://en.wikipedia.org/wiki/Cafe_Allegro) in Seattle.

* Hover over the link to the "Seattle" entry near the top of the article and look at the URL.
* Notice that the URL says `wikipedia.org/wiki/Seattle`. It does not include `Cafe_Allegro`, and there is no hashtag. This URL takes us to an entirely different page.
* Click the link to "Seattle" and notice how your browser goes blank and loads another page, which is also full of links to other articles.
* Click on several more links, paying attention to when the browser goes blank and loads a completely new page.
* Hold down your mouse on the **back** button. You'll see a drop down menu
  showing every page you've been on.

Holding down the back button to look at your browser history should show
something like this:

![Cafe Allegro to General Assembly](assets/allegro_to_GA.png)

Browser history mechanics are built for going **back** and **forward** between
different pages. Browsers have the back and forward buttons for users. These
actions are also available to us in JavaScript. We can write JavaScript programs
that invoke `window.history.back()` and `window.history.forward()`.

It's important to specifically note what a "page" is.
- A page is a whole HTML file that your browser downloads and displays. You know you're navigating between two different pages when you see your browser screen go blank then slowly load in a totally new page.

Pages can be all on the same site or on many different sites. A site is a domain, such as Yelp.com, IMDB.com, Google.com.

Browsing pages on one site is like viewing different articles on Wikipedia - you haven't left the Wikipedia site; you're just looking at different pages on it.

Browsing pages on different sites is like using a search engine to look up a restaurant, looking at Yelp's website, and then looking at a restaurant's official website. The
browser is still visiting different *pages* they're just on different *sites*.

We're going into detail about what a page is in order to draw contrast to how
modern web applications don't use multiple pages like they used to. Modern web
applications are now often what we call **Single Page Applications**.

Before we get into Single Page Applications, let's talk about URL routing.

# What is URL Routing?
**Routing** defines what content is displayed when someone visits a certain a
URL.
- If you go to `http://github.com/`, you expect to see GitHub's home page.
- If you go to `http://github.com/login`, you expect to see a log-in page.
These are two different pages on the same site, and each of these URLs is a **route**. A route pairs a URL with the content that should
be displayed for that URL. If you visit a webpage, copy the URL, and send it to a friend, your friend should end up viewing the same page.

Let's look at an example of how content is routed by URLs by looking at the
General Assembly homepage. Go to [General Assembly's Website](https://generalassemb.ly/). Interact with the menu in the top bar on the right.

You should see options for things like "On Campus," "Locations," and
"About." Click on the different links to pages and notice the URLs that you end
up at, or hover over the links to see their URL to save yourself from actually
navigating off the page, and specifically, look at their paths.

**What's a path?**
This table shows the **path** for each URL. The path of a URL is everything
after the domain name. In this case, the path is everything that appears after "https://generalassemb.ly" in the location bar of the browser. The `/` path is a special path called the root. It loads the homepage.

Compare the paths in the URLs and get a sense for how URLs are routed to
content. Websites URLs are general split into succinct, descriptive,
hierarchical categories. Notice how going to `/locations` takes you to a page
showing all campus locations, then each specific location falls in a hierarchy under that such as `/locations/london` and `/locations/singapore`.

| **URL Route**                       | **Content**                                              |
|-------------------------------------|----------------------------------------------------------|
| /                                               | Homepage                                     |
| /about                                          | General Information                          |
| /education                                      | Shows all local upcoming courses             |
| /education/web-development-immersive            | WDI course details                           |
| /education/user-experience-design-immersive     | UX course details                            |
| /locations                                      | Shows all global GA locations                |
| /locations/london                               | Shows London-specific location information   |
| /locations/singapore                            | Shows Singapore-specific location information|

You can see that URLs *route* users to content. When someone types in a URL
they are ultimately shown content associated with that URL.

Have you ever tried to send someone a link to what you're looking at on Google
Maps and then when they click on your link they end up looking at something
completely different? That's a great example of bad URL routing. (Google Maps
is actually much better about this these days.) URLs should represent the
main content of the page you're looking at!

Old websites:
- Spread their content across multiple pages.
- Use URLs to route users to different pages.
- Can use URLs with hashtags to take the user to different content on the same page.

For example - Open a new tab in your browser and navigate back to that Wikipedia article for
[Cafe Allegro](https://en.wikipedia.org/wiki/Cafe_Allegro) in Seattle.

* Hover over the "1. History" link in the Contents section
  ![History Link](assets/hover-over-history-link.png)
* Look in the lower-left corner of your browser to see the URL associated with the link.
* Notice the URL is `wikipedia.org/wiki/Cafe_Allegro#history`. Specifically note the hashtag `#history`.
* Click the history link and notice how it scrolls you down within the same page. This still counts as a route — it's navigating you to a new section on the same page.

# Modern Single Page Applications
Now, consider web pages where, depending on what you click, the actual content of the page dynamically changes - the page itself never reloads. Modern web apps serve up just one page and then change parts of its *contents*, without having to reload the entire page or send users to another page.

Websites that serve up only one page and change the content of the page dynamically without reloading it are called **single-page applications**.

Open your browser and navigate to Gmail (or whichever email site you use):

* When you load Gmail, you see your inbox.
* You can start instant messaging a friend in a sidebar.
* You can start to compose a new email to your manager to request time off.
* You can search for an email with flight information.
* You can browse through more emails to make sure you've talked to your manager about getting time off and aren't just disappearing for a week.

This all happens on one page! The page never refreshes. The chat bar with your friend never disappears as you compose an email and search through your inbox.

Gmail fits the definition of a single-page application.
- Gmail loads one page just once.
- That page replaces content dynamically to show the user many different things.
- That single page changes its content dynamically without reloading or sending you to another page.

Consider the benefits of a single page application:
* It's fast. Users don't have to wait for a page to reload over and over.
* It's persistent. You can have a chat window open in one corner and keep
  talking to a friend as the rest of Gmail switches between showing you your
  inbox, an email, or email search results.

<!--WDI5 9:35 -->
