'use strict';

angular.module('moodWebApp')
.factory('Flash', function($rootScope) {
    var queue = [];
    var currentMessage = '';

    $rootScope.$on('$routeChangeSuccess', function() {
        currentMessage = queue.shift() || '';
        console.log('shifting to ' + currentMessage);
    });

    return {
        addMessage: function(message) {
            queue.push(message);
            console.log('pushed: ' + message);
        },
        hasMessage: function() {
            console.log('hasMsg: ' + (currentMessage.length > 0));
          return (currentMessage.length > 0);
        },
        getMessage: function() {
            currentMessage = queue.shift() || '';
            console.log('getting: ' + currentMessage);
            return currentMessage;
        }
    };
});