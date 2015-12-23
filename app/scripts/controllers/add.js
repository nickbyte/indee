'use strict';
/**
 * @ngdoc function
 * @name nickApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the nickApp
 */
angular.module('nickApp')
    .controller('AddCtrl', function($scope, $location) {

        $scope.updateList = function(list) {
            $scope.ipList = list;
            $location.path('/');
        }

    })
