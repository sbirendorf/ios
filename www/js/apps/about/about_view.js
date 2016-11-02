define(["app",
    "tpl!apps/about/templates/about.tpl",
    "backbone.syphon"],
        function (SpartaMain, AboutTpl) {
            SpartaMain.module("About", function (About, SpartaMain, Backbone, Marionette, $, _) {
                
                About.aboutPageView = Marionette.ItemView.extend({
                    template: AboutTpl, 
                    templateHelpers: function () {
                        return {version: appVersion};
                    },
                });
            });
            return SpartaMain.About;
        });
