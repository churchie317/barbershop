angular.module('barbershop.sprintform', [])

.controller("SprintFormController", function($scope, $location, Submit) {

  $scope.size = {
    range: [ ],
  };
  $scope.showMe = false;
  $scope.number;
  $scope.textboxes = [];

  for( var i = 1; i <= 50; i++ ){
    $scope.size.range.push( i );
  }

  $scope.textbox = function(){
    $scope.textboxes = [];
    $scope.showMe = true;
    for( var i = 1; i <= $scope.number; i++ ){
      var newSprintNumber = $scope.textboxes.length+1
      $scope.textboxes.push({ id: 'sprint' + newSprintNumber });
    }
  }

  $scope.submit = function(){
    Submit.sprintSubmit($scope.textboxes)
    $location.path('/instructor/enrollclass/cohort');
  }
})
