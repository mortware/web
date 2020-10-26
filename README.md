[![Netlify Status](https://api.netlify.com/api/v1/badges/452d55c1-ffd3-4c0f-bc87-b4c2c7658b79/deploy-status)](https://app.netlify.com/sites/mortware/deploys)

![Website](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fmortware.net)

## Description
This project is the source code for [mortware.net](https://mortware.net) and is currently deployed to [netlify](https://netlify.com).

It is primarily `react` using `tailwindcss` for styling.

Current configuration means any changes pushed to the 'main' branch will kick off a netlify build and deploy, and be visible within a few seconds. Awesome.

As this project makes use of `react-router-dom` and due to the nature of hosting via netlify's CDN, it is necessary to include a `_redirects` file in the `public` folder. This ensures that any failed requests will redirect to the `index.html`, which will then handle the request via the router.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.