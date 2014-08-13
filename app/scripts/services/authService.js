'use strict';

/**
 * TODO: handle error codes.
 */
angular.module('moodWebApp')
.factory('AuthService', function ($http, $cookieStore) {
    var authService = {};
    authService.authToken = $cookieStore.get('authtoken');

    authService.login = function (credentials) {
        console.log(credentials);
        return $http
            .post('http://pebble-mood-restful.herokuapp.com/services/user/auth', credentials)
            .then(function (res) {
                authService.authToken = res.data.authtoken;
                console.log(authService.authToken);
                $cookieStore.put('authtoken', authService.authToken);
                return authService.authToken;
            });
    };

    authService.logout = function () {
        console.log('logging out...');
        authService.authToken = null;
        delete $cookieStore.authtoken;
    };

    authService.isAuthenticated = function () {
        return (authService.authToken !== null);
    };

    authService.getAuthToken = function () {
        console.log('token: ' + authService.authToken);
        return authService.authToken;
    };

    return authService;
});
