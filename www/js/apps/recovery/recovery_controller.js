define(["app",
     "apps/recovery/recovery_view",
     "common/common_view"], 
function (SpartaMain, View,LoadView) {
    SpartaMain.module("Recovery.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {
        NewPage.Controller = {
            RecoveryPage: function (uid,callback) {
                var load = new LoadView.Loading();
                 SpartaMain.MainRegion.show(load);
                 require(["entities/common"], function () {
                            var fetchingData = SpartaMain.request("common:getModalExact", "api/recovery_types_list");
                            fetchingData.done(function (Data) {
                                console.log(Data);
                                    var form = new NewPage.New({
                                        model: Data
                                    });
                                    SpartaMain.MainRegion.show(form);
                                    require(["jquery", "jquery-ui"], function () {});
                            });
                }); 

            }
        };

    });
    return SpartaMain.Recovery.NewPage.Controller;
});