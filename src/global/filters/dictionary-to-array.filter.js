var app = angular.module('dmTools');

app.filter('dictionaryToArray', function($filter){
  return function(input){
    var result = [];
    angular.forEach(input, function(v,k){
      result.push(v);
    });
    return result;
  };
});
