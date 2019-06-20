# React Setup

## Instructions
Follow these steps to get the environment running.

    git clone https://github.com/clubajax/react-setup.git

* `cd react-setup`
* `yarn`
* `yarn start`

## Commands

TBD

### Dev Mode

As mentioned above, run:

    yarn start

...and you can run the app in development mode, at the web address of `http://localhost:8080`

### Test Build

There is a command to test the building of the application:

    yarn test-build

This will compile the code into a `dist` folder, and spin up a node server to handle a proxy connection to the dev server.
This test build is very useful for checking minification, optimization, and code splitting. The page can be viewed
at the web address of `http://localhost:8080`

Due to the nature of this build, there may be some issues, like remaining logged in across page refresh.

### Unit Tests

[Unit testing](/test) is set up, using Jest. To test, run:

    yarn test

...will start tests, running in the command line. It uses `--watch`, so any changes you make will automatically rerun the tests.

Enzyme is installed for drilling into components to get properties and methods. But many tests can be handled with Snapshots.

### Storybook

The app includes [Storybook](https://github.com/storybooks/storybook) which is great for code that needs more visual testing than logic testing
(CSS styling for example). To run:

    yarn story

...this will auto-launch a page at address `http://localhost:6006`.
