app = angular.module('dmTools');

app.controller('MainController', function ($scope, $rootScope, $state) {
  var vm_ = this;

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name === 'root') {
      $state.go('root.dashboard');
    }
  });
});
