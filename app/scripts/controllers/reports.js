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
        $scope.itemsPerPage = 15;
        $scope.currentPage = 0;
        $scope.getReport = function(period) {
            var uri = 'http://pebble-mood-restful.herokuapp.com/services/rating/report/' + period + '?authtoken=' + AuthService.getAuthToken();
            $http.get(uri)
                .success(function (data) {
                    console.log(data);
                    $scope.data = data;
                });
        };
        // pagination methods
        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 0 ? 'disabled' : '';
        };
        $scope.pageCount = function() {
            return Math.ceil($scope.data.length/$scope.itemsPerPage)-1;
        };
        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };
        $scope.nextPageDisabled = function() {
            return $scope.currentPage === $scope.pageCount() ? 'disabled' : '';
        };
        $scope.range = function () {
            var arr = [];
            for (var i=0; i < $scope.pageCount(); i++) {
                arr.push(i);
            }
            return arr;
        };
        $scope.setPage = function(n) {
            if (n < $scope.pageCount() && n >= 0) {
                $scope.currentPage = n;
            }
        };
    }]);
