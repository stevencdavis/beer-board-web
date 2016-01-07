/**
 * App configuration
 */

export default ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('dashboard', {
      url: '/',
      views: {
        main: {
          templateUrl: 'app/components/dashboard/dashboard.html',
          controller: ['$scope', ($scope) => {
            $scope.greeting = 'Ahoy!';
          }]
        }
      }
    });
}];
