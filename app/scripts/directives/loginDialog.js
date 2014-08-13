'use strict';

angular.module('moodWebApp')
.directive('loginDialog', function (AUTH_EVENTS) {
    return {
        restrict: 'A',
        template: '<div ng-if="loginDialogVisible" ng-include="\'/views/login.html\'">',
        link: function (scope) {
            var showDialog = function () {
                console.log('show!');
                scope.loginDialogVisible = true;
            };

            var hideDialog = function () {
                console.log('hide!');
                scope.loginDialogVisible = false;
            };

            scope.visible = false;
            scope.$on(AUTH_EVENTS.hideLoginForm, hideDialog);
            scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
            scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);
        }
    };
});