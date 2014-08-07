'use strict';

describe('Controller: ReportsCtrl', function () {

  var ctrl, scope, $httpBackend;

  // load the controller's module
  beforeEach(module('moodWebApp'));


    // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://pebble-mood-restful.herokuapp.com/services/rating/report/month?authtoken=f26oeuFGz5JyEhBvuUYz4w').
          respond([ {
              "_id" : {
                  "year" : 2013,
                  "month" : 8
              },
              "average" : 6.75
          }, {
              "_id" : {
                  "year" : 2013,
                  "month" : 9
              },
              "average" : 6.306666666666667
          }]);
    scope = $rootScope.$new();
    ctrl = $controller('ReportsCtrl', {
      $scope: scope
    });
  }));

  it('should receive an array of two objects', function () {
      expect(scope.data).toBeUndefined();
      $httpBackend.flush();
      expect(scope.data.length).toBe(2);
  });
});
