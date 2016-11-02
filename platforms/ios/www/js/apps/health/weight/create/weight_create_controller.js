define(["app", "apps/health/weight/create/weight_create_view","common/common_view"], function (SpartaMain, View,LoadView) {
    SpartaMain.module("Weight.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {
        NewPage.Controller = {
            CreateWeightPage: function () {
                var load = new LoadView.Loading();
                 SpartaMain.MainRegion.show(load);
                 
                var form = new NewPage.New({});
                SpartaMain.MainRegion.show(form);
                require(["jquery", "jquery-ui"], function () {});

            }
        };

    });
    return SpartaMain.Weight.NewPage.Controller;
});