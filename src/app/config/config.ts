import * as angular from 'angular';

let configModule = angular
  .module('sf.config.api', [])
  .constant('API_CONFIG', {
    authPort: '8090',
    dataPort: '8090'
  })
  .constant('PATH_CONFIG', {
    iconic: 'build/assets/img/iconic'
  });

export default configModule;
