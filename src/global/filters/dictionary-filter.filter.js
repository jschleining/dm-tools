var app = angular.module('dmTools');

app.filter('dictionaryFilter', function($filter){
  return function(input, query){
    if(!query) {
      return input;
    }
    var result = [];
    angular.forEach(input, function(v,k){
        result.push(v);          
    });
    var refined = $filter('filter')(result, query);
    return refined;
  };
});
