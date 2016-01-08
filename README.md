# Iris

## Tech Stack

The Iris app is build using the following tools and technologies:

### Languages

* Typescript
* Javascript / ES6

### Frameworks / Libraries

* AngularJS
* Foundation
* Modernizr
* Nunjucks

### Technologies

* Gulp / Node.js
* JSPM / SystemJS (package manager & module loader & bundler)
* NPM (package manager and build lib repo)
* SCSS (Sass / CSS)
* TSD / DefinitelyTyped
* Karma / Jasmine
* Protractor / Selenium
* Browsersync

### Build libraries

* eslint
* tslint
* sass-lint
* uglify
* cssnano
* autoprefixer
* sass-jspm-importer
* angular-templatecache
* sourcemaps (CSS, TypeScript, ES5 / ES6)


## Dev setup

Global installs

```
npm install -g foundation-cli bower gulp jspm

# I had to use sudo on the following command -- you may not have to depending on your setup
sudo gem install bundler

```

Local installs

```
npm install
jspm install
```

To run Gulp processes for continuous build and testing, simply run the following: 

```
gulp
```


## Production packaging / deployment

To build and bundle the app for production deployment, run:

```
gulp build:production
```
