/// <reference path="../../typings/browser.d.ts" />

/**
 * Main application file
 */

// angular
import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

// lodash is required for restangular, so make it global (window)
import * as _ from 'lodash';
window['_'] = _;

import 'restangular';

// foundation
import 'foundation-apps/dist/js/foundation-apps';
import 'foundation-apps/dist/js/foundation-apps-templates';
import 'foundation-apps/js/angular/components/panel/panel';
import 'foundation-apps/js/angular/components/iconic/iconic';

import * as IconicJS from 'foundation-apps/js/vendor/iconic.min';
console.debug(IconicJS.default);
// Make IconicJS global (window)
window['IconicJS'] = IconicJS.default;

import Foundation from 'foundation-sites/dist/foundation';
console.debug('Foundation', Foundation.Foundation);
// Make Foundation global (window)
window['Foundation'] = Foundation.Foundation;

// import * as Foundation from 'foundation-sites/dist/foundation';
// console.debug('foundation', Foundation);
// window['Foundation'] = Foundation;
// import Foundation from 'foundation-sites/dist/foundation';
// window['Foundation'] = Foundation.Foundation;
// console.debug('Foundation', Foundation.Foundation);


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
  .controller("DashboardController", ["$scope", "$timeout", "Restangular", ($scope, $timeout, Restangular) => new Dashboard($scope, $timeout, Restangular)])
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
