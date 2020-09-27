# Suppliers Search

[Last deployed version](https://fervent-colden-26f1e5.netlify.app/)

This project is a technical task for [Feast it](https://feast-it.com/) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I created this project taking into consideration Scalability and Reusability. This is why the code is split into pages and components. This way, a router can be added if needed in the future and, the components have a specific styling but are not tight to display the suppliers nor any data related to it. Instead, they use props and patterns to render the data being agnostic of what it is passed to them.

Besides that, my goal was to show not just my JS/React but my styling skills. This is why I chose styled-components, so I apply an on-trend pattern (CSS-in-JS) following the component mindset of React and the whole application. And spending more time in the micro-interactions and the look and feel of the UI.

## Dependencies

### [styled-components](https://github.com/styled-components/styled-components)

When reading about emotion and its CSS-in-JS approach, I bumped into styled-components. I felt that using components instead of classes, made a lot of sense, and it was aligned to the approach I wanted for this specific project.

Challenging myself, I decided to use this library instead that "playing-safe" using the common CSS/SCSS for the styling.

### [polished](https://github.com/styled-components/polished)

I needed to get some extra methods like `rgba` since styled-components does not provide any kind of Sass-style helper functions nor mixins and it´s created by the [styled-components
](https://github.com/styled-components) team.

### [react-outside-click-handler](https://github.com/airbnb/react-outside-click-handler)

Because the dropdown component has to close itself on clicking outside, I preferred to use this Airbnb's library instead of creating the same exact functionality by myself.

### [react-paginate](https://github.com/AdeleD/react-paginate)

This library provides the functionality/UI that was needed for building the pagination.

### [react-toastify](https://github.com/fkhadra/react-toastify)

I included this dependency as a quick and nice way of showing information to the user when something goes wrong. Also, having in mind the scalability of the project, this could be used to provide any kind of feedback that the user may need at any time.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
