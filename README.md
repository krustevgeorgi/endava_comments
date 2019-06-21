This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Firebase hosting

To host the app with firebase fdo thge following:

### `npm install -g firebase-tools`

This command installs the globally available firebase command. To update to the latest version of the Firebase CLI, re-run the same npm install command.
If the npm install -g firebase-tools command fails, you might need to change npm permissions

### `firebase login`

This command connects your local machine to Firebase and grants you access to your Firebase projects.

### `firebase list`

The displayed list should be the same as the Firebase projects listed in the Firebase console

### `firebase init`

During project initialization, from the Firebase CLI prompts:

Select to set up Hosting.

If you want to set up other Firebase products for your project, refer to their documentation for setup information. Note that you can always run firebase init later to set up more Firebase products.

Select a Firebase project to connect to your local project directory.

The selected Firebase project is your "default" Firebase project for your local project directory. To connect additional Firebase projects to your local project directory, set up project aliases.

Specify a directory to use as your public root directory.

This directory contains all your publicly served static files, including your index.html file and any other assets that you want to deploy to Firebase Hosting.

The default for the public root directory is called public.

You can specify your public root directory now or you can specify it later in your firebase.json configuration file.

If you select the default and don't already have a directory called public, Firebase creates it for you.

If you don't already have a valid index.html file or 404.html file in your public root directory, Firebase creates them for you.

Choose a configuration for your site.

If you select to make a one-page app, then Firebase automatically adds rewrite configurations for you.

At the end of initialization, Firebase automatically creates and adds two files to the root of your local app directory:

A firebase.json configuration file that lists your project configuration. Learn more about this file on the configure hosting behavior page.

A .firebaserc file that stores your project aliases.

### `firebase deploy`

This command deploys a release to your Firebase project's default Hosting sites:

projectID.web.app
projectID.firebaseapp.com

