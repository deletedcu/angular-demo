# Exercises With Code Bases

<!--WDI4 1:35 introing to devs, 1:41 turning over to devs for independent work-->

## Adding a Feature

Look around [the comments app](https://github.com/den-materials/angular-comments). This is just a basic app that displays a list of comments. You may need to run `npm install` for it to work.

- Alter your comments so that each comment has an author (represented by a string).
- Add a feature that allows you to add more comments.
    - This should all be within the same component.
    - Visually, it should consist of two text inputs (one for author, one for comment) and a submit button.
- Add a feature that allows you to delete comments.
- Add a feature that allows you to edit comments.
    - When you click on a comment, the text should be replaced by two text inputs (one for author, one for comment).


<!--WDI4 2:31 taking a break -->
<!--WDI4 2:42 coming back, few minutes to explain, then devs on their own at 2:46, let devs run with it till 4-->

## Changing a Feature

Look again at what you did in [the comments app](https://github.com/den-materials/angular-comments). It's all in one component, which isn't very modular. Put the list of comments into one component and the new comments form into another component. Use Observables to communicate between the two.

1. First, abstract out all the comments logic into a service called `comment-service.ts`. Create a `commment/` directory, and run `ng g service comment`. Look at your `balance.service.ts` from the Vending Machine Lab as reference.
    - Your comment service should have the following methods: `updateSubject()`, `getComments()`, `addComment()`, `deleteComment()`, and `onCommentUpdated()`. The methods `setComments()` and `editComment()` are nice-to-haves, but not necessary.
    - Your comment service should have the following variables: `comments` (array) and `subject` (Observable).
    - Make sure your code is working as before, but using the Comment Service.

2. Separate the list of comments and the new comments form into separate components. Use the Comment Service / Observable in the comment service to communicate between the 2 components.

3. At the moment, there's no styling. Add some by incorporating [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), or [Skeleton](http://getskeleton.com/). Feel free to write your own CSS as an alternative to using one of these CSS frameworks.

## Fixing Bugs

Someone has hacked up the [Tour Of Heroes](https://angular.io/tutorial/toh-pt5) demo from Google. Go into [heroes](https://github.com/den-materials/angular-heroes) and run `npm install` and `npm start` to start the app. Try to fix all of the errors so that the app works like [this](https://den-materials.github.io/tour-of-heroes-dist). Try not to look at the code listed in the previous link unless you're absolutely stumped.

## Choose Your Own Adventure

Choose one of the options below to work on. This is an open-ended exercise; there are no set solutions. Try your best!

- **Option 1**: Create sign-up/login functionality to go with the comments app you've been working on. Here are suggestions to help you:
  - Use routing to display a main page that prompts the user with links to two pages (login/sign up).
  - On the sign-up page, users can create a profile with a username, full name, password, and email.
    - The username and email must be unique. No two users can have the same username or email address.
  - On the login page, users can log in with either their email or username and password. The user must already exist to utilize this page.
    - Once logged in, the user is taken to the main comments app like they were before.
    - Alter the comments app so that, when adding new comments, there is no `author` text input field where the user can choose an author. Instead, the logged-in user's full name is used.
- **Option 2**: Create a new app using one of [these free APIs that don't require authentication](https://shkspr.mobi/blog/2016/05/easy-apis-without-authentication/). There are more APIs to choose from [here](https://github.com/toddmotto/public-apis), but some require authentication - make sure you read the documentation!
  - Try to incorporate routing into your app as well.
- **Option 3**: Deploy your own back-end API and use it in an app we've previously created or a new one that you create.
- **Option 4**: Use the [JSON server](https://github.com/typicode/json-server) as a dummy API to create an app around.
- **Option 5**: See if you can create a game like Tic-Tac-Toe or Hangman.
