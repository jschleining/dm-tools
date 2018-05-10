var app = angular.module('dashboardModule', [
  'ui.router',
  'ngMaterial'
]);

app.controller('DashboardController', ['Utilities', function (Utilities) {
  var vm_ = this;
  vm_.numberOfDice = 1;
  vm_.min = 1;
  vm_.max = null;
  vm_.dice = [
    {
      size: 4,
      selected: false
    },
    {
      size: 6,
      selected: true
    },
    {
      size: 8,
      selected: false
    },
    {
      size: 10,
      selected: false
    },
    {
      size: 12,
      selected: false
    },
    {
      size: 20,
      selected: false
    },
    {
      size: 100,
      selected: false
    }
  ];
  vm_.total = 0;

  vm_.rollDice = rollDice_;

  activate_();

  /**
   * Initial activation of Dashboard Controller.
   */
  function activate_() {

  }

  function rollDice_(quantity, type) {
    var min = quantity;
    var max = quantity * type;
    vm_.total = Utilities.getRandom(min, max);
  }
}]);
