'use strict';

angular.module('moodWebApp')
.directive('myAttr', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$watch('isAuthenticated', function(){
                console.log('myAttr: ' + scope.isAuthenticated);
                attributes.$set('disabled', scope.isAuthenticated);
            });
        }
    };
});