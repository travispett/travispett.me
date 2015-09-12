/**
 * Created by travispett on 9/1/15.
 */
'use strict';

angular.module('portfolioApp')
  .controller('MenuCtrl', function($scope, $location) {
    $scope.projects = [{
      Project: 'travispett.me - Angular',
      Link: '/'
    }, {
      Project: 'CMS - Steel Thread Software',
      Link: '/cms'
    }, {
      Project: 'virginiacosigner.com',
      Link: '/vacs'
    }, {
      Project: 'Anonymous Messaging App',
      Link: '/message'
    }];
    $scope.whatIDo = ['Front-end Development', 'Back-end Development', 'Mobile Development'];
    $scope.whatIUse = ['AngularJS', 'NodeJS', 'Javascript', 'Java', 'Python', 'Ruby'];
  });
