angular.module('barbershop.pairs', [])

.controller("PairsController", function($scope, $location, Submit) {

  $scope.retrievePairs = function(){
    return Submit.retrievePairs();
  }

  var data = $scope.retrievePairs();

  $scope.cohort = Object.keys(data)[0];
  $scope.pairs = data[$scope.cohort]

})
