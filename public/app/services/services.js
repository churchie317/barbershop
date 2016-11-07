angular.module('barbershop.services', [])

.factory('Submit', function($http) {
  var studentRoster = [];
  var sprintList = [];
  var cohortPairData;

  var rosterSubmit = function(students) {
    studentRoster = [];
    for( var i = 0; i < students.length; i++ ){
      studentRoster.push(students[i].name)
    }
  };

  var sprintSubmit = function(sprints) {
    sprintList = [];
    for( var i = 0; i < sprints.length; i++ ){
      sprintList.push(sprints[i].name)
    }
  };

  var cohortSubmit = function(cohort){
    var cohortObj = {
      cohort: cohort,
      students: studentRoster,
      sprints: sprintList,
    };
    return $http({
      method: 'POST',
      url: 'api/cohort',
      data: JSON.stringify(cohortObj),
    }).then(function(res){
      cohortPairData = res.data;
    })
  }

  var retrievePairs = function(){
    return cohortPairData;
  }

  return {
    rosterSubmit  : rosterSubmit,
    sprintSubmit  : sprintSubmit,
    cohortSubmit  : cohortSubmit,
    retrievePairs : retrievePairs,
  };
})
