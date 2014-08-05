'use strict';

/**
 * @ngdoc function
 * @name moodWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moodWebApp
 */
angular.module('moodWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
