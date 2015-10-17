angular.module('components', [])
 
  .directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        tabsSettings: '=config' //when were using controller instead of link, this is available as $scope
      },
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
        var tabsSettings = $scope.tabsSettings;

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="col-md-12">' +
          '<ul class="nav nav-pills nav-stacked col-md-4" id="tab-list">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content col-md-4" ng-transclude></div>' + //this houses the included div passed from pane
        '</div>',
      replace: true
    };
  })
 
  .directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { 
        title: '@',
        templatename: '@',
        controllername: '@'
      },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      templateUrl: function(element, attrs){
            return attrs.templatename;
          },
      replace: true
    };
  })