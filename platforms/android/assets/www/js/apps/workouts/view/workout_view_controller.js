define(["app", "apps/workouts/view/workout_view_view","common/common_view"],
function (SpartaMain, View,Common) {
    SpartaMain.module("Workout.ViewPage", function (ViewPage, SpartaMain, Backbone, Marionette, $, _) {
        ViewPage.Controller = {
            viewWorkoutsPage: function (tid,uid,day) {
                var load = new Common.Loading();
                SpartaMain.MainRegion.show(load);
                require(["entities/common"], function () {
                        var fetchingData = SpartaMain.request("common:getModal", "api/new_workout/"+tid+"/"+uid+"/"+day+"/1");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            Data.attributes.uid = uid;
                            var wo = new ViewPage.FormPage({
                                model: Data
                            });
                            SpartaMain.MainRegion.show(wo);
                        });
                        fetchingData.fail(function (err) {
                                var error = new Common.ServerError({
                                    error:err
                                });
                            SpartaMain.MainRegion.show(error);
                        });
                });
            }
        };
    });
    return SpartaMain.Workout.ViewPage.Controller;
});