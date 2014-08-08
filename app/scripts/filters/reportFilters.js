'use strict';

function monthName(n) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n-1];
}

function round1(x) {
    return (Math.round(x*10)/10).toFixed(1);
}

angular.module('moodWebApp')
    .filter('formatRow', function() {
        return function(row, period) {
            switch (period) {
                case 'day':
                    return row._id.month + '/' + row._id.day + '/' + row._id.year + ': '+ round1(row.average);
                case 'week':
                    return row._id.year + ', week ' + (row._id.week+1) + ': ' +  round1(row.average);
                case 'month':
                    return monthName(row._id.month) + ' ' + row._id.year + ': ' + round1(row.average);
            }
        };
    });
