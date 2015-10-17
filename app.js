"use strict";

var app = angular.module('myApp', ['components']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';

  $scope.tabsOptions = {
    layout: "horizontal" // options: Vertical or horizontal
  };


})
.controller('eventsCtrl', function($scope) {
  $scope.name = 'Events Controller';
  $scope.event = {
    name: "Some great event",
    date: new Date(),
    location: "Washington, DC"
  };

})
.controller('membersCtrl', function($scope) {
  $scope.name = 'Members Controller';

  $scope.members = [
    {name: 'John', age: 20  },
    {name: 'Tony', age: 33  },
    {name: 'Mary', age: 40  }
    ];

});
