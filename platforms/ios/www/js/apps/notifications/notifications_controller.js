    define(["app",
        "apps/notifications/notifications_view",
        "common/common_view",
        "entities/common"],
        function (SpartaMain, View, Common, Model) {
            SpartaMain.module("Notifications", function (Notifications, SpartaMain, Backbone, Marionette, $, _) {
                Notifications.Controller = {
                    notificationsPage: function () { 
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        require(["entities/common"], function () {
                            var fetchingData = SpartaMain.request("common:getModal", "api/edit_my_user_profile");
                            fetchingData.done(function (Data) {
                                var page = new Notifications.notificationsPageView({
                                    model: Data,
                                });
                                SpartaMain.MainRegion.show(page);
                            });
                        });

                    }  

            };
        });
            return SpartaMain.Notifications.Controller;
        });
