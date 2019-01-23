# Fiserv Architect UI

## Instructions
Follow these steps to get the environment running.

    git clone https://github.com/projekt202/fiserv-architect-ui.git

* `cd fiserv-architect-ui`
* `yarn`
* `yarn start`

This uses `app/api/stubs` which intercepts XHR requests,
and saves and retrieves data from browser localStorage.

This no-server system is designed to speed development until APIs are ready, and afterward can be used for tests or offline dev.

## Commands

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

## Code Style

See the [Style Guide](./STYLE_GUIDE.md).

## Branching

Here's the naming format to follow when creating branches:

`prefix-story-id-from-jira/short-description-of-the-work`

where,

`prefix` can be one of the following values - `feature`, `bugfix`, `devops`

`story-id-from-jira` is the number associated with the story/bug in Jira

`short-description-of-the-work` can be a 2-4 word summary of the work

Here are a few examples:

`feature-41/media-queries-configuration`

`devops-36/linting-setup-in-build`

`bugfix-85/removed-conflicting-button-styles`

## Merging/Branching rules and guideliness

We'll have 2 main branches

`develop` - reflects the work of developed features

`master` - reflects what's in "production" ([fiserv-architect.projekt202.com](https://fiserv-architect.projekt202.com))

Any new feature should be worked in a new branch created off of `develop`.

All PRs that are created from these feature branches should be merged back into `develop`. Every successful merge will trigger a deployment to dev environment ([fiserv-architect-dev.azurewebsites.net](http://fiserv-architect-dev.azurewebsites.net)).

There will be multiple releases scheduled in a Sprint that would involve cutting a release PR from the `develop` branch which will be merged into `master`. The team will be notified ahead of time on when these releases will happen, so that the developers can plan what functionality can get included in the next release. The idea is to have the ability to control what goes into "production", which is essentially where the QA folks will test the work that the devs have deemed ready to be tested.

Any bugfix for defects found in "production", should be worked in a new branch created off of `master`.

All PRs that are created from these bugfix branches should be merged back into `master` and _also_ `develop`. Every successful merge will trigger a deployment to "production" environment ([fiserv-architect.projekt202.com](https://fiserv-architect.projekt202.com))

As the project grows and the teams expand, we can explore other branching models. But for now, this seems like the simplest and quickest way to get everyone going with a relatively small learning curve.

* ### Code commits
    It's recommended to push code changes to the remote branch (feature or bug) in small increments and high frequency to make sure you don't lose any work in the event of hardware failure

* ### Merge from `develop`
    Make sure you frequently pull from `develop` and merge that into your branch, and ensure all the tests pass locally; especially before you submit a PR. This will ensure that your PR is compatible with the latest in the `develop` branch (that would include bug fixes from `master`).

* ### Code review
    Once your code is ready to be reviewed, create a Pull Request (PR).
    * Keep the PRs small so that it's easy to review (try to keep it around 200 lines)
    * Make sure it builds fine (no lint errors)
    * Add tests (quality is more important than quantity - in other words, _what_ you are testing is more important than _how many_ tests you have)
    * Evaluate the code coverage metric for every PR
    * Make sure the PR branch passes the status check (automated builds)
    * Use appropriate [labels](https://github.com/projekt202/fiserv-architect-ui/issues/labels) to mark your PRs. The labels will help identify the status of a PR at a quick glance. Use them accordingly. Here's the current list:
        * `BLOCKED` - PR must not be merged until this is removed. Use this if there's some work left to be done that may have come up after the PR was created. This will prevent accident merges while the PR is pending.
        * `CHANGES REQUESTED` - Reviewer has requested changes
        * `DEPENDENCY` - This PR has a dependency on another PR. So don't merge this until that one goes in first.
        * `QUESTION` - Reviewer has questions about the code in the PR or the requirements. Not necessarily requesting changes to be made.
        * `UPDATED` - Owner of the PR has updated the PR and is ready to be reviewed again
        * `NEW` - Brand new PR yet to be reviewed
        * `APPROVED` - Approved. Ready to be merged
        * `URGENT` - Needs review immediately
* ### Deployment
    On successful PR merge to `develop`, the code will be built, bundled, and deployed to [fiserv-architect-dev.azurewebsites.net](https://fiserv-architect-dev.azurewebsites.net)

    On successful PR merge to `master`, the code will be built, bundled, and deployed to [fiserv-architect.projekt202.com](https://fiserv-architect.projekt202.com)

* ### Rollback
    If there's a major issue with the release, we will 'roll forward'. This means the fix will have to be in a new PR that will revert the changes and then go through the normal process of getting it reviewed and merged into `master`, which will then be deployed to  [fiserv-architect.projekt202.com](https://fiserv-architect.projekt202.com). The same fix will then also will merged into `develop` to make sure developers can pull these into their active work branches. And of course, this will then deployed to [fiserv-architect-dev.azurewebsites.net](https://fiserv-architect-dev.azurewebsites.net)

    This keeps the deployment process simple because the deployed artifacts are not being exposed to the customers of Fiserv. It's just a place for us to test and showcase the work we've completed so far.
