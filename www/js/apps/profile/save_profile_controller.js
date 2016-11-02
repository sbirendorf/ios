define(["app",
    "entities/common",
    "apps/router",
    "common/common_view"],
        function (SpartaMain, Model, Router, CommonView) {
            SpartaMain.module("MobileHome.Profile", function (Profile, SpartaMain, Backbone, Marionette, $, _) {
                Profile.Controller = {
                    saveProfile: function (data) {
                        var load = new CommonView.Loading();
                        SpartaMain.MainRegion.show(load);
                        console.log(data);
                        var fetchingData = SpartaMain.request("common:postData",'api/save_user', data);
                        fetchingData.done(function (Data) {
                            // check for form validation
                            if (!Data.attributes.error) {
                                SpartaMain.DialogRegion.empty();
                                var msg = new CommonView.Messages({model: Data});
                                // check if the server return an error
                                if (Data.attributes.data.error) {
                                    //display the error from the server 
                                    SpartaMain.MessageRegion.show(msg);
                                } else {
                                    //no error go to callback function
                                   
                                     require(["apps/profile/profile_page_controller"], function (Controller) {
                                        Controller.profileEditPage();
                                        SpartaMain.navigate('profile/edit');
                                    });
                                    var load = new CommonView.Loading();
                                    SpartaMain.MainRegion.show(load);
                                    
                                    SpartaMain.MessageRegion.show(msg);
                                    SpartaMain.DialogRegion.empty();
                                }
                            } else {
                                //form is not valid , render error
                                var msg = new CommonView.FormError({model: Data});
                            }
                        });
                        fetchingData.fail(function (err) {
                            var error = new CommonView.ServerError({
                                error: err
                            });
                            SpartaMain.MainRegion.show(error);
                        });
                    }
                };

            });
            return SpartaMain.MobileHome.Profile.Controller;
        });
