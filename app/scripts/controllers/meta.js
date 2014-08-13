'use strict';

/* jshint ignore: start */
angular.module('moodWebApp')
    .controller('MetaCtrl', function ($scope, AuthService) {
        $scope.loginDialogVisible = false;
        $scope.isAuthenticated = AuthService.isAuthenticated();

        $scope.logout = function() {
            AuthService.logout();
            $scope.isAuthenticated = false;
        };
    });
/*jshint ignore: end */
