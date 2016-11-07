angular.module('barbershop', [
  'barbershop.classsignup',
  'barbershop.services',
  'barbershop.sprintform',
  'barbershop.pairs',
  'barbershop.cohortname',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('splash', {
    templateUrl: 'app/splash/splash.html',
    url: '/'
  })
  .state('class', {
    templateUrl: 'app/instructor/classsignup/class-signup.html',
    url: '/instructor/enrollclass',
    controller: 'ClassSignupController'
  })
  .state('sprints', {
    templateUrl: 'app/instructor/sprintsignup/sprint-form.html',
    url: '/instructor/enrollclass/sprints',
    controller: 'SprintFormController'
  })
  .state('pairs', {
    templateUrl: 'app/instructor/pairs/pairs.html',
    url: '/instructor/enrollclass/pairs',
    controller: 'PairsController',
  })
  .state('cohort', {
    templateUrl: 'app/instructor/cohortname/cohort-name.html',
    url: '/instructor/enrollclass/cohort',
    controller: 'CohortNameController'
  })

  $urlRouterProvider.otherwise('/');
})
