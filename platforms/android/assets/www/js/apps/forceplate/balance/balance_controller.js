define(["app", "apps/forceplate/balance/balance_view", "common/common_view"],
        function (SpartaMain, View, Common) {
            SpartaMain.module("Forceplate.Balance", function (Balance, SpartaMain, Backbone, Marionette, $, _) {
                Balance.Controller = {
                    mobileBalancePage: function () {
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        var fetchingData = SpartaMain.request("common:getModalExact", "api/get_all_balance_for_user");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            var page = new Balance.BalancePage({
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
            return SpartaMain.Forceplate.Balance.Controller;
        });