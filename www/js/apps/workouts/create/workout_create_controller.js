define(["app", "apps/workouts/create/workout_create_view","common/common_view"],
function (SpartaMain, View,Common) {
    SpartaMain.module("Workout.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {
        NewPage.Controller = {
            createWorkoutsPage: function (tid,uid,day) {
                var load = new Common.Loading();
                SpartaMain.MainRegion.show(load);
                require(["entities/common"], function () {
                        var fetchingData = SpartaMain.request("common:getModal", "api/new_workout/"+tid+"/"+uid+"/"+day);
                        fetchingData.done(function (Data) {
                                var nid = Data.attributes.nid;
                            // var need = new NewPage.FormPage({
                            //     model: Data
                            // });
                            // SpartaMain.MainRegion.show(need);
                            require(["apps/workouts/edit/workout_edit_controller"], function (Controller) {
                                Controller.editWorkoutsPage(nid);
                                SpartaMain.navigate('#workout/'+nid+'/edit');
                            });
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
    return SpartaMain.Workout.NewPage.Controller;
});