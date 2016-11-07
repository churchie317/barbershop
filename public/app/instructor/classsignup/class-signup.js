angular.module('barbershop.classsignup', [])

.controller("ClassSignupController", function($scope, $location, Submit) {

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
      var newStudentNumber = $scope.textboxes.length+1
      $scope.textboxes.push({ id: 'student' + newStudentNumber });
    }
  }

  $scope.submit = function(){
    Submit.rosterSubmit($scope.textboxes)
    $location.path('/instructor/enrollclass/sprints')
  }
})
