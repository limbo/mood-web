'use strict';

/**
 * @ngdoc overview
 * @name moodWebApp
 * @description
 * # moodWebApp
 *
 * Main module of the application.
 * TODO: require authentication on reports
 * TODO: add signup
 */
angular
  .module('moodWebApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {authRequired: false}
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {authRequired: false}
      })
        .when('/reports', {
            templateUrl: 'views/reports.html',
            controller: 'ReportsCtrl',
            data: {authRequired: true}
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl',
            data: {authRequired: false}
        })
        .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'AuthCtrl',
            data: {authRequired: false}
        })
      .otherwise({
        redirectTo: '/',
        data: {authRequired: false}
      });
  }).constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized',
        hideLoginForm: 'hide-login-form'
    }).run(function ($rootScope, AUTH_EVENTS, AuthService) {
        $rootScope.$on('$routeChangeStart', function (event, next) {
            console.log(event);
            console.log(next);
            if (!next || next.redirectTo || !next.data.authRequired) {
                console.log('no log in');
                $rootScope.$broadcast(AUTH_EVENTS.hideLoginForm);
            } else if (next.data.authRequired && !AuthService.isAuthenticated()) {
                // user is not logged in
                console.log('need to log in');
                // event.preventDefault doesn't work in current version of ngRoute
//                event.preventDefault();
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        });
    });
