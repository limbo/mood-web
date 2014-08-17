'use strict';

angular.module('moodWebApp')
.directive('myAttr', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            console.log('watching ' + attributes.myAttr);
            scope.$watch(attributes.myAttr, function(){
                console.log('disabled? ' + scope.$eval(attributes.myAttr));
                attributes.$set('disabled', scope.$eval(attributes.myAttr));
            });
        }
    };
});