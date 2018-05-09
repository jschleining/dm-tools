var app = angular.module('dmTools');

app.component('demographicsGenerator', {
  bindings: {
    config: '<'
  },
  controller: 'DemographicsGeneratorController',
  controllerAs: 'vm',
  templateUrl: 'global/components/demographics-generator/demographics-generator.view.html'
});