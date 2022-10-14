#### Rotherham Titans x AND Digital presents...

# Healthy Titans

Healthy Titans is a web application with a focus on health, well-being & fitness aimed at children
and young adults. The app provides games and nutritional information to its users so to enable
individuals to make informed, healthy decisions about food, nutrition and how to burn calories in a
fun and educational setting.

The project is built with React & is hosted on Firebase.

## Getting Started

1. To get started, first you must install Node and NPM.
2. Once installed, clone the project.
3. In your terminal window, enter `npm install` to begin installing dependencies needed for the project.

## Environmental variables

This project makes use of env vars to abstract away app configuration such that it can be configured
at build-time and cater to multiple environments, deployment types and adjust settings accordingly.

### What's a dotenv?

In the project source code, a file named `.env.example` exists to demonstrate the current configuration
set up. Colloquially we refer to this as a "dotenv" file. It does not include the values, because
this would expose sensitive information. These files are commonly used to programatically configure
applications for different environments by providing different values at runtime in different environmental settings.

### Env var setup

First we need to create two files so that the project will run without issue. Technically, you only
need one, but it's good practise to create both should you wish to build and deploy with the correct
configuration locally.

Open up your terminal, navigate to the root directory of the project where `package.json` lives and
enter the following commands:

```
$ touch .env.local .env.production.local .env.test.local
$ cp .env.example .env.local .env.test.local
```

This will create three empty files and then copy the content from the example file into the first
file. To obtain the values, speak to a member of the team who will provide you with them.

By default, these files are ignored from git via `.gitignore` and **must not** be committed to
this public repository to avoid leaking sensitive information.

## Running and building the project

With the above setup, we can now run the project without any config issues! Enter `npm start` to
start the app locally in development mode. Your web browser should open a new tab with the site
momentarily. If not, you can open [http://localhost:3000](http://localhost:3000) to view it in the
browser.

To build the project, `npm run build`. Please note that this command will seek to read config from
`.env.production.local` rather than `.env.local`. This is built in to how `react-scripts` handles
environmental variables and is valuable to understand for any differences that need to be accounted
for between builds.

## Setting up Firebase CLI

Install Firebase CLI Tools. There are multiple ways to do this but for this project we use the
npm package by running `npm install -g firebase-tools`.

Once installed, run `firebase login`. This should redirect you to your web browser and ask you to
authenticate. Once logged in, you can continue.

If you haven't already, run `npm run build` to create the necessary objects needed for firebase.

Enter `firebase init` to initialise and setup this project. The command-line interface will take
over the terminal while we configure.

Use the arrow keys to select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`.
Press Space bar to select and press enter to confirm.

Next, enter `build` as our public directory, this is the default location of our build output and
code generation.

At `Configure as a single-age app (rewrite all urls to /index.html)?` select 'Yes' by entering `y` and pressing enter.

At `Set up automatic builds and deploys with GitHub?` select 'No' by entering `N` and pressing enter.

When it asks to overwrite `build/index.html` select 'No' by entering `N` and pressing enter.

Congrats, you're done! To deploy the app manually, enter `firebase deploy`.

## Tests

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Other project commands

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
