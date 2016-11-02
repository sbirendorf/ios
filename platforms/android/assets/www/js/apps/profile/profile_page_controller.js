    define(["app",
        "apps/profile/profile_page_view",
        "common/common_view",
        "entities/common"],
        function (SpartaMain, View, Common, Model) {
            SpartaMain.module("MobileHome.Profile", function (Profile, SpartaMain, Backbone, Marionette, $, _) {
                Profile.Controller = {
                    profileEditPage: function () { 
                        var load = new Common.Loading();
                        SpartaMain.MainRegion.show(load);
                        require(["entities/common"], function () {
                            var fetchingData = SpartaMain.request("common:getModal", "api/edit_my_user_profile");
                            fetchingData.done(function (Data) {
                                var page = new Profile.EditAthleteProfilePage({
                                    model: Data,
                                });
                                SpartaMain.MainRegion.show(page);
                            });
                        });

                    },
                    taxonomySport: function (sport) {
                        var fetchingData = SpartaMain.request("common:getModal", "api/get_user_sport_position_sub_positions/"+sport);
                        fetchingData.done(function (Data) {
                            var need = new Profile.SportTaxonomy({
                                model: Data,
                            });
                        });         
                    },
                    taxonomyPosition: function (sport,position) {
                        var fetchingData = SpartaMain.request("common:getModal", "api/get_user_sport_position_sub_positions/"+sport+"/"+position);
                        fetchingData.done(function (Data) {
                            var need = new Profile.PositionTaxonomy({
                                model: Data,
                            });
                        });         
                    },
                    userImage: function () {
                        var load = new Profile.UploadPic();
                        load.on("show", function () {
                            var div = this.$el;
                            require(["jquery", "jquery-ui"], function () {
                                div.dialog({
                                    modal: true
                                });
                            });
                        });
                    SpartaMain.DialogRegion.show(load); // render the layout
                }


            };
        });
            return SpartaMain.MobileHome.Profile.Controller;
        });
