import * as angular from 'angular';

let configModule = angular
  .module('sf.config.api', [])
  .constant('API_CONFIG', {
    authPort: '8092',
    dataPort: '8092'
  })
  .constant('PATH_CONFIG', {
    iconic: 'build/assets/img/iconic'
  });

export default configModule;
