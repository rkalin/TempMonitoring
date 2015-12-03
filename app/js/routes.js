angular.module('temps').config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /dashboard
  $urlRouterProvider.otherwise("/dashboard");

  // Now for the states
  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "app/partials/dashboard.html"
    })
    .state('unit', {
      url: "/unit/:subunit",
      templateUrl: "app/partials/unit.html",
      controller: "unitController"
    })
    .state('staff', {
      url: "/staff",
      templateUrl: "app/partials/staff.html"
    })
    .state('recordTemp', {
      url: "/recordTemp",
      templateUrl: "app/partials/recordTemp.html"
    });
});
