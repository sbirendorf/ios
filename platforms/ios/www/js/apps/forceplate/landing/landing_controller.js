define(["app", "apps/forceplate/landing/landing_view", "common/common_view"],
        function (SpartaMain, View, Common) {
            SpartaMain.module("Forceplate.Landing", function (Landing, SpartaMain, Backbone, Marionette, $, _) {
                Landing.Controller = {
                    mobileLandingPage: function () {
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        var fetchingData = SpartaMain.request("common:getModalExact", "api/get_all_landing_for_user");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            var page = new Landing.LandingPage({
                                model: Data
                            });
                            SpartaMain.MainRegion.show(page);
                        });
                        fetchingData.fail(function (err) {
                            var error = new Common.ServerError({
                                error: err
                            });
                            SpartaMain.MainRegion.show(error);
                        });
                    }
                };
            });
            return SpartaMain.Forceplate.Landing.Controller;
        });