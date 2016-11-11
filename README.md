#React Starter Kit

This repo contains a starting boilerplate that we use at Beaming Technologies to speed up development


It includes:
- React JS
- React Router
- Webpack 2
- Karma test runner with Mocha + Enzyme
- GoSquared analytics
- CSS Modules + SASS
- Image file extraction
- CSS Minification
- React Lite alias for React and React DOM

It is really easy to build and deploy. We included example npm scripts for S3 deployment.

A CloudFront edge can be put in front of it to manage caching and SSL termination.

Just make sure to use custom error pages for 403 and 404 and return /index.html with code 200
