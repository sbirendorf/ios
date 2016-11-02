define(["app", "apps/workouts/edit/workout_edit_view","common/common_view"],
function (SpartaMain, View,Common) {
    SpartaMain.module("Workout.EditPage", function (EditPage, SpartaMain, Backbone, Marionette, $, _) {
        EditPage.Controller = {
            editWorkoutsPage: function (nid) {
                var load = new Common.Loading();
                SpartaMain.MainRegion.show(load);
                require(["entities/common"], function () {
                        var fetchingData = SpartaMain.request("common:getModal", "api/edit_workout/"+nid);
                        fetchingData.done(function (Data) {
                                console.log(Data);
                            var need = new EditPage.FormPage({
                                model: Data
                            });
                            SpartaMain.MainRegion.show(need);
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
    return SpartaMain.Workout.EditPage.Controller;
});