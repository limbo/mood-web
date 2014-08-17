'use strict';

angular.module('moodWebApp')
    .controller('UserCtrl', function ($scope, $location, UserResource) {
        $scope.credentials = {
            email: '',
            password: '',
            verifyPassword: ''
        };

        $scope.signupMessage = '';
        $scope.created = false;
        $scope.processing = false;

        $scope.signup = function(credentials) {
            var user = new UserResource();
            user.email = credentials.email;
            user.password = credentials.password;
            $scope.processing = true;

            delete credentials.verifyPassword;
            UserResource.save(user,
                function () {
                    $scope.created = true;
                },
                function (res) {
                    $scope.processing = false;
                    if (res.status === 409) { // HTTP Conflict
                        console.log(409);
                        $scope.signupMessage = 'Email address already exists: ' + res.data.email;
                    } else {
                        console.log(res.status);
                        $scope.signupMessage = 'Could not create account. Server said: ' + res.data;
                    }

                });
        };
    });
