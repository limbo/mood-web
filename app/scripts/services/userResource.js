'use strict';

angular.module('moodWebApp')
.factory('UserResource', function($resource) {
    return $resource('http://pebble-mood-restful.herokuapp.com/services/user/', {},
        {
            'save':  { method: 'POST' },
            'show':    { method: 'GET', isArray: false }
        }
    );
});