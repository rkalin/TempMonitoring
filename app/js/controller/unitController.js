angular.module('temps').controller('unitController', function($scope, $stateParams) {
    $scope.unitName = $stateParams.subunit;
});
