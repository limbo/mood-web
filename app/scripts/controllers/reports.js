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
        $scope.rowsPerPage = 10;
        $scope.currentPage = 0;
        $scope.getReport = function(period) {
            var uri = 'http://pebble-mood-restful.herokuapp.com/services/rating/report/' + period + '?authtoken=' + AuthService.getAuthToken();
            $http.get(uri)
                .success(function (data) {
                    console.log(data);
                    $scope.data = {};
                    var dataByRows = [];
                    for (var i=0; i<data.length;i+=3) {
                        dataByRows.push({ratings: data.slice(i, i+3)});
                    }
                    console.log(dataByRows);
                    $scope.currentPage = 1;
                    $scope.data = dataByRows;
                });
        };
        /* jshint ignore:start */
//        $scope.tableParams = new ngTableParams({
//            page: 1,            // show first page
//            count: 10           // count per page
//        }, {
//            total: 0, // length of data
//            getData: function($defer, params) {
//                console.log("getData: " + $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//                $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//            }
//        });
        /* jshint ignore:end */
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
