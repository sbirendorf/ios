    define(["app",
        "apps/about/about_view",
        "common/common_view",
        "entities/common"],
        function (SpartaMain, View, Common, Model) {
            SpartaMain.module("About", function (About, SpartaMain, Backbone, Marionette, $, _) {
                About.Controller = {
                    aboutPage: function () { 
                        var page = new About.aboutPageView({
                        });
                        SpartaMain.MainRegion.show(page);
                           
                        

                    }  

            };
        });
            return SpartaMain.About.Controller;
        });
