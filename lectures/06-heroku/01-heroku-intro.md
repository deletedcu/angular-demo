<!-- Note: Matches React module -->

# Deploying an App

You've been running everything on localhost, which is great for testing - but what if you want to show off what you've done?

Let's learn an easy way to deploy an app. We can use something called **Heroku** to deploy an application to the internet in less than five minutes. Heroku is incredibly popular among web developers and provides five free applications to every user.

> Before moving forward, it is _strongly_ suggested that you have a working knowledge of Git. Read the [Git basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics) guide or [try Git](https://try.github.io/levels/1/challenges/1) if you have **no experience** with Git before moving forward.


## What is Heroku?

Heroku is a cloud platform that allows developers to quickly deploy applications to the internet.
- Note for your future use; they don't need to be Angular applications. Heroku supports Node.js, Ruby, Java, php, and many other things. You can read about it [here](https://devcenter.heroku.com/).

Before we dive in, register a free account at [heroku.com](https://heroku.com). Once you register, confirm your account, and sign back in, you will be re-directed to the Heroku dashboard at [https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps). You can view all of your applications on the dashboard once they are deployed.


## Heroku Command Line Interface

Before we start, stop and commit. Make sure your app is under version control with `git`.  If you're not sure whether your project is under version control yet, you definitely haven't been committing often enough! Run `git status` to check if your project directory is a repo and `git init` to make it into one if necessary. __Stop and commit your changes.__

Now let's download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). You can download the installer from the link provided or run `brew install heroku` in your terminal application.
- This tool is designed to make your life easier as a developer by integrating Heroku application development and deployment directly into the command line.

> _Note_: Just in case, you may need to restart your terminal session before moving forward. Why? Because you've just installed software to modify your terminal's environment, and your environment variables may not be updated yet.


Now, you should login to **Heroku** using the command line. Do so by typing in `heroku login`. You'll be prompted with the following questions followed by an authentication message:

```bash
Enter your Heroku credentials.
Email: adam@example.com
Password (typing will be hidden):
Authentication successful.
```

Authenticating is required to allow both the Heroku and git commands to operate.
