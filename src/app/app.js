/**
 * Main application file
 */

import 'angular';
import 'angular-ui-router';

import routes from './app.routes';
import templatesModule from 'build/_templates';

//import Foo from './foo';
//import Dashboard from './Dashboard/dashboard';


// define app module
var app = angular.module('app', [
  'ui.router',
  templatesModule.name
]);

// configure app
app.config(routes);

// bootstrap app
angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});



//let foo = new Foo();
//let dashboard = new Dashboard();
//
//let textNode = document.createTextNode(foo.doSomething());
//document.body.appendChild(textNode);
//
//let textNode2 = document.createTextNode(dashboard.showDashboard());
//document.body.appendChild(textNode2);
//
//export var hello = 'es6';
