'use strict';

/**
 * @ngdoc function
 * @name moodWebApp.controller:ReportsCtrl
 * @description
 * # Reports Ctrl
 * Controller for viewing reports
 */
angular.module('moodWebApp')
    .controller('ReportsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.reportPeriod = 'month';
        $scope.Math = window.Math;
        $http.get('http://pebble-mood-restful.herokuapp.com/services/rating/report/month?authtoken=f26oeuFGz5JyEhBvuUYz4w')
            .success(function(data) {
                console.log(data);
                $scope.data = data;
        });
    }]);
