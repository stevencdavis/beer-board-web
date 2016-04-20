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
// lodash is required for restangular
import * as _ from 'lodash';
console.debug('lodash:', _);
window['_'] = _;
import 'restangular';

// foundation
import 'foundation-apps/dist/js/foundation-apps';
import 'foundation-apps/dist/js/foundation-apps-templates';
import 'foundation-apps/js/angular/components/panel/panel';
import 'foundation-apps/js/angular/components/iconic/iconic';

// console.debug(IconicJS);
// window.IconicJS = IconicJS;
console.debug('window:', window);


// app
import routes from './app.routes';
import templatesModule from 'build/js/_templates';
import configModule from './config/config';
import * as Modernizr from 'build/js/modernizr-custom';
import Foo from './components/foo/foo';
import {Dashboard} from  './components/dashboard/dashboard';
import {SetFocus} from './components/setFocus';


// define app module
let app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'restangular',

    //foundation
    'foundation',
    'foundation.iconic',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    // app
    templatesModule.name,
    configModule.name
  ])
  .controller("DashboardController", ["$scope", "Restangular", ($scope, Restangular) => new Dashboard($scope, Restangular)])
  .directive('setFocus', SetFocus.Factory())
  .config(routes);


// bootstrap app
angular.element(document).ready(function () {
  angular.bootstrap(document, [app.name], {
    strictDi: true
  });
});


let foo = new Foo();
console.debug(foo.doSomething());

console.debug('Modernizr:', Modernizr);
