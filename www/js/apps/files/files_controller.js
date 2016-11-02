    define(["app",
        "apps/files/files_view",
        "common/common_view",
        "entities/common"],
        function (SpartaMain, View, Common, Model) {
            SpartaMain.module("Files", function (Files, SpartaMain, Backbone, Marionette, $, _) {
                Files.Controller = {
                    filePage: function () { 
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        require(["entities/common"], function () {
                            var fetchingData = SpartaMain.request("common:getModalExact", "api/list_event_upload_file");
                            fetchingData.done(function (Data) {
                                console.log(Data);
                                var page = new Files.filesPageView({
                                    model: Data,
                                });
                                SpartaMain.MainRegion.show(page);
                            });
                        });

                    }  

            };
        });
            return SpartaMain.Files.Controller;
        });
