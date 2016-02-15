angular.module('temps').controller('adminController', function($scope) {
  $scope.items = [
    {
      name: "Unit",
      desc: "Unit Administration",
      subitems: [
        {
          name: "unitCreate",
          desc: "Creation",
          refName: ".unitCreate"
        },
        {
          name: "unitEdit",
          desc: "Edit",
          refName: ".unitEdit"
        }]
    },
    {
      name: "User",
      desc: "User Administration",
      subitems: [
        {
          name: "userCreate",
          desc: "Creation",
          refName: ".userCreate"
        },
        {
          name: "userEdit",
          desc: "Edit",
          refName: ".userEdit"
        }]
    },
    {
      name: "Thermometer",
      desc: "Thermometer Administration",
      subitems: [
        {
          name: "thermCreate",
          desc: "Creation",
          refName: ".thermCreate"
        },
        {
          name: "thermEdit",
          desc: "Edit",
          refName: ".thermEdit"
        }]
    },
    {
      name: "Food",
      desc: "Food Administration",
      subitems: [
        {
          name: "foodCreate",
          desc: "Creation",
          refName: ".foodCreate"
        },
        {
          name: "foodEdit",
          desc: "Edit",
          refName: ".foodEdit"
        }]
    }
  ];

  //$scope.default = $scope.items[0];
});

angular.module('temps').controller('ItemController', ['$scope', function (scope) {

  scope.$parent.isopen = (scope.$parent.default === scope.item);

  scope.$watch('isopen', function (newvalue, oldvalue, scope) {
    scope.$parent.isopen = newvalue;
  });

}]);
