angular.module('temps').config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /dashboard
  $urlRouterProvider.otherwise("/dashboard");

  // Now for the states
  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "../partials/dashboard.html"
    })
  /*  Reserved for future use
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    */
    .state('unit', {
      url: "/unit",
      templateUrl: "../partials/unit.html"
    })
    .state('recordTemp', {
      url: "/recordTemp",
      templateUrl: "../partials/recordTemp.html"
    });
});
