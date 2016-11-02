define(["app", "entities/common", "apps/forceplate/scan/scan_view", "common/common_view"],
        function (SpartaMain,Modal, View, Common) {
            SpartaMain.module("Forceplate.Scan", function (Scan, SpartaMain, Backbone, Marionette, $, _) {
                Scan.Controller = {
                    mobileScanPage: function () {
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        var fetchingData = SpartaMain.request("common:getModalExact", "get_all_scan_for_user/10");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            var page = new Scan.ScansPage({
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
            return SpartaMain.Forceplate.Scan.Controller;
        });