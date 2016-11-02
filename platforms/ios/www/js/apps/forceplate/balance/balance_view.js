define(["app",
    "tpl!apps/forceplate/templates/balance.tpl",
    "backbone.syphon"],
        function (SpartaMain, BalanceTpl) {
            SpartaMain.module("Forceplate.Balance", function (Balance, SpartaMain, Backbone, Marionette, $, _) {
                Balance.BalancePage = Marionette.ItemView.extend({
                    className: 'balance-page',
                    templateHelpers: function () {
                        var data = this.model.attributes.data;
                        return {total_upper: data.jumps.upper,
                                total_lower: data.jumps.lower
                           };
                    },
                    template: BalanceTpl,
                    onShow: function (){
                        var lineLowDates =[];
                        var lineLowLeft =[];
                        var lineLowRight =[];
                        var data = this.model.attributes.data.jumps;  
                        for(var c=0; c<data.lower.length; c++){
                            lineLowDates[c]=data.lower[c].date;
                            lineLowLeft[c]=data.lower[c].left;
                            lineLowRight[c]=data.lower[c].right;
                            var barData = {
                                labels: [data.lower[c].date],
                                datasets: [
                                    {
                                        fillColor: '#396410',
                                        data: [data.lower[c].left]
                                    },
                                    {
                                        fillColor: '#3a6078',
                                        data: [data.lower[c].right]
                                    }
                                ]
                            };
                            var context = document.getElementById('LowbarChart'+c).getContext('2d');
                            var clientsChart = new Chart(context).Bar(barData);
                        }
                    var lineChartData = {
                        labels: lineLowDates.reverse(),
                        datasets: [{
                            strokeColor: '#396410',
                            pointColor: '#396410',
                             fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowLeft.reverse()
                        }, {
                            strokeColor: '#3a6078',
                            pointColor: "#3a6078",
                             fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowRight.reverse()
                        },
                        ]

                    };

                    var ctx = document.getElementById("canvas").getContext("2d");
                    var LineChartDemo = new Chart(ctx).Line(lineChartData, {
                        pointDotRadius: 3,
                        bezierCurve: false,
                        scaleShowVerticalLines: false,
                        backgroundColor: "#fff",
                        scaleGridLineColor: "black"
                    });
                    /// lets do the same for the upper body
                    
                        var lineLowDates =[];
                        var lineLowLeft =[];
                        var lineLowRight =[];
                        var data = this.model.attributes.data.jumps;  
                        for(var c=0; c<data.upper.length; c++){
                            lineLowDates[c]=data.upper[c].date;
                            lineLowLeft[c]=data.upper[c].left;
                            lineLowRight[c]=data.upper[c].right;
                            var barData = {
                                labels: [data.upper[c].date],
                                datasets: [
                                    {
                                        fillColor: '#396410',
                                        data: [data.upper[c].left]
                                    },
                                    {
                                        fillColor: '#3a6078',
                                        data: [data.upper[c].right]
                                    }
                                ]
                            };
                            var context = document.getElementById('UpperbarChart'+c).getContext('2d');
                            var clientsChart = new Chart(context).Bar(barData);
                        }
                    var lineChartData = {
                        labels: lineLowDates,
                        datasets: [{
                            strokeColor: '#396410',
                            pointColor: '#396410',
                            fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowLeft
                        }, {
                            strokeColor: '#3a6078',
                            pointColor: "#3a6078",
                            fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowRight
                        },
                        ]

                    };

                    var ctx = document.getElementById("Uppercanvas").getContext("2d");
                    var LineChartDemo = new Chart(ctx).Line(lineChartData, {
                        pointDotRadius: 3,
                        bezierCurve: false,
                        scaleShowVerticalLines: false,
                        backgroundColor: "#fff",
                        scaleGridLineColor: "black"
                    });

                      setTimeout(function () {
                           var swiper = new Swiper('.swiper-container', {
                                pagination: '.swiper-pagination',
                                paginationClickable: true,
                                spaceBetween: 30,
                                loop: true
                            });
                    },350);
                        
                    }
                });
            });
            return SpartaMain.Forceplate.Balance;
        });
