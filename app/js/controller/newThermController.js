angular.module('temps').controller('NewThermController', ['$scope', function (scope) {

  $scope.thermList = {};

  $scope.$watch('thermList', function(value) {
    $http.get('app/php/getTherm.php').
    success(function(data) {
      $scope.tableInfo = data;
    });
  });

}]);
