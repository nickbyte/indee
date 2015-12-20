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
            "83.87.241.96": [{
                "full_length": "5905.557",
                "seek": [
                    ["2369.54", "3778.530094530383"],
                    ["3772.94", "4072.8871097720143"],
                    ["4066.05", "4289.092142554671"],
                    ["4280.27", "4654.977582648398"],
                    ["4653.41", "4821.2891463273645"],
                    ["4822.57", "4995.916288190279"],
                    ["4360.96", "4663.293160832346"],
                    ["4661.73", "4788.026833591571"],
                    ["4786.96", "4912.760506350795"],
                    ["4912.45", "4962.653975454486"],
                    ["4960.45", "5004.231866374228"],
                    ["5001.06", "5054.125335477917"],
                    ["5050.88", "5128.965539133452"],
                    ["5129.3", "5212.121320972936"],
                    ["5212.09", "5286.96152462847"],
                    ["5287.14", "5345.170571916109"],
                    ["5346.1", "5411.695197387696"],
                    ["5408.39", "5478.2198228592815"],
                    ["5486.17", "5536.42887014692"],
                    ["5534.57", "5602.953495618506"],
                    ["5596.32", "5677.793699274041"],
                    ["5676.86", "5719.371590193783"],
                    ["5719.52", "5727.687168377732"],
                    ["5725.89", "5736.0027465616795"],
                    ["5733.64", "5736.0027465616795"],
                    ["5733.57", "5760.949481113525"],
                    ["5752.75", "5785.89621566537"],
                    ["5784.66", "5794.211793849318"]
                ],
                "pause": "873.61",
                "ontime": "5784.66",
                "timestamp": "2015-12-14 17:12:42"
            }],
            "96.31.225.122": [{
                "timestamp": "2015-12-16 01:11:02",
                "pause": "1.393",
                "ontime": "220",
                "full_length": "0"
            }, {
                "timestamp": "2015-12-16 01:11:26",
                "full_length": "0",
                "ontime": "220",
                "pause": "1.393"
            }, {
                "timestamp": "2015-12-16 01:12:28",
                "pause": "1.393",
                "ontime": "85",
                "full_length": "244.916"
            }, {
                "complete": "244.837",
                "pause": "1.393",
                "timestamp": "2015-12-16 01:16:14",
                "full_view": true,
                "ontime": "10",
                "full_length": "244.943"
            }, {
                "timestamp": "2015-12-16 01:29:46",
                "complete": "244.837",
                "pause": "1.393",
                "ontime": "10",
                "full_length": "244.915"
            }],
            "64.15.218.74": [{
                "timestamp": "2015-12-15 20:55:30",
                "pause": "25.69",
                "ontime": "180",
                "seek": [
                    ["25.69", "78.02891724617524"],
                    ["89.54", "127.31033866481224"]
                ],
                "full_length": "5905.557"
            }]


        }
        $scope.refinedList = [];
        /*
    ipaddress: ,
        - Address
        - ng-santized chart!
        - timestamp
  */
    })