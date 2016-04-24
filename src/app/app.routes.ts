/**
 * App configuration
 */

export default ['$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'IconicProvider', 'API_CONFIG', 'PATH_CONFIG', ($stateProvider, $urlRouterProvider, RestangularProvider, IconicProvider, API_CONFIG, PATH_CONFIG) => {

  console.log('iconic provider', IconicProvider);
  IconicProvider.setAssetPath(PATH_CONFIG.iconic);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      views: {
        main: {
          templateUrl: 'app/components/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        }
      }
    });

  // In development mode, use location.hostname to set the Restangular base url to that which the js was served from
  // meaning the data server must be on the same machine that hosts the app.  This allows us to support external devices
  // (such as iPhones) to connect to the dev server for testing
  var hostUrl = API_CONFIG.dataServer || 'http://' + location.hostname;
  RestangularProvider.setBaseUrl(hostUrl + ':' + API_CONFIG.dataPort);
  // RestangularProvider.setDefaultHttpFields({withCredentials: true});
  RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});

  // add a response interceptor
  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
    var extractedData;
    // .. to look for getList operations
    if (operation === "getList" || operation === "get" || operation === "post") {
      // .. and handle the data and meta data
      extractedData = data.results;
      extractedData.meta = data.meta;
    } else {
      extractedData = data.data;
    }
    return extractedData;
  });

}];
