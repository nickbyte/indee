'use strict';
/**
 * @ngdoc function
 * @name nickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nickApp
 */
angular.module('nickApp')
    .controller('MainCtrl', function($scope, $http, $localStorage) {
        // process this array and send only what we need!
        // what we need? timestamp full length, ipaddress with address info
        $scope.$storage = $localStorage;
        //function to check if object is empty..
        $scope.isEmpty = function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }
        $scope.setDummydata = function() {
                $scope.ipList = {
                    "204.138.240.254": [{
                        "full_length": "160.149",
                        "full_view": true,
                        "timestamp": "2015-12-21 22:50:13",
                        "ontime": "55",
                        "complete": "159.93"
                    }],
                    "172.91.132.56": [{
                        "full_length": "0",
                        "timestamp": "2015-12-22 05:26:50"
                    }],
                    "216.52.215.232": [{
                        "full_length": "160.149",
                        "full_view": true,
                        "timestamp": "2015-12-22 00:04:51",
                        "ontime": "115",
                        "complete": "160.01"
                    }],
                    "64.239.129.250": [{
                        "full_length": "160.149",
                        "timestamp": "2015-12-21 22:21:46",
                        "seek": [
                            ["18.17", "40.31022279411765"]
                        ],
                        "pause": "18.05",
                        "ontime": "120"
                    }],
                    "166.170.14.89": [{
                        "full_length": "160.14833068847656",
                        "full_view": true,
                        "timestamp": "2015-12-22 00:17:04",
                        "complete": "160.14833068847656"
                    }],
                };
                $scope.$storage.ipList = JSON.stringify($scope.ipList);
            }
            // watching the ipList object to see if its empty to assign dummy data.
        $scope.$watch(function(scope) {
            if ($scope.isEmpty(scope.ipList)) {
                delete $scope.$storage.ipList;
                $scope.setDummydata();
            };
        })
        if ($scope.$storage.ipList) {
            $scope.ipList = $scope.$storage.ipList;
        } else {
            $scope.setDummydata();
        }
        $scope.triggerModal = function() {
            $scope.ismodalTriggered = true;
        }
        $scope.closeModal = function() {
            $scope.ismodalTriggered = false;
        }
        $scope.getTimestamp = function() {
            var date = new Date()
            var year = date.getFullYear();
            var month = date.getUTCMonth();
            var day = date.getUTCDay();
            var h = date.getUTCHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var timestamp = year + '-' + month + "-" + day + " " + h + ":" + m + ":" + s + "";
            console.log(timestamp);
            return timestamp;
        }
        $scope.updateList = function(viewers) {

            //lets make a nice timestamp
            var date = new Date()
            var timestamp = date.getTime();

            // Extract existing data and assign it to a variable;
            var tempstr = [{
                "full_length": viewers.fullLength,
                "seek": [
                    [viewers.skipStart, viewers.skipEnd]
                ],
                "full_view": viewers.fullView,
                "timestamp": timestamp,
                "ontime": viewers.onTime
            }];
            console.log(tempstr);
            $scope.ipList[viewers.ip] = tempstr;
            $scope.$storage.ipList = $scope.ipList;
            $scope.ismodalTriggered = false;
        }
        $scope.removeIp = function(key) {
            delete $scope.ipList[key];
            $scope.$storage.ipList = $scope.ipList;
        };

    })
