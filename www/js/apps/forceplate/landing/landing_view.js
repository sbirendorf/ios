define(["app",
    "tpl!apps/forceplate/templates/landing.tpl",
    "backbone.syphon"],
        function (SpartaMain, LandingTpl) {
            SpartaMain.module("Forceplate.Landing", function (Landing, SpartaMain, Backbone, Marionette, $, _) {
                Landing.LandingPage = Marionette.ItemView.extend({
                    className: 'balance-page',
                    templateHelpers: function () {
                        var data = this.model.attributes.data;
                        return {total_lower: data.scans
                           };
                    },
                    template: LandingTpl,
                    onShow: function (){
                        var lineLowDates =[];
                        var lineLowLeft =[];
                        var lineLowRight =[];
                        var data = this.model.attributes.data;  
                        for(var c=0; c<data.scans.length; c++){
                            lineLowDates[c]=data.scans[c].date;
                            lineLowLeft[c]=data.scans[c].left;
                            lineLowRight[c]=data.scans[c].right;
                            var barData = {
                                labels: [data.scans[c].date],
                                datasets: [
                                    {
                                        fillColor: '#396410',
                                        data: [data.scans[c].left]
                                    },
                                    {
                                        fillColor: '#3a6078',
                                        data: [data.scans[c].right]
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
            return SpartaMain.Forceplate.Landing;
        });
