A modified version of Heroku's barebones Node.js app [https://github.com/heroku/node-js-sample] with added Gulp and SASS support.

This app uses Jade for easy templating. 

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
cd node-sass-es2015-sample
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```
