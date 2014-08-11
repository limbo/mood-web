'use strict';

function monthName(n) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n-1];
}

function round1(x) {
    return (Math.round(x*10)/10).toFixed(1);
}

angular.module('moodWebApp')
    .filter('formatLabel', function() {
        return function(row, period) {
            var label = '';
            switch (period) {
                case 'day':
                    label = row._id.month + '/' + row._id.day + '/' + row._id.year;
                    break;
                case 'week':
                    label = row._id.year + ', week ' + (row._id.week+1);
                    break;
                case 'month':
                    label = monthName(row._id.month) + ' ' + row._id.year;
                    break;
            }
            return label;
        };
    })
    .filter('formatValue', function() {
        return function(row) {
            return round1(row.average);
        };
    });
