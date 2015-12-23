angular.module('nickApp').directive('location', function($parse, $http) { 
  var location = {
        restrict: 'E',
        replace: false,
        scope: {
            data: '=locationData'
        },
        transclude: true,
        link: function(scope, element, attrs) {
        // console.log(attrs.data, 'attrs');
       var queryURL = 'http://freegeoip.net/json/'+attrs.data+''
        $http.get(queryURL).then(function(response){
        scope.locationData = response.data;
        });
        },
        template: ['{{locationData.city}}, {{locationData.country_name}}'].join("") 
    };
    return location;
});