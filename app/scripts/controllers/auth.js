'use strict';

angular.module('moodWebApp')
.controller('AuthCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        email: '',
        password: ''
    };
    $scope.loginMessage = '';

    $scope.setLoginMessage = function(msg) {
        $scope.loginMessage = msg;
    };

    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function () {
            $scope.setLoginMessage('Welcome back! Go see some reports or drink a cup of tea or something...');
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setAuthState(true);
        }, function () {
            $scope.setLoginMessage('Unknown email or password.');
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            $scope.setAuthState(false);
        });
    };
});
