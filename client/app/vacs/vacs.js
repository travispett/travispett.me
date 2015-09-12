'use strict';

angular.module('portfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vacs', {
        url: '/vacs',
        templateUrl: 'app/vacs/vacs.html',
        controller: 'VacsCtrl'
      });
  });