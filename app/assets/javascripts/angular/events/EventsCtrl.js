var app = angular.module('angularExample');

app.controller('EventsCtrl', ['$scope','Event', function($scope, Event) {
  $scope.events = Event.query();

  $scope.addEvent = function() {
    console.log("function started");
    if (!valid()){
      console.log("data not valid");
      return false;
    }
    console.log("data valid");
  //
    Event.save($scope.event,
      function(response, _headers) {
        $scope.events.push(response);
      },
      function(response) {
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );

    $scope.event.name = '';
    $scope.event.description = '';
    $scope.event.event_date = '';
    $scope.event.place = '';

  }
  valid = function() {
    return !!$scope.event && !!$scope.event.name && !!$scope.event.event_date && !!$scope.event.description && !!$scope.event.place;
  }


}]);
