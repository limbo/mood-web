'use strict';

/* jshint ignore: start */
angular.module('moodWebApp')
    .controller('MetaCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
        $scope.loginDialogVisible = false;
        $scope.isAuthenticated = AuthService.isAuthenticated();

        $scope.logout = function() {
            AuthService.logout();
            $scope.isAuthenticated = false;
        };

        $scope.setAuthState = function (authed) {
            $scope.isAuthenticated = authed;
        };
    });
/*jshint ignore: end */
