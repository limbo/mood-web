'use strict';

angular.module('moodWebApp')
.controller('AuthCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        email: '',
        password: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.isAuthenticated = true;
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            $scope.isAuthenticated = false;
        });
    };
});
