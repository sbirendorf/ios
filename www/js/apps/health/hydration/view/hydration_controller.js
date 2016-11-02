define(["app", "apps/health/hydration/view/hydration_view","common/common_view"], function (SpartaMain, View,LoadView) {
    SpartaMain.module("Hydration.ViewPage", function (ViewPage, SpartaMain, Backbone, Marionette, $, _) {
        ViewPage.Controller = {
            hydrationPage: function () {
                var load = new LoadView.Loading();
                SpartaMain.MainRegion.show(load);
                    require(["entities/common"], function () {
                        var fetchingData = SpartaMain.request("common:getModal", "api/get_athlete_hydration");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            var page = new ViewPage.viewPage({
                                model: Data
                            });
                            SpartaMain.MainRegion.show(page);
                        });
                        fetchingData.fail(function (err) {
                            var error = new LoadView.ServerError({
                                error: err
                            });
                            SpartaMain.MainRegion.show(error);
                        });
                    });// end require 

            }
        };

    });
    return SpartaMain.Hydration.ViewPage.Controller;
});