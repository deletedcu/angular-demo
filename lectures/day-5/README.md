# Exercises With Code Bases

<!--WDI4 1:35 introing to devs, 1:41 turning over to devs for independent work-->

## Adding a Feature

Look around [the comments app](https://github.com/den-materials/angular-comments).  This is just a basic app that displays a list of comments.  You may need to run `npm install` for it to work.

- Alter it so that each comment has an author, represented by a string.
- Add a feature that allows you to add more comments
    - This should be all within the same component
    - Visually, it should consist of two text inputs (one for author, one for comment) and a submit button
- Add a feature that allows you to delete comments
- Add a feature that allows you to edit comments
    - You should be able to click on a comment, and the text will be replaced by two text inputs (one for author, one for comment)

## Changing a Feature

Look again at what you did in [the comments app](https://github.com/den-materials/angular-comments).  It's all in one component, which isn't very modular.  Put the list of comments into one component and put the new comments form into another component.  Use observables to communicate between the two.

At the moment, there's no styling.  Add some by incorporating [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), or [Skeleton](http://getskeleton.com/).  Feel free to write your own CSS as an alternative to using one of the above CSS frameworks.

## Fixing Bugs

Someone has hacked up the [Tour Of Heroes](https://angular.io/tutorial/toh-pt5) demo from google!  Go into [heroes](https://github.com/den-materials/angular-heroes), run `npm install` and `npm start` to start the app.  Try to fix all the errors so that it works like [this](https://embed.plnkr.co/?show=preview).  Try not to look at the code listed in the previous link, unless you're absolutely stumped.

## Choose Your Own Adventure!

Do whatever you want during this time!  Here are some suggestions:

- Extend your [comments app](https://github.com/den-materials/angular-comments) even further by creating sign-up/log-in functionality:
        - Use routing to display a main page which prompts them with links to two pages (log in/sign up)
        - On the sign up page, users can create a user with a username, full name, password, and email
            - username and email must by unique!  No two users can have the same username or email address
        - On the log in page, users can log in with either email or username and password.  The user must already exist
            - Once logged in, the user is taken to the main comments app as it was before
            - Alter this app so that when adding new comments, there is no `author` text input field.  Instead, the logged in user's full name is used.
- Create a brand new app, using one of [these free APIs that don't require authentication](https://shkspr.mobi/blog/2016/05/easy-apis-without-authentication/).  There are some more links [here](https://github.com/toddmotto/public-apis), but some of them require authentication.
- Deploy your own backend api and use that in an app
- Use the [json server](https://github.com/typicode/json-server) as a dummy api
- See if you can create a game like Tic-Tac-Toe or Hangman
