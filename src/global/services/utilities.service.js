var app = angular.module('dmTools');

app.service('Utilities', function () {
  var service_ = this;
  service_.customIdCounter = 1000;

  service_.getCustomId = getCustomId_;
  service_.getRandom = getRandom_;

  /**
   * Return a custom id.
   */
  function getCustomId_() {
    var returnId = 'cust-' + service_.customIdCounter;
    service_.customIdCounter++;
    return returnId;
  }

  /**
   * Return an inclusive random number between two integers.
   *
   * @param {Number} min The minimum value to be returned.
   * @param {Number} max The maximum value to be returned.
   */
  function getRandom_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

});
