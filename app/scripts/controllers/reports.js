'use strict';

/**
 * @ngdoc function
 * @name moodWebApp.controller:ReportsCtrl
 * @description
 * # Reports Ctrl
 * Controller for viewing reports
 */
angular.module('moodWebApp')
    .controller('ReportsCtrl', ['$scope', '$http', 'AuthService', function ($scope, $http, AuthService) {
        $scope.periods = ['day', 'week', 'month'];
        $scope.Math = window.Math;
        $scope.getReport = function(period) {
            var uri = 'http://pebble-mood-restful.herokuapp.com/services/rating/report/' + period + '?authtoken=' + AuthService.getAuthToken();
            $http.get(uri)
                .success(function (data) {
                    console.log(data);
                    $scope.data = data;
                });
        };
    }]);
