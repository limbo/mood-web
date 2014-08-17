'use strict';

angular.module('moodWebApp')
.factory('SignupService', function ($http) {
    var msg = '';

    return {
        signup: function (credentials) {
            console.log(credentials);
            msg = '';
            return $http
                .post('http://pebble-mood-restful.herokuapp.com/services/user/', credentials)
                .success(function (data, status) {
                    console.log('success: ' + data);
                    if (status === 201) { // HTTP Created
                        return true;
                    } else { // some other response code??
                        return false;
                    }
                })
                .error(function (data, status) {
                    console.log('error: ' + data);
                    if (status === 409) { // HTTP Conflict
                        console.log(409);
                        msg = 'Email address already exists: ' + data.email;
                        return false;
                    } else {
                        console.log(status);
                        msg = 'Could not create account. Server said: ' + data;
                        return false;
                    }

                });
        },

        getMessage: function () {
            return msg;
        }
    };
});
