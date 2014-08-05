'use strict';

/**
 * @ngdoc function
 * @name moodWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodWebApp
 */
angular.module('moodWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
