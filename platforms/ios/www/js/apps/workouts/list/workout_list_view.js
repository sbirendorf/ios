define(["app",
    "tpl!apps/workouts/templates/workout_list_tabs.tpl",
    "backbone.syphon"],
        function (SpartaMain,WorkoutsTabsTpl) {
            SpartaMain.module("Workout.List", function (List, SpartaMain, Backbone, Marionette, $, _) {
                List.WorkoutsListTabs = Marionette.ItemView.extend({
                    className: 'workout_tabs_list',
                    template: WorkoutsTabsTpl,
                    events: {
                        "click .wo-activate": "WorkoutActivate"
                    },
                    WorkoutActivate: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        require(["apps/workouts/list/workout_list_controller"], function (workouts) {
                            workouts.WorkoutsActivate($(e.target)[0].id);
                        });
                    }
                });
               

     
            });
            return SpartaMain.Workout.List;
        });
 