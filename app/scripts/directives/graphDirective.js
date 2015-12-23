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
                   if(scope.data[0].seek) {
                 var startSeek = parseInt(scope.data[0].seek[0][0]);
                 var endSeek = parseInt(scope.data[0].seek[0][1]);
                   if(d > startSeek && d < endSeek) {
                    return "gray";
                   }
                   }
                    if (scope.data[0].full_view) {
                        return "#53A93F";
                    } else {
                      var onTime = parseInt(scope.data[0].ontime);
            
                      //  console.log(chartData.ontime);
                        if (d > 0 && d <= onTime) {
                            return "#53A93F"
                        } else {

                            return "gray";
                        }
                    }

                    // if (d > 18 && d < 20) {
                    //     return "green"
                    // }
                    // if (d > 10 && d < 50) {
                    //     return "gray";
                    // }



                    // return gray

                })

        },

    };
    return graph;
});
