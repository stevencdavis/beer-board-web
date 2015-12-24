/**
 * App configuration
 */

export default /* @ngInject */ ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('dashboard', {
      url  : '/',
      views: {
        main: {
          templateUrl: 'app/components/dashboard/dashboard.html',
          controller : /* @ngInject */ ($scope) => {
            $scope.greeting = 'Ahoy';
          }
        }
      }
    });

};
