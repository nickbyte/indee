'use strict';
angular.module('nickApp').directive('showmap', function($parse, $http) {
    var map = {
        restrict: 'E',
        replace: false,
        scope: {
            data: '=locationData'
        },
        transclude: true,
        link: function(scope, element, attrs) {
            var queryURL = 'http://freegeoip.net/json/' + attrs.data + '';
            $http.get(queryURL).then(function(response) {
                scope.center = {
                    lat: response.data.latitude,
                    lng: response.data.longitude,
                    zoom: 8
                }
            });
        },
        template: ['<ng-map center="{{center.lat}},{{center.lng}}" zoom="10" id="map-me"></ng-map>'].join("")
    };
    return map;
});
