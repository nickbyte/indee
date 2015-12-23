'use strict';
/**
 * @ngdoc function
 * @name nickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nickApp
 */
angular.module('nickApp')
    .controller('MainCtrl', function($scope, $http) {
        // process this array and send only what we need!
        // what we need? timestamp full length, ipaddress with address info
$scope.ipList = {
    "204.138.240.254": [{"full_length": "160.149", "full_view": true, "timestamp": "2015-12-21 22:50:13", "ontime": "55", "complete": "159.93"}], 
    "172.91.132.56": [{"full_length": "0", "timestamp": "2015-12-22 05:26:50"}], 
    "216.52.215.232": [{"full_length": "160.149", "full_view": true, "timestamp": "2015-12-22 00:04:51", "ontime": "115", "complete": "160.01"}], 
    "64.239.129.250": [{"full_length": "160.149", "timestamp": "2015-12-21 22:21:46", "seek": [["5.17", "17.31022279411765"]], "pause": "18.05", "ontime": "18.05"}], 
    "166.170.14.89": [{"full_length": "160.14833068847656", "full_view": true, "timestamp": "2015-12-22 00:17:04", "complete": "160.14833068847656"}]
};
$scope.triggerModal = function(){
    $scope.ismodalTriggered = true;
}
$scope.closeModal = function(){
    $scope.ismodalTriggered = false;
}
$scope.updateList = function(list){
    $scope.ipList = list;   
    $scope.ismodalTriggered = false;

}

    })
