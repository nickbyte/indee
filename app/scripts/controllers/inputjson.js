'use strict';
/**
 * @ngdoc function
 * @name nickApp.controller:inputJsonCtrl
 * @description
 * # inputJsonCtrl
 * Controller of the inputJsonCtrl
 */
angular.module('nickApp')
    .controller('JsonCtrl', function($scope) {
        $scope.invalidjson = false;
        $scope.updateList = function(json) {
            if (/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                //the json is ok
                $scope.ipList = angular.fromJson(json);
                $scope.ismodalTriggered = false;
            } else {
                $scope.invalidjson = true;
            }
            // $scope.ipList = [];    

            //  console.log($scope.ipList);

            //lets make a nice timestamp
            // var date = new Date()
            // var timestamp = date.getTime();
            // // Extract existing data and assign it to a variable;
            // var tempstr = [{
            //     "full_length": viewers.fullLength,
            //     "seek": [
            //         [viewers.skipStart, viewers.skipEnd]
            //     ],
            //     "full_view": viewers.fullView,
            //     "timestamp": timestamp,
            //     "ontime": viewers.onTime
            // }];
            // $scope.ipList[viewers.ip] = tempstr;
            // $scope.$storage.ipList = $scope.ipList;

        };
        $scope.removeIp = function(key) {
            delete $scope.ipList[key];
            $scope.$storage.ipList = $scope.ipList;
        };
        $scope.triggerModal = function() {
            $scope.ismodalTriggered = true;
        };
        $scope.closeModal = function() {
            $scope.ismodalTriggered = false;
        };
    });
