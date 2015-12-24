angular.module('nickApp').directive('barsChart', function($parse) {
    var dataset = [];
    var k;
    for (k = 0; k < 299; k++) {
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
            var chart = d3.select(element[0]);
            chart.append("svg").attr("class", "chart").attr("height", "40px")
                .selectAll('rect')
                .data(dataset).enter().append("rect")
                .transition().ease("elastic")
                .attr("width", "1px")
                .attr("fill", "gray")
                .attr("height", "40px")
                .attr("x", function(i) {
                    return i + 2;
                })
                .attr("fill", function(d) {
                    var chartData = scope.data;
                    var toPercent = d3.scale.linear();
                    if (scope.data[0].full_length != 0) {
                        console.log(scope.data[0].full_length);
                        toPercent.domain([0, scope.data[0].full_length])
                        toPercent.range([0, 300])
                    } else {
                        return "gray";
                    }
                    if (scope.data[0].seek) {
                        var startSeek = toPercent(parseInt(scope.data[0].seek[0][0]));
                        var endSeek = toPercent(parseInt(scope.data[0].seek[0][1]));
                        if (d > startSeek && d < endSeek) {
                            return "gray";
                        }
                    }
                    if (scope.data[0].full_view == true) {
                        return "#53A93F";
                    }

                    if (scope.data[0].ontime) {
                        var startTime = toPercent(0);
                        var onTime = toPercent(parseInt(scope.data[0].ontime));
                        if (d > startTime && d < onTime) {
                            return "#53A93F";
                        } else {
                            return "gray";
                        }
                    }

                })

        },

    };
    return graph;
});
