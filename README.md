# Getting started

Make sure you have yarn installed.

After cloning the project, change your directory to the project root and run `yarn` to install all dependencies.

To start the project, run `yarn dev`.

# Git workflow

Create a branch named after the feature you are working on. For example, if you are working on the login page, create a branch named `feat/login-page`. If you are making a bug fix, create a branch named `fix/bug-name`.

When you are done with your feature, rebase your branch to `origin/main` and squash your commits into one commit. This will simplify the main branch. If you are behind `origin/main`, make sure pull main and fix any rebase conflicts. Then create a pull request to merge your branch into `origin/main`. Your single commit should contain a description of what you have done and what you have changed.

Your pull request will be reviewed and tested by another team member. If there are any issues, the reviewer will request changes. If there are no issues, the reviewer will approve the pull request and you should merge it into `origin/main`.

# Helpful links

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Chakra UI](https://chakra-ui.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)


Test Branch Protection