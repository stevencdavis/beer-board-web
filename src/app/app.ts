/// <reference path="../typings/tsd.d.ts" />


// /// <reference path="../build/js/modernizr-custom.d.ts" />

/**
 * Main application file
 */

// angular
import * as angular from 'angular';
//import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

// foundation
import 'foundation-apps/dist/js/foundation-apps';
import 'foundation-apps/dist/js/foundation-apps-templates';
import 'foundation-apps/js/angular/components/panel/panel';

// app
import routes from './app.routes';
import templatesModule from 'build/js/_templates';
import * as Modernizr from 'build/js/modernizr-custom';
import Foo from './components/foo/foo';


// define app module
let app = angular.module('app', [
  'ui.router',
  'ngAnimate',

  //foundation
  'foundation',
  'foundation.dynamicRouting',
  'foundation.dynamicRouting.animations',

  // app
  templatesModule.name
]);


// configure app
app.config(routes);

// bootstrap app
angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name], {
    strictDi: true
  });
});


let foo = new Foo();
console.debug(foo.doSomething());

console.debug('Modernizr:', Modernizr);
