define(["app", "apps/workouts/list/workout_list_view","common/common_view"],
function (SpartaMain, View,Common) {
    SpartaMain.module("Workout.List", function (List, SpartaMain, Backbone, Marionette, $, _) {
        List.Controller = {
            WorkoutsList: function () {
                var load = new Common.Loading();
                SpartaMain.MainRegion.show(load);
                require(["entities/common"], function () {
                        var fetchingData = SpartaMain.request("common:getModalExact", "get_all_athlete_workout");
                        fetchingData.done(function (Data) {
                            console.log(Data);
                            var workouts = new List.WorkoutsListTabs({
                                model: Data
                            });
                            SpartaMain.MainRegion.show(workouts);
                        });
                        fetchingData.fail(function (err) {
                                var error = new Common.ServerError({
                                    error:err
                                });
                            SpartaMain.MainRegion.show(error);
                        });
                });
            },
            WorkoutsActivate: function (nid) { 
                require(["entities/common"], function () {
                    var load = new Common.Loading();
                    SpartaMain.MainRegion.show(load);
                    var fetchingData = SpartaMain.request("common:postData", "athlete_activate_wrkout_and_view/"+nid);
                        setTimeout(function(){
                            List.Controller.WorkoutsList();
                        }, 1000);
                });
            }
        };
    });
    return SpartaMain.Workout.List.Controller;
});