'use strict';

angular.module('portfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cms', {
        url: '/cms',
        templateUrl: 'app/cms/cms.html',
        controller: 'CmsCtrl'
      });
  });