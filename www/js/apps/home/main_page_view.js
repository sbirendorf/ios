define(["app",
    "tpl!apps/home/templates/home_page_layout.tpl",
    "tpl!apps/home/templates/activity_list.tpl",
    "tpl!apps/home/templates/left_menu.tpl",
    "tpl!apps/home/templates/charts.tpl",
    "tpl!apps/home/templates/login.tpl",
    "tpl!apps/home/templates/footer.tpl",
    "tpl!apps/home/templates/booking.tpl",
    "tpl!apps/home/templates/more.tpl",
    "backbone.syphon"],
        function (SpartaMain,HomePageLayoutTpl, LandingPageTpl, LeftMenuTpl,ChartsTpl,LoginTpl,FooterTpl,BookTpl,MoreTpl) {
            SpartaMain.module("MobileHome.Main", function (Main, SpartaMain, Backbone, Marionette, $, _) {
                
                Main.HomePageLayout = Marionette.LayoutView.extend({
                    template: HomePageLayoutTpl,
                     className: 'home-page-layout',
                    regions: {
                        nameRegion: "#name-region",
                        actRegion: "#act-region"
                    }
                });
                Main.LandingPage = Marionette.ItemView.extend({
                    template: LandingPageTpl,
                    templateHelpers: function () {
                        return {list: this.model.attributes};
                    },
                });
                Main.LeftMenu = Marionette.ItemView.extend({
                    template: LeftMenuTpl,
                    templateHelpers: function () {
                        var domain='misparta';
                        if(localStorage.sparta_url.indexOf('misparta.spartascience') >= 0 || localStorage.sparta_url.indexOf('dev1') >= 0){
                            domain = 'misparta';
                        }
                        localStorage.sparta_url+"/"+this.model.attributes.img
                        if(this.model.attributes.img ==""){
                             return {img: "./img/anon_user.png",site:domain};
                        }
                        return {img: localStorage.sparta_url+"/"+this.model.attributes.img,site:domain};
                    },
                });
                Main.LogInPage = Marionette.ItemView.extend({
                    template: LoginTpl,
                    templateHelpers: function () {
                        var user= "";
                        if(localStorage.sparta_user != null){
                            user = localStorage.sparta_user;
                        }
                        console.log(user);
                        if(localStorage.sparta_url != null ){
                            return {url: localStorage.sparta_url.slice(7),version: appVersion, userlog:user};
                        }else{
                             return {url: '',version: appVersion, userlog:user};
                        }
                       
                    },
                    events: {
                        "click .sp-login": "login"
                    },
                    login: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $('.login-form').hide();
                        var data = Backbone.Syphon.serialize(this);
                        require(["entities/login"], function (Controller) {
                            SpartaMain.request("login", data);
                        });
                        
                    }
                });
                Main.ChartsPage = Marionette.ItemView.extend({
                    template: ChartsTpl,
                    templateHelpers: function () {
                        return {total: this.model.attributes};
                    },
                    onShow: function () {
                        if (Object.keys(this.model.attributes).length>0) {
                            $(".no-data-charts").css("display","none");
                        }
                        var dataset =this.model.attributes;
                        $.each( dataset, function( key, value ) {
                            var chartData = [];
                            var chartDates = [];
                                $.each( value.data, function(k,val ) {
                                    chartData.push(val.fact_value);
                                    chartDates.push(val.fact_event_date.substring(5, 10));
                                });
                                   var lineChartData = {
                                          labels: chartDates,
                                          datasets: [{
                                            label: "My First dataset",
                                            fillColor: "rgba(100, 181, 246, 0.5)",
                                            strokeColor: "#90caf9",
                                            pointColor: "transparent",
                                            pointStrokeColor: "rgba(41, 128, 185, 0)",
                                            pointHighlightFill: "rgba(41, 128, 185, 0.9)",
                                            pointHighlightStroke: "rgba(41, 128, 185, 0)",
                                            data: chartData
                                          }]
                                        };

                                setTimeout(
                                  function() 
                                  {
                                      var ctx = document.getElementById("canvas"+key).getContext("2d");
                                        window.myLine = new Chart(ctx).Line(lineChartData, {
                                            responsive: true,
                                          });
                                  },
                                500);
                        });//end of foreach
                        
                    }
                });
                Main.bookPage = Marionette.ItemView.extend({
                    template: BookTpl
                });
                Main.morePage = Marionette.ItemView.extend({
                    templateHelpers: function () {
                        return {url: localStorage.sparta_url};
                    },
                    template: MoreTpl
                });
            });
            return SpartaMain.MobileHome.Main;
        });
