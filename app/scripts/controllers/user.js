'use strict';

angular.module('moodWebApp')
    .controller('UserCtrl', function ($scope) {
        $scope.credentials = {
            email: '',
            password: '',
            verifyPassword: ''
        };

        $scope.signupMessage = '';

        $scope.signup = function(credentials) {
            return credentials;
        };
    });
