'use strict';
angular.module('nickApp').directive('showdate', function($parse, $http) {
    var datetime = {
        restrict: 'E',
        replace: false,
        scope: {
            data: '=showdateData'
        },
        transclude: true,
        link: function(scope, element, attrs) {
            //console.log( Date.parse(attrs.data));
            scope.newdatetime = Date.parse(attrs.data);
        },
        template: ["<p> {{newdatetime | date:'medium'}} </p>"].join("")
    };
    return datetime;
});
