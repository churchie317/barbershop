angular.module('barbershop.cohortname', [])

.controller("CohortNameController", function(Submit, $scope, $location){

  $scope.cohort;

  $scope.submit = function(){
    Submit.cohortSubmit($scope.cohort)
    .then(function(){
      $location.path('/instructor/enrollclass/pairs');
    })
  }
})
