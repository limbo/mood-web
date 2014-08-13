'use strict';
/*jshint unused:false*/

/**
 * @ngdoc function
 * @name moodWebApp.controller:ReportsCtrl
 * @description
 * # Reports Ctrl
 * Controller for viewing reports
 *
 * TODO: what should be the default order for the different reports?
 * TODO: better visualization for reports.
 */
angular.module('moodWebApp')
    .controller('ReportsCtrl', ['$scope', '$http', 'AuthService', function ($scope, $http, AuthService) {
        $scope.periods = ['day', 'week', 'month'];
        $scope.rowsPerPage = 5;
        $scope.currentPage = 0;
        $scope.data = [];
        $scope.period = 'day';
        $scope.getReport = function(period) {
            var uri = 'http://pebble-mood-restful.herokuapp.com/services/rating/report/' + period + '?authtoken=' + AuthService.getAuthToken();
            $scope.data = [];
            $http.get(uri)
                .success(function (data) {
                    console.log(data);
                    var dataByRows = [];
                    for (var i=0; i<data.length;i+=3) {
                        dataByRows.push({ratings: data.slice(i, i+3)});
                    }
                    console.log(dataByRows);
                    $scope.currentPage = 1;
                    $scope.data = dataByRows;
                });
        };
        $scope.getReport($scope.period);

        // pagination methods
        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 1 ? 'disabled' : '';
        };
        $scope.pageCount = function() {
            return Math.ceil($scope.data.length/$scope.rowsPerPage);
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
                arr.push(i+1);
            }
            return arr;
        };
        $scope.setPage = function(n) {
            if (n < $scope.pageCount() && n >= 0) {
                $scope.currentPage = n;
            }
        };
    }]);
