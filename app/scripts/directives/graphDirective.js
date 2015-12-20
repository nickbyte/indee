angular.module('nickApp').directive('barsChart', function($parse) {
    var dataset = [];
    var k;
    for (k = 0; k < 321; k++) {
        dataset.push(k);
    }
    var graph = {
        restrict: 'E',
        replace: false,
        scope: {
            data: '=chartData'
        },
        transclude: true,
        link: function(scope, element, attrs) {
            var getLength = function(value) {
                var total_length = 0
                angular.forEach(scope.ipList, function(value, key) {
                    angular.forEach(value, function(key, index, val) {
                        var fullLength = parseInt(key['full_length'])
                        if (parseInt(key['full_length']) > 0) {
                            total_length = fullLength
                            return
                        }
                    });
                }, scope.refinedList);
                return total_length
            }
            var video_length = getLength(scope.ipList);
            var toPercent = d3.scale.linear()
            toPercent.domain([0, video_length])
            toPercent.range([0, 320]);
            var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
                .selectAll('div')
                .data(dataset).enter().append("div")
                .transition().ease("elastic")
                .style("width", "1px")
                .style("height", "40px")
                .style("float", "left")
                .style("display", "inline-block")
                .style("background", "green");
        }

    };
    return graph;
});
