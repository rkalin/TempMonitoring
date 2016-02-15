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
      url: "/unit",
      templateUrl: "app/partials/unit.html",
      controller: "unitController"
    })
    .state('subunit', {
      url: "/unit/:subunit",
      templateUrl: "app/partials/unit.html",
      controller: "unitController"
    })
    .state('user', {
      url: "/user",
      templateUrl: "app/partials/user.html"
    })
  .state('food', {
      url: "/food",
      templateUrl: "app/partials/food.html"
    })
  .state('admin', {
      url: "/admin",
      templateUrl: "app/partials/admin.html",
      controller: "adminController"
    })
  .state('admin.unitCreate', {
      url: "/unitCreation",
      templateUrl: "app/partials/unit.creation.html"
    })
  .state('admin.unitEdit', {
      url: "/unitEdit",
      templateUrl: "app/partials/unit.creation.html"
    })
  .state('admin.userCreate', {
      url: "/userCreation",
      templateUrl: "app/partials/user.creation.html"
    })
  .state('admin.userEdit', {
      url: "/userEdit",
      templateUrl: "app/partials/user.creation.html"
    })
  .state('admin.thermCreate', {
      url: "/thermAdd",
      templateUrl: "app/partials/therm.create.html"
    })
  .state('admin.thermEdit', {
      url: "/thermEdit",
      templateUrl: "app/partials/therm.create.html"
    })
  .state('admin.foodCreate', {
      url: "/foodCreation",
      templateUrl: "app/partials/food.creation.html"
    })
  .state('admin.foodEdit', {
      url: "/foodEdit",
      templateUrl: "app/partials/food.creation.html"
    })
    .state('recordTemp', {
      url: "/recordTemp",
      templateUrl: "app/partials/recordTemp.html"
    });
});
