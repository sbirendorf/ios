define(["app",
    "tpl!apps/forceplate/templates/scans.tpl",
    "backbone.syphon"],
        function (SpartaMain, ScansTpl) {
            SpartaMain.module("Forceplate.Scan", function (Scan, SpartaMain, Backbone, Marionette, $, _) {
                Scan.ScansPage = Marionette.ItemView.extend({
                    className: 'scan-page',
                    templateHelpers: function () {
                        var data = this.model.attributes.data;
                        return {total_scans: data.date,
                                load: data.load,
                                explode: data.explode,
                                drive: data.drive
                           };
                    },
                    template: ScansTpl,
                    onShow: function (){
                        var lineDates =[];
                        var lineLoad =[];
                        var lineDrive =[];
                        var lineExplode =[];
                        var data = this.model.attributes.data; // .reverse()
                        var count = 0;
                        // for(var c=data.date.length-1; c>=0; c--){
                        for(var c=0;  c<data.date.length; c++){
                            lineDates[c]=data.date[c];
                            lineLoad[c]=data.load[c];
                            lineExplode[c]=data.explode[c];
                            lineDrive[c]=data.drive[c];
                            var barData = {
                                labels: [data.date[c]+", BW "+data.weight[c]],
                                datasets: [
                                    {
                                        fillColor: '#9C9192',
                                        data: [data.load[c]]
                                    },
                                    {
                                        fillColor: '#000',
                                        data: [data.explode[c]]
                                    },
                                    {
                                        fillColor: '#B83343',
                                        data: [data.drive[c]]
                                    }
                                ]
                            };
                            var context = document.getElementById('barChart'+count).getContext('2d');
                            var clientsChart = new Chart(context).Bar(barData);
                            count++;
                        }
            var lineChartData = {
                labels: lineDates.reverse(),
                datasets: [{
                    strokeColor: '#9C9192',
                    pointColor: '#9C9192',
                    fillColor: "rgba(220,220,220,0.01)",
                    data: lineLoad.reverse()
                }, {
                    strokeColor: '#000',
                    pointColor: "#000",
                    fillColor: "rgba(220,220,220,0.01)",
                    data: lineExplode.reverse()
                },
                {
                    strokeColor: '#B83343',
                    pointColor: "#B83343",
                    fillColor: "rgba(220,220,220,0.01)",
                    data: lineDrive.reverse()
                }]

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
            },750);
                        
    }
                });
            });
            return SpartaMain.Forceplate.Scan;
        });