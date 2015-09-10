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
      Project: 'Anonymous Messaging App',
      Link: '/message'
    }, {
      Project: 'Other Project 2',
      Link: '/proj2'
    }];
    $scope.whatIDo = ['Front-end Development', 'Back-end Development', 'Mobile Development'];
    $scope.whatIUse = ['AngularJS', 'NodeJS', 'Javascript', 'Java', 'Python', 'Ruby'];
  });
